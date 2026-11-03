/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var x={es:"bc23060cf7ca",fr:"929a281a2880",it:"0e8ff273f0a3",nl:"61d5e375bdf1",pl:"33031e3617ad",pt:"62c5246765ae",sv:"1e23ba91ef6c",zh:"4d076be94406"};Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var gn=globalThis,_n=gn.ShadowRoot&&(gn.ShadyCSS===void 0||gn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ar=Symbol(),oo=new WeakMap,Ft=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ar)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(_n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=oo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&oo.set(t,e))}return e}toString(){return this.cssText}},so=r=>new Ft(typeof r=="string"?r:r+"",void 0,Ar),te=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Ft(t,r,Ar)},ao=(r,e)=>{if(_n)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=gn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},Er=_n?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return so(t)})(r):r;var{is:Sc,defineProperty:$c,getOwnPropertyDescriptor:Mc,getOwnPropertyNames:Ac,getOwnPropertySymbols:Ec,getPrototypeOf:zc}=Object,bn=globalThis,lo=bn.trustedTypes,Rc=lo?lo.emptyScript:"",Tc=bn.reactiveElementPolyfillSupport,Dt=(r,e)=>r,zr={toAttribute(r,e){switch(e){case Boolean:r=r?Rc:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},uo=(r,e)=>!Sc(r,e),co={attribute:!0,type:String,converter:zr,reflect:!1,useDefault:!1,hasChanged:uo};Symbol.metadata??=Symbol("metadata"),bn.litPropertyMetadata??=new WeakMap;var $e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=co){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&$c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=Mc(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??co}static _$Ei(){if(this.hasOwnProperty(Dt("elementProperties")))return;let e=zc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dt("properties"))){let t=this.properties,n=[...Ac(t),...Ec(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Er(i))}else e!==void 0&&t.push(Er(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ao(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:zr).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:zr;this._$Em=i;let a=s.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??uo)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[Dt("elementProperties")]=new Map,$e[Dt("finalized")]=new Map,Tc?.({ReactiveElement:$e}),(bn.reactiveElementVersions??=[]).push("2.1.2");var Ir=globalThis,ho=r=>r,wn=Ir.trustedTypes,po=wn?wn.createPolicy("lit-html",{createHTML:r=>r}):void 0,wo="$lit$",We=`lit$${Math.random().toFixed(9).slice(2)}$`,vo="?"+We,Fc=`<${vo}>`,Ze=document,Ht=()=>Ze.createComment(""),It=r=>r===null||typeof r!="object"&&typeof r!="function",Wr=Array.isArray,Dc=r=>Wr(r)||typeof r?.[Symbol.iterator]=="function",Rr=`[ 	
\f\r]`,Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fo=/-->/g,mo=/>/g,je=RegExp(`>|${Rr}(?:([^\\s"'>=/]+)(${Rr}*=${Rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),go=/'/g,_o=/"/g,yo=/^(?:script|style|textarea|title)$/i,Nr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),f=Nr(1),Q=Nr(2),Yp=Nr(3),Ye=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),bo=new WeakMap,qe=Ze.createTreeWalker(Ze,129);function ko(r,e){if(!Wr(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return po!==void 0?po.createHTML(e):e}var Pc=(r,e)=>{let t=r.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=Pt;for(let a=0;a<t;a++){let l=r[a],c,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===Pt?u[1]==="!--"?s=fo:u[1]!==void 0?s=mo:u[2]!==void 0?(yo.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=je):u[3]!==void 0&&(s=je):s===je?u[0]===">"?(s=i??Pt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?je:u[3]==='"'?_o:go):s===_o||s===go?s=je:s===fo||s===mo?s=Pt:(s=je,i=void 0);let h=s===je&&r[a+1].startsWith("/>")?" ":"";o+=s===Pt?l+Fc:d>=0?(n.push(c),l.slice(0,d)+wo+l.slice(d)+We+h):l+We+(d===-2?a:h)}return[ko(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Wt=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,u]=Pc(e,t);if(this.el=r.createElement(c,n),qe.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=qe.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(wo)){let p=u[s++],h=i.getAttribute(d).split(We),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:w[2],strings:h,ctor:w[1]==="."?Fr:w[1]==="?"?Dr:w[1]==="@"?Pr:ct}),i.removeAttribute(d)}else d.startsWith(We)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(yo.test(i.tagName)){let d=i.textContent.split(We),p=d.length-1;if(p>0){i.textContent=wn?wn.emptyScript:"";for(let h=0;h<p;h++)i.append(d[h],Ht()),qe.nextNode(),l.push({type:2,index:++o});i.append(d[p],Ht())}}}else if(i.nodeType===8)if(i.data===vo)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(We,d+1))!==-1;)l.push({type:7,index:o}),d+=We.length-1}o++}}static createElement(e,t){let n=Ze.createElement("template");return n.innerHTML=e,n}};function lt(r,e,t=r,n){if(e===Ye)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=It(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=lt(r,i._$AS(r,e.values),i,n)),e}var Tr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Ze).importNode(t,!0);qe.currentNode=i;let o=qe.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Nt(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Hr(o,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=qe.nextNode(),s++)}return qe.currentNode=Ze,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Nt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lt(this,e,t),It(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Dc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&It(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ze.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Wt.createElement(ko(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Tr(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=bo.get(e.strings);return t===void 0&&bo.set(e.strings,t=new Wt(e)),t}k(e){Wr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new r(this.O(Ht()),this.O(Ht()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ho(e).nextSibling;ho(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=lt(this,e,t,0),s=!It(e)||e!==this._$AH&&e!==Ye,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=lt(this,a[n+l],t,l),c===Ye&&(c=this._$AH[l]),s||=!It(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fr=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},Dr=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},Pr=class extends ct{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=lt(this,e,t,0)??m)===Ye)return;let n=this._$AH,i=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==m&&(n===m||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Hr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}};var Hc=Ir.litHtmlPolyfillSupport;Hc?.(Wt,Nt),(Ir.litHtmlVersions??=[]).push("3.3.3");var xo=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new Nt(e.insertBefore(Ht(),o),o,void 0,t??{})}return i._$AI(r),i};var Or=globalThis,ne=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ye}};ne._$litElement$=!0,ne.finalized=!0,Or.litElementHydrateSupport?.({LitElement:ne});var Ic=Or.litElementPolyfillSupport;Ic?.({LitElement:ne});(Or.litElementVersions??=[]).push("4.2.2");var Je=Math.PI/180;function Qe(r,e,t){let n=r.getTime()/864e5-10957.5,i=(357.529+.98560028*n)*Je,s=(280.459+.98564736*n+1.915*Math.sin(i)+.02*Math.sin(2*i))*Je,a=(23.439-36e-8*n)*Je,l=Math.atan2(Math.cos(a)*Math.sin(s),Math.cos(s)),c=Math.asin(Math.sin(a)*Math.sin(s)),d=(((18.697374558+24.06570982441908*n)%24+24)%24*15+t)*Je-l,p=e*Je,h=Math.asin(Math.sin(p)*Math.sin(c)+Math.cos(p)*Math.cos(c)*Math.cos(d)),w=Math.atan2(Math.sin(d),Math.cos(d)*Math.sin(p)-Math.tan(c)*Math.cos(p))/Je+180;return{elevation:h/Je,azimuth:(w%360+360)%360}}function Cr(r,e){let t=Object.fromEntries(new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}).formatToParts(new Date(r)).map(n=>[n.type,Number(n.value)]));return Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second)}function ut(r,e,t=new Date){let[n,i]=[Math.floor(r),Math.round(r%1*60)];if(e)try{let s=new Date(Cr(t.getTime(),e)),a=Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),n,i),l=a-(Cr(a,e)-a);return l=a-(Cr(l,e)-l),new Date(l)}catch{}let o=new Date(t);return o.setHours(n,i,0,0),o}var vn=(r,e,t={})=>r.callWS({type:`nextfloor/${e}`,...t}),So=r=>vn(r,"building/get");async function $o(r,e){return(await vn(r,"building/save",{building:e})).revision}function Mo(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"nextfloor/building/subscribe"})}async function Ao(r,e){return(await vn(r,"image/get",{image_id:e})).data}async function Eo(r){return(await vn(r,"packs/list")).packs}var zo=r=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(r.trim());var Wc=globalThis,Ro=Wc.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},xn=Ro.plugins,Lr=Ro.listeners,Nc=new Set(["none","rainbow","pulse","flicker"]),Oc=5;function dt(r,e){r.errors.length<Oc&&r.errors.push(e instanceof Error?e.message:String(e))}function Cc(){for(let r of Lr)r()}function ht(r){return Lr.add(r),()=>Lr.delete(r)}function Br(r,e=""){if(!r||typeof r!="object")throw new Error("register() needs a plugin object");if(typeof r.id!="string"||!/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(r.id))throw new Error("plugin id must be 1\u201364 letters, digits, '.', '_' or '-'");if(r.apiVersion!==1)throw new Error(`plugin "${r.id}" wants API ${String(r.apiVersion)}, NextFloor offers ${1}`);for(let t of Object.keys(r.lightAnimations??{})){if(Nc.has(t))throw new Error(`plugin "${r.id}": light animation "${t}" is built in`);if(typeof r.lightAnimations?.[t]!="function")throw new Error(`plugin "${r.id}": light animation "${t}" is not a function`)}for(let t of r.devices??[]){if(typeof t?.match!="function")throw new Error(`plugin "${r.id}": every device extension needs match()`);for(let n of["floorWedge","tap","watch"])if(t[n]!==void 0&&typeof t[n]!="function")throw new Error(`plugin "${r.id}": ${n} must be a function`);for(let n of t.settings??[]){if(!n||typeof n.key!="string"||!/^\w{1,32}$/.test(n.key))throw new Error(`plugin "${r.id}": a setting needs a key of 1\u201332 letters, digits or "_"`);if(!["number","select","boolean"].includes(n.type))throw new Error(`plugin "${r.id}": setting "${n.key}" has an unknown type`)}}for(let t of r.roomSections??[])if(typeof t?.render!="function"||typeof t.id!="string")throw new Error(`plugin "${r.id}": every room section needs id and render()`);xn.set(r.id,{plugin:r,status:{id:r.id,name:r.name||r.id,version:r.version||"",source:e,errors:[]}}),Cc()}function Lc(r){for(let{plugin:e,status:t}of xn.values()){let n=e.lightAnimations?.[r];if(n)return{fn:n,status:t}}return null}var To=r=>Lc(r)!==null;function*Ot(r,e){for(let{plugin:t,status:n}of xn.values())for(let i of t.devices??[]){let o=!1;try{o=i.match(r,e)}catch(s){dt(n,s)}o&&(yield{device:i,status:n})}}function pt(r,e){for(let{device:t}of Ot(r,e))return t.kind??"sensor";return null}function Fo(r){let e=null;for(let{device:t,status:n}of Ot(r.entityId,r.state))if(t.marker)try{let i=t.marker(r);if(!i)continue;e={...e??{}},typeof i.icon=="string"&&i.icon&&(e.icon=i.icon),typeof i.text=="string"&&(e.text=i.text.slice(0,60)),typeof i.active=="boolean"&&(e.active=i.active)}catch(i){dt(n,i)}return e}function Do(r){let e=[];for(let{device:t,status:n}of Ot(r.entityId,r.state))if(t.watch)try{let i=t.watch(r);Array.isArray(i)&&e.push(...i.filter(o=>typeof o=="string").slice(0,20))}catch(i){dt(n,i)}return e}function Po(r,e){let t={};for(let n of r??[]){let i=e?.[n.key],o=n.type==="number"?typeof i=="number"&&Number.isFinite(i):n.type==="boolean"?typeof i=="boolean":typeof i=="string"&&(n.options??[]).some(([s])=>s===i);t[n.key]=o?i:n.default}return t}var Bc=r=>{let e=typeof r=="string"?/^#([0-9a-f]{6})$/i.exec(r.trim()):null;if(!e)return null;let t=Number.parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},yn=(r,e,t,n)=>typeof r=="number"&&Number.isFinite(r)?Math.min(n,Math.max(t,r)):e;function Ho(r,e,t){for(let{device:n,status:i}of Ot(r.entityId,r.state))if(n.floorWedge)try{let o=n.floorWedge({...r,placement:e,settings:Po(n.settings,t?.[i.id])});if(!o)continue;let s=yn(o.reach,0,0,30);if(s<=0)continue;return{angle:yn(o.angle,90,1,360),reach:s,near:yn(o.near,0,0,s),color:Bc(o.color)??[.04,.22,.28],opacity:yn(o.opacity,.6,0,1),through:o.tapThrough===!0}}catch(o){dt(i,o)}return null}function Io(r,e,t,n){for(let{device:i,status:o}of Ot(r.entityId,r.state))if(i.tap)try{if(i.tap({...r,...n,placement:e,settings:Po(i.settings,t?.[o.id])})===!0)return!0}catch(s){dt(o,s)}return!1}function Wo(r){let e=[];for(let{plugin:t,status:n}of xn.values())for(let i of t.roomSections??[])try{let o=i.render(r);if(o==null||o===""||typeof o!="string"&&!(o instanceof Node))continue;e.push({key:`${t.id}/${i.id}`,title:n.name,content:o})}catch(o){dt(n,o)}return e}var Vr=new Map,Gr="";function Kr(){let r=globalThis;if(r.NextFloor)return;r.NextFloor={apiVersion:1,register:t=>Br(t,Gr)};let e=r.__nextfloorPlugins??[];r.__nextfloorPlugins=[];for(let t of e)try{Br(t)}catch(n){console.warn("NextFloor: plugin rejected",n)}}var Vc=r=>[...new Uint8Array(r)].map(e=>e.toString(16).padStart(2,"0")).join("");async function Gc(r,e=(...t)=>fetch(...t)){let t=globalThis.crypto?.subtle;if(!r.sha256||!t)return{url:r.url};let n=await e(r.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let i=await n.arrayBuffer();if(Vc(await t.digest("SHA-256",i))!==r.sha256.toLowerCase())throw new Error("checksum mismatch: the file is not the one that was reviewed");let o=URL.createObjectURL(new Blob([i],{type:"text/javascript"}));return{url:o,revoke:()=>URL.revokeObjectURL(o)}}async function Ur(r,e=n=>import(n),t){Kr();for(let n of r??[]){if(!n.enabled||Vr.has(n.url))continue;if(!zo(n.url)){Vr.set(n.url,{url:n.url,state:"error",error:"not allowed: use /local/\u2026, /hacsfiles/\u2026 or https://\u2026"});continue}let i={url:n.url,state:"loading"};Vr.set(n.url,i);let o;try{o=await Gc(n,t),Gr=n.url,await e(o.url),i.state="loaded"}catch(s){i.state="error",i.error=s instanceof Error?s.message:String(s),console.warn(`NextFloor: plugin ${n.url} failed to load`,s)}finally{Gr="",o?.revoke?.()}}}var No=[],Sn=new Map,Oo=0,Co=(r,e)=>`pack:${r}:${e}`,jr=r=>r.startsWith("pack:");function Lo(r){No=r,Sn=new Map;for(let e of r)for(let t of e.items)Sn.set(Co(e.id,t.id),t);Oo+=1}var qr=()=>No,$n=()=>Oo,Kc={};function Y(r){if(!jr(r))return;let e=Sn.get(r);if(e)return e;let[,t,...n]=r.split(":"),i=Kc[t];return i?Sn.get(Co(i,n.join(":"))):void 0}var Mn=r=>!!r?.parts.some(e=>e.move);function Bo(r,e){if(e===null)return Math.min(1,Math.max(0,r.cover_rest??1));let t=Math.min(1,Math.max(0,e/100));return r.cover==="extends"?t:1-t}var Vo=r=>Y(r)?.parts.find(e=>e.screen);var Go=r=>!!Y(r)?.climate;function Ko(r,e){return r.name[e.split("-")[0]]??r.name.en??Object.values(r.name)[0]??r.id}function se(r,e){return e.mount_y!=null?e.mount_y:jc(r,e)+(Uc(e)?0:En(r,e.x,e.z))}var Uc=r=>r.type==="led_strip"||Y(r.type)?.mount==="ceiling";function jc(r,e){if(e.type==="lamp_wall")return Uo;if(e.type==="led_strip")return Math.max(0,fe(r,e.x,e.z)-.04-Math.max(.02,e.h));let t=Y(e.type);if(!t)return jo(e);switch(t.mount){case"surface":return Rn(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,zn(r,e)-e.h);default:return 0}}function An(r){if(r==="plant")return"plant";let e=Y(r);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var Zc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Yc(r){return r==="hedge"||r==="fence"||r==="pergola"}function Jc(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(c,u)=>i==="x"?c:i==="-x"?-c:i==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of r.points){let d=o(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function Tn(r,e,t,n){return Fn(r)+(e.offset??0)+Zc[e.type]-Jc(e,t,n)}function Fn(r){return r.elevation>.3?0:-.2}function Ct(r,e,t){let n=(r.outdoor??[]).filter(o=>!Yc(o.type)&&o.type!=="pool"&&W([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Tn(r,i,e,t):Fn(r)}var Qc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Yo={type:"none",pitch:35,overhang:.4};var Xc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Yo}};function eu(r,e,t){return{id:r,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Jo=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Uo=1.75;function Qo(r){return nu.has(r.type)||["stairwell","parking"].includes(r.type)?!1:Y(r.type)?.mount!=="ceiling"}function Zr(r){return Jo.has(r)||!!Y(r)?.light}var tu=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function jo(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var nu=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);var ru=r=>r?.floor_offset&&Number.isFinite(r.floor_offset)?r.floor_offset:0;function En(r,e,t){let n=r.rooms.find(i=>i.points.length>=3&&i.floor_offset&&W([e,t],i.points));return ru(n)}function fe(r,e,t){let n=r.rooms.find(i=>i.points.length>=3&&W([e,t],i.points));return n?.ceiling!=null&&n.ceiling>0?n.ceiling:r.height}var zn=(r,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:fe(r,e.x,e.z);function Rn(r,e,t){let n=0;for(let i of r.furniture)!(tu.has(i.type)||Y(i.type)?.surface)||!W([e,t],Dn(i))||(n=Math.max(n,i.h));return n}var qc=new Set([...Jo,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),qo={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Yr(r){r.energy={...Qc,...r.energy??{}},r.presence=r.presence??[],r.version=1,r.settings={...Xc,...r.settings,roof:{...Yo,...r.settings?.roof??{}}},r.floors.forEach((e,t)=>{let n=eu(e.id,e.name??`Floor ${t+1}`,e.elevation??t*2.8);for(let i of Object.keys(n))e[i]===void 0&&(e[i]=n[i])});for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,name:n.name??"",area_id:n.area_id??null,floor_material:n.floor_material??"wood",panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,a,l]=qo[o],c=`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,d=1;for(;e.furniture.some(p=>p.id===u);)u=`${c}_${d++}`;e.furniture.push({id:u,type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null,animations_enabled:i.animations_enabled,effect_animations:structuredClone(i.effect_animations)})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,type:["door","window","garage"].includes(n.type)?n.type:"door",edge:Number.isInteger(n.edge)?n.edge:0,offset:Number.isFinite(n.offset)?n.offset:.5,width:Number.isFinite(n.width)&&n.width>0?n.width:n.type==="garage"?2.5:n.type==="window"?1.2:.9,height:Number.isFinite(n.height)&&n.height>0?n.height:n.type==="window"?1.3:n.type==="garage"?2.1:2.05,sill:Number.isFinite(n.sill)?n.sill:n.type==="window"?.9:0,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return iu(r),r}function iu(r){let e=(t,n)=>{let i=new Set;for(let o of t)(typeof o.id!="string"||!o.id||i.has(o.id))&&(o.id=Zo(n)),i.add(o.id)};e(r.floors,"floor");for(let t of r.floors){for(let n of t.rooms)(typeof n.id!="string"||!n.id)&&(n.id=Zo("room"));e(t.openings,"op"),e(t.furniture,"furn"),e(t.outdoor,"out")}}function Zo(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function Xe(r){let e=0;for(let t=0;t<r.length;t++){let[n,i]=r[t],[o,s]=r[(t+1)%r.length];e+=n*s-o*i}return e/2}function Lt(r){return Math.abs(Xe(r))}function Ne(r){let e=Xe(r);if(Math.abs(e)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Dn(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function W(r,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[a,l]=e[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(t=!t)}return t}var Xo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var ou=700,Qr="nextfloor.unsaved",ft="0.22.0";function su(){try{let r=localStorage.getItem(Qr);return r?JSON.parse(r):null}catch{return null}}function Jr(r){try{r?localStorage.setItem(Qr,JSON.stringify(r)):localStorage.removeItem(Qr)}catch{}}var es=r=>r&&typeof r=="object"&&"message"in r?String(r.message):String(r);function au(r,e){let t=o=>o.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),[n,i]=[t(r),t(e)];for(let o=0;o<Math.max(n.length,i.length);o++){let s=(n[o]??0)-(i[o]??0);if(s!==0)return s}return 0}var mt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;stopPlugins=null;hass=null;connected=!1;revision=-1;ownRevisions=new Set;stopListening=null;timer;waiting=null;inFlight=null;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.stopPlugins=ht(()=>this.host.requestUpdate()),this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.stopPlugins?.(),this.stopPlugins=null,this.flush(),this.stopListening?.(),this.stopListening=null}edit(e){this.building=e,Ur(e.settings.plugins),this.waiting=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.flush()},ou),this.host.requestUpdate()}get frontendVersion(){return ft}get versionGap(){let e=this.backendVersion;return!e||ft==="dev"||e===ft?null:au(e,ft)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&ft!=="dev"&&this.backendVersion!==ft}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Yr(e.building))}discardDraft(){this.draft=null,Jr(null),this.host.requestUpdate()}async flush(){clearTimeout(this.timer),this.inFlight&&await this.inFlight;let e=this.waiting,t=this.hass;!e||!t||(this.waiting=null,this.saveState="saving",this.host.requestUpdate(),this.inFlight=this.send(t,e),await this.inFlight,this.inFlight=null)}async send(e,t){try{let n=await $o(e,t);this.ownRevisions.add(n),this.revision=n,this.saveState=this.waiting?"saving":"saved",this.saveError=null,Jr(null)}catch(n){this.saveState="error",this.saveError=es(n),Jr({building:t,savedAt:Date.now()})}this.host.requestUpdate()}async start(){let e=this.hass;if(e&&(await Promise.all([this.reloadPacks(),this.reload()]),!(this.stopListening||!this.connected)))try{this.stopListening=await Mo(e,t=>{let n=this.ownRevisions.has(t)||t===this.revision,i=this.waiting!==null||this.inFlight!==null;!n&&!i&&this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Eo(this.hass)}catch{this.packs=[]}Lo(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await So(this.hass);this.building=Yr(e.building),Ur(this.building.settings.plugins),this.backendVersion=e.version??null,this.revision=e.revision,this.error=null,this.draft===null&&!this.waiting&&(this.draft=su())}catch(e){this.error=es(e)}this.host.requestUpdate()}}};var Xr=r=>r.slice(0,r.indexOf(".")),lu={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},D=r=>lu[Xr(r)]??null,ei=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];function ts(r,e=!1){if(e||r.startsWith("lamp:"))return"light";if(r.startsWith("tap:"))return"tap";if(r.startsWith("gang:"))return"switch";if(r==="grid")return"sensor";let t=D(r);return t&&t!=="scene"&&t!=="script"?t:"other"}var ns=new Set(["light","switch","fan"]),rs=r=>r!==null&&r!=="scene"&&r!=="script",I=r=>!r||r.state==="unavailable"||r.state==="unknown"&&!r.entity_id.startsWith("event."),cu=new Set(["motion","occupancy","presence","moving"]),is=(r,e)=>e.startsWith("binary_sensor.")&&cu.has(String(r?.states[e]?.attributes.device_class??"")),Bt=r=>!!r&&r.entity_id.startsWith("cover.")&&r.state==="unknown"&&r.attributes.assumed_state===!0,Pn=(r,e)=>r.filter(t=>(!I(t)||Bt(t))&&!e?.has(t.entity_id)).map(t=>t.entity_id);function C(r,e,t){let n=String(r?.states[e]?.attributes.friendly_name??r?.entities?.[e]?.name??e);if(!t||n.length<=t.length+1||!n.toLowerCase().startsWith(`${t.toLowerCase()} `))return n;let i=n.slice(t.length+1);return i[0].toUpperCase()+i.slice(1)}var uu=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]),Hn=r=>!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum";function X(r){if(!r)return!1;if(r.entity_id.startsWith("vacuum."))return["cleaning","returning"].includes(r.state);if(r.entity_id.startsWith("valve."))return r.state==="open"||r.state==="opening";let e=D(r.entity_id);return e==="light"||e==="switch"||e==="fan"||e==="binary"?r.state==="on":e==="cover"?r.state==="open"||r.state==="opening":e==="climate"?["heating","cooling"].includes(String(r.attributes.hvac_action)):e==="media"?r.state==="playing":e==="lock"?r.state==="unlocked"||r.state==="open":e==="sensor"?Hn(r)&&uu.has(r.state.toLowerCase()):!1}var os=r=>Math.min(1,Math.max(0,r));function du(r){let e=os((r-2200)/4300),t=[1,.66,.26],n=[.78,.9,1];return[0,1,2].map(i=>t[i]+(n[i]-t[i])*e)}function Me(r,e){if(!r||r.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(os(t.brightness/255)):1,i=t.rgb_color;return i&&!["color_temp","brightness","onoff"].includes(String(t.color_mode))?{color:[i[0]/255,i[1]/255,i[2]/255],level:n}:typeof t.color_temp_kelvin=="number"?{color:du(t.color_temp_kelvin),level:n}:{color:[1,.71,.28],level:n}}function ss(r,e,t){let n=Me(r,t);if(n)return n;for(let i of e){let o=Me(i);if(o)return{color:o.color,level:o.level*.6}}return null}function gt(r,e,t=null){if(r==="light"&&t==="floor")return 1.95;if(r==="light"&&t==="table")return 1.25;if(r==="light"&&t==="wall")return 1.95;switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var re=r=>r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C";function In(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}var de=(r,e)=>re(r)==="\xB0F"?e*9/5+32:e;var hu=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),pu=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),fu=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),mu=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Oe(r,e){let t=r.entities?.[e];return t&&(t.area_id||(t.device_id?r.devices?.[t.device_id]?.area_id:null))||null}var ls=(r,e)=>{let t=r.entities?.[e];return!!(t?.hidden||t?.entity_category)},gu=(r,e)=>D(e)??pt(e,r.states[e]);function as(r,e){let t=r.states[e];if(!t||ls(r,e))return!1;if(pt(e,t)!==null)return!0;let n=D(e);if(!n)return!1;let i=t.attributes.device_class;return e.startsWith("event.")?!i||i==="button"||i==="doorbell":n==="sensor"?i?hu.has(i):pu.has(String(t.attributes.unit_of_measurement??"")):n==="binary"?i?fu.has(i):!!r.entities?.[e]?.area_id:!0}function _u(r,e){let t=r.states[e];return D(e)!=="sensor"||!t?.attributes.unit_of_measurement||ls(r,e)||mu.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||I(t)}var Nn=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power",ti=null;ht(()=>ti=null);function ni(r,e){let t=r.get(e);return t||r.set(e,t=[]),t}function bu(r){let e=new Map,t=new Map,n=new Map,i=new Map,o=[],s=u=>{(as(r,u)||_u(r,u))&&rs(gu(r,u))&&o.push(u)};for(let[u,d]of Object.entries(r.entities??{})){let p=d.device_id;p&&d.area_id&&(i.get(p)??i.set(p,new Set).get(p)).add(d.area_id),p&&Nn(r,u)&&ni(t,p).push(u),p&&!d.hidden&&!d.entity_category&&(n.get(p)??n.set(p,new Set).get(p)).add(Xr(u));let h=Oe(r,u);h===null?s(u):as(r,u)&&ni(e,h).push(u)}if(r.entities)for(let u of Object.keys(r.states))r.entities[u]||s(u);let a=ei.indexOf("binary")-.5,l=u=>{let d=D(u),p=d?ei.indexOf(d):a;return p>a&&pt(u,r.states[u])!==null?a:p};o.sort((u,d)=>l(u)-l(d)||C(r,u).localeCompare(C(r,d)));for(let[u,d]of e){let p=r.areas?.[u]?.name;d.sort((h,w)=>l(h)-l(w)||C(r,h,p).localeCompare(C(r,w,p)))}let c=new Set;for(let[u,d]of i)d.size>1&&c.add(u);return{entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,byArea:e,powerByDevice:t,withoutArea:o,domainsByDevice:n,hubs:c}}function On(r){let e=ti;return e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount))?e:ti=bu(r)}function G(r,e){let t=Wn(r,e.area_id);return e.sub_areas?.length?[...new Set([...t,...e.sub_areas.flatMap(n=>Wn(r,n))])]:t}function Wn(r,e){return!e||!r.entities?[]:On(r).byArea.get(e)??[]}var ri=(r,e)=>!!r.entities&&On(r).hubs.has(e),Cn=(r,e)=>r.entities?On(r).powerByDevice.get(e)??[]:[];function ii(r,e){let t=new Map;for(let i of e)ni(t,r.entities?.[i]?.device_id??`entity:${i}`).push(i);let n=new Map(e.map((i,o)=>[i,o]));return[...t.values()].map(i=>{let o=i.find(s=>!r.entities?.[s]?.name)??i[0];return{primary:o,others:i.filter(s=>s!==o)}}).sort((i,o)=>n.get(i.primary)-n.get(o.primary))}var et=(r,e)=>ii(r,e).map(t=>t.primary),wu={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},vu=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),yu=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],ku=new RegExp(`(${yu.join("|")})`,"i");function xu(r,e){let t=r.entities?.[e]?.device_id,n=t&&!ri(r,t)?On(r).domainsByDevice.get(t):void 0;return n&&[...n].some(i=>vu.has(i))?!1:!ku.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function Ln(r,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=o.filter(c=>W([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(o.filter(c=>!W([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...G(r,t).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&r.states[c]?.attributes.device_class===wu[n]&&xu(r,c))}function J(r,e,t,n){let i=Ln(r,e,t,n).map(a=>{let l=Number(r.states[a]?.state);return n==="temperature"?In(l,r.states[a]?.attributes.unit_of_measurement):l}).filter(Number.isFinite);if(i.length)return i.reduce((a,l)=>a+l,0)/i.length;if(n==="co2"||t.climate?.[n]==="none")return null;let o=n==="temperature"?"current_temperature":"current_humidity",s=G(r,t).filter(a=>a.startsWith("climate.")).map(a=>r.states[a]?.attributes[o]).filter(a=>typeof a=="number"&&Number.isFinite(a));return s.length?s.reduce((a,l)=>a+l,0)/s.length:null}var Su=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),$u=new Set(["garage","gate"]),Mu=new Set(["window","opening"]);function Vt(r,e,t=!1){let n=new Map;return r.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}var cs=(r,e)=>r==="none"?null:r??e??null,_t=r=>r&&r!=="none"?r:null;function Gt(r,e){let t=new Map;for(let n of e)for(let i of n.rooms){let o=n.openings.filter(g=>g.room_id===i.id).sort((g,v)=>g.edge-v.edge||g.offset-v.offset);if(o.length===0)continue;let s=G(r,i),a=g=>r.states[g]?.attributes.device_class,l=g=>s.filter(v=>D(v)==="binary"&&g(a(v)??"")),c=g=>o.filter(v=>v.type===g),u=Vt(c("window"),s.filter(g=>D(g)==="cover"&&Su.has(a(g))),!0),d=Vt(c("window"),l(g=>Mu.has(g))),p=Vt(c("door"),l(g=>g==="door")),h=Vt(c("garage"),s.filter(g=>D(g)==="cover"&&$u.has(a(g)??""))),w=Vt(c("garage"),l(g=>g==="garage_door"));for(let g of o){let v=g.type==="window"?u:g.type==="garage"?h:null,y=g.type==="window"?d:g.type==="garage"?w:p,S=g.leaves===2;t.set(g.id,{cover:cs(g.cover,v?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:cs(g.contact,y.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:S?_t(g.contact2):null,tilt2:S?_t(g.tilt2):null,position:_t(g.position),positionInverted:!!g.position_inverted,tiltAngle:_t(g.tilt_angle),tiltMax:g.tilt_max??null,tiltOffset:g.tilt_offset??null,tiltInvert:!!g.tilt_invert,shut:!!g.shut,angled:g.type==="door"&&!!g.open_angle,lock:g.type==="door"?_t(g.lock):null,cover2:g.type==="garage"?null:_t(g.cover2)})}}return t}var Au=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Eu(r){if(!r||I(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:"",r.state]){let n=t.trim(),i=n&&Au.find(([o])=>o.test(n));if(i)return i[1]}return null}var zu=.5;function ds(r,e){let t=e?r.states[e]:void 0,n=t&&!I(t)?Number(t.state):NaN;if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function Ru(r,e){let t=e?r.states[e]:void 0;if(!t||I(t))return e?0:null;let n=t.attributes.current_position;return typeof n=="number"?1-Math.min(100,Math.max(0,n))/100:t.state==="closed"?1:t.state==="opening"||t.state==="closing"?.5:0}function us(r,e){let t=e?r.states[e]?.attributes.current_tilt_position:void 0;return typeof t=="number"?Math.min(100,Math.max(0,t))/100:null}function Tu(r,e){let t=ds(r,e.position);if(t!==null)return e.positionInverted?t:1-t;let n=e.cover?r.states[e.cover]:void 0;if(n&&!I(n)){let i=n.attributes.current_position;return typeof i=="number"?1-Math.min(100,Math.max(0,i))/100:n.state==="closed"?1:n.state==="opening"||n.state==="closing"?.5:0}return e.cover?0:null}function oi(r,e){let t=e?r.states[e]?.state:void 0;return t==="unlocked"||t==="open"||t==="opening"}function Ae(r,e,t="window"){let n=d=>!!d&&r.states[d]?.state==="on",i=d=>!!d&&!!r.states[d]&&!I(r.states[d]),o=d=>d?Eu(r.states[d]):null,s=Tu(r,e);if(t==="door"){let d=o(e.contact);return{open:d===null?e.shut?0:e.angled?1:zu:d==="closed"?0:1,open2:o(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:s,sensed:d!==null||s!==null,unlocked:oi(r,e.lock),assumed:d===null}}if(t==="garage"){let d=s!==null||i(e.contact),p=ds(r,e.position)!==null||i(e.cover),h=i(e.contact)?n(e.contact)?0:1:null;return{open:0,open2:0,tilt:0,tilt2:0,cover:(p?s:h??s)??1,sensed:d}}let a=n(e.tilt2)||o(e.tilt2)==="tilted"||o(e.contact2)==="tilted",l=n(e.tilt)||o(e.tilt)==="tilted"||o(e.contact)==="tilted",c=l?1:0,u=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let d=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,d/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}return{open:o(e.contact)==="open"&&!l?1:0,open2:o(e.contact2)==="open"&&!a?1:0,tilt:c,tilt2:a?1:0,cover:s,sensed:i(e.contact)||i(e.tilt)||Number.isFinite(u),...e.cover2?{cover2:Ru(r,e.cover2)}:{},...us(r,e.cover)!==null?{slats:us(r,e.cover)}:{}}}var hs=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,ps=/(kühl|fridge|gefrier|freezer)/i,fs=/(spülmaschine|geschirrspül|dishwasher)/i,Fu=/(kochfeld|herd|induktion|cooktop)/i,Du={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:hs,tv_wall:hs,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:ps,fridge_smart:ps,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:fs,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Fu,sink:fs,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ms={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},gs=new Set(["tv_board","tv_wall"]);var _s=r=>gs.has(r)||!!Vo(r),Vn=r=>_s(r)||r==="desk"||r==="fridge_smart",Kt=r=>!!r&&r!=="none";function Pu(r,e){if(Nn(r,e))return e;let t=r.entities?.[e]?.device_id;return t?Cn(r,t).find(n=>n!==e)??null:null}var Hu=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&W([e,t],n.points));function Bn(r,e,t,n){return r.find(i=>e?.test(t(i)))??(n?r[0]??null:null)}function tt(r,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power,o.fan_entity]),...n.placements.map(o=>o.entity_id)].filter(Kt));for(let o of n.furniture){let s=o.type in ms,a=Go(o.type),l=s?ms[o.type]:Du[o.type];if(!l&&!a&&o.entity==null&&o.power==null)continue;let c=Hu(n,o.x,o.z),u=(c?et(r,G(r,c)):[]).filter(v=>!i.has(v)),d=v=>`${v} ${C(r,v)}`,p=v=>u.filter(y=>D(y)===v),h=o.entity==="none"?null:o.entity??null;if(o.entity==null){if(o.type==="ceiling_fan"){let v=(c?G(r,c):[]).filter(S=>!i.has(S)),y=new Set(v.filter(S=>D(S)==="fan").map(S=>r.entities?.[S]?.device_id).filter(Boolean));h=v.find(S=>D(S)==="light"&&y.has(r.entities?.[S]?.device_id))??Bn(p("light"),l,d,!1)}else if(s)h=Bn(p("light"),l,d,!0);else if(o.type==="robot_vacuum"){let v=c?.area_id??null;h=Object.keys(r.entities??{}).find(y=>y.startsWith("vacuum.")&&!i.has(y)&&Oe(r,y)===v)??null}else if(o.type==="radiator"||a)h=Bn(p("climate"),l,d,!0);else if(_s(o.type)){let v=p("media");h=v.find(y=>r.states[y]?.attributes.device_class==="tv")??Bn(v,l,d,gs.has(o.type))}else l&&(h=u.find(v=>["switch","media","fan"].includes(D(v)??"")&&l.test(d(v)))??null);h&&i.add(h)}let w=o.power==="none"?null:o.power??null;o.power==null&&(w=h?Pu(r,h):null,!w&&l&&c&&!s&&(w=G(r,c).find(v=>Nn(r,v)&&!i.has(v)&&l.test(d(v)))??null),w&&i.add(w));let g=null;if(o.type==="ceiling_fan"&&(g=o.fan_entity==="none"?null:o.fan_entity??null,o.fan_entity==null)){let v=(c?G(r,c):[]).filter(S=>D(S)==="fan"&&!i.has(S)),y=h?r.entities?.[h]?.device_id:void 0;g=(y?v.find(S=>r.entities?.[S]?.device_id===y):void 0)??v[0]??null,g&&i.add(g)}(h||w||g)&&t.set(o.id,{entity:h,power:w,...o.type==="ceiling_fan"?{fan:g}:{}})}}return t}function nt(r,e){let t=new Set,n=tt(r,e),i=e.some(o=>o.openings.some(s=>s.confirm))?Gt(r,e):null;for(let o of e){for(let s of o.placements)s.confirm&&t.add(s.entity_id);for(let s of o.openings){let a=s.confirm?i?.get(s.id)?.cover:null;Kt(a)&&t.add(a)}for(let s of o.furniture){let a=s.confirm?n.get(s.id)?.entity:null;Kt(a)&&t.add(a)}}return t}var bs=r=>r==="fridge"||r==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(r.slice(r.lastIndexOf(":")+1)),Iu=8,Wu=-12;function ws(r,e,t){let n=a=>{if(!Kt(a))return null;let l=r.states[a],c=l?Number(l.state):NaN;return Number.isFinite(c)?l.attributes.unit_of_measurement==="\xB0F"?(c-32)*5/9:c:null},i=n(e.temp_entity),o=n(e.temp_entity2);return i===null&&o===null?null:{text:[i,o].filter(a=>a!==null).map(t).join(" \xB7 "),warm:i!==null&&i>Iu||o!==null&&o>Wu}}function vs(r,e){let t=i=>Kt(i)&&["on","open"].includes(r.states[i]?.state??""),n=new Map;for(let i of e.flatMap(o=>o.furniture))i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}function ys(r,e,t){let n=(u,d)=>W([u,d],t.points),i=tt(r,[e]),o=Gt(r,[e]),s=new Set(t.hidden??[]),a=[...e.placements.filter(u=>!u.outside&&n(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>n(u.x,u.z)).flatMap(u=>[i.get(u.id)?.entity,i.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let d=o.get(u.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]],l=[...new Set(a.filter(u=>!!u&&!!r.states[u]))].filter(u=>!s.has(u)),c=new Set(l);return{shown:l,more:G(r,t).filter(u=>!c.has(u)&&!s.has(u))}}function Ut(r,e){let t=[];for(let n of e){let i=(s,a)=>n.rooms.some(l=>l.points.length>=3&&W([s,a],l.points)),o=tt(r,[n]);t.push(...n.placements.filter(s=>s.outside||!i(s.x,s.z)).map(s=>s.entity_id)),t.push(...n.furniture.filter(s=>!i(s.x,s.z)).flatMap(s=>[o.get(s.id)?.entity,o.get(s.id)?.power]));for(let s of n.outdoor??[])s.area_id&&t.push(...et(r,Wn(r,s.area_id))),t.push(s.pump_entity,s.temp_entity)}return[...new Set(t.filter(n=>!!n&&!!r.states[n]))]}var Nu={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./},Ou=/^k?W$/,Ee=r=>r&&r!=="none"?r:null;function Cu(r,e){let t=e.car??{},n=Ee(t.device)??Ee(e.entity),i=n?r.entities?.[n]?.device_id:null,o=i&&r.entities?Object.values(r.entities).filter(p=>p.device_id===i).map(p=>p.entity_id):[],s=(p,h)=>String(r.states[p]?.attributes[h]??""),a=p=>`${p} ${s(p,"friendly_name")} ${r.entities?.[p]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(p,h,w=()=>!0)=>o.find(g=>h.includes(g.split(".")[0])&&Nu[p].test(a(g))&&w(g))??null,c=(p,h)=>o.find(w=>w.startsWith(`${p}.`)&&s(w,"device_class")===h)??null,u=p=>o.find(h=>h.startsWith(`${p}.`))??null,d=p=>s(p,"unit_of_measurement");return{soc:Ee(t.soc)??c("sensor","battery")??l("soc",["sensor"],p=>d(p)==="%"),range:Ee(t.range)??l("range",["sensor"],p=>/km|mi/.test(d(p)))??l("range",["sensor"]),charging:Ee(t.charging)??l("charging",["sensor"],p=>Ou.test(d(p)))??l("charging",["binary_sensor","switch"]),plugged:Ee(t.plugged)??c("binary_sensor","plug")??l("plugged",["binary_sensor"]),lock:Ee(t.lock)??u("lock")??l("lock",["binary_sensor"]),climate:Ee(t.climate)??u("climate")??l("climate",["switch","binary_sensor"]),tracker:Ee(t.tracker)??u("device_tracker")}}function ks(r,e){return e.flatMap(n=>n.furniture).filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Cu(r,n))).filter(n=>!!n)}var xs=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Gn(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;return!n||!r.entities?null:Object.values(r.entities).find(o=>o.device_id===n&&o.entity_id.startsWith("sensor.")&&(xs.test(o.translation_key??"")||xs.test(o.entity_id.split(".")[1])))?.entity_id??null}function Ss(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function si(r,e,t,n){let i=n?r.states[n]?.state:t?r.states[t]?.attributes.current_room:void 0;if(typeof i!="string"||["","unknown","unavailable"].includes(i))return null;let o=Ss(i);if(!o)return null;let s=l=>[l.name,l.area_id??"",l.area_id&&r.areas?.[l.area_id]?.name||""].map(Ss).filter(Boolean);return e.find(l=>s(l).includes(o))??e.find(l=>s(l).some(c=>c.length>=3&&(c.includes(o)||o.includes(c))))??null}var Lu=new Set(["garage","gate","door"]);function ai(r,e){let t=new Set,n=new Set,i=o=>{if(!o||o==="none"||!r.states[o])return;let s=D(o);s==="light"&&t.add(o),s==="cover"&&!Lu.has(String(r.states[o].attributes.device_class??""))&&n.add(o)};for(let o of e.rooms){let s=new Set(o.hidden??[]);et(r,G(r,o)).filter(a=>!s.has(a)).forEach(i)}return e.placements.forEach(o=>i(o.entity_id)),e.furniture.forEach(o=>i(o.entity)),{lights:[...t],covers:[...n]}}function $s(r){let e=r.split(".")[0];switch(e){case"scene":case"script":return[e,"turn_on"];case"automation":return[e,"trigger"];case"button":case"input_button":return[e,"press"];default:return["homeassistant","toggle"]}}function li(r,e,t){let n=t.target?.trim()??"",i=(o,s)=>e.dispatchEvent(new CustomEvent(o,{detail:s,bubbles:!0,composed:!0}));switch(t.action){case"navigate":if(!n)return;history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return;case"more_info":n&&i("hass-more-info",{entityId:n});return;case"service":{if(!n.includes("."))return;let[o,s]=n.split(".",2);r.callService(o,s,t.data??{});return}case"fire_dom_event":i("ll-custom",t.data??{});return}}function Ms(r,e){let t=e.data?.entity_id,n=e.state_entity||(e.action==="more_info"?e.target:null)||(e.action==="service"&&typeof t=="string"?t:null),i=n?r?.states[n]:void 0;return!!i&&["on","open","playing","home","heat","cool","unlocked"].includes(i.state)}var Bu=[.25,.9,.45],Vu=[1,.82,.55];function Gu(r,e){let t=r.states[e],n=Number(t?.attributes.current_power_w??t?.attributes.power??NaN);return Number.isFinite(n)?n:null}function As(r,e,t){let n=[];return e.forEach((i,o)=>{if(!i||i==="none")return;let s=r.states[i];if(!s||I(s))return;if(D(i)==="light"){let c=Me(s);c&&n.push({gang:o,color:c.color,level:c.level});return}if(!X(s)&&s.state!=="on")return;let a=t?Gu(r,i):null,l=a===null?.8:Math.min(1,.45+Math.sqrt(Math.max(0,a))/40);n.push({gang:o,color:t?Bu:Vu,level:l})}),n}var ci=(r,e)=>(r??[]).slice(0,e).filter(t=>!!t&&t!=="none");var Ku=864e5,ui=r=>{let e=new Date(r);return e.setHours(0,0,0,0),e.getTime()};function Uu(r,e){let t=/(\d{4})-(\d{2})-(\d{2})/.exec(r);if(t)return new Date(Number(t[1]),Number(t[2])-1,Number(t[3])).getTime();if(t=/(\d{1,2})\.(\d{1,2})\.(\d{4}|\d{2})?/.exec(r),t){let n=t[3]?t[3].length===2?2e3+Number(t[3]):Number(t[3]):new Date(e).getFullYear(),i=new Date(n,Number(t[2])-1,Number(t[1])).getTime();return!t[3]&&i<ui(e)&&(i=new Date(n+1,Number(t[2])-1,Number(t[1])).getTime()),i}return t=/(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(r),t?new Date(Number(t[3]),Number(t[1])-1,Number(t[2])).getTime():null}function Kn(r,e=Date.now()){if(!r||I(r))return null;let t=Number(r.attributes.daysTo);if(r.attributes.daysTo!==void 0&&Number.isFinite(t))return Math.max(0,Math.round(t));let n=String(r.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.max(0,Math.round(Number(n)));let i=n.toLowerCase();if(/\b(heute|today)\b/.test(i))return 0;if(i.includes("\xFCbermorgen")||i.includes("uebermorgen"))return 2;if(/\b(morgen|tomorrow)\b/.test(i))return 1;let o=Uu(n,e)??(r.attributes.device_class==="timestamp"||r.attributes.device_class==="date"?Date.parse(n):null);if(o!==null&&Number.isFinite(o))return Math.max(0,Math.round((ui(o)-ui(e))/Ku));let s=/(\d+)\s*(tag|tage|tagen|day|days)\b/i.exec(n);return s?Number(s[1]):null}function Es(r){return!r||I(r)?!1:r.state==="on"||/^(post|mail|yes|ja|true|voll|full|detected)$/i.test(r.state.trim())}function zs(r,e=20){if(!r||I(r))return null;let t=Number(r.state);return Number.isFinite(t)?{moisture:t,thirsty:t<e}:r.entity_id.startsWith("binary_sensor.")?{moisture:NaN,thirsty:r.state==="on"}:null}var ju=/remain|rest|verbleib|time_left|timeleft|finish|end_time|fertig|programmende|program_end|done_at/i;function di(r,e,t=Date.now()){for(let n of e){if(!n.startsWith("sensor.")||!ju.test(`${n} ${r.states[n]?.attributes.friendly_name??""}`))continue;let i=r.states[n];if(!i||I(i))continue;let o=i.attributes;if(o.device_class==="timestamp"){let c=Date.parse(i.state);if(Number.isFinite(c)&&c>t)return Math.ceil((c-t)/6e4);continue}let s=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(i.state.trim());if(s){let c=s[3]!==void 0?Number(s[1])*60+Number(s[2])+Number(s[3])/60:Number(s[1])*60+Number(s[2]);if(c>0)return Math.ceil(c);continue}let a=Number(i.state);if(!Number.isFinite(a)||a<=0)continue;let l=String(o.unit_of_measurement??"min").toLowerCase();return Math.ceil(l==="h"?a*60:l==="s"?a/60:a)}return null}function jt(r,e){let t=e?r.entities?.[e]?.device_id:null;return t&&r.entities?Object.values(r.entities).filter(n=>n.device_id===t).map(n=>n.entity_id):[]}var Rs=r=>r<60?`${r} min`:`${Math.floor(r/60)} h ${String(r%60).padStart(2,"0")} min`;function qu(r,e){let t=e?r.states[e]:void 0;if(!t||I(t))return null;let n=t.attributes.current_position;return typeof n=="number"?Math.min(100,Math.max(0,n)):t.state==="open"?100:t.state==="closed"?0:t.state==="opening"||t.state==="closing"?50:null}function Ts(r,e){let t=new Map;for(let n of e.floors.flatMap(i=>i.furniture)){let i=Y(n.type);!i||!Mn(i)||t.set(n.id,Bo(i,n.cover_entity?qu(r,n.cover_entity):null))}return t}var Fs={view:"3D",editor:"Editor",all_floors:"Alle Etagen",outside_area:"Au\xDFen",outside_area_hint:"Alle Ger\xE4te drau\xDFen auf einen Blick: im Garten, au\xDFerhalb der R\xE4ume, und was zu Au\xDFen geh\xF6rt (etwa die Wetterstation auf dem Dach).",device_outside:"Geh\xF6rt zu Au\xDFen",device_outside_hint:"Das Ger\xE4t z\xE4hlt nicht zum Raum darunter (eine Wetterstation auf dem Dach) und steht im Au\xDFen-Panel.",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",walls_slope:"Schr\xE4g",walls_slope_hint:"W\xE4nde schr\xE4g abgeschnitten: vorne halbhoch, hinten voll \u2013 wie ein Puppenhaus, dreht mit der Kamera",walls_solid:"Massiv",walls_solid_hint:"Massive W\xE4nde in ihren Farben statt Glas (Farben: Editor \u2192 Einstellungen, pro Raum im Raum)",wall_paint_outside:"Wandfarbe au\xDFen",wall_paint_inside:"Wandfarbe innen",wall_paint_room:"Wandfarbe innen (dieser Raum)",wall_paint_hint:"Gilt in der 3D-Ansicht \u201EMassiv\u201C.",wall_paint_default:"Standard",card_solid_walls:"Massive W\xE4nde (in ihren Farben)",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",floor_layer:"Ebene (ein- und ausblendbar)",floor_power:"Etagen-Z\xE4hler (Leistung)",floor_power_hint:"Ein Leistungssensor nur f\xFCr diese Etage (ein Unterz\xE4hler, eine Wohnung). Sein Wert steht auf dem Etagen-Schild und in der Ansicht dieser Etage auf der Haus-Karte, mit seinem Anteil am Verbrauch des Hauses.",floor_power_share:"{n} % vom Haus",living_area:"Wohnfl\xE4che {living}",room_living:"Z\xE4hlt zur Wohnfl\xE4che",living_area_none:"Keine Wohnfl\xE4che \xB7 Grundfl\xE4che {floor}",living_area_low:"Wohnfl\xE4che {living} (Grundfl\xE4che {floor}, davon {low} unter 2 m H\xF6he)",living_area_hint:"Gerechnet wie die Wohnfl\xE4chenverordnung: die Fl\xE4che innerhalb der W\xE4nde, voll ab 2 m lichter H\xF6he, zur H\xE4lfte zwischen 1 und 2 m (unter Schr\xE4gen), unter 1 m gar nicht. Ein Richtwert, kein Aufma\xDF.",living_area_floor:"Wohnfl\xE4che: {floor}",living_area_floor_house:"Wohnfl\xE4che dieser Etage: {floor} \xB7 ganzes Haus: {house}",print_plan:"Plan drucken / PDF",print_plan_hint:"Jede Etage als sauberer Plan mit Ma\xDFen und Fl\xE4chen, dazu eine Fl\xE4chentabelle \u2013 zum Drucken oder im Druckdialog als PDF speichern.",print_title:"Grundriss",print_room:"Raum",print_floor_area:"Grundfl\xE4che",print_living:"Wohnfl\xE4che",print_low:"unter 2 m",print_total:"Summe",print_blocked:"Das Druckfenster wurde blockiert \u2013 bitte Pop-ups f\xFCr Home Assistant erlauben.",check_open:"Plan pr\xFCfen",note:"Notiz",note_add:"Notiz hier",note_text:"Text",note_placeholder:"z. B. \u201EFilter wechseln\u201C oder \u201ESicherung 12\u201C",note_due:"F\xE4llig am",note_due_hint:"Ab diesem Tag wird der Pin orange.",note_is_due:"Diese Notiz ist f\xE4llig.",keys_title:"Tasten im Editor",keys_undo:"R\xFCckg\xE4ngig",keys_redo:"Wiederholen",keys_duplicate:"Raum verdoppeln",keys_delete:"Auswahl l\xF6schen",keys_nudge:"Auswahl um einen Rasterschritt verschieben",keys_nudge_10:"\u2026 um 10 cm",keys_nudge_1:"\u2026 um 1 cm",keys_rotate:"M\xF6bel um 90\xB0 drehen (Shift: zur\xFCck)",keys_lock:"M\xF6bel, Ger\xE4t oder Dachteil festsetzen / l\xF6sen",keys_close_shape:"Freie Form schlie\xDFen",keys_escape:"Abbrechen, Werkzeug verlassen, Auswahl aufheben",keys_straight:"Beim Zeichnen: gerade Linien",keys_sheet:"Diese \xDCbersicht",tour_title:"Erste Schritte",tour_1_title:"R\xE4ume zeichnen",tour_1:"Mit \u201E{rect}\u201C oder \u201E{free}\u201C zeichnest du die R\xE4ume; die W\xE4nde entstehen von selbst. Ordne jedem Raum seinen Home-Assistant-Bereich zu \u2013 dann findet NextFloor seine Ger\xE4te. Hast du schon Bereiche, legt \u201E{rooms}\u201C im Etagenformular sie auf einmal an.",tour_2_title:"T\xFCren und Fenster",tour_2:"\u201E{opening}\u201C setzt sie auf eine Wand. Verkn\xFCpfe ihren Kontakt oder Rollladen \u2013 in 3D gehen sie dann mit auf und zu, und offene Fenster melden sich.",tour_3_title:"M\xF6bel und Ger\xE4te",tour_3:"\u201E{furniture}\u201C \xF6ffnet die Bibliothek \u2013 oder baue eigene St\xFCcke in der \u{1F6E0}\uFE0F M\xF6bel-Werkstatt. W\xE4hlst du einen Raum, stehen darunter die Ger\xE4te seines Bereichs zum Platzieren bereit; Lampen leuchten dann in der Farbe ihres Lichts.",tour_4_title:"Ansehen und pr\xFCfen",tour_4:"\u201E{split}\u201C zeigt dein Haus beim Zeichnen; oben wechselst du in die 3D-Ansicht. \u201E{check}\u201C listet, was noch fehlt \u2013 und mit ? siehst du jederzeit die Tasten.",tour_next:"Weiter",tour_back:"Zur\xFCck",tour_done:"Los geht's",tour_skip:"\xDCberspringen",check_open_hint:"Listet, was im Plan fehlt oder schief ist, mit einer L\xF6sung per Tipp.",check_title:"Plan-Pr\xFCfung",check_all_good:"Alles in Ordnung \u2013 nichts gefunden.",check_hint:"{n} Punkte gefunden. Blaue Kn\xF6pfe \xE4ndern den Plan (R\xFCckg\xE4ngig geht wie immer), die anderen zeigen die Stelle.",check_room_no_area:"\u201E{room}\u201C hat keinen Home-Assistant-Bereich: seine Ger\xE4te werden nicht gefunden.",check_room_no_area_named:"\u201E{room}\u201C hat keinen Bereich \u2013 der freie Bereich \u201E{area}\u201C hei\xDFt genauso.",check_areas_unplaced:"{n} Bereiche dieser Etage haben noch keinen Raum: {names}",check_devices_unplaced:"\u201E{room}\u201C: {n} Ger\xE4te des Bereichs stehen noch nicht im Plan.",check_rooms_overlap:"\u201E{a}\u201C und \u201E{b}\u201C liegen \xFCbereinander.",check_opening_off_wall:"Eine T\xFCr oder ein Fenster in \u201E{room}\u201C sitzt auf keiner Wand.",check_entity_missing:"{n} Ger\xE4te-Pins zeigen auf Entit\xE4ten, die Home Assistant nicht mehr kennt ({ids}).",check_furniture_entity_missing:"Ein M\xF6bel ist mit {id} verkn\xFCpft \u2013 die Entit\xE4t gibt es nicht mehr.",check_battery_low:"Batterie schwach: {name} ({level} %)",battery_low_n:"Batterie schwach: {names}",check_standby:"{name} zieht {w} W, obwohl aus \u2013 etwa {cost} im Jahr.",check_fix_show:"Zeigen",check_fix_set_area:"\u201E{area}\u201C zuordnen",check_fix_add_rooms:"R\xE4ume anlegen",check_fix_place:"{n} setzen",check_fix_remove:"{n} entfernen",floor_layer_hint:"Diese Etage ist kein Geschoss, sondern eine Ebene \u2013 z. B. alle B\xE4ume oder die Deko. Die 3D-Ansicht zeigt oben ein Auge, mit dem du sie auf jedem Ger\xE4t ein- und ausblendest.",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",floor_copy:"Etage duplizieren",floor_copy_hint:"Die Kopie kommt oben aufs Haus, mit allen R\xE4umen, W\xE4nden, T\xFCren und Fenstern. R\xE4ume und Etage verlieren ihre Verkn\xFCpfung mit Home Assistant, M\xF6bel ihre Entit\xE4ten; Energieger\xE4te bleiben auf der alten Etage.",floor_copy_furniture:"M\xF6bel mitnehmen",floor_copy_devices:"Ger\xE4te-Pins mitnehmen",floor_copy_devices_hint:"Dieselbe Entit\xE4t steht dann auf beiden Etagen.",floor_copy_outdoor:"Au\xDFenfl\xE4chen mitnehmen",floor_copy_make:"Kopie anlegen",floor_copy_name:"{name} (Kopie)",furn_to_floor:"Auf Etage verschieben",furn_to_floor_hint:"Das M\xF6bel wandert an dieselbe Stelle auf der gew\xE4hlten Etage.",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",sub_area_add:"+ Bereich im Raum",sub_area_hint:"Ein Teil des Raums mit eigenem Home-Assistant-Bereich, aber ohne eigene W\xE4nde \u2013 eine Leseecke, ein Regal, eine K\xFCchenzeile im Wohnraum. Seine Ger\xE4te und Sensoren geh\xF6ren zu diesem Raum.",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",sofa_shape:"Form",sofa_straight:"Gerade",sofa_l:"L-Form (Spiegeln: andere Seite)",sofa_u:"U-Form",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",share_view:"Ansicht teilen",share_view_hint:"Speichert das Haus als kleine Datei, die in jedem Browser ohne Home Assistant aufgeht (\xFCber die Online-Demo von NextFloor) \u2013 zum Zeigen f\xFCr Familie oder Planer. Ohne Ger\xE4te und Entit\xE4ten, wie eine Vorlage.",share_view_title:"Unser Haus in NextFloor",share_view_needs_js:"Diese Seite braucht JavaScript und eine Internetverbindung.",share_view_file:"ansicht",share_view_done:"Ansicht gespeichert \u2013 die Datei im Browser \xF6ffnen oder weitergeben.",version_save:"Stand speichern \u2026",version_save_hint:"H\xE4lt den Plan unter einem Namen fest (\u201Evor dem Umbau\u201C). Benannte St\xE4nde bleiben, wenn die automatischen Wiederherstellungspunkte gehen.",version_name_prompt:"Name f\xFCr diesen Stand (z. B. \u201Evor dem Umbau\u201C):",version_saved:"Stand \u201E{name}\u201C gespeichert.",version_compare:"Vergleichen",version_delete_confirm:"\u201E{name}\u201C l\xF6schen?",version_same:"Kein Unterschied zum Plan.",version_diff_n:"{n} Unterschiede zum Plan, wie er jetzt ist:",diff_floor_added:"Etage \u201E{name}\u201C neu",diff_floor_removed:"Etage \u201E{name}\u201C entfernt",diff_room_added:"Raum \u201E{name}\u201C neu",diff_room_removed:"Raum \u201E{name}\u201C entfernt",diff_room_renamed:"\u201E{detail}\u201C hei\xDFt jetzt \u201E{name}\u201C",diff_room_reshaped:"\u201E{name}\u201C umgeformt ({detail} m\xB2)",diff_opening_added:"{name} neu ({detail})",diff_opening_removed:"{name} entfernt ({detail})",diff_furniture_added:"{name} neu",diff_furniture_removed:"{name} entfernt",diff_furniture_moved:"{name} verschoben oder ge\xE4ndert",diff_device_added:"Ger\xE4t {name} gesetzt",diff_device_removed:"Ger\xE4t {name} entfernt",diff_device_moved:"Ger\xE4t {name} verschoben",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",blind_kind:"Art des Behangs",blind_roller:"Rollladen au\xDFen",blind_venetian:"Raffstore mit Lamellen",blind_inside:"Rollo innen",cover2_entity:"Zweiter Rollladen (rechte H\xE4lfte)",cover_my:"Lieblingsposition \u201EMy\u201C (%, 0 = keine)",cover_my_go:"Zur Lieblingsposition ({p} %)",blind_hint:"Ein Raffstore dreht seine Lamellen in 3D mit der Lamellenstellung des Rollladens; ein Rollo innen h\xE4ngt hinter dem Glas. Ein breites Fenster kann f\xFCr seine rechte H\xE4lfte einen zweiten Rollladen haben. Die Lieblingsposition erscheint als \u201EMy\u201C im Schnellmen\xFC: ein Rollladen mit Positionen f\xE4hrt dorthin, ein Somfy-RTS-Motor ohne R\xFCckmeldung f\xE4hrt mit Stopp in seine eigene My-Stellung.",confirm_switch:"{name} wirklich schalten?",lock_confirm_unlock:"{name} wirklich aufschlie\xDFen?",gang_switch_one:"Schaltet",furn_cover_entity:"Bewegt sich mit",furn_cover_hint:"Vorhang, Leinwand, Markise oder Tor folgen dieser Cover-Entit\xE4t (Rollladen, Vorhang, Markise, Tor) und fahren mit ihr. Ein Tipp \xF6ffnet ihr Men\xFC (auf, Stopp, zu).",gang_switch:"Taste {n} schaltet",gang_socket_one:"Steckdose an",gang_socket:"Steckdose {n} an",gang_switch_hint:"Eine Taste leuchtet, solange ihr Licht an ist (in seiner Farbe). Ein Tipp schaltet; bei mehreren Tasten fragt ein kleines Men\xFC, welche. Dieselbe Entit\xE4t darf an mehreren Schaltern sitzen.",gang_socket_hint:"Eine Steckdose leuchtet gr\xFCn, solange ihr Schalter an ist \u2013 heller, je mehr sie zieht. Ein Tipp schaltet; bei mehreren fragt ein kleines Men\xFC, welche.",lock_confirm_lock:"{name} abschlie\xDFen?",opening_lock:"Smart Lock",opening_lock_hint:"Ein Tipp auf die T\xFCr schlie\xDFt ab oder auf (immer mit R\xFCckfrage). Solange sie aufgeschlossen ist, leuchtet ihre Kante.",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",units:"Ma\xDFe anzeigen in",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:"Wie L\xE4ngen und Fl\xE4chen im Plan, in den Formularen und in der Wandansicht stehen. Eingaben bleiben in Metern.",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",side_failed:"Dieses Formular lie\xDF sich nicht anzeigen ({error}). Der Grundriss bleibt bedienbar. Bitte melde den Text in einem GitHub-Issue.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_announce:"\u{1F4E2} Durchsage",announce_placeholder:"Eigene Nachricht \u2026",announce_send:"Sagen",announce_sent:"Gesagt: \u201E{message}\u201C",announce_failed:"Durchsage fehlgeschlagen: {error}",announce_phrase_1:"Essen ist fertig!",announce_phrase_2:"Zeit f\xFCrs Bett!",announce_phrase_3:"Bitte runterkommen!",announce_phrase_4:"Wir fahren gleich los!",announce_phrase_5:"Der Hund muss raus!",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",readable:"Gut lesbar",readable_hint:"Kr\xE4ftigere Kontraste und gr\xF6\xDFere Schrift \u2013 f\xFCr Wandtablets und alle, die so besser lesen.",card_readable:"Gut lesbar",all_off_n:"Alles aus ({n})",all_off_hint:"Schaltet Lichter, Schalter, Ventilatoren und Medien des Raums aus; zehn Sekunden lang l\xE4sst es sich r\xFCckg\xE4ngig machen.",all_off_done:"Alles aus.",all_off_undo:"R\xFCckg\xE4ngig",all_off_floor:"Alles aus im {floor} ({n} Ger\xE4te), zehn Sekunden lang r\xFCckg\xE4ngig zu machen",mood_save:"Stimmung speichern",mood_save_hint:"Speichert, wie die Lampen des Raums gerade leuchten, als Stimmung \u2013 ein Tipp darauf stellt sie sp\xE4ter wieder her, \u201E\u2192\u201C \xFCbertr\xE4gt sie auf einen anderen Raum.",mood_new:"Stimmung",mood_set:"Stimmung einstellen",mood_carry:"Auf einen anderen Raum \xFCbertragen",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",ambilight:"Leuchten hinter dem Fernseher (%)",ambilight_hint:"Wie kr\xE4ftig es hinter dem Fernseher leuchtet, solange er l\xE4uft. 0 schaltet es aus (zum Beispiel wenn du LED-Streifen am Fernseher hast), 100 ist die Standardst\xE4rke.",glow_scale:"Leuchtst\xE4rke in 3D (%)",light_effects:"Effektanimationen in 3D",light_effects_hint:"Nur exakte HA-Effektnamen zuordnen. Ohne Zuordnung bleibt die HA-Farbe statisch. \xC4ndert nichts in Home Assistant.",light_effects_enabled:"Animationen f\xFCr diese Leuchte erlauben",light_effect_unmapped:"Nicht zugeordnet (statisch)",light_effect_add:"Exakten Effektnamen hinzuf\xFCgen",light_effect_name_limit:"Der exakte Effektname muss 1 bis 255 Zeichen lang sein. Er wird nicht gek\xFCrzt.",light_effect_count_limit:"Maximal 100 Zuordnungen. Entferne zuerst einen vorhandenen Eintrag.",light_effect_exists:"Dieser Effektname ist bereits zugeordnet. Die vorhandene Zuordnung bleibt erhalten.",light_animation_none:"Statisch",light_animation_rainbow:"Regenbogen (ersetzt Farbe)",light_animation_pulse:"Pulsieren (Intensit\xE4t)",light_animation_flicker:"Flackern (Intensit\xE4t)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_speakers:"Nur auf diesen Lautsprechern (keiner = auf allen)",media_play:"Abspielen",media_pause:"Pause",media_previous:"Zur\xFCck",media_next:"Weiter",media_volume:"Lautst\xE4rke",media_sources:"Quellen",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_alerts:"Eigene Warnungen",circuits:"Sicherungskasten",circuits_hint:"Die Stromkreise mit den R\xE4umen, die an ihnen h\xE4ngen. Das Raum-Panel nennt sie, und die Suche findet sie (\u201EF12\u201C).",circuit_name:"Name",circuit_new:"Neuer Stromkreis",circuit_add:"Stromkreis hinzuf\xFCgen",circuit_add_room:"Raum hinzuf\xFCgen",own_alerts_hint:"Eine Zeile in der Warnleiste der 3D-Ansicht, solange eine Entit\xE4t in einem Zustand ist \u2013 \u201EWassertank leer\u201C vom Saugroboter, \u201ESp\xFClmaschine fertig\u201C. Mehrere Zust\xE4nde mit Komma; bei Zahlen <20 oder >80.",own_alert_entity:"Wenn \u2026",own_alert_state:"\u2026 im Zustand ist (leer = an)",own_alert_text:"\u2026 dann diese Warnung",own_alert_color:"Farbe",own_alert_tap:"Antippen",own_alert_tap_info:"\xF6ffnet die Details",own_alert_tap_toggle:"schaltet die Entit\xE4t",own_alert_tap_room:"springt in den Raum",own_alert_house:"Ganzes Haus",own_alert_new:"Neue Warnung",own_alert_add:"Warnung hinzuf\xFCgen",today:"Heute",today_none:"Heute steht nichts an.",today_calendars:"Kalender f\xFCr \u201EHeute\u201C",today_calendars_hint:"Die Termine dieser Kalender stehen oben rechts in der 3D-Ansicht auf der Karte \u201EHeute\u201C, zusammen mit den M\xFClltonnen, die heute oder morgen abgeholt werden. Ein Tipp auf den Titel klappt die Karte ein.",own_button_state:"Leuchtet, solange \u2026 an ist (optional)",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",panel_fold:"Einklappen (Raum bleibt sichtbar)",panel_unfold:"Wieder aufklappen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_sensor_bar:"Eigene Sensoren oben",card_sensor_bar_hint:"Die im Editor gew\xE4hlten Sensoren (Einstellungen) oben links auf der Karte",card_central_open:"Sternmen\xFC offen und gro\xDF",card_central_open_hint:"Favoriten und eigene Kn\xF6pfe stehen von Anfang an offen, eine Nummer gr\xF6\xDFer",card_keep_camera:"Kamera beim Etagenwechsel behalten",card_keep_camera_hint:"Gleiche Seite, H\xF6he und Entfernung auf jeder Etage",card_today:"Karte \u201EHeute\u201C",card_today_hint:"Termine von heute und f\xE4llige M\xFClltonnen oben rechts",card_announcements:"Durchsagen",card_announcements_hint:"Durchsagen (Aktion \u201ENextFloor: Durchsage\u201C) erscheinen gro\xDF auf der Karte, mit Gong und gesprochen",weather_short:"Wetter",time_of_day:"Tageszeit",time_of_day_hint:"Zeigt Sonne, Licht, Schatten und Look zu einer anderen Uhrzeit von heute. Noch einmal tippen zeigt wieder das Jetzt.",menu_open:"Men\xFC offen",menu_open_hint:"Das Sternmen\xFC mit Favoriten und eigenen Kn\xF6pfen steht auf diesem Ger\xE4t von Anfang an offen, eine Nummer gr\xF6\xDFer \u2013 f\xFCr ein Wandtablet, das vor allem Szenen schaltet.",keep_camera:"Kamera behalten",keep_camera_hint:"Beim Wechsel der Etage bleibt die Kamera auf derselben Seite, H\xF6he und Entfernung, statt die neue Etage von der Startseite aus einzupassen.",view_zoom:"Zoom",view_zoom_hint:"Wie nah die eingepassten Ansichten kommen \u2013 auf kleinen Tablets wirkt das Haus gr\xF6\xDFer.",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",card_weather_density:"Regen- und Schneemenge",card_weather_density_hint:"Weniger Tropfen und Flocken als das Wetter meldet; Wolken, Nebel und Blitze bleiben",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht und Schatten",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden, und das Haus wirft seinen Schatten auf das Grundst\xFCck. Ohne Haken bleiben Boden und Grundst\xFCck ohne Sonnenflecken und Schatten.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_by:"Alarm ausgel\xF6st durch {cause}",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_lost:"Kontakt antwortet nicht: {name}",rain_sensor:"Regensensor (eigene Wetterstation)",outage_sensor:"Sensor f\xFCr Stromausfall",outage_hint:"Ein Bin\xE4rsensor der Klasse Strom, der aus ist, ein anderer Bin\xE4rsensor, der an ist, ein Status wie \u201Eoff_grid\u201C oder \u201Ebackup\u201C oder eine Spannung unter 50 V l\xF6sen eine Warnung f\xFCrs ganze Haus aus.",contact_warning:"Warnen, wenn ein T\xFCr- oder Fensterkontakt nicht erreichbar ist",contact_warning_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D geschlossen aus, obwohl es keiner wei\xDF. Dann nennt ein Hinweis den Kontakt. Ein Neustart von Home Assistant warnt nicht.",night_lock_warning:"Nachts warnen, wenn eine T\xFCr nicht abgeschlossen ist",night_lock_warning_hint:"Zwischen 22 und 6 Uhr nennt ein Hinweis die T\xFCrschl\xF6sser des Plans, die offen stehen.",alert_unlocked_night:"Nicht abgeschlossen: {name}",motion_markers_active:"Bewegungsmelder nur zeigen, wenn sie etwas erkennen",motion_markers_active_hint:"Gilt f\xFCr Bewegungs-, Anwesenheits- und Pr\xE4senzmelder. Ein Melder, dessen Symbol auf immer zeigen steht, bleibt sichtbar.",status_entities:"Eigene Sensoren oben in der 3D-Ansicht",status_add:"Sensor hinzuf\xFCgen",status_entities_hint:"Zum Beispiel Au\xDFentemperatur, Alarmanlage oder Luftqualit\xE4t: Sie stehen oben links mit Name und Wert, auch in einem ge\xF6ffneten Raum. Antippen \xF6ffnet die Details. Bis zu 12.",announce_tts:"Text-zu-Sprache f\xFCr Durchsagen",announce_phrases:"S\xE4tze f\xFCr Durchsagen (einer pro Zeile)",announce_phrases_hint:"Leer: die mitgelieferten S\xE4tze. Durchsagen gibt es auch als Aktion \u201ENextFloor: Durchsage\u201C f\xFCr Automationen \u2013 auf den Lautsprechern der R\xE4ume und auf jedem offenen NextFloor-Bildschirm.",opening_rain_warning:"Bei Regen warnen",opening_light_well:"Lichtschacht davor",sill_boards:"Fensterbank",sill_boards_auto:"Automatisch",sill_boards_none:"Keine",sill_boards_inside:"Nur innen",sill_boards_outside:"Nur au\xDFen",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",import_other_hint:"Aus Sweet Home 3D: die .sh3d-Datei hier importieren. Etagen, R\xE4ume, T\xFCren, Fenster und freie W\xE4nde werden \xFCbernommen, M\xF6bel nicht.",import_sh3d_found:"Sweet Home 3D: {floors} Etagen, {rooms} R\xE4ume, {openings} T\xFCren und Fenster, {walls} freie W\xE4nde ({furniture} M\xF6bel werden nicht \xFCbernommen).",import_dxf_found:"DXF: {rooms} R\xE4ume (geschlossene Polylinien) und {walls} freie W\xE4nde (Linien) auf einer Etage.",import_error_dxf_empty:"In der DXF-Datei sind keine Linien oder Polylinien.",import_error_sh3d:"Das ist keine Sweet-Home-3D-Datei, die sich lesen l\xE4sst (es braucht Sweet Home 3D 5.3 oder neuer).",import_error_sh3d_empty:"In der Sweet-Home-3D-Datei sind keine R\xE4ume oder W\xE4nde.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",bars_fold:"Schalter einklappen",bars_unfold:"Schalter",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_buttons:"Raum-Kn\xF6pfe",card_room_buttons_hint:"Eine Reihe mit einem Knopf je Raum oben in der Karte \u2013 antippen \xF6ffnet den Raum, wie das Antippen im Modell",card_room_panel_hint:"Lichter und Rolll\xE4den des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",care_bin_today:"Heute Abholung",care_bin_tomorrow:"Morgen Abholung",care_bin_days:"In {n} Tagen",care_mail_yes:"Post ist da",care_mail_no:"Leer",care_plant_thirsty:"Durst",care_plant_ok:"Gut versorgt",care_time_left:"Noch {time}",care_entity_bin:"Abholtermin (Sensor)",care_entity_mail:"Post-Sensor",care_entity_plant:"Bodenfeuchte (Sensor)",care_thirsty_below:"Durst unter (%)",care_hint_bin:"Ein Sensor mit dem n\xE4chsten Abholtermin: Tage, ein Datum, \u201Eheute\u201C/\u201Emorgen\u201C oder die Integration Waste Collection Schedule. Am Tag davor und am Abholtag leuchtet die Tonne.",care_hint_mail:"Ein Sensor, der meldet, dass Post im Kasten ist (z. B. ein Kontakt an der Klappe). Dann leuchtet der Briefkasten.",care_hint_plant:"Ein Feuchtesensor in der Erde. Darunter leuchtet die Pflanze und meldet Durst.",lib_cat_lights:"Leuchten",lib_cat_seating:"Sitzen",lib_cat_tables:"Tische",lib_cat_storage:"Schr\xE4nke & Regale",lib_cat_beds:"Betten",lib_cat_kitchen:"K\xFCche",lib_cat_appliances:"Haushaltsger\xE4te",lib_cat_bath:"Bad",lib_cat_media:"TV & Audio",lib_cat_office:"B\xFCro",lib_cat_tech:"Technik",lib_cat_climate:"Heizung & Klima",lib_cat_energy:"Energie",lib_cat_garden:"Garten & Terrasse",lib_cat_plants:"Pflanzen",lib_cat_kids:"Kinder",lib_cat_fitness:"Fitness",lib_cat_pets:"Haustiere",lib_cat_workshop:"Werkstatt & Garage",lib_cat_music:"Musik & Atelier",lib_cat_season:"Saison & Deko",lib_cat_pictures:"Bilder & Rahmen",lib_cat_vehicles:"Fahrzeuge",lib_cat_building:"Treppen & Bauteile",lib_cat_decor:"Deko & Sonstiges",lib_favourites:"Favoriten",lib_recent:"Zuletzt benutzt",lib_for_room:"Passend zu {room}",lib_all_rooms:"Alle R\xE4ume zeigen",lib_linkable:"verkn\xFCpfbar",lib_lit:"leuchtet",lib_outdoor:"drau\xDFen",lib_fav_add:"Zu den Favoriten",lib_fav_remove:"Aus den Favoriten nehmen",lib_sizes:"Gr\xF6\xDFen",feature_name_energy:"Energiefluss",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",models:"Eigene 3D-Modelle",models_hint:"F\xFCr manche Fahrzeuge kann NextFloor ein echtes 3D-Modell zeigen, wenn du eins besitzt. W\xE4hle die Datei (.glb) hier aus: NextFloor dreht sie richtig herum, macht sie leichter, markiert den Lack und legt sie auf deinem Home Assistant ab. Ohne Modell sieht das Fahrzeug aus wie bisher.",models_licence:"Die Dateien geh\xF6ren dir und bleiben auf deinem Home Assistant. NextFloor liefert keine Modelle mit; bitte pr\xFCfe, dass die Lizenz deines Modells die Nutzung in deiner Installation erlaubt.",model_add:"Modell hochladen \u2026",model_replace:"Modell ersetzen \u2026",model_remove:"Entfernen",model_present:"vorhanden",model_missing:"noch keins",model_remove_confirm:"Das Modell \u201E{id}\u201C von Home Assistant l\xF6schen?",model_removed:"Modell \u201E{id}\u201C gel\xF6scht.",model_uploaded:"Modell \u201E{id}\u201C hochgeladen ({size}). Lade das Panel neu, damit es erscheint.",model_upload:"Auf Home Assistant ablegen",model_info:"{triangles} Dreiecke, {size} m",model_front:"Vorderseite",model_front_hint:"Drehe das Modell, bis die Front zum Betrachter zeigt (schr\xE4g nach unten links in der Vorschau).",model_paint:"Lack (die Farbe, die du im Editor w\xE4hlst)",model_paint_preview:"Farbe in der Vorschau",model_detail:"Detailgrad",model_detail_light:"Leicht (Tablet)",model_detail_normal:"Normal",model_detail_fine:"Fein",model_result:"Ergebnis: {triangles} Dreiecke, {size}",model_error_not_glb:"Das ist keine .glb-Datei (bin\xE4res glTF). Exportiere das Modell als \u201EglTF binary\u201C.",model_error_compressed:"Die Datei ist komprimiert (Draco, Meshopt oder KTX). Exportiere sie ohne Kompression.",model_error_empty:"In der Datei ist nichts Dreidimensionales zu finden.",model_error_unreadable:"Die Datei l\xE4sst sich nicht lesen: {detail}",model_error_too_large:"Die Datei ist gr\xF6\xDFer als {max}. W\xE4hle einen geringeren Detailgrad.",model_upload_forbidden:"Nur Administratoren d\xFCrfen Modelle hochladen.",model_upload_too_large:"Home Assistant nimmt keine Dateien \xFCber {max} an. W\xE4hle einen geringeren Detailgrad.",model_upload_not_glb:"Home Assistant hat die Datei abgelehnt (kein bin\xE4res glTF).",model_upload_bad_id:"Die Modell-Kennung ist ung\xFCltig.",model_upload_other:"Das Hochladen hat nicht geklappt: {detail}",ext_intro:"Hier importierst du eigene M\xF6bel-Packs, l\xE4dst eigene 3D-Modelle hoch und bindest Plugins ein.",plugin:"Plugin",plugins_title:"Plugins",plugins_intro:"Plugins erweitern NextFloor um eigene Licht-Animationen, Ger\xE4te und Karten im Raum-Panel. Trag die Adresse eines Plugins ein (eine .js-Datei in /config/www, also /local/\u2026, aus HACS /hacsfiles/\u2026 oder https://\u2026).",plugins_docs:"Wie man ein Plugin schreibt",plugins_warning:"Plugins laufen mit denselben Rechten wie NextFloor in deinem Browser. Nimm nur Plugins, deren Quelle du vertraust.",plugins_off:"ausgeschaltet",plugins_error:"Fehler",plugins_loading:"wird geladen \u2026",plugins_nothing_registered:"geladen, hat aber nichts angemeldet",plugins_loaded:"aktiv",plugins_reload_hint:"Wirkt nach dem Neuladen der Seite",plugins_remove:"Entfernen",plugins_none:"Noch keine Plugins eingetragen.",plugins_from_dashboard:"\xDCber eine Dashboard-Ressource angemeldet",plugins_add:"Hinzuf\xFCgen",plugins_url_invalid:"Bitte eine .js-Adresse unter /local/\u2026, /hacsfiles/\u2026 oder https://\u2026 angeben.",plugins_exists:"Dieses Plugin ist schon eingetragen.",plugins_limit:"H\xF6chstens 20 Plugins.",packs_title:"M\xF6bel-Packs",packs_intro:"Eigene M\xF6bel als Pack (JSON) importieren: als Datei oder unten einf\xFCgen. {n} Packs sind mitgeliefert und immer da.",packs_docs:"Pack-Format",packs_none:"Noch keine eigenen Packs importiert.",community_title:"Community-M\xF6bel",community_intro:"M\xF6bel, die andere mit dem M\xF6bel-Baukasten gebaut und geteilt haben \u2013 gepr\xFCft und kostenlos. Bau deine eigenen:",community_builder:"M\xF6bel-Baukasten \xF6ffnen",community_how:"So teilst du deine",community_load:"Community-M\xF6bel laden",community_none:"Noch keine Community-M\xF6bel \u2013 sei die oder der Erste!",community_install:"Installieren",community_update:"Aktualisieren",community_installed:"Installiert",community_failed:"Die Community-M\xF6bel lie\xDFen sich nicht laden: {detail}",pack_import:"Pack-Dateien importieren \u2026",pack_paste:"JSON importieren",pack_paste_empty:"F\xFCge zuerst das JSON eines Packs ein.",pack_paste_not_json:"Das ist kein g\xFCltiges JSON: {detail}",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_error_not_a_pack:'Das ist kein M\xF6bel-Pack (es fehlt "format": "nfpack").',pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Das Pack ist zu gro\xDF (h\xF6chstens 1 MB).",pack_error_needs_update:"Dieses Pack braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal importieren.",pack_error_other:"Import fehlgeschlagen: {detail}",store_open:"Plugin-Store \xF6ffnen",store_close:"Plugin-Store schlie\xDFen",store_intro:"Gepr\xFCfte Plugins aus der Community. Jedes wird vor der Aufnahme angesehen und danach nicht mehr ver\xE4ndert.",store_submit:"Eigenes Plugin einreichen",store_empty:"Noch keine Plugins im Store.",store_failed:"Der Store lie\xDF sich nicht laden ({error}).",store_install:"Installieren",store_installed:"installiert",store_update:"Aktualisieren",store_confirm:`\u201E{name}\u201C von {author} installieren?

Ein Plugin l\xE4uft mit denselben Rechten wie NextFloor in deinem Browser. Die Datei wurde gepr\xFCft, ihr Inhalt ist festgelegt:
{url}`,manual:"Anleitung",manual_more:"Mehr erfahren",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",live_autarky:"autark",live_day_hint:"Die letzten 24 Stunden: Solar (Fl\xE4che) und Verbrauch (Linie)",live_week_hint:"Die letzten 7 Tage: Sonne {solar} kWh, Verbrauch {use} kWh (gelb: Sonne, hell: Verbrauch)",live_days:"Tage",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",live_car_departure_entity:"Abfahrtszeit (optional)",live_car_departure:"Abfahrt {time}",live_car_open:"Offen: {parts}",printer_printing:"druckt",printer_done:"fertig",printer_paused:"pausiert",printer_error:"Fehler",printer_idle:"bereit",printer_done_at:"fertig um {time}",printer_layer:"Schicht",printer_nozzle:"D\xFCse",printer_bed:"Bett",heatpump_heating:"heizt",heatpump_water:"macht Warmwasser",heatpump_cooling:"k\xFChlt",heatpump_defrost:"taut ab",heatpump_idle:"in Ruhe",heatpump_flow_return:"Vor- \u2192 R\xFCcklauf",heatpump_heat:"W\xE4rme",heatpump_power:"Strom",heatpump_outside:"au\xDFen",pack_missing_item:"M\xF6bel aus entferntem Pack",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_lift_slide:"Hebe-Schiebet\xFCr",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_corners_hint:"Ecken: ein + auf einer Kante f\xFCgt eine Ecke hinzu, Ziehen formt die Fl\xE4che, \xD7 entfernt eine Ecke.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt, bekommt hier ein Loch \u2013 ein Pool in der Terrasse, ein Teich oder eine Wildfl\xE4che im Rasen. Die Reihenfolge beim Zeichnen spielt keine Rolle. Ein Pool schneidet sich von selbst aus.",outdoor_area_hint:"Der Home-Assistant-Bereich dieser Fl\xE4che (Garten, Terrasse, Pool): seine Ger\xE4te und Sensoren stehen unter Drau\xDFen, und ein Pin auf der Fl\xE4che \xF6ffnet es.",pool_temp:"Wassertemperatur (optional)",pool_pump:"Pumpe / Filter (optional)",pool_pump_on:"Pumpe l\xE4uft",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",map_on:"Echte Karte unter dem Plan anzeigen",map_lat:"Breitengrad",map_lon:"L\xE4ngengrad",map_use_ha:"Standort von Home Assistant \xFCbernehmen",map_opacity:"Sichtbarkeit (%)",map_zoom:"Detailstufe",map_zoom_coarse:"grob",map_zoom_fine:"fein",map_move:"Karte unter dem Plan verschieben",map_step:"Schritt",map_url:"Eigene Kachel-Adresse (leer = OpenStreetMap)",map_hint:"Dein Browser l\xE4dt die Kartenkacheln direkt vom Kartenserver (standardm\xE4\xDFig OpenStreetMap, bitte deren Nutzungsbedingungen beachten); solange die Karte aus ist, wird nichts geladen. Der Plan liegt auf der Karte, wie der Kompass es sagt \u2013 drehe den Kompass oder verschiebe die Karte, bis das Haus passt.",compass_title:"Kompass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Nord \u2194 S\xFCd tauschen",compass_swap_hint:"Dreht den Kompass um 180\xB0. Zeichnung, Dachfl\xE4chen und Solarfelder bleiben, wie sie sind.",compass_hint:"Stimmt der Kompass nicht mit der Wirklichkeit \xFCberein, drehst du ihn hier \u2013 nichts muss neu gezeichnet werden. Sonnenlicht, Wind und die Himmelsrichtungen der Dachfl\xE4chen richten sich danach.",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_end_start:"Ende am Firstanfang",roof_end_end:"Ende am Firstende",roof_halfhip:"Kr\xFCppelwalm beginnt bei",roof_halfhip_hint:"Wie weit oben am Giebel die Walmfl\xE4che beginnt, als Anteil der Giebelh\xF6he: niedrig = ein gro\xDFer Walm, hoch = nur die Spitze ist abgewalmt.",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_rotation:"Drehung (\xB0)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan, ein + auf einer Kante f\xFCgt eine Ecke hinzu, \xD7 entfernt eine. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",door_angle:"\xD6ffnungswinkel",door_angle_default:"Standard",door_angle_hint:"Wie weit das T\xFCrblatt aufgeht. Mit Sensor \xF6ffnet es so weit, sobald er \u201Eoffen\u201C meldet; ohne Sensor steht es so weit offen (statt halb). Standard bleibt wie bisher.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",studio_new:"Eigenes M\xF6bel bauen",studio_title:"M\xF6bel-Werkstatt",studio_title_edit:"M\xF6bel-Werkstatt: \xE4ndern",studio_hint:"W\xE4hle eine Vorlage, stell Ma\xDFe und Fronten ein und setz das M\xF6bel in den Plan. Es landet im Pack \u201EEigene M\xF6bel\u201C und l\xE4sst sich sp\xE4ter hier wieder \xE4ndern.",studio_kind:"Vorlage",studio_kind_cabinet:"Schrank",studio_kind_shelf:"Regal",studio_kind_lamp:"Lampe",studio_kind_device:"Ger\xE4t",studio_name:"Name",studio_width:"Breite (cm)",studio_depth:"Tiefe (cm)",studio_height:"H\xF6he (cm)",studio_doors:"T\xFCren",studio_drawers:"Schubladen",studio_shelves:"B\xF6den",studio_handle:"Griffe",studio_handle_bar:"Stangengriff",studio_handle_knob:"Knopf",studio_handle_none:"Grifflos",studio_base:"Unterbau",studio_base_plinth:"Sockel",studio_base_legs:"F\xFC\xDFe",studio_base_none:"Ohne",studio_back:"R\xFCckwand",studio_lamp:"Art",studio_lamp_floor:"Stehlampe",studio_lamp_table:"Tischlampe",studio_lamp_pendant:"Pendelleuchte",studio_lamp_wall:"Wandleuchte",studio_display:"Display vorne (zeigt den Mediaplayer)",studio_mount:"Steht",studio_mount_floor:"Auf dem Boden",studio_mount_surface:"Auf einem M\xF6bel",studio_mount_wall:"An der Wand",studio_color_body:"Korpus",studio_color_lamp_body:"Fu\xDF und Gestell",studio_color_front:"Fronten",studio_color_boards:"B\xF6den",studio_color_shade:"Schirm",studio_color_display:"Rahmen des Displays",studio_color_white:"Wei\xDF",studio_color_wood:"Holz",studio_color_metal:"Metall",studio_color_dark:"Dunkel",studio_color_glass:"Glas",studio_color_accent:"Akzent",studio_color_own:"Eigene Farbe",studio_color_plan:"Farbe des Plans",studio_place:"In den Plan setzen",studio_save:"\xC4nderung speichern",studio_open:"In der Werkstatt \xE4ndern",studio_error:"Speichern ging nicht: {detail}",studio_pack_name:"Eigene M\xF6bel",studio_pack_publisher:"M\xF6bel-Werkstatt",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_rise:"Steigung entlang der L\xE4nge (\xB0)",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_stairs:"Treppe",hint_stairs:"Ziehen, wo die Treppe stehen soll \u2013 sie l\xE4uft entlang der langen Seite; Form, Drehrichtung und Bauart stellst du danach rechts ein",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_slope:"Schr\xE4g",wall_slope_start:"H\xF6he am Anfang (m)",wall_slope_end:"H\xF6he am Ende (m)",wall_slope_hint:"Schr\xE4ge Wand: die Oberkante l\xE4uft gerade von der H\xF6he am Anfang der Wand (Ecke mit der kleineren Nummer) zur H\xF6he am Ende. Beide H\xF6hen d\xFCrfen \xFCber der Geschossh\xF6he liegen, zum Beispiel f\xFCr ein Pultdach-Zimmer mit hohen Oberlichtern.",wall_slope_off:"Wieder eine ebene Wand",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_view:"Wandansicht",wall_view_hint:"Die Wand von vorne: T\xFCren, Fenster und M\xF6bel an ihr ziehen oder ihren Abstand eintippen.",wall_view_prev:"Vorige Wand",wall_view_next:"N\xE4chste Wand",wall_view_left:"Abstand links (m)",wall_view_height:"H\xF6he \xFCber Boden (m)",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",arc:"Bogen",arc_hint:"Biegt die Wand zu einem Bogen. Ein Nachbarraum an dieser Wand biegt sich mit, T\xFCren und Fenster wandern mit; R\xFCckg\xE4ngig nimmt den Bogen zur\xFCck.",arc_bulge:"W\xF6lbung (m)",arc_bulge_hint:"Wie weit sich die Wand in der Mitte w\xF6lbt: positiv nach au\xDFen, negativ in den Raum.",arc_apply:"Biegen",arc_too_wide:"Eine T\xFCr oder ein Fenster in dieser Wand ist f\xFCr diesen Bogen zu breit. Mach den Bogen flacher oder die \xD6ffnung schmaler.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (Erweiterungen \u2192 M\xF6bel-Packs).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_entity_mower:"M\xE4hroboter",pet_room_sensor:"Raum-Sensor des Tiers (optional)",pet_room_hint:"Ein Sensor, der den Raum nennt, in dem das Tier gerade ist \u2013 Bermuda oder ESPresense mit einem Anh\xE4nger am Halsband: in 3D l\xE4uft es dann in diesem Raum herum.",furn_entity_water:"Ventil oder Schalter",fridge_temp:"Temperatur K\xFChlteil",freezer_temp:"Temperatur Gefrierteil",fridge_temp_hint:"Der Pin zeigt die Temperaturen. \xDCber 8 \xB0C im K\xFChlteil oder \u221212 \xB0C im Gefrierteil leuchtet er als Warnung.",spray_reach:"Reichweite des Wassers (m)",spray_hint:"Solange das Ventil offen oder der Schalter an ist, spritzt der Sprenger Wasser in B\xF6gen um sich herum.",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_ceiling_fan:"Deckenventilator",furn_fan_entity:"Ventilator",fan_hint:"Die Leuchte ist das Licht des Ventilators (leer lassen, wenn er keins hat). Der Ventilator wird im Raum gefunden oder hier gew\xE4hlt: In 3D drehen sich die Fl\xFCgel so schnell wie er l\xE4uft, sein Symbol schaltet ihn, Wischen hoch/runter \xE4ndert die Stufe, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Die H\xF6he ist, wie weit er von der Decke h\xE4ngt (mehr = l\xE4ngere Stange).",room_ceiling:"Deckenh\xF6he",room_ceiling_tip:"Niedriger als das Stockwerk (ein Bad unter der Treppe) oder h\xF6her (ein Wohnzimmer offen bis unters Dach): Deckenleuchten, Ventilatoren, LED-Streifen und Ger\xE4te an der Decke h\xE4ngen dann hier, und die W\xE4nde des Raums sind so hoch.",room_ceiling_through:"Die Decke ({ceiling} m) liegt \xFCber der Etagenh\xF6he ({floor} m): Der Raum reicht in die Etage dar\xFCber, seine W\xE4nde wachsen mit, und die Etage dar\xFCber bleibt \xFCber ihm offen (Luftraum). Im Editor der oberen Etage ist die Fl\xE4che schraffiert.",room_floor_offset:"Bodenh\xF6he (m)",room_floor_offset_hint:"Liegt der Boden dieses Raums tiefer oder h\xF6her als die Etage (ein abgesenkter Eingang: \u22120,39), wandern Boden, W\xE4nde, T\xFCren und Fenster und was im Raum steht mit; die Decke bleibt. Die Stufen stellst du als Treppe dazu.",room_inner:"Innenma\xDF {w} \xD7 {d}",room_inner_hint:"Von Wand zu Wand gemessen: Innenw\xE4nde nehmen die H\xE4lfte ihrer Dicke, Au\xDFenw\xE4nde stehen au\xDFerhalb des Umrisses.",floor_heating:"Fu\xDFbodenheizung (optional)",floor_heating_hint:"Solange der Thermostat heizt (oder das Ventil offen, der Schalter an ist), gl\xFCht der Boden des Raums in 3D warm.",room_announce_speaker:"Lautsprecher f\xFCr Durchsagen",room_announce_quiet:"Ruhezeit f\xFCr Durchsagen",room_announce_hint:"Ohne Wahl spricht der Lautsprecher, der im Raum steht, sonst ein Sprachassistent, ein Echo oder ein Lautsprecher des Bereichs (nie ein Fernseher). In der Ruhezeit lassen Durchsagen an mehrere R\xE4ume diesen Raum aus; eine Durchsage nur f\xFCr ihn kommt trotzdem an.",ceiling_here:"Decke hier",ceiling_here_hint:"H\xF6he der Decke genau an dieser Stelle, z. B. bei einer Dachschr\xE4ge. Leer = Decke des Raums.",ceiling_slope:"An die Dachschr\xE4ge",ceiling_slope_hint:"Die Decke liegt hier unter der Dachschr\xE4ge: die Leuchte h\xE4ngt an deren Unterseite, genau \xFCber ihrem Platz.",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",lamp_extra_light:"Leuchtmittel {n} (optional)",lamp_extra_hint:"Eine Leuchte mit mehreren Lichtern \u2013 Hauptlicht, Nachtlicht, Lichtring: Ist das Hauptlicht aus, leuchtet sie in 3D mit dem n\xE4chsten Licht, das an ist, etwas schw\xE4cher. Die Lichter schaltest du im Raumfenster einzeln.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto",clock:"Uhr",clock_none:"Keine",clock_top_left:"Oben links",clock_top_right:"Oben rechts",clock_bottom_left:"Unten links",clock_bottom_right:"Unten rechts",glass_walls:"Glasw\xE4nde",glass_walls_hint:"Wie deckend die W\xE4nde sind, durch die man in die R\xE4ume schaut: links fast unsichtbar, rechts undurchsichtig. Gilt f\xFCr diesen Bildschirm.",screen_name:"Name dieses Bildschirms",screen_name_hint:"Durchsagen erscheinen auf jedem offenen NextFloor-Bildschirm. Mit einem Namen (z. B. \u201EFlur\u201C) kann eine Durchsage auch nur an diesen Bildschirm gehen. Ohne Haken bleibt dieser Bildschirm still.",announce_on:"Durchsagen auf diesem Bildschirm an",announce_muted:"Durchsagen auf diesem Bildschirm stumm",lock3d_on:"3D sperren (Drehen, Zoomen und Verschieben aus, Tippen geht weiter)",lock3d_off:"3D entsperren",walk:"Durchs Haus gehen",travel:"Zeitreise: die letzten 24 Stunden oder 7 Tage abspielen",travel_play:"Abspielen",travel_pause:"Anhalten",travel_loading:"Lade Verlauf \u2026",travel_failed:"Der Verlauf lie\xDF sich nicht laden.",travel_speed:"Tempo",travel_speed_min:"1 Min./s",travel_speed_10min:"10 Min./s",travel_speed_hour:"1 Std./s",travel_days:"Tage",travel_live:"Live",card_travel_button:"Taste f\xFCr die Zeitreise",walk_stop:"Gehen beenden",walk_hint:"Ziehen: umsehen \xB7 W A S D / Pfeile oder Stick: gehen \xB7 Mausrad: Schritt",card_walk_button:"Taste zum Durchgehen",card_lock_button:"Taste f\xFCr die 3D-Sperre",backdrop:"Eigener Hintergrund",backdrop_color:"Farbe",backdrop_image:"Bild (/local/\u2026 oder https://\u2026)",backdrop_dim:"Abdunkeln",backdrop_hint:"Statt des Himmels des Looks steht das Haus vor einer eigenen Farbe oder einem Bild. Ein Bild in /config/www ist unter /local/\u2026 erreichbar.",furnish:"Einrichten",split_3d:"3D daneben",plan_dims:"Ma\xDFe",plan_dims_hint:"Schreibt an jede Raumkante ihre L\xE4nge.",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_mould:"Schimmel",heat_short_power:"Strom",heat_short_comfort:"Komfort",heat_short_sun:"Sonne",heat_short_wifi:"WLAN",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_mould:"Schimmel",heat_power:"Stromverbrauch",heat_comfort:"Wohlf\xFChlwert",heat_sun:"Sonne heute",room_sun_hours:"{h} h Sonne heute ({facing})",open_since:"offen seit {time}",presence_now:"jemand da",presence_last:"zuletzt vor {time}",comfort_n:"Komfort {n}",empty_lights_hint:"{n} Licht an, seit {min} min niemand da.",empty_lights_off:"Licht aus",open_heating_hint:"{n} Fenster offen, w\xE4hrend die Heizung l\xE4uft.",open_heating_off:"Heizung aus",room_clean:"Reinigung (Skript oder Knopf)",room_clean_hint:"Ein Skript oder Knopf, der den Saugroboter in diesen Raum schickt (z. B. die Raumreinigung deiner Roboter-Integration). Das Raum-Panel zeigt dann \u201E\u{1F9F9} Saugen\u201C.",room_clean_run:"Saugen",room_clean_run_hint:"Schickt den Saugroboter in diesen Raum.",shade_hint:"Sonne auf {n} Fenstern bei {temp} \u2013 Rolll\xE4den senken?",shade_close:"Senken",room_sun_year:"Sonne \xFCbers Jahr",room_sun_year_hint:"Die Sonnenstunden durch die Au\xDFenfenster des Raums am 15. jedes Monats.",room_energy:"heute {today} \xB7 Monat {month}",room_energy_hint:"Aus der Statistik der Leistungssensoren der Ger\xE4te im Raum; die Kosten f\xFCr den Monat mit dem Tarif des Hauses.",heat_summer:"Sommer",heat_winter:"Winter",air_co2:"l\xFCften (CO\u2082)",air_humidity:"l\xFCften (feucht)",air_mould:"Schimmelgefahr \u2013 l\xFCften",room_curve_hint:"Die Temperatur des Raums in den letzten 24 Stunden",heat_values:"Werte am Raumnamen",heat_wifi:"WLAN",wifi_aps:"{n} Access Points \xB7 {clients} Ger\xE4te",wifi_network:"Netzwerk: {online} online \xB7 {offline} offline",wifi_none:"Stelle Access Points oder Router aus den Packs (Smart Home 2) auf und verkn\xFCpfe sie mit einer Entit\xE4t ihres Ger\xE4ts.",wifi_clients:"{n} Ger\xE4te",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",meter_parent:"H\xE4ngt an Z\xE4hler",meter_parent_none:"keinem (Hauptz\xE4hler)",meter_main:"Hauptz\xE4hler",meter_unmetered:"{w} ungemessen",meter_device_hint:"Steht das Ger\xE4t hinter einem Zwischenz\xE4hler (z. B. Balkonkraftwerk in einer Wohnung), z\xE4hlt seine Leistung zu dieser Wohnung. Der Zwischenz\xE4hler muss daf\xFCr in beide Richtungen messen (\u2212 = R\xFCckspeisung); z\xE4hlt er nur Bezug, f\xE4llt der Verbrauch der Wohnung bei \xDCberschuss zu hoch aus.",meter_sub_power:"Leistung des Zweigs (W, + = Bezug, \u2212 = R\xFCckspeisung)",meter_floors:"Versorgt die Etagen",meter_sub_hint:"Ein Zwischenz\xE4hler misst seinen Zweig, z. B. eine Wohnung. Ger\xE4te auf den angehakten Etagen h\xE4ngen in 3D an ihm statt am Hauptz\xE4hler; was der Hauptz\xE4hler dar\xFCber hinaus z\xE4hlt, steht als \u201EAllgemein (Rest)\u201C in der Bilanz.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",energy_routes:"Kabelwege",energy_routes_hint:"Wo ein Kabel wirklich l\xE4uft: Der Fluss folgt dann deinen Punkten statt eines Bogens quer durchs Haus. Ohne Weg bleibt es beim Bogen. Verbraucher behalten ihren Bogen.",route_conn_solar:"{name} \u2192 Wechselrichter",route_conn_battery:"Batterie \u2194 Haus",route_conn_inverter:"Wechselrichter \u2192 Haus",route_conn_grid:"Netz \u2194 Haus",route_conn_meter:"{name} \u2194 \xFCbergeordneter Z\xE4hler",route_conn_device:"{name} \u2194 Unterz\xE4hler",route_points:"{n} Punkte",route_none:"direkter Bogen",route_draw:"Weg zeichnen",route_redraw:"Neu zeichnen",route_drawing:"Tippe im Plan die Punkte an, durch die das Kabel l\xE4uft, vom einen Ende zum anderen; wechsle dazwischen das Geschoss, wo es durch die Decke geht. {n} Punkte.",route_undo:"Letzter Punkt",route_done:"Fertig",route_cable:"Als Kabel zeigen",route_cable_hint:"Zeichnet den Weg als sichtbares Kabel, nicht nur als feine Linie unter den Teilchen.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_rack_ew:"Ost-West-Aufst\xE4nderung",solar_rack_ew_hint:"Jede zweite Reihe zeigt in die andere Richtung, die Paare stehen R\xFCcken an R\xFCcken \u2013 flach und dicht wie auf vielen Flachd\xE4chern.",solar_rack_tilt:"Aufst\xE4nderung (\xB0 zus\xE4tzlich)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_tap:"Antippen des M\xF6bels",furn_tap_default:"Wie \xFCblich",furn_tap_hint:"Eine eigene Aktion wie bei den eigenen Kn\xF6pfen des Sternmen\xFCs, z. B. ein browser_mod-Popup mit deiner Karte.",furn_show_when:"Nur zeigen, solange \u2026",furn_show_when_state:"\u2026 im Zustand (leer = an)",furn_show_when_invert:"Umgekehrt: zeigen, solange es nicht so ist",furn_show_when_hint:"Saison-Deko, die nur im Dezember steht: ein Helfer (input_boolean), ein Kalender oder ein Sensor entscheidet, ob das M\xF6bel in 3D erscheint. Mehrere Zust\xE4nde mit Komma trennen. Im Editor bleibt es immer sichtbar.",picture_upload:"Foto hochladen",picture_replace:"Anderes Foto hochladen",picture_stored:"Ein eigenes Foto ist gespeichert.",picture_url:"\u2026 oder Bild-Adresse",picture_entity:"\u2026 oder Bild einer Entit\xE4t",picture_border:"Passepartout (%)",picture_fit:"Foto",picture_fit_cover:"f\xFCllt den Rahmen",picture_fit_contain:"ganz zu sehen",picture_hint:"Dein Foto im Rahmen, in 3D und auf dem Wandtablet. Hochgeladene Fotos werden verkleinert mit dem Plan gespeichert; eine Bild-Entit\xE4t (z. B. Foto des Tages) oder eine Kamera zeigt ihr aktuelles Bild.",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",window_opens:"\xD6ffnet",window_opens_turn:"Dreh-Kipp (nach innen)",window_opens_slide:"Schiebend (Schiebefenster, Hebe-Schiebet\xFCr)",window_opens_top:"Klappfenster (unten nach au\xDFen)",window_opens_hint:"Schiebend: Der Fl\xFCgel auf der Seite des Scharniers gleitet vor den festen; zweifl\xFCgelig gleiten die beiden mittleren nach au\xDFen. Klappfenster \xF6ffnen mit dem Kontakt oder einem Kippsensor.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",pin_shift:"Pin verschieben",pin_shift_up:"\u2191 H\xF6he",pin_shift_hint:"Stehen Ger\xE4te dicht beieinander, schiebst du den Pin hier ein St\xFCck zur Seite oder nach oben (in Metern); das Ger\xE4t selbst bleibt, wo es ist.",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_active:"Nur wenn aktiv",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",card_tap_in_room:"Ger\xE4te nur im ge\xF6ffneten Raum schalten",card_tap_in_room_hint:"In der Haus- und Stockwerksansicht \xF6ffnet ein Antippen das Stockwerk oder den Raum, auch auf einem Ger\xE4t oder seinem Symbol. Im ge\xF6ffneten Raum schaltet es das Ger\xE4t. Langes Dr\xFCcken \xF6ffnet immer sein Men\xFC oder seine Details.",card_markers_outside:"Symbole au\xDFerhalb des ge\xF6ffneten Raums w\xE4hlen",card_markers_outside_hint:"Im Haus, auf dem Stockwerk und in den anderen R\xE4umen nur die angehakten Arten; im ge\xF6ffneten Raum alle wie oben eingestellt. \u201EImmer\u201C und \u201ENie\u201C am Ger\xE4t gehen vor.",marker_kind_light:"Lichter",marker_kind_cover:"Rolll\xE4den",marker_kind_climate:"Heizung",marker_kind_media:"Medien",marker_kind_switch:"Schalter",marker_kind_fan:"Ventilatoren",marker_kind_lock:"Schl\xF6sser",marker_kind_binary:"Kontakte und Melder",marker_kind_sensor:"Sensoren",marker_kind_tap:"M\xF6bel mit Aktion",marker_kind_other:"Sonstige",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stair_shape:"Form",stair_shape_straight:"Gerade",stair_shape_quarter:"Viertelgewendelt",stair_shape_l:"L mit Podest",stair_shape_half:"Halbgewendelt",stair_shape_u:"U mit Podest",stair_shape_spiral:"Wendeltreppe",stair_turn:"Laufrichtung (beim Hinaufgehen)",stair_turn_left:"Links herum",stair_turn_right:"Rechts herum",stair_build:"Bauart",stair_build_solid:"Massiv (Beton)",stair_build_stringer:"Wangentreppe",stair_build_mono:"Holmtreppe (Mittelholm)",stair_build_cantilever:"Kragarm (schwebend)",stair_risers:"Setzstufen",stair_steps:"Steigungen",stair_run_width:"Laufbreite (m)",stair_landing_after:"Stufen bis zum Podest",stair_landing_hint:"Das Podest liegt {h} cm \xFCber dem Boden; der Rest der Stufen kommt danach.",stair_rail:"Gel\xE4nder",stair_rail_none:"Keins",stair_rail_left:"Links",stair_rail_right:"Rechts",stair_rail_both:"Beidseitig",stair_down:"F\xFChrt nach unten",stair_down_hint:"Die Treppe beginnt auf dieser Etage und f\xFChrt hinunter, zum Beispiel in einen Keller, der nicht gezeichnet sein muss. Sie \xF6ffnet den Boden dieser Etage.",stair_measures:"{steps} Steigungen \xE0 {rise} cm \xB7 Auftritt {going} cm \xB7 Schrittma\xDF {measure} cm",stair_uncomfortable:"unbequem (Schrittma\xDF 59\u201365 cm, Steigung h\xF6chstens 21 cm)",stair_up_note:"Die Treppe beginnt an der markierten Vorderkante. Die Decke der Etage dar\xFCber \xF6ffnet sich nur dort, wo \xFCber den Stufen keine 2,2 m Kopfh\xF6he bleiben.",stair_down_note:"Man betritt die Treppe an der markierten Vorderkante und geht hinunter. Im Plan ist sie gestrichelt; der Boden dieser Etage \xF6ffnet sich \xFCber den Stufen.",stair_opening:"Decken\xF6ffnung",stair_opening_headroom:"Nach Kopfh\xF6he (nur wo n\xF6tig)",stair_opening_full:"\xDCber der ganzen Treppe",stair_opening_none:"Keine (Luke, geschlossener Schacht)",stair_opening_hint:"Wie weit die Treppe den Boden \xF6ffnet, den sie erreicht: die Etage dar\xFCber, oder bei einer Treppe nach unten die eigene. Nach Kopfh\xF6he \xF6ffnet nur \xFCber den Stufen, \xFCber denen keine 2,2 m bleiben.",stair_up_note_plain:"Die Treppe beginnt an der markierten Vorderkante und steigt nach hinten an.",stair_upgrade:"Form einstellen",stair_upgrade_hint:"Macht daraus eine Treppe mit Form (gewendelt, L, U, Wendel), Bauart, Gel\xE4nder und Stufenzahl.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas:"Gasz\xE4hler (optional)",energy_water:"Wasserz\xE4hler (optional)",energy_meters_hint:"Gas und Wasser stehen bei der Hausbilanz \u2013 in der Energieleiste und auf der Hauskarte: ein Sensor mit dem Durchfluss jetzt (m\xB3/h, l/min) oder dem Z\xE4hlerstand von heute.",energy_gas_short:"Gas",energy_water_short:"Wasser",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_rest:"Allgemein (Rest)",energy_advanced:"Erweiterter Energiemodus",energy_advanced_on:"Zwischenz\xE4hler nutzen",energy_show_unmetered:"Ungemessenen Verbrauch am Zwischenz\xE4hler zeigen",energy_show_unmetered_hint:"Das Schild eines Zwischenz\xE4hlers zeigt dann den Verbrauch seiner Etagen und wie viel davon kein platziertes Ger\xE4t misst, z. B. \u201E500 W \xB7 450 W ungemessen\u201C. Sonst zeigt es den Z\xE4hlerwert.",energy_advanced_hint:"F\xFCr Zwischenz\xE4hler, z. B. je Wohnung hinter einem Hauptz\xE4hler: Ein Stromz\xE4hler kann dann an einem anderen h\xE4ngen und eigene Etagen versorgen. Aus = der erste Z\xE4hler ist der Netzanschluss, weitere sind Verbraucher.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Ds={view:"3D",editor:"Editor",all_floors:"All floors",outside_area:"Outside",outside_area_hint:"All devices outside at a glance: in the garden, outside the rooms, and what belongs to Outside (a weather station on the roof, say).",device_outside:"Belongs to Outside",device_outside_hint:"The device does not count for the room under it (a weather station on the roof) and is listed in the Outside panel.",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",walls_slope:"Sloped",walls_slope_hint:"Walls cut on a slope: half height in front, full height at the back \u2013 like a doll's house, turns with the camera",walls_solid:"Solid",walls_solid_hint:"Solid walls in their colours instead of glass (colours: editor \u2192 settings, per room in the room)",wall_paint_outside:"Wall colour outside",wall_paint_inside:"Wall colour inside",wall_paint_room:"Wall colour inside (this room)",wall_paint_hint:"Used in the 3D view \u201CSolid\u201D.",wall_paint_default:"Default",card_solid_walls:"Solid walls (in their colours)",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",floor_layer:"Layer (can be shown and hidden)",floor_power:"Floor meter (power)",floor_power_hint:"A power sensor for this floor alone (a sub-meter, a flat). Its value shows on the floor label and, in this floor's view, on the house card with its share of the house's use.",floor_power_share:"{n} % of the house",living_area:"Living area {living}",room_living:"Counts as living area",living_area_none:"No living area \xB7 floor {floor}",living_area_low:"Living area {living} (floor {floor}, of which {low} below 2 m)",living_area_hint:"Counted like the German Wohnfl\xE4chenverordnung: the floor inside the walls, in full from 2 m clear height, half between 1 and 2 m (under slopes), not at all below 1 m. A guide value, not a survey.",living_area_floor:"Living area: {floor}",living_area_floor_house:"Living area of this floor: {floor} \xB7 whole house: {house}",print_plan:"Print plan / PDF",print_plan_hint:"Every floor as a clean plan with measurements and areas, and a table of the areas \u2013 to print, or save as PDF from the print dialog.",print_title:"Floor plan",print_room:"Room",print_floor_area:"Floor area",print_living:"Living area",print_low:"below 2 m",print_total:"Total",print_blocked:"The print window was blocked \u2013 please allow pop-ups for Home Assistant.",check_open:"Check the plan",note:"Note",note_add:"Note here",note_text:"Text",note_placeholder:'e.g. "change the filter" or "fuse 12"',note_due:"Due on",note_due_hint:"From that day on the pin turns orange.",note_is_due:"This note is due.",keys_title:"Editor keys",keys_undo:"Undo",keys_redo:"Redo",keys_duplicate:"Duplicate the room",keys_delete:"Delete the selection",keys_nudge:"Move the selection one grid step",keys_nudge_10:"\u2026 by 10 cm",keys_nudge_1:"\u2026 by 1 cm",keys_rotate:"Turn furniture by 90\xB0 (Shift: back)",keys_lock:"Fix or free furniture, a device or a roof section",keys_close_shape:"Close the free shape",keys_escape:"Cancel, leave the tool, clear the selection",keys_straight:"While drawing: straight lines",keys_sheet:"This sheet",tour_title:"First steps",tour_1_title:"Draw the rooms",tour_1:'Draw the rooms with "{rect}" or "{free}"; the walls come by themselves. Give each room its Home Assistant area \u2013 then NextFloor finds its devices. With areas already set up, "{rooms}" in the floor form adds them all at once.',tour_2_title:"Doors and windows",tour_2:'"{opening}" puts them on a wall. Link their contact or blind \u2013 in 3D they then open and close with it, and open windows tell you.',tour_3_title:"Furniture and devices",tour_3:'"{furniture}" opens the library \u2013 or build your own pieces in the \u{1F6E0}\uFE0F furniture studio. Select a room and the devices of its area are listed below, ready to place; lamps then shine in the colour of their light.',tour_4_title:"Look and check",tour_4:'"{split}" shows your house while you draw; at the top you switch to the 3D view. "{check}" lists what is still missing \u2013 and ? shows the keys at any time.',tour_next:"Next",tour_back:"Back",tour_done:"Let's go",tour_skip:"Skip",check_open_hint:"Lists what is missing or off in the plan, with a fix in one tap.",check_title:"Plan check",check_all_good:"All good \u2013 nothing found.",check_hint:"{n} points found. Blue buttons change the plan (undo works as always), the others show the place.",check_room_no_area:'"{room}" has no Home Assistant area: its devices are not found.',check_room_no_area_named:'"{room}" has no area \u2013 the free area "{area}" has the same name.',check_areas_unplaced:"{n} areas of this floor have no room yet: {names}",check_devices_unplaced:'"{room}": {n} devices of the area are not in the plan yet.',check_rooms_overlap:'"{a}" and "{b}" overlap.',check_opening_off_wall:'A door or window in "{room}" is not on a wall.',check_entity_missing:"{n} device pins point to entities Home Assistant no longer knows ({ids}).",check_furniture_entity_missing:"A piece of furniture is linked to {id} \u2013 that entity no longer exists.",check_battery_low:"Battery low: {name} ({level} %)",battery_low_n:"Battery low: {names}",check_standby:"{name} draws {w} W while off \u2013 about {cost} a year.",check_fix_show:"Show",check_fix_set_area:'Link "{area}"',check_fix_add_rooms:"Add the rooms",check_fix_place:"Place {n}",check_fix_remove:"Remove {n}",floor_layer_hint:"This floor is no storey but a layer \u2013 all the trees or the decoration, say. The 3D view shows an eye at the top that shows or hides it on each device.",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",floor_copy:"Duplicate floor",floor_copy_hint:"The copy goes on top of the house with all rooms, walls, doors and windows. Rooms and the floor lose their link to Home Assistant, furniture its entities; energy devices stay on the old floor.",floor_copy_furniture:"Take the furniture along",floor_copy_devices:"Take the device pins along",floor_copy_devices_hint:"The same entity then shows on both floors.",floor_copy_outdoor:"Take the outdoor areas along",floor_copy_make:"Make the copy",floor_copy_name:"{name} (copy)",furn_to_floor:"Move to floor",furn_to_floor_hint:"The item moves to the same spot on the chosen floor.",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",sub_area_add:"+ Area within the room",sub_area_hint:"A part of the room with a Home Assistant area of its own but no walls \u2013 a reading corner, a shelf, a kitchenette in the living room. Its devices and sensors belong to this room.",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",sofa_shape:"Shape",sofa_straight:"Straight",sofa_l:"L-shaped (mirror: other side)",sofa_u:"U-shaped",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",share_view:"Share a view",share_view_hint:"Saves the house as a small file that opens in any browser without Home Assistant (through NextFloor's online demo) \u2013 to show it to family or a planner. Without devices and entities, like a template.",share_view_title:"Our home in NextFloor",share_view_needs_js:"This page needs JavaScript and an internet connection.",share_view_file:"view",share_view_done:"View saved \u2013 open the file in a browser or pass it on.",version_save:"Save this state \u2026",version_save_hint:'Keeps the plan under a name ("before the renovation"). Named states stay when the automatic restore points go.',version_name_prompt:'Name for this state (e.g. "before the renovation"):',version_saved:'State "{name}" saved.',version_compare:"Compare",version_delete_confirm:'Delete "{name}"?',version_same:"No difference to the plan.",version_diff_n:"{n} differences to the plan as it is now:",diff_floor_added:'Floor "{name}" added',diff_floor_removed:'Floor "{name}" removed',diff_room_added:'Room "{name}" added',diff_room_removed:'Room "{name}" removed',diff_room_renamed:'"{detail}" is now called "{name}"',diff_room_reshaped:'"{name}" reshaped ({detail} m\xB2)',diff_opening_added:"{name} added ({detail})",diff_opening_removed:"{name} removed ({detail})",diff_furniture_added:"{name} added",diff_furniture_removed:"{name} removed",diff_furniture_moved:"{name} moved or changed",diff_device_added:"Device {name} placed",diff_device_removed:"Device {name} removed",diff_device_moved:"Device {name} moved",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",blind_kind:"Kind of blind",blind_roller:"Roller shutter outside",blind_venetian:"Venetian blind with slats",blind_inside:"Roller blind inside",cover2_entity:"Second blind (right half)",cover_my:'Favourite position "My" (%, 0 = none)',cover_my_go:"To the favourite position ({p} %)",blind_hint:`A venetian blind turns its slats in 3D with the cover's tilt; a roller blind inside hangs behind the glass. A wide window can have a second blind for its right half. The favourite position shows as "My" in the quick menu: a blind with positions moves there, a Somfy RTS motor without feedback goes to its own My on stop.`,confirm_switch:"Really switch {name}?",lock_confirm_unlock:"Really unlock {name}?",gang_switch_one:"Switches",furn_cover_entity:"Moves with",furn_cover_hint:"The curtain, screen, awning or gate follows this cover entity (blind, curtain, awning, gate) and travels with it. A tap opens its menu (up, stop, down).",gang_switch:"Button {n} switches",gang_socket_one:"Socket powered by",gang_socket:"Socket {n} powered by",gang_switch_hint:"A button glows while its light is on (in its colour). A tap switches it; with several buttons a small menu asks which. The same entity may sit on several switches.",gang_socket_hint:"A socket glows green while its switch is on \u2013 brighter the more it draws. A tap switches it; with several, a small menu asks which.",lock_confirm_lock:"Lock {name}?",opening_lock:"Smart lock",opening_lock_hint:"A tap on the door locks or unlocks it (always asking first). While it is unlocked, its edge glows.",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",units:"Show lengths in",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:"How lengths and areas appear in the plan, the forms and the wall view. Inputs stay in metres.",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",side_failed:"This form could not be shown ({error}). The plan stays usable. Please report the text in a GitHub issue.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_announce:"\u{1F4E2} Announcement",announce_placeholder:"Your own message \u2026",announce_send:"Say it",announce_sent:'Said: "{message}"',announce_failed:"Announcement failed: {error}",announce_phrase_1:"Dinner is ready!",announce_phrase_2:"Time for bed!",announce_phrase_3:"Please come down!",announce_phrase_4:"We are leaving soon!",announce_phrase_5:"The dog needs to go out!",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",readable:"Easy to read",readable_hint:"Stronger contrast and larger text \u2013 for wall tablets and anyone who reads better that way.",card_readable:"Easy to read",all_off_n:"Everything off ({n})",all_off_hint:"Switches off the room's lights, switches, fans and media; it can be undone for ten seconds.",all_off_done:"Everything off.",all_off_undo:"Undo",all_off_floor:"Everything off on {floor} ({n} devices), undo for ten seconds",mood_save:"Save mood",mood_save_hint:`Keeps how the room's lamps shine right now as a mood \u2013 a tap on it sets them again later, "\u2192" carries it to another room.`,mood_new:"Mood",mood_set:"Set this mood",mood_carry:"Carry over to another room",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',ambilight:"Glow behind the TV (%)",ambilight_hint:"How strongly it glows behind the TV while it plays. 0 switches it off (for example if you have LED strips on the TV), 100 is the usual strength.",glow_scale:"Glow in 3D (%)",light_effects:"Effect animations in 3D",light_effects_hint:"Map exact HA effect names only. Unmapped effects keep the static HA colour. Changes nothing in Home Assistant.",light_effects_enabled:"Allow animations for this lamp",light_effect_unmapped:"Unmapped (static)",light_effect_add:"Add exact effect name",light_effect_name_limit:"The exact effect name must contain 1 to 255 characters. It will not be shortened.",light_effect_count_limit:"At most 100 mappings. Remove an existing entry first.",light_effect_exists:"This effect name is already mapped. Its existing mapping is preserved.",light_animation_none:"Static",light_animation_rainbow:"Rainbow (replaces colour)",light_animation_pulse:"Pulse (intensity)",light_animation_flicker:"Flicker (intensity)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_speakers:"Only on these speakers (none = on all)",media_play:"Play",media_pause:"Pause",media_previous:"Previous",media_next:"Next",media_volume:"Volume",media_sources:"Sources",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_alerts:"Own warnings",circuits:"Fuse box",circuits_hint:'The circuits with the rooms they feed. The room panel names them, and the search finds them ("F12").',circuit_name:"Name",circuit_new:"New circuit",circuit_add:"Add a circuit",circuit_add_room:"Add a room",own_alerts_hint:'A line in the warning bar of the 3D view while an entity is in a state \u2013 "Water tank empty" from the robot vacuum, "Dishwasher done". Several states with commas; for numbers <20 or >80.',own_alert_entity:"When \u2026",own_alert_state:"\u2026 is in state (empty = on)",own_alert_text:"\u2026 then this warning",own_alert_color:"Colour",own_alert_tap:"A tap",own_alert_tap_info:"opens the details",own_alert_tap_toggle:"switches the entity",own_alert_tap_room:"jumps to the room",own_alert_house:"Whole house",own_alert_new:"New warning",own_alert_add:"Add a warning",today:"Today",today_none:"Nothing on today.",today_calendars:'Calendars for "Today"',today_calendars_hint:'The appointments of these calendars show top right in the 3D view on the "Today" card, with the bins collected today or tomorrow. A tap on its title folds the card.',own_button_state:"Lights up while \u2026 is on (optional)",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",panel_fold:"Fold away (the room stays in view)",panel_unfold:"Open again",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_sensor_bar:"Own sensors at the top",card_sensor_bar_hint:"The sensors chosen in the editor (Settings) at the top left of the card",card_central_open:"Star menu open and large",card_central_open_hint:"Favourites and own buttons stand open from the start, a size larger",card_keep_camera:"Keep the camera when switching floors",card_keep_camera_hint:"The same side, height and distance on every floor",card_today:'"Today" card',card_today_hint:"Today's appointments and the bins due, top right",card_announcements:"Announcements",card_announcements_hint:'Announcements (action "NextFloor: Announcement") show big on the card, with a chime, and are spoken',weather_short:"Weather",time_of_day:"Time of day",time_of_day_hint:"Shows sun, light, shadows and look at another time of today. Tap again to go back to now.",menu_open:"Menu open",menu_open_hint:"The star menu with favourites and own buttons stands open from the start on this device, a size larger \u2013 for a wall tablet that mostly runs scenes.",keep_camera:"Keep camera",keep_camera_hint:"Switching floors keeps the camera on the same side, height and distance instead of fitting the new floor from the start side.",view_zoom:"Zoom",view_zoom_hint:"How close the fitted views come \u2013 on small tablets the house looks larger.",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",card_weather_density:"Amount of rain and snow",card_weather_density_hint:"Fewer drops and flakes than the weather reports; clouds, fog and lightning stay",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight and shadows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor, and the house throws its shadow on the plot. Untick it to keep floor and plot free of sun patches and shadows.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_by:"Alarm set off by {cause}",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_lost:"Contact not answering: {name}",rain_sensor:"Rain sensor (own weather station)",outage_sensor:"Power outage sensor",outage_hint:'A binary sensor of class power that is off, another binary sensor that is on, a state like "off_grid" or "backup", or a voltage below 50 V raise a warning for the whole house.',contact_warning:"Warn when a door or window contact is unavailable",contact_warning_hint:"When a contact has been unavailable for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. A note then names the contact. A restart of Home Assistant does not warn.",night_lock_warning:"Warn at night when a door is not locked",night_lock_warning_hint:"Between 10 pm and 6 am a note names the plan's door locks that stand unlocked.",alert_unlocked_night:"Not locked: {name}",motion_markers_active:"Show motion sensors only while they detect something",motion_markers_active_hint:"Applies to motion, occupancy and presence sensors. A sensor whose marker is set to always show stays visible.",status_entities:"Own sensors at the top of the 3D view",status_add:"Add a sensor",status_entities_hint:"For example the outside temperature, the alarm or the air quality: they show at the top left with name and value, in an opened room too. A tap opens their details. Up to 12.",announce_tts:"Text-to-speech for announcements",announce_phrases:"Sentences for announcements (one per line)",announce_phrases_hint:`Empty: the sentences that come with NextFloor. Announcements also exist as the action "NextFloor: Announcement" for automations \u2013 on the rooms' speakers and on every open NextFloor screen.`,opening_rain_warning:"Warn when it rains",opening_light_well:"Light well in front",sill_boards:"Sill and board",sill_boards_auto:"Automatic",sill_boards_none:"None",sill_boards_inside:"Inside only",sill_boards_outside:"Outside only",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",import_other_hint:"From Sweet Home 3D: import the .sh3d file here. Floors, rooms, doors, windows and free walls come over, furniture does not.",import_sh3d_found:"Sweet Home 3D: {floors} floors, {rooms} rooms, {openings} doors and windows, {walls} free walls ({furniture} pieces of furniture are not taken over).",import_dxf_found:"DXF: {rooms} rooms (closed polylines) and {walls} free walls (lines) on one floor.",import_error_dxf_empty:"The DXF file has no lines or polylines.",import_error_sh3d:"This is not a Sweet Home 3D file that can be read (it needs Sweet Home 3D 5.3 or newer).",import_error_sh3d_empty:"The Sweet Home 3D file has no rooms or walls.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",bars_fold:"Fold the switches away",bars_unfold:"Switches",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_buttons:"Room buttons",card_room_buttons_hint:"A row with one button per room at the top of the card \u2013 tap one to open the room, like tapping it in the model",card_room_panel_hint:"The room's lights and blinds in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",care_bin_today:"Collected today",care_bin_tomorrow:"Collected tomorrow",care_bin_days:"In {n} days",care_mail_yes:"Post is in",care_mail_no:"Empty",care_plant_thirsty:"Thirsty",care_plant_ok:"Well watered",care_time_left:"{time} left",care_entity_bin:"Pickup date (sensor)",care_entity_mail:"Post sensor",care_entity_plant:"Soil moisture (sensor)",care_thirsty_below:"Thirsty below (%)",care_hint_bin:'A sensor with the next pickup: days, a date, "today"/"tomorrow" or the Waste Collection Schedule integration. The bin glows the day before and on the day.',care_hint_mail:"A sensor that reports post in the box (a contact on the flap, say). The mailbox glows then.",care_hint_plant:"A moisture sensor in the soil. Below the threshold the plant glows and says it is thirsty.",lib_cat_lights:"Lights",lib_cat_seating:"Seating",lib_cat_tables:"Tables",lib_cat_storage:"Cabinets & shelves",lib_cat_beds:"Beds",lib_cat_kitchen:"Kitchen",lib_cat_appliances:"Appliances",lib_cat_bath:"Bathroom",lib_cat_media:"TV & audio",lib_cat_office:"Office",lib_cat_tech:"Tech",lib_cat_climate:"Heating & climate",lib_cat_energy:"Energy",lib_cat_garden:"Garden & terrace",lib_cat_plants:"Plants",lib_cat_kids:"Kids",lib_cat_fitness:"Fitness",lib_cat_pets:"Pets",lib_cat_workshop:"Workshop & garage",lib_cat_music:"Music & studio",lib_cat_season:"Season & decoration",lib_cat_pictures:"Pictures & frames",lib_cat_vehicles:"Vehicles",lib_cat_building:"Stairs & building parts",lib_cat_decor:"Decoration & more",lib_favourites:"Favourites",lib_recent:"Recently used",lib_for_room:"Fits {room}",lib_all_rooms:"Show all rooms",lib_linkable:"linkable",lib_lit:"lit",lib_outdoor:"outdoor",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_sizes:"Sizes",feature_name_energy:"Energy flow",ext_tab:"Extensions",ext_title:"Extensions",models:"Your own 3D models",models_hint:"For some vehicles NextFloor can show a real 3D model if you own one. Choose the file (.glb) here: NextFloor turns it the right way round, makes it lighter, marks the paint and stores it on your Home Assistant. Without a model the vehicle looks as it did before.",models_licence:"The files are yours and stay on your Home Assistant. NextFloor ships no models; please make sure your model's licence lets you use it in your own installation.",model_add:"Add a model \u2026",model_replace:"Replace the model \u2026",model_remove:"Remove",model_present:"in place",model_missing:"none yet",model_remove_confirm:"Delete the model \u201C{id}\u201D from Home Assistant?",model_removed:"Model \u201C{id}\u201D deleted.",model_uploaded:"Model \u201C{id}\u201D stored ({size}). Reload the panel to see it.",model_upload:"Store on Home Assistant",model_info:"{triangles} triangles, {size} m",model_front:"Front",model_front_hint:"Turn the model until its front faces the viewer (towards the lower left in the picture).",model_paint:"Paint (the colour you pick in the editor)",model_paint_preview:"Colour in the preview",model_detail:"Level of detail",model_detail_light:"Light (tablet)",model_detail_normal:"Normal",model_detail_fine:"Fine",model_result:"Result: {triangles} triangles, {size}",model_error_not_glb:"This is not a .glb file (binary glTF). Export the model as \u201CglTF binary\u201D.",model_error_compressed:"The file is compressed (Draco, Meshopt or KTX). Export it without compression.",model_error_empty:"The file contains nothing three-dimensional.",model_error_unreadable:"The file cannot be read: {detail}",model_error_too_large:"The file is larger than {max}. Choose a lower level of detail.",model_upload_forbidden:"Only administrators may upload models.",model_upload_too_large:"Home Assistant accepts no files over {max}. Choose a lower level of detail.",model_upload_not_glb:"Home Assistant refused the file (not a binary glTF).",model_upload_bad_id:"The model id is not valid.",model_upload_other:"Uploading did not work: {detail}",ext_intro:"Import your own furniture packs, upload your own 3D models and add plugins here.",plugin:"plugin",plugins_title:"Plugins",plugins_intro:"Plugins add your own light animations, devices and cards in the room panel. Enter a plugin's address (a .js file in /config/www, i.e. /local/\u2026, from HACS /hacsfiles/\u2026, or https://\u2026).",plugins_docs:"How to write a plugin",plugins_warning:"Plugins run with the same rights as NextFloor in your browser. Only use plugins from sources you trust.",plugins_off:"off",plugins_error:"error",plugins_loading:"loading \u2026",plugins_nothing_registered:"loaded, but registered nothing",plugins_loaded:"active",plugins_reload_hint:"Takes effect after reloading the page",plugins_remove:"Remove",plugins_none:"No plugins yet.",plugins_from_dashboard:"Registered by a dashboard resource",plugins_add:"Add",plugins_url_invalid:"Enter a .js address under /local/\u2026, /hacsfiles/\u2026 or https://\u2026.",plugins_exists:"This plugin is already in the list.",plugins_limit:"At most 20 plugins.",packs_title:"Furniture packs",packs_intro:"Import your own furniture as a pack (JSON): as a file or pasted below. {n} packs come with NextFloor and are always there.",packs_docs:"Pack format",packs_none:"No packs of your own yet.",community_title:"Community furniture",community_intro:"Furniture others built with the furniture builder and shared \u2013 checked and free. Build your own:",community_builder:"Open the furniture builder",community_how:"How to share yours",community_load:"Load community furniture",community_none:"No community furniture yet \u2013 be the first!",community_install:"Install",community_update:"Update",community_installed:"Installed",community_failed:"The community furniture could not be loaded: {detail}",pack_import:"Import pack files \u2026",pack_paste:"Import JSON",pack_paste_empty:"Paste a pack's JSON first.",pack_paste_not_json:"This is not valid JSON: {detail}",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_error_not_a_pack:'This is not a furniture pack ("format": "nfpack" is missing).',pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The pack is too large (1 MB at most).",pack_error_needs_update:'This pack needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then import again.',pack_error_other:"Import failed: {detail}",store_open:"Open plugin store",store_close:"Close plugin store",store_intro:"Reviewed plugins from the community. Each one is looked at before it is added and does not change afterwards.",store_submit:"Submit your own plugin",store_empty:"No plugins in the store yet.",store_failed:"The store could not be loaded ({error}).",store_install:"Install",store_installed:"installed",store_update:"Update",store_confirm:`Install \u201C{name}\u201D by {author}?

A plugin runs with the same rights as NextFloor in your browser. The file has been reviewed and its content is fixed:
{url}`,manual:"Manual",manual_more:"Learn more",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",live_autarky:"self-sufficient",live_day_hint:"The last 24 hours: solar (area) and consumption (line)",live_week_hint:"The last 7 days: sun {solar} kWh, use {use} kWh (yellow: sun, light: use)",live_days:"days",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",live_car_departure_entity:"Departure time (optional)",live_car_departure:"Departs {time}",live_car_open:"Open: {parts}",printer_printing:"printing",printer_done:"done",printer_paused:"paused",printer_error:"error",printer_idle:"idle",printer_done_at:"done at {time}",printer_layer:"Layer",printer_nozzle:"Nozzle",printer_bed:"Bed",heatpump_heating:"heating",heatpump_water:"making hot water",heatpump_cooling:"cooling",heatpump_defrost:"defrosting",heatpump_idle:"resting",heatpump_flow_return:"Flow \u2192 return",heatpump_heat:"Heat",heatpump_power:"Power",heatpump_outside:"outside",pack_missing_item:"Furniture of a removed pack",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_lift_slide:"Lift-and-slide door",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_corners_hint:"Corners: a + on an edge adds a corner, dragging shapes the area, \xD7 removes a corner.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of surrounding areas",outdoor_cut_hint:"Every area that contains this one whole gets a hole here \u2013 a pool in the terrace, a pond or a wild patch in the lawn. The drawing order does not matter. A pool cuts itself out on its own.",outdoor_area_hint:"The Home Assistant area of this surface (garden, terrace, pool): its devices and sensors are listed under Outside, and a pin on the surface opens it.",pool_temp:"Water temperature (optional)",pool_pump:"Pump / filter (optional)",pool_pump_on:"pump on",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",map_on:"Show a real map under the plan",map_lat:"Latitude",map_lon:"Longitude",map_use_ha:"Use Home Assistant's location",map_opacity:"Visibility (%)",map_zoom:"Detail level",map_zoom_coarse:"coarse",map_zoom_fine:"fine",map_move:"Move the map under the plan",map_step:"Step",map_url:"Own tile address (empty = OpenStreetMap)",map_hint:"Your browser loads the map tiles straight from the map server (OpenStreetMap by default, please mind their usage policy); nothing is loaded while the map is off. The plan lies on the map as the compass says \u2013 turn the compass or move the map until the house fits.",compass_title:"Compass",compass_n_short:"N",compass_s_short:"S",compass_swap:"Swap north \u2194 south",compass_swap_hint:"Turns the compass by 180\xB0. The drawing, roof faces and solar fields stay as they are.",compass_hint:"If the compass does not match reality, turn it here \u2013 nothing has to be redrawn. Sunlight, wind and the compass directions of roof faces follow it.",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_end_start:"End at the ridge start",roof_end_end:"End at the ridge end",roof_halfhip:"Half-hip starts at",roof_halfhip_hint:"How high up the gable the hipped part starts, as a share of the gable's height: low = a large hip, high = only the tip is hipped.",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_rotation:"Turn (\xB0)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan, a + on an edge adds a corner, \xD7 removes one. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",door_angle:"Opening angle",door_angle_default:"Default",door_angle_hint:"How far the leaf opens. With a sensor it opens that far once it reports open; without one it stands that far open (instead of half). Default stays as before.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",studio_new:"Build your own piece",studio_title:"Furniture studio",studio_title_edit:"Furniture studio: change",studio_hint:'Pick a template, set its measurements and fronts and put the piece into the plan. It goes into the "Own furniture" pack and can be changed here again later.',studio_kind:"Template",studio_kind_cabinet:"Cabinet",studio_kind_shelf:"Shelf",studio_kind_lamp:"Lamp",studio_kind_device:"Device",studio_name:"Name",studio_width:"Width (cm)",studio_depth:"Depth (cm)",studio_height:"Height (cm)",studio_doors:"Doors",studio_drawers:"Drawers",studio_shelves:"Shelves",studio_handle:"Handles",studio_handle_bar:"Bar",studio_handle_knob:"Knob",studio_handle_none:"None",studio_base:"Base",studio_base_plinth:"Plinth",studio_base_legs:"Legs",studio_base_none:"None",studio_back:"Back panel",studio_lamp:"Kind",studio_lamp_floor:"Floor lamp",studio_lamp_table:"Table lamp",studio_lamp_pendant:"Pendant",studio_lamp_wall:"Wall light",studio_display:"Display on the front (shows the media player)",studio_mount:"Stands",studio_mount_floor:"On the floor",studio_mount_surface:"On furniture",studio_mount_wall:"On the wall",studio_color_body:"Body",studio_color_lamp_body:"Base and frame",studio_color_front:"Fronts",studio_color_boards:"Boards",studio_color_shade:"Shade",studio_color_display:"Display frame",studio_color_white:"White",studio_color_wood:"Wood",studio_color_metal:"Metal",studio_color_dark:"Dark",studio_color_glass:"Glass",studio_color_accent:"Accent",studio_color_own:"Own colour",studio_color_plan:"Colour of the plan",studio_place:"Put into the plan",studio_save:"Save the change",studio_open:"Change in the studio",studio_error:"Could not save: {detail}",studio_pack_name:"Own furniture",studio_pack_publisher:"Furniture studio",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_rise:"Rise along its length (\xB0)",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_stairs:"Stairs",hint_stairs:"Drag where the stair should stand \u2013 it runs along the long side; set shape, turn and build on the right afterwards",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_slope:"Sloping",wall_slope_start:"Height at the start (m)",wall_slope_end:"Height at the end (m)",wall_slope_hint:"Sloping wall: the top runs straight from the height at the start of the wall (the corner with the lower number) to the height at its end. Both may be above the floor height, for example for a lean-to room with high clerestory windows.",wall_slope_off:"Back to a level wall",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_view:"Wall view",wall_view_hint:"The wall from the front: drag its doors, windows and furniture or type their distance.",wall_view_prev:"Previous wall",wall_view_next:"Next wall",wall_view_left:"From the left (m)",wall_view_height:"Above the floor (m)",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",arc:"Arc",arc_hint:"Bends the wall into an arc. A room sharing the wall bends along, doors and windows move with it; Undo takes the arc back.",arc_bulge:"Bulge (m)",arc_bulge_hint:"How far the middle of the wall bulges: positive outwards, negative into the room.",arc_apply:"Bend",arc_too_wide:"A door or window in this wall is too wide for this curve. Make the curve flatter or the opening narrower.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Extensions \u2192 Furniture packs).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_entity_mower:"Robot mower",pet_room_sensor:"The pet's room sensor (optional)",pet_room_hint:"A sensor naming the room the pet is in \u2013 Bermuda or ESPresense with a tag on its collar: in 3D it then roams that room.",furn_entity_water:"Valve or switch",fridge_temp:"Fridge temperature",freezer_temp:"Freezer temperature",fridge_temp_hint:"The pin shows the temperatures. Above 8 \xB0C in the fridge or \u221212 \xB0C in the freezer it lights up as a warning.",spray_reach:"Reach of the water (m)",spray_hint:"While the valve is open or the switch is on, the sprinkler throws water in arcs around it.",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_ceiling_fan:"Ceiling fan",furn_fan_entity:"Fan",fan_hint:"The light is the fan's light kit (leave it empty if it has none). The fan is found in the room or chosen here: in 3D the blades turn as fast as it runs, its icon switches it, swiping up/down changes the speed, a long press opens the quick menu. The height is how far it hangs from the ceiling (more = a longer downrod).",room_ceiling:"Ceiling height",room_ceiling_tip:"Lower than the floor (a bathroom under the stairs) or higher (a living room open up to the roof): ceiling lights, fans, LED strips and ceiling devices hang from here, and the room's walls are this high.",room_ceiling_through:"The ceiling ({ceiling} m) is above the floor height ({floor} m): the room reaches into the floor above, its walls rise with it, and the floor above stays open over it. The editor of the upper floor shows the area hatched.",room_floor_offset:"Floor level (m)",room_floor_offset_hint:"When this room's floor lies lower or higher than the floor (a sunken entrance: \u22120.39), its floor, walls, doors and windows and what stands in it move with it; its ceiling stays. Add the steps as a stair.",room_inner:"Inside {w} \xD7 {d}",room_inner_hint:"Measured from wall to wall: inner walls take half their thickness, outer walls stand outside the outline.",floor_heating:"Underfloor heating (optional)",floor_heating_hint:"While the thermostat heats (or the valve is open, the switch on), the room's floor glows warm in 3D.",room_announce_speaker:"Speaker for announcements",room_announce_quiet:"Quiet time for announcements",room_announce_hint:"Without a choice, the speaker placed in the room talks, else a voice assistant, an Echo or a speaker of its area (never a TV). During the quiet time, announcements to several rooms leave this room out; one meant only for it still gets through.",ceiling_here:"Ceiling here",ceiling_here_hint:"Height of the ceiling right at this spot, e.g. in a sloping ceiling. Empty = the room's ceiling.",ceiling_slope:"Up to the roof slope",ceiling_slope_hint:"The ceiling here lies under the roof slope: the lamp hangs from its underside, right above where it stands.",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",lamp_extra_light:"Bulb {n} (optional)",lamp_extra_hint:"A fixture with several lights \u2013 main light, night light, ambient ring: while the main light is off it glows in 3D with the next light that is on, a little dimmer. Switch the lights one by one in the room panel.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto",clock:"Clock",clock_none:"None",clock_top_left:"Top left",clock_top_right:"Top right",clock_bottom_left:"Bottom left",clock_bottom_right:"Bottom right",glass_walls:"Glass walls",glass_walls_hint:"How opaque the walls you look through into the rooms are: left almost invisible, right opaque. For this screen.",screen_name:"Name of this screen",screen_name_hint:'Announcements show on every open NextFloor screen. With a name (e.g. "Hallway"), an announcement can go to this screen only. Unticked, this screen stays silent.',announce_on:"Announcements on this screen are on",announce_muted:"Announcements on this screen are muted",lock3d_on:"Lock 3D (no turning, zooming or panning; taps still work)",lock3d_off:"Unlock 3D",walk:"Walk through the house",travel:"Time travel: replay the last 24 hours or 7 days",travel_play:"Play",travel_pause:"Pause",travel_loading:"Loading history \u2026",travel_failed:"The history could not be loaded.",travel_speed:"Speed",travel_speed_min:"1 min/s",travel_speed_10min:"10 min/s",travel_speed_hour:"1 h/s",travel_days:"days",travel_live:"Live",card_travel_button:"Button for time travel",walk_stop:"Stop walking",walk_hint:"Drag: look around \xB7 W A S D / arrows or stick: walk \xB7 wheel: step",card_walk_button:"Button to walk through",card_lock_button:"Button for the 3D lock",backdrop:"Own background",backdrop_color:"Colour",backdrop_image:"Picture (/local/\u2026 or https://\u2026)",backdrop_dim:"Dim",backdrop_hint:"Instead of the look's sky the house stands in front of a colour or a picture of your own. A picture in /config/www is reachable at /local/\u2026.",furnish:"Furnish",split_3d:"3D beside",plan_dims:"Measurements",plan_dims_hint:"Labels every room edge with its length.",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_mould:"Mould",heat_short_power:"Power",heat_short_comfort:"Comfort",heat_short_sun:"Sun",heat_short_wifi:"Wi-Fi",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_mould:"Mould",heat_power:"Power use",heat_comfort:"Comfort score",heat_sun:"Sun today",room_sun_hours:"{h} h of sun today ({facing})",open_since:"open for {time}",presence_now:"someone here",presence_last:"last seen {time} ago",comfort_n:"Comfort {n}",empty_lights_hint:"{n} lights on, nobody here for {min} min.",empty_lights_off:"Lights off",open_heating_hint:"{n} windows open while the heating runs.",open_heating_off:"Heating off",room_clean:"Cleaning (script or button)",room_clean_hint:`A script or button that sends the robot vacuum to this room (e.g. your robot integration's room cleaning). The room panel then shows "\u{1F9F9} Clean".`,room_clean_run:"Clean",room_clean_run_hint:"Sends the robot vacuum to this room.",shade_hint:"Sun on {n} windows at {temp} \u2013 lower the blinds?",shade_close:"Lower",room_sun_year:"Sun over the year",room_sun_year_hint:"The hours of sun through the room's outside windows on the 15th of every month.",room_energy:"today {today} \xB7 month {month}",room_energy_hint:"From the statistics of the power sensors of the room's devices; the month's cost at the house's tariff.",heat_summer:"summer",heat_winter:"winter",air_co2:"air it (CO\u2082)",air_humidity:"air it (damp)",air_mould:"risk of mould \u2013 air it",room_curve_hint:"The room's temperature over the last 24 hours",heat_values:"Values at the room names",heat_wifi:"Wi-Fi",wifi_aps:"{n} access points \xB7 {clients} devices",wifi_network:"Network: {online} online \xB7 {offline} offline",wifi_none:"Place access points or routers from the packs (Smart home 2) and link them to an entity of their device.",wifi_clients:"{n} devices",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",meter_parent:"Hangs off meter",meter_parent_none:"none (main meter)",meter_main:"Main meter",meter_unmetered:"{w} unmetered",meter_device_hint:"If the device sits behind a sub-meter (e.g. a balcony plant in a flat), its power counts towards that flat. The sub-meter has to measure both ways for this (\u2212 = feeding back); if it only counts import, the flat's consumption comes out too high while there is a surplus.",meter_sub_power:"Power of the branch (W, + = drawn, \u2212 = fed back)",meter_floors:"Feeds the floors",meter_sub_hint:"A sub-meter measures its branch, e.g. a flat. Devices on the ticked floors hang off it in 3D instead of the main meter; what the main meter counts beyond that shows as \u201CCommon (rest)\u201D in the balance.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",energy_routes:"Cable routes",energy_routes_hint:"Where a cable really runs: the flow then follows your points instead of an arc through the house. Without a route it keeps the arc. Consumers keep their arc.",route_conn_solar:"{name} \u2192 inverter",route_conn_battery:"Battery \u2194 house",route_conn_inverter:"Inverter \u2192 house",route_conn_grid:"Grid \u2194 house",route_conn_meter:"{name} \u2194 parent meter",route_conn_device:"{name} \u2194 sub-meter",route_points:"{n} points",route_none:"direct arc",route_draw:"Draw route",route_redraw:"Redraw",route_drawing:"Tap the points the cable runs through on the plan, from one end to the other; switch floors in between where it goes through a ceiling. {n} points.",route_undo:"Last point",route_done:"Done",route_cable:"Show as cable",route_cable_hint:"Draws the route as a visible cable, not just as the faint line under the particles.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_rack_ew:"East-west racks",solar_rack_ew_hint:"Every second row faces the other way, the pairs stand back to back \u2013 low and close, as on many flat roofs.",solar_rack_tilt:"Rack (\xB0 more tilt)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_tap:"Tapping the item",furn_tap_default:"As usual",furn_tap_hint:"An own action like the star menu's own buttons, e.g. a browser_mod popup with your card.",furn_show_when:"Only show while \u2026",furn_show_when_state:"\u2026 is in state (empty = on)",furn_show_when_invert:"The other way round: show while it is not",furn_show_when_hint:"Seasonal decoration that only stands in December: a helper (input_boolean), a calendar or a sensor decides whether the piece shows in 3D. Separate several states with commas. The editor always shows it.",picture_upload:"Upload a photo",picture_replace:"Upload another photo",picture_stored:"An own photo is stored.",picture_url:"\u2026 or picture address",picture_entity:"\u2026 or an entity's picture",picture_border:"Mat (%)",picture_fit:"Photo",picture_fit_cover:"fills the frame",picture_fit_contain:"shown whole",picture_hint:"Your photo in the frame, in 3D and on the wall tablet. Uploaded photos are stored with the plan in a smaller size; an image entity (a photo of the day) or a camera shows its current picture.",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",window_opens:"Opens",window_opens_turn:"Turn and tilt (inwards)",window_opens_slide:"Sliding (sliding window, lift-and-slide door)",window_opens_top:"Top-hung (bottom swings out)",window_opens_hint:"Sliding: the pane on the hinge side slides in front of the fixed one; with two leaves the middle two slide outwards. Top-hung windows open with their contact or a tilt sensor.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",pin_shift:"Move the pin",pin_shift_up:"\u2191 up",pin_shift_hint:"When devices stand close together, push the pin a little aside or up here (in metres); the device itself stays where it is.",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_active:"Only while active",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",card_tap_in_room:"Switch devices only in the opened room",card_tap_in_room_hint:"In the house and floor views a tap opens the floor or room, even on a device or its marker. In the opened room it switches the device. A long press always opens its menu or details.",card_markers_outside:"Choose the markers outside the opened room",card_markers_outside_hint:`In the house, on the floor and in the other rooms only the ticked kinds; in the opened room all, as set above. A device's own "always" and "never" come first.`,marker_kind_light:"Lights",marker_kind_cover:"Blinds",marker_kind_climate:"Heating",marker_kind_media:"Media",marker_kind_switch:"Switches",marker_kind_fan:"Fans",marker_kind_lock:"Locks",marker_kind_binary:"Contacts and detectors",marker_kind_sensor:"Sensors",marker_kind_tap:"Furniture with an action",marker_kind_other:"Other",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_shape:"Shape",stair_shape_straight:"Straight",stair_shape_quarter:"Quarter turn (winders)",stair_shape_l:"L with landing",stair_shape_half:"Half turn (winders)",stair_shape_u:"U with landing",stair_shape_spiral:"Spiral",stair_turn:"Turns (walking up)",stair_turn_left:"To the left",stair_turn_right:"To the right",stair_build:"Build",stair_build_solid:"Solid (concrete)",stair_build_stringer:"On stringers",stair_build_mono:"Mono stringer (spine)",stair_build_cantilever:"Cantilevered (floating)",stair_risers:"Closed risers",stair_steps:"Risers",stair_run_width:"Flight width (m)",stair_landing_after:"Risers up to the landing",stair_landing_hint:"The landing lies {h} cm above the floor; the other risers come after it.",stair_rail:"Railing",stair_rail_none:"None",stair_rail_left:"Left",stair_rail_right:"Right",stair_rail_both:"Both sides",stair_down:"Leads down",stair_down_hint:"The stair starts on this floor and leads down, for example into a cellar that need not be drawn. It opens the floor of this level.",stair_measures:"{steps} risers of {rise} cm \xB7 going {going} cm \xB7 step measure {measure} cm",stair_uncomfortable:"uncomfortable (step measure 59\u201365 cm, rise at most 21 cm)",stair_up_note:"The stair starts at the marked front edge. The floor above opens only where less than 2.2 m of headroom is left above the steps.",stair_down_note:"You step onto the stair at the marked front edge and walk down. The plan draws it dashed; this floor opens above the steps.",stair_opening:"Floor opening",stair_opening_headroom:"By headroom (only where needed)",stair_opening_full:"Over the whole stair",stair_opening_none:"None (hatch, closed stairwell)",stair_opening_hint:"How much of the floor the stair reaches it opens: the floor above, or its own floor for a stair going down. By headroom opens only above the steps that lack 2.2 m.",stair_up_note_plain:"The stair starts at the marked front edge and rises towards the back.",stair_upgrade:"Set the shape",stair_upgrade_hint:"Turns this into a stair with a shape (winding, L, U, spiral), build, railing and number of steps.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas:"Gas meter (optional)",energy_water:"Water meter (optional)",energy_meters_hint:"Gas and water show with the house's balance \u2013 in the energy bar and on the house card: a sensor with the flow now (m\xB3/h, l/min) or today's reading.",energy_gas_short:"Gas",energy_water_short:"Water",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_rest:"Common (rest)",energy_advanced:"Advanced energy mode",energy_advanced_on:"Use sub-meters",energy_show_unmetered:"Show unmetered use at sub-meters",energy_show_unmetered_hint:"A sub-meter's label then shows what its floors use and how much of it no placed device measures, e.g. \u201C500 W \xB7 450 W unmetered\u201D. Otherwise it shows the meter's reading.",energy_advanced_hint:"For sub-meters, e.g. one per flat behind a main meter: a meter can then hang off another one and feed its own floors. Off = the first meter is the grid connection, further ones are consumers.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Ps=()=>typeof x=="object"&&x||{},Zu=globalThis,Un=Zu.__nextfloorTexts??=new Map;function Hs(r){let e=r.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in Ps()?e:void 0}function Is(r){let e=Hs(r),t=e===void 0?void 0:Un.get(e);return t instanceof Promise?void 0:t}function jn(r,e){let t=Hs(r?.language??navigator.language);if(t===void 0)return!1;let n=Un.get(t);return n===void 0&&(n=fetch(new URL(`./lang/${t}.json?v=${Ps()[t]}`,import.meta.url)).then(i=>i.ok?i.json():{}).catch(()=>({})).then(i=>{Un.set(t,i&&typeof i=="object"?i:{})}),Un.set(t,n)),n instanceof Promise?(n.then(()=>e.requestUpdate()),!0):!1}function Ws(r,e){return Is(r)?.[e]}function E(r,e,t={}){let n=r?.language??navigator.language,i=n.startsWith("de"),o=(i?void 0:Is(n)?.[e])??(i?Fs:Ds)[e]??Ds[e]??Fs[e]??e;for(let[s,a]of Object.entries(t))o=o.replace(`{${s}}`,String(a));return o}function O(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var Ns={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},qn=r=>Ns[r];function ke(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function bt(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ns[r]}"/></svg>`}function Os(r,e,t){let n=e.color_entity&&e.color_entity!=="none"?e.color_entity:t;return n?r.states[n]:void 0}function Zn(r,e){if(r.animations_enabled===!1||e?.state!=="on")return;let t=e.attributes.effect;if(typeof t!="string"||!r.effect_animations||!Object.prototype.hasOwnProperty.call(r.effect_animations,t))return;let n=r.effect_animations[t];return n==="rainbow"||n==="pulse"||n==="flicker"||To(n)?n:void 0}var Ce=(r,e)=>E(r,e),Yu=(r,e)=>Ce(r,e?"state_on":"state_off");function Yn(r,e){let t=`state_${e}`,n=E(r,t);return n===t?e:n}var Ju=new Set(["door","window","opening","garage_door"]),Qu=new Set(["playing","paused","on","idle"]);function Xu(r,e){if(e.state!=="on")return Ce(r,"state_off");let t=e.attributes.brightness;return typeof t=="number"?`${Math.round(t/255*100)} %`:Ce(r,"state_on")}function Cs(r,e){let t=e.attributes.current_position,n=e.state==="opening"||e.state==="closing";return typeof t=="number"&&!n?`${t} %`:Yn(r,e.state)}function ed(r,e){let t=e.attributes.current_temperature,n=typeof t=="number"?`${O(r,t,1)} ${r?re(r):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${Ce(r,"state_off")}`:Ce(r,"state_off"):n??Yn(r,e.state)}function td(r,e){let t=[e.attributes.app_name,e.attributes.media_title,e.attributes.source].find(n=>typeof n=="string"&&n!=="");return Qu.has(e.state)&&t?t:Yn(r,e.state)}function nd(r,e){let t=e.state==="on";return Ju.has(String(e.attributes.device_class))?Ce(r,t?"state_open":"state_closed"):Ce(r,t?"state_detected":"state_clear")}function rd(r,e,t=new Date){let n=new Date(e.state);if(Number.isNaN(n.getTime()))return"\u2013";let i=r?.language??navigator.language,s=n.toDateString()===t.toDateString()?{hour:"2-digit",minute:"2-digit"}:{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"};return new Intl.DateTimeFormat(i,s).format(n)}function id(r,e){if(e.entity_id.startsWith("event."))return rd(r,e);let t=Number(e.state);if(!Number.isFinite(t))return e.state;let n=r?.entities?.[e.entity_id]?.display_precision??1,i=e.attributes.unit_of_measurement;return`${O(r,t,n)}${typeof i=="string"&&i?` ${i}`:""}`}function ee(r,e){if(!e||I(e))return Ce(r,"state_unavailable");switch(D(e.entity_id)){case"light":return Xu(r,e);case"switch":case"fan":return e.entity_id.startsWith("valve.")?Cs(r,e):Yu(r,e.state==="on");case"cover":return Cs(r,e);case"climate":return ed(r,e);case"media":return td(r,e);case"lock":return Yn(r,e.state);case"binary":return nd(r,e);case"sensor":return id(r,e);default:return""}}var od=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&W([e,t],n.points))??null;function hi(r,e){return!r||e==null||e===1?r:{...r,level:Math.min(1.5,Math.max(.02,r.level*e))}}function sd(r,e,t){let n=r.states[t.entity_id],i=D(t.entity_id)??pt(t.entity_id,n);if(!i||!n)return null;let o=t.outside?null:od(e,t.x,t.z),s=o?.area_id?r.areas?.[o.area_id]?.name:void 0,a={id:t.entity_id,floorId:e.id,roomId:o?.id??null,x:t.x,z:t.z,y:t.y??gt(i,fe(e,t.x,t.z),t.mount??null)+(i==="light"&&(t.mount??"ceiling")==="ceiling"?0:En(e,t.x,t.z)),lamp:i==="light"?t.mount??"ceiling":null,ceiling:fe(e,t.x,t.z),rotation:t.rotation??0,icon:t.icon?ke(t.icon):bt(i),name:t.name||C(r,t.entity_id,s),ownName:t.name||void 0,showName:!!t.show_name,text:ee(r,n),active:X(n),unavailable:I(n),glow:i==="light"?hi(Me(n),t.glow_scale):null,effect:i==="light"?Zn(t,n):void 0,show:t.marker??void 0,fixed:!!t.locked};return a.wedge=Ho({hass:r,entityId:t.entity_id,state:n},{floorId:e.id,roomId:a.roomId,x:a.x,z:a.z,y:a.y,rotation:a.rotation??0},t.plugin??void 0),pi(r,a,n,!!t.icon)}function pi(r,e,t,n){let i=Fo({hass:r,entityId:e.id,state:t});if(!i)return e;let o=i.icon&&!n?i.icon.trimStart().startsWith("<svg")?i.icon:ke(i.icon):e.icon;return{...e,icon:o,text:i.text??e.text,active:i.active??e.active}}function Ls(r,e){return e.floors.flatMap(t=>t.placements.map(n=>sd(r,t,n)).filter(n=>n!==null))}var Bs=r=>r.floors.flatMap(e=>e.placements.map(t=>t.entity_id));function me(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Vs(r,e){return r.callService(e.split(".")[0],"toggle",{entity_id:e})}function Us(r,e,t=!1){if(t)return!1;if(!Array.isArray(r.screens)||!r.screens.length)return!0;let n=(e??"").trim().toLocaleLowerCase();return!!n&&r.screens.some(i=>i.trim().toLocaleLowerCase()===n)}var wt=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=wt;function js(r){let e=`${r.time}|${r.message}`;return wt.has(e)?!1:(wt.add(e),wt.size>50&&wt.delete(wt.values().next().value),!0)}var qs=r=>Math.min(3e4,Math.max(6e3,r.split(/\s+/).length*600+2e3));function ad(){try{let r=globalThis.AudioContext??globalThis.webkitAudioContext;if(!r)return Promise.resolve();let e=new r,t=(n,i)=>{let o=e.createOscillator(),s=e.createGain();o.type="sine",o.frequency.value=n,s.gain.setValueAtTime(1e-4,e.currentTime+i),s.gain.exponentialRampToValueAtTime(.25,e.currentTime+i+.03),s.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+i+.9),o.connect(s).connect(e.destination),o.start(e.currentTime+i),o.stop(e.currentTime+i+1)};return t(880,0),t(660,.35),new Promise(n=>setTimeout(()=>{e.close().catch(()=>{}),n()},1400))}catch{return Promise.resolve()}}function ld(r,e){let t=globalThis.speechSynthesis,n=globalThis.SpeechSynthesisUtterance;if(!t||!n)return;let i=new n(e);i.lang=r.language||"en",t.cancel(),t.speak(i)}async function Zs(r,e){if(await ad(),e.audio)try{let t=e.audio.startsWith("/")&&r.hassUrl?r.hassUrl(e.audio):e.audio;await new Audio(t).play();return}catch{}ld(r,e.message)}function Ys(r,e){return r.connection.subscribeMessage(e,{type:"nextfloor/announcements/subscribe"}).then(t=>()=>{t().catch(()=>{})},()=>()=>{})}var Gs=/^(media_player|assist_satellite)\./;function cd(r,e){return e?Object.values(r.entities??{}).filter(t=>!t.hidden&&(t.area_id??(t.device_id?r.devices?.[t.device_id]?.area_id:null))===e).map(t=>t.entity_id):[]}function Ks(r,e){let t=r.states[e];return!t||t.state==="unavailable"?!1:e.startsWith("notify.")?r.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):t.state==="off"||t.state==="unknown"?!1:t.attributes.device_class!=="tv"}function ud(r,e,t){if(t.announce_speaker==="none")return null;if(t.announce_speaker)return t.announce_speaker;if(e&&t.points.length>=3){let o=[...e.placements.filter(s=>Gs.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&Gs.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>W([s.x,s.z],t.points)&&Ks(r,s.id));if(o)return o.id}let n=cd(r,t.area_id);for(let i of["assist_satellite.","notify.","media_player."]){let o=n.filter(s=>s.startsWith(i)&&Ks(r,s)).sort()[0];if(o)return o}return null}var Js=(r,e,t)=>ud(r,e,t)!==null,Qs=r=>!!r?.services?.nextfloor?.announce;var q=(r,e)=>[r[0]-e[0],r[1]-e[1]],xe=(r,e)=>[r[0]+e[0],r[1]+e[1]],ge=(r,e)=>[r[0]*e,r[1]*e],ce=(r,e)=>r[0]*e[0]+r[1]*e[1],Le=(r,e)=>r[0]*e[1]-r[1]*e[0],ze=r=>Math.hypot(r[0],r[1]),_e=r=>{let e=ze(r)||1;return[r[0]/e,r[1]/e]},fi=r=>[-r[1],r[0]],mi=r=>[r[1],-r[0]];function Xs(r){let e=r.heightEnd!==void 0;return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft,height:e?r.heightEnd:r.height,heightEnd:e?r.height:void 0}}function dd(r,e){let t=r.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function hd(r,e,t){if(r.a===e.b)return!1;let n=_e(q(t[r.b],t[r.a])),i=_e(q(t[e.b],t[e.a]));return Math.abs(Le(n,i))>1e-6||ce(n,i)<=0||r.free||e.free||r.heightEnd!==void 0||e.heightEnd!==void 0?!1:r.height===e.height&&r.exterior===e.exterior&&r.roomLeft===e.roomLeft&&r.roomRight===e.roomRight&&Math.abs(r.left-e.left)<=1e-9&&Math.abs(r.right-e.right)<=1e-9}function ea(r,e,t=new Set){let n=r.slice();for(;;){let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b])i.set(l,[...i.get(l)??[],a])});let o=null;for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]].b===s?n[a[0]]:Xs(n[a[0]]),c=n[a[1]].a===s?n[a[1]]:Xs(n[a[1]]);if(!hd(l,c,e))continue;let u={...l,b:c.b,sources:dd(l.sources,c.sources)};o=[...n.filter((d,p)=>p!==a[0]&&p!==a[1]),u];break}if(!o)return n;n=o}}function ta(r,e){let t=new Map;r.forEach((i,o)=>{let s=_e(q(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:ge(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((l,c)=>l.angle-c.angle);for(let l of o)n.set(l.key,{left:xe(s,ge(fi(l.d),l.left)),right:xe(s,ge(mi(l.d),l.right))});if(o.length<2)continue;let a=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;o.forEach((l,c)=>{let u=o[(c+1)%o.length],d=xe(s,ge(fi(l.d),l.left)),p=xe(s,ge(mi(u.d),u.right)),h=Le(l.d,u.d);if(Math.abs(h)<1e-4)return;let w=xe(d,ge(l.d,Le(q(p,d),u.d)/h));ze(q(w,s))>a||(n.get(l.key).left=w,n.get(u.key).right=w)})}return n}function na(r,e){let t=r.filter((n,i)=>ze(q(n,r[(i+1)%r.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((i,o)=>{let s=t[(o+t.length-1)%t.length],a=t[(o+1)%t.length],[l,c]=[q(i,s),q(a,i)];return Math.abs(Le(_e(l),_e(c)))<1e-7&&ce(l,c)>0});if(n===-1)return t;t=t.filter((i,o)=>o!==n)}}function pd(r){let e=[];return{points:e,idOf(t){let n=e.findIndex(i=>Math.abs(i[0]-t[0])<=r&&Math.abs(i[1]-t[1])<=r);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function fd(r,e){let t=[];for(let n of r){let i=n.points;if(i.length<3||Math.abs(Xe(i))<1e-6)continue;let o=Xe(i)>0,s=i.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(o?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function md(r,e,t){let n=[];for(let i of r){let[o,s]=[e[i.u],e[i.v]],a=q(s,o),l=ze(a),c=ge(a,1/l),u=e.map((p,h)=>({id:h,rel:q(p,o)})).filter(({id:p,rel:h})=>p!==i.u&&p!==i.v&&ce(h,c)>t&&ce(h,c)<l-t&&Math.abs(Le(c,h))<=t).map(({id:p,rel:h})=>({t:ce(h,c),id:p})).sort((p,h)=>p.t-h.t),d=[{t:0,id:i.u},...u,{t:l,id:i.v}];for(let p=0;p+1<d.length;p++){let[h,w]=[d[p],d[p+1]];n.push({u:h.id,v:w.id,room:i.room,edge:i.edge,t0:i.forward?h.t:l-w.t,t1:i.forward?w.t:l-h.t,forward:i.forward})}}return n}var ra=r=>({room_id:r.room,edge:r.edge,t0:r.t0,t1:r.t1});function gd(r,e){let t=new Map(r.map(a=>[a.id,a])),n=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;n.set(l,[...n.get(l)??[],a.t0].sort((c,u)=>c-u))}let i=a=>{let l=t.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(n.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},o=a=>{let l=t.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[d,p]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(p[0]-d[0],p[1]-d[1])}},s=a=>{let l=o(a);if(!l||l.length<1e-9){let u=i(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let d of a){let[p,h]=s(d),[w,g]=d===a[0]?[p,h]:[h,p];w!==null&&(l=Math.min(l,w)),g!==null&&(c=Math.min(c,g))}let u=a.map(d=>t.get(d.room)?.ceiling);if(u.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...u);l===1/0&&(l=d),c===1/0&&(c=d)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=t.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(n.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>i(l)===0)}}function ia(r){let e=t=>Math.round(t*1e6)/1e6;return r.a===void 0||r.b===void 0?r.a!==void 0?{height:e(r.a)}:r.b!==void 0?{height:e(r.b)}:{}:Math.abs(r.a-r.b)<1e-6?{height:e(r.a)}:{height:e(r.a),heightEnd:e(r.b)}}function _d(r,e,t,n){let i=gd(e,r),o=new Map;for(let l of r){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;o.set(c,[...o.get(c)??[],l])}let s=[],a=[];for(let l of o.values()){let c=l[0],u=l.find(p=>p!==c&&p.u===c.v&&p.v===c.u&&p.room!==c.room);for(let p of l)p!==c&&p!==u&&p.room!==c.room&&n.push(`overlap:${c.room}:${p.room}`);let d=u?[c,u]:[c];if(i.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let p=i.thicknessOf(d)??t.interior;s.push({a:c.u,b:c.v,left:p/2,right:p/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(ra),...ia(i.heightsOf(d))})}else s.push({a:c.u,b:c.v,left:0,right:i.thicknessOf(d)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[ra(c)],...ia(i.heightsOf(d))})}return{drafts:s,open:a}}function bd(r,e){let t=n=>_e(q(e[n.b],e[n.a]));for(let n of r){if(n.exterior||n.free)continue;let i=new Set;for(let s of[n.a,n.b])for(let a of r)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(Le(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?i.add("left"):a.roomLeft===n.roomRight&&i.add("right"));if(i.size!==1)continue;let o=n.left+n.right;[n.left,n.right]=i.has("left")?[0,o]:[o,0]}}var wd=(r,e)=>{let t=o=>Math.round(o*100),[n,i]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`};function vt(r,e,t=[]){let n=e.eps??.005,i=[],o=pd(n),s=fd(r,o),a=t.filter(y=>Math.hypot(y.b[0]-y.a[0],y.b[1]-y.a[1])>.05),l=a.map(y=>[o.idOf(y.a),o.idOf(y.b)]),c=new Set;for(let y of r){let S=y.points;S.length<3||(y.wall_splits??[]).forEach((A,_)=>{if(!A||_>=S.length)return;let $=S[_],H=q(S[(_+1)%S.length],$),F=ze(H);for(let N of A)N>n&&N<F-n&&c.add(o.idOf(xe($,ge(H,N/F))))})}let u=md(s,o.points,n),{drafts:d,open:p}=_d(u,r,e,i);bd(d,o.points);let h=d;a.forEach((y,S)=>{let[A,_]=l[S];if(A===_)return;let $=[(y.a[0]+y.b[0])/2,(y.a[1]+y.b[1])/2],H=r.find(N=>N.points.length>=3&&W($,N.points))?.id??null,F=(y.thickness??e.interior)/2;h.push({free:y.id,a:A,b:_,left:F,right:F,exterior:!1,roomLeft:H,roomRight:H,sources:[],height:typeof y.height=="number"&&y.height>0?y.height:void 0})});let w=ea(h,o.points,c),g=ta(w,o.points);return{walls:w.map((y,S)=>{let[A,_]=[o.points[y.a],o.points[y.b]],[$,H]=[g.get(`${S}:a`),g.get(`${S}:b`)],F=na([$.right,H.left,_,H.right,$.left,A],1e-6);return{id:wd(A,_),a:[A[0],A[1]],b:[_[0],_[1]],left:y.left,right:y.right,exterior:y.exterior,roomLeft:y.roomLeft,roomRight:y.roomRight,sources:y.sources,footprint:F,...y.free?{free:y.free}:{},...y.height!==void 0?{height:y.height}:{},...y.heightEnd!==void 0?{heightEnd:y.heightEnd}:{}}}),warnings:[...new Set(i)],open:p}}function oa(r,e,t){let n=r.points[e];return xe(n,ge(_e(q(r.points[(e+1)%r.points.length],n)),t))}function sa(r,e,t){if(r.wall){let i=t.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=_e(q(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,xe(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}var aa=(r,e)=>ce(q(e,r.a),_e(q(r.b,r.a)));function la(r,e,t){if(!e.wall)return vd(r,t.room,t.edge,e.offset);let n=r.find(i=>i.free===e.wall);return n?{wall:n,s:aa(n,oa(t.room,0,e.offset))}:null}function vd(r,e,t,n){for(let i of r)if(i.sources.some(s=>s.room_id===e.id&&s.edge===t&&n>=s.t0-1e-6&&n<=s.t1+1e-6))return{wall:i,s:aa(i,oa(e,t,n))};return null}var qt=r=>r&&r!=="none"?r:null,Zt=(r,e)=>{e&&!r.includes(e)&&r.push(e)},ca=r=>new Map(r.floors.flatMap(e=>e.furniture.filter(t=>t.type==="meter").map(t=>[t.id,t])));function ua(r,e){if(!r.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let t=ca(r),n=new Set([e.id]);for(let i=t.get(e.parent_meter);i;i=t.get(i.parent_meter??"")){if(n.has(i.id))return null;n.add(i.id)}return t.has(e.parent_meter)?e.parent_meter:null}function Yt(r){return new Set([...ca(r).values()].filter(e=>ua(r,e)).map(e=>e.id))}function Jn(r,e){return!r.energy.advanced||!e.parent_meter?null:Yt(r).has(e.parent_meter)?e.parent_meter:null}function da(r,e,t){let n=r.energy.show_unmetered?e.subMeters?.find(i=>i.id===t):void 0;return!n||n.use===null?null:{use:n.use,unmetered:n.unmetered!==null&&n.unmetered<n.use?n.unmetered:null}}function Re(r,e=t=>qt(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors.flatMap(i=>i.furniture)){let i=e(n),o=n.type==="meter"?ua(r,n):null;if(o)(t.subMeters??=[]).push({id:n.id,parent:o,power:i,invert:!!n.meter_invert,floors:n.meter_floors??[],solar:[],batteries:[]});else if(n.type==="meter")t.grid??=i,t.gridExport??=qt(n.export);else if(n.type==="inverter")Zt(t.solar,i);else if(n.type==="home_battery"){let s=qt(n.charge);Zt(t.battery,i),Zt(t.charge,s),Zt(t.soc,qt(n.soc)),(i||s)&&t.batteries.push({power:i,charge:s})}}for(let n of t.subMeters?r.floors.flatMap(i=>i.furniture):[]){let i=n.type==="inverter"||n.type==="home_battery"?t.subMeters?.find(a=>a.id===Jn(r,n)):void 0,o=i?e(n):null;i&&n.type==="inverter"&&Zt(i.solar,o);let s=qt(n.charge);i&&n.type==="home_battery"&&(o||s)&&i.batteries.push({power:o,charge:s})}return t}function j(r,e=!1){let t=r?Number(r.state):NaN;if(!Number.isFinite(t))return null;let n={kW:1e3,MW:1e6}[String(r.attributes.unit_of_measurement??"W")]??1;return e?-t*n:t*n}var yd=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power";function Te(r,e){if(yd(r,e))return e;let t=r.entities?.[e]?.device_id;if(!t)return null;let n=ri(r,t),i=n?Oe(r,e):null,o=Cn(r,t).filter(s=>s!==e);return(n?o.find(s=>i!==null&&Oe(r,s)===i):o[0])??null}function Jt(r,e){let{grid:t,solar:n,battery:i}=e.energy,o=new Set([t,n,i].filter(a=>!!a)),s=[];for(let a of e.floors)for(let l of a.placements){let c=Te(r,l.entity_id);!c||o.has(c)||(o.add(c),s.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,j(r.states[c])??0)}))}return s}var ha=r=>{let e=r.filter(t=>t!==null);return e.length?e.reduce((t,n)=>t+n,0):null};function kd(r,e,t){let n=e.grid??t.grid,i=n?j(r.states[n],e.grid_invert):null;if(!e.grid&&t.gridExport){let o=Math.max(0,j(r.states[t.gridExport])??0);return Math.max(0,i??0)-o}return i}function xd(r,e,t){return e.solar?j(r.states[e.solar]):t.solar.length?ha(t.solar.map(n=>j(r.states[n]))):null}function Qn(r,e,t){return e.charge?(e.power?Math.max(0,j(r.states[e.power])??0):0)-Math.max(0,j(r.states[e.charge])??0):e.power?j(r.states[e.power],t):null}function Sd(r,e,t){return e.battery?j(r.states[e.battery],e.battery_invert):ha(t.batteries.map(n=>Qn(r,n,e.battery_invert)))}function Qt(r,e,t,n=Re(e)){let i=e.energy,o=kd(r,i,n),s=xd(r,i,n),a=Sd(r,i,n),l=(i.battery_soc?[i.battery_soc]:n.soc).map(w=>Number(r.states[w]?.state)).filter(Number.isFinite),c=l.length?l.reduce((w,g)=>w+g,0)/l.length:null,u=i.tariff?r.states[i.tariff]:void 0,d=Number(u?.state),p=i.consumption?j(r.states[i.consumption]):null;p===null&&(o!==null||s!==null||a!==null)&&(p=(o??0)+Math.max(0,s??0)+(a??0)),p===null&&t.length>0&&(p=t.reduce((w,g)=>w+g.power,0));let h={grid:o,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:p===null?null:Math.max(0,p)};return n.subMeters?{...h,...$d(r,n,h.consumption,i.battery_invert,t)}:h}function $d(r,e,t,n,i){let o=e.subMeters??[],s=new Map;for(let p of o)for(let h of p.floors)s.has(h)||s.set(h,p.id);let a=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...o.flatMap(p=>[p.power,...p.solar,...p.batteries.flatMap(h=>[h.power,h.charge])])]),l=p=>i.filter(h=>s.get(h.floorId)===p&&!a.has(h.powerEntity)).reduce((h,w)=>h+w.power,0),c=new Map(o.map(p=>[p.id,p.power?j(r.states[p.power],p.invert):null])),u=o.map(p=>{let h=c.get(p.id)??null,w=p.solar.reduce((S,A)=>S+Math.max(0,j(r.states[A])??0),0),g=p.batteries.reduce((S,A)=>S+(Qn(r,A,n)??0),0),v=o.filter(S=>S.parent===p.id).reduce((S,A)=>S+(c.get(A.id)??0),0),y=h===null?null:Math.max(0,h+w+g-v);return{id:p.id,parent:p.parent,power:h,solar:w,battery:g,use:y,unmetered:y===null?null:Math.max(0,y-l(p.id))}}),d=u.reduce((p,h)=>p+(h.use??0),0);return{subMeters:u,rest:t===null?null:Math.max(0,t-d)}}var _i=Math.PI/180,ma=3,ga=.1,gi=1/6,_a=(r,e)=>[Math.sin((e+r)*_i),-Math.cos((e+r)*_i)],Md=["N","NE","E","SE","S","SW","W","NW"];function Ad(r,e,t){return ba(r,e,t).map(n=>n.normal)}function ba(r,e,t){let n=[];for(let i of r.openings){if(i.room_id!==e.id||i.type==="garage")continue;let o=sa(i,r.rooms,r.walls??[]),s=o?la(t,i,o):null;if(!s||!s.wall.exterior)continue;let{wall:a}=s,l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(l<1e-6)continue;let c=[-(a.b[1]-a.a[1])/l,(a.b[0]-a.a[0])/l],u=a.roomLeft===e.id?c:[-c[0],-c[1]];n.push({opening:i,normal:[-u[0],-u[1]]})}return n}function Ed(r,e){let t=((Math.atan2(r[0],-r[1])/_i-e)%360+360)%360;return Md[Math.round(t/45)%8]}var pa=new WeakMap;function wa(r,e){let t=pa.get(e);return t||(t=vt(e.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},e.walls??[]).walls,pa.set(e,t)),t}var fa=new WeakMap;function yt(r,e,t,n,i=new Date){let o=`${t.id}|${i.toISOString().slice(0,10)}|${r.settings.north??0}|${n.latitude},${n.longitude},${n.zone??""}`,s=fa.get(e);s||fa.set(e,s=new Map);let a=s.get(o);if(a)return a;let l=zd(r,e,t,n,i);return s.set(o,l),l}function zd(r,e,t,n,i){let o=r.settings.north??0,s=Ad(e,t,wa(r,e)),a=[...new Set(s.map(c=>Ed(c,o)))];if(!s.length)return{hours:0,facing:a};let l=0;for(let c=gi/2;c<24;c+=gi){let u=Qe(ut(c,n.zone,i),n.latitude,n.longitude);if(u.elevation<ma)continue;let d=_a(u.azimuth,o);s.some(p=>p[0]*d[0]+p[1]*d[1]>ga)&&l++}return{hours:Math.round(l*gi*10)/10,facing:a}}function va(r,e,t,n,i=new Date().getFullYear()){return Array.from({length:12},(o,s)=>yt(r,e,t,n,new Date(Date.UTC(i,s,15,12))).hours)}function ya(r,e,t,n,i=new Date){let o=Qe(i,n.latitude,n.longitude);if(o.elevation<ma)return[];let s=_a(o.azimuth,r.settings.north??0);return ba(e,t,wa(r,e)).filter(a=>a.normal[0]*s[0]+a.normal[1]*s[1]>ga).map(a=>a.opening)}var ka=r=>6.112*Math.exp(17.62*r/(243.12+r));function kt(r,e,t=4){if(r===null||e===null)return null;let n=Math.min(100,e*ka(r)/ka(r-t));return Math.round(Math.min(100,Math.max(0,(n-65)/20*100)))}function Xn(r,e,t){return t!==null&&t>=70?"mould":r!==null&&r>=1e3?"co2":e!==null&&e>=65?"humidity":null}function rt(r=new Date,e=50){let t=r.getMonth(),n=t>=4&&t<=8;return e<0?!n:n}function er(r,e,t,n=!1){let i=[];if(r!==null){let[s,a]=n?[22,26]:[20,23],l=r<s?s-r:r>a?r-a:0;i.push(Math.max(0,100-l*15))}if(e!==null){let s=e<40?40-e:e>60?e-60:0;i.push(Math.max(0,100-s*4))}if(t!==null&&i.push(Math.max(0,Math.min(100,100-(t-800)/600*100))),!i.length)return null;let o=i.reduce((s,a)=>s+a,0)/i.length;return Math.round(Math.min(o,Math.min(...i)+30))}var Rd={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[16,[.2,.45,1]],[20,[.15,.85,.75]],[22.5,[.95,.8,.3]],[26,[1,.28,.18]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[.95,.6,.2]],[45,[.3,.88,.5]],[60,[.2,.78,1]],[75,[.32,.4,.98]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.88,.5]],[800,[.98,.84,.3]],[1200,[1,.5,.2]],[1600,[.98,.25,.25]]]},mould:{deviceClass:"",unit:"%",stops:[[0,[.3,.88,.5]],[40,[.98,.84,.3]],[70,[1,.5,.2]],[100,[.75,.2,.55]]]},comfort:{deviceClass:"",unit:"",stops:[[0,[.98,.25,.25]],[40,[1,.5,.2]],[65,[.98,.84,.3]],[85,[.3,.88,.5]],[100,[.2,.8,.7]]]},power:{deviceClass:"power",unit:"W",stops:[[0,[.25,.4,.6]],[100,[.3,.88,.5]],[500,[.98,.84,.3]],[1500,[1,.5,.2]],[3e3,[.98,.25,.25]]]},sun:{deviceClass:"",unit:"h",stops:[[0,[.22,.3,.55]],[2,[.35,.6,.85]],[4,[.98,.84,.3]],[7,[1,.62,.2]],[10,[1,.42,.25]]]}},Td={deviceClass:"temperature",unit:"\xB0C",stops:[[19,[.2,.45,1]],[22.5,[.15,.85,.75]],[25.5,[.95,.8,.3]],[29,[1,.28,.18]]]};function tr(r,e=!1){return r==="temperature"&&e?Td:Rd[r]}var Fd=(r,e,t)=>[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t,r[2]+(e[2]-r[2])*t];function xa(r,e,t=!1){let{stops:n}=tr(r,t),i=n.findIndex(([c])=>e<=c);if(i===-1)return n[n.length-1][1];if(i===0)return n[0][1];let[o,s]=n[i-1],[a,l]=n[i];return Fd(s,l,(e-o)/(a-o))}function bi(r,e,t,n){let i=null;for(let o of wi(r,e,t,n)){let s=j(r.states[o]);s!==null&&(i=(i??0)+Math.max(0,s))}return i}function wi(r,e,t,n){let{grid:i,solar:o,battery:s}=e.energy,a=new Set([i,o,s].filter(Boolean)),l=new Set,c=(u,d)=>n.points.length>=3&&W([u,d],n.points);for(let u of t.placements){let d=c(u.x,u.z)?Te(r,u.entity_id):null;d&&l.add(d)}for(let u of t.furniture){if(!c(u.x,u.z))continue;let d=u.power&&u.power!=="none"?u.power:u.entity&&u.entity!=="none"?Te(r,u.entity):null;d&&l.add(d);for(let p of u.gang_entities??[]){let h=p&&p!=="none"?Te(r,p):null;h&&l.add(h)}}return[...l].filter(u=>!a.has(u))}function Sa(r,e,t){let n=new Map;for(let i of e.floors)for(let o of i.rooms){if(t==="power"){let a=bi(r,e,i,o);a!==null&&n.set(o.id,a);continue}if(t==="comfort"){let a=er(J(r,i,o,"temperature"),J(r,i,o,"humidity"),J(r,i,o,"co2"),rt(new Date,r.config?.latitude));a!==null&&n.set(o.id,a);continue}if(t==="sun"){let{latitude:a,longitude:l,time_zone:c}=r.config??{};if(a===void 0||l===void 0||i.layer)continue;n.set(o.id,yt(e,i,o,{latitude:a,longitude:l,zone:c}).hours);continue}let s=t==="mould"?kt(J(r,i,o,"temperature"),J(r,i,o,"humidity")):J(r,i,o,t);s!==null&&n.set(o.id,s)}return n}function $a(r,e=!1){let{stops:t}=tr(r,e),n=t[0][0],i=t[t.length-1][0]-n;return`linear-gradient(90deg, ${t.map(([s,a])=>`rgb(${a.map(l=>Math.round(l*255)).join(",")}) ${Math.round((s-n)/i*100)}%`).join(", ")})`}function Xt(r,e=0){let t=new Date(r);return t.setHours(0,0,0,0),t.setDate(t.getDate()-e),t.getTime()}function Dd(r,e,t){let n=Array.from({length:7},(u,d)=>Xt(t,6-d)),i=u=>Math.min(24,Math.max(0,(Math.min(t,u+864e5)-u)/36e5)),o=(u,d)=>{if(!u)return null;let p=(r[u]??[]).find(h=>Math.abs(new Date(h.start).getTime()-d)<3*36e5);return typeof p?.mean=="number"?p.mean:null},s=(u,d,p=1)=>{let h=u.map(w=>o(w,d)).filter(w=>w!==null);return h.length?h.reduce((w,g)=>w+g,0)*p:null},a=(u,d)=>u===null?null:Math.round(u*i(d)/1e3*10)/10,l=n.map(u=>a(s(e.solar,u),u)),c=n.map(u=>{if(e.consumption)return a(o(e.consumption,u),u);let d=[s(e.solar,u),s(e.grid?[e.grid]:[],u,e.gridInvert?-1:1),s(e.battery,u,e.batteryInvert?-1:1)];return d.every(p=>p===null)?null:a(Math.max(0,d.reduce((p,h)=>p+(h??0),0)),u)});return{days:n,solar:l,use:c}}async function Ma(r,e,t=Date.now()){let n=[...new Set([...e.solar,...e.battery,e.grid,e.consumption].filter(s=>!!s))];if(!n.length)return null;let i=await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(Xt(t,6)).toISOString(),end_time:new Date(t).toISOString(),statistic_ids:n,period:"day",types:["mean"],units:{power:"W"}}),o=Dd(i,e,t);return o.solar.some(s=>s!==null)||o.use.some(s=>s!==null)?o:null}var Pd=864e5,Aa=36e5;function Hd(r){let e=new Date(Xt(r));return e.setDate(1),e.getTime()}function Id(r,e,t){let n=Xt(t),[i,o,s]=[0,0,!1];for(let l of e)for(let c of r[l]??[]){if(typeof c.mean!="number")continue;let u=new Date(c.start).getTime(),d=Math.min(24,Math.max(0,(Math.min(t,u+Pd)-u)/Aa)),p=Math.max(0,c.mean)*d/1e3;o+=p,Math.abs(u-n)<3*Aa&&(i+=p),s=!0}let a=l=>Math.round(l*100)/100;return s?{today:a(i),month:a(o)}:null}async function Ea(r,e,t=Date.now()){if(!e.length)return null;let n=await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(Hd(t)).toISOString(),end_time:new Date(t).toISOString(),statistic_ids:[...e],period:"day",types:["mean"],units:{power:"W"}});return Id(n,e,t)}function za(r,e){if(!e||!Number.isFinite(e.value))return null;let t=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!t)return null;let n=/^(ct|cent|cents|c)$/i.test(t[1]),i=n||/^eur$/i.test(t[1])?"\u20AC":t[1];return{value:Math.round(r*e.value*(n?1:100))/100,currency:i}}var Ta=20,Ra=new WeakMap;function Wd(r){let e=r.entities??{},t=Ra.get(e);if(!t){t=new Map;for(let[n,i]of Object.entries(e))i.device_id&&n.startsWith("sensor.")&&r.states[n]?.attributes.device_class==="battery"&&!t.has(i.device_id)&&t.set(i.device_id,n);Ra.set(e,t)}return t}function Nd(r,e){let t=r.entities?.[e]?.device_id,n=t?Wd(r).get(t):void 0;if(n){let s=Number(r.states[n]?.state);if(Number.isFinite(s))return s}let i=r.states[e]?.attributes;if(!i||i.battery_level===void 0&&i.battery===void 0)return null;let o=Number(i.battery_level??i.battery);return Number.isFinite(o)?o:null}function Od(r){let e=[],t=n=>typeof n=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(n);for(let n of r.placements)e.push({entity:n.entity_id,x:n.x,z:n.z,room:null});for(let n of r.furniture)for(let i of[n.entity,n.power])t(i)&&e.push({entity:i,x:n.x,z:n.z,room:null});for(let n of r.openings)for(let i of[n.contact,n.contact2,n.tilt,n.tilt2,n.cover,n.cover2,n.lock])t(i)&&e.push({entity:i,x:NaN,z:NaN,room:n.room_id});return e}var Cd=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&W([e,t],n.points));function Fa(r,e){let t=new Set,n=[];for(let i of e.floors)for(let o of Od(i)){let s=r.entities?.[o.entity]?.device_id??o.entity;if(t.has(s))continue;let a=Nd(r,o.entity);a!==null&&(t.add(s),n.push({entity:o.entity,level:a,floorId:i.id,roomId:o.room??Cd(i,o.x,o.z)?.id??null}))}return n.sort((i,o)=>i.level-o.level)}var Da=r=>r.toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),Ld=new Set(["","unknown","unavailable","not home","away"]);function Bd(r,e,t){let n=Da(t);if(Ld.has(n))return null;for(let i of e.floors)for(let o of i.rooms){let s=o.area_id?r.areas?.[o.area_id]?.name:void 0;if([o.name,o.area_id,s].map(l=>Da(l??"")).includes(n))return{floorId:i.id,room:o}}return null}function Vd(r){let e=r.split(/\s+/).filter(Boolean);return e.length===0?"?":(e.length===1?e[0].slice(0,2):e[0][0]+e[e.length-1][0]).toUpperCase()}function Gd(r,e){let[t,n]=Ne(r.points),i=e*1.15-Math.PI/2+.9;return[t+.75*Math.cos(i),n+.75*Math.sin(i)]}function Pa(r,e){let t=[],n=new Map;for(let{person:i,sensor:o}of e.presence){let s=r.states[i],a=o?r.states[o]:void 0;if(!s||!a||s.state!=="home"&&s.state!=="on")continue;let l=Bd(r,e,a.state);if(!l)continue;let c=n.get(l.room.id)??0;n.set(l.room.id,c+1);let[u,d]=Gd(l.room,c),p=String(s.attributes.friendly_name??i),h=s.attributes.entity_picture;t.push({id:i,name:p,initials:Vd(p),picture:typeof h=="string"?h:null,floorId:l.floorId,roomId:l.room.id,x:u,z:d})}return t}function Kd(r,e){let t=new Set;for(let n of e.rooms)for(let i of et(r,G(r,n)))D(i)==="light"&&t.add(i);for(let n of e.placements)D(n.entity_id)==="light"&&t.add(n.entity_id);return[...t].filter(n=>r.states[n]?.state==="on").length}function Ud(r,e,t){let n=o=>!!o&&r.states[o]?.state==="on",i=0;for(let o of e.openings){let s=t.get(o.id);if(s)if(o.type==="garage")(Ae(r,s,"garage").cover??1)<.95&&i++;else if(o.type==="door")(n(s.contact)||n(s.contact2))&&i++;else{let a=Ae(r,s,"window");Math.max(a.open,a.tilt,a.open2,a.tilt2)>.5&&i++}}return i}function Ha(r,e,t,n){return new Map(e.floors.map(i=>[i.id,{rooms:i.rooms.length,lightsOn:Kd(r,i),open:Ud(r,i,t),persons:n.filter(o=>o.floorId===i.id).length,power:i.power_entity?j(r.states[i.power_entity]):null,temps:jd(r,i)}]))}function jd(r,e){let t=e.rooms.map(n=>J(r,e,n,"temperature")).filter(n=>n!==null);return t.length>=2?[Math.min(...t),Math.max(...t)]:null}function Ia(r,e){let t=[e.rooms===1?E(r,"floor_rooms_one"):E(r,"floor_rooms",{n:e.rooms})];if(e.lightsOn>0&&t.push(E(r,"floor_lights",{n:e.lightsOn})),e.open>0&&t.push(E(r,"floor_open",{n:e.open})),e.persons>0&&t.push(E(r,"floor_persons",{n:e.persons})),e.temps&&r){let[n,i]=e.temps.map(o=>O(r,de(r,o),0));t.push(n===i?`${n} ${re(r)}`:`${n}\u2013${i} ${re(r)}`)}return e.power!=null&&t.push(`\u26A1 ${it(r,e.power)}`),t.join(" \xB7 ")}function it(r,e){let t=Math.abs(e);return t>=1e3?`${O(r,e/1e3,t>=1e4?1:2)} kW`:`${Math.round(e)} W`}function vi(r){let e=Math.max(0,Math.floor(r/6e4));return e<60?`${e} min`:`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")} h`}function nr(r){if(r.state!=="on")return{entity:r.entity_id,on:!1};let e=r.attributes,t={entity:r.entity_id,on:!0};typeof e.brightness=="number"&&(t.brightness=e.brightness);let n=String(e.color_mode??"");return Array.isArray(e.rgb_color)&&!["color_temp","brightness","onoff"].includes(n)?t.rgb=e.rgb_color.slice(0,3):typeof e.color_temp_kelvin=="number"&&(t.kelvin=e.color_temp_kelvin),t}function rr(r){let e=r.filter(n=>!n.on).map(n=>n.entity);return[...r.filter(n=>n.on).map(n=>({service:"turn_on",data:{entity_id:n.entity,...n.brightness!==void 0?{brightness:n.brightness}:{},...n.rgb?{rgb_color:n.rgb}:n.kelvin?{color_temp_kelvin:n.kelvin}:{}}})),...e.length?[{service:"turn_off",data:{entity_id:e}}]:[]]}function Wa(r,e){let t=[...r.lights].filter(n=>n.on).sort((n,i)=>(i.brightness??255)-(n.brightness??255))[0];return e.map((n,i)=>({...r.lights[i]??t??{entity:n,on:!1},entity:n}))}var qd=r=>r.slice(0,r.indexOf(".")),Zd=new Set(["switch","fan","input_boolean"]);function en(r){let e=[],t=new Map,n=[],i=[];for(let l of r){if(!l)continue;let c=qd(l.entity_id);c==="light"&&l.state==="on"?e.push(l):Zd.has(c)&&l.state==="on"?t.set(c,[...t.get(c)??[],l.entity_id]):c==="media_player"&&l.state==="playing"?n.push(l.entity_id):c==="media_player"&&(l.state==="on"||l.state==="idle")&&i.push(l.entity_id)}let o=[],s=[];e.length&&(o.push({domain:"light",service:"turn_off",data:{entity_id:e.map(l=>l.entity_id)}}),s.push(...rr(e.map(nr)).map(l=>({domain:"light",service:l.service,data:l.data}))));for(let[l,c]of t)o.push({domain:l,service:"turn_off",data:{entity_id:c}}),s.push({domain:l,service:"turn_on",data:{entity_id:c}});n.length&&(o.push({domain:"media_player",service:"media_pause",data:{entity_id:n}}),s.push({domain:"media_player",service:"media_play",data:{entity_id:n}})),i.length&&(o.push({domain:"media_player",service:"turn_off",data:{entity_id:i}}),s.push({domain:"media_player",service:"turn_on",data:{entity_id:i}}));let a=e.length+[...t.values()].reduce((l,c)=>l+c.length,0)+n.length+i.length;return{off:o,undo:s,count:a}}function Na(r){let e=new Set,t=n=>{typeof n=="string"&&/^(light|switch|fan|input_boolean|media_player)\./.test(n)&&e.add(n)};for(let n of r.placements)t(n.entity_id);for(let n of r.furniture){t(n.entity);for(let i of n.extra_lights??[])t(i)}return[...e]}var Yd=/^(light|switch|cover|binary_sensor|lock|media_player|vacuum|fan|climate|lawn_mower|input_boolean|person|device_tracker|alarm_control_panel)\./;var Oa=r=>[...new Set([...r].filter(e=>Yd.test(e)))].slice(0,200);function Jd(r){let e=new Map;for(let[t,n]of Object.entries(r)){let i={},o=[];for(let s of n)s.a&&(i=s.a),o.push({t:Math.round((s.lu??s.lc??0)*1e3),state:s.s,attributes:i});o.sort((s,a)=>s.t-a.t),e.set(t,o)}return e}async function tn(r,e,t,n,i=!1){if(e.length===0)return new Map;let o=await r.callWS({type:"history/history_during_period",start_time:new Date(t).toISOString(),end_time:new Date(n).toISOString(),entity_ids:e,include_start_time_state:!0,significant_changes_only:!1,minimal_response:i,no_attributes:i});return Jd(o)}function Qd(r,e){let[t,n]=[0,r.length-1],i=null;for(;t<=n;){let o=t+n>>1;r[o].t<=e?(i=r[o],t=o+1):n=o-1}return i}function xt(r,e,t){let n={...r.states};for(let[i,o]of e){let s=Qd(o,t);if(!s)continue;let a=r.states[i];n[i]={...a??{entity_id:i},entity_id:i,state:s.state,attributes:{...a?.attributes??{},...s.attributes}}}return{...r,states:n}}function Ca(r,e,t,n=400){let i=[];for(let s of r.values())for(let a=1;a<s.length;a++)s[a].state!==s[a-1].state&&s[a].t>=e&&s[a].t<=t&&i.push(s[a].t);if(i.sort((s,a)=>s-a),i.length<=n)return i;let o=i.length/n;return Array.from({length:n},(s,a)=>i[Math.floor(a*o)])}function La(r,e){let t=new Set,n=new Proxy(r.states,{get(i,o){return typeof o=="string"&&t.add(o),i[o]}});return e({...r,states:n}),[...t].filter(i=>i.includes(".")&&i in r.states)}function Ba(r,e,t,n,i,o=96){let s=[],a=[];for(let l=0;l<o;l++){let c=t+(n-t)*(l+1)/o,u=i(xt(r,e,c));s.push(u.solar),a.push(u.consumption)}return{solar:s,use:a}}function nn(r,e,t,n){if(n<=0||r.length<2)return"";let i="",o=!1;return r.forEach((s,a)=>{if(s===null){o=!1;return}let l=a/(r.length-1)*e,c=t-Math.max(0,Math.min(n,s))/n*t;i+=`${o?"L":"M"}${l.toFixed(1)},${c.toFixed(1)}`,o=!0}),i}var Se=te`
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
`,ir=te`
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
`,Be=te`
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
`;function or(r){return r?.themes?.darkMode===!1?"light":"dark"}var Xd=4,eh=8,th=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],St=r=>f`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${qn(r)} />
  </svg>`,sr={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},yi=r=>f`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,nh=24,rh=10,ki=class extends ne{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},phrases:{attribute:!1},outside:{attribute:!1},_showAll:{state:!0},_said:{state:!0},_folded:{state:!0},_curve:{state:!0},_moodName:{state:!0},_undo:{state:!0},_energy:{state:!0},_sunYear:{state:!0},rooms:{attribute:!1},building:{attribute:!1}};saidTimer;memo=null;curveFor="";undoTimer;constructor(){super(),this.room=null,this.floor=null,this.phrases=null,this.outside=null,this._said=null,this._showAll=!1,this._folded=!1,this._curve=null,this._moodName=null,this._undo=null,this._energy=null,this._sunYear=!1,this.rooms=null,this.building=null}fireMoods(e,t){this.dispatchEvent(new CustomEvent("mood-change",{detail:{roomId:e.id,moods:t},bubbles:!0,composed:!0}))}runMood(e){for(let t of rr(e))this.call("light",t.service,t.data)}renderMoods(e,t){let n=e.moods??[],i=!!this.rooms&&!!this.hass.user?.is_admin;if(!n.length&&!i)return m;let o=(this.rooms??[]).filter(l=>l.id!==e.id&&l.area_id),s=l=>G(this.hass,l).filter(c=>c.startsWith("light.")),a=()=>{let l=(this._moodName??"").trim()||this.t("mood_new");this.fireMoods(e,[...n,{id:`mood_${Date.now().toString(36)}`,name:l,lights:t.map(nr)}]),this._moodName=null};return f`<div class="nf-rp-moods">
      ${n.map(l=>f`<span class="nf-rp-mood">
          <button class="nf-btn" title=${this.t("mood_set")} @click=${()=>this.runMood(l.lights)}>✨ ${l.name}</button>
          ${o.length?f`<select class="nf-rp-mood-to" aria-label=${this.t("mood_carry")} title=${this.t("mood_carry")} @change=${c=>{let u=c.target,d=o.find(p=>p.id===u.value);u.value="",d&&this.runMood(Wa(l,s(d)))}}>
                <option value="">→</option>
                ${o.map(c=>f`<option value=${c.id}>${c.name}</option>`)}
              </select>`:m}
          ${i?f`<button class="nf-btn nf-rp-small" aria-label=${this.t("delete")} @click=${()=>this.fireMoods(e,n.filter(c=>c.id!==l.id))}>✕</button>`:m}
        </span>`)}
      ${i?this._moodName===null?f`<button class="nf-btn nf-rp-small" title=${this.t("mood_save_hint")} @click=${()=>this._moodName=""}>＋ ${this.t("mood_save")}</button>`:f`<span class="nf-rp-mood"
            ><input type="text" maxlength="40" placeholder=${this.t("mood_new")} .value=${this._moodName} @input=${l=>this._moodName=l.target.value} @keydown=${l=>l.key==="Enter"&&a()} />
            <button class="nf-btn" @click=${a}>${this.t("mood_save")}</button></span
          >`:m}
    </div>`}async loadCurve(e){let t=Ln(this.hass,this.floor,e,"temperature"),n=t.length?t:G(this.hass,e).filter(s=>s.startsWith("climate."));if(!n.length)return;let i=Date.now(),o=i-24*36e5;try{let s=await tn(this.hass,n,o,i,!!t.length);if(this.room?.id!==e.id)return;let a=[];for(let l=1;l<=96;l++){let c=xt(this.hass,s,o+(i-o)*l/96),u=n.map(d=>d.startsWith("climate.")?Number(c.states[d]?.attributes.current_temperature):Number(c.states[d]?.state)).filter(Number.isFinite);a.push(u.length?u.reduce((d,p)=>d+p,0)/u.length:null)}this._curve=a.some(l=>l!==null)?a:null}catch{this._curve=null}}async loadEnergy(e){if(!this.floor||!this.building)return;let t=wi(this.hass,this.building,this.floor,e);try{let n=await Ea(this.hass,t);this.room?.id===e.id&&(this._energy=n)}catch{this._energy=null}}renderEmptyLights(e,t){if(!t.length||!this.room)return m;let n=G(this.hass,e).map(s=>this.hass.states[s]).filter(s=>!!s&&s.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(s.attributes.device_class)));if(!n.length||n.some(s=>s.state!=="off"))return m;let i=Math.max(...n.map(s=>Date.parse(String(s.last_changed??""))||0)),o=Math.floor((Date.now()-i)/6e4);return!i||o<rh?m:f`<div class="nf-rp-shade">
      <span>💡 ${this.t("empty_lights_hint",{n:t.length,min:o})}</span>
      <button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:t.map(s=>s.entity_id)})}>${this.t("empty_lights_off")}</button>
    </div>`}renderOpenWhileHeating(e){let t=this.room;if(!t||!this.floor)return m;let n=e.filter(a=>a.attributes.hvac_action==="heating"||a.state==="heat"&&a.attributes.hvac_action===void 0);if(!n.length)return m;let i=a=>!!a&&a!=="none"&&this.hass.states[a]?.state==="on",o=this.floor.openings.filter(a=>a.room_id===t.id&&[a.contact,a.contact2,a.tilt,a.tilt2].some(i));if(!o.length)return m;let s=()=>{for(let a of n)(a.attributes.hvac_modes??[]).includes("off")?this.call("climate","set_hvac_mode",{entity_id:a.entity_id,hvac_mode:"off"}):typeof a.attributes.min_temp=="number"&&this.call("climate","set_temperature",{entity_id:a.entity_id,temperature:a.attributes.min_temp})};return f`<div class="nf-rp-shade nf-rp-open-heat">
      <span>🪟 ${this.t("open_heating_hint",{n:o.length})}</span>
      <button class="nf-btn nf-rp-small" @click=${s}>${this.t("open_heating_off")}</button>
    </div>`}renderShade(){let e=this.room,{latitude:t,longitude:n}=this.hass.config??{};if(!e||!this.floor||!this.building||t===void 0||n===void 0)return m;let i=J(this.hass,this.floor,e,"temperature");if(i===null||i<nh)return m;let o=a=>{let l=a&&a!=="none"?this.hass.states[a]:void 0;if(!l||I(l))return!1;let c=l.attributes.current_position;return typeof c=="number"?c>30:l.state==="open"},s=[...new Set(ya(this.building,this.floor,e,{latitude:t,longitude:n}).flatMap(a=>[a.cover,a.cover2].filter(o)))];return s.length?f`<div class="nf-rp-shade">
      <span>☀ ${this.t("shade_hint",{n:s.length,temp:`${O(this.hass,de(this.hass,i),1)} ${re(this.hass)}`})}</span>
      <button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:s})}>${this.t("shade_close")}</button>
    </div>`:m}renderSunYear(){let e=this.room,{latitude:t,longitude:n}=this.hass.config??{};if(!e||!this.floor||!this.building||t===void 0||n===void 0)return m;let i={latitude:t,longitude:n};if(!yt(this.building,this.floor,e,{...i,zone:this.hass.config?.time_zone}).facing.length)return m;let s=f`<button class="nf-rp-sun-year" aria-expanded=${this._sunYear} title=${this.t("room_sun_year_hint")} @click=${()=>this._sunYear=!this._sunYear}>
      ☀ ${this.t("room_sun_year")}
    </button>`;if(!this._sunYear)return s;let a=va(this.building,this.floor,e,i),l=Math.max(1,...a),c=Array.from({length:12},(u,d)=>new Date(2026,d,15).toLocaleDateString(this.hass.language,{month:"narrow"}));return f`${s}
      <div class="nf-rp-sun-bars" role="img" aria-label=${a.map((u,d)=>`${c[d]} ${O(this.hass,u,1)} h`).join(", ")}>
        ${a.map((u,d)=>f`<span title=${`${O(this.hass,u,1)} h`}><i style=${`height:${Math.round(u/l*100)}%`}></i><b>${c[d]}</b></span>`)}
      </div>`}renderEnergy(){let e=this._energy;if(!e||e.month<=0)return m;let t=this.building?.energy.tariff,n=t?this.hass.states[t]:void 0,i=n?{value:Number(n.state),unit:String(n.attributes.unit_of_measurement??"")}:null,o=za(e.month,i),s=a=>`${O(this.hass,a,a<10?2:1)} kWh`;return f`<p class="nf-rp-facts nf-rp-energy" title=${this.t("room_energy_hint")}>
      ⚡ ${this.t("room_energy",{today:s(e.today),month:s(e.month)})}${o?` \xB7 ${O(this.hass,o.value,2)} ${o.currency}`:""}
    </p>`}renderCurve(){let e=this._curve;if(!e)return m;let t=e.filter(c=>c!==null),n=Math.min(...t),i=Math.max(...t),o=Math.max(1,i-n),s=e.map(c=>c===null?null:c-n+o*.1),a=nn(s,220,36,o*1.2),l=c=>`${O(this.hass,de(this.hass,c),1)}\xB0`;return f`<div class="nf-rp-curve" title=${this.t("room_curve_hint")}>
      <svg viewBox="0 0 220 36" preserveAspectRatio="none" aria-hidden="true">${Q`<path d=${a}></path>`}</svg>
      <span>24 h · ${l(n)} – ${l(i)}</span>
    </div>`}willUpdate(e){let t=e.get("room");e.has("room")&&t?.id!==this.room?.id&&(this._folded=!1,this._undo=null),this.room&&this.hass&&this.curveFor!==this.room.id&&(this.curveFor=this.room.id,this._curve=null,this._energy=null,this.loadCurve(this.room),this.loadEnergy(this.room))}updated(e){e.has("_folded")&&this.toggleAttribute("folded",this._folded)}t(e,t){return E(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}renderClean(e){let t=e.clean_entity,n=t?this.hass.states[t]:void 0;if(!t||!n)return m;let i=t.slice(0,t.indexOf(".")),o=()=>i==="script"?this.call("script","turn_on",{entity_id:t}):this.call(i,"press",{entity_id:t});return f`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" ?disabled=${I(n)} title=${this.t("room_clean_run_hint")} @click=${o}>🧹 ${this.t("room_clean_run")}</button></div>`}allOff(e){let t=en(e);for(let n of t.off)this.call(n.domain,n.service,n.data);this._undo=t.undo,clearTimeout(this.undoTimer),this.undoTimer=setTimeout(()=>this._undo=null,1e4)}undoAllOff(){for(let e of this._undo??[])this.call(e.domain,e.service,e.data);this._undo=null,clearTimeout(this.undoTimer)}renderAllOff(e){if(this._undo)return f`<div class="nf-rp-alloff"><span>${this.t("all_off_done")}</span><button class="nf-btn nf-rp-small" @click=${()=>this.undoAllOff()}>↶ ${this.t("all_off_undo")}</button></div>`;let{count:t}=en(e);return t<2?m:f`<div class="nf-rp-alloff"><button class="nf-btn nf-rp-small" title=${this.t("all_off_hint")} @click=${()=>this.allOff(e)}>⏻ ${this.t("all_off_n",{n:t})}</button></div>`}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return C(this.hass,e,this.areaName)}nameButton(e){return f`<button class="nf-rp-name" title=${this.t("details")} @click=${()=>me(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let i=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return f`<button
      class="nf-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${I(e)}
      @click=${i}
    ></button>`}outsideRoom=null;render(){let e=!this.room&&this.outside?this.outside:null;e&&!this.outsideRoom&&(this.outsideRoom={id:"nf-outside",name:this.t("outside_area"),area_id:null,points:[],floor_material:"grass"});let t=this.room??(e?this.outsideRoom:null);if(!t||!this.hass)return m;let n=e??G(this.hass,t),i=this.memo,{shown:o,more:s}=e?{shown:e,more:[]}:i&&i.entities===this.hass.entities&&i.floor===this.floor&&i.room===t?i:this.memo={entities:this.hass.entities,floor:this.floor,room:t,...this.floor?ys(this.hass,this.floor,t):{shown:n,more:[]}},a=ii(this.hass,s).map(_=>_.primary),l=a.length,c=this._showAll?[...o,...a]:o,u=_=>c.filter($=>_.includes(D($))).map($=>this.hass.states[$]),d=u(["light"]),p=u(["cover"]),h=u(["climate"]),w=u(["media"]),g=u(["switch","fan","lock"]),v=u(["sensor","binary"]),y=u(["scene","script"]),S=this.facts(h),A=d.filter(_=>_.state==="on");return f`<section class="nf-rp" aria-label=${t.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${S.length?f`<p class="nf-rp-facts">${S.join(" \xB7 ")}</p>`:m} ${this.renderEnergy()} ${this.renderSunYear()} ${this.renderShade()}
          ${this.renderOpenWhileHeating(h)} ${this.renderEmptyLights(t,A)}
          ${this.renderCurve()}
        </div>
        <button class="nf-rp-close" aria-label=${this.t(this._folded?"panel_unfold":"panel_fold")} title=${this.t(this._folded?"panel_unfold":"panel_fold")} aria-expanded=${this._folded?"false":"true"} @click=${()=>this._folded=!this._folded}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${this._folded?Q`<path d="M6 14l6-6 6 6" />`:Q`<path d="M6 12h12" />`}</svg>
        </button>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body" ?hidden=${this._folded}>
        ${this.renderAllOff([...d,...w,...g])}
        ${this.renderClean(t)}
        ${!t.area_id&&!e?f`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`:c.length?m:f`<p class="nf-rp-note">${this.t("panel_empty")}</p>`}
        ${y.length?this.section("panel_scenes",[f`<div class="nf-rp-scenes">
                  ${y.map(_=>f`<button
                      class="nf-btn"
                      ?disabled=${I(_)}
                      @click=${()=>this.call(D(_.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:_.entity_id})}
                    >
                      ${this.name(_.entity_id)}
                    </button>`)}
                </div>`]):m}
        ${d.length?this.section("panel_lights",[...d.map(_=>this.lightRow(_)),...t?[this.renderMoods(t,d)]:[]],f`${A.length<d.length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(_=>!I(_)).map(_=>_.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:m}${A.length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:A.map(_=>_.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:m}`):m}
        ${p.length?this.section("panel_covers",p.map(_=>this.coverRow(_)),p.length>1&&Pn(p,this.confirmEntities).length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:Pn(p,this.confirmEntities)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:Pn(p,this.confirmEntities)})}>
                      ${this.t("panel_all_close")}
                    </button>`:m):m}
        ${h.length?this.section("panel_climate",h.map(_=>this.climateRow(_))):m}
        ${w.length?this.section("panel_media",w.map(_=>this.mediaRow(_))):m}
        ${g.length?this.section("panel_switches",g.map(_=>this.switchRow(_))):m}
        ${v.length?this.section("panel_sensors",v.map(_=>this.sensorRow(_))):m}
        ${Qs(this.hass)&&Js(this.hass,this.floor,t)?this.announceSection(t):m}
        ${this.pluginSections(t,c)}
        ${l?f`<button class="nf-btn nf-rp-small nf-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:l})}
            </button>`:m}
      </div>
    </section>`}facts(e){let t=[],n=this.room;if(!n)return t;let i=(_,$)=>{let H=J(this.hass,this.floor,n,_);if(H===null)return null;if(_==="temperature")return`${O(this.hass,de(this.hass,H),1)} ${re(this.hass)}`;let F=Ln(this.hass,this.floor,n,_)[0],N=this.hass.states[F]?.attributes.unit_of_measurement??$;return`${O(this.hass,H,1)} ${N}`},o=e.find(_=>typeof _.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):o&&n.climate?.temperature!=="none"&&t.push(`${O(this.hass,o.attributes.current_temperature,1)} ${re(this.hass)}`);let a=i("humidity","%");a&&t.push(a);let l=this.floor&&this.building?bi(this.hass,this.building,this.floor,n):null;l!==null&&t.push(`\u26A1 ${it(this.hass,l)}`);let c=this.floor?this.floor.openings.filter(_=>_.room_id===n.id).flatMap(_=>[_.contact,_.contact2,_.tilt,_.tilt2]).map(_=>_&&_!=="none"?this.hass.states[_]:void 0).filter(_=>_?.state==="on").map(_=>Date.parse(String(_.last_changed??""))).filter(Number.isFinite):[];c.length&&t.push(`\u{1FA9F} ${this.t("open_since",{time:vi(Date.now()-Math.min(...c))})}`);let u=G(this.hass,n).map(_=>this.hass.states[_]).filter(_=>!!_&&_.entity_id.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(_.attributes.device_class)));if(u.length)if(u.some(_=>_.state==="on"))t.push(`\u{1F6B6} ${this.t("presence_now")}`);else{let _=Math.max(...u.map($=>Date.parse(String($.last_changed??""))||0));_>0&&t.push(`\u{1F6B6} ${this.t("presence_last",{time:vi(Date.now()-_)})}`)}let d=this.building?Fa(this.hass,this.building).filter(_=>_.roomId===n.id&&_.level<Ta):[];d.length&&t.push(`\u{1FAAB} ${this.t("battery_low_n",{n:d.length,names:d.map(_=>`${this.name(_.entity)} ${Math.round(_.level)} %`).join(", ")})}`);let p=(this.building?.settings.circuits??[]).filter(_=>_.rooms.includes(n.id)).map(_=>_.name);p.length&&t.push(`\u{1F50C} ${p.join(", ")}`);let{latitude:h,longitude:w,time_zone:g}=this.hass.config??{};if(this.floor&&h!==void 0&&w!==void 0&&this.building){let _=yt(this.building,this.floor,n,{latitude:h,longitude:w,zone:g});_.facing.length&&t.push(`\u2600 ${this.t("room_sun_hours",{h:O(this.hass,_.hours,1),facing:_.facing.join(", ")})}`)}let v=J(this.hass,this.floor,n,"temperature"),y=J(this.hass,this.floor,n,"humidity"),S=Xn(J(this.hass,this.floor,n,"co2"),y,kt(v,y));S&&t.push(`\u{1F4A8} ${this.t(`air_${S}`)}`);let A=er(v,y,J(this.hass,this.floor,n,"co2"),rt(new Date,this.hass.config?.latitude));return A!==null&&(v!==null||y!==null)&&t.push(`\u{1F60A} ${this.t("comfort_n",{n:A})}`),t}announceSection(e){let t=this.phrases?.length?this.phrases:[1,2,3,4,5].map(o=>this.t(`announce_phrase_${o}`)),n=o=>{let s=o.trim();s&&(clearTimeout(this.saidTimer),this.hass.callService("nextfloor","announce",{message:s,rooms:[e.id],on_screens:!1}).then(()=>this._said={text:this.t("announce_sent",{message:s}),failed:!1},a=>this._said={text:this.t("announce_failed",{error:a?.message??String(a)}),failed:!0}),this.saidTimer=setTimeout(()=>this._said=null,6e3))},i=o=>{o.preventDefault();let s=o.currentTarget.querySelector("input");n(s.value),s.value=""};return this.section("panel_announce",[f`<div class="nf-rp-scenes">${t.map(o=>f`<button class="nf-btn" @click=${()=>n(o)}>${o}</button>`)}</div>
        <form class="nf-rp-say" @submit=${i}>
          <input type="text" maxlength="500" placeholder=${this.t("announce_placeholder")} aria-label=${this.t("announce_placeholder")} />
          <button class="nf-btn nf-primary" type="submit">${this.t("announce_send")}</button>
        </form>
        ${this._said?f`<p class="nf-rp-note ${this._said.failed?"nf-rp-fail":""}" role="status">${this._said.text}</p>`:m}`])}pluginSections(e,t){return Wo({hass:this.hass,room:{id:e.id,name:e.name,area_id:e.area_id??null},entities:t}).map(i=>f`<div class="nf-rp-sec nf-rp-plugin" data-plugin=${i.key}>
        <div class="nf-rp-sec-head"><h3>${i.title}</h3></div>
        ${typeof i.content=="string"?f`<p class="nf-rp-note">${i.content}</p>`:i.content}
      </div>`)}section(e,t,n=m){return f`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],o=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,u=t.max_color_temp_kelvin??6500,d=e.entity_id;return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n?"nf-rp-on":""}">${St("light")}</span>
      ${this.nameButton(d)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&o?f`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(p.target.value)})}
          /></label>`:m}
      ${n&&s?f`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${u}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:m}
      ${n&&a?f`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${th.map(p=>f`<button
                class="nf-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:p})}
              ></button>`)}
          </div>`:m}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,i=e.entity_id,o=I(e)&&!Bt(e);return f`<div class="nf-rp-row">
      <span class="nf-rp-icon">${St("cover")}</span>
      ${this.nameButton(i)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&eh?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:m}
        <button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&Xd&&typeof t.current_position=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:m}
      ${n&128&&typeof t.current_tilt_position=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:n&48?f`<div class="nf-rp-buttons">
              ${n&16?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:m}
              ${n&32?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:m}
            </div>`:m}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,o=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=u=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(u/o)*o))});return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t.hvac_action==="heating"?"nf-rp-on":""}">${St("climate")}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${i!==null?f`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${O(this.hass,i,1)} ${re(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+o)}>+</button>
          </div>`:m}
      ${l.length>1?f`<div class="nf-rp-chips">
            ${l.map(u=>f`<button
                class="nf-chip"
                aria-pressed=${e.state===u}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:u})}
              >
                ${this.stateLabel(u)}
              </button>`)}
          </div>`:m}
    </div>`}stateOf(e,t=ee(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=D(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=I(e)||e.state==="off",o=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${e.state==="playing"?"nf-rp-on":""}">${St("media")}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${o?f`<p class="nf-rp-media nf-rp-wide">${o}</p>`:m}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${yi(sr.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${I(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${yi(e.state==="playing"?sr.pause:sr.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${yi(sr.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:m}
    </div>`}switchRow(e){let t=e.entity_id,n=D(t),i=t.slice(0,t.indexOf(".")),o=n==="lock"?e.state==="unlocked"||e.state==="open":X(e),s=()=>n==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${o?"nf-rp-on":""}">${St(n)}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,o,s)}
    </div>`}sensorRow(e){let t=D(e.entity_id),n=t==="binary"&&e.state==="on";return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n?"nf-rp-on":""}">${St(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Se,Be,te`
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
    `]};customElements.get("nf-room-panel")||customElements.define("nf-room-panel",ki);function Va(r){if(!r)return"";let e=Math.min(.8,Math.max(0,r.dim??.35)),t=r.image&&/^(https:\/\/|\/local\/|\/api\/)[^"'()\\\s]+$/.test(r.image)?r.image:null,n=r.color&&/^#[0-9a-f]{6}$/i.test(r.color)?r.color:null;return t?`;background:linear-gradient(rgba(0,0,0,${e}),rgba(0,0,0,${e})),center / cover no-repeat url("${t}")${n?` ${n}`:""}`:n?`;background:${n}`:""}var ih=[[/spotify/i,[30,215,96]],[/netflix/i,[229,9,20]],[/youtube/i,[255,0,51]],[/prime|amazon/i,[0,168,225]],[/disney/i,[17,60,207]],[/apple ?music|itunes/i,[250,45,72]],[/apple ?tv/i,[200,200,210]],[/plex/i,[229,160,13]],[/tidal/i,[0,255,255]],[/deezer/i,[162,56,255]],[/radio|tunein/i,[255,140,60]]],Ga=[34,211,238];function xi(r){return r?ih.find(([e])=>e.test(r))?.[1]??Ga:Ga}function Si(r){if(r.state==="playing"||r.state==="paused")return!0;let e=t=>typeof r.attributes[t]=="string"&&r.attributes[t]!=="";return r.state==="on"&&(e("media_title")||e("media_channel")||e("source")||e("app_name"))}var $i=r=>r.state==="playing"||r.state==="on"&&Si(r);function Ka(r,e){let t=[],n=new Set;for(let i of e){if(!i.entity.startsWith("media_player.")||n.has(i.entity))continue;n.add(i.entity);let o=r.states[i.entity];if(!o)continue;let s=o.attributes,a=u=>typeof s[u]=="string"?s[u]:"",l=a("app_name")||a("source")||a("app_id")||null,c=typeof s.volume_level=="number"?s.volume_level:null;t.push({entity:i.entity,name:i.name,at:i.at,playing:$i(o),title:a("media_title")||a("media_channel")||l||"",artist:a("media_artist")||a("media_album_name")||a("media_series_title"),picture:a("entity_picture")||null,volume:c,color:xi(l),app:l,group:Array.isArray(s.group_members)?s.group_members.filter(u=>typeof u=="string"&&u!==i.entity):[]})}return t}function Ua(r){let e=new Map(r.filter(i=>i.playing).map(i=>[i.entity,i])),t=[],n=new Set;for(let i of e.values())for(let o of i.group){let s=e.get(o),a=[i.entity,o].sort().join("|");s&&!n.has(a)&&(n.add(a),t.push([i,s]))}return t}var oh=3;function ja(r,e,t){let n=[];for(let i of e.floors)for(let o of i.furniture){if(!o.type.endsWith(":sprinkler"))continue;let s=t?.get(o.id)?.entity??null;!s||!X(r.states[s])||n.push({id:o.id,at:{floorId:i.id,x:o.x,y:se(i,o)+o.h,z:o.z},reach:Math.min(15,Math.max(.5,o.spray??oh))})}return n}var ar=r=>r&&r!=="none"?r:null,qa=r=>Math.min(1,Math.max(0,r));function Za(r,e){let t=new Map;for(let n of e.settings.roof?.windows??[]){let i=Ae(r,{cover:ar(n.cover),contact:ar(n.contact),tilt:ar(n.tilt)},"window"),o=ar(n.window),s=o?r.states[o]:void 0,a=i.open;if(s&&!I(s)){let l=s.attributes.current_position;a=typeof l=="number"?qa(l/100):s.state==="open"||s.state==="opening"?1:0}t.set(n.id,{open:a,tilt:i.tilt,cover:i.cover??0})}return t}function sh(r,e){let t=i=>Math.hypot(i.x-e.x,i.z-e.z);return r.placements.filter(i=>i.entity_id.startsWith("media_player.")&&t(i)<Math.max(2,e.w)).sort((i,o)=>t(i)-t(o))[0]?.entity_id??null}var Ve=(r,e)=>typeof r[e]=="string"?r[e]:"";function Ya(r,e,t){let n=[];for(let i of e.floors)for(let o of i.furniture){if(!Vn(o.type))continue;let s=t?.get(o.id)?.entity??null,a=s?.startsWith("media_player.")?s:sh(i,o),l=a?r.states[a]:void 0;if(!l||!Si(l))continue;let c=l.attributes,u=Ve(c,"app_name")||Ve(c,"source")||null;n.push({id:o.id,furnitureId:o.id,floorId:i.id,color:xi(u),title:Ve(c,"media_title")||Ve(c,"media_channel")||u||"",subtitle:Ve(c,"media_artist")||Ve(c,"media_series_title")||Ve(c,"media_album_name"),app:u,picture:Ve(c,"entity_picture")||null,playing:$i(l),ambilight:o.ambilight??1})}return n}function Ja(r){let e=r.states["sun.sun"]?.attributes;return typeof e?.elevation=="number"&&typeof e.azimuth=="number"?{elevation:e.elevation,azimuth:e.azimuth}:null}function Qa(r,e){return(r===null?0:qa((r+4)/16))*(1-.45*e)}function $t(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var lr=new Set(["contact_lost","unlocked_night","own"]);function ah(r,e){let t=r.states[e.entity];if(!t||["unavailable","unknown"].includes(t.state))return!1;let n=(e.state??"on").trim(),i=/^([<>])\s*(-?\d+(?:[.,]\d+)?)$/.exec(n);if(i){let o=Number(t.state),s=Number(i[2].replace(",","."));return Number.isFinite(o)&&(i[1]==="<"?o<s:o>s)}return n.split(",").map(o=>o.trim().toLowerCase()).filter(Boolean).includes(String(t.state).toLowerCase())}var lh=600*1e3,ch=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),uh=new Map([["smoke","smoke"],["gas","gas"],["carbon_monoxide","co"],["moisture","water"]]),Xa=(r,e)=>{if(e.startsWith("binary_sensor."))return uh.get(String(r.states[e]?.attributes.device_class))};function dh(r,e){let t=new Set,n=[];for(let i of r.floors)for(let o of i.openings){let s=e.get(o.id);for(let a of s?[s.contact,s.contact2,s.tilt,s.tilt2]:[])!a||t.has(a)||(t.add(a),n.push({floorId:i.id,roomId:o.room_id,entity:a}))}return n}function el(r,e,t,n){let i=[];for(let a of e.floors)for(let l of a.rooms){let c=G(r,l).filter(u=>Xa(r,u));c.length>0&&i.push({floorId:a.id,roomId:l.id,sensors:c})}let o=e.settings.rain_warning!==!1,s=e.settings.rain_sensor;return{rooms:i,alarms:Object.keys(r.states).filter(a=>a.startsWith("alarm_control_panel.")),weather:o?$t(r,t??e.settings.weather_entity):null,rain:o&&s&&s!=="none"?s:null,outage:e.settings.outage_sensor&&e.settings.outage_sensor!=="none"?e.settings.outage_sensor:null,contacts:e.settings.contact_warning&&n?dh(e,n):[],own:(e.settings.own_alerts??[]).filter(a=>a.entity),locks:e.settings.night_lock_warning?e.floors.flatMap(a=>a.openings.filter(l=>l.lock&&l.lock!=="none").map(l=>({entity:l.lock,roomId:l.room_id,floorId:a.id}))):[]}}function tl(r){let e=r.rooms.flatMap(t=>t.sensors).concat(r.alarms);for(let t of[r.weather,r.rain,r.outage])t&&e.push(t);for(let t of r.contacts??[])e.push(t.entity);for(let t of r.own??[])e.push(t.entity);for(let t of r.locks??[])e.push(t.entity);return e}function hh(r,e){let t=[];for(let{floorId:n,roomId:i,sensors:o}of e.rooms)for(let s of o){let a=Xa(r,s);a&&r.states[s]?.state==="on"&&t.push({kind:a,entity:s,roomId:i,floorId:n})}return t}var ph=(r,e)=>{let t=Ae(r,e,"window");return Math.max(t.open,t.tilt,t.open2,t.tilt2)>=.5};function fh(r,e){if(e.rain){let n=r.states[e.rain];if(!n||n.state==="unavailable"||n.state==="unknown")return!1;let i=Number(n.state);return Number.isFinite(i)?i>0:n.state==="on"||/rain|regen|wet|nass/i.test(n.state)}let t=e.weather?r.states[e.weather]?.state:void 0;return!!t&&ch.has(t)}var mh=/^(off_grid|off-grid|outage|grid_down|grid_lost|islanding|island|backup|no_grid|stromausfall|netzausfall|inselbetrieb)$/i;function gh(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return!1;if(e.startsWith("binary_sensor.")){let i=String(t.attributes.device_class??"");return i==="power"||i==="plug"?t.state==="off":t.state==="on"}let n=Number(t.state);return Number.isFinite(n)?t.attributes.unit_of_measurement==="V"&&n<50:mh.test(t.state.trim())}function _h(r,e,t,n){if(!fh(r,t))return[];let i=[];for(let o of e.floors)for(let s of o.openings){let a=n.get(s.id);s.type!=="window"||s.rain_warning===!1||!a||!ph(r,a)||i.push({kind:"window_rain",entity:a.contact??a.tilt??a.contact2??s.id,roomId:s.room_id,floorId:o.id})}return i}var bh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","vibration","tamper","sound","glass"]);function wh(r,e){let t=r.states[e],n=t?.attributes.open_sensors;if(n&&typeof n=="object"){let a=Object.keys(n)[0];if(a)return a}let i=Date.parse(t?.last_changed??"");if(!Number.isFinite(i))return null;let o=null,s=12e4;for(let a of Object.values(r.states)){if(!a.entity_id.startsWith("binary_sensor.")||!bh.has(String(a.attributes.device_class??""))||a.state!=="on")continue;let l=Date.parse(a.last_changed??""),c=i-l;Number.isFinite(l)&&c>=-5e3&&Math.abs(c)<s&&(s=Math.abs(c),o=a.entity_id)}return o}function vh(r,e,t){for(let i of e.floors){let o=i.placements.find(a=>a.entity_id===t),s=o?i.rooms.find(a=>a.points.length>=3&&W([o.x,o.z],a.points)):void 0;if(s)return{roomId:s.id,floorId:i.id}}let n=Oe(r,t);for(let i of e.floors){let o=n?i.rooms.find(s=>s.area_id===n):void 0;if(o)return{roomId:o.id,floorId:i.id}}return null}function yh(r,e,t){let n=[];for(let i of e.alarms){let o=r.states[i]?.state;if(o==="triggered"){let s=wh(r,i),a=s?vh(r,t,s):null;n.push({kind:"alarm",entity:i,roomId:a?.roomId??null,floorId:a?.floorId??null,...s?{cause:s}:{}})}o==="pending"&&n.push({kind:"alarm_pending",entity:i,roomId:null,floorId:null})}return n}function kh(r,e,t){let n=r.states[e];if(n?.state!=="unavailable")return!1;let i=Date.parse(n.last_changed??"");return!Number.isFinite(i)||t-i>=lh}function nl(r,e){return(e.contacts??[]).some(t=>r.states[t.entity]?.state==="unavailable")}function xh(r,e,t){return(e.contacts??[]).filter(n=>kh(r,n.entity,t)).map(n=>({kind:"contact_lost",entity:n.entity,roomId:n.roomId,floorId:n.floorId}))}function Mi(r,e,t,n,i=Date.now()){let o=t.outage&&gh(r,t.outage)?[{kind:"power_outage",entity:t.outage,roomId:null,floorId:null}]:[],s=(t.own??[]).filter(u=>ah(r,u)).map(u=>{let d=u.room_id?e.floors.find(p=>p.rooms.some(h=>h.id===u.room_id)):void 0;return{kind:"own",entity:u.entity,roomId:d?u.room_id:null,floorId:d?.id??null,text:u.text,...u.color?{color:u.color}:{},...u.tap?{tap:u.tap}:{}}}),a=new Date(i).getHours(),c=a>=22||a<6?(t.locks??[]).filter(u=>r.states[u.entity]?.state==="unlocked").map(u=>({kind:"unlocked_night",entity:u.entity,roomId:u.roomId,floorId:u.floorId})):[];return[...hh(r,t),..._h(r,e,t,n),...yh(r,t,e),...o,...xh(r,t,i),...c,...s]}var Sh={smoke:[1,.2,.25],gas:[1,.2,.25],co:[1,.2,.25],alarm:[1,.2,.25],water:[.2,.6,1],window_rain:[.35,.72,1],alarm_pending:[1,.62,.2],power_outage:[1,.62,.2],contact_lost:[1,.62,.2],unlocked_night:[1,.62,.2],own:[1,.62,.2]},rl=r=>Sh[r];function Ai(r,e,t){let n=r?C(r,t.entity):t.entity,i=t.kind==="own"?t.text||n:t.cause?E(r,"alert_alarm_by",{name:n,cause:r?C(r,t.cause):t.cause}):E(r,`alert_${t.kind}`,{name:n}),o=t.roomId===null?void 0:e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId);return o?`${o.name} \xB7 ${i}`:i}var $h=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]),cr=r=>r&&r!=="none"?r:null,il=r=>r.trim().toLowerCase();function Mh(r,e){let t=il(e);if(!t||!r.types)return null;let n=r.types.map(s=>({word:il(s.state),vehicle:s.vehicle})),i=n.find(s=>s.word===t),o=n.find(s=>s.word!==""&&t.includes(s.word));return(i??o)?.vehicle??null}function Ei(r,e){if(e.type!=="parking")return null;let t=cr(e.entity);if(t!==null){let o=r.states[t]?.state;if(o===void 0||!$h.has(o.toLowerCase()))return null}let n=e.vehicle??null,i=cr(e.type_entity);return i!==null&&e.types&&e.types.length>0&&(n=Mh(e,r.states[i]?.state??"")??n),n!==null&&Y(n)?n:null}function zi(r,e){let t=new Map;for(let n of e.floors.flatMap(i=>i.furniture)){let i=Ei(r,n);i&&t.set(n.id,i)}return t}function ol(r){let e=[];for(let t of r.flatMap(n=>n.furniture))t.type==="parking"&&e.push(cr(t.entity),cr(t.type_entity));return e.filter(t=>t!==null)}function sl(r,e){let t=Y(e);if(!t)return null;let n=r.scale??1,[i,o,s]=t.size.map(a=>a*n);return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:i,d:o,h:s,variant:r.variant??null,entity:null,power:null}}var Ah=r=>!!r&&r!=="none",Ri=r=>r.floors.flatMap(e=>e.rooms),Eh=r=>r.floors.flatMap(e=>e.furniture);function zh(r){return[...r.values()].flatMap(e=>[e.cover,e.cover2,e.contact,e.tilt,e.contact2,e.tilt2,e.position,e.tiltAngle])}function Rh(r){let{hass:e,building:t,furnitureLinks:n}=r,i=Eh(t);return[...[...n.values()].flatMap(o=>[o.entity,o.power]),...i.flatMap(o=>[o.state_entity,o.state_entity2,o.color_entity,...o.gang_entities??[],...o.extra_lights??[],o.cover_entity,o.care_entity,o.room_sensor,o.show_when?.entity,o.picture&&/^[a-z_]+\.[a-z0-9_]+$/.test(o.picture)?o.picture:null]),...i.filter(o=>o.type==="washer"||o.type==="dryer"||o.type==="dishwasher").flatMap(o=>jt(e,n.get(o.id)?.entity??n.get(o.id)?.power).filter(s=>s.startsWith("sensor."))),...i.flatMap(o=>[o.door_left,o.door_right,o.soc,o.status,o.charge,o.export,o.temp_entity,o.temp_entity2]),...i.filter(o=>o.type==="robot_vacuum").map(o=>Gn(e,n.get(o.id)?.entity??null,o.room_sensor)),...i.flatMap(o=>(o.pictures??[]).flatMap(s=>[s.entity,...s.image.startsWith("camera:")?[s.image.slice(7)]:[]]))]}function Th(r){let e=r.settings.roof;return[...(e?.windows??[]).flatMap(t=>[t.cover,t.contact,t.tilt]),...(e?.solar??[]).map(t=>t.entity),...(e?.strings??[]).map(t=>t.entity)].filter(Ah)}function al(r){let{hass:e,building:t}=r,n=Bs(t),i=t.energy,o=Ri(t).flatMap(l=>G(e,l).filter(c=>D(c)==="light")),s=r.needsRoomSensors?Ri(t).flatMap(l=>G(e,l).filter(c=>c.startsWith("sensor.")||c.startsWith("climate."))):[],a=[...n,...zh(r.openingLinks),...n.map(l=>Te(e,l)),...n.flatMap(l=>e.states[l]?Do({hass:e,entityId:l,state:e.states[l]}):[]),...Rh(r),...Th(t),i.grid,i.solar,i.battery,i.battery_soc,i.consumption,i.tariff,i.gas,i.water,...t.presence.flatMap(l=>[l.person,l.sensor]),...o,...Ri(t).map(l=>l.floor_heating),...t.floors.flatMap(l=>(l.outdoor??[]).flatMap(c=>[c.temp_entity,c.pump_entity])),...s,...r.alertSources?tl(r.alertSources):[],...ol(t.floors),...ks(e,t.floors),$t(e,r.weatherEntityId??t.settings.weather_entity),"sun.sun"];return[...new Set(a.filter(l=>!!l))]}function ll(r,e){let t=r.floors.flatMap(s=>s.furniture.filter(a=>a.tap?.action).map(a=>({floor:s,item:a}))),n=new Set(t.map(({item:s})=>s.id)),i=new Map(e.filter(s=>s.furnitureId&&n.has(s.furnitureId)).map(s=>[s.id,s.furnitureId])),o=new Set(i.values());return{pins:i,bare:t.filter(({item:s})=>!o.has(s.id))}}var cl="https://tile.openstreetmap.org/{z}/{x}/{y}.png",Fh="\xA9 OpenStreetMap contributors";var Z_=Math.PI/180;var Dh=r=>r.url&&r.url.startsWith("https://")?r.url:cl;var ul=r=>!!r&&r.on===!0&&Number.isFinite(r.lat)&&Number.isFinite(r.lon);function Ti(r){let e=Dh(r);if(e===cl)return{text:Fh,href:"https://www.openstreetmap.org/copyright"};try{let t=new URL(e.replace(/\{[a-z]\}/g,"a")).host;return{text:`Map: ${t}`,href:`https://${t}/`}}catch{return{text:"Map",href:"#"}}}var Ph=["neon","blueprint","day"],ur=["auto",...Ph];function dr(r,e){return r!=="auto"?r??"neon":e==="above_horizon"?"day":"neon"}var rn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};function he(r,e){if(!jr(e))return E(r,`furn_${e}`);let t=Y(e);return t?Hh(t,e,r?.language??navigator.language):E(r,"pack_missing_item")}function Hh(r,e,t){return r.name[t.split("-")[0]]??Ws(t,e)??Ko(r,t)}var Ih={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.4},cloudy:{cloud:.85},fog:{fog:.9,cloud:.5},rainy:{rain:.5,cloud:.8},pouring:{rain:1,cloud:1,wind:.3},"lightning-rainy":{rain:.75,cloud:1,lightning:!0,wind:.35},lightning:{cloud:.85,lightning:!0},hail:{hail:.8,rain:.3,cloud:1},snowy:{snow:.7,cloud:.85},"snowy-rainy":{snow:.45,rain:.3,cloud:.95},windy:{wind:.7,cloud:.25},"windy-variant":{wind:.7,cloud:.65},exceptional:{cloud:.6,wind:.5}},Mt=r=>typeof r=="number"&&Number.isFinite(r)?r:typeof r=="string"&&r.trim()!==""&&Number.isFinite(Number(r))?Number(r):null,hr=r=>Math.min(1,Math.max(0,r));function dl(r,e){switch(e){case"m/s":return r*3.6;case"mph":return r*1.609;case"kn":return r*1.852;case"ft/s":return r*1.097;default:return r}}function Wh(r){let e=Mt(r);if(e!==null)return(e%360+360)%360;if(typeof r!="string")return null;let n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].indexOf(r.trim().toUpperCase().replace("O","E"));return n<0?null:n*22.5}function hl(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=Ih[t.state];if(!n)return null;let i=t.attributes,o={rain:n.rain??0,snow:n.snow??0,hail:n.hail??0,fog:n.fog??0,cloud:n.cloud??0,wind:n.wind??0,windFrom:Wh(i.wind_bearing),lightning:n.lightning??!1},s=Mt(i.cloud_coverage);s!==null&&(o.cloud=Math.max(hr(s/100),o.rain||o.snow?.6:0));let a=Mt(i.wind_speed);a!==null&&(o.wind=Math.max(o.wind,hr(dl(a,i.wind_speed_unit)/70)));let l=Mt(i.wind_gust_speed);l!==null&&(o.wind=Math.max(o.wind,hr(dl(l,i.wind_speed_unit)/100)));let c=Mt(i.precipitation);if(c!==null&&c>0&&(o.rain>0||o.snow>0)){let h=hr(.25+c/8);o.rain>0&&(o.rain=Math.max(o.rain*.6,h)),o.snow>0&&(o.snow=Math.max(o.snow*.6,h))}let u=Mt(i.temperature),d=i.temperature_unit??r.config?.unit_system?.temperature,p=u===null?null:d==="\xB0F"?(u-32)*5/9:u;return p!==null&&p<=.5&&o.rain>0&&o.snow===0&&(o.snow=o.rain*.6,o.rain*=.4),o}function pl(r,e){let t=e==null||!Number.isFinite(e)?1:Math.min(1,Math.max(.1,e));return t===1?r:{...r,rain:r.rain*t,hail:r.hail*t,snow:r.snow*t}}function fl(r,e){let t=new Set(e??["rain","snow","clouds","lightning","sky"]);return{...r,rain:t.has("rain")?r.rain:0,hail:t.has("rain")?r.hail:0,snow:t.has("snow")?r.snow:0,fog:t.has("fog")?r.fog:0,cloud:t.has("clouds")?r.cloud:0,lightning:t.has("lightning")&&r.lightning}}var pr=Math.PI/180,ot=r=>Math.tan(Math.min(80,Math.max(0,r))*pr);function ml(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function Nh(r){if(!r.rotation)return null;let e=r.rotation*pr;return{cx:(r.x0+r.x1)/2,cz:(r.z0+r.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function Oh(r,e){let t=Nh(r);if(!t)return e;let[n,i]=[e[0]-t.cx,e[1]-t.cz];return[t.cx+n*t.c-i*t.sn,t.cz+n*t.sn+i*t.c]}function Ge(r){let{x0:e,x1:t,z0:n,z1:i}=ml(r),o=s=>Oh(r,s);return r.axis==="x"?{u0:e,u1:t,w:i-n,at:(s,a)=>o([s,r.flip?i-a:n+a])}:{u0:n,u1:i,w:t-e,at:(s,a)=>o([r.flip?t-a:e+a,s])}}var on=Math.tan(30*pr);function fr(r,e,t,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=e+o*n,l=t+s*i,c=Math.min(r-s,Math.max(o,(l-a+on*(r-s+o))/(2*on))),u=a+(c-o)*on;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:p=>p<=o?e+p*n:p<=c?a+(p-o)*on:p<=r-s?l+(r-s-p)*on:t+(r-p)*i}}function At(r){let e=Ge(r).w,[t,n]=[r.eave_a,r.eave_b],[i,o]=[ot(r.pitch_a),ot(r.pitch_b)];switch(r.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*i,y:s=>t+s*i};case"mansard":{let s=fr(e,t,n,i,o);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2;return{vr:s,rh:t+s*i,y:a=>a<=s?t+a*i:n+(e-a)*o}}}}function Fi(r,e,t){let n=Ge(e),i=r.floors.flatMap(u=>u.rooms.filter(d=>d.points.length>=3&&u.elevation+u.height>e.base+.05)),o=u=>u.some(d=>i.some(p=>W(d,p.points))),s=.35,a=[.15,.5,.85].map(u=>n.u0+(n.u1-n.u0)*u),l=[.15,.5,.85].map(u=>n.w*u),c=u=>u?0:t;return{a:c(o(a.map(u=>n.at(u,-s)))),b:c(o(a.map(u=>n.at(u,n.w+s)))),u0:c(o(l.map(u=>n.at(n.u0-s,u)))),u1:c(o(l.map(u=>n.at(n.u1+s,u))))}}var be=Math.PI/180,Fe=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]];var Et=r=>Math.hypot(r[0],r[1],r[2]),st=r=>{let e=Et(r)||1;return[r[0]/e,r[1]/e,r[2]/e]},wl=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]];var yl=.25;function kl(r,e,t,n,i,o,s){let a=i-t>=o-n,l=a?i-t:o-n;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?o-n:i-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function xl(r,e){let t=st(wl(r,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var Sl=r=>{let e=st([-r[0],0,-r[2]]);return[e[0],e[2]]};function De(r,e,t,n,i,o,s,a){let l=st(Fe(i,n)),c=st(Fe(o,n));return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:xl(l,c),lu:Et(Fe(i,n)),ls:Et(Fe(o,n)),pitch:s,span:a,facing:Sl(c)}}function vl(r,e,t,n,i,o){let s=Et(Fe(i,n));if(s<.3)return null;let a=st(Fe(i,n)),l=Fe(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=Et(u);if(d<.3)return null;let p=st(u),h=w=>{let g=Math.min(1,Math.max(0,w/d));return[c*g,s-(s-c)*g]};return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:xl(a,p),lu:s,ls:d,pitch:Math.atan2(p[1],Math.hypot(p[0],p[2]))/be,span:h,facing:Sl(p)}}function Vh(r,e){let t=Ge(r),n=At(r),i=(S,A,_)=>{let[$,H]=t.at(S,A);return[$,_,H]},[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=n.y(-o),d=n.y(t.w+s);if(r.shape==="flat"||r.shape==="parapet"){let[S,A]=[t.at(a,-o),t.at(l,t.w+s)];return[kl(r.id,r.id,Math.min(S[0],A[0]),Math.min(S[1],A[1]),Math.max(S[0],A[0]),Math.max(S[1],A[1]),r.eave_a+yl)]}if(r.shape==="pent")return[De(`${r.id}:a`,r.id,"a",i(a,-o,u),i(l,-o,u),i(a,t.w+s,d),r.pitch_a,()=>[0,c])];if(r.shape==="mansard")return Gh(r,t,a,l,o,s);let p=r.shape==="hip"||r.shape==="pyramid",h=(t.u1-t.u0)/2,w=r.shape==="pyramid"?h:p?Math.min(h,Math.min(n.vr,t.w-n.vr)||t.w/2):0,g=p?t.u0+w-a:0,v=p?l-(t.u1-w):0,y=[];if(n.vr>.3){let S=Math.hypot(n.vr+o,n.rh-u);y.push(De(`${r.id}:a`,r.id,"a",i(a,-o,u),i(l,-o,u),i(a,n.vr,n.rh),r.pitch_a,A=>[g*(A/S),c-v*(A/S)]))}if(t.w-n.vr>.3){let S=Math.hypot(t.w+s-n.vr,n.rh-d);y.push(De(`${r.id}:b`,r.id,"b",i(l,t.w+s,d),i(a,t.w+s,d),i(l,n.vr,n.rh),r.pitch_b,A=>[v*(A/S),c-g*(A/S)]))}if(p){let S=vl(`${r.id}:c`,r.id,"c",i(a,t.w+s,d),i(a,-o,u),i(t.u0+w,n.vr,n.rh)),A=vl(`${r.id}:d`,r.id,"d",i(l,-o,u),i(l,t.w+s,d),i(t.u1-w,n.vr,n.rh));y.push(...[S,A].filter(_=>_!==null))}return y}function Gh(r,e,t,n,i,o){let s=fr(e.w,r.eave_a,r.eave_b,ot(r.pitch_a),ot(r.pitch_b)),a=(w,g)=>{let[v,y]=e.at(w,g);return[v,s.y(g),y]},l=n-t,c=()=>[0,l],u=(w,g)=>Math.atan2(w,g)/be,d=[],[p,h]=[e.w+o,e.w-s.vlb];return s.vla+i>.3&&d.push(De(`${r.id}:a`,r.id,"a",a(t,-i),a(n,-i),a(t,s.vla),r.pitch_a,c)),s.vr-s.vla>.3&&d.push(De(`${r.id}:au`,r.id,"a",a(t,s.vla),a(n,s.vla),a(t,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+o>.3&&d.push(De(`${r.id}:b`,r.id,"b",a(n,p),a(t,p),a(n,h),r.pitch_b,c)),h-s.vr>.3&&d.push(De(`${r.id}:bu`,r.id,"b",a(n,h),a(t,h),a(n,s.vr),u(s.rh-s.ylb,h-s.vr),c)),d}function mr(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function gr(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(A=>Vh(A,Fi(r,A,A.overhang??e.overhang)));let t=mr(r);if(!t)return[];let n=t.rooms.flatMap(A=>A.points.map(_=>_[0])),i=t.rooms.flatMap(A=>A.points.map(_=>_[1])),o=r.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...n)-o,Math.max(...n)+o],[l,c]=[Math.min(...i)-o,Math.max(...i)+o],u=t.elevation+t.height;if(e.type==="flat")return[kl("main",null,s,l,a,c,u+yl)];let d=a-s>=c-l,p=e.ridge==="short"?!d:d,h=(p?c-l:a-s)/2,w=h*Math.tan(e.pitch*be),g=(A,_,$)=>p?[A,u+$,(l+c)/2+_]:[(s+a)/2+_,u+$,A],[v,y]=p?[s,a]:[l,c],S=()=>[0,y-v];return[De("main:a",null,"a",g(v,-h,0),g(y,-h,0),g(v,0,w),e.pitch,S),De("main:b",null,"b",g(v,h,0),g(y,h,0),g(v,0,w),e.pitch,S)]}function sn(r,e){let t=[];for(let n of r.floors.filter(i=>!e||i.id===e)){let{walls:i}=vt(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let[s,a]=[o.b[0]-o.a[0],o.b[1]-o.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(n.height,o.height??n.height,o.heightEnd??1/0),p=(h,w,g,v)=>t.push({key:h,section:null,side:"top",flat:!1,o:w,eu:g,es:[0,1,0],n:v,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:{floorId:n.id}});p(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&p(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var zt="ground";function an(r){let e=r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function Di(r,e){let t=(e.rotation??0)*be,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=an(r),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Ct(o,s,a)):e.base??0;return{key:zt,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Pi(r,e,t=gr(r)){return e.face===zt?Di(r,e):e.face.startsWith("wall:")?sn(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}var Hi=1.13,Ii=1.72,Rt=.025,we=.07;function ln(r){let e=r.module_w||Hi,t=r.module_h||Ii;return r.portrait===!1?[t,e]:[e,t]}function Wi(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Ni(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*be:r.wall?Math.min(90,Math.max(0,e.tilt??0))*be:Math.min(45,Math.max(0,e.tilt??0))*be}function _r(r,e){let[,t]=ln(e),n=Ni(r,e);return r.wall?t*Math.cos(n)+Rt:!r.flat&&n<.001?t+Rt:r.flat&&e.rack==="ew"?t*Math.cos(n)+.08:t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n))}function Oi(r,e){let[t,n]=ln(e),i=Wi(e),o=Math.max(1,...i);return[o*t+(o-1)*Rt,(i.length-1)*_r(r,e)+n*Math.cos(Ni(r,e))]}var Kh=r=>r.flat&&!r.unbounded&&!r.wall;function Uh(r,e){if(!Kh(r)||!e.rotation)return null;let t=e.rotation*be,[n,i]=Oi(r,e);return{cos:Math.cos(t),sin:Math.sin(t),u:e.u+n/2,s:e.v+i/2}}function cn(r,e,t=!1){let[n,i]=ln(e),o=Ni(r,e),s=i*Math.cos(o),a=_r(r,e),l=Wi(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=Uh(r,e),p=(v,y)=>d?[d.u+(v-d.u)*d.cos-(y-d.s)*d.sin,d.s+(v-d.u)*d.sin+(y-d.s)*d.cos]:[v,y],h=(v,y,S)=>{let[A,_]=p(v,y);return[0,1,2].map($=>r.o[$]+r.eu[$]*A+r.es[$]*_+r.n[$]*S)},w=(v,y)=>{let[S,A]=p(v,y);if(r.unbounded)return!0;if(A<-1e-6||A>r.ls+1e-6)return!1;let[_,$]=r.span(A);return S>=_-1e-6&&S<=$+1e-6},g=[];return l.forEach((v,y)=>{let S=e.align==="right"?c-v:e.align==="center"?(c-v)/2:0;for(let A=0;A<v;A++){let _=`${y}:${A}`,$=u.has(_);if($&&!t)continue;let H=e.u+(A+S)*(n+Rt),F=H+n,N=e.v+y*a,z=N+(r.flat||r.wall||o>.001?s:i);if([[H,N],[F,N],[F,z],[H,z]].every(([k,P])=>w(k,P)))if(r.wall&&o>.001){let k=we+i*Math.sin(o),[P,B]=e.flip?[k,we]:[we,k],L=[h(H,N,P),h(F,N,P),h(F,z,B),h(H,z,B)],K=e.flip?N:z;g.push({corners:L,posts:[H+.05,F-.05].map(Z=>[h(Z,K,0),h(Z,K,k)]),cell:_,skipped:$})}else if(!r.flat&&o>.001){let k=we+i*Math.sin(o),P=[h(H,N,we),h(F,N,we),h(F,z,k),h(H,z,k)];g.push({corners:P,posts:[H+.05,F-.05].map(B=>[h(B,z,0),h(B,z,k)]),cell:_,skipped:$})}else if(!r.flat)g.push({corners:[h(H,N,we),h(F,N,we),h(F,z,we),h(H,z,we)],posts:[],cell:_,skipped:$});else{let P=.15+i*Math.sin(o),B=e.rack==="ew"&&y%2===1?!e.flip:!!e.flip,[L,K]=B?[z,N]:[N,z],Z=[h(H,L,.15),h(F,L,.15),h(F,K,P),h(H,K,P)],T=[H+.05,F-.05].flatMap(b=>[[h(b,L,0),h(b,L,.15)],[h(b,K,0),h(b,K,P)]]);g.push({corners:Z,posts:T,cell:_,skipped:$})}}}),g}var ve={solar:[255,196,46],battery:[74,222,128],import:[248,96,120],export:[56,220,245],house:[150,170,255],wallbox:[80,175,255]},Pe=15;function He(r,e){let t=[];for(let n of r.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,floorId:n.id,x:i.x,z:i.z,y:Math.max(.4,Math.min(1.4,i.h*.8))});return t}function Jh(r){if(!r?.rooms.length)return null;let e=0,t=0,n=0;for(let i of r.rooms)for(let[o,s]of i.points)e+=o,t+=s,n++;return n?{floorId:r.id,x:e/n,z:t/n,y:1}:null}function un(r){let e=Yt(r);return He(r,"meter").find(t=>!e.has(t.id))??He(r,"inverter")[0]??Jh(an(r))}function Qh(r,e){let t=He(r,"grid_point")[0];if(t)return t;let n=r.floors.find(a=>a.id===e.floorId);if(!n?.rooms.length)return null;let i=1/0,o=-1/0,s=-1/0;for(let a of n.rooms)for(let[l,c]of a.points)i=Math.min(i,l),o=Math.max(o,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(i,Math.min(o,e.x)),z:s+3,y:.2}}var Ci=r=>Math.max(1,r.rows*r.cols-(r.skip?.length??0));function Xh(r,e,t){let n=e.settings.roof.solar??[],i=new Map,o=0,s=[];for(let c of n){let u=c.entity&&c.entity!=="none"?j(r.states[c.entity]):null;u!==null?(i.set(c.id,Math.max(0,u)),o+=Math.max(0,u)):s.push(c)}let a=Math.max(0,(t??0)-o),l=s.reduce((c,u)=>c+Ci(u),0);for(let c of s)i.set(c.id,l?a*Ci(c)/l:0);return i}function ep(r,e){if(e.face===zt)return an(r)?.id??null;let t=/^wall:([^:]+):/.exec(e.face);return t?t[1]:mr(r)?.id??null}function $l(r,e,t=Jt(r,e),n){let i=n?Re(e,n):Re(e),o=Qt(r,e,t,i),s=[],a=[],l=un(e),c=o.consumption??0,u=o.grid===null||c<=0?null:Math.max(0,Math.min(1,1-Math.max(0,o.grid)/c));if(!l)return{arcs:s,sparks:a,summary:o,autarky:u};let d=new Map(e.floors.flatMap(k=>k.furniture).flatMap(k=>Jn(e,k)?[[k.id,Jn(e,k)]]:[])),p=He(e,"inverter").find(k=>!d.has(k.id))??l,h=new Map(He(e,"inverter").map(k=>[k.id,k])),w=new Map((e.settings.roof.strings??[]).map(k=>[k.id,k.inverter??null])),g=[...gr(e),...sn(e)],v=Xh(r,e,o.solar);for(let k of e.settings.roof.solar??[]){let P=Pi(e,k,g);if(!P)continue;let B=cn(P,k);if(!B.length)continue;let L=v.get(k.id)??0,K=Ci(k)*(k.wp??400),Z=L>Pe?Math.pow(Math.min(1,L/K),.6):0,T=ep(e,k);if(a.push({floorId:T,quads:B.map(Ue=>Ue.corners),level:Z}),L<=Pe)continue;let b=0,M=0,U=0;for(let Ue of B)for(let at of Ue.corners)b+=at[0],M+=at[1],U+=at[2];let R=B.length*4,V=e.floors.find(Ue=>Ue.id===T)?.elevation??0,ue=e.energy.advanced?h.get(w.get(k.string??"")??""):void 0;s.push({key:`solar:${k.id}`,from:{floorId:T,x:b/R,y:M/R-V+.1,z:U/R},to:ue??p,power:L,color:ve.solar})}let y=He(e,"home_battery").find(k=>!d.has(k.id)),S=o.battery===null?null:o.battery-(o.subMeters??[]).reduce((k,P)=>k+P.battery,0);if(y&&S!==null&&Math.abs(S)>Pe){let k=S>0;s.push({key:"battery",from:k?y:l,to:k?l:y,power:Math.abs(S),color:ve.battery})}let A=(o.solar??0)-(o.subMeters??[]).reduce((k,P)=>k+P.solar,0);p!==l&&A>Pe&&s.push({key:"inverter",from:p,to:l,power:A,color:ve.solar});let _=Qh(e,l);if(_&&o.grid!==null&&Math.abs(o.grid)>Pe){let k=o.grid>0;s.push({key:"grid",from:k?_:l,to:k?l:_,power:Math.abs(o.grid),color:k?ve.import:ve.export})}let $=new Map(He(e,"meter").map(k=>[k.id,k])),H=n??(k=>k.power&&k.power!=="none"?k.power:null);for(let k of e.floors)for(let P of k.furniture){let B=$.get(d.get(P.id)??""),L=He(e,P.type).find(Z=>Z.id===P.id);if(!B||!L)continue;let K=H(P);if(P.type==="inverter"){let Z=Math.max(0,(K?j(r.states[K]):null)??0);Z>Pe&&s.push({key:`inverter:${P.id}`,from:L,to:B,power:Z,color:ve.solar})}else if(P.type==="home_battery"){let Z=P.charge&&P.charge!=="none"?P.charge:null,T=Qn(r,{power:K,charge:Z},e.energy.battery_invert)??0;Math.abs(T)>Pe&&s.push({key:`battery:${P.id}`,from:T>0?L:B,to:T>0?B:L,power:Math.abs(T),color:ve.battery})}}let F=new Map,N=new Set;for(let k of i.subMeters??[]){let P=$.get(k.id),B=$.get(k.parent);k.power&&N.add(k.power);for(let K of k.floors)P&&!F.has(K)&&F.set(K,P);let L=o.subMeters?.find(K=>K.id===k.id)?.power??null;!P||!B||L===null||Math.abs(L)<=Pe||s.push({key:`meter:${k.id}`,from:L>0?B:P,to:L>0?P:B,power:Math.abs(L),color:L>0?ve.house:ve.solar})}let z=new Set(He(e,"wallbox").map(k=>`${k.floorId}:${k.x.toFixed(1)}:${k.z.toFixed(1)}`));for(let k of t){if(k.power<=Pe||N.has(k.powerEntity))continue;let P=k.wallbox||z.has(`${k.floorId}:${k.x.toFixed(1)}:${k.z.toFixed(1)}`);s.push({key:`use:${k.id}`,from:F.get(k.floorId)??l,to:{floorId:k.floorId,x:k.x,z:k.z,y:.9},power:k.power,color:P?ve.wallbox:ve.house})}return{arcs:s.map(k=>rp(e,k)),sparks:a,summary:o,autarky:u}}var tp=.25;var np=(r,e)=>r.energy.routes?.find(t=>t.key===e&&t.points.length>0);function rp(r,e){let t=np(r,e.key);if(!t)return e;let n=t.points.map(l=>({floorId:l.floor_id,x:l.x,z:l.z,y:tp})),i=l=>r.floors.find(c=>c.id===l)?.elevation??0,o=(l,c)=>Math.hypot(l.x-c.x,l.z-c.z)+Math.abs(i(l.floorId)+l.y-i(c.floorId)-c.y),[s,a]=[n[0],n[n.length-1]];return o(e.from,a)+o(e.to,s)<o(e.from,s)+o(e.to,a)&&n.reverse(),{...e,via:n,cable:!!t.cable}}var ip=r=>`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`,Ml=r=>typeof r=="string"?{dateTime:r}:r??{};function op(r,e,t){return r.map(n=>{let i=Ml(n.start),o=Ml(n.end),s=(n.summary??"").trim();if(!s)return null;if(i.dateTime){let a=new Date(i.dateTime),l=o.dateTime?new Date(o.dateTime).getTime():a.getTime();return{time:ip(a),title:s,source:e,at:a.getHours()*60+a.getMinutes(),kind:"event",past:l<t}}return{time:"",title:s,source:e,at:-1,kind:"event"}}).filter(n=>!!n)}function Al(r,e,t,n){let i=[],o=new Set;for(let s of e.floors)for(let a of s.furniture){let l=a.care_entity;if(!l||o.has(l)||An(a.type)!=="bin")continue;o.add(l);let c=Kn(r.states[l],t);if(c===null||c>1)continue;let u=a.name||String(r.states[l]?.attributes.friendly_name??l);i.push({time:"",title:u,source:c===0?n.today:n.tomorrow,at:-1,kind:"bin"})}return i}function El(r){return[...r].sort((e,t)=>e.at-t.at||e.title.localeCompare(t.title))}async function zl(r,e,t=Date.now()){if(!r.fetchWithAuth||!e.length)return[];let n=new Date(t);n.setHours(0,0,0,0);let i=new Date(n.getTime()+864e5);return(await Promise.all(e.map(async s=>{try{let a=await r.fetchWithAuth(`/api/calendars/${encodeURIComponent(s)}?start=${encodeURIComponent(n.toISOString())}&end=${encodeURIComponent(i.toISOString())}`);if(!a.ok)return[];let l=String(r.states[s]?.attributes.friendly_name??s.split(".")[1]);return op(await a.json(),l,t)}catch{return[]}}))).flat()}var dn=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},ae=(r,...e)=>e.some(t=>r.includes(t));function sp(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):r.states[e]?[e]:[]}function ap(r){if(!r)return null;let e=String(r.state),t=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(e);if(t)return Number(t[1])*60+Number(t[2]);let n=Number(e);if(!Number.isFinite(n))return null;let i=String(r.attributes.unit_of_measurement??"min").toLowerCase();return i==="h"?n*60:i==="s"?n/60:i==="d"?n*1440:n}var lp=/print|running|busy|druck/,cp=["print_status","current_stage","print_state","printer_state","current_state","status","state"];function Li(r,e){if(!e||!r.states[e])return null;let t=sp(r,e),n=t.filter(z=>z.startsWith("sensor.")),i=z=>z?r.states[z]:void 0,o=z=>n.find(k=>z(k,r.states[k])),s=z=>String(z.attributes.unit_of_measurement??""),a=z=>String(z.attributes.device_class??""),l=o((z,k)=>s(k)==="%"&&ae(z,"progress","fortschritt","completion"));if(!l)return null;let c=cp.map(z=>o((k,P)=>k.endsWith(z)&&!Number.isFinite(Number(P.state)))).find(Boolean),u=o(z=>ae(z,"remaining","time_left","restzeit","print_time_left")),d=o((z,k)=>a(k)==="timestamp"&&ae(z,"end","finish","estimated","ende")),p=o(z=>ae(z,"current_layer","layer")&&!ae(z,"total")),h=o(z=>ae(z,"total_layer","layer_count","total_layers")),w=o((z,k)=>a(k)==="temperature"&&ae(z,"nozzle","hotend","extruder","tool0","d\xFCse")&&!ae(z,"target")),g=o((z,k)=>a(k)==="temperature"&&ae(z,"bed","heater_bed","druckbett")&&!ae(z,"target")),v=o(z=>ae(z,"file","job","task_name","gcode","print_name","subtask")),y=t.find(z=>z.startsWith("image.")&&ae(z,"cover","model","thumbnail","preview"))??t.find(z=>z.startsWith("camera.")&&ae(z,"thumbnail","preview")),S=String(i(c)?.state??"").toLowerCase(),A=dn(i(l)),_=S?lp.test(S)&&!/finish|complete|idle|fertig/.test(S):(A??0)>0&&(A??0)<100,$=i(d)?Date.parse(String(i(d).state)):NaN,H=ap(i(u)),F=t.map(z=>r.states[z]).filter(z=>typeof z?.attributes.color=="string"&&/^#[0-9a-f]{6}/i.test(String(z.attributes.color))&&ae(z.entity_id,"tray","ams","filament","spool","external"));F.sort((z,k)=>+!!k.attributes.active-+!!z.attributes.active);let N=i(y)?.attributes.entity_picture;return{status:S||(_?"printing":"idle"),printing:_,progress:A,remaining:H,endsAt:Number.isFinite($)?$:H!==null&&_?Date.now()+H*6e4:null,layer:dn(i(p)),layers:dn(i(h)),nozzle:dn(i(w)),bed:dn(i(g)),job:i(v)?.state&&!["unknown","unavailable",""].includes(String(i(v).state))?String(i(v).state):null,picture:typeof N=="string"?N:null,filaments:[...new Set(F.map(z=>String(z.attributes.color).slice(0,7).toLowerCase()))].slice(0,8)}}var Bi=r=>/printer_(3d|cube|multi|large|open|resin|enclosed)$/.test(r);var hn=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},Ie=(r,...e)=>e.some(t=>r.includes(t));function Rl(r){let e=hn(r);return e===null?null:String(r.attributes.unit_of_measurement??"W").toLowerCase()==="kw"?e*1e3:e}function up(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):r.states[e]?[e]:[]}function Tl(r,e){if(!e||!r.states[e])return null;let t=up(r,e),n=t.filter(_=>_.startsWith("sensor.")),i=_=>n.find($=>_($,r.states[$])),o=_=>_.attributes.device_class==="temperature",s=_=>_.attributes.device_class==="power",a=i((_,$)=>o($)&&Ie(_,"flow","vorlauf","supply","leaving","outlet")&&!Ie(_,"target","soll","rate")),l=i((_,$)=>o($)&&Ie(_,"return","rucklauf","r\xFCcklauf","ruecklauf","inlet","entering")&&!Ie(_,"target","soll")),c=i((_,$)=>o($)&&Ie(_,"outdoor","outside","aussen","au\xDFen","ambient")),u=i((_,$)=>s($)&&Ie(_,"heat","warme","w\xE4rme","thermal","output","heizleistung")),d=i((_,$)=>s($)&&_!==u&&!Ie(_,"heat_output","thermal")),p=i(_=>Ie(_,"cop","leistungszahl"));if(!a&&!l&&!u&&!p)return null;let h=t.map(_=>r.states[_]).find(_=>_.entity_id.startsWith("climate.")),w=i((_,$)=>!Number.isFinite(Number($.state))&&Ie(_,"status","mode","betrieb","operation","state")),g=`${String(h?.attributes.hvac_action??"")} ${String(w?r.states[w].state:"")}`.toLowerCase(),v=Rl(r.states[u??""]),y=/defrost|abtau/.test(g)?"defrost":/water|dhw|warmwasser|tank/.test(g)?"water":/cool|kühl/.test(g)?"cooling":/heat|heiz/.test(g)||(v??0)>100?"heating":"idle",S=Rl(r.states[d??""]),A=hn(r.states[p??""])??(v!==null&&S&&S>50?Math.round(v/S*10)/10:null);return{mode:y,flow:hn(r.states[a??""]),return:hn(r.states[l??""]),outside:hn(r.states[c??""]),power:S,heat:v,cop:A}}var Fl=r=>/:heat_pump(_|$)/.test(r);var Vi=r=>/access_point|router|mesh|wifi|repeater/.test(r),Dl=(r,...e)=>e.some(t=>r.includes(t));function dp(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):r.states[e]?[e]:[]}function Gi(r,e){if(!e||!r.states[e])return null;let t=dp(r,e),n=t.find(a=>a.startsWith("sensor.")&&Dl(a,"clients","stations","connected_devices","users","ger\xE4te","wlan_clients")&&Number.isFinite(Number(r.states[a].state))),i=t.map(a=>r.states[a]).find(a=>a.entity_id.startsWith("binary_sensor.")&&(a.attributes.device_class==="connectivity"||Dl(a.entity_id,"online","connected","status"))),o=r.states[e],s=["unavailable","off","disconnected","offline"].includes(String(i?.state??o.state).toLowerCase())&&(!!i||o.entity_id.startsWith("binary_sensor."));return{clients:n?Number(r.states[n].state):null,online:!s&&o.state!=="unavailable"}}function Pl(r){return r.online?(r.clients??0)>=30?[1,.72,.25]:[.3,.7,1]:[1,.3,.3]}function Hl(r){let e=0,t=[];for(let n of r){if(!n)continue;let i=n.entity_id.startsWith("binary_sensor.")&&n.attributes.device_class==="connectivity",o=n.entity_id.startsWith("device_tracker.")&&n.attributes.source_type==="router";!i&&!o||(n.state==="on"||n.state==="home"?e++:t.push(String(n.attributes.friendly_name??n.entity_id)))}return{online:e,offline:t}}var ie=r=>r&&r!=="none"?r:null,br=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},Il=(r,e)=>r?.attributes?.[e],pe=(r,...e)=>e.some(t=>r.includes(t));function hp(r,e){if(!e)return[];let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):[e]}function ye(r,e,t,n){return e&&r.states[e]?e:t.find(i=>n(i,r.states[i]))??null}function pp(r,e,t,n){let i=Math.PI/180,o=Math.sin((t-r)*i/2)**2+Math.cos(r*i)*Math.cos(t*i)*Math.sin((n-e)*i/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(o)))}function fp(r){if(!r||["unknown","unavailable","","none","off"].includes(String(r.state).toLowerCase()))return null;let e=String(r.state),t=/^(\d{1,2}):(\d{2})/.exec(e);if(t)return`${t[1].padStart(2,"0")}:${t[2]}`;let n=Date.parse(e);if(Number.isFinite(n)&&/\d{4}-\d{2}-\d{2}/.test(e)){let i=new Date(n);return`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`}return t=/^(\d{1,4})$/.exec(e),t&&Number(t[1])<1440?`${String(Math.floor(Number(t[1])/60)).padStart(2,"0")}:${String(Number(t[1])%60).padStart(2,"0")}`:null}function Wl(r,e){let t=e.car??{},n=ie(t.device)??ie(t.tracker)??ie(e.entity),i=hp(r,n);if(!i.length&&!ie(t.soc))return null;let o=R=>R.split(".")[0],s=R=>String(Il(R,"device_class")??""),a=R=>String(Il(R,"unit_of_measurement")??""),l=ye(r,ie(t.soc),i,(R,V)=>o(R)==="sensor"&&a(V)==="%"&&(s(V)==="battery"||pe(R,"battery_level","soc","state_of_charge","ladezustand"))&&!pe(R,"usable")),c=ye(r,ie(t.range),i,(R,V)=>o(R)==="sensor"&&(s(V)==="distance"||pe(R,"range","reichweite"))&&!pe(R,"odometer","ideal","elevation","kilometerstand")),u=ye(r,null,i,(R,V)=>o(R)==="sensor"&&s(V)==="power"&&pe(R,"charg","lade")),d=ie(t.charging),p=ye(r,d&&o(d)==="binary_sensor"?d:null,i,(R,V)=>o(R)==="binary_sensor"&&(s(V)==="battery_charging"||pe(R,"charging","charger","laden"))),h=ye(r,ie(t.plugged),i,(R,V)=>o(R)==="binary_sensor"&&(s(V)==="plug"||pe(R,"plug","cable","kabel"))),w=ye(r,ie(t.lock),i,R=>o(R)==="lock"),g=ye(r,ie(t.climate),i,R=>o(R)==="climate"),v=ye(r,d&&/^(switch|input_boolean)\./.test(d)?d:null,i,R=>o(R)==="switch"&&pe(R,"charg","laden")&&!pe(R,"port","klappe")),y=ye(r,ie(t.tracker),i,R=>o(R)==="device_tracker")??(ie(e.entity)?.startsWith("device_tracker.")?ie(e.entity):null),S=ye(r,null,i,(R,V)=>o(R)==="sensor"&&s(V)==="temperature"&&pe(R,"inside","innen","interior","cabin")),A=ye(r,ie(t.departure),i,R=>/^(sensor|input_datetime|time|datetime)$/.test(o(R))&&pe(R,"departure","abfahrt","depart")),_=i.filter(R=>{let V=r.states[R];return o(R)==="binary_sensor"&&V?.state==="on"&&(["door","opening","window","garage_door"].includes(s(V))||pe(R,"trunk","frunk","kofferraum","tailgate","hatch","klappe","charge_port","ladeklappe"))}),$=R=>R?r.states[R]:void 0,H=br($(l)),F=$(c),N=null,z=$(u)??(d&&o(d)==="sensor"?$(d):void 0);if(z){let R=br(z);R!==null&&(N=Math.max(0,a(z).toLowerCase()==="kw"?R*1e3:R))}let P=($(p)?.state??$(v)?.state)==="on"||N!==null&&N>50,B=$(h)?.state,L=$(w)?.state,K=$(g),Z=$(y),T=$(ie(e.entity)),b=T?["on","home","true","present","occupied","detected","parked"].includes(T.state.toLowerCase()):Z?.state==="home",M=Z&&Z.state!=="home"&&Z.state!=="not_home"?Z.state:null,U=M?String($(`zone.${M}`)?.attributes.friendly_name??M):null;return{home:b,soc:H,range:br(F),rangeUnit:F&&a(F)||"km",chargingW:N,charging:P,plugged:B===void 0?null:B==="on",locked:L===void 0?null:L==="locked",climateOn:K?K.state!=="off"&&K.state!=="unavailable":null,inside:br($(S)),where:b?null:U,distance:b?null:mp(r,Z),open:_.map(R=>gp(r,R,i)),departure:fp($(A)),entities:{lock:w,climate:g,charge:v,tracker:y}}}function mp(r,e){let t=r.states["zone.home"]?.attributes,n=Number(e?.attributes?.latitude),i=Number(e?.attributes?.longitude),o=Number(t?.latitude??r.config?.latitude),s=Number(t?.longitude??r.config?.longitude);return[n,i,o,s].every(Number.isFinite)?Math.round(pp(n,i,o,s)*10)/10:null}function gp(r,e,t){let n=String(r.states[e]?.attributes.friendly_name??e.split(".")[1]),i=t.map(s=>String(r.states[s]?.attributes.friendly_name??"")).reduce((s,a)=>{let l=0;for(;l<s.length&&l<a.length&&s[l]===a[l];)l++;return s.slice(0,l)}),o=n.slice(i.length).trim();return o.length>=2?o:n}function Nl(r){return r===null?"#8aa0c8":r<20?"#f87171":r<50?"#facc15":"#4ade80"}function Ke(r,e){let t=Math.abs(e);return t>=1e3?`${O(r,t/1e3,t>=1e4?1:2)} kW`:`${Math.round(t)} W`}function wr(r,e){let n=2*Math.PI*22;return f`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${Q`<circle cx="27" cy="27" r=${22} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${22} stroke=${e} stroke-dasharray=${`${(n*Math.max(0,Math.min(1,r))).toFixed(1)} ${n.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`}function _p(r,e,t){let n=e.summary,i=a=>E(r,a),o=[];if(n.solar!==null&&o.push(f`<div class="live-row live-solar"><span>☀ ${i("energy_solar")}</span><b>${Ke(r,n.solar)}</b></div>`),n.consumption!==null&&o.push(f`<div class="live-row live-house"><span>⌂ ${i("energy_consumption")}</span><b>${Ke(r,n.consumption)}</b></div>`),n.rest!==void 0&&n.rest!==null&&o.push(f`<div class="live-row live-house"><span>⌂ ${i("energy_rest")}</span><b>${Ke(r,n.rest)}</b></div>`),n.battery!==null||n.soc!==null){let a=n.battery===null||Math.abs(n.battery)<15?"":n.battery>0?" \u2193":" \u2191";o.push(f`<div class="live-row live-battery"><span>▮ ${i("energy_battery")}${a}</span><b>${n.soc!==null?`${Math.round(n.soc)} %`:""}${n.battery!==null&&Math.abs(n.battery)>=15?` \xB7 ${Ke(r,n.battery)}`:""}</b></div>`)}if(n.grid!==null){let a=n.grid<-15;o.push(f`<div class="live-row ${a?"live-export":"live-import"}"><span>⇄ ${i(a?"energy_grid_export":"energy_grid_import")}</span><b>${Ke(r,n.grid)}</b></div>`)}for(let a of e.meters??[])o.push(f`<div class="live-row live-meter"><span>${a.icon} ${a.label}</span><b>${a.value}</b></div>`);let s=e.autarky;return f`<div class="live-card live-card-house" data-i=${t}>
    ${s!==null?f`<div class="live-own">${wr(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)} %</b><span>${i("live_autarky")}</span></div></div>`:m}
    <div class="live-rows">${o}</div>
    ${wp(r,e.curves)} ${bp(r,e.week)}
  </div>`}function bp(r,e){if(!e)return m;let t=[...e.solar,...e.use].filter(c=>c!==null&&c>0);if(!t.length)return m;let n=Math.max(...t)*1.1||1,[i,o]=[150,30],s=i/7,a=(c,u,d)=>c===null||c<=0?m:Q`<rect x=${u.toFixed(1)} y=${(o-c/n*o).toFixed(1)} width=${(s*.36).toFixed(1)} height=${(c/n*o).toFixed(1)} class=${d}></rect>`,l=c=>c.reduce((u,d)=>u+(d??0),0);return f`<div class="live-day live-week" title=${E(r,"live_week_hint",{solar:O(r,l(e.solar),0),use:O(r,l(e.use),0)})}>
    <svg viewBox=${`0 0 ${i} ${o}`} preserveAspectRatio="none" aria-hidden="true">
      ${e.days.map((c,u)=>Q`${a(e.solar[u],u*s+s*.1,"live-week-solar")}${a(e.use[u],u*s+s*.5,"live-week-use")}`)}
    </svg>
    <span>7 ${E(r,"live_days")}</span>
  </div>`}function wp(r,e){if(!e)return m;let t=[...e.solar,...e.use].filter(l=>l!==null);if(t.length<4)return m;let n=Math.max(...t)*1.08||1,[i,o]=[150,34],s=nn(e.solar,i,o,n),a=nn(e.use,i,o,n);return f`<div class="live-day" title=${E(r,"live_day_hint")}>
    <svg viewBox=${`0 0 ${i} ${o}`} preserveAspectRatio="none" aria-hidden="true">
      ${s?Q`<path d=${`${s}L${i},${o}L0,${o}Z`} class="live-day-solar"></path>`:m}
      ${a?Q`<path d=${a} class="live-day-use"></path>`:m}
    </svg>
    <span>24 h</span>
  </div>`}function vp(r,e,t,n){let i=e.car,o=(u,d)=>E(r,u,d),s=Nl(i.soc),a=i.home?i.charging?`\u26A1 ${o("live_car_charging")}${i.chargingW?` \xB7 ${Ke(r,i.chargingW)}`:""}`:i.plugged?`\u{1F50C} ${o("live_car_plugged")}`:"":`${o("live_car_away")}${i.where?` \xB7 ${i.where}`:""}${i.distance!==null?` \xB7 ${O(r,i.distance,i.distance<10?1:0)} km`:""}`,l=i.entities,c=(u,d,p,h)=>f`<button class="live-btn ${u?"live-on":""}" title=${d} aria-label=${d} aria-pressed=${u??!1} @click=${w=>(w.stopPropagation(),h())}>${p}</button>`;return f`<div class="live-card live-card-car ${i.charging?"live-charging":""} ${i.home?"":"live-away"}" data-i=${t} style=${`--live-soc:${s}`}>
    <div class="live-own">
      ${wr((i.soc??0)/100,s)}
      <div class="live-own-text"><b>${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b><span>${i.range!==null?`${Math.round(i.range)} ${i.rangeUnit}`:""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${a?f`<div class="live-status">${a}</div>`:m}
      ${i.inside!==null?f`<div class="live-status">🌡 ${O(r,i.inside,1)} °C</div>`:m}
      ${i.departure?f`<div class="live-status">⏰ ${o("live_car_departure",{time:i.departure})}</div>`:m}
      ${i.open.length?f`<div class="live-status live-warn">⚠ ${o("live_car_open",{parts:i.open.join(", ")})}</div>`:m}
      <div class="live-actions">
        ${l.lock?c(i.locked,o(i.locked?"live_car_unlock":"live_car_lock"),i.locked?"\u{1F512}":"\u{1F513}",()=>{i.locked&&!confirm(o("live_car_unlock_confirm",{name:e.name}))||n("lock",i.locked?"unlock":"lock",l.lock)}):m}
        ${l.climate?c(i.climateOn,o("live_car_climate"),"\u2744",()=>n(l.climate.split(".")[0],i.climateOn?"turn_off":"turn_on",l.climate)):m}
        ${l.charge&&i.home?c(i.charging,o("live_car_charge"),"\u26A1",()=>n(l.charge.split(".")[0],"toggle",l.charge)):m}
      </div>
    </div>
  </div>`}function yp(r,e,t,n){let i=e.media,o=l=>E(r,l),s=`rgb(${i.color.join(",")})`,a=(l,c,u)=>f`<button class="live-btn" title=${l} aria-label=${l} @click=${d=>(d.stopPropagation(),n("media_player",u,i.entity))}>${c}</button>`;return f`<div class="live-card live-card-media" data-i=${t} style=${`--live-soc:${s}`} @click=${l=>l.currentTarget.classList.toggle("live-open")}>
    ${i.picture?f`<img class="live-cover" src=${i.picture} alt="" loading="lazy" />`:f`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${i.title}>${i.title||i.name}</div>
      <div class="live-status">${i.artist||i.app||i.name}</div>
      <div class="live-actions">
        ${a(o("live_media_prev"),"\u23EE","media_previous_track")} ${a(o("live_media_playpause"),"\u23EF","media_play_pause")} ${a(o("live_media_next"),"\u23ED","media_next_track")}
        ${i.volume!==null?f`<input
              class="live-volume"
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(i.volume*100))}
              aria-label=${o("live_media_volume")}
              @click=${l=>l.stopPropagation()}
              @change=${l=>n("media_player","volume_set",i.entity,{volume_level:Number(l.target.value)/100})}
            />`:m}
      </div>
    </div>
  </div>`}function Ol(r){let e=[...r.querySelectorAll(".live-card")].filter(i=>i.style.visibility!=="hidden"),t=[],n=e.map(i=>({el:i,x:Number(i.dataset.x),y:Number(i.dataset.y),w:i.offsetWidth,h:i.offsetHeight})).sort((i,o)=>o.y-i.y);for(let i of n){let o=i.y;for(let a=0;a<12;a++){let l={x0:i.x-i.w/2,x1:i.x+i.w/2,y0:o-i.h,y1:o},c=t.find(u=>l.x0<u.x1+6&&l.x1>u.x0-6&&l.y0<u.y1+6&&l.y1>u.y0-6);if(!c)break;o=c.y0-8}t.push({x0:i.x-i.w/2,x1:i.x+i.w/2,y0:o-i.h,y1:o});let s=i.y-o;i.el.style.transform=`translate(${Math.round(i.x)}px, ${Math.round(o)}px) translate(-50%, -100%)`,i.el.style.setProperty("--live-thread",`${Math.round(18+s)}px`)}}function kp(r,e,t){let n=e.printer,i=(c,u)=>E(r,c,u),o=n.progress??0,s=c=>new Intl.DateTimeFormat(r?.language??navigator.language,{hour:"2-digit",minute:"2-digit"}).format(new Date(c)),a=n.remaining!==null?n.remaining>=60?`${Math.floor(n.remaining/60)} h ${Math.round(n.remaining%60)} min`:`${Math.round(n.remaining)} min`:null,l=[n.nozzle!==null?`${i("printer_nozzle")} ${Math.round(n.nozzle)}\xB0`:null,n.bed!==null?`${i("printer_bed")} ${Math.round(n.bed)}\xB0`:null].filter(Boolean).join(" \xB7 ");return f`<div class="live-card live-card-printer ${n.printing?"live-charging":""}" data-i=${t}>
    <div class="live-own">
      ${n.picture?f`<img class="live-print-pic" src=${n.picture} alt="" />`:wr(o/100,n.printing?"#38bdf8":"#8aa0c8")}
      <div class="live-own-text"><b>${n.progress!==null?`${Math.round(o)} %`:"\u2013"}</b><span>${i(`printer_${n.printing?"printing":/finish|complete|fertig/.test(n.status)?"done":/pause/.test(n.status)?"paused":/error|fail/.test(n.status)?"error":"idle"}`)}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${n.job?f`<div class="live-status">${n.job}</div>`:m}
      ${n.printing&&(n.endsAt||a)?f`<div class="live-status">⏱ ${[a,n.endsAt?i("printer_done_at",{time:s(n.endsAt)}):null].filter(Boolean).join(" \xB7 ")}</div>`:m}
      ${n.layer!==null?f`<div class="live-status">▤ ${i("printer_layer")} ${n.layer}${n.layers?` / ${n.layers}`:""}</div>`:m}
      ${l?f`<div class="live-status">🌡 ${l}</div>`:m}
      ${n.filaments.length?f`<div class="live-filaments">${n.filaments.map(c=>f`<i style=${`background:${c}`}></i>`)}</div>`:m}
    </div>
  </div>`}function xp(r,e,t){let n=e.pump,i=a=>E(r,a),o=a=>a===null?"\u2013":`${O(r,a,1)}\xB0`,s={heating:"\u{1F525}",water:"\u{1F6BF}",cooling:"\u2744",defrost:"\u{1F9CA}",idle:"\u23F8"}[n.mode];return f`<div class="live-card live-card-heatpump ${n.mode==="idle"?"":"live-charging"}" data-i=${t}>
    <div class="live-own">
      ${wr(Math.min(1,(n.cop??0)/6),(n.cop??0)>=3.5?"#4ade80":(n.cop??0)>=2.5?"#facc15":"#fb923c")}
      <div class="live-own-text"><b>${n.cop!==null?O(r,n.cop,1):s}</b><span>${n.cop!==null?"COP":""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      <div class="live-status">${s} ${i(`heatpump_${n.mode}`)}</div>
      ${n.flow!==null||n.return!==null?f`<div class="live-row live-heat"><span>${i("heatpump_flow_return")}</span><b>${o(n.flow)} → ${o(n.return)}</b></div>`:m}
      ${n.heat!==null?f`<div class="live-row live-heat"><span>${i("heatpump_heat")}</span><b>${Ke(r,n.heat)}</b></div>`:m}
      ${n.power!==null?f`<div class="live-row live-house"><span>${i("heatpump_power")}</span><b>${Ke(r,n.power)}</b></div>`:m}
      ${n.outside!==null?f`<div class="live-status">🌡 ${i("heatpump_outside")} ${o(n.outside)}</div>`:m}
    </div>
  </div>`}function Cl(r,e,t){return e.length?f`<div class="live-cards">
    ${e.map((n,i)=>n.kind==="house"?_p(r,n,i):n.kind==="car"?vp(r,n,i,t):n.kind==="printer"?kp(r,n,i):n.kind==="heatpump"?xp(r,n,i):yp(r,n,i,t))}
  </div>`:m}var Ll=te`
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
`;function vr(r){return r.toLocaleLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Ki=r=>r.points.length>=3;function Bl(r,e,t){return r.rooms.filter(Ki).find(n=>W([e,t],n.points))}function Sp(r,e,t,n){let i=[];for(let a of e.rooms.filter(Ki)){let[l,c]=Ne(a.points);i.push({kind:"room",name:a.name,where:n?e.name:"",floorId:e.id,roomId:a.id,entity:null,icon:null,x:l,z:c,y:0})}let o=new Set,s=(a,l,c,u)=>{if(o.has(a)||!(a in r.states))return;o.add(a);let d=Bl(e,l,c),p=[d?.name,n?e.name:void 0].filter(h=>!!h).join(" \xB7 ");i.push({kind:"device",name:C(r,a),where:p,floorId:e.id,roomId:d?.id??null,entity:a,icon:D(a),x:l,z:c,y:u})};for(let a of e.placements){let l=a.y??gt(D(a.entity_id)??"sensor",fe(e,a.x,a.z),a.mount);s(a.entity_id,a.x,a.z,l)}for(let a of e.furniture){let l=t.get(a.id),c=l?.entity??l?.power;if(!c)continue;let u=fe(e,a.x,a.z)-.3;s(c,a.x,a.z,Math.min(u,Math.max(.5,a.h)))}for(let a of e.notes??[]){if(!a.text)continue;let l=Bl(e,a.x,a.z),c=[l?.name,n?e.name:void 0].filter(u=>!!u).join(" \xB7 ");i.push({kind:"note",name:`\u270E ${a.text.length>60?`${a.text.slice(0,59)}\u2026`:a.text}`,where:c,floorId:e.id,roomId:l?.id??null,entity:null,icon:null,x:a.x,z:a.z,y:1.3})}return i}function Vl(r,e){let t=tt(r,e.floors),n=e.floors.length>1,i=e.floors.flatMap(o=>Sp(r,o,t,n));for(let o of e.settings.circuits??[]){let s=e.floors.flatMap(d=>d.rooms.filter(p=>o.rooms.includes(p.id)&&Ki(p)).map(p=>({f:d,r:p})));if(!s.length)continue;let[{f:a,r:l}]=s,[c,u]=Ne(l.points);i.push({kind:"circuit",name:`\u{1F50C} ${o.name}`,where:s.map(d=>d.r.name).join(", "),floorId:a.id,roomId:l.id,entity:null,icon:null,x:c,z:u,y:0})}return i}function $p(r,e){return(vr(r.name).startsWith(e)?0:2)+(r.kind==="room"?0:1)}function Gl(r,e,t=8){let n=vr(e).split(/\s+/).filter(Boolean);if(n.length===0)return[];let i=vr(e.trim());return r.filter(o=>{let s=vr([o.name,o.where,o.entity].filter(Boolean).join(" "));return n.every(a=>s.includes(a))}).map(o=>({item:o,cost:$p(o,i)})).sort((o,s)=>o.cost-s.cost||o.item.name.localeCompare(s.item.name)).slice(0,t).map(o=>o.item)}var Mp=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ap=[2200,2700,3200,4e3,5e3,6500],Ep=["hs","rgb","rgbw","rgbww","xy"],zp=4,Kl=16,Ul=32,Rp=128;function ji(r){let e=r.attributes.supported_color_modes??[],t=e.some(n=>Ep.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function qi(r){return((r.attributes.supported_features??0)&zp)!==0&&typeof r.attributes.current_position=="number"}var Ui=class extends ne{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},myPosition:{attribute:!1},low:{type:Boolean,reflect:!0}};t(e,t){return E(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:C(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){me(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let o=i/t*Math.PI*2-Math.PI/2;return f`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${n}</div>`})}renderLight(e){let t=ji(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,o=t.color?Mp.map(s=>f`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Ap.map(s=>f`<button class="qm-swatch" style="background:${Tp(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return f`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?f`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:m}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=qi(e),o=(u,d,p,h=!1)=>f`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${d} @click=${p}>${u}</button>`,s=u=>t!==null&&Math.abs(t-u)<3,a=[o("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(u=>o(`${u}`,`${u} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:u}),s(u))):[],o("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(u=>o(`${u}`,`${u} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:u}),s(u))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n),...this.myPosition!=null?[o("My",this.t("cover_my_go",{p:this.myPosition}),()=>this.ask()&&(i?this.call("cover","set_cover_position",{position:this.myPosition}):this.call("cover","stop_cover")),s(this.myPosition))]:[]],l=t===null?e.state==="closed"?100:0:100-t,c=t!==null||n||e.state==="open"||e.state==="closed";return f`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${c&&l<100?"qm-on":""}"
          style="--closed:${l}%"
          ?disabled=${!c}
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ee(this.hass,e)}</b>
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
          />`:m}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Rp&&n!==null?f`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:t&(Kl|Ul)?f`<div class="qm-tilt-buttons">
        ${t&Kl?f`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:m}
        ${t&Ul?f`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:m}
      </div>`:m}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return f`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ee(this.hass,e)}</b>
      </button>
    </div>`}renderMedia(e){let t=!["off","standby","unavailable","unknown"].includes(e.state),n=e.state==="playing",i=e.attributes,o=typeof i.volume_level=="number"?Math.round(i.volume_level*100):null,s=Array.isArray(i.source_list)?i.source_list.slice(0,24):[],a=[i.media_title,i.media_artist].filter(d=>typeof d=="string"&&d).join(" \xB7 "),l=d=>f`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d=${d} /></svg>`,c=(d,p,h,w=!1)=>f`<button class="qm-swatch qm-slot ${w?"qm-slot-on":""}" aria-label=${p} title=${p} @click=${h}>${d}</button>`,u=t?[c(l(n?"M6 5h4v14H6zM14 5h4v14h-4z":"M8 5v14l11-7z"),this.t(n?"media_pause":"media_play"),()=>this.call("media_player","media_play_pause"),n),c(l("M6 6h2v12H6zm3.5 6 8.5 6V6z"),this.t("media_previous"),()=>this.call("media_player","media_previous_track")),c(l("M16 6h2v12h-2zM6 18l8.5-6L6 6z"),this.t("media_next"),()=>this.call("media_player","media_next_track"))]:[];return f`<div class="qm-ring ${u.length?"":"qm-ring-small"}">
        ${this.ring(u)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("media_player",t?"turn_off":"turn_on")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${o!==null&&t?`${o} %`:ee(this.hass,e)}</b>
        </button>
      </div>
      ${a?f`<div class="qm-media-title">${a}</div>`:m}
      ${o!==null?f`<input class="qm-slider" type="range" min="0" max="100" .value=${String(o)} aria-label=${this.t("media_volume")} @change=${d=>this.call("media_player","volume_set",{volume_level:Number(d.target.value)/100})} />`:m}
      ${s.length?f`<div class="qm-play-head">${this.t("media_sources")}</div>
            <div class="qm-play">${s.map(d=>f`<button class="qm-chip ${i.source===d?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:d})}>${d}</button>`)}</div>`:m}
      ${this.presets?.length?f`<div class="qm-play-head">${this.t("presets")}</div>
            <div class="qm-play">${this.presets.map(d=>f`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:d.type,media_content_id:d.content})}>${d.label}</button>`)}</div>`:m}`}render(){let e=this.hass?.states[this.entity];if(!e)return m;let t=D(this.entity),n=I(e)&&!Bt(e)?f`<p class="qm-note">${ee(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="media"?this.renderMedia(e):this.renderToggle(e);return f`<div class="qm" role="dialog" aria-label=${C(this.hass,this.entity)}>
      <div class="qm-title">${C(this.hass,this.entity)}</div>
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
    `]};function Tp(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("nf-quick-menu")||customElements.define("nf-quick-menu",Ui);var Fp=new URL(import.meta.url),Dp=new URL("./nextfloor-3d.js?v=d257b7520699",Fp).href,jl;function ql(){return jl??=import(Dp),jl}function Zl(r){if(!r||r.state!=="on")return 0;let e=typeof r.attributes.percentage=="number"?r.attributes.percentage:60;return e<=0?0:.2+.6*Math.min(100,e)/100}var Pp=new Set(["on","home","open","true","active","playing","heat","heating"]);function yr(r,e){let t=e.show_when;if(!t?.entity||!r)return!0;let n=r.states[t.entity];if(!n||I(n))return!0;let i=String(n.state).toLowerCase(),o=(t.state??"").split(",").map(a=>a.trim().toLowerCase()).filter(Boolean),s=o.length?o.includes(i):Pp.has(i)||Number.isFinite(Number(i))&&Number(i)>0;return t.invert?!s:s}function Zi(r,e){let t=[];for(let n of e.floors)for(let i of n.furniture)yr(r,i)||t.push(i.id);return t.sort()}function Yl(r,e){if(!e.length)return r;let t=new Set(e);return{...r,floors:r.floors.map(n=>n.furniture.some(i=>t.has(i.id))?{...n,furniture:n.furniture.filter(i=>!t.has(i.id))}:n)}}var Jl="image:";function Ql(r,e,t){let n=(e??"").trim();if(!n)return null;if(n.startsWith(Jl))return t(n.slice(Jl.length));if(/^(https?:\/\/|\/)/.test(n))return n;if(/^[a-z_]+\.[a-z0-9_]+$/.test(n)){let i=r?.states[n]?.attributes.entity_picture;return typeof i=="string"&&i?i:null}return null}var Xl="nextfloor.lock3d",ec=520,Ji=class extends ne{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},solidWalls:{attribute:!1},glassWalls:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},markersOutside:{attribute:!1},tapInRoom:{type:Boolean},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},weatherDensity:{attribute:!1},timeOfDay:{attribute:!1},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_liveEnergy:{state:!0},_liveCards:{state:!0},_liveCardOn:{state:!0},_swipe:{state:!0},_menu:{state:!0},_pluginWindow:{state:!0},_plate:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},centralOpen:{attribute:!1},keepCamera:{attribute:!1},readable:{type:Boolean,reflect:!0},today:{attribute:!1},_todayOpen:{state:!0},_todayItems:{state:!0},zoom:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},clock:{attribute:!1},lockButton:{attribute:!1},walkButton:{attribute:!1},travelButton:{attribute:!1},_travel:{state:!0},_walking:{state:!0},_stick:{state:!0},_locked:{state:!0},_now:{state:!0},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},announcements:{attribute:!1},sensorBar:{attribute:!1},screenName:{attribute:!1},_announcement:{state:!0},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_shortStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};stopAnnouncements=null;announceTimer;get liveCardsOn(){return this.holograms??this._liveCardOn}cloud=0;confirmSet=new Set;shownStartView;placementInfo=new Map;live=null;travelTimer;dayCurves=null;curvesAt=0;clockTimer;stopPlugins=null;pluginsDirty=!1;resizeObs=null;alertSrc=null;alertTimer;contactTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;todayAt=0;todayDay="";swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;tapPins=new Map;heatValues=new Map;watched=[];constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.solidWalls=!1,this.glassWalls=null,this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.markersOutside=null,this.tapInRoom=!1,this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.weather=!0,this.weatherEntityId=null,this.weatherDensity=1,this.showEnergy=!0,this.flows=null,this._liveEnergy=null,this._liveCards=[],this._liveCardOn=localStorage.getItem("nextfloor.cards")!=="0",this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._pluginWindow=null,this._plate=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("nextfloor.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.clock=null,this.lockButton=!1,this.walkButton=!1,this.travelButton=!1,this._travel=null,this._walking=!1,this._stick=null,this._now=Date.now(),this._locked=(()=>{try{return localStorage.getItem(Xl)==="1"}catch{return!1}})(),this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this._shortStage=!1,this.alerts=!0,this.alertJump=!1,this.announcements=!1,this.sensorBar=!0,this.screenName=null,this._announcement=null,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.holograms=null;try{this._flows=localStorage.getItem("nextfloor.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.stopPlugins=ht(()=>{this.pluginsDirty=!0,this.requestUpdate()}),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.stopPlugins?.(),this.stopPlugins=null,this.listenToAnnouncements(!1),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.contactTimer),this.contactTimer=void 0,clearInterval(this.clockTimer),this.clockTimer=void 0,clearInterval(this.travelTimer),this.travelTimer=void 0,this.live=null,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nf-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=t[0]?.contentRect,i=(n?.width??1e3)<700||(n?.height??1e3)<ec,o=(n?.height??1e3)<ec;o!==this._shortStage&&(this._shortStage=o),i!==this._narrowStage&&(this._narrowStage=i,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await ql();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".nf-stage");t.addEventListener("pointerdown",n=>{this._central&&!this.centralOpen&&!n.target?.closest?.(".nf-central, .nf-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,i)=>this.fire("room-tap",{floorId:n,roomId:i}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?E(this.hass,"floor_rooms_one"):E(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,i,o)=>this.onDeviceTap(n,i,o),onDeviceHold:(n,i,o)=>this.onDeviceHold(n,i,o),onRoomDoubleTap:(n,i)=>this.onRoomDoubleTap(n,i),onDeviceSwipe:(n,i,o,s,a)=>this.onDeviceSwipe(n,i,o,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,i,o)=>this.fire("furniture-move",{id:n,x:i,z:o}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,i,o)=>this.fire("device-move",{id:n,x:i,z:o}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setPaintedWalls(this.solidWalls),this.viewer.setGlassWalls((this.glassWalls??20)/100),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setNavigationLocked(this._locked),this.viewer.setFurnishMode(this.furnish),this.viewer.setTapInRoom(this.tapInRoom),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setKeepCamera(!!this.keepCamera),this.viewer.setZoom(this.zoom??1),this._low=this.viewer.low,this.viewer.setMeshSource(n=>this.hass?.fetchWithAuth?this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(n)}`).then(i=>i.ok?i.arrayBuffer():null):Promise.resolve(null)),this.viewer.setPacks([...qr()]),this.shownPacks=$n(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding(this.hass)),this.viewer.setMap(this.building.settings.map,this.building.settings.north??0)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){(e.has("announcements")||e.has("hass")&&this.announcements&&!this.stopAnnouncements)&&this.listenToAnnouncements(this.announcements&&!!this.hass&&this.isConnected),e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass);let t=this._pluginWindow?.node;e.has("hass")&&t&&"hass"in t&&(t.hass=this.hass),this._central&&!this.centralOpen&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1),e.has("centralOpen")&&this.centralOpen&&(this._central=!0);let n=this.viewer;if(!n)return;if(this.shownPacks!==$n()&&(this.shownPacks=$n(),n.setPacks([...qr()]),this.hass&&this.building&&n.setParked(zi(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),a=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,n.setStartView(this.startViewOf()),n.setBuilding(this.shownBuilding(this.hass)),n.setMap(this.building?.settings.map,this.building?.settings.north??0),a&&this.floorId===null&&n.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let i=this.markersOutside?["markersOutside","floorId","roomId"]:["markersOutside"],o=this.pluginsDirty||["building","markerMode","heatMode","flows","alerts","dimmed",...i].some(s=>e.has(s));this.pluginsDirty=!1,(o||e.has("hass"))&&this.syncDevices(o),e.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&n.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&n.selectRoom(this.roomId),e.has("tapInRoom")&&n.setTapInRoom(this.tapInRoom),e.has("wallMode")&&n.setWallMode(this.wallMode),e.has("solidWalls")&&n.setPaintedWalls(this.solidWalls),e.has("glassWalls")&&n.setGlassWalls((this.glassWalls??20)/100),e.has("explode")&&n.setExplode(this.explode),e.has("keepRoof")&&n.setKeepRoof(this.keepRoof),e.has("keepCamera")&&n.setKeepCamera(!!this.keepCamera),e.has("zoom")&&n.setZoom(this.zoom??1),e.has("floorStack")&&n.setFloorStack(this.floorStack),e.has("theme")&&n.setTheme(this.theme),e.has("_locked")&&n.setNavigationLocked(this._locked),e.has("clock")&&(clearInterval(this.clockTimer),this.clockTimer=this.clock?setInterval(()=>this._now=Date.now(),1e4):void 0),e.has("accent")&&n.setAccent(this.accent??null),e.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),(e.has("weather")||e.has("weatherEntityId")||e.has("weatherDensity")||e.has("timeOfDay"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low),e.has("showStats")&&n.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}shownFor=null;framePictureData=new Map;framePictures(e,t){let n=[];for(let i of t.floors)for(let o of i.furniture){if(!o.picture||!yr(e,o))continue;let s=Ql(e,o.picture,a=>this.storedPicture(e,a));s&&n.push({furnitureId:o.id,floorId:i.id,url:s,border:o.picture_border??0,fit:o.picture_fit==="contain"?"contain":"cover"})}return n}storedPicture(e,t){let n=this.framePictureData.get(t);return n!==void 0?n||null:(this.framePictureData.set(t,""),Ao(e,t).then(i=>{this.framePictureData.set(t,i),this.syncDevices(!0)}).catch(()=>{}),null)}shownBuilding(e){let t=this.building,n=Zi(e,t),i=t.floors.filter(a=>a.layer&&this.hiddenLayers.has(a.id)).map(a=>a.id),o=[...n,...i.map(a=>`layer:${a}`)].join(",");if(this.shownFor?.building===t&&this.shownFor.key===o)return this.shownFor.shown;let s=Yl(t,n);return this.shownFor={building:t,key:o,shown:i.length?{...s,floors:s.floors.filter(a=>!i.includes(a.id))}:s},this.shownFor.shown}hiddenLayers=(()=>{try{return new Set(JSON.parse(localStorage.getItem("nextfloor.hidden_layers")??"[]"))}catch{return new Set}})();toggleLayer(e){this.hiddenLayers.has(e)?this.hiddenLayers.delete(e):this.hiddenLayers.add(e);try{localStorage.setItem("nextfloor.hidden_layers",JSON.stringify([...this.hiddenLayers]))}catch{}this.viewer&&this.building&&this.viewer.setBuilding(this.shownBuilding(this.hass)),this.requestUpdate()}renderLayers(){let e=(this.building?.floors??[]).filter(t=>t.layer);return!e.length||this.clean?m:f`<div class="nf-layers" role="group" aria-label=${E(this.hass,"floor_layer")}>
      ${e.map(t=>f`<button class="nf-chip" aria-pressed=${!this.hiddenLayers.has(t.id)} @click=${()=>this.toggleLayer(t.id)}>${this.hiddenLayers.has(t.id)?"\u25CC":"\u{1F441}"} ${t.name}</button>`)}
    </div>`}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let i=this._travel,o=i&&!i.loading?xt(this.hass,i.history,i.t):this.hass;if((e||!this.openingLinks||this.linkedRegistry!==o.entities)&&(this.openingLinks=Gt(o,n.floors),this.furnitureLinks=tt(o,n.floors),this.linkedRegistry=o.entities,this.findIndex=null,this.alertSrc=this.alerts?el(o,n,this.weatherEntityId,this.openingLinks):null,this.watched=al({hass:o,building:n,openingLinks:this.openingLinks,furnitureLinks:this.furnitureLinks,needsRoomSensors:this.heatMode!=="none"||this.roomLabels,alertSources:this.alertSrc,weatherEntityId:this.weatherEntityId}),e=!0),!(e||this.watched.some(b=>this.shownStates.get(b)!==o.states[b])))return;Zi(o,n).join(",")!==this.shownFor?.key&&t.setBuilding(this.shownBuilding(o)),this.shownStates=new Map(this.watched.map(b=>[b,o.states[b]])),this.refreshToday(n);let a=Jt(o,n),l=Ls(o,n.floors.some(b=>b.layer&&this.hiddenLayers.has(b.id))?this.shownBuilding(o):n);this.placementInfo=new Map(l.map(b=>[b.id,{floorId:b.floorId,roomId:b.roomId,x:b.x,z:b.z,y:b.y,rotation:b.rotation??0}]));let c=this.furnitureMarkers(o,n,new Set(l.map(b=>b.id)),new Set(a.map(b=>b.powerEntity)));a.push(...c.consumers);let u=Qt(o,n,a,Re(n,b=>this.furnitureLinks?.get(b.id)?.power??null)),d=new Map(a.filter(b=>b.id!==b.powerEntity).map(b=>[b.id,b.power]));this.confirmSet=nt(o,n.floors);let p=new Set(this.liveCardsOn?this._liveCards.flatMap(b=>b.kind==="media"?[b.media.entity]:b.kind==="car"?[b.spot]:[]):[]);for(let b of n.floors)for(let M of b.outdoor??[]){if(!M.area_id&&!M.temp_entity&&!M.pump_entity)continue;let U=M.temp_entity?o.states[M.temp_entity]:void 0,R=M.pump_entity?o.states[M.pump_entity]:void 0,[V,ue]=Ne(M.points),Ue=U&&Number.isFinite(Number(U.state))?`${O(o,de(o,In(Number(U.state),U.attributes.unit_of_measurement)),1)} ${re(o)}`:"",at=!!R&&X(R);l.push({id:M.area_id?`outdoor:${M.id}`:M.pump_entity??M.temp_entity,floorId:b.id,roomId:null,x:V,z:ue,y:Tn(b,M,V,ue)+.7,icon:ke(M.type==="pool"?"pool":M.type==="terrace"?"table-chair":"tree-outline"),name:M.area_id&&o.areas?.[M.area_id]?.name||E(o,`out_${M.type}`),text:[Ue,at?E(o,"pool_pump_on"):""].filter(Boolean).join(" \xB7 "),active:at,unavailable:!1,glow:null,show:"always"})}let h=new Map;for(let b of n.floors){for(let M of b.placements)M.pin_offset&&h.set(`${b.id}:${M.entity_id}`,M.pin_offset);for(let M of b.furniture)M.pin_offset&&h.set(`f:${M.id}`,M.pin_offset)}let w=b=>{let M=b.lamp?void 0:(b.furnitureId?h.get(`f:${b.furnitureId}`):void 0)??h.get(`${b.floorId}:${b.id}`);return M?{...b,x:b.x+(M.x??0),z:b.z+(M.z??0),y:b.y+(M.y??0)}:b};t.setDevices([...[...l,...c.markers].map(w).map(b=>{let M=b.show==="no_power"||"energyDevice"in b&&b.energyDevice?null:d.get(b.id)??null,U={...b,power:M,powerText:M===null?void 0:oe(o,M),effect:this.dimmed?void 0:b.effect,text:this.subMeterText(o,n,u,b.furnitureId)??b.text},R=b.ownName&&(b.showName||this.markerNames)?b.ownName:"",V=p.has(b.id)||!!b.furnitureId&&p.has(b.furnitureId);return{...U,pin:this.showPin(U)&&!V,full:b.show==="always",caption:R}})]),t.setPickTargets(c.targets,this.openingTargets()),t.setScreens(c.screens),t.setFridgeDoors(vs(o,n.floors)),t.setCovers(Ts(o,n)),t.setRobots(this.robotInfos(o,n));let g=new Map;for(let b of n.floors)for(let M of b.furniture)!Y(M.type)?.pet||!M.room_sensor||M.room_sensor==="none"||g.set(M.id,si(o,b.rooms.filter(U=>U.points.length>=3),null,M.room_sensor)?.id??null);g.size&&t.setPetRooms(g),t.setRoofWindows(Za(o,n)),t.setParked(zi(o,n));let v=new Map(n.floors.flatMap(b=>b.openings.map(M=>[M.id,M.type]))),y=new Map([...this.openingLinks].map(([b,M])=>[b,Ae(o,M,v.get(b))]));t.setOpeningStates(y),this.setAlerts(this.alertSrc?Mi(o,n,this.alertSrc,this.openingLinks):[]),this.watchLostContacts(o);let S=[...l,...c.markers].map(b=>`${b.id}:${b.glow?`${b.glow.level.toFixed(1)}/${b.glow.color.map(M=>M.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...y].map(([b,M])=>`${b}:${M.open}:${M.cover===null?"-":M.cover.toFixed(1)}`).join(";");if(S!==this.thumbSig){let b=this.thumbSig==="";this.thumbSig=S,b||this.scheduleThumbs(1500)}let A=$l(o,n,a,n.energy.advanced?b=>this.furnitureLinks?.get(b.id)?.power??null:void 0),_=this.liveCars(o,n);for(let b of _){if(!b.car.home||!b.car.charging&&!b.car.plugged)continue;let M=n.floors.flatMap(V=>V.furniture.filter(ue=>ue.type==="wallbox").map(ue=>({floorId:V.id,x:ue.x,z:ue.z,y:1}))).sort((V,ue)=>Math.hypot(V.x-b.at.x,V.z-b.at.z)-Math.hypot(ue.x-b.at.x,ue.z-b.at.z))[0],U=M&&M.floorId===b.at.floorId&&Math.hypot(M.x-b.at.x,M.z-b.at.z)<9,R=M??un(n);!R||!b.car.charging&&!U||A.arcs.push({key:`car:${b.spot}`,from:R,to:{...b.at,y:.8},power:b.car.charging?b.car.chargingW??7e3:0,color:[80,175,255],...U?{via:[{...R,y:.35},{floorId:b.at.floorId,x:(R.x+b.at.x)/2,z:(R.z+b.at.z)/2,y:.08},{...b.at,y:.5}],cable:!0}:{}})}let $=un(n);for(let b of this.liveHeatPumps(n)){let M=b.pump.heat??(b.pump.mode==="heating"||b.pump.mode==="water"?(b.pump.power??0)*(b.pump.cop??3):0);$&&M>100&&b.pump.mode!=="cooling"&&A.arcs.push({key:`heat:${b.id}`,from:{floorId:b.floorId,x:b.x,z:b.z,y:.8},to:$,power:M,color:[255,120,40]})}let H=(this.flows??this._flows)&&!this.dimmed;t.setLiveEnergy(H?A.arcs:[],H?A.sparks:[]),JSON.stringify(A)!==JSON.stringify(this._liveEnergy)&&(this._liveEnergy=A);let N=this.liveMedia(o,n).filter(b=>b.playing&&!this.dimmed);t.setLiveSound(N.map(b=>({id:b.entity,at:b.at,color:b.color,level:b.volume??.5})),Ua(N).map(([b,M])=>[b.at,M.at])),this.syncLhCards(t,n,A,_,N),t.setLiveScreens(this.dimmed?[]:Ya(o,n,this.furnitureLinks)),t.setPictures(this.framePictures(o,n)),t.setLiveWater(this.dimmed?[]:ja(o,n,this.furnitureLinks));let z=[];t.setPersons(z);let k=Ha(o,n,this.openingLinks,z);t.setFloorInfo(new Map([...k].map(([b,M])=>[b,Ia(o,M)])));let P=o.config,B=this.timeOfDay!=null&&P?.latitude!==void 0&&P.longitude!==void 0?Qe(ut(this.timeOfDay,P.time_zone),P.latitude,P.longitude):Ja(o);t.setSun(B);let L=this.weather&&!this.dimmed?hl(o,$t(o,this.weatherEntityId??n.settings.weather_entity)):null,K=L?pl(fl(L,n.settings.weather_effects),this.weatherDensity):null;this.cloud=K?.cloud??0,this._sky=Qa(B?.elevation??null,this.cloud),t.setSky(this.weather&&!this.dimmed?{weather:K,sun:B,north:n.settings.north??0,sky:this.skyColor(),disc:(n.settings.weather_effects??["sky"]).includes("sky"),low:this._low}:null),this.applyTint();let T=u.grid!==null||u.solar!==null||u.battery!==null||u.tariff!==null?u:null;JSON.stringify(T)!==JSON.stringify(this._energy)&&(this._energy=T)}watchLostContacts(e){let t=!!this.alertSrc&&!this._travel&&nl(e,this.alertSrc);t&&!this.contactTimer&&(this.contactTimer=setInterval(()=>{let n=this.building;this.alertSrc&&n&&this.hass&&this.openingLinks&&!this._travel&&this.setAlerts(Mi(this.hass,n,this.alertSrc,this.openingLinks))},6e4)),!t&&this.contactTimer&&(clearInterval(this.contactTimer),this.contactTimer=void 0)}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),n=e.filter((o,s)=>!this.seenAlerts.has(t[s])&&!lr.has(o.kind));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e);let i=e.some(o=>!lr.has(o.kind));i&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!i&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(e.kind==="own"&&e.tap!=="room"){e.tap==="toggle"?this.hass.callService("homeassistant","toggle",{entity_id:e.entity}):me(this,e.entity);return}if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,i=this.hass,o=n?.floors.find(u=>u.id===e),s=o?.rooms.find(u=>u.id===t);if(!n||!i||!o||!s)return;let a=new Set(G(i,s).filter(u=>D(u)==="light"));for(let u of o.placements)D(u.entity_id)==="light"&&W([u.x,u.z],s.points)&&a.add(u.entity_id);for(let u of o.furniture){let d=this.furnitureLinks.get(u.id)?.entity;d&&Zr(u.type)&&W([u.x,u.z],s.points)&&a.add(d)}let l=[...a].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let c=l.some(u=>i.states[u]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"&&this.heatMode!=="wifi"){let a=this.heatMode,l=Sa(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l;let c=rt(new Date,n.config?.latitude??50);i=new Map([...l].map(([u,d])=>[u,xa(a,d,c)]))}let o=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let c=J(n,a,l,"temperature"),u=J(n,a,l,"humidity"),d=J(n,a,l,"co2"),p=Xn(d,u,kt(c,u)),h=[c!==null?`${O(n,de(n,c),1)} ${re(n)}`:null,u!==null?`${O(n,u,0)} %`:null,d!==null?`${O(n,d,0)} ppm`:null,p?`\u{1F4A8} ${E(n,`air_${p}`)}`:null].filter(w=>!!w);h.length&&o.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(o),!i)for(let a of t.floors)for(let l of a.rooms){let c=l.floor_heating?n.states[l.floor_heating]:void 0;c&&(c.entity_id.startsWith("climate.")?c.attributes.hvac_action==="heating":c.state==="on"||c.state==="open")&&(i??=new Map).set(l.id,[.55,.24,.08])}if(this._alerts.length){i??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(lr.has(l.kind))continue;let c=rl(l.kind).map(u=>u*a);if(l.roomId)i.set(l.roomId,c);else for(let u of t.floors)for(let d of u.rooms)i.set(d.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){let o=[],s=[],a=new Map,l=new Map,c=Yt(t);for(let p of t.floors)if(!(p.layer&&this.hiddenLayers.has(p.id)))for(let h of p.furniture){if(!yr(e,h))continue;let w=this.furnitureLinks.get(h.id),g=this.stateFaces(e,h);g.length&&a.set(h.id,{color:g[0].color,level:g[0].level,faces:g});let v=An(h.type);if(v&&h.care_entity){let T=this.careMarker(e,p,h,v,h.care_entity);T&&(o.push(T.marker),T.glow&&a.set(h.id,{color:T.glow,level:.9,faces:[{part:"all",color:T.glow,level:.9}]}),l.set(h.id,h.care_entity));continue}let y=Y(h.type);if(h.cover_entity&&Mn(y)&&l.set(h.id,h.cover_entity),y?.gangs){for(let b of(h.gang_entities??[]).slice(0,y.gangs)){let M=b&&b!=="none"?Te(e,b):null,U=M?j(e.states[M]):null;M&&U!==null&&!i.has(M)&&(i.add(M),s.push({id:b,powerEntity:M,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,U)}))}let T=As(e,(h.gang_entities??[]).slice(0,y.gangs),/socket/.test(h.type));T.length&&a.set(h.id,{color:T[0].color,level:T[0].level,gangs:T}),ci(h.gang_entities,y.gangs).length&&l.set(h.id,`gang:${h.id}`);continue}if(Zr(h.type)){let T=this.lampMarker(e,p,h,w?.entity??null),b=w?.power?j(e.states[w.power]):null;if(w?.power&&b!==null&&(b>=1&&(T.text=T.text?`${T.text} \xB7 ${it(e,b)}`:it(e,b)),i.has(w.power)||(i.add(w.power),s.push({id:T.id,powerEntity:w.power,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,b)}))),o.push(T),h.type==="ceiling_fan"){let M=w?.fan?e.states[w.fan]:void 0;T.spin=Zl(M),M&&!n.has(M.entity_id)&&(n.add(M.entity_id),o.push({...T,id:M.entity_id,y:Math.max(.5,T.y-.3),icon:h.icon?ke(h.icon):bt("fan"),name:h.name||C(e,M.entity_id),text:Ip(e,M),active:X(M),unavailable:I(M),glow:null,lamp:null,spin:void 0,pickable:void 0,effect:void 0}))}continue}let S=bs(h.type)?ws(e,h,T=>`${O(e,de(e,T),1)} ${re(e)}`):null,A=h.type==="home_battery"?h.soc:h.type==="wallbox"?h.status:S?h.temp_entity&&h.temp_entity!=="none"?h.temp_entity:h.temp_entity2:null,_=A&&A!=="none"?A:null,$=w??(_?{entity:null,power:null}:void 0);if(!$)continue;let H=h.type==="home_battery"?_??$.entity??$.power:$.entity??$.power??_;l.set(h.id,H);let F=$.entity?e.states[$.entity]:void 0,N=c.has(h.id),z=N?!!h.meter_invert:h.type==="meter"?t.energy.grid_invert&&!h.export:h.type==="home_battery"?t.energy.battery_invert&&!h.charge:!1,k=$.power?j(e.states[$.power],z):null,P=h.type==="home_battery"&&h.charge&&h.charge!=="none"?h.charge:h.type==="meter"&&!N&&h.export&&h.export!=="none"?h.export:null,B=P?j(e.states[P]):null;B!==null&&(k=Math.max(0,k??0)-Math.max(0,B)),$.power&&k!==null&&!i.has($.power)&&(i.add($.power),s.push({id:H,powerEntity:$.power,floorId:p.id,x:h.x,z:h.z,power:Math.max(0,k),wallbox:h.type==="wallbox"||void 0}));let L=(k??0)>10||F?.state==="on"||F?.state==="running"||Hn(F)&&X(F);if((h.type==="radiator"||y)&&F&&D(F.entity_id)==="climate"){let T=F.attributes;if(T.hvac_action==="heating"){let b=typeof T.temperature=="number"&&typeof T.current_temperature=="number"?T.temperature-T.current_temperature:1,M=!!y&&!y.parts.some(U=>U.screen);a.set(h.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,b)),heat:M||void 0})}}else(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&L?a.set(h.id,{color:[.3,.85,1],level:.8}):y&&L&&!y.light&&y.parts.some(T=>T.glow||T.screen)&&a.set(h.id,{color:[.3,.85,1],level:.8,leds:!0});if(Bi(h.type)){let T=Li(e,$.entity??$.power);if(T&&T.progress!==null&&(T.printing||/pause/.test(T.status))){let b=T.filaments[0]??"#38bdf8",M=[1,3,5].map(U=>parseInt(b.slice(U,U+2),16)/255);a.set(h.id,{color:M,level:.9,print:Math.max(.02,T.progress/100)})}}if(h.type==="home_battery"&&_){let T=Number(e.states[_]?.state);Number.isFinite(T)&&a.set(h.id,{color:T>60?[.29,.87,.5]:T>25?[.98,.8,.08]:[.97,.44,.44],level:.95,fill:T/100})}if(F&&Vn(h.type)){let T=D(F.entity_id)==="light"?Me(F):null,b=D(F.entity_id)==="media"&&["playing","on","paused","idle"].includes(F.state),M=T?T.color:X(F)||b?[.22,.88,1]:null;M&&a.set(h.id,{color:M,level:F.state==="playing"?1:.6,halo:h.ambilight??1})}if(n.has(H))continue;n.add(H);let K=$.entity?D($.entity):null,Z=p.rooms.find(T=>T.points.length>=3&&W([h.x,h.z],T.points));o.push({id:H,floorId:p.id,roomId:Z?.id??null,x:h.x,z:h.z,y:Yi(h)+se(p,h),icon:h.icon?ke(h.icon):bt(K??"switch"),name:h.name||($.entity?C(e,$.entity):he(e,h.type)),ownName:h.name||void 0,showName:!!h.show_name,text:S?S.text:h.type==="home_battery"?this.batteryText(e,_,k):h.type==="wallbox"?this.wallboxText(e,_,k):h.type==="meter"?N?k===null?"":oe(e,k):this.meterText(e,k):F&&(h.type==="washer"||h.type==="dryer"||h.type==="dishwasher")&&L&&di(e,jt(e,$.entity??$.power))!==null?E(e,"care_time_left",{time:Rs(di(e,jt(e,$.entity??$.power)))}):F?[ee(e,F),k!==null&&k>5&&!Hn(F)?oe(e,k):""].filter(Boolean).join(" \xB7 "):k!==null?oe(e,Math.max(0,k)):"",active:S?.warm||(F?X(F):(k??0)>5),unavailable:F?I(F):!1,glow:null,furnitureId:h.id,energyDevice:h.type==="inverter"||h.type==="home_battery"||h.type==="wallbox"||h.type==="meter",readout:!!S||void 0,show:h.marker??void 0,fromFurniture:!0})}let u=this.heatMode==="wifi";for(let p of o){let h=p.furnitureId?t.floors.flatMap(g=>g.furniture).find(g=>g.id===p.furnitureId):void 0;if(!h||!Vi(h.type))continue;let w=Gi(e,this.furnitureLinks.get(h.id)?.entity??this.furnitureLinks.get(h.id)?.power??null);w&&(w.clients!==null&&(p.text=E(e,"wifi_clients",{n:w.clients})),u&&(p.wedge={angle:360,reach:9,near:0,color:Pl(w),opacity:.4,through:!0,walls:!1},p.show="always"))}let d=ll(t,o);this.tapPins=d.pins;for(let p of t.floors.flatMap(h=>h.furniture))p.tap?.action&&l.set(p.id,`tap:${p.id}`);for(let{floor:p,item:h}of d.bare){let w=p.rooms.find(v=>v.points.length>=3&&W([h.x,h.z],v.points)),g=h.name||he(e,h.type);o.push({id:`tap:${h.id}`,floorId:p.id,roomId:w?.id??null,x:h.x,z:h.z,y:Yi(h)+se(p,h),icon:ke(h.icon||"gesture-tap-button"),name:g,ownName:h.name||void 0,showName:!!h.show_name,text:"",active:!1,unavailable:!1,glow:null,furnitureId:h.id,show:h.marker??void 0,fromFurniture:!0})}return{markers:o,consumers:s,screens:a,targets:l}}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||se(e,i)>.12)return!1;let o=Y(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:W([i.x,i.z],t)||Dn(i).some(s=>W(s,t))}).map(i=>Dn(i))}robotInfos(e,t){let n=[];for(let i of t.floors){for(let o of i.furniture){if(o.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=o.rotation*Math.PI/180,u=o.d*.14,d=[o.x-Math.sin(c)*u,o.z+Math.cos(c)*u],p=i.rooms.filter(v=>v.points.length>=3),w=(l==="cleaning"?si(e,p,s,Gn(e,s,o.room_sensor)):null)??p.find(v=>W(d,v.points)),g=l==="cleaning"&&w?this.robotObstacles(i,w.points):[];n.push({id:o.id,floorId:i.id,rest:d,restHeading:-c,mode:l,room:w?.points??null,roomId:w?.id??null,obstacles:g})}for(let o of i.furniture){if(!/:(robot_mower|mower_dock)$/.test(o.type))continue;let s=this.furnitureLinks.get(o.id)?.entity??null;if(!s?.startsWith("lawn_mower."))continue;let a=e.states[s]?.state,l=a==="mowing"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=[o.x,o.z],u=(i.outdoor??[]).filter(h=>h.type==="lawn"&&h.points.length>=3),d=u.find(h=>W(c,h.points))??[...u].sort((h,w)=>Lt(w.points)-Lt(h.points))[0],p=d?(i.outdoor??[]).filter(h=>h!==d&&h.type!=="lawn"&&h.points.some(w=>W(w,d.points))).map(h=>h.points):[];n.push({id:o.id,floorId:i.id,rest:c,restHeading:-o.rotation*Math.PI/180,mode:l,room:d?.points??null,roomId:d?.id??null,obstacles:p,y:d?Tn(i,d,c[0],c[1]):Fn(i),mower:!0})}}return n}batteryText(e,t,n){let i=t?Number(e.states[t]?.state):Number.NaN,o=[];return Number.isFinite(i)&&o.push(`${O(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&o.push(`${n<0?"\u25B2":"\u25BC"} ${oe(e,Math.abs(n))}`),o.join(" \xB7 ")}subMeterText(e,t,n,i){let o=i?da(t,n,i):null;return o?oe(e,o.use)+(o.unmetered===null?"":` \xB7 ${E(e,"meter_unmetered",{w:oe(e,o.unmetered)})}`):null}meterText(e,t){return t===null?"":Math.abs(t)<5?oe(e,0):`${E(e,t<0?"energy_grid_export":"energy_grid_import")} ${oe(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,o=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(o),a=i?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=s?E(e,"wallbox_charging"):a?E(e,"wallbox_plugged"):i&&!I(i)&&!i.entity_id.startsWith("binary_sensor.")?ee(e,i):"",c=n!==null&&n>50?oe(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[o,s]of i){if(!o||o==="none")continue;let a=e.states[o];if(!a||I(a)||!(X(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=D(o)==="light"?Me(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}careMarker(e,t,n,i,o){let s=e.states[o];if(!s)return null;let a="",l=!1,c=null;if(i==="bin"){let p=Kn(s);a=p===null?ee(e,s):p===0?E(e,"care_bin_today"):p===1?E(e,"care_bin_tomorrow"):E(e,"care_bin_days",{n:p}),l=p!==null&&p<=1,l&&(c=[1,.72,.28])}else if(i==="mail")l=Es(s),a=E(e,l?"care_mail_yes":"care_mail_no"),l&&(c=[1,.85,.3]);else{let p=zs(s,n.thirsty_below??20);l=!!p?.thirsty,a=p?Number.isFinite(p.moisture)?`${E(e,l?"care_plant_thirsty":"care_plant_ok")} \xB7 ${Math.round(p.moisture)} %`:E(e,l?"care_plant_thirsty":"care_plant_ok"):ee(e,s),l&&(c=[1,.45,.3])}let u=t.rooms.find(p=>p.points.length>=3&&W([n.x,n.z],p.points)),d={bin:"mdi:trash-can-outline",mail:"mdi:mailbox-outline",plant:"mdi:sprout-outline"}[i];return{glow:c,marker:{id:o,floorId:t.id,roomId:u?.id??null,x:n.x,z:n.z,y:Yi(n)+se(t,n),icon:n.icon?ke(n.icon):ke(d),name:n.name||he(e,n.type),ownName:n.name||void 0,showName:!!n.show_name,text:a,active:l,unavailable:I(s),glow:null,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0,care:!0}}}lampMarker(e,t,n,i){let o=i?e.states[i]:void 0,s=(n.extra_lights??[]).map(v=>e.states[v]).filter(v=>!!v),a=s.find(v=>X(v)),l=Y(n.type),c=Xo[n.type]??l?.light??"floor",u=t.rooms.some(v=>v.points.length>=3&&W([n.x,n.z],v.points)),d=c==="strip"&&!u?Ct(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!l?n.mount_y:l||c==="wall"||c==="strip"?se(t,n):c==="table"?Rn(t,n.x,n.z):c==="bollard"||c==="garden"?Ct(t,n.x,n.z):0,p=t.rooms.find(v=>v.points.length>=3&&W([n.x,n.z],v.points)),h=zn(t,n),w=l?l.mount==="ceiling"?Math.max(.5,d-.15):d+n.h+.2:{ceiling:h-.3,downlight:h-.25,spot:h-.35,panel:h-.25,pendant:Math.max(.6,h-n.h-.25),fan:Math.max(.6,h-n.h-.2),floor:d+n.h+.25,uplight:d+n.h+.25,table:d+n.h+.2,wall:d+n.h+.2,strip:n.upright?d+n.w+.15:Math.max(.3,d-.2),bollard:d+n.h+.25,garden:d+n.h+.25}[c],g={id:i??`lamp:${n.id}`,floorId:t.id,roomId:p?.id??null,x:n.x,z:n.z,y:w,icon:bt("light"),name:n.name||(i?C(e,i):he(e,n.type)),text:o&&(X(o)||!a)?ee(e,o):a?C(e,a.entity_id):"",active:(o?X(o):!1)||!!a,unavailable:o?I(o):!1,glow:o||s.length?hi(ss(o,s,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.glow_scale):null,lamp:c,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:d,pickable:!!i,furnitureId:n.id,pack:l?n.type:null,lightY:l?l.mount==="ceiling"?d:d+n.h*.85:void 0,ceiling:h,effect:o?.state==="on"?Zn(n,Os(e,n,i)):void 0,variant:n.variant,show:n.marker??void 0,fromFurniture:!0};return o&&i?pi(e,g,o,!1):g}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always")return!0;if(e.show==="active"||this.building?.settings.motion_markers_active&&is(this.hass,e.id)){if(!e.active)return!1;if(e.show==="active")return!0}if(this.markersOutside&&!(this.roomId&&e.roomId===this.roomId))return this.markersOutside.includes(ts(e.id,!!e.lamp));if(this.markerMode==="all")return!0;if(e.lamp)return!1;let t=D(e.id);return t==="light"?!1:e.fromFurniture&&t==="fan"?!0:e.care?e.active:e.id.startsWith("tap:")||e.readout?!0:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let i=n.lock??n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return m;let e=new Map(this.building.floors.map(o=>[o.id,o.name])),t=[...this._thumbs].sort((o,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===o.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n;try{localStorage.setItem("nextfloor.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return f`<nav class="nf-thumbs ${this.narrowThumbs?"nf-thumbs-small":""} ${this._shortStage?"nf-thumbs-short":""} ${n?"nf-thumbs-compact":""}" aria-label=${E(this.hass,"floors")}>
      <button class="nf-thumbs-fold" title=${E(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${E(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${E(this.hass,"all_floors")}</span>
      </button>
      ${t.map(o=>f`<button class="nf-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${n?m:f`<img src=${o.url} alt="" />`}
          <span>${e.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let i=D(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"?this._menu={entity:e,x:t,y:n}:me(this,e)}onDeviceSwipe(e,t,n,i,o){let s=this.hass?.states[e];if(t==="start"){if(!s||I(s)||this.confirmSet.has(e))return!1;let l=D(e);if(l==="light"&&ji(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:o},!0}if(l==="fan"&&typeof s.attributes.percentage_step=="number"){let c=s.state==="on"&&typeof s.attributes.percentage=="number"?s.attributes.percentage:0;return this._swipe={entity:e,kind:"fan",start:c,value:c,x:i,y:o},!0}if(l==="cover"&&qi(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):e.kind==="fan"?e.value<=0?this.hass.callService("fan","turn_off",{entity_id:e.entity}):this.hass.callService("fan","set_percentage",{entity_id:e.entity,percentage:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}openRoom(e,t){this.floorId===e&&this.roomId===t||(this.floorId!==e?(this.fire("floor-tap",{floorId:e}),setTimeout(()=>this.fire("room-tap",{floorId:e,roomId:t}),60)):this.fire("room-tap",{floorId:e,roomId:t}))}goTo(e){if(this._find=null,e.kind==="room"||e.kind==="circuit"){e.roomId&&this.openRoom(e.floorId,e.roomId);return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}listenToAnnouncements(e){if(!e){this.stopAnnouncements?.(),this.stopAnnouncements=null,clearTimeout(this.announceTimer);return}if(this.stopAnnouncements)return;let t=!1;this.stopAnnouncements=()=>t=!0,Ys(this.hass,n=>this.announce(n)).then(n=>{t?n():this.stopAnnouncements=n})}announce(e){if(typeof e?.message!="string"||!e.message.trim()||!Us(e,this.screenName)||!js(e))return;let t=qs(e.message);this._announcement={message:e.message,until:Date.now()+t},clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announcement=null,t),Zs(this.hass,e)}renderAnnouncement(){let e=this._announcement;return e?f`<button class="nf-announcement" role="alert" title=${E(this.hass,"close")} @click=${()=>this._announcement=null}>
      <span class="nf-announcement-icon" aria-hidden="true">📢</span><span class="nf-announcement-text">${e.message}</span>
    </button>`:m}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return m;let t=this._alerts.slice(0,3);return f`<div class="nf-alert-banner" role="alert">
      ${t.map(n=>f`<button class="nf-alert nf-alert-${n.kind}" style=${n.color?`border-left-color:${n.color}`:""} title=${Ai(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Ai(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?f`<span class="nf-alert-more">+${this._alerts.length-3}</span>`:m}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return m;let t=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this.roomId),n=t?G(this.hass,t).filter(o=>D(o)==="scene"||D(o)==="script").slice(0,6):[];if(!n.length)return m;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return f`<div class="nf-scenes">
      ${n.map(o=>f`<button class="nf-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${C(this.hass,o,i)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return m;if(this._find===null)return f`<button class="nf-find-btn" title=${E(this.hass,"find")} aria-label=${E(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Gl(this.findIndex??=Vl(this.hass,e),this._find);return f`<div class="nf-find">
      <input
        type="search"
        placeholder=${E(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="nf-find-close" aria-label=${E(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?f`<div class="nf-find-list">
            ${t.length?t.map(n=>f`<button @click=${()=>this.goTo(n)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?qn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?f`<small>${n.where}</small>`:m}</span>
                  </button>`):f`<p>${E(this.hass,"find_none")}</p>`}
          </div>`:m}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null)return m;let n=(g,v)=>E(t,g,v),i=f`<button
      class="nf-central-btn ${this._central?"nf-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?e.floors.find(g=>g.id===this.floorId):void 0,s=o?[o]:e.floors,a=s.flatMap(g=>ai(t,g).lights),l=s.flatMap(g=>ai(t,g).covers),c=a.filter(g=>t.states[g]?.state==="on").length,u=!o,d=(g,v,y,S)=>{if(S.length){if(u&&this._armed!==g){this._armed=g,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(v,y,{entity_id:S})}},p=(g,v,y,S,A)=>f`<button class="nf-btn ${this._armed===g?"nf-central-armed":""}" ?disabled=${!A.length} @click=${()=>d(g,y,S,A)}>
        ${this._armed===g?n("central_sure"):n(v)}
      </button>`,h=(e.settings.favorites??[]).filter(g=>t.states[g]),w=this.buttons??e.settings.buttons??[];return f`${i}
      <div class="nf-central ${this.centralOpen?"nf-central-big":""}" role="dialog" aria-label=${n("central")}>
        <b>${o?o.name:n("central_house")}</b>
        <div class="nf-central-row">
          <span>${n("central_lights")}${a.length?f` <small>${c}/${a.length}</small>`:m}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(g=>t.states[g]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(g=>t.states[g]?.state==="on"))}
        </div>
        ${l.length?f`<div class="nf-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:m}
        <b>${n("central_favorites")}</b>
        ${h.length?f`<div class="nf-central-favs">
              ${h.map(g=>{let[v,y]=$s(g),S=t.states[g],A=v==="homeassistant"&&S?.state==="on";return f`<button
                  class="nf-chip"
                  aria-pressed=${A||this._sceneFired===g}
                  ?disabled=${I(S)}
                  @click=${()=>{t.callService(v,y,{entity_id:g}),this._sceneFired=g,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${C(t,g)}
                </button>`})}
            </div>`:w.length?m:f`<p class="nf-central-hint">${n("central_no_favorites")}</p>`}
        ${w.length?f`<div class="nf-central-favs">
              ${w.map(g=>f`<button
                  class="nf-chip nf-own-btn"
                  aria-pressed=${Ms(t,g)}
                  @click=${v=>{li(t,v.currentTarget,g),g.action!=="service"&&(this._central=!1)}}
                >
                  ${g.icon?f`<ha-icon .icon=${g.icon.startsWith("mdi:")?g.icon:`mdi:${g.icon}`}></ha-icon>`:m}${g.label}
                </button>`)}
            </div>`:m}
      </div>`}toggleLock(){this._locked=!this._locked;try{localStorage.setItem(Xl,this._locked?"1":"0")}catch{}}async openTravel(e){if(clearInterval(this.travelTimer),this.travelTimer=void 0,e===null||!this.hass){this._travel=null,this.syncDevices(!0);return}let t=Date.now(),n=t-e*36e5;this._travel={history:new Map,from:n,to:t,t:n,playing:!1,speed:e>24?3600:600,hours:e,moments:[],loading:!0};try{let i=await tn(this.hass,Oa(this.watched),n,t);if(!this._travel||this._travel.from!==n)return;this._travel={...this._travel,history:i,moments:Ca(i,n,t),loading:!1}}catch{this._travel=null,this._error=E(this.hass,"travel_failed");return}this.syncDevices(!0)}travelTo(e){let t=this._travel;t&&(this._travel={...t,t:Math.min(t.to,Math.max(t.from,e))},this.syncDevices(!0))}playTravel(e){let t=this._travel;t&&(clearInterval(this.travelTimer),this.travelTimer=void 0,this._travel={...t,playing:e,t:e&&t.t>=t.to?t.from:t.t},e&&(this.travelTimer=setInterval(()=>{let n=this._travel;if(!n)return;let i=n.t+250*n.speed;i>=n.to&&this.playTravel(!1),this.travelTo(i)},250)))}renderTravel(){if(!this.hass||this.clean)return m;let e=a=>E(this.hass,a),t=this._travel;if(!t)return this.travelButton?f`<button class="nf-travel-btn" title=${e("travel")} aria-label=${e("travel")} @click=${()=>{this.openTravel(24)}}>⏪</button>`:m;let n=this.hass.language??navigator.language,i=new Intl.DateTimeFormat(n,{weekday:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(t.t)),o=t.to-t.from||1,s=[[60,"travel_speed_min"],[600,"travel_speed_10min"],[3600,"travel_speed_hour"]];return f`<div class="nf-travel" role="group" aria-label=${e("travel")}>
      <button class="nf-travel-play" aria-label=${e(t.playing?"travel_pause":"travel_play")} ?disabled=${t.loading} @click=${()=>this.playTravel(!t.playing)}>${t.playing?"\u23F8":"\u25B6"}</button>
      <b class="nf-travel-when">${t.loading?e("travel_loading"):i}</b>
      <div class="nf-travel-track">
        <svg viewBox="0 0 1000 10" preserveAspectRatio="none" aria-hidden="true">${t.moments.map(a=>Q`<rect x=${(a-t.from)/o*1e3} y="0" width="1.6" height="10" />`)}</svg>
        <input type="range" min=${t.from} max=${t.to} step="60000" .value=${String(t.t)} ?disabled=${t.loading} aria-label=${e("travel")} @input=${a=>this.travelTo(Number(a.target.value))} />
      </div>
      <select aria-label=${e("travel_speed")} @change=${a=>this._travel={...t,speed:Number(a.target.value)}}>
        ${s.map(([a,l])=>f`<option value=${a} ?selected=${t.speed===a}>${e(l)}</option>`)}
      </select>
      <button class="nf-travel-span" aria-pressed=${t.hours===24} @click=${()=>{this.openTravel(24)}}>24 h</button>
      <button class="nf-travel-span" aria-pressed=${t.hours===168} @click=${()=>{this.openTravel(168)}}>7 ${e("travel_days")}</button>
      <button class="nf-travel-live" @click=${()=>{this.openTravel(null)}}>● ${e("travel_live")}</button>
    </div>`}toggleWalk(){let e=this.viewer;e&&(this._walking?(e.stopWalk(),this._walking=!1):this._walking=e.startWalk()!==null,this._stick=null)}stickMove(e,t=!1){let n=e.currentTarget;if(t)n.setPointerCapture(e.pointerId);else if(!this._stick)return;let i=n.getBoundingClientRect(),o=i.width/2,[s,a]=[(e.clientX-i.left-o)/o,(e.clientY-i.top-o)/o],l=Math.hypot(s,a);l>1&&([s,a]=[s/l,a/l]),this._stick=[s,a],this.viewer?.setWalkStick(Math.abs(s)<.12?0:s,Math.abs(a)<.12?0:a)}stickEnd(){this._stick=null,this.viewer?.setWalkStick(0,0)}renderWalk(){if(!this.hass||this.clean||!this.walkButton&&!this._walking)return m;let e=n=>E(this.hass,n),t=this._stick??[0,0];return f`<button class="nf-walk-btn ${this._walking?"nf-walk-on":""}" title=${e(this._walking?"walk_stop":"walk")} aria-label=${e(this._walking?"walk_stop":"walk")} aria-pressed=${this._walking} @click=${()=>this.toggleWalk()}>
        ${this._walking?"\u2715":Q`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2" /><path d="M10 21l2-6 3 3v5M9 12l1-4 4 1 3 3M8 9l-2 4" /></svg>`}
      </button>
      ${this._walking?f`<div class="nf-stick" @pointerdown=${n=>this.stickMove(n,!0)} @pointermove=${n=>this.stickMove(n)} @pointerup=${()=>this.stickEnd()} @pointercancel=${()=>this.stickEnd()}>
              <span style="transform:translate(${t[0]*34}px, ${t[1]*34}px)"></span>
            </div>
            <p class="nf-walk-hint">${e("walk_hint")}</p>`:m}`}renderLock(){if(!this.lockButton||!this.hass||this.clean)return m;let e=E(this.hass,this._locked?"lock3d_off":"lock3d_on");return f`<button class="nf-lock3d ${this._locked?"nf-lock3d-on":""}" title=${e} aria-label=${e} aria-pressed=${this._locked} @click=${()=>this.toggleLock()}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        ${this._locked?Q`<path d="M8 11V8a4 4 0 0 1 8 0v3" />`:Q`<path d="M8 11V8a4 4 0 0 1 7.5-2" />`}
      </svg>
    </button>`}renderClock(e=!1){if(!this.clock||!this.hass||this.clock==="top_left"&&!e)return m;let t=this.hass.language??navigator.language,n=new Date(this._now),i=new Intl.DateTimeFormat(t,{hour:"2-digit",minute:"2-digit"}).format(n),o=new Intl.DateTimeFormat(t,{weekday:"long",day:"numeric",month:"long"}).format(n);return f`<div class="nf-clock nf-clock-${this.clock}" aria-hidden="true"><b>${i}</b><span>${o}</span></div>`}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return m;let e=E(this.hass,this.clean?"controls_show":"controls_hide");return f`<button
      class="nf-eye ${this.clean?"nf-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Q`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Q`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return m;let t=e.kind==="light"&&e.value<=0;return f`<div class="nf-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${C(this.hass,e.entity)}</span>
      <b>${t?E(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}tapPlate(e,t,n){let i=this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e),o=i?ci(i.gang_entities,Y(i.type)?.gangs??0):[];if(o.length===1)return this.onDeviceTap(o[0],t,n);o.length>1&&(this._plate={ids:o,x:t,y:n})}renderPlate(){let e=this._plate;if(!e||!this.hass)return m;let t=this.hass,n=()=>this._plate=null;return f`<div class="nf-menu-backdrop" @click=${n}></div>
      <div class="nf-plate-menu" style="left:${Math.max(8,e.x-110)}px;top:${Math.max(8,e.y-20-e.ids.length*46)}px" role="menu">
        ${e.ids.map((i,o)=>{let s=t.states[i],a=X(s)||s?.state==="on";return f`<button role="menuitem" class=${a?"on":""} @click=${()=>{n(),this.onDeviceTap(i,e.x,e.y)}}><b>${o+1}</b><span>${C(t,i)}</span><i>${s?ee(t,s):"\u2013"}</i></button>`})}
      </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return m;let t=this.renderRoot.querySelector(".nf-stage"),n=t?.clientWidth??800,i=t?.clientHeight??600,o=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return f`<div class="nf-menu-backdrop" @click=${()=>this._menu=null}></div>
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
      ></nf-quick-menu>`}myPositionOf(e){for(let t of this.building?.floors??[])for(let n of t.openings){let i=this.openingLinks?.get(n.id);if(n.my_position!=null&&(i?.cover===e||i?.cover2===e))return n.my_position}return null}onDeviceTap(e,t=0,n=0){if(e.startsWith("lamp:")||this._travel)return;let i=e.startsWith("tap:")?e.slice(4):this.tapPins.get(e);if(i){let s=this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===i);s?.tap&&li(this.hass,this,s.tap);return}if(this.pluginTapped(e))return;if(e.startsWith("gang:"))return this.tapPlate(e.slice(5),t,n);if(e.startsWith("outdoor:")){this.fire("room-tap",{floorId:null,roomId:"nf-outside"});return}if(e==="grid"){let s=this.building,a=s?s.energy.grid??Re(s,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;a&&me(this,a);return}let o=D(e);if(o==="cover"||o==="media"){this._menu={entity:e,x:t,y:n};return}if(o==="lock"){let s=oi(this.hass,e),a=C(this.hass,e);confirm(E(this.hass,s?"lock_confirm_lock":"lock_confirm_unlock",{name:a}))&&this.hass.callService("lock",s?"lock":"unlock",{entity_id:e});return}if(o&&ns.has(o)){if(this.confirmSet.has(e)&&!confirm(E(this.hass,"confirm_switch",{name:C(this.hass,e)})))return;Vs(this.hass,e)}else me(this,e)}pluginTapped(e){let t=this.hass?.states[e],n=this.placementInfo.get(e);if(!t||!n)return!1;let i=this.building?.floors.find(o=>o.id===n.floorId)?.placements.find(o=>o.entity_id===e);return Io({hass:this.hass,entityId:e,state:t},n,i?.plugin??void 0,{showWindow:(o,s)=>{o&&"hass"in o&&(o.hass=this.hass),this._pluginWindow=o?{node:o,title:s?.title??""}:null},moreInfo:o=>me(this,o??e)})}renderPluginWindow(){let e=this._pluginWindow;return e?f`<div class="nf-plugin-window" @pointerdown=${t=>t.stopPropagation()}>
      <div class="nf-pw-head"><span>${e.title}</span><button class="nf-pw-close" aria-label=${E(this.hass,"close")} @click=${()=>this._pluginWindow=null}>✕</button></div>
      <div class="nf-pw-body">${e.node}</div>
    </div>`:m}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("nextfloor.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}liveHeatPumps(e){let t=this.hass;if(!t)return[];let n=[];for(let i of e.floors)for(let o of i.furniture){if(!Fl(o.type))continue;let s=this.furnitureLinks?.get(o.id),a=Tl(t,s?.entity??s?.power??null);a&&n.push({id:o.id,name:o.name||he(t,o.type),floorId:i.id,x:o.x,z:o.z,at:{floorId:i.id,x:o.x,z:o.z,y:se(i,o)+o.h+.5},pump:a})}return n}livePrinters(e){let t=this.hass,n=[];if(!t)return n;for(let i of e.floors)for(let o of i.furniture){if(!Bi(o.type))continue;let s=this.furnitureLinks?.get(o.id),a=Li(t,s?.entity??s?.power??null);!a||!a.printing&&!/pause|finish|complete|error/.test(a.status)||n.push({id:o.id,name:o.name||he(t,o.type),at:{floorId:i.id,x:o.x,z:o.z,y:se(i,o)+o.h+.5},printer:a})}return n}liveCars(e,t){let n=[];for(let i of t.floors)for(let o of i.furniture){if(o.type!=="parking")continue;let s=Wl(e,o);if(!s||s.soc===null&&s.range===null&&s.locked===null&&s.climateOn===null)continue;let a=Ei(e,o),l=a?sl(o,a):null,c=o.name||(a?he(e,a):he(e,o.type));n.push({spot:o.id,name:c,at:{floorId:i.id,x:o.x,z:o.z,y:se(i,o)+(l?.h??.2)+.6},car:s})}return n}liveMedia(e,t){let n=[];for(let i of t.floors){for(let o of i.furniture){let s=this.furnitureLinks?.get(o.id)?.entity;s?.startsWith("media_player.")&&n.push({entity:s,name:o.name||he(e,o.type),at:{floorId:i.id,x:o.x,z:o.z,y:se(i,o)+o.h+.15}})}for(let o of i.placements)o.entity_id.startsWith("media_player.")&&n.push({entity:o.entity_id,name:o.name||C(e,o.entity_id),at:{floorId:i.id,x:o.x,z:o.z,y:(o.y??1.1)+.15}})}return Ka(e,n)}refreshToday(e){let t=this.hass,n=e.settings.calendars??[],i=new Date().toDateString();!t||!n.length||Date.now()-this.todayAt<9e5&&i===this.todayDay||(this.todayAt=Date.now(),this.todayDay=i,zl(t,n).then(o=>this._todayItems=o))}renderToday(){let e=this.building,t=this.hass;if(!e||!t||this.today===!1||this.clean||this.roomId)return m;let n=Al(t,e,Date.now(),{today:E(t,"care_bin_today"),tomorrow:E(t,"care_bin_tomorrow")}),i=El([...n,...this._todayItems??[]]);if(!i.length&&!(e.settings.calendars??[]).length)return m;let o=this._todayOpen!==!1,s=new Intl.DateTimeFormat(t.language??navigator.language,{weekday:"long",day:"numeric",month:"long"}).format(new Date);return f`<section class="nf-today ${o?"":"nf-today-folded"}" style=${this.clock==="top_right"?"top: 78px":""} aria-label=${E(t,"today")}>
      <button class="nf-today-head" aria-expanded=${o} @click=${()=>this._todayOpen=!o}>
        <b>📅 ${E(t,"today")}</b><span>${s}</span>
      </button>
      ${o?i.length?f`<ul>
              ${i.map(a=>f`<li class=${a.past?"nf-today-past":""}><time>${a.kind==="bin"?"\u{1F5D1}":a.time||"\u25CF"}</time><span>${a.title}<small>${a.source}</small></span></li>`)}
            </ul>`:f`<p class="nf-today-none">${E(t,"today_none")}</p>`:m}
    </section>`}week=null;weekAt=0;refreshWeek(e){let t=this.hass;if(!t||this._travel||Date.now()-this.weekAt<36e5)return;this.weekAt=Date.now();let n=Re(e,s=>this.furnitureLinks?.get(s.id)?.power??null),i=e.energy,o={solar:i.solar?[i.solar]:n.solar,grid:i.grid??n.grid,gridInvert:!!i.grid_invert,battery:i.battery?[i.battery]:n.battery,batteryInvert:!!i.battery_invert,consumption:i.consumption};Ma(t,o).then(s=>{this.week=s,this.syncDevices(!0)}).catch(()=>this.week=null)}meterRows(e,t=null){let n=this.hass,i=[],o=this.floorId?e.floors.find(a=>a.id===this.floorId):void 0,s=o?.power_entity?j(n?.states[o.power_entity]):null;if(o&&s!==null){let a=t&&t>0?` \xB7 ${E(n,"floor_power_share",{n:Math.round(Math.max(0,s)/t*100)})}`:"";i.push({icon:"\u26A1",label:o.name,value:`${it(n,s)}${a}`})}for(let[a,l,c]of[["gas","\u{1F525}","energy_gas_short"],["water","\u{1F4A7}","energy_water_short"]]){let u=e.energy[a],d=u?n?.states[u]:void 0;d&&!I(d)&&i.push({icon:l,label:E(n,c),value:ee(n,d)})}return i}refreshDayCurves(e){let t=this.hass;if(!t||this._travel||Date.now()-this.curvesAt<6e5)return;this.curvesAt=Date.now();let n=a=>Qt(a,e,Jt(a,e),Re(e,l=>this.furnitureLinks?.get(l.id)?.power??null)),i=La(t,n),o=Date.now(),s=o-24*36e5;tn(t,i,s,o,!0).then(a=>{this.dayCurves=Ba(t,a,s,o,n),this.syncDevices(!0)}).catch(()=>this.dayCurves=null)}syncLhCards(e,t,n,i,o){let s=[],a=n.summary,l=a.solar!==null||a.grid!==null||a.battery!==null||a.consumption!==null,c=un(t),u=(this.floorId?t.floors.find(d=>d.id===this.floorId):void 0)??[...t.floors].sort((d,p)=>p.elevation-d.elevation)[0];if(this.liveCardsOn&&!this.dimmed&&!this.roomId&&l&&c&&u){let d=0,p=0,h=0;for(let w of u.rooms)for(let[g,v]of w.points)d+=g,p+=v,h++;s.push({kind:"house",at:{floorId:u.id,x:h?d/h:c.x,z:h?p/h:c.z,y:u.height+(this.floorId?1.2:3.2)},summary:a,autarky:n.autarky,curves:this.dayCurves??void 0,week:this.week??void 0,meters:this.meterRows(t,a.consumption)}),this.refreshDayCurves(t),this.refreshWeek(t)}if(this.liveCardsOn&&!this.dimmed&&!this.roomId){for(let d of i)s.push({kind:"car",at:d.at,spot:d.spot,name:d.name,car:d.car});for(let d of this.livePrinters(t))s.push({kind:"printer",at:d.at,name:d.name,printer:d.printer});for(let d of this.liveHeatPumps(t))s.push({kind:"heatpump",at:d.at,name:d.name,pump:d.pump});for(let d of o)s.push({kind:"media",at:{...d.at,y:d.at.y+.5},media:d})}JSON.stringify(s)!==JSON.stringify(this._liveCards)&&(this._liveCards=s),e.setLiveAnchors(s.map(d=>d.at),s.length?(d,p,h,w)=>this.placeLhCard(d,p,h,w):null)}placeLhCard(e,t,n,i){let o=this.renderRoot.querySelector(`.live-card[data-i="${e}"]`);o&&(o.dataset.x=String(t),o.dataset.y=String(n),o.style.visibility=i?"visible":"hidden",e===this._liveCards.length-1&&Ol(this.renderRoot))}toggleLhCards(){this._liveCardOn=!this._liveCardOn;try{localStorage.setItem("nextfloor.cards",this._liveCardOn?"1":"0")}catch{}this.syncDevices(!0)}renderTopLeft(){let e=this.clean?m:this.renderLhEnergy();return this.clock!=="top_left"||!this.hass?e:f`<div class="nf-topleft">${this.renderClock(!0)}${e}</div>`}renderLhEnergy(){let e=this.ownSensors(),t=this._liveEnergy?.summary;if(!(!!t&&!this.roomId&&this.showEnergy&&!!this.hass&&!(t.consumption===null&&t.grid===null&&t.solar===null&&t.battery===null)))return e.length?f`<div class="nf-energy" aria-live="off">${e}</div>`:m;let i=s=>E(this.hass,s),o=[];if(t.solar!==null&&o.push({cls:"solar",label:i("energy_solar"),value:oe(this.hass,t.solar)}),t.consumption!==null&&o.push({cls:"total",label:i("energy_consumption"),value:oe(this.hass,t.consumption)}),t.rest!==void 0&&t.rest!==null&&o.push({cls:"total",label:i("energy_rest"),value:oe(this.hass,t.rest)}),t.battery!==null||t.soc!==null){let s=[t.battery!==null?oe(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);o.push({cls:"battery",label:i("energy_battery"),value:s.join(" \xB7 ")})}if(t.grid!==null){let s=t.grid<0;o.push({cls:s?"export":"grid",label:i(s?"energy_grid_export":"energy_grid_import"),value:oe(this.hass,Math.abs(t.grid))})}if(t.tariff&&o.push({cls:"tariff",label:i("energy_tariff"),value:`${O(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),this.building)for(let s of this.meterRows(this.building))o.push({cls:"meter",label:`${s.icon} ${s.label}`,value:s.value});return f`<div class="nf-energy" aria-live="off">
      ${this.liveCardsOn&&this._liveCards.some(s=>s.kind==="house")?m:o.map(s=>f`<div class="nf-energy-item nf-energy-${s.cls}"><span>${s.label}</span><b>${s.value}</b></div>`)}
      ${this.flows!==null?m:f`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${i("flows_hint")} aria-label=${i("flows")} @click=${()=>this.toggleFlows()}>
            <span>${i("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms!==null?m:f`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${i("holos_hint")} aria-label=${i("holos")} @click=${()=>this.toggleLhCards()}>
            <span>${i("holos")}</span><b>◫</b>
          </button>`}
      ${e}
    </div>`}ownSensors(){return(this.sensorBar&&this.hass?this.building?.settings.status_entities??[]:[]).filter(t=>this.hass.states[t]).map(t=>f`<button class="nf-energy-item nf-own-sensor" title=${C(this.hass,t)} @click=${()=>me(this,t)}>
          <span>${C(this.hass,t)}</span><b>${ee(this.hass,this.hass.states[t])}</b>
        </button>`)}renderMapCredit(){let e=this.building?.settings.map;return ul(e)?f`<a class="nf-map-credit" href=${Ti(e).href} target="_blank" rel="noopener">${Ti(e).text}</a>`:m}renderLegend(){if(this.heatMode==="wifi")return this.renderWifiLegend();if(this.heatMode==="none"||this.heatMode==="values")return m;let e=rt(new Date,this.hass?.config?.latitude??50),t=tr(this.heatMode,e),n=this.heatMode==="temperature",i=n?de(this.hass,t.stops[0][0]):t.stops[0][0],o=n?de(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],s=n?re(this.hass):t.unit,a=l=>E(this.hass,l);return f`<div class="nf-legend">
      <b>${a(`heat_${this.heatMode}`)}${this.heatMode==="temperature"?f` <small>${a(e?"heat_summer":"heat_winter")}</small>`:m}</b>
      <span class="nf-legend-bar" style="background:${$a(this.heatMode,e)}"></span>
      <span class="nf-legend-range"><span>${O(this.hass,i,0)} ${s}</span><span>${O(this.hass,o,0)} ${s}</span></span>
      ${this.heatValues.size?m:f`<span class="nf-legend-none">${a("heat_none_found")}</span>`}
    </div>`}renderWifiLegend(){let e=this.hass,t=this.building;if(!e||!t)return m;let n=(c,u)=>E(e,c,u),i=t.floors.flatMap(c=>c.furniture.filter(u=>Vi(u.type)).map(u=>Gi(e,this.furnitureLinks?.get(u.id)?.entity??this.furnitureLinks?.get(u.id)?.power??null))),s=i.filter(c=>!!c).reduce((c,u)=>c+(u.clients??0),0),a=t.floors.flatMap(c=>c.placements.map(u=>e.states[u.entity_id])),l=Hl(a);return f`<div class="nf-legend">
      <b>📶 ${n("heat_wifi")}</b>
      <span>${n("wifi_aps",{n:i.length,clients:s})}</span>
      ${l.online+l.offline.length?f`<span>${n("wifi_network",{online:l.online,offline:l.offline.length})}</span>`:m}
      ${l.offline.length?f`<span class="nf-legend-none">${l.offline.slice(0,4).join(", ")}</span>`:m}
      ${i.length?m:f`<span class="nf-legend-none">${n("wifi_none")}</span>`}
    </div>`}skyColor(){let e=rn[this.theme]??rn.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}render(){let e=this._sky,t=(o,s)=>`rgb(${o.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=rn[this.theme]??rn.neon,i=`--nf-sky:${t(n.night[0],n.day[0])};--nf-ground:${t(n.night[1],n.day[1])}`+Va(this.building?.settings.backdrop);return f`<div
      class="nf-stage ${this.roomLabels?"":"nf-no-room-names"} ${this._low?"nf-low":""} ${this.panelOpen?"nf-panel-open":""} ${this._alerts.length?"nf-has-alerts":""} ${this._narrowStage?"nf-narrow":""}"
      style=${i}
    >
      ${this._error?f`<p class="nf-error">${this._error}</p>`:m} ${this.renderTopLeft()} ${Cl(this.hass,this.roomId||this.panelOpen?[]:this._liveCards,(o,s,a,l)=>this.hass?.callService(o,s,{entity_id:a,...l}))} ${this.clean?m:this.renderLegend()} ${this.renderMapCredit()}
      ${this.renderAlerts()} ${this.renderAnnouncement()} ${this.clean?m:f`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()}
      ${this.renderMenu()} ${this.renderPlate()} ${this.renderEye()} ${this.renderLock()} ${this.renderWalk()} ${this.renderTravel()} ${this.renderClock()} ${this.renderToday()} ${this.renderLayers()} ${this.renderPluginWindow()}
      ${this.showStats&&this._stats?f`<span class="nf-stats"
            ><b>${this._stats.fps?E(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):E(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?f`(${this._stats.busy.map(o=>E(this.hass,`stats_busy_${o}`)).join(", ")})`:m} ·
            ${E(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${E(this.hass,this._stats.low?"stats_low":"stats_full",{r:O(this.hass,this._stats.pixelRatio,2)})}</span
          >`:m}
    </div>`}static styles=[Se,Be,Ll,te`
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
      /* "Today": the day's appointments and bins, top right, folds to its title */
      .nf-today {
        position: absolute;
        top: 12px;
        right: 12px;
        width: min(280px, calc(100% - 24px));
        max-height: calc(100% - 140px);
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
      .nf-has-alerts .nf-today {
        top: 58px;
      }
      .nf-low .nf-today {
        backdrop-filter: none;
      }
      .nf-today-folded {
        width: auto;
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
    `]};customElements.get("nf-view3d")||customElements.define("nf-view3d",Ji);function oe(r,e){return Math.abs(e)>=1e3?`${O(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function Yi(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}function Ip(r,e){let t=e.attributes.percentage;return e.state==="on"&&typeof t=="number"?`${Math.round(t)} %`:ee(r,e)}var tc;function nc(){let r=new URL("./nextfloor-editor.js?v=0370e2fe4665",new URL(import.meta.url)).href;return tc??=import(r),tc}var Wp=.25,rc=r=>Math.round(r*1e3)/1e3,ic=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&W([e,t],n.points));function Xi(r,e,t,n,i){let o=ic(r,e,t);if(!o)return[n,i];let s=(a,l)=>W([a,l],o.points);return s(n,i)?[n,i]:s(n,t)?[n,t]:s(e,i)?[e,i]:[e,t]}function Np(r,e,t,n){return r.rooms.some(i=>i.id!==e.id&&i.points.some((o,s)=>{let a=i.points[(s+1)%i.points.length];return Math.abs(ce(q(o,t),n))<.02&&Math.abs(ce(q(a,t),n))<.02}))}var Qi=(r,e)=>Math.abs((r-e+540)%360-180);function oc(r,e,t,n=Wp){let i=ic(r,e.x,e.z);if(!i)return null;let o=i.points,s=Xe(o)>=0?1:-1,a=null;return o.forEach((l,c)=>{let u=o[(c+1)%o.length],d=ze(q(u,l));if(d<.3)return;let p=[(u[0]-l[0])/d,(u[1]-l[1])/d],h=[-p[1]*s,p[0]*s],w=ce(q([e.x,e.z],l),p);if(w<0||w>d)return;let g=Np(r,i,l,h)?t/2:0,v=ce(q([e.x,e.z],l),h)-g,y=Math.atan2(-h[0],h[1])*180/Math.PI,A=[{rotation:y,extent:e.d/2},{rotation:y+90,extent:e.w/2},{rotation:y-90,extent:e.w/2}].reduce(($,H)=>Qi(e.rotation,H.rotation)<Qi(e.rotation,$.rotation)?H:$);if(Qi(e.rotation,A.rotation)>50)return;let _=v-A.extent;Math.abs(_)>n||a&&Math.abs(_)>=Math.abs(a.gap)||(a={x:rc(e.x-h[0]*_),z:rc(e.z-h[1]*_),rotation:(Math.round(A.rotation)%360+360)%360,gap:_})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}function kr(r,e,t){let n=structuredClone(r);for(let i of n.floors){let o=i.furniture.find(s=>s.id===e);o&&t(o,i)}return n}function xr(r,e,t){let n=structuredClone(r);for(let i of n.floors){let o=i.placements.find(s=>s.entity_id===e);o&&t(o,i)}return n}function sc(r,e){let t=structuredClone(r);for(let n of t.floors)n.furniture=n.furniture.filter(i=>i.id!==e);return t}function ac(r,e){let t=structuredClone(r);for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e);return t}function lc(r,e,t,n){return xr(r,e,(i,o)=>{[i.x,i.z]=Xi(o,i.x,i.z,t,n)})}function cc(r,e,t,n){let i=r.settings.wall_interior??.12;return kr(r,e,(o,s)=>{[o.x,o.z]=Xi(s,o.x,o.z,t,n);let a=oc(s,o,i);a&&Object.assign(o,a)})}var eo=(r,e)=>((r+e)%360+360)%360,uc=r=>Number.parseFloat(r.replace(",",".")),pn=(r,e)=>Math.round(r*10**e)/10**e;function to(r){let{min:e,max:t,accepts:n=()=>!0}=r,i=o=>{let s=uc(o.target.value);!Number.isFinite(s)||!n(s)||r.apply(t===void 0?s:Math.min(t,Math.max(e,s)))};return f`<label class="nf-size" title=${r.title}
    >${r.label}
    <input type="number" inputmode="decimal" step=${r.step} min=${e} max=${t??m} .value=${String(pn(r.value,2))} @change=${i} />
  </label>`}var hc=(r,e)=>f`<button class="nf-chip" @click=${e}>${r.t("height_auto")}</button>`,dc=(r,e)=>f`<button class="nf-chip" @click=${()=>e(-r)}>↺ ${r}°</button><button class="nf-chip" @click=${()=>e(r)}>↻ ${r}°</button>`;function Op(r,e){let t=r.building.floors.find(s=>s.furniture.some(a=>a.id===e)),n=t?.furniture.find(s=>s.id===e);if(!t||!n)return m;let i=(s,a)=>to({label:r.t(a),title:r.t(`size_${s}`),value:n[s],step:.05,min:.05,accepts:l=>l>0,apply:l=>r.editFurniture(e,c=>c[s]=pn(l,3))}),o=Qo(n)?f`${to({label:"\u2195",title:r.t("mount_height"),value:n.mount_y??se(t,n),step:.05,min:0,accepts:s=>s>=0,apply:s=>r.editFurniture(e,a=>a.mount_y=pn(s,3))})}
      ${n.mount_y!=null?hc(r,()=>r.editFurniture(e,s=>s.mount_y=null)):m}`:m;return f`${i("w","size_short_w")}${i("d","size_short_d")}${i("h","size_short_h")} ${o}`}function Cp(r,e){let t=r.building.floors.find(l=>l.placements.some(c=>c.entity_id===e)),n=t?.placements.find(l=>l.entity_id===e);if(!t||!n)return m;let i=D(e),o=(l,c,u)=>f`<select class="nf-size-select" title=${r.t(l)} @change=${d=>r.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
      ${c.map(([d,p])=>f`<option value=${d} ?selected=${d===u}>${p}</option>`)}
    </select>`,s=["ceiling","floor","table","wall"].map(l=>[l,r.t(`lamp_${l}`)]),a=i?gt(i,fe(t,n.x,n.z),i==="light"?n.mount??"ceiling":null):1;return f`${i==="light"?o("lamp_mount",s,n.mount??"ceiling"):m}
    ${to({label:r.t("size_short_h"),title:r.t("marker_height"),value:n.y??a,step:.05,min:0,accepts:l=>l>=0,apply:l=>r.editDevice(e,c=>c.y=pn(l,3))})}
    ${n.y!==null?hc(r,()=>r.editDevice(e,l=>l.y=null)):m}`}function pc(r,e,t){let n=r.t,i;if(e){let o=r.building.floors.flatMap(s=>s.furniture).find(s=>s.id===e)?.type;i=f`<span>${o?he(r.hass,o):""}</span>
      ${Op(r,e)} ${dc(45,s=>r.turnFurniture(e,s))}
      <button class="nf-chip" title=${n("furn_mirror_hint")} @click=${()=>r.editFurniture(e,s=>s.mirror=!s.mirror)}>⇋ ${n("furn_mirror")}</button>
      <button class="nf-chip nf-danger-chip" @click=${()=>r.removeFurniture(e)}>${n("delete")}</button>`}else t?i=f`<span>${C(r.hass,t)}</span>
      ${Cp(r,t)} ${dc(45,o=>r.turnDevice(t,o))}
      <button class="nf-chip nf-danger-chip" @click=${()=>r.removeDevice(t)}>${n("delete")}</button>`:i=f`<span>${n("furnish_hint")}</span>`;return f`<div class="nf-furnish-bar">${i}<button class="nf-chip nf-chip-on" @click=${()=>r.finish()}>${n("done")}</button></div>`}var fc=Q`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`;var le=(r,e)=>({name:r,fallback:e,read:t=>e?t!=="0":t==="1",write:t=>t?"1":"0"}),Tt=(r,e,t)=>({name:r,fallback:t,read:n=>e.find(i=>i===n)??t,write:n=>n}),no={explode:le("explode",!0),keepRoof:le("roof",!1),solidWalls:le("solid_walls",!1),quality:Tt("quality",["auto","low","high"],"auto"),stats:le("stats",!1),markers:Tt("markers",["none","important","all"],"important"),heat:Tt("heat",["none","temperature","humidity","co2","mould","comfort","power","sun","values","wifi"],"none"),theme:Tt("theme",ur,"neon"),clock:Tt("clock",["none","top_left","top_right","bottom_left","bottom_right"],"none"),accent:{name:"accent",fallback:null,read:r=>/^#[0-9a-f]{6}$/i.test(r)?r:null,write:r=>r??""},floorStack:Tt("floor_stack",["dim","stacked","single"],"dim"),roomNames:le("room_names",!0),clean:le("clean",!1),navWrap:le("nav_wrap",!1),barsFolded:le("bars_folded",!1),weather:le("weather",!0),timeSlider:le("time_slider",!1),menuOpen:le("menu_open",!1),keepCamera:le("keep_camera",!1),readable:le("readable",!1),zoom:{name:"zoom",fallback:100,read:r=>/^\d{2,3}$/.test(r)?Math.min(250,Math.max(60,Number(r))):100,write:r=>String(Math.round(Math.min(250,Math.max(60,r))))},screenName:{name:"screen_name",fallback:"",read:r=>r.slice(0,60),write:r=>r.trim().slice(0,60)},announceMuted:le("announce_muted",!1),glassWalls:{name:"glass_walls",fallback:20,read:r=>/^\d{1,3}$/.test(r)?Math.min(100,Number(r)):20,write:r=>String(Math.round(Math.min(100,Math.max(0,r))))}};function mc(r=$r()){try{return r?.getItem("nextfloor.screen_name")?.trim()||null}catch{return null}}function gc(r=$r()){try{return r?.getItem("nextfloor.announce_muted")==="1"}catch{return!1}}function $r(){try{return localStorage}catch{return null}}var Sr=class{storage;constructor(e){this.storage=e}raw(e){try{return this.storage?.getItem(`nextfloor.${e}`)??null}catch{return null}}load(e=""){let t={};for(let n of Object.keys(no)){let i=no[n],o=this.raw(i.name);t[n]=o===null?i.fallback:i.read(o)}return new URLSearchParams(e).has("nf_stats")&&(t.stats=!0),t}save(e,t){let n=no[e];try{this.storage?.setItem(`nextfloor.${n.name}`,n.write(t))}catch{}}};var _c=te`
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
`;var ro=class extends ne{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_prefs:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_optsOpen:{state:!0},_timeOfDay:{state:!0},_outside:{state:!0},_timeDrag:{state:!0},_floorUndo:{state:!0}};outsideMemo=null;floorUndoTimer;data=new mt(this);store=new Sr($r());constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("nf-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._prefs=this.store.load(location.search),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._optsOpen=!1,this._timeOfDay=null,this._outside=!1,this._timeDrag=null,this._floorUndo=null}toggleTimeSlider(e){this.setPref("timeSlider",e),e||([this._timeOfDay,this._timeDrag]=[null,null])}sunState(){let e=this.hass?.config;return this._timeOfDay===null||e?.latitude===void 0||e.longitude===void 0?this.hass?.states["sun.sun"]?.state:Qe(ut(this._timeOfDay,e.time_zone),e.latitude,e.longitude).elevation>0?"above_horizon":"below_horizon"}renderTimeOfDay(){let e=this.t;if(this.hass?.config?.latitude===void 0)return m;let t=this._timeDrag??this._timeOfDay,n=o=>`${String(Math.floor(o)).padStart(2,"0")}:${String(Math.round(o%1*60)).padStart(2,"0")}`,i=()=>{let o=new Date;return Math.round((o.getHours()+o.getMinutes()/60)*4)/4};return f`<button class="nf-chip" aria-pressed=${t!==null} title=${e("time_of_day_hint")} @click=${()=>(this._timeDrag=null,this._timeOfDay=t===null?i():null)}>☀ ${t===null?e("time_of_day"):n(t)}</button>
      ${t!==null?f`<label class="nf-chip nf-time-slider"
            ><input type="range" min="0" max="23.75" step="0.25" .value=${String(t)} aria-label=${e("time_of_day")} @input=${o=>this._timeDrag=Number(o.target.value)}
            @change=${o=>(this._timeDrag=null,this._timeOfDay=Number(o.target.value))}
          /></label>`:m}`}t=(e,t)=>E(this.hass,e,t);setPref(e,t){this._prefs={...this._prefs,[e]:t},this.store.save(e,t)}willUpdate(e){this.toggleAttribute("readable",!!this._prefs?.readable),e.has("hass")&&this.hass&&(this.style.colorScheme=or(this.hass),this.data.setHass(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}openFloor(e){this._floorId=e,this._roomId=null,this._outside=!1}outsideIds(e){let t=this.outsideMemo;if(t&&t.building===e&&t.entities===this.hass.entities)return t.ids;let n=Ut(this.hass,e.floors);return this.outsideMemo={building:e,entities:this.hass.entities,ids:n},n}openOutside(){let e=!this._outside;this.openFloor(null),this._outside=e}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if(n==="nf-outside")return this.openOutside();if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t)return this.openFloor(t);n&&(this._roomId=n===this._roomId?null:n,this._outside=!1)}furnishHost={hass:void 0,building:void 0,t:this.t,editFurniture:(e,t)=>this.applyEdit(n=>kr(n,e,t)),editDevice:(e,t)=>this.applyEdit(n=>xr(n,e,t)),turnFurniture:(e,t)=>this.applyEdit(n=>kr(n,e,i=>i.rotation=eo(i.rotation,t))),turnDevice:(e,t)=>this.applyEdit(n=>xr(n,e,i=>i.rotation=eo(i.rotation??0,t))),removeFurniture:e=>{this.applyEdit(t=>sc(t,e)),this._selFurniture=null},removeDevice:e=>{this.applyEdit(t=>ac(t,e)),this._selDevice=null},finish:()=>{this._furnish=!1,this._selFurniture=null,this._selDevice=null}};saveMoods(e,t){this.applyEdit(n=>({...n,floors:n.floors.map(i=>({...i,rooms:i.rooms.map(o=>o.id===e?{...o,moods:t.length?t:void 0}:o)}))}))}applyEdit(e){let t=this.data.building;t&&this.data.edit(e(t))}view3d(){return this.renderRoot.querySelector("nf-view3d")}back(){this._outside?this._outside=!1:this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&jn(this.hass,this))return m;let e=this.data.building,t=this._prefs.clean&&this._mode==="view",n=m;return e&&(this._mode==="editor"&&this.isAdmin?n=this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?n=this.renderExtensions():n=this.renderView(e)),f`<div class="nf-app ${t?"nf-clean":""}" style=${this._prefs.accent?`--nf-accent:${this._prefs.accent}`:""}>
      ${t?m:f`${this.renderHeader(e)}${this.renderNotices()}`}
      ${this.data.error&&!e?f`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>`:m}
      ${!e&&!this.data.error?f`<p class="nf-message">${this.t("loading")}</p>`:m}
      ${n}
    </div>`}choiceRow(e,t,n,i,o,s=m){return f`<div class="nf-seg nf-quality" role=${e?"group":m} aria-label=${e?this.t(e):m}>
      ${t.map(a=>f`<button aria-pressed=${n===a} title=${e==="markers"?this.t("markers"):m} @click=${()=>o(a)}>${i(a)}</button>`)}${s}
    </div>`}accentPicker(){let e=this._prefs.accent;return f`<label class="nf-accent-pick" title=${this.t("accent_hint")}>
      <input type="color" .value=${e??"#37e0ff"} aria-label=${this.t("accent")} @input=${t=>this.setPref("accent",t.target.value)} />
      ${e?f`<button class="nf-accent-reset" title=${this.t("accent_reset")} aria-label=${this.t("accent_reset")} @click=${()=>this.setPref("accent",null)}>↺</button>`:m}
    </label>`}renderViewOptions(){let e=this._prefs;return f`<button class="nf-opts-btn" aria-expanded=${this._optsOpen} title=${this.t("view_options")} aria-label=${this.t("view_options")} @click=${()=>this._optsOpen=!this._optsOpen}>⚙</button>
      <div class="nf-view-opts ${this._optsOpen?"nf-opts-open":""}">
        ${this.choiceRow("quality",["auto","low","high"],e.quality,t=>this.t(`quality_${t}`),t=>this.setPref("quality",t))}
        ${this.choiceRow("theme",ur,e.theme,t=>this.t(`theme_${t}`),t=>this.setPref("theme",t),this.accentPicker())}
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
          <button aria-pressed=${e.readable} title=${this.t("readable_hint")} @click=${()=>this.setPref("readable",!e.readable)}>Aa ${this.t("readable")}</button>
          <button aria-pressed=${e.stats} title=${this.t("fps_title")} @click=${()=>this.setPref("stats",!e.stats)}>${this.t("fps")}</button>
        </div>
      </div>`}renderHeader(e){let t=this.data.saveState,n=(o,s,a="")=>f`<button role="tab" class=${a} aria-pressed=${this._mode===o} @click=${()=>this.setMode(o)}>${s}</button>`,i=t==="saving"?"saving":t==="saved"?"saved":"save_error";return f`<header class="nf-header">
      <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
      <h1>${fc}NextFloor</h1>
      ${this.isAdmin?f`<div class="nf-seg" role="tablist">${n("view",this.t("view"))}${n("editor",this.t("editor"))}${n("extensions",`\u2726 ${this.t("ext_tab")}`,"nf-tab-ext")}</div>`:m}
      <span class="nf-grow"></span>
      ${this._mode==="view"&&e?.floors.some(o=>o.rooms.length)?this.renderViewOptions():m}
      ${this._mode==="editor"&&t!=="idle"?f`<span class="nf-save nf-save-${t}">${this.t(i)}</span>`:m}
      <span class="nf-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
    </header>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(e.versionGap==="frontend"?f`<div class="nf-notice nf-notice-warn">
              ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
              <button class="nf-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
            </div>`:f`<div class="nf-notice nf-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(f`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(f`<div class="nf-notice">
        <span>${this.t("draft_found",{time:n})}</span>
        <button class="nf-btn nf-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
        <button class="nf-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
      </div>`)}return t.length>0?f`<div class="nf-notices">${t}</div>`:m}whenEditorLoaded(e){return this._editorReady?e():(nc().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),f`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){return this.whenEditorLoaded(()=>f`<nf-extensions class="nf-body" .hass=${this.hass} .packs=${this.data.packs} .plugins=${this.data.building?.settings.plugins??[]}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @plugins-changed=${e=>this.applyEdit(t=>({...t,settings:{...t.settings,plugins:e.detail}}))}></nf-extensions>`)}renderEditor(e){return this.whenEditorLoaded(()=>f`<nf-editor
        class="nf-body"
        .hass=${this.hass}
        .building=${e}
        .narrow=${this.narrow}
        .packs=${this.data.packs}
        @packs-changed=${()=>{this.data.reloadPacks()}}
        @building-changed=${t=>this.data.edit(t.detail.building)}
      ></nf-editor>`)}onNavWheel=e=>{if(this._prefs.navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};allOffChip(e){let t=this._floorId?e.floors.find(i=>i.id===this._floorId):e.floors.length===1?e.floors[0]:void 0;if(!t||!this.hass)return m;if(this._floorUndo){let i=this._floorUndo;return f`<button class="nf-chip" aria-pressed="true" @click=${()=>{for(let o of i)this.hass.callService(o.domain,o.service,o.data);this._floorUndo=null,clearTimeout(this.floorUndoTimer)}}>↶ ${this.t("all_off_undo")}</button>`}let n=en(Na(t).map(i=>this.hass.states[i]));return n.count<2?m:f`<button class="nf-chip" title=${this.t("all_off_floor",{floor:t.name,n:n.count})} @click=${()=>{for(let i of n.off)this.hass.callService(i.domain,i.service,i.data);this._floorUndo=n.undo,clearTimeout(this.floorUndoTimer),this.floorUndoTimer=setTimeout(()=>this._floorUndo=null,1e4)}}>⏻ ${n.count}</button>`}renderNav(e){let t=e.floors.filter(c=>!this._floorId||c.id===this._floorId),n=e.floors.length>1,i=this._prefs.navWrap,o=this.outsideIds(e).length?f`<button class="nf-chip" aria-pressed=${this._outside} title=${this.t("outside_area_hint")} @click=${()=>this.openOutside()}>🌳 ${this.t("outside_area")}</button>`:m,s=n?f`<button class="nf-chip" aria-pressed=${this._floorId===null} @click=${()=>this.openFloor(null)}>${this.t("all_floors")}</button>
          ${[...e.floors].reverse().map(c=>f`<button class="nf-chip" aria-pressed=${c.id===this._floorId} @click=${()=>this.openFloor(c.id)}>${c.name}</button>`)}
          ${o} ${this.allOffChip(e)}
          <span class="nf-sep"></span>`:f`${o} ${this.allOffChip(e)}`,a=t.flatMap(c=>[t.length>1&&c.rooms.length?f`<span class="nf-nav-floor">${c.name}</span>`:m,...c.rooms.map(u=>f`<button
          class="nf-chip nf-room-chip"
          aria-pressed=${u.id===this._roomId}
          @click=${()=>{n&&(this._floorId=c.id),this._roomId=u.id===this._roomId?null:u.id,this._outside=!1}}
        >
          ${u.name}
        </button>`)]),l=this.t(i?"nav_row":"nav_wrap");return f`<nav class="nf-nav ${i?"nf-nav-wrap":""}" @wheel=${this.onNavWheel}>
      ${s}${a}
      <button class="nf-chip nf-nav-toggle" title=${l} aria-label=${l} aria-pressed=${i} @click=${()=>this.setPref("navWrap",!i)}>${i?"\u2194":"\u2261"}</button>
    </nav>`}toggleChip(e,t,n){return f`<button class="nf-chip" aria-pressed=${this._prefs[e]} title=${n?this.t(n):m} @click=${()=>this.setPref(e,!this._prefs[e])}>${this.t(t)}</button>`}renderOverlay(e){let t=this._prefs,n=this.t,i=(l,c)=>f`<div class="nf-seg">${[l,c].map(([u,d,p])=>f`<button aria-pressed=${u} @click=${d}>${p}</button>`)}</div>`,o=["none","temperature","humidity","co2","mould","comfort","power","sun","values","wifi"],s=["dim","stacked","single"],a=e.floors.length>1;return t.barsFolded?f`<div class="nf-overlay">
        <button class="nf-chip" title=${n("bars_unfold")} @click=${()=>this.setPref("barsFolded",!1)}>☰ ${n("bars_unfold")}</button>
        ${this._roomId||this._floorId&&a?f`<button class="nf-chip" @click=${()=>this.back()}>${n("back")}</button>`:m}
      </div>`:f`<div class="nf-overlay">
      <button class="nf-chip" title=${n("bars_fold")} aria-label=${n("bars_fold")} @click=${()=>this.setPref("barsFolded",!0)}>▾</button>
      <div class="nf-seg">
        ${["auto","cut","slope"].map(l=>f`<button aria-pressed=${this._wallMode===l} title=${l==="slope"?n("walls_slope_hint"):m} @click=${()=>this._wallMode=l}>${n(`walls_${l}`)}</button>`)}
      </div>
      <div class="nf-seg"><button aria-pressed=${t.solidWalls} title=${n("walls_solid_hint")} @click=${()=>this.setPref("solidWalls",!t.solidWalls)}>${n("walls_solid")}</button></div>
      ${a&&!this._floorId?i([t.explode,()=>this.setPref("explode",!0),n("floors_apart")],[!t.explode,()=>this.setPref("explode",!1),n("floors_stacked")]):m}
      ${!this._floorId&&e.settings.roof.type!=="none"?f`<div class="nf-seg"><button aria-pressed=${t.keepRoof} title=${n("roof_keep_hint")} @click=${()=>this.setPref("keepRoof",!t.keepRoof)}>${n("roof_keep")}</button></div>`:m}
      ${a&&this._floorId?f`<div class="nf-seg" role="group" aria-label=${n("card_floor_stack")}>
            ${s.map(l=>f`<button aria-pressed=${t.floorStack===l} @click=${()=>this.setPref("floorStack",l)}>${n(`floor_stack_short_${l}`)}</button>`)}
          </div>`:m}
      <div class="nf-seg" role="group" aria-label=${n("heatmap")}>
        ${o.map(l=>f`<button aria-pressed=${t.heat===l} @click=${()=>this.setPref("heat",l)}>${n(l==="none"?"heat_off":`heat_short_${l}`)}</button>`)}
      </div>
      ${this.toggleChip("roomNames","room_names_short")}
     
      ${this.toggleChip("weather","weather_short","weather_hint")}
      ${t.timeSlider?this.renderTimeOfDay():m}
      ${this._roomId||this._floorId&&a?f`<button class="nf-chip" @click=${()=>this.back()}>${n("back")}</button>`:m}
    </div>`}renderView(e){if(!e.floors.some(i=>i.rooms.length))return f`<div class="nf-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?f`<button class="nf-btn nf-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:m}
      </div>`;let t=this._prefs,n=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null;return this.furnishHost.hass=this.hass,this.furnishHost.building=e,f`
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
          .theme=${dr(t.theme,this.sunState())}
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
          .readable=${t.readable}
          .zoom=${t.zoom/100}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${i=>this._selFurniture=i.detail.id}
          @furniture-move=${i=>this.applyEdit(o=>cc(o,i.detail.id,i.detail.x,i.detail.z))}
          @device-select=${i=>this._selDevice=i.detail.id}
          @device-move=${i=>this.applyEdit(o=>lc(o,i.detail.id,i.detail.x,i.detail.z))}
          .quality=${t.quality}
          ?showStats=${t.stats}
          @room-tap=${this.onRoomTap}
            @floor-tap=${i=>this.openFloor(i.detail.floorId)}
          @back=${()=>this.back()}
        ></nf-view3d>
        ${n?f`<nf-room-panel
            .building=${this.data.building??null}
              class="nf-room-panel"
              .hass=${this.hass}
              .room=${n}
              .floor=${e.floors.find(i=>i.rooms.some(o=>o.id===this._roomId))??null}
              .confirmEntities=${nt(this.hass,e.floors)}
              .phrases=${e.settings.announce_phrases??null}
              .rooms=${e.floors.flatMap(i=>i.rooms)}
              @mood-change=${i=>this.saveMoods(i.detail.roomId,i.detail.moods)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:this._outside?f`<nf-room-panel
            .building=${this.data.building??null}
                class="nf-room-panel"
                .hass=${this.hass}
                .room=${null}
                .outside=${this.outsideIds(e)}
                .confirmEntities=${nt(this.hass,e.floors)}
                .phrases=${e.settings.announce_phrases??null}
                @close=${()=>this._outside=!1}
              ></nf-room-panel>`:m}
        ${t.clean?m:this.renderOverlay(e)}
        ${this._furnish?pc(this.furnishHost,this._selFurniture,this._selDevice):m}
      </div>
    `}static styles=[Se,Be,_c,ir]};customElements.get("nextfloor-panel")||customElements.define("nextfloor-panel",ro);var Lp=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/,bc=(r,e)=>Number(r)*60+Number(e);function fn(r,e,t=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=Lp.exec(r.trim());if(!n)return!1;let i=bc(n[1],n[2]),o=bc(n[3],n[4]),s=t.getHours()*60+t.getMinutes();return i>o?s>=i||s<o:s>=i&&s<o}var Mr=class{host;cleanTimer;idleTimer;nightTimer;constructor(e){this.host=e}armClean(e=!1){clearTimeout(this.cleanTimer);let t=this.host.config()?.controls_hide_after??0;t>0&&(e&&this.host.isClean()&&this.host.setClean(!1),this.cleanTimer=setTimeout(()=>this.host.setClean(!0),t*1e3))}stopClean(){clearTimeout(this.cleanTimer)}armIdle(){clearTimeout(this.idleTimer);let e=this.host.config()?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.host.goHome(),e*1e3))}touched(){this.host.isOrbit()&&this.host.setOrbit(!1),this.armIdle(),this.armClean(!0)}start(){this.armIdle(),this.nightTimer=setInterval(()=>this.host.setNight(fn(this.host.config()?.night,this.host.hass())),6e4)}stop(){clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}};function wc(r,e){return r?r.floors.filter(t=>(e===null||t.id===e)&&t.rooms.length>0).map(t=>({floorId:t.id,floorName:t.name,rooms:t.rooms.map(n=>({id:n.id,name:n.name||"\u2013",floorId:t.id}))})):[]}var vc=te`
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
`;var yc;function kc(){let r=new URL("./nextfloor-card-editor.js?v=8d5e84869e15",new URL(import.meta.url)).href;return yc??=import(r),yc}var mn="nf-outside",io=class extends ne{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;data=new mt(this);kiosk=new Mr({config:()=>this._config,hass:()=>this.hass,setClean:e=>this._clean=e,isClean:()=>this._clean,setOrbit:e=>this._orbit=e,isOrbit:()=>this._orbit,setNight:e=>this._night=e,goHome:()=>this.returnHome()});constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._clean=!1,this._night=!1,this._orbit=!1}view3d(){return this.shadowRoot?.querySelector("nf-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.kiosk.start()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),this.kiosk.stop()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await kc(),document.createElement("nextfloor-card-editor")}static getStubConfig(){return{type:"custom:nextfloor-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=fn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.kiosk.armClean(),this.kiosk.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(this.toggleAttribute("readable",this._config?.readable===!0),e.has("hass")&&(this.style.colorScheme=or(this.hass)),!e.has("hass")||!this.hass)return;this.data.setHass(this.hass);let t=fn(this._config?.night,this.hass);t!==this._night&&(this._night=t)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}t=e=>E(this.hass,e);stage(){let e=this.data.building,t=this._config,n=this._floorId===void 0?t?.floor??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(a=>a.id===n)?n:null,o=!!this._roomId&&t?.room_panel!==!1,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&(e?.floors.length??0)>1;return{floorId:i,walls:this._walls??t?.walls??"auto",heat:this._heat??t?.heatmap??"none",explode:this._explode??t?.explode??!0,canGoBack:s,showBar:!!e&&!this._clean&&(s||!!t?.controls&&!o)}}shows(e){let t=this._config?.controls;return t===!0||Array.isArray(t)&&t.includes(e)}renderBar(e){let t=this.data.building,n=this.t,i=["temperature","humidity","co2"].filter(s=>this.shows(s)),o=(s,a)=>f`<div class="nf-seg" role=${s?"group":m} aria-label=${s??m}>${a.map(([l,c,u])=>f`<button aria-pressed=${l} @click=${c}>${u}</button>`)}</div>`;return f`<div class="nf-card-controls">
      ${e.canGoBack?f`<button class="nf-chip" @click=${()=>this.back()}>${n("back")}</button>`:m}
      ${this.shows("walls")?o(void 0,[[e.walls==="auto",()=>this._walls="auto",n("walls_auto")],[e.walls==="cut",()=>this._walls="cut",n("walls_cut")],[e.walls==="slope",()=>this._walls="slope",n("walls_slope")]]):m}
      ${this.shows("floors")&&t.floors.length>1&&!e.floorId?o(void 0,[[e.explode,()=>this._explode=!0,n("floors_apart")],[!e.explode,()=>this._explode=!1,n("floors_stacked")]]):m}
      ${i.length>0?o(n("heatmap"),["none",...i].map(s=>[e.heat===s,()=>this._heat=s,n(s==="none"?"heat_off":`heat_short_${s}`)])):m}
    </div>`}renderRoomButtons(e){let t=this.data.building;if(!this._config?.room_buttons||!t||this._clean)return m;let n=wc(t,e.floorId);if(!n.length)return m;let i=n.length>1,o=(l,c)=>{this.canSwitch&&l!==e.floorId&&(this._floorId=l),this._roomId=c===this._roomId?null:c},s=Ut(this.hass,t.floors).length>0,a=()=>{this.canSwitch&&(this._floorId=null),this._roomId=this._roomId===mn?null:mn};return f`<div class="nf-card-rooms ${this._roomId&&this._config?.room_panel!==!1?"nf-card-rooms-beside":""}" role="group" aria-label=${this.t("card_room_buttons")}>
      ${n.map(l=>f`${i?f`<span class="nf-card-rooms-floor">${l.floorName}</span>`:m}${l.rooms.map(c=>f`<button class="nf-chip" aria-pressed=${c.id===this._roomId} @click=${()=>o(l.floorId,c.id)}>${c.name}</button>`)}`)}
      ${s?f`<button class="nf-chip" aria-pressed=${this._roomId===mn} title=${this.t("outside_area_hint")} @click=${a}>🌳 ${this.t("outside_area")}</button>`:m}
    </div>`}renderCorners(){let e=this._config,t=this.t,n=this._clean||!!this._roomId&&e?.room_panel!==!1;return f`${e?.fullscreen_button&&!n?f`<button class="nf-card-full" title=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
          ${this._fullscreen?"\u2715":"\u26F6"}
        </button>`:m}
    ${e?.dashboard&&!n?f`<button class="nf-card-full nf-card-dash ${e.fullscreen_button?"nf-card-dash-2":""}" title=${e.dashboard_label||e.dashboard} aria-label=${e.dashboard_label||e.dashboard} @click=${()=>this.openDashboard(e.dashboard)}>
          ${e.dashboard_label?f`<span>${e.dashboard_label}</span>`:"\u2302"}
        </button>`:m}`}renderStage(e){let t=this.data.building,n=this._config,i=()=>{this._clean=!this._clean,this._clean?this.kiosk.stopClean():this.kiosk.armClean()},o=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0;return f`<nf-view3d
      .hass=${this.hass}
      .building=${t}
      .packs=${this.data.packs}
      .floorId=${e.floorId}
      .roomId=${this._roomId===mn?null:this._roomId}
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
      .central=${n?.central!==!1}
      .centralOpen=${n?.central_open===!0}
      .keepCamera=${n?.keep_camera===!0}
      .readable=${n?.readable===!0}
      .today=${n?.today!==!1}
      .zoom=${typeof n?.zoom=="number"?n.zoom:1}
      .buttons=${n?.buttons?.map((s,a)=>({id:`card_${a}`,...s}))??null}
      .heatMode=${e.heat}
      .theme=${dr(n?.theme,this.hass?.states["sun.sun"]?.state)}
      .clock=${n?.clock&&n.clock!=="none"?n.clock:null}
      .lockButton=${n?.lock_button!==!1}
      .walkButton=${n?.walk_button!==!1}
      .travelButton=${n?.time_travel!==!1}
      .accent=${n?.accent??null}
      .showEnergy=${n?.energy??!0}
      .flows=${n?.flows??null}
      .holograms=${n?.holograms??null}
      .floorThumbs=${this.thumbs}
      .roomLabels=${n?.room_names!==!1}
      .floorStack=${n?.floor_stack??"dim"}
      .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
      .alerts=${n?.alerts!==!1}
      .alertJump=${!!n?.alert_jump}
      .announcements=${n?.announcements!==!1&&!gc()}
      .sensorBar=${n?.sensor_bar!==!1}
      .glassWalls=${typeof n?.glass_walls=="number"?Math.min(100,Math.max(0,n.glass_walls)):null}
      .screenName=${n?.screen_name??mc()}
      .scenes=${n?.scenes!==!1}
      .clean=${this._clean}
      .cleanButton=${o}
      @clean-toggle=${i}
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
    ></nf-view3d>`}renderRoomPanel(){let e=this.data.building;return f`<nf-room-panel
            .building=${this.data.building??null}
      class="nf-card-panel"
      .hass=${this.hass}
      .room=${e.floors.flatMap(t=>t.rooms).find(t=>t.id===this._roomId)??null}
      .floor=${e.floors.find(t=>t.rooms.some(n=>n.id===this._roomId))??null}
      .outside=${this._roomId===mn?Ut(this.hass,e.floors):null}
      .confirmEntities=${nt(this.hass,e.floors)}
      .phrases=${e.settings.announce_phrases??null}
      @close=${()=>this._roomId=null}
    ></nf-room-panel>`}render(){if(this.hass&&jn(this.hass,this))return m;let e=this.data.building,t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(a=>a.rooms.some(l=>l.id===t.room))&&(this._roomId=t.room));let n=this.stage(),i=this._fullscreen?"100vh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t?.height??420}px`,o=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null,s=()=>this.kiosk.touched();return f`<ha-card class=${this._night?"nf-night":""} style=${o?`--nf-accent:${o}`:""} @pointerdown=${s} @keydown=${s} @wheel=${s}>
      <div class="nf-card-body" style="height:${i}">
        ${e&&e.floors.some(a=>a.rooms.length)?this.renderStage(n):f`<p class="nf-card-msg">${this.data.error??(e?E(this.hass,"no_building"):E(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&t?.room_panel!==!1?this.renderRoomPanel():m}
        ${this.renderRoomButtons(n)}
        ${n.showBar&&e?this.renderBar(n):m}
        ${this.renderCorners()}
      </div>
    </ha-card>`}static styles=[Se,Be,vc,ir]};if(!customElements.get("nextfloor-card")){customElements.define("nextfloor-card",io);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"nextfloor-card",name:E(void 0,"card_name"),description:E(void 0,"card_description"),preview:!1})}Kr();
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
