/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var M={cs:"f361e202f373",da:"0fe66a82bf2a",es:"da8a49e6d567",fi:"9a17bc084f56",fr:"cdf280065c11",hu:"27ba348531dc",it:"96a441d94345",nb:"c5ea24fb9ef6",nl:"55f81783233b",pl:"9c2a8e46f838",pt:"fd8ddb068102",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"2d95bfb078fb",tr:"7c83ce1c3372",zh:"b9c59234be71"};Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var vn=globalThis,yn=vn.ShadowRoot&&(vn.ShadyCSS===void 0||vn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fr=Symbol(),bi=new WeakMap,Pt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Fr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(yn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=bi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&bi.set(t,e))}return e}toString(){return this.cssText}},wi=r=>new Pt(typeof r=="string"?r:r+"",void 0,Fr),te=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new Pt(t,r,Fr)},vi=(r,e)=>{if(yn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=vn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},Dr=yn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return wi(t)})(r):r;var{is:Ju,defineProperty:Qu,getOwnPropertyDescriptor:Xu,getOwnPropertyNames:ec,getOwnPropertySymbols:tc,getPrototypeOf:nc}=Object,kn=globalThis,yi=kn.trustedTypes,rc=yi?yi.emptyScript:"",oc=kn.reactiveElementPolyfillSupport,Ht=(r,e)=>r,Pr={toAttribute(r,e){switch(e){case Boolean:r=r?rc:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},xi=(r,e)=>!Ju(r,e),ki={attribute:!0,type:String,converter:Pr,reflect:!1,useDefault:!1,hasChanged:xi};Symbol.metadata??=Symbol("metadata"),kn.litPropertyMetadata??=new WeakMap;var $e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ki){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Qu(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:i}=Xu(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ki}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;let e=nc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){let t=this.properties,n=[...ec(t),...tc(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Dr(o))}else e!==void 0&&t.push(Dr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:Pr).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Pr;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??xi)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[Ht("elementProperties")]=new Map,$e[Ht("finalized")]=new Map,oc?.({ReactiveElement:$e}),(kn.reactiveElementVersions??=[]).push("2.1.2");var Wr=globalThis,Si=r=>r,xn=Wr.trustedTypes,Mi=xn?xn.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ti="$lit$",Oe=`lit$${Math.random().toFixed(9).slice(2)}$`,Fi="?"+Oe,ic=`<${Fi}>`,Ye=document,Ct=()=>Ye.createComment(""),Nt=r=>r===null||typeof r!="object"&&typeof r!="function",Br=Array.isArray,sc=r=>Br(r)||typeof r?.[Symbol.iterator]=="function",Hr=`[ 	
\f\r]`,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$i=/-->/g,Ai=/>/g,qe=RegExp(`>|${Hr}(?:([^\\s"'>=/]+)(${Hr}*=${Hr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ei=/'/g,Ri=/"/g,Di=/^(?:script|style|textarea|title)$/i,Vr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Vr(1),J=Vr(2),Hm=Vr(3),Je=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),zi=new WeakMap,Ze=Ye.createTreeWalker(Ye,129);function Pi(r,e){if(!Br(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mi!==void 0?Mi.createHTML(e):e}var ac=(r,e)=>{let t=r.length-1,n=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=It;for(let a=0;a<t;a++){let l=r[a],u,c,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===It?c[1]==="!--"?s=$i:c[1]!==void 0?s=Ai:c[2]!==void 0?(Di.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=qe):c[3]!==void 0&&(s=qe):s===qe?c[0]===">"?(s=o??It,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?qe:c[3]==='"'?Ri:Ei):s===Ri||s===Ei?s=qe:s===$i||s===Ai?s=It:(s=qe,o=void 0);let h=s===qe&&r[a+1].startsWith("/>")?" ":"";i+=s===It?l+ic:d>=0?(n.push(u),l.slice(0,d)+Ti+l.slice(d)+Oe+h):l+Oe+(d===-2?a:h)}return[Pi(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ot=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[u,c]=ac(e,t);if(this.el=r.createElement(u,n),Ze.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Ze.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Ti)){let p=c[s++],h=o.getAttribute(d).split(Oe),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:w[2],strings:h,ctor:w[1]==="."?Cr:w[1]==="?"?Nr:w[1]==="@"?Or:ct}),o.removeAttribute(d)}else d.startsWith(Oe)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Di.test(o.tagName)){let d=o.textContent.split(Oe),p=d.length-1;if(p>0){o.textContent=xn?xn.emptyScript:"";for(let h=0;h<p;h++)o.append(d[h],Ct()),Ze.nextNode(),l.push({type:2,index:++i});o.append(d[p],Ct())}}}else if(o.nodeType===8)if(o.data===Fi)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Oe,d+1))!==-1;)l.push({type:7,index:i}),d+=Oe.length-1}i++}}static createElement(e,t){let n=Ye.createElement("template");return n.innerHTML=e,n}};function ut(r,e,t=r,n){if(e===Je)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,i=Nt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=ut(r,o._$AS(r,e.values),o,n)),e}var Ir=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Ye).importNode(t,!0);Ze.currentNode=o;let i=Ze.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new Lt(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new Lr(i,this,e)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(i=Ze.nextNode(),s++)}return Ze.currentNode=Ye,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Lt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ut(this,e,t),Nt(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==Je&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):sc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&Nt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ot.createElement(Pi(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Ir(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=zi.get(e.strings);return t===void 0&&zi.set(e.strings,t=new Ot(e)),t}k(e){Br(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let i of e)o===t.length?t.push(n=new r(this.O(Ct()),this.O(Ct()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Si(e).nextSibling;Si(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=f}_$AI(e,t=this,n,o){let i=this.strings,s=!1;if(i===void 0)e=ut(this,e,t,0),s=!Nt(e)||e!==this._$AH&&e!==Je,s&&(this._$AH=e);else{let a=e,l,u;for(e=i[0],l=0;l<i.length-1;l++)u=ut(this,a[n+l],t,l),u===Je&&(u=this._$AH[l]),s||=!Nt(u)||u!==this._$AH[l],u===f?e=f:e!==f&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!o&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Cr=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},Nr=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}},Or=class extends ct{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=ut(this,e,t,0)??f)===Je)return;let n=this._$AH,o=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==f&&(n===f||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Lr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ut(this,e)}};var lc=Wr.litHtmlPolyfillSupport;lc?.(Ot,Lt),(Wr.litHtmlVersions??=[]).push("3.3.3");var Hi=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let i=t?.renderBefore??null;n._$litPart$=o=new Lt(e.insertBefore(Ct(),i),i,void 0,t??{})}return o._$AI(r),o};var Kr=globalThis,re=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Je}};re._$litElement$=!0,re.finalized=!0,Kr.litElementHydrateSupport?.({LitElement:re});var uc=Kr.litElementPolyfillSupport;uc?.({LitElement:re});(Kr.litElementVersions??=[]).push("4.2.2");var Qe=Math.PI/180;function Xe(r,e,t){let n=r.getTime()/864e5-10957.5,o=(357.529+.98560028*n)*Qe,s=(280.459+.98564736*n+1.915*Math.sin(o)+.02*Math.sin(2*o))*Qe,a=(23.439-36e-8*n)*Qe,l=Math.atan2(Math.cos(a)*Math.sin(s),Math.cos(s)),u=Math.asin(Math.sin(a)*Math.sin(s)),d=(((18.697374558+24.06570982441908*n)%24+24)%24*15+t)*Qe-l,p=e*Qe,h=Math.asin(Math.sin(p)*Math.sin(u)+Math.cos(p)*Math.cos(u)*Math.cos(d)),w=Math.atan2(Math.sin(d),Math.cos(d)*Math.sin(p)-Math.tan(u)*Math.cos(p))/Qe+180;return{elevation:h/Qe,azimuth:(w%360+360)%360}}function Gr(r,e){let t=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(r)).map(n=>[n.type,Number(n.value)]));return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)}function dt(r,e,t=new Date){let[n,o]=[Math.floor(r),Math.round(r%1*60)];if(e)try{let s=new Date(Gr(t.getTime(),e)),a=Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),n,o),l=a-(Gr(a,e)-a);return l=a-(Gr(l,e)-l),new Date(l)}catch{}let i=new Date(t);return i.setHours(n,o,0,0),i}var Ii;function Sn(){let r=new URL("./nextfloor-card-editor.js?v=8256dd0df6d3",new URL(import.meta.url)).href;return Ii??=import(r),Ii}var Mn=(r,e,t={})=>r.callWS({type:`nextfloor/${e}`,...t}),Ci=r=>Mn(r,"building/get");async function Ni(r,e){return(await Mn(r,"building/save",{building:e})).revision}function Oi(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"nextfloor/building/subscribe"})}async function Li(r,e){return(await Mn(r,"image/get",{image_id:e})).data}async function Wi(r){return(await Mn(r,"packs/list")).packs}var cc=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function Bi(r){let e=r instanceof Uint8Array?r:new Uint8Array(r),t=e.length*8,n=new Uint8Array(e.length+9+63>>6<<6);n.set(e),n[e.length]=128;let o=new DataView(n.buffer);o.setUint32(n.length-8,Math.floor(t/4294967296)),o.setUint32(n.length-4,t>>>0);let i=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),s=new Uint32Array(64),a=(l,u)=>l>>>u|l<<32-u;for(let l=0;l<n.length;l+=64){for(let _=0;_<16;_++)s[_]=o.getUint32(l+_*4);for(let _=16;_<64;_++){let S=a(s[_-15],7)^a(s[_-15],18)^s[_-15]>>>3,$=a(s[_-2],17)^a(s[_-2],19)^s[_-2]>>>10;s[_]=s[_-16]+S+s[_-7]+$>>>0}let[u,c,d,p,h,w,b,g]=i;for(let _=0;_<64;_++){let S=g+(a(h,6)^a(h,11)^a(h,25))+(h&w^~h&b)+cc[_]+s[_]>>>0,$=(a(u,2)^a(u,13)^a(u,22))+(u&c^u&d^c&d)>>>0;[g,b,w,h,p,d,c,u]=[b,w,h,p+S>>>0,d,c,u,S+$>>>0]}i[0]+=u,i[1]+=c,i[2]+=d,i[3]+=p,i[4]+=h,i[5]+=w,i[6]+=b,i[7]+=g}return[...i].map(l=>l.toString(16).padStart(8,"0")).join("")}var Vi=r=>r.trim().replace(/^\/local\/www\//i,"/local/"),Ki=r=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(r.trim());var dc=globalThis,Gi=dc.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},En=Gi.plugins,Ur=Gi.listeners,hc=new Set(["none","rainbow","pulse","flicker"]),pc=5;function ht(r,e){r.errors.length<pc&&r.errors.push(e instanceof Error?e.message:String(e))}function mc(){for(let r of Ur)r()}function pt(r){return Ur.add(r),()=>Ur.delete(r)}function jr(r,e=""){if(!r||typeof r!="object")throw new Error("register() needs a plugin object");if(typeof r.id!="string"||!/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(r.id))throw new Error("plugin id must be 1\u201364 letters, digits, '.', '_' or '-'");if(r.apiVersion!==1)throw new Error(`plugin "${r.id}" wants API ${String(r.apiVersion)}, NextFloor offers ${1}`);for(let t of Object.keys(r.lightAnimations??{})){if(hc.has(t))throw new Error(`plugin "${r.id}": light animation "${t}" is built in`);if(typeof r.lightAnimations?.[t]!="function")throw new Error(`plugin "${r.id}": light animation "${t}" is not a function`)}for(let t of r.devices??[]){if(typeof t?.match!="function")throw new Error(`plugin "${r.id}": every device extension needs match()`);for(let n of["floorWedge","tap","watch"])if(t[n]!==void 0&&typeof t[n]!="function")throw new Error(`plugin "${r.id}": ${n} must be a function`);for(let n of t.settings??[]){if(!n||typeof n.key!="string"||!/^\w{1,32}$/.test(n.key))throw new Error(`plugin "${r.id}": a setting needs a key of 1\u201332 letters, digits or "_"`);if(!["number","select","boolean"].includes(n.type))throw new Error(`plugin "${r.id}": setting "${n.key}" has an unknown type`)}}for(let t of r.roomSections??[])if(typeof t?.render!="function"||typeof t.id!="string")throw new Error(`plugin "${r.id}": every room section needs id and render()`);En.set(r.id,{plugin:r,status:{id:r.id,name:r.name||r.id,version:r.version||"",source:e,errors:[]}}),mc()}function fc(r){for(let{plugin:e,status:t}of En.values()){let n=e.lightAnimations?.[r];if(n)return{fn:n,status:t}}return null}var Ui=r=>fc(r)!==null;function*Wt(r,e){for(let{plugin:t,status:n}of En.values())for(let o of t.devices??[]){let i=!1;try{i=o.match(r,e)}catch(s){ht(n,s)}i&&(yield{device:o,status:n})}}function mt(r,e){for(let{device:t}of Wt(r,e))return t.kind??"sensor";return null}function ji(r){let e=null;for(let{device:t,status:n}of Wt(r.entityId,r.state))if(t.marker)try{let o=t.marker(r);if(!o)continue;e={...e??{}},typeof o.icon=="string"&&o.icon&&(e.icon=o.icon),typeof o.text=="string"&&(e.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(e.active=o.active)}catch(o){ht(n,o)}return e}function qi(r){let e=[];for(let{device:t,status:n}of Wt(r.entityId,r.state))if(t.watch)try{let o=t.watch(r);Array.isArray(o)&&e.push(...o.filter(i=>typeof i=="string").slice(0,20))}catch(o){ht(n,o)}return e}function Zi(r,e){let t={};for(let n of r??[]){let o=e?.[n.key],i=n.type==="number"?typeof o=="number"&&Number.isFinite(o):n.type==="boolean"?typeof o=="boolean":typeof o=="string"&&(n.options??[]).some(([s])=>s===o);t[n.key]=i?o:n.default}return t}var gc=r=>{let e=typeof r=="string"?/^#([0-9a-f]{6})$/i.exec(r.trim()):null;if(!e)return null;let t=Number.parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},$n=(r,e,t,n)=>typeof r=="number"&&Number.isFinite(r)?Math.min(n,Math.max(t,r)):e;function Yi(r,e,t){for(let{device:n,status:o}of Wt(r.entityId,r.state))if(n.floorWedge)try{let i=n.floorWedge({...r,placement:e,settings:Zi(n.settings,t?.[o.id])});if(!i)continue;let s=$n(i.reach,0,0,30);if(s<=0)continue;return{angle:$n(i.angle,90,1,360),reach:s,near:$n(i.near,0,0,s),color:gc(i.color)??[.04,.22,.28],opacity:$n(i.opacity,.6,0,1),through:i.tapThrough===!0}}catch(i){ht(o,i)}return null}function Ji(r,e,t,n){for(let{device:o,status:i}of Wt(r.entityId,r.state))if(o.tap)try{if(o.tap({...r,...n,placement:e,settings:Zi(o.settings,t?.[i.id])})===!0)return!0}catch(s){ht(i,s)}return!1}function Qi(r){let e=[];for(let{plugin:t,status:n}of En.values())for(let o of t.roomSections??[])try{let i=o.render(r);if(i==null||i===""||typeof i!="string"&&!(i instanceof Node))continue;e.push({key:`${t.id}/${o.id}`,title:n.name,content:i})}catch(i){ht(n,i)}return e}var qr=new Map,Zr="";function Yr(){let r=globalThis;if(r.NextFloor)return;r.NextFloor={apiVersion:1,register:t=>jr(t,Zr)};let e=r.__nextfloorPlugins??[];r.__nextfloorPlugins=[];for(let t of e)try{jr(t)}catch(n){console.warn("NextFloor: plugin rejected",n)}}var _c=r=>[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,"0")).join("");async function bc(r,e=(...t)=>fetch(...t)){if(!r.sha256)return{url:r.url};let t=globalThis.crypto?.subtle,n=await e(r.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let o=await n.arrayBuffer();if((t?_c(await t.digest("SHA-256",o)):Bi(o))!==r.sha256.toLowerCase())throw new Error("checksum mismatch: the file is not the one that was reviewed");let s=URL.createObjectURL(new Blob([o],{type:"text/javascript"}));return{url:s,revoke:()=>URL.revokeObjectURL(s)}}async function Jr(r,e=n=>import(n),t){Yr();for(let n of r??[]){if(!n.enabled||qr.has(n.url))continue;if(!Ki(n.url)){qr.set(n.url,{url:n.url,state:"error",error:"not allowed: use /local/\u2026, /hacsfiles/\u2026 or https://\u2026"});continue}let o={url:n.url,state:"loading"};qr.set(n.url,o);let i;try{i=await bc({...n,url:Vi(n.url)},t),Zr=n.url,await e(i.url),o.state="loaded"}catch(s){o.state="error",o.error=s instanceof Error?s.message:String(s),console.warn(`NextFloor: plugin ${n.url} failed to load`,s)}finally{Zr="",i?.revoke?.()}}}var Xi=[],Rn=new Map,es=0,ts=(r,e)=>`pack:${r}:${e}`,Qr=r=>r.startsWith("pack:");function ns(r){Xi=r,Rn=new Map;for(let e of r)for(let t of e.items)Rn.set(ts(e.id,t.id),t);es+=1}var Xr=()=>Xi,zn=()=>es,wc={};function q(r){if(!Qr(r))return;let e=Rn.get(r);if(e)return e;let[,t,...n]=r.split(":"),o=wc[t];return o?Rn.get(ts(o,n.join(":"))):void 0}var Tn=r=>!!r?.parts.some(e=>e.move);function rs(r,e){if(e===null)return Math.min(1,Math.max(0,r.cover_rest??1));let t=Math.min(1,Math.max(0,e/100));return r.cover==="extends"?t:1-t}var os=r=>q(r)?.parts.find(e=>e.screen);var is=r=>!!q(r)?.climate;function ss(r,e){return r.name[e.split("-")[0]]??r.name.en??Object.values(r.name)[0]??r.id}function le(r,e){return e.mount_y!=null?e.mount_y:yc(r,e)+(vc(e)?0:Dn(r,e.x,e.z))}var vc=r=>r.type==="led_strip"||q(r.type)?.mount==="ceiling";function yc(r,e){if(e.type==="lamp_wall")return as;if(e.type==="led_strip")return Math.max(0,me(r,e.x,e.z)-.04-Math.max(.02,e.h));let t=q(e.type);if(!t)return ls(e);switch(t.mount){case"surface":return Hn(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,Pn(r,e)-e.h);default:return 0}}function Fn(r){if(r==="plant")return"plant";let e=q(r);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var xc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Sc(r){return r==="hedge"||r==="fence"||r==="pergola"}function Mc(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let o=r.slope_dir??"x",i=(u,c)=>o==="x"?u:o==="-x"?-u:o==="z"?c:-c,s=1/0,a=-1/0;for(let[u,c]of r.points){let d=i(u,c);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return n*l}function In(r,e,t,n){return Cn(r)+(e.offset??0)+xc[e.type]-Mc(e,t,n)}function Cn(r){return r.elevation>.3?0:-.2}function Bt(r,e,t){let n=(r.outdoor??[]).filter(i=>!Sc(i.type)&&i.type!=="pool"&&H([e,t],i.points)),o=[...n].reverse().find(i=>i.cut)??n[0];return o?In(r,o,e,t):Cn(r)}var $c={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ds={type:"none",pitch:35,overhang:.4};var Ac={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ds}};function Ec(r,e,t){return{id:r,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var hs=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),as=1.75;function ps(r){return zc.has(r.type)||["stairwell","parking"].includes(r.type)?!1:q(r.type)?.mount!=="ceiling"}function Nn(r){return hs.has(r)||!!q(r)?.light}var Rc=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ls(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var zc=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);var Tc=r=>r?.floor_offset&&Number.isFinite(r.floor_offset)?r.floor_offset:0;function Dn(r,e,t){let n=r.rooms.find(o=>o.points.length>=3&&o.floor_offset&&H([e,t],o.points));return Tc(n)}function me(r,e,t){let n=r.rooms.find(o=>o.points.length>=3&&H([e,t],o.points));return n?.ceiling!=null&&n.ceiling>0?n.ceiling:r.height}var Pn=(r,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:me(r,e.x,e.z);function Hn(r,e,t){let n=0;for(let o of r.furniture)!(Rc.has(o.type)||q(o.type)?.surface)||!H([e,t],On(o))||(n=Math.max(n,o.h));return n}var kc=new Set([...hs,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),us={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function eo(r){r.energy={...$c,...r.energy??{}},r.presence=r.presence??[],r.version=1,r.settings={...Ac,...r.settings,roof:{...ds,...r.settings?.roof??{}}},r.floors.forEach((e,t)=>{let n=Ec(e.id,e.name??`Floor ${t+1}`,e.elevation??t*2.8);for(let o of Object.keys(n))e[o]===void 0&&(e[o]=n[o])});for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,name:n.name??"",area_id:n.area_id??null,floor_material:n.floor_material??"wood",panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=n[o.mount??"ceiling"],[s,a,l]=us[i],u=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),c=u,d=1;for(;e.furniture.some(p=>p.id===c);)c=`${u}_${d++}`;e.furniture.push({id:c,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,type:["door","window","garage"].includes(n.type)?n.type:"door",edge:Number.isInteger(n.edge)?n.edge:0,offset:Number.isFinite(n.offset)?n.offset:.5,width:Number.isFinite(n.width)&&n.width>0?n.width:n.type==="garage"?2.5:n.type==="window"?1.2:.9,height:Number.isFinite(n.height)&&n.height>0?n.height:n.type==="window"?1.3:n.type==="garage"?2.1:2.05,sill:Number.isFinite(n.sill)?n.sill:n.type==="window"?.9:0,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return Fc(r),r}function Fc(r){let e=(t,n)=>{let o=new Set;for(let i of t)(typeof i.id!="string"||!i.id||o.has(i.id))&&(i.id=cs(n)),o.add(i.id)};e(r.floors,"floor");for(let t of r.floors){for(let n of t.rooms)(typeof n.id!="string"||!n.id)&&(n.id=cs("room"));e(t.openings,"op"),e(t.furniture,"furn"),e(t.outdoor,"out")}}function cs(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function et(r){let e=0;for(let t=0;t<r.length;t++){let[n,o]=r[t],[i,s]=r[(t+1)%r.length];e+=n*s-i*o}return e/2}function Vt(r){return Math.abs(et(r))}function Le(r){let e=et(r);if(Math.abs(e)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let t=0,n=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],u=i*l-a*s;t+=(i+a)*u,n+=(s+l)*u}return[t/(6*e),n/(6*e)]}function On(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function H(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}var ms={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Dc=700,no="nextfloor.unsaved",ft="0.26.6";function Pc(){try{let r=localStorage.getItem(no);return r?JSON.parse(r):null}catch{return null}}function to(r){try{r?localStorage.setItem(no,JSON.stringify(r)):localStorage.removeItem(no)}catch{}}var fs=r=>r&&typeof r=="object"&&"message"in r?String(r.message):String(r);function Hc(r,e){let t=i=>i.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),[n,o]=[t(r),t(e)];for(let i=0;i<Math.max(n.length,o.length);i++){let s=(n[i]??0)-(o[i]??0);if(s!==0)return s}return 0}var gt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;stopPlugins=null;hass=null;connected=!1;revision=-1;ownRevisions=new Set;stopListening=null;timer;waiting=null;inFlight=null;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.stopPlugins=pt(()=>this.host.requestUpdate()),this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.stopPlugins?.(),this.stopPlugins=null,this.flush(),this.stopListening?.(),this.stopListening=null}edit(e){this.building=e,Jr(e.settings.plugins),this.waiting=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.flush()},Dc),this.host.requestUpdate()}get frontendVersion(){return ft}get versionGap(){let e=this.backendVersion;return!e||ft==="dev"||e===ft?null:Hc(e,ft)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&ft!=="dev"&&this.backendVersion!==ft}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(eo(e.building))}discardDraft(){this.draft=null,to(null),this.host.requestUpdate()}async flush(){clearTimeout(this.timer),this.inFlight&&await this.inFlight;let e=this.waiting,t=this.hass;!e||!t||(this.waiting=null,this.saveState="saving",this.host.requestUpdate(),this.inFlight=this.send(t,e),await this.inFlight,this.inFlight=null)}async send(e,t){try{let n=await Ni(e,t);this.ownRevisions.add(n),this.revision=n,this.saveState=this.waiting?"saving":"saved",this.saveError=null,to(null)}catch(n){this.saveState="error",this.saveError=fs(n),to({building:t,savedAt:Date.now()})}this.host.requestUpdate()}async start(){let e=this.hass;if(e&&(await Promise.all([this.reloadPacks(),this.reload()]),!(this.stopListening||!this.connected)))try{this.stopListening=await Oi(e,t=>{let n=this.ownRevisions.has(t)||t===this.revision,o=this.waiting!==null||this.inFlight!==null;!n&&!o&&this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Wi(this.hass)}catch{this.packs=[]}ns(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Ci(this.hass);this.building=eo(e.building),Jr(this.building.settings.plugins),this.backendVersion=e.version??null,this.revision=e.revision,this.error=null,this.draft===null&&!this.waiting&&(this.draft=Pc())}catch(e){this.error=fs(e)}this.host.requestUpdate()}}};var ro=r=>r.slice(0,r.indexOf(".")),Ic={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},D=r=>Ic[ro(r)]??null,oo=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];function gs(r,e=!1){if(e||r.startsWith("lamp:"))return"light";if(r.startsWith("tap:"))return"tap";if(r.startsWith("gang:"))return"switch";if(r==="grid")return"sensor";let t=D(r);return t&&t!=="scene"&&t!=="script"?t:"other"}var _s=new Set(["light","switch","fan"]),bs=r=>r!==null&&r!=="scene"&&r!=="script",I=r=>!r||r.state==="unavailable"||r.state==="unknown"&&!r.entity_id.startsWith("event."),Cc=new Set(["motion","occupancy","presence","moving"]),ws=(r,e)=>e.startsWith("binary_sensor.")&&Cc.has(String(r?.states[e]?.attributes.device_class??"")),Kt=r=>!!r&&r.entity_id.startsWith("cover.")&&r.state==="unknown"&&r.attributes.assumed_state===!0,Ln=(r,e)=>r.filter(t=>(!I(t)||Kt(t))&&!e?.has(t.entity_id)).map(t=>t.entity_id);function W(r,e,t){let n=String(r?.states[e]?.attributes.friendly_name??r?.entities?.[e]?.name??e);if(!t||n.length<=t.length+1||!n.toLowerCase().startsWith(`${t.toLowerCase()} `))return n;let o=n.slice(t.length+1);return o[0].toUpperCase()+o.slice(1)}var Nc=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]),Wn=r=>!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum";function Q(r){if(!r)return!1;if(r.entity_id.startsWith("vacuum."))return["cleaning","returning"].includes(r.state);if(r.entity_id.startsWith("valve."))return r.state==="open"||r.state==="opening";let e=D(r.entity_id);return e==="light"||e==="switch"||e==="fan"||e==="binary"?r.state==="on":e==="cover"?r.state==="open"||r.state==="opening":e==="climate"?["heating","cooling"].includes(String(r.attributes.hvac_action)):e==="media"?r.state==="playing":e==="lock"?r.state==="unlocked"||r.state==="open":e==="sensor"?Wn(r)&&Nc.has(r.state.toLowerCase()):!1}var vs=r=>Math.min(1,Math.max(0,r));function Oc(r){let e=vs((r-2200)/4300),t=[1,.66,.26],n=[.78,.9,1];return[0,1,2].map(o=>t[o]+(n[o]-t[o])*e)}function Ae(r,e){if(!r||r.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(vs(t.brightness/255)):1,o=t.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(t.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:n}:typeof t.color_temp_kelvin=="number"?{color:Oc(t.color_temp_kelvin),level:n}:{color:[1,.71,.28],level:n}}function ys(r,e,t){let n=Ae(r,t);if(n)return n;for(let o of e){let i=Ae(o);if(i)return{color:i.color,level:i.level*.6}}return null}function _t(r,e,t=null){if(r==="light"&&t==="floor")return 1.95;if(r==="light"&&t==="table")return 1.25;if(r==="light"&&t==="wall")return 1.95;switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var ne=r=>r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C";function Bn(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}var ce=(r,e)=>ne(r)==="\xB0F"?e*9/5+32:e;var Lc=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Wc=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Bc=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Vc=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function We(r,e){let t=r.entities?.[e];return t&&(t.area_id||(t.device_id?r.devices?.[t.device_id]?.area_id:null))||null}var xs=(r,e)=>{let t=r.entities?.[e];return!!(t?.hidden||t?.entity_category)},Kc=(r,e)=>D(e)??mt(e,r.states[e]);function ks(r,e){let t=r.states[e];if(!t||xs(r,e))return!1;if(mt(e,t)!==null)return!0;let n=D(e);if(!n)return!1;let o=t.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":n==="sensor"?o?Lc.has(o):Wc.has(String(t.attributes.unit_of_measurement??"")):n==="binary"?o?Bc.has(o):!!r.entities?.[e]?.area_id:!0}function Gc(r,e){let t=r.states[e];return D(e)!=="sensor"||!t?.attributes.unit_of_measurement||xs(r,e)||Vc.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||I(t)}var Kn=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power",io=null;pt(()=>io=null);function so(r,e){let t=r.get(e);return t||r.set(e,t=[]),t}function Uc(r){let e=new Map,t=new Map,n=new Map,o=new Map,i=[],s=c=>{(ks(r,c)||Gc(r,c))&&bs(Kc(r,c))&&i.push(c)};for(let[c,d]of Object.entries(r.entities??{})){let p=d.device_id;p&&d.area_id&&(o.get(p)??o.set(p,new Set).get(p)).add(d.area_id),p&&Kn(r,c)&&so(t,p).push(c),p&&!d.hidden&&!d.entity_category&&(n.get(p)??n.set(p,new Set).get(p)).add(ro(c));let h=We(r,c);h===null?s(c):ks(r,c)&&so(e,h).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||s(c);let a=oo.indexOf("binary")-.5,l=c=>{let d=D(c),p=d?oo.indexOf(d):a;return p>a&&mt(c,r.states[c])!==null?a:p};i.sort((c,d)=>l(c)-l(d)||W(r,c).localeCompare(W(r,d)));for(let[c,d]of e){let p=r.areas?.[c]?.name;d.sort((h,w)=>l(h)-l(w)||W(r,h,p).localeCompare(W(r,w,p)))}let u=new Set;for(let[c,d]of o)d.size>1&&u.add(c);return{entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,byArea:e,powerByDevice:t,withoutArea:i,domainsByDevice:n,hubs:u}}function Gn(r){let e=io;return e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount))?e:io=Uc(r)}function K(r,e){let t=Vn(r,e.area_id);return e.sub_areas?.length?[...new Set([...t,...e.sub_areas.flatMap(n=>Vn(r,n))])]:t}function Vn(r,e){return!e||!r.entities?[]:Gn(r).byArea.get(e)??[]}var ao=(r,e)=>!!r.entities&&Gn(r).hubs.has(e),Un=(r,e)=>r.entities?Gn(r).powerByDevice.get(e)??[]:[];function lo(r,e){let t=new Map;for(let o of e)so(t,r.entities?.[o]?.device_id??`entity:${o}`).push(o);let n=new Map(e.map((o,i)=>[o,i]));return[...t.values()].map(o=>{let i=o.find(s=>!r.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>n.get(o.primary)-n.get(i.primary))}var tt=(r,e)=>lo(r,e).map(t=>t.primary),jc={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},qc=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Zc=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Yc=new RegExp(`(${Zc.join("|")})`,"i");function Jc(r,e){let t=r.entities?.[e]?.device_id,n=t&&!ao(r,t)?Gn(r).domainsByDevice.get(t):void 0;return n&&[...n].some(o=>qc.has(o))?!1:!Yc.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function jn(r,e,t,n){let o=t.climate?.[n];if(o==="none")return[];if(o)return[o].flat().filter(u=>r.states[u]);let i=(e?.placements??[]).filter(u=>u.entity_id.startsWith("sensor.")),s=i.filter(u=>H([u.x,u.z],t.points)).map(u=>u.entity_id),a=new Set(i.filter(u=>!H([u.x,u.z],t.points)).map(u=>u.entity_id));return[...new Set([...K(r,t).filter(u=>!a.has(u)),...s])].filter(u=>u.startsWith("sensor.")&&r.states[u]?.attributes.device_class===jc[n]&&Jc(r,u))}function Y(r,e,t,n){let o=jn(r,e,t,n).map(a=>{let l=Number(r.states[a]?.state);return n==="temperature"?Bn(l,r.states[a]?.attributes.unit_of_measurement):l}).filter(Number.isFinite);if(o.length)return o.reduce((a,l)=>a+l,0)/o.length;if(n==="co2"||t.climate?.[n]==="none")return null;let i=n==="temperature"?"current_temperature":"current_humidity",s=K(r,t).filter(a=>a.startsWith("climate.")).map(a=>r.states[a]?.attributes[i]).filter(a=>typeof a=="number"&&Number.isFinite(a));return s.length?s.reduce((a,l)=>a+l,0)/s.length:null}var Qc=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Xc=new Set(["garage","gate"]),ed=new Set(["window","opening"]);function Gt(r,e,t=!1){let n=new Map;return r.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(o.id,s)}),n}var Ss=(r,e)=>r==="none"?null:r??e??null,bt=r=>r&&r!=="none"?r:null;function Ut(r,e){let t=new Map;for(let n of e)for(let o of n.rooms){let i=n.openings.filter(b=>b.room_id===o.id).sort((b,g)=>b.edge-g.edge||b.offset-g.offset);if(i.length===0)continue;let s=K(r,o),a=b=>r.states[b]?.attributes.device_class,l=b=>s.filter(g=>D(g)==="binary"&&b(a(g)??"")),u=b=>i.filter(g=>g.type===b),c=Gt(u("window"),s.filter(b=>D(b)==="cover"&&Qc.has(a(b))),!0),d=Gt(u("window"),l(b=>ed.has(b))),p=Gt(u("door"),l(b=>b==="door")),h=Gt(u("garage"),s.filter(b=>D(b)==="cover"&&Xc.has(a(b)??""))),w=Gt(u("garage"),l(b=>b==="garage_door"));for(let b of i){let g=b.type==="window"?c:b.type==="garage"?h:null,_=b.type==="window"?d:b.type==="garage"?w:p,S=b.leaves===2;t.set(b.id,{cover:Ss(b.cover,g?.get(b.id)),contact:b.sensor==="handle"&&b.contact==null?null:Ss(b.contact,_.get(b.id)),tilt:b.tilt==="none"?null:b.tilt,contact2:S?bt(b.contact2):null,tilt2:S?bt(b.tilt2):null,position:bt(b.position),positionInverted:!!b.position_inverted,tiltAngle:bt(b.tilt_angle),tiltMax:b.tilt_max??null,tiltOffset:b.tilt_offset??null,tiltInvert:!!b.tilt_invert,shut:!!b.shut,angled:b.type==="door"&&!!b.open_angle,lock:b.type==="door"?bt(b.lock):null,cover2:b.type==="garage"?null:bt(b.cover2)})}}return t}var td=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function nd(r){if(!r||I(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:"",r.state]){let n=t.trim(),o=n&&td.find(([i])=>i.test(n));if(o)return o[1]}return null}var rd=.5;function $s(r,e){let t=e?r.states[e]:void 0,n=t&&!I(t)?Number(t.state):NaN;if(!Number.isFinite(n))return null;let o=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,o?n/100:n))}function od(r,e){let t=e?r.states[e]:void 0;if(!t||I(t))return e?0:null;let n=t.attributes.current_position;return typeof n=="number"?1-Math.min(100,Math.max(0,n))/100:t.state==="closed"?1:t.state==="opening"||t.state==="closing"?.5:0}function Ms(r,e){let t=e?r.states[e]?.attributes.current_tilt_position:void 0;return typeof t=="number"?Math.min(100,Math.max(0,t))/100:null}function id(r,e){let t=$s(r,e.position);if(t!==null)return e.positionInverted?t:1-t;let n=e.cover?r.states[e.cover]:void 0;if(n&&!I(n)){let o=n.attributes.current_position;return typeof o=="number"?1-Math.min(100,Math.max(0,o))/100:n.state==="closed"?1:n.state==="opening"||n.state==="closing"?.5:0}return e.cover?0:null}function uo(r,e){let t=e?r.states[e]?.state:void 0;return t==="unlocked"||t==="open"||t==="opening"}function Ee(r,e,t="window"){let n=d=>!!d&&r.states[d]?.state==="on",o=d=>!!d&&!!r.states[d]&&!I(r.states[d]),i=d=>d?nd(r.states[d]):null,s=id(r,e);if(t==="door"){let d=i(e.contact);return{open:d===null?e.shut?0:e.angled?1:rd:d==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:s,sensed:d!==null||s!==null,unlocked:uo(r,e.lock),assumed:d===null}}if(t==="garage"){let d=s!==null||o(e.contact),p=$s(r,e.position)!==null||o(e.cover),h=o(e.contact)?n(e.contact)?0:1:null;return{open:0,open2:0,tilt:0,tilt2:0,cover:(p?s:h??s)??1,sensed:d}}let a=n(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",l=n(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",u=l?1:0,c=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(c)){let d=(c-(e.tiltOffset??0))*(e.tiltInvert?-1:1);u=Math.min(1,Math.max(0,d/(e.tiltMax||15))),u<.08&&(u=0),l=u>0}return{open:i(e.contact)==="open"&&!l?1:0,open2:i(e.contact2)==="open"&&!a?1:0,tilt:u,tilt2:a?1:0,cover:s,sensed:o(e.contact)||o(e.tilt)||Number.isFinite(c),...e.cover2?{cover2:od(r,e.cover2)}:{},...Ms(r,e.cover)!==null?{slats:Ms(r,e.cover)}:{}}}var As=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,Es=/(kühl|fridge|gefrier|freezer)/i,Rs=/(spülmaschine|geschirrspül|dishwasher)/i,sd=/(kochfeld|herd|induktion|cooktop)/i,ad={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:As,tv_wall:As,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:Es,fridge_smart:Es,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:Rs,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:sd,sink:Rs,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},zs={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},Fs=new Set(["tv_board","tv_wall"]);var Ds=r=>Fs.has(r)||!!os(r),Ts=r=>!!q(r)?.electric&&/speaker|multiroom|soundbar/.test(r.split(":").pop()??r),qn=r=>Ds(r)||r==="desk"||r==="fridge_smart",wt=r=>!!r&&r!=="none";function ld(r,e){if(Kn(r,e))return e;let t=r.entities?.[e]?.device_id;return t?Un(r,t).find(n=>n!==e)??null:null}var ud=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&H([e,t],n.points));function jt(r,e,t,n){return r.find(o=>e?.test(t(o)))??(n?r[0]??null:null)}function nt(r,e){let t=new Map;for(let n of e){let o=new Set([...n.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...n.placements.map(i=>i.entity_id)].filter(wt));for(let i of n.furniture){let s=i.type in zs,a=is(i.type),l=s?zs[i.type]:ad[i.type];if(!l&&!a&&!Ts(i.type)&&i.entity==null&&i.power==null)continue;let u=ud(n,i.x,i.z),c=(u?tt(r,K(r,u)):[]).filter(g=>!o.has(g)),d=g=>`${g} ${W(r,g)}`,p=g=>c.filter(_=>D(_)===g),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let g=(u?K(r,u):[]).filter(S=>!o.has(S)),_=new Set(g.filter(S=>D(S)==="fan").map(S=>r.entities?.[S]?.device_id).filter(Boolean));h=g.find(S=>D(S)==="light"&&_.has(r.entities?.[S]?.device_id))??jt(p("light"),l,d,!1)}else if(s)h=jt(p("light"),l,d,!0);else if(i.type==="robot_vacuum"){let g=u?.area_id??null;h=Object.keys(r.entities??{}).find(_=>_.startsWith("vacuum.")&&!o.has(_)&&We(r,_)===g)??null}else if(i.type==="radiator"||a)h=jt(p("climate"),l,d,!0);else if(Ds(i.type)){let g=p("media");h=g.find(_=>r.states[_]?.attributes.device_class==="tv")??jt(g,l,d,Fs.has(i.type))}else if(Ts(i.type)){let g=p("media").filter(_=>r.states[_]?.attributes.device_class!=="tv");h=jt(g,l,d,!1)??(g.length===1?g[0]:null)}else l&&(h=c.find(g=>["switch","media","fan"].includes(D(g)??"")&&l.test(d(g)))??null);h&&o.add(h)}let w=i.power==="none"?null:i.power??null;i.power==null&&(w=h?ld(r,h):null,!w&&l&&u&&!s&&(w=K(r,u).find(g=>Kn(r,g)&&!o.has(g)&&l.test(d(g)))??null),w&&o.add(w));let b=null;if(i.type==="ceiling_fan"&&(b=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let g=(u?K(r,u):[]).filter(S=>D(S)==="fan"&&!o.has(S)),_=h?r.entities?.[h]?.device_id:void 0;b=(_?g.find(S=>r.entities?.[S]?.device_id===_):void 0)??g[0]??null,b&&o.add(b)}(h||w||b)&&t.set(i.id,{entity:h,power:w,...i.type==="ceiling_fan"?{fan:b}:{}})}}return t}function rt(r,e){let t=new Set,n=nt(r,e),o=e.some(i=>i.openings.some(s=>s.confirm))?Ut(r,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?o?.get(s.id)?.cover:null;wt(a)&&t.add(a)}for(let s of i.furniture){let a=s.confirm?n.get(s.id)?.entity:null;wt(a)&&t.add(a)}}return t}var co=r=>r==="fridge"||r==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(r.slice(r.lastIndexOf(":")+1)),cd=8,dd=-12;function Ps(r,e,t){let n=a=>{if(!wt(a))return null;let l=r.states[a],u=l?Number(l.state):NaN;return Number.isFinite(u)?l.attributes.unit_of_measurement==="\xB0F"?(u-32)*5/9:u:null},o=n(e.temp_entity),i=n(e.temp_entity2);return o===null&&i===null?null:{text:[o,i].filter(a=>a!==null).map(t).join(" \xB7 "),warm:o!==null&&o>cd||i!==null&&i>dd}}var Hs=60;function Is(r,e){if(!wt(e))return null;let t=r.states[e],n=t?Number(t.state):NaN;return Number.isFinite(n)?t.attributes.unit_of_measurement==="\xB0F"?(n-32)*5/9:n:null}function Cs(r,e){let t=o=>wt(o)&&["on","open"].includes(r.states[o]?.state??""),n=new Map;for(let o of e.flatMap(i=>i.furniture))o.type==="fridge_smart"&&n.set(o.id,{left:t(o.door_left),right:t(o.door_right)});return n}function Ns(r,e,t){let n=(c,d)=>H([c,d],t.points),o=nt(r,[e]),i=Ut(r,[e]),s=new Set(t.hidden??[]),a=[...e.placements.filter(c=>!c.outside&&n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[o.get(c.id)?.entity,o.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let d=i.get(c.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]],l=[...new Set(a.filter(c=>!!c&&!!r.states[c]))].filter(c=>!s.has(c)),u=new Set(l);return{shown:l,more:K(r,t).filter(c=>!u.has(c)&&!s.has(c))}}function qt(r,e,t=[]){let n=[];for(let o of e){let i=(a,l)=>o.rooms.some(u=>u.points.length>=3&&H([a,l],u.points)),s=nt(r,[o]);n.push(...o.placements.filter(a=>a.outside||!i(a.x,a.z)).map(a=>a.entity_id)),n.push(...o.furniture.filter(a=>!i(a.x,a.z)).flatMap(a=>[s.get(a.id)?.entity,s.get(a.id)?.power]));for(let a of o.outdoor??[])a.area_id&&n.push(...tt(r,Vn(r,a.area_id))),n.push(a.pump_entity,a.temp_entity)}return[...new Set(n.filter(o=>!!o&&!!r.states[o]&&!t.includes(o)))]}var hd={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./},pd=/^k?W$/,Re=r=>r&&r!=="none"?r:null;function md(r,e){let t=e.car??{},n=Re(t.device)??Re(e.entity),o=n?r.entities?.[n]?.device_id:null,i=o&&r.entities?Object.values(r.entities).filter(p=>p.device_id===o).map(p=>p.entity_id):[],s=(p,h)=>String(r.states[p]?.attributes[h]??""),a=p=>`${p} ${s(p,"friendly_name")} ${r.entities?.[p]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(p,h,w=()=>!0)=>i.find(b=>h.includes(b.split(".")[0])&&hd[p].test(a(b))&&w(b))??null,u=(p,h)=>i.find(w=>w.startsWith(`${p}.`)&&s(w,"device_class")===h)??null,c=p=>i.find(h=>h.startsWith(`${p}.`))??null,d=p=>s(p,"unit_of_measurement");return{soc:Re(t.soc)??u("sensor","battery")??l("soc",["sensor"],p=>d(p)==="%"),range:Re(t.range)??l("range",["sensor"],p=>/km|mi/.test(d(p)))??l("range",["sensor"]),charging:Re(t.charging)??l("charging",["sensor"],p=>pd.test(d(p)))??l("charging",["binary_sensor","switch"]),plugged:Re(t.plugged)??u("binary_sensor","plug")??l("plugged",["binary_sensor"]),lock:Re(t.lock)??c("lock")??l("lock",["binary_sensor"]),climate:Re(t.climate)??c("climate")??l("climate",["switch","binary_sensor"]),tracker:Re(t.tracker)??c("device_tracker")}}function Os(r,e){return e.flatMap(n=>n.furniture).filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(md(r,n))).filter(n=>!!n)}var Ls=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Zn(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;return!n||!r.entities?null:Object.values(r.entities).find(i=>i.device_id===n&&i.entity_id.startsWith("sensor.")&&(Ls.test(i.translation_key??"")||Ls.test(i.entity_id.split(".")[1])))?.entity_id??null}function Ws(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function ho(r,e,t,n){let o=n?r.states[n]?.state:t?r.states[t]?.attributes.current_room:void 0;if(typeof o!="string"||["","unknown","unavailable"].includes(o))return null;let i=Ws(o);if(!i)return null;let s=l=>[l.name,l.area_id??"",l.area_id&&r.areas?.[l.area_id]?.name||""].map(Ws).filter(Boolean);return e.find(l=>s(l).includes(i))??e.find(l=>s(l).some(u=>u.length>=3&&(u.includes(i)||i.includes(u))))??null}var fd=new Set(["garage","gate","door"]);function po(r,e){let t=new Set,n=new Set,o=i=>{if(!i||i==="none"||!r.states[i])return;let s=D(i);s==="light"&&t.add(i),s==="cover"&&!fd.has(String(r.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);tt(r,K(r,i)).filter(a=>!s.has(a)).forEach(o)}return e.placements.forEach(i=>o(i.entity_id)),e.furniture.forEach(i=>o(i.entity)),{lights:[...t],covers:[...n]}}function Bs(r){let e=r.split(".")[0];switch(e){case"scene":case"script":return[e,"turn_on"];case"automation":return[e,"trigger"];case"button":case"input_button":return[e,"press"];default:return["homeassistant","toggle"]}}function mo(r,e,t){let n=t.target?.trim()??"",o=(i,s)=>e.dispatchEvent(new CustomEvent(i,{detail:s,bubbles:!0,composed:!0}));switch(t.action){case"navigate":if(!n)return;history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return;case"more_info":n&&o("hass-more-info",{entityId:n});return;case"service":{if(!n.includes("."))return;let[i,s]=n.split(".",2);r.callService(i,s,t.data??{});return}case"fire_dom_event":o("ll-custom",t.data??{});return}}function Vs(r,e){let t=e.data?.entity_id,n=e.state_entity||(e.action==="more_info"?e.target:null)||(e.action==="service"&&typeof t=="string"?t:null),o=n?r?.states[n]:void 0;return!!o&&["on","open","playing","home","heat","cool","unlocked"].includes(o.state)}var gd=[.25,.9,.45],_d=[1,.82,.55];function bd(r,e){let t=r.states[e],n=Number(t?.attributes.current_power_w??t?.attributes.power??NaN);return Number.isFinite(n)?n:null}function Ks(r,e,t){let n=[];return e.forEach((o,i)=>{if(!o||o==="none")return;let s=r.states[o];if(!s||I(s))return;if(D(o)==="light"){let u=Ae(s);u&&n.push({gang:i,color:u.color,level:u.level});return}if(!Q(s)&&s.state!=="on")return;let a=t?bd(r,o):null,l=a===null?.8:Math.min(1,.45+Math.sqrt(Math.max(0,a))/40);n.push({gang:i,color:t?gd:_d,level:l})}),n}var fo=(r,e)=>(r??[]).slice(0,e).filter(t=>!!t&&t!=="none");var wd=864e5,go=r=>{let e=new Date(r);return e.setHours(0,0,0,0),e.getTime()};function vd(r,e){let t=/(\d{4})-(\d{2})-(\d{2})/.exec(r);if(t)return new Date(Number(t[1]),Number(t[2])-1,Number(t[3])).getTime();if(t=/(\d{1,2})\.(\d{1,2})\.(\d{4}|\d{2})?/.exec(r),t){let n=t[3]?t[3].length===2?2e3+Number(t[3]):Number(t[3]):new Date(e).getFullYear(),o=new Date(n,Number(t[2])-1,Number(t[1])).getTime();return!t[3]&&o<go(e)&&(o=new Date(n+1,Number(t[2])-1,Number(t[1])).getTime()),o}return t=/(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(r),t?new Date(Number(t[3]),Number(t[1])-1,Number(t[2])).getTime():null}function Yn(r,e=Date.now()){if(!r||I(r))return null;let t=Number(r.attributes.daysTo);if(r.attributes.daysTo!==void 0&&Number.isFinite(t))return Math.max(0,Math.round(t));let n=String(r.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.max(0,Math.round(Number(n)));let o=n.toLowerCase();if(/\b(heute|today)\b/.test(o))return 0;if(o.includes("\xFCbermorgen")||o.includes("uebermorgen"))return 2;if(/\b(morgen|tomorrow)\b/.test(o))return 1;let i=vd(n,e)??(r.attributes.device_class==="timestamp"||r.attributes.device_class==="date"?Date.parse(n):null);if(i!==null&&Number.isFinite(i))return Math.max(0,Math.round((go(i)-go(e))/wd));let s=/(\d+)\s*(tag|tage|tagen|day|days)\b/i.exec(n);return s?Number(s[1]):null}function Gs(r){return!r||I(r)?!1:r.state==="on"||/^(post|mail|yes|ja|true|voll|full|detected)$/i.test(r.state.trim())}function Us(r,e=20){if(!r||I(r))return null;let t=Number(r.state);return Number.isFinite(t)?{moisture:t,thirsty:t<e}:r.entity_id.startsWith("binary_sensor.")?{moisture:NaN,thirsty:r.state==="on"}:null}var yd=/remain|rest|verbleib|time_left|timeleft|finish|end_time|fertig|programmende|program_end|done_at/i;function _o(r,e,t=Date.now()){for(let n of e){if(!n.startsWith("sensor.")||!yd.test(`${n} ${r.states[n]?.attributes.friendly_name??""}`))continue;let o=r.states[n];if(!o||I(o))continue;let i=o.attributes;if(i.device_class==="timestamp"){let u=Date.parse(o.state);if(Number.isFinite(u)&&u>t)return Math.ceil((u-t)/6e4);continue}let s=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(o.state.trim());if(s){let u=s[3]!==void 0?Number(s[1])*60+Number(s[2])+Number(s[3])/60:Number(s[1])*60+Number(s[2]);if(u>0)return Math.ceil(u);continue}let a=Number(o.state);if(!Number.isFinite(a)||a<=0)continue;let l=String(i.unit_of_measurement??"min").toLowerCase();return Math.ceil(l==="h"?a*60:l==="s"?a/60:a)}return null}function Zt(r,e){let t=e?r.entities?.[e]?.device_id:null;return t&&r.entities?Object.values(r.entities).filter(n=>n.device_id===t).map(n=>n.entity_id):[]}var js=r=>r<60?`${r} min`:`${Math.floor(r/60)} h ${String(r%60).padStart(2,"0")} min`;function kd(r,e){let t=e?r.states[e]:void 0;if(!t||I(t))return null;let n=t.attributes.current_position;return typeof n=="number"?Math.min(100,Math.max(0,n)):t.state==="open"?100:t.state==="closed"?0:t.state==="opening"||t.state==="closing"?50:null}function qs(r,e){let t=new Map;for(let n of e.floors.flatMap(o=>o.furniture)){let o=q(n.type);if(!o||!Tn(o))continue;let i=n.cover_entity?kd(r,n.cover_entity):null;t.set(n.id,rs(o,i!==null&&n.cover_inverted?100-i:i))}return t}var xd={view:"3D",editor:"Editor",all_floors:"Alle Etagen",outside_area:"Au\xDFen",outside_area_hint:"Alle Ger\xE4te drau\xDFen auf einen Blick: im Garten, au\xDFerhalb der R\xE4ume, und was zu Au\xDFen geh\xF6rt (etwa die Wetterstation auf dem Dach).",device_outside:"Geh\xF6rt zu Au\xDFen",device_outside_hint:"Das Ger\xE4t z\xE4hlt nicht zum Raum darunter (eine Wetterstation auf dem Dach) und steht im Au\xDFen-Panel.",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",no_rooms_admin:"Die Etagen sind angelegt, aber es gibt noch keinen Raum. W\xE4nde allein reichen nicht: Zeichne im Editor mit \u201ERechteck\u201C oder \u201EFreie Form\u201C mindestens einen Raum.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",walls_slope:"Schr\xE4g",walls_slope_hint:"W\xE4nde schr\xE4g abgeschnitten: vorne halbhoch, hinten voll \u2013 wie ein Puppenhaus, dreht mit der Kamera",walls_solid:"Massiv",walls_solid_hint:"Massive W\xE4nde in ihren Farben statt Glas (Farben: Editor \u2192 Einstellungen, pro Raum im Raum)",wall_paint_outside:"Wandfarbe au\xDFen",wall_paint_inside:"Wandfarbe innen",furn_color_body:"M\xF6belfarbe Korpus",furn_color_wood:"M\xF6belfarbe Holz",furn_color_fabric:"M\xF6belfarbe Stoff",furn_color_white:"M\xF6belfarbe Wei\xDF",furn_color_metal:"M\xF6belfarbe Metall",furn_color_dark:"M\xF6belfarbe Dunkel",furn_color_hint:"Die M\xF6bel sind aus wenigen Materialien gebaut, auch die aus dem M\xF6belbauer und den Paketen. Hier bekommt jedes Material eine Farbe f\xFCr das ganze Haus; eine Karte kann eigene Farben setzen. Am st\xE4rksten sieht man sie im Look Neon, Tag und Blaupause f\xE4rben sie nur leicht.",wall_paint_room:"Wandfarbe innen (dieser Raum)",wall_paint_floor:"Wandfarbe au\xDFen (diese Etage)",wall_paint_hint:"Gilt in der 3D-Ansicht \u201EMassiv\u201C.",wall_paint_default:"Standard",card_solid_walls:"Massive W\xE4nde (in ihren Farben)",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",floor_layer:"Ebene (ein- und ausblendbar)",floor_power:"Etagen-Z\xE4hler (Leistung)",floor_power_hint:"Ein Leistungssensor nur f\xFCr diese Etage (ein Unterz\xE4hler, eine Wohnung). Sein Wert steht auf dem Etagen-Schild und in der Ansicht dieser Etage auf der Haus-Karte, mit seinem Anteil am Verbrauch des Hauses.",floor_power_share:"{n} % vom Haus",living_area:"Wohnfl\xE4che {living}",room_living:"Z\xE4hlt zur Wohnfl\xE4che",living_area_none:"Keine Wohnfl\xE4che \xB7 Grundfl\xE4che {floor}",living_area_low:"Wohnfl\xE4che {living} (Grundfl\xE4che {floor}, davon {low} unter 2 m H\xF6he)",living_area_hint:"Gerechnet wie die Wohnfl\xE4chenverordnung: die Fl\xE4che innerhalb der W\xE4nde, voll ab 2 m lichter H\xF6he, zur H\xE4lfte zwischen 1 und 2 m (unter Schr\xE4gen), unter 1 m gar nicht. Ein Richtwert, kein Aufma\xDF.",living_area_floor:"Wohnfl\xE4che: {floor}",living_area_floor_house:"Wohnfl\xE4che dieser Etage: {floor} \xB7 ganzes Haus: {house}",print_plan:"Plan drucken / PDF",print_plan_hint:"Jede Etage als sauberer Plan mit Ma\xDFen und Fl\xE4chen, dazu eine Fl\xE4chentabelle \u2013 zum Drucken oder im Druckdialog als PDF speichern.",print_title:"Grundriss",print_room:"Raum",print_floor_area:"Grundfl\xE4che",print_living:"Wohnfl\xE4che",print_low:"unter 2 m",print_total:"Summe",print_blocked:"Das Druckfenster wurde blockiert \u2013 bitte Pop-ups f\xFCr Home Assistant erlauben.",check_open:"Plan pr\xFCfen",note:"Notiz",note_add:"Notiz hier",note_text:"Text",note_placeholder:"z. B. \u201EFilter wechseln\u201C oder \u201ESicherung 12\u201C",note_due:"F\xE4llig am",note_height:"H\xF6he \xFCber dem Boden (m)",note_height_hint:"Wo der Pin in der 3D-Ansicht schwebt: 1,3 m ist Augenh\xF6he, mehr f\xFCr etwas unter der Decke (ein Absperrventil, eine Klappe).",note_photo_upload:"Foto hinzuf\xFCgen",note_photo_hint:"Das Foto erscheint, wenn man die Notiz in der 3D-Ansicht antippt, z. B. wie das Ventil aussieht.",note_due_hint:"Ab diesem Tag wird der Pin orange.",note_is_due:"Diese Notiz ist f\xE4llig.",keys_title:"Tasten im Editor",keys_undo:"R\xFCckg\xE4ngig",keys_redo:"Wiederholen",keys_duplicate:"Raum verdoppeln",keys_delete:"Auswahl l\xF6schen",keys_nudge:"Auswahl um einen Rasterschritt verschieben",keys_nudge_10:"\u2026 um 10 cm",keys_nudge_1:"\u2026 um 1 cm",keys_rotate:"M\xF6bel um 90\xB0 drehen (Shift: zur\xFCck)",keys_lock:"M\xF6bel, Ger\xE4t oder Dachteil festsetzen / l\xF6sen",keys_close_shape:"Freie Form schlie\xDFen",keys_escape:"Abbrechen, Werkzeug verlassen, Auswahl aufheben",keys_straight:"Beim Zeichnen: gerade Linien",keys_sheet:"Diese \xDCbersicht",tour_title:"Erste Schritte",tour_1_title:"R\xE4ume zeichnen",tour_1:"Mit \u201E{rect}\u201C oder \u201E{free}\u201C zeichnest du die R\xE4ume; die W\xE4nde entstehen von selbst. Ordne jedem Raum seinen Home-Assistant-Bereich zu \u2013 dann findet NextFloor seine Ger\xE4te. Hast du schon Bereiche, legt \u201E{rooms}\u201C im Etagenformular sie auf einmal an.",tour_2_title:"T\xFCren und Fenster",tour_2:"\u201E{opening}\u201C setzt sie auf eine Wand. Verkn\xFCpfe ihren Kontakt oder Rollladen \u2013 in 3D gehen sie dann mit auf und zu, und offene Fenster melden sich.",tour_3_title:"M\xF6bel und Ger\xE4te",tour_3:"\u201E{furniture}\u201C \xF6ffnet die Bibliothek \u2013 oder baue eigene St\xFCcke in der \u{1F6E0}\uFE0F M\xF6bel-Werkstatt. W\xE4hlst du einen Raum, stehen darunter die Ger\xE4te seines Bereichs zum Platzieren bereit; Lampen leuchten dann in der Farbe ihres Lichts.",tour_4_title:"Ansehen und pr\xFCfen",tour_4:"\u201E{split}\u201C zeigt dein Haus beim Zeichnen; oben wechselst du in die 3D-Ansicht. \u201E{check}\u201C listet, was noch fehlt \u2013 und mit ? siehst du jederzeit die Tasten.",tour_next:"Weiter",tour_back:"Zur\xFCck",tour_done:"Los geht's",tour_skip:"\xDCberspringen",check_open_hint:"Listet, was im Plan fehlt oder schief ist, mit einer L\xF6sung per Tipp.",check_title:"Plan-Pr\xFCfung",check_all_good:"Alles in Ordnung \u2013 nichts gefunden.",check_hint:"{n} Punkte gefunden. Blaue Kn\xF6pfe \xE4ndern den Plan (R\xFCckg\xE4ngig geht wie immer), die anderen zeigen die Stelle.",check_room_no_area:"\u201E{room}\u201C hat keinen Home-Assistant-Bereich: seine Ger\xE4te werden nicht gefunden.",check_room_no_area_named:"\u201E{room}\u201C hat keinen Bereich \u2013 der freie Bereich \u201E{area}\u201C hei\xDFt genauso.",check_areas_unplaced:"{n} Bereiche dieser Etage haben noch keinen Raum: {names}",check_devices_unplaced:"\u201E{room}\u201C: {n} Ger\xE4te des Bereichs stehen noch nicht im Plan.",check_rooms_overlap:"\u201E{a}\u201C und \u201E{b}\u201C liegen \xFCbereinander.",check_opening_off_wall:"Eine T\xFCr oder ein Fenster in \u201E{room}\u201C sitzt auf keiner Wand.",check_entity_missing:"{n} Ger\xE4te-Pins zeigen auf Entit\xE4ten, die Home Assistant nicht mehr kennt ({ids}).",check_furniture_entity_missing:"Ein M\xF6bel ist mit {id} verkn\xFCpft \u2013 die Entit\xE4t gibt es nicht mehr.",check_battery_low:"Batterie schwach: {name} ({level} %)",battery_low_n:"Batterie schwach: {names}",check_standby:"{name} zieht {w} W, obwohl aus \u2013 etwa {cost} im Jahr.",check_fix_show:"Zeigen",check_fix_ignore:"Ignorieren",check_show_devices:"{n} Ger\xE4te ansehen",check_ignore_all:"Alle {n} ignorieren",check_reset_ignored:"{n} ignorierte Ger\xE4te wieder pr\xFCfen",check_fix_set_area:"\u201E{area}\u201C zuordnen",check_fix_add_rooms:"R\xE4ume anlegen",check_fix_place:"{n} setzen",check_fix_remove:"{n} entfernen",floor_layer_hint:"Diese Etage ist kein Geschoss, sondern eine Ebene \u2013 z. B. alle B\xE4ume oder die Deko. Die 3D-Ansicht zeigt oben ein Auge, mit dem du sie auf jedem Ger\xE4t ein- und ausblendest.",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",floor_copy:"Etage duplizieren",floor_copy_hint:"Die Kopie kommt oben aufs Haus, mit allen R\xE4umen, W\xE4nden, T\xFCren und Fenstern. R\xE4ume und Etage verlieren ihre Verkn\xFCpfung mit Home Assistant, M\xF6bel ihre Entit\xE4ten; Energieger\xE4te bleiben auf der alten Etage.",floor_copy_furniture:"M\xF6bel mitnehmen",floor_copy_devices:"Ger\xE4te-Pins mitnehmen",floor_copy_devices_hint:"Dieselbe Entit\xE4t steht dann auf beiden Etagen.",floor_copy_outdoor:"Au\xDFenfl\xE4chen mitnehmen",floor_copy_make:"Kopie anlegen",floor_copy_name:"{name} (Kopie)",furn_to_floor:"Auf Etage verschieben",furn_to_floor_hint:"Das M\xF6bel wandert an dieselbe Stelle auf der gew\xE4hlten Etage.",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",sub_area_add:"+ Bereich im Raum",sub_area_hint:"Ein Teil des Raums mit eigenem Home-Assistant-Bereich, aber ohne eigene W\xE4nde \u2013 eine Leseecke, ein Regal, eine K\xFCchenzeile im Wohnraum. Seine Ger\xE4te und Sensoren geh\xF6ren zu diesem Raum.",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",sofa_shape:"Form",sofa_straight:"Gerade",sofa_l:"L-Form (Spiegeln: andere Seite)",sofa_u:"U-Form",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",share_view:"Ansicht teilen",share_view_hint:"Speichert das Haus als kleine Datei, die in jedem Browser ohne Home Assistant aufgeht (\xFCber die Online-Demo von NextFloor) \u2013 zum Zeigen f\xFCr Familie oder Planer. Ohne Ger\xE4te und Entit\xE4ten, wie eine Vorlage.",share_view_title:"Unser Haus in NextFloor",share_view_needs_js:"Diese Seite braucht JavaScript und eine Internetverbindung.",share_view_file:"ansicht",share_view_done:"Ansicht gespeichert \u2013 die Datei im Browser \xF6ffnen oder weitergeben.",version_save:"Stand speichern \u2026",version_save_hint:"H\xE4lt den Plan unter einem Namen fest (\u201Evor dem Umbau\u201C). Benannte St\xE4nde bleiben, wenn die automatischen Wiederherstellungspunkte gehen.",version_name_prompt:"Name f\xFCr diesen Stand (z. B. \u201Evor dem Umbau\u201C):",version_saved:"Stand \u201E{name}\u201C gespeichert.",version_compare:"Vergleichen",version_delete_confirm:"\u201E{name}\u201C l\xF6schen?",version_same:"Kein Unterschied zum Plan.",version_diff_n:"{n} Unterschiede zum Plan, wie er jetzt ist:",diff_floor_added:"Etage \u201E{name}\u201C neu",diff_floor_removed:"Etage \u201E{name}\u201C entfernt",diff_room_added:"Raum \u201E{name}\u201C neu",diff_room_removed:"Raum \u201E{name}\u201C entfernt",diff_room_renamed:"\u201E{detail}\u201C hei\xDFt jetzt \u201E{name}\u201C",diff_room_reshaped:"\u201E{name}\u201C umgeformt ({detail} m\xB2)",diff_opening_added:"{name} neu ({detail})",diff_opening_removed:"{name} entfernt ({detail})",diff_furniture_added:"{name} neu",diff_furniture_removed:"{name} entfernt",diff_furniture_moved:"{name} verschoben oder ge\xE4ndert",diff_device_added:"Ger\xE4t {name} gesetzt",diff_device_removed:"Ger\xE4t {name} entfernt",diff_device_moved:"Ger\xE4t {name} verschoben",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",blind_kind:"Art des Behangs",blind_roller:"Rollladen au\xDFen",blind_venetian:"Raffstore mit Lamellen",blind_inside:"Rollo innen",cover2_entity:"Zweiter Rollladen (rechte H\xE4lfte)",cover_my:"Lieblingsposition \u201EMy\u201C (%, 0 = keine)",cover_my_go:"Zur Lieblingsposition ({p} %)",blind_hint:"Ein Raffstore dreht seine Lamellen in 3D mit der Lamellenstellung des Rollladens; ein Rollo innen h\xE4ngt hinter dem Glas. Ein breites Fenster kann f\xFCr seine rechte H\xE4lfte einen zweiten Rollladen haben. Die Lieblingsposition erscheint als \u201EMy\u201C im Schnellmen\xFC: ein Rollladen mit Positionen f\xE4hrt dorthin, ein Somfy-RTS-Motor ohne R\xFCckmeldung f\xE4hrt mit Stopp in seine eigene My-Stellung.",confirm_switch:"{name} wirklich schalten?",lock_confirm_unlock:"{name} wirklich aufschlie\xDFen?",gang_switch_one:"Schaltet",furn_cover_entity:"Bewegt sich mit",furn_cover_hint:"Vorhang, Leinwand, Markise oder Tor folgen dieser Cover-Entit\xE4t (Rollladen, Vorhang, Markise, Tor) und fahren mit ihr. Ein Tipp \xF6ffnet ihr Men\xFC (auf, Stopp, zu).",furn_cover_inverted:"Laufrichtung umkehren",furn_cover_inverted_hint:"F\xFCr eine Markise oder einen Vorhang, die im Plan genau andersherum fahren als in Wirklichkeit: ausgefahren zeigt dann eingefahren und umgekehrt.",gang_switch:"Taste {n} schaltet",gang_socket_one:"Steckdose an",gang_socket:"Steckdose {n} an",gang_switch_hint:"Eine Taste leuchtet, solange ihr Licht an ist (in seiner Farbe). Ein Tipp schaltet; bei mehreren Tasten fragt ein kleines Men\xFC, welche. Dieselbe Entit\xE4t darf an mehreren Schaltern sitzen.",gang_socket_hint:"Eine Steckdose leuchtet gr\xFCn, solange ihr Schalter an ist \u2013 heller, je mehr sie zieht. Ein Tipp schaltet; bei mehreren fragt ein kleines Men\xFC, welche.",lock_confirm_lock:"{name} abschlie\xDFen?",opening_lock:"Smart Lock",opening_lock_hint:"Ein Tipp auf die T\xFCr schlie\xDFt ab oder auf (immer mit R\xFCckfrage). Solange sie aufgeschlossen ist, leuchtet ihre Kante.",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",units:"Ma\xDFe anzeigen in",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:"Wie L\xE4ngen und Fl\xE4chen im Plan, in den Formularen und in der Wandansicht stehen. Eingaben bleiben in Metern.",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",side_failed:"Dieses Formular lie\xDF sich nicht anzeigen ({error}). Der Grundriss bleibt bedienbar. Bitte melde den Text in einem GitHub-Issue.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_announce:"\u{1F4E2} Durchsage",announce_placeholder:"Eigene Nachricht \u2026",announce_send:"Sagen",announce_sent:"Gesagt: \u201E{message}\u201C",announce_failed:"Durchsage fehlgeschlagen: {error}",announce_phrase_1:"Essen ist fertig!",announce_phrase_2:"Zeit f\xFCrs Bett!",announce_phrase_3:"Bitte runterkommen!",announce_phrase_4:"Wir fahren gleich los!",announce_phrase_5:"Der Hund muss raus!",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",readable:"Gut lesbar",readable_hint:"Kr\xE4ftigere Kontraste und gr\xF6\xDFere Schrift \u2013 f\xFCr Wandtablets und alle, die so besser lesen.",plain:"Nur Grundriss",plain_hint:"Zeigt nur W\xE4nde, T\xFCren, Fenster und Treppen, ohne M\xF6bel. Ger\xE4te und ihre Pins bleiben.",right_back:"Rechtsklick = zur\xFCck",right_back_hint:"Ein kurzer Rechtsklick in der 3D-Ansicht geht einen Schritt zur\xFCck: vom Raum zur Etage, von der Etage zum Haus (wie ein Doppeltipp auf leere Fl\xE4che). Ziehen mit der rechten Taste verschiebt weiter die Ansicht.",stl:"3D-Druck (STL)",stl_hint:"Speichert das Haus als STL-Datei (W\xE4nde, B\xF6den, M\xF6bel und Au\xDFenfl\xE4chen aller Etagen) zum 3D-Drucken, im Ma\xDFstab 1:100 (ein Meter wird zu 10 mm). Fenster, Licht und Dach fehlen; ein Slicer repariert die Datei bei Bedarf.",card_plain:"Nur Grundriss",card_rooms:"Nur diese R\xE4ume",card_rooms_hint:"Die Karte zeigt nur die angehakten R\xE4ume mit ihren M\xF6beln, Ger\xE4ten, T\xFCren und Fenstern (zum Beispiel f\xFCr ein Tablet in der K\xFCche). Nichts angehakt: der ganze Plan.",card_templates:"Kartenvorlagen",card_templates_hint:"Eine Dashboard-Karte einmal hier einrichten (mit den Einstellungen der Karte) und auf jedem Tablet nur noch den Namen angeben: `template: k\xFCche_tablet`. \xC4nderungen hier erreichen alle Karten mit dieser Vorlage; was auf der Karte selbst steht, gilt vor der Vorlage.",template_name:"Neue Vorlage (Name)",template_add:"Vorlage anlegen",template_reload:"Bildschirme mit dieser Vorlage neu laden",template_reload_all:"Alle Bildschirme neu laden",template_use:"Auf der Dashboard-Karte: `template: {name}`",card_template:"Kartenvorlage",card_template_none:"keine (nur diese Karte)",card_readable:"Gut lesbar",all_off_n:"Alles aus ({n})",all_off_hint:"Schaltet Lichter, Schalter, Ventilatoren und Medien des Raums aus; zehn Sekunden lang l\xE4sst es sich r\xFCckg\xE4ngig machen.",all_off_done:"Alles aus.",all_off_undo:"R\xFCckg\xE4ngig",all_off_floor:"Alles aus im {floor} ({n} Ger\xE4te), zehn Sekunden lang r\xFCckg\xE4ngig zu machen",mood_save:"Stimmung speichern",mood_save_hint:"Speichert, wie die Lampen des Raums gerade leuchten, als Stimmung \u2013 ein Tipp darauf stellt sie sp\xE4ter wieder her, \u201E\u2192\u201C \xFCbertr\xE4gt sie auf einen anderen Raum.",mood_new:"Stimmung",mood_set:"Stimmung einstellen",mood_carry:"Auf einen anderen Raum \xFCbertragen",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",favorite_floor:"Auf welcher Etage dieser Favorit erscheint",favorite_all_floors:"Alle Etagen",outside_hidden:"Drau\xDFen: Ger\xE4te ausblenden",outside_hidden_hint:"Ger\xE4te, die das Fenster \u201EDrau\xDFen\u201C nicht zeigen soll (sie bleiben im Plan).",outside_hidden_add:"Ger\xE4t ausblenden",outside_view_hint:"Ansicht f\xFCr \u201EDrau\xDFen\u201C: Dreh die 3D-Vorschau auf den Garten und \xFCbernimm sie. Beim \xD6ffnen von \u201EDrau\xDFen\u201C fliegt die Kamera dorthin.",outside_view_set:"Diese Ansicht f\xFCr Drau\xDFen",outside_view_reset:"Ansicht f\xFCr Drau\xDFen zur\xFCcksetzen",room_facts:"Raumfenster: angezeigte Angaben",room_fact_sun:"Sonnenstunden",room_fact_comfort:"Komfort",room_fact_air:"L\xFCftungshinweis",room_fact_circuits:"Stromkreise",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",ambilight:"Leuchten hinter dem Fernseher (%)",ambilight_hint:"Wie kr\xE4ftig es hinter dem Fernseher leuchtet, solange er l\xE4uft. 0 schaltet es aus (zum Beispiel wenn du LED-Streifen am Fernseher hast), 100 ist die Standardst\xE4rke.",sound_rings:"Klangringe (%)",sound_rings_hint:"Wie gro\xDF die Ringe um den Lautsprecher werden, solange er spielt. 0 schaltet sie aus, Bild und Leuchten bleiben; 100 ist die Standardgr\xF6\xDFe. Die Gr\xF6\xDFe folgt au\xDFerdem der Lautst\xE4rke des Lautsprechers: leiser hei\xDFt kleiner.",glow_scale:"Leuchtst\xE4rke in 3D (%)",light_effects:"Effektanimationen in 3D",light_effects_hint:"Nur exakte HA-Effektnamen zuordnen. Ohne Zuordnung bleibt die HA-Farbe statisch. \xC4ndert nichts in Home Assistant.",light_effects_enabled:"Animationen f\xFCr diese Leuchte erlauben",light_effect_unmapped:"Nicht zugeordnet (statisch)",light_effect_add:"Exakten Effektnamen hinzuf\xFCgen",light_effect_name_limit:"Der exakte Effektname muss 1 bis 255 Zeichen lang sein. Er wird nicht gek\xFCrzt.",light_effect_count_limit:"Maximal 100 Zuordnungen. Entferne zuerst einen vorhandenen Eintrag.",light_effect_exists:"Dieser Effektname ist bereits zugeordnet. Die vorhandene Zuordnung bleibt erhalten.",light_animation_none:"Statisch",light_animation_rainbow:"Regenbogen (ersetzt Farbe)",light_animation_pulse:"Pulsieren (Intensit\xE4t)",light_animation_flicker:"Flackern (Intensit\xE4t)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_speakers:"Nur auf diesen Lautsprechern (keiner = auf allen)",media_play:"Abspielen",media_pause:"Pause",media_previous:"Zur\xFCck",media_next:"Weiter",media_volume:"Lautst\xE4rke",media_sources:"Quellen",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_alerts:"Eigene Warnungen",circuits:"Sicherungskasten",circuits_hint:"Die Stromkreise mit den R\xE4umen, die an ihnen h\xE4ngen. Das Raum-Panel nennt sie, und die Suche findet sie (\u201EF12\u201C).",circuit_name:"Name",circuit_new:"Neuer Stromkreis",circuit_add:"Stromkreis hinzuf\xFCgen",circuit_add_room:"Raum hinzuf\xFCgen",own_alerts_hint:"Eine Zeile in der Warnleiste der 3D-Ansicht, solange eine Entit\xE4t in einem Zustand ist \u2013 \u201EWassertank leer\u201C vom Saugroboter, \u201ESp\xFClmaschine fertig\u201C. Mehrere Zust\xE4nde mit Komma; bei Zahlen <20 oder >80.",own_alert_entity:"Wenn \u2026",own_alert_state:"\u2026 im Zustand ist (leer = an)",own_alert_text:"\u2026 dann diese Warnung",own_alert_color:"Farbe",own_alert_tap:"Antippen",own_alert_tap_info:"\xF6ffnet die Details",own_alert_tap_toggle:"schaltet die Entit\xE4t",own_alert_tap_room:"springt in den Raum",own_alert_house:"Ganzes Haus",own_alert_new:"Neue Warnung",own_alert_add:"Warnung hinzuf\xFCgen",today:"Heute",tomorrow:"Morgen",today_days:"Tage auf der Karte \u201EHeute\u201C",today_days_one:"Nur heute",today_days_n:"{n} Tage",forecast:"Wettervorhersage",forecast_hint:"Eine kleine Karte mit den n\xE4chsten Tagen der Wetter-Entit\xE4t (Einstellungen): Wetter, H\xF6chst- und Tiefstwert, Regen. Sie steht in einer oberen Ecke der 3D-Ansicht, oben rechts unter der Karte \u201EHeute\u201C.",forecast_days:"Vorhersage",forecast_off:"Aus",forecast_corner:"Ecke",today_none:"Heute steht nichts an.",today_calendars:"Kalender f\xFCr \u201EHeute\u201C",today_calendars_hint:"Die Termine dieser Kalender stehen oben rechts in der 3D-Ansicht auf der Karte \u201EHeute\u201C, zusammen mit den M\xFClltonnen, die heute oder morgen abgeholt werden. Ein Tipp auf den Titel klappt die Karte ein.",own_button_state:"Leuchtet, solange \u2026 an ist (optional)",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",panel_fold:"Einklappen (Raum bleibt sichtbar)",panel_unfold:"Wieder aufklappen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_floor_thumbs_folded:"Mini-Ansichten eingeklappt starten",card_floor_thumbs_folded_hint:"Nur kleine Etagen-Kn\xF6pfe am Rand \u2013 der Pfeil klappt die Bilder trotzdem auf",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_sensor_bar:"Eigene Sensoren oben",card_sensor_bar_hint:"Die im Editor gew\xE4hlten Sensoren (Einstellungen) oben links auf der Karte",card_central_open:"Sternmen\xFC offen und gro\xDF",card_central_open_hint:"Favoriten und eigene Kn\xF6pfe stehen von Anfang an offen, eine Nummer gr\xF6\xDFer",card_keep_camera:"Kamera beim Etagenwechsel behalten",card_keep_camera_hint:"Gleiche Seite, H\xF6he und Entfernung auf jeder Etage",card_today:"Karte \u201EHeute\u201C",card_today_hint:"Termine von heute und f\xE4llige M\xFClltonnen oben rechts",card_announcements:"Durchsagen",card_announcements_hint:"Durchsagen (Aktion \u201ENextFloor: Durchsage\u201C) erscheinen gro\xDF auf der Karte, mit Gong und gesprochen",weather_short:"Wetter",time_of_day:"Tageszeit",time_of_day_hint:"Zeigt Sonne, Licht, Schatten und Look zu einer anderen Uhrzeit von heute. Noch einmal tippen zeigt wieder das Jetzt.",menu_open:"Men\xFC offen",menu_open_hint:"Das Sternmen\xFC mit Favoriten und eigenen Kn\xF6pfen steht auf diesem Ger\xE4t von Anfang an offen, eine Nummer gr\xF6\xDFer \u2013 f\xFCr ein Wandtablet, das vor allem Szenen schaltet.",keep_camera:"Kamera behalten",keep_camera_hint:"Beim Wechsel der Etage bleibt die Kamera auf derselben Seite, H\xF6he und Entfernung, statt die neue Etage von der Startseite aus einzupassen.",view_zoom:"Zoom",view_zoom_hint:"Wie nah die eingepassten Ansichten kommen \u2013 auf kleinen Tablets wirkt das Haus gr\xF6\xDFer.",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",card_weather_density:"Regen- und Schneemenge",card_weather_density_hint:"Weniger Tropfen und Flocken als das Wetter meldet; Wolken, Nebel und Blitze bleiben",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht und Schatten",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden, und das Haus wirft seinen Schatten auf das Grundst\xFCck. Ohne Haken bleiben Boden und Grundst\xFCck ohne Sonnenflecken und Schatten.",sun_arc:"Sonnenbogen und Kompass",sun_arc_hint:"Zeichnet den Weg der Sonne von heute als Bogen \xFCber das Grundst\xFCck, mit einem Ring und den Himmelsrichtungen am Boden (Norden rot). Braucht die Position deines Zuhauses in Home Assistant.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_by:"Alarm ausgel\xF6st durch {cause}",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_lost:"Kontakt antwortet nicht: {name}",rain_sensor:"Regensensor (eigene Wetterstation)",rain_sensor_inverted:"Regensensor umkehren",rain_sensor_inverted_hint:"F\xFCr Sensoren, die bei Regen \u201Eaus\u201C (oder 0) melden und bei Trockenheit \u201Eein\u201C.",outage_sensor:"Sensor f\xFCr Stromausfall",outage_hint:"Ein Bin\xE4rsensor der Klasse Strom, der aus ist, ein anderer Bin\xE4rsensor, der an ist, ein Status wie \u201Eoff_grid\u201C oder \u201Ebackup\u201C oder eine Spannung unter 50 V l\xF6sen eine Warnung f\xFCrs ganze Haus aus.",contact_warning:"Warnen, wenn ein T\xFCr- oder Fensterkontakt nicht erreichbar ist",contact_warning_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D geschlossen aus, obwohl es keiner wei\xDF. Dann nennt ein Hinweis den Kontakt. Ein Neustart von Home Assistant warnt nicht.",night_lock_warning:"Nachts warnen, wenn eine T\xFCr nicht abgeschlossen ist",night_lock_warning_hint:"Zwischen 22 und 6 Uhr nennt ein Hinweis die T\xFCrschl\xF6sser des Plans, die offen stehen.",alert_unlocked_night:"Nicht abgeschlossen: {name}",motion_markers_active:"Bewegungsmelder nur zeigen, wenn sie etwas erkennen",motion_markers_active_hint:"Gilt f\xFCr Bewegungs-, Anwesenheits- und Pr\xE4senzmelder. Ein Melder, dessen Symbol auf immer zeigen steht, bleibt sichtbar.",room_double_tap:"Doppeltipp auf einen Raum",room_double_tap_hint:"Ein Doppeltipp auf einen Raum schaltet seine Lichter aus, wenn eins an ist, sonst alle an. Ger\xE4te mit \u201EErst fragen\u201C bleiben immer au\xDFen vor.",room_double_tap_area:"Lampen im Plan und alle Lichter des Bereichs",room_double_tap_plan:"Nur Lampen im Plan",room_double_tap_off:"Nichts schalten",card_room_double_tap_auto:"Wie im Plan eingestellt",status_entities:"Eigene Sensoren oben in der 3D-Ansicht",status_add:"Sensor hinzuf\xFCgen",status_entities_hint:"Zum Beispiel Au\xDFentemperatur, Alarmanlage oder Luftqualit\xE4t: Sie stehen oben links mit Name und Wert, auch in einem ge\xF6ffneten Raum. Antippen \xF6ffnet die Details. Bis zu 12.",announce_tts:"Text-zu-Sprache f\xFCr Durchsagen",announce_phrases:"S\xE4tze f\xFCr Durchsagen (einer pro Zeile)",announce_phrases_hint:"Leer: die mitgelieferten S\xE4tze. Durchsagen gibt es auch als Aktion \u201ENextFloor: Durchsage\u201C f\xFCr Automationen \u2013 auf den Lautsprechern der R\xE4ume und auf jedem offenen NextFloor-Bildschirm.",opening_rain_warning:"Bei Regen warnen",opening_light_well:"Lichtschacht davor",sill_boards:"Fensterbank",sill_boards_auto:"Automatisch",sill_boards_none:"Keine",sill_boards_inside:"Nur innen",sill_boards_outside:"Nur au\xDFen",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",import_other_hint:"Aus Sweet Home 3D: die .sh3d-Datei hier importieren. Etagen, R\xE4ume, T\xFCren, Fenster und freie W\xE4nde werden \xFCbernommen, M\xF6bel nicht.",import_sh3d_found:"Sweet Home 3D: {floors} Etagen, {rooms} R\xE4ume, {openings} T\xFCren und Fenster, {walls} freie W\xE4nde ({furniture} M\xF6bel werden nicht \xFCbernommen).",import_dxf_found:"DXF: {rooms} R\xE4ume (geschlossene Polylinien) und {walls} freie W\xE4nde (Linien) auf einer Etage.",import_ifc_found:"In der IFC-Datei: {floors} Etagen und {rooms} R\xE4ume (die W\xE4nde zeichnet NextFloor aus den R\xE4umen).",import_roomplan_found:"Raumscan (RoomPlan): {rooms} R\xE4ume, {openings} T\xFCren und Fenster; {skipped} Objekte wurden nicht \xFCbernommen (M\xF6bel stellst du selbst).",import_error_roomplan_empty:"Im Raumscan sind keine W\xE4nde.",import_error_ifc_empty:"In der IFC-Datei sind keine R\xE4ume (IfcSpace) mit Grundriss.",import_error_dxf_empty:"In der DXF-Datei sind keine Linien oder Polylinien.",import_error_sh3d:"Das ist keine Sweet-Home-3D-Datei, die sich lesen l\xE4sst (es braucht Sweet Home 3D 5.3 oder neuer).",import_error_sh3d_empty:"In der Sweet-Home-3D-Datei sind keine R\xE4ume oder W\xE4nde.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",bars_unfold:"Schalter",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_buttons:"Raum-Kn\xF6pfe",card_room_buttons_hint:"Eine Reihe mit einem Knopf je Raum oben in der Karte \u2013 antippen \xF6ffnet den Raum, wie das Antippen im Modell",card_room_panel_hint:"Lichter und Rolll\xE4den des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",care_bin_today:"Heute Abholung",care_bin_tomorrow:"Morgen Abholung",care_bin_days:"In {n} Tagen",care_mail_yes:"Post ist da",care_mail_no:"Leer",care_plant_thirsty:"Durst",care_plant_ok:"Gut versorgt",care_time_left:"Noch {time}",care_entity_bin:"Abholtermin (Sensor)",care_entity_mail:"Post-Sensor",care_entity_plant:"Bodenfeuchte (Sensor)",care_thirsty_below:"Durst unter (%)",care_hint_bin:"Ein Sensor mit dem n\xE4chsten Abholtermin: Tage, ein Datum, \u201Eheute\u201C/\u201Emorgen\u201C oder die Integration Waste Collection Schedule. Am Tag davor und am Abholtag leuchtet die Tonne.",care_hint_mail:"Ein Sensor, der meldet, dass Post im Kasten ist (z. B. ein Kontakt an der Klappe). Dann leuchtet der Briefkasten.",care_hint_plant:"Ein Feuchtesensor in der Erde. Darunter leuchtet die Pflanze und meldet Durst.",lib_cat_lights:"Leuchten",lib_cat_seating:"Sitzen",lib_cat_tables:"Tische",lib_cat_storage:"Schr\xE4nke & Regale",lib_cat_beds:"Betten",lib_cat_kitchen:"K\xFCche",lib_cat_appliances:"Haushaltsger\xE4te",lib_cat_bath:"Bad",lib_cat_media:"TV & Audio",lib_cat_office:"B\xFCro",lib_cat_tech:"Technik",lib_cat_climate:"Heizung & Klima",lib_cat_energy:"Energie",lib_cat_garden:"Garten & Terrasse",lib_cat_plants:"Pflanzen",lib_cat_kids:"Kinder",lib_cat_fitness:"Fitness",lib_cat_pets:"Haustiere",lib_cat_workshop:"Werkstatt & Garage",lib_cat_music:"Musik & Atelier",lib_cat_season:"Saison & Deko",lib_cat_pictures:"Bilder & Rahmen",lib_cat_vehicles:"Fahrzeuge",lib_cat_building:"Treppen & Bauteile",lib_cat_decor:"Deko & Sonstiges",lib_favourites:"Favoriten",lib_recent:"Zuletzt benutzt",lib_for_room:"Passend zu {room}",lib_all_rooms:"Alle R\xE4ume zeigen",lib_linkable:"verkn\xFCpfbar",lib_lit:"leuchtet",lib_outdoor:"drau\xDFen",lib_fav_add:"Zu den Favoriten",lib_fav_remove:"Aus den Favoriten nehmen",lib_sizes:"Gr\xF6\xDFen",feature_name_energy:"Energiefluss",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",models:"Eigene 3D-Modelle",models_hint:"F\xFCr manche Fahrzeuge kann NextFloor ein echtes 3D-Modell zeigen, wenn du eins besitzt. W\xE4hle die Datei (.glb) hier aus: NextFloor dreht sie richtig herum, macht sie leichter, markiert den Lack und legt sie auf deinem Home Assistant ab. Ohne Modell sieht das Fahrzeug aus wie bisher.",models_licence:"Die Dateien geh\xF6ren dir und bleiben auf deinem Home Assistant. NextFloor liefert keine Modelle mit; bitte pr\xFCfe, dass die Lizenz deines Modells die Nutzung in deiner Installation erlaubt.",model_add:"Modell hochladen \u2026",model_replace:"Modell ersetzen \u2026",model_remove:"Entfernen",model_present:"vorhanden",model_missing:"noch keins",model_remove_confirm:"Das Modell \u201E{id}\u201C von Home Assistant l\xF6schen?",model_removed:"Modell \u201E{id}\u201C gel\xF6scht.",model_uploaded:"Modell \u201E{id}\u201C hochgeladen ({size}). Lade das Panel neu, damit es erscheint.",model_upload:"Auf Home Assistant ablegen",model_info:"{triangles} Dreiecke, {size} m",model_front:"Vorderseite",model_front_hint:"Drehe das Modell, bis die Front zum Betrachter zeigt (schr\xE4g nach unten links in der Vorschau).",model_paint:"Lack (die Farbe, die du im Editor w\xE4hlst)",model_paint_preview:"Farbe in der Vorschau",model_detail:"Detailgrad",model_detail_light:"Leicht (Tablet)",model_detail_normal:"Normal",model_detail_fine:"Fein",model_result:"Ergebnis: {triangles} Dreiecke, {size}",model_error_not_glb:"Das ist keine .glb-Datei (bin\xE4res glTF). Exportiere das Modell als \u201EglTF binary\u201C.",model_error_compressed:"Die Datei ist komprimiert (Draco, Meshopt oder KTX). Exportiere sie ohne Kompression.",model_error_empty:"In der Datei ist nichts Dreidimensionales zu finden.",model_error_unreadable:"Die Datei l\xE4sst sich nicht lesen: {detail}",model_error_too_large:"Die Datei ist gr\xF6\xDFer als {max}. W\xE4hle einen geringeren Detailgrad.",model_upload_forbidden:"Nur Administratoren d\xFCrfen Modelle hochladen.",model_upload_too_large:"Home Assistant nimmt keine Dateien \xFCber {max} an. W\xE4hle einen geringeren Detailgrad.",model_upload_not_glb:"Home Assistant hat die Datei abgelehnt (kein bin\xE4res glTF).",model_upload_bad_id:"Die Modell-Kennung ist ung\xFCltig.",model_upload_other:"Das Hochladen hat nicht geklappt: {detail}",ext_intro:"Hier importierst du eigene M\xF6bel-Packs, l\xE4dst eigene 3D-Modelle hoch und bindest Plugins ein.",plugin:"Plugin",plugins_title:"Plugins",plugins_intro:"Plugins erweitern NextFloor um eigene Licht-Animationen, Ger\xE4te und Karten im Raum-Panel. Trag die Adresse eines Plugins ein (eine .js-Datei in /config/www, also /local/\u2026, aus HACS /hacsfiles/\u2026 oder https://\u2026).",plugins_docs:"Wie man ein Plugin schreibt",plugins_warning:"Plugins laufen mit denselben Rechten wie NextFloor in deinem Browser. Nimm nur Plugins, deren Quelle du vertraust.",plugins_off:"ausgeschaltet",plugins_error:"Fehler",plugins_loading:"wird geladen \u2026",plugins_nothing_registered:"geladen, hat aber nichts angemeldet",plugins_loaded:"aktiv",plugins_reload_hint:"Wirkt nach dem Neuladen der Seite",plugins_remove:"Entfernen",plugins_none:"Noch keine Plugins eingetragen.",plugins_from_dashboard:"\xDCber eine Dashboard-Ressource angemeldet",plugins_add:"Hinzuf\xFCgen",plugins_url_invalid:"Bitte eine .js-Adresse unter /local/\u2026, /hacsfiles/\u2026 oder https://\u2026 angeben.",plugins_exists:"Dieses Plugin ist schon eingetragen.",plugins_limit:"H\xF6chstens 20 Plugins.",packs_title:"M\xF6bel-Packs",packs_intro:"Eigene M\xF6bel als Pack (JSON) importieren: als Datei oder unten einf\xFCgen. {n} Packs sind mitgeliefert und immer da.",packs_docs:"Pack-Format",packs_none:"Noch keine eigenen Packs importiert.",community_title:"Community-M\xF6bel",community_intro:"M\xF6bel, die andere mit dem M\xF6bel-Baukasten gebaut und geteilt haben \u2013 gepr\xFCft und kostenlos. Bau deine eigenen:",community_builder:"M\xF6bel-Baukasten \xF6ffnen",community_how:"So teilst du deine",community_load:"Community-M\xF6bel laden",community_none:"Noch keine Community-M\xF6bel \u2013 sei die oder der Erste!",community_install:"Installieren",community_update:"Aktualisieren",community_installed:"Installiert",community_failed:"Die Community-M\xF6bel lie\xDFen sich nicht laden: {detail}",pack_import:"Pack-Dateien importieren \u2026",pack_paste:"JSON importieren",pack_paste_empty:"F\xFCge zuerst das JSON eines Packs ein.",pack_paste_not_json:"Das ist kein g\xFCltiges JSON: {detail}",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_error_not_a_pack:'Das ist kein M\xF6bel-Pack (es fehlt "format": "nfpack").',pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Das Pack ist zu gro\xDF (h\xF6chstens 1 MB).",pack_error_needs_update:"Dieses Pack braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal importieren.",pack_error_other:"Import fehlgeschlagen: {detail}",store_open:"Plugin-Store \xF6ffnen",store_close:"Plugin-Store schlie\xDFen",store_intro:"Gepr\xFCfte Plugins aus der Community. Jedes wird vor der Aufnahme angesehen und danach nicht mehr ver\xE4ndert.",store_submit:"Eigenes Plugin einreichen",store_empty:"Noch keine Plugins im Store.",store_failed:"Der Store lie\xDF sich nicht laden ({error}).",store_install:"Installieren",store_installed:"installiert",store_update:"Aktualisieren",store_confirm:`\u201E{name}\u201C von {author} installieren?

Ein Plugin l\xE4uft mit denselben Rechten wie NextFloor in deinem Browser. Die Datei wurde gepr\xFCft, ihr Inhalt ist festgelegt:
{url}`,manual:"Anleitung",manual_more:"Mehr erfahren",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",live_autarky:"autark",live_fold:"Karte verkleinern",live_unfold:"Karte aufklappen",live_day_hint:"Die letzten 24 Stunden: Solar (Fl\xE4che) und Verbrauch (Linie)",live_week_hint:"Die letzten 7 Tage: Sonne {solar} kWh, Verbrauch {use} kWh (gelb: Sonne, hell: Verbrauch)",live_days:"Tage",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",live_car_departure_entity:"Abfahrtszeit (optional)",live_car_departure:"Abfahrt {time}",live_car_open:"Offen: {parts}",printer_printing:"druckt",printer_done:"fertig",printer_paused:"pausiert",printer_error:"Fehler",printer_idle:"bereit",printer_done_at:"fertig um {time}",printer_layer:"Schicht",printer_nozzle:"D\xFCse",printer_bed:"Bett",heatpump_heating:"heizt",heatpump_water:"macht Warmwasser",heatpump_cooling:"k\xFChlt",heatpump_defrost:"taut ab",heatpump_idle:"in Ruhe",heatpump_flow_return:"Vor- \u2192 R\xFCcklauf",heatpump_heat:"W\xE4rme",heatpump_power:"Strom",heatpump_outside:"au\xDFen",pack_missing_item:"M\xF6bel aus entferntem Pack",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_lift_slide:"Hebe-Schiebet\xFCr",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",glass_panes:"Glasfelder",glass_panes_auto:"automatisch (ca. 0,9 m)",glass_panes_hint:"0 = ein einziges Glas ohne Teilung, leer = Teilung etwa alle 0,9 m",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_opacity:"Deckkraft (%)",outdoor_opacity_hint:"100 = undurchsichtig. Weniger macht die Fl\xE4che durchsichtig, etwa eine Einfahrt \xFCber dem Keller; der Umriss bleibt.",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_corners_hint:"Ecken: ein + auf einer Kante f\xFCgt eine Ecke hinzu, Ziehen formt die Fl\xE4che, \xD7 entfernt eine Ecke.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",fence_gates:"Tore im Zaun",gate_add:"+ Tor im Zaun",gate_edge:"Zaunseite",gate_kind:"Art",gate_single:"Gartentor",gate_double:"Doppeltor",gate_sliding:"Schiebetor",gate_offset:"Mitte ab Zaunanfang (m)",gate_width:"Breite (m)",gate_entity:"Antrieb oder Schalter",gate_contact:"Kontakt (an = offen)",fence_gates_hint:"Ein Tor ist eine L\xFCcke im Zaun mit Torpfosten und Fl\xFCgel. Mit einem Antrieb (Cover, Schalter, Hilfsschalter, Schloss) und/oder Kontakt geht es in 3D auf: Garten- und Doppeltor schwingen nach innen, ein Schiebetor f\xE4hrt hinter den Zaun.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt, bekommt hier ein Loch \u2013 ein Pool in der Terrasse, ein Teich oder eine Wildfl\xE4che im Rasen. Die Reihenfolge beim Zeichnen spielt keine Rolle. Ein Pool schneidet sich von selbst aus.",outdoor_area_hint:"Der Home-Assistant-Bereich dieser Fl\xE4che (Garten, Terrasse, Pool): seine Ger\xE4te und Sensoren stehen unter Drau\xDFen, und ein Pin auf der Fl\xE4che \xF6ffnet es.",pool_temp:"Wassertemperatur (optional)",pool_pump:"Pumpe / Filter (optional)",pool_pump_on:"Pumpe l\xE4uft",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",map_on:"Echte Karte unter dem Plan anzeigen",map_lat:"Breitengrad",map_lon:"L\xE4ngengrad",map_use_ha:"Standort von Home Assistant \xFCbernehmen",map_opacity:"Sichtbarkeit (%)",map_zoom:"Detailstufe",map_zoom_coarse:"grob",map_zoom_fine:"fein",map_move:"Karte unter dem Plan verschieben",map_step:"Schritt",map_url:"Eigene Kachel-Adresse (leer = OpenStreetMap)",map_hint:"Dein Browser l\xE4dt die Kartenkacheln direkt vom Kartenserver (standardm\xE4\xDFig OpenStreetMap, bitte deren Nutzungsbedingungen beachten); solange die Karte aus ist, wird nichts geladen. Der Plan liegt auf der Karte, wie der Kompass es sagt \u2013 drehe den Kompass oder verschiebe die Karte, bis das Haus passt.",compass_title:"Kompass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Nord \u2194 S\xFCd tauschen",compass_swap_hint:"Dreht den Kompass um 180\xB0. Zeichnung, Dachfl\xE4chen und Solarfelder bleiben, wie sie sind.",compass_hint:"Stimmt der Kompass nicht mit der Wirklichkeit \xFCberein, drehst du ihn hier \u2013 nichts muss neu gezeichnet werden. Sonnenlicht, Wind und die Himmelsrichtungen der Dachfl\xE4chen richten sich danach.",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_end_start:"Ende am Firstanfang",roof_end_end:"Ende am Firstende",roof_halfhip:"Kr\xFCppelwalm beginnt bei",roof_halfhip_hint:"Wie weit oben am Giebel die Walmfl\xE4che beginnt, als Anteil der Giebelh\xF6he: niedrig = ein gro\xDFer Walm, hoch = nur die Spitze ist abgewalmt.",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_rotation:"Drehung (\xB0)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan, ein + auf einer Kante f\xFCgt eine Ecke hinzu, \xD7 entfernt eine. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_overhang_sides:"\xDCberstand je Seite",roof_overhang_a:"\xDCberstand Traufe A (m)",roof_overhang_b:"\xDCberstand Traufe B (m)",roof_overhang_u0:"\xDCberstand Giebel vorn (m)",roof_overhang_u1:"\xDCberstand Giebel hinten (m)",roof_overhang_auto:"Wieder automatisch",roof_overhang_sides_hint:"Ohne eigene Werte ist der \xDCberstand automatisch: \xFCberall gleich, au\xDFer wo der Dachteil ans Haus st\xF6\xDFt (dort keiner).",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",door_angle:"\xD6ffnungswinkel",door_angle_default:"Standard",door_angle_hint:"Wie weit das T\xFCrblatt aufgeht. Mit Sensor \xF6ffnet es so weit, sobald er \u201Eoffen\u201C meldet; ohne Sensor steht es so weit offen (statt halb). Standard bleibt wie bisher.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",studio_new:"Eigenes M\xF6bel bauen",studio_title:"M\xF6bel-Werkstatt",studio_title_edit:"M\xF6bel-Werkstatt: \xE4ndern",studio_hint:"W\xE4hle eine Vorlage, stell Ma\xDFe und Fronten ein und setz das M\xF6bel in den Plan. Es landet im Pack \u201EEigene M\xF6bel\u201C und l\xE4sst sich sp\xE4ter hier wieder \xE4ndern.",studio_kind:"Vorlage",studio_kind_cabinet:"Schrank",studio_kind_shelf:"Regal",studio_kind_lamp:"Lampe",studio_kind_device:"Ger\xE4t",studio_name:"Name",studio_width:"Breite (cm)",studio_depth:"Tiefe (cm)",studio_height:"H\xF6he (cm)",studio_doors:"T\xFCren",studio_drawers:"Schubladen",studio_shelves:"B\xF6den",studio_handle:"Griffe",studio_handle_bar:"Stangengriff",studio_handle_knob:"Knopf",studio_handle_none:"Grifflos",studio_base:"Unterbau",studio_base_plinth:"Sockel",studio_base_legs:"F\xFC\xDFe",studio_base_none:"Ohne",studio_back:"R\xFCckwand",studio_lamp:"Art",studio_lamp_floor:"Stehlampe",studio_lamp_table:"Tischlampe",studio_lamp_pendant:"Pendelleuchte",studio_lamp_wall:"Wandleuchte",studio_display:"Display vorne (zeigt den Mediaplayer)",studio_mount:"Steht",studio_mount_floor:"Auf dem Boden",studio_mount_surface:"Auf einem M\xF6bel",studio_mount_wall:"An der Wand",studio_color_body:"Korpus",studio_color_lamp_body:"Fu\xDF und Gestell",studio_color_front:"Fronten",studio_color_boards:"B\xF6den",studio_color_shade:"Schirm",studio_color_display:"Rahmen des Displays",studio_color_white:"Wei\xDF",studio_color_wood:"Holz",studio_color_metal:"Metall",studio_color_dark:"Dunkel",studio_color_glass:"Glas",studio_color_accent:"Akzent",studio_color_own:"Eigene Farbe",studio_color_plan:"Farbe des Plans",studio_place:"In den Plan setzen",studio_save:"\xC4nderung speichern",studio_open:"In der Werkstatt \xE4ndern",studio_error:"Speichern ging nicht: {detail}",studio_pack_name:"Eigene M\xF6bel",studio_pack_publisher:"M\xF6bel-Werkstatt",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",tilt_x:"Neigung vorn/hinten (\xB0)",tilt_z:"Neigung seitlich (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_rise:"Steigung entlang der L\xE4nge (\xB0)",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_stairs:"Treppe",hint_stairs:"Ziehen, wo die Treppe stehen soll \u2013 sie l\xE4uft entlang der langen Seite; Form, Drehrichtung und Bauart stellst du danach rechts ein",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_slope:"Schr\xE4g",wall_slope_start:"H\xF6he am Anfang (m)",wall_slope_end:"H\xF6he am Ende (m)",wall_slope_hint:"Schr\xE4ge Wand: die Oberkante l\xE4uft gerade von der H\xF6he am Anfang der Wand (Ecke mit der kleineren Nummer) zur H\xF6he am Ende. Beide H\xF6hen d\xFCrfen \xFCber der Geschossh\xF6he liegen, zum Beispiel f\xFCr ein Pultdach-Zimmer mit hohen Oberlichtern.",wall_slope_off:"Wieder eine ebene Wand",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_view:"Wandansicht",wall_view_hint:"Die Wand von vorne: T\xFCren, Fenster und M\xF6bel an ihr ziehen oder ihren Abstand eintippen.",wall_view_prev:"Vorige Wand",wall_view_next:"N\xE4chste Wand",wall_view_left:"Abstand links (m)",wall_view_height:"H\xF6he \xFCber Boden (m)",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",free_wall_slope:"\u25E2 Schr\xE4g",free_wall_slope_hint:"Die Wand wird von einem Ende zum anderen h\xF6her oder niedriger: oben die H\xF6he am Anfang, hier die am Ende.",free_wall_height_end:"H\xF6he am Ende (m)",arc:"Bogen",arc_hint:"Biegt die Wand zu einem Bogen. Ein Nachbarraum an dieser Wand biegt sich mit, T\xFCren und Fenster wandern mit; R\xFCckg\xE4ngig nimmt den Bogen zur\xFCck.",arc_bulge:"W\xF6lbung (m)",arc_bulge_hint:"Wie weit sich die Wand in der Mitte w\xF6lbt: positiv nach au\xDFen, negativ in den Raum.",arc_apply:"Biegen",arc_too_wide:"Eine T\xFCr oder ein Fenster in dieser Wand ist f\xFCr diesen Bogen zu breit. Mach den Bogen flacher oder die \xD6ffnung schmaler.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (Erweiterungen \u2192 M\xF6bel-Packs).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_entity_mower:"M\xE4hroboter",pet_room_sensor:"Raum-Sensor des Tiers (optional)",pet_room_hint:"Ein Sensor, der den Raum nennt, in dem das Tier gerade ist \u2013 Bermuda oder ESPresense mit einem Anh\xE4nger am Halsband: in 3D l\xE4uft es dann in diesem Raum herum.",furn_entity_water:"Ventil oder Schalter",device_temp:"Ger\xE4tetemperatur",device_temp_hint:"Ein Temperatursensor des Ger\xE4ts (Wechselrichter, Akku, PC \u2026): sein Wert steht am Pin in der 3D-Ansicht, ab 60 \xB0C ist der Pin hervorgehoben.",fridge_temp:"Temperatur K\xFChlteil",freezer_temp:"Temperatur Gefrierteil",fridge_temp_hint:"Der Pin zeigt die Temperaturen. \xDCber 8 \xB0C im K\xFChlteil oder \u221212 \xB0C im Gefrierteil leuchtet er als Warnung.",spray_reach:"Reichweite des Wassers (m)",spray_hint:"Solange das Ventil offen oder der Schalter an ist, spritzt der Sprenger Wasser in B\xF6gen um sich herum.",furn_robot_room:"Aktueller Raum (Sensor)",robot_cal_none:"Noch nicht kalibriert \u2013 ohne Bezug zur Karte bleibt die Fahrspur erfunden.",robot_cal_done:"Kalibriert: eine Rasterzelle misst {m} m.",robot_cal_do:"Von der jetzigen Position des Roboters kalibrieren",robot_cal_doing:"Tippe in den Plan, wo der Roboter gerade steht.",robot_cal_need:"Die Karte des Roboters meldet gerade keine Position \u2013 l\xE4uft die Integration?",robot_cal_hint:"Die Station ist der Anker: der Plan wei\xDF, wo sie steht, die Kamera wei\xDF, wo Roboter und Station in ihrem Raster liegen. Kennt die Karte R\xE4ume mit denselben Namen wie der Plan, reicht der Knopf \u201EAus den R\xE4umen kalibrieren\u201C. Sonst: Stell den Roboter mindestens 1,5 m entfernt ab \u2013 Reinigung pausieren \u2013 und tippe ihn im Plan an. Kommen die R\xE4ume spiegelverkehrt heraus, setze den Haken.",robot_cal_mirror:"Die Karte des Roboters ist gespiegelt (R\xE4ume kommen verkehrt heraus)",robot_cal_forget:"Kalibrierung entfernen",robot_cal_nudge:"Von Hand nachr\xFCcken: Pfeile schieben die Karte um 10 cm, \u27F2 \u27F3 drehen um 1\xB0, \u2212 + \xE4ndern die Gr\xF6\xDFe um 1 %.",robot_cal_nudge_move:"Karte verschieben",robot_cal_nudge_turn:"Karte drehen",robot_cal_nudge_grow:"Karte gr\xF6\xDFer oder kleiner",robot_cal_rooms:"Aus den R\xE4umen kalibrieren (die Karte kennt {n} R\xE4ume)",robot_cal_rooms_none:"Zu wenige R\xE4ume hei\xDFen im Plan so wie auf der Karte des Roboters ({n} gefunden, mindestens 2 n\xF6tig). Benenne die R\xE4ume gleich \u2013 oder kalibriere \xFCber die Position des Roboters.",robot_cal_rooms_bad:"Die gleichnamigen R\xE4ume liegen im Plan anders als auf der Karte des Roboters \u2013 ist ein Raum vertauscht? Kalibriere sonst \xFCber die Position des Roboters.",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Ist die Karte des Roboters unten kalibriert, zeigt die Spur stattdessen, wo er wirklich gefahren ist; ohne sie sind die Bahnen erfunden. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_ceiling_fan:"Deckenventilator",furn_fan_entity:"Ventilator",fan_hint:"Die Leuchte ist das Licht des Ventilators (leer lassen, wenn er keins hat). Der Ventilator wird im Raum gefunden oder hier gew\xE4hlt: In 3D drehen sich die Fl\xFCgel so schnell wie er l\xE4uft, sein Symbol schaltet ihn, Wischen hoch/runter \xE4ndert die Stufe, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Die H\xF6he ist, wie weit er von der Decke h\xE4ngt (mehr = l\xE4ngere Stange).",room_ceiling:"Deckenh\xF6he",room_ceiling_tip:"Niedriger als das Stockwerk (ein Bad unter der Treppe) oder h\xF6her (ein Wohnzimmer offen bis unters Dach): Deckenleuchten, Ventilatoren, LED-Streifen und Ger\xE4te an der Decke h\xE4ngen dann hier, und die W\xE4nde des Raums sind so hoch.",room_ceiling_through:"Die Decke ({ceiling} m) liegt \xFCber der Etagenh\xF6he ({floor} m): Der Raum reicht in die Etage dar\xFCber, seine W\xE4nde wachsen mit, und die Etage dar\xFCber bleibt \xFCber ihm offen (Luftraum). Im Editor der oberen Etage ist die Fl\xE4che schraffiert.",room_floor_offset:"Bodenh\xF6he (m)",room_floor_offset_hint:"Liegt der Boden dieses Raums tiefer oder h\xF6her als die Etage (ein abgesenkter Eingang: \u22120,39), wandern Boden, W\xE4nde, T\xFCren und Fenster und was im Raum steht mit; die Decke bleibt. Die Stufen stellst du als Treppe dazu.",room_inner:"Innenma\xDF {w} \xD7 {d}",room_inner_hint:"Von Wand zu Wand gemessen: Innenw\xE4nde nehmen die H\xE4lfte ihrer Dicke, Au\xDFenw\xE4nde stehen au\xDFerhalb des Umrisses.",floor_heating:"Fu\xDFbodenheizung (optional)",floor_heating_hint:"Solange der Thermostat heizt (oder das Ventil offen, der Schalter an ist), gl\xFCht der Boden des Raums in 3D warm.",room_announce_speaker:"Lautsprecher f\xFCr Durchsagen",room_announce_quiet:"Ruhezeit f\xFCr Durchsagen",room_announce_hint:"Ohne Wahl spricht der Lautsprecher, der im Raum steht, sonst ein Sprachassistent, ein Echo oder ein Lautsprecher des Bereichs (nie ein Fernseher). In der Ruhezeit lassen Durchsagen an mehrere R\xE4ume diesen Raum aus; eine Durchsage nur f\xFCr ihn kommt trotzdem an.",ceiling_here:"Decke hier",ceiling_here_hint:"H\xF6he der Decke genau an dieser Stelle, z. B. bei einer Dachschr\xE4ge. Leer = Decke des Raums.",ceiling_slope:"An die Dachschr\xE4ge",ceiling_slope_hint:"Die Decke liegt hier unter der Dachschr\xE4ge: die Leuchte h\xE4ngt an deren Unterseite, genau \xFCber ihrem Platz.",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",lamp_extra_light:"Leuchtmittel {n} (optional)",lamp_extra_hint:"Eine Leuchte mit mehreren Lichtern \u2013 Hauptlicht, Nachtlicht, Lichtring: Ist das Hauptlicht aus, leuchtet sie in 3D mit dem n\xE4chsten Licht, das an ist, etwas schw\xE4cher. Die Lichter schaltest du im Raumfenster einzeln.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",furn_colors_card:"M\xF6belfarben dieser Karte",furn_color_house:"Farbe des Hauses",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_own:"Eigener",own_look_card:"Farben des eigenen Looks dieser Karte",own_look_dark:"Eigener Look: Fl\xE4chen dunkel",own_look_light:"Eigener Look: Fl\xE4chen hell",own_look_lines:"Eigener Look: Linien",own_look_background:"Eigener Look: Hintergrund",own_look_hint:"Der Look \u201EEigener\u201C arbeitet wie Blaupause und Tag, aber mit deinen Farben: W\xE4nde, B\xF6den und M\xF6bel laufen von \u201EFl\xE4chen dunkel\u201C bis \u201EFl\xE4chen hell\u201C, Kanten in der Linienfarbe. Signalfarben (Lampen, Alarme, Heatmap) bleiben. Auf hellem Hintergrund leuchten die Linien nicht. Eine Karte kann eigene Farben setzen.",theme_auto:"Auto",clock:"Uhr",clock_none:"Keine",clock_top_left:"Oben links",clock_top_right:"Oben rechts",clock_bottom_left:"Unten links",clock_bottom_right:"Unten rechts",glass_walls:"Glasw\xE4nde",glass_walls_hint:"Wie deckend die W\xE4nde sind, durch die man in die R\xE4ume schaut: links fast unsichtbar, rechts undurchsichtig. Gilt f\xFCr diesen Bildschirm.",screen_name:"Name dieses Bildschirms",screen_name_hint:"Durchsagen erscheinen auf jedem offenen NextFloor-Bildschirm. Mit einem Namen (z. B. \u201EFlur\u201C) kann eine Durchsage auch nur an diesen Bildschirm gehen. Ohne Haken bleibt dieser Bildschirm still.",announce_on:"Durchsagen auf diesem Bildschirm an",announce_muted:"Durchsagen auf diesem Bildschirm stumm",lock3d_on:"3D sperren (Drehen, Zoomen und Verschieben aus, Tippen geht weiter)",lock3d_off:"3D entsperren",walk:"Durchs Haus gehen",travel:"Zeitreise: die letzten 24 Stunden oder 7 Tage abspielen",travel_play:"Abspielen",travel_pause:"Anhalten",travel_loading:"Lade Verlauf \u2026",travel_failed:"Der Verlauf lie\xDF sich nicht laden.",travel_speed:"Tempo",travel_speed_min:"1 Min./s",travel_speed_10min:"10 Min./s",travel_speed_hour:"1 Std./s",travel_days:"Tage",travel_live:"Live",card_travel_button:"Taste f\xFCr die Zeitreise",walk_stop:"Gehen beenden",walk_hint:"Ziehen: umsehen \xB7 W A S D / Pfeile oder Stick: gehen \xB7 Mausrad: Schritt",card_walk_button:"Taste zum Durchgehen",card_lock_button:"Taste f\xFCr die 3D-Sperre",backdrop:"Eigener Hintergrund",backdrop_color:"Farbe",backdrop_image:"Bild (/local/\u2026 oder https://\u2026)",backdrop_dim:"Abdunkeln",backdrop_hint:"Statt des Himmels des Looks steht das Haus vor einer eigenen Farbe oder einem Bild. Ein Bild in /config/www ist unter /local/\u2026 erreichbar.",furnish:"Einrichten",split_3d:"3D daneben",plan_dims:"Ma\xDFe",plan_dims_hint:"Schreibt an jede Raumkante ihre L\xE4nge.",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_mould:"Schimmel",heat_short_power:"Strom",heat_short_comfort:"Komfort",heat_short_sun:"Sonne",heat_short_wifi:"WLAN",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_mould:"Schimmel",heat_power:"Stromverbrauch",heat_comfort:"Wohlf\xFChlwert",heat_sun:"Sonne heute",room_sun_hours:"{h} h Sonne heute ({facing})",open_since:"offen seit {time}",presence_now:"jemand da",presence_last:"zuletzt vor {time}",comfort_n:"Komfort {n}",empty_lights_hint:"{n} Licht an, seit {min} min niemand da.",empty_lights_off:"Licht aus",open_heating_hint:"{n} Fenster offen, w\xE4hrend die Heizung l\xE4uft.",open_heating_off:"Heizung aus",room_clean:"Reinigung (Skript oder Knopf)",room_clean_hint:"Ein Skript oder Knopf, der den Saugroboter in diesen Raum schickt (z. B. die Raumreinigung deiner Roboter-Integration). Das Raum-Panel zeigt dann \u201E\u{1F9F9} Saugen\u201C.",room_clean_run:"Saugen",room_clean_run_hint:"Schickt den Saugroboter in diesen Raum.",shade_hint:"Sonne auf {n} Fenstern bei {temp} \u2013 Rolll\xE4den senken?",shade_close:"Senken",room_sun_year:"Sonne \xFCbers Jahr",room_sun_year_hint:"Die Sonnenstunden durch die Au\xDFenfenster des Raums am 15. jedes Monats.",room_energy:"heute {today} \xB7 Monat {month}",room_energy_hint:"Aus der Statistik der Leistungssensoren der Ger\xE4te im Raum; die Kosten f\xFCr den Monat mit dem Tarif des Hauses.",heat_summer:"Sommer",heat_winter:"Winter",air_co2:"l\xFCften (CO\u2082)",air_humidity:"l\xFCften (feucht)",air_mould:"Schimmelgefahr \u2013 l\xFCften",room_curve_hint:"Die Temperatur des Raums in den letzten 24 Stunden",heat_values:"Werte am Raumnamen",heat_wifi:"WLAN",wifi_aps:"{n} Access Points \xB7 {clients} Ger\xE4te",wifi_network:"Netzwerk: {online} online \xB7 {offline} offline",wifi_none:"Stelle Access Points oder Router aus den Packs (Smart Home 2) auf und verkn\xFCpfe sie mit einer Entit\xE4t ihres Ger\xE4ts.",wifi_clients:"{n} Ger\xE4te",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",meter_parent:"H\xE4ngt an Z\xE4hler",meter_parent_none:"keinem (Hauptz\xE4hler)",meter_main:"Hauptz\xE4hler",meter_unmetered:"{w} ungemessen",meter_device_hint:"Steht das Ger\xE4t hinter einem Zwischenz\xE4hler (z. B. Balkonkraftwerk in einer Wohnung), z\xE4hlt seine Leistung zu dieser Wohnung. Der Zwischenz\xE4hler muss daf\xFCr in beide Richtungen messen (\u2212 = R\xFCckspeisung); z\xE4hlt er nur Bezug, f\xE4llt der Verbrauch der Wohnung bei \xDCberschuss zu hoch aus.",meter_sub_power:"Leistung des Zweigs (W, + = Bezug, \u2212 = R\xFCckspeisung)",meter_floors:"Versorgt die Etagen",meter_sub_hint:"Ein Zwischenz\xE4hler misst seinen Zweig, z. B. eine Wohnung. Ger\xE4te auf den angehakten Etagen h\xE4ngen in 3D an ihm statt am Hauptz\xE4hler; was der Hauptz\xE4hler dar\xFCber hinaus z\xE4hlt, steht als \u201EAllgemein (Rest)\u201C in der Bilanz.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",energy_routes:"Kabelwege",energy_routes_hint:"Wo ein Kabel wirklich l\xE4uft: Der Fluss folgt dann deinen Punkten statt eines Bogens quer durchs Haus. Ohne Weg bleibt es beim Bogen. Verbraucher behalten ihren Bogen.",route_conn_solar:"{name} \u2192 Wechselrichter",route_conn_battery:"Batterie \u2194 Haus",route_conn_inverter:"Wechselrichter \u2192 Haus",route_conn_grid:"Netz \u2194 Haus",route_conn_meter:"{name} \u2194 \xFCbergeordneter Z\xE4hler",route_conn_device:"{name} \u2194 Unterz\xE4hler",route_points:"{n} Punkte",route_none:"direkter Bogen",route_draw:"Weg zeichnen",route_redraw:"Neu zeichnen",route_drawing:"Tippe im Plan die Punkte an, durch die das Kabel l\xE4uft, vom einen Ende zum anderen; wechsle dazwischen das Geschoss, wo es durch die Decke geht. {n} Punkte.",route_undo:"Letzter Punkt",route_done:"Fertig",route_cable:"Als Kabel zeigen",route_cable_hint:"Zeichnet den Weg als sichtbares Kabel, nicht nur als feine Linie unter den Teilchen.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_rack_ew:"Ost-West-Aufst\xE4nderung",solar_rack_ew_hint:"Jede zweite Reihe zeigt in die andere Richtung, die Paare stehen R\xFCcken an R\xFCcken \u2013 flach und dicht wie auf vielen Flachd\xE4chern.",solar_rack_tilt:"Aufst\xE4nderung (\xB0 zus\xE4tzlich)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",chimneys:"Schornsteine",chimney:"Schornstein",chimney_shape:"Form",chimney_brick:"Gemauert",chimney_round:"Rund",chimney_wide:"Breit, zwei Z\xFCge",chimney_steel:"Edelstahlrohr",chimney_diameter:"Durchmesser (m)",chimney_depth:"Tiefe (m)",chimney_height:"H\xF6he \xFCber dem Dach (m)",chimney_hint:"Die H\xF6he z\xE4hlt ab der oberen Seite, wo der Schornstein aus dem Dach kommt. Im Grundriss und in der 3D-Ansicht l\xE4sst er sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_tap:"Antippen des M\xF6bels",furn_tap_default:"Wie \xFCblich",furn_tap_hint:"Eine eigene Aktion wie bei den eigenen Kn\xF6pfen des Sternmen\xFCs, z. B. ein browser_mod-Popup mit deiner Karte.",furn_show_when:"Nur zeigen, solange \u2026",furn_show_when_state:"\u2026 im Zustand (leer = an)",furn_show_when_invert:"Umgekehrt: zeigen, solange es nicht so ist",furn_show_when_hint:"Saison-Deko, die nur im Dezember steht: ein Helfer (input_boolean), ein Kalender oder ein Sensor entscheidet, ob das M\xF6bel in 3D erscheint. Mehrere Zust\xE4nde mit Komma trennen. Im Editor bleibt es immer sichtbar.",picture_upload:"Foto hochladen",picture_replace:"Anderes Foto hochladen",picture_stored:"Ein eigenes Foto ist gespeichert.",picture_url:"\u2026 oder Bild-Adresse",picture_entity:"\u2026 oder Bild einer Entit\xE4t",picture_border:"Passepartout (%)",picture_fit:"Foto",picture_fit_cover:"f\xFCllt den Rahmen",picture_fit_contain:"ganz zu sehen",picture_hint:"Dein Foto im Rahmen, in 3D und auf dem Wandtablet. Hochgeladene Fotos werden verkleinert mit dem Plan gespeichert; eine Bild-Entit\xE4t (z. B. Foto des Tages) oder eine Kamera zeigt ihr aktuelles Bild.",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",climate_more:"\u2026 und noch ein Sensor (Mittelwert)",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",window_opens:"\xD6ffnet",window_opens_turn:"Dreh-Kipp (nach innen)",window_opens_slide:"Schiebend (Schiebefenster, Hebe-Schiebet\xFCr)",window_opens_top:"Klappfenster (unten nach au\xDFen)",window_opens_hint:"Schiebend: Der Fl\xFCgel auf der Seite des Scharniers gleitet vor den festen; zweifl\xFCgelig gleiten die beiden mittleren nach au\xDFen. Klappfenster \xF6ffnen mit dem Kontakt oder einem Kippsensor.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",pin_shift:"Pin verschieben",pin_shift_up:"\u2191 H\xF6he",pin_shift_hint:"Stehen Ger\xE4te dicht beieinander, schiebst du den Pin hier ein St\xFCck zur Seite oder nach oben (in Metern); das Ger\xE4t selbst bleibt, wo es ist.",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_active:"Nur wenn aktiv",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",card_tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",card_tap_in_room_hint:"In der Haus- und Stockwerksansicht \xF6ffnet ein Antippen das Stockwerk oder den Raum, auch auf einem Ger\xE4t oder seinem Symbol. Im ge\xF6ffneten Raum schaltet es das Ger\xE4t. Langes Dr\xFCcken \xF6ffnet immer sein Men\xFC oder seine Details.",card_markers_outside:"Symbole au\xDFerhalb des ge\xF6ffneten Raums w\xE4hlen",card_markers_outside_hint:"Im Haus, auf dem Stockwerk und in den anderen R\xE4umen nur die angehakten Arten; im ge\xF6ffneten Raum alle wie oben eingestellt. \u201EImmer\u201C und \u201ENie\u201C am Ger\xE4t gehen vor.",marker_kind_light:"Lichter",marker_kind_cover:"Rolll\xE4den",marker_kind_climate:"Heizung",marker_kind_media:"Medien",marker_kind_switch:"Schalter",marker_kind_fan:"Ventilatoren",marker_kind_lock:"Schl\xF6sser",marker_kind_binary:"Kontakte und Melder",marker_kind_sensor:"Sensoren",marker_kind_tap:"M\xF6bel mit Aktion",marker_kind_other:"Sonstige",device_name_hint:"Ein Name f\xFCr den Plan und das Raumfenster, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",device_simple:"Im Raumfenster nur schalten",device_simple_hint:"Der Raumdialog zeigt f\xFCr diese Lampe nur den Schalter, ohne Helligkeit, Farbtemperatur und Farben.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stair_shape:"Form",stair_shape_straight:"Gerade",stair_shape_quarter:"Viertelgewendelt",stair_shape_l:"L mit Podest",stair_shape_half:"Halbgewendelt",stair_shape_u:"U mit Podest",stair_shape_spiral:"Wendeltreppe",stair_turn:"Laufrichtung (beim Hinaufgehen)",stair_turn_left:"Links herum",stair_turn_right:"Rechts herum",stair_build:"Bauart",stair_build_solid:"Massiv (Beton)",stair_build_stringer:"Wangentreppe",stair_build_mono:"Holmtreppe (Mittelholm)",stair_build_cantilever:"Kragarm (schwebend)",stair_risers:"Setzstufen",stair_steps:"Steigungen",stair_run_width:"Laufbreite (m)",stair_landing_after:"Stufen bis zum Podest",stair_landing_hint:"Das Podest liegt {h} cm \xFCber dem Boden; der Rest der Stufen kommt danach.",stair_rail:"Gel\xE4nder",stair_rail_none:"Keins",stair_rail_left:"Links",stair_rail_right:"Rechts",stair_rail_both:"Beidseitig",stair_down:"F\xFChrt nach unten",stair_down_hint:"Die Treppe beginnt auf dieser Etage und f\xFChrt hinunter, zum Beispiel in einen Keller, der nicht gezeichnet sein muss. Sie \xF6ffnet den Boden dieser Etage.",stair_measures:"{steps} Steigungen \xE0 {rise} cm \xB7 Auftritt {going} cm \xB7 Schrittma\xDF {measure} cm",stair_uncomfortable:"unbequem (Schrittma\xDF 59\u201365 cm, Steigung h\xF6chstens 21 cm)",stair_up_note:"Die Treppe beginnt an der markierten Vorderkante. Die Decke der Etage dar\xFCber \xF6ffnet sich nur dort, wo \xFCber den Stufen keine 2,2 m Kopfh\xF6he bleiben.",stair_down_note:"Man betritt die Treppe an der markierten Vorderkante und geht hinunter. Im Plan ist sie gestrichelt; der Boden dieser Etage \xF6ffnet sich \xFCber den Stufen.",stair_opening:"Decken\xF6ffnung",stair_opening_headroom:"Nach Kopfh\xF6he (nur wo n\xF6tig)",stair_opening_full:"\xDCber der ganzen Treppe",stair_opening_none:"Keine (Luke, geschlossener Schacht)",stair_opening_hint:"Wie weit die Treppe den Boden \xF6ffnet, den sie erreicht: die Etage dar\xFCber, oder bei einer Treppe nach unten die eigene. Nach Kopfh\xF6he \xF6ffnet nur \xFCber den Stufen, \xFCber denen keine 2,2 m bleiben.",stair_up_note_plain:"Die Treppe beginnt an der markierten Vorderkante und steigt nach hinten an.",stair_upgrade:"Form einstellen",stair_upgrade_hint:"Macht daraus eine Treppe mit Form (gewendelt, L, U, Wendel), Bauart, Gel\xE4nder und Stufenzahl.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas:"Gasz\xE4hler (optional)",energy_water:"Wasserz\xE4hler (optional)",energy_meters_hint:"Gas und Wasser stehen bei der Hausbilanz \u2013 in der Energieleiste und auf der Hauskarte: ein Sensor mit dem Durchfluss jetzt (m\xB3/h, l/min) oder dem Z\xE4hlerstand von heute.",energy_gas_short:"Gas",energy_water_short:"Wasser",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_rest:"Allgemein (Rest)",energy_advanced:"Erweiterter Energiemodus",energy_advanced_on:"Zwischenz\xE4hler nutzen",energy_show_unmetered:"Ungemessenen Verbrauch am Zwischenz\xE4hler zeigen",energy_show_unmetered_hint:"Das Schild eines Zwischenz\xE4hlers zeigt dann den Verbrauch seiner Etagen und wie viel davon kein platziertes Ger\xE4t misst, z. B. \u201E500 W \xB7 450 W ungemessen\u201C. Sonst zeigt es den Z\xE4hlerwert.",energy_advanced_hint:"F\xFCr Zwischenz\xE4hler, z. B. je Wohnung hinter einem Hauptz\xE4hler: Ein Stromz\xE4hler kann dann an einem anderen h\xE4ngen und eigene Etagen versorgen. Aus = der erste Z\xE4hler ist der Netzanschluss, weitere sind Verbraucher.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",ble:"Bluetooth-Ortung",ble_hint:"Orte einen Bluetooth-Tag (Schl\xFCsselanh\xE4nger, Uhr, Handy) raumgenau: Du l\xE4ufst mit ihm durch die R\xE4ume und nimmst jeden Raum auf. NextFloor vergleicht danach, wie stark ihn die Bluetooth-Scanner von Home Assistant (ESPHome-Proxys, Shelly-Ger\xE4te mit eingeschaltetem Bluetooth, Adapter am Server) h\xF6ren. Je Tag entsteht ein Sensor mit dem Raumnamen als Zustand.",ble_unavailable:"Die Bluetooth-Integration von Home Assistant l\xE4uft nicht. Ohne sie gibt es keine Scanner.",ble_scanners:"{n} Bluetooth-Scanner in Home Assistant. Je mehr Scanner in verschiedenen R\xE4umen, desto genauer.",ble_add:"Tag oder Ger\xE4t hinzuf\xFCgen",ble_trackers:"Handys und Uhren (Private BLE Device)",ble_devices:"Gefundene Bluetooth-Ger\xE4te",ble_name:"Name (optional)",ble_refresh:"Liste neu laden",ble_add_button:"Hinzuf\xFCgen",ble_learn:"R\xE4ume lernen",ble_close:"Schlie\xDFen",ble_spots:"{n} Aufnahmen",ble_now:"Jetzt",ble_unknown:"unbekannt",ble_none_heard:"Kein Scanner h\xF6rt den Tag gerade. Halte ihn nah an einen Scanner und warte kurz; ein Tag sendet nur alle paar Sekunden.",ble_no_address:"Dieses Handy oder diese Uhr hat gerade keine bekannte Adresse. Pr\xFCfe in Home Assistant die Integration \u201EPrivate BLE Device\u201C.",ble_one_scanner:"Nur ein Scanner h\xF6rt den Tag. Zum Unterscheiden von R\xE4umen braucht es mindestens zwei, besser drei oder mehr.",ble_learn_room:"Raum aufnehmen",ble_record:"Aufnehmen ({s} s)",ble_recording:"Nimmt auf \u2026 noch {s} s",ble_forget_room:"Raum vergessen",ble_learn_hint:"W\xE4hle den Raum, dr\xFCcke Aufnehmen und geh mit dem Tag in der Hand langsam durch den ganzen Raum, auch in die Ecken. Aufnehmen erneut ersetzt den Raum. Lerne alle R\xE4ume, in denen du den Tag orten willst.",ble_sensor_hint:"Der Sensor \u201E{name}\u201C (Ger\xE4t NextFloor) zeigt den Raum. Unter Anwesenheit kannst du ihn als Raum-Sensor einer Person w\xE4hlen.",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",presence_room:"Standardraum",presence_room_none:"\u2013 keiner \u2013",presence_add:"Weitere Entit\xE4t (Hilfsschalter, Tracker)",no_persons:"In Home Assistant gibt es keine Personen."},Sd={view:"3D",editor:"Editor",all_floors:"All floors",outside_area:"Outside",outside_area_hint:"All devices outside at a glance: in the garden, outside the rooms, and what belongs to Outside (a weather station on the roof, say).",device_outside:"Belongs to Outside",device_outside_hint:"The device does not count for the room under it (a weather station on the roof) and is listed in the Outside panel.",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",no_rooms_admin:"The floors exist, but there is no room yet. Walls alone are not enough: draw at least one room in the editor with \u201CRectangle\u201D or \u201CFree form\u201D.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",walls_slope:"Sloped",walls_slope_hint:"Walls cut on a slope: half height in front, full height at the back \u2013 like a doll's house, turns with the camera",walls_solid:"Solid",walls_solid_hint:"Solid walls in their colours instead of glass (colours: editor \u2192 settings, per room in the room)",wall_paint_outside:"Wall colour outside",wall_paint_inside:"Wall colour inside",furn_color_body:"Furniture colour body",furn_color_wood:"Furniture colour wood",furn_color_fabric:"Furniture colour fabric",furn_color_white:"Furniture colour white",furn_color_metal:"Furniture colour metal",furn_color_dark:"Furniture colour dark",furn_color_hint:"Furniture is built from a few materials, the pieces from the furniture builder and the packs too. Here each material gets a colour for the whole house; a card can set its own. They show most in the Neon look; Day and Blueprint only tint with them.",wall_paint_room:"Wall colour inside (this room)",wall_paint_floor:"Wall colour outside (this floor)",wall_paint_hint:"Used in the 3D view \u201CSolid\u201D.",wall_paint_default:"Default",card_solid_walls:"Solid walls (in their colours)",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",floor_layer:"Layer (can be shown and hidden)",floor_power:"Floor meter (power)",floor_power_hint:"A power sensor for this floor alone (a sub-meter, a flat). Its value shows on the floor label and, in this floor's view, on the house card with its share of the house's use.",floor_power_share:"{n} % of the house",living_area:"Living area {living}",room_living:"Counts as living area",living_area_none:"No living area \xB7 floor {floor}",living_area_low:"Living area {living} (floor {floor}, of which {low} below 2 m)",living_area_hint:"Counted like the German Wohnfl\xE4chenverordnung: the floor inside the walls, in full from 2 m clear height, half between 1 and 2 m (under slopes), not at all below 1 m. A guide value, not a survey.",living_area_floor:"Living area: {floor}",living_area_floor_house:"Living area of this floor: {floor} \xB7 whole house: {house}",print_plan:"Print plan / PDF",print_plan_hint:"Every floor as a clean plan with measurements and areas, and a table of the areas \u2013 to print, or save as PDF from the print dialog.",print_title:"Floor plan",print_room:"Room",print_floor_area:"Floor area",print_living:"Living area",print_low:"below 2 m",print_total:"Total",print_blocked:"The print window was blocked \u2013 please allow pop-ups for Home Assistant.",check_open:"Check the plan",note:"Note",note_add:"Note here",note_text:"Text",note_placeholder:'e.g. "change the filter" or "fuse 12"',note_due:"Due on",note_height:"Height above the floor (m)",note_height_hint:"Where the pin floats in the 3D view: 1.3 m is eye level, higher for something under the ceiling (a shutoff valve, a hatch).",note_photo_upload:"Add a photo",note_photo_hint:"The photo shows when the note is tapped in the 3D view, e.g. what the valve looks like.",note_due_hint:"From that day on the pin turns orange.",note_is_due:"This note is due.",keys_title:"Editor keys",keys_undo:"Undo",keys_redo:"Redo",keys_duplicate:"Duplicate the room",keys_delete:"Delete the selection",keys_nudge:"Move the selection one grid step",keys_nudge_10:"\u2026 by 10 cm",keys_nudge_1:"\u2026 by 1 cm",keys_rotate:"Turn furniture by 90\xB0 (Shift: back)",keys_lock:"Fix or free furniture, a device or a roof section",keys_close_shape:"Close the free shape",keys_escape:"Cancel, leave the tool, clear the selection",keys_straight:"While drawing: straight lines",keys_sheet:"This sheet",tour_title:"First steps",tour_1_title:"Draw the rooms",tour_1:'Draw the rooms with "{rect}" or "{free}"; the walls come by themselves. Give each room its Home Assistant area \u2013 then NextFloor finds its devices. With areas already set up, "{rooms}" in the floor form adds them all at once.',tour_2_title:"Doors and windows",tour_2:'"{opening}" puts them on a wall. Link their contact or blind \u2013 in 3D they then open and close with it, and open windows tell you.',tour_3_title:"Furniture and devices",tour_3:'"{furniture}" opens the library \u2013 or build your own pieces in the \u{1F6E0}\uFE0F furniture studio. Select a room and the devices of its area are listed below, ready to place; lamps then shine in the colour of their light.',tour_4_title:"Look and check",tour_4:'"{split}" shows your house while you draw; at the top you switch to the 3D view. "{check}" lists what is still missing \u2013 and ? shows the keys at any time.',tour_next:"Next",tour_back:"Back",tour_done:"Let's go",tour_skip:"Skip",check_open_hint:"Lists what is missing or off in the plan, with a fix in one tap.",check_title:"Plan check",check_all_good:"All good \u2013 nothing found.",check_hint:"{n} points found. Blue buttons change the plan (undo works as always), the others show the place.",check_room_no_area:'"{room}" has no Home Assistant area: its devices are not found.',check_room_no_area_named:'"{room}" has no area \u2013 the free area "{area}" has the same name.',check_areas_unplaced:"{n} areas of this floor have no room yet: {names}",check_devices_unplaced:'"{room}": {n} devices of the area are not in the plan yet.',check_rooms_overlap:'"{a}" and "{b}" overlap.',check_opening_off_wall:'A door or window in "{room}" is not on a wall.',check_entity_missing:"{n} device pins point to entities Home Assistant no longer knows ({ids}).",check_furniture_entity_missing:"A piece of furniture is linked to {id} \u2013 that entity no longer exists.",check_battery_low:"Battery low: {name} ({level} %)",battery_low_n:"Battery low: {names}",check_standby:"{name} draws {w} W while off \u2013 about {cost} a year.",check_fix_show:"Show",check_fix_ignore:"Ignore",check_show_devices:"Look at the {n} devices",check_ignore_all:"Ignore all {n}",check_reset_ignored:"Check the {n} ignored devices again",check_fix_set_area:'Link "{area}"',check_fix_add_rooms:"Add the rooms",check_fix_place:"Place {n}",check_fix_remove:"Remove {n}",floor_layer_hint:"This floor is no storey but a layer \u2013 all the trees or the decoration, say. The 3D view shows an eye at the top that shows or hides it on each device.",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",floor_copy:"Duplicate floor",floor_copy_hint:"The copy goes on top of the house with all rooms, walls, doors and windows. Rooms and the floor lose their link to Home Assistant, furniture its entities; energy devices stay on the old floor.",floor_copy_furniture:"Take the furniture along",floor_copy_devices:"Take the device pins along",floor_copy_devices_hint:"The same entity then shows on both floors.",floor_copy_outdoor:"Take the outdoor areas along",floor_copy_make:"Make the copy",floor_copy_name:"{name} (copy)",furn_to_floor:"Move to floor",furn_to_floor_hint:"The item moves to the same spot on the chosen floor.",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",sub_area_add:"+ Area within the room",sub_area_hint:"A part of the room with a Home Assistant area of its own but no walls \u2013 a reading corner, a shelf, a kitchenette in the living room. Its devices and sensors belong to this room.",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",sofa_shape:"Shape",sofa_straight:"Straight",sofa_l:"L-shaped (mirror: other side)",sofa_u:"U-shaped",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",share_view:"Share a view",share_view_hint:"Saves the house as a small file that opens in any browser without Home Assistant (through NextFloor's online demo) \u2013 to show it to family or a planner. Without devices and entities, like a template.",share_view_title:"Our home in NextFloor",share_view_needs_js:"This page needs JavaScript and an internet connection.",share_view_file:"view",share_view_done:"View saved \u2013 open the file in a browser or pass it on.",version_save:"Save this state \u2026",version_save_hint:'Keeps the plan under a name ("before the renovation"). Named states stay when the automatic restore points go.',version_name_prompt:'Name for this state (e.g. "before the renovation"):',version_saved:'State "{name}" saved.',version_compare:"Compare",version_delete_confirm:'Delete "{name}"?',version_same:"No difference to the plan.",version_diff_n:"{n} differences to the plan as it is now:",diff_floor_added:'Floor "{name}" added',diff_floor_removed:'Floor "{name}" removed',diff_room_added:'Room "{name}" added',diff_room_removed:'Room "{name}" removed',diff_room_renamed:'"{detail}" is now called "{name}"',diff_room_reshaped:'"{name}" reshaped ({detail} m\xB2)',diff_opening_added:"{name} added ({detail})",diff_opening_removed:"{name} removed ({detail})",diff_furniture_added:"{name} added",diff_furniture_removed:"{name} removed",diff_furniture_moved:"{name} moved or changed",diff_device_added:"Device {name} placed",diff_device_removed:"Device {name} removed",diff_device_moved:"Device {name} moved",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",blind_kind:"Kind of blind",blind_roller:"Roller shutter outside",blind_venetian:"Venetian blind with slats",blind_inside:"Roller blind inside",cover2_entity:"Second blind (right half)",cover_my:'Favourite position "My" (%, 0 = none)',cover_my_go:"To the favourite position ({p} %)",blind_hint:`A venetian blind turns its slats in 3D with the cover's tilt; a roller blind inside hangs behind the glass. A wide window can have a second blind for its right half. The favourite position shows as "My" in the quick menu: a blind with positions moves there, a Somfy RTS motor without feedback goes to its own My on stop.`,confirm_switch:"Really switch {name}?",lock_confirm_unlock:"Really unlock {name}?",gang_switch_one:"Switches",furn_cover_entity:"Moves with",furn_cover_hint:"The curtain, screen, awning or gate follows this cover entity (blind, curtain, awning, gate) and travels with it. A tap opens its menu (up, stop, down).",furn_cover_inverted:"Reverse the direction",furn_cover_inverted_hint:"For an awning or curtain that moves the opposite way in the plan than in reality: out then shows in, and the other way round.",gang_switch:"Button {n} switches",gang_socket_one:"Socket powered by",gang_socket:"Socket {n} powered by",gang_switch_hint:"A button glows while its light is on (in its colour). A tap switches it; with several buttons a small menu asks which. The same entity may sit on several switches.",gang_socket_hint:"A socket glows green while its switch is on \u2013 brighter the more it draws. A tap switches it; with several, a small menu asks which.",lock_confirm_lock:"Lock {name}?",opening_lock:"Smart lock",opening_lock_hint:"A tap on the door locks or unlocks it (always asking first). While it is unlocked, its edge glows.",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",units:"Show lengths in",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:"How lengths and areas appear in the plan, the forms and the wall view. Inputs stay in metres.",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",side_failed:"This form could not be shown ({error}). The plan stays usable. Please report the text in a GitHub issue.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_announce:"\u{1F4E2} Announcement",announce_placeholder:"Your own message \u2026",announce_send:"Say it",announce_sent:'Said: "{message}"',announce_failed:"Announcement failed: {error}",announce_phrase_1:"Dinner is ready!",announce_phrase_2:"Time for bed!",announce_phrase_3:"Please come down!",announce_phrase_4:"We are leaving soon!",announce_phrase_5:"The dog needs to go out!",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",readable:"Easy to read",readable_hint:"Stronger contrast and larger text \u2013 for wall tablets and anyone who reads better that way.",plain:"Floor plan only",plain_hint:"Shows only walls, doors, windows and stairs, without furniture. Devices and their pins stay.",right_back:"Right click = back",right_back_hint:"A short right click in the 3D view goes one step back: from the room to the floor, from the floor to the house (like a double tap on empty space). Dragging with the right button still pans the view.",stl:"3D print (STL)",stl_hint:"Saves the house as an STL file (walls, floors, furniture and outdoor areas of every floor) for 3D printing, at 1:100 (one metre becomes 10 mm). Windows, lights and the roof are not in it; a slicer repairs the file if needed.",card_plain:"Floor plan only",card_rooms:"Only these rooms",card_rooms_hint:"The card shows only the ticked rooms with their furniture, devices, doors and windows (for a tablet in the kitchen, say). Nothing ticked: the whole plan.",card_templates:"Card templates",card_templates_hint:"Set up a dashboard card once here (with the card's own settings) and give just its name on each tablet: `template: kitchen_tablet`. Changes here reach every card that uses the template; what stands on the card itself wins over the template.",template_name:"New template (name)",template_add:"Create template",template_reload:"Reload screens with this template",template_reload_all:"Reload all screens",template_use:"On the dashboard card: `template: {name}`",card_template:"Card template",card_template_none:"none (this card only)",card_readable:"Easy to read",all_off_n:"Everything off ({n})",all_off_hint:"Switches off the room's lights, switches, fans and media; it can be undone for ten seconds.",all_off_done:"Everything off.",all_off_undo:"Undo",all_off_floor:"Everything off on {floor} ({n} devices), undo for ten seconds",mood_save:"Save mood",mood_save_hint:`Keeps how the room's lamps shine right now as a mood \u2013 a tap on it sets them again later, "\u2192" carries it to another room.`,mood_new:"Mood",mood_set:"Set this mood",mood_carry:"Carry over to another room",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",favorite_floor:"Which floor this favourite shows on",favorite_all_floors:"All floors",outside_hidden:"Outside: hide devices",outside_hidden_hint:"Devices the Outside panel should not show (they stay in the plan).",outside_hidden_add:"Hide a device",outside_view_hint:"View for Outside: turn the 3D preview to the garden and use it. Opening Outside then flies the camera there.",outside_view_set:"Use this view for Outside",outside_view_reset:"Reset the Outside view",room_facts:"Room panel: facts shown",room_fact_sun:"Sun hours",room_fact_comfort:"Comfort",room_fact_air:"Airing hint",room_fact_circuits:"Circuits",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',ambilight:"Glow behind the TV (%)",ambilight_hint:"How strongly it glows behind the TV while it plays. 0 switches it off (for example if you have LED strips on the TV), 100 is the usual strength.",sound_rings:"Sound rings (%)",sound_rings_hint:"How large the rings around the speaker grow while it plays. 0 switches them off, the picture and the glow stay; 100 is the usual size. The size also follows the speaker's volume: quieter means smaller.",glow_scale:"Glow in 3D (%)",light_effects:"Effect animations in 3D",light_effects_hint:"Map exact HA effect names only. Unmapped effects keep the static HA colour. Changes nothing in Home Assistant.",light_effects_enabled:"Allow animations for this lamp",light_effect_unmapped:"Unmapped (static)",light_effect_add:"Add exact effect name",light_effect_name_limit:"The exact effect name must contain 1 to 255 characters. It will not be shortened.",light_effect_count_limit:"At most 100 mappings. Remove an existing entry first.",light_effect_exists:"This effect name is already mapped. Its existing mapping is preserved.",light_animation_none:"Static",light_animation_rainbow:"Rainbow (replaces colour)",light_animation_pulse:"Pulse (intensity)",light_animation_flicker:"Flicker (intensity)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_speakers:"Only on these speakers (none = on all)",media_play:"Play",media_pause:"Pause",media_previous:"Previous",media_next:"Next",media_volume:"Volume",media_sources:"Sources",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_alerts:"Own warnings",circuits:"Fuse box",circuits_hint:'The circuits with the rooms they feed. The room panel names them, and the search finds them ("F12").',circuit_name:"Name",circuit_new:"New circuit",circuit_add:"Add a circuit",circuit_add_room:"Add a room",own_alerts_hint:'A line in the warning bar of the 3D view while an entity is in a state \u2013 "Water tank empty" from the robot vacuum, "Dishwasher done". Several states with commas; for numbers <20 or >80.',own_alert_entity:"When \u2026",own_alert_state:"\u2026 is in state (empty = on)",own_alert_text:"\u2026 then this warning",own_alert_color:"Colour",own_alert_tap:"A tap",own_alert_tap_info:"opens the details",own_alert_tap_toggle:"switches the entity",own_alert_tap_room:"jumps to the room",own_alert_house:"Whole house",own_alert_new:"New warning",own_alert_add:"Add a warning",today:"Today",tomorrow:"Tomorrow",today_days:'Days on the "Today" card',today_days_one:"Today only",today_days_n:"{n} days",forecast:"Weather forecast",forecast_hint:'A small card with the next days of the weather entity (settings): the weather, high and low, and rain. It sits in a top corner of the 3D view, top right below the "Today" card.',forecast_days:"Forecast",forecast_off:"Off",forecast_corner:"Corner",today_none:"Nothing on today.",today_calendars:'Calendars for "Today"',today_calendars_hint:'The appointments of these calendars show top right in the 3D view on the "Today" card, with the bins collected today or tomorrow. A tap on its title folds the card.',own_button_state:"Lights up while \u2026 is on (optional)",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",panel_fold:"Fold away (the room stays in view)",panel_unfold:"Open again",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_floor_thumbs_folded:"Start with the miniatures folded",card_floor_thumbs_folded_hint:"Only small floor buttons at the side \u2013 the arrow still opens the pictures",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_sensor_bar:"Own sensors at the top",card_sensor_bar_hint:"The sensors chosen in the editor (Settings) at the top left of the card",card_central_open:"Star menu open and large",card_central_open_hint:"Favourites and own buttons stand open from the start, a size larger",card_keep_camera:"Keep the camera when switching floors",card_keep_camera_hint:"The same side, height and distance on every floor",card_today:'"Today" card',card_today_hint:"Today's appointments and the bins due, top right",card_announcements:"Announcements",card_announcements_hint:'Announcements (action "NextFloor: Announcement") show big on the card, with a chime, and are spoken',weather_short:"Weather",time_of_day:"Time of day",time_of_day_hint:"Shows sun, light, shadows and look at another time of today. Tap again to go back to now.",menu_open:"Menu open",menu_open_hint:"The star menu with favourites and own buttons stands open from the start on this device, a size larger \u2013 for a wall tablet that mostly runs scenes.",keep_camera:"Keep camera",keep_camera_hint:"Switching floors keeps the camera on the same side, height and distance instead of fitting the new floor from the start side.",view_zoom:"Zoom",view_zoom_hint:"How close the fitted views come \u2013 on small tablets the house looks larger.",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",card_weather_density:"Amount of rain and snow",card_weather_density_hint:"Fewer drops and flakes than the weather reports; clouds, fog and lightning stay",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight and shadows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor, and the house throws its shadow on the plot. Untick it to keep floor and plot free of sun patches and shadows.",sun_arc:"Sun arc and compass",sun_arc_hint:"Draws today's path of the sun as an arc over the plot, with a ring and the compass points on the ground (north in red). Needs your home's location in Home Assistant.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_by:"Alarm set off by {cause}",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_lost:"Contact not answering: {name}",rain_sensor:"Rain sensor (own weather station)",rain_sensor_inverted:"Invert rain sensor",rain_sensor_inverted_hint:"For sensors that read off (or 0) when it rains and on when it is dry.",outage_sensor:"Power outage sensor",outage_hint:'A binary sensor of class power that is off, another binary sensor that is on, a state like "off_grid" or "backup", or a voltage below 50 V raise a warning for the whole house.',contact_warning:"Warn when a door or window contact is unavailable",contact_warning_hint:"When a contact has been unavailable for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. A note then names the contact. A restart of Home Assistant does not warn.",night_lock_warning:"Warn at night when a door is not locked",night_lock_warning_hint:"Between 10 pm and 6 am a note names the plan's door locks that stand unlocked.",alert_unlocked_night:"Not locked: {name}",motion_markers_active:"Show motion sensors only while they detect something",motion_markers_active_hint:"Applies to motion, occupancy and presence sensors. A sensor whose marker is set to always show stays visible.",room_double_tap:"Double tap on a room",room_double_tap_hint:"A double tap on a room turns its lights off when one is on, otherwise all on. Devices set to ask first always stay out.",room_double_tap_area:"Lamps in the plan and every light of the area",room_double_tap_plan:"Only lamps in the plan",room_double_tap_off:"Switch nothing",card_room_double_tap_auto:"As set in the plan",status_entities:"Own sensors at the top of the 3D view",status_add:"Add a sensor",status_entities_hint:"For example the outside temperature, the alarm or the air quality: they show at the top left with name and value, in an opened room too. A tap opens their details. Up to 12.",announce_tts:"Text-to-speech for announcements",announce_phrases:"Sentences for announcements (one per line)",announce_phrases_hint:`Empty: the sentences that come with NextFloor. Announcements also exist as the action "NextFloor: Announcement" for automations \u2013 on the rooms' speakers and on every open NextFloor screen.`,opening_rain_warning:"Warn when it rains",opening_light_well:"Light well in front",sill_boards:"Sill and board",sill_boards_auto:"Automatic",sill_boards_none:"None",sill_boards_inside:"Inside only",sill_boards_outside:"Outside only",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",import_other_hint:"From Sweet Home 3D: import the .sh3d file here. Floors, rooms, doors, windows and free walls come over, furniture does not.",import_sh3d_found:"Sweet Home 3D: {floors} floors, {rooms} rooms, {openings} doors and windows, {walls} free walls ({furniture} pieces of furniture are not taken over).",import_dxf_found:"DXF: {rooms} rooms (closed polylines) and {walls} free walls (lines) on one floor.",import_ifc_found:"In the IFC file: {floors} floors and {rooms} rooms (NextFloor draws the walls from the rooms).",import_roomplan_found:"Room scan (RoomPlan): {rooms} rooms, {openings} doors and windows; {skipped} objects were not taken over (you place furniture yourself).",import_error_roomplan_empty:"The room scan has no walls.",import_error_ifc_empty:"The IFC file has no spaces (IfcSpace) with a footprint.",import_error_dxf_empty:"The DXF file has no lines or polylines.",import_error_sh3d:"This is not a Sweet Home 3D file that can be read (it needs Sweet Home 3D 5.3 or newer).",import_error_sh3d_empty:"The Sweet Home 3D file has no rooms or walls.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",bars_unfold:"Switches",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_buttons:"Room buttons",card_room_buttons_hint:"A row with one button per room at the top of the card \u2013 tap one to open the room, like tapping it in the model",card_room_panel_hint:"The room's lights and blinds in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",care_bin_today:"Collected today",care_bin_tomorrow:"Collected tomorrow",care_bin_days:"In {n} days",care_mail_yes:"Post is in",care_mail_no:"Empty",care_plant_thirsty:"Thirsty",care_plant_ok:"Well watered",care_time_left:"{time} left",care_entity_bin:"Pickup date (sensor)",care_entity_mail:"Post sensor",care_entity_plant:"Soil moisture (sensor)",care_thirsty_below:"Thirsty below (%)",care_hint_bin:'A sensor with the next pickup: days, a date, "today"/"tomorrow" or the Waste Collection Schedule integration. The bin glows the day before and on the day.',care_hint_mail:"A sensor that reports post in the box (a contact on the flap, say). The mailbox glows then.",care_hint_plant:"A moisture sensor in the soil. Below the threshold the plant glows and says it is thirsty.",lib_cat_lights:"Lights",lib_cat_seating:"Seating",lib_cat_tables:"Tables",lib_cat_storage:"Cabinets & shelves",lib_cat_beds:"Beds",lib_cat_kitchen:"Kitchen",lib_cat_appliances:"Appliances",lib_cat_bath:"Bathroom",lib_cat_media:"TV & audio",lib_cat_office:"Office",lib_cat_tech:"Tech",lib_cat_climate:"Heating & climate",lib_cat_energy:"Energy",lib_cat_garden:"Garden & terrace",lib_cat_plants:"Plants",lib_cat_kids:"Kids",lib_cat_fitness:"Fitness",lib_cat_pets:"Pets",lib_cat_workshop:"Workshop & garage",lib_cat_music:"Music & studio",lib_cat_season:"Season & decoration",lib_cat_pictures:"Pictures & frames",lib_cat_vehicles:"Vehicles",lib_cat_building:"Stairs & building parts",lib_cat_decor:"Decoration & more",lib_favourites:"Favourites",lib_recent:"Recently used",lib_for_room:"Fits {room}",lib_all_rooms:"Show all rooms",lib_linkable:"linkable",lib_lit:"lit",lib_outdoor:"outdoor",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_sizes:"Sizes",feature_name_energy:"Energy flow",ext_tab:"Extensions",ext_title:"Extensions",models:"Your own 3D models",models_hint:"For some vehicles NextFloor can show a real 3D model if you own one. Choose the file (.glb) here: NextFloor turns it the right way round, makes it lighter, marks the paint and stores it on your Home Assistant. Without a model the vehicle looks as it did before.",models_licence:"The files are yours and stay on your Home Assistant. NextFloor ships no models; please make sure your model's licence lets you use it in your own installation.",model_add:"Add a model \u2026",model_replace:"Replace the model \u2026",model_remove:"Remove",model_present:"in place",model_missing:"none yet",model_remove_confirm:"Delete the model \u201C{id}\u201D from Home Assistant?",model_removed:"Model \u201C{id}\u201D deleted.",model_uploaded:"Model \u201C{id}\u201D stored ({size}). Reload the panel to see it.",model_upload:"Store on Home Assistant",model_info:"{triangles} triangles, {size} m",model_front:"Front",model_front_hint:"Turn the model until its front faces the viewer (towards the lower left in the picture).",model_paint:"Paint (the colour you pick in the editor)",model_paint_preview:"Colour in the preview",model_detail:"Level of detail",model_detail_light:"Light (tablet)",model_detail_normal:"Normal",model_detail_fine:"Fine",model_result:"Result: {triangles} triangles, {size}",model_error_not_glb:"This is not a .glb file (binary glTF). Export the model as \u201CglTF binary\u201D.",model_error_compressed:"The file is compressed (Draco, Meshopt or KTX). Export it without compression.",model_error_empty:"The file contains nothing three-dimensional.",model_error_unreadable:"The file cannot be read: {detail}",model_error_too_large:"The file is larger than {max}. Choose a lower level of detail.",model_upload_forbidden:"Only administrators may upload models.",model_upload_too_large:"Home Assistant accepts no files over {max}. Choose a lower level of detail.",model_upload_not_glb:"Home Assistant refused the file (not a binary glTF).",model_upload_bad_id:"The model id is not valid.",model_upload_other:"Uploading did not work: {detail}",ext_intro:"Import your own furniture packs, upload your own 3D models and add plugins here.",plugin:"plugin",plugins_title:"Plugins",plugins_intro:"Plugins add your own light animations, devices and cards in the room panel. Enter a plugin's address (a .js file in /config/www, i.e. /local/\u2026, from HACS /hacsfiles/\u2026, or https://\u2026).",plugins_docs:"How to write a plugin",plugins_warning:"Plugins run with the same rights as NextFloor in your browser. Only use plugins from sources you trust.",plugins_off:"off",plugins_error:"error",plugins_loading:"loading \u2026",plugins_nothing_registered:"loaded, but registered nothing",plugins_loaded:"active",plugins_reload_hint:"Takes effect after reloading the page",plugins_remove:"Remove",plugins_none:"No plugins yet.",plugins_from_dashboard:"Registered by a dashboard resource",plugins_add:"Add",plugins_url_invalid:"Enter a .js address under /local/\u2026, /hacsfiles/\u2026 or https://\u2026.",plugins_exists:"This plugin is already in the list.",plugins_limit:"At most 20 plugins.",packs_title:"Furniture packs",packs_intro:"Import your own furniture as a pack (JSON): as a file or pasted below. {n} packs come with NextFloor and are always there.",packs_docs:"Pack format",packs_none:"No packs of your own yet.",community_title:"Community furniture",community_intro:"Furniture others built with the furniture builder and shared \u2013 checked and free. Build your own:",community_builder:"Open the furniture builder",community_how:"How to share yours",community_load:"Load community furniture",community_none:"No community furniture yet \u2013 be the first!",community_install:"Install",community_update:"Update",community_installed:"Installed",community_failed:"The community furniture could not be loaded: {detail}",pack_import:"Import pack files \u2026",pack_paste:"Import JSON",pack_paste_empty:"Paste a pack's JSON first.",pack_paste_not_json:"This is not valid JSON: {detail}",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_error_not_a_pack:'This is not a furniture pack ("format": "nfpack" is missing).',pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The pack is too large (1 MB at most).",pack_error_needs_update:'This pack needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then import again.',pack_error_other:"Import failed: {detail}",store_open:"Open plugin store",store_close:"Close plugin store",store_intro:"Reviewed plugins from the community. Each one is looked at before it is added and does not change afterwards.",store_submit:"Submit your own plugin",store_empty:"No plugins in the store yet.",store_failed:"The store could not be loaded ({error}).",store_install:"Install",store_installed:"installed",store_update:"Update",store_confirm:`Install \u201C{name}\u201D by {author}?

A plugin runs with the same rights as NextFloor in your browser. The file has been reviewed and its content is fixed:
{url}`,manual:"Manual",manual_more:"Learn more",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",live_autarky:"self-sufficient",live_fold:"Make the card small",live_unfold:"Open the card",live_day_hint:"The last 24 hours: solar (area) and consumption (line)",live_week_hint:"The last 7 days: sun {solar} kWh, use {use} kWh (yellow: sun, light: use)",live_days:"days",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",live_car_departure_entity:"Departure time (optional)",live_car_departure:"Departs {time}",live_car_open:"Open: {parts}",printer_printing:"printing",printer_done:"done",printer_paused:"paused",printer_error:"error",printer_idle:"idle",printer_done_at:"done at {time}",printer_layer:"Layer",printer_nozzle:"Nozzle",printer_bed:"Bed",heatpump_heating:"heating",heatpump_water:"making hot water",heatpump_cooling:"cooling",heatpump_defrost:"defrosting",heatpump_idle:"resting",heatpump_flow_return:"Flow \u2192 return",heatpump_heat:"Heat",heatpump_power:"Power",heatpump_outside:"outside",pack_missing_item:"Furniture of a removed pack",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_lift_slide:"Lift-and-slide door",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",glass_panes:"Panes",glass_panes_auto:"automatic (about 0.9 m)",glass_panes_hint:"0 = one single pane without mullions, empty = about every 0.9 m",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_opacity:"Opacity (%)",outdoor_opacity_hint:"100 = solid. Less makes the area see-through, such as a driveway above a cellar; the outline stays.",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_corners_hint:"Corners: a + on an edge adds a corner, dragging shapes the area, \xD7 removes a corner.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",fence_gates:"Gates in the fence",gate_add:"+ Gate in the fence",gate_edge:"Fence side",gate_kind:"Kind",gate_single:"Garden gate",gate_double:"Double gate",gate_sliding:"Sliding gate",gate_offset:"Middle from the start (m)",gate_width:"Width (m)",gate_entity:"Motor or switch",gate_contact:"Contact (on = open)",fence_gates_hint:"A gate is a gap in the fence with gate posts and a leaf. With a motor (cover, switch, input_boolean, lock) and/or a contact it opens in 3D: garden and double gates swing inwards, a sliding gate runs along the fence.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of surrounding areas",outdoor_cut_hint:"Every area that contains this one whole gets a hole here \u2013 a pool in the terrace, a pond or a wild patch in the lawn. The drawing order does not matter. A pool cuts itself out on its own.",outdoor_area_hint:"The Home Assistant area of this surface (garden, terrace, pool): its devices and sensors are listed under Outside, and a pin on the surface opens it.",pool_temp:"Water temperature (optional)",pool_pump:"Pump / filter (optional)",pool_pump_on:"pump on",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",map_on:"Show a real map under the plan",map_lat:"Latitude",map_lon:"Longitude",map_use_ha:"Use Home Assistant's location",map_opacity:"Visibility (%)",map_zoom:"Detail level",map_zoom_coarse:"coarse",map_zoom_fine:"fine",map_move:"Move the map under the plan",map_step:"Step",map_url:"Own tile address (empty = OpenStreetMap)",map_hint:"Your browser loads the map tiles straight from the map server (OpenStreetMap by default, please mind their usage policy); nothing is loaded while the map is off. The plan lies on the map as the compass says \u2013 turn the compass or move the map until the house fits.",compass_title:"Compass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Swap north \u2194 south",compass_swap_hint:"Turns the compass by 180\xB0. The drawing, roof faces and solar fields stay as they are.",compass_hint:"If the compass does not match reality, turn it here \u2013 nothing has to be redrawn. Sunlight, wind and the compass directions of roof faces follow it.",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_end_start:"End at the ridge start",roof_end_end:"End at the ridge end",roof_halfhip:"Half-hip starts at",roof_halfhip_hint:"How high up the gable the hipped part starts, as a share of the gable's height: low = a large hip, high = only the tip is hipped.",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_rotation:"Turn (\xB0)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan, a + on an edge adds a corner, \xD7 removes one. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_overhang_sides:"Overhang per side",roof_overhang_a:"Overhang eave A (m)",roof_overhang_b:"Overhang eave B (m)",roof_overhang_u0:"Overhang gable start (m)",roof_overhang_u1:"Overhang gable end (m)",roof_overhang_auto:"Back to automatic",roof_overhang_sides_hint:"Without values of your own the overhang is automatic: the same everywhere, except where the roof part meets the house (none there).",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",door_angle:"Opening angle",door_angle_default:"Default",door_angle_hint:"How far the leaf opens. With a sensor it opens that far once it reports open; without one it stands that far open (instead of half). Default stays as before.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",studio_new:"Build your own piece",studio_title:"Furniture studio",studio_title_edit:"Furniture studio: change",studio_hint:'Pick a template, set its measurements and fronts and put the piece into the plan. It goes into the "Own furniture" pack and can be changed here again later.',studio_kind:"Template",studio_kind_cabinet:"Cabinet",studio_kind_shelf:"Shelf",studio_kind_lamp:"Lamp",studio_kind_device:"Device",studio_name:"Name",studio_width:"Width (cm)",studio_depth:"Depth (cm)",studio_height:"Height (cm)",studio_doors:"Doors",studio_drawers:"Drawers",studio_shelves:"Shelves",studio_handle:"Handles",studio_handle_bar:"Bar",studio_handle_knob:"Knob",studio_handle_none:"None",studio_base:"Base",studio_base_plinth:"Plinth",studio_base_legs:"Legs",studio_base_none:"None",studio_back:"Back panel",studio_lamp:"Kind",studio_lamp_floor:"Floor lamp",studio_lamp_table:"Table lamp",studio_lamp_pendant:"Pendant",studio_lamp_wall:"Wall light",studio_display:"Display on the front (shows the media player)",studio_mount:"Stands",studio_mount_floor:"On the floor",studio_mount_surface:"On furniture",studio_mount_wall:"On the wall",studio_color_body:"Body",studio_color_lamp_body:"Base and frame",studio_color_front:"Fronts",studio_color_boards:"Boards",studio_color_shade:"Shade",studio_color_display:"Display frame",studio_color_white:"White",studio_color_wood:"Wood",studio_color_metal:"Metal",studio_color_dark:"Dark",studio_color_glass:"Glass",studio_color_accent:"Accent",studio_color_own:"Own colour",studio_color_plan:"Colour of the plan",studio_place:"Put into the plan",studio_save:"Save the change",studio_open:"Change in the studio",studio_error:"Could not save: {detail}",studio_pack_name:"Own furniture",studio_pack_publisher:"Furniture studio",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",tilt_x:"Tilt front/back (\xB0)",tilt_z:"Tilt sideways (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_rise:"Rise along its length (\xB0)",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_stairs:"Stairs",hint_stairs:"Drag where the stair should stand \u2013 it runs along the long side; set shape, turn and build on the right afterwards",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_slope:"Sloping",wall_slope_start:"Height at the start (m)",wall_slope_end:"Height at the end (m)",wall_slope_hint:"Sloping wall: the top runs straight from the height at the start of the wall (the corner with the lower number) to the height at its end. Both may be above the floor height, for example for a lean-to room with high clerestory windows.",wall_slope_off:"Back to a level wall",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_view:"Wall view",wall_view_hint:"The wall from the front: drag its doors, windows and furniture or type their distance.",wall_view_prev:"Previous wall",wall_view_next:"Next wall",wall_view_left:"From the left (m)",wall_view_height:"Above the floor (m)",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",free_wall_slope:"\u25E2 Sloping",free_wall_slope_hint:"The wall gets higher or lower from one end to the other: the height above is at its start, the one here at its end.",free_wall_height_end:"Height at the end (m)",arc:"Arc",arc_hint:"Bends the wall into an arc. A room sharing the wall bends along, doors and windows move with it; Undo takes the arc back.",arc_bulge:"Bulge (m)",arc_bulge_hint:"How far the middle of the wall bulges: positive outwards, negative into the room.",arc_apply:"Bend",arc_too_wide:"A door or window in this wall is too wide for this curve. Make the curve flatter or the opening narrower.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Extensions \u2192 Furniture packs).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_entity_mower:"Robot mower",pet_room_sensor:"The pet's room sensor (optional)",pet_room_hint:"A sensor naming the room the pet is in \u2013 Bermuda or ESPresense with a tag on its collar: in 3D it then roams that room.",furn_entity_water:"Valve or switch",device_temp:"Device temperature",device_temp_hint:"A temperature sensor of the device (inverter, battery, PC \u2026): its value shows on the pin in the 3D view, from 60 \xB0C the pin is highlighted.",fridge_temp:"Fridge temperature",freezer_temp:"Freezer temperature",fridge_temp_hint:"The pin shows the temperatures. Above 8 \xB0C in the fridge or \u221212 \xB0C in the freezer it lights up as a warning.",spray_reach:"Reach of the water (m)",spray_hint:"While the valve is open or the switch is on, the sprinkler throws water in arcs around it.",furn_robot_room:"Current room (sensor)",robot_cal_none:"Not calibrated yet \u2014 with nothing tying the robot's grid to the plan, the lanes stay invented.",robot_cal_done:"Calibrated: one map cell measures {m} m.",robot_cal_do:"Calibrate from where the robot is now",robot_cal_doing:"Tap the plan where the robot is right now.",robot_cal_need:"The robot's map is not reporting a position \u2014 is the integration running?",robot_cal_hint:"The dock is the anchor: the plan knows where it stands, the camera knows where the robot and its dock lie in their grid. If the map names its rooms like the plan does, \u201CCalibrate from the rooms\u201D is all it takes. Otherwise: stop the robot at least 1.5 m away \u2014 pause the clean \u2014 and tap it on the plan. If the rooms come out flipped, set the tick.",robot_cal_mirror:"The robot's map is mirrored (rooms come out flipped)",robot_cal_forget:"Remove the calibration",robot_cal_nudge:"Fine-tune by hand: the arrows move the map by 10 cm, \u27F2 \u27F3 turn it by 1\xB0, \u2212 + change its size by 1 %.",robot_cal_nudge_move:"Move the map",robot_cal_nudge_turn:"Turn the map",robot_cal_nudge_grow:"Make the map larger or smaller",robot_cal_rooms:"Calibrate from the rooms (the map knows {n} rooms)",robot_cal_rooms_none:"Too few rooms have the same name in the plan as on the robot's map ({n} found, at least 2 needed). Name them alike \u2014 or calibrate from the robot's position.",robot_cal_rooms_bad:"The rooms with matching names lie differently in the plan than on the robot's map \u2014 is a room mixed up? Otherwise calibrate from the robot's position.",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. With the robot's own map calibrated below, the track shows where it has really driven instead; without it the lanes are a guess. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_ceiling_fan:"Ceiling fan",furn_fan_entity:"Fan",fan_hint:"The light is the fan's light kit (leave it empty if it has none). The fan is found in the room or chosen here: in 3D the blades turn as fast as it runs, its icon switches it, swiping up/down changes the speed, a long press opens the quick menu. The height is how far it hangs from the ceiling (more = a longer downrod).",room_ceiling:"Ceiling height",room_ceiling_tip:"Lower than the floor (a bathroom under the stairs) or higher (a living room open up to the roof): ceiling lights, fans, LED strips and ceiling devices hang from here, and the room's walls are this high.",room_ceiling_through:"The ceiling ({ceiling} m) is above the floor height ({floor} m): the room reaches into the floor above, its walls rise with it, and the floor above stays open over it. The editor of the upper floor shows the area hatched.",room_floor_offset:"Floor level (m)",room_floor_offset_hint:"When this room's floor lies lower or higher than the floor (a sunken entrance: \u22120.39), its floor, walls, doors and windows and what stands in it move with it; its ceiling stays. Add the steps as a stair.",room_inner:"Inside {w} \xD7 {d}",room_inner_hint:"Measured from wall to wall: inner walls take half their thickness, outer walls stand outside the outline.",floor_heating:"Underfloor heating (optional)",floor_heating_hint:"While the thermostat heats (or the valve is open, the switch on), the room's floor glows warm in 3D.",room_announce_speaker:"Speaker for announcements",room_announce_quiet:"Quiet time for announcements",room_announce_hint:"Without a choice, the speaker placed in the room talks, else a voice assistant, an Echo or a speaker of its area (never a TV). During the quiet time, announcements to several rooms leave this room out; one meant only for it still gets through.",ceiling_here:"Ceiling here",ceiling_here_hint:"Height of the ceiling right at this spot, e.g. in a sloping ceiling. Empty = the room's ceiling.",ceiling_slope:"Up to the roof slope",ceiling_slope_hint:"The ceiling here lies under the roof slope: the lamp hangs from its underside, right above where it stands.",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",lamp_extra_light:"Bulb {n} (optional)",lamp_extra_hint:"A fixture with several lights \u2013 main light, night light, ambient ring: while the main light is off it glows in 3D with the next light that is on, a little dimmer. Switch the lights one by one in the room panel.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",furn_colors_card:"Furniture colours of this card",furn_color_house:"House colour",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_own:"Own",own_look_card:"Own look colours of this card",own_look_dark:"Own look: surfaces dark",own_look_light:"Own look: surfaces light",own_look_lines:"Own look: lines",own_look_background:"Own look: background",own_look_hint:"The look \u201COwn\u201D works like Blueprint and Day, but with your colours: walls, floors and furniture run from \u201Csurfaces dark\u201D to \u201Csurfaces light\u201D, edges take the line colour. Signal colours (lamps, alerts, heat map) stay. On a light background the lines do not glow. A card can set its own colours.",theme_auto:"Auto",clock:"Clock",clock_none:"None",clock_top_left:"Top left",clock_top_right:"Top right",clock_bottom_left:"Bottom left",clock_bottom_right:"Bottom right",glass_walls:"Glass walls",glass_walls_hint:"How opaque the walls you look through into the rooms are: left almost invisible, right opaque. For this screen.",screen_name:"Name of this screen",screen_name_hint:'Announcements show on every open NextFloor screen. With a name (e.g. "Hallway"), an announcement can go to this screen only. Unticked, this screen stays silent.',announce_on:"Announcements on this screen are on",announce_muted:"Announcements on this screen are muted",lock3d_on:"Lock 3D (no turning, zooming or panning; taps still work)",lock3d_off:"Unlock 3D",walk:"Walk through the house",travel:"Time travel: replay the last 24 hours or 7 days",travel_play:"Play",travel_pause:"Pause",travel_loading:"Loading history \u2026",travel_failed:"The history could not be loaded.",travel_speed:"Speed",travel_speed_min:"1 min/s",travel_speed_10min:"10 min/s",travel_speed_hour:"1 h/s",travel_days:"days",travel_live:"Live",card_travel_button:"Button for time travel",walk_stop:"Stop walking",walk_hint:"Drag: look around \xB7 W A S D / arrows or stick: walk \xB7 wheel: step",card_walk_button:"Button to walk through",card_lock_button:"Button for the 3D lock",backdrop:"Own background",backdrop_color:"Colour",backdrop_image:"Picture (/local/\u2026 or https://\u2026)",backdrop_dim:"Dim",backdrop_hint:"Instead of the look's sky the house stands in front of a colour or a picture of your own. A picture in /config/www is reachable at /local/\u2026.",furnish:"Furnish",split_3d:"3D beside",plan_dims:"Measurements",plan_dims_hint:"Labels every room edge with its length.",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_mould:"Mould",heat_short_power:"Power",heat_short_comfort:"Comfort",heat_short_sun:"Sun",heat_short_wifi:"Wi-Fi",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_mould:"Mould",heat_power:"Power use",heat_comfort:"Comfort score",heat_sun:"Sun today",room_sun_hours:"{h} h of sun today ({facing})",open_since:"open for {time}",presence_now:"someone here",presence_last:"last seen {time} ago",comfort_n:"Comfort {n}",empty_lights_hint:"{n} lights on, nobody here for {min} min.",empty_lights_off:"Lights off",open_heating_hint:"{n} windows open while the heating runs.",open_heating_off:"Heating off",room_clean:"Cleaning (script or button)",room_clean_hint:`A script or button that sends the robot vacuum to this room (e.g. your robot integration's room cleaning). The room panel then shows "\u{1F9F9} Clean".`,room_clean_run:"Clean",room_clean_run_hint:"Sends the robot vacuum to this room.",shade_hint:"Sun on {n} windows at {temp} \u2013 lower the blinds?",shade_close:"Lower",room_sun_year:"Sun over the year",room_sun_year_hint:"The hours of sun through the room's outside windows on the 15th of every month.",room_energy:"today {today} \xB7 month {month}",room_energy_hint:"From the statistics of the power sensors of the room's devices; the month's cost at the house's tariff.",heat_summer:"summer",heat_winter:"winter",air_co2:"air it (CO\u2082)",air_humidity:"air it (damp)",air_mould:"risk of mould \u2013 air it",room_curve_hint:"The room's temperature over the last 24 hours",heat_values:"Values at the room names",heat_wifi:"Wi-Fi",wifi_aps:"{n} access points \xB7 {clients} devices",wifi_network:"Network: {online} online \xB7 {offline} offline",wifi_none:"Place access points or routers from the packs (Smart home 2) and link them to an entity of their device.",wifi_clients:"{n} devices",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",meter_parent:"Hangs off meter",meter_parent_none:"none (main meter)",meter_main:"Main meter",meter_unmetered:"{w} unmetered",meter_device_hint:"If the device sits behind a sub-meter (e.g. a balcony plant in a flat), its power counts towards that flat. The sub-meter has to measure both ways for this (\u2212 = feeding back); if it only counts import, the flat's consumption comes out too high while there is a surplus.",meter_sub_power:"Power of the branch (W, + = drawn, \u2212 = fed back)",meter_floors:"Feeds the floors",meter_sub_hint:"A sub-meter measures its branch, e.g. a flat. Devices on the ticked floors hang off it in 3D instead of the main meter; what the main meter counts beyond that shows as \u201CCommon (rest)\u201D in the balance.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",energy_routes:"Cable routes",energy_routes_hint:"Where a cable really runs: the flow then follows your points instead of an arc through the house. Without a route it keeps the arc. Consumers keep their arc.",route_conn_solar:"{name} \u2192 inverter",route_conn_battery:"Battery \u2194 house",route_conn_inverter:"Inverter \u2192 house",route_conn_grid:"Grid \u2194 house",route_conn_meter:"{name} \u2194 parent meter",route_conn_device:"{name} \u2194 sub-meter",route_points:"{n} points",route_none:"direct arc",route_draw:"Draw route",route_redraw:"Redraw",route_drawing:"Tap the points the cable runs through on the plan, from one end to the other; switch floors in between where it goes through a ceiling. {n} points.",route_undo:"Last point",route_done:"Done",route_cable:"Show as cable",route_cable_hint:"Draws the route as a visible cable, not just as the faint line under the particles.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_rack_ew:"East-west racks",solar_rack_ew_hint:"Every second row faces the other way, the pairs stand back to back \u2013 low and close, as on many flat roofs.",solar_rack_tilt:"Rack (\xB0 more tilt)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",chimneys:"Chimneys",chimney:"Chimney",chimney_shape:"Shape",chimney_brick:"Brick",chimney_round:"Round",chimney_wide:"Wide, two flues",chimney_steel:"Steel flue pipe",chimney_diameter:"Diameter (m)",chimney_depth:"Depth (m)",chimney_height:"Height above the roof (m)",chimney_hint:"The height counts from the upper side, where the chimney leaves the roof. Drag it in the plan or in the 3D view, also onto another roof face.",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_tap:"Tapping the item",furn_tap_default:"As usual",furn_tap_hint:"An own action like the star menu's own buttons, e.g. a browser_mod popup with your card.",furn_show_when:"Only show while \u2026",furn_show_when_state:"\u2026 is in state (empty = on)",furn_show_when_invert:"The other way round: show while it is not",furn_show_when_hint:"Seasonal decoration that only stands in December: a helper (input_boolean), a calendar or a sensor decides whether the piece shows in 3D. Separate several states with commas. The editor always shows it.",picture_upload:"Upload a photo",picture_replace:"Upload another photo",picture_stored:"An own photo is stored.",picture_url:"\u2026 or picture address",picture_entity:"\u2026 or an entity's picture",picture_border:"Mat (%)",picture_fit:"Photo",picture_fit_cover:"fills the frame",picture_fit_contain:"shown whole",picture_hint:"Your photo in the frame, in 3D and on the wall tablet. Uploaded photos are stored with the plan in a smaller size; an image entity (a photo of the day) or a camera shows its current picture.",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",climate_more:"\u2026 and another sensor (averaged)",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",window_opens:"Opens",window_opens_turn:"Turn and tilt (inwards)",window_opens_slide:"Sliding (sliding window, lift-and-slide door)",window_opens_top:"Top-hung (bottom swings out)",window_opens_hint:"Sliding: the pane on the hinge side slides in front of the fixed one; with two leaves the middle two slide outwards. Top-hung windows open with their contact or a tilt sensor.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",pin_shift:"Move the pin",pin_shift_up:"\u2191 up",pin_shift_hint:"When devices stand close together, push the pin a little aside or up here (in metres); the device itself stays where it is.",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_active:"Only while active",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",card_tap_in_room:"Switch devices only in the opened room",card_tap_in_room_hint:"In the house and floor views a tap opens the floor or room, even on a device or its marker. In the opened room it switches the device. A long press always opens its menu or details.",card_markers_outside:"Choose the markers outside the opened room",card_markers_outside_hint:`In the house, on the floor and in the other rooms only the ticked kinds; in the opened room all, as set above. A device's own "always" and "never" come first.`,marker_kind_light:"Lights",marker_kind_cover:"Blinds",marker_kind_climate:"Heating",marker_kind_media:"Media",marker_kind_switch:"Switches",marker_kind_fan:"Fans",marker_kind_lock:"Locks",marker_kind_binary:"Contacts and detectors",marker_kind_sensor:"Sensors",marker_kind_tap:"Furniture with an action",marker_kind_other:"Other",device_name_hint:'A name for the plan and the room panel only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',device_simple:"Switch only in the room panel",device_simple_hint:"The room panel shows only the switch for this lamp, without brightness, colour temperature and colours.",floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_shape:"Shape",stair_shape_straight:"Straight",stair_shape_quarter:"Quarter turn (winders)",stair_shape_l:"L with landing",stair_shape_half:"Half turn (winders)",stair_shape_u:"U with landing",stair_shape_spiral:"Spiral",stair_turn:"Turns (walking up)",stair_turn_left:"To the left",stair_turn_right:"To the right",stair_build:"Build",stair_build_solid:"Solid (concrete)",stair_build_stringer:"On stringers",stair_build_mono:"Mono stringer (spine)",stair_build_cantilever:"Cantilevered (floating)",stair_risers:"Closed risers",stair_steps:"Risers",stair_run_width:"Flight width (m)",stair_landing_after:"Risers up to the landing",stair_landing_hint:"The landing lies {h} cm above the floor; the other risers come after it.",stair_rail:"Railing",stair_rail_none:"None",stair_rail_left:"Left",stair_rail_right:"Right",stair_rail_both:"Both sides",stair_down:"Leads down",stair_down_hint:"The stair starts on this floor and leads down, for example into a cellar that need not be drawn. It opens the floor of this level.",stair_measures:"{steps} risers of {rise} cm \xB7 going {going} cm \xB7 step measure {measure} cm",stair_uncomfortable:"uncomfortable (step measure 59\u201365 cm, rise at most 21 cm)",stair_up_note:"The stair starts at the marked front edge. The floor above opens only where less than 2.2 m of headroom is left above the steps.",stair_down_note:"You step onto the stair at the marked front edge and walk down. The plan draws it dashed; this floor opens above the steps.",stair_opening:"Floor opening",stair_opening_headroom:"By headroom (only where needed)",stair_opening_full:"Over the whole stair",stair_opening_none:"None (hatch, closed stairwell)",stair_opening_hint:"How much of the floor the stair reaches it opens: the floor above, or its own floor for a stair going down. By headroom opens only above the steps that lack 2.2 m.",stair_up_note_plain:"The stair starts at the marked front edge and rises towards the back.",stair_upgrade:"Set the shape",stair_upgrade_hint:"Turns this into a stair with a shape (winding, L, U, spiral), build, railing and number of steps.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas:"Gas meter (optional)",energy_water:"Water meter (optional)",energy_meters_hint:"Gas and water show with the house's balance \u2013 in the energy bar and on the house card: a sensor with the flow now (m\xB3/h, l/min) or today's reading.",energy_gas_short:"Gas",energy_water_short:"Water",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_rest:"Common (rest)",energy_advanced:"Advanced energy mode",energy_advanced_on:"Use sub-meters",energy_show_unmetered:"Show unmetered use at sub-meters",energy_show_unmetered_hint:"A sub-meter's label then shows what its floors use and how much of it no placed device measures, e.g. \u201C500 W \xB7 450 W unmetered\u201D. Otherwise it shows the meter's reading.",energy_advanced_hint:"For sub-meters, e.g. one per flat behind a main meter: a meter can then hang off another one and feed its own floors. Off = the first meter is the grid connection, further ones are consumers.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",ble:"Bluetooth locating",ble_hint:"Locate a Bluetooth tag (key fob, watch, phone) by room: walk through the rooms with it and record each room. NextFloor then compares how strongly Home Assistant's Bluetooth scanners (ESPHome proxies, Shelly devices with Bluetooth switched on, adapters on the server) hear it. Every tag gets a sensor whose state is the room name.",ble_unavailable:"Home Assistant's Bluetooth integration is not running. Without it there are no scanners.",ble_scanners:"{n} Bluetooth scanners in Home Assistant. The more scanners in different rooms, the more exact.",ble_add:"Add a tag or device",ble_trackers:"Phones and watches (Private BLE Device)",ble_devices:"Bluetooth devices found",ble_name:"Name (optional)",ble_refresh:"Reload the list",ble_add_button:"Add",ble_learn:"Learn rooms",ble_close:"Close",ble_spots:"{n} recordings",ble_now:"Now",ble_unknown:"unknown",ble_none_heard:"No scanner hears the tag right now. Hold it near a scanner and wait a moment; a tag only sends every few seconds.",ble_no_address:"This phone or watch has no known address right now. Check Home Assistant's Private BLE Device integration.",ble_one_scanner:"Only one scanner hears the tag. Telling rooms apart takes at least two, better three or more.",ble_learn_room:"Record a room",ble_record:"Record ({s} s)",ble_recording:"Recording \u2026 {s} s left",ble_forget_room:"Forget the room",ble_learn_hint:"Pick the room, press Record and walk slowly through the whole room with the tag in your hand, into the corners too. Recording again replaces the room. Learn every room you want to locate the tag in.",ble_sensor_hint:`The sensor "{name}" (device NextFloor) shows the room. Under Presence you can pick it as a person's room sensor.`,presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",presence_room:"Default room",presence_room_none:"\u2013 none \u2013",presence_add:"Another entity (helper switch, tracker)",no_persons:"There are no people in Home Assistant."},vo=globalThis,bo=globalThis.__NF_SHARED_TEXTS__?vo.__nextfloorBuiltin?.de??{}:xd,wo=globalThis.__NF_SHARED_TEXTS__?vo.__nextfloorBuiltin?.en??{}:Sd;vo.__nextfloorBuiltin??={de:bo,en:wo};var Zs=()=>typeof M=="object"&&M||{},Md=globalThis,Jn=Md.__nextfloorTexts??=new Map;function Ys(r){let e=r.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in Zs()?e:void 0}function Js(r){let e=Ys(r),t=e===void 0?void 0:Jn.get(e);return t instanceof Promise?void 0:t}function Qn(r,e){let t=Ys(r?.language??navigator.language);if(t===void 0)return!1;let n=Jn.get(t);return n===void 0&&(n=fetch(new URL(`./lang/${t}.json?v=${Zs()[t]}`,import.meta.url)).then(o=>o.ok?o.json():{}).catch(()=>({})).then(o=>{Jn.set(t,o&&typeof o=="object"?o:{})}),Jn.set(t,n)),n instanceof Promise?(n.then(()=>e.requestUpdate()),!0):!1}function Qs(r,e){return Js(r)?.[e]}function R(r,e,t={}){let n=r?.language??navigator.language,o=n.startsWith("de"),i=(o?void 0:Js(n)?.[e])??(o?bo:wo)[e]??wo[e]??bo[e]??e;for(let[s,a]of Object.entries(t))i=i.replace(`{${s}}`,String(a));return i}function O(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var Xs={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Xn=r=>Xs[r];function ke(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function vt(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Xs[r]}"/></svg>`}function ea(r,e,t){let n=e.color_entity&&e.color_entity!=="none"?e.color_entity:t;return n?r.states[n]:void 0}function er(r,e){if(r.animations_enabled===!1||e?.state!=="on")return;let t=e.attributes.effect;if(typeof t!="string"||!r.effect_animations||!Object.prototype.hasOwnProperty.call(r.effect_animations,t))return;let n=r.effect_animations[t];return n==="rainbow"||n==="pulse"||n==="flicker"||Ui(n)?n:void 0}var Be=(r,e)=>R(r,e),$d=(r,e)=>Be(r,e?"state_on":"state_off");function tr(r,e){let t=`state_${e}`,n=R(r,t);return n===t?e:n}var Ad=new Set(["door","window","opening","garage_door"]),Ed=new Set(["playing","paused","on","idle"]);function Rd(r,e){if(e.state!=="on")return Be(r,"state_off");let t=e.attributes.brightness;return typeof t=="number"?`${Math.round(t/255*100)} %`:Be(r,"state_on")}function ta(r,e){let t=e.attributes.current_position,n=e.state==="opening"||e.state==="closing";return typeof t=="number"&&!n?`${t} %`:tr(r,e.state)}function zd(r,e){let t=e.attributes.current_temperature,n=typeof t=="number"?`${O(r,t,1)} ${r?ne(r):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${Be(r,"state_off")}`:Be(r,"state_off"):n??tr(r,e.state)}function Td(r,e){let t=[e.attributes.app_name,e.attributes.media_title,e.attributes.source].find(n=>typeof n=="string"&&n!=="");return Ed.has(e.state)&&t?t:tr(r,e.state)}function Fd(r,e){let t=e.state==="on";return Ad.has(String(e.attributes.device_class))?Be(r,t?"state_open":"state_closed"):Be(r,t?"state_detected":"state_clear")}function Dd(r,e,t=new Date){let n=new Date(e.state);if(Number.isNaN(n.getTime()))return"\u2013";let o=r?.language??navigator.language,s=n.toDateString()===t.toDateString()?{hour:"2-digit",minute:"2-digit"}:{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(o,s).format(n)}function Pd(r,e){if(e.entity_id.startsWith("event."))return Dd(r,e);let t=Number(e.state);if(!Number.isFinite(t))return e.state;let n=r?.entities?.[e.entity_id]?.display_precision??1,o=e.attributes.unit_of_measurement;return`${O(r,t,n)}${typeof o=="string"&&o?` ${o}`:""}`}function ee(r,e){if(!e||I(e))return Be(r,"state_unavailable");switch(D(e.entity_id)){case"light":return Rd(r,e);case"switch":case"fan":return e.entity_id.startsWith("valve.")?ta(r,e):$d(r,e.state==="on");case"cover":return ta(r,e);case"climate":return zd(r,e);case"media":return Td(r,e);case"lock":return tr(r,e.state);case"binary":return Fd(r,e);case"sensor":return Pd(r,e);default:return""}}var Hd=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&H([e,t],n.points))??null;function yo(r,e){return!r||e==null||e===1?r:{...r,level:Math.min(1.5,Math.max(.02,r.level*e))}}function Id(r,e,t){let n=r.states[t.entity_id],o=D(t.entity_id)??mt(t.entity_id,n);if(!o||!n)return null;let i=t.outside?null:Hd(e,t.x,t.z),s=i?.area_id?r.areas?.[i.area_id]?.name:void 0,a={id:t.entity_id,floorId:e.id,roomId:i?.id??null,x:t.x,z:t.z,y:t.y??_t(o,me(e,t.x,t.z),t.mount??null)+(o==="light"&&(t.mount??"ceiling")==="ceiling"?0:Dn(e,t.x,t.z)),lamp:o==="light"?t.mount??"ceiling":null,ceiling:me(e,t.x,t.z),rotation:t.rotation??0,icon:t.icon?ke(t.icon):vt(o),name:t.name||W(r,t.entity_id,s),ownName:t.name||void 0,showName:!!t.show_name,text:ee(r,n),active:Q(n),unavailable:I(n),glow:o==="light"?yo(Ae(n),t.glow_scale):null,effect:o==="light"?er(t,n):void 0,show:t.marker??void 0,fixed:!!t.locked};return a.wedge=Yi({hass:r,entityId:t.entity_id,state:n},{floorId:e.id,roomId:a.roomId,x:a.x,z:a.z,y:a.y,rotation:a.rotation??0},t.plugin??void 0),ko(r,a,n,!!t.icon)}function ko(r,e,t,n){let o=ji({hass:r,entityId:e.id,state:t});if(!o)return e;let i=o.icon&&!n?o.icon.trimStart().startsWith("<svg")?o.icon:ke(o.icon):e.icon;return{...e,icon:i,text:o.text??e.text,active:o.active??e.active}}function na(r,e){return e.floors.flatMap(t=>t.placements.map(n=>Id(r,t,n)).filter(n=>n!==null))}var ra=r=>r.floors.flatMap(e=>e.placements.map(t=>t.entity_id));function fe(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function oa(r,e){return r.callService(e.split(".")[0],"toggle",{entity_id:e})}function aa(r,e,t=!1){if(t)return!1;if(!Array.isArray(r.screens)||!r.screens.length)return!0;let n=(e??"").trim().toLocaleLowerCase();return!!n&&r.screens.some(o=>o.trim().toLocaleLowerCase()===n)}var yt=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=yt;function la(r){let e=`${r.time}|${r.message}`;return yt.has(e)?!1:(yt.add(e),yt.size>50&&yt.delete(yt.values().next().value),!0)}var ua=r=>Math.min(3e4,Math.max(6e3,r.split(/\s+/).length*600+2e3));function Cd(){try{let r=globalThis.AudioContext??globalThis.webkitAudioContext;if(!r)return Promise.resolve();let e=new r,t=(n,o)=>{let i=e.createOscillator(),s=e.createGain();i.type="sine",i.frequency.value=n,s.gain.setValueAtTime(1e-4,e.currentTime+o),s.gain.exponentialRampToValueAtTime(.25,e.currentTime+o+.03),s.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+o+.9),i.connect(s).connect(e.destination),i.start(e.currentTime+o),i.stop(e.currentTime+o+1)};return t(880,0),t(660,.35),new Promise(n=>setTimeout(()=>{e.close().catch(()=>{}),n()},1400))}catch{return Promise.resolve()}}function Nd(r,e){let t=globalThis.speechSynthesis,n=globalThis.SpeechSynthesisUtterance;if(!t||!n)return;let o=new n(e);o.lang=r.language||"en",t.cancel(),t.speak(o)}async function ca(r,e){if(await Cd(),e.audio)try{let t=e.audio.startsWith("/")&&r.hassUrl?r.hassUrl(e.audio):e.audio;await new Audio(t).play();return}catch{}Nd(r,e.message)}function da(r,e){return r.connection.subscribeMessage(e,{type:"nextfloor/announcements/subscribe"}).then(t=>()=>{t().catch(()=>{})},()=>()=>{})}var ia=/^(media_player|assist_satellite)\./;function Od(r,e){return e?Object.values(r.entities??{}).filter(t=>!t.hidden&&(t.area_id??(t.device_id?r.devices?.[t.device_id]?.area_id:null))===e).map(t=>t.entity_id):[]}function sa(r,e){let t=r.states[e];return!t||t.state==="unavailable"?!1:e.startsWith("notify.")?r.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):t.state==="off"||t.state==="unknown"?!1:t.attributes.device_class!=="tv"}function Ld(r,e,t){if(t.announce_speaker==="none")return null;if(t.announce_speaker)return t.announce_speaker;if(e&&t.points.length>=3){let i=[...e.placements.filter(s=>ia.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&ia.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>H([s.x,s.z],t.points)&&sa(r,s.id));if(i)return i.id}let n=Od(r,t.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=n.filter(s=>s.startsWith(o)&&sa(r,s)).sort()[0];if(i)return i}return null}var ha=(r,e,t)=>Ld(r,e,t)!==null,pa=r=>!!r?.services?.nextfloor?.announce;var Z=(r,e)=>[r[0]-e[0],r[1]-e[1]],xe=(r,e)=>[r[0]+e[0],r[1]+e[1]],ge=(r,e)=>[r[0]*e,r[1]*e],oe=(r,e)=>r[0]*e[0]+r[1]*e[1],ze=(r,e)=>r[0]*e[1]-r[1]*e[0],Te=r=>Math.hypot(r[0],r[1]),_e=r=>{let e=Te(r)||1;return[r[0]/e,r[1]/e]},xo=r=>[-r[1],r[0]],So=r=>[r[1],-r[0]];function ma(r){let e=r.heightEnd!==void 0;return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft,height:e?r.heightEnd:r.height,heightEnd:e?r.height:void 0}}function Wd(r,e){let t=r.map(n=>({...n}));for(let n of e){let o=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):t.push({...n})}return t}function Bd(r,e,t){if(r.a===e.b)return!1;let n=_e(Z(t[r.b],t[r.a])),o=_e(Z(t[e.b],t[e.a]));return Math.abs(ze(n,o))>1e-6||oe(n,o)<=0||r.free||e.free||r.heightEnd!==void 0||e.heightEnd!==void 0?!1:r.height===e.height&&r.exterior===e.exterior&&r.roomLeft===e.roomLeft&&r.roomRight===e.roomRight&&Math.abs(r.left-e.left)<=1e-9&&Math.abs(r.right-e.right)<=1e-9}function fa(r,e,t=new Set){let n=r.slice();for(;;){let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]].b===s?n[a[0]]:ma(n[a[0]]),u=n[a[1]].a===s?n[a[1]]:ma(n[a[1]]);if(!Bd(l,u,e))continue;let c={...l,b:u.b,sources:Wd(l.sources,u.sources)};i=[...n.filter((d,p)=>p!==a[0]&&p!==a[1]),c];break}if(!i)return n;n=i}}function ga(r,e){let t=new Map;r.forEach((o,i)=>{let s=_e(Z(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:ge(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,u]of a)t.set(l,[...t.get(l)??[],u])});let n=new Map;for(let[o,i]of t){let s=e[o];i.sort((l,u)=>l.angle-u.angle);for(let l of i)n.set(l.key,{left:xe(s,ge(xo(l.d),l.left)),right:xe(s,ge(So(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,u)=>{let c=i[(u+1)%i.length],d=xe(s,ge(xo(l.d),l.left)),p=xe(s,ge(So(c.d),c.right)),h=ze(l.d,c.d);if(Math.abs(h)<1e-4)return;let w=xe(d,ge(l.d,ze(Z(p,d),c.d)/h));Te(Z(w,s))>a||(n.get(l.key).left=w,n.get(c.key).right=w)})}return n}function _a(r,e){let t=r.filter((n,o)=>Te(Z(n,r[(o+1)%r.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((o,i)=>{let s=t[(i+t.length-1)%t.length],a=t[(i+1)%t.length],[l,u]=[Z(o,s),Z(a,o)];return Math.abs(ze(_e(l),_e(u)))<1e-7&&oe(l,u)>0});if(n===-1)return t;t=t.filter((o,i)=>i!==n)}}function Vd(r){let e=[];return{points:e,idOf(t){let n=e.findIndex(o=>Math.abs(o[0]-t[0])<=r&&Math.abs(o[1]-t[1])<=r);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function Kd(r,e){let t=[];for(let n of r){let o=n.points;if(o.length<3||Math.abs(et(o))<1e-6)continue;let i=et(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let u=s[(l+1)%s.length];a!==u&&t.push(i?{u:a,v:u,room:n.id,edge:l,forward:!0}:{u,v:a,room:n.id,edge:l,forward:!1})})}return t}function Gd(r,e,t){let n=[];for(let o of r){let[i,s]=[e[o.u],e[o.v]],a=Z(s,i),l=Te(a),u=ge(a,1/l),c=e.map((p,h)=>({id:h,rel:Z(p,i)})).filter(({id:p,rel:h})=>p!==o.u&&p!==o.v&&oe(h,u)>t&&oe(h,u)<l-t&&Math.abs(ze(u,h))<=t).map(({id:p,rel:h})=>({t:oe(h,u),id:p})).sort((p,h)=>p.t-h.t),d=[{t:0,id:o.u},...c,{t:l,id:o.v}];for(let p=0;p+1<d.length;p++){let[h,w]=[d[p],d[p+1]];n.push({u:h.id,v:w.id,room:o.room,edge:o.edge,t0:o.forward?h.t:l-w.t,t1:o.forward?w.t:l-h.t,forward:o.forward})}}return n}var ba=r=>({room_id:r.room,edge:r.edge,t0:r.t0,t1:r.t1});function Ud(r,e){let t=new Map(r.map(a=>[a.id,a])),n=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;n.set(l,[...n.get(l)??[],a.t0].sort((u,c)=>u-c))}let o=a=>{let l=t.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(n.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=t.get(a.room),[u,c]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof u!="number"||typeof c!="number"||u<=0||c<=0)return null;let[d,p]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:u,to:c,length:Math.hypot(p[0]-d[0],p[1]-d[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let c=o(a);return typeof c=="number"&&c>0?[c,c]:[null,null]}let u=c=>l.from+(l.to-l.from)*c/l.length;return a.forward?[u(a.t0),u(a.t1)]:[u(a.t1),u(a.t0)]};return{heightsOf(a){let[l,u]=[1/0,1/0];for(let d of a){let[p,h]=s(d),[w,b]=d===a[0]?[p,h]:[h,p];w!==null&&(l=Math.min(l,w)),b!==null&&(u=Math.min(u,b))}let c=a.map(d=>t.get(d.room)?.ceiling);if(c.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...c);l===1/0&&(l=d),u===1/0&&(u=d)}return{...l<1/0?{a:l}:{},...u<1/0?{b:u}:{}}},thicknessOf(a){let l=a.map(u=>{let c=t.get(u.room)?.wall_thickness?.[u.edge];return Array.isArray(c)?c[(n.get(`${u.room}:${u.edge}`)??[]).indexOf(u.t0)]:c}).filter(u=>typeof u=="number"&&u>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function wa(r){let e=t=>Math.round(t*1e6)/1e6;return r.a===void 0||r.b===void 0?r.a!==void 0?{height:e(r.a)}:r.b!==void 0?{height:e(r.b)}:{}:Math.abs(r.a-r.b)<1e-6?{height:e(r.a)}:{height:e(r.a),heightEnd:e(r.b)}}function jd(r,e,t,n){let o=Ud(e,r),i=new Map;for(let l of r){let u=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(u,[...i.get(u)??[],l])}let s=[],a=[];for(let l of i.values()){let u=l[0],c=l.find(p=>p!==u&&p.u===u.v&&p.v===u.u&&p.room!==u.room);for(let p of l)p!==u&&p!==c&&p.room!==u.room&&n.push(`overlap:${u.room}:${p.room}`);let d=c?[u,c]:[u];if(o.hasNoWall(d)){c&&a.push([u.room,c.room]);continue}if(c){let p=o.thicknessOf(d)??t.interior;s.push({a:u.u,b:u.v,left:p/2,right:p/2,exterior:!1,roomLeft:u.room,roomRight:c.room,sources:d.map(ba),...wa(o.heightsOf(d))})}else s.push({a:u.u,b:u.v,left:0,right:o.thicknessOf(d)??t.exterior,exterior:!0,roomLeft:u.room,roomRight:null,sources:[ba(u)],...wa(o.heightsOf(d))})}return{drafts:s,open:a}}function qd(r,e){let t=i=>_e(Z(e[i.b],e[i.a])),n=r.filter(i=>!i.exterior&&!i.free),o=new Map;for(let i of n){if(o.has(i))continue;let s=[i];o.set(i,s);for(let a=0;a<s.length;a++){let l=s[a];for(let u of n){if(o.has(u))continue;(u.a===l.a||u.a===l.b||u.b===l.a||u.b===l.b)&&Math.abs(ze(t(l),t(u)))<1e-6&&(s.push(u),o.set(u,s))}}}for(let i of new Set(o.values())){let s=t(i[0]),a=new Map;for(let c of i)for(let d of[c.a,c.b])a.set(d,(a.get(d)??0)+1);let l=new Set;for(let[c,d]of a)if(d===1)for(let p of r){if(!p.exterior||p.free||p.a!==c&&p.b!==c)continue;let h=t(p);Math.abs(ze(s,h))>1e-6||l.add(oe(s,h)>0?"left":"right")}if(l.size!==1)continue;let u=[...l][0];for(let c of i){let d=c.left+c.right,p=oe(t(c),s)>0,h=u==="left"===p;[c.left,c.right]=h?[0,d]:[d,0]}}}var Zd=(r,e)=>{let t=i=>Math.round(i*100),[n,o]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(o[0])}_${t(o[1])}`};function kt(r,e,t=[]){let n=e.eps??.005,o=[],i=Vd(n),s=Kd(r,i),a=t.filter(_=>Math.hypot(_.b[0]-_.a[0],_.b[1]-_.a[1])>.05),l=a.map(_=>[i.idOf(_.a),i.idOf(_.b)]),u=new Set;for(let _ of r){let S=_.points;S.length<3||(_.wall_splits??[]).forEach(($,k)=>{if(!$||k>=S.length)return;let y=S[k],F=Z(S[(k+1)%S.length],y),T=Te(F);for(let C of $)C>n&&C<T-n&&u.add(i.idOf(xe(y,ge(F,C/T))))})}let c=Gd(s,i.points,n),{drafts:d,open:p}=jd(c,r,e,o);qd(d,i.points);let h=d;a.forEach((_,S)=>{let[$,k]=l[S];if($===k)return;let y=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],F=r.find(C=>C.points.length>=3&&H(y,C.points))?.id??null,T=(_.thickness??e.interior)/2;h.push({free:_.id,a:$,b:k,left:T,right:T,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:typeof _.height=="number"&&_.height>0?_.height:void 0,...typeof _.height=="number"&&_.height>0&&typeof _.height_end=="number"&&_.height_end>0&&Math.abs(_.height_end-_.height)>1e-6?{heightEnd:_.height_end}:{}})});let w=fa(h,i.points,u),b=ga(w,i.points);return{walls:w.map((_,S)=>{let[$,k]=[i.points[_.a],i.points[_.b]],[y,F]=[b.get(`${S}:a`),b.get(`${S}:b`)],T=_a([y.right,F.left,k,F.right,y.left,$],1e-6);return{id:Zd($,k),a:[$[0],$[1]],b:[k[0],k[1]],left:_.left,right:_.right,exterior:_.exterior,roomLeft:_.roomLeft,roomRight:_.roomRight,sources:_.sources,footprint:T,..._.free?{free:_.free}:{},..._.height!==void 0?{height:_.height}:{},..._.heightEnd!==void 0?{heightEnd:_.heightEnd}:{}}}),warnings:[...new Set(o)],open:p}}function va(r,e,t){let n=r.points[e];return xe(n,ge(_e(Z(r.points[(e+1)%r.points.length],n)),t))}function ya(r,e,t){if(r.wall){let o=t.find(a=>a.id===r.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=_e(Z(o.b,o.a));return{room:{id:r.room_id,name:"",area_id:null,points:[o.a,o.b,xe(o.a,[-i[1],i[0]])]},edge:0}}let n=e.find(o=>o.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}var ka=(r,e)=>oe(Z(e,r.a),_e(Z(r.b,r.a)));function xa(r,e,t){if(!e.wall)return Yd(r,t.room,t.edge,e.offset);let n=r.find(o=>o.free===e.wall);return n?{wall:n,s:ka(n,va(t.room,0,e.offset))}:null}function Yd(r,e,t,n){for(let o of r)if(o.sources.some(s=>s.room_id===e.id&&s.edge===t&&n>=s.t0-1e-6&&n<=s.t1+1e-6))return{wall:o,s:ka(o,va(e,t,n))};return null}var Yt=r=>r&&r!=="none"?r:null,Jt=(r,e)=>{e&&!r.includes(e)&&r.push(e)},Sa=r=>new Map(r.floors.flatMap(e=>e.furniture.filter(t=>t.type==="meter").map(t=>[t.id,t])));function Ma(r,e){if(!r.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let t=Sa(r),n=new Set([e.id]);for(let o=t.get(e.parent_meter);o;o=t.get(o.parent_meter??"")){if(n.has(o.id))return null;n.add(o.id)}return t.has(e.parent_meter)?e.parent_meter:null}function Qt(r){return new Set([...Sa(r).values()].filter(e=>Ma(r,e)).map(e=>e.id))}function nr(r,e){return!r.energy.advanced||!e.parent_meter?null:Qt(r).has(e.parent_meter)?e.parent_meter:null}function $a(r,e,t){let n=r.energy.show_unmetered?e.subMeters?.find(o=>o.id===t):void 0;return!n||n.use===null?null:{use:n.use,unmetered:n.unmetered!==null&&n.unmetered<n.use?n.unmetered:null}}function Fe(r,e=t=>Yt(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors.flatMap(o=>o.furniture)){let o=e(n),i=n.type==="meter"?Ma(r,n):null;if(i)(t.subMeters??=[]).push({id:n.id,parent:i,power:o,invert:!!n.meter_invert,floors:n.meter_floors??[],solar:[],batteries:[]});else if(n.type==="meter")t.grid??=o,t.gridExport??=Yt(n.export);else if(n.type==="inverter")Jt(t.solar,o);else if(n.type==="home_battery"){let s=Yt(n.charge);Jt(t.battery,o),Jt(t.charge,s),Jt(t.soc,Yt(n.soc)),(o||s)&&t.batteries.push({power:o,charge:s})}}for(let n of t.subMeters?r.floors.flatMap(o=>o.furniture):[]){let o=n.type==="inverter"||n.type==="home_battery"?t.subMeters?.find(a=>a.id===nr(r,n)):void 0,i=o?e(n):null;o&&n.type==="inverter"&&Jt(o.solar,i);let s=Yt(n.charge);o&&n.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return t}function j(r,e=!1){let t=r?Number(r.state):NaN;if(!Number.isFinite(t))return null;let n={kW:1e3,MW:1e6}[String(r.attributes.unit_of_measurement??"W")]??1;return e?-t*n:t*n}var Jd=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power";function De(r,e){if(Jd(r,e))return e;let t=r.entities?.[e]?.device_id;if(!t)return null;let n=ao(r,t),o=n?We(r,e):null,i=Un(r,t).filter(s=>s!==e);return(n?i.find(s=>o!==null&&We(r,s)===o):i[0])??null}function Xt(r,e){let{grid:t,solar:n,battery:o}=e.energy,i=new Set([t,n,o].filter(a=>!!a)),s=[];for(let a of e.floors)for(let l of a.placements){let u=De(r,l.entity_id);!u||i.has(u)||(i.add(u),s.push({id:l.entity_id,powerEntity:u,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,j(r.states[u])??0)}))}return s}var Aa=r=>{let e=r.filter(t=>t!==null);return e.length?e.reduce((t,n)=>t+n,0):null};function Qd(r,e,t){let n=e.grid??t.grid,o=n?j(r.states[n],e.grid_invert):null;if(!e.grid&&t.gridExport){let i=Math.max(0,j(r.states[t.gridExport])??0);return Math.max(0,o??0)-i}return o}function Xd(r,e,t){return e.solar?j(r.states[e.solar]):t.solar.length?Aa(t.solar.map(n=>j(r.states[n]))):null}function rr(r,e,t){return e.charge?(e.power?Math.max(0,j(r.states[e.power])??0):0)-Math.max(0,j(r.states[e.charge])??0):e.power?j(r.states[e.power],t):null}function eh(r,e,t){return e.battery?j(r.states[e.battery],e.battery_invert):Aa(t.batteries.map(n=>rr(r,n,e.battery_invert)))}function en(r,e,t,n=Fe(e)){let o=e.energy,i=Qd(r,o,n),s=Xd(r,o,n),a=eh(r,o,n),l=(o.battery_soc?[o.battery_soc]:n.soc).map(w=>Number(r.states[w]?.state)).filter(Number.isFinite),u=l.length?l.reduce((w,b)=>w+b,0)/l.length:null,c=o.tariff?r.states[o.tariff]:void 0,d=Number(c?.state),p=o.consumption?j(r.states[o.consumption]):null;p===null&&(i!==null||s!==null||a!==null)&&(p=(i??0)+Math.max(0,s??0)+(a??0)),p===null&&t.length>0&&(p=t.reduce((w,b)=>w+b.power,0));let h={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:u,tariff:c&&Number.isFinite(d)?{value:d,unit:String(c.attributes.unit_of_measurement??"")}:null,consumption:p===null?null:Math.max(0,p)};return n.subMeters?{...h,...th(r,n,h.consumption,o.battery_invert,t)}:h}function th(r,e,t,n,o){let i=e.subMeters??[],s=new Map;for(let p of i)for(let h of p.floors)s.has(h)||s.set(h,p.id);let a=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...i.flatMap(p=>[p.power,...p.solar,...p.batteries.flatMap(h=>[h.power,h.charge])])]),l=p=>o.filter(h=>s.get(h.floorId)===p&&!a.has(h.powerEntity)).reduce((h,w)=>h+w.power,0),u=new Map(i.map(p=>[p.id,p.power?j(r.states[p.power],p.invert):null])),c=i.map(p=>{let h=u.get(p.id)??null,w=p.solar.reduce((S,$)=>S+Math.max(0,j(r.states[$])??0),0),b=p.batteries.reduce((S,$)=>S+(rr(r,$,n)??0),0),g=i.filter(S=>S.parent===p.id).reduce((S,$)=>S+(u.get($.id)??0),0),_=h===null?null:Math.max(0,h+w+b-g);return{id:p.id,parent:p.parent,power:h,solar:w,battery:b,use:_,unmetered:_===null?null:Math.max(0,_-l(p.id))}}),d=c.reduce((p,h)=>p+(h.use??0),0);return{subMeters:c,rest:t===null?null:Math.max(0,t-d)}}var $o=Math.PI/180,za=3,Ta=.1,Mo=1/6,Fa=(r,e)=>[Math.sin((e+r)*$o),-Math.cos((e+r)*$o)],nh=["N","NE","E","SE","S","SW","W","NW"];function rh(r,e,t){return Da(r,e,t).map(n=>n.normal)}function Da(r,e,t){let n=[];for(let o of r.openings){if(o.room_id!==e.id||o.type==="garage")continue;let i=ya(o,r.rooms,r.walls??[]),s=i?xa(t,o,i):null;if(!s||!s.wall.exterior)continue;let{wall:a}=s,l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(l<1e-6)continue;let u=[-(a.b[1]-a.a[1])/l,(a.b[0]-a.a[0])/l],c=a.roomLeft===e.id?u:[-u[0],-u[1]];n.push({opening:o,normal:[-c[0],-c[1]]})}return n}function oh(r,e){let t=((Math.atan2(r[0],-r[1])/$o-e)%360+360)%360;return nh[Math.round(t/45)%8]}var Ea=new WeakMap;function Pa(r,e){let t=Ea.get(e);return t||(t=kt(e.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},e.walls??[]).walls,Ea.set(e,t)),t}var Ra=new WeakMap;function xt(r,e,t,n,o=new Date){let i=`${t.id}|${o.toISOString().slice(0,10)}|${r.settings.north??0}|${n.latitude},${n.longitude},${n.zone??""}`,s=Ra.get(e);s||Ra.set(e,s=new Map);let a=s.get(i);if(a)return a;let l=ih(r,e,t,n,o);return s.set(i,l),l}function ih(r,e,t,n,o){let i=r.settings.north??0,s=rh(e,t,Pa(r,e)),a=[...new Set(s.map(u=>oh(u,i)))];if(!s.length)return{hours:0,facing:a};let l=0;for(let u=Mo/2;u<24;u+=Mo){let c=Xe(dt(u,n.zone,o),n.latitude,n.longitude);if(c.elevation<za)continue;let d=Fa(c.azimuth,i);s.some(p=>p[0]*d[0]+p[1]*d[1]>Ta)&&l++}return{hours:Math.round(l*Mo*10)/10,facing:a}}function Ha(r,e,t,n,o=new Date().getFullYear()){return Array.from({length:12},(i,s)=>xt(r,e,t,n,new Date(Date.UTC(o,s,15,12))).hours)}function Ia(r,e,t,n,o=new Date){let i=Xe(o,n.latitude,n.longitude);if(i.elevation<za)return[];let s=Fa(i.azimuth,r.settings.north??0);return Da(e,t,Pa(r,e)).filter(a=>a.normal[0]*s[0]+a.normal[1]*s[1]>Ta).map(a=>a.opening)}var Ca=r=>6.112*Math.exp(17.62*r/(243.12+r));function St(r,e,t=4){if(r===null||e===null)return null;let n=Math.min(100,e*Ca(r)/Ca(r-t));return Math.round(Math.min(100,Math.max(0,(n-65)/20*100)))}function or(r,e,t){return t!==null&&t>=70?"mould":r!==null&&r>=1e3?"co2":e!==null&&e>=65?"humidity":null}function ot(r=new Date,e=50){let t=r.getMonth(),n=t>=4&&t<=8;return e<0?!n:n}function ir(r,e,t,n=!1){let o=[];if(r!==null){let[s,a]=n?[22,26]:[20,23],l=r<s?s-r:r>a?r-a:0;o.push(Math.max(0,100-l*15))}if(e!==null){let s=e<40?40-e:e>60?e-60:0;o.push(Math.max(0,100-s*4))}if(t!==null&&o.push(Math.max(0,Math.min(100,100-(t-800)/600*100))),!o.length)return null;let i=o.reduce((s,a)=>s+a,0)/o.length;return Math.round(Math.min(i,Math.min(...o)+30))}var sh={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[16,[.2,.45,1]],[20,[.15,.85,.75]],[22.5,[.95,.8,.3]],[26,[1,.28,.18]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[.95,.6,.2]],[45,[.3,.88,.5]],[60,[.2,.78,1]],[75,[.32,.4,.98]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.88,.5]],[800,[.98,.84,.3]],[1200,[1,.5,.2]],[1600,[.98,.25,.25]]]},mould:{deviceClass:"",unit:"%",stops:[[0,[.3,.88,.5]],[40,[.98,.84,.3]],[70,[1,.5,.2]],[100,[.75,.2,.55]]]},comfort:{deviceClass:"",unit:"",stops:[[0,[.98,.25,.25]],[40,[1,.5,.2]],[65,[.98,.84,.3]],[85,[.3,.88,.5]],[100,[.2,.8,.7]]]},power:{deviceClass:"power",unit:"W",stops:[[0,[.25,.4,.6]],[100,[.3,.88,.5]],[500,[.98,.84,.3]],[1500,[1,.5,.2]],[3e3,[.98,.25,.25]]]},sun:{deviceClass:"",unit:"h",stops:[[0,[.22,.3,.55]],[2,[.35,.6,.85]],[4,[.98,.84,.3]],[7,[1,.62,.2]],[10,[1,.42,.25]]]}},ah={deviceClass:"temperature",unit:"\xB0C",stops:[[19,[.2,.45,1]],[22.5,[.15,.85,.75]],[25.5,[.95,.8,.3]],[29,[1,.28,.18]]]};function sr(r,e=!1){return r==="temperature"&&e?ah:sh[r]}var lh=(r,e,t)=>[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t,r[2]+(e[2]-r[2])*t];function Na(r,e,t=!1){let{stops:n}=sr(r,t),o=n.findIndex(([u])=>e<=u);if(o===-1)return n[n.length-1][1];if(o===0)return n[0][1];let[i,s]=n[o-1],[a,l]=n[o];return lh(s,l,(e-i)/(a-i))}function Ao(r,e,t,n){let o=null;for(let i of Eo(r,e,t,n)){let s=j(r.states[i]);s!==null&&(o=(o??0)+Math.max(0,s))}return o}function Eo(r,e,t,n){let{grid:o,solar:i,battery:s}=e.energy,a=new Set([o,i,s].filter(Boolean)),l=new Set,u=(c,d)=>n.points.length>=3&&H([c,d],n.points);for(let c of t.placements){let d=u(c.x,c.z)?De(r,c.entity_id):null;d&&l.add(d)}for(let c of t.furniture){if(!u(c.x,c.z))continue;let d=c.power&&c.power!=="none"?c.power:c.entity&&c.entity!=="none"?De(r,c.entity):null;d&&l.add(d);for(let p of c.gang_entities??[]){let h=p&&p!=="none"?De(r,p):null;h&&l.add(h)}}return[...l].filter(c=>!a.has(c))}function Oa(r,e,t){let n=new Map;for(let o of e.floors)for(let i of o.rooms){if(t==="power"){let a=Ao(r,e,o,i);a!==null&&n.set(i.id,a);continue}if(t==="comfort"){let a=ir(Y(r,o,i,"temperature"),Y(r,o,i,"humidity"),Y(r,o,i,"co2"),ot(new Date,r.config?.latitude));a!==null&&n.set(i.id,a);continue}if(t==="sun"){let{latitude:a,longitude:l,time_zone:u}=r.config??{};if(a===void 0||l===void 0||o.layer)continue;n.set(i.id,xt(e,o,i,{latitude:a,longitude:l,zone:u}).hours);continue}let s=t==="mould"?St(Y(r,o,i,"temperature"),Y(r,o,i,"humidity")):Y(r,o,i,t);s!==null&&n.set(i.id,s)}return n}function La(r,e=!1){let{stops:t}=sr(r,e),n=t[0][0],o=t[t.length-1][0]-n;return`linear-gradient(90deg, ${t.map(([s,a])=>`rgb(${a.map(l=>Math.round(l*255)).join(",")}) ${Math.round((s-n)/o*100)}%`).join(", ")})`}function tn(r,e=0){let t=new Date(r);return t.setHours(0,0,0,0),t.setDate(t.getDate()-e),t.getTime()}function uh(r,e,t){let n=Array.from({length:7},(c,d)=>tn(t,6-d)),o=c=>Math.min(24,Math.max(0,(Math.min(t,c+864e5)-c)/36e5)),i=(c,d)=>{if(!c)return null;let p=(r[c]??[]).find(h=>Math.abs(new Date(h.start).getTime()-d)<3*36e5);return typeof p?.mean=="number"?p.mean:null},s=(c,d,p=1)=>{let h=c.map(w=>i(w,d)).filter(w=>w!==null);return h.length?h.reduce((w,b)=>w+b,0)*p:null},a=(c,d)=>c===null?null:Math.round(c*o(d)/1e3*10)/10,l=n.map(c=>a(s(e.solar,c),c)),u=n.map(c=>{if(e.consumption)return a(i(e.consumption,c),c);let d=[s(e.solar,c),s(e.grid?[e.grid]:[],c,e.gridInvert?-1:1),s(e.battery,c,e.batteryInvert?-1:1)];return d.every(p=>p===null)?null:a(Math.max(0,d.reduce((p,h)=>p+(h??0),0)),c)});return{days:n,solar:l,use:u}}async function Wa(r,e,t=Date.now()){let n=[...new Set([...e.solar,...e.battery,e.grid,e.consumption].filter(s=>!!s))];if(!n.length)return null;let o=await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(tn(t,6)).toISOString(),end_time:new Date(t).toISOString(),statistic_ids:n,period:"day",types:["mean"],units:{power:"W"}}),i=uh(o,e,t);return i.solar.some(s=>s!==null)||i.use.some(s=>s!==null)?i:null}var ch=864e5,Ba=36e5;function dh(r){let e=new Date(tn(r));return e.setDate(1),e.getTime()}function hh(r,e,t){let n=tn(t),[o,i,s]=[0,0,!1];for(let l of e)for(let u of r[l]??[]){if(typeof u.mean!="number")continue;let c=new Date(u.start).getTime(),d=Math.min(24,Math.max(0,(Math.min(t,c+ch)-c)/Ba)),p=Math.max(0,u.mean)*d/1e3;i+=p,Math.abs(c-n)<3*Ba&&(o+=p),s=!0}let a=l=>Math.round(l*100)/100;return s?{today:a(o),month:a(i)}:null}async function Va(r,e,t=Date.now()){if(!e.length)return null;let n=await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(dh(t)).toISOString(),end_time:new Date(t).toISOString(),statistic_ids:[...e],period:"day",types:["mean"],units:{power:"W"}});return hh(n,e,t)}function Ka(r,e){if(!e||!Number.isFinite(e.value))return null;let t=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!t)return null;let n=/^(ct|cent|cents|c)$/i.test(t[1]),o=n||/^eur$/i.test(t[1])?"\u20AC":t[1];return{value:Math.round(r*e.value*(n?1:100))/100,currency:o}}var Ua=20,Ga=new WeakMap;function ph(r){let e=r.entities??{},t=Ga.get(e);if(!t){t=new Map;for(let[n,o]of Object.entries(e))o.device_id&&n.startsWith("sensor.")&&r.states[n]?.attributes.device_class==="battery"&&!t.has(o.device_id)&&t.set(o.device_id,n);Ga.set(e,t)}return t}function mh(r,e){let t=r.entities?.[e]?.device_id,n=t?ph(r).get(t):void 0;if(n){let s=Number(r.states[n]?.state);if(Number.isFinite(s))return s}let o=r.states[e]?.attributes;if(!o||o.battery_level===void 0&&o.battery===void 0)return null;let i=Number(o.battery_level??o.battery);return Number.isFinite(i)?i:null}function fh(r){let e=[],t=n=>typeof n=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(n);for(let n of r.placements)e.push({entity:n.entity_id,x:n.x,z:n.z,room:null});for(let n of r.furniture)for(let o of[n.entity,n.power])t(o)&&e.push({entity:o,x:n.x,z:n.z,room:null});for(let n of r.openings)for(let o of[n.contact,n.contact2,n.tilt,n.tilt2,n.cover,n.cover2,n.lock])t(o)&&e.push({entity:o,x:NaN,z:NaN,room:n.room_id});return e}var gh=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&H([e,t],n.points));function ja(r,e){let t=new Set,n=[];for(let o of e.floors)for(let i of fh(o)){let s=r.entities?.[i.entity]?.device_id??i.entity;if(t.has(s))continue;let a=mh(r,i.entity);a!==null&&(t.add(s),n.push({entity:i.entity,level:a,floorId:o.id,roomId:i.room??gh(o,i.x,i.z)?.id??null}))}return n.sort((o,i)=>o.level-i.level)}var qa=r=>r.toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),_h=new Set(["","unknown","unavailable","not home","away"]);function bh(r,e,t){let n=qa(t);if(_h.has(n))return null;for(let o of e.floors)for(let i of o.rooms){let s=i.area_id?r.areas?.[i.area_id]?.name:void 0;if([i.name,i.area_id,s].map(l=>qa(l??"")).includes(n))return{floorId:o.id,room:i}}return null}function wh(r,e){if(!e)return null;for(let t of r.floors){let n=t.rooms.find(o=>o.id===e);if(n)return{floorId:t.id,room:n}}return null}function vh(r){let e=r.split(/\s+/).filter(Boolean);return e.length===0?"?":(e.length===1?e[0].slice(0,2):e[0][0]+e[e.length-1][0]).toUpperCase()}function yh(r,e){let[t,n]=Le(r.points),o=e*1.15-Math.PI/2+.9;return[t+.75*Math.cos(o),n+.75*Math.sin(o)]}function Za(r,e){let t=[],n=new Map;for(let{person:o,sensor:i,room:s}of e.presence){let a=r.states[o],l=i?r.states[i]:void 0;if(!a||a.state!=="home"&&a.state!=="on")continue;let u=(l?bh(r,e,l.state):null)??wh(e,s);if(!u)continue;let c=n.get(u.room.id)??0;n.set(u.room.id,c+1);let[d,p]=yh(u.room,c),h=String(a.attributes.friendly_name??o),w=a.attributes.entity_picture;t.push({id:o,name:h,initials:vh(h),picture:typeof w=="string"?w:null,floorId:u.floorId,roomId:u.room.id,x:d,z:p})}return t}function kh(r,e){let t=new Set;for(let n of e.rooms)for(let o of tt(r,K(r,n)))D(o)==="light"&&t.add(o);for(let n of e.placements)D(n.entity_id)==="light"&&t.add(n.entity_id);return[...t].filter(n=>r.states[n]?.state==="on").length}function xh(r,e,t){let n=i=>!!i&&r.states[i]?.state==="on",o=0;for(let i of e.openings){let s=t.get(i.id);if(s)if(i.type==="garage")(Ee(r,s,"garage").cover??1)<.95&&o++;else if(i.type==="door")(n(s.contact)||n(s.contact2))&&o++;else{let a=Ee(r,s,"window");Math.max(a.open,a.tilt,a.open2,a.tilt2)>.5&&o++}}return o}function Ya(r,e,t,n){return new Map(e.floors.map(o=>[o.id,{rooms:o.rooms.length,lightsOn:kh(r,o),open:xh(r,o,t),persons:n.filter(i=>i.floorId===o.id).length,power:o.power_entity?j(r.states[o.power_entity]):null,temps:Sh(r,o)}]))}function Sh(r,e){let t=e.rooms.map(n=>Y(r,e,n,"temperature")).filter(n=>n!==null);return t.length>=2?[Math.min(...t),Math.max(...t)]:null}function Ja(r,e){let t=[e.rooms===1?R(r,"floor_rooms_one"):R(r,"floor_rooms",{n:e.rooms})];if(e.lightsOn>0&&t.push(R(r,"floor_lights",{n:e.lightsOn})),e.open>0&&t.push(R(r,"floor_open",{n:e.open})),e.persons>0&&t.push(R(r,"floor_persons",{n:e.persons})),e.temps&&r){let[n,o]=e.temps.map(i=>O(r,ce(r,i),0));t.push(n===o?`${n} ${ne(r)}`:`${n}\u2013${o} ${ne(r)}`)}return e.power!=null&&t.push(`\u26A1 ${it(r,e.power)}`),t.join(" \xB7 ")}function it(r,e){let t=Math.abs(e);return t>=1e3?`${O(r,e/1e3,t>=1e4?1:2)} kW`:`${Math.round(e)} W`}function Ro(r){let e=Math.max(0,Math.floor(r/6e4));return e<60?`${e} min`:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")} h`}function ar(r){if(r.state!=="on")return{entity:r.entity_id,on:!1};let e=r.attributes,t={entity:r.entity_id,on:!0};typeof e.brightness=="number"&&(t.brightness=e.brightness);let n=String(e.color_mode??"");return Array.isArray(e.rgb_color)&&!["color_temp","brightness","onoff"].includes(n)?t.rgb=e.rgb_color.slice(0,3):typeof e.color_temp_kelvin=="number"&&(t.kelvin=e.color_temp_kelvin),t}function lr(r){let e=r.filter(n=>!n.on).map(n=>n.entity);return[...r.filter(n=>n.on).map(n=>({service:"turn_on",data:{entity_id:n.entity,...n.brightness!==void 0?{brightness:n.brightness}:{},...n.rgb?{rgb_color:n.rgb}:n.kelvin?{color_temp_kelvin:n.kelvin}:{}}})),...e.length?[{service:"turn_off",data:{entity_id:e}}]:[]]}function Qa(r,e){let t=[...r.lights].filter(n=>n.on).sort((n,o)=>(o.brightness??255)-(n.brightness??255))[0];return e.map((n,o)=>({...r.lights[o]??t??{entity:n,on:!1},entity:n}))}var Mh=r=>r.slice(0,r.indexOf(".")),$h=new Set(["switch","fan","input_boolean"]);function nn(r){let e=[],t=new Map,n=[],o=[];for(let l of r){if(!l)continue;let u=Mh(l.entity_id);u==="light"&&l.state==="on"?e.push(l):$h.has(u)&&l.state==="on"?t.set(u,[...t.get(u)??[],l.entity_id]):u==="media_player"&&l.state==="playing"?n.push(l.entity_id):u==="media_player"&&(l.state==="on"||l.state==="idle")&&o.push(l.entity_id)}let i=[],s=[];e.length&&(i.push({domain:"light",service:"turn_off",data:{entity_id:e.map(l=>l.entity_id)}}),s.push(...lr(e.map(ar)).map(l=>({domain:"light",service:l.service,data:l.data}))));for(let[l,u]of t)i.push({domain:l,service:"turn_off",data:{entity_id:u}}),s.push({domain:l,service:"turn_on",data:{entity_id:u}});n.length&&(i.push({domain:"media_player",service:"media_pause",data:{entity_id:n}}),s.push({domain:"media_player",service:"media_play",data:{entity_id:n}})),o.length&&(i.push({domain:"media_player",service:"turn_off",data:{entity_id:o}}),s.push({domain:"media_player",service:"turn_on",data:{entity_id:o}}));let a=e.length+[...t.values()].reduce((l,u)=>l+u.length,0)+n.length+o.length;return{off:i,undo:s,count:a}}function Xa(r){let e=new Set,t=n=>{typeof n=="string"&&/^(light|switch|fan|input_boolean|media_player)\./.test(n)&&e.add(n)};for(let n of r.placements)t(n.entity_id);for(let n of r.furniture){t(n.entity);for(let o of n.extra_lights??[])t(o)}return[...e]}var Ah=/^(light|switch|cover|binary_sensor|lock|media_player|vacuum|fan|climate|lawn_mower|input_boolean|person|device_tracker|alarm_control_panel)\./;var el=r=>[...new Set([...r].filter(e=>Ah.test(e)))].slice(0,200);function Eh(r){let e=new Map;for(let[t,n]of Object.entries(r)){let o={},i=[];for(let s of n)s.a&&(o=s.a),i.push({t:Math.round((s.lu??s.lc??0)*1e3),state:s.s,attributes:o});i.sort((s,a)=>s.t-a.t),e.set(t,i)}return e}async function rn(r,e,t,n,o=!1){if(e.length===0)return new Map;let i=await r.callWS({type:"history/history_during_period",start_time:new Date(t).toISOString(),end_time:new Date(n).toISOString(),entity_ids:e,include_start_time_state:!0,significant_changes_only:!1,minimal_response:o,no_attributes:o});return Eh(i)}function Rh(r,e){let[t,n]=[0,r.length-1],o=null;for(;t<=n;){let i=t+n>>1;r[i].t<=e?(o=r[i],t=i+1):n=i-1}return o}function Mt(r,e,t){let n={...r.states};for(let[o,i]of e){let s=Rh(i,t);if(!s)continue;let a=r.states[o];n[o]={...a??{entity_id:o},entity_id:o,state:s.state,attributes:{...a?.attributes??{},...s.attributes}}}return{...r,states:n}}function tl(r,e,t,n=400){let o=[];for(let s of r.values())for(let a=1;a<s.length;a++)s[a].state!==s[a-1].state&&s[a].t>=e&&s[a].t<=t&&o.push(s[a].t);if(o.sort((s,a)=>s-a),o.length<=n)return o;let i=o.length/n;return Array.from({length:n},(s,a)=>o[Math.floor(a*i)])}function nl(r,e){let t=new Set,n=new Proxy(r.states,{get(o,i){return typeof i=="string"&&t.add(i),o[i]}});return e({...r,states:n}),[...t].filter(o=>o.includes(".")&&o in r.states)}function rl(r,e,t,n,o,i=96){let s=[],a=[];for(let l=0;l<i;l++){let u=t+(n-t)*(l+1)/i,c=o(Mt(r,e,u));s.push(c.solar),a.push(c.consumption)}return{solar:s,use:a}}function on(r,e,t,n){if(n<=0||r.length<2)return"";let o="",i=!1;return r.forEach((s,a)=>{if(s===null){i=!1;return}let l=a/(r.length-1)*e,u=t-Math.max(0,Math.min(n,s))/n*t;o+=`${i?"L":"M"}${l.toFixed(1)},${u.toFixed(1)}`,i=!0}),o}var Se=te`
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
`,ur=te`
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
`,Ve=te`
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
`;function cr(r){return r?.themes?.darkMode===!1?"light":"dark"}var zh=4,Th=8,Fh=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],$t=r=>m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Xn(r)} />
  </svg>`,dr={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},zo=r=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,Dh=24,Ph=10,To=class extends re{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},phrases:{attribute:!1},outside:{attribute:!1},_showAll:{state:!0},_said:{state:!0},_folded:{state:!0},_curve:{state:!0},_moodName:{state:!0},_undo:{state:!0},_energy:{state:!0},_sunYear:{state:!0},rooms:{attribute:!1},building:{attribute:!1}};saidTimer;memo=null;curveFor="";undoTimer;constructor(){super(),this.room=null,this.floor=null,this.phrases=null,this.outside=null,this._said=null,this._showAll=!1,this._folded=!1,this._curve=null,this._moodName=null,this._undo=null,this._energy=null,this._sunYear=!1,this.rooms=null,this.building=null}fireMoods(e,t){this.dispatchEvent(new CustomEvent("mood-change",{detail:{roomId:e.id,moods:t},bubbles:!0,composed:!0}))}runMood(e){for(let t of lr(e))this.call("light",t.service,t.data)}renderMoods(e,t){let n=e.moods??[],o=!!this.rooms&&!!this.hass.user?.is_admin;if(!n.length&&!o)return f;let i=(this.rooms??[]).filter(l=>l.id!==e.id&&l.area_id),s=l=>K(this.hass,l).filter(u=>u.startsWith("light.")),a=()=>{let l=(this._moodName??"").trim()||this.t("mood_new");this.fireMoods(e,[...n,{id:`mood_${Date.now().toString(36)}`,name:l,lights:t.map(ar)}]),this._moodName=null};return m`<div class="nf-rp-moods">
      ${n.map(l=>m`<span class="nf-rp-mood">
          <button class="nf-btn" title=${this.t("mood_set")} @click=${()=>this.runMood(l.lights)}>✨ ${l.name}</button>
          ${i.length?m`<select class="nf-rp-mood-to" aria-label=${this.t("mood_carry")} title=${this.t("mood_carry")} @change=${u=>{let c=u.target,d=i.find(p=>p.id===c.value);c.value="",d&&this.runMood(Qa(l,s(d)))}}>
                <option value="">→</option>
                ${i.map(u=>m`<option value=${u.id}>${u.name}</option>`)}
              </select>`:f}
          ${o?m`<button class="nf-btn nf-rp-small" aria-label=${this.t("delete")} @click=${()=>this.fireMoods(e,n.filter(u=>u.id!==l.id))}>✕</button>`:f}
        </span>`)}
      ${o?this._moodName===null?m`<button class="nf-btn nf-rp-small" title=${this.t("mood_save_hint")} @click=${()=>this._moodName=""}>＋ ${this.t("mood_save")}</button>`:m`<span class="nf-rp-mood"
            ><input type="text" maxlength="40" placeholder=${this.t("mood_new")} .value=${this._moodName} @input=${l=>this._moodName=l.target.value} @keydown=${l=>l.key==="Enter"&&a()} />
            <button class="nf-btn" @click=${a}>${this.t("mood_save")}</button></span
          >`:f}
    </div>`}async loadCurve(e){let t=jn(this.hass,this.floor,e,"temperature"),n=t.length?t:K(this.hass,e).filter(s=>s.startsWith("climate."));if(!n.length)return;let o=Date.now(),i=o-24*36e5;try{let s=await rn(this.hass,n,i,o,!!t.length);if(this.room?.id!==e.id)return;let a=[];for(let l=1;l<=96;l++){let u=Mt(this.hass,s,i+(o-i)*l/96),c=n.map(d=>d.startsWith("climate.")?Number(u.states[d]?.attributes.current_temperature):Number(u.states[d]?.state)).filter(Number.isFinite);a.push(c.length?c.reduce((d,p)=>d+p,0)/c.length:null)}this._curve=a.some(l=>l!==null)?a:null}catch{this._curve=null}}async loadEnergy(e){if(!this.floor||!this.building)return;let t=Eo(this.hass,this.building,this.floor,e);try{let n=await Va(this.hass,t);this.room?.id===e.id&&(this._energy=n)}catch{this._energy=null}}renderEmptyLights(e,t){if(!t.length||!this.room)return f;let n=K(this.hass,e).map(s=>this.hass.states[s]).filter(s=>!!s&&s.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(s.attributes.device_class)));if(!n.length||n.some(s=>s.state!=="off"))return f;let o=Math.max(...n.map(s=>Date.parse(String(s.last_changed??""))||0)),i=Math.floor((Date.now()-o)/6e4);return!o||i<Ph?f:m`<div class="nf-rp-shade">
      <span>💡 ${this.t("empty_lights_hint",{n:t.length,min:i})}</span>
      <button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:t.map(s=>s.entity_id)})}>${this.t("empty_lights_off")}</button>
    </div>`}renderOpenWhileHeating(e){let t=this.room;if(!t||!this.floor)return f;let n=e.filter(a=>a.attributes.hvac_action==="heating"||a.state==="heat"&&a.attributes.hvac_action===void 0);if(!n.length)return f;let o=a=>!!a&&a!=="none"&&this.hass.states[a]?.state==="on",i=this.floor.openings.filter(a=>a.room_id===t.id&&[a.contact,a.contact2,a.tilt,a.tilt2].some(o));if(!i.length)return f;let s=()=>{for(let a of n)(a.attributes.hvac_modes??[]).includes("off")?this.call("climate","set_hvac_mode",{entity_id:a.entity_id,hvac_mode:"off"}):typeof a.attributes.min_temp=="number"&&this.call("climate","set_temperature",{entity_id:a.entity_id,temperature:a.attributes.min_temp})};return m`<div class="nf-rp-shade nf-rp-open-heat">
      <span>🪟 ${this.t("open_heating_hint",{n:i.length})}</span>
      <button class="nf-btn nf-rp-small" @click=${s}>${this.t("open_heating_off")}</button>
    </div>`}renderShade(){let e=this.room,{latitude:t,longitude:n}=this.hass.config??{};if(!e||!this.floor||!this.building||t===void 0||n===void 0)return f;let o=Y(this.hass,this.floor,e,"temperature");if(o===null||o<Dh)return f;let i=a=>{let l=a&&a!=="none"?this.hass.states[a]:void 0;if(!l||I(l))return!1;let u=l.attributes.current_position;return typeof u=="number"?u>30:l.state==="open"},s=[...new Set(Ia(this.building,this.floor,e,{latitude:t,longitude:n}).flatMap(a=>[a.cover,a.cover2].filter(i)))];return s.length?m`<div class="nf-rp-shade">
      <span>☀ ${this.t("shade_hint",{n:s.length,temp:`${O(this.hass,ce(this.hass,o),1)} ${ne(this.hass)}`})}</span>
      <button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:s})}>${this.t("shade_close")}</button>
    </div>`:f}renderSunYear(){let e=this.room,{latitude:t,longitude:n}=this.hass.config??{};if(!e||!this.floor||!this.building||t===void 0||n===void 0)return f;let o={latitude:t,longitude:n};if(!xt(this.building,this.floor,e,{...o,zone:this.hass.config?.time_zone}).facing.length)return f;let s=m`<button class="nf-rp-sun-year" aria-expanded=${this._sunYear} title=${this.t("room_sun_year_hint")} @click=${()=>this._sunYear=!this._sunYear}>
      ☀ ${this.t("room_sun_year")}
    </button>`;if(!this._sunYear)return s;let a=Ha(this.building,this.floor,e,o),l=Math.max(1,...a),u=Array.from({length:12},(c,d)=>new Date(2026,d,15).toLocaleDateString(this.hass.language,{month:"narrow"}));return m`${s}
      <div class="nf-rp-sun-bars" role="img" aria-label=${a.map((c,d)=>`${u[d]} ${O(this.hass,c,1)} h`).join(", ")}>
        ${a.map((c,d)=>m`<span title=${`${O(this.hass,c,1)} h`}><i style=${`height:${Math.round(c/l*100)}%`}></i><b>${u[d]}</b></span>`)}
      </div>`}renderEnergy(){let e=this._energy;if(!e||e.month<=0)return f;let t=this.building?.energy.tariff,n=t?this.hass.states[t]:void 0,o=n?{value:Number(n.state),unit:String(n.attributes.unit_of_measurement??"")}:null,i=Ka(e.month,o),s=a=>`${O(this.hass,a,a<10?2:1)} kWh`;return m`<p class="nf-rp-facts nf-rp-energy" title=${this.t("room_energy_hint")}>
      ⚡ ${this.t("room_energy",{today:s(e.today),month:s(e.month)})}${i?` \xB7 ${O(this.hass,i.value,2)} ${i.currency}`:""}
    </p>`}renderCurve(){let e=this._curve;if(!e)return f;let t=e.filter(u=>u!==null),n=Math.min(...t),o=Math.max(...t),i=Math.max(1,o-n),s=e.map(u=>u===null?null:u-n+i*.1),a=on(s,220,36,i*1.2),l=u=>`${O(this.hass,ce(this.hass,u),1)}\xB0`;return m`<div class="nf-rp-curve" title=${this.t("room_curve_hint")}>
      <svg viewBox="0 0 220 36" preserveAspectRatio="none" aria-hidden="true">${J`<path d=${a}></path>`}</svg>
      <span>24 h · ${l(n)} – ${l(o)}</span>
    </div>`}willUpdate(e){let t=e.get("room");e.has("room")&&t?.id!==this.room?.id&&(this._folded=!1,this._undo=null),this.room&&this.hass&&this.curveFor!==this.room.id&&(this.curveFor=this.room.id,this._curve=null,this._energy=null,this.loadCurve(this.room),this.loadEnergy(this.room))}updated(e){e.has("_folded")&&this.toggleAttribute("folded",this._folded)}t(e,t){return R(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}renderClean(e){let t=e.clean_entity,n=t?this.hass.states[t]:void 0;if(!t||!n)return f;let o=t.slice(0,t.indexOf(".")),i=()=>o==="script"?this.call("script","turn_on",{entity_id:t}):this.call(o,"press",{entity_id:t});return m`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" ?disabled=${I(n)} title=${this.t("room_clean_run_hint")} @click=${i}>🧹 ${this.t("room_clean_run")}</button></div>`}allOff(e){let t=nn(e);for(let n of t.off)this.call(n.domain,n.service,n.data);this._undo=t.undo,clearTimeout(this.undoTimer),this.undoTimer=setTimeout(()=>this._undo=null,1e4)}undoAllOff(){for(let e of this._undo??[])this.call(e.domain,e.service,e.data);this._undo=null,clearTimeout(this.undoTimer)}renderAllOff(e){if(this._undo)return m`<div class="nf-rp-alloff"><span>${this.t("all_off_done")}</span><button class="nf-btn nf-rp-small" @click=${()=>this.undoAllOff()}>↶ ${this.t("all_off_undo")}</button></div>`;let{count:t}=nn(e);return t<2?f:m`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" title=${this.t("all_off_hint")} @click=${()=>this.allOff(e)}>⏻ ${this.t("all_off_n",{n:t})}</button></div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}placedAs(e){for(let t of this.building?.floors??[])for(let n of t.placements)if(n.entity_id===e)return n}name(e){return this.placedAs(e)?.name?.trim()||W(this.hass,e,this.areaName)}nameButton(e){return m`<button class="nf-rp-name" title=${this.t("details")} @click=${()=>fe(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return m`<button
      class="nf-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${I(e)}
      @click=${o}
    ></button>`}outsideRoom=null;render(){let e=!this.room&&this.outside?this.outside:null;e&&!this.outsideRoom&&(this.outsideRoom={id:"nf-outside",name:this.t("outside_area"),area_id:null,points:[],floor_material:"grass"});let t=this.room??(e?this.outsideRoom:null);if(!t||!this.hass)return f;let n=e??K(this.hass,t),o=this.memo,{shown:i,more:s}=e?{shown:e,more:[]}:o&&o.entities===this.hass.entities&&o.floor===this.floor&&o.room===t?o:this.memo={entities:this.hass.entities,floor:this.floor,room:t,...this.floor?Ns(this.hass,this.floor,t):{shown:n,more:[]}},a=lo(this.hass,s).map(k=>k.primary),l=a.length,u=this._showAll?[...i,...a]:i,c=k=>u.filter(y=>k.includes(D(y))).map(y=>this.hass.states[y]),d=c(["light"]),p=c(["cover"]),h=c(["climate"]),w=c(["media"]),b=c(["switch","fan","lock"]),g=c(["sensor","binary"]),_=c(["scene","script"]),S=this.facts(h),$=d.filter(k=>k.state==="on");return m`<section class="nf-rp" aria-label=${t.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${S.length?m`<p class="nf-rp-facts">${S.join(" \xB7 ")}</p>`:f} ${this.renderEnergy()} ${this.renderSunYear()} ${this.renderShade()}
          ${this.renderOpenWhileHeating(h)} ${this.renderEmptyLights(t,$)}
          ${this.renderCurve()}
        </div>
        <button class="nf-rp-close" aria-label=${this.t(this._folded?"panel_unfold":"panel_fold")} title=${this.t(this._folded?"panel_unfold":"panel_fold")} aria-expanded=${this._folded?"false":"true"} @click=${()=>this._folded=!this._folded}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${this._folded?J`<path d="M6 14l6-6 6 6" />`:J`<path d="M6 12h12" />`}</svg>
        </button>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body" ?hidden=${this._folded}>
        ${this.renderAllOff([...d,...w,...b])}
        ${this.renderClean(t)}
        ${!t.area_id&&!e?m`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`:u.length?f:m`<p class="nf-rp-note">${this.t("panel_empty")}</p>`}
        ${_.length?this.section("panel_scenes",[m`<div class="nf-rp-scenes">
                  ${_.map(k=>m`<button
                      class="nf-btn"
                      ?disabled=${I(k)}
                      @click=${()=>this.call(D(k.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:k.entity_id})}
                    >
                      ${this.name(k.entity_id)}
                    </button>`)}
                </div>`]):f}
        ${d.length?this.section("panel_lights",[...d.map(k=>this.lightRow(k)),...t?[this.renderMoods(t,d)]:[]],m`${$.length<d.length?m`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(k=>!I(k)).map(k=>k.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:f}${$.length?m`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:$.map(k=>k.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:f}`):f}
        ${p.length?this.section("panel_covers",p.map(k=>this.coverRow(k)),p.length>1&&Ln(p,this.confirmEntities).length?m`<button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:Ln(p,this.confirmEntities)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:Ln(p,this.confirmEntities)})}>
                      ${this.t("panel_all_close")}
                    </button>`:f):f}
        ${h.length?this.section("panel_climate",h.map(k=>this.climateRow(k))):f}
        ${w.length?this.section("panel_media",w.map(k=>this.mediaRow(k))):f}
        ${b.length?this.section("panel_switches",b.map(k=>this.switchRow(k))):f}
        ${g.length?this.section("panel_sensors",g.map(k=>this.sensorRow(k))):f}
        ${pa(this.hass)&&ha(this.hass,this.floor,t)?this.announceSection(t):f}
        ${this.pluginSections(t,u)}
        ${l?m`<button class="nf-btn nf-rp-small nf-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:l})}
            </button>`:f}
      </div>
    </section>`}facts(e){let t=[],n=this.room;if(!n)return t;let o=(y,F)=>{let T=Y(this.hass,this.floor,n,y);if(T===null)return null;if(y==="temperature")return`${O(this.hass,ce(this.hass,T),1)} ${ne(this.hass)}`;let C=jn(this.hass,this.floor,n,y)[0],E=this.hass.states[C]?.attributes.unit_of_measurement??F;return`${O(this.hass,T,1)} ${E}`},i=e.find(y=>typeof y.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?t.push(s):i&&n.climate?.temperature!=="none"&&t.push(`${O(this.hass,i.attributes.current_temperature,1)} ${ne(this.hass)}`);let a=o("humidity","%");a&&t.push(a);let l=this.floor&&this.building?Ao(this.hass,this.building,this.floor,n):null;l!==null&&t.push(`\u26A1 ${it(this.hass,l)}`);let u=this.floor?this.floor.openings.filter(y=>y.room_id===n.id).flatMap(y=>[y.contact,y.contact2,y.tilt,y.tilt2]).map(y=>y&&y!=="none"?this.hass.states[y]:void 0).filter(y=>y?.state==="on").map(y=>Date.parse(String(y.last_changed??""))).filter(Number.isFinite):[];u.length&&t.push(`\u{1FA9F} ${this.t("open_since",{time:Ro(Date.now()-Math.min(...u))})}`);let c=K(this.hass,n).map(y=>this.hass.states[y]).filter(y=>!!y&&y.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(y.attributes.device_class)));if(c.length)if(c.some(y=>y.state==="on"))t.push(`\u{1F6B6} ${this.t("presence_now")}`);else{let y=Math.max(...c.map(F=>Date.parse(String(F.last_changed??""))||0));y>0&&t.push(`\u{1F6B6} ${this.t("presence_last",{time:Ro(Date.now()-y)})}`)}let d=this.building?ja(this.hass,this.building).filter(y=>y.roomId===n.id&&y.level<Ua):[];d.length&&t.push(`\u{1FAAB} ${this.t("battery_low_n",{n:d.length,names:d.map(y=>`${this.name(y.entity)} ${Math.round(y.level)} %`).join(", ")})}`);let p=(this.building?.settings.circuits??[]).filter(y=>y.rooms.includes(n.id)).map(y=>y.name),h=this.building?.settings.room_facts_off??[];p.length&&!h.includes("circuits")&&t.push(`\u{1F50C} ${p.join(", ")}`);let{latitude:w,longitude:b,time_zone:g}=this.hass.config??{};if(this.floor&&w!==void 0&&b!==void 0&&this.building&&!h.includes("sun")){let y=xt(this.building,this.floor,n,{latitude:w,longitude:b,zone:g});y.facing.length&&t.push(`\u2600 ${this.t("room_sun_hours",{h:O(this.hass,y.hours,1),facing:y.facing.join(", ")})}`)}let _=Y(this.hass,this.floor,n,"temperature"),S=Y(this.hass,this.floor,n,"humidity"),$=or(Y(this.hass,this.floor,n,"co2"),S,St(_,S));$&&!h.includes("air")&&t.push(`\u{1F4A8} ${this.t(`air_${$}`)}`);let k=ir(_,S,Y(this.hass,this.floor,n,"co2"),ot(new Date,this.hass.config?.latitude));return k!==null&&(_!==null||S!==null)&&!h.includes("comfort")&&t.push(`\u{1F60A} ${this.t("comfort_n",{n:k})}`),t}announceSection(e){let t=this.phrases?.length?this.phrases:[1,2,3,4,5].map(i=>this.t(`announce_phrase_${i}`)),n=i=>{let s=i.trim();s&&(clearTimeout(this.saidTimer),this.hass.callService("nextfloor","announce",{message:s,rooms:[e.id],on_screens:!1}).then(()=>this._said={text:this.t("announce_sent",{message:s}),failed:!1},a=>this._said={text:this.t("announce_failed",{error:a?.message??String(a)}),failed:!0}),this.saidTimer=setTimeout(()=>this._said=null,6e3))},o=i=>{i.preventDefault();let s=i.currentTarget.querySelector("input");n(s.value),s.value=""};return this.section("panel_announce",[m`<div class="nf-rp-scenes">${t.map(i=>m`<button class="nf-btn" @click=${()=>n(i)}>${i}</button>`)}</div>
        <form class="nf-rp-say" @submit=${o}>
          <input type="text" maxlength="500" placeholder=${this.t("announce_placeholder")} aria-label=${this.t("announce_placeholder")} />
          <button class="nf-btn nf-primary" type="submit">${this.t("announce_send")}</button>
        </form>
        ${this._said?m`<p class="nf-rp-note ${this._said.failed?"nf-rp-fail":""}" role="status">${this._said.text}</p>`:f}`])}pluginSections(e,t){return Qi({hass:this.hass,room:{id:e.id,name:e.name,area_id:e.area_id??null},entities:t}).map(o=>m`<div class="nf-rp-sec nf-rp-plugin" data-plugin=${o.key}>
        <div class="nf-rp-sec-head"><h3>${o.title}</h3></div>
        ${typeof o.content=="string"?m`<p class="nf-rp-note">${o.content}</p>`:o.content}
      </div>`)}section(e,t,n=f){return m`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",o=t.supported_color_modes??[],i=o.some(h=>h!=="onoff"),s=o.includes("color_temp"),a=o.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,u=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,d=e.entity_id,p=!!this.placedAs(d)?.simple;return m`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n?"nf-rp-on":""}">${$t("light")}</span>
      ${this.nameButton(d)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&i&&!p?m`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(h.target.value)})}
          /></label>`:f}
      ${n&&s&&!p?m`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${u}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??u)}
              @change=${h=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:f}
      ${n&&a&&!p?m`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Fh.map(h=>m`<button
                class="nf-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:h})}
              ></button>`)}
          </div>`:f}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,o=e.entity_id,i=I(e)&&!Kt(e);return m`<div class="nf-rp-row">
      <span class="nf-rp-icon">${$t("cover")}</span>
      ${this.nameButton(o)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${n&Th?m`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:f}
        <button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${n&zh&&typeof t.current_position=="number"?m`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:f}
      ${n&128&&typeof t.current_tilt_position=="number"?m`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:o,tilt_position:Number(s.target.value)})}
          /></label>`:n&48?m`<div class="nf-rp-buttons">
              ${n&16?m`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_open")}</button>`:f}
              ${n&32?m`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_close")}</button>`:f}
            </div>`:f}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],u=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(c/i)*i))});return m`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t.hvac_action==="heating"?"nf-rp-on":""}">${$t("climate")}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${o!==null?m`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${()=>u(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${O(this.hass,o,1)} ${ne(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${()=>u(o+i)}>+</button>
          </div>`:f}
      ${l.length>1?m`<div class="nf-rp-chips">
            ${l.map(c=>m`<button
                class="nf-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:f}
    </div>`}stateOf(e,t=ee(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=D(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,o=I(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return m`<div class="nf-rp-row">
      <span class="nf-rp-icon ${e.state==="playing"?"nf-rp-on":""}">${$t("media")}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?m`<p class="nf-rp-media nf-rp-wide">${i}</p>`:f}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${zo(dr.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${I(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${zo(e.state==="playing"?dr.pause:dr.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${zo(dr.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?m`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:f}
    </div>`}switchRow(e){let t=e.entity_id,n=D(t),o=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":Q(e),s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return m`<div class="nf-rp-row">
      <span class="nf-rp-icon ${i?"nf-rp-on":""}">${$t(n)}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}sensorRow(e){let t=D(e.entity_id),n=t==="binary"&&e.state==="on";return m`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n?"nf-rp-on":""}">${$t(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Se,Ve,te`
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
      .nf-rp-shade {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin: 4px 0;
        padding: 6px 8px;
        border-radius: 8px;
        font-size: 12px;
        background: color-mix(in srgb, var(--nf-warm) 16%, transparent);
      }
      .nf-rp-sun-year {
        border: none;
        background: none;
        color: var(--nf-muted);
        font: inherit;
        font-size: 12px;
        padding: 2px 0;
        cursor: pointer;
      }
      .nf-rp-sun-bars {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 3px;
        height: 54px;
        margin: 2px 0 6px;
      }
      .nf-rp-sun-bars span {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 2px;
      }
      .nf-rp-sun-bars i {
        display: block;
        width: 100%;
        min-height: 2px;
        border-radius: 3px 3px 0 0;
        background: var(--nf-warm);
      }
      .nf-rp-sun-bars b {
        font-size: 10px;
        font-weight: 500;
        color: var(--nf-muted);
      }
      .nf-rp-alloff {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        margin: 6px 0 2px;
        font-size: 13px;
        color: var(--nf-muted);
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
      .nf-rp-say {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }
      .nf-rp-say input {
        flex: 1;
        min-width: 0;
        font: inherit;
        font-size: 14px;
        color: var(--nf-text);
        background: var(--nf-fill);
        border: none;
        border-bottom: 1px solid var(--nf-line);
        border-radius: 10px 10px 4px 4px;
        padding: 8px 10px;
      }
      .nf-rp-fail {
        color: #ff6b7a;
      }
      .nf-rp-moods {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 6px;
      }
      .nf-rp-mood {
        display: inline-flex;
        gap: 2px;
        align-items: center;
      }
      .nf-rp-mood-to {
        width: 38px;
        font: inherit;
        background: var(--nf-bg2);
        color: var(--nf-text);
        border: 1px solid var(--nf-line);
        border-radius: 8px;
      }
      .nf-rp-mood input {
        width: 120px;
        font: inherit;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--nf-line);
        background: var(--nf-bg2);
        color: var(--nf-text);
      }
      .nf-rp-curve {
        position: relative;
        margin-top: 4px;
        width: 220px;
        max-width: 100%;
      }
      .nf-rp-curve svg {
        display: block;
        width: 100%;
        height: 30px;
      }
      .nf-rp-curve path {
        fill: none;
        stroke: var(--nf-warm, #ff9f43);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .nf-rp-curve span {
        font-size: 10.5px;
        color: var(--nf-muted);
      }
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
    `]};customElements.get("nf-room-panel")||customElements.define("nf-room-panel",To);function ol(r){if(!r)return"";let e=Math.min(.8,Math.max(0,r.dim??.35)),t=r.image&&/^(https:\/\/|\/local\/|\/api\/)[^"'()\\\s]+$/.test(r.image)?r.image:null,n=r.color&&/^#[0-9a-f]{6}$/i.test(r.color)?r.color:null;return t?`;background:linear-gradient(rgba(0,0,0,${e}),rgba(0,0,0,${e})),center / cover no-repeat url("${t}")${n?` ${n}`:""}`:n?`;background:${n}`:""}var Hh=[[/spotify/i,[30,215,96]],[/netflix/i,[229,9,20]],[/youtube/i,[255,0,51]],[/prime|amazon/i,[0,168,225]],[/disney/i,[17,60,207]],[/apple ?music|itunes/i,[250,45,72]],[/apple ?tv/i,[200,200,210]],[/plex/i,[229,160,13]],[/tidal/i,[0,255,255]],[/deezer/i,[162,56,255]],[/radio|tunein/i,[255,140,60]]],il=[34,211,238];function Fo(r){return r?Hh.find(([e])=>e.test(r))?.[1]??il:il}function Do(r){if(r.state==="playing"||r.state==="paused")return!0;let e=t=>typeof r.attributes[t]=="string"&&r.attributes[t]!=="";return r.state==="on"&&(e("media_title")||e("media_channel")||e("source")||e("app_name"))}var Po=r=>r.state==="playing"||r.state==="on"&&Do(r);function sl(r,e){let t=[],n=new Set;for(let o of e){if(!o.entity.startsWith("media_player.")||n.has(o.entity))continue;n.add(o.entity);let i=r.states[o.entity];if(!i)continue;let s=i.attributes,a=c=>typeof s[c]=="string"?s[c]:"",l=a("app_name")||a("source")||a("app_id")||null,u=typeof s.volume_level=="number"?s.volume_level:null;t.push({entity:o.entity,name:o.name,at:o.at,playing:Po(i),title:a("media_title")||a("media_channel")||l||"",artist:a("media_artist")||a("media_album_name")||a("media_series_title"),picture:a("entity_picture")||null,volume:u,color:Fo(l),app:l,group:Array.isArray(s.group_members)?s.group_members.filter(c=>typeof c=="string"&&c!==o.entity):[],rings:o.rings??1})}return t}function al(r){let e=new Map(r.filter(o=>o.playing).map(o=>[o.entity,o])),t=[],n=new Set;for(let o of e.values())for(let i of o.group){let s=e.get(i),a=[o.entity,i].sort().join("|");s&&!n.has(a)&&(n.add(a),t.push([o,s]))}return t}var Ih=3;function ll(r,e,t){let n=[];for(let o of e.floors)for(let i of o.furniture){if(!i.type.endsWith(":sprinkler"))continue;let s=t?.get(i.id)?.entity??null;!s||!Q(r.states[s])||n.push({id:i.id,at:{floorId:o.id,x:i.x,y:le(o,i)+i.h,z:i.z},reach:Math.min(15,Math.max(.5,i.spray??Ih))})}return n}var hr=r=>r&&r!=="none"?r:null,ul=r=>Math.min(1,Math.max(0,r));function cl(r,e){let t=new Map;for(let n of e.settings.roof?.windows??[]){let o=Ee(r,{cover:hr(n.cover),contact:hr(n.contact),tilt:hr(n.tilt)},"window"),i=hr(n.window),s=i?r.states[i]:void 0,a=o.open;if(s&&!I(s)){let l=s.attributes.current_position;a=typeof l=="number"?ul(l/100):s.state==="open"||s.state==="opening"?1:0}t.set(n.id,{open:a,tilt:o.tilt,cover:o.cover??0})}return t}function Ch(r,e){let t=o=>Math.hypot(o.x-e.x,o.z-e.z);return r.placements.filter(o=>o.entity_id.startsWith("media_player.")&&t(o)<Math.max(2,e.w)).sort((o,i)=>t(o)-t(i))[0]?.entity_id??null}var Ke=(r,e)=>typeof r[e]=="string"?r[e]:"";function dl(r,e,t){let n=[];for(let o of e.floors)for(let i of o.furniture){if(!qn(i.type))continue;let s=t?.get(i.id)?.entity??null,a=s?.startsWith("media_player.")?s:Ch(o,i),l=a?r.states[a]:void 0;if(!l||!Do(l))continue;let u=l.attributes,c=Ke(u,"app_name")||Ke(u,"source")||null;n.push({id:i.id,furnitureId:i.id,floorId:o.id,color:Fo(c),title:Ke(u,"media_title")||Ke(u,"media_channel")||c||"",subtitle:Ke(u,"media_artist")||Ke(u,"media_series_title")||Ke(u,"media_album_name"),app:c,picture:Ke(u,"entity_picture")||null,playing:Po(l),ambilight:i.ambilight??1})}return n}function hl(r){let e=r.states["sun.sun"]?.attributes;return typeof e?.elevation=="number"&&typeof e.azimuth=="number"?{elevation:e.elevation,azimuth:e.azimuth}:null}function pl(r,e){return(r===null?0:ul((r+4)/16))*(1-.45*e)}function Ge(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var pr=new Set(["contact_lost","unlocked_night","own"]);function Nh(r,e){let t=r.states[e.entity];if(!t||["unavailable","unknown"].includes(t.state))return!1;let n=(e.state??"on").trim(),o=/^([<>])\s*(-?\d+(?:[.,]\d+)?)$/.exec(n);if(o){let i=Number(t.state),s=Number(o[2].replace(",","."));return Number.isFinite(i)&&(o[1]==="<"?i<s:i>s)}return n.split(",").map(i=>i.trim().toLowerCase()).filter(Boolean).includes(String(t.state).toLowerCase())}var Oh=600*1e3,Lh=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Wh=new Map([["smoke","smoke"],["gas","gas"],["carbon_monoxide","co"],["moisture","water"]]),ml=(r,e)=>{if(e.startsWith("binary_sensor."))return Wh.get(String(r.states[e]?.attributes.device_class))};function Bh(r,e){let t=new Set,n=[];for(let o of r.floors)for(let i of o.openings){let s=e.get(i.id);for(let a of s?[s.contact,s.contact2,s.tilt,s.tilt2]:[])!a||t.has(a)||(t.add(a),n.push({floorId:o.id,roomId:i.room_id,entity:a}))}return n}function fl(r,e,t,n){let o=[];for(let a of e.floors)for(let l of a.rooms){let u=K(r,l).filter(c=>ml(r,c));u.length>0&&o.push({floorId:a.id,roomId:l.id,sensors:u})}let i=e.settings.rain_warning!==!1,s=e.settings.rain_sensor;return{rooms:o,alarms:Object.keys(r.states).filter(a=>a.startsWith("alarm_control_panel.")),weather:i?Ge(r,t??e.settings.weather_entity):null,rain:i&&s&&s!=="none"?s:null,rainInverted:!!e.settings.rain_sensor_inverted,outage:e.settings.outage_sensor&&e.settings.outage_sensor!=="none"?e.settings.outage_sensor:null,contacts:e.settings.contact_warning&&n?Bh(e,n):[],own:(e.settings.own_alerts??[]).filter(a=>a.entity),locks:e.settings.night_lock_warning?e.floors.flatMap(a=>a.openings.filter(l=>l.lock&&l.lock!=="none").map(l=>({entity:l.lock,roomId:l.room_id,floorId:a.id}))):[]}}function gl(r){let e=r.rooms.flatMap(t=>t.sensors).concat(r.alarms);for(let t of[r.weather,r.rain,r.outage])t&&e.push(t);for(let t of r.contacts??[])e.push(t.entity);for(let t of r.own??[])e.push(t.entity);for(let t of r.locks??[])e.push(t.entity);return e}function Vh(r,e){let t=[];for(let{floorId:n,roomId:o,sensors:i}of e.rooms)for(let s of i){let a=ml(r,s);a&&r.states[s]?.state==="on"&&t.push({kind:a,entity:s,roomId:o,floorId:n})}return t}var Kh=(r,e)=>{let t=Ee(r,e,"window");return Math.max(t.open,t.tilt,t.open2,t.tilt2)>=.5};function Gh(r,e){if(e.rain){let n=r.states[e.rain];if(!n||n.state==="unavailable"||n.state==="unknown")return!1;let o=Number(n.state),i=Number.isFinite(o)?o>0:n.state==="on"||/rain|regen|wet|nass/i.test(n.state);return e.rainInverted?!i:i}let t=e.weather?r.states[e.weather]?.state:void 0;return!!t&&Lh.has(t)}var Uh=/^(off_grid|off-grid|outage|grid_down|grid_lost|islanding|island|backup|no_grid|stromausfall|netzausfall|inselbetrieb)$/i;function jh(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return!1;if(e.startsWith("binary_sensor.")){let o=String(t.attributes.device_class??"");return o==="power"||o==="plug"?t.state==="off":t.state==="on"}let n=Number(t.state);return Number.isFinite(n)?t.attributes.unit_of_measurement==="V"&&n<50:Uh.test(t.state.trim())}function qh(r,e,t,n){if(!Gh(r,t))return[];let o=[];for(let i of e.floors)for(let s of i.openings){let a=n.get(s.id);s.type!=="window"||s.rain_warning===!1||!a||!Kh(r,a)||o.push({kind:"window_rain",entity:a.contact??a.tilt??a.contact2??s.id,roomId:s.room_id,floorId:i.id})}return o}var Zh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","vibration","tamper","sound","glass"]);function Yh(r,e){let t=r.states[e],n=t?.attributes.open_sensors;if(n&&typeof n=="object"){let a=Object.keys(n)[0];if(a)return a}let o=Date.parse(t?.last_changed??"");if(!Number.isFinite(o))return null;let i=null,s=12e4;for(let a of Object.values(r.states)){if(!a.entity_id.startsWith("binary_sensor.")||!Zh.has(String(a.attributes.device_class??""))||a.state!=="on")continue;let l=Date.parse(a.last_changed??""),u=o-l;Number.isFinite(l)&&u>=-5e3&&Math.abs(u)<s&&(s=Math.abs(u),i=a.entity_id)}return i}function Jh(r,e,t){for(let o of e.floors){let i=o.placements.find(a=>a.entity_id===t),s=i?o.rooms.find(a=>a.points.length>=3&&H([i.x,i.z],a.points)):void 0;if(s)return{roomId:s.id,floorId:o.id}}let n=We(r,t);for(let o of e.floors){let i=n?o.rooms.find(s=>s.area_id===n):void 0;if(i)return{roomId:i.id,floorId:o.id}}return null}function Qh(r,e,t){let n=[];for(let o of e.alarms){let i=r.states[o]?.state;if(i==="triggered"){let s=Yh(r,o),a=s?Jh(r,t,s):null;n.push({kind:"alarm",entity:o,roomId:a?.roomId??null,floorId:a?.floorId??null,...s?{cause:s}:{}})}i==="pending"&&n.push({kind:"alarm_pending",entity:o,roomId:null,floorId:null})}return n}function Xh(r,e,t){let n=r.states[e];if(n?.state!=="unavailable")return!1;let o=Date.parse(n.last_changed??"");return!Number.isFinite(o)||t-o>=Oh}function _l(r,e){return(e.contacts??[]).some(t=>r.states[t.entity]?.state==="unavailable")}function ep(r,e,t){return(e.contacts??[]).filter(n=>Xh(r,n.entity,t)).map(n=>({kind:"contact_lost",entity:n.entity,roomId:n.roomId,floorId:n.floorId}))}function Ho(r,e,t,n,o=Date.now()){let i=t.outage&&jh(r,t.outage)?[{kind:"power_outage",entity:t.outage,roomId:null,floorId:null}]:[],s=(t.own??[]).filter(c=>Nh(r,c)).map(c=>{let d=c.room_id?e.floors.find(p=>p.rooms.some(h=>h.id===c.room_id)):void 0;return{kind:"own",entity:c.entity,roomId:d?c.room_id:null,floorId:d?.id??null,text:c.text,...c.color?{color:c.color}:{},...c.tap?{tap:c.tap}:{}}}),a=new Date(o).getHours(),u=a>=22||a<6?(t.locks??[]).filter(c=>r.states[c.entity]?.state==="unlocked").map(c=>({kind:"unlocked_night",entity:c.entity,roomId:c.roomId,floorId:c.floorId})):[];return[...Vh(r,t),...qh(r,e,t,n),...Qh(r,t,e),...i,...ep(r,t,o),...u,...s]}var tp={smoke:[1,.2,.25],gas:[1,.2,.25],co:[1,.2,.25],alarm:[1,.2,.25],water:[.2,.6,1],window_rain:[.35,.72,1],alarm_pending:[1,.62,.2],power_outage:[1,.62,.2],contact_lost:[1,.62,.2],unlocked_night:[1,.62,.2],own:[1,.62,.2]},bl=r=>tp[r];function Io(r,e,t){let n=r?W(r,t.entity):t.entity,o=t.kind==="own"?t.text||n:t.cause?R(r,"alert_alarm_by",{name:n,cause:r?W(r,t.cause):t.cause}):R(r,`alert_${t.kind}`,{name:n}),i=t.roomId===null?void 0:e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId);return i?`${i.name} \xB7 ${o}`:o}var np=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]),mr=r=>r&&r!=="none"?r:null,wl=r=>r.trim().toLowerCase();function rp(r,e){let t=wl(e);if(!t||!r.types)return null;let n=r.types.map(s=>({word:wl(s.state),vehicle:s.vehicle})),o=n.find(s=>s.word===t),i=n.find(s=>s.word!==""&&t.includes(s.word));return(o??i)?.vehicle??null}function Co(r,e){if(e.type!=="parking")return null;let t=mr(e.entity);if(t!==null){let i=r.states[t]?.state;if(i===void 0||!np.has(i.toLowerCase()))return null}let n=e.vehicle??null,o=mr(e.type_entity);return o!==null&&e.types&&e.types.length>0&&(n=rp(e,r.states[o]?.state??"")??n),n!==null&&q(n)?n:null}function No(r,e){let t=new Map;for(let n of e.floors.flatMap(o=>o.furniture)){let o=Co(r,n);o&&t.set(n.id,o)}return t}function vl(r){let e=[];for(let t of r.flatMap(n=>n.furniture))t.type==="parking"&&e.push(mr(t.entity),mr(t.type_entity));return e.filter(t=>t!==null)}function yl(r,e){let t=q(e);if(!t)return null;let n=r.scale??1,[o,i,s]=t.size.map(a=>a*n);return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:o,d:i,h:s,variant:r.variant??null,entity:null,power:null}}var op=r=>!!r&&r!=="none",Oo=r=>r.floors.flatMap(e=>e.rooms),ip=r=>r.floors.flatMap(e=>e.furniture);function sp(r){return[...r.values()].flatMap(e=>[e.cover,e.cover2,e.contact,e.tilt,e.contact2,e.tilt2,e.position,e.tiltAngle])}function ap(r){let{hass:e,building:t,furnitureLinks:n}=r,o=ip(t);return[...[...n.values()].flatMap(i=>[i.entity,i.power]),...o.flatMap(i=>[i.state_entity,i.state_entity2,i.color_entity,...i.gang_entities??[],...i.extra_lights??[],i.cover_entity,i.care_entity,i.room_sensor,i.show_when?.entity,i.picture&&/^[a-z_]+\.[a-z0-9_]+$/.test(i.picture)?i.picture:null]),...o.filter(i=>i.type==="washer"||i.type==="dryer"||i.type==="dishwasher").flatMap(i=>Zt(e,n.get(i.id)?.entity??n.get(i.id)?.power).filter(s=>s.startsWith("sensor."))),...o.flatMap(i=>[i.door_left,i.door_right,i.soc,i.status,i.charge,i.export,i.temp_entity,i.temp_entity2]),...o.filter(i=>i.type==="robot_vacuum").map(i=>Zn(e,n.get(i.id)?.entity??null,i.room_sensor)),...o.flatMap(i=>(i.pictures??[]).flatMap(s=>[s.entity,...s.image.startsWith("camera:")?[s.image.slice(7)]:[]]))]}function lp(r){let e=r.settings.roof;return[...(e?.windows??[]).flatMap(t=>[t.cover,t.contact,t.tilt]),...(e?.solar??[]).map(t=>t.entity),...(e?.strings??[]).map(t=>t.entity)].filter(op)}function kl(r){let{hass:e,building:t}=r,n=ra(t),o=t.energy,i=Oo(t).flatMap(l=>K(e,l).filter(u=>D(u)==="light")),s=r.needsRoomSensors?Oo(t).flatMap(l=>K(e,l).filter(u=>u.startsWith("sensor.")||u.startsWith("climate."))):[],a=[...n,...sp(r.openingLinks),...n.map(l=>De(e,l)),...n.flatMap(l=>e.states[l]?qi({hass:e,entityId:l,state:e.states[l]}):[]),...ap(r),...lp(t),o.grid,o.solar,o.battery,o.battery_soc,o.consumption,o.tariff,o.gas,o.water,...t.presence.flatMap(l=>[l.person,l.sensor]),...i,...Oo(t).map(l=>l.floor_heating),...t.floors.flatMap(l=>(l.outdoor??[]).flatMap(u=>[u.temp_entity,u.pump_entity])),...s,...r.alertSources?gl(r.alertSources):[],...vl(t.floors),...Os(e,t.floors),Ge(e,r.weatherEntityId??t.settings.weather_entity),"sun.sun"];return[...new Set(a.filter(l=>!!l))]}function xl(r,e){return e==="area"||e==="plan"||e==="off"?e:r==="plan"||r==="off"?r:"area"}function Sl(r,e,t,n,o,i){if(i==="off")return[];let s=new Set(i==="area"?K(r,t).filter(a=>D(a)==="light"):[]);for(let a of e.placements)D(a.entity_id)==="light"&&H([a.x,a.z],t.points)&&s.add(a.entity_id);for(let a of e.furniture){let l=n.get(a.id)?.entity;l&&Nn(a.type)&&H([a.x,a.z],t.points)&&s.add(l)}return[...s].filter(a=>!o.has(a))}function Ml(r,e){let t=r.floors.flatMap(s=>s.furniture.filter(a=>a.tap?.action).map(a=>({floor:s,item:a}))),n=new Set(t.map(({item:s})=>s.id)),o=new Map(e.filter(s=>s.furnitureId&&n.has(s.furnitureId)).map(s=>[s.id,s.furnitureId])),i=new Set(o.values());return{pins:o,bare:t.filter(({item:s})=>!i.has(s.id))}}var $l="https://tile.openstreetmap.org/{z}/{x}/{y}.png",up="\xA9 OpenStreetMap contributors";var Vb=Math.PI/180;var cp=r=>r.url&&r.url.startsWith("https://")?r.url:$l;var Al=r=>!!r&&r.on===!0&&Number.isFinite(r.lat)&&Number.isFinite(r.lon);function Lo(r){let e=cp(r);if(e===$l)return{text:up,href:"https://www.openstreetmap.org/copyright"};try{let t=new URL(e.replace(/\{[a-z]\}/g,"a")).host;return{text:`Map: ${t}`,href:`https://${t}/`}}catch{return{text:"Map",href:"#"}}}var dp=["neon","blueprint","day","own"],hp=["dark","light","lines","background"],Rl={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22"};function Wo(r){let e=/^#?([0-9a-f]{6})$/i.exec(r?.trim()??"");if(!e)return null;let t=Number.parseInt(e[1],16);return[t>>16&255,t>>8&255,t&255]}function zl(...r){let e={...Rl};for(let t of r)for(let n of hp)Wo(t?.[n])&&(e[n]=t[n]);return e}function Bo(r,e){if(r!=="own")return El[r]??El.neon;let t=Wo(e.background)??Wo(Rl.background),n=o=>t.map(i=>Math.round(i*o));return{night:[n(.9),n(.62)],day:[t,n(.72)]}}var fr=["auto",...dp];function gr(r,e){return r!=="auto"?r??"neon":e==="above_horizon"?"day":"neon"}var El={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};function he(r,e){if(!Qr(e))return R(r,`furn_${e}`);let t=q(e);return t?pp(t,e,r?.language??navigator.language):R(r,"pack_missing_item")}function pp(r,e,t){return r.name[t.split("-")[0]]??Qs(t,e)??ss(r,t)}function Tl(r,e){let t=new Map;for(let n of e.floors)for(let o of n.outdoor??[])for(let i of o.gates??[]){let s=i.entity?r.states[i.entity]?.state:void 0,a=i.contact?r.states[i.contact]?.state:void 0;if(s===void 0&&a===void 0)continue;let l=s==="open"||s==="opening"||s==="on"||s==="unlocked"||s==="unlocking";t.set(i.id,l||a==="on")}return t}var mp={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.4},cloudy:{cloud:.85},fog:{fog:.9,cloud:.5},rainy:{rain:.5,cloud:.8},pouring:{rain:1,cloud:1,wind:.3},"lightning-rainy":{rain:.75,cloud:1,lightning:!0,wind:.35},lightning:{cloud:.85,lightning:!0},hail:{hail:.8,rain:.3,cloud:1},snowy:{snow:.7,cloud:.85},"snowy-rainy":{snow:.45,rain:.3,cloud:.95},windy:{wind:.7,cloud:.25},"windy-variant":{wind:.7,cloud:.65},exceptional:{cloud:.6,wind:.5}},At=r=>typeof r=="number"&&Number.isFinite(r)?r:typeof r=="string"&&r.trim()!==""&&Number.isFinite(Number(r))?Number(r):null,_r=r=>Math.min(1,Math.max(0,r));function Fl(r,e){switch(e){case"m/s":return r*3.6;case"mph":return r*1.609;case"kn":return r*1.852;case"ft/s":return r*1.097;default:return r}}function fp(r){let e=At(r);if(e!==null)return(e%360+360)%360;if(typeof r!="string")return null;let n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].indexOf(r.trim().toUpperCase().replace("O","E"));return n<0?null:n*22.5}function Dl(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=mp[t.state];if(!n)return null;let o=t.attributes,i={rain:n.rain??0,snow:n.snow??0,hail:n.hail??0,fog:n.fog??0,cloud:n.cloud??0,wind:n.wind??0,windFrom:fp(o.wind_bearing),lightning:n.lightning??!1},s=At(o.cloud_coverage);s!==null&&(i.cloud=Math.max(_r(s/100),i.rain||i.snow?.6:0));let a=At(o.wind_speed);a!==null&&(i.wind=Math.max(i.wind,_r(Fl(a,o.wind_speed_unit)/70)));let l=At(o.wind_gust_speed);l!==null&&(i.wind=Math.max(i.wind,_r(Fl(l,o.wind_speed_unit)/100)));let u=At(o.precipitation);if(u!==null&&u>0&&(i.rain>0||i.snow>0)){let h=_r(.25+u/8);i.rain>0&&(i.rain=Math.max(i.rain*.6,h)),i.snow>0&&(i.snow=Math.max(i.snow*.6,h))}let c=At(o.temperature),d=o.temperature_unit??r.config?.unit_system?.temperature,p=c===null?null:d==="\xB0F"?(c-32)*5/9:c;return p!==null&&p<=.5&&i.rain>0&&i.snow===0&&(i.snow=i.rain*.6,i.rain*=.4),i}function Pl(r,e){let t=e==null||!Number.isFinite(e)?1:Math.min(1,Math.max(.1,e));return t===1?r:{...r,rain:r.rain*t,hail:r.hail*t,snow:r.snow*t}}function Hl(r,e){let t=new Set(e??["rain","snow","clouds","lightning","sky"]);return{...r,rain:t.has("rain")?r.rain:0,hail:t.has("rain")?r.hail:0,snow:t.has("snow")?r.snow:0,fog:t.has("fog")?r.fog:0,cloud:t.has("clouds")?r.cloud:0,lightning:t.has("lightning")&&r.lightning}}var br=Math.PI/180,st=r=>Math.tan(Math.min(80,Math.max(0,r))*br);function Il(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function gp(r){if(!r.rotation)return null;let e=r.rotation*br;return{cx:(r.x0+r.x1)/2,cz:(r.z0+r.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function _p(r,e){let t=gp(r);if(!t)return e;let[n,o]=[e[0]-t.cx,e[1]-t.cz];return[t.cx+n*t.c-o*t.sn,t.cz+n*t.sn+o*t.c]}function Ue(r){let{x0:e,x1:t,z0:n,z1:o}=Il(r),i=s=>_p(r,s);return r.axis==="x"?{u0:e,u1:t,w:o-n,at:(s,a)=>i([s,r.flip?o-a:n+a])}:{u0:n,u1:o,w:t-e,at:(s,a)=>i([r.flip?t-a:e+a,s])}}var sn=Math.tan(30*br);function wr(r,e,t,n,o){let i=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,o>1e-6?2.4/o:r*.3),a=e+i*n,l=t+s*o,u=Math.min(r-s,Math.max(i,(l-a+sn*(r-s+i))/(2*sn))),c=a+(u-i)*sn;return{vla:i,vlb:s,yla:a,ylb:l,vr:u,rh:c,y:p=>p<=i?e+p*n:p<=u?a+(p-i)*sn:p<=r-s?l+(r-s-p)*sn:t+(r-p)*o}}function Et(r){let e=Ue(r).w,[t,n]=[r.eave_a,r.eave_b],[o,i]=[st(r.pitch_a),st(r.pitch_b)];switch(r.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*o,y:s=>t+s*o};case"mansard":{let s=wr(e,t,n,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(o+i))):e/2;return{vr:s,rh:t+s*o,y:a=>a<=s?t+a*o:n+(e-a)*i}}}}function Vo(r,e,t){let n=Ue(e),o=r.floors.flatMap(d=>d.rooms.filter(p=>p.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(p=>o.some(h=>H(p,h.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d),u=d=>d?0:t,c=(d,p)=>{let h=e.overhang_sides?.[d];return typeof h=="number"&&Number.isFinite(h)?Math.min(2,Math.max(0,h)):p};return{a:c("a",u(i(a.map(d=>n.at(d,-s))))),b:c("b",u(i(a.map(d=>n.at(d,n.w+s))))),u0:c("u0",u(i(l.map(d=>n.at(n.u0-s,d))))),u1:c("u1",u(i(l.map(d=>n.at(n.u1+s,d)))))}}var be=Math.PI/180,Pe=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]];var Rt=r=>Math.hypot(r[0],r[1],r[2]),at=r=>{let e=Rt(r)||1;return[r[0]/e,r[1]/e,r[2]/e]},Ll=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]];var Bl=.25;function Vl(r,e,t,n,o,i,s){let a=o-t>=i-n,l=a?o-t:i-n;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-n:o-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Kl(r,e){let t=at(Ll(r,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var Gl=r=>{let e=at([-r[0],0,-r[2]]);return[e[0],e[2]]};function He(r,e,t,n,o,i,s,a){let l=at(Pe(o,n)),u=at(Pe(i,n));return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:u,n:Kl(l,u),lu:Rt(Pe(o,n)),ls:Rt(Pe(i,n)),pitch:s,span:a,facing:Gl(u)}}function Wl(r,e,t,n,o,i){let s=Rt(Pe(o,n));if(s<.3)return null;let a=at(Pe(o,n)),l=Pe(i,n),u=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*u,l[1]-a[1]*u,l[2]-a[2]*u],d=Rt(c);if(d<.3)return null;let p=at(c),h=w=>{let b=Math.min(1,Math.max(0,w/d));return[u*b,s-(s-u)*b]};return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:Kl(a,p),lu:s,ls:d,pitch:Math.atan2(p[1],Math.hypot(p[0],p[2]))/be,span:h,facing:Gl(p)}}function yp(r,e){let t=Ue(r),n=Et(r),o=(S,$,k)=>{let[y,F]=t.at(S,$);return[y,k,F]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=l-a,c=n.y(-i),d=n.y(t.w+s);if(r.shape==="flat"||r.shape==="parapet"){let[S,$]=[t.at(a,-i),t.at(l,t.w+s)];return[Vl(r.id,r.id,Math.min(S[0],$[0]),Math.min(S[1],$[1]),Math.max(S[0],$[0]),Math.max(S[1],$[1]),r.eave_a+Bl)]}if(r.shape==="pent")return[He(`${r.id}:a`,r.id,"a",o(a,-i,c),o(l,-i,c),o(a,t.w+s,d),r.pitch_a,()=>[0,u])];if(r.shape==="mansard")return kp(r,t,a,l,i,s);let p=r.shape==="hip"||r.shape==="pyramid",h=(t.u1-t.u0)/2,w=r.shape==="pyramid"?h:p?Math.min(h,Math.min(n.vr,t.w-n.vr)||t.w/2):0,b=p?t.u0+w-a:0,g=p?l-(t.u1-w):0,_=[];if(n.vr>.3){let S=Math.hypot(n.vr+i,n.rh-c);_.push(He(`${r.id}:a`,r.id,"a",o(a,-i,c),o(l,-i,c),o(a,n.vr,n.rh),r.pitch_a,$=>[b*($/S),u-g*($/S)]))}if(t.w-n.vr>.3){let S=Math.hypot(t.w+s-n.vr,n.rh-d);_.push(He(`${r.id}:b`,r.id,"b",o(l,t.w+s,d),o(a,t.w+s,d),o(l,n.vr,n.rh),r.pitch_b,$=>[g*($/S),u-b*($/S)]))}if(p){let S=Wl(`${r.id}:c`,r.id,"c",o(a,t.w+s,d),o(a,-i,c),o(t.u0+w,n.vr,n.rh)),$=Wl(`${r.id}:d`,r.id,"d",o(l,-i,c),o(l,t.w+s,d),o(t.u1-w,n.vr,n.rh));_.push(...[S,$].filter(k=>k!==null))}return _}function kp(r,e,t,n,o,i){let s=wr(e.w,r.eave_a,r.eave_b,st(r.pitch_a),st(r.pitch_b)),a=(w,b)=>{let[g,_]=e.at(w,b);return[g,s.y(b),_]},l=n-t,u=()=>[0,l],c=(w,b)=>Math.atan2(w,b)/be,d=[],[p,h]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&d.push(He(`${r.id}:a`,r.id,"a",a(t,-o),a(n,-o),a(t,s.vla),r.pitch_a,u)),s.vr-s.vla>.3&&d.push(He(`${r.id}:au`,r.id,"a",a(t,s.vla),a(n,s.vla),a(t,s.vr),c(s.rh-s.yla,s.vr-s.vla),u)),s.vlb+i>.3&&d.push(He(`${r.id}:b`,r.id,"b",a(n,p),a(t,p),a(n,h),r.pitch_b,u)),h-s.vr>.3&&d.push(He(`${r.id}:bu`,r.id,"b",a(n,h),a(t,h),a(n,s.vr),c(s.rh-s.ylb,h-s.vr),u)),d}function vr(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function yr(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap($=>yp($,Vo(r,$,$.overhang??e.overhang)));let t=vr(r);if(!t)return[];let n=t.rooms.flatMap($=>$.points.map(k=>k[0])),o=t.rooms.flatMap($=>$.points.map(k=>k[1])),i=r.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...n)-i,Math.max(...n)+i],[l,u]=[Math.min(...o)-i,Math.max(...o)+i],c=t.elevation+t.height;if(e.type==="flat")return[Vl("main",null,s,l,a,u,c+Bl)];let d=a-s>=u-l,p=e.ridge==="short"?!d:d,h=(p?u-l:a-s)/2,w=h*Math.tan(e.pitch*be),b=($,k,y)=>p?[$,c+y,(l+u)/2+k]:[(s+a)/2+k,c+y,$],[g,_]=p?[s,a]:[l,u],S=()=>[0,_-g];return[He("main:a",null,"a",b(g,-h,0),b(_,-h,0),b(g,0,w),e.pitch,S),He("main:b",null,"b",b(g,h,0),b(_,h,0),b(g,0,w),e.pitch,S)]}function an(r,e){let t=[];for(let n of r.floors.filter(o=>!e||o.id===e)){let{walls:o}=kt(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[u,c]=[a/l,-s/l],d=Math.min(n.height,i.height??n.height,i.heightEnd??1/0),p=(h,w,b,g)=>t.push({key:h,section:null,side:"top",flat:!1,o:w,eu:b,es:[0,1,0],n:g,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});p(`wall:${n.id}:${i.id}`,[i.a[0]+u*i.right,n.elevation,i.a[1]+c*i.right],[s/l,0,a/l],[u,0,c]),i.free&&p(`wall:${n.id}:${i.id}:back`,[i.b[0]-u*i.left,n.elevation,i.b[1]-c*i.left],[-s/l,0,-a/l],[-u,0,-c])}}return t}var zt="ground";function ln(r){let e=r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function Ko(r,e){let t=(e.rotation??0)*be,n=[Math.cos(t),0,Math.sin(t)],o=[-Math.sin(t),0,Math.cos(t)],i=ln(r),s=n[0]*e.u+o[0]*e.v,a=n[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Bt(i,s,a)):e.base??0;return{key:zt,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function Go(r,e,t=yr(r)){return e.face===zt?Ko(r,e):e.face.startsWith("wall:")?an(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}var Uo=1.13,jo=1.72,Tt=.025,we=.07;function un(r){let e=r.module_w||Uo,t=r.module_h||jo;return r.portrait===!1?[t,e]:[e,t]}function qo(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Zo(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*be:r.wall?Math.min(90,Math.max(0,e.tilt??0))*be:Math.min(45,Math.max(0,e.tilt??0))*be}function kr(r,e){let[,t]=un(e),n=Zo(r,e);return r.wall?t*Math.cos(n)+Tt:!r.flat&&n<.001?t+Tt:r.flat&&e.rack==="ew"?t*Math.cos(n)+.08:t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n))}function Yo(r,e){let[t,n]=un(e),o=qo(e),i=Math.max(1,...o);return[i*t+(i-1)*Tt,(o.length-1)*kr(r,e)+n*Math.cos(Zo(r,e))]}var xp=r=>r.flat&&!r.unbounded&&!r.wall;function Sp(r,e){if(!xp(r)||!e.rotation)return null;let t=e.rotation*be,[n,o]=Yo(r,e);return{cos:Math.cos(t),sin:Math.sin(t),u:e.u+n/2,s:e.v+o/2}}function cn(r,e,t=!1){let[n,o]=un(e),i=Zo(r,e),s=o*Math.cos(i),a=kr(r,e),l=qo(e),u=Math.max(1,...l),c=new Set(e.skip??[]),d=Sp(r,e),p=(g,_)=>d?[d.u+(g-d.u)*d.cos-(_-d.s)*d.sin,d.s+(g-d.u)*d.sin+(_-d.s)*d.cos]:[g,_],h=(g,_,S)=>{let[$,k]=p(g,_);return[0,1,2].map(y=>r.o[y]+r.eu[y]*$+r.es[y]*k+r.n[y]*S)},w=(g,_)=>{let[S,$]=p(g,_);if(r.unbounded)return!0;if($<-1e-6||$>r.ls+1e-6)return!1;let[k,y]=r.span($);return S>=k-1e-6&&S<=y+1e-6},b=[];return l.forEach((g,_)=>{let S=e.align==="right"?u-g:e.align==="center"?(u-g)/2:0;for(let $=0;$<g;$++){let k=`${_}:${$}`,y=c.has(k);if(y&&!t)continue;let F=e.u+($+S)*(n+Tt),T=F+n,C=e.v+_*a,E=C+(r.flat||r.wall||i>.001?s:o);if([[F,C],[T,C],[T,E],[F,E]].every(([A,P])=>w(A,P)))if(r.wall&&i>.001){let A=we+o*Math.sin(i),[P,N]=e.flip?[A,we]:[we,A],V=[h(F,C,P),h(T,C,P),h(T,E,N),h(F,E,N)],G=e.flip?C:E;b.push({corners:V,posts:[F+.05,T-.05].map(U=>[h(U,G,0),h(U,G,A)]),cell:k,skipped:y})}else if(!r.flat&&i>.001){let A=we+o*Math.sin(i),P=[h(F,C,we),h(T,C,we),h(T,E,A),h(F,E,A)];b.push({corners:P,posts:[F+.05,T-.05].map(N=>[h(N,E,0),h(N,E,A)]),cell:k,skipped:y})}else if(!r.flat)b.push({corners:[h(F,C,we),h(T,C,we),h(T,E,we),h(F,E,we)],posts:[],cell:k,skipped:y});else{let P=.15+o*Math.sin(i),N=e.rack==="ew"&&_%2===1?!e.flip:!!e.flip,[V,G]=N?[E,C]:[C,E],U=[h(F,V,.15),h(T,V,.15),h(T,G,P),h(F,G,P)],X=[F+.05,T-.05].flatMap(v=>[[h(v,V,0),h(v,V,.15)],[h(v,G,0),h(v,G,P)]]);b.push({corners:U,posts:X,cell:k,skipped:y})}}}),b}var ve={solar:[255,196,46],battery:[74,222,128],import:[248,96,120],export:[56,220,245],house:[150,170,255],wallbox:[80,175,255]},Ie=15;function Ce(r,e){let t=[];for(let n of r.floors)for(let o of n.furniture)o.type===e&&t.push({id:o.id,floorId:n.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return t}function Tp(r){if(!r?.rooms.length)return null;let e=0,t=0,n=0;for(let o of r.rooms)for(let[i,s]of o.points)e+=i,t+=s,n++;return n?{floorId:r.id,x:e/n,z:t/n,y:1}:null}function dn(r){let e=Qt(r);return Ce(r,"meter").find(t=>!e.has(t.id))??Ce(r,"inverter")[0]??Tp(ln(r))}function Fp(r,e){let t=Ce(r,"grid_point")[0];if(t)return t;let n=r.floors.find(a=>a.id===e.floorId);if(!n?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of n.rooms)for(let[l,u]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,u);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}var Jo=r=>Math.max(1,r.rows*r.cols-(r.skip?.length??0));function Dp(r,e,t){let n=e.settings.roof.solar??[],o=new Map,i=0,s=[];for(let u of n){let c=u.entity&&u.entity!=="none"?j(r.states[u.entity]):null;c!==null?(o.set(u.id,Math.max(0,c)),i+=Math.max(0,c)):s.push(u)}let a=Math.max(0,(t??0)-i),l=s.reduce((u,c)=>u+Jo(c),0);for(let u of s)o.set(u.id,l?a*Jo(u)/l:0);return o}function Pp(r,e){if(e.face===zt)return ln(r)?.id??null;let t=/^wall:([^:]+):/.exec(e.face);return t?t[1]:vr(r)?.id??null}function Ul(r,e,t=Xt(r,e),n){let o=n?Fe(e,n):Fe(e),i=en(r,e,t,o),s=[],a=[],l=dn(e),u=i.consumption??0,c=i.grid===null||u<=0?null:Math.max(0,Math.min(1,1-Math.max(0,i.grid)/u));if(!l)return{arcs:s,sparks:a,summary:i,autarky:c};let d=new Map(e.floors.flatMap(A=>A.furniture).flatMap(A=>nr(e,A)?[[A.id,nr(e,A)]]:[])),p=Ce(e,"inverter").find(A=>!d.has(A.id))??l,h=new Map(Ce(e,"inverter").map(A=>[A.id,A])),w=new Map((e.settings.roof.strings??[]).map(A=>[A.id,A.inverter??null])),b=[...yr(e),...an(e)],g=Dp(r,e,i.solar);for(let A of e.settings.roof.solar??[]){let P=Go(e,A,b);if(!P)continue;let N=cn(P,A);if(!N.length)continue;let V=g.get(A.id)??0,G=Jo(A)*(A.wp??400),U=V>Ie?Math.pow(Math.min(1,V/G),.6):0,X=Pp(e,A);if(a.push({floorId:X,quads:N.map(je=>je.corners),level:U}),V<=Ie)continue;let v=0,x=0,B=0;for(let je of N)for(let lt of je.corners)v+=lt[0],x+=lt[1],B+=lt[2];let z=N.length*4,L=e.floors.find(je=>je.id===X)?.elevation??0,de=e.energy.advanced?h.get(w.get(A.string??"")??""):void 0;s.push({key:`solar:${A.id}`,from:{floorId:X,x:v/z,y:x/z-L+.1,z:B/z},to:de??p,power:V,color:ve.solar})}let _=Ce(e,"home_battery").find(A=>!d.has(A.id)),S=i.battery===null?null:i.battery-(i.subMeters??[]).reduce((A,P)=>A+P.battery,0);if(_&&S!==null&&Math.abs(S)>Ie){let A=S>0;s.push({key:"battery",from:A?_:l,to:A?l:_,power:Math.abs(S),color:ve.battery})}let $=(i.solar??0)-(i.subMeters??[]).reduce((A,P)=>A+P.solar,0);p!==l&&$>Ie&&s.push({key:"inverter",from:p,to:l,power:$,color:ve.solar});let k=Fp(e,l);if(k&&i.grid!==null&&Math.abs(i.grid)>Ie){let A=i.grid>0;s.push({key:"grid",from:A?k:l,to:A?l:k,power:Math.abs(i.grid),color:A?ve.import:ve.export})}let y=new Map(Ce(e,"meter").map(A=>[A.id,A])),F=n??(A=>A.power&&A.power!=="none"?A.power:null);for(let A of e.floors)for(let P of A.furniture){let N=y.get(d.get(P.id)??""),V=Ce(e,P.type).find(U=>U.id===P.id);if(!N||!V)continue;let G=F(P);if(P.type==="inverter"){let U=Math.max(0,(G?j(r.states[G]):null)??0);U>Ie&&s.push({key:`inverter:${P.id}`,from:V,to:N,power:U,color:ve.solar})}else if(P.type==="home_battery"){let U=P.charge&&P.charge!=="none"?P.charge:null,X=rr(r,{power:G,charge:U},e.energy.battery_invert)??0;Math.abs(X)>Ie&&s.push({key:`battery:${P.id}`,from:X>0?V:N,to:X>0?N:V,power:Math.abs(X),color:ve.battery})}}let T=new Map,C=new Set;for(let A of o.subMeters??[]){let P=y.get(A.id),N=y.get(A.parent);A.power&&C.add(A.power);for(let G of A.floors)P&&!T.has(G)&&T.set(G,P);let V=i.subMeters?.find(G=>G.id===A.id)?.power??null;!P||!N||V===null||Math.abs(V)<=Ie||s.push({key:`meter:${A.id}`,from:V>0?N:P,to:V>0?P:N,power:Math.abs(V),color:V>0?ve.house:ve.solar})}let E=new Set(Ce(e,"wallbox").map(A=>`${A.floorId}:${A.x.toFixed(1)}:${A.z.toFixed(1)}`));for(let A of t){if(A.power<=Ie||C.has(A.powerEntity))continue;let P=A.wallbox||E.has(`${A.floorId}:${A.x.toFixed(1)}:${A.z.toFixed(1)}`);s.push({key:`use:${A.id}`,from:T.get(A.floorId)??l,to:{floorId:A.floorId,x:A.x,z:A.z,y:.9},power:A.power,color:P?ve.wallbox:ve.house})}return{arcs:s.map(A=>Cp(e,A)),sparks:a,summary:i,autarky:c}}var Hp=.25;var Ip=(r,e)=>r.energy.routes?.find(t=>t.key===e&&t.points.length>0);function Cp(r,e){let t=Ip(r,e.key);if(!t)return e;let n=t.points.map(l=>({floorId:l.floor_id,x:l.x,z:l.z,y:Hp})),o=l=>r.floors.find(u=>u.id===l)?.elevation??0,i=(l,u)=>Math.hypot(l.x-u.x,l.z-u.z)+Math.abs(o(l.floorId)+l.y-o(u.floorId)-u.y),[s,a]=[n[0],n[n.length-1]];return i(e.from,a)+i(e.to,s)<i(e.from,s)+i(e.to,a)&&n.reverse(),{...e,via:n,cable:!!t.cable}}var Np=r=>`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`,jl=r=>typeof r=="string"?{dateTime:r}:r??{},ql=r=>{let e=new Date(r);return e.setHours(0,0,0,0),e.getTime()},Zl=(r,e)=>Math.max(0,Math.round((ql(r)-ql(e))/864e5));function Op(r,e,t){return r.map(n=>{let o=jl(n.start),i=jl(n.end),s=(n.summary??"").trim();if(!s)return null;if(o.dateTime){let u=new Date(o.dateTime),c=i.dateTime?new Date(i.dateTime).getTime():u.getTime();return{time:Np(u),title:s,source:e,at:u.getHours()*60+u.getMinutes(),kind:"event",past:c<t,day:Zl(u.getTime(),t)}}let a=o.date?/^(\d{4})-(\d{2})-(\d{2})$/.exec(o.date):null,l=a?Zl(new Date(Number(a[1]),Number(a[2])-1,Number(a[3])).getTime(),t):0;return{time:"",title:s,source:e,at:-1,kind:"event",day:l}}).filter(n=>!!n)}function Yl(r,e,t,n){let o=[],i=new Set;for(let s of e.floors)for(let a of s.furniture){let l=a.care_entity;if(!l||i.has(l)||Fn(a.type)!=="bin")continue;i.add(l);let u=Yn(r.states[l],t);if(u===null||u>1)continue;let c=a.name||String(r.states[l]?.attributes.friendly_name??l);o.push({time:"",title:c,source:u===0?n.today:n.tomorrow,at:-1,kind:"bin"})}return o}function Jl(r){return[...r].sort((e,t)=>(e.day??0)-(t.day??0)||e.at-t.at||e.title.localeCompare(t.title))}async function Ql(r,e,t=1,n=Date.now()){if(!r.fetchWithAuth||!e.length)return[];let o=new Date(n);o.setHours(0,0,0,0);let i=new Date(o);return i.setDate(i.getDate()+Math.max(1,t)),(await Promise.all(e.map(async a=>{try{let l=await r.fetchWithAuth(`/api/calendars/${encodeURIComponent(a)}?start=${encodeURIComponent(o.toISOString())}&end=${encodeURIComponent(i.toISOString())}`);if(!l.ok)return[];let u=String(r.states[a]?.attributes.friendly_name??a.split(".")[1]);return Op(await l.json(),u,n)}catch{return[]}}))).flat()}var Lp={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u26A0\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F9CA}",lightning:"\u{1F329}\uFE0F","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F326}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},Wp=r=>Lp[r??""]??"\u2601\uFE0F",xr=r=>{let e=typeof r=="string"?Number.parseFloat(r):typeof r=="number"?r:Number.NaN;return Number.isFinite(e)?e:null},Xl=r=>{let e=new Date(r);return e.setHours(0,0,0,0),e.getTime()};function eu(r,e,t=Date.now()){let n=Xl(t),o=[];for(let i of Array.isArray(r)?r:[]){let s=i.datetime?Date.parse(i.datetime):Number.NaN;if(!Number.isFinite(s))continue;let a=Xl(s);if(!(a<n||o.some(l=>l.day===a))&&(o.push({day:a,icon:Wp(i.condition),high:xr(i.temperature),low:xr(i.templow),rain:xr(i.precipitation),chance:xr(i.precipitation_probability)}),o.length>=e))break}return o}async function tu(r,e){try{return(await r.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"daily"},target:{entity_id:e},return_response:!0}))?.response?.[e]?.forecast??[]}catch{return[]}}var hn=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},ue=(r,...e)=>e.some(t=>r.includes(t));function Bp(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):r.states[e]?[e]:[]}function Vp(r){if(!r)return null;let e=String(r.state),t=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(e);if(t)return Number(t[1])*60+Number(t[2]);let n=Number(e);if(!Number.isFinite(n))return null;let o=String(r.attributes.unit_of_measurement??"min").toLowerCase();return o==="h"?n*60:o==="s"?n/60:o==="d"?n*1440:n}var Kp=/print|running|busy|druck/,Gp=["print_status","current_stage","print_state","printer_state","current_state","status","state"];function Qo(r,e){if(!e||!r.states[e])return null;let t=Bp(r,e),n=t.filter(E=>E.startsWith("sensor.")),o=E=>E?r.states[E]:void 0,i=E=>n.find(A=>E(A,r.states[A])),s=E=>String(E.attributes.unit_of_measurement??""),a=E=>String(E.attributes.device_class??""),l=i((E,A)=>s(A)==="%"&&ue(E,"progress","fortschritt","completion"));if(!l)return null;let u=Gp.map(E=>i((A,P)=>A.endsWith(E)&&!Number.isFinite(Number(P.state)))).find(Boolean),c=i(E=>ue(E,"remaining","time_left","restzeit","print_time_left")),d=i((E,A)=>a(A)==="timestamp"&&ue(E,"end","finish","estimated","ende")),p=i(E=>ue(E,"current_layer","layer")&&!ue(E,"total")),h=i(E=>ue(E,"total_layer","layer_count","total_layers")),w=i((E,A)=>a(A)==="temperature"&&ue(E,"nozzle","hotend","extruder","tool0","d\xFCse")&&!ue(E,"target")),b=i((E,A)=>a(A)==="temperature"&&ue(E,"bed","heater_bed","druckbett")&&!ue(E,"target")),g=i(E=>ue(E,"file","job","task_name","gcode","print_name","subtask")),_=t.find(E=>E.startsWith("image.")&&ue(E,"cover","model","thumbnail","preview"))??t.find(E=>E.startsWith("camera.")&&ue(E,"thumbnail","preview")),S=String(o(u)?.state??"").toLowerCase(),$=hn(o(l)),k=S?Kp.test(S)&&!/finish|complete|idle|fertig/.test(S):($??0)>0&&($??0)<100,y=o(d)?Date.parse(String(o(d).state)):NaN,F=Vp(o(c)),T=t.map(E=>r.states[E]).filter(E=>typeof E?.attributes.color=="string"&&/^#[0-9a-f]{6}/i.test(String(E.attributes.color))&&ue(E.entity_id,"tray","ams","filament","spool","external"));T.sort((E,A)=>+!!A.attributes.active-+!!E.attributes.active);let C=o(_)?.attributes.entity_picture;return{status:S||(k?"printing":"idle"),printing:k,progress:$,remaining:F,endsAt:Number.isFinite(y)?y:F!==null&&k?Date.now()+F*6e4:null,layer:hn(o(p)),layers:hn(o(h)),nozzle:hn(o(w)),bed:hn(o(b)),job:o(g)?.state&&!["unknown","unavailable",""].includes(String(o(g).state))?String(o(g).state):null,picture:typeof C=="string"?C:null,filaments:[...new Set(T.map(E=>String(E.attributes.color).slice(0,7).toLowerCase()))].slice(0,8)}}var Xo=r=>/printer_(3d|cube|multi|large|open|resin|enclosed)$/.test(r);var pn=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},Ne=(r,...e)=>e.some(t=>r.includes(t));function nu(r){let e=pn(r);return e===null?null:String(r.attributes.unit_of_measurement??"W").toLowerCase()==="kw"?e*1e3:e}function Up(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):r.states[e]?[e]:[]}function ru(r,e){if(!e||!r.states[e])return null;let t=Up(r,e),n=t.filter(k=>k.startsWith("sensor.")),o=k=>n.find(y=>k(y,r.states[y])),i=k=>k.attributes.device_class==="temperature",s=k=>k.attributes.device_class==="power",a=o((k,y)=>i(y)&&Ne(k,"flow","vorlauf","supply","leaving","outlet")&&!Ne(k,"target","soll","rate")),l=o((k,y)=>i(y)&&Ne(k,"return","rucklauf","r\xFCcklauf","ruecklauf","inlet","entering")&&!Ne(k,"target","soll")),u=o((k,y)=>i(y)&&Ne(k,"outdoor","outside","aussen","au\xDFen","ambient")),c=o((k,y)=>s(y)&&Ne(k,"heat","warme","w\xE4rme","thermal","output","heizleistung")),d=o((k,y)=>s(y)&&k!==c&&!Ne(k,"heat_output","thermal")),p=o(k=>Ne(k,"cop","leistungszahl"));if(!a&&!l&&!c&&!p)return null;let h=t.map(k=>r.states[k]).find(k=>k.entity_id.startsWith("climate.")),w=o((k,y)=>!Number.isFinite(Number(y.state))&&Ne(k,"status","mode","betrieb","operation","state")),b=`${String(h?.attributes.hvac_action??"")} ${String(w?r.states[w].state:"")}`.toLowerCase(),g=nu(r.states[c??""]),_=/defrost|abtau/.test(b)?"defrost":/water|dhw|warmwasser|tank/.test(b)?"water":/cool|kühl/.test(b)?"cooling":/heat|heiz/.test(b)||(g??0)>100?"heating":"idle",S=nu(r.states[d??""]),$=pn(r.states[p??""])??(g!==null&&S&&S>50?Math.round(g/S*10)/10:null);return{mode:_,flow:pn(r.states[a??""]),return:pn(r.states[l??""]),outside:pn(r.states[u??""]),power:S,heat:g,cop:$}}var ou=r=>/:heat_pump(_|$)/.test(r);var ei=r=>/access_point|router|mesh|wifi|repeater/.test(r),iu=(r,...e)=>e.some(t=>r.includes(t));function jp(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):r.states[e]?[e]:[]}function ti(r,e){if(!e||!r.states[e])return null;let t=jp(r,e),n=t.find(a=>a.startsWith("sensor.")&&iu(a,"clients","stations","connected_devices","users","ger\xE4te","wlan_clients")&&Number.isFinite(Number(r.states[a].state))),o=t.map(a=>r.states[a]).find(a=>a.entity_id.startsWith("binary_sensor.")&&(a.attributes.device_class==="connectivity"||iu(a.entity_id,"online","connected","status"))),i=r.states[e],s=["unavailable","off","disconnected","offline"].includes(String(o?.state??i.state).toLowerCase())&&(!!o||i.entity_id.startsWith("binary_sensor."));return{clients:n?Number(r.states[n].state):null,online:!s&&i.state!=="unavailable"}}function su(r){return r.online?(r.clients??0)>=30?[1,.72,.25]:[.3,.7,1]:[1,.3,.3]}function au(r){let e=0,t=[];for(let n of r){if(!n)continue;let o=n.entity_id.startsWith("binary_sensor.")&&n.attributes.device_class==="connectivity",i=n.entity_id.startsWith("device_tracker.")&&n.attributes.source_type==="router";!o&&!i||(n.state==="on"||n.state==="home"?e++:t.push(String(n.attributes.friendly_name??n.entity_id)))}return{online:e,offline:t}}var ie=r=>r&&r!=="none"?r:null,Sr=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},lu=(r,e)=>r?.attributes?.[e],pe=(r,...e)=>e.some(t=>r.includes(t));function qp(r,e){if(!e)return[];let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):[e]}function ye(r,e,t,n){return e&&r.states[e]?e:t.find(o=>n(o,r.states[o]))??null}function Zp(r,e,t,n){let o=Math.PI/180,i=Math.sin((t-r)*o/2)**2+Math.cos(r*o)*Math.cos(t*o)*Math.sin((n-e)*o/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(i)))}function Yp(r){if(!r||["unknown","unavailable","","none","off"].includes(String(r.state).toLowerCase()))return null;let e=String(r.state),t=/^(\d{1,2}):(\d{2})/.exec(e);if(t)return`${t[1].padStart(2,"0")}:${t[2]}`;let n=Date.parse(e);if(Number.isFinite(n)&&/\d{4}-\d{2}-\d{2}/.test(e)){let o=new Date(n);return`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}return t=/^(\d{1,4})$/.exec(e),t&&Number(t[1])<1440?`${String(Math.floor(Number(t[1])/60)).padStart(2,"0")}:${String(Number(t[1])%60).padStart(2,"0")}`:null}function uu(r,e){let t=e.car??{},n=ie(t.device)??ie(t.tracker)??ie(e.entity),o=qp(r,n);if(!o.length&&!ie(t.soc))return null;let i=z=>z.split(".")[0],s=z=>String(lu(z,"device_class")??""),a=z=>String(lu(z,"unit_of_measurement")??""),l=ye(r,ie(t.soc),o,(z,L)=>i(z)==="sensor"&&a(L)==="%"&&(s(L)==="battery"||pe(z,"battery_level","soc","state_of_charge","ladezustand"))&&!pe(z,"usable")),u=ye(r,ie(t.range),o,(z,L)=>i(z)==="sensor"&&(s(L)==="distance"||pe(z,"range","reichweite"))&&!pe(z,"odometer","ideal","elevation","kilometerstand")),c=ye(r,null,o,(z,L)=>i(z)==="sensor"&&s(L)==="power"&&pe(z,"charg","lade")),d=ie(t.charging),p=ye(r,d&&i(d)==="binary_sensor"?d:null,o,(z,L)=>i(z)==="binary_sensor"&&(s(L)==="battery_charging"||pe(z,"charging","charger","laden"))),h=ye(r,ie(t.plugged),o,(z,L)=>i(z)==="binary_sensor"&&(s(L)==="plug"||pe(z,"plug","cable","kabel"))),w=ye(r,ie(t.lock),o,z=>i(z)==="lock"),b=ye(r,ie(t.climate),o,z=>i(z)==="climate"),g=ye(r,d&&/^(switch|input_boolean)\./.test(d)?d:null,o,z=>i(z)==="switch"&&pe(z,"charg","laden")&&!pe(z,"port","klappe")),_=ye(r,ie(t.tracker),o,z=>i(z)==="device_tracker")??(ie(e.entity)?.startsWith("device_tracker.")?ie(e.entity):null),S=ye(r,null,o,(z,L)=>i(z)==="sensor"&&s(L)==="temperature"&&pe(z,"inside","innen","interior","cabin")),$=ye(r,ie(t.departure),o,z=>/^(sensor|input_datetime|time|datetime)$/.test(i(z))&&pe(z,"departure","abfahrt","depart")),k=o.filter(z=>{let L=r.states[z];return i(z)==="binary_sensor"&&L?.state==="on"&&(["door","opening","window","garage_door"].includes(s(L))||pe(z,"trunk","frunk","kofferraum","tailgate","hatch","klappe","charge_port","ladeklappe"))}),y=z=>z?r.states[z]:void 0,F=Sr(y(l)),T=y(u),C=null,E=y(c)??(d&&i(d)==="sensor"?y(d):void 0);if(E){let z=Sr(E);z!==null&&(C=Math.max(0,a(E).toLowerCase()==="kw"?z*1e3:z))}let P=(y(p)?.state??y(g)?.state)==="on"||C!==null&&C>50,N=y(h)?.state,V=y(w)?.state,G=y(b),U=y(_),X=y(ie(e.entity)),v=X?["on","home","true","present","occupied","detected","parked"].includes(X.state.toLowerCase()):U?.state==="home",x=U&&U.state!=="home"&&U.state!=="not_home"?U.state:null,B=x?String(y(`zone.${x}`)?.attributes.friendly_name??x):null;return{home:v,soc:F,range:Sr(T),rangeUnit:T&&a(T)||"km",chargingW:C,charging:P,plugged:N===void 0?null:N==="on",locked:V===void 0?null:V==="locked",climateOn:G?G.state!=="off"&&G.state!=="unavailable":null,inside:Sr(y(S)),where:v?null:B,distance:v?null:Jp(r,U),open:k.map(z=>Qp(r,z,o)),departure:Yp(y($)),entities:{lock:w,climate:b,charge:g,tracker:_}}}function Jp(r,e){let t=r.states["zone.home"]?.attributes,n=Number(e?.attributes?.latitude),o=Number(e?.attributes?.longitude),i=Number(t?.latitude??r.config?.latitude),s=Number(t?.longitude??r.config?.longitude);return[n,o,i,s].every(Number.isFinite)?Math.round(Zp(n,o,i,s)*10)/10:null}function Qp(r,e,t){let n=String(r.states[e]?.attributes.friendly_name??e.split(".")[1]),o=t.map(s=>String(r.states[s]?.attributes.friendly_name??"")).reduce((s,a)=>{let l=0;for(;l<s.length&&l<a.length&&s[l]===a[l];)l++;return s.slice(0,l)}),i=n.slice(o.length).trim();return i.length>=2?i:n}function cu(r){return r===null?"#8aa0c8":r<20?"#f87171":r<50?"#facc15":"#4ade80"}function Me(r,e){let t=Math.abs(e);return t>=1e3?`${O(r,t/1e3,t>=1e4?1:2)} kW`:`${Math.round(t)} W`}function mn(r,e){let n=2*Math.PI*22;return m`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${J`<circle cx="27" cy="27" r=${22} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${22} stroke=${e} stroke-dasharray=${`${(n*Math.max(0,Math.min(1,r))).toFixed(1)} ${n.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`}function Xp(r,e,t,n){let o=e.summary,i=u=>R(r,u),s=e.autarky,a=n?m`<button class="live-fold" title=${i(n.folded?"live_unfold":"live_fold")} aria-label=${i(n.folded?"live_unfold":"live_fold")} aria-expanded=${!n.folded} @click=${n.toggle}>${n.folded?"+":"\u2212"}</button>`:f;if(n?.folded){let u=o.solar!==null?`\u2600 ${Me(r,o.solar)}`:o.consumption!==null?`\u2302 ${Me(r,o.consumption)}`:null;return m`<div class="live-card live-card-house live-folded" data-i=${t}>
      ${s!==null?m`<div class="live-own">${mn(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)}%</b></div></div>`:f}
      ${u?m`<b>${u}</b>`:s===null?m`<b>⌂</b>`:f}
      ${a}
    </div>`}let l=[];if(o.solar!==null&&l.push(m`<div class="live-row live-solar"><span>☀ ${i("energy_solar")}</span><b>${Me(r,o.solar)}</b></div>`),o.consumption!==null&&l.push(m`<div class="live-row live-house"><span>⌂ ${i("energy_consumption")}</span><b>${Me(r,o.consumption)}</b></div>`),o.rest!==void 0&&o.rest!==null&&l.push(m`<div class="live-row live-house"><span>⌂ ${i("energy_rest")}</span><b>${Me(r,o.rest)}</b></div>`),o.battery!==null||o.soc!==null){let u=o.battery===null||Math.abs(o.battery)<15?"":o.battery>0?" \u2193":" \u2191";l.push(m`<div class="live-row live-battery"><span>▮ ${i("energy_battery")}${u}</span><b>${o.soc!==null?`${Math.round(o.soc)} %`:""}${o.battery!==null&&Math.abs(o.battery)>=15?` \xB7 ${Me(r,o.battery)}`:""}</b></div>`)}if(o.grid!==null){let u=o.grid<-15;l.push(m`<div class="live-row ${u?"live-export":"live-import"}"><span>⇄ ${i(u?"energy_grid_export":"energy_grid_import")}</span><b>${Me(r,o.grid)}</b></div>`)}for(let u of e.meters??[])l.push(m`<div class="live-row live-meter"><span>${u.icon} ${u.label}</span><b>${u.value}</b></div>`);return m`<div class="live-card live-card-house" data-i=${t}>
    ${a}
    ${s!==null?m`<div class="live-own">${mn(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)} %</b><span>${i("live_autarky")}</span></div></div>`:f}
    <div class="live-rows">${l}</div>
    ${tm(r,e.curves)} ${em(r,e.week)}
  </div>`}function em(r,e){if(!e)return f;let t=[...e.solar,...e.use].filter(u=>u!==null&&u>0);if(!t.length)return f;let n=Math.max(...t)*1.1||1,[o,i]=[150,30],s=o/7,a=(u,c,d)=>u===null||u<=0?f:J`<rect x=${c.toFixed(1)} y=${(i-u/n*i).toFixed(1)} width=${(s*.36).toFixed(1)} height=${(u/n*i).toFixed(1)} class=${d}></rect>`,l=u=>u.reduce((c,d)=>c+(d??0),0);return m`<div class="live-day live-week" title=${R(r,"live_week_hint",{solar:O(r,l(e.solar),0),use:O(r,l(e.use),0)})}>
    <svg viewBox=${`0 0 ${o} ${i}`} preserveAspectRatio="none" aria-hidden="true">
      ${e.days.map((u,c)=>J`${a(e.solar[c],c*s+s*.1,"live-week-solar")}${a(e.use[c],c*s+s*.5,"live-week-use")}`)}
    </svg>
    <span>7 ${R(r,"live_days")}</span>
  </div>`}function tm(r,e){if(!e)return f;let t=[...e.solar,...e.use].filter(l=>l!==null);if(t.length<4)return f;let n=Math.max(...t)*1.08||1,[o,i]=[150,34],s=on(e.solar,o,i,n),a=on(e.use,o,i,n);return m`<div class="live-day" title=${R(r,"live_day_hint")}>
    <svg viewBox=${`0 0 ${o} ${i}`} preserveAspectRatio="none" aria-hidden="true">
      ${s?J`<path d=${`${s}L${o},${i}L0,${i}Z`} class="live-day-solar"></path>`:f}
      ${a?J`<path d=${a} class="live-day-use"></path>`:f}
    </svg>
    <span>24 h</span>
  </div>`}function nm(r,e,t,n){let o=e.car,i=(c,d)=>R(r,c,d),s=cu(o.soc),a=o.home?o.charging?`\u26A1 ${i("live_car_charging")}${o.chargingW?` \xB7 ${Me(r,o.chargingW)}`:""}`:o.plugged?`\u{1F50C} ${i("live_car_plugged")}`:"":`${i("live_car_away")}${o.where?` \xB7 ${o.where}`:""}${o.distance!==null?` \xB7 ${O(r,o.distance,o.distance<10?1:0)} km`:""}`,l=o.entities,u=(c,d,p,h)=>m`<button class="live-btn ${c?"live-on":""}" title=${d} aria-label=${d} aria-pressed=${c??!1} @click=${w=>(w.stopPropagation(),h())}>${p}</button>`;return m`<div class="live-card live-card-car ${o.charging?"live-charging":""} ${o.home?"":"live-away"}" data-i=${t} style=${`--live-soc:${s}`}>
    <div class="live-own">
      ${mn((o.soc??0)/100,s)}
      <div class="live-own-text"><b>${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b><span>${o.range!==null?`${Math.round(o.range)} ${o.rangeUnit}`:""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${a?m`<div class="live-status">${a}</div>`:f}
      ${o.inside!==null?m`<div class="live-status">🌡 ${O(r,o.inside,1)} °C</div>`:f}
      ${o.departure?m`<div class="live-status">⏰ ${i("live_car_departure",{time:o.departure})}</div>`:f}
      ${o.open.length?m`<div class="live-status live-warn">⚠ ${i("live_car_open",{parts:o.open.join(", ")})}</div>`:f}
      <div class="live-actions">
        ${l.lock?u(o.locked,i(o.locked?"live_car_unlock":"live_car_lock"),o.locked?"\u{1F512}":"\u{1F513}",()=>{o.locked&&!confirm(i("live_car_unlock_confirm",{name:e.name}))||n("lock",o.locked?"unlock":"lock",l.lock)}):f}
        ${l.climate?u(o.climateOn,i("live_car_climate"),"\u2744",()=>n(l.climate.split(".")[0],o.climateOn?"turn_off":"turn_on",l.climate)):f}
        ${l.charge&&o.home?u(o.charging,i("live_car_charge"),"\u26A1",()=>n(l.charge.split(".")[0],"toggle",l.charge)):f}
      </div>
    </div>
  </div>`}function rm(r,e,t,n){let o=e.media,i=l=>R(r,l),s=`rgb(${o.color.join(",")})`,a=(l,u,c)=>m`<button class="live-btn" title=${l} aria-label=${l} @click=${d=>(d.stopPropagation(),n("media_player",c,o.entity))}>${u}</button>`;return m`<div class="live-card live-card-media" data-i=${t} style=${`--live-soc:${s}`} @click=${l=>l.currentTarget.classList.toggle("live-open")}>
    ${o.picture?m`<img class="live-cover" src=${o.picture} alt="" loading="lazy" />`:m`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${o.title}>${o.title||o.name}</div>
      <div class="live-status">${o.artist||o.app||o.name}</div>
      <div class="live-actions">
        ${a(i("live_media_prev"),"\u23EE","media_previous_track")} ${a(i("live_media_playpause"),"\u23EF","media_play_pause")} ${a(i("live_media_next"),"\u23ED","media_next_track")}
        ${o.volume!==null?m`<input
              class="live-volume"
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(o.volume*100))}
              aria-label=${i("live_media_volume")}
              @click=${l=>l.stopPropagation()}
              @change=${l=>n("media_player","volume_set",o.entity,{volume_level:Number(l.target.value)/100})}
            />`:f}
      </div>
    </div>
  </div>`}function du(r){let e=[...r.querySelectorAll(".live-card")].filter(i=>i.style.visibility!=="hidden"),t=[],n=e[0]?.parentElement?.clientWidth??0,o=e.map(i=>{let[s,a]=[Number(i.dataset.x),i.offsetWidth],l=n?n>a+16?Math.min(Math.max(s,a/2+8),n-a/2-8):n/2:s;return i.style.setProperty("--live-dx",`${Math.round(s-l)}px`),{el:i,x:l,y:Number(i.dataset.y),w:a,h:i.offsetHeight}}).sort((i,s)=>s.y-i.y);for(let i of o){let s=i.y;for(let l=0;l<12;l++){let u={x0:i.x-i.w/2,x1:i.x+i.w/2,y0:s-i.h,y1:s},c=t.find(d=>u.x0<d.x1+6&&u.x1>d.x0-6&&u.y0<d.y1+6&&u.y1>d.y0-6);if(!c)break;s=c.y0-8}t.push({x0:i.x-i.w/2,x1:i.x+i.w/2,y0:s-i.h,y1:s});let a=i.y-s;i.el.style.transform=`translate(${Math.round(i.x)}px, ${Math.round(s)}px) translate(-50%, -100%)`,i.el.style.setProperty("--live-thread",`${Math.round(18+a)}px`)}}function om(r,e,t){let n=e.printer,o=(u,c)=>R(r,u,c),i=n.progress??0,s=u=>new Intl.DateTimeFormat(r?.language??navigator.language,{hour:"2-digit",minute:"2-digit"}).format(new Date(u)),a=n.remaining!==null?n.remaining>=60?`${Math.floor(n.remaining/60)} h ${Math.round(n.remaining%60)} min`:`${Math.round(n.remaining)} min`:null,l=[n.nozzle!==null?`${o("printer_nozzle")} ${Math.round(n.nozzle)}\xB0`:null,n.bed!==null?`${o("printer_bed")} ${Math.round(n.bed)}\xB0`:null].filter(Boolean).join(" \xB7 ");return m`<div class="live-card live-card-printer ${n.printing?"live-charging":""}" data-i=${t}>
    <div class="live-own">
      ${n.picture?m`<img class="live-print-pic" src=${n.picture} alt="" />`:mn(i/100,n.printing?"#38bdf8":"#8aa0c8")}
      <div class="live-own-text"><b>${n.progress!==null?`${Math.round(i)} %`:"\u2013"}</b><span>${o(`printer_${n.printing?"printing":/finish|complete|fertig/.test(n.status)?"done":/pause/.test(n.status)?"paused":/error|fail/.test(n.status)?"error":"idle"}`)}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${n.job?m`<div class="live-status">${n.job}</div>`:f}
      ${n.printing&&(n.endsAt||a)?m`<div class="live-status">⏱ ${[a,n.endsAt?o("printer_done_at",{time:s(n.endsAt)}):null].filter(Boolean).join(" \xB7 ")}</div>`:f}
      ${n.layer!==null?m`<div class="live-status">▤ ${o("printer_layer")} ${n.layer}${n.layers?` / ${n.layers}`:""}</div>`:f}
      ${l?m`<div class="live-status">🌡 ${l}</div>`:f}
      ${n.filaments.length?m`<div class="live-filaments">${n.filaments.map(u=>m`<i style=${`background:${u}`}></i>`)}</div>`:f}
    </div>
  </div>`}function im(r,e,t){let n=e.pump,o=a=>R(r,a),i=a=>a===null?"\u2013":`${O(r,a,1)}\xB0`,s={heating:"\u{1F525}",water:"\u{1F6BF}",cooling:"\u2744",defrost:"\u{1F9CA}",idle:"\u23F8"}[n.mode];return m`<div class="live-card live-card-heatpump ${n.mode==="idle"?"":"live-charging"}" data-i=${t}>
    <div class="live-own">
      ${mn(Math.min(1,(n.cop??0)/6),(n.cop??0)>=3.5?"#4ade80":(n.cop??0)>=2.5?"#facc15":"#fb923c")}
      <div class="live-own-text"><b>${n.cop!==null?O(r,n.cop,1):s}</b><span>${n.cop!==null?"COP":""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      <div class="live-status">${s} ${o(`heatpump_${n.mode}`)}</div>
      ${n.flow!==null||n.return!==null?m`<div class="live-row live-heat"><span>${o("heatpump_flow_return")}</span><b>${i(n.flow)} → ${i(n.return)}</b></div>`:f}
      ${n.heat!==null?m`<div class="live-row live-heat"><span>${o("heatpump_heat")}</span><b>${Me(r,n.heat)}</b></div>`:f}
      ${n.power!==null?m`<div class="live-row live-house"><span>${o("heatpump_power")}</span><b>${Me(r,n.power)}</b></div>`:f}
      ${n.outside!==null?m`<div class="live-status">🌡 ${o("heatpump_outside")} ${i(n.outside)}</div>`:f}
    </div>
  </div>`}function hu(r,e,t,n){return e.length?m`<div class="live-cards">
    ${e.map((o,i)=>o.kind==="house"?Xp(r,o,i,n):o.kind==="car"?nm(r,o,i,t):o.kind==="printer"?om(r,o,i):o.kind==="heatpump"?im(r,o,i):rm(r,o,i,t))}
  </div>`:f}var pu=te`
  .live-cards {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
    container-type: size;
  }
  /* a phone: the cards keep to the screen, the house card leaves its week out */
  @container (max-width: 480px) {
    .live-card {
      gap: 8px;
      padding: 8px 10px;
      font-size: 11.5px;
    }
    .live-card-house:not(.live-folded) {
      padding-right: 28px;
    }
    .live-card-house .live-week {
      display: none;
    }
    .live-rows {
      min-width: 0;
    }
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
    left: clamp(12px, calc(50% + var(--live-dx, 0px)), calc(100% - 12px));
    bottom: calc(-1 * var(--live-thread, 18px));
    width: 1px;
    height: var(--live-thread, 18px);
    background: linear-gradient(color-mix(in srgb, var(--nf-text) 45%, transparent), transparent);
  }
  .live-fold {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: color-mix(in srgb, var(--nf-text) 10%, transparent);
    color: var(--nf-text);
    font: inherit;
    font-size: 13px;
    line-height: 20px;
    cursor: pointer;
    opacity: 0.7;
  }
  .live-fold:hover,
  .live-fold:focus-visible {
    opacity: 1;
    background: color-mix(in srgb, var(--nf-text) 20%, transparent);
  }
  .live-card-house:not(.live-folded) {
    padding-right: 30px;
  }
  .live-folded {
    padding: 6px 30px 6px 8px;
    gap: 8px;
  }
  .live-folded .live-own,
  .live-folded .live-ring {
    width: 38px;
    height: 38px;
  }
  .live-folded .live-own-text b {
    font-size: 11px;
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
  .live-week svg {
    height: 30px;
  }
  .live-week-solar {
    fill: rgba(250, 204, 21, 0.6);
  }
  .live-week-use {
    fill: rgba(232, 238, 255, 0.18);
    stroke: #e8eeff;
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
  .live-print-pic {
    width: 54px;
    height: 54px;
    border-radius: 12px;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.06);
  }
  .live-filaments {
    display: flex;
    gap: 4px;
    margin-top: 2px;
  }
  .live-filaments i {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  .live-warn {
    color: #fbbf24;
    opacity: 1;
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
`;function Mr(r){return r.toLocaleLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var ni=r=>r.points.length>=3;function mu(r,e,t){return r.rooms.filter(ni).find(n=>H([e,t],n.points))}function sm(r,e,t,n){let o=[];for(let a of e.rooms.filter(ni)){let[l,u]=Le(a.points);o.push({kind:"room",name:a.name,where:n?e.name:"",floorId:e.id,roomId:a.id,entity:null,icon:null,x:l,z:u,y:0})}let i=new Set,s=(a,l,u,c)=>{if(i.has(a)||!(a in r.states))return;i.add(a);let d=mu(e,l,u),p=[d?.name,n?e.name:void 0].filter(h=>!!h).join(" \xB7 ");o.push({kind:"device",name:W(r,a),where:p,floorId:e.id,roomId:d?.id??null,entity:a,icon:D(a),x:l,z:u,y:c})};for(let a of e.placements){let l=a.y??_t(D(a.entity_id)??"sensor",me(e,a.x,a.z),a.mount);s(a.entity_id,a.x,a.z,l)}for(let a of e.furniture){let l=t.get(a.id),u=l?.entity??l?.power;if(!u)continue;let c=me(e,a.x,a.z)-.3;s(u,a.x,a.z,Math.min(c,Math.max(.5,a.h)))}for(let a of e.notes??[]){if(!a.text)continue;let l=mu(e,a.x,a.z),u=[l?.name,n?e.name:void 0].filter(c=>!!c).join(" \xB7 ");o.push({kind:"note",name:`\u270E ${a.text.length>60?`${a.text.slice(0,59)}\u2026`:a.text}`,where:u,floorId:e.id,roomId:l?.id??null,entity:null,icon:null,x:a.x,z:a.z,y:1.3})}return o}function fu(r,e){let t=nt(r,e.floors),n=e.floors.length>1,o=e.floors.flatMap(i=>sm(r,i,t,n));for(let i of e.settings.circuits??[]){let s=e.floors.flatMap(d=>d.rooms.filter(p=>i.rooms.includes(p.id)&&ni(p)).map(p=>({f:d,r:p})));if(!s.length)continue;let[{f:a,r:l}]=s,[u,c]=Le(l.points);o.push({kind:"circuit",name:`\u{1F50C} ${i.name}`,where:s.map(d=>d.r.name).join(", "),floorId:a.id,roomId:l.id,entity:null,icon:null,x:u,z:c,y:0})}return o}function am(r,e){return(Mr(r.name).startsWith(e)?0:2)+(r.kind==="room"?0:1)}function gu(r,e,t=8){let n=Mr(e).split(/\s+/).filter(Boolean);if(n.length===0)return[];let o=Mr(e.trim());return r.filter(i=>{let s=Mr([i.name,i.where,i.entity].filter(Boolean).join(" "));return n.every(a=>s.includes(a))}).map(i=>({item:i,cost:am(i,o)})).sort((i,s)=>i.cost-s.cost||i.item.name.localeCompare(s.item.name)).slice(0,t).map(i=>i.item)}var lm=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],um=[2200,2700,3200,4e3,5e3,6500],cm=["hs","rgb","rgbw","rgbww","xy"],dm=4,_u=16,bu=32,hm=128;function oi(r){let e=r.attributes.supported_color_modes??[],t=e.some(n=>cm.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function ii(r){return((r.attributes.supported_features??0)&dm)!==0&&typeof r.attributes.current_position=="number"}var ri=class extends re{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},myPosition:{attribute:!1},low:{type:Boolean,reflect:!0}};t(e,t){return R(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:W(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){fe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,o)=>{let i=o/t*Math.PI*2-Math.PI/2;return m`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=oi(e),n=e.state==="on",o=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?lm.map(s=>m`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?um.map(s=>m`<button class="qm-swatch" style="background:${pm(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return m`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?m`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:f}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",o=ii(e),i=(c,d,p,h=!1)=>m`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${d} @click=${p}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n),...this.myPosition!=null?[i("My",this.t("cover_my_go",{p:this.myPosition}),()=>this.ask()&&(o?this.call("cover","set_cover_position",{position:this.myPosition}):this.call("cover","stop_cover")),s(this.myPosition))]:[]],l=t===null?e.state==="closed"?100:0:100-t,u=t!==null||n||e.state==="open"||e.state==="closed";return m`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${u&&l<100?"qm-on":""}"
          style="--closed:${l}%"
          ?disabled=${!u}
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ee(this.hass,e)}</b>
        </button>
      </div>
      ${o?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:f}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&hm&&n!==null?m`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${o=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(o.target.value)})}
      /></label>`:t&(_u|bu)?m`<div class="qm-tilt-buttons">
        ${t&_u?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:f}
        ${t&bu?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:f}
      </div>`:f}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return m`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ee(this.hass,e)}</b>
      </button>
    </div>`}renderMedia(e){let t=!["off","standby","unavailable","unknown"].includes(e.state),n=e.state==="playing",o=e.attributes,i=typeof o.volume_level=="number"?Math.round(o.volume_level*100):null,s=Array.isArray(o.source_list)?o.source_list.slice(0,24):[],a=[o.media_title,o.media_artist].filter(d=>typeof d=="string"&&d).join(" \xB7 "),l=d=>m`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d=${d} /></svg>`,u=(d,p,h,w=!1)=>m`<button class="qm-swatch qm-slot ${w?"qm-slot-on":""}" aria-label=${p} title=${p} @click=${h}>${d}</button>`,c=t?[u(l(n?"M6 5h4v14H6zM14 5h4v14h-4z":"M8 5v14l11-7z"),this.t(n?"media_pause":"media_play"),()=>this.call("media_player","media_play_pause"),n),u(l("M6 6h2v12H6zm3.5 6 8.5 6V6z"),this.t("media_previous"),()=>this.call("media_player","media_previous_track")),u(l("M16 6h2v12h-2zM6 18l8.5-6L6 6z"),this.t("media_next"),()=>this.call("media_player","media_next_track"))]:[];return m`<div class="qm-ring ${c.length?"":"qm-ring-small"}">
        ${this.ring(c)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("media_player",t?"turn_off":"turn_on")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${i!==null&&t?`${i} %`:ee(this.hass,e)}</b>
        </button>
      </div>
      ${a?m`<div class="qm-media-title">${a}</div>`:f}
      ${i!==null?m`<input class="qm-slider" type="range" min="0" max="100" .value=${String(i)} aria-label=${this.t("media_volume")} @change=${d=>this.call("media_player","volume_set",{volume_level:Number(d.target.value)/100})} />`:f}
      ${s.length?m`<div class="qm-play-head">${this.t("media_sources")}</div>
            <div class="qm-play">${s.map(d=>m`<button class="qm-chip ${o.source===d?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:d})}>${d}</button>`)}</div>`:f}
      ${this.presets?.length?m`<div class="qm-play-head">${this.t("presets")}</div>
            <div class="qm-play">${this.presets.map(d=>m`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:d.type,media_content_id:d.content})}>${d.label}</button>`)}</div>`:f}`}render(){let e=this.hass?.states[this.entity];if(!e)return f;let t=D(this.entity),n=I(e)&&!Kt(e)?m`<p class="qm-note">${ee(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="media"?this.renderMedia(e):this.renderToggle(e);return m`<div class="qm" role="dialog" aria-label=${W(this.hass,this.entity)}>
      <div class="qm-title">${W(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Se,te`
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
    `]};function pm(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=(n,o)=>Math.round(n+(o-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("nf-quick-menu")||customElements.define("nf-quick-menu",ri);var mm=new URL(import.meta.url),fm=new URL("./nextfloor-3d.js?v=e4fd66cb6d3a",mm).href,wu;function vu(){return wu??=import(fm),wu}function yu(r){if(!r||r.state!=="on")return 0;let e=typeof r.attributes.percentage=="number"?r.attributes.percentage:60;return e<=0?0:.2+.6*Math.min(100,e)/100}var gm=new Set(["on","home","open","true","active","playing","heat","heating"]);function $r(r,e){let t=e.show_when;if(!t?.entity||!r)return!0;let n=r.states[t.entity];if(!n||I(n))return!0;let o=String(n.state).toLowerCase(),i=(t.state??"").split(",").map(a=>a.trim().toLowerCase()).filter(Boolean),s=i.length?i.includes(o):gm.has(o)||Number.isFinite(Number(o))&&Number(o)>0;return t.invert?!s:s}function si(r,e){let t=[];for(let n of e.floors)for(let o of n.furniture)$r(r,o)||t.push(o.id);return t.sort()}function ku(r,e){if(!e.length)return r;let t=new Set(e);return{...r,floors:r.floors.map(n=>n.furniture.some(o=>t.has(o.id))?{...n,furniture:n.furniture.filter(o=>!t.has(o.id))}:n)}}var xu="image:";function ai(r,e,t){let n=(e??"").trim();if(!n)return null;if(n.startsWith(xu))return t(n.slice(xu.length));if(/^(https?:\/\/|\/)/.test(n))return n;if(/^[a-z_]+\.[a-z0-9_]+$/.test(n)){let o=r?.states[n]?.attributes.entity_picture;return typeof o=="string"&&o?o:null}return null}var fn=r=>Number(r);function _n(r){if(Array.isArray(r)){let[i,s]=[fn(r[0]),fn(r[1])];return Number.isFinite(i)&&Number.isFinite(s)?[i,s]:null}if(!r||typeof r!="object")return null;let{x:e,y:t}=r,[n,o]=[fn(e),fn(t)];return Number.isFinite(n)&&Number.isFinite(o)?[n,o]:null}function Su(r){return r?_n(r.charger)??_n(r.charger_position):null}function Mu(r){for(let[e,t]of Object.entries(r.states))if(e.startsWith("camera.")&&(_n(t.attributes?.vacuum_position)??Su(t.attributes)))return e;return null}var _m=r=>Array.isArray(r)?typeof r[0]=="number":!!r&&typeof r=="object",gn=(r,e)=>e?[r[0],-r[1]]:r;function bm(r){if(!r)return null;let e=r.mirror===!0,[t,n]=gn(r.ga,e),[o,i]=gn(r.gb,e),[s,a]=r.a,[l,u]=r.b,[c,d]=[o-t,i-n],[p,h]=[l-s,u-a],w=Math.hypot(c,d),b=Math.hypot(p,h);if(!(w>1e-6)||!(b>1e-6))return null;let g=b/w,_=Math.atan2(h,p)-Math.atan2(d,c),[S,$]=[Math.cos(_),Math.sin(_)];return k=>{let y=gn(k,e),[F,T]=[y[0]-t,y[1]-n];return[s+g*(F*S-T*$),a+g*(F*$+T*S)]}}function wm(r){if(!r)return null;let e=r.mirror===!0,[t,n]=gn(r.ga,e),[o,i]=gn(r.gb,e),s=Math.atan2(r.b[1]-r.a[1],r.b[0]-r.a[0])-Math.atan2(i-n,o-t);return Number.isFinite(s)?s:null}function $u(r,e,t){if(!e)return null;let n=r.states[e]?.attributes;if(!n)return null;let o=bm(t)??(w=>w),i=wm(t)??0,s=t?.mirror===!0?-1:1,a=n.vacuum_position,l=_n(a),u=l?(()=>{let[w,b]=o(l),g=fn(a?.a)*s;if(!Number.isFinite(g))return{x:w,z:b,heading:0};let _=g*Math.PI/180+i;return{x:w,z:b,heading:Math.atan2(Math.cos(_),Math.sin(_))}})():null,c=Su(n),d=Array.isArray(n.path)?n.path:[],p=d.length>0&&_m(d[0])?[d]:d,h=[];for(let w of p){let b=[];for(let g of Array.isArray(w)?w:[]){let _=_n(g);_&&b.push(o(_))}b.length>1&&h.push(b)}return!u&&!c&&!h.length?null:{pose:u,charger:c?o(c):null,path:h}}var Au="nextfloor.lock3d",Eu=520,ui=class extends re{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},solidWalls:{attribute:!1},glassWalls:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},markersOutside:{attribute:!1},tapInRoom:{type:Boolean},roomDoubleTap:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},ownLook:{attribute:!1},furnitureColors:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},weatherDensity:{attribute:!1},timeOfDay:{attribute:!1},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_liveEnergy:{state:!0},_liveCards:{state:!0},_liveCardOn:{state:!0},_houseFolded:{state:!0},_swipe:{state:!0},_menu:{state:!0},_pluginWindow:{state:!0},_plate:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},centralOpen:{attribute:!1},keepCamera:{attribute:!1},plain:{attribute:!1},rightBack:{attribute:!1},templateName:{attribute:!1},readable:{type:Boolean,reflect:!0},today:{attribute:!1},_todayOpen:{state:!0},_todayItems:{state:!0},_forecast:{state:!0},zoom:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},thumbsFolded:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},clock:{attribute:!1},lockButton:{attribute:!1},walkButton:{attribute:!1},travelButton:{attribute:!1},_travel:{state:!0},_walking:{state:!0},_stick:{state:!0},_locked:{state:!0},_now:{state:!0},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},announcements:{attribute:!1},sensorBar:{attribute:!1},screenName:{attribute:!1},_announcement:{state:!0},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},outsideOpen:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_shortStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};stopAnnouncements=null;announceTimer;get liveCardsOn(){return this.holograms??this._liveCardOn}cloud=0;confirmSet=new Set;shownStartView;placementInfo=new Map;live=null;travelTimer;dayCurves=null;curvesAt=0;clockTimer;stopPlugins=null;pluginsDirty=!1;resizeObs=null;alertSrc=null;alertTimer;contactTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;forecastAt=0;forecastKey="";todayAt=0;todayDay="";swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;tapPins=new Map;heatValues=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.solidWalls=!1,this.glassWalls=null,this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.markersOutside=null,this.tapInRoom=!1,this.roomDoubleTap="auto",this.heatMode="none",this.theme="neon",this.accent=null,this.ownLook=null,this.furnitureColors=null,this.furnish=!1,this.weather=!0,this.weatherEntityId=null,this.weatherDensity=1,this.showEnergy=!0,this.flows=null,this._liveEnergy=null,this._liveCards=[],this._liveCardOn=localStorage.getItem("nextfloor.cards")!=="0",this._houseFolded=localStorage.getItem("nextfloor.house_card_folded")==="1",this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._pluginWindow=null,this._plate=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("nextfloor.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.thumbsFolded=!1,this.clean=!1,this.cleanButton=!1,this.clock=null,this.lockButton=!1,this.walkButton=!1,this.travelButton=!1,this._travel=null,this._walking=!1,this._stick=null,this._now=Date.now(),this._locked=(()=>{try{return localStorage.getItem(Au)==="1"}catch{return!1}})(),this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this._shortStage=!1,this._phoneStage=!1,this.alerts=!0,this.alertJump=!1,this.announcements=!1,this.sensorBar=!0,this.screenName=null,this._announcement=null,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.outsideOpen=!1,this.holograms=null;try{this._flows=localStorage.getItem("nextfloor.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.stopPlugins=pt(()=>{this.pluginsDirty=!0,this.requestUpdate()}),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.stopPlugins?.(),this.stopPlugins=null,this.listenToAnnouncements(!1),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.contactTimer),this.contactTimer=void 0,clearInterval(this.clockTimer),this.clockTimer=void 0,clearInterval(this.travelTimer),this.travelTimer=void 0,this.live=null,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nf-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=t[0]?.contentRect,o=(n?.width??1e3)<700||(n?.height??1e3)<Eu,i=(n?.height??1e3)<Eu;i!==this._shortStage&&(this._shortStage=i);let s=(n?.width??1e3)<520;s!==this._phoneStage&&(this._phoneStage=s),o!==this._narrowStage&&(this._narrowStage=o,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await vu();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".nf-stage");t.addEventListener("pointerdown",n=>{this._central&&!this.centralOpen&&!n.target?.closest?.(".nf-central, .nf-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,o)=>this.fire("room-tap",{floorId:n,roomId:o}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?R(this.hass,"floor_rooms_one"):R(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,o,i)=>this.onDeviceTap(n,o,i),onDeviceHold:(n,o,i)=>this.onDeviceHold(n,o,i),onRoomDoubleTap:(n,o)=>this.onRoomDoubleTap(n,o),onDeviceSwipe:(n,o,i,s,a)=>this.onDeviceSwipe(n,o,i,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,o,i)=>this.fire("furniture-move",{id:n,x:o,z:i}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,o,i)=>this.fire("device-move",{id:n,x:o,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setPaintedWalls(this.solidWalls),this.viewer.setGlassWalls((this.glassWalls??20)/100),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setOwnLook(this.filledOwnLook),this.viewer.setFurnitureColors(this.furnitureColors??null),this.viewer.setNotePhotos(n=>this.hass?ai(this.hass,n,o=>this.storedPicture(this.hass,o)):null),this.viewer.setNavigationLocked(this._locked),this.viewer.setFurnishMode(this.furnish),this.viewer.setTapInRoom(this.tapInRoom),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setKeepCamera(!!this.keepCamera),this.viewer.setPlain(!!this.plain),this.viewer.setRightBack(!!this.rightBack),this.viewer.setZoom(this.zoom??1),this._low=this.viewer.low,this.viewer.setMeshSource(n=>this.hass?.fetchWithAuth?this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(n)}`).then(o=>o.ok?o.arrayBuffer():null):Promise.resolve(null)),this.viewer.setPacks([...Xr()]),this.shownPacks=zn(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding(this.hass)),this.viewer.setMap(this.building.settings.map,this.building.settings.north??0)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("thumbsFolded")&&this.thumbsFolded&&(this._thumbsCompact=!0)}updated(e){(e.has("announcements")||e.has("hass")&&this.announcements&&!this.stopAnnouncements)&&this.listenToAnnouncements(this.announcements&&!!this.hass&&this.isConnected),e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass);let t=this._pluginWindow?.node;e.has("hass")&&t&&"hass"in t&&(t.hass=this.hass),this._central&&!this.centralOpen&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1),e.has("centralOpen")&&this.centralOpen&&(this._central=!0),e.has("clock")&&(clearInterval(this.clockTimer),this.clockTimer=this.clock?setInterval(()=>this._now=Date.now(),1e4):void 0);let n=this.viewer;if(!n)return;if(this.shownPacks!==zn()&&(this.shownPacks=zn(),n.setPacks([...Xr()]),this.hass&&this.building&&n.setParked(No(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),a=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,n.setStartView(this.startViewOf()),n.setBuilding(this.shownBuilding(this.hass)),n.setMap(this.building?.settings.map,this.building?.settings.north??0),a&&this.floorId===null&&n.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(e.has("building")||e.has("theme")||e.has("ownLook")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let o=this.markersOutside?["markersOutside","floorId","roomId"]:["markersOutside"],i=this.pluginsDirty||["building","markerMode","heatMode","flows","alerts","dimmed",...o].some(s=>e.has(s));if(this.pluginsDirty=!1,(i||e.has("hass"))&&this.syncDevices(i),e.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage")||e.has("_phoneStage"))&&n.setLabelInset(this._thumbs.length&&!this._phoneStage?this.narrowThumbs?136:184:0),e.has("floorId")&&n.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&n.selectRoom(this.roomId),e.has("outsideOpen")&&e.get("outsideOpen")!==void 0){let s=this.building?.settings.outside_view;this.outsideOpen&&s?n.showView(s):!this.outsideOpen&&s&&this.floorId===null&&!this.roomId&&n.resetView()}e.has("tapInRoom")&&n.setTapInRoom(this.tapInRoom),e.has("wallMode")&&n.setWallMode(this.wallMode),e.has("solidWalls")&&n.setPaintedWalls(this.solidWalls),e.has("glassWalls")&&n.setGlassWalls((this.glassWalls??20)/100),e.has("explode")&&n.setExplode(this.explode),e.has("keepRoof")&&n.setKeepRoof(this.keepRoof),e.has("keepCamera")&&n.setKeepCamera(!!this.keepCamera),e.has("plain")&&n.setPlain(!!this.plain),e.has("rightBack")&&n.setRightBack(!!this.rightBack),e.has("zoom")&&n.setZoom(this.zoom??1),e.has("floorStack")&&n.setFloorStack(this.floorStack),e.has("theme")&&n.setTheme(this.theme),e.has("_locked")&&n.setNavigationLocked(this._locked),e.has("accent")&&n.setAccent(this.accent??null),(e.has("ownLook")||e.has("building"))&&n.setOwnLook(this.filledOwnLook),e.has("furnitureColors")&&n.setFurnitureColors(this.furnitureColors??null),e.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),(e.has("weather")||e.has("weatherEntityId")||e.has("weatherDensity")||e.has("timeOfDay"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low),e.has("showStats")&&n.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}shownFor=null;framePictureData=new Map;framePictures(e,t){let n=[];for(let o of t.floors)for(let i of o.notes??[])i.photo?.startsWith("image:")&&this.storedPicture(e,i.photo.slice(6));for(let o of t.floors)for(let i of o.furniture){if(!i.picture||!$r(e,i))continue;let s=ai(e,i.picture,a=>this.storedPicture(e,a));s&&n.push({furnitureId:i.id,floorId:o.id,url:s,border:i.picture_border??0,fit:i.picture_fit==="contain"?"contain":"cover"})}return n}storedPicture(e,t){let n=this.framePictureData.get(t);return n!==void 0?n||null:(this.framePictureData.set(t,""),Li(e,t).then(o=>{this.framePictureData.set(t,o),this.syncDevices(!0)}).catch(()=>{}),null)}shownBuilding(e){let t=this.building,n=si(e,t),o=t.floors.filter(a=>a.layer&&this.hiddenLayers.has(a.id)).map(a=>a.id),i=[...n,...o.map(a=>`layer:${a}`)].join(",");if(this.shownFor?.building===t&&this.shownFor.key===i)return this.shownFor.shown;let s=ku(t,n);return this.shownFor={building:t,key:i,shown:o.length?{...s,floors:s.floors.filter(a=>!o.includes(a.id))}:s},this.shownFor.shown}hiddenLayers=(()=>{try{return new Set(JSON.parse(localStorage.getItem("nextfloor.hidden_layers")??"[]"))}catch{return new Set}})();toggleLayer(e){this.hiddenLayers.has(e)?this.hiddenLayers.delete(e):this.hiddenLayers.add(e);try{localStorage.setItem("nextfloor.hidden_layers",JSON.stringify([...this.hiddenLayers]))}catch{}this.viewer&&this.building&&this.viewer.setBuilding(this.shownBuilding(this.hass)),this.requestUpdate()}renderLayers(){let e=(this.building?.floors??[]).filter(t=>t.layer);return!e.length||this.clean?f:m`<div class="nf-layers" role="group" aria-label=${R(this.hass,"floor_layer")}>
      ${e.map(t=>m`<button class="nf-chip" aria-pressed=${!this.hiddenLayers.has(t.id)} @click=${()=>this.toggleLayer(t.id)}>${this.hiddenLayers.has(t.id)?"\u25CC":"\u{1F441}"} ${t.name}</button>`)}
    </div>`}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let o=this._travel,i=o&&!o.loading?Mt(this.hass,o.history,o.t):this.hass;if((e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=Ut(i,n.floors),this.furnitureLinks=nt(i,n.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?fl(i,n,this.weatherEntityId,this.openingLinks):null,this.watched=kl({hass:i,building:n,openingLinks:this.openingLinks,furnitureLinks:this.furnitureLinks,needsRoomSensors:this.heatMode!=="none"||this.roomLabels,alertSources:this.alertSrc,weatherEntityId:this.weatherEntityId}),e=!0),!(e||this.watched.some(v=>this.shownStates.get(v)!==i.states[v])))return;si(i,n).join(",")!==this.shownFor?.key&&t.setBuilding(this.shownBuilding(i)),this.shownStates=new Map(this.watched.map(v=>[v,i.states[v]])),this.refreshToday(n),this.refreshForecast(n);let a=Xt(i,n),l=na(i,n.floors.some(v=>v.layer&&this.hiddenLayers.has(v.id))?this.shownBuilding(i):n);this.placementInfo=new Map(l.map(v=>[v.id,{floorId:v.floorId,roomId:v.roomId,x:v.x,z:v.z,y:v.y,rotation:v.rotation??0}]));let u=this.furnitureMarkers(i,n,new Set(l.map(v=>v.id)),new Set(a.map(v=>v.powerEntity)));a.push(...u.consumers);let c=en(i,n,a,Fe(n,v=>this.furnitureLinks?.get(v.id)?.power??null)),d=new Map(a.filter(v=>v.id!==v.powerEntity).map(v=>[v.id,v.power]));this.confirmSet=rt(i,n.floors);let p=new Set(this.liveCardsOn?this._liveCards.flatMap(v=>v.kind==="media"?[v.media.entity]:v.kind==="car"?[v.spot]:[]):[]);for(let v of n.floors)for(let x of v.outdoor??[]){if(!x.area_id&&!x.temp_entity&&!x.pump_entity)continue;let B=x.temp_entity?i.states[x.temp_entity]:void 0,z=x.pump_entity?i.states[x.pump_entity]:void 0,[L,de]=Le(x.points),je=B&&Number.isFinite(Number(B.state))?`${O(i,ce(i,Bn(Number(B.state),B.attributes.unit_of_measurement)),1)} ${ne(i)}`:"",lt=!!z&&Q(z);l.push({id:x.area_id?`outdoor:${x.id}`:x.pump_entity??x.temp_entity,floorId:v.id,roomId:null,x:L,z:de,y:In(v,x,L,de)+.7,icon:ke(x.type==="pool"?"pool":x.type==="terrace"?"table-chair":"tree-outline"),name:x.area_id&&i.areas?.[x.area_id]?.name||R(i,`out_${x.type}`),text:[je,lt?R(i,"pool_pump_on"):""].filter(Boolean).join(" \xB7 "),active:lt,unavailable:!1,glow:null,show:"always"})}let h=new Map;for(let v of n.floors){for(let x of v.placements)x.pin_offset&&h.set(`${v.id}:${x.entity_id}`,x.pin_offset);for(let x of v.furniture)x.pin_offset&&h.set(`f:${x.id}`,x.pin_offset)}let w=v=>{let x=v.lamp?void 0:(v.furnitureId?h.get(`f:${v.furnitureId}`):void 0)??h.get(`${v.floorId}:${v.id}`);return x?{...v,x:v.x+(x.x??0),z:v.z+(x.z??0),y:v.y+(x.y??0)}:v};t.setDevices([...[...l,...u.markers].map(w).map(v=>{let x=v.show==="no_power"||"energyDevice"in v&&v.energyDevice?null:d.get(v.id)??null,B={...v,power:x,powerText:x===null?void 0:se(i,x),effect:this.dimmed?void 0:v.effect,text:this.subMeterText(i,n,c,v.furnitureId)??v.text},z=v.ownName&&(v.showName||this.markerNames)?v.ownName:"",L=p.has(v.id)||!!v.furnitureId&&p.has(v.furnitureId);return{...B,pin:this.showPin(B)&&!L,full:v.show==="always",caption:z}})]),t.setPickTargets(u.targets,this.openingTargets(),this.secondBlinds()),t.setScreens(u.screens),t.setFridgeDoors(Cs(i,n.floors)),t.setCovers(qs(i,n)),t.setRobots(this.robotInfos(i,n));let b=new Map;for(let v of n.floors)for(let x of v.furniture)!q(x.type)?.pet||!x.room_sensor||x.room_sensor==="none"||b.set(x.id,ho(i,v.rooms.filter(B=>B.points.length>=3),null,x.room_sensor)?.id??null);b.size&&t.setPetRooms(b),t.setRoofWindows(cl(i,n)),t.setParked(No(i,n)),t.setGateStates(Tl(i,n));let g=new Map(n.floors.flatMap(v=>v.openings.map(x=>[x.id,x.type]))),_=new Map([...this.openingLinks].map(([v,x])=>[v,Ee(i,x,g.get(v))]));t.setOpeningStates(_),this.setAlerts(this.alertSrc?Ho(i,n,this.alertSrc,this.openingLinks):[]),this.watchLostContacts(i);let S=[...l,...u.markers].map(v=>`${v.id}:${v.glow?`${v.glow.level.toFixed(1)}/${v.glow.color.map(x=>x.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[..._].map(([v,x])=>`${v}:${x.open}:${x.cover===null?"-":x.cover.toFixed(1)}:${x.cover2==null?"-":x.cover2.toFixed(1)}`).join(";");if(S!==this.thumbSig){let v=this.thumbSig==="";this.thumbSig=S,v||this.scheduleThumbs(1500)}let $=Ul(i,n,a,n.energy.advanced?v=>this.furnitureLinks?.get(v.id)?.power??null:void 0),k=this.liveCars(i,n);for(let v of k){if(!v.car.home||!v.car.charging&&!v.car.plugged)continue;let x=n.floors.flatMap(L=>L.furniture.filter(de=>de.type==="wallbox").map(de=>({floorId:L.id,x:de.x,z:de.z,y:1}))).sort((L,de)=>Math.hypot(L.x-v.at.x,L.z-v.at.z)-Math.hypot(de.x-v.at.x,de.z-v.at.z))[0],B=x&&x.floorId===v.at.floorId&&Math.hypot(x.x-v.at.x,x.z-v.at.z)<9,z=x??dn(n);!z||!v.car.charging&&!B||$.arcs.push({key:`car:${v.spot}`,from:z,to:{...v.at,y:.8},power:v.car.charging?v.car.chargingW??7e3:0,color:[80,175,255],...B?{via:[{...z,y:.35},{floorId:v.at.floorId,x:(z.x+v.at.x)/2,z:(z.z+v.at.z)/2,y:.08},{...v.at,y:.5}],cable:!0}:{}})}let y=dn(n);for(let v of this.liveHeatPumps(n)){let x=v.pump.heat??(v.pump.mode==="heating"||v.pump.mode==="water"?(v.pump.power??0)*(v.pump.cop??3):0);y&&x>100&&v.pump.mode!=="cooling"&&$.arcs.push({key:`heat:${v.id}`,from:{floorId:v.floorId,x:v.x,z:v.z,y:.8},to:y,power:x,color:[255,120,40]})}let F=(this.flows??this._flows)&&!this.dimmed;t.setLiveEnergy(F?$.arcs:[],F?$.sparks:[]),JSON.stringify($)!==JSON.stringify(this._liveEnergy)&&(this._liveEnergy=$);let C=this.liveMedia(i,n).filter(v=>v.playing&&!this.dimmed);t.setLiveSound(C.filter(v=>v.rings>0).map(v=>({id:v.entity,at:v.at,color:v.color,level:v.volume??.5,size:v.rings})),al(C).map(([v,x])=>[v.at,x.at])),this.syncLhCards(t,n,$,k,C),t.setLiveScreens(this.dimmed?[]:dl(i,n,this.furnitureLinks)),t.setPictures(this.framePictures(i,n)),t.setLiveWater(this.dimmed?[]:ll(i,n,this.furnitureLinks));let E=Za(i,n);t.setPersons(E);let A=Ya(i,n,this.openingLinks,E);t.setFloorInfo(new Map([...A].map(([v,x])=>[v,Ja(i,x)])));let P=i.config,N=this.timeOfDay!=null&&P?.latitude!==void 0&&P.longitude!==void 0?Xe(dt(this.timeOfDay,P.time_zone),P.latitude,P.longitude):hl(i);t.setSun(N),t.setLocation(P?.latitude!==void 0&&P.longitude!==void 0?{latitude:P.latitude,longitude:P.longitude,zone:P.time_zone}:null);let V=this.weather&&!this.dimmed?Dl(i,Ge(i,this.weatherEntityId??n.settings.weather_entity)):null,G=V?Pl(Hl(V,n.settings.weather_effects),this.weatherDensity):null;this.cloud=G?.cloud??0,this._sky=pl(N?.elevation??null,this.cloud),t.setSky(this.weather&&!this.dimmed?{weather:G,sun:N,north:n.settings.north??0,sky:this.skyColor(),disc:(n.settings.weather_effects??["sky"]).includes("sky"),low:this._low}:null),this.applyTint();let X=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(X)!==JSON.stringify(this._energy)&&(this._energy=X)}watchLostContacts(e){let t=!!this.alertSrc&&!this._travel&&_l(e,this.alertSrc);t&&!this.contactTimer&&(this.contactTimer=setInterval(()=>{let n=this.building;this.alertSrc&&n&&this.hass&&this.openingLinks&&!this._travel&&this.setAlerts(Ho(this.hass,n,this.alertSrc,this.openingLinks))},6e4)),!t&&this.contactTimer&&(clearInterval(this.contactTimer),this.contactTimer=void 0)}setAlerts(e){let t=e.map(i=>`${i.kind}:${i.entity}`),n=e.filter((i,s)=>!this.seenAlerts.has(t[s])&&!pr.has(i.kind));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(i=>`${i.kind}:${i.entity}`).join()&&(this._alerts=e);let o=e.some(i=>!pr.has(i.kind));o&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!o&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(e.kind==="own"&&e.tap!=="room"){e.tap==="toggle"?this.hass.callService("homeassistant","toggle",{entity_id:e.entity}):fe(this,e.entity);return}if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,o=this.hass,i=n?.floors.find(c=>c.id===e),s=i?.rooms.find(c=>c.id===t);if(!n||!o||!i||!s)return;let a=xl(n.settings.room_double_tap,this.roomDoubleTap),l=Sl(o,i,s,this.furnitureLinks,this.confirmSet,a);if(!l.length)return;let u=l.some(c=>o.states[c]?.state==="on");o.callService("homeassistant",u?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let o=null;if(this.heatMode!=="none"&&this.heatMode!=="values"&&this.heatMode!=="wifi"){let a=this.heatMode,l=Oa(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l;let u=ot(new Date,n.config?.latitude??50);o=new Map([...l].map(([c,d])=>[c,Na(a,d,u)]))}let i=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let u=Y(n,a,l,"temperature"),c=Y(n,a,l,"humidity"),d=Y(n,a,l,"co2"),p=or(d,c,St(u,c)),h=[u!==null?`${O(n,ce(n,u),1)} ${ne(n)}`:null,c!==null?`${O(n,c,0)} %`:null,d!==null?`${O(n,d,0)} ppm`:null,p?`\u{1F4A8} ${R(n,`air_${p}`)}`:null].filter(w=>!!w);h.length&&i.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(i),!o)for(let a of t.floors)for(let l of a.rooms){let u=l.floor_heating?n.states[l.floor_heating]:void 0;u&&(u.entity_id.startsWith("climate.")?u.attributes.hvac_action==="heating":u.state==="on"||u.state==="open")&&(o??=new Map).set(l.id,[.55,.24,.08])}if(this._alerts.length){o??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(pr.has(l.kind))continue;let u=bl(l.kind).map(c=>c*a);if(l.roomId)o.set(l.roomId,u);else for(let c of t.floors)for(let d of c.rooms)o.set(d.id,u)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let s=o?[...o].map(([a,l])=>`${a}:${l.map(u=>u.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(o))}furnitureMarkers(e,t,n,o){let i=[],s=[],a=new Map,l=new Map,u=Qt(t);for(let p of t.floors)if(!(p.layer&&this.hiddenLayers.has(p.id)))for(let h of p.furniture){if(!$r(e,h))continue;let w=this.furnitureLinks.get(h.id),b=this.stateFaces(e,h);b.length&&a.set(h.id,{color:b[0].color,level:b[0].level,faces:b});let g=Fn(h.type);if(g&&h.care_entity){let x=this.careMarker(e,p,h,g,h.care_entity);x&&(i.push(x.marker),x.glow&&a.set(h.id,{color:x.glow,level:.9,faces:[{part:"all",color:x.glow,level:.9}]}),l.set(h.id,h.care_entity));continue}let _=q(h.type);if(h.cover_entity&&Tn(_)&&l.set(h.id,h.cover_entity),_?.gangs){for(let B of(h.gang_entities??[]).slice(0,_.gangs)){let z=B&&B!=="none"?De(e,B):null,L=z?j(e.states[z]):null;z&&L!==null&&!o.has(z)&&(o.add(z),s.push({id:B,powerEntity:z,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,L)}))}let x=Ks(e,(h.gang_entities??[]).slice(0,_.gangs),/socket/.test(h.type));x.length&&a.set(h.id,{color:x[0].color,level:x[0].level,gangs:x}),fo(h.gang_entities,_.gangs).length&&l.set(h.id,`gang:${h.id}`);continue}if(Nn(h.type)){let x=this.lampMarker(e,p,h,w?.entity??null),B=w?.power?j(e.states[w.power]):null;if(w?.power&&B!==null&&(B>=1&&(x.text=x.text?`${x.text} \xB7 ${it(e,B)}`:it(e,B)),o.has(w.power)||(o.add(w.power),s.push({id:x.id,powerEntity:w.power,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,B)}))),i.push(x),h.type==="ceiling_fan"){let z=w?.fan?e.states[w.fan]:void 0;x.spin=yu(z),z&&!n.has(z.entity_id)&&(n.add(z.entity_id),i.push({...x,id:z.entity_id,y:Math.max(.5,x.y-.3),icon:h.icon?ke(h.icon):vt("fan"),name:h.name||W(e,z.entity_id),text:ym(e,z),active:Q(z),unavailable:I(z),glow:null,lamp:null,spin:void 0,pickable:void 0,effect:void 0}))}continue}let S=co(h.type)?Ps(e,h,x=>`${O(e,ce(e,x),1)} ${ne(e)}`):null,$=co(h.type)?null:Is(e,h.temp_entity),k=$===null?"":`\u{1F321} ${O(e,ce(e,$),1)} ${ne(e)}`,y=h.type==="home_battery"?h.soc:h.type==="wallbox"?h.status:S?h.temp_entity&&h.temp_entity!=="none"?h.temp_entity:h.temp_entity2:$!==null?h.temp_entity:null,F=y&&y!=="none"?y:null,T=w??(F?{entity:null,power:null}:void 0);if(!T)continue;let C=h.type==="home_battery"?F??T.entity??T.power:T.entity??T.power??F;l.set(h.id,C);let E=T.entity?e.states[T.entity]:void 0,A=u.has(h.id),P=A?!!h.meter_invert:h.type==="meter"?t.energy.grid_invert&&!h.export:h.type==="home_battery"?t.energy.battery_invert&&!h.charge:!1,N=T.power?j(e.states[T.power],P):null,V=h.type==="home_battery"&&h.charge&&h.charge!=="none"?h.charge:h.type==="meter"&&!A&&h.export&&h.export!=="none"?h.export:null,G=V?j(e.states[V]):null;G!==null&&(N=Math.max(0,N??0)-Math.max(0,G)),T.power&&N!==null&&!o.has(T.power)&&(o.add(T.power),s.push({id:C,powerEntity:T.power,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,N),wallbox:h.type==="wallbox"||void 0}));let U=(N??0)>10||E?.state==="on"||E?.state==="running"||Wn(E)&&Q(E);if((h.type==="radiator"||_)&&E&&D(E.entity_id)==="climate"){let x=E.attributes;if(x.hvac_action==="heating"){let B=typeof x.temperature=="number"&&typeof x.current_temperature=="number"?x.temperature-x.current_temperature:1,z=!!_&&!_.parts.some(L=>L.screen);a.set(h.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,B)),heat:z||void 0})}}else(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&U?a.set(h.id,{color:[.3,.85,1],level:.8}):_&&U&&!_.light&&_.parts.some(x=>x.glow||x.screen)&&a.set(h.id,{color:[.3,.85,1],level:.8,leds:!0});if(Xo(h.type)){let x=Qo(e,T.entity??T.power);if(x&&x.progress!==null&&(x.printing||/pause/.test(x.status))){let B=x.filaments[0]??"#38bdf8",z=[1,3,5].map(L=>parseInt(B.slice(L,L+2),16)/255);a.set(h.id,{color:z,level:.9,print:Math.max(.02,x.progress/100)})}}if(h.type==="home_battery"&&F){let x=Number(e.states[F]?.state);Number.isFinite(x)&&a.set(h.id,{color:x>60?[.29,.87,.5]:x>25?[.98,.8,.08]:[.97,.44,.44],level:.95,fill:x/100})}if(E&&qn(h.type)){let x=D(E.entity_id)==="light"?Ae(E):null,B=D(E.entity_id)==="media"&&["playing","on","paused","idle"].includes(E.state),z=x?x.color:Q(E)||B?[.22,.88,1]:null;z&&a.set(h.id,{color:z,level:E.state==="playing"?1:.6,halo:h.ambilight??1})}if(n.has(C))continue;n.add(C);let X=T.entity?D(T.entity):null,v=p.rooms.find(x=>x.points.length>=3&&H([h.x,h.z],x.points));i.push({id:C,floorId:p.id,roomId:v?.id??null,x:h.x,z:h.z,y:li(h)+le(p,h),icon:h.icon?ke(h.icon):vt(X??"switch"),name:h.name||(T.entity?W(e,T.entity):he(e,h.type)),ownName:h.name||void 0,showName:!!h.show_name,text:[S?S.text:h.type==="home_battery"?this.batteryText(e,F,N):h.type==="wallbox"?this.wallboxText(e,F,N):h.type==="meter"?A?N===null?"":se(e,N):this.meterText(e,N):E&&(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&U&&_o(e,Zt(e,T.entity??T.power))!==null?R(e,"care_time_left",{time:js(_o(e,Zt(e,T.entity??T.power)))}):E?[ee(e,E),N!==null&&N>5&&!Wn(E)?se(e,N):""].filter(Boolean).join(" \xB7 "):N!==null?se(e,Math.max(0,N)):"",k].filter(Boolean).join(" \xB7 "),active:S?.warm||$!==null&&$>=Hs||(E?Q(E):(N??0)>5),unavailable:E?I(E):!1,glow:null,furnitureId:h.id,energyDevice:h.type==="inverter"||h.type==="home_battery"||h.type==="wallbox"||h.type==="meter",readout:!!S||void 0,show:h.marker??void 0,fromFurniture:!0})}let c=this.heatMode==="wifi";for(let p of i){let h=p.furnitureId?t.floors.flatMap(b=>b.furniture).find(b=>b.id===p.furnitureId):void 0;if(!h||!ei(h.type))continue;let w=ti(e,this.furnitureLinks.get(h.id)?.entity??this.furnitureLinks.get(h.id)?.power??null);w&&(w.clients!==null&&(p.text=R(e,"wifi_clients",{n:w.clients})),c&&(p.wedge={angle:360,reach:9,near:0,color:su(w),opacity:.4,through:!0,walls:!1},p.show="always"))}let d=Ml(t,i);this.tapPins=d.pins;for(let p of t.floors.flatMap(h=>h.furniture))p.tap?.action&&l.set(p.id,`tap:${p.id}`);for(let{floor:p,item:h}of d.bare){let w=p.rooms.find(g=>g.points.length>=3&&H([h.x,h.z],g.points)),b=h.name||he(e,h.type);i.push({id:`tap:${h.id}`,floorId:p.id,roomId:w?.id??null,x:h.x,z:h.z,y:li(h)+le(p,h),icon:ke(h.icon||"gesture-tap-button"),name:b,ownName:h.name||void 0,showName:!!h.show_name,text:"",active:!1,unavailable:!1,glow:null,furnitureId:h.id,show:h.marker??void 0,fromFurniture:!0})}return{markers:i,consumers:s,screens:a,targets:l}}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(n.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||le(e,o)>.12)return!1;let i=q(o.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:H([o.x,o.z],t)||On(o).some(s=>H(s,t))}).map(o=>On(o))}robotInfos(e,t){let n=[],o=Mu(e),i=$u(e,o,t.settings.vacuum_map??null),s=!1;for(let a of t.floors){for(let l of a.furniture){if(l.type!=="robot_vacuum")continue;let u=this.furnitureLinks.get(l.id)?.entity??null,c=u?e.states[u]?.state:void 0,d=c==="cleaning"?"cleaning":c==="returning"?"returning":c==="error"?"error":c==="docked"||!c?"docked":"idle",p=l.rotation*Math.PI/180,h=l.d*.14,w=[l.x-Math.sin(p)*h,l.z+Math.cos(p)*h],b=a.rooms.filter(C=>C.points.length>=3),_=(d==="cleaning"?ho(e,b,u,Zn(e,u,l.room_sensor)):null)??b.find(C=>H(w,C.points)),S=d==="cleaning"&&_?this.robotObstacles(a,_.points):[],$=o?Date.parse(e.states[o]?.last_updated??""):Number.NaN,k=!Number.isFinite($)||Date.now()-$<120*1e3,y=u?.startsWith("vacuum.")&&i&&!s&&(k||d!=="cleaning"&&d!=="returning")?i:null;y&&(s=!0);let F=u?Date.parse(e.states[u]?.last_changed??""):Number.NaN,T=d==="cleaning"||d==="returning"?null:Number.isFinite(F)?F:null;n.push({id:l.id,floorId:a.id,rest:w,restHeading:-p,mode:d,room:_?.points??null,roomId:_?.id??null,obstacles:S,track:y?.path??null,pose:y?.pose??null,settledAt:T})}for(let l of a.furniture){if(!/:(robot_mower|mower_dock)$/.test(l.type))continue;let u=this.furnitureLinks.get(l.id)?.entity??null;if(!u?.startsWith("lawn_mower."))continue;let c=e.states[u]?.state,d=c==="mowing"?"cleaning":c==="returning"?"returning":c==="error"?"error":c==="docked"||!c?"docked":"idle",p=[l.x,l.z],h=(a.outdoor??[]).filter(g=>g.type==="lawn"&&g.points.length>=3),w=h.find(g=>H(p,g.points))??[...h].sort((g,_)=>Vt(_.points)-Vt(g.points))[0],b=w?(a.outdoor??[]).filter(g=>g!==w&&g.type!=="lawn"&&g.points.some(_=>H(_,w.points))).map(g=>g.points):[];n.push({id:l.id,floorId:a.id,rest:p,restHeading:-l.rotation*Math.PI/180,mode:d,room:w?.points??null,roomId:w?.id??null,obstacles:b,y:w?In(a,w,p[0],p[1]):Cn(a),mower:!0})}}return n}batteryText(e,t,n){let o=t?Number(e.states[t]?.state):Number.NaN,i=[];return Number.isFinite(o)&&i.push(`${O(e,o,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${se(e,Math.abs(n))}`),i.join(" \xB7 ")}subMeterText(e,t,n,o){let i=o?$a(t,n,o):null;return i?se(e,i.use)+(i.unmetered===null?"":` \xB7 ${R(e,"meter_unmetered",{w:se(e,i.unmetered)})}`):null}meterText(e,t){return t===null?"":Math.abs(t)<5?se(e,0):`${R(e,t<0?"energy_grid_export":"energy_grid_import")} ${se(e,Math.abs(t))}`}wallboxText(e,t,n){let o=t?e.states[t]:void 0,i=String(o?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(i),a=o?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?R(e,"wallbox_charging"):a?R(e,"wallbox_plugged"):o&&!I(o)&&!o.entity_id.startsWith("binary_sensor.")?ee(e,o):"",u=n!==null&&n>50?se(e,n):"";return[l,u].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],o=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,s]of o){if(!i||i==="none")continue;let a=e.states[i];if(!a||I(a)||!(Q(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let u=D(i)==="light"?Ae(a):null;n.push({part:s,color:u?u.color:[1,.71,.28],level:u?u.level:.85})}return n}careMarker(e,t,n,o,i){let s=e.states[i];if(!s)return null;let a="",l=!1,u=null;if(o==="bin"){let p=Yn(s);a=p===null?ee(e,s):p===0?R(e,"care_bin_today"):p===1?R(e,"care_bin_tomorrow"):R(e,"care_bin_days",{n:p}),l=p!==null&&p<=1,l&&(u=[1,.72,.28])}else if(o==="mail")l=Gs(s),a=R(e,l?"care_mail_yes":"care_mail_no"),l&&(u=[1,.85,.3]);else{let p=Us(s,n.thirsty_below??20);l=!!p?.thirsty,a=p?Number.isFinite(p.moisture)?`${R(e,l?"care_plant_thirsty":"care_plant_ok")} \xB7 ${Math.round(p.moisture)} %`:R(e,l?"care_plant_thirsty":"care_plant_ok"):ee(e,s),l&&(u=[1,.45,.3])}let c=t.rooms.find(p=>p.points.length>=3&&H([n.x,n.z],p.points)),d={bin:"mdi:trash-can-outline",mail:"mdi:mailbox-outline",plant:"mdi:sprout-outline"}[o];return{glow:u,marker:{id:i,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:li(n)+le(t,n),icon:n.icon?ke(n.icon):ke(d),name:n.name||he(e,n.type),ownName:n.name||void 0,showName:!!n.show_name,text:a,active:l,unavailable:I(s),glow:null,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0,care:!0}}}lampMarker(e,t,n,o){let i=o?e.states[o]:void 0,s=(n.extra_lights??[]).map(g=>e.states[g]).filter(g=>!!g),a=s.find(g=>Q(g)),l=q(n.type),u=ms[n.type]??l?.light??"floor",c=t.rooms.some(g=>g.points.length>=3&&H([n.x,n.z],g.points)),d=u==="strip"&&!c?Bt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!l?n.mount_y:l||u==="wall"||u==="strip"?le(t,n):u==="table"?Hn(t,n.x,n.z):u==="bollard"||u==="garden"?Bt(t,n.x,n.z):0,p=t.rooms.find(g=>g.points.length>=3&&H([n.x,n.z],g.points)),h=Pn(t,n),w=l?l.mount==="ceiling"?Math.max(.5,d-.15):d+n.h+.2:{ceiling:h-.3,downlight:h-.25,spot:h-.35,panel:h-.25,pendant:Math.max(.6,h-n.h-.25),fan:Math.max(.6,h-n.h-.2),floor:d+n.h+.25,uplight:d+n.h+.25,table:d+n.h+.2,wall:d+n.h+.2,strip:n.upright?d+n.w+.15:Math.max(.3,d-.2),bollard:d+n.h+.25,garden:d+n.h+.25}[u],b={id:o??`lamp:${n.id}`,floorId:t.id,roomId:p?.id??null,x:n.x,z:n.z,y:w,icon:vt("light"),name:n.name||(o?W(e,o):he(e,n.type)),text:i&&(Q(i)||!a)?ee(e,i):a?W(e,a.entity_id):"",active:(i?Q(i):!1)||!!a,unavailable:i?I(i):!1,glow:i||s.length?yo(ys(i,s,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.glow_scale):null,lamp:u,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:d,pickable:!!o,furnitureId:n.id,pack:l?n.type:null,lightY:l?l.mount==="ceiling"?d:d+n.h*.85:void 0,ceiling:h,effect:i?.state==="on"?er(n,ea(e,n,o)):void 0,variant:n.variant,show:n.marker??void 0,fromFurniture:!0};return i&&o?ko(e,b,i,!1):b}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always")return!0;if(e.show==="active"||this.building?.settings.motion_markers_active&&ws(this.hass,e.id)){if(!e.active)return!1;if(e.show==="active")return!0}if(this.markersOutside&&!(this.roomId&&e.roomId===this.roomId))return this.markersOutside.includes(gs(e.id,!!e.lamp));if(this.markerMode==="all")return!0;if(e.lamp)return!1;let t=D(e.id);return t==="light"?!1:e.fromFurniture&&t==="fan"?!0:e.care?e.active:e.id.startsWith("tap:")||e.readout?!0:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let o=n.lock??n.cover??n.contact??n.tilt;o&&e.set(t,o)}return e}downloadStl(){let e=this.viewer?.exportStl(10);if(!e)return;let t=URL.createObjectURL(new Blob([e],{type:"model/stl"})),n=document.createElement("a");n.href=t,n.download=`nextfloor-${new Date().toISOString().slice(0,10)}.stl`,n.click(),setTimeout(()=>URL.revokeObjectURL(t),5e3)}secondBlinds(){let e=new Map;for(let[t,n]of this.openingLinks??[])n.cover2&&!n.lock&&n.cover&&e.set(t,n.cover2);return e}get filledOwnLook(){return zl(this.building?.settings.own_look,this.ownLook)}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building||this._phoneStage)return f;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),n=this._thumbsCompact,o=()=>{if(this._thumbsCompact=!n,!this.thumbsFolded)try{localStorage.setItem("nextfloor.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return m`<nav class="nf-thumbs ${this.narrowThumbs?"nf-thumbs-small":""} ${this._shortStage?"nf-thumbs-short":""} ${n?"nf-thumbs-compact":""}" aria-label=${R(this.hass,"floors")}>
      <button class="nf-thumbs-fold" title=${R(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${R(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${o}>${n?"\u25B8":"\u25C2"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${R(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>m`<button class="nf-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?f:m`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let o=D(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"?this._menu={entity:e,x:t,y:n}:fe(this,e)}onDeviceSwipe(e,t,n,o,i){let s=this.hass?.states[e];if(t==="start"){if(!s||I(s)||this.confirmSet.has(e))return!1;let l=D(e);if(l==="light"&&oi(s).dim){let u=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:u,value:u,x:o,y:i},!0}if(l==="fan"&&typeof s.attributes.percentage_step=="number"){let u=s.state==="on"&&typeof s.attributes.percentage=="number"?s.attributes.percentage:0;return this._swipe={entity:e,kind:"fan",start:u,value:u,x:o,y:i},!0}if(l==="cover"&&ii(s)){let u=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:u,value:u,x:o,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let u=performance.now();u-this.swipeSent>350&&(this.swipeSent=u,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):e.kind==="fan"?e.value<=0?this.hass.callService("fan","turn_off",{entity_id:e.entity}):this.hass.callService("fan","set_percentage",{entity_id:e.entity,percentage:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}openRoom(e,t){this.floorId===e&&this.roomId===t||(this.floorId!==e?(this.fire("floor-tap",{floorId:e}),setTimeout(()=>this.fire("room-tap",{floorId:e,roomId:t}),60)):this.fire("room-tap",{floorId:e,roomId:t}))}goTo(e){if(this._find=null,e.kind==="room"||e.kind==="circuit"){e.roomId&&this.openRoom(e.floorId,e.roomId);return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}listenToAnnouncements(e){if(!e){this.stopAnnouncements?.(),this.stopAnnouncements=null,clearTimeout(this.announceTimer);return}if(this.stopAnnouncements)return;let t=!1;this.stopAnnouncements=()=>t=!0,da(this.hass,n=>this.announce(n)).then(n=>{t?n():this.stopAnnouncements=n})}announce(e){let t=e;if(t?.reload===!0){(!t.template||t.template===this.templateName)&&setTimeout(()=>location.reload(),500+Math.random()*6e3);return}if(typeof e?.message!="string"||!e.message.trim()||!aa(e,this.screenName)||!la(e))return;let n=ua(e.message);this._announcement={message:e.message,until:Date.now()+n},clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announcement=null,n),ca(this.hass,e)}renderAnnouncement(){let e=this._announcement;return e?m`<button class="nf-announcement" role="alert" title=${R(this.hass,"close")} @click=${()=>this._announcement=null}>
      <span class="nf-announcement-icon" aria-hidden="true">📢</span><span class="nf-announcement-text">${e.message}</span>
    </button>`:f}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return f;let t=this._alerts.slice(0,3);return m`<div class="nf-alert-banner" role="alert">
      ${t.map(n=>m`<button class="nf-alert nf-alert-${n.kind}" style=${n.color?`border-left-color:${n.color}`:""} title=${Io(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Io(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?m`<span class="nf-alert-more">+${this._alerts.length-3}</span>`:f}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return f;let t=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this.roomId),n=t?K(this.hass,t).filter(i=>D(i)==="scene"||D(i)==="script").slice(0,6):[];if(!n.length)return f;let o=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return m`<div class="nf-scenes">
      ${n.map(i=>m`<button class="nf-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${W(this.hass,i,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return f;if(this._find===null)return m`<button class="nf-find-btn" title=${R(this.hass,"find")} aria-label=${R(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=gu(this.findIndex??=fu(this.hass,e),this._find);return m`<div class="nf-find">
      <input
        type="search"
        placeholder=${R(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="nf-find-close" aria-label=${R(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?m`<div class="nf-find-list">
            ${t.length?t.map(n=>m`<button @click=${()=>this.goTo(n)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Xn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?m`<small>${n.where}</small>`:f}</span>
                  </button>`):m`<p>${R(this.hass,"find_none")}</p>`}
          </div>`:f}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null)return f;let n=(g,_)=>R(t,g,_),o=m`<button
      class="nf-central-btn ${this._central?"nf-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return o;let i=this.floorId?e.floors.find(g=>g.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(g=>po(t,g).lights),l=s.flatMap(g=>po(t,g).covers),u=a.filter(g=>t.states[g]?.state==="on").length,c=!i,d=(g,_,S,$)=>{if($.length){if(c&&this._armed!==g){this._armed=g,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(_,S,{entity_id:$})}},p=(g,_,S,$,k)=>m`<button class="nf-btn ${this._armed===g?"nf-central-armed":""}" ?disabled=${!k.length} @click=${()=>d(g,S,$,k)}>
        ${this._armed===g?n("central_sure"):n(_)}
      </button>`,h=e.settings.favorite_floors??{},w=(e.settings.favorites??[]).filter(g=>t.states[g]&&(!h[g]||!i||h[g]===i.id)),b=this.buttons??e.settings.buttons??[];return m`${o}
      <div class="nf-central ${this.centralOpen?"nf-central-big":""}" role="dialog" aria-label=${n("central")}>
        <b>${i?i.name:n("central_house")}</b>
        <div class="nf-central-row">
          <span>${n("central_lights")}${a.length?m` <small>${u}/${a.length}</small>`:f}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(g=>t.states[g]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(g=>t.states[g]?.state==="on"))}
        </div>
        ${l.length?m`<div class="nf-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:f}
        <b>${n("central_favorites")}</b>
        ${w.length?m`<div class="nf-central-favs">
              ${w.map(g=>{let[_,S]=Bs(g),$=t.states[g],k=_==="homeassistant"&&$?.state==="on";return m`<button
                  class="nf-chip"
                  aria-pressed=${k||this._sceneFired===g}
                  ?disabled=${I($)}
                  @click=${()=>{t.callService(_,S,{entity_id:g}),this._sceneFired=g,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${W(t,g)}
                </button>`})}
            </div>`:b.length?f:m`<p class="nf-central-hint">${n("central_no_favorites")}</p>`}
        ${b.length?m`<div class="nf-central-favs">
              ${b.map(g=>m`<button
                  class="nf-chip nf-own-btn"
                  aria-pressed=${Vs(t,g)}
                  @click=${_=>{mo(t,_.currentTarget,g),g.action!=="service"&&(this._central=!1)}}
                >
                  ${g.icon?m`<ha-icon .icon=${g.icon.startsWith("mdi:")?g.icon:`mdi:${g.icon}`}></ha-icon>`:f}${g.label}
                </button>`)}
            </div>`:f}
      </div>`}toggleLock(){this._locked=!this._locked;try{localStorage.setItem(Au,this._locked?"1":"0")}catch{}}async openTravel(e){if(clearInterval(this.travelTimer),this.travelTimer=void 0,e===null||!this.hass){this._travel=null,this.syncDevices(!0);return}let t=Date.now(),n=t-e*36e5;this._travel={history:new Map,from:n,to:t,t:n,playing:!1,speed:e>24?3600:600,hours:e,moments:[],loading:!0};try{let o=await rn(this.hass,el(this.watched),n,t);if(!this._travel||this._travel.from!==n)return;this._travel={...this._travel,history:o,moments:tl(o,n,t),loading:!1}}catch{this._travel=null,this._error=R(this.hass,"travel_failed");return}this.syncDevices(!0)}travelTo(e){let t=this._travel;t&&(this._travel={...t,t:Math.min(t.to,Math.max(t.from,e))},this.syncDevices(!0))}playTravel(e){let t=this._travel;t&&(clearInterval(this.travelTimer),this.travelTimer=void 0,this._travel={...t,playing:e,t:e&&t.t>=t.to?t.from:t.t},e&&(this.travelTimer=setInterval(()=>{let n=this._travel;if(!n)return;let o=n.t+250*n.speed;o>=n.to&&this.playTravel(!1),this.travelTo(o)},250)))}renderTravel(){if(!this.hass||this.clean)return f;let e=a=>R(this.hass,a),t=this._travel;if(!t)return this.travelButton?m`<button class="nf-travel-btn" title=${e("travel")} aria-label=${e("travel")} @click=${()=>{this.openTravel(24)}}>⏪</button>`:f;let n=this.hass.language??navigator.language,o=new Intl.DateTimeFormat(n,{weekday:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t.t)),i=t.to-t.from||1,s=[[60,"travel_speed_min"],[600,"travel_speed_10min"],[3600,"travel_speed_hour"]];return m`<div class="nf-travel" role="group" aria-label=${e("travel")}>
      <button class="nf-travel-play" aria-label=${e(t.playing?"travel_pause":"travel_play")} ?disabled=${t.loading} @click=${()=>this.playTravel(!t.playing)}>${t.playing?"\u23F8":"\u25B6"}</button>
      <b class="nf-travel-when">${t.loading?e("travel_loading"):o}</b>
      <div class="nf-travel-track">
        <svg viewBox="0 0 1000 10" preserveAspectRatio="none" aria-hidden="true">${t.moments.map(a=>J`<rect x=${(a-t.from)/i*1e3} y="0" width="1.6" height="10" />`)}</svg>
        <input type="range" min=${t.from} max=${t.to} step="60000" .value=${String(t.t)} ?disabled=${t.loading} aria-label=${e("travel")} @input=${a=>this.travelTo(Number(a.target.value))} />
      </div>
      <select aria-label=${e("travel_speed")} @change=${a=>this._travel={...t,speed:Number(a.target.value)}}>
        ${s.map(([a,l])=>m`<option value=${a} ?selected=${t.speed===a}>${e(l)}</option>`)}
      </select>
      <button class="nf-travel-span" aria-pressed=${t.hours===24} @click=${()=>{this.openTravel(24)}}>24 h</button>
      <button class="nf-travel-span" aria-pressed=${t.hours===168} @click=${()=>{this.openTravel(168)}}>7 ${e("travel_days")}</button>
      <button class="nf-travel-live" @click=${()=>{this.openTravel(null)}}>● ${e("travel_live")}</button>
    </div>`}toggleWalk(){let e=this.viewer;e&&(this._walking?(e.stopWalk(),this._walking=!1):this._walking=e.startWalk()!==null,this._stick=null)}stickMove(e,t=!1){let n=e.currentTarget;if(t)n.setPointerCapture(e.pointerId);else if(!this._stick)return;let o=n.getBoundingClientRect(),i=o.width/2,[s,a]=[(e.clientX-o.left-i)/i,(e.clientY-o.top-i)/i],l=Math.hypot(s,a);l>1&&([s,a]=[s/l,a/l]),this._stick=[s,a],this.viewer?.setWalkStick(Math.abs(s)<.12?0:s,Math.abs(a)<.12?0:a)}stickEnd(){this._stick=null,this.viewer?.setWalkStick(0,0)}renderWalk(){if(!this.hass||this.clean||!this.walkButton&&!this._walking)return f;let e=n=>R(this.hass,n),t=this._stick??[0,0];return m`<button class="nf-walk-btn ${this._walking?"nf-walk-on":""}" title=${e(this._walking?"walk_stop":"walk")} aria-label=${e(this._walking?"walk_stop":"walk")} aria-pressed=${this._walking} @click=${()=>this.toggleWalk()}>
        ${this._walking?"\u2715":J`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2" /><path d="M10 21l2-6 3 3v5M9 12l1-4 4 1 3 3M8 9l-2 4" /></svg>`}
      </button>
      ${this._walking?m`<div class="nf-stick" @pointerdown=${n=>this.stickMove(n,!0)} @pointermove=${n=>this.stickMove(n)} @pointerup=${()=>this.stickEnd()} @pointercancel=${()=>this.stickEnd()}>
              <span style="transform:translate(${t[0]*34}px, ${t[1]*34}px)"></span>
            </div>
            <p class="nf-walk-hint">${e("walk_hint")}</p>`:f}`}renderLock(){if(!this.lockButton||!this.hass||this.clean)return f;let e=R(this.hass,this._locked?"lock3d_off":"lock3d_on");return m`<button class="nf-lock3d ${this._locked?"nf-lock3d-on":""}" title=${e} aria-label=${e} aria-pressed=${this._locked} @click=${()=>this.toggleLock()}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        ${this._locked?J`<path d="M8 11V8a4 4 0 0 1 8 0v3" />`:J`<path d="M8 11V8a4 4 0 0 1 7.5-2" />`}
      </svg>
    </button>`}renderClock(e=!1){if(!this.clock||!this.hass||this.clock==="top_left"&&!e)return f;let t=this.hass.language??navigator.language,n=new Date(this._now),o=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).format(n),i=new Intl.DateTimeFormat(t,{weekday:"long",day:"numeric",month:"long"}).format(n);return m`<div class="nf-clock nf-clock-${this.clock}" aria-hidden="true"><b>${o}</b><span>${i}</span></div>`}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return f;let e=R(this.hass,this.clean?"controls_show":"controls_hide");return m`<button
      class="nf-eye ${this.clean?"nf-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?J`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:J`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return f;let t=e.kind==="light"&&e.value<=0;return m`<div class="nf-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${W(this.hass,e.entity)}</span>
      <b>${t?R(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}tapPlate(e,t,n){let o=this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e),i=o?fo(o.gang_entities,q(o.type)?.gangs??0):[];if(i.length===1)return this.onDeviceTap(i[0],t,n);i.length>1&&(this._plate={ids:i,x:t,y:n})}renderPlate(){let e=this._plate;if(!e||!this.hass)return f;let t=this.hass,n=()=>this._plate=null;return m`<div class="nf-menu-backdrop" @click=${n}></div>
      <div class="nf-plate-menu" style="left:${Math.max(8,e.x-110)}px;top:${Math.max(8,e.y-20-e.ids.length*46)}px" role="menu">
        ${e.ids.map((o,i)=>{let s=t.states[o],a=Q(s)||s?.state==="on";return m`<button role="menuitem" class=${a?"on":""} @click=${()=>{n(),this.onDeviceTap(o,e.x,e.y)}}><b>${i+1}</b><span>${W(t,o)}</span><i>${s?ee(t,s):"\u2013"}</i></button>`})}
      </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return f;let t=this.renderRoot.querySelector(".nf-stage"),n=t?.clientWidth??800,o=t?.clientHeight??600,i=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return m`<div class="nf-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nf-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${(this.building?.settings.media_presets??[]).filter(a=>!a.speakers?.length||a.speakers.includes(e.entity))}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        .myPosition=${this.myPositionOf(e.entity)}
        @close=${()=>this._menu=null}
      ></nf-quick-menu>`}myPositionOf(e){for(let t of this.building?.floors??[])for(let n of t.openings){let o=this.openingLinks?.get(n.id);if(n.my_position!=null&&(o?.cover===e||o?.cover2===e))return n.my_position}return null}onDeviceTap(e,t=0,n=0){if(e.startsWith("lamp:")||this._travel)return;let o=e.startsWith("tap:")?e.slice(4):this.tapPins.get(e);if(o){let s=this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===o);s?.tap&&mo(this.hass,this,s.tap);return}if(this.pluginTapped(e))return;if(e.startsWith("gang:"))return this.tapPlate(e.slice(5),t,n);if(e.startsWith("outdoor:")){this.fire("room-tap",{floorId:null,roomId:"nf-outside"});return}if(e==="grid"){let s=this.building,a=s?s.energy.grid??Fe(s,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;a&&fe(this,a);return}let i=D(e);if(i==="cover"||i==="media"){this._menu={entity:e,x:t,y:n};return}if(i==="lock"){let s=uo(this.hass,e),a=W(this.hass,e);confirm(R(this.hass,s?"lock_confirm_lock":"lock_confirm_unlock",{name:a}))&&this.hass.callService("lock",s?"lock":"unlock",{entity_id:e});return}if(i&&_s.has(i)){if(this.confirmSet.has(e)&&!confirm(R(this.hass,"confirm_switch",{name:W(this.hass,e)})))return;oa(this.hass,e)}else fe(this,e)}pluginTapped(e){let t=this.hass?.states[e],n=this.placementInfo.get(e);if(!t||!n)return!1;let o=this.building?.floors.find(i=>i.id===n.floorId)?.placements.find(i=>i.entity_id===e);return Ji({hass:this.hass,entityId:e,state:t},n,o?.plugin??void 0,{showWindow:(i,s)=>{i&&"hass"in i&&(i.hass=this.hass),this._pluginWindow=i?{node:i,title:s?.title??""}:null},moreInfo:i=>fe(this,i??e)})}renderPluginWindow(){let e=this._pluginWindow;return e?m`<div class="nf-plugin-window" @pointerdown=${t=>t.stopPropagation()}>
      <div class="nf-pw-head"><span>${e.title}</span><button class="nf-pw-close" aria-label=${R(this.hass,"close")} @click=${()=>this._pluginWindow=null}>✕</button></div>
      <div class="nf-pw-body">${e.node}</div>
    </div>`:f}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("nextfloor.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}liveHeatPumps(e){let t=this.hass;if(!t)return[];let n=[];for(let o of e.floors)for(let i of o.furniture){if(!ou(i.type))continue;let s=this.furnitureLinks?.get(i.id),a=ru(t,s?.entity??s?.power??null);a&&n.push({id:i.id,name:i.name||he(t,i.type),floorId:o.id,x:i.x,z:i.z,at:{floorId:o.id,x:i.x,z:i.z,y:le(o,i)+i.h+.5},pump:a})}return n}livePrinters(e){let t=this.hass,n=[];if(!t)return n;for(let o of e.floors)for(let i of o.furniture){if(!Xo(i.type))continue;let s=this.furnitureLinks?.get(i.id),a=Qo(t,s?.entity??s?.power??null);!a||!a.printing&&!/pause|finish|complete|error/.test(a.status)||n.push({id:i.id,name:i.name||he(t,i.type),at:{floorId:o.id,x:i.x,z:i.z,y:le(o,i)+i.h+.5},printer:a})}return n}liveCars(e,t){let n=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="parking")continue;let s=uu(e,i);if(!s||s.soc===null&&s.range===null&&s.locked===null&&s.climateOn===null)continue;let a=Co(e,i),l=a?yl(i,a):null,u=i.name||(a?he(e,a):he(e,i.type));n.push({spot:i.id,name:u,at:{floorId:o.id,x:i.x,z:i.z,y:le(o,i)+(l?.h??.2)+.6},car:s})}return n}liveMedia(e,t){let n=[];for(let o of t.floors){for(let i of o.furniture){let s=this.furnitureLinks?.get(i.id)?.entity;s?.startsWith("media_player.")&&n.push({entity:s,name:i.name||he(e,i.type),at:{floorId:o.id,x:i.x,z:i.z,y:le(o,i)+i.h+.15},rings:i.sound_rings})}for(let i of o.placements)i.entity_id.startsWith("media_player.")&&n.push({entity:i.entity_id,name:i.name||W(e,i.entity_id),at:{floorId:o.id,x:i.x,z:i.z,y:(i.y??1.1)+.15},rings:i.sound_rings})}return sl(e,n)}refreshToday(e){let t=this.hass,n=e.settings.calendars??[],o=Math.max(1,Math.min(7,e.settings.today_days??1)),i=`${new Date().toDateString()}|${o}`;!t||!n.length||Date.now()-this.todayAt<9e5&&i===this.todayDay||(this.todayAt=Date.now(),this.todayDay=i,Ql(t,n,o).then(s=>this._todayItems=s))}refreshForecast(e){let t=this.hass,n=e.settings.forecast&&t?Ge(t,this.weatherEntityId??e.settings.weather_entity):null;if(!t||!n)return;let o=`${n}|${new Date().toDateString()}`;Date.now()-this.forecastAt<18e5&&o===this.forecastKey||(this.forecastAt=Date.now(),this.forecastKey=o,tu(t,n).then(i=>this._forecast=i))}renderForecast(e){let t=this.building,n=this.hass,o=t?.settings.forecast;if(!t||!n||!o||o.corner!==e||this.clean)return f;if(e==="top_right"&&(this.roomId||this.panelOpen))return f;let i=eu(this._forecast,Math.max(1,Math.min(7,o.days)));if(!i.length)return f;let s=Ge(n,this.weatherEntityId??t.settings.weather_entity),a=s?n.states[s]?.attributes:void 0,l=String(a?.temperature_unit??"\xB0"),u=String(a?.precipitation_unit??"mm"),c=n.language??navigator.language,d=new Intl.DateTimeFormat(c,{weekday:"short"}),p=h=>h===null?"\u2013":`${Math.round(h)}\xB0`;return m`<section class="nf-forecast" aria-label=${R(n,"forecast")}>
      <ul>
        ${i.map((h,w)=>m`<li>
            <span class="nf-fc-day">${w===0?R(n,"today"):d.format(new Date(h.day))}</span>
            <span class="nf-fc-icon" aria-hidden="true">${h.icon}</span>
            <span class="nf-fc-temp" title=${l}><b>${p(h.high)}</b> <small>${p(h.low)}</small></span>
            <span class="nf-fc-rain">${h.rain!==null&&h.rain>0?`\u{1F4A7}${h.rain.toLocaleString(c,{maximumFractionDigits:1})} ${u}`:h.chance!==null&&h.chance>0?`\u{1F4A7}${Math.round(h.chance)} %`:""}</span>
          </li>`)}
      </ul>
    </section>`}renderToday(){let e=this.building,t=this.hass;if(!e||!t||this.clean||this.roomId||this.panelOpen)return f;let n=this.renderForecast("top_right"),o=this.today===!1?f:this.renderTodayCard(e,t);return o===f&&n===f?f:m`<div class="nf-right-col" style=${this.clock==="top_right"?"top: 78px":""}>${o}${n}</div>`}renderTodayCard(e,t){let n=Yl(t,e,Date.now(),{today:R(t,"care_bin_today"),tomorrow:R(t,"care_bin_tomorrow")}),o=Jl([...n,...this._todayItems??[]]);if(!o.length&&!(e.settings.calendars??[]).length)return f;let i=this._todayOpen!==!1,s=new Intl.DateTimeFormat(t.language??navigator.language,{weekday:"long",day:"numeric",month:"long"}).format(new Date),a=t.language??navigator.language,l=c=>{if(c===1)return R(t,"tomorrow");let d=new Date;return d.setDate(d.getDate()+c),new Intl.DateTimeFormat(a,{weekday:"long",day:"numeric",month:"numeric"}).format(d)},u=o.flatMap((c,d)=>[(c.day??0)>0&&(o[d-1]?.day??0)!==c.day?m`<li class="nf-today-day">${l(c.day??0)}</li>`:f,m`<li class=${c.past?"nf-today-past":""}><time>${c.kind==="bin"?"\u{1F5D1}":c.time||"\u25CF"}</time><span>${c.title}<small>${c.source}</small></span></li>`]);return m`<section class="nf-today ${i?"":"nf-today-folded"}" aria-label=${R(t,"today")}>
      <button class="nf-today-head" aria-expanded=${i} @click=${()=>this._todayOpen=!i}>
        <b>📅 ${R(t,"today")}</b><span>${s}</span>
      </button>
      ${i?o.length?m`<ul>
              ${u}
            </ul>`:m`<p class="nf-today-none">${R(t,"today_none")}</p>`:f}
    </section>`}week=null;weekAt=0;refreshWeek(e){let t=this.hass;if(!t||this._travel||Date.now()-this.weekAt<36e5)return;this.weekAt=Date.now();let n=Fe(e,s=>this.furnitureLinks?.get(s.id)?.power??null),o=e.energy,i={solar:o.solar?[o.solar]:n.solar,grid:o.grid??n.grid,gridInvert:!!o.grid_invert,battery:o.battery?[o.battery]:n.battery,batteryInvert:!!o.battery_invert,consumption:o.consumption};Wa(t,i).then(s=>{this.week=s,this.syncDevices(!0)}).catch(()=>this.week=null)}meterRows(e,t=null){let n=this.hass,o=[],i=this.floorId?e.floors.find(a=>a.id===this.floorId):void 0,s=i?.power_entity?j(n?.states[i.power_entity]):null;if(i&&s!==null){let a=t&&t>0?` \xB7 ${R(n,"floor_power_share",{n:Math.round(Math.max(0,s)/t*100)})}`:"";o.push({icon:"\u26A1",label:i.name,value:`${it(n,s)}${a}`})}for(let[a,l,u]of[["gas","\u{1F525}","energy_gas_short"],["water","\u{1F4A7}","energy_water_short"]]){let c=e.energy[a],d=c?n?.states[c]:void 0;d&&!I(d)&&o.push({icon:l,label:R(n,u),value:ee(n,d)})}return o}refreshDayCurves(e){let t=this.hass;if(!t||this._travel||Date.now()-this.curvesAt<6e5)return;this.curvesAt=Date.now();let n=a=>en(a,e,Xt(a,e),Fe(e,l=>this.furnitureLinks?.get(l.id)?.power??null)),o=nl(t,n),i=Date.now(),s=i-24*36e5;rn(t,o,s,i,!0).then(a=>{this.dayCurves=rl(t,a,s,i,n),this.syncDevices(!0)}).catch(()=>this.dayCurves=null)}syncLhCards(e,t,n,o,i){let s=[],a=n.summary,l=a.solar!==null||a.grid!==null||a.battery!==null||a.consumption!==null,u=dn(t),c=(this.floorId?t.floors.find(d=>d.id===this.floorId):void 0)??[...t.floors].sort((d,p)=>p.elevation-d.elevation)[0];if(this.liveCardsOn&&!this.dimmed&&!this.roomId&&l&&u&&c){let d=0,p=0,h=0;for(let w of c.rooms)for(let[b,g]of w.points)d+=b,p+=g,h++;s.push({kind:"house",at:{floorId:c.id,x:h?d/h:u.x,z:h?p/h:u.z,y:c.height+(this.floorId?1.2:3.2)},summary:a,autarky:n.autarky,curves:this.dayCurves??void 0,week:this.week??void 0,meters:this.meterRows(t,a.consumption)}),this.refreshDayCurves(t),this.refreshWeek(t)}if(this.liveCardsOn&&!this.dimmed&&!this.roomId){for(let d of o)s.push({kind:"car",at:d.at,spot:d.spot,name:d.name,car:d.car});for(let d of this.livePrinters(t))s.push({kind:"printer",at:d.at,name:d.name,printer:d.printer});for(let d of this.liveHeatPumps(t))s.push({kind:"heatpump",at:d.at,name:d.name,pump:d.pump});for(let d of i)s.push({kind:"media",at:{...d.at,y:d.at.y+.5},media:d})}JSON.stringify(s)!==JSON.stringify(this._liveCards)&&(this._liveCards=s),e.setLiveAnchors(s.map(d=>d.at),s.length?(d,p,h,w)=>this.placeLhCard(d,p,h,w):null)}placeLhCard(e,t,n,o){let i=this.renderRoot.querySelector(`.live-card[data-i="${e}"]`);i&&(i.dataset.x=String(t),i.dataset.y=String(n),i.style.visibility=o?"visible":"hidden",e===this._liveCards.length-1&&du(this.renderRoot))}toggleHouseFold(){this._houseFolded=!this._houseFolded;try{localStorage.setItem("nextfloor.house_card_folded",this._houseFolded?"1":"0")}catch{}}toggleLhCards(){this._liveCardOn=!this._liveCardOn;try{localStorage.setItem("nextfloor.cards",this._liveCardOn?"1":"0")}catch{}this.syncDevices(!0)}renderTopLeft(){let e=this.clean?f:this.renderLhEnergy(),t=this.renderForecast("top_left");return this.clock!=="top_left"&&t===f||!this.hass?e:m`<div class="nf-topleft">${this.clock==="top_left"?this.renderClock(!0):f}${e}${t}</div>`}renderLhEnergy(){let e=this.ownSensors(),t=this._liveEnergy?.summary;if(!(!!t&&!this.roomId&&this.showEnergy&&!!this.hass&&!(t.consumption===null&&t.grid===null&&t.solar===null&&t.battery===null)))return e.length?m`<div class="nf-energy" aria-live="off">${e}</div>`:f;let o=s=>R(this.hass,s),i=[];if(t.solar!==null&&i.push({cls:"solar",label:o("energy_solar"),value:se(this.hass,t.solar)}),t.consumption!==null&&i.push({cls:"total",label:o("energy_consumption"),value:se(this.hass,t.consumption)}),t.rest!==void 0&&t.rest!==null&&i.push({cls:"total",label:o("energy_rest"),value:se(this.hass,t.rest)}),t.battery!==null||t.soc!==null){let s=[t.battery!==null?se(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);i.push({cls:"battery",label:o("energy_battery"),value:s.join(" \xB7 ")})}if(t.grid!==null){let s=t.grid<0;i.push({cls:s?"export":"grid",label:o(s?"energy_grid_export":"energy_grid_import"),value:se(this.hass,Math.abs(t.grid))})}if(t.tariff&&i.push({cls:"tariff",label:o("energy_tariff"),value:`${O(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),this.building)for(let s of this.meterRows(this.building))i.push({cls:"meter",label:`${s.icon} ${s.label}`,value:s.value});return m`<div class="nf-energy" aria-live="off">
      ${this.liveCardsOn&&this._liveCards.some(s=>s.kind==="house")?f:i.map(s=>m`<div class="nf-energy-item nf-energy-${s.cls}"><span>${s.label}</span><b>${s.value}</b></div>`)}
      ${this.flows!==null?f:m`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${o("flows_hint")} aria-label=${o("flows")} @click=${()=>this.toggleFlows()}>
            <span>${o("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms!==null?f:m`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${o("holos_hint")} aria-label=${o("holos")} @click=${()=>this.toggleLhCards()}>
            <span>${o("holos")}</span><b>◫</b>
          </button>`}
      ${e}
    </div>`}ownSensors(){return(this.sensorBar&&this.hass?this.building?.settings.status_entities??[]:[]).filter(t=>this.hass.states[t]).map(t=>m`<button class="nf-energy-item nf-own-sensor" title=${W(this.hass,t)} @click=${()=>fe(this,t)}>
          <span>${W(this.hass,t)}</span><b>${ee(this.hass,this.hass.states[t])}</b>
        </button>`)}renderMapCredit(){let e=this.building?.settings.map;return Al(e)?m`<a class="nf-map-credit" href=${Lo(e).href} target="_blank" rel="noopener">${Lo(e).text}</a>`:f}renderLegend(){if(this.heatMode==="wifi")return this.renderWifiLegend();if(this.heatMode==="none"||this.heatMode==="values")return f;let e=ot(new Date,this.hass?.config?.latitude??50),t=sr(this.heatMode,e),n=this.heatMode==="temperature",o=n?ce(this.hass,t.stops[0][0]):t.stops[0][0],i=n?ce(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],s=n?ne(this.hass):t.unit,a=l=>R(this.hass,l);return m`<div class="nf-legend">
      <b>${a(`heat_${this.heatMode}`)}${this.heatMode==="temperature"?m` <small>${a(e?"heat_summer":"heat_winter")}</small>`:f}</b>
      <span class="nf-legend-bar" style="background:${La(this.heatMode,e)}"></span>
      <span class="nf-legend-range"><span>${O(this.hass,o,0)} ${s}</span><span>${O(this.hass,i,0)} ${s}</span></span>
      ${this.heatValues.size?f:m`<span class="nf-legend-none">${a("heat_none_found")}</span>`}
    </div>`}renderWifiLegend(){let e=this.hass,t=this.building;if(!e||!t)return f;let n=(u,c)=>R(e,u,c),o=t.floors.flatMap(u=>u.furniture.filter(c=>ei(c.type)).map(c=>ti(e,this.furnitureLinks?.get(c.id)?.entity??this.furnitureLinks?.get(c.id)?.power??null))),s=o.filter(u=>!!u).reduce((u,c)=>u+(c.clients??0),0),a=t.floors.flatMap(u=>u.placements.map(c=>e.states[c.entity_id])),l=au(a);return m`<div class="nf-legend">
      <b>📶 ${n("heat_wifi")}</b>
      <span>${n("wifi_aps",{n:o.length,clients:s})}</span>
      ${l.online+l.offline.length?m`<span>${n("wifi_network",{online:l.online,offline:l.offline.length})}</span>`:f}
      ${l.offline.length?m`<span class="nf-legend-none">${l.offline.slice(0,4).join(", ")}</span>`:f}
      ${o.length?f:m`<span class="nf-legend-none">${n("wifi_none")}</span>`}
    </div>`}skyColor(){let e=Bo(this.theme,this.filledOwnLook),t=this._sky;return e.night[0].map((n,o)=>Math.round(n+(e.day[0][o]-n)*t))}render(){let e=this._sky,t=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=Bo(this.theme,this.filledOwnLook),o=`--nf-sky:${t(n.night[0],n.day[0])};--nf-ground:${t(n.night[1],n.day[1])}`+ol(this.building?.settings.backdrop);return m`<div
      class="nf-stage ${this.roomLabels?"":"nf-no-room-names"} ${this._low?"nf-low":""} ${this.panelOpen?"nf-panel-open":""} ${this._alerts.length?"nf-has-alerts":""} ${this._narrowStage?"nf-narrow":""}"
      style=${o}
    >
      ${this._error?m`<p class="nf-error">${this._error}</p>`:f} ${this.renderTopLeft()} ${hu(this.hass,this.roomId||this.panelOpen?[]:this._liveCards,(i,s,a,l)=>this.hass?.callService(i,s,{entity_id:a,...l}),{folded:this._houseFolded,toggle:()=>this.toggleHouseFold()})} ${this.clean?f:this.renderLegend()} ${this.renderMapCredit()}
      ${this.renderAlerts()} ${this.renderAnnouncement()} ${this.clean?f:m`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()}
      ${this.renderMenu()} ${this.renderPlate()} ${this.renderEye()} ${this.renderLock()} ${this.renderWalk()} ${this.renderTravel()} ${this.renderClock()} ${this.renderToday()} ${this.renderLayers()} ${this.renderPluginWindow()}
      ${this.showStats&&this._stats?m`<span class="nf-stats"
            ><b>${this._stats.fps?R(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):R(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?m`(${this._stats.busy.map(i=>R(this.hass,`stats_busy_${i}`)).join(", ")})`:f} ·
            ${R(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${R(this.hass,this._stats.low?"stats_low":"stats_full",{r:O(this.hass,this._stats.pixelRatio,2)})}</span
          >`:f}
    </div>`}static styles=[Se,Ve,pu,te`
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
      .nf-announcement {
        position: absolute;
        inset: 18% 8% auto;
        z-index: 30;
        display: flex;
        align-items: center;
        gap: 18px;
        margin: 0 auto;
        max-width: 860px;
        padding: 22px 28px;
        border: 1px solid color-mix(in srgb, var(--nf-accent) 55%, transparent);
        border-radius: 22px;
        background: var(--nf-chrome-solid);
        color: var(--nf-text);
        box-shadow: 0 0 40px color-mix(in srgb, var(--nf-accent) 35%, transparent), 0 18px 50px rgba(0, 0, 0, 0.45);
        font: 700 clamp(22px, 3.6vw, 40px) / 1.25 var(--nf-font);
        text-align: left;
        cursor: pointer;
        animation: nf-announce-in 0.35s ease-out;
      }
      .nf-announcement-icon {
        font-size: 1.3em;
      }
      @keyframes nf-announce-in {
        from {
          opacity: 0;
          transform: translateY(-12px) scale(0.98);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-announcement {
          animation: none;
        }
      }
      /* a contact that stopped answering is a chore, not an emergency: no glow, no pulse */
      .nf-alert-contact_lost,
      .nf-alert-own {
        border-left-color: #ffb547;
        box-shadow: none;
        animation: none;
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
      .nf-has-alerts .nf-energy,
      .nf-has-alerts .nf-topleft {
        top: 58px;
      }
      /* the clock top left stacks above the sensor and energy bar rather than covering it */
      .nf-topleft {
        position: absolute;
        left: 12px;
        top: 10px;
        z-index: 3;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .nf-topleft > .nf-clock,
      .nf-topleft > .nf-energy {
        position: static;
        max-width: 100%;
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
      :host([readable]) .nf-pin {
        font-size: 15px;
        padding: 6px 12px;
      }
      :host([readable]) .nf-pin-info small,
      :host([readable]) .nf-pin-floor span {
        font-size: 14px;
        opacity: 1;
      }
      :host([readable]) .nf-pin-floor b {
        font-size: 18px;
      }
      :host([readable]) .nf-dev {
        font-size: 14px;
        color: var(--nf-text);
      }
      .nf-note-pin {
        background: #ffe58a;
        color: #3a2e00;
        border-color: #c9a400;
        max-width: 260px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-note-pin.nf-note-due {
        background: #ffa726;
        color: #2a1600;
      }
      .nf-note-pin.nf-note-open {
        white-space: normal;
        text-align: left;
      }
      .nf-note-photo {
        display: block;
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        margin-top: 6px;
        border-radius: 6px;
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
        /* level with the top-left stack and after it in the page, so on a small screen the floors lie over a weather card or clock there (#84) */
        z-index: 3;
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
      /* a low stage (a card of 420 px): the pictures start under the top bar and stop above the buttons at the bottom left */
      .nf-thumbs.nf-thumbs-short {
        top: 52px;
        transform: none;
        max-height: calc(100% - 52px - 150px);
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
      .nf-layers {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 6px;
        z-index: 3;
      }
      .nf-has-alerts .nf-layers {
        top: 58px;
      }
      /* top right: "Today" and the forecast below it, one column */
      .nf-right-col {
        position: absolute;
        top: 12px;
        right: 12px;
        width: min(280px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        z-index: 3;
        pointer-events: none;
      }
      .nf-right-col > * {
        pointer-events: auto;
      }
      .nf-has-alerts .nf-right-col {
        top: 58px;
      }
      /* "Today": the day's appointments and bins, folds to its title */
      .nf-today {
        width: 100%;
        min-height: 0;
        overflow-y: auto;
        box-sizing: border-box;
        padding: 8px 12px 10px;
        border-radius: 16px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(10px);
        color: var(--nf-text);
        z-index: 3;
      }
      .nf-low :is(.nf-today, .nf-forecast, .nf-clock) {
        backdrop-filter: none;
      }
      .nf-today-day {
        display: block !important;
        margin-top: 4px;
        font-size: 12px;
        font-weight: 600;
        color: var(--nf-muted);
      }
      /* the forecast: a row per day */
      .nf-forecast {
        box-sizing: border-box;
        flex: none;
        padding: 6px 12px;
        border-radius: 16px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(10px);
        color: var(--nf-text);
        pointer-events: auto;
      }
      .nf-forecast ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: auto auto auto auto;
        column-gap: 10px;
        row-gap: 2px;
        align-items: baseline;
        font-size: 13px;
      }
      .nf-forecast li {
        display: contents;
      }
      .nf-fc-day {
        color: var(--nf-muted);
      }
      .nf-fc-temp {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .nf-fc-temp small {
        color: var(--nf-muted);
      }
      .nf-fc-rain {
        font-size: 12px;
        color: var(--nf-soft);
        white-space: nowrap;
      }
      .nf-today-folded {
        width: auto;
        align-self: flex-end;
        padding-bottom: 8px;
      }
      .nf-today-head {
        display: flex;
        gap: 8px;
        align-items: baseline;
        width: 100%;
        padding: 0;
        border: 0;
        background: none;
        color: inherit;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .nf-today-head span {
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-today ul {
        list-style: none;
        margin: 8px 0 0;
        padding: 0;
        display: grid;
        gap: 6px;
      }
      .nf-today li {
        display: grid;
        grid-template-columns: 44px 1fr;
        gap: 8px;
        align-items: baseline;
        font-size: 14px;
      }
      .nf-today time {
        font-variant-numeric: tabular-nums;
        color: var(--nf-accent);
        font-weight: 600;
      }
      .nf-today small {
        display: block;
        font-size: 11px;
        color: var(--nf-muted);
      }
      .nf-today-past {
        opacity: 0.45;
      }
      .nf-today-none {
        margin: 6px 0 0;
        font-size: 13px;
        color: var(--nf-muted);
      }
      /* opened from the start on a wall tablet: a size larger, easy to hit */
      .nf-central-big {
        width: min(420px, calc(100% - 24px));
        font-size: 16px;
      }
      .nf-central-big .nf-chip,
      .nf-central-big .nf-btn {
        min-height: 44px;
        padding: 8px 16px;
        font-size: 15px;
      }
      .nf-own-btn[aria-pressed="true"] {
        border-color: var(--nf-accent);
        color: var(--nf-accent);
        box-shadow: 0 0 12px color-mix(in srgb, var(--nf-accent) 45%, transparent);
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
        /* the same glass as the Today and forecast cards, so it follows the HA theme like them (#68) */
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(10px);
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
      /* in the clean view the button sits at the top: a tablet's taskbar or gesture bar covers the bottom edge and the button was lost there (#75) */
      .nf-eye-clean {
        left: auto;
        bottom: auto;
        right: calc(12px + env(safe-area-inset-right, 0px));
        top: calc(12px + env(safe-area-inset-top, 0px));
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
      .nf-own-sensor {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--nf-accent);
        color: inherit;
        text-align: left;
        font: inherit;
        max-width: 220px;
      }
      .nf-own-sensor span,
      .nf-own-sensor b {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
        /* a fixed dark plate, so a fixed light text: the theme text colour can be dark (day themes, pins that are on) */
        color: #f2f5fb;
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
    `]};customElements.get("nf-view3d")||customElements.define("nf-view3d",ui);function se(r,e){return Math.abs(e)>=1e3?`${O(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function li(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}function ym(r,e){let t=e.attributes.percentage;return e.state==="on"&&typeof t=="number"?`${Math.round(t)} %`:ee(r,e)}var Ru;function zu(){let r=new URL("./nextfloor-editor.js?v=00b0aa4a3d84",new URL(import.meta.url)).href;return Ru??=import(r),Ru}var km=.25,Tu=r=>Math.round(r*1e3)/1e3,Fu=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&H([e,t],n.points));function di(r,e,t,n,o){let i=Fu(r,e,t);if(!i)return[n,o];let s=(a,l)=>H([a,l],i.points);return s(n,o)?[n,o]:s(n,t)?[n,t]:s(e,o)?[e,o]:[e,t]}function xm(r,e,t,n){return r.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(oe(Z(i,t),n))<.02&&Math.abs(oe(Z(a,t),n))<.02}))}var ci=(r,e)=>Math.abs((r-e+540)%360-180);function Du(r,e,t,n=km){let o=Fu(r,e.x,e.z);if(!o)return null;let i=o.points,s=et(i)>=0?1:-1,a=null;return i.forEach((l,u)=>{let c=i[(u+1)%i.length],d=Te(Z(c,l));if(d<.3)return;let p=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=[-p[1]*s,p[0]*s],w=oe(Z([e.x,e.z],l),p);if(w<0||w>d)return;let b=xm(r,o,l,h)?t/2:0,g=oe(Z([e.x,e.z],l),h)-b,_=Math.atan2(-h[0],h[1])*180/Math.PI,$=[{rotation:_,extent:e.d/2},{rotation:_+90,extent:e.w/2},{rotation:_-90,extent:e.w/2}].reduce((y,F)=>ci(e.rotation,F.rotation)<ci(e.rotation,y.rotation)?F:y);if(ci(e.rotation,$.rotation)>50)return;let k=g-$.extent;Math.abs(k)>n||a&&Math.abs(k)>=Math.abs(a.gap)||(a={x:Tu(e.x-h[0]*k),z:Tu(e.z-h[1]*k),rotation:(Math.round($.rotation)%360+360)%360,gap:k})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}function Ar(r,e,t){let n=structuredClone(r);for(let o of n.floors){let i=o.furniture.find(s=>s.id===e);i&&t(i,o)}return n}function Er(r,e,t){let n=structuredClone(r);for(let o of n.floors){let i=o.placements.find(s=>s.entity_id===e);i&&t(i,o)}return n}function Pu(r,e){let t=structuredClone(r);for(let n of t.floors)n.furniture=n.furniture.filter(o=>o.id!==e);return t}function Hu(r,e){let t=structuredClone(r);for(let n of t.floors)n.placements=n.placements.filter(o=>o.entity_id!==e);return t}function Iu(r,e,t,n){return Er(r,e,(o,i)=>{[o.x,o.z]=di(i,o.x,o.z,t,n)})}function Cu(r,e,t,n){let o=r.settings.wall_interior??.12;return Ar(r,e,(i,s)=>{[i.x,i.z]=di(s,i.x,i.z,t,n);let a=Du(s,i,o);a&&Object.assign(i,a)})}var hi=(r,e)=>((r+e)%360+360)%360,Nu=r=>Number.parseFloat(r.replace(",",".")),bn=(r,e)=>Math.round(r*10**e)/10**e;function pi(r){let{min:e,max:t,accepts:n=()=>!0}=r,o=i=>{let s=Nu(i.target.value);!Number.isFinite(s)||!n(s)||r.apply(t===void 0?s:Math.min(t,Math.max(e,s)))};return m`<label class="nf-size" title=${r.title}
    >${r.label}
    <input type="number" inputmode="decimal" step=${r.step} min=${e} max=${t??f} .value=${String(bn(r.value,2))} @change=${o} />
  </label>`}var Lu=(r,e)=>m`<button class="nf-chip" @click=${e}>${r.t("height_auto")}</button>`,Ou=(r,e)=>m`<button class="nf-chip" @click=${()=>e(-r)}>↺ ${r}°</button><button class="nf-chip" @click=${()=>e(r)}>↻ ${r}°</button>`;function Sm(r,e){let t=r.building.floors.find(s=>s.furniture.some(a=>a.id===e)),n=t?.furniture.find(s=>s.id===e);if(!t||!n)return f;let o=(s,a)=>pi({label:r.t(a),title:r.t(`size_${s}`),value:n[s],step:.05,min:.05,accepts:l=>l>0,apply:l=>r.editFurniture(e,u=>u[s]=bn(l,3))}),i=ps(n)?m`${pi({label:"\u2195",title:r.t("mount_height"),value:n.mount_y??le(t,n),step:.05,min:0,accepts:s=>s>=0,apply:s=>r.editFurniture(e,a=>a.mount_y=bn(s,3))})}
      ${n.mount_y!=null?Lu(r,()=>r.editFurniture(e,s=>s.mount_y=null)):f}`:f;return m`${o("w","size_short_w")}${o("d","size_short_d")}${o("h","size_short_h")} ${i}`}function Mm(r,e){let t=r.building.floors.find(l=>l.placements.some(u=>u.entity_id===e)),n=t?.placements.find(l=>l.entity_id===e);if(!t||!n)return f;let o=D(e),i=(l,u,c)=>m`<select class="nf-size-select" title=${r.t(l)} @change=${d=>r.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
      ${u.map(([d,p])=>m`<option value=${d} ?selected=${d===c}>${p}</option>`)}
    </select>`,s=["ceiling","floor","table","wall"].map(l=>[l,r.t(`lamp_${l}`)]),a=o?_t(o,me(t,n.x,n.z),o==="light"?n.mount??"ceiling":null):1;return m`${o==="light"?i("lamp_mount",s,n.mount??"ceiling"):f}
    ${pi({label:r.t("size_short_h"),title:r.t("marker_height"),value:n.y??a,step:.05,min:0,accepts:l=>l>=0,apply:l=>r.editDevice(e,u=>u.y=bn(l,3))})}
    ${n.y!==null?Lu(r,()=>r.editDevice(e,l=>l.y=null)):f}`}function Wu(r,e,t){let n=r.t,o;if(e){let i=r.building.floors.flatMap(s=>s.furniture).find(s=>s.id===e)?.type;o=m`<span>${i?he(r.hass,i):""}</span>
      ${Sm(r,e)} ${Ou(45,s=>r.turnFurniture(e,s))}
      <button class="nf-chip" title=${n("furn_mirror_hint")} @click=${()=>r.editFurniture(e,s=>s.mirror=!s.mirror)}>⇋ ${n("furn_mirror")}</button>
      <button class="nf-chip nf-danger-chip" @click=${()=>r.removeFurniture(e)}>${n("delete")}</button>`}else t?o=m`<span>${W(r.hass,t)}</span>
      ${Mm(r,t)} ${Ou(45,i=>r.turnDevice(t,i))}
      <button class="nf-chip nf-danger-chip" @click=${()=>r.removeDevice(t)}>${n("delete")}</button>`:o=m`<span>${n("furnish_hint")}</span>`;return m`<div class="nf-furnish-bar">${o}<button class="nf-chip nf-chip-on" @click=${()=>r.finish()}>${n("done")}</button></div>`}var Bu=J`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`;var ae=(r,e)=>({name:r,fallback:e,read:t=>e?t!=="0":t==="1",write:t=>t?"1":"0"}),Ft=(r,e,t)=>({name:r,fallback:t,read:n=>e.find(o=>o===n)??t,write:n=>n}),mi={explode:ae("explode",!0),keepRoof:ae("roof",!1),solidWalls:ae("solid_walls",!1),quality:Ft("quality",["auto","low","high"],"auto"),stats:ae("stats",!1),markers:Ft("markers",["none","important","all"],"important"),heat:Ft("heat",["none","temperature","humidity","co2","mould","comfort","power","sun","values","wifi"],"none"),theme:Ft("theme",fr,"neon"),clock:Ft("clock",["none","top_left","top_right","bottom_left","bottom_right"],"none"),accent:{name:"accent",fallback:null,read:r=>/^#[0-9a-f]{6}$/i.test(r)?r:null,write:r=>r??""},floorStack:Ft("floor_stack",["dim","stacked","single"],"dim"),roomNames:ae("room_names",!0),clean:ae("clean",!1),navWrap:ae("nav_wrap",!1),weather:ae("weather",!0),timeSlider:ae("time_slider",!1),menuOpen:ae("menu_open",!1),keepCamera:ae("keep_camera",!1),readable:ae("readable",!1),plain:ae("plain",!1),rightBack:ae("right_back",!1),zoom:{name:"zoom",fallback:100,read:r=>/^\d{2,3}$/.test(r)?Math.min(250,Math.max(60,Number(r))):100,write:r=>String(Math.round(Math.min(250,Math.max(60,r))))},screenName:{name:"screen_name",fallback:"",read:r=>r.slice(0,60),write:r=>r.trim().slice(0,60)},announceMuted:ae("announce_muted",!1),glassWalls:{name:"glass_walls",fallback:20,read:r=>/^\d{1,3}$/.test(r)?Math.min(100,Number(r)):20,write:r=>String(Math.round(Math.min(100,Math.max(0,r))))}};function Vu(r=zr()){try{return r?.getItem("nextfloor.screen_name")?.trim()||null}catch{return null}}function Ku(r=zr()){try{return r?.getItem("nextfloor.announce_muted")==="1"}catch{return!1}}function zr(){try{return localStorage}catch{return null}}var Rr=class{storage;constructor(e){this.storage=e}raw(e){try{return this.storage?.getItem(`nextfloor.${e}`)??null}catch{return null}}load(e=""){let t={};for(let n of Object.keys(mi)){let o=mi[n],i=this.raw(o.name);t[n]=i===null?o.fallback:o.read(i)}return new URLSearchParams(e).has("nf_stats")&&(t.stats=!0),t}save(e,t){let n=mi[e];try{this.storage?.setItem(`nextfloor.${n.name}`,n.write(t))}catch{}}};var Gu=te`
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
    /* above the room bar, so a menu opened from the header (the screen's announcements) is not covered */
    position: relative;
    z-index: 30;
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
  .nf-glass-pick {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0 10px;
    font-size: 13px;
  }
  .nf-glass-pick input {
    width: 80px;
    accent-color: var(--nf-accent);
  }
  .nf-screen-pick {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  .nf-screen-pick > summary {
    list-style: none;
    cursor: pointer;
    padding: 6px 10px;
    font-size: 14px;
  }
  .nf-screen-pick > summary::-webkit-details-marker {
    display: none;
  }
  .nf-screen-menu {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 20;
    display: grid;
    gap: 10px;
    width: 260px;
    padding: 12px;
    border: 1px solid var(--nf-line);
    border-radius: 14px;
    background: var(--nf-chrome-solid);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  }
  .nf-screen-menu .nf-check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--nf-text);
  }
  .nf-screen-hint {
    margin: 0;
    font-size: 12px;
    color: var(--nf-muted);
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
  /* small landscape tablets: the room panel gets a little more of the width, its rows stay easy to hit */
  @container nf ((min-width: 701px) and (max-width: 1180px)) {
    .nf-room-panel {
      width: min(420px, 44%);
    }
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
    justify-content: flex-end;
    gap: 8px;
    align-items: center;
    pointer-events: none;
  }
  .nf-overlay > * {
    pointer-events: auto;
  }
  /* phones: the bar only holds the switches button and "back", so it can span the bottom; the buttons of the view sit above it */
  @container nf (max-width: 700px) {
    .nf-overlay {
      left: 12px;
    }
    .nf-switches {
      left: 0;
      width: auto;
    }
  }
  /* the switches: a menu that opens upwards from the bar, over the stage, closed by a tap beside it or Escape */
  .nf-switches-veil {
    position: fixed;
    inset: 0;
    z-index: 4;
  }
  .nf-switches {
    position: absolute;
    right: 0;
    bottom: calc(100% + 8px);
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    width: min(520px, calc(100cqw - 24px));
    max-height: min(60vh, 420px);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 12px;
    border: 1px solid var(--nf-line);
    border-radius: 14px;
    background: var(--nf-chrome-solid);
    box-shadow: var(--nf-shadow);
  }
  .nf-switches .nf-seg {
    flex-wrap: wrap;
  }
  .nf-switches .nf-chip {
    box-shadow: none;
  }
  .nf-caret {
    font-size: 0.75em;
    opacity: 0.7;
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
`;var fi=class extends re{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_prefs:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_optsOpen:{state:!0},_switchesOpen:{state:!0},_timeOfDay:{state:!0},_outside:{state:!0},_timeDrag:{state:!0},_floorUndo:{state:!0}};outsideMemo=null;floorUndoTimer;data=new gt(this);store=new Rr(zr());constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("nf-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._prefs=this.store.load(location.search),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._optsOpen=!1,this._switchesOpen=!1,this._timeOfDay=null,this._outside=!1,this._timeDrag=null,this._floorUndo=null}toggleTimeSlider(e){this.setPref("timeSlider",e),e||([this._timeOfDay,this._timeDrag]=[null,null])}sunState(){let e=this.hass?.config;return this._timeOfDay===null||e?.latitude===void 0||e.longitude===void 0?this.hass?.states["sun.sun"]?.state:Xe(dt(this._timeOfDay,e.time_zone),e.latitude,e.longitude).elevation>0?"above_horizon":"below_horizon"}renderTimeOfDay(){let e=this.t;if(this.hass?.config?.latitude===void 0)return f;let t=this._timeDrag??this._timeOfDay,n=i=>`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`,o=()=>{let i=new Date;return Math.round((i.getHours()+i.getMinutes()/60)*4)/4};return m`<button class="nf-chip" aria-pressed=${t!==null} title=${e("time_of_day_hint")} @click=${()=>(this._timeDrag=null,this._timeOfDay=t===null?o():null)}>☀ ${t===null?e("time_of_day"):n(t)}</button>
      ${t!==null?m`<label class="nf-chip nf-time-slider"
            ><input type="range" min="0" max="23.75" step="0.25" .value=${String(t)} aria-label=${e("time_of_day")} @input=${i=>this._timeDrag=Number(i.target.value)}
            @change=${i=>(this._timeDrag=null,this._timeOfDay=Number(i.target.value))}
          /></label>`:f}`}t=(e,t)=>R(this.hass,e,t);setPref(e,t){this._prefs={...this._prefs,[e]:t},this.store.save(e,t)}willUpdate(e){this.toggleAttribute("readable",!!this._prefs?.readable),e.has("hass")&&this.hass&&(this.style.colorScheme=cr(this.hass),this.data.setHass(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}openFloor(e){this._floorId=e,this._roomId=null,this._outside=!1}outsideIds(e){let t=this.outsideMemo;if(t&&t.building===e&&t.entities===this.hass.entities)return t.ids;let n=qt(this.hass,e.floors,e.settings.outside_hidden);return this.outsideMemo={building:e,entities:this.hass.entities,ids:n},n}openOutside(){let e=!this._outside;this.openFloor(null),this._outside=e}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if(n==="nf-outside")return this.openOutside();if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t)return this.openFloor(t);n&&(this._roomId=n===this._roomId?null:n,this._outside=!1)}furnishHost={hass:void 0,building:void 0,t:this.t,editFurniture:(e,t)=>this.applyEdit(n=>Ar(n,e,t)),editDevice:(e,t)=>this.applyEdit(n=>Er(n,e,t)),turnFurniture:(e,t)=>this.applyEdit(n=>Ar(n,e,o=>o.rotation=hi(o.rotation,t))),turnDevice:(e,t)=>this.applyEdit(n=>Er(n,e,o=>o.rotation=hi(o.rotation??0,t))),removeFurniture:e=>{this.applyEdit(t=>Pu(t,e)),this._selFurniture=null},removeDevice:e=>{this.applyEdit(t=>Hu(t,e)),this._selDevice=null},finish:()=>{this._furnish=!1,this._selFurniture=null,this._selDevice=null}};saveMoods(e,t){this.applyEdit(n=>({...n,floors:n.floors.map(o=>({...o,rooms:o.rooms.map(i=>i.id===e?{...i,moods:t.length?t:void 0}:i)}))}))}applyEdit(e){let t=this.data.building;t&&this.data.edit(e(t))}view3d(){return this.renderRoot.querySelector("nf-view3d")}back(){this._outside?this._outside=!1:this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this._prefs.clean?this.setPref("clean",!1):this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&Qn(this.hass,this))return f;let e=this.data.building,t=this._prefs.clean&&this._mode==="view",n=f;return e&&(this._mode==="editor"&&this.isAdmin?n=this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?n=this.renderExtensions():n=this.renderView(e)),m`<div class="nf-app ${t?"nf-clean":""}" style=${this._prefs.accent?`--nf-accent:${this._prefs.accent}`:""}>
      ${t?f:m`${this.renderHeader(e)}${this.renderNotices()}`}
      ${this.data.error&&!e?m`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>`:f}
      ${!e&&!this.data.error?m`<p class="nf-message">${this.t("loading")}</p>`:f}
      ${n}
    </div>`}choiceRow(e,t,n,o,i,s=f){return m`<div class="nf-seg nf-quality" role=${e?"group":f} aria-label=${e?this.t(e):f}>
      ${t.map(a=>m`<button aria-pressed=${n===a} title=${e==="markers"?this.t("markers"):f} @click=${()=>i(a)}>${o(a)}</button>`)}${s}
    </div>`}accentPicker(){let e=this._prefs.accent;return m`<label class="nf-accent-pick" title=${this.t("accent_hint")}>
      <input type="color" .value=${e??"#37e0ff"} aria-label=${this.t("accent")} @input=${t=>this.setPref("accent",t.target.value)} />
      ${e?m`<button class="nf-accent-reset" title=${this.t("accent_reset")} aria-label=${this.t("accent_reset")} @click=${()=>this.setPref("accent",null)}>↺</button>`:f}
    </label>`}renderViewOptions(){let e=this._prefs;return m`<button class="nf-opts-btn" aria-expanded=${this._optsOpen} title=${this.t("view_options")} aria-label=${this.t("view_options")} @click=${()=>this._optsOpen=!this._optsOpen}>⚙</button>
      <div class="nf-view-opts ${this._optsOpen?"nf-opts-open":""}">
        ${this.choiceRow("quality",["auto","low","high"],e.quality,t=>this.t(`quality_${t}`),t=>this.setPref("quality",t))}
        ${this.choiceRow("theme",fr,e.theme,t=>this.t(`theme_${t}`),t=>this.setPref("theme",t),this.accentPicker())}
        ${this.choiceRow("markers",["none","important","all"],e.markers,t=>this.t(`markers_${t}`),t=>this.setPref("markers",t))}
        <label class="nf-seg nf-clock-pick" title=${this.t("clock")}
          >🕒
          <select aria-label=${this.t("clock")} @change=${t=>this.setPref("clock",t.target.value)}>
            ${["none","top_left","top_right","bottom_left","bottom_right"].map(t=>m`<option value=${t} ?selected=${e.clock===t}>${this.t(`clock_${t}`)}</option>`)}
          </select>
        </label>
        <label class="nf-seg nf-glass-pick" title=${this.t("view_zoom_hint")}
          >🔍
          <input type="range" min="60" max="250" step="10" .value=${String(e.zoom)} aria-label=${this.t("view_zoom")} @change=${t=>this.setPref("zoom",Number(t.target.value))} />
        </label>
        <label class="nf-seg nf-glass-pick" title=${this.t("glass_walls_hint")}
          >${this.t("glass_walls")}
          <input type="range" min="0" max="100" step="5" .value=${String(e.glassWalls)} aria-label=${this.t("glass_walls")} @input=${t=>this.setPref("glassWalls",Number(t.target.value))} />
        </label>
        <details class="nf-seg nf-screen-pick">
          <summary title=${this.t(e.announceMuted?"announce_muted":"announce_on")} aria-label=${this.t(e.announceMuted?"announce_muted":"announce_on")}>${e.announceMuted?"\u{1F507}":"\u{1F4E2}"}</summary>
          <div class="nf-screen-menu">
            <label class="nf-check"><input type="checkbox" .checked=${!e.announceMuted} @change=${t=>this.setPref("announceMuted",!t.target.checked)} /> ${this.t("announce_on")}</label>
            <label class="nf-field"
              >${this.t("screen_name")}
              <input type="text" maxlength="60" .value=${e.screenName} @change=${t=>this.setPref("screenName",t.target.value.trim())} />
            </label>
            <p class="nf-screen-hint">${this.t("screen_name_hint")}</p>
          </div>
        </details>
        <div class="nf-seg nf-quality">
          <button aria-pressed=${e.timeSlider} title=${this.t("time_of_day_hint")} @click=${()=>this.toggleTimeSlider(!e.timeSlider)}>☀ ${this.t("time_of_day")}</button>
          <button aria-pressed=${e.menuOpen} title=${this.t("menu_open_hint")} @click=${()=>this.setPref("menuOpen",!e.menuOpen)}>★ ${this.t("menu_open")}</button>
          <button aria-pressed=${e.keepCamera} title=${this.t("keep_camera_hint")} @click=${()=>this.setPref("keepCamera",!e.keepCamera)}>🎥 ${this.t("keep_camera")}</button>
          <button title=${this.t("stl_hint")} @click=${()=>this.renderRoot.querySelector("nf-view3d")?.downloadStl?.()}>⬇ ${this.t("stl")}</button>
          <button aria-pressed=${e.rightBack} title=${this.t("right_back_hint")} @click=${()=>this.setPref("rightBack",!e.rightBack)}>${this.t("right_back")}</button>
          <button aria-pressed=${e.plain} title=${this.t("plain_hint")} @click=${()=>this.setPref("plain",!e.plain)}>▭ ${this.t("plain")}</button>
          <button aria-pressed=${e.readable} title=${this.t("readable_hint")} @click=${()=>this.setPref("readable",!e.readable)}>Aa ${this.t("readable")}</button>
          <button aria-pressed=${e.stats} title=${this.t("fps_title")} @click=${()=>this.setPref("stats",!e.stats)}>${this.t("fps")}</button>
        </div>
      </div>`}renderHeader(e){let t=this.data.saveState,n=(i,s,a="")=>m`<button role="tab" class=${a} aria-pressed=${this._mode===i} @click=${()=>this.setMode(i)}>${s}</button>`,o=t==="saving"?"saving":t==="saved"?"saved":"save_error";return m`<header class="nf-header">
      <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
      <h1>${Bu}NextFloor</h1>
      ${this.isAdmin?m`<div class="nf-seg" role="tablist">${n("view",this.t("view"))}${n("editor",this.t("editor"))}${n("extensions",`\u2726 ${this.t("ext_tab")}`,"nf-tab-ext")}</div>`:f}
      <span class="nf-grow"></span>
      ${this._mode==="view"&&e?.floors.some(i=>i.rooms.length)?this.renderViewOptions():f}
      ${this._mode==="editor"&&t!=="idle"?m`<span class="nf-save nf-save-${t}">${this.t(o)}</span>`:f}
      <span class="nf-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
    </header>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(e.versionGap==="frontend"?m`<div class="nf-notice nf-notice-warn">
              ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
              <button class="nf-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
            </div>`:m`<div class="nf-notice nf-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(m`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(m`<div class="nf-notice">
        <span>${this.t("draft_found",{time:n})}</span>
        <button class="nf-btn nf-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
        <button class="nf-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
      </div>`)}return t.length>0?m`<div class="nf-notices">${t}</div>`:f}whenEditorLoaded(e){return this._editorReady?e():(zu().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),m`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){return this.whenEditorLoaded(()=>m`<nf-extensions class="nf-body" .hass=${this.hass} .packs=${this.data.packs} .plugins=${this.data.building?.settings.plugins??[]}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @plugins-changed=${e=>this.applyEdit(t=>({...t,settings:{...t.settings,plugins:e.detail}}))}></nf-extensions>`)}renderEditor(e){return this.whenEditorLoaded(()=>m`<nf-editor
        class="nf-body"
        .hass=${this.hass}
        .building=${e}
        .narrow=${this.narrow}
        .packs=${this.data.packs}
        .loadCardEditor=${Sn}
        @packs-changed=${()=>{this.data.reloadPacks()}}
        @building-changed=${t=>this.data.edit(t.detail.building)}
      ></nf-editor>`)}onNavWheel=e=>{if(this._prefs.navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};allOffChip(e){let t=this._floorId?e.floors.find(o=>o.id===this._floorId):e.floors.length===1?e.floors[0]:void 0;if(!t||!this.hass)return f;if(this._floorUndo){let o=this._floorUndo;return m`<button class="nf-chip" aria-pressed="true" @click=${()=>{for(let i of o)this.hass.callService(i.domain,i.service,i.data);this._floorUndo=null,clearTimeout(this.floorUndoTimer)}}>↶ ${this.t("all_off_undo")}</button>`}let n=nn(Xa(t).map(o=>this.hass.states[o]));return n.count<2?f:m`<button class="nf-chip" title=${this.t("all_off_floor",{floor:t.name,n:n.count})} @click=${()=>{for(let o of n.off)this.hass.callService(o.domain,o.service,o.data);this._floorUndo=n.undo,clearTimeout(this.floorUndoTimer),this.floorUndoTimer=setTimeout(()=>this._floorUndo=null,1e4)}}>⏻ ${n.count}</button>`}renderNav(e){let t=e.floors.filter(u=>!this._floorId||u.id===this._floorId),n=e.floors.length>1,o=this._prefs.navWrap,i=this.outsideIds(e).length?m`<button class="nf-chip" aria-pressed=${this._outside} title=${this.t("outside_area_hint")} @click=${()=>this.openOutside()}>🌳 ${this.t("outside_area")}</button>`:f,s=n?m`<button class="nf-chip" aria-pressed=${this._floorId===null} @click=${()=>this.openFloor(null)}>${this.t("all_floors")}</button>
          ${[...e.floors].reverse().map(u=>m`<button class="nf-chip" aria-pressed=${u.id===this._floorId} @click=${()=>this.openFloor(u.id)}>${u.name}</button>`)}
          ${i} ${this.allOffChip(e)}
          <span class="nf-sep"></span>`:m`${i} ${this.allOffChip(e)}`,a=t.flatMap(u=>[t.length>1&&u.rooms.length?m`<span class="nf-nav-floor">${u.name}</span>`:f,...u.rooms.map(c=>m`<button
          class="nf-chip nf-room-chip"
          aria-pressed=${c.id===this._roomId}
          @click=${()=>{n&&(this._floorId=u.id),this._roomId=c.id===this._roomId?null:c.id,this._outside=!1}}
        >
          ${c.name}
        </button>`)]),l=this.t(o?"nav_row":"nav_wrap");return m`<nav class="nf-nav ${o?"nf-nav-wrap":""}" @wheel=${this.onNavWheel}>
      ${s}${a}
      <button class="nf-chip nf-nav-toggle" title=${l} aria-label=${l} aria-pressed=${o} @click=${()=>this.setPref("navWrap",!o)}>${o?"\u2194":"\u2261"}</button>
    </nav>`}toggleChip(e,t,n){return m`<button class="nf-chip" aria-pressed=${this._prefs[e]} title=${n?this.t(n):f} @click=${()=>this.setPref(e,!this._prefs[e])}>${this.t(t)}</button>`}renderOverlay(e){let t=this._prefs,n=this.t,o=(c,d)=>m`<div class="nf-seg">${[c,d].map(([p,h,w])=>m`<button aria-pressed=${p} @click=${h}>${w}</button>`)}</div>`,i=["none","temperature","humidity","co2","mould","comfort","power","sun","values","wifi"],s=["dim","stacked","single"],a=e.floors.length>1,l=this._roomId||this._floorId&&a?m`<button class="nf-chip" @click=${()=>this.back()}>${n("back")}</button>`:f,u=m`<button class="nf-chip" aria-haspopup="true" aria-expanded=${this._switchesOpen} @click=${()=>this._switchesOpen=!this._switchesOpen}>☰ ${n("bars_unfold")} <span class="nf-caret">${this._switchesOpen?"\u25BE":"\u25B4"}</span></button>`;return this._switchesOpen?m`<div class="nf-overlay">
      <div class="nf-switches-veil" @click=${()=>this._switchesOpen=!1}></div>
      <div class="nf-switches" role="group" aria-label=${n("bars_unfold")} @keydown=${c=>c.key==="Escape"&&(this._switchesOpen=!1)}>
      <div class="nf-seg">
        ${["auto","cut","slope"].map(c=>m`<button aria-pressed=${this._wallMode===c} title=${c==="slope"?n("walls_slope_hint"):f} @click=${()=>this._wallMode=c}>${n(`walls_${c}`)}</button>`)}
      </div>
      <div class="nf-seg"><button aria-pressed=${t.solidWalls} title=${n("walls_solid_hint")} @click=${()=>this.setPref("solidWalls",!t.solidWalls)}>${n("walls_solid")}</button></div>
      ${a&&!this._floorId?o([t.explode,()=>this.setPref("explode",!0),n("floors_apart")],[!t.explode,()=>this.setPref("explode",!1),n("floors_stacked")]):f}
      ${!this._floorId&&e.settings.roof.type!=="none"?m`<div class="nf-seg"><button aria-pressed=${t.keepRoof} title=${n("roof_keep_hint")} @click=${()=>this.setPref("keepRoof",!t.keepRoof)}>${n("roof_keep")}</button></div>`:f}
      ${a&&this._floorId?m`<div class="nf-seg" role="group" aria-label=${n("card_floor_stack")}>
            ${s.map(c=>m`<button aria-pressed=${t.floorStack===c} @click=${()=>this.setPref("floorStack",c)}>${n(`floor_stack_short_${c}`)}</button>`)}
          </div>`:f}
      <div class="nf-seg" role="group" aria-label=${n("heatmap")}>
        ${i.map(c=>m`<button aria-pressed=${t.heat===c} @click=${()=>this.setPref("heat",c)}>${n(c==="none"?"heat_off":`heat_short_${c}`)}</button>`)}
      </div>
      ${this.toggleChip("roomNames","room_names_short")}
     
      ${this.toggleChip("weather","weather_short","weather_hint")}
      ${t.timeSlider?this.renderTimeOfDay():f}
      </div>
      ${u}${l}
    </div>`:m`<div class="nf-overlay">${u}${l}</div>`}renderView(e){if(!e.floors.some(o=>o.rooms.length))return m`<div class="nf-empty">
        <p>${this.t(this.isAdmin?e.floors.length?"no_rooms_admin":"no_building_admin":"no_building")}</p>
        ${this.isAdmin?m`<button class="nf-btn nf-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:f}
      </div>`;let t=this._prefs,n=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null;return this.furnishHost.hass=this.hass,this.furnishHost.building=e,m`
      ${t.clean?f:this.renderNav(e)}
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
          .panelOpen=${!!this._roomId||this._outside}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .outsideOpen=${this._outside}
          .wallMode=${this._wallMode}
          .solidWalls=${t.solidWalls}
          .explode=${t.explode}
          .keepRoof=${t.keepRoof}
          .markerMode=${t.markers}
          .heatMode=${t.heat}
          .theme=${gr(t.theme,this.sunState())}
          .timeOfDay=${this._timeOfDay}
          .clock=${t.clock==="none"?null:t.clock}
          .announcements=${!t.announceMuted}
          .glassWalls=${t.glassWalls}
          .screenName=${t.screenName||null}
          .lockButton=${!0}
          .walkButton=${!0}
          .travelButton=${!0}
          .accent=${t.accent}
          .centralOpen=${t.menuOpen}
          .keepCamera=${t.keepCamera}
          .plain=${t.plain}
          .rightBack=${t.rightBack}
          .readable=${t.readable}
          .zoom=${t.zoom/100}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${o=>this.applyEdit(i=>Cu(i,o.detail.id,o.detail.x,o.detail.z))}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${o=>this.applyEdit(i=>Iu(i,o.detail.id,o.detail.x,o.detail.z))}
          .quality=${t.quality}
          ?showStats=${t.stats}
          @room-tap=${this.onRoomTap}
            @floor-tap=${o=>this.openFloor(o.detail.floorId)}
          @back=${()=>this.back()}
        ></nf-view3d>
        ${n?m`<nf-room-panel
            .building=${this.data.building??null}
              class="nf-room-panel"
              .hass=${this.hass}
              .room=${n}
              .floor=${e.floors.find(o=>o.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${rt(this.hass,e.floors)}
              .phrases=${e.settings.announce_phrases??null}
              .rooms=${e.floors.flatMap(o=>o.rooms)}
              @mood-change=${o=>this.saveMoods(o.detail.roomId,o.detail.moods)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:this._outside?m`<nf-room-panel
            .building=${this.data.building??null}
                class="nf-room-panel"
                .hass=${this.hass}
                .room=${null}
                .outside=${this.outsideIds(e)}
                .confirmEntities=${rt(this.hass,e.floors)}
                .phrases=${e.settings.announce_phrases??null}
                @close=${()=>this._outside=!1}
              ></nf-room-panel>`:f}
        ${t.clean?f:this.renderOverlay(e)}
        ${this._furnish?Wu(this.furnishHost,this._selFurniture,this._selDevice):f}
      </div>
    `}static styles=[Se,Ve,Gu,ur]};customElements.get("nextfloor-panel")||customElements.define("nextfloor-panel",fi);var $m=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/,Uu=(r,e)=>Number(r)*60+Number(e);function wn(r,e,t=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=$m.exec(r.trim());if(!n)return!1;let o=Uu(n[1],n[2]),i=Uu(n[3],n[4]),s=t.getHours()*60+t.getMinutes();return o>i?s>=o||s<i:s>=o&&s<i}var Tr=class{host;cleanTimer;idleTimer;nightTimer;constructor(e){this.host=e}armClean(e=!1){clearTimeout(this.cleanTimer);let t=this.host.config()?.controls_hide_after??0;t>0&&(e&&this.host.isClean()&&this.host.setClean(!1),this.cleanTimer=setTimeout(()=>this.host.setClean(!0),t*1e3))}stopClean(){clearTimeout(this.cleanTimer)}armIdle(){clearTimeout(this.idleTimer);let e=this.host.config()?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.host.goHome(),e*1e3))}touched(){this.host.isOrbit()&&this.host.setOrbit(!1),this.armIdle(),this.armClean(!0)}start(){this.armIdle(),this.nightTimer=setInterval(()=>this.host.setNight(wn(this.host.config()?.night,this.host.hass())),6e4)}stop(){clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}};function ju(r,e){return r?r.floors.filter(t=>(e===null||t.id===e)&&t.rooms.length>0).map(t=>({floorId:t.id,floorName:t.name,rooms:t.rooms.map(n=>({id:n.id,name:n.name||"\u2013",floorId:t.id}))})):[]}var qu=te`
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
`;function gi(r,e){let t=r.template,n=t?e?.[t]:void 0;if(!n)return r;let{type:o,template:i,...s}=n;return{...s,...r}}function Zu(r,e){let t=new Set(e),n=[];for(let i of r.floors){let s=i.rooms.filter(u=>t.has(u.id));if(!s.length)continue;let a=(u,c)=>s.some(d=>d.points.length>=3&&H([u,c],d.points)),l=new Set(s.map(u=>u.id));n.push({...i,rooms:s,openings:i.openings.filter(u=>l.has(u.room_id)),furniture:i.furniture.filter(u=>a(u.x,u.z)),placements:i.placements.filter(u=>a(u.x,u.z)),walls:(i.walls??[]).filter(u=>a((u.a[0]+u.b[0])/2,(u.a[1]+u.b[1])/2)),outdoor:[]})}let o={...r.settings.roof,type:"none",sections:[],solar:[]};return{...r,floors:n,settings:{...r.settings,roof:o}}}var Dt="nf-outside",_i=class extends re{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};_own=null;templatesSeen;roomApplied=!1;data=new gt(this);kiosk=new Tr({config:()=>this._config,hass:()=>this.hass,setClean:e=>this._clean=e,isClean:()=>this._clean,setOrbit:e=>this._orbit=e,isOrbit:()=>this._orbit,setNight:e=>this._night=e,goHome:()=>this.returnHome()});constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._clean=!1,this._night=!1,this._orbit=!1}view3d(){return this.shadowRoot?.querySelector("nf-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.kiosk.start()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),this.kiosk.stop()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Sn(),document.createElement("nextfloor-card-editor")}static getStubConfig(){return{type:"custom:nextfloor-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._own=e,this._config=gi(e,this.data.building?.settings.card_templates),this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=wn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.kiosk.armClean(),this.kiosk.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){let t=this.data.building?.settings.card_templates;if(this._own?.template&&t!==this.templatesSeen&&(this.templatesSeen=t,this._config=gi(this._own,t)),this.toggleAttribute("readable",this._config?.readable===!0),e.has("hass")&&(this.style.colorScheme=cr(this.hass)),!e.has("hass")||!this.hass)return;this.data.setHass(this.hass);let n=wn(this._config?.night,this.hass);n!==this._night&&(this._night=n)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}roomsMemo=null;plan(){let e=this.data.building??null,t=this._config?.rooms;if(!e||!t?.length)return e;let n=t.join(",");return(!this.roomsMemo||this.roomsMemo.source!==e||this.roomsMemo.ids!==n)&&(this.roomsMemo={source:e,ids:n,result:Zu(e,t)}),this.roomsMemo.result}t=e=>R(this.hass,e);stage(){let e=this.plan(),t=this._config,n=this._floorId===void 0?t?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(a=>a.id===n)?n:null,i=!!this._roomId&&t?.room_panel!==!1,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1;return{floorId:o,walls:this._walls??t?.walls??"auto",heat:this._heat??t?.heatmap??"none",explode:this._explode??t?.explode??!0,canGoBack:s,showBar:!!e&&!this._clean&&(s||!!t?.controls&&!i)}}shows(e){let t=this._config?.controls;return t===!0||Array.isArray(t)&&t.includes(e)}renderBar(e){let t=this.plan(),n=this.t,o=["temperature","humidity","co2"].filter(s=>this.shows(s)),i=(s,a)=>m`<div class="nf-seg" role=${s?"group":f} aria-label=${s??f}>${a.map(([l,u,c])=>m`<button aria-pressed=${l} @click=${u}>${c}</button>`)}</div>`;return m`<div class="nf-card-controls">
      ${e.canGoBack?m`<button class="nf-chip" @click=${()=>this.back()}>${n("back")}</button>`:f}
      ${this.shows("walls")?i(void 0,[[e.walls==="auto",()=>this._walls="auto",n("walls_auto")],[e.walls==="cut",()=>this._walls="cut",n("walls_cut")],[e.walls==="slope",()=>this._walls="slope",n("walls_slope")]]):f}
      ${this.shows("floors")&&t.floors.length>1&&!e.floorId?i(void 0,[[e.explode,()=>this._explode=!0,n("floors_apart")],[!e.explode,()=>this._explode=!1,n("floors_stacked")]]):f}
      ${o.length>0?i(n("heatmap"),["none",...o].map(s=>[e.heat===s,()=>this._heat=s,n(s==="none"?"heat_off":`heat_short_${s}`)])):f}
    </div>`}renderRoomButtons(e){let t=this.plan();if(!this._config?.room_buttons||!t||this._clean)return f;let n=ju(t,e.floorId);if(!n.length)return f;let o=n.length>1,i=(l,u)=>{this.canSwitch&&l!==e.floorId&&(this._floorId=l),this._roomId=u===this._roomId?null:u},s=qt(this.hass,t.floors).length>0,a=()=>{this.canSwitch&&(this._floorId=null),this._roomId=this._roomId===Dt?null:Dt};return m`<div class="nf-card-rooms ${this._roomId&&this._config?.room_panel!==!1?"nf-card-rooms-beside":""}" role="group" aria-label=${this.t("card_room_buttons")}>
      ${n.map(l=>m`${o?m`<span class="nf-card-rooms-floor">${l.floorName}</span>`:f}${l.rooms.map(u=>m`<button class="nf-chip" aria-pressed=${u.id===this._roomId} @click=${()=>i(l.floorId,u.id)}>${u.name}</button>`)}`)}
      ${s?m`<button class="nf-chip" aria-pressed=${this._roomId===Dt} title=${this.t("outside_area_hint")} @click=${a}>🌳 ${this.t("outside_area")}</button>`:f}
    </div>`}renderCorners(){let e=this._config,t=this.t,n=this._clean||!!this._roomId&&e?.room_panel!==!1;return m`${e?.fullscreen_button&&!n?m`<button class="nf-card-full" title=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
          ${this._fullscreen?"\u2715":"\u26F6"}
        </button>`:f}
    ${e?.dashboard&&!n?m`<button class="nf-card-full nf-card-dash ${e.fullscreen_button?"nf-card-dash-2":""}" title=${e.dashboard_label||e.dashboard} aria-label=${e.dashboard_label||e.dashboard} @click=${()=>this.openDashboard(e.dashboard)}>
          ${e.dashboard_label?m`<span>${e.dashboard_label}</span>`:"\u2302"}
        </button>`:f}`}renderStage(e){let t=this.plan(),n=this._config,o=()=>{this._clean=!this._clean,this._clean?this.kiosk.stopClean():this.kiosk.armClean()},i=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0;return m`<nf-view3d
      .hass=${this.hass}
      .building=${t}
      .packs=${this.data.packs}
      .floorId=${e.floorId}
      .roomId=${this._roomId===Dt?null:this._roomId}
      .outsideOpen=${this._roomId===Dt}
      .wallMode=${e.walls}
      .solidWalls=${n?.solid_walls===!0}
      .explode=${e.explode}
      .keepRoof=${n?.roof_fade===!1}
      .quality=${n?.quality??"auto"}
      ?showStats=${n?.stats??!1}
      .markerMode=${n?.markers??"important"}
      .markerNames=${n?.marker_names===!0}
      .markersOutside=${n?.markers_outside??null}
      ?tapInRoom=${n?.tap_in_room===!0}
      .roomDoubleTap=${n?.room_double_tap??"auto"}
      .central=${n?.central!==!1}
      .centralOpen=${n?.central_open===!0}
      .keepCamera=${n?.keep_camera===!0}
      .readable=${n?.readable===!0}
      .plain=${n?.plain===!0}
      .templateName=${this._own?.template??null}
      .rightBack=${n?.right_back===!0}
      .today=${n?.today!==!1}
      .zoom=${typeof n?.zoom=="number"?n.zoom:1}
      .buttons=${n?.buttons?.map((s,a)=>({id:`card_${a}`,...s}))??null}
      .heatMode=${e.heat}
      .theme=${gr(n?.theme,this.hass?.states["sun.sun"]?.state)}
      .clock=${n?.clock&&n.clock!=="none"?n.clock:null}
      .lockButton=${n?.lock_button!==!1}
      .walkButton=${n?.walk_button!==!1}
      .travelButton=${n?.time_travel!==!1}
      .accent=${n?.accent??null}
      .furnitureColors=${n?.furniture_colors??null}
      .ownLook=${n?.own_look??null}
      .showEnergy=${n?.energy??!0}
      .flows=${n?.flows??null}
      .holograms=${n?.holograms??null}
      .floorThumbs=${this.thumbs}
      .thumbsFolded=${this.thumbs&&n?.floor_thumbs_folded===!0}
      .roomLabels=${n?.room_names!==!1}
      .floorStack=${n?.floor_stack??"dim"}
      .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
      .alerts=${n?.alerts!==!1}
      .alertJump=${!!n?.alert_jump}
      .announcements=${n?.announcements!==!1&&!Ku()}
      .sensorBar=${n?.sensor_bar!==!1}
      .glassWalls=${typeof n?.glass_walls=="number"?Math.min(100,Math.max(0,n.glass_walls)):null}
      .screenName=${n?.screen_name??Vu()}
      .scenes=${n?.scenes!==!1}
      .clean=${this._clean}
      .cleanButton=${i}
      @clean-toggle=${o}
      ?weather=${n?.weather!==!1}
      .weatherEntityId=${n?.weather_entity??null}
      .weatherDensity=${n?.weather_density??1}
      .dimmed=${this._night}
      .autoOrbit=${this._orbit}
      .startView=${n?.start_view??null}
      style=${e.showBar?"--nf-bottom-inset: 52px":""}
      @room-tap=${s=>{this.canSwitch&&t.floors.length>1&&s.detail.floorId&&e.floorId!==s.detail.floorId?(this._floorId=s.detail.floorId,this._roomId=null):s.detail.roomId&&(this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
      @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
      @back=${()=>this.back()}
    ></nf-view3d>`}renderRoomPanel(){let e=this.plan();return m`<nf-room-panel
            .building=${this.plan()??null}
      class="nf-card-panel"
      .hass=${this.hass}
      .room=${e.floors.flatMap(t=>t.rooms).find(t=>t.id===this._roomId)??null}
      .floor=${e.floors.find(t=>t.rooms.some(n=>n.id===this._roomId))??null}
      .outside=${this._roomId===Dt?qt(this.hass,e.floors):null}
      .confirmEntities=${rt(this.hass,e.floors)}
      .phrases=${e.settings.announce_phrases??null}
      @close=${()=>this._roomId=null}
    ></nf-room-panel>`}render(){if(this.hass&&Qn(this.hass,this))return f;let e=this.plan(),t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(a=>a.rooms.some(l=>l.id===t.room))&&(this._roomId=t.room));let n=this.stage(),o=this._fullscreen?"100vh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t?.height??420}px`,i=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null,s=()=>this.kiosk.touched();return m`<ha-card class=${this._night?"nf-night":""} style=${i?`--nf-accent:${i}`:""} @pointerdown=${s} @keydown=${s} @wheel=${s}>
      <div class="nf-card-body" style="height:${o}">
        ${e&&e.floors.some(a=>a.rooms.length)?this.renderStage(n):m`<p class="nf-card-msg">${this.data.error??(e?R(this.hass,"no_building"):R(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&t?.room_panel!==!1?this.renderRoomPanel():f}
        ${this.renderRoomButtons(n)}
        ${n.showBar&&e?this.renderBar(n):f}
        ${this.renderCorners()}
      </div>
    </ha-card>`}static styles=[Se,Ve,qu,ur]};if(!customElements.get("nextfloor-card")){customElements.define("nextfloor-card",_i);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"nextfloor-card",name:R(void 0,"card_name"),description:R(void 0,"card_description"),preview:!1})}Yr();
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
