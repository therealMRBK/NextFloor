/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var M={ca:"6e08c894e522",cs:"8d968de16511",da:"0fe66a82bf2a",es:"329287087de5",fi:"9a17bc084f56",fr:"c443a64124c7",hu:"27ba348531dc",it:"ba9e4fdb7638",nb:"c5ea24fb9ef6",nl:"d1c4cb5b6447",pl:"66787f7f5790",pt:"42ed5aa76c57",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"e5aae4f0deb9",tr:"7c83ce1c3372","zh-tw":"2aab5ac671a2",zh:"852952205f3b"};var Io=globalThis,Do=Io.ShadowRoot&&(Io.ShadyCSS===void 0||Io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rs=Symbol(),Ac=new WeakMap,vr=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Rs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Do&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Ac.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ac.set(n,e))}return e}toString(){return this.cssText}},Fc=t=>new vr(typeof t=="string"?t:t+"",void 0,Rs),le=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new vr(n,t,Rs)},zc=(t,e)=>{if(Do)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=Io.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},Es=Do?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Fc(n)})(t):t;var{is:nb,defineProperty:rb,getOwnPropertyDescriptor:ob,getOwnPropertyNames:ib,getOwnPropertySymbols:sb,getPrototypeOf:ab}=Object,Oo=globalThis,Tc=Oo.trustedTypes,lb=Tc?Tc.emptyScript:"",cb=Oo.reactiveElementPolyfillSupport,kr=(t,e)=>t,As={toAttribute(t,e){switch(e){case Boolean:t=t?lb:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ic=(t,e)=>!nb(t,e),Pc={attribute:!0,type:String,converter:As,reflect:!1,useDefault:!1,hasChanged:Ic};Symbol.metadata??=Symbol("metadata"),Oo.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Pc){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&rb(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=ob(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pc}static _$Ei(){if(this.hasOwnProperty(kr("elementProperties")))return;let e=ab(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kr("properties"))){let n=this.properties,r=[...ib(n),...sb(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(Es(o))}else e!==void 0&&n.push(Es(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zc(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:As).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:As;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Ic)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[kr("elementProperties")]=new Map,yt[kr("finalized")]=new Map,cb?.({ReactiveElement:yt}),(Oo.reactiveElementVersions??=[]).push("2.1.2");var zs=globalThis,Dc=t=>t,Lo=zs.trustedTypes,Oc=Lo?Lo.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ts="$lit$",wt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ps="?"+wt,ub=`<${Ps}>`,Jt=document,$r=()=>Jt.createComment(""),Sr=t=>t===null||typeof t!="object"&&typeof t!="function",Is=Array.isArray,Bc=t=>Is(t)||typeof t?.[Symbol.iterator]=="function",Fs=`[ 	
\f\r]`,xr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lc=/-->/g,Hc=/>/g,Yt=RegExp(`>|${Fs}(?:([^\\s"'>=/]+)(${Fs}*=${Fs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cc=/'/g,Nc=/"/g,Vc=/^(?:script|style|textarea|title)$/i,Ds=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),m=Ds(1),F=Ds(2),Jx=Ds(3),vt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Wc=new WeakMap,Xt=Jt.createTreeWalker(Jt,129);function Kc(t,e){if(!Is(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oc!==void 0?Oc.createHTML(e):e}var Gc=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=xr;for(let a=0;a<n;a++){let l=t[a],c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===xr?u[1]==="!--"?s=Lc:u[1]!==void 0?s=Hc:u[2]!==void 0?(Vc.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Yt):u[3]!==void 0&&(s=Yt):s===Yt?u[0]===">"?(s=o??xr,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Yt:u[3]==='"'?Nc:Cc):s===Nc||s===Cc?s=Yt:s===Lc||s===Hc?s=xr:(s=Yt,o=void 0);let p=s===Yt&&t[a+1].startsWith("/>")?" ":"";i+=s===xr?l+ub:d>=0?(r.push(c),l.slice(0,d)+Ts+l.slice(d)+wt+p):l+wt+(d===-2?a:p)}return[Kc(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Mr=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Gc(e,n);if(this.el=t.createElement(c,r),Xt.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Xt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Ts)){let h=u[s++],p=o.getAttribute(d).split(wt),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Co:f[1]==="?"?No:f[1]==="@"?Wo:en}),o.removeAttribute(d)}else d.startsWith(wt)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Vc.test(o.tagName)){let d=o.textContent.split(wt),h=d.length-1;if(h>0){o.textContent=Lo?Lo.emptyScript:"";for(let p=0;p<h;p++)o.append(d[p],$r()),Xt.nextNode(),l.push({type:2,index:++i});o.append(d[h],$r())}}}else if(o.nodeType===8)if(o.data===Ps)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(wt,d+1))!==-1;)l.push({type:7,index:i}),d+=wt.length-1}i++}}static createElement(e,n){let r=Jt.createElement("template");return r.innerHTML=e,r}};function Qt(t,e,n=t,r){if(e===vt)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=Sr(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=Qt(t,o._$AS(t,e.values),o,r)),e}var Ho=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??Jt).importNode(n,!0);Xt.currentNode=o;let i=Xt.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Mn(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Bo(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Xt.nextNode(),s++)}return Xt.currentNode=Jt,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},Mn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Qt(this,e,n),Sr(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==vt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Sr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Jt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Mr.createElement(Kc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new Ho(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=Wc.get(e.strings);return n===void 0&&Wc.set(e.strings,n=new Mr(e)),n}k(e){Is(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O($r()),this.O($r()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Dc(e).nextSibling;Dc(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},en=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=Qt(this,e,n,0),s=!Sr(e)||e!==this._$AH&&e!==vt,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Qt(this,a[r+l],n,l),c===vt&&(c=this._$AH[l]),s||=!Sr(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Co=class extends en{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},No=class extends en{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Wo=class extends en{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Qt(this,e,n,0)??g)===vt)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Bo=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Qt(this,e)}},Uc={M:Ts,P:wt,A:Ps,C:1,L:Gc,R:Ho,D:Bc,V:Qt,I:Mn,H:en,N:No,U:Wo,B:Co,F:Bo},db=zs.litHtmlPolyfillSupport;db?.(Mr,Mn),(zs.litHtmlVersions??=[]).push("3.3.3");var jc=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new Mn(e.insertBefore($r(),i),i,void 0,n??{})}return o._$AI(t),o};var Os=globalThis,oe=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jc(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return vt}};oe._$litElement$=!0,oe.finalized=!0,Os.litElementHydrateSupport?.({LitElement:oe});var hb=Os.litElementPolyfillSupport;hb?.({LitElement:oe});(Os.litElementVersions??=[]).push("4.2.2");var ot=(t,e,n={})=>t.callWS({type:`nextfloor/${e}`,...n});async function Vo(t,e){return(await ot(t,"image/get",{image_id:e})).data}async function Dt(t,e,n){await ot(t,"image/set",{image_id:e,data:n})}async function Zc(t){return(await ot(t,"history/list")).snapshots}async function qc(t,e){return(await ot(t,"history/snapshot",e?{name:e}:{})).id}async function Yc(t,e){return(await ot(t,"history/get",{snapshot_id:e})).building}async function Xc(t,e){await ot(t,"history/delete",{snapshot_id:e})}async function Jc(t,e){return(await ot(t,"history/restore",{snapshot_id:e})).revision}var tn=(t,e)=>ot(t,"packs/import",{pack:e});async function Qc(t,e){await ot(t,"packs/remove",{pack_id:e})}var eu=t=>ot(t,"backup/export"),tu=(t,e,n)=>ot(t,"backup/import",{building:e,packs:n});var Hs=t=>t.slice(0,t.indexOf(".")),pb={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},ee=t=>pb[Hs(t)]??null,Cs=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];var nu=new Set(["light","switch","fan"]),Ot=t=>t!==null&&t!=="scene"&&t!=="script",Lt=t=>!t||t.state==="unavailable"||t.state==="unknown"&&!t.entity_id.startsWith("event.");function K(t,e,n){let r=String(t?.states[e]?.attributes.friendly_name??t?.entities?.[e]?.name??e);if(!n||r.length<=n.length+1||!r.toLowerCase().startsWith(`${n.toLowerCase()} `))return r;let o=r.slice(n.length+1);return o[0].toUpperCase()+o.slice(1)}var ru=t=>!!t&&t.entity_id.startsWith("sensor.")&&t.attributes.device_class==="enum";var ou=t=>Math.min(1,Math.max(0,t));function fb(t){let e=ou((t-2200)/4300),n=[1,.66,.26],r=[.78,.9,1];return[0,1,2].map(o=>n[o]+(r[o]-n[o])*e)}function Ls(t,e){if(!t||t.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:t.attributes,r=typeof n.brightness=="number"?.2+.8*Math.sqrt(ou(n.brightness/255)):1,o=n.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(n.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:r}:typeof n.color_temp_kelvin=="number"?{color:fb(n.color_temp_kelvin),level:r}:{color:[1,.71,.28],level:r}}function iu(t,e,n){let r=Ls(t,n);if(r)return r;for(let o of e){let i=Ls(o);if(i)return{color:i.color,level:i.level*.6}}return null}function Ko(t,e,n=null){if(t==="light"&&n==="floor")return 1.95;if(t==="light"&&n==="table")return 1.25;if(t==="light"&&n==="wall")return 1.95;switch(t){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var cu=[],Go=new Map,mb=0,fe=(t,e)=>`pack:${t}:${e}`,kt=t=>t.startsWith("pack:");function Ns(t){cu=t,Go=new Map;for(let e of t)for(let n of e.items)Go.set(fe(e.id,n.id),n);mb+=1}var Er=()=>cu;var gb={};function Z(t){if(!kt(t))return;let e=Go.get(t);if(e)return e;let[,n,...r]=t.split(":"),o=gb[n];return o?Go.get(fe(o,r.join(":"))):void 0}var _b=.22;function su(t,e,n,r){let o=Math.min(_b,n/3);if(r<=o*2.4||Math.abs(r-n)<1e-6)return e*(r/n)+(t-e)*(r/n);let i=e*(r/n),s=t-e;return s<=o?i+s:s>=n-o?i+r-(n-s):i+o+(s-o)*(r-2*o)/(n-2*o)}function Rr(t,e,n,r,o){return[su(t*r,n*r,r,o)/o,su(e*r,n*r,r,o)/o]}var au=new WeakMap;function uu(t,e,n,r){let[o,i,s]=t.size;if(t.vehicle||t.stretch||Math.abs(e-o)<1e-4&&Math.abs(n-i)<1e-4&&Math.abs(r-s)<1e-4)return t.parts;let a=`${e.toFixed(4)}|${n.toFixed(4)}|${r.toFixed(4)}`,l=au.get(t),c=l?.get(a);if(c)return c;let u=t.parts.map(d=>{if(d.shape==="sweep")return d;let[h,p]=Rr(d.x-d.w/2,d.x+d.w/2,-.5,o,e),[f,_]=Rr(d.z-d.d/2,d.z+d.d/2,-.5,i,n),[b,w]=Rr(d.y,d.y+d.h,0,s,r);if(d.rot)return{...d,x:(h+p)/2,z:(f+_)/2,w:d.w*o/e,d:d.d*i/n,y:b,h:w-b};let v={...d,x:(h+p)/2,z:(f+_)/2,w:p-h,d:_-f,y:b,h:w-b};if(d.shape==="loft"){let[y,x,k,S]=[d.tx??d.x,d.tz??d.z,d.tw??d.w,d.td??d.d],[$,E]=Rr(y-k/2,y+k/2,-.5,o,e),[z,P]=Rr(x-S/2,x+S/2,-.5,i,n);Object.assign(v,{tx:($+E)/2,tz:(z+P)/2,tw:E-$,td:P-z})}return v});return l||au.set(t,l=new Map),l.size>32&&l.clear(),l.set(a,u),u}var Ws=t=>!!t?.parts.some(e=>e.move);var du=t=>Z(t)?.parts.find(e=>e.screen),lu=.06;function hu(t){let e=Z(t);if(!e)return!1;let[n,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*n,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=lu&&s>=lu})}function ht(t){return it[t]??Z(t)?.size??[.6,.6,.8]}function Ht(t){let e=Z(t);return wu.has(t)||!!e?.electric||!!e?.light||!!e?.climate}var pu=t=>!!Z(t)?.parts.some(e=>e.picture),Rn=t=>!!Z(t)?.climate;function fu(t,e){return t.name[e.split("-")[0]]??t.name.en??Object.values(t.name)[0]??t.id}var bb={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace (older)",fitness:"Fitness (older)",fahrzeuge:"Vehicles",ikea:"IKEA sizes",treppen:"Stairs & railings",ausbau:"Architecture & fit-out",werkstatt:"Garage & workshop",a_wohnzimmer:"Living room",a_schlafzimmer:"Bedroom",a_kueche:"Kitchen",a_bad:"Bathroom",a_kinderzimmer:"Kids' room",a_buero:"Office & gaming",a_fitness:"Fitness",a_haustiere:"Pets",a_garten:"Garden & patio",a_kino:"Home cinema & hi-fi",a_smart:"Smart home & tech",a_haustechnik:"Utility & building services",a_saison:"Season & decoration",a_smart2:"Smart home 2",a_haustechnik2:"Building services 2",a_wellness:"Wellness",a_garten2:"Garden 2",a_kueche2:"Kitchen 2",a_fahrzeuge2:"Vehicles 2",a_aussenkueche:"Outdoor kitchen & terrace",a_werkstatt2:"Workshop 2",a_japandi:"Japandi & Scandi",a_loft:"Loft & industrial",a_gruen:"Indoor greenery",a_musik:"Music & studio",a_bilder:"Pictures & frames"};function mu(t,e){if(e.split("-")[0]==="de")return t.name;let n=/^nextfloor\.(.+)$/.exec(t.id)?.[1];return n&&bb[n]||t.name}function Ct(t,e){return e.mount_y!=null?e.mount_y:wb(t,e)+(yb(e)?0:bu(t,e.x,e.z))}var yb=t=>t.type==="led_strip"||Z(t.type)?.mount==="ceiling";function wb(t,e){if(e.type==="lamp_wall")return gu;if(e.type==="led_strip")return Math.max(0,pt(t,e.x,e.z)-.04-Math.max(.02,e.h));let n=Z(e.type);if(!n)return _u(e);switch(n.mount){case"surface":return yu(t,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,Uo(t,e)-e.h);default:return 0}}function Bs(t){if(t==="plant")return"plant";let e=Z(t);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var vu=["turn","slide","top"],ku=["always","active","no_power","never"],xu=1.3,jo=(t,e=new Date().toISOString().slice(0,10))=>!!t.due&&t.due<=e;var $u=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Su=["brick","round","wide","steel"],Zo=["navigate","more_info","service","fire_dom_event"];function qo(t,e,n){return t?e?!!n.lock_plan:!!t.locked:!1}var Mu=["rain","snow","fog","clouds","lightning","sky"],Ru=["rain","snow","clouds","lightning","sky"],Eu=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Vs={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ks(t){return t==="hedge"||t==="fence"||t==="pergola"}var Au=["x","-x","z","-z"];function vb(t,e,n){let r=t.slope??0;if(!r||t.type==="pool")return 0;let o=t.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of t.points){let d=i(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return r*l}function kb(t,e,n,r){return Fu(t)+(e.offset??0)+Vs[e.type]-vb(e,n,r)}function Fu(t){return t.elevation>.3?0:-.2}function zu(t,e,n){let r=(t.outdoor??[]).filter(i=>!Ks(i.type)&&i.type!=="pool"&&N([e,n],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?kb(t,o,e,n):Fu(t)}var Tu=t=>t.cut??t.type==="pool",Pu=["supply","return","hot","cold"],Iu=60,Yo=t=>`pipe:${t}`,Du=30,Ou={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Lu=["wood","oak","herringbone","parquet","tiles","marble","terrazzo","carpet","stone","concrete","vinyl","laminate","cork_vinyl","linoleum","brick","decking"],nn=["plaster","brick","concrete","wood_cladding","stone","tile","wallpaper","slate"],Hu=["auto","wood","oak","fabric","leather","metal","lacquer","marble","rattan"],Cu={type:"none",pitch:35,overhang:.4},Xo="#d6cfc2",Jo="#e8e3da",Nu={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Cu}};function Nt(){return{version:1,floors:[],settings:{...Nu},energy:{...Ou},presence:[]}}function Ge(t,e,n){return{id:t,name:e,elevation:n,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var xb=2.75;function Wu(t,e){if(e!=null&&Number.isFinite(e))return Math.round(e*xb*100)/100;let n=t.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return n?Math.round((n.elevation+n.height+.25)*100)/100:0}function Bu(t,e,n){let r=t.rooms.flatMap(a=>a.points.map(l=>l[0])),o=t.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,u=s+Math.floor(l/3)*3.5;return{id:n(),name:a.name,area_id:a.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function Vu(t,e,n,r){let o=t.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=t.x-a*(t.w/2)*i+l*(t.d/2)*s,u=t.z-a*(t.w/2)*s-l*(t.d/2)*i,d=n[0]-c,h=n[1]-u,p=w=>Math.max(.1,Math.round(w/r)*r),f=p((d*i+h*s)*a),_=p((-d*s+h*i)*l),b=w=>Math.round(w*1e3)/1e3;return{x:b(c+a*(f/2)*i-l*(_/2)*s),z:b(u+a*(f/2)*s+l*(_/2)*i),w:b(f),d:b(_)}}var Qo=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],Ku={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Ue=["meter","inverter","home_battery","wallbox","grid_point"],Gu=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),gu=1.75;function ei(t){return Gs.has(t.type)||["stairwell","parking"].includes(t.type)?!1:Z(t.type)?.mount!=="ceiling"}function he(t){return Gu.has(t)||!!Z(t)?.light}var $b=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Uu(t,e,n,r=0){let o=pe(t.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<n;c++){let u=[Math.round((o.x0+r+i/n*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];N(u,t.points)&&a.push(u)}return a}function En(t,e,n){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[n];return[r(t[0]+o*e),r(t[1]+i*e)]}function _u(t){switch(t.type){case"home_battery":return t.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-t.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Gs=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function ju(t,e){return t.filter(n=>n.elevation<e.elevation).flatMap(n=>n.rooms.filter(r=>r.points.length>=3&&r.ceiling!=null&&r.ceiling>n.height+.005&&n.elevation+r.ceiling>e.elevation+.05)).map(n=>n.points)}var Us=t=>t?.floor_offset&&Number.isFinite(t.floor_offset)?t.floor_offset:0;function bu(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&o.floor_offset&&N([e,n],o.points));return Us(r)}function pt(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&N([e,n],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:t.height}var Uo=(t,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:pt(t,e.x,e.z);function yu(t,e,n){let r=0;for(let o of t.furniture)!($b.has(o.type)||Z(o.type)?.surface)||!N([e,n],Ar(o))||(r=Math.max(r,o.h));return r}var wu=new Set([...Gu,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),it={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]},js=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Zs=["standard","bars","glass_wall"],ti=new Set(["interior","front"]);function xt(t,e){return t.type==="door"?t.style&&js.includes(t.style)?t.style:e?"front":"interior":t.style&&Zs.includes(t.style)?t.style:"standard"}function Zu(t,e,n,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=t-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let u=i-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return o?{panels:[[.02,.02+l],[t-.02-c,t-.02]],x0:.02+l,x1:t-.02-c}:(n?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:t-.02}:{panels:[[t-.02-l,t-.02]],x0:.02,x1:t-.02-l}}function qs(t){return t==="front"||t==="front_glass"||t==="sidelight"||t==="sidelights"}var An={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},lift_slide:{type:"window",leaves:1,width:2.4,sill:0,height:2.15,opens:"slide"},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Fn(t){if(t.type==="garage")return"garage";if(t.type==="window"&&t.style==="glass_wall")return"glass_wall";if(t.type==="window"&&t.opens==="slide"&&t.sill<.1)return"lift_slide";let e=t.leaves===2;return t.type==="door"?!e&&t.style&&qs(t.style)?"front":e?"door_double":"door":t.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function He(t){t.energy={...Ou,...t.energy??{}},t.presence=t.presence??[],t.version=1,t.settings={...Nu,...t.settings,roof:{...Cu,...t.settings?.roof??{}}};for(let e of t.settings.roof.sections??[])Array.isArray(e.overhang_sides)&&(e.overhang_sides=null);t.floors.forEach((e,n)=>{let r=Ge(e.id,e.name??`Floor ${n+1}`,e.elevation??n*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of t.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=e.placements.filter(r=>r.entity_id.startsWith("light."));if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=r[o.mount??"ceiling"],[s,a,l]=it[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,d=1;for(;e.furniture.some(h=>h.id===u);)u=`${c}_${d++}`;e.furniture.push({id:u,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return Sb(t),t}function Sb(t){let e=(r,o,i=new Set)=>{for(let s of r)(typeof s.id!="string"||!s.id||i.has(s.id))&&(s.id=L(o)),i.add(s.id)};e(t.floors,"floor");let n=new Set;for(let r of t.floors){for(let o of r.rooms)(typeof o.id!="string"||!o.id)&&(o.id=L("room"));e(r.openings,"op",n),e(r.furniture,"furn"),e(r.outdoor,"out")}}function L(t){return`${t}_${Math.random().toString(36).slice(2,10)}`}function _e(t){let e=0;for(let n=0;n<t.length;n++){let[r,o]=t[n],[i,s]=t[(n+1)%t.length];e+=r*s-i*o}return e/2}function Ee(t){return Math.abs(_e(t))}function xe(t){let e=_e(t);if(Math.abs(e)<1e-9){let o=t.length||1;return[t.reduce((i,s)=>i+s[0],0)/o,t.reduce((i,s)=>i+s[1],0)/o]}let n=0,r=0;for(let o=0;o<t.length;o++){let[i,s]=t[o],[a,l]=t[(o+1)%t.length],c=i*l-a*s;n+=(i+a)*c,r+=(s+l)*c}return[n/(6*e),r/(6*e)]}function rn(t){if(t.length!==4)return!1;for(let e=0;e<4;e++){let[n,r]=t[e],[o,i]=t[(e+1)%4];if(Math.abs(n-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function pe(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;for(let[i,s]of t)e=Math.min(e,i),n=Math.min(n,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:n,x1:r,z1:o}}function Ar(t){let e=t.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=t.w/2,i=t.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[t.x+s*n-a*r,t.z+s*r+a*n])}function N(t,e){let n=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>t[1]!=l>t[1]&&t[0]<(a-i)*(t[1]-s)/(l-s)+i&&(n=!n)}return n}var ni={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"},qu=6;var Ys=t=>t.trim().replace(/^\/local\/www\//i,"/local/"),Xs=t=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(t.trim());var Rb=globalThis,Xu=Rb.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},Js=Xu.plugins,Yu=Xu.listeners;var Eb=5;function Ju(t,e){t.errors.length<Eb&&t.errors.push(e instanceof Error?e.message:String(e))}function ri(t){return Yu.add(t),()=>Yu.delete(t)}var Qs=()=>[...Js.values()].map(t=>t.status),Qu=()=>[...Js.values()].flatMap(t=>Object.keys(t.plugin.lightAnimations??{}));function*oi(t,e){for(let{plugin:n,status:r}of Js.values())for(let o of n.devices??[]){let i=!1;try{i=o.match(t,e)}catch(s){Ju(r,s)}i&&(yield{device:o,status:r})}}function ii(t,e){for(let{device:n}of oi(t,e))return n.kind??"sensor";return null}function ed(t,e){let n=t.states[e];if(!n)return null;let r=Ab({hass:t,entityId:e,state:n})?.icon?.trim();return r&&/^mdi:[a-z0-9-]+$/i.test(r)?r:null}function Ab(t,e){let n=null;for(let{device:r,status:o}of oi(t.entityId,t.state))if(r.marker)try{let i=r.marker({...t,settings:ea(r.settings,e?.[o.id])});if(!i)continue;n={...n??{}},typeof i.icon=="string"&&i.icon&&(n.icon=i.icon),typeof i.text=="string"&&(n.text=i.text.slice(0,60)),typeof i.active=="boolean"&&(n.active=i.active)}catch(i){Ju(o,i)}return n}function si(t,e){return t?typeof t=="string"?t:t[e]??t[e.split("-")[0]]??t.en??Object.values(t)[0]??"":""}function td(t,e){let n=[];for(let{device:r,status:o}of oi(t,e))r.settings?.length&&n.push({pluginId:o.id,name:o.name,settings:r.settings});return n}function ea(t,e){let n={};for(let r of t??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":r.type==="entity"?typeof o=="string"&&/^([a-z_]+\.\w+)?$/.test(o)&&(!r.domains?.length||o===""||r.domains.includes(o.split(".")[0])):typeof o=="string"&&(r.options??[]).some(([s])=>s===o);n[r.key]=i?o:r.default}return n}function nd(t,e){for(let{device:n}of oi(t,e))if(n.floorWedge)return!0;return!1}var Fb=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),zb=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Tb=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Pb=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Wt(t,e){let n=t.entities?.[e];return n&&(n.area_id||(n.device_id?t.devices?.[n.device_id]?.area_id:null))||null}var od=(t,e)=>{let n=t.entities?.[e];return!!(n?.hidden||n?.entity_category)},je=(t,e)=>ee(e)??ii(e,t.states[e]);function rd(t,e){let n=t.states[e];if(!n||od(t,e))return!1;if(ii(e,n)!==null)return!0;let r=ee(e);if(!r)return!1;let o=n.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":r==="sensor"?o?Fb.has(o):zb.has(String(n.attributes.unit_of_measurement??"")):r==="binary"?o?Tb.has(o):!!t.entities?.[e]?.area_id:!0}function Ib(t,e){let n=t.states[e];return ee(e)!=="sensor"||!n?.attributes.unit_of_measurement||od(t,e)||Pb.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Lt(n)}var li=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power",ta=null;ri(()=>ta=null);function na(t,e){let n=t.get(e);return n||t.set(e,n=[]),n}function Db(t){let e=new Map,n=new Map,r=new Map,o=new Map,i=[],s=u=>{(rd(t,u)||Ib(t,u))&&Ot(je(t,u))&&i.push(u)};for(let[u,d]of Object.entries(t.entities??{})){let h=d.device_id;h&&d.area_id&&(o.get(h)??o.set(h,new Set).get(h)).add(d.area_id),h&&li(t,u)&&na(n,h).push(u),h&&!d.hidden&&!d.entity_category&&(r.get(h)??r.set(h,new Set).get(h)).add(Hs(u));let p=Wt(t,u);p===null?s(u):rd(t,u)&&na(e,p).push(u)}if(t.entities)for(let u of Object.keys(t.states))t.entities[u]||s(u);let a=Cs.indexOf("binary")-.5,l=u=>{let d=ee(u),h=d?Cs.indexOf(d):a;return h>a&&ii(u,t.states[u])!==null?a:h};i.sort((u,d)=>l(u)-l(d)||K(t,u).localeCompare(K(t,d)));for(let[u,d]of e){let h=t.areas?.[u]?.name;d.sort((p,f)=>l(p)-l(f)||K(t,p,h).localeCompare(K(t,f,h)))}let c=new Set;for(let[u,d]of o)d.size>1&&c.add(u);return{entities:t.entities,devices:t.devices,states:t.states,stateCount:Object.keys(t.states).length,byArea:e,powerByDevice:n,withoutArea:i,domainsByDevice:r,hubs:c}}function zn(t){let e=ta;return e&&e.entities===t.entities&&e.devices===t.devices&&(e.states===t.states||(e.states=t.states,Object.keys(t.states).length===e.stateCount))?e:ta=Db(t)}function $e(t,e){let n=ai(t,e.area_id);return e.sub_areas?.length?[...new Set([...n,...e.sub_areas.flatMap(r=>ai(t,r))])]:n}function ai(t,e){return!e||!t.entities?[]:zn(t).byArea.get(e)??[]}function id(t,e){if(!t.entities)return[];let n=[];for(let[r,o]of zn(t).byArea){let i=o.filter(s=>Ot(je(t,s)));r!==e&&i.length>0&&n.push({areaId:r,name:t.areas?.[r]?.name??r,ids:i})}return n.sort((r,o)=>r.name.localeCompare(o.name))}var sd=t=>t.entities?zn(t).withoutArea:[],ra=(t,e)=>!!t.entities&&zn(t).hubs.has(e),ci=(t,e)=>t.entities?zn(t).powerByDevice.get(e)??[]:[];function Tn(t,e){let n=new Map;for(let o of e)na(n,t.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...n.values()].map(o=>{let i=o.find(s=>!t.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var ui=(t,e)=>Tn(t,e).map(n=>n.primary),oa={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ob=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Lb=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Hb=new RegExp(`(${Lb.join("|")})`,"i");function ia(t,e){let n=t.entities?.[e]?.device_id,r=n&&!ra(t,n)?zn(t).domainsByDevice.get(n):void 0;return r&&[...r].some(o=>Ob.has(o))?!1:!Hb.test(`${e} ${t.states[e]?.attributes.friendly_name??""}`)}function ad(t,e,n,r){let o=n.climate?.[r];if(o==="none")return[];if(o)return[o].flat().filter(c=>t.states[c]);let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>N([c.x,c.z],n.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!N([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([...$e(t,n).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class===oa[r]&&ia(t,c))}var Cb=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Nb=new Set(["garage","gate"]),Wb=new Set(["window","opening"]);function Fr(t,e,n=!1){let r=new Map;return t.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var ld=(t,e)=>t==="none"?null:t??e??null,Pn=t=>t&&t!=="none"?t:null;function cd(t,e,n){let r=t.leaves===2;return{cover:ld(t.cover,e),contact:t.sensor==="handle"&&t.contact==null?null:ld(t.contact,n),tilt:t.tilt==="none"?null:t.tilt,contact2:r?Pn(t.contact2):null,tilt2:r?Pn(t.tilt2):null,position:Pn(t.position),positionInverted:!!t.position_inverted,tiltAngle:Pn(t.tilt_angle),tiltMax:t.tilt_max??null,tiltOffset:t.tilt_offset??null,tiltInvert:!!t.tilt_invert,shut:!!t.shut,angled:t.type==="door"&&!!t.open_angle,lock:t.type==="door"?Pn(t.lock):null,cover2:t.type==="garage"?null:Pn(t.cover2)}}function zr(t,e){let n=new Map;for(let r of e){for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,b)=>_.edge-b.edge||_.offset-b.offset);if(i.length===0)continue;let s=$e(t,o),a=_=>t.states[_]?.attributes.device_class,l=_=>s.filter(b=>ee(b)==="binary"&&_(a(b)??"")),c=_=>i.filter(b=>b.type===_),u=Fr(c("window"),s.filter(_=>ee(_)==="cover"&&Cb.has(a(_))),!0),d=Fr(c("window"),l(_=>Wb.has(_))),h=Fr(c("door"),l(_=>_==="door")),p=Fr(c("garage"),s.filter(_=>ee(_)==="cover"&&Nb.has(a(_)??""))),f=Fr(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let b=_.type==="window"?u:_.type==="garage"?p:null,w=_.type==="window"?d:_.type==="garage"?f:h;n.set(_.id,cd(_,b?.get(_.id),w.get(_.id)))}}for(let o of r.openings)!n.has(o.id)&&!r.rooms.some(i=>i.id===o.room_id)&&n.set(o.id,cd(o,void 0,void 0))}return n}var Bb=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function sa(t){if(!t||Lt(t))return null;let e=t.attributes.window_state;for(let n of[typeof e=="string"?e:"",t.state]){let r=n.trim(),o=r&&Bb.find(([i])=>i.test(r));if(o)return o[1]}return null}var ud=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,dd=/(kühl|fridge|gefrier|freezer)/i,hd=/(spülmaschine|geschirrspül|dishwasher)/i,Vb=/(kochfeld|herd|induktion|cooktop)/i,Kb={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:ud,tv_wall:ud,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:dd,fridge_smart:dd,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:hd,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Vb,sink:hd,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},pd={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},fd=new Set(["tv_board","tv_wall"]);var In=t=>fd.has(t)||!!du(t),di=t=>!!Z(t)?.electric&&/speaker|multiroom|soundbar/.test(t.split(":").pop()??t),Dn=t=>In(t)||t==="desk"||t==="fridge_smart",Gb=t=>!!t&&t!=="none";function Ub(t,e){if(li(t,e))return e;let n=t.entities?.[e]?.device_id;return n?ci(t,n).find(r=>r!==e)??null:null}var jb=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function Tr(t,e,n,r){return t.find(o=>e?.test(n(o)))??(r?t[0]??null:null)}function Ze(t,e){let n=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity,i.screen_device]),...r.placements.map(i=>i.entity_id)].filter(Gb));for(let i of r.furniture){let s=i.type in pd,a=Rn(i.type),l=s?pd[i.type]:Kb[i.type];if(!l&&!a&&!di(i.type)&&i.entity==null&&i.power==null)continue;let c=jb(r,i.x,i.z),u=(c?ui(t,$e(t,c)):[]).filter(b=>!o.has(b)),d=b=>`${b} ${K(t,b)}`,h=b=>u.filter(w=>ee(w)===b),p=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let b=(c?$e(t,c):[]).filter(v=>!o.has(v)),w=new Set(b.filter(v=>ee(v)==="fan").map(v=>t.entities?.[v]?.device_id).filter(Boolean));p=b.find(v=>ee(v)==="light"&&w.has(t.entities?.[v]?.device_id))??Tr(h("light"),l,d,!1)}else if(s)p=Tr(h("light"),l,d,!0);else if(i.type==="robot_vacuum"){let b=c?.area_id??null;p=Object.keys(t.entities??{}).find(w=>w.startsWith("vacuum.")&&!o.has(w)&&Wt(t,w)===b)??null}else if(i.type==="radiator"||a)p=Tr(h("climate"),l,d,!0);else if(In(i.type)){let b=h("media");p=b.find(w=>t.states[w]?.attributes.device_class==="tv")??Tr(b,l,d,fd.has(i.type))}else if(di(i.type)){let b=h("media").filter(w=>t.states[w]?.attributes.device_class!=="tv");p=Tr(b,l,d,!1)??(b.length===1?b[0]:null)}else l&&(p=u.find(b=>["switch","media","fan"].includes(ee(b)??"")&&l.test(d(b)))??null);p&&o.add(p)}let f=i.power==="none"?null:i.power??null;i.power==null&&(f=p?Ub(t,p):null,!f&&l&&c&&!s&&(f=$e(t,c).find(b=>li(t,b)&&!o.has(b)&&l.test(d(b)))??null),f&&o.add(f));let _=null;if(i.type==="ceiling_fan"&&(_=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let b=(c?$e(t,c):[]).filter(v=>ee(v)==="fan"&&!o.has(v)),w=p?t.entities?.[p]?.device_id:void 0;_=(w?b.find(v=>t.entities?.[v]?.device_id===w):void 0)??b[0]??null,_&&o.add(_)}(p||f||_)&&n.set(i.id,{entity:p,power:f,...i.type==="ceiling_fan"?{fan:_}:{}})}}return n}var md=t=>t==="fridge"||t==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(t.slice(t.lastIndexOf(":")+1));function gd(t,e,n=[]){let r=[];for(let o of e){let i=(a,l)=>o.rooms.some(c=>c.points.length>=3&&N([a,l],c.points)),s=Ze(t,[o]);r.push(...o.placements.filter(a=>a.outside||!i(a.x,a.z)).map(a=>a.entity_id)),r.push(...o.furniture.filter(a=>!i(a.x,a.z)).flatMap(a=>[s.get(a.id)?.entity,s.get(a.id)?.power]));for(let a of o.outdoor??[])a.area_id&&r.push(...ui(t,ai(t,a.area_id))),r.push(a.pump_entity,a.temp_entity)}return[...new Set(r.filter(o=>!!o&&!!t.states[o]&&!n.includes(o)))]}function Zb(t,e){return Math.min(...e.map((n,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-n[0],o[1]-n[1]],a=Math.min(1,Math.max(0,((t[0]-n[0])*i+(t[1]-n[1])*s)/(i*i+s*s||1)));return Math.hypot(t[0]-n[0]-i*a,t[1]-n[1]-s*a)}))}function bd(t,e,n=[]){let r=t.points;if(r.length<3||e.length===0)return[];let o=r.map(w=>w[0]),i=r.map(w=>w[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(a-s,c-l),d=Math.max(.1,Math.min(.25,u/8)),h=Math.min(.35,u/5),p=Math.min(.7,u/4),f=xe(r),_=[];for(let w=s+d/2;w<a;w+=d)for(let v=l+d/2;v<c;v+=d){let y=[w,v];if(!N(y,r))continue;let x=Zb(y,r);x>=h&&_.push({at:y,wallDistance:x})}_.length===0&&_.push({at:f,wallDistance:0});let b=[...n];return e.map(w=>{let v=ee(w)==="light",y=_[0].at,x=-1/0;for(let{at:S,wallDistance:$}of _){let E=b.length?Math.min(...b.map(T=>Math.hypot(S[0]-T[0],S[1]-T[1]))):3,z=Math.hypot(S[0]-f[0],S[1]-f[1]),P=Math.min(E,3)*2;z<p&&!v&&(P-=10),P-=v?z*.35:$*1.2,P>x+1e-9&&(x=P,y=S)}let k=[Math.round(y[0]*100)/100,Math.round(y[1]*100)/100];return b.push(k),{entity_id:w,x:k[0],z:k[1],y:null,mount:null}})}var _d=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function yd(t,e,n){if(n==="none")return null;if(n)return n;let r=e?t.entities?.[e]?.device_id:null;return!r||!t.entities?null:Object.values(t.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(_d.test(i.translation_key??"")||_d.test(i.entity_id.split(".")[1])))?.entity_id??null}var G=(t,e)=>[t[0]-e[0],t[1]-e[1]],ft=(t,e)=>[t[0]+e[0],t[1]+e[1]],st=(t,e)=>[t[0]*e,t[1]*e],j=(t,e)=>t[0]*e[0]+t[1]*e[1],be=(t,e)=>t[0]*e[1]-t[1]*e[0],ye=t=>Math.hypot(t[0],t[1]),Ce=t=>{let e=ye(t)||1;return[t[0]/e,t[1]/e]},aa=t=>[-t[1],t[0]],la=t=>[t[1],-t[0]];var qb=.05,Yb=.2,Xb=.6,Jb=.6,wd=.05;function kd(t){let e=[];return t.forEach((n,r)=>{let o=n.points;if(o.length<3)return;let i=_e(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=ye(G(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],d=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let h=[-u[1],u[0]],[p,f]=[j(s,u),j(l,u)],_=o.map(b=>j(b,h));e.push({room:r,index:a,dir:u,normal:h,offset:j(s,h),outside:j(d,h)>0?1:-1,from:Math.min(p,f),to:Math.max(p,f),reach:[Math.min(..._),Math.max(..._)]})})}),e}function vd(t,e){return t.outside===1?t.reach[0]<e-wd:t.reach[1]>e+wd}function xd(t,e,n,r,o=qb){if(t.room===e.room||Math.abs(be(t.dir,e.dir))>o||t.outside===e.outside)return null;let i=(e.offset-t.offset)*t.outside;return i>n||i<-r||Math.abs(i)<1e-4||i<0&&(!vd(t,e.offset)||!vd(e,t.offset))||Math.min(t.to,e.to)-Math.max(t.from,e.from)<Yb?null:i}var ca=t=>Math.round(t*1e3)/1e3;function $d(t,e=.6,n=Jb){let r=kd(t),o=r.map((b,w)=>w),i=b=>o[b]===b?b:o[b]=i(o[b]),s=[],a=new Set,l=[];for(let b=0;b<r.length;b++)for(let w=b+1;w<r.length;w++){let v=xd(r[b],r[w],e,n);v!==null&&l.push([b,w,v])}l.sort((b,w)=>Math.abs(b[2])-Math.abs(w[2]));let c=new Map(r.map((b,w)=>[w,[w]])),u=(b,w)=>b.some(v=>w.some(y=>r[v].room===r[y].room&&Math.abs(r[v].offset-r[y].offset)>=.002));for(let[b,w,v]of l){let[y,x]=[i(b),i(w)];if(y!==x){if(u(c.get(y),c.get(x)))continue;o[y]=x,c.set(x,[...c.get(x),...c.get(y)]),c.delete(y)}s.push(ca(v)),a.add(b).add(w)}let d=new Map(r.map((b,w)=>[`${b.room}:${b.index}`,w]));for(let b=a.size>0;b;)b=!1,r.forEach((w,v)=>{let y=d.get(`${w.room}:${(w.index+1)%t[w.room].points.length}`);if(y===void 0||y===v)return;let x=r[y];!(Math.abs(be(w.dir,x.dir))<1e-6&&Math.abs(w.offset-x.offset)<.002&&w.outside===x.outside)||a.has(v)===a.has(y)||(a.add(v).add(y),b=!0)});r.forEach((b,w)=>{let v=d.get(`${b.room}:${(b.index+1)%t[b.room].points.length}`);if(v===void 0||v===w||!a.has(w)||!a.has(v))return;let y=r[v];Math.abs(be(b.dir,y.dir))<1e-6&&Math.abs(b.offset-y.offset)<.002&&b.outside===y.outside&&(o[i(w)]=i(v))});let h=()=>t.map(b=>({...b,points:b.points.map(w=>[w[0],w[1]])}));if(s.length===0)return{rooms:h(),gaps:s};let p=new Map;for(let b of a)p.set(i(b),[...p.get(i(b))??[],b]);let f=t.map(b=>b.points.map(()=>new Map));for(let[b,w]of p){let v=new Map(w.map(x=>[`${r[x].room}:${Math.round(r[x].offset*500)}`,r[x].offset])),y=[...v.values()].reduce((x,k)=>x+k,0)/v.size;for(let x of w){let k=r[x],S=[k.normal[0]*(y-k.offset),k.normal[1]*(y-k.offset)];f[k.room][k.index].set(b,S),f[k.room][(k.index+1)%t[k.room].points.length].set(b,S)}}return{rooms:t.map((b,w)=>({...b,points:b.points.map((v,y)=>{let x=[...f[w][y].values()].reduce((k,S)=>[k[0]+S[0],k[1]+S[1]],[v[0],v[1]]);return[ca(x[0]),ca(x[1])]})})),gaps:s}}function Sd(t){let e=t.filter(n=>n>.04).sort((n,r)=>n-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}function Md(t,e=Xb,n=.01){let r=kd(t),o=[];for(let i=0;i<r.length;i++)for(let s=i+1;s<r.length;s++){let[a,l]=[r[i],r[s]],c=xd(a,l,e,0,.02);c===null||c<n||o.push({a:{room:a.room,edge:a.index},b:{room:l.room,edge:l.index},dir:a.dir,normal:a.normal,offsetA:a.offset,offsetB:l.offset,gap:c,from:Math.max(a.from,l.from),to:Math.min(a.to,l.to)})}return o.sort((i,s)=>i.gap-s.gap)}var Rd=[.06,.15,.3],Qb=.6,ey=200,Pr=(t,e)=>t[0]*e[1]-t[1]*e[0],On=(t,e)=>[t[0]-e[0],t[1]-e[1]];function ty(t){let e=0;for(let n=0;n<t.length;n++)e+=Pr(t[n],t[(n+1)%t.length]);return e/2}function ny(t,e,n,r,o){let i=[],s=On(e,t),a=Math.hypot(s[0],s[1]);if(a<1e-9)return i;let l=d=>{let h=((d[0]-t[0])*s[0]+(d[1]-t[1])*s[1])/(a*a),p=[t[0]+s[0]*h,t[1]+s[1]*h];return{t:h,dist:Math.hypot(d[0]-p[0],d[1]-p[1])}};for(let d of[n,r]){let{t:h,dist:p}=l(d);p<=o&&h*a>o&&(1-h)*a>o&&i.push(h)}let c=On(r,n),u=Pr(s,c);if(Math.abs(u)>1e-9){let d=Pr(On(n,t),c)/u,h=Pr(On(n,t),s)/u;d*a>o&&(1-d)*a>o&&h>=0&&h<=1&&i.push(d)}return i}function ry(t,e){let n=[],r=s=>{let a=n.findIndex(l=>Math.hypot(l[0]-s[0],l[1]-s[1])<=e);return a>=0?a:(n.push(s),n.length-1)},o=new Map,i=(s,a)=>{s!==a&&((o.get(s)??o.set(s,new Set).get(s)).add(a),(o.get(a)??o.set(a,new Set).get(a)).add(s))};t.forEach(([s,a],l)=>{let c=new Set([0,1]);t.forEach(([d,h],p)=>{if(l!==p)for(let f of ny(s,a,d,h,e))c.add(Math.round(f*1e6)/1e6)});let u=[...c].sort((d,h)=>d-h).map(d=>[s[0]+(a[0]-s[0])*d,s[1]+(a[1]-s[1])*d]);for(let d=0;d+1<u.length;d++)i(r(u[d]),r(u[d+1]))});for(let s=!0;s;){s=!1;for(let[a,l]of o)if(l.size<2){for(let c of l)o.get(c)?.delete(a);o.delete(a),s=!0}}return{points:n,next:o}}function oy(t){let e=(o,i)=>Math.atan2(t.points[i][1]-t.points[o][1],t.points[i][0]-t.points[o][0]),n=new Set,r=[];for(let[o,i]of t.next)for(let s of i){if(n.has(`${o}>${s}`))continue;let a=[],l=o,c=s,u=!0;for(;!n.has(`${l}>${c}`);){if(n.add(`${l}>${c}`),a.push(l),a.length>2e3){u=!1;break}let d=e(c,l),h=-1,p=1/0;for(let f of t.next.get(c)??[]){if(f===l&&(t.next.get(c)?.size??0)>1)continue;let _=d-e(c,f);for(;_<=1e-9;)_+=2*Math.PI;_<p&&(p=_,h=f)}if(h<0){u=!1;break}l=c,c=h}u&&a.length>=3&&r.push(a.map(d=>t.points[d]))}return r}function iy(t){return t.filter((n,r)=>{let o=t[(r-1+t.length)%t.length],i=t[(r+1)%t.length];return Math.abs(Pr(On(n,o),On(i,n)))>.001}).map(([n,r])=>[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3])}function sy(t){let e=t.map(r=>r[1]),n=(Math.min(...e)+Math.max(...e))/2;for(let r of[0,.13,-.13,.31,-.31]){let o=[];for(let a=0;a<t.length;a++){let[l,c]=t[a],[u,d]=t[(a+1)%t.length];c>n+r!=d>n+r&&o.push(l+(n+r-c)/(d-c)*(u-l))}o.sort((a,l)=>a-l);let i=null,s=0;for(let a=0;a+1<o.length;a+=2)o[a+1]-o[a]>s&&([s,i]=[o[a+1]-o[a],[(o[a]+o[a+1])/2,n+r]]);if(i&&N(i,t))return i}return null}function ua(t){for(let e of Rd){let n=Ad(t,e,!1);if(n.length)return n}return[]}function Ed(t){for(let e of Rd){let n=Ad(t,e,!0);if(n.length)return n.length}return 0}function Ad(t,e,n){let r=[];for(let i of t.walls??[])r.push([i.a,i.b]);for(let i of t.rooms)i.points.forEach((s,a)=>r.push([s,i.points[(a+1)%i.points.length]]));if(!t.walls?.length)return[];let o=[];for(let i of oy(ry(r,e))){if(ty(i)<Qb)continue;let s=iy(i);if(s.length<3||s.length>ey)continue;let a=sy(s);!a||t.rooms.some(c=>c.points.length>=3&&N(a,c.points))!==n||o.push(s)}return o}var ay=.25,Fd=t=>Math.round(t*1e3)/1e3,zd=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function ha(t,e,n,r,o){let i=zd(t,e,n);if(!i)return[r,o];let s=(a,l)=>N([a,l],i.points);return s(r,o)?[r,o]:s(r,n)?[r,n]:s(e,o)?[e,o]:[e,n]}function ly(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(j(G(i,n),r))<.02&&Math.abs(j(G(a,n),r))<.02}))}var da=(t,e)=>Math.abs((t-e+540)%360-180);function Ir(t,e,n,r=ay){let o=zd(t,e.x,e.z);if(!o)return null;let i=o.points,s=_e(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=ye(G(u,l));if(d<.3)return;let h=[(u[0]-l[0])/d,(u[1]-l[1])/d],p=[-h[1]*s,h[0]*s],f=j(G([e.x,e.z],l),h);if(f<0||f>d)return;let _=ly(t,o,l,p)?n/2:0,b=j(G([e.x,e.z],l),p)-_,w=Math.atan2(-p[0],p[1])*180/Math.PI,y=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce((k,S)=>da(e.rotation,S.rotation)<da(e.rotation,k.rotation)?S:k);if(da(e.rotation,y.rotation)>50)return;let x=b-y.extent;Math.abs(x)>r||a&&Math.abs(x)>=Math.abs(a.gap)||(a={x:Fd(e.x-p[0]*x),z:Fd(e.z-p[1]*x),rotation:(Math.round(y.rotation)%360+360)%360,gap:x})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var Ln=Math.PI/180,at=t=>Math.tan(Math.min(80,Math.max(0,t))*Ln);function Or(t){return{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),z0:Math.min(t.z0,t.z1),z1:Math.max(t.z0,t.z1)}}function Td(t){if(!t.rotation)return null;let e=t.rotation*Ln;return{cx:(t.x0+t.x1)/2,cz:(t.z0+t.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function Pd(t,e){let n=Td(t);if(!n)return e;let[r,o]=[e[0]-n.cx,e[1]-n.cz];return[n.cx+r*n.c-o*n.sn,n.cz+r*n.sn+o*n.c]}function pa(t,e,n){let r=Td(t);if(!r)return[e,n];let[o,i]=[e-r.cx,n-r.cz];return[r.cx+o*r.c+i*r.sn,r.cz-o*r.sn+i*r.c]}function Lr(t,e=0){let{x0:n,x1:r,z0:o,z1:i}=Or(t);return[[n-e,o-e],[r+e,o-e],[r+e,i+e],[n-e,i+e]].map(s=>Pd(t,s))}function Se(t){let{x0:e,x1:n,z0:r,z1:o}=Or(t),i=s=>Pd(t,s);return t.axis==="x"?{u0:e,u1:n,w:o-r,at:(s,a)=>i([s,t.flip?o-a:r+a])}:{u0:r,u1:o,w:n-e,at:(s,a)=>i([t.flip?n-a:e+a,s])}}function on(t,e,n){let{x0:r,x1:o,z0:i,z1:s}=Or(t),[a,l]=pa(t,e,n);return t.axis==="x"?[a,t.flip?s-l:l-i]:[l,t.flip?o-a:a-r]}var Dr=Math.tan(30*Ln);function Hr(t,e,n,r,o){let i=Math.min(t*.3,r>1e-6?2.4/r:t*.3),s=Math.min(t*.3,o>1e-6?2.4/o:t*.3),a=e+i*r,l=n+s*o,c=Math.min(t-s,Math.max(i,(l-a+Dr*(t-s+i))/(2*Dr))),u=a+(c-i)*Dr;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=i?e+h*r:h<=c?a+(h-i)*Dr:h<=t-s?l+(t-s-h)*Dr:n+(t-h)*o}}function Ae(t){let e=Se(t).w,[n,r]=[t.eave_a,t.eave_b],[o,i]=[at(t.pitch_a),at(t.pitch_b)];switch(t.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*o,y:s=>n+s*o};case"mansard":{let s=Hr(e,n,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-n+e*i)/(o+i))):e/2;return{vr:s,rh:n+s*o,y:a=>a<=s?n+a*o:r+(e-a)*i}}}}var sn=t=>Ae(t).rh;function Id(t){let e=t.heightEnd!==void 0;return{...t,a:t.b,b:t.a,left:t.right,right:t.left,roomLeft:t.roomRight,roomRight:t.roomLeft,height:e?t.heightEnd:t.height,heightEnd:e?t.height:void 0,...t.bottom?{bottom:[t.bottom[1],t.bottom[0]]}:{}}}function cy(t,e){let n=t.map(r=>({...r}));for(let r of e){let o=n.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):n.push({...r})}return n}function uy(t,e,n){if(t.a===e.b)return!1;let r=Ce(G(n[t.b],n[t.a])),o=Ce(G(n[e.b],n[e.a]));return Math.abs(be(r,o))>1e-6||j(r,o)<=0||t.free||e.free||t.heightEnd!==void 0||e.heightEnd!==void 0?!1:t.height===e.height&&t.exterior===e.exterior&&!!t.between==!!e.between&&t.roomLeft===e.roomLeft&&t.roomRight===e.roomRight&&Math.abs(t.left-e.left)<=1e-9&&Math.abs(t.right-e.right)<=1e-9}function Dd(t,e,n=new Set){let r=t.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||n.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:Id(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:Id(r[a[1]]);if(!uy(l,c,e))continue;let u={...l,b:c.b,sources:cy(l.sources,c.sources)};i=[...r.filter((d,h)=>h!==a[0]&&h!==a[1]),u];break}if(!i)return r;r=i}}function Od(t,e){let n=new Map;t.forEach((o,i)=>{let s=Ce(G(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:st(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)n.set(l,[...n.get(l)??[],c])});let r=new Map;for(let[o,i]of n){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:ft(s,st(aa(l.d),l.left)),right:ft(s,st(la(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=ft(s,st(aa(l.d),l.left)),h=ft(s,st(la(u.d),u.right)),p=be(l.d,u.d);if(Math.abs(p)<1e-4)return;let f=ft(d,st(l.d,be(G(h,d),u.d)/p));ye(G(f,s))>a||(r.get(l.key).left=f,r.get(u.key).right=f)})}return r}function Ld(t,e){let n=t.filter((r,o)=>ye(G(r,t[(o+1)%t.length]))>e);for(;;){if(n.length<=3)return n;let r=n.findIndex((o,i)=>{let s=n[(i+n.length-1)%n.length],a=n[(i+1)%n.length],[l,c]=[G(o,s),G(a,o)];return Math.abs(be(Ce(l),Ce(c)))<1e-7&&j(l,c)>0});if(r===-1)return n;n=n.filter((o,i)=>i!==r)}}function dy(t){let e=[];return{points:e,idOf(n){let r=e.findIndex(o=>Math.abs(o[0]-n[0])<=t&&Math.abs(o[1]-n[1])<=t);return r>=0?r:(e.push([n[0],n[1]]),e.length-1)}}}function hy(t,e){let n=[];for(let r of t){let o=r.points;if(o.length<3||Math.abs(_e(o))<1e-6)continue;let i=_e(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&n.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return n}function Hd(t,e,n){let r=[];for(let o of t){let[i,s]=[e[o.u],e[o.v]],a=G(s,i),l=ye(a),c=st(a,1/l),u=e.map((h,p)=>({id:p,rel:G(h,i)})).filter(({id:h,rel:p})=>h!==o.u&&h!==o.v&&j(p,c)>n&&j(p,c)<l-n&&Math.abs(be(c,p))<=n).map(({id:h,rel:p})=>({t:j(p,c),id:h})).sort((h,p)=>h.t-p.t),d=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let h=0;h+1<d.length;h++){let[p,f]=[d[h],d[h+1]];r.push({u:p.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?p.t:l-f.t,t1:o.forward?f.t:l-p.t,forward:o.forward})}}return r}var hi=t=>({room_id:t.room,edge:t.edge,t0:t.t0,t1:t.t1});function py(t,e){let n=new Map(t.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,u)=>c-u))}let o=a=>{let l=n.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=n.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[d,h]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(h[0]-d[0],h[1]-d[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let u=o(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let d of a){let[h,p]=s(d),[f,_]=d===a[0]?[h,p]:[p,h];f!==null&&(l=Math.min(l,f)),_!==null&&(c=Math.min(c,_))}let u=a.map(d=>n.get(d.room)?.ceiling);if(u.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...u);l===1/0&&(l=d),c===1/0&&(c=d)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=n.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function fy(t){let e=typeof t.bottom=="number"&&t.bottom>0?t.bottom:0,n=typeof t.bottom_end=="number"&&t.bottom_end>=0?t.bottom_end:e;return e>0||n>0?{bottom:[e,n]}:{}}function ma(t){let e=n=>Math.round(n*1e6)/1e6;return t.a===void 0||t.b===void 0?t.a!==void 0?{height:e(t.a)}:t.b!==void 0?{height:e(t.b)}:{}:Math.abs(t.a-t.b)<1e-6?{height:e(t.a)}:{height:e(t.a),heightEnd:e(t.b)}}function my(t,e,n,r,o){let i=new Map;for(let l of t){if(o.has(l))continue;let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==u&&h.room!==c.room&&r.push(`overlap:${c.room}:${h.room}`);let d=u?[c,u]:[c];if(e.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let h=e.thicknessOf(d)??n.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(hi),...ma(e.heightsOf(d))})}else s.push({a:c.u,b:c.v,left:0,right:e.thicknessOf(d)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[hi(c)],...ma(e.heightsOf(d))})}return{drafts:s,open:a}}function gy(t,e){let n=i=>Ce(G(e[i.b],e[i.a])),r=t.filter(i=>!i.exterior&&!i.free),o=new Map;for(let i of r){if(o.has(i))continue;let s=[i];o.set(i,s);for(let a=0;a<s.length;a++){let l=s[a];for(let c of r){if(o.has(c))continue;(c.a===l.a||c.a===l.b||c.b===l.a||c.b===l.b)&&Math.abs(be(n(l),n(c)))<1e-6&&(s.push(c),o.set(c,s))}}}for(let i of new Set(o.values())){let s=n(i[0]),a=new Map;for(let u of i)for(let d of[u.a,u.b])a.set(d,(a.get(d)??0)+1);let l=new Set;for(let[u,d]of a)if(d===1)for(let h of t){if(!h.exterior||h.free||h.a!==u&&h.b!==u)continue;let p=n(h);Math.abs(be(s,p))>1e-6||l.add(j(s,p)>0?"left":"right")}if(l.size!==1)continue;let c=[...l][0];for(let u of i){let d=u.left+u.right,h=j(n(u),s)>0,p=c==="left"===h;[u.left,u.right]=p?[0,d]:[d,0]}}}var _y=(t,e)=>{let n=i=>Math.round(i*100),[r,o]=t[0]<e[0]||t[0]===e[0]&&t[1]<=e[1]?[t,e]:[e,t];return`w_${n(r[0])}_${n(r[1])}_${n(o[0])}_${n(o[1])}`},fa=(t,e,n,r)=>{let[o,i]=[t.points[e],t.points[(e+1)%t.points.length]],s=Ce(G(i,o)),a=(r-j(o,n))/j(s,n);return[o[0]+s[0]*a,o[1]+s[1]*a]};function ga(t,e,n,r,o,i){return t.filter(s=>{if(s.room!==n.id||s.edge!==r)return!1;let[a,l]=[j(e[s.u],o.dir),j(e[s.v],o.dir)];return Math.min(a,l)>=o.from-i&&Math.max(a,l)<=o.to+i})}function by(t,e,n,r,o){for(let s of o)for(let a of[s.from,s.to])for(let l of[s.a,s.b])e.idOf(fa(r[l.room],l.edge,s.dir,a));let i=Hd(t,e.points,n);for(let s=0;s<6&&o.length;s++){let a=e.points.length;for(let l of o){let[c,u]=[r[l.a.room],r[l.b.room]],d=(f,_)=>ga(i,e.points,f,_,l,n).flatMap(b=>[j(e.points[b.u],l.dir),j(e.points[b.v],l.dir)]),[h,p]=[d(c,l.a.edge),d(u,l.b.edge)];for(let f of h)f>l.from+n&&f<l.to-n&&e.idOf(fa(u,l.b.edge,l.dir,f));for(let f of p)f>l.from+n&&f<l.to-n&&e.idOf(fa(c,l.a.edge,l.dir,f))}if(e.points.length===a)break;i=Hd(t,e.points,n)}return i}function Cd(t,e,n){let[r,o]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.abs(be(Ce(G(o,r)),G(n,r)))}function yy(t,e,n,r,o,i,s){let a=[],l=[];for(let c of t){let[u,d]=[e[c.a.room],e[c.b.room]],h=ga(n,r,u,c.a.edge,c,i).filter(f=>!s.has(f)),p=ga(n,r,d,c.b.edge,c,i).filter(f=>!s.has(f));for(let f of h){let _=[j(r[f.u],c.dir),j(r[f.v],c.dir)].sort((v,y)=>v-y),b=p.find(v=>{let y=[j(r[v.u],c.dir),j(r[v.v],c.dir)].sort((x,k)=>x-k);return!s.has(v)&&Math.abs(y[0]-_[0])<=i&&Math.abs(y[1]-_[1])<=i});if(!b)continue;if(s.add(f),s.add(b),o.hasNoWall([f,b])){l.push([f.room,b.room]);continue}let w=(Cd(d,c.b.edge,r[f.u])+Cd(d,c.b.edge,r[f.v]))/2;a.push({a:f.u,b:f.v,left:0,right:w,exterior:!1,between:!0,roomLeft:f.room,roomRight:b.room,sources:[hi(f),hi(b)],...ma(o.heightsOf([f,b]))})}}return{drafts:a,open:l}}function Me(t){return{exterior:t.wall_exterior,interior:t.wall_interior,...t.rooms_as_drawn?{asDrawn:!0}:{}}}function we(t,e,n=[]){let r=e.eps??.005,o=[],i=dy(r),s=hy(t,i),a=n.filter(k=>Math.hypot(k.b[0]-k.a[0],k.b[1]-k.a[1])>.05),l=a.map(k=>[i.idOf(k.a),i.idOf(k.b)]),c=new Set;for(let k of t){let S=k.points;S.length<3||(k.wall_splits??[]).forEach(($,E)=>{if(!$||E>=S.length)return;let z=S[E],P=G(S[(E+1)%S.length],z),T=ye(P);for(let C of $)C>r&&C<T-r&&c.add(i.idOf(ft(z,st(P,C/T))))})}let u=e.asDrawn?Md(t):[],d=by(s,i,r,t,u),h=py(t,d),p=new Set,f=u.length?yy(u,t,d,i.points,h,r,p):{drafts:[],open:[]},{drafts:_,open:b}=my(d,h,e,o,p);gy(_,i.points),_.push(...f.drafts),b.push(...f.open);let w=_;a.forEach((k,S)=>{let[$,E]=l[S];if($===E)return;let z=[(k.a[0]+k.b[0])/2,(k.a[1]+k.b[1])/2],P=t.find(C=>C.points.length>=3&&N(z,C.points))?.id??null,T=(k.thickness??e.interior)/2;w.push({free:k.id,a:$,b:E,left:T,right:T,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:typeof k.height=="number"&&k.height>0?k.height:void 0,...typeof k.height=="number"&&k.height>0&&typeof k.height_end=="number"&&k.height_end>0&&Math.abs(k.height_end-k.height)>1e-6?{heightEnd:k.height_end}:{},...fy(k)})});let v=Dd(w,i.points,c),y=Od(v,i.points);return{walls:v.map((k,S)=>{let[$,E]=[i.points[k.a],i.points[k.b]],[z,P]=[y.get(`${S}:a`),y.get(`${S}:b`)],T=Ld([z.right,P.left,E,P.right,z.left,$],1e-6);return{id:_y($,E),a:[$[0],$[1]],b:[E[0],E[1]],left:k.left,right:k.right,exterior:k.exterior,roomLeft:k.roomLeft,roomRight:k.roomRight,sources:k.sources,footprint:T,...k.free?{free:k.free}:{},...k.height!==void 0?{height:k.height}:{},...k.heightEnd!==void 0?{heightEnd:k.heightEnd}:{},...k.bottom?{bottom:k.bottom}:{},...k.between?{between:!0}:{}}}),warnings:[...new Set(o)],open:b}}function $t(t,e,n){let r=t.points[e];return ft(r,st(Ce(G(t.points[(e+1)%t.points.length],r)),n))}function Ne(t,e,n){if(t.wall){let o=n.find(a=>a.id===t.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=Ce(G(o.b,o.a));return{room:{id:t.room_id,name:"",area_id:null,points:[o.a,o.b,ft(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===t.room_id);return r&&t.edge<r.points.length?{room:r,edge:t.edge}:null}var Nd=(t,e)=>j(G(e,t.a),Ce(G(t.b,t.a)));function Bt(t,e,n){if(!e.wall)return wy(t,n.room,n.edge,e.offset);let r=t.find(o=>o.free===e.wall);return r?{wall:r,s:Nd(r,$t(n.room,0,e.offset))}:null}function wy(t,e,n,r){for(let o of t)if(o.sources.some(s=>s.room_id===e.id&&s.edge===n&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:Nd(o,$t(e,n,r))};return null}function Wd(t,e){let n=t.points.map(p=>p[0]),r=t.points.map(p=>p[1]);if(t.points.length!==4||new Set(n.map(p=>p.toFixed(3))).size!==2||new Set(r.map(p=>p.toFixed(3))).size!==2)return null;let[o,i,s,a]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],l=p=>Math.max(0,...e.filter(f=>!f.between&&(f.roomLeft===t.id||f.roomRight===t.id)&&p(f)).map(f=>f.roomLeft===t.id?f.left:f.right)),c=(p,f)=>Math.abs(p-f)<.001,u=(p,f,_)=>c(p.a[f],_)&&c(p.b[f],_),d=i-o-l(p=>u(p,0,o))-l(p=>u(p,0,i)),h=a-s-l(p=>u(p,1,s))-l(p=>u(p,1,a));return[Math.round(d*1e3)/1e3,Math.round(h*1e3)/1e3]}var Bd=([t,e])=>{let n=Math.hypot(t,e)||1;return[t/n,e/n]};function vy(t){return t.reduce((e,n,r)=>e+(n[0]*t[(r+1)%t.length][1]-t[(r+1)%t.length][0]*n[1]),0)/2}function Vd(t,e){let n=t.length;if(n<3||Math.abs(e)<1e-9)return t.map(([o,i])=>[o,i]);let r=vy(t)>=0?1:-1;return t.map((o,i)=>{let s=t[(i+n-1)%n],a=t[(i+1)%n],[l,c]=Bd([o[0]-s[0],o[1]-s[1]]),[u,d]=Bd([a[0]-o[0],a[1]-o[1]]),h=[c*r,-l*r],p=[d*r,-u*r],f=[h[0]+p[0],h[1]+p[1]],_=Math.hypot(f[0],f[1]);if(_<1e-6)return[o[0]+h[0]*e,o[1]+h[1]*e];let b=(f[0]*h[0]+f[1]*h[1])/_,w=Math.min(4,1/Math.max(.25,b));return[o[0]+f[0]/_*e*w,o[1]+f[1]/_*e*w]})}function Vt(t){let e=t.map(r=>r[0]),n=t.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}function ky(t){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,n=new Map;for(let i of t)for(let s of[i.a,i.b])n.set(e(s),[...n.get(e(s))??[],i]);let r=new Set,o=null;for(let i of t){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(n.get(e(a))??[]).find(u=>!r.has(u));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(Ee(s))>Math.abs(Ee(o)))&&(o=s)}return o}function _a(t,e,n,r){let o=we(t,{exterior:n,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?ky(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],u=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(u[1]-a[1])-(a[1]-c[1])*(u[0]-a[0]))>1e-6});return s.length>=3?Vd(s,n):null}function St(t,e){let n=Se(t),r=Ae(t),o=n.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=(w,v)=>[w,v,r.y(v)],u=c(a,-i),d=c(l,-i),h=c(l,o+s),p=c(a,o+s),[f,_]=[at(t.pitch_a),at(t.pitch_b)],b=w=>[w,r.vr,r.rh];if(t.ends&&(t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip")){let w=(n.u1-n.u0)/2,v=Math.min(w,Math.min(r.vr,o-r.vr)||o/2),y=Math.min(r.y(0),r.y(o)),x=y+(r.rh-y)*Math.min(.9,Math.max(.2,t.halfhip??.55)),k=f>1e-6?Math.min(r.vr,(x-t.eave_a)/f):r.vr,S=_>1e-6?Math.max(r.vr,o-(x-t.eave_b)/_):r.vr,$=Math.min(w-.1,(r.rh-x)/Math.max(.2,f)),E=[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]],z=[[0,r.y(0)],[k,x],[S,x],[o,r.y(o)]],P=(B,ue,Ke)=>{if(B==="hip")return{upA:[],upB:[],ridge:b(ue===a?n.u0+v*Ke:n.u1-v*Ke),profile:null};if(B==="halfhip"){let Ao=b(ue===a?n.u0+$:n.u1-$);return{upA:[[ue,k,x]],upB:[[ue,S,x]],ridge:Ao,profile:z}}return{upA:[],upB:[],ridge:b(ue),profile:E}},T=P(t.ends[0],a,1),C=P(t.ends[1],l,1),W=[[u,d,...C.upA,C.ridge,T.ridge,...[...T.upA].reverse()],[T.ridge,C.ridge,...[...C.upB].reverse(),h,p,...T.upB]],V=[[T.ridge,C.ridge]];for(let[B,ue,Ke]of[[T,u,p],[C,d,h]])B.profile===null?(W.push(B===T?[p,u,B.ridge]:[d,h,B.ridge]),V.push([ue,B.ridge],[Ke,B.ridge])):B.upA.length&&(W.push(B===T?[B.upB[0],B.upA[0],B.ridge]:[B.upA[0],B.upB[0],B.ridge]),V.push([B.upA[0],B.ridge],[B.upB[0],B.ridge]));let Y=B=>B.profile===null?[]:B.upA.length?[B.upA[0],B.upB[0]]:[B.ridge],Q=[u,d,...Y(C),h,p,...[...Y(T)].reverse()];return{faces:W,rim:Q,ridges:V,gable:E,endProfiles:[T.profile,C.profile]}}switch(t.shape){case"pent":return{faces:[[u,d,h,p]],rim:[u,d,h,p],ridges:[[h,p]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let w=(n.u1-n.u0)/2,v=t.shape==="pyramid"?w:Math.min(w,Math.min(r.vr,o-r.vr)||o/2),y=b(n.u0+v),x=b(n.u1-v);return t.shape==="pyramid"?{faces:[[u,d,y],[d,h,y],[h,p,y],[p,u,y]],rim:[u,d,h,p],ridges:[[u,y],[p,y],[d,y],[h,y]],gable:null}:{faces:[[u,d,x,y],[y,x,h,p],[p,u,y],[d,h,x]],rim:[u,d,h,p],ridges:[[y,x],[u,y],[p,y],[d,x],[h,x]],gable:null}}case"halfhip":{let w=Math.min(r.y(0),r.y(o)),v=w+(r.rh-w)*Math.min(.9,Math.max(.2,t.halfhip??.55)),y=f>1e-6?Math.min(r.vr,(v-t.eave_a)/f):r.vr,x=_>1e-6?Math.max(r.vr,o-(v-t.eave_b)/_):r.vr,k=Math.min((n.u1-n.u0)/2-.1,(r.rh-v)/Math.max(.2,f)),S=b(n.u0+k),$=b(n.u1-k),E=[a,y,v],z=[a,x,v],P=[l,y,v],T=[l,x,v];return{faces:[[u,d,P,$,S,E],[S,$,T,h,p,z],[z,E,S],[P,T,$]],rim:[u,d,P,T,h,p,z,E],ridges:[[S,$],[E,S],[z,S],[P,$],[T,$]],gable:[[0,r.y(0)],[y,v],[x,v],[o,r.y(o)]]}}case"mansard":{let w=Hr(o,t.eave_a,t.eave_b,f,_),v=[a,w.vla,w.yla],y=[l,w.vla,w.yla],x=[a,o-w.vlb,w.ylb],k=[l,o-w.vlb,w.ylb],S=[a,w.vr,w.rh],$=[l,w.vr,w.rh];return{faces:[[u,d,y,v],[v,y,$,S],[S,$,k,x],[x,k,h,p]],rim:[u,d,y,$,k,h,p,x,S,v],ridges:[[S,$],[v,y],[x,k]],gable:[[0,r.y(0)],[w.vla,w.yla],[w.vr,w.rh],[o-w.vlb,w.ylb],[o,r.y(o)]]}}default:{let w=b(a),v=b(l);return{faces:[[u,d,v,w],[w,v,h,p]],rim:[u,d,v,h,p,w],ridges:[[w,v]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function an(t,e,n){let r=null;for(let o of t.faces){if(!N([e,n],o.map(([h,p])=>[h,p])))continue;let[i,s]=o,a=o.slice(2).find(h=>Math.abs((s[0]-i[0])*(h[1]-i[1])-(s[1]-i[1])*(h[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let d=i[2]-(u[0]*(e-i[0])+u[2]*(n-i[1]))/u[1];r=r===null?d:Math.min(r,d)}return r}function Cr(t,e,n){let r=Se(e),o=t.floors.flatMap(d=>d.rooms.filter(h=>h.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(h=>o.some(p=>N(h,p.points))),s=.35,a=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),l=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:n,u=(d,h)=>{let p=e.overhang_sides?.[d];return typeof p=="number"&&Number.isFinite(p)?Math.min(2,Math.max(0,p)):h};return{a:u("a",c(i(a.map(d=>r.at(d,-s))))),b:u("b",c(i(a.map(d=>r.at(d,r.w+s))))),u0:u("u0",c(i(l.map(d=>r.at(r.u0-s,d))))),u1:u("u1",c(i(l.map(d=>r.at(r.u1+s,d)))))}}var pi=t=>Math.abs((t.x1-t.x0)*(t.z1-t.z0)),Kd=t=>t.shape==="flat"||t.shape==="parapet",ln=t=>Math.round(t*100)/100;function Hn(t,e){let[n,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return t.filter(i=>{if(i===e||i.dormer||i.open||Kd(i)||pi(i)<pi(e)*1.5)return!1;let s=Or(i);return n>=s.x0&&n<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||pi(s)<pi(i)?s:i,null)}function ba(t,e,n,r){let o=Se(t),i=Ae(t),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[t.eave_a,t.pitch_a]:[t.eave_b,t.pitch_b],u=l+1.4,d=u+s/2*Math.tan(35*Ln),h=Math.max(.8,Math.min(o.w/2-.2,(d-l)/Math.max(.15,Math.tan(Math.min(80,c)*Ln)))),[p,f]=e==="a"?[0,h]:[o.w-h,o.w],_=o.at(a,p),b=o.at(a+s,f);return{id:n,x0:ln(Math.min(_[0],b[0])),z0:ln(Math.min(_[1],b[1])),x1:ln(Math.max(_[0],b[0])),z1:ln(Math.max(_[1],b[1])),shape:"gable",axis:t.axis==="x"?"z":"x",eave_a:ln(u),eave_b:ln(u),pitch_a:35,pitch_b:35,base:ln(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function $y(t,e){let n=St(t,{u0:0,u1:0,a:0,b:0}),r=Ae(t);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=on(t,i,s);return an(n,a,l)??r.y(l)}}function Nr(t,e){if(Kd(e))return e;let n=Se(e),r=Ae(e).rh,o=$y(t,n),i=o(n.u0)<=o(n.u1),[s,a]=i?[n.u0,n.u1]:[n.u1,n.u0],l=i?1:-1,c=a;for(let h=.5;h<Math.abs(a-s);h+=.05)if(o(s+l*h)>=r-.02){c=s+l*h;break}if(Math.abs(c-a)<.05)return e;let u={...e},d=a===n.u1;return e.axis==="x"?u[d?"x1":"x0"]=c:u[d?"z1":"z0"]=c,u}var ya=.14,Gd=t=>t.shape==="flat"||t.shape==="parapet";function wa(t,e){return!t.open&&Math.min(t.base,t.eave_a,t.eave_b)<e-.05}function Wr(t,e,n){let r=Math.max(0,t.settings.roof.overhang??0),o=1e-6,i=[];for(let s of t.settings.roof.sections??[]){if(s.open)continue;let[a,l,c,u]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],[d,h]=pa(s,e,n);if(d<a-o||d>l+o||h<c-o||h>u+o||s.points&&s.points.length>=3&&!N([e,n],s.points))continue;let[p,f]=on(s,e,n),_=Math.max(0,s.overhang??r),b=Gd(s)?null:an(St(s,{u0:_,u1:_,a:_,b:_}),p,f);i.push((b??Ae(s).y(f))-ya)}return i.length?Math.max(...i):null}function va(t,e,n){let r=[],o=e+n+ya;for(let i of t.settings.roof.sections??[]){if(i.open||Gd(i)||i.shape==="mansard")continue;let s=Se(i),a=Ae(i),[l,c]=[at(i.pitch_a),at(i.pitch_b)],u=[];l>1e-6&&u.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let d of u)d<=.01||d>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(d)-o)>1e-6||r.push([s.at(s.u0,d),s.at(s.u1,d)])}return r}function ka(t,e,n,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,n+(o-n)*l]);let s=t.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>N(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function xa(t,e){let n=t.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation),r=n.filter(l=>l.elevation<e.base-.05),{x0:o,z0:i,x1:s,z1:a}=e;if(o!==void 0&&i!==void 0&&s!==void 0&&a!==void 0){let l=[];for(let u of[.2,.5,.8])for(let d of[.2,.5,.8])l.push([o+(s-o)*u,i+(a-i)*d]);let c=r.findLast(u=>u.rooms.some(d=>d.points.length>=3&&l.some(h=>N(h,d.points))));if(c)return c}return r.at(-1)??n[0]}var Mt=t=>Math.round(t*1e3)/1e3;function Br(t,e=n=>`roof_${n+1}`){let n=t.settings.roof?.pitch??35,r=t.settings.wall_exterior,o=t.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(u=>N(c,u.points));for(let l of o){let c=l.rooms.filter(b=>b.points.length>=3),u=[...new Set(c.flatMap(b=>b.points.map(w=>Mt(w[0]))))].sort((b,w)=>b-w),d=[...new Set(c.flatMap(b=>b.points.map(w=>Mt(w[1]))))].sort((b,w)=>b-w),h=d.slice(0,-1).map((b,w)=>u.slice(0,-1).map((v,y)=>{let x=[(u[y]+u[y+1])/2,(d[w]+d[w+1])/2];return a(c,x)&&!a(s,x)})),p=h.map(b=>b.map(()=>!1)),f=(b,w)=>h[w][b]&&!p[w][b],_=(b,w,v,y)=>{let k=c.filter(S=>{for(let $=v;$<=y;$++)for(let E=b;E<=w;E++)if(h[$][E]&&N([(u[E]+u[E+1])/2,(d[$]+d[$+1])/2],S.points))return!0;return!1}).map(S=>typeof S.ceiling=="number"&&S.ceiling>0?S.ceiling:l.height);return l.elevation+(k.length?Math.max(...k):l.height)};for(let b=0;b<h.length;b++)for(let w=0;w<(h[b]?.length??0);w++){if(!f(w,b))continue;let v=w;for(;v+1<h[b].length&&f(v+1,b);)v++;let y=b;for(;y+1<h.length&&Array.from({length:v-w+1},(z,P)=>f(w+P,y+1)).every(Boolean);)y++;for(let z=b;z<=y;z++)for(let P=w;P<=v;P++)p[z][P]=!0;let[x,k]=[u[w]-r,u[v+1]+r],[S,$]=[d[b]-r,d[y+1]+r];if(Math.min(k-x,$-S)<.8)continue;let E=_(w,v,b,y);i.push({id:e(i.length),x0:Mt(x),z0:Mt(S),x1:Mt(k),z1:Mt($),shape:"gable",axis:k-x>=$-S?"x":"z",eave_a:Mt(E),eave_b:Mt(E),pitch_a:n,pitch_b:n,base:Mt(E),overhang:null})}s.push(...c)}return i}var Te=Math.PI/180,qe=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],cn=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Cn=t=>Math.hypot(t[0],t[1],t[2]),un=t=>{let e=Cn(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Ud=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Ye=t=>Math.round(t*100)/100,Vr=([t,e],n)=>(Math.atan2(t,-e)/Te-n+720)%360;var Zd=.25;function qd(t,e,n,r,o,i,s){let a=o-n>=i-r,l=a?o-n:i-r;return{key:`${t}:top`,section:e,side:"top",flat:!0,o:[n,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-n,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Yd(t,e){let n=un(Ud(t,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var Xd=t=>{let e=un([-t[0],0,-t[2]]);return[e[0],e[2]]};function Rt(t,e,n,r,o,i,s,a){let l=un(qe(o,r)),c=un(qe(i,r));return{key:t,section:e,side:n,flat:!1,o:r,eu:l,es:c,n:Yd(l,c),lu:Cn(qe(o,r)),ls:Cn(qe(i,r)),pitch:s,span:a,facing:Xd(c)}}function jd(t,e,n,r,o,i){let s=Cn(qe(o,r));if(s<.3)return null;let a=un(qe(o,r)),l=qe(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=Cn(u);if(d<.3)return null;let h=un(u),p=f=>{let _=Math.min(1,Math.max(0,f/d));return[c*_,s-(s-c)*_]};return{key:t,section:e,side:n,flat:!1,o:r,eu:a,es:h,n:Yd(a,h),lu:s,ls:d,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/Te,span:p,facing:Xd(h)}}function Sy(t,e){let n=Se(t),r=Ae(t),o=(v,y,x)=>{let[k,S]=n.at(v,y);return[k,x,S]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a,u=r.y(-i),d=r.y(n.w+s);if(t.shape==="flat"||t.shape==="parapet"){let[v,y]=[n.at(a,-i),n.at(l,n.w+s)];return[qd(t.id,t.id,Math.min(v[0],y[0]),Math.min(v[1],y[1]),Math.max(v[0],y[0]),Math.max(v[1],y[1]),t.eave_a+Zd)]}if(t.shape==="pent")return[Rt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,n.w+s,d),t.pitch_a,()=>[0,c])];if(t.shape==="mansard")return Ry(t,n,a,l,i,s);let h=t.shape==="hip"||t.shape==="pyramid",p=(n.u1-n.u0)/2,f=t.shape==="pyramid"?p:h?Math.min(p,Math.min(r.vr,n.w-r.vr)||n.w/2):0,_=h?n.u0+f-a:0,b=h?l-(n.u1-f):0,w=[];if(r.vr>.3){let v=Math.hypot(r.vr+i,r.rh-u);w.push(Rt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,r.vr,r.rh),t.pitch_a,y=>[_*(y/v),c-b*(y/v)]))}if(n.w-r.vr>.3){let v=Math.hypot(n.w+s-r.vr,r.rh-d);w.push(Rt(`${t.id}:b`,t.id,"b",o(l,n.w+s,d),o(a,n.w+s,d),o(l,r.vr,r.rh),t.pitch_b,y=>[b*(y/v),c-_*(y/v)]))}if(h){let v=jd(`${t.id}:c`,t.id,"c",o(a,n.w+s,d),o(a,-i,u),o(n.u0+f,r.vr,r.rh)),y=jd(`${t.id}:d`,t.id,"d",o(l,-i,u),o(l,n.w+s,d),o(n.u1-f,r.vr,r.rh));w.push(...[v,y].filter(x=>x!==null))}return w}function My(t,e){if(!e.dormer||e.shape!=="gable")return[];let n=Hn(t,e);if(!n)return[];let r=Nr(n,e),o=Se(r),i=Ae(r),s=St(n,{u0:0,u1:0,a:0,b:0}),a=C=>{let[W,V]=o.at(C,o.w/2),[Y,Q]=on(n,W,V);return an(s,Y,Q)??Ae(n).y(Q)},l=a(o.u0)<=a(o.u1),c=l?o.u0:o.u1,[u,d]=[o.at(0,0),o.at(1,0)],[h,p]=[d[0]-u[0],d[1]-u[1]],f=Math.hypot(h,p)||1,_=l?[-h/f,0,-p/f]:[h/f,0,p/f],b=[-_[2],0,_[0]],[w,v]=[o.at(c,0),o.at(c,1)],y=(v[0]-w[0])*b[0]+(v[1]-w[1])*b[2]>0?0:o.w,x=Math.min(r.base,i.y(0)),k=i.y(0)-x,S=o.w,$=i.rh-x;if($<.3||S<.5)return[];let E=Math.abs(i.vr-y),[z,P]=o.at(c,y),T=C=>{if(C<=k)return[0,S];let W=Math.min(1,Math.max(0,(C-k)/Math.max(.01,$-k)));return[E*W,S-(S-E)*W]};return[{key:`${e.id}:front`,section:e.id,side:"front",flat:!1,o:[z,x,P],eu:b,es:[0,1,0],n:_,lu:S,ls:$,pitch:90,span:T,facing:[_[0],_[2]]}]}function Ry(t,e,n,r,o,i){let s=Hr(e.w,t.eave_a,t.eave_b,at(t.pitch_a),at(t.pitch_b)),a=(f,_)=>{let[b,w]=e.at(f,_);return[b,s.y(_),w]},l=r-n,c=()=>[0,l],u=(f,_)=>Math.atan2(f,_)/Te,d=[],[h,p]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&d.push(Rt(`${t.id}:a`,t.id,"a",a(n,-o),a(r,-o),a(n,s.vla),t.pitch_a,c)),s.vr-s.vla>.3&&d.push(Rt(`${t.id}:au`,t.id,"a",a(n,s.vla),a(r,s.vla),a(n,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&d.push(Rt(`${t.id}:b`,t.id,"b",a(r,h),a(n,h),a(r,p),t.pitch_b,c)),p-s.vr>.3&&d.push(Rt(`${t.id}:bu`,t.id,"b",a(r,p),a(n,p),a(r,s.vr),u(s.rh-s.ylb,p-s.vr),c)),d}function $a(t){return t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0]??null}function X(t){let e=t.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom"){let y=e.sections??[];return y.flatMap(x=>[...Sy(x,Cr(t,x,x.overhang??e.overhang)),...My(y,x)])}let n=$a(t);if(!n)return[];let r=n.rooms.flatMap(y=>y.points.map(x=>x[0])),o=n.rooms.flatMap(y=>y.points.map(x=>x[1])),i=t.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=n.elevation+n.height;if(e.type==="flat")return[qd("main",null,s,l,a,c,u+Zd)];let d=a-s>=c-l,h=e.ridge==="short"?!d:d,p=(h?c-l:a-s)/2,f=p*Math.tan(e.pitch*Te),_=(y,x,k)=>h?[y,u+k,(l+c)/2+x]:[(s+a)/2+x,u+k,y],[b,w]=h?[s,a]:[l,c],v=()=>[0,w-b];return[Rt("main:a",null,"a",_(b,-p,0),_(w,-p,0),_(b,0,f),e.pitch,v),Rt("main:b",null,"b",_(b,p,0),_(w,p,0),_(b,0,f),e.pitch,v)]}function Xe(t,e){let n=[];for(let r of t.floors.filter(o=>!e||o.id===e)){let{walls:o}=we(r.rooms,Me(t.settings),r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),h=(p,f,_,b)=>n.push({key:p,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:b,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:{floorId:r.id}});h(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&h(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return n}var We="ground";function fi(t){let e=t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>n.elevation-r.elevation);return e.find(n=>n.elevation>-.5)??e[0]??t.floors[0]??null}function mi(t,e){let n=(e.rotation??0)*Te,r=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=fi(t),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:zu(i,s,a)):e.base??0;return{key:We,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function Fe(t,e,n=X(t)){return e.face===We?mi(t,e):e.face.startsWith("wall:")?Xe(t,e.face.split(":")[1]).find(r=>r.key===e.face)??null:n.find(r=>r.key===e.face)??null}var gi=1.13,Gr=1.72,Je=.025,lt=.07;function dn(t){let e=t.module_w||gi,n=t.module_h||Gr;return t.portrait===!1?[n,e]:[e,n]}function Ur(t){return t.layout?.length?t.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,t.rows)},()=>Math.max(1,t.cols))}function Sa(t,e){return t.flat?Math.min(45,Math.max(0,e.tilt??15))*Te:t.wall?Math.min(90,Math.max(0,e.tilt??0))*Te:Math.min(45,Math.max(0,e.tilt??0))*Te}function jr(t,e){let[,n]=dn(e),r=Sa(t,e);return t.wall?n*Math.cos(r)+Je:!t.flat&&r<.001?n+Je:t.flat&&e.rack==="ew"?n*Math.cos(r)+.08:n*Math.cos(r)+Math.max(.3,2*n*Math.sin(r))}function Nn(t,e){let[n,r]=dn(e),o=Ur(e),i=Math.max(1,...o);return[i*n+(i-1)*Je,(o.length-1)*jr(t,e)+r*Math.cos(Sa(t,e))]}var Ey=t=>t.flat&&!t.unbounded&&!t.wall;function Jd(t,e){if(!Ey(t)||!e.rotation)return null;let n=e.rotation*Te,[r,o]=Nn(t,e);return{cos:Math.cos(n),sin:Math.sin(n),u:e.u+r/2,s:e.v+o/2}}function Qe(t,e,n=!1){let[r,o]=dn(e),i=Sa(t,e),s=o*Math.cos(i),a=jr(t,e),l=Ur(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=Jd(t,e),h=(b,w)=>d?[d.u+(b-d.u)*d.cos-(w-d.s)*d.sin,d.s+(b-d.u)*d.sin+(w-d.s)*d.cos]:[b,w],p=(b,w,v)=>{let[y,x]=h(b,w);return[0,1,2].map(k=>t.o[k]+t.eu[k]*y+t.es[k]*x+t.n[k]*v)},f=(b,w)=>{let[v,y]=h(b,w);if(t.unbounded)return!0;if(y<-1e-6||y>t.ls+1e-6)return!1;let[x,k]=t.span(y);return v>=x-1e-6&&v<=k+1e-6},_=[];return l.forEach((b,w)=>{let v=e.align==="right"?c-b:e.align==="center"?(c-b)/2:0;for(let y=0;y<b;y++){let x=`${w}:${y}`,k=u.has(x);if(k&&!n)continue;let S=e.u+(y+v)*(r+Je),$=S+r,E=e.v+w*a,z=E+(t.flat||t.wall||i>.001?s:o);if([[S,E],[$,E],[$,z],[S,z]].every(([P,T])=>f(P,T)))if(t.wall&&i>.001){let P=lt+o*Math.sin(i),[T,C]=e.flip?[P,lt]:[lt,P],W=[p(S,E,T),p($,E,T),p($,z,C),p(S,z,C)],V=e.flip?E:z;_.push({corners:W,posts:[S+.05,$-.05].map(Y=>[p(Y,V,0),p(Y,V,P)]),cell:x,skipped:k})}else if(!t.flat&&i>.001){let P=lt+o*Math.sin(i),T=[p(S,E,lt),p($,E,lt),p($,z,P),p(S,z,P)];_.push({corners:T,posts:[S+.05,$-.05].map(C=>[p(C,z,0),p(C,z,P)]),cell:x,skipped:k})}else if(!t.flat)_.push({corners:[p(S,E,lt),p($,E,lt),p($,z,lt),p(S,z,lt)],posts:[],cell:x,skipped:k});else{let T=.15+o*Math.sin(i),C=e.rack==="ew"&&w%2===1?!e.flip:!!e.flip,[W,V]=C?[z,E]:[E,z],Y=[p(S,W,.15),p($,W,.15),p($,V,T),p(S,V,T)],Q=[S+.05,$-.05].flatMap(B=>[[p(B,W,0),p(B,W,.15)],[p(B,V,0),p(B,V,T)]]);_.push({corners:Y,posts:Q,cell:x,skipped:k})}}}),_}function mt(t,e){if(t.unbounded)return{u:e.u,v:e.v};let[n,r]=Nn(t,e),o=Jd(t,e);if(o){let[s,a]=[(n*Math.abs(o.cos)+r*Math.abs(o.sin))/2,(n*Math.abs(o.sin)+r*Math.abs(o.cos))/2],l=(d,h,p)=>Math.floor(Math.max(h,Math.min(d,p-h))*100+1e-6)/100,[c,u]=[e.u+n/2,e.v+r/2];return{u:Math.round((l(c,s,t.lu)-n/2)*100)/100,v:Math.round((l(u,a,t.ls)-r/2)*100)/100}}let i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,t.lu-n))),v:i(Math.min(Math.max(0,e.v),Math.max(0,t.ls-r)))}}function Zr(t,e){let[n,r]=Nn(t,e),[o,i]=[e.u+n/2,e.v+r/2];return[t.o[0]+t.eu[0]*o+t.es[0]*i,t.o[2]+t.eu[2]*o+t.es[2]*i]}var _i=.78,qr=1.18,hn=t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:t.w||_i,module_h:t.h||qr,tilt:0});function Ma(t,e){let n=Qe(t,hn(e))[0];if(!n)return null;let r=t.flat?-.03:.05,o=i=>[i[0]-t.n[0]*r,i[1]-t.n[1]*r,i[2]-t.n[2]*r];return n.corners.map(o)}var Kr={brick:{w:.5,d:.5,h:1},round:{w:.4,d:.4,h:1},wide:{w:1,d:.5,h:1},steel:{w:.2,d:.2,h:1.2}};function pn(t){let e=t.shape??"brick",n=Kr[e]??Kr.brick;return{shape:e,w:t.w||n.w,d:t.d||n.d,h:t.h||n.h}}function Et(t,e){let{w:n,d:r}=pn(t),o=e&&!e.flat?Math.cos(e.pitch*Te):1;return{id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:n,module_h:r/Math.max(.2,o),tilt:0}}function Ra(t,e){let n=Et(e,t),[r,o]=[n.module_w,n.module_h],i=(u,d)=>[t.o[0]+t.eu[0]*u+t.es[0]*d,t.o[1]+t.eu[1]*u+t.es[1]*d,t.o[2]+t.eu[2]*u+t.es[2]*d],[s,a]=[i(e.u+r/2,e.v),i(e.u+r/2,e.v+o)],l=i(e.u+r/2,e.v+o/2),c=u=>{let d=Math.hypot(u[0],u[2])||1;return[u[0]/d,u[2]/d]};return{center:[l[0],l[2]],along:c(t.eu),across:c(t.es),low:Math.min(s[1],a[1]),high:Math.max(s[1],a[1])}}function Ea(t,e){let[n]=dn(e);return Ye((t.lu-(e.cols*n+(e.cols-1)*Je))/2)}var Yr=.4;function Wn(t,e){let n={id:e,face:t.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:t.flat?15:null,flip:!1,entity:null,look:"black"},[r]=dn(n),[o,i]=t.span(t.ls/2);for(n.cols=Math.max(1,Math.floor((i-o-2*Yr+Je)/(r+Je))),n.rows=Math.max(1,Math.min(4,Math.floor((t.ls-2*Yr)/jr(t,n))));n.cols>1&&Qe(t,{...n,u:Ea(t,n),v:Yr}).length<n.rows*n.cols;)n.cols--;return n.u=Ea(t,n),n.v=Yr,n}function bi(t,e){let n={...e,face:t.key,tilt:t.flat?e.tilt??15:null,rotation:null,flip:!1};return n.u=Ea(t,n),n.v=Yr,{...n,...mt(t,n)}}function Aa(t,e,n){let r=t.settings.north??0,o=a=>a.lu*(1.3+Math.cos((Vr(a.facing,r)-180)*Math.PI/180)),i=Xe(t,n).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...Wn(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+Je)/(Gr+Je))),s.u=Ye((i.lu-(s.cols*Gr+(s.cols-1)*Je))/2),s.v=Ye(Math.max(0,i.ls-gi-.3)),s}function Xr(t,e){let n=t.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=n.length?Math.max(...n.map(i=>i[0]))+3:0,o=n.length?Math.min(...n.map(i=>i[1])):0;return{id:e,face:We,u:Ye(r),v:Ye(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(t.settings.north??0)||0,look:"black",entity:null}}function Jr(t,e,n){let r=mi(t,e),[o,i]=Nn(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=n*Te,u=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,d=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:Ye(u),v:Ye(d),rotation:(Math.round(n)%360+360)%360}}function Qr(t,e){let[n,r]=t.span(t.ls/2);return{id:e,face:t.key,u:Ye((n+r-_i)/2),v:Ye(Math.max(0,Math.min(t.ls-qr,t.ls*.45-qr/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function eo(t,e){let n=Kr.brick,[r,o]=t.span(t.ls*.8),i=Et({id:e,face:t.key,u:0,v:0},t).module_h;return{id:e,face:t.key,u:Ye((r+o-n.w)/2),v:Ye(Math.max(0,Math.min(t.ls-i,t.ls*.8-i/2))),shape:"brick",w:null,d:null,h:null}}function Bn(t,e){let[n,r]=[e[0]-t.o[0],e[1]-t.o[2]],[o,i,s,a]=[t.eu[0],t.eu[2],t.es[0],t.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(n*a-r*s)/l,u=(o*r-i*n)/l;if(u<0||u>t.ls)return null;let[d,h]=t.span(u);return c>=d&&c<=h?{u:c,s:u}:null}function Fa(t,e){let n=null;for(let r of t){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],u=l>=0&&l<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};u&&c>.35&&c<=.8&&!n&&(n={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=Bn(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!n||i>n.y)&&(n={face:r,...o,y:i})}return n&&{face:n.face,u:n.u,s:n.s}}function yi(t,e,n){let r=cn(n,t.n);if(Math.abs(r)<1e-6)return null;let o=cn(qe(t.o,e),t.n)/r;if(o<=0)return null;let i=qe([e[0]+n[0]*o,e[1]+n[1]*o,e[2]+n[2]*o],t.o);return{t:o,u:cn(i,t.eu),s:cn(i,t.es)}}function za(t,e,n){if(t.unbounded)return!0;if(n<0||n>t.ls)return!1;let[r,o]=t.span(n);return e>=r&&e<=o}function Ta(t,e,n,r){return Qe(t,e).some(i=>{let s=i.corners.map(c=>{let u=qe(c,t.o);return[cn(u,t.eu),cn(u,t.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return n>=Math.min(...a)-.05&&n<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var Ay=["n","ne","e","se","s","sw","w","nw"],Pa=(t,e)=>Ay[Math.round(Vr(t.facing,e)/45)%8];function to(t,e){let n=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Vr(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...t].sort((r,o)=>n(o)-n(r))[0]??null}var nh=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Qd={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},eh=t=>typeof t=="string"?t:t[0],wi=t=>typeof t=="string"?it[t]:t[1],Vn=.05,Fy=.02,th=t=>Math.round(t*1e3)/1e3;function zy(t,e,n,r){switch(e){case"back":return{x:t.x0+n,z:t.z0+r,turn:0};case"right":return{x:t.x1-r,z:t.z0+n,turn:90};case"front":return{x:t.x1-n,z:t.z1-r,turn:180};case"left":return{x:t.x0+r,z:t.z1-n,turn:270}}}function rh(t,e,n){let r=pe(t.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,u,d,[h,p,f])=>{s.push({id:n(),type:l,x:th(c),z:th(u),rotation:d,w:h,d:p,h:f,variant:null,entity:null,power:null})};for(let[l,c,u]of Qd[e].rows){let d=l==="back"||l==="front"?o:i,h=0,p=[];for(let _ of u){if(h+wi(_)[0]>d-.1)break;p.push(_),h+=wi(_)[0]}let f=c==="start"?Vn:c==="end"?d-h-Vn:(d-h)/2;for(let _ of p){let b=wi(_),w=zy(r,l,f+b[0]/2,b[1]/2+Fy);a(eh(_),w.x,w.z,w.turn,b),f+=b[0]}}for(let[l,c,u,d]of Qd[e].spots){let h=wi(l),p=(b,w,v)=>Math.min(v,Math.max(w,b)),f=p(r.x0+o*c,r.x0+h[0]/2+Vn,r.x1-h[0]/2-Vn),_=p(r.z0+i*u,r.z0+h[1]/2+Vn,r.z1-h[1]/2-Vn);a(eh(l),f,_,d,h)}return s}var Ty=30*Math.PI/180,oh=.05;function Ia(t){let e=t.points.length;return t.points.map((n,r)=>{let o=t.points[(r+1)%e];return Math.hypot(o[0]-n[0],o[1]-n[1])})}function no(t){return Ia(t).reduce((e,n)=>e+n,0)}function Py(t,e){let n=Ia(t),r=0;for(let o=0;o<e&&o<n.length;o++)r+=n[o];return r}function Iy(t,e){let n=t.points.length,[r,o,i]=[t.points[e],t.points[(e+1)%n],t.points[(e+2)%n]],s=[o[0]-r[0],o[1]-r[1]],a=[i[0]-o[0],i[1]-o[1]],[l,c]=[Math.hypot(s[0],s[1]),Math.hypot(a[0],a[1])];return l<1e-9||c<1e-9?0:Math.acos(Math.max(-1,Math.min(1,(s[0]*a[0]+s[1]*a[1])/(l*c))))}function Da(t,e,n){let r=Ia(t),o=r.length,i=r.reduce((p,f)=>p+f,0);if(o<3||!(i>0)||!(n>0))return null;let s=Math.min(n,i),a=(e%i+i)%i,l=0,c=0;for(;l<o-1&&a>=c+r[l];)c+=r[l],l++;let u=a-c,d=s,h=[];for(let p=0;p<=o&&d>1e-9;p++){let f=r[l]-u,_=Math.min(d,f);_>1e-9&&h.push({edge:l,t0:u,t1:u+_}),d-=_,u=0;let b=(l+1)%o;if(d>1e-9&&Iy(t,l)>Ty)break;l=b}for(;h.length>1&&h[0].t1-h[0].t0<oh;)h.shift();for(;h.length>1&&h[h.length-1].t1-h[h.length-1].t0<oh;)h.pop();return h.length?h.map(p=>({edge:p.edge,offset:(p.t0+p.t1)/2,width:p.t1-p.t0})):null}function Kn(t,e){let n=e[0];return n?{from:Py(t,n.edge)+n.offset-n.width/2,width:e.reduce((r,o)=>r+o.width,0)}:null}function Kt(t,e){return e.front?t.filter(n=>n.front===e.front):[e]}function Oa(t,e){let n=t.points.length,r=1/0,o=0,i=0;for(let s=0;s<n;s++){let a=t.points[s],l=t.points[(s+1)%n],c=l[0]-a[0],u=l[1]-a[1],d=Math.hypot(c,u);if(d<1e-6)continue;let h=Math.max(0,Math.min(d,((e[0]-a[0])*c+(e[1]-a[1])*u)/d)),p=Math.hypot(e[0]-(a[0]+c*h/d),e[1]-(a[1]+u*h/d));p<r&&(r=p,o=i+h),i+=d}return o}function ro(t,e,n,r,o,i=()=>L("opening")){let s=Da(e,r,o);if(!s)return null;let a=Kt(t,n),l=new Set(a.map(p=>p.id)),c=s.length>1?a[0].front??`front-${a[0].id}`:null,u=s.map((p,f)=>({...n,id:f===0?a[0].id:i(),edge:p.edge,offset:p.offset,width:p.width,front:c})),d=[],h=!1;for(let p of t){if(!l.has(p.id)){d.push(p);continue}h||(d.push(...u),h=!0)}return d}var Ca=globalThis,La=Ca.__nextfloorBuiltin?.de??{},Ha=Ca.__nextfloorBuiltin?.en??{};Ca.__nextfloorBuiltin??={de:La,en:Ha};var ih=()=>typeof M=="object"&&M||{},Dy=globalThis,Oy=Dy.__nextfloorTexts??=new Map;function Ly(t){let e=t.toLowerCase(),n=/^zh[-_](hant|tw|hk|mo)/.test(e)&&"zh-tw"in ih()?"zh-tw":e.split(/[-_]/)[0];return n!=="de"&&n!=="en"&&n in ih()?n:void 0}function sh(t){let e=Ly(t),n=e===void 0?void 0:Oy.get(e);return n instanceof Promise?void 0:n}function vi(t,e){return sh(t)?.[e]}function ke(t,e,n={}){let r=t?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:sh(r)?.[e])??(o?La:Ha)[e]??Ha[e]??La[e]??e;for(let[s,a]of Object.entries(n))i=i.replace(`{${s}}`,String(a));return i}function q(t,e,n=2){return e.toLocaleString(t?.language??void 0,{maximumFractionDigits:n})}var Pe=le`
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
    -webkit-font-smoothing: antialiased;
  }
  h1,
  h2,
  h3 {
    text-wrap: balance;
  }
  p {
    text-wrap: pretty;
  }
  ::selection {
    background: color-mix(in srgb, var(--nf-accent) 32%, transparent);
  }
`,u2=le`
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
`,et=le`
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
@media (hover: hover) and (pointer: fine) {
    .nf-seg button:hover:not(:disabled),
    .nf-chip:hover {
      background: var(--nf-fill);
      color: var(--nf-text);
    }
  }
  /* on a small stage (a small window, a zoomed browser, a dashboard column) the switches at the bottom take less room */
  @container nf ((max-width: 1360px) or (max-height: 640px)) {
    :is(.nf-overlay, .nf-card-controls) .nf-seg {
      padding: 3px;
    }
    :is(.nf-overlay, .nf-card-controls) :is(.nf-seg button, .nf-chip) {
      font-size: 13px;
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
@media (hover: hover) and (pointer: fine) {
    .nf-btn:hover {
      background: var(--nf-fill-strong);
    }
  }
  .nf-btn.nf-danger {
    color: var(--nf-danger);
  }
  .nf-btn.nf-primary {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
@media (hover: hover) and (pointer: fine) {
    .nf-btn.nf-primary:hover {
      background: color-mix(in srgb, var(--nf-accent) 88%, var(--nf-text));
    }
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

  /* every pressable answers at once: it dips on press and springs back (no delay on touch, no grey tap flash) */
  .nf-seg button,
  .nf-chip,
  .nf-btn {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.15s ease, color 0.15s ease, transform 0.14s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .nf-seg button:active:not(:disabled),
  .nf-chip:active,
  .nf-btn:active:not(:disabled) {
    transform: scale(0.97);
  }
  @media (pointer: coarse) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      min-height: 40px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      transition: background-color 0.01ms, color 0.01ms;
    }
    .nf-seg button:active:not(:disabled),
    .nf-chip:active,
    .nf-btn:active:not(:disabled) {
      transform: none;
    }
  }
`;var me=t=>/^(sensor|input_number|number)\./.test(t),ki=t=>/^(binary_sensor|input_boolean)\./.test(t);function Gn(t,e){if(!me(e))return!1;let n=t?.states[e]?.attributes;return n?.device_class==="power"||n?.unit_of_measurement==="W"||n?.unit_of_measurement==="kW"}function Hy(t,e){let n=t?.entities?.[e],r=n?.area_id??(n?.device_id?t?.devices?.[n.device_id]?.area_id:null);return r?t?.areas?.[r]?.name:void 0}function H(t,e){return Object.keys(t?.states??{}).filter(e).map(n=>{let r=Hy(t,n);return{id:n,label:r?`${K(t,n)} \xB7 ${r}`:K(t,n)}}).sort((n,r)=>n.label.localeCompare(r.label))}var Cy=["light.toggle","light.turn_on","light.turn_off","switch.toggle","switch.turn_on","switch.turn_off","homeassistant.toggle","scene.turn_on","script.turn_on","cover.toggle","cover.open_cover","cover.close_cover","lock.lock","lock.unlock","fan.toggle","media_player.media_play_pause","climate.set_temperature","vacuum.start"];function ah(t,e){let n=[],r=new Set,o=t?.services;if(o&&Object.keys(o).length>0){for(let[i,s]of Object.entries(o))if(!(!s||typeof s!="object"))for(let[a,l]of Object.entries(s)){let c=`${i}.${a}`;r.add(c);let u=l&&typeof l=="object"&&"name"in l&&typeof l.name=="string"?l.name:"";n.push({id:c,label:u?`${c} \xB7 ${u}`:c})}}else for(let i of Cy)r.add(i),n.push({id:i,label:i});return e&&!r.has(e)&&n.unshift({id:e,label:e}),n.sort((i,s)=>i.id.localeCompare(s.id))}function xi(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}var $i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oo=t=>(...e)=>({_$litDirective$:t,values:e}),Un=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var io=class extends Un{constructor(e){if(super(e),this.it=g,e.type!==$i.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===vt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};io.directiveName="unsafeHTML",io.resultType=1;var lh=oo(io);var ch=40,Na=class extends oe{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return n.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,ch)]}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>n.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-ch)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[];return m`<div class="wrap">
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
    </div>`}static styles=[Pe,le`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--nf-text);
        /* a theme may make the card colour see-through (glass themes): the field and its list must not */
        background-color: var(--nf-bg, #1c1c1c);
        background-image: linear-gradient(var(--nf-chrome-solid), var(--nf-chrome-solid));
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
        background-color: var(--nf-bg, #1c1c1c);
        background-image: linear-gradient(var(--nf-chrome-solid), var(--nf-chrome-solid));
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
        font-size: 14px;
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",Na);var fn=t=>t.target.value,Wa=t=>Number.parseFloat(t.replace(",",".")),ae=t=>Math.round(t*1e3)/1e3,uh=t=>t.wide?"nf-field nf-wide":"nf-field";function A(t,e,n,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(ae(n))}
      ?disabled=${!t.admin}
      @change=${s=>{let a=Wa(fn(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function U(t,e,n,r,o={}){return m`<label class=${uh(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${n} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!t.admin} @change=${i=>r(fn(i).trim())} />
  </label>`}function O(t,e,n,r,o,i={}){return m`<label class=${uh(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!t.admin} @change=${s=>o(fn(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===n}>${a}</option>`)}
    </select>
  </label>`}function D(t,e,n,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${n} ?disabled=${!t.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function ve(t,e,n,r,o){return m`<label class="nf-field"
    >${e}
    <span class="nf-color-row"
      ><input type="color" .value=${n??r} ?disabled=${!t.admin} @change=${i=>o(i.target.value)} />
      ${n?m`<button type="button" class="nf-link" ?disabled=${!t.admin} @click=${()=>o(null)}>${t.t("wall_paint_default")}</button>`:g}</span
    ></label
  >`}function I(t,e,n,r,o,i){let s=r===void 0?null:r?t.t("entity_auto",{name:K(t.hass,r)}):t.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:t.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${a}
      .value=${n??(s!==null?"__auto":"none")}
      .placeholder=${t.t("entity_search")}
      ?disabled=${!t.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Si(t,e,n,r){let o=ah(t.hass,n);return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${[{id:"none",label:t.t("entity_none")}]}
      .value=${n??"none"}
      .placeholder=${t.t("service_search")}
      ?disabled=${!t.admin}
      @change=${i=>{i.stopPropagation(),r(i.detail.value==="none"?null:i.detail.value)}}
    ></nf-entity-picker>
  </label>`}var Ny=new Set(["light","switch","cover","fan","climate","lock","media_player","vacuum","scene","script","input_boolean","button","input_button","number","input_number","select","input_select","humidifier","water_heater","valve","siren","camera"]);function Mi(t,e,n,r,o){let i=e?.split(".")[0]??"",s=Ny.has(i)?f=>f.startsWith(`${i}.`):()=>!0,a=H(t.hass,s);a.length===0&&(a=H(t.hass,()=>!0));let l=typeof n?.entity_id=="string"?n.entity_id:null,c=(f,_)=>{let b={...n??{}};_==null||_===""||_==="none"?delete b[f]:b[f]=_,r(Object.keys(b).length?b:null)},u=e?.split(".")[1]??"",h=(i&&u?t.hass?.services?.[i]?.[u]:void 0)?.fields??{},p=(f,_,b,w)=>f in h?A(t,h[f]?.name||f,typeof n?.[f]=="number"?n[f]:_,v=>c(f,Math.min(b,Math.max(_,v))),w,_):g;return m`${I(t,t.t("service_target_entity"),l,void 0,a,f=>c("entity_id",f))}
    ${o&&o!=="none"&&!l&&t.admin?m`<div class="nf-actions nf-wide"><button type="button" class="nf-btn" @click=${()=>c("entity_id",o)}>↗ ${t.t("service_use_linked",{name:K(t.hass,o)})}</button></div>`:g}
    ${p("brightness_pct",0,100,5)} ${p("color_temp_kelvin",2e3,6500,100)} ${p("kelvin",2e3,6500,100)} ${p("transition",0,60,.5)} ${p("position",0,100,5)} ${p("temperature",5,35,.5)}`}function jn(t,e,n){return n?(n.includes(":")?n:`mdi:${n}`).replace(/[^a-z0-9:-]/gi,""):t.hass?ed(t.hass,e):null}function At(t,e,n){let r=e?(e.includes(":")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${t.t("marker_icon_hint")}
    >${t.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!t.admin} @change=${o=>n(fn(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?lh(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function Zn(t,e,n){return m`<label class="nf-field nf-wide" title=${t.t("marker_show_hint")}
    >${t.t("marker_show")}
    <select ?disabled=${!t.admin} @change=${r=>n(fn(r)||null)}>
      <option value="" ?selected=${!e}>${t.t("marker_show_auto")}</option>
      ${ku.map(r=>m`<option value=${r} ?selected=${r===e}>${t.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}function qn(t,e,n){let r=e??{},o=i=>s=>{let a={...r,[i]:Math.round(Math.max(-5,Math.min(5,s))*100)/100};n(a.x||a.z||a.y?a:null)};return m`<details class="nf-wide nf-pin-shift" ?open=${!!e}>
    <summary>${t.t("pin_shift")}</summary>
    <div class="nf-form">
      ${A(t,"\u2194 x",r.x??0,o("x"),.05)} ${A(t,"\u2195 z",r.z??0,o("z"),.05)} ${A(t,t.t("pin_shift_up"),r.y??0,o("y"),.05)}
      ${e?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n(null)}>${t.t("height_auto")}</button>`:g}
      <p class="nf-sub nf-wide">${t.t("pin_shift_hint")}</p>
    </div>
  </details>`}var J=(...t)=>m`<div class="nf-actions">${t}</div>`,R=(t,e="")=>m`<p class="nf-sub ${e}">${t}</p>`;function mn(t,e,n,r={}){let o=r.lowest??10;return m`<label class="nf-field" title=${t.t(r.hint??"glow_scale_hint")}
    >${t.t(r.label??"glow_scale")}
    <input
      type="number"
      min=${o}
      max="150"
      step="5"
      .value=${String(Math.round((e??1)*100))}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(fn(i)),a=Math.min(150,Math.max(o,fn(i).trim()===""||Number.isNaN(s)?100:s))/100;n(Math.abs(a-1)<.001?null:a)}}
    />
  </label>`}function dh(t,e,n){let r=t.find(l=>l.person===e),o="sensor"in n?n.sensor&&n.sensor!=="none"?n.sensor:null:r?.sensor??null,i="room"in n?n.room||null:r?.room??null,s=t.filter(l=>l.person!==e);if(!o&&!i)return s;let a=i?{person:e,sensor:o,room:i}:{person:e,sensor:o};return r?t.map(l=>l.person===e?a:l):[...s,a]}function hh(t,e){let n=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(n)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...t.filter(r),...t.filter(o=>!r(o))]}function ph(t){let e=t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:"";return`start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${e} }`}function fh(t){let e=t.trim();if(!e)return{ok:!0,value:null};try{let n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)?{ok:!0,value:n}:{ok:!1}}catch{return{ok:!1}}}function so(t,e,n){let r=[...t],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+n)),0,o),r}var Ft=(t,e)=>t.filter((n,r)=>r!==e),Yn=(t,e,n)=>t.map((r,o)=>o===e?{...r,...n}:r),gt=t=>t.length>0?t:void 0;var Wy=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],By=40,Vy=20,Ky=30,Gy=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],Ba={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},ao=(t,e,n,r=!1)=>m`<button class="nf-pin" title=${t} ?disabled=${r} @click=${n}>${e}</button>`;function Uy(t){let e=t.doc.settings.favorites??[],n=a=>t.change(l=>l.settings.favorites=gt(a)),r=t.doc.floors,o=t.doc.settings.favorite_floors??{},i=H(t.hass,a=>Wy.includes(a.split(".")[0])&&!e.includes(a)),s=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${K(t.hass,a)}</span></span>
    ${r.length>1?m`<select title=${t.t("favorite_floor")} .value=${o[a]??""} @change=${c=>{let u=c.target.value,d={...o};u?d[a]=u:delete d[a],t.change(h=>h.settings.favorite_floors=Object.keys(d).length?d:void 0)}}>
          <option value="">${t.t("favorite_all_floors")}</option>
          ${r.map(c=>m`<option value=${c.id} ?selected=${o[a]===c.id}>${c.name}</option>`)}
        </select>`:g}
    ${ao(t.t("move_up"),"\u2191",()=>n(so(e,l,-1)),l===0)}
    ${ao(t.t("move_down"),"\u2193",()=>n(so(e,l,1)),l===e.length-1)}
    ${ao(t.t("delete"),"\u2715",()=>n(Ft(e,l)))}
  </div>`;return m`<summary>${t.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${R(t.t("favorites_hint"))} ${e.map(s)}
    ${e.length<By?m`<div class="nf-form">${I(t,t.t("favorites_add"),null,void 0,i,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}`}function jy(t,e){let n=t.doc.settings.outside_hidden??[],r=s=>t.change(a=>a.settings.outside_hidden=gt(s)),o=new Set(t.hass?gd(t.hass,t.doc.floors):[]),i=H(t.hass,s=>!n.includes(s)&&o.has(s));return m`${e?Zy(t,e):g}
    <h4>${t.t("outside_hidden")}${n.length>0?m` <span class="nf-lib-count">${n.length}</span>`:g}</h4>
    ${R(t.t("outside_hidden_hint"))}
    ${n.map((s,a)=>m`<div class="nf-row nf-dev-row"><span class="nf-dev-name"><span>${K(t.hass,s)}</span></span>${ao(t.t("delete"),"\u2715",()=>r(Ft(n,a)))}</div>`)}
    <div class="nf-form">${I(t,t.t("outside_hidden_add"),null,void 0,i,s=>s&&s!=="none"&&!n.includes(s)&&r([...n,s]))}</div>`}function Zy(t,e){let n=t.doc.settings.outside_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.outside_view=o)};return m`${R(t.t("outside_view_hint"))}
    ${J(m`<button class="nf-btn" @click=${r}>${t.t("outside_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.outside_view=null)}>${t.t("outside_view_reset")}</button>`:g)}`}function qy(t){let e=t.doc.settings.own_alerts??[],n=c=>t.change(u=>u.settings.own_alerts=gt(c)),r=(c,u)=>n(Yn(e,c,u)),o=[["",t.t("own_alert_house")],...t.doc.floors.flatMap(c=>c.rooms.map(u=>[u.id,`${u.name} \xB7 ${c.name}`]))],i=(c,u)=>m`<div class="nf-form nf-own-button">
    ${I(t,t.t("own_alert_entity"),c.entity||null,void 0,H(t.hass,()=>!0),d=>r(u,{entity:d&&d!=="none"?d:""}))}
    ${U(t,t.t("own_alert_state"),c.state??"",d=>r(u,{state:d||null}),{placeholder:t.hass?.states[c.entity]?.state??"on \xB7 <20 \xB7 >80"})}
    ${U(t,t.t("own_alert_text"),c.text,d=>r(u,{text:d||t.t("own_alert_new")}),{wide:!0,maxlength:120})}
    ${O(t,t.t("room"),c.room_id??"",o,d=>r(u,{room_id:d||null}),{wide:!0})}
    ${ve(t,t.t("own_alert_color"),c.color??null,"#ffb547",d=>r(u,{color:d}))}
    ${O(t,t.t("own_alert_tap"),c.tap??"",[["",t.t("own_alert_tap_info")],["toggle",t.t("own_alert_tap_toggle")],["room",t.t("own_alert_tap_room")]],d=>r(u,{tap:d||null}))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ft(e,u))}>${t.t("delete")}</button></div>
  </div>`,s=t.doc.settings,a=[1,2,3,4,5,6,8,10,12].map(c=>[String(c),String(c)]),l=m`<div class="nf-form">
    ${O(t,t.t("alerts_max"),String(s.alerts_max??3),a,c=>t.change(u=>u.settings.alerts_max=Number(c)===3?void 0:Number(c)))}
    ${O(t,t.t("alerts_rows"),String(s.alerts_rows??1),[["1","1"],["2","2"]],c=>t.change(u=>u.settings.alerts_rows=c==="2"?2:void 0))}
    ${R(t.t("alerts_bar_hint"),"nf-wide")}
  </div>`;return m`<h4>⚠ ${t.t("own_alerts")}</h4>
    ${l} ${R(t.t("own_alerts_hint"))} ${e.map(i)}
    ${e.length<40?J(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("alert"),entity:"",state:null,text:t.t("own_alert_new")}])}>+ ${t.t("own_alert_add")}</button>`):g}`}function Yy(t){let e=t.doc.settings.circuits??[],n=a=>t.change(l=>l.settings.circuits=gt(a)),r=(a,l)=>n(Yn(e,a,l)),o=t.doc.floors.flatMap(a=>a.rooms.map(l=>({id:l.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${a.name}`:l.name}))),i=a=>o.find(l=>l.id===a)?.label??a,s=(a,l)=>m`<div class="nf-form nf-own-button">
    ${U(t,t.t("circuit_name"),a.name,c=>r(l,{name:c||t.t("circuit_new")}),{wide:!0,maxlength:80})}
    <div class="nf-wide">${a.rooms.map(c=>m`<span class="nf-chip">${i(c)} <button class="nf-btn nf-field-btn" title=${t.t("delete")} @click=${()=>r(l,{rooms:a.rooms.filter(u=>u!==c)})}>✕</button></span>`)}</div>
    ${O(t,t.t("circuit_add_room"),"",[["","\u2013"],...o.filter(c=>!a.rooms.includes(c.id)).map(c=>[c.id,c.label])],c=>c&&r(l,{rooms:[...a.rooms,c]}),{wide:!0})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ft(e,l))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>🔌 ${t.t("circuits")}</h4>
    ${R(t.t("circuits_hint"))} ${e.map(s)}
    ${e.length<120?J(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("circuit"),name:t.t("circuit_new"),rooms:[]}])}>+ ${t.t("circuit_add")}</button>`):g}`}function Xy(t){let e=t.doc.settings.calendars??[],n=a=>t.change(l=>l.settings.calendars=gt(a)),r=H(t.hass,a=>a.startsWith("calendar.")&&!e.includes(a)),o=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${K(t.hass,a)}</span></span>
    ${ao(t.t("delete"),"\u2715",()=>n(Ft(e,l)))}
  </div>`,i=t.t,s=t.doc.settings.today_days??1;return m`<h4>📅 ${i("today_calendars")}</h4>
    ${R(i("today_calendars_hint"))} ${e.map(o)}
    ${e.length<12?m`<div class="nf-form">${I(t,i("favorites_add"),null,void 0,r,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}
    ${e.length?m`<div class="nf-form">
          ${O(t,i("today_days"),String(s),[1,2,3,5,7].map(a=>[String(a),i(a===1?"today_days_one":"today_days_n",{n:a})]),a=>t.change(l=>l.settings.today_days=Number(a)>1?Number(a):void 0))}
        </div>`:g}
    ${Jy(t)}`}function Jy(t){let e=t.t,n=t.doc.settings.forecast??null,r=o=>t.change(i=>i.settings.forecast=o??void 0);return m`<h4>🌦 ${e("forecast")}</h4>
    ${R(e("forecast_hint"))}
    <div class="nf-form">
      ${O(t,e("forecast_days"),n?String(n.days):"0",[0,3,5,7].map(o=>[String(o),o?e("today_days_n",{n:o}):e("forecast_off")]),o=>r(Number(o)>0?{days:Number(o),corner:n?.corner??"top_right"}:null))}
      ${n?O(t,e("forecast_corner"),n.corner,[["top_right",e("clock_top_right")],["top_left",e("clock_top_left")]],o=>r({...n,corner:o==="top_left"?"top_left":"top_right"})):g}
    </div>`}function Qy(t){let e=t.doc.settings.media_presets??[],n=s=>t.change(a=>a.settings.media_presets=gt(s)),r=(s,a)=>n(Yn(e,s,a)),o=[...new Set(t.doc.floors.flatMap(s=>[...s.placements.map(a=>a.entity_id),...s.furniture.map(a=>a.entity??"")]).filter(s=>s.startsWith("media_player.")))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${U(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||"Radio"}),{maxlength:60})}
    ${U(t,t.t("preset_type"),s.type,l=>r(a,{type:l||"music"}),{title:t.t("preset_type_hint")})}
    ${U(t,t.t("preset_content"),s.content,l=>r(a,{content:l}),{wide:!0,title:t.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    ${o.length>1?m`<div class="nf-sub nf-wide">${t.t("preset_speakers")}</div>
          ${o.map(l=>D(t,K(t.hass,l),!!s.speakers?.includes(l),c=>r(a,{speakers:gt(c?[...s.speakers??[],l]:(s.speakers??[]).filter(u=>u!==l))}),{wide:!1}))}`:g}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ft(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>${t.t("presets")}</h4>
    ${R(t.t("presets_hint"))}
    <datalist id="nf-preset-types">${Gy.map(s=>m`<option value=${s}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<Ky?J(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("preset"),label:"Radio",type:"music",content:""}])}>+ ${t.t("preset_add")}</button>`):g}`}function Va(t,e,n){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=a=>{let l=a.target;l.setCustomValidity("");let c=fh(l.value);if(c.ok)return n(c.value);l.setCustomValidity(t.t("own_data_bad")),l.reportValidity()},i=Object.keys(e.data??{}).some(a=>a!=="entity_id"),s=m`<label class="nf-field nf-wide" title=${t.t("own_data_hint")}
    >${t.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`;return e.action==="fire_dom_event"?s:m`<details class="nf-wide nf-pin-shift" ?open=${i}>
    <summary>${t.t("own_data")}</summary>
    ${s}
  </details>`}function ew(t){let e=t.doc.settings.buttons??[],n=s=>t.change(a=>a.settings.buttons=gt(s)),r=(s,a)=>n(Yn(e,s,a)),o=Zo.map(s=>[s,t.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${U(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||t.t("own_button_new")}),{maxlength:60})}
    ${O(t,t.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${At(t,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action==="service"?Si(t,t.t("own_target_service"),s.target??null,l=>r(a,{target:l})):s.action==="more_info"?I(t,t.t("own_target_more_info"),s.target??null,void 0,H(t.hass,()=>!0),l=>r(a,{target:l&&l!=="none"?l:null})):s.action!=="fire_dom_event"?U(t,t.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:Ba[s.action]}):g}
    ${s.action==="service"?Mi(t,s.target,s.data,l=>r(a,{data:l})):g}
    ${s.action==="service"||s.action==="fire_dom_event"?Va(t,s,l=>r(a,{data:l})):g}
    ${I(t,t.t("own_button_state"),s.state_entity??null,void 0,H(t.hass,l=>/^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(l)),l=>r(a,{state_entity:l&&l!=="none"?l:null}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>n(so(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(Ft(e,a))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("own_buttons")}</h4>
    ${R(t.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<Vy?J(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("btn"),label:t.t("own_button_new"),action:"navigate",target:null}])}>+ ${t.t("own_button_add")}</button>`):g}`}function tw(t){let e=t.doc.settings.room_facts_off??[],n=["sun","comfort","air","circuits"].map(r=>D(t,t.t(`room_fact_${r}`),!e.includes(r),o=>t.change(i=>i.settings.room_facts_off=gt(o?e.filter(s=>s!==r):[...e,r]))));return m`<h4>${t.t("room_facts")}</h4><div class="nf-form">${n}</div>`}function nw(t){let e=t.doc.settings.quick_controls??[],n=c=>t.change(u=>u.settings.quick_controls=c.length?c:null),r=(c,u)=>n(Yn(e,c,u)),o=H(t.hass,c=>/^(light|switch|cover|climate|fan|scene|script|button|input_boolean|input_button|camera|alarm_control_panel|lock)\./.test(c)),i=t.doc.floors.flatMap(c=>c.rooms.filter(u=>u.area_id).map(u=>({id:u.area_id,name:t.doc.floors.length>1?`${c.name} \xB7 ${u.name}`:u.name}))),s=(c,u)=>{if(!u||!t.hass)return;let d=e[c],h=Object.keys(t.hass.states).filter(p=>{if(!/^(light|switch|cover|climate|fan)\./.test(p)||d.entities.includes(p))return!1;let f=t.hass?.entities?.[p],_=f?.device_id?t.hass?.devices?.[f.device_id]:void 0;return(f?.area_id??_?.area_id)===u});h.length&&r(c,{entities:[...d.entities,...h].slice(0,30)})},a=c=>{let u=e[c],d=Object.keys(t.hass?.states??{}).filter(h=>h.startsWith("camera.")&&!u.entities.includes(h));d.length&&r(c,{entities:[...u.entities,...d].slice(0,30)})},l=(c,u)=>m`<div class="nf-form nf-own-button">
    ${U(t,t.t("own_button_label"),c.label,d=>r(u,{label:d||t.t("quick_group_new")}),{maxlength:60})}
    ${At(t,c.icon??null,d=>r(u,{icon:d}))}
    ${c.entities.map(d=>m`<span class="nf-chip nf-wide">${K(t.hass,d)} <button class="nf-btn nf-field-btn" title=${t.t("delete")} @click=${()=>r(u,{entities:c.entities.filter(h=>h!==d)})}>✕</button></span>`)}
    ${c.entities.length<30?m`${I(t,t.t("quick_group_add_entity"),null,void 0,o.filter(d=>!c.entities.includes(d.id)),d=>d&&d!=="none"&&r(u,{entities:[...c.entities,d]}))}
        ${i.length?O(t,t.t("quick_group_from_room"),"",[["","\u2013"],...i.map(d=>[d.id,d.name])],d=>s(u,d),{wide:!0}):g}
        <div class="nf-actions nf-wide"><button class="nf-btn" @click=${()=>a(u)}>📷 ${t.t("quick_group_add_cameras")}</button></div>`:g}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${u===0} @click=${()=>n(so(e,u,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(Ft(e,u))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("quick_controls")}</h4>
    ${R(t.t("quick_controls_hint"))} ${e.map(l)}
    ${e.length<12?J(m`<button class="nf-btn" @click=${()=>n([...e,{id:L("qd"),label:t.t("quick_group_new"),icon:"mdi:lightbulb-group",entities:[]}])}>+ ${t.t("quick_group_add")}</button>`):g}`}function mh(t){let e=t.t,n=t.doc.settings.tablet_ui??{},r=o=>t.change(i=>{let s={...i.settings.tablet_ui??{},...o};i.settings.tablet_ui=s});return m`<details class="nf-section" open>
    <summary>📱 ${e("tablet_ui_title")}</summary>
    ${R(e("tablet_ui_hint"))}
    <div class="nf-form">
      ${O(t,e("tablet_sidebar_pos"),n.sidebar??"off",[["right",e("tablet_side_right")],["left",e("tablet_side_left")],["off",e("tablet_side_off")]],o=>r({sidebar:o}))}
      ${O(t,e("tablet_sidebar_style"),n.sidebar_style??"card",[["card",e("tablet_style_card")],["clean",e("tablet_style_clean")],["minimal",e("tablet_style_minimal")]],o=>r({sidebar_style:o}))}
      ${O(t,e("tablet_clock_size"),n.clock_size??"normal",[["normal",e("tablet_size_normal")],["large",e("tablet_size_large")],["xl",e("tablet_size_xl")]],o=>r({clock_size:o}))}
      ${ve(t,e("tablet_clock_color"),n.clock_color??null,"#f3f5f8",o=>r({clock_color:o}))}
      ${D(t,e("tablet_sidebar_clock"),n.sidebar_clock!==!1,o=>r({sidebar_clock:o}))}
      ${D(t,e("tablet_clock_seconds"),!!n.clock_seconds,o=>r({clock_seconds:o}))}
      ${D(t,e("tablet_sidebar_weather"),n.sidebar_weather!==!1,o=>r({sidebar_weather:o}))}
      ${D(t,e("tablet_sidebar_summary"),n.sidebar_summary!==!1,o=>r({sidebar_summary:o}))}
      ${D(t,e("tablet_sidebar_people"),n.sidebar_people!==!1,o=>r({sidebar_people:o}))}
      ${D(t,e("tablet_sidebar_energy"),n.sidebar_energy!==!1,o=>r({sidebar_energy:o}))}
      ${D(t,e("tablet_sidebar_media"),n.sidebar_media!==!1,o=>r({sidebar_media:o}))}
      ${O(t,e("tablet_dock_style"),n.dock_style??"pill",[["pill",e("tablet_dock_pill")],["clean",e("tablet_dock_clean")],["large",e("tablet_dock_large")]],o=>r({dock_style:o}))}
      ${D(t,e("tablet_show_quick_dock"),n.show_quick_dock!==!1,o=>r({show_quick_dock:o}))}
      ${D(t,e("tablet_show_nav_kiosk"),!!n.show_nav_in_kiosk,o=>r({show_nav_in_kiosk:o}))}
      ${D(t,e("tablet_show_central"),n.show_central!==!1,o=>r({show_central:o}))}
      ${D(t,e("tablet_show_walk"),n.show_walk!==!1,o=>r({show_walk:o}))}
      ${D(t,e("tablet_show_legend"),n.show_legend!==!1,o=>r({show_legend:o}))}
      ${D(t,e("tablet_sidebar_appliances"),n.sidebar_appliances!==!1,o=>r({sidebar_appliances:o}))}
      ${D(t,e("tablet_show_cam_bookmarks"),n.show_cam_bookmarks!==!1,o=>r({show_cam_bookmarks:o}))}
      ${t.hass?I(t,e("tablet_price_entity"),n.price_entity??null,void 0,H(t.hass,o=>o.startsWith("sensor.")),o=>r({price_entity:o==="none"?null:o})):g}
      ${t.hass?I(t,e("tablet_pip_camera"),n.pip_camera??null,void 0,H(t.hass,o=>o.startsWith("camera.")),o=>r({pip_camera:o==="none"?null:o})):g}
      ${t.hass?I(t,e("tablet_pip_trigger"),n.pip_trigger??null,void 0,H(t.hass,o=>/^(binary_sensor|button|input_button|event|input_boolean)\./.test(o)),o=>r({pip_trigger:o==="none"?null:o})):g}
      ${A(t,e("tablet_pip_duration"),n.pip_duration??20,o=>r({pip_duration:Math.max(5,Math.min(120,Math.round(o)))}),5,5)}
      ${A(t,e("tablet_screensaver"),n.screensaver_minutes??0,o=>r({screensaver_minutes:Math.max(0,Math.min(60,Math.round(o)))}),1,0)}
    </div>
  </details>`}function Ri(t){return m`<details class="nf-section"><summary>🎛️ ${t.t("quick_controls")}</summary>${nw(t)}</details>`}function Ei(t){return m`<details class="nf-section">${Uy(t)} ${ew(t)} ${qy(t)} ${Yy(t)} ${Xy(t)} ${Qy(t)} ${tw(t)}</details>`}function gh(t,e){return m`<details class="nf-section">
    <summary>🌳 ${t.t("outside_area")}</summary>
    ${jy(t,e)}
  </details>`}function _h(t,e){let n=t.doc.settings.start_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${t.t("start_view")}</summary>
    ${R(t.t("start_view_hint"))}
    ${J(m`<button class="nf-btn nf-primary" @click=${r}>${t.t("start_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.start_view=null)}>${t.t("start_view_reset")}</button>`:g)}
    ${n?m`${R(t.t("start_view_saved"))} ${R(t.t("start_view_card"))}<code class="nf-code">${ph(n)}</code>`:g}
  </details>`}function Ai(t){let e=t.doc.presence.map(l=>l.person),n=[...new Set([...Object.keys(t.hass?.states??{}).filter(l=>l.startsWith("person.")).sort(),...e])],r=H(t.hass,me),o=t.doc.floors.flatMap(l=>l.rooms.map(c=>({id:c.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${c.name}`:c.name}))),i=(l,c)=>t.replace({...structuredClone(t.doc),presence:dh(t.doc.presence,l,c)}),s=l=>{let c=t.doc.presence.find(d=>d.person===l),u=!l.startsWith("person.");return m`${I(t,`${K(t.hass,l)} \xB7 ${t.t("presence_sensor")}`,c?.sensor??null,void 0,hh(r,l),d=>i(l,{sensor:d}))}
      <label class="nf-field">${t.t("presence_room")}
        <select ?disabled=${!t.admin} .value=${c?.room??""} @change=${d=>i(l,{room:d.target.value||null})}>
          <option value="">${t.t("presence_room_none")}</option>
          ${o.map(d=>m`<option value=${d.id} ?selected=${c?.room===d.id}>${d.label}</option>`)}
        </select>
      </label>
      ${u?m`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>t.replace({...structuredClone(t.doc),presence:t.doc.presence.filter(d=>d.person!==l)})}>${t.t("delete")}</button>`:g}`},a=H(t.hass,l=>/^(input_boolean|binary_sensor|device_tracker)\./.test(l)&&!n.includes(l));return m`<details class="nf-section">
    <summary>${t.t("presence")}</summary>
    <div class="nf-form">${D(t,t.t("presence_overview"),!!t.doc.settings.presence_overview,l=>t.change(c=>{c.settings.presence_overview=l}))}</div>
    ${R(t.t("presence_overview_hint"))}
    <div class="nf-form">${n.length>0?n.map(s):m`<p class="nf-sub nf-wide">${t.t("no_persons")}</p>`}</div>
    <div class="nf-form">${I(t,t.t("presence_add"),null,void 0,a,l=>l&&l!=="none"&&t.replace({...structuredClone(t.doc),presence:[...t.doc.presence,{person:l,sensor:null}]}))}</div>
    ${R(t.t("presence_hint"))}
  </details>`}function bh(t,e){return m`<details class="nf-section">
    <summary>${t.t("ble")}</summary>
    ${R(t.t("ble_hint"))}
    <nf-ble-locate .host=${t} .doc=${e}></nf-ble-locate>
  </details>`}var{I:J2}=Uc;var yh=t=>t.strings===void 0;var lo=(t,e)=>{let n=t._$AN;if(n===void 0)return!1;for(let r of n)r._$AO?.(e,!1),lo(r,e);return!0},Fi=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},wh=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),iw(e)}};function rw(t){this._$AN!==void 0?(Fi(this),this._$AM=t,wh(this)):this._$AM=t}function ow(t,e=!1,n=0){let r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)lo(r[i],!1),Fi(r[i]);else r!=null&&(lo(r,!1),Fi(r));else lo(this,t)}var iw=t=>{t.type==$i.CHILD&&(t._$AP??=ow,t._$AQ??=rw)},zi=class extends Un{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),wh(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(lo(this,e),Fi(this))}setValue(e){if(yh(this._$Ct))this._$Ct._$AI(e,this);else{let n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};var Ka=new WeakMap,vh=oo(class extends zi{render(t){return g}update(t,[e]){let n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),g}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,n=Ka.get(e);n===void 0&&(n=new WeakMap,Ka.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Ka.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var kh=t=>t.trim().toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40);function xh(t){let e=t.t,n=t.doc.settings.card_templates??{},r=Object.keys(n),o=a=>t.change(l=>{l.settings.card_templates=Object.keys(a).length?a:void 0});t.loadCardEditor?.();let i=a=>{t.hass?.callService("nextfloor","reload_screens",a?{template:a}:{})},s=a=>{let l=kh(a.value);!l||l in n||r.length>=20||(a.value="",o({...n,[l]:{}}))};return m`<details class="nf-section">
    <summary>${e("card_templates")}${r.length?m` <span class="nf-lib-count">${r.length}</span>`:g}</summary>
    ${R(e("card_templates_hint"))}
    ${r.map(a=>m`<details class="nf-section">
        <summary>${a}</summary>
        <nextfloor-card-editor
          .hass=${t.hass}
          ${vh(l=>l&&l.setConfig({type:"custom:nextfloor-card",...n[a]}))}
          @config-changed=${l=>{l.stopPropagation();let{type:c,template:u,...d}=l.detail.config;o({...n,[a]:d})}}
        ></nextfloor-card-editor>
        ${t.admin?m`<div class="nf-actions">
              <button class="nf-btn" @click=${()=>i(a)}>${e("template_reload")}</button>
              <button class="nf-btn nf-danger" @click=${()=>o(Object.fromEntries(Object.entries(n).filter(([l])=>l!==a)))}>${e("delete")}</button>
            </div>`:g}
        ${R(e("template_use",{name:a}))}
      </details>`)}
    ${t.admin?m`<div class="nf-form">
            <label class="nf-field nf-wide">${e("template_name")}<input type="text" maxlength="40" placeholder="kitchen_tablet" @keydown=${a=>a.key==="Enter"&&s(a.target)} /></label>
          </div>
          <div class="nf-actions">
            <button class="nf-btn" @click=${a=>s(a.target.closest("details")?.querySelector("input[type=text]")??document.createElement("input"))}>${e("template_add")}</button>
            <button class="nf-btn" @click=${()=>i()}>${e("template_reload_all")}</button>
          </div>`:g}
  </details>`}var Ti=.05,sw=(t,e)=>t.length===e.length&&t.every((n,r)=>Math.abs(n[0]-e[r][0])<.001&&Math.abs(n[1]-e[r][1])<.001),gn=t=>new Map(t.map(e=>[e.id,e]));function aw(t,e,n,r){let o=e.name,[i,s]=[gn(t.rooms),gn(e.rooms)];for(let p of e.rooms){let f=i.get(p.id);f?(f.name!==p.name&&n.push({kind:"room_renamed",floor:o,name:p.name,detail:f.name}),sw(f.points,p.points)||n.push({kind:"room_reshaped",floor:o,name:p.name,detail:Math.round((Ee(p.points)-Ee(f.points))*10)/10})):n.push({kind:"room_added",floor:o,name:p.name})}for(let p of t.rooms)s.has(p.id)||n.push({kind:"room_removed",floor:o,name:p.name});let[a,l]=[gn(t.openings),gn(e.openings)];for(let p of e.openings)a.has(p.id)||n.push({kind:"opening_added",floor:o,name:p.type,detail:r(p.room_id)});for(let p of t.openings)l.has(p.id)||n.push({kind:"opening_removed",floor:o,name:p.type,detail:r(p.room_id)});let[c,u]=[gn(t.furniture),gn(e.furniture)];for(let p of e.furniture){let f=c.get(p.id);f?(Math.hypot(p.x-f.x,p.z-f.z)>Ti||Math.abs(p.rotation-f.rotation)>1||Math.abs(p.w-f.w)>Ti||Math.abs(p.d-f.d)>Ti)&&n.push({kind:"furniture_moved",floor:o,name:p.name||p.type}):n.push({kind:"furniture_added",floor:o,name:p.name||p.type})}for(let p of t.furniture)u.has(p.id)||n.push({kind:"furniture_removed",floor:o,name:p.name||p.type});let[d,h]=[new Map(t.placements.map(p=>[p.entity_id,p])),new Map(e.placements.map(p=>[p.entity_id,p]))];for(let p of e.placements){let f=d.get(p.entity_id);f?Math.hypot(p.x-f.x,p.z-f.z)>Ti&&n.push({kind:"device_moved",floor:o,name:p.entity_id}):n.push({kind:"device_added",floor:o,name:p.entity_id})}for(let p of t.placements)h.has(p.entity_id)||n.push({kind:"device_removed",floor:o,name:p.entity_id})}function $h(t,e){let n=[],r=gn(t.floors),o=new Map([...t.floors,...e.floors].flatMap(a=>a.rooms.map(l=>[l.id,l.name]))),i=a=>o.get(a)??"";for(let a of e.floors){let l=r.get(a.id);l?aw(l,a,n,i):n.push({kind:"floor_added",floor:a.name,name:a.name})}let s=new Set(e.floors.map(a=>a.id));for(let a of t.floors)s.has(a.id)||n.push({kind:"floor_removed",floor:a.name,name:a.name});return n}var _n=(t,e)=>t.getUint16(e,!0),co=(t,e)=>t.getUint32(e,!0);function Sh(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=-1;for(let a=t.length-22;a>=Math.max(0,t.length-65557);a--)if(co(e,a)===101010256){n=a;break}if(n<0)throw new Error("not_zip");let r=_n(e,n+10),o=co(e,n+16),i=[],s=new TextDecoder;for(let a=0;a<r;a++){if(co(e,o)!==33639248)throw new Error("not_zip");let l=_n(e,o+10),c=co(e,o+20),u=_n(e,o+28),d=_n(e,o+30),h=_n(e,o+32),p=co(e,o+42),f=s.decode(t.subarray(o+46,o+46+u)),_=p+30+_n(e,p+26)+_n(e,p+28);i.push({name:f,method:l,compressedSize:c,offset:_}),o+=46+u+d+h}return i}async function Mh(t,e){let n=t.subarray(e.offset,e.offset+e.compressedSize);if(e.method===0)return n;if(e.method!==8)throw new Error("zip_method");let r=new Blob([n.slice()]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(r).arrayBuffer())}var lw={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},cw=t=>t.replace(/&(#x?[0-9a-f]+|\w+);/gi,(e,n)=>n[0]==="#"?String.fromCodePoint(Number.parseInt(n.slice(n[1]==="x"?2:1),n[1]==="x"?16:10)):lw[n]??e);function uw(t){let e={};for(let n of t.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g))e[n[1]]=cw(n[2]??n[3]);return e}function dw(t){let e=[],n=null;for(let r of t.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)){let[,o,i,s,a]=r;if(o){i==="room"&&(n=null);continue}let l=uw(s);if(i==="point"){n&&n.points.push([Number(l.x)/100,Number(l.y)/100]);continue}let c={name:i,attrs:l,...i==="room"?{points:[]}:{}};e.push(c),i==="room"&&!a&&(n=c)}return e}var ie=(t,e,n)=>Number.isFinite(Number(t[e]))&&t[e]!==void 0?Number(t[e]):n,Ie=t=>Math.round(t*1e3)/1e3;function Rh(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.max(0,Math.min(i,((t[0]-e[0])*r+(t[1]-e[1])*o)/i)),a=[e[0]+r*s/i,e[1]+o*s/i];return{dist:Math.hypot(t[0]-a[0],t[1]-a[1]),along:s,length:i}}function hw(t){let e=`${t.name??""} ${t.catalogId??""}`.toLowerCase();return/garage|sectional|rolltor/.test(e)?"garage":/door|tür|tuer|porte|puerta|deur|haustür/.test(e)&&!/window|fenster/.test(e)?"door":"window"}function pw(t,e){let n=t.length,r=t.map((o,i)=>{let s=t[(i+1)%n],[a,l]=[s[0]-o[0],s[1]-o[1]],c=Math.hypot(a,l)||1e-9,u=[a/c,l/c],d=[(o[0]+s[0])/2,(o[1]+s[1])/2],h=[0,0];for(let p of e){let[f,_]=[p.b[0]-p.a[0],p.b[1]-p.a[1]],b=Math.hypot(f,_)||1e-9;if(Math.abs((u[0]*_-u[1]*f)/b)>.05)continue;let w=(p.a[0]-d[0])*-u[1]+(p.a[1]-d[1])*u[0],v=((d[0]-p.a[0])*f+(d[1]-p.a[1])*_)/b;if(!(Math.abs(w)>p.thickness/2+.06||v<-.05||v>b+.05)){h=[-u[1]*w,u[0]*w];break}}return{p:[o[0]+h[0],o[1]+h[1]],dir:u}});return r.map((o,i)=>{let s=r[(i-1+n)%n],a=s.dir[0]*o.dir[1]-s.dir[1]*o.dir[0];if(Math.abs(a)<1e-6)return o.p;let l=((o.p[0]-s.p[0])*o.dir[1]-(o.p[1]-s.p[1])*o.dir[0])/a;return[s.p[0]+s.dir[0]*l,s.p[1]+s.dir[1]*l]})}function fw(t){let e=Nt(),n={floors:0,rooms:0,openings:0,walls:0,furniture:0},r=t.filter(l=>l.name==="level"),o=r.length?r.map(l=>l.attrs.id??""):[""],i=t.filter(l=>l.name==="wall"),s=i.length?Math.max(...i.map(l=>ie(l.attrs,"height",250)))/100:2.5;return(r.length?[...r].sort((l,c)=>ie(l.attrs,"elevation",0)-ie(c.attrs,"elevation",0)||ie(l.attrs,"elevationIndex",0)-ie(c.attrs,"elevationIndex",0)):[{name:"level",attrs:{id:""}}]).forEach((l,c)=>{let u=l.attrs.id??"",d=b=>r.length?(b.attrs.level??o[0])===u:!0,h=Ge(L("floor"),l.attrs.name||(c===0?"Erdgeschoss":`Etage ${c+1}`),Ie(ie(l.attrs,"elevation",0)/100));h.height=Ie(ie(l.attrs,"height",s*100)/100);let p=i.filter(d).map(b=>({a:[ie(b.attrs,"xStart",0)/100,ie(b.attrs,"yStart",0)/100],b:[ie(b.attrs,"xEnd",0)/100,ie(b.attrs,"yEnd",0)/100],thickness:ie(b.attrs,"thickness",10)/100})),f=t.filter(b=>b.name==="room"&&d(b)&&(b.points?.length??0)>=3).map((b,w)=>({id:L("room"),name:b.attrs.name||`Raum ${w+1}`,area_id:null,points:pw(b.points,p).map(([v,y])=>[Ie(v),Ie(y)]),floor_material:"wood",panel:[]}));h.rooms=f;for(let b of t.filter(w=>w.name==="doorOrWindow"&&d(w))){let w=[ie(b.attrs,"x",0)/100,ie(b.attrs,"y",0)/100],v=Math.max(.6,ie(b.attrs,"depth",30)/100+.3),y=null;for(let P of f)P.points.forEach((T,C)=>{let W=Rh(w,T,P.points[(C+1)%P.points.length]);W.dist<=v&&(!y||W.dist<y.dist)&&(y={room:P,edge:C,...W})});if(!y)continue;let{room:x,edge:k,along:S,length:$}=y,E=hw(b.attrs),z=Math.min($,Math.max(.3,ie(b.attrs,"width",90)/100));h.openings.push({id:L("op"),room_id:x.id,edge:k,offset:Ie(Math.min($-z/2,Math.max(z/2,S))),width:Ie(z),type:E,sill:E==="window"?Ie(ie(b.attrs,"elevation",90)/100):0,height:Ie(ie(b.attrs,"height",E==="window"?130:205)/100),hinge:"left",leaves:z>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null})}let _=[];for(let b of i.filter(d)){let w=[ie(b.attrs,"xStart",0)/100,ie(b.attrs,"yStart",0)/100],v=[ie(b.attrs,"xEnd",0)/100,ie(b.attrs,"yEnd",0)/100];if(Math.hypot(v[0]-w[0],v[1]-w[1])<.1)continue;let y=Math.max(.15,ie(b.attrs,"thickness",10)/100),x=z=>f.some(P=>P.points.some((T,C)=>Rh(z,T,P.points[(C+1)%P.points.length]).dist<y)),k=Math.hypot(v[0]-w[0],v[1]-w[1]),S=Math.max(12,Math.ceil(k/.1)),$=z=>[w[0]+(v[0]-w[0])*z/S,w[1]+(v[1]-w[1])*z/S],E=Array.from({length:S+1},(z,P)=>!x($(P)));for(let z=0;z<=S;){if(!E[z]){z++;continue}let P=z;for(;P+1<=S&&E[P+1];)P++;let[T,C]=[$(Math.max(0,z-1)),$(Math.min(S,P+1))];Math.hypot(C[0]-T[0],C[1]-T[1])>=.3&&_.push({id:L("wall"),a:[Ie(T[0]),Ie(T[1])],b:[Ie(C[0]),Ie(C[1])],thickness:Ie(ie(b.attrs,"thickness",10)/100),height:b.attrs.height?Ie(ie(b.attrs,"height",250)/100):null}),z=P+1}}h.walls=_,n.rooms+=f.length,n.openings+=h.openings.length,n.walls+=_.length,(f.length||_.length)&&e.floors.push(h)}),n.floors=e.floors.length,n.furniture=t.filter(l=>l.name==="pieceOfFurniture").length,{building:He(e),report:n}}async function Eh(t){let e=Sh(t).find(o=>o.name==="Home.xml");if(!e)throw new Error("sh3d_no_xml");let n=new TextDecoder().decode(await Mh(t,e)),r=fw(dw(n));if(r.report.rooms===0&&r.report.walls===0)throw new Error("sh3d_empty");return r}function mw(t){let e=t.split(/\r?\n/),n=[];for(let r=0;r+1<e.length;r+=2){let o=Number(e[r].trim());Number.isFinite(o)&&n.push([o,e[r+1].trim()])}return n}function gw(t){let e=t.findIndex(([r,o])=>r===9&&o==="$INSUNITS"),n=e>=0?Number(t[e+1]?.[1]):NaN;return{1:.0254,2:.3048,4:.001,5:.01,6:1}[n]??null}function _w(t){let e=mw(t),n=gw(e),r=e.findIndex(([s,a],l)=>s===2&&a==="ENTITIES"&&e[l-1]?.[1]==="SECTION"),o=[];if(r<0)return{shapes:o,unit:n};let i=r+1;for(;i<e.length&&!(e[i][0]===0&&e[i][1]==="ENDSEC");){let[s,a]=e[i];if(s!==0){i++;continue}let l=i+1;for(;l<e.length&&e[l][0]!==0;)l++;let c=e.slice(i+1,l);if(a==="LINE"){let u=h=>Number(c.find(([p])=>p===h)?.[1]??NaN),d=[[u(10),u(20)],[u(11),u(21)]];d.every(([h,p])=>Number.isFinite(h)&&Number.isFinite(p))&&o.push({points:d,closed:!1})}else if(a==="LWPOLYLINE"){let u=c.filter(([f])=>f===10).map(([,f])=>Number(f)),d=c.filter(([f])=>f===20).map(([,f])=>Number(f)),h=Number(c.find(([f])=>f===70)?.[1]??0),p=u.map((f,_)=>[f,d[_]]).filter(([f,_])=>Number.isFinite(f)&&Number.isFinite(_));p.length>=2&&o.push({points:p,closed:(h&1)===1})}i=l}return{shapes:o,unit:n}}var Ah=t=>Math.round(t*1e3)/1e3;function Fh(t){let{shapes:e,unit:n}=_w(t);if(!e.length)throw new Error("dxf_empty");let r=e.flatMap(p=>p.points),o=Math.max(Math.max(...r.map(p=>p[0]))-Math.min(...r.map(p=>p[0])),Math.max(...r.map(p=>p[1]))-Math.min(...r.map(p=>p[1]))),i=n??(o>2e3?.001:o>200?.01:1),s=Math.min(...r.map(p=>p[0])),a=Math.max(...r.map(p=>p[1])),l=([p,f])=>[Ah((p-s)*i),Ah((a-f)*i)],c=Ge(L("floor"),"Erdgeschoss",0),u=[],d=[];for(let p of e){let f=p.points.map(l);if(p.closed&&f.length>=3)u.push({id:L("room"),name:`Raum ${u.length+1}`,area_id:null,points:f,floor_material:"wood",panel:[]});else for(let _=0;_+1<f.length;_++)Math.hypot(f[_+1][0]-f[_][0],f[_+1][1]-f[_][1])>.05&&d.push({id:L("wall"),a:f[_],b:f[_+1]})}c.rooms=u,c.walls=d;let h=Nt();return h.floors=[c],{building:He(h),report:{floors:1,rooms:u.length,openings:0,walls:d.length,furniture:0}}}var tt=t=>Math.round(t*100)/100;function bw(t,e){let n=t.category;return typeof n=="string"?n:n&&typeof n=="object"?Object.keys(n)[0]??e:e}function yw(t,e){let n=t,r=n?.transform,o=n?.dimensions;if(!n||!Array.isArray(r)||r.length<16||!Array.isArray(o)||o.length<3)return null;let i=a=>Number(a),s=Math.hypot(i(r[0]),i(r[2]));return![...r.slice(0,16),...o.slice(0,3)].every(a=>Number.isFinite(i(a)))||s<1e-6?null:{centre:[i(r[12]),i(r[13]),i(r[14])],dir:[i(r[0])/s,i(r[2])/s],size:[i(o[0]),i(o[1]),i(o[2])],kind:bw(n,e)}}var Xn=(t,e,n)=>(Array.isArray(t[e])?t[e]:[]).map(r=>yw(r,n)).filter(r=>!!r);function ww(t){if(t.length<3)return null;let e=t.map(l=>{let c=l.size[0]/2;return[[l.centre[0]-l.dir[0]*c,l.centre[2]-l.dir[1]*c],[l.centre[0]+l.dir[0]*c,l.centre[2]+l.dir[1]*c]]}),n=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1]),r=.4,o=new Set([0]),i=[e[0][0]],s=[0],a=e[0][1];for(;o.size<t.length;){let l=null;for(let d=0;d<t.length;d++)if(!o.has(d))for(let h of[!1,!0]){let p=n(a,e[d][h?1:0]);p<=r&&(!l||p<l.d)&&(l={i:d,flip:h,d:p})}if(!l)break;let[c,u]=l.flip?[e[l.i][1],e[l.i][0]]:[e[l.i][0],e[l.i][1]];i.push([(a[0]+c[0])/2,(a[1]+c[1])/2]),s.push(l.i),o.add(l.i),a=u}return o.size<t.length||n(a,i[0])>r?null:(i[0]=[(a[0]+i[0][0])/2,(a[1]+i[0][1])/2],{points:i,edgeWall:s})}function zh(t){let e=[],n=[];for(let a of t){let l=a.size[0]/2;for(let c of[-1,1])e.push(a.centre[0]+c*a.dir[0]*l),n.push(a.centre[2]+c*a.dir[1]*l)}let[r,o,i,s]=[Math.min(...e),Math.max(...e),Math.min(...n),Math.max(...n)];return[[r,i],[o,i],[o,s],[r,s]]}function vw(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.min(i,Math.max(0,((t[0]-e[0])*r+(t[1]-e[1])*o)/i));return{dist:Math.hypot(t[0]-(e[0]+r/i*s),t[1]-(e[1]+o/i*s)),along:s,length:i}}var kw={sofa:"sofa",bed:"bed",table:"table",chair:"chair",bathtub:"bathtub",toilet:"wc",sink:"sink",refrigerator:"fridge",stove:"stove",oven:"stove",dishwasher:"dishwasher",washerDryer:"washer",storage:"tall_cabinet",television:"tv_board"};function Th(t){let e=t;return!e||typeof e!="object"||"floors"in e||"settings"in e?!1:(Array.isArray(e.rooms)?e.rooms:[e]).some(r=>r&&Array.isArray(r.walls)&&Xn(r,"walls","wall").length>0)}function Ph(t){let e=t,r=(Array.isArray(e.rooms)?e.rooms:[e]).filter(b=>b&&typeof b=="object").map(b=>({walls:Xn(b,"walls","wall"),doors:[...Xn(b,"doors","door"),...Xn(b,"openings","opening")],windows:Xn(b,"windows","window"),objects:Xn(b,"objects","object")})).filter(b=>b.walls.length);if(!r.length)throw new Error("roomplan_empty");let o=r.flatMap(b=>b.walls),i=Math.min(...o.map(b=>b.centre[1]-b.size[1]/2)),s=r.map(b=>ww(b.walls)),a=r.flatMap((b,w)=>s[w]?.points??zh(b.walls)),[l,c]=[Math.min(...a.map(b=>b[0]))-.5,Math.min(...a.map(b=>b[1]))-.5],u=([b,w])=>[tt(b-l),tt(w-c)],d=Ge(L("floor"),"Erdgeschoss",0);d.height=tt(Math.max(2.2,Math.min(4,Math.max(...o.map(b=>b.size[1])))));let h=[],p=[];r.forEach((b,w)=>{let y=(s[w]?.points??zh(b.walls)).map(u),x={id:L("room"),name:`Raum ${w+1}`,area_id:null,points:y,floor_material:"wood",panel:[]};h.push(x);for(let k of[...b.doors.map(S=>({v:S,window:!1})),...b.windows.map(S=>({v:S,window:!0}))]){let S=[k.v.centre[0]-l,k.v.centre[2]-c],$=null;if(y.forEach((T,C)=>{let W=vw(S,T,y[(C+1)%y.length]);W.dist<=.6&&(!$||W.dist<$.dist)&&($={edge:C,...W})}),!$)continue;let E=$,z=Math.min(E.length,Math.max(.3,k.v.size[0])),P=k.v.kind==="opening";d.openings.push({id:L("op"),room_id:x.id,edge:E.edge,offset:tt(Math.min(E.length-z/2,Math.max(z/2,E.along))),width:tt(z),type:k.window?"window":"door",sill:k.window?tt(Math.max(0,k.v.centre[1]-k.v.size[1]/2-i)):0,height:tt(k.v.size[1]),hinge:"left",leaves:z>1.4?2:1,swing:"in",...P?{style:"passage"}:{},cover:null,contact:null,contact2:null,tilt:null})}for(let k of b.objects){let S=kw[k.kind];if(!S)continue;let[$,E,z]=[k.size[0],k.size[2],k.size[1]];$<.1||E<.1||p.push({id:L("f"),type:S,x:tt(k.centre[0]-l),z:tt(k.centre[2]-c),rotation:Math.round((Math.atan2(k.dir[1],k.dir[0])*180/Math.PI+360)%360),w:tt($),d:tt(E),h:tt(z),variant:null,entity:null,power:null})}}),d.rooms=h,d.furniture=p;let f=Nt();f.floors=[d];let _=r.reduce((b,w)=>b+w.objects.length,0)-p.length;return{building:He(f),report:{floors:1,rooms:h.length,openings:d.openings.length,walls:0,furniture:_}}}var uo=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)&&"ref"in t;function xw(t){let e=0,n=()=>{for(;t[e]===" ";)e++;let o=t[e];if(o==="("){e++;let l=[];for(;e<t.length&&t[e]!==")";){for(l.push(n());t[e]===" ";)e++;t[e]===","&&e++}return e++,l}if(o==="'"){let l="";for(e++;e<t.length;)if(t[e]==="'"&&t[e+1]==="'")l+="'",e+=2;else if(t[e]==="'"){e++;break}else l+=t[e++];return $w(l)}if(o==="#"){let l=/^#(\d+)/.exec(t.slice(e));return e+=l[0].length,{ref:Number(l[1])}}if(o==="$"||o==="*")return e++,null;let i=/^[^,()]+/.exec(t.slice(e)),s=i?i[0].trim():"";if(e+=i?i[0].length:1,t[e]==="(")return n();let a=Number(s);return Number.isFinite(a)&&s!==""?a:s},r=[];for(;e<t.length;){for(r.push(n());t[e]===" ";)e++;if(t[e]===",")e++;else break}return r}function $w(t){return t.replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>String.fromCharCode(...(n.match(/.{4}/g)??[]).map(r=>parseInt(r,16)))).replace(/\\S\\(.)/g,(e,n)=>String.fromCharCode(n.charCodeAt(0)+128))}function Sw(t){let e=new Map,n=t.slice(Math.max(0,t.indexOf("DATA;")));for(let r of n.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([\s\S]*?)\)\s*;(?=\s*(?:#|ENDSEC))/g))e.set(Number(r[1]),{type:r[2],args:xw(r[3])});return e}var Ih={x:0,y:0,z:0,c:1,s:0},Dh=(t,e)=>({x:t.x+t.c*e.x-t.s*e.y,y:t.y+t.s*e.x+t.c*e.y,z:t.z+e.z,c:t.c*e.c-t.s*e.s,s:t.s*e.c+t.c*e.s});function Oh(t){let e=Sw(t);if(!e.size)throw new Error("ifc_empty");let n=$=>uo($)?e.get($.ref):void 0,r=$=>typeof $=="number"?$:NaN,o=$=>(n($)?.args[0]??[]).map(E=>r(E)),i=[...e.values()].find($=>$.type==="IFCSIUNIT"&&$.args[1]===".LENGTHUNIT."),s=i?{".MILLI.":.001,".CENTI.":.01,".DECI.":.1}[String(i.args[2])]??1:1,a=$=>{let E=n($);if(!E)return Ih;let[z=0,P=0,T=0]=o(E.args[0]),C=n(E.type==="IFCAXIS2PLACEMENT3D"?E.args[2]:E.args[1]),[W=1,V=0]=(C?.args[0]??[]).map(Q=>r(Q)),Y=Math.hypot(W,V)||1;return{x:z||0,y:P||0,z:T||0,c:W/Y,s:V/Y}},l=($,E=0)=>{let z=n($);return!z||z.type!=="IFCLOCALPLACEMENT"||E>30?Ih:Dh(l(z.args[0],E+1),a(z.args[1]))},c=$=>{for(let E of n($)?.args[2]??[])for(let z of n(E)?.args[3]??[]){let P=n(z);if(P?.type!=="IFCEXTRUDEDAREASOLID")continue;let T=n(P.args[0]),C=Dh(a(P.args[1]),a(T?.args[2])),W=[];if(T?.type==="IFCRECTANGLEPROFILEDEF"){let[V,Y]=[r(T.args[3])/2,r(T.args[4])/2];W=[[-V,-Y],[V,-Y],[V,Y],[-V,Y]]}else if(T?.type==="IFCARBITRARYCLOSEDPROFILEDEF"){let V=n(T.args[2]);V?.type==="IFCPOLYLINE"&&(W=(V.args[0]??[]).map(Y=>o(Y)))}if(W=W.filter(V=>Number.isFinite(V[0])&&Number.isFinite(V[1])),W.length>3&&Math.hypot(W[0][0]-W[W.length-1][0],W[0][1]-W[W.length-1][1])<1e-6&&W.pop(),W.length>=3)return W.map(([V,Y])=>[C.x+C.c*V-C.s*Y,C.y+C.s*V+C.c*Y])}return null},u=new Map;for(let[,$]of e){if($.type==="IFCRELAGGREGATES"&&uo($.args[4]))for(let E of $.args[5]??[])uo(E)&&u.set(E.ref,$.args[4].ref);if($.type==="IFCRELCONTAINEDINSPATIALSTRUCTURE"&&uo($.args[5]))for(let E of $.args[4]??[])uo(E)&&u.set(E.ref,$.args[5].ref)}let d=[...e].filter(([,$])=>$.type==="IFCBUILDINGSTOREY").map(([$,E])=>({id:$,name:String(E.args[7]||E.args[2]||"")||null,elevation:r(E.args[9])*s}));d.sort(($,E)=>($.elevation||0)-(E.elevation||0));let h=[];for(let[$,E]of e){if(E.type!=="IFCSPACE")continue;let z=c(E.args[6]);if(!z)continue;let P=l(E.args[5]),T=z.map(([W,V])=>[(P.x+P.c*W-P.s*V)*s,(P.y+P.s*W+P.c*V)*s]),C=String(E.args[7]||E.args[2]||"")||`Raum ${h.length+1}`;h.push({storey:u.get($)??null,name:C,ring:T})}if(!h.length)throw new Error("ifc_empty");let p=[];for(let[$,E]of e){if(E.type!=="IFCDOOR"&&E.type!=="IFCWINDOW")continue;let[z,P]=[r(E.args[8])*s,r(E.args[9])*s];if(!(P>.2&&P<12&&z>.2&&z<8))continue;let T=l(E.args[5]),C=P/s/2;p.push({storey:u.get($)??null,window:E.type==="IFCWINDOW",at:[(T.x+T.c*C)*s,(T.y+T.s*C)*s],width:P,height:z,z:T.z*s})}let f=h.flatMap($=>$.ring),_=Math.min(...f.map($=>$[0])),b=Math.max(...f.map($=>$[1])),w=$=>Math.round($*1e3)/1e3,v=[],y=new Map;if(d.filter($=>h.some(E=>E.storey===$.id)).forEach(($,E)=>{let z=Ge(L("floor"),$.name??`Etage ${E+1}`,Number.isFinite($.elevation)?w($.elevation):E*2.8);v.push(z),y.set($.id,z)}),h.some($=>$.storey===null||!y.has($.storey))){let $=Ge(L("floor"),v.length?"Weitere R\xE4ume":"Erdgeschoss",v.length?v[v.length-1].elevation+2.8:0);v.push($),y.set(null,$)}v.forEach(($,E)=>{let z=v[E+1];z&&z.elevation-$.elevation>1.8&&($.height=w(z.elevation-$.elevation-.2))});for(let $ of h)y.get($.storey!==null&&y.has($.storey)?$.storey:null).rooms.push({id:L("room"),name:$.name,area_id:null,points:$.ring.map(([z,P])=>[w(z-_),w(b-P)]),floor_material:"wood",panel:[]});let k=0;for(let $ of p){let E=y.get($.storey!==null&&y.has($.storey)?$.storey:null);if(!E)continue;let z=[$.at[0]-_,b-$.at[1]],P=null;for(let W of E.rooms)W.points.forEach((V,Y)=>{let Q=W.points[(Y+1)%W.points.length],B=Math.hypot(Q[0]-V[0],Q[1]-V[1]);if(B<$.width)return;let ue=((z[0]-V[0])*(Q[0]-V[0])+(z[1]-V[1])*(Q[1]-V[1]))/B;if(ue<0||ue>B)return;let Ke=Math.abs((z[0]-V[0])*(Q[1]-V[1])-(z[1]-V[1])*(Q[0]-V[0]))/B;Ke<=.6&&(!P||Ke<P.dist)&&(P={room:W.id,edge:Y,along:ue,length:B,dist:Ke})});let T=P;if(!T)continue;let C=Math.max(0,w($.z-E.elevation));E.openings.push({id:L("op"),room_id:T.room,edge:T.edge,offset:w(Math.min(T.length-$.width/2,Math.max($.width/2,T.along))),width:w($.width),type:$.window?"window":"door",sill:$.window?C:0,height:w($.height),hinge:"left",leaves:$.width>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null}),k++}let S=Nt();return S.floors=v,{building:He(S),report:{floors:v.length,rooms:h.length,openings:k,walls:0,furniture:0}}}var Hh="nextfloor",Mw="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|conversation|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|stt|sun|switch|text|time|timer|todo|tts|update|vacuum|valve|water_heater|weather|zone",Lh=new RegExp(`^(?:${Mw})\\.[a-z0-9_]+$`),Rw=/^[0-9a-f]{32}$/,Ew=new Set(["area_id","ha_floor"]),Aw=new Set(["sub_areas"]),Fw=new Set(["tap","show_when","pictures","moods"]);function Ga(t){if(typeof t=="string")return Lh.test(t)||Rw.test(t)?null:t;if(Array.isArray(t))return t.map(e=>Ga(e)).filter(e=>e!==null);if(t&&typeof t=="object"){let e={};for(let[n,r]of Object.entries(t))Lh.test(n)||Fw.has(n)||(Ew.has(n)||Aw.has(n)?e[n]=null:e[n]=Ga(r));return e}return t}var zw=["wall_exterior","wall_interior","wall_paint_outside","wall_paint_inside","wall_material_outside","wall_material_inside","weather_animations","grid","north","roof","weather_effects","rain_warning","sun_patches","lock_plan","rooms_as_drawn","start_view","units","motion_markers_active","room_double_tap"];function Ch(t){let e=structuredClone(t),n={};for(let o of zw)e.settings?.[o]!==void 0&&(n[o]=e.settings[o]);let r=e.settings?.backdrop;r&&(r.color||r.dim!=null)&&(n.backdrop={color:r.color??null,dim:r.dim??null}),e.settings=n,e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null,consumption:null,gas:null,water:null},e.presence=[];for(let o of e.floors){o.background=null,o.placements=[],o.power_entity=null,o.ha_floor=null;for(let i of o.rooms)Object.assign(i,{area_id:null,sub_areas:null,panel:[],hidden:[],no_state:[]});o.furniture.forEach(i=>{Object.assign(i,{entity:null,power:null}),delete i.effect_animations,i.picture&&!(i.picture.startsWith("image:")||i.picture.startsWith("https://"))&&(i.picture=null)}),o.openings.forEach(i=>Object.assign(i,{cover:null,contact:null,tilt:null}))}return Ga(e)}function Nh(t,e){return{format:Hh,version:1,exported_at:new Date().toISOString(),building:e?Ch(t):structuredClone(t)}}var Tw=t=>!!t&&(t.version===1||t.version===void 0)&&Array.isArray(t.floors)&&t.floors.every(e=>!!e&&typeof e=="object"),Pw="https://therealmrbk.github.io/NextFloor/preview/?shared&noshowcase";function Wh(t,e,n,r,o=Pw){let i=new Set(t.floors.flatMap(c=>c.furniture.map(u=>u.type)).filter(c=>c.startsWith("pack:")).map(c=>c.split(":")[1])),s={building:Ch(t),packs:e.filter(c=>!c.builtin&&i.has(c.id))},a=JSON.stringify(s).replace(/</g,"\\u003c"),l=c=>c.replace(/[&<>"]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[u]);return`<!doctype html>
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
`}function Bh(t){let e;try{e=JSON.parse(t)}catch{throw new Error("not_json")}let n=e,r=n?.format===Hh?n.building:e;if(!Tw(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),He(r)}var Iw=t=>!/^https?:\/\//.test(t)&&!t.startsWith("camera:");function Vh(t){let e=new Set;for(let n of t.floors){n.background?.image_id&&e.add(n.background.image_id);let r=n.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&Iw(o)&&e.add(o)}return[...e]}function Kh(t,e,n="application/json"){let r=document.createElement("a"),o=URL.createObjectURL(new Blob([e],{type:n}));Object.assign(r,{href:o,download:t}),r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}var Dw={api:{listHistory:Zc,restoreSnapshot:Jc,takeSnapshot:qc,getSnapshot:Yc,deleteSnapshot:Xc,fetchBackup:eu,restoreBackup:tu,fetchImage:Vo,storeImage:Dt},alert:t=>alert(t),confirm:t=>confirm(t),prompt:t=>prompt(t),download:Kh,today:()=>new Date().toISOString().slice(0,10)},Ow=t=>String(t?.message??t),Pi=class{host;deps;history=null;busy=!1;compare=null;constructor(e,n=Dw){this.host=e,this.deps=n}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:n,t:r}=this.host;!n||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(n,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}async saveVersion(){let{hass:e,t:n}=this.host,r=e?this.deps.prompt?.(n("version_name_prompt"))?.trim():null;!e||!r||(await this.deps.api.takeSnapshot(e,r.slice(0,60)),this.host.say(n("version_saved",{name:r})),await this.loadHistory())}async compareWith(e){let{hass:n}=this.host,r=this.deps.api.getSnapshot;if(!n||!r)return;if(this.compare?.snapshot.id===e.id)return this.compare=null,this.host.refresh();let o=He(await r(n,e.id));this.compare={snapshot:e,entries:$h(o,this.host.doc)},this.host.refresh()}async deleteVersion(e){let{hass:n,t:r}=this.host,o=this.deps.api.deleteSnapshot;!n||!o||!this.deps.confirm(r("version_delete_confirm",{name:e.name??this.timeOf(e)}))||(await o(n,e.id),this.compare?.snapshot.id===e.id&&(this.compare=null),await this.loadHistory())}exportShareView(){let e=this.host.t,n=Wh(this.host.doc,Er(),e("share_view_title"),e("share_view_needs_js"));this.deps.download(`nextfloor-${e("share_view_file")}-${this.deps.today()}.html`,n,"text/html"),this.host.say(e("share_view_done"))}exportPlan(e){let n=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${n}-${this.deps.today()}.json`,JSON.stringify(Nh(this.host.doc,e),null,2))}async importPlan(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o,i=r("backup_import_confirm");try{if(/\.sh3d$/i.test(e.name)){let s=await Eh(new Uint8Array(await e.arrayBuffer()));o=s.building,i=`${r("import_sh3d_found",{...s.report})}

${i}`}else if(/\.ifc$/i.test(e.name)){let s=Oh(await e.text());o=s.building,i=`${r("import_ifc_found",{floors:s.report.floors,rooms:s.report.rooms,openings:s.report.openings})}

${i}`}else if(/\.dxf$/i.test(e.name)){let s=Fh(await e.text());o=s.building,i=`${r("import_dxf_found",{rooms:s.report.rooms,walls:s.report.walls})}

${i}`}else{let s=await e.text(),a=null;try{a=JSON.parse(s)}catch{}if(Th(a)){let l=Ph(a);o=l.building,i=`${r("import_roomplan_found",{rooms:l.report.rooms,openings:l.report.openings,skipped:l.report.furniture})}

${i}`}else o=Bh(s)}}catch(s){let a=s.message,l={not_json:"import_error_not_json",not_plan:"import_error_not_plan",not_zip:"import_error_sh3d",sh3d_no_xml:"import_error_sh3d",sh3d_empty:"import_error_sh3d_empty",dxf_empty:"import_error_dxf_empty",ifc_empty:"import_error_ifc_empty",roomplan_empty:"import_error_roomplan_empty"};this.deps.alert(l[a]?r(l[a]):r("backup_import_error",{error:a}));return}this.deps.confirm(i)&&(await this.deps.api.takeSnapshot(n).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t:n}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of Vh(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${n("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(n("backup_import_error",{error:Ow(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(n,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(n,l,c).then(()=>s++,()=>{});this.host.adopt(He(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};function ze(t,e){if(!kt(e))return ke(t,`furn_${e}`);let n=Z(e);return n?nt(n,e,t?.language??navigator.language):ke(t,"pack_missing_item")}function nt(t,e,n){return t.name[n.split("-")[0]]??vi(n,e)??fu(t,n)}function Be(t,e){return vi(e,`packname:${t.id}`)??mu(t,e)}function Gh(t,e){return t.name[e.split("-")[0]]??vi(e,`color:${t.id}`)??t.name.en??Object.values(t.name)[0]}var Uh=(t,e,n="application/json,.json")=>m`<label class="nf-btn nf-upload"
  >${t}<input
    type="file"
    accept=${n}
    @change=${r=>{let o=r.target,i=o.files?.[0];o.value="",e(i)}}
  />
</label>`,Lw={added:"\uFF0B",removed:"\u2212",renamed:"\u270E",reshaped:"\u2922",moved:"\u2194"};function Hw(t,e){let n=t.t;if(!e.length)return m`<p class="nf-sub nf-diff">${n("version_same")}</p>`;let r=i=>i.kind.startsWith("furniture")?ze(t.hass,i.name)||i.name:i.kind.startsWith("device")?String(t.hass?.states[i.name]?.attributes.friendly_name??i.name):i.kind.startsWith("opening")?n(i.name==="door"?"opening_door":i.name==="garage"?"opening_garage":"opening_window"):i.name,o=[...new Set(e.map(i=>i.floor))];return m`<div class="nf-diff">
    ${R(n("version_diff_n",{n:e.length}))}
    ${o.map(i=>m`<h4 class="nf-check-floor">${i}</h4>
        <ul class="nf-diff-list">
          ${e.filter(s=>s.floor===i).map(s=>{let a=s.kind.slice(s.kind.indexOf("_")+1),l=typeof s.detail=="number"?`${s.detail>0?"+":""}${q(t.hass,s.detail,1)}`:s.detail??"";return m`<li><span aria-hidden="true">${Lw[a]??"\u2022"}</span> ${n(`diff_${s.kind}`,{name:r(s),detail:l})}</li>`})}
        </ul>`)}
  </div>`}function jh(t,e){let n=t.t,r=e.history,o=r===null?R(n("loading")):r.length===0?R(n("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                  <span>${i.name?m`<b>📌 ${i.name}</b> · `:g}${e.timeOf(i)} <span class="nf-muted">· ${n("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                  <span class="nf-version-actions">
                    <button class="nf-link" aria-pressed=${e.compare?.snapshot.id===i.id} @click=${()=>{e.compareWith(i)}}>${n("version_compare")}</button>
                    <button class="nf-link" @click=${()=>e.restorePoint(i)}>${n("backup_restore")}</button>
                    ${i.name?m`<button class="nf-link" title=${n("delete")} @click=${()=>{e.deleteVersion(i)}}>✕</button>`:g}
                  </span>
                </div>
                ${e.compare?.snapshot.id===i.id?Hw(t,e.compare.entries):g}`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${n("backup")}</summary>
    <h4 class="nf-lib-head">${n("backup_history")}</h4>
    ${J(m`<button class="nf-btn" title=${n("version_save_hint")} @click=${()=>{e.saveVersion()}}>📌 ${n("version_save")}</button>`)}
    ${o}
    <h4 class="nf-lib-head">${n("backup_file")}</h4>
    ${J(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${n("backup_export")}</button>`,m`<button class="nf-btn" title=${n("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${n("backup_export_share")}</button>`,m`<button class="nf-btn" title=${n("share_view_hint")} @click=${()=>e.exportShareView()}>🔗 ${n("share_view")}</button>`,Uh(n("backup_import"),i=>{e.importPlan(i)},"application/json,.json,.sh3d,.dxf,.ifc"))}
    ${R(n("backup_hint"))} ${R(n("import_other_hint"))}
    <h4 class="nf-lib-head">${n("backup_full")}</h4>
    ${J(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":n("backup_full_export")}</button>`,Uh(n("backup_full_import"),i=>{e.importFull(i)}))}
    ${R(n("backup_full_hint"))}
  </details>`}function Zh(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var qh=["body","wood","fabric","white","metal","dark"],Yh={body:"#172238",wood:"#19233c",fabric:"#1a2644",white:"#1d2946",metal:"#2a3a60",dark:"#0b111f"};var Cw=["neon","blueprint","day","own","real","nordic","warm_evening","minimal"],Xh=["dark","light","lines","background","glass"],Nw={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22",glass:""},Jh=t=>Nw[t]||"#9fc4e0";var mR=["auto",...Cw];var bn=(t,e,n)=>Math.min(n,Math.max(e,t)),Ww=t=>(Math.round(t)%360+360)%360,Ua=(t,e)=>Ww(t+e);function Qh(t,e,n){return n?[...new Set([...t,e])]:t.filter(r=>r!==e)}function ep(t,e,n){let r=t.t,o=s=>()=>n(Ua(e,s)),i=F`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${r("compass_title")}>
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
      ${A(t,r("north"),e,s=>n(Ua(s,0)),1)}
      <div class="nf-actions">
        <button class="nf-btn" ?disabled=${!t.admin} title=${r("compass_swap_hint")} @click=${o(180)}>⇅ ${r("compass_swap")}</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(-90)}>↺ 90°</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(90)}>↻ 90°</button>
      </div>
      <span class="nf-sub">${r("compass_hint")}</span>
    </div>
  </div>`}var Bw="https://tile.openstreetmap.org/{z}/{x}/{y}.png";var Vw=40075016686e-3,ja=Math.PI/180,ho=18,po=.5,Kw=160;function Gw(t,e,n){let r=2**n,o=(e+180)/360*r,i=(1-Math.log(Math.tan(t*ja)+1/Math.cos(t*ja))/Math.PI)/2*r;return[o,i]}var Uw=(t,e)=>Vw*Math.cos(t*ja)/2**e;function tp(t,e,n,r=Kw){let[o,i]=Gw(t,e,n),s=Uw(t,n),a=r/s,l=2**n-1,c=[];for(let u=Math.floor(i-a);u<=Math.floor(i+a);u++)for(let d=Math.floor(o-a);d<=Math.floor(o+a);d++){if(u<0||u>l)continue;let h=(d%(l+1)+l+1)%(l+1);c.push({x:h,y:u,z:n,east:(d-o)*s,north:-(u-i)*s,size:s})}return c}function np(t,e){return t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)).replace("{s}","abc"[(e.x+e.y)%3])}var rp=t=>t.url&&t.url.startsWith("https://")?t.url:Bw;var Ii=t=>!!t&&t.on===!0&&Number.isFinite(t.lat)&&Number.isFinite(t.lon),op=t=>({x:t.x??0,z:t.z??0,opacity:t.opacity??po,zoom:t.zoom??ho});function jw(t){let e=[],n=[];for(let o of t.floors){for(let i of o.rooms)for(let[s,a]of i.points)e.push(s),n.push(a);for(let i of o.outdoor??[])for(let[s,a]of i.points)e.push(s),n.push(a)}if(!e.length)return[0,0];let r=o=>Math.round((Math.min(...o)+Math.max(...o))/2*100)/100;return[r(e),r(n)]}function ip(t,e){let[n,r]=jw(t);return{on:!0,lat:e?.lat??0,lon:e?.lon??0,x:n,z:r,opacity:po,zoom:ho,url:null}}function sp(t,e,n){let r=o=>Math.round(o*100)/100;return{...t,x:r((t.x??0)+e),z:r((t.z??0)+n)}}function ap(t){let e=t.trim();return e===""?null:/^https:\/\/\S+$/.test(e)&&["{z}","{x}","{y}"].every(n=>e.includes(n))?e:void 0}var Zw=["15","16","17","18","19"],qw=["1","5","20"],Di="5";function lp(t,e,n){let r=t.t,o=e.settings.map??null,i=t.hass?.config,s=Ii(o),a=u=>{if(!u)return n(o?{...o,on:!1}:null);n(o?{...o,on:!0}:ip(e,{lat:i?.latitude,lon:i?.longitude}))},l=u=>o&&n({...o,...u}),c=(u,d)=>()=>o&&n(sp(o,u*Number(Di),d*Number(Di)));return m`<div class="nf-map-settings nf-wide">
    ${D(t,r("map_on"),s,a,{title:r("map_hint")})}
    ${o&&o.on?m`<div class="nf-form">
          ${A(t,r("map_lat"),o.lat,u=>l({lat:Math.max(-85,Math.min(85,u))}),1e-4)}
          ${A(t,r("map_lon"),o.lon,u=>l({lon:Math.max(-180,Math.min(180,u))}),1e-4)}
          ${i?.latitude!==void 0&&i.longitude!==void 0?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>l({lat:i.latitude,lon:i.longitude})}>${r("map_use_ha")}</button>`:g}
          ${A(t,r("map_opacity"),Math.round((o.opacity??po)*100),u=>l({opacity:Math.max(5,Math.min(100,u))/100}),5,5)}
          ${O(t,r("map_zoom"),String(o.zoom??ho),Zw.map(u=>[u,u==="15"?`${u} \xB7 ${r("map_zoom_coarse")}`:u==="19"?`${u} \xB7 ${r("map_zoom_fine")}`:u]),u=>l({zoom:Number(u)}))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${r("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,-1)}>▲</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(-1,0)}>◀</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(1,0)}>▶</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,1)}>▼</button>
            </div>
            ${O(t,r("map_step"),Di,qw.map(u=>[u,`${u} m`]),u=>Di=u,{wide:!1})}
          </div>
          ${U(t,r("map_url"),o.url??"",u=>{let d=ap(u);d!==void 0&&l({url:d})},{wide:!0,placeholder:"https://\u2026/{z}/{x}/{y}.png",maxlength:300})}
          ${R(r("map_hint"),"nf-wide")}
        </div>`:g}
  </div>`}var Yw=["none","flat","gable","custom"];function Xw(t,e,n){let r=t.t,o=!!e,i=s=>n({color:null,image:null,dim:.35,...e??{},...s});return m`<div class="nf-sub nf-wide">${r("backdrop")}</div>
    ${D(t,r("backdrop"),o,s=>n(s?{color:"#101828",image:null,dim:.35}:null))}
    ${o?m`<label class="nf-field"
            >${r("backdrop_color")}
            <input type="color" .value=${e?.color??"#101828"} ?disabled=${!t.admin} @change=${s=>i({color:s.target.value})}
          /></label>
          ${A(t,r("backdrop_dim"),Math.round((e?.dim??.35)*100),s=>i({dim:bn(s,0,80)/100}),5,0)}
          ${U(t,r("backdrop_image"),e?.image??"",s=>i({image:s||null}),{wide:!0,placeholder:"/local/hintergrund.jpg"})}
          ${R(r("backdrop_hint"),"nf-wide")}`:g}`}function Jw(t,e,n,r){let o=t.t,i=(a,l=n)=>Object.fromEntries(Object.entries(l).filter(([c,u])=>a.includes(c)&&u)),s=H(t.hass,a=>!e.includes(a)&&/^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(a));return m`<div class="nf-sub nf-wide">${o("status_entities")}</div>
    ${e.length?e.map(a=>m`${U(t,`${o("status_name")} \xB7 ${K(t.hass,a)}`,n[a]??"",l=>r(e,i(e,{...n,[a]:l.slice(0,60)})),{placeholder:K(t.hass,a),maxlength:60})}
            ${t.admin?m`<div class="nf-actions" style="align-self:end"><button class="nf-btn nf-field-btn" title=${o("delete")} aria-label=${`${o("delete")}: ${K(t.hass,a)}`} @click=${()=>r(e.filter(l=>l!==a),i(e.filter(l=>l!==a)))}>×</button></div>`:g}`):g}
    ${e.length<12?I(t,o("status_add"),null,void 0,s,a=>a&&a!=="none"&&r([...e,a],n)):g}
    ${R(o("status_entities_hint"),"nf-wide")}`}function Oi(t,e){let n=t.t,r=t.doc.settings,o=c=>t.replace({...structuredClone(t.doc),settings:{...structuredClone(t.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=Yw.map(c=>[c,n(`roof_${c}`)]),a=r.weather_effects??Ru,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${n("settings")}</summary>
    <div class="nf-form">
      ${A(t,n("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:bn(c,.02,1)}),.01,.02)}
      ${A(t,n("wall_interior"),r.wall_interior,c=>o({wall_interior:bn(c,.02,1)}),.01,.02)}
      ${D(t,n("rooms_as_drawn"),!!r.rooms_as_drawn,c=>o({rooms_as_drawn:c||void 0}),{title:n("rooms_as_drawn_hint")})}
      ${R(n("rooms_as_drawn_hint"),"nf-wide")}
      ${ve(t,n("wall_paint_outside"),r.wall_paint_outside,Xo,c=>o({wall_paint_outside:c}))}
      ${ve(t,n("wall_paint_inside"),r.wall_paint_inside,Jo,c=>o({wall_paint_inside:c}))}
      ${O(t,n("wall_material_outside"),r.wall_material_outside??"plaster",nn.map(c=>[c,n(`wmat_${c}`)]),c=>o({wall_material_outside:c==="plaster"?null:c}))}
      ${O(t,n("wall_material_inside"),r.wall_material_inside??"plaster",nn.map(c=>[c,n(`wmat_${c}`)]),c=>o({wall_material_inside:c==="plaster"?null:c}))}
      ${R(n("wall_paint_hint"),"nf-wide")}
      ${qh.map(c=>ve(t,n(`furn_color_${c}`),r.furniture_colors?.[c],Yh[c],u=>{let d={...r.furniture_colors,[c]:u};u||delete d[c],o({furniture_colors:Object.keys(d).length?d:null})}))}
      ${R(n("furn_color_hint"),"nf-wide")}
      ${Xh.map(c=>ve(t,n(`own_look_${c}`),r.own_look?.[c],Jh(c),u=>{let d={...r.own_look,[c]:u??void 0};u||delete d[c],o({own_look:Object.keys(d).length?d:null})}))}
      ${R(n("own_look_hint"),"nf-wide")}
      ${A(t,n("grid"),r.grid,c=>o({grid:bn(c,.01,1)}),.01,.01)}
      ${O(t,n("units"),r.units==="imperial"?"imperial":"metric",[["metric",n("units_metric")],["imperial",n("units_imperial")]],c=>o({units:c==="imperial"?"imperial":null}),{title:n("units_hint")})}
      ${ep(t,r.north,c=>o({north:c}))}
      ${lp(t,t.doc,c=>o({map:c}))}
      ${O(t,n("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?O(t,n("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",n("roof_ridge_long")],["short",n("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?A(t,n("roof_pitch"),r.roof.pitch,c=>i({pitch:bn(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?A(t,n("roof_overhang"),r.roof.overhang,c=>i({overhang:bn(c,0,2)}),.05,0):g}
      ${t.hass?I(t,n("weather_entity"),r.weather_entity??null,Zh(t.hass,null),H(t.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      ${D(t,n("weather_animations"),r.weather_animations!==!1,c=>o({weather_animations:c}),{title:n("weather_animations_hint")})}
      ${O(t,n("weather_preview"),r.weather_preview??"",[["",n("weather_preview_live")],["snowy",n("weather_preview_snow")],["rainy",n("weather_preview_rain")],["pouring",n("weather_preview_pour")],["lightning-rainy",n("weather_preview_storm")],["fog",n("weather_preview_fog")]],c=>o({weather_preview:c||null}),{wide:!0})}
      <div class="nf-sub nf-wide">${n("weather_effects")}</div>
      ${Mu.map(c=>D(t,n(`weather_effect_${c}`),a.includes(c),u=>o({weather_effects:Qh(a,c,u)}),{wide:!1}))}
      ${D(t,n("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${t.hass&&r.rain_warning!==!1?I(t,n("rain_sensor"),r.rain_sensor??null,void 0,H(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({rain_sensor:c==="none"?null:c})):g}
      ${t.hass&&r.rain_warning!==!1&&r.rain_sensor&&r.rain_sensor!=="none"?D(t,n("rain_sensor_inverted"),!!r.rain_sensor_inverted,c=>o({rain_sensor_inverted:c||void 0}),{title:n("rain_sensor_inverted_hint")}):g}
      ${t.hass?I(t,n("outage_sensor"),r.outage_sensor??null,void 0,H(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({outage_sensor:c==="none"?null:c})):g}
      ${R(n("outage_hint"),"nf-wide")}
      ${D(t,n("contact_warning"),!!r.contact_warning,c=>o({contact_warning:c||void 0}),{title:n("contact_warning_hint")})}
      ${D(t,n("night_lock_warning"),!!r.night_lock_warning,c=>o({night_lock_warning:c||void 0}),{title:n("night_lock_warning_hint")})}
      <div class="nf-sub nf-wide">🚨 ${n("alarm_ring_title")}</div>
      ${t.hass?I(t,n("alarm_ring_entity"),r.alarm_ring?.entity??null,void 0,H(t.hass,c=>/^(alarm_control_panel|input_boolean|binary_sensor|switch)\./.test(c)),c=>o({alarm_ring:{...r.alarm_ring??{},entity:c==="none"?null:c}})):g}
      ${O(t,n("alarm_ring_style"),r.alarm_ring?.style??"perimeter",[["perimeter",n("alarm_ring_perimeter")],["circle",n("alarm_ring_circle")]],c=>o({alarm_ring:{...r.alarm_ring??{},style:c}}))}
      ${D(t,n("alarm_ring_armed"),r.alarm_ring?.show_armed!==!1,c=>o({alarm_ring:{...r.alarm_ring??{},show_armed:c}}))}
      ${D(t,n("alarm_ring_disarmed"),r.alarm_ring?.show_disarmed!==!1,c=>o({alarm_ring:{...r.alarm_ring??{},show_disarmed:c}}))}
      ${t.hass?I(t,n("alarm_ring_helper"),r.alarm_ring?.enable_entity??null,void 0,H(t.hass,c=>/^(input_boolean|binary_sensor|switch)\./.test(c)),c=>o({alarm_ring:{...r.alarm_ring??{},enable_entity:c==="none"?null:c}})):g}
      ${U(t,n("alarm_ring_pin"),r.alarm_ring?.pin??"",c=>o({alarm_ring:{...r.alarm_ring??{},pin:c.replace(/\s+/g,"").slice(0,16)||null}}),{placeholder:"1234",title:n("alarm_ring_pin_hint")})}
      ${O(t,n("room_double_tap"),r.room_double_tap??"area",[["area",n("room_double_tap_area")],["plan",n("room_double_tap_plan")],["off",n("room_double_tap_off")]],c=>o({room_double_tap:c==="plan"||c==="off"?c:null}),{title:n("room_double_tap_hint")})}
      ${D(t,n("motion_markers_active"),!!r.motion_markers_active,c=>o({motion_markers_active:c||void 0}),{title:n("motion_markers_active_hint")})}
      ${t.hass?Jw(t,r.status_entities??[],r.status_names??{},(c,u)=>o({status_entities:c.length?c:null,status_names:Object.keys(u).length?u:null})):g}
      ${t.hass?I(t,n("announce_tts"),r.announce_tts??null,void 0,H(t.hass,c=>c.startsWith("tts.")),c=>o({announce_tts:c==="none"?null:c})):g}
      ${A(t,n("announce_volume"),r.announce_volume??70,c=>o({announce_volume:Math.max(0,Math.min(100,Math.round(c)))}),5,0)}
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
`).map(d=>d.trim().slice(0,200)).filter(Boolean).slice(0,30);o({announce_phrases:u.length?u:null})}}
        ></textarea>
      </label>
      ${R(n("announce_phrases_hint"),"nf-wide")}
      ${D(t,n("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:n("sun_patches_hint")})}
      ${D(t,n("sun_arc"),r.sun_arc===!0,c=>o({sun_arc:c}),{title:n("sun_arc_hint")})}
      ${Xw(t,r.backdrop??null,c=>o({backdrop:c}))}
    </div>
    ${R(`${n("north_hint")} ${n("weather_entity_hint")}`)}
  </details>`}var fo=t=>t&&t!=="none"?t:null,mo=(t,e)=>{e&&!t.includes(e)&&t.push(e)},Za=t=>new Map(t.floors.flatMap(e=>e.furniture.filter(n=>n.type==="meter").map(n=>[n.id,n])));function yn(t,e){if(!t.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let n=Za(t),r=new Set([e.id]);for(let o=n.get(e.parent_meter);o;o=n.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return n.has(e.parent_meter)?e.parent_meter:null}function Jn(t){return new Set([...Za(t).values()].filter(e=>yn(t,e)).map(e=>e.id))}function go(t,e){return!t.energy.advanced||!e.parent_meter?null:Jn(t).has(e.parent_meter)?e.parent_meter:null}function cp(t,e,n){if(n.type!=="meter"||n.id===e.id)return!1;let r=Za(t),o=new Set;for(let i=n;i&&!o.has(i.id);i=r.get(i.parent_meter??"")){if(i.id===e.id)return!1;o.add(i.id)}return!0}function Hi(t,e=n=>fo(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of t.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?yn(t,r):null;if(i)(n.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")n.grid??=o,n.gridExport??=fo(r.export);else if(r.type==="inverter")mo(n.solar,o);else if(r.type==="home_battery"){let s=fo(r.charge);mo(n.battery,o),mo(n.charge,s),mo(n.soc,fo(r.soc)),(o||s)&&n.batteries.push({power:o,charge:s})}}for(let r of n.subMeters?t.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?n.subMeters?.find(a=>a.id===go(t,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&mo(o.solar,i);let s=fo(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return n}function Qw(t){for(let e of t.floors){let n=e.furniture.find(r=>r.type==="meter"&&!yn(t,r));if(n)return{floor_id:e.id,x:n.x,z:n.z}}return t.energy.meter}var e0=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,t0=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function Li(t,e,n="power"){let r=e?t.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(t.states).filter(a=>a.startsWith("sensor.")&&t.entities?.[a]?.device_id===r&&t.states[a]?.attributes.device_class===n);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!e0.test(a)),s=e.replace(/^sensor\./,"").replace(t0,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function up(t,e){let n={},r=(o,i)=>{i&&!n[o]&&(n[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",Li(t,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",Li(t,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",Li(t,i)),r("battery_soc",Li(t,i,"battery"))}return n}function Re(t,e=!1){let n=t?Number(t.state):NaN;if(!Number.isFinite(n))return null;let r={kW:1e3,MW:1e6}[String(t.attributes.unit_of_measurement??"W")]??1;return e?-n*r:n*r}var n0=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power";function dp(t,e){if(n0(t,e))return e;let n=t.entities?.[e]?.device_id;if(!n)return null;let r=ra(t,n),o=r?Wt(t,e):null,i=ci(t,n).filter(s=>s!==e);return(r?i.find(s=>o!==null&&Wt(t,s)===o):i[0])??null}var hp=t=>{let e=t.filter(n=>n!==null);return e.length?e.reduce((n,r)=>n+r,0):null};function r0(t,e,n){let r=e.grid??n.grid,o=r?Re(t.states[r],e.grid_invert):null;if(!e.grid&&n.gridExport){let i=Math.max(0,Re(t.states[n.gridExport])??0);return Math.max(0,o??0)-i}return o}function o0(t,e,n){return e.solar?Re(t.states[e.solar],!!e.solar_invert):n.solar.length?hp(n.solar.map(r=>Re(t.states[r],!!e.solar_invert))):null}function qa(t,e,n){return e.charge?(e.power?Math.max(0,Re(t.states[e.power])??0):0)-Math.max(0,Re(t.states[e.charge])??0):e.power?Re(t.states[e.power],n):null}function i0(t,e,n){return e.battery?Re(t.states[e.battery],e.battery_invert):hp(n.batteries.map(r=>qa(t,r,e.battery_invert)))}function Ya(t,e,n,r=Hi(e)){let o=e.energy,i=r0(t,o,r),s=o0(t,o,r),a=i0(t,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(f=>Number(t.states[f]?.state)).filter(Number.isFinite),c=l.length?l.reduce((f,_)=>f+_,0)/l.length:null,u=o.tariff?t.states[o.tariff]:void 0,d=Number(u?.state),h=o.consumption?Re(t.states[o.consumption]):null;h===null&&(i!==null||s!==null||a!==null)&&(h=(i??0)+Math.max(0,s??0)+(a??0)),h===null&&n.length>0&&(h=n.reduce((f,_)=>f+_.power,0));let p={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)};return r.subMeters?{...p,...s0(t,r,p.consumption,o.battery_invert,n,!!o.solar_invert)}:p}function s0(t,e,n,r,o,i=!1){let s=e.subMeters??[],a=new Map;for(let p of s)for(let f of p.floors)a.has(f)||a.set(f,p.id);let l=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...s.flatMap(p=>[p.power,...p.solar,...p.batteries.flatMap(f=>[f.power,f.charge])])]),c=p=>o.filter(f=>a.get(f.floorId)===p&&!l.has(f.powerEntity)).reduce((f,_)=>f+_.power,0),u=new Map(s.map(p=>[p.id,p.power?Re(t.states[p.power],p.invert):null])),d=s.map(p=>{let f=u.get(p.id)??null,_=p.solar.reduce((y,x)=>y+Math.max(0,Re(t.states[x],i)??0),0),b=p.batteries.reduce((y,x)=>y+(qa(t,x,r)??0),0),w=s.filter(y=>y.parent===p.id).reduce((y,x)=>y+(u.get(x.id)??0),0),v=f===null?null:Math.max(0,f+_+b-w);return{id:p.id,parent:p.parent,power:f,solar:_,battery:b,use:v,unmetered:v===null?null:Math.max(0,v-c(p.id))}}),h=d.reduce((p,f)=>p+(f.use??0),0);return{subMeters:d,rest:n===null?null:Math.max(0,n-h)}}function a0(t,e,n){let r=t.b[0]-t.a[0],o=t.b[1]-t.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-t.a[0])*r+(e.z-t.a[1])*o)/(i*i))),a=t.a[0]+r*s,l=t.a[1]+o*s,c=o/i*(a-n.x)+-r/i*(l-n.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function pp(t){let e=Qw(t),n=e?t.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!n)return null;let r=Me(t.settings),o=we(n.rooms,r,n.walls??[]).walls.filter(c=>c.exterior),i=n.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},a=o.map(c=>a0(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),l=r.exterior/2+3;return{floorId:n.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function fp(t,e){let n=t.floors.flatMap(f=>f.furniture.map(_=>({floor:f,item:_}))),r=f=>n.filter(_=>_.item.type===f),o=f=>!!xi(f.item,e),i=f=>({kind:"device",...f}),[s,a,l,c,u]=[t.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],d=!!t.energy.grid||a.some(o),h=!!t.energy.solar||l.length>0&&l.every(o),p=!!t.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:d?"ok":"todo",label:d?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:h?"ok":"todo",label:h?"chk_inverter":"chk_inverter_sensor",target:i(l.find(f=>!o(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:p?"ok":"todo",label:p?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}function Qn(t,e){let n=[];for(let r of t.floors)for(let o of r.furniture)o.type===e&&n.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return n}function l0(t){if(!t?.rooms.length)return null;let e=0,n=0,r=0;for(let o of t.rooms)for(let[i,s]of o.points)e+=i,n+=s,r++;return r?{floorId:t.id,x:e/r,z:n/r,y:1}:null}function c0(t){let e=Jn(t);return Qn(t,"meter").find(n=>!e.has(n.id))??Qn(t,"inverter")[0]??l0(fi(t))}function u0(t,e){let n=Qn(t,"grid_point")[0];if(n)return n;let r=t.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}function d0(t,e){let n=new Set((t.settings.roof.strings??[]).filter(r=>r.inverter&&(t.settings.roof.solar??[]).some(o=>o.string===r.id)).map(r=>r.inverter));return Qn(t,"inverter").filter(r=>!e.has(r.id)&&n.has(r.id))}function mp(t){let e=[],n=c0(t);if(!n)return e;let r=new Set(t.floors.flatMap(a=>a.furniture).filter(a=>go(t,a)).map(a=>a.id)),o=Qn(t,"inverter").find(a=>!r.has(a.id));for(let a of t.settings.roof.solar??[])e.push({key:`solar:${a.id}`,kind:"solar",id:a.id});Qn(t,"home_battery").some(a=>!r.has(a.id))&&e.push({key:"battery",kind:"battery",id:null});let i=a=>a.floorId!==n.floorId||a.x!==n.x||a.z!==n.z,s=d0(t,r);if(s.length>1)for(let a of s)i(a)&&e.push({key:`inverter:${a.id}`,kind:"inverter",id:a.id});else o&&i(o)&&e.push({key:"inverter",kind:"inverter",id:null});u0(t,n)&&e.push({key:"grid",kind:"grid",id:null});for(let a of t.floors.flatMap(l=>l.furniture))r.has(a.id)&&(a.type==="inverter"?e.push({key:`inverter:${a.id}`,kind:"inverter",id:a.id}):a.type==="home_battery"&&e.push({key:`battery:${a.id}`,kind:"battery",id:a.id}));for(let a of Jn(t))e.push({key:`meter:${a}`,kind:"meter",id:a});return e}var Xa=(t,e)=>t.energy.routes?.find(n=>n.key===e&&n.points.length>0);var h0={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},gp=t=>t.hass?Ze(t.hass,t.doc.floors):new Map,p0=Ue,_p=(t,e)=>e.name||t.t(`furn_${e.type}`);function bp(t,e){let n=fp(t.doc,gp(t)),r=n.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${t.t("chk_title")} <span class="nf-sub">${r}/${n.length}</span></h3>
    ${R(t.t("chk_hint"))}
    ${n.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!t.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${h0[o.state]}</span>${t.t(o.label)}
      </button>`)}
  </section>`}function yp(t,e){let n=t.doc.floors.flatMap(r=>r.furniture.filter(o=>p0.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${t.t("energy_devices")}</h3>
    ${R(t.t("energy_devices_hint"))}
    ${n.length>0?m`<div class="nf-room-list">
          ${n.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${_p(t,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${Ue.map(r=>m`<button class="nf-btn" ?disabled=${!t.admin||!t.floor} @click=${()=>e.addDevice(r)}>+ ${t.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var Ci=(t,e,n)=>m`<p class="nf-sub nf-pack-error">${t.t(e)} <button class="nf-btn" ?disabled=${!t.admin} @click=${n}>${t.t("energy_sign_flip")}</button></p>`;function wp(t,e){let{energy:n}=t.doc,r=(x,k)=>t.hass?.states[x]?.attributes[k],o=H(t.hass,x=>Gn(t.hass,x)),i=H(t.hass,x=>me(x)&&r(x,"device_class")==="battery"),s=H(t.hass,x=>me(x)&&(r(x,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(x,"unit_of_measurement")??""))),a=gp(t),l=Hi(t.doc,x=>xi(x,a)),c=x=>t.replace({...structuredClone(t.doc),energy:{...t.doc.energy,...x}}),u=H(t.hass,x=>me(x)&&["gas","water","volume_flow_rate"].includes(r(x,"device_class")??"")),d=x=>k=>c({[x]:k==="none"?null:k}),h=t.hass?Ya(t.hass,t.doc,[],l):null,p=!!h&&(h.solar??0)<20,f=p&&h.grid!==null&&h.grid<-50,_=p&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0,b=!!h&&!p&&h.battery!==null&&h.battery>50&&h.grid!==null&&h.grid<-50&&-h.grid>=h.battery*.8,v=(t.hass?(n.solar?[n.solar]:l.solar).map(x=>Re(t.hass.states[x],!!n.solar_invert)??0).reduce((x,k)=>x+k,0):0)<-50,y=(x,k)=>D(t,t.t("energy_invert"),x,S=>c(k(S)));return m`<section>
    <h3>⚖ ${t.t("energy_balance")}</h3>
    ${R(t.t("energy_balance_hint"))}
    ${f?Ci(t,"energy_sign_grid",()=>c({grid_invert:!n.grid_invert})):g}
    ${_?Ci(t,"energy_sign_battery",()=>c({battery_invert:!n.battery_invert})):g}
    ${v?Ci(t,"energy_sign_solar",()=>c({solar_invert:!n.solar_invert})):g}
    ${b?Ci(t,"energy_sign_battery_day",()=>c({battery_invert:!n.battery_invert})):g}
    <div class="nf-form">
      ${I(t,t.t("energy_grid"),n.grid,l.grid,o,d("grid"))}
      ${y(n.grid_invert,x=>({grid_invert:x}))}
      ${I(t,t.t("energy_solar_sensor"),n.solar,l.solar[0]??null,o,d("solar"))}
      ${y(!!n.solar_invert,x=>({solar_invert:x}))}
      ${I(t,t.t("energy_battery_sensor"),n.battery,l.battery[0]??null,o,d("battery"))}
      ${y(n.battery_invert,x=>({battery_invert:x}))}
      ${I(t,t.t("energy_battery_soc"),n.battery_soc,l.soc[0]??null,i,d("battery_soc"))}
      ${I(t,t.t("energy_consumption_sensor"),n.consumption,null,o,d("consumption"))}
      ${I(t,t.t("energy_tariff_sensor"),n.tariff,void 0,s,d("tariff"))}
      ${I(t,t.t("energy_gas"),n.gas??null,void 0,u,d("gas"))}
      ${I(t,t.t("energy_water"),n.water??null,void 0,u,d("water"))}
      ${R(t.t("energy_meters_hint"),"nf-wide")}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||!t.hass} @click=${()=>e.importPrefs()}>${t.t("energy_import_prefs")}</button></div>
    ${e.note?R(e.note):g} ${R(t.t("energy_hint"))}
  </section>
  <section>
    <h3>⚙ ${t.t("energy_advanced")}</h3>
    ${R(t.t("energy_advanced_hint"))}
    <div class="nf-form">
      ${D(t,t.t("energy_advanced_on"),!!n.advanced,x=>c({advanced:x}))}
      ${n.advanced?D(t,t.t("energy_show_unmetered"),!!n.show_unmetered,x=>c({show_unmetered:x})):g}
    </div>
    ${n.advanced?R(t.t("energy_show_unmetered_hint")):g}
  </section>`}var vp=t=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${t.t("feature_name_energy")}</b></div>
  ${R(t.t("feature_text_energy"))}
</section>`;function kp(t){let e=(n,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${n}" target="_blank" rel="noopener">${r} ${t.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${t.t("help_title")}</h3>
    ${R(t.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}function f0(t,e){let n=t.t,r=t.doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id),o=r?_p(t,r):"";switch(e.kind){case"solar":{let i=t.doc.settings.roof.solar??[],s=i.findIndex(a=>a.id===e.id);return n("route_conn_solar",{name:i[s]?.name||`${n("solar_field")} ${s+1}`})}case"battery":return e.id?n("route_conn_device",{name:o}):n("route_conn_battery");case"inverter":return e.id?n("route_conn_device",{name:o}):n("route_conn_inverter");case"grid":return n("route_conn_grid");case"meter":return n("route_conn_meter",{name:o})}}function xp(t,e){let n=mp(t.doc);if(!n.length)return g;let r=t.t,o=e.draft;return m`<section>
    <h3>〰 ${r("energy_routes")}</h3>
    ${R(r("energy_routes_hint"))}
    <div class="nf-room-list">
      ${n.map(i=>{let s=Xa(t.doc,i.key),a=o?.key===i.key;return m`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${f0(t,i)} · ${s?r("route_points",{n:s.points.length}):r("route_none")}</span></span>
          ${a?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:o.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!o.points.length} @click=${()=>e.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>e.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>e.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions">
                <button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.start(i.key)}>✎ ${r(s?"route_redraw":"route_draw")}</button>
                ${s?m`<button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.clear(i.key)}>⨉</button>`:g}
              </div>
              ${s?D(t,r("route_cable"),!!s.cable,l=>e.setCable(i.key,l),{title:r("route_cable_hint")}):g}`}
        </div>`})}
    </div>
  </section>`}function $p(t,e,n){let r=t.t,o=t.doc.energy.pipes??[],i=n.draft,s=H(t.hass,l=>/^(switch|climate|valve|binary_sensor|sensor|input_boolean|number)\./.test(l)),a=Pu.map(l=>[l,r(`pipe_kind_${l}`)]);return m`<section>
    <h3>🔥 ${r("pipes_title")}</h3>
    ${R(r("pipes_hint"))}
    ${R(r("pipes_branch_hint"))}
    <div class="nf-room-list">
      ${o.map(l=>{let c=Yo(l.id),u=Xa(t.doc,c),d=i?.key===c;return m`<div class="nf-form nf-route-row">
          ${U(t,r("pipe_name"),l.name,h=>e.update(l.id,{name:h}),{maxlength:60})}
          ${O(t,r("pipe_kind"),l.kind,a,h=>e.update(l.id,{kind:h}))}
          ${I(t,r("pipe_entity"),l.entity??null,void 0,s,h=>e.update(l.id,{entity:h&&h!=="none"?h:null}))}
          ${d?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:i.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!i.points.length} @click=${()=>n.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>n.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>n.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions nf-wide">
                <span class="nf-sub">${u?r("route_points",{n:u.points.length}):r("route_none")}</span>
                <button class="nf-btn" ?disabled=${!t.admin||!!i} @click=${()=>n.start(c)}>✎ ${r(u?"route_redraw":"route_draw")}</button>
                <button class="nf-btn nf-danger" ?disabled=${!t.admin||!!i} @click=${()=>e.remove(l.id)}>${r("delete")}</button>
              </div>`}
        </div>`})}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||o.length>=Iu||!!i} @click=${()=>e.add()}>+ ${r("pipe_add")}</button></div>
  </section>`}var ct=(t,e)=>e.map(n=>t.toScreen(n).join(",")).join(" ");function Ni(t,e,n,r,o,i){let[[s,a],[l,c]]=[t.toScreen(e),t.toScreen(n)];if(Math.hypot(l-s,c-a)<=36)return g;let[u,d]=[(s+l)/2,(a+c)/2];return F`<g data-plus=${`${r}:${o}:${i}`} class="nf-mid"><circle cx=${u} cy=${d} r="14" class="nf-hit" /><circle cx=${u} cy=${d} r="6" /><path d="M${u-3} ${d}h6M${u} ${d-3}v6" /></g>`}var Sp=(t,e)=>F`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r="6" />`,m0=(t,e,n)=>F`<g class="nf-vertex" data-roof-vertex=${n}>${Sp(...t.toScreen(e))}</g>`,g0=(t,e,n)=>F`<g class="nf-vertex" data-roof-corner=${n}>${Sp(...t.toScreen(e))}</g>`;function _0(t,e,n,r){let{t:o,hass:i}=t.host,s=n.dormer?o("roof_dormer"):n.open?o("roof_open_short"):o(`roof_shape_${n.shape}`);return`${e.isFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${q(i,sn(n),1)} m`}function Ja(t,e){let n=t.host.doc.settings.roof,r=n.type==="custom"?n.sections??[]:[],o=t.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=Se(s),u=(s.shape==="flat"||s.shape==="parapet")&&s.points&&s.points.length>=3?s.points:null,d=Hn(r,s),h=d?Se(Nr(d,s)):c,p=u??[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,h.w),h.at(h.u0,h.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:St(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([C,W])=>{let[V,Y]=t.toScreen(c.at(C[0],C[1])),[Q,B]=t.toScreen(c.at(W[0],W[1]));return F`<line x1=${V} y1=${Y} x2=${Q} y2=${B} />`}),[b,w]=t.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),v=l&&o&&!e.isFixed(s),y=[[0,0],[1,0],[1,1],[0,1]],x=s.shape==="flat"||s.shape==="parapet",[k,S,$,E]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],z=u??(s.rotation?Lr(s):[[k,$],[S,$],[S,E],[k,E]]),P=v&&x?z.map((C,W)=>Ni(t,C,z[(W+1)%z.length],"roof",s.id,W)):g,T=v?F`${P}${u?u.map((C,W)=>m0(t,C,`${s.id}:${W}`)):y.map(([C,W])=>g0(t,[C?S:k,W?E:$],`${s.id}:${C}:${W}`))}`:g;return F`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${ct(t,p)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${b} y=${w-14}>${_0(t,e,s,a)}</text>
      </g>${T}`};return F`<g class="nf-roof-layer">${r.map(i)}</g>`}function b0(t,e,n,r,o){let i=r*Math.PI/180,[s,a]=t.toScreen(n),[l,c]=t.toScreen([n[0]+Math.sin(i)*o,n[1]-Math.cos(i)*o]);return F`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Mp(t,e){let{doc:n,admin:r}=t.host,o=n.settings.roof.solar??[];if(o.length===0)return g;let i=X(n),s=a=>{let l=Fe(n,a,i);if(!l||l.wall&&l.wall.floorId!==t.floorId)return g;let c=a.id===e.solarId,u=g;if(c&&l.unbounded&&r&&!a.locked){let p=Zr(l,a),f=Math.max(...Qe(l,a,!0).flatMap(_=>_.corners.map(b=>Math.hypot(b[0]-p[0],b[2]-p[1]))));u=b0(t,a.id,p,a.rotation??0,.9+f*.5)}let d=p=>{let f;if(l.wall){let _=Math.max(.3,...p.corners.map(y=>(y[0]-l.o[0])*l.n[0]+(y[2]-l.o[2])*l.n[2])),[b,w]=[p.corners[0],p.corners[1]],v=y=>[y[0]+l.n[0]*_,y[2]+l.n[2]*_];f=[[b[0],b[2]],v(b),v(w),[w[0],w[2]]]}else f=p.corners.map(_=>[_[0],_[2]]);return F`<polygon data-cell=${p.cell} class=${p.skipped?"nf-solar-off":""} points=${ct(t,f)} />`},h=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return F`<g data-solar=${a.id} class=${h}>${Qe(l,a,c).map(d)}</g>${u}`};return F`<g class="nf-solar-layer">${o.map(s)}</g>`}function Rp(t,e){let n=t.host.doc.settings.roof.windows??[];if(n.length===0)return g;let r=new Map(X(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?Ma(s,i):null;return a?F`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${ct(t,a.map(l=>[l[0],l[2]]))} /></g>`:g};return F`<g class="nf-roofwin-layer">${n.map(o)}</g>`}var y0={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function Ep(t,e,n){if(!e)return g;let r=e.furniture.filter(i=>Ue.includes(i.type)),o=i=>{let[s,a]=t.toScreen([i.x,i.z]),l=i.id===n,c=t.host.t(`furn_${i.type}`);return F`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${y0[i.type]??"\u26A1"}</text>
      ${l?F`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return F`<g class="nf-energy-markers">${r.map(o)}</g>`}function Ap(t,e){let{doc:n,hass:r}=t.host;if(!(n.settings.roof.sections??[]).some(s=>wa(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>va({settings:n.settings},e.elevation,s).map(([a,l])=>{let[c,u]=t.toScreen(a),[d,h]=t.toScreen(l);return F`<line class="nf-headroom" x1=${c} y1=${u} x2=${d} y2=${h} />
        <text class="nf-headroom-label" x=${(c+d)/2} y=${(u+h)/2-4}>${q(r,s,1)} m</text>`}));return F`${i}`}function Fp(t,e,n,r){if(!e)return g;let o=(i,s)=>{let a=[];return i.forEach((l,c)=>{if(l.floor_id!==e.id)return;let[u,d]=t.toScreen([l.x,l.z]),h=i[c+1];if(h?.floor_id===e.id){let[f,_]=t.toScreen([h.x,h.z]);a.push(F`<line x1=${u} y1=${d} x2=${f} y2=${_} />`)}let p=h&&h.floor_id!==e.id||c>0&&i[c-1].floor_id!==e.id;a.push(F`<circle cx=${u} cy=${d} r=${p?7:4} class=${p?"nf-route-riser":""} />`),s&&a.push(F`<text x=${u+8} y=${d-8}>${c+1}</text>`)}),F`<g class=${`nf-route${s?" nf-route-drawing":""}`}>${a}</g>`};return F`<g class="nf-routes">${n.filter(i=>i.key!==r?.key).map(i=>o(i.points,!1))}${r?o(r.points,!0):g}</g>`}function zp(t,e){let n=t.host.doc.settings.roof.chimneys??[];if(n.length===0)return g;let r=new Map(X(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face);if(!s)return g;let{shape:a,w:l,d:c}=pn(i),{center:u,along:d,across:h}=Ra(s,i),p=a==="round"||a==="steel"?Array.from({length:16},(f,_)=>[u[0]+Math.cos(_/16*2*Math.PI)*Math.min(l,c)/2,u[1]+Math.sin(_/16*2*Math.PI)*Math.min(l,c)/2]):[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,_])=>[u[0]+d[0]*l*f/2+h[0]*c*_/2,u[1]+d[1]*l*f/2+h[1]*c*_/2]);return F`<g data-chimney=${i.id} class=${`nf-chimney${i.id===e.chimneyId?" nf-roofwin-sel":""}`}><polygon points=${ct(t,p)} /></g>`};return F`<g class="nf-roofwin-layer">${n.map(o)}</g>`}function w0(t,e,n){let[r,o]=[t+n/2,e-30];return F`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function v0(t,e){let n=e.level?.length?e.level:e.ruler;if(!n?.length)return g;let r=n.map(o=>t.toScreen(o));return F`<g class="nf-bg-ruler">
    ${r.length===2?F`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>F`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function Tp(t,e,n){let r=n?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=t.toScreen([r.x,r.z]),a=r.width*t.scale,l=a*o.aspect,c=e.handlesShown;return F`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?F`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${w0(i,s,a)}`:g}
  </g>${v0(t,e)}`}var k0="strict-origin-when-cross-origin",Qa=new Map,Pp=new Map,Wi=new Map;function x0(t){let e=Qa.get(t);return e||(e=fetch(t,{referrerPolicy:k0,mode:"cors",credentials:"omit"}).then(async n=>n.ok&&(n.headers.get("content-type")??"").startsWith("image/")?await n.blob():null).catch(()=>null).then(n=>(n||setTimeout(()=>Qa.delete(t),6e4),n)),Qa.set(t,e)),e}function Ip(t,e){let n=Pp.get(t);if(n)return n;let r=Wi.get(t);return r||(r=new Set,Wi.set(t,r),x0(t).then(o=>{o&&Pp.set(t,URL.createObjectURL(o));let i=Wi.get(t)??new Set;if(Wi.delete(t),o)for(let s of i)s()})),r.add(e),null}function Dp(t,e){let n=e.map;if(!Ii(n))return g;let r=op(n),o=rp(n),[i,s]=t.toScreen([r.x,r.z]),a=t.scale;return F`<g class="nf-map" opacity=${r.opacity} pointer-events="none" transform="translate(${i} ${s}) rotate(${e.north??0})">
    ${tp(n.lat,n.lon,r.zoom).map(l=>({tile:l,href:Ip(np(o,l),t.redraw)})).filter(l=>l.href).map(({tile:l,href:c})=>F`<image href=${c} x=${l.east*a} y=${-l.north*a} width=${l.size*a+.6} height=${l.size*a+.6} preserveAspectRatio="none" />`)}
  </g>`}var el=t=>Math.round(t*1e3)/1e3,tl=(t,e)=>t.width*e,er=(t,e)=>[t.x+t.width/2,t.z+tl(t,e)/2];function Op(t,e,n){let[r,o]=[t[0]-e[0],t[1]-e[1]];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}var Lp=t=>((t+180)%360+360)%360-180;function Hp(t,e,n){return{x:el(t[0]-e/2),z:el(t[1]-n/2)}}function Cp(t,e,n,r){if(Math.hypot(r[0]-n[0],r[1]-n[1])<.05)return null;let o=Math.atan2(r[1]-n[1],r[0]-n[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Op(er(t,e),n,i),a=Math.round(Lp((t.rotation??0)+i*180/Math.PI)*100)/100;return{...t,rotation:a,...Hp(s,t.width,tl(t,e))}}function Np(t,e,n,r,o){let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=er(t,e),c=[n[0]+s*(a-n[0]),n[1]+s*(l-n[1])],u=t.width*s;return{...t,width:el(u),...Hp(c,u,tl(t,e)*s)}}function Wp(t,e,n){let r=Op(n,er(t,e),-(t.rotation??0)*Math.PI/180);return[r[0]-t.x,r[1]-t.z]}function Bp(t,e,n,r){let o=t+(n-e)*180/Math.PI;return Lp(r?Math.round(o/15)*15:Math.round(o*10)/10)}var $0=2048;async function tr(t){let e=await createImageBitmap(t),n=Math.min(1,$0/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*n),r.height=Math.round(e.height*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var Bi=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:n,api:r}=this.deps;if(n.hass){this.loading.add(e);try{let o=await r.fetchImage(n.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let n=new Image;return n.src=e,await n.decode(),n.naturalHeight/n.naturalWidth}async upload(e){let{host:n,api:r}=this.deps;if(!e||!n.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=L("img");await r.storeImage(n.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=n.floor?.rooms??[],l=a.length>0?pe(a.flatMap(u=>u.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((n,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let n=[...this.levelPoints??[],e];if(n.length<2){this.level=n;return}this.level=null,this.straighten(n[0],n[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,n){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Cp(r,o.aspect,e,n):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,n=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!n||!r||r.length<2)return;let o=Np(e,n.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var Vp=.1,nl=(t,e,n)=>m`<button class="nf-btn nf-wide ${t?"nf-primary":""}" aria-pressed=${t} @click=${n}>${e}</button>`;function S0(t,e){let n=e.ruler;if(!n)return g;if(n.length<2)return R(t.t(n.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),o=()=>e.applyRuler();return m`${R(t.t("bg_ruler_length_hint",{m:q(t.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${t.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=Wa(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${t.t("bg_ruler_apply")}</button>`}function M0(t,e){if(!t.admin)return g;let n=t.t,r=e.level;return m`${nl(e.edit,n(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${R(n(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${nl(!!r,`\u{1F4D0} ${n(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?R(n(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${nl(!!e.ruler,`\u{1F4CF} ${n(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${S0(t,e)}`}function Kp(t,e,n){let r=n.background,o=t.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
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
          ${A(t,o("background_width"),r.width,s=>i({width:Math.max(Vp,s)}),.01,Vp)}
          ${A(t,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${M0(t,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ae(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var jp=1e-4;function Zp(t){return t.reduce((e,n,r)=>e+be(n,t[(r+1)%t.length]),0)/2}var qp=t=>Zp(t)>=0?[...t]:[...t].reverse();var R0=(t,e,n=jp)=>ye(G(t,e))<n,E0=t=>t.map((e,n)=>[e,t[(n+1)%t.length]]);function A0(t,e,n){let r=G(n,e),o=j(r,r),i=o?Math.max(0,Math.min(1,j(G(t,e),r)/o)):0;return ye(G(t,[e[0]+r[0]*i,e[1]+r[1]*i]))}function F0(t,e,n=.03){return t.every(r=>N(r,e)||E0(e).some(([o,i])=>A0(r,o,i)<=n))}function Gp(t){let e=qp(t);return e.every((n,r)=>be(G(n,e[(r-1+e.length)%e.length]),G(e[(r+1)%e.length],n))>=-jp)}function Up(t,e){let n=[...t],r=qp(e);for(let o=0;o<r.length&&n.length;o++){let i=r[o],s=r[(o+1)%r.length],a=c=>be(G(s,i),G(c,i)),l=n;n=[],l.forEach((c,u)=>{let d=l[(u+1)%l.length],[h,p]=[a(c),a(d)];if(h>=0&&n.push(c),h>=0!=p>=0){let f=h/(h-p);n.push([c[0]+(d[0]-c[0])*f,c[1]+(d[1]-c[1])*f])}})}return n.filter((o,i)=>!R0(o,n[(i+1)%n.length]))}function Yp(t,e){if(F0(t,e))return[...t];let n=Gp(t)?Up(e,t):Gp(e)?Up(t,e):null;return n&&n.length>=3&&Math.abs(Zp(n))>=.01?n:null}var rl=["straight","quarter","l","half","u","spiral","three_quarter"],ol=["solid","stringer","mono","cantilever"],il=["none","left","right","both"],sl=["headroom","full","none"],_t={shape:"straight",turn:"right",build:"solid",risers:!0,steps:null,run_width:null,down:!1,rail:"none",opening:"headroom",landing_after:null},al={straight:[1,3.2],quarter:[2.2,2.6],l:[2.2,2.8],half:[2,2.6],u:[2.2,2.6],spiral:[1.6,1.6],three_quarter:[2.6,2.6]},ef=2,tf=40;var Vi=(t,e)=>typeof e=="string"&&t.includes(e);function yo(t){let e=t.stair??{},n=typeof e.steps=="number"&&Number.isFinite(e.steps)?Math.round(Math.min(tf,Math.max(ef,e.steps))):null,r=typeof e.run_width=="number"&&Number.isFinite(e.run_width)&&e.run_width>.2?e.run_width:null;return{shape:Vi(rl,e.shape)?e.shape:_t.shape,turn:e.turn==="left"?"left":"right",build:Vi(ol,e.build)?e.build:_t.build,risers:e.risers!==!1,steps:n,run_width:r,down:e.down===!0,rail:Vi(il,e.rail)?e.rail:_t.rail,opening:Vi(sl,e.opening)?e.opening:_t.opening,landing_after:typeof e.landing_after=="number"&&Number.isFinite(e.landing_after)?Math.max(1,Math.round(e.landing_after)):null}}var _o=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Xp=(t,e)=>Math.abs(t[0]-e[0])<1e-6&&Math.abs(t[1]-e[1])<1e-6;function nf(t){let e=[];for(let n of t)(!e.length||!Xp(e[e.length-1],n))&&e.push(n);for(;e.length>1&&Xp(e[0],e[e.length-1]);)e.pop();return e}function bo(t,e,n=!1){return{poly:nf([...t,...[...e].reverse()]),landing:n,left:t,right:e}}function Gt(t,e,n,r,o){let i=[];for(let s=0;s<o;s++){let[a,l]=[s/o,(s+1)/o];i.push(bo([_o(t,n,a),_o(t,n,l)],[_o(e,r,a),_o(e,r,l)]))}return i}function Jp(t,e){let n=e;for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return _o(t[r],t[r+1],o?Math.min(1,n/o):0);n-=o}return t[t.length-1]}function z0(t,e,n){let r=[Jp(t,e)],o=0;for(let i=0;i+1<t.length;i++)o+=Math.hypot(t[i+1][0]-t[i][0],t[i+1][1]-t[i][1]),o>e+1e-6&&o<n-1e-6&&r.push(t[i+1]);return r.push(Jp(t,n)),r}var T0=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Ki(t,e,n,r,o){let i=T0(t),s=[];for(let a=0;a<o;a++){let l=nf([...a===0?[e]:[],n,...a===o-1?[r]:[]]);s.push(bo(z0(t,i*a/o,i*(a+1)/o),l.length?l:[n]))}return s}function Gi(t,e,n){if(t<=0)return[0,0];if(e<=.001)return[0,t];if(n<=.001)return[t,0];let r=Math.min(t,Math.max(0,Math.round(t*e/(e+n))));return[r,t-r]}function P0(t,e,n,r){if(t<=0)return[0,0,0];let o=Math.max(1e-6,e+n+r),i=Math.min(t,Math.max(0,Math.round(t*e/o))),s=Math.min(t-i,Math.max(0,Math.round(t*n/o)));return[i,s,t-i-s]}function Qp(t,e){if(t.landing_after==null)return null;let n=Math.min(e-1,Math.max(1,Math.round(t.landing_after)))-1;return[n,e-1-n]}function I0(t,e,n,r){let[o,i,s,a]=[-e/2,e/2,-n/2,n/2];switch(t.shape){case"quarter":case"l":{let l=Math.min(t.run_width??Math.min(1,Math.min(e,n)/2),Math.min(e,n)-.05),c=[o+l,s+l],u=[[o,s+l],[o,s],[o+l,s]],d=t.shape==="l"?1:Math.min(r,r>=8?3:2),[h,p]=t.shape==="l"?Qp(t,r)??Gi(r-d,n-l,e-l):Gi(r-d,n-l,e-l),f=Gt([o,a],[o+l,a],[o,s+l],c,h),_=t.shape==="l"?[bo(u,[c],!0)]:Ki(u,c,c,c,d),b=Gt([o+l,s],c,[i,s],[i,s+l],p);return{treads:[...f,..._,...b],flight:l,column:0}}case"half":case"u":{let l=Math.min(t.run_width??Math.min(1.1,(e-.1)/2),(e-.02)/2),c=s+l,u=[[o,c],[o,s],[i,s],[i,c]],[d,h]=[[o+l,c],[i-l,c]],p=t.shape==="u"?1:Math.min(r,r>=12?6:r>=8?4:2),[f,_]=t.shape==="u"?Qp(t,r)??Gi(r-p,n-l,n-l):Gi(r-p,n-l,n-l),b=Gt([o,a],[o+l,a],[o,c],d,f),w=t.shape==="u"?[bo(u,[d,h],!0)]:Ki(u,d,[0,c],h,p),v=Gt([i,c],h,[i,a],[i-l,a],_);return{treads:[...b,...w,...v],flight:l,column:0}}case"three_quarter":{let l=Math.min(t.run_width??Math.min(1,Math.min(e,n)/3),(Math.min(e,n)-.05)/2),[c,u]=[[o+l,s+l],[i-l,s+l]],d=Math.min(Math.floor(r/3),r>=12?3:2),[h,p,f]=P0(r-2*d,n-l,e-2*l,n-l),_=Gt([o,a],[o+l,a],[o,s+l],c,h),b=Ki([[o,s+l],[o,s],[o+l,s]],c,c,c,d),w=Gt([o+l,s],c,[i-l,s],u,p),v=Ki([[i-l,s],[i,s],[i,s+l]],u,u,u,d),y=Gt([i,s+l],u,[i,a],[i-l,a],f);return{treads:[..._,...b,...w,...v,...y],flight:l,column:0}}case"spiral":{let l=Math.min(e,n)/2,c=Math.min(.08,l*.12),u=Math.min(.75,Math.max(.3,.22/(l*.6))),d=(p,f)=>[Math.cos(f)*p,Math.sin(f)*p],h=[];for(let p=0;p<r;p++){let[f,_]=[Math.PI+u*p,Math.PI+u*(p+1)],b=[0,.5,1].map(w=>d(l,f+(_-f)*w));h.push(bo(b,[d(c,f),d(c,_)]))}return{treads:h,flight:l-c,column:c}}default:return{treads:Gt([o,a],[i,a],[o,s],[i,s],r),flight:e,column:0}}}var D0=(t,e)=>t.steps??Math.min(tf,Math.max(ef,Math.round(Math.abs(e)/.18)));function wn(t,e,n,r){let o=D0(t,r),i=Math.abs(r)/o,s=I0(t,Math.max(.3,e),Math.max(.3,n),o),a=c=>[-c[0],c[1]];return{treads:s.treads.map((c,u)=>{let d=t.down?-i*(u+1):i*(u+1);return t.turn==="right"?{...c,top:d}:{poly:c.poly.map(a).reverse(),top:d,landing:c.landing,left:c.right.map(a),right:c.left.map(a)}}),rise:i,steps:o,column:s.column,flight:s.flight}}function Ui(t){let e=t.poly.reduce((n,r)=>[n[0]+r[0],n[1]+r[1]],[0,0]);return[e[0]/t.poly.length,e[1]/t.poly.length]}var te=t=>Math.round(t*1e3)/1e3,O0=(t,e)=>((t+e)%360+360)%360;function rf(t,e){return{id:L("wall"),a:[te(t[0]),te(t[1])],b:[te(e[0]),te(e[1])],thickness:null}}function ji(t,e,n,r){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(r==="center"||o<1e-9)return[t,e];let i=(r==="left"?1:-1)*n/2/o,s=[(e[1]-t[1])*i,-(e[0]-t[0])*i];return[[t[0]+s[0],t[1]+s[1]],[e[0]+s[0],e[1]+s[1]]]}function wo(t,e){return t.axis?ji(t.a,t.b,t.thickness??e,t.axis==="left"?"right":"left"):[t.a,t.b]}var Zi=(t,e,n,r)=>ji(t,e,n.thickness??r,n.axis??"center");function of(t,e){let n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1])||1,r=Math.max(.1,e)/n;return[te(t.a[0]+(t.b[0]-t.a[0])*r),te(t.a[1]+(t.b[1]-t.a[1])*r)]}var sf=(t,e)=>({height:t>=e-.005?null:Math.max(.05,t)});function af(t,e){return{id:L("hole"),type:"stairwell",x:te((t[0]+e[0])/2),z:te((t[1]+e[1])/2),w:te(e[0]-t[0]),d:te(e[1]-t[1]),h:.02,rotation:0,variant:null}}var lf=t=>({id:L("outdoor"),type:"lawn",points:t.map(([e,n])=>[te(e),te(n)])});function cf(t,e,n){t.points.splice(e+1,0,[te(n[0]),te(n[1])])}function uf(t,e){return t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),!0)}var df=t=>({...t,id:L("outdoor"),points:t.points.map(([e,n])=>[te(e+.5),te(n+.5)])});function ll(t,e,n,r){let[o,i,s]=ht(t),a=e.floors.filter(u=>u.elevation>n.elevation).sort((u,d)=>u.elevation-d.elevation)[0],l=t==="stairs"?te(a?a.elevation-n.elevation:n.height+.25):s,c={id:L("furniture"),type:t,x:te(r[0]),z:te(r[1]),rotation:0,w:o,d:i,h:l,variant:null};return t==="stairs"&&(c.stair={..._t}),c}var cl=t=>({...structuredClone(t),id:L("furniture"),x:te(t.x+.3),z:te(t.z+.3)}),ul=(t,e)=>O0(t,e);function hf(t){let[e,n,r]=ht("parking");return{id:L("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,te(t.w+.5)),d:Math.max(n,te(t.d+.4)),h:r,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}}}function pf(t,e){let[n,r,o]=ht(e);return{id:L("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,variant:null,entity:t.entity_id,name:t.name??null,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.locked?{locked:!0}:{}}}var ff=(t,e)=>({entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.name?{name:t.name}:{}});function mf(t,e){for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(he(r.type)&&r.entity===e))}function dl(t,e,n,r){let o=new Set(r);for(let s of t.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(he(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>he(s.type)).map(s=>[s.x,s.z])];for(let s of bd(n,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=it.lamp_ceiling;e.furniture.push({id:L("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function gf(t){let[e,n]=xe(t.points);return[te(e),te(n)]}function _f(t,e,n,r){let o=Math.min(n,t)/2,i=r>0?Math.round(e/r)*r:e;return te(Math.min(t-o,Math.max(o,i)))}function bf(t,e){let n=An[e],r=Fn(t)===e?{}:{width:n.width};return{type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:n.style??null,opens:n.opens??null,...r}}function yf(t,e,n){let r=pe(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:e==="w"?s=o+Math.max(.1,n):a=i+Math.max(.1,n),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[te(l),te(c)])}function wf(t){return t.furniture.map((e,n)=>({item:e,index:n,base:Ct(t,e)})).sort((e,n)=>e.base-n.base||e.index-n.index).map(e=>e.item)}function vf(t,e,n,r){let o=null;for(let i of t){let[s,a]=[n(i.a),n(i.b)],l=(a[0]-s[0])**2+(a[1]-s[1])**2,c=l<1e-9?0:Math.min(1,Math.max(0,((e[0]-s[0])*(a[0]-s[0])+(e[1]-s[1])*(a[1]-s[1]))/l)),u=Math.hypot(e[0]-(s[0]+(a[0]-s[0])*c),e[1]-(s[1]+(a[1]-s[1])*c));u<=r&&(!o||u<o.d)&&(o={id:i.id,d:u})}return o?.id??null}function qi(t,e,n){if(!t.admin)return g;let r=n.edit?.key===e;return m`<button class="nf-btn" aria-pressed=${r} title=${t.t("arc_hint")} @click=${()=>n.setEdit(r?null:{key:e,bulge:.5,error:null})}>
    ◠ ${t.t("arc")}
  </button>`}function Yi(t,e,n){let r=n.edit;if(!t.admin||r?.key!==e)return g;let o=t.t;return m`<span class="nf-wide nf-split-row" title=${o("arc_bulge_hint")}
      >${A(t,o("arc_bulge"),r.bulge,i=>n.setEdit({...r,bulge:i,error:null}),.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(r.bulge)<.01} @click=${()=>n.apply(r)}>${o("arc_apply")}</button></span
    >
    ${r.error?m`<p class="nf-sub nf-wide nf-notice">${r.error}</p>`:g}`}var Xi=(t,e,n)=>Math.min(e,Math.max(t,ae(n)));function hl(t,e,n){let r=t.t,o=l=>n.update(l),i=pe(e.points),s=Eu.map(l=>[l,r(`out_${l}`)]),a=Au.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${O(t,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${O(t,r("area"),e.area_id??"",[["",r("no_area")],...Object.values(t.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name)).map(l=>[l.area_id,l.name])],l=>o({area_id:l||null}),{wide:!0,title:r("outdoor_area_hint")})}
      ${e.type==="pool"||e.type==="wild"||e.type==="bed"?m`${I(t,r("pool_temp"),e.temp_entity??null,void 0,H(t.hass,l=>l.startsWith("sensor.")&&t.hass?.states[l]?.attributes.device_class==="temperature"),l=>o({temp_entity:l&&l!=="none"?l:null}))}
          ${I(t,r("pool_pump"),e.pump_entity??null,void 0,H(t.hass,l=>/^(switch|fan|valve|input_boolean|binary_sensor)\./.test(l)),l=>o({pump_entity:l&&l!=="none"?l:null}))}`:g}
      ${rn(e.points)&&t.admin?R(r("outdoor_free_corner_hint")):g}
      ${rn(e.points)?m`${A(t,r("x"),i.x0,l=>n.setRectangle("x",l))} ${A(t,r("z"),i.z0,l=>n.setRectangle("z",l))}
          ${A(t,r("width"),i.x1-i.x0,l=>n.setRectangle("w",l),.01,.1)} ${A(t,r("depth"),i.z1-i.z0,l=>n.setRectangle("d",l),.01,.1)}`:g}
      ${Ks(e.type)?A(t,r("outdoor_height"),e.height??Vs[e.type],l=>o({height:Xi(.1,6,l)}),.05,.1):g}
      ${A(t,r("outdoor_offset"),e.offset??0,l=>o({offset:Xi(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${A(t,r("outdoor_slope"),e.slope??0,l=>o({slope:Xi(0,20,l)||null}),.05,0)}
          ${O(t,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${A(t,r("outdoor_opacity"),Math.round((e.opacity??1)*100),l=>o({opacity:l>=100||!(l>0)?null:Math.max(10,Math.min(95,l))/100}),5,10)}
      ${D(t,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?D(t,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?D(t,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${D(t,r("outdoor_cut"),Tu(e),l=>o({cut:l===(e.type==="pool")?void 0:l}),{title:r("outdoor_cut_hint")})}
    </div>
    ${e.type==="fence"?L0(t,e,o):g}
    ${t.admin?m`<div class="nf-actions">
            ${e.points.map((l,c)=>m`<button class="nf-chip" title=${r("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(c)}>${c+1} ×</button>`)}
          </div>
          ${R(r("outdoor_corners_hint"))}`:g}
    ${e.slope?R(r("outdoor_slope_hint")):g} ${R(r("outdoor_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function L0(t,e,n){let r=t.t,o=e.gates??[],i=p=>n({gates:p.length?p:void 0}),s=e.points.map((p,f)=>[String(f),`${f+1} \u2192 ${(f+1)%e.points.length+1}`]),a=p=>{let[f,_]=[e.points[p],e.points[(p+1)%e.points.length]];return f&&_?Math.hypot(_[0]-f[0],_[1]-f[1]):0},l=(p,f)=>i(o.map((_,b)=>b===p?{..._,...f}:_)),c=H(t.hass,p=>/^(cover|switch|input_boolean|lock)\./.test(p)),u=H(t.hass,p=>p.startsWith("binary_sensor.")),d=[["single",r("gate_single")],["double",r("gate_double")],["sliding",r("gate_sliding")]],h=()=>{let f=a(0);i([...o,{id:L("gate"),edge:0,offset:ae(f/2),width:Math.min(1.2,Math.max(.5,ae(f*.4))),kind:"single"}])};return m`<h4 class="nf-lib-head">${r("fence_gates")}</h4>
    ${o.map((p,f)=>m`<div class="nf-form">
        ${O(t,r("gate_edge"),String(p.edge),s,_=>l(f,{edge:Number(_)}))}
        ${O(t,r("gate_kind"),p.kind,d,_=>l(f,{kind:_,width:_==="single"&&p.width>1.6?1:p.width}))}
        ${A(t,r("gate_offset"),p.offset,_=>l(f,{offset:Math.max(0,Math.min(a(p.edge),ae(_)))}),.05,0)}
        ${A(t,r("gate_width"),p.width,_=>l(f,{width:Math.max(.3,Math.min(12,ae(_)))}),.05,.3)}
        ${I(t,r("gate_entity"),p.entity??null,void 0,c,_=>l(f,{entity:_&&_!=="none"?_:null}))}
        ${I(t,r("gate_contact"),p.contact??null,void 0,u,_=>l(f,{contact:_&&_!=="none"?_:null}))}
        ${t.admin?m`<button class="nf-btn nf-danger nf-wide" @click=${()=>i(o.filter((_,b)=>b!==f))}>${r("delete")}</button>`:g}
      </div>`)}
    ${t.admin&&o.length<20?m`<button class="nf-btn" @click=${h}>${r("gate_add")}</button>`:g}
    ${R(r("fence_gates_hint"))}`}var H0=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],C0={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function kf(t,e,n){let r=t.t,{draft:o}=e,i=d=>q(t.hass,d,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=d=>{let h=C0[d.key];h?(d.preventDefault(),n.step(h)):d.key==="Enter"&&n.close()},u=s?m`${R(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${d=>n.setLength(Number.parseFloat(d.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${H0.map(([d,h])=>m`<button class="nf-btn nf-arrow-${d}" title=${r(`dir_${d}`)} @click=${()=>n.step(d)}>${h}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((d,h)=>m`<li>${i(Math.hypot(d[0]-o[h][0],d[1]-o[h][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>n.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>n.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?R(r("measure_gap",{gap:i(l)})):g}`:R(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${u}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${A(t,r("width"),e.rectSize[0],d=>n.setRectSize([Math.max(.1,d),e.rectSize[1]]),.01,.1)}
      ${A(t,r("depth"),e.rectSize[1],d=>n.setRectSize([e.rectSize[0],Math.max(.1,d)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>n.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${R(r("measure_hint"))}
  </section>`}function pl(t,e,n){let r=t.t,o=t.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${A(t,r("wall_length"),i,s=>n.update({b:of(e,s)}),.01,.1)}
      ${A(t,r("wall_thickness"),e.thickness??t.doc.settings.wall_interior,s=>n.update({thickness:Xi(.02,1,s)}),.01,.02)}
      ${O(t,r("wall_side"),e.axis??"center",["center","left","right"].map(s=>[s,r(`wall_side_${s}`)]),s=>n.update({axis:s==="center"?null:s}),{title:r("wall_axis_hint")})}
      ${A(t,r("wall_height"),e.height??o,s=>n.update(sf(s,o)),.05,.05)}
      ${D(t,r("free_wall_slope"),e.height_end!=null,s=>n.update(s?{height:e.height??o,height_end:Math.max(.2,(e.height??o)/2)}:{height_end:null}),{title:r("free_wall_slope_hint")})}
      ${e.height_end!=null?A(t,r("free_wall_height_end"),e.height_end,s=>n.update({height_end:Math.max(.05,s)}),.05,.05):g}
      ${D(t,r("free_wall_hang"),e.bottom!=null,s=>n.update(s?{bottom:Math.round((e.height??o)*.6*20)/20,bottom_end:null}:{bottom:null,bottom_end:null}),{title:r("free_wall_hang_hint")})}
      ${e.bottom!=null?m`${A(t,r("free_wall_bottom"),e.bottom,s=>n.update({bottom:Math.max(0,s)}),.05,.05)}
          ${D(t,r("free_wall_bottom_slope"),e.bottom_end!=null,s=>n.update({bottom_end:s?Math.max(0,(e.bottom??0)-.5):null}))}
          ${e.bottom_end!=null?A(t,r("free_wall_bottom_end"),e.bottom_end,s=>n.update({bottom_end:Math.max(0,s)}),.05,.05):g}`:g}
    </div>
    ${t.admin?m`<div class="nf-actions">${qi(t,`wall:${e.id}`,n.arc)}<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join()}>${r("wall_join")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
    ${n.note?R(n.note):g}
    <div class="nf-form">${Yi(t,`wall:${e.id}`,n.arc)}</div>
    ${R(r("free_wall_hint"))}
  </section>`}var Ut=t=>Math.round(t*1e3)/1e3,N0=2.4;function xf(t,e,n){let r=ka(t,e[0],e[1],n[0],n[1]),o=r===null,i=Math.min(...t.floors.map(l=>l.elevation)),s=Ut(r??i+N0),a=o?6:t.settings.roof.pitch||35;return{id:L("roof"),x0:Ut(e[0]),z0:Ut(e[1]),x1:Ut(n[0]),z1:Ut(n[1]),shape:o?"pent":"gable",axis:n[0]-e[0]>=n[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function $f(t){let e=n=>Ut(n+1);return{...structuredClone(t),id:L("roof"),x0:e(t.x0),x1:e(t.x1),z0:e(t.z0),z1:e(t.z1)}}var Sf=(t,e)=>t.findIndex(n=>n.id===e)+1;function fl(t){return t.points&&t.points.length>=3?t.points.map(([e,n])=>[e,n]):t.rotation?Lr(t):[[t.x0,t.z0],[t.x1,t.z0],[t.x1,t.z1],[t.x0,t.z1]]}function Mf(t,e,n){let r=fl(t);r.splice(e+1,0,[Ut(n[0]),Ut(n[1])]),t.points=r,Object.assign(t,Vt(r))}function Rf(t,e){return!t.points||t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),Object.assign(t,Vt(t.points)),!0)}var Ji=t=>Math.round(t*1e3)/1e3;function Qi(t,e,n){let r=a=>a.thickness??e,o=new Map,i=a=>{let l=o.get(a.id);return l||o.set(a.id,l={a:[a.a[0],a.a[1]],b:[a.b[0],a.b[1]]}),l};for(let a of t){let l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(l<.05)continue;let c=[(a.b[0]-a.a[0])/l,(a.b[1]-a.a[1])/l];for(let u of["a","b"]){let d=a[u],h=u==="a"?[-c[0],-c[1]]:c,p=null;for(let f of t){if(f.id===a.id)continue;let _=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1]);if(_<.05)continue;let b=[(f.b[0]-f.a[0])/_,(f.b[1]-f.a[1])/_],w=h[0]*b[1]-h[1]*b[0];if(Math.abs(w)<.3)continue;let[v,y]=[f.a[0]-d[0],f.a[1]-d[1]],x=(v*b[1]-y*b[0])/w,k=(v*h[1]-y*h[0])/w;if(Math.abs(x)>r(f)/2/Math.abs(w)+.12)continue;let S=r(a)/2/Math.abs(w)+.12;if(k<-S||k>_+S)continue;let $=k<S||k>_-S,E=[d[0]+h[0]*x,d[1]+h[1]*x],z=$?0:r(f)/2/Math.abs(w),P=[Ji(E[0]-h[0]*z),Ji(E[1]-h[1]*z)],T=Math.hypot(P[0]-d[0],P[1]-d[1]);(!p||T<p.off-1e-6||Math.abs(T-p.off)<=1e-6&&$&&!p.corner)&&(p={to:P,off:T,corner:$,partner:f.id})}!p||p.off<.0015||n&&a.id!==n&&!(p.corner&&p.partner===n)||(i(a)[u]=p.to)}}let s=[];for(let a of t){let l=o.get(a.id);if(!l||Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])<.1)continue;let c=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]),u=((a.a[0]-l.a[0])*(a.b[0]-a.a[0])+(a.a[1]-l.a[1])*(a.b[1]-a.a[1]))/c;s.push({id:a.id,a:l.a,b:l.b,startMoved:Ji(u)})}return s}function es(t,e){for(let n of e){let r=(t.walls??[]).find(o=>o.id===n.id);if(r&&(r.a=n.a,r.b=n.b,n.startMoved))for(let o of t.openings)o.wall===n.id&&(o.offset=Math.max(0,Ji(o.offset+n.startMoved)))}return e.length}var W0={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},jt=t=>W0[t];function ts(t,e){let n=new Set;for(let r of t?.placements??[])N([r.x,r.z],e.points)&&n.add(r.entity_id);for(let r of t?.furniture??[])he(r.type)&&r.entity&&N([r.x,r.z],e.points)&&n.add(r.entity);return n}function Ef(t,e){let n=new Map;for(let r of t.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>he(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>N([s,a],c.points));l&&l.id!==e.id&&n.set(i,l.name)}}return n}var Af=(t,e)=>(t??[]).includes(e)?(t??[]).filter(n=>n!==e):[...t??[],e];function ns(t,...e){let n=t.trim().toLowerCase();return!n||e.some(r=>(r??"").toLowerCase().includes(n))}function Ff(t,e){return t.map(n=>({o:n,r:e(n.id)})).sort((n,r)=>n.r-r.r).map(({o:n})=>n)}function zf(t,e){let n=e,r=0;return{taken:t.map(i=>{let s=i.ids.slice(0,Math.max(0,n));return n-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var ml=50;function gl(t,e,n,r,o,i,s){let a=e.includes(n);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${t.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:Af(e,n)})}>${a?o[0]:o[1]}</button>`}function B0(t,e,n,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,d=o)=>{let h=n.has(c),p=h?void 0:r.get(c),f=t.floor?.placements.find(y=>y.entity_id===c),_=!h&&!p&&!!f,b=h||_,w=s.includes(c),v=jn(t,c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${w?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${b?"":"nf-muted"}" ?disabled=${!b} @click=${()=>i.select(c)}>
        ${v?m`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${v}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${jt((t.hass?je(t.hass,c):ee(c))??"sensor")} /></svg>`}
        <span>${K(t.hass,c,d)}${p?m`<small class="nf-muted"> · ${t.t("devices_placed_in",{room:p})}</small>`:g}${_?m`<small class="nf-muted"> · ${t.t("devices_placed_outside")}${f?.locked?" \u{1F512}":""}</small>`:g}</span>
      </button>
      ${t.admin?gl(t,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${t.admin&&!w?gl(t,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${t.admin&&!h?gl(t,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${t.admin?h?m`<button class="nf-link" @click=${()=>i.remove(c)}>${t.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>(!f?.locked||i.confirm(t.t("devices_place_fixed_confirm")))&&i.place([c])}>${t.t("devices_place")}</button>`:g}
    </div>`}}function V0(t,e,n,r,o){let{hass:i}=t;if(!i)return m``;let s=u=>u>0?R(t.t("devices_narrow",{n:u})):g,a=R(t.t("devices_none")),l=e.deviceQuery;if(o==="other"){let u=id(i,n.area_id).map(f=>({...f,ids:f.ids.filter(_=>ns(l,`${K(i,_,f.name)} ${_} ${f.name}`))})),{taken:d,left:h}=zf(u,ml),p=u.map((f,_)=>d[_].length>0?m`<div class="nf-dev-area">${f.name}</div>${d[_].map(b=>r(b,!1,f.name))}`:g);return d.some(f=>f.length>0)?m`<div class="nf-room-list">${p}</div>${s(h)}`:a}let c=sd(i).filter(u=>ns(l,`${K(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,ml).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,ml))}`:a}function K0(t,e,n,r,o,i,s){let{hass:a}=t,l=a?$e(a,n).filter(w=>Ot(je(a,w))):[];if(!n.area_id)return R(t.t("devices_none_area"));if(l.length===0)return R(t.t("devices_none"));let c=a?Tn(a,l):[],u=c.map(w=>w.primary).filter(w=>!o.has(w)),d=e.deviceQuery,h=(t.floor?.placements??[]).filter(w=>ee(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&N([w.x,w.z],n.points)).length,p=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${d} @input=${w=>e.deviceQuery=w.target.value} />`,f=w=>ns(d,K(a,w,i),w),_=w=>{let v=w.others.filter(f),y=e.isUnfolded(w.primary)||!!d.trim()&&v.length>0;return!f(w.primary)&&v.length===0?g:m`${r(w.primary)}
      ${w.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(w.primary)}>${y?t.t("devices_less"):t.t("devices_more",{n:w.others.length})}</button>`:g}
      ${y?(d.trim()?v:w.others).map(x=>r(x,!0)):g}`},b=()=>s.confirm(t.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${t.admin&&h>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(n)}>${t.t("lights_spread")}</button>`:g}
    ${l.length>8?p:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${t.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${b}>${t.t("devices_place_all_n",{n:u.length})}</button>`:g}
    ${R(t.t("devices_hint"))}`}function _l(t,e,n,r){let{hass:o}=t,i=n.area_id?o?.areas?.[n.area_id]?.name:void 0,s=ts(t.floor,n),a=B0(t,n,s,Ef(t.doc,n),i,r),l=t.admin?e.deviceSource:"area",c=o?Tn(o,$e(o,n).filter(h=>Ot(je(o,h)))).length:0,u=[["area",`${t.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",t.t("devices_src_other")],["none",t.t("devices_src_none")]],d=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${e.deviceQuery} @input=${h=>e.deviceQuery=h.target.value} />`;return m`<section>
    <h3>${t.t("devices")}</h3>
    ${R(t.t("devices_panel_hint"))}
    ${t.admin?m`<div class="nf-seg nf-dev-source">${u.map(([h,p])=>m`<button aria-pressed=${l===h} @click=${()=>e.deviceSource=h}>${p}</button>`)}</div>`:g}
    ${l!=="area"?m`${d}${V0(t,e,n,a,l)}`:K0(t,e,n,a,s,i,r)}
  </section>`}function Tf(t,e,n){let{hass:r}=t;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};n({climate:Object.values(c).every(u=>u==null)?null:c})},s=(a,l)=>{let c=ad(r,t.floor??null,{...e,climate:null},a),u=H(r,b=>me(b)&&r.states[b]?.attributes.device_class===oa[a]),d=Ff(u,b=>(Wt(r,b)===e.area_id?0:1)+(ia(r,b)?0:2)),h=[e.climate?.[a]??null].flat(),p=b=>{let w=b.filter(v=>!!v&&v!=="none");i(a,b[0]==="none"?"none":w.length>1?w:w[0]??null)},_=h[0]&&h[0]!=="none"?[...h,null]:h;return _.map((b,w)=>I(t,w?t.t("climate_more"):l,b,w?void 0:c[0]??null,d,v=>p(_.map((y,x)=>x===w?v:y))))};return m`<details class="nf-points" ?open=${o}>
    <summary>${t.t("climate")}</summary>
    <div class="nf-form">${s("temperature",t.t("climate_temperature"))} ${s("humidity",t.t("climate_humidity"))} ${s("co2",t.t("climate_co2"))}</div>
    ${R(t.t("climate_hint"))}
  </details>`}function G0(t,e,n){return t.furniture.filter(r=>N([r.x,r.z],e.points)).sort((r,o)=>n(r).localeCompare(n(o),void 0,{numeric:!0})||r.id.localeCompare(o.id))}function Pf(t,e){return e.name?.trim()||ze(t.hass,e.type)}var U0=t=>!!t.entity||!!t.state_entity;function bl(t,e,n,r){if(!e)return g;let o=G0(e,n,i=>Pf(t,i));return o.length===0?g:m`<h3>${t.t("room_objects")} <span class="nf-muted">(${o.length})</span></h3>
    <div class="nf-room-list">
      ${o.map(i=>m`<div class="nf-row nf-dev-row">
          <button class="nf-dev-name" title=${i.id} @click=${()=>r.select(i.id)}>
            <span>${Pf(t,i)}${i.name?.trim()?m`<small class="nf-muted"> · ${ze(t.hass,i.type)}</small>`:g}</span>
          </button>
          ${U0(i)?m`<span class="nf-muted" title=${t.t("room_objects_linked")} aria-label=${t.t("room_objects_linked")}>⚡</span>`:g}
          ${i.locked?m`<span class="nf-muted" aria-label=${t.t("room_objects_locked")} title=${t.t("room_objects_locked")}>🔒</span>`:g}
        </div>`)}
    </div>`}var yl="metric",Df=t=>{yl=t==="imperial"?"imperial":"metric"},If=.3048;function ge(t,e,n=2,r=yl){if(r==="metric")return`${q(t,e,n)} m`;let o=e<0?"\u2212":"",i=Math.round(Math.abs(e)/.0254*2),s=Math.floor(i/24),a=i-s*24,l=`${Math.floor(a/2)}${a%2?"\xBD":""}`;return s?`${o}${s}\u2032 ${l}\u2033`:`${o}${l}\u2033`}function De(t,e,n=yl){return n==="metric"?`${q(t,e,1)} m\xB2`:`${q(t,e/(If*If),0)} ft\xB2`}var j0=.15,Z0=(t,e)=>Math.abs((t-e+540)%360-180);function q0(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(j(G(i,n),r))<.02&&Math.abs(j(G(a,n),r))<.02}))}function vl(t,e,n,r){let o=e.points,[i,s]=[o[n],o[(n+1)%o.length]],a=ye(G(s,i)),l=_e(o)>=0?1:-1,c=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[-c[1]*l||0,c[0]*l||0],d=c[0]*u[1]-c[1]*u[0]>0,h=e.wall_heights?.[n],p=e.ceiling??t.height,f=typeof h=="number"?h:Array.isArray(h)?Math.max(...h.map(w=>w??p)):p,_=e.wall_slopes?.[n],b=typeof _=="number"&&typeof h=="number"?_:f;return{origin:d?i:s,along:d?c:[-c[0],-c[1]],normal:u,length:a,face:q0(t,e,i,u)?r/2:0,heightLeft:d?f:b,heightRight:d?b:f}}function wl(t,e){let n=G(e,t.origin);return{u:j(n,t.along),depth:j(n,t.normal)-t.face}}function Y0(t,e){let n=t.rooms.find(s=>s.id===e.room_id);if(!n||e.wall)return null;let[r,o]=[n.points[e.edge],n.points[(e.edge+1)%n.points.length]];if(!r||!o)return null;let i=ye(G(o,r))||1;return[r[0]+(o[0]-r[0])*e.offset/i,r[1]+(o[1]-r[1])*e.offset/i]}var Of=t=>Z(t.type)?.mount==="wall"||t.type==="lamp_wall"||t.mount_y!=null;function Lf(t,e,n){let r=[];for(let i of t.openings){let s=Y0(t,i);if(!s)continue;let{u:a,depth:l}=wl(n,s);Math.abs(l+n.face)>.3||a<-.01||a>n.length+.01||r.push({id:i.id,kind:"opening",type:i.type,x0:a-i.width/2,x1:a+i.width/2,y0:i.sill,y1:i.sill+i.height,lifts:i.type==="window"})}let o=Math.atan2(-n.normal[0],n.normal[1])*180/Math.PI;for(let i of t.furniture){if(!N([i.x,i.z],e.points)||Z0(i.rotation,o)>20)continue;let{u:s,depth:a}=wl(n,[i.x,i.z]);if(a-i.d/2>j0||s<0||s>n.length)continue;let l=Ct(t,i);r.push({id:i.id,kind:"furniture",type:i.type,x0:s-i.w/2,x1:s+i.w/2,y0:l,y1:l+i.h,lifts:Of(i)})}return r.sort((i,s)=>+(i.kind==="furniture")-+(s.kind==="furniture")||i.x0-s.x0)}var vo=t=>Math.round(t*1e3)/1e3;function Hf(t,e,n,r){let o=wl(t,[e.x,e.z]).depth,i=Math.min(t.length-e.w/2,Math.max(e.w/2,n+e.w/2)),s=[t.origin[0]+t.along[0]*i+t.normal[0]*(o+t.face),t.origin[1]+t.along[1]*i+t.normal[1]*(o+t.face)];return{x:vo(s[0]),z:vo(s[1]),...r!==null&&Of(e)?{mount_y:vo(Math.max(0,r))}:{}}}function Cf(t,e,n,r,o){let[i]=[e.points[n.edge]],s=Math.min(t.length-n.width/2,Math.max(n.width/2,r+n.width/2)),a=ye(G(i,t.origin))<1e-6?s:t.length-s;return{offset:vo(a),...o!==null&&n.type==="window"?{sill:vo(Math.max(0,o))}:{}}}var Nf=.01,Wf=t=>Math.round(t/Nf)*Nf,kl=class extends oe{static properties={host:{attribute:!1},doc:{attribute:!1},roomId:{},edge:{type:Number},_sel:{state:!0},_drag:{state:!0}};constructor(){super(),this._sel=null,this._drag=null}get room(){return this.host.floor?.rooms.find(e=>e.id===this.roomId)}frame(){let e=this.room;return e&&this.host.floor?vl(this.host.floor,e,this.edge,this.host.doc.settings.wall_interior):null}boxes(){let e=this.room,n=this.frame();return e&&n&&this.host.floor?Lf(this.host.floor,e,n):[]}place(e,n,r){let o=this.room,i=this.frame();!o||!i||this.host.change((s,a)=>{if(e.kind==="furniture"){let l=a.furniture.find(c=>c.id===e.id);l&&Object.assign(l,Hf(i,l,n,e.lifts?r:null))}else{let l=a.openings.find(u=>u.id===e.id),c=a.rooms.find(u=>u.id===l?.room_id);l&&c&&Object.assign(l,Cf(c.id===o.id?i:vl(a,c,l.edge,this.host.doc.settings.wall_interior),c,l,n,e.lifts?r:null))}})}toWall(e){let r=this.renderRoot.querySelector("svg").getScreenCTM()?.inverse();if(!r)return[0,0];let o=new DOMPoint(e.clientX,e.clientY).matrixTransform(r);return[o.x,-o.y]}down(e,n){if(this._sel=n.id,!this.host.admin)return;e.currentTarget.setPointerCapture(e.pointerId);let[r,o]=this.toWall(e);this._drag={id:n.id,x0:n.x0,y0:n.y0,startU:r,startY:o,fromX:n.x0,fromY:n.y0}}move(e,n){let r=this._drag;if(!r||r.id!==n.id)return;let[o,i]=this.toWall(e),s=this.frame(),a=n.x1-n.x0,l=Math.min((s?.length??0)-a,Math.max(0,Wf(r.fromX+o-r.startU))),c=n.lifts?Math.max(0,Wf(r.fromY+i-r.startY)):r.fromY;this._drag={...r,x0:l,y0:c}}up(e){let n=this._drag;this._drag=null,!(!n||n.id!==e.id||Math.abs(n.x0-n.fromX)<1e-6&&Math.abs(n.y0-n.fromY)<1e-6)&&this.place(e,n.x0,n.y0)}nameOf(e){if(e.kind==="furniture")return this.host.floor?.furniture.find(o=>o.id===e.id)?.name||ze(this.host.hass,e.type);let n=this.host.floor?.openings.find(r=>r.id===e.id);return n?this.host.t(`preset_${Fn(n)}`):e.type}updated(e){(e.has("edge")||e.has("roomId"))&&(this._sel=null)}render(){let e=this.host.t,n=this.room,r=this.frame();if(!n||!r)return g;let o=n.points.length,i=p=>ge(this.host.hass,p),s=this.boxes().map(p=>this._drag?.id===p.id?{...p,x1:this._drag.x0+(p.x1-p.x0),y1:this._drag.y0+(p.y1-p.y0),x0:this._drag.x0,y0:this._drag.y0}:p),a=Math.max(r.heightLeft,r.heightRight,...s.map(p=>p.y1)),l=.35,c=`${-l} ${-(a+l)} ${r.length+2*l} ${a+2*l+.25}`,u=s.find(p=>p.id===this._sel)??null,d=p=>{let f=Math.min(.14,Math.max(.07,(p.x1-p.x0)/7));return F`<text x=${(p.x0+p.x1)/2} y=${-(p.y0+p.y1)/2} font-size=${f} text-anchor="middle" dominant-baseline="middle">${this.nameOf(p)}</text>`},h=u?F`<g class="dim">
          <line x1="0" x2=${u.x0} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${u.x0/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(u.x0)}</text>
          <line x1=${u.x1} x2=${r.length} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${(u.x1+r.length)/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(r.length-u.x1)}</text>
          ${u.y0>.005?F`<line x1=${(u.x0+u.x1)/2} x2=${(u.x0+u.x1)/2} y1="0" y2=${-u.y0} /><text x=${(u.x0+u.x1)/2+.05} y=${-u.y0/2} font-size="0.11">${i(u.y0)}</text>`:g}
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
          ${s.map(p=>F`<g class="box ${p.kind} ${p.type} ${p.id===this._sel?"sel":""} ${this.host.admin?"movable":""}"
              @pointerdown=${f=>this.down(f,p)}
              @pointermove=${f=>this.move(f,p)}
              @pointerup=${()=>this.up(p)}
              @pointercancel=${()=>this._drag=null}>
              <rect x=${p.x0} y=${-p.y1} width=${Math.max(.01,p.x1-p.x0)} height=${Math.max(.01,p.y1-p.y0)} rx="0.02" />
              ${d(p)}
            </g>`)}
          ${h}
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
    </div>`}close(){this.dispatchEvent(new CustomEvent("close"))}static styles=le`
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
      max-height: calc(100dvh - 32px);
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
  `};customElements.get("nf-wall-view")||customElements.define("nf-wall-view",kl);function X0(t,e){let n=new Set([...Object.keys(t),...Object.keys(e)]);if(n.size===0)return 1/0;let r=0;for(let o of n)r+=Math.min(Math.abs((t[o]??-100)-(e[o]??-100)),40)**2;return Math.sqrt(r/n.size)}function Bf(t,e){if(Object.keys(e).length===0)return{room:null,distance:1/0,margin:0};let n=new Map;for(let s of t){let a=X0(s.rssi,e);a<(n.get(s.room)??1/0)&&n.set(s.room,a)}let r=[...n].sort((s,a)=>s[1]-a[1]);if(r.length===0)return{room:null,distance:1/0,margin:0};let[o,i]=r[0];return i>18?{room:null,distance:i,margin:0}:{room:o,distance:i,margin:r.length>1?r[1][1]-i:18}}var J0=t=>{let e=[...t].sort((r,o)=>r-o),n=e.length>>1;return e.length%2?e[n]:(e[n-1]+e[n])/2};function Q0(t){let e={},n=new Set(t.flatMap(r=>Object.keys(r)));for(let r of n){let o=t.filter(i=>r in i).map(i=>i[r]);o.length*2>t.length&&(e[r]=Math.round(J0(o)*10)/10)}return e}function Vf(t,e,n=3){let r=e.filter(s=>Object.keys(s).length>0);if(r.length===0)return[];let o=Math.max(1,Math.min(n,Math.floor(r.length/3))),i=[];for(let s=0;s<o;s++){let a=r.slice(Math.floor(s*r.length/o),Math.floor((s+1)*r.length/o)),l=Q0(a);Object.keys(l).length>0&&i.push({room:t,rssi:l})}return i}var Kf=(t,e,n)=>[...t.filter(r=>r.room!==e),...n],Gf=t=>Math.max(0,Math.min(1,(t+95)/50));var ev=1500,$l=class extends oe{static properties={host:{attribute:!1},doc:{attribute:!1},_found:{state:!0},_pick:{state:!0},_name:{state:!0},_tag:{state:!0},_room:{state:!0},_scan:{state:!0},_samples:{state:!0},_error:{state:!0}};timer=0;recordStarted=0;constructor(){super(),this._found=null,this._pick="",this._name="",this._tag=null,this._room="",this._scan=null,this._samples=null,this._error=""}createRenderRoot(){return this}get tags(){return this.host.doc.settings.ble?.tags??[]}get rooms(){let e=this.host.doc.floors;return e.flatMap(n=>n.rooms.map(r=>({id:r.id,label:e.length>1?`${n.name} \xB7 ${r.name}`:r.name})))}connectedCallback(){super.connectedCallback(),this.loadDevices(),this._tag&&this.restartPolling()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.timer)}updated(e){e.has("_tag")&&this.restartPolling()}async loadDevices(){try{this._found=await this.host.hass.callWS({type:"nextfloor/ble/devices"})}catch(e){this._error=String(e?.message??e)}}restartPolling(){if(window.clearInterval(this.timer),this._scan=null,this._samples=null,!this._tag)return;let e=()=>{this.pollOnce()};e(),this.timer=window.setInterval(e,ev)}async pollOnce(){let e=this.tags.find(n=>n.id===this._tag);if(!(!e||!this.host.hass))try{let n=await this.host.hass.callWS({type:"nextfloor/ble/scan",...e.entity?{entity:e.entity}:{address:e.address}});if(this._tag!==e.id)return;this._scan=n,this._error="",this._samples&&(this._samples=[...this._samples,Object.fromEntries(Object.entries(n.readings).map(([r,o])=>[r,o.rssi]))],Date.now()-this.recordStarted>=30*1e3&&this.finishRecording(e,n))}catch(n){this._error=String(n?.message??n)}}reading(){return Object.fromEntries(Object.entries(this._scan?.readings??{}).map(([e,n])=>[e,n.rssi]))}startRecording(){this._room&&(this.recordStarted=Date.now(),this._samples=[])}finishRecording(e,n){let r=this._samples??[];this._samples=null;let o=Vf(this._room,r);if(o.length===0)return;let i=Object.fromEntries(Object.entries(n.readings).map(([s,a])=>[s,a.name]));this.update2(e.id,s=>{s.prints=Kf(s.prints,this._room,o),s.scanners={...s.scanners??{},...i}})}update2(e,n){this.host.change(r=>{let o=r.settings.ble?.tags.find(i=>i.id===e);o&&n(o)})}addTag(){let e=this._pick;if(!e)return;let n=e.startsWith("device_tracker."),r=this._found?.devices.find(s=>s.address===e),o=this._name.trim()||r?.name||this.host.hass?.states[e]?.attributes.friendly_name||e,i={id:L("ble"),name:String(o).slice(0,60),prints:[],...n?{entity:e}:{address:e}};this.host.change(s=>{s.settings.ble={tags:[...s.settings.ble?.tags??[],i]}}),this._tag=i.id,this._pick="",this._name=""}removeTag(e){this.host.change(n=>{let r=(n.settings.ble?.tags??[]).filter(o=>o.id!==e);n.settings.ble=r.length?{tags:r}:null}),this._tag===e&&(this._tag=null)}bars(e){let n=this.host.t,r=this._scan,o=Object.entries(r?.readings??{}).sort((i,s)=>s[1].rssi-i[1].rssi);return m`<div class="nf-ble-bars">
      ${o.length===0?m`<p class="nf-sub">${r&&!r.available?n("ble_unavailable"):r?.address===null&&e.entity?n("ble_no_address"):n("ble_none_heard")}</p>`:o.map(([i,s])=>m`<div class="nf-ble-row" title=${i}>
            <span class="nf-ble-name">${s.name}</span>
            <span class="nf-ble-track"><span class="nf-ble-fill" style="width:${Math.round(Gf(s.rssi)*100)}%"></span></span>
            <span class="nf-ble-db">${Math.round(s.rssi)}</span>
          </div>`)}
      ${o.length===1?m`<p class="nf-sub">${n("ble_one_scanner")}</p>`:g}
    </div>`}learn(e){let n=this.host.t,r=this.rooms,o=Bf(e.prints,this.reading()),i=c=>r.find(u=>u.id===c)?.label??null,s=c=>e.prints.filter(u=>u.room===c).length,a=this._samples!==null,l=a?Math.max(0,30-Math.round((Date.now()-this.recordStarted)/1e3)):0;return m`${this.bars(e)}
      <p class="nf-ble-now"><b>${n("ble_now")}:</b> ${o.room?i(o.room):n("ble_unknown")}</p>
      <div class="nf-form">
        <label class="nf-field nf-wide">${n("ble_learn_room")}
          <select ?disabled=${a} .value=${this._room} @change=${c=>this._room=c.target.value}>
            <option value="">–</option>
            ${r.map(c=>m`<option value=${c.id} ?selected=${this._room===c.id}>${c.label}${s(c.id)?` \u2713 ${s(c.id)}`:""}</option>`)}
          </select>
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!this._room||a||Object.keys(this._scan?.readings??{}).length===0} @click=${()=>this.startRecording()}>
          ${a?n("ble_recording",{s:l}):n("ble_record",{s:30})}
        </button>
        ${this._room&&s(this._room)?m`<button class="nf-btn" ?disabled=${a} @click=${()=>this.update2(e.id,c=>c.prints=c.prints.filter(u=>u.room!==this._room))}>${n("ble_forget_room")}</button>`:g}
      </div>
      <p class="nf-sub">${n("ble_learn_hint")}</p>`}render(){let e=this.host.t,n=this.tags,r=new Set(n.flatMap(l=>[l.address??"",l.entity??""])),o=Object.entries(this.host.hass?.states??{}).filter(([l,c])=>l.startsWith("device_tracker.")&&typeof c.attributes.current_address=="string"&&!r.has(l)).map(([l,c])=>[l,String(c.attributes.friendly_name??l)]),i=(this._found?.devices??[]).filter(l=>!r.has(l.address)),s=this._found?.scanners.length??0,a=n.find(l=>l.id===this._tag)??null;return m`
      ${this._found&&!this._found.available?m`<p class="nf-sub">${e("ble_unavailable")}</p>`:m`<p class="nf-sub">${e("ble_scanners",{n:s})}</p>`}
      ${this._error?m`<p class="nf-sub">${this._error}</p>`:g}
      ${n.map(l=>m`<div class="nf-row nf-dev-row">
          <span class="nf-dev-name"><span>${l.name}</span><small>${l.entity??l.address} · ${e("ble_spots",{n:l.prints.length})}</small></span>
          <button class="nf-btn" @click=${()=>this._tag=this._tag===l.id?null:l.id}>${this._tag===l.id?e("ble_close"):e("ble_learn")}</button>
          <button class="nf-btn" title=${e("delete")} @click=${()=>this.removeTag(l.id)}>✕</button>
        </div>`)}
      ${a?m`<div class="nf-ble-learn">${this.learn(a)}<p class="nf-sub">${e("ble_sensor_hint",{name:a.name})}</p></div>`:g}
      <div class="nf-form">
        <label class="nf-field nf-wide">${e("ble_add")}
          <select .value=${this._pick} @change=${l=>this._pick=l.target.value}>
            <option value="">–</option>
            ${o.length?m`<optgroup label=${e("ble_trackers")}>${o.map(([l,c])=>m`<option value=${l}>${c}</option>`)}</optgroup>`:g}
            <optgroup label=${e("ble_devices")}>${i.map(l=>m`<option value=${l.address}>${l.named?l.name:l.address} · ${l.address} · ${l.rssi} dBm</option>`)}</optgroup>
          </select>
        </label>
        <label class="nf-field nf-wide">${e("ble_name")}
          <input type="text" maxlength="60" .value=${this._name} @input=${l=>this._name=l.target.value} />
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn" @click=${()=>{this.loadDevices()}}>${e("ble_refresh")}</button>
        <button class="nf-btn nf-primary" ?disabled=${!this._pick||n.length>=10} @click=${()=>this.addTag()}>${e("ble_add_button")}</button>
      </div>`}};customElements.get("nf-ble-locate")||customElements.define("nf-ble-locate",$l);var tv=new URL(import.meta.url),nv=new URL("./nextfloor-3d.js?v=e6afb642186e",tv).href,Uf;function bt(){return Uf??=import(nv),Uf}var jf=["lights","seating","tables","storage","beds","kitchen","appliances","bath","media","office","tech","climate","energy","garden","plants","kids","fitness","pets","workshop","music","season","pictures","vehicles","building","decor"],rv={sofa:"seating",armchair:"seating",stool:"seating",chair:"seating",bench:"seating",corner_bench:"seating",bar_stool:"seating",office_chair:"office",coffee_table:"tables",table:"tables",table_round:"tables",desk:"office",worktop:"kitchen",tv_board:"media",tv_wall:"media",sideboard:"storage",shelf:"storage",tall_cabinet:"storage",wardrobe:"storage",dresser:"storage",nightstand:"beds",coat_rack:"storage",plant:"plants",rug:"decor",kitchen:"kitchen",kitchen_wall:"kitchen",kitchen_tall:"kitchen",island:"kitchen",sink:"kitchen",stove:"kitchen",dishwasher:"appliances",fridge:"appliances",washer:"appliances",dryer:"appliances",robot_vacuum:"appliances",bed:"beds",bunk_bed:"beds",bathtub:"bath",shower:"bath",wc:"bath",washbasin:"bath",radiator:"climate",stairs:"building",parking:"vehicles",ceiling_fan:"lights"},ov=[[/xmas|advent|window_star|candle_arch|reindeer|pumpkin|easter|snowman|gift_pile|lights_outdoor/,"season"],[/^frame_|^canvas$|^poster$|picture_ledge/,"pictures"],[/piano|drum_kit|guitar|synth|mic_stand|vinyl|easel|studio_monitor|mixing_desk/,"music"],[/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/,"lights"],[/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/,"pets"],[/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/,"building"],[/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|herb_planter|flower|raised_bed|greenhouse|ficus|cactus|bonsai|living_wall|vertical_garden/,"plants"],[/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/,"kids"],[/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/,"fitness"],[/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna|oil_|expansion_vessel|water_tank|infrared|cold_bath/,"climate"],[/wallbox|inverter|battery|solar|meter|fuse_box|grid/,"energy"],[/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower|welder|ev_bike_charger|tool_chest|parts_cabinet/,"workshop"],[/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/,"media"],[/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/,"office"],[/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket|co_detector|presence_|water_leak|air_quality|doorbell/,"tech"],[/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line|kamado|pizza_oven|fire_pit|sandbox|wood_pile|bird_house|cistern|pond|water_feature|beach_chair/,"garden"],[/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|urinal|wt_\d|handtuch|seife|wc/,"bath"],[/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray|espresso|air_fryer|water_bar|thermo_cooker/,"appliances"],[/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/,"kitchen"],[/bed|boxspring|futon|nightstand|canopy|mattress/,"beds"],[/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook|floor_cushion|tatami/,"seating"],[/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/,"tables"],[/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest|locker/,"storage"]];function iv(t){if(t.vehicle)return"vehicles";if(t.climate)return"climate";if(!t.type.startsWith("pack:"))return t.lamp?"lights":rv[t.type]??"decor";let e=ov.find(([n])=>n.test(t.id));return e?e[1]:t.lamp?"lights":"decor"}var Zf=[[/k(u|ü)che|kitchen|kochen/,["kitchen","appliances","tables","seating","storage","plants","decor"]],[/wohn|living|lounge|salon/,["seating","tables","storage","media","plants","decor","climate","tech"]],[/\bess|dining/,["tables","seating","storage","plants","decor","media"]],[/schlaf|bed|gast|guest/,["beds","storage","seating","tables","decor","plants","climate","media"]],[/kind|kids|child|baby|spiel|play|nursery/,["kids","beds","storage","seating","tables","decor"]],[/bad|bath|wc|toilet|dusch|shower|sauna/,["bath","appliances","storage","climate","plants"]],[/b(u|ü)ro|office|arbeit|study|work/,["office","tech","storage","seating","tables","plants"]],[/kino|cinema|media|game|gaming|hifi/,["media","seating","tables","storage","office"]],[/fitness|gym|sport|training/,["fitness","media","storage","climate"]],[/garage|carport|stellplatz|parking/,["vehicles","workshop","energy","storage","garden"]],[/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/,["workshop","storage","appliances","energy","climate","fitness","tech"]],[/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/,["appliances","climate","energy","storage","tech","bath"]],[/flur|diele|hall|entr|eingang|corridor|treppe|stair/,["storage","seating","decor","plants","building"]],[/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/,["garden","plants","seating","tables","pets","kids"]]];function Sl(t){let e=(t??"").toLowerCase(),n=Zf.find(([r])=>r.test(e));return n?new Set(["lights",...n[1]]):null}function Ml(t){let e=(t??"").toLowerCase();return Zf.find(([n])=>n.test(e))?.[1][0]??null}var qf=t=>t==="garden"||t==="plants"||t==="vehicles",Yf=/_(\d+(?:x\d+)?)$/;function Xf(t){let e=new Map;for(let n of t){let r=iv(n),o=n.type.startsWith("pack:")&&!n.vehicle?n.id.replace(Yf,""):n.id,i=`${n.source}:${o}`,s=e.get(i);s&&s.category===r?s.entries.push(n):e.set(s?`${i}:${n.id}`:i,{key:s?`${i}:${n.id}`:i,category:r,entries:[n]})}for(let n of e.values())n.entries.sort((r,o)=>r.size[0]-o.size[0]||r.size[1]-o.size[1]);return[...e.values()]}function Jf(t,e){let n=o=>Math.round(o*100);return e.some(o=>o!==t&&n(o.size[0])===n(t.size[0]))?Yf.exec(t.id)?.[1]??`${n(t.size[0])}\xD7${n(t.size[2])}`:`${n(t.size[0])}`}function Qf(t,e,n=12){return[e,...t.filter(r=>r!==e)].slice(0,n)}var em=t=>t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),tm=t=>em(t).split(/\s+/).filter(Boolean),nm=(t,e)=>{let n=em(e);return t.every(r=>n.includes(r))};function rm(){let e=navigator.deviceMemory??8,n=navigator.hardwareConcurrency||8;return e<=3||n<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var om=112,sv="nextfloor-thumbs";function av(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0).toString(36)}function Rl(t){let e=Z(t);return`${t}|${e?av(JSON.stringify(e)):"b"}|${om}`}function lv(){return new Promise(t=>{try{let e=indexedDB.open(sv,1);e.onupgradeneeded=()=>e.result.createObjectStore("thumbs"),e.onsuccess=()=>t(e.result),e.onerror=()=>t(null)}catch{t(null)}})}var El=class{enabled=!rm();memory=new Map;waiting=new Map;queue=[];db=null;running=!1;packs=[];cached(e){return this.memory.get(Rl(e))}get(e){let n=Rl(e),r=this.memory.get(n);return r?Promise.resolve(r):new Promise(o=>{let i=this.waiting.get(n);if(i)return void i.push(o);this.waiting.set(n,[o]),this.lookUp(e,n)})}settle(e,n){n&&this.memory.set(e,n);for(let r of this.waiting.get(e)??[])r(n);this.waiting.delete(e)}async lookUp(e,n){this.db??=lv();let r=await this.db,o=r?await new Promise(i=>{try{let s=r.transaction("thumbs").objectStore("thumbs").get(n);s.onsuccess=()=>i(typeof s.result=="string"?s.result:null),s.onerror=()=>i(null)}catch{i(null)}}):null;if(o)return this.settle(n,o);this.queue.push(e),this.pump()}pump(){if(this.running)return;let e=this.queue.shift();if(!e)return;this.running=!0;let n=window.requestIdleCallback;(o=>n?n(o,{timeout:300}):setTimeout(o,16))(async()=>{let o=Rl(e),i=null;try{let[s,a,l]=ht(e);i=(await bt()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:ni[e]??null},om,[...this.packs]),this.keep(o,i)}catch{i=null}this.settle(o,i),this.running=!1,this.pump()})}async keep(e,n){let r=await this.db;try{r?.transaction("thumbs","readwrite").objectStore("thumbs").put(n,e)}catch{}}},Zt=new El,ko=null,cv=t=>{for(let e of t)e.isIntersecting&&e.target.visible()},Al=class extends oe{static properties={type:{},_url:{state:!0}};static styles=le`
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
  `;constructor(){super(),this.type="",this._url=null}connectedCallback(){super.connectedCallback(),Zt.enabled&&(this._url=Zt.cached(this.type)??null,!this._url&&(ko??=new IntersectionObserver(cv,{rootMargin:"120px"}),ko.observe(this)))}disconnectedCallback(){super.disconnectedCallback(),ko?.unobserve(this)}updated(e){e.has("type")&&e.get("type")!==void 0&&(this._url=Zt.cached(this.type)??null,!this._url&&Zt.enabled&&ko?.observe(this))}visible(){ko?.unobserve(this);let e=this.type;Zt.get(e).then(n=>{this.type===e&&(this._url=n)})}render(){return this._url?m`<img src=${this._url} alt="" />`:g}};customElements.get("nf-thumb")||customElements.define("nf-thumb",Al);var im="nextfloor.library2",uv={language:"en"},rs=class{onChange;text="";saved;shown=null;picked=new Map;constructor(e){this.onChange=e,this.saved={folded:{},favourites:[],recent:[],flags:["room"]};try{let n=localStorage.getItem(im);n&&(this.saved={...this.saved,...JSON.parse(n)})}catch{}}store(e){this.saved={...this.saved,...e},this.onChange();try{localStorage.setItem(im,JSON.stringify(this.saved))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e,n){return this.saved.folded[e]??n}toggle(e,n){this.store({folded:{...this.saved.folded,[e]:!this.isOpen(e,n)}})}has(e){return this.saved.flags.includes(e)}flip(e){this.store({flags:this.has(e)?this.saved.flags.filter(n=>n!==e):[...this.saved.flags,e]})}get favourites(){return this.saved.favourites}isFavourite(e){return this.saved.favourites.includes(e)}toggleFavourite(e){this.store({favourites:this.isFavourite(e)?this.saved.favourites.filter(n=>n!==e):[e,...this.saved.favourites]})}get recent(){return this.saved.recent}used(e){this.store({recent:Qf(this.saved.recent,e)})}pickedOf(e){let n=this.picked.get(e.key);return e.entries.find(r=>r.type===n)??e.entries[0]}pick(e,n){this.picked.set(e.key,n),this.onChange()}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,n,r){let o=n.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=ht(e),c=(await bt()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:ni[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function dv(t,e){let n=t.hass?.language??"en",o=[...[...new Set(Object.values(Ku).flat())].map(a=>({type:a,source:"builtin",id:a,size:it[a],lamp:he(a),electric:Ht(a)})),...e.flatMap(a=>a.items.map(l=>({type:fe(a.id,l.id),source:a.id,id:l.id,size:l.size,lamp:!!l.light,electric:!!l.electric,vehicle:!!l.vehicle,climate:!!l.climate})))],i=new Map(e.map(a=>[a.id,Be(a,n)])),s=new Map(e.flatMap(a=>a.items.map(l=>[fe(a.id,l.id),l])));return Xf(o).map(a=>{let l=a.entries[0],c=s.get(l.type),u=c?nt(c,l.type,n):t.t(`furn_${l.type}`),d=a.entries.length>1&&u.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i,"").trim()||u,h=a.entries.map(p=>{let f=s.get(p.type);return f?[...Object.values(f.name),nt(f,p.type,n)].join(" "):ke(uv,`furn_${p.type}`)}).join(" ");return{card:a,label:d,search:`${h} ${t.t(`lib_cat_${a.category}`)}`,from:i.get(l.source)??"NextFloor"}})}var hv=(t,e)=>nm(e,`${t.label} ${t.search} ${t.from} ${t.card.entries.map(n=>n.id.replace(/_/g," ")).join(" ")}`),pv=t=>t.lamp?"light":t.electric?"switch":null;function fv(t,e,n,r){let o=t.t,i=e.pickedOf(n.card),[s,a]=i.size,l=pv(i),c=h=>{e.showPreview(i.type,h.currentTarget,r.packs)},u=()=>{e.used(i.type),r.add(i.type)},d=e.isFavourite(i.type);return m`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${l?o(l==="light"?"lib_badge_light":"lib_badge_electric"):n.label}
      @click=${u}
      @mouseenter=${c}
      @focus=${c}
      @mouseleave=${()=>e.hidePreview()}
      @blur=${()=>e.hidePreview()}
    >
      ${Zt.enabled?m`<nf-thumb .type=${i.type}></nf-thumb>`:g}
      <span class="nf-card-name"
        >${n.label}${l?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${jt(l)} /></svg>`:g}</span
      >
      <span class="nf-card-meta">${Math.round(s*100)} × ${Math.round(a*100)} cm · ${n.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${d} title=${o(d?"lib_fav_remove":"lib_fav_add")} @click=${()=>e.toggleFavourite(i.type)}>${d?"\u2605":"\u2606"}</button>
    ${n.card.entries.length>1?m`<div class="nf-card-sizes" role="group" aria-label=${o("lib_sizes")}>
          ${n.card.entries.map(h=>m`<button class="nf-size" aria-pressed=${h===i} @click=${()=>e.pick(n.card,h.type)}>${Jf(h,n.card.entries)}</button>`)}
        </div>`:g}
  </div>`}function am(t,e,n,r){return m`<div class="nf-cards">${n.map(o=>fv(t,e,o,r))}</div>`}function Fl(t,e,n,r,o,i,s){if(o.length===0)return g;let a=e.isOpen(n,s);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>e.toggle(n,s)}>
      <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${r} <span class="nf-lib-count">${o.length}</span>
    </button>
    ${a?am(t,e,o,i):g}`}function sm(t,e){return t.flatMap(n=>{let r=e.find(o=>o.card.entries.some(i=>i.type===n));return r?[{...r,card:{...r.card,key:`one:${n}`,entries:r.card.entries.filter(o=>o.type===n)}}]:[]})}function mv(t){let e=Ml(t),n=Sl(t),r=o=>o===e?0:n?.has(o)?1:2;return[...jf].sort((o,i)=>r(o)-r(i))}function lm(t,e,n,r){let o=t.t;Zt.packs=r.packs;let i=dv(t,r.packs),s=tm(e.query),a=Sl(n),l=!!a&&e.has("room")&&s.length===0,c=i.filter(h=>{let p=h.card.entries[0];return l&&!a.has(h.card.category)||e.has("linkable")&&!p.lamp&&!p.electric||e.has("lit")&&!p.lamp||e.has("outdoor")&&!qf(h.card.category)?!1:s.length===0||hv(h,s)}),u=(h,p)=>m`<button class="nf-chip nf-lib-chip" aria-pressed=${e.has(h)} @click=${()=>e.flip(h)}>${p}</button>`,d=s.length>0;return m`<section>
      <h3>${o("furniture_add")}</h3>
      <p class="nf-sub">${n?o("furniture_into",{room:n}):o("furniture_pick_room")}</p>
      <button class="nf-btn nf-lib-studio" title=${o("studio_hint")} @click=${()=>r.studio()}>🛠️ ${o("studio_new")}</button>
      <input
        class="nf-search"
        type="search"
        placeholder=${o("furniture_search")}
        .value=${e.query}
        @input=${h=>e.query=h.target.value}
        @keydown=${h=>h.key==="Escape"&&(e.query="")}
      />
      <div class="nf-lib-chips">
        ${a?u("room",o("lib_for_room",{room:n??""})):g} ${u("linkable",`\u26A1 ${o("lib_linkable")}`)} ${u("lit",`\u{1F4A1} ${o("lib_lit")}`)}
        ${u("outdoor",`\u{1F333} ${o("lib_outdoor")}`)}
      </div>
      ${d&&c.length===0?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${d?am(t,e,c,r):m`${Fl(t,e,"favourites",`\u2605 ${o("lib_favourites")}`,sm(e.favourites,i),r,!0)}
          ${Fl(t,e,"recent",`\u{1F558} ${o("lib_recent")}`,sm(e.recent.slice(0,6),i),r,!1)}
          ${mv(n).map(h=>Fl(t,e,h,o(`lib_cat_${h}`),c.filter(p=>p.card.category===h),r,h===(Ml(n)??"lights")))}
          ${l?m`<button class="nf-btn nf-lib-all" @click=${()=>e.flip("room")}>${o("lib_all_rooms")}</button>`:g}`}
    </section>`}function cm(t,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${ze(t.hass,e.type)}</b>
  </div>`:g}function zl(t,e,n,r=24){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(o<1e-6||Math.abs(n)<1e-4)return[];let i=Math.max(-o*2,Math.min(o*2,n)),s=[(e[0]-t[0])/o,(e[1]-t[1])/o],a=[s[1],-s[0]],l=o*o/4/(2*Math.abs(i))+Math.abs(i)/2,c=2*Math.atan(2*Math.abs(i)/o),u=Math.max(2,Math.min(r,Math.ceil(2*c/Math.PI*180/11.25))),d=[a[0]*Math.sign(i),a[1]*Math.sign(i)],h=[(t[0]+e[0])/2,(t[1]+e[1])/2],p=[h[0]-d[0]*(l-Math.abs(i)),h[1]-d[1]*(l-Math.abs(i))],f=[];for(let _=1;_<u;_++){let b=-c+2*c*_/u;f.push([p[0]+l*(d[0]*Math.cos(b)+s[0]*Math.sin(b)),p[1]+l*(d[1]*Math.cos(b)+s[1]*Math.sin(b))])}return f}var Tl=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Pl(t,e){let n=Math.max(0,e);for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return{piece:r,offset:Math.min(n,o)};n-=o}return{piece:0,offset:0}}var Oe=t=>Math.round(t*1e3)/1e3,Il=t=>t.map(([e,n])=>[Oe(e),Oe(n)]);function os(t,e){return{id:L("room"),name:e,area_id:null,points:Il(t),floor_material:"wood"}}function um(t){return{...structuredClone(t),id:L("room"),points:Il(t.points.map(([e,n])=>[e+.5,n+.5]))}}function dm(t,e){let n=t.rooms.find(r=>r.id===e);t.rooms=t.rooms.filter(r=>r.id!==e),t.openings=t.openings.filter(r=>r.room_id!==e||r.wall),n&&(t.placements=t.placements.filter(r=>!N([r.x,r.z],n.points)))}function hm(t,e,n){let r=t.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(n-1+r.points.length)%r.points.length;r.points.splice(n,1),r.wall_heights?.splice(n,1),r.wall_slopes?.splice(n,1),r.wall_thickness?.splice(n,1);let i=s=>s.room_id===e&&!s.wall;return t.openings=t.openings.filter(s=>!(i(s)&&(s.edge===n||s.edge===o))).map(s=>i(s)&&s.edge>n?{...s,edge:s.edge-1}:s),!0}function pm(t,e,n){if(!Number.isFinite(n))return null;let r=pe(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:n>.05&&(e==="w"?s=o+n:a=i+n),Il([[o,i],[s,i],[s,a],[o,a]])}function fm(t,e,n,r){return!Number.isFinite(r)||e<0||e>=t.points.length?null:t.points.map((o,i)=>i===e?n===0?[Oe(r),o[1]]:[o[0],Oe(r)]:[o[0],o[1]])}var gv=/^(Raum|Room) \d+$/;function Dl(t,e,n){let r=e?n[e]:void 0,o=!t.name||gv.test(t.name)||Object.values(n).some(i=>i.name===t.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function mm(t,e){let n=e.filter(l=>ee(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&N([l.x,l.z],t.points));if(n.length<2)return[];let r=pe(t.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,i)))),a=Math.ceil(n.length/s);return n.map((l,c)=>{let u=Math.floor(c/s),d=u===a-1?n.length-s*(a-1):s,h=c-u*s;return{entityId:l.entity_id,x:Oe(r.x0+o/d*(h+.5)),z:Oe(r.z0+i/a*(u+.5))}})}function Ol(t,e,n,r){let o=t.rooms.find(u=>u.id===e);if(!o)return;let i=o.points[n],s=o.points[(n+1)%o.points.length];o.points.splice(n+1,0,r);let[a,l]=[o.wall_heights?.[n],o.wall_slopes?.[n]];if(typeof a=="number"&&typeof l=="number"&&o.wall_slopes){let u=Math.hypot(s[0]-i[0],s[1]-i[1]),d=Oe(a+(l-a)*Math.min(1,Math.hypot(r[0]-i[0],r[1]-i[1])/(u||1)));o.wall_slopes.splice(n,1,d,l),o.wall_heights.splice(n+1,0,d)}else o.wall_heights?.splice(n+1,0,o.wall_heights[n]??null),o.wall_slopes?.splice(n+1,0,null);o.wall_thickness?.splice(n+1,0,o.wall_thickness[n]??null);let c=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let u of t.openings)u.room_id!==e||u.wall||(u.edge>n?u.edge+=1:u.edge===n&&u.offset>c&&(u.edge=n+1,u.offset=Oe(u.offset-c)))}var _v=22.5;function gm(t,e,n){let r=Math.min(Math.abs(e),t*2),o=t*(1+8/3*(r/Math.max(1e-6,t))**2),i=4*Math.atan(2*r/Math.max(1e-6,t))*180/Math.PI,s=Math.max(2,Math.ceil(i/_v));if(n<=0)return 24;let a=Math.floor(o/(n+.1));return a>=s?a:0}function bv(t,e,n,r){let o=Tl(n);t.forEach((i,s)=>{let{piece:a,offset:l}=Pl(n,e[s]*o),c=Math.hypot(n[a+1][0]-n[a][0],n[a+1][1]-n[a][1]);i.edge=r+a,i.offset=Oe(c>i.width?Math.min(c-i.width/2,Math.max(i.width/2,l)):c/2)})}function _m(t,e,n,r){let o=t.rooms.find(v=>v.id===e);if(!o||n<0||n>=o.points.length||Math.abs(r)<.01)return!1;let i=o.points[n],s=o.points[(n+1)%o.points.length],a=Math.hypot(s[0]-i[0],s[1]-i[1]);if(a<.2)return!1;let[l,c]=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[(i[0]+s[0])/2+c*.02,(i[1]+s[1])/2-l*.02],h=N(u,o.points)?-r:r,p=(v,y)=>t.openings.filter(x=>x.room_id===v.id&&!x.wall&&x.edge===y),f=t.rooms.flatMap(v=>v.points.map((y,x)=>{let k=v.points[(x+1)%v.points.length],S=($,E)=>Math.abs($[0]-E[0])<.001&&Math.abs($[1]-E[1])<.001;return S(y,i)&&S(k,s)?[v,x,!1]:S(y,s)&&S(k,i)?[v,x,!0]:null}).filter(y=>!!y)),_=Math.max(0,...f.flatMap(([v,y])=>p(v,y).map(x=>x.width))),b=gm(a,r,_);if(!b)return!1;let w=zl(i,s,h,b).map(([v,y])=>[Oe(v),Oe(y)]);if(!w.length)return!1;for(let[v,y,x]of f){let k=x?[...w].reverse():w,S=p(v,y),$=v.points[y],E=S.map(z=>Math.min(1,Math.max(0,z.offset/a)));for(let z of S)z.edge=-1;k.forEach((z,P)=>Ol(t,v.id,y+P,z)),v.wall_splits?.splice(y+1,0,...k.map(()=>null)),v.wall_splits?.[y]&&(v.wall_splits[y]=null),bv(S,E,[$,...k,v.points[(y+k.length+1)%v.points.length]],y)}return!0}function bm(t,e,n){let r=t.walls??[],o=r.findIndex(f=>f.id===e);if(o<0||Math.abs(n)<.01)return[];let i=r[o],s=Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1]),a=t.openings.filter(f=>f.wall===e),l=Math.max(0,...a.map(f=>f.width)),c=gm(s,n,l);if(!c)return[];let u=zl(i.a,i.b,n,c).map(([f,_])=>[Oe(f),Oe(_)]);if(!u.length)return[];let d=[i.a,...u,i.b],h=d.slice(1).map((f,_)=>({...i,id:_===0?i.id:L("wall"),a:d[_],b:f}));r.splice(o,1,...h),t.walls=r;let p=Tl(d);for(let f of a){let{piece:_,offset:b}=Pl(d,f.offset/s*p),w=Math.hypot(d[_+1][0]-d[_][0],d[_+1][1]-d[_][1]);f.wall=h[_].id,f.offset=Oe(w>f.width?Math.min(w-f.width/2,Math.max(f.width/2,b)):w/2)}return h.map(f=>f.id)}var nr=t=>Math.round(t*1e3)/1e3;function is(t,e,n){return[Math.round((e[0]-t[0])/n)*n,Math.round((e[1]-t[1])/n)*n]}var vn=(t,e)=>e?.01:t,rr=(t,e,n=5)=>Math.hypot(t[0]-e[0],t[1]-e[1])>=n;function ym(t,e,n){return n?Math.abs(e[0]-t[0])>Math.abs(e[1]-t[1])?[e[0],t[1]]:[t[0],e[1]]:e}var rt=(t,e)=>[nr(t[0]+e[0]),nr(t[1]+e[1])];function Ll(t,e,n,r){return[nr(Math.round((t[0]+n[0]-e[0])/r)*r),nr(Math.round((t[1]+n[1]-e[1])/r)*r)]}function Hl(t,e,n){let r=Math.atan2(-(e[0]-t[0]),e[1]-t[1])*180/Math.PI;return(Math.round(r/n)*n%360+360)%360}function wm(t,e,n){let r=Math.atan2(e[0]-t[0],-(e[1]-t[1]))*180/Math.PI;return Math.round(r/n)*n}function vm(t,e,n,r=!1){let o=!r&&rn([...t]),i=t[e],s=[nr(n[0]),nr(n[1])];return t.map((a,l)=>l===e?s:o?[Math.abs(a[0]-i[0])<1e-6?s[0]:a[0],Math.abs(a[1]-i[1])<1e-6?s[1]:a[1]]:[a[0],a[1]])}var ss=t=>Math.round(t*1e3)/1e3,km=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function yv(t,e,n){let r=null,o=n;for(let i of t){let s=km(i,e);s<o&&([r,o]=[i,s])}return r}function wv(t,e,n){let r=null,o=n.reach;for(let i of t)n.skip&&i.id===n.skip.roomId||i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],[c,u]=[l[0]-s[0],l[1]-s[1]],d=c*c+u*u;if(d<1e-9)return;let h=((e[0]-s[0])*c+(e[1]-s[1])*u)/d;if(h<=0||h>=1)return;let p=[s[0]+h*c,s[1]+h*u],f=km(p,e),_=(b,w,v)=>Math.min(Math.max(b,Math.min(w,v)),Math.max(w,v));Math.abs(u)<1e-9&&(p[0]=_(Math.round(p[0]/n.grid)*n.grid,s[0],l[0])),Math.abs(c)<1e-9&&(p[1]=_(Math.round(p[1]/n.grid)*n.grid,s[1],l[1])),f<o&&([r,o]=[p,f])});return r}function vv(t,e,n){let r=[ss(Math.round(e[0]/n.grid)*n.grid),ss(Math.round(e[1]/n.grid)*n.grid)],o={},[i,s]=[n.reach,n.reach];for(let a of t)Math.abs(a[0]-e[0])<i&&(i=Math.abs(a[0]-e[0]),r[0]=a[0],o.x=a[0]),Math.abs(a[1]-e[1])<s&&(s=Math.abs(a[1]-e[1]),r[1]=a[1],o.z=a[1]);return{point:r,guides:o}}function xm(t,e){let n=e.rooms.flatMap(i=>i.points.filter((s,a)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===a)))),r=yv(n,t,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=wv(e.rooms,t,e);return o?{point:[ss(o[0]),ss(o[1])],guides:{point:o}}:vv(n,t,e)}var as=(t,e)=>ge(t.host.hass,e);function kv(t,e){let[n,r]=[t.toScreen(e.start),t.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return F`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${n[0]} y1=${n[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(n[0]+r[0])/2} y=${(n[1]+r[1])/2-10}>${as(t,s)}</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return F`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(n[0],r[0])} y=${Math.min(n[1],r[1])} width=${Math.abs(r[0]-n[0])} height=${Math.abs(r[1]-n[1])} />
    <text class="nf-dim" x=${(n[0]+r[0])/2} y=${Math.min(n[1],r[1])-8}>${as(t,o)} × ${as(t,i)}</text>
  </g>`}function xv(t,e,n,r){let o=[...e,...n?[n]:[]].map(u=>t.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,d)=>{let[h,p]=[t.toScreen(e[d]),t.toScreen(u)];return F`<text class="nf-dim" x=${(h[0]+p[0])/2} y=${(h[1]+p[1])/2-6}>${as(t,Math.hypot(u[0]-e[d][0],u[1]-e[d][1]))}</text>`}):g,a=e.map((u,d)=>{let[h,p]=t.toScreen(u),f=d===0&&i;return F`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${h} cy=${p} r=${f?9:5} />`}),[l,c]=n?t.toScreen(n):[0,0];return F`<g pointer-events="none">
    ${o.length>1?F`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${n?F`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function $m(t,e,n){let r=e.x!==void 0?t.toScreen([e.x,0])[0]:null,o=e.z!==void 0?t.toScreen([0,e.z])[1]:null,[i,s]=e.point?t.toScreen(e.point):[0,0];return F`<g pointer-events="none">
    ${r!==null?F`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${n.h} />`:g}
    ${o!==null?F`<line class="nf-guide" x1="0" y1=${o} x2=${n.w} y2=${o} />`:g}
    ${e.point?F`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function Sm(t,e,n,r,o){return e?kv(t,e):n!=="polygon"&&n!=="measure"?g:xv(t,r,o,n==="measure")}var ce=(t,e,n,r,o="")=>F`<rect class=${o} x=${Math.min(t,n)} y=${Math.min(e,r)} width=${Math.abs(n-t)} height=${Math.abs(r-e)} />`,re=(t,e,n,r,o="")=>F`<line class=${o} x1=${t} y1=${e} x2=${n} y2=${r} />`,Rm=(t,e="")=>F`<polygon class=${e} points=${t.map(n=>n.join(",")).join(" ")} />`,se=(t,e,n,r="")=>F`<circle class=${r} cx=${t} cy=${e} r=${n} />`,Cl=(t,e,n,r,o="")=>F`<ellipse class=${o} cx=${t} cy=${e} rx=${n} ry=${r} />`;function Nl(t,e,n){let r=[];for(let o=1;o<n;o++){let i=-t/2+t/n*o;r.push(re(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function Mm(t,e,n,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,t*.12):0,s=[ce(-t/2,-e/2,t/2,-e/2+o,"nf-sym-fill")];r&&s.push(ce(-t/2,-e/2,-t/2+i,e/2,"nf-sym-fill"),ce(t/2-i,-e/2,t/2,e/2,"nf-sym-fill"));let a=t-2*i;for(let l=1;l<n;l++){let c=-t/2+i+a/n*l;s.push(re(c,-e/2+o,c,e/2-.02))}return s}function Em(t,e,n,r){if(t==="stairs"&&r?.stair)return $v(r,e,n);switch(t){case"sofa":return Mm(e,n,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return Mm(e,n,1,!0);case"bench":return[ce(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill")];case"corner_bench":{let o=Math.min(.5,n*.4);return[ce(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill"),ce(-e/2,-n/2,-e/2+.08,n/2,"nf-sym-fill"),re(-e/2+o,-n/2+o,e/2,-n/2+o),re(-e/2+o,-n/2+o,-e/2+o,n/2)]}case"chair":return[ce(-e/2,-n/2,e/2,-n/2+.06,"nf-sym-fill")];case"office_chair":return[se(0,.03,Math.min(e,n)*.36),ce(-e*.35,-n/2+.02,e*.35,-n/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[se(0,0,Math.min(e,n)*.42)];case"stool":return[ce(-e/2+.04,-n/2+.04,e/2-.04,n/2-.04)];case"table":case"coffee_table":case"desk":{let o=[ce(-e/2+.05,-n/2+.05,e/2-.05,n/2-.05)];return t==="desk"&&o.push(re(-.3,-n/2+.1,.3,-n/2+.1,"nf-sym-strong")),o}case"bed":case"bunk_bed":{let o=e>1.2?2:1,i=(e-.2)/o,s=[ce(-e/2,-n/2,e/2,-n/2+.07,"nf-sym-fill"),re(-e/2,-n/2+(n-.1)*.36,e/2,-n/2+(n-.1)*.36)];for(let a=0;a<o;a++)s.push(ce(-e/2+.13+i*a,-n/2+.12,-e/2+.07+i*(a+1),-n/2+.12+Math.min(.4,n*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Nl(e,n,t==="nightstand"||t==="tall_cabinet"||t==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[ce(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),...Nl(e,n,Math.max(2,Math.round(e/.5)))];case"island":return[re(-e/2,n/2-.3,e/2,n/2-.3)];case"fridge":return[re(-e/2+.06,n/2-.04,e/2-.06,n/2-.04,"nf-sym-strong")];case"stove":{let o=Math.min(e,n)*.14;return[se(-e*.22,-n*.2,o),se(e*.22,-n*.2,o*.8),se(-e*.22,n*.2,o*.8),se(e*.22,n*.2,o)]}case"sink":{let o=Math.min(.5,e-.2);return[ce(-o/2,-n/2+.1,o/2,n/2-.08),se(0,-n/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[re(-e/2+.08,n/2-.05,e/2-.08,n/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[se(0,.05,Math.min(e,n)*.3),re(-e/2,-n/2+.1,e/2,-n/2+.1)];case"bathtub":return[ce(-e/2+.07,-n/2+.07,e/2-.07,n/2-.07),se(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[re(-e/2,-n/2,e/2,n/2),re(e/2,-n/2,-e/2,n/2),se(0,0,.04)];case"wc":return[ce(-e/2,-n/2,e/2,-n/2+Math.min(.18,n*.3),"nf-sym-fill"),Cl(0,n*.1,e*.36,n*.3)];case"washbasin":return[Cl(0,.03,e*.34,n*.3)];case"tv_board":return[re(-Math.min(e*.4,.72),-n/2+.14,Math.min(e*.4,.72),-n/2+.14,"nf-sym-strong"),...Nl(e,n,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[re(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[se(0,0,Math.min(e,n)*.45,"nf-sym-fill"),se(0,0,Math.min(e,n)*1.4)];case"lamp_bollard":case"lamp_garden":return[se(0,0,Math.min(e,n)*.5,"nf-sym-fill"),se(0,0,Math.min(e,n)*1.6)];case"parking":return[ce(-e/2+.08,-n/2+.08,e/2-.08,n/2-.08),re(-e*.15,n/2-.5,0,n/2-.22,"nf-sym-strong"),re(0,n/2-.22,e*.15,n/2-.5,"nf-sym-strong")];case"robot_vacuum":return[ce(-e*.45,-n/2,e*.45,-n/2+n*.3,"nf-sym-fill"),se(0,n*.14,Math.min(e,n)*.47)];case"radiator":{let o=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)o.push(re(-e/2+e/i*s,-n/2,-e/2+e/i*s,n/2));return o}case"lamp_panel":return[ce(-e/2+.03,-n/2+.03,e/2-.03,n/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let o=Math.min(e,n)/2,i=[se(0,0,o*.9,"nf-sym-fill"),se(0,0,o*.3)];if(t==="lamp_ceiling"||t==="lamp_pendant")for(let s=0;s<8;s++){let a=s/8*Math.PI*2;i.push(re(Math.cos(a)*o*1.05,Math.sin(a)*o*1.05,Math.cos(a)*o*1.35,Math.sin(a)*o*1.35))}return i}case"ceiling_fan":{let o=Math.min(e,n)/2,i=[se(0,0,.11,"nf-sym-fill")];for(let s=0;s<5;s++){let a=s/5*Math.PI*2;i.push(re(Math.cos(a)*.12,Math.sin(a)*.12,Math.cos(a)*o*.97,Math.sin(a)*o*.97,"nf-sym-strong"))}return[...i,se(0,0,o)]}case"lamp_wall":return[ce(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),Cl(0,.01,e*.4,n*.4)];case"led_strip":return[re(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[se(0,0,Math.min(e,n)*.46),se(0,0,Math.min(e,n)*.25)];case"rug":return[ce(-e/2+.1,-n/2+.1,e/2-.1,n/2-.1)];case"stairs":{let o=Math.max(3,Math.round(n/.26)),i=[];for(let s=1;s<o;s++)i.push(re(-e/2,n/2-n/o*s,e/2,n/2-n/o*s));return i.push(re(0,n/2-.1,0,-n/2+.25,"nf-sym-strong"),re(-.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong"),re(.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong")),i}default:{let o=Z(t);return o?Sv(o,e,n):g}}}function $v(t,e,n){let r=yo(t),o=wn(r,e,n,t.h),i=r.down?"nf-sym-dash":"",s=o.treads.map(l=>Rm(l.poly,l.landing?`nf-sym-fill ${i}`:i));o.column>0&&s.push(se(0,0,o.column,"nf-sym-fill"));let a=o.treads.map(Ui);for(let l=1;l<a.length;l++)s.push(re(a[l-1][0],a[l-1][1],a[l][0],a[l][1],"nf-sym-strong"));if(a.length&&s.unshift(se(a[0][0],a[0][1],.05,"nf-sym-fill")),a.length>=2){let[l,c]=[a[a.length-2],a[a.length-1]],u=Math.hypot(c[0]-l[0],c[1]-l[1])||1,[d,h]=[(c[0]-l[0])/u,(c[1]-l[1])/u],p=Math.min(.2,o.flight*.3);for(let f of[-1,1])s.push(re(c[0],c[1],c[0]-d*p+h*p*.6*f,c[1]-h*p-d*p*.6*f,"nf-sym-strong"))}return s}function Sv(t,e,n){return t.symbol?.length?t.symbol.map(r=>r.shape==="rect"?ce((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n,r.fill?"nf-sym-fill":""):r.shape==="circle"?se(r.x*e,r.z*n,r.r*Math.min(e,n)):re(r.x1*e,r.z1*n,r.x2*e,r.z2*n)):uu(t,e,n,t.size[2]).filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?Rm([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*n]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*n])]):r.shape==="cyl"&&(r.axis??"y")==="y"?se(r.x*e,r.z*n,Math.min(r.w*e,r.d*n)/2):ce((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n))}var Wl=Math.PI/180,Fm=(t,e,n,r)=>{let[o,i]=r,s=F`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=F`<line x1=${n[0]} y1=${n[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return t==="data-rotate"?F`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:F`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function Mv(t,e){let n=e.rotation*Wl;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=t.toScreen([e.x+r*e.w*Math.cos(n)/2-o*e.d*Math.sin(n)/2,e.z+r*e.w*Math.sin(n)/2+o*e.d*Math.cos(n)/2]);return F`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}var Am=new WeakMap;function Rv(t,e){let n=Am.get(e);if(n&&n.states===t.states)return n.links;let r=Ze(t,[e]);return Am.set(e,{states:t.states,links:r}),r}function Ev(t,e,n){if(!t||!he(n.type))return!1;let r=Rv(t,e).get(n.id)?.entity;return!!iu(r?t.states[r]:void 0,(n.extra_lights??[]).map(o=>t.states[o]))}function zm(t,e,n){let{host:r,scale:o}=t,i=s=>{let a=s.id===n,l=a&&r.admin&&!s.locked,[c,u]=t.toScreen([s.x,s.z]),d=s.rotation*Wl,h=Math.min(s.w,s.d)*o>44,p=Ev(r.hass,e,s),f=Ue.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${p?" nf-furn-lit":""}${f?" nf-energy-item":""}`,b=s.d/2+Math.max(.3,26/o),w=t.toScreen([s.x-Math.sin(d)*b,s.z+Math.cos(d)*b]),v=t.toScreen([s.x-Math.sin(d)*(s.d/2),s.z+Math.cos(d)*(s.d/2)]),[y,x]=t.toScreen([s.x+Math.sin(d)*(s.d/2+18/o),s.z-Math.cos(d)*(s.d/2+18/o)]);return F`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${Em(s.type,s.w,s.d,s)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${h?F`<text x=${c} y=${u+4}>${ze(r.hass,s.type)}</text>`:g}
      </g>
      ${l?Mv(t,s):g}
      ${a?F`<text class="nf-dim" x=${y} y=${x+4}>${ge(r.hass,s.w)} × ${ge(r.hass,s.d)}</text>`:g}
      ${a&&s.locked?F`<text class="nf-lock" x=${w[0]} y=${w[1]+5}>🔒</text>`:g}
      ${l?Fm("data-rotate",s.id,v,w):g}`};return F`<g>${wf(e).map(i)}</g>`}function Tm(t,e,n){let{host:r}=t,o=i=>{let s=ee(i.entity_id)??(r.hass?je(r.hass,i.entity_id):null);if(!s)return g;let[a,l]=t.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===n,d=(i.rotation??0)*Wl,h=u&&r.admin&&!i.locked&&nd(i.entity_id,r.hass?.states[i.entity_id]),p=[a-Math.sin(d)*46,l+Math.cos(d)*46],f=jn(r,i.entity_id,i.icon);return F`${h?Fm("data-aim",i.entity_id,[a,l],p):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${K(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${f?F`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${f}></ha-icon></foreignObject>`:F`<path d=${jt(s)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${u&&i.locked?F`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return F`<g>${e.placements.map(o)}</g>`}function Pm(t,e,n){return F`${(e.notes??[]).map(r=>{let[o,i]=t.toScreen([r.x,r.z]);return F`<g data-note=${r.id} class=${`nf-note${jo(r)?" nf-note-due":""}${r.id===n?" nf-note-sel":""}`} transform="translate(${o} ${i})">
      <title>${r.text}</title>
      <rect x="-11" y="-11" width="22" height="22" rx="4" /><text y="5" text-anchor="middle">✎</text>
    </g>`})}`}var ls=(t,e,n=6)=>F`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r=${n} />`;function Im(t,e){let{scale:n}=t,r=n>=90?.1:n>=30?.5:1,o=n>=20?1:5,i=t.toWorld(0,0),s=t.toWorld(e.w,e.h),a=[],l=(d,h)=>{for(let p=Math.ceil(i[0]/d)*d;p<=s[0];p+=d){let f=t.toScreen([p,0])[0];a.push(F`<line class=${h} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let p=Math.ceil(i[1]/d)*d;p<=s[1];p+=d){let f=t.toScreen([0,p])[1];a.push(F`<line class=${h} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,u]=t.toScreen([0,0]);return a.push(F`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),F`<g pointer-events="none">${a}</g>`}function Dm(t){let e=t.host.doc.floors,n=e.findIndex(i=>i.id===t.floorId),r=n>0?e[n-1]:void 0;if(!r)return g;let o=ju(e,e[n]);return F`<g pointer-events="none">${r.rooms.map(i=>F`<polygon class="nf-ghost" points=${ct(t,i.points)} />`)}${o.map(i=>F`<polygon class="nf-void" points=${ct(t,i)} />`)}</g>`}function Om(t,e){let n=t.host.floor?.height??2.5;return F`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<n-.01;return F`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${ct(t,r.footprint)} />`})}</g>`}function Lm(t,e,n){let r=o=>{let[i,s]=t.toScreen(xe(o.points)),a=pe(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*t.scale>40;return F`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===n?" nf-out-sel":""}`}>
      <polygon points=${ct(t,o.points)} />
      ${l?F`<text x=${i} y=${s+4}>${t.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return F`<g>${e.outdoor.map(r)}</g>`}function Hm(t,e,n){let{host:r}=t;if(!e||!r.admin||n!=="select"||r.doc.settings.lock_plan)return g;let o=e.points;return F`${o.map((i,s)=>Ni(t,i,o[(s+1)%o.length],"out",e.id,s))}${o.map((i,s)=>F`<g class="nf-vertex" data-out-vertex=${`${e.id}:${s}`}>${ls(...t.toScreen(i))}</g>`)}`}function Cm(t,e,n,r){let o=e.rooms.find(s=>s.id===n),i=o&&r!==null&&r<o.points.length?[t.toScreen(o.points[r]),t.toScreen(o.points[(r+1)%o.points.length])]:null;return F`<g>${e.rooms.map(s=>F`<polygon data-room=${s.id} class=${s.id===n?"nf-room nf-room-sel":"nf-room"} points=${ct(t,s.points)} />`)}</g>
    ${i?F`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=t.toScreen(xe(s.points));return F`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${De(t.host.hass,Ee(s.points))}</text>`})}</g>`}function Nm(t,e){let n=t.host.doc.energy?.meter;if(!n||n.floor_id!==e.id)return g;let[r,o]=t.toScreen([n.x,n.z]);return F`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function Wm(t,e,n){let{host:r}=t,o=i=>{let[s,a]=[t.toScreen(i.a),t.toScreen(i.b)],[l,c]=wo(i,r.doc.settings.wall_interior).map(h=>t.toScreen(h)),u=i.id===n,d=u&&r.admin&&!qo(i,!0,r.doc.settings);return F`<g data-free-wall=${i.id} class=${`nf-free-wall${u?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${l[0]} y1=${l[1]} x2=${c[0]} y2=${c[1]} />
      </g>
      ${d?F`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${ls(l[0],l[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${ls(c[0],c[1])}</g>`:g}`};return F`<g>${(e.walls??[]).map(o)}</g>`}function Bm(t,e){let n=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=n.length)return[];let[s,a]=[n[i],n[(i+1)%n.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,u]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(d=>{let[h,p]=t.toScreen([s[0]+c*d,s[1]+u*d]);return F`<line class="nf-split-mark" x1=${h-u*7} y1=${p+c*7} x2=${h+u*7} y2=${p-c*7} />`})});return F`${r}`}function Vm(t,e,n){let r=e.points,[o,i]=t.toScreen(xe(r)),s=(l,c,u)=>{let[[d,h],[p,f]]=[t.toScreen(l),t.toScreen(c)],[_,b]=[(d+p)/2,(h+f)/2],w=Math.hypot(p-d,f-h),[v,y]=[-(f-h),p-d],x=Math.hypot(v,y)||1;return[v,y]=[v/x,y/x],v*(_-o)+y*(b-i)<0&&([v,y]=[-v,-y]),F`${w>50?F`<text class="nf-dim" x=${_+v*16} y=${b+y*16+4}>${ge(t.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]))}</text>`:g}
      ${w>36?F`<g data-mid=${u} class="nf-mid"><circle cx=${_} cy=${b} r="14" class="nf-hit" /><circle cx=${_} cy=${b} r="6" /><path d="M${_-3} ${b}h6M${_} ${b-3}v6" /></g>`:g}`},a=(l,c)=>{let[u,d]=t.toScreen(l);return F`<g data-vertex=${c} class=${c===n?"nf-vertex nf-vertex-sel":"nf-vertex"}>${ls(u,d)}</g><text class="nf-vertex-no" x=${u+9} y=${d-9}>${c+1}</text>`};return F`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}function Km(t,e){let n=e.rooms.flatMap(r=>{if(r.points.length<3)return[];let[o,i]=xe(r.points);return r.points.map((s,a)=>{let l=r.points[(a+1)%r.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(c<.4)return g;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=Math.hypot(o-u[0],i-u[1])||1,h=Math.min(.35,d/2),p=[u[0]+(o-u[0])/d*h,u[1]+(i-u[1])/d*h],[f,_]=t.toScreen(p),b=Math.atan2(l[1]-s[1],l[0]-s[0])*180/Math.PI;return b>90&&(b-=180),b<-90&&(b+=180),F`<text class="nf-dim" x=${f} y=${_} transform=${`rotate(${b.toFixed(1)} ${f} ${_})`} text-anchor="middle" dominant-baseline="middle">${ge(t.host.hass,c)}</text>`})});return F`<g pointer-events="none">${n}</g>`}function Gm(t,e,n){let r=t.t;return m`<section>
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
      ${jo(e)?m`<p class="nf-sub nf-warn nf-wide">${r("note_is_due")}</p>`:R(r("note_due_hint"),"nf-wide")}
      ${A(t,r("note_repeat"),e.repeat_months??0,o=>n.patch({repeat_months:o>=1?Math.min(120,Math.round(o)):null}),1,0)}
      ${e.last_done?m`<p class="nf-sub nf-wide">${r("note_last_done",{d:e.last_done})}</p>`:g}
      ${R(r("note_repeat_hint"),"nf-wide")}
      ${A(t,r("x"),e.x,o=>n.patch({x:o}))} ${A(t,r("z"),e.z,o=>n.patch({z:o}))}
      ${A(t,r("note_height"),e.y??xu,o=>n.patch({y:Math.max(0,Math.min(20,Math.round(o*100)/100))}),.1,0)}
      ${R(r("note_height_hint"),"nf-wide")}
      ${Av(t,e,n)}
    </div>
    ${J(m`<button class="nf-btn nf-danger" ?disabled=${!t.admin} @click=${()=>n.remove()}>${r("delete")}</button>`)}
  </section>`}function Av(t,e,n){let r=t.t,o=!!e.photo?.startsWith("image:"),i=async s=>{let a=s.target,l=a.files?.[0];if(a.value="",!l||!t.hass)return;let{data:c}=await tr(l),u=L("img");await Dt(t.hass,u,c),n.patch({photo:`image:${u}`})};return m`${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(o?"picture_replace":"note_photo_upload")}<input type="file" accept="image/*" hidden @change=${i} /></label>`:g}
    ${o?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.patch({photo:null})}>${r("delete")}</button></p>`:U(t,r("picture_url"),e.photo??"",s=>n.patch({photo:s.trim()||null}),{wide:!0,placeholder:"/local/valve.jpg"})}
    ${R(r("note_photo_hint"),"nf-wide")}`}function Fv(t,e,n,r){let o=Ne(e,n.rooms,n.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=Bt(r,e,o),l=$t(i,s,e.offset-e.width/2),c=$t(i,s,e.offset+e.width/2),u=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],d=_e(i.points)>=0?1:-1,h=[-u[1]*d,u[0]*d],p=[.06,.06];return a&&(p=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:h,direction:d,across:p,exterior:a?.wall.exterior??!1,at:(f,_)=>t.toScreen([f[0]+h[0]*_,f[1]+h[1]*_])}}var zt=(t,e,n="")=>F`<line class=${n} x1=${t[0]} y1=${t[1]} x2=${e[0]} y2=${e[1]} />`;function zv(t,e){let n=t.across[0]-.04,r=t.across[0]+Math.min(2,e.height),[o,i,s,a]=[t.at(t.p0,n),t.at(t.p1,n),t.at(t.p0,r),t.at(t.p1,r)];return F`${zt(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function Tv(t,e,n){let r=n.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=n.hinge==="left"==e.direction>0,a=xt(n,e.exterior),l=n.leaves===2,[c,u]=[e.p0,e.p1],d=[],h=Zu(n.width,a,s,n);if(h){let v=y=>y<=.02?e.p0:y>=n.width-.02?e.p1:$t(e.room,e.edge,n.offset-n.width/2+y);[c,u]=[v(h.x0),v(h.x1)],d=h.panels.map(([y,x])=>[v(y),v(x)])}let p=[(c[0]+u[0])/2,(c[1]+u[1])/2],f=(l?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),_=d.map(([v,y])=>F`${zt(e.at(v,i+.035),e.at(y,i+.035),"nf-open-pane")}${zt(e.at(v,i-.035),e.at(y,i-.035),"nf-open-pane")}`),b=(v,y)=>{let[x,k]=e.at(v,o),[S,$]=e.at(y,o),E=e.at(v,o+(r?-f:f)),z=f*t.scale,P=(E[0]-x)*($-k)-(E[1]-k)*(S-x)>0?1:0;return F`<path d="M${x} ${k}L${E[0]} ${E[1]}A${z} ${z} 0 0 ${P} ${S} ${$}" />`},w;return a==="passage"?w=zt(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?w=zt(e.at(c,o),e.at(u,o)):l?w=F`${b(c,p)}${b(u,p)}`:w=s?b(c,u):b(u,c),F`${_}${w}`}function Pv(t,e){let n=(t.across[0]-t.across[1])/2;if(e.opens==="slide"){let o=e.leaves===2?4:2,i=a=>[t.p0[0]+(t.p1[0]-t.p0[0])*a,t.p0[1]+(t.p1[1]-t.p0[1])*a],s=Array.from({length:o},(a,l)=>{let c=e.leaves===2?l===1||l===2?.035:-.035:l===0?.035:-.035;return zt(t.at(i(Math.max(0,l/o-.03)),n+c),t.at(i(Math.min(1,(l+1)/o+.03)),n+c))});return F`${s}`}let r=e.leaves===2?zt(t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],t.across[0]),t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],-t.across[1])):g;return F`${zt(t.at(t.p0,n+.035),t.at(t.p1,n+.035))}${zt(t.at(t.p0,n-.035),t.at(t.p1,n-.035))}${r}`}function Um(t,e,n,r){let o=e.openings.find(s=>s.id===r)?.front??null,i=s=>{let a=Fv(t,s,e,n);if(!a)return g;let l=[a.at(a.p0,a.across[0]+.01),a.at(a.p1,a.across[0]+.01),a.at(a.p1,-a.across[1]-.01),a.at(a.p0,-a.across[1]-.01)],c=s.type==="door"&&qs(xt(s,a.exterior)),u=s.id===r||!!s.front&&s.front===o,d=`nf-open nf-open-${s.type}${c?" nf-open-front":""}${u?" nf-open-sel":""}`,h=s.type==="garage"?zv(a,s):s.type==="door"?Tv(t,a,s):Pv(a,s);return F`<g data-opening=${s.id} class=${d}><polygon class="nf-open-gap" points=${l.map(p=>p.join(",")).join(" ")} />${h}</g>`};return F`<g>${e.openings.map(i)}</g>`}var jm=t=>Math.round(t*1e3)/1e3,Zm=t=>Math.round(t*100)/100;function or(t,e){let n=[...t??[]].slice(0,e);for(;n.length<e;)n.push(null);return n}var cs=t=>t.every(e=>e===null);function xo(t,e){let[n,r]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.hypot(r[0]-n[0],r[1]-n[1])}function Bl(t,e,n){let r=or(t.wall_heights,t.points.length);r[e]=n,t.wall_heights=cs(r)?void 0:r,us(t,e,null)}function us(t,e,n){if(n===null&&!t.wall_slopes)return;let r=or(t.wall_slopes,t.points.length);r[e]=n,t.wall_slopes=cs(r)?void 0:r}function qm(t,e,n,r){let[o,i]=[n,r].map(a=>Math.min(30,Math.max(.05,jm(a)))),s=or(t.wall_heights,t.points.length);s[e]=o,t.wall_heights=s,us(t,e,i)}function Ym(t,e,n){let r=t.wall_heights?.[e];us(t,e,null),typeof r=="number"&&r>=n-.005&&Bl(t,e,null)}function Xm(t,e,n,r,o){let i=or(t.wall_heights,t.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[n]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,t.wall_heights=cs(i)?void 0:i,us(t,e,null)}function Jm(t,e,n,r){let o=xo(t,e),i=n===void 0?0:r[n],s=n===void 0?o:r[n+1]??o;if(s-i<.4)return!1;let a=Zm((i+s)/2),l=or(t.wall_splits,t.points.length);l[e]=[...l[e]??[],a].sort((u,d)=>u-d),t.wall_splits=l;let c=t.wall_heights?.[e];return Array.isArray(c)&&c.splice((n??0)+1,0,c[n??0]??null),!0}function Qm(t,e,n,r,o){let i=xo(t,e),s=o.filter(u=>Math.abs(u-n)>.001&&u>0),a=Math.max(.1,Math.min(i-.1,Zm(r)));s.some(u=>Math.abs(u-a)<.1)&&(a=n);let l=t.wall_splits?.[e];if(!l)return;let c=l.findIndex(u=>Math.abs(u-n)<.001);c>=0&&(l[c]=a),l.sort((u,d)=>u-d)}function eg(t,e,n,r){let o=t.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-n)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(t.wall_splits=void 0);let s=t.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(t.wall_heights[e]=s[0]??null))}function tg(t,e,n,r,o=1){let i=or(t.wall_thickness,t.points.length);if(r===void 0||o<2)i[e]=n;else{let s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[r]=n,i[e]=a.every(l=>l===a[0])?a[0]:a}t.wall_thickness=cs(i)?void 0:i}function ng(t,e){let n=Math.min(1.5,Math.max(.02,jm(t)));return Math.abs(n-e)<5e-4?null:n}var rg=.005,og=(t,e)=>`room:${t.id}:${e}`;function ig(t,e,n){let r=t.t,o=e.ceiling??t.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=t.doc.settings,l=c=>{let u=e.wall_heights?.[c]??null,d=n.partsOf(e,c);return(d.length>1?d.map((p,f)=>f):[void 0]).map(p=>{let f=Array.isArray(u)?u[p??0]??null:u,_=e.wall_thickness?.[c]??null,b=Array.isArray(_)?_[p??0]??null:_,w=p===void 0?xo(e,c):(d[p+1]??xo(e,c))-d[p],v=T=>n.setHeight(e,c,p,T),y=n.isOuter(e,c)?s:a,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${p===void 0?"":` \xB7 ${r("wall_part",{n:p+1})}`}`,k=p!==void 0&&p>0&&(e.wall_splits?.[c]??[]).some(T=>Math.abs(T-d[p])<.001),S=e.wall_slopes?.[c],$=p===void 0&&typeof S=="number"&&typeof u=="number",E=f??o,z=()=>n.light(c),P=()=>n.light(null);return m`<div class="nf-edge-height${c===n.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${z} @mouseleave=${P} @focusin=${z} @focusout=${P}>
        <span><b>${x}</b><br /><span class="nf-muted">${ge(t.hass,w)}</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:$?m`<span class="nf-wide nf-split-row" title=${r("wall_slope_hint")}
                >${A(t,r("wall_slope_start"),u,T=>n.setSlope(e,c,T,S),.05,.05)}
                ${A(t,r("wall_slope_end"),S,T=>n.setSlope(e,c,u,T),.05,.05)}</span
              >`:A(t,r("wall_height"),E,T=>v(T>=o-rg?null:Math.max(.05,T)),.05,.05)}
        ${t.admin&&$?m`<button class="nf-btn" title=${r("wall_slope_off")} @click=${()=>n.clearSlope(e,c)}>▭</button>`:g}
        ${t.admin&&f!==null&&!$?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
        ${t.admin&&p===void 0&&f!==0&&!$?m`<button class="nf-btn" title=${r("wall_slope_hint")} @click=${()=>n.setSlope(e,c,E,E>=o-rg?E+1:o)}>∠ ${r("wall_slope")}</button>`:g}
        ${t.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:g}
        ${t.admin&&w>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>n.cut(e,c,p)}>✂</button>`:g}
        ${p===void 0&&w>=.4?qi(t,og(e,c),n.arc):g}
        ${(p===void 0||p===0)&&f!==0?m`<button class="nf-btn" title=${r("wall_view_hint")} @click=${()=>n.openWall(e,c)}>▣ ${r("wall_view")}</button>`:g}
        ${f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${A(t,r("edge_thickness"),b??y,T=>n.setThickness(e,c,ng(T,y),p,d.length),.01,.02)}
              ${t.admin&&b!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>n.setThickness(e,c,null,p,d.length)}>↺</button>`:g}</span
            >`:g}
        ${p===void 0?Yi(t,og(e,c),n.arc):g}
        ${k?m`<span class="nf-wide nf-split-row"
              >${A(t,r("wall_split_at"),d[p],T=>n.moveCut(e,c,d[p],T),.05,.1)}
              ${t.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join(e,c,d[p],p)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>l(u))} ${R(r("room_wall_hint"))}
  </div>`}function sg(t,e,n){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:n;return r?t.states[r]:void 0}var Vl=["none","rainbow","pulse","flicker"];function ds(t,e,n,r){let o=e.effect_animations??{},i=Qu(),s=c=>Vl.includes(c)||i.includes(c),a=[...new Set([...Object.keys(o),...Array.isArray(n)?n.filter(c=>typeof c=="string"):[]])],l=(c,u,d,h=!1)=>{let p=Object.prototype.hasOwnProperty.call(o,c),f=Array.from(c).length,_=h&&p?"light_effect_exists":u!==""&&(f<1||f>255)?"light_effect_name_limit":u!==""&&!p&&Object.keys(o).length>=100?"light_effect_count_limit":void 0;if(d.setCustomValidity?.(_?t.t(_):""),_){let w=d.closest?.("details")?.querySelector("[data-effect-feedback]");return w&&(w.textContent=t.t(_)),d.reportValidity?.(),h||(d.value=p?o[c]:""),!1}let b={...o};return u===""?delete b[c]:Object.defineProperty(b,c,{value:u,enumerable:!0,configurable:!0,writable:!0}),r({effect_animations:b}),!0};return m`<details class="nf-wide">
    <summary>${t.t("light_effects")}</summary>
    <p class="nf-sub">${t.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${e.animations_enabled!==!1} ?disabled=${!t.admin}
      @change=${c=>r({animations_enabled:c.target.checked})} />${t.t("light_effects_enabled")}</label>
    ${a.map(c=>m`<label class="nf-field nf-wide">${c}
      <select ?disabled=${!t.admin} @change=${u=>{let d=u.target;l(c,d.value,d)}}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(o,c)}>${t.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(o,c)&&!s(o[c])?m`<option selected value=${o[c]}>${o[c]} (${t.t("light_effect_unmapped")})</option>`:g}
        ${Vl.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${t.t(`light_animation_${u}`)}</option>`)}
        ${i.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${u} (${t.t("plugin")})</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${t.t("light_effect_add")}<input type="text" ?disabled=${!t.admin} placeholder="Regenbogen"
      @input=${c=>c.target.setCustomValidity("")}
      @change=${c=>{let u=c.target;l(u.value,"none",u,!0)&&(u.value="")}} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${t.t("light_effect_name_limit")} ${t.t("light_effect_count_limit")}</p>
  </details>`}var Iv=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function Dv(t,e,n){let r=ee(e),o=t.hass?.language??"en",i=[...Qo.map(a=>({type:a,label:t.t(`furn_${a}`)})),...n.flatMap(a=>a.items.map(l=>({type:fe(a.id,l.id),label:`${nt(l,fe(a.id,l.id),o)} \xB7 ${Be(a,o)}`})))],s=a=>r==="light"?he(a):r==="climate"?a==="radiator"||Rn(a):e.startsWith("vacuum.")?a==="robot_vacuum"||kt(a)&&a.endsWith(":robot_vacuum"):r==="media"?Dn(a)||Ht(a)&&Iv.test(a):Ht(a)&&!he(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function Ov(t,e,n){if(!t.admin)return g;let r=Dv(t,e.entity_id,n.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${t.t("as_furniture_hint")}
    >${t.t("as_furniture")}
    <select @change=${o=>o.target.value&&n.asFurniture(e,o.target.value)}>
      <option value="" selected>${t.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function Lv(t,e,n){let r=t.hass?.language??"en";return td(e.entity_id,t.hass?.states[e.entity_id]).map(({pluginId:o,name:i,settings:s})=>{let a=ea(s,e.plugin?.[o]),l=(u,d)=>n({plugin:{...e.plugin??{},[o]:{...e.plugin?.[o]??{},[u]:d}}}),c=s.map(u=>{let d=si(u.label,r),h=u.hint?si(u.hint,r):void 0;if(u.type==="boolean")return D(t,d,a[u.key]===!0,f=>l(u.key,f),{title:h});if(u.type==="select"){let f=(u.options??[]).map(([_,b])=>[_,si(b,r)]);return O(t,d,String(a[u.key]),f,_=>l(u.key,_),{wide:!0,title:h})}if(u.type==="entity"){let f=H(t.hass,_=>!u.domains?.length||u.domains.includes(_.split(".")[0]));return I(t,d,String(a[u.key])||null,void 0,f,_=>l(u.key,_&&_!=="none"?_:""))}let p=f=>Math.min(u.max??1/0,Math.max(u.min??-1/0,f));return A(t,d,Number(a[u.key]),f=>l(u.key,p(f)),u.step??1,u.min)});return m`<h4 class="nf-lib-head nf-wide">🔌 ${i}</h4>${c}`})}function Kl(t,e,n){let r=t.t,o=ee(e.entity_id)??(t.hass?je(t.hass,e.entity_id):null),i=o==="light",s=e.mount??"ceiling",a=o?Ko(o,t.floor?pt(t.floor,e.x,e.z):2.5,i?s:null):1,l=h=>n.update(h),c=jn(t,e.entity_id,e.icon),u=h=>l({mount:h,y:null}),d=["ceiling","floor","table","wall"].map(h=>[h,r(`lamp_${h}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${n.lockButton}</div>
    <p class="nf-dev-title">
      ${c?m`<ha-icon class="nf-dev-icon" .icon=${c}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?jt(o):""} /></svg>`}
      ${K(t.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${O(t,r("lamp_mount"),s,d,u,{wide:!0})}${mn(t,e.glow_scale,h=>l({glow_scale:h}))}`:g}
      ${i?ds(t,e,t.hass?.states[e.entity_id]?.attributes.effect_list,l):g}
      ${e.entity_id.startsWith("media_player.")?mn(t,e.sound_rings,h=>l({sound_rings:h}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g}
      ${A(t,r("x"),e.x,h=>l({x:h}))} ${A(t,r("z"),e.z,h=>l({z:h}))}
      ${A(t,r("marker_height"),e.y??a,h=>l({y:Math.max(0,h)}),.05,0)}
      ${A(t,r("rotation"),e.rotation??0,h=>l({rotation:(h%360+360)%360}),1)}
      ${i?D(t,r("device_simple"),!!e.simple,h=>l({simple:h||void 0}),{title:r("device_simple_hint")}):g}
      ${o&&nu.has(o)?D(t,r("device_confirm"),!!e.confirm,h=>l({confirm:h}),{title:r("device_confirm_hint")}):g}
      ${D(t,r("device_outside"),!!e.outside,h=>l({outside:h||void 0}),{title:r("device_outside_hint")})}
      ${Zn(t,e.marker??null,h=>l({marker:h}))}
      ${qn(t,e.pin_offset,h=>l({pin_offset:h}))}
      ${U(t,r("device_name"),e.name??"",h=>l({name:h||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:K(t.hass,e.entity_id)})}
      ${e.name?D(t,r("show_name"),!!e.show_name,h=>l({show_name:h||void 0})):g}
      ${At(t,e.icon,h=>l({icon:h}))}
      ${Lv(t,e,l)}
    </div>
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>n.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>l({y:null})}>${r("height_auto")}</button>`:g}
          ${Ov(t,e,n)}
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var kn=t=>`/api/nextfloor/mesh/${encodeURIComponent(t)}`,ir=12*1024*1024;function ag(t,e){let n=new Map;for(let r of t)for(let o of r.items){if(!o.mesh)continue;let i=n.get(o.mesh)??[];n.set(o.mesh,[...i,`${nt(o,fe(r.id,o.id),e)} \xB7 ${Be(r,e)}`])}return[...n].map(([r,o])=>({id:r,items:o})).sort((r,o)=>r.items[0].localeCompare(o.items[0]))}function sr(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function Gl(t){return t===201||t===200||t===204?null:t===401||t===403?"forbidden":t===413?"too_large":t===400?"not_glb":t===404?"bad_id":"other"}var Hv=40,Cv=(t=ir)=>Math.floor(t*.8/Hv),Ul=[{key:"light",triangles:3e4},{key:"normal",triangles:8e4},{key:"fine",triangles:15e4}];function lg(t){return Math.min(Ul.find(e=>e.key===t).triangles,Cv())}var cg=(t,e)=>{if(!e.startsWith("binary_sensor."))return!1;let n=t.entities?.[e]?.translation_key;return n?n==="in_game":e.endsWith("_in_game")};var $o=t=>Number(t);function hs(t){if(Array.isArray(t)){let[i,s]=[$o(t[0]),$o(t[1])];return Number.isFinite(i)&&Number.isFinite(s)?[i,s]:null}if(!t||typeof t!="object")return null;let{x:e,y:n}=t,[r,o]=[$o(e),$o(n)];return Number.isFinite(r)&&Number.isFinite(o)?[r,o]:null}function hg(t){return t?hs(t.charger)??hs(t.charger_position):null}function Zl(t){if(!t)return null;let e=t.map_x_mm!==void 0&&t.map_y_mm!==void 0?hs({x:t.map_x_mm,y:t.map_y_mm}):null;return hs(t.vacuum_position)??e}function ps(t){for(let[e,n]of Object.entries(t.states))if(e.startsWith("camera.")&&(Zl(n.attributes)??hg(n.attributes)))return e;for(let[e,n]of Object.entries(t.states))if(e.startsWith("device_tracker.")&&Zl(n.attributes))return e;return null}var jl=(t,e)=>e?[t[0],-t[1]]:t;var pg=5e-4,fg=2,Nv=1.5;function ql(t,e){let n=e?t.states[e]?.attributes:void 0;return{at:Zl(n),dock:hg(n)}}function mg(t,e,n=!1){let r=Math.hypot(e.plan[0]-t.plan[0],e.plan[1]-t.plan[1]),o=Math.hypot(e.grid[0]-t.grid[0],e.grid[1]-t.grid[1]);if(!(o>1e-6)||!(r>=Nv))return{cal:null,reason:"close"};let i=r/o;return i>=pg&&i<=fg?{cal:{a:t.plan,ga:t.grid,b:e.plan,gb:e.grid,mirror:n}}:{cal:null,reason:"scale"}}function gg(t,e){let n=e?t.states[e]?.attributes?.rooms:void 0;if(!n||typeof n!="object")return[];let r=[];for(let o of Object.values(n)){if(!o||typeof o!="object")continue;let i=o,s=typeof i.name=="string"?i.name.trim():"",a=[i.x0,i.y0,i.x1,i.y1].map($o);!s||!a.every(Number.isFinite)||r.push({name:s,center:[(a[0]+a[2])/2,(a[1]+a[3])/2]})}return r}var ug=t=>t.toLocaleLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^\p{L}\p{N}]+/gu,"");function Wv(t){let e=t.length,[n,r]=t.reduce((p,f)=>[p[0]+f.seen[0]/e,p[1]+f.seen[1]/e],[0,0]),[o,i]=t.reduce((p,f)=>[p[0]+f.plan[0]/e,p[1]+f.plan[1]/e],[0,0]),[s,a,l]=[0,0,0];for(let p of t){let[f,_]=[p.seen[0]-n,p.seen[1]-r],[b,w]=[p.plan[0]-o,p.plan[1]-i];s+=f*b+_*w,a+=f*w-_*b,l+=f*f+_*_}if(!(l>1e-9))return null;let[c,u]=[s/l,a/l],d=p=>{let[f,_]=[p[0]-n,p[1]-r];return[o+c*f-u*_,i+u*f+c*_]},h=Math.sqrt(t.reduce((p,f)=>p+Math.hypot(d(f.seen)[0]-f.plan[0],d(f.seen)[1]-f.plan[1])**2,0)/e);return{map:d,scale:Math.hypot(c,u),rms:h}}function _g(t,e,n=!1){let r=new Map(e.map(_=>[ug(_.name),_])),o=[],i=new Set;for(let _ of t){let b=ug(_.name),w=r.get(b);if(!w||i.has(b)||_.points.length<3)continue;i.add(b);let v=_.points.map(x=>x[0]),y=_.points.map(x=>x[1]);o.push({name:_.name,plan:[(Math.min(...v)+Math.max(...v))/2,(Math.min(...y)+Math.max(...y))/2],grid:w.center})}let s=o.map(_=>_.name);if(o.length<2)return{cal:null,reason:"rooms",matched:s};let l=(o.length>=3?[!1,!0]:[n]).flatMap(_=>{let b=Wv(o.map(w=>({plan:w.plan,seen:jl(w.grid,_)})));return b?[{mirror:_,...b}]:[]}).sort((_,b)=>_.rms-b.rms)[0];if(!l)return{cal:null,reason:"rooms",matched:s};if(!(l.scale>=pg&&l.scale<=fg))return{cal:null,reason:"scale",matched:s};let c=Math.max(...o.map(_=>Math.hypot(_.plan[0]-o[0].plan[0],_.plan[1]-o[0].plan[1])));if(!(l.rms<=Math.max(1,c/4)))return{cal:null,reason:"fit",matched:s};let[u,d,h]=[0,1,-1];for(let _=0;_<o.length;_++)for(let b=_+1;b<o.length;b++){let w=Math.hypot(o[_].grid[0]-o[b].grid[0],o[_].grid[1]-o[b].grid[1]);w>h&&([u,d,h]=[_,b,w])}let[p,f]=[o[u].grid,o[d].grid];return{cal:{a:l.map(jl(p,l.mirror)),ga:p,b:l.map(jl(f,l.mirror)),gb:f,mirror:l.mirror},matched:s,rms:l.rms}}function bg(t,e){let[n,r]=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],o=(e.turn??0)*Math.PI/180,[i,s,a]=[Math.cos(o),Math.sin(o),e.grow??1],[l,c]=e.move??[0,0],u=d=>{let[h,p]=[(d[0]-n)*a,(d[1]-r)*a];return[dg(n+h*i-p*s+l),dg(r+h*s+p*i+c)]};return{...t,a:u(t.a),b:u(t.b)}}var dg=t=>Math.round(t*1e3)/1e3;var Bv=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,dt=t=>t==="none"?null:t;function Yl(t,e,n){let r=t.t,o=H(t.hass,l=>Bv.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${I(t,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>n.update({state_entity:dt(l)}))}
    ${i?I(t,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>n.update({state_entity2:dt(l)})):g}
    ${s?O(t,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>n.update({state_split:l})):g}
    ${i?m`${ve(t,r("furn_on_color"),e.on_color??null,"#ffb547",l=>n.update({on_color:l}))}
        ${O(t,r("furn_on_effect"),e.on_effect??"",[["",r("furn_on_effect_none")],["pulse",r("furn_on_effect_pulse")],["flicker",r("furn_on_effect_flicker")],["rainbow",r("furn_on_effect_rainbow")]],l=>n.update({on_effect:l||null}))}`:g}
    ${R(r("furn_state_hint"),"nf-wide")}`}function Vv(t,e){let r=In(t.type)&&(!kt(t.type)||hu(t.type));return he(t.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:t.type==="radiator"||Rn(t.type)?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:t.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:/:(robot_mower|mower_dock)$/.test(t.type)?{accept:o=>o.startsWith("lawn_mower."),label:"furn_entity_mower"}:/:(sprinkler|valve_box)$/.test(t.type)?{accept:o=>/^(valve|switch|input_boolean)\./.test(o),label:"furn_entity_water"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover|valve)\./.test(o)||ru(e?.states[o]),label:"furn_entity"}}function fs(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[n==="fan"?"fan_entity":n]=null);return Ze(t.hass,r).get(e.id)?.[n]??null}var Kv=t=>t==="meter"?"energy_grid":t==="inverter"?"energy_solar_sensor":t==="home_battery"?"energy_battery_sensor":"furn_power",ut=(...t)=>m`<div class="nf-form nf-links">${t}</div>`;async function Gv(t){let e=t.hass?ps(t.hass):null;if(!t.hass||!e)return{at:null,dock:null};let n=()=>{let o=t.hass?.states[e]?.attributes??{};return`${String(o.render_count??"")}|${JSON.stringify(o.vacuum_position??null)}`},r=n();try{await t.hass.fetchWithAuth?.(`/api/camera_proxy/${e}`)}catch{}for(let o=0;o<8&&n()===r;o++)await new Promise(i=>setTimeout(i,100));return ql(t.hass,e)}function Uv(t,e){let n=t.t,r=l=>t.change(c=>{c.settings.vacuum_map=bg(e,l)}),o=(l,c,u)=>m`<button class="nf-btn" title=${c} aria-label=${c} ?disabled=${!t.admin} @click=${()=>r(u)}>${l}</button>`,[i,s,a]=[n("robot_cal_nudge_move"),n("robot_cal_nudge_turn"),n("robot_cal_nudge_grow")];return m`${R(n("robot_cal_nudge"),"nf-wide")}
    <div class="nf-wide" style="display:flex;flex-wrap:wrap;gap:6px">
      ${o("\u2190",i,{move:[-.1,0]})}${o("\u2192",i,{move:[.1,0]})}${o("\u2191",i,{move:[0,-.1]})}${o("\u2193",i,{move:[0,.1]})}
      ${o("\u27F2",s,{turn:-1})}${o("\u27F3",s,{turn:1})}${o("\u2212",a,{grow:.99})}${o("+",a,{grow:1.01})}
    </div>`}function jv(t,e){let n=t.t,r=t.doc.settings.vacuum_map??null,o=t.hass?ql(t.hass,ps(t.hass)):{at:null,dock:null},i=r?Math.hypot(r.gb[0]-r.ga[0],r.gb[1]-r.ga[1]):0,s=r&&i>0?Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])/i:0,a=()=>{t.pickPoint(h=>{h&&Gv(t).then(p=>{if(!p.at||!p.dock)return;let f={plan:[e.x,e.z],grid:p.dock},_=mg(f,{plan:h,grid:p.at},r?.mirror??!1);_.cal&&t.change(b=>{b.settings.vacuum_map=_.cal})})})},l=t.hass?ps(t.hass):null,c=t.hass?gg(t.hass,l):[],u=t.doc.floors.find(h=>h.furniture.some(p=>p.id===e.id)),d=()=>{if(!u)return;let h=_g(u.rooms,c,r?.mirror??!1);if(h.cal){let p=h.cal;t.change(f=>{f.settings.vacuum_map=p})}else alert(n(h.reason==="rooms"?"robot_cal_rooms_none":"robot_cal_rooms_bad",{n:h.matched.length}))};return ut(R(o.at&&o.dock?r?n("robot_cal_done",{m:s.toFixed(2)}):n("robot_cal_none"):n("robot_cal_need"),"nf-wide"),c.length>=2?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!u} @click=${d}>${n("robot_cal_rooms",{n:c.length})}</button>`:g,m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!o.at||!o.dock} @click=${a}>${n("robot_cal_do")}</button>`,r?D(t,n("robot_cal_mirror"),!!r.mirror,h=>t.change(p=>{p.settings.vacuum_map={...r,mirror:h}})):g,r?Uv(t,r):g,r?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>t.change(h=>{h.settings.vacuum_map=null})}>${n("robot_cal_forget")}</button>`:g,R(n("robot_cal_hint"),"nf-wide"))}function Zv(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=Jn(o),s=o.floors.flatMap(a=>a.furniture.filter(l=>i.has(l.id)).map(l=>[l.id,`${l.name||r("furn_meter")} \xB7 ${a.name}`]));return ut(O(t,r("meter_parent"),go(o,e)??"",[["",r("meter_main")],...s],a=>n.update({parent_meter:a||null}),{wide:!0}),R(r("meter_device_hint"),"nf-wide"))}function qv(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=o.floors.flatMap(c=>c.furniture.filter(u=>cp(o,e,u)).map(u=>[u.id,`${u.name||r("furn_meter")} \xB7 ${c.name}`])),s=!!yn(o,e),a=e.meter_floors??[],l=(c,u)=>n.update({meter_floors:u?[...a.filter(d=>d!==c),c]:a.filter(d=>d!==c)});return ut(O(t,r("meter_parent"),s?e.parent_meter:"",[["",r("meter_parent_none")],...i],c=>n.update({parent_meter:c||null}),{wide:!0}),s?D(t,r("energy_invert"),!!e.meter_invert,c=>n.update({meter_invert:c})):g,s?m`<div class="nf-sub nf-wide">${r("meter_floors")}</div>${o.floors.map(c=>D(t,c.name,a.includes(c.id),u=>l(c.id,u)))}`:g,R(r("meter_sub_hint"),"nf-wide"))}function yg(t,e,n,r){let o=t.t,i=n==="mail"?s=>/^(binary_sensor|sensor|input_boolean)\./.test(s):s=>/^(sensor|binary_sensor|calendar)\./.test(s);return m`<div class="nf-form nf-links">
    ${I(t,o(`care_entity_${n}`),e.care_entity??null,void 0,H(t.hass,i),s=>r.update({care_entity:dt(s)}))}
    ${n==="plant"?A(t,o("care_thirsty_below"),e.thirsty_below??20,s=>r.update({thirsty_below:Math.min(90,Math.max(1,Math.round(s)))}),1,1):g}
    ${R(o(`care_hint_${n}`),"nf-wide")}
  </div>`}function wg(t,e,n){let r=t.t;return m`<div class="nf-form nf-links">
    ${I(t,r("furn_cover_entity"),e.cover_entity??null,void 0,H(t.hass,o=>o.startsWith("cover.")),o=>n.update({cover_entity:dt(o)}))}
    ${D(t,r("furn_cover_inverted"),!!e.cover_inverted,o=>n.update({cover_inverted:o||void 0}),{title:r("furn_cover_inverted_hint")})}
    ${R(r("furn_cover_hint"),"nf-wide")}
  </div>`}function vg(t,e,n,r){let o=t.t,i=/socket/.test(e.type),s=H(t.hass,c=>/^(light|switch|input_boolean|fan)\./.test(c)),a=e.gang_entities??[],l=c=>u=>{let d=Array.from({length:n},(h,p)=>a[p]??null);d[c]=dt(u),r.update({gang_entities:d})};return m`<div class="nf-form nf-links">
    ${Array.from({length:n},(c,u)=>I(t,n===1?o(i?"gang_socket_one":"gang_switch_one"):o(i?"gang_socket":"gang_switch",{n:u+1}),a[u]??null,void 0,s,l(u)))}
    ${R(o(i?"gang_socket_hint":"gang_switch_hint"),"nf-wide")}
  </div>`}function Yv(t,e,n){let r=t.t,o=H(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return ut(I(t,r("fridge_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:dt(i)})),I(t,r("freezer_temp"),e.temp_entity2??null,void 0,o,i=>n.update({temp_entity2:dt(i)})),R(r("fridge_temp_hint"),"nf-wide"))}function Xl(t,e,n){let r=t.t,o=H(t.hass,u=>{let d=t.hass?.states[u]?.attributes;return u.startsWith("sensor.")&&(d?.device_class==="temperature"||d?.unit_of_measurement==="\xB0C"||d?.unit_of_measurement==="\xB0F")}),i=e.temps??[],s=(u,d)=>{let h=[...i];h[u]={label:h[u]?.label??"",entity:h[u]?.entity??"",...d};let p=h.filter(f=>f.entity&&f.entity!=="none");n.update({temps:h.some(f=>f.entity===""&&f.label)?h:p.length?p:void 0})},a=u=>{let d=i.filter((h,p)=>p!==u);n.update({temps:d.length?d:void 0})},l=Math.min(qu,i.length+1),c=Array.from({length:l},(u,d)=>m`${U(t,r("temp_label",{n:d+1}),i[d]?.label??"",h=>s(d,{label:h}),{maxlength:40,placeholder:r("temp_label_example")})}
      ${I(t,r("temp_sensor",{n:d+1}),i[d]?.entity??null,void 0,o,h=>dt(h)?s(d,{entity:h}):a(d))}`);return ut(I(t,r("device_temp"),e.temp_entity??null,void 0,o,u=>n.update({temp_entity:dt(u)})),R(r("device_temp_hint"),"nf-wide"),m`${c}${R(r("device_temps_hint"),"nf-wide")}`)}function Xv(t,e,n){let r=t.t,o=e.extra_lights??[],i=H(t.hass,l=>l.startsWith("light.")&&l!==e.entity&&l!==e.color_entity),s=l=>c=>{let u=[...o];c&&c!=="none"?u[l]=c:u.splice(l,1),n.update({extra_lights:u.filter(Boolean).length?u.filter(Boolean):void 0})},a=Math.min(4,o.length+1);return m`${Array.from({length:a},(l,c)=>I(t,r("lamp_extra_light",{n:c+2}),o[c]??null,void 0,i,s(c)))}${R(r("lamp_extra_hint"),"nf-wide")}`}function Jv(t,e,n){let{hass:r,t:o}=t,i=e.screen_sources??[],s=H(r,u=>u.startsWith("media_player.")||u.startsWith("remote.")),a=H(r,u=>!!r&&cg(r,u)),l=u=>d=>{let h=[...i];d&&d!=="none"?h[u]=d:h.splice(u,1),n.update({screen_sources:h.filter(Boolean).length?h.filter(Boolean):void 0})},c=Math.min(4,i.length+1);return m`${I(t,o("screen_device"),e.screen_device??null,void 0,s,u=>n.update({screen_device:dt(u)}))}${Array.from({length:c},(u,d)=>I(t,o("screen_source",{n:d+1}),i[d]??null,void 0,a,l(d)))}${R(o("screen_sources_hint"),"nf-wide")}`}function kg(t,e,n){let{hass:r}=t;if(!r)return g;let o=t.t,i=he(e.type),s=Vv(e,r),a=H(r,f=>Gn(r,f)),l=f=>_=>n.update({[f]:dt(_)}),c=f=>H(r,f),u=(t.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),d=!!e.entity&&e.entity!=="none",h=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],p=e.type==="ceiling_fan"?"fan_hint":i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":In(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${ut(e.type==="grid_point"?R(o("grid_point_hint"),"nf-wide"):I(t,o(s.label),e.entity??null,fs(t,e,"entity"),c(s.accept),f=>n.update({entity:f})),e.type==="ceiling_fan"?I(t,o("furn_fan_entity"),e.fan_entity??null,fs(t,e,"fan"),c(f=>f.startsWith("fan.")),f=>n.update({fan_entity:f})):g,!i&&!Ue.includes(e.type)&&!Dn(e.type)?Yl(t,e,n):g,i&&d?m`${I(t,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),l("color_entity"))}${R(o("furn_color_entity_hint"),"nf-wide")}`:g,i&&d?Xv(t,e,n):g,i?mn(t,e.glow_scale,f=>n.update({glow_scale:f})):g,i?ds(t,e,sg(r,e,e.entity&&e.entity!=="none"?e.entity:fs(t,e,"entity"))?.attributes.effect_list,n.update):g,Dn(e.type)?mn(t,e.ambilight,f=>n.update({ambilight:f}),{label:"ambilight",hint:"ambilight_hint",lowest:0}):g,In(e.type)||di(e.type)?mn(t,e.sound_rings,f=>n.update({sound_rings:f}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g,Dn(e.type)?Jv(t,e,n):g,e.type==="grid_point"?g:I(t,o(yn(t.doc,e)?"meter_sub_power":Kv(e.type)),e.power??null,fs(t,e,"power"),a,f=>n.update({power:f})))}
    ${md(e.type)?Yv(t,e,n):i||e.type==="grid_point"?g:Xl(t,e,n)}
    ${e.type==="meter"?qv(t,e,n):g}
    ${e.type==="inverter"||e.type==="home_battery"?Zv(t,e,n):g}
    ${e.type==="meter"&&!yn(t.doc,e)?ut(I(t,o("furn_export"),e.export??null,void 0,a,l("export")),R(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(t.doc.settings.roof.solar??[]).length>0?R(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?ut(I(t,o("furn_soc"),e.soc??null,void 0,c(f=>me(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),l("soc")),I(t,o("furn_charge"),e.charge??null,void 0,a,l("charge")),R(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?ut(I(t,o("furn_wallbox_status"),e.status??null,void 0,c(f=>ki(f)||me(f)),l("status"))):g}
    ${!i||e.entity?m`${D(t,o("device_confirm"),!!e.confirm,f=>n.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${Zn(t,e.marker??null,f=>n.update({marker:f}))}${At(t,e.icon,f=>n.update({icon:f}))}${i?g:qn(t,e.pin_offset,f=>n.update({pin_offset:f}))}</div>`:g}
    ${e.type==="robot_vacuum"?ut(I(t,o("furn_robot_room"),e.room_sensor??null,yd(r,Ze(r,t.doc.floors).get(e.id)?.entity??null,null),c(me),f=>n.update({room_sensor:f}))):g}
    ${e.type==="robot_vacuum"&&d?jv(t,e):g}
    ${e.type==="fridge_smart"?m`${ut(I(t,o("furn_door_left"),e.door_left??null,void 0,h,f=>n.update({door_left:f})),I(t,o("furn_door_right"),e.door_right??null,void 0,h,f=>n.update({door_right:f})))}
        ${R(o("fridge_hint"))}`:g}
    ${R(o(p))}`}var Qv=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,ek=/^(sensor|input_select|select|input_text)\./,tk=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,nk=(t,e)=>t.flatMap(n=>n.items.filter(r=>r.vehicle).map(r=>({id:fe(n.id,r.id),label:`${nt(r,fe(n.id,r.id),e)} \xB7 ${Be(n,e)}`})));function xg(t,e){return e.startsWith("device_tracker.")?t.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function $g(t,e,n,r){return m`<select ?disabled=${!t.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!n}>${t.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===n}>${o.label}</option>`)}
  </select>`}function rk(t,e,n,r){let o=t.t,i=e.type_entity?t.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=u=>r.update({types:u}),c=(u,d)=>l(a.map((h,p)=>p===u?{...h,...d}:h));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((u,d)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!t.admin} @change=${h=>c(d,{state:h.target.value})} />
        ${$g(t,n,u.vehicle,h=>c(d,{vehicle:h??""}))}
        <button class="nf-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>l(a.filter((h,p)=>p!==d))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${t.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:n[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function Sg(t,e,n,r){let o=t.t,i=nk(n,t.hass?.language??"en"),s=H(t.hass,f=>Qv.test(f)).sort((f,_)=>xg(t,f.id)-xg(t,_.id)),a=H(t.hass,f=>ek.test(f)),l=e.car??{},c=t.floor,u=c?.rooms.find(f=>f.points.length>=3&&N([e.x,e.z],f.points)),d=e.vehicle?Z(e.vehicle):void 0,h=d?d.size[2]*(e.scale??1):0,p=!!u&&!!c&&h>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${I(t,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${$g(t,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?g:R(o("parking_no_pack"),"nf-wide")}
      ${A(t,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${I(t,o("parking_type_entity"),e.type_entity??null,void 0,a,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?rk(t,e,i,r):g}
    </div>
    ${p?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:q(t.hass,h,2),room:q(t.hass,c.height,2)})}</p>`:g}
    ${R(o("parking_hint"))}
    ${t.hass?m`${I(t,o("live_car_device"),l.device??null,null,H(t.hass,f=>tk.test(f)),f=>r.update({car:{...l,device:f}}))}
        ${R(o("live_car_device_hint"),"nf-wide")}
        ${I(t,o("live_car_departure_entity"),l.departure??null,void 0,H(t.hass,f=>/^(sensor|input_datetime|time|datetime)\./.test(f)),f=>r.update({car:{...l,departure:f==="none"?null:f}}))}`:g}`}function Mg(t,e){let r=wn(t,e.w,e.d,e.h).treads.findIndex(o=>o.landing);return r>=0?r+1:1}function ok(t){let e=wn(yo(t),t.w,t.d,t.h),n=e.treads.map(Ui),r=0;for(let i=1;i<n.length;i++)r+=Math.hypot(n[i][0]-n[i-1][0],n[i][1]-n[i-1][1]);let o=n.length>1?r/(n.length-1):0;return{rise:e.rise,going:o,measure:2*e.rise+o,steps:e.steps}}function ik(t){let[e,n]=al[t],r=wn({..._t,shape:t},e,n,2.8),o=26/Math.max(e,n);return m`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${r.treads.map(i=>F`<polygon points=${i.poly.map(([s,a])=>`${s*o},${a*o}`).join(" ")} fill=${i.landing?"currentColor":"none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`}function Rg(t,e,n){let r=t.t,o=yo(e),i=f=>n.update({stair:{...o,...f}}),s=o.shape!=="straight",a=f=>{let[_,b]=al[f];n.update({stair:{...o,shape:f,run_width:null},w:_,d:b})},l=t.floor?t.doc.floors.filter(f=>f.elevation<t.floor.elevation).sort((f,_)=>_.elevation-f.elevation)[0]:void 0,c=t.floor?t.doc.floors.filter(f=>f.elevation>t.floor.elevation).sort((f,_)=>f.elevation-_.elevation)[0]:void 0,u=f=>{let _=f?l&&t.floor?t.floor.elevation-l.elevation:null:c&&t.floor?c.elevation-t.floor.elevation:null;n.update({stair:{...o,down:f},..._?{h:Math.round(_*1e3)/1e3}:{}})},d=ok(e),h=f=>q(t.hass,f*100,1),p=d.measure>=.59&&d.measure<=.65&&d.rise<=.21;return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${r("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${r("stair_shape")}>
        ${rl.map(f=>m`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${f===o.shape} title=${r(`stair_shape_${f}`)} ?disabled=${!t.admin} @click=${()=>a(f)}>
            ${ik(f)}<span>${r(`stair_shape_${f}`)}</span>
          </button>`)}
      </div>
    </div>
    ${s?O(t,r("stair_turn"),o.turn,[["left",r("stair_turn_left")],["right",r("stair_turn_right")]],f=>i({turn:f})):""}
    ${O(t,r("stair_build"),o.build,ol.map(f=>[f,r(`stair_build_${f}`)]),f=>i({build:f}))}
    ${o.build!=="solid"?D(t,r("stair_risers"),o.risers,f=>i({risers:f}),{wide:!1}):""}
    ${A(t,r("stair_steps"),o.steps??d.steps,f=>i({steps:Math.round(Math.min(40,Math.max(2,f)))}),1,2)}
    ${o.steps!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({steps:null})}>${r("height_auto")}</button>`:""}
    ${s&&o.shape!=="spiral"?m`${A(t,r("stair_run_width"),o.run_width??wn(o,e.w,e.d,e.h).flight,f=>i({run_width:Math.max(.4,f)}),.01,.4)}
        ${o.run_width!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({run_width:null})}>${r("height_auto")}</button>`:""}`:""}
    ${o.shape==="l"||o.shape==="u"?m`${A(t,r("stair_landing_after"),o.landing_after??Mg(o,e),f=>i({landing_after:Math.round(Math.min(d.steps-1,Math.max(1,f)))}),1,1)}
        ${o.landing_after!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({landing_after:null})}>${r("height_auto")}</button>`:""}
        ${R(r("stair_landing_hint",{h:h((o.landing_after??Mg(o,e))*Math.abs(e.h)/d.steps)}),"nf-wide")}`:""}
    ${O(t,r("stair_rail"),o.rail,il.map(f=>[f,r(`stair_rail_${f}`)]),f=>i({rail:f}))}
    ${D(t,r("stair_down"),o.down,u,{title:r("stair_down_hint")})}
    ${O(t,r("stair_opening"),o.opening,sl.map(f=>[f,r(`stair_opening_${f}`)]),f=>i({opening:f}),{wide:!0,title:r("stair_opening_hint")})}
    <p class="nf-sub nf-wide ${p?"":"nf-pack-error"}">
      ${r("stair_measures",{steps:d.steps,rise:h(d.rise),going:h(d.going),measure:h(d.measure)})} ${p?"\u2713":`\u2013 ${r("stair_uncomfortable")}`}
    </p>
    ${R(r(o.down?"stair_down_note":o.opening==="headroom"?"stair_up_note":"stair_up_note_plain"),"nf-wide")}
  </div>`}var sk=new Set(["parking","stairwell","rug","grid_point"]),ak=new Set(["floor_opening","stairs","chimney"]),lk={inverter:{label:"furn_model",values:["","slim","hybrid"],text:t=>`inverter_${t||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:t=>`battery_${t||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:t=>`pendant_${t||"shade"}`},sofa:{label:"sofa_shape",values:["","l","u"],text:t=>`sofa_${t||"straight"}`}};function ck(t,e,n,r){let o=t.hass?.language??"en",i=n.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${t.t("furniture_type")}
    <select ?disabled=${!t.admin} @change=${s=>r.update({type:s.target.value})}>
      ${Qo.map(s=>m`<option value=${s} ?selected=${s===e.type}>${t.t(`furn_${s}`)}</option>`)}
      ${n.map(s=>m`<optgroup label=${Be(s,t.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${fe(s.id,a.id)} ?selected=${fe(s.id,a.id)===e.type}>${nt(a,fe(s.id,a.id),o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${ze(t.hass,e.type)}</option>`:g}
    </select>
  </label>`}function uk(t,e,n){let r=Z(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=t.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>Gh(a,o);return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${t.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!t.admin} @click=${()=>n.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function dk(t,e,n){let r=lk[e.type];if(!r)return g;let o=r.values.map(i=>[i,t.t(r.text(i))]);return m`<div class="nf-form">${O(t,t.t(r.label),e.variant??"",o,i=>n.update({variant:i||null,...e.type==="sofa"&&i&&e.d<1.4?{d:1.7,w:Math.max(e.w,i==="u"?3:2.4)}:{}}),{wide:!0})}</div>`}function hk(t,e,n){let r=t.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${t.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t.admin} placeholder=${o} @change=${i=>n.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?D(t,t.t("show_name"),!!e.show_name,i=>n.update({show_name:i||void 0})):g}`}function pk(t,e,n){let r=t.t,o=s=>n.update(s),i=t.floor;return m`${A(t,r("x"),e.x,s=>o({x:s}))} ${A(t,r("z"),e.z,s=>o({z:s}))}
    ${A(t,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${A(t,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${A(t,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${A(t,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${A(t,r("tilt_x"),e.tilt_x??0,s=>o({tilt_x:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${A(t,r("tilt_z"),e.tilt_z??0,s=>o({tilt_z:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${he(e.type)?g:D(t,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${A(t,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${e.upright?g:A(t,r("strip_rise"),e.rise??0,s=>o({rise:Math.max(-80,Math.min(80,Math.round(s)))}),5)}
        ${D(t,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${ei(e)&&i?m`${A(t,r("mount_height"),e.mount_y??Ct(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}
    ${fk(e)&&i?m`${A(t,r("ceiling_here"),Uo(i,e),s=>o({ceiling_y:Math.abs(s-pt(i,e.x,e.z))<.005?null:Math.max(.5,s)}),.01,.5)}
        ${e.ceiling_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({ceiling_y:null})}>${r("height_auto")}</button>`:g}
        ${Eg(t,e)!==null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${r("ceiling_slope_hint")} @click=${()=>o({ceiling_y:Eg(t,e)})}>📐 ${r("ceiling_slope")}</button>`:g}
        ${R(r("ceiling_here_hint"),"nf-wide")}`:g}`}function Eg(t,e){let n=t.floor;if(!n)return null;let r=Wr(t.doc,e.x,e.z);if(r===null)return null;let o=Math.round((r-n.elevation)*1e3)/1e3;return o>.5&&o<pt(n,e.x,e.z)-.02?o:null}var fk=t=>Gs.has(t.type)||Z(t.type)?.mount==="ceiling";function mk(t,e,n){if(e.type==="stairs"&&e.stair)return g;if(e.type==="stairs")return m`${R(t.t("stairs_hint"))}${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-primary" title=${t.t("stair_upgrade_hint")} @click=${()=>n.update({stair:{..._t}})}>${t.t("stair_upgrade")}</button></div>`:g}`;if(e.type!=="stairwell")return g;let r=t.floor&&!t.floor.rooms.some(o=>o.points.length>=3&&Yp(Ar(e),o.points));return m`${R(t.t("stairwell_hint"))}${r?m`<p class="nf-sub nf-pack-error">${t.t("stairwell_outside")}</p>`:g}`}function gk(t,e,n){if(!t.admin)return g;let r=t.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking",i=t.doc.floors.filter(s=>s.id!==t.floor?.id);return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>n.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>n.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>n.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn" title=${r("furn_task_hint")} @click=${()=>n.addTask()}>✎ ${r("furn_task")}</button>
    <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button>
  </div>
  ${i.length?m`<div class="nf-form">${O(t,r("furn_to_floor"),"",[["","\u2013"],...i.map(s=>[s.id,s.name])],s=>s&&n.toFloor(s),{wide:!0,title:r("furn_to_floor_hint")})}</div>`:g}`}function _k(t,e,n){let r=e.tap??null,o=[["",t.t("furn_tap_default")],...Zo.map(c=>[c,t.t(`own_action_${c}`)])],i=c=>n.update({tap:{action:r?.action??"navigate",target:r?.target??null,data:r?.data??null,...c}}),s=()=>!r||r.action==="fire_dom_event"?g:r.action==="service"?Si(t,t.t("own_target_service"),r.target??null,c=>i({target:c})):r.action==="more_info"?I(t,t.t("own_target_more_info"),r.target??null,void 0,H(t.hass,()=>!0),c=>i({target:c&&c!=="none"?c:null})):U(t,t.t(`own_target_${r.action}`),r.target??"",c=>i({target:c||null}),{wide:!0,placeholder:Ba[r.action]}),a=c=>{if(!c||c==="none")return;let u=c.split(".")[0],d=u==="scene"?"scene.turn_on":u==="script"?"script.turn_on":u==="light"?"light.toggle":"homeassistant.toggle",h=u==="light"?"lightbulb":u==="switch"||u==="input_boolean"?"power-socket-eu":"lightbulb-on";n.update({...u==="light"||u==="switch"||u==="input_boolean"?{entity:c}:{},tap:{action:"service",target:d,data:{entity_id:c}},icon:e.icon??h,marker:e.marker??"always"})},l=typeof r?.data?.entity_id=="string"?r.data.entity_id:null;return m`<div class="nf-form">
    ${I(t,t.t("furn_quick_control"),l,void 0,H(t.hass,c=>/^(light|switch|scene|script|input_boolean)\./.test(c)),a)}
    ${O(t,t.t("furn_tap"),r?.action??"",o,c=>c?i({action:c}):n.update({tap:null}),{wide:!0,title:t.t("furn_tap_hint")})}
    ${s()}
    ${r&&r.action==="service"?Mi(t,r.target,r.data,c=>i({data:c}),e.entity):g}
    ${r&&(r.action==="service"||r.action==="fire_dom_event")?Va(t,r,c=>i({data:c})):g}
    ${r&&!Ht(e.type)&&!Z(e.type)?.gangs?m`${Zn(t,e.marker??null,c=>n.update({marker:c}))}${At(t,e.icon,c=>n.update({icon:c}))}${qn(t,e.pin_offset,c=>n.update({pin_offset:c}))}`:g}
  </div>`}function bk(t,e,n){let r=t.t,o=e.picture??"",i=o.startsWith("image:"),s=async l=>{let c=l.target,u=c.files?.[0];if(c.value="",!u||!t.hass)return;let{data:d}=await tr(u),h=L("img");await Dt(t.hass,h,d),n.update({picture:`image:${h}`})},a=H(t.hass,l=>/^(image|camera|media_player)\./.test(l));return m`<div class="nf-form nf-links">
    ${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(i?"picture_replace":"picture_upload")}<input type="file" accept="image/*" hidden @change=${s} /></label>`:g}
    ${i?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.update({picture:null})}>${r("delete")}</button></p>`:m`${U(t,r("picture_url"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?"":o,l=>n.update({picture:l||null}),{wide:!0,placeholder:"/local/holiday.jpg"})}
        ${I(t,r("picture_entity"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?o:null,void 0,a,l=>n.update({picture:l&&l!=="none"?l:null}))}`}
    ${A(t,r("picture_border"),e.picture_border??0,l=>n.update({picture_border:Math.max(0,Math.min(40,Math.round(l)))||null}),1,0)}
    ${O(t,r("picture_fit"),e.picture_fit??"cover",[["cover",r("picture_fit_cover")],["contain",r("picture_fit_contain")]],l=>n.update({picture_fit:l==="contain"?"contain":null}))}
    ${R(r("picture_hint"),"nf-wide")}
  </div>`}var yk=/^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;function wk(t,e,n){let r=t.t,o=e.show_when??null,i=s=>n.update({show_when:{entity:o?.entity??"",state:o?.state??null,invert:o?.invert||void 0,...s}});return m`<div class="nf-form">
    ${I(t,r("furn_show_when"),o?.entity||null,void 0,H(t.hass,s=>yk.test(s)),s=>s&&s!=="none"?i({entity:s}):n.update({show_when:null}))}
    ${o?.entity?m`${U(t,r("furn_show_when_state"),o.state??"",s=>i({state:s||null}),{wide:!0,placeholder:t.hass?.states[o.entity]?.state??"on"})}
        ${D(t,r("furn_show_when_invert"),!!o.invert,s=>i({invert:s||void 0}))}`:g}
    ${R(r("furn_show_when_hint"),"nf-wide")}
  </div>`}function vk(t,e,n){let r=t.t,o=Hu.map(a=>[a,r(`fmat_${a}`)]),i=[...new Set((t.floor?.furniture??[]).map(a=>a.group).filter(a=>!!a))].sort(),s=async a=>{let l=a.target,c=l.files?.[0];if(l.value="",!c||!t.hass?.fetchWithAuth)return;let u=`m_${e.id.replace(/[^a-z0-9_]/gi,"_").toLowerCase()}`.slice(0,48),d=await c.arrayBuffer(),h=await bt(),{glb:p}=await h.prepareModel(d,{turns:0,paint:[],maxTriangles:15e3});(await t.hass.fetchWithAuth(kn(u),{method:"POST",body:p})).ok&&n.update({mesh:u})};return m`<div class="nf-form">
    ${ve(t,r("furn_color"),e.color,"#8b7355",a=>n.update({color:a}))}
    ${O(t,r("furn_material"),e.material??"auto",o,a=>n.update({material:a==="auto"?null:a}))}
    ${t.admin?m`<div class="nf-actions nf-wide">
          <label class="nf-btn nf-upload" title=${r("furn_mesh_hint")}>🧊 ${r("furn_mesh_upload")}<input type="file" accept=".glb,.gltf,.dae,.obj,.stl" hidden @change=${s} /></label>
          ${e.mesh?m`<button class="nf-btn nf-danger" @click=${()=>n.update({mesh:null})}>${r("furn_mesh_remove")}</button>`:g}
        </div>`:g}
    <label class="nf-field nf-wide" title=${r("furn_group_hint")}
      >${r("furn_group")}
      <input type="text" list="nf-furn-groups" maxlength="64" .value=${e.group??""} placeholder=${r("furn_group_placeholder")} ?disabled=${!t.admin} @change=${a=>n.update({group:a.target.value.trim()||null})} />
    </label>
    <datalist id="nf-furn-groups">${i.map(a=>m`<option value=${a}></option>`)}</datalist>
    ${e.group&&t.admin?m`<div class="nf-actions nf-wide">
          ${n.rotateGroup?m`<button class="nf-btn" @click=${()=>n.rotateGroup(-90)}>↺ ${r("furn_group_rotate")}</button><button class="nf-btn" @click=${()=>n.rotateGroup(90)}>↻ ${r("furn_group_rotate")}</button>`:g}
          ${n.duplicateGroup?m`<button class="nf-btn" @click=${()=>n.duplicateGroup()}>⧉ ${r("furn_group_duplicate")}</button>`:g}
          <button class="nf-btn" @click=${()=>n.update({group:null})}>${r("furn_group_leave")}</button>
        </div>`:g}
  </div>`}function So(t,e,n){let r=Z(e.type)?.gangs??0,o=r?vg(t,e,r,n):Ht(e.type)?kg(t,e,n):sk.has(e.type)?g:m`<div class="nf-form nf-links">${Yl(t,e,n)}</div>${ak.has(e.type)?g:Xl(t,e,n)}`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||t.t("furniture")}</h3>${n.lockButton}</div>
    <div class="nf-form">${hk(t,e,n)} ${ck(t,e,n.packs,n)} ${pk(t,e,n)}</div>
    ${mk(t,e,n)} ${e.type==="stairs"&&e.stair?Rg(t,e,n):g} ${dk(t,e,n)} ${uk(t,e,n)} ${vk(t,e,n)}
    ${o} ${e.type.endsWith(":sprinkler")?m`<div class="nf-form">${A(t,t.t("spray_reach"),e.spray??3,i=>n.update({spray:Math.min(15,Math.max(.5,i))}),.5,.5)}${R(t.t("spray_hint"),"nf-wide")}</div>`:g}
    ${pu(e.type)?bk(t,e,n):g}
    ${Z(e.type)?.pet?m`<div class="nf-form nf-links">${I(t,t.t("pet_room_sensor"),e.room_sensor??null,void 0,H(t.hass,i=>/^(sensor|device_tracker|input_select|select)\./.test(i)),i=>n.update({room_sensor:i&&i!=="none"?i:null}))}${R(t.t("pet_room_hint"),"nf-wide")}</div>`:g}
    ${Bs(e.type)?yg(t,e,Bs(e.type),n):g} ${Ws(Z(e.type))?wg(t,e,n):g} ${e.type==="parking"?Sg(t,e,n.packs,n):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&t.admin?m`<section>${R(t.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>n.toSpot(e)}>🅿 ${t.t("vehicle_to_spot")}</button></div></section>`:g}
    ${t.admin?_k(t,e,n):g} ${wk(t,e,n)} ${gk(t,e,n)}
  </section>`}var kk=new Set(["cover","switch","button","input_button","input_boolean","script"]),xk=["door","window","opening","garage_door"],$k=/griff|handle|fenster|window|drehgriff/i;function Sk(t){let e=[null,15,30,45,60,90,120,180];return t&&!e.includes(t)&&e.push(t),e.sort((n,r)=>(n??0)-(r??0))}function Mk(t){let{hass:e}=t,n=i=>e?.states[i],r=i=>n(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&xk.includes(r(i)??"");return{covers:H(e,i=>i.startsWith("cover.")),drives:H(e,i=>kk.has(i.slice(0,i.indexOf(".")))),positions:H(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(n(i)?.state))),contacts:H(e,i=>o(i)||me(i)&&sa(n(i))!==null),plainContacts:H(e,o),handles:H(e,i=>i.startsWith("binary_sensor.")?typeof n(i)?.attributes.window_state=="string":me(i)&&(sa(n(i))!==null||$k.test(`${i} ${K(e,i)}`))),numbers:H(e,me),locks:H(e,i=>i.startsWith("lock."))}}function Ql(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[n]=null);return zr(t.hass,r).get(e.id)?.[n]??null}var Tt=t=>t==="none"?null:t;function Rk(t,e,n){let r=e.type==="door"?js:Zs,o=xt({type:e.type,style:null},n.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",t.t("style_auto",{style:t.t(`style_${o}`)})],...r.map(a=>[a,t.t(`style_${a}`)])];return O(t,t.t("opening_style"),i,s,a=>n.update({style:a||null}),{wide:!0})}function Jl(t,e,n,r,o){return m`<label class="nf-field"
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
  </label>`}function Ek(t,e,n){if(e.type!=="door")return g;let r=xt(e,n.isExterior(e));return r==="sidelight"?m`${D(t,t.t("sidelight_hinge"),!!e.sidelight_hinge,o=>n.update({sidelight_hinge:o}),{wide:!1,title:t.t("sidelight_hinge_hint")})}
      ${Jl(t,e,"sidelight_width","sidelight_width",n)}`:r==="sidelights"?m`${Jl(t,e,"sidelight_width","sidelight_width_left",n)} ${Jl(t,e,"sidelight_width2","sidelight_width_right",n)}`:g}function Ak(t,e,n){return e.type!=="window"||xt(e,n.isExterior(e))!=="glass_wall"?g:m`<label class="nf-field"
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
    ${R(t.t("glass_panes_hint"),"nf-wide")}`}function Ag(t,e,n,r,o){let i=n===1,s=t.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),d=f=>{let _=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},..._})},h=f=>r.update(i?{contact:f}:{contact2:Tt(f)}),p=e.tilt_angle&&e.tilt_angle!=="none";return m`${O(t,s("sensor_kind"),c,u,d,{wide:!0})}
    ${c==="handle"?I(t,s("handle_entity"),l,void 0,o.handles,f=>h(f==="none"?i?"none":null:f)):I(t,s("contact_entity"),l,i?Ql(t,e,"contact"):void 0,o.plainContacts,h)}
    ${c==="contact_tilt"?I(t,s("tilt_entity"),a,void 0,o.contacts,f=>r.update(i?{tilt:Tt(f)}:{tilt2:Tt(f)})):g}
    ${i?m`${I(t,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:Tt(f)}))}
        ${p?m`${A(t,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${A(t,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${D(t,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:g}`:g}`}function Fk(t,e,n,r){let o=t.t,i=e.type==="window",s=Ql(t,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${I(t,o(i?"cover_entity":"door_cover"),e.cover,s,i?r.covers:r.drives,l=>n.update({cover:l}))}
    ${a?m`${I(t,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>n.update({position:Tt(l)}))}
        ${e.position?D(t,o("cover_position_invert"),!!e.position_inverted,l=>n.update({position_inverted:l})):g}
        ${D(t,o("device_confirm"),!!e.confirm,l=>n.update({confirm:l}),{title:o("cover_confirm_hint")})}
        ${i?m`${O(t,o("blind_kind"),e.blind??"roller",[["roller",o("blind_roller")],["venetian",o("blind_venetian")],["inside",o("blind_inside")],["venetian_inside",o("blind_venetian_inside")]],l=>n.update({blind:l==="roller"?null:l}))}
            ${I(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:Tt(l)}))}`:g}
        ${!i&&e.type!=="garage"?I(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:Tt(l)})):g}
        ${A(t,o("cover_my"),e.my_position??0,l=>n.update({my_position:l>0?Math.min(100,Math.round(l)):null}),5,0)}
        ${R(o("blind_hint"),"nf-wide")}`:g}`}function zk(t,e,n,r){let o=t.t,i=e.leaves===2;return m`${I(t,o(i?"contact_main":"contact_entity"),e.contact,Ql(t,e,"contact"),r.contacts,s=>n.update({contact:s}))}
    ${i&&e.type!=="garage"?I(t,o("contact_second"),e.contact2,void 0,r.contacts,s=>n.update({contact2:Tt(s)})):g}
    ${e.type==="door"?D(t,o("door_shut"),!!e.shut,s=>n.update({shut:s}),{title:o("door_shut_hint")}):g}
    ${e.type==="door"&&e.style!=="sliding"&&e.style!=="passage"?O(t,o("door_angle"),String(e.open_angle??""),Sk(e.open_angle).map(s=>[String(s??""),s?`${s}\xB0`:o("door_angle_default")]),s=>n.update({open_angle:s?Number(s):null}),{title:o("door_angle_hint")}):g}
    ${e.type==="door"?m`${I(t,o("opening_lock"),e.lock??null,void 0,r.locks,s=>n.update({lock:Tt(s)}))}${R(o("opening_lock_hint"),"nf-wide")}`:g}`}function ec(t,e,n){let r=t.t,o=Mk(t),i=Fn(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=p=>n.update(p),u=Object.keys(An).map(p=>m`<button class="nf-chip" aria-pressed=${p===i} @click=${()=>n.setPreset(e,p)}>${r(`preset_${p}`)}</button>`),d=[["left",r("hinge_left")],["right",r("hinge_right")]],h=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${n.lockButton}</div>
    ${t.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:g}
    ${t.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${A(t,r("width"),e.width,p=>c({width:Math.max(.3,p)}),.01,.3)}
      ${A(t,r("opening_position"),e.offset,p=>c({offset:Math.max(0,p)}),.01,0)}
      ${s||l&&!a?A(t,r("sill"),e.sill,p=>c({sill:Math.max(0,p)}),.01,0):g}
      ${A(t,r("opening_height"),e.height,p=>c({height:Math.max(.3,p)}),.01,.3)}
      ${a?g:Rk(t,e,n)} ${Ek(t,e,n)} ${Ak(t,e,n)}
      ${s&&e.style!=="glass_wall"?O(t,r("window_opens"),e.opens??"turn",vu.map(p=>[p,r(`window_opens_${p}`)]),p=>c({opens:p==="turn"?null:p}),{wide:!0,title:r("window_opens_hint")}):g}
      ${O(t,r("opening_mark"),e.mark==="closed"?"closed":"",h,p=>c({mark:p==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:O(t,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,d,p=>c({hinge:p}),{wide:!0})}
      ${s?O(t,r("sill_boards"),e.sill_boards??"auto",[["auto",r("sill_boards_auto")],["none",r("sill_boards_none")],["inside",r("sill_boards_inside")],["outside",r("sill_boards_outside")]],p=>c({sill_boards:p==="auto"?null:p}),{wide:!0}):g}
      ${s?D(t,r("opening_rain_warning"),e.rain_warning!==!1,p=>c({rain_warning:p?void 0:!1}),{wide:!0}):g}
      ${s&&n.isBelowGround?.(e)?D(t,r("opening_light_well"),e.light_well!==!1,p=>c({light_well:p?null:!1}),{wide:!0}):g}
      ${Fk(t,e,n,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${Ag(t,e,1,n,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${Ag(t,e,2,n,o)}`:g}`:zk(t,e,n,o)}
    </div>
    ${R(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function ar(t){let e=t.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(n=>m`<button aria-pressed=${n.id===t.floorId} @click=${()=>t.setFloorId(n.id)}>${n.name}</button>`)}</div>`}function lr(t,e,n){return t.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${t.t("fix_hint")} @click=${n}>${e?`\u{1F512} ${t.t("unfix")}`:`\u{1F513} ${t.t("fix")}`}</button>`:g}function cr(t,e,n,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===n} ?disabled=${!t.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function Pt(t,e){let{t:n,doc:r,hass:o}=t,i=n(`compass_${Pa(e,r.settings.north??0)}`);if(e.key===We)return n("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${n("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${q(o,e.lu,1)} m`}let s=r.settings.roof.sections??[];if(e.side==="front")return`${n("solar_section",{n:s.findIndex(l=>l.id===e.section)+1})} \xB7 ${n("solar_front")} \xB7 ${i}`;let a=e.section?n("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):n("solar_main");return e.flat?`${a} \xB7 ${n("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var tc=(t,e)=>m`<div class="nf-h3row"><h3>${t}</h3>${e}</div>`,nc=(t,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${t}</button>`,xn=(t,e)=>n=>Math.max(t,Math.min(e,ae(n)));function Tk(t,e){let{host:n,roof:r}=t,o=n.t,i=y=>r.patchSection(y),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[l[1],l[0]]:l,d=!!n.doc.settings.lock_plan,h=(y,x,k,S=.05,$=0)=>A(n,y,x,E=>k(Math.max($,ae(E))),S,$),p=[...n.doc.floors].filter(y=>y.rooms.length>0).sort((y,x)=>x.elevation-y.elevation),f=xa(n.doc,e)?.id,_=y=>{let x=n.doc.floors.find($=>$.id===y);if(!x)return;let k=ae(x.elevation+x.height),S=k-e.base;i({base:k,eave_a:ae(e.eave_a+S),eave_b:ae(e.eave_b+S)})},b=d?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>t.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:lr(n,!!e.locked,()=>i({locked:!e.locked})),w=$u.map(y=>[y,o(`roof_shape_${y}`)]),v=(y,x)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(y)}>+ ${o("roof_dormer")} ${x}</button>`;return m`${nc(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${ar(t)}
      ${tc(`${e.dormer?o("roof_dormer"):o("roof_section")} ${Sf(n.doc.settings.roof.sections??[],e.id)}`,n.admin?b:g)}
      ${O(n,o("roof_shape"),e.shape,w,y=>i({shape:y,...y==="gable"||y==="hip"||y==="halfhip"?{}:{ends:null}}),{wide:!0})}
      ${e.shape==="gable"||e.shape==="hip"||e.shape==="halfhip"?Lk(n,e,i):g}
      ${s?g:cr(n,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,y=>i({axis:y}))}
      ${D(n,o("roof_open"),!!e.open,y=>i({open:y}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?h(o("roof_height"),e.eave_a,y=>i({eave_a:y,eave_b:y})):m`${h(`${o("roof_eave")} ${a?"":c}`,e.eave_a,y=>i({eave_a:y}))}
            ${a?g:h(`${o("roof_eave")} ${u}`,e.eave_b,y=>i({eave_b:y}))}
            ${h(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,y=>i({pitch_a:Math.min(75,y)}),1)}
            ${a?g:h(`${o("roof_pitch_short")} ${u}`,e.pitch_b,y=>i({pitch_b:Math.min(75,y)}),1)}`}
        ${h(o("roof_base"),e.base,y=>i({base:y}))}
        ${e.points?.length?g:A(n,o("roof_rotation"),e.rotation??0,y=>i({rotation:(Math.round(y)%360+540)%360-180||null}),1)}
        ${O(n,o("roof_on_floor"),f??"",p.map(y=>[y.id,y.name]),_,{title:o("roof_on_floor_hint")})}
        ${R(o("roof_base_hint"),"nf-wide")}
        ${h(o("roof_overhang"),e.overhang??n.doc.settings.roof.overhang,y=>i({overhang:Math.min(2,y)}))}
      </div>
      <details class="nf-section" ?open=${!!e.overhang_sides}>
        <summary>${o("roof_overhang_sides")}</summary>
        <div class="nf-form">
          ${["a","b","u0","u1"].map(y=>h(o(`roof_overhang_${y}`),Cr(n.doc,e,e.overhang??n.doc.settings.roof.overhang)[y],x=>i({overhang_sides:{...e.overhang_sides??{},[y]:Math.min(2,Math.max(0,x))}})))}
          ${n.admin&&e.overhang_sides?m`<button class="nf-btn" @click=${()=>i({overhang_sides:null})}>${o("roof_overhang_auto")}</button>`:g}
        </div>
        ${R(o("roof_overhang_sides_hint"))}
      </details>
      ${s&&n.admin?m`${J(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${e.points?J(...e.points.map((y,x)=>m`<button class="nf-chip" title=${o("delete_point")} ?disabled=${(e.points?.length??0)<=3} @click=${()=>r.removeCorner(x)}>${x+1} ×</button>`)):g}
          ${R(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${R(`${o("roof_ridge_height")}: ${ge(n.hass,sn(e))} \xB7 ${o("roof_section_hint")}`)}
      ${n.admin?J(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${v("a",c)}${a?g:v("b",u)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function Pk(t,e){let{host:n,roof:r}=t,o=n.t,i=X(n.doc),s=h=>r.patchWindow(h),a=H(n.hass,h=>h.startsWith("cover.")),l=H(n.hass,h=>ki(h)||me(h)),c=(h,p,f,_)=>I(n,o(h),p??null,void 0,f,b=>s({[_]:b==="none"?null:b})),u=h=>{let p=i.find(f=>f.key===h);p&&s({...Qr(p,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},d=(n.doc.settings.roof.windows??[]).findIndex(h=>h.id===e.id)+1;return m`${nc(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${tc(`\u{1FA9F} ${o("roof_window")} ${d}`,lr(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("solar_face"),e.face,i.map(h=>[h.key,Pt(n,h)]),u,{wide:!0})}
        ${A(n,o("width"),e.w??.78,h=>s({w:xn(.3,4)(h)}),.01,.3)}
        ${A(n,o("height_m"),e.h??1.18,h=>s({h:xn(.3,4)(h)}),.01,.3)}
        ${A(n,o("solar_u"),e.u,h=>s({u:ae(h)}),.05)} ${A(n,o("solar_v"),e.v,h=>s({v:ae(h)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${U(n,o("roof_window_name"),e.name??"",h=>s({name:h||null}),{wide:!0,maxlength:64})}
      </div>
      ${R(o("roof_window_motor_hint"))} ${R(o("roof_window_hint"))}
      ${n.admin?J(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function Ik(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.windows??[],o=new Map(X(e.doc).map(s=>[s.key,s])),i=s=>{n.windowId=s,n.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${R(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?Pt(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${J(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function Dk(t,e){let{host:n,roof:r}=t,o=n.t,i=X(n.doc),s=d=>r.patchChimney(d),a=pn(e),l=d=>{let h=i.find(p=>p.key===d);h&&s({...eo(h,e.id),shape:e.shape,w:e.w,d:e.d,h:e.h,name:e.name})},c=a.shape==="round"||a.shape==="steel",u=(n.doc.settings.roof.chimneys??[]).findIndex(d=>d.id===e.id)+1;return m`${nc(o("roof_sections"),()=>r.chimneyId=null)}
    <section>
      ${tc(`\u{1F9F1} ${o("chimney")} ${u}`,lr(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("chimney_shape"),a.shape,Su.map(d=>[d,o(`chimney_${d}`)]),d=>s({shape:d,w:null,d:null,h:null}),{wide:!0})}
        ${O(n,o("solar_face"),e.face,i.map(d=>[d.key,Pt(n,d)]),l,{wide:!0})}
        ${c?A(n,o("chimney_diameter"),a.w,d=>s({w:xn(.1,3)(d),d:xn(.1,3)(d)}),.01,.1):m`${A(n,o("width"),a.w,d=>s({w:xn(.1,3)(d)}),.01,.1)} ${A(n,o("chimney_depth"),a.d,d=>s({d:xn(.1,3)(d)}),.01,.1)}`}
        ${A(n,o("chimney_height"),a.h,d=>s({h:xn(.2,5)(d)}),.05,.2)}
        ${A(n,o("solar_u"),e.u,d=>s({u:ae(d)}),.05)} ${A(n,o("solar_v"),e.v,d=>s({v:ae(d)}),.05)}
        ${U(n,o("roof_window_name"),e.name??"",d=>s({name:d||null}),{wide:!0,maxlength:64})}
      </div>
      ${R(o("chimney_hint"))}
      ${n.admin?J(m`<button class="nf-btn nf-danger" @click=${()=>r.removeChimney()}>${o("delete")}</button>`):g}
    </section>`}function Ok(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.chimneys??[],o=new Map(X(e.doc).map(s=>[s.key,s])),i=s=>{n.chimneyId=s,n.sectionId=null};return m`<section>
    <h3>🧱 ${e.t("chimneys")}</h3>
    ${o.size>0?g:R(e.t("solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("chimney")} ${a+1} · ${e.t(`chimney_${pn(s).shape}`)} · ${l?Pt(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${J(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addChimney()}>+ ${e.t("chimney")}</button>`)}
  </section>`}function Lk(t,e,n){let r=t.t,o=e.shape,[i,s]=e.ends??[o,o],a=["gable","hip","halfhip"].map(u=>[u,r(`roof_shape_${u}`)]),l=u=>n({ends:u[0]===o&&u[1]===o?null:u}),c=i==="halfhip"||s==="halfhip";return m`<div class="nf-form">
    ${O(t,r("roof_end_start"),i,a,u=>l([u,s]))}
    ${O(t,r("roof_end_end"),s,a,u=>l([i,u]))}
    ${c?m`<label class="nf-field nf-wide" title=${r("roof_halfhip_hint")}
          >${r("roof_halfhip")} · ${Math.round((e.halfhip??.55)*100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((e.halfhip??.55)*100))} ?disabled=${!t.admin} @change=${u=>n({halfhip:Number(u.target.value)/100})} />
        </label>`:g}
  </div>`}function Fg(t){let{host:e,roof:n}=t,r=e.doc.settings.roof,o=r.type==="custom";if(n.window)return Pk(t,n.window);if(n.chimney)return Dk(t,n.chimney);if(o&&n.section)return Tk(t,n.section);let i=o?r.sections??[]:[],s=e.t,a=o?0:Br(e.doc).length,l=(c,u)=>`${u+1} \xB7 ${c.dormer?s("roof_dormer"):s(`roof_shape_${c.shape}`)} \xB7 ${q(e.hass,Math.abs(c.x1-c.x0),1)} \xD7 ${q(e.hass,Math.abs(c.z1-c.z0),1)} m \xB7 ${s("roof_ridge_height")} ${q(e.hass,sn(c),1)} m`;return m`<section>
      ${ar(t)}
      <h3>${s("roof_sections")}</h3>
      ${R(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((c,u)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>n.sectionId=c.id}><span>${l(c,u)}</span></button></div>`)}</div>
          ${J(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(c=>c.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:m`${a>1?R(s("roof_parts_hint",{n:a})):g}${J(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>n.useSections()}>${s("roof_sections_start")}</button>`)}`}
    </section>
    ${Ik(t)} ${Ok(t)}`}var rc=40,zg=60;function oc(t){let e=new Set((t.solar??[]).map(n=>n.string).filter(Boolean));t.strings=(t.strings??[]).filter(n=>e.has(n.id))}function Tg(t,e,n,r){let o=t.solar?.find(i=>i.id===e);if(o){if(n==="new"){let i=t.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};t.strings=[...i,s],o.string=s.id}else o.string=n;oc(t)}}function Pg(t,e){let n=new Set(t??[]);return n.delete(e)||n.add(e),n.size>0?[...n].sort():null}function Ig(t){let e=t.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(zg,e[0])),layout:null,skip:null}:{layout:e.slice(0,rc).map(r=>Math.min(zg,r)),rows:Math.min(rc,e.length),cols:Math.max(1,...e),skip:null}}function Dg(t,e){let n=Math.max(1,Math.min(rc,Math.round(e))),r=t.layout;return r?.length?{rows:n,layout:Array.from({length:n},(o,i)=>r[i]??r[r.length-1])}:{rows:n}}var Og=t=>t.layout?.length?t.layout.join(", "):String(t.cols),Hk=["portrait","look","name","string","entity","module_w","module_h","wp"];function Ck(t){let e={};for(let n of Hk)e[n]=t[n];return e}function Lg(t,e,n){let r=Ck(e);if(n===We)return{...Xr(t,e.id),...r,rows:e.rows,cols:e.cols};let o=X(t).find(s=>s.key===n);if(o)return bi(o,{...e,...r});let i=Xe(t).find(s=>s.key===n);return i?bi(i,{...e,...r,rows:1}):null}var Hg=400;function ic(t,e){let n=t?Qe(t,e).length:0;return{modules:n,kwp:n*(e.wp??Hg)/1e3}}function Cg(t){let{host:e,roof:n}=t,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=X(e.doc),a=new Map(o.map(u=>[u.id,Fe(e.doc,u,s)])),l=(u,d)=>{let h=a.get(u.id),p=ic(h,u),f=r("solar_summary",{n:p.modules,kwp:q(e.hass,p.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>n.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${d+1}`} · ${h?Pt(e,h):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=u=>{let d=o.filter(_=>_.string===u.id),h=d.map(_=>ic(a.get(_.id),_)),p=h.reduce((_,b)=>_+b.modules,0),f=h.reduce((_,b)=>_+b.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:d.length,n:p,kwp:q(e.hass,f,1)})}</p>`};return m`<section>
    ${ar(t)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${R(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${J(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>n.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!t.floorId} @click=${()=>n.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function Nk(t,e){let{host:n,roof:r}=t,o=n.t,i=H(n.hass,h=>Gn(n.hass,h)),s=n.doc.settings.roof.strings??[],a=s.find(h=>h.id===e.string),l=[["",o("solar_string_none")],...s.map(h=>[h.id,h.name]),["new",`+ ${o("solar_string_new")}`]],c=O(n,o("solar_string"),e.string??"",l,h=>r.setString(h===""?null:h),{wide:!0});if(!a)return m`${c}${I(n,o("solar_entity"),e.entity??null,void 0,i,h=>r.patchField({entity:h==="none"?null:h}))}`;let u=n.hass?Ze(n.hass,n.doc.floors):null,d=n.doc.floors.flatMap(h=>h.furniture.filter(p=>p.type==="inverter").map(p=>({item:p,floor:h}))).map(({item:h,floor:p},f)=>{let _=u?.get(h.id)?.entity,b=h.name?.trim()||(_?K(n.hass,_):"");return[h.id,`${b||`${o("furn_inverter")} ${f+1}`} \xB7 ${p.name}`]});return m`${c}
    ${U(n,o("solar_string_name"),a.name,h=>r.patchString({name:h||a.name}),{wide:!0})}
    ${I(n,o("solar_string_entity"),a.entity??null,void 0,i,h=>r.patchString({entity:h==="none"?null:h}))}
    ${O(n,o("solar_string_inverter"),a.inverter??"",[["",o(d.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...d],h=>r.patchString({inverter:h||null}),{wide:!0})}`}function Ng(t,e){let{host:n,roof:r}=t,o=n.t,i=k=>r.patchField(k),s=X(n.doc),a=Fe(n.doc,e,s),l=e.face===We,c=Ur(e),u=ic(a,e),d=c.reduce((k,S)=>k+S,0)-(e.skip?.length??0),h=(n.doc.settings.roof.solar??[]).findIndex(k=>k.id===e.id)+1,p=[...a?[]:[["",o("solar_face_gone")]],...s.map(k=>[k.key,Pt(n,k)]),[We,o("solar_ground")],...Xe(n.doc).map(k=>[k.key,Pt(n,k)])],f=k=>{let S=Lg(n.doc,e,k);S&&i(S)},_=(k,S,$=ae)=>E=>Math.max(k,Math.min(S,$(E))),b=k=>i(Jr(n.doc,e,k)),w=k=>i({rotation:(Math.round(k)%360+360)%360||null}),v=a?.wall?"solar_flip_wall":"solar_flip",y=(k,S,$)=>A(n,o(S),e[k]??$,E=>i({[k]:_(.3,3)(E)}),.01,.3),x=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${ar(t)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${h}`}</h3>
        ${lr(n,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${U(n,o("solar_name"),e.name??"",k=>i({name:k||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${O(n,o("solar_face"),a?e.face:"",p,f,{wide:!0})}
        ${A(n,o("solar_rows"),c.length,k=>i(Dg(e,k)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!n.admin}
            .value=${Og(e)}
            @change=${k=>{let S=Ig(k.target.value);S&&i(S)}}
          />
        </label>
      </div>
      ${R(`${a&&!a.unbounded?`${o("solar_face_size",{w:q(n.hass,a.lu,1),h:q(n.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${x?cr(n,["left","center","right"].map(k=>[k,o(`solar_align_${k}`)]),e.align??"left",k=>i({align:k})):g}
      ${cr(n,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,k=>i({portrait:k}))}
      ${cr(n,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",k=>i({look:k}))}
      <div class="nf-form">
        ${y("module_w","solar_module_w",1.13)} ${y("module_h","solar_module_h",1.72)}
        ${A(n,o("solar_wp"),e.wp??Hg,k=>i({wp:_(50,1500,Math.round)(k)}),5,50)}
      </div>
      ${J(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!n.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!n.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?R(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${A(n,o("solar_base"),e.base??0,k=>i({base:k>.001?Math.min(60,ae(k)):null}),.05,0)}
            ${A(n,o("solar_rotation"),e.rotation??0,b,5)}
            ${J(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${A(n,o("solar_u"),e.u,k=>i({u:ae(k)}),.05)} ${A(n,o(a?.wall?"solar_v_wall":"solar_v"),e.v,k=>i({v:ae(k)}),.05)}`}
        ${a?.flat&&!l?A(n,o("solar_rotation"),e.rotation??0,w,5):g}
        ${a?.wall?A(n,o("solar_tilt_wall"),e.tilt??0,k=>i({tilt:_(0,90,Math.round)(k)}),5,0):g}
        ${a?.flat?A(n,o("solar_tilt"),e.tilt??15,k=>i({tilt:_(0,45,Math.round)(k)}),1,0):g}
        ${a?.flat&&!a.unbounded?D(n,o("solar_rack_ew"),e.rack==="ew",k=>i({rack:k?"ew":null}),{title:o("solar_rack_ew_hint")}):g}
        ${a&&!a.flat&&!a.wall?A(n,o("solar_rack_tilt"),e.tilt??0,k=>i({tilt:_(0,45,Math.round)(k)||null}),1,0):g}
        ${a?.wall||a?.flat?D(n,o(v),!!e.flip,k=>i({flip:k})):g}
      </div>
      ${a?.flat&&!l?J(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>w((e.rotation??0)-90)}>↺ 90°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>w((e.rotation??0)+90)}>↻ 90°</button>`):g}
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:q(n.hass,u.kwp,1)})}${u.modules<d?m` · <b>${o("solar_partial",{n:u.modules,total:d})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${Nk(t,e)}</div>
      ${R(o("solar_string_hint"))} ${R(o("solar_form_hint"))}
      ${n.admin?J(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...Wn(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var Wg=t=>Math.round(t*1e3)/1e3,ms=class{ctx;sectionSel=null;windowSel=null;chimneySel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get chimneyId(){return this.chimneySel}set chimneyId(e){this.chimneySel=e,e&&(this.windowSel=null),this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get chimney(){return this.chimneySel?this.settings.chimneys?.find(e=>e.id===this.chimneySel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let n=(this.settings.sections??[]).length>0;e&&n&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!n)&&(r.settings.roof.sections=Br(r,()=>L("roof")))}),this.sectionId=null)}addSection(e,n){if(!this.admin)return;let r=xf(this.doc,e,n);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:n,wall_interior:r}=this.doc.settings,o=_a(e.rooms,e.walls??[],n,r);if(!o)return;let i=o.map(([s,a])=>[Wg(s),Wg(a)]);this.patchSection({shape:"flat",points:i,...Vt(i)})}addDormer(e){let n=this.section;if(!n||!this.admin)return;let r=ba(n,e,L("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeCorner(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Rf(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.sections=(n.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}removeSelected(){this.window?this.removeWindow():this.chimney?this.removeChimney():this.section&&this.removeSection()}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let n=$f(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],n]),this.sectionId=n.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,n=X(this.doc),o=(this.section?.dormer?n.find(s=>s.key===`${this.section.id}:front`):void 0)??to(n.filter(s=>!s.flat&&s.side!=="front"),e)??n[0];if(!o)return;let i=Qr(o,L("rwin"));this.ctx.host.change(s=>s.settings.roof.windows=[...s.settings.roof.windows??[],i]),this.windowSel=i.id,this.sectionId=null}patchWindow(e){let n=this.windowSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=X(r).find(s=>s.key===o.face);i&&Object.assign(o,mt(i,hn(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.windows=(n.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addChimney(){if(!this.admin)return;let e=X(this.doc),n=e.find(o=>!o.flat)??e[0];if(!n)return;let r=eo(n,L("chim"));this.ctx.host.change(o=>o.settings.roof.chimneys=[...o.settings.roof.chimneys??[],r]),this.chimneySel=r.id,this.windowSel=null,this.sectionId=null}patchChimney(e){let n=this.chimneySel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.chimneys?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=X(r).find(s=>s.key===o.face);i&&Object.assign(o,mt(i,Et(o,i)))})}removeChimney(){let e=this.chimneySel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.chimneys=(n.settings.roof.chimneys??[]).filter(r=>r.id!==e)),this.chimneyId=null)}addField(){if(!this.admin)return;let e=X(this.doc),n=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=to(e.filter(i=>!n.has(i.key)),r)??to(e,r);o&&(this.appendField(Wn(o,L("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,n=this.admin&&e?Aa(this.doc,L("pv"),e):null;n&&this.appendField(n)}addGroundField(){this.admin&&this.appendField(Xr(this.doc,L("pv")))}appendField(e){this.ctx.host.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let n=this.settings.solar?.find(r=>r.id===e);n?.face.startsWith("wall:")&&this.ctx.setFloorId(n.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((n,r)=>{Object.assign(n,e);let o=Fe(r,n);o&&Object.assign(n,mt(o,n))})}toggleCell(e){this.editField(n=>n.skip=Pg(n.skip,e))}editField(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===n);o&&e(o,r)})}setString(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>Tg(r.settings.roof,n,e,{id:L("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let n=this.field?.string;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(n=>{n.settings.roof.solar=(n.settings.roof.solar??[]).filter(r=>r.id!==e),oc(n.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,n)=>n.elevation-e.elevation)}};var Bg=(t,e)=>t.floors.flatMap(n=>n.furniture).find(n=>n.type===e),Wk=t=>!t||t==="none";async function Vg(t){let e;try{e=await t.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let n=up(t.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Bg(t.doc(),i);!l&&t.canAdd()&&(t.addDevice(i),l=Bg(t.doc(),i)),!(!l||!Wk(l[s]))&&(t.setField(l.id,s,a),r++)};return o("meter","power",n.grid),o("inverter","power",n.solar),o("home_battery","power",n.battery),o("home_battery","soc",n.battery_soc),{kind:"done",filled:r}}var Bk=/garage|carport/,Vk=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,Kk=/flur|diele|eingang|hall|entr|lobby/,Kg=.25,ur=t=>Math.round(t*1e3)/1e3;function Gk(t,e,n){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(d=>u.test(n.roomLabel(d).toLowerCase())),i=r.find(u=>e.furniture.some(d=>d.type==="parking"&&N([d.x,d.z],u.points))),s=o(Bk)??i,a=o(Vk),l=t==="wallbox"?s:t==="meter"?a??o(Kk)??s:a??s,c=[...r].sort((u,d)=>Math.abs(_e(d.points))-Math.abs(_e(u.points)))[0];return l??n.selected??c}function Uk(t,e){let[n,r]=xe(t.points),o=t.points.some((s,a)=>!e.has(a)),i=null;return t.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=t.points[(a+1)%t.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(n-u[0])*d[0]+(r-u[1])*d[1]<0&&(d=[0-d[0],0-d[1]]),i={mid:u,inward:d,length:c}}),i}function Gg(t,e,n,r){let[o,i,s]=ht(t),a={id:L("furniture"),type:t,rotation:0,w:o,d:i,h:s,variant:null};if(t==="grid_point"){let p=pp(e),[f,_]=p?[p.x,p.z]:r.fallback;return{...a,x:ur(f),z:ur(_)}}let l=Gk(t,n,r),[c,u]=l?xe(l.points):r.fallback;if(l){let p=new Set(n.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),f=Uk(l,p);f&&([c,u]=[f.mid[0]+f.inward[0]*(i/2+Kg),f.mid[1]+f.inward[1]*(i/2+Kg)])}let d={...a,x:ur(c),z:ur(u)},h=l?Ir({...n,furniture:[...n.furniture,d]},d,e.settings.wall_interior):null;return h?{...d,x:ur(h.x),z:ur(h.z),rotation:h.rotation}:d}var gs=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let n=this.undoStack.pop();return n===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(n))}redo(e){let n=this.redoStack.pop();return n===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(n))}};var sc=t=>Math.round(t*1e3)/1e3,dr="unmovable",_s="no change";function Ug(t,e,n,r){let o=i=>[sc(i[0]+n),sc(i[1]+r)];switch(e.kind){case"device":return t.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:dr;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=t.openings.find(_=>_.id===e.id),s=i?Ne(i,t.rooms,t.walls??[]):null;if(!i||!s)return dr;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,u=(n*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(u)<1e-9)return _s;let d=Kt(t.openings,i),h=!i.wall&&d.length>1?Kn(s.room,d):null;if(h){let _=Math.max(0,Math.min(no(s.room)-h.width,h.from+u));return Math.abs(_-h.from)<1e-9?_s:{apply(b){let w=b.openings.find(y=>y.id===e.id),v=w?ro(b.openings,s.room,w,_,h.width):null;v&&(b.openings=v)}}}let p=Math.min(i.width,c)/2,f=sc(Math.min(c-p,Math.max(p,i.offset+u)));return{apply(_){let b=_.openings.find(w=>w.id===e.id);b&&(b.offset=f)}}}case"room":{let i=t.rooms.find(a=>a.id===e.id);if(!i)return dr;let s=new Set(t.placements.filter(a=>N([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var bs=t=>Math.round(t*1e3)/1e3,ac=t=>(t+90)%360;function jg(t,e,n){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of t.rooms)o.points=o.points.map(e);for(let o of t.furniture)r(o),n&&(o.rotation=ac(o.rotation));for(let o of t.placements)r(o),n&&(o.rotation=ac(o.rotation??0));for(let o of t.outdoor)o.points=o.points.map(e);for(let o of t.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];t.background&&(r(t.background),n&&(t.background.rotation=ac(t.background.rotation??0)))}function jk(t,e){for(let r of t.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let n=t.energy.meter;n&&([n.x,n.z]=e([n.x,n.z]))}function Zg(t,e,n,r){if(e.allFloors){for(let o of t.floors)jg(o,n,r);jk(t,n)}else{let o=t.floors.find(i=>i.id===e.floorId);o&&jg(o,n,r)}}function qg(t,e,n,r){Zg(t,e,([o,i])=>[bs(o+n),bs(i+r)],!1)}function Zk(t,e){let r=(e.allFloors?t.floors:t.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Yg(t,e){let n=Zk(t,e);if(!n)return!1;let[r,o]=n;return Zg(t,e,([i,s])=>[bs(r-(s-o)),bs(o+(i-r))],!0),!0}var ys=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,n){this.ids[e]=n,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,n,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=n,e==="room"?i.room=n:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&n&&(i.room=r.roomOfDevice(n)??i.room),e==="opening"&&n&&(i.room=r.roomOfOpening(n)??i.room),(e!=="room"||n!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let n=this.ids[e];if(n)return{kind:e,id:n}}return null}};var ws=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;copyChoice=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get floorCopy(){return this.copyChoice}set floorCopy(e){this.copyChoice=e,this.onChange()}imageChoiceNow={furniture:!0,dimensions:!0,names:!0};get imageChoice(){return this.imageChoiceNow}set imageChoice(e){this.imageChoiceNow=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let n=new Set(this.unfolded);n.delete(e)||n.add(e),this.unfolded=n,this.onChange()}};var qk=/garage|carport|keller|cellar|basement|technik|heizung|heizraum|boiler|utility|werkstatt|schuppen|shed|dachboden|attic/i,Mo=t=>t.living??!qk.test(t.name),Yk=.1,Xg=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function lc(t,e,n,r,o=Yk){if(n.points.length<3)return{roomId:n.id,floor:0,living:0,low:0};let i=Xg(n.points),s=r.filter(f=>{let _=Xg(f.footprint);return _.x1>=i.x0&&_.x0<=i.x1&&_.z1>=i.z0&&_.z0<=i.z1}),a=e.elevation+(n.ceiling!=null&&n.ceiling>0?n.ceiling:e.height),l=(t.settings.roof?.sections??[]).some(f=>!f.open),c=Us(n),u=0,d=0,h=0;for(let f=i.x0+o/2;f<i.x1;f+=o)for(let _=i.z0+o/2;_<i.z1;_+=o){if(!N([f,_],n.points)||s.some(v=>N([f,_],v.footprint)))continue;let b=l?Wr(t,f,_):null,w=Math.min(a,b??1/0)-e.elevation-c;w>=2?u++:w>=1?d++:h++}let p=o*o;return{roomId:n.id,floor:(u+d+h)*p,living:Mo(n)?(u+d/2)*p:0,low:(d+h)*p}}var Jg=new WeakMap;function $n(t,e){if(e.layer)return[];let n=Jg.get(e);if(n&&n.roof===t.settings.roof)return n.areas;let r=Xk(t,e);return Jg.set(e,{roof:t.settings.roof,areas:r}),r}function Xk(t,e){let n=we(e.rooms,Me(t.settings),e.walls??[]).walls;return e.rooms.map(r=>lc(t,e,r,n))}var hr=t=>t.reduce((e,n)=>({floor:e.floor+n.floor,living:e.living+n.living,low:e.low+n.low}),{floor:0,living:0,low:0});function Qg(t,e,n){let r=t.floors.length,o=e?.name??(r===0?n.first:n.next(r));return{...Ge(L("floor"),o,Wu(t.floors,e?.level)),ha_floor:e?.floor_id??null}}function cc(t,e){let n=t.findIndex(o=>o.elevation>e.elevation),r=n<0?t.length:n;return[...t.slice(0,r),e,...t.slice(r)]}function e_(t,e,n){let r=t.findIndex(s=>s.id===e),o=r+n;if(r<0||o<0||o>=t.length)return[...t];let i=[...t];return[i[r],i[o]]=[i[o],i[r]],i}function t_(t,e){let n=new Set(t.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!n.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function pr(t,e,n){if(!e.ha_floor)return[];let r=new Set(t.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(n??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function n_(t,e,n){return Object.values(n??{}).filter(r=>r.floor_id===e.ha_floor||!t.floors.some(o=>o.ha_floor===r.floor_id))}function r_(t,e,n,r,o=L){let i=structuredClone(e),s=t.floors.reduce((u,d)=>Math.max(u,d.elevation+d.height),e.elevation+e.height),a=new Map,l=new Map;i.id=o("floor"),i.name=n,i.elevation=Math.round(s*1e3)/1e3,i.ha_floor=null,i.start_view=null,i.rooms=i.rooms.map(u=>{let d=o("room");return a.set(u.id,d),{...u,id:d,area_id:null}}),i.walls=(i.walls??[]).map(u=>{let d=o("wall");return l.set(u.id,d),{...u,id:d}}),i.openings=i.openings.filter(u=>a.has(u.room_id)).map(u=>({...u,id:o("opening"),room_id:a.get(u.room_id),wall:u.wall?l.get(u.wall)??null:u.wall}));let c=new Set(["meter","inverter","home_battery","wallbox","grid_point"]);return i.furniture=r.furniture?i.furniture.filter(u=>!c.has(u.type)).map(u=>tx({...u,id:o("furniture")})):[],i.placements=r.devices?i.placements:[],i.outdoor=r.outdoor?i.outdoor.map(u=>({...u,id:o("outdoor")})):[],i}var Jk=["entity","power","fan_entity","room_sensor"],Qk=["door_left","door_right","soc","charge","export","status","temp_entity","temp_entity2","state_entity","state_entity2","screen_device","color_entity","care_entity","cover_entity","type_entity","parent_meter","car","tap"],ex=["gang_entities","pictures","types","meter_floors","show_when","extra_lights","screen_sources"];function tx(t){let e={...t};for(let n of Jk)(n==="entity"||n==="power"||e[n]!=null)&&(e[n]="none");for(let n of Qk)e[n]!=null&&(e[n]=null);for(let n of ex)delete e[n];return e}function o_(t,e,n,r){let o=t.floors.find(l=>l.id===e),i=t.floors.find(l=>l.id===r);if(!o||!i||o===i)return!1;let s=o.furniture.findIndex(l=>l.id===n);if(s<0)return!1;let[a]=o.furniture.splice(s,1);return i.furniture.push(a),!0}function nx(t,e,n,r){if(e.layer||!e.rooms.length)return g;let o=t.t,i=hr($n(t.doc,e)).living,s=hr(t.doc.floors.flatMap(a=>$n(t.doc,a))).living;return m`<p class="nf-sub nf-wide" title=${o("living_area_hint")}>
      ${o(t.doc.floors.length>1?"living_area_floor_house":"living_area_floor",{floor:De(t.hass,i),house:De(t.hass,s)})}
    </p>
    <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("print_plan_hint")} @click=${()=>n.print()}>🖨️ ${o("print_plan")}</button></div>
    ${rx(t,n,r)}`}function rx(t,e,n){let r=t.t,o=n.imageChoice,i=s=>n.imageChoice={...o,...s};return m`${D(t,r("image_furniture"),o.furniture,s=>i({furniture:s}))}
    ${D(t,r("image_dimensions"),o.dimensions,s=>i({dimensions:s}))}
    ${D(t,r("image_names"),o.names,s=>i({names:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" title=${r("image_export_hint")} @click=${()=>e.exportImage(o,!1)}>🖼 ${r("image_export")}</button>
      ${t.doc.floors.length>1?m`<button class="nf-btn" @click=${()=>e.exportImage(o,!0)}>🖼 ${r("image_export_all")}</button>`:g}
    </div>`}function ox(t,e,n,r){let o=t_(t.doc,t.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:n.addFloor(null);return m`<div class="nf-floor-list">
      ${[...t.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>n.openFloor(s.id)}>${s.name}</button>`)}
      ${t.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${t.t("add_floor")}</button>`:g}
    </div>
    ${t.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${R(t.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>n.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${t.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>n.addFloor(null)}>${t.t("floor_empty")}</button>
        </div>`:g}`}function ix(t,e,n,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${t.t("floor_shift_hint")}>
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
  </div>`}function sx(t,e,n,r){let o=t.t,i=s=>e.floorCopy={...r,...s};return m`<div class="nf-form nf-wide nf-copy-floor">
    ${R(o("floor_copy_hint"),"nf-wide")}
    ${D(t,o("floor_copy_furniture"),r.furniture,s=>i({furniture:s}))}
    ${D(t,o("floor_copy_devices"),r.devices,s=>i({devices:s}),{title:o("floor_copy_devices_hint")})}
    ${D(t,o("floor_copy_outdoor"),r.outdoor,s=>i({outdoor:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${()=>n.duplicateFloor(r)}>${o("floor_copy_make")}</button>
      <button class="nf-btn" @click=${()=>e.floorCopy=null}>${o("cancel")}</button>
    </div>
  </div>`}function ax(t,e,n,r){let o=t.t,i=c=>t.change((u,d)=>Object.assign(d,c)),s=n_(t.doc,r,t.hass?.floors),a=pr(t.doc,r,t.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${U(t,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${A(t,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${t.admin?ix(t,e,n,r):g}
    ${A(t,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(t.hass?.floors??{}).length>0?O(t,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${D(t,o("floor_layer"),!!r.layer,c=>i({layer:c||void 0}),{title:o("floor_layer_hint")})}
    ${I(t,o("floor_power"),r.power_entity??null,void 0,H(t.hass,c=>c.startsWith("sensor.")&&t.hass?.states[c]?.attributes.device_class==="power"),c=>i({power_entity:c&&c!=="none"?c:null}))}
    ${r.power_entity?R(o("floor_power_hint"),"nf-wide"):g}
    ${r.layer?g:ve(t,o("wall_paint_floor"),r.wall_paint_outside,t.doc.settings.wall_paint_outside??Xo,c=>i({wall_paint_outside:c}))}
    ${r.layer?g:O(t,o("wall_material_floor"),r.wall_material_outside??"",[["",o("wall_material_default")],...nn.map(c=>[c,o(`wmat_${c}`)])],c=>i({wall_material_outside:c||null}),{wide:!0})}
    ${nx(t,r,n,e)}
    ${t.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>n.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${t.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>n.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>n.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn" @click=${()=>e.floorCopy=e.floorCopy?null:{furniture:!0,devices:!1,outdoor:!1}}>${o("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${()=>n.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          ${e.floorCopy?sx(t,e,n,e.floorCopy):g}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>n.closeGaps()}>${o("gaps_close")}</button>
            <button class="nf-btn" title=${o("rooms_from_walls_hint")} ?disabled=${!r.walls?.length} @click=${()=>n.roomsFromWalls()}>${o("rooms_from_walls")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function i_(t,e,n,r,o){return m`<section>
    <h3>${t.t("floors")}</h3>
    ${ox(t,e,n,o)} ${r?ax(t,e,n,r):g}
  </section>`}var s_=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function a_(t,e){let n=pe(t.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((n.z1-n.z0)/1.2)),cols:Math.max(1,Math.round((n.x1-n.x0)/1.2)),entity:e[0]??null}}function vs(t,e){let[n,r,o]=it[e.type];return Uu(t,e.rows,e.cols).map(([i,s])=>({id:L("furniture"),type:e.type,x:i,z:s,rotation:0,w:n,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var uc=t=>Math.max(1,Math.min(12,Math.round(t)));var lx=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=lx;var l_=/^(media_player|assist_satellite)\./;function cx(t,e){return e?Object.values(t.entities??{}).filter(n=>!n.hidden&&(n.area_id??(n.device_id?t.devices?.[n.device_id]?.area_id:null))===e).map(n=>n.entity_id):[]}function c_(t,e){let n=t.states[e];return!n||n.state==="unavailable"?!1:e.startsWith("notify.")?t.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):n.state==="off"||n.state==="unknown"?!1:n.attributes.device_class!=="tv"}function u_(t,e,n){if(n.announce_speaker==="none")return null;if(n.announce_speaker)return n.announce_speaker;if(e&&n.points.length>=3){let i=[...e.placements.filter(s=>l_.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&l_.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>N([s.x,s.z],n.points)&&c_(t,s.id));if(i)return i.id}let r=cx(t,n.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=r.filter(s=>s.startsWith(o)&&c_(t,s)).sort()[0];if(i)return i}return null}function d_(t,e,n){return e.rooms.length===0?g:m`<section>
    <h3>${t.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>n.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${De(t.hass,Ee(r.points))}</span>
        </button>`)}
    </div>
  </section>`}function ux(t,e,n,r){let o=e.spots,i=c=>e.spots={...o,...c},s=vs(n,o).length,a=H(t.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=s_.map(c=>[c,t.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${O(t,t.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${A(t,t.t("spots_cols"),o.cols,c=>i({cols:uc(c)}),1,1)}
    ${A(t,t.t("spots_rows"),o.rows,c=>i({rows:uc(c)}),1,1)}
    ${I(t,t.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${t.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${t.t("cancel")}</button>
    </div>
    ${R(t.t("spots_hint"),"nf-wide")}
  </div>`}function dx(t,e,n,r){return m`<details class="nf-points" ?open=${!n}>
    <summary>${t.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${A(t,t.t("x"),o[0],s=>r.setCorner(i,0,s))} ${A(t,t.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${t.admin?m`<button class="nf-btn" title=${t.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function hx(t,e,n){let r=t.floor,o=r?lc(t.doc,r,e,n):void 0;if(!o||o.floor<=0)return g;let i=t.t;return Mo(e)?m`<p class="nf-sub nf-wide" title=${i("living_area_hint")}>
    ${o.low>.05?i("living_area_low",{living:De(t.hass,o.living),floor:De(t.hass,o.floor),low:De(t.hass,o.low)}):i("living_area",{living:De(t.hass,o.living)})}
  </p>`:m`<p class="nf-sub nf-wide">${i("living_area_none",{floor:De(t.hass,o.floor)})}</p>`}function px(t,e,n,r){let o=t.t,i=s=>r.patch({ceiling:Math.abs(s-n.height)<.005?null:Math.min(20,Math.max(1,Math.round(s*1e3)/1e3))});return m`${A(t,o("room_ceiling"),e.ceiling??n.height,i,.01,1)}
    ${e.ceiling!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({ceiling:null})}>${o("height_auto")}</button>`:g}
    ${R(o("room_ceiling_tip"),"nf-wide")}
    ${e.ceiling!=null&&e.ceiling>n.height+.005?m`<p class="nf-sub nf-wide">${o("room_ceiling_through",{ceiling:q(t.hass,e.ceiling,2),floor:q(t.hass,n.height,2)})}</p>`:g}`}function fx(t,e,n,r){let o=t.t;if(!t.hass)return m``;let i=u_(t.hass,n,{...e,announce_speaker:null}),s=H(t.hass,c=>/^(media_player|assist_satellite)\./.test(c)||c.startsWith("notify.")&&c.endsWith("_announce")),a=e.announce_quiet??null,l=(c,u)=>{if(!u)return r.patch({announce_quiet:null});r.patch({announce_quiet:{from:a?.from??"20:00",to:a?.to??"07:00",[c]:u}})};return m`${I(t,o("room_announce_speaker"),e.announce_speaker??null,i,s,c=>r.patch({announce_speaker:c}))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${o("room_announce_quiet")}
      <span>
        <input type="time" .value=${a?.from??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 1`} @change=${c=>l("from",c.target.value)} />
        –
        <input type="time" .value=${a?.to??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 2`} @change=${c=>l("to",c.target.value)} />
        ${a?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({announce_quiet:null})}>×</button>`:g}
      </span>
    </div>
    ${R(o("room_announce_hint"),"nf-wide")}`}function dc(t,e,n,r){let o=t.t,i=rn(n.points),s=pe(n.points),a=Object.values(t.hass?.areas??{}).sort((f,_)=>f.name.localeCompare(_.name)),l=[["",o("no_area")],...a.map(f=>[f.area_id,f.name])],c=t.floor?we(t.floor.rooms,Me(t.doc.settings),t.floor.walls??[]).walls:[],u=t.floor?Wd(n,c):null,d=Lu.map(f=>[f,o(`mat_${f}`)]),h=[["",o("wall_material_default")],...nn.map(f=>[f,o(`wmat_${f}`)])],p=f=>m`<button class="nf-btn" @click=${()=>r.applyPackage(f)}><b>${o(`pkg_${f}`)}</b><span>${o(`pkg_${f}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${U(t,o("room_name"),n.name,f=>r.patch({name:f}),{wide:!0})}
      ${O(t,o("area"),n.area_id??"",l,f=>r.setArea(f),{wide:!0})}
      ${(n.sub_areas??[]).map(f=>m`<span class="nf-chip nf-wide">${t.hass?.areas?.[f]?.name??f} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>r.patch({sub_areas:(n.sub_areas??[]).filter(_=>_!==f).length?(n.sub_areas??[]).filter(_=>_!==f):null})}>✕</button></span>`)}
      ${n.area_id?O(t,o("sub_area_add"),"",l.filter(([f])=>f!==n.area_id&&!(n.sub_areas??[]).includes(f)),f=>f&&r.patch({sub_areas:[...n.sub_areas??[],f]}),{wide:!0,title:o("sub_area_hint")}):g}
      ${O(t,o("material"),n.floor_material,d,f=>r.patch({floor_material:f}),{wide:!0})}
      ${O(t,o("wall_material_room"),n.wall_material??"",h,f=>r.patch({wall_material:f||null}),{wide:!0})}
      ${ve(t,o("wall_paint_room"),n.wall_paint,t.doc.settings.wall_paint_inside??Jo,f=>r.patch({wall_paint:f}))}
      ${t.floor?px(t,n,t.floor,r):g}
      ${A(t,o("room_floor_offset"),n.floor_offset??0,f=>r.patch({floor_offset:Math.abs(f)<.005?null:Math.max(-2,Math.min(2,Math.round(f*1e3)/1e3))}),.01)}
      ${R(o("room_floor_offset_hint"),"nf-wide")}
      ${I(t,o("room_clean"),n.clean_entity??null,void 0,H(t.hass,f=>/^(script|button|input_button)\./.test(f)),f=>r.patch({clean_entity:f&&f!=="none"?f:null}))}
      ${n.clean_entity?g:R(o("room_clean_hint"),"nf-wide")}
      ${I(t,o("floor_heating"),n.floor_heating??null,void 0,H(t.hass,f=>/^(climate|switch|valve|binary_sensor|input_boolean)\./.test(f)),f=>r.patch({floor_heating:f&&f!=="none"?f:null}))}
      ${n.floor_heating?R(o("floor_heating_hint"),"nf-wide"):g}
      ${fx(t,n,t.floor??null,r)}
      ${u?m`<p class="nf-sub nf-wide" title=${o("room_inner_hint")}>${o("room_inner",{w:ge(t.hass,u[0]),d:ge(t.hass,u[1])})}</p>`:g}
      ${hx(t,n,c)}
      ${D(t,o("room_living"),Mo(n),f=>r.patch({living:f===Mo({name:n.name,living:null})?null:f}),{title:o("living_area_hint")})}
      ${i?m`${A(t,o("x"),s.x0,f=>r.setRect("x",f))} ${A(t,o("z"),s.z0,f=>r.setRect("z",f))}
          ${A(t,o("width"),s.x1-s.x0,f=>r.setRect("w",f),.01,.05)}
          ${A(t,o("depth"),s.z1-s.z0,f=>r.setRect("d",f),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!t.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${n.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!t.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${dx(t,n,i,r)}
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?ux(t,e,n,r):g}
    ${e.packages?m`<div class="nf-packages">${nh.map(p)}${R(o("pkg_hint"))}</div>`:g}
  </section>`}var h_=le`
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
    font-size: 13px;
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
  @media (hover: hover) and (pointer: fine) {
    .nf-picture-reuse-btn:hover {
      border-color: var(--nf-accent);
    }
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
  @media (hover: hover) and (pointer: fine) {
    .nf-split-handle:hover {
      background: var(--nf-accent);
    }
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
  @media (hover: hover) and (pointer: fine) {
    .nf-room:hover {
      fill: color-mix(in srgb, var(--nf-accent) 9%, transparent);
    }
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
    border-radius: 6px;
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
    font-size: 12px;
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
  .nf-check-names {
    grid-column: 1 / -1;
    font-size: 0.85em;
  }
  .nf-check-names ul {
    list-style: none;
    margin: 6px 0;
    padding: 0;
    display: grid;
    gap: 4px;
  }
  .nf-check-names li {
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 2px 0;
    background: none;
  }
  .nf-check-all {
    margin: 6px 0 2px;
  }
  .nf-check-names .nf-check-name {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nf-check-names .nf-check-ignore {
    flex: none;
    margin-left: auto;
  }
  .nf-check-names li small {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--nf-muted, #8d9bbd);
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
  @media (hover: hover) and (pointer: fine) {
    .nf-row:hover {
      color: var(--nf-accent);
    }
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
  .nf-ble-bars {
    display: grid;
    gap: 6px;
    margin: 10px 0;
  }
  .nf-ble-row {
    display: grid;
    grid-template-columns: minmax(80px, 1fr) 2fr 36px;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }
  .nf-ble-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--nf-text);
  }
  .nf-ble-track {
    height: 8px;
    border-radius: 4px;
    background: rgba(127, 127, 127, 0.25);
    overflow: hidden;
  }
  .nf-ble-fill {
    display: block;
    height: 100%;
    border-radius: 4px;
    background: var(--nf-accent, #00e5ff);
    transition: width 0.4s ease-out;
  }
  .nf-ble-db {
    text-align: right;
    font-variant-numeric: tabular-nums;
    color: var(--nf-muted);
  }
  .nf-ble-now {
    margin: 4px 0 10px;
    color: var(--nf-text);
  }
  .nf-ble-learn {
    margin: 8px 0 14px;
    padding: 10px 12px;
    border: 1px solid var(--nf-border, rgba(127, 127, 127, 0.3));
    border-radius: 10px;
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
  .nf-chimney polygon {
    fill: color-mix(in srgb, #7a4a4a 75%, transparent);
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
  @media (hover: hover) and (pointer: fine) {
    .nf-checklist .nf-chk:hover {
      background: rgba(127, 127, 127, 0.12);
    }
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
  @media (hover: hover) and (pointer: fine) {
    .nf-ctx button:hover:not(:disabled) {
      background: color-mix(in srgb, var(--nf-accent) 16%, transparent);
    }
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
  @media (prefers-reduced-motion: reduce) {
    .nf-preview {
      animation: none;
    }
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
  .nf-shift > span {
    flex: 0 0 100%;
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
  @media (hover: hover) and (pointer: fine) {
    .nf-lib-toggle:hover {
      color: var(--nf-text);
    }
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
  @media (hover: hover) and (pointer: fine) {
    .nf-more:hover {
      color: var(--nf-accent);
    }
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
  @media (hover: hover) and (pointer: fine) {
    .nf-dev-row:hover {
      color: var(--nf-text);
    }
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
    font-size: 13px;
    color: var(--nf-muted);
  }
  .nf-note {
    margin: 0;
    font-size: 13px;
    color: var(--nf-warm);
  }
  .nf-strip-btn,
  .nf-picture-reuse-btn,
  .nf-keys-open,
  .nf-card-star,
  .nf-chip-x,
  .nf-swatch,
  .nf-lib-toggle,
  .nf-more {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .nf-strip-btn:active,
  .nf-picture-reuse-btn:active,
  .nf-keys-open:active,
  .nf-card-star:active,
  .nf-chip-x:active,
  .nf-swatch:active,
  .nf-lib-toggle:active,
  .nf-more:active {
    transform: scale(0.96);
  }
  @media (prefers-reduced-motion: reduce) {
    .nf-strip-btn:active,
    .nf-picture-reuse-btn:active,
    .nf-keys-open:active,
    .nf-card-star:active,
    .nf-chip-x:active,
    .nf-swatch:active,
    .nf-lib-toggle:active,
    .nf-more:active {
      transform: none;
    }
  }
`;var p_=["cabinet","shelf","lamp","device"],Sn="own_studio";var mx={cabinet:{w:120,d:45,h:80,doors:2,drawers:1,shelves:2,base:"plinth",handle:"bar",back:!0,lamp:"floor",display:!1,mount:"floor",body:"white",front:"wood"},shelf:{w:80,d:35,h:180,doors:0,drawers:0,shelves:4,base:"none",handle:"none",back:!0,lamp:"floor",display:!1,mount:"floor",body:"wood",front:"wood"},lamp:{w:40,d:40,h:160,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!1,mount:"floor",body:"metal",front:"white"},device:{w:60,d:60,h:85,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!0,mount:"floor",body:"white",front:"dark"}},hc=(t,e)=>({kind:t,name:e,...mx[t]}),f_=(t,e)=>({...hc(e,t.name),body:t.body,front:t.front}),fr=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:e)),mr=t=>Math.round(t*1e4)/1e4;function pc(t){return{...t,name:t.name.trim().slice(0,60),w:fr(Math.round(t.w),5,400),d:fr(Math.round(t.d),2,200),h:fr(Math.round(t.h),2,300),doors:fr(Math.round(t.doors),0,6),drawers:fr(Math.round(t.drawers),0,6),shelves:fr(Math.round(t.shelves),0,12)}}function de(t,e,n,r,o,i,s,a,l={}){let[c,u,d]=t,h=(x,k,S)=>{let $=Math.max(-S,x-k/2),E=Math.min(S,x+k/2);return E-$<1e-4?[Math.max(-S,Math.min(S,x)),.001*S*2]:[($+E)/2,E-$]},[p,f]=h(e,r,c/2),[_,b]=h(n,o,u/2),w=Math.max(0,Math.min(d*.999,i)),v=Math.max(d*.001,Math.min(d-w,s)),y=x=>mr(Math.max(.001,Math.min(1,x)));return{shape:"box",x:mr(p/c),z:mr(_/u),w:y(f/c),d:y(b/u),y:mr(w/d),h:y(v/d),color:a,...l}}function m_(t,e,n){let[r,o,i]=t;if(e==="legs"){let s=Math.min(.1,i*.25),a=Math.min(.04,r/6,o/6);for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.push(de(t,l*(r/2-a),c*(o/2-a),a,a,0,s,"metal"));return s}if(e==="plinth"){let s=Math.min(.08,i*.2);return n.push(de(t,0,-.02,r-.02,o-.04,0,s,"dark")),s}return 0}function gx(t,e){let[n,r,o]=e,i=[],s=m_(e,t.base,i),a=t.doors+t.drawers>0,l=t.handle==="none"||!a?0:Math.min(.025,r*.08),c=a?Math.min(.02,r*.1):0,u=r-c-l,d=-r/2+u/2,h=o-s;if(!a){let v=Math.min(.018,n/10,h/10);i.push(de(e,-n/2+v/2,0,v,r,s,h,t.body,{edges:!0})),i.push(de(e,n/2-v/2,0,v,r,s,h,t.body,{edges:!0})),i.push(de(e,0,-r/2+.005,n-2*v,.01,s,h,t.body));for(let y=0;y<=t.shelves+1;y++)i.push(de(e,0,.005,n-2*v,r-.01,s+(h-v)*y/(t.shelves+1),v,t.front,{edges:"faint"}));return i}i.push(de(e,0,d,n,u,s,h,t.body,{edges:!0}));let p=.004,f=-r/2+u+c/2,_=t.doors>0?Math.min(.18,Math.max(.08,(h-.3)/Math.max(1,t.drawers))):h/t.drawers,b=s+(t.drawers>0?_*t.drawers:0),w=(v,y,x)=>{if(t.handle==="none")return;let k=r/2-l/2;t.handle==="knob"?i.push(de(e,v,k,.025,l,y-.0125,.025,"metal")):x?i.push(de(e,v,k,.015,l,y-.08,.16,"metal")):i.push(de(e,v,k,Math.min(.16,n*.4),l,y-.0075,.015,"metal"))};for(let v=0;v<t.drawers;v++){let y=s+_*v;i.push(de(e,0,f,n-2*p,c,y+p,_-2*p,t.front,{edges:"faint"})),w(0,y+_*(t.drawers===1&&t.doors===0?.5:.7),!1)}if(t.doors>0){let v=n/t.doors,y=o-b;for(let x=0;x<t.doors;x++){let k=-n/2+v*(x+.5);i.push(de(e,k,f,v-2*p,c,b+p,y-2*p,t.front,{edges:"faint"}));let S=t.doors===1||x%2===0?1:-1,$=b+y*(o>1.2?.45:.8);w(k+S*(v/2-.04),Math.min($,o-.1),!0)}}return i}function _x(t,e){let[n,r,o]=e,i=Math.min(.02,n/10,o/10),s=[de(e,-n/2+i/2,0,i,r,0,o,t.body,{edges:!0}),de(e,n/2-i/2,0,i,r,0,o,t.body,{edges:!0})];t.back&&s.push(de(e,0,-r/2+.005,n-2*i,.01,0,o,t.body));let a=t.shelves+2;for(let l=0;l<a;l++)s.push(de(e,0,t.back?.005:0,n-2*i,t.back?r-.01:r,(o-i)*l/(a-1),i,t.front,{edges:!0}));return s}function bx(t,e){let[n,r,o]=e,i=Math.min(n,r),s=(l,c,u,d,h,p,f={})=>({...de(e,l,c,u,u,d,h,p,f),shape:"cyl"}),a=(l,c,u)=>({...de(e,0,0,i,i,l,c,t.front,{glow:!0,edges:"faint"}),shape:"loft",tw:mr(Math.min(1,i*u/n)),td:mr(Math.min(1,i*u/r))});switch(t.lamp){case"pendant":{let l=Math.min(.3,o*.4);return[s(0,0,Math.min(.12,i),o-.03,.03,t.body),s(0,0,Math.min(.01,i/4),l,o-l-.03,"dark"),a(0,l,.35)]}case"wall":{let l=Math.min(.02,r*.2);return[de(e,0,-r/2+l/2,Math.min(.1,n),l,o*.3,o*.4,t.body),de(e,0,0,Math.min(.02,n),r-l,o*.45,Math.min(.02,o*.1),t.body),a(o*.15,o*.7,.7)]}default:{let l=Math.min(t.lamp==="table"?.25:.35,o*.4);return[s(0,0,i*.6,0,Math.min(.03,o*.05),t.body,{edges:!0}),s(0,0,Math.min(.03,i/6),.02,o-l-.02,t.body),a(o-l,l,.7)]}}}function yx(t,e){let[n,r,o]=e,i=[],s=t.mount==="floor"?m_(e,t.base,i):0,a=t.display?Math.min(.01,r*.1):0;if(i.push(de(e,0,-a/2,n,r-a,s,o-s,t.body,{edges:!0})),t.display){let l=Math.min(.02,n*.08,(o-s)*.08);i.push(de(e,0,r/2-a/2,n-2*l,a,s+l,o-s-2*l,t.front,{screen:!0}))}return i}function ks(t,e,n){let r=pc(t),o=[r.w/100,r.d/100,r.h/100],i=r.name||e,s=n==="en"?{en:i}:{[n.slice(0,5)]:i,en:i},a={id:e,name:s,size:o,parts:[],recipe:r};switch(r.kind){case"cabinet":a.parts=gx(r,o),a.surface=!0;break;case"shelf":a.parts=_x(r,o);break;case"lamp":a.parts=bx(r,o),a.light=r.lamp,a.mount=r.lamp==="pendant"?"ceiling":r.lamp==="wall"?"wall":r.lamp==="table"?"surface":"floor",r.lamp==="wall"&&(a.wall_y=1.6);break;case"device":a.parts=yx(r,o),a.electric=!0,a.mount=r.mount,r.mount==="wall"&&(a.wall_y=1.2);break}return a}function g_(t,e){let n=t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,32)||"piece",r=/^[a-z0-9]/.test(n)?n:`p${n}`;if(!e.includes(r))return r;for(let o=2;;o++)if(!e.includes(`${r}_${o}`))return`${r}_${o}`}var __=["white","wood","body","metal","dark","glass","accent"],wx={white:"#dfe6f2",wood:"#8a6a4a",body:"#3a4a6a",metal:"#9aa7bf",dark:"#1e2638",glass:"#7fd0e8",accent:"#37e0ff",fabric:"#4b5d8c",cushion:"#6a7fb3"},y_=t=>wx[t]??t;function vx(t){let e=ks(t,"preview","en"),[n,,r]=e.size,o=180/Math.max(n,r),[i,s]=[n*o,r*o],a=[...e.parts].sort((l,c)=>l.z+l.d/2-(c.z+c.d/2));return m`<svg class="nf-studio-view" viewBox="-4 -4 ${i+8} ${s+8}" role="img" aria-hidden="true">
    ${a.map(l=>{let c=l.w*i,u=l.h*s,d=(l.x+.5)*i-c/2,h=s-(l.y+l.h)*s,p=l.shape==="cyl"?Math.min(c,u)/2:l.shape==="loft"?3:1;return F`<rect x=${d} y=${h} width=${Math.max(.6,c)} height=${Math.max(.6,u)} rx=${p} fill=${l.screen?"#0b1020":y_(l.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${l.glow?"nf-studio-glow":""} />`})}
  </svg>`}function b_(t,e,n,r){let o=t.t,i=!__.includes(n),s=[...__.map(a=>[a,o(a==="body"?"studio_color_plan":`studio_color_${a}`)]),["own",o("studio_color_own")]];return m`${O(t,e,i?"own":n,s,a=>r(a==="own"?y_(n):a))}
  ${i?ve(t,o("studio_color_own"),n,"#8a6a4a",a=>r(a??"wood")):g}`}function w_(t,e,n){let r=t.t,o=e.recipe,i=c=>n.change(pc({...o,...c})),s=(c,u,d)=>A(t,r(c),u,h=>i({[d]:h}),1,1),a=(c,u,d)=>A(t,r(c),u,h=>i({[d]:h}),1,0),l=()=>{switch(o.kind){case"cabinet":return m`${a("studio_doors",o.doors,"doors")} ${a("studio_drawers",o.drawers,"drawers")}
          ${o.doors+o.drawers===0?a("studio_shelves",o.shelves,"shelves"):g}
          ${O(t,r("studio_handle"),o.handle,[["bar",r("studio_handle_bar")],["knob",r("studio_handle_knob")],["none",r("studio_handle_none")]],c=>i({handle:c}))}
          ${O(t,r("studio_base"),o.base,[["plinth",r("studio_base_plinth")],["legs",r("studio_base_legs")],["none",r("studio_base_none")]],c=>i({base:c}))}`;case"shelf":return m`${a("studio_shelves",o.shelves,"shelves")} ${D(t,r("studio_back"),o.back,c=>i({back:c}))}`;case"lamp":return O(t,r("studio_lamp"),o.lamp,[["floor",r("studio_lamp_floor")],["table",r("studio_lamp_table")],["pendant",r("studio_lamp_pendant")],["wall",r("studio_lamp_wall")]],c=>i({lamp:c}));case"device":return m`${D(t,r("studio_display"),o.display,c=>i({display:c}))}
          ${O(t,r("studio_mount"),o.mount,[["floor",r("studio_mount_floor")],["surface",r("studio_mount_surface")],["wall",r("studio_mount_wall")]],c=>i({mount:c}))}
          ${o.mount==="floor"?O(t,r("studio_base"),o.base,[["none",r("studio_base_none")],["legs",r("studio_base_legs")],["plinth",r("studio_base_plinth")]],c=>i({base:c})):g}`}};return m`<section class="nf-studio">
    <h3>🛠️ ${r(e.itemId?"studio_title_edit":"studio_title")}</h3>
    ${R(r("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${r("studio_kind")}>
      ${p_.map(c=>m`<button class="nf-chip" aria-pressed=${o.kind===c} ?disabled=${!!e.itemId&&o.kind!==c} @click=${()=>o.kind!==c&&n.change(f_(o,c))}>${r(`studio_kind_${c}`)}</button>`)}
    </div>
    ${vx(o)}
    <div class="nf-form">
      ${U(t,r("studio_name"),o.name,c=>i({name:c}),{wide:!0,maxlength:60,placeholder:r(`studio_kind_${o.kind}`)})}
      ${s("studio_width",o.w,"w")} ${s("studio_depth",o.d,"d")} ${s("studio_height",o.h,"h")} ${l()}
      ${b_(t,r(o.kind==="lamp"?"studio_color_lamp_body":"studio_color_body"),o.body,c=>i({body:c}))}
      ${o.kind==="cabinet"||o.kind==="shelf"||o.kind==="lamp"||o.display?b_(t,r(o.kind==="lamp"?"studio_color_shade":o.kind==="device"?"studio_color_display":o.kind==="shelf"?"studio_color_boards":"studio_color_front"),o.front,c=>i({front:c})):g}
    </div>
    ${e.error?m`<p class="nf-sub nf-warn">${e.error}</p>`:g}
    ${J(m`<button class="nf-btn nf-primary" ?disabled=${e.busy||!t.admin} @click=${()=>n.save()}>${r(e.itemId?"studio_save":"studio_place")}</button>`,m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>n.close()}>${r("cancel")}</button>`)}
  </section>`}var kx={room_no_area:"\u{1F3F7}\uFE0F",areas_unplaced:"\u2795",devices_unplaced:"\u{1F4CD}",rooms_overlap:"\u29C9",opening_off_wall:"\u{1F6AA}",entity_missing:"\u2753",furniture_entity_missing:"\u2753",standby:"\u{1F50C}",battery_low:"\u{1FAAB}"};function xx(t,e){let n=e.kind==="room_no_area"&&e.vars.area?"check_room_no_area_named":`check_${e.kind}`;return t.t(n,e.vars)}function $x(t,e){let n=t.t;switch(e.fix.do){case"set_area":return n("check_fix_set_area",{area:String(e.vars.area)});case"add_area_rooms":return n("check_fix_add_rooms");case"place_devices":return n("check_fix_place",{n:e.fix.entityIds.length});case"remove_placements":return n("check_fix_remove",{n:e.fix.entityIds.length});default:return n("check_fix_show")}}function v_(t,e,n){let r=t.t,o=t.doc.floors.filter(i=>e.some(s=>s.floorId===i.id));return m`<section class="nf-check-panel">
    <div class="nf-h3row"><h3>✓ ${r("check_title")}</h3><button class="nf-btn nf-field-btn" title=${r("close")} @click=${()=>n.close()}>✕</button></div>
    ${e.length===0?m`<p class="nf-sub nf-check-ok">✅ ${r("check_all_good")}</p>`:m`${R(r("check_hint",{n:e.length}))}
        ${o.map(i=>m`<h4 class="nf-check-floor">${i.name}</h4>
            <ul class="nf-check-list">
              ${e.filter(s=>s.floorId===i.id).map(s=>m`<li>
                    <span class="nf-check-icon" aria-hidden="true">${kx[s.kind]}</span><span class="nf-check-text">${xx(t,s)}</span>
                    <button class="nf-btn ${s.changes?"nf-primary":""}" ?disabled=${s.changes&&!t.admin} @click=${()=>n.fix(s)}>${$x(t,s)}</button>
                    ${s.entityIds?Sx(t,s.entityIds,n):g}
                  </li>`)}
            </ul>`)}`}
    ${(t.doc.settings.check_ignore??[]).length>0?m`<p class="nf-sub"><button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.resetIgnored()}>${r("check_reset_ignored",{n:t.doc.settings.check_ignore.length})}</button></p>`:g}
  </section>`}function Sx(t,e,n){let r=t.t;return m`<details class="nf-check-names">
    <summary>${r("check_show_devices",{n:e.length})}</summary>
    <p class="nf-check-all"><button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.ignore(e)}>${r("check_ignore_all",{n:e.length})}</button></p>
    <ul>
      ${e.map(o=>m`<li><span class="nf-check-name" title=${o}>${t.hass?K(t.hass,o):o}</span> <small>${o}</small>
        <button class="nf-btn nf-check-ignore" ?disabled=${!t.admin} @click=${()=>n.ignore([o])}>${r("check_fix_ignore")}</button></li>`)}
    </ul>
  </details>`}var k_=(t,e)=>m`<button class="nf-btn nf-check-open" title=${t.t("check_open_hint")} @click=${e}>✓ ${t.t("check_open")}</button>`;function x_(t,e){if(!e||!Number.isFinite(e.value))return null;let n=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!n)return null;let r=/^(ct|cent|cents|c)$/i.test(n[1]),o=r||/^eur$/i.test(n[1])?"\u20AC":n[1];return{value:Math.round(t*e.value*(r?1:100))/100,currency:o}}var S_=20,$_=new WeakMap;function Mx(t){let e=t.entities??{},n=$_.get(e);if(!n){n=new Map;for(let[r,o]of Object.entries(e))o.device_id&&r.startsWith("sensor.")&&t.states[r]?.attributes.device_class==="battery"&&!n.has(o.device_id)&&n.set(o.device_id,r);$_.set(e,n)}return n}function Rx(t,e){let n=t.entities?.[e]?.device_id,r=n?Mx(t).get(n):void 0;if(r){let s=Number(t.states[r]?.state);if(Number.isFinite(s))return s}let o=t.states[e]?.attributes;if(!o||o.battery_level===void 0&&o.battery===void 0)return null;let i=Number(o.battery_level??o.battery);return Number.isFinite(i)?i:null}function Ex(t){let e=[],n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);for(let r of t.placements)e.push({entity:r.entity_id,x:r.x,z:r.z,room:null});for(let r of t.furniture)for(let o of[r.entity,r.power])n(o)&&e.push({entity:o,x:r.x,z:r.z,room:null});for(let r of t.openings)for(let o of[r.contact,r.contact2,r.tilt,r.tilt2,r.cover,r.cover2,r.lock])n(o)&&e.push({entity:o,x:NaN,z:NaN,room:r.room_id});return e}var Ax=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function M_(t,e){let n=new Set,r=[];for(let o of e.floors)for(let i of Ex(o)){let s=t.entities?.[i.entity]?.device_id??i.entity;if(n.has(s))continue;let a=Rx(t,i.entity);a!==null&&(n.add(s),r.push({entity:i.entity,level:a,floorId:o.id,roomId:i.room??Ax(o,i.x,i.z)?.id??null}))}return r.sort((o,i)=>o.level-i.level)}var gr=.08;function R_(t,e){let n=1/0;for(let r=0;r<e.length;r++){let o=e[r],i=e[(r+1)%e.length],[s,a]=[i[0]-o[0],i[1]-o[1]],l=s*s+a*a,c=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*s+(t[1]-o[1])*a)/l)):0;n=Math.min(n,Math.hypot(t[0]-(o[0]+s*c),t[1]-(o[1]+a*c)))}return n}var E_=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function Fx(t,e,n=.2){if(t.points.length<3||e.points.length<3)return!1;let[r,o]=[E_(t.points),E_(e.points)],i=Math.max(r.x0,o.x0)+gr,s=Math.min(r.x1,o.x1)-gr,a=Math.max(r.z0,o.z0)+gr,l=Math.min(r.z1,o.z1)-gr;if(s<=i||l<=a)return!1;for(let c=i;c<=s+1e-9;c+=Math.min(n,s-i||n))for(let u=a;u<=l+1e-9;u+=Math.min(n,l-a||n)){let d=[c,u];if(N(d,t.points)&&N(d,e.points)&&R_(d,t.points)>gr&&R_(d,e.points)>gr)return!0}return!1}function F_(t){let e=new Set(["id","type","variant","name","icon","picture","vehicle","room_id","wall"]),n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);return Object.entries(t).flatMap(([r,o])=>e.has(r)?[]:Array.isArray(o)?o.filter(n):n(o)?[o]:[])}var A_=t=>F_(t),zx=3,Tx=new Set(["off","standby","idle"]);function Px(t,e,n,r){let o=e.energy.tariff,i=o?t.states[o]:void 0,s=i?{value:Number(i.state),unit:String(i.attributes.unit_of_measurement??"")}:null,a=new Set,l=(c,u)=>{if(!c||c==="none"||a.has(c))return;a.add(c);let d=t.states[c]?.state;if(!d||!Tx.has(d)||c.startsWith("light."))return;let h=dp(t,c),p=h?Re(t.states[h]):null;if(p===null||p<=zx)return;let f=x_(p*24*365/1e3,s);r.push({kind:"standby",floorId:n.id,vars:{name:K(t,c),w:Math.round(p),cost:f?`${f.value.toFixed(0)} ${f.currency}`:`${Math.round(p*24*365/1e3)} kWh`},fix:u,changes:!1})};for(let c of n.furniture)l(c.entity,{do:"show_furniture",furnitureId:c.id});for(let c of n.placements){let u=n.rooms.find(d=>d.points.length>=3&&N([c.x,c.z],d.points));u&&l(c.entity_id,{do:"show_room",roomId:u.id})}}function z_(t,e){let n=[],r=e?.areas,o=new Set(t.settings.check_ignore??[]),i=new Set(t.floors.flatMap(s=>s.rooms.map(a=>a.area_id)).filter(s=>!!s));for(let s of t.floors){if(s.layer)continue;for(let l of s.rooms){if(l.area_id)continue;let c=Object.values(r??{}).find(u=>u.name.trim().toLowerCase()===l.name.trim().toLowerCase()&&!i.has(u.area_id));n.push(c?{kind:"room_no_area",floorId:s.id,vars:{room:l.name,area:c.name},fix:{do:"set_area",roomId:l.id,areaId:c.area_id},changes:!0}:{kind:"room_no_area",floorId:s.id,vars:{room:l.name,area:""},fix:{do:"show_room",roomId:l.id},changes:!1})}let a=pr(t,s,r);if(a.length&&n.push({kind:"areas_unplaced",floorId:s.id,vars:{n:a.length,names:a.map(l=>l.name).join(", ")},fix:{do:"add_area_rooms"},changes:!0}),e){let l=Ze(e,[s]),c=zr(e,[s]);for(let u of s.rooms){if(!u.area_id)continue;let d=ts(s,u);for(let f of s.furniture)if(N([f.x,f.z],u.points))for(let _ of A_(f))d.add(_);for(let f of s.openings)if(f.room_id===u.id){for(let _ of F_(f))d.add(_);for(let _ of Object.values(c.get(f.id)??{}))typeof _=="string"&&d.add(_)}for(let f of s.furniture){let _=l.get(f.id);if(_&&N([f.x,f.z],u.points))for(let b of[_.entity,_.power])typeof b=="string"&&d.add(b)}let h=$e(e,u).filter(f=>Ot(je(e,f))),p=Tn(e,h).map(f=>f.primary).filter(f=>!d.has(f)&&!o.has(f));p.length&&n.push({kind:"devices_unplaced",floorId:s.id,vars:{room:u.name,n:p.length},fix:{do:"place_devices",roomId:u.id,entityIds:p},entityIds:p,changes:!0})}}for(let l=0;l<s.rooms.length;l++)for(let c=l+1;c<s.rooms.length;c++){let[u,d]=[s.rooms[l],s.rooms[c]];Fx(u,d)&&n.push({kind:"rooms_overlap",floorId:s.id,vars:{a:u.name,b:d.name},fix:{do:"show_room",roomId:d.id},changes:!1})}if(s.openings.length){let l=we(s.rooms,Me(t.settings),s.walls??[]).walls;for(let c of s.openings){let u=Ne(c,s.rooms,s.walls??[]);(!u||!Bt(l,c,u))&&n.push({kind:"opening_off_wall",floorId:s.id,vars:{room:s.rooms.find(d=>d.id===c.room_id)?.name??""},fix:{do:"show_opening",openingId:c.id},changes:!1})}}if(e&&Px(e,t,s,n),e&&Object.keys(e.states).length){let l=s.placements.map(c=>c.entity_id).filter(c=>!e.states[c]);l.length&&n.push({kind:"entity_missing",floorId:s.id,vars:{n:l.length,ids:l.slice(0,3).join(", ")},fix:{do:"remove_placements",entityIds:l},changes:!0});for(let c of s.furniture){let u=A_(c).filter(d=>d!=="none"&&!e.states[d]);u.length&&!(he(c.type)&&!c.entity)&&n.push({kind:"furniture_entity_missing",floorId:s.id,vars:{id:u[0]},fix:{do:"show_furniture",furnitureId:c.id},changes:!1})}}}if(e)for(let s of M_(e,t)){if(s.level>=S_)break;n.push({kind:"battery_low",floorId:s.floorId,vars:{name:K(e,s.entity),level:Math.round(s.level)},fix:s.roomId?{do:"show_room",roomId:s.roomId}:{do:"show_floor"},changes:!1})}return n}var ne=t=>t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),It=t=>t.map(([e,n])=>`${e.toFixed(3)},${n.toFixed(3)}`).join(" ");function fc(t,e,n,r,o={}){let i=we(e.rooms,Me(t.settings),e.walls??[]).walls,s=[...e.rooms.flatMap(y=>y.points),...i.flatMap(y=>y.footprint)];if(!s.length)return"";let[a,l]=[Math.min(...s.map(y=>y[0])),Math.max(...s.map(y=>y[0]))],[c,u]=[Math.min(...s.map(y=>y[1])),Math.max(...s.map(y=>y[1]))],d=1.2,h=[];for(let y of e.rooms)h.push(`<polygon points="${It(y.points)}" fill="#f4f4f4" stroke="none"/>`);for(let y of i)h.push(`<polygon points="${It(y.footprint)}" fill="#222" stroke="#222" stroke-width="0.01"/>`);for(let y of e.openings){let x=Ne(y,e.rooms,e.walls??[]),k=x?Bt(i,y,x):null;if(!k)continue;let{wall:S,s:$}=k,E=Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1]);if(E<1e-6)continue;let z=[(S.b[0]-S.a[0])/E,(S.b[1]-S.a[1])/E],P=[-z[1],z[0]],T=(Q,B)=>[S.a[0]+z[0]*Q+P[0]*B,S.a[1]+z[1]*Q+P[1]*B],[C,W]=[$-y.width/2,$+y.width/2],[V,Y]=[S.left+.01,-(S.right+.01)];if(h.push(`<polygon points="${It([T(C,V),T(W,V),T(W,Y),T(C,Y)])}" fill="#fff"/>`),y.type==="garage"){let Q=(S.left-S.right)/2;h.push(`<polyline points="${It([T(C,Q),T(W,Q)])}" fill="none" stroke="#555" stroke-width="0.02" stroke-dasharray="0.12 0.08"/>`)}else if(y.type==="window"){let Q=(S.left-S.right)/2;h.push(`<polyline points="${It([T(C,Q),T(W,Q)])}" fill="none" stroke="#222" stroke-width="0.03"/>`),h.push(`<polyline points="${It([T(C,V-.01),T(W,V-.01)])}" fill="none" stroke="#222" stroke-width="0.015"/><polyline points="${It([T(C,Y+.01),T(W,Y+.01)])}" fill="none" stroke="#222" stroke-width="0.015"/>`)}else{let Q=x.room,B=$t(Q,x.edge,y.offset-y.width/2),ue=$t(Q,x.edge,y.offset+y.width/2),Ke=Math.hypot(ue[0]-B[0],ue[1]-B[1])||1,Ao=[(ue[0]-B[0])/Ke,(ue[1]-B[1])/Ke],$s=_e(Q.points)>=0?1:-1,kc=[-Ao[1]*$s,Ao[0]*$s],xc=S.free||S.roomLeft===Q.id?[S.left,S.right]:[S.right,S.left],$c=y.swing==="out",Sc=xt(y,S.exterior),br=$c?-xc[1]:xc[0],yr=(wr,To)=>[wr[0]+kc[0]*To,wr[1]+kc[1]*To],Fo=(y.leaves===2?.5:1)*Ke,zo=(wr,To)=>{let[Ss,Ms]=yr(wr,br),[Rc,Ec]=yr(To,br),Po=yr(wr,br+($c?-Fo:Fo)),eb=(Po[0]-Ss)*(Ec-Ms)-(Po[1]-Ms)*(Rc-Ss)>0?1:0;return`<path d="M ${Ss} ${Ms} L ${Po[0]} ${Po[1]} A ${Fo} ${Fo} 0 0 ${eb} ${Rc} ${Ec}" fill="none" stroke="#555" stroke-width="0.015"/>`},Q_=y.hinge==="left"==$s>0,Mc=[(B[0]+ue[0])/2,(B[1]+ue[1])/2];Sc==="passage"||(Sc==="sliding"?h.push(`<polyline points="${It([yr(B,br),yr(ue,br)])}" fill="none" stroke="#555" stroke-width="0.015"/>`):y.leaves===2?h.push(zo(B,Mc),zo(ue,Mc)):h.push(Q_?zo(B,ue):zo(ue,B)))}}if(o.furniture)for(let y of e.furniture)y.w<=0||y.d<=0||h.push(`<polygon points="${It(Ar(y))}" fill="#e6e6e6" stroke="#8a8a8a" stroke-width="0.02"/>`);let p=new Map(n.map(y=>[y.roomId,y]));for(let y of o.names===!1?[]:e.rooms){if(y.points.length<3)continue;let[x,k]=xe(y.points),S=p.get(y.id);h.push(`<text x="${x}" y="${k-.08}" font-size="0.32" text-anchor="middle" font-weight="600">${ne(y.name)}</text>`),S&&h.push(`<text x="${x}" y="${k+.32}" font-size="0.24" text-anchor="middle" fill="#444">${ne(r.area(S.living>0?S.living:S.floor))}</text>`)}let f=(y,x,k,S,$,E)=>{let P=(y+k)/2,T=(x+S)/2,C=E?`M ${y-.15} ${x} L ${y+.15} ${x} M ${k-.15} ${S} L ${k+.15} ${S}`:`M ${y} ${x-.15} L ${y} ${x+.15} M ${k} ${S-.15} L ${k} ${S+.15}`,W=E?`<text x="${P-.25}" y="${T}" font-size="0.26" text-anchor="middle" transform="rotate(-90 ${P-.25} ${T})">${ne($)}</text>`:`<text x="${P}" y="${T+.4}" font-size="0.26" text-anchor="middle">${ne($)}</text>`;return`<path d="M ${y} ${x} L ${k} ${S} ${C}" stroke="#222" stroke-width="0.015" fill="none"/>${W}`};o.dimensions!==!1&&(h.push(f(a,u+.5,l,u+.5,r.length(l-a),!1)),h.push(f(a-.5,c,a-.5,u,r.length(u-c),!0))),o.dimensions!==!1&&h.push(`<path d="M ${l-1} ${c-.7} L ${l} ${c-.7}" stroke="#222" stroke-width="0.06"/><text x="${l-.5}" y="${c-.85}" font-size="0.22" text-anchor="middle">${ne(r.length(1))}</text>`);let _=o.dimensions===!1?.4:d,[b,w]=[l-a+2*_,u-c+2*_],v=`${a-_} ${c-_} ${b} ${w}`;if(o.px){let[y,x]=[Math.round(o.px),Math.round(o.px*w/b)];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${v}" width="${y}" height="${x}" font-family="system-ui, sans-serif"><rect x="${a-_}" y="${c-_}" width="${b}" height="${w}" fill="#fff"/>${h.join("")}</svg>`}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${v}" style="width:${(b*10).toFixed(1)}mm" font-family="system-ui, sans-serif">${h.join("")}</svg>`}function T_(t,e){let n=t.floors.filter(l=>!l.layer&&l.rooms.length),r=[],o=[],i=[];for(let l of[...n].sort((c,u)=>c.elevation-u.elevation)){let c=$n(t,l);i.push(...c);let u=hr(c);r.push(`<section class="page"><h1>${ne(l.name)}</h1><div class="sub">${ne(e.living)}: ${ne(e.area(u.living))}</div>${fc(t,l,c,e)}</section>`),o.push(`<tr class="floor"><th colspan="4">${ne(l.name)}</th></tr>`);for(let d of c){let h=l.rooms.find(p=>p.id===d.roomId);o.push(`<tr><td>${ne(h.name)}</td><td>${ne(e.area(d.floor))}</td><td>${d.low>.05?ne(e.area(d.low)):""}</td><td><b>${ne(e.area(d.living))}</b></td></tr>`)}o.push(`<tr class="sum"><td>${ne(e.total)}</td><td>${ne(e.area(u.floor))}</td><td>${u.low>.05?ne(e.area(u.low)):""}</td><td><b>${ne(e.area(u.living))}</b></td></tr>`)}let s=hr(i),a=`<section class="page"><h1>${ne(e.living)}</h1><table><thead><tr><th>${ne(e.room)}</th><th>${ne(e.floorArea)}</th><th>${ne(e.low)}</th><th>${ne(e.living)}</th></tr></thead><tbody>${o.join("")}<tr class="grand"><td>${ne(e.total)}</td><td>${ne(e.area(s.floor))}</td><td>${s.low>.05?ne(e.area(s.low)):""}</td><td><b>${ne(e.area(s.living))}</b></td></tr></tbody></table><p class="note">${ne(e.note)}</p></section>`;return`<!doctype html><html><head><meta charset="utf-8"><title>${ne(e.title)}</title><style>
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
  </style></head><body>${r.join("")}${a}<script>window.addEventListener("load", () => setTimeout(() => window.print(), 300));<\/script></body></html>`}var mc=2400;function P_(t,e,n,r){let o={...r,px:mc};return fc(t,e,$n(t,e),n,o)}function Ix(t){let e=Number(/\swidth="(\d+)"/.exec(t)?.[1]),n=Number(/\sheight="(\d+)"/.exec(t)?.[1]);return[e||mc,n||mc]}async function I_(t){let[e,n]=Ix(t),r=URL.createObjectURL(new Blob([t],{type:"image/svg+xml;charset=utf-8"}));try{let o=new Image;o.decoding="async",await new Promise((s,a)=>{o.onload=()=>s(),o.onerror=()=>a(new Error("the plan image could not be drawn")),o.src=r});let i=document.createElement("canvas");return i.width=e,i.height=n,i.getContext("2d").drawImage(o,0,0,e,n),await new Promise((s,a)=>i.toBlob(l=>l?s(l):a(new Error("no image")),"image/png"))}finally{URL.revokeObjectURL(r)}}var D_=t=>`${t.normalize("NFKD").replace(/[^\w]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase()||"floor"}.png`;function O_(t,e){let n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=e,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var L_="nextfloor.tour_done",Dx=[["Ctrl Z","keys_undo"],["Ctrl Shift Z \xB7 Ctrl Y","keys_redo"],["Ctrl D","keys_duplicate"],["Entf / Delete","keys_delete"],["\u2190 \u2191 \u2192 \u2193","keys_nudge"],["Shift + \u2190\u2191\u2192\u2193","keys_nudge_10"],["Alt + \u2190\u2191\u2192\u2193","keys_nudge_1"],["R \xB7 Shift R","keys_rotate"],["L","keys_lock"],["Enter","keys_close_shape"],["Esc","keys_escape"],["Shift","keys_straight"],["?","keys_sheet"]],xs=[["tour_1_title","tour_1"],["tour_2_title","tour_2"],["tour_3_title","tour_3"],["tour_4_title","tour_4"]];function H_(){try{return localStorage.getItem(L_)!=="1"}catch{return!1}}function C_(){try{localStorage.setItem(L_,"1")}catch{}}function N_(t,e){return m`<div class="nf-keys" role="dialog" aria-label=${t("keys_title")} @click=${n=>n.target===n.currentTarget&&e()}>
    <div class="nf-keys-card">
      <div class="nf-h3row"><h3>⌨ ${t("keys_title")}</h3><button class="nf-btn nf-field-btn" aria-label=${t("close")} @click=${e}>✕</button></div>
      <dl>
        ${Dx.map(([n,r])=>m`<dt>${n.split(" \xB7 ").map((o,i)=>m`${i?" \xB7 ":""}<kbd>${o}</kbd>`)}</dt><dd>${t(r)}</dd>`)}
      </dl>
    </div>
  </div>`}function Ox(t){return{rect:t("tool_rect"),free:t("tool_polygon"),rooms:t("area_rooms",{n:"\u2026"}).replace(/\s*\(…\)\s*$/,""),opening:t("tool_opening"),furniture:t("tool_furniture"),split:t("split_3d"),check:t("check_open")}}function W_(t,e,n){if(e===null||e>=xs.length)return g;let[r,o]=xs[e],i=e===xs.length-1;return m`<div class="nf-tour" role="dialog" aria-label=${t("tour_title")}>
    <div class="nf-tour-step">${e+1} / ${xs.length}</div>
    <h3>${t(r)}</h3>
    <p>${t(o,Ox(t))}</p>
    <div class="nf-actions">
      ${e>0?m`<button class="nf-btn" @click=${()=>n(e-1)}>‹ ${t("tour_back")}</button>`:g}
      <button class="nf-btn nf-primary" @click=${()=>n(i?null:e+1)}>${t(i?"tour_done":"tour_next")}</button>
      ${i?g:m`<button class="nf-link" @click=${()=>n(null)}>${t("tour_skip")}</button>`}
    </div>
  </div>`}var qt="https://github.com/therealMRBK/NextFloor";var gc=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},_present:{state:!0},_draft:{state:!0},_busy:{state:!0},_message:{state:!0}};checked=new Set;run=0;constructor(){super(),this._present={},this._draft=null,this._busy=!1,this._message=null}t(e,n){return ke(this.hass,e,n)}get slots(){return ag(this.packs??[],this.hass?.language??"en")}willUpdate(){for(let e of this.slots)this.checked.has(e.id)||!this.hass?.fetchWithAuth||(this.checked.add(e.id),this.askPresence(e.id))}async askPresence(e){let n=await this.hass.fetchWithAuth(kn(e),{method:"HEAD"}).catch(()=>null),r=n&&n.status!==405?n.ok:await this.hass.fetchWithAuth(kn(e)).then(o=>o.ok,()=>!1);this._present={...this._present,[e]:r?"yes":"no"}}async chooseLibraryModel(e){if(e){this._message=null,this._busy=!0;try{let n=await e.arrayBuffer(),o=await(await bt()).inspectModel(n),i=e.name.replace(/\.[^.]+$/,"").trim()||"3D-Modell",s=i.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,24)||"item",a=Date.now().toString(36).slice(-6),l=`lib_${s}_${a}`.slice(0,48),c=[Math.max(.05,Math.round(o.size[0]*100)/100),Math.max(.05,Math.round(o.size[2]*100)/100),Math.max(.05,Math.round(o.size[1]*100)/100)];this._draft={slot:{id:l,items:[i]},isNewLibraryItem:!0,customName:i,customSize:c,fileName:e.name,data:n,info:o,turns:0,paint:o.paint,detail:"normal",colour:"#8b7355",result:null},await this.refresh()}catch(n){this._message={ok:!1,text:String(n?.message??n)}}finally{this._busy=!1}}}async choose(e,n){if(n){this._message=null,this._busy=!0;try{let r=await n.arrayBuffer(),i=await(await bt()).inspectModel(r);this._draft={slot:e,fileName:n.name,data:r,info:i,turns:0,paint:i.paint,detail:"normal",colour:"#1d5bd6",result:null},await this.refresh()}catch(r){this._draft=null,this._message={ok:!1,text:this.readError(r)}}finally{this._busy=!1}}}readError(e){let r=`model_error_${e?.reason}`,o=this.t(r);return o===r?this.t("model_error_unreadable",{detail:String(e?.message??e)}):o}async refresh(){let e=this._draft;if(!e)return;let n=++this.run;this._busy=!0;try{let r=await bt(),{glb:o,triangles:i}=await r.prepareModel(e.data,{turns:e.turns,paint:e.paint,maxTriangles:lg(e.detail)}),s=await r.previewModel(o,e.colour);n===this.run&&this._draft===e&&(this._draft={...e,result:{glb:o,triangles:i,picture:s}})}catch(r){n===this.run&&(this._message={ok:!1,text:this.readError(r)})}finally{n===this.run&&(this._busy=!1)}}change(e){this._draft&&(this._draft={...this._draft,...e},this.refresh())}turn(e){this._draft&&this.change({turns:(this._draft.turns+e+4)%4})}togglePaint(e,n){if(!this._draft)return;let r=this._draft.paint.filter(o=>o!==e);this.change({paint:n?[...r,e]:r})}async upload(){let e=this._draft;if(!(!e?.result||!this.hass?.fetchWithAuth)){if(e.result.glb.byteLength>ir){this._message={ok:!1,text:this.t("model_error_too_large",{max:sr(ir)})};return}this._busy=!0;try{let n=await this.hass.fetchWithAuth(kn(e.slot.id),{method:"POST",body:e.result.glb}),r=Gl(n.status);if(r){this._message={ok:!1,text:this.t(`model_upload_${r}`,{max:sr(ir)})};return}if(this._present={...this._present,[e.slot.id]:"yes"},e.isNewLibraryItem){let o=(this.packs??[]).find(u=>u.id==="custom.library"),i=o?.items??[],s=(e.customName||e.slot.items[0]).slice(0,80),a=e.customSize??[1,1,1],l={id:e.slot.id,name:{en:s,sv:s,de:s},size:a,mesh:e.slot.id,parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:1,color:"body"}]},c={format:"nfpack",version:1,id:"custom.library",name:"Egna 3D-m\xF6bler",publisher:"Custom",release:Math.max(1,(o?.release??0)+1),items:[...i,l]};await tn(this.hass,JSON.stringify(c)),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}this._message={ok:!0,text:this.t("model_uploaded",{id:e.slot.id,size:sr(e.result.glb.byteLength)})},this._draft=null}catch(n){this._message={ok:!1,text:this.t("model_upload_other",{detail:String(n?.message??n)})}}finally{this._busy=!1}}}async removeModel(e){if(!this.hass?.fetchWithAuth||!confirm(this.t("model_remove_confirm",{id:e.id})))return;let n=await this.hass.fetchWithAuth(kn(e.id),{method:"DELETE"}),r=Gl(n.status);this._present={...this._present,[e.id]:r?this._present[e.id]:"no"},this._message=r?{ok:!1,text:this.t(`model_upload_${r}`,{max:sr(ir)})}:{ok:!0,text:this.t("model_removed",{id:e.id})}}row(e){let n=this._present[e.id]??"unknown",r=n==="yes"?this.t("model_present"):n==="no"?this.t("model_missing"):"\u2026";return m`<div class="nf-model">
      <div>
        <b>${e.items[0]}</b>${e.items.length>1?m` <span class="nf-sub">+${e.items.length-1}</span>`:g}
        <span class="nf-sub">${e.id}.glb · <span class="nf-model-${n}">${r}</span></span>
      </div>
      <div class="nf-model-actions">
        <label class="nf-btn nf-primary">
          ${this.t(n==="yes"?"model_replace":"model_add")}
          <input type="file" accept=".glb,.gltf,.dae,.obj,.stl,model/gltf-binary,model/gltf+json" hidden @change=${o=>this.picked(e,o)} />
        </label>
        ${n==="yes"?m`<button class="nf-btn nf-danger" @click=${()=>this.removeModel(e)}>${this.t("model_remove")}</button>`:g}
      </div>
    </div>`}picked(e,n){let r=n.target,o=r.files?.[0];r.value="",this.choose(e,o)}editor(e){let{info:n,result:r}=e,o=n.size.map(i=>i.toFixed(2)).join(" \xD7 ");return m`<section class="nf-model-edit">
      <h4>${e.slot.items[0]}</h4>
      <p class="nf-sub">${e.fileName} · ${this.t("model_info",{triangles:n.triangles.toLocaleString(this.hass?.language),size:o})}</p>
      <div class="nf-model-body">
        <div class="nf-model-picture">${r?m`<img src=${r.picture} alt="" />`:m`<span class="nf-sub">${this.t("loading")}</span>`}</div>
        <div class="nf-model-options">
          ${e.isNewLibraryItem?m`<label class="nf-field">${this.t("furn_name")}<input type="text" maxlength="60" .value=${e.customName??""} @input=${i=>this._draft={...e,customName:i.target.value}} /></label>`:g}
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
            <div class="nf-seg">${Ul.map(i=>m`<button aria-pressed=${e.detail===i.key} @click=${()=>this.change({detail:i.key})}>${this.t(`model_detail_${i.key}`)}</button>`)}</div>
            ${r?m`<small class="nf-sub">${this.t("model_result",{triangles:r.triangles.toLocaleString(this.hass?.language),size:sr(r.glb.byteLength)})}</small>`:g}
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
      <div class="nf-model">
        <div>
          <b>➕ ${this.t("model_add_library")}</b>
          <span class="nf-sub">${this.t("model_add_library_hint")}</span>
        </div>
        <div class="nf-model-actions">
          <label class="nf-btn nf-primary">
            ${this.t("model_add_library_btn")}
            <input type="file" accept=".glb,.gltf,.dae,.obj,.stl,model/gltf-binary,model/gltf+json" hidden @change=${n=>{let r=n.target,o=r.files?.[0];r.value="",this.chooseLibraryModel(o)}} />
          </label>
        </div>
      </div>
      ${e.map(n=>this.row(n))}
      ${this._draft?this.editor(this._draft):g}
      ${this._busy&&!this._draft?m`<p class="nf-sub">${this.t("loading")}</p>`:g}
      ${this._message?m`<p class="nf-sub ${this._message.ok?"nf-notice":"nf-pack-error"}">${this._message.text}</p>`:g}
      <p class="nf-sub">${this.t("models_licence")}</p>
    </section>`}static styles=[Pe,et,le`
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
    `]};customElements.get("nf-model-upload")||customElements.define("nf-model-upload",gc);var _r="therealMRBK/NextFloor-Plugins",B_=`https://raw.githubusercontent.com/${_r}/main/index.json`,Lx=t=>/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(t),Le=(t,e)=>typeof t=="string"?t.trim().slice(0,e):"";function Hx(t){let e=t?.plugins;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Le(o.id,64),s=Le(o.url,300),a=Le(o.sha256,64).toLowerCase(),l=Le(o.name,60),c=Le(o.version,40),u=Le(o.homepage,200);!/^[\w.-]+$/.test(i)||n.has(i)||!l||!c||!Lx(s)||!/^[0-9a-f]{64}$/.test(a)||(n.add(i),r.push({id:i,name:l,description:Le(o.description,300),author:Le(o.author,60),version:c,homepage:/^https:\/\//.test(u)?u:"",url:s,sha256:a}))}return r}async function V_(t=(...e)=>fetch(...e)){let e=await t(B_,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Hx(await e.json())}function K_(t,e){let n=(e??[]).find(r=>r.id===t.id);return n?n.sha256===t.sha256&&n.url===t.url?"installed":"update":"available"}function G_(t,e){let n=t??[],r={url:e.url,enabled:!0,id:e.id,version:e.version,sha256:e.sha256},o=n.findIndex(i=>i.id===e.id);return o<0?[...n,r]:n.map((i,s)=>s===o?{...r,enabled:i.enabled}:i)}var Cx=(t,e)=>t===`https://raw.githubusercontent.com/${_r}/main/packs/${e}.json`;function Nx(t){let e=t?.packs;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Le(o.id,40),s=Le(o.url,300),a=Le(o.sha256,64).toLowerCase(),l=Le(o.name,80);if(!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(i)||i.startsWith("nextfloor.")||n.has(i)||!l||!Cx(s,i)||!/^[0-9a-f]{64}$/.test(a))continue;n.add(i);let c=(u,d)=>typeof u=="number"&&Number.isInteger(u)&&u>0?u:d;r.push({id:i,name:l,description:Le(o.description,400),author:Le(o.author,80),release:c(o.release,1),items:c(o.items,0),url:s,sha256:a})}return r.sort((o,i)=>o.name.localeCompare(i.name))}async function U_(t=(...e)=>fetch(...e)){let e=await t(B_,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Nx(await e.json())}function j_(t,e){let n=e.find(r=>r.id===t.id);return n?(n.release??1)>=t.release?"installed":"update":"available"}var Wx=t=>[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("");async function Z_(t,e=(...n)=>fetch(...n)){let n=await e(t.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let r=await n.arrayBuffer(),o=globalThis.crypto?.subtle;if(o&&Wx(await o.digest("SHA-256",r))!==t.sha256)throw new Error("checksum mismatch: the file is not the one that was reviewed");return new TextDecoder().decode(r)}var Bx="https://therealmrbk.github.io/NextFloor/builder/",_c=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},_msg:{state:!0},_busy:{state:!0},_store:{state:!0},_storeError:{state:!0}};constructor(){super(),this._msg=null,this._busy=!1,this._store=null,this._storeError=null}async loadStore(){this._store="loading",this._storeError=null;try{this._store=await U_()}catch(e){this._store=null,this._storeError=this.t("community_failed",{detail:e?.message??String(e)})}}async installStore(e){this._busy=!0,this._msg=null;try{let n=await tn(this.hass,await Z_(e));this._msg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}finally{this._busy=!1}}renderStore(){let e=this.packs??[],n=this._store;return m`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${Bx} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${_r}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${n===null?m`<div><button class="nf-btn" @click=${()=>{this.loadStore()}}>${this.t("community_load")}</button></div>`:n==="loading"?m`<p class="nf-sub">${this.t("loading")}</p>`:n.length?m`<ul>
                ${n.map(r=>{let o=j_(r,e);return m`<li>
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
      ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}`}t(e,n){return ke(this.hass,e,n)}changed(){this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}errorText(e){let{code:n,message:r}=e??{},o=r??String(e),i=`pack_error_${n}`,s=this.t(i,{detail:o});return s===i?this.t("pack_error_other",{detail:o}):s}async importTexts(e){if(!this.hass||!e.length)return 0;this._busy=!0;let n=[],r=[];for(let{label:i,text:s}of e)try{let a=await tn(this.hass,s);n.push(this.t("pack_imported",{name:a.name,publisher:a.publisher,n:a.items}))}catch(a){r.push(i?`${i}: ${this.errorText(a)}`:this.errorText(a))}this._busy=!1,n.length&&this.changed();let o=e.length>1?[this.t("packs_imported_n",{n:n.length,total:e.length})]:[];return this._msg={ok:r.length===0,text:[...o,...n,...r].join(" \xB7 ")},n.length}async importFiles(e){let n=e.target,r=[...n.files??[]];n.value="",await this.importTexts(await Promise.all(r.map(async o=>({label:o.name,text:await o.text()}))))}async importPasted(){let e=this.renderRoot.querySelector("textarea"),n=e?.value.trim()??"";if(!e||!n)return void(this._msg={ok:!1,text:this.t("pack_paste_empty")});try{JSON.parse(n)}catch(r){return void(this._msg={ok:!1,text:this.t("pack_paste_not_json",{detail:r instanceof Error?r.message:String(r)})})}await this.importTexts([{label:"",text:n}])>0&&(e.value="")}async deletePack(e){if(!(!this.hass||!confirm(this.t("pack_remove_confirm",{name:Be(e,this.hass.language??"de")}))))try{await Qc(this.hass,e.id),this._msg=null,this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}}render(){let e=(this.packs??[]).filter(o=>!o.builtin),n=(this.packs??[]).length-e.length,r=this.hass?.language??"de";return m`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro",{n})} <a href="${qt}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${e.length?m`<ul>
            ${e.map(o=>m`<li>
                <div class="nf-pack-main">
                  <strong>${Be(o,r)}</strong>
                  <span class="nf-detail">${o.id} · ${this.t("pack_by",{publisher:o.publisher,n:o.items.length})}</span>
                  ${o.description?m`<span class="nf-detail">${o.description}</span>`:g}
                </div>
                ${o.builtin?m`<span class="nf-tag" style="opacity:0.75;font-size:12px;padding:4px 8px;border:1px solid var(--nf-line);border-radius:6px">${this.t("pack_builtin_tag")}</span>`:m`<button class="nf-btn" ?disabled=${this._busy} @click=${()=>this.deletePack(o)}>${this.t("pack_remove")}</button>`}
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
    </section>`}static styles=[Pe,et,le`
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
    `]};customElements.get("nf-pack-manager")||customElements.define("nf-pack-manager",_c);var VO=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var Vx=new Map;var q_=()=>[...Vx.values()];var bc=class extends oe{static properties={hass:{attribute:!1},plugins:{attribute:!1},_error:{state:!0},_store:{state:!0},_storeError:{state:!0},_storeOpen:{state:!0}};stop=null;constructor(){super(),this._error="",this._storeError="",this._storeOpen=!1}connectedCallback(){super.connectedCallback(),this.stop=ri(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}t(e,n){return ke(this.hass,e,n)}emit(e){this.dispatchEvent(new CustomEvent("plugins-changed",{detail:e,bubbles:!0,composed:!0}))}add(e){let n=Ys(e.value),r=this.plugins??[];if(!Xs(n))return void(this._error=this.t("plugins_url_invalid"));if(r.some(o=>o.url===n))return void(this._error=this.t("plugins_exists"));if(r.length>=20)return void(this._error=this.t("plugins_limit"));this._error="",e.value="",this.emit([...r,{url:n,enabled:!0}])}async toggleStore(){if(this._storeOpen=!this._storeOpen,!(!this._storeOpen||this._store)){this._storeError="";try{this._store=await V_()}catch(e){this._storeError=this.t("store_failed",{error:e instanceof Error?e.message:String(e)})}}}install(e){let n=this.plugins??[],r=n.some(o=>o.id===e.id);if(!r&&n.length>=20)return void(this._error=this.t("plugins_limit"));if(!r&&n.some(o=>o.url===e.url))return void(this._error=this.t("plugins_exists"));window.confirm(this.t("store_confirm",{name:e.name,author:e.author||"?",url:e.url}))&&(this._error="",this.emit(G_(n,e)))}renderStore(){return m`<div class="nf-store">
      <button class="nf-btn" @click=${()=>this.toggleStore()}>${this._storeOpen?this.t("store_close"):this.t("store_open")}</button>
      ${this._storeOpen?m`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${_r}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}
            ${!this._store&&!this._storeError?m`<p class="nf-sub">${this.t("plugins_loading")}</p>`:g}
            ${this._store&&!this._store.length?m`<p class="nf-sub">${this.t("store_empty")}</p>`:g}
            <ul>
              ${(this._store??[]).map(e=>{let n=K_(e,this.plugins);return m`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${e.name}</strong> <span class="nf-detail">${e.version}${e.author?` \xB7 ${e.author}`:""}</span></span>
                    ${e.description?m`<span class="nf-detail">${e.description}</span>`:g}
                    ${e.homepage?m`<a class="nf-detail" href=${e.homepage} target="_blank" rel="noopener">${e.homepage}</a>`:g}
                  </div>
                  ${n==="installed"?m`<span class="nf-state ok">${this.t("store_installed")}</span>`:m`<button class="nf-btn" @click=${()=>this.install(e)}>${n==="update"?this.t("store_update"):this.t("store_install")}</button>`}
                </li>`})}
            </ul>`:g}
    </div>`}stateOf(e){let n=q_().find(i=>i.url===e),r=Qs().filter(i=>i.source===e),o=[...n?.error?[n.error]:[],...r.flatMap(i=>i.errors)];if(n?.state==="error")return{label:this.t("plugins_error"),tone:"err",detail:o.join(" \xB7 ")};if(n?.state==="loading")return{label:this.t("plugins_loading"),tone:"warn",detail:""};if(n?.state==="loaded"&&!r.length)return{label:this.t("plugins_nothing_registered"),tone:"warn",detail:""};if(r.length){let i=r.map(s=>`${s.name}${s.version?` ${s.version}`:""}`).join(", ");return{label:this.t("plugins_loaded"),tone:o.length?"warn":"ok",detail:o.length?`${i} \xB7 ${o.join(" \xB7 ")}`:i}}return{label:this.t("plugins_reload_hint"),tone:"warn",detail:""}}render(){let e=this.plugins??[],n=Qs().filter(r=>!r.source);return m`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${qt}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
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
    </section>`}static styles=[Pe,et,le`
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
    `]};customElements.get("nf-plugin-manager")||customElements.define("nf-plugin-manager",bc);var yc=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},plugins:{attribute:!1}};t(e,n){return ke(this.hass,e,n)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${qt}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${qt}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${qt}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <nf-pack-manager .hass=${this.hass} .packs=${this.packs}></nf-pack-manager>
      <nf-model-upload .hass=${this.hass} .packs=${this.packs}></nf-model-upload>
      <nf-plugin-manager .hass=${this.hass} .plugins=${this.plugins}></nf-plugin-manager>
    </div>`}static styles=[Pe,et,le`
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",yc);var wc=class extends oe{static properties={hass:{attribute:!1},building:{attribute:!1}};t=(e,n)=>ke(this.hass,e,n);emit(e){this.building=e,this.dispatchEvent(new CustomEvent("plan-changed",{detail:e,bubbles:!0,composed:!0}))}get host(){let e=this.building,n=e.floors[0]??null;return{doc:e,floor:n,hass:this.hass,admin:!0,t:this.t,change:r=>{let o=structuredClone(e);o.floors[0]&&r(o,o.floors[0]),this.emit(o)},replace:r=>this.emit(r),pickPoint:()=>{}}}render(){if(!this.building)return m``;let e=this.host;return m`<div class="nf-set">
      <header class="nf-set-head">
        <h2>⚙ ${this.t("settings")}</h2>
        <p class="nf-sub">${this.t("settings_page_intro")}</p>
      </header>
      <div class="nf-set-grid">
        <div class="nf-card">${mh(e)}</div>
        <div class="nf-card">${Ri(e)}</div>
        <div class="nf-card">${Oi(e,{useRoofSections:()=>{}})}</div>
        <div class="nf-card">${Ei(e)}</div>
        <div class="nf-card">${Ai(e)}</div>
      </div>
    </div>`}static styles=[Pe,et,le`
      :host {
        display: block;
        overflow: auto;
      }
      .nf-set {
        max-width: 960px;
        margin: 0 auto;
        padding: 20px 16px 48px;
        display: grid;
        gap: 16px;
      }
      .nf-set-head { display: grid; gap: 6px; }
      .nf-set-head h2 { margin: 0; font-size: 20px; }
      .nf-set-grid { display: grid; gap: 14px; }
      .nf-card {
        background: var(--nf-panel, rgba(255, 255, 255, 0.04));
        border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.12));
        border-radius: 14px;
        padding: 12px 16px;
      }
      .nf-section > summary {
        cursor: pointer;
        font-weight: 600;
        font-size: 15px;
        padding: 4px 0;
      }
      .nf-form {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 10px;
        margin-top: 10px;
      }
      .nf-field { display: flex; flex-direction: column; gap: 4px; font-size: 12px; color: var(--nf-muted); }
      .nf-wide { grid-column: 1 / -1; }
      .nf-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
      .nf-own-button {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.1));
        background: rgba(255, 255, 255, 0.02);
      }
      .nf-chip { display: inline-flex; align-items: center; gap: 6px; }
      .nf-compass { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
      .nf-compass-dial { width: 92px; height: 92px; flex: 0 0 auto; }
      .nf-compass-ring { fill: rgba(255, 255, 255, 0.04); stroke: var(--nf-line, rgba(255, 255, 255, 0.25)); stroke-width: 2; }
      .nf-compass-up { fill: var(--nf-accent, #40b8ff); }
      .nf-compass-n { fill: #e05a5a; }
      .nf-compass-s { fill: rgba(255, 255, 255, 0.28); }
      .nf-compass-label { font: 700 10px/1 sans-serif; fill: #fff; text-anchor: middle; }
      .nf-compass-label-s { opacity: 0.7; }
      .nf-compass-side { display: grid; gap: 6px; flex: 1; min-width: 180px; }
    `]};customElements.get("nf-settings")||customElements.define("nf-settings",wc);var Ro="handled",Y_=["select","rect","polygon","wall","opening","furniture","stairs","outdoor","hole","roof","energy"],X_=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Eo=10,Ve=t=>Math.round(t*1e3)/1e3,J_={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},vc=class extends oe{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},loadCardEditor:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_solid3d:{state:!0},_sidePinned:{state:!0},_studio:{state:!0},_check:{state:!0},_keys:{state:!0},_note:{state:!0},_dims:{state:!0},_tour:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_wallView:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},_arcEdit:{state:!0},_routeDraft:{state:!0}};doc3dTimer;tourChecked=!1;_pick=null;_pickTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new gs(100);lib=new rs(()=>this.requestUpdate());side=new ws(()=>this.requestUpdate());sel=new ys(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._arcEdit=null,this._routeDraft=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this.roof.chimneyId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._solid3d=!1,this._doc3d=this._doc,this._sideOpen=!1;let n=!0;try{n=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=n,this._studio=null,this._check=!1,this._keys=!1,this._note=null,this._dims=(()=>{try{return localStorage.getItem("nextfloor.plan_dims")==="1"}catch{return!1}})(),this._tour=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._wallView=null,this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,n){return ke(this.hass,e,n)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}arcActions(){return{edit:this._arcEdit,setEdit:e=>this._arcEdit=e,apply:e=>{if(!this.isAdmin||Math.abs(e.bulge)<.01)return;let n=this._doc,r=structuredClone(n),o=r.floors.find(c=>c.id===this._floorId);if(!o)return;let[i,s,a]=e.key.split(":");if(!(i==="wall"?bm(o,s,e.bulge).length>0:_m(o,s,Number(a),e.bulge))){this._arcEdit={...e,error:this.t("arc_too_wide")};return}this._arcEdit=null,this.setDoc(r,n)}}}_wallSide="center";freeWallActions(){return{update:e=>this.updateFreeWall(e),join:()=>this.joinFreeWalls(),note:this.side.notice,remove:()=>this.deleteFreeWall(),arc:this.arcActions(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,n)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:yf(r,e,n)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),removeCorner:e=>{let n=this.sel.outdoor;n&&this.change((r,o)=>{uf(o.outdoor.find(i=>i.id===n),e)})},lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),studio:()=>this.openStudio(null),packs:this.packs??[]}}openStudio(e){let n=e?Z(e):void 0,r=n?.recipe&&e?.startsWith(`pack:${Sn}:`)?n.id:null;this._studio={recipe:r&&n?.recipe?{...n.recipe}:hc("cabinet",""),itemId:r,busy:!1,error:null},this._tool="furniture"}async saveStudio(){let e=this._studio;if(!e||!this.hass||!this.isAdmin)return;let n=this.hass.language??"en",r=Er().find(u=>u.id===Sn),o=r?.items??[],i={...e.recipe,name:e.recipe.name||this.t(`studio_kind_${e.recipe.kind}`)},s=e.itemId??g_(i.name,o.map(u=>u.id)),a=ks(i,s,n),l={id:Sn,name:r?.name??this.t("studio_pack_name"),publisher:r?.publisher??this.t("studio_pack_publisher"),release:(r?.release??0)+1,items:e.itemId?o.map(u=>u.id===s?a:u):[...o,a]};this._studio={...e,busy:!0,error:null};try{let{builtin:u,imported_at:d,...h}=l;await tn(this.hass,JSON.stringify({format:"nfpack",version:1,...h}))}catch(u){this._studio={...e,busy:!1,error:this.t("studio_error",{detail:u.message??String(u)})};return}Ns([...Er().filter(u=>u.id!==Sn),l]),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._studio=null;let c=fe(Sn,s);if(e.itemId){let[u,d,h]=a.size;this.change(p=>p.floors.forEach(f=>f.furniture.forEach(_=>_.type===c&&Object.assign(_,{w:u,d,h}))))}else this.addFurniture(c)}printTexts(){let e=n=>this.t(n);return{title:this.t("print_title"),room:e("print_room"),floorArea:e("print_floor_area"),living:e("print_living"),low:e("print_low"),total:e("print_total"),note:e("living_area_hint"),area:n=>De(this.hass,n),length:n=>ge(this.hass,n)}}async exportPlanImages(e,n){let r=(n?this._doc.floors:this.floor?[this.floor]:[]).filter(o=>!o.layer&&o.rooms.length);if(!r.length)return void(this.side.notice=this.t("image_export_empty"));try{for(let o of r)O_(await I_(P_(this._doc,o,this.printTexts(),e)),D_(o.name));this.side.notice=this.t("image_export_done",{n:r.length})}catch{this.side.notice=this.t("image_export_failed")}}printPlan(){let e=T_(this._doc,this.printTexts()),n=window.open("","_blank");if(!n)return void alert(this.t("print_blocked"));n.document.open(),n.document.write(e),n.document.close()}fixFinding(e){e.floorId!==this._floorId&&this.floorActions().openFloor(e.floorId);let n=o=>o.floors.find(i=>i.id===e.floorId),r=e.fix;switch(r.do){case"show_floor":return;case"show_room":return this.selectItem("room",r.roomId);case"show_opening":return this.selectItem("opening",r.openingId);case"show_furniture":return this.selectItem("furniture",r.furnitureId);case"set_area":return this.change(o=>{let i=n(o)?.rooms.find(s=>s.id===r.roomId);i&&Object.assign(i,Dl(i,r.areaId,this.hass?.areas??{}))});case"add_area_rooms":{let o=n(this._doc);o&&this.addAreaRooms(o);return}case"place_devices":return this.change(o=>{let i=n(o),s=i?.rooms.find(a=>a.id===r.roomId);i&&s&&dl(o,i,s,r.entityIds)});case"remove_placements":return this.change(o=>{let i=n(o);i&&(i.placements=i.placements.filter(s=>!r.entityIds.includes(s.entity_id)))})}}ignoreDevices(e){this.change(n=>{n.settings.check_ignore=[...new Set([...n.settings.check_ignore??[],...e])]})}setDims(e){this._dims=e;try{localStorage.setItem("nextfloor.plan_dims",e?"1":"0")}catch{}}addNote(e){if(!this.isAdmin||!this.floor)return;let n=L("note");this.change((r,o)=>o.notes=[...o.notes??[],{id:n,x:Math.round(e[0]*100)/100,z:Math.round(e[1]*100)/100,text:""}]),this._note=n,this._sideOpen=!0}studioButton(){let e=this.furnitureItem?.type;return!e||!kt(e)||!Z(e)?.recipe||!e.startsWith(`pack:${Sn}:`)||!this.isAdmin?g:m`<button class="nf-btn nf-lib-studio" @click=${()=>this.openStudio(e)}>🛠️ ${this.t("studio_open")}</button>`}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,n)=>this.deviceToFurniture(e,n),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureToFloor(e){let[n,r]=[this._floorId,this.sel.furniture];if(!n||!r||!this.isAdmin)return;let o=structuredClone(this._doc);o_(o,n,r,e)&&(this.setDoc(o),this._floorId=e,this.selectItem("furniture",r))}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),rotateGroup:e=>this.rotateFurnitureGroup(e),duplicateGroup:()=>this.duplicateFurnitureGroup(),addTask:()=>this.addTaskToFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),toFloor:e=>this.furnitureToFloor(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,n)=>this.setOpeningPreset(e,n),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),isBelowGround:e=>e.type==="window"&&this.openingIsExterior(e)&&(this.floor?.elevation??0)+e.sill<-.22,lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new Bi({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:Vo,storeImage:Dt},readPicture:tr,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new ms({host:this.host,floorId:()=>e._floorId,setFloorId:n=>e._floorId=n,confirm:n=>confirm(n),refresh:()=>e.requestUpdate()})}redrawQueued=!1;redrawSoon=()=>{this.redrawQueued||(this.redrawQueued=!0,setTimeout(()=>{this.redrawQueued=!1,this.requestUpdate()},30))};canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,n)=>this.toWorld(e,n),scale:this._view.scale,floorId:this._floorId,redraw:this.redrawSoon}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new Pi({get hass(){return e.hass},get doc(){return e._doc},t:(n,r)=>e.t(n,r),adopt:n=>{e.setDoc(n),e._floorId=n.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:n=>e.side.notice=n,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(n,r)=>e.t(n,r),change:n=>e.change(n),replace:n=>e.setDoc(n),pickPoint:n=>e.pickPoint(n),get loadCardEditor(){return e.loadCardEditor}}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Ns(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(!this.tourChecked&&this.building&&(this.tourChecked=!0,!this.building.floors.some(n=>n.rooms.length)&&H_()&&(this._tour=0)),this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let n=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=n.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:n,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(h=>h.id===n);if(!l)continue;let[c,u]=ha(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:u});let d=Ir(a,l,i);d&&Object.assign(l,d)}})}onDeviceMoved3d(e){let{id:n,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(u=>u.entity_id===n);if(!a)continue;let[l,c]=ha(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,n=this.device;if(e){let r=ei(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
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
        <span>${ze(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Ct(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(n){let r=ee(n.entity_id),o=r==="light",i=r?Ko(r,this.floor?pt(this.floor,n.x,n.z):2.5,o?n.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${K(this.hass,n.entity_id)}</span>
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
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};fittingField(e,n,r){if(r==="field")return e.settings.roof.solar?.find(i=>i.id===n);if(r==="win"){let i=e.settings.roof.windows?.find(s=>s.id===n);return i?hn(i):void 0}let o=e.settings.roof.chimneys?.find(i=>i.id===n);return o?Et(o,X(e).find(i=>i.key===o.face)):void 0}grab3dStart(e){let n=this._doc,r=X(n),o=null,i=(a,l,c,u,d=!1,h=!1)=>{if(!c||d)return;let p=yi(c,e.o,e.d);!p||!Ta(c,u,p.u,p.s)||o&&o.t<=p.t||(o={id:a,win:l,chimney:h,t:p.t,du:p.u-u.u,ds:p.s-u.v})};if(this._tool==="energy")for(let a of n.settings.roof.solar??[])i(a.id,!1,Fe(n,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,hn(a),!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.chimneys??[]){let l=r.find(c=>c.key===a.face)??null;i(a.id,!1,l,Et(a,l),!!a.locked,!0)}if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,chimney:s.chimney,du:s.du,ds:s.ds,base:n,moved:!1},s.chimney?this.roof.chimneyId=s.id:s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let n=this.grab3d;if(!n)return;let r=n.base,o=this.fittingField(r,n.id,n.win?"win":n.chimney?"chimney":"field");if(!o)return;let i=Fe(r,o),s=i?.unbounded?[i]:n.win||n.chimney?X(r):[...X(r),...Xe(r)],a=null;for(let h of s){let p=yi(h,e.o,e.d);p&&za(h,p.u,p.s)&&(!a||p.t<a.t)&&(a={face:h,...p})}if(!a)return;let l=a.face,c=.05,u=h=>Ve(Math.round(h/c)*c),d=mt(l,{...o,face:l.key,u:u(a.u-n.du),v:u(a.s-n.ds),tilt:l.flat?o.tilt??15:o.tilt});n.moved=!0,this.change(h=>{if(n.win||n.chimney){let f=n.win?h.settings.roof.windows?.find(_=>_.id===n.id):h.settings.roof.chimneys?.find(_=>_.id===n.id);f&&Object.assign(f,{face:l.key,...d});return}let p=h.settings.roof.solar?.find(f=>f.id===n.id);p&&Object.assign(p,{face:l.key,...d},l.flat&&p.tilt==null?{tilt:15}:{})},n.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
      ${this.houseTool?g:m`<div class="nf-seg nf-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
            <button aria-pressed=${this._wall3d==="slope"} title=${this.t("walls_slope_hint")} @click=${()=>this._wall3d="slope"}>${this.t("walls_slope")}</button>
            <button aria-pressed=${this._solid3d} title=${this.t("walls_solid_hint")} @click=${()=>this._solid3d=!this._solid3d}>${this.t("walls_solid")}</button>
          </div>`}
      ${this.render3dBar()}
      <nf-view3d
        .hass=${this.hass}
        .weather=${!1}
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
        .furnishTypes=${this._tool==="energy"?Ue:this._tool==="roof"?[]:null}
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
    </div>`}updated(){for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())this.bg.ensureLoaded(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,n=this._doc){n&&this.history.record(n),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,n=this._doc,r=!0){let o=structuredClone(n),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?n:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(n=>n.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:n,ox:r,oy:o}=this._view;return[e[0]*n+r,e[1]*n+o]}pickPoint(e){this._pick?.(null),this._pick=e,clearTimeout(this._pickTimer),this._pickTimer=window.setTimeout(()=>this.cancelPick(),6e4),this.requestUpdate()}cancelPick(){clearTimeout(this._pickTimer),this._pick&&(this._pick=null,this.requestUpdate())}toWorld(e,n){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(n-i)/r]}localPoint(e){let n=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],n=e.length?pe(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=n.x1-n.x0+2*r,i=n.z1-n.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(n.x0+n.x1)/2*s,oy:this._size.h/2-(n.z0+n.z1)/2*s}}showPoint(e,n){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-n*r}}zoomAt(e,n,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:n-(n-i)*l,oy:r-(r-s)*l}}snap(e,n,r=!1){if(this._guides={},r)return e;let o=xm(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:Eo/this._view.scale,skip:n});return this._guides=o.guides,o.point}onPointerDown(e){if(this._pick){let[r,o]=this.localPoint(e),i=this._pick;this.cancelPick(),i(this.toWorld(r,o));return}this._ctx=null;let n=e.target?.closest?.("[data-note]")?.getAttribute("data-note");if(n&&this._tool==="select"){this._note=n,this._sideOpen=!0;return}if(this._note&&(this._note=null),this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let r=this.localPoint(e),o=e.target;this.pressStart=r,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(o,r))},550)}}guardFixed(e){let n=this.drag;if(!n)return;let r=null;n.kind==="vertex"||n.kind==="room"?r=["room",n.roomId]:n.kind==="device"||n.kind==="aim"?r=["device",n.entityId]:n.kind==="opening"?r=["opening",n.id]:n.kind==="furniture"||n.kind==="rotate"||n.kind==="resize"?r=["furniture",n.id]:n.kind==="wallmove"?r=["wall",n.id]:n.kind==="outdoor"&&(r=["outdoor",n.id]),!(!r||!this.isFixedItem(...r))&&("moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){let i=this.drag;i&&X_.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r={local:n,world:this.toWorld(...n),target:e.target,fine:e.altKey},o=this.pressRoute(r)??this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==Ro&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,n){return this.isAdmin?n:this.pan(e)}pressBackground(e){let{world:n,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(n),Ro;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=er(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(n[1]-s[1],n[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(n),Ro;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,n){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:n.x,bz:n.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let n=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:n,end:n}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:n,world:r,target:o}=e,i=(v,y)=>o.closest(v)?.getAttribute(y)??null,s=this._tool==="energy",a=s?i("[data-energy-device]","data-energy-device"):null;if(a)return this.pressEnergyDevice(e,a);let l=s?i("[data-solar-turn]","data-solar-turn"):null;if(l&&this.isAdmin)return{kind:"solarturn",id:l,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);let d=this._tool==="roof"?i("[data-chimney]","data-chimney"):null;if(d)return this.pressChimney(e,d);this._tool==="roof"&&(this.roof.windowId=null,this.roof.chimneyId=null);let h=s?i(".nf-energy-item","data-furniture"):null;if(h)return this.pressEnergyDevice(e,h);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let p=i("[data-plus]","data-plus");if(p?.startsWith("roof:")&&this.isAdmin)return this.splitRoofEdgeGesture(...p.split(":").slice(1));let f=i("[data-roof-vertex]","data-roof-vertex"),_=i("[data-roof-corner]","data-roof-corner"),b=i("[data-roof]","data-roof");if(f&&this.isAdmin){let[v,y]=f.split(":");return{kind:"roofvertex",id:v,index:Number(y),base:this._doc,moved:!1}}if(_&&this.isAdmin){let[v,y,x]=_.split(":");return{kind:"roofcorner",id:v,corner:[y==="1"?1:0,x==="1"?1:0],base:this._doc,moved:!1}}if(b){let v=this.roof.isFixed(this._doc.settings.roof.sections?.find(y=>y.id===b));return v&&this.roof.sectionId===b&&(this._fixedHint=!0),this.roof.sectionId=b,this.isAdmin&&!v?{kind:"roofmove",id:b,start:r,startScreen:n,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let w=this.snap(r,void 0,e.fine);return{kind:"rect",start:w,end:w,roof:!0}}pressEnergyDevice(e,n){return this.roof.solarId=null,this.selectItem("furniture",n),this.moves(e,{kind:"furniture",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,n){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&n===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);n!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=n,this.roof.sectionId=null;let a=this._doc.settings.roof.solar?.find(d=>d.id===n),l=a?Fe(this._doc,a)??void 0:void 0,c=l?this.faceHit(l,o):null,u=a&&c?{du:c.u-a.u,ds:Number.isNaN(c.s)?0:c.s-a.v}:null;return this.isAdmin&&!a?.locked?{kind:"solarmove",id:n,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,n){this.roof.windowId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(a=>a.id===n),o=r?X(this._doc).find(a=>a.key===r.face):void 0,i=o?Bn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressChimney(e,n){this.roof.chimneyId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.chimneys?.find(a=>a.id===n),o=r?X(this._doc).find(a=>a.key===r.face):void 0,i=o?Bn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,chimney:!0}:this.pan(e)}pressDrawingTool(e){let n=this._tool;if(n==="rect"||n==="outdoor"||n==="hole"||n==="stairs"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:n==="outdoor",hole:n==="hole",stairs:n==="stairs"}}if(n==="polygon"||n==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(n==="opening")return this.placeOpening(this._openingPreset,e.local)?Ro:this.pan(e)}pressItem(e){let{local:n,world:r,target:o}=e,i=(k,S)=>o.closest(k)?.getAttribute(S)??null,s=this._doc,a=i("[data-device]","data-device");if(a&&this.isAdmin)return{kind:"device",entityId:a,start:r,startScreen:n,base:s,moved:!1};let l=i("[data-opening]","data-opening");if(l)return this.selectItem("opening",l),this.moves(e,{kind:"opening",id:l,startScreen:n,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[k,S,$]=c.split(":");return{kind:"resize",id:k,corner:[S==="1"?1:-1,$==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let d=i("[data-aim]","data-aim");if(d&&this.isAdmin)return{kind:"aim",entityId:d,base:s,moved:!1};let h=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(h)return this.selectItem("furniture",h),this.moves(e,{kind:"furniture",id:h,start:r,startScreen:n,base:s,moved:!1});let p=i("[data-vertex]","data-vertex"),f=i("[data-mid]","data-mid");if(p!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(p),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(f!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(f));let _=i("[data-wall-end]","data-wall-end");if(_&&this.isAdmin){let[k,S]=_.split(":");return{kind:"wallmove",id:k,end:S,start:r,startScreen:n,base:s,moved:!1}}let b=i("[data-free-wall]","data-free-wall");if(b)return this.selectItem("wall",b),this.moves(e,{kind:"wallmove",id:b,end:null,start:r,startScreen:n,base:s,moved:!1});let w=i("[data-plus]","data-plus");if(w?.startsWith("out:")&&this.isAdmin)return this.splitOutdoorEdgeGesture(...w.split(":").slice(1));let v=i("[data-out-vertex]","data-out-vertex");if(v&&this.isAdmin){let[k,S]=v.split(":");return{kind:"outvertex",id:k,index:Number(S),base:s,moved:!1}}let y=vf(this.floor?.walls??[],n,k=>this.toScreen(k),9);if(y)return this.selectItem("wall",y),this.moves(e,{kind:"wallmove",id:y,end:null,start:r,startScreen:n,base:s,moved:!1});let x=i("[data-outdoor]","data-outdoor");if(x&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",x),this.moves(e,{kind:"outdoor",id:x,start:r,startScreen:n,base:s,moved:!1})}splitEdgeGesture(e,n){let[r,o]=[e.points[n],e.points[(n+1)%e.points.length]],i=rt([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((a,l)=>Ol(l,e.id,n,i),s,!1),this.sel.corner=n+1,{kind:"vertex",roomId:e.id,index:n+1,base:s,moved:!0}}splitOutdoorEdgeGesture(e,n){let r=Number(n),o=this._doc,i=this.floorOf({base:o})?.outdoor.find(l=>l.id===e);if(!i)return;let[s,a]=[i.points[r],i.points[(r+1)%i.points.length]];return this.change((l,c)=>cf(c.outdoor.find(u=>u.id===e),r,[(s[0]+a[0])/2,(s[1]+a[1])/2]),o,!1),{kind:"outvertex",id:e,index:r+1,base:o,moved:!0}}splitRoofEdgeGesture(e,n){let r=Number(n),o=this._doc;return this.change(i=>{let s=i.settings.roof.sections?.find(u=>u.id===e);if(!s)return;let a=fl(s),[l,c]=[a[r],a[(r+1)%a.length]];Mf(s,r,[(l[0]+c[0])/2,(l[1]+c[1])/2])},o,!1),{kind:"roofvertex",id:e,index:r+1,base:o,moved:!0}}pressRoom(e){let n=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return n?(n!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",n),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let n=this.localPoint(e);if(this.pressStart?rr(n,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,n),this.pinch){this.pinchMove();return}let r=this.toWorld(...n),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:n,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,n){this._view={...this._view,ox:this._view.ox+n[0]-e[0],oy:this._view.oy+n[1]-e[1]}}live(e,n){this.change(n,e.base,!1)}floorOf(e){return e.base.floors.find(n=>n.id===this._floorId)}moveDrag(e,n){let{local:r,world:o,fine:i,straight:s}=n,a=this._doc.settings.grid,l=c=>c.moved||rr(r,c.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||rr(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=ym(e.start,this.snap(o,void 0,i),n.straight),this.requestUpdate();return;case"wallmove":{if(!l(e))return;e.moved=!0;let c=(this.floorOf(e)?.walls??[]).find(d=>d.id===e.id);if(!c)return;let u;if(e.end){let d=this.snap(o,void 0,i),h=this._doc.settings.wall_interior,[p,f]=wo(c,h),[_,b]=e.end==="a"?Zi(d,f,c,h):Zi(p,d,c,h);u={a:_,b}}else{let d=is(e.start,o,vn(a,i));u={a:rt(c.a,d),b:rt(c.b,d)}}this.live(e,(d,h)=>Object.assign((h.walls??[]).find(p=>p.id===e.id),u));return}case"vertex":{let c=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(u,d)=>{d.rooms.find(h=>h.id===e.roomId).points[e.index]=c});return}case"room":{if(!l(e))return;e.moved=!0;let c=this.floorOf(e),u=c?.rooms.find(p=>p.id===e.roomId);if(!c||!u)return;let d=this.roomDelta(u,[o[0]-e.start[0],o[1]-e.start[1]],i),h=new Set(c.placements.filter(p=>N([p.x,p.z],u.points)).map(p=>p.entity_id));this.live(e,(p,f)=>{f.rooms.find(_=>_.id===e.roomId).points=u.points.map(_=>rt(_,d)),f.placements=c.placements.map(_=>{if(!h.has(_.entity_id))return _;let[b,w]=rt([_.x,_.z],d);return{..._,x:b,z:w}})});return}case"opening":{if(!l(e))return;e.moved=!0;let c=this.floorOf(e),u=c?.openings.find(_=>_.id===e.id),d=u&&c?Ne(u,c.rooms,c.walls??[]):null;if(!u||!d)return;let h=c?Kt(c.openings,u):[u],p=!u.wall&&h.length>1&&c?Kn(d.room,h):null;if(p){let _=i?.01:this._doc.settings.grid,b=Oa(d.room,o)-p.width/2,w=_>0?Math.round(b/_)*_:b,v=Math.max(0,Math.min(no(d.room)-p.width,w));this.live(e,(y,x)=>{let k=x.openings.find($=>$.id===e.id),S=k?ro(x.openings,d.room,k,v,p.width,()=>L("opening")):null;S&&(x.openings=S)});return}let f=this.dropOffset(d.room,d.edge,o,u.width,i);this.live(e,(_,b)=>{b.openings.find(w=>w.id===e.id).offset=f});return}case"furniture":{if(!l(e))return;e.moved=!0;let c=this.floorOf(e)?.furniture.find(f=>f.id===e.id);if(!c)return;let[u,d]=Ll([c.x,c.z],e.start,o,vn(a,i)),p=(i?null:this.snapToWall({...c,x:u,z:d}))??{x:u,z:d,rotation:c.rotation};this.live(e,(f,_)=>{let b=_.furniture.find(y=>y.id===e.id);if(!b)return;let w=p.x-b.x,v=p.z-b.z;if(Object.assign(b,p),b.group&&!i)for(let y of _.furniture)y.id!==b.id&&y.group===b.group&&(y.x=Math.round((y.x+w)*1e3)/1e3,y.z=Math.round((y.z+v)*1e3)/1e3)});return}case"resize":{e.moved=!0;let c=this.floorOf(e)?.furniture.find(d=>d.id===e.id);if(!c)return;let u=Vu(c,e.corner,o,vn(a,i));this.live(e,(d,h)=>{Object.assign(h.furniture.find(p=>p.id===e.id),u)});return}case"rotate":{e.moved=!0;let c=this.floorOf(e)?.furniture.find(d=>d.id===e.id);if(!c)return;let u=Hl([c.x,c.z],o,i?1:15);this.live(e,(d,h)=>{h.furniture.find(p=>p.id===e.id).rotation=u});return}case"aim":{e.moved=!0;let c=this.floorOf(e)?.placements.find(d=>d.entity_id===e.entityId);if(!c)return;let u={rotation:Hl([c.x,c.z],o,i?1:5)};this.live(e,(d,h)=>{Object.assign(h.placements.find(p=>p.entity_id===e.entityId),u)});return}case"device":{if(!l(e))return;e.moved=!0;let c=this.floorOf(e)?.placements.find(h=>h.entity_id===e.entityId);if(!c)return;let[u,d]=Ll([c.x,c.z],e.start,o,vn(a,i));this.live(e,(h,p)=>{Object.assign(p.placements.find(f=>f.entity_id===e.entityId),{x:u,z:d})});return}case"outdoor":{if(!l(e))return;e.moved=!0;let c=this.floorOf(e)?.outdoor.find(d=>d.id===e.id);if(!c)return;let u=is(e.start,o,vn(a,i));this.live(e,(d,h)=>{h.outdoor.find(p=>p.id===e.id).points=c.points.map(p=>rt(p,u))});return}case"outvertex":{e.moved=!0;let c=this.snap(o,void 0,i),u=this.floorOf(e)?.outdoor.find(d=>d.id===e.id);if(!u)return;this.live(e,(d,h)=>{let p=h.outdoor.find(f=>f.id===e.id);p&&(p.points=vm(u.points,e.index,c,s))});return}case"bgmove":e.moved=!0,this.live(e,(c,u)=>{u.background&&([u.background.x,u.background.z]=rt([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let c=this.floor?.background,u=c?this.bg.picture(c.image_id):void 0;if(!c||!u)return;let d=er(c,u.aspect),h=Bp(e.rot,e.start,Math.atan2(o[1]-d[1],o[0]-d[0]),n.straight);this.live(e,(p,f)=>{f.background&&(f.background.rotation=h)});return}case"bgscale":{e.moved=!0;let c=this.floor?.background,u=c?this.bg.picture(c.image_id):void 0;if(!c||!u)return;let d=Math.max(.5,Ve(Wp(c,u.aspect,o)[0]));this.live(e,(h,p)=>{p.background&&(p.background.width=d)});return}default:this.moveRoofDrag(e,n)}}moveRoofDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!rr(r,e.startScreen))return;e.moved=!0;let a=is(e.start,o,vn(s,i)),l=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!l)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(_=>_.id===e.id);if(!u)return;let[d,h]=rt([l.x0,l.z0],a),[p,f]=rt([l.x1,l.z1],a);Object.assign(u,{x0:d,x1:p,z0:h,z1:f}),l.points&&(u.points=l.points.map(_=>rt(_,a)))});return}case"roofvertex":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=rt(a,[0,0]),Object.assign(c,Vt(c.points)))});return}case"roofcorner":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=Ve(a[0]),c[e.corner[1]?"z1":"z0"]=Ve(a[1]))});return}case"solarturn":{e.moved=!0;let a=e.base.settings.roof.solar?.find(u=>u.id===e.id),l=a?Fe(e.base,a):null;if(!a||!l)return;let c=Jr(e.base,a,wm(Zr(l,a),o,i?1:15));this.live(e,u=>{let d=u.settings.roof.solar?.find(h=>h.id===e.id);d&&Object.assign(d,c)});return}case"solarmove":this.moveSolar(e,n);return;default:return}}moveSolar(e,n){let{local:r,world:o,fine:i}=n;if(!e.moved&&!rr(r,e.startScreen))return;e.moved=!0;let s=this.fittingField(e.base,e.id,e.win?"win":e.chimney?"chimney":"field"),a=e.win||e.chimney?X(e.base):[...X(e.base),...this._floorId?Xe(e.base,this._floorId):[]],l=s?Fe(e.base,s,a):null;if(!s||!l)return;let c=i?.01:.05,u=b=>Ve(Math.round(b/c)*c),d=l.unbounded?null:Fa(a,o),h=l,p,f;if(d&&e.grab)h=d.face,p=u(d.u-e.grab.du),f=Number.isNaN(d.s)?d.face.key===s.face?s.v:Math.max(0,d.face.ls-1.5):u(d.s-e.grab.ds);else{let[b,w]=[o[0]-e.start[0],o[1]-e.start[1]],v=[l.es[0],l.es[2]];p=u(s.u+b*l.eu[0]+w*l.eu[2]),f=u(s.v+(b*v[0]+w*v[1])/(v[0]*v[0]+v[1]*v[1]||1))}let _=mt(h,{...s,face:h.key,u:p,v:f,tilt:h.flat?s.tilt??15:s.tilt});this.live(e,b=>{if(e.win||e.chimney){let v=e.win?b.settings.roof.windows?.find(y=>y.id===e.id):b.settings.roof.chimneys?.find(y=>y.id===e.id);v&&Object.assign(v,{face:h.key,..._});return}let w=b.settings.roof.solar?.find(v=>v.id===e.id);w&&Object.assign(w,{face:h.key,..._},h.flat&&w.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&X_.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let r=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":if(n.moved&&n.end&&!e.altKey){let o=Qi(this.floor?.walls??[],this._doc.settings.wall_interior,n.id);o.length&&this.change((i,s)=>{es(s,o)},this._doc,!1)}n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,i]=n.start,[s,a]=n.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],u=[l,[c[0],l[1]],c,[l[0],c[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(l,c):n.stairs?this.addStairs(l,c):n.roof?this.roof.addSection(l,c):this.addRoom(u)}else!n.outdoor&&!n.hole&&!n.stairs&&!n.roof&&this.roomFromWallsAt(this.toWorld(r[0],r[1]));this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[n,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),n,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[n,r]=e;return{dist:Math.hypot(n[0]-r[0],n[1]-r[1]),mid:[(n[0]+r[0])/2,(n[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,n,r){if(r)return n;let o=this._doc.settings.grid,i=[Math.round(n[0]/o)*o,Math.round(n[1]/o)*o],a=Eo/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let u of e.points){let d=Math.hypot(u[0]+n[0]-c[0],u[1]+n[1]-c[1]);d<a&&(a=d,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>N(e,o.points)).sort((o,i)=>Ee(o.points)-Ee(i.points))[0]?.id??null}addDraftPoint(e,n){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-n[0],s-n[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&Ee(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let n=this._draft[this._draft.length-1];if(!n||!(this._measureLen>0))return;let r=En(n,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[n,r]=this._rectSize;n>.1&&r>.1&&(this.addRoom([e,En(e,n,"right"),En(En(e,n,"right"),r,"down"),En(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let n=this.sel.wall;n&&this.change((r,o)=>{let i=(o.walls??[]).find(a=>a.id===n),s="thickness"in e&&i.axis?wo(i,r.settings.wall_interior):null;Object.assign(i,e),s&&([i.a,i.b]=Zi(s[0],s[1],i,r.settings.wall_interior))})}joinFreeWalls(){let e=Qi(this.floor?.walls??[],this._doc.settings.wall_interior);e.length&&this.change((n,r)=>{es(r,e)}),this.side.notice=this.t(e.length?"wall_joined":"wall_join_none",{n:e.length}),this.requestUpdate()}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((n,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let n=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===n),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((n,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;if(e.key==="Escape"&&this._pick){e.preventDefault(),this.cancelPick();return}let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"||this._tool==="roof"))this._tool==="roof"?this.roof.removeSelected():this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(J_,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=J_[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="?"&&!r)this._keys=!this._keys;else if(e.key==="Escape"){if(this._keys){this._keys=!1;return}if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let n=structuredClone(this._doc);n.floors=n.floors.filter(r=>r.id!==e.id),this.setDoc(n),this._floorId=n.floors[0]?.id??null,this.sel.room=null}faceHit(e,n){return e.wall?{u:(n[0]-e.o[0])*e.eu[0]+(n[1]-e.o[2])*e.eu[2],s:Number.NaN}:Bn(e,n)}planLayers(e,n){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return F`${Dp(r,this._doc.settings)} ${Tp(r,this.bg,e)} ${Im(r,this._size)} ${Dm(r)} ${n?Om(r,n):g}
      ${e?F`${Lm(r,e,this.sel.outdoor)} ${Cm(r,e,this.sel.room,this.sel.edge)} ${zm(r,e,this.sel.furniture)}
        ${Wm(r,e,this.sel.wall)} ${n?Um(r,e,n,this.sel.opening):g} ${Nm(r,e)}
        ${this._tool==="select"?Tm(r,e,this.sel.device):g}
        ${this._tool==="select"?Pm(r,e,this._note):g}
        ${this._dims?Km(r,e):g}
        ${i?Vm(r,o,this.sel.corner):g}
        ${Hm(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Bm(r,o):g}
        ${Ap(r,e)}`:g}
      ${this._tool==="roof"?F`${Ja(r,this.roof)}${Rp(r,this.roof)}${zp(r,this.roof)}`:this._tool==="energy"?F`${Ja(r,this.roof)}${Mp(r,this.roof)}${Fp(r,this.floor,this._doc.energy.routes??[],this._routeDraft)}${Ep(r,this.floor,this.sel.furniture)}`:g}
      ${Sm(r,s,this._tool,this._draft,this._cursor)} ${$m(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor;return e?we(e.rooms,Me(this._doc.settings),e.walls??[]).walls:[]}edgeParts(e,n){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===n).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,n){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&n(i)})}edgeActions(){return{openWall:(e,n)=>this._wallView={roomId:e.id,edge:n},partsOf:(e,n)=>this.edgeParts(e,n),isOuter:(e,n)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===n)),setHeight:(e,n,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,n).length;this.changeRoom(e,a=>Xm(a,n,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===n)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===n)||i.push({room_id:e.id,edge:n,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(u=>u.id===l.room_id);c&&Bl(c,l.edge,o)}})},setSlope:(e,n,r,o)=>this.changeRoom(e,i=>qm(i,n,r,o)),clearSlope:(e,n)=>this.changeRoom(e,r=>Ym(r,n,this.floor?.height??2.5)),setThickness:(e,n,r,o,i)=>this.changeRoom(e,s=>tg(s,n,r,o,i)),arc:this.arcActions(),cut:(e,n,r)=>{let o=this.edgeParts(e,n);this.changeRoom(e,i=>Jm(i,n,r,o))},moveCut:(e,n,r,o)=>{let i=this.edgeParts(e,n);this.changeRoom(e,s=>Qm(s,n,r,o,i))},join:(e,n,r,o)=>this.changeRoom(e,i=>eg(i,n,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let n=Qg(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=cc(r.floors,n),this.setDoc(r),this._floorId=n.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let n=pr(this._doc,e,this.hass?.areas);if(n.length===0)return;let r=Bu(e,n,()=>L("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}duplicateFloor(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=r_(this._doc,n,this.t("floor_copy_name",{name:n.name}),e),o=structuredClone(this._doc);o.floors=cc(o.floors,r),this.setDoc(o),this._floorId=r.id,this.sel.room=null,this.side.floorCopy=null,this.fit()}moveFloor(e){let n=this._floorId;if(!n)return;let r=e_(this._doc.floors,n,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},print:()=>this.printPlan(),exportImage:(e,n)=>{this.exportPlanImages(e,n)},addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),duplicateFloor:e=>this.duplicateFloor(e),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),roomsFromWalls:()=>this.roomsFromWalls(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:n=>this.selectItem("room",n),patch:n=>this.updateRoom(n),setArea:n=>this.setArea(n),setRect:(n,r)=>this.setRect(n,r),setCorner:(n,r,o)=>this.setPoint(n,r,o),removeCorner:n=>this.deleteVertex(n),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:n=>this.applyPackage(e,n),openSpots:()=>{let n=this.hass?$e(this.hass,e).filter(r=>r.startsWith("light.")):[];this.side.spots=a_(e,n)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:ig(this.host,e,this.edgeActions()),climate:Tf(this.host,e,n=>this.updateRoom(n)),corner:this.sel.corner}}applyPackage(e,n){if(!this.isAdmin)return;let r=rh(e,n,()=>L("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let n=this.side.spots;if(!n||!this.isAdmin)return;let r=vs(e,n);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,n){if(!this.floor)return;let[r,o]=ji(e,n,this._doc.settings.wall_interior,this._wallSide),i={...rf(r,o),...this._wallSide!=="center"?{axis:this._wallSide}:{}};this.change((s,a)=>{a.walls=[...a.walls??[],i],es(a,Qi(a.walls,this._doc.settings.wall_interior,i.id))}),this.selectItem("wall",i.id)}addHole(e,n){if(!this.floor)return;let r=af(e,n);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addStairs(e,n){let r=this.floor;if(!r)return;let[o,i]=[n[0]-e[0],n[1]-e[1]],s=ll("stairs",this._doc,r,[(e[0]+n[0])/2,(e[1]+n[1])/2]),a=o>i*1.2;Object.assign(s,{w:Math.round((a?i:o)*1e3)/1e3,d:Math.round((a?o:i)*1e3)/1e3,rotation:a?90:0}),this.change((l,c)=>c.furniture.push(s)),this.selectItem("furniture",s.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let n=lf(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let n=df(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}addRoom(e){if(!this.floor)return;let n=os(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((n,r)=>dm(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let n=um(e);this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id}deleteVertex(e){let n=this.room;n&&(this.change((r,o)=>hm(o,n.id,e)),this.sel.corner=null)}nudgeSelection(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?Ug(r,i,e,n):dr;return s===dr?!1:(s!==_s&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=this.room,o=ll(e,this._doc,n,r?xe(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let n=this.furnitureItem;n&&this.isAdmin&&this.updateFurniture({rotation:ul(n.rotation,e)})}addTaskToFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=L("note"),r=Math.max(.3,Math.min(20,Math.round((e.h??1)*100)/100)),o=(e.name??"").trim();this.change((i,s)=>s.notes=[...s.notes??[],{id:n,x:Math.round(e.x*100)/100,z:Math.round(e.z*100)/100,y:r,text:o?`${o}: `:"",repeat_months:12}]),this.selectItem("furniture",null),this._note=n,this._sideOpen=!0}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=cl(e);this.change((r,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}rotateFurnitureGroup(e){let n=this.furnitureItem,r=this.floor;if(!n?.group||!r||!this.isAdmin)return;let o=r.furniture.filter(u=>u.group===n.group);if(!o.length)return;let i=o.reduce((u,d)=>u+d.x,0)/o.length,s=o.reduce((u,d)=>u+d.z,0)/o.length,a=e*Math.PI/180,[l,c]=[Math.cos(a),Math.sin(a)];this.change((u,d)=>{for(let h of d.furniture){if(h.group!==n.group)continue;let p=h.x-i,f=h.z-s;h.x=Math.round((i+p*l-f*c)*1e3)/1e3,h.z=Math.round((s+p*c+f*l)*1e3)/1e3,h.rotation=ul(h.rotation,e)}})}duplicateFurnitureGroup(){let e=this.furnitureItem,n=this.floor;if(!e?.group||!n||!this.isAdmin)return;let r=n.furniture.filter(s=>s.group===e.group);if(!r.length)return;let o=`${e.group}-2`,i=null;this.change((s,a)=>{for(let l of r){let c={...cl(l),group:o};a.furniture.push(c),l.id===e.id&&(i=c.id)}}),i&&this.selectItem("furniture",i)}vehicleToSpot(e){if(!this.isAdmin)return;let n=hf(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(n)}),this.selectItem("furniture",n.id)}deviceToFurniture(e,n){if(!this.isAdmin)return;let r=pf(e,n);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let n=e.entity;if(!this.isAdmin||!n||n==="none")return;let r=ff(e,n);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===n)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",n)}placeDevices(e){let n=this.room;!n||e.length===0||!this.isAdmin||this.change((r,o)=>dl(r,o,n,e))}removeDevice(e){this.change(n=>mf(n,e))}centreDevice(){let e=this.device,n=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!n)return;let[r,o]=gf(n);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let n=this.floor;if(!n)return;let r=mm(e,n.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,n){!this.isAdmin||!e&&!n||(this.change(r=>qg(r,this.shiftScope(),e,n)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Yg(e,this.shiftScope()))}setArea(e){let n=this.room;n&&this.updateRoom(Dl(n,e,this.hass?.areas??{}))}setRect(e,n){let r=this.room,o=r?pm(r,e,n):null;o&&this.updateRoom({points:o})}setPoint(e,n,r){let o=this.room,i=o?fm(o,e,n,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,n){this._openingPreset=n,this.updateOpening(bf(e,n))}pressRoute(e){let n=this._routeDraft;if(!n||this._tool!=="energy"||!this._floorId||n.points.length>=Du)return;let r=n.key.startsWith("pipe:")&&!e.fine?this.onOtherPipe(e.world,n.key):null,[o,i]=(r??this.snap(e.world,void 0,e.fine)).map(s=>Math.round(s*1e3)/1e3);return this._routeDraft={...n,points:[...n.points,{floor_id:this._floorId,x:o,z:i}]},Ro}onOtherPipe(e,n){let r=Eo/this._view.scale,o=null,i=(s,a=0)=>{let l=Math.hypot(s[0]-e[0],s[1]-e[1])-a;l<=r&&(!o||l<o.d)&&(o={at:s,d:l})};for(let s of this._doc.energy.routes??[]){if(s.key===n||!s.key.startsWith("pipe:"))continue;let a=s.points.filter(l=>l.floor_id===this._floorId).map(l=>[l.x,l.z]);a.forEach(l=>i(l,r/3));for(let l=0;l+1<a.length;l++){let[c,u]=[a[l],a[l+1]],d=(u[0]-c[0])**2+(u[1]-c[1])**2;if(d<1e-9)continue;let h=Math.min(1,Math.max(0,((e[0]-c[0])*(u[0]-c[0])+(e[1]-c[1])*(u[1]-c[1]))/d));i([c[0]+(u[0]-c[0])*h,c[1]+(u[1]-c[1])*h])}}return o?.at??null}routeActions(){let e=n=>this.change(r=>{r.energy.routes=n(r.energy.routes??[]),r.energy.routes.length||delete r.energy.routes});return{draft:this._routeDraft,start:n=>this._routeDraft={key:n,points:[...this._doc.energy.routes?.find(r=>r.key===n)?.points??[]]},undoPoint:()=>this._routeDraft&&(this._routeDraft={...this._routeDraft,points:this._routeDraft.points.slice(0,-1)}),cancel:()=>this._routeDraft=null,finish:()=>{let n=this._routeDraft;this._routeDraft=null,!(!n||!this.isAdmin)&&e(r=>{let o=r.find(s=>s.key===n.key),i=r.filter(s=>s.key!==n.key);return n.points.length?[...i,{key:n.key,points:n.points,...o?.cable?{cable:!0}:{}}]:i})},clear:n=>this.isAdmin&&e(r=>r.filter(o=>o.key!==n)),setCable:(n,r)=>this.isAdmin&&e(o=>o.map(i=>i.key===n?{...i,cable:r}:i))}}pipeActions(){return{add:()=>this.isAdmin&&this.change(e=>{let n=e.energy.pipes??[];e.energy.pipes=[...n,{id:L("pipe"),name:`${this.t("pipe")} ${n.length+1}`,kind:n.length%2?"return":"supply",entity:null}]}),update:(e,n)=>this.isAdmin&&this.change(r=>{let o=r.energy.pipes?.find(i=>i.id===e);o&&Object.assign(o,n)}),remove:e=>this.isAdmin&&this.change(n=>{n.energy.pipes=(n.energy.pipes??[]).filter(r=>r.id!==e),n.energy.pipes.length||delete n.energy.pipes,n.energy.routes=(n.energy.routes??[]).filter(r=>r.key!==Yo(e)),n.energy.routes.length||delete n.energy.routes})}}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,n)=>this.openEnergyDevice(e,n),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,n){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",n.id),this.showPoint(n.x,n.z)}addEnergyDevice(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Gg(e,this._doc,n,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Vg({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:n=>this.addEnergyDevice(n),setField:(n,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===n);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return Ng(this.roofDeps(),e);let n=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&Ue.includes(o.type)):void 0;if(n)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${So(this.host,n,this.furnitureActions())}`;let r=this.energyActions();return m`${bp(this.host,r)}${Cg(this.roofDeps())}${yp(this.host,r)}${xp(this.host,this.routeActions())}${$p(this.host,this.pipeActions(),this.routeActions())}${wp(this.host,r)}${vp(this.host)}`}fixItem(e,n,r){if(e)switch(n){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,n){return qo(this.fixItem(this.floor,e,n),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,n){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,n);this.change((o,i)=>{let s=this.fixItem(i,e,n);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,n){return!this.isFixedItem(e,n)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,n){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...n),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),d=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:u&&!d?i=["outdoor",u]:d&&(i=["room",d]),!i){this._ctx=null;return}let[h,p]=i;this.selectItem(h,p),(h==="opening"||h==="furniture")&&(this.sel.room=this.sel.room??d),this._ctx={x:n[0],y:n[1],kind:h,id:p,at:r}}deleteItem(e,n){if(e==="device"){if(!this.confirmFixedDelete(e,n))return;this.removeDevice(n),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let n=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
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
    </button>`}dropOffset(e,n,r,o,i){let s=e.points[n],a=e.points[(n+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return _f(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,n){this.side.notice=null,n&&(this._sideOpen=!0),this.sel.select(e,n,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){let e=this.sel.opening?this.floor?.openings.find(o=>o.id===this.sel.opening):void 0;if(!e?.front||!this.floor)return e;let n=this.floor.rooms.find(o=>o.id===e.room_id),r=n?Kn(n,Kt(this.floor.openings,e)):null;return r?{...e,width:r.width}:e}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let b=Ne({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!b)continue;let[w,v]=this.toScreen(_.a),[y,x]=this.toScreen(_.b),k=(y-w)**2+(x-v)**2||1,S=Math.min(1,Math.max(0,((n[0]-w)*(y-w)+(n[1]-v)*(x-v))/k)),$=Math.hypot(n[0]-w-(y-w)*S,n[1]-v-(x-v)*S),E=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],z=r.rooms.find(P=>P.points.length>=3&&N(E,P.points));$<Eo*2.2&&(!o||$-1<o.d)&&(o={room:b.room,edge:0,d:$-1,wall:_.id,roomId:z?.id??_.id})}for(let _ of r.rooms)for(let b=0;b<_.points.length;b++){let[w,v]=this.toScreen(_.points[b]),[y,x]=this.toScreen(_.points[(b+1)%_.points.length]),k=(y-w)**2+(x-v)**2||1,S=Math.min(1,Math.max(0,((n[0]-w)*(y-w)+(n[1]-v)*(x-v))/k)),$=Math.hypot(n[0]-w-(y-w)*S,n[1]-v-(x-v)*S),E=$-(_.id===this.sel.room?.5:0);$<Eo*2.2&&(!o||E<o.d)&&(o={room:_,edge:b,d:E})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),d=An[e],h=d.type;if(d.style==="glass_wall"&&!a){let _=Oa(i,this.toWorld(...n)),b=Da(i,_-d.width/2,d.width);if(b&&b.length>1){let w=L("front"),v=b.map(y=>({id:L("opening"),room_id:o.roomId??i.id,edge:y.edge,offset:y.offset,width:y.width,front:w,type:h,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...ti.has(d.style)?{}:{style:d.style},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null}));return this.change((y,x)=>x.openings.push(...v)),this._tool="select",this.selectItem("opening",v[0].id),!0}}let p=Ve(Math.min(d.width,Math.max(.3,u-.1))),f={id:L("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...n),p,!1),width:p,type:h,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...d.style&&!ti.has(d.style)?{style:d.style}:{},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null};return this.change((_,b)=>b.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let n=this.sel.opening;this.change((r,o)=>{let i=o.openings.find(u=>u.id===n);if(!i)return;let s=Kt(o.openings,i),a=i.wall?null:o.rooms.find(u=>u.id===i.room_id),l=a&&i.type==="window"&&i.style==="glass_wall"&&(e.width!=null||e.offset!=null),c=l&&a?Kn(a,s):null;if(l&&a&&c){let u=Math.max(.3,e.width??c.width),d=c.from;e.width!=null&&(d+=(c.width-u)/2),e.offset!=null&&(d+=e.offset-i.offset),d=Math.max(0,Math.min(no(a)-u,d));let h=ro(o.openings,a,{...i,...e},d,u,()=>L("opening"));h&&(o.openings=h);return}for(let u of s)Object.assign(u,e)})}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((n,r)=>{let o=r.openings.find(s=>s.id===e),i=new Set((o?Kt(r.openings,o):[o]).map(s=>s?.id));r.openings=r.openings.filter(s=>!i.has(s.id))}),this.sel.opening=null)}snapToWall(e){return this.floor?Ir(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let n=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===n),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((n,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let n=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===n),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;if(this._doc.settings.rooms_as_drawn){this.side.notice=this.t("gaps_not_needed");return}let{rooms:n,gaps:r}=$d(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=Sd(r);this.change((i,s)=>{s.rooms=n,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:q(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}roomsFromWalls(){let e=this.floor;if(!e||!this.isAdmin)return;let n=ua(e);if(!n.length){this.side.notice=this.t(Ed(e)?"rooms_from_walls_covered":"rooms_from_walls_none");return}this.change((r,o)=>{for(let i of n){let s=os(i,this.t("new_room",{n:o.rooms.length+1}));s.wall_heights=i.map(()=>0),o.rooms.push(s)}}),this.side.notice=this.t("rooms_from_walls_done",{n:n.length})}roomFromWallsAt(e){let n=this.floor;if(!n||!this.isAdmin||!n.walls?.length)return;let r=ua(n).find(i=>N(e,i));if(!r)return;let o=os(r,this.t("new_room",{n:n.rooms.length+1}));o.wall_heights=r.map(()=>0),this.change((i,s)=>s.rooms.push(o)),this.sel.room=o.id,this.sel.corner=null,this._tool="select"}updateFloor(e){this.change((n,r)=>Object.assign(r,e))}updateRoom(e){let n=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===n),e))}render(){Df(this._doc.settings.units);let e=this.floor,n=e?we(e.rooms,Me(this._doc.settings),e.walls??[]):null;return m`
      ${cm(this.host,this.lib.preview)}
      ${this._wallView?m`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${()=>this._wallView=null}></nf-wall-view>`:g}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow?m`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!e} @change=${r=>{this._tool=r.target.value,this._draft=[],this._cursor=null,this._sideOpen=this._tool!=="select"}}>
                  ${Y_.filter(r=>this.isAdmin||r==="select").map(r=>m`<option value=${r} ?selected=${this._tool===r}>${this.t(`tool_${r}`)}</option>`)}
                </select>`:g}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${Y_.map(r=>m`<button
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
            ${this._tool==="wall"?m`<label class="nf-wallside" title=${this.t("wall_side_hint")}>${this.t("wall_side")}
                  <select @change=${r=>this._wallSide=r.target.value}>
                    ${["center","left","right"].map(r=>m`<option value=${r} ?selected=${this._wallSide===r}>${this.t(`wall_side_${r}`)}</option>`)}
                  </select>
                </label>`:g}
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
            ${this.isAdmin?W_((r,o)=>this.t(r,o),this._tour,r=>{this._tour=r,r===null&&C_()}):g}
            ${this._keys?N_(r=>this.t(r),()=>this._keys=!1):g}
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
    </div>`}renderSide(e){let n=this.room,r=this.isAdmin;if(this._tool==="roof")return Fg(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return this._studio?w_(this.host,this._studio,{change:s=>this._studio&&(this._studio={...this._studio,recipe:s,error:null}),save:()=>{this.saveStudio()},close:()=>this._studio=null}):m`${this.furnitureItem?m`${So(this.host,this.furnitureItem,this.furnitureActions())}${this.studioButton()}`:g} ${lm(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?So(this.host,this.furnitureItem,this.furnitureActions()):this.opening?ec(this.host,this.opening,this.openingActions()):this.device?Kl(this.host,this.device,this.deviceActions()):this.outdoorArea?hl(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?pl(this.host,this.freeWall,this.freeWallActions()):null,i=this._note?e?.notes?.find(s=>s.id===this._note):void 0;return i?m`<button class="nf-btn nf-back" @click=${()=>this._note=null}>‹ ${this.t("back_to_floor")}</button>
        ${Gm(this.host,i,{patch:s=>this.change((a,l)=>Object.assign(l.notes.find(c=>c.id===i.id),s)),remove:()=>{this.change((s,a)=>a.notes=(a.notes??[]).filter(l=>l.id!==i.id)),this._note=null}})}`:o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${dc(this.host,this.side,n,this.roomActions(n))} ${_l(this.host,this.side,n,this.deviceListActions())} ${bl(this.host,e??null,n,{select:s=>this.selectItem("furniture",s)})}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${this._check?v_(this.host,z_(this._doc,this.hass),{fix:s=>this.fixFinding(s),ignore:s=>this.ignoreDevices(s),resetIgnored:()=>this.change(s=>s.settings.check_ignore=null),close:()=>this._check=!1}):r?k_(this.host,()=>this._check=!0):g}
      ${i_(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?kf(this.host,this.measureState(),this.measureActions()):this.freeWall?pl(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?hl(this.host,this.outdoorArea,this.outdoorActions()):this.opening?ec(this.host,this.opening,this.openingActions()):this.furnitureItem?So(this.host,this.furnitureItem,this.furnitureActions()):this.device?Kl(this.host,this.device,this.deviceActions()):n?m`${dc(this.host,this.side,n,this.roomActions(n))} ${_l(this.host,this.side,n,this.deviceListActions())} ${bl(this.host,e??null,n,{select:s=>this.selectItem("furniture",s)})}`:e?d_(this.host,e,{select:s=>this.selectItem("room",s)}):g}
      ${r?_h(this.host,()=>this.paneView()):g} ${r?gh(this.host,()=>this.groundView()):g} ${r?Ri(this.host):g} ${r?Ei(this.host):g}
      ${kp(this.host)}
      ${r&&!0?Ai(this.host):g} ${r?bh(this.host,this._doc):g} ${r?xh(this.host):g}
      ${e&&r?Kp(this.host,this.bg,e):g} ${r?Oi(this.host,this.settingsActions):g}
      ${r?jh(this.host,this.backup):g}
    `}openingIsExterior(e){let n=this.floor,r=n?Ne(e,n.rooms,n.walls??[]):null;if(!n||!r)return!1;let o=we(n.rooms,Me(this._doc.settings),n.walls??[]);return Bt(o.walls,e,r)?.wall.exterior??!1}groundView(){let e=this.paneView();if(!e)return alert(this.t("floor_start_view_need_pane")),null;let n=this.floor?.elevation??0;return e.target?{...e,target:{...e.target,y:Ve(e.target.y+n)}}:e}paneView(){let n=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!n)return null;let r=n.target;return{theta:Ve(n.theta),phi:Ve(n.phi),radius:Ve(n.radius),...r?{target:{x:Ve(r.x),y:Ve(r.y),z:Ve(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let n of this._doc.floors)for(let r of n.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[Pe,et,h_]};customElements.get("nf-editor")||customElements.define("nf-editor",vc);export{vc as NfEditor};
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
lit-html/async-directive.js:
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

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
