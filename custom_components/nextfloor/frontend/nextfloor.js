/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var k={es:"1c3fc5de9f9b",fr:"65e626110850",it:"62db1910a54f",nl:"0fb64f559623",pl:"2618acd923dc",pt:"ca41478cfcaf",sv:"385dc88980d9"};Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=n=>n===void 0?n:JSON.parse(JSON.stringify(n)));var Wt=globalThis,Bt=Wt.ShadowRoot&&(Wt.ShadyCSS===void 0||Wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nn=Symbol(),so=new WeakMap,dt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Nn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Bt&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=so.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&so.set(t,e))}return e}toString(){return this.cssText}},ao=n=>new dt(typeof n=="string"?n:n+"",void 0,Nn),j=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new dt(t,n,Nn)},lo=(n,e)=>{if(Bt)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),o=Wt.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}},Ln=Bt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return ao(t)})(n):n;var{is:Pa,defineProperty:Da,getOwnPropertyDescriptor:Ha,getOwnPropertyNames:Ia,getOwnPropertySymbols:Ca,getPrototypeOf:Oa}=Object,Vt=globalThis,co=Vt.trustedTypes,Na=co?co.emptyScript:"",La=Vt.reactiveElementPolyfillSupport,ht=(n,e)=>n,Wn={toAttribute(n,e){switch(e){case Boolean:n=n?Na:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ho=(n,e)=>!Pa(n,e),uo={attribute:!0,type:String,converter:Wn,reflect:!1,useDefault:!1,hasChanged:ho};Symbol.metadata??=Symbol("metadata"),Vt.litPropertyMetadata??=new WeakMap;var he=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=uo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Da(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=Ha(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??uo}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;let e=Oa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){let t=this.properties,r=[...Ia(t),...Ca(t)];for(let o of r)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)t.unshift(Ln(o))}else e!==void 0&&t.push(Ln(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Wn).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Wn;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??ho)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};he.elementStyles=[],he.shadowRootOptions={mode:"open"},he[ht("elementProperties")]=new Map,he[ht("finalized")]=new Map,La?.({ReactiveElement:he}),(Vt.reactiveElementVersions??=[]).push("2.1.2");var qn=globalThis,po=n=>n,Kt=qn.trustedTypes,fo=Kt?Kt.createPolicy("lit-html",{createHTML:n=>n}):void 0,wo="$lit$",xe=`lit$${Math.random().toFixed(9).slice(2)}$`,yo="?"+xe,Wa=`<${yo}>`,Ce=document,ft=()=>Ce.createComment(""),mt=n=>n===null||typeof n!="object"&&typeof n!="function",Zn=Array.isArray,Ba=n=>Zn(n)||typeof n?.[Symbol.iterator]=="function",Bn=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,go=/>/g,He=RegExp(`>|${Bn}(?:([^\\s"'>=/]+)(${Bn}*=${Bn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_o=/'/g,bo=/"/g,xo=/^(?:script|style|textarea|title)$/i,Yn=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=Yn(1),q=Yn(2),ed=Yn(3),Oe=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),vo=new WeakMap,Ie=Ce.createTreeWalker(Ce,129);function ko(n,e){if(!Zn(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return fo!==void 0?fo.createHTML(e):e}var Va=(n,e)=>{let t=n.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=pt;for(let a=0;a<t;a++){let l=n[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===pt?d[1]==="!--"?s=mo:d[1]!==void 0?s=go:d[2]!==void 0?(xo.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=He):d[3]!==void 0&&(s=He):s===He?d[0]===">"?(s=o??pt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?He:d[3]==='"'?bo:_o):s===bo||s===_o?s=He:s===mo||s===go?s=pt:(s=He,o=void 0);let f=s===He&&n[a+1].startsWith("/>")?" ":"";i+=s===pt?l+Wa:u>=0?(r.push(c),l.slice(0,u)+wo+l.slice(u)+xe+f):l+xe+(u===-2?a:f)}return[ko(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},gt=class n{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=Va(e,t);if(this.el=n.createElement(c,r),Ie.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Ie.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(wo)){let h=d[s++],f=o.getAttribute(u).split(xe),x=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:x[2],strings:f,ctor:x[1]==="."?Kn:x[1]==="?"?Gn:x[1]==="@"?Un:Be}),o.removeAttribute(u)}else u.startsWith(xe)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(xo.test(o.tagName)){let u=o.textContent.split(xe),h=u.length-1;if(h>0){o.textContent=Kt?Kt.emptyScript:"";for(let f=0;f<h;f++)o.append(u[f],ft()),Ie.nextNode(),l.push({type:2,index:++i});o.append(u[h],ft())}}}else if(o.nodeType===8)if(o.data===yo)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(xe,u+1))!==-1;)l.push({type:7,index:i}),u+=xe.length-1}i++}}static createElement(e,t){let r=Ce.createElement("template");return r.innerHTML=e,r}};function We(n,e,t=n,r){if(e===Oe)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl,i=mt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=We(n,o._$AS(n,e.values),o,r)),e}var Vn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Ce).importNode(t,!0);Ie.currentNode=o;let i=Ie.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new _t(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new jn(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Ie.nextNode(),s++)}return Ie.currentNode=Ce,o}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},_t=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=We(this,e,t),mt(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ba(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=gt.createElement(ko(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Vn(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=vo.get(e.strings);return t===void 0&&vo.set(e.strings,t=new gt(e)),t}k(e){Zn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new n(this.O(ft()),this.O(ft()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=po(e).nextSibling;po(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Be=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,t=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=We(this,e,t,0),s=!mt(e)||e!==this._$AH&&e!==Oe,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=We(this,a[r+l],t,l),c===Oe&&(c=this._$AH[l]),s||=!mt(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Kn=class extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},Gn=class extends Be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},Un=class extends Be{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=We(this,e,t,0)??m)===Oe)return;let r=this._$AH,o=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==m&&(r===m||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},jn=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}};var Ka=qn.litHtmlPolyfillSupport;Ka?.(gt,_t),(qn.litHtmlVersions??=[]).push("3.3.3");var So=(n,e,t)=>{let r=t?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=t?.renderBefore??null;r._$litPart$=o=new _t(e.insertBefore(ft(),i),i,void 0,t??{})}return o._$AI(n),o};var Qn=globalThis,Z=class extends he{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=So(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Oe}};Z._$litElement$=!0,Z.finalized=!0,Qn.litElementHydrateSupport?.({LitElement:Z});var Ga=Qn.litElementPolyfillSupport;Ga?.({LitElement:Z});(Qn.litElementVersions??=[]).push("4.2.2");var Jn=(n,e,t={})=>n.callWS({type:`nextfloor/${e}`,...t}),Mo=n=>Jn(n,"building/get");async function $o(n,e){return(await Jn(n,"building/save",{building:e})).revision}function Eo(n,e){return n.connection.subscribeMessage(t=>e(t.revision),{type:"nextfloor/building/subscribe"})}async function Ao(n){return(await Jn(n,"packs/list")).packs}var Ro=n=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(n.trim());var Ua=globalThis,zo=Ua.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},jt=zo.plugins,Xn=zo.listeners,ja=new Set(["none","rainbow","pulse","flicker"]),qa=5;function Ve(n,e){n.errors.length<qa&&n.errors.push(e instanceof Error?e.message:String(e))}function Za(){for(let n of Xn)n()}function Ke(n){return Xn.add(n),()=>Xn.delete(n)}function er(n,e=""){if(!n||typeof n!="object")throw new Error("register() needs a plugin object");if(typeof n.id!="string"||!/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(n.id))throw new Error("plugin id must be 1\u201364 letters, digits, '.', '_' or '-'");if(n.apiVersion!==1)throw new Error(`plugin "${n.id}" wants API ${String(n.apiVersion)}, NextFloor offers ${1}`);for(let t of Object.keys(n.lightAnimations??{})){if(ja.has(t))throw new Error(`plugin "${n.id}": light animation "${t}" is built in`);if(typeof n.lightAnimations?.[t]!="function")throw new Error(`plugin "${n.id}": light animation "${t}" is not a function`)}for(let t of n.devices??[]){if(typeof t?.match!="function")throw new Error(`plugin "${n.id}": every device extension needs match()`);for(let r of["floorWedge","tap","watch"])if(t[r]!==void 0&&typeof t[r]!="function")throw new Error(`plugin "${n.id}": ${r} must be a function`);for(let r of t.settings??[]){if(!r||typeof r.key!="string"||!/^\w{1,32}$/.test(r.key))throw new Error(`plugin "${n.id}": a setting needs a key of 1\u201332 letters, digits or "_"`);if(!["number","select","boolean"].includes(r.type))throw new Error(`plugin "${n.id}": setting "${r.key}" has an unknown type`)}}for(let t of n.roomSections??[])if(typeof t?.render!="function"||typeof t.id!="string")throw new Error(`plugin "${n.id}": every room section needs id and render()`);jt.set(n.id,{plugin:n,status:{id:n.id,name:n.name||n.id,version:n.version||"",source:e,errors:[]}}),Za()}function Ya(n){for(let{plugin:e,status:t}of jt.values()){let r=e.lightAnimations?.[n];if(r)return{fn:r,status:t}}return null}var Fo=n=>Ya(n)!==null;function*bt(n,e){for(let{plugin:t,status:r}of jt.values())for(let o of t.devices??[]){let i=!1;try{i=o.match(n,e)}catch(s){Ve(r,s)}i&&(yield{device:o,status:r})}}function vt(n,e){for(let{device:t}of bt(n,e))return t.kind??"sensor";return null}function To(n){let e=null;for(let{device:t,status:r}of bt(n.entityId,n.state))if(t.marker)try{let o=t.marker(n);if(!o)continue;e={...e??{}},typeof o.icon=="string"&&o.icon&&(e.icon=o.icon),typeof o.text=="string"&&(e.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(e.active=o.active)}catch(o){Ve(r,o)}return e}function Po(n){let e=[];for(let{device:t,status:r}of bt(n.entityId,n.state))if(t.watch)try{let o=t.watch(n);Array.isArray(o)&&e.push(...o.filter(i=>typeof i=="string").slice(0,20))}catch(o){Ve(r,o)}return e}function Do(n,e){let t={};for(let r of n??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":typeof o=="string"&&(r.options??[]).some(([s])=>s===o);t[r.key]=i?o:r.default}return t}var Qa=n=>{let e=typeof n=="string"?/^#([0-9a-f]{6})$/i.exec(n.trim()):null;if(!e)return null;let t=Number.parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},Gt=(n,e,t,r)=>typeof n=="number"&&Number.isFinite(n)?Math.min(r,Math.max(t,n)):e;function Ho(n,e,t){for(let{device:r,status:o}of bt(n.entityId,n.state))if(r.floorWedge)try{let i=r.floorWedge({...n,placement:e,settings:Do(r.settings,t?.[o.id])});if(!i)continue;let s=Gt(i.reach,0,0,30);if(s<=0)continue;return{angle:Gt(i.angle,90,1,360),reach:s,near:Gt(i.near,0,0,s),color:Qa(i.color)??[.04,.22,.28],opacity:Gt(i.opacity,.6,0,1),through:i.tapThrough===!0}}catch(i){Ve(o,i)}return null}function Io(n,e,t,r){for(let{device:o,status:i}of bt(n.entityId,n.state))if(o.tap)try{if(o.tap({...n,...r,placement:e,settings:Do(o.settings,t?.[i.id])})===!0)return!0}catch(s){Ve(i,s)}return!1}function Co(n){let e=[];for(let{plugin:t,status:r}of jt.values())for(let o of t.roomSections??[])try{let i=o.render(n);if(i==null||i===""||typeof i!="string"&&!(i instanceof Node))continue;e.push({key:`${t.id}/${o.id}`,title:r.name,content:i})}catch(i){Ve(r,i)}return e}var tr=new Map,nr="";function rr(){let n=globalThis;if(n.NextFloor)return;n.NextFloor={apiVersion:1,register:t=>er(t,nr)};let e=n.__nextfloorPlugins??[];n.__nextfloorPlugins=[];for(let t of e)try{er(t)}catch(r){console.warn("NextFloor: plugin rejected",r)}}var Ja=n=>[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("");async function Xa(n,e=(...t)=>fetch(...t)){let t=globalThis.crypto?.subtle;if(!n.sha256||!t)return{url:n.url};let r=await e(n.url,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let o=await r.arrayBuffer();if(Ja(await t.digest("SHA-256",o))!==n.sha256.toLowerCase())throw new Error("checksum mismatch: the file is not the one that was reviewed");let i=URL.createObjectURL(new Blob([o],{type:"text/javascript"}));return{url:i,revoke:()=>URL.revokeObjectURL(i)}}async function or(n,e=r=>import(r),t){rr();for(let r of n??[]){if(!r.enabled||tr.has(r.url))continue;if(!Ro(r.url)){tr.set(r.url,{url:r.url,state:"error",error:"not allowed: use /local/\u2026, /hacsfiles/\u2026 or https://\u2026"});continue}let o={url:r.url,state:"loading"};tr.set(r.url,o);let i;try{i=await Xa(r,t),nr=r.url,await e(i.url),o.state="loaded"}catch(s){o.state="error",o.error=s instanceof Error?s.message:String(s),console.warn(`NextFloor: plugin ${r.url} failed to load`,s)}finally{nr="",i?.revoke?.()}}}var Oo=[],qt=new Map,No=0,Lo=(n,e)=>`pack:${n}:${e}`,ir=n=>n.startsWith("pack:");function Wo(n){Oo=n,qt=new Map;for(let e of n)for(let t of e.items)qt.set(Lo(e.id,t.id),t);No+=1}var sr=()=>Oo,Zt=()=>No,el={};function B(n){if(!ir(n))return;let e=qt.get(n);if(e)return e;let[,t,...r]=n.split(":"),o=el[t];return o?qt.get(Lo(o,r.join(":"))):void 0}var Yt=n=>!!n?.parts.some(e=>e.move);function Bo(n,e){if(e===null)return Math.min(1,Math.max(0,n.cover_rest??1));let t=Math.min(1,Math.max(0,e/100));return n.cover==="extends"?t:1-t}var Vo=n=>B(n)?.parts.find(e=>e.screen);var Ko=n=>!!B(n)?.climate;function Go(n,e){return n.name[e.split("-")[0]]??n.name.en??Object.values(n.name)[0]??n.id}function oe(n,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return jo;if(e.type==="led_strip")return Math.max(0,ne(n,e.x,e.z)-.04-Math.max(.02,e.h));let t=B(e.type);if(!t)return qo(e);switch(t.mount){case"surface":return Jt(n,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,Qt(n,e)-e.h);default:return 0}}function Uo(n){if(n==="plant")return"plant";let e=B(n);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var nl={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function rl(n){return n==="hedge"||n==="fence"||n==="pergola"}function ol(n,e,t){let r=n.slope??0;if(!r||n.type==="pool")return 0;let o=n.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of n.points){let u=i(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return r*l}function il(n,e,t,r){return Qo(n)+(e.offset??0)+nl[e.type]-ol(e,t,r)}function Qo(n){return n.elevation>.3?0:-.2}function wt(n,e,t){let r=(n.outdoor??[]).filter(i=>!rl(i.type)&&i.type!=="pool"&&I([e,t],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?il(n,o,e,t):Qo(n)}var sl={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Jo={type:"none",pitch:35,overhang:.4};var al={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Jo}};function ll(n,e,t){return{id:n,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Xo=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),jo=1.75;function ei(n){return ul.has(n.type)||["stairs","stairwell","parking"].includes(n.type)?!1:B(n.type)?.mount!=="ceiling"}function ar(n){return Xo.has(n)||!!B(n)?.light}var cl=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function qo(n){switch(n.type){case"home_battery":return n.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-n.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var ul=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function ne(n,e,t){let r=n.rooms.find(o=>o.points.length>=3&&I([e,t],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:n.height}var Qt=(n,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:ne(n,e.x,e.z);function Jt(n,e,t){let r=0;for(let o of n.furniture)!(cl.has(o.type)||B(o.type)?.surface)||!I([e,t],Xt(o))||(r=Math.max(r,o.h));return r}var tl=new Set([...Xo,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Zo={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function lr(n){n.energy={...sl,...n.energy??{}},n.presence=n.presence??[],n.version=1,n.settings={...al,...n.settings,roof:{...Jo,...n.settings?.roof??{}}},n.floors.forEach((e,t)=>{let r=ll(e.id,e.name??`Floor ${t+1}`,e.elevation??t*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of n.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let t=e.placements.filter(r=>r.entity_id.startsWith("light."));if(t.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=r[o.mount??"ceiling"],[s,a,l]=Zo[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),d=c,u=1;for(;e.furniture.some(h=>h.id===d);)d=`${c}_${u++}`;e.furniture.push({id:d,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return dl(n),n}function dl(n){let e=(t,r)=>{let o=new Set;for(let i of t)(typeof i.id!="string"||!i.id||o.has(i.id))&&(i.id=Yo(r)),o.add(i.id)};e(n.floors,"floor");for(let t of n.floors){for(let r of t.rooms)(typeof r.id!="string"||!r.id)&&(r.id=Yo("room"));e(t.openings,"op"),e(t.furniture,"furn"),e(t.outdoor,"out")}}function Yo(n){return`${n}_${Math.random().toString(36).slice(2,10)}`}function Ge(n){let e=0;for(let t=0;t<n.length;t++){let[r,o]=n[t],[i,s]=n[(t+1)%n.length];e+=r*s-i*o}return e/2}function yt(n){let e=Ge(n);if(Math.abs(e)<1e-9){let o=n.length||1;return[n.reduce((i,s)=>i+s[0],0)/o,n.reduce((i,s)=>i+s[1],0)/o]}let t=0,r=0;for(let o=0;o<n.length;o++){let[i,s]=n[o],[a,l]=n[(o+1)%n.length],c=i*l-a*s;t+=(i+a)*c,r+=(s+l)*c}return[t/(6*e),r/(6*e)]}function Xt(n){let e=n.rotation*Math.PI/180,t=Math.cos(e),r=Math.sin(e),o=n.w/2,i=n.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[n.x+s*t-a*r,n.z+s*r+a*t])}function I(n,e){let t=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>n[1]!=l>n[1]&&n[0]<(a-i)*(n[1]-s)/(l-s)+i&&(t=!t)}return t}var ti={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var hl=700,ur="nextfloor.unsaved",Ue="0.15.0";function pl(){try{let n=localStorage.getItem(ur);return n?JSON.parse(n):null}catch{return null}}function cr(n){try{n?localStorage.setItem(ur,JSON.stringify(n)):localStorage.removeItem(ur)}catch{}}var ni=n=>n&&typeof n=="object"&&"message"in n?String(n.message):String(n);function fl(n,e){let t=i=>i.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),[r,o]=[t(n),t(e)];for(let i=0;i<Math.max(r.length,o.length);i++){let s=(r[i]??0)-(o[i]??0);if(s!==0)return s}return 0}var je=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;stopPlugins=null;hass=null;connected=!1;revision=-1;ownRevisions=new Set;stopListening=null;timer;waiting=null;inFlight=null;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.stopPlugins=Ke(()=>this.host.requestUpdate()),this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.stopPlugins?.(),this.stopPlugins=null,this.flush(),this.stopListening?.(),this.stopListening=null}edit(e){this.building=e,or(e.settings.plugins),this.waiting=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.flush()},hl),this.host.requestUpdate()}get frontendVersion(){return Ue}get versionGap(){let e=this.backendVersion;return!e||Ue==="dev"||e===Ue?null:fl(e,Ue)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Ue!=="dev"&&this.backendVersion!==Ue}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(lr(e.building))}discardDraft(){this.draft=null,cr(null),this.host.requestUpdate()}async flush(){clearTimeout(this.timer),this.inFlight&&await this.inFlight;let e=this.waiting,t=this.hass;!e||!t||(this.waiting=null,this.saveState="saving",this.host.requestUpdate(),this.inFlight=this.send(t,e),await this.inFlight,this.inFlight=null)}async send(e,t){try{let r=await $o(e,t);this.ownRevisions.add(r),this.revision=r,this.saveState=this.waiting?"saving":"saved",this.saveError=null,cr(null)}catch(r){this.saveState="error",this.saveError=ni(r),cr({building:t,savedAt:Date.now()})}this.host.requestUpdate()}async start(){let e=this.hass;if(e&&(await Promise.all([this.reloadPacks(),this.reload()]),!(this.stopListening||!this.connected)))try{this.stopListening=await Eo(e,t=>{let r=this.ownRevisions.has(t)||t===this.revision,o=this.waiting!==null||this.inFlight!==null;!r&&!o&&this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Ao(this.hass)}catch{this.packs=[]}Wo(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Mo(this.hass);this.building=lr(e.building),or(this.building.settings.plugins),this.backendVersion=e.version??null,this.revision=e.revision,this.error=null,this.draft===null&&!this.waiting&&(this.draft=pl())}catch(e){this.error=ni(e)}this.host.requestUpdate()}}};var dr=n=>n.slice(0,n.indexOf(".")),ml={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",scene:"scene",script:"script"},A=n=>ml[dr(n)]??null,ri=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];function oi(n,e=!1){if(e||n.startsWith("lamp:"))return"light";if(n.startsWith("tap:"))return"tap";if(n.startsWith("gang:"))return"switch";if(n==="grid")return"sensor";let t=A(n);return t&&t!=="scene"&&t!=="script"?t:"other"}var ii=new Set(["light","switch","fan"]),si=n=>n!==null&&n!=="scene"&&n!=="script",D=n=>!n||n.state==="unavailable"||n.state==="unknown",xt=n=>!!n&&n.entity_id.startsWith("cover.")&&n.state==="unknown"&&n.attributes.assumed_state===!0,en=(n,e)=>n.filter(t=>(!D(t)||xt(t))&&!e?.has(t.entity_id)).map(t=>t.entity_id);function O(n,e,t){let r=String(n?.states[e]?.attributes.friendly_name??n?.entities?.[e]?.name??e);if(!t||r.length<=t.length+1||!r.toLowerCase().startsWith(`${t.toLowerCase()} `))return r;let o=r.slice(t.length+1);return o[0].toUpperCase()+o.slice(1)}var gl=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]),hr=n=>!!n&&n.entity_id.startsWith("sensor.")&&n.attributes.device_class==="enum";function ee(n){if(!n)return!1;if(n.entity_id.startsWith("vacuum."))return["cleaning","returning"].includes(n.state);let e=A(n.entity_id);return e==="light"||e==="switch"||e==="fan"||e==="binary"?n.state==="on":e==="cover"?n.state==="open"||n.state==="opening":e==="climate"?["heating","cooling"].includes(String(n.attributes.hvac_action)):e==="media"?n.state==="playing":e==="lock"?n.state==="unlocked"||n.state==="open":e==="sensor"?hr(n)&&gl.has(n.state.toLowerCase()):!1}var ai=n=>Math.min(1,Math.max(0,n));function _l(n){let e=ai((n-2200)/4300),t=[1,.66,.26],r=[.78,.9,1];return[0,1,2].map(o=>t[o]+(r[o]-t[o])*e)}function ke(n,e){if(!n||n.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:n.attributes,r=typeof t.brightness=="number"?.2+.8*Math.sqrt(ai(t.brightness/255)):1,o=t.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(t.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:r}:typeof t.color_temp_kelvin=="number"?{color:_l(t.color_temp_kelvin),level:r}:{color:[1,.71,.28],level:r}}function qe(n,e,t=null){if(n==="light"&&t==="floor")return 1.95;if(n==="light"&&t==="table")return 1.25;if(n==="light"&&t==="wall")return 1.95;switch(n){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var ie=n=>n.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C";function li(n,e){return e==="\xB0F"?(n-32)*5/9:e==="K"?n-273.15:n}var Ze=(n,e)=>ie(n)==="\xB0F"?e*9/5+32:e;var bl=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),vl=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),wl=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),yl=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ye(n,e){let t=n.entities?.[e];return t&&(t.area_id||(t.device_id?n.devices?.[t.device_id]?.area_id:null))||null}var di=(n,e)=>{let t=n.entities?.[e];return!!(t?.hidden||t?.entity_category)},ci=(n,e)=>A(e)??vt(e,n.states[e]);function ui(n,e){let t=n.states[e];if(!t||di(n,e))return!1;let r=A(e);if(!r)return vt(e,t)!==null;let o=t.attributes.device_class;return r==="sensor"?o?bl.has(o):vl.has(String(t.attributes.unit_of_measurement??"")):r==="binary"?o?wl.has(o):!!n.entities?.[e]?.area_id:!0}function xl(n,e){let t=n.states[e];return A(e)!=="sensor"||!t?.attributes.unit_of_measurement||di(n,e)||yl.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||D(t)}var tn=(n,e)=>e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power",pr=null;Ke(()=>pr=null);function fr(n,e){let t=n.get(e);return t||n.set(e,t=[]),t}function kl(n){let e=new Map,t=new Map,r=new Map,o=new Map,i=[],s=c=>{(ui(n,c)||xl(n,c))&&si(ci(n,c))&&i.push(c)};for(let[c,d]of Object.entries(n.entities??{})){let u=d.device_id;u&&d.area_id&&(o.get(u)??o.set(u,new Set).get(u)).add(d.area_id),u&&tn(n,c)&&fr(t,u).push(c),u&&!d.hidden&&!d.entity_category&&(r.get(u)??r.set(u,new Set).get(u)).add(dr(c));let h=Ye(n,c);h===null?s(c):ui(n,c)&&fr(e,h).push(c)}if(n.entities)for(let c of Object.keys(n.states))n.entities[c]||s(c);let a=c=>ri.indexOf(ci(n,c));i.sort((c,d)=>a(c)-a(d)||O(n,c).localeCompare(O(n,d)));for(let[c,d]of e){let u=n.areas?.[c]?.name;d.sort((h,f)=>a(h)-a(f)||O(n,h,u).localeCompare(O(n,f,u)))}let l=new Set;for(let[c,d]of o)d.size>1&&l.add(c);return{entities:n.entities,devices:n.devices,states:n.states,stateCount:Object.keys(n.states).length,byArea:e,powerByDevice:t,withoutArea:i,domainsByDevice:r,hubs:l}}function nn(n){let e=pr;return e&&e.entities===n.entities&&e.devices===n.devices&&(e.states===n.states||(e.states=n.states,Object.keys(n.states).length===e.stateCount))?e:pr=kl(n)}function L(n,e){return!e||!n.entities?[]:nn(n).byArea.get(e)??[]}var mr=(n,e)=>!!n.entities&&nn(n).hubs.has(e),rn=(n,e)=>n.entities?nn(n).powerByDevice.get(e)??[]:[];function gr(n,e){let t=new Map;for(let o of e)fr(t,n.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...t.values()].map(o=>{let i=o.find(s=>!n.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var Qe=(n,e)=>gr(n,e).map(t=>t.primary),Sl={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ml=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),$l=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],El=new RegExp(`(${$l.join("|")})`,"i");function Al(n,e){let t=n.entities?.[e]?.device_id,r=t&&!mr(n,t)?nn(n).domainsByDevice.get(t):void 0;return r&&[...r].some(o=>Ml.has(o))?!1:!El.test(`${e} ${n.states[e]?.attributes.friendly_name??""}`)}function _r(n,e,t,r){let o=t.climate?.[r];if(o==="none")return[];if(o)return n.states[o]?[o]:[];let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>I([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!I([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...L(n,t.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&n.states[c]?.attributes.device_class===Sl[r]&&Al(n,c))}function Se(n,e,t,r){let o=_r(n,e,t,r).map(i=>{let s=Number(n.states[i]?.state);return r==="temperature"?li(s,n.states[i]?.attributes.unit_of_measurement):s}).filter(Number.isFinite);return o.length?o.reduce((i,s)=>i+s,0)/o.length:null}var Rl=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),zl=new Set(["garage","gate"]),Fl=new Set(["window","opening"]);function kt(n,e,t=!1){let r=new Map;return n.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var hi=(n,e)=>n==="none"?null:n??e??null,St=n=>n&&n!=="none"?n:null;function Mt(n,e){let t=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(g=>g.room_id===o.id).sort((g,y)=>g.edge-y.edge||g.offset-y.offset);if(i.length===0)continue;let s=L(n,o.area_id),a=g=>n.states[g]?.attributes.device_class,l=g=>s.filter(y=>A(y)==="binary"&&g(a(y)??"")),c=g=>i.filter(y=>y.type===g),d=kt(c("window"),s.filter(g=>A(g)==="cover"&&Rl.has(a(g))),!0),u=kt(c("window"),l(g=>Fl.has(g))),h=kt(c("door"),l(g=>g==="door")),f=kt(c("garage"),s.filter(g=>A(g)==="cover"&&zl.has(a(g)??""))),x=kt(c("garage"),l(g=>g==="garage_door"));for(let g of i){let y=g.type==="window"?d:g.type==="garage"?f:null,v=g.type==="window"?u:g.type==="garage"?x:h,w=g.leaves===2;t.set(g.id,{cover:hi(g.cover,y?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:hi(g.contact,v.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:w?St(g.contact2):null,tilt2:w?St(g.tilt2):null,position:St(g.position),positionInverted:!!g.position_inverted,tiltAngle:St(g.tilt_angle),tiltMax:g.tilt_max??null,tiltOffset:g.tilt_offset??null,tiltInvert:!!g.tilt_invert,shut:!!g.shut,lock:g.type==="door"?St(g.lock):null})}}return t}var Tl=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Pl(n){if(!n||D(n))return null;let e=n.attributes.window_state;for(let t of[typeof e=="string"?e:"",n.state]){let r=t.trim(),o=r&&Tl.find(([i])=>i.test(r));if(o)return o[1]}return null}var Dl=.5;function pi(n,e){let t=e?n.states[e]:void 0,r=t&&!D(t)?Number(t.state):NaN;if(!Number.isFinite(r))return null;let o=t.attributes.unit_of_measurement==="%"||r>1;return Math.min(1,Math.max(0,o?r/100:r))}function Hl(n,e){let t=pi(n,e.position);if(t!==null)return e.positionInverted?t:1-t;let r=e.cover?n.states[e.cover]:void 0;if(r&&!D(r)){let o=r.attributes.current_position;return typeof o=="number"?1-Math.min(100,Math.max(0,o))/100:r.state==="closed"?1:r.state==="opening"||r.state==="closing"?.5:0}return e.cover?0:null}function br(n,e){let t=e?n.states[e]?.state:void 0;return t==="unlocked"||t==="open"||t==="opening"}function pe(n,e,t="window"){let r=u=>!!u&&n.states[u]?.state==="on",o=u=>!!u&&!!n.states[u]&&!D(n.states[u]),i=u=>u?Pl(n.states[u]):null,s=Hl(n,e);if(t==="door"){let u=i(e.contact);return{open:u===null?e.shut?0:Dl:u==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:s,sensed:u!==null||s!==null,unlocked:br(n,e.lock)}}if(t==="garage"){let u=s!==null||o(e.contact),h=pi(n,e.position)!==null||o(e.cover),f=o(e.contact)?r(e.contact)?0:1:null;return{open:0,open2:0,tilt:0,tilt2:0,cover:(h?s:f??s)??1,sensed:u}}let a=r(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",l=r(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",c=l?1:0,d=e.tiltAngle?Number(n.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(d)){let u=(d-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,u/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}return{open:i(e.contact)==="open"&&!l?1:0,open2:i(e.contact2)==="open"&&!a?1:0,tilt:c,tilt2:a?1:0,cover:s,sensed:o(e.contact)||o(e.tilt)||Number.isFinite(d)}}var fi=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,mi=/(kühl|fridge|gefrier|freezer)/i,gi=/(spülmaschine|geschirrspül|dishwasher)/i,Il=/(kochfeld|herd|induktion|cooktop)/i,Cl={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:fi,tv_wall:fi,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:mi,fridge_smart:mi,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:gi,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Il,sink:gi,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},_i={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},bi=new Set(["tv_board","tv_wall"]);var vi=n=>bi.has(n)||!!Vo(n),an=n=>vi(n)||n==="desk"||n==="fridge_smart",sn=n=>!!n&&n!=="none";function Ol(n,e){if(tn(n,e))return e;let t=n.entities?.[e]?.device_id;return t?rn(n,t).find(r=>r!==e)??null:null}var Nl=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&I([e,t],r.points));function on(n,e,t,r){return n.find(o=>e?.test(t(o)))??(r?n[0]??null:null)}function Je(n,e){let t=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...r.placements.map(i=>i.entity_id)].filter(sn));for(let i of r.furniture){let s=i.type in _i,a=Ko(i.type),l=s?_i[i.type]:Cl[i.type];if(!l&&!a&&i.entity==null&&i.power==null)continue;let c=Nl(r,i.x,i.z),d=(c?Qe(n,L(n,c.area_id)):[]).filter(y=>!o.has(y)),u=y=>`${y} ${O(n,y)}`,h=y=>d.filter(v=>A(v)===y),f=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let y=(c?L(n,c.area_id):[]).filter(w=>!o.has(w)),v=new Set(y.filter(w=>A(w)==="fan").map(w=>n.entities?.[w]?.device_id).filter(Boolean));f=y.find(w=>A(w)==="light"&&v.has(n.entities?.[w]?.device_id))??on(h("light"),l,u,!1)}else if(s)f=on(h("light"),l,u,!0);else if(i.type==="robot_vacuum"){let y=c?.area_id??null;f=Object.keys(n.entities??{}).find(v=>v.startsWith("vacuum.")&&!o.has(v)&&Ye(n,v)===y)??null}else if(i.type==="radiator"||a)f=on(h("climate"),l,u,!0);else if(vi(i.type)){let y=h("media");f=y.find(v=>n.states[v]?.attributes.device_class==="tv")??on(y,l,u,bi.has(i.type))}else l&&(f=d.find(y=>["switch","media","fan"].includes(A(y)??"")&&l.test(u(y)))??null);f&&o.add(f)}let x=i.power==="none"?null:i.power??null;i.power==null&&(x=f?Ol(n,f):null,!x&&l&&c&&!s&&(x=L(n,c.area_id).find(y=>tn(n,y)&&!o.has(y)&&l.test(u(y)))??null),x&&o.add(x));let g=null;if(i.type==="ceiling_fan"&&(g=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let y=(c?L(n,c.area_id):[]).filter(w=>A(w)==="fan"&&!o.has(w)),v=f?n.entities?.[f]?.device_id:void 0;g=(v?y.find(w=>n.entities?.[w]?.device_id===v):void 0)??y[0]??null,g&&o.add(g)}(f||x||g)&&t.set(i.id,{entity:f,power:x,...i.type==="ceiling_fan"?{fan:g}:{}})}}return t}function Xe(n,e){let t=new Set,r=Je(n,e),o=e.some(i=>i.openings.some(s=>s.confirm))?Mt(n,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?o?.get(s.id)?.cover:null;sn(a)&&t.add(a)}for(let s of i.furniture){let a=s.confirm?r.get(s.id)?.entity:null;sn(a)&&t.add(a)}}return t}function wi(n,e){let t=o=>sn(o)&&["on","open"].includes(n.states[o]?.state??""),r=new Map;for(let o of e.flatMap(i=>i.furniture))o.type==="fridge_smart"&&r.set(o.id,{left:t(o.door_left),right:t(o.door_right)});return r}function yi(n,e,t){let r=(d,u)=>I([d,u],t.points),o=Je(n,[e]),i=Mt(n,[e]),s=new Set(t.hidden??[]),a=[...e.placements.filter(d=>r(d.x,d.z)).map(d=>d.entity_id),...e.furniture.filter(d=>r(d.x,d.z)).flatMap(d=>[o.get(d.id)?.entity,o.get(d.id)?.power]),...e.openings.filter(d=>d.room_id===t.id).flatMap(d=>{let u=i.get(d.id);return u?[u.cover,u.contact,u.tilt,u.contact2]:[]}),...t.panel??[]],l=[...new Set(a.filter(d=>!!d&&!!n.states[d]))].filter(d=>!s.has(d)),c=new Set(l);return{shown:l,more:L(n,t.area_id).filter(d=>!c.has(d)&&!s.has(d))}}var Ll={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./},Wl=/^k?W$/,fe=n=>n&&n!=="none"?n:null;function Bl(n,e){let t=e.car??{},r=fe(t.device)??fe(e.entity),o=r?n.entities?.[r]?.device_id:null,i=o&&n.entities?Object.values(n.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],s=(h,f)=>String(n.states[h]?.attributes[f]??""),a=h=>`${h} ${s(h,"friendly_name")} ${n.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,f,x=()=>!0)=>i.find(g=>f.includes(g.split(".")[0])&&Ll[h].test(a(g))&&x(g))??null,c=(h,f)=>i.find(x=>x.startsWith(`${h}.`)&&s(x,"device_class")===f)??null,d=h=>i.find(f=>f.startsWith(`${h}.`))??null,u=h=>s(h,"unit_of_measurement");return{soc:fe(t.soc)??c("sensor","battery")??l("soc",["sensor"],h=>u(h)==="%"),range:fe(t.range)??l("range",["sensor"],h=>/km|mi/.test(u(h)))??l("range",["sensor"]),charging:fe(t.charging)??l("charging",["sensor"],h=>Wl.test(u(h)))??l("charging",["binary_sensor","switch"]),plugged:fe(t.plugged)??c("binary_sensor","plug")??l("plugged",["binary_sensor"]),lock:fe(t.lock)??d("lock")??l("lock",["binary_sensor"]),climate:fe(t.climate)??d("climate")??l("climate",["switch","binary_sensor"]),tracker:fe(t.tracker)??d("device_tracker")}}function xi(n,e){return e.flatMap(r=>r.furniture).filter(r=>r.type==="parking"&&r.car).flatMap(r=>Object.values(Bl(n,r))).filter(r=>!!r)}var ki=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function ln(n,e,t){if(t==="none")return null;if(t)return t;let r=e?n.entities?.[e]?.device_id:null;return!r||!n.entities?null:Object.values(n.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(ki.test(i.translation_key??"")||ki.test(i.entity_id.split(".")[1])))?.entity_id??null}function Si(n){return n.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Mi(n,e,t,r){let o=r?n.states[r]?.state:t?n.states[t]?.attributes.current_room:void 0;if(typeof o!="string"||["","unknown","unavailable"].includes(o))return null;let i=Si(o);if(!i)return null;let s=l=>[l.name,l.area_id??"",l.area_id&&n.areas?.[l.area_id]?.name||""].map(Si).filter(Boolean);return e.find(l=>s(l).includes(i))??e.find(l=>s(l).some(c=>c.length>=3&&(c.includes(i)||i.includes(c))))??null}var Vl=new Set(["garage","gate","door"]);function vr(n,e){let t=new Set,r=new Set,o=i=>{if(!i||i==="none"||!n.states[i])return;let s=A(i);s==="light"&&t.add(i),s==="cover"&&!Vl.has(String(n.states[i].attributes.device_class??""))&&r.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);Qe(n,L(n,i.area_id)).filter(a=>!s.has(a)).forEach(o)}return e.placements.forEach(i=>o(i.entity_id)),e.furniture.forEach(i=>o(i.entity)),{lights:[...t],covers:[...r]}}function $i(n){let e=n.split(".")[0];switch(e){case"scene":case"script":return[e,"turn_on"];case"automation":return[e,"trigger"];case"button":case"input_button":return[e,"press"];default:return["homeassistant","toggle"]}}function wr(n,e,t){let r=t.target?.trim()??"",o=(i,s)=>e.dispatchEvent(new CustomEvent(i,{detail:s,bubbles:!0,composed:!0}));switch(t.action){case"navigate":if(!r)return;history.pushState(null,"",r),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return;case"more_info":r&&o("hass-more-info",{entityId:r});return;case"service":{if(!r.includes("."))return;let[i,s]=r.split(".",2);n.callService(i,s,t.data??{});return}case"fire_dom_event":o("ll-custom",t.data??{});return}}var Kl=[.25,.9,.45],Gl=[1,.82,.55];function Ul(n,e){let t=n.states[e],r=Number(t?.attributes.current_power_w??t?.attributes.power??NaN);return Number.isFinite(r)?r:null}function Ei(n,e,t){let r=[];return e.forEach((o,i)=>{if(!o||o==="none")return;let s=n.states[o];if(!s||D(s))return;if(A(o)==="light"){let c=ke(s);c&&r.push({gang:i,color:c.color,level:c.level});return}if(!ee(s)&&s.state!=="on")return;let a=t?Ul(n,o):null,l=a===null?.8:Math.min(1,.45+Math.sqrt(Math.max(0,a))/40);r.push({gang:i,color:t?Kl:Gl,level:l})}),r}var yr=(n,e)=>(n??[]).slice(0,e).filter(t=>!!t&&t!=="none");var jl=864e5,xr=n=>{let e=new Date(n);return e.setHours(0,0,0,0),e.getTime()};function ql(n,e){let t=/(\d{4})-(\d{2})-(\d{2})/.exec(n);if(t)return new Date(Number(t[1]),Number(t[2])-1,Number(t[3])).getTime();if(t=/(\d{1,2})\.(\d{1,2})\.(\d{4}|\d{2})?/.exec(n),t){let r=t[3]?t[3].length===2?2e3+Number(t[3]):Number(t[3]):new Date(e).getFullYear(),o=new Date(r,Number(t[2])-1,Number(t[1])).getTime();return!t[3]&&o<xr(e)&&(o=new Date(r+1,Number(t[2])-1,Number(t[1])).getTime()),o}return t=/(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(n),t?new Date(Number(t[3]),Number(t[1])-1,Number(t[2])).getTime():null}function Ai(n,e=Date.now()){if(!n||D(n))return null;let t=Number(n.attributes.daysTo);if(n.attributes.daysTo!==void 0&&Number.isFinite(t))return Math.max(0,Math.round(t));let r=String(n.state).trim();if(/^-?\d+(\.\d+)?$/.test(r))return Math.max(0,Math.round(Number(r)));let o=r.toLowerCase();if(/\b(heute|today)\b/.test(o))return 0;if(o.includes("\xFCbermorgen")||o.includes("uebermorgen"))return 2;if(/\b(morgen|tomorrow)\b/.test(o))return 1;let i=ql(r,e)??(n.attributes.device_class==="timestamp"||n.attributes.device_class==="date"?Date.parse(r):null);if(i!==null&&Number.isFinite(i))return Math.max(0,Math.round((xr(i)-xr(e))/jl));let s=/(\d+)\s*(tag|tage|tagen|day|days)\b/i.exec(r);return s?Number(s[1]):null}function Ri(n){return!n||D(n)?!1:n.state==="on"||/^(post|mail|yes|ja|true|voll|full|detected)$/i.test(n.state.trim())}function zi(n,e=20){if(!n||D(n))return null;let t=Number(n.state);return Number.isFinite(t)?{moisture:t,thirsty:t<e}:n.entity_id.startsWith("binary_sensor.")?{moisture:NaN,thirsty:n.state==="on"}:null}var Zl=/remain|rest|verbleib|time_left|timeleft|finish|end_time|fertig|programmende|program_end|done_at/i;function kr(n,e,t=Date.now()){for(let r of e){if(!r.startsWith("sensor.")||!Zl.test(`${r} ${n.states[r]?.attributes.friendly_name??""}`))continue;let o=n.states[r];if(!o||D(o))continue;let i=o.attributes;if(i.device_class==="timestamp"){let c=Date.parse(o.state);if(Number.isFinite(c)&&c>t)return Math.ceil((c-t)/6e4);continue}let s=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(o.state.trim());if(s){let c=s[3]!==void 0?Number(s[1])*60+Number(s[2])+Number(s[3])/60:Number(s[1])*60+Number(s[2]);if(c>0)return Math.ceil(c);continue}let a=Number(o.state);if(!Number.isFinite(a)||a<=0)continue;let l=String(i.unit_of_measurement??"min").toLowerCase();return Math.ceil(l==="h"?a*60:l==="s"?a/60:a)}return null}function $t(n,e){let t=e?n.entities?.[e]?.device_id:null;return t&&n.entities?Object.values(n.entities).filter(r=>r.device_id===t).map(r=>r.entity_id):[]}var Fi=n=>n<60?`${n} min`:`${Math.floor(n/60)} h ${String(n%60).padStart(2,"0")} min`;function Yl(n,e){let t=e?n.states[e]:void 0;if(!t||D(t))return null;let r=t.attributes.current_position;return typeof r=="number"?Math.min(100,Math.max(0,r)):t.state==="open"?100:t.state==="closed"?0:t.state==="opening"||t.state==="closing"?50:null}function Ti(n,e){let t=new Map;for(let r of e.floors.flatMap(o=>o.furniture)){let o=B(r.type);!o||!Yt(o)||t.set(r.id,Bo(o,r.cover_entity?Yl(n,r.cover_entity):null))}return t}var Pi={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",walls_slope:"Schr\xE4g",walls_slope_hint:"W\xE4nde schr\xE4g abgeschnitten: vorne halbhoch, hinten voll \u2013 wie ein Puppenhaus, dreht mit der Kamera",walls_solid:"Massiv",walls_solid_hint:"Massive W\xE4nde in ihren Farben statt Glas (Farben: Editor \u2192 Einstellungen, pro Raum im Raum)",wall_paint_outside:"Wandfarbe au\xDFen",wall_paint_inside:"Wandfarbe innen",wall_paint_room:"Wandfarbe innen (dieser Raum)",wall_paint_hint:"Gilt in der 3D-Ansicht \u201EMassiv\u201C.",wall_paint_default:"Standard",card_solid_walls:"Massive W\xE4nde (in ihren Farben)",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",lock_confirm_unlock:"{name} wirklich aufschlie\xDFen?",gang_switch_one:"Schaltet",furn_cover_entity:"Bewegt sich mit",furn_cover_hint:"Vorhang, Leinwand, Markise oder Tor folgen dieser Cover-Entit\xE4t (Rollladen, Vorhang, Markise, Tor) und fahren mit ihr. Ein Tipp \xF6ffnet ihr Men\xFC (auf, Stopp, zu).",gang_switch:"Taste {n} schaltet",gang_socket_one:"Steckdose an",gang_socket:"Steckdose {n} an",gang_switch_hint:"Eine Taste leuchtet, solange ihr Licht an ist (in seiner Farbe). Ein Tipp schaltet; bei mehreren Tasten fragt ein kleines Men\xFC, welche. Dieselbe Entit\xE4t darf an mehreren Schaltern sitzen.",gang_socket_hint:"Eine Steckdose leuchtet gr\xFCn, solange ihr Schalter an ist \u2013 heller, je mehr sie zieht. Ein Tipp schaltet; bei mehreren fragt ein kleines Men\xFC, welche.",lock_confirm_lock:"{name} abschlie\xDFen?",opening_lock:"Smart Lock",opening_lock_hint:"Ein Tipp auf die T\xFCr schlie\xDFt ab oder auf (immer mit R\xFCckfrage). Solange sie aufgeschlossen ist, leuchtet ihre Kante.",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",units:"Ma\xDFe anzeigen in",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:"Wie L\xE4ngen und Fl\xE4chen im Plan, in den Formularen und in der Wandansicht stehen. Eingaben bleiben in Metern.",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",side_failed:"Dieses Formular lie\xDF sich nicht anzeigen ({error}). Der Grundriss bleibt bedienbar. Bitte melde den Text in einem GitHub-Issue.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",ambilight:"Leuchten hinter dem Fernseher (%)",ambilight_hint:"Wie kr\xE4ftig es hinter dem Fernseher leuchtet, solange er l\xE4uft. 0 schaltet es aus (zum Beispiel wenn du LED-Streifen am Fernseher hast), 100 ist die Standardst\xE4rke.",glow_scale:"Leuchtst\xE4rke in 3D (%)",light_effects:"Effektanimationen in 3D",light_effects_hint:"Nur exakte HA-Effektnamen zuordnen. Ohne Zuordnung bleibt die HA-Farbe statisch. \xC4ndert nichts in Home Assistant.",light_effects_enabled:"Animationen f\xFCr diese Leuchte erlauben",light_effect_unmapped:"Nicht zugeordnet (statisch)",light_effect_add:"Exakten Effektnamen hinzuf\xFCgen",light_effect_name_limit:"Der exakte Effektname muss 1 bis 255 Zeichen lang sein. Er wird nicht gek\xFCrzt.",light_effect_count_limit:"Maximal 100 Zuordnungen. Entferne zuerst einen vorhandenen Eintrag.",light_effect_exists:"Dieser Effektname ist bereits zugeordnet. Die vorhandene Zuordnung bleibt erhalten.",light_animation_none:"Statisch",light_animation_rainbow:"Regenbogen (ersetzt Farbe)",light_animation_pulse:"Pulsieren (Intensit\xE4t)",light_animation_flicker:"Flackern (Intensit\xE4t)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",panel_fold:"Einklappen (Raum bleibt sichtbar)",panel_unfold:"Wieder aufklappen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",card_weather_density:"Regen- und Schneemenge",card_weather_density_hint:"Weniger Tropfen und Flocken als das Wetter meldet; Wolken, Nebel und Blitze bleiben",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",rain_sensor:"Regensensor (eigene Wetterstation)",outage_sensor:"Sensor f\xFCr Stromausfall",outage_hint:"Ein Bin\xE4rsensor der Klasse Strom, der aus ist, ein anderer Bin\xE4rsensor, der an ist, ein Status wie \u201Eoff_grid\u201C oder \u201Ebackup\u201C oder eine Spannung unter 50 V l\xF6sen eine Warnung f\xFCrs ganze Haus aus.",opening_rain_warning:"Bei Regen warnen",opening_light_well:"Lichtschacht davor",sill_boards:"Fensterbank",sill_boards_auto:"Automatisch",sill_boards_none:"Keine",sill_boards_inside:"Nur innen",sill_boards_outside:"Nur au\xDFen",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",import_other_hint:"Aus Sweet Home 3D: die .sh3d-Datei hier importieren. Etagen, R\xE4ume, T\xFCren, Fenster und freie W\xE4nde werden \xFCbernommen, M\xF6bel nicht.",import_sh3d_found:"Sweet Home 3D: {floors} Etagen, {rooms} R\xE4ume, {openings} T\xFCren und Fenster, {walls} freie W\xE4nde ({furniture} M\xF6bel werden nicht \xFCbernommen).",import_error_sh3d:"Das ist keine Sweet-Home-3D-Datei, die sich lesen l\xE4sst (es braucht Sweet Home 3D 5.3 oder neuer).",import_error_sh3d_empty:"In der Sweet-Home-3D-Datei sind keine R\xE4ume oder W\xE4nde.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_buttons:"Raum-Kn\xF6pfe",card_room_buttons_hint:"Eine Reihe mit einem Knopf je Raum oben in der Karte \u2013 antippen \xF6ffnet den Raum, wie das Antippen im Modell",card_room_panel_hint:"Lichter und Rolll\xE4den des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",care_bin_today:"Heute Abholung",care_bin_tomorrow:"Morgen Abholung",care_bin_days:"In {n} Tagen",care_mail_yes:"Post ist da",care_mail_no:"Leer",care_plant_thirsty:"Durst",care_plant_ok:"Gut versorgt",care_time_left:"Noch {time}",care_entity_bin:"Abholtermin (Sensor)",care_entity_mail:"Post-Sensor",care_entity_plant:"Bodenfeuchte (Sensor)",care_thirsty_below:"Durst unter (%)",care_hint_bin:"Ein Sensor mit dem n\xE4chsten Abholtermin: Tage, ein Datum, \u201Eheute\u201C/\u201Emorgen\u201C oder die Integration Waste Collection Schedule. Am Tag davor und am Abholtag leuchtet die Tonne.",care_hint_mail:"Ein Sensor, der meldet, dass Post im Kasten ist (z. B. ein Kontakt an der Klappe). Dann leuchtet der Briefkasten.",care_hint_plant:"Ein Feuchtesensor in der Erde. Darunter leuchtet die Pflanze und meldet Durst.",lib_cat_lights:"Leuchten",lib_cat_seating:"Sitzen",lib_cat_tables:"Tische",lib_cat_storage:"Schr\xE4nke & Regale",lib_cat_beds:"Betten",lib_cat_kitchen:"K\xFCche",lib_cat_appliances:"Haushaltsger\xE4te",lib_cat_bath:"Bad",lib_cat_media:"TV & Audio",lib_cat_office:"B\xFCro",lib_cat_tech:"Technik",lib_cat_climate:"Heizung & Klima",lib_cat_energy:"Energie",lib_cat_garden:"Garten & Terrasse",lib_cat_plants:"Pflanzen",lib_cat_kids:"Kinder",lib_cat_fitness:"Fitness",lib_cat_pets:"Haustiere",lib_cat_workshop:"Werkstatt & Garage",lib_cat_vehicles:"Fahrzeuge",lib_cat_building:"Treppen & Bauteile",lib_cat_decor:"Deko & Sonstiges",lib_favourites:"Favoriten",lib_recent:"Zuletzt benutzt",lib_for_room:"Passend zu {room}",lib_all_rooms:"Alle R\xE4ume zeigen",lib_linkable:"verkn\xFCpfbar",lib_lit:"leuchtet",lib_outdoor:"drau\xDFen",lib_fav_add:"Zu den Favoriten",lib_fav_remove:"Aus den Favoriten nehmen",lib_sizes:"Gr\xF6\xDFen",feature_name_energy:"Energiefluss",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",models:"Eigene 3D-Modelle",models_hint:"F\xFCr manche Fahrzeuge kann NextFloor ein echtes 3D-Modell zeigen, wenn du eins besitzt. W\xE4hle die Datei (.glb) hier aus: NextFloor dreht sie richtig herum, macht sie leichter, markiert den Lack und legt sie auf deinem Home Assistant ab. Ohne Modell sieht das Fahrzeug aus wie bisher.",models_licence:"Die Dateien geh\xF6ren dir und bleiben auf deinem Home Assistant. NextFloor liefert keine Modelle mit; bitte pr\xFCfe, dass die Lizenz deines Modells die Nutzung in deiner Installation erlaubt.",model_add:"Modell hochladen \u2026",model_replace:"Modell ersetzen \u2026",model_remove:"Entfernen",model_present:"vorhanden",model_missing:"noch keins",model_remove_confirm:"Das Modell \u201E{id}\u201C von Home Assistant l\xF6schen?",model_removed:"Modell \u201E{id}\u201C gel\xF6scht.",model_uploaded:"Modell \u201E{id}\u201C hochgeladen ({size}). Lade das Panel neu, damit es erscheint.",model_upload:"Auf Home Assistant ablegen",model_info:"{triangles} Dreiecke, {size} m",model_front:"Vorderseite",model_front_hint:"Drehe das Modell, bis die Front zum Betrachter zeigt (schr\xE4g nach unten links in der Vorschau).",model_paint:"Lack (die Farbe, die du im Editor w\xE4hlst)",model_paint_preview:"Farbe in der Vorschau",model_detail:"Detailgrad",model_detail_light:"Leicht (Tablet)",model_detail_normal:"Normal",model_detail_fine:"Fein",model_result:"Ergebnis: {triangles} Dreiecke, {size}",model_error_not_glb:"Das ist keine .glb-Datei (bin\xE4res glTF). Exportiere das Modell als \u201EglTF binary\u201C.",model_error_compressed:"Die Datei ist komprimiert (Draco, Meshopt oder KTX). Exportiere sie ohne Kompression.",model_error_empty:"In der Datei ist nichts Dreidimensionales zu finden.",model_error_unreadable:"Die Datei l\xE4sst sich nicht lesen: {detail}",model_error_too_large:"Die Datei ist gr\xF6\xDFer als {max}. W\xE4hle einen geringeren Detailgrad.",model_upload_forbidden:"Nur Administratoren d\xFCrfen Modelle hochladen.",model_upload_too_large:"Home Assistant nimmt keine Dateien \xFCber {max} an. W\xE4hle einen geringeren Detailgrad.",model_upload_not_glb:"Home Assistant hat die Datei abgelehnt (kein bin\xE4res glTF).",model_upload_bad_id:"Die Modell-Kennung ist ung\xFCltig.",model_upload_other:"Das Hochladen hat nicht geklappt: {detail}",ext_intro:"Hier importierst du eigene M\xF6bel-Packs, l\xE4dst eigene 3D-Modelle hoch und bindest Plugins ein.",plugin:"Plugin",plugins_title:"Plugins",plugins_intro:"Plugins erweitern NextFloor um eigene Licht-Animationen, Ger\xE4te und Karten im Raum-Panel. Trag die Adresse eines Plugins ein (eine .js-Datei in /config/www, also /local/\u2026, aus HACS /hacsfiles/\u2026 oder https://\u2026).",plugins_docs:"Wie man ein Plugin schreibt",plugins_warning:"Plugins laufen mit denselben Rechten wie NextFloor in deinem Browser. Nimm nur Plugins, deren Quelle du vertraust.",plugins_off:"ausgeschaltet",plugins_error:"Fehler",plugins_loading:"wird geladen \u2026",plugins_nothing_registered:"geladen, hat aber nichts angemeldet",plugins_loaded:"aktiv",plugins_reload_hint:"Wirkt nach dem Neuladen der Seite",plugins_remove:"Entfernen",plugins_none:"Noch keine Plugins eingetragen.",plugins_from_dashboard:"\xDCber eine Dashboard-Ressource angemeldet",plugins_add:"Hinzuf\xFCgen",plugins_url_invalid:"Bitte eine .js-Adresse unter /local/\u2026, /hacsfiles/\u2026 oder https://\u2026 angeben.",plugins_exists:"Dieses Plugin ist schon eingetragen.",plugins_limit:"H\xF6chstens 20 Plugins.",packs_title:"M\xF6bel-Packs",packs_intro:"Eigene M\xF6bel als Pack (JSON) importieren: als Datei oder unten einf\xFCgen. {n} Packs sind mitgeliefert und immer da.",packs_docs:"Pack-Format",packs_none:"Noch keine eigenen Packs importiert.",pack_import:"Pack-Dateien importieren \u2026",pack_paste:"JSON importieren",pack_paste_empty:"F\xFCge zuerst das JSON eines Packs ein.",pack_paste_not_json:"Das ist kein g\xFCltiges JSON: {detail}",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_error_not_a_pack:'Das ist kein M\xF6bel-Pack (es fehlt "format": "nfpack").',pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Das Pack ist zu gro\xDF (h\xF6chstens 1 MB).",pack_error_needs_update:"Dieses Pack braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal importieren.",pack_error_other:"Import fehlgeschlagen: {detail}",store_open:"Plugin-Store \xF6ffnen",store_close:"Plugin-Store schlie\xDFen",store_intro:"Gepr\xFCfte Plugins aus der Community. Jedes wird vor der Aufnahme angesehen und danach nicht mehr ver\xE4ndert.",store_submit:"Eigenes Plugin einreichen",store_empty:"Noch keine Plugins im Store.",store_failed:"Der Store lie\xDF sich nicht laden ({error}).",store_install:"Installieren",store_installed:"installiert",store_update:"Aktualisieren",store_confirm:`\u201E{name}\u201C von {author} installieren?

Ein Plugin l\xE4uft mit denselben Rechten wie NextFloor in deinem Browser. Die Datei wurde gepr\xFCft, ihr Inhalt ist festgelegt:
{url}`,manual:"Anleitung",manual_more:"Mehr erfahren",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",live_autarky:"autark",live_day_hint:"Die letzten 24 Stunden: Solar (Fl\xE4che) und Verbrauch (Linie)",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_missing_item:"M\xF6bel aus entferntem Pack",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_corners_hint:"Ecken: ein + auf einer Kante f\xFCgt eine Ecke hinzu, Ziehen formt die Fl\xE4che, \xD7 entfernt eine Ecke.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt, bekommt hier ein Loch \u2013 ein Pool in der Terrasse, ein Teich oder eine Wildfl\xE4che im Rasen. Die Reihenfolge beim Zeichnen spielt keine Rolle. Ein Pool schneidet sich von selbst aus.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",map_on:"Echte Karte unter dem Plan anzeigen",map_lat:"Breitengrad",map_lon:"L\xE4ngengrad",map_use_ha:"Standort von Home Assistant \xFCbernehmen",map_opacity:"Sichtbarkeit (%)",map_zoom:"Detailstufe",map_zoom_coarse:"grob",map_zoom_fine:"fein",map_move:"Karte unter dem Plan verschieben",map_step:"Schritt",map_url:"Eigene Kachel-Adresse (leer = OpenStreetMap)",map_hint:"Dein Browser l\xE4dt die Kartenkacheln direkt vom Kartenserver (standardm\xE4\xDFig OpenStreetMap, bitte deren Nutzungsbedingungen beachten); solange die Karte aus ist, wird nichts geladen. Der Plan liegt auf der Karte, wie der Kompass es sagt \u2013 drehe den Kompass oder verschiebe die Karte, bis das Haus passt.",compass_title:"Kompass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Nord \u2194 S\xFCd tauschen",compass_swap_hint:"Dreht den Kompass um 180\xB0. Zeichnung, Dachfl\xE4chen und Solarfelder bleiben, wie sie sind.",compass_hint:"Stimmt der Kompass nicht mit der Wirklichkeit \xFCberein, drehst du ihn hier \u2013 nichts muss neu gezeichnet werden. Sonnenlicht, Wind und die Himmelsrichtungen der Dachfl\xE4chen richten sich danach.",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_end_start:"Ende am Firstanfang",roof_end_end:"Ende am Firstende",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan, ein + auf einer Kante f\xFCgt eine Ecke hinzu, \xD7 entfernt eine. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_slope:"Schr\xE4g",wall_slope_start:"H\xF6he am Anfang (m)",wall_slope_end:"H\xF6he am Ende (m)",wall_slope_hint:"Schr\xE4ge Wand: die Oberkante l\xE4uft gerade von der H\xF6he am Anfang der Wand (Ecke mit der kleineren Nummer) zur H\xF6he am Ende. Beide H\xF6hen d\xFCrfen \xFCber der Geschossh\xF6he liegen, zum Beispiel f\xFCr ein Pultdach-Zimmer mit hohen Oberlichtern.",wall_slope_off:"Wieder eine ebene Wand",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_view:"Wandansicht",wall_view_hint:"Die Wand von vorne: T\xFCren, Fenster und M\xF6bel an ihr ziehen oder ihren Abstand eintippen.",wall_view_prev:"Vorige Wand",wall_view_next:"N\xE4chste Wand",wall_view_left:"Abstand links (m)",wall_view_height:"H\xF6he \xFCber Boden (m)",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (Erweiterungen \u2192 M\xF6bel-Packs).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_ceiling_fan:"Deckenventilator",furn_fan_entity:"Ventilator",fan_hint:"Die Leuchte ist das Licht des Ventilators (leer lassen, wenn er keins hat). Der Ventilator wird im Raum gefunden oder hier gew\xE4hlt: In 3D drehen sich die Fl\xFCgel so schnell wie er l\xE4uft, sein Symbol schaltet ihn, Wischen hoch/runter \xE4ndert die Stufe, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Die H\xF6he ist, wie weit er von der Decke h\xE4ngt (mehr = l\xE4ngere Stange).",room_ceiling:"Deckenh\xF6he",room_ceiling_hint:"F\xFCr einen Raum, der niedriger ist als das Stockwerk: Deckenleuchten, Ventilatoren, LED-Streifen und Ger\xE4te an der Decke h\xE4ngen dann hier, und die W\xE4nde des Raums sind so hoch.",ceiling_here:"Decke hier",ceiling_here_hint:"H\xF6he der Decke genau an dieser Stelle, z. B. bei einer Dachschr\xE4ge. Leer = Decke des Raums.",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto",clock:"Uhr",clock_none:"Keine",clock_top_left:"Oben links",clock_top_right:"Oben rechts",clock_bottom_left:"Unten links",clock_bottom_right:"Unten rechts",lock3d_on:"3D sperren (Drehen, Zoomen und Verschieben aus, Tippen geht weiter)",lock3d_off:"3D entsperren",walk:"Durchs Haus gehen",travel:"Zeitreise: die letzten 24 Stunden oder 7 Tage abspielen",travel_play:"Abspielen",travel_pause:"Anhalten",travel_loading:"Lade Verlauf \u2026",travel_failed:"Der Verlauf lie\xDF sich nicht laden.",travel_speed:"Tempo",travel_speed_min:"1 Min./s",travel_speed_10min:"10 Min./s",travel_speed_hour:"1 Std./s",travel_days:"Tage",travel_live:"Live",card_travel_button:"Taste f\xFCr die Zeitreise",walk_stop:"Gehen beenden",walk_hint:"Ziehen: umsehen \xB7 W A S D / Pfeile oder Stick: gehen \xB7 Mausrad: Schritt",card_walk_button:"Taste zum Durchgehen",card_lock_button:"Taste f\xFCr die 3D-Sperre",backdrop:"Eigener Hintergrund",backdrop_color:"Farbe",backdrop_image:"Bild (/local/\u2026 oder https://\u2026)",backdrop_dim:"Abdunkeln",backdrop_hint:"Statt des Himmels des Looks steht das Haus vor einer eigenen Farbe oder einem Bild. Ein Bild in /config/www ist unter /local/\u2026 erreichbar.",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",meter_parent:"H\xE4ngt an Z\xE4hler",meter_parent_none:"keinem (Hauptz\xE4hler)",meter_main:"Hauptz\xE4hler",meter_unmetered:"{w} ungemessen",meter_device_hint:"Steht das Ger\xE4t hinter einem Zwischenz\xE4hler (z. B. Balkonkraftwerk in einer Wohnung), z\xE4hlt seine Leistung zu dieser Wohnung. Der Zwischenz\xE4hler muss daf\xFCr in beide Richtungen messen (\u2212 = R\xFCckspeisung); z\xE4hlt er nur Bezug, f\xE4llt der Verbrauch der Wohnung bei \xDCberschuss zu hoch aus.",meter_sub_power:"Leistung des Zweigs (W, + = Bezug, \u2212 = R\xFCckspeisung)",meter_floors:"Versorgt die Etagen",meter_sub_hint:"Ein Zwischenz\xE4hler misst seinen Zweig, z. B. eine Wohnung. Ger\xE4te auf den angehakten Etagen h\xE4ngen in 3D an ihm statt am Hauptz\xE4hler; was der Hauptz\xE4hler dar\xFCber hinaus z\xE4hlt, steht als \u201EAllgemein (Rest)\u201C in der Bilanz.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_tap:"Antippen des M\xF6bels",furn_tap_default:"Wie \xFCblich",furn_tap_hint:"Eine eigene Aktion wie bei den eigenen Kn\xF6pfen des Sternmen\xFCs, z. B. ein browser_mod-Popup mit deiner Karte.",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",card_tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",card_tap_in_room_hint:"In der Haus- und Stockwerksansicht \xF6ffnet ein Antippen das Stockwerk oder den Raum, auch auf einem Ger\xE4t oder seinem Symbol. Im ge\xF6ffneten Raum schaltet es das Ger\xE4t. Langes Dr\xFCcken \xF6ffnet immer sein Men\xFC oder seine Details.",card_markers_outside:"Symbole au\xDFerhalb des ge\xF6ffneten Raums w\xE4hlen",card_markers_outside_hint:"Im Haus, auf dem Stockwerk und in den anderen R\xE4umen nur die angehakten Arten; im ge\xF6ffneten Raum alle wie oben eingestellt. \u201EImmer\u201C und \u201ENie\u201C am Ger\xE4t gehen vor.",marker_kind_light:"Lichter",marker_kind_cover:"Rolll\xE4den",marker_kind_climate:"Heizung",marker_kind_media:"Medien",marker_kind_switch:"Schalter",marker_kind_fan:"Ventilatoren",marker_kind_lock:"Schl\xF6sser",marker_kind_binary:"Kontakte und Melder",marker_kind_sensor:"Sensoren",marker_kind_tap:"M\xF6bel mit Aktion",marker_kind_other:"Sonstige",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_rest:"Allgemein (Rest)",energy_advanced:"Erweiterter Energiemodus",energy_advanced_on:"Zwischenz\xE4hler nutzen",energy_show_unmetered:"Ungemessenen Verbrauch am Zwischenz\xE4hler zeigen",energy_show_unmetered_hint:"Das Schild eines Zwischenz\xE4hlers zeigt dann den Verbrauch seiner Etagen und wie viel davon kein platziertes Ger\xE4t misst, z. B. \u201E500 W \xB7 450 W ungemessen\u201C. Sonst zeigt es den Z\xE4hlerwert.",energy_advanced_hint:"F\xFCr Zwischenz\xE4hler, z. B. je Wohnung hinter einem Hauptz\xE4hler: Ein Stromz\xE4hler kann dann an einem anderen h\xE4ngen und eigene Etagen versorgen. Aus = der erste Z\xE4hler ist der Netzanschluss, weitere sind Verbraucher.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Di={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",walls_slope:"Sloped",walls_slope_hint:"Walls cut on a slope: half height in front, full height at the back \u2013 like a doll's house, turns with the camera",walls_solid:"Solid",walls_solid_hint:"Solid walls in their colours instead of glass (colours: editor \u2192 settings, per room in the room)",wall_paint_outside:"Wall colour outside",wall_paint_inside:"Wall colour inside",wall_paint_room:"Wall colour inside (this room)",wall_paint_hint:"Used in the 3D view \u201CSolid\u201D.",wall_paint_default:"Default",card_solid_walls:"Solid walls (in their colours)",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",lock_confirm_unlock:"Really unlock {name}?",gang_switch_one:"Switches",furn_cover_entity:"Moves with",furn_cover_hint:"The curtain, screen, awning or gate follows this cover entity (blind, curtain, awning, gate) and travels with it. A tap opens its menu (up, stop, down).",gang_switch:"Button {n} switches",gang_socket_one:"Socket powered by",gang_socket:"Socket {n} powered by",gang_switch_hint:"A button glows while its light is on (in its colour). A tap switches it; with several buttons a small menu asks which. The same entity may sit on several switches.",gang_socket_hint:"A socket glows green while its switch is on \u2013 brighter the more it draws. A tap switches it; with several, a small menu asks which.",lock_confirm_lock:"Lock {name}?",opening_lock:"Smart lock",opening_lock_hint:"A tap on the door locks or unlocks it (always asking first). While it is unlocked, its edge glows.",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",units:"Show lengths in",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:"How lengths and areas appear in the plan, the forms and the wall view. Inputs stay in metres.",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",side_failed:"This form could not be shown ({error}). The plan stays usable. Please report the text in a GitHub issue.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',ambilight:"Glow behind the TV (%)",ambilight_hint:"How strongly it glows behind the TV while it plays. 0 switches it off (for example if you have LED strips on the TV), 100 is the usual strength.",glow_scale:"Glow in 3D (%)",light_effects:"Effect animations in 3D",light_effects_hint:"Map exact HA effect names only. Unmapped effects keep the static HA colour. Changes nothing in Home Assistant.",light_effects_enabled:"Allow animations for this lamp",light_effect_unmapped:"Unmapped (static)",light_effect_add:"Add exact effect name",light_effect_name_limit:"The exact effect name must contain 1 to 255 characters. It will not be shortened.",light_effect_count_limit:"At most 100 mappings. Remove an existing entry first.",light_effect_exists:"This effect name is already mapped. Its existing mapping is preserved.",light_animation_none:"Static",light_animation_rainbow:"Rainbow (replaces colour)",light_animation_pulse:"Pulse (intensity)",light_animation_flicker:"Flicker (intensity)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",panel_fold:"Fold away (the room stays in view)",panel_unfold:"Open again",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",card_weather_density:"Amount of rain and snow",card_weather_density_hint:"Fewer drops and flakes than the weather reports; clouds, fog and lightning stay",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",rain_sensor:"Rain sensor (own weather station)",outage_sensor:"Power outage sensor",outage_hint:'A binary sensor of class power that is off, another binary sensor that is on, a state like "off_grid" or "backup", or a voltage below 50 V raise a warning for the whole house.',opening_rain_warning:"Warn when it rains",opening_light_well:"Light well in front",sill_boards:"Sill and board",sill_boards_auto:"Automatic",sill_boards_none:"None",sill_boards_inside:"Inside only",sill_boards_outside:"Outside only",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",import_other_hint:"From Sweet Home 3D: import the .sh3d file here. Floors, rooms, doors, windows and free walls come over, furniture does not.",import_sh3d_found:"Sweet Home 3D: {floors} floors, {rooms} rooms, {openings} doors and windows, {walls} free walls ({furniture} pieces of furniture are not taken over).",import_error_sh3d:"This is not a Sweet Home 3D file that can be read (it needs Sweet Home 3D 5.3 or newer).",import_error_sh3d_empty:"The Sweet Home 3D file has no rooms or walls.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_buttons:"Room buttons",card_room_buttons_hint:"A row with one button per room at the top of the card \u2013 tap one to open the room, like tapping it in the model",card_room_panel_hint:"The room's lights and blinds in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",care_bin_today:"Collected today",care_bin_tomorrow:"Collected tomorrow",care_bin_days:"In {n} days",care_mail_yes:"Post is in",care_mail_no:"Empty",care_plant_thirsty:"Thirsty",care_plant_ok:"Well watered",care_time_left:"{time} left",care_entity_bin:"Pickup date (sensor)",care_entity_mail:"Post sensor",care_entity_plant:"Soil moisture (sensor)",care_thirsty_below:"Thirsty below (%)",care_hint_bin:'A sensor with the next pickup: days, a date, "today"/"tomorrow" or the Waste Collection Schedule integration. The bin glows the day before and on the day.',care_hint_mail:"A sensor that reports post in the box (a contact on the flap, say). The mailbox glows then.",care_hint_plant:"A moisture sensor in the soil. Below the threshold the plant glows and says it is thirsty.",lib_cat_lights:"Lights",lib_cat_seating:"Seating",lib_cat_tables:"Tables",lib_cat_storage:"Cabinets & shelves",lib_cat_beds:"Beds",lib_cat_kitchen:"Kitchen",lib_cat_appliances:"Appliances",lib_cat_bath:"Bathroom",lib_cat_media:"TV & audio",lib_cat_office:"Office",lib_cat_tech:"Tech",lib_cat_climate:"Heating & climate",lib_cat_energy:"Energy",lib_cat_garden:"Garden & terrace",lib_cat_plants:"Plants",lib_cat_kids:"Kids",lib_cat_fitness:"Fitness",lib_cat_pets:"Pets",lib_cat_workshop:"Workshop & garage",lib_cat_vehicles:"Vehicles",lib_cat_building:"Stairs & building parts",lib_cat_decor:"Decoration & more",lib_favourites:"Favourites",lib_recent:"Recently used",lib_for_room:"Fits {room}",lib_all_rooms:"Show all rooms",lib_linkable:"linkable",lib_lit:"lit",lib_outdoor:"outdoor",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_sizes:"Sizes",feature_name_energy:"Energy flow",ext_tab:"Extensions",ext_title:"Extensions",models:"Your own 3D models",models_hint:"For some vehicles NextFloor can show a real 3D model if you own one. Choose the file (.glb) here: NextFloor turns it the right way round, makes it lighter, marks the paint and stores it on your Home Assistant. Without a model the vehicle looks as it did before.",models_licence:"The files are yours and stay on your Home Assistant. NextFloor ships no models; please make sure your model's licence lets you use it in your own installation.",model_add:"Add a model \u2026",model_replace:"Replace the model \u2026",model_remove:"Remove",model_present:"in place",model_missing:"none yet",model_remove_confirm:"Delete the model \u201C{id}\u201D from Home Assistant?",model_removed:"Model \u201C{id}\u201D deleted.",model_uploaded:"Model \u201C{id}\u201D stored ({size}). Reload the panel to see it.",model_upload:"Store on Home Assistant",model_info:"{triangles} triangles, {size} m",model_front:"Front",model_front_hint:"Turn the model until its front faces the viewer (towards the lower left in the picture).",model_paint:"Paint (the colour you pick in the editor)",model_paint_preview:"Colour in the preview",model_detail:"Level of detail",model_detail_light:"Light (tablet)",model_detail_normal:"Normal",model_detail_fine:"Fine",model_result:"Result: {triangles} triangles, {size}",model_error_not_glb:"This is not a .glb file (binary glTF). Export the model as \u201CglTF binary\u201D.",model_error_compressed:"The file is compressed (Draco, Meshopt or KTX). Export it without compression.",model_error_empty:"The file contains nothing three-dimensional.",model_error_unreadable:"The file cannot be read: {detail}",model_error_too_large:"The file is larger than {max}. Choose a lower level of detail.",model_upload_forbidden:"Only administrators may upload models.",model_upload_too_large:"Home Assistant accepts no files over {max}. Choose a lower level of detail.",model_upload_not_glb:"Home Assistant refused the file (not a binary glTF).",model_upload_bad_id:"The model id is not valid.",model_upload_other:"Uploading did not work: {detail}",ext_intro:"Import your own furniture packs, upload your own 3D models and add plugins here.",plugin:"plugin",plugins_title:"Plugins",plugins_intro:"Plugins add your own light animations, devices and cards in the room panel. Enter a plugin's address (a .js file in /config/www, i.e. /local/\u2026, from HACS /hacsfiles/\u2026, or https://\u2026).",plugins_docs:"How to write a plugin",plugins_warning:"Plugins run with the same rights as NextFloor in your browser. Only use plugins from sources you trust.",plugins_off:"off",plugins_error:"error",plugins_loading:"loading \u2026",plugins_nothing_registered:"loaded, but registered nothing",plugins_loaded:"active",plugins_reload_hint:"Takes effect after reloading the page",plugins_remove:"Remove",plugins_none:"No plugins yet.",plugins_from_dashboard:"Registered by a dashboard resource",plugins_add:"Add",plugins_url_invalid:"Enter a .js address under /local/\u2026, /hacsfiles/\u2026 or https://\u2026.",plugins_exists:"This plugin is already in the list.",plugins_limit:"At most 20 plugins.",packs_title:"Furniture packs",packs_intro:"Import your own furniture as a pack (JSON): as a file or pasted below. {n} packs come with NextFloor and are always there.",packs_docs:"Pack format",packs_none:"No packs of your own yet.",pack_import:"Import pack files \u2026",pack_paste:"Import JSON",pack_paste_empty:"Paste a pack's JSON first.",pack_paste_not_json:"This is not valid JSON: {detail}",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_error_not_a_pack:'This is not a furniture pack ("format": "nfpack" is missing).',pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The pack is too large (1 MB at most).",pack_error_needs_update:'This pack needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then import again.',pack_error_other:"Import failed: {detail}",store_open:"Open plugin store",store_close:"Close plugin store",store_intro:"Reviewed plugins from the community. Each one is looked at before it is added and does not change afterwards.",store_submit:"Submit your own plugin",store_empty:"No plugins in the store yet.",store_failed:"The store could not be loaded ({error}).",store_install:"Install",store_installed:"installed",store_update:"Update",store_confirm:`Install \u201C{name}\u201D by {author}?

A plugin runs with the same rights as NextFloor in your browser. The file has been reviewed and its content is fixed:
{url}`,manual:"Manual",manual_more:"Learn more",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",live_autarky:"self-sufficient",live_day_hint:"The last 24 hours: solar (area) and consumption (line)",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_missing_item:"Furniture of a removed pack",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_corners_hint:"Corners: a + on an edge adds a corner, dragging shapes the area, \xD7 removes a corner.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of surrounding areas",outdoor_cut_hint:"Every area that contains this one whole gets a hole here \u2013 a pool in the terrace, a pond or a wild patch in the lawn. The drawing order does not matter. A pool cuts itself out on its own.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",map_on:"Show a real map under the plan",map_lat:"Latitude",map_lon:"Longitude",map_use_ha:"Use Home Assistant's location",map_opacity:"Visibility (%)",map_zoom:"Detail level",map_zoom_coarse:"coarse",map_zoom_fine:"fine",map_move:"Move the map under the plan",map_step:"Step",map_url:"Own tile address (empty = OpenStreetMap)",map_hint:"Your browser loads the map tiles straight from the map server (OpenStreetMap by default, please mind their usage policy); nothing is loaded while the map is off. The plan lies on the map as the compass says \u2013 turn the compass or move the map until the house fits.",compass_title:"Compass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Swap north \u2194 south",compass_swap_hint:"Turns the compass by 180\xB0. The drawing, roof faces and solar fields stay as they are.",compass_hint:"If the compass does not match reality, turn it here \u2013 nothing has to be redrawn. Sunlight, wind and the compass directions of roof faces follow it.",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_end_start:"End at the ridge start",roof_end_end:"End at the ridge end",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan, a + on an edge adds a corner, \xD7 removes one. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_slope:"Sloping",wall_slope_start:"Height at the start (m)",wall_slope_end:"Height at the end (m)",wall_slope_hint:"Sloping wall: the top runs straight from the height at the start of the wall (the corner with the lower number) to the height at its end. Both may be above the floor height, for example for a lean-to room with high clerestory windows.",wall_slope_off:"Back to a level wall",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_view:"Wall view",wall_view_hint:"The wall from the front: drag its doors, windows and furniture or type their distance.",wall_view_prev:"Previous wall",wall_view_next:"Next wall",wall_view_left:"From the left (m)",wall_view_height:"Above the floor (m)",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Extensions \u2192 Furniture packs).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_ceiling_fan:"Ceiling fan",furn_fan_entity:"Fan",fan_hint:"The light is the fan's light kit (leave it empty if it has none). The fan is found in the room or chosen here: in 3D the blades turn as fast as it runs, its icon switches it, swiping up/down changes the speed, a long press opens the quick menu. The height is how far it hangs from the ceiling (more = a longer downrod).",room_ceiling:"Ceiling height",room_ceiling_hint:"For a room lower than the floor: ceiling lights, fans, LED strips and ceiling devices hang from here, and the room's walls are this high.",ceiling_here:"Ceiling here",ceiling_here_hint:"Height of the ceiling right at this spot, e.g. in a sloping ceiling. Empty = the room's ceiling.",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto",clock:"Clock",clock_none:"None",clock_top_left:"Top left",clock_top_right:"Top right",clock_bottom_left:"Bottom left",clock_bottom_right:"Bottom right",lock3d_on:"Lock 3D (no turning, zooming or panning; taps still work)",lock3d_off:"Unlock 3D",walk:"Walk through the house",travel:"Time travel: replay the last 24 hours or 7 days",travel_play:"Play",travel_pause:"Pause",travel_loading:"Loading history \u2026",travel_failed:"The history could not be loaded.",travel_speed:"Speed",travel_speed_min:"1 min/s",travel_speed_10min:"10 min/s",travel_speed_hour:"1 h/s",travel_days:"days",travel_live:"Live",card_travel_button:"Button for time travel",walk_stop:"Stop walking",walk_hint:"Drag: look around \xB7 W A S D / arrows or stick: walk \xB7 wheel: step",card_walk_button:"Button to walk through",card_lock_button:"Button for the 3D lock",backdrop:"Own background",backdrop_color:"Colour",backdrop_image:"Picture (/local/\u2026 or https://\u2026)",backdrop_dim:"Dim",backdrop_hint:"Instead of the look's sky the house stands in front of a colour or a picture of your own. A picture in /config/www is reachable at /local/\u2026.",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",meter_parent:"Hangs off meter",meter_parent_none:"none (main meter)",meter_main:"Main meter",meter_unmetered:"{w} unmetered",meter_device_hint:"If the device sits behind a sub-meter (e.g. a balcony plant in a flat), its power counts towards that flat. The sub-meter has to measure both ways for this (\u2212 = feeding back); if it only counts import, the flat's consumption comes out too high while there is a surplus.",meter_sub_power:"Power of the branch (W, + = drawn, \u2212 = fed back)",meter_floors:"Feeds the floors",meter_sub_hint:"A sub-meter measures its branch, e.g. a flat. Devices on the ticked floors hang off it in 3D instead of the main meter; what the main meter counts beyond that shows as \u201CCommon (rest)\u201D in the balance.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_tap:"Tapping the item",furn_tap_default:"As usual",furn_tap_hint:"An own action like the star menu's own buttons, e.g. a browser_mod popup with your card.",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",card_tap_in_room:"Switch devices only in the opened room",card_tap_in_room_hint:"In the house and floor views a tap opens the floor or room, even on a device or its marker. In the opened room it switches the device. A long press always opens its menu or details.",card_markers_outside:"Choose the markers outside the opened room",card_markers_outside_hint:`In the house, on the floor and in the other rooms only the ticked kinds; in the opened room all, as set above. A device's own "always" and "never" come first.`,marker_kind_light:"Lights",marker_kind_cover:"Blinds",marker_kind_climate:"Heating",marker_kind_media:"Media",marker_kind_switch:"Switches",marker_kind_fan:"Fans",marker_kind_lock:"Locks",marker_kind_binary:"Contacts and detectors",marker_kind_sensor:"Sensors",marker_kind_tap:"Furniture with an action",marker_kind_other:"Other",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_rest:"Common (rest)",energy_advanced:"Advanced energy mode",energy_advanced_on:"Use sub-meters",energy_show_unmetered:"Show unmetered use at sub-meters",energy_show_unmetered_hint:"A sub-meter's label then shows what its floors use and how much of it no placed device measures, e.g. \u201C500 W \xB7 450 W unmetered\u201D. Otherwise it shows the meter's reading.",energy_advanced_hint:"For sub-meters, e.g. one per flat behind a main meter: a meter can then hang off another one and feed its own floors. Off = the first meter is the grid connection, further ones are consumers.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Hi=()=>typeof k=="object"&&k||{},Ql=globalThis,cn=Ql.__nextfloorTexts??=new Map;function Ii(n){let e=n.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in Hi()?e:void 0}function Ci(n){let e=Ii(n),t=e===void 0?void 0:cn.get(e);return t instanceof Promise?void 0:t}function un(n,e){let t=Ii(n?.language??navigator.language);if(t===void 0)return!1;let r=cn.get(t);return r===void 0&&(r=fetch(new URL(`./lang/${t}.json?v=${Hi()[t]}`,import.meta.url)).then(o=>o.ok?o.json():{}).catch(()=>({})).then(o=>{cn.set(t,o&&typeof o=="object"?o:{})}),cn.set(t,r)),r instanceof Promise?(r.then(()=>e.requestUpdate()),!0):!1}function Oi(n,e){return Ci(n)?.[e]}function E(n,e,t={}){let r=n?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:Ci(r)?.[e])??(o?Pi:Di)[e]??Di[e]??Pi[e]??e;for(let[s,a]of Object.entries(t))i=i.replace(`{${s}}`,String(a));return i}function W(n,e,t=2){return e.toLocaleString(n?.language??void 0,{maximumFractionDigits:t})}var Ni={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},dn=n=>Ni[n];function me(n){return`<ha-icon icon="mdi:${n.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function et(n){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ni[n]}"/></svg>`}function Li(n,e,t){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:t;return r?n.states[r]:void 0}function hn(n,e){if(n.animations_enabled===!1||e?.state!=="on")return;let t=e.attributes.effect;if(typeof t!="string"||!n.effect_animations||!Object.prototype.hasOwnProperty.call(n.effect_animations,t))return;let r=n.effect_animations[t];return r==="rainbow"||r==="pulse"||r==="flicker"||Fo(r)?r:void 0}var Me=(n,e)=>E(n,e),Jl=(n,e)=>Me(n,e?"state_on":"state_off");function pn(n,e){let t=`state_${e}`,r=E(n,t);return r===t?e:r}var Xl=new Set(["door","window","opening","garage_door"]),ec=new Set(["playing","paused","on","idle"]);function tc(n,e){if(e.state!=="on")return Me(n,"state_off");let t=e.attributes.brightness;return typeof t=="number"?`${Math.round(t/255*100)} %`:Me(n,"state_on")}function nc(n,e){let t=e.attributes.current_position,r=e.state==="opening"||e.state==="closing";return typeof t=="number"&&!r?`${t} %`:pn(n,e.state)}function rc(n,e){let t=e.attributes.current_temperature,r=typeof t=="number"?`${W(n,t,1)} ${n?ie(n):"\xB0C"}`:null;return e.state==="off"?r?`${r} \xB7 ${Me(n,"state_off")}`:Me(n,"state_off"):r??pn(n,e.state)}function oc(n,e){let t=[e.attributes.app_name,e.attributes.media_title,e.attributes.source].find(r=>typeof r=="string"&&r!=="");return ec.has(e.state)&&t?t:pn(n,e.state)}function ic(n,e){let t=e.state==="on";return Xl.has(String(e.attributes.device_class))?Me(n,t?"state_open":"state_closed"):Me(n,t?"state_detected":"state_clear")}function sc(n,e){let t=Number(e.state);if(!Number.isFinite(t))return e.state;let r=n?.entities?.[e.entity_id]?.display_precision??1,o=e.attributes.unit_of_measurement;return`${W(n,t,r)}${typeof o=="string"&&o?` ${o}`:""}`}function Q(n,e){if(!e||D(e))return Me(n,"state_unavailable");switch(A(e.entity_id)){case"light":return tc(n,e);case"switch":case"fan":return Jl(n,e.state==="on");case"cover":return nc(n,e);case"climate":return rc(n,e);case"media":return oc(n,e);case"lock":return pn(n,e.state);case"binary":return ic(n,e);case"sensor":return sc(n,e);default:return""}}var ac=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&I([e,t],r.points))??null;function Sr(n,e){return!n||e==null||e===1?n:{...n,level:Math.min(1.5,Math.max(.02,n.level*e))}}function lc(n,e,t){let r=n.states[t.entity_id],o=A(t.entity_id)??vt(t.entity_id,r);if(!o||!r)return null;let i=ac(e,t.x,t.z),s=i?.area_id?n.areas?.[i.area_id]?.name:void 0,a={id:t.entity_id,floorId:e.id,roomId:i?.id??null,x:t.x,z:t.z,y:t.y??qe(o,ne(e,t.x,t.z),t.mount??null),lamp:o==="light"?t.mount??"ceiling":null,ceiling:ne(e,t.x,t.z),rotation:t.rotation??0,icon:t.icon?me(t.icon):et(o),name:t.name||O(n,t.entity_id,s),ownName:t.name||void 0,showName:!!t.show_name,text:Q(n,r),active:ee(r),unavailable:D(r),glow:o==="light"?Sr(ke(r),t.glow_scale):null,effect:o==="light"?hn(t,r):void 0,show:t.marker??void 0,fixed:!!t.locked};return a.wedge=Ho({hass:n,entityId:t.entity_id,state:r},{floorId:e.id,roomId:a.roomId,x:a.x,z:a.z,y:a.y,rotation:a.rotation??0},t.plugin??void 0),Mr(n,a,r,!!t.icon)}function Mr(n,e,t,r){let o=To({hass:n,entityId:e.id,state:t});if(!o)return e;let i=o.icon&&!r?o.icon.trimStart().startsWith("<svg")?o.icon:me(o.icon):e.icon;return{...e,icon:i,text:o.text??e.text,active:o.active??e.active}}function Wi(n,e){return e.floors.flatMap(t=>t.placements.map(r=>lc(n,t,r)).filter(r=>r!==null))}var Bi=n=>n.floors.flatMap(e=>e.placements.map(t=>t.entity_id));function ge(n,e){n.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Vi(n,e){return n.callService(e.split(".")[0],"toggle",{entity_id:e})}var se=j`
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
`,$e=j`
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
  .nf-field select {
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
  .nf-field select:focus {
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
`;function fn(n){return n?.themes?.darkMode===!1?"light":"dark"}var cc=4,uc=8,dc=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],tt=n=>p`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${dn(n)} />
  </svg>`,mn={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},$r=n=>p`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${n} /></svg>`,Er=class extends Z{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_folded:{state:!0}};memo=null;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._folded=!1}willUpdate(e){let t=e.get("room");e.has("room")&&t?.id!==this.room?.id&&(this._folded=!1)}updated(e){e.has("_folded")&&this.toggleAttribute("folded",this._folded)}t(e,t){return E(this.hass,e,t)}call(e,t,r){this.hass.callService(e,t,r)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return O(this.hass,e,this.areaName)}nameButton(e){return p`<button class="nf-rp-name" title=${this.t("details")} @click=${()=>ge(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,r){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||r()};return p`<button
      class="nf-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${D(e)}
      @click=${o}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return m;let t=L(this.hass,e.area_id),r=this.memo,{shown:o,more:i}=r&&r.entities===this.hass.entities&&r.floor===this.floor&&r.room===e?r:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?yi(this.hass,this.floor,e):{shown:t,more:[]}},s=gr(this.hass,i).map(_=>_.primary),a=s.length,l=this._showAll?[...o,...s]:o,c=_=>l.filter($=>_.includes(A($))).map($=>this.hass.states[$]),d=c(["light"]),u=c(["cover"]),h=c(["climate"]),f=c(["media"]),x=c(["switch","fan","lock"]),g=c(["sensor","binary"]),y=c(["scene","script"]),v=this.facts(h),w=d.filter(_=>_.state==="on");return p`<section class="nf-rp" aria-label=${e.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${v.length?p`<p class="nf-rp-facts">${v.join(" \xB7 ")}</p>`:m}
        </div>
        <button class="nf-rp-close" aria-label=${this.t(this._folded?"panel_unfold":"panel_fold")} title=${this.t(this._folded?"panel_unfold":"panel_fold")} aria-expanded=${this._folded?"false":"true"} @click=${()=>this._folded=!this._folded}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${this._folded?q`<path d="M6 14l6-6 6 6" />`:q`<path d="M6 12h12" />`}</svg>
        </button>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body" ?hidden=${this._folded}>
        ${e.area_id?l.length?m:p`<p class="nf-rp-note">${this.t("panel_empty")}</p>`:p`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(_=>this.lightRow(_)),p`${w.length<d.length?p`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(_=>!D(_)).map(_=>_.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:m}${w.length?p`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:w.map(_=>_.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:m}`):m}
        ${u.length?this.section("panel_covers",u.map(_=>this.coverRow(_)),u.length>1&&en(u,this.confirmEntities).length?p`<button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:en(u,this.confirmEntities)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:en(u,this.confirmEntities)})}>
                      ${this.t("panel_all_close")}
                    </button>`:m):m}
        ${h.length?this.section("panel_climate",h.map(_=>this.climateRow(_))):m}
        ${f.length?this.section("panel_media",f.map(_=>this.mediaRow(_))):m}
        ${x.length?this.section("panel_switches",x.map(_=>this.switchRow(_))):m}
        ${g.length?this.section("panel_sensors",g.map(_=>this.sensorRow(_))):m}
        ${y.length?this.section("panel_scenes",[p`<div class="nf-rp-scenes">
                  ${y.map(_=>p`<button
                      class="nf-btn"
                      ?disabled=${D(_)}
                      @click=${()=>this.call(A(_.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:_.entity_id})}
                    >
                      ${this.name(_.entity_id)}
                    </button>`)}
                </div>`]):m}
        ${this.pluginSections(e,l)}
        ${a?p`<button class="nf-btn nf-rp-small nf-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:m}
      </div>
    </section>`}facts(e){let t=[],r=this.room,o=(l,c)=>{let d=Se(this.hass,this.floor,r,l);if(d===null)return null;if(l==="temperature")return`${W(this.hass,Ze(this.hass,d),1)} ${ie(this.hass)}`;let u=_r(this.hass,this.floor,r,l)[0],h=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${W(this.hass,d,1)} ${h}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?t.push(s):i&&r.climate?.temperature!=="none"&&t.push(`${W(this.hass,i.attributes.current_temperature,1)} ${ie(this.hass)}`);let a=o("humidity","%");return a&&t.push(a),t}pluginSections(e,t){return Co({hass:this.hass,room:{id:e.id,name:e.name,area_id:e.area_id??null},entities:t}).map(o=>p`<div class="nf-rp-sec nf-rp-plugin" data-plugin=${o.key}>
        <div class="nf-rp-sec-head"><h3>${o.title}</h3></div>
        ${typeof o.content=="string"?p`<p class="nf-rp-note">${o.content}</p>`:o.content}
      </div>`)}section(e,t,r=m){return p`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(e)}</h3>${r}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,r=e.state==="on",o=t.supported_color_modes??[],i=o.some(h=>h!=="onoff"),s=o.includes("color_temp"),a=o.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${r?"nf-rp-on":""}">${tt("light")}</span>
      ${this.nameButton(u)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,()=>this.call("light","toggle",{entity_id:u}))}
      ${r&&i?p`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(h.target.value)})}
          /></label>`:m}
      ${r&&s?p`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:m}
      ${r&&a?p`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${dc.map(h=>p`<button
                class="nf-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:h})}
              ></button>`)}
          </div>`:m}
    </div>`}coverRow(e){let t=e.attributes,r=t.supported_features??0,o=e.entity_id,i=D(e)&&!xt(e);return p`<div class="nf-rp-row">
      <span class="nf-rp-icon">${tt("cover")}</span>
      ${this.nameButton(o)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${r&uc?p`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:m}
        <button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${r&cc&&typeof t.current_position=="number"?p`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:m}
      ${r&128&&typeof t.current_tilt_position=="number"?p`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:o,tilt_position:Number(s.target.value)})}
          /></label>`:r&48?p`<div class="nf-rp-buttons">
              ${r&16?p`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_open")}</button>`:m}
              ${r&32?p`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_close")}</button>`:m}
            </div>`:m}
    </div>`}climateRow(e){let t=e.attributes,r=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:r,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t.hvac_action==="heating"?"nf-rp-on":""}">${tt("climate")}</span>
      ${this.nameButton(r)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${o!==null?p`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${W(this.hass,o,1)} ${ie(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+i)}>+</button>
          </div>`:m}
      ${l.length>1?p`<div class="nf-rp-chips">
            ${l.map(d=>p`<button
                class="nf-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:r,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:m}
    </div>`}stateOf(e,t=Q(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let r=A(e.entity_id);return e.state==="unknown"&&r!=="sensor"&&r!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,r=this.t(t);return r===t?e:r}mediaRow(e){let t=e.attributes,r=e.entity_id,o=D(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${e.state==="playing"?"nf-rp-on":""}">${tt("media")}</span>
      ${this.nameButton(r)}
      <span class="nf-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?p`<p class="nf-rp-media nf-rp-wide">${i}</p>`:m}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:r})}>
          ${$r(mn.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${D(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:r})}>
          ${$r(e.state==="playing"?mn.pause:mn.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:r})}>
          ${$r(mn.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?p`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:r,volume_level:Number(s.target.value)/100})}
          /></label>`:m}
    </div>`}switchRow(e){let t=e.entity_id,r=A(t),o=t.slice(0,t.indexOf(".")),i=r==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>r==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${i?"nf-rp-on":""}">${tt(r)}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}sensorRow(e){let t=A(e.entity_id),r=t==="binary"&&e.state==="on";return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${r?"nf-rp-on":""}">${tt(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[se,$e,j`
      :host {
        display: block;
      }
      .nf-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 18px;
        box-shadow: var(--nf-shadow);
        overflow: hidden;
      }
      .nf-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--nf-title-font);
        letter-spacing: -0.01em;
      }
      .nf-rp-facts {
        margin: 2px 0 0;
        color: var(--nf-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .nf-rp-close {
          width: 40px;
          height: 40px;
        }
        .nf-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .nf-rp-small {
          min-height: 36px;
        }
      }
      .nf-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: color-mix(in srgb, var(--nf-text) 6%, transparent);
        color: var(--nf-text);
        cursor: pointer;
      }
      .nf-rp-body[hidden] {
        display: none;
      }
      .nf-rp-head:has(+ .nf-rp-body[hidden]) {
        border-bottom: none;
      }
      .nf-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .nf-rp-note {
        color: var(--nf-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .nf-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--nf-muted);
      }
      .nf-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-rp-row:last-child {
        border-bottom: none;
      }
      .nf-rp-row > :nth-child(n + 5),
      .nf-rp-row > .nf-rp-wide {
        grid-column: 2 / -1;
      }
      .nf-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--nf-muted);
        background: color-mix(in srgb, var(--nf-soft) 12%, transparent);
      }
      .nf-rp-on {
        color: #2a1a00;
        background: var(--nf-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .nf-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--nf-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .nf-rp-state {
        font-size: 12.5px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-rp-row > .nf-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .nf-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: color-mix(in srgb, var(--nf-text) 10%, transparent);
        cursor: pointer;
      }
      .nf-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .nf-switch[aria-checked="true"] {
        background: var(--nf-warm);
      }
      .nf-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .nf-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .nf-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-rp-slider input {
        width: 100%;
        accent-color: var(--nf-accent);
      }
      .nf-rp-ct input {
        accent-color: var(--nf-warm);
      }
      .nf-rp-swatches,
      .nf-rp-buttons,
      .nf-rp-chips,
      .nf-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nf-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid color-mix(in srgb, var(--nf-text) 20%, transparent);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .nf-rp-more {
        justify-self: start;
      }
      .nf-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .nf-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .nf-rp-stepper small {
        color: var(--nf-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .nf-rp-stepper .nf-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .nf-rp-chips .nf-chip {
        box-shadow: none;
        border: 1px solid var(--nf-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .nf-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--nf-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("nf-room-panel")||customElements.define("nf-room-panel",Er);var hc=/^(light|switch|cover|binary_sensor|lock|media_player|vacuum|fan|climate|lawn_mower|input_boolean|person|device_tracker|alarm_control_panel)\./;var Ki=n=>[...new Set([...n].filter(e=>hc.test(e)))].slice(0,200);function pc(n){let e=new Map;for(let[t,r]of Object.entries(n)){let o={},i=[];for(let s of r)s.a&&(o=s.a),i.push({t:Math.round((s.lu??s.lc??0)*1e3),state:s.s,attributes:o});i.sort((s,a)=>s.t-a.t),e.set(t,i)}return e}async function Ar(n,e,t,r,o=!1){if(e.length===0)return new Map;let i=await n.callWS({type:"history/history_during_period",start_time:new Date(t).toISOString(),end_time:new Date(r).toISOString(),entity_ids:e,include_start_time_state:!0,significant_changes_only:!1,minimal_response:o,no_attributes:o});return pc(i)}function fc(n,e){let[t,r]=[0,n.length-1],o=null;for(;t<=r;){let i=t+r>>1;n[i].t<=e?(o=n[i],t=i+1):r=i-1}return o}function gn(n,e,t){let r={...n.states};for(let[o,i]of e){let s=fc(i,t);if(!s)continue;let a=n.states[o];r[o]={...a??{entity_id:o},entity_id:o,state:s.state,attributes:{...a?.attributes??{},...s.attributes}}}return{...n,states:r}}function Gi(n,e,t,r=400){let o=[];for(let s of n.values())for(let a=1;a<s.length;a++)s[a].state!==s[a-1].state&&s[a].t>=e&&s[a].t<=t&&o.push(s[a].t);if(o.sort((s,a)=>s-a),o.length<=r)return o;let i=o.length/r;return Array.from({length:r},(s,a)=>o[Math.floor(a*i)])}function Ui(n,e){let t=new Set,r=new Proxy(n.states,{get(o,i){return typeof i=="string"&&t.add(i),o[i]}});return e({...n,states:r}),[...t].filter(o=>o.includes(".")&&o in n.states)}function ji(n,e,t,r,o,i=96){let s=[],a=[];for(let l=0;l<i;l++){let c=t+(r-t)*(l+1)/i,d=o(gn(n,e,c));s.push(d.solar),a.push(d.consumption)}return{solar:s,use:a}}function Rr(n,e,t,r){if(r<=0||n.length<2)return"";let o="",i=!1;return n.forEach((s,a)=>{if(s===null){i=!1;return}let l=a/(n.length-1)*e,c=t-Math.max(0,Math.min(r,s))/r*t;o+=`${i?"L":"M"}${l.toFixed(1)},${c.toFixed(1)}`,i=!0}),o}function qi(n){if(!n)return"";let e=Math.min(.8,Math.max(0,n.dim??.35)),t=n.image&&/^(https:\/\/|\/local\/|\/api\/)[^"'()\\\s]+$/.test(n.image)?n.image:null,r=n.color&&/^#[0-9a-f]{6}$/i.test(n.color)?n.color:null;return t?`;background:linear-gradient(rgba(0,0,0,${e}),rgba(0,0,0,${e})),center / cover no-repeat url("${t}")${r?` ${r}`:""}`:r?`;background:${r}`:""}var mc=[[/spotify/i,[30,215,96]],[/netflix/i,[229,9,20]],[/youtube/i,[255,0,51]],[/prime|amazon/i,[0,168,225]],[/disney/i,[17,60,207]],[/apple ?music|itunes/i,[250,45,72]],[/apple ?tv/i,[200,200,210]],[/plex/i,[229,160,13]],[/tidal/i,[0,255,255]],[/deezer/i,[162,56,255]],[/radio|tunein/i,[255,140,60]]],Zi=[34,211,238];function zr(n){return n?mc.find(([e])=>e.test(n))?.[1]??Zi:Zi}function Yi(n,e){let t=[],r=new Set;for(let o of e){if(!o.entity.startsWith("media_player.")||r.has(o.entity))continue;r.add(o.entity);let i=n.states[o.entity];if(!i)continue;let s=i.attributes,a=d=>typeof s[d]=="string"?s[d]:"",l=a("app_name")||a("source")||a("app_id")||null,c=typeof s.volume_level=="number"?s.volume_level:null;t.push({entity:o.entity,name:o.name,at:o.at,playing:i.state==="playing",title:a("media_title")||a("media_channel")||l||"",artist:a("media_artist")||a("media_album_name")||a("media_series_title"),picture:a("entity_picture")||null,volume:c,color:zr(l),app:l,group:Array.isArray(s.group_members)?s.group_members.filter(d=>typeof d=="string"&&d!==o.entity):[]})}return t}function Qi(n){let e=new Map(n.filter(o=>o.playing).map(o=>[o.entity,o])),t=[],r=new Set;for(let o of e.values())for(let i of o.group){let s=e.get(i),a=[o.entity,i].sort().join("|");s&&!r.has(a)&&(r.add(a),t.push([o,s]))}return t}var _n=n=>n&&n!=="none"?n:null,Ji=n=>Math.min(1,Math.max(0,n));function Xi(n,e){let t=new Map;for(let r of e.settings.roof?.windows??[]){let o=pe(n,{cover:_n(r.cover),contact:_n(r.contact),tilt:_n(r.tilt)},"window"),i=_n(r.window),s=i?n.states[i]:void 0,a=o.open;if(s&&!D(s)){let l=s.attributes.current_position;a=typeof l=="number"?Ji(l/100):s.state==="open"||s.state==="opening"?1:0}t.set(r.id,{open:a,tilt:o.tilt,cover:o.cover??0})}return t}function gc(n,e){let t=o=>Math.hypot(o.x-e.x,o.z-e.z);return n.placements.filter(o=>o.entity_id.startsWith("media_player.")&&t(o)<Math.max(2,e.w)).sort((o,i)=>t(o)-t(i))[0]?.entity_id??null}var Ee=(n,e)=>typeof n[e]=="string"?n[e]:"";function es(n,e,t){let r=[];for(let o of e.floors)for(let i of o.furniture){if(!an(i.type))continue;let s=t?.get(i.id)?.entity??null,a=s?.startsWith("media_player.")?s:gc(o,i),l=a?n.states[a]:void 0;if(!l||!["playing","paused"].includes(l.state))continue;let c=l.attributes,d=Ee(c,"app_name")||Ee(c,"source")||null;r.push({id:i.id,furnitureId:i.id,floorId:o.id,color:zr(d),title:Ee(c,"media_title")||Ee(c,"media_channel")||d||"",subtitle:Ee(c,"media_artist")||Ee(c,"media_series_title")||Ee(c,"media_album_name"),app:d,picture:Ee(c,"entity_picture")||null,playing:l.state==="playing",ambilight:i.ambilight??1})}return r}function ts(n){let e=n.states["sun.sun"]?.attributes;return typeof e?.elevation=="number"&&typeof e.azimuth=="number"?{elevation:e.elevation,azimuth:e.azimuth}:null}function ns(n,e){return(n===null?0:Ji((n+4)/16))*(1-.45*e)}function nt(n,e){return e&&n.states[e]?e:Object.keys(n.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var _c=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),bc=new Map([["smoke","smoke"],["gas","gas"],["carbon_monoxide","co"],["moisture","water"]]),rs=(n,e)=>{if(e.startsWith("binary_sensor."))return bc.get(String(n.states[e]?.attributes.device_class))};function os(n,e,t){let r=[];for(let s of e.floors)for(let a of s.rooms){let l=L(n,a.area_id).filter(c=>rs(n,c));l.length>0&&r.push({floorId:s.id,roomId:a.id,sensors:l})}let o=e.settings.rain_warning!==!1,i=e.settings.rain_sensor;return{rooms:r,alarms:Object.keys(n.states).filter(s=>s.startsWith("alarm_control_panel.")),weather:o?nt(n,t??e.settings.weather_entity):null,rain:o&&i&&i!=="none"?i:null,outage:e.settings.outage_sensor&&e.settings.outage_sensor!=="none"?e.settings.outage_sensor:null}}function is(n){let e=n.rooms.flatMap(t=>t.sensors).concat(n.alarms);for(let t of[n.weather,n.rain,n.outage])t&&e.push(t);return e}function vc(n,e){let t=[];for(let{floorId:r,roomId:o,sensors:i}of e.rooms)for(let s of i){let a=rs(n,s);a&&n.states[s]?.state==="on"&&t.push({kind:a,entity:s,roomId:o,floorId:r})}return t}var wc=(n,e)=>{let t=pe(n,e,"window");return Math.max(t.open,t.tilt,t.open2,t.tilt2)>=.5};function yc(n,e){if(e.rain){let r=n.states[e.rain];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let o=Number(r.state);return Number.isFinite(o)?o>0:r.state==="on"||/rain|regen|wet|nass/i.test(r.state)}let t=e.weather?n.states[e.weather]?.state:void 0;return!!t&&_c.has(t)}var xc=/^(off_grid|off-grid|outage|grid_down|grid_lost|islanding|island|backup|no_grid|stromausfall|netzausfall|inselbetrieb)$/i;function kc(n,e){let t=e?n.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return!1;if(e.startsWith("binary_sensor.")){let o=String(t.attributes.device_class??"");return o==="power"||o==="plug"?t.state==="off":t.state==="on"}let r=Number(t.state);return Number.isFinite(r)?t.attributes.unit_of_measurement==="V"&&r<50:xc.test(t.state.trim())}function Sc(n,e,t,r){if(!yc(n,t))return[];let o=[];for(let i of e.floors)for(let s of i.openings){let a=r.get(s.id);s.type!=="window"||s.rain_warning===!1||!a||!wc(n,a)||o.push({kind:"window_rain",entity:a.contact??a.tilt??a.contact2??s.id,roomId:s.room_id,floorId:i.id})}return o}function Mc(n,e){let t=[];for(let r of e.alarms){let o=n.states[r]?.state;o==="triggered"&&t.push({kind:"alarm",entity:r,roomId:null,floorId:null}),o==="pending"&&t.push({kind:"alarm_pending",entity:r,roomId:null,floorId:null})}return t}function ss(n,e,t,r){let o=t.outage&&kc(n,t.outage)?[{kind:"power_outage",entity:t.outage,roomId:null,floorId:null}]:[];return[...vc(n,t),...Sc(n,e,t,r),...Mc(n,t),...o]}var $c={smoke:[1,.2,.25],gas:[1,.2,.25],co:[1,.2,.25],alarm:[1,.2,.25],water:[.2,.6,1],window_rain:[.35,.72,1],alarm_pending:[1,.62,.2],power_outage:[1,.62,.2]},as=n=>$c[n];function Fr(n,e,t){let r=n?O(n,t.entity):t.entity,o=E(n,`alert_${t.kind}`,{name:r}),i=t.roomId===null?void 0:e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId);return i?`${i.name} \xB7 ${o}`:o}var V=(n,e)=>[n[0]-e[0],n[1]-e[1]],Ae=(n,e)=>[n[0]+e[0],n[1]+e[1]],ae=(n,e)=>[n[0]*e,n[1]*e],te=(n,e)=>n[0]*e[0]+n[1]*e[1],Re=(n,e)=>n[0]*e[1]-n[1]*e[0],_e=n=>Math.hypot(n[0],n[1]),ze=n=>{let e=_e(n)||1;return[n[0]/e,n[1]/e]},Tr=n=>[-n[1],n[0]],Pr=n=>[n[1],-n[0]];function ls(n){let e=n.heightEnd!==void 0;return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft,height:e?n.heightEnd:n.height,heightEnd:e?n.height:void 0}}function Ec(n,e){let t=n.map(r=>({...r}));for(let r of e){let o=t.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):t.push({...r})}return t}function Ac(n,e,t){if(n.a===e.b)return!1;let r=ze(V(t[n.b],t[n.a])),o=ze(V(t[e.b],t[e.a]));return Math.abs(Re(r,o))>1e-6||te(r,o)<=0||n.free||e.free||n.heightEnd!==void 0||e.heightEnd!==void 0?!1:n.height===e.height&&n.exterior===e.exterior&&n.roomLeft===e.roomLeft&&n.roomRight===e.roomRight&&Math.abs(n.left-e.left)<=1e-9&&Math.abs(n.right-e.right)<=1e-9}function cs(n,e,t=new Set){let r=n.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:ls(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:ls(r[a[1]]);if(!Ac(l,c,e))continue;let d={...l,b:c.b,sources:Ec(l.sources,c.sources)};i=[...r.filter((u,h)=>h!==a[0]&&h!==a[1]),d];break}if(!i)return r;r=i}}function us(n,e){let t=new Map;n.forEach((o,i)=>{let s=ze(V(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:ae(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let r=new Map;for(let[o,i]of t){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:Ae(s,ae(Tr(l.d),l.left)),right:Ae(s,ae(Pr(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let d=i[(c+1)%i.length],u=Ae(s,ae(Tr(l.d),l.left)),h=Ae(s,ae(Pr(d.d),d.right)),f=Re(l.d,d.d);if(Math.abs(f)<1e-4)return;let x=Ae(u,ae(l.d,Re(V(h,u),d.d)/f));_e(V(x,s))>a||(r.get(l.key).left=x,r.get(d.key).right=x)})}return r}function ds(n,e){let t=n.filter((r,o)=>_e(V(r,n[(o+1)%n.length]))>e);for(;;){if(t.length<=3)return t;let r=t.findIndex((o,i)=>{let s=t[(i+t.length-1)%t.length],a=t[(i+1)%t.length],[l,c]=[V(o,s),V(a,o)];return Math.abs(Re(ze(l),ze(c)))<1e-7&&te(l,c)>0});if(r===-1)return t;t=t.filter((o,i)=>i!==r)}}function Rc(n){let e=[];return{points:e,idOf(t){let r=e.findIndex(o=>Math.abs(o[0]-t[0])<=n&&Math.abs(o[1]-t[1])<=n);return r>=0?r:(e.push([t[0],t[1]]),e.length-1)}}}function zc(n,e){let t=[];for(let r of n){let o=r.points;if(o.length<3||Math.abs(Ge(o))<1e-6)continue;let i=Ge(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return t}function Fc(n,e,t){let r=[];for(let o of n){let[i,s]=[e[o.u],e[o.v]],a=V(s,i),l=_e(a),c=ae(a,1/l),d=e.map((h,f)=>({id:f,rel:V(h,i)})).filter(({id:h,rel:f})=>h!==o.u&&h!==o.v&&te(f,c)>t&&te(f,c)<l-t&&Math.abs(Re(c,f))<=t).map(({id:h,rel:f})=>({t:te(f,c),id:h})).sort((h,f)=>h.t-f.t),u=[{t:0,id:o.u},...d,{t:l,id:o.v}];for(let h=0;h+1<u.length;h++){let[f,x]=[u[h],u[h+1]];r.push({u:f.id,v:x.id,room:o.room,edge:o.edge,t0:o.forward?f.t:l-x.t,t1:o.forward?x.t:l-f.t,forward:o.forward})}}return r}var hs=n=>({room_id:n.room,edge:n.edge,t0:n.t0,t1:n.t1});function Tc(n,e){let t=new Map(n.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,d)=>c-d))}let o=a=>{let l=t.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=t.get(a.room),[c,d]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof d!="number"||c<=0||d<=0)return null;let[u,h]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:d,length:Math.hypot(h[0]-u[0],h[1]-u[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let d=o(a);return typeof d=="number"&&d>0?[d,d]:[null,null]}let c=d=>l.from+(l.to-l.from)*d/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let u of a){let[h,f]=s(u),[x,g]=u===a[0]?[h,f]:[f,h];x!==null&&(l=Math.min(l,x)),g!==null&&(c=Math.min(c,g))}let d=a.map(u=>t.get(u.room)?.ceiling);if(d.every(u=>typeof u=="number"&&u>0)){let u=Math.max(...d);l===1/0&&(l=u),c===1/0&&(c=u)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>t.get(c.room)?.wall_thickness?.[c.edge]).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function ps(n){let e=t=>Math.round(t*1e6)/1e6;return n.a===void 0||n.b===void 0?n.a!==void 0?{height:e(n.a)}:n.b!==void 0?{height:e(n.b)}:{}:Math.abs(n.a-n.b)<1e-6?{height:e(n.a)}:{height:e(n.a),heightEnd:e(n.b)}}function Pc(n,e,t,r){let o=Tc(e,n),i=new Map;for(let l of n){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],d=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==d&&h.room!==c.room&&r.push(`overlap:${c.room}:${h.room}`);let u=d?[c,d]:[c];if(o.hasNoWall(u)){d&&a.push([c.room,d.room]);continue}if(d){let h=o.thicknessOf(u)??t.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:d.room,sources:u.map(hs),...ps(o.heightsOf(u))})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(u)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[hs(c)],...ps(o.heightsOf(u))})}return{drafts:s,open:a}}function Dc(n,e){let t=r=>ze(V(e[r.b],e[r.a]));for(let r of n){if(r.exterior||r.free)continue;let o=new Set;for(let s of[r.a,r.b])for(let a of n)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(Re(t(r),t(a)))>1e-6||(a.roomLeft===r.roomLeft?o.add("left"):a.roomLeft===r.roomRight&&o.add("right"));if(o.size!==1)continue;let i=r.left+r.right;[r.left,r.right]=o.has("left")?[0,i]:[i,0]}}var Hc=(n,e)=>{let t=i=>Math.round(i*100),[r,o]=n[0]<e[0]||n[0]===e[0]&&n[1]<=e[1]?[n,e]:[e,n];return`w_${t(r[0])}_${t(r[1])}_${t(o[0])}_${t(o[1])}`};function bn(n,e,t=[]){let r=e.eps??.005,o=[],i=Rc(r),s=zc(n,i),a=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),l=a.map(v=>[i.idOf(v.a),i.idOf(v.b)]),c=new Set;for(let v of n){let w=v.points;w.length<3||(v.wall_splits??[]).forEach((_,$)=>{if(!_||$>=w.length)return;let P=w[$],H=V(w[($+1)%w.length],P),z=_e(H);for(let N of _)N>r&&N<z-r&&c.add(i.idOf(Ae(P,ae(H,N/z))))})}let d=Fc(s,i.points,r),{drafts:u,open:h}=Pc(d,n,e,o);Dc(u,i.points);let f=u;a.forEach((v,w)=>{let[_,$]=l[w];if(_===$)return;let P=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],H=n.find(N=>N.points.length>=3&&I(P,N.points))?.id??null,z=(v.thickness??e.interior)/2;f.push({free:v.id,a:_,b:$,left:z,right:z,exterior:!1,roomLeft:H,roomRight:H,sources:[],height:typeof v.height=="number"&&v.height>0?v.height:void 0})});let x=cs(f,i.points,c),g=us(x,i.points);return{walls:x.map((v,w)=>{let[_,$]=[i.points[v.a],i.points[v.b]],[P,H]=[g.get(`${w}:a`),g.get(`${w}:b`)],z=ds([P.right,H.left,$,H.right,P.left,_],1e-6);return{id:Hc(_,$),a:[_[0],_[1]],b:[$[0],$[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:z,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{},...v.heightEnd!==void 0?{heightEnd:v.heightEnd}:{}}}),warnings:[...new Set(o)],open:h}}var Et=n=>n&&n!=="none"?n:null,At=(n,e)=>{e&&!n.includes(e)&&n.push(e)},fs=n=>new Map(n.floors.flatMap(e=>e.furniture.filter(t=>t.type==="meter").map(t=>[t.id,t])));function ms(n,e){if(!n.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let t=fs(n),r=new Set([e.id]);for(let o=t.get(e.parent_meter);o;o=t.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return t.has(e.parent_meter)?e.parent_meter:null}function Rt(n){return new Set([...fs(n).values()].filter(e=>ms(n,e)).map(e=>e.id))}function vn(n,e){return!n.energy.advanced||!e.parent_meter?null:Rt(n).has(e.parent_meter)?e.parent_meter:null}function gs(n,e,t){let r=n.energy.show_unmetered?e.subMeters?.find(o=>o.id===t):void 0;return!r||r.use===null?null:{use:r.use,unmetered:r.unmetered!==null&&r.unmetered<r.use?r.unmetered:null}}function Fe(n,e=t=>Et(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of n.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?ms(n,r):null;if(i)(t.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")t.grid??=o,t.gridExport??=Et(r.export);else if(r.type==="inverter")At(t.solar,o);else if(r.type==="home_battery"){let s=Et(r.charge);At(t.battery,o),At(t.charge,s),At(t.soc,Et(r.soc)),(o||s)&&t.batteries.push({power:o,charge:s})}}for(let r of t.subMeters?n.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?t.subMeters?.find(a=>a.id===vn(n,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&At(o.solar,i);let s=Et(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return t}function U(n,e=!1){let t=n?Number(n.state):NaN;if(!Number.isFinite(t))return null;let r={kW:1e3,MW:1e6}[String(n.attributes.unit_of_measurement??"W")]??1;return e?-t*r:t*r}var Ic=(n,e)=>e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power";function Dr(n,e){if(Ic(n,e))return e;let t=n.entities?.[e]?.device_id;if(!t)return null;let r=mr(n,t),o=r?Ye(n,e):null,i=rn(n,t).filter(s=>s!==e);return(r?i.find(s=>o!==null&&Ye(n,s)===o):i[0])??null}function zt(n,e){let{grid:t,solar:r,battery:o}=e.energy,i=new Set([t,r,o].filter(a=>!!a)),s=[];for(let a of e.floors)for(let l of a.placements){let c=Dr(n,l.entity_id);!c||i.has(c)||(i.add(c),s.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,U(n.states[c])??0)}))}return s}var _s=n=>{let e=n.filter(t=>t!==null);return e.length?e.reduce((t,r)=>t+r,0):null};function Cc(n,e,t){let r=e.grid??t.grid,o=r?U(n.states[r],e.grid_invert):null;if(!e.grid&&t.gridExport){let i=Math.max(0,U(n.states[t.gridExport])??0);return Math.max(0,o??0)-i}return o}function Oc(n,e,t){return e.solar?U(n.states[e.solar]):t.solar.length?_s(t.solar.map(r=>U(n.states[r]))):null}function wn(n,e,t){return e.charge?(e.power?Math.max(0,U(n.states[e.power])??0):0)-Math.max(0,U(n.states[e.charge])??0):e.power?U(n.states[e.power],t):null}function Nc(n,e,t){return e.battery?U(n.states[e.battery],e.battery_invert):_s(t.batteries.map(r=>wn(n,r,e.battery_invert)))}function Ft(n,e,t,r=Fe(e)){let o=e.energy,i=Cc(n,o,r),s=Oc(n,o,r),a=Nc(n,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(x=>Number(n.states[x]?.state)).filter(Number.isFinite),c=l.length?l.reduce((x,g)=>x+g,0)/l.length:null,d=o.tariff?n.states[o.tariff]:void 0,u=Number(d?.state),h=o.consumption?U(n.states[o.consumption]):null;h===null&&(i!==null||s!==null||a!==null)&&(h=(i??0)+Math.max(0,s??0)+(a??0)),h===null&&t.length>0&&(h=t.reduce((x,g)=>x+g.power,0));let f={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:d&&Number.isFinite(u)?{value:u,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)};return r.subMeters?{...f,...Lc(n,r,f.consumption,o.battery_invert,t)}:f}function Lc(n,e,t,r,o){let i=e.subMeters??[],s=new Map;for(let h of i)for(let f of h.floors)s.has(f)||s.set(f,h.id);let a=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...i.flatMap(h=>[h.power,...h.solar,...h.batteries.flatMap(f=>[f.power,f.charge])])]),l=h=>o.filter(f=>s.get(f.floorId)===h&&!a.has(f.powerEntity)).reduce((f,x)=>f+x.power,0),c=new Map(i.map(h=>[h.id,h.power?U(n.states[h.power],h.invert):null])),d=i.map(h=>{let f=c.get(h.id)??null,x=h.solar.reduce((w,_)=>w+Math.max(0,U(n.states[_])??0),0),g=h.batteries.reduce((w,_)=>w+(wn(n,_,r)??0),0),y=i.filter(w=>w.parent===h.id).reduce((w,_)=>w+(c.get(_.id)??0),0),v=f===null?null:Math.max(0,f+x+g-y);return{id:h.id,parent:h.parent,power:f,solar:x,battery:g,use:v,unmetered:v===null?null:Math.max(0,v-l(h.id))}}),u=d.reduce((h,f)=>h+(f.use??0),0);return{subMeters:d,rest:t===null?null:Math.max(0,t-u)}}var Wc=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]),yn=n=>n&&n!=="none"?n:null,bs=n=>n.trim().toLowerCase();function Bc(n,e){let t=bs(e);if(!t||!n.types)return null;let r=n.types.map(s=>({word:bs(s.state),vehicle:s.vehicle})),o=r.find(s=>s.word===t),i=r.find(s=>s.word!==""&&t.includes(s.word));return(o??i)?.vehicle??null}function Hr(n,e){if(e.type!=="parking")return null;let t=yn(e.entity);if(t!==null){let i=n.states[t]?.state;if(i===void 0||!Wc.has(i.toLowerCase()))return null}let r=e.vehicle??null,o=yn(e.type_entity);return o!==null&&e.types&&e.types.length>0&&(r=Bc(e,n.states[o]?.state??"")??r),r!==null&&B(r)?r:null}function Ir(n,e){let t=new Map;for(let r of e.floors.flatMap(o=>o.furniture)){let o=Hr(n,r);o&&t.set(r.id,o)}return t}function vs(n){let e=[];for(let t of n.flatMap(r=>r.furniture))t.type==="parking"&&e.push(yn(t.entity),yn(t.type_entity));return e.filter(t=>t!==null)}function ws(n,e){let t=B(e);if(!t)return null;let r=n.scale??1,[o,i,s]=t.size.map(a=>a*r);return{id:`${n.id}:vehicle`,type:e,x:n.x,z:n.z,rotation:n.rotation,w:o,d:i,h:s,variant:n.variant??null,entity:null,power:null}}var Vc=n=>!!n&&n!=="none",ys=n=>n.floors.flatMap(e=>e.rooms),Kc=n=>n.floors.flatMap(e=>e.furniture);function Gc(n){return[...n.values()].flatMap(e=>[e.cover,e.contact,e.tilt,e.contact2,e.tilt2,e.position,e.tiltAngle])}function Uc(n){let{hass:e,building:t,furnitureLinks:r}=n,o=Kc(t);return[...[...r.values()].flatMap(i=>[i.entity,i.power]),...o.flatMap(i=>[i.state_entity,i.state_entity2,i.color_entity,...i.gang_entities??[],i.cover_entity,i.care_entity]),...o.filter(i=>i.type==="washer"||i.type==="dryer"||i.type==="dishwasher").flatMap(i=>$t(e,r.get(i.id)?.entity??r.get(i.id)?.power).filter(s=>s.startsWith("sensor."))),...o.flatMap(i=>[i.door_left,i.door_right,i.soc,i.status,i.charge,i.export]),...o.filter(i=>i.type==="robot_vacuum").map(i=>ln(e,r.get(i.id)?.entity??null,i.room_sensor)),...o.flatMap(i=>(i.pictures??[]).flatMap(s=>[s.entity,...s.image.startsWith("camera:")?[s.image.slice(7)]:[]]))]}function jc(n){let e=n.settings.roof;return[...(e?.windows??[]).flatMap(t=>[t.cover,t.contact,t.tilt]),...(e?.solar??[]).map(t=>t.entity),...(e?.strings??[]).map(t=>t.entity)].filter(Vc)}function xs(n){let{hass:e,building:t}=n,r=Bi(t),o=t.energy,i=ys(t).flatMap(l=>L(e,l.area_id).filter(c=>A(c)==="light")),s=n.needsRoomSensors?ys(t).flatMap(l=>L(e,l.area_id).filter(c=>c.startsWith("sensor."))):[],a=[...r,...Gc(n.openingLinks),...r.map(l=>Dr(e,l)),...r.flatMap(l=>e.states[l]?Po({hass:e,entityId:l,state:e.states[l]}):[]),...Uc(n),...jc(t),o.grid,o.solar,o.battery,o.battery_soc,o.consumption,o.tariff,...t.presence.flatMap(l=>[l.person,l.sensor]),...i,...s,...n.alertSources?is(n.alertSources):[],...vs(t.floors),...xi(e,t.floors),nt(e,n.weatherEntityId??t.settings.weather_entity),"sun.sun"];return[...new Set(a.filter(l=>!!l))]}var ks="https://tile.openstreetmap.org/{z}/{x}/{y}.png",qc="\xA9 OpenStreetMap contributors";var ef=Math.PI/180;var Zc=n=>n.url&&n.url.startsWith("https://")?n.url:ks;var Ss=n=>!!n&&n.on===!0&&Number.isFinite(n.lat)&&Number.isFinite(n.lon);function Cr(n){let e=Zc(n);if(e===ks)return{text:qc,href:"https://www.openstreetmap.org/copyright"};try{let t=new URL(e.replace(/\{[a-z]\}/g,"a")).host;return{text:`Map: ${t}`,href:`https://${t}/`}}catch{return{text:"Map",href:"#"}}}var Yc=["neon","blueprint","day"],xn=["auto",...Yc];function kn(n,e){return n!=="auto"?n??"neon":e==="above_horizon"?"day":"neon"}var Tt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Sn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[16,[.2,.45,1]],[20,[.15,.85,.75]],[22.5,[.95,.8,.3]],[26,[1,.28,.18]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[.95,.6,.2]],[45,[.3,.88,.5]],[60,[.2,.78,1]],[75,[.32,.4,.98]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.88,.5]],[800,[.98,.84,.3]],[1200,[1,.5,.2]],[1600,[.98,.25,.25]]]}},Qc=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function Ms(n,e){let{stops:t}=Sn[n],r=t.findIndex(([l])=>e<=l);if(r===-1)return t[t.length-1][1];if(r===0)return t[0][1];let[o,i]=t[r-1],[s,a]=t[r];return Qc(i,a,(e-o)/(s-o))}function $s(n,e,t){let r=new Map;for(let o of e.floors)for(let i of o.rooms){let s=Se(n,o,i,t);s!==null&&r.set(i.id,s)}return r}function Es(n){let{stops:e}=Sn[n],t=e[0][0],r=e[e.length-1][0]-t;return`linear-gradient(90deg, ${e.map(([i,s])=>`rgb(${s.map(a=>Math.round(a*255)).join(",")}) ${Math.round((i-t)/r*100)}%`).join(", ")})`}function le(n,e){if(!ir(e))return E(n,`furn_${e}`);let t=B(e);return t?Jc(t,e,n?.language??navigator.language):E(n,"pack_missing_item")}function Jc(n,e,t){return n.name[t.split("-")[0]]??Oi(t,e)??Go(n,t)}var Xc={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.4},cloudy:{cloud:.85},fog:{fog:.9,cloud:.5},rainy:{rain:.5,cloud:.8},pouring:{rain:1,cloud:1,wind:.3},"lightning-rainy":{rain:.75,cloud:1,lightning:!0,wind:.35},lightning:{cloud:.85,lightning:!0},hail:{hail:.8,rain:.3,cloud:1},snowy:{snow:.7,cloud:.85},"snowy-rainy":{snow:.45,rain:.3,cloud:.95},windy:{wind:.7,cloud:.25},"windy-variant":{wind:.7,cloud:.65},exceptional:{cloud:.6,wind:.5}},rt=n=>typeof n=="number"&&Number.isFinite(n)?n:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?Number(n):null,Mn=n=>Math.min(1,Math.max(0,n));function As(n,e){switch(e){case"m/s":return n*3.6;case"mph":return n*1.609;case"kn":return n*1.852;case"ft/s":return n*1.097;default:return n}}function eu(n){let e=rt(n);if(e!==null)return(e%360+360)%360;if(typeof n!="string")return null;let r=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].indexOf(n.trim().toUpperCase().replace("O","E"));return r<0?null:r*22.5}function Rs(n,e){let t=e?n.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let r=Xc[t.state];if(!r)return null;let o=t.attributes,i={rain:r.rain??0,snow:r.snow??0,hail:r.hail??0,fog:r.fog??0,cloud:r.cloud??0,wind:r.wind??0,windFrom:eu(o.wind_bearing),lightning:r.lightning??!1},s=rt(o.cloud_coverage);s!==null&&(i.cloud=Math.max(Mn(s/100),i.rain||i.snow?.6:0));let a=rt(o.wind_speed);a!==null&&(i.wind=Math.max(i.wind,Mn(As(a,o.wind_speed_unit)/70)));let l=rt(o.wind_gust_speed);l!==null&&(i.wind=Math.max(i.wind,Mn(As(l,o.wind_speed_unit)/100)));let c=rt(o.precipitation);if(c!==null&&c>0&&(i.rain>0||i.snow>0)){let f=Mn(.25+c/8);i.rain>0&&(i.rain=Math.max(i.rain*.6,f)),i.snow>0&&(i.snow=Math.max(i.snow*.6,f))}let d=rt(o.temperature),u=o.temperature_unit??n.config?.unit_system?.temperature,h=d===null?null:u==="\xB0F"?(d-32)*5/9:d;return h!==null&&h<=.5&&i.rain>0&&i.snow===0&&(i.snow=i.rain*.6,i.rain*=.4),i}function zs(n,e){let t=e==null||!Number.isFinite(e)?1:Math.min(1,Math.max(.1,e));return t===1?n:{...n,rain:n.rain*t,hail:n.hail*t,snow:n.snow*t}}function Fs(n,e){let t=new Set(e??["rain","snow","clouds","lightning","sky"]);return{...n,rain:t.has("rain")?n.rain:0,hail:t.has("rain")?n.hail:0,snow:t.has("snow")?n.snow:0,fog:t.has("fog")?n.fog:0,cloud:t.has("clouds")?n.cloud:0,lightning:t.has("lightning")&&n.lightning}}var Or=Math.PI/180,Ne=n=>Math.tan(Math.min(80,Math.max(0,n))*Or);function Ts(n){return{x0:Math.min(n.x0,n.x1),x1:Math.max(n.x0,n.x1),z0:Math.min(n.z0,n.z1),z1:Math.max(n.z0,n.z1)}}function Te(n){let{x0:e,x1:t,z0:r,z1:o}=Ts(n);return n.axis==="x"?{u0:e,u1:t,w:o-r,at:(i,s)=>[i,n.flip?o-s:r+s]}:{u0:r,u1:o,w:t-e,at:(i,s)=>[n.flip?t-s:e+s,i]}}var Pt=Math.tan(30*Or);function $n(n,e,t,r,o){let i=Math.min(n*.3,r>1e-6?2.4/r:n*.3),s=Math.min(n*.3,o>1e-6?2.4/o:n*.3),a=e+i*r,l=t+s*o,c=Math.min(n-s,Math.max(i,(l-a+Pt*(n-s+i))/(2*Pt))),d=a+(c-i)*Pt;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=i?e+h*r:h<=c?a+(h-i)*Pt:h<=n-s?l+(n-s-h)*Pt:t+(n-h)*o}}function ot(n){let e=Te(n).w,[t,r]=[n.eave_a,n.eave_b],[o,i]=[Ne(n.pitch_a),Ne(n.pitch_b)];switch(n.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*o,y:s=>t+s*o};case"mansard":{let s=$n(e,t,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-t+e*i)/(o+i))):e/2;return{vr:s,rh:t+s*o,y:a=>a<=s?t+a*o:r+(e-a)*i}}}}function Nr(n,e,t){let r=Te(e),o=n.floors.flatMap(d=>d.rooms.filter(u=>u.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(u=>o.some(h=>I(u,h.points))),s=.35,a=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),l=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:t;return{a:c(i(a.map(d=>r.at(d,-s)))),b:c(i(a.map(d=>r.at(d,r.w+s)))),u0:c(i(l.map(d=>r.at(r.u0-s,d)))),u1:c(i(l.map(d=>r.at(r.u1+s,d))))}}var ce=Math.PI/180,be=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]];var it=n=>Math.hypot(n[0],n[1],n[2]),Le=n=>{let e=it(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Is=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]];var Os=.25;function Ns(n,e,t,r,o,i,s){let a=o-t>=i-r,l=a?o-t:i-r;return{key:`${n}:top`,section:e,side:"top",flat:!0,o:[t,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Ls(n,e){let t=Le(Is(n,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var Ws=n=>{let e=Le([-n[0],0,-n[2]]);return[e[0],e[2]]};function ve(n,e,t,r,o,i,s,a){let l=Le(be(o,r)),c=Le(be(i,r));return{key:n,section:e,side:t,flat:!1,o:r,eu:l,es:c,n:Ls(l,c),lu:it(be(o,r)),ls:it(be(i,r)),pitch:s,span:a,facing:Ws(c)}}function Cs(n,e,t,r,o,i){let s=it(be(o,r));if(s<.3)return null;let a=Le(be(o,r)),l=be(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=it(d);if(u<.3)return null;let h=Le(d),f=x=>{let g=Math.min(1,Math.max(0,x/u));return[c*g,s-(s-c)*g]};return{key:n,section:e,side:t,flat:!1,o:r,eu:a,es:h,n:Ls(a,h),lu:s,ls:u,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/ce,span:f,facing:Ws(h)}}function iu(n,e){let t=Te(n),r=ot(n),o=(w,_,$)=>{let[P,H]=t.at(w,_);return[P,$,H]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,d=r.y(-i),u=r.y(t.w+s);if(n.shape==="flat"||n.shape==="parapet"){let[w,_]=[t.at(a,-i),t.at(l,t.w+s)];return[Ns(n.id,n.id,Math.min(w[0],_[0]),Math.min(w[1],_[1]),Math.max(w[0],_[0]),Math.max(w[1],_[1]),n.eave_a+Os)]}if(n.shape==="pent")return[ve(`${n.id}:a`,n.id,"a",o(a,-i,d),o(l,-i,d),o(a,t.w+s,u),n.pitch_a,()=>[0,c])];if(n.shape==="mansard")return su(n,t,a,l,i,s);let h=n.shape==="hip"||n.shape==="pyramid",f=(t.u1-t.u0)/2,x=n.shape==="pyramid"?f:h?Math.min(f,Math.min(r.vr,t.w-r.vr)||t.w/2):0,g=h?t.u0+x-a:0,y=h?l-(t.u1-x):0,v=[];if(r.vr>.3){let w=Math.hypot(r.vr+i,r.rh-d);v.push(ve(`${n.id}:a`,n.id,"a",o(a,-i,d),o(l,-i,d),o(a,r.vr,r.rh),n.pitch_a,_=>[g*(_/w),c-y*(_/w)]))}if(t.w-r.vr>.3){let w=Math.hypot(t.w+s-r.vr,r.rh-u);v.push(ve(`${n.id}:b`,n.id,"b",o(l,t.w+s,u),o(a,t.w+s,u),o(l,r.vr,r.rh),n.pitch_b,_=>[y*(_/w),c-g*(_/w)]))}if(h){let w=Cs(`${n.id}:c`,n.id,"c",o(a,t.w+s,u),o(a,-i,d),o(t.u0+x,r.vr,r.rh)),_=Cs(`${n.id}:d`,n.id,"d",o(l,-i,d),o(l,t.w+s,u),o(t.u1-x,r.vr,r.rh));v.push(...[w,_].filter($=>$!==null))}return v}function su(n,e,t,r,o,i){let s=$n(e.w,n.eave_a,n.eave_b,Ne(n.pitch_a),Ne(n.pitch_b)),a=(x,g)=>{let[y,v]=e.at(x,g);return[y,s.y(g),v]},l=r-t,c=()=>[0,l],d=(x,g)=>Math.atan2(x,g)/ce,u=[],[h,f]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&u.push(ve(`${n.id}:a`,n.id,"a",a(t,-o),a(r,-o),a(t,s.vla),n.pitch_a,c)),s.vr-s.vla>.3&&u.push(ve(`${n.id}:au`,n.id,"a",a(t,s.vla),a(r,s.vla),a(t,s.vr),d(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&u.push(ve(`${n.id}:b`,n.id,"b",a(r,h),a(t,h),a(r,f),n.pitch_b,c)),f-s.vr>.3&&u.push(ve(`${n.id}:bu`,n.id,"b",a(r,f),a(t,f),a(r,s.vr),d(s.rh-s.ylb,f-s.vr),c)),u}function En(n){return n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>r.elevation-t.elevation)[0]??null}function An(n){let e=n.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(_=>iu(_,Nr(n,_,_.overhang??e.overhang)));let t=En(n);if(!t)return[];let r=t.rooms.flatMap(_=>_.points.map($=>$[0])),o=t.rooms.flatMap(_=>_.points.map($=>$[1])),i=n.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],d=t.elevation+t.height;if(e.type==="flat")return[Ns("main",null,s,l,a,c,d+Os)];let u=a-s>=c-l,h=e.ridge==="short"?!u:u,f=(h?c-l:a-s)/2,x=f*Math.tan(e.pitch*ce),g=(_,$,P)=>h?[_,d+P,(l+c)/2+$]:[(s+a)/2+$,d+P,_],[y,v]=h?[s,a]:[l,c],w=()=>[0,v-y];return[ve("main:a",null,"a",g(y,-f,0),g(v,-f,0),g(y,0,x),e.pitch,w),ve("main:b",null,"b",g(y,f,0),g(v,f,0),g(y,0,x),e.pitch,w)]}function Dt(n,e){let t=[];for(let r of n.floors.filter(o=>!e||o.id===e)){let{walls:o}=bn(r.rooms,{exterior:n.settings.wall_exterior,interior:n.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,d]=[a/l,-s/l],u=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),h=(f,x,g,y)=>t.push({key:f,section:null,side:"top",flat:!1,o:x,eu:g,es:[0,1,0],n:y,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{floorId:r.id}});h(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&h(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var st="ground";function Ht(n){let e=n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>t.elevation-r.elevation);return e.find(t=>t.elevation>-.5)??e[0]??n.floors[0]??null}function Lr(n,e){let t=(e.rotation??0)*ce,r=[Math.cos(t),0,Math.sin(t)],o=[-Math.sin(t),0,Math.cos(t)],i=Ht(n),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:wt(i,s,a)):e.base??0;return{key:st,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function Wr(n,e,t=An(n)){return e.face===st?Lr(n,e):e.face.startsWith("wall:")?Dt(n,e.face.split(":")[1]).find(r=>r.key===e.face)??null:t.find(r=>r.key===e.face)??null}var Br=1.13,Vr=1.72,at=.025,Pe=.07;function It(n){let e=n.module_w||Br,t=n.module_h||Vr;return n.portrait===!1?[t,e]:[e,t]}function Kr(n){return n.layout?.length?n.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,n.rows)},()=>Math.max(1,n.cols))}function Gr(n,e){return n.flat?Math.min(45,Math.max(0,e.tilt??15))*ce:n.wall?Math.min(90,Math.max(0,e.tilt??0))*ce:0}function Rn(n,e){let[,t]=It(e),r=Gr(n,e);return n.wall?t*Math.cos(r)+at:n.flat?t*Math.cos(r)+Math.max(.3,2*t*Math.sin(r)):t+at}function Ur(n,e){let[t,r]=It(e),o=Kr(e),i=Math.max(1,...o);return[i*t+(i-1)*at,(o.length-1)*Rn(n,e)+r*Math.cos(Gr(n,e))]}var au=n=>n.flat&&!n.unbounded&&!n.wall;function lu(n,e){if(!au(n)||!e.rotation)return null;let t=e.rotation*ce,[r,o]=Ur(n,e);return{cos:Math.cos(t),sin:Math.sin(t),u:e.u+r/2,s:e.v+o/2}}function Ct(n,e,t=!1){let[r,o]=It(e),i=Gr(n,e),s=o*Math.cos(i),a=Rn(n,e),l=Kr(e),c=Math.max(1,...l),d=new Set(e.skip??[]),u=lu(n,e),h=(y,v)=>u?[u.u+(y-u.u)*u.cos-(v-u.s)*u.sin,u.s+(y-u.u)*u.sin+(v-u.s)*u.cos]:[y,v],f=(y,v,w)=>{let[_,$]=h(y,v);return[0,1,2].map(P=>n.o[P]+n.eu[P]*_+n.es[P]*$+n.n[P]*w)},x=(y,v)=>{let[w,_]=h(y,v);if(n.unbounded)return!0;if(_<-1e-6||_>n.ls+1e-6)return!1;let[$,P]=n.span(_);return w>=$-1e-6&&w<=P+1e-6},g=[];return l.forEach((y,v)=>{let w=e.align==="right"?c-y:e.align==="center"?(c-y)/2:0;for(let _=0;_<y;_++){let $=`${v}:${_}`,P=d.has($);if(P&&!t)continue;let H=e.u+(_+w)*(r+at),z=H+r,N=e.v+v*a,K=N+(n.flat||n.wall?s:o);if([[H,N],[z,N],[z,K],[H,K]].every(([S,F])=>x(S,F)))if(n.wall&&i>.001){let S=Pe+o*Math.sin(i),[F,b]=e.flip?[S,Pe]:[Pe,S],M=[f(H,N,F),f(z,N,F),f(z,K,b),f(H,K,b)],T=e.flip?N:K;g.push({corners:M,posts:[H+.05,z-.05].map(C=>[f(C,T,0),f(C,T,S)]),cell:$,skipped:P})}else if(!n.flat)g.push({corners:[f(H,N,Pe),f(z,N,Pe),f(z,K,Pe),f(H,K,Pe)],posts:[],cell:$,skipped:P});else{let F=.15+o*Math.sin(i),[b,M]=e.flip?[K,N]:[N,K],T=[f(H,b,.15),f(z,b,.15),f(z,M,F),f(H,M,F)],C=[H+.05,z-.05].flatMap(G=>[[f(G,b,0),f(G,b,.15)],[f(G,M,0),f(G,M,F)]]);g.push({corners:T,posts:C,cell:$,skipped:P})}}}),g}var re={solar:[255,196,46],battery:[74,222,128],import:[248,96,120],export:[56,220,245],house:[150,170,255],wallbox:[80,175,255]},we=15;function ye(n,e){let t=[];for(let r of n.floors)for(let o of r.furniture)o.type===e&&t.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return t}function pu(n){if(!n?.rooms.length)return null;let e=0,t=0,r=0;for(let o of n.rooms)for(let[i,s]of o.points)e+=i,t+=s,r++;return r?{floorId:n.id,x:e/r,z:t/r,y:1}:null}function zn(n){let e=Rt(n);return ye(n,"meter").find(t=>!e.has(t.id))??ye(n,"inverter")[0]??pu(Ht(n))}function fu(n,e){let t=ye(n,"grid_point")[0];if(t)return t;let r=n.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}var jr=n=>Math.max(1,n.rows*n.cols-(n.skip?.length??0));function mu(n,e,t){let r=e.settings.roof.solar??[],o=new Map,i=0,s=[];for(let c of r){let d=c.entity&&c.entity!=="none"?U(n.states[c.entity]):null;d!==null?(o.set(c.id,Math.max(0,d)),i+=Math.max(0,d)):s.push(c)}let a=Math.max(0,(t??0)-i),l=s.reduce((c,d)=>c+jr(d),0);for(let c of s)o.set(c.id,l?a*jr(c)/l:0);return o}function gu(n,e){if(e.face===st)return Ht(n)?.id??null;let t=/^wall:([^:]+):/.exec(e.face);return t?t[1]:En(n)?.id??null}function Bs(n,e,t=zt(n,e),r){let o=r?Fe(e,r):Fe(e),i=Ft(n,e,t,o),s=[],a=[],l=zn(e),c=i.consumption??0,d=i.grid===null||c<=0?null:Math.max(0,Math.min(1,1-Math.max(0,i.grid)/c));if(!l)return{arcs:s,sparks:a,summary:i,autarky:d};let u=new Map(e.floors.flatMap(S=>S.furniture).flatMap(S=>vn(e,S)?[[S.id,vn(e,S)]]:[])),h=ye(e,"inverter").find(S=>!u.has(S.id))??l,f=new Map(ye(e,"inverter").map(S=>[S.id,S])),x=new Map((e.settings.roof.strings??[]).map(S=>[S.id,S.inverter??null])),g=[...An(e),...Dt(e)],y=mu(n,e,i.solar);for(let S of e.settings.roof.solar??[]){let F=Wr(e,S,g);if(!F)continue;let b=Ct(F,S);if(!b.length)continue;let M=y.get(S.id)??0,T=jr(S)*(S.wp??400),C=M>we?Math.pow(Math.min(1,M/T),.6):0,G=gu(e,S);if(a.push({floorId:G,quads:b.map(ut=>ut.corners),level:C}),M<=we)continue;let Lt=0,R=0,Y=0;for(let ut of b)for(let On of ut.corners)Lt+=On[0],R+=On[1],Y+=On[2];let Cn=b.length*4,za=e.floors.find(ut=>ut.id===G)?.elevation??0,Fa=e.energy.advanced?f.get(x.get(S.string??"")??""):void 0;s.push({key:`solar:${S.id}`,from:{floorId:G,x:Lt/Cn,y:R/Cn-za+.1,z:Y/Cn},to:Fa??h,power:M,color:re.solar})}let v=ye(e,"home_battery").find(S=>!u.has(S.id)),w=i.battery===null?null:i.battery-(i.subMeters??[]).reduce((S,F)=>S+F.battery,0);if(v&&w!==null&&Math.abs(w)>we){let S=w>0;s.push({key:"battery",from:S?v:l,to:S?l:v,power:Math.abs(w),color:re.battery})}let _=(i.solar??0)-(i.subMeters??[]).reduce((S,F)=>S+F.solar,0);h!==l&&_>we&&s.push({key:"inverter",from:h,to:l,power:_,color:re.solar});let $=fu(e,l);if($&&i.grid!==null&&Math.abs(i.grid)>we){let S=i.grid>0;s.push({key:"grid",from:S?$:l,to:S?l:$,power:Math.abs(i.grid),color:S?re.import:re.export})}let P=new Map(ye(e,"meter").map(S=>[S.id,S])),H=r??(S=>S.power&&S.power!=="none"?S.power:null);for(let S of e.floors)for(let F of S.furniture){let b=P.get(u.get(F.id)??""),M=ye(e,F.type).find(C=>C.id===F.id);if(!b||!M)continue;let T=H(F);if(F.type==="inverter"){let C=Math.max(0,(T?U(n.states[T]):null)??0);C>we&&s.push({key:`inverter:${F.id}`,from:M,to:b,power:C,color:re.solar})}else if(F.type==="home_battery"){let C=F.charge&&F.charge!=="none"?F.charge:null,G=wn(n,{power:T,charge:C},e.energy.battery_invert)??0;Math.abs(G)>we&&s.push({key:`battery:${F.id}`,from:G>0?M:b,to:G>0?b:M,power:Math.abs(G),color:re.battery})}}let z=new Map,N=new Set;for(let S of o.subMeters??[]){let F=P.get(S.id),b=P.get(S.parent);S.power&&N.add(S.power);for(let T of S.floors)F&&!z.has(T)&&z.set(T,F);let M=i.subMeters?.find(T=>T.id===S.id)?.power??null;!F||!b||M===null||Math.abs(M)<=we||s.push({key:`meter:${S.id}`,from:M>0?b:F,to:M>0?F:b,power:Math.abs(M),color:M>0?re.house:re.solar})}let K=new Set(ye(e,"wallbox").map(S=>`${S.floorId}:${S.x.toFixed(1)}:${S.z.toFixed(1)}`));for(let S of t){if(S.power<=we||N.has(S.powerEntity))continue;let F=S.wallbox||K.has(`${S.floorId}:${S.x.toFixed(1)}:${S.z.toFixed(1)}`);s.push({key:`use:${S.id}`,from:z.get(S.floorId)??l,to:{floorId:S.floorId,x:S.x,z:S.z,y:.9},power:S.power,color:F?re.wallbox:re.house})}return{arcs:s,sparks:a,summary:i,autarky:d}}var J=n=>n&&n!=="none"?n:null,Fn=n=>{let e=Number(n?.state);return n&&Number.isFinite(e)?e:null},Vs=(n,e)=>n?.attributes?.[e],ue=(n,...e)=>e.some(t=>n.includes(t));function _u(n,e){if(!e)return[];let t=n.entities?.[e]?.device_id;return t?Object.values(n.entities??{}).filter(r=>r.device_id===t&&!r.hidden).map(r=>r.entity_id).filter(r=>n.states[r]):[e]}function de(n,e,t,r){return e&&n.states[e]?e:t.find(o=>r(o,n.states[o]))??null}function Ks(n,e){let t=e.car??{},r=J(t.device)??J(t.tracker)??J(e.entity),o=_u(n,r);if(!o.length&&!J(t.soc))return null;let i=R=>R.split(".")[0],s=R=>String(Vs(R,"device_class")??""),a=R=>String(Vs(R,"unit_of_measurement")??""),l=de(n,J(t.soc),o,(R,Y)=>i(R)==="sensor"&&a(Y)==="%"&&(s(Y)==="battery"||ue(R,"battery_level","soc","state_of_charge","ladezustand"))&&!ue(R,"usable")),c=de(n,J(t.range),o,(R,Y)=>i(R)==="sensor"&&(s(Y)==="distance"||ue(R,"range","reichweite"))&&!ue(R,"odometer","ideal","elevation","kilometerstand")),d=de(n,null,o,(R,Y)=>i(R)==="sensor"&&s(Y)==="power"&&ue(R,"charg","lade")),u=J(t.charging),h=de(n,u&&i(u)==="binary_sensor"?u:null,o,(R,Y)=>i(R)==="binary_sensor"&&(s(Y)==="battery_charging"||ue(R,"charging","charger","laden"))),f=de(n,J(t.plugged),o,(R,Y)=>i(R)==="binary_sensor"&&(s(Y)==="plug"||ue(R,"plug","cable","kabel"))),x=de(n,J(t.lock),o,R=>i(R)==="lock"),g=de(n,J(t.climate),o,R=>i(R)==="climate"),y=de(n,u&&/^(switch|input_boolean)\./.test(u)?u:null,o,R=>i(R)==="switch"&&ue(R,"charg","laden")&&!ue(R,"port","klappe")),v=de(n,J(t.tracker),o,R=>i(R)==="device_tracker")??(J(e.entity)?.startsWith("device_tracker.")?J(e.entity):null),w=de(n,null,o,(R,Y)=>i(R)==="sensor"&&s(Y)==="temperature"&&ue(R,"inside","innen","interior","cabin")),_=R=>R?n.states[R]:void 0,$=Fn(_(l)),P=_(c),H=null,z=_(d)??(u&&i(u)==="sensor"?_(u):void 0);if(z){let R=Fn(z);R!==null&&(H=Math.max(0,a(z).toLowerCase()==="kw"?R*1e3:R))}let K=(_(h)?.state??_(y)?.state)==="on"||H!==null&&H>50,S=_(f)?.state,F=_(x)?.state,b=_(g),M=_(v),T=_(J(e.entity)),C=T?["on","home","true","present","occupied","detected","parked"].includes(T.state.toLowerCase()):M?.state==="home",G=M&&M.state!=="home"&&M.state!=="not_home"?M.state:null,Lt=G?String(_(`zone.${G}`)?.attributes.friendly_name??G):null;return{home:C,soc:$,range:Fn(P),rangeUnit:P&&a(P)||"km",chargingW:H,charging:K,plugged:S===void 0?null:S==="on",locked:F===void 0?null:F==="locked",climateOn:b?b.state!=="off"&&b.state!=="unavailable":null,inside:Fn(_(w)),where:C?null:Lt,entities:{lock:x,climate:g,charge:y,tracker:v}}}function Gs(n){return n===null?"#8aa0c8":n<20?"#f87171":n<50?"#facc15":"#4ade80"}function lt(n,e){let t=Math.abs(e);return t>=1e3?`${W(n,t/1e3,t>=1e4?1:2)} kW`:`${Math.round(t)} W`}function Us(n,e){let r=2*Math.PI*22;return p`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${q`<circle cx="27" cy="27" r=${22} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${22} stroke=${e} stroke-dasharray=${`${(r*Math.max(0,Math.min(1,n))).toFixed(1)} ${r.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`}function bu(n,e,t){let r=e.summary,o=a=>E(n,a),i=[];if(r.solar!==null&&i.push(p`<div class="live-row live-solar"><span>☀ ${o("energy_solar")}</span><b>${lt(n,r.solar)}</b></div>`),r.consumption!==null&&i.push(p`<div class="live-row live-house"><span>⌂ ${o("energy_consumption")}</span><b>${lt(n,r.consumption)}</b></div>`),r.rest!==void 0&&r.rest!==null&&i.push(p`<div class="live-row live-house"><span>⌂ ${o("energy_rest")}</span><b>${lt(n,r.rest)}</b></div>`),r.battery!==null||r.soc!==null){let a=r.battery===null||Math.abs(r.battery)<15?"":r.battery>0?" \u2193":" \u2191";i.push(p`<div class="live-row live-battery"><span>▮ ${o("energy_battery")}${a}</span><b>${r.soc!==null?`${Math.round(r.soc)} %`:""}${r.battery!==null&&Math.abs(r.battery)>=15?` \xB7 ${lt(n,r.battery)}`:""}</b></div>`)}if(r.grid!==null){let a=r.grid<-15;i.push(p`<div class="live-row ${a?"live-export":"live-import"}"><span>⇄ ${o(a?"energy_grid_export":"energy_grid_import")}</span><b>${lt(n,r.grid)}</b></div>`)}let s=e.autarky;return p`<div class="live-card live-card-house" data-i=${t}>
    ${s!==null?p`<div class="live-own">${Us(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)} %</b><span>${o("live_autarky")}</span></div></div>`:m}
    <div class="live-rows">${i}</div>
    ${vu(n,e.curves)}
  </div>`}function vu(n,e){if(!e)return m;let t=[...e.solar,...e.use].filter(l=>l!==null);if(t.length<4)return m;let r=Math.max(...t)*1.08||1,[o,i]=[150,34],s=Rr(e.solar,o,i,r),a=Rr(e.use,o,i,r);return p`<div class="live-day" title=${E(n,"live_day_hint")}>
    <svg viewBox=${`0 0 ${o} ${i}`} preserveAspectRatio="none" aria-hidden="true">
      ${s?q`<path d=${`${s}L${o},${i}L0,${i}Z`} class="live-day-solar"></path>`:m}
      ${a?q`<path d=${a} class="live-day-use"></path>`:m}
    </svg>
    <span>24 h</span>
  </div>`}function wu(n,e,t,r){let o=e.car,i=(d,u)=>E(n,d,u),s=Gs(o.soc),a=o.home?o.charging?`\u26A1 ${i("live_car_charging")}${o.chargingW?` \xB7 ${lt(n,o.chargingW)}`:""}`:o.plugged?`\u{1F50C} ${i("live_car_plugged")}`:"":`${i("live_car_away")}${o.where?` \xB7 ${o.where}`:""}`,l=o.entities,c=(d,u,h,f)=>p`<button class="live-btn ${d?"live-on":""}" title=${u} aria-label=${u} aria-pressed=${d??!1} @click=${x=>(x.stopPropagation(),f())}>${h}</button>`;return p`<div class="live-card live-card-car ${o.charging?"live-charging":""} ${o.home?"":"live-away"}" data-i=${t} style=${`--live-soc:${s}`}>
    <div class="live-own">
      ${Us((o.soc??0)/100,s)}
      <div class="live-own-text"><b>${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b><span>${o.range!==null?`${Math.round(o.range)} ${o.rangeUnit}`:""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${a?p`<div class="live-status">${a}</div>`:m}
      ${o.inside!==null?p`<div class="live-status">🌡 ${W(n,o.inside,1)} °C</div>`:m}
      <div class="live-actions">
        ${l.lock?c(o.locked,i(o.locked?"live_car_unlock":"live_car_lock"),o.locked?"\u{1F512}":"\u{1F513}",()=>{o.locked&&!confirm(i("live_car_unlock_confirm",{name:e.name}))||r("lock",o.locked?"unlock":"lock",l.lock)}):m}
        ${l.climate?c(o.climateOn,i("live_car_climate"),"\u2744",()=>r(l.climate.split(".")[0],o.climateOn?"turn_off":"turn_on",l.climate)):m}
        ${l.charge&&o.home?c(o.charging,i("live_car_charge"),"\u26A1",()=>r(l.charge.split(".")[0],"toggle",l.charge)):m}
      </div>
    </div>
  </div>`}function yu(n,e,t,r){let o=e.media,i=l=>E(n,l),s=`rgb(${o.color.join(",")})`,a=(l,c,d)=>p`<button class="live-btn" title=${l} aria-label=${l} @click=${u=>(u.stopPropagation(),r("media_player",d,o.entity))}>${c}</button>`;return p`<div class="live-card live-card-media" data-i=${t} style=${`--live-soc:${s}`} @click=${l=>l.currentTarget.classList.toggle("live-open")}>
    ${o.picture?p`<img class="live-cover" src=${o.picture} alt="" loading="lazy" />`:p`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${o.title}>${o.title||o.name}</div>
      <div class="live-status">${o.artist||o.app||o.name}</div>
      <div class="live-actions">
        ${a(i("live_media_prev"),"\u23EE","media_previous_track")} ${a(i("live_media_playpause"),"\u23EF","media_play_pause")} ${a(i("live_media_next"),"\u23ED","media_next_track")}
        ${o.volume!==null?p`<input
              class="live-volume"
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(o.volume*100))}
              aria-label=${i("live_media_volume")}
              @click=${l=>l.stopPropagation()}
              @change=${l=>r("media_player","volume_set",o.entity,{volume_level:Number(l.target.value)/100})}
            />`:m}
      </div>
    </div>
  </div>`}function js(n){let e=[...n.querySelectorAll(".live-card")].filter(o=>o.style.visibility!=="hidden"),t=[],r=e.map(o=>({el:o,x:Number(o.dataset.x),y:Number(o.dataset.y),w:o.offsetWidth,h:o.offsetHeight})).sort((o,i)=>i.y-o.y);for(let o of r){let i=o.y;for(let a=0;a<12;a++){let l={x0:o.x-o.w/2,x1:o.x+o.w/2,y0:i-o.h,y1:i},c=t.find(d=>l.x0<d.x1+6&&l.x1>d.x0-6&&l.y0<d.y1+6&&l.y1>d.y0-6);if(!c)break;i=c.y0-8}t.push({x0:o.x-o.w/2,x1:o.x+o.w/2,y0:i-o.h,y1:i});let s=o.y-i;o.el.style.transform=`translate(${Math.round(o.x)}px, ${Math.round(i)}px) translate(-50%, -100%)`,o.el.style.setProperty("--live-thread",`${Math.round(18+s)}px`)}}function qs(n,e,t){return e.length?p`<div class="live-cards">
    ${e.map((r,o)=>r.kind==="house"?bu(n,r,o):r.kind==="car"?wu(n,r,o,t):yu(n,r,o,t))}
  </div>`:m}var Zs=j`
  .live-cards {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
  }
  .live-card {
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    pointer-events: auto;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 10px 14px;
    border-radius: calc(var(--nf-radius) + 4px);
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: var(--nf-text);
    font-size: 12.5px;
    line-height: 1.35;
    white-space: nowrap;
    will-change: transform;
  }
  .live-card::after {
    /* a thin glowing thread down to the point the card belongs to */
    content: "";
    position: absolute;
    left: 50%;
    bottom: calc(-1 * var(--live-thread, 18px));
    width: 1px;
    height: var(--live-thread, 18px);
    background: linear-gradient(color-mix(in srgb, var(--nf-text) 45%, transparent), transparent);
  }
  .live-rows {
    display: grid;
    gap: 2px;
    min-width: 150px;
  }
  .live-row {
    display: flex;
    justify-content: space-between;
    gap: 14px;
  }
  .live-day {
    position: relative;
    margin-top: 6px;
  }
  .live-day svg {
    display: block;
    width: 100%;
    height: 34px;
  }
  .live-day-solar {
    fill: rgba(250, 204, 21, 0.35);
    stroke: #facc15;
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }
  .live-day-use {
    fill: none;
    stroke: #e8eeff;
    stroke-width: 1.4;
    vector-effect: non-scaling-stroke;
  }
  .live-day span {
    position: absolute;
    right: 2px;
    top: 0;
    font-size: 9px;
    opacity: 0.6;
  }
  .live-row span {
    opacity: 0.8;
  }
  .live-solar b {
    color: color-mix(in srgb, #ffd166 72%, var(--nf-text));
  }
  .live-battery b {
    color: color-mix(in srgb, #4ade80 72%, var(--nf-text));
  }
  .live-import b {
    color: color-mix(in srgb, #f87193 72%, var(--nf-text));
  }
  .live-export b {
    color: color-mix(in srgb, #38dcf5 72%, var(--nf-text));
  }
  .live-house b {
    color: color-mix(in srgb, #b6c2ff 72%, var(--nf-text));
  }
  .live-title {
    font-weight: 600;
    font-size: 13px;
  }
  .live-status {
    opacity: 0.85;
  }
  .live-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }
  .live-btn {
    font: inherit;
    font-size: 14px;
    width: 32px;
    height: 28px;
    border-radius: 9px;
    border: none;
    background: var(--nf-fill);
    color: inherit;
    cursor: pointer;
  }
  .live-btn.live-on {
    background: color-mix(in srgb, var(--live-soc, #4ade80) 30%, transparent);
    border-color: var(--live-soc, #4ade80);
  }
  .live-card-car {
    border-color: color-mix(in srgb, var(--live-soc) 60%, transparent);
    box-shadow: 0 0 22px color-mix(in srgb, var(--live-soc) 30%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.06);
  }
  .live-card-car.live-charging {
    animation: live-charge 1.6s ease-in-out infinite;
  }
  @keyframes live-charge {
    50% {
      box-shadow: 0 0 34px color-mix(in srgb, var(--live-soc) 55%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.1);
    }
  }
  .live-card-car.live-away {
    opacity: 0.85;
    border-style: dashed;
  }
  /* phones: only the house and the car, the media cards would cover the rooms */
  .nf-narrow .live-card-media {
    display: none;
  }
  .live-card-media {
    border-color: color-mix(in srgb, var(--live-soc) 55%, transparent);
    box-shadow: 0 0 22px color-mix(in srgb, var(--live-soc) 28%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.06);
  }
  .live-card-media .live-title {
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live-card-media {
    cursor: pointer;
    padding: 7px 12px 7px 7px;
  }
  .live-card-media .live-actions {
    display: none;
  }
  .live-card-media.live-open .live-actions {
    display: flex;
  }
  .live-card-media.live-open {
    z-index: 5;
  }
  .live-cover {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 14px color-mix(in srgb, var(--live-soc) 40%, transparent);
  }
  .live-cover-none {
    display: grid;
    place-items: center;
    font-size: 24px;
    background: color-mix(in srgb, var(--live-soc) 25%, transparent);
  }
  .live-volume {
    width: 80px;
    accent-color: var(--live-soc);
  }
  .live-own {
    position: relative;
    width: 54px;
    height: 54px;
  }
  .live-ring {
    width: 54px;
    height: 54px;
  }
  .live-ring-bg {
    fill: none;
    stroke: color-mix(in srgb, var(--nf-text) 10%, transparent);
    stroke-width: 5;
  }
  .live-ring-fg {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dasharray 0.6s ease;
  }
  .live-own-text {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
  }
  .live-own-text b {
    font-size: 13px;
  }
  .live-own-text span {
    font-size: 8.5px;
    opacity: 0.75;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;function Tn(n){return n.toLocaleLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Ys=n=>n.points.length>=3;function xu(n,e,t){return n.rooms.filter(Ys).find(r=>I([e,t],r.points))}function ku(n,e,t,r){let o=[];for(let a of e.rooms.filter(Ys)){let[l,c]=yt(a.points);o.push({kind:"room",name:a.name,where:r?e.name:"",floorId:e.id,roomId:a.id,entity:null,icon:null,x:l,z:c,y:0})}let i=new Set,s=(a,l,c,d)=>{if(i.has(a)||!(a in n.states))return;i.add(a);let u=xu(e,l,c),h=[u?.name,r?e.name:void 0].filter(f=>!!f).join(" \xB7 ");o.push({kind:"device",name:O(n,a),where:h,floorId:e.id,roomId:u?.id??null,entity:a,icon:A(a),x:l,z:c,y:d})};for(let a of e.placements){let l=a.y??qe(A(a.entity_id)??"sensor",ne(e,a.x,a.z),a.mount);s(a.entity_id,a.x,a.z,l)}for(let a of e.furniture){let l=t.get(a.id),c=l?.entity??l?.power;if(!c)continue;let d=ne(e,a.x,a.z)-.3;s(c,a.x,a.z,Math.min(d,Math.max(.5,a.h)))}return o}function Qs(n,e){let t=Je(n,e.floors),r=e.floors.length>1;return e.floors.flatMap(o=>ku(n,o,t,r))}function Su(n,e){return(Tn(n.name).startsWith(e)?0:2)+(n.kind==="room"?0:1)}function Js(n,e,t=8){let r=Tn(e).split(/\s+/).filter(Boolean);if(r.length===0)return[];let o=Tn(e.trim());return n.filter(i=>{let s=Tn([i.name,i.where,i.entity].filter(Boolean).join(" "));return r.every(a=>s.includes(a))}).map(i=>({item:i,cost:Su(i,o)})).sort((i,s)=>i.cost-s.cost||i.item.name.localeCompare(s.item.name)).slice(0,t).map(i=>i.item)}var Mu=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],$u=[2200,2700,3200,4e3,5e3,6500],Eu=["hs","rgb","rgbw","rgbww","xy"],Au=4,Xs=16,ea=32,Ru=128;function Zr(n){let e=n.attributes.supported_color_modes??[],t=e.some(r=>Eu.includes(r));return{dim:e.some(r=>r!=="onoff"),color:t,temp:e.includes("color_temp")}}function Yr(n){return((n.attributes.supported_features??0)&Au)!==0&&typeof n.attributes.current_position=="number"}var qr=class extends Z{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},low:{type:Boolean,reflect:!0}};t(e,t){return E(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:O(this.hass,this.entity)}))}call(e,t,r={}){this.hass.callService(e,t,{entity_id:this.entity,...r})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){ge(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((r,o)=>{let i=o/t*Math.PI*2-Math.PI/2;return p`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${r}</div>`})}renderLight(e){let t=Zr(e),r=e.state==="on",o=r&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):r?100:0,i=t.color?Mu.map(s=>p`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?$u.map(s=>p`<button class="qm-swatch" style="background:${zu(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return p`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${r?"qm-on":""}" aria-pressed=${r} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${r?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?p`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:m}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,r=e.state==="opening"||e.state==="closing",o=Yr(e),i=(d,u,h,f=!1)=>p`<button class="qm-swatch qm-slot ${f?"qm-slot-on":""}" aria-label=${u} @click=${h}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),r)],l=t===null?e.state==="closed"?100:0:100-t,c=t!==null||r||e.state==="open"||e.state==="closed";return p`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c&&l<100?"qm-on":""}"
          style="--closed:${l}%"
          ?disabled=${!c}
          aria-label=${r?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>r?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:Q(this.hass,e)}</b>
        </button>
      </div>
      ${o?p`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:m}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,r=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Ru&&r!==null?p`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${r} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(r)}
          aria-label=${this.t("cover_tilt")}
          @change=${o=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(o.target.value)})}
      /></label>`:t&(Xs|ea)?p`<div class="qm-tilt-buttons">
        ${t&Xs?p`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:m}
        ${t&ea?p`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:m}
      </div>`:m}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",r=e.entity_id.split(".")[0];return p`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(r==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${Q(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return m;let t=A(this.entity),r=D(e)&&!xt(e)?p`<p class="qm-note">${Q(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):this.renderToggle(e);return p`<div class="qm" role="dialog" aria-label=${O(this.hass,this.entity)}>
      <div class="qm-title">${O(this.hass,this.entity)}</div>
      ${r}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[se,j`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--nf-accent, var(--nf-accent));
      color: var(--nf-accent, var(--nf-accent));
    }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow), 0 0 0 1px var(--nf-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--nf-line);
        animation: none;
        color: var(--nf-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--nf-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid color-mix(in srgb, var(--nf-text) 25%, transparent);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--nf-bg2);
        color: var(--nf-muted);
        box-shadow: inset 0 0 0 2px var(--nf-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .qm-power b {
        font: 700 15px var(--nf-title-font);
        color: var(--nf-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--nf-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--nf-line);
        background: var(--nf-bg2);
        color: var(--nf-text);
        font: 700 12px var(--nf-title-font);
      }
      .qm-slot-on {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--nf-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--nf-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--nf-muted);
      }
    `]};function zu(n){let e=Math.min(1,Math.max(0,(n-2200)/4300)),t=(r,o)=>Math.round(r+(o-r)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("nf-quick-menu")||customElements.define("nf-quick-menu",qr);var Fu=new URL(import.meta.url),Tu=new URL("./nextfloor-3d.js?v=9e551c10ee56",Fu).href,ta;function na(){return ta??=import(Tu),ta}function ra(n){if(!n||n.state!=="on")return 0;let e=typeof n.attributes.percentage=="number"?n.attributes.percentage:60;return e<=0?0:.2+.6*Math.min(100,e)/100}var oa=n=>n.toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),Pu=new Set(["","unknown","unavailable","not home","away"]);function Du(n,e,t){let r=oa(t);if(Pu.has(r))return null;for(let o of e.floors)for(let i of o.rooms){let s=i.area_id?n.areas?.[i.area_id]?.name:void 0;if([i.name,i.area_id,s].map(l=>oa(l??"")).includes(r))return{floorId:o.id,room:i}}return null}function Hu(n){let e=n.split(/\s+/).filter(Boolean);return e.length===0?"?":(e.length===1?e[0].slice(0,2):e[0][0]+e[e.length-1][0]).toUpperCase()}function Iu(n,e){let[t,r]=yt(n.points),o=e*1.15-Math.PI/2+.9;return[t+.75*Math.cos(o),r+.75*Math.sin(o)]}function ia(n,e){let t=[],r=new Map;for(let{person:o,sensor:i}of e.presence){let s=n.states[o],a=i?n.states[i]:void 0;if(!s||!a||s.state!=="home"&&s.state!=="on")continue;let l=Du(n,e,a.state);if(!l)continue;let c=r.get(l.room.id)??0;r.set(l.room.id,c+1);let[d,u]=Iu(l.room,c),h=String(s.attributes.friendly_name??o),f=s.attributes.entity_picture;t.push({id:o,name:h,initials:Hu(h),picture:typeof f=="string"?f:null,floorId:l.floorId,roomId:l.room.id,x:d,z:u})}return t}function Cu(n,e){let t=new Set;for(let r of e.rooms)for(let o of Qe(n,L(n,r.area_id)))A(o)==="light"&&t.add(o);for(let r of e.placements)A(r.entity_id)==="light"&&t.add(r.entity_id);return[...t].filter(r=>n.states[r]?.state==="on").length}function Ou(n,e,t){let r=i=>!!i&&n.states[i]?.state==="on",o=0;for(let i of e.openings){let s=t.get(i.id);if(s)if(i.type==="garage")(pe(n,s,"garage").cover??1)<.95&&o++;else if(i.type==="door")(r(s.contact)||r(s.contact2))&&o++;else{let a=pe(n,s,"window");Math.max(a.open,a.tilt,a.open2,a.tilt2)>.5&&o++}}return o}function sa(n,e,t,r){return new Map(e.floors.map(o=>[o.id,{rooms:o.rooms.length,lightsOn:Cu(n,o),open:Ou(n,o,t),persons:r.filter(i=>i.floorId===o.id).length}]))}function aa(n,e){let t=[e.rooms===1?E(n,"floor_rooms_one"):E(n,"floor_rooms",{n:e.rooms})];return e.lightsOn>0&&t.push(E(n,"floor_lights",{n:e.lightsOn})),e.open>0&&t.push(E(n,"floor_open",{n:e.open})),e.persons>0&&t.push(E(n,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var la="nextfloor.lock3d",Jr=class extends Z{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},solidWalls:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},markersOutside:{attribute:!1},tapInRoom:{type:Boolean},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},weatherDensity:{attribute:!1},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_liveEnergy:{state:!0},_liveCards:{state:!0},_liveCardOn:{state:!0},_swipe:{state:!0},_menu:{state:!0},_pluginWindow:{state:!0},_plate:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},clock:{attribute:!1},lockButton:{attribute:!1},walkButton:{attribute:!1},travelButton:{attribute:!1},_travel:{state:!0},_walking:{state:!0},_stick:{state:!0},_locked:{state:!0},_now:{state:!0},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};get liveCardsOn(){return this.holograms??this._liveCardOn}cloud=0;confirmSet=new Set;shownStartView;placementInfo=new Map;live=null;travelTimer;dayCurves=null;curvesAt=0;clockTimer;stopPlugins=null;pluginsDirty=!1;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.solidWalls=!1,this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.markersOutside=null,this.tapInRoom=!1,this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.weather=!0,this.weatherEntityId=null,this.weatherDensity=1,this.showEnergy=!0,this.flows=null,this._liveEnergy=null,this._liveCards=[],this._liveCardOn=localStorage.getItem("nextfloor.cards")!=="0",this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._pluginWindow=null,this._plate=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("nextfloor.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.clock=null,this.lockButton=!1,this.walkButton=!1,this.travelButton=!1,this._travel=null,this._walking=!1,this._stick=null,this._now=Date.now(),this._locked=(()=>{try{return localStorage.getItem(la)==="1"}catch{return!1}})(),this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.holograms=null;try{this._flows=localStorage.getItem("nextfloor.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.stopPlugins=Ke(()=>{this.pluginsDirty=!0,this.requestUpdate()}),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.stopPlugins?.(),this.stopPlugins=null,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.clockTimer),this.clockTimer=void 0,clearInterval(this.travelTimer),this.travelTimer=void 0,this.live=null,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nf-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let r=(t[0]?.contentRect.width??1e3)<700;r!==this._narrowStage&&(this._narrowStage=r,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await na();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".nf-stage");t.addEventListener("pointerdown",r=>{this._central&&!r.target?.closest?.(".nf-central, .nf-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(r,o)=>this.fire("room-tap",{floorId:r,roomId:o}),onFloorTap:r=>this.fire("floor-tap",{floorId:r}),floorInfo:r=>r.rooms.length===1?E(this.hass,"floor_rooms_one"):E(this.hass,"floor_rooms",{n:r.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(r,o,i)=>this.onDeviceTap(r,o,i),onDeviceHold:(r,o,i)=>this.onDeviceHold(r,o,i),onRoomDoubleTap:(r,o)=>this.onRoomDoubleTap(r,o),onDeviceSwipe:(r,o,i,s,a)=>this.onDeviceSwipe(r,o,i,s,a),onFurnitureSelect:r=>this.fire("furniture-select",{id:r}),onFurnitureMove:(r,o,i)=>this.fire("furniture-move",{id:r,x:o,z:i}),onDeviceSelect:r=>this.fire("device-select",{id:r}),onDeviceMove:(r,o,i)=>this.fire("device-move",{id:r,x:o,z:i}),onStats:r=>{this.showStats&&(this._stats=r)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setPaintedWalls(this.solidWalls),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setNavigationLocked(this._locked),this.viewer.setFurnishMode(this.furnish),this.viewer.setTapInRoom(this.tapInRoom),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setMeshSource(r=>this.hass?.fetchWithAuth?this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(r)}`).then(o=>o.ok?o.arrayBuffer():null):Promise.resolve(null)),this.viewer.setPacks([...sr()]),this.shownPacks=Zt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building),this.viewer.setMap(this.building.settings.map,this.building.settings.north??0)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass);let t=this._pluginWindow?.node;e.has("hass")&&t&&"hass"in t&&(t.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let r=this.viewer;if(!r)return;if(this.shownPacks!==Zt()&&(this.shownPacks=Zt(),r.setPacks([...sr()]),this.hass&&this.building&&r.setParked(Ir(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),a=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,r.setStartView(this.startViewOf()),r.setBuilding(this.building),r.setMap(this.building?.settings.map,this.building?.settings.north??0),a&&this.floorId===null&&r.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(r.setStartView(this.startViewOf()),this.floorId===null&&r.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let o=this.markersOutside?["markersOutside","floorId","roomId"]:["markersOutside"],i=this.pluginsDirty||["building","markerMode","heatMode","flows","alerts","dimmed",...o].some(s=>e.has(s));this.pluginsDirty=!1,(i||e.has("hass"))&&this.syncDevices(i),e.has("autoOrbit")&&r.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&r.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&r.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&r.selectRoom(this.roomId),e.has("tapInRoom")&&r.setTapInRoom(this.tapInRoom),e.has("wallMode")&&r.setWallMode(this.wallMode),e.has("solidWalls")&&r.setPaintedWalls(this.solidWalls),e.has("explode")&&r.setExplode(this.explode),e.has("keepRoof")&&r.setKeepRoof(this.keepRoof),e.has("floorStack")&&r.setFloorStack(this.floorStack),e.has("theme")&&r.setTheme(this.theme),e.has("_locked")&&r.setNavigationLocked(this._locked),e.has("clock")&&(clearInterval(this.clockTimer),this.clockTimer=this.clock?setInterval(()=>this._now=Date.now(),1e4):void 0),e.has("accent")&&r.setAccent(this.accent??null),e.has("surfaceGrab")&&r.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&r.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(r.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&r.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&r.setSelectedDevice(this.selectedDevice),(e.has("weather")||e.has("weatherEntityId")||e.has("weatherDensity"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(r.setQuality(this.quality),this._low=r.low),e.has("showStats")&&r.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,r=this.building;if(!t||!r||!this.hass)return;let o=this._travel,i=o&&!o.loading?gn(this.hass,o.history,o.t):this.hass;if((e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=Mt(i,r.floors),this.furnitureLinks=Je(i,r.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?os(i,r,this.weatherEntityId):null,this.watched=xs({hass:i,building:r,openingLinks:this.openingLinks,furnitureLinks:this.furnitureLinks,needsRoomSensors:this.heatMode!=="none"||this.roomLabels,alertSources:this.alertSrc,weatherEntityId:this.weatherEntityId}),e=!0),!(e||this.watched.some(b=>this.shownStates.get(b)!==i.states[b])))return;this.shownStates=new Map(this.watched.map(b=>[b,i.states[b]]));let a=zt(i,r),l=Wi(i,r);this.placementInfo=new Map(l.map(b=>[b.id,{floorId:b.floorId,roomId:b.roomId,x:b.x,z:b.z,y:b.y,rotation:b.rotation??0}]));let c=this.furnitureMarkers(i,r,new Set(l.map(b=>b.id)),new Set(a.map(b=>b.powerEntity)));a.push(...c.consumers);let d=Ft(i,r,a,Fe(r,b=>this.furnitureLinks?.get(b.id)?.power??null)),u=new Map(a.filter(b=>b.id!==b.powerEntity).map(b=>[b.id,b.power]));this.confirmSet=Xe(i,r.floors);let h=new Set(this.liveCardsOn?this._liveCards.flatMap(b=>b.kind==="media"?[b.media.entity]:b.kind==="car"?[b.spot]:[]):[]);t.setDevices([...[...l,...c.markers].map(b=>{let M=b.show==="no_power"||"energyDevice"in b&&b.energyDevice?null:u.get(b.id)??null,T={...b,power:M,powerText:M===null?void 0:X(i,M),effect:this.dimmed?void 0:b.effect,text:this.subMeterText(i,r,d,b.furnitureId)??b.text},C=b.ownName&&(b.showName||this.markerNames)?b.ownName:"",G=h.has(b.id)||!!b.furnitureId&&h.has(b.furnitureId);return{...T,pin:this.showPin(T)&&!G,full:b.show==="always",caption:C}})]),t.setPickTargets(c.targets,this.openingTargets()),t.setScreens(c.screens),t.setFridgeDoors(wi(i,r.floors)),t.setCovers(Ti(i,r)),t.setRobots(this.robotInfos(i,r)),t.setRoofWindows(Xi(i,r)),t.setParked(Ir(i,r));let f=new Map(r.floors.flatMap(b=>b.openings.map(M=>[M.id,M.type]))),x=new Map([...this.openingLinks].map(([b,M])=>[b,pe(i,M,f.get(b))]));t.setOpeningStates(x),this.setAlerts(this.alertSrc?ss(i,r,this.alertSrc,this.openingLinks):[]);let g=[...l,...c.markers].map(b=>`${b.id}:${b.glow?`${b.glow.level.toFixed(1)}/${b.glow.color.map(M=>M.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...x].map(([b,M])=>`${b}:${M.open}:${M.cover===null?"-":M.cover.toFixed(1)}`).join(";");if(g!==this.thumbSig){let b=this.thumbSig==="";this.thumbSig=g,b||this.scheduleThumbs(1500)}let y=Bs(i,r,a,r.energy.advanced?b=>this.furnitureLinks?.get(b.id)?.power??null:void 0),v=this.liveCars(i,r);for(let b of v){if(!b.car.home||!b.car.charging)continue;let M=r.floors.flatMap(T=>T.furniture.filter(C=>C.type==="wallbox").map(C=>({floorId:T.id,x:C.x,z:C.z,y:1}))).sort((T,C)=>Math.hypot(T.x-b.at.x,T.z-b.at.z)-Math.hypot(C.x-b.at.x,C.z-b.at.z))[0]??zn(r);M&&y.arcs.push({key:`car:${b.spot}`,from:M,to:{...b.at,y:.8},power:b.car.chargingW??7e3,color:[80,175,255]})}let w=(this.flows??this._flows)&&!this.dimmed;t.setLiveEnergy(w?y.arcs:[],w?y.sparks:[]),JSON.stringify(y)!==JSON.stringify(this._liveEnergy)&&(this._liveEnergy=y);let $=this.liveMedia(i,r).filter(b=>b.playing&&!this.dimmed);t.setLiveSound($.map(b=>({id:b.entity,at:b.at,color:b.color,level:b.volume??.5})),Qi($).map(([b,M])=>[b.at,M.at])),this.syncLhCards(t,r,y,v,$),t.setLiveScreens(this.dimmed?[]:es(i,r,this.furnitureLinks));let P=[];t.setPersons(P);let H=sa(i,r,this.openingLinks,P);t.setFloorInfo(new Map([...H].map(([b,M])=>[b,aa(i,M)])));let z=ts(i);t.setSun(z);let N=this.weather&&!this.dimmed?Rs(i,nt(i,this.weatherEntityId??r.settings.weather_entity)):null,K=N?zs(Fs(N,r.settings.weather_effects),this.weatherDensity):null;this.cloud=K?.cloud??0,this._sky=ns(z?.elevation??null,this.cloud),t.setSky(this.weather&&!this.dimmed?{weather:K,sun:z,north:r.settings.north??0,sky:this.skyColor(),disc:(r.settings.weather_effects??["sky"]).includes("sky"),low:this._low}:null),this.applyTint();let F=d.grid!==null||d.solar!==null||d.battery!==null||d.tariff!==null?d:null;JSON.stringify(F)!==JSON.stringify(this._energy)&&(this._energy=F)}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),r=e.filter((o,i)=>!this.seenAlerts.has(t[i]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),r.length&&this.alertJump&&this.jumpTo(r[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let r=this.building,o=this.hass,i=r?.floors.find(d=>d.id===e),s=i?.rooms.find(d=>d.id===t);if(!r||!o||!i||!s)return;let a=new Set(L(o,s.area_id).filter(d=>A(d)==="light"));for(let d of i.placements)A(d.entity_id)==="light"&&I([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of i.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&ar(d.type)&&I([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>o.states[d]?.state==="on");o.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,r=this.hass;if(!e||!t||!r)return;let o=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=$s(r,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,o=new Map([...l].map(([c,d])=>[c,Ms(a,d)]))}let i=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let c=Se(r,a,l,"temperature"),d=Se(r,a,l,"humidity"),u=Se(r,a,l,"co2"),h=[c!==null?`${W(r,Ze(r,c),1)} ${ie(r)}`:null,d!==null?`${W(r,d,0)} %`:null,u!==null?`${W(r,u,0)} ppm`:null].filter(f=>!!f);h.length&&i.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){o??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let c=as(l.kind).map(d=>d*a);if(l.roomId)o.set(l.roomId,c);else for(let d of t.floors)for(let u of d.rooms)o.set(u.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let s=o?[...o].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(o))}furnitureMarkers(e,t,r,o){let i=[],s=[],a=new Map,l=new Map,c=Rt(t);for(let d of t.floors)for(let u of d.furniture){let h=this.furnitureLinks.get(u.id),f=this.stateFaces(e,u);f.length&&a.set(u.id,{color:f[0].color,level:f[0].level,faces:f});let x=Uo(u.type);if(x&&u.care_entity){let M=this.careMarker(e,d,u,x,u.care_entity);M&&(i.push(M.marker),M.glow&&a.set(u.id,{color:M.glow,level:.9,faces:[{part:"all",color:M.glow,level:.9}]}),l.set(u.id,u.care_entity));continue}let g=B(u.type);if(u.cover_entity&&Yt(g)&&l.set(u.id,u.cover_entity),u.tap?.action){l.set(u.id,`tap:${u.id}`);let M=d.rooms.find(C=>C.points.length>=3&&I([u.x,u.z],C.points)),T=u.name||le(e,u.type);i.push({id:`tap:${u.id}`,floorId:d.id,roomId:M?.id??null,x:u.x,z:u.z,y:Qr(u)+oe(d,u),icon:me(u.icon||"gesture-tap-button"),name:T,ownName:u.name||void 0,showName:!!u.show_name,text:"",active:!1,unavailable:!1,glow:null,furnitureId:u.id,show:u.marker??void 0,fromFurniture:!0});continue}if(g?.gangs){let M=Ei(e,(u.gang_entities??[]).slice(0,g.gangs),/socket/.test(u.type));M.length&&a.set(u.id,{color:M[0].color,level:M[0].level,gangs:M}),yr(u.gang_entities,g.gangs).length&&l.set(u.id,`gang:${u.id}`);continue}if(ar(u.type)){let M=this.lampMarker(e,d,u,h?.entity??null);if(i.push(M),u.type==="ceiling_fan"){let T=h?.fan?e.states[h.fan]:void 0;M.spin=ra(T),T&&!r.has(T.entity_id)&&(r.add(T.entity_id),i.push({...M,id:T.entity_id,y:Math.max(.5,M.y-.3),icon:u.icon?me(u.icon):et("fan"),name:u.name||O(e,T.entity_id),text:Lu(e,T),active:ee(T),unavailable:D(T),glow:null,lamp:null,spin:void 0,pickable:void 0,effect:void 0}))}continue}let y=u.type==="home_battery"?u.soc:u.type==="wallbox"?u.status:null,v=y&&y!=="none"?y:null,w=h??(v?{entity:null,power:null}:void 0);if(!w)continue;let _=u.type==="home_battery"?v??w.entity??w.power:w.entity??w.power??v;l.set(u.id,_);let $=w.entity?e.states[w.entity]:void 0,P=c.has(u.id),H=P?!!u.meter_invert:u.type==="meter"?t.energy.grid_invert&&!u.export:u.type==="home_battery"?t.energy.battery_invert&&!u.charge:!1,z=w.power?U(e.states[w.power],H):null,N=u.type==="home_battery"&&u.charge&&u.charge!=="none"?u.charge:u.type==="meter"&&!P&&u.export&&u.export!=="none"?u.export:null,K=N?U(e.states[N]):null;K!==null&&(z=Math.max(0,z??0)-Math.max(0,K)),w.power&&z!==null&&!o.has(w.power)&&(o.add(w.power),s.push({id:_,powerEntity:w.power,floorId:d.id,x:u.x,z:u.z,power:Math.max(0,z),wallbox:u.type==="wallbox"||void 0}));let S=(z??0)>10||$?.state==="on"||$?.state==="running"||hr($)&&ee($);if(u.type==="radiator"&&$&&A($.entity_id)==="climate"){let M=$.attributes;if(M.hvac_action==="heating"){let T=typeof M.temperature=="number"&&typeof M.current_temperature=="number"?M.temperature-M.current_temperature:1;a.set(u.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,T))})}}else(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&S&&a.set(u.id,{color:[.3,.85,1],level:.8});if($&&an(u.type)){let M=A($.entity_id)==="light"?ke($):null,T=A($.entity_id)==="media"&&["playing","on","paused","idle"].includes($.state),C=M?M.color:ee($)||T?[.22,.88,1]:null;C&&a.set(u.id,{color:C,level:$.state==="playing"?1:.6,halo:u.ambilight??1})}if(r.has(_))continue;r.add(_);let F=w.entity?A(w.entity):null,b=d.rooms.find(M=>M.points.length>=3&&I([u.x,u.z],M.points));i.push({id:_,floorId:d.id,roomId:b?.id??null,x:u.x,z:u.z,y:Qr(u)+oe(d,u),icon:u.icon?me(u.icon):et(F??"switch"),name:u.name||(w.entity?O(e,w.entity):le(e,u.type)),ownName:u.name||void 0,showName:!!u.show_name,text:u.type==="home_battery"?this.batteryText(e,v,z):u.type==="wallbox"?this.wallboxText(e,v,z):u.type==="meter"?P?z===null?"":X(e,z):this.meterText(e,z):$&&(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&S&&kr(e,$t(e,w.entity??w.power))!==null?E(e,"care_time_left",{time:Fi(kr(e,$t(e,w.entity??w.power)))}):$?Q(e,$):z!==null?X(e,Math.max(0,z)):"",active:$?ee($):(z??0)>5,unavailable:$?D($):!1,glow:null,furnitureId:u.id,energyDevice:u.type==="inverter"||u.type==="home_battery"||u.type==="wallbox"||u.type==="meter",show:u.marker??void 0,fromFurniture:!0})}return{markers:i,consumers:s,screens:a,targets:l}}robotObstacles(e,t){let r=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(r.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||oe(e,o)>.12)return!1;let i=B(o.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:I([o.x,o.z],t)||Xt(o).some(s=>I(s,t))}).map(o=>Xt(o))}robotInfos(e,t){let r=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,d=i.d*.14,u=[i.x-Math.sin(c)*d,i.z+Math.cos(c)*d],h=o.rooms.filter(y=>y.points.length>=3),x=(l==="cleaning"?Mi(e,h,s,ln(e,s,i.room_sensor)):null)??h.find(y=>I(u,y.points)),g=l==="cleaning"&&x?this.robotObstacles(o,x.points):[];r.push({id:i.id,floorId:o.id,rest:u,restHeading:-c,mode:l,room:x?.points??null,roomId:x?.id??null,obstacles:g})}return r}batteryText(e,t,r){let o=t?Number(e.states[t]?.state):Number.NaN,i=[];return Number.isFinite(o)&&i.push(`${W(e,o,0)} %`),r!==null&&Math.abs(r)>=10&&i.push(`${r<0?"\u25B2":"\u25BC"} ${X(e,Math.abs(r))}`),i.join(" \xB7 ")}subMeterText(e,t,r,o){let i=o?gs(t,r,o):null;return i?X(e,i.use)+(i.unmetered===null?"":` \xB7 ${E(e,"meter_unmetered",{w:X(e,i.unmetered)})}`):null}meterText(e,t){return t===null?"":Math.abs(t)<5?X(e,0):`${E(e,t<0?"energy_grid_export":"energy_grid_import")} ${X(e,Math.abs(t))}`}wallboxText(e,t,r){let o=t?e.states[t]:void 0,i=String(o?.state??"").toLowerCase(),s=(r??0)>50||/charg|laden|lädt/.test(i),a=o?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?E(e,"wallbox_charging"):a?E(e,"wallbox_plugged"):o&&!D(o)&&!o.entity_id.startsWith("binary_sensor.")?Q(e,o):"",c=r!==null&&r>50?X(e,r):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let r=[],o=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,s]of o){if(!i||i==="none")continue;let a=e.states[i];if(!a||D(a)||!(ee(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=A(i)==="light"?ke(a):null;r.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return r}careMarker(e,t,r,o,i){let s=e.states[i];if(!s)return null;let a="",l=!1,c=null;if(o==="bin"){let h=Ai(s);a=h===null?Q(e,s):h===0?E(e,"care_bin_today"):h===1?E(e,"care_bin_tomorrow"):E(e,"care_bin_days",{n:h}),l=h!==null&&h<=1,l&&(c=[1,.72,.28])}else if(o==="mail")l=Ri(s),a=E(e,l?"care_mail_yes":"care_mail_no"),l&&(c=[1,.85,.3]);else{let h=zi(s,r.thirsty_below??20);l=!!h?.thirsty,a=h?Number.isFinite(h.moisture)?`${E(e,l?"care_plant_thirsty":"care_plant_ok")} \xB7 ${Math.round(h.moisture)} %`:E(e,l?"care_plant_thirsty":"care_plant_ok"):Q(e,s),l&&(c=[1,.45,.3])}let d=t.rooms.find(h=>h.points.length>=3&&I([r.x,r.z],h.points)),u={bin:"mdi:trash-can-outline",mail:"mdi:mailbox-outline",plant:"mdi:sprout-outline"}[o];return{glow:c,marker:{id:i,floorId:t.id,roomId:d?.id??null,x:r.x,z:r.z,y:Qr(r)+oe(t,r),icon:r.icon?me(r.icon):me(u),name:r.name||le(e,r.type),ownName:r.name||void 0,showName:!!r.show_name,text:a,active:l,unavailable:D(s),glow:null,furnitureId:r.id,show:r.marker??void 0,fromFurniture:!0,care:!0}}}lampMarker(e,t,r,o){let i=o?e.states[o]:void 0,s=B(r.type),a=ti[r.type]??s?.light??"floor",l=t.rooms.some(x=>x.points.length>=3&&I([r.x,r.z],x.points)),c=a==="strip"&&!l?wt(t,r.x,r.z)+(r.mount_y??0):r.mount_y!=null&&!s?r.mount_y:s||a==="wall"||a==="strip"?oe(t,r):a==="table"?Jt(t,r.x,r.z):a==="bollard"||a==="garden"?wt(t,r.x,r.z):0,d=t.rooms.find(x=>x.points.length>=3&&I([r.x,r.z],x.points)),u=Qt(t,r),h=s?s.mount==="ceiling"?Math.max(.5,c-.15):c+r.h+.2:{ceiling:u-.3,downlight:u-.25,spot:u-.35,panel:u-.25,pendant:Math.max(.6,u-r.h-.25),fan:Math.max(.6,u-r.h-.2),floor:c+r.h+.25,uplight:c+r.h+.25,table:c+r.h+.2,wall:c+r.h+.2,strip:r.upright?c+r.w+.15:Math.max(.3,c-.2),bollard:c+r.h+.25,garden:c+r.h+.25}[a],f={id:o??`lamp:${r.id}`,floorId:t.id,roomId:d?.id??null,x:r.x,z:r.z,y:h,icon:et("light"),name:r.name||(o?O(e,o):le(e,r.type)),text:i?Q(e,i):"",active:i?ee(i):!1,unavailable:i?D(i):!1,glow:i?Sr(ke(i,r.color_entity&&r.color_entity!=="none"?e.states[r.color_entity]:void 0),r.glow_scale):null,lamp:a,rotation:r.rotation,mirror:!!r.mirror,roll:r.tilt??0,upright:!!r.upright,size:[r.w,r.d,r.h],base:c,pickable:!!o,furnitureId:r.id,pack:s?r.type:null,lightY:s?s.mount==="ceiling"?c:c+r.h*.85:void 0,ceiling:u,effect:i?.state==="on"?hn(r,Li(e,r,o)):void 0,variant:r.variant,show:r.marker??void 0,fromFurniture:!0};return i&&o?Mr(e,f,i,!1):f}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always")return!0;if(this.markersOutside&&!(this.roomId&&e.roomId===this.roomId))return this.markersOutside.includes(oi(e.id,!!e.lamp));if(this.markerMode==="all")return!0;if(e.lamp)return!1;let t=A(e.id);return t==="light"?!1:e.fromFurniture&&t==="fan"?!0:e.care?e.active:e.id.startsWith("tap:")?!0:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,r]of this.openingLinks??[]){let o=r.lock??r.cover??r.contact??r.tilt;o&&e.set(t,o)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let r=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},r)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return m;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),r=this._thumbsCompact,o=()=>{this._thumbsCompact=!r;try{localStorage.setItem("nextfloor.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return p`<nav class="nf-thumbs ${this.narrowThumbs?"nf-thumbs-small":""} ${r?"nf-thumbs-compact":""}" aria-label=${E(this.hass,"floors")}>
      <button class="nf-thumbs-fold" title=${E(this.hass,r?"thumbs_show":"thumbs_fold")} aria-label=${E(this.hass,r?"thumbs_show":"thumbs_fold")} @click=${o}>${r?"\u25B8":"\u25C2"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${E(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>p`<button class="nf-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${r?m:p`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,r){let o=A(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"?this._menu={entity:e,x:t,y:r}:ge(this,e)}onDeviceSwipe(e,t,r,o,i){let s=this.hass?.states[e];if(t==="start"){if(!s||D(s)||this.confirmSet.has(e))return!1;let l=A(e);if(l==="light"&&Zr(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:o,y:i},!0}if(l==="fan"&&typeof s.attributes.percentage_step=="number"){let c=s.state==="on"&&typeof s.attributes.percentage=="number"?s.attributes.percentage:0;return this._swipe={entity:e,kind:"fan",start:c,value:c,x:o,y:i},!0}if(l==="cover"&&Yr(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:o,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-r/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):e.kind==="fan"?e.value<=0?this.hass.callService("fan","turn_off",{entity_id:e.entity}):this.hass.callService("fan","set_percentage",{entity_id:e.entity,percentage:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}openRoom(e,t){this.floorId===e&&this.roomId===t||(this.floorId!==e?(this.fire("floor-tap",{floorId:e}),setTimeout(()=>this.fire("room-tap",{floorId:e,roomId:t}),60)):this.fire("room-tap",{floorId:e,roomId:t}))}goTo(e){if(this._find=null,e.kind==="room"){e.roomId&&this.openRoom(e.floorId,e.roomId);return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return m;let t=this._alerts.slice(0,3);return p`<div class="nf-alert-banner" role="alert">
      ${t.map(r=>p`<button class="nf-alert nf-alert-${r.kind}" title=${Fr(this.hass,e,r)} @click=${()=>this.jumpTo(r)}>${Fr(this.hass,e,r)}</button>`)}
      ${this._alerts.length>3?p`<span class="nf-alert-more">+${this._alerts.length-3}</span>`:m}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return m;let t=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this.roomId),r=t?L(this.hass,t.area_id).filter(i=>A(i)==="scene"||A(i)==="script").slice(0,6):[];if(!r.length)return m;let o=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return p`<div class="nf-scenes">
      ${r.map(i=>p`<button class="nf-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${O(this.hass,i,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return m;if(this._find===null)return p`<button class="nf-find-btn" title=${E(this.hass,"find")} aria-label=${E(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Js(this.findIndex??=Qs(this.hass,e),this._find);return p`<div class="nf-find">
      <input
        type="search"
        placeholder=${E(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${r=>this._find=r.target.value}
        @keydown=${r=>{r.key==="Escape"&&(this._find=null),r.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="nf-find-close" aria-label=${E(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?p`<div class="nf-find-list">
            ${t.length?t.map(r=>p`<button @click=${()=>this.goTo(r)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${r.icon?dn(r.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${r.name}</b>${r.where?p`<small>${r.where}</small>`:m}</span>
                  </button>`):p`<p>${E(this.hass,"find_none")}</p>`}
          </div>`:m}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null)return m;let r=(g,y)=>E(t,g,y),o=p`<button
      class="nf-central-btn ${this._central?"nf-central-on":""}"
      title=${r("central")}
      aria-label=${r("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return o;let i=this.floorId?e.floors.find(g=>g.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(g=>vr(t,g).lights),l=s.flatMap(g=>vr(t,g).covers),c=a.filter(g=>t.states[g]?.state==="on").length,d=!i,u=(g,y,v,w)=>{if(w.length){if(d&&this._armed!==g){this._armed=g,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(y,v,{entity_id:w})}},h=(g,y,v,w,_)=>p`<button class="nf-btn ${this._armed===g?"nf-central-armed":""}" ?disabled=${!_.length} @click=${()=>u(g,v,w,_)}>
        ${this._armed===g?r("central_sure"):r(y)}
      </button>`,f=(e.settings.favorites??[]).filter(g=>t.states[g]),x=this.buttons??e.settings.buttons??[];return p`${o}
      <div class="nf-central" role="dialog" aria-label=${r("central")}>
        <b>${i?i.name:r("central_house")}</b>
        <div class="nf-central-row">
          <span>${r("central_lights")}${a.length?p` <small>${c}/${a.length}</small>`:m}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(g=>t.states[g]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(g=>t.states[g]?.state==="on"))}
        </div>
        ${l.length?p`<div class="nf-central-row">
              <span>${r("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:m}
        <b>${r("central_favorites")}</b>
        ${f.length?p`<div class="nf-central-favs">
              ${f.map(g=>{let[y,v]=$i(g),w=t.states[g],_=y==="homeassistant"&&w?.state==="on";return p`<button
                  class="nf-chip"
                  aria-pressed=${_||this._sceneFired===g}
                  ?disabled=${D(w)}
                  @click=${()=>{t.callService(y,v,{entity_id:g}),this._sceneFired=g,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${O(t,g)}
                </button>`})}
            </div>`:x.length?m:p`<p class="nf-central-hint">${r("central_no_favorites")}</p>`}
        ${x.length?p`<div class="nf-central-favs">
              ${x.map(g=>p`<button
                  class="nf-chip nf-own-btn"
                  @click=${y=>{wr(t,y.currentTarget,g),g.action!=="service"&&(this._central=!1)}}
                >
                  ${g.icon?p`<ha-icon .icon=${g.icon.startsWith("mdi:")?g.icon:`mdi:${g.icon}`}></ha-icon>`:m}${g.label}
                </button>`)}
            </div>`:m}
      </div>`}toggleLock(){this._locked=!this._locked;try{localStorage.setItem(la,this._locked?"1":"0")}catch{}}async openTravel(e){if(clearInterval(this.travelTimer),this.travelTimer=void 0,e===null||!this.hass){this._travel=null,this.syncDevices(!0);return}let t=Date.now(),r=t-e*36e5;this._travel={history:new Map,from:r,to:t,t:r,playing:!1,speed:e>24?3600:600,hours:e,moments:[],loading:!0};try{let o=await Ar(this.hass,Ki(this.watched),r,t);if(!this._travel||this._travel.from!==r)return;this._travel={...this._travel,history:o,moments:Gi(o,r,t),loading:!1}}catch{this._travel=null,this._error=E(this.hass,"travel_failed");return}this.syncDevices(!0)}travelTo(e){let t=this._travel;t&&(this._travel={...t,t:Math.min(t.to,Math.max(t.from,e))},this.syncDevices(!0))}playTravel(e){let t=this._travel;t&&(clearInterval(this.travelTimer),this.travelTimer=void 0,this._travel={...t,playing:e,t:e&&t.t>=t.to?t.from:t.t},e&&(this.travelTimer=setInterval(()=>{let r=this._travel;if(!r)return;let o=r.t+250*r.speed;o>=r.to&&this.playTravel(!1),this.travelTo(o)},250)))}renderTravel(){if(!this.hass||this.clean)return m;let e=a=>E(this.hass,a),t=this._travel;if(!t)return this.travelButton?p`<button class="nf-travel-btn" title=${e("travel")} aria-label=${e("travel")} @click=${()=>{this.openTravel(24)}}>⏪</button>`:m;let r=this.hass.language??navigator.language,o=new Intl.DateTimeFormat(r,{weekday:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t.t)),i=t.to-t.from||1,s=[[60,"travel_speed_min"],[600,"travel_speed_10min"],[3600,"travel_speed_hour"]];return p`<div class="nf-travel" role="group" aria-label=${e("travel")}>
      <button class="nf-travel-play" aria-label=${e(t.playing?"travel_pause":"travel_play")} ?disabled=${t.loading} @click=${()=>this.playTravel(!t.playing)}>${t.playing?"\u23F8":"\u25B6"}</button>
      <b class="nf-travel-when">${t.loading?e("travel_loading"):o}</b>
      <div class="nf-travel-track">
        <svg viewBox="0 0 1000 10" preserveAspectRatio="none" aria-hidden="true">${t.moments.map(a=>q`<rect x=${(a-t.from)/i*1e3} y="0" width="1.6" height="10" />`)}</svg>
        <input type="range" min=${t.from} max=${t.to} step="60000" .value=${String(t.t)} ?disabled=${t.loading} aria-label=${e("travel")} @input=${a=>this.travelTo(Number(a.target.value))} />
      </div>
      <select aria-label=${e("travel_speed")} @change=${a=>this._travel={...t,speed:Number(a.target.value)}}>
        ${s.map(([a,l])=>p`<option value=${a} ?selected=${t.speed===a}>${e(l)}</option>`)}
      </select>
      <button class="nf-travel-span" aria-pressed=${t.hours===24} @click=${()=>{this.openTravel(24)}}>24 h</button>
      <button class="nf-travel-span" aria-pressed=${t.hours===168} @click=${()=>{this.openTravel(168)}}>7 ${e("travel_days")}</button>
      <button class="nf-travel-live" @click=${()=>{this.openTravel(null)}}>● ${e("travel_live")}</button>
    </div>`}toggleWalk(){let e=this.viewer;e&&(this._walking?(e.stopWalk(),this._walking=!1):this._walking=e.startWalk()!==null,this._stick=null)}stickMove(e,t=!1){let r=e.currentTarget;if(t)r.setPointerCapture(e.pointerId);else if(!this._stick)return;let o=r.getBoundingClientRect(),i=o.width/2,[s,a]=[(e.clientX-o.left-i)/i,(e.clientY-o.top-i)/i],l=Math.hypot(s,a);l>1&&([s,a]=[s/l,a/l]),this._stick=[s,a],this.viewer?.setWalkStick(Math.abs(s)<.12?0:s,Math.abs(a)<.12?0:a)}stickEnd(){this._stick=null,this.viewer?.setWalkStick(0,0)}renderWalk(){if(!this.hass||this.clean||!this.walkButton&&!this._walking)return m;let e=r=>E(this.hass,r),t=this._stick??[0,0];return p`<button class="nf-walk-btn ${this._walking?"nf-walk-on":""}" title=${e(this._walking?"walk_stop":"walk")} aria-label=${e(this._walking?"walk_stop":"walk")} aria-pressed=${this._walking} @click=${()=>this.toggleWalk()}>
        ${this._walking?"\u2715":q`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2" /><path d="M10 21l2-6 3 3v5M9 12l1-4 4 1 3 3M8 9l-2 4" /></svg>`}
      </button>
      ${this._walking?p`<div class="nf-stick" @pointerdown=${r=>this.stickMove(r,!0)} @pointermove=${r=>this.stickMove(r)} @pointerup=${()=>this.stickEnd()} @pointercancel=${()=>this.stickEnd()}>
              <span style="transform:translate(${t[0]*34}px, ${t[1]*34}px)"></span>
            </div>
            <p class="nf-walk-hint">${e("walk_hint")}</p>`:m}`}renderLock(){if(!this.lockButton||!this.hass||this.clean)return m;let e=E(this.hass,this._locked?"lock3d_off":"lock3d_on");return p`<button class="nf-lock3d ${this._locked?"nf-lock3d-on":""}" title=${e} aria-label=${e} aria-pressed=${this._locked} @click=${()=>this.toggleLock()}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        ${this._locked?q`<path d="M8 11V8a4 4 0 0 1 8 0v3" />`:q`<path d="M8 11V8a4 4 0 0 1 7.5-2" />`}
      </svg>
    </button>`}renderClock(){if(!this.clock||!this.hass)return m;let e=this.hass.language??navigator.language,t=new Date(this._now),r=new Intl.DateTimeFormat(e,{hour:"2-digit",minute:"2-digit"}).format(t),o=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long"}).format(t);return p`<div class="nf-clock nf-clock-${this.clock}" aria-hidden="true"><b>${r}</b><span>${o}</span></div>`}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return m;let e=E(this.hass,this.clean?"controls_show":"controls_hide");return p`<button
      class="nf-eye ${this.clean?"nf-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?q`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:q`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return m;let t=e.kind==="light"&&e.value<=0;return p`<div class="nf-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${O(this.hass,e.entity)}</span>
      <b>${t?E(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}tapPlate(e,t,r){let o=this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e),i=o?yr(o.gang_entities,B(o.type)?.gangs??0):[];if(i.length===1)return this.onDeviceTap(i[0],t,r);i.length>1&&(this._plate={ids:i,x:t,y:r})}renderPlate(){let e=this._plate;if(!e||!this.hass)return m;let t=this.hass,r=()=>this._plate=null;return p`<div class="nf-menu-backdrop" @click=${r}></div>
      <div class="nf-plate-menu" style="left:${Math.max(8,e.x-110)}px;top:${Math.max(8,e.y-20-e.ids.length*46)}px" role="menu">
        ${e.ids.map((o,i)=>{let s=t.states[o],a=ee(s)||s?.state==="on";return p`<button role="menuitem" class=${a?"on":""} @click=${()=>{r(),this.onDeviceTap(o,e.x,e.y)}}><b>${i+1}</b><span>${O(t,o)}</span><i>${s?Q(t,s):"\u2013"}</i></button>`})}
      </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return m;let t=this.renderRoot.querySelector(".nf-stage"),r=t?.clientWidth??800,o=t?.clientHeight??600,i=Math.max(8,Math.min(r-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return p`<div class="nf-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nf-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        @close=${()=>this._menu=null}
      ></nf-quick-menu>`}onDeviceTap(e,t=0,r=0){if(e.startsWith("lamp:")||this._travel||this.pluginTapped(e))return;if(e.startsWith("gang:"))return this.tapPlate(e.slice(5),t,r);if(e.startsWith("tap:")){let i=this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.slice(4));i?.tap&&wr(this.hass,this,i.tap);return}if(e==="grid"){let i=this.building,s=i?i.energy.grid??Fe(i,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&ge(this,s);return}let o=A(e);if(o==="cover"){this._menu={entity:e,x:t,y:r};return}if(o==="lock"){let i=br(this.hass,e),s=O(this.hass,e);confirm(E(this.hass,i?"lock_confirm_lock":"lock_confirm_unlock",{name:s}))&&this.hass.callService("lock",i?"lock":"unlock",{entity_id:e});return}if(o&&ii.has(o)){if(this.confirmSet.has(e)&&!confirm(E(this.hass,"confirm_switch",{name:O(this.hass,e)})))return;Vi(this.hass,e)}else ge(this,e)}pluginTapped(e){let t=this.hass?.states[e],r=this.placementInfo.get(e);if(!t||!r)return!1;let o=this.building?.floors.find(i=>i.id===r.floorId)?.placements.find(i=>i.entity_id===e);return Io({hass:this.hass,entityId:e,state:t},r,o?.plugin??void 0,{showWindow:(i,s)=>{i&&"hass"in i&&(i.hass=this.hass),this._pluginWindow=i?{node:i,title:s?.title??""}:null},moreInfo:i=>ge(this,i??e)})}renderPluginWindow(){let e=this._pluginWindow;return e?p`<div class="nf-plugin-window" @pointerdown=${t=>t.stopPropagation()}>
      <div class="nf-pw-head"><span>${e.title}</span><button class="nf-pw-close" aria-label=${E(this.hass,"close")} @click=${()=>this._pluginWindow=null}>✕</button></div>
      <div class="nf-pw-body">${e.node}</div>
    </div>`:m}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("nextfloor.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}liveCars(e,t){let r=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="parking")continue;let s=Ks(e,i);if(!s||s.soc===null&&s.range===null&&s.locked===null&&s.climateOn===null)continue;let a=Hr(e,i),l=a?ws(i,a):null,c=i.name||(a?le(e,a):le(e,i.type));r.push({spot:i.id,name:c,at:{floorId:o.id,x:i.x,z:i.z,y:oe(o,i)+(l?.h??.2)+.6},car:s})}return r}liveMedia(e,t){let r=[];for(let o of t.floors){for(let i of o.furniture){let s=this.furnitureLinks?.get(i.id)?.entity;s?.startsWith("media_player.")&&r.push({entity:s,name:i.name||le(e,i.type),at:{floorId:o.id,x:i.x,z:i.z,y:oe(o,i)+i.h+.15}})}for(let i of o.placements)i.entity_id.startsWith("media_player.")&&r.push({entity:i.entity_id,name:i.name||O(e,i.entity_id),at:{floorId:o.id,x:i.x,z:i.z,y:(i.y??1.1)+.15}})}return Yi(e,r)}refreshDayCurves(e){let t=this.hass;if(!t||this._travel||Date.now()-this.curvesAt<6e5)return;this.curvesAt=Date.now();let r=a=>Ft(a,e,zt(a,e),Fe(e,l=>this.furnitureLinks?.get(l.id)?.power??null)),o=Ui(t,r),i=Date.now(),s=i-24*36e5;Ar(t,o,s,i,!0).then(a=>{this.dayCurves=ji(t,a,s,i,r),this.syncDevices(!0)}).catch(()=>this.dayCurves=null)}syncLhCards(e,t,r,o,i){let s=[],a=r.summary,l=a.solar!==null||a.grid!==null||a.battery!==null||a.consumption!==null,c=zn(t),d=[...t.floors].sort((u,h)=>h.elevation-u.elevation)[0];if(this.liveCardsOn&&!this.dimmed&&!this.roomId&&l&&c&&d){let u=0,h=0,f=0;for(let x of d.rooms)for(let[g,y]of x.points)u+=g,h+=y,f++;s.push({kind:"house",at:{floorId:d.id,x:f?u/f:c.x,z:f?h/f:c.z,y:d.height+3.2},summary:a,autarky:r.autarky,curves:this.dayCurves??void 0}),this.refreshDayCurves(t)}if(this.liveCardsOn&&!this.dimmed&&!this.roomId){for(let u of o)s.push({kind:"car",at:u.at,spot:u.spot,name:u.name,car:u.car});for(let u of i)s.push({kind:"media",at:{...u.at,y:u.at.y+.5},media:u})}JSON.stringify(s)!==JSON.stringify(this._liveCards)&&(this._liveCards=s),e.setLiveAnchors(s.map(u=>u.at),s.length?(u,h,f,x)=>this.placeLhCard(u,h,f,x):null)}placeLhCard(e,t,r,o){let i=this.renderRoot.querySelector(`.live-card[data-i="${e}"]`);i&&(i.dataset.x=String(t),i.dataset.y=String(r),i.style.visibility=o?"visible":"hidden",e===this._liveCards.length-1&&js(this.renderRoot))}toggleLhCards(){this._liveCardOn=!this._liveCardOn;try{localStorage.setItem("nextfloor.cards",this._liveCardOn?"1":"0")}catch{}this.syncDevices(!0)}renderLhEnergy(){let e=this._liveEnergy?.summary;if(!e||this.roomId||!this.showEnergy||!this.hass)return m;if(e.consumption===null&&e.grid===null&&e.solar===null&&e.battery===null)return m;let t=o=>E(this.hass,o),r=[];if(e.solar!==null&&r.push({cls:"solar",label:t("energy_solar"),value:X(this.hass,e.solar)}),e.consumption!==null&&r.push({cls:"total",label:t("energy_consumption"),value:X(this.hass,e.consumption)}),e.rest!==void 0&&e.rest!==null&&r.push({cls:"total",label:t("energy_rest"),value:X(this.hass,e.rest)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?X(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);r.push({cls:"battery",label:t("energy_battery"),value:o.join(" \xB7 ")})}if(e.grid!==null){let o=e.grid<0;r.push({cls:o?"export":"grid",label:t(o?"energy_grid_export":"energy_grid_import"),value:X(this.hass,Math.abs(e.grid))})}return e.tariff&&r.push({cls:"tariff",label:t("energy_tariff"),value:`${W(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),p`<div class="nf-energy" aria-live="off">
      ${this.liveCardsOn&&this._liveCards.some(o=>o.kind==="house")?m:r.map(o=>p`<div class="nf-energy-item nf-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?m:p`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${t("flows_hint")} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
            <span>${t("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms!==null?m:p`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleLhCards()}>
            <span>${t("holos")}</span><b>◫</b>
          </button>`}
    </div>`}renderMapCredit(){let e=this.building?.settings.map;return Ss(e)?p`<a class="nf-map-credit" href=${Cr(e).href} target="_blank" rel="noopener">${Cr(e).text}</a>`:m}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return m;let e=Sn[this.heatMode],t=this.heatMode==="temperature",r=t?Ze(this.hass,e.stops[0][0]):e.stops[0][0],o=t?Ze(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?ie(this.hass):e.unit,s=a=>E(this.hass,a);return p`<div class="nf-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="nf-legend-bar" style="background:${Es(this.heatMode)}"></span>
      <span class="nf-legend-range"><span>${W(this.hass,r,0)} ${i}</span><span>${W(this.hass,o,0)} ${i}</span></span>
      ${this.heatValues.size?m:p`<span class="nf-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Tt[this.theme]??Tt.neon,t=this._sky;return e.night[0].map((r,o)=>Math.round(r+(e.day[0][o]-r)*t))}render(){let e=this._sky,t=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,r=Tt[this.theme]??Tt.neon,o=`--nf-sky:${t(r.night[0],r.day[0])};--nf-ground:${t(r.night[1],r.day[1])}`+qi(this.building?.settings.backdrop);return p`<div
      class="nf-stage ${this.roomLabels?"":"nf-no-room-names"} ${this._low?"nf-low":""} ${this.panelOpen?"nf-panel-open":""} ${this._alerts.length?"nf-has-alerts":""} ${this._narrowStage?"nf-narrow":""}"
      style=${o}
    >
      ${this._error?p`<p class="nf-error">${this._error}</p>`:m} ${this.clean?m:this.renderLhEnergy()} ${qs(this.hass,this.roomId||this.panelOpen?[]:this._liveCards,(i,s,a,l)=>this.hass?.callService(i,s,{entity_id:a,...l}))} ${this.clean?m:this.renderLegend()} ${this.renderMapCredit()}
      ${this.renderAlerts()} ${this.clean?m:p`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()}
      ${this.renderMenu()} ${this.renderPlate()} ${this.renderEye()} ${this.renderLock()} ${this.renderWalk()} ${this.renderTravel()} ${this.renderClock()} ${this.renderPluginWindow()}
      ${this.showStats&&this._stats?p`<span class="nf-stats"
            ><b>${this._stats.fps?E(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):E(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?p`(${this._stats.busy.map(i=>E(this.hass,`stats_busy_${i}`)).join(", ")})`:m} ·
            ${E(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${E(this.hass,this._stats.low?"stats_low":"stats_full",{r:W(this.hass,this._stats.pixelRatio,2)})}</span
          >`:m}
    </div>`}static styles=[se,$e,Zs,j`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .nf-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .nf-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
        color: var(--nf-text);
        font: 600 13.5px var(--nf-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: nf-alert-pulse 1.2s ease-in-out infinite;
      }
      .nf-alert-water,
      .nf-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .nf-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .nf-alert-more {
        align-self: center;
        color: var(--nf-muted);
        font-size: 13px;
      }
      @keyframes nf-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .nf-has-alerts .nf-energy {
        top: 58px;
      }
      .nf-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .nf-scenes .nf-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-alert,
        .nf-dev-found {
          animation: none;
        }
      }
      .nf-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: nf;
        background: radial-gradient(ellipse at 50% 35%, var(--nf-sky, var(--nf-bg2)), var(--nf-ground, var(--nf-bg)) 72%);
        transition: background 2s ease;
      }
      .nf-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .nf-canvas:active {
        cursor: grabbing;
      }
      .nf-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .nf-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .nf-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .nf-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--nf-title-font);
        color: var(--nf-text);
        background: var(--nf-chrome);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--nf-shadow);
      }
      .nf-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      .nf-pin-floor b {
        font: 700 15px var(--nf-title-font);
        letter-spacing: -0.01em;
      }
      .nf-pin-floor span {
        font: 500 12px var(--nf-font);
        opacity: 0.78;
      }
      .nf-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome);
        color: var(--nf-muted);
        font: 600 12px var(--nf-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .nf-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: color-mix(in srgb, var(--nf-soft) 14%, transparent);
      }
      .nf-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--nf-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-dev-watt:empty {
        display: none;
      }
      .nf-dev-watt {
        padding: 1px 6px 1px 0;
        color: var(--nf-accent);
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .nf-dev-on .nf-dev-watt {
        color: #2a1a00;
      }
      .nf-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--nf-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .nf-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .nf-person[hidden] {
        display: none;
      }
      .nf-no-room-names .nf-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .nf-stage.nf-low {
        transition: none;
      }
      .nf-low .nf-pin,
      .nf-low .nf-dev,
      .nf-low .nf-dev-on,
      .nf-low .nf-energy-item,
      .nf-low .nf-find input,
      .nf-low .nf-find-list,
      .nf-low .nf-find-btn,
      .nf-low .nf-swipe,
      .nf-low .nf-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .nf-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .nf-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--nf-chrome) 70%, transparent);
        color: var(--nf-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--nf-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .nf-thumb:hover,
      .nf-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .nf-thumb[aria-pressed="true"] {
        border-color: var(--nf-accent);
        box-shadow: var(--nf-shadow), 0 0 0 2px var(--nf-accent);
      }
      .nf-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .nf-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
      }
      .nf-thumb img + span {
        inset: auto 0 0 0;
        padding: 18px 10px 6px;
        color: #fff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.62));
      }
      .nf-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--nf-line);
        border-radius: 8px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .nf-thumbs-compact .nf-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .nf-thumbs-compact .nf-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .nf-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .nf-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .nf-thumbs-small .nf-thumb {
        width: 104px;
      }
      .nf-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .nf-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--nf-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .nf-central-on {
        color: var(--nf-accent);
      }
      .nf-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--nf-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--nf-line);
        border-radius: 16px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .nf-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .nf-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .nf-central-row small {
        opacity: 0.6;
      }
      .nf-central .nf-btn {
        min-width: 64px;
      }
      .nf-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .nf-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nf-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .nf-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .nf-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .nf-low .nf-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .nf-travel-btn {
        position: absolute;
        left: 188px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        font-size: 14px;
        cursor: pointer;
        z-index: 4;
      }
      .nf-travel {
        position: absolute;
        left: 50%;
        bottom: calc(62px + var(--nf-bottom-inset, 0px));
        transform: translateX(-50%);
        width: min(860px, calc(100% - 24px));
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 18px;
        background: rgba(8, 16, 34, 0.82);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.4);
        color: var(--nf-text);
        z-index: 5;
        flex-wrap: wrap;
      }
      .nf-travel button,
      .nf-travel select {
        min-height: 32px;
        border: 0;
        border-radius: 999px;
        padding: 0 10px;
        background: rgba(127, 127, 127, 0.16);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .nf-travel select option {
        color: #111;
      }
      .nf-travel .nf-travel-play {
        width: 36px;
        padding: 0;
        background: var(--nf-accent);
        color: #041018;
      }
      .nf-travel-span[aria-pressed="true"] {
        box-shadow: inset 0 0 0 1px var(--nf-accent);
        color: var(--nf-accent);
      }
      .nf-travel-live {
        color: #ff5a6b !important;
      }
      .nf-travel-when {
        min-width: 92px;
        font-variant-numeric: tabular-nums;
        font-size: 14px;
      }
      .nf-travel-track {
        position: relative;
        flex: 1 1 220px;
        height: 28px;
      }
      .nf-travel-track svg {
        position: absolute;
        inset: 9px 0;
        width: 100%;
        height: 10px;
        fill: var(--nf-accent);
        opacity: 0.55;
        pointer-events: none;
      }
      .nf-travel-track input {
        position: absolute;
        inset: 0;
        width: 100%;
        margin: 0;
        background: transparent;
        accent-color: var(--nf-accent);
      }
      .nf-walk-btn {
        position: absolute;
        left: 144px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        font-size: 16px;
        cursor: pointer;
        z-index: 4;
      }
      .nf-walk-on {
        color: #041018;
        background: var(--nf-accent);
        border-color: var(--nf-accent);
      }
      .nf-stick {
        position: absolute;
        right: 28px;
        bottom: calc(70px + var(--nf-bottom-inset, 0px));
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: rgba(8, 16, 34, 0.45);
        border: 1px solid rgba(160, 240, 255, 0.35);
        display: grid;
        place-items: center;
        touch-action: none;
        z-index: 4;
      }
      .nf-stick span {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: var(--nf-accent);
        opacity: 0.85;
        pointer-events: none;
      }
      .nf-walk-hint {
        position: absolute;
        left: 50%;
        top: 12px;
        transform: translateX(-50%);
        margin: 0;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(8, 16, 34, 0.6);
        color: var(--nf-muted);
        font-size: 12px;
        pointer-events: none;
        z-index: 3;
      }
      .nf-lock3d {
        position: absolute;
        left: 100px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        cursor: pointer;
        z-index: 4;
      }
      .nf-lock3d-on {
        color: #041018;
        background: var(--nf-accent);
        border-color: var(--nf-accent);
      }
      .nf-plugin-window {
        position: absolute;
        right: 12px;
        bottom: 12px;
        z-index: 6;
        width: min(420px, calc(100% - 24px));
        border-radius: 12px;
        overflow: hidden;
        background: rgba(10, 16, 22, 0.92);
        border: 1px solid rgba(127, 208, 255, 0.35);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
        color: #e6f4fb;
      }
      .nf-pw-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 8px 6px 12px;
        font-size: 13px;
      }
      .nf-pw-head span {
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .nf-pw-close {
        border: 0;
        background: transparent;
        color: inherit;
        font-size: 16px;
        cursor: pointer;
        padding: 2px 6px;
      }
      .nf-pw-body {
        line-height: 0;
      }
      .nf-clock {
        position: absolute;
        z-index: 3;
        display: flex;
        flex-direction: column;
        padding: 8px 14px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.55);
        color: var(--nf-text);
        pointer-events: none;
        line-height: 1.1;
      }
      .nf-clock b {
        font-size: clamp(28px, 6cqmin, 64px);
        font-weight: 600;
        font-variant-numeric: tabular-nums;
        letter-spacing: -0.02em;
      }
      .nf-clock span {
        font-size: clamp(12px, 1.8cqmin, 18px);
        color: var(--nf-muted);
      }
      .nf-clock-top_left {
        left: 16px;
        top: 16px;
      }
      .nf-clock-top_right {
        right: 16px;
        top: 16px;
        align-items: flex-end;
      }
      .nf-clock-bottom_left {
        left: 16px;
        bottom: calc(60px + var(--nf-bottom-inset, 0px));
      }
      .nf-clock-bottom_right {
        right: 16px;
        bottom: calc(60px + var(--nf-bottom-inset, 0px));
        align-items: flex-end;
      }
      .nf-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        cursor: pointer;
        z-index: 4;
      }
      .nf-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .nf-eye:hover,
      .nf-eye-clean:hover {
        opacity: 1;
      }
      .nf-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .nf-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(8px);
      }
      .nf-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nf-muted);
        cursor: pointer;
      }
      .nf-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(8px);
      }
      .nf-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nf-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .nf-find-list button:hover,
      .nf-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .nf-find-list b {
        display: block;
        font-weight: 600;
      }
      .nf-find-list small,
      .nf-find-list p {
        color: var(--nf-muted);
        font-size: 12px;
        margin: 0;
      }
      .nf-find-list p {
        padding: 8px 10px;
      }
      .nf-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .nf-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .nf-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .nf-swipe span {
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-swipe b {
        grid-row: 2;
        font: 700 22px var(--nf-title-font);
      }
      .nf-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .nf-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--nf-warm);
      }
.nf-plate-menu {
        position: absolute;
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 220px;
        padding: 6px;
        border-radius: 16px;
        background: var(--nf-bg2, #1c2233);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
      }
      .nf-plate-menu button {
        display: grid;
        grid-template-columns: 24px 1fr auto;
        align-items: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 10px;
        border: 0;
        border-radius: 12px;
        background: none;
        color: var(--nf-text, #e8eeff);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .nf-plate-menu button:hover {
        background: rgba(127, 127, 127, 0.14);
      }
      .nf-plate-menu button.on b {
        background: var(--nf-accent, #37e0ff);
        color: #041018;
      }
      .nf-plate-menu b {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(127, 127, 127, 0.2);
        font-size: 12px;
      }
      .nf-plate-menu i {
        font-style: normal;
        color: var(--nf-muted, #9aa5bd);
        font-size: 13px;
      }
      .nf-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .nf-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .nf-wall {
        position: absolute;
        inset: 56px 12px calc(var(--nf-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: var(--nf-shadow);
        overflow: auto;
      }
      .nf-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: var(--nf-text);
      }
      .nf-wall-head .nf-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .nf-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .nf-wall-tools {
        display: flex;
        gap: 6px;
      }
      .nf-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .nf-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .nf-wall-big > hui-picture-entity-card,
      .nf-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .nf-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .nf-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .nf-wall-cam img,
      .nf-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .nf-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .nf-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: var(--nf-text);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .nf-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      /* a lightning bolt of the weather layer lights up the whole stage for a moment */
      .live-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: radial-gradient(circle at 50% 20%, rgba(235, 242, 255, 0.55), rgba(200, 215, 255, 0.18) 70%);
        pointer-events: none;
      }
      .nf-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--nf-blend);
      }
      .nf-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--nf-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nf-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--nf-line);
        pointer-events: auto;
      }
      .nf-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .nf-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .nf-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--nf-accent);
      }
      .nf-through-on :is(.nf-pin, .nf-dev, .nf-energy, .nf-legend, .nf-thumbs, .nf-scenes, .nf-find-btn, .nf-stats) {
        display: none;
      }
      nf-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .nf-dev-found {
        animation: nf-found 0.6s ease-in-out 4;
      }
      @keyframes nf-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--nf-accent));
        }
      }
      .nf-map-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        z-index: 2;
        padding: 1px 6px;
        border-radius: 6px;
        background: color-mix(in srgb, var(--nf-chrome) 80%, transparent);
        color: var(--nf-soft);
        font-size: 10px;
        text-decoration: none;
      }
      .nf-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--nf-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .nf-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .nf-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
      }
      .nf-legend-none {
        color: var(--nf-warm);
      }
      .nf-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .nf-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--nf-chrome);
        border-left: 3px solid var(--nf-line);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .nf-energy-item span {
        font-size: 11px;
        color: var(--nf-muted);
      }
      .nf-energy-item b {
        font: 700 15px var(--nf-title-font);
      }
      .nf-energy-total {
        border-left-color: #6fd8ff;
      }
      .nf-energy-grid {
        border-left-color: var(--nf-accent);
      }
      .nf-energy-export,
      .nf-energy-solar {
        border-left-color: #ffc633;
      }
      .nf-energy-battery {
        border-left-color: #59ff8c;
      }
      .nf-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--nf-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .nf-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--nf-accent);
      }
      .nf-flow-toggle span {
        display: none;
      }
      .nf-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .nf-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .nf-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container nf (max-width: 900px) {
        .nf-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .nf-legend {
          bottom: auto;
          top: 62px;
        }
        .nf-has-alerts .nf-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nf-panel-open :is(.nf-find-btn, .nf-find, .nf-thumbs, .nf-legend, .nf-stats, .nf-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .nf-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .nf-dev {
          padding: 6px;
        }
        .nf-pin {
          padding: 8px 12px;
        }
      }
      .nf-dev-full .nf-dev-text {
        display: inline;
      }
      .nf-dev-name:empty {
        display: none;
      }
      .nf-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--nf-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .nf-dev-sel {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
      .nf-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--nf-glow, var(--nf-warm));
        box-shadow: 0 0 16px var(--nf-glow, var(--nf-warm));
      }
      .nf-dev-on .nf-dev-icon {
        background: color-mix(in srgb, var(--nf-text) 28%, transparent);
      }
      .nf-dev-on .nf-dev-text {
        color: #2a1a00;
      }
      .nf-dev-na {
        opacity: 0.45;
      }
      .nf-dev-dim {
        opacity: 0.35;
      }
      .nf-dev[hidden],
      .nf-pin[hidden] {
        display: none;
      }
      .nf-pin-active {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      .nf-stats b {
        color: var(--nf-accent);
        font-weight: 700;
      }
      .nf-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--nf-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--nf-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .nf-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--nf-danger);
      }
    `]};customElements.get("nf-view3d")||customElements.define("nf-view3d",Jr);function X(n,e){return Math.abs(e)>=1e3?`${W(n,e/1e3,1)} kW`:`${Math.round(e)} W`}function Qr(n){return n.type==="tv_board"?n.h+.9:n.type==="tv_wall"||n.type==="kitchen_wall"?n.h+.25:n.h+.35}function Lu(n,e){let t=e.attributes.percentage;return e.state==="on"&&typeof t=="number"?`${Math.round(t)} %`:Q(n,e)}var ca;function ua(){let n=new URL("./nextfloor-editor.js?v=0e2edd5c3ac5",new URL(import.meta.url)).href;return ca??=import(n),ca}var Wu=.25,da=n=>Math.round(n*1e3)/1e3,ha=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&I([e,t],r.points));function eo(n,e,t,r,o){let i=ha(n,e,t);if(!i)return[r,o];let s=(a,l)=>I([a,l],i.points);return s(r,o)?[r,o]:s(r,t)?[r,t]:s(e,o)?[e,o]:[e,t]}function Bu(n,e,t,r){return n.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(te(V(i,t),r))<.02&&Math.abs(te(V(a,t),r))<.02}))}var Xr=(n,e)=>Math.abs((n-e+540)%360-180);function pa(n,e,t,r=Wu){let o=ha(n,e.x,e.z);if(!o)return null;let i=o.points,s=Ge(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let d=i[(c+1)%i.length],u=_e(V(d,l));if(u<.3)return;let h=[(d[0]-l[0])/u,(d[1]-l[1])/u],f=[-h[1]*s,h[0]*s],x=te(V([e.x,e.z],l),h);if(x<0||x>u)return;let g=Bu(n,o,l,f)?t/2:0,y=te(V([e.x,e.z],l),f)-g,v=Math.atan2(-f[0],f[1])*180/Math.PI,_=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((P,H)=>Xr(e.rotation,H.rotation)<Xr(e.rotation,P.rotation)?H:P);if(Xr(e.rotation,_.rotation)>50)return;let $=y-_.extent;Math.abs($)>r||a&&Math.abs($)>=Math.abs(a.gap)||(a={x:da(e.x-f[0]*$),z:da(e.z-f[1]*$),rotation:(Math.round(_.rotation)%360+360)%360,gap:$})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}function Pn(n,e,t){let r=structuredClone(n);for(let o of r.floors){let i=o.furniture.find(s=>s.id===e);i&&t(i,o)}return r}function Dn(n,e,t){let r=structuredClone(n);for(let o of r.floors){let i=o.placements.find(s=>s.entity_id===e);i&&t(i,o)}return r}function fa(n,e){let t=structuredClone(n);for(let r of t.floors)r.furniture=r.furniture.filter(o=>o.id!==e);return t}function ma(n,e){let t=structuredClone(n);for(let r of t.floors)r.placements=r.placements.filter(o=>o.entity_id!==e);return t}function ga(n,e,t,r){return Dn(n,e,(o,i)=>{[o.x,o.z]=eo(i,o.x,o.z,t,r)})}function _a(n,e,t,r){let o=n.settings.wall_interior??.12;return Pn(n,e,(i,s)=>{[i.x,i.z]=eo(s,i.x,i.z,t,r);let a=pa(s,i,o);a&&Object.assign(i,a)})}var to=(n,e)=>((n+e)%360+360)%360,ba=n=>Number.parseFloat(n.replace(",",".")),Ot=(n,e)=>Math.round(n*10**e)/10**e;function no(n){let{min:e,max:t,accepts:r=()=>!0}=n,o=i=>{let s=ba(i.target.value);!Number.isFinite(s)||!r(s)||n.apply(t===void 0?s:Math.min(t,Math.max(e,s)))};return p`<label class="nf-size" title=${n.title}
    >${n.label}
    <input type="number" inputmode="decimal" step=${n.step} min=${e} max=${t??m} .value=${String(Ot(n.value,2))} @change=${o} />
  </label>`}var wa=(n,e)=>p`<button class="nf-chip" @click=${e}>${n.t("height_auto")}</button>`,va=(n,e)=>p`<button class="nf-chip" @click=${()=>e(-n)}>↺ ${n}°</button><button class="nf-chip" @click=${()=>e(n)}>↻ ${n}°</button>`;function Vu(n,e){let t=n.building.floors.find(s=>s.furniture.some(a=>a.id===e)),r=t?.furniture.find(s=>s.id===e);if(!t||!r)return m;let o=(s,a)=>no({label:n.t(a),title:n.t(`size_${s}`),value:r[s],step:.05,min:.05,accepts:l=>l>0,apply:l=>n.editFurniture(e,c=>c[s]=Ot(l,3))}),i=ei(r)?p`${no({label:"\u2195",title:n.t("mount_height"),value:r.mount_y??oe(t,r),step:.05,min:0,accepts:s=>s>=0,apply:s=>n.editFurniture(e,a=>a.mount_y=Ot(s,3))})}
      ${r.mount_y!=null?wa(n,()=>n.editFurniture(e,s=>s.mount_y=null)):m}`:m;return p`${o("w","size_short_w")}${o("d","size_short_d")}${o("h","size_short_h")} ${i}`}function Ku(n,e){let t=n.building.floors.find(l=>l.placements.some(c=>c.entity_id===e)),r=t?.placements.find(l=>l.entity_id===e);if(!t||!r)return m;let o=A(e),i=(l,c,d)=>p`<select class="nf-size-select" title=${n.t(l)} @change=${u=>n.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
      ${c.map(([u,h])=>p`<option value=${u} ?selected=${u===d}>${h}</option>`)}
    </select>`,s=["ceiling","floor","table","wall"].map(l=>[l,n.t(`lamp_${l}`)]),a=o?qe(o,ne(t,r.x,r.z),o==="light"?r.mount??"ceiling":null):1;return p`${o==="light"?i("lamp_mount",s,r.mount??"ceiling"):m}
    ${no({label:n.t("size_short_h"),title:n.t("marker_height"),value:r.y??a,step:.05,min:0,accepts:l=>l>=0,apply:l=>n.editDevice(e,c=>c.y=Ot(l,3))})}
    ${r.y!==null?wa(n,()=>n.editDevice(e,l=>l.y=null)):m}`}function ya(n,e,t){let r=n.t,o;if(e){let i=n.building.floors.flatMap(s=>s.furniture).find(s=>s.id===e)?.type;o=p`<span>${i?le(n.hass,i):""}</span>
      ${Vu(n,e)} ${va(45,s=>n.turnFurniture(e,s))}
      <button class="nf-chip" title=${r("furn_mirror_hint")} @click=${()=>n.editFurniture(e,s=>s.mirror=!s.mirror)}>⇋ ${r("furn_mirror")}</button>
      <button class="nf-chip nf-danger-chip" @click=${()=>n.removeFurniture(e)}>${r("delete")}</button>`}else t?o=p`<span>${O(n.hass,t)}</span>
      ${Ku(n,t)} ${va(45,i=>n.turnDevice(t,i))}
      <button class="nf-chip nf-danger-chip" @click=${()=>n.removeDevice(t)}>${r("delete")}</button>`:o=p`<span>${r("furnish_hint")}</span>`;return p`<div class="nf-furnish-bar">${o}<button class="nf-chip nf-chip-on" @click=${()=>n.finish()}>${r("done")}</button></div>`}var xa=q`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`;var De=(n,e)=>({name:n,fallback:e,read:t=>e?t!=="0":t==="1",write:t=>t?"1":"0"}),ct=(n,e,t)=>({name:n,fallback:t,read:r=>e.find(o=>o===r)??t,write:r=>r}),ro={explode:De("explode",!0),keepRoof:De("roof",!1),solidWalls:De("solid_walls",!1),quality:ct("quality",["auto","low","high"],"auto"),stats:De("stats",!1),markers:ct("markers",["none","important","all"],"important"),heat:ct("heat",["none","temperature","humidity","co2","values"],"none"),theme:ct("theme",xn,"neon"),clock:ct("clock",["none","top_left","top_right","bottom_left","bottom_right"],"none"),accent:{name:"accent",fallback:null,read:n=>/^#[0-9a-f]{6}$/i.test(n)?n:null,write:n=>n??""},floorStack:ct("floor_stack",["dim","stacked","single"],"dim"),roomNames:De("room_names",!0),clean:De("clean",!1),navWrap:De("nav_wrap",!1),weather:De("weather",!0)};function ka(){try{return localStorage}catch{return null}}var Hn=class{storage;constructor(e){this.storage=e}raw(e){try{return this.storage?.getItem(`nextfloor.${e}`)??null}catch{return null}}load(e=""){let t={};for(let r of Object.keys(ro)){let o=ro[r],i=this.raw(o.name);t[r]=i===null?o.fallback:o.read(i)}return new URLSearchParams(e).has("nf_stats")&&(t.stats=!0),t}save(e,t){let r=ro[e];try{this.storage?.setItem(`nextfloor.${r.name}`,r.write(t))}catch{}}};var Sa=j`
  .nf-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 6px;
    border-radius: 50%;
    background: #ffb547;
    box-shadow: 0 0 8px #ffb547;
    vertical-align: middle;
  }
  :host {
    display: block;
    /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
    height: 100vh;
    height: 100dvh;
    background: var(--nf-bg);
  }
  .nf-app {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }
  .nf-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 6px 14px 6px 4px;
    min-height: 56px;
    border-bottom: var(--app-header-border-bottom, 1px solid var(--nf-line));
    background: var(--app-header-background-color, var(--nf-chrome-solid));
    color: var(--app-header-text-color, var(--nf-text));
    flex-wrap: wrap;
  }
  ha-menu-button {
    color: var(--app-header-text-color, var(--nf-text));
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 20px;
    margin: 0 4px 0 8px;
    white-space: nowrap;
  }
  .nf-mark {
    width: 26px;
    height: 28px;
    color: var(--nf-accent);
  }
  .nf-notices {
    display: grid;
    gap: 6px;
    padding: 8px 14px 0;
  }
  .nf-notice {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
    padding: 9px 12px;
    border-radius: 10px;
    border: 1px solid var(--nf-line);
    background: var(--nf-chrome-solid);
    font-size: 13.5px;
  }
  .nf-notice span {
    flex: 1;
    min-width: 200px;
  }
  .nf-notice-warn {
    border-color: color-mix(in srgb, var(--nf-warm) 60%, transparent);
    color: var(--nf-warm);
  }
  .nf-notice-error {
    border-color: color-mix(in srgb, var(--nf-danger) 60%, transparent);
    color: var(--nf-danger);
    word-break: break-word;
  }
  .nf-chip-on {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
  .nf-furnish-bar {
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: calc(100% - 24px);
    padding: 8px 10px 8px 16px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    font-size: 13.5px;
  }
  .nf-size-select {
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 999px;
    padding: 4px 10px;
  }
  .nf-size {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-size input {
    width: 58px;
    padding: 5px 6px;
    border: 1px solid rgba(127, 127, 127, 0.35);
    border-radius: 8px;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 13px;
  }
  .nf-danger-chip {
    color: var(--nf-danger);
  }
  .nf-grow {
    flex: 1;
  }
  .nf-save {
    font-size: 12.5px;
    color: var(--nf-muted);
  }
  .nf-view-opts {
    display: contents;
  }
  .nf-opts-btn {
    display: none;
  }
  /* phones: the view options fold behind ⚙ (one header row instead of three) */
  @media (max-width: 700px) {
    .nf-opts-btn {
      display: grid;
      place-items: center;
      order: 3;
      width: 36px;
      height: 36px;
      border: 1px solid var(--nf-line);
      border-radius: 10px;
      background: transparent;
      color: var(--nf-text);
      font-size: 17px;
      cursor: pointer;
    }
    .nf-opts-btn[aria-expanded="true"] {
      color: var(--nf-accent);
      border-color: var(--nf-accent);
    }
    .nf-view-opts {
      display: none;
    }
    .nf-view-opts.nf-opts-open {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      order: 5;
      width: 100%;
    }
    .nf-version {
      order: 4;
    }
    .nf-header .nf-grow {
      display: none;
    }
  }
  /* the installed version, at the far right of the header */
  .nf-version {
    margin-left: auto;
    font-size: 11.5px;
    color: var(--nf-muted);
    white-space: nowrap;
    opacity: 0.8;
  }
  .nf-save-error {
    color: var(--nf-danger);
  }
  .nf-body {
    flex: 1;
    min-height: 0;
  }
  /* the colour well beside the look: a small round swatch, the reset arrow next to it */
  .nf-accent-pick {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 0 4px;
  }
  .nf-clock-pick {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 0 4px 0 10px;
    font-size: 14px;
  }
  .nf-clock-pick select {
    border: 0;
    background: none;
    color: var(--nf-text);
    font: inherit;
    font-size: 13px;
    padding: 6px 2px;
    cursor: pointer;
  }
  .nf-clock-pick option {
    color: #111;
  }
  .nf-accent-pick input[type="color"] {
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid var(--nf-line);
    border-radius: 50%;
    background: none;
    cursor: pointer;
  }
  .nf-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 2px;
  }
  .nf-accent-pick input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
  .nf-accent-reset {
    border: none;
    background: none;
    color: var(--nf-muted);
    cursor: pointer;
    font-size: 14px;
    padding: 0 2px;
  }
  .nf-nav {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 14px;
    overflow-x: auto;
    scrollbar-width: none;
    flex: none;
  }
  /* a desktop shows a thin scrollbar while the pointer rests on the bar */
  .nf-nav:hover {
    scrollbar-width: thin;
  }
  /* wrapped: several lines, at most about three before the bar itself scrolls */
  .nf-nav-wrap {
    flex-wrap: wrap;
    overflow-x: visible;
    overflow-y: auto;
    max-height: 132px;
  }
  .nf-nav-floor {
    flex: none;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--nf-muted);
    margin-left: 6px;
  }
  .nf-nav-toggle {
    flex: none;
    margin-left: auto;
    position: sticky;
    right: 0;
    min-width: 34px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .nf-nav .nf-chip {
    box-shadow: none;
    border: 1px solid var(--nf-line);
  }
  .nf-sep {
    flex: none;
    width: 1px;
    margin: 4px 4px;
    background: var(--nf-line);
  }
  .nf-stage-wrap {
    position: relative;
    flex: 1;
    min-height: 0;
    display: flex;
    container-type: size;
    container-name: nf;
  }
  .nf-stage-wrap nf-view3d {
    flex: 1;
  }
  .nf-room-panel {
    position: absolute;
    top: 58px;
    right: 14px;
    bottom: 14px;
    width: min(360px, calc(100% - 28px));
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    pointer-events: none;
  }
  /* folded, the panel is only its title bar: on a wide stage it drops to the bottom edge, above the switches, instead of hanging in the picture */
  .nf-room-panel[folded] {
    justify-content: flex-end;
    bottom: 62px;
  }
  .nf-clean .nf-room-panel[folded] {
    bottom: 14px;
  }
  /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
  nf-view3d {
    --nf-bottom-inset: 52px;
  }
  .nf-clean nf-view3d {
    --nf-bottom-inset: 0px;
  }
  .nf-furnish-bar {
    bottom: 68px;
  }
  /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
  @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
    .nf-room-panel {
      top: auto;
      left: 8px;
      right: 8px;
      bottom: 8px;
      width: auto;
      height: 55%;
      justify-content: flex-end;
    }
    .nf-room-open .nf-overlay {
      display: none;
    }
  }
  .nf-overlay {
    position: absolute;
    right: 12px;
    bottom: 12px;
    /* room for the search button and the row beside it (eye, lock, walk, time travel) */
    left: 236px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    align-items: center;
    pointer-events: none;
  }
  .nf-overlay > * {
    pointer-events: auto;
  }
  .nf-quality button {
    padding: 5px 11px;
    min-height: 30px;
    font-size: 13px;
  }
  .nf-message,
  .nf-empty {
    padding: 32px 20px;
    color: var(--nf-muted);
    text-align: center;
  }
  .nf-empty {
    display: grid;
    justify-items: center;
    gap: 12px;
    margin: auto;
  }
`;var oo=class extends Z{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_prefs:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_optsOpen:{state:!0}};data=new je(this);store=new Hn(ka());constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("nf-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._prefs=this.store.load(location.search),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._optsOpen=!1}t=(e,t)=>E(this.hass,e,t);setPref(e,t){this._prefs={...this._prefs,[e]:t},this.store.save(e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.style.colorScheme=fn(this.hass),this.data.setHass(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}openFloor(e){this._floorId=e,this._roomId=null}onRoomTap(e){let{floorId:t,roomId:r}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t)return this.openFloor(t);r&&(this._roomId=r===this._roomId?null:r)}furnishHost={hass:void 0,building:void 0,t:this.t,editFurniture:(e,t)=>this.applyEdit(r=>Pn(r,e,t)),editDevice:(e,t)=>this.applyEdit(r=>Dn(r,e,t)),turnFurniture:(e,t)=>this.applyEdit(r=>Pn(r,e,o=>o.rotation=to(o.rotation,t))),turnDevice:(e,t)=>this.applyEdit(r=>Dn(r,e,o=>o.rotation=to(o.rotation??0,t))),removeFurniture:e=>{this.applyEdit(t=>fa(t,e)),this._selFurniture=null},removeDevice:e=>{this.applyEdit(t=>ma(t,e)),this._selDevice=null},finish:()=>{this._furnish=!1,this._selFurniture=null,this._selDevice=null}};applyEdit(e){let t=this.data.building;t&&this.data.edit(e(t))}view3d(){return this.renderRoot.querySelector("nf-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&un(this.hass,this))return m;let e=this.data.building,t=this._prefs.clean&&this._mode==="view",r=m;return e&&(this._mode==="editor"&&this.isAdmin?r=this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?r=this.renderExtensions():r=this.renderView(e)),p`<div class="nf-app ${t?"nf-clean":""}" style=${this._prefs.accent?`--nf-accent:${this._prefs.accent}`:""}>
      ${t?m:p`${this.renderHeader(e)}${this.renderNotices()}`}
      ${this.data.error&&!e?p`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>`:m}
      ${!e&&!this.data.error?p`<p class="nf-message">${this.t("loading")}</p>`:m}
      ${r}
    </div>`}choiceRow(e,t,r,o,i,s=m){return p`<div class="nf-seg nf-quality" role=${e?"group":m} aria-label=${e?this.t(e):m}>
      ${t.map(a=>p`<button aria-pressed=${r===a} title=${e==="markers"?this.t("markers"):m} @click=${()=>i(a)}>${o(a)}</button>`)}${s}
    </div>`}accentPicker(){let e=this._prefs.accent;return p`<label class="nf-accent-pick" title=${this.t("accent_hint")}>
      <input type="color" .value=${e??"#37e0ff"} aria-label=${this.t("accent")} @input=${t=>this.setPref("accent",t.target.value)} />
      ${e?p`<button class="nf-accent-reset" title=${this.t("accent_reset")} aria-label=${this.t("accent_reset")} @click=${()=>this.setPref("accent",null)}>↺</button>`:m}
    </label>`}renderViewOptions(){let e=this._prefs;return p`<button class="nf-opts-btn" aria-expanded=${this._optsOpen} title=${this.t("view_options")} aria-label=${this.t("view_options")} @click=${()=>this._optsOpen=!this._optsOpen}>⚙</button>
      <div class="nf-view-opts ${this._optsOpen?"nf-opts-open":""}">
        ${this.choiceRow("quality",["auto","low","high"],e.quality,t=>this.t(`quality_${t}`),t=>this.setPref("quality",t))}
        ${this.choiceRow("theme",xn,e.theme,t=>this.t(`theme_${t}`),t=>this.setPref("theme",t),this.accentPicker())}
        ${this.choiceRow("markers",["none","important","all"],e.markers,t=>this.t(`markers_${t}`),t=>this.setPref("markers",t))}
        <label class="nf-seg nf-clock-pick" title=${this.t("clock")}
          >🕒
          <select aria-label=${this.t("clock")} @change=${t=>this.setPref("clock",t.target.value)}>
            ${["none","top_left","top_right","bottom_left","bottom_right"].map(t=>p`<option value=${t} ?selected=${e.clock===t}>${this.t(`clock_${t}`)}</option>`)}
          </select>
        </label>
        <div class="nf-seg nf-quality">
          <button aria-pressed=${e.stats} title=${this.t("fps_title")} @click=${()=>this.setPref("stats",!e.stats)}>${this.t("fps")}</button>
        </div>
      </div>`}renderHeader(e){let t=this.data.saveState,r=(i,s,a="")=>p`<button role="tab" class=${a} aria-pressed=${this._mode===i} @click=${()=>this.setMode(i)}>${s}</button>`,o=t==="saving"?"saving":t==="saved"?"saved":"save_error";return p`<header class="nf-header">
      <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
      <h1>${xa}NextFloor</h1>
      ${this.isAdmin?p`<div class="nf-seg" role="tablist">${r("view",this.t("view"))}${r("editor",this.t("editor"))}${r("extensions",`\u2726 ${this.t("ext_tab")}`,"nf-tab-ext")}</div>`:m}
      <span class="nf-grow"></span>
      ${this._mode==="view"&&e?.floors.some(i=>i.rooms.length)?this.renderViewOptions():m}
      ${this._mode==="editor"&&t!=="idle"?p`<span class="nf-save nf-save-${t}">${this.t(o)}</span>`:m}
      <span class="nf-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
    </header>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(e.versionGap==="frontend"?p`<div class="nf-notice nf-notice-warn">
              ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
              <button class="nf-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
            </div>`:p`<div class="nf-notice nf-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(p`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(p`<div class="nf-notice">
        <span>${this.t("draft_found",{time:r})}</span>
        <button class="nf-btn nf-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
        <button class="nf-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
      </div>`)}return t.length>0?p`<div class="nf-notices">${t}</div>`:m}whenEditorLoaded(e){return this._editorReady?e():(ua().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),p`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){return this.whenEditorLoaded(()=>p`<nf-extensions class="nf-body" .hass=${this.hass} .packs=${this.data.packs} .plugins=${this.data.building?.settings.plugins??[]}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @plugins-changed=${e=>this.applyEdit(t=>({...t,settings:{...t.settings,plugins:e.detail}}))}></nf-extensions>`)}renderEditor(e){return this.whenEditorLoaded(()=>p`<nf-editor
        class="nf-body"
        .hass=${this.hass}
        .building=${e}
        .narrow=${this.narrow}
        .packs=${this.data.packs}
        @packs-changed=${()=>{this.data.reloadPacks()}}
        @building-changed=${t=>this.data.edit(t.detail.building)}
      ></nf-editor>`)}onNavWheel=e=>{if(this._prefs.navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderNav(e){let t=e.floors.filter(l=>!this._floorId||l.id===this._floorId),r=e.floors.length>1,o=this._prefs.navWrap,i=r?p`<button class="nf-chip" aria-pressed=${this._floorId===null} @click=${()=>this.openFloor(null)}>${this.t("all_floors")}</button>
          ${[...e.floors].reverse().map(l=>p`<button class="nf-chip" aria-pressed=${l.id===this._floorId} @click=${()=>this.openFloor(l.id)}>${l.name}</button>`)}
          <span class="nf-sep"></span>`:m,s=t.flatMap(l=>[t.length>1&&l.rooms.length?p`<span class="nf-nav-floor">${l.name}</span>`:m,...l.rooms.map(c=>p`<button
          class="nf-chip nf-room-chip"
          aria-pressed=${c.id===this._roomId}
          @click=${()=>{r&&(this._floorId=l.id),this._roomId=c.id===this._roomId?null:c.id}}
        >
          ${c.name}
        </button>`)]),a=this.t(o?"nav_row":"nav_wrap");return p`<nav class="nf-nav ${o?"nf-nav-wrap":""}" @wheel=${this.onNavWheel}>
      ${i}${s}
      <button class="nf-chip nf-nav-toggle" title=${a} aria-label=${a} aria-pressed=${o} @click=${()=>this.setPref("navWrap",!o)}>${o?"\u2194":"\u2261"}</button>
    </nav>`}toggleChip(e,t,r){return p`<button class="nf-chip" aria-pressed=${this._prefs[e]} title=${r?this.t(r):m} @click=${()=>this.setPref(e,!this._prefs[e])}>${this.t(t)}</button>`}renderOverlay(e){let t=this._prefs,r=this.t,o=(l,c)=>p`<div class="nf-seg">${[l,c].map(([d,u,h])=>p`<button aria-pressed=${d} @click=${u}>${h}</button>`)}</div>`,i=["none","temperature","humidity","co2","values"],s=["dim","stacked","single"],a=e.floors.length>1;return p`<div class="nf-overlay">
      <div class="nf-seg">
        ${["auto","cut","slope"].map(l=>p`<button aria-pressed=${this._wallMode===l} title=${l==="slope"?r("walls_slope_hint"):m} @click=${()=>this._wallMode=l}>${r(`walls_${l}`)}</button>`)}
      </div>
      <div class="nf-seg"><button aria-pressed=${t.solidWalls} title=${r("walls_solid_hint")} @click=${()=>this.setPref("solidWalls",!t.solidWalls)}>${r("walls_solid")}</button></div>
      ${a&&!this._floorId?o([t.explode,()=>this.setPref("explode",!0),r("floors_apart")],[!t.explode,()=>this.setPref("explode",!1),r("floors_stacked")]):m}
      ${!this._floorId&&e.settings.roof.type!=="none"?p`<div class="nf-seg"><button aria-pressed=${t.keepRoof} title=${r("roof_keep_hint")} @click=${()=>this.setPref("keepRoof",!t.keepRoof)}>${r("roof_keep")}</button></div>`:m}
      ${a&&this._floorId?p`<div class="nf-seg" role="group" aria-label=${r("card_floor_stack")}>
            ${s.map(l=>p`<button aria-pressed=${t.floorStack===l} @click=${()=>this.setPref("floorStack",l)}>${r(`floor_stack_short_${l}`)}</button>`)}
          </div>`:m}
      <div class="nf-seg" role="group" aria-label=${r("heatmap")}>
        ${i.map(l=>p`<button aria-pressed=${t.heat===l} @click=${()=>this.setPref("heat",l)}>${r(l==="none"?"heat_off":`heat_short_${l}`)}</button>`)}
      </div>
      ${this.toggleChip("roomNames","room_names_short")}
     
      ${this.toggleChip("weather","weather_short","weather_hint")}
      ${this._roomId||this._floorId&&a?p`<button class="nf-chip" @click=${()=>this.back()}>${r("back")}</button>`:m}
    </div>`}renderView(e){if(!e.floors.some(o=>o.rooms.length))return p`<div class="nf-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?p`<button class="nf-btn nf-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:m}
      </div>`;let t=this._prefs,r=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null;return this.furnishHost.hass=this.hass,this.furnishHost.building=e,p`
      ${t.clean?m:this.renderNav(e)}
      <div class="nf-stage-wrap ${this._roomId?"nf-room-open":""}">
        <nf-view3d
          class="nf-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${t.floorStack}
          .roomLabels=${t.roomNames}
          .clean=${t.clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>this.setPref("clean",!t.clean)}
          ?weather=${t.weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .solidWalls=${t.solidWalls}
          .explode=${t.explode}
          .keepRoof=${t.keepRoof}
          .markerMode=${t.markers}
          .heatMode=${t.heat}
          .theme=${kn(t.theme,this.hass?.states["sun.sun"]?.state)}
          .clock=${t.clock==="none"?null:t.clock}
          .lockButton=${!0}
          .walkButton=${!0}
          .travelButton=${!0}
          .accent=${t.accent}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${o=>this.applyEdit(i=>_a(i,o.detail.id,o.detail.x,o.detail.z))}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${o=>this.applyEdit(i=>ga(i,o.detail.id,o.detail.x,o.detail.z))}
          .quality=${t.quality}
          ?showStats=${t.stats}
          @room-tap=${this.onRoomTap}
            @floor-tap=${o=>this.openFloor(o.detail.floorId)}
          @back=${()=>this.back()}
        ></nf-view3d>
        ${r?p`<nf-room-panel
              class="nf-room-panel"
              .hass=${this.hass}
              .room=${r}
              .floor=${e.floors.find(o=>o.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${Xe(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:m}
        ${t.clean?m:this.renderOverlay(e)}
        ${this._furnish?ya(this.furnishHost,this._selFurniture,this._selDevice):m}
      </div>
    `}static styles=[se,$e,Sa]};customElements.get("nextfloor-panel")||customElements.define("nextfloor-panel",oo);var Gu=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/,Ma=(n,e)=>Number(n)*60+Number(e);function Nt(n,e,t=new Date){if(!n||n==="off")return!1;if(n==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let r=Gu.exec(n.trim());if(!r)return!1;let o=Ma(r[1],r[2]),i=Ma(r[3],r[4]),s=t.getHours()*60+t.getMinutes();return o>i?s>=o||s<i:s>=o&&s<i}var In=class{host;cleanTimer;idleTimer;nightTimer;constructor(e){this.host=e}armClean(e=!1){clearTimeout(this.cleanTimer);let t=this.host.config()?.controls_hide_after??0;t>0&&(e&&this.host.isClean()&&this.host.setClean(!1),this.cleanTimer=setTimeout(()=>this.host.setClean(!0),t*1e3))}stopClean(){clearTimeout(this.cleanTimer)}armIdle(){clearTimeout(this.idleTimer);let e=this.host.config()?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.host.goHome(),e*1e3))}touched(){this.host.isOrbit()&&this.host.setOrbit(!1),this.armIdle(),this.armClean(!0)}start(){this.armIdle(),this.nightTimer=setInterval(()=>this.host.setNight(Nt(this.host.config()?.night,this.host.hass())),6e4)}stop(){clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}};function $a(n,e){return n?n.floors.filter(t=>(e===null||t.id===e)&&t.rooms.length>0).map(t=>({floorId:t.id,floorName:t.name,rooms:t.rooms.map(r=>({id:r.id,name:r.name||"\u2013",floorId:t.id}))})):[]}var Ea=j`
  ha-card {
    overflow: hidden;
    background: var(--nf-bg);
    height: 100%;
  }
  /* night (kiosk): the whole card dimmed */
  ha-card.nf-night .nf-card-body {
    filter: brightness(0.55);
  }
  .nf-card-body {
    position: relative;
    display: flex;
    height: 100%;
    container-type: size;
    container-name: nf;
  }
  nf-view3d {
    flex: 1;
  }
  .nf-card-msg {
    margin: auto;
    color: var(--nf-muted);
    padding: 16px;
    text-align: center;
  }
  /* the room buttons: a row along the top, clear of the toggles at the left and the corner buttons at the right */
  .nf-card-rooms {
    position: absolute;
    top: 8px;
    left: 56px;
    right: 56px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 6px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: none;
  }
  /* with the room's side panel open the row ends where the panel starts */
  @container nf (min-width: 700px) {
    .nf-card-rooms-beside {
      right: 372px;
    }
  }
  .nf-card-rooms::-webkit-scrollbar {
    display: none;
  }
  .nf-card-rooms button {
    flex: none;
  }
  .nf-card-rooms-floor {
    flex: none;
    color: var(--nf-soft);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-left: 6px;
  }
  .nf-card-controls {
    position: absolute;
    left: 60px;
    right: 10px;
    bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    pointer-events: none;
  }
  .nf-card-controls > * {
    pointer-events: auto;
  }
  .nf-card-full {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 12px;
    background: var(--nf-chrome);
    color: var(--nf-text);
    box-shadow: var(--nf-shadow);
    font-size: 18px;
    cursor: pointer;
  }
  .nf-card-dash {
    width: auto;
    min-width: 38px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 600;
  }
  .nf-card-dash-2 {
    right: 56px;
  }
  .nf-card-panel {
    position: absolute;
    top: 10px;
    right: 10px;
    bottom: 10px;
    width: min(340px, calc(100% - 20px));
    display: flex;
    flex-direction: column;
    pointer-events: none;
  }
  /* folded, only the title bar is left: it drops to the bottom edge instead of hanging in the picture */
  .nf-card-panel[folded] {
    justify-content: flex-end;
  }
  /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
  @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
    .nf-card-panel {
      top: auto;
      left: 8px;
      right: 8px;
      bottom: 8px;
      width: auto;
      height: 55%;
      justify-content: flex-end;
    }
  }
`;var Aa;function Ra(){let n=new URL("./nextfloor-card-editor.js?v=a146e3b0ceed",new URL(import.meta.url)).href;return Aa??=import(n),Aa}var io=class extends Z{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;data=new je(this);kiosk=new In({config:()=>this._config,hass:()=>this.hass,setClean:e=>this._clean=e,isClean:()=>this._clean,setOrbit:e=>this._orbit=e,isOrbit:()=>this._orbit,setNight:e=>this._night=e,goHome:()=>this.returnHome()});constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._clean=!1,this._night=!1,this._orbit=!1}view3d(){return this.shadowRoot?.querySelector("nf-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.kiosk.start()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),this.kiosk.stop()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Ra(),document.createElement("nextfloor-card-editor")}static getStubConfig(){return{type:"custom:nextfloor-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=Nt(e.night,this.hass),this._clean=e.controls_hidden===!0,this.kiosk.armClean(),this.kiosk.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&(this.style.colorScheme=fn(this.hass)),!e.has("hass")||!this.hass)return;this.data.setHass(this.hass);let t=Nt(this._config?.night,this.hass);t!==this._night&&(this._night=t)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}t=e=>E(this.hass,e);stage(){let e=this.data.building,t=this._config,r=this._floorId===void 0?t?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(a=>a.id===r)?r:null,i=!!this._roomId&&t?.room_panel!==!1,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1;return{floorId:o,walls:this._walls??t?.walls??"auto",heat:this._heat??t?.heatmap??"none",explode:this._explode??t?.explode??!0,canGoBack:s,showBar:!!e&&!this._clean&&(s||!!t?.controls&&!i)}}shows(e){let t=this._config?.controls;return t===!0||Array.isArray(t)&&t.includes(e)}renderBar(e){let t=this.data.building,r=this.t,o=["temperature","humidity","co2"].filter(s=>this.shows(s)),i=(s,a)=>p`<div class="nf-seg" role=${s?"group":m} aria-label=${s??m}>${a.map(([l,c,d])=>p`<button aria-pressed=${l} @click=${c}>${d}</button>`)}</div>`;return p`<div class="nf-card-controls">
      ${e.canGoBack?p`<button class="nf-chip" @click=${()=>this.back()}>${r("back")}</button>`:m}
      ${this.shows("walls")?i(void 0,[[e.walls==="auto",()=>this._walls="auto",r("walls_auto")],[e.walls==="cut",()=>this._walls="cut",r("walls_cut")],[e.walls==="slope",()=>this._walls="slope",r("walls_slope")]]):m}
      ${this.shows("floors")&&t.floors.length>1&&!e.floorId?i(void 0,[[e.explode,()=>this._explode=!0,r("floors_apart")],[!e.explode,()=>this._explode=!1,r("floors_stacked")]]):m}
      ${o.length>0?i(r("heatmap"),["none",...o].map(s=>[e.heat===s,()=>this._heat=s,r(s==="none"?"heat_off":`heat_short_${s}`)])):m}
    </div>`}renderRoomButtons(e){let t=this.data.building;if(!this._config?.room_buttons||!t||this._clean)return m;let r=$a(t,e.floorId);if(!r.length)return m;let o=r.length>1,i=(s,a)=>{this.canSwitch&&s!==e.floorId&&(this._floorId=s),this._roomId=a===this._roomId?null:a};return p`<div class="nf-card-rooms ${this._roomId&&this._config?.room_panel!==!1?"nf-card-rooms-beside":""}" role="group" aria-label=${this.t("card_room_buttons")}>
      ${r.map(s=>p`${o?p`<span class="nf-card-rooms-floor">${s.floorName}</span>`:m}${s.rooms.map(a=>p`<button class="nf-chip" aria-pressed=${a.id===this._roomId} @click=${()=>i(s.floorId,a.id)}>${a.name}</button>`)}`)}
    </div>`}renderCorners(){let e=this._config,t=this.t,r=this._clean||!!this._roomId&&e?.room_panel!==!1;return p`${e?.fullscreen_button&&!r?p`<button class="nf-card-full" title=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
          ${this._fullscreen?"\u2715":"\u26F6"}
        </button>`:m}
    ${e?.dashboard&&!r?p`<button class="nf-card-full nf-card-dash ${e.fullscreen_button?"nf-card-dash-2":""}" title=${e.dashboard_label||e.dashboard} aria-label=${e.dashboard_label||e.dashboard} @click=${()=>this.openDashboard(e.dashboard)}>
          ${e.dashboard_label?p`<span>${e.dashboard_label}</span>`:"\u2302"}
        </button>`:m}`}renderStage(e){let t=this.data.building,r=this._config,o=()=>{this._clean=!this._clean,this._clean?this.kiosk.stopClean():this.kiosk.armClean()},i=r?.controls_hidden!==void 0||(r?.controls_hide_after??0)>0;return p`<nf-view3d
      .hass=${this.hass}
      .building=${t}
      .packs=${this.data.packs}
      .floorId=${e.floorId}
      .roomId=${this._roomId}
      .wallMode=${e.walls}
      .solidWalls=${r?.solid_walls===!0}
      .explode=${e.explode}
      .keepRoof=${r?.roof_fade===!1}
      .quality=${r?.quality??"auto"}
      ?showStats=${r?.stats??!1}
      .markerMode=${r?.markers??"important"}
      .markerNames=${r?.marker_names===!0}
      .markersOutside=${r?.markers_outside??null}
      ?tapInRoom=${r?.tap_in_room===!0}
      .central=${r?.central!==!1}
      .buttons=${r?.buttons?.map((s,a)=>({id:`card_${a}`,...s}))??null}
      .heatMode=${e.heat}
      .theme=${kn(r?.theme,this.hass?.states["sun.sun"]?.state)}
      .clock=${r?.clock&&r.clock!=="none"?r.clock:null}
      .lockButton=${r?.lock_button!==!1}
      .walkButton=${r?.walk_button!==!1}
      .travelButton=${r?.time_travel!==!1}
      .accent=${r?.accent??null}
      .showEnergy=${r?.energy??!0}
      .flows=${r?.flows??null}
      .holograms=${r?.holograms??null}
      .floorThumbs=${this.thumbs}
      .roomLabels=${r?.room_names!==!1}
      .floorStack=${r?.floor_stack??"dim"}
      .panelOpen=${!!this._roomId&&r?.room_panel!==!1}
      .alerts=${r?.alerts!==!1}
      .alertJump=${!!r?.alert_jump}
      .scenes=${r?.scenes!==!1}
      .clean=${this._clean}
      .cleanButton=${i}
      @clean-toggle=${o}
      ?weather=${r?.weather!==!1}
      .weatherEntityId=${r?.weather_entity??null}
      .weatherDensity=${r?.weather_density??1}
      .dimmed=${this._night}
      .autoOrbit=${this._orbit}
      .startView=${r?.start_view??null}
      style=${e.showBar?"--nf-bottom-inset: 52px":""}
      @room-tap=${s=>{this.canSwitch&&t.floors.length>1&&s.detail.floorId&&e.floorId!==s.detail.floorId?(this._floorId=s.detail.floorId,this._roomId=null):s.detail.roomId&&(this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
      @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
      @back=${()=>this.back()}
    ></nf-view3d>`}renderRoomPanel(){let e=this.data.building;return p`<nf-room-panel
      class="nf-card-panel"
      .hass=${this.hass}
      .room=${e.floors.flatMap(t=>t.rooms).find(t=>t.id===this._roomId)??null}
      .floor=${e.floors.find(t=>t.rooms.some(r=>r.id===this._roomId))??null}
      .confirmEntities=${Xe(this.hass,e.floors)}
      @close=${()=>this._roomId=null}
    ></nf-room-panel>`}render(){if(this.hass&&un(this.hass,this))return m;let e=this.data.building,t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(a=>a.rooms.some(l=>l.id===t.room))&&(this._roomId=t.room));let r=this.stage(),o=this._fullscreen?"100vh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t?.height??420}px`,i=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null,s=()=>this.kiosk.touched();return p`<ha-card class=${this._night?"nf-night":""} style=${i?`--nf-accent:${i}`:""} @pointerdown=${s} @keydown=${s} @wheel=${s}>
      <div class="nf-card-body" style="height:${o}">
        ${e&&e.floors.some(a=>a.rooms.length)?this.renderStage(r):p`<p class="nf-card-msg">${this.data.error??(e?E(this.hass,"no_building"):E(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&t?.room_panel!==!1?this.renderRoomPanel():m}
        ${this.renderRoomButtons(r)}
        ${r.showBar&&e?this.renderBar(r):m}
        ${this.renderCorners()}
      </div>
    </ha-card>`}static styles=[se,$e,Ea]};if(!customElements.get("nextfloor-card")){customElements.define("nextfloor-card",io);let n=window;n.customCards=n.customCards??[],n.customCards.push({type:"nextfloor-card",name:E(void 0,"card_name"),description:E(void 0,"card_description"),preview:!1})}rr();
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
