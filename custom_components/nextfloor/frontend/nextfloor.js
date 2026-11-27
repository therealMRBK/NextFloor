/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var A={ca:"6e08c894e522",cs:"8d968de16511",da:"0fe66a82bf2a",es:"329287087de5",fi:"9a17bc084f56",fr:"c443a64124c7",hu:"27ba348531dc",it:"ba9e4fdb7638",nb:"c5ea24fb9ef6",nl:"d1c4cb5b6447",pl:"66787f7f5790",pt:"42ed5aa76c57",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"e5aae4f0deb9",tr:"7c83ce1c3372","zh-tw":"2aab5ac671a2",zh:"852952205f3b"};Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=n=>n===void 0?n:JSON.parse(JSON.stringify(n)));var Yn=globalThis,Jn=Yn.ShadowRoot&&(Yn.ShadyCSS===void 0||Yn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vi=Symbol(),gs=new WeakMap,rn=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Jn&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=gs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&gs.set(t,e))}return e}toString(){return this.cssText}},_s=n=>new rn(typeof n=="string"?n:n+"",void 0,vi),ie=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new rn(t,n,vi)},bs=(n,e)=>{if(Jn)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),i=Yn.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}},yi=Jn?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return _s(t)})(n):n;var{is:Sd,defineProperty:$d,getOwnPropertyDescriptor:Md,getOwnPropertyNames:Ad,getOwnPropertySymbols:Ed,getPrototypeOf:zd}=Object,Qn=globalThis,ws=Qn.trustedTypes,Rd=ws?ws.emptyScript:"",Td=Qn.reactiveElementPolyfillSupport,on=(n,e)=>n,ki={toAttribute(n,e){switch(e){case Boolean:n=n?Rd:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ys=(n,e)=>!Sd(n,e),vs={attribute:!0,type:String,converter:ki,reflect:!1,useDefault:!1,hasChanged:ys};Symbol.metadata??=Symbol("metadata"),Qn.litPropertyMetadata??=new WeakMap;var Ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=vs){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&$d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:o}=Md(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??vs}static _$Ei(){if(this.hasOwnProperty(on("elementProperties")))return;let e=zd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(on("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(on("properties"))){let t=this.properties,r=[...Ad(t),...Ed(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(yi(i))}else e!==void 0&&t.push(yi(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:ki).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ki;this._$Em=i;let a=s.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,r,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??ys)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Ve[on("elementProperties")]=new Map,Ve[on("finalized")]=new Map,Td?.({ReactiveElement:Ve}),(Qn.reactiveElementVersions??=[]).push("2.1.2");var zi=globalThis,ks=n=>n,Xn=zi.trustedTypes,xs=Xn?Xn.createPolicy("lit-html",{createHTML:n=>n}):void 0,zs="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,Rs="?"+rt,Dd=`<${Rs}>`,mt=document,an=()=>mt.createComment(""),ln=n=>n===null||typeof n!="object"&&typeof n!="function",Ri=Array.isArray,Fd=n=>Ri(n)||typeof n?.[Symbol.iterator]=="function",xi=`[ 	
\f\r]`,sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ss=/-->/g,$s=/>/g,ht=RegExp(`>|${xi}(?:([^\\s"'>=/]+)(${xi}*=${xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ms=/'/g,As=/"/g,Ts=/^(?:script|style|textarea|title)$/i,Ti=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),f=Ti(1),le=Ti(2),Cg=Ti(3),Ge=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Es=new WeakMap,pt=mt.createTreeWalker(mt,129);function Ds(n,e){if(!Ri(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xs!==void 0?xs.createHTML(e):e}var Pd=(n,e)=>{let t=n.length-1,r=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=sn;for(let a=0;a<t;a++){let l=n[a],c,u,d=-1,m=0;for(;m<l.length&&(s.lastIndex=m,u=s.exec(l),u!==null);)m=s.lastIndex,s===sn?u[1]==="!--"?s=Ss:u[1]!==void 0?s=$s:u[2]!==void 0?(Ts.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=ht):u[3]!==void 0&&(s=ht):s===ht?u[0]===">"?(s=i??sn,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?ht:u[3]==='"'?As:Ms):s===As||s===Ms?s=ht:s===Ss||s===$s?s=sn:(s=ht,i=void 0);let p=s===ht&&n[a+1].startsWith("/>")?" ":"";o+=s===sn?l+Dd:d>=0?(r.push(c),l.slice(0,d)+zs+l.slice(d)+rt+p):l+rt+(d===-2?a:p)}return[Ds(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},cn=class n{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,u]=Pd(e,t);if(this.el=n.createElement(c,r),pt.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=pt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(zs)){let m=u[s++],p=i.getAttribute(d).split(rt),h=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:h[2],strings:p,ctor:h[1]==="."?$i:h[1]==="?"?Mi:h[1]==="@"?Ai:zt}),i.removeAttribute(d)}else d.startsWith(rt)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(Ts.test(i.tagName)){let d=i.textContent.split(rt),m=d.length-1;if(m>0){i.textContent=Xn?Xn.emptyScript:"";for(let p=0;p<m;p++)i.append(d[p],an()),pt.nextNode(),l.push({type:2,index:++o});i.append(d[m],an())}}}else if(i.nodeType===8)if(i.data===Rs)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(rt,d+1))!==-1;)l.push({type:7,index:o}),d+=rt.length-1}o++}}static createElement(e,t){let r=mt.createElement("template");return r.innerHTML=e,r}};function Et(n,e,t=n,r){if(e===Ge)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl,o=ln(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=Et(n,i._$AS(n,e.values),i,r)),e}var Si=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??mt).importNode(t,!0);pt.currentNode=i;let o=pt.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new un(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Ei(o,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(o=pt.nextNode(),s++)}return pt.currentNode=mt,i}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},un=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),ln(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&ln(this._$AH)?this._$AA.nextSibling.data=e:this.T(mt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=cn.createElement(Ds(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Si(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=Es.get(e.strings);return t===void 0&&Es.set(e.strings,t=new cn(e)),t}k(e){Ri(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let o of e)i===t.length?t.push(r=new n(this.O(an()),this.O(an()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=ks(e).nextSibling;ks(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},zt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,i){let o=this.strings,s=!1;if(o===void 0)e=Et(this,e,t,0),s=!ln(e)||e!==this._$AH&&e!==Ge,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Et(this,a[r+l],t,l),c===Ge&&(c=this._$AH[l]),s||=!ln(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$i=class extends zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Mi=class extends zt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Ai=class extends zt{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=Et(this,e,t,0)??g)===Ge)return;let r=this._$AH,i=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ei=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}};var Hd=zi.litHtmlPolyfillSupport;Hd?.(cn,un),(zi.litHtmlVersions??=[]).push("3.3.3");var Fs=(n,e,t)=>{let r=t?.renderBefore??e,i=r._$litPart$;if(i===void 0){let o=t?.renderBefore??null;r._$litPart$=i=new un(e.insertBefore(an(),o),o,void 0,t??{})}return i._$AI(n),i};var Di=globalThis,pe=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fs(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ge}};pe._$litElement$=!0,pe.finalized=!0,Di.litElementHydrateSupport?.({LitElement:pe});var Id=Di.litElementPolyfillSupport;Id?.({LitElement:pe});(Di.litElementVersions??=[]).push("4.2.2");var ft=Math.PI/180;function gt(n,e,t){let r=n.getTime()/864e5-10957.5,i=(357.529+.98560028*r)*ft,s=(280.459+.98564736*r+1.915*Math.sin(i)+.02*Math.sin(2*i))*ft,a=(23.439-36e-8*r)*ft,l=Math.atan2(Math.cos(a)*Math.sin(s),Math.cos(s)),c=Math.asin(Math.sin(a)*Math.sin(s)),d=(((18.697374558+24.06570982441908*r)%24+24)%24*15+t)*ft-l,m=e*ft,p=Math.asin(Math.sin(m)*Math.sin(c)+Math.cos(m)*Math.cos(c)*Math.cos(d)),h=Math.atan2(Math.sin(d),Math.cos(d)*Math.sin(m)-Math.tan(c)*Math.cos(m))/ft+180;return{elevation:p/ft,azimuth:(h%360+360)%360}}function Fi(n,e){let t=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(n)).map(r=>[r.type,Number(r.value)]));return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)}function Rt(n,e,t=new Date){let[r,i]=[Math.floor(n),Math.round(n%1*60)];if(e)try{let s=new Date(Fi(t.getTime(),e)),a=Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),r,i),l=a-(Fi(a,e)-a);return l=a-(Fi(l,e)-l),new Date(l)}catch{}let o=new Date(t);return o.setHours(r,i,0,0),o}var Ps;function er(){let n=new URL("./nextfloor-card-editor.js?v=0a69cb0ffde2",new URL(import.meta.url)).href;return Ps??=import(n),Ps}var dn=(n,e,t={})=>n.callWS({type:`nextfloor/${e}`,...t}),Hs=n=>dn(n,"building/get");async function Is(n,e){return(await dn(n,"building/save",{building:e})).revision}function Cs(n,e){return n.connection.subscribeMessage(t=>e(t.revision),{type:"nextfloor/building/subscribe"})}async function Ns(n,e){return(await dn(n,"image/get",{image_id:e})).data}async function Ws(n,e){await dn(n,"note/done",{note_id:e})}async function Ls(n){return(await dn(n,"packs/list")).packs}var Cd=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function Os(n){let e=n instanceof Uint8Array?n:new Uint8Array(n),t=e.length*8,r=new Uint8Array(e.length+9+63>>6<<6);r.set(e),r[e.length]=128;let i=new DataView(r.buffer);i.setUint32(r.length-8,Math.floor(t/4294967296)),i.setUint32(r.length-4,t>>>0);let o=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),s=new Uint32Array(64),a=(l,c)=>l>>>c|l<<32-c;for(let l=0;l<r.length;l+=64){for(let v=0;v<16;v++)s[v]=i.getUint32(l+v*4);for(let v=16;v<64;v++){let $=a(s[v-15],7)^a(s[v-15],18)^s[v-15]>>>3,x=a(s[v-2],17)^a(s[v-2],19)^s[v-2]>>>10;s[v]=s[v-16]+$+s[v-7]+x>>>0}let[c,u,d,m,p,h,w,_]=o;for(let v=0;v<64;v++){let $=_+(a(p,6)^a(p,11)^a(p,25))+(p&h^~p&w)+Cd[v]+s[v]>>>0,x=(a(c,2)^a(c,13)^a(c,22))+(c&u^c&d^u&d)>>>0;[_,w,h,p,m,d,u,c]=[w,h,p,m+$>>>0,d,u,c,$+x>>>0]}o[0]+=c,o[1]+=u,o[2]+=d,o[3]+=m,o[4]+=p,o[5]+=h,o[6]+=w,o[7]+=_}return[...o].map(l=>l.toString(16).padStart(8,"0")).join("")}var Bs=n=>n.trim().replace(/^\/local\/www\//i,"/local/"),Vs=n=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(n.trim());var Nd=globalThis,Gs=Nd.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},rr=Gs.plugins,Pi=Gs.listeners,Wd=new Set(["none","rainbow","pulse","flicker"]),Ld=5;function Tt(n,e){n.errors.length<Ld&&n.errors.push(e instanceof Error?e.message:String(e))}function Od(){for(let n of Pi)n()}function Dt(n){return Pi.add(n),()=>Pi.delete(n)}function Hi(n,e=""){if(!n||typeof n!="object")throw new Error("register() needs a plugin object");if(typeof n.id!="string"||!/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(n.id))throw new Error("plugin id must be 1\u201364 letters, digits, '.', '_' or '-'");if(n.apiVersion!==1)throw new Error(`plugin "${n.id}" wants API ${String(n.apiVersion)}, NextFloor offers ${1}`);for(let t of Object.keys(n.lightAnimations??{})){if(Wd.has(t))throw new Error(`plugin "${n.id}": light animation "${t}" is built in`);if(typeof n.lightAnimations?.[t]!="function")throw new Error(`plugin "${n.id}": light animation "${t}" is not a function`)}for(let t of n.devices??[]){if(typeof t?.match!="function")throw new Error(`plugin "${n.id}": every device extension needs match()`);for(let r of["floorWedge","tap","watch"])if(t[r]!==void 0&&typeof t[r]!="function")throw new Error(`plugin "${n.id}": ${r} must be a function`);for(let r of t.settings??[]){if(!r||typeof r.key!="string"||!/^\w{1,32}$/.test(r.key))throw new Error(`plugin "${n.id}": a setting needs a key of 1\u201332 letters, digits or "_"`);if(!["number","select","boolean","entity"].includes(r.type))throw new Error(`plugin "${n.id}": setting "${r.key}" has an unknown type`)}}for(let t of n.roomSections??[])if(typeof t?.render!="function"||typeof t.id!="string")throw new Error(`plugin "${n.id}": every room section needs id and render()`);rr.set(n.id,{plugin:n,status:{id:n.id,name:n.name||n.id,version:n.version||"",source:e,errors:[]}}),Od()}function Bd(n){for(let{plugin:e,status:t}of rr.values()){let r=e.lightAnimations?.[n];if(r)return{fn:r,status:t}}return null}var Ks=n=>Bd(n)!==null;function*hn(n,e){for(let{plugin:t,status:r}of rr.values())for(let i of t.devices??[]){let o=!1;try{o=i.match(n,e)}catch(s){Tt(r,s)}o&&(yield{device:i,status:r})}}function Ft(n,e){for(let{device:t}of hn(n,e))return t.kind??"sensor";return null}function Us(n,e){let t=null;for(let{device:r,status:i}of hn(n.entityId,n.state))if(r.marker)try{let o=r.marker({...n,settings:ir(r.settings,e?.[i.id])});if(!o)continue;t={...t??{}},typeof o.icon=="string"&&o.icon&&(t.icon=o.icon),typeof o.text=="string"&&(t.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(t.active=o.active)}catch(o){Tt(i,o)}return t}function qs(n,e){let t=[];for(let{device:r,status:i}of hn(n.entityId,n.state))if(r.watch)try{let o=r.watch({...n,settings:ir(r.settings,e?.[i.id])});Array.isArray(o)&&t.push(...o.filter(s=>typeof s=="string").slice(0,20))}catch(o){Tt(i,o)}return t}function ir(n,e){let t={};for(let r of n??[]){let i=e?.[r.key],o=r.type==="number"?typeof i=="number"&&Number.isFinite(i):r.type==="boolean"?typeof i=="boolean":r.type==="entity"?typeof i=="string"&&/^([a-z_]+\.\w+)?$/.test(i)&&(!r.domains?.length||i===""||r.domains.includes(i.split(".")[0])):typeof i=="string"&&(r.options??[]).some(([s])=>s===i);t[r.key]=o?i:r.default}return t}var Vd=n=>{let e=typeof n=="string"?/^#([0-9a-f]{6})$/i.exec(n.trim()):null;if(!e)return null;let t=Number.parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},tr=(n,e,t,r)=>typeof n=="number"&&Number.isFinite(n)?Math.min(r,Math.max(t,n)):e;function js(n,e,t){for(let{device:r,status:i}of hn(n.entityId,n.state))if(r.floorWedge)try{let o=r.floorWedge({...n,placement:e,settings:ir(r.settings,t?.[i.id])});if(!o)continue;let s=tr(o.reach,0,0,30);if(s<=0)continue;return{angle:tr(o.angle,90,1,360),reach:s,near:tr(o.near,0,0,s),color:Vd(o.color)??[.04,.22,.28],opacity:tr(o.opacity,.6,0,1),through:o.tapThrough===!0}}catch(o){Tt(i,o)}return null}function Zs(n,e,t,r){for(let{device:i,status:o}of hn(n.entityId,n.state))if(i.tap)try{if(i.tap({...n,...r,placement:e,settings:ir(i.settings,t?.[o.id])})===!0)return!0}catch(s){Tt(o,s)}return!1}function Ys(n){let e=[];for(let{plugin:t,status:r}of rr.values())for(let i of t.roomSections??[])try{let o=i.render(n);if(o==null||o===""||typeof o!="string"&&!(o instanceof Node))continue;e.push({key:`${t.id}/${i.id}`,title:r.name,content:o})}catch(o){Tt(r,o)}return e}var Ii=new Map,Ci="";function Ni(){let n=globalThis;if(n.NextFloor)return;n.NextFloor={apiVersion:1,register:t=>Hi(t,Ci)};let e=n.__nextfloorPlugins??[];n.__nextfloorPlugins=[];for(let t of e)try{Hi(t)}catch(r){console.warn("NextFloor: plugin rejected",r)}}var Gd=n=>[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("");async function Kd(n,e=(...t)=>fetch(...t)){if(!n.sha256)return{url:n.url};let t=globalThis.crypto?.subtle,r=await e(n.url,{cache:"no-store"});if(!r.ok)throw new Error(`HTTP ${r.status}`);let i=await r.arrayBuffer();if((t?Gd(await t.digest("SHA-256",i)):Os(i))!==n.sha256.toLowerCase())throw new Error("checksum mismatch: the file is not the one that was reviewed");let s=URL.createObjectURL(new Blob([i],{type:"text/javascript"}));return{url:s,revoke:()=>URL.revokeObjectURL(s)}}async function Wi(n,e=r=>import(r),t){Ni();for(let r of n??[]){if(!r.enabled||Ii.has(r.url))continue;if(!Vs(r.url)){Ii.set(r.url,{url:r.url,state:"error",error:"not allowed: use /local/\u2026, /hacsfiles/\u2026 or https://\u2026"});continue}let i={url:r.url,state:"loading"};Ii.set(r.url,i);let o;try{o=await Kd({...r,url:Bs(r.url)},t),Ci=r.url,await e(o.url),i.state="loaded"}catch(s){i.state="error",i.error=s instanceof Error?s.message:String(s),console.warn(`NextFloor: plugin ${r.url} failed to load`,s)}finally{Ci="",o?.revoke?.()}}}var Js=[],or=new Map,Qs=0,Xs=(n,e)=>`pack:${n}:${e}`,Li=n=>n.startsWith("pack:");function ea(n){Js=n,or=new Map;for(let e of n)for(let t of e.items)or.set(Xs(e.id,t.id),t);Qs+=1}var Oi=()=>Js,sr=()=>Qs,Ud={};function ne(n){if(!Li(n))return;let e=or.get(n);if(e)return e;let[,t,...r]=n.split(":"),i=Ud[t];return i?or.get(Xs(i,r.join(":"))):void 0}var ar=n=>!!n?.parts.some(e=>e.move);function ta(n,e){if(e===null)return Math.min(1,Math.max(0,n.cover_rest??1));let t=Math.min(1,Math.max(0,e/100));return n.cover==="extends"?t:1-t}var na=n=>ne(n)?.parts.find(e=>e.screen);var ra=n=>!!ne(n)?.climate;function ia(n,e){return n.name[e.split("-")[0]]??n.name.en??Object.values(n.name)[0]??n.id}function be(n,e){return e.mount_y!=null?e.mount_y:jd(n,e)+(qd(e)?0:cr(n,e.x,e.z))}var qd=n=>n.type==="led_strip"||ne(n.type)?.mount==="ceiling";function jd(n,e){if(e.type==="lamp_wall")return oa;if(e.type==="led_strip")return Math.max(0,Ee(n,e.x,e.z)-.04-Math.max(.02,e.h));let t=ne(e.type);if(!t)return sa(e);switch(t.mount){case"surface":return dr(n,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,ur(n,e)-e.h);default:return 0}}function lr(n){if(n==="plant")return"plant";let e=ne(n);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var Yd={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Jd(n){return n==="hedge"||n==="fence"||n==="pergola"}function Qd(n,e,t){let r=n.slope??0;if(!r||n.type==="pool")return 0;let i=n.slope_dir??"x",o=(c,u)=>i==="x"?c:i==="-x"?-c:i==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of n.points){let d=o(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return r*l}function hr(n,e,t,r){return pr(n)+(e.offset??0)+Yd[e.type]-Qd(e,t,r)}function pr(n){return n.elevation>.3?0:-.2}function pn(n,e,t){let r=(n.outdoor??[]).filter(o=>!Jd(o.type)&&o.type!=="pool"&&O([e,t],o.points)),i=[...r].reverse().find(o=>o.cut)??r[0];return i?hr(n,i,e,t):pr(n)}var Bi=n=>`pipe:${n}`;var Xd={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ca={type:"none",pitch:35,overhang:.4};var eh={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ca}};function th(n,e,t){return{id:n,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var ua=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),oa=1.75;function da(n){return ih.has(n.type)||["stairwell","parking"].includes(n.type)?!1:ne(n.type)?.mount!=="ceiling"}function mr(n){return ua.has(n)||!!ne(n)?.light}var nh=new Set(["nas","router","server_rack","tower_pc","inverter","wallbox","home_battery","pellet_boiler","game_console","mower_robot","treadmill","bike_trainer","wine_fridge","display_cabinet"]);function fr(n){let e=n.split(":").slice(2).join(":");return nh.has(e)&&!!ne(n)}var rh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function sa(n){switch(n.type){case"home_battery":return n.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-n.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var ih=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);var oh=n=>n?.floor_offset&&Number.isFinite(n.floor_offset)?n.floor_offset:0;function cr(n,e,t){let r=n.rooms.find(i=>i.points.length>=3&&i.floor_offset&&O([e,t],i.points));return oh(r)}function Ee(n,e,t){let r=n.rooms.find(i=>i.points.length>=3&&O([e,t],i.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:n.height}var ur=(n,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:Ee(n,e.x,e.z);function dr(n,e,t){let r=0;for(let i of n.furniture)!(rh.has(i.type)||ne(i.type)?.surface)||!O([e,t],gr(i))||(r=Math.max(r,i.h));return r}var Zd=new Set([...ua,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),aa={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Vi(n){n.energy={...Xd,...n.energy??{}},n.presence=n.presence??[],n.version=1,n.settings={...eh,...n.settings,roof:{...ca,...n.settings?.roof??{}}};for(let e of n.settings.roof.sections??[])Array.isArray(e.overhang_sides)&&(e.overhang_sides=null);n.floors.forEach((e,t)=>{let r=th(e.id,e.name??`Floor ${t+1}`,e.elevation??t*2.8);for(let i of Object.keys(r))e[i]===void 0&&(e[i]=r[i])});for(let e of n.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let t=e.placements.filter(r=>r.entity_id.startsWith("light."));if(t.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=r[i.mount??"ceiling"],[s,a,l]=aa[o],c=`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,d=1;for(;e.furniture.some(m=>m.id===u);)u=`${c}_${d++}`;e.furniture.push({id:u,type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null,animations_enabled:i.animations_enabled,effect_animations:structuredClone(i.effect_animations)})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return sh(n),n}function sh(n){let e=(r,i,o=new Set)=>{for(let s of r)(typeof s.id!="string"||!s.id||o.has(s.id))&&(s.id=la(i)),o.add(s.id)};e(n.floors,"floor");let t=new Set;for(let r of n.floors){for(let i of r.rooms)(typeof i.id!="string"||!i.id)&&(i.id=la("room"));e(r.openings,"op",t),e(r.furniture,"furn"),e(r.outdoor,"out")}}function la(n){return`${n}_${Math.random().toString(36).slice(2,10)}`}function Ke(n){let e=0;for(let t=0;t<n.length;t++){let[r,i]=n[t],[o,s]=n[(t+1)%n.length];e+=r*s-o*i}return e/2}function mn(n){return Math.abs(Ke(n))}function it(n){let e=Ke(n);if(Math.abs(e)<1e-9){let i=n.length||1;return[n.reduce((o,s)=>o+s[0],0)/i,n.reduce((o,s)=>o+s[1],0)/i]}let t=0,r=0;for(let i=0;i<n.length;i++){let[o,s]=n[i],[a,l]=n[(i+1)%n.length],c=o*l-a*s;t+=(o+a)*c,r+=(s+l)*c}return[t/(6*e),r/(6*e)]}function gr(n){let e=n.rotation*Math.PI/180,t=Math.cos(e),r=Math.sin(e),i=n.w/2,o=n.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[n.x+s*t-a*r,n.z+s*r+a*t])}function O(n,e){let t=!1;for(let r=0,i=e.length-1;r<e.length;i=r++){let[o,s]=e[r],[a,l]=e[i];s>n[1]!=l>n[1]&&n[0]<(a-o)*(n[1]-s)/(l-s)+o&&(t=!t)}return t}var ha={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var ah=700,Ki="nextfloor.unsaved",Pt="0.35.0.1";function lh(){try{let n=localStorage.getItem(Ki);return n?JSON.parse(n):null}catch{return null}}function Gi(n){try{n?localStorage.setItem(Ki,JSON.stringify(n)):localStorage.removeItem(Ki)}catch{}}var pa=n=>n&&typeof n=="object"&&"message"in n?String(n.message):String(n);function ch(n,e){let t=o=>o.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),[r,i]=[t(n),t(e)];for(let o=0;o<Math.max(r.length,i.length);o++){let s=(r[o]??0)-(i[o]??0);if(s!==0)return s}return 0}var Ht=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;stopPlugins=null;hass=null;connected=!1;revision=-1;connection=null;retryTimer;starting=null;onReady=()=>{this.start()};ownRevisions=new Set;stopListening=null;timer;waiting=null;inFlight=null;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null,r=this.hass?.connection!==e.connection;this.hass=e,this.connected&&(this.watchConnection(),(t||r)&&this.start())}hostConnected(){this.connected=!0,this.stopPlugins=Dt(()=>this.host.requestUpdate()),this.watchConnection(),this.hass&&this.start()}hostDisconnected(){this.connected=!1,clearTimeout(this.retryTimer),this.retryTimer=void 0,this.connection?.removeEventListener?.("ready",this.onReady),this.connection=null,this.stopPlugins?.(),this.stopPlugins=null,this.flush(),this.stopListening?.().catch(()=>{}),this.stopListening=null}edit(e){this.building=e,Wi(e.settings.plugins),this.waiting=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.flush()},ah),this.host.requestUpdate()}get frontendVersion(){return Pt}get versionGap(){let e=this.backendVersion;return!e||Pt==="dev"||e===Pt?null:ch(e,Pt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Pt!=="dev"&&this.backendVersion!==Pt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Vi(e.building))}discardDraft(){this.draft=null,Gi(null),this.host.requestUpdate()}async flush(){clearTimeout(this.timer),this.inFlight&&await this.inFlight;let e=this.waiting,t=this.hass;!e||!t||(this.waiting=null,this.saveState="saving",this.host.requestUpdate(),this.inFlight=this.send(t,e),await this.inFlight,this.inFlight=null)}async send(e,t){try{let r=await Is(e,t);this.ownRevisions.add(r),this.revision=r,this.saveState=this.waiting?"saving":"saved",this.saveError=null,Gi(null)}catch(r){this.saveState="error",this.saveError=pa(r),Gi({building:t,savedAt:Date.now()})}this.host.requestUpdate()}watchConnection(){let e=this.hass?.connection??null;e!==this.connection&&(this.connection?.removeEventListener?.("ready",this.onReady),this.connection&&(this.stopListening?.().catch(()=>{}),this.stopListening=null),this.connection=e,e?.addEventListener?.("ready",this.onReady))}retry(){!this.connected||this.retryTimer!==void 0||(this.retryTimer=setTimeout(()=>{this.retryTimer=void 0,this.start()},5e3),this.retryTimer.unref?.())}start(){return this.starting?this.starting:(this.starting=this.connect().finally(()=>{this.starting=null}),this.starting)}async connect(){let e=this.hass;if(!(!e||!this.connected)){if(clearTimeout(this.retryTimer),this.retryTimer=void 0,this.waiting||this.inFlight){this.retry();return}if(await Promise.all([this.reloadPacks(),this.reload()]),!!this.connected){if(e.connection!==this.hass?.connection){this.retry();return}if(this.error&&this.retry(),!this.stopListening)try{let t=await Cs(e,r=>{let i=this.ownRevisions.has(r)||r===this.revision,o=this.waiting!==null||this.inFlight!==null;!i&&!o&&this.reload()});!this.connected||e.connection!==this.hass?.connection?t().catch(()=>{}):this.stopListening=t}catch{this.retry()}}}}async reloadPacks(){if(this.hass){try{this.packs=await Ls(this.hass)}catch{this.packs=[]}ea(this.packs),this.host.requestUpdate()}}async reload(){let e=this.hass;if(e){try{let t=await Hs(e);if(!this.connected||this.hass?.connection!==e.connection||this.waiting||this.inFlight)return;this.building=Vi(t.building),Wi(this.building.settings.plugins),this.backendVersion=t.version??null,this.revision=t.revision,this.error=null,this.draft===null&&!this.waiting&&(this.draft=lh())}catch(t){this.error=pa(t)}this.host.requestUpdate()}}};var Ui=n=>n.slice(0,n.indexOf(".")),uh={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},L=n=>uh[Ui(n)]??null,qi=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];function ma(n,e=!1){if(e||n.startsWith("lamp:"))return"light";if(n.startsWith("tap:"))return"tap";if(n.startsWith("gang:"))return"switch";if(n==="grid")return"sensor";let t=L(n);return t&&t!=="scene"&&t!=="script"?t:"other"}var fa=new Set(["light","switch","fan"]),ga=n=>n!==null&&n!=="scene"&&n!=="script",V=n=>!n||n.state==="unavailable"||n.state==="unknown"&&!n.entity_id.startsWith("event."),dh=new Set(["motion","occupancy","presence","moving"]),_a=(n,e)=>e.startsWith("binary_sensor.")&&dh.has(String(n?.states[e]?.attributes.device_class??"")),fn=n=>!!n&&n.entity_id.startsWith("cover.")&&n.state==="unknown"&&n.attributes.assumed_state===!0,_r=(n,e)=>n.filter(t=>(!V(t)||fn(t))&&!e?.has(t.entity_id)).map(t=>t.entity_id);function B(n,e,t){let r=String(n?.states[e]?.attributes.friendly_name??n?.entities?.[e]?.name??e);if(!t||r.length<=t.length+1||!r.toLowerCase().startsWith(`${t.toLowerCase()} `))return r;let i=r.slice(t.length+1);return i[0].toUpperCase()+i.slice(1)}var hh=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]),br=n=>!!n&&n.entity_id.startsWith("sensor.")&&n.attributes.device_class==="enum";function se(n){if(!n)return!1;if(n.entity_id.startsWith("vacuum."))return["cleaning","returning"].includes(n.state);if(n.entity_id.startsWith("valve."))return n.state==="open"||n.state==="opening";let e=L(n.entity_id);return e==="light"||e==="switch"||e==="fan"||e==="binary"?n.state==="on":e==="cover"?n.state==="open"||n.state==="opening":e==="climate"?["heating","cooling"].includes(String(n.attributes.hvac_action)):e==="media"?n.state==="playing":e==="lock"?n.state==="unlocked"||n.state==="open":e==="sensor"?br(n)&&hh.has(n.state.toLowerCase()):!1}var ba=n=>Math.min(1,Math.max(0,n));function ph(n){let e=ba((n-2200)/4300),t=[1,.66,.26],r=[.78,.9,1];return[0,1,2].map(i=>t[i]+(r[i]-t[i])*e)}function Ce(n,e){if(!n||n.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:n.attributes,r=typeof t.brightness=="number"?.2+.8*Math.sqrt(ba(t.brightness/255)):1,i=t.rgb_color;return i&&!["color_temp","brightness","onoff"].includes(String(t.color_mode))?{color:[i[0]/255,i[1]/255,i[2]/255],level:r}:typeof t.color_temp_kelvin=="number"?{color:ph(t.color_temp_kelvin),level:r}:{color:[1,.71,.28],level:r}}function gn(n){if(!n)return!1;let e=n.entity_id.split(".")[0];return e==="sensor"?!1:e==="binary_sensor"?n.attributes.device_class==="light":!0}function wa(n,e,t){let r=Ce(n,t);if(r)return r;for(let i of e){let o=Ce(i);if(o)return{color:o.color,level:o.level*.6}}return null}function It(n,e,t=null){if(n==="light"&&t==="floor")return 1.95;if(n==="light"&&t==="table")return 1.25;if(n==="light"&&t==="wall")return 1.95;switch(n){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var de=n=>n.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C";function wr(n,e){return e==="\xB0F"?(n-32)*5/9:e==="K"?n-273.15:n}var ye=(n,e)=>de(n)==="\xB0F"?e*9/5+32:e;var mh=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),fh=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),gh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),_h=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ot(n,e){let t=n.entities?.[e];return t&&(t.area_id||(t.device_id?n.devices?.[t.device_id]?.area_id:null))||null}var ya=(n,e)=>{let t=n.entities?.[e];return!!(t?.hidden||t?.entity_category)},bh=(n,e)=>L(e)??Ft(e,n.states[e]);function va(n,e){let t=n.states[e];if(!t||ya(n,e))return!1;if(Ft(e,t)!==null)return!0;let r=L(e);if(!r)return!1;let i=t.attributes.device_class;return e.startsWith("event.")?!i||i==="button"||i==="doorbell":r==="sensor"?i?mh.has(i):fh.has(String(t.attributes.unit_of_measurement??"")):r==="binary"?i?gh.has(i):!!n.entities?.[e]?.area_id:!0}function wh(n,e){let t=n.states[e];return L(e)!=="sensor"||!t?.attributes.unit_of_measurement||ya(n,e)||_h.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||V(t)}var yr=(n,e)=>e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power",ji=null;Dt(()=>ji=null);function Zi(n,e){let t=n.get(e);return t||n.set(e,t=[]),t}function vh(n){let e=new Map,t=new Map,r=new Map,i=new Map,o=[],s=u=>{(va(n,u)||wh(n,u))&&ga(bh(n,u))&&o.push(u)};for(let[u,d]of Object.entries(n.entities??{})){let m=d.device_id;m&&d.area_id&&(i.get(m)??i.set(m,new Set).get(m)).add(d.area_id),m&&yr(n,u)&&Zi(t,m).push(u),m&&!d.hidden&&!d.entity_category&&(r.get(m)??r.set(m,new Set).get(m)).add(Ui(u));let p=ot(n,u);p===null?s(u):va(n,u)&&Zi(e,p).push(u)}if(n.entities)for(let u of Object.keys(n.states))n.entities[u]||s(u);let a=qi.indexOf("binary")-.5,l=u=>{let d=L(u),m=d?qi.indexOf(d):a;return m>a&&Ft(u,n.states[u])!==null?a:m};o.sort((u,d)=>l(u)-l(d)||B(n,u).localeCompare(B(n,d)));for(let[u,d]of e){let m=n.areas?.[u]?.name;d.sort((p,h)=>l(p)-l(h)||B(n,p,m).localeCompare(B(n,h,m)))}let c=new Set;for(let[u,d]of i)d.size>1&&c.add(u);return{entities:n.entities,devices:n.devices,states:n.states,stateCount:Object.keys(n.states).length,byArea:e,powerByDevice:t,withoutArea:o,domainsByDevice:r,hubs:c}}function kr(n){let e=ji;return e&&e.entities===n.entities&&e.devices===n.devices&&(e.states===n.states||(e.states=n.states,Object.keys(n.states).length===e.stateCount))?e:ji=vh(n)}function Q(n,e){let t=vr(n,e.area_id);return e.sub_areas?.length?[...new Set([...t,...e.sub_areas.flatMap(r=>vr(n,r))])]:t}function vr(n,e){return!e||!n.entities?[]:kr(n).byArea.get(e)??[]}var Yi=(n,e)=>!!n.entities&&kr(n).hubs.has(e),xr=(n,e)=>n.entities?kr(n).powerByDevice.get(e)??[]:[];function Ji(n,e){let t=new Map;for(let i of e)Zi(t,n.entities?.[i]?.device_id??`entity:${i}`).push(i);let r=new Map(e.map((i,o)=>[i,o]));return[...t.values()].map(i=>{let o=i.find(s=>!n.entities?.[s]?.name)??i[0];return{primary:o,others:i.filter(s=>s!==o)}}).sort((i,o)=>r.get(i.primary)-r.get(o.primary))}var _t=(n,e)=>Ji(n,e).map(t=>t.primary),yh={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},kh=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),xh=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Sh=new RegExp(`(${xh.join("|")})`,"i");function $h(n,e){let t=n.entities?.[e]?.device_id,r=t&&!Yi(n,t)?kr(n).domainsByDevice.get(t):void 0;return r&&[...r].some(i=>kh.has(i))?!1:!Sh.test(`${e} ${n.states[e]?.attributes.friendly_name??""}`)}function Sr(n,e,t,r){let i=t.climate?.[r];if(i==="none")return[];if(i)return[i].flat().filter(c=>n.states[c]);let o=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=o.filter(c=>O([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(o.filter(c=>!O([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...Q(n,t).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&n.states[c]?.attributes.device_class===yh[r]&&$h(n,c))}function ae(n,e,t,r){let i=Sr(n,e,t,r).map(a=>{let l=Number(n.states[a]?.state);return r==="temperature"?wr(l,n.states[a]?.attributes.unit_of_measurement):l}).filter(Number.isFinite);if(i.length)return i.reduce((a,l)=>a+l,0)/i.length;if(r==="co2"||t.climate?.[r]==="none")return null;let o=r==="temperature"?"current_temperature":"current_humidity",s=Q(n,t).filter(a=>a.startsWith("climate.")).map(a=>n.states[a]?.attributes[o]).filter(a=>typeof a=="number"&&Number.isFinite(a));return s.length?s.reduce((a,l)=>a+l,0)/s.length:null}var Mh=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Ah=new Set(["garage","gate"]),Eh=new Set(["window","opening"]);function _n(n,e,t=!1){let r=new Map;return n.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&r.set(i.id,s)}),r}var ka=(n,e)=>n==="none"?null:n??e??null,Ct=n=>n&&n!=="none"?n:null;function xa(n,e,t){let r=n.leaves===2;return{cover:ka(n.cover,e),contact:n.sensor==="handle"&&n.contact==null?null:ka(n.contact,t),tilt:n.tilt==="none"?null:n.tilt,contact2:r?Ct(n.contact2):null,tilt2:r?Ct(n.tilt2):null,position:Ct(n.position),positionInverted:!!n.position_inverted,tiltAngle:Ct(n.tilt_angle),tiltMax:n.tilt_max??null,tiltOffset:n.tilt_offset??null,tiltInvert:!!n.tilt_invert,shut:!!n.shut,angled:n.type==="door"&&!!n.open_angle,lock:n.type==="door"?Ct(n.lock):null,cover2:n.type==="garage"?null:Ct(n.cover2)}}function bn(n,e){let t=new Map;for(let r of e){for(let i of r.rooms){let o=r.openings.filter(w=>w.room_id===i.id).sort((w,_)=>w.edge-_.edge||w.offset-_.offset);if(o.length===0)continue;let s=Q(n,i),a=w=>n.states[w]?.attributes.device_class,l=w=>s.filter(_=>L(_)==="binary"&&w(a(_)??"")),c=w=>o.filter(_=>_.type===w),u=_n(c("window"),s.filter(w=>L(w)==="cover"&&Mh.has(a(w))),!0),d=_n(c("window"),l(w=>Eh.has(w))),m=_n(c("door"),l(w=>w==="door")),p=_n(c("garage"),s.filter(w=>L(w)==="cover"&&Ah.has(a(w)??""))),h=_n(c("garage"),l(w=>w==="garage_door"));for(let w of o){let _=w.type==="window"?u:w.type==="garage"?p:null,v=w.type==="window"?d:w.type==="garage"?h:m;t.set(w.id,xa(w,_?.get(w.id),v.get(w.id)))}}for(let i of r.openings)!t.has(i.id)&&!r.rooms.some(o=>o.id===i.room_id)&&t.set(i.id,xa(i,void 0,void 0))}return t}var zh=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function $r(n,e){let t=new Map(n);for(let r of e)for(let i of r.openings){if(!i.front||t.has(i.front))continue;let o=n.get(i.id);o!==void 0&&t.set(i.front,o)}return t}function Rh(n){if(!n||V(n))return null;let e=n.attributes.window_state;for(let t of[typeof e=="string"?e:"",n.state]){let r=t.trim(),i=r&&zh.find(([o])=>o.test(r));if(i)return i[1]}return null}var Th=.5;function $a(n,e){let t=e?n.states[e]:void 0,r=t&&!V(t)?Number(t.state):NaN;if(!Number.isFinite(r))return null;let i=t.attributes.unit_of_measurement==="%"||r>1;return Math.min(1,Math.max(0,i?r/100:r))}function Dh(n,e){let t=e?n.states[e]:void 0;if(!t||V(t))return e?0:null;let r=t.attributes.current_position;return typeof r=="number"?1-Math.min(100,Math.max(0,r))/100:t.state==="closed"?1:t.state==="opening"||t.state==="closing"?.5:0}function Sa(n,e){let t=e?n.states[e]?.attributes.current_tilt_position:void 0;return typeof t=="number"?Math.min(100,Math.max(0,t))/100:null}var Ma=n=>!!n&&!n.startsWith("cover.");function Fh(n,e){let t=$a(n,e.position);if(t!==null)return e.positionInverted?t:1-t;if(Ma(e.cover))return null;let r=e.cover?n.states[e.cover]:void 0;if(r&&!V(r)){let i=r.attributes.current_position;return typeof i=="number"?1-Math.min(100,Math.max(0,i))/100:r.state==="closed"?1:r.state==="opening"||r.state==="closing"?.5:0}return e.cover?0:null}function Qi(n,e){let t=e?n.states[e]?.state:void 0;return t==="unlocked"||t==="open"||t==="opening"}function Ue(n,e,t="window"){let r=d=>!!d&&n.states[d]?.state==="on",i=d=>!!d&&!!n.states[d]&&!V(n.states[d]),o=d=>d?Rh(n.states[d]):null,s=Fh(n,e);if(t==="door"){let d=o(e.contact);return{open:d===null?e.shut?0:e.angled?1:Th:d==="closed"?0:1,open2:o(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:s,sensed:d!==null||s!==null,unlocked:Qi(n,e.lock),assumed:d===null}}if(t==="garage"){let d=s!==null||i(e.contact),m=$a(n,e.position)!==null||i(e.cover)&&!Ma(e.cover),p=i(e.contact)?r(e.contact)?0:1:null;return{open:0,open2:0,tilt:0,tilt2:0,cover:(m?s:p??s)??1,sensed:d}}let a=r(e.tilt2)||o(e.tilt2)==="tilted"||o(e.contact2)==="tilted",l=r(e.tilt)||o(e.tilt)==="tilted"||o(e.contact)==="tilted",c=l?1:0,u=e.tiltAngle?Number(n.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let d=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,d/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}return{open:o(e.contact)==="open"&&!l?1:0,open2:o(e.contact2)==="open"&&!a?1:0,tilt:c,tilt2:a?1:0,cover:s,sensed:i(e.contact)||i(e.tilt)||Number.isFinite(u),...e.cover2?{cover2:Dh(n,e.cover2)}:{},...Sa(n,e.cover)!==null?{slats:Sa(n,e.cover)}:{}}}var Aa=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,Ea=/(kühl|fridge|gefrier|freezer)/i,za=/(spülmaschine|geschirrspül|dishwasher)/i,Ph=/(kochfeld|herd|induktion|cooktop)/i,Hh={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:Aa,tv_wall:Aa,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:Ea,fridge_smart:Ea,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:za,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Ph,sink:za,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Ra={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},Da=new Set(["tv_board","tv_wall"]);var Fa=n=>Da.has(n)||!!na(n),Ta=n=>!!ne(n)?.electric&&/speaker|multiroom|soundbar/.test(n.split(":").pop()??n),vn=n=>Fa(n)||n==="desk"||n==="fridge_smart",Nt=n=>!!n&&n!=="none";function Ih(n,e){if(yr(n,e))return e;let t=n.entities?.[e]?.device_id;return t?xr(n,t).find(r=>r!==e)??null:null}var Ch=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&O([e,t],r.points));function wn(n,e,t,r){return n.find(i=>e?.test(t(i)))??(r?n[0]??null:null)}function bt(n,e){let t=new Map;for(let r of e){let i=new Set([...r.furniture.flatMap(o=>[o.entity,o.power,o.fan_entity,o.screen_device]),...r.placements.map(o=>o.entity_id)].filter(Nt));for(let o of r.furniture){let s=o.type in Ra,a=ra(o.type),l=s?Ra[o.type]:Hh[o.type];if(!l&&!a&&!Ta(o.type)&&o.entity==null&&o.power==null)continue;let c=Ch(r,o.x,o.z),u=(c?_t(n,Q(n,c)):[]).filter(_=>!i.has(_)),d=_=>`${_} ${B(n,_)}`,m=_=>u.filter(v=>L(v)===_),p=o.entity==="none"?null:o.entity??null;if(o.entity==null){if(o.type==="ceiling_fan"){let _=(c?Q(n,c):[]).filter($=>!i.has($)),v=new Set(_.filter($=>L($)==="fan").map($=>n.entities?.[$]?.device_id).filter(Boolean));p=_.find($=>L($)==="light"&&v.has(n.entities?.[$]?.device_id))??wn(m("light"),l,d,!1)}else if(s)p=wn(m("light"),l,d,!0);else if(o.type==="robot_vacuum"){let _=c?.area_id??null;p=Object.keys(n.entities??{}).find(v=>v.startsWith("vacuum.")&&!i.has(v)&&ot(n,v)===_)??null}else if(o.type==="radiator"||a)p=wn(m("climate"),l,d,!0);else if(Fa(o.type)){let _=m("media");p=_.find(v=>n.states[v]?.attributes.device_class==="tv")??wn(_,l,d,Da.has(o.type))}else if(Ta(o.type)){let _=m("media").filter(v=>n.states[v]?.attributes.device_class!=="tv");p=wn(_,l,d,!1)??(_.length===1?_[0]:null)}else l&&(p=u.find(_=>["switch","media","fan"].includes(L(_)??"")&&l.test(d(_)))??null);p&&i.add(p)}let h=o.power==="none"?null:o.power??null;o.power==null&&(h=p?Ih(n,p):null,!h&&l&&c&&!s&&(h=Q(n,c).find(_=>yr(n,_)&&!i.has(_)&&l.test(d(_)))??null),h&&i.add(h));let w=null;if(o.type==="ceiling_fan"&&(w=o.fan_entity==="none"?null:o.fan_entity??null,o.fan_entity==null)){let _=(c?Q(n,c):[]).filter($=>L($)==="fan"&&!i.has($)),v=p?n.entities?.[p]?.device_id:void 0;w=(v?_.find($=>n.entities?.[$]?.device_id===v):void 0)??_[0]??null,w&&i.add(w)}(p||h||w)&&t.set(o.id,{entity:p,power:h,...o.type==="ceiling_fan"?{fan:w}:{}})}}return t}function wt(n,e){let t=new Set,r=bt(n,e),i=e.some(o=>o.openings.some(s=>s.confirm))?bn(n,e):null;for(let o of e){for(let s of o.placements)s.confirm&&t.add(s.entity_id);for(let s of o.openings){let a=s.confirm?i?.get(s.id)?.cover:null;Nt(a)&&t.add(a)}for(let s of o.furniture){let a=s.confirm?r.get(s.id)?.entity:null;Nt(a)&&t.add(a)}}return t}var Mr=n=>n==="fridge"||n==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(n.slice(n.lastIndexOf(":")+1)),Nh=8,Wh=-12;function Pa(n,e,t){let r=a=>{if(!Nt(a))return null;let l=n.states[a],c=l?Number(l.state):NaN;return Number.isFinite(c)?l.attributes.unit_of_measurement==="\xB0F"?(c-32)*5/9:c:null},i=r(e.temp_entity),o=r(e.temp_entity2);return i===null&&o===null?null:{text:[i,o].filter(a=>a!==null).map(t).join(" \xB7 "),warm:i!==null&&i>Nh||o!==null&&o>Wh}}var Ha=60;function Xi(n,e){if(!Nt(e))return null;let t=n.states[e],r=t?Number(t.state):NaN;return Number.isFinite(r)?t.attributes.unit_of_measurement==="\xB0F"?(r-32)*5/9:r:null}function Ia(n,e){return(e.temps??[]).flatMap(t=>{let r=Xi(n,t.entity);return r===null?[]:[{label:t.label.trim(),celsius:r,entity:t.entity}]})}function Ca(n,e){let t=i=>Nt(i)&&["on","open"].includes(n.states[i]?.state??""),r=new Map;for(let i of e.flatMap(o=>o.furniture))i.type==="fridge_smart"&&r.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return r}function Na(n,e,t){let r=(u,d)=>O([u,d],t.points),i=bt(n,[e]),o=bn(n,[e]),s=new Set(t.hidden??[]),a=[...e.placements.filter(u=>!u.outside&&r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>[i.get(u.id)?.entity,i.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let d=o.get(u.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]],l=[...new Set(a.filter(u=>!!u&&!!n.states[u]))].filter(u=>!s.has(u)),c=new Set(l);return{shown:l,more:Q(n,t).filter(u=>!c.has(u)&&!s.has(u))}}function yn(n,e,t=[]){let r=[];for(let i of e){let o=(a,l)=>i.rooms.some(c=>c.points.length>=3&&O([a,l],c.points)),s=bt(n,[i]);r.push(...i.placements.filter(a=>a.outside||!o(a.x,a.z)).map(a=>a.entity_id)),r.push(...i.furniture.filter(a=>!o(a.x,a.z)).flatMap(a=>[s.get(a.id)?.entity,s.get(a.id)?.power]));for(let a of i.outdoor??[])a.area_id&&r.push(..._t(n,vr(n,a.area_id))),r.push(a.pump_entity,a.temp_entity)}return[...new Set(r.filter(i=>!!i&&!!n.states[i]&&!t.includes(i)))]}var Lh={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./},Oh=/^k?W$/,qe=n=>n&&n!=="none"?n:null;function Bh(n,e){let t=e.car??{},r=qe(t.device)??qe(e.entity),i=r?n.entities?.[r]?.device_id:null,o=i&&n.entities?Object.values(n.entities).filter(m=>m.device_id===i).map(m=>m.entity_id):[],s=(m,p)=>String(n.states[m]?.attributes[p]??""),a=m=>`${m} ${s(m,"friendly_name")} ${n.entities?.[m]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(m,p,h=()=>!0)=>o.find(w=>p.includes(w.split(".")[0])&&Lh[m].test(a(w))&&h(w))??null,c=(m,p)=>o.find(h=>h.startsWith(`${m}.`)&&s(h,"device_class")===p)??null,u=m=>o.find(p=>p.startsWith(`${m}.`))??null,d=m=>s(m,"unit_of_measurement");return{soc:qe(t.soc)??c("sensor","battery")??l("soc",["sensor"],m=>d(m)==="%"),range:qe(t.range)??l("range",["sensor"],m=>/km|mi/.test(d(m)))??l("range",["sensor"]),charging:qe(t.charging)??l("charging",["sensor"],m=>Oh.test(d(m)))??l("charging",["binary_sensor","switch"]),plugged:qe(t.plugged)??c("binary_sensor","plug")??l("plugged",["binary_sensor"]),lock:qe(t.lock)??u("lock")??l("lock",["binary_sensor"]),climate:qe(t.climate)??u("climate")??l("climate",["switch","binary_sensor"]),tracker:qe(t.tracker)??u("device_tracker")}}function Wa(n,e){return e.flatMap(r=>r.furniture).filter(r=>r.type==="parking"&&r.car).flatMap(r=>Object.values(Bh(n,r))).filter(r=>!!r)}var La=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Ar(n,e,t){if(t==="none")return null;if(t)return t;let r=e?n.entities?.[e]?.device_id:null;return!r||!n.entities?null:Object.values(n.entities).find(o=>o.device_id===r&&o.entity_id.startsWith("sensor.")&&(La.test(o.translation_key??"")||La.test(o.entity_id.split(".")[1])))?.entity_id??null}function Oa(n){return n.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function eo(n,e,t,r){let i=r?n.states[r]?.state:t?n.states[t]?.attributes.current_room:void 0;if(typeof i!="string"||["","unknown","unavailable"].includes(i))return null;let o=Oa(i);if(!o)return null;let s=l=>[l.name,l.area_id??"",l.area_id&&n.areas?.[l.area_id]?.name||""].map(Oa).filter(Boolean);return e.find(l=>s(l).includes(o))??e.find(l=>s(l).some(c=>c.length>=3&&(c.includes(o)||o.includes(c))))??null}var Vh=new Set(["garage","gate","door"]);function to(n,e){let t=new Set,r=new Set,i=o=>{if(!o||o==="none"||!n.states[o])return;let s=L(o);s==="light"&&t.add(o),s==="cover"&&!Vh.has(String(n.states[o].attributes.device_class??""))&&r.add(o)};for(let o of e.rooms){let s=new Set(o.hidden??[]);_t(n,Q(n,o)).filter(a=>!s.has(a)).forEach(i)}return e.placements.forEach(o=>i(o.entity_id)),e.furniture.forEach(o=>i(o.entity)),{lights:[...t],covers:[...r]}}function Va(n){let e=n.split(".")[0];switch(e){case"scene":case"script":return[e,"turn_on"];case"automation":return[e,"trigger"];case"button":case"input_button":return[e,"press"];default:return["homeassistant","toggle"]}}var Ba=/^(light|switch|fan|input_boolean|media_player)\./;function Wt(n,e,t){let r=new Set;t&&Ba.test(t)&&r.add(t);let i=e?n.states[e]?.attributes?.entity_id:void 0;if(Array.isArray(i))for(let o of i)typeof o=="string"&&Ba.test(o)&&r.add(o);return[...r].filter(o=>n.states[o]?.state==="on")}function no(n,e,t,r){let i=t.target?.trim()??"",o=(s,a)=>e.dispatchEvent(new CustomEvent(s,{detail:a,bubbles:!0,composed:!0}));switch(t.action){case"navigate":if(!i)return;history.pushState(null,"",i),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return;case"more_info":i&&o("hass-more-info",{entityId:i});return;case"service":{if(!i.includes("."))return;let[s,a]=i.split(".",2);if(s==="scene"&&a==="turn_on"){let l=typeof t.data?.entity_id=="string"?t.data.entity_id:null,c=Wt(n,l,r);if(c.length){n.callService("homeassistant","turn_off",{entity_id:c});return}}n.callService(s,a,t.data??{});return}case"fire_dom_event":o("ll-custom",t.data??{});return}}function Ga(n,e){let t=e.data?.entity_id,r=e.state_entity||(e.action==="more_info"?e.target:null)||(e.action==="service"&&typeof t=="string"?t:null),i=r?n?.states[r]:void 0;return!!i&&["on","open","playing","home","heat","cool","unlocked"].includes(i.state)}var Gh=[.25,.9,.45],Kh=[1,.82,.55];function Uh(n,e){let t=n.states[e],r=Number(t?.attributes.current_power_w??t?.attributes.power??NaN);return Number.isFinite(r)?r:null}function Ka(n,e,t){let r=[];return e.forEach((i,o)=>{if(!i||i==="none")return;let s=n.states[i];if(!s||V(s))return;if(L(i)==="light"){let c=Ce(s);c&&r.push({gang:o,color:c.color,level:c.level});return}if(!se(s)&&s.state!=="on")return;let a=t?Uh(n,i):null,l=a===null?.8:Math.min(1,.45+Math.sqrt(Math.max(0,a))/40);r.push({gang:o,color:t?Gh:Kh,level:l})}),r}var ro=(n,e)=>(n??[]).slice(0,e).filter(t=>!!t&&t!=="none");var qh=864e5,io=n=>{let e=new Date(n);return e.setHours(0,0,0,0),e.getTime()};function jh(n,e){let t=/(\d{4})-(\d{2})-(\d{2})/.exec(n);if(t)return new Date(Number(t[1]),Number(t[2])-1,Number(t[3])).getTime();if(t=/(\d{1,2})\.(\d{1,2})\.(\d{4}|\d{2})?/.exec(n),t){let r=t[3]?t[3].length===2?2e3+Number(t[3]):Number(t[3]):new Date(e).getFullYear(),i=new Date(r,Number(t[2])-1,Number(t[1])).getTime();return!t[3]&&i<io(e)&&(i=new Date(r+1,Number(t[2])-1,Number(t[1])).getTime()),i}return t=/(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(n),t?new Date(Number(t[3]),Number(t[1])-1,Number(t[2])).getTime():null}function Er(n,e=Date.now()){if(!n||V(n))return null;let t=Number(n.attributes.daysTo);if(n.attributes.daysTo!==void 0&&Number.isFinite(t))return Math.max(0,Math.round(t));let r=String(n.state).trim();if(/^-?\d+(\.\d+)?$/.test(r))return Math.max(0,Math.round(Number(r)));let i=r.toLowerCase();if(/\b(heute|today)\b/.test(i))return 0;if(i.includes("\xFCbermorgen")||i.includes("uebermorgen"))return 2;if(/\b(morgen|tomorrow)\b/.test(i))return 1;let o=jh(r,e)??(n.attributes.device_class==="timestamp"||n.attributes.device_class==="date"?Date.parse(r):null);if(o!==null&&Number.isFinite(o))return Math.max(0,Math.round((io(o)-io(e))/qh));let s=/(\d+)\s*(tag|tage|tagen|day|days)\b/i.exec(r);return s?Number(s[1]):null}function Ua(n){return!n||V(n)?!1:n.state==="on"||/^(post|mail|yes|ja|true|voll|full|detected)$/i.test(n.state.trim())}function qa(n,e=20){if(!n||V(n))return null;let t=Number(n.state);return Number.isFinite(t)?{moisture:t,thirsty:t<e}:n.entity_id.startsWith("binary_sensor.")?{moisture:NaN,thirsty:n.state==="on"}:null}var Zh=/remain|rest|verbleib|time_left|timeleft|finish|end_time|fertig|programmende|program_end|done_at/i;function kn(n,e,t=Date.now()){for(let r of e){if(!r.startsWith("sensor.")||!Zh.test(`${r} ${n.states[r]?.attributes.friendly_name??""}`))continue;let i=n.states[r];if(!i||V(i))continue;let o=i.attributes;if(o.device_class==="timestamp"){let c=Date.parse(i.state);if(Number.isFinite(c)&&c>t)return Math.ceil((c-t)/6e4);continue}let s=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(i.state.trim());if(s){let c=s[3]!==void 0?Number(s[1])*60+Number(s[2])+Number(s[3])/60:Number(s[1])*60+Number(s[2]);if(c>0)return Math.ceil(c);continue}let a=Number(i.state);if(!Number.isFinite(a)||a<=0)continue;let l=String(o.unit_of_measurement??"min").toLowerCase();return Math.ceil(l==="h"?a*60:l==="s"?a/60:a)}return null}function je(n,e){let t=e?n.entities?.[e]?.device_id:null;return t&&n.entities?Object.values(n.entities).filter(r=>r.device_id===t).map(r=>r.entity_id):[]}var zr=n=>n<60?`${n} min`:`${Math.floor(n/60)} h ${String(n%60).padStart(2,"0")} min`;function Yh(n,e){let t=e?n.states[e]:void 0;if(!t||V(t))return null;let r=t.attributes.current_position;return typeof r=="number"?Math.min(100,Math.max(0,r)):t.state==="open"?100:t.state==="closed"?0:t.state==="opening"||t.state==="closing"?50:null}function ja(n,e){let t=new Map;for(let r of e.floors.flatMap(i=>i.furniture)){let i=ne(r.type);if(!i||!ar(i))continue;let o=r.cover_entity?Yh(n,r.cover_entity):null;t.set(r.id,ta(i,o!==null&&r.cover_inverted?100-o:o))}return t}var Jh={view:"3D",editor:"Editor",all_floors:"Alle Etagen",outside_area:"Au\xDFen",outside_area_hint:"Alle Ger\xE4te drau\xDFen auf einen Blick: im Garten, au\xDFerhalb der R\xE4ume, und was zu Au\xDFen geh\xF6rt (etwa die Wetterstation auf dem Dach).",device_outside:"Geh\xF6rt zu Au\xDFen",device_outside_hint:"Das Ger\xE4t z\xE4hlt nicht zum Raum darunter (eine Wetterstation auf dem Dach) und steht im Au\xDFen-Panel.",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",no_rooms_admin:"Die Etagen sind angelegt, aber es gibt noch keinen Raum. W\xE4nde allein reichen nicht: Zeichne im Editor mit \u201ERechteck\u201C oder \u201EFreie Form\u201C mindestens einen Raum.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",walls_slope:"Schr\xE4g",walls_slope_hint:"W\xE4nde schr\xE4g abgeschnitten: vorne halbhoch, hinten voll \u2013 wie ein Puppenhaus, dreht mit der Kamera",walls_solid:"Massiv",walls_solid_hint:"Massive W\xE4nde in ihren Farben statt Glas (Farben: Editor \u2192 Einstellungen, pro Raum im Raum)",wall_paint_outside:"Wandfarbe au\xDFen",wall_paint_inside:"Wandfarbe innen",furn_color_body:"M\xF6belfarbe Korpus",furn_color_wood:"M\xF6belfarbe Holz",furn_color_fabric:"M\xF6belfarbe Stoff",furn_color_white:"M\xF6belfarbe Wei\xDF",furn_color_metal:"M\xF6belfarbe Metall",furn_color_dark:"M\xF6belfarbe Dunkel",furn_color_hint:"Die M\xF6bel sind aus wenigen Materialien gebaut, auch die aus dem M\xF6belbauer und den Paketen. Hier bekommt jedes Material eine Farbe f\xFCr das ganze Haus; eine Karte kann eigene Farben setzen. Am st\xE4rksten sieht man sie im Look Neon, Tag und Blaupause f\xE4rben sie nur leicht.",wall_paint_room:"Wandfarbe innen (dieser Raum)",wall_paint_floor:"Wandfarbe au\xDFen (diese Etage)",wall_paint_hint:"Gilt in der 3D-Ansicht \u201EMassiv\u201C.",wall_paint_default:"Standard",card_solid_walls:"Massive W\xE4nde (in ihren Farben)",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",floor_layer:"Ebene (ein- und ausblendbar)",floor_power:"Etagen-Z\xE4hler (Leistung)",floor_power_hint:"Ein Leistungssensor nur f\xFCr diese Etage (ein Unterz\xE4hler, eine Wohnung). Sein Wert steht auf dem Etagen-Schild und in der Ansicht dieser Etage auf der Haus-Karte, mit seinem Anteil am Verbrauch des Hauses.",floor_power_share:"{n} % vom Haus",living_area:"Wohnfl\xE4che {living}",room_living:"Z\xE4hlt zur Wohnfl\xE4che",living_area_none:"Keine Wohnfl\xE4che \xB7 Grundfl\xE4che {floor}",living_area_low:"Wohnfl\xE4che {living} (Grundfl\xE4che {floor}, davon {low} unter 2 m H\xF6he)",living_area_hint:"Gerechnet wie die Wohnfl\xE4chenverordnung: die Fl\xE4che innerhalb der W\xE4nde, voll ab 2 m lichter H\xF6he, zur H\xE4lfte zwischen 1 und 2 m (unter Schr\xE4gen), unter 1 m gar nicht. Ein Richtwert, kein Aufma\xDF.",living_area_floor:"Wohnfl\xE4che: {floor}",living_area_floor_house:"Wohnfl\xE4che dieser Etage: {floor} \xB7 ganzes Haus: {house}",print_plan:"Plan drucken / PDF",print_plan_hint:"Jede Etage als sauberer Plan mit Ma\xDFen und Fl\xE4chen, dazu eine Fl\xE4chentabelle \u2013 zum Drucken oder im Druckdialog als PDF speichern.",image_export:"Als Bild speichern (PNG)",image_export_all:"Alle Etagen als Bilder",image_export_hint:"Ein sauberer 2D-Grundriss von oben als PNG (wei\xDFer Hintergrund, 2400 px), z. B. f\xFCr Bluetooth-Tracker-Karten oder Dokumente. W\xE4hle darunter, was er zeigt.",image_furniture:"Mit M\xF6beln (Umrisse)",image_dimensions:"Mit Ma\xDFen",image_names:"Mit Raumnamen und Fl\xE4che",image_export_done:"{n} Bild(er) gespeichert.",image_export_empty:"Diese Etage hat keine R\xE4ume zum Exportieren.",image_export_failed:"Das Bild konnte nicht erstellt werden.",print_title:"Grundriss",print_room:"Raum",print_floor_area:"Grundfl\xE4che",print_living:"Wohnfl\xE4che",print_low:"unter 2 m",print_total:"Summe",print_blocked:"Das Druckfenster wurde blockiert \u2013 bitte Pop-ups f\xFCr Home Assistant erlauben.",check_open:"Plan pr\xFCfen",note:"Notiz",note_add:"Notiz hier",note_text:"Text",note_placeholder:"z. B. \u201EFilter wechseln\u201C oder \u201ESicherung 12\u201C",note_due:"F\xE4llig am",note_height:"H\xF6he \xFCber dem Boden (m)",note_height_hint:"Wo der Pin in der 3D-Ansicht schwebt: 1,3 m ist Augenh\xF6he, mehr f\xFCr etwas unter der Decke (ein Absperrventil, eine Klappe).",note_photo_upload:"Foto hinzuf\xFCgen",note_photo_hint:"Das Foto erscheint, wenn man die Notiz in der 3D-Ansicht antippt, z. B. wie das Ventil aussieht.",note_due_hint:"Ab diesem Tag wird der Pin orange.",note_repeat:"Wiederholen alle \u2026 Monate (0 = einmalig)",note_repeat_hint:"F\xFCr wiederkehrende Aufgaben (Filter wechseln, K\xFChlschrank reinigen): Nach \u201EErledigt\u201C in der 3D-Ansicht ist die Notiz nach so vielen Monaten wieder f\xE4llig. Jeder darf \u201EErledigt\u201C dr\xFCcken.",note_done:"Erledigt",note_last_done:"Zuletzt erledigt: {d}",note_is_due:"Diese Notiz ist f\xE4llig.",keys_title:"Tasten im Editor",keys_undo:"R\xFCckg\xE4ngig",keys_redo:"Wiederholen",keys_duplicate:"Raum verdoppeln",keys_delete:"Auswahl l\xF6schen",keys_nudge:"Auswahl um einen Rasterschritt verschieben",keys_nudge_10:"\u2026 um 10 cm",keys_nudge_1:"\u2026 um 1 cm",keys_rotate:"M\xF6bel um 90\xB0 drehen (Shift: zur\xFCck)",keys_lock:"M\xF6bel, Ger\xE4t oder Dachteil festsetzen / l\xF6sen",keys_close_shape:"Freie Form schlie\xDFen",keys_escape:"Abbrechen, Werkzeug verlassen, Auswahl aufheben",keys_straight:"Beim Zeichnen: gerade Linien",keys_sheet:"Diese \xDCbersicht",tour_title:"Erste Schritte",tour_1_title:"R\xE4ume zeichnen",tour_1:"Mit \u201E{rect}\u201C oder \u201E{free}\u201C zeichnest du die R\xE4ume; die W\xE4nde entstehen von selbst. Ordne jedem Raum seinen Home-Assistant-Bereich zu \u2013 dann findet NextFloor seine Ger\xE4te. Hast du schon Bereiche, legt \u201E{rooms}\u201C im Etagenformular sie auf einmal an.",tour_2_title:"T\xFCren und Fenster",tour_2:"\u201E{opening}\u201C setzt sie auf eine Wand. Verkn\xFCpfe ihren Kontakt oder Rollladen \u2013 in 3D gehen sie dann mit auf und zu, und offene Fenster melden sich.",tour_3_title:"M\xF6bel und Ger\xE4te",tour_3:"\u201E{furniture}\u201C \xF6ffnet die Bibliothek \u2013 oder baue eigene St\xFCcke in der \u{1F6E0}\uFE0F M\xF6bel-Werkstatt. W\xE4hlst du einen Raum, stehen darunter die Ger\xE4te seines Bereichs zum Platzieren bereit; Lampen leuchten dann in der Farbe ihres Lichts.",tour_4_title:"Ansehen und pr\xFCfen",tour_4:"\u201E{split}\u201C zeigt dein Haus beim Zeichnen; oben wechselst du in die 3D-Ansicht. \u201E{check}\u201C listet, was noch fehlt \u2013 und mit ? siehst du jederzeit die Tasten.",tour_next:"Weiter",tour_back:"Zur\xFCck",tour_done:"Los geht's",tour_skip:"\xDCberspringen",check_open_hint:"Listet, was im Plan fehlt oder schief ist, mit einer L\xF6sung per Tipp.",check_title:"Plan-Pr\xFCfung",check_all_good:"Alles in Ordnung \u2013 nichts gefunden.",check_hint:"{n} Punkte gefunden. Blaue Kn\xF6pfe \xE4ndern den Plan (R\xFCckg\xE4ngig geht wie immer), die anderen zeigen die Stelle.",check_room_no_area:"\u201E{room}\u201C hat keinen Home-Assistant-Bereich: seine Ger\xE4te werden nicht gefunden.",check_room_no_area_named:"\u201E{room}\u201C hat keinen Bereich \u2013 der freie Bereich \u201E{area}\u201C hei\xDFt genauso.",check_areas_unplaced:"{n} Bereiche dieser Etage haben noch keinen Raum: {names}",check_devices_unplaced:"\u201E{room}\u201C: {n} Ger\xE4te des Bereichs stehen noch nicht im Plan.",check_rooms_overlap:"\u201E{a}\u201C und \u201E{b}\u201C liegen \xFCbereinander.",check_opening_off_wall:"Eine T\xFCr oder ein Fenster in \u201E{room}\u201C sitzt auf keiner Wand.",check_entity_missing:"{n} Ger\xE4te-Pins zeigen auf Entit\xE4ten, die Home Assistant nicht mehr kennt ({ids}).",check_furniture_entity_missing:"Ein M\xF6bel ist mit {id} verkn\xFCpft \u2013 die Entit\xE4t gibt es nicht mehr.",check_battery_low:"Batterie schwach: {name} ({level} %)",battery_low_n:"Batterie schwach: {names}",check_standby:"{name} zieht {w} W, obwohl aus \u2013 etwa {cost} im Jahr.",check_fix_show:"Zeigen",check_fix_ignore:"Ignorieren",check_show_devices:"{n} Ger\xE4te ansehen",check_ignore_all:"Alle {n} ignorieren",check_reset_ignored:"{n} ignorierte Ger\xE4te wieder pr\xFCfen",check_fix_set_area:"\u201E{area}\u201C zuordnen",check_fix_add_rooms:"R\xE4ume anlegen",check_fix_place:"{n} setzen",check_fix_remove:"{n} entfernen",floor_layer_hint:"Diese Etage ist kein Geschoss, sondern eine Ebene \u2013 z. B. alle B\xE4ume oder die Deko. Die 3D-Ansicht zeigt oben ein Auge, mit dem du sie auf jedem Ger\xE4t ein- und ausblendest.",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",floor_copy:"Etage duplizieren",floor_copy_hint:"Die Kopie kommt oben aufs Haus, mit allen R\xE4umen, W\xE4nden, T\xFCren und Fenstern. R\xE4ume und Etage verlieren ihre Verkn\xFCpfung mit Home Assistant, M\xF6bel ihre Entit\xE4ten; Energieger\xE4te bleiben auf der alten Etage.",floor_copy_furniture:"M\xF6bel mitnehmen",floor_copy_devices:"Ger\xE4te-Pins mitnehmen",floor_copy_devices_hint:"Dieselbe Entit\xE4t steht dann auf beiden Etagen.",floor_copy_outdoor:"Au\xDFenfl\xE4chen mitnehmen",floor_copy_make:"Kopie anlegen",floor_copy_name:"{name} (Kopie)",furn_to_floor:"Auf Etage verschieben",furn_to_floor_hint:"Das M\xF6bel wandert an dieselbe Stelle auf der gew\xE4hlten Etage.",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",sub_area_add:"+ Bereich im Raum",sub_area_hint:"Ein Teil des Raums mit eigenem Home-Assistant-Bereich, aber ohne eigene W\xE4nde \u2013 eine Leseecke, ein Regal, eine K\xFCchenzeile im Wohnraum. Seine Ger\xE4te und Sensoren geh\xF6ren zu diesem Raum.",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",furn_task:"Aufgabe",furn_task_hint:"Legt eine wiederkehrende Notiz an diesem Ger\xE4t an (Filter wechseln, reinigen, pr\xFCfen): in der 3D-Ansicht mit \u201EErledigt\u201C-Knopf.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",sofa_shape:"Form",sofa_straight:"Gerade",sofa_l:"L-Form (Spiegeln: andere Seite)",sofa_u:"U-Form",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",share_view:"Ansicht teilen",share_view_hint:"Speichert das Haus als kleine Datei, die in jedem Browser ohne Home Assistant aufgeht (\xFCber die Online-Demo von NextFloor) \u2013 zum Zeigen f\xFCr Familie oder Planer. Ohne Ger\xE4te und Entit\xE4ten, wie eine Vorlage.",share_view_title:"Unser Haus in NextFloor",share_view_needs_js:"Diese Seite braucht JavaScript und eine Internetverbindung.",share_view_file:"ansicht",share_view_done:"Ansicht gespeichert \u2013 die Datei im Browser \xF6ffnen oder weitergeben.",version_save:"Stand speichern \u2026",version_save_hint:"H\xE4lt den Plan unter einem Namen fest (\u201Evor dem Umbau\u201C). Benannte St\xE4nde bleiben, wenn die automatischen Wiederherstellungspunkte gehen.",version_name_prompt:"Name f\xFCr diesen Stand (z. B. \u201Evor dem Umbau\u201C):",version_saved:"Stand \u201E{name}\u201C gespeichert.",version_compare:"Vergleichen",version_delete_confirm:"\u201E{name}\u201C l\xF6schen?",version_same:"Kein Unterschied zum Plan.",version_diff_n:"{n} Unterschiede zum Plan, wie er jetzt ist:",diff_floor_added:"Etage \u201E{name}\u201C neu",diff_floor_removed:"Etage \u201E{name}\u201C entfernt",diff_room_added:"Raum \u201E{name}\u201C neu",diff_room_removed:"Raum \u201E{name}\u201C entfernt",diff_room_renamed:"\u201E{detail}\u201C hei\xDFt jetzt \u201E{name}\u201C",diff_room_reshaped:"\u201E{name}\u201C umgeformt ({detail} m\xB2)",diff_opening_added:"{name} neu ({detail})",diff_opening_removed:"{name} entfernt ({detail})",diff_furniture_added:"{name} neu",diff_furniture_removed:"{name} entfernt",diff_furniture_moved:"{name} verschoben oder ge\xE4ndert",diff_device_added:"Ger\xE4t {name} gesetzt",diff_device_removed:"Ger\xE4t {name} entfernt",diff_device_moved:"Ger\xE4t {name} verschoben",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",blind_kind:"Art des Behangs",blind_roller:"Rollladen au\xDFen",blind_venetian:"Raffstore mit Lamellen",blind_inside:"Rollo innen",blind_venetian_inside:"Jalousie innen (Lamellen)",cover2_entity:"Zweiter Rollladen (rechte H\xE4lfte)",cover_my:"Lieblingsposition \u201EMy\u201C (%, 0 = keine)",cover_my_go:"Zur Lieblingsposition ({p} %)",blind_hint:"Ein Raffstore dreht seine Lamellen in 3D mit der Lamellenstellung des Rollladens; ein Rollo innen h\xE4ngt hinter dem Glas. Ein breites Fenster kann f\xFCr seine rechte H\xE4lfte einen zweiten Rollladen haben. Die Lieblingsposition erscheint als \u201EMy\u201C im Schnellmen\xFC: ein Rollladen mit Positionen f\xE4hrt dorthin, ein Somfy-RTS-Motor ohne R\xFCckmeldung f\xE4hrt mit Stopp in seine eigene My-Stellung.",confirm_switch:"{name} wirklich schalten?",lock_confirm_unlock:"{name} wirklich aufschlie\xDFen?",gang_switch_one:"Schaltet",furn_cover_entity:"Bewegt sich mit",furn_cover_hint:"Vorhang, Leinwand, Markise oder Tor folgen dieser Cover-Entit\xE4t (Rollladen, Vorhang, Markise, Tor) und fahren mit ihr. Ein Tipp \xF6ffnet ihr Men\xFC (auf, Stopp, zu).",furn_cover_inverted:"Laufrichtung umkehren",furn_cover_inverted_hint:"F\xFCr eine Markise oder einen Vorhang, die im Plan genau andersherum fahren als in Wirklichkeit: ausgefahren zeigt dann eingefahren und umgekehrt.",gang_switch:"Taste {n} schaltet",gang_socket_one:"Steckdose an",gang_socket:"Steckdose {n} an",gang_switch_hint:"Eine Taste leuchtet, solange ihr Licht an ist (in seiner Farbe). Ein Tipp schaltet; bei mehreren Tasten fragt ein kleines Men\xFC, welche. Dieselbe Entit\xE4t darf an mehreren Schaltern sitzen.",gang_socket_hint:"Eine Steckdose leuchtet gr\xFCn, solange ihr Schalter an ist \u2013 heller, je mehr sie zieht. Ein Tipp schaltet; bei mehreren fragt ein kleines Men\xFC, welche.",lock_confirm_lock:"{name} abschlie\xDFen?",opening_lock:"Smart Lock",opening_lock_hint:"Ein Tipp auf die T\xFCr schlie\xDFt ab oder auf (immer mit R\xFCckfrage). Solange sie aufgeschlossen ist, leuchtet ihre Kante.",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",units:"Ma\xDFe anzeigen in",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:"Wie L\xE4ngen und Fl\xE4chen im Plan, in den Formularen und in der Wandansicht stehen. Eingaben bleiben in Metern.",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig. Meist hilft \u201EL\xFCcken schlie\xDFen\u201C in den Etageneinstellungen.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",side_failed:"Dieses Formular lie\xDF sich nicht anzeigen ({error}). Der Grundriss bleibt bedienbar. Bitte melde den Text in einem GitHub-Issue.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",mat_herringbone:"Fischgr\xE4tparkett",mat_marble:"Marmor",mat_terrazzo:"Terrazzo",mat_vinyl:"Vinyl / Laminat",mat_brick:"Klinker / Ziegel",mat_decking:"Holzdielen (Terrasse)",mat_cork_vinyl:"Kork-Vinylboden",mat_laminate:"Laminat",mat_linoleum:"Linoleum",mat_parquet:"Klassisches Parkett",wall_material_default:"Standard",wall_material_room:"Wandmaterial (dieser Raum)",wall_material_floor:"Wandmaterial au\xDFen (Geschoss)",wall_material_outside:"Wandmaterial au\xDFen",wall_material_inside:"Wandmaterial innen",wmat_plaster:"Putz",wmat_brick:"Ziegel / Klinker",wmat_concrete:"Sichtbeton",wmat_wood_cladding:"Holzverkleidung",wmat_stone:"Naturstein",wmat_tile:"Wandfliesen",wmat_wallpaper:"Tapete",wmat_slate:"Schiefer",service_search:"Dienst suchen\u2026",service_target_entity:"Ziel-Entit\xE4t",service_use_linked:"Verkn\xFCpfte verwenden: {name}",furn_color:"M\xF6belfarbe",furn_material:"M\xF6beltextur / Material",fmat_auto:"Automatisch",fmat_wood:"Holz (Nussbaum)",fmat_oak:"Eiche (hell)",fmat_fabric:"Stoff / Polster",fmat_leather:"Leder",fmat_metal:"Metall (geb\xFCrstet)",fmat_lacquer:"Lack (gl\xE4nzend)",fmat_marble:"Marmor",fmat_rattan:"Rattan / Geflecht",furn_group:"M\xF6belgruppe",furn_group_hint:"M\xF6bel mit demselben Gruppennamen werden gemeinsam verschoben, gedreht und dupliziert.",furn_group_placeholder:"z. B. Esstisch-Set",furn_group_rotate:"Gruppe",furn_group_duplicate:"Gruppe duplizieren",furn_group_leave:"Aus Gruppe l\xF6sen",weather_animations:"Wetteranimationen drau\xDFen anzeigen",weather_animations_hint:"Zeigt Regen, Schnee, Wolken und Wind animiert \xFCber dem Grundst\xFCck.",quick_controls:"Schnellreglage (Tablet-Leiste)",quick_controls_hint:"Touch-Buttons unten im Bild, die jeweils ein Popup mit Licht-Dimmer, Farbe, Rollladen oder Szenen \xF6ffnen.",quick_group_new:"Lichter",quick_group_add:"Schnellbutton hinzuf\xFCgen",quick_group_add_entity:"Entit\xE4t zum Popup hinzuf\xFCgen",quick_group_from_room:"Alle Ger\xE4te aus Raum hinzuf\xFCgen",quick_group_add_cameras:"Alle Kameras hinzuf\xFCgen",furn_mesh_upload:"3D-Modell hochladen (.dae/.glb)",furn_mesh_remove:"3D-Modell entfernen",furn_mesh_hint:"L\xE4dt ein eigenes 3D-Modell (z. B. Collada .dae aus SketchUp 3D Warehouse, .glb, .obj, .stl) direkt f\xFCr dieses M\xF6belst\xFCck hoch.",auto_day:"Auto-Tag-Thema",auto_night:"Auto-Nacht-Thema",settings_page_intro:"Haus-Einstellungen, Tablet-Schnellreglage, Favoriten und Anwesenheit an einem Ort.",model_add_library:"Neues 3D-M\xF6belst\xFCck in die Bibliothek hochladen",model_add_library_hint:"SketchUp 3D Warehouse (.dae), .glb, .gltf, .obj oder .stl \u2013 erscheint direkt in der M\xF6belbibliothek.",model_add_library_btn:"Modell in Bibliothek laden \u2026",tablet_ui_title:"Tablet, Seitenleiste & Kiosk-Modus",tablet_ui_hint:"Passe an, welche Uhren, Wetterinfos und Schnellbuttons sichtbar bleiben \u2013 auch wenn die oberen Men\xFCs ausgeblendet sind.",tablet_sidebar_pos:"Seitenleiste neben dem Grundriss",tablet_side_right:"Rechts",tablet_side_left:"Links",tablet_side_off:"Aus",tablet_sidebar_clock:"Uhrzeit & Datum in Seitenleiste",tablet_sidebar_weather:"Au\xDFenwetter & Temperatur",tablet_sidebar_summary:"Hausstatus (Lichter, Fenster, Alarm)",tablet_show_quick_dock:"Schnellbuttons unten immer anzeigen (auch im Kiosk-Modus)",tablet_show_nav_kiosk:"Etagen-/Raum-Leiste auch ohne oberes Men\xFC anzeigen",tablet_show_central:"Sternmen\xFC, Suche & Szenen anzeigen",tablet_show_walk:"Geh-Modus & Sperrbutton anzeigen",tablet_show_legend:"Legende & Energieleiste anzeigen",tablet_sidebar_appliances:"Waschmaschine / Sp\xFClmaschine anzeigen",tablet_price:"Strompreis",tablet_price_entity:"Strompreis-Sensor (Nordpool / Tibber)",tablet_pip_camera:"Kamera f\xFCr Auto-Popup (T\xFCrklingel/Bewegung)",tablet_pip_trigger:"Ausl\xF6ser f\xFCr Kamera-Popup",tablet_pip_duration:"Kamera-Popup Dauer (Sek.)",tablet_screensaver:"Bildschirmschoner nach (Min., 0 = aus)",tablet_show_cam_bookmarks:"Kamera-Lesezeichen anzeigen",appliance_done:"Fertig",cam_bookmark_add:"Aktuelle 3D-Ansicht speichern",cam_bookmark_prompt:"Name f\xFCr diese 3D-Ansicht:",tablet_lights_on:"Lichter an",tablet_openings:"Offen",tablet_indoor:"Innen",weather_preview:"Wetteranimation testen / simulieren",weather_preview_live:"Live (echtes Wetter)",weather_preview_snow:"Test: Schnee",weather_preview_rain:"Test: Regen",weather_preview_pour:"Test: Starkregen",weather_preview_storm:"Test: Gewitter & Regen",weather_preview_fog:"Test: Nebel",tablet_sidebar_style:"Stil der Seitenleiste",tablet_style_card:"Karte (mit Hintergrund)",tablet_style_clean:"Clean (ohne Rahmen/Hintergrund)",tablet_style_minimal:"Minimal (Akzentlinie)",tablet_clock_size:"Schriftgr\xF6\xDFe der Uhr",tablet_size_normal:"Normal (32 px)",tablet_size_large:"Gro\xDF (46 px)",tablet_size_xl:"Sehr gro\xDF (62 px)",tablet_clock_color:"Uhrfarbe",tablet_clock_seconds:"Sekunden anzeigen",tablet_sidebar_people:"Personen zu Hause anzeigen",tablet_sidebar_energy:"Strom / Solar / Batterie anzeigen",tablet_dock_style:"Stil der Schnellbuttons",tablet_dock_pill:"Standard-Buttons",tablet_dock_clean:"Clean (transparent)",tablet_dock_large:"Gro\xDF (Touch)",tablet_power:"Netz",tablet_solar:"Solar",tablet_battery:"Batterie",tablet_sidebar_media:"Aktuelle Medienwiedergabe anzeigen",alarm_ring_title:"Alarm-Leuchtlinie ums Haus",alarm_ring_entity:"Alarmanlage / Helfer",alarm_ring_style:"Form der Leuchtlinie",alarm_ring_perimeter:"Au\xDFenw\xE4nde (Umriss)",alarm_ring_circle:"Kreis ums Haus",alarm_ring_armed:"Rot leuchten wenn scharf",alarm_ring_disarmed:"Gr\xFCn leuchten wenn unscharf",alarm_ring_helper:"Ein-/Aus-Helfer (optional)",alarm_ring_pin:"PIN-Code f\xFCr eigenes Alarm-Keypad",alarm_ring_pin_hint:"Optionaler PIN-Code f\xFCr eigene Helfer-Alarme (input_boolean/switch). Bei alarm_control_panel wird der Code an Home Assistant gesendet.",alarm_arm_away:"Abwesend scharf",alarm_arm_home:"Zuhause scharf",alarm_disarm:"Unscharf schalten",alarm_wrong_pin:"Falscher PIN-Code",furn_quick_control:"Licht / Steckdose / Szene direkt zuweisen",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",room_objects:"Objekte in diesem Raum",room_objects_linked:"Mit einer Entit\xE4t verkn\xFCpft",room_objects_locked:"Fixiert",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_announce:"\u{1F4E2} Durchsage",announce_placeholder:"Eigene Nachricht \u2026",announce_send:"Sagen",announce_sent:"Gesagt: \u201E{message}\u201C",announce_failed:"Durchsage fehlgeschlagen: {error}",announce_phrase_1:"Essen ist fertig!",announce_phrase_2:"Zeit f\xFCrs Bett!",announce_phrase_3:"Bitte runterkommen!",announce_phrase_4:"Wir fahren gleich los!",announce_phrase_5:"Der Hund muss raus!",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",readable:"Gut lesbar",view_only:"Nur ansehen",card_view_only:"Nur ansehen (nichts schalten)",view_only_hint:"Zeigt alles, schaltet aber nichts: Tippen, Regler und Schalter von NextFloor senden nichts an Home Assistant. Gut f\xFCr Wandtablets, die man aus Versehen ber\xFChrt. Das Detailfenster von Home Assistant bleibt bedienbar.",readable_hint:"Kr\xE4ftigere Kontraste und gr\xF6\xDFere Schrift \u2013 f\xFCr Wandtablets und alle, die so besser lesen.",plain:"Nur Grundriss",plain_hint:"Zeigt nur W\xE4nde, T\xFCren, Fenster und Treppen, ohne M\xF6bel. Ger\xE4te und ihre Pins bleiben.",right_back:"Rechtsklick = zur\xFCck",right_back_hint:"Ein kurzer Rechtsklick in der 3D-Ansicht geht einen Schritt zur\xFCck: vom Raum zur Etage, von der Etage zum Haus (wie ein Doppeltipp auf leere Fl\xE4che). Ziehen mit der rechten Taste verschiebt weiter die Ansicht.",stl:"3D-Druck (STL)",stl_hint:"Speichert das Haus als STL-Datei (W\xE4nde, B\xF6den, M\xF6bel und Au\xDFenfl\xE4chen aller Etagen) zum 3D-Drucken, im Ma\xDFstab 1:100 (ein Meter wird zu 10 mm). Fenster, Licht und Dach fehlen; ein Slicer repariert die Datei bei Bedarf.",card_plain:"Nur Grundriss",card_rooms:"Nur diese R\xE4ume",card_rooms_hint:"Die Karte zeigt nur die angehakten R\xE4ume mit ihren M\xF6beln, Ger\xE4ten, T\xFCren und Fenstern (zum Beispiel f\xFCr ein Tablet in der K\xFCche). Nichts angehakt: der ganze Plan.",card_templates:"Kartenvorlagen",card_templates_hint:"Eine Dashboard-Karte einmal hier einrichten (mit den Einstellungen der Karte) und auf jedem Tablet nur noch den Namen angeben: `template: k\xFCche_tablet`. \xC4nderungen hier erreichen alle Karten mit dieser Vorlage; was auf der Karte selbst steht, gilt vor der Vorlage.",template_name:"Neue Vorlage (Name)",template_add:"Vorlage anlegen",template_reload:"Bildschirme mit dieser Vorlage neu laden",template_reload_all:"Alle Bildschirme neu laden",template_use:"Auf der Dashboard-Karte: `template: {name}`",card_template:"Kartenvorlage",card_template_none:"keine (nur diese Karte)",card_readable:"Gut lesbar",all_off_n:"Alles aus ({n})",all_off_hint:"Schaltet Lichter, Schalter, Ventilatoren und Medien des Raums aus; zehn Sekunden lang l\xE4sst es sich r\xFCckg\xE4ngig machen.",all_off_done:"Alles aus.",all_off_undo:"R\xFCckg\xE4ngig",all_off_floor:"Alles aus im {floor} ({n} Ger\xE4te), zehn Sekunden lang r\xFCckg\xE4ngig zu machen",mood_save:"Stimmung speichern",mood_save_hint:"Speichert, wie die Lampen des Raums gerade leuchten, als Stimmung \u2013 ein Tipp darauf stellt sie sp\xE4ter wieder her, \u201E\u2192\u201C \xFCbertr\xE4gt sie auf einen anderen Raum.",mood_new:"Stimmung",mood_set:"Stimmung einstellen",mood_carry:"Auf einen anderen Raum \xFCbertragen",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",favorite_floor:"Auf welcher Etage dieser Favorit erscheint",favorite_all_floors:"Alle Etagen",outside_hidden:"Drau\xDFen: Ger\xE4te ausblenden",outside_hidden_hint:"Ger\xE4te, die das Fenster \u201EDrau\xDFen\u201C nicht zeigen soll (sie bleiben im Plan).",outside_hidden_add:"Ger\xE4t ausblenden",outside_view_hint:"Ansicht f\xFCr \u201EDrau\xDFen\u201C: Dreh die 3D-Vorschau auf den Garten und \xFCbernimm sie. Beim \xD6ffnen von \u201EDrau\xDFen\u201C fliegt die Kamera dorthin.",outside_view_set:"Diese Ansicht f\xFCr Drau\xDFen",outside_view_reset:"Ansicht f\xFCr Drau\xDFen zur\xFCcksetzen",room_facts:"Raumfenster: angezeigte Angaben",room_fact_sun:"Sonnenstunden",room_fact_comfort:"Komfort",room_fact_air:"L\xFCftungshinweis",room_fact_circuits:"Stromkreise",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",ambilight:"Leuchten hinter dem Fernseher (%)",ambilight_hint:"Wie kr\xE4ftig es hinter dem Fernseher leuchtet, solange er l\xE4uft. 0 schaltet es aus (zum Beispiel wenn du LED-Streifen am Fernseher hast), 100 ist die Standardst\xE4rke.",sound_rings:"Klangringe (%)",sound_rings_hint:"Wie gro\xDF die Ringe um den Lautsprecher werden, solange er spielt. 0 schaltet sie aus, Bild und Leuchten bleiben; 100 ist die Standardgr\xF6\xDFe. Die Gr\xF6\xDFe folgt au\xDFerdem der Lautst\xE4rke des Lautsprechers: leiser hei\xDFt kleiner.",screen_device:"Ger\xE4t am Bildschirm (optional)",screen_source:"Spielkonto {n} (optional)",screen_sources_hint:"F\xFCr eine Spielekonsole am Bildschirm: Das Ger\xE4t ist die Konsole, solange sie aus ist, bleibt der Bildschirm dunkel. Ein Spielkonto ist sein Sensor \u201EIm Spiel\u201C (Xbox-Integration), Spiel und Bild findet NextFloor dann selbst. Es zeigt das erste Konto, das gerade spielt. Ob die Konsole an ist, meldet der Xbox-Dienst von Microsoft; nach dem vollst\xE4ndigen Herunterfahren (Energiesparmodus oder Stecker gezogen) kann er noch \u201Ean\u201C melden, dann zeigt der Bildschirm wom\xF6glich ein Spiel von einer anderen Konsole.",glow_scale:"Leuchtst\xE4rke in 3D (%)",light_effects:"Effektanimationen in 3D",light_effects_hint:"Nur exakte HA-Effektnamen zuordnen. Ohne Zuordnung bleibt die HA-Farbe statisch. \xC4ndert nichts in Home Assistant.",light_effects_enabled:"Animationen f\xFCr diese Leuchte erlauben",light_effect_unmapped:"Nicht zugeordnet (statisch)",light_effect_add:"Exakten Effektnamen hinzuf\xFCgen",light_effect_name_limit:"Der exakte Effektname muss 1 bis 255 Zeichen lang sein. Er wird nicht gek\xFCrzt.",light_effect_count_limit:"Maximal 100 Zuordnungen. Entferne zuerst einen vorhandenen Eintrag.",light_effect_exists:"Dieser Effektname ist bereits zugeordnet. Die vorhandene Zuordnung bleibt erhalten.",light_animation_none:"Statisch",light_animation_rainbow:"Regenbogen (ersetzt Farbe)",light_animation_pulse:"Pulsieren (Intensit\xE4t)",light_animation_flicker:"Flackern (Intensit\xE4t)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_speakers:"Nur auf diesen Lautsprechern (keiner = auf allen)",media_play:"Abspielen",media_pause:"Pause",media_previous:"Zur\xFCck",media_next:"Weiter",media_volume:"Lautst\xE4rke",media_sources:"Quellen",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_alerts:"Eigene Warnungen",circuits:"Sicherungskasten",circuits_hint:"Die Stromkreise mit den R\xE4umen, die an ihnen h\xE4ngen. Das Raum-Panel nennt sie, und die Suche findet sie (\u201EF12\u201C).",circuit_name:"Name",circuit_new:"Neuer Stromkreis",circuit_add:"Stromkreis hinzuf\xFCgen",circuit_add_room:"Raum hinzuf\xFCgen",own_alerts_hint:"Eine Zeile in der Warnleiste der 3D-Ansicht, solange eine Entit\xE4t in einem Zustand ist \u2013 \u201EWassertank leer\u201C vom Saugroboter, \u201ESp\xFClmaschine fertig\u201C. Mehrere Zust\xE4nde mit Komma; bei Zahlen <20 oder >80.",alerts_max:"Warnungen gleichzeitig",alerts_rows:"Zeilen der Warnleiste",alerts_bar_hint:"Gilt f\xFCr alle Warnungen der 3D-Ansicht. Weitere Warnungen zeigt \u201E+N\u201C, ein Tipp darauf klappt alle aus; mit zwei Zeilen brechen sie in eine zweite Zeile um.",own_alert_entity:"Wenn \u2026",own_alert_state:"\u2026 im Zustand ist (leer = an)",own_alert_text:"\u2026 dann diese Warnung",own_alert_color:"Farbe",own_alert_tap:"Antippen",own_alert_tap_info:"\xF6ffnet die Details",own_alert_tap_toggle:"schaltet die Entit\xE4t",own_alert_tap_room:"springt in den Raum",own_alert_house:"Ganzes Haus",own_alert_new:"Neue Warnung",own_alert_add:"Warnung hinzuf\xFCgen",today:"Heute",tomorrow:"Morgen",today_days:"Tage auf der Karte \u201EHeute\u201C",today_days_one:"Nur heute",today_days_n:"{n} Tage",forecast:"Wettervorhersage",forecast_hint:"Eine kleine Karte mit den n\xE4chsten Tagen der Wetter-Entit\xE4t (Einstellungen): Wetter, H\xF6chst- und Tiefstwert, Regen. Sie steht in einer oberen Ecke der 3D-Ansicht, oben rechts unter der Karte \u201EHeute\u201C.",forecast_days:"Vorhersage",forecast_off:"Aus",forecast_corner:"Ecke",today_none:"Heute steht nichts an.",today_calendars:"Kalender f\xFCr \u201EHeute\u201C",today_calendars_hint:"Die Termine dieser Kalender stehen oben rechts in der 3D-Ansicht auf der Karte \u201EHeute\u201C, zusammen mit den M\xFClltonnen, die heute oder morgen abgeholt werden. Ein Tipp auf den Titel klappt die Karte ein.",own_button_state:"Leuchtet, solange \u2026 an ist (optional)",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",panel_fold:"Einklappen (Raum bleibt sichtbar)",panel_unfold:"Wieder aufklappen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color_pick:"Farbe w\xE4hlen",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_floor_thumbs_folded:"Mini-Ansichten eingeklappt starten",card_floor_thumbs_folded_hint:"Nur kleine Etagen-Kn\xF6pfe am Rand \u2013 der Pfeil klappt die Bilder trotzdem auf",card_room_names:"Raumnamen anzeigen",card_device_names:"Ger\xE4tenamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_sensor_bar:"Eigene Sensoren oben",card_sensor_bar_hint:"Die im Editor gew\xE4hlten Sensoren (Einstellungen) oben links auf der Karte",card_central_open:"Sternmen\xFC offen und gro\xDF",card_central_open_hint:"Favoriten und eigene Kn\xF6pfe stehen von Anfang an offen, eine Nummer gr\xF6\xDFer",card_keep_camera:"Kamera beim Etagenwechsel behalten",card_keep_camera_hint:"Gleiche Seite, H\xF6he und Entfernung auf jeder Etage, auch nach \u201EAlle Etagen\u201C",card_today:"Karte \u201EHeute\u201C",card_today_hint:"Termine von heute und f\xE4llige M\xFClltonnen oben rechts",card_announcements:"Durchsagen",card_announcements_hint:"Durchsagen (Aktion \u201ENextFloor: Durchsage\u201C) erscheinen gro\xDF auf der Karte, mit Gong und gesprochen",weather_short:"Wetter",time_of_day:"Tageszeit",time_of_day_hint:"Zeigt Sonne, Licht, Schatten und Look zu einer anderen Uhrzeit von heute. Noch einmal tippen zeigt wieder das Jetzt.",menu_open:"Men\xFC offen",menu_open_hint:"Das Sternmen\xFC mit Favoriten und eigenen Kn\xF6pfen steht auf diesem Ger\xE4t von Anfang an offen, eine Nummer gr\xF6\xDFer \u2013 f\xFCr ein Wandtablet, das vor allem Szenen schaltet.",keep_camera:"Kamera behalten",keep_camera_hint:"Beim Wechsel der Etage bleibt die Kamera auf derselben Seite, H\xF6he und Entfernung, statt die neue Etage von der Startseite aus einzupassen.",view_zoom:"Zoom",view_zoom_hint:"Wie nah die eingepassten Ansichten kommen \u2013 auf kleinen Tablets wirkt das Haus gr\xF6\xDFer.",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",card_weather_density:"Regen- und Schneemenge",card_weather_density_hint:"Weniger Tropfen und Flocken als das Wetter meldet; Wolken, Nebel und Blitze bleiben",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht und Schatten",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden, und das Haus wirft seinen Schatten auf das Grundst\xFCck. Ohne Haken bleiben Boden und Grundst\xFCck ohne Sonnenflecken und Schatten.",sun_arc:"Sonnenbogen und Kompass",sun_arc_hint:"Zeichnet den Weg der Sonne von heute als Bogen \xFCber das Grundst\xFCck, mit einem Ring und den Himmelsrichtungen am Boden (Norden rot). Braucht die Position deines Zuhauses in Home Assistant.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_by:"Alarm ausgel\xF6st durch {cause}",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_lost:"Kontakt antwortet nicht: {name}",rain_sensor:"Regensensor (eigene Wetterstation)",rain_sensor_inverted:"Regensensor umkehren",rain_sensor_inverted_hint:"F\xFCr Sensoren, die bei Regen \u201Eaus\u201C (oder 0) melden und bei Trockenheit \u201Eein\u201C.",outage_sensor:"Sensor f\xFCr Stromausfall",outage_hint:"Ein Bin\xE4rsensor der Klasse Strom, der aus ist, ein anderer Bin\xE4rsensor, der an ist, ein Status wie \u201Eoff_grid\u201C oder \u201Ebackup\u201C oder eine Spannung unter 50 V l\xF6sen eine Warnung f\xFCrs ganze Haus aus.",contact_warning:"Warnen, wenn ein T\xFCr- oder Fensterkontakt nicht erreichbar ist",contact_warning_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D geschlossen aus, obwohl es keiner wei\xDF. Dann nennt ein Hinweis den Kontakt. Ein Neustart von Home Assistant warnt nicht.",night_lock_warning:"Nachts warnen, wenn eine T\xFCr nicht abgeschlossen ist",night_lock_warning_hint:"Zwischen 22 und 6 Uhr nennt ein Hinweis die T\xFCrschl\xF6sser des Plans, die offen stehen.",alert_unlocked_night:"Nicht abgeschlossen: {name}",motion_markers_active:"Bewegungsmelder nur zeigen, wenn sie etwas erkennen",motion_markers_active_hint:"Gilt f\xFCr Bewegungs-, Anwesenheits- und Pr\xE4senzmelder. Ein Melder, dessen Symbol auf immer zeigen steht, bleibt sichtbar.",room_double_tap:"Doppeltipp auf einen Raum",room_double_tap_hint:"Ein Doppeltipp auf einen Raum schaltet seine Lichter aus, wenn eins an ist, sonst alle an. Ger\xE4te mit \u201EErst fragen\u201C bleiben immer au\xDFen vor.",room_double_tap_area:"Lampen im Plan und alle Lichter des Bereichs",room_double_tap_plan:"Nur Lampen im Plan",room_double_tap_off:"Nichts schalten",card_room_double_tap_auto:"Wie im Plan eingestellt",status_entities:"Eigene Sensoren oben in der 3D-Ansicht",status_add:"Sensor hinzuf\xFCgen",status_name:"Anzeigename",status_entities_hint:"Zum Beispiel Au\xDFentemperatur, Alarmanlage oder Luftqualit\xE4t: Sie stehen oben links mit Name und Wert, auch in einem ge\xF6ffneten Raum. Antippen \xF6ffnet die Details. Bis zu 12.",announce_tts:"Text-zu-Sprache f\xFCr Durchsagen",announce_phrases:"S\xE4tze f\xFCr Durchsagen (einer pro Zeile)",announce_volume:"Durchsage-Lautst\xE4rke (%)",announce_phrases_hint:"Leer: die mitgelieferten S\xE4tze. Durchsagen gibt es auch als Aktion \u201ENextFloor: Durchsage\u201C f\xFCr Automationen \u2013 auf den Lautsprechern der R\xE4ume und auf jedem offenen NextFloor-Bildschirm.",opening_rain_warning:"Bei Regen warnen",opening_light_well:"Lichtschacht davor",sill_boards:"Fensterbank",sill_boards_auto:"Automatisch",sill_boards_none:"Keine",sill_boards_inside:"Nur innen",sill_boards_outside:"Nur au\xDFen",room_names_short:"Raumnamen",device_names_short:"Ger\xE4tenamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",import_other_hint:"Aus Sweet Home 3D: die .sh3d-Datei hier importieren. Etagen, R\xE4ume, T\xFCren, Fenster und freie W\xE4nde werden \xFCbernommen, M\xF6bel nicht.",import_sh3d_found:"Sweet Home 3D: {floors} Etagen, {rooms} R\xE4ume, {openings} T\xFCren und Fenster, {walls} freie W\xE4nde ({furniture} M\xF6bel werden nicht \xFCbernommen).",import_dxf_found:"DXF: {rooms} R\xE4ume (geschlossene Polylinien) und {walls} freie W\xE4nde (Linien) auf einer Etage.",import_ifc_found:"In der IFC-Datei: {floors} Etagen, {rooms} R\xE4ume und {openings} T\xFCren und Fenster (die W\xE4nde zeichnet NextFloor aus den R\xE4umen).",import_roomplan_found:"Raumscan (RoomPlan): {rooms} R\xE4ume, {openings} T\xFCren und Fenster; {skipped} Objekte wurden nicht \xFCbernommen (M\xF6bel stellst du selbst).",import_error_roomplan_empty:"Im Raumscan sind keine W\xE4nde.",import_error_ifc_empty:"In der IFC-Datei sind keine R\xE4ume (IfcSpace) mit Grundriss.",import_error_dxf_empty:"In der DXF-Datei sind keine Linien oder Polylinien.",import_error_sh3d:"Das ist keine Sweet-Home-3D-Datei, die sich lesen l\xE4sst (es braucht Sweet Home 3D 5.3 oder neuer).",import_error_sh3d_empty:"In der Sweet-Home-3D-Datei sind keine R\xE4ume oder W\xE4nde.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",bars_unfold:"Schalter",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_buttons:"Raum-Kn\xF6pfe",card_room_buttons_hint:"Eine Reihe mit einem Knopf je Raum oben in der Karte \u2013 antippen \xF6ffnet den Raum, wie das Antippen im Modell",card_room_panel_hint:"Lichter und Rolll\xE4den des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",care_bin_today:"Heute Abholung",care_bin_tomorrow:"Morgen Abholung",care_bin_days:"In {n} Tagen",care_mail_yes:"Post ist da",care_mail_no:"Leer",care_plant_thirsty:"Durst",care_plant_ok:"Gut versorgt",care_time_left:"Noch {time}",care_entity_bin:"Abholtermin (Sensor)",care_entity_mail:"Post-Sensor",care_entity_plant:"Bodenfeuchte (Sensor)",care_thirsty_below:"Durst unter (%)",care_hint_bin:"Ein Sensor mit dem n\xE4chsten Abholtermin: Tage, ein Datum, \u201Eheute\u201C/\u201Emorgen\u201C oder die Integration Waste Collection Schedule. Am Tag davor und am Abholtag leuchtet die Tonne.",care_hint_mail:"Ein Sensor, der meldet, dass Post im Kasten ist (z. B. ein Kontakt an der Klappe). Dann leuchtet der Briefkasten.",care_hint_plant:"Ein Feuchtesensor in der Erde. Darunter leuchtet die Pflanze und meldet Durst.",lib_cat_lights:"Leuchten",lib_cat_seating:"Sitzen",lib_cat_tables:"Tische",lib_cat_storage:"Schr\xE4nke & Regale",lib_cat_beds:"Betten",lib_cat_kitchen:"K\xFCche",lib_cat_appliances:"Haushaltsger\xE4te",lib_cat_bath:"Bad",lib_cat_media:"TV & Audio",lib_cat_office:"B\xFCro",lib_cat_tech:"Technik",lib_cat_climate:"Heizung & Klima",lib_cat_energy:"Energie",lib_cat_garden:"Garten & Terrasse",lib_cat_plants:"Pflanzen",lib_cat_kids:"Kinder",lib_cat_fitness:"Fitness",lib_cat_pets:"Haustiere",lib_cat_workshop:"Werkstatt & Garage",lib_cat_music:"Musik & Atelier",lib_cat_season:"Saison & Deko",lib_cat_pictures:"Bilder & Rahmen",lib_cat_vehicles:"Fahrzeuge",lib_cat_building:"Treppen & Bauteile",lib_cat_decor:"Deko & Sonstiges",lib_favourites:"Favoriten",lib_recent:"Zuletzt benutzt",lib_for_room:"Passend zu {room}",lib_all_rooms:"Alle R\xE4ume zeigen",lib_linkable:"verkn\xFCpfbar",lib_lit:"leuchtet",lib_outdoor:"drau\xDFen",lib_fav_add:"Zu den Favoriten",lib_fav_remove:"Aus den Favoriten nehmen",lib_sizes:"Gr\xF6\xDFen",feature_name_energy:"Energiefluss",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",models:"Eigene 3D-Modelle",models_hint:"F\xFCr manche Fahrzeuge kann NextFloor ein echtes 3D-Modell zeigen, wenn du eins besitzt. W\xE4hle die Datei (.glb) hier aus: NextFloor dreht sie richtig herum, macht sie leichter, markiert den Lack und legt sie auf deinem Home Assistant ab. Ohne Modell sieht das Fahrzeug aus wie bisher.",models_licence:"Die Dateien geh\xF6ren dir und bleiben auf deinem Home Assistant. NextFloor liefert keine Modelle mit; bitte pr\xFCfe, dass die Lizenz deines Modells die Nutzung in deiner Installation erlaubt.",model_add:"Modell hochladen \u2026",model_replace:"Modell ersetzen \u2026",model_remove:"Entfernen",model_present:"vorhanden",model_missing:"noch keins",model_remove_confirm:"Das Modell \u201E{id}\u201C von Home Assistant l\xF6schen?",model_removed:"Modell \u201E{id}\u201C gel\xF6scht.",model_uploaded:"Modell \u201E{id}\u201C hochgeladen ({size}). Lade das Panel neu, damit es erscheint.",model_upload:"Auf Home Assistant ablegen",model_info:"{triangles} Dreiecke, {size} m",model_front:"Vorderseite",model_front_hint:"Drehe das Modell, bis die Front zum Betrachter zeigt (schr\xE4g nach unten links in der Vorschau).",model_paint:"Lack (die Farbe, die du im Editor w\xE4hlst)",model_paint_preview:"Farbe in der Vorschau",model_detail:"Detailgrad",model_detail_light:"Leicht (Tablet)",model_detail_normal:"Normal",model_detail_fine:"Fein",model_result:"Ergebnis: {triangles} Dreiecke, {size}",model_error_not_glb:"Das ist keine .glb-Datei (bin\xE4res glTF). Exportiere das Modell als \u201EglTF binary\u201C.",model_error_compressed:"Die Datei ist komprimiert (Draco, Meshopt oder KTX). Exportiere sie ohne Kompression.",model_error_empty:"In der Datei ist nichts Dreidimensionales zu finden.",model_error_unreadable:"Die Datei l\xE4sst sich nicht lesen: {detail}",model_error_too_large:"Die Datei ist gr\xF6\xDFer als {max}. W\xE4hle einen geringeren Detailgrad.",model_upload_forbidden:"Nur Administratoren d\xFCrfen Modelle hochladen.",model_upload_too_large:"Home Assistant nimmt keine Dateien \xFCber {max} an. W\xE4hle einen geringeren Detailgrad.",model_upload_not_glb:"Home Assistant hat die Datei abgelehnt (kein bin\xE4res glTF).",model_upload_bad_id:"Die Modell-Kennung ist ung\xFCltig.",model_upload_other:"Das Hochladen hat nicht geklappt: {detail}",ext_intro:"Hier importierst du eigene M\xF6bel-Packs, l\xE4dst eigene 3D-Modelle hoch und bindest Plugins ein.",plugin:"Plugin",plugins_title:"Plugins",plugins_intro:"Plugins erweitern NextFloor um eigene Licht-Animationen, Ger\xE4te und Karten im Raum-Panel. Trag die Adresse eines Plugins ein (eine .js-Datei in /config/www, also /local/\u2026, aus HACS /hacsfiles/\u2026 oder https://\u2026).",plugins_docs:"Wie man ein Plugin schreibt",plugins_warning:"Plugins laufen mit denselben Rechten wie NextFloor in deinem Browser. Nimm nur Plugins, deren Quelle du vertraust.",plugins_off:"ausgeschaltet",plugins_error:"Fehler",plugins_loading:"wird geladen \u2026",plugins_nothing_registered:"geladen, hat aber nichts angemeldet",plugins_loaded:"aktiv",plugins_reload_hint:"Wirkt nach dem Neuladen der Seite",plugins_remove:"Entfernen",plugins_none:"Noch keine Plugins eingetragen.",plugins_from_dashboard:"\xDCber eine Dashboard-Ressource angemeldet",plugins_add:"Hinzuf\xFCgen",plugins_url_invalid:"Bitte eine .js-Adresse unter /local/\u2026, /hacsfiles/\u2026 oder https://\u2026 angeben.",plugins_exists:"Dieses Plugin ist schon eingetragen.",plugins_limit:"H\xF6chstens 20 Plugins.",packs_title:"M\xF6bel-Packs",packs_intro:"Eigene M\xF6bel als Pack (JSON) importieren: als Datei oder unten einf\xFCgen. {n} Packs sind mitgeliefert und immer da.",packs_docs:"Pack-Format",packs_none:"Noch keine eigenen Packs importiert.",community_title:"Community-M\xF6bel",community_intro:"M\xF6bel, die andere mit dem M\xF6bel-Baukasten gebaut und geteilt haben \u2013 gepr\xFCft und kostenlos. Bau deine eigenen:",community_builder:"M\xF6bel-Baukasten \xF6ffnen",community_how:"So teilst du deine",community_load:"Community-M\xF6bel laden",community_none:"Noch keine Community-M\xF6bel \u2013 sei die oder der Erste!",community_install:"Installieren",community_update:"Aktualisieren",community_installed:"Installiert",community_failed:"Die Community-M\xF6bel lie\xDFen sich nicht laden: {detail}",pack_import:"Pack-Dateien importieren \u2026",pack_paste:"JSON importieren",pack_paste_empty:"F\xFCge zuerst das JSON eines Packs ein.",pack_paste_not_json:"Das ist kein g\xFCltiges JSON: {detail}",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_remove:"Entfernen",pack_builtin_tag:"Integriert",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_error_not_a_pack:'Das ist kein M\xF6bel-Pack (es fehlt "format": "nfpack").',pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Das Pack ist zu gro\xDF (h\xF6chstens 1 MB).",pack_error_needs_update:"Dieses Pack braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal importieren.",pack_error_other:"Import fehlgeschlagen: {detail}",store_open:"Plugin-Store \xF6ffnen",store_close:"Plugin-Store schlie\xDFen",store_intro:"Gepr\xFCfte Plugins aus der Community. Jedes wird vor der Aufnahme angesehen und danach nicht mehr ver\xE4ndert.",store_submit:"Eigenes Plugin einreichen",store_empty:"Noch keine Plugins im Store.",store_failed:"Der Store lie\xDF sich nicht laden ({error}).",store_install:"Installieren",store_installed:"installiert",store_update:"Aktualisieren",store_confirm:`\u201E{name}\u201C von {author} installieren?

Ein Plugin l\xE4uft mit denselben Rechten wie NextFloor in deinem Browser. Die Datei wurde gepr\xFCft, ihr Inhalt ist festgelegt:
{url}`,manual:"Anleitung",manual_more:"Mehr erfahren",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",live_autarky:"autark",live_fold:"Karte verkleinern",live_unfold:"Karte aufklappen",live_day_hint:"Die letzten 24 Stunden: Solar (Fl\xE4che) und Verbrauch (Linie)",live_week_hint:"Die letzten 7 Tage: Sonne {solar} kWh, Verbrauch {use} kWh (gelb: Sonne, hell: Verbrauch)",live_days:"Tage",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_game_since:"seit {time}",live_game_achievements:"Erfolge und Gamerscore in diesem Spiel",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",live_car_departure_entity:"Abfahrtszeit (optional)",live_car_departure:"Abfahrt {time}",live_car_open:"Offen: {parts}",printer_printing:"druckt",printer_done:"fertig",printer_paused:"pausiert",printer_error:"Fehler",printer_idle:"bereit",printer_done_at:"fertig um {time}",printer_layer:"Schicht",printer_nozzle:"D\xFCse",printer_bed:"Bett",heatpump_heating:"heizt",heatpump_water:"macht Warmwasser",heatpump_cooling:"k\xFChlt",heatpump_defrost:"taut ab",heatpump_idle:"in Ruhe",heatpump_flow_return:"Vor- \u2192 R\xFCcklauf",heatpump_heat:"W\xE4rme",heatpump_power:"Strom",heatpump_outside:"au\xDFen",pack_missing_item:"M\xF6bel aus entferntem Pack",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_lift_slide:"Hebe-Schiebet\xFCr",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",glass_panes:"Glasfelder",glass_panes_auto:"automatisch (ca. 0,9 m)",glass_panes_hint:"0 = ein einziges Glas ohne Teilung, leer = Teilung etwa alle 0,9 m",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_free_corner_hint:"Tipp: Beim Ziehen einer Ecke die Umschalttaste halten, dann bewegt sich nur diese Ecke und aus dem Rechteck wird eine freie Form.",outdoor_opacity:"Deckkraft (%)",outdoor_opacity_hint:"100 = undurchsichtig. Weniger macht die Fl\xE4che durchsichtig, etwa eine Einfahrt \xFCber dem Keller; der Umriss bleibt.",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_corners_hint:"Ecken: ein + auf einer Kante f\xFCgt eine Ecke hinzu, Ziehen formt die Fl\xE4che, \xD7 entfernt eine Ecke.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",fence_gates:"Tore im Zaun",gate_add:"+ Tor im Zaun",gate_edge:"Zaunseite",gate_kind:"Art",gate_single:"Gartentor",gate_double:"Doppeltor",gate_sliding:"Schiebetor",gate_offset:"Mitte ab Zaunanfang (m)",gate_width:"Breite (m)",gate_entity:"Antrieb oder Schalter",gate_contact:"Kontakt (an = offen)",fence_gates_hint:"Ein Tor ist eine L\xFCcke im Zaun mit Torpfosten und Fl\xFCgel. Mit einem Antrieb (Cover, Schalter, Hilfsschalter, Schloss) und/oder Kontakt geht es in 3D auf: Garten- und Doppeltor schwingen nach innen, ein Schiebetor f\xE4hrt hinter den Zaun.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt, bekommt hier ein Loch \u2013 ein Pool in der Terrasse, ein Teich oder eine Wildfl\xE4che im Rasen. Die Reihenfolge beim Zeichnen spielt keine Rolle. Ein Pool schneidet sich von selbst aus.",outdoor_area_hint:"Der Home-Assistant-Bereich dieser Fl\xE4che (Garten, Terrasse, Pool): seine Ger\xE4te und Sensoren stehen unter Drau\xDFen, und ein Pin auf der Fl\xE4che \xF6ffnet es.",pool_temp:"Wassertemperatur (optional)",pool_pump:"Pumpe / Filter (optional)",pool_pump_on:"Pumpe l\xE4uft",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",map_on:"Echte Karte unter dem Plan anzeigen",map_lat:"Breitengrad",map_lon:"L\xE4ngengrad",map_use_ha:"Standort von Home Assistant \xFCbernehmen",map_opacity:"Sichtbarkeit (%)",map_zoom:"Detailstufe",map_zoom_coarse:"grob",map_zoom_fine:"fein",map_move:"Karte unter dem Plan verschieben",map_step:"Schritt",map_url:"Eigene Kachel-Adresse (leer = OpenStreetMap)",map_hint:"Dein Browser l\xE4dt die Kartenkacheln direkt vom Kartenserver (standardm\xE4\xDFig OpenStreetMap, bitte deren Nutzungsbedingungen beachten); solange die Karte aus ist, wird nichts geladen. Der Plan liegt auf der Karte, wie der Kompass es sagt \u2013 drehe den Kompass oder verschiebe die Karte, bis das Haus passt.",compass_title:"Kompass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Nord \u2194 S\xFCd tauschen",compass_swap_hint:"Dreht den Kompass um 180\xB0. Zeichnung, Dachfl\xE4chen und Solarfelder bleiben, wie sie sind.",compass_hint:"Stimmt der Kompass nicht mit der Wirklichkeit \xFCberein, drehst du ihn hier \u2013 nichts muss neu gezeichnet werden. Sonnenlicht, Wind und die Himmelsrichtungen der Dachfl\xE4chen richten sich danach.",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_end_start:"Ende am Firstanfang",roof_end_end:"Ende am Firstende",roof_halfhip:"Kr\xFCppelwalm beginnt bei",roof_halfhip_hint:"Wie weit oben am Giebel die Walmfl\xE4che beginnt, als Anteil der Giebelh\xF6he: niedrig = ein gro\xDFer Walm, hoch = nur die Spitze ist abgewalmt.",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_rotation:"Drehung (\xB0)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan, ein + auf einer Kante f\xFCgt eine Ecke hinzu, \xD7 entfernt eine. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_overhang_sides:"\xDCberstand je Seite",roof_overhang_a:"\xDCberstand Traufe A (m)",roof_overhang_b:"\xDCberstand Traufe B (m)",roof_overhang_u0:"\xDCberstand Giebel vorn (m)",roof_overhang_u1:"\xDCberstand Giebel hinten (m)",roof_overhang_auto:"Wieder automatisch",roof_overhang_sides_hint:"Ohne eigene Werte ist der \xDCberstand automatisch: \xFCberall gleich, au\xDFer wo der Dachteil ans Haus st\xF6\xDFt (dort keiner).",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand oder \xDCberlappung an einer gemeinsamen Wand zusammenf\xFChren; ein Abstand wird die Innenwandst\xE4rke.",rooms_as_drawn:"R\xE4ume wie gezeichnet",rooms_as_drawn_hint:"Die R\xE4ume bleiben genau so, wie du sie gezeichnet hast (an den Innenkanten). Zwischen zwei R\xE4umen mit Abstand f\xFCllt eine Wand die L\xFCcke, statt dass jeder Raum eine eigene Au\xDFenwand hineinwachsen l\xE4sst. T\xFCren und Fenster sitzen dann in der Wand dazwischen; ihre Dicke ist der Abstand. \u201EL\xFCcken schlie\xDFen\u201C wird daf\xFCr nicht gebraucht.",gaps_not_needed:"Mit \u201ER\xE4ume wie gezeichnet\u201C (Einstellungen) f\xFCllen W\xE4nde die L\xFCcken, die R\xE4ume bleiben, wo sie sind.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",rooms_from_walls:"R\xE4ume aus W\xE4nden",rooms_from_walls_hint:"Macht aus jedem Bereich, den die gezeichneten W\xE4nde umschlie\xDFen, einen Raum zum Benennen. Bestehende R\xE4ume bleiben. Einzeln geht es auch: mit dem Rechteck-Werkzeug in einen umschlossenen Bereich tippen.",rooms_from_walls_none:"Keine geschlossenen Bereiche ohne Raum gefunden. Die W\xE4nde m\xFCssen sich ber\xFChren und rundum schlie\xDFen.",rooms_from_walls_covered:"Die W\xE4nde schlie\xDFen Bereiche, die aber schon in einem bestehenden Raum liegen (z. B. dem Haus-Umriss als Raum). L\xF6sche diesen Raum oder zeichne den Umriss mit dem Wandwerkzeug.",wall_side:"Wand liegt",wall_side_hint:"Wo die neue Wand zur gezogenen Linie liegt: mittig auf ihr, oder links bzw. rechts davon (die Linie ist dann die Au\xDFenkante der Wand, in Zugrichtung gesehen).",wall_side_center:"mittig",wall_side_left:"links der Linie",wall_side_right:"rechts der Linie",rooms_from_walls_done:"{n} R\xE4ume aus den W\xE4nden angelegt. Jetzt nur noch benennen.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",door_angle:"\xD6ffnungswinkel",door_angle_default:"Standard",door_angle_hint:"Wie weit das T\xFCrblatt aufgeht. Mit Sensor \xF6ffnet es so weit, sobald er \u201Eoffen\u201C meldet; ohne Sensor steht es so weit offen (statt halb). Standard bleibt wie bisher.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",studio_new:"Eigenes M\xF6bel bauen",studio_title:"M\xF6bel-Werkstatt",studio_title_edit:"M\xF6bel-Werkstatt: \xE4ndern",studio_hint:"W\xE4hle eine Vorlage, stell Ma\xDFe und Fronten ein und setz das M\xF6bel in den Plan. Es landet im Pack \u201EEigene M\xF6bel\u201C und l\xE4sst sich sp\xE4ter hier wieder \xE4ndern.",studio_kind:"Vorlage",studio_kind_cabinet:"Schrank",studio_kind_shelf:"Regal",studio_kind_lamp:"Lampe",studio_kind_device:"Ger\xE4t",studio_name:"Name",studio_width:"Breite (cm)",studio_depth:"Tiefe (cm)",studio_height:"H\xF6he (cm)",studio_doors:"T\xFCren",studio_drawers:"Schubladen",studio_shelves:"B\xF6den",studio_handle:"Griffe",studio_handle_bar:"Stangengriff",studio_handle_knob:"Knopf",studio_handle_none:"Grifflos",studio_base:"Unterbau",studio_base_plinth:"Sockel",studio_base_legs:"F\xFC\xDFe",studio_base_none:"Ohne",studio_back:"R\xFCckwand",studio_lamp:"Art",studio_lamp_floor:"Stehlampe",studio_lamp_table:"Tischlampe",studio_lamp_pendant:"Pendelleuchte",studio_lamp_wall:"Wandleuchte",studio_display:"Display vorne (zeigt den Mediaplayer)",studio_mount:"Steht",studio_mount_floor:"Auf dem Boden",studio_mount_surface:"Auf einem M\xF6bel",studio_mount_wall:"An der Wand",studio_color_body:"Korpus",studio_color_lamp_body:"Fu\xDF und Gestell",studio_color_front:"Fronten",studio_color_boards:"B\xF6den",studio_color_shade:"Schirm",studio_color_display:"Rahmen des Displays",studio_color_white:"Wei\xDF",studio_color_wood:"Holz",studio_color_metal:"Metall",studio_color_dark:"Dunkel",studio_color_glass:"Glas",studio_color_accent:"Akzent",studio_color_own:"Eigene Farbe",studio_color_plan:"Farbe des Plans",studio_place:"In den Plan setzen",studio_save:"\xC4nderung speichern",studio_open:"In der Werkstatt \xE4ndern",studio_error:"Speichern ging nicht: {detail}",studio_pack_name:"Eigene M\xF6bel",studio_pack_publisher:"M\xF6bel-Werkstatt",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",tilt_x:"Neigung vorn/hinten (\xB0)",tilt_z:"Neigung seitlich (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_rise:"Steigung entlang der L\xE4nge (\xB0)",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Reicht sie \xFCber mehrere R\xE4ume, wird sie in jedem davon ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_stairs:"Treppe",hint_stairs:"Ziehen, wo die Treppe stehen soll \u2013 sie l\xE4uft entlang der langen Seite; Form, Drehrichtung und Bauart stellst du danach rechts ein",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_slope:"Schr\xE4g",wall_slope_start:"H\xF6he am Anfang (m)",wall_slope_end:"H\xF6he am Ende (m)",wall_slope_hint:"Schr\xE4ge Wand: die Oberkante l\xE4uft gerade von der H\xF6he am Anfang der Wand (Ecke mit der kleineren Nummer) zur H\xF6he am Ende. Beide H\xF6hen d\xFCrfen \xFCber der Geschossh\xF6he liegen, zum Beispiel f\xFCr ein Pultdach-Zimmer mit hohen Oberlichtern.",wall_slope_off:"Wieder eine ebene Wand",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_view:"Wandansicht",wall_view_hint:"Die Wand von vorne: T\xFCren, Fenster und M\xF6bel an ihr ziehen oder ihren Abstand eintippen.",wall_view_prev:"Vorige Wand",wall_view_next:"N\xE4chste Wand",wall_view_left:"Abstand links (m)",wall_view_height:"H\xF6he \xFCber Boden (m)",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Verbindet die freien W\xE4nde dieser Etage, deren Enden sich treffen sollen: Zwei Enden nah beieinander bekommen eine gemeinsame Ecke, ein Ende an der Seite einer anderen Wand endet an deren Kante. Beim Zeichnen und beim Ziehen eines Endes passiert das von selbst.",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",free_wall_slope:"\u25E2 Schr\xE4g",free_wall_slope_hint:"Die Wand wird von einem Ende zum anderen h\xF6her oder niedriger: oben die H\xF6he am Anfang, hier die am Ende.",free_wall_height_end:"H\xF6he am Ende (m)",free_wall_hang:"H\xE4ngt in der Luft",free_wall_hang_hint:"Die Wand steht nicht auf dem Boden, sondern beginnt erst ab ihrer Unterkante, z. B. das Wandst\xFCck unter einer Dachschr\xE4ge zwischen Schr\xE4ge und Decke. Mit schr\xE4ger Unterkante folgt sie der Dachneigung.",free_wall_bottom:"Unterkante \xFCber dem Boden (m)",free_wall_bottom_slope:"Schr\xE4ge Unterkante",free_wall_bottom_end:"Unterkante am Ende (m)",arc:"Bogen",arc_hint:"Biegt die Wand zu einem Bogen. Ein Nachbarraum an dieser Wand biegt sich mit, T\xFCren und Fenster wandern mit; R\xFCckg\xE4ngig nimmt den Bogen zur\xFCck.",arc_bulge:"W\xF6lbung (m)",arc_bulge_hint:"Wie weit sich die Wand in der Mitte w\xF6lbt: positiv nach au\xDFen, negativ in den Raum.",arc_apply:"Biegen",arc_too_wide:"Eine T\xFCr oder ein Fenster in dieser Wand ist f\xFCr diesen Bogen zu breit. Mach den Bogen flacher oder die \xD6ffnung schmaler.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (Erweiterungen \u2192 M\xF6bel-Packs).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_entity_mower:"M\xE4hroboter",pet_room_sensor:"Raum-Sensor des Tiers (optional)",pet_room_hint:"Ein Sensor, der den Raum nennt, in dem das Tier gerade ist \u2013 Bermuda oder ESPresense mit einem Anh\xE4nger am Halsband: in 3D l\xE4uft es dann in diesem Raum herum.",furn_entity_water:"Ventil oder Schalter",device_temp:"Ger\xE4tetemperatur",device_temp_hint:"Ein Temperatursensor des Ger\xE4ts (Wechselrichter, Akku, PC \u2026): sein Wert steht am Pin in der 3D-Ansicht, ab 60 \xB0C ist der Pin hervorgehoben.",temp_label:"Bezeichnung Temperatur {n}",temp_label_example:"z. B. Vorlauf",temp_sensor:"Sensor Temperatur {n}",device_temps_hint:"Weitere benannte Temperaturen am Pin, z. B. Kessel, Vorlauf und R\xFCcklauf einer Heizung oder Soll und Ist eines Speichers (bis zu 6). Ein leerer Sensor entfernt die Zeile.",fridge_temp:"Temperatur K\xFChlteil",freezer_temp:"Temperatur Gefrierteil",fridge_temp_hint:"Der Pin zeigt die Temperaturen. \xDCber 8 \xB0C im K\xFChlteil oder \u221212 \xB0C im Gefrierteil leuchtet er als Warnung.",spray_reach:"Reichweite des Wassers (m)",spray_hint:"Solange das Ventil offen oder der Schalter an ist, spritzt der Sprenger Wasser in B\xF6gen um sich herum.",furn_robot_room:"Aktueller Raum (Sensor)",robot_cal_none:"Noch nicht kalibriert \u2013 ohne Bezug zur Karte bleibt die Fahrspur erfunden.",robot_cal_done:"Kalibriert: eine Rasterzelle misst {m} m.",robot_cal_do:"Von der jetzigen Position des Roboters kalibrieren",robot_cal_doing:"Tippe in den Plan, wo der Roboter gerade steht.",robot_cal_need:"Die Karte des Roboters meldet gerade keine Position \u2013 l\xE4uft die Integration?",robot_cal_hint:"Die Station ist der Anker: der Plan wei\xDF, wo sie steht, die Kamera wei\xDF, wo Roboter und Station in ihrem Raster liegen. Kennt die Karte R\xE4ume mit denselben Namen wie der Plan, reicht der Knopf \u201EAus den R\xE4umen kalibrieren\u201C. Sonst: Stell den Roboter mindestens 1,5 m entfernt ab \u2013 Reinigung pausieren \u2013 und tippe ihn im Plan an. Kommen die R\xE4ume spiegelverkehrt heraus, setze den Haken.",robot_cal_mirror:"Die Karte des Roboters ist gespiegelt (R\xE4ume kommen verkehrt heraus)",robot_cal_forget:"Kalibrierung entfernen",robot_cal_nudge:"Von Hand nachr\xFCcken: Pfeile schieben die Karte um 10 cm, \u27F2 \u27F3 drehen um 1\xB0, \u2212 + \xE4ndern die Gr\xF6\xDFe um 1 %.",robot_cal_nudge_move:"Karte verschieben",robot_cal_nudge_turn:"Karte drehen",robot_cal_nudge_grow:"Karte gr\xF6\xDFer oder kleiner",robot_cal_rooms:"Aus den R\xE4umen kalibrieren (die Karte kennt {n} R\xE4ume)",robot_cal_rooms_none:"Zu wenige R\xE4ume hei\xDFen im Plan so wie auf der Karte des Roboters ({n} gefunden, mindestens 2 n\xF6tig). Benenne die R\xE4ume gleich \u2013 oder kalibriere \xFCber die Position des Roboters.",robot_cal_rooms_bad:"Die gleichnamigen R\xE4ume liegen im Plan anders als auf der Karte des Roboters \u2013 ist ein Raum vertauscht? Kalibriere sonst \xFCber die Position des Roboters.",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Ist die Karte des Roboters unten kalibriert, zeigt die Spur stattdessen, wo er wirklich gefahren ist; ohne sie sind die Bahnen erfunden. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_ceiling_fan:"Deckenventilator",furn_fan_entity:"Ventilator",fan_hint:"Die Leuchte ist das Licht des Ventilators (leer lassen, wenn er keins hat). Der Ventilator wird im Raum gefunden oder hier gew\xE4hlt: In 3D drehen sich die Fl\xFCgel so schnell wie er l\xE4uft, sein Symbol schaltet ihn, Wischen hoch/runter \xE4ndert die Stufe, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Die H\xF6he ist, wie weit er von der Decke h\xE4ngt (mehr = l\xE4ngere Stange).",room_ceiling:"Deckenh\xF6he",room_ceiling_tip:"Niedriger als das Stockwerk (ein Bad unter der Treppe) oder h\xF6her (ein Wohnzimmer offen bis unters Dach): Deckenleuchten, Ventilatoren, LED-Streifen und Ger\xE4te an der Decke h\xE4ngen dann hier, und die W\xE4nde des Raums sind so hoch.",room_ceiling_through:"Die Decke ({ceiling} m) liegt \xFCber der Etagenh\xF6he ({floor} m): Der Raum reicht in die Etage dar\xFCber, seine W\xE4nde wachsen mit, und die Etage dar\xFCber bleibt \xFCber ihm offen (Luftraum). Im Editor der oberen Etage ist die Fl\xE4che schraffiert.",room_floor_offset:"Bodenh\xF6he (m)",room_floor_offset_hint:"Liegt der Boden dieses Raums tiefer oder h\xF6her als die Etage (ein abgesenkter Eingang: \u22120,39), wandern Boden, W\xE4nde, T\xFCren und Fenster und was im Raum steht mit; die Decke bleibt. Die Stufen stellst du als Treppe dazu.",room_inner:"Innenma\xDF {w} \xD7 {d}",room_inner_hint:"Von Wand zu Wand gemessen: Innenw\xE4nde nehmen die H\xE4lfte ihrer Dicke, Au\xDFenw\xE4nde stehen au\xDFerhalb des Umrisses.",floor_heating:"Fu\xDFbodenheizung (optional)",floor_heating_hint:"Solange der Thermostat heizt (oder das Ventil offen, der Schalter an ist), gl\xFCht der Boden des Raums in 3D warm.",room_announce_speaker:"Lautsprecher f\xFCr Durchsagen",room_announce_quiet:"Ruhezeit f\xFCr Durchsagen",room_announce_hint:"Ohne Wahl spricht der Lautsprecher, der im Raum steht, sonst ein Sprachassistent, ein Echo oder ein Lautsprecher des Bereichs (nie ein Fernseher). In der Ruhezeit lassen Durchsagen an mehrere R\xE4ume diesen Raum aus; eine Durchsage nur f\xFCr ihn kommt trotzdem an.",ceiling_here:"Decke hier",ceiling_here_hint:"H\xF6he der Decke genau an dieser Stelle, z. B. bei einer Dachschr\xE4ge. Leer = Decke des Raums.",ceiling_slope:"An die Dachschr\xE4ge",ceiling_slope_hint:"Die Decke liegt hier unter der Dachschr\xE4ge: die Leuchte h\xE4ngt an deren Unterseite, genau \xFCber ihrem Platz.",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",lamp_extra_light:"Leuchtmittel {n} (optional)",lamp_extra_hint:"Eine Leuchte mit mehreren Lichtern \u2013 Hauptlicht, Nachtlicht, Lichtring: Ist das Hauptlicht aus, leuchtet sie in 3D mit dem n\xE4chsten Licht, das an ist, etwas schw\xE4cher. Die Lichter schaltest du im Raumfenster einzeln.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",furn_colors_card:"M\xF6belfarben dieser Karte",furn_color_house:"Farbe des Hauses",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_real:"Realistisch",theme_nordic:"Nordisch (Tageslicht)",theme_warm_evening:"Warmer Abend",theme_minimal:"Minimalistisch",theme_day:"Tag",theme_own:"Eigener",own_look_card:"Farben des eigenen Looks dieser Karte",own_look_dark:"Eigener Look: Fl\xE4chen dunkel",own_look_light:"Eigener Look: Fl\xE4chen hell",own_look_lines:"Eigener Look: Linien",own_look_background:"Eigener Look: Hintergrund",own_look_hint:"Der Look \u201EEigener\u201C arbeitet wie Blaupause und Tag, aber mit deinen Farben: W\xE4nde, B\xF6den und M\xF6bel laufen von \u201EFl\xE4chen dunkel\u201C bis \u201EFl\xE4chen hell\u201C, Kanten in der Linienfarbe. Signalfarben (Lampen, Alarme, Heatmap) bleiben. Auf hellem Hintergrund leuchten die Linien nicht. Eine Karte kann eigene Farben setzen.",theme_auto:"Auto",clock:"Uhr",clock_none:"Keine",clock_top_left:"Oben links",clock_top_right:"Oben rechts",clock_bottom_left:"Unten links",clock_bottom_right:"Unten rechts",glass_walls:"Glasw\xE4nde",glass_walls_hint:"Wie deckend die W\xE4nde sind, durch die man in die R\xE4ume schaut: links fast unsichtbar, rechts undurchsichtig. Gilt f\xFCr diesen Bildschirm.",screen_name:"Name dieses Bildschirms",screen_name_hint:"Durchsagen erscheinen auf jedem offenen NextFloor-Bildschirm. Mit einem Namen (z. B. \u201EFlur\u201C) kann eine Durchsage auch nur an diesen Bildschirm gehen. Ohne Haken bleibt dieser Bildschirm still.",announce_on:"Durchsagen auf diesem Bildschirm an",announce_muted:"Durchsagen auf diesem Bildschirm stumm",lock3d_on:"3D sperren (Drehen, Zoomen und Verschieben aus, Tippen geht weiter)",lock3d_off:"3D entsperren",walk:"Durchs Haus gehen",travel:"Zeitreise: die letzten 24 Stunden oder 7 Tage abspielen",travel_play:"Abspielen",travel_pause:"Anhalten",travel_loading:"Lade Verlauf \u2026",travel_failed:"Der Verlauf lie\xDF sich nicht laden.",travel_speed:"Tempo",travel_speed_min:"1 Min./s",travel_speed_10min:"10 Min./s",travel_speed_hour:"1 Std./s",travel_days:"Tage",travel_live:"Live",card_travel_button:"Taste f\xFCr die Zeitreise",walk_stop:"Gehen beenden",walk_hint:"Ziehen: umsehen \xB7 W A S D / Pfeile oder Stick: gehen \xB7 Mausrad: Schritt",card_walk_button:"Taste zum Durchgehen",card_lock_button:"Taste f\xFCr die 3D-Sperre",backdrop:"Eigener Hintergrund",backdrop_color:"Farbe",backdrop_image:"Bild (/local/\u2026 oder https://\u2026)",backdrop_dim:"Abdunkeln",backdrop_hint:"Statt des Himmels des Looks steht das Haus vor einer eigenen Farbe oder einem Bild. Ein Bild in /config/www ist unter /local/\u2026 erreichbar.",furnish:"Einrichten",split_3d:"3D daneben",plan_dims:"Ma\xDFe",plan_dims_hint:"Schreibt an jede Raumkante ihre L\xE4nge.",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_mould:"Schimmel",heat_short_power:"Strom",heat_short_comfort:"Komfort",heat_short_sun:"Sonne",heat_short_wifi:"WLAN",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_mould:"Schimmel",heat_power:"Stromverbrauch",heat_comfort:"Wohlf\xFChlwert",heat_sun:"Sonne heute",room_sun_hours:"{h} h Sonne heute ({facing})",open_since:"offen seit {time}",presence_now:"jemand da",presence_last:"zuletzt vor {time}",comfort_n:"Komfort {n}",empty_lights_hint:"{n} Licht an, seit {min} min niemand da.",empty_lights_off:"Licht aus",open_heating_hint:"{n} Fenster offen, w\xE4hrend die Heizung l\xE4uft.",open_heating_off:"Heizung aus",room_clean:"Reinigung (Skript oder Knopf)",room_clean_hint:"Ein Skript oder Knopf, der den Saugroboter in diesen Raum schickt (z. B. die Raumreinigung deiner Roboter-Integration). Das Raum-Panel zeigt dann \u201E\u{1F9F9} Saugen\u201C.",room_clean_run:"Saugen",room_clean_run_hint:"Schickt den Saugroboter in diesen Raum.",shade_hint:"Sonne auf {n} Fenstern bei {temp} \u2013 Rolll\xE4den senken?",shade_close:"Senken",room_sun_year:"Sonne \xFCbers Jahr",room_sun_year_hint:"Die Sonnenstunden durch die Au\xDFenfenster des Raums am 15. jedes Monats.",room_energy:"heute {today} \xB7 Monat {month}",room_energy_hint:"Aus der Statistik der Leistungssensoren der Ger\xE4te im Raum; die Kosten f\xFCr den Monat mit dem Tarif des Hauses.",heat_summer:"Sommer",heat_winter:"Winter",air_co2:"l\xFCften (CO\u2082)",air_humidity:"l\xFCften (feucht)",air_mould:"Schimmelgefahr \u2013 l\xFCften",room_curve_hint:"Die Temperatur des Raums in den letzten 24 Stunden",heat_values:"Werte am Raumnamen",heat_wifi:"WLAN",wifi_aps:"{n} Access Points \xB7 {clients} Ger\xE4te",wifi_network:"Netzwerk: {online} online \xB7 {offline} offline",wifi_none:"Stelle Access Points oder Router aus den Packs (Smart Home 2) auf und verkn\xFCpfe sie mit einer Entit\xE4t ihres Ger\xE4ts.",wifi_clients:"{n} Ger\xE4te",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",meter_parent:"H\xE4ngt an Z\xE4hler",meter_parent_none:"keinem (Hauptz\xE4hler)",meter_main:"Hauptz\xE4hler",meter_unmetered:"{w} ungemessen",meter_device_hint:"Steht das Ger\xE4t hinter einem Zwischenz\xE4hler (z. B. Balkonkraftwerk in einer Wohnung), z\xE4hlt seine Leistung zu dieser Wohnung. Der Zwischenz\xE4hler muss daf\xFCr in beide Richtungen messen (\u2212 = R\xFCckspeisung); z\xE4hlt er nur Bezug, f\xE4llt der Verbrauch der Wohnung bei \xDCberschuss zu hoch aus.",meter_sub_power:"Leistung des Zweigs (W, + = Bezug, \u2212 = R\xFCckspeisung)",meter_floors:"Versorgt die Etagen",meter_sub_hint:"Ein Zwischenz\xE4hler misst seinen Zweig, z. B. eine Wohnung. Ger\xE4te auf den angehakten Etagen h\xE4ngen in 3D an ihm statt am Hauptz\xE4hler; was der Hauptz\xE4hler dar\xFCber hinaus z\xE4hlt, steht als \u201EAllgemein (Rest)\u201C in der Bilanz.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",energy_routes:"Kabelwege",energy_routes_hint:"Wo ein Kabel wirklich l\xE4uft: Der Fluss folgt dann deinen Punkten statt eines Bogens quer durchs Haus. Ohne Weg bleibt es beim Bogen. Verbraucher behalten ihren Bogen.",pipes_title:"Heizungs- und Wasserrohre",pipes_hint:"Zeichne Rohre in den Plan: rot f\xFCr den Vorlauf, blau f\xFCr den R\xFCcklauf, orange f\xFCr Warm-, hellblau f\xFCr Kaltwasser. Mit einem Ger\xE4t verkn\xFCpft (Pumpe, Heizkreis, Ventil) flie\xDFen in der 3D-Ansicht Partikel durch das Rohr, solange es l\xE4uft. Der Fluss zeigt sich, wenn die Energie-Animation an ist.",pipe:"Rohr",pipe_add:"Rohr hinzuf\xFCgen",pipe_name:"Name",pipe_kind:"Was flie\xDFt hier",pipe_kind_supply:"Vorlauf (rot)",pipe_kind_return:"R\xFCcklauf (blau)",pipe_kind_hot:"Warmwasser (orange)",pipe_kind_cold:"Kaltwasser (hellblau)",pipe_entity:"Flie\xDFt, solange aktiv (Pumpe, Heizkreis, Ventil)",route_conn_solar:"{name} \u2192 Wechselrichter",route_conn_battery:"Batterie \u2194 Haus",route_conn_inverter:"Wechselrichter \u2192 Haus",route_conn_grid:"Netz \u2194 Haus",route_conn_meter:"{name} \u2194 \xFCbergeordneter Z\xE4hler",route_conn_device:"{name} \u2194 Unterz\xE4hler",route_points:"{n} Punkte",route_none:"direkter Bogen",route_draw:"Weg zeichnen",route_redraw:"Neu zeichnen",route_drawing:"Tippe im Plan die Punkte an, durch die das Kabel l\xE4uft, vom einen Ende zum anderen; wechsle dazwischen das Geschoss, wo es durch die Decke geht. {n} Punkte.",route_undo:"Letzter Punkt",route_done:"Fertig",route_cable:"Als Kabel zeigen",route_cable_hint:"Zeichnet den Weg als sichtbares Kabel, nicht nur als feine Linie unter den Teilchen.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_rack_ew:"Ost-West-Aufst\xE4nderung",solar_rack_ew_hint:"Jede zweite Reihe zeigt in die andere Richtung, die Paare stehen R\xFCcken an R\xFCcken \u2013 flach und dicht wie auf vielen Flachd\xE4chern.",solar_rack_tilt:"Aufst\xE4nderung (\xB0 zus\xE4tzlich)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",chimneys:"Schornsteine",chimney:"Schornstein",chimney_shape:"Form",chimney_brick:"Gemauert",chimney_round:"Rund",chimney_wide:"Breit, zwei Z\xFCge",chimney_steel:"Edelstahlrohr",chimney_diameter:"Durchmesser (m)",chimney_depth:"Tiefe (m)",chimney_height:"H\xF6he \xFCber dem Dach (m)",chimney_hint:"Die H\xF6he z\xE4hlt ab der oberen Seite, wo der Schornstein aus dem Dach kommt. Im Grundriss und in der 3D-Ansicht l\xE4sst er sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_tap:"Antippen des M\xF6bels",furn_tap_default:"Wie \xFCblich",furn_tap_hint:"Eine eigene Aktion wie bei den eigenen Kn\xF6pfen des Sternmen\xFCs, z. B. ein browser_mod-Popup mit deiner Karte.",furn_show_when:"Nur zeigen, solange \u2026",furn_show_when_state:"\u2026 im Zustand (leer = an)",furn_show_when_invert:"Umgekehrt: zeigen, solange es nicht so ist",furn_show_when_hint:"Saison-Deko, die nur im Dezember steht: ein Helfer (input_boolean), ein Kalender oder ein Sensor entscheidet, ob das M\xF6bel in 3D erscheint. Mehrere Zust\xE4nde mit Komma trennen. Im Editor bleibt es immer sichtbar.",picture_upload:"Foto hochladen",picture_replace:"Anderes Foto hochladen",picture_stored:"Ein eigenes Foto ist gespeichert.",picture_url:"\u2026 oder Bild-Adresse",picture_entity:"\u2026 oder Bild einer Entit\xE4t",picture_border:"Passepartout (%)",picture_fit:"Foto",picture_fit_cover:"f\xFCllt den Rahmen",picture_fit_contain:"ganz zu sehen",picture_hint:"Dein Foto im Rahmen, in 3D und auf dem Wandtablet. Hochgeladene Fotos werden verkleinert mit dem Plan gespeichert; eine Bild-Entit\xE4t (z. B. Foto des Tages) oder eine Kamera zeigt ihr aktuelles Bild.",furn_state_split:"H\xE4lften",furn_on_color:"Farbe, wenn an",furn_on_effect:"Effekt, wenn an",furn_on_effect_none:"Gleichm\xE4\xDFig",furn_on_effect_pulse:"Pulsieren",furn_on_effect_flicker:"Flackern",furn_on_effect_rainbow:"Regenbogen",solar_front:"Gaubenfront",card_sun_shadows:"Sonnenschatten und Himmelslicht (realistisch)",sun_shadows_short:"Schatten",sun_shadows_hint:"Sonnenschatten und Himmelslicht im realistischen Look; aus spart auf Tablets viel Rechenarbeit",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_placed_outside:"au\xDFerhalb der R\xE4ume",devices_place_fixed_confirm:"Dieses Ger\xE4t ist fixiert. Trotzdem hierher verschieben?",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",climate_more:"\u2026 und noch ein Sensor (Mittelwert)",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",window_opens:"\xD6ffnet",window_opens_turn:"Dreh-Kipp (nach innen)",window_opens_slide:"Schiebend (Schiebefenster, Hebe-Schiebet\xFCr)",window_opens_top:"Klappfenster (unten nach au\xDFen)",window_opens_hint:"Schiebend: Der Fl\xFCgel auf der Seite des Scharniers gleitet vor den festen; zweifl\xFCgelig gleiten die beiden mittleren nach au\xDFen. Klappfenster \xF6ffnen mit dem Kontakt oder einem Kippsensor.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",pin_shift:"Pin verschieben",pin_shift_up:"\u2191 H\xF6he",pin_shift_hint:"Stehen Ger\xE4te dicht beieinander, schiebst du den Pin hier ein St\xFCck zur Seite oder nach oben (in Metern); das Ger\xE4t selbst bleibt, wo es ist.",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_active:"Nur wenn aktiv",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Home-Assistant-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",card_tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",card_tap_in_room_hint:"In der Haus- und Stockwerksansicht \xF6ffnet ein Antippen das Stockwerk oder den Raum, auch auf einem Ger\xE4t oder seinem Symbol. Im ge\xF6ffneten Raum schaltet es das Ger\xE4t. Langes Dr\xFCcken \xF6ffnet immer sein Men\xFC oder seine Details.",card_markers_outside:"Symbole au\xDFerhalb des ge\xF6ffneten Raums w\xE4hlen",card_markers_outside_hint:"Im Haus, auf dem Stockwerk und in den anderen R\xE4umen nur die angehakten Arten; im ge\xF6ffneten Raum alle wie oben eingestellt. \u201EImmer\u201C und \u201ENie\u201C am Ger\xE4t gehen vor.",marker_kind_light:"Lichter",marker_kind_cover:"Rolll\xE4den",marker_kind_climate:"Heizung",marker_kind_media:"Medien",marker_kind_switch:"Schalter",marker_kind_fan:"Ventilatoren",marker_kind_lock:"Schl\xF6sser",marker_kind_binary:"Kontakte und Melder",marker_kind_sensor:"Sensoren",marker_kind_tap:"M\xF6bel mit Aktion",marker_kind_other:"Sonstige",device_name_hint:"Ein Name f\xFCr den Plan und das Raumfenster, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",device_simple:"Im Raumfenster nur schalten",device_simple_hint:"Der Raumdialog zeigt f\xFCr diese Lampe nur den Schalter, ohne Helligkeit, Farbtemperatur und Farben.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert; auch Icons eigener Sets wie local:mein-icon (Custom-Icons-Integration). Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stair_shape:"Form",stair_shape_straight:"Gerade",stair_shape_quarter:"Viertelgewendelt",stair_shape_l:"L mit Podest",stair_shape_half:"Halbgewendelt",stair_shape_u:"U mit Podest",stair_shape_spiral:"Wendeltreppe",stair_shape_three_quarter:"Dreiviertelgewendelt",stair_turn:"Laufrichtung (beim Hinaufgehen)",stair_turn_left:"Links herum",stair_turn_right:"Rechts herum",stair_build:"Bauart",stair_build_solid:"Massiv (Beton)",stair_build_stringer:"Wangentreppe",stair_build_mono:"Holmtreppe (Mittelholm)",stair_build_cantilever:"Kragarm (schwebend)",stair_risers:"Setzstufen",stair_steps:"Steigungen",stair_run_width:"Laufbreite (m)",stair_landing_after:"Stufen bis zum Podest",stair_landing_hint:"Das Podest liegt {h} cm \xFCber dem Boden; der Rest der Stufen kommt danach.",stair_rail:"Gel\xE4nder",stair_rail_none:"Keins",stair_rail_left:"Links",stair_rail_right:"Rechts",stair_rail_both:"Beidseitig",stair_down:"F\xFChrt nach unten",stair_down_hint:"Die Treppe beginnt auf dieser Etage und f\xFChrt hinunter, zum Beispiel in einen Keller, der nicht gezeichnet sein muss. Sie \xF6ffnet den Boden dieser Etage.",stair_measures:"{steps} Steigungen \xE0 {rise} cm \xB7 Auftritt {going} cm \xB7 Schrittma\xDF {measure} cm",stair_uncomfortable:"unbequem (Schrittma\xDF 59\u201365 cm, Steigung h\xF6chstens 21 cm)",stair_up_note:"Die Treppe beginnt an der markierten Vorderkante. Die Decke der Etage dar\xFCber \xF6ffnet sich nur dort, wo \xFCber den Stufen keine 2,2 m Kopfh\xF6he bleiben.",stair_down_note:"Man betritt die Treppe an der markierten Vorderkante und geht hinunter. Im Plan ist sie gestrichelt; der Boden dieser Etage \xF6ffnet sich \xFCber den Stufen.",stair_opening:"Decken\xF6ffnung",stair_opening_headroom:"Nach Kopfh\xF6he (nur wo n\xF6tig)",stair_opening_full:"\xDCber der ganzen Treppe",stair_opening_none:"Keine (Luke, geschlossener Schacht)",stair_opening_hint:"Wie weit die Treppe den Boden \xF6ffnet, den sie erreicht: die Etage dar\xFCber, oder bei einer Treppe nach unten die eigene. Nach Kopfh\xF6he \xF6ffnet nur \xFCber den Stufen, \xFCber denen keine 2,2 m bleiben.",stair_up_note_plain:"Die Treppe beginnt an der markierten Vorderkante und steigt nach hinten an.",stair_upgrade:"Form einstellen",stair_upgrade_hint:"Macht daraus eine Treppe mit Form (gewendelt, L, U, Wendel), Bauart, Gel\xE4nder und Stufenzahl.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas:"Gasz\xE4hler (optional)",energy_water:"Wasserz\xE4hler (optional)",energy_meters_hint:"Gas und Wasser stehen bei der Hausbilanz \u2013 in der Energieleiste und auf der Hauskarte: ein Sensor mit dem Durchfluss jetzt (m\xB3/h, l/min) oder dem Z\xE4hlerstand von heute.",energy_gas_short:"Gas",energy_water_short:"Wasser",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_rest:"Allgemein (Rest)",energy_advanced:"Erweiterter Energiemodus",energy_advanced_on:"Zwischenz\xE4hler nutzen",energy_show_unmetered:"Ungemessenen Verbrauch am Zwischenz\xE4hler zeigen",energy_show_unmetered_hint:"Das Schild eines Zwischenz\xE4hlers zeigt dann den Verbrauch seiner Etagen und wie viel davon kein platziertes Ger\xE4t misst, z. B. \u201E500 W \xB7 450 W ungemessen\u201C. Sonst zeigt es den Z\xE4hlerwert.",energy_advanced_hint:"F\xFCr Zwischenz\xE4hler, z. B. je Wohnung hinter einem Hauptz\xE4hler: Ein Stromz\xE4hler kann dann an einem anderen h\xE4ngen und eigene Etagen versorgen. Aus = der erste Z\xE4hler ist der Netzanschluss, weitere sind Verbraucher.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",ble:"Bluetooth-Ortung",ble_hint:"Orte einen Bluetooth-Tag (Schl\xFCsselanh\xE4nger, Uhr, Handy) raumgenau: Du l\xE4ufst mit ihm durch die R\xE4ume und nimmst jeden Raum auf. NextFloor vergleicht danach, wie stark ihn die Bluetooth-Scanner von Home Assistant (ESPHome-Proxys, Shelly-Ger\xE4te mit eingeschaltetem Bluetooth, Adapter am Server) h\xF6ren. Je Tag entsteht ein Sensor mit dem Raumnamen als Zustand.",ble_unavailable:"Die Bluetooth-Integration von Home Assistant l\xE4uft nicht. Ohne sie gibt es keine Scanner.",ble_scanners:"{n} Bluetooth-Scanner in Home Assistant. Je mehr Scanner in verschiedenen R\xE4umen, desto genauer.",ble_add:"Tag oder Ger\xE4t hinzuf\xFCgen",ble_trackers:"Handys und Uhren (Private BLE Device)",ble_devices:"Gefundene Bluetooth-Ger\xE4te",ble_name:"Name (optional)",ble_refresh:"Liste neu laden",ble_add_button:"Hinzuf\xFCgen",ble_learn:"R\xE4ume lernen",ble_close:"Schlie\xDFen",ble_spots:"{n} Aufnahmen",ble_now:"Jetzt",ble_unknown:"unbekannt",ble_none_heard:"Kein Scanner h\xF6rt den Tag gerade. Halte ihn nah an einen Scanner und warte kurz; ein Tag sendet nur alle paar Sekunden.",ble_no_address:"Dieses Handy oder diese Uhr hat gerade keine bekannte Adresse. Pr\xFCfe in Home Assistant die Integration \u201EPrivate BLE Device\u201C.",ble_one_scanner:"Nur ein Scanner h\xF6rt den Tag. Zum Unterscheiden von R\xE4umen braucht es mindestens zwei, besser drei oder mehr.",ble_learn_room:"Raum aufnehmen",ble_record:"Aufnehmen ({s} s)",ble_recording:"Nimmt auf \u2026 noch {s} s",ble_forget_room:"Raum vergessen",ble_learn_hint:"W\xE4hle den Raum, dr\xFCcke Aufnehmen und geh mit dem Tag in der Hand langsam durch den ganzen Raum, auch in die Ecken. Aufnehmen erneut ersetzt den Raum. Lerne alle R\xE4ume, in denen du den Tag orten willst.",ble_sensor_hint:"Der Sensor \u201E{name}\u201C (Ger\xE4t NextFloor) zeigt den Raum. Unter Anwesenheit kannst du ihn als Raum-Sensor einer Person w\xE4hlen.",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",presence_overview:"Personen in der Gesamt\xFCbersicht anzeigen",presence_overview_hint:"Zeigt die Personenbilder auch bei allen Etagen. In einzelnen Etagen bleiben sie wie bisher sichtbar.",presence_room:"Standardraum",presence_room_none:"\u2013 keiner \u2013",presence_add:"Weitere Entit\xE4t (Hilfsschalter, Tracker)",no_persons:"In Home Assistant gibt es keine Personen.",energy_battery_charging:"Akku l\xE4dt",energy_battery_discharging:"Akku entl\xE4dt",energy_sign_battery_day:"Der Akku entl\xE4dt sich, w\xE4hrend fast genauso viel eingespeist wird. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen (er l\xE4dt in Wahrheit).",wall_axis_hint:"Wo die gezeichnete Linie der Wand liegt: in ihrer Mitte oder an einer ihrer Kanten. Linie und Griffe im Plan sitzen dort; die Wand selbst bleibt beim Umstellen, wo sie ist.",wall_join:"Ecken schlie\xDFen",wall_joined:"{n} W\xE4nde an ihren Ecken verbunden.",wall_join_none:"Keine offenen Ecken gefunden: Alle Wandenden, die sich treffen sollen, sitzen schon.",own_look_glass:"Eigener Look: Glas",pipes_branch_hint:"Abzweige: Zeichne den Strang (z. B. vom Keller bis ins Obergeschoss) als ein Rohr und jeden Abzweig zu einem Heizk\xF6rper als eigenes Rohr. Ein Punkt nahe an einem anderen Rohr rastet darauf ein, so sitzt der Abzweig genau auf dem Strang. Jeder Abzweig kann ein eigenes Ger\xE4t haben (das Thermostat seines Heizk\xF6rpers).",energy_sign_solar:"Die Solarleistung ist negativ. Der Sensor z\xE4hlt die Erzeugung wahrscheinlich mit umgekehrtem Vorzeichen.",roof_parts_hint:"Dein Plan hat {n} Teile, die ein eigenes Dach brauchen (ein Anbau, ein tieferer Teil, ein Nebengeb\xE4ude wie Garage oder Schuppen). Das einfache Dach deckt nur das oberste Geschoss. Mit Dachabschnitten bekommt jeder Teil sein Dach in seiner H\xF6he; darauf lassen sich auch Solarfelder legen."},Qh={view:"3D",editor:"Editor",all_floors:"All floors",outside_area:"Outside",outside_area_hint:"All devices outside at a glance: in the garden, outside the rooms, and what belongs to Outside (a weather station on the roof, say).",device_outside:"Belongs to Outside",device_outside_hint:"The device does not count for the room under it (a weather station on the roof) and is listed in the Outside panel.",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",no_rooms_admin:"The floors exist, but there is no room yet. Walls alone are not enough: draw at least one room in the editor with \u201CRectangle\u201D or \u201CFree form\u201D.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",walls_slope:"Sloped",walls_slope_hint:"Walls cut on a slope: half height in front, full height at the back \u2013 like a doll's house, turns with the camera",walls_solid:"Solid",walls_solid_hint:"Solid walls in their colours instead of glass (colours: editor \u2192 settings, per room in the room)",wall_paint_outside:"Wall colour outside",wall_paint_inside:"Wall colour inside",furn_color_body:"Furniture colour body",furn_color_wood:"Furniture colour wood",furn_color_fabric:"Furniture colour fabric",furn_color_white:"Furniture colour white",furn_color_metal:"Furniture colour metal",furn_color_dark:"Furniture colour dark",furn_color_hint:"Furniture is built from a few materials, the pieces from the furniture builder and the packs too. Here each material gets a colour for the whole house; a card can set its own. They show most in the Neon look; Day and Blueprint only tint with them.",wall_paint_room:"Wall colour inside (this room)",wall_paint_floor:"Wall colour outside (this floor)",wall_paint_hint:"Used in the 3D view \u201CSolid\u201D.",wall_paint_default:"Default",card_solid_walls:"Solid walls (in their colours)",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",floor_layer:"Layer (can be shown and hidden)",floor_power:"Floor meter (power)",floor_power_hint:"A power sensor for this floor alone (a sub-meter, a flat). Its value shows on the floor label and, in this floor's view, on the house card with its share of the house's use.",floor_power_share:"{n} % of the house",living_area:"Living area {living}",room_living:"Counts as living area",living_area_none:"No living area \xB7 floor {floor}",living_area_low:"Living area {living} (floor {floor}, of which {low} below 2 m)",living_area_hint:"Counted like the German Wohnfl\xE4chenverordnung: the floor inside the walls, in full from 2 m clear height, half between 1 and 2 m (under slopes), not at all below 1 m. A guide value, not a survey.",living_area_floor:"Living area: {floor}",living_area_floor_house:"Living area of this floor: {floor} \xB7 whole house: {house}",print_plan:"Print plan / PDF",print_plan_hint:"Every floor as a clean plan with measurements and areas, and a table of the areas \u2013 to print, or save as PDF from the print dialog.",image_export:"Save as picture (PNG)",image_export_all:"All floors as pictures",image_export_hint:"A clean 2D plan from above as PNG (white background, 2400 px), e.g. for Bluetooth tracker maps or documents. Choose below what it shows.",image_furniture:"With furniture (outlines)",image_dimensions:"With measurements",image_names:"With room names and area",image_export_done:"{n} picture(s) saved.",image_export_empty:"This floor has no rooms to export.",image_export_failed:"The picture could not be created.",print_title:"Floor plan",print_room:"Room",print_floor_area:"Floor area",print_living:"Living area",print_low:"below 2 m",print_total:"Total",print_blocked:"The print window was blocked \u2013 please allow pop-ups for Home Assistant.",check_open:"Check the plan",note:"Note",note_add:"Note here",note_text:"Text",note_placeholder:'e.g. "change the filter" or "fuse 12"',note_due:"Due on",note_height:"Height above the floor (m)",note_height_hint:"Where the pin floats in the 3D view: 1.3 m is eye level, higher for something under the ceiling (a shutoff valve, a hatch).",note_photo_upload:"Add a photo",note_photo_hint:"The photo shows when the note is tapped in the 3D view, e.g. what the valve looks like.",note_due_hint:"From that day on the pin turns orange.",note_repeat:"Repeat every \u2026 months (0 = once)",note_repeat_hint:'For recurring tasks (change a filter, clean the fridge): after "Done" in the 3D view the note is due again after this many months. Anyone may press "Done".',note_done:"Done",note_last_done:"Last done: {d}",note_is_due:"This note is due.",keys_title:"Editor keys",keys_undo:"Undo",keys_redo:"Redo",keys_duplicate:"Duplicate the room",keys_delete:"Delete the selection",keys_nudge:"Move the selection one grid step",keys_nudge_10:"\u2026 by 10 cm",keys_nudge_1:"\u2026 by 1 cm",keys_rotate:"Turn furniture by 90\xB0 (Shift: back)",keys_lock:"Fix or free furniture, a device or a roof section",keys_close_shape:"Close the free shape",keys_escape:"Cancel, leave the tool, clear the selection",keys_straight:"While drawing: straight lines",keys_sheet:"This sheet",tour_title:"First steps",tour_1_title:"Draw the rooms",tour_1:'Draw the rooms with "{rect}" or "{free}"; the walls come by themselves. Give each room its Home Assistant area \u2013 then NextFloor finds its devices. With areas already set up, "{rooms}" in the floor form adds them all at once.',tour_2_title:"Doors and windows",tour_2:'"{opening}" puts them on a wall. Link their contact or blind \u2013 in 3D they then open and close with it, and open windows tell you.',tour_3_title:"Furniture and devices",tour_3:'"{furniture}" opens the library \u2013 or build your own pieces in the \u{1F6E0}\uFE0F furniture studio. Select a room and the devices of its area are listed below, ready to place; lamps then shine in the colour of their light.',tour_4_title:"Look and check",tour_4:'"{split}" shows your house while you draw; at the top you switch to the 3D view. "{check}" lists what is still missing \u2013 and ? shows the keys at any time.',tour_next:"Next",tour_back:"Back",tour_done:"Let's go",tour_skip:"Skip",check_open_hint:"Lists what is missing or off in the plan, with a fix in one tap.",check_title:"Plan check",check_all_good:"All good \u2013 nothing found.",check_hint:"{n} points found. Blue buttons change the plan (undo works as always), the others show the place.",check_room_no_area:'"{room}" has no Home Assistant area: its devices are not found.',check_room_no_area_named:'"{room}" has no area \u2013 the free area "{area}" has the same name.',check_areas_unplaced:"{n} areas of this floor have no room yet: {names}",check_devices_unplaced:'"{room}": {n} devices of the area are not in the plan yet.',check_rooms_overlap:'"{a}" and "{b}" overlap.',check_opening_off_wall:'A door or window in "{room}" is not on a wall.',check_entity_missing:"{n} device pins point to entities Home Assistant no longer knows ({ids}).",check_furniture_entity_missing:"A piece of furniture is linked to {id} \u2013 that entity no longer exists.",check_battery_low:"Battery low: {name} ({level} %)",battery_low_n:"Battery low: {names}",check_standby:"{name} draws {w} W while off \u2013 about {cost} a year.",check_fix_show:"Show",check_fix_ignore:"Ignore",check_show_devices:"Look at the {n} devices",check_ignore_all:"Ignore all {n}",check_reset_ignored:"Check the {n} ignored devices again",check_fix_set_area:'Link "{area}"',check_fix_add_rooms:"Add the rooms",check_fix_place:"Place {n}",check_fix_remove:"Remove {n}",floor_layer_hint:"This floor is no storey but a layer \u2013 all the trees or the decoration, say. The 3D view shows an eye at the top that shows or hides it on each device.",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",floor_copy:"Duplicate floor",floor_copy_hint:"The copy goes on top of the house with all rooms, walls, doors and windows. Rooms and the floor lose their link to Home Assistant, furniture its entities; energy devices stay on the old floor.",floor_copy_furniture:"Take the furniture along",floor_copy_devices:"Take the device pins along",floor_copy_devices_hint:"The same entity then shows on both floors.",floor_copy_outdoor:"Take the outdoor areas along",floor_copy_make:"Make the copy",floor_copy_name:"{name} (copy)",furn_to_floor:"Move to floor",furn_to_floor_hint:"The item moves to the same spot on the chosen floor.",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",sub_area_add:"+ Area within the room",sub_area_hint:"A part of the room with a Home Assistant area of its own but no walls \u2013 a reading corner, a shelf, a kitchenette in the living room. Its devices and sensors belong to this room.",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",furn_task:"Task",furn_task_hint:'Adds a recurring note at this piece (change a filter, clean, check): in the 3D view with a "Done" button.',delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",sofa_shape:"Shape",sofa_straight:"Straight",sofa_l:"L-shaped (mirror: other side)",sofa_u:"U-shaped",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",share_view:"Share a view",share_view_hint:"Saves the house as a small file that opens in any browser without Home Assistant (through NextFloor's online demo) \u2013 to show it to family or a planner. Without devices and entities, like a template.",share_view_title:"Our home in NextFloor",share_view_needs_js:"This page needs JavaScript and an internet connection.",share_view_file:"view",share_view_done:"View saved \u2013 open the file in a browser or pass it on.",version_save:"Save this state \u2026",version_save_hint:'Keeps the plan under a name ("before the renovation"). Named states stay when the automatic restore points go.',version_name_prompt:'Name for this state (e.g. "before the renovation"):',version_saved:'State "{name}" saved.',version_compare:"Compare",version_delete_confirm:'Delete "{name}"?',version_same:"No difference to the plan.",version_diff_n:"{n} differences to the plan as it is now:",diff_floor_added:'Floor "{name}" added',diff_floor_removed:'Floor "{name}" removed',diff_room_added:'Room "{name}" added',diff_room_removed:'Room "{name}" removed',diff_room_renamed:'"{detail}" is now called "{name}"',diff_room_reshaped:'"{name}" reshaped ({detail} m\xB2)',diff_opening_added:"{name} added ({detail})",diff_opening_removed:"{name} removed ({detail})",diff_furniture_added:"{name} added",diff_furniture_removed:"{name} removed",diff_furniture_moved:"{name} moved or changed",diff_device_added:"Device {name} placed",diff_device_removed:"Device {name} removed",diff_device_moved:"Device {name} moved",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",blind_kind:"Kind of blind",blind_roller:"Roller shutter outside",blind_venetian:"Venetian blind with slats",blind_inside:"Roller blind inside",blind_venetian_inside:"Venetian blind inside (slats)",cover2_entity:"Second blind (right half)",cover_my:'Favourite position "My" (%, 0 = none)',cover_my_go:"To the favourite position ({p} %)",blind_hint:`A venetian blind turns its slats in 3D with the cover's tilt; a roller blind inside hangs behind the glass. A wide window can have a second blind for its right half. The favourite position shows as "My" in the quick menu: a blind with positions moves there, a Somfy RTS motor without feedback goes to its own My on stop.`,confirm_switch:"Really switch {name}?",lock_confirm_unlock:"Really unlock {name}?",gang_switch_one:"Switches",furn_cover_entity:"Moves with",furn_cover_hint:"The curtain, screen, awning or gate follows this cover entity (blind, curtain, awning, gate) and travels with it. A tap opens its menu (up, stop, down).",furn_cover_inverted:"Reverse the direction",furn_cover_inverted_hint:"For an awning or curtain that moves the opposite way in the plan than in reality: out then shows in, and the other way round.",gang_switch:"Button {n} switches",gang_socket_one:"Socket powered by",gang_socket:"Socket {n} powered by",gang_switch_hint:"A button glows while its light is on (in its colour). A tap switches it; with several buttons a small menu asks which. The same entity may sit on several switches.",gang_socket_hint:"A socket glows green while its switch is on \u2013 brighter the more it draws. A tap switches it; with several, a small menu asks which.",lock_confirm_lock:"Lock {name}?",opening_lock:"Smart lock",opening_lock_hint:"A tap on the door locks or unlocks it (always asking first). While it is unlocked, its edge glows.",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",units:"Show lengths in",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:"How lengths and areas appear in the plan, the forms and the wall view. Inputs stay in metres.",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:'Rooms overlap \u2013 walls there are incomplete. "Close gaps" in the floor settings usually fixes it.',read_only:"Only administrators can edit the floor plan.",side_failed:"This form could not be shown ({error}). The plan stays usable. Please report the text in a GitHub issue.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",mat_herringbone:"Herringbone",mat_marble:"Marble",mat_terrazzo:"Terrazzo",mat_vinyl:"Vinyl / Laminate",mat_brick:"Brick / Clinker",mat_decking:"Wood decking",mat_cork_vinyl:"Cork vinyl",mat_laminate:"Laminate",mat_linoleum:"Linoleum",mat_parquet:"Classic parquet",wall_material_default:"Default",wall_material_room:"Wall material (this room)",wall_material_floor:"Wall material outside (floor)",wall_material_outside:"Wall material outside",wall_material_inside:"Wall material inside",wmat_plaster:"Plaster",wmat_brick:"Brick",wmat_concrete:"Concrete",wmat_wood_cladding:"Wood cladding",wmat_stone:"Natural stone",wmat_tile:"Wall tiles",wmat_wallpaper:"Wallpaper",wmat_slate:"Slate",service_search:"Search service\u2026",service_target_entity:"Target entity",service_use_linked:"Use linked: {name}",furn_color:"Furniture colour",furn_material:"Furniture texture / material",fmat_auto:"Automatic",fmat_wood:"Wood (walnut)",fmat_oak:"Light oak",fmat_fabric:"Fabric / upholstery",fmat_leather:"Leather",fmat_metal:"Brushed metal",fmat_lacquer:"Gloss lacquer",fmat_marble:"Marble",fmat_rattan:"Rattan / wicker",furn_group:"Furniture group",furn_group_hint:"Pieces sharing a group name move, rotate and duplicate together.",furn_group_placeholder:"e.g. Dining set",furn_group_rotate:"Group",furn_group_duplicate:"Duplicate group",furn_group_leave:"Ungroup",weather_animations:"Show outdoor weather animations",weather_animations_hint:"Displays animated rain, snow, clouds and wind outside the house.",quick_controls:"Tablet quick-control dock",quick_controls_hint:"Touch-friendly dock buttons outside the 3D model, each opening a popup for lights, colours, covers or scenes.",quick_group_new:"Lights",quick_group_add:"Add quick button",quick_group_add_entity:"Add entity to popup",quick_group_from_room:"Fill from room",quick_group_add_cameras:"Add all cameras",furn_mesh_upload:"Upload 3D model (.dae/.glb)",furn_mesh_remove:"Remove 3D model",furn_mesh_hint:"Upload a custom 3D model (e.g. Collada .dae from SketchUp 3D Warehouse, .glb, .obj, .stl) directly for this item.",auto_day:"Auto day look",auto_night:"Auto night look",settings_page_intro:"House settings, tablet quick-control dock, favourites and presence in one place.",model_add_library:"Add new 3D furniture to library",model_add_library_hint:"SketchUp 3D Warehouse (.dae), .glb, .gltf, .obj or .stl \u2014 appears directly in the furniture library.",model_add_library_btn:"Upload to library \u2026",tablet_ui_title:"Tablet, Side Panel & Kiosk Mode",tablet_ui_hint:"Customize which clock, weather, status widgets and quick buttons stay visible \u2014 even when top menus are hidden.",tablet_sidebar_pos:"Side info panel",tablet_side_right:"Right",tablet_side_left:"Left",tablet_side_off:"Off",tablet_sidebar_clock:"Clock & date in side panel",tablet_sidebar_weather:"Outdoor weather & temperature",tablet_sidebar_summary:"House summary (lights, openings, alarm)",tablet_show_quick_dock:"Keep bottom quick-control buttons visible (even in kiosk mode)",tablet_show_nav_kiosk:"Keep floor/room bar visible when top menus are hidden",tablet_show_central:"Show star menu, search & scenes",tablet_show_walk:"Show walk mode & lock buttons",tablet_show_legend:"Show legend & energy bar",tablet_sidebar_appliances:"Show washer / dishwasher timers",tablet_price:"Electricity price",tablet_price_entity:"Electricity price sensor (Nordpool / Tibber)",tablet_pip_camera:"Auto-popup camera (doorbell / motion)",tablet_pip_trigger:"Camera popup trigger",tablet_pip_duration:"Camera popup duration (sec)",tablet_screensaver:"Screensaver after (min, 0 = off)",tablet_show_cam_bookmarks:"Show 3D camera bookmarks",appliance_done:"Done",cam_bookmark_add:"Save current 3D view",cam_bookmark_prompt:"Name for this 3D view:",tablet_lights_on:"Lights on",tablet_openings:"Open",tablet_indoor:"Indoor",weather_preview:"Test / simulate weather animation",weather_preview_live:"Live (real weather)",weather_preview_snow:"Test: Snow",weather_preview_rain:"Test: Rain",weather_preview_pour:"Test: Heavy rain",weather_preview_storm:"Test: Thunderstorm & rain",weather_preview_fog:"Test: Fog",tablet_sidebar_style:"Side panel style",tablet_style_card:"Card (with box)",tablet_style_clean:"Clean (no background/box)",tablet_style_minimal:"Minimal (accent line)",tablet_clock_size:"Clock font size",tablet_size_normal:"Normal (32 px)",tablet_size_large:"Large (46 px)",tablet_size_xl:"Extra large (62 px)",tablet_clock_color:"Clock colour",tablet_clock_seconds:"Show seconds",tablet_sidebar_people:"Show people at home",tablet_sidebar_energy:"Show power / solar / battery",tablet_dock_style:"Quick-button dock style",tablet_dock_pill:"Standard pills",tablet_dock_clean:"Clean (transparent)",tablet_dock_large:"Large (touch)",tablet_power:"Power",tablet_solar:"Solar",tablet_battery:"Battery",tablet_sidebar_media:"Show Now Playing media card",alarm_ring_title:"Alarm Perimeter Glow",alarm_ring_entity:"Alarm panel / helper",alarm_ring_style:"Glow shape",alarm_ring_perimeter:"Exterior walls (perimeter)",alarm_ring_circle:"Circle around house",alarm_ring_armed:"Red glow when armed",alarm_ring_disarmed:"Green glow when disarmed",alarm_ring_helper:"Enable/disable helper (optional)",alarm_ring_pin:"PIN code for DIY alarm keypad",alarm_ring_pin_hint:"Optional PIN for DIY helper alarms (input_boolean/switch). Real alarm_control_panel entities verify the code in Home Assistant.",alarm_arm_away:"Arm away",alarm_arm_home:"Arm home",alarm_disarm:"Disarm",alarm_wrong_pin:"Incorrect PIN",furn_quick_control:"Quick-link light / outlet / scene",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",room_objects:"Objects in this room",room_objects_linked:"Linked to an entity",room_objects_locked:"Locked",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_announce:"\u{1F4E2} Announcement",announce_placeholder:"Your own message \u2026",announce_send:"Say it",announce_sent:'Said: "{message}"',announce_failed:"Announcement failed: {error}",announce_phrase_1:"Dinner is ready!",announce_phrase_2:"Time for bed!",announce_phrase_3:"Please come down!",announce_phrase_4:"We are leaving soon!",announce_phrase_5:"The dog needs to go out!",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",readable:"Easy to read",view_only:"View only",card_view_only:"View only (switch nothing)",view_only_hint:"Shows everything but switches nothing: taps, sliders and switches in NextFloor send nothing to Home Assistant. Good for wall tablets that get touched by accident. Home Assistant's own details dialog stays usable.",readable_hint:"Stronger contrast and larger text \u2013 for wall tablets and anyone who reads better that way.",plain:"Floor plan only",plain_hint:"Shows only walls, doors, windows and stairs, without furniture. Devices and their pins stay.",right_back:"Right click = back",right_back_hint:"A short right click in the 3D view goes one step back: from the room to the floor, from the floor to the house (like a double tap on empty space). Dragging with the right button still pans the view.",stl:"3D print (STL)",stl_hint:"Saves the house as an STL file (walls, floors, furniture and outdoor areas of every floor) for 3D printing, at 1:100 (one metre becomes 10 mm). Windows, lights and the roof are not in it; a slicer repairs the file if needed.",card_plain:"Floor plan only",card_rooms:"Only these rooms",card_rooms_hint:"The card shows only the ticked rooms with their furniture, devices, doors and windows (for a tablet in the kitchen, say). Nothing ticked: the whole plan.",card_templates:"Card templates",card_templates_hint:"Set up a dashboard card once here (with the card's own settings) and give just its name on each tablet: `template: kitchen_tablet`. Changes here reach every card that uses the template; what stands on the card itself wins over the template.",template_name:"New template (name)",template_add:"Create template",template_reload:"Reload screens with this template",template_reload_all:"Reload all screens",template_use:"On the dashboard card: `template: {name}`",card_template:"Card template",card_template_none:"none (this card only)",card_readable:"Easy to read",all_off_n:"Everything off ({n})",all_off_hint:"Switches off the room's lights, switches, fans and media; it can be undone for ten seconds.",all_off_done:"Everything off.",all_off_undo:"Undo",all_off_floor:"Everything off on {floor} ({n} devices), undo for ten seconds",mood_save:"Save mood",mood_save_hint:`Keeps how the room's lamps shine right now as a mood \u2013 a tap on it sets them again later, "\u2192" carries it to another room.`,mood_new:"Mood",mood_set:"Set this mood",mood_carry:"Carry over to another room",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",favorite_floor:"Which floor this favourite shows on",favorite_all_floors:"All floors",outside_hidden:"Outside: hide devices",outside_hidden_hint:"Devices the Outside panel should not show (they stay in the plan).",outside_hidden_add:"Hide a device",outside_view_hint:"View for Outside: turn the 3D preview to the garden and use it. Opening Outside then flies the camera there.",outside_view_set:"Use this view for Outside",outside_view_reset:"Reset the Outside view",room_facts:"Room panel: facts shown",room_fact_sun:"Sun hours",room_fact_comfort:"Comfort",room_fact_air:"Airing hint",room_fact_circuits:"Circuits",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',ambilight:"Glow behind the TV (%)",ambilight_hint:"How strongly it glows behind the TV while it plays. 0 switches it off (for example if you have LED strips on the TV), 100 is the usual strength.",sound_rings:"Sound rings (%)",sound_rings_hint:"How large the rings around the speaker grow while it plays. 0 switches them off, the picture and the glow stay; 100 is the usual size. The size also follows the speaker's volume: quieter means smaller.",screen_device:"Device on this screen (optional)",screen_source:"Game account {n} (optional)",screen_sources_hint:"For a games console on this screen: the device is the console, and the screen stays dark while it is off. A game account is its In game sensor (Xbox integration), and NextFloor finds the game and its artwork by itself. The first account that is playing shows. The console's on or off comes from Microsoft's Xbox service, which can still say on after a full shutdown (energy-saving mode or unplugged); the screen may then show a game played on another console.",glow_scale:"Glow in 3D (%)",light_effects:"Effect animations in 3D",light_effects_hint:"Map exact HA effect names only. Unmapped effects keep the static HA colour. Changes nothing in Home Assistant.",light_effects_enabled:"Allow animations for this lamp",light_effect_unmapped:"Unmapped (static)",light_effect_add:"Add exact effect name",light_effect_name_limit:"The exact effect name must contain 1 to 255 characters. It will not be shortened.",light_effect_count_limit:"At most 100 mappings. Remove an existing entry first.",light_effect_exists:"This effect name is already mapped. Its existing mapping is preserved.",light_animation_none:"Static",light_animation_rainbow:"Rainbow (replaces colour)",light_animation_pulse:"Pulse (intensity)",light_animation_flicker:"Flicker (intensity)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_speakers:"Only on these speakers (none = on all)",media_play:"Play",media_pause:"Pause",media_previous:"Previous",media_next:"Next",media_volume:"Volume",media_sources:"Sources",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_alerts:"Own warnings",circuits:"Fuse box",circuits_hint:'The circuits with the rooms they feed. The room panel names them, and the search finds them ("F12").',circuit_name:"Name",circuit_new:"New circuit",circuit_add:"Add a circuit",circuit_add_room:"Add a room",own_alerts_hint:'A line in the warning bar of the 3D view while an entity is in a state \u2013 "Water tank empty" from the robot vacuum, "Dishwasher done". Several states with commas; for numbers <20 or >80.',alerts_max:"Warnings at once",alerts_rows:"Rows of the warning bar",alerts_bar_hint:'Applies to all warnings of the 3D view. More warnings show as "+N", a tap on it unfolds them all; with two rows they wrap into a second row.',own_alert_entity:"When \u2026",own_alert_state:"\u2026 is in state (empty = on)",own_alert_text:"\u2026 then this warning",own_alert_color:"Colour",own_alert_tap:"A tap",own_alert_tap_info:"opens the details",own_alert_tap_toggle:"switches the entity",own_alert_tap_room:"jumps to the room",own_alert_house:"Whole house",own_alert_new:"New warning",own_alert_add:"Add a warning",today:"Today",tomorrow:"Tomorrow",today_days:'Days on the "Today" card',today_days_one:"Today only",today_days_n:"{n} days",forecast:"Weather forecast",forecast_hint:'A small card with the next days of the weather entity (settings): the weather, high and low, and rain. It sits in a top corner of the 3D view, top right below the "Today" card.',forecast_days:"Forecast",forecast_off:"Off",forecast_corner:"Corner",today_none:"Nothing on today.",today_calendars:'Calendars for "Today"',today_calendars_hint:'The appointments of these calendars show top right in the 3D view on the "Today" card, with the bins collected today or tomorrow. A tap on its title folds the card.',own_button_state:"Lights up while \u2026 is on (optional)",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",panel_fold:"Fold away (the room stays in view)",panel_unfold:"Open again",brightness:"Brightness",color_temp:"Colour temperature",color_pick:"Pick colour",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_floor_thumbs_folded:"Start with the miniatures folded",card_floor_thumbs_folded_hint:"Only small floor buttons at the side \u2013 the arrow still opens the pictures",card_room_names:"Show room names",card_device_names:"Show device names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_sensor_bar:"Own sensors at the top",card_sensor_bar_hint:"The sensors chosen in the editor (Settings) at the top left of the card",card_central_open:"Star menu open and large",card_central_open_hint:"Favourites and own buttons stand open from the start, a size larger",card_keep_camera:"Keep the camera when switching floors",card_keep_camera_hint:'The same side, height and distance on every floor, also after "All floors"',card_today:'"Today" card',card_today_hint:"Today's appointments and the bins due, top right",card_announcements:"Announcements",card_announcements_hint:'Announcements (action "NextFloor: Announcement") show big on the card, with a chime, and are spoken',weather_short:"Weather",time_of_day:"Time of day",time_of_day_hint:"Shows sun, light, shadows and look at another time of today. Tap again to go back to now.",menu_open:"Menu open",menu_open_hint:"The star menu with favourites and own buttons stands open from the start on this device, a size larger \u2013 for a wall tablet that mostly runs scenes.",keep_camera:"Keep camera",keep_camera_hint:"Switching floors keeps the camera on the same side, height and distance instead of fitting the new floor from the start side.",view_zoom:"Zoom",view_zoom_hint:"How close the fitted views come \u2013 on small tablets the house looks larger.",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",card_weather_density:"Amount of rain and snow",card_weather_density_hint:"Fewer drops and flakes than the weather reports; clouds, fog and lightning stay",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight and shadows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor, and the house throws its shadow on the plot. Untick it to keep floor and plot free of sun patches and shadows.",sun_arc:"Sun arc and compass",sun_arc_hint:"Draws today's path of the sun as an arc over the plot, with a ring and the compass points on the ground (north in red). Needs your home's location in Home Assistant.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_by:"Alarm set off by {cause}",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_lost:"Contact not answering: {name}",rain_sensor:"Rain sensor (own weather station)",rain_sensor_inverted:"Invert rain sensor",rain_sensor_inverted_hint:"For sensors that read off (or 0) when it rains and on when it is dry.",outage_sensor:"Power outage sensor",outage_hint:'A binary sensor of class power that is off, another binary sensor that is on, a state like "off_grid" or "backup", or a voltage below 50 V raise a warning for the whole house.',contact_warning:"Warn when a door or window contact is unavailable",contact_warning_hint:"When a contact has been unavailable for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. A note then names the contact. A restart of Home Assistant does not warn.",night_lock_warning:"Warn at night when a door is not locked",night_lock_warning_hint:"Between 10 pm and 6 am a note names the plan's door locks that stand unlocked.",alert_unlocked_night:"Not locked: {name}",motion_markers_active:"Show motion sensors only while they detect something",motion_markers_active_hint:"Applies to motion, occupancy and presence sensors. A sensor whose marker is set to always show stays visible.",room_double_tap:"Double tap on a room",room_double_tap_hint:"A double tap on a room turns its lights off when one is on, otherwise all on. Devices set to ask first always stay out.",room_double_tap_area:"Lamps in the plan and every light of the area",room_double_tap_plan:"Only lamps in the plan",room_double_tap_off:"Switch nothing",card_room_double_tap_auto:"As set in the plan",status_entities:"Own sensors at the top of the 3D view",status_add:"Add a sensor",status_name:"Shown name",status_entities_hint:"For example the outside temperature, the alarm or the air quality: they show at the top left with name and value, in an opened room too. A tap opens their details. Up to 12.",announce_tts:"Text-to-speech for announcements",announce_phrases:"Sentences for announcements (one per line)",announce_volume:"Announcement volume (%)",announce_phrases_hint:`Empty: the sentences that come with NextFloor. Announcements also exist as the action "NextFloor: Announcement" for automations \u2013 on the rooms' speakers and on every open NextFloor screen.`,opening_rain_warning:"Warn when it rains",opening_light_well:"Light well in front",sill_boards:"Sill and board",sill_boards_auto:"Automatic",sill_boards_none:"None",sill_boards_inside:"Inside only",sill_boards_outside:"Outside only",room_names_short:"Room names",device_names_short:"Device names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",import_other_hint:"From Sweet Home 3D: import the .sh3d file here. Floors, rooms, doors, windows and free walls come over, furniture does not.",import_sh3d_found:"Sweet Home 3D: {floors} floors, {rooms} rooms, {openings} doors and windows, {walls} free walls ({furniture} pieces of furniture are not taken over).",import_dxf_found:"DXF: {rooms} rooms (closed polylines) and {walls} free walls (lines) on one floor.",import_ifc_found:"In the IFC file: {floors} floors, {rooms} rooms and {openings} doors and windows (NextFloor draws the walls from the rooms).",import_roomplan_found:"Room scan (RoomPlan): {rooms} rooms, {openings} doors and windows; {skipped} objects were not taken over (you place furniture yourself).",import_error_roomplan_empty:"The room scan has no walls.",import_error_ifc_empty:"The IFC file has no spaces (IfcSpace) with a footprint.",import_error_dxf_empty:"The DXF file has no lines or polylines.",import_error_sh3d:"This is not a Sweet Home 3D file that can be read (it needs Sweet Home 3D 5.3 or newer).",import_error_sh3d_empty:"The Sweet Home 3D file has no rooms or walls.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",bars_unfold:"Switches",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_buttons:"Room buttons",card_room_buttons_hint:"A row with one button per room at the top of the card \u2013 tap one to open the room, like tapping it in the model",card_room_panel_hint:"The room's lights and blinds in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",care_bin_today:"Collected today",care_bin_tomorrow:"Collected tomorrow",care_bin_days:"In {n} days",care_mail_yes:"Post is in",care_mail_no:"Empty",care_plant_thirsty:"Thirsty",care_plant_ok:"Well watered",care_time_left:"{time} left",care_entity_bin:"Pickup date (sensor)",care_entity_mail:"Post sensor",care_entity_plant:"Soil moisture (sensor)",care_thirsty_below:"Thirsty below (%)",care_hint_bin:'A sensor with the next pickup: days, a date, "today"/"tomorrow" or the Waste Collection Schedule integration. The bin glows the day before and on the day.',care_hint_mail:"A sensor that reports post in the box (a contact on the flap, say). The mailbox glows then.",care_hint_plant:"A moisture sensor in the soil. Below the threshold the plant glows and says it is thirsty.",lib_cat_lights:"Lights",lib_cat_seating:"Seating",lib_cat_tables:"Tables",lib_cat_storage:"Cabinets & shelves",lib_cat_beds:"Beds",lib_cat_kitchen:"Kitchen",lib_cat_appliances:"Appliances",lib_cat_bath:"Bathroom",lib_cat_media:"TV & audio",lib_cat_office:"Office",lib_cat_tech:"Tech",lib_cat_climate:"Heating & climate",lib_cat_energy:"Energy",lib_cat_garden:"Garden & terrace",lib_cat_plants:"Plants",lib_cat_kids:"Kids",lib_cat_fitness:"Fitness",lib_cat_pets:"Pets",lib_cat_workshop:"Workshop & garage",lib_cat_music:"Music & studio",lib_cat_season:"Season & decoration",lib_cat_pictures:"Pictures & frames",lib_cat_vehicles:"Vehicles",lib_cat_building:"Stairs & building parts",lib_cat_decor:"Decoration & more",lib_favourites:"Favourites",lib_recent:"Recently used",lib_for_room:"Fits {room}",lib_all_rooms:"Show all rooms",lib_linkable:"linkable",lib_lit:"lit",lib_outdoor:"outdoor",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_sizes:"Sizes",feature_name_energy:"Energy flow",ext_tab:"Extensions",ext_title:"Extensions",models:"Your own 3D models",models_hint:"For some vehicles NextFloor can show a real 3D model if you own one. Choose the file (.glb) here: NextFloor turns it the right way round, makes it lighter, marks the paint and stores it on your Home Assistant. Without a model the vehicle looks as it did before.",models_licence:"The files are yours and stay on your Home Assistant. NextFloor ships no models; please make sure your model's licence lets you use it in your own installation.",model_add:"Add a model \u2026",model_replace:"Replace the model \u2026",model_remove:"Remove",model_present:"in place",model_missing:"none yet",model_remove_confirm:"Delete the model \u201C{id}\u201D from Home Assistant?",model_removed:"Model \u201C{id}\u201D deleted.",model_uploaded:"Model \u201C{id}\u201D stored ({size}). Reload the panel to see it.",model_upload:"Store on Home Assistant",model_info:"{triangles} triangles, {size} m",model_front:"Front",model_front_hint:"Turn the model until its front faces the viewer (towards the lower left in the picture).",model_paint:"Paint (the colour you pick in the editor)",model_paint_preview:"Colour in the preview",model_detail:"Level of detail",model_detail_light:"Light (tablet)",model_detail_normal:"Normal",model_detail_fine:"Fine",model_result:"Result: {triangles} triangles, {size}",model_error_not_glb:"This is not a .glb file (binary glTF). Export the model as \u201CglTF binary\u201D.",model_error_compressed:"The file is compressed (Draco, Meshopt or KTX). Export it without compression.",model_error_empty:"The file contains nothing three-dimensional.",model_error_unreadable:"The file cannot be read: {detail}",model_error_too_large:"The file is larger than {max}. Choose a lower level of detail.",model_upload_forbidden:"Only administrators may upload models.",model_upload_too_large:"Home Assistant accepts no files over {max}. Choose a lower level of detail.",model_upload_not_glb:"Home Assistant refused the file (not a binary glTF).",model_upload_bad_id:"The model id is not valid.",model_upload_other:"Uploading did not work: {detail}",ext_intro:"Import your own furniture packs, upload your own 3D models and add plugins here.",plugin:"plugin",plugins_title:"Plugins",plugins_intro:"Plugins add your own light animations, devices and cards in the room panel. Enter a plugin's address (a .js file in /config/www, i.e. /local/\u2026, from HACS /hacsfiles/\u2026, or https://\u2026).",plugins_docs:"How to write a plugin",plugins_warning:"Plugins run with the same rights as NextFloor in your browser. Only use plugins from sources you trust.",plugins_off:"off",plugins_error:"error",plugins_loading:"loading \u2026",plugins_nothing_registered:"loaded, but registered nothing",plugins_loaded:"active",plugins_reload_hint:"Takes effect after reloading the page",plugins_remove:"Remove",plugins_none:"No plugins yet.",plugins_from_dashboard:"Registered by a dashboard resource",plugins_add:"Add",plugins_url_invalid:"Enter a .js address under /local/\u2026, /hacsfiles/\u2026 or https://\u2026.",plugins_exists:"This plugin is already in the list.",plugins_limit:"At most 20 plugins.",packs_title:"Furniture packs",packs_intro:"Import your own furniture as a pack (JSON): as a file or pasted below. {n} packs come with NextFloor and are always there.",packs_docs:"Pack format",packs_none:"No packs of your own yet.",community_title:"Community furniture",community_intro:"Furniture others built with the furniture builder and shared \u2013 checked and free. Build your own:",community_builder:"Open the furniture builder",community_how:"How to share yours",community_load:"Load community furniture",community_none:"No community furniture yet \u2013 be the first!",community_install:"Install",community_update:"Update",community_installed:"Installed",community_failed:"The community furniture could not be loaded: {detail}",pack_import:"Import pack files \u2026",pack_paste:"Import JSON",pack_paste_empty:"Paste a pack's JSON first.",pack_paste_not_json:"This is not valid JSON: {detail}",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_remove:"Remove",pack_builtin_tag:"Built-in",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_error_not_a_pack:'This is not a furniture pack ("format": "nfpack" is missing).',pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The pack is too large (1 MB at most).",pack_error_needs_update:'This pack needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then import again.',pack_error_other:"Import failed: {detail}",store_open:"Open plugin store",store_close:"Close plugin store",store_intro:"Reviewed plugins from the community. Each one is looked at before it is added and does not change afterwards.",store_submit:"Submit your own plugin",store_empty:"No plugins in the store yet.",store_failed:"The store could not be loaded ({error}).",store_install:"Install",store_installed:"installed",store_update:"Update",store_confirm:`Install \u201C{name}\u201D by {author}?

A plugin runs with the same rights as NextFloor in your browser. The file has been reviewed and its content is fixed:
{url}`,manual:"Manual",manual_more:"Learn more",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",live_autarky:"self-sufficient",live_fold:"Make the card small",live_unfold:"Open the card",live_day_hint:"The last 24 hours: solar (area) and consumption (line)",live_week_hint:"The last 7 days: sun {solar} kWh, use {use} kWh (yellow: sun, light: use)",live_days:"days",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_game_since:"since {time}",live_game_achievements:"Achievements and Gamerscore in this game",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",live_car_departure_entity:"Departure time (optional)",live_car_departure:"Departs {time}",live_car_open:"Open: {parts}",printer_printing:"printing",printer_done:"done",printer_paused:"paused",printer_error:"error",printer_idle:"idle",printer_done_at:"done at {time}",printer_layer:"Layer",printer_nozzle:"Nozzle",printer_bed:"Bed",heatpump_heating:"heating",heatpump_water:"making hot water",heatpump_cooling:"cooling",heatpump_defrost:"defrosting",heatpump_idle:"resting",heatpump_flow_return:"Flow \u2192 return",heatpump_heat:"Heat",heatpump_power:"Power",heatpump_outside:"outside",pack_missing_item:"Furniture of a removed pack",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_lift_slide:"Lift-and-slide door",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",glass_panes:"Panes",glass_panes_auto:"automatic (about 0.9 m)",glass_panes_hint:"0 = one single pane without mullions, empty = about every 0.9 m",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_free_corner_hint:"Tip: hold Shift while dragging a corner to move only that corner, turning the rectangle into a free shape.",outdoor_opacity:"Opacity (%)",outdoor_opacity_hint:"100 = solid. Less makes the area see-through, such as a driveway above a cellar; the outline stays.",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_corners_hint:"Corners: a + on an edge adds a corner, dragging shapes the area, \xD7 removes a corner.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",fence_gates:"Gates in the fence",gate_add:"+ Gate in the fence",gate_edge:"Fence side",gate_kind:"Kind",gate_single:"Garden gate",gate_double:"Double gate",gate_sliding:"Sliding gate",gate_offset:"Middle from the start (m)",gate_width:"Width (m)",gate_entity:"Motor or switch",gate_contact:"Contact (on = open)",fence_gates_hint:"A gate is a gap in the fence with gate posts and a leaf. With a motor (cover, switch, input_boolean, lock) and/or a contact it opens in 3D: garden and double gates swing inwards, a sliding gate runs along the fence.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of surrounding areas",outdoor_cut_hint:"Every area that contains this one whole gets a hole here \u2013 a pool in the terrace, a pond or a wild patch in the lawn. The drawing order does not matter. A pool cuts itself out on its own.",outdoor_area_hint:"The Home Assistant area of this surface (garden, terrace, pool): its devices and sensors are listed under Outside, and a pin on the surface opens it.",pool_temp:"Water temperature (optional)",pool_pump:"Pump / filter (optional)",pool_pump_on:"pump on",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",map_on:"Show a real map under the plan",map_lat:"Latitude",map_lon:"Longitude",map_use_ha:"Use Home Assistant's location",map_opacity:"Visibility (%)",map_zoom:"Detail level",map_zoom_coarse:"coarse",map_zoom_fine:"fine",map_move:"Move the map under the plan",map_step:"Step",map_url:"Own tile address (empty = OpenStreetMap)",map_hint:"Your browser loads the map tiles straight from the map server (OpenStreetMap by default, please mind their usage policy); nothing is loaded while the map is off. The plan lies on the map as the compass says \u2013 turn the compass or move the map until the house fits.",compass_title:"Compass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Swap north \u2194 south",compass_swap_hint:"Turns the compass by 180\xB0. The drawing, roof faces and solar fields stay as they are.",compass_hint:"If the compass does not match reality, turn it here \u2013 nothing has to be redrawn. Sunlight, wind and the compass directions of roof faces follow it.",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_end_start:"End at the ridge start",roof_end_end:"End at the ridge end",roof_halfhip:"Half-hip starts at",roof_halfhip_hint:"How high up the gable the hipped part starts, as a share of the gable's height: low = a large hip, high = only the tip is hipped.",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_rotation:"Turn (\xB0)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan, a + on an edge adds a corner, \xD7 removes one. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_overhang_sides:"Overhang per side",roof_overhang_a:"Overhang eave A (m)",roof_overhang_b:"Overhang eave B (m)",roof_overhang_u0:"Overhang gable start (m)",roof_overhang_u1:"Overhang gable end (m)",roof_overhang_auto:"Back to automatic",roof_overhang_sides_hint:"Without values of your own the overhang is automatic: the same everywhere, except where the roof part meets the house (none there).",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart or overlapping at one shared wall; a gap becomes the interior wall thickness.",rooms_as_drawn:"Rooms as drawn",rooms_as_drawn_hint:'Rooms stay exactly as you drew them (by their inner faces). Where two rooms have a gap between them, one wall fills the gap instead of each room growing its own exterior wall into it. Doors and windows then sit in the wall between, and its thickness is the gap. "Close gaps" is not needed for this.',gaps_not_needed:'With "Rooms as drawn" (Settings) walls fill the gaps and the rooms stay where they are.',gaps_none:"No gaps between rooms found.",rooms_from_walls:"Rooms from walls",rooms_from_walls_hint:"Makes a room to name out of every area the drawn walls enclose. Rooms already there stay. One at a time works too: tap inside an enclosed area with the rectangle tool.",rooms_from_walls_none:"No closed areas without a room found. The walls must touch and close all the way round.",rooms_from_walls_covered:"The walls close areas, but they already lie inside an existing room (e.g. the house outline drawn as a room). Delete that room or draw the outline with the wall tool.",wall_side:"Wall sits",wall_side_hint:"Where the new wall lies in relation to the line you drag: centred on it, or to its left or right (the line is then the wall's face, seen in the direction you draw).",wall_side_center:"centred",wall_side_left:"left of line",wall_side_right:"right of line",rooms_from_walls_done:"{n} rooms made from the walls. Now just name them.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",door_angle:"Opening angle",door_angle_default:"Default",door_angle_hint:"How far the leaf opens. With a sensor it opens that far once it reports open; without one it stands that far open (instead of half). Default stays as before.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",studio_new:"Build your own piece",studio_title:"Furniture studio",studio_title_edit:"Furniture studio: change",studio_hint:'Pick a template, set its measurements and fronts and put the piece into the plan. It goes into the "Own furniture" pack and can be changed here again later.',studio_kind:"Template",studio_kind_cabinet:"Cabinet",studio_kind_shelf:"Shelf",studio_kind_lamp:"Lamp",studio_kind_device:"Device",studio_name:"Name",studio_width:"Width (cm)",studio_depth:"Depth (cm)",studio_height:"Height (cm)",studio_doors:"Doors",studio_drawers:"Drawers",studio_shelves:"Shelves",studio_handle:"Handles",studio_handle_bar:"Bar",studio_handle_knob:"Knob",studio_handle_none:"None",studio_base:"Base",studio_base_plinth:"Plinth",studio_base_legs:"Legs",studio_base_none:"None",studio_back:"Back panel",studio_lamp:"Kind",studio_lamp_floor:"Floor lamp",studio_lamp_table:"Table lamp",studio_lamp_pendant:"Pendant",studio_lamp_wall:"Wall light",studio_display:"Display on the front (shows the media player)",studio_mount:"Stands",studio_mount_floor:"On the floor",studio_mount_surface:"On furniture",studio_mount_wall:"On the wall",studio_color_body:"Body",studio_color_lamp_body:"Base and frame",studio_color_front:"Fronts",studio_color_boards:"Boards",studio_color_shade:"Shade",studio_color_display:"Display frame",studio_color_white:"White",studio_color_wood:"Wood",studio_color_metal:"Metal",studio_color_dark:"Dark",studio_color_glass:"Glass",studio_color_accent:"Accent",studio_color_own:"Own colour",studio_color_plan:"Colour of the plan",studio_place:"Put into the plan",studio_save:"Save the change",studio_open:"Change in the studio",studio_error:"Could not save: {detail}",studio_pack_name:"Own furniture",studio_pack_publisher:"Furniture studio",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",tilt_x:"Tilt front/back (\xB0)",tilt_z:"Tilt sideways (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_rise:"Rise along its length (\xB0)",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. If it reaches over several rooms, it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_stairs:"Stairs",hint_stairs:"Drag where the stair should stand \u2013 it runs along the long side; set shape, turn and build on the right afterwards",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_slope:"Sloping",wall_slope_start:"Height at the start (m)",wall_slope_end:"Height at the end (m)",wall_slope_hint:"Sloping wall: the top runs straight from the height at the start of the wall (the corner with the lower number) to the height at its end. Both may be above the floor height, for example for a lean-to room with high clerestory windows.",wall_slope_off:"Back to a level wall",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_view:"Wall view",wall_view_hint:"The wall from the front: drag its doors, windows and furniture or type their distance.",wall_view_prev:"Previous wall",wall_view_next:"Next wall",wall_view_left:"From the left (m)",wall_view_height:"Above the floor (m)",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Joins the free walls of this floor whose ends are meant to meet: two ends close together get a shared corner, an end at the side of another wall stops at its face. This happens by itself when you draw a wall or drag an end.",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",free_wall_slope:"\u25E2 Sloping",free_wall_slope_hint:"The wall gets higher or lower from one end to the other: the height above is at its start, the one here at its end.",free_wall_height_end:"Height at the end (m)",free_wall_hang:"Hangs in the air",free_wall_hang_hint:"The wall does not stand on the floor but starts at its bottom edge, e.g. the piece of wall under a sloped roof between the slope and the ceiling. With a sloping bottom edge it follows the roof pitch.",free_wall_bottom:"Bottom edge above the floor (m)",free_wall_bottom_slope:"Sloping bottom edge",free_wall_bottom_end:"Bottom edge at the end (m)",arc:"Arc",arc_hint:"Bends the wall into an arc. A room sharing the wall bends along, doors and windows move with it; Undo takes the arc back.",arc_bulge:"Bulge (m)",arc_bulge_hint:"How far the middle of the wall bulges: positive outwards, negative into the room.",arc_apply:"Bend",arc_too_wide:"A door or window in this wall is too wide for this curve. Make the curve flatter or the opening narrower.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Extensions \u2192 Furniture packs).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_entity_mower:"Robot mower",pet_room_sensor:"The pet's room sensor (optional)",pet_room_hint:"A sensor naming the room the pet is in \u2013 Bermuda or ESPresense with a tag on its collar: in 3D it then roams that room.",furn_entity_water:"Valve or switch",device_temp:"Device temperature",device_temp_hint:"A temperature sensor of the device (inverter, battery, PC \u2026): its value shows on the pin in the 3D view, from 60 \xB0C the pin is highlighted.",temp_label:"Name of temperature {n}",temp_label_example:"e.g. Flow",temp_sensor:"Sensor of temperature {n}",device_temps_hint:"More named temperatures on the pin, e.g. a boiler's flow and return or a tank's target and actual (up to 6). Clearing a sensor removes the row.",fridge_temp:"Fridge temperature",freezer_temp:"Freezer temperature",fridge_temp_hint:"The pin shows the temperatures. Above 8 \xB0C in the fridge or \u221212 \xB0C in the freezer it lights up as a warning.",spray_reach:"Reach of the water (m)",spray_hint:"While the valve is open or the switch is on, the sprinkler throws water in arcs around it.",furn_robot_room:"Current room (sensor)",robot_cal_none:"Not calibrated yet \u2014 with nothing tying the robot's grid to the plan, the lanes stay invented.",robot_cal_done:"Calibrated: one map cell measures {m} m.",robot_cal_do:"Calibrate from where the robot is now",robot_cal_doing:"Tap the plan where the robot is right now.",robot_cal_need:"The robot's map is not reporting a position \u2014 is the integration running?",robot_cal_hint:"The dock is the anchor: the plan knows where it stands, the camera knows where the robot and its dock lie in their grid. If the map names its rooms like the plan does, \u201CCalibrate from the rooms\u201D is all it takes. Otherwise: stop the robot at least 1.5 m away \u2014 pause the clean \u2014 and tap it on the plan. If the rooms come out flipped, set the tick.",robot_cal_mirror:"The robot's map is mirrored (rooms come out flipped)",robot_cal_forget:"Remove the calibration",robot_cal_nudge:"Fine-tune by hand: the arrows move the map by 10 cm, \u27F2 \u27F3 turn it by 1\xB0, \u2212 + change its size by 1 %.",robot_cal_nudge_move:"Move the map",robot_cal_nudge_turn:"Turn the map",robot_cal_nudge_grow:"Make the map larger or smaller",robot_cal_rooms:"Calibrate from the rooms (the map knows {n} rooms)",robot_cal_rooms_none:"Too few rooms have the same name in the plan as on the robot's map ({n} found, at least 2 needed). Name them alike \u2014 or calibrate from the robot's position.",robot_cal_rooms_bad:"The rooms with matching names lie differently in the plan than on the robot's map \u2014 is a room mixed up? Otherwise calibrate from the robot's position.",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. With the robot's own map calibrated below, the track shows where it has really driven instead; without it the lanes are a guess. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_ceiling_fan:"Ceiling fan",furn_fan_entity:"Fan",fan_hint:"The light is the fan's light kit (leave it empty if it has none). The fan is found in the room or chosen here: in 3D the blades turn as fast as it runs, its icon switches it, swiping up/down changes the speed, a long press opens the quick menu. The height is how far it hangs from the ceiling (more = a longer downrod).",room_ceiling:"Ceiling height",room_ceiling_tip:"Lower than the floor (a bathroom under the stairs) or higher (a living room open up to the roof): ceiling lights, fans, LED strips and ceiling devices hang from here, and the room's walls are this high.",room_ceiling_through:"The ceiling ({ceiling} m) is above the floor height ({floor} m): the room reaches into the floor above, its walls rise with it, and the floor above stays open over it. The editor of the upper floor shows the area hatched.",room_floor_offset:"Floor level (m)",room_floor_offset_hint:"When this room's floor lies lower or higher than the floor (a sunken entrance: \u22120.39), its floor, walls, doors and windows and what stands in it move with it; its ceiling stays. Add the steps as a stair.",room_inner:"Inside {w} \xD7 {d}",room_inner_hint:"Measured from wall to wall: inner walls take half their thickness, outer walls stand outside the outline.",floor_heating:"Underfloor heating (optional)",floor_heating_hint:"While the thermostat heats (or the valve is open, the switch on), the room's floor glows warm in 3D.",room_announce_speaker:"Speaker for announcements",room_announce_quiet:"Quiet time for announcements",room_announce_hint:"Without a choice, the speaker placed in the room talks, else a voice assistant, an Echo or a speaker of its area (never a TV). During the quiet time, announcements to several rooms leave this room out; one meant only for it still gets through.",ceiling_here:"Ceiling here",ceiling_here_hint:"Height of the ceiling right at this spot, e.g. in a sloping ceiling. Empty = the room's ceiling.",ceiling_slope:"Up to the roof slope",ceiling_slope_hint:"The ceiling here lies under the roof slope: the lamp hangs from its underside, right above where it stands.",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",lamp_extra_light:"Bulb {n} (optional)",lamp_extra_hint:"A fixture with several lights \u2013 main light, night light, ambient ring: while the main light is off it glows in 3D with the next light that is on, a little dimmer. Switch the lights one by one in the room panel.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",furn_colors_card:"Furniture colours of this card",furn_color_house:"House colour",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_real:"Realistic",theme_nordic:"Nordic (Daylight)",theme_warm_evening:"Warm Evening",theme_minimal:"Minimalist Studio",theme_day:"Day",theme_own:"Own",own_look_card:"Own look colours of this card",own_look_dark:"Own look: surfaces dark",own_look_light:"Own look: surfaces light",own_look_lines:"Own look: lines",own_look_background:"Own look: background",own_look_hint:"The look \u201COwn\u201D works like Blueprint and Day, but with your colours: walls, floors and furniture run from \u201Csurfaces dark\u201D to \u201Csurfaces light\u201D, edges take the line colour. Signal colours (lamps, alerts, heat map) stay. On a light background the lines do not glow. A card can set its own colours.",theme_auto:"Auto",clock:"Clock",clock_none:"None",clock_top_left:"Top left",clock_top_right:"Top right",clock_bottom_left:"Bottom left",clock_bottom_right:"Bottom right",glass_walls:"Glass walls",glass_walls_hint:"How opaque the walls you look through into the rooms are: left almost invisible, right opaque. For this screen.",screen_name:"Name of this screen",screen_name_hint:'Announcements show on every open NextFloor screen. With a name (e.g. "Hallway"), an announcement can go to this screen only. Unticked, this screen stays silent.',announce_on:"Announcements on this screen are on",announce_muted:"Announcements on this screen are muted",lock3d_on:"Lock 3D (no turning, zooming or panning; taps still work)",lock3d_off:"Unlock 3D",walk:"Walk through the house",travel:"Time travel: replay the last 24 hours or 7 days",travel_play:"Play",travel_pause:"Pause",travel_loading:"Loading history \u2026",travel_failed:"The history could not be loaded.",travel_speed:"Speed",travel_speed_min:"1 min/s",travel_speed_10min:"10 min/s",travel_speed_hour:"1 h/s",travel_days:"days",travel_live:"Live",card_travel_button:"Button for time travel",walk_stop:"Stop walking",walk_hint:"Drag: look around \xB7 W A S D / arrows or stick: walk \xB7 wheel: step",card_walk_button:"Button to walk through",card_lock_button:"Button for the 3D lock",backdrop:"Own background",backdrop_color:"Colour",backdrop_image:"Picture (/local/\u2026 or https://\u2026)",backdrop_dim:"Dim",backdrop_hint:"Instead of the look's sky the house stands in front of a colour or a picture of your own. A picture in /config/www is reachable at /local/\u2026.",furnish:"Furnish",split_3d:"3D beside",plan_dims:"Measurements",plan_dims_hint:"Labels every room edge with its length.",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_mould:"Mould",heat_short_power:"Power",heat_short_comfort:"Comfort",heat_short_sun:"Sun",heat_short_wifi:"Wi-Fi",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_mould:"Mould",heat_power:"Power use",heat_comfort:"Comfort score",heat_sun:"Sun today",room_sun_hours:"{h} h of sun today ({facing})",open_since:"open for {time}",presence_now:"someone here",presence_last:"last seen {time} ago",comfort_n:"Comfort {n}",empty_lights_hint:"{n} lights on, nobody here for {min} min.",empty_lights_off:"Lights off",open_heating_hint:"{n} windows open while the heating runs.",open_heating_off:"Heating off",room_clean:"Cleaning (script or button)",room_clean_hint:`A script or button that sends the robot vacuum to this room (e.g. your robot integration's room cleaning). The room panel then shows "\u{1F9F9} Clean".`,room_clean_run:"Clean",room_clean_run_hint:"Sends the robot vacuum to this room.",shade_hint:"Sun on {n} windows at {temp} \u2013 lower the blinds?",shade_close:"Lower",room_sun_year:"Sun over the year",room_sun_year_hint:"The hours of sun through the room's outside windows on the 15th of every month.",room_energy:"today {today} \xB7 month {month}",room_energy_hint:"From the statistics of the power sensors of the room's devices; the month's cost at the house's tariff.",heat_summer:"summer",heat_winter:"winter",air_co2:"air it (CO\u2082)",air_humidity:"air it (damp)",air_mould:"risk of mould \u2013 air it",room_curve_hint:"The room's temperature over the last 24 hours",heat_values:"Values at the room names",heat_wifi:"Wi-Fi",wifi_aps:"{n} access points \xB7 {clients} devices",wifi_network:"Network: {online} online \xB7 {offline} offline",wifi_none:"Place access points or routers from the packs (Smart home 2) and link them to an entity of their device.",wifi_clients:"{n} devices",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",meter_parent:"Hangs off meter",meter_parent_none:"none (main meter)",meter_main:"Main meter",meter_unmetered:"{w} unmetered",meter_device_hint:"If the device sits behind a sub-meter (e.g. a balcony plant in a flat), its power counts towards that flat. The sub-meter has to measure both ways for this (\u2212 = feeding back); if it only counts import, the flat's consumption comes out too high while there is a surplus.",meter_sub_power:"Power of the branch (W, + = drawn, \u2212 = fed back)",meter_floors:"Feeds the floors",meter_sub_hint:"A sub-meter measures its branch, e.g. a flat. Devices on the ticked floors hang off it in 3D instead of the main meter; what the main meter counts beyond that shows as \u201CCommon (rest)\u201D in the balance.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",energy_routes:"Cable routes",energy_routes_hint:"Where a cable really runs: the flow then follows your points instead of an arc through the house. Without a route it keeps the arc. Consumers keep their arc.",pipes_title:"Heating and water pipes",pipes_hint:"Draw pipes in the plan: red for the supply, blue for the return, orange for hot and light blue for cold water. Linked to a device (a pump, a heating circuit, a valve), particles flow through the pipe in the 3D view while it runs. The flow shows when the energy animation is on.",pipe:"Pipe",pipe_add:"Add a pipe",pipe_name:"Name",pipe_kind:"What flows here",pipe_kind_supply:"Supply (red)",pipe_kind_return:"Return (blue)",pipe_kind_hot:"Hot water (orange)",pipe_kind_cold:"Cold water (light blue)",pipe_entity:"Flows while active (pump, heating circuit, valve)",route_conn_solar:"{name} \u2192 inverter",route_conn_battery:"Battery \u2194 house",route_conn_inverter:"Inverter \u2192 house",route_conn_grid:"Grid \u2194 house",route_conn_meter:"{name} \u2194 parent meter",route_conn_device:"{name} \u2194 sub-meter",route_points:"{n} points",route_none:"direct arc",route_draw:"Draw route",route_redraw:"Redraw",route_drawing:"Tap the points the cable runs through on the plan, from one end to the other; switch floors in between where it goes through a ceiling. {n} points.",route_undo:"Last point",route_done:"Done",route_cable:"Show as cable",route_cable_hint:"Draws the route as a visible cable, not just as the faint line under the particles.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_rack_ew:"East-west racks",solar_rack_ew_hint:"Every second row faces the other way, the pairs stand back to back \u2013 low and close, as on many flat roofs.",solar_rack_tilt:"Rack (\xB0 more tilt)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",chimneys:"Chimneys",chimney:"Chimney",chimney_shape:"Shape",chimney_brick:"Brick",chimney_round:"Round",chimney_wide:"Wide, two flues",chimney_steel:"Steel flue pipe",chimney_diameter:"Diameter (m)",chimney_depth:"Depth (m)",chimney_height:"Height above the roof (m)",chimney_hint:"The height counts from the upper side, where the chimney leaves the roof. Drag it in the plan or in the 3D view, also onto another roof face.",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_tap:"Tapping the item",furn_tap_default:"As usual",furn_tap_hint:"An own action like the star menu's own buttons, e.g. a browser_mod popup with your card.",furn_show_when:"Only show while \u2026",furn_show_when_state:"\u2026 is in state (empty = on)",furn_show_when_invert:"The other way round: show while it is not",furn_show_when_hint:"Seasonal decoration that only stands in December: a helper (input_boolean), a calendar or a sensor decides whether the piece shows in 3D. Separate several states with commas. The editor always shows it.",picture_upload:"Upload a photo",picture_replace:"Upload another photo",picture_stored:"An own photo is stored.",picture_url:"\u2026 or picture address",picture_entity:"\u2026 or an entity's picture",picture_border:"Mat (%)",picture_fit:"Photo",picture_fit_cover:"fills the frame",picture_fit_contain:"shown whole",picture_hint:"Your photo in the frame, in 3D and on the wall tablet. Uploaded photos are stored with the plan in a smaller size; an image entity (a photo of the day) or a camera shows its current picture.",furn_state_split:"Halves",furn_on_color:"Colour while on",furn_on_effect:"Effect while on",furn_on_effect_none:"Steady",furn_on_effect_pulse:"Pulse",furn_on_effect_flicker:"Flicker",furn_on_effect_rainbow:"Rainbow",solar_front:"dormer front",card_sun_shadows:"Sun shadows and sky light (realistic)",sun_shadows_short:"Shadows",sun_shadows_hint:"Sun shadows and sky light in the realistic look; off saves a lot of work on tablets",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_placed_outside:"outside the rooms",devices_place_fixed_confirm:"This device is fixed. Move it here anyway?",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",climate_more:"\u2026 and another sensor (averaged)",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",window_opens:"Opens",window_opens_turn:"Turn and tilt (inwards)",window_opens_slide:"Sliding (sliding window, lift-and-slide door)",window_opens_top:"Top-hung (bottom swings out)",window_opens_hint:"Sliding: the pane on the hinge side slides in front of the fixed one; with two leaves the middle two slide outwards. Top-hung windows open with their contact or a tilt sensor.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",pin_shift:"Move the pin",pin_shift_up:"\u2191 up",pin_shift_hint:"When devices stand close together, push the pin a little aside or up here (in metres); the device itself stays where it is.",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_active:"Only while active",marker_show_never:"Hide",marker_icon:"Own symbol (Home Assistant icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",card_tap_in_room:"Switch devices only in the opened room",card_tap_in_room_hint:"In the house and floor views a tap opens the floor or room, even on a device or its marker. In the opened room it switches the device. A long press always opens its menu or details.",card_markers_outside:"Choose the markers outside the opened room",card_markers_outside_hint:`In the house, on the floor and in the other rooms only the ticked kinds; in the opened room all, as set above. A device's own "always" and "never" come first.`,marker_kind_light:"Lights",marker_kind_cover:"Blinds",marker_kind_climate:"Heating",marker_kind_media:"Media",marker_kind_switch:"Switches",marker_kind_fan:"Fans",marker_kind_lock:"Locks",marker_kind_binary:"Contacts and detectors",marker_kind_sensor:"Sensors",marker_kind_tap:"Furniture with an action",marker_kind_other:"Other",device_name_hint:'A name for the plan and the room panel only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',device_simple:"Switch only in the room panel",device_simple_hint:"The room panel shows only the switch for this lamp, without brightness, colour temperature and colours.",floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of an icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert; icons of your own sets such as local:my-icon (Custom Icons integration) work too. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_shape:"Shape",stair_shape_straight:"Straight",stair_shape_quarter:"Quarter turn (winders)",stair_shape_l:"L with landing",stair_shape_half:"Half turn (winders)",stair_shape_u:"U with landing",stair_shape_spiral:"Spiral",stair_shape_three_quarter:"Three-quarter turn",stair_turn:"Turns (walking up)",stair_turn_left:"To the left",stair_turn_right:"To the right",stair_build:"Build",stair_build_solid:"Solid (concrete)",stair_build_stringer:"On stringers",stair_build_mono:"Mono stringer (spine)",stair_build_cantilever:"Cantilevered (floating)",stair_risers:"Closed risers",stair_steps:"Risers",stair_run_width:"Flight width (m)",stair_landing_after:"Risers up to the landing",stair_landing_hint:"The landing lies {h} cm above the floor; the other risers come after it.",stair_rail:"Railing",stair_rail_none:"None",stair_rail_left:"Left",stair_rail_right:"Right",stair_rail_both:"Both sides",stair_down:"Leads down",stair_down_hint:"The stair starts on this floor and leads down, for example into a cellar that need not be drawn. It opens the floor of this level.",stair_measures:"{steps} risers of {rise} cm \xB7 going {going} cm \xB7 step measure {measure} cm",stair_uncomfortable:"uncomfortable (step measure 59\u201365 cm, rise at most 21 cm)",stair_up_note:"The stair starts at the marked front edge. The floor above opens only where less than 2.2 m of headroom is left above the steps.",stair_down_note:"You step onto the stair at the marked front edge and walk down. The plan draws it dashed; this floor opens above the steps.",stair_opening:"Floor opening",stair_opening_headroom:"By headroom (only where needed)",stair_opening_full:"Over the whole stair",stair_opening_none:"None (hatch, closed stairwell)",stair_opening_hint:"How much of the floor the stair reaches it opens: the floor above, or its own floor for a stair going down. By headroom opens only above the steps that lack 2.2 m.",stair_up_note_plain:"The stair starts at the marked front edge and rises towards the back.",stair_upgrade:"Set the shape",stair_upgrade_hint:"Turns this into a stair with a shape (winding, L, U, spiral), build, railing and number of steps.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas:"Gas meter (optional)",energy_water:"Water meter (optional)",energy_meters_hint:"Gas and water show with the house's balance \u2013 in the energy bar and on the house card: a sensor with the flow now (m\xB3/h, l/min) or today's reading.",energy_gas_short:"Gas",energy_water_short:"Water",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_rest:"Common (rest)",energy_advanced:"Advanced energy mode",energy_advanced_on:"Use sub-meters",energy_show_unmetered:"Show unmetered use at sub-meters",energy_show_unmetered_hint:"A sub-meter's label then shows what its floors use and how much of it no placed device measures, e.g. \u201C500 W \xB7 450 W unmetered\u201D. Otherwise it shows the meter's reading.",energy_advanced_hint:"For sub-meters, e.g. one per flat behind a main meter: a meter can then hang off another one and feed its own floors. Off = the first meter is the grid connection, further ones are consumers.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",ble:"Bluetooth locating",ble_hint:"Locate a Bluetooth tag (key fob, watch, phone) by room: walk through the rooms with it and record each room. NextFloor then compares how strongly Home Assistant's Bluetooth scanners (ESPHome proxies, Shelly devices with Bluetooth switched on, adapters on the server) hear it. Every tag gets a sensor whose state is the room name.",ble_unavailable:"Home Assistant's Bluetooth integration is not running. Without it there are no scanners.",ble_scanners:"{n} Bluetooth scanners in Home Assistant. The more scanners in different rooms, the more exact.",ble_add:"Add a tag or device",ble_trackers:"Phones and watches (Private BLE Device)",ble_devices:"Bluetooth devices found",ble_name:"Name (optional)",ble_refresh:"Reload the list",ble_add_button:"Add",ble_learn:"Learn rooms",ble_close:"Close",ble_spots:"{n} recordings",ble_now:"Now",ble_unknown:"unknown",ble_none_heard:"No scanner hears the tag right now. Hold it near a scanner and wait a moment; a tag only sends every few seconds.",ble_no_address:"This phone or watch has no known address right now. Check Home Assistant's Private BLE Device integration.",ble_one_scanner:"Only one scanner hears the tag. Telling rooms apart takes at least two, better three or more.",ble_learn_room:"Record a room",ble_record:"Record ({s} s)",ble_recording:"Recording \u2026 {s} s left",ble_forget_room:"Forget the room",ble_learn_hint:"Pick the room, press Record and walk slowly through the whole room with the tag in your hand, into the corners too. Recording again replaces the room. Learn every room you want to locate the tag in.",ble_sensor_hint:`The sensor "{name}" (device NextFloor) shows the room. Under Presence you can pick it as a person's room sensor.`,presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",presence_overview:"Show people in the whole-house overview",presence_overview_hint:"Show person avatars when viewing all floors. Individual floor views keep showing them as before.",presence_room:"Default room",presence_room_none:"\u2013 none \u2013",presence_add:"Another entity (helper switch, tracker)",no_persons:"There are no people in Home Assistant.",energy_battery_charging:"Battery charging",energy_battery_discharging:"Battery discharging",energy_sign_battery_day:"The battery discharges while about as much is fed into the grid. Its sensor probably has its sign reversed (it is really charging).",wall_axis_hint:"Where the wall's drawn line sits: in its middle or on one of its faces. The line and the grips in the plan sit there; the wall itself stays where it is when you change this.",wall_join:"Close corners",wall_joined:"{n} walls joined at their corners.",wall_join_none:"No open corners found: all wall ends that are meant to meet already do.",own_look_glass:"Own look: glass",pipes_branch_hint:"Branches: draw the main run (say from the cellar to the top floor) as one pipe and each branch to a radiator as a pipe of its own. A point close to another pipe lands on it, so the branch sits exactly on the main run. Each branch can have a device of its own (its radiator's thermostat).",energy_sign_solar:"The solar power is negative. The sensor probably counts production with its sign reversed.",roof_parts_hint:"Your plan has {n} parts that need a roof of their own (an annexe, a lower part, an outbuilding such as a garage or a shed). The simple roof only covers the top floor. With roof sections each part gets its roof at its own height; solar fields can go on those too."},lo=globalThis,oo=globalThis.__NF_SHARED_TEXTS__?lo.__nextfloorBuiltin?.de??{}:Jh,so=globalThis.__NF_SHARED_TEXTS__?lo.__nextfloorBuiltin?.en??{}:Qh;lo.__nextfloorBuiltin??={de:oo,en:so};var ao=()=>typeof A=="object"&&A||{},Xh=globalThis,Rr=Xh.__nextfloorTexts??=new Map;function Za(n){let e=n.toLowerCase(),t=/^zh[-_](hant|tw|hk|mo)/.test(e)&&"zh-tw"in ao()?"zh-tw":e.split(/[-_]/)[0];return t!=="de"&&t!=="en"&&t in ao()?t:void 0}function Ya(n){let e=Za(n),t=e===void 0?void 0:Rr.get(e);return t instanceof Promise?void 0:t}function Tr(n,e){let t=Za(n?.language??navigator.language);if(t===void 0)return!1;let r=Rr.get(t);return r===void 0&&(r=fetch(new URL(`./lang/${t}.json?v=${ao()[t]}`,import.meta.url)).then(i=>i.ok?i.json():{}).catch(()=>({})).then(i=>{Rr.set(t,i&&typeof i=="object"?i:{})}),Rr.set(t,r)),r instanceof Promise?(r.then(()=>e.requestUpdate()),!0):!1}function Ja(n,e){return Ya(n)?.[e]}function M(n,e,t={}){let r=n?.language??navigator.language,i=r.startsWith("de"),o=(i?void 0:Ya(r)?.[e])??(i?oo:so)[e]??so[e]??oo[e]??e;for(let[s,a]of Object.entries(t))o=o.replace(`{${s}}`,String(a));return o}function U(n,e,t=2){return e.toLocaleString(n?.language??void 0,{maximumFractionDigits:t})}var Qa={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Dr=n=>Qa[n];function Ne(n){let e=o=>o.replace(/[^a-z0-9_-]/gi,""),[t,...r]=n.trim().split(":");return`<ha-icon icon="${r.length?`${e(t)}:${e(r.join(""))}`:`mdi:${e(t)}`}" style="--mdc-icon-size:18px"></ha-icon>`}function Lt(n){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Qa[n]}"/></svg>`}function Xa(n,e,t){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:t;return r?n.states[r]:void 0}function Fr(n,e){if(n.animations_enabled===!1||e?.state!=="on")return;let t=e.attributes.effect;if(typeof t!="string"||!n.effect_animations||!Object.prototype.hasOwnProperty.call(n.effect_animations,t))return;let r=n.effect_animations[t];return r==="rainbow"||r==="pulse"||r==="flicker"||Ks(r)?r:void 0}var st=(n,e)=>M(n,e),ep=(n,e)=>st(n,e?"state_on":"state_off");function Pr(n,e){let t=`state_${e}`,r=M(n,t);return r===t?e:r}var tp=new Set(["door","window","opening","garage_door"]),np=new Set(["playing","paused","on","idle"]);function rp(n,e){if(e.state!=="on")return st(n,"state_off");let t=e.attributes.brightness;return typeof t=="number"?`${Math.round(t/255*100)} %`:st(n,"state_on")}function el(n,e){let t=e.attributes.current_position,r=e.state==="opening"||e.state==="closing";return typeof t=="number"&&!r?`${t} %`:Pr(n,e.state)}var ip={heating:"\u{1F525}",cooling:"\u2744\uFE0F"};function op(n,e){let t=n?de(n):"\xB0C",r=e.attributes.current_temperature,i=typeof r=="number"?`${U(n,r,1)} ${t}`:null;if(e.state==="off")return i?`${i} \xB7 ${st(n,"state_off")}`:st(n,"state_off");let o=e.attributes.temperature,s=i&&typeof o=="number"?` \u2192 ${U(n,o,o%1?1:0)} ${t}`:"",a=ip[String(e.attributes.hvac_action)];return i?`${i}${s}${a?` ${a}`:""}`:Pr(n,e.state)}function sp(n,e){let t=[e.attributes.app_name,e.attributes.media_title,e.attributes.source].find(r=>typeof r=="string"&&r!=="");return np.has(e.state)&&t?t:Pr(n,e.state)}function ap(n,e){let t=e.state==="on";return tp.has(String(e.attributes.device_class))?st(n,t?"state_open":"state_closed"):st(n,t?"state_detected":"state_clear")}function lp(n,e,t=new Date){let r=new Date(e.state);if(Number.isNaN(r.getTime()))return"\u2013";let i=n?.language??navigator.language,s=r.toDateString()===t.toDateString()?{hour:"2-digit",minute:"2-digit"}:{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(i,s).format(r)}function cp(n,e){if(e.entity_id.startsWith("event."))return lp(n,e);let t=Number(e.state);if(!Number.isFinite(t))return e.state;let r=n?.entities?.[e.entity_id]?.display_precision??1,i=e.attributes.unit_of_measurement;return`${U(n,t,r)}${typeof i=="string"&&i?` ${i}`:""}`}function ce(n,e){if(!e||V(e))return st(n,"state_unavailable");switch(L(e.entity_id)){case"light":return rp(n,e);case"switch":case"fan":return e.entity_id.startsWith("valve.")?el(n,e):ep(n,e.state==="on");case"cover":return el(n,e);case"climate":return op(n,e);case"media":return sp(n,e);case"lock":return Pr(n,e.state);case"binary":return ap(n,e);case"sensor":return cp(n,e);default:return""}}var up=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&O([e,t],r.points))??null;function co(n,e){return!n||e==null||e===1?n:{...n,level:Math.min(1.5,Math.max(.02,n.level*e))}}function dp(n,e,t){let r=n.states[t.entity_id],i=L(t.entity_id)??Ft(t.entity_id,r);if(!i||!r)return null;let o=t.outside?null:up(e,t.x,t.z),s=o?.area_id?n.areas?.[o.area_id]?.name:void 0,a={id:t.entity_id,floorId:e.id,roomId:o?.id??null,x:t.x,z:t.z,y:t.y??It(i,Ee(e,t.x,t.z),t.mount??null)+(i==="light"&&(t.mount??"ceiling")==="ceiling"?0:cr(e,t.x,t.z)),lamp:i==="light"?t.mount??"ceiling":null,ceiling:Ee(e,t.x,t.z),rotation:t.rotation??0,icon:t.icon?Ne(t.icon):Lt(i),name:t.name||B(n,t.entity_id,s),ownName:t.name||void 0,showName:!!t.show_name,text:ce(n,r),active:se(r),unavailable:V(r),glow:i==="light"?co(Ce(r),t.glow_scale):null,effect:i==="light"?Fr(t,r):void 0,show:t.marker??void 0,fixed:!!t.locked};return a.wedge=js({hass:n,entityId:t.entity_id,state:r},{floorId:e.id,roomId:a.roomId,x:a.x,z:a.z,y:a.y,rotation:a.rotation??0},t.plugin??void 0),uo(n,a,r,!!t.icon,t.plugin??void 0)}function uo(n,e,t,r,i){let o=Us({hass:n,entityId:e.id,state:t},i);if(!o)return e;let s=o.icon&&!r?o.icon.trimStart().startsWith("<svg")?o.icon:Ne(o.icon):e.icon;return{...e,icon:s,text:o.text??e.text,active:o.active??e.active}}function tl(n,e){return e.floors.flatMap(t=>t.placements.map(r=>dp(n,t,r)).filter(r=>r!==null))}var nl=n=>n.floors.flatMap(e=>e.placements.map(t=>t.entity_id));function me(n,e){n.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function rl(n,e){return n.callService(e.split(".")[0],"toggle",{entity_id:e})}function sl(n,e,t=!1){if(t)return!1;if(!Array.isArray(n.screens)||!n.screens.length)return!0;let r=(e??"").trim().toLocaleLowerCase();return!!r&&n.screens.some(i=>i.trim().toLocaleLowerCase()===r)}var Ot=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=Ot;function al(n){let e=`${n.time}|${n.message}`;return Ot.has(e)?!1:(Ot.add(e),Ot.size>50&&Ot.delete(Ot.values().next().value),!0)}var ll=n=>Math.min(3e4,Math.max(6e3,n.split(/\s+/).length*600+2e3));function hp(){try{let n=globalThis.AudioContext??globalThis.webkitAudioContext;if(!n)return Promise.resolve();let e=new n,t=(r,i)=>{let o=e.createOscillator(),s=e.createGain();o.type="sine",o.frequency.value=r,s.gain.setValueAtTime(1e-4,e.currentTime+i),s.gain.exponentialRampToValueAtTime(.25,e.currentTime+i+.03),s.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+i+.9),o.connect(s).connect(e.destination),o.start(e.currentTime+i),o.stop(e.currentTime+i+1)};return t(880,0),t(660,.35),new Promise(r=>setTimeout(()=>{e.close().catch(()=>{}),r()},1400))}catch{return Promise.resolve()}}function pp(n,e,t){let r=globalThis.speechSynthesis,i=globalThis.SpeechSynthesisUtterance;if(!r||!i)return;let o=new i(e);o.lang=n.language||"en",typeof t=="number"&&(o.volume=Math.max(0,Math.min(1,t))),r.cancel(),r.speak(o)}async function cl(n,e){await hp();let t=typeof e.volume=="number"?Math.max(0,Math.min(1,e.volume)):null;if(e.audio)try{let r=e.audio.startsWith("/")&&n.hassUrl?n.hassUrl(e.audio):e.audio,i=new Audio(r);t!==null&&(i.volume=t),await i.play();return}catch{}pp(n,e.message,t)}function ul(n,e){return n.connection.subscribeMessage(e,{type:"nextfloor/announcements/subscribe"}).then(t=>()=>{t().catch(()=>{})},()=>()=>{})}var il=/^(media_player|assist_satellite)\./;function mp(n,e){return e?Object.values(n.entities??{}).filter(t=>!t.hidden&&(t.area_id??(t.device_id?n.devices?.[t.device_id]?.area_id:null))===e).map(t=>t.entity_id):[]}function ol(n,e){let t=n.states[e];return!t||t.state==="unavailable"?!1:e.startsWith("notify.")?n.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):t.state==="off"||t.state==="unknown"?!1:t.attributes.device_class!=="tv"}function fp(n,e,t){if(t.announce_speaker==="none")return null;if(t.announce_speaker)return t.announce_speaker;if(e&&t.points.length>=3){let o=[...e.placements.filter(s=>il.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&il.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>O([s.x,s.z],t.points)&&ol(n,s.id));if(o)return o.id}let r=mp(n,t.area_id);for(let i of["assist_satellite.","notify.","media_player."]){let o=r.filter(s=>s.startsWith(i)&&ol(n,s)).sort()[0];if(o)return o}return null}var dl=(n,e,t)=>fp(n,e,t)!==null,hl=n=>!!n?.services?.nextfloor?.announce;var X=(n,e)=>[n[0]-e[0],n[1]-e[1]],We=(n,e)=>[n[0]+e[0],n[1]+e[1]],ze=(n,e)=>[n[0]*e,n[1]*e],Z=(n,e)=>n[0]*e[0]+n[1]*e[1],Se=(n,e)=>n[0]*e[1]-n[1]*e[0],Re=n=>Math.hypot(n[0],n[1]),ke=n=>{let e=Re(n)||1;return[n[0]/e,n[1]/e]},ho=n=>[-n[1],n[0]],po=n=>[n[1],-n[0]];var gp=.05,_p=.2,bp=.6;var pl=.05;function wp(n){let e=[];return n.forEach((t,r)=>{let i=t.points;if(i.length<3)return;let o=Ke(i)>=0;i.forEach((s,a)=>{let l=i[(a+1)%i.length],c=Re(X(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],d=o?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let m=[-u[1],u[0]],[p,h]=[Z(s,u),Z(l,u)],w=i.map(_=>Z(_,m));e.push({room:r,index:a,dir:u,normal:m,offset:Z(s,m),outside:Z(d,m)>0?1:-1,from:Math.min(p,h),to:Math.max(p,h),reach:[Math.min(...w),Math.max(...w)]})})}),e}function ml(n,e){return n.outside===1?n.reach[0]<e-pl:n.reach[1]>e+pl}function vp(n,e,t,r,i=gp){if(n.room===e.room||Math.abs(Se(n.dir,e.dir))>i||n.outside===e.outside)return null;let o=(e.offset-n.offset)*n.outside;return o>t||o<-r||Math.abs(o)<1e-4||o<0&&(!ml(n,e.offset)||!ml(e,n.offset))||Math.min(n.to,e.to)-Math.max(n.from,e.from)<_p?null:o}function fl(n,e=bp,t=.01){let r=wp(n),i=[];for(let o=0;o<r.length;o++)for(let s=o+1;s<r.length;s++){let[a,l]=[r[o],r[s]],c=vp(a,l,e,0,.02);c===null||c<t||i.push({a:{room:a.room,edge:a.index},b:{room:l.room,edge:l.index},dir:a.dir,normal:a.normal,offsetA:a.offset,offsetB:l.offset,gap:c,from:Math.max(a.from,l.from),to:Math.min(a.to,l.to)})}return i.sort((o,s)=>o.gap-s.gap)}function gl(n){let e=n.heightEnd!==void 0;return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft,height:e?n.heightEnd:n.height,heightEnd:e?n.height:void 0,...n.bottom?{bottom:[n.bottom[1],n.bottom[0]]}:{}}}function yp(n,e){let t=n.map(r=>({...r}));for(let r of e){let i=t.find(o=>o.room_id===r.room_id&&o.edge===r.edge&&(Math.abs(o.t1-r.t0)<1e-6||Math.abs(r.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,r.t0),i.t1=Math.max(i.t1,r.t1)):t.push({...r})}return t}function kp(n,e,t){if(n.a===e.b)return!1;let r=ke(X(t[n.b],t[n.a])),i=ke(X(t[e.b],t[e.a]));return Math.abs(Se(r,i))>1e-6||Z(r,i)<=0||n.free||e.free||n.heightEnd!==void 0||e.heightEnd!==void 0?!1:n.height===e.height&&n.exterior===e.exterior&&!!n.between==!!e.between&&n.roomLeft===e.roomLeft&&n.roomRight===e.roomRight&&Math.abs(n.left-e.left)<=1e-9&&Math.abs(n.right-e.right)<=1e-9}function _l(n,e,t=new Set){let r=n.slice();for(;;){let i=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])i.set(l,[...i.get(l)??[],a])});let o=null;for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:gl(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:gl(r[a[1]]);if(!kp(l,c,e))continue;let u={...l,b:c.b,sources:yp(l.sources,c.sources)};o=[...r.filter((d,m)=>m!==a[0]&&m!==a[1]),u];break}if(!o)return r;r=o}}function bl(n,e){let t=new Map;n.forEach((i,o)=>{let s=ke(X(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:ze(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let r=new Map;for(let[i,o]of t){let s=e[i];o.sort((l,c)=>l.angle-c.angle);for(let l of o)r.set(l.key,{left:We(s,ze(ho(l.d),l.left)),right:We(s,ze(po(l.d),l.right))});if(o.length<2)continue;let a=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;o.forEach((l,c)=>{let u=o[(c+1)%o.length],d=We(s,ze(ho(l.d),l.left)),m=We(s,ze(po(u.d),u.right)),p=Se(l.d,u.d);if(Math.abs(p)<1e-4)return;let h=We(d,ze(l.d,Se(X(m,d),u.d)/p));Re(X(h,s))>a||(r.get(l.key).left=h,r.get(u.key).right=h)})}return r}function wl(n,e){let t=n.filter((r,i)=>Re(X(r,n[(i+1)%n.length]))>e);for(;;){if(t.length<=3)return t;let r=t.findIndex((i,o)=>{let s=t[(o+t.length-1)%t.length],a=t[(o+1)%t.length],[l,c]=[X(i,s),X(a,i)];return Math.abs(Se(ke(l),ke(c)))<1e-7&&Z(l,c)>0});if(r===-1)return t;t=t.filter((i,o)=>o!==r)}}function xp(n){let e=[];return{points:e,idOf(t){let r=e.findIndex(i=>Math.abs(i[0]-t[0])<=n&&Math.abs(i[1]-t[1])<=n);return r>=0?r:(e.push([t[0],t[1]]),e.length-1)}}}function Sp(n,e){let t=[];for(let r of n){let i=r.points;if(i.length<3||Math.abs(Ke(i))<1e-6)continue;let o=Ke(i)>0,s=i.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(o?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return t}function vl(n,e,t){let r=[];for(let i of n){let[o,s]=[e[i.u],e[i.v]],a=X(s,o),l=Re(a),c=ze(a,1/l),u=e.map((m,p)=>({id:p,rel:X(m,o)})).filter(({id:m,rel:p})=>m!==i.u&&m!==i.v&&Z(p,c)>t&&Z(p,c)<l-t&&Math.abs(Se(c,p))<=t).map(({id:m,rel:p})=>({t:Z(p,c),id:m})).sort((m,p)=>m.t-p.t),d=[{t:0,id:i.u},...u,{t:l,id:i.v}];for(let m=0;m+1<d.length;m++){let[p,h]=[d[m],d[m+1]];r.push({u:p.id,v:h.id,room:i.room,edge:i.edge,t0:i.forward?p.t:l-h.t,t1:i.forward?h.t:l-p.t,forward:i.forward})}}return r}var Hr=n=>({room_id:n.room,edge:n.edge,t0:n.t0,t1:n.t1});function $p(n,e){let t=new Map(n.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,u)=>c-u))}let i=a=>{let l=t.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},o=a=>{let l=t.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[d,m]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(m[0]-d[0],m[1]-d[1])}},s=a=>{let l=o(a);if(!l||l.length<1e-9){let u=i(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let d of a){let[m,p]=s(d),[h,w]=d===a[0]?[m,p]:[p,m];h!==null&&(l=Math.min(l,h)),w!==null&&(c=Math.min(c,w))}let u=a.map(d=>t.get(d.room)?.ceiling);if(u.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...u);l===1/0&&(l=d),c===1/0&&(c=d)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=t.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>i(l)===0)}}function Mp(n){let e=typeof n.bottom=="number"&&n.bottom>0?n.bottom:0,t=typeof n.bottom_end=="number"&&n.bottom_end>=0?n.bottom_end:e;return e>0||t>0?{bottom:[e,t]}:{}}function fo(n){let e=t=>Math.round(t*1e6)/1e6;return n.a===void 0||n.b===void 0?n.a!==void 0?{height:e(n.a)}:n.b!==void 0?{height:e(n.b)}:{}:Math.abs(n.a-n.b)<1e-6?{height:e(n.a)}:{height:e(n.a),heightEnd:e(n.b)}}function Ap(n,e,t,r,i){let o=new Map;for(let l of n){if(i.has(l))continue;let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;o.set(c,[...o.get(c)??[],l])}let s=[],a=[];for(let l of o.values()){let c=l[0],u=l.find(m=>m!==c&&m.u===c.v&&m.v===c.u&&m.room!==c.room);for(let m of l)m!==c&&m!==u&&m.room!==c.room&&r.push(`overlap:${c.room}:${m.room}`);let d=u?[c,u]:[c];if(e.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let m=e.thicknessOf(d)??t.interior;s.push({a:c.u,b:c.v,left:m/2,right:m/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(Hr),...fo(e.heightsOf(d))})}else s.push({a:c.u,b:c.v,left:0,right:e.thicknessOf(d)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Hr(c)],...fo(e.heightsOf(d))})}return{drafts:s,open:a}}function Ep(n,e){let t=o=>ke(X(e[o.b],e[o.a])),r=n.filter(o=>!o.exterior&&!o.free),i=new Map;for(let o of r){if(i.has(o))continue;let s=[o];i.set(o,s);for(let a=0;a<s.length;a++){let l=s[a];for(let c of r){if(i.has(c))continue;(c.a===l.a||c.a===l.b||c.b===l.a||c.b===l.b)&&Math.abs(Se(t(l),t(c)))<1e-6&&(s.push(c),i.set(c,s))}}}for(let o of new Set(i.values())){let s=t(o[0]),a=new Map;for(let u of o)for(let d of[u.a,u.b])a.set(d,(a.get(d)??0)+1);let l=new Set;for(let[u,d]of a)if(d===1)for(let m of n){if(!m.exterior||m.free||m.a!==u&&m.b!==u)continue;let p=t(m);Math.abs(Se(s,p))>1e-6||l.add(Z(s,p)>0?"left":"right")}if(l.size!==1)continue;let c=[...l][0];for(let u of o){let d=u.left+u.right,m=Z(t(u),s)>0,p=c==="left"===m;[u.left,u.right]=p?[0,d]:[d,0]}}}var zp=(n,e)=>{let t=o=>Math.round(o*100),[r,i]=n[0]<e[0]||n[0]===e[0]&&n[1]<=e[1]?[n,e]:[e,n];return`w_${t(r[0])}_${t(r[1])}_${t(i[0])}_${t(i[1])}`},mo=(n,e,t,r)=>{let[i,o]=[n.points[e],n.points[(e+1)%n.points.length]],s=ke(X(o,i)),a=(r-Z(i,t))/Z(s,t);return[i[0]+s[0]*a,i[1]+s[1]*a]};function go(n,e,t,r,i,o){return n.filter(s=>{if(s.room!==t.id||s.edge!==r)return!1;let[a,l]=[Z(e[s.u],i.dir),Z(e[s.v],i.dir)];return Math.min(a,l)>=i.from-o&&Math.max(a,l)<=i.to+o})}function Rp(n,e,t,r,i){for(let s of i)for(let a of[s.from,s.to])for(let l of[s.a,s.b])e.idOf(mo(r[l.room],l.edge,s.dir,a));let o=vl(n,e.points,t);for(let s=0;s<6&&i.length;s++){let a=e.points.length;for(let l of i){let[c,u]=[r[l.a.room],r[l.b.room]],d=(h,w)=>go(o,e.points,h,w,l,t).flatMap(_=>[Z(e.points[_.u],l.dir),Z(e.points[_.v],l.dir)]),[m,p]=[d(c,l.a.edge),d(u,l.b.edge)];for(let h of m)h>l.from+t&&h<l.to-t&&e.idOf(mo(u,l.b.edge,l.dir,h));for(let h of p)h>l.from+t&&h<l.to-t&&e.idOf(mo(c,l.a.edge,l.dir,h))}if(e.points.length===a)break;o=vl(n,e.points,t)}return o}function yl(n,e,t){let[r,i]=[n.points[e],n.points[(e+1)%n.points.length]];return Math.abs(Se(ke(X(i,r)),X(t,r)))}function Tp(n,e,t,r,i,o,s){let a=[],l=[];for(let c of n){let[u,d]=[e[c.a.room],e[c.b.room]],m=go(t,r,u,c.a.edge,c,o).filter(h=>!s.has(h)),p=go(t,r,d,c.b.edge,c,o).filter(h=>!s.has(h));for(let h of m){let w=[Z(r[h.u],c.dir),Z(r[h.v],c.dir)].sort(($,x)=>$-x),_=p.find($=>{let x=[Z(r[$.u],c.dir),Z(r[$.v],c.dir)].sort((y,b)=>y-b);return!s.has($)&&Math.abs(x[0]-w[0])<=o&&Math.abs(x[1]-w[1])<=o});if(!_)continue;if(s.add(h),s.add(_),i.hasNoWall([h,_])){l.push([h.room,_.room]);continue}let v=(yl(d,c.b.edge,r[h.u])+yl(d,c.b.edge,r[h.v]))/2;a.push({a:h.u,b:h.v,left:0,right:v,exterior:!1,between:!0,roomLeft:h.room,roomRight:_.room,sources:[Hr(h),Hr(_)],...fo(i.heightsOf([h,_]))})}}return{drafts:a,open:l}}function xn(n){return{exterior:n.wall_exterior,interior:n.wall_interior,...n.rooms_as_drawn?{asDrawn:!0}:{}}}function Bt(n,e,t=[]){let r=e.eps??.005,i=[],o=xp(r),s=Sp(n,o),a=t.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),l=a.map(b=>[o.idOf(b.a),o.idOf(b.b)]),c=new Set;for(let b of n){let z=b.points;z.length<3||(b.wall_splits??[]).forEach((F,P)=>{if(!F||P>=z.length)return;let E=z[P],W=X(z[(P+1)%z.length],E),S=Re(W);for(let D of F)D>r&&D<S-r&&c.add(o.idOf(We(E,ze(W,D/S))))})}let u=e.asDrawn?fl(n):[],d=Rp(s,o,r,n,u),m=$p(n,d),p=new Set,h=u.length?Tp(u,n,d,o.points,m,r,p):{drafts:[],open:[]},{drafts:w,open:_}=Ap(d,m,e,i,p);Ep(w,o.points),w.push(...h.drafts),_.push(...h.open);let v=w;a.forEach((b,z)=>{let[F,P]=l[z];if(F===P)return;let E=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],W=n.find(D=>D.points.length>=3&&O(E,D.points))?.id??null,S=(b.thickness??e.interior)/2;v.push({free:b.id,a:F,b:P,left:S,right:S,exterior:!1,roomLeft:W,roomRight:W,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0,...typeof b.height=="number"&&b.height>0&&typeof b.height_end=="number"&&b.height_end>0&&Math.abs(b.height_end-b.height)>1e-6?{heightEnd:b.height_end}:{},...Mp(b)})});let $=_l(v,o.points,c),x=bl($,o.points);return{walls:$.map((b,z)=>{let[F,P]=[o.points[b.a],o.points[b.b]],[E,W]=[x.get(`${z}:a`),x.get(`${z}:b`)],S=wl([E.right,W.left,P,W.right,E.left,F],1e-6);return{id:zp(F,P),a:[F[0],F[1]],b:[P[0],P[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:S,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{},...b.heightEnd!==void 0?{heightEnd:b.heightEnd}:{},...b.bottom?{bottom:b.bottom}:{},...b.between?{between:!0}:{}}}),warnings:[...new Set(i)],open:_}}function kl(n,e,t){let r=n.points[e];return We(r,ze(ke(X(n.points[(e+1)%n.points.length],r)),t))}function xl(n,e,t){if(n.wall){let i=t.find(a=>a.id===n.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ke(X(i.b,i.a));return{room:{id:n.room_id,name:"",area_id:null,points:[i.a,i.b,We(i.a,[-o[1],o[0]])]},edge:0}}let r=e.find(i=>i.id===n.room_id);return r&&n.edge<r.points.length?{room:r,edge:n.edge}:null}var Sl=(n,e)=>Z(X(e,n.a),ke(X(n.b,n.a)));function $l(n,e,t){if(!e.wall)return Dp(n,t.room,t.edge,e.offset);let r=n.find(i=>i.free===e.wall);return r?{wall:r,s:Sl(r,kl(t.room,0,e.offset))}:null}function Dp(n,e,t,r){for(let i of n)if(i.sources.some(s=>s.room_id===e.id&&s.edge===t&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:i,s:Sl(i,kl(e,t,r))};return null}var Sn=n=>n&&n!=="none"?n:null,$n=(n,e)=>{e&&!n.includes(e)&&n.push(e)},Ml=n=>new Map(n.floors.flatMap(e=>e.furniture.filter(t=>t.type==="meter").map(t=>[t.id,t])));function Al(n,e){if(!n.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let t=Ml(n),r=new Set([e.id]);for(let i=t.get(e.parent_meter);i;i=t.get(i.parent_meter??"")){if(r.has(i.id))return null;r.add(i.id)}return t.has(e.parent_meter)?e.parent_meter:null}function Mn(n){return new Set([...Ml(n).values()].filter(e=>Al(n,e)).map(e=>e.id))}function Ir(n,e){return!n.energy.advanced||!e.parent_meter?null:Mn(n).has(e.parent_meter)?e.parent_meter:null}function El(n,e,t){let r=n.energy.show_unmetered?e.subMeters?.find(i=>i.id===t):void 0;return!r||r.use===null?null:{use:r.use,unmetered:r.unmetered!==null&&r.unmetered<r.use?r.unmetered:null}}function Ze(n,e=t=>Sn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of n.floors.flatMap(i=>i.furniture)){let i=e(r),o=r.type==="meter"?Al(n,r):null;if(o)(t.subMeters??=[]).push({id:r.id,parent:o,power:i,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")t.grid??=i,t.gridExport??=Sn(r.export);else if(r.type==="inverter")$n(t.solar,i);else if(r.type==="home_battery"){let s=Sn(r.charge);$n(t.battery,i),$n(t.charge,s),$n(t.soc,Sn(r.soc)),(i||s)&&t.batteries.push({power:i,charge:s})}}for(let r of t.subMeters?n.floors.flatMap(i=>i.furniture):[]){let i=r.type==="inverter"||r.type==="home_battery"?t.subMeters?.find(a=>a.id===Ir(n,r)):void 0,o=i?e(r):null;i&&r.type==="inverter"&&$n(i.solar,o);let s=Sn(r.charge);i&&r.type==="home_battery"&&(o||s)&&i.batteries.push({power:o,charge:s})}return t}function re(n,e=!1){let t=n?Number(n.state):NaN;if(!Number.isFinite(t))return null;let r={kW:1e3,MW:1e6}[String(n.attributes.unit_of_measurement??"W")]??1;return e?-t*r:t*r}var Fp=(n,e)=>e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power";function Ye(n,e){if(Fp(n,e))return e;let t=n.entities?.[e]?.device_id;if(!t)return null;let r=Yi(n,t),i=r?ot(n,e):null,o=xr(n,t).filter(s=>s!==e);return(r?o.find(s=>i!==null&&ot(n,s)===i):o[0])??null}function An(n,e){let{grid:t,solar:r,battery:i}=e.energy,o=new Set([t,r,i].filter(a=>!!a)),s=[];for(let a of e.floors)for(let l of a.placements){let c=Ye(n,l.entity_id);!c||o.has(c)||(o.add(c),s.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,re(n.states[c])??0)}))}return s}var zl=n=>{let e=n.filter(t=>t!==null);return e.length?e.reduce((t,r)=>t+r,0):null};function Pp(n,e,t){let r=e.grid??t.grid,i=r?re(n.states[r],e.grid_invert):null;if(!e.grid&&t.gridExport){let o=Math.max(0,re(n.states[t.gridExport])??0);return Math.max(0,i??0)-o}return i}function Hp(n,e,t){return e.solar?re(n.states[e.solar],!!e.solar_invert):t.solar.length?zl(t.solar.map(r=>re(n.states[r],!!e.solar_invert))):null}function Cr(n,e,t){return e.charge?(e.power?Math.max(0,re(n.states[e.power])??0):0)-Math.max(0,re(n.states[e.charge])??0):e.power?re(n.states[e.power],t):null}function Ip(n,e,t){return e.battery?re(n.states[e.battery],e.battery_invert):zl(t.batteries.map(r=>Cr(n,r,e.battery_invert)))}function En(n,e,t,r=Ze(e)){let i=e.energy,o=Pp(n,i,r),s=Hp(n,i,r),a=Ip(n,i,r),l=(i.battery_soc?[i.battery_soc]:r.soc).map(h=>Number(n.states[h]?.state)).filter(Number.isFinite),c=l.length?l.reduce((h,w)=>h+w,0)/l.length:null,u=i.tariff?n.states[i.tariff]:void 0,d=Number(u?.state),m=i.consumption?re(n.states[i.consumption]):null;m===null&&(o!==null||s!==null||a!==null)&&(m=(o??0)+Math.max(0,s??0)+(a??0)),m===null&&t.length>0&&(m=t.reduce((h,w)=>h+w.power,0));let p={grid:o,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:m===null?null:Math.max(0,m)};return r.subMeters?{...p,...Cp(n,r,p.consumption,i.battery_invert,t,!!i.solar_invert)}:p}function Cp(n,e,t,r,i,o=!1){let s=e.subMeters??[],a=new Map;for(let p of s)for(let h of p.floors)a.has(h)||a.set(h,p.id);let l=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...s.flatMap(p=>[p.power,...p.solar,...p.batteries.flatMap(h=>[h.power,h.charge])])]),c=p=>i.filter(h=>a.get(h.floorId)===p&&!l.has(h.powerEntity)).reduce((h,w)=>h+w.power,0),u=new Map(s.map(p=>[p.id,p.power?re(n.states[p.power],p.invert):null])),d=s.map(p=>{let h=u.get(p.id)??null,w=p.solar.reduce((x,y)=>x+Math.max(0,re(n.states[y],o)??0),0),_=p.batteries.reduce((x,y)=>x+(Cr(n,y,r)??0),0),v=s.filter(x=>x.parent===p.id).reduce((x,y)=>x+(u.get(y.id)??0),0),$=h===null?null:Math.max(0,h+w+_-v);return{id:p.id,parent:p.parent,power:h,solar:w,battery:_,use:$,unmetered:$===null?null:Math.max(0,$-c(p.id))}}),m=d.reduce((p,h)=>p+(h.use??0),0);return{subMeters:d,rest:t===null?null:Math.max(0,t-m)}}var bo=Math.PI/180,Dl=3,Fl=.1,_o=1/6,Pl=(n,e)=>[Math.sin((e+n)*bo),-Math.cos((e+n)*bo)],Np=["N","NE","E","SE","S","SW","W","NW"];function Wp(n,e,t){return Hl(n,e,t).map(r=>r.normal)}function Hl(n,e,t){let r=[];for(let i of n.openings){if(i.room_id!==e.id||i.type==="garage")continue;let o=xl(i,n.rooms,n.walls??[]),s=o?$l(t,i,o):null;if(!s||!s.wall.exterior)continue;let{wall:a}=s,l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(l<1e-6)continue;let c=[-(a.b[1]-a.a[1])/l,(a.b[0]-a.a[0])/l],u=a.roomLeft===e.id?c:[-c[0],-c[1]];r.push({opening:i,normal:[-u[0],-u[1]]})}return r}function Lp(n,e){let t=((Math.atan2(n[0],-n[1])/bo-e)%360+360)%360;return Np[Math.round(t/45)%8]}var Rl=new WeakMap;function Il(n,e){let t=Rl.get(e);return t||(t=Bt(e.rooms,xn(n.settings),e.walls??[]).walls,Rl.set(e,t)),t}var Tl=new WeakMap;function Vt(n,e,t,r,i=new Date){let o=`${t.id}|${i.toISOString().slice(0,10)}|${n.settings.north??0}|${r.latitude},${r.longitude},${r.zone??""}`,s=Tl.get(e);s||Tl.set(e,s=new Map);let a=s.get(o);if(a)return a;let l=Op(n,e,t,r,i);return s.set(o,l),l}function Op(n,e,t,r,i){let o=n.settings.north??0,s=Wp(e,t,Il(n,e)),a=[...new Set(s.map(c=>Lp(c,o)))];if(!s.length)return{hours:0,facing:a};let l=0;for(let c=_o/2;c<24;c+=_o){let u=gt(Rt(c,r.zone,i),r.latitude,r.longitude);if(u.elevation<Dl)continue;let d=Pl(u.azimuth,o);s.some(m=>m[0]*d[0]+m[1]*d[1]>Fl)&&l++}return{hours:Math.round(l*_o*10)/10,facing:a}}function Cl(n,e,t,r,i=new Date().getFullYear()){return Array.from({length:12},(o,s)=>Vt(n,e,t,r,new Date(Date.UTC(i,s,15,12))).hours)}function Nl(n,e,t,r,i=new Date){let o=gt(i,r.latitude,r.longitude);if(o.elevation<Dl)return[];let s=Pl(o.azimuth,n.settings.north??0);return Hl(e,t,Il(n,e)).filter(a=>a.normal[0]*s[0]+a.normal[1]*s[1]>Fl).map(a=>a.opening)}var Wl=n=>6.112*Math.exp(17.62*n/(243.12+n));function Gt(n,e,t=4){if(n===null||e===null)return null;let r=Math.min(100,e*Wl(n)/Wl(n-t));return Math.round(Math.min(100,Math.max(0,(r-65)/20*100)))}function Nr(n,e,t){return t!==null&&t>=70?"mould":n!==null&&n>=1e3?"co2":e!==null&&e>=65?"humidity":null}function vt(n=new Date,e=50){let t=n.getMonth(),r=t>=4&&t<=8;return e<0?!r:r}function Wr(n,e,t,r=!1){let i=[];if(n!==null){let[s,a]=r?[22,26]:[20,23],l=n<s?s-n:n>a?n-a:0;i.push(Math.max(0,100-l*15))}if(e!==null){let s=e<40?40-e:e>60?e-60:0;i.push(Math.max(0,100-s*4))}if(t!==null&&i.push(Math.max(0,Math.min(100,100-(t-800)/600*100))),!i.length)return null;let o=i.reduce((s,a)=>s+a,0)/i.length;return Math.round(Math.min(o,Math.min(...i)+30))}var Bp={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[16,[.2,.45,1]],[20,[.15,.85,.75]],[22.5,[.95,.8,.3]],[26,[1,.28,.18]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[.95,.6,.2]],[45,[.3,.88,.5]],[60,[.2,.78,1]],[75,[.32,.4,.98]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.88,.5]],[800,[.98,.84,.3]],[1200,[1,.5,.2]],[1600,[.98,.25,.25]]]},mould:{deviceClass:"",unit:"%",stops:[[0,[.3,.88,.5]],[40,[.98,.84,.3]],[70,[1,.5,.2]],[100,[.75,.2,.55]]]},comfort:{deviceClass:"",unit:"",stops:[[0,[.98,.25,.25]],[40,[1,.5,.2]],[65,[.98,.84,.3]],[85,[.3,.88,.5]],[100,[.2,.8,.7]]]},power:{deviceClass:"power",unit:"W",stops:[[0,[.25,.4,.6]],[100,[.3,.88,.5]],[500,[.98,.84,.3]],[1500,[1,.5,.2]],[3e3,[.98,.25,.25]]]},sun:{deviceClass:"",unit:"h",stops:[[0,[.22,.3,.55]],[2,[.35,.6,.85]],[4,[.98,.84,.3]],[7,[1,.62,.2]],[10,[1,.42,.25]]]}},Vp={deviceClass:"temperature",unit:"\xB0C",stops:[[19,[.2,.45,1]],[22.5,[.15,.85,.75]],[25.5,[.95,.8,.3]],[29,[1,.28,.18]]]};function Lr(n,e=!1){return n==="temperature"&&e?Vp:Bp[n]}var Gp=(n,e,t)=>[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t];function Ll(n,e,t=!1){let{stops:r}=Lr(n,t),i=r.findIndex(([c])=>e<=c);if(i===-1)return r[r.length-1][1];if(i===0)return r[0][1];let[o,s]=r[i-1],[a,l]=r[i];return Gp(s,l,(e-o)/(a-o))}function wo(n,e,t,r){let i=null;for(let o of vo(n,e,t,r)){let s=re(n.states[o]);s!==null&&(i=(i??0)+Math.max(0,s))}return i}function vo(n,e,t,r){let{grid:i,solar:o,battery:s}=e.energy,a=new Set([i,o,s].filter(Boolean)),l=new Set,c=(u,d)=>r.points.length>=3&&O([u,d],r.points);for(let u of t.placements){let d=c(u.x,u.z)?Ye(n,u.entity_id):null;d&&l.add(d)}for(let u of t.furniture){if(!c(u.x,u.z))continue;let d=u.power&&u.power!=="none"?u.power:u.entity&&u.entity!=="none"?Ye(n,u.entity):null;d&&l.add(d);for(let m of u.gang_entities??[]){let p=m&&m!=="none"?Ye(n,m):null;p&&l.add(p)}}return[...l].filter(u=>!a.has(u))}function Ol(n,e,t){let r=new Map;for(let i of e.floors)for(let o of i.rooms){if(t==="power"){let a=wo(n,e,i,o);a!==null&&r.set(o.id,a);continue}if(t==="comfort"){let a=Wr(ae(n,i,o,"temperature"),ae(n,i,o,"humidity"),ae(n,i,o,"co2"),vt(new Date,n.config?.latitude));a!==null&&r.set(o.id,a);continue}if(t==="sun"){let{latitude:a,longitude:l,time_zone:c}=n.config??{};if(a===void 0||l===void 0||i.layer)continue;r.set(o.id,Vt(e,i,o,{latitude:a,longitude:l,zone:c}).hours);continue}let s=t==="mould"?Gt(ae(n,i,o,"temperature"),ae(n,i,o,"humidity")):ae(n,i,o,t);s!==null&&r.set(o.id,s)}return r}function Bl(n,e=!1){let{stops:t}=Lr(n,e),r=t[0][0],i=t[t.length-1][0]-r;return`linear-gradient(90deg, ${t.map(([s,a])=>`rgb(${a.map(l=>Math.round(l*255)).join(",")}) ${Math.round((s-r)/i*100)}%`).join(", ")})`}function zn(n,e=0){let t=new Date(n);return t.setHours(0,0,0,0),t.setDate(t.getDate()-e),t.getTime()}function Kp(n,e,t){let r=Array.from({length:7},(u,d)=>zn(t,6-d)),i=u=>Math.min(24,Math.max(0,(Math.min(t,u+864e5)-u)/36e5)),o=(u,d)=>{if(!u)return null;let m=(n[u]??[]).find(p=>Math.abs(new Date(p.start).getTime()-d)<3*36e5);return typeof m?.mean=="number"?m.mean:null},s=(u,d,m=1)=>{let p=u.map(h=>o(h,d)).filter(h=>h!==null);return p.length?p.reduce((h,w)=>h+w,0)*m:null},a=(u,d)=>u===null?null:Math.round(u*i(d)/1e3*10)/10,l=r.map(u=>a(s(e.solar,u),u)),c=r.map(u=>{if(e.consumption)return a(o(e.consumption,u),u);let d=[s(e.solar,u),s(e.grid?[e.grid]:[],u,e.gridInvert?-1:1),s(e.battery,u,e.batteryInvert?-1:1)];return d.every(m=>m===null)?null:a(Math.max(0,d.reduce((m,p)=>m+(p??0),0)),u)});return{days:r,solar:l,use:c}}async function Vl(n,e,t=Date.now()){let r=[...new Set([...e.solar,...e.battery,e.grid,e.consumption].filter(s=>!!s))];if(!r.length)return null;let i=await n.callWS({type:"recorder/statistics_during_period",start_time:new Date(zn(t,6)).toISOString(),end_time:new Date(t).toISOString(),statistic_ids:r,period:"day",types:["mean"],units:{power:"W"}}),o=Kp(i,e,t);return o.solar.some(s=>s!==null)||o.use.some(s=>s!==null)?o:null}var Up=864e5,Gl=36e5;function qp(n){let e=new Date(zn(n));return e.setDate(1),e.getTime()}function jp(n,e,t){let r=zn(t),[i,o,s]=[0,0,!1];for(let l of e)for(let c of n[l]??[]){if(typeof c.mean!="number")continue;let u=new Date(c.start).getTime(),d=Math.min(24,Math.max(0,(Math.min(t,u+Up)-u)/Gl)),m=Math.max(0,c.mean)*d/1e3;o+=m,Math.abs(u-r)<3*Gl&&(i+=m),s=!0}let a=l=>Math.round(l*100)/100;return s?{today:a(i),month:a(o)}:null}async function Kl(n,e,t=Date.now()){if(!e.length)return null;let r=await n.callWS({type:"recorder/statistics_during_period",start_time:new Date(qp(t)).toISOString(),end_time:new Date(t).toISOString(),statistic_ids:[...e],period:"day",types:["mean"],units:{power:"W"}});return jp(r,e,t)}function Ul(n,e){if(!e||!Number.isFinite(e.value))return null;let t=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!t)return null;let r=/^(ct|cent|cents|c)$/i.test(t[1]),i=r||/^eur$/i.test(t[1])?"\u20AC":t[1];return{value:Math.round(n*e.value*(r?1:100))/100,currency:i}}var jl=20,ql=new WeakMap;function Zp(n){let e=n.entities??{},t=ql.get(e);if(!t){t=new Map;for(let[r,i]of Object.entries(e))i.device_id&&r.startsWith("sensor.")&&n.states[r]?.attributes.device_class==="battery"&&!t.has(i.device_id)&&t.set(i.device_id,r);ql.set(e,t)}return t}function Yp(n,e){let t=n.entities?.[e]?.device_id,r=t?Zp(n).get(t):void 0;if(r){let s=Number(n.states[r]?.state);if(Number.isFinite(s))return s}let i=n.states[e]?.attributes;if(!i||i.battery_level===void 0&&i.battery===void 0)return null;let o=Number(i.battery_level??i.battery);return Number.isFinite(o)?o:null}function Jp(n){let e=[],t=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);for(let r of n.placements)e.push({entity:r.entity_id,x:r.x,z:r.z,room:null});for(let r of n.furniture)for(let i of[r.entity,r.power])t(i)&&e.push({entity:i,x:r.x,z:r.z,room:null});for(let r of n.openings)for(let i of[r.contact,r.contact2,r.tilt,r.tilt2,r.cover,r.cover2,r.lock])t(i)&&e.push({entity:i,x:NaN,z:NaN,room:r.room_id});return e}var Qp=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&O([e,t],r.points));function Zl(n,e){let t=new Set,r=[];for(let i of e.floors)for(let o of Jp(i)){let s=n.entities?.[o.entity]?.device_id??o.entity;if(t.has(s))continue;let a=Yp(n,o.entity);a!==null&&(t.add(s),r.push({entity:o.entity,level:a,floorId:i.id,roomId:o.room??Qp(i,o.x,o.z)?.id??null}))}return r.sort((i,o)=>i.level-o.level)}var Yl=n=>n.toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),Xp=new Set(["","unknown","unavailable","not home","away"]);function em(n,e,t){let r=Yl(t);if(Xp.has(r))return null;for(let i of e.floors)for(let o of i.rooms){let s=o.area_id?n.areas?.[o.area_id]?.name:void 0;if([o.name,o.area_id,s].map(l=>Yl(l??"")).includes(r))return{floorId:i.id,room:o}}return null}function tm(n,e){if(!e)return null;for(let t of n.floors){let r=t.rooms.find(i=>i.id===e);if(r)return{floorId:t.id,room:r}}return null}function nm(n){let e=n.split(/\s+/).filter(Boolean);return e.length===0?"?":(e.length===1?e[0].slice(0,2):e[0][0]+e[e.length-1][0]).toUpperCase()}function rm(n,e){let[t,r]=it(n.points),i=e*1.15-Math.PI/2+.9;return[t+.75*Math.cos(i),r+.75*Math.sin(i)]}function Jl(n,e){let t=[],r=new Map;for(let{person:i,sensor:o,room:s}of e.presence){let a=n.states[i],l=o?n.states[o]:void 0;if(!a||a.state!=="home"&&a.state!=="on")continue;let c=(l?em(n,e,l.state):null)??tm(e,s);if(!c)continue;let u=r.get(c.room.id)??0;r.set(c.room.id,u+1);let[d,m]=rm(c.room,u),p=String(a.attributes.friendly_name??i),h=a.attributes.entity_picture;t.push({id:i,name:p,initials:nm(p),picture:typeof h=="string"?h:null,floorId:c.floorId,roomId:c.room.id,x:d,z:m})}return t}function im(n,e){let t=new Set;for(let r of e.rooms)for(let i of _t(n,Q(n,r)))L(i)==="light"&&t.add(i);for(let r of e.placements)L(r.entity_id)==="light"&&t.add(r.entity_id);return[...t].filter(r=>n.states[r]?.state==="on").length}function om(n,e,t){let r=o=>!!o&&n.states[o]?.state==="on",i=0;for(let o of e.openings){let s=t.get(o.id);if(s)if(o.type==="garage")(Ue(n,s,"garage").cover??1)<.95&&i++;else if(o.type==="door")(r(s.contact)||r(s.contact2))&&i++;else{let a=Ue(n,s,"window");Math.max(a.open,a.tilt,a.open2,a.tilt2)>.5&&i++}}return i}function Ql(n,e,t,r){return new Map(e.floors.map(i=>[i.id,{rooms:i.rooms.length,lightsOn:im(n,i),open:om(n,i,t),persons:r.filter(o=>o.floorId===i.id).length,power:i.power_entity?re(n.states[i.power_entity]):null,temps:sm(n,i)}]))}function sm(n,e){let t=e.rooms.map(r=>ae(n,e,r,"temperature")).filter(r=>r!==null);return t.length>=2?[Math.min(...t),Math.max(...t)]:null}function Xl(n,e){let t=[e.rooms===1?M(n,"floor_rooms_one"):M(n,"floor_rooms",{n:e.rooms})];if(e.lightsOn>0&&t.push(M(n,"floor_lights",{n:e.lightsOn})),e.open>0&&t.push(M(n,"floor_open",{n:e.open})),e.persons>0&&t.push(M(n,"floor_persons",{n:e.persons})),e.temps&&n){let[r,i]=e.temps.map(o=>U(n,ye(n,o),0));t.push(r===i?`${r} ${de(n)}`:`${r}\u2013${i} ${de(n)}`)}return e.power!=null&&t.push(`\u26A1 ${yt(n,e.power)}`),t.join(" \xB7 ")}function yt(n,e){let t=Math.abs(e);return t>=1e3?`${U(n,e/1e3,t>=1e4?1:2)} kW`:`${Math.round(e)} W`}function yo(n){let e=Math.max(0,Math.floor(n/6e4));return e<60?`${e} min`:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")} h`}function Or(n){if(n.state!=="on")return{entity:n.entity_id,on:!1};let e=n.attributes,t={entity:n.entity_id,on:!0};typeof e.brightness=="number"&&(t.brightness=e.brightness);let r=String(e.color_mode??"");return Array.isArray(e.rgb_color)&&!["color_temp","brightness","onoff"].includes(r)?t.rgb=e.rgb_color.slice(0,3):typeof e.color_temp_kelvin=="number"&&(t.kelvin=e.color_temp_kelvin),t}function Br(n){let e=n.filter(r=>!r.on).map(r=>r.entity);return[...n.filter(r=>r.on).map(r=>({service:"turn_on",data:{entity_id:r.entity,...r.brightness!==void 0?{brightness:r.brightness}:{},...r.rgb?{rgb_color:r.rgb}:r.kelvin?{color_temp_kelvin:r.kelvin}:{}}})),...e.length?[{service:"turn_off",data:{entity_id:e}}]:[]]}function ec(n,e){let t=[...n.lights].filter(r=>r.on).sort((r,i)=>(i.brightness??255)-(r.brightness??255))[0];return e.map((r,i)=>({...n.lights[i]??t??{entity:r,on:!1},entity:r}))}var am=n=>n.slice(0,n.indexOf(".")),lm=new Set(["switch","fan","input_boolean"]);function Rn(n){let e=[],t=new Map,r=[],i=[];for(let l of n){if(!l)continue;let c=am(l.entity_id);c==="light"&&l.state==="on"?e.push(l):lm.has(c)&&l.state==="on"?t.set(c,[...t.get(c)??[],l.entity_id]):c==="media_player"&&l.state==="playing"?r.push(l.entity_id):c==="media_player"&&(l.state==="on"||l.state==="idle")&&i.push(l.entity_id)}let o=[],s=[];e.length&&(o.push({domain:"light",service:"turn_off",data:{entity_id:e.map(l=>l.entity_id)}}),s.push(...Br(e.map(Or)).map(l=>({domain:"light",service:l.service,data:l.data}))));for(let[l,c]of t)o.push({domain:l,service:"turn_off",data:{entity_id:c}}),s.push({domain:l,service:"turn_on",data:{entity_id:c}});r.length&&(o.push({domain:"media_player",service:"media_pause",data:{entity_id:r}}),s.push({domain:"media_player",service:"media_play",data:{entity_id:r}})),i.length&&(o.push({domain:"media_player",service:"turn_off",data:{entity_id:i}}),s.push({domain:"media_player",service:"turn_on",data:{entity_id:i}}));let a=e.length+[...t.values()].reduce((l,c)=>l+c.length,0)+r.length+i.length;return{off:o,undo:s,count:a}}function tc(n){let e=new Set,t=r=>{typeof r=="string"&&/^(light|switch|fan|input_boolean|media_player)\./.test(r)&&e.add(r)};for(let r of n.placements)t(r.entity_id);for(let r of n.furniture){t(r.entity);for(let i of r.extra_lights??[])t(i)}return[...e]}var cm=/^(light|switch|cover|binary_sensor|lock|media_player|vacuum|fan|climate|lawn_mower|input_boolean|person|device_tracker|alarm_control_panel)\./;var nc=n=>[...new Set([...n].filter(e=>cm.test(e)))].slice(0,200);function um(n){let e=new Map;for(let[t,r]of Object.entries(n)){let i={},o=[];for(let s of r)s.a&&(i=s.a),o.push({t:Math.round((s.lu??s.lc??0)*1e3),state:s.s,attributes:i});o.sort((s,a)=>s.t-a.t),e.set(t,o)}return e}async function Tn(n,e,t,r,i=!1){if(e.length===0)return new Map;let o=await n.callWS({type:"history/history_during_period",start_time:new Date(t).toISOString(),end_time:new Date(r).toISOString(),entity_ids:e,include_start_time_state:!0,significant_changes_only:!1,minimal_response:i,no_attributes:i});return um(o)}function dm(n,e){let[t,r]=[0,n.length-1],i=null;for(;t<=r;){let o=t+r>>1;n[o].t<=e?(i=n[o],t=o+1):r=o-1}return i}function Kt(n,e,t){let r={...n.states};for(let[i,o]of e){let s=dm(o,t);if(!s)continue;let a=n.states[i];r[i]={...a??{entity_id:i},entity_id:i,state:s.state,attributes:{...a?.attributes??{},...s.attributes}}}return{...n,states:r}}function rc(n,e,t,r=400){let i=[];for(let s of n.values())for(let a=1;a<s.length;a++)s[a].state!==s[a-1].state&&s[a].t>=e&&s[a].t<=t&&i.push(s[a].t);if(i.sort((s,a)=>s-a),i.length<=r)return i;let o=i.length/r;return Array.from({length:r},(s,a)=>i[Math.floor(a*o)])}function ic(n,e){let t=new Set,r=new Proxy(n.states,{get(i,o){return typeof o=="string"&&t.add(o),i[o]}});return e({...n,states:r}),[...t].filter(i=>i.includes(".")&&i in n.states)}function oc(n,e,t,r,i,o=96){let s=[],a=[];for(let l=0;l<o;l++){let c=t+(r-t)*(l+1)/o,u=i(Kt(n,e,c));s.push(u.solar),a.push(u.consumption)}return{solar:s,use:a}}function Dn(n,e,t,r){if(r<=0||n.length<2)return"";let i="",o=!1;return n.forEach((s,a)=>{if(s===null){o=!1;return}let l=a/(n.length-1)*e,c=t-Math.max(0,Math.min(r,s))/r*t;i+=`${o?"L":"M"}${l.toFixed(1)},${c.toFixed(1)}`,o=!0}),i}var Le=ie`
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
`,Gr=ie`
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
`,at=ie`
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
`;function sc(n,e){let t=Math.min(1,Math.max(0,n[3]));return[0,1,2].map(r=>Math.round(n[r]*t+e[r]*(1-t)))}var Vr;function ac(n){if(Vr===void 0)try{Vr=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})}catch{Vr=null}let e=Vr;if(!e||!n||(e.clearRect(0,0,1,1),e.fillStyle="#010203",e.fillStyle=n,e.fillStyle==="#010203"&&n.replace(/\s/g,"").toLowerCase()!=="#010203"))return null;e.fillRect(0,0,1,1);let t=e.getImageData(0,0,1,1).data;return[t[0],t[1],t[2],t[3]/255]}function hm(n,e){n.style.removeProperty("--ha-card-background");let t=getComputedStyle(n),r=(t.getPropertyValue("--ha-card-background")||t.getPropertyValue("--card-background-color")).trim(),i=ac(r);if(!i||i[3]>=.98)return;let o=e?[17,17,17]:[250,250,250],s=ac(t.getPropertyValue("--primary-background-color").trim()),a=s?s[3]>=.98?[s[0],s[1],s[2]]:sc(s,o):o,[l,c,u]=sc(i,a);n.style.setProperty("--ha-card-background",`rgb(${l} ${c} ${u})`)}function Kr(n,e,t){let r=`${e?.themes?.theme??""}|${e?.themes?.darkMode}`;return r===t||!n.isConnected?t:(hm(n,e?.themes?.darkMode!==!1),r)}function Ur(n){return n?.themes?.darkMode===!1?"light":"dark"}var pm=4,mm=8,fm=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Ut=n=>f`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Dr(n)} />
  </svg>`,qr={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},ko=n=>f`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${n} /></svg>`,gm=24,_m=10,xo=class extends pe{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},phrases:{attribute:!1},outside:{attribute:!1},_showAll:{state:!0},_said:{state:!0},_folded:{state:!0},_curve:{state:!0},_moodName:{state:!0},_undo:{state:!0},_energy:{state:!0},_sunYear:{state:!0},rooms:{attribute:!1},building:{attribute:!1}};saidTimer;memo=null;curveFor="";undoTimer;constructor(){super(),this.room=null,this.floor=null,this.phrases=null,this.outside=null,this._said=null,this._showAll=!1,this._folded=!1,this._curve=null,this._moodName=null,this._undo=null,this._energy=null,this._sunYear=!1,this.rooms=null,this.building=null}fireMoods(e,t){this.dispatchEvent(new CustomEvent("mood-change",{detail:{roomId:e.id,moods:t},bubbles:!0,composed:!0}))}runMood(e){for(let t of Br(e))this.call("light",t.service,t.data)}renderMoods(e,t){let r=e.moods??[],i=!!this.rooms&&!!this.hass.user?.is_admin;if(!r.length&&!i)return g;let o=(this.rooms??[]).filter(l=>l.id!==e.id&&l.area_id),s=l=>Q(this.hass,l).filter(c=>c.startsWith("light.")),a=()=>{let l=(this._moodName??"").trim()||this.t("mood_new");this.fireMoods(e,[...r,{id:`mood_${Date.now().toString(36)}`,name:l,lights:t.map(Or)}]),this._moodName=null};return f`<div class="nf-rp-moods">
      ${r.map(l=>f`<span class="nf-rp-mood">
          <button class="nf-btn" title=${this.t("mood_set")} @click=${()=>this.runMood(l.lights)}>✨ ${l.name}</button>
          ${o.length?f`<select class="nf-rp-mood-to" aria-label=${this.t("mood_carry")} title=${this.t("mood_carry")} @change=${c=>{let u=c.target,d=o.find(m=>m.id===u.value);u.value="",d&&this.runMood(ec(l,s(d)))}}>
                <option value="">→</option>
                ${o.map(c=>f`<option value=${c.id}>${c.name}</option>`)}
              </select>`:g}
          ${i?f`<button class="nf-btn nf-rp-small" aria-label=${this.t("delete")} @click=${()=>this.fireMoods(e,r.filter(c=>c.id!==l.id))}>✕</button>`:g}
        </span>`)}
      ${i?this._moodName===null?f`<button class="nf-btn nf-rp-small" title=${this.t("mood_save_hint")} @click=${()=>this._moodName=""}>＋ ${this.t("mood_save")}</button>`:f`<span class="nf-rp-mood"
            ><input type="text" maxlength="40" placeholder=${this.t("mood_new")} .value=${this._moodName} @input=${l=>this._moodName=l.target.value} @keydown=${l=>l.key==="Enter"&&a()} />
            <button class="nf-btn" @click=${a}>${this.t("mood_save")}</button></span
          >`:g}
    </div>`}async loadCurve(e){let t=Sr(this.hass,this.floor,e,"temperature"),r=t.length?t:Q(this.hass,e).filter(s=>s.startsWith("climate."));if(!r.length)return;let i=Date.now(),o=i-24*36e5;try{let s=await Tn(this.hass,r,o,i,!!t.length);if(this.room?.id!==e.id)return;let a=[];for(let l=1;l<=96;l++){let c=Kt(this.hass,s,o+(i-o)*l/96),u=r.map(d=>d.startsWith("climate.")?Number(c.states[d]?.attributes.current_temperature):Number(c.states[d]?.state)).filter(Number.isFinite);a.push(u.length?u.reduce((d,m)=>d+m,0)/u.length:null)}this._curve=a.some(l=>l!==null)?a:null}catch{this._curve=null}}async loadEnergy(e){if(!this.floor||!this.building)return;let t=vo(this.hass,this.building,this.floor,e);try{let r=await Kl(this.hass,t);this.room?.id===e.id&&(this._energy=r)}catch{this._energy=null}}renderEmptyLights(e,t){if(!t.length||!this.room)return g;let r=Q(this.hass,e).map(s=>this.hass.states[s]).filter(s=>!!s&&s.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(s.attributes.device_class)));if(!r.length||r.some(s=>s.state!=="off"))return g;let i=Math.max(...r.map(s=>Date.parse(String(s.last_changed??""))||0)),o=Math.floor((Date.now()-i)/6e4);return!i||o<_m?g:f`<div class="nf-rp-shade">
      <span>💡 ${this.t("empty_lights_hint",{n:t.length,min:o})}</span>
      <button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:t.map(s=>s.entity_id)})}>${this.t("empty_lights_off")}</button>
    </div>`}renderOpenWhileHeating(e){let t=this.room;if(!t||!this.floor)return g;let r=e.filter(a=>a.attributes.hvac_action==="heating"||a.state==="heat"&&a.attributes.hvac_action===void 0);if(!r.length)return g;let i=a=>!!a&&a!=="none"&&this.hass.states[a]?.state==="on",o=this.floor.openings.filter(a=>a.room_id===t.id&&[a.contact,a.contact2,a.tilt,a.tilt2].some(i));if(!o.length)return g;let s=()=>{for(let a of r)(a.attributes.hvac_modes??[]).includes("off")?this.call("climate","set_hvac_mode",{entity_id:a.entity_id,hvac_mode:"off"}):typeof a.attributes.min_temp=="number"&&this.call("climate","set_temperature",{entity_id:a.entity_id,temperature:a.attributes.min_temp})};return f`<div class="nf-rp-shade nf-rp-open-heat">
      <span>🪟 ${this.t("open_heating_hint",{n:o.length})}</span>
      <button class="nf-btn nf-rp-small" @click=${s}>${this.t("open_heating_off")}</button>
    </div>`}renderShade(){let e=this.room,{latitude:t,longitude:r}=this.hass.config??{};if(!e||!this.floor||!this.building||t===void 0||r===void 0)return g;let i=ae(this.hass,this.floor,e,"temperature");if(i===null||i<gm)return g;let o=a=>{let l=a&&a!=="none"?this.hass.states[a]:void 0;if(!l||V(l))return!1;let c=l.attributes.current_position;return typeof c=="number"?c>30:l.state==="open"},s=[...new Set(Nl(this.building,this.floor,e,{latitude:t,longitude:r}).flatMap(a=>[a.cover,a.cover2].filter(o)))];return s.length?f`<div class="nf-rp-shade">
      <span>☀ ${this.t("shade_hint",{n:s.length,temp:`${U(this.hass,ye(this.hass,i),1)} ${de(this.hass)}`})}</span>
      <button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:s})}>${this.t("shade_close")}</button>
    </div>`:g}renderSunYear(){let e=this.room,{latitude:t,longitude:r}=this.hass.config??{};if(!e||!this.floor||!this.building||t===void 0||r===void 0)return g;let i={latitude:t,longitude:r};if(!Vt(this.building,this.floor,e,{...i,zone:this.hass.config?.time_zone}).facing.length)return g;let s=f`<button class="nf-rp-sun-year" aria-expanded=${this._sunYear} title=${this.t("room_sun_year_hint")} @click=${()=>this._sunYear=!this._sunYear}>
      ☀ ${this.t("room_sun_year")}
    </button>`;if(!this._sunYear)return s;let a=Cl(this.building,this.floor,e,i),l=Math.max(1,...a),c=Array.from({length:12},(u,d)=>new Date(2026,d,15).toLocaleDateString(this.hass.language,{month:"narrow"}));return f`${s}
      <div class="nf-rp-sun-bars" role="img" aria-label=${a.map((u,d)=>`${c[d]} ${U(this.hass,u,1)} h`).join(", ")}>
        ${a.map((u,d)=>f`<span title=${`${U(this.hass,u,1)} h`}><i style=${`height:${Math.round(u/l*100)}%`}></i><b>${c[d]}</b></span>`)}
      </div>`}renderEnergy(){let e=this._energy;if(!e||e.month<=0)return g;let t=this.building?.energy.tariff,r=t?this.hass.states[t]:void 0,i=r?{value:Number(r.state),unit:String(r.attributes.unit_of_measurement??"")}:null,o=Ul(e.month,i),s=a=>`${U(this.hass,a,a<10?2:1)} kWh`;return f`<p class="nf-rp-facts nf-rp-energy" title=${this.t("room_energy_hint")}>
      ⚡ ${this.t("room_energy",{today:s(e.today),month:s(e.month)})}${o?` \xB7 ${U(this.hass,o.value,2)} ${o.currency}`:""}
    </p>`}renderCurve(){let e=this._curve;if(!e)return g;let t=e.filter(c=>c!==null),r=Math.min(...t),i=Math.max(...t),o=Math.max(1,i-r),s=e.map(c=>c===null?null:c-r+o*.1),a=Dn(s,220,36,o*1.2),l=c=>`${U(this.hass,ye(this.hass,c),1)}\xB0`;return f`<div class="nf-rp-curve" title=${this.t("room_curve_hint")}>
      <svg viewBox="0 0 220 36" preserveAspectRatio="none" aria-hidden="true">${le`<path d=${a}></path>`}</svg>
      <span>24 h · ${l(r)} – ${l(i)}</span>
    </div>`}willUpdate(e){let t=e.get("room");e.has("room")&&t?.id!==this.room?.id&&(this._folded=!1,this._undo=null),this.room&&this.hass&&this.curveFor!==this.room.id&&(this.curveFor=this.room.id,this._curve=null,this._energy=null,this.loadCurve(this.room),this.loadEnergy(this.room))}updated(e){e.has("_folded")&&this.toggleAttribute("folded",this._folded)}t(e,t){return M(this.hass,e,t)}call(e,t,r){this.hass.callService(e,t,r)}renderClean(e){let t=e.clean_entity,r=t?this.hass.states[t]:void 0;if(!t||!r)return g;let i=t.slice(0,t.indexOf(".")),o=()=>i==="script"?this.call("script","turn_on",{entity_id:t}):this.call(i,"press",{entity_id:t});return f`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" ?disabled=${V(r)} title=${this.t("room_clean_run_hint")} @click=${o}>🧹 ${this.t("room_clean_run")}</button></div>`}allOff(e){let t=Rn(e);for(let r of t.off)this.call(r.domain,r.service,r.data);this._undo=t.undo,clearTimeout(this.undoTimer),this.undoTimer=setTimeout(()=>this._undo=null,1e4)}undoAllOff(){for(let e of this._undo??[])this.call(e.domain,e.service,e.data);this._undo=null,clearTimeout(this.undoTimer)}renderAllOff(e){if(this._undo)return f`<div class="nf-rp-alloff"><span>${this.t("all_off_done")}</span><button class="nf-btn nf-rp-small" @click=${()=>this.undoAllOff()}>↶ ${this.t("all_off_undo")}</button></div>`;let{count:t}=Rn(e);return t<2?g:f`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" title=${this.t("all_off_hint")} @click=${()=>this.allOff(e)}>⏻ ${this.t("all_off_n",{n:t})}</button></div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}placedAs(e){for(let t of this.building?.floors??[])for(let r of t.placements)if(r.entity_id===e)return r}name(e){return this.placedAs(e)?.name?.trim()||B(this.hass,e,this.areaName)}nameButton(e){return f`<button class="nf-rp-name" title=${this.t("details")} @click=${()=>me(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,r){let i=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||r()};return f`<button
      class="nf-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${V(e)}
      @click=${i}
    ></button>`}outsideRoom=null;render(){let e=!this.room&&this.outside?this.outside:null;e&&!this.outsideRoom&&(this.outsideRoom={id:"nf-outside",name:this.t("outside_area"),area_id:null,points:[],floor_material:"grass"});let t=this.room??(e?this.outsideRoom:null);if(!t||!this.hass)return g;let r=e??Q(this.hass,t),i=this.memo,{shown:o,more:s}=e?{shown:e,more:[]}:i&&i.entities===this.hass.entities&&i.floor===this.floor&&i.room===t?i:this.memo={entities:this.hass.entities,floor:this.floor,room:t,...this.floor?Na(this.hass,this.floor,t):{shown:r,more:[]}},a=Ji(this.hass,s).map(y=>y.primary),l=a.length,c=this._showAll?[...o,...a]:o,u=y=>c.filter(b=>y.includes(L(b))).map(b=>this.hass.states[b]),d=u(["light"]),m=u(["cover"]),p=u(["climate"]),h=u(["media"]),w=u(["switch","fan","lock"]),_=u(["sensor","binary"]),v=u(["scene","script"]),$=this.facts(p),x=d.filter(y=>y.state==="on");return f`<section class="nf-rp" aria-label=${t.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${$.length?f`<p class="nf-rp-facts">${$.map(y=>f`<span>${y}</span>`)}</p>`:g} ${this.renderEnergy()} ${this.renderSunYear()} ${this.renderShade()}
          ${this.renderOpenWhileHeating(p)} ${this.renderEmptyLights(t,x)}
          ${this.renderCurve()}
        </div>
        <button class="nf-rp-close" aria-label=${this.t(this._folded?"panel_unfold":"panel_fold")} title=${this.t(this._folded?"panel_unfold":"panel_fold")} aria-expanded=${this._folded?"false":"true"} @click=${()=>this._folded=!this._folded}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${this._folded?le`<path d="M6 14l6-6 6 6" />`:le`<path d="M6 12h12" />`}</svg>
        </button>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body" ?hidden=${this._folded}>
        ${this.renderAllOff([...d,...h,...w])}
        ${this.renderClean(t)}
        ${!t.area_id&&!e?f`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`:c.length?g:f`<p class="nf-rp-note">${this.t("panel_empty")}</p>`}
        ${v.length?this.section("panel_scenes",[f`<div class="nf-rp-scenes">
                  ${v.map(y=>f`<button
                      class="nf-btn"
                      ?disabled=${V(y)}
                      @click=${()=>this.call(L(y.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:y.entity_id})}
                    >
                      ${this.name(y.entity_id)}
                    </button>`)}
                </div>`]):g}
        ${d.length?this.section("panel_lights",[...d.map(y=>this.lightRow(y)),...t?[this.renderMoods(t,d)]:[]],f`${x.length<d.length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(y=>!V(y)).map(y=>y.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:g}${x.length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:x.map(y=>y.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:g}`):g}
        ${m.length?this.section("panel_covers",m.map(y=>this.coverRow(y)),m.length>1&&_r(m,this.confirmEntities).length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:_r(m,this.confirmEntities)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:_r(m,this.confirmEntities)})}>
                      ${this.t("panel_all_close")}
                    </button>`:g):g}
        ${p.length?this.section("panel_climate",p.map(y=>this.climateRow(y))):g}
        ${h.length?this.section("panel_media",h.map(y=>this.mediaRow(y))):g}
        ${w.length?this.section("panel_switches",w.map(y=>this.switchRow(y))):g}
        ${_.length?this.section("panel_sensors",_.map(y=>this.sensorRow(y))):g}
        ${hl(this.hass)&&dl(this.hass,this.floor,t)?this.announceSection(t):g}
        ${this.pluginSections(t,c)}
        ${l?f`<button class="nf-btn nf-rp-small nf-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:l})}
            </button>`:g}
      </div>
    </section>`}facts(e){let t=[],r=this.room;if(!r)return t;let i=(b,z)=>{let F=ae(this.hass,this.floor,r,b);if(F===null)return null;if(b==="temperature")return`${U(this.hass,ye(this.hass,F),1)} ${de(this.hass)}`;let P=Sr(this.hass,this.floor,r,b)[0],E=this.hass.states[P]?.attributes.unit_of_measurement??z;return`${U(this.hass,F,1)} ${E}`},o=e.find(b=>typeof b.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):o&&r.climate?.temperature!=="none"&&t.push(`${U(this.hass,o.attributes.current_temperature,1)} ${de(this.hass)}`);let a=i("humidity","%");a&&t.push(a);let l=this.floor&&this.building?wo(this.hass,this.building,this.floor,r):null;l!==null&&t.push(`\u26A1 ${yt(this.hass,l)}`);let c=this.floor?this.floor.openings.filter(b=>b.room_id===r.id).flatMap(b=>[b.contact,b.contact2,b.tilt,b.tilt2]).map(b=>b&&b!=="none"?this.hass.states[b]:void 0).filter(b=>b?.state==="on").map(b=>Date.parse(String(b.last_changed??""))).filter(Number.isFinite):[];c.length&&t.push(`\u{1FA9F} ${this.t("open_since",{time:yo(Date.now()-Math.min(...c))})}`);let u=Q(this.hass,r).map(b=>this.hass.states[b]).filter(b=>!!b&&b.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(b.attributes.device_class)));if(u.length)if(u.some(b=>b.state==="on"))t.push(`\u{1F6B6} ${this.t("presence_now")}`);else{let b=Math.max(...u.map(z=>Date.parse(String(z.last_changed??""))||0));b>0&&t.push(`\u{1F6B6} ${this.t("presence_last",{time:yo(Date.now()-b)})}`)}let d=this.building?Zl(this.hass,this.building).filter(b=>b.roomId===r.id&&b.level<jl):[];d.length&&t.push(`\u{1FAAB} ${this.t("battery_low_n",{n:d.length,names:d.map(b=>`${this.name(b.entity)} ${Math.round(b.level)} %`).join(", ")})}`);let m=(this.building?.settings.circuits??[]).filter(b=>b.rooms.includes(r.id)).map(b=>b.name),p=this.building?.settings.room_facts_off??[];m.length&&!p.includes("circuits")&&t.push(`\u{1F50C} ${m.join(", ")}`);let{latitude:h,longitude:w,time_zone:_}=this.hass.config??{};if(this.floor&&h!==void 0&&w!==void 0&&this.building&&!p.includes("sun")){let b=Vt(this.building,this.floor,r,{latitude:h,longitude:w,zone:_});b.facing.length&&t.push(`\u2600 ${this.t("room_sun_hours",{h:U(this.hass,b.hours,1),facing:b.facing.join(", ")})}`)}let v=ae(this.hass,this.floor,r,"temperature"),$=ae(this.hass,this.floor,r,"humidity"),x=Nr(ae(this.hass,this.floor,r,"co2"),$,Gt(v,$));x&&!p.includes("air")&&t.push(`\u{1F4A8} ${this.t(`air_${x}`)}`);let y=Wr(v,$,ae(this.hass,this.floor,r,"co2"),vt(new Date,this.hass.config?.latitude));return y!==null&&(v!==null||$!==null)&&!p.includes("comfort")&&t.push(`\u{1F60A} ${this.t("comfort_n",{n:y})}`),t}announceSection(e){let t=this.phrases?.length?this.phrases:[1,2,3,4,5].map(s=>this.t(`announce_phrase_${s}`)),r=this._announceVol??this.building?.settings.announce_volume??70,i=s=>{let a=s.trim();a&&(clearTimeout(this.saidTimer),this.hass.callService("nextfloor","announce",{message:a,rooms:[e.id],on_screens:!1,volume:r/100}).then(()=>this._said={text:this.t("announce_sent",{message:a}),failed:!1},l=>this._said={text:this.t("announce_failed",{error:l?.message??String(l)}),failed:!0}),this.saidTimer=setTimeout(()=>this._said=null,6e3))},o=s=>{s.preventDefault();let a=s.currentTarget.querySelector("input");i(a.value),a.value=""};return this.section("panel_announce",[f`<div class="nf-rp-scenes">${t.map(s=>f`<button class="nf-btn" @click=${()=>i(s)}>${s}</button>`)}</div>
        <div class="nf-rp-vol" style="display:flex;align-items:center;gap:8px;margin:6px 0;font-size:12px">
          <span title=${this.t("announce_volume")}>🔊 ${r}%</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            style="flex:1;accent-color:var(--nf-accent)"
            .value=${String(r)}
            aria-label=${this.t("announce_volume")}
            @input=${s=>{this._announceVol=Number(s.target.value),this.requestUpdate()}}
          />
        </div>
        <form class="nf-rp-say" @submit=${o}>
          <input type="text" maxlength="500" placeholder=${this.t("announce_placeholder")} aria-label=${this.t("announce_placeholder")} />
          <button class="nf-btn nf-primary" type="submit">${this.t("announce_send")}</button>
        </form>
        ${this._said?f`<p class="nf-rp-note ${this._said.failed?"nf-rp-fail":""}" role="status">${this._said.text}</p>`:g}`])}pluginSections(e,t){return Ys({hass:this.hass,room:{id:e.id,name:e.name,area_id:e.area_id??null},entities:t}).map(i=>f`<div class="nf-rp-sec nf-rp-plugin" data-plugin=${i.key}>
        <div class="nf-rp-sec-head"><h3>${i.title}</h3></div>
        ${typeof i.content=="string"?f`<p class="nf-rp-note">${i.content}</p>`:i.content}
      </div>`)}section(e,t,r=g){return f`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(e)}</h3>${r}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,r=e.state==="on",i=t.supported_color_modes??[],o=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,u=t.max_color_temp_kelvin??6500,d=e.entity_id,m=!!this.placedAs(d)?.simple;return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${r?"nf-rp-on":""}">${Ut("light")}</span>
      ${this.nameButton(d)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,()=>this.call("light","toggle",{entity_id:d}))}
      ${r&&o&&!m?f`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(p.target.value)})}
          /></label>`:g}
      ${r&&s&&!m?f`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${u}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:g}
      ${r&&a&&!m?f`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${fm.map(p=>f`<button
                class="nf-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:p})}
              ></button>`)}
          </div>`:g}
    </div>`}coverRow(e){let t=e.attributes,r=t.supported_features??0,i=e.entity_id,o=V(e)&&!fn(e);return f`<div class="nf-rp-row">
      <span class="nf-rp-icon">${Ut("cover")}</span>
      ${this.nameButton(i)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${r&mm?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:g}
        <button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${r&pm&&typeof t.current_position=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:g}
      ${r&128&&typeof t.current_tilt_position=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:r&48?f`<div class="nf-rp-buttons">
              ${r&16?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:g}
              ${r&32?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:g}
            </div>`:g}
    </div>`}climateRow(e){let t=e.attributes,r=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,o=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=u=>this.call("climate","set_temperature",{entity_id:r,temperature:Math.min(a,Math.max(s,Math.round(u/o)*o))});return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t.hvac_action==="heating"?"nf-rp-on":""}">${Ut("climate")}</span>
      ${this.nameButton(r)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${i!==null?f`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${U(this.hass,i,1)} ${de(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+o)}>+</button>
          </div>`:g}
      ${l.length>1?f`<div class="nf-rp-chips">
            ${l.map(u=>f`<button
                class="nf-chip"
                aria-pressed=${e.state===u}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:r,hvac_mode:u})}
              >
                ${this.stateLabel(u)}
              </button>`)}
          </div>`:g}
    </div>`}stateOf(e,t=ce(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let r=L(e.entity_id);return e.state==="unknown"&&r!=="sensor"&&r!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,r=this.t(t);return r===t?e:r}mediaRow(e){let t=e.attributes,r=e.entity_id,i=V(e)||e.state==="off",o=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${e.state==="playing"?"nf-rp-on":""}">${Ut("media")}</span>
      ${this.nameButton(r)}
      <span class="nf-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${o?f`<p class="nf-rp-media nf-rp-wide">${o}</p>`:g}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:r})}>
          ${ko(qr.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${V(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:r})}>
          ${ko(e.state==="playing"?qr.pause:qr.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:r})}>
          ${ko(qr.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:r,volume_level:Number(s.target.value)/100})}
          /></label>`:g}
    </div>`}switchRow(e){let t=e.entity_id,r=L(t),i=t.slice(0,t.indexOf(".")),o=r==="lock"?e.state==="unlocked"||e.state==="open":se(e),s=()=>r==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${o?"nf-rp-on":""}">${Ut(r)}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,o,s)}
    </div>`}sensorRow(e){let t=L(e.entity_id),r=t==="binary"&&e.state==="on";return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${r?"nf-rp-on":""}">${Ut(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Le,at,ie`
      :host {
        display: block;
        animation: nf-rp-in 0.2s cubic-bezier(0.23, 1, 0.32, 1);
      }
      @keyframes nf-rp-in {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        :host {
          animation: none;
        }
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
        display: flex;
        flex-wrap: wrap;
        gap: 0 12px;
      }
      .nf-rp-facts span {
        white-space: nowrap;
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
        font-size: 12px;
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
        font-size: 13px;
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
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        transition: background-color 0.2s ease, transform 0.14s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .nf-switch:active:not(:disabled),
      .nf-rp-close:active,
      .nf-rp-swatch:active {
        transform: scale(0.95);
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
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        transition: transform 0.22s cubic-bezier(0.23, 1, 0.32, 1);
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-switch,
        .nf-switch::after {
          transition: none;
        }
        .nf-switch:active:not(:disabled),
        .nf-rp-close:active,
        .nf-rp-swatch:active {
          transform: none;
        }
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
        font-size: 13px;
        color: var(--nf-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("nf-room-panel")||customElements.define("nf-room-panel",xo);function lc(n){return n==="light"}function cc(n,e,t){return n==="light"||t!==e}var uc={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dc=n=>(...e)=>({_$litDirective$:n,values:e}),jr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var Fn=class extends jr{constructor(e){if(super(e),this.it=g,e.type!==uc.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===Ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Fn.directiveName="unsafeHTML",Fn.resultType=1;var hc=dc(Fn);var fe="",qt=!1,pc=(n,e)=>n.entities.length===1&&(n.entities[0].startsWith("alarm_control_panel.")||!!e?.entity&&n.entities[0]===e.entity),bm=n=>!Array.isArray(n)||n.length<3?"#ffffff":`#${n.slice(0,3).map(e=>Math.max(0,Math.min(255,Number(e)||0)).toString(16).padStart(2,"0")).join("")}`,wm=n=>{let e=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(n);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[255,255,255]},Zr=(n,e)=>{if(e.startsWith("scene."))return Wt(n,e).length>0;let t=n.states[e]?.state;return t==="on"||t==="open"||t==="opening"||t==="heat"||t==="cool"||t==="auto"||t==="armed_away"||t==="armed_home"||t==="armed_night"||t==="locked"};function vm(n,e){let t=e.split(".")[0],r=n.states[e]?.state;if(t==="alarm_control_panel")n.callService("alarm_control_panel",r==="disarmed"?"alarm_arm_away":"alarm_disarm",{entity_id:e});else if(t==="lock")n.callService("lock",r==="locked"?"unlock":"lock",{entity_id:e});else if(t==="scene"){let i=Wt(n,e);i.length?n.callService("homeassistant","turn_off",{entity_id:i}):n.callService("scene","turn_on",{entity_id:e})}else t==="script"?n.callService(t,"turn_on",{entity_id:e}):t==="button"||t==="input_button"?n.callService(t,"press",{entity_id:e}):n.callService("homeassistant","toggle",{entity_id:e})}var So=n=>/^(light|switch|fan|input_boolean)\./.test(n),mc=ie`
  .nf-quick-dock {
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
    z-index: 7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    max-width: calc(100% - 140px);
    pointer-events: auto;
  }
  .nf-qd-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 16px;
    border-radius: 999px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.16));
    background: var(--nf-surface, rgba(16, 22, 34, 0.86));
    backdrop-filter: blur(12px);
    color: var(--nf-text, #f3f5f8);
    font: 600 14px/1 inherit;
    cursor: pointer;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.28);
    transition: transform 0.12s ease, border-color 0.15s ease, background 0.15s ease;
  }
  .nf-qd-btn:active { transform: scale(0.96); }
  .nf-qd-btn[aria-expanded="true"] { border-color: var(--nf-accent, #40b8ff); }
  .nf-qd-btn.nf-qd-on { background: color-mix(in srgb, var(--nf-accent, #40b8ff) 22%, var(--nf-surface, rgba(16, 22, 34, 0.9))); }
  .nf-quick-dock.dock-clean .nf-qd-btn {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.14);
    box-shadow: none;
    backdrop-filter: none;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65);
  }
  .nf-quick-dock.dock-large .nf-qd-btn { min-height: 54px; padding: 0 22px; font-size: 16px; }
  .nf-quick-popup {
    position: absolute;
    left: 50%;
    bottom: 68px;
    transform: translateX(-50%);
    z-index: 8;
    width: min(420px, calc(100% - 24px));
    max-height: min(62vh, 480px);
    overflow-y: auto;
    padding: 14px;
    border-radius: 18px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.18));
    background: var(--nf-surface, rgba(16, 22, 34, 0.94));
    backdrop-filter: blur(16px);
    color: var(--nf-text, #f3f5f8);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.42);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .nf-qp-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .nf-qp-head h4 { margin: 0; font-size: 15px; }
  .nf-qp-actions { display: flex; align-items: center; gap: 6px; }
  .nf-qp-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .nf-qp-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .nf-qp-name { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .nf-qp-sliders { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .nf-qp-sliders input[type="range"] { flex: 1; min-width: 110px; height: 28px; accent-color: var(--nf-accent, #40b8ff); }
  .nf-qp-sliders input[type="color"] { width: 38px; height: 32px; border: none; border-radius: 8px; background: none; padding: 0; cursor: pointer; }
  .nf-qp-toggle {
    min-width: 58px;
    min-height: 34px;
    padding: 0 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    color: inherit;
    font: 600 12px/1 inherit;
    cursor: pointer;
  }
  .nf-qp-toggle.on { background: var(--nf-accent, #40b8ff); color: #09131f; border-color: transparent; }
  .nf-kp-disp {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.12);
    font: 700 20px/1 monospace;
    letter-spacing: 6px;
  }
  .nf-kp-disp.muted { opacity: 0.4; }
  .nf-kp-err { color: #ff6b6b; font-size: 12px; text-align: center; font-weight: 600; }
  .nf-kp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .nf-kp-key {
    min-height: 46px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.08);
    color: inherit;
    font: 600 18px/1 inherit;
    cursor: pointer;
  }
  .nf-kp-key:active { transform: scale(0.95); background: rgba(255, 255, 255, 0.16); }
  .nf-kp-actions { display: flex; gap: 8px; }
  .nf-kp-actions button {
    flex: 1;
    min-height: 42px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.1);
    color: inherit;
    font: 600 13px/1 inherit;
    cursor: pointer;
  }
  .nf-kp-actions button.primary { background: var(--nf-accent, #40b8ff); color: #09131f; border-color: transparent; }
`;function fc(n,e,t,r,i="pill",o,s){if(!n||!e.length)return g;let a=e.find(h=>h.id===t)??null,l=(h,w)=>{let _=h.entities.filter(So);_.length&&n.callService("homeassistant",w?"turn_on":"turn_off",{entity_id:_})},c=h=>{let w=n.states[h],_=B(n,h),v=h.split(".")[0],$=Zr(n,h),x=w?.attributes??{};if(v==="light"){let y=Array.isArray(x.supported_color_modes)?x.supported_color_modes:[],b=typeof x.brightness=="number"||y.some(P=>P!=="onoff"),z=y.some(P=>["rgb","hs","xy","rgbw","rgbww"].includes(P)),F=typeof x.brightness=="number"?Math.round(x.brightness/255*100):$?100:0;return f`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${_}</span>
          <button class="nf-qp-toggle ${$?"on":""}" @click=${()=>{n.callService("light","toggle",{entity_id:h})}}>
            ${$?`${F}%`:M(n,"state_off")}
          </button>
        </div>
        ${b||z?f`<div class="nf-qp-sliders">
              ${b?f`<input type="range" min="0" max="100" .value=${String(F)} @change=${P=>{let E=Number(P.target.value);E<=0?n.callService("light","turn_off",{entity_id:h}):n.callService("light","turn_on",{entity_id:h,brightness_pct:E})}} />`:g}
              ${z?f`<input type="color" .value=${bm(x.rgb_color)} @change=${P=>{let E=wm(P.target.value);n.callService("light","turn_on",{entity_id:h,rgb_color:E})}} />`:g}
            </div>`:g}
      </div>`}if(v==="cover"){let y=typeof x.current_position=="number"?Math.round(x.current_position):$?100:0;return f`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${_} (${y}%)</span>
          <div class="nf-qp-actions">
            <button class="nf-qp-toggle" @click=${()=>{n.callService("cover","open_cover",{entity_id:h})}}>▲</button>
            <button class="nf-qp-toggle" @click=${()=>{n.callService("cover","stop_cover",{entity_id:h})}}>■</button>
            <button class="nf-qp-toggle" @click=${()=>{n.callService("cover","close_cover",{entity_id:h})}}>▼</button>
          </div>
        </div>
        <div class="nf-qp-sliders">
          <input type="range" min="0" max="100" .value=${String(y)} @change=${b=>{n.callService("cover","set_cover_position",{entity_id:h,position:Number(b.target.value)})}} />
        </div>
      </div>`}if(v==="climate"){let y=typeof x.temperature=="number"?x.temperature:21,b=typeof x.current_temperature=="number"?`${x.current_temperature}\xB0`:"";return f`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${_} ${b?`(${b})`:""}</span>
          <div class="nf-qp-actions">
            <button class="nf-qp-toggle" @click=${()=>{n.callService("climate","set_temperature",{entity_id:h,temperature:y-.5})}}>−</button>
            <span>${y}°</span>
            <button class="nf-qp-toggle" @click=${()=>{n.callService("climate","set_temperature",{entity_id:h,temperature:y+.5})}}>+</button>
          </div>
        </div>
      </div>`}if(v==="camera"){let y=typeof x.entity_picture=="string"?x.entity_picture:`/api/camera_proxy/${h}`,b=n.hassUrl?n.hassUrl(y):y;return f`<div class="nf-qp-row">
        <div class="nf-qp-top"><span class="nf-qp-name">📷 ${_}</span></div>
        <img src=${b} alt=${_} style="width:100%;border-radius:10px;max-height:180px;object-fit:cover" />
      </div>`}if(v==="scene"||v==="script"||v==="button"||v==="input_button"){let y=v==="button"||v==="input_button"?"press":"turn_on";return f`<div class="nf-qp-row">
        <div class="nf-qp-top">
          <span class="nf-qp-name">${_}</span>
          <button class="nf-qp-toggle on" @click=${()=>{n.callService(v,y,{entity_id:h})}}>▶</button>
        </div>
      </div>`}return f`<div class="nf-qp-row">
      <div class="nf-qp-top">
        <span class="nf-qp-name">${_}</span>
        <button class="nf-qp-toggle ${$?"on":""}" @click=${()=>{n.callService("homeassistant","toggle",{entity_id:h})}}>
          ${$?M(n,"state_on"):M(n,"state_off")}
        </button>
      </div>
    </div>`},u=a?pc(a,o):!1,d=a&&!u?a.entities.filter(So).some(h=>Zr(n,h)):!1,m=a&&!u?a.entities.some(So):!1,p=h=>{let w=h.startsWith("alarm_control_panel."),_=n.states[h]?.state??"unknown",v=w?_==="disarmed":!Zr(n,h),$=z=>{qt=!1,z==="C"?fe="":z==="\u232B"?fe=fe.slice(0,-1):fe.length<12&&(fe+=z),s?.()},x=z=>{n.callService("alarm_control_panel",z,fe?{entity_id:h,code:fe}:{entity_id:h}),fe="",qt=!1,r(null)},y=()=>{if(o?.pin&&fe!==o.pin){qt=!0,fe="",s?.();return}n.callService("homeassistant",v?"turn_on":"turn_off",{entity_id:h}),fe="",qt=!1,r(null)},b=["1","2","3","4","5","6","7","8","9","C","0","\u232B"];return f`
      <div class="nf-kp-disp ${fe?"":"muted"}">${fe?"\u2022".repeat(fe.length):"\u2022\u2022\u2022\u2022"}</div>
      ${qt?f`<div class="nf-kp-err">${M(n,"alarm_wrong_pin")}</div>`:g}
      <div class="nf-kp-grid">
        ${b.map(z=>f`<button class="nf-kp-key" @click=${()=>$(z)}>${z}</button>`)}
      </div>
      <div class="nf-kp-actions">
        ${w?v?f`
                <button class="primary" @click=${()=>x("alarm_arm_away")}>${M(n,"alarm_arm_away")}</button>
                <button @click=${()=>x("alarm_arm_home")}>${M(n,"alarm_arm_home")}</button>
              `:f`<button class="primary" @click=${()=>x("alarm_disarm")}>${M(n,"alarm_disarm")}</button>`:f`<button class="primary" @click=${y}>${v?M(n,"alarm_arm_away"):M(n,"alarm_disarm")}</button>`}
      </div>
    `};return f`
    ${a?f`<div class="nf-quick-popup" @pointerdown=${h=>h.stopPropagation()}>
          <div class="nf-qp-head">
            <h4>${a.label}</h4>
            <div class="nf-qp-actions">
              ${m?f`<button class="nf-qp-toggle ${d?"on":""}" @click=${()=>l(a,!d)}>${d?M(n,"state_off"):M(n,"state_on")}</button>`:g}
              <button class="nf-qp-toggle" @click=${()=>r(null)}>✕</button>
            </div>
          </div>
          ${u?p(a.entities[0]):a.entities.map(c)}
        </div>`:g}
    <div class="nf-quick-dock dock-${i}" @pointerdown=${h=>h.stopPropagation()}>
      ${e.map(h=>{let w=h.entities.some(x=>Zr(n,x)),_=pc(h,o),v=h.entities.length===1&&!_,$=h.icon?(h.icon.includes(":")?h.icon:`mdi:${h.icon}`).replace(/[^a-z0-9:-]/gi,""):"";return f`<button
          class="nf-qd-btn ${w?"nf-qd-on":""}"
          aria-expanded=${v?g:t===h.id}
          @click=${()=>{v?vm(n,h.entities[0]):(fe="",qt=!1,r(t===h.id?null:h.id))}}
        >
          ${$?hc(`<ha-icon icon="${$}"></ha-icon>`):g}
          <span>${h.label}</span>
        </button>`})}
    </div>
  `}function $e(n,e){return e&&n.states[e]?e:Object.keys(n.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var ym={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u26A0\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F328}\uFE0F",lightning:"\u26A1","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F326}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},gc=ie`
  .nf-tablet-side {
    position: absolute;
    top: 56px;
    bottom: 72px;
    width: 225px;
    z-index: 6;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: auto;
    overflow-y: auto;
  }
  .nf-tablet-side.left { left: 16px; }
  .nf-tablet-side.right { right: 16px; }
  .nf-tablet-side.below-forecast { top: 132px; }
  .nf-ts-card {
    padding: 12px 14px;
    border-radius: 16px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.14));
    background: var(--nf-surface, rgba(16, 22, 34, 0.82));
    backdrop-filter: blur(14px);
    color: var(--nf-text, #f3f5f8);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
  .nf-tablet-side.style-clean .nf-ts-card {
    background: transparent;
    border: none;
    backdrop-filter: none;
    box-shadow: none;
    padding: 4px 2px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);
  }
  .nf-tablet-side.style-minimal .nf-ts-card {
    background: rgba(16, 22, 34, 0.28);
    border: none;
    border-left: 2px solid var(--nf-accent, #40b8ff);
    border-radius: 8px;
    backdrop-filter: blur(6px);
    box-shadow: none;
  }
  .nf-ts-time { font-size: 32px; font-weight: 700; line-height: 1.02; letter-spacing: -0.02em; }
  .nf-ts-time.size-large { font-size: 46px; }
  .nf-ts-time.size-xl { font-size: 62px; }
  .nf-ts-date { font-size: 13px; opacity: 0.82; margin-top: 4px; text-transform: capitalize; }
  .nf-ts-weather { display: flex; align-items: center; gap: 10px; }
  .nf-ts-wicon { font-size: 28px; line-height: 1; }
  .nf-ts-wtemp { font-size: 20px; font-weight: 700; }
  .nf-ts-wcond { font-size: 12px; opacity: 0.78; }
  .nf-ts-list { display: grid; gap: 7px; font-size: 13px; }
  .nf-ts-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .nf-ts-val { font-weight: 600; opacity: 0.92; }
  .nf-ts-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .nf-ts-pill { font-size: 12px; padding: 3px 9px; border-radius: 999px; background: rgba(255, 255, 255, 0.1); }
  .nf-ts-price-bars { display: flex; align-items: flex-end; gap: 2px; height: 28px; margin-top: 6px; }
  .nf-ts-price-bars span { flex: 1; border-radius: 2px 2px 0 0; min-height: 3px; opacity: 0.55; }
  .nf-ts-price-bars span.now { opacity: 1; box-shadow: 0 0 6px currentColor; }
  .nf-ts-app-done { color: #52e088; font-weight: 700; }
  @media (max-width: 720px) {
    .nf-tablet-side { display: none; }
  }
`;function _c(n,e,t,r=!1){let i=t?.sidebar??"off";if(!n||!e||i==="off")return g;let o=t?.sidebar_clock!==!1,s=t?.sidebar_weather!==!1,a=t?.sidebar_summary!==!1,l=t?.sidebar_people!==!1,c=t?.sidebar_energy!==!1,u=t?.sidebar_media!==!1,d=t?.sidebar_appliances!==!1,m=t?.price_entity?n.states[t.price_entity]:void 0;if(!o&&!s&&!a&&!l&&!c&&!u&&!d&&!m)return g;let p=n.language||"en",h=new Date,w=t?.clock_seconds?{hour:"2-digit",minute:"2-digit",second:"2-digit"}:{hour:"2-digit",minute:"2-digit"},_=h.toLocaleTimeString(p,w),v=h.toLocaleDateString(p,{weekday:"long",day:"numeric",month:"short"}),$=t?.clock_size??"normal",x=t?.clock_color&&/^#[0-9a-f]{6}$/i.test(t.clock_color)?`color:${t.clock_color}`:"",y=`style-${t?.sidebar_style??"card"}`,b=$e(n,e.settings.weather_entity),z=b?n.states[b]:void 0,F=z?.attributes.temperature,P=n.config?.unit_system?.temperature??"\xB0C",E=Object.values(n.states),W=new Set;for(let I of e.floors){for(let q of I.placements)q.entity_id.startsWith("light.")&&W.add(q.entity_id);for(let q of I.furniture)q.entity?.startsWith("light.")&&W.add(q.entity)}let S=I=>I.entity_id.startsWith("light.")&&I.state==="on"&&!Array.isArray(I.attributes.entity_id)&&!n.entities?.[I.entity_id]?.hidden,D=W.size>0?[...W].filter(I=>n.states[I]&&S(n.states[I])).length:E.filter(S).length,G=E.filter(I=>I.entity_id.startsWith("binary_sensor.")&&I.state==="on"&&["door","window","garage_door","opening"].includes(String(I.attributes.device_class??""))).length,T=E.find(I=>I.entity_id.startsWith("alarm_control_panel.")),K=e.floors.flatMap(I=>I.rooms.map(q=>q.climate?.temperature).filter(q=>!!q&&q!=="none")).map(I=>Number(n.states[I]?.state)).filter(I=>Number.isFinite(I)),Y=K.length?(K.reduce((I,q)=>I+q,0)/K.length).toFixed(1):null,C=e.settings.status_entities??[],j=l?E.filter(I=>I.entity_id.startsWith("person.")&&I.state==="home"):[],oe=u?E.find(I=>I.entity_id.startsWith("media_player.")&&I.state==="playing"):void 0,H=e.energy.grid?n.states[e.energy.grid]:void 0,J=e.energy.solar?n.states[e.energy.solar]:void 0,ve=e.energy.battery_soc?n.states[e.energy.battery_soc]:void 0,N=c&&(H||J||ve),te=[],k="#52e088";if(m){let I=Number(m.state),q=Array.isArray(m.attributes.today)?m.attributes.today.map(Number).filter(Number.isFinite):Array.isArray(m.attributes.raw_today)?m.attributes.raw_today.map(ee=>Number(ee?.value)).filter(Number.isFinite):[];if(q.length>=6){let ee=Math.min(...q),ut=Math.max(...q),nt=Math.max(.001,ut-ee),dt=h.getHours(),Mt=At=>{let Zn=(At-ee)/nt;return Zn<.35?"#52e088":Zn<.72?"#f5c249":"#ff6b6b"};Number.isFinite(I)&&(k=Mt(I)),te=q.slice(0,24).map((At,Zn)=>({pct:Math.max(12,Math.round((At-ee)/nt*100)),color:Mt(At),now:Zn===dt}))}else Number.isFinite(I)&&(k=I<.8?"#52e088":I<2?"#f5c249":"#ff6b6b")}let R={washer:"\u{1FAE7}",dryer:"\u{1F300}",dishwasher:"\u{1F37D}\uFE0F"},he=[];if(d){let I=new Set;for(let q of e.floors)for(let ee of q.furniture){if(!ee.entity||I.has(ee.entity)||!(ee.type in R))continue;I.add(ee.entity);let ut=n.states[ee.entity];if(!ut)continue;let nt=ut.state.toLowerCase(),dt=kn(n,je(n,ee.entity)),Mt=/finish|done|complete|klar|fertig/.test(nt),At=dt!==null&&dt>0||/run|wash|dry|spin|rinse|active|on/.test(nt);(Mt||At)&&he.push({name:ee.name||B(n,ee.entity),icon:R[ee.type],text:Mt?M(n,"appliance_done"):dt!==null&&dt>0?zr(dt):ut.state,done:Mt})}}return f`<aside class="nf-tablet-side ${i} ${y} ${r&&i==="right"?"below-forecast":""}" @pointerdown=${I=>I.stopPropagation()}>
    ${o?f`<div class="nf-ts-card">
          <div class="nf-ts-time size-${$}" style=${x}>${_}</div>
          <div class="nf-ts-date">${v}</div>
        </div>`:g}
    ${s&&z?f`<div class="nf-ts-card nf-ts-weather">
          <span class="nf-ts-wicon">${ym[z.state]??"\u{1F324}\uFE0F"}</span>
          <div>
            <div class="nf-ts-wtemp">${typeof F=="number"?`${F}${P}`:z.state}</div>
            <div class="nf-ts-wcond">${z.state}</div>
          </div>
        </div>`:g}
    ${a?f`<div class="nf-ts-card nf-ts-list">
          <div class="nf-ts-row"><span>💡 ${M(n,"tablet_lights_on")}</span><span class="nf-ts-val">${D}</span></div>
          <div class="nf-ts-row"><span>🚪 ${M(n,"tablet_openings")}</span><span class="nf-ts-val">${G}</span></div>
          ${Y?f`<div class="nf-ts-row"><span>🌡️ ${M(n,"tablet_indoor")}</span><span class="nf-ts-val">${Y}${P}</span></div>`:g}
          ${T?f`<div class="nf-ts-row"><span>🛡️ ${B(n,T.entity_id)}</span><span class="nf-ts-val">${T.state}</span></div>`:g}
          ${C.map(I=>{let q=n.states[I];if(!q)return g;let ee=typeof q.attributes.unit_of_measurement=="string"?` ${q.attributes.unit_of_measurement}`:"";return f`<div class="nf-ts-row"><span>${e.settings.status_names?.[I]||B(n,I)}</span><span class="nf-ts-val">${q.state}${ee}</span></div>`})}
        </div>`:g}
    ${N?f`<div class="nf-ts-card nf-ts-list">
          ${H?f`<div class="nf-ts-row"><span>⚡ ${M(n,"tablet_power")}</span><span class="nf-ts-val">${H.state} ${H.attributes.unit_of_measurement??"W"}</span></div>`:g}
          ${J?f`<div class="nf-ts-row"><span>☀️ ${M(n,"tablet_solar")}</span><span class="nf-ts-val">${J.state} ${J.attributes.unit_of_measurement??"W"}</span></div>`:g}
          ${ve?f`<div class="nf-ts-row"><span>🔋 ${M(n,"tablet_battery")}</span><span class="nf-ts-val">${ve.state}%</span></div>`:g}
        </div>`:g}
    ${m?f`<div class="nf-ts-card">
          <div class="nf-ts-row">
            <span>⚡ ${M(n,"tablet_price")}</span>
            <span class="nf-ts-val" style="color:${k}">${m.state} ${typeof m.attributes.unit_of_measurement=="string"?m.attributes.unit_of_measurement:""}</span>
          </div>
          ${te.length?f`<div class="nf-ts-price-bars">
                ${te.map(I=>f`<span class=${I.now?"now":""} style="height:${I.pct}%;background:${I.color};color:${I.color}"></span>`)}
              </div>`:g}
        </div>`:g}
    ${he.length?f`<div class="nf-ts-card nf-ts-list">
          ${he.map(I=>f`<div class="nf-ts-row"><span>${I.icon} ${I.name}</span><span class="nf-ts-val ${I.done?"nf-ts-app-done":""}">${I.text}</span></div>`)}
        </div>`:g}
    ${j.length?f`<div class="nf-ts-card nf-ts-pills">
          ${j.map(I=>f`<span class="nf-ts-pill">🏠 ${B(n,I.entity_id)}</span>`)}
        </div>`:g}
    ${oe?f`<div class="nf-ts-card nf-ts-list">
          <div class="nf-ts-row">
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🎵 ${String(oe.attributes.media_title||B(n,oe.entity_id))}</span>
            <span>
              <button class="nf-ts-pill" style="border:none;color:inherit;cursor:pointer" @click=${()=>{n.callService("media_player","media_play_pause",{entity_id:oe.entity_id})}}>⏯</button>
              <button class="nf-ts-pill" style="border:none;color:inherit;cursor:pointer" @click=${()=>{n.callService("media_player","media_next_track",{entity_id:oe.entity_id})}}>⏭</button>
            </span>
          </div>
          ${oe.attributes.media_artist?f`<div style="font-size:11px;opacity:0.72;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${String(oe.attributes.media_artist)}</div>`:g}
        </div>`:g}
  </aside>`}var bc="nextfloor.camViews";function wc(){try{let n=localStorage.getItem(bc);if(!n)return[];let e=JSON.parse(n);return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string"&&typeof t.name=="string"&&t.view):[]}catch{return[]}}function $o(n){try{localStorage.setItem(bc,JSON.stringify(n.slice(0,8)))}catch{}}var vc=ie`
  .nf-pip-cam {
    position: absolute;
    left: 16px;
    top: 64px;
    z-index: 14;
    width: min(340px, calc(100% - 32px));
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.2));
    background: var(--nf-surface, rgba(14, 20, 30, 0.94));
    backdrop-filter: blur(14px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    color: var(--nf-text, #f3f5f8);
    pointer-events: auto;
  }
  .nf-pip-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 12px;
    font: 600 13px/1 inherit;
  }
  .nf-pip-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff4d4f;
    margin-right: 6px;
    box-shadow: 0 0 8px #ff4d4f;
  }
  .nf-pip-close {
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: inherit;
    border-radius: 999px;
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
  .nf-pip-cam img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    cursor: pointer;
  }
  .nf-screensaver {
    position: absolute;
    inset: 0;
    z-index: 25;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: rgba(6, 10, 18, 0.78);
    backdrop-filter: blur(6px);
    color: #f3f6fa;
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
  }
  .nf-ss-time {
    font: 700 clamp(56px, 14vmin, 132px)/1 inherit;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
    text-shadow: 0 6px 28px rgba(0, 0, 0, 0.6);
  }
  .nf-ss-date {
    font: 500 clamp(16px, 2.8vmin, 26px)/1.2 inherit;
    opacity: 0.78;
    text-transform: capitalize;
  }
  .nf-ss-weather {
    margin-top: 8px;
    font: 600 clamp(16px, 2.5vmin, 22px)/1.2 inherit;
    opacity: 0.88;
  }
  .nf-cam-views {
    position: absolute;
    /* beside the round buttons at the bottom left (the star, search, eye, lock, walk), not over them */
    left: 236px;
    bottom: 22px;
    z-index: 6;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    max-width: min(360px, calc(100% - 260px));
    pointer-events: auto;
  }
  @media (max-width: 620px) {
    .nf-cam-views {
      left: 14px;
      bottom: 150px;
      max-width: calc(100% - 28px);
    }
  }
  .nf-cam-pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    height: 32px;
    padding: 0 11px;
    border-radius: 999px;
    border: 1px solid var(--nf-line, rgba(255, 255, 255, 0.16));
    background: var(--nf-surface, rgba(16, 22, 34, 0.82));
    backdrop-filter: blur(10px);
    color: var(--nf-text, #f3f5f8);
    font: 600 12px/1 inherit;
    cursor: pointer;
  }
  .nf-cam-pill:hover { border-color: var(--nf-accent, #40b8ff); }
  .nf-cam-del {
    margin-left: 2px;
    opacity: 0.55;
    font-size: 11px;
  }
  .nf-cam-del:hover { opacity: 1; color: #ff6b6b; }
`;function yc(n,e,t,r,i){if(!n||!e||!n.states[e])return g;let o=n.states[e],s=typeof o.attributes.entity_picture=="string"?o.attributes.entity_picture:`/api/camera_proxy/${e}`,a=s.includes("?")?"&":"?",l=`${n.hassUrl?n.hassUrl(s):s}${a}_t=${t}`;return f`<div class="nf-pip-cam" @pointerdown=${c=>c.stopPropagation()}>
    <div class="nf-pip-head">
      <span><span class="nf-pip-dot"></span>${B(n,e)}</span>
      <button class="nf-pip-close" @click=${r} aria-label=${M(n,"close")}>✕</button>
    </div>
    <img src=${l} alt=${B(n,e)} @click=${()=>i(e)} />
  </div>`}function kc(n,e,t,r){if(!n)return g;let i=n.language||"en",o=new Date,s=t?.clock_seconds?{hour:"2-digit",minute:"2-digit",second:"2-digit"}:{hour:"2-digit",minute:"2-digit"},a=$e(n,e?.settings.weather_entity),l=a?n.states[a]:void 0,c=l?.attributes.temperature,u=n.config?.unit_system?.temperature??"\xB0C",d=t?.clock_color&&/^#[0-9a-f]{6}$/i.test(t.clock_color)?`color:${t.clock_color}`:"";return f`<div
    class="nf-screensaver"
    @pointerdown=${m=>{m.stopPropagation(),m.preventDefault(),r()}}
  >
    <div class="nf-ss-time" style=${d}>${o.toLocaleTimeString(i,s)}</div>
    <div class="nf-ss-date">${o.toLocaleDateString(i,{weekday:"long",day:"numeric",month:"long"})}</div>
    ${l?f`<div class="nf-ss-weather">${typeof c=="number"?`${c}${u}`:""} · ${l.state}</div>`:g}
  </div>`}function xc(n,e,t,r,i,o){return!n||!e.length&&!t?g:f`<div class="nf-cam-views" @pointerdown=${s=>s.stopPropagation()}>
    ${e.map(s=>f`<button class="nf-cam-pill" @click=${()=>r(s)}>
        <span>🎥 ${s.name}</span>
        ${t?f`<span
              class="nf-cam-del"
              title=${M(n,"close")}
              @click=${a=>{a.stopPropagation(),o(s.id)}}
            >×</span>`:g}
      </button>`)}
    ${t&&e.length<8?f`<button class="nf-cam-pill" title=${M(n,"cam_bookmark_add")} @click=${i}>+ 🎥</button>`:g}
  </div>`}function Sc(n){if(!n)return"";let e=Math.min(.8,Math.max(0,n.dim??.35)),t=n.image&&/^(https:\/\/|\/local\/|\/api\/)[^"'()\\\s]+$/.test(n.image)?n.image:null,r=n.color&&/^#[0-9a-f]{6}$/i.test(n.color)?n.color:null;return t?`;background:linear-gradient(rgba(0,0,0,${e}),rgba(0,0,0,${e})),center / cover no-repeat url("${t}")${r?` ${r}`:""}`:r?`;background:${r}`:""}function xe(n,e){if(!Li(e))return M(n,`furn_${e}`);let t=ne(e);return t?km(t,e,n?.language??navigator.language):M(n,"pack_missing_item")}function km(n,e,t){return n.name[t.split("-")[0]]??Ja(t,e)??ia(n,t)}var xm=[[/spotify/i,[30,215,96]],[/netflix/i,[229,9,20]],[/youtube/i,[255,0,51]],[/prime|amazon/i,[0,168,225]],[/disney/i,[17,60,207]],[/apple ?music|itunes/i,[250,45,72]],[/apple ?tv/i,[200,200,210]],[/plex/i,[229,160,13]],[/tidal/i,[0,255,255]],[/deezer/i,[162,56,255]],[/radio|tunein/i,[255,140,60]]],$c=[34,211,238];function jt(n){return n?xm.find(([e])=>e.test(n))?.[1]??$c:$c}function Mo(n){if(n.state==="playing"||n.state==="paused")return!0;let e=t=>typeof n.attributes[t]=="string"&&n.attributes[t]!=="";return n.state==="on"&&(e("media_title")||e("media_channel")||e("source")||e("app_name"))}var Ao=n=>n.state==="playing"||n.state==="on"&&Mo(n);function Mc(n,e){let t=[],r=new Set;for(let i of e){if(!i.entity.startsWith("media_player.")||r.has(i.entity))continue;r.add(i.entity);let o=n.states[i.entity];if(!o)continue;let s=o.attributes,a=u=>typeof s[u]=="string"?s[u]:"",l=a("app_name")||a("source")||a("app_id")||null,c=typeof s.volume_level=="number"?s.volume_level:null;t.push({entity:i.entity,name:i.name,at:i.at,playing:Ao(o),title:a("media_title")||a("media_channel")||l||"",artist:a("media_artist")||a("media_album_name")||a("media_series_title"),picture:a("entity_picture")||null,volume:c,color:jt(l),app:l,group:Array.isArray(s.group_members)?s.group_members.filter(u=>typeof u=="string"&&u!==i.entity):[],rings:i.rings??1})}return t}function Ac(n){let e=new Map(n.filter(i=>i.playing).map(i=>[i.entity,i])),t=[],r=new Set;for(let i of e.values())for(let o of i.group){let s=e.get(o),a=[i.entity,o].sort().join("|");s&&!r.has(a)&&(r.add(a),t.push([i,s]))}return t}var Sm=["off","standby","unavailable","unknown"],$m=["unavailable","unknown",""];function Pn(n,e,t,r,i=o=>!!n.states[o]){let o=je(n,e).filter(s=>s.startsWith(`${t}.`)&&i(s));for(let s of r){let a=o.find(l=>n.entities?.[l]?.translation_key===s)??o.find(l=>!n.entities?.[l]?.translation_key&&l.includes(s));if(a)return a}return null}var Mm=(n,e)=>Pn(n,e,"sensor",["now_playing"]),Yr=(n,e)=>{let t=n.states[e]?.attributes.entity_picture;return typeof t=="string"&&t?t:null},Am=(n,e)=>Pn(n,e,"image",["titled_hero_art","now_playing"],t=>Yr(n,t)!==null),Ec=["gamerpic","avatar"],Em=(n,e)=>Pn(n,e,"image",Ec,t=>Yr(n,t)!==null);function zm(n,e){let t=e?n.states[e]?.attributes:void 0,r=a=>typeof a=="string"&&a.trim()&&a!=="None"?a.trim():null,i=r(t?.achievements),o=r(t?.gamerscore),s=[i,o&&`${o} G`].filter(Boolean);return s.length?s.join(" \xB7 "):null}function Rm(n,e){let t=Date.parse(n.states[e]?.last_changed??"");return Number.isFinite(t)?t:null}function Zt(n,e){if(!e.screen_device)return!0;let t=n.states[e.screen_device];return!!t&&!Sm.includes(t.state)}function Tm(n,e){let t=n.entities?.[e]?.device_id,r=t?n.devices?.[t]:void 0;return r?.name_by_user||r?.name||""}function Eo(n,e){let t=(e.screen_sources??[]).find(a=>n.states[a]?.state==="on");if(!t)return null;let r=Mm(n,t),i=r?n.states[r].state:"",o=Am(n,t),s=Em(n,t);return{title:$m.includes(i)?"":i,picture:o?Yr(n,o):null,player:Tm(n,t),avatar:s?Yr(n,s):null,since:Rm(n,t),achievements:zm(n,r)}}function zc(n,e,t,r){let i=Zt(n,e)?Eo(n,e):null;return i&&{entity:e.id,name:t,at:r,playing:!0,title:i.title,artist:i.player,picture:i.picture,volume:null,color:jt(null),app:null,group:[],rings:e.sound_rings??1,game:{avatar:i.avatar,since:i.since,achievements:i.achievements}}}function Rc(n,e){let t=()=>!0,r=i=>[Pn(n,i,"sensor",["now_playing"],t),...["titled_hero_art","now_playing",...Ec].map(o=>Pn(n,i,"image",[o],t))];return[e.screen_device,...(e.screen_sources??[]).flatMap(i=>[i,...r(i)])]}var Dm=3;function Tc(n,e,t){let r=[];for(let i of e.floors)for(let o of i.furniture){if(!o.type.endsWith(":sprinkler"))continue;let s=t?.get(o.id)?.entity??null;!s||!se(n.states[s])||r.push({id:o.id,at:{floorId:i.id,x:o.x,y:be(i,o)+o.h,z:o.z},reach:Math.min(15,Math.max(.5,o.spray??Dm))})}return r}var Jr=n=>n&&n!=="none"?n:null,Dc=n=>Math.min(1,Math.max(0,n));function Fc(n,e){let t=new Map;for(let r of e.settings.roof?.windows??[]){let i=Ue(n,{cover:Jr(r.cover),contact:Jr(r.contact),tilt:Jr(r.tilt)},"window"),o=Jr(r.window),s=o?n.states[o]:void 0,a=i.open;if(s&&!V(s)){let l=s.attributes.current_position;a=typeof l=="number"?Dc(l/100):s.state==="open"||s.state==="opening"?1:0}t.set(r.id,{open:a,tilt:i.tilt,cover:i.cover??0})}return t}function Fm(n,e){let t=i=>Math.hypot(i.x-e.x,i.z-e.z);return n.placements.filter(i=>i.entity_id.startsWith("media_player.")&&t(i)<Math.max(2,e.w)).sort((i,o)=>t(i)-t(o))[0]?.entity_id??null}var lt=(n,e)=>typeof n[e]=="string"?n[e]:"";function Pc(n,e,t){let r=[];for(let i of e.floors)for(let o of i.furniture){if(!vn(o.type)||!Zt(n,o))continue;let s=Eo(n,o);if(s){r.push({id:o.id,furnitureId:o.id,floorId:i.id,color:jt(null),title:s.title,subtitle:s.player,app:null,picture:s.picture,playing:!0,ambilight:o.ambilight??1});continue}let a=t?.get(o.id)?.entity??null,l=a?.startsWith("media_player.")?a:Fm(i,o),c=l?n.states[l]:void 0;if(!c||!Mo(c))continue;let u=c.attributes,d=lt(u,"app_name")||lt(u,"source")||null;r.push({id:o.id,furnitureId:o.id,floorId:i.id,color:jt(d),title:lt(u,"media_title")||lt(u,"media_channel")||d||"",subtitle:lt(u,"media_artist")||lt(u,"media_series_title")||lt(u,"media_album_name"),app:d,picture:lt(u,"entity_picture")||null,playing:Ao(c),ambilight:o.ambilight??1})}return r}function Hc(n,e,t){let r=[],i=[];for(let o of e.floors){for(let s of o.furniture){let a=s.name||xe(n,s.type),l={floorId:o.id,x:s.x,z:s.z,y:be(o,s)+s.h+.15};if(vn(s.type)){if(!Zt(n,s))continue;let u=zc(n,s,a,l);if(u){i.push(u);continue}}let c=t?.get(s.id)?.entity;c?.startsWith("media_player.")&&r.push({entity:c,name:a,at:l,rings:s.sound_rings})}for(let s of o.placements)s.entity_id.startsWith("media_player.")&&r.push({entity:s.entity_id,name:s.name||B(n,s.entity_id),at:{floorId:o.id,x:s.x,z:s.z,y:(s.y??1.1)+.15},rings:s.sound_rings})}return[...Mc(n,r),...i]}function Ic(n){let e=n.states["sun.sun"]?.attributes;return typeof e?.elevation=="number"&&typeof e.azimuth=="number"?{elevation:e.elevation,azimuth:e.azimuth}:null}function Cc(n,e){return(n===null?0:Dc((n+4)/16))*(1-.45*e)}var Qr=new Set(["contact_lost","unlocked_night","own"]);function Pm(n,e){let t=n.states[e.entity];if(!t||["unavailable","unknown"].includes(t.state))return!1;let r=(e.state??"on").trim(),i=/^([<>])\s*(-?\d+(?:[.,]\d+)?)$/.exec(r);if(i){let o=Number(t.state),s=Number(i[2].replace(",","."));return Number.isFinite(o)&&(i[1]==="<"?o<s:o>s)}return r.split(",").map(o=>o.trim().toLowerCase()).filter(Boolean).includes(String(t.state).toLowerCase())}var Hm=600*1e3,Im=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Cm=new Map([["smoke","smoke"],["gas","gas"],["carbon_monoxide","co"],["moisture","water"]]),Nc=(n,e)=>{if(e.startsWith("binary_sensor."))return Cm.get(String(n.states[e]?.attributes.device_class))};function Nm(n,e){let t=new Set,r=[];for(let i of n.floors)for(let o of i.openings){let s=e.get(o.id);for(let a of s?[s.contact,s.contact2,s.tilt,s.tilt2]:[])!a||t.has(a)||(t.add(a),r.push({floorId:i.id,roomId:o.room_id,entity:a}))}return r}function Wc(n,e,t,r){let i=[];for(let a of e.floors)for(let l of a.rooms){let c=Q(n,l).filter(u=>Nc(n,u));c.length>0&&i.push({floorId:a.id,roomId:l.id,sensors:c})}let o=e.settings.rain_warning!==!1,s=e.settings.rain_sensor;return{rooms:i,alarms:Object.keys(n.states).filter(a=>a.startsWith("alarm_control_panel.")),weather:o?$e(n,t??e.settings.weather_entity):null,rain:o&&s&&s!=="none"?s:null,rainInverted:!!e.settings.rain_sensor_inverted,outage:e.settings.outage_sensor&&e.settings.outage_sensor!=="none"?e.settings.outage_sensor:null,contacts:e.settings.contact_warning&&r?Nm(e,r):[],own:(e.settings.own_alerts??[]).filter(a=>a.entity),locks:e.settings.night_lock_warning?e.floors.flatMap(a=>a.openings.filter(l=>l.lock&&l.lock!=="none").map(l=>({entity:l.lock,roomId:l.room_id,floorId:a.id}))):[]}}function Lc(n){let e=n.rooms.flatMap(t=>t.sensors).concat(n.alarms);for(let t of[n.weather,n.rain,n.outage])t&&e.push(t);for(let t of n.contacts??[])e.push(t.entity);for(let t of n.own??[])e.push(t.entity);for(let t of n.locks??[])e.push(t.entity);return e}function Wm(n,e){let t=[];for(let{floorId:r,roomId:i,sensors:o}of e.rooms)for(let s of o){let a=Nc(n,s);a&&n.states[s]?.state==="on"&&t.push({kind:a,entity:s,roomId:i,floorId:r})}return t}var Lm=(n,e)=>{let t=Ue(n,e,"window");return Math.max(t.open,t.tilt,t.open2,t.tilt2)>=.5};function Om(n,e){if(e.rain){let r=n.states[e.rain];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=Number(r.state),o=Number.isFinite(i)?i>0:r.state==="on"||/rain|regen|wet|nass/i.test(r.state);return e.rainInverted?!o:o}let t=e.weather?n.states[e.weather]?.state:void 0;return!!t&&Im.has(t)}var Bm=/^(off_grid|off-grid|outage|grid_down|grid_lost|islanding|island|backup|no_grid|stromausfall|netzausfall|inselbetrieb)$/i;function Vm(n,e){let t=e?n.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return!1;if(e.startsWith("binary_sensor.")){let i=String(t.attributes.device_class??"");return i==="power"||i==="plug"?t.state==="off":t.state==="on"}let r=Number(t.state);return Number.isFinite(r)?t.attributes.unit_of_measurement==="V"&&r<50:Bm.test(t.state.trim())}function Gm(n,e,t,r){if(!Om(n,t))return[];let i=[];for(let o of e.floors)for(let s of o.openings){let a=r.get(s.id);s.type!=="window"||s.rain_warning===!1||!a||!Lm(n,a)||i.push({kind:"window_rain",entity:a.contact??a.tilt??a.contact2??s.id,roomId:s.room_id,floorId:o.id})}return i}var Km=new Set(["door","window","opening","garage_door","motion","occupancy","presence","vibration","tamper","sound","glass"]);function Um(n,e){let t=n.states[e],r=t?.attributes.open_sensors;if(r&&typeof r=="object"){let a=Object.keys(r)[0];if(a)return a}let i=Date.parse(t?.last_changed??"");if(!Number.isFinite(i))return null;let o=null,s=12e4;for(let a of Object.values(n.states)){if(!a.entity_id.startsWith("binary_sensor.")||!Km.has(String(a.attributes.device_class??""))||a.state!=="on")continue;let l=Date.parse(a.last_changed??""),c=i-l;Number.isFinite(l)&&c>=-5e3&&Math.abs(c)<s&&(s=Math.abs(c),o=a.entity_id)}return o}function qm(n,e,t){for(let i of e.floors){let o=i.placements.find(a=>a.entity_id===t),s=o?i.rooms.find(a=>a.points.length>=3&&O([o.x,o.z],a.points)):void 0;if(s)return{roomId:s.id,floorId:i.id}}let r=ot(n,t);for(let i of e.floors){let o=r?i.rooms.find(s=>s.area_id===r):void 0;if(o)return{roomId:o.id,floorId:i.id}}return null}function jm(n,e,t){let r=[];for(let i of e.alarms){let o=n.states[i]?.state;if(o==="triggered"){let s=Um(n,i),a=s?qm(n,t,s):null;r.push({kind:"alarm",entity:i,roomId:a?.roomId??null,floorId:a?.floorId??null,...s?{cause:s}:{}})}o==="pending"&&r.push({kind:"alarm_pending",entity:i,roomId:null,floorId:null})}return r}function Zm(n,e,t){let r=n.states[e];if(r?.state!=="unavailable")return!1;let i=Date.parse(r.last_changed??"");return!Number.isFinite(i)||t-i>=Hm}function Oc(n,e){return(e.contacts??[]).some(t=>n.states[t.entity]?.state==="unavailable")}function Ym(n,e,t){return(e.contacts??[]).filter(r=>Zm(n,r.entity,t)).map(r=>({kind:"contact_lost",entity:r.entity,roomId:r.roomId,floorId:r.floorId}))}function zo(n,e,t,r,i=Date.now()){let o=t.outage&&Vm(n,t.outage)?[{kind:"power_outage",entity:t.outage,roomId:null,floorId:null}]:[],s=(t.own??[]).filter(u=>Pm(n,u)).map(u=>{let d=u.room_id?e.floors.find(m=>m.rooms.some(p=>p.id===u.room_id)):void 0;return{kind:"own",entity:u.entity,roomId:d?u.room_id:null,floorId:d?.id??null,text:u.text,...u.color?{color:u.color}:{},...u.tap?{tap:u.tap}:{}}}),a=new Date(i).getHours(),c=a>=22||a<6?(t.locks??[]).filter(u=>n.states[u.entity]?.state==="unlocked").map(u=>({kind:"unlocked_night",entity:u.entity,roomId:u.roomId,floorId:u.floorId})):[];return[...Wm(n,t),...Gm(n,e,t,r),...jm(n,t,e),...o,...Ym(n,t,i),...c,...s]}var Jm={smoke:[1,.2,.25],gas:[1,.2,.25],co:[1,.2,.25],alarm:[1,.2,.25],water:[.2,.6,1],window_rain:[.35,.72,1],alarm_pending:[1,.62,.2],power_outage:[1,.62,.2],contact_lost:[1,.62,.2],unlocked_night:[1,.62,.2],own:[1,.62,.2]},Bc=n=>Jm[n];function Ro(n,e,t){let r=n?B(n,t.entity):t.entity,i=t.kind==="own"?t.text||r:t.cause?M(n,"alert_alarm_by",{name:r,cause:n?B(n,t.cause):t.cause}):M(n,`alert_${t.kind}`,{name:r}),o=t.roomId===null?void 0:e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId);return o?`${o.name} \xB7 ${i}`:i}var Qm=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]),Xr=n=>n&&n!=="none"?n:null,Vc=n=>n.trim().toLowerCase();function Xm(n,e){let t=Vc(e);if(!t||!n.types)return null;let r=n.types.map(s=>({word:Vc(s.state),vehicle:s.vehicle})),i=r.find(s=>s.word===t),o=r.find(s=>s.word!==""&&t.includes(s.word));return(i??o)?.vehicle??null}function To(n,e){if(e.type!=="parking")return null;let t=Xr(e.entity);if(t!==null){let o=n.states[t]?.state;if(o===void 0||!Qm.has(o.toLowerCase()))return null}let r=e.vehicle??null,i=Xr(e.type_entity);return i!==null&&e.types&&e.types.length>0&&(r=Xm(e,n.states[i]?.state??"")??r),r!==null&&ne(r)?r:null}function Do(n,e){let t=new Map;for(let r of e.floors.flatMap(i=>i.furniture)){let i=To(n,r);i&&t.set(r.id,i)}return t}function Gc(n){let e=[];for(let t of n.flatMap(r=>r.furniture))t.type==="parking"&&e.push(Xr(t.entity),Xr(t.type_entity));return e.filter(t=>t!==null)}function Kc(n,e){let t=ne(e);if(!t)return null;let r=n.scale??1,[i,o,s]=t.size.map(a=>a*r);return{id:`${n.id}:vehicle`,type:e,x:n.x,z:n.z,rotation:n.rotation,w:i,d:o,h:s,variant:n.variant??null,entity:null,power:null}}var Hn=n=>Number(n);function Cn(n){if(Array.isArray(n)){let[o,s]=[Hn(n[0]),Hn(n[1])];return Number.isFinite(o)&&Number.isFinite(s)?[o,s]:null}if(!n||typeof n!="object")return null;let{x:e,y:t}=n,[r,i]=[Hn(e),Hn(t)];return Number.isFinite(r)&&Number.isFinite(i)?[r,i]:null}function Uc(n){return n?Cn(n.charger)??Cn(n.charger_position):null}function Fo(n){if(!n)return null;let e=n.map_x_mm!==void 0&&n.map_y_mm!==void 0?Cn({x:n.map_x_mm,y:n.map_y_mm}):null;return Cn(n.vacuum_position)??e}function ei(n){for(let[e,t]of Object.entries(n.states))if(e.startsWith("camera.")&&(Fo(t.attributes)??Uc(t.attributes)))return e;for(let[e,t]of Object.entries(n.states))if(e.startsWith("device_tracker.")&&Fo(t.attributes))return e;return null}var ef=n=>Array.isArray(n)?typeof n[0]=="number":!!n&&typeof n=="object",In=(n,e)=>e?[n[0],-n[1]]:n;function tf(n){if(!n)return null;let e=n.mirror===!0,[t,r]=In(n.ga,e),[i,o]=In(n.gb,e),[s,a]=n.a,[l,c]=n.b,[u,d]=[i-t,o-r],[m,p]=[l-s,c-a],h=Math.hypot(u,d),w=Math.hypot(m,p);if(!(h>1e-6)||!(w>1e-6))return null;let _=w/h,v=Math.atan2(p,m)-Math.atan2(d,u),[$,x]=[Math.cos(v),Math.sin(v)];return y=>{let b=In(y,e),[z,F]=[b[0]-t,b[1]-r];return[s+_*(z*$-F*x),a+_*(z*x+F*$)]}}function nf(n){if(!n)return null;let e=n.mirror===!0,[t,r]=In(n.ga,e),[i,o]=In(n.gb,e),s=Math.atan2(n.b[1]-n.a[1],n.b[0]-n.a[0])-Math.atan2(o-r,i-t);return Number.isFinite(s)?s:null}function qc(n,e,t){if(!e)return null;let r=n.states[e]?.attributes;if(!r)return null;let i=tf(t)??(h=>h),o=nf(t)??0,s=t?.mirror===!0?-1:1,a=r.vacuum_position,l=Fo(r),c=l?(()=>{let[h,w]=i(l),_=Hn(a?.a)*s;if(!Number.isFinite(_))return{x:h,z:w,heading:0};let v=_*Math.PI/180+o;return{x:h,z:w,heading:Math.atan2(Math.cos(v),Math.sin(v))}})():null,u=Uc(r),d=Array.isArray(r.path)?r.path:[],m=d.length>0&&ef(d[0])?[d]:d,p=[];for(let h of m){let w=[];for(let _ of Array.isArray(h)?h:[]){let v=Cn(_);v&&w.push(i(v))}w.length>1&&p.push(w)}return!c&&!u&&!p.length?null:{pose:c,charger:u?i(u):null,path:p}}var rf=n=>!!n&&n!=="none",Po=n=>n.floors.flatMap(e=>e.rooms),of=n=>n.floors.flatMap(e=>e.furniture);function sf(n){return[...n.values()].flatMap(e=>[e.cover,e.cover2,e.contact,e.tilt,e.contact2,e.tilt2,e.position,e.tiltAngle])}function af(n){let{hass:e,building:t,furnitureLinks:r}=n,i=of(t);return[...[...r.values()].flatMap(o=>[o.entity,o.power]),...i.flatMap(o=>[o.state_entity,o.state_entity2,o.color_entity,...o.gang_entities??[],...o.extra_lights??[],o.cover_entity,o.care_entity,o.room_sensor,o.show_when?.entity,o.picture&&/^[a-z_]+\.[a-z0-9_]+$/.test(o.picture)?o.picture:null]),...i.filter(o=>o.type==="washer"||o.type==="dryer"||o.type==="dishwasher").flatMap(o=>je(e,r.get(o.id)?.entity??r.get(o.id)?.power).filter(s=>s.startsWith("sensor."))),...i.flatMap(o=>Rc(e,o)),...i.flatMap(o=>[o.door_left,o.door_right,o.soc,o.status,o.charge,o.export,o.temp_entity,o.temp_entity2,...(o.temps??[]).map(s=>s.entity)]),...i.filter(o=>o.type==="robot_vacuum").map(o=>Ar(e,r.get(o.id)?.entity??null,o.room_sensor)),...i.some(o=>o.type==="robot_vacuum")?[ei(e)]:[],...i.flatMap(o=>(o.pictures??[]).flatMap(s=>[s.entity,...s.image.startsWith("camera:")?[s.image.slice(7)]:[]]))]}function lf(n){let e=n.settings.roof;return[...(e?.windows??[]).flatMap(t=>[t.cover,t.contact,t.tilt]),...(e?.solar??[]).map(t=>t.entity),...(e?.strings??[]).map(t=>t.entity)].filter(rf)}function jc(n){let{hass:e,building:t}=n,r=nl(t),i=t.energy,o=Po(t).flatMap(c=>Q(e,c).filter(u=>L(u)==="light")),s=n.needsRoomSensors?Po(t).flatMap(c=>Q(e,c).filter(u=>u.startsWith("sensor.")||u.startsWith("climate."))):[],a=new Map(t.floors.flatMap(c=>c.placements.map(u=>[u.entity_id,u.plugin]))),l=[...r,...sf(n.openingLinks),...r.map(c=>Ye(e,c)),...r.flatMap(c=>e.states[c]?qs({hass:e,entityId:c,state:e.states[c]},a.get(c)??void 0):[]),...af(n),...lf(t),i.grid,i.solar,i.battery,i.battery_soc,i.consumption,i.tariff,i.gas,i.water,...t.presence.flatMap(c=>[c.person,c.sensor]),...o,...Po(t).map(c=>c.floor_heating),...t.floors.flatMap(c=>(c.outdoor??[]).flatMap(u=>[u.temp_entity,u.pump_entity])),...s,...n.alertSources?Lc(n.alertSources):[],...Gc(t.floors),...Wa(e,t.floors),t.settings.alarm_ring?.entity,t.settings.alarm_ring?.enable_entity,t.settings.tablet_ui?.pip_trigger,t.settings.tablet_ui?.price_entity,...(t.settings.quick_controls??[]).flatMap(c=>c.entities),...t.settings.status_entities??[],$e(e,n.weatherEntityId??t.settings.weather_entity),"sun.sun"];return[...new Set(l.filter(c=>!!c))]}function Zc(n,e){return e==="area"||e==="plan"||e==="off"?e:n==="plan"||n==="off"?n:"area"}function Yc(n,e,t,r,i,o){if(o==="off")return[];let s=new Set(o==="area"?Q(n,t).filter(a=>L(a)==="light"):[]);for(let a of e.placements)L(a.entity_id)==="light"&&O([a.x,a.z],t.points)&&s.add(a.entity_id);for(let a of e.furniture){let l=r.get(a.id)?.entity;l&&mr(a.type)&&O([a.x,a.z],t.points)&&s.add(l)}return[...s].filter(a=>!i.has(a))}function Jc(n,e){let t=n.floors.flatMap(s=>s.furniture.filter(a=>a.tap?.action).map(a=>({floor:s,item:a}))),r=new Set(t.map(({item:s})=>s.id)),i=new Map(e.filter(s=>s.furnitureId&&r.has(s.furnitureId)).map(s=>[s.id,s.furnitureId])),o=new Set(i.values());return{pins:i,bare:t.filter(({item:s})=>!o.has(s.id))}}var Qc="https://tile.openstreetmap.org/{z}/{x}/{y}.png",cf="\xA9 OpenStreetMap contributors";var Ly=Math.PI/180;var uf=n=>n.url&&n.url.startsWith("https://")?n.url:Qc;var Xc=n=>!!n&&n.on===!0&&Number.isFinite(n.lat)&&Number.isFinite(n.lon);function Ho(n){let e=uf(n);if(e===Qc)return{text:cf,href:"https://www.openstreetmap.org/copyright"};try{let t=new URL(e.replace(/\{[a-z]\}/g,"a")).host;return{text:`Map: ${t}`,href:`https://${t}/`}}catch{return{text:"Map",href:"#"}}}var kt=["neon","blueprint","day","own","real","nordic","warm_evening","minimal"],df=["dark","light","lines","background","glass"],tu={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22",glass:""};function Io(n){let e=/^#?([0-9a-f]{6})$/i.exec(n?.trim()??"");if(!e)return null;let t=Number.parseInt(e[1],16);return[t>>16&255,t>>8&255,t&255]}function nu(...n){let e={...tu};for(let t of n)for(let r of df)Io(t?.[r])&&(e[r]=t[r]);return e}function Co(n,e){if(n!=="own")return eu[n]??eu.neon;let t=Io(e.background)??Io(tu.background),r=i=>t.map(o=>Math.round(o*i));return{night:[r(.9),r(.62)],day:[t,r(.72)]}}var ti=["auto",...kt];function ni(n,e,t="day",r="neon"){return n!=="auto"?n??"neon":e==="above_horizon"?t:r}var eu={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]},real:{night:[[92,110,142],[52,64,88]],day:[[150,190,232],[214,228,240]]},nordic:{night:[[196,202,212],[162,170,182]],day:[[246,243,236],[220,214,202]]},warm_evening:{night:[[26,22,19],[14,12,10]],day:[[44,38,32],[24,20,17]]},minimal:{night:[[182,184,188],[146,148,154]],day:[[238,236,231],[210,206,198]]}};function ru(n,e){let t=new Map;for(let r of e.floors)for(let i of r.outdoor??[])for(let o of i.gates??[]){let s=o.entity?n.states[o.entity]?.state:void 0,a=o.contact?n.states[o.contact]?.state:void 0;if(s===void 0&&a===void 0)continue;let l=s==="open"||s==="opening"||s==="on"||s==="unlocked"||s==="unlocking";t.set(o.id,l||a==="on")}return t}var hf={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.4},cloudy:{cloud:.85},fog:{fog:.9,cloud:.5},rainy:{rain:.5,cloud:.8},pouring:{rain:1,cloud:1,wind:.3},"lightning-rainy":{rain:.75,cloud:1,lightning:!0,wind:.35},lightning:{cloud:.85,lightning:!0},hail:{hail:.8,rain:.3,cloud:1},snowy:{snow:.7,cloud:.85},"snowy-rainy":{snow:.45,rain:.3,cloud:.95},windy:{wind:.7,cloud:.25},"windy-variant":{wind:.7,cloud:.65},exceptional:{cloud:.6,wind:.5}},Yt=n=>typeof n=="number"&&Number.isFinite(n)?n:typeof n=="string"&&n.trim()!==""&&Number.isFinite(Number(n))?Number(n):null,ri=n=>Math.min(1,Math.max(0,n));function iu(n,e){switch(e){case"m/s":return n*3.6;case"mph":return n*1.609;case"kn":return n*1.852;case"ft/s":return n*1.097;default:return n}}function pf(n){let e=Yt(n);if(e!==null)return(e%360+360)%360;if(typeof n!="string")return null;let r=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].indexOf(n.trim().toUpperCase().replace("O","E"));return r<0?null:r*22.5}function ou(n,e){let t=e?n.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let r=hf[t.state];if(!r)return null;let i=t.attributes,o={rain:r.rain??0,snow:r.snow??0,hail:r.hail??0,fog:r.fog??0,cloud:r.cloud??0,wind:r.wind??0,windFrom:pf(i.wind_bearing),lightning:r.lightning??!1},s=Yt(i.cloud_coverage);s!==null&&(o.cloud=Math.max(ri(s/100),o.rain||o.snow?.6:0));let a=Yt(i.wind_speed);a!==null&&(o.wind=Math.max(o.wind,ri(iu(a,i.wind_speed_unit)/70)));let l=Yt(i.wind_gust_speed);l!==null&&(o.wind=Math.max(o.wind,ri(iu(l,i.wind_speed_unit)/100)));let c=Yt(i.precipitation);if(c!==null&&c>0&&(o.rain>0||o.snow>0)){let p=ri(.25+c/8);o.rain>0&&(o.rain=Math.max(o.rain*.6,p)),o.snow>0&&(o.snow=Math.max(o.snow*.6,p))}let u=Yt(i.temperature),d=i.temperature_unit??n.config?.unit_system?.temperature,m=u===null?null:d==="\xB0F"?(u-32)*5/9:u;return m!==null&&m<=.5&&o.rain>0&&o.snow===0&&(o.snow=o.rain*.6,o.rain*=.4),o}function su(n,e){let t=e==null||!Number.isFinite(e)?1:Math.min(1,Math.max(.1,e));return t===1?n:{...n,rain:n.rain*t,hail:n.hail*t,snow:n.snow*t}}function au(n,e){let t=new Set(e??["rain","snow","clouds","lightning","sky"]);return{...n,rain:t.has("rain")?n.rain:0,hail:t.has("rain")?n.hail:0,snow:t.has("snow")?n.snow:0,fog:t.has("fog")?n.fog:0,cloud:t.has("clouds")?n.cloud:0,lightning:t.has("lightning")&&n.lightning}}var ii=Math.PI/180,Je=n=>Math.tan(Math.min(80,Math.max(0,n))*ii);function oi(n){return{x0:Math.min(n.x0,n.x1),x1:Math.max(n.x0,n.x1),z0:Math.min(n.z0,n.z1),z1:Math.max(n.z0,n.z1)}}function lu(n){if(!n.rotation)return null;let e=n.rotation*ii;return{cx:(n.x0+n.x1)/2,cz:(n.z0+n.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function mf(n,e){let t=lu(n);if(!t)return e;let[r,i]=[e[0]-t.cx,e[1]-t.cz];return[t.cx+r*t.c-i*t.sn,t.cz+r*t.sn+i*t.c]}function cu(n,e,t){let r=lu(n);if(!r)return[e,t];let[i,o]=[e-r.cx,t-r.cz];return[r.cx+i*r.c+o*r.sn,r.cz-i*r.sn+o*r.c]}function Te(n){let{x0:e,x1:t,z0:r,z1:i}=oi(n),o=s=>mf(n,s);return n.axis==="x"?{u0:e,u1:t,w:i-r,at:(s,a)=>o([s,n.flip?i-a:r+a])}:{u0:r,u1:i,w:t-e,at:(s,a)=>o([n.flip?t-a:e+a,s])}}function Jt(n,e,t){let{x0:r,x1:i,z0:o,z1:s}=oi(n),[a,l]=cu(n,e,t);return n.axis==="x"?[a,n.flip?s-l:l-o]:[l,n.flip?i-a:a-r]}var Nn=Math.tan(30*ii);function Wn(n,e,t,r,i){let o=Math.min(n*.3,r>1e-6?2.4/r:n*.3),s=Math.min(n*.3,i>1e-6?2.4/i:n*.3),a=e+o*r,l=t+s*i,c=Math.min(n-s,Math.max(o,(l-a+Nn*(n-s+o))/(2*Nn))),u=a+(c-o)*Nn;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:m=>m<=o?e+m*r:m<=c?a+(m-o)*Nn:m<=n-s?l+(n-s-m)*Nn:t+(n-m)*i}}function De(n){let e=Te(n).w,[t,r]=[n.eave_a,n.eave_b],[i,o]=[Je(n.pitch_a),Je(n.pitch_b)];switch(n.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*i,y:s=>t+s*i};case"mansard":{let s=Wn(e,t,r,i,o);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=i+o>1e-6?Math.min(e,Math.max(0,(r-t+e*o)/(i+o))):e/2;return{vr:s,rh:t+s*i,y:a=>a<=s?t+a*i:r+(e-a)*o}}}}function Qt(n,e){let t=Te(n),r=De(n),i=t.w,[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(v,$)=>[v,$,r.y($)],u=c(a,-o),d=c(l,-o),m=c(l,i+s),p=c(a,i+s),[h,w]=[Je(n.pitch_a),Je(n.pitch_b)],_=v=>[v,r.vr,r.rh];if(n.ends&&(n.shape==="gable"||n.shape==="hip"||n.shape==="halfhip")){let v=(t.u1-t.u0)/2,$=Math.min(v,Math.min(r.vr,i-r.vr)||i/2),x=Math.min(r.y(0),r.y(i)),y=x+(r.rh-x)*Math.min(.9,Math.max(.2,n.halfhip??.55)),b=h>1e-6?Math.min(r.vr,(y-n.eave_a)/h):r.vr,z=w>1e-6?Math.max(r.vr,i-(y-n.eave_b)/w):r.vr,F=Math.min(v-.1,(r.rh-y)/Math.max(.2,h)),P=[[0,r.y(0)],[r.vr,r.rh],[i,r.y(i)]],E=[[0,r.y(0)],[b,y],[z,y],[i,r.y(i)]],W=(C,j,oe)=>{if(C==="hip")return{upA:[],upB:[],ridge:_(j===a?t.u0+$*oe:t.u1-$*oe),profile:null};if(C==="halfhip"){let H=_(j===a?t.u0+F:t.u1-F);return{upA:[[j,b,y]],upB:[[j,z,y]],ridge:H,profile:E}}return{upA:[],upB:[],ridge:_(j),profile:P}},S=W(n.ends[0],a,1),D=W(n.ends[1],l,1),G=[[u,d,...D.upA,D.ridge,S.ridge,...[...S.upA].reverse()],[S.ridge,D.ridge,...[...D.upB].reverse(),m,p,...S.upB]],T=[[S.ridge,D.ridge]];for(let[C,j,oe]of[[S,u,p],[D,d,m]])C.profile===null?(G.push(C===S?[p,u,C.ridge]:[d,m,C.ridge]),T.push([j,C.ridge],[oe,C.ridge])):C.upA.length&&(G.push(C===S?[C.upB[0],C.upA[0],C.ridge]:[C.upA[0],C.upB[0],C.ridge]),T.push([C.upA[0],C.ridge],[C.upB[0],C.ridge]));let K=C=>C.profile===null?[]:C.upA.length?[C.upA[0],C.upB[0]]:[C.ridge],Y=[u,d,...K(D),m,p,...[...K(S)].reverse()];return{faces:G,rim:Y,ridges:T,gable:P,endProfiles:[S.profile,D.profile]}}switch(n.shape){case"pent":return{faces:[[u,d,m,p]],rim:[u,d,m,p],ridges:[[m,p]],gable:[[0,r.y(0)],[i,r.y(i)]]};case"hip":case"pyramid":{let v=(t.u1-t.u0)/2,$=n.shape==="pyramid"?v:Math.min(v,Math.min(r.vr,i-r.vr)||i/2),x=_(t.u0+$),y=_(t.u1-$);return n.shape==="pyramid"?{faces:[[u,d,x],[d,m,x],[m,p,x],[p,u,x]],rim:[u,d,m,p],ridges:[[u,x],[p,x],[d,x],[m,x]],gable:null}:{faces:[[u,d,y,x],[x,y,m,p],[p,u,x],[d,m,y]],rim:[u,d,m,p],ridges:[[x,y],[u,x],[p,x],[d,y],[m,y]],gable:null}}case"halfhip":{let v=Math.min(r.y(0),r.y(i)),$=v+(r.rh-v)*Math.min(.9,Math.max(.2,n.halfhip??.55)),x=h>1e-6?Math.min(r.vr,($-n.eave_a)/h):r.vr,y=w>1e-6?Math.max(r.vr,i-($-n.eave_b)/w):r.vr,b=Math.min((t.u1-t.u0)/2-.1,(r.rh-$)/Math.max(.2,h)),z=_(t.u0+b),F=_(t.u1-b),P=[a,x,$],E=[a,y,$],W=[l,x,$],S=[l,y,$];return{faces:[[u,d,W,F,z,P],[z,F,S,m,p,E],[E,P,z],[W,S,F]],rim:[u,d,W,S,m,p,E,P],ridges:[[z,F],[P,z],[E,z],[W,F],[S,F]],gable:[[0,r.y(0)],[x,$],[y,$],[i,r.y(i)]]}}case"mansard":{let v=Wn(i,n.eave_a,n.eave_b,h,w),$=[a,v.vla,v.yla],x=[l,v.vla,v.yla],y=[a,i-v.vlb,v.ylb],b=[l,i-v.vlb,v.ylb],z=[a,v.vr,v.rh],F=[l,v.vr,v.rh];return{faces:[[u,d,x,$],[$,x,F,z],[z,F,b,y],[y,b,m,p]],rim:[u,d,x,F,b,m,p,y,z,$],ridges:[[z,F],[$,x],[y,b]],gable:[[0,r.y(0)],[v.vla,v.yla],[v.vr,v.rh],[i-v.vlb,v.ylb],[i,r.y(i)]]}}default:{let v=_(a),$=_(l);return{faces:[[u,d,$,v],[v,$,m,p]],rim:[u,d,$,m,p,v],ridges:[[v,$]],gable:[[0,r.y(0)],[r.vr,r.rh],[i,r.y(i)]]}}}}function Xt(n,e,t){let r=null;for(let i of n.faces){if(!O([e,t],i.map(([m,p])=>[m,p])))continue;let[o,s]=i,a=i.slice(2).find(m=>Math.abs((s[0]-o[0])*(m[1]-o[1])-(s[1]-o[1])*(m[0]-o[0]))>1e-9);if(!a)continue;let l=[s[0]-o[0],s[2]-o[2],s[1]-o[1]],c=[a[0]-o[0],a[2]-o[2],a[1]-o[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let d=o[2]-(u[0]*(e-o[0])+u[2]*(t-o[1]))/u[1];r=r===null?d:Math.min(r,d)}return r}function No(n,e,t){let r=Te(e),i=n.floors.flatMap(d=>d.rooms.filter(m=>m.points.length>=3&&d.elevation+d.height>e.base+.05)),o=d=>d.some(m=>i.some(p=>O(m,p.points))),s=.35,a=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),l=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:t,u=(d,m)=>{let p=e.overhang_sides?.[d];return typeof p=="number"&&Number.isFinite(p)?Math.min(2,Math.max(0,p)):m};return{a:u("a",c(o(a.map(d=>r.at(d,-s))))),b:u("b",c(o(a.map(d=>r.at(d,r.w+s))))),u0:u("u0",c(o(l.map(d=>r.at(r.u0-s,d))))),u1:u("u1",c(o(l.map(d=>r.at(r.u1+s,d)))))}}var si=n=>Math.abs((n.x1-n.x0)*(n.z1-n.z0)),uu=n=>n.shape==="flat"||n.shape==="parapet";function ai(n,e){let[t,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return n.filter(o=>{if(o===e||o.dormer||o.open||uu(o)||si(o)<si(e)*1.5)return!1;let s=oi(o);return t>=s.x0&&t<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((o,s)=>o===null||si(s)<si(o)?s:o,null)}function gf(n,e){let t=Qt(n,{u0:0,u1:0,a:0,b:0}),r=De(n);return i=>{let[o,s]=e.at(i,e.w/2),[a,l]=Jt(n,o,s);return Xt(t,a,l)??r.y(l)}}function Wo(n,e){if(uu(e))return e;let t=Te(e),r=De(e).rh,i=gf(n,t),o=i(t.u0)<=i(t.u1),[s,a]=o?[t.u0,t.u1]:[t.u1,t.u0],l=o?1:-1,c=a;for(let m=.5;m<Math.abs(a-s);m+=.05)if(i(s+l*m)>=r-.02){c=s+l*m;break}if(Math.abs(c-a)<.05)return e;let u={...e},d=a===t.u1;return e.axis==="x"?u[d?"x1":"x0"]=c:u[d?"z1":"z0"]=c,u}var Fe=Math.PI/180,Qe=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]];var en=n=>Math.hypot(n[0],n[1],n[2]),xt=n=>{let e=en(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},du=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]];var pu=.25;function mu(n,e,t,r,i,o,s){let a=i-t>=o-r,l=a?i-t:o-r;return{key:`${n}:top`,section:e,side:"top",flat:!0,o:[t,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?o-r:i-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function fu(n,e){let t=xt(du(n,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var gu=n=>{let e=xt([-n[0],0,-n[2]]);return[e[0],e[2]]};function Xe(n,e,t,r,i,o,s,a){let l=xt(Qe(i,r)),c=xt(Qe(o,r));return{key:n,section:e,side:t,flat:!1,o:r,eu:l,es:c,n:fu(l,c),lu:en(Qe(i,r)),ls:en(Qe(o,r)),pitch:s,span:a,facing:gu(c)}}function hu(n,e,t,r,i,o){let s=en(Qe(i,r));if(s<.3)return null;let a=xt(Qe(i,r)),l=Qe(o,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=en(u);if(d<.3)return null;let m=xt(u),p=h=>{let w=Math.min(1,Math.max(0,h/d));return[c*w,s-(s-c)*w]};return{key:n,section:e,side:t,flat:!1,o:r,eu:a,es:m,n:fu(a,m),lu:s,ls:d,pitch:Math.atan2(m[1],Math.hypot(m[0],m[2]))/Fe,span:p,facing:gu(m)}}function bf(n,e){let t=Te(n),r=De(n),i=($,x,y)=>{let[b,z]=t.at($,x);return[b,y,z]},[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=r.y(-o),d=r.y(t.w+s);if(n.shape==="flat"||n.shape==="parapet"){let[$,x]=[t.at(a,-o),t.at(l,t.w+s)];return[mu(n.id,n.id,Math.min($[0],x[0]),Math.min($[1],x[1]),Math.max($[0],x[0]),Math.max($[1],x[1]),n.eave_a+pu)]}if(n.shape==="pent")return[Xe(`${n.id}:a`,n.id,"a",i(a,-o,u),i(l,-o,u),i(a,t.w+s,d),n.pitch_a,()=>[0,c])];if(n.shape==="mansard")return vf(n,t,a,l,o,s);let m=n.shape==="hip"||n.shape==="pyramid",p=(t.u1-t.u0)/2,h=n.shape==="pyramid"?p:m?Math.min(p,Math.min(r.vr,t.w-r.vr)||t.w/2):0,w=m?t.u0+h-a:0,_=m?l-(t.u1-h):0,v=[];if(r.vr>.3){let $=Math.hypot(r.vr+o,r.rh-u);v.push(Xe(`${n.id}:a`,n.id,"a",i(a,-o,u),i(l,-o,u),i(a,r.vr,r.rh),n.pitch_a,x=>[w*(x/$),c-_*(x/$)]))}if(t.w-r.vr>.3){let $=Math.hypot(t.w+s-r.vr,r.rh-d);v.push(Xe(`${n.id}:b`,n.id,"b",i(l,t.w+s,d),i(a,t.w+s,d),i(l,r.vr,r.rh),n.pitch_b,x=>[_*(x/$),c-w*(x/$)]))}if(m){let $=hu(`${n.id}:c`,n.id,"c",i(a,t.w+s,d),i(a,-o,u),i(t.u0+h,r.vr,r.rh)),x=hu(`${n.id}:d`,n.id,"d",i(l,-o,u),i(l,t.w+s,d),i(t.u1-h,r.vr,r.rh));v.push(...[$,x].filter(y=>y!==null))}return v}function wf(n,e){if(!e.dormer||e.shape!=="gable")return[];let t=ai(n,e);if(!t)return[];let r=Wo(t,e),i=Te(r),o=De(r),s=Qt(t,{u0:0,u1:0,a:0,b:0}),a=D=>{let[G,T]=i.at(D,i.w/2),[K,Y]=Jt(t,G,T);return Xt(s,K,Y)??De(t).y(Y)},l=a(i.u0)<=a(i.u1),c=l?i.u0:i.u1,[u,d]=[i.at(0,0),i.at(1,0)],[m,p]=[d[0]-u[0],d[1]-u[1]],h=Math.hypot(m,p)||1,w=l?[-m/h,0,-p/h]:[m/h,0,p/h],_=[-w[2],0,w[0]],[v,$]=[i.at(c,0),i.at(c,1)],x=($[0]-v[0])*_[0]+($[1]-v[1])*_[2]>0?0:i.w,y=Math.min(r.base,o.y(0)),b=o.y(0)-y,z=i.w,F=o.rh-y;if(F<.3||z<.5)return[];let P=Math.abs(o.vr-x),[E,W]=i.at(c,x),S=D=>{if(D<=b)return[0,z];let G=Math.min(1,Math.max(0,(D-b)/Math.max(.01,F-b)));return[P*G,z-(z-P)*G]};return[{key:`${e.id}:front`,section:e.id,side:"front",flat:!1,o:[E,y,W],eu:_,es:[0,1,0],n:w,lu:z,ls:F,pitch:90,span:S,facing:[w[0],w[2]]}]}function vf(n,e,t,r,i,o){let s=Wn(e.w,n.eave_a,n.eave_b,Je(n.pitch_a),Je(n.pitch_b)),a=(h,w)=>{let[_,v]=e.at(h,w);return[_,s.y(w),v]},l=r-t,c=()=>[0,l],u=(h,w)=>Math.atan2(h,w)/Fe,d=[],[m,p]=[e.w+o,e.w-s.vlb];return s.vla+i>.3&&d.push(Xe(`${n.id}:a`,n.id,"a",a(t,-i),a(r,-i),a(t,s.vla),n.pitch_a,c)),s.vr-s.vla>.3&&d.push(Xe(`${n.id}:au`,n.id,"a",a(t,s.vla),a(r,s.vla),a(t,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+o>.3&&d.push(Xe(`${n.id}:b`,n.id,"b",a(r,m),a(t,m),a(r,p),n.pitch_b,c)),p-s.vr>.3&&d.push(Xe(`${n.id}:bu`,n.id,"b",a(r,p),a(t,p),a(r,s.vr),u(s.rh-s.ylb,p-s.vr),c)),d}function li(n){return n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>r.elevation-t.elevation)[0]??null}function ci(n){let e=n.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom"){let x=e.sections??[];return x.flatMap(y=>[...bf(y,No(n,y,y.overhang??e.overhang)),...wf(x,y)])}let t=li(n);if(!t)return[];let r=t.rooms.flatMap(x=>x.points.map(y=>y[0])),i=t.rooms.flatMap(x=>x.points.map(y=>y[1])),o=n.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-o,Math.max(...r)+o],[l,c]=[Math.min(...i)-o,Math.max(...i)+o],u=t.elevation+t.height;if(e.type==="flat")return[mu("main",null,s,l,a,c,u+pu)];let d=a-s>=c-l,m=e.ridge==="short"?!d:d,p=(m?c-l:a-s)/2,h=p*Math.tan(e.pitch*Fe),w=(x,y,b)=>m?[x,u+b,(l+c)/2+y]:[(s+a)/2+y,u+b,x],[_,v]=m?[s,a]:[l,c],$=()=>[0,v-_];return[Xe("main:a",null,"a",w(_,-p,0),w(v,-p,0),w(_,0,h),e.pitch,$),Xe("main:b",null,"b",w(_,p,0),w(v,p,0),w(_,0,h),e.pitch,$)]}function Ln(n,e){let t=[];for(let r of n.floors.filter(i=>!e||i.id===e)){let{walls:i}=Bt(r.rooms,xn(n.settings),r.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let[s,a]=[o.b[0]-o.a[0],o.b[1]-o.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(r.height,o.height??r.height,o.heightEnd??1/0),m=(p,h,w,_)=>t.push({key:p,section:null,side:"top",flat:!1,o:h,eu:w,es:[0,1,0],n:_,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[_[0],_[2]],wall:{floorId:r.id}});m(`wall:${r.id}:${o.id}`,[o.a[0]+c*o.right,r.elevation,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&m(`wall:${r.id}:${o.id}:back`,[o.b[0]-c*o.left,r.elevation,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var St="ground";function On(n){let e=n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>t.elevation-r.elevation);return e.find(t=>t.elevation>-.5)??e[0]??n.floors[0]??null}function Lo(n,e){let t=(e.rotation??0)*Fe,r=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=On(n),s=r[0]*e.u+i[0]*e.v,a=r[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:pn(o,s,a)):e.base??0;return{key:St,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Oo(n,e,t=ci(n)){return e.face===St?Lo(n,e):e.face.startsWith("wall:")?Ln(n,e.face.split(":")[1]).find(r=>r.key===e.face)??null:t.find(r=>r.key===e.face)??null}var Bo=1.13,Vo=1.72,tn=.025,Pe=.07;function Bn(n){let e=n.module_w||Bo,t=n.module_h||Vo;return n.portrait===!1?[t,e]:[e,t]}function Go(n){return n.layout?.length?n.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,n.rows)},()=>Math.max(1,n.cols))}function Ko(n,e){return n.flat?Math.min(45,Math.max(0,e.tilt??15))*Fe:n.wall?Math.min(90,Math.max(0,e.tilt??0))*Fe:Math.min(45,Math.max(0,e.tilt??0))*Fe}function ui(n,e){let[,t]=Bn(e),r=Ko(n,e);return n.wall?t*Math.cos(r)+tn:!n.flat&&r<.001?t+tn:n.flat&&e.rack==="ew"?t*Math.cos(r)+.08:t*Math.cos(r)+Math.max(.3,2*t*Math.sin(r))}function Uo(n,e){let[t,r]=Bn(e),i=Go(e),o=Math.max(1,...i);return[o*t+(o-1)*tn,(i.length-1)*ui(n,e)+r*Math.cos(Ko(n,e))]}var yf=n=>n.flat&&!n.unbounded&&!n.wall;function kf(n,e){if(!yf(n)||!e.rotation)return null;let t=e.rotation*Fe,[r,i]=Uo(n,e);return{cos:Math.cos(t),sin:Math.sin(t),u:e.u+r/2,s:e.v+i/2}}function Vn(n,e,t=!1){let[r,i]=Bn(e),o=Ko(n,e),s=i*Math.cos(o),a=ui(n,e),l=Go(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=kf(n,e),m=(_,v)=>d?[d.u+(_-d.u)*d.cos-(v-d.s)*d.sin,d.s+(_-d.u)*d.sin+(v-d.s)*d.cos]:[_,v],p=(_,v,$)=>{let[x,y]=m(_,v);return[0,1,2].map(b=>n.o[b]+n.eu[b]*x+n.es[b]*y+n.n[b]*$)},h=(_,v)=>{let[$,x]=m(_,v);if(n.unbounded)return!0;if(x<-1e-6||x>n.ls+1e-6)return!1;let[y,b]=n.span(x);return $>=y-1e-6&&$<=b+1e-6},w=[];return l.forEach((_,v)=>{let $=e.align==="right"?c-_:e.align==="center"?(c-_)/2:0;for(let x=0;x<_;x++){let y=`${v}:${x}`,b=u.has(y);if(b&&!t)continue;let z=e.u+(x+$)*(r+tn),F=z+r,P=e.v+v*a,E=P+(n.flat||n.wall||o>.001?s:i);if([[z,P],[F,P],[F,E],[z,E]].every(([W,S])=>h(W,S)))if(n.wall&&o>.001){let W=Pe+i*Math.sin(o),[S,D]=e.flip?[W,Pe]:[Pe,W],G=[p(z,P,S),p(F,P,S),p(F,E,D),p(z,E,D)],T=e.flip?P:E;w.push({corners:G,posts:[z+.05,F-.05].map(K=>[p(K,T,0),p(K,T,W)]),cell:y,skipped:b})}else if(!n.flat&&o>.001){let W=Pe+i*Math.sin(o),S=[p(z,P,Pe),p(F,P,Pe),p(F,E,W),p(z,E,W)];w.push({corners:S,posts:[z+.05,F-.05].map(D=>[p(D,E,0),p(D,E,W)]),cell:y,skipped:b})}else if(!n.flat)w.push({corners:[p(z,P,Pe),p(F,P,Pe),p(F,E,Pe),p(z,E,Pe)],posts:[],cell:y,skipped:b});else{let S=.15+i*Math.sin(o),D=e.rack==="ew"&&v%2===1?!e.flip:!!e.flip,[G,T]=D?[E,P]:[P,E],K=[p(z,G,.15),p(F,G,.15),p(F,T,S),p(z,T,S)],Y=[z+.05,F-.05].flatMap(C=>[[p(C,G,0),p(C,G,.15)],[p(C,T,0),p(C,T,S)]]);w.push({corners:K,posts:Y,cell:y,skipped:b})}}}),w}var Me={solar:[255,196,46],battery:[74,222,128],import:[248,96,120],export:[56,220,245],house:[150,170,255],wallbox:[80,175,255]},He=15;function Oe(n,e){let t=[];for(let r of n.floors)for(let i of r.furniture)i.type===e&&t.push({id:i.id,floorId:r.id,x:i.x,z:i.z,y:Math.max(.4,Math.min(1.4,i.h*.8))});return t}function zf(n){if(!n?.rooms.length)return null;let e=0,t=0,r=0;for(let i of n.rooms)for(let[o,s]of i.points)e+=o,t+=s,r++;return r?{floorId:n.id,x:e/r,z:t/r,y:1}:null}function Gn(n){let e=Mn(n);return Oe(n,"meter").find(t=>!e.has(t.id))??Oe(n,"inverter")[0]??zf(On(n))}function Rf(n,e){let t=Oe(n,"grid_point")[0];if(t)return t;let r=n.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let i=1/0,o=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)i=Math.min(i,l),o=Math.max(o,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(i,Math.min(o,e.x)),z:s+3,y:.2}}var qo=n=>Math.max(1,n.rows*n.cols-(n.skip?.length??0));function Tf(n,e,t){let r=e.settings.roof.solar??[],i=new Map,o=0,s=[];for(let c of r){let u=c.entity&&c.entity!=="none"?re(n.states[c.entity],!!e.energy.solar_invert):null;u!==null?(i.set(c.id,Math.max(0,u)),o+=Math.max(0,u)):s.push(c)}let a=Math.max(0,(t??0)-o),l=s.reduce((c,u)=>c+qo(u),0);for(let c of s)i.set(c.id,l?a*qo(c)/l:0);return i}function Df(n,e){if(e.face===St)return On(n)?.id??null;let t=/^wall:([^:]+):/.exec(e.face);return t?t[1]:li(n)?.id??null}function _u(n,e,t=An(n,e),r){let i=r?Ze(e,r):Ze(e),o=En(n,e,t,i),s=[],a=[],l=Gn(e),c=o.consumption??0,u=o.grid===null||c<=0?null:Math.max(0,Math.min(1,1-Math.max(0,o.grid)/c));if(!l)return{arcs:s,sparks:a,summary:o,autarky:u};let d=new Map(e.floors.flatMap(S=>S.furniture).flatMap(S=>Ir(e,S)?[[S.id,Ir(e,S)]]:[])),m=Oe(e,"inverter").find(S=>!d.has(S.id))??l,p=new Map(Oe(e,"inverter").map(S=>[S.id,S])),h=new Map((e.settings.roof.strings??[]).map(S=>[S.id,S.inverter??null])),w=[...ci(e),...Ln(e)],_=Tf(n,e,o.solar),v=new Map;for(let S of e.settings.roof.solar??[]){let D=Oo(e,S,w);if(!D)continue;let G=Vn(D,S);if(!G.length)continue;let T=_.get(S.id)??0,K=qo(S)*(S.wp??400),Y=T>He?Math.pow(Math.min(1,T/K),.6):0,C=Df(e,S),j=S.face!==St&&!S.face.startsWith("wall:");if(a.push({floorId:C,quads:G.map(k=>k.corners),level:Y,...j?{roof:j}:{}}),T<=He)continue;let oe=0,H=0,J=0;for(let k of G)for(let R of k.corners)oe+=R[0],H+=R[1],J+=R[2];let ve=G.length*4,N=e.floors.find(k=>k.id===C)?.elevation??0,te=p.get(h.get(S.string??"")??"");te&&v.set(te.id,(v.get(te.id)??0)+T),s.push({key:`solar:${S.id}`,from:{floorId:C,x:oe/ve,y:H/ve-N+.1,z:J/ve,...j?{roof:j}:{}},to:te??m,power:T,color:Me.solar})}let $=Oe(e,"home_battery").find(S=>!d.has(S.id)),x=o.battery===null?null:o.battery-(o.subMeters??[]).reduce((S,D)=>S+D.battery,0);if($&&x!==null&&Math.abs(x)>He){let S=x>0;s.push({key:"battery",from:S?$:l,to:S?l:$,power:Math.abs(x),color:Me.battery})}let y=(o.solar??0)-(o.subMeters??[]).reduce((S,D)=>S+D.solar,0);if(y>He){let S=Pf(e,d);if(S.length>1){let D=S.map(T=>v.get(T.id)??0),G=D.reduce((T,K)=>T+K,0);S.forEach((T,K)=>{let Y=G>He?y*D[K]/G:y/S.length;T!==l&&Y>He&&s.push({key:`inverter:${T.id}`,from:T,to:l,power:Y,color:Me.solar})})}else m!==l&&s.push({key:"inverter",from:m,to:l,power:y,color:Me.solar})}let b=Rf(e,l);if(b&&o.grid!==null&&Math.abs(o.grid)>He){let S=o.grid>0;s.push({key:"grid",from:S?b:l,to:S?l:b,power:Math.abs(o.grid),color:S?Me.import:Me.export})}let z=new Map(Oe(e,"meter").map(S=>[S.id,S])),F=r??(S=>S.power&&S.power!=="none"?S.power:null);for(let S of e.floors)for(let D of S.furniture){let G=z.get(d.get(D.id)??""),T=Oe(e,D.type).find(Y=>Y.id===D.id);if(!G||!T)continue;let K=F(D);if(D.type==="inverter"){let Y=Math.max(0,(K?re(n.states[K],!!e.energy.solar_invert):null)??0);Y>He&&s.push({key:`inverter:${D.id}`,from:T,to:G,power:Y,color:Me.solar})}else if(D.type==="home_battery"){let Y=D.charge&&D.charge!=="none"?D.charge:null,C=Cr(n,{power:K,charge:Y},e.energy.battery_invert)??0;Math.abs(C)>He&&s.push({key:`battery:${D.id}`,from:C>0?T:G,to:C>0?G:T,power:Math.abs(C),color:Me.battery})}}let P=new Map,E=new Set;for(let S of i.subMeters??[]){let D=z.get(S.id),G=z.get(S.parent);S.power&&E.add(S.power);for(let K of S.floors)D&&!P.has(K)&&P.set(K,D);let T=o.subMeters?.find(K=>K.id===S.id)?.power??null;!D||!G||T===null||Math.abs(T)<=He||s.push({key:`meter:${S.id}`,from:T>0?G:D,to:T>0?D:G,power:Math.abs(T),color:T>0?Me.house:Me.solar})}let W=new Set(Oe(e,"wallbox").map(S=>`${S.floorId}:${S.x.toFixed(1)}:${S.z.toFixed(1)}`));for(let S of t){if(S.power<=He||E.has(S.powerEntity))continue;let D=S.wallbox||W.has(`${S.floorId}:${S.x.toFixed(1)}:${S.z.toFixed(1)}`);s.push({key:`use:${S.id}`,from:P.get(S.floorId)??l,to:{floorId:S.floorId,x:S.x,z:S.z,y:.9},power:S.power,color:D?Me.wallbox:Me.house})}return{arcs:s.map(S=>Hf(e,S)),sparks:a,summary:o,autarky:u}}var Ff=.25;function Pf(n,e){let t=new Set((n.settings.roof.strings??[]).filter(r=>r.inverter&&(n.settings.roof.solar??[]).some(i=>i.string===r.id)).map(r=>r.inverter));return Oe(n,"inverter").filter(r=>!e.has(r.id)&&t.has(r.id))}var jo=(n,e)=>n.energy.routes?.find(t=>t.key===e&&t.points.length>0);function Hf(n,e){let t=jo(n,e.key);if(!t)return e;let r=t.points.map(l=>({floorId:l.floor_id,x:l.x,z:l.z,y:Ff})),i=l=>n.floors.find(c=>c.id===l)?.elevation??0,o=(l,c)=>Math.hypot(l.x-c.x,l.z-c.z)+Math.abs(i(l.floorId)+l.y-i(c.floorId)-c.y),[s,a]=[r[0],r[r.length-1]];return o(e.from,a)+o(e.to,s)<o(e.from,s)+o(e.to,a)&&r.reverse(),{...e,via:r,cable:!!t.cable}}var If={supply:[255,70,50],return:[70,140,255],hot:[255,150,40],cold:[110,205,255]},Cf=.12,Nf=1500;function Wf(n){if(!n||n.state==="unavailable"||n.state==="unknown")return!1;let e=Number(n.state);return Number.isFinite(e)?e>0:se(n)}function bu(n,e){let t=[];for(let r of n.energy.pipes??[]){let i=jo(n,Bi(r.id));if(!i||i.points.length<2)continue;let o=i.points.map(u=>({floorId:u.floor_id,x:u.x,z:u.z,y:Cf})),s=!!r.entity&&Wf(e[r.entity]),[a,l]=[o[0],o[o.length-1]],c=o.length>2?o.slice(1,-1):[{...a,x:(a.x+l.x)/2,z:(a.z+l.z)/2}];t.push({key:Bi(r.id),from:a,to:l,via:c,power:s?Nf:0,color:If[r.kind],cable:!0})}return t}var Lf=n=>`${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`,wu=n=>typeof n=="string"?{dateTime:n}:n??{},vu=n=>{let e=new Date(n);return e.setHours(0,0,0,0),e.getTime()},yu=(n,e)=>Math.max(0,Math.round((vu(n)-vu(e))/864e5));function Of(n,e,t){return n.map(r=>{let i=wu(r.start),o=wu(r.end),s=(r.summary??"").trim();if(!s)return null;if(i.dateTime){let c=new Date(i.dateTime),u=o.dateTime?new Date(o.dateTime).getTime():c.getTime();return{time:Lf(c),title:s,source:e,at:c.getHours()*60+c.getMinutes(),kind:"event",past:u<t,day:yu(c.getTime(),t)}}let a=i.date?/^(\d{4})-(\d{2})-(\d{2})$/.exec(i.date):null,l=a?yu(new Date(Number(a[1]),Number(a[2])-1,Number(a[3])).getTime(),t):0;return{time:"",title:s,source:e,at:-1,kind:"event",day:l}}).filter(r=>!!r)}function ku(n,e,t,r){let i=[],o=new Set;for(let s of e.floors)for(let a of s.furniture){let l=a.care_entity;if(!l||o.has(l)||lr(a.type)!=="bin")continue;o.add(l);let c=Er(n.states[l],t);if(c===null||c>1)continue;let u=a.name||String(n.states[l]?.attributes.friendly_name??l);i.push({time:"",title:u,source:c===0?r.today:r.tomorrow,at:-1,kind:"bin"})}return i}function xu(n){return[...n].sort((e,t)=>(e.day??0)-(t.day??0)||e.at-t.at||e.title.localeCompare(t.title))}async function Su(n,e,t=1,r=Date.now()){if(!n.fetchWithAuth||!e.length)return[];let i=new Date(r);i.setHours(0,0,0,0);let o=new Date(i);return o.setDate(o.getDate()+Math.max(1,t)),(await Promise.all(e.map(async a=>{try{let l=await n.fetchWithAuth(`/api/calendars/${encodeURIComponent(a)}?start=${encodeURIComponent(i.toISOString())}&end=${encodeURIComponent(o.toISOString())}`);if(!l.ok)return[];let c=String(n.states[a]?.attributes.friendly_name??a.split(".")[1]);return Of(await l.json(),c,r)}catch{return[]}}))).flat()}function $u(n,e,t){let r=n.toLowerCase(),i=/(^|[^a-zä])(not|no|nicht|kein)[_ ]/.test(r);if((t??0)>50||!i&&!/(^|[^a-zä])ready[_ ]to/.test(r)&&/(^|[^a-zä])(charging|charge|laden|lädt|ladend)(?![a-zä])/.test(r))return"charging";let s=/(dis|un|nicht[_ ])(connect|plug|verbunden|angesteckt)/.test(r);return(e?r==="on":!s&&/connect|plug|insert|ready|angesteckt|verbunden|wait|paused|suspend/.test(r))?"plugged":null}var Bf={"clear-night":"\u{1F319}",cloudy:"\u2601\uFE0F",exceptional:"\u26A0\uFE0F",fog:"\u{1F32B}\uFE0F",hail:"\u{1F9CA}",lightning:"\u{1F329}\uFE0F","lightning-rainy":"\u26C8\uFE0F",partlycloudy:"\u26C5",pouring:"\u{1F327}\uFE0F",rainy:"\u{1F326}\uFE0F",snowy:"\u2744\uFE0F","snowy-rainy":"\u{1F328}\uFE0F",sunny:"\u2600\uFE0F",windy:"\u{1F4A8}","windy-variant":"\u{1F4A8}"},Vf=n=>Bf[n??""]??"\u2601\uFE0F",di=n=>{let e=typeof n=="string"?Number.parseFloat(n):typeof n=="number"?n:Number.NaN;return Number.isFinite(e)?e:null},Mu=n=>{let e=new Date(n);return e.setHours(0,0,0,0),e.getTime()};function Au(n,e,t=Date.now()){let r=Mu(t),i=[];for(let o of Array.isArray(n)?n:[]){let s=o.datetime&&/^\d{4}-\d{2}-\d{2}$/.test(o.datetime)?o.datetime.split("-").map(Number):null,a=s?new Date(s[0],s[1]-1,s[2]).getTime():o.datetime?Date.parse(o.datetime):Number.NaN;if(!Number.isFinite(a))continue;let l=Mu(a);if(!(l<r||i.some(c=>c.day===l))&&(i.push({day:l,icon:Vf(o.condition),high:di(o.temperature),low:di(o.templow),rain:di(o.precipitation),chance:di(o.precipitation_probability)}),i.length>=e))break}return i}async function Eu(n,e){try{return(await n.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:"daily"},target:{entity_id:e},return_response:!0}))?.response?.[e]?.forecast??[]}catch{return null}}var Kn=n=>{let e=Number(n?.state);return n&&Number.isFinite(e)?e:null},we=(n,...e)=>e.some(t=>n.includes(t));function Gf(n,e){let t=n.entities?.[e]?.device_id;return t?Object.values(n.entities??{}).filter(r=>r.device_id===t&&!r.hidden).map(r=>r.entity_id).filter(r=>n.states[r]):n.states[e]?[e]:[]}function Kf(n){if(!n)return null;let e=String(n.state),t=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(e);if(t)return Number(t[1])*60+Number(t[2]);let r=Number(e);if(!Number.isFinite(r))return null;let i=String(n.attributes.unit_of_measurement??"min").toLowerCase();return i==="h"?r*60:i==="s"?r/60:i==="d"?r*1440:r}var Uf=/print|running|busy|druck/,qf=["print_status","current_stage","print_state","printer_state","current_state","status","state"];function Zo(n,e){if(!e||!n.states[e])return null;let t=Gf(n,e),r=t.filter(E=>E.startsWith("sensor.")),i=E=>E?n.states[E]:void 0,o=E=>r.find(W=>E(W,n.states[W])),s=E=>String(E.attributes.unit_of_measurement??""),a=E=>String(E.attributes.device_class??""),l=o((E,W)=>s(W)==="%"&&we(E,"progress","fortschritt","completion"));if(!l)return null;let c=qf.map(E=>o((W,S)=>W.endsWith(E)&&!Number.isFinite(Number(S.state)))).find(Boolean),u=o(E=>we(E,"remaining","time_left","restzeit","print_time_left")),d=o((E,W)=>a(W)==="timestamp"&&we(E,"end","finish","estimated","ende")),m=o(E=>we(E,"current_layer","layer")&&!we(E,"total")),p=o(E=>we(E,"total_layer","layer_count","total_layers")),h=o((E,W)=>a(W)==="temperature"&&we(E,"nozzle","hotend","extruder","tool0","d\xFCse")&&!we(E,"target")),w=o((E,W)=>a(W)==="temperature"&&we(E,"bed","heater_bed","druckbett")&&!we(E,"target")),_=o(E=>we(E,"file","job","task_name","gcode","print_name","subtask")),v=t.find(E=>E.startsWith("image.")&&we(E,"cover","model","thumbnail","preview"))??t.find(E=>E.startsWith("camera.")&&we(E,"thumbnail","preview")),$=String(i(c)?.state??"").toLowerCase(),x=Kn(i(l)),y=$?Uf.test($)&&!/finish|complete|idle|fertig/.test($):(x??0)>0&&(x??0)<100,b=i(d)?Date.parse(String(i(d).state)):NaN,z=Kf(i(u)),F=t.map(E=>n.states[E]).filter(E=>typeof E?.attributes.color=="string"&&/^#[0-9a-f]{6}/i.test(String(E.attributes.color))&&we(E.entity_id,"tray","ams","filament","spool","external"));F.sort((E,W)=>+!!W.attributes.active-+!!E.attributes.active);let P=i(v)?.attributes.entity_picture;return{status:$||(y?"printing":"idle"),printing:y,progress:x,remaining:z,endsAt:Number.isFinite(b)?b:z!==null&&y?Date.now()+z*6e4:null,layer:Kn(i(m)),layers:Kn(i(p)),nozzle:Kn(i(h)),bed:Kn(i(w)),job:i(_)?.state&&!["unknown","unavailable",""].includes(String(i(_).state))?String(i(_).state):null,picture:typeof P=="string"?P:null,filaments:[...new Set(F.map(E=>String(E.attributes.color).slice(0,7).toLowerCase()))].slice(0,8)}}var Yo=n=>/(printer_(3d|cube|multi|large|open|resin|enclosed)|prusa\w*|bambu\w*|voron\w*|ender\w*)$/i.test(n);var Un=n=>{let e=Number(n?.state);return n&&Number.isFinite(e)?e:null},et=(n,...e)=>e.some(t=>n.includes(t));function zu(n){let e=Un(n);return e===null?null:String(n.attributes.unit_of_measurement??"W").toLowerCase()==="kw"?e*1e3:e}function jf(n,e){let t=n.entities?.[e]?.device_id;return t?Object.values(n.entities??{}).filter(r=>r.device_id===t&&!r.hidden).map(r=>r.entity_id).filter(r=>n.states[r]):n.states[e]?[e]:[]}function Ru(n,e){if(!e||!n.states[e])return null;let t=jf(n,e),r=t.filter(y=>y.startsWith("sensor.")),i=y=>r.find(b=>y(b,n.states[b])),o=y=>y.attributes.device_class==="temperature",s=y=>y.attributes.device_class==="power",a=i((y,b)=>o(b)&&et(y,"flow","vorlauf","supply","leaving","outlet")&&!et(y,"target","soll","rate")),l=i((y,b)=>o(b)&&et(y,"return","rucklauf","r\xFCcklauf","ruecklauf","inlet","entering")&&!et(y,"target","soll")),c=i((y,b)=>o(b)&&et(y,"outdoor","outside","aussen","au\xDFen","ambient")),u=i((y,b)=>s(b)&&et(y,"heat","warme","w\xE4rme","thermal","output","heizleistung")),d=i((y,b)=>s(b)&&y!==u&&!et(y,"heat_output","thermal")),m=i(y=>et(y,"cop","leistungszahl"));if(!a&&!l&&!u&&!m)return null;let p=t.map(y=>n.states[y]).find(y=>y.entity_id.startsWith("climate.")),h=i((y,b)=>!Number.isFinite(Number(b.state))&&et(y,"status","mode","betrieb","operation","state")),w=`${String(p?.attributes.hvac_action??"")} ${String(h?n.states[h].state:"")}`.toLowerCase(),_=zu(n.states[u??""]),v=/defrost|abtau/.test(w)?"defrost":/water|dhw|warmwasser|tank/.test(w)?"water":/cool|kühl/.test(w)?"cooling":/heat|heiz/.test(w)||(_??0)>100?"heating":"idle",$=zu(n.states[d??""]),x=Un(n.states[m??""])??(_!==null&&$&&$>50?Math.round(_/$*10)/10:null);return{mode:v,flow:Un(n.states[a??""]),return:Un(n.states[l??""]),outside:Un(n.states[c??""]),power:$,heat:_,cop:x}}var Tu=n=>/:heat_pump(_|$)/.test(n);var Jo=n=>/access_point|router|mesh|wifi|repeater/.test(n),Du=(n,...e)=>e.some(t=>n.includes(t));function Zf(n,e){let t=n.entities?.[e]?.device_id;return t?Object.values(n.entities??{}).filter(r=>r.device_id===t&&!r.hidden).map(r=>r.entity_id).filter(r=>n.states[r]):n.states[e]?[e]:[]}function Qo(n,e){if(!e||!n.states[e])return null;let t=Zf(n,e),r=t.find(a=>a.startsWith("sensor.")&&Du(a,"clients","stations","connected_devices","users","ger\xE4te","wlan_clients")&&Number.isFinite(Number(n.states[a].state))),i=t.map(a=>n.states[a]).find(a=>a.entity_id.startsWith("binary_sensor.")&&(a.attributes.device_class==="connectivity"||Du(a.entity_id,"online","connected","status"))),o=n.states[e],s=["unavailable","off","disconnected","offline"].includes(String(i?.state??o.state).toLowerCase())&&(!!i||o.entity_id.startsWith("binary_sensor."));return{clients:r?Number(n.states[r].state):null,online:!s&&o.state!=="unavailable"}}function Fu(n){return n.online?(n.clients??0)>=30?[1,.72,.25]:[.3,.7,1]:[1,.3,.3]}function Pu(n){let e=0,t=[];for(let r of n){if(!r)continue;let i=r.entity_id.startsWith("binary_sensor.")&&r.attributes.device_class==="connectivity",o=r.entity_id.startsWith("device_tracker.")&&r.attributes.source_type==="router";!i&&!o||(r.state==="on"||r.state==="home"?e++:t.push(String(r.attributes.friendly_name??r.entity_id)))}return{online:e,offline:t}}var ge=n=>n&&n!=="none"?n:null,hi=n=>{let e=Number(n?.state);return n&&Number.isFinite(e)?e:null},Hu=(n,e)=>n?.attributes?.[e],Ae=(n,...e)=>e.some(t=>n.includes(t));function Yf(n,e){if(!e)return[];let t=n.entities?.[e]?.device_id;return t?Object.values(n.entities??{}).filter(r=>r.device_id===t&&!r.hidden).map(r=>r.entity_id).filter(r=>n.states[r]):[e]}function Ie(n,e,t,r){return e&&n.states[e]?e:t.find(i=>r(i,n.states[i]))??null}function Jf(n,e,t,r){let i=Math.PI/180,o=Math.sin((t-n)*i/2)**2+Math.cos(n*i)*Math.cos(t*i)*Math.sin((r-e)*i/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(o)))}function Qf(n){if(!n||["unknown","unavailable","","none","off"].includes(String(n.state).toLowerCase()))return null;let e=String(n.state),t=/^(\d{1,2}):(\d{2})/.exec(e);if(t)return`${t[1].padStart(2,"0")}:${t[2]}`;let r=Date.parse(e);if(Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}/.test(e)){let i=new Date(r);return`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`}return t=/^(\d{1,4})$/.exec(e),t&&Number(t[1])<1440?`${String(Math.floor(Number(t[1])/60)).padStart(2,"0")}:${String(Number(t[1])%60).padStart(2,"0")}`:null}function Iu(n,e){let t=e.car??{},r=ge(t.device)??ge(t.tracker)??ge(e.entity),i=Yf(n,r);if(!i.length&&!ge(t.soc))return null;let o=H=>H.split(".")[0],s=H=>String(Hu(H,"device_class")??""),a=H=>String(Hu(H,"unit_of_measurement")??""),l=Ie(n,ge(t.soc),i,(H,J)=>o(H)==="sensor"&&a(J)==="%"&&(s(J)==="battery"||Ae(H,"battery_level","soc","state_of_charge","ladezustand"))&&!Ae(H,"usable")),c=Ie(n,ge(t.range),i,(H,J)=>o(H)==="sensor"&&(s(J)==="distance"||Ae(H,"range","reichweite"))&&!Ae(H,"odometer","ideal","elevation","kilometerstand")),u=Ie(n,null,i,(H,J)=>o(H)==="sensor"&&s(J)==="power"&&Ae(H,"charg","lade")),d=ge(t.charging),m=Ie(n,d&&o(d)==="binary_sensor"?d:null,i,(H,J)=>o(H)==="binary_sensor"&&(s(J)==="battery_charging"||Ae(H,"charging","charger","laden"))),p=Ie(n,ge(t.plugged),i,(H,J)=>o(H)==="binary_sensor"&&(s(J)==="plug"||Ae(H,"plug","cable","kabel"))),h=Ie(n,ge(t.lock),i,H=>o(H)==="lock"),w=Ie(n,ge(t.climate),i,H=>o(H)==="climate"),_=Ie(n,d&&/^(switch|input_boolean)\./.test(d)?d:null,i,H=>o(H)==="switch"&&Ae(H,"charg","laden")&&!Ae(H,"port","klappe")),v=Ie(n,ge(t.tracker),i,H=>o(H)==="device_tracker")??(ge(e.entity)?.startsWith("device_tracker.")?ge(e.entity):null),$=Ie(n,null,i,(H,J)=>o(H)==="sensor"&&s(J)==="temperature"&&Ae(H,"inside","innen","interior","cabin")),x=Ie(n,ge(t.departure),i,H=>/^(sensor|input_datetime|time|datetime)$/.test(o(H))&&Ae(H,"departure","abfahrt","depart")),y=i.filter(H=>{let J=n.states[H];return o(H)==="binary_sensor"&&J?.state==="on"&&(["door","opening","window","garage_door"].includes(s(J))||Ae(H,"trunk","frunk","kofferraum","tailgate","hatch","klappe","charge_port","ladeklappe"))}),b=H=>H?n.states[H]:void 0,z=hi(b(l)),F=b(c),P=null,E=b(u)??(d&&o(d)==="sensor"?b(d):void 0);if(E){let H=hi(E);H!==null&&(P=Math.max(0,a(E).toLowerCase()==="kw"?H*1e3:H))}let S=(b(m)?.state??b(_)?.state)==="on"||P!==null&&P>50,D=b(p)?.state,G=b(h)?.state,T=b(w),K=b(v),Y=b(ge(e.entity)),C=Y?["on","home","true","present","occupied","detected","parked"].includes(Y.state.toLowerCase()):K?.state==="home",j=K&&K.state!=="home"&&K.state!=="not_home"?K.state:null,oe=j?String(b(`zone.${j}`)?.attributes.friendly_name??j):null;return{home:C,soc:z,range:hi(F),rangeUnit:F&&a(F)||"km",chargingW:P,charging:S,plugged:D===void 0?null:D==="on",locked:G===void 0?null:G==="locked",climateOn:T?T.state!=="off"&&T.state!=="unavailable":null,inside:hi(b($)),where:C?null:oe,distance:C?null:Xf(n,K),open:y.map(H=>eg(n,H,i)),departure:Qf(b(x)),entities:{lock:h,climate:w,charge:_,tracker:v}}}function Xf(n,e){let t=n.states["zone.home"]?.attributes,r=Number(e?.attributes?.latitude),i=Number(e?.attributes?.longitude),o=Number(t?.latitude??n.config?.latitude),s=Number(t?.longitude??n.config?.longitude);return[r,i,o,s].every(Number.isFinite)?Math.round(Jf(r,i,o,s)*10)/10:null}function eg(n,e,t){let r=String(n.states[e]?.attributes.friendly_name??e.split(".")[1]),i=t.map(s=>String(n.states[s]?.attributes.friendly_name??"")).reduce((s,a)=>{let l=0;for(;l<s.length&&l<a.length&&s[l]===a[l];)l++;return s.slice(0,l)}),o=r.slice(i.length).trim();return o.length>=2?o:r}function Cu(n){return n===null?"#8aa0c8":n<20?"#f87171":n<50?"#facc15":"#4ade80"}function Be(n,e){let t=Math.abs(e);return t>=1e3?`${U(n,t/1e3,t>=1e4?1:2)} kW`:`${Math.round(t)} W`}function nn(n,e){let r=2*Math.PI*22;return f`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${le`<circle cx="27" cy="27" r=${22} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${22} stroke=${e} stroke-dasharray=${`${(r*Math.max(0,Math.min(1,n))).toFixed(1)} ${r.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`}function tg(n,e,t,r){let i=e.summary,o=c=>M(n,c),s=e.autarky,a=r?f`<button class="live-fold" title=${o(r.folded?"live_unfold":"live_fold")} aria-label=${o(r.folded?"live_unfold":"live_fold")} aria-expanded=${!r.folded} @click=${r.toggle}>${r.folded?"+":"\u2212"}</button>`:g;if(r?.folded){let c=i.solar!==null?`\u2600 ${Be(n,i.solar)}`:i.consumption!==null?`\u2302 ${Be(n,i.consumption)}`:null;return f`<div class="live-card live-card-house live-folded" data-i=${t}>
      ${s!==null?f`<div class="live-own">${nn(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)}%</b></div></div>`:g}
      ${c?f`<b>${c}</b>`:s===null?f`<b>⌂</b>`:g}
      ${a}
    </div>`}let l=[];if(i.solar!==null&&l.push(f`<div class="live-row live-solar"><span>☀ ${o("energy_solar")}</span><b>${Be(n,i.solar)}</b></div>`),i.consumption!==null&&l.push(f`<div class="live-row live-house"><span>⌂ ${o("energy_consumption")}</span><b>${Be(n,i.consumption)}</b></div>`),i.rest!==void 0&&i.rest!==null&&l.push(f`<div class="live-row live-house"><span>⌂ ${o("energy_rest")}</span><b>${Be(n,i.rest)}</b></div>`),i.battery!==null||i.soc!==null){let c=i.battery===null||Math.abs(i.battery)<15?"energy_battery":i.battery>0?"energy_battery_discharging":"energy_battery_charging";l.push(f`<div class="live-row live-battery"><span>▮ ${o(c)}</span><b>${i.soc!==null?`${Math.round(i.soc)} %`:""}${i.battery!==null&&Math.abs(i.battery)>=15?` \xB7 ${Be(n,Math.abs(i.battery))}`:""}</b></div>`)}if(i.grid!==null){let c=i.grid<-15;l.push(f`<div class="live-row ${c?"live-export":"live-import"}"><span>⇄ ${o(c?"energy_grid_export":"energy_grid_import")}</span><b>${Be(n,i.grid)}</b></div>`)}for(let c of e.meters??[])l.push(f`<div class="live-row live-meter"><span>${c.icon} ${c.label}</span><b>${c.value}</b></div>`);return f`<div class="live-card live-card-house" data-i=${t}>
    ${a}
    ${s!==null?f`<div class="live-own">${nn(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)} %</b><span>${o("live_autarky")}</span></div></div>`:g}
    <div class="live-rows">${l}</div>
    ${rg(n,e.curves)} ${ng(n,e.week)}
  </div>`}function ng(n,e){if(!e)return g;let t=[...e.solar,...e.use].filter(c=>c!==null&&c>0);if(!t.length)return g;let r=Math.max(...t)*1.1||1,[i,o]=[150,30],s=i/7,a=(c,u,d)=>c===null||c<=0?g:le`<rect x=${u.toFixed(1)} y=${(o-c/r*o).toFixed(1)} width=${(s*.36).toFixed(1)} height=${(c/r*o).toFixed(1)} class=${d}></rect>`,l=c=>c.reduce((u,d)=>u+(d??0),0);return f`<div class="live-day live-week" title=${M(n,"live_week_hint",{solar:U(n,l(e.solar),0),use:U(n,l(e.use),0)})}>
    <svg viewBox=${`0 0 ${i} ${o}`} preserveAspectRatio="none" aria-hidden="true">
      ${e.days.map((c,u)=>le`${a(e.solar[u],u*s+s*.1,"live-week-solar")}${a(e.use[u],u*s+s*.5,"live-week-use")}`)}
    </svg>
    <span>7 ${M(n,"live_days")}</span>
  </div>`}function rg(n,e){if(!e)return g;let t=[...e.solar,...e.use].filter(l=>l!==null);if(t.length<4)return g;let r=Math.max(...t)*1.08||1,[i,o]=[150,34],s=Dn(e.solar,i,o,r),a=Dn(e.use,i,o,r);return f`<div class="live-day" title=${M(n,"live_day_hint")}>
    <svg viewBox=${`0 0 ${i} ${o}`} preserveAspectRatio="none" aria-hidden="true">
      ${s?le`<path d=${`${s}L${i},${o}L0,${o}Z`} class="live-day-solar"></path>`:g}
      ${a?le`<path d=${a} class="live-day-use"></path>`:g}
    </svg>
    <span>24 h</span>
  </div>`}function ig(n,e,t,r,i){let o=e.car,s=(m,p)=>M(n,m,p),a=Cu(o.soc),l=o.home?o.charging?`\u26A1 ${s("live_car_charging")}${o.chargingW?` \xB7 ${Be(n,o.chargingW)}`:""}`:o.plugged?`\u{1F50C} ${s("live_car_plugged")}`:"":`${s("live_car_away")}${o.where?` \xB7 ${o.where}`:""}${o.distance!==null?` \xB7 ${U(n,o.distance,o.distance<10?1:0)} km`:""}`,c=o.entities,u=i?f`<button class="live-fold" title=${s(i.folded?"live_unfold":"live_fold")} aria-label=${s(i.folded?"live_unfold":"live_fold")} aria-expanded=${!i.folded} @click=${i.toggle}>${i.folded?"+":"\u2212"}</button>`:g,d=(m,p,h,w)=>f`<button class="live-btn ${m?"live-on":""}" title=${p} aria-label=${p} aria-pressed=${m??!1} @click=${_=>(_.stopPropagation(),w())}>${h}</button>`;return i?.folded?f`<div class="live-card live-card-car live-folded ${o.charging?"live-charging":""} ${o.home?"":"live-away"}" data-i=${t} style=${`--live-soc:${a}`} title=${e.name}>
      <div class="live-own">
        ${nn((o.soc??0)/100,a)}
        <div class="live-own-text"><b>${o.soc!==null?`${Math.round(o.soc)} %`:"\u{1F697}"}</b></div>
      </div>
      ${u}
    </div>`:f`<div class="live-card live-card-car ${o.charging?"live-charging":""} ${o.home?"":"live-away"}" data-i=${t} style=${`--live-soc:${a}`}>
    ${u}
    <div class="live-own">
      ${nn((o.soc??0)/100,a)}
      <div class="live-own-text"><b>${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b><span>${o.range!==null?`${Math.round(o.range)} ${o.rangeUnit}`:""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${l?f`<div class="live-status">${l}</div>`:g}
      ${o.inside!==null?f`<div class="live-status">🌡 ${U(n,o.inside,1)} °C</div>`:g}
      ${o.departure?f`<div class="live-status">⏰ ${s("live_car_departure",{time:o.departure})}</div>`:g}
      ${o.open.length?f`<div class="live-status live-warn">⚠ ${s("live_car_open",{parts:o.open.join(", ")})}</div>`:g}
      <div class="live-actions">
        ${c.lock?d(o.locked,s(o.locked?"live_car_unlock":"live_car_lock"),o.locked?"\u{1F512}":"\u{1F513}",()=>{o.locked&&!confirm(s("live_car_unlock_confirm",{name:e.name}))||r("lock",o.locked?"unlock":"lock",c.lock)}):g}
        ${c.climate?d(o.climateOn,s("live_car_climate"),"\u2744",()=>r(c.climate.split(".")[0],o.climateOn?"turn_off":"turn_on",c.climate)):g}
        ${c.charge&&o.home?d(o.charging,s("live_car_charge"),"\u26A1",()=>r(c.charge.split(".")[0],"toggle",c.charge)):g}
      </div>
    </div>
  </div>`}function og(n,e){let t=e.game,r=t.since!==null?M(n,"live_game_since",{time:new Intl.DateTimeFormat(n?.language??navigator.language,{hour:"2-digit",minute:"2-digit"}).format(new Date(t.since))}):"",i=[e.artist,r].filter(Boolean).join(" \xB7 ");return f`<div class="live-status live-game-who">${t.avatar?f`<img class="live-avatar" src=${t.avatar} alt="" loading="lazy" />`:g}<span>${i||e.name}</span></div>
    ${t.achievements?f`<div class="live-status" title=${M(n,"live_game_achievements")}>🏆 ${t.achievements}</div>`:g}`}function sg(n,e,t,r){let i=e.media,o=l=>M(n,l),s=`rgb(${i.color.join(",")})`,a=(l,c,u)=>f`<button class="live-btn" title=${l} aria-label=${l} @click=${d=>(d.stopPropagation(),r("media_player",u,i.entity))}>${c}</button>`;return f`<div class="live-card live-card-media" data-i=${t} style=${`--live-soc:${s}`} @click=${i.game?g:l=>l.currentTarget.classList.toggle("live-open")}>
    ${i.picture?f`<img class="live-cover" src=${i.picture} alt="" loading="lazy" />`:f`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${i.title}>${i.title||i.name}</div>
      ${i.game?og(n,i):f`<div class="live-status">${i.artist||i.app||i.name}</div>`}
      ${i.game?g:f`<div class="live-actions">
            ${a(o("live_media_prev"),"\u23EE","media_previous_track")} ${a(o("live_media_playpause"),"\u23EF","media_play_pause")} ${a(o("live_media_next"),"\u23ED","media_next_track")}
            ${i.volume!==null?f`<input
                  class="live-volume"
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(Math.round(i.volume*100))}
                  aria-label=${o("live_media_volume")}
                  @click=${l=>l.stopPropagation()}
                  @change=${l=>r("media_player","volume_set",i.entity,{volume_level:Number(l.target.value)/100})}
                />`:g}
          </div>`}
    </div>
  </div>`}function Nu(n){let e=[...n.querySelectorAll(".live-card")].filter(u=>u.style.visibility!=="hidden"),t=[],r=e[0]?.parentElement?.clientWidth??0,i=e.map(u=>{let[d,m]=[Number(u.dataset.x),u.offsetWidth],p=r?r>m+16?Math.min(Math.max(d,m/2+8),r-m/2-8):r/2:d;return u.style.setProperty("--live-dx",`${Math.round(d-p)}px`),{el:u,x:p,y:Number(u.dataset.y),w:m,h:u.offsetHeight}}).sort((u,d)=>d.y-u.y),o=e[0]?.parentElement?.getBoundingClientRect(),s=n.host,l=(s?s.getRootNode().querySelector?.(".nf-card-rooms"):null)?.getBoundingClientRect(),c=o&&l&&l.height>0&&l.bottom>o.top?l.bottom-o.top+8:0;for(let u of i){let d=Math.max(u.y,c+u.h);for(let p=0;p<12;p++){let h={x0:u.x-u.w/2,x1:u.x+u.w/2,y0:d-u.h,y1:d},w=t.find(_=>h.x0<_.x1+6&&h.x1>_.x0-6&&h.y0<_.y1+6&&h.y1>_.y0-6);if(!w||(d=Math.max(w.y0-8,c+u.h),d===c+u.h&&w.y0-8<d))break}t.push({x0:u.x-u.w/2,x1:u.x+u.w/2,y0:d-u.h,y1:d});let m=Math.max(0,u.y-d);u.el.style.transform=`translate(${Math.round(u.x)}px, ${Math.round(d)}px) translate(-50%, -100%)`,u.el.style.setProperty("--live-thread",`${Math.round(18+m)}px`)}}function ag(n,e,t){let r=e.printer,i=(c,u)=>M(n,c,u),o=r.progress??0,s=c=>new Intl.DateTimeFormat(n?.language??navigator.language,{hour:"2-digit",minute:"2-digit"}).format(new Date(c)),a=r.remaining!==null?r.remaining>=60?`${Math.floor(r.remaining/60)} h ${Math.round(r.remaining%60)} min`:`${Math.round(r.remaining)} min`:null,l=[r.nozzle!==null?`${i("printer_nozzle")} ${Math.round(r.nozzle)}\xB0`:null,r.bed!==null?`${i("printer_bed")} ${Math.round(r.bed)}\xB0`:null].filter(Boolean).join(" \xB7 ");return f`<div class="live-card live-card-printer ${r.printing?"live-charging":""}" data-i=${t}>
    <div class="live-own">
      ${r.picture?f`<img class="live-print-pic" src=${r.picture} alt="" />`:nn(o/100,r.printing?"#38bdf8":"#8aa0c8")}
      <div class="live-own-text"><b>${r.progress!==null?`${Math.round(o)} %`:"\u2013"}</b><span>${i(`printer_${r.printing?"printing":/finish|complete|fertig/.test(r.status)?"done":/pause/.test(r.status)?"paused":/error|fail/.test(r.status)?"error":"idle"}`)}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${r.job?f`<div class="live-status">${r.job}</div>`:g}
      ${r.printing&&(r.endsAt||a)?f`<div class="live-status">⏱ ${[a,r.endsAt?i("printer_done_at",{time:s(r.endsAt)}):null].filter(Boolean).join(" \xB7 ")}</div>`:g}
      ${r.layer!==null?f`<div class="live-status">▤ ${i("printer_layer")} ${r.layer}${r.layers?` / ${r.layers}`:""}</div>`:g}
      ${l?f`<div class="live-status">🌡 ${l}</div>`:g}
      ${r.filaments.length?f`<div class="live-filaments">${r.filaments.map(c=>f`<i style=${`background:${c}`}></i>`)}</div>`:g}
    </div>
  </div>`}function lg(n,e,t){let r=e.pump,i=a=>M(n,a),o=a=>a===null?"\u2013":`${U(n,a,1)}\xB0`,s={heating:"\u{1F525}",water:"\u{1F6BF}",cooling:"\u2744",defrost:"\u{1F9CA}",idle:"\u23F8"}[r.mode];return f`<div class="live-card live-card-heatpump ${r.mode==="idle"?"":"live-charging"}" data-i=${t}>
    <div class="live-own">
      ${nn(Math.min(1,(r.cop??0)/6),(r.cop??0)>=3.5?"#4ade80":(r.cop??0)>=2.5?"#facc15":"#fb923c")}
      <div class="live-own-text"><b>${r.cop!==null?U(n,r.cop,1):s}</b><span>${r.cop!==null?"COP":""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      <div class="live-status">${s} ${i(`heatpump_${r.mode}`)}</div>
      ${r.flow!==null||r.return!==null?f`<div class="live-row live-heat"><span>${i("heatpump_flow_return")}</span><b>${o(r.flow)} → ${o(r.return)}</b></div>`:g}
      ${r.heat!==null?f`<div class="live-row live-heat"><span>${i("heatpump_heat")}</span><b>${Be(n,r.heat)}</b></div>`:g}
      ${r.power!==null?f`<div class="live-row live-house"><span>${i("heatpump_power")}</span><b>${Be(n,r.power)}</b></div>`:g}
      ${r.outside!==null?f`<div class="live-status">🌡 ${i("heatpump_outside")} ${o(r.outside)}</div>`:g}
    </div>
  </div>`}function Wu(n,e,t,r,i){return e.length?f`<div class="live-cards">
    ${e.map((o,s)=>o.kind==="house"?tg(n,o,s,r):o.kind==="car"?ig(n,o,s,t,i):o.kind==="printer"?ag(n,o,s):o.kind==="heatpump"?lg(n,o,s):sg(n,o,s,t))}
  </div>`:g}var Lu=ie`
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
      font-size: 12px;
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
    font-size: 13px;
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
  .live-card-house:not(.live-folded),
  .live-card-car:not(.live-folded) {
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
  /* a finger needs more than 20 px */
  @media (pointer: coarse) {
    .live-fold {
      width: 28px;
      height: 28px;
      line-height: 28px;
    }
    .live-card-house:not(.live-folded),
    .live-card-car:not(.live-folded) {
      padding-right: 38px;
    }
    .live-folded {
      padding-right: 38px;
    }
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
  @media (prefers-reduced-motion: reduce) {
    .live-card-car.live-charging {
      animation: none;
    }
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
  .live-game-who {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .live-avatar {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    object-fit: cover;
    flex: none;
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
  .live-fold,
  .live-btn {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .live-fold:active,
  .live-btn:active {
    transform: scale(0.96);
  }
  @media (prefers-reduced-motion: reduce) {
    .live-fold:active,
    .live-btn:active {
      transform: none;
    }
  }
`;function pi(n){return n.toLocaleLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Xo=n=>n.points.length>=3;function Ou(n,e,t){return n.rooms.filter(Xo).find(r=>O([e,t],r.points))}function cg(n,e,t,r){let i=[];for(let a of e.rooms.filter(Xo)){let[l,c]=it(a.points);i.push({kind:"room",name:a.name,where:r?e.name:"",floorId:e.id,roomId:a.id,entity:null,icon:null,x:l,z:c,y:0})}let o=new Set,s=(a,l,c,u)=>{if(o.has(a)||!(a in n.states))return;o.add(a);let d=Ou(e,l,c),m=[d?.name,r?e.name:void 0].filter(p=>!!p).join(" \xB7 ");i.push({kind:"device",name:B(n,a),where:m,floorId:e.id,roomId:d?.id??null,entity:a,icon:L(a),x:l,z:c,y:u})};for(let a of e.placements){let l=a.y??It(L(a.entity_id)??"sensor",Ee(e,a.x,a.z),a.mount);s(a.entity_id,a.x,a.z,l)}for(let a of e.furniture){let l=t.get(a.id),c=l?.entity??l?.power;if(!c)continue;let u=Ee(e,a.x,a.z)-.3;s(c,a.x,a.z,Math.min(u,Math.max(.5,a.h)))}for(let a of e.notes??[]){if(!a.text)continue;let l=Ou(e,a.x,a.z),c=[l?.name,r?e.name:void 0].filter(u=>!!u).join(" \xB7 ");i.push({kind:"note",name:`\u270E ${a.text.length>60?`${a.text.slice(0,59)}\u2026`:a.text}`,where:c,floorId:e.id,roomId:l?.id??null,entity:null,icon:null,x:a.x,z:a.z,y:1.3})}return i}function Bu(n,e){let t=bt(n,e.floors),r=e.floors.length>1,i=e.floors.flatMap(o=>cg(n,o,t,r));for(let o of e.settings.circuits??[]){let s=e.floors.flatMap(d=>d.rooms.filter(m=>o.rooms.includes(m.id)&&Xo(m)).map(m=>({f:d,r:m})));if(!s.length)continue;let[{f:a,r:l}]=s,[c,u]=it(l.points);i.push({kind:"circuit",name:`\u{1F50C} ${o.name}`,where:s.map(d=>d.r.name).join(", "),floorId:a.id,roomId:l.id,entity:null,icon:null,x:c,z:u,y:0})}return i}function ug(n,e){return(pi(n.name).startsWith(e)?0:2)+(n.kind==="room"?0:1)}function Vu(n,e,t=8){let r=pi(e).split(/\s+/).filter(Boolean);if(r.length===0)return[];let i=pi(e.trim());return n.filter(o=>{let s=pi([o.name,o.where,o.entity].filter(Boolean).join(" "));return r.every(a=>s.includes(a))}).map(o=>({item:o,cost:ug(o,i)})).sort((o,s)=>o.cost-s.cost||o.item.name.localeCompare(s.item.name)).slice(0,t).map(o=>o.item)}var dg=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],hg=[2200,2700,3200,4e3,5e3,6500],pg=["hs","rgb","rgbw","rgbww","xy"],mg=4,Gu=16,Ku=32,fg=128;function ts(n){let e=n.attributes.supported_color_modes??[],t=e.some(r=>pg.includes(r));return{dim:e.some(r=>r!=="onoff"),color:t,temp:e.includes("color_temp")}}function ns(n){return((n.attributes.supported_features??0)&mg)!==0&&typeof n.attributes.current_position=="number"}var es=class extends pe{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},myPosition:{attribute:!1},low:{type:Boolean,reflect:!0}};t(e,t){return M(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:B(this.hass,this.entity)}))}call(e,t,r={}){this.hass.callService(e,t,{entity_id:this.entity,...r})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){me(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((r,i)=>{let o=i/t*Math.PI*2-Math.PI/2;return f`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${r}</div>`})}renderLight(e){let t=ts(e),r=e.state==="on",i=r&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):r?100:0,o=Array.isArray(e.attributes.rgb_color)?e.attributes.rgb_color.slice(0,3):null,s=o?`#${o.map(p=>Math.max(0,Math.min(255,Math.round(p))).toString(16).padStart(2,"0")).join("")}`:"#ffb547",a=p=>!!o&&Math.abs(o[0]-p[0])+Math.abs(o[1]-p[1])+Math.abs(o[2]-p[2])<45,l=t.color?dg.map(p=>f`<button class="qm-swatch ${a(p)?"qm-swatch-on":""}" style="background:rgb(${p.join(",")});color:rgb(${p.join(",")})" aria-label=${`RGB ${p.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:p})}></button>`):t.temp?hg.map(p=>f`<button class="qm-swatch" style="background:${gg(p)}" aria-label=${`${p} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:p})}></button>`):[],c=r&&o?`background:rgb(${o.join(",")});box-shadow:0 0 26px rgba(${o.join(",")},0.55)`:"",u=e.attributes.min_color_temp_kelvin??2200,d=e.attributes.max_color_temp_kelvin??6500,m=e.attributes.color_temp_kelvin??Math.round((u+d)/2);return f`<div class="qm-ring ${l.length?t.color?"qm-color-ring":"":"qm-ring-small"}">
        ${this.ring(l)}
        <button class="qm-power ${r?"qm-on":""}" style=${c} aria-pressed=${r} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${r?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?f`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${p=>this.call("light","turn_on",{brightness_pct:Number(p.target.value)})}
          />`:g}
      ${t.color||t.temp?f`<div class="qm-color-bar">
            ${t.color?f`<label class="qm-pick" title=${this.t("color_pick")}>
                  <input
                    type="color"
                    .value=${s}
                    @input=${p=>{let h=p.target.value;this.call("light","turn_on",{rgb_color:[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)]})}}
                  />
                </label>`:g}
            ${t.temp?f`<input
                  class="qm-temp-slider"
                  type="range"
                  min=${u}
                  max=${d}
                  step="100"
                  .value=${String(m)}
                  aria-label=${this.t("color_temp")}
                  @change=${p=>this.call("light","turn_on",{color_temp_kelvin:Number(p.target.value)})}
                />`:g}
          </div>`:g}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,r=e.state==="opening"||e.state==="closing",i=ns(e),o=(u,d,m,p=!1)=>f`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${d} @click=${m}>${u}</button>`,s=u=>t!==null&&Math.abs(t-u)<3,a=[o("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(u=>o(`${u}`,`${u} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:u}),s(u))):[],o("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(u=>o(`${u}`,`${u} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:u}),s(u))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),r),...this.myPosition!=null?[o("My",this.t("cover_my_go",{p:this.myPosition}),()=>this.ask()&&(i?this.call("cover","set_cover_position",{position:this.myPosition}):this.call("cover","stop_cover")),s(this.myPosition))]:[]],l=t===null?e.state==="closed"?100:0:100-t,c=t!==null||r||e.state==="open"||e.state==="closed";return f`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c&&l<100?"qm-on":""}"
          style="--closed:${l}%"
          ?disabled=${!c}
          aria-label=${r?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>r?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ce(this.hass,e)}</b>
        </button>
      </div>
      ${i?f`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${u=>this.call("cover","set_cover_position",{position:Number(u.target.value)})}
          />`:g}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,r=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&fg&&r!==null?f`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${r} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(r)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:t&(Gu|Ku)?f`<div class="qm-tilt-buttons">
        ${t&Gu?f`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:g}
        ${t&Ku?f`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:g}
      </div>`:g}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",r=e.entity_id.split(".")[0];return f`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(r==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ce(this.hass,e)}</b>
      </button>
    </div>`}renderMedia(e){let t=!["off","standby","unavailable","unknown"].includes(e.state),r=e.state==="playing",i=e.attributes,o=typeof i.volume_level=="number"?Math.round(i.volume_level*100):null,s=Array.isArray(i.source_list)?i.source_list.slice(0,24):[],a=[i.media_title,i.media_artist].filter(d=>typeof d=="string"&&d).join(" \xB7 "),l=d=>f`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d=${d} /></svg>`,c=(d,m,p,h=!1)=>f`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${m} title=${m} @click=${p}>${d}</button>`,u=t?[c(l(r?"M6 5h4v14H6zM14 5h4v14h-4z":"M8 5v14l11-7z"),this.t(r?"media_pause":"media_play"),()=>this.call("media_player","media_play_pause"),r),c(l("M6 6h2v12H6zm3.5 6 8.5 6V6z"),this.t("media_previous"),()=>this.call("media_player","media_previous_track")),c(l("M16 6h2v12h-2zM6 18l8.5-6L6 6z"),this.t("media_next"),()=>this.call("media_player","media_next_track"))]:[];return f`<div class="qm-ring ${u.length?"":"qm-ring-small"}">
        ${this.ring(u)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("media_player",t?"turn_off":"turn_on")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${o!==null&&t?`${o} %`:ce(this.hass,e)}</b>
        </button>
      </div>
      ${a?f`<div class="qm-media-title">${a}</div>`:g}
      ${o!==null?f`<input class="qm-slider" type="range" min="0" max="100" .value=${String(o)} aria-label=${this.t("media_volume")} @change=${d=>this.call("media_player","volume_set",{volume_level:Number(d.target.value)/100})} />`:g}
      ${s.length?f`<div class="qm-play-head">${this.t("media_sources")}</div>
            <div class="qm-play">${s.map(d=>f`<button class="qm-chip ${i.source===d?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:d})}>${d}</button>`)}</div>`:g}
      ${this.presets?.length?f`<div class="qm-play-head">${this.t("presets")}</div>
            <div class="qm-play">${this.presets.map(d=>f`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:d.type,media_content_id:d.content})}>${d.label}</button>`)}</div>`:g}`}render(){let e=this.hass?.states[this.entity];if(!e)return g;let t=L(this.entity),r=V(e)&&!fn(e)?f`<p class="qm-note">${ce(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="media"?this.renderMedia(e):this.renderToggle(e);return f`<div class="qm" role="dialog" aria-label=${B(this.hass,this.entity)}>
      <div class="qm-title">${B(this.hass,this.entity)}</div>
      ${r}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Le,ie`
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
      font-size: 13px;
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
      @media (prefers-reduced-motion: reduce) {
        :host([low]) .qm {
          animation: none;
        }
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
      .qm-color-ring::before {
        content: "";
        position: absolute;
        inset: 14px;
        border-radius: 50%;
        background: conic-gradient(#ffb547, #ffecd2, #37e0ff, #5b7cff, #be5aff, #ff5fd2, #ff4646, #78ff96, #ffb547);
        opacity: 0.22;
        mask: radial-gradient(circle, transparent 52%, #000 54%);
        -webkit-mask: radial-gradient(circle, transparent 52%, #000 54%);
        pointer-events: none;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 32px;
        height: 32px;
        border: 2px solid rgba(255, 255, 255, 0.35);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
        transition: transform 0.14s ease, box-shadow 0.14s ease;
      }
      .qm-swatch:hover { transform: scale(1.1); }
      .qm-swatch-on {
        border-color: #fff;
        transform: scale(1.14);
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5), 0 0 14px currentColor;
      }
      .qm-color-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 2px 0 4px;
      }
      .qm-pick input[type="color"] {
        width: 30px;
        height: 30px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        padding: 0;
        background: none;
        cursor: pointer;
      }
      .qm-temp-slider {
        flex: 1;
        height: 8px;
        border-radius: 999px;
        appearance: none;
        background: linear-gradient(90deg, #ffaa44, #fff4e0, #b8dcff);
        cursor: pointer;
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
    `]};function gg(n){let e=Math.min(1,Math.max(0,(n-2200)/4300)),t=(r,i)=>Math.round(r+(i-r)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("nf-quick-menu")||customElements.define("nf-quick-menu",es);var _g=new URL(import.meta.url),bg=new URL("./nextfloor-3d.js?v=e6afb642186e",_g).href,Uu;function qu(){return Uu??=import(bg),Uu}function ju(n){if(!n||n.state!=="on")return 0;let e=typeof n.attributes.percentage=="number"?n.attributes.percentage:60;return e<=0?0:.2+.6*Math.min(100,e)/100}var wg=new Set(["on","home","open","true","active","playing","heat","heating"]);function mi(n,e){let t=e.show_when;if(!t?.entity||!n)return!0;let r=n.states[t.entity];if(!r||V(r))return!0;let i=String(r.state).toLowerCase(),o=(t.state??"").split(",").map(a=>a.trim().toLowerCase()).filter(Boolean),s=o.length?o.includes(i):wg.has(i)||Number.isFinite(Number(i))&&Number(i)>0;return t.invert?!s:s}function rs(n,e){let t=[];for(let r of e.floors)for(let i of r.furniture)mi(n,i)||t.push(i.id);return t.sort()}function Zu(n,e){if(!e.length)return n;let t=new Set(e);return{...n,floors:n.floors.map(r=>r.furniture.some(i=>t.has(i.id))?{...r,furniture:r.furniture.filter(i=>!t.has(i.id))}:r)}}var Yu="image:";function is(n,e,t){let r=(e??"").trim();if(!r)return null;if(r.startsWith(Yu))return t(r.slice(Yu.length));if(/^(https?:\/\/|\/)/.test(r))return r;if(/^[a-z_]+\.[a-z0-9_]+$/.test(r)){let i=n?.states[r]?.attributes.entity_picture;return typeof i=="string"&&i?i:null}return null}var Ju="nextfloor.lock3d";function os(n){try{return localStorage.getItem(n)}catch{return null}}var Qu=520,yg=340,as=class extends pe{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},solidWalls:{attribute:!1},glassWalls:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},markersOutside:{attribute:!1},tapInRoom:{type:Boolean},roomDoubleTap:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},ownLook:{attribute:!1},furnitureColors:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},weatherDensity:{attribute:!1},timeOfDay:{attribute:!1},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_liveEnergy:{state:!0},_liveCards:{state:!0},_liveCardOn:{state:!0},_houseFolded:{state:!0},_carsFolded:{state:!0},_swipe:{state:!0},_menu:{state:!0},_quickGroup:{state:!0},_pipCamera:{state:!0},_pipTick:{state:!0},_screensaver:{state:!0},_camBookmarks:{state:!0},_pluginWindow:{state:!0},_plate:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},centralOpen:{attribute:!1},keepCamera:{attribute:!1},sunShadows:{attribute:!1},plain:{attribute:!1},rightBack:{attribute:!1},templateName:{attribute:!1},readable:{type:Boolean,reflect:!0},today:{attribute:!1},_todayOpen:{state:!0},_todayItems:{state:!0},_forecast:{state:!0},zoom:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},thumbsFolded:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},clock:{attribute:!1},lockButton:{attribute:!1},walkButton:{attribute:!1},travelButton:{attribute:!1},_travel:{state:!0},_walking:{state:!0},_stick:{state:!0},_locked:{state:!0},_now:{state:!0},roomLabels:{attribute:!1},deviceLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},announcements:{attribute:!1},sensorBar:{attribute:!1},screenName:{attribute:!1},_announcement:{state:!0},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},outsideOpen:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_shortStage:{state:!0},_tinyStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_alertsAll:{state:!0},_sceneFired:{state:!0}};stopAnnouncements=null;announceTimer;get liveCardsOn(){return this._tinyStage?!1:this.holograms??this._liveCardOn}cloud=0;confirmSet=new Set;shownStartView;pipCloseTimer;pipRefreshTimer;lastPipTriggerState;lastActivity=Date.now();placementInfo=new Map;tempLists=new Map;live=null;travelTimer;dayCurves=null;curvesAt=0;clockTimer;stopPlugins=null;pluginsDirty=!1;resizeObs=null;alertSrc=null;alertTimer;contactTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;forecastAt=0;forecastKey="";todayAt=0;todayDay="";swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;tapPins=new Map;heatValues=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.solidWalls=!1,this.glassWalls=null,this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.markersOutside=null,this.tapInRoom=!1,this.roomDoubleTap="auto",this.heatMode="none",this.theme="neon",this.accent=null,this.ownLook=null,this.furnitureColors=null,this.furnish=!1,this.weather=!0,this.weatherEntityId=null,this.weatherDensity=1,this.showEnergy=!0,this.flows=null,this._liveEnergy=null,this._liveCards=[],this._liveCardOn=os("nextfloor.cards")!=="0",this._houseFolded=os("nextfloor.house_card_folded")==="1",this._carsFolded=os("nextfloor.car_card_folded")==="1",this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._quickGroup=null,this._pipCamera=null,this._pipTick=0,this._screensaver=!1,this._camBookmarks=wc(),this._pluginWindow=null,this._plate=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("nextfloor.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.thumbsFolded=!1,this.clean=!1,this.cleanButton=!1,this.clock=null,this.lockButton=!1,this.walkButton=!1,this.travelButton=!1,this._travel=null,this._walking=!1,this._stick=null,this._now=Date.now(),this._locked=(()=>{try{return localStorage.getItem(Ju)==="1"}catch{return!1}})(),this.roomLabels=!0,this.deviceLabels=!0,this.sunShadows=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this._shortStage=!1,this._tinyStage=!1,this._phoneStage=!1,this.alerts=!0,this.alertJump=!1,this.announcements=!1,this.sensorBar=!0,this.screenName=null,this._announcement=null,this._alerts=[],this._alertsAll=!1,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.outsideOpen=!1,this.holograms=null;try{this._flows=localStorage.getItem("nextfloor.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.syncClock(),this.stopPlugins=Dt(()=>{this.pluginsDirty=!0,this.requestUpdate()}),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.stopPlugins?.(),this.stopPlugins=null,this.listenToAnnouncements(!1),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.contactTimer),this.contactTimer=void 0,clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.pipCloseTimer),clearInterval(this.pipRefreshTimer),this.pipCloseTimer=void 0,this.pipRefreshTimer=void 0,clearInterval(this.travelTimer),this.travelTimer=void 0,this.live=null,this.viewer?.dispose(),this.viewer=null}syncClock(){clearInterval(this.clockTimer),this.clockTimer=void 0,this._now=Date.now();let e=this.building?.settings.tablet_ui,t=(e?.sidebar??"off")!=="off"&&e?.sidebar_clock!==!1,r=e?.screensaver_minutes??0;if(this.isConnected&&(this.clock||t||r>0)){let i=(t||this._screensaver)&&e?.clock_seconds?1e3:1e4;this.clockTimer=setInterval(()=>{this._now=Date.now(),r>0&&!this._screensaver&&!this.furnish&&Date.now()-this.lastActivity>=r*6e4&&(this._screensaver=!0)},i)}}openPipCamera(e,t=20){clearTimeout(this.pipCloseTimer),clearInterval(this.pipRefreshTimer),this._pipCamera=e,this._pipTick=Date.now(),this._screensaver=!1,this.lastActivity=Date.now(),this.pipRefreshTimer=setInterval(()=>this._pipTick=Date.now(),2e3),this.pipCloseTimer=setTimeout(()=>this.closePipCamera(),Math.max(5,Math.min(120,t))*1e3)}closePipCamera(){clearTimeout(this.pipCloseTimer),clearInterval(this.pipRefreshTimer),this.pipCloseTimer=void 0,this.pipRefreshTimer=void 0,this._pipCamera=null}checkPipTrigger(){let e=this.building?.settings.tablet_ui,t=e?.pip_trigger,r=e?.pip_camera;if(!t||!r||!this.hass?.states[t])return;let i=this.hass.states[t].state;if(this.lastPipTriggerState===void 0){this.lastPipTriggerState=i;return}if(i!==this.lastPipTriggerState){let o=this.lastPipTriggerState;this.lastPipTriggerState=i,((t.startsWith("button.")||t.startsWith("input_button.")||t.startsWith("event."))&&o!=="unknown"||i==="on"||i==="detected"||i==="open")&&this.openPipCamera(r,e?.pip_duration??20)}}addCamBookmark(){if(!this.viewer)return;let e=prompt(M(this.hass,"cam_bookmark_prompt"))?.trim();if(!e)return;let t=[...this._camBookmarks,{id:String(Date.now()),name:e.slice(0,24),view:this.viewer.currentView()}].slice(0,8);this._camBookmarks=t,$o(t)}removeCamBookmark(e){let t=this._camBookmarks.filter(r=>r.id!==e);this._camBookmarks=t,$o(t)}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nf-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let r=t[0]?.contentRect,i=(r?.width??1e3)<700||(r?.height??1e3)<Qu,o=(r?.height??1e3)<Qu;o!==this._shortStage&&(this._shortStage=o);let s=(r?.height??1e3)<yg;s!==this._tinyStage&&(this._tinyStage=s);let a=(r?.width??1e3)<520;a!==this._phoneStage&&(this._phoneStage=a),i!==this._narrowStage&&(this._narrowStage=i,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await qu();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".nf-stage");t.addEventListener("pointerdown",r=>{this._central&&!this.centralOpen&&!r.target?.closest?.(".nf-central, .nf-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(r,i)=>this.fire("room-tap",{floorId:r,roomId:i}),onNoteDone:r=>{this.hass&&Ws(this.hass,r).catch(()=>{})},noteDoneLabels:{done:M(this.hass,"note_done"),last:r=>M(this.hass,"note_last_done",{d:r})},onFloorTap:r=>this.fire("floor-tap",{floorId:r}),floorInfo:r=>r.rooms.length===1?M(this.hass,"floor_rooms_one"):M(this.hass,"floor_rooms",{n:r.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(r,i,o)=>this.onDeviceTap(r,i,o),onDeviceHold:(r,i,o)=>this.onDeviceHold(r,i,o),onRoomDoubleTap:(r,i)=>this.onRoomDoubleTap(r,i),onDeviceSwipe:(r,i,o,s,a)=>this.onDeviceSwipe(r,i,o,s,a),onFurnitureSelect:r=>this.fire("furniture-select",{id:r}),onFurnitureMove:(r,i,o)=>this.fire("furniture-move",{id:r,x:i,z:o}),onDeviceSelect:r=>this.fire("device-select",{id:r}),onDeviceMove:(r,i,o)=>this.fire("device-move",{id:r,x:i,z:o}),onStats:r=>{this.showStats&&(this._stats=r)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setPaintedWalls(this.solidWalls),this.viewer.setGlassWalls((this.glassWalls??20)/100),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setOwnLook(this.filledOwnLook),this.viewer.setFurnitureColors(this.furnitureColors??null),this.viewer.setNotePhotos(r=>this.hass?is(this.hass,r,i=>this.storedPicture(this.hass,i)):null),this.viewer.setNavigationLocked(this._locked),this.viewer.setFurnishMode(this.furnish),this.viewer.setTapInRoom(this.tapInRoom),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setKeepCamera(!!this.keepCamera),this.viewer.setSunShadows(this.sunShadows!==!1),this.viewer.setPlain(!!this.plain),this.viewer.setRightBack(!!this.rightBack),this.viewer.setZoom(this.zoom??1),this._low=this.viewer.low,this.viewer.setMeshSource(r=>this.hass?.fetchWithAuth?this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(r)}`).then(i=>i.ok?i.arrayBuffer():null):Promise.resolve(null)),this.viewer.setPacks([...Oi()]),this.shownPacks=sr(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding(this.hass)),this.viewer.setMap(this.building.settings.map,this.building.settings.north??0)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("thumbsFolded")&&this.thumbsFolded&&(this._thumbsCompact=!0)}updated(e){(e.has("announcements")||e.has("hass")&&this.announcements&&!this.stopAnnouncements)&&this.listenToAnnouncements(this.announcements&&!!this.hass&&this.isConnected),e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass);let t=this._pluginWindow?.node;e.has("hass")&&t&&"hass"in t&&(t.hass=this.hass),this._central&&!this.centralOpen&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1),e.has("centralOpen")&&this.centralOpen&&(this._central=!0),(e.has("clock")||e.has("building"))&&this.syncClock(),e.has("hass")&&this.checkPipTrigger();let r=this.viewer;if(!r)return;if(this.shownPacks!==sr()&&(this.shownPacks=sr(),r.setPacks([...Oi()]),this.hass&&this.building&&r.setParked(Do(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),a=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,r.setStartView(this.startViewOf()),r.setBuilding(this.shownBuilding(this.hass)),r.setMap(this.building?.settings.map,this.building?.settings.north??0),a&&this.floorId===null&&r.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(r.setStartView(this.startViewOf()),this.floorId===null&&r.resetView()),(e.has("building")||e.has("theme")||e.has("ownLook")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let i=this.markersOutside?["markersOutside","floorId","roomId"]:["markersOutside"],o=this.pluginsDirty||["building","markerMode","heatMode","flows","alerts","dimmed",...i].some(s=>e.has(s));if(this.pluginsDirty=!1,(o||e.has("hass"))&&this.syncDevices(o),e.has("autoOrbit")&&r.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage")||e.has("_phoneStage"))&&r.setLabelInset(this._thumbs.length&&!this._phoneStage?this.narrowThumbs?136:184:0),e.has("floorId")&&r.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&r.selectRoom(this.roomId),e.has("outsideOpen")&&e.get("outsideOpen")!==void 0){let s=this.building?.settings.outside_view;this.outsideOpen&&s?r.showView(s):!this.outsideOpen&&s&&this.floorId===null&&!this.roomId&&r.resetView()}e.has("tapInRoom")&&r.setTapInRoom(this.tapInRoom),e.has("wallMode")&&r.setWallMode(this.wallMode),e.has("solidWalls")&&r.setPaintedWalls(this.solidWalls),e.has("glassWalls")&&r.setGlassWalls((this.glassWalls??20)/100),e.has("explode")&&r.setExplode(this.explode),e.has("keepRoof")&&r.setKeepRoof(this.keepRoof),e.has("keepCamera")&&r.setKeepCamera(!!this.keepCamera),e.has("sunShadows")&&r.setSunShadows(this.sunShadows!==!1),e.has("plain")&&r.setPlain(!!this.plain),e.has("rightBack")&&r.setRightBack(!!this.rightBack),e.has("zoom")&&r.setZoom(this.zoom??1),e.has("floorStack")&&r.setFloorStack(this.floorStack),e.has("theme")&&r.setTheme(this.theme),e.has("_locked")&&r.setNavigationLocked(this._locked),e.has("accent")&&r.setAccent(this.accent??null),(e.has("ownLook")||e.has("building"))&&r.setOwnLook(this.filledOwnLook),e.has("furnitureColors")&&r.setFurnitureColors(this.furnitureColors??null),e.has("surfaceGrab")&&r.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&r.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(r.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&r.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&r.setSelectedDevice(this.selectedDevice),(e.has("weather")||e.has("weatherEntityId")||e.has("weatherDensity")||e.has("timeOfDay"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(r.setQuality(this.quality),this._low=r.low),e.has("showStats")&&r.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}shownFor=null;framePictureData=new Map;framePictures(e,t){let r=[];for(let i of t.floors)for(let o of i.notes??[])o.photo?.startsWith("image:")&&this.storedPicture(e,o.photo.slice(6));for(let i of t.floors)for(let o of i.furniture){if(!o.picture||!mi(e,o))continue;let s=is(e,o.picture,a=>this.storedPicture(e,a));s&&r.push({furnitureId:o.id,floorId:i.id,url:s,border:o.picture_border??0,fit:o.picture_fit==="contain"?"contain":"cover"})}return r}storedPicture(e,t){let r=this.framePictureData.get(t);return r!==void 0?r||null:(this.framePictureData.set(t,""),Ns(e,t).then(i=>{this.framePictureData.set(t,i),this.syncDevices(!0)}).catch(()=>{}),null)}shownBuilding(e){let t=this.building,r=rs(e,t),i=t.floors.filter(a=>a.layer&&this.hiddenLayers.has(a.id)).map(a=>a.id),o=[...r,...i.map(a=>`layer:${a}`)].join(",");if(this.shownFor?.building===t&&this.shownFor.key===o)return this.shownFor.shown;let s=Zu(t,r);return this.shownFor={building:t,key:o,shown:i.length?{...s,floors:s.floors.filter(a=>!i.includes(a.id))}:s},this.shownFor.shown}hiddenLayers=(()=>{try{return new Set(JSON.parse(localStorage.getItem("nextfloor.hidden_layers")??"[]"))}catch{return new Set}})();toggleLayer(e){this.hiddenLayers.has(e)?this.hiddenLayers.delete(e):this.hiddenLayers.add(e);try{localStorage.setItem("nextfloor.hidden_layers",JSON.stringify([...this.hiddenLayers]))}catch{}this.viewer&&this.building&&this.viewer.setBuilding(this.shownBuilding(this.hass)),this.requestUpdate()}renderLayers(){let e=(this.building?.floors??[]).filter(t=>t.layer);return!e.length||this.clean?g:f`<div class="nf-layers" role="group" aria-label=${M(this.hass,"floor_layer")}>
      ${e.map(t=>f`<button class="nf-chip" aria-pressed=${!this.hiddenLayers.has(t.id)} @click=${()=>this.toggleLayer(t.id)}>${this.hiddenLayers.has(t.id)?"\u25CC":"\u{1F441}"} ${t.name}</button>`)}
    </div>`}syncDevices(e){let t=this.viewer,r=this.building;if(!t||!r||!this.hass)return;let i=this._travel,o=i&&!i.loading?Kt(this.hass,i.history,i.t):this.hass;if((e||!this.openingLinks||this.linkedRegistry!==o.entities)&&(this.openingLinks=bn(o,r.floors),this.furnitureLinks=bt(o,r.floors),this.linkedRegistry=o.entities,this.findIndex=null,this.alertSrc=this.alerts?Wc(o,r,this.weatherEntityId,this.openingLinks):null,this.watched=jc({hass:o,building:r,openingLinks:this.openingLinks,furnitureLinks:this.furnitureLinks,needsRoomSensors:this.heatMode!=="none"||this.roomLabels,alertSources:this.alertSrc,weatherEntityId:this.weatherEntityId}),e=!0),!(e||this.watched.some(k=>this.shownStates.get(k)!==o.states[k])))return;rs(o,r).join(",")!==this.shownFor?.key&&t.setBuilding(this.shownBuilding(o)),this.shownStates=new Map(this.watched.map(k=>[k,o.states[k]])),this.refreshToday(r),this.refreshForecast(r);let a=An(o,r),l=tl(o,r.floors.some(k=>k.layer&&this.hiddenLayers.has(k.id))?this.shownBuilding(o):r);this.placementInfo=new Map(l.map(k=>[k.id,{floorId:k.floorId,roomId:k.roomId,x:k.x,z:k.z,y:k.y,rotation:k.rotation??0}]));let c=this.furnitureMarkers(o,r,new Set(l.map(k=>k.id)),new Set(a.map(k=>k.powerEntity)));a.push(...c.consumers);let u=En(o,r,a,Ze(r,k=>this.furnitureLinks?.get(k.id)?.power??null)),d=new Map(a.filter(k=>k.id!==k.powerEntity).map(k=>[k.id,k.power]));this.confirmSet=wt(o,r.floors);let m=new Set(this.liveCardsOn?this._liveCards.flatMap(k=>k.kind==="media"?[k.media.entity]:k.kind==="car"?[k.spot]:[]):[]);for(let k of r.floors)for(let R of k.outdoor??[]){if(!R.area_id&&!R.temp_entity&&!R.pump_entity)continue;let he=R.temp_entity?o.states[R.temp_entity]:void 0,I=R.pump_entity?o.states[R.pump_entity]:void 0,[q,ee]=it(R.points),ut=he&&Number.isFinite(Number(he.state))?`${U(o,ye(o,wr(Number(he.state),he.attributes.unit_of_measurement)),1)} ${de(o)}`:"",nt=!!I&&se(I);l.push({id:R.area_id?`outdoor:${R.id}`:R.pump_entity??R.temp_entity,floorId:k.id,roomId:null,x:q,z:ee,y:hr(k,R,q,ee)+.7,icon:Ne(R.type==="pool"?"pool":R.type==="terrace"?"table-chair":"tree-outline"),name:R.area_id&&o.areas?.[R.area_id]?.name||M(o,`out_${R.type}`),text:[ut,nt?M(o,"pool_pump_on"):""].filter(Boolean).join(" \xB7 "),active:nt,unavailable:!1,glow:null,show:"always"})}let p=new Map;for(let k of r.floors){for(let R of k.placements)R.pin_offset&&p.set(`${k.id}:${R.entity_id}`,R.pin_offset);for(let R of k.furniture)R.pin_offset&&p.set(`f:${R.id}`,R.pin_offset)}let h=k=>{let R=k.lamp?void 0:(k.furnitureId?p.get(`f:${k.furnitureId}`):void 0)??p.get(`${k.floorId}:${k.id}`);return R?{...k,x:k.x+(R.x??0),z:k.z+(R.z??0),y:k.y+(R.y??0)}:k};t.setDevices([...[...l,...c.markers].map(h).map(k=>{let R=k.show==="no_power"||"energyDevice"in k&&k.energyDevice?null:d.get(k.id)??null,he={...k,power:R,powerText:R===null?void 0:_e(o,R),effect:this.dimmed?void 0:k.effect,text:this.subMeterText(o,r,u,k.furnitureId)??k.text},I=k.ownName&&(k.showName||this.markerNames)?k.ownName:"",q=m.has(k.id)||!!k.furnitureId&&m.has(k.furnitureId);return{...he,pin:this.showPin(he)&&!q,full:k.show==="always",caption:I}})]),t.setPickTargets(c.targets,this.openingTargets(),this.secondBlinds()),t.setScreens(c.screens),t.setFridgeDoors(Ca(o,r.floors)),t.setCovers(ja(o,r)),t.setRobots(this.robotInfos(o,r));let w=new Map;for(let k of r.floors)for(let R of k.furniture)!ne(R.type)?.pet||!R.room_sensor||R.room_sensor==="none"||w.set(R.id,eo(o,k.rooms.filter(he=>he.points.length>=3),null,R.room_sensor)?.id??null);w.size&&t.setPetRooms(w),t.setRoofWindows(Fc(o,r)),t.setParked(Do(o,r)),t.setGateStates(ru(o,r));let _=new Map(r.floors.flatMap(k=>k.openings.map(R=>[R.id,R.type]))),v=$r(new Map([...this.openingLinks].map(([k,R])=>[k,Ue(o,R,_.get(k))])),r.floors);t.setOpeningStates(v),this.setAlerts(this.alertSrc?zo(o,r,this.alertSrc,this.openingLinks):[]),this.watchLostContacts(o);let $=[...l,...c.markers].map(k=>`${k.id}:${k.glow?`${k.glow.level.toFixed(1)}/${k.glow.color.map(R=>R.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...v].map(([k,R])=>`${k}:${R.open}:${R.cover===null?"-":R.cover.toFixed(1)}:${R.cover2==null?"-":R.cover2.toFixed(1)}`).join(";");if($!==this.thumbSig){let k=this.thumbSig==="";this.thumbSig=$,k||this.scheduleThumbs(1500)}let x=_u(o,r,a,r.energy.advanced?k=>this.furnitureLinks?.get(k.id)?.power??null:void 0),y=this.liveCars(o,r);for(let k of y){if(!k.car.home||!k.car.charging&&!k.car.plugged)continue;let R=r.floors.flatMap(q=>q.furniture.filter(ee=>ee.type==="wallbox").map(ee=>({floorId:q.id,x:ee.x,z:ee.z,y:1}))).sort((q,ee)=>Math.hypot(q.x-k.at.x,q.z-k.at.z)-Math.hypot(ee.x-k.at.x,ee.z-k.at.z))[0],he=R&&R.floorId===k.at.floorId&&Math.hypot(R.x-k.at.x,R.z-k.at.z)<9,I=R??Gn(r);!I||!k.car.charging&&!he||x.arcs.push({key:`car:${k.spot}`,from:I,to:{...k.at,y:.8},power:k.car.charging?k.car.chargingW??7e3:0,color:[80,175,255],...he?{via:[{...I,y:.35},{floorId:k.at.floorId,x:(I.x+k.at.x)/2,z:(I.z+k.at.z)/2,y:.08},{...k.at,y:.5}],cable:!0}:{}})}let b=Gn(r);for(let k of this.liveHeatPumps(r)){let R=k.pump.heat??(k.pump.mode==="heating"||k.pump.mode==="water"?(k.pump.power??0)*(k.pump.cop??3):0);b&&R>100&&k.pump.mode!=="cooling"&&x.arcs.push({key:`heat:${k.id}`,from:{floorId:k.floorId,x:k.x,z:k.z,y:.8},to:b,power:R,color:[255,120,40]})}x.arcs.push(...bu(r,o.states));let z=(this.flows??this._flows)&&!this.dimmed;t.setLiveEnergy(z?x.arcs:[],z?x.sparks:[]),JSON.stringify(x)!==JSON.stringify(this._liveEnergy)&&(this._liveEnergy=x);let P=Hc(o,r,this.furnitureLinks).filter(k=>k.playing&&!this.dimmed);t.setLiveSound(P.filter(k=>k.rings>0).map(k=>({id:k.entity,at:k.at,color:k.color,level:k.volume??.5,size:k.rings})),Ac(P).map(([k,R])=>[k.at,R.at])),this.syncLhCards(t,r,x,y,P),t.setLiveScreens(this.dimmed?[]:Pc(o,r,this.furnitureLinks)),t.setPictures(this.framePictures(o,r)),t.setLiveWater(this.dimmed?[]:Tc(o,r,this.furnitureLinks));let E=Jl(o,r);t.setPersons(E);let W=Ql(o,r,this.openingLinks,E);t.setFloorInfo(new Map([...W].map(([k,R])=>[k,Xl(o,R)])));let S=o.config,D=this.timeOfDay!=null&&S?.latitude!==void 0&&S.longitude!==void 0?gt(Rt(this.timeOfDay,S.time_zone),S.latitude,S.longitude):Ic(o);t.setSun(D),t.setLocation(S?.latitude!==void 0&&S.longitude!==void 0?{latitude:S.latitude,longitude:S.longitude,zone:S.time_zone}:null);let G=this.weather&&r.settings.weather_animations!==!1&&!this.dimmed,T=r.settings.weather_preview,Y=G?(T?{rain:T==="rainy"?.6:T==="pouring"||T==="lightning-rainy"?1:0,snow:T==="snowy"?.9:0,hail:0,cloud:T==="fog"?.9:.75,lightning:T==="lightning-rainy",fog:T==="fog"?.8:0,wind:.45,windSpeed:5,windFrom:220}:null)??ou(o,$e(o,this.weatherEntityId??r.settings.weather_entity)):null,C=Y?su(au(Y,r.settings.weather_effects),this.weatherDensity):null;this.cloud=C?.cloud??0,this._sky=Cc(D?.elevation??null,this.cloud),t.setSky(G?{weather:C,sun:D,north:r.settings.north??0,sky:this.skyColor(),disc:(r.settings.weather_effects??["sky"]).includes("sky"),low:this._low}:null);let j=r.settings.alarm_ring,oe=!j?.enable_entity||o.states[j.enable_entity]?.state==="on",H=j?.entity??Object.keys(o.states).find(k=>k.startsWith("alarm_control_panel.")),J=j&&oe&&H?o.states[H]?.state:void 0,ve=null;if(J){let k=["armed_away","armed_home","armed_night","armed_vacation","armed_custom_bypass","arming","pending","triggered","on","true"].includes(J),R=["disarmed","off","false"].includes(J);k&&j?.show_armed!==!1?ve={color:16726832,style:j?.style==="circle"?"circle":"perimeter"}:R&&j?.show_disarmed!==!1&&(ve={color:3458905,style:j?.style==="circle"?"circle":"perimeter"})}t.setAlarmRing(ve),this.applyTint();let te=u.grid!==null||u.solar!==null||u.battery!==null||u.tariff!==null?u:null;JSON.stringify(te)!==JSON.stringify(this._energy)&&(this._energy=te)}watchLostContacts(e){let t=!!this.alertSrc&&!this._travel&&Oc(e,this.alertSrc);t&&!this.contactTimer&&(this.contactTimer=setInterval(()=>{let r=this.building;this.alertSrc&&r&&this.hass&&this.openingLinks&&!this._travel&&this.setAlerts(zo(this.hass,r,this.alertSrc,this.openingLinks))},6e4)),!t&&this.contactTimer&&(clearInterval(this.contactTimer),this.contactTimer=void 0)}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),r=e.filter((o,s)=>!this.seenAlerts.has(t[s])&&!Qr.has(o.kind));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e);let i=e.some(o=>!Qr.has(o.kind));i&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!i&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),r.length&&this.alertJump&&this.jumpTo(r[0])}jumpTo(e){if(e.kind==="own"&&e.tap!=="room"){e.tap==="toggle"?this.hass.callService("homeassistant","toggle",{entity_id:e.entity}):me(this,e.entity);return}if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let r=this.building,i=this.hass,o=r?.floors.find(u=>u.id===e),s=o?.rooms.find(u=>u.id===t);if(!r||!i||!o||!s)return;let a=Zc(r.settings.room_double_tap,this.roomDoubleTap),l=Yc(i,o,s,this.furnitureLinks,this.confirmSet,a);if(!l.length)return;let c=l.some(u=>i.states[u]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,r=this.hass;if(!e||!t||!r)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"&&this.heatMode!=="wifi"){let a=this.heatMode,l=Ol(r,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l;let c=vt(new Date,r.config?.latitude??50);i=new Map([...l].map(([u,d])=>[u,Ll(a,d,c)]))}let o=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let c=ae(r,a,l,"temperature"),u=ae(r,a,l,"humidity"),d=ae(r,a,l,"co2"),m=Nr(d,u,Gt(c,u)),p=[c!==null?`${U(r,ye(r,c),1)} ${de(r)}`:null,u!==null?`${U(r,u,0)} %`:null,d!==null?`${U(r,d,0)} ppm`:null,m?`\u{1F4A8} ${M(r,`air_${m}`)}`:null].filter(h=>!!h);p.length&&o.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(o),!i)for(let a of t.floors)for(let l of a.rooms){let c=l.floor_heating?r.states[l.floor_heating]:void 0;c&&(c.entity_id.startsWith("climate.")?c.attributes.hvac_action==="heating":c.state==="on"||c.state==="open")&&(i??=new Map).set(l.id,[.55,.24,.08])}if(this._alerts.length){i??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(Qr.has(l.kind))continue;let c=Bc(l.kind).map(u=>u*a);if(l.roomId)i.set(l.roomId,c);else for(let u of t.floors)for(let d of u.rooms)i.set(d.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,r,i){let o=[],s=[],a=new Map,l=new Map,c=new Map;this.tempLists=c;let u=Mn(t);for(let p of t.floors)if(!(p.layer&&this.hiddenLayers.has(p.id)))for(let h of p.furniture){if(!mi(e,h))continue;let w=this.furnitureLinks.get(h.id),_=this.stateFaces(e,h);_.length&&a.set(h.id,{color:_[0].color,level:_[0].level,faces:_,...h.on_effect?{effect:h.on_effect}:{}});let v=lr(h.type);if(v&&h.care_entity){let N=this.careMarker(e,p,h,v,h.care_entity);N&&(o.push(N.marker),N.glow&&a.set(h.id,{color:N.glow,level:.9,faces:[{part:"all",color:N.glow,level:.9}]}),l.set(h.id,h.care_entity));continue}let $=ne(h.type);if(h.cover_entity&&ar($)&&l.set(h.id,h.cover_entity),$?.gangs){for(let te of(h.gang_entities??[]).slice(0,$.gangs)){let k=te&&te!=="none"?Ye(e,te):null,R=k?re(e.states[k]):null;k&&R!==null&&!i.has(k)&&(i.add(k),s.push({id:te,powerEntity:k,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,R)}))}let N=Ka(e,(h.gang_entities??[]).slice(0,$.gangs),/socket/.test(h.type));N.length&&a.set(h.id,{color:N[0].color,level:N[0].level,gangs:N}),ro(h.gang_entities,$.gangs).length&&l.set(h.id,`gang:${h.id}`);continue}if(mr(h.type)){let N=this.lampMarker(e,p,h,w?.entity??null),te=w?.entity?e.states[w.entity]:void 0;$&&te&&(!gn(te)||fr(h.type))&&se(te)&&$.parts.some(R=>R.glow||R.screen)&&a.set(h.id,{color:[.3,.85,1],level:.8,leds:!0});let k=w?.power?re(e.states[w.power]):null;if(w?.power&&k!==null&&(k>=1&&(N.text=N.text?`${N.text} \xB7 ${yt(e,k)}`:yt(e,k)),i.has(w.power)||(i.add(w.power),s.push({id:N.id,powerEntity:w.power,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,k)}))),o.push(N),h.type==="ceiling_fan"){let R=w?.fan?e.states[w.fan]:void 0;N.spin=ju(R),R&&!r.has(R.entity_id)&&(r.add(R.entity_id),o.push({...N,id:R.entity_id,y:Math.max(.5,N.y-.3),icon:h.icon?Ne(h.icon):Lt("fan"),name:h.name||B(e,R.entity_id),text:kg(e,R),active:se(R),unavailable:V(R),glow:null,lamp:null,spin:void 0,pickable:void 0,effect:void 0}))}continue}let x=Mr(h.type)?Pa(e,h,N=>`${U(e,ye(e,N),1)} ${de(e)}`):null,y=Mr(h.type)?null:Xi(e,h.temp_entity),b=Mr(h.type)?[]:Ia(e,h),z=N=>`${U(e,ye(e,N),1)} ${de(e)}`,F=[y===null?"":`\u{1F321} ${z(y)}`,...b.map(N=>`${N.label?`${N.label} `:"\u{1F321} "}${z(N.celsius)}`)].filter(Boolean).join(" \xB7 "),P=Math.max(y??-1/0,...b.map(N=>N.celsius)),E=h.type==="home_battery"?h.soc:h.type==="wallbox"?h.status:x?h.temp_entity&&h.temp_entity!=="none"?h.temp_entity:h.temp_entity2:y!==null?h.temp_entity:b.length?b[0].entity:null,W=E&&E!=="none"?E:null,S=w??(W?{entity:null,power:null}:void 0);if(!S)continue;let D=h.type==="home_battery"?W??S.entity??S.power:S.entity??S.power??W;l.set(h.id,D);let G=[...y!==null&&h.temp_entity?[{id:h.temp_entity,label:""}]:[],...b.map(N=>({id:N.entity,label:N.label}))];G.length>1&&G.some(N=>N.id===D)&&c.set(D,G);let T=S.entity?e.states[S.entity]:void 0,K=u.has(h.id),Y=K?!!h.meter_invert:h.type==="meter"?t.energy.grid_invert&&!h.export:h.type==="home_battery"?t.energy.battery_invert&&!h.charge:h.type==="inverter"?!!t.energy.solar_invert:!1,C=S.power?re(e.states[S.power],Y):null,j=h.type==="home_battery"&&h.charge&&h.charge!=="none"?h.charge:h.type==="meter"&&!K&&h.export&&h.export!=="none"?h.export:null,oe=j?re(e.states[j]):null;oe!==null&&(C=Math.max(0,C??0)-Math.max(0,oe)),S.power&&C!==null&&!i.has(S.power)&&(i.add(S.power),s.push({id:D,powerEntity:S.power,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,C),wallbox:h.type==="wallbox"||void 0}));let H=(C??0)>10||T?.state==="on"||T?.state==="running"||br(T)&&se(T);if((h.type==="radiator"||$)&&T&&L(T.entity_id)==="climate"){let N=T.attributes;if(N.hvac_action==="heating"){let te=typeof N.temperature=="number"&&typeof N.current_temperature=="number"?N.temperature-N.current_temperature:1,k=!!$&&!$.parts.some(R=>R.screen);a.set(h.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,te)),heat:k||void 0})}}else(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&H?a.set(h.id,{color:[.3,.85,1],level:.8}):$&&H&&!$.light&&$.parts.some(N=>N.glow||N.screen)&&a.set(h.id,{color:[.3,.85,1],level:.8,leds:!0});if(Yo(h.type)){let N=Zo(e,S.entity??S.power);if(N&&N.progress!==null&&(N.printing||/pause/.test(N.status))){let te=N.filaments[0]??"#38bdf8",k=[1,3,5].map(R=>parseInt(te.slice(R,R+2),16)/255);a.set(h.id,{color:k,level:.9,print:Math.max(.02,N.progress/100)})}}if(h.type==="home_battery"&&W){let N=Number(e.states[W]?.state);Number.isFinite(N)&&a.set(h.id,{color:N>60?[.29,.87,.5]:N>25?[.98,.8,.08]:[.97,.44,.44],level:.95,fill:N/100})}if(T&&vn(h.type)&&Zt(e,h)){let N=L(T.entity_id)==="light"?Ce(T):null,te=L(T.entity_id)==="media"&&["playing","on","paused","idle"].includes(T.state),k=N?N.color:se(T)||te?[.22,.88,1]:null;k&&a.set(h.id,{color:k,level:T.state==="playing"?1:.6,halo:h.ambilight??1})}if(r.has(D))continue;r.add(D);let J=S.entity?L(S.entity):null,ve=p.rooms.find(N=>N.points.length>=3&&O([h.x,h.z],N.points));o.push({id:D,floorId:p.id,roomId:ve?.id??null,x:h.x,z:h.z,y:ss(h)+be(p,h),icon:h.icon?Ne(h.icon):Lt(J??"switch"),name:h.name||(S.entity?B(e,S.entity):xe(e,h.type)),ownName:h.name||void 0,showName:!!h.show_name,text:[x?x.text:h.type==="home_battery"?this.batteryText(e,W,C):h.type==="wallbox"?this.wallboxText(e,W,C):h.type==="meter"?K?C===null?"":_e(e,C):this.meterText(e,C):T&&(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&H&&kn(e,je(e,S.entity??S.power))!==null?M(e,"care_time_left",{time:zr(kn(e,je(e,S.entity??S.power)))}):T?[ce(e,T),C!==null&&C>5&&!br(T)?_e(e,C):""].filter(Boolean).join(" \xB7 "):C!==null?_e(e,Math.max(0,C)):"",F].filter(Boolean).join(" \xB7 "),active:x?.warm||P>=Ha||(T?se(T):(C??0)>5),unavailable:T?V(T):!1,glow:null,furnitureId:h.id,energyDevice:h.type==="inverter"||h.type==="home_battery"||h.type==="wallbox"||h.type==="meter",readout:!!x||void 0,show:h.marker??void 0,fromFurniture:!0})}let d=this.heatMode==="wifi";for(let p of o){let h=p.furnitureId?t.floors.flatMap(_=>_.furniture).find(_=>_.id===p.furnitureId):void 0;if(!h||!Jo(h.type))continue;let w=Qo(e,this.furnitureLinks.get(h.id)?.entity??this.furnitureLinks.get(h.id)?.power??null);w&&(w.clients!==null&&(p.text=M(e,"wifi_clients",{n:w.clients})),d&&(p.wedge={angle:360,reach:9,near:0,color:Fu(w),opacity:.4,through:!0,walls:!1},p.show="always"))}let m=Jc(t,o);this.tapPins=m.pins;for(let p of t.floors.flatMap(h=>h.furniture))p.tap?.action&&l.set(p.id,`tap:${p.id}`);for(let{floor:p,item:h}of m.bare){let w=p.rooms.find(S=>S.points.length>=3&&O([h.x,h.z],S.points)),_=h.name||xe(e,h.type),v=typeof h.tap?.data?.entity_id=="string"?h.tap.data.entity_id:h.entity,$=v?e.states[v]:void 0,x=v?.startsWith("scene.")||v?.startsWith("script."),y=v?.startsWith("scene.")?Wt(e,v,h.entity):[],b=v?.startsWith("scene.")?y.length>0:$?.state==="on",z=v?.startsWith("switch.")||v?.startsWith("input_boolean."),F=v?.startsWith("light.")?"lightbulb":z?"power-socket-eu":x?"lightbulb-on":"gesture-tap-button",P=$?b?M(e,"state_on"):M(e,"state_off"):"",E=b?y.length?e.states[y[0]]:$:void 0,W=E?Ce(E):null;o.push({id:`tap:${h.id}`,floorId:p.id,roomId:w?.id??null,x:h.x,z:h.z,y:ss(h)+be(p,h),icon:Ne(h.icon||F),name:_,ownName:h.name||void 0,showName:!!h.show_name,text:P,active:b,unavailable:!1,glow:W,furnitureId:h.id,show:h.marker??"always",fromFurniture:!0})}return{markers:o,consumers:s,screens:a,targets:l}}robotObstacles(e,t){let r=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(r.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||be(e,i)>.12)return!1;let o=ne(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:O([i.x,i.z],t)||gr(i).some(s=>O(s,t))}).map(i=>gr(i))}robotInfos(e,t){let r=[],i=ei(e),o=qc(e,i,t.settings.vacuum_map??null),s=!1;for(let a of t.floors){for(let l of a.furniture){if(l.type!=="robot_vacuum")continue;let c=this.furnitureLinks.get(l.id)?.entity??null,u=c?e.states[c]?.state:void 0,d=u==="cleaning"?"cleaning":u==="returning"?"returning":u==="error"?"error":u==="docked"||!u?"docked":"idle",m=l.rotation*Math.PI/180,p=l.d*.14,h=[l.x-Math.sin(m)*p,l.z+Math.cos(m)*p],w=a.rooms.filter(P=>P.points.length>=3),v=(d==="cleaning"?eo(e,w,c,Ar(e,c,l.room_sensor)):null)??w.find(P=>O(h,P.points)),$=d==="cleaning"&&v?this.robotObstacles(a,v.points):[],x=i?Date.parse(e.states[i]?.last_updated??""):Number.NaN,y=!Number.isFinite(x)||Date.now()-x<120*1e3,b=c?.startsWith("vacuum.")&&o&&!s&&(y||d!=="cleaning"&&d!=="returning")?o:null;b&&(s=!0);let z=c?Date.parse(e.states[c]?.last_changed??""):Number.NaN,F=d==="cleaning"||d==="returning"?null:Number.isFinite(z)?z:null;r.push({id:l.id,floorId:a.id,rest:h,restHeading:-m,mode:d,room:v?.points??null,roomId:v?.id??null,obstacles:$,track:b?.path??null,pose:b?.pose??null,settledAt:F})}for(let l of a.furniture){if(!/:(robot_mower|mower_dock)$/.test(l.type))continue;let c=this.furnitureLinks.get(l.id)?.entity??null;if(!c?.startsWith("lawn_mower."))continue;let u=e.states[c]?.state,d=u==="mowing"?"cleaning":u==="returning"?"returning":u==="error"?"error":u==="docked"||!u?"docked":"idle",m=[l.x,l.z],p=(a.outdoor??[]).filter(_=>_.type==="lawn"&&_.points.length>=3),h=p.find(_=>O(m,_.points))??[...p].sort((_,v)=>mn(v.points)-mn(_.points))[0],w=h?(a.outdoor??[]).filter(_=>_!==h&&_.type!=="lawn"&&_.points.some(v=>O(v,h.points))).map(_=>_.points):[];r.push({id:l.id,floorId:a.id,rest:m,restHeading:-l.rotation*Math.PI/180,mode:d,room:h?.points??null,roomId:h?.id??null,obstacles:w,y:h?hr(a,h,m[0],m[1]):pr(a),mower:!0})}}return r}batteryText(e,t,r){let i=t?Number(e.states[t]?.state):Number.NaN,o=[];return Number.isFinite(i)&&o.push(`${U(e,i,0)} %`),r!==null&&Math.abs(r)>=10&&o.push(`${r<0?"\u25B2":"\u25BC"} ${_e(e,Math.abs(r))}`),o.join(" \xB7 ")}subMeterText(e,t,r,i){let o=i?El(t,r,i):null;return o?_e(e,o.use)+(o.unmetered===null?"":` \xB7 ${M(e,"meter_unmetered",{w:_e(e,o.unmetered)})}`):null}meterText(e,t){return t===null?"":Math.abs(t)<5?_e(e,0):`${M(e,t<0?"energy_grid_export":"energy_grid_import")} ${_e(e,Math.abs(t))}`}wallboxText(e,t,r){let i=t?e.states[t]:void 0,o=$u(String(i?.state??""),!!i?.entity_id.startsWith("binary_sensor."),r),s=o==="charging"?M(e,"wallbox_charging"):o==="plugged"?M(e,"wallbox_plugged"):i&&!V(i)&&!i.entity_id.startsWith("binary_sensor.")?ce(e,i):"",a=r!==null&&r>50?_e(e,r):"";return[s,a].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let r=[],i=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[o,s]of i){if(!o||o==="none")continue;let a=e.states[o];if(!a||V(a)||!(se(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=L(o)==="light"?Ce(a):null,u=t.on_color?/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(t.on_color):null,d=u?[parseInt(u[1],16)/255,parseInt(u[2],16)/255,parseInt(u[3],16)/255]:null;r.push({part:s,color:c?c.color:d??[1,.71,.28],level:c?c.level:.85})}return r}careMarker(e,t,r,i,o){let s=e.states[o];if(!s)return null;let a="",l=!1,c=null;if(i==="bin"){let m=Er(s);a=m===null?ce(e,s):m===0?M(e,"care_bin_today"):m===1?M(e,"care_bin_tomorrow"):M(e,"care_bin_days",{n:m}),l=m!==null&&m<=1,l&&(c=[1,.72,.28])}else if(i==="mail")l=Ua(s),a=M(e,l?"care_mail_yes":"care_mail_no"),l&&(c=[1,.85,.3]);else{let m=qa(s,r.thirsty_below??20);l=!!m?.thirsty,a=m?Number.isFinite(m.moisture)?`${M(e,l?"care_plant_thirsty":"care_plant_ok")} \xB7 ${Math.round(m.moisture)} %`:M(e,l?"care_plant_thirsty":"care_plant_ok"):ce(e,s),l&&(c=[1,.45,.3])}let u=t.rooms.find(m=>m.points.length>=3&&O([r.x,r.z],m.points)),d={bin:"mdi:trash-can-outline",mail:"mdi:mailbox-outline",plant:"mdi:sprout-outline"}[i];return{glow:c,marker:{id:o,floorId:t.id,roomId:u?.id??null,x:r.x,z:r.z,y:ss(r)+be(t,r),icon:r.icon?Ne(r.icon):Ne(d),name:r.name||xe(e,r.type),ownName:r.name||void 0,showName:!!r.show_name,text:a,active:l,unavailable:V(s),glow:null,furnitureId:r.id,show:r.marker??void 0,fromFurniture:!0,care:!0}}}lampMarker(e,t,r,i){let o=i?e.states[i]:void 0,s=(r.extra_lights??[]).map(_=>e.states[_]).filter(_=>!!_),a=s.find(_=>se(_)),l=ne(r.type),c=ha[r.type]??l?.light??"floor",u=t.rooms.some(_=>_.points.length>=3&&O([r.x,r.z],_.points)),d=c==="strip"&&!u?pn(t,r.x,r.z)+(r.mount_y??0):r.mount_y!=null&&!l?r.mount_y:l||c==="wall"||c==="strip"?be(t,r):c==="table"?dr(t,r.x,r.z):c==="bollard"||c==="garden"?pn(t,r.x,r.z):0,m=t.rooms.find(_=>_.points.length>=3&&O([r.x,r.z],_.points)),p=ur(t,r),h=l?l.mount==="ceiling"?Math.max(.5,d-.15):d+r.h+.2:{ceiling:p-.3,downlight:p-.25,spot:p-.35,panel:p-.25,pendant:Math.max(.6,p-r.h-.25),fan:Math.max(.6,p-r.h-.2),floor:d+r.h+.25,uplight:d+r.h+.25,table:d+r.h+.2,wall:d+r.h+.2,strip:r.upright?d+r.w+.15:Math.max(.3,d-.2),bollard:d+r.h+.25,garden:d+r.h+.25}[c],w={id:i??`lamp:${r.id}`,floorId:t.id,roomId:m?.id??null,x:r.x,z:r.z,y:h,icon:Lt("light"),name:r.name||(i?B(e,i):xe(e,r.type)),text:o&&(se(o)||!a)?ce(e,o):a?B(e,a.entity_id):"",active:(o?se(o):!1)||!!a,unavailable:o?V(o):!1,glow:!fr(r.type)&&(o&&gn(o)||s.length)?co(wa(o&&gn(o)?o:void 0,s,r.color_entity&&r.color_entity!=="none"?e.states[r.color_entity]:void 0),r.glow_scale):null,lamp:c,rotation:r.rotation,mirror:!!r.mirror,roll:r.tilt??0,upright:!!r.upright,rise:r.rise??0,size:[r.w,r.d,r.h],base:d,pickable:!!i,furnitureId:r.id,pack:l?r.type:null,lightY:l?l.mount==="ceiling"?d:d+r.h*.85:void 0,ceiling:p,effect:o?.state==="on"&&gn(o)&&!fr(r.type)?Fr(r,Xa(e,r,i)):void 0,variant:r.variant,show:r.marker??void 0,fromFurniture:!0};return o&&i?uo(e,w,o,!1):w}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always")return!0;if(e.show==="active"||this.building?.settings.motion_markers_active&&_a(this.hass,e.id)){if(!e.active)return!1;if(e.show==="active")return!0}if(this.markersOutside&&!(this.roomId&&e.roomId===this.roomId))return this.markersOutside.includes(ma(e.id,!!e.lamp));if(this.markerMode==="all")return!0;if(e.lamp)return!1;let t=L(e.id);return t==="light"?!1:e.fromFurniture&&t==="fan"?!0:e.care?e.active:e.id.startsWith("tap:")||e.readout?!0:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,r]of this.openingLinks??[]){let i=r.lock??r.cover??r.contact??r.tilt;i&&e.set(t,i)}return $r(e,this.building?.floors??[])}downloadStl(){let e=this.viewer?.exportStl(10);if(!e)return;let t=URL.createObjectURL(new Blob([e],{type:"model/stl"})),r=document.createElement("a");r.href=t,r.download=`nextfloor-${new Date().toISOString().slice(0,10)}.stl`,r.click(),setTimeout(()=>URL.revokeObjectURL(t),5e3)}secondBlinds(){let e=new Map;for(let[t,r]of this.openingLinks??[])r.cover2&&!r.lock&&r.cover&&e.set(t,r.cover2);return $r(e,this.building?.floors??[])}get filledOwnLook(){return nu(this.building?.settings.own_look,this.ownLook)}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let r=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},r)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building||this._phoneStage)return g;let e=new Map(this.building.floors.map(o=>[o.id,o.name])),t=[...this._thumbs].sort((o,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===o.floorId)?.elevation??0)),r=this._thumbsCompact,i=()=>{if(this._thumbsCompact=!r,!this.thumbsFolded)try{localStorage.setItem("nextfloor.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return f`<nav class="nf-thumbs ${this._tinyStage?"nf-thumbs-tiny":""} ${this.narrowThumbs?"nf-thumbs-small":""} ${this._shortStage?"nf-thumbs-short":""} ${r?"nf-thumbs-compact":""}" aria-label=${M(this.hass,"floors")}>
      <button class="nf-thumbs-fold" title=${M(this.hass,r?"thumbs_show":"thumbs_fold")} aria-label=${M(this.hass,r?"thumbs_show":"thumbs_fold")} @click=${i}>${r?"\u25B8":"\u25C2"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${M(this.hass,"all_floors")}</span>
      </button>
      ${t.map(o=>f`<button class="nf-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${r?g:f`<img src=${o.url} alt="" />`}
          <span>${e.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,r){let i=this.building?.settings.alarm_ring?.entity;if(e.startsWith("alarm_control_panel.")||i&&e===i){let s=(this.building?.settings.quick_controls??[]).find(a=>a.entities.length===1&&a.entities[0]===e);s?this._quickGroup=s.id:me(this,e);return}let o=L(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"?this._menu={entity:e,x:t,y:r}:me(this,e)}onDeviceSwipe(e,t,r,i,o){let s=this.hass?.states[e];if(t==="start"){if(!s||V(s)||this.confirmSet.has(e))return!1;let l=L(e);if(l==="light"&&ts(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:o},!0}if(l==="fan"&&typeof s.attributes.percentage_step=="number"){let c=s.state==="on"&&typeof s.attributes.percentage=="number"?s.attributes.percentage:0;return this._swipe={entity:e,kind:"fan",start:c,value:c,x:i,y:o},!0}if(l==="cover"&&ns(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-r/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();lc(a.kind)&&c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this._swipe&&cc(this._swipe.kind,this._swipe.start,this._swipe.value)&&this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):e.kind==="fan"?e.value<=0?this.hass.callService("fan","turn_off",{entity_id:e.entity}):this.hass.callService("fan","set_percentage",{entity_id:e.entity,percentage:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}openRoom(e,t){this.floorId===e&&this.roomId===t||(this.floorId!==e?(this.fire("floor-tap",{floorId:e}),setTimeout(()=>this.fire("room-tap",{floorId:e,roomId:t}),60)):this.fire("room-tap",{floorId:e,roomId:t}))}goTo(e){if(this._find=null,e.kind==="room"||e.kind==="circuit"){e.roomId&&this.openRoom(e.floorId,e.roomId);return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}listenToAnnouncements(e){if(!e){this.stopAnnouncements?.(),this.stopAnnouncements=null,clearTimeout(this.announceTimer);return}if(this.stopAnnouncements)return;let t=!1;this.stopAnnouncements=()=>t=!0,ul(this.hass,r=>this.announce(r)).then(r=>{t?r():this.stopAnnouncements=r})}announce(e){let t=e;if(t?.reload===!0){(!t.template||t.template===this.templateName)&&setTimeout(()=>location.reload(),500+Math.random()*6e3);return}if(typeof e?.message!="string"||!e.message.trim()||!sl(e,this.screenName)||!al(e))return;let r=ll(e.message);this._announcement={message:e.message,until:Date.now()+r},clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announcement=null,r),cl(this.hass,e)}renderAnnouncement(){let e=this._announcement;return e?f`<button class="nf-announcement" role="alert" title=${M(this.hass,"close")} @click=${()=>this._announcement=null}>
      <span class="nf-announcement-icon" aria-hidden="true">📢</span><span class="nf-announcement-text">${e.message}</span>
    </button>`:g}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return g;let t=Math.max(1,Math.min(12,e.settings.alerts_max??3)),r=this._alertsAll&&this._alerts.length>t,i=r?this._alerts:this._alerts.slice(0,t);return f`<div class="nf-alert-banner${r?" nf-alert-all":e.settings.alerts_rows===2?" nf-alert-rows2":""}" role="alert">
      ${i.map(o=>f`<button class="nf-alert nf-alert-${o.kind}" style=${o.color?`border-left-color:${o.color}`:""} title=${Ro(this.hass,e,o)} @click=${()=>this.jumpTo(o)}>${Ro(this.hass,e,o)}</button>`)}
      ${r?f`<button class="nf-alert-more" title=${M(this.hass,"close")} @click=${()=>this._alertsAll=!1}>−</button>`:this._alerts.length>t?f`<button class="nf-alert-more" @click=${()=>this._alertsAll=!0}>+${this._alerts.length-t}</button>`:g}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return g;let t=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this.roomId),r=t?Q(this.hass,t).filter(o=>L(o)==="scene"||L(o)==="script").slice(0,6):[];if(!r.length)return g;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return f`<div class="nf-scenes">
      ${r.map(o=>f`<button class="nf-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${B(this.hass,o,i)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return g;if(this._find===null)return f`<button class="nf-find-btn" title=${M(this.hass,"find")} aria-label=${M(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Vu(this.findIndex??=Bu(this.hass,e),this._find);return f`<div class="nf-find">
      <input
        type="search"
        placeholder=${M(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${r=>this._find=r.target.value}
        @keydown=${r=>{r.key==="Escape"&&(this._find=null),r.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="nf-find-close" aria-label=${M(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?f`<div class="nf-find-list">
            ${t.length?t.map(r=>f`<button @click=${()=>this.goTo(r)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${r.icon?Dr(r.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${r.name}</b>${r.where?f`<small>${r.where}</small>`:g}</span>
                  </button>`):f`<p>${M(this.hass,"find_none")}</p>`}
          </div>`:g}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null)return g;let r=(_,v)=>M(t,_,v),i=f`<button
      class="nf-central-btn ${this._central?"nf-central-on":""}"
      title=${r("central")}
      aria-label=${r("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null,!this._central&&this.centralOpen&&this.dispatchEvent(new CustomEvent("nf-central-dismiss",{bubbles:!0,composed:!0}))}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?e.floors.find(_=>_.id===this.floorId):void 0,s=o?[o]:e.floors,a=s.flatMap(_=>to(t,_).lights),l=s.flatMap(_=>to(t,_).covers),c=a.filter(_=>t.states[_]?.state==="on").length,u=!o,d=(_,v,$,x)=>{if(x.length){if(u&&this._armed!==_){this._armed=_,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(v,$,{entity_id:x})}},m=(_,v,$,x,y)=>f`<button class="nf-btn ${this._armed===_?"nf-central-armed":""}" ?disabled=${!y.length} @click=${()=>d(_,$,x,y)}>
        ${this._armed===_?r("central_sure"):r(v)}
      </button>`,p=e.settings.favorite_floors??{},h=(e.settings.favorites??[]).filter(_=>t.states[_]&&(!p[_]||!o||p[_]===o.id)),w=this.buttons??e.settings.buttons??[];return f`${i}
      <div class="nf-central ${this.centralOpen?"nf-central-big":""}" role="dialog" aria-label=${r("central")}>
        <b>${o?o.name:r("central_house")}</b>
        <div class="nf-central-row">
          <span>${r("central_lights")}${a.length?f` <small>${c}/${a.length}</small>`:g}</span>
          ${m("lights_on","central_on","light","turn_on",a.filter(_=>t.states[_]?.state==="off"))}
          ${m("lights_off","central_off","light","turn_off",a.filter(_=>t.states[_]?.state==="on"))}
        </div>
        ${l.length?f`<div class="nf-central-row">
              <span>${r("central_covers")} <small>${l.length}</small></span>
              ${m("covers_open","central_open","cover","open_cover",l)}
              ${m("covers_close","central_close","cover","close_cover",l)}
            </div>`:g}
        <b>${r("central_favorites")}</b>
        ${h.length?f`<div class="nf-central-favs">
              ${h.map(_=>{let[v,$]=Va(_),x=t.states[_],y=v==="homeassistant"&&x?.state==="on";return f`<button
                  class="nf-chip"
                  aria-pressed=${y||this._sceneFired===_}
                  ?disabled=${V(x)}
                  @click=${()=>{t.callService(v,$,{entity_id:_}),this._sceneFired=_,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${B(t,_)}
                </button>`})}
            </div>`:w.length?g:f`<p class="nf-central-hint">${r("central_no_favorites")}</p>`}
        ${w.length?f`<div class="nf-central-favs">
              ${w.map(_=>f`<button
                  class="nf-chip nf-own-btn"
                  aria-pressed=${Ga(t,_)}
                  @click=${v=>{no(t,v.currentTarget,_),_.action!=="service"&&(this._central=!1)}}
                >
                  ${_.icon?f`<ha-icon .icon=${_.icon.includes(":")?_.icon:`mdi:${_.icon}`}></ha-icon>`:g}${_.label}
                </button>`)}
            </div>`:g}
      </div>`}toggleLock(){this._locked=!this._locked;try{localStorage.setItem(Ju,this._locked?"1":"0")}catch{}}async openTravel(e){if(clearInterval(this.travelTimer),this.travelTimer=void 0,e===null||!this.hass){this._travel=null,this.syncDevices(!0);return}let t=Date.now(),r=t-e*36e5;this._travel={history:new Map,from:r,to:t,t:r,playing:!1,speed:e>24?3600:600,hours:e,moments:[],loading:!0};try{let i=await Tn(this.hass,nc(this.watched),r,t);if(!this._travel||this._travel.from!==r)return;this._travel={...this._travel,history:i,moments:rc(i,r,t),loading:!1}}catch{this._travel=null,this._error=M(this.hass,"travel_failed");return}this.syncDevices(!0)}travelTo(e){let t=this._travel;t&&(this._travel={...t,t:Math.min(t.to,Math.max(t.from,e))},this.syncDevices(!0))}playTravel(e){let t=this._travel;t&&(clearInterval(this.travelTimer),this.travelTimer=void 0,this._travel={...t,playing:e,t:e&&t.t>=t.to?t.from:t.t},e&&(this.travelTimer=setInterval(()=>{let r=this._travel;if(!r)return;let i=r.t+250*r.speed;i>=r.to&&this.playTravel(!1),this.travelTo(i)},250)))}renderTravel(){if(!this.hass||this.clean)return g;let e=a=>M(this.hass,a),t=this._travel;if(!t)return this.travelButton?f`<button class="nf-travel-btn" title=${e("travel")} aria-label=${e("travel")} @click=${()=>{this.openTravel(24)}}>⏪</button>`:g;let r=this.hass.language??navigator.language,i=new Intl.DateTimeFormat(r,{weekday:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t.t)),o=t.to-t.from||1,s=[[60,"travel_speed_min"],[600,"travel_speed_10min"],[3600,"travel_speed_hour"]];return f`<div class="nf-travel" role="group" aria-label=${e("travel")}>
      <button class="nf-travel-play" aria-label=${e(t.playing?"travel_pause":"travel_play")} ?disabled=${t.loading} @click=${()=>this.playTravel(!t.playing)}>${t.playing?"\u23F8":"\u25B6"}</button>
      <b class="nf-travel-when">${t.loading?e("travel_loading"):i}</b>
      <div class="nf-travel-track">
        <svg viewBox="0 0 1000 10" preserveAspectRatio="none" aria-hidden="true">${t.moments.map(a=>le`<rect x=${(a-t.from)/o*1e3} y="0" width="1.6" height="10" />`)}</svg>
        <input type="range" min=${t.from} max=${t.to} step="60000" .value=${String(t.t)} ?disabled=${t.loading} aria-label=${e("travel")} @input=${a=>this.travelTo(Number(a.target.value))} />
      </div>
      <select aria-label=${e("travel_speed")} @change=${a=>this._travel={...t,speed:Number(a.target.value)}}>
        ${s.map(([a,l])=>f`<option value=${a} ?selected=${t.speed===a}>${e(l)}</option>`)}
      </select>
      <button class="nf-travel-span" aria-pressed=${t.hours===24} @click=${()=>{this.openTravel(24)}}>24 h</button>
      <button class="nf-travel-span" aria-pressed=${t.hours===168} @click=${()=>{this.openTravel(168)}}>7 ${e("travel_days")}</button>
      <button class="nf-travel-live" @click=${()=>{this.openTravel(null)}}>● ${e("travel_live")}</button>
    </div>`}toggleWalk(){let e=this.viewer;e&&(this._walking?(e.stopWalk(),this._walking=!1):this._walking=e.startWalk()!==null,this._stick=null)}stickMove(e,t=!1){let r=e.currentTarget;if(t)r.setPointerCapture(e.pointerId);else if(!this._stick)return;let i=r.getBoundingClientRect(),o=i.width/2,[s,a]=[(e.clientX-i.left-o)/o,(e.clientY-i.top-o)/o],l=Math.hypot(s,a);l>1&&([s,a]=[s/l,a/l]),this._stick=[s,a],this.viewer?.setWalkStick(Math.abs(s)<.12?0:s,Math.abs(a)<.12?0:a)}stickEnd(){this._stick=null,this.viewer?.setWalkStick(0,0)}renderWalk(){if(!this.hass||this.clean||!this.walkButton&&!this._walking)return g;let e=r=>M(this.hass,r),t=this._stick??[0,0];return f`<button class="nf-walk-btn ${this._walking?"nf-walk-on":""}" title=${e(this._walking?"walk_stop":"walk")} aria-label=${e(this._walking?"walk_stop":"walk")} aria-pressed=${this._walking} @click=${()=>this.toggleWalk()}>
        ${this._walking?"\u2715":le`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2" /><path d="M10 21l2-6 3 3v5M9 12l1-4 4 1 3 3M8 9l-2 4" /></svg>`}
      </button>
      ${this._walking?f`<div class="nf-stick" @pointerdown=${r=>this.stickMove(r,!0)} @pointermove=${r=>this.stickMove(r)} @pointerup=${()=>this.stickEnd()} @pointercancel=${()=>this.stickEnd()}>
              <span style="transform:translate(${t[0]*34}px, ${t[1]*34}px)"></span>
            </div>
            <p class="nf-walk-hint">${e("walk_hint")}</p>`:g}`}renderLock(){if(!this.lockButton||!this.hass||this.clean)return g;let e=M(this.hass,this._locked?"lock3d_off":"lock3d_on");return f`<button class="nf-lock3d ${this._locked?"nf-lock3d-on":""}" title=${e} aria-label=${e} aria-pressed=${this._locked} @click=${()=>this.toggleLock()}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        ${this._locked?le`<path d="M8 11V8a4 4 0 0 1 8 0v3" />`:le`<path d="M8 11V8a4 4 0 0 1 7.5-2" />`}
      </svg>
    </button>`}renderClock(e=!1){if(!this.clock||!this.hass||this.clock==="top_left"&&!e)return g;let t=this.hass.language??navigator.language,r=new Date(this._now),i=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).format(r),o=new Intl.DateTimeFormat(t,{weekday:"long",day:"numeric",month:"long"}).format(r);return f`<div class="nf-clock nf-clock-${this.clock}" aria-hidden="true"><b>${i}</b><span>${o}</span></div>`}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return g;let e=M(this.hass,this.clean?"controls_show":"controls_hide");return f`<button
      class="nf-eye ${this.clean?"nf-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?le`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:le`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return g;let t=e.kind==="light"&&e.value<=0;return f`<div class="nf-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${B(this.hass,e.entity)}</span>
      <b>${t?M(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}tapPlate(e,t,r){let i=this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e),o=i?ro(i.gang_entities,ne(i.type)?.gangs??0):[];if(o.length===1)return this.onDeviceTap(o[0],t,r);o.length>1&&(this._plate={ids:o,x:t,y:r})}renderPlate(){let e=this._plate;if(!e||!this.hass)return g;let t=this.hass,r=()=>this._plate=null;return f`<div class="nf-menu-backdrop" @click=${r}></div>
      <div class="nf-plate-menu" style="left:${Math.max(8,e.x-110)}px;top:${Math.max(8,e.y-20-e.ids.length*46)}px" role="menu">
        ${e.ids.map((i,o)=>{let s=t.states[i],a=se(s)||s?.state==="on";return f`<button role="menuitem" class=${a?"on":""} @click=${()=>{if(e.labels)return r(),void me(this,i);r(),this.onDeviceTap(i,e.x,e.y)}}><b>${e.labels?"\u{1F321}":o+1}</b><span>${e.labels?.[o]||B(t,i)}</span><i>${s?ce(t,s):"\u2013"}</i></button>`})}
      </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return g;let t=this.renderRoot.querySelector(".nf-stage"),r=t?.clientWidth??800,i=t?.clientHeight??600,o=Math.max(8,Math.min(r-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return f`<div class="nf-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nf-quick-menu
        style="left:${o}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${(this.building?.settings.media_presets??[]).filter(a=>!a.speakers?.length||a.speakers.includes(e.entity))}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        .myPosition=${this.myPositionOf(e.entity)}
        @close=${()=>this._menu=null}
      ></nf-quick-menu>`}myPositionOf(e){for(let t of this.building?.floors??[])for(let r of t.openings){let i=this.openingLinks?.get(r.id);if(r.my_position!=null&&(i?.cover===e||i?.cover2===e))return r.my_position}return null}onDeviceTap(e,t=0,r=0){if(e.startsWith("lamp:")||this._travel)return;let i=e.startsWith("tap:")?e.slice(4):this.tapPins.get(e);if(i){let c=this.building?.floors.flatMap(u=>u.furniture).find(u=>u.id===i);c?.tap&&no(this.hass,this,c.tap,c.entity);return}if(this.pluginTapped(e))return;if(e.startsWith("gang:"))return this.tapPlate(e.slice(5),t,r);let o=this.tempLists.get(e);if(o&&!this._plate){this._plate={ids:o.map(c=>c.id),labels:o.map(c=>c.label),x:t,y:r};return}if(e.startsWith("outdoor:")){this.fire("room-tap",{floorId:null,roomId:"nf-outside"});return}if(e==="grid"){let c=this.building,u=c?c.energy.grid??Ze(c,d=>this.furnitureLinks?.get(d.id)?.power??null).grid:null;u&&me(this,u);return}let s=this.building?.settings.alarm_ring?.entity;if(e.startsWith("alarm_control_panel.")||s&&e===s){let c=(this.building?.settings.quick_controls??[]).find(u=>u.entities.length===1&&u.entities[0]===e);c?this._quickGroup=c.id:me(this,e);return}let a=L(e);if(a==="cover"||a==="media"){this._menu={entity:e,x:t,y:r};return}if(a==="lock"){let c=Qi(this.hass,e),u=B(this.hass,e);confirm(M(this.hass,c?"lock_confirm_lock":"lock_confirm_unlock",{name:u}))&&this.hass.callService("lock",c?"lock":"unlock",{entity_id:e});return}let l=e.slice(0,e.indexOf("."));if(l==="button"||l==="input_button"||l==="script"){if(this.confirmSet.has(e)&&!confirm(M(this.hass,"confirm_switch",{name:B(this.hass,e)})))return;this.hass.callService(l,l==="script"?"turn_on":"press",{entity_id:e});return}if(a&&fa.has(a)){if(this.confirmSet.has(e)&&!confirm(M(this.hass,"confirm_switch",{name:B(this.hass,e)})))return;rl(this.hass,e)}else me(this,e)}pluginTapped(e){let t=this.hass?.states[e],r=this.placementInfo.get(e);if(!t||!r)return!1;let i=this.building?.floors.find(o=>o.id===r.floorId)?.placements.find(o=>o.entity_id===e);return Zs({hass:this.hass,entityId:e,state:t},r,i?.plugin??void 0,{showWindow:(o,s)=>{o&&"hass"in o&&(o.hass=this.hass),this._pluginWindow=o?{node:o,title:s?.title??""}:null},moreInfo:o=>me(this,o??e)})}renderPluginWindow(){let e=this._pluginWindow;return e?f`<div class="nf-plugin-window" @pointerdown=${t=>t.stopPropagation()}>
      <div class="nf-pw-head"><span>${e.title}</span><button class="nf-pw-close" aria-label=${M(this.hass,"close")} @click=${()=>this._pluginWindow=null}>✕</button></div>
      <div class="nf-pw-body">${e.node}</div>
    </div>`:g}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("nextfloor.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}liveHeatPumps(e){let t=this.hass;if(!t)return[];let r=[];for(let i of e.floors)for(let o of i.furniture){if(!Tu(o.type))continue;let s=this.furnitureLinks?.get(o.id),a=Ru(t,s?.entity??s?.power??null);a&&r.push({id:o.id,name:o.name||xe(t,o.type),floorId:i.id,x:o.x,z:o.z,at:{floorId:i.id,x:o.x,z:o.z,y:be(i,o)+o.h+.5},pump:a})}return r}livePrinters(e){let t=this.hass,r=[];if(!t)return r;for(let i of e.floors)for(let o of i.furniture){if(!Yo(o.type))continue;let s=this.furnitureLinks?.get(o.id),a=Zo(t,s?.entity??s?.power??null);!a||!a.printing&&!/pause|finish|complete|error/.test(a.status)||r.push({id:o.id,name:o.name||xe(t,o.type),at:{floorId:i.id,x:o.x,z:o.z,y:be(i,o)+o.h+.5},printer:a})}return r}liveCars(e,t){let r=[];for(let i of t.floors)for(let o of i.furniture){if(o.type!=="parking")continue;let s=Iu(e,o);if(!s||s.soc===null&&s.range===null&&s.locked===null&&s.climateOn===null)continue;let a=To(e,o),l=a?Kc(o,a):null,c=o.name||(a?xe(e,a):xe(e,o.type));r.push({spot:o.id,name:c,at:{floorId:i.id,x:o.x,z:o.z,y:be(i,o)+(l?.h??.2)+.6},car:s})}return r}refreshToday(e){let t=this.hass,r=e.settings.calendars??[],i=Math.max(1,Math.min(7,e.settings.today_days??1)),o=`${new Date().toDateString()}|${i}`;!t||!r.length||Date.now()-this.todayAt<9e5&&o===this.todayDay||(this.todayAt=Date.now(),this.todayDay=o,Su(t,r,i).then(s=>this._todayItems=s))}refreshForecast(e){let t=this.hass,r=e.settings.forecast&&t?$e(t,this.weatherEntityId??e.settings.weather_entity):null;if(!t||!r)return;let i=`${r}|${new Date().toDateString()}`;Date.now()-this.forecastAt<18e5&&i===this.forecastKey||(this.forecastAt=Date.now(),this.forecastKey=i,Eu(t,r).then(o=>{o===null?this.forecastAt=Date.now()-174e4:this._forecast=o}))}renderForecast(e){let t=this.building,r=this.hass,i=t?.settings.forecast;if(!t||!r||!i||i.corner!==e||this.clean)return g;if(e==="top_right"&&(this.roomId||this.panelOpen))return g;let o=Au(this._forecast,Math.max(1,Math.min(7,i.days)));if(!o.length)return g;let s=$e(r,this.weatherEntityId??t.settings.weather_entity),a=s?r.states[s]?.attributes:void 0,l=String(a?.temperature_unit??"\xB0"),c=String(a?.precipitation_unit??"mm"),u=r.language??navigator.language,d=new Intl.DateTimeFormat(u,{weekday:"short"}),m=p=>p===null?"\u2013":`${Math.round(p)}\xB0`;return f`<section class="nf-forecast" aria-label=${M(r,"forecast")}>
      <ul>
        ${o.map((p,h)=>f`<li>
            <span class="nf-fc-day">${h===0?M(r,"today"):d.format(new Date(p.day))}</span>
            <span class="nf-fc-icon" aria-hidden="true">${p.icon}</span>
            <span class="nf-fc-temp" title=${l}><b>${m(p.high)}</b> <small>${m(p.low)}</small></span>
            <span class="nf-fc-rain">${p.rain!==null&&p.rain>0?`\u{1F4A7}${p.rain.toLocaleString(u,{maximumFractionDigits:1})} ${c}`:p.chance!==null&&p.chance>0?`\u{1F4A7}${Math.round(p.chance)} %`:""}</span>
          </li>`)}
      </ul>
    </section>`}renderToday(){let e=this.building,t=this.hass;if(!e||!t||this.clean||this.roomId||this.panelOpen)return g;let r=this.renderForecast("top_right"),i=this.today===!1?g:this.renderTodayCard(e,t);return i===g&&r===g?g:f`<div class="nf-right-col" style=${this.clock==="top_right"?"top: 78px":""}>${i}${r}</div>`}renderTodayCard(e,t){let r=ku(t,e,Date.now(),{today:M(t,"care_bin_today"),tomorrow:M(t,"care_bin_tomorrow")}),i=xu([...r,...this._todayItems??[]]);if(!i.length&&!(e.settings.calendars??[]).length)return g;let o=this._todayOpen!==!1,s=new Intl.DateTimeFormat(t.language??navigator.language,{weekday:"long",day:"numeric",month:"long"}).format(new Date),a=t.language??navigator.language,l=u=>{if(u===1)return M(t,"tomorrow");let d=new Date;return d.setDate(d.getDate()+u),new Intl.DateTimeFormat(a,{weekday:"long",day:"numeric",month:"numeric"}).format(d)},c=i.flatMap((u,d)=>[(u.day??0)>0&&(i[d-1]?.day??0)!==u.day?f`<li class="nf-today-day">${l(u.day??0)}</li>`:g,f`<li class=${u.past?"nf-today-past":""}><time>${u.kind==="bin"?"\u{1F5D1}":u.time||"\u25CF"}</time><span>${u.title}<small>${u.source}</small></span></li>`]);return f`<section class="nf-today ${o?"":"nf-today-folded"}" aria-label=${M(t,"today")}>
      <button class="nf-today-head" aria-expanded=${o} @click=${()=>this._todayOpen=!o}>
        <b>📅 ${M(t,"today")}</b><span>${s}</span>
      </button>
      ${o?i.length?f`<ul>
              ${c}
            </ul>`:f`<p class="nf-today-none">${M(t,"today_none")}</p>`:g}
    </section>`}week=null;weekAt=0;refreshWeek(e){let t=this.hass;if(!t||this._travel||Date.now()-this.weekAt<36e5)return;this.weekAt=Date.now();let r=Ze(e,s=>this.furnitureLinks?.get(s.id)?.power??null),i=e.energy,o={solar:i.solar?[i.solar]:r.solar,grid:i.grid??r.grid,gridInvert:!!i.grid_invert,battery:i.battery?[i.battery]:r.battery,batteryInvert:!!i.battery_invert,consumption:i.consumption};Vl(t,o).then(s=>{this.week=s,this.syncDevices(!0)}).catch(()=>this.week=null)}meterRows(e,t=null){let r=this.hass,i=[],o=this.floorId?e.floors.find(a=>a.id===this.floorId):void 0,s=o?.power_entity?re(r?.states[o.power_entity]):null;if(o&&s!==null){let a=t&&t>0?` \xB7 ${M(r,"floor_power_share",{n:Math.round(Math.max(0,s)/t*100)})}`:"";i.push({icon:"\u26A1",label:o.name,value:`${yt(r,s)}${a}`})}for(let[a,l,c]of[["gas","\u{1F525}","energy_gas_short"],["water","\u{1F4A7}","energy_water_short"]]){let u=e.energy[a],d=u?r?.states[u]:void 0;d&&!V(d)&&i.push({icon:l,label:M(r,c),value:ce(r,d)})}return i}refreshDayCurves(e){let t=this.hass;if(!t||this._travel||Date.now()-this.curvesAt<6e5)return;this.curvesAt=Date.now();let r=a=>En(a,e,An(a,e),Ze(e,l=>this.furnitureLinks?.get(l.id)?.power??null)),i=ic(t,r),o=Date.now(),s=o-24*36e5;Tn(t,i,s,o,!0).then(a=>{this.dayCurves=oc(t,a,s,o,r),this.syncDevices(!0)}).catch(()=>this.dayCurves=null)}syncLhCards(e,t,r,i,o){let s=[],a=r.summary,l=a.solar!==null||a.grid!==null||a.battery!==null||a.consumption!==null,c=Gn(t),u=(this.floorId?t.floors.find(d=>d.id===this.floorId):void 0)??[...t.floors].sort((d,m)=>m.elevation-d.elevation)[0];if(this.liveCardsOn&&!this.dimmed&&!this.roomId&&l&&c&&u){let d=0,m=0,p=0;for(let h of u.rooms)for(let[w,_]of h.points)d+=w,m+=_,p++;s.push({kind:"house",at:{floorId:u.id,x:p?d/p:c.x,z:p?m/p:c.z,y:u.height+(this.floorId?1.2:3.2)},summary:a,autarky:r.autarky,curves:this.dayCurves??void 0,week:this.week??void 0,meters:this.meterRows(t,a.consumption)}),this.refreshDayCurves(t),this.refreshWeek(t)}if(this.liveCardsOn&&!this.dimmed&&!this.roomId){for(let d of i)s.push({kind:"car",at:d.at,spot:d.spot,name:d.name,car:d.car});for(let d of this.livePrinters(t))s.push({kind:"printer",at:d.at,name:d.name,printer:d.printer});for(let d of this.liveHeatPumps(t))s.push({kind:"heatpump",at:d.at,name:d.name,pump:d.pump});for(let d of o)s.push({kind:"media",at:{...d.at,y:d.at.y+.5},media:d})}JSON.stringify(s)!==JSON.stringify(this._liveCards)&&(this._liveCards=s),e.setLiveAnchors(s.map(d=>d.at),s.length?(d,m,p,h)=>this.placeLhCard(d,m,p,h):null)}placeLhCard(e,t,r,i){let o=this.renderRoot.querySelector(`.live-card[data-i="${e}"]`);o&&(o.dataset.x=String(t),o.dataset.y=String(r),o.style.visibility=i?"visible":"hidden",e===this._liveCards.length-1&&Nu(this.renderRoot))}toggleHouseFold(){this._houseFolded=!this._houseFolded;try{localStorage.setItem("nextfloor.house_card_folded",this._houseFolded?"1":"0")}catch{}}toggleCarFold(){this._carsFolded=!this._carsFolded;try{localStorage.setItem("nextfloor.car_card_folded",this._carsFolded?"1":"0")}catch{}}toggleLhCards(){this._liveCardOn=!this._liveCardOn;try{localStorage.setItem("nextfloor.cards",this._liveCardOn?"1":"0")}catch{}this.syncDevices(!0)}renderTopLeft(){let e=this.clean?g:this.renderLhEnergy(),t=this.renderForecast("top_left");return this.clock!=="top_left"&&t===g||!this.hass?e:f`<div class="nf-topleft">${this.clock==="top_left"?this.renderClock(!0):g}${e}${t}</div>`}renderLhEnergy(){let e=this.ownSensors(),t=this._liveEnergy?.summary;if(!(!!t&&!this.roomId&&this.showEnergy&&!!this.hass&&!(t.consumption===null&&t.grid===null&&t.solar===null&&t.battery===null)))return e.length?f`<div class="nf-energy ${this._tinyStage?"nf-energy-tiny":""}" aria-live="off">${e}</div>`:g;let i=s=>M(this.hass,s),o=[];if(t.solar!==null&&o.push({cls:"solar",label:i("energy_solar"),value:_e(this.hass,t.solar)}),t.consumption!==null&&o.push({cls:"total",label:i("energy_consumption"),value:_e(this.hass,t.consumption)}),t.rest!==void 0&&t.rest!==null&&o.push({cls:"total",label:i("energy_rest"),value:_e(this.hass,t.rest)}),t.battery!==null||t.soc!==null){let s=[t.battery!==null?_e(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);o.push({cls:"battery",label:i("energy_battery"),value:s.join(" \xB7 ")})}if(t.grid!==null){let s=t.grid<0;o.push({cls:s?"export":"grid",label:i(s?"energy_grid_export":"energy_grid_import"),value:_e(this.hass,Math.abs(t.grid))})}if(t.tariff&&o.push({cls:"tariff",label:i("energy_tariff"),value:`${U(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),this.building)for(let s of this.meterRows(this.building))o.push({cls:"meter",label:`${s.icon} ${s.label}`,value:s.value});return f`<div class="nf-energy ${this._tinyStage?"nf-energy-tiny":""}" aria-live="off">
      ${this.liveCardsOn&&this._liveCards.some(s=>s.kind==="house")?g:o.map(s=>f`<div class="nf-energy-item nf-energy-${s.cls}"><span>${s.label}</span><b>${s.value}</b></div>`)}
      ${this.flows!==null?g:f`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${i("flows_hint")} aria-label=${i("flows")} @click=${()=>this.toggleFlows()}>
            <span>${i("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms!==null?g:f`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${i("holos_hint")} aria-label=${i("holos")} @click=${()=>this.toggleLhCards()}>
            <span>${i("holos")}</span><b>◫</b>
          </button>`}
      ${e}
    </div>`}ownSensors(){let e=this.sensorBar&&this.hass?this.building?.settings.status_entities??[]:[],t=this.building?.settings.status_names??{};return e.filter(r=>this.hass.states[r]).map(r=>f`<button class="nf-energy-item nf-own-sensor" title=${t[r]||B(this.hass,r)} @click=${()=>me(this,r)}>
          <span>${t[r]||B(this.hass,r)}</span><b>${ce(this.hass,this.hass.states[r])}</b>
        </button>`)}renderMapCredit(){let e=this.building?.settings.map;return Xc(e)?f`<a class="nf-map-credit" href=${Ho(e).href} target="_blank" rel="noopener">${Ho(e).text}</a>`:g}renderLegend(){if(this.heatMode==="wifi")return this.renderWifiLegend();if(this.heatMode==="none"||this.heatMode==="values")return g;let e=vt(new Date,this.hass?.config?.latitude??50),t=Lr(this.heatMode,e),r=this.heatMode==="temperature",i=r?ye(this.hass,t.stops[0][0]):t.stops[0][0],o=r?ye(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],s=r?de(this.hass):t.unit,a=l=>M(this.hass,l);return f`<div class="nf-legend">
      <b>${a(`heat_${this.heatMode}`)}${this.heatMode==="temperature"?f` <small>${a(e?"heat_summer":"heat_winter")}</small>`:g}</b>
      <span class="nf-legend-bar" style="background:${Bl(this.heatMode,e)}"></span>
      <span class="nf-legend-range"><span>${U(this.hass,i,0)} ${s}</span><span>${U(this.hass,o,0)} ${s}</span></span>
      ${this.heatValues.size?g:f`<span class="nf-legend-none">${a("heat_none_found")}</span>`}
    </div>`}renderWifiLegend(){let e=this.hass,t=this.building;if(!e||!t)return g;let r=(c,u)=>M(e,c,u),i=t.floors.flatMap(c=>c.furniture.filter(u=>Jo(u.type)).map(u=>Qo(e,this.furnitureLinks?.get(u.id)?.entity??this.furnitureLinks?.get(u.id)?.power??null))),s=i.filter(c=>!!c).reduce((c,u)=>c+(u.clients??0),0),a=t.floors.flatMap(c=>c.placements.map(u=>e.states[u.entity_id])),l=Pu(a);return f`<div class="nf-legend">
      <b>📶 ${r("heat_wifi")}</b>
      <span>${r("wifi_aps",{n:i.length,clients:s})}</span>
      ${l.online+l.offline.length?f`<span>${r("wifi_network",{online:l.online,offline:l.offline.length})}</span>`:g}
      ${l.offline.length?f`<span class="nf-legend-none">${l.offline.slice(0,4).join(", ")}</span>`:g}
      ${i.length?g:f`<span class="nf-legend-none">${r("wifi_none")}</span>`}
    </div>`}skyColor(){let e=Co(this.theme,this.filledOwnLook),t=this._sky;return e.night[0].map((r,i)=>Math.round(r+(e.day[0][i]-r)*t))}render(){let e=this._sky,t=(p,h)=>`rgb(${p.map((w,_)=>Math.round(w+(h[_]-w)*e)).join(",")})`,r=Co(this.theme,this.filledOwnLook),i=`--nf-sky:${t(r.night[0],r.day[0])};--nf-ground:${t(r.night[1],r.day[1])}`+Sc(this.building?.settings.backdrop),o=this.building?.settings.tablet_ui,s=!this.clean&&o?.show_legend!==!1,a=!this.clean&&o?.show_central!==!1,l=!this.clean&&o?.show_walk!==!1,c=!this.furnish&&o?.show_quick_dock!==!1,u=!this.furnish&&!this.roomId&&!this.panelOpen,d=!this.furnish&&!this.roomId&&!this.panelOpen&&o?.show_cam_bookmarks!==!1,m=!this.clean&&this.building?.settings.forecast?.corner==="top_right";return f`<div
      class="nf-stage ${this.roomLabels?"":"nf-no-room-names"} ${this.deviceLabels?"":"nf-no-device-names"} ${this._low?"nf-low":""} ${this.panelOpen?"nf-panel-open":""} ${this._alerts.length?"nf-has-alerts":""} ${this._narrowStage?"nf-narrow":""}"
      style=${i}
      @pointerdown=${()=>this.lastActivity=Date.now()}
    >
      ${this._error?f`<p class="nf-error">${this._error}</p>`:g} ${this.renderTopLeft()} ${Wu(this.hass,this.roomId||this.panelOpen?[]:this._liveCards,(p,h,w,_)=>this.hass?.callService(p,h,{entity_id:w,..._}),{folded:this._houseFolded,toggle:()=>this.toggleHouseFold()},{folded:this._carsFolded,toggle:()=>this.toggleCarFold()})} ${s?this.renderLegend():g} ${this.renderMapCredit()}
      ${this.renderAlerts()} ${this.renderAnnouncement()} ${a?f`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`:g} ${this.renderSwipe()}
      ${this.renderMenu()} ${this.renderPlate()} ${this.renderEye()} ${l?f`${this.renderLock()} ${this.renderWalk()}`:g} ${this.renderTravel()} ${this.renderClock()} ${this.renderToday()} ${this.renderLayers()} ${this.renderPluginWindow()}
      ${u?_c(this.hass,this.building,o,m):g}
      ${d?xc(this.hass,this._camBookmarks,!this.clean,p=>this.viewer?.showView(p.view,900),()=>this.addCamBookmark(),p=>this.removeCamBookmark(p)):g}
      ${yc(this.hass,this._pipCamera,this._pipTick,()=>this.closePipCamera(),p=>{this.closePipCamera(),me(this,p)})}
      ${this._screensaver?kc(this.hass,this.building,o,()=>{this._screensaver=!1,this.lastActivity=Date.now()}):g}
      ${c?fc(this.hass,this.building?.settings.quick_controls??[],this._quickGroup,p=>this._quickGroup=p,o?.dock_style??"pill",this.building?.settings.alarm_ring,()=>this.requestUpdate()):g}
      ${this.showStats&&this._stats?f`<span class="nf-stats"
            ><b>${this._stats.fps?M(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):M(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?f`(${this._stats.busy.map(p=>M(this.hass,`stats_busy_${p}`)).join(", ")})`:g} ·
            ${M(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${M(this.hass,this._stats.low?"stats_low":"stats_full",{r:U(this.hass,this._stats.pixelRatio,2)})}</span
          >`:g}
    </div>`}static styles=[Le,at,Lu,mc,gc,vc,ie`
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
      .nf-alert-banner.nf-alert-rows2 {
        flex-wrap: wrap;
        max-height: 76px;
        overflow: hidden;
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
      .nf-alert-banner.nf-alert-all {
        flex-wrap: wrap;
        max-height: 60vh;
        overflow-y: auto;
      }
      .nf-alert-more {
        align-self: center;
        padding: 6px 10px;
        border: 0;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
        color: var(--nf-muted);
        font: 600 13px var(--nf-font);
        cursor: pointer;
      }
      @keyframes nf-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .nf-has-alerts .nf-energy,
      .nf-has-alerts .nf-topleft {
        top: calc(58px + var(--nf-top-reserve, 0px));
      }
      /* the clock top left stacks above the sensor and energy bar rather than covering it */
      .nf-topleft {
        position: absolute;
        left: 12px;
        top: calc(10px + var(--nf-top-reserve, 0px));
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
      @media (prefers-reduced-motion: reduce) {
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
      .nf-note-task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-top: 6px;
      }
      .nf-note-last {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .nf-note-done {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 999px;
        background: var(--primary-color, #03a9f4);
        color: var(--text-primary-color, #fff);
        font-weight: 600;
        cursor: pointer;
        pointer-events: auto;
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
      .nf-no-room-names .nf-pin,
      .nf-pin.nf-pin-empty {
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
      /* a very small card: the floor pictures would cover the picture and run into the buttons, the floor can still be changed in the room row (#203) */
      .nf-energy.nf-energy-tiny {
        display: none;
      }
      .nf-thumbs.nf-thumbs-tiny {
        display: none;
      }
      .nf-thumbs-small .nf-thumb {
        width: 104px;
      }
      .nf-thumb,
      .nf-find-btn,
      .nf-central-btn,
      .nf-walk-btn,
      .nf-eye,
      .nf-lock3d,
      .nf-flow-toggle {
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }
      .nf-thumb:active,
      .nf-find-btn:active,
      .nf-central-btn:active,
      .nf-walk-btn:active,
      .nf-eye:active,
      .nf-lock3d:active,
      .nf-flow-toggle:active {
        transform: scale(0.96);
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-thumb:active,
        .nf-find-btn:active,
        .nf-central-btn:active,
        .nf-walk-btn:active,
        .nf-eye:active,
        .nf-lock3d:active,
        .nf-flow-toggle:active {
          transform: none;
        }
      }
      .nf-find-btn,
      .nf-central-btn {
        position: absolute;
        left: 12px;
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 12px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
      }
      .nf-find-btn {
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
      }
      /* the star sits above the search button, its menu opens above it */
      .nf-central-btn {
        bottom: calc(56px + var(--nf-bottom-inset, 0px));
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
      @media (hover: hover) and (pointer: fine) {
        .nf-eye:hover,
        .nf-eye-clean:hover {
          opacity: 1;
        }
      }
      .nf-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        /* above the buttons along the bottom edge (they sit at z-index 3-4), which covered the field on a phone (#147) */
        z-index: 6;
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
        border-radius: 6px;
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
      @media (hover: hover) and (pointer: fine) {
        .nf-plate-menu button:hover {
          background: rgba(127, 127, 127, 0.14);
        }
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
        width: min(100%, calc((100dvh - 200px) * 16 / 9));
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
        top: calc(10px + var(--nf-top-reserve, 0px));
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
      .nf-dev-name:empty,
      .nf-no-device-names .nf-dev-name {
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
        font-size: 12px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .nf-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--nf-danger);
      }
    `]};customElements.get("nf-view3d")||customElements.define("nf-view3d",as);function _e(n,e){return Math.abs(e)>=1e3?`${U(n,e/1e3,1)} kW`:`${Math.round(e)} W`}function ss(n){return n.type==="tv_board"?n.h+.9:n.type==="tv_wall"||n.type==="kitchen_wall"?n.h+.25:n.h+.35}function kg(n,e){let t=e.attributes.percentage;return e.state==="on"&&typeof t=="number"?`${Math.round(t)} %`:ce(n,e)}var Xu;function ed(){let n=new URL("./nextfloor-editor.js?v=0f7d57eb98e8",new URL(import.meta.url)).href;return Xu??=import(n),Xu}var xg=.25,td=n=>Math.round(n*1e3)/1e3,nd=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&O([e,t],r.points));function cs(n,e,t,r,i){let o=nd(n,e,t);if(!o)return[r,i];let s=(a,l)=>O([a,l],o.points);return s(r,i)?[r,i]:s(r,t)?[r,t]:s(e,i)?[e,i]:[e,t]}function Sg(n,e,t,r){return n.rooms.some(i=>i.id!==e.id&&i.points.some((o,s)=>{let a=i.points[(s+1)%i.points.length];return Math.abs(Z(X(o,t),r))<.02&&Math.abs(Z(X(a,t),r))<.02}))}var ls=(n,e)=>Math.abs((n-e+540)%360-180);function rd(n,e,t,r=xg){let i=nd(n,e.x,e.z);if(!i)return null;let o=i.points,s=Ke(o)>=0?1:-1,a=null;return o.forEach((l,c)=>{let u=o[(c+1)%o.length],d=Re(X(u,l));if(d<.3)return;let m=[(u[0]-l[0])/d,(u[1]-l[1])/d],p=[-m[1]*s,m[0]*s],h=Z(X([e.x,e.z],l),m);if(h<0||h>d)return;let w=Sg(n,i,l,p)?t/2:0,_=Z(X([e.x,e.z],l),p)-w,v=Math.atan2(-p[0],p[1])*180/Math.PI,x=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((b,z)=>ls(e.rotation,z.rotation)<ls(e.rotation,b.rotation)?z:b);if(ls(e.rotation,x.rotation)>50)return;let y=_-x.extent;Math.abs(y)>r||a&&Math.abs(y)>=Math.abs(a.gap)||(a={x:td(e.x-p[0]*y),z:td(e.z-p[1]*y),rotation:(Math.round(x.rotation)%360+360)%360,gap:y})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}function fi(n,e,t){let r=structuredClone(n);for(let i of r.floors){let o=i.furniture.find(s=>s.id===e);o&&t(o,i)}return r}function gi(n,e,t){let r=structuredClone(n);for(let i of r.floors){let o=i.placements.find(s=>s.entity_id===e);o&&t(o,i)}return r}function id(n,e){let t=structuredClone(n);for(let r of t.floors)r.furniture=r.furniture.filter(i=>i.id!==e);return t}function od(n,e){let t=structuredClone(n);for(let r of t.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);return t}function sd(n,e,t,r){return gi(n,e,(i,o)=>{[i.x,i.z]=cs(o,i.x,i.z,t,r)})}function ad(n,e,t,r){let i=n.settings.wall_interior??.12;return fi(n,e,(o,s)=>{[o.x,o.z]=cs(s,o.x,o.z,t,r);let a=rd(s,o,i);a&&Object.assign(o,a)})}var us=(n,e)=>((n+e)%360+360)%360,ld=n=>Number.parseFloat(n.replace(",",".")),qn=(n,e)=>Math.round(n*10**e)/10**e;function ds(n){let{min:e,max:t,accepts:r=()=>!0}=n,i=o=>{let s=ld(o.target.value);!Number.isFinite(s)||!r(s)||n.apply(t===void 0?s:Math.min(t,Math.max(e,s)))};return f`<label class="nf-size" title=${n.title}
    >${n.label}
    <input type="number" inputmode="decimal" step=${n.step} min=${e} max=${t??g} .value=${String(qn(n.value,2))} @change=${i} />
  </label>`}var ud=(n,e)=>f`<button class="nf-chip" @click=${e}>${n.t("height_auto")}</button>`,cd=(n,e)=>f`<button class="nf-chip" @click=${()=>e(-n)}>↺ ${n}°</button><button class="nf-chip" @click=${()=>e(n)}>↻ ${n}°</button>`;function $g(n,e){let t=n.building.floors.find(s=>s.furniture.some(a=>a.id===e)),r=t?.furniture.find(s=>s.id===e);if(!t||!r)return g;let i=(s,a)=>ds({label:n.t(a),title:n.t(`size_${s}`),value:r[s],step:.05,min:.05,accepts:l=>l>0,apply:l=>n.editFurniture(e,c=>c[s]=qn(l,3))}),o=da(r)?f`${ds({label:"\u2195",title:n.t("mount_height"),value:r.mount_y??be(t,r),step:.05,min:0,accepts:s=>s>=0,apply:s=>n.editFurniture(e,a=>a.mount_y=qn(s,3))})}
      ${r.mount_y!=null?ud(n,()=>n.editFurniture(e,s=>s.mount_y=null)):g}`:g;return f`${i("w","size_short_w")}${i("d","size_short_d")}${i("h","size_short_h")} ${o}`}function Mg(n,e){let t=n.building.floors.find(l=>l.placements.some(c=>c.entity_id===e)),r=t?.placements.find(l=>l.entity_id===e);if(!t||!r)return g;let i=L(e),o=(l,c,u)=>f`<select class="nf-size-select" title=${n.t(l)} @change=${d=>n.editDevice(e,m=>Object.assign(m,{mount:d.target.value,y:null}))}>
      ${c.map(([d,m])=>f`<option value=${d} ?selected=${d===u}>${m}</option>`)}
    </select>`,s=["ceiling","floor","table","wall"].map(l=>[l,n.t(`lamp_${l}`)]),a=i?It(i,Ee(t,r.x,r.z),i==="light"?r.mount??"ceiling":null):1;return f`${i==="light"?o("lamp_mount",s,r.mount??"ceiling"):g}
    ${ds({label:n.t("size_short_h"),title:n.t("marker_height"),value:r.y??a,step:.05,min:0,accepts:l=>l>=0,apply:l=>n.editDevice(e,c=>c.y=qn(l,3))})}
    ${r.y!==null?ud(n,()=>n.editDevice(e,l=>l.y=null)):g}`}function dd(n,e,t){let r=n.t,i;if(e){let o=n.building.floors.flatMap(s=>s.furniture).find(s=>s.id===e)?.type;i=f`<span>${o?xe(n.hass,o):""}</span>
      ${$g(n,e)} ${cd(45,s=>n.turnFurniture(e,s))}
      <button class="nf-chip" title=${r("furn_mirror_hint")} @click=${()=>n.editFurniture(e,s=>s.mirror=!s.mirror)}>⇋ ${r("furn_mirror")}</button>
      <button class="nf-chip nf-danger-chip" @click=${()=>n.removeFurniture(e)}>${r("delete")}</button>`}else t?i=f`<span>${B(n.hass,t)}</span>
      ${Mg(n,t)} ${cd(45,o=>n.turnDevice(t,o))}
      <button class="nf-chip nf-danger-chip" @click=${()=>n.removeDevice(t)}>${r("delete")}</button>`:i=f`<span>${r("furnish_hint")}</span>`;return f`<div class="nf-furnish-bar">${i}<button class="nf-chip nf-chip-on" @click=${()=>n.finish()}>${r("done")}</button></div>`}var hd=le`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`;var ue=(n,e)=>({name:n,fallback:e,read:t=>e?t!=="0":t==="1",write:t=>t?"1":"0"}),ct=(n,e,t)=>({name:n,fallback:t,read:r=>e.find(i=>i===r)??t,write:r=>r}),hs={explode:ue("explode",!0),keepRoof:ue("roof",!1),solidWalls:ue("solid_walls",!1),quality:ct("quality",["auto","low","high"],"auto"),stats:ue("stats",!1),markers:ct("markers",["none","important","all"],"important"),heat:ct("heat",["none","temperature","humidity","co2","mould","comfort","power","sun","values","wifi"],"none"),theme:ct("theme",ti,"neon"),autoDay:ct("auto_day",kt,"nordic"),autoNight:ct("auto_night",kt,"warm_evening"),clock:ct("clock",["none","top_left","top_right","bottom_left","bottom_right"],"none"),accent:{name:"accent",fallback:null,read:n=>/^#[0-9a-f]{6}$/i.test(n)?n:null,write:n=>n??""},floorStack:ct("floor_stack",["dim","stacked","single"],"dim"),roomNames:ue("room_names",!0),deviceNames:ue("device_names",!0),sunShadows:ue("sun_shadows",!0),clean:ue("clean",!1),navWrap:ue("nav_wrap",!1),weather:ue("weather",!0),timeSlider:ue("time_slider",!1),menuOpen:ue("menu_open",!1),keepCamera:ue("keep_camera",!1),readable:ue("readable",!1),viewOnly:ue("view_only",!1),plain:ue("plain",!1),rightBack:ue("right_back",!1),zoom:{name:"zoom",fallback:100,read:n=>/^\d{2,3}$/.test(n)?Math.min(250,Math.max(60,Number(n))):100,write:n=>String(Math.round(Math.min(250,Math.max(60,n))))},screenName:{name:"screen_name",fallback:"",read:n=>n.slice(0,60),write:n=>n.trim().slice(0,60)},announceMuted:ue("announce_muted",!1),glassWalls:{name:"glass_walls",fallback:20,read:n=>/^\d{1,3}$/.test(n)?Math.min(100,Number(n)):20,write:n=>String(Math.round(Math.min(100,Math.max(0,n))))}};function pd(n=bi()){try{return n?.getItem("nextfloor.screen_name")?.trim()||null}catch{return null}}function md(n=bi()){try{return n?.getItem("nextfloor.announce_muted")==="1"}catch{return!1}}function bi(){try{return localStorage}catch{return null}}var _i=class{storage;constructor(e){this.storage=e}raw(e){try{return this.storage?.getItem(`nextfloor.${e}`)??null}catch{return null}}load(e=""){let t={};for(let r of Object.keys(hs)){let i=hs[r],o=this.raw(i.name);t[r]=o===null?i.fallback:i.read(o)}return new URLSearchParams(e).has("nf_stats")&&(t.stats=!0),t}save(e,t){let r=hs[e];try{this.storage?.setItem(`nextfloor.${r.name}`,r.write(t))}catch{}}};var fd=ie`
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
    /* minus the strip Home Assistant keeps free above the panel for the status bar; the strip it keeps free below
       (home indicator) the panel fills itself, so no empty bar is left under the 3D view (#175) */
    height: calc(100vh - var(--nf-host-pad, 0px));
    height: calc(100dvh - var(--nf-host-pad, 0px));
    margin-bottom: calc(-1 * var(--nf-host-bottom, 0px));
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
    font-size: 14px;
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
    font-size: 14px;
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
    font-size: 13px;
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
    font-size: 12px;
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
  @media (hover: hover) and (pointer: fine) {
    .nf-nav:hover {
      scrollbar-width: thin;
    }
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
  /* plus the system's bottom bar or home indicator: the companion apps draw the page under it (#175) */
  nf-view3d {
    --nf-bottom-inset: calc(52px + var(--nf-safe-bottom, env(safe-area-inset-bottom, 0px)));
  }
  .nf-clean nf-view3d {
    --nf-bottom-inset: var(--nf-safe-bottom, env(safe-area-inset-bottom, 0px));
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
  .nf-opts-btn,
  .nf-accent-reset {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .nf-opts-btn:active,
  .nf-accent-reset:active {
    transform: scale(0.96);
  }
  @media (prefers-reduced-motion: reduce) {
    .nf-opts-btn:active,
    .nf-accent-reset:active {
      transform: none;
    }
  }
`;var gd=new WeakMap;function Ag(n){let e=gd.get(n);return e||(e={...n,callService:async()=>{}},gd.set(n,e)),e}var $t=(n,e)=>e&&n?Ag(n):n;var _d=n=>{let e=parseFloat(n??"");return Number.isFinite(e)&&e>0?e:0};function bd(n){return{top:_d(n?.paddingTop),bottom:_d(n?.paddingBottom)}}var ps=class extends pe{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_prefs:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_optsOpen:{state:!0},_switchesOpen:{state:!0},_timeOfDay:{state:!0},_outside:{state:!0},_timeDrag:{state:!0},_floorUndo:{state:!0}};outsideMemo=null;floorUndoTimer;data=new Ht(this);store=new _i(bi());constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("nf-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._prefs=this.store.load(location.search),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._optsOpen=!1,this._switchesOpen=!1,this._timeOfDay=null,this._outside=!1,this._timeDrag=null,this._floorUndo=null}toggleTimeSlider(e){this.setPref("timeSlider",e),e||([this._timeOfDay,this._timeDrag]=[null,null])}sunState(){let e=this.hass?.config;return this._timeOfDay===null||e?.latitude===void 0||e.longitude===void 0?this.hass?.states["sun.sun"]?.state:gt(Rt(this._timeOfDay,e.time_zone),e.latitude,e.longitude).elevation>0?"above_horizon":"below_horizon"}renderTimeOfDay(){let e=this.t;if(this.hass?.config?.latitude===void 0)return g;let t=this._timeDrag??this._timeOfDay,r=o=>`${String(Math.floor(o)).padStart(2,"0")}:${String(Math.round(o%1*60)).padStart(2,"0")}`,i=()=>{let o=new Date;return Math.round((o.getHours()+o.getMinutes()/60)*4)/4};return f`<button class="nf-chip" aria-pressed=${t!==null} title=${e("time_of_day_hint")} @click=${()=>(this._timeDrag=null,this._timeOfDay=t===null?i():null)}>☀ ${t===null?e("time_of_day"):r(t)}</button>
      ${t!==null?f`<label class="nf-chip nf-time-slider"
            ><input type="range" min="0" max="23.75" step="0.25" .value=${String(t)} aria-label=${e("time_of_day")} @input=${o=>this._timeDrag=Number(o.target.value)}
            @change=${o=>(this._timeDrag=null,this._timeOfDay=Number(o.target.value))}
          /></label>`:g}`}t=(e,t)=>M(this.hass,e,t);setPref(e,t){this._prefs={...this._prefs,[e]:t},this.store.save(e,t)}themeKey="";willUpdate(e){this.toggleAttribute("readable",!!this._prefs?.readable),e.has("hass")&&this.hass&&(this.style.colorScheme=Ur(this.hass),this.themeKey=Kr(this,this.hass,this.themeKey),this.data.setHass(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}openFloor(e){this._floorId=e,this._roomId=null,this._outside=!1}outsideIds(e){let t=this.outsideMemo;if(t&&t.building===e&&t.entities===this.hass.entities)return t.ids;let r=yn(this.hass,e.floors,e.settings.outside_hidden);return this.outsideMemo={building:e,entities:this.hass.entities,ids:r},r}openOutside(){let e=!this._outside;this.openFloor(null),this._outside=e}onRoomTap(e){let{floorId:t,roomId:r}=e.detail;if(r==="nf-outside")return this.openOutside();if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t)return this.openFloor(t);r&&(this._roomId=r===this._roomId?null:r,this._outside=!1)}furnishHost={hass:void 0,building:void 0,t:this.t,editFurniture:(e,t)=>this.applyEdit(r=>fi(r,e,t)),editDevice:(e,t)=>this.applyEdit(r=>gi(r,e,t)),turnFurniture:(e,t)=>this.applyEdit(r=>fi(r,e,i=>i.rotation=us(i.rotation,t))),turnDevice:(e,t)=>this.applyEdit(r=>gi(r,e,i=>i.rotation=us(i.rotation??0,t))),removeFurniture:e=>{this.applyEdit(t=>id(t,e)),this._selFurniture=null},removeDevice:e=>{this.applyEdit(t=>od(t,e)),this._selDevice=null},finish:()=>{this._furnish=!1,this._selFurniture=null,this._selDevice=null}};saveMoods(e,t){this.applyEdit(r=>({...r,floors:r.floors.map(i=>({...i,rooms:i.rooms.map(o=>o.id===e?{...o,moods:t.length?t:void 0}:o)}))}))}applyEdit(e){let t=this.data.building;t&&this.data.edit(e(t))}view3d(){return this.renderRoot.querySelector("nf-view3d")}back(){this._outside?this._outside=!1:this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this._prefs.clean?this.setPref("clean",!1):this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("resize",this.syncHostPad),this.syncHostPad()}syncHostPad=()=>{let e=this.parentElement,t=bd(e?getComputedStyle(e):null);this.style.setProperty("--nf-host-pad",`${t.top}px`),this.style.setProperty("--nf-host-bottom",`${t.bottom}px`),t.bottom>0?this.style.setProperty("--nf-safe-bottom",`${t.bottom}px`):this.style.removeProperty("--nf-safe-bottom")};disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("resize",this.syncHostPad)}render(){if(this.hass&&Tr(this.hass,this))return g;let e=this.data.building,t=this._prefs.clean&&this._mode==="view",r=g;return e&&(this._mode==="editor"&&this.isAdmin?r=this.renderEditor(e):this._mode==="settings"&&this.isAdmin?r=this.renderSettingsPage(e):this._mode==="extensions"&&this.isAdmin?r=this.renderExtensions():r=this.renderView(e)),f`<div class="nf-app ${t?"nf-clean":""}" style=${this._prefs.accent?`--nf-accent:${this._prefs.accent}`:""}>
      ${t?g:f`${this.renderHeader(e)}${this.renderNotices()}`}
      ${this.data.error&&!e?f`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>`:g}
      ${!e&&!this.data.error?f`<p class="nf-message">${this.t("loading")}</p>`:g}
      ${r}
    </div>`}choiceRow(e,t,r,i,o,s=g){return f`<div class="nf-seg nf-quality" role=${e?"group":g} aria-label=${e?this.t(e):g}>
      ${t.map(a=>f`<button aria-pressed=${r===a} title=${e==="markers"?this.t("markers"):g} @click=${()=>o(a)}>${i(a)}</button>`)}${s}
    </div>`}accentPicker(){let e=this._prefs.accent;return f`<label class="nf-accent-pick" title=${this.t("accent_hint")}>
      <input type="color" .value=${e??"#37e0ff"} aria-label=${this.t("accent")} @input=${t=>this.setPref("accent",t.target.value)} />
      ${e?f`<button class="nf-accent-reset" title=${this.t("accent_reset")} aria-label=${this.t("accent_reset")} @click=${()=>this.setPref("accent",null)}>↺</button>`:g}
    </label>`}renderViewOptions(){let e=this._prefs;return f`<button class="nf-opts-btn" aria-expanded=${this._optsOpen} title=${this.t("view_options")} aria-label=${this.t("view_options")} @click=${()=>this._optsOpen=!this._optsOpen}>⚙</button>
      <div class="nf-view-opts ${this._optsOpen?"nf-opts-open":""}">
        ${this.choiceRow("quality",["auto","low","high"],e.quality,t=>this.t(`quality_${t}`),t=>this.setPref("quality",t))}
        ${this.choiceRow("theme",ti,e.theme,t=>this.t(`theme_${t}`),t=>this.setPref("theme",t),this.accentPicker())}
        ${e.theme==="auto"?f`<label class="nf-seg nf-clock-pick" title=${this.t("auto_day")}
                >☀
                <select aria-label=${this.t("auto_day")} @change=${t=>this.setPref("autoDay",t.target.value)}>
                  ${kt.map(t=>f`<option value=${t} ?selected=${e.autoDay===t}>${this.t(`theme_${t}`)}</option>`)}
                </select>
              </label>
              <label class="nf-seg nf-clock-pick" title=${this.t("auto_night")}
                >🌙
                <select aria-label=${this.t("auto_night")} @change=${t=>this.setPref("autoNight",t.target.value)}>
                  ${kt.map(t=>f`<option value=${t} ?selected=${e.autoNight===t}>${this.t(`theme_${t}`)}</option>`)}
                </select>
              </label>`:g}
        ${this.choiceRow("markers",["none","important","all"],e.markers,t=>this.t(`markers_${t}`),t=>this.setPref("markers",t))}
        <label class="nf-seg nf-clock-pick" title=${this.t("clock")}
          >🕒
          <select aria-label=${this.t("clock")} @change=${t=>this.setPref("clock",t.target.value)}>
            ${["none","top_left","top_right","bottom_left","bottom_right"].map(t=>f`<option value=${t} ?selected=${e.clock===t}>${this.t(`clock_${t}`)}</option>`)}
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
          <button aria-pressed=${e.viewOnly} title=${this.t("view_only_hint")} @click=${()=>this.setPref("viewOnly",!e.viewOnly)}>👁 ${this.t("view_only")}</button>
          <button aria-pressed=${e.stats} title=${this.t("fps_title")} @click=${()=>this.setPref("stats",!e.stats)}>${this.t("fps")}</button>
        </div>
      </div>`}renderHeader(e){let t=this.data.saveState,r=(o,s,a="")=>f`<button role="tab" class=${a} aria-pressed=${this._mode===o} @click=${()=>this.setMode(o)}>${s}</button>`,i=t==="saving"?"saving":t==="saved"?"saved":"save_error";return f`<header class="nf-header">
      <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
      <h1>${hd}NextFloor</h1>
      ${this.isAdmin?f`<div class="nf-seg" role="tablist">${r("view",this.t("view"))}${r("editor",this.t("editor"))}${r("settings",`\u2699 ${this.t("settings")}`)}${r("extensions",`\u2726 ${this.t("ext_tab")}`,"nf-tab-ext")}</div>`:g}
      <span class="nf-grow"></span>
      ${this._mode==="view"&&e?.floors.some(o=>o.rooms.length)?this.renderViewOptions():g}
      ${this._mode==="view"&&e?f`<button class="nf-opts-btn" title=${this.t("controls_hide")} aria-label=${this.t("controls_hide")} @click=${()=>this.setPref("clean",!0)}>🖥️</button>`:g}
      ${this._mode==="editor"&&t!=="idle"?f`<span class="nf-save nf-save-${t}">${this.t(i)}</span>`:g}
      <span class="nf-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
    </header>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(e.versionGap==="frontend"?f`<div class="nf-notice nf-notice-warn">
              ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
              <button class="nf-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
            </div>`:f`<div class="nf-notice nf-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(f`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(f`<div class="nf-notice">
        <span>${this.t("draft_found",{time:r})}</span>
        <button class="nf-btn nf-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
        <button class="nf-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
      </div>`)}return t.length>0?f`<div class="nf-notices">${t}</div>`:g}whenEditorLoaded(e){return this._editorReady?e():(ed().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),f`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}renderSettingsPage(e){return this.whenEditorLoaded(()=>f`<nf-settings
        class="nf-body"
        .hass=${this.hass}
        .building=${e}
        @plan-changed=${t=>this.applyEdit(()=>t.detail)}
      ></nf-settings>`)}renderExtensions(){return this.whenEditorLoaded(()=>f`<nf-extensions class="nf-body" .hass=${this.hass} .packs=${this.data.packs} .plugins=${this.data.building?.settings.plugins??[]}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @plugins-changed=${e=>this.applyEdit(t=>({...t,settings:{...t.settings,plugins:e.detail}}))}></nf-extensions>`)}renderEditor(e){return this.whenEditorLoaded(()=>f`<nf-editor
        class="nf-body"
        .hass=${this.hass}
        .building=${e}
        .narrow=${this.narrow}
        .packs=${this.data.packs}
        .loadCardEditor=${er}
        @packs-changed=${()=>{this.data.reloadPacks()}}
        @building-changed=${t=>this.data.edit(t.detail.building)}
      ></nf-editor>`)}onNavWheel=e=>{if(this._prefs.navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};allOffChip(e){let t=this._floorId?e.floors.find(i=>i.id===this._floorId):e.floors.length===1?e.floors[0]:void 0;if(!t||!this.hass)return g;if(this._floorUndo){let i=this._floorUndo;return f`<button class="nf-chip" aria-pressed="true" @click=${()=>{for(let o of i)this.hass.callService(o.domain,o.service,o.data);this._floorUndo=null,clearTimeout(this.floorUndoTimer)}}>↶ ${this.t("all_off_undo")}</button>`}let r=Rn(tc(t).map(i=>this.hass.states[i]));return r.count<2?g:f`<button class="nf-chip" title=${this.t("all_off_floor",{floor:t.name,n:r.count})} @click=${()=>{for(let i of r.off)this.hass.callService(i.domain,i.service,i.data);this._floorUndo=r.undo,clearTimeout(this.floorUndoTimer),this.floorUndoTimer=setTimeout(()=>this._floorUndo=null,1e4)}}>⏻ ${r.count}</button>`}renderNav(e){let t=e.floors.filter(c=>!this._floorId||c.id===this._floorId),r=e.floors.length>1,i=this._prefs.navWrap,o=this.outsideIds(e).length?f`<button class="nf-chip" aria-pressed=${this._outside} title=${this.t("outside_area_hint")} @click=${()=>this.openOutside()}>🌳 ${this.t("outside_area")}</button>`:g,s=r?f`<button class="nf-chip" aria-pressed=${this._floorId===null} @click=${()=>this.openFloor(null)}>${this.t("all_floors")}</button>
          ${[...e.floors].reverse().map(c=>f`<button class="nf-chip" aria-pressed=${c.id===this._floorId} @click=${()=>this.openFloor(c.id)}>${c.name}</button>`)}
          ${o} ${this.allOffChip(e)}
          <span class="nf-sep"></span>`:f`${o} ${this.allOffChip(e)}`,a=t.flatMap(c=>[t.length>1&&c.rooms.some(u=>u.name.trim())?f`<span class="nf-nav-floor">${c.name}</span>`:g,...c.rooms.filter(u=>u.name.trim()).map(u=>f`<button
          class="nf-chip nf-room-chip"
          aria-pressed=${u.id===this._roomId}
          @click=${()=>{r&&(this._floorId=c.id),this._roomId=u.id===this._roomId?null:u.id,this._outside=!1}}
        >
          ${u.name}
        </button>`)]),l=this.t(i?"nav_row":"nav_wrap");return f`<nav class="nf-nav ${i?"nf-nav-wrap":""}" @wheel=${this.onNavWheel}>
      ${s}${a}
      <button class="nf-chip nf-nav-toggle" title=${l} aria-label=${l} aria-pressed=${i} @click=${()=>this.setPref("navWrap",!i)}>${i?"\u2194":"\u2261"}</button>
    </nav>`}toggleChip(e,t,r){return f`<button class="nf-chip" aria-pressed=${this._prefs[e]} title=${r?this.t(r):g} @click=${()=>this.setPref(e,!this._prefs[e])}>${this.t(t)}</button>`}renderOverlay(e){let t=this._prefs,r=this.t,i=(u,d)=>f`<div class="nf-seg">${[u,d].map(([m,p,h])=>f`<button aria-pressed=${m} @click=${p}>${h}</button>`)}</div>`,o=["none","temperature","humidity","co2","mould","comfort","power","sun","values","wifi"],s=["dim","stacked","single"],a=e.floors.length>1,l=this._roomId||this._floorId&&a?f`<button class="nf-chip" @click=${()=>this.back()}>${r("back")}</button>`:g,c=f`<button class="nf-chip" aria-haspopup="true" aria-expanded=${this._switchesOpen} @click=${()=>this._switchesOpen=!this._switchesOpen}>☰ ${r("bars_unfold")} <span class="nf-caret">${this._switchesOpen?"\u25BE":"\u25B4"}</span></button>`;return this._switchesOpen?f`<div class="nf-overlay">
      <div class="nf-switches-veil" @click=${()=>this._switchesOpen=!1}></div>
      <div class="nf-switches" role="group" aria-label=${r("bars_unfold")} @keydown=${u=>u.key==="Escape"&&(this._switchesOpen=!1)}>
      <div class="nf-seg">
        ${["auto","cut","slope"].map(u=>f`<button aria-pressed=${this._wallMode===u} title=${u==="slope"?r("walls_slope_hint"):g} @click=${()=>this._wallMode=u}>${r(`walls_${u}`)}</button>`)}
      </div>
      <div class="nf-seg"><button aria-pressed=${t.solidWalls} title=${r("walls_solid_hint")} @click=${()=>this.setPref("solidWalls",!t.solidWalls)}>${r("walls_solid")}</button></div>
      ${a&&!this._floorId?i([t.explode,()=>this.setPref("explode",!0),r("floors_apart")],[!t.explode,()=>this.setPref("explode",!1),r("floors_stacked")]):g}
      ${!this._floorId&&e.settings.roof.type!=="none"?f`<div class="nf-seg"><button aria-pressed=${t.keepRoof} title=${r("roof_keep_hint")} @click=${()=>this.setPref("keepRoof",!t.keepRoof)}>${r("roof_keep")}</button></div>`:g}
      ${a&&this._floorId?f`<div class="nf-seg" role="group" aria-label=${r("card_floor_stack")}>
            ${s.map(u=>f`<button aria-pressed=${t.floorStack===u} @click=${()=>this.setPref("floorStack",u)}>${r(`floor_stack_short_${u}`)}</button>`)}
          </div>`:g}
      <div class="nf-seg" role="group" aria-label=${r("heatmap")}>
        ${o.map(u=>f`<button aria-pressed=${t.heat===u} @click=${()=>this.setPref("heat",u)}>${r(u==="none"?"heat_off":`heat_short_${u}`)}</button>`)}
      </div>
      ${this.toggleChip("roomNames","room_names_short")}
      ${this.toggleChip("deviceNames","device_names_short")}
     
      ${this.toggleChip("weather","weather_short","weather_hint")}
      ${t.theme==="real"||t.theme==="auto"?this.toggleChip("sunShadows","sun_shadows_short","sun_shadows_hint"):g}
      ${t.timeSlider?this.renderTimeOfDay():g}
      </div>
      ${c}${l}
    </div>`:f`<div class="nf-overlay">${c}${l}</div>`}renderView(e){if(!e.floors.some(i=>i.rooms.length))return f`<div class="nf-empty">
        <p>${this.t(this.isAdmin?e.floors.length?"no_rooms_admin":"no_building_admin":"no_building")}</p>
        ${this.isAdmin?f`<button class="nf-btn nf-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:g}
      </div>`;let t=this._prefs,r=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null;return this.furnishHost.hass=this.hass,this.furnishHost.building=e,f`
      ${t.clean&&!e.settings.tablet_ui?.show_nav_in_kiosk?g:this.renderNav(e)}
      <div class="nf-stage-wrap ${this._roomId?"nf-room-open":""}">
        <nf-view3d
          class="nf-body"
          .hass=${$t(this.hass,t.viewOnly)}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${t.floorStack}
          .roomLabels=${t.roomNames}
          .deviceLabels=${t.deviceNames}
          .clean=${t.clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>this.setPref("clean",!t.clean)}
          .weather=${t.weather}
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
          .theme=${ni(t.theme,this.sunState(),t.autoDay,t.autoNight)}
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
          @nf-central-dismiss=${()=>this.setPref("menuOpen",!1)}
          .keepCamera=${t.keepCamera}
          .sunShadows=${t.sunShadows}
          .plain=${t.plain}
          .rightBack=${t.rightBack}
          .readable=${t.readable}
          .zoom=${t.zoom/100}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${i=>this._selFurniture=i.detail.id}
          @furniture-move=${i=>this.applyEdit(o=>ad(o,i.detail.id,i.detail.x,i.detail.z))}
          @device-select=${i=>this._selDevice=i.detail.id}
          @device-move=${i=>this.applyEdit(o=>sd(o,i.detail.id,i.detail.x,i.detail.z))}
          .quality=${t.quality}
          ?showStats=${t.stats}
          @room-tap=${this.onRoomTap}
            @floor-tap=${i=>this.openFloor(i.detail.floorId)}
          @back=${()=>this.back()}
        ></nf-view3d>
        ${r?f`<nf-room-panel
            .building=${this.data.building??null}
              class="nf-room-panel"
              .hass=${$t(this.hass,t.viewOnly)}
              .room=${r}
              .floor=${e.floors.find(i=>i.rooms.some(o=>o.id===this._roomId))??null}
              .confirmEntities=${wt(this.hass,e.floors)}
              .phrases=${e.settings.announce_phrases??null}
              .rooms=${e.floors.flatMap(i=>i.rooms)}
              @mood-change=${i=>this.saveMoods(i.detail.roomId,i.detail.moods)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:this._outside?f`<nf-room-panel
            .building=${this.data.building??null}
                class="nf-room-panel"
                .hass=${$t(this.hass,t.viewOnly)}
                .room=${null}
                .outside=${this.outsideIds(e)}
                .confirmEntities=${wt(this.hass,e.floors)}
                .phrases=${e.settings.announce_phrases??null}
                @close=${()=>this._outside=!1}
              ></nf-room-panel>`:g}
        ${t.clean?g:this.renderOverlay(e)}
        ${this._furnish?dd(this.furnishHost,this._selFurniture,this._selDevice):g}
      </div>
    `}static styles=[Le,at,fd,Gr]};customElements.get("nextfloor-panel")||customElements.define("nextfloor-panel",ps);var Eg=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/,wd=(n,e)=>Number(n)*60+Number(e);function jn(n,e,t=new Date){if(!n||n==="off")return!1;if(n==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let r=Eg.exec(n.trim());if(!r)return!1;let i=wd(r[1],r[2]),o=wd(r[3],r[4]),s=t.getHours()*60+t.getMinutes();return i>o?s>=i||s<o:s>=i&&s<o}var wi=class{host;cleanTimer;idleTimer;nightTimer;constructor(e){this.host=e}armClean(e=!1){clearTimeout(this.cleanTimer);let t=this.host.config()?.controls_hide_after??0;t>0&&(e&&this.host.isClean()&&this.host.setClean(!1),this.cleanTimer=setTimeout(()=>this.host.setClean(!0),t*1e3))}stopClean(){clearTimeout(this.cleanTimer)}armIdle(){clearTimeout(this.idleTimer);let e=this.host.config()?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.host.goHome(),e*1e3))}touched(){this.host.isOrbit()&&this.host.setOrbit(!1),this.armIdle(),this.armClean(!0)}start(){this.armIdle(),this.nightTimer=setInterval(()=>this.host.setNight(jn(this.host.config()?.night,this.host.hass())),6e4)}stop(){clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}};function vd(n,e){return n?n.floors.filter(t=>e===null||t.id===e).map(t=>({floorId:t.id,floorName:t.name,rooms:t.rooms.filter(r=>(r.name??"").trim()).map(r=>({id:r.id,name:r.name,floorId:t.id}))})).filter(t=>t.rooms.length>0):[]}var yd=ie`
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
  /* full screen without the Fullscreen API (iPhone): the card covers the visible screen itself */
  ha-card.nf-pseudo-full {
    position: fixed;
    inset: 0;
    z-index: 9999;
    border-radius: 0;
    margin: 0;
  }
  ha-card.nf-pseudo-full .nf-card-full {
    top: calc(10px + env(safe-area-inset-top, 0px));
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
  .nf-card-full {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
  .nf-card-full:active {
    transform: scale(0.96);
  }
  @media (prefers-reduced-motion: reduce) {
    .nf-card-full:active {
      transform: none;
    }
  }
`;function ms(n,e){let t=n.template,r=t?e?.[t]:void 0;if(!r)return n;let{type:i,template:o,...s}=r;return{...s,...n}}function kd(n,e){let t=new Set(e),r=[];for(let o of n.floors){let s=o.rooms.filter(c=>t.has(c.id));if(!s.length)continue;let a=(c,u)=>s.some(d=>d.points.length>=3&&O([c,u],d.points)),l=new Set(s.map(c=>c.id));r.push({...o,rooms:s,openings:o.openings.filter(c=>l.has(c.room_id)),furniture:o.furniture.filter(c=>a(c.x,c.z)),placements:o.placements.filter(c=>a(c.x,c.z)),walls:(o.walls??[]).filter(c=>a((c.a[0]+c.b[0])/2,(c.a[1]+c.b[1])/2)),outdoor:[]})}let i={...n.settings.roof,type:"none",sections:[],solar:[]};return{...n,floors:r,settings:{...n.settings,roof:i}}}var tt="nf-outside",fs=class extends pe{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};_own=null;templatesSeen;roomApplied=!1;data=new Ht(this);kiosk=new wi({config:()=>this._config,hass:()=>this.hass,setClean:e=>this._clean=e,isClean:()=>this._clean,setOrbit:e=>this._orbit=e,isOrbit:()=>this._orbit,setNight:e=>this._night=e,goHome:()=>this.returnHome()});constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._clean=!1,this._night=!1,this._orbit=!1}view3d(){return this.shadowRoot?.querySelector("nf-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{if(this._pseudoFull)return;let e=document.fullscreenElement;this._fullscreen=!!e&&(e===this||this.shadowRoot?.contains(e)===!0||this.shadowRoot?.fullscreenElement!=null)};connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.kiosk.start()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),this.kiosk.stop()}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1;return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card");e&&typeof e.requestFullscreen=="function"?e.requestFullscreen():(this._pseudoFull=!0,this._fullscreen=!0)}static async getConfigElement(){return await er(),document.createElement("nextfloor-card-editor")}static getStubConfig(){return{type:"custom:nextfloor-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._own=e,this._config=ms(e,this.data.building?.settings.card_templates),this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=jn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.kiosk.armClean(),this.kiosk.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}themeKey="";willUpdate(e){let t=this.data.building?.settings.card_templates;if(this._own?.template&&t!==this.templatesSeen&&(this.templatesSeen=t,this._config=ms(this._own,t)),this.toggleAttribute("readable",this._config?.readable===!0),this.style.setProperty("--nf-top-reserve",this._config?.room_buttons&&!this._clean&&this.plan()?"46px":"0px"),e.has("hass")&&(this.style.colorScheme=Ur(this.hass),this.themeKey=Kr(this,this.hass,this.themeKey)),!e.has("hass")||!this.hass)return;this.data.setHass(this.hass);let r=jn(this._config?.night,this.hass);r!==this._night&&(this._night=r)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}roomsMemo=null;plan(){let e=this.data.building??null,t=this._config?.rooms;if(!e||!t?.length)return e;let r=t.join(",");return(!this.roomsMemo||this.roomsMemo.source!==e||this.roomsMemo.ids!==r)&&(this.roomsMemo={source:e,ids:r,result:kd(e,t)}),this.roomsMemo.result}t=e=>M(this.hass,e);stage(){let e=this.plan(),t=this._config,r=this._floorId===void 0?t?.floor??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(a=>a.id===r)?r:null,o=!!this._roomId&&t?.room_panel!==!1,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&(e?.floors.length??0)>1;return{floorId:i,walls:this._walls??t?.walls??"auto",heat:this._heat??t?.heatmap??"none",explode:this._explode??t?.explode??!0,canGoBack:s,showBar:!!e&&!this._clean&&(s||!!t?.controls&&!o)}}shows(e){let t=this._config?.controls;return t===!0||Array.isArray(t)&&t.includes(e)}renderBar(e){let t=this.plan(),r=this.t,i=["temperature","humidity","co2"].filter(s=>this.shows(s)),o=(s,a)=>f`<div class="nf-seg" role=${s?"group":g} aria-label=${s??g}>${a.map(([l,c,u])=>f`<button aria-pressed=${l} @click=${c}>${u}</button>`)}</div>`;return f`<div class="nf-card-controls">
      ${e.canGoBack?f`<button class="nf-chip" @click=${()=>this.back()}>${r("back")}</button>`:g}
      ${this.shows("walls")?o(void 0,[[e.walls==="auto",()=>this._walls="auto",r("walls_auto")],[e.walls==="cut",()=>this._walls="cut",r("walls_cut")],[e.walls==="slope",()=>this._walls="slope",r("walls_slope")]]):g}
      ${this.shows("floors")&&t.floors.length>1&&!e.floorId?o(void 0,[[e.explode,()=>this._explode=!0,r("floors_apart")],[!e.explode,()=>this._explode=!1,r("floors_stacked")]]):g}
      ${i.length>0?o(r("heatmap"),["none",...i].map(s=>[e.heat===s,()=>this._heat=s,r(s==="none"?"heat_off":`heat_short_${s}`)])):g}
    </div>`}renderRoomButtons(e){let t=this.plan();if(!this._config?.room_buttons||!t||this._clean)return g;let r=vd(t,e.floorId);if(!r.length)return g;let i=r.length>1,o=(l,c)=>{this.canSwitch&&l!==e.floorId&&(this._floorId=l),this._roomId=c===this._roomId?null:c},s=yn(this.hass,t.floors).length>0,a=()=>{this.canSwitch&&(this._floorId=null),this._roomId=this._roomId===tt?null:tt};return f`<div class="nf-card-rooms ${this._roomId&&this._config?.room_panel!==!1?"nf-card-rooms-beside":""}" role="group" aria-label=${this.t("card_room_buttons")}>
      ${r.map(l=>f`${i?f`<span class="nf-card-rooms-floor">${l.floorName}</span>`:g}${l.rooms.map(c=>f`<button class="nf-chip" aria-pressed=${c.id===this._roomId} @click=${()=>o(l.floorId,c.id)}>${c.name}</button>`)}`)}
      ${s?f`<button class="nf-chip" aria-pressed=${this._roomId===tt} title=${this.t("outside_area_hint")} @click=${a}>🌳 ${this.t("outside_area")}</button>`:g}
    </div>`}renderCorners(){let e=this._config,t=this.t,r=this._clean||!!this._roomId&&e?.room_panel!==!1;return f`${e?.fullscreen_button&&!r?f`<button class="nf-card-full" title=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
          ${this._fullscreen?"\u2715":"\u26F6"}
        </button>`:g}
    ${e?.dashboard&&!r?f`<button class="nf-card-full nf-card-dash ${e.fullscreen_button?"nf-card-dash-2":""}" title=${e.dashboard_label||e.dashboard} aria-label=${e.dashboard_label||e.dashboard} @click=${()=>this.openDashboard(e.dashboard)}>
          ${e.dashboard_label?f`<span>${e.dashboard_label}</span>`:"\u2302"}
        </button>`:g}`}renderStage(e){let t=this.plan(),r=this._config,i=()=>{this._clean=!this._clean,this._clean?this.kiosk.stopClean():this.kiosk.armClean()},o=r?.controls_hidden!==void 0||(r?.controls_hide_after??0)>0;return f`<nf-view3d
      .hass=${$t(this.hass,r?.view_only===!0)}
      .building=${t}
      .packs=${this.data.packs}
      .floorId=${e.floorId}
      .roomId=${this._roomId===tt?null:this._roomId}
      .outsideOpen=${this._roomId===tt}
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
      .roomDoubleTap=${r?.room_double_tap??"auto"}
      .central=${r?.central!==!1}
      .centralOpen=${r?.central_open===!0}
      .keepCamera=${r?.keep_camera===!0}
      .sunShadows=${r?.sun_shadows!==!1}
      .readable=${r?.readable===!0}
      .plain=${r?.plain===!0}
      .templateName=${this._own?.template??null}
      .rightBack=${r?.right_back===!0}
      .today=${r?.today!==!1}
      .zoom=${typeof r?.zoom=="number"?r.zoom:1}
      .buttons=${r?.buttons?.map((s,a)=>({id:`card_${a}`,...s}))??null}
      .heatMode=${e.heat}
      .theme=${ni(r?.theme,this.hass?.states["sun.sun"]?.state,r?.auto_day,r?.auto_night)}
      .clock=${r?.clock&&r.clock!=="none"?r.clock:null}
      .lockButton=${r?.lock_button!==!1}
      .walkButton=${r?.walk_button!==!1}
      .travelButton=${r?.time_travel!==!1}
      .accent=${r?.accent??null}
      .furnitureColors=${r?.furniture_colors??null}
      .ownLook=${r?.own_look??null}
      .showEnergy=${r?.energy??!0}
      .flows=${r?.flows??null}
      .holograms=${r?.holograms??null}
      .floorThumbs=${this.thumbs}
      .thumbsFolded=${this.thumbs&&r?.floor_thumbs_folded===!0}
      .roomLabels=${r?.room_names!==!1}
      .deviceLabels=${r?.device_names!==!1}
      .floorStack=${r?.floor_stack??"dim"}
      .panelOpen=${!!this._roomId&&r?.room_panel!==!1}
      .alerts=${r?.alerts!==!1}
      .alertJump=${!!r?.alert_jump}
      .announcements=${r?.announcements!==!1&&!md()}
      .sensorBar=${r?.sensor_bar!==!1}
      .glassWalls=${typeof r?.glass_walls=="number"?Math.min(100,Math.max(0,r.glass_walls)):null}
      .screenName=${r?.screen_name??pd()}
      .scenes=${r?.scenes!==!1}
      .clean=${this._clean}
      .cleanButton=${o}
      @clean-toggle=${i}
      .weather=${r?.weather!==!1}
      .weatherEntityId=${r?.weather_entity??null}
      .weatherDensity=${r?.weather_density??1}
      .dimmed=${this._night}
      .autoOrbit=${this._orbit}
      .startView=${r?.start_view??null}
      style=${this._fullscreen?`--nf-bottom-inset: calc(${e.showBar?52:0}px + env(safe-area-inset-bottom, 0px))`:e.showBar?"--nf-bottom-inset: 52px":""}
      @room-tap=${s=>{if(s.detail.roomId===tt){this.canSwitch&&(this._floorId=null),this._roomId=this._roomId===tt?null:tt;return}this.canSwitch&&t.floors.length>1&&s.detail.floorId&&e.floorId!==s.detail.floorId?(this._floorId=s.detail.floorId,this._roomId=null):s.detail.roomId&&(this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
      @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
      @back=${()=>this.back()}
    ></nf-view3d>`}renderRoomPanel(){let e=this.plan();return f`<nf-room-panel
            .building=${this.plan()??null}
      class="nf-card-panel"
      .hass=${$t(this.hass,this._config?.view_only===!0)}
      .room=${e.floors.flatMap(t=>t.rooms).find(t=>t.id===this._roomId)??null}
      .floor=${e.floors.find(t=>t.rooms.some(r=>r.id===this._roomId))??null}
      .outside=${this._roomId===tt?yn(this.hass,e.floors):null}
      .confirmEntities=${wt(this.hass,e.floors)}
      .phrases=${e.settings.announce_phrases??null}
      @close=${()=>this._roomId=null}
    ></nf-room-panel>`}render(){if(this.hass&&Tr(this.hass,this))return g;let e=this.plan(),t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(a=>a.rooms.some(l=>l.id===t.room))&&(this._roomId=t.room));let r=this.stage(),i=this._fullscreen?"100vh;height:100dvh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px);height:calc(100dvh - var(--header-height, 56px) - 16px)":`${t?.height??420}px`,o=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null,s=()=>this.kiosk.touched();return f`<ha-card class=${(this._night?"nf-night ":"")+(this._pseudoFull?"nf-pseudo-full":"")} style=${o?`--nf-accent:${o}`:""} @pointerdown=${s} @keydown=${s} @wheel=${s}>
      <div class="nf-card-body" style="height:${i}">
        ${e&&e.floors.some(a=>a.rooms.length)?this.renderStage(r):f`<p class="nf-card-msg">${this.data.error??(e?M(this.hass,"no_building"):M(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&t?.room_panel!==!1?this.renderRoomPanel():g}
        ${this.renderRoomButtons(r)}
        ${r.showBar&&e?this.renderBar(r):g}
        ${this.renderCorners()}
      </div>
    </ha-card>`}static styles=[Le,at,yd,Gr]};if(!customElements.get("nextfloor-card")){customElements.define("nextfloor-card",fs);let n=window;n.customCards=n.customCards??[],n.customCards.push({type:"nextfloor-card",name:M(void 0,"card_name"),description:M(void 0,"card_description"),preview:!1})}Ni();
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
