/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var S={cs:"b01fbdf847f7",da:"0fe66a82bf2a",es:"6fc3a461f74d",fi:"9a17bc084f56",fr:"638450856b58",hu:"27ba348531dc",it:"562c5ba989e3",nb:"c5ea24fb9ef6",nl:"8ff1331b8efd",pl:"65d5c7fe0c1f",pt:"031d7be417b1",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"e37ba16dab5b",tr:"7c83ce1c3372",zh:"097ccba2d8c1"};var mo=globalThis,go=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ui=Symbol(),Fl=new WeakMap,or=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(go&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Fl.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Fl.set(n,e))}return e}toString(){return this.cssText}},Tl=t=>new or(typeof t=="string"?t:t+"",void 0,Ui),le=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new or(n,t,Ui)},zl=(t,e)=>{if(go)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=mo.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},ji=go?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Tl(n)})(t):t;var{is:Kg,defineProperty:Gg,getOwnPropertyDescriptor:Ug,getOwnPropertyNames:jg,getOwnPropertySymbols:Zg,getPrototypeOf:qg}=Object,_o=globalThis,Pl=_o.trustedTypes,Yg=Pl?Pl.emptyScript:"",Xg=_o.reactiveElementPolyfillSupport,ir=(t,e)=>t,Zi={toAttribute(t,e){switch(e){case Boolean:t=t?Yg:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Il=(t,e)=>!Kg(t,e),Dl={attribute:!0,type:String,converter:Zi,reflect:!1,useDefault:!1,hasChanged:Il};Symbol.metadata??=Symbol("metadata"),_o.litPropertyMetadata??=new WeakMap;var ft=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Dl){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Gg(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=Ug(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Dl}static _$Ei(){if(this.hasOwnProperty(ir("elementProperties")))return;let e=qg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ir("properties"))){let n=this.properties,r=[...jg(n),...Zg(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(ji(o))}else e!==void 0&&n.push(ji(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zl(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Zi).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Zi;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Il)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[ir("elementProperties")]=new Map,ft[ir("finalized")]=new Map,Xg?.({ReactiveElement:ft}),(_o.reactiveElementVersions??=[]).push("2.1.2");var Yi=globalThis,Ol=t=>t,bo=Yi.trustedTypes,Ll=bo?bo.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xi="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,Qi="?"+pt,Qg=`<${Qi}>`,Kt=document,ar=()=>Kt.createComment(""),lr=t=>t===null||typeof t!="object"&&typeof t!="function",Ji=Array.isArray,Vl=t=>Ji(t)||typeof t?.[Symbol.iterator]=="function",qi=`[ 	
\f\r]`,sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hl=/-->/g,Cl=/>/g,Wt=RegExp(`>|${qi}(?:([^\\s"'>=/]+)(${qi}*=${qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nl=/'/g,Bl=/"/g,Kl=/^(?:script|style|textarea|title)$/i,es=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),m=es(1),R=es(2),wk=es(3),mt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Wl=new WeakMap,Vt=Kt.createTreeWalker(Kt,129);function Gl(t,e){if(!Ji(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ll!==void 0?Ll.createHTML(e):e}var Ul=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=sr;for(let a=0;a<n;a++){let l=t[a],c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===sr?u[1]==="!--"?s=Hl:u[1]!==void 0?s=Cl:u[2]!==void 0?(Kl.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Wt):u[3]!==void 0&&(s=Wt):s===Wt?u[0]===">"?(s=o??sr,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Wt:u[3]==='"'?Bl:Nl):s===Bl||s===Nl?s=Wt:s===Hl||s===Cl?s=sr:(s=Wt,o=void 0);let h=s===Wt&&t[a+1].startsWith("/>")?" ":"";i+=s===sr?l+Qg:d>=0?(r.push(c),l.slice(0,d)+Xi+l.slice(d)+pt+h):l+pt+(d===-2?a:h)}return[Gl(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},cr=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Ul(e,n);if(this.el=t.createElement(c,r),Vt.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Vt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Xi)){let f=u[s++],h=o.getAttribute(d).split(pt),p=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:p[2],strings:h,ctor:p[1]==="."?wo:p[1]==="?"?vo:p[1]==="@"?ko:Ut}),o.removeAttribute(d)}else d.startsWith(pt)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Kl.test(o.tagName)){let d=o.textContent.split(pt),f=d.length-1;if(f>0){o.textContent=bo?bo.emptyScript:"";for(let h=0;h<f;h++)o.append(d[h],ar()),Vt.nextNode(),l.push({type:2,index:++i});o.append(d[f],ar())}}}else if(o.nodeType===8)if(o.data===Qi)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(pt,d+1))!==-1;)l.push({type:7,index:i}),d+=pt.length-1}i++}}static createElement(e,n){let r=Kt.createElement("template");return r.innerHTML=e,r}};function Gt(t,e,n=t,r){if(e===mt)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=lr(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=Gt(t,o._$AS(t,e.values),o,r)),e}var yo=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??Kt).importNode(n,!0);Vt.currentNode=o;let i=Vt.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new mn(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new xo(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Vt.nextNode(),s++)}return Vt.currentNode=Kt,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},mn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Gt(this,e,n),lr(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==mt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&lr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Kt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=cr.createElement(Gl(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new yo(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=Wl.get(e.strings);return n===void 0&&Wl.set(e.strings,n=new cr(e)),n}k(e){Ji(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(ar()),this.O(ar()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Ol(e).nextSibling;Ol(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ut=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=Gt(this,e,n,0),s=!lr(e)||e!==this._$AH&&e!==mt,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Gt(this,a[r+l],n,l),c===mt&&(c=this._$AH[l]),s||=!lr(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},wo=class extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},vo=class extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},ko=class extends Ut{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Gt(this,e,n,0)??g)===mt)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xo=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Gt(this,e)}},jl={M:Xi,P:pt,A:Qi,C:1,L:Ul,R:yo,D:Vl,V:Gt,I:mn,H:Ut,N:vo,U:ko,B:wo,F:xo},Jg=Yi.litHtmlPolyfillSupport;Jg?.(cr,mn),(Yi.litHtmlVersions??=[]).push("3.3.3");var Zl=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new mn(e.insertBefore(ar(),i),i,void 0,n??{})}return o._$AI(t),o};var ts=globalThis,oe=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zl(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};oe._$litElement$=!0,oe.finalized=!0,ts.litElementHydrateSupport?.({LitElement:oe});var e_=ts.litElementPolyfillSupport;e_?.({LitElement:oe});(ts.litElementVersions??=[]).push("4.2.2");var Qe=(t,e,n={})=>t.callWS({type:`nextfloor/${e}`,...n});async function $o(t,e){return(await Qe(t,"image/get",{image_id:e})).data}async function St(t,e,n){await Qe(t,"image/set",{image_id:e,data:n})}async function ql(t){return(await Qe(t,"history/list")).snapshots}async function Yl(t,e){return(await Qe(t,"history/snapshot",e?{name:e}:{})).id}async function Xl(t,e){return(await Qe(t,"history/get",{snapshot_id:e})).building}async function Ql(t,e){await Qe(t,"history/delete",{snapshot_id:e})}async function Jl(t,e){return(await Qe(t,"history/restore",{snapshot_id:e})).revision}var ur=(t,e)=>Qe(t,"packs/import",{pack:e});async function ec(t,e){await Qe(t,"packs/remove",{pack_id:e})}var tc=t=>Qe(t,"backup/export"),nc=(t,e,n)=>Qe(t,"backup/import",{building:e,packs:n});var rs=t=>t.slice(0,t.indexOf(".")),t_={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},X=t=>t_[rs(t)]??null,os=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];var rc=new Set(["light","switch","fan"]),Mt=t=>t!==null&&t!=="scene"&&t!=="script",Rt=t=>!t||t.state==="unavailable"||t.state==="unknown"&&!t.entity_id.startsWith("event.");function W(t,e,n){let r=String(t?.states[e]?.attributes.friendly_name??t?.entities?.[e]?.name??e);if(!n||r.length<=n.length+1||!r.toLowerCase().startsWith(`${n.toLowerCase()} `))return r;let o=r.slice(n.length+1);return o[0].toUpperCase()+o.slice(1)}var oc=t=>!!t&&t.entity_id.startsWith("sensor.")&&t.attributes.device_class==="enum";var ic=t=>Math.min(1,Math.max(0,t));function n_(t){let e=ic((t-2200)/4300),n=[1,.66,.26],r=[.78,.9,1];return[0,1,2].map(o=>n[o]+(r[o]-n[o])*e)}function ns(t,e){if(!t||t.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:t.attributes,r=typeof n.brightness=="number"?.2+.8*Math.sqrt(ic(n.brightness/255)):1,o=n.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(n.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:r}:typeof n.color_temp_kelvin=="number"?{color:n_(n.color_temp_kelvin),level:r}:{color:[1,.71,.28],level:r}}function sc(t,e,n){let r=ns(t,n);if(r)return r;for(let o of e){let i=ns(o);if(i)return{color:i.color,level:i.level*.6}}return null}function So(t,e,n=null){if(t==="light"&&n==="floor")return 1.95;if(t==="light"&&n==="table")return 1.25;if(t==="light"&&n==="wall")return 1.95;switch(t){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var uc=[],Mo=new Map,r_=0,de=(t,e)=>`pack:${t}:${e}`,gt=t=>t.startsWith("pack:");function is(t){uc=t,Mo=new Map;for(let e of t)for(let n of e.items)Mo.set(de(e.id,n.id),n);r_+=1}var hr=()=>uc;var o_={};function G(t){if(!gt(t))return;let e=Mo.get(t);if(e)return e;let[,n,...r]=t.split(":"),o=o_[n];return o?Mo.get(de(o,r.join(":"))):void 0}var i_=.22;function ac(t,e,n,r){let o=Math.min(i_,n/3);if(r<=o*2.4||Math.abs(r-n)<1e-6)return e*(r/n)+(t-e)*(r/n);let i=e*(r/n),s=t-e;return s<=o?i+s:s>=n-o?i+r-(n-s):i+o+(s-o)*(r-2*o)/(n-2*o)}function dr(t,e,n,r,o){return[ac(t*r,n*r,r,o)/o,ac(e*r,n*r,r,o)/o]}var lc=new WeakMap;function dc(t,e,n,r){let[o,i,s]=t.size;if(t.vehicle||t.stretch||Math.abs(e-o)<1e-4&&Math.abs(n-i)<1e-4&&Math.abs(r-s)<1e-4)return t.parts;let a=`${e.toFixed(4)}|${n.toFixed(4)}|${r.toFixed(4)}`,l=lc.get(t),c=l?.get(a);if(c)return c;let u=t.parts.map(d=>{if(d.shape==="sweep")return d;let[f,h]=dr(d.x-d.w/2,d.x+d.w/2,-.5,o,e),[p,_]=dr(d.z-d.d/2,d.z+d.d/2,-.5,i,n),[y,b]=dr(d.y,d.y+d.h,0,s,r);if(d.rot)return{...d,x:(f+h)/2,z:(p+_)/2,w:d.w*o/e,d:d.d*i/n,y,h:b-y};let v={...d,x:(f+h)/2,z:(p+_)/2,w:h-f,d:_-p,y,h:b-y};if(d.shape==="loft"){let[w,x,k,$]=[d.tx??d.x,d.tz??d.z,d.tw??d.w,d.td??d.d],[A,F]=dr(w-k/2,w+k/2,-.5,o,e),[T,D]=dr(x-$/2,x+$/2,-.5,i,n);Object.assign(v,{tx:(A+F)/2,tz:(T+D)/2,tw:F-A,td:D-T})}return v});return l||lc.set(t,l=new Map),l.size>32&&l.clear(),l.set(a,u),u}var ss=t=>!!t?.parts.some(e=>e.move);var hc=t=>G(t)?.parts.find(e=>e.screen),cc=.06;function fc(t){let e=G(t);if(!e)return!1;let[n,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*n,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=cc&&s>=cc})}function st(t){return Je[t]??G(t)?.size??[.6,.6,.8]}function Et(t){let e=G(t);return vc.has(t)||!!e?.electric||!!e?.light||!!e?.climate}var pc=t=>!!G(t)?.parts.some(e=>e.picture),gn=t=>!!G(t)?.climate;function mc(t,e){return t.name[e.split("-")[0]]??t.name.en??Object.values(t.name)[0]??t.id}var s_={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace (older)",fitness:"Fitness (older)",fahrzeuge:"Vehicles",ikea:"IKEA sizes",treppen:"Stairs & railings",ausbau:"Architecture & fit-out",werkstatt:"Garage & workshop",a_wohnzimmer:"Living room",a_schlafzimmer:"Bedroom",a_kueche:"Kitchen",a_bad:"Bathroom",a_kinderzimmer:"Kids' room",a_buero:"Office & gaming",a_fitness:"Fitness",a_haustiere:"Pets",a_garten:"Garden & patio",a_kino:"Home cinema & hi-fi",a_smart:"Smart home & tech",a_haustechnik:"Utility & building services",a_saison:"Season & decoration",a_smart2:"Smart home 2",a_haustechnik2:"Building services 2",a_wellness:"Wellness",a_garten2:"Garden 2",a_kueche2:"Kitchen 2",a_fahrzeuge2:"Vehicles 2",a_aussenkueche:"Outdoor kitchen & terrace",a_werkstatt2:"Workshop 2",a_japandi:"Japandi & Scandi",a_loft:"Loft & industrial",a_gruen:"Indoor greenery",a_musik:"Music & studio",a_bilder:"Pictures & frames"};function gc(t,e){if(e.split("-")[0]==="de")return t.name;let n=/^nextfloor\.(.+)$/.exec(t.id)?.[1];return n&&s_[n]||t.name}function At(t,e){return e.mount_y!=null?e.mount_y:l_(t,e)+(a_(e)?0:yc(t,e.x,e.z))}var a_=t=>t.type==="led_strip"||G(t.type)?.mount==="ceiling";function l_(t,e){if(e.type==="lamp_wall")return _c;if(e.type==="led_strip")return Math.max(0,at(t,e.x,e.z)-.04-Math.max(.02,e.h));let n=G(e.type);if(!n)return bc(e);switch(n.mount){case"surface":return wc(t,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,Ro(t,e)-e.h);default:return 0}}function as(t){if(t==="plant")return"plant";let e=G(t);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var kc=["turn","slide","top"],xc=["always","active","no_power","never"],$c=1.3,Eo=(t,e=new Date().toISOString().slice(0,10))=>!!t.due&&t.due<=e;var Sc=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Mc=["brick","round","wide","steel"],Ao=["navigate","more_info","service","fire_dom_event"];function Fo(t,e,n){return t?e?!!n.lock_plan:!!t.locked:!1}var Rc=["rain","snow","fog","clouds","lightning","sky"],Ec=["rain","snow","clouds","lightning","sky"],Ac=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],ls={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function cs(t){return t==="hedge"||t==="fence"||t==="pergola"}var Fc=["x","-x","z","-z"];function c_(t,e,n){let r=t.slope??0;if(!r||t.type==="pool")return 0;let o=t.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of t.points){let d=i(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return r*l}function u_(t,e,n,r){return Tc(t)+(e.offset??0)+ls[e.type]-c_(e,n,r)}function Tc(t){return t.elevation>.3?0:-.2}function zc(t,e,n){let r=(t.outdoor??[]).filter(i=>!cs(i.type)&&i.type!=="pool"&&N([e,n],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?u_(t,o,e,n):Tc(t)}var Pc=t=>t.cut??t.type==="pool",Dc=30,Ic={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Oc=["wood","oak","tiles","carpet","stone","concrete"],Lc={type:"none",pitch:35,overhang:.4},To="#d6cfc2",zo="#e8e3da",Hc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Lc}};function Ft(){return{version:1,floors:[],settings:{...Hc},energy:{...Ic},presence:[]}}function He(t,e,n){return{id:t,name:e,elevation:n,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var d_=2.75;function Cc(t,e){if(e!=null&&Number.isFinite(e))return Math.round(e*d_*100)/100;let n=t.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return n?Math.round((n.elevation+n.height+.25)*100)/100:0}function Nc(t,e,n){let r=t.rooms.flatMap(a=>a.points.map(l=>l[0])),o=t.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,u=s+Math.floor(l/3)*3.5;return{id:n(),name:a.name,area_id:a.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function Bc(t,e,n,r){let o=t.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=t.x-a*(t.w/2)*i+l*(t.d/2)*s,u=t.z-a*(t.w/2)*s-l*(t.d/2)*i,d=n[0]-c,f=n[1]-u,h=b=>Math.max(.1,Math.round(b/r)*r),p=h((d*i+f*s)*a),_=h((-d*s+f*i)*l),y=b=>Math.round(b*1e3)/1e3;return{x:y(c+a*(p/2)*i-l*(_/2)*s),z:y(u+a*(p/2)*s+l*(_/2)*i),w:y(p),d:y(_)}}var Po=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],Wc={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Ce=["meter","inverter","home_battery","wallbox","grid_point"],Vc=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),_c=1.75;function Do(t){return us.has(t.type)||["stairwell","parking"].includes(t.type)?!1:G(t.type)?.mount!=="ceiling"}function ce(t){return Vc.has(t)||!!G(t)?.light}var h_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Kc(t,e,n,r=0){let o=ue(t.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<n;c++){let u=[Math.round((o.x0+r+i/n*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];N(u,t.points)&&a.push(u)}return a}function _n(t,e,n){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[n];return[r(t[0]+o*e),r(t[1]+i*e)]}function bc(t){switch(t.type){case"home_battery":return t.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-t.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var us=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function Gc(t,e){return t.filter(n=>n.elevation<e.elevation).flatMap(n=>n.rooms.filter(r=>r.points.length>=3&&r.ceiling!=null&&r.ceiling>n.height+.005&&n.elevation+r.ceiling>e.elevation+.05)).map(n=>n.points)}var ds=t=>t?.floor_offset&&Number.isFinite(t.floor_offset)?t.floor_offset:0;function yc(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&o.floor_offset&&N([e,n],o.points));return ds(r)}function at(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&N([e,n],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:t.height}var Ro=(t,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:at(t,e.x,e.z);function wc(t,e,n){let r=0;for(let o of t.furniture)!(h_.has(o.type)||G(o.type)?.surface)||!N([e,n],ms(o))||(r=Math.max(r,o.h));return r}var vc=new Set([...Vc,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Je={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var hs=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],fs=["standard","bars","glass_wall"],Io=new Set(["interior","front"]);function jt(t,e){return t.type==="door"?t.style&&hs.includes(t.style)?t.style:e?"front":"interior":t.style&&fs.includes(t.style)?t.style:"standard"}function Uc(t,e,n,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=t-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let u=i-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return o?{panels:[[.02,.02+l],[t-.02-c,t-.02]],x0:.02+l,x1:t-.02-c}:(n?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:t-.02}:{panels:[[t-.02-l,t-.02]],x0:.02,x1:t-.02-l}}function ps(t){return t==="front"||t==="front_glass"||t==="sidelight"||t==="sidelights"}var bn={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},lift_slide:{type:"window",leaves:1,width:2.4,sill:0,height:2.15,opens:"slide"},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function yn(t){if(t.type==="garage")return"garage";if(t.type==="window"&&t.style==="glass_wall")return"glass_wall";if(t.type==="window"&&t.opens==="slide"&&t.sill<.1)return"lift_slide";let e=t.leaves===2;return t.type==="door"?!e&&t.style&&ps(t.style)?"front":e?"door_double":"door":t.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Te(t){t.energy={...Ic,...t.energy??{}},t.presence=t.presence??[],t.version=1,t.settings={...Hc,...t.settings,roof:{...Lc,...t.settings?.roof??{}}},t.floors.forEach((e,n)=>{let r=He(e.id,e.name??`Floor ${n+1}`,e.elevation??n*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of t.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=e.placements.filter(r=>r.entity_id.startsWith("light."));if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=r[o.mount??"ceiling"],[s,a,l]=Je[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,d=1;for(;e.furniture.some(f=>f.id===u);)u=`${c}_${d++}`;e.furniture.push({id:u,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return f_(t),t}function f_(t){let e=(n,r)=>{let o=new Set;for(let i of n)(typeof i.id!="string"||!i.id||o.has(i.id))&&(i.id=I(r)),o.add(i.id)};e(t.floors,"floor");for(let n of t.floors){for(let r of n.rooms)(typeof r.id!="string"||!r.id)&&(r.id=I("room"));e(n.openings,"op"),e(n.furniture,"furn"),e(n.outdoor,"out")}}function I(t){return`${t}_${Math.random().toString(36).slice(2,10)}`}function _e(t){let e=0;for(let n=0;n<t.length;n++){let[r,o]=t[n],[i,s]=t[(n+1)%t.length];e+=r*s-i*o}return e/2}function ve(t){return Math.abs(_e(t))}function be(t){let e=_e(t);if(Math.abs(e)<1e-9){let o=t.length||1;return[t.reduce((i,s)=>i+s[0],0)/o,t.reduce((i,s)=>i+s[1],0)/o]}let n=0,r=0;for(let o=0;o<t.length;o++){let[i,s]=t[o],[a,l]=t[(o+1)%t.length],c=i*l-a*s;n+=(i+a)*c,r+=(s+l)*c}return[n/(6*e),r/(6*e)]}function wn(t){if(t.length!==4)return!1;for(let e=0;e<4;e++){let[n,r]=t[e],[o,i]=t[(e+1)%4];if(Math.abs(n-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function ue(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;for(let[i,s]of t)e=Math.min(e,i),n=Math.min(n,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:n,x1:r,z1:o}}function ms(t){let e=t.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=t.w/2,i=t.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[t.x+s*n-a*r,t.z+s*r+a*n])}function N(t,e){let n=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>t[1]!=l>t[1]&&t[0]<(a-i)*(t[1]-s)/(l-s)+i&&(n=!n)}return n}var Oo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var gs=t=>t.trim().replace(/^\/local\/www\//i,"/local/"),_s=t=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(t.trim());var m_=globalThis,Zc=m_.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},bs=Zc.plugins,jc=Zc.listeners;var g_=5;function qc(t,e){t.errors.length<g_&&t.errors.push(e instanceof Error?e.message:String(e))}function Lo(t){return jc.add(t),()=>jc.delete(t)}var ys=()=>[...bs.values()].map(t=>t.status),Yc=()=>[...bs.values()].flatMap(t=>Object.keys(t.plugin.lightAnimations??{}));function*Ho(t,e){for(let{plugin:n,status:r}of bs.values())for(let o of n.devices??[]){let i=!1;try{i=o.match(t,e)}catch(s){qc(r,s)}i&&(yield{device:o,status:r})}}function Co(t,e){for(let{device:n}of Ho(t,e))return n.kind??"sensor";return null}function Xc(t,e){let n=t.states[e];if(!n)return null;let r=__({hass:t,entityId:e,state:n})?.icon?.trim();return r&&/^mdi:[a-z0-9-]+$/i.test(r)?r:null}function __(t){let e=null;for(let{device:n,status:r}of Ho(t.entityId,t.state))if(n.marker)try{let o=n.marker(t);if(!o)continue;e={...e??{}},typeof o.icon=="string"&&o.icon&&(e.icon=o.icon),typeof o.text=="string"&&(e.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(e.active=o.active)}catch(o){qc(r,o)}return e}function No(t,e){return t?typeof t=="string"?t:t[e]??t[e.split("-")[0]]??t.en??Object.values(t)[0]??"":""}function Qc(t,e){let n=[];for(let{device:r,status:o}of Ho(t,e))r.settings?.length&&n.push({pluginId:o.id,name:o.name,settings:r.settings});return n}function Jc(t,e){let n={};for(let r of t??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":typeof o=="string"&&(r.options??[]).some(([s])=>s===o);n[r.key]=i?o:r.default}return n}function eu(t,e){for(let{device:n}of Ho(t,e))if(n.floorWedge)return!0;return!1}var b_=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),y_=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),w_=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),v_=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Tt(t,e){let n=t.entities?.[e];return n&&(n.area_id||(n.device_id?t.devices?.[n.device_id]?.area_id:null))||null}var nu=(t,e)=>{let n=t.entities?.[e];return!!(n?.hidden||n?.entity_category)},Ne=(t,e)=>X(e)??Co(e,t.states[e]);function tu(t,e){let n=t.states[e];if(!n||nu(t,e))return!1;if(Co(e,n)!==null)return!0;let r=X(e);if(!r)return!1;let o=n.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":r==="sensor"?o?b_.has(o):y_.has(String(n.attributes.unit_of_measurement??"")):r==="binary"?o?w_.has(o):!!t.entities?.[e]?.area_id:!0}function k_(t,e){let n=t.states[e];return X(e)!=="sensor"||!n?.attributes.unit_of_measurement||nu(t,e)||v_.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Rt(n)}var Wo=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power",ws=null;Lo(()=>ws=null);function vs(t,e){let n=t.get(e);return n||t.set(e,n=[]),n}function x_(t){let e=new Map,n=new Map,r=new Map,o=new Map,i=[],s=u=>{(tu(t,u)||k_(t,u))&&Mt(Ne(t,u))&&i.push(u)};for(let[u,d]of Object.entries(t.entities??{})){let f=d.device_id;f&&d.area_id&&(o.get(f)??o.set(f,new Set).get(f)).add(d.area_id),f&&Wo(t,u)&&vs(n,f).push(u),f&&!d.hidden&&!d.entity_category&&(r.get(f)??r.set(f,new Set).get(f)).add(rs(u));let h=Tt(t,u);h===null?s(u):tu(t,u)&&vs(e,h).push(u)}if(t.entities)for(let u of Object.keys(t.states))t.entities[u]||s(u);let a=os.indexOf("binary")-.5,l=u=>{let d=X(u),f=d?os.indexOf(d):a;return f>a&&Co(u,t.states[u])!==null?a:f};i.sort((u,d)=>l(u)-l(d)||W(t,u).localeCompare(W(t,d)));for(let[u,d]of e){let f=t.areas?.[u]?.name;d.sort((h,p)=>l(h)-l(p)||W(t,h,f).localeCompare(W(t,p,f)))}let c=new Set;for(let[u,d]of o)d.size>1&&c.add(u);return{entities:t.entities,devices:t.devices,states:t.states,stateCount:Object.keys(t.states).length,byArea:e,powerByDevice:n,withoutArea:i,domainsByDevice:r,hubs:c}}function vn(t){let e=ws;return e&&e.entities===t.entities&&e.devices===t.devices&&(e.states===t.states||(e.states=t.states,Object.keys(t.states).length===e.stateCount))?e:ws=x_(t)}function ye(t,e){let n=Bo(t,e.area_id);return e.sub_areas?.length?[...new Set([...n,...e.sub_areas.flatMap(r=>Bo(t,r))])]:n}function Bo(t,e){return!e||!t.entities?[]:vn(t).byArea.get(e)??[]}function ru(t,e){if(!t.entities)return[];let n=[];for(let[r,o]of vn(t).byArea){let i=o.filter(s=>Mt(Ne(t,s)));r!==e&&i.length>0&&n.push({areaId:r,name:t.areas?.[r]?.name??r,ids:i})}return n.sort((r,o)=>r.name.localeCompare(o.name))}var ou=t=>t.entities?vn(t).withoutArea:[],ks=(t,e)=>!!t.entities&&vn(t).hubs.has(e),Vo=(t,e)=>t.entities?vn(t).powerByDevice.get(e)??[]:[];function kn(t,e){let n=new Map;for(let o of e)vs(n,t.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...n.values()].map(o=>{let i=o.find(s=>!t.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var Ko=(t,e)=>kn(t,e).map(n=>n.primary),xs={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},$_=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),S_=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],M_=new RegExp(`(${S_.join("|")})`,"i");function $s(t,e){let n=t.entities?.[e]?.device_id,r=n&&!ks(t,n)?vn(t).domainsByDevice.get(n):void 0;return r&&[...r].some(o=>$_.has(o))?!1:!M_.test(`${e} ${t.states[e]?.attributes.friendly_name??""}`)}function iu(t,e,n,r){let o=n.climate?.[r];if(o==="none")return[];if(o)return[o].flat().filter(c=>t.states[c]);let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>N([c.x,c.z],n.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!N([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([...ye(t,n).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class===xs[r]&&$s(t,c))}var R_=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),E_=new Set(["garage","gate"]),A_=new Set(["window","opening"]);function fr(t,e,n=!1){let r=new Map;return t.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var su=(t,e)=>t==="none"?null:t??e??null,xn=t=>t&&t!=="none"?t:null;function pr(t,e){let n=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,y)=>_.edge-y.edge||_.offset-y.offset);if(i.length===0)continue;let s=ye(t,o),a=_=>t.states[_]?.attributes.device_class,l=_=>s.filter(y=>X(y)==="binary"&&_(a(y)??"")),c=_=>i.filter(y=>y.type===_),u=fr(c("window"),s.filter(_=>X(_)==="cover"&&R_.has(a(_))),!0),d=fr(c("window"),l(_=>A_.has(_))),f=fr(c("door"),l(_=>_==="door")),h=fr(c("garage"),s.filter(_=>X(_)==="cover"&&E_.has(a(_)??""))),p=fr(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let y=_.type==="window"?u:_.type==="garage"?h:null,b=_.type==="window"?d:_.type==="garage"?p:f,v=_.leaves===2;n.set(_.id,{cover:su(_.cover,y?.get(_.id)),contact:_.sensor==="handle"&&_.contact==null?null:su(_.contact,b.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:v?xn(_.contact2):null,tilt2:v?xn(_.tilt2):null,position:xn(_.position),positionInverted:!!_.position_inverted,tiltAngle:xn(_.tilt_angle),tiltMax:_.tilt_max??null,tiltOffset:_.tilt_offset??null,tiltInvert:!!_.tilt_invert,shut:!!_.shut,angled:_.type==="door"&&!!_.open_angle,lock:_.type==="door"?xn(_.lock):null,cover2:_.type==="garage"?null:xn(_.cover2)})}}return n}var F_=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ss(t){if(!t||Rt(t))return null;let e=t.attributes.window_state;for(let n of[typeof e=="string"?e:"",t.state]){let r=n.trim(),o=r&&F_.find(([i])=>i.test(r));if(o)return o[1]}return null}var au=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,lu=/(kühl|fridge|gefrier|freezer)/i,cu=/(spülmaschine|geschirrspül|dishwasher)/i,T_=/(kochfeld|herd|induktion|cooktop)/i,z_={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:au,tv_wall:au,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:lu,fridge_smart:lu,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:cu,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:T_,sink:cu,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},uu={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},du=new Set(["tv_board","tv_wall"]);var $n=t=>du.has(t)||!!hc(t),Go=t=>!!G(t)?.electric&&/speaker|multiroom|soundbar/.test(t.split(":").pop()??t),gr=t=>$n(t)||t==="desk"||t==="fridge_smart",P_=t=>!!t&&t!=="none";function D_(t,e){if(Wo(t,e))return e;let n=t.entities?.[e]?.device_id;return n?Vo(t,n).find(r=>r!==e)??null:null}var I_=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function mr(t,e,n,r){return t.find(o=>e?.test(n(o)))??(r?t[0]??null:null)}function Be(t,e){let n=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...r.placements.map(i=>i.entity_id)].filter(P_));for(let i of r.furniture){let s=i.type in uu,a=gn(i.type),l=s?uu[i.type]:z_[i.type];if(!l&&!a&&!Go(i.type)&&i.entity==null&&i.power==null)continue;let c=I_(r,i.x,i.z),u=(c?Ko(t,ye(t,c)):[]).filter(y=>!o.has(y)),d=y=>`${y} ${W(t,y)}`,f=y=>u.filter(b=>X(b)===y),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let y=(c?ye(t,c):[]).filter(v=>!o.has(v)),b=new Set(y.filter(v=>X(v)==="fan").map(v=>t.entities?.[v]?.device_id).filter(Boolean));h=y.find(v=>X(v)==="light"&&b.has(t.entities?.[v]?.device_id))??mr(f("light"),l,d,!1)}else if(s)h=mr(f("light"),l,d,!0);else if(i.type==="robot_vacuum"){let y=c?.area_id??null;h=Object.keys(t.entities??{}).find(b=>b.startsWith("vacuum.")&&!o.has(b)&&Tt(t,b)===y)??null}else if(i.type==="radiator"||a)h=mr(f("climate"),l,d,!0);else if($n(i.type)){let y=f("media");h=y.find(b=>t.states[b]?.attributes.device_class==="tv")??mr(y,l,d,du.has(i.type))}else if(Go(i.type)){let y=f("media").filter(b=>t.states[b]?.attributes.device_class!=="tv");h=mr(y,l,d,!1)??(y.length===1?y[0]:null)}else l&&(h=u.find(y=>["switch","media","fan"].includes(X(y)??"")&&l.test(d(y)))??null);h&&o.add(h)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=h?D_(t,h):null,!p&&l&&c&&!s&&(p=ye(t,c).find(y=>Wo(t,y)&&!o.has(y)&&l.test(d(y)))??null),p&&o.add(p));let _=null;if(i.type==="ceiling_fan"&&(_=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let y=(c?ye(t,c):[]).filter(v=>X(v)==="fan"&&!o.has(v)),b=h?t.entities?.[h]?.device_id:void 0;_=(b?y.find(v=>t.entities?.[v]?.device_id===b):void 0)??y[0]??null,_&&o.add(_)}(h||p||_)&&n.set(i.id,{entity:h,power:p,...i.type==="ceiling_fan"?{fan:_}:{}})}}return n}var hu=t=>t==="fridge"||t==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(t.slice(t.lastIndexOf(":")+1));function fu(t,e,n=[]){let r=[];for(let o of e){let i=(a,l)=>o.rooms.some(c=>c.points.length>=3&&N([a,l],c.points)),s=Be(t,[o]);r.push(...o.placements.filter(a=>a.outside||!i(a.x,a.z)).map(a=>a.entity_id)),r.push(...o.furniture.filter(a=>!i(a.x,a.z)).flatMap(a=>[s.get(a.id)?.entity,s.get(a.id)?.power]));for(let a of o.outdoor??[])a.area_id&&r.push(...Ko(t,Bo(t,a.area_id))),r.push(a.pump_entity,a.temp_entity)}return[...new Set(r.filter(o=>!!o&&!!t.states[o]&&!n.includes(o)))]}function O_(t,e){return Math.min(...e.map((n,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-n[0],o[1]-n[1]],a=Math.min(1,Math.max(0,((t[0]-n[0])*i+(t[1]-n[1])*s)/(i*i+s*s||1)));return Math.hypot(t[0]-n[0]-i*a,t[1]-n[1]-s*a)}))}function mu(t,e,n=[]){let r=t.points;if(r.length<3||e.length===0)return[];let o=r.map(b=>b[0]),i=r.map(b=>b[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(a-s,c-l),d=Math.max(.1,Math.min(.25,u/8)),f=Math.min(.35,u/5),h=Math.min(.7,u/4),p=be(r),_=[];for(let b=s+d/2;b<a;b+=d)for(let v=l+d/2;v<c;v+=d){let w=[b,v];if(!N(w,r))continue;let x=O_(w,r);x>=f&&_.push({at:w,wallDistance:x})}_.length===0&&_.push({at:p,wallDistance:0});let y=[...n];return e.map(b=>{let v=X(b)==="light",w=_[0].at,x=-1/0;for(let{at:$,wallDistance:A}of _){let F=y.length?Math.min(...y.map(z=>Math.hypot($[0]-z[0],$[1]-z[1]))):3,T=Math.hypot($[0]-p[0],$[1]-p[1]),D=Math.min(F,3)*2;T<h&&!v&&(D-=10),D-=v?T*.35:A*1.2,D>x+1e-9&&(x=D,w=$)}let k=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];return y.push(k),{entity_id:b,x:k[0],z:k[1],y:null,mount:null}})}var pu=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function gu(t,e,n){if(n==="none")return null;if(n)return n;let r=e?t.entities?.[e]?.device_id:null;return!r||!t.entities?null:Object.values(t.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(pu.test(i.translation_key??"")||pu.test(i.entity_id.split(".")[1])))?.entity_id??null}var V=(t,e)=>[t[0]-e[0],t[1]-e[1]],lt=(t,e)=>[t[0]+e[0],t[1]+e[1]],et=(t,e)=>[t[0]*e,t[1]*e],Q=(t,e)=>t[0]*e[0]+t[1]*e[1],ge=(t,e)=>t[0]*e[1]-t[1]*e[0],pe=t=>Math.hypot(t[0],t[1]),tt=t=>{let e=pe(t)||1;return[t[0]/e,t[1]/e]},Ms=t=>[-t[1],t[0]],Rs=t=>[t[1],-t[0]];var L_=.05,H_=.2,C_=.6,_u=.05;function N_(t){let e=[];return t.forEach((n,r)=>{let o=n.points;if(o.length<3)return;let i=_e(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=pe(V(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],d=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let f=[-u[1],u[0]],[h,p]=[Q(s,u),Q(l,u)],_=o.map(y=>Q(y,f));e.push({room:r,index:a,dir:u,normal:f,offset:Q(s,f),outside:Q(d,f)>0?1:-1,from:Math.min(h,p),to:Math.max(h,p),reach:[Math.min(..._),Math.max(..._)]})})}),e}function bu(t,e){return t.outside===1?t.reach[0]<e-_u:t.reach[1]>e+_u}function B_(t,e,n,r){if(t.room===e.room||Math.abs(ge(t.dir,e.dir))>L_||t.outside===e.outside)return null;let o=(e.offset-t.offset)*t.outside;return o>n||o<-r||Math.abs(o)<1e-4||o<0&&(!bu(t,e.offset)||!bu(e,t.offset))||Math.min(t.to,e.to)-Math.max(t.from,e.from)<H_?null:o}var Es=t=>Math.round(t*1e3)/1e3;function yu(t,e=.6,n=C_){let r=N_(t),o=r.map((y,b)=>b),i=y=>o[y]===y?y:o[y]=i(o[y]),s=[],a=new Set,l=[];for(let y=0;y<r.length;y++)for(let b=y+1;b<r.length;b++){let v=B_(r[y],r[b],e,n);v!==null&&l.push([y,b,v])}l.sort((y,b)=>Math.abs(y[2])-Math.abs(b[2]));let c=new Map(r.map((y,b)=>[b,[b]])),u=(y,b)=>y.some(v=>b.some(w=>r[v].room===r[w].room&&Math.abs(r[v].offset-r[w].offset)>=.002));for(let[y,b,v]of l){let[w,x]=[i(y),i(b)];if(w!==x){if(u(c.get(w),c.get(x)))continue;o[w]=x,c.set(x,[...c.get(x),...c.get(w)]),c.delete(w)}s.push(Es(v)),a.add(y).add(b)}let d=new Map(r.map((y,b)=>[`${y.room}:${y.index}`,b]));for(let y=a.size>0;y;)y=!1,r.forEach((b,v)=>{let w=d.get(`${b.room}:${(b.index+1)%t[b.room].points.length}`);if(w===void 0||w===v)return;let x=r[w];!(Math.abs(ge(b.dir,x.dir))<1e-6&&Math.abs(b.offset-x.offset)<.002&&b.outside===x.outside)||a.has(v)===a.has(w)||(a.add(v).add(w),y=!0)});r.forEach((y,b)=>{let v=d.get(`${y.room}:${(y.index+1)%t[y.room].points.length}`);if(v===void 0||v===b||!a.has(b)||!a.has(v))return;let w=r[v];Math.abs(ge(y.dir,w.dir))<1e-6&&Math.abs(y.offset-w.offset)<.002&&y.outside===w.outside&&(o[i(b)]=i(v))});let f=()=>t.map(y=>({...y,points:y.points.map(b=>[b[0],b[1]])}));if(s.length===0)return{rooms:f(),gaps:s};let h=new Map;for(let y of a)h.set(i(y),[...h.get(i(y))??[],y]);let p=t.map(y=>y.points.map(()=>new Map));for(let[y,b]of h){let v=new Map(b.map(x=>[`${r[x].room}:${Math.round(r[x].offset*500)}`,r[x].offset])),w=[...v.values()].reduce((x,k)=>x+k,0)/v.size;for(let x of b){let k=r[x],$=[k.normal[0]*(w-k.offset),k.normal[1]*(w-k.offset)];p[k.room][k.index].set(y,$),p[k.room][(k.index+1)%t[k.room].points.length].set(y,$)}}return{rooms:t.map((y,b)=>({...y,points:y.points.map((v,w)=>{let x=[...p[b][w].values()].reduce((k,$)=>[k[0]+$[0],k[1]+$[1]],[v[0],v[1]]);return[Es(x[0]),Es(x[1])]})})),gaps:s}}function wu(t){let e=t.filter(n=>n>.04).sort((n,r)=>n-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var W_=.25,vu=t=>Math.round(t*1e3)/1e3,ku=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function Fs(t,e,n,r,o){let i=ku(t,e,n);if(!i)return[r,o];let s=(a,l)=>N([a,l],i.points);return s(r,o)?[r,o]:s(r,n)?[r,n]:s(e,o)?[e,o]:[e,n]}function V_(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Q(V(i,n),r))<.02&&Math.abs(Q(V(a,n),r))<.02}))}var As=(t,e)=>Math.abs((t-e+540)%360-180);function _r(t,e,n,r=W_){let o=ku(t,e.x,e.z);if(!o)return null;let i=o.points,s=_e(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=pe(V(u,l));if(d<.3)return;let f=[(u[0]-l[0])/d,(u[1]-l[1])/d],h=[-f[1]*s,f[0]*s],p=Q(V([e.x,e.z],l),f);if(p<0||p>d)return;let _=V_(t,o,l,h)?n/2:0,y=Q(V([e.x,e.z],l),h)-_,b=Math.atan2(-h[0],h[1])*180/Math.PI,w=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((k,$)=>As(e.rotation,$.rotation)<As(e.rotation,k.rotation)?$:k);if(As(e.rotation,w.rotation)>50)return;let x=y-w.extent;Math.abs(x)>r||a&&Math.abs(x)>=Math.abs(a.gap)||(a={x:vu(e.x-h[0]*x),z:vu(e.z-h[1]*x),rotation:(Math.round(w.rotation)%360+360)%360,gap:x})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var Sn=Math.PI/180,nt=t=>Math.tan(Math.min(80,Math.max(0,t))*Sn);function yr(t){return{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),z0:Math.min(t.z0,t.z1),z1:Math.max(t.z0,t.z1)}}function xu(t){if(!t.rotation)return null;let e=t.rotation*Sn;return{cx:(t.x0+t.x1)/2,cz:(t.z0+t.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function $u(t,e){let n=xu(t);if(!n)return e;let[r,o]=[e[0]-n.cx,e[1]-n.cz];return[n.cx+r*n.c-o*n.sn,n.cz+r*n.sn+o*n.c]}function Ts(t,e,n){let r=xu(t);if(!r)return[e,n];let[o,i]=[e-r.cx,n-r.cz];return[r.cx+o*r.c+i*r.sn,r.cz-o*r.sn+i*r.c]}function wr(t,e=0){let{x0:n,x1:r,z0:o,z1:i}=yr(t);return[[n-e,o-e],[r+e,o-e],[r+e,i+e],[n-e,i+e]].map(s=>$u(t,s))}function ke(t){let{x0:e,x1:n,z0:r,z1:o}=yr(t),i=s=>$u(t,s);return t.axis==="x"?{u0:e,u1:n,w:o-r,at:(s,a)=>i([s,t.flip?o-a:r+a])}:{u0:r,u1:o,w:n-e,at:(s,a)=>i([t.flip?n-a:e+a,s])}}function vr(t,e,n){let{x0:r,x1:o,z0:i,z1:s}=yr(t),[a,l]=Ts(t,e,n);return t.axis==="x"?[a,t.flip?s-l:l-i]:[l,t.flip?o-a:a-r]}var br=Math.tan(30*Sn);function kr(t,e,n,r,o){let i=Math.min(t*.3,r>1e-6?2.4/r:t*.3),s=Math.min(t*.3,o>1e-6?2.4/o:t*.3),a=e+i*r,l=n+s*o,c=Math.min(t-s,Math.max(i,(l-a+br*(t-s+i))/(2*br))),u=a+(c-i)*br;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=i?e+f*r:f<=c?a+(f-i)*br:f<=t-s?l+(t-s-f)*br:n+(t-f)*o}}function ze(t){let e=ke(t).w,[n,r]=[t.eave_a,t.eave_b],[o,i]=[nt(t.pitch_a),nt(t.pitch_b)];switch(t.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*o,y:s=>n+s*o};case"mansard":{let s=kr(e,n,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-n+e*i)/(o+i))):e/2;return{vr:s,rh:n+s*o,y:a=>a<=s?n+a*o:r+(e-a)*i}}}}var Zt=t=>ze(t).rh;function Su(t){let e=t.heightEnd!==void 0;return{...t,a:t.b,b:t.a,left:t.right,right:t.left,roomLeft:t.roomRight,roomRight:t.roomLeft,height:e?t.heightEnd:t.height,heightEnd:e?t.height:void 0,...t.bottom?{bottom:[t.bottom[1],t.bottom[0]]}:{}}}function K_(t,e){let n=t.map(r=>({...r}));for(let r of e){let o=n.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):n.push({...r})}return n}function G_(t,e,n){if(t.a===e.b)return!1;let r=tt(V(n[t.b],n[t.a])),o=tt(V(n[e.b],n[e.a]));return Math.abs(ge(r,o))>1e-6||Q(r,o)<=0||t.free||e.free||t.heightEnd!==void 0||e.heightEnd!==void 0?!1:t.height===e.height&&t.exterior===e.exterior&&t.roomLeft===e.roomLeft&&t.roomRight===e.roomRight&&Math.abs(t.left-e.left)<=1e-9&&Math.abs(t.right-e.right)<=1e-9}function Mu(t,e,n=new Set){let r=t.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||n.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:Su(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:Su(r[a[1]]);if(!G_(l,c,e))continue;let u={...l,b:c.b,sources:K_(l.sources,c.sources)};i=[...r.filter((d,f)=>f!==a[0]&&f!==a[1]),u];break}if(!i)return r;r=i}}function Ru(t,e){let n=new Map;t.forEach((o,i)=>{let s=tt(V(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:et(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)n.set(l,[...n.get(l)??[],c])});let r=new Map;for(let[o,i]of n){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:lt(s,et(Ms(l.d),l.left)),right:lt(s,et(Rs(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=lt(s,et(Ms(l.d),l.left)),f=lt(s,et(Rs(u.d),u.right)),h=ge(l.d,u.d);if(Math.abs(h)<1e-4)return;let p=lt(d,et(l.d,ge(V(f,d),u.d)/h));pe(V(p,s))>a||(r.get(l.key).left=p,r.get(u.key).right=p)})}return r}function Eu(t,e){let n=t.filter((r,o)=>pe(V(r,t[(o+1)%t.length]))>e);for(;;){if(n.length<=3)return n;let r=n.findIndex((o,i)=>{let s=n[(i+n.length-1)%n.length],a=n[(i+1)%n.length],[l,c]=[V(o,s),V(a,o)];return Math.abs(ge(tt(l),tt(c)))<1e-7&&Q(l,c)>0});if(r===-1)return n;n=n.filter((o,i)=>i!==r)}}function U_(t){let e=[];return{points:e,idOf(n){let r=e.findIndex(o=>Math.abs(o[0]-n[0])<=t&&Math.abs(o[1]-n[1])<=t);return r>=0?r:(e.push([n[0],n[1]]),e.length-1)}}}function j_(t,e){let n=[];for(let r of t){let o=r.points;if(o.length<3||Math.abs(_e(o))<1e-6)continue;let i=_e(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&n.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return n}function Z_(t,e,n){let r=[];for(let o of t){let[i,s]=[e[o.u],e[o.v]],a=V(s,i),l=pe(a),c=et(a,1/l),u=e.map((f,h)=>({id:h,rel:V(f,i)})).filter(({id:f,rel:h})=>f!==o.u&&f!==o.v&&Q(h,c)>n&&Q(h,c)<l-n&&Math.abs(ge(c,h))<=n).map(({id:f,rel:h})=>({t:Q(h,c),id:f})).sort((f,h)=>f.t-h.t),d=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let f=0;f+1<d.length;f++){let[h,p]=[d[f],d[f+1]];r.push({u:h.id,v:p.id,room:o.room,edge:o.edge,t0:o.forward?h.t:l-p.t,t1:o.forward?p.t:l-h.t,forward:o.forward})}}return r}var Au=t=>({room_id:t.room,edge:t.edge,t0:t.t0,t1:t.t1});function q_(t,e){let n=new Map(t.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,u)=>c-u))}let o=a=>{let l=n.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=n.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[d,f]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(f[0]-d[0],f[1]-d[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let u=o(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let d of a){let[f,h]=s(d),[p,_]=d===a[0]?[f,h]:[h,f];p!==null&&(l=Math.min(l,p)),_!==null&&(c=Math.min(c,_))}let u=a.map(d=>n.get(d.room)?.ceiling);if(u.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...u);l===1/0&&(l=d),c===1/0&&(c=d)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=n.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function Y_(t){let e=typeof t.bottom=="number"&&t.bottom>0?t.bottom:0,n=typeof t.bottom_end=="number"&&t.bottom_end>=0?t.bottom_end:e;return e>0||n>0?{bottom:[e,n]}:{}}function Fu(t){let e=n=>Math.round(n*1e6)/1e6;return t.a===void 0||t.b===void 0?t.a!==void 0?{height:e(t.a)}:t.b!==void 0?{height:e(t.b)}:{}:Math.abs(t.a-t.b)<1e-6?{height:e(t.a)}:{height:e(t.a),heightEnd:e(t.b)}}function X_(t,e,n,r){let o=q_(e,t),i=new Map;for(let l of t){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(f=>f!==c&&f.u===c.v&&f.v===c.u&&f.room!==c.room);for(let f of l)f!==c&&f!==u&&f.room!==c.room&&r.push(`overlap:${c.room}:${f.room}`);let d=u?[c,u]:[c];if(o.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let f=o.thicknessOf(d)??n.interior;s.push({a:c.u,b:c.v,left:f/2,right:f/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(Au),...Fu(o.heightsOf(d))})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(d)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Au(c)],...Fu(o.heightsOf(d))})}return{drafts:s,open:a}}function Q_(t,e){let n=i=>tt(V(e[i.b],e[i.a])),r=t.filter(i=>!i.exterior&&!i.free),o=new Map;for(let i of r){if(o.has(i))continue;let s=[i];o.set(i,s);for(let a=0;a<s.length;a++){let l=s[a];for(let c of r){if(o.has(c))continue;(c.a===l.a||c.a===l.b||c.b===l.a||c.b===l.b)&&Math.abs(ge(n(l),n(c)))<1e-6&&(s.push(c),o.set(c,s))}}}for(let i of new Set(o.values())){let s=n(i[0]),a=new Map;for(let u of i)for(let d of[u.a,u.b])a.set(d,(a.get(d)??0)+1);let l=new Set;for(let[u,d]of a)if(d===1)for(let f of t){if(!f.exterior||f.free||f.a!==u&&f.b!==u)continue;let h=n(f);Math.abs(ge(s,h))>1e-6||l.add(Q(s,h)>0?"left":"right")}if(l.size!==1)continue;let c=[...l][0];for(let u of i){let d=u.left+u.right,f=Q(n(u),s)>0,h=c==="left"===f;[u.left,u.right]=h?[0,d]:[d,0]}}}var J_=(t,e)=>{let n=i=>Math.round(i*100),[r,o]=t[0]<e[0]||t[0]===e[0]&&t[1]<=e[1]?[t,e]:[e,t];return`w_${n(r[0])}_${n(r[1])}_${n(o[0])}_${n(o[1])}`};function me(t,e,n=[]){let r=e.eps??.005,o=[],i=U_(r),s=j_(t,i),a=n.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),l=a.map(b=>[i.idOf(b.a),i.idOf(b.b)]),c=new Set;for(let b of t){let v=b.points;v.length<3||(b.wall_splits??[]).forEach((w,x)=>{if(!w||x>=v.length)return;let k=v[x],$=V(v[(x+1)%v.length],k),A=pe($);for(let F of w)F>r&&F<A-r&&c.add(i.idOf(lt(k,et($,F/A))))})}let u=Z_(s,i.points,r),{drafts:d,open:f}=X_(u,t,e,o);Q_(d,i.points);let h=d;a.forEach((b,v)=>{let[w,x]=l[v];if(w===x)return;let k=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],$=t.find(F=>F.points.length>=3&&N(k,F.points))?.id??null,A=(b.thickness??e.interior)/2;h.push({free:b.id,a:w,b:x,left:A,right:A,exterior:!1,roomLeft:$,roomRight:$,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0,...typeof b.height=="number"&&b.height>0&&typeof b.height_end=="number"&&b.height_end>0&&Math.abs(b.height_end-b.height)>1e-6?{heightEnd:b.height_end}:{},...Y_(b)})});let p=Mu(h,i.points,c),_=Ru(p,i.points);return{walls:p.map((b,v)=>{let[w,x]=[i.points[b.a],i.points[b.b]],[k,$]=[_.get(`${v}:a`),_.get(`${v}:b`)],A=Eu([k.right,$.left,x,$.right,k.left,w],1e-6);return{id:J_(w,x),a:[w[0],w[1]],b:[x[0],x[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:A,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{},...b.heightEnd!==void 0?{heightEnd:b.heightEnd}:{},...b.bottom?{bottom:b.bottom}:{}}}),warnings:[...new Set(o)],open:f}}function Mn(t,e,n){let r=t.points[e];return lt(r,et(tt(V(t.points[(e+1)%t.points.length],r)),n))}function Pe(t,e,n){if(t.wall){let o=n.find(a=>a.id===t.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=tt(V(o.b,o.a));return{room:{id:t.room_id,name:"",area_id:null,points:[o.a,o.b,lt(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===t.room_id);return r&&t.edge<r.points.length?{room:r,edge:t.edge}:null}var Tu=(t,e)=>Q(V(e,t.a),tt(V(t.b,t.a)));function zt(t,e,n){if(!e.wall)return eb(t,n.room,n.edge,e.offset);let r=t.find(o=>o.free===e.wall);return r?{wall:r,s:Tu(r,Mn(n.room,0,e.offset))}:null}function eb(t,e,n,r){for(let o of t)if(o.sources.some(s=>s.room_id===e.id&&s.edge===n&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:Tu(o,Mn(e,n,r))};return null}function zu(t,e){let n=t.points.map(h=>h[0]),r=t.points.map(h=>h[1]);if(t.points.length!==4||new Set(n.map(h=>h.toFixed(3))).size!==2||new Set(r.map(h=>h.toFixed(3))).size!==2)return null;let[o,i,s,a]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],l=h=>Math.max(0,...e.filter(p=>(p.roomLeft===t.id||p.roomRight===t.id)&&h(p)).map(p=>p.roomLeft===t.id?p.left:p.right)),c=(h,p)=>Math.abs(h-p)<.001,u=(h,p,_)=>c(h.a[p],_)&&c(h.b[p],_),d=i-o-l(h=>u(h,0,o))-l(h=>u(h,0,i)),f=a-s-l(h=>u(h,1,s))-l(h=>u(h,1,a));return[Math.round(d*1e3)/1e3,Math.round(f*1e3)/1e3]}var Pu=([t,e])=>{let n=Math.hypot(t,e)||1;return[t/n,e/n]};function tb(t){return t.reduce((e,n,r)=>e+(n[0]*t[(r+1)%t.length][1]-t[(r+1)%t.length][0]*n[1]),0)/2}function Du(t,e){let n=t.length;if(n<3||Math.abs(e)<1e-9)return t.map(([o,i])=>[o,i]);let r=tb(t)>=0?1:-1;return t.map((o,i)=>{let s=t[(i+n-1)%n],a=t[(i+1)%n],[l,c]=Pu([o[0]-s[0],o[1]-s[1]]),[u,d]=Pu([a[0]-o[0],a[1]-o[1]]),f=[c*r,-l*r],h=[d*r,-u*r],p=[f[0]+h[0],f[1]+h[1]],_=Math.hypot(p[0],p[1]);if(_<1e-6)return[o[0]+f[0]*e,o[1]+f[1]*e];let y=(p[0]*f[0]+p[1]*f[1])/_,b=Math.min(4,1/Math.max(.25,y));return[o[0]+p[0]/_*e*b,o[1]+p[1]/_*e*b]})}function Pt(t){let e=t.map(r=>r[0]),n=t.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}function nb(t){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,n=new Map;for(let i of t)for(let s of[i.a,i.b])n.set(e(s),[...n.get(e(s))??[],i]);let r=new Set,o=null;for(let i of t){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(n.get(e(a))??[]).find(u=>!r.has(u));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(ve(s))>Math.abs(ve(o)))&&(o=s)}return o}function zs(t,e,n,r){let o=me(t,{exterior:n,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?nb(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],u=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(u[1]-a[1])-(a[1]-c[1])*(u[0]-a[0]))>1e-6});return s.length>=3?Du(s,n):null}function qt(t,e){let n=ke(t),r=ze(t),o=n.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=(b,v)=>[b,v,r.y(v)],u=c(a,-i),d=c(l,-i),f=c(l,o+s),h=c(a,o+s),[p,_]=[nt(t.pitch_a),nt(t.pitch_b)],y=b=>[b,r.vr,r.rh];if(t.ends&&(t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip")){let b=(n.u1-n.u0)/2,v=Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=Math.min(r.y(0),r.y(o)),x=w+(r.rh-w)*Math.min(.9,Math.max(.2,t.halfhip??.55)),k=p>1e-6?Math.min(r.vr,(x-t.eave_a)/p):r.vr,$=_>1e-6?Math.max(r.vr,o-(x-t.eave_b)/_):r.vr,A=Math.min(b-.1,(r.rh-x)/Math.max(.2,p)),F=[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]],T=[[0,r.y(0)],[k,x],[$,x],[o,r.y(o)]],D=(K,Bt,po)=>{if(K==="hip")return{upA:[],upB:[],ridge:y(Bt===a?n.u0+v*po:n.u1-v*po),profile:null};if(K==="halfhip"){let Wg=y(Bt===a?n.u0+A:n.u1-A);return{upA:[[Bt,k,x]],upB:[[Bt,$,x]],ridge:Wg,profile:T}}return{upA:[],upB:[],ridge:y(Bt),profile:F}},z=D(t.ends[0],a,1),C=D(t.ends[1],l,1),B=[[u,d,...C.upA,C.ridge,z.ridge,...[...z.upA].reverse()],[z.ridge,C.ridge,...[...C.upB].reverse(),f,h,...z.upB]],q=[[z.ridge,C.ridge]];for(let[K,Bt,po]of[[z,u,h],[C,d,f]])K.profile===null?(B.push(K===z?[h,u,K.ridge]:[d,f,K.ridge]),q.push([Bt,K.ridge],[po,K.ridge])):K.upA.length&&(B.push(K===z?[K.upB[0],K.upA[0],K.ridge]:[K.upA[0],K.upB[0],K.ridge]),q.push([K.upA[0],K.ridge],[K.upB[0],K.ridge]));let we=K=>K.profile===null?[]:K.upA.length?[K.upA[0],K.upB[0]]:[K.ridge],$t=[u,d,...we(C),f,h,...[...we(z)].reverse()];return{faces:B,rim:$t,ridges:q,gable:F,endProfiles:[z.profile,C.profile]}}switch(t.shape){case"pent":return{faces:[[u,d,f,h]],rim:[u,d,f,h],ridges:[[f,h]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let b=(n.u1-n.u0)/2,v=t.shape==="pyramid"?b:Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=y(n.u0+v),x=y(n.u1-v);return t.shape==="pyramid"?{faces:[[u,d,w],[d,f,w],[f,h,w],[h,u,w]],rim:[u,d,f,h],ridges:[[u,w],[h,w],[d,w],[f,w]],gable:null}:{faces:[[u,d,x,w],[w,x,f,h],[h,u,w],[d,f,x]],rim:[u,d,f,h],ridges:[[w,x],[u,w],[h,w],[d,x],[f,x]],gable:null}}case"halfhip":{let b=Math.min(r.y(0),r.y(o)),v=b+(r.rh-b)*Math.min(.9,Math.max(.2,t.halfhip??.55)),w=p>1e-6?Math.min(r.vr,(v-t.eave_a)/p):r.vr,x=_>1e-6?Math.max(r.vr,o-(v-t.eave_b)/_):r.vr,k=Math.min((n.u1-n.u0)/2-.1,(r.rh-v)/Math.max(.2,p)),$=y(n.u0+k),A=y(n.u1-k),F=[a,w,v],T=[a,x,v],D=[l,w,v],z=[l,x,v];return{faces:[[u,d,D,A,$,F],[$,A,z,f,h,T],[T,F,$],[D,z,A]],rim:[u,d,D,z,f,h,T,F],ridges:[[$,A],[F,$],[T,$],[D,A],[z,A]],gable:[[0,r.y(0)],[w,v],[x,v],[o,r.y(o)]]}}case"mansard":{let b=kr(o,t.eave_a,t.eave_b,p,_),v=[a,b.vla,b.yla],w=[l,b.vla,b.yla],x=[a,o-b.vlb,b.ylb],k=[l,o-b.vlb,b.ylb],$=[a,b.vr,b.rh],A=[l,b.vr,b.rh];return{faces:[[u,d,w,v],[v,w,A,$],[$,A,k,x],[x,k,f,h]],rim:[u,d,w,A,k,f,h,x,$,v],ridges:[[$,A],[v,w],[x,k]],gable:[[0,r.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,r.y(o)]]}}default:{let b=y(a),v=y(l);return{faces:[[u,d,v,b],[b,v,f,h]],rim:[u,d,v,f,h,b],ridges:[[b,v]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function xr(t,e,n){let r=null;for(let o of t.faces){if(!N([e,n],o.map(([f,h])=>[f,h])))continue;let[i,s]=o,a=o.slice(2).find(f=>Math.abs((s[0]-i[0])*(f[1]-i[1])-(s[1]-i[1])*(f[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let d=i[2]-(u[0]*(e-i[0])+u[2]*(n-i[1]))/u[1];r=r===null?d:Math.min(r,d)}return r}function $r(t,e,n){let r=ke(e),o=t.floors.flatMap(d=>d.rooms.filter(f=>f.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(f=>o.some(h=>N(f,h.points))),s=.35,a=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),l=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:n,u=(d,f)=>{let h=e.overhang_sides?.[d];return typeof h=="number"&&Number.isFinite(h)?Math.min(2,Math.max(0,h)):f};return{a:u("a",c(i(a.map(d=>r.at(d,-s))))),b:u("b",c(i(a.map(d=>r.at(d,r.w+s))))),u0:u("u0",c(i(l.map(d=>r.at(r.u0-s,d))))),u1:u("u1",c(i(l.map(d=>r.at(r.u1+s,d)))))}}var Uo=t=>Math.abs((t.x1-t.x0)*(t.z1-t.z0)),Iu=t=>t.shape==="flat"||t.shape==="parapet",Yt=t=>Math.round(t*100)/100;function jo(t,e){let[n,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return t.filter(i=>{if(i===e||i.dormer||i.open||Iu(i)||Uo(i)<Uo(e)*1.5)return!1;let s=yr(i);return n>=s.x0&&n<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||Uo(s)<Uo(i)?s:i,null)}function Ps(t,e,n,r){let o=ke(t),i=ze(t),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[t.eave_a,t.pitch_a]:[t.eave_b,t.pitch_b],u=l+1.4,d=u+s/2*Math.tan(35*Sn),f=Math.max(.8,Math.min(o.w/2-.2,(d-l)/Math.max(.15,Math.tan(Math.min(80,c)*Sn)))),[h,p]=e==="a"?[0,f]:[o.w-f,o.w],_=o.at(a,h),y=o.at(a+s,p);return{id:n,x0:Yt(Math.min(_[0],y[0])),z0:Yt(Math.min(_[1],y[1])),x1:Yt(Math.max(_[0],y[0])),z1:Yt(Math.max(_[1],y[1])),shape:"gable",axis:t.axis==="x"?"z":"x",eave_a:Yt(u),eave_b:Yt(u),pitch_a:35,pitch_b:35,base:Yt(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function ob(t,e){let n=qt(t,{u0:0,u1:0,a:0,b:0}),r=ze(t);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=vr(t,i,s);return xr(n,a,l)??r.y(l)}}function Ds(t,e){if(Iu(e))return e;let n=ke(e),r=ze(e).rh,o=ob(t,n),i=o(n.u0)<=o(n.u1),[s,a]=i?[n.u0,n.u1]:[n.u1,n.u0],l=i?1:-1,c=a;for(let f=.5;f<Math.abs(a-s);f+=.05)if(o(s+l*f)>=r-.02){c=s+l*f;break}if(Math.abs(c-a)<.05)return e;let u={...e},d=a===n.u1;return e.axis==="x"?u[d?"x1":"x0"]=c:u[d?"z1":"z0"]=c,u}var Is=.14,Ou=t=>t.shape==="flat"||t.shape==="parapet";function Os(t,e){return!t.open&&Math.min(t.base,t.eave_a,t.eave_b)<e-.05}function Sr(t,e,n){let r=Math.max(0,t.settings.roof.overhang??0),o=1e-6,i=[];for(let s of t.settings.roof.sections??[]){if(s.open)continue;let[a,l,c,u]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],[d,f]=Ts(s,e,n);if(d<a-o||d>l+o||f<c-o||f>u+o||s.points&&s.points.length>=3&&!N([e,n],s.points))continue;let[h,p]=vr(s,e,n),_=Math.max(0,s.overhang??r),y=Ou(s)?null:xr(qt(s,{u0:_,u1:_,a:_,b:_}),h,p);i.push((y??ze(s).y(p))-Is)}return i.length?Math.max(...i):null}function Ls(t,e,n){let r=[],o=e+n+Is;for(let i of t.settings.roof.sections??[]){if(i.open||Ou(i)||i.shape==="mansard")continue;let s=ke(i),a=ze(i),[l,c]=[nt(i.pitch_a),nt(i.pitch_b)],u=[];l>1e-6&&u.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let d of u)d<=.01||d>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(d)-o)>1e-6||r.push([s.at(s.u0,d),s.at(s.u1,d)])}return r}function Hs(t,e,n,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,n+(o-n)*l]);let s=t.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>N(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function Cs(t,e){let n=t.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation),r=n.filter(l=>l.elevation<e.base-.05),{x0:o,z0:i,x1:s,z1:a}=e;if(o!==void 0&&i!==void 0&&s!==void 0&&a!==void 0){let l=[];for(let u of[.2,.5,.8])for(let d of[.2,.5,.8])l.push([o+(s-o)*u,i+(a-i)*d]);let c=r.findLast(u=>u.rooms.some(d=>d.points.length>=3&&l.some(f=>N(f,d.points))));if(c)return c}return r.at(-1)??n[0]}var _t=t=>Math.round(t*1e3)/1e3;function Ns(t,e=n=>`roof_${n+1}`){let n=t.settings.roof?.pitch??35,r=t.settings.wall_exterior,o=t.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(u=>N(c,u.points));for(let l of o){let c=l.rooms.filter(y=>y.points.length>=3),u=[...new Set(c.flatMap(y=>y.points.map(b=>_t(b[0]))))].sort((y,b)=>y-b),d=[...new Set(c.flatMap(y=>y.points.map(b=>_t(b[1]))))].sort((y,b)=>y-b),f=d.slice(0,-1).map((y,b)=>u.slice(0,-1).map((v,w)=>{let x=[(u[w]+u[w+1])/2,(d[b]+d[b+1])/2];return a(c,x)&&!a(s,x)})),h=f.map(y=>y.map(()=>!1)),p=(y,b)=>f[b][y]&&!h[b][y],_=l.elevation+l.height;for(let y=0;y<f.length;y++)for(let b=0;b<(f[y]?.length??0);b++){if(!p(b,y))continue;let v=b;for(;v+1<f[y].length&&p(v+1,y);)v++;let w=y;for(;w+1<f.length&&Array.from({length:v-b+1},(F,T)=>p(b+T,w+1)).every(Boolean);)w++;for(let F=y;F<=w;F++)for(let T=b;T<=v;T++)h[F][T]=!0;let[x,k]=[u[b]-r,u[v+1]+r],[$,A]=[d[y]-r,d[w+1]+r];Math.min(k-x,A-$)<.8||i.push({id:e(i.length),x0:_t(x),z0:_t($),x1:_t(k),z1:_t(A),shape:"gable",axis:k-x>=A-$?"x":"z",eave_a:_t(_),eave_b:_t(_),pitch_a:n,pitch_b:n,base:_t(_),overhang:null})}s.push(...c)}return i}var Se=Math.PI/180,We=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Xt=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Rn=t=>Math.hypot(t[0],t[1],t[2]),Qt=t=>{let e=Rn(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Lu=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Ve=t=>Math.round(t*100)/100,Mr=([t,e],n)=>(Math.atan2(t,-e)/Se-n+720)%360;var Cu=.25;function Nu(t,e,n,r,o,i,s){let a=o-n>=i-r,l=a?o-n:i-r;return{key:`${t}:top`,section:e,side:"top",flat:!0,o:[n,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-n,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Bu(t,e){let n=Qt(Lu(t,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var Wu=t=>{let e=Qt([-t[0],0,-t[2]]);return[e[0],e[2]]};function bt(t,e,n,r,o,i,s,a){let l=Qt(We(o,r)),c=Qt(We(i,r));return{key:t,section:e,side:n,flat:!1,o:r,eu:l,es:c,n:Bu(l,c),lu:Rn(We(o,r)),ls:Rn(We(i,r)),pitch:s,span:a,facing:Wu(c)}}function Hu(t,e,n,r,o,i){let s=Rn(We(o,r));if(s<.3)return null;let a=Qt(We(o,r)),l=We(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=Rn(u);if(d<.3)return null;let f=Qt(u),h=p=>{let _=Math.min(1,Math.max(0,p/d));return[c*_,s-(s-c)*_]};return{key:t,section:e,side:n,flat:!1,o:r,eu:a,es:f,n:Bu(a,f),lu:s,ls:d,pitch:Math.atan2(f[1],Math.hypot(f[0],f[2]))/Se,span:h,facing:Wu(f)}}function ib(t,e){let n=ke(t),r=ze(t),o=(v,w,x)=>{let[k,$]=n.at(v,w);return[k,x,$]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a,u=r.y(-i),d=r.y(n.w+s);if(t.shape==="flat"||t.shape==="parapet"){let[v,w]=[n.at(a,-i),n.at(l,n.w+s)];return[Nu(t.id,t.id,Math.min(v[0],w[0]),Math.min(v[1],w[1]),Math.max(v[0],w[0]),Math.max(v[1],w[1]),t.eave_a+Cu)]}if(t.shape==="pent")return[bt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,n.w+s,d),t.pitch_a,()=>[0,c])];if(t.shape==="mansard")return sb(t,n,a,l,i,s);let f=t.shape==="hip"||t.shape==="pyramid",h=(n.u1-n.u0)/2,p=t.shape==="pyramid"?h:f?Math.min(h,Math.min(r.vr,n.w-r.vr)||n.w/2):0,_=f?n.u0+p-a:0,y=f?l-(n.u1-p):0,b=[];if(r.vr>.3){let v=Math.hypot(r.vr+i,r.rh-u);b.push(bt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,r.vr,r.rh),t.pitch_a,w=>[_*(w/v),c-y*(w/v)]))}if(n.w-r.vr>.3){let v=Math.hypot(n.w+s-r.vr,r.rh-d);b.push(bt(`${t.id}:b`,t.id,"b",o(l,n.w+s,d),o(a,n.w+s,d),o(l,r.vr,r.rh),t.pitch_b,w=>[y*(w/v),c-_*(w/v)]))}if(f){let v=Hu(`${t.id}:c`,t.id,"c",o(a,n.w+s,d),o(a,-i,u),o(n.u0+p,r.vr,r.rh)),w=Hu(`${t.id}:d`,t.id,"d",o(l,-i,u),o(l,n.w+s,d),o(n.u1-p,r.vr,r.rh));b.push(...[v,w].filter(x=>x!==null))}return b}function sb(t,e,n,r,o,i){let s=kr(e.w,t.eave_a,t.eave_b,nt(t.pitch_a),nt(t.pitch_b)),a=(p,_)=>{let[y,b]=e.at(p,_);return[y,s.y(_),b]},l=r-n,c=()=>[0,l],u=(p,_)=>Math.atan2(p,_)/Se,d=[],[f,h]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&d.push(bt(`${t.id}:a`,t.id,"a",a(n,-o),a(r,-o),a(n,s.vla),t.pitch_a,c)),s.vr-s.vla>.3&&d.push(bt(`${t.id}:au`,t.id,"a",a(n,s.vla),a(r,s.vla),a(n,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&d.push(bt(`${t.id}:b`,t.id,"b",a(r,f),a(n,f),a(r,h),t.pitch_b,c)),h-s.vr>.3&&d.push(bt(`${t.id}:bu`,t.id,"b",a(r,h),a(n,h),a(r,s.vr),u(s.rh-s.ylb,h-s.vr),c)),d}function Bs(t){return t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0]??null}function Z(t){let e=t.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>ib(w,$r(t,w,w.overhang??e.overhang)));let n=Bs(t);if(!n)return[];let r=n.rooms.flatMap(w=>w.points.map(x=>x[0])),o=n.rooms.flatMap(w=>w.points.map(x=>x[1])),i=t.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=n.elevation+n.height;if(e.type==="flat")return[Nu("main",null,s,l,a,c,u+Cu)];let d=a-s>=c-l,f=e.ridge==="short"?!d:d,h=(f?c-l:a-s)/2,p=h*Math.tan(e.pitch*Se),_=(w,x,k)=>f?[w,u+k,(l+c)/2+x]:[(s+a)/2+x,u+k,w],[y,b]=f?[s,a]:[l,c],v=()=>[0,b-y];return[bt("main:a",null,"a",_(y,-h,0),_(b,-h,0),_(y,0,p),e.pitch,v),bt("main:b",null,"b",_(y,h,0),_(b,h,0),_(y,0,p),e.pitch,v)]}function Ke(t,e){let n=[];for(let r of t.floors.filter(o=>!e||o.id===e)){let{walls:o}=me(r.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),f=(h,p,_,y)=>n.push({key:h,section:null,side:"top",flat:!1,o:p,eu:_,es:[0,1,0],n:y,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{floorId:r.id}});f(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&f(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return n}var De="ground";function Zo(t){let e=t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>n.elevation-r.elevation);return e.find(n=>n.elevation>-.5)??e[0]??t.floors[0]??null}function qo(t,e){let n=(e.rotation??0)*Se,r=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=Zo(t),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:zc(i,s,a)):e.base??0;return{key:De,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function xe(t,e,n=Z(t)){return e.face===De?qo(t,e):e.face.startsWith("wall:")?Ke(t,e.face.split(":")[1]).find(r=>r.key===e.face)??null:n.find(r=>r.key===e.face)??null}var Yo=1.13,Er=1.72,Ge=.025,rt=.07;function Jt(t){let e=t.module_w||Yo,n=t.module_h||Er;return t.portrait===!1?[n,e]:[e,n]}function Ar(t){return t.layout?.length?t.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,t.rows)},()=>Math.max(1,t.cols))}function Ws(t,e){return t.flat?Math.min(45,Math.max(0,e.tilt??15))*Se:t.wall?Math.min(90,Math.max(0,e.tilt??0))*Se:Math.min(45,Math.max(0,e.tilt??0))*Se}function Fr(t,e){let[,n]=Jt(e),r=Ws(t,e);return t.wall?n*Math.cos(r)+Ge:!t.flat&&r<.001?n+Ge:t.flat&&e.rack==="ew"?n*Math.cos(r)+.08:n*Math.cos(r)+Math.max(.3,2*n*Math.sin(r))}function En(t,e){let[n,r]=Jt(e),o=Ar(e),i=Math.max(1,...o);return[i*n+(i-1)*Ge,(o.length-1)*Fr(t,e)+r*Math.cos(Ws(t,e))]}var ab=t=>t.flat&&!t.unbounded&&!t.wall;function Vu(t,e){if(!ab(t)||!e.rotation)return null;let n=e.rotation*Se,[r,o]=En(t,e);return{cos:Math.cos(n),sin:Math.sin(n),u:e.u+r/2,s:e.v+o/2}}function Ue(t,e,n=!1){let[r,o]=Jt(e),i=Ws(t,e),s=o*Math.cos(i),a=Fr(t,e),l=Ar(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=Vu(t,e),f=(y,b)=>d?[d.u+(y-d.u)*d.cos-(b-d.s)*d.sin,d.s+(y-d.u)*d.sin+(b-d.s)*d.cos]:[y,b],h=(y,b,v)=>{let[w,x]=f(y,b);return[0,1,2].map(k=>t.o[k]+t.eu[k]*w+t.es[k]*x+t.n[k]*v)},p=(y,b)=>{let[v,w]=f(y,b);if(t.unbounded)return!0;if(w<-1e-6||w>t.ls+1e-6)return!1;let[x,k]=t.span(w);return v>=x-1e-6&&v<=k+1e-6},_=[];return l.forEach((y,b)=>{let v=e.align==="right"?c-y:e.align==="center"?(c-y)/2:0;for(let w=0;w<y;w++){let x=`${b}:${w}`,k=u.has(x);if(k&&!n)continue;let $=e.u+(w+v)*(r+Ge),A=$+r,F=e.v+b*a,T=F+(t.flat||t.wall||i>.001?s:o);if([[$,F],[A,F],[A,T],[$,T]].every(([D,z])=>p(D,z)))if(t.wall&&i>.001){let D=rt+o*Math.sin(i),[z,C]=e.flip?[D,rt]:[rt,D],B=[h($,F,z),h(A,F,z),h(A,T,C),h($,T,C)],q=e.flip?F:T;_.push({corners:B,posts:[$+.05,A-.05].map(we=>[h(we,q,0),h(we,q,D)]),cell:x,skipped:k})}else if(!t.flat&&i>.001){let D=rt+o*Math.sin(i),z=[h($,F,rt),h(A,F,rt),h(A,T,D),h($,T,D)];_.push({corners:z,posts:[$+.05,A-.05].map(C=>[h(C,T,0),h(C,T,D)]),cell:x,skipped:k})}else if(!t.flat)_.push({corners:[h($,F,rt),h(A,F,rt),h(A,T,rt),h($,T,rt)],posts:[],cell:x,skipped:k});else{let z=.15+o*Math.sin(i),C=e.rack==="ew"&&b%2===1?!e.flip:!!e.flip,[B,q]=C?[T,F]:[F,T],we=[h($,B,.15),h(A,B,.15),h(A,q,z),h($,q,z)],$t=[$+.05,A-.05].flatMap(K=>[[h(K,B,0),h(K,B,.15)],[h(K,q,0),h(K,q,z)]]);_.push({corners:we,posts:$t,cell:x,skipped:k})}}}),_}function ct(t,e){if(t.unbounded)return{u:e.u,v:e.v};let[n,r]=En(t,e),o=Vu(t,e);if(o){let[s,a]=[(n*Math.abs(o.cos)+r*Math.abs(o.sin))/2,(n*Math.abs(o.sin)+r*Math.abs(o.cos))/2],l=(d,f,h)=>Math.floor(Math.max(f,Math.min(d,h-f))*100+1e-6)/100,[c,u]=[e.u+n/2,e.v+r/2];return{u:Math.round((l(c,s,t.lu)-n/2)*100)/100,v:Math.round((l(u,a,t.ls)-r/2)*100)/100}}let i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,t.lu-n))),v:i(Math.min(Math.max(0,e.v),Math.max(0,t.ls-r)))}}function Tr(t,e){let[n,r]=En(t,e),[o,i]=[e.u+n/2,e.v+r/2];return[t.o[0]+t.eu[0]*o+t.es[0]*i,t.o[2]+t.eu[2]*o+t.es[2]*i]}var Xo=.78,zr=1.18,en=t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:t.w||Xo,module_h:t.h||zr});function Vs(t,e){let n=Ue(t,en(e))[0];if(!n)return null;let r=o=>[o[0]-t.n[0]*.05,o[1]-t.n[1]*.05,o[2]-t.n[2]*.05];return n.corners.map(r)}var Rr={brick:{w:.5,d:.5,h:1},round:{w:.4,d:.4,h:1},wide:{w:1,d:.5,h:1},steel:{w:.2,d:.2,h:1.2}};function tn(t){let e=t.shape??"brick",n=Rr[e]??Rr.brick;return{shape:e,w:t.w||n.w,d:t.d||n.d,h:t.h||n.h}}function yt(t,e){let{w:n,d:r}=tn(t),o=e&&!e.flat?Math.cos(e.pitch*Se):1;return{id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:n,module_h:r/Math.max(.2,o),tilt:0}}function Ks(t,e){let n=yt(e,t),[r,o]=[n.module_w,n.module_h],i=(u,d)=>[t.o[0]+t.eu[0]*u+t.es[0]*d,t.o[1]+t.eu[1]*u+t.es[1]*d,t.o[2]+t.eu[2]*u+t.es[2]*d],[s,a]=[i(e.u+r/2,e.v),i(e.u+r/2,e.v+o)],l=i(e.u+r/2,e.v+o/2),c=u=>{let d=Math.hypot(u[0],u[2])||1;return[u[0]/d,u[2]/d]};return{center:[l[0],l[2]],along:c(t.eu),across:c(t.es),low:Math.min(s[1],a[1]),high:Math.max(s[1],a[1])}}function Gs(t,e){let[n]=Jt(e);return Ve((t.lu-(e.cols*n+(e.cols-1)*Ge))/2)}var Pr=.4;function An(t,e){let n={id:e,face:t.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:t.flat?15:null,flip:!1,entity:null,look:"black"},[r]=Jt(n),[o,i]=t.span(t.ls/2);for(n.cols=Math.max(1,Math.floor((i-o-2*Pr+Ge)/(r+Ge))),n.rows=Math.max(1,Math.min(4,Math.floor((t.ls-2*Pr)/Fr(t,n))));n.cols>1&&Ue(t,{...n,u:Gs(t,n),v:Pr}).length<n.rows*n.cols;)n.cols--;return n.u=Gs(t,n),n.v=Pr,n}function Qo(t,e){let n={...e,face:t.key,tilt:t.flat?e.tilt??15:null,rotation:null,flip:!1};return n.u=Gs(t,n),n.v=Pr,{...n,...ct(t,n)}}function Us(t,e,n){let r=t.settings.north??0,o=a=>a.lu*(1.3+Math.cos((Mr(a.facing,r)-180)*Math.PI/180)),i=Ke(t,n).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...An(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+Ge)/(Er+Ge))),s.u=Ve((i.lu-(s.cols*Er+(s.cols-1)*Ge))/2),s.v=Ve(Math.max(0,i.ls-Yo-.3)),s}function Dr(t,e){let n=t.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=n.length?Math.max(...n.map(i=>i[0]))+3:0,o=n.length?Math.min(...n.map(i=>i[1])):0;return{id:e,face:De,u:Ve(r),v:Ve(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(t.settings.north??0)||0,look:"black",entity:null}}function Ir(t,e,n){let r=qo(t,e),[o,i]=En(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=n*Se,u=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,d=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:Ve(u),v:Ve(d),rotation:(Math.round(n)%360+360)%360}}function Or(t,e){let[n,r]=t.span(t.ls/2);return{id:e,face:t.key,u:Ve((n+r-Xo)/2),v:Ve(Math.max(0,Math.min(t.ls-zr,t.ls*.45-zr/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function Lr(t,e){let n=Rr.brick,[r,o]=t.span(t.ls*.8),i=yt({id:e,face:t.key,u:0,v:0},t).module_h;return{id:e,face:t.key,u:Ve((r+o-n.w)/2),v:Ve(Math.max(0,Math.min(t.ls-i,t.ls*.8-i/2))),shape:"brick",w:null,d:null,h:null}}function Fn(t,e){let[n,r]=[e[0]-t.o[0],e[1]-t.o[2]],[o,i,s,a]=[t.eu[0],t.eu[2],t.es[0],t.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(n*a-r*s)/l,u=(o*r-i*n)/l;if(u<0||u>t.ls)return null;let[d,f]=t.span(u);return c>=d&&c<=f?{u:c,s:u}:null}function js(t,e){let n=null;for(let r of t){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],u=l>=0&&l<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};u&&c>.35&&c<=.8&&!n&&(n={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=Fn(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!n||i>n.y)&&(n={face:r,...o,y:i})}return n&&{face:n.face,u:n.u,s:n.s}}function Jo(t,e,n){let r=Xt(n,t.n);if(Math.abs(r)<1e-6)return null;let o=Xt(We(t.o,e),t.n)/r;if(o<=0)return null;let i=We([e[0]+n[0]*o,e[1]+n[1]*o,e[2]+n[2]*o],t.o);return{t:o,u:Xt(i,t.eu),s:Xt(i,t.es)}}function Zs(t,e,n){if(t.unbounded)return!0;if(n<0||n>t.ls)return!1;let[r,o]=t.span(n);return e>=r&&e<=o}function qs(t,e,n,r){return Ue(t,e).some(i=>{let s=i.corners.map(c=>{let u=We(c,t.o);return[Xt(u,t.eu),Xt(u,t.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return n>=Math.min(...a)-.05&&n<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var lb=["n","ne","e","se","s","sw","w","nw"],Ys=(t,e)=>lb[Math.round(Mr(t.facing,e)/45)%8];function Hr(t,e){let n=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Mr(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...t].sort((r,o)=>n(o)-n(r))[0]??null}var ju=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Ku={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Gu=t=>typeof t=="string"?t:t[0],ei=t=>typeof t=="string"?Je[t]:t[1],Tn=.05,cb=.02,Uu=t=>Math.round(t*1e3)/1e3;function ub(t,e,n,r){switch(e){case"back":return{x:t.x0+n,z:t.z0+r,turn:0};case"right":return{x:t.x1-r,z:t.z0+n,turn:90};case"front":return{x:t.x1-n,z:t.z1-r,turn:180};case"left":return{x:t.x0+r,z:t.z1-n,turn:270}}}function Zu(t,e,n){let r=ue(t.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,u,d,[f,h,p])=>{s.push({id:n(),type:l,x:Uu(c),z:Uu(u),rotation:d,w:f,d:h,h:p,variant:null,entity:null,power:null})};for(let[l,c,u]of Ku[e].rows){let d=l==="back"||l==="front"?o:i,f=0,h=[];for(let _ of u){if(f+ei(_)[0]>d-.1)break;h.push(_),f+=ei(_)[0]}let p=c==="start"?Tn:c==="end"?d-f-Tn:(d-f)/2;for(let _ of h){let y=ei(_),b=ub(r,l,p+y[0]/2,y[1]/2+cb);a(Gu(_),b.x,b.z,b.turn,y),p+=y[0]}}for(let[l,c,u,d]of Ku[e].spots){let f=ei(l),h=(y,b,v)=>Math.min(v,Math.max(b,y)),p=h(r.x0+o*c,r.x0+f[0]/2+Tn,r.x1-f[0]/2-Tn),_=h(r.z0+i*u,r.z0+f[1]/2+Tn,r.z1-f[1]/2-Tn);a(Gu(l),p,_,d,f)}return s}var db=30*Math.PI/180,qu=.05;function Xs(t){let e=t.points.length;return t.points.map((n,r)=>{let o=t.points[(r+1)%e];return Math.hypot(o[0]-n[0],o[1]-n[1])})}function Cr(t){return Xs(t).reduce((e,n)=>e+n,0)}function hb(t,e){let n=Xs(t),r=0;for(let o=0;o<e&&o<n.length;o++)r+=n[o];return r}function fb(t,e){let n=t.points.length,[r,o,i]=[t.points[e],t.points[(e+1)%n],t.points[(e+2)%n]],s=[o[0]-r[0],o[1]-r[1]],a=[i[0]-o[0],i[1]-o[1]],[l,c]=[Math.hypot(s[0],s[1]),Math.hypot(a[0],a[1])];return l<1e-9||c<1e-9?0:Math.acos(Math.max(-1,Math.min(1,(s[0]*a[0]+s[1]*a[1])/(l*c))))}function Qs(t,e,n){let r=Xs(t),o=r.length,i=r.reduce((h,p)=>h+p,0);if(o<3||!(i>0)||!(n>0))return null;let s=Math.min(n,i),a=(e%i+i)%i,l=0,c=0;for(;l<o-1&&a>=c+r[l];)c+=r[l],l++;let u=a-c,d=s,f=[];for(let h=0;h<=o&&d>1e-9;h++){let p=r[l]-u,_=Math.min(d,p);_>1e-9&&f.push({edge:l,t0:u,t1:u+_}),d-=_,u=0;let y=(l+1)%o;if(d>1e-9&&fb(t,l)>db)break;l=y}for(;f.length>1&&f[0].t1-f[0].t0<qu;)f.shift();for(;f.length>1&&f[f.length-1].t1-f[f.length-1].t0<qu;)f.pop();return f.length?f.map(h=>({edge:h.edge,offset:(h.t0+h.t1)/2,width:h.t1-h.t0})):null}function zn(t,e){let n=e[0];return n?{from:hb(t,n.edge)+n.offset-n.width/2,width:e.reduce((r,o)=>r+o.width,0)}:null}function Dt(t,e){return e.front?t.filter(n=>n.front===e.front):[e]}function Js(t,e){let n=t.points.length,r=1/0,o=0,i=0;for(let s=0;s<n;s++){let a=t.points[s],l=t.points[(s+1)%n],c=l[0]-a[0],u=l[1]-a[1],d=Math.hypot(c,u);if(d<1e-6)continue;let f=Math.max(0,Math.min(d,((e[0]-a[0])*c+(e[1]-a[1])*u)/d)),h=Math.hypot(e[0]-(a[0]+c*f/d),e[1]-(a[1]+u*f/d));h<r&&(r=h,o=i+f),i+=d}return o}function Nr(t,e,n,r,o,i=()=>I("opening")){let s=Qs(e,r,o);if(!s)return null;let a=Dt(t,n),l=new Set(a.map(h=>h.id)),c=s.length>1?a[0].front??`front-${a[0].id}`:null,u=s.map((h,p)=>({...n,id:p===0?a[0].id:i(),edge:h.edge,offset:h.offset,width:h.width,front:c})),d=[],f=!1;for(let h of t){if(!l.has(h.id)){d.push(h);continue}f||(d.push(...u),f=!0)}return d}var na=globalThis,ea=na.__nextfloorBuiltin?.de??{},ta=na.__nextfloorBuiltin?.en??{};na.__nextfloorBuiltin??={de:ea,en:ta};var pb=()=>typeof S=="object"&&S||{},mb=globalThis,gb=mb.__nextfloorTexts??=new Map;function _b(t){let e=t.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in pb()?e:void 0}function Yu(t){let e=_b(t),n=e===void 0?void 0:gb.get(e);return n instanceof Promise?void 0:n}function ti(t,e){return Yu(t)?.[e]}function $e(t,e,n={}){let r=t?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:Yu(r)?.[e])??(o?ea:ta)[e]??ta[e]??ea[e]??e;for(let[s,a]of Object.entries(n))i=i.replace(`{${s}}`,String(a));return i}function U(t,e,n=2){return e.toLocaleString(t?.language??void 0,{maximumFractionDigits:n})}var je=le`
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
`,E$=le`
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
`,ut=le`
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
`;var he=t=>/^(sensor|input_number|number)\./.test(t),ni=t=>/^(binary_sensor|input_boolean)\./.test(t);function Pn(t,e){if(!he(e))return!1;let n=t?.states[e]?.attributes;return n?.device_class==="power"||n?.unit_of_measurement==="W"||n?.unit_of_measurement==="kW"}function bb(t,e){let n=t?.entities?.[e],r=n?.area_id??(n?.device_id?t?.devices?.[n.device_id]?.area_id:null);return r?t?.areas?.[r]?.name:void 0}function H(t,e){return Object.keys(t?.states??{}).filter(e).map(n=>{let r=bb(t,n);return{id:n,label:r?`${W(t,n)} \xB7 ${r}`:W(t,n)}}).sort((n,r)=>n.label.localeCompare(r.label))}function ri(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}var oi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Br=t=>(...e)=>({_$litDirective$:t,values:e}),Dn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var Wr=class extends Dn{constructor(e){if(super(e),this.it=g,e.type!==oi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===mt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Wr.directiveName="unsafeHTML",Wr.resultType=1;var Xu=Br(Wr);var Qu=40,ra=class extends oe{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return n.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,Qu)]}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>n.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-Qu)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[];return m`<div class="wrap">
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
    </div>`}static styles=[je,le`
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",ra);var nn=t=>t.target.value,oa=t=>Number.parseFloat(t.replace(",",".")),ie=t=>Math.round(t*1e3)/1e3,Ju=t=>t.wide?"nf-field nf-wide":"nf-field";function E(t,e,n,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(ie(n))}
      ?disabled=${!t.admin}
      @change=${s=>{let a=oa(nn(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function j(t,e,n,r,o={}){return m`<label class=${Ju(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${n} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!t.admin} @change=${i=>r(nn(i).trim())} />
  </label>`}function O(t,e,n,r,o,i={}){return m`<label class=${Ju(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!t.admin} @change=${s=>o(nn(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===n}>${a}</option>`)}
    </select>
  </label>`}function L(t,e,n,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${n} ?disabled=${!t.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function Ie(t,e,n,r,o){return m`<label class="nf-field"
    >${e}
    <span class="nf-color-row"
      ><input type="color" .value=${n??r} ?disabled=${!t.admin} @change=${i=>o(i.target.value)} />
      ${n?m`<button type="button" class="nf-link" ?disabled=${!t.admin} @click=${()=>o(null)}>${t.t("wall_paint_default")}</button>`:g}</span
    ></label
  >`}function P(t,e,n,r,o,i){let s=r===void 0?null:r?t.t("entity_auto",{name:W(t.hass,r)}):t.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:t.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${a}
      .value=${n??(s!==null?"__auto":"none")}
      .placeholder=${t.t("entity_search")}
      ?disabled=${!t.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function In(t,e,n){return n?(n.startsWith("mdi:")?n:`mdi:${n}`).replace(/[^a-z0-9:-]/gi,""):t.hass?Xc(t.hass,e):null}function It(t,e,n){let r=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${t.t("marker_icon_hint")}
    >${t.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!t.admin} @change=${o=>n(nn(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?Xu(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function On(t,e,n){return m`<label class="nf-field nf-wide" title=${t.t("marker_show_hint")}
    >${t.t("marker_show")}
    <select ?disabled=${!t.admin} @change=${r=>n(nn(r)||null)}>
      <option value="" ?selected=${!e}>${t.t("marker_show_auto")}</option>
      ${xc.map(r=>m`<option value=${r} ?selected=${r===e}>${t.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}function Ln(t,e,n){let r=e??{},o=i=>s=>{let a={...r,[i]:Math.round(Math.max(-5,Math.min(5,s))*100)/100};n(a.x||a.z||a.y?a:null)};return m`<details class="nf-wide nf-pin-shift" ?open=${!!e}>
    <summary>${t.t("pin_shift")}</summary>
    <div class="nf-form">
      ${E(t,"\u2194 x",r.x??0,o("x"),.05)} ${E(t,"\u2195 z",r.z??0,o("z"),.05)} ${E(t,t.t("pin_shift_up"),r.y??0,o("y"),.05)}
      ${e?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n(null)}>${t.t("height_auto")}</button>`:g}
      <p class="nf-sub nf-wide">${t.t("pin_shift_hint")}</p>
    </div>
  </details>`}var Y=(...t)=>m`<div class="nf-actions">${t}</div>`,M=(t,e="")=>m`<p class="nf-sub ${e}">${t}</p>`;function rn(t,e,n,r={}){let o=r.lowest??10;return m`<label class="nf-field" title=${t.t(r.hint??"glow_scale_hint")}
    >${t.t(r.label??"glow_scale")}
    <input
      type="number"
      min=${o}
      max="150"
      step="5"
      .value=${String(Math.round((e??1)*100))}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(nn(i)),a=Math.min(150,Math.max(o,nn(i).trim()===""||Number.isNaN(s)?100:s))/100;n(Math.abs(a-1)<.001?null:a)}}
    />
  </label>`}function ed(t,e,n){let r=t.find(l=>l.person===e),o="sensor"in n?n.sensor&&n.sensor!=="none"?n.sensor:null:r?.sensor??null,i="room"in n?n.room||null:r?.room??null,s=t.filter(l=>l.person!==e);if(!o&&!i)return s;let a=i?{person:e,sensor:o,room:i}:{person:e,sensor:o};return r?t.map(l=>l.person===e?a:l):[...s,a]}function td(t,e){let n=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(n)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...t.filter(r),...t.filter(o=>!r(o))]}function nd(t){let e=t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:"";return`start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${e} }`}function rd(t){let e=t.trim();if(!e)return{ok:!0,value:null};try{let n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)?{ok:!0,value:n}:{ok:!1}}catch{return{ok:!1}}}function ii(t,e,n){let r=[...t],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+n)),0,o),r}var Ot=(t,e)=>t.filter((n,r)=>r!==e),Vr=(t,e,n)=>t.map((r,o)=>o===e?{...r,...n}:r),dt=t=>t.length>0?t:void 0;var yb=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],wb=40,vb=20,kb=30,xb=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],ia={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},Kr=(t,e,n,r=!1)=>m`<button class="nf-pin" title=${t} ?disabled=${r} @click=${n}>${e}</button>`;function $b(t){let e=t.doc.settings.favorites??[],n=a=>t.change(l=>l.settings.favorites=dt(a)),r=t.doc.floors,o=t.doc.settings.favorite_floors??{},i=H(t.hass,a=>yb.includes(a.split(".")[0])&&!e.includes(a)),s=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${W(t.hass,a)}</span></span>
    ${r.length>1?m`<select title=${t.t("favorite_floor")} .value=${o[a]??""} @change=${c=>{let u=c.target.value,d={...o};u?d[a]=u:delete d[a],t.change(f=>f.settings.favorite_floors=Object.keys(d).length?d:void 0)}}>
          <option value="">${t.t("favorite_all_floors")}</option>
          ${r.map(c=>m`<option value=${c.id} ?selected=${o[a]===c.id}>${c.name}</option>`)}
        </select>`:g}
    ${Kr(t.t("move_up"),"\u2191",()=>n(ii(e,l,-1)),l===0)}
    ${Kr(t.t("move_down"),"\u2193",()=>n(ii(e,l,1)),l===e.length-1)}
    ${Kr(t.t("delete"),"\u2715",()=>n(Ot(e,l)))}
  </div>`;return m`<summary>${t.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${M(t.t("favorites_hint"))} ${e.map(s)}
    ${e.length<wb?m`<div class="nf-form">${P(t,t.t("favorites_add"),null,void 0,i,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}`}function Sb(t,e){let n=t.doc.settings.outside_hidden??[],r=s=>t.change(a=>a.settings.outside_hidden=dt(s)),o=new Set(t.hass?fu(t.hass,t.doc.floors):[]),i=H(t.hass,s=>!n.includes(s)&&o.has(s));return m`${e?Mb(t,e):g}
    <h4>${t.t("outside_hidden")}${n.length>0?m` <span class="nf-lib-count">${n.length}</span>`:g}</h4>
    ${M(t.t("outside_hidden_hint"))}
    ${n.map((s,a)=>m`<div class="nf-row nf-dev-row"><span class="nf-dev-name"><span>${W(t.hass,s)}</span></span>${Kr(t.t("delete"),"\u2715",()=>r(Ot(n,a)))}</div>`)}
    <div class="nf-form">${P(t,t.t("outside_hidden_add"),null,void 0,i,s=>s&&s!=="none"&&!n.includes(s)&&r([...n,s]))}</div>`}function Mb(t,e){let n=t.doc.settings.outside_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.outside_view=o)};return m`${M(t.t("outside_view_hint"))}
    ${Y(m`<button class="nf-btn" @click=${r}>${t.t("outside_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.outside_view=null)}>${t.t("outside_view_reset")}</button>`:g)}`}function Rb(t){let e=t.doc.settings.own_alerts??[],n=c=>t.change(u=>u.settings.own_alerts=dt(c)),r=(c,u)=>n(Vr(e,c,u)),o=[["",t.t("own_alert_house")],...t.doc.floors.flatMap(c=>c.rooms.map(u=>[u.id,`${u.name} \xB7 ${c.name}`]))],i=(c,u)=>m`<div class="nf-form nf-own-button">
    ${P(t,t.t("own_alert_entity"),c.entity||null,void 0,H(t.hass,()=>!0),d=>r(u,{entity:d&&d!=="none"?d:""}))}
    ${j(t,t.t("own_alert_state"),c.state??"",d=>r(u,{state:d||null}),{placeholder:t.hass?.states[c.entity]?.state??"on \xB7 <20 \xB7 >80"})}
    ${j(t,t.t("own_alert_text"),c.text,d=>r(u,{text:d||t.t("own_alert_new")}),{wide:!0,maxlength:120})}
    ${O(t,t.t("room"),c.room_id??"",o,d=>r(u,{room_id:d||null}),{wide:!0})}
    ${Ie(t,t.t("own_alert_color"),c.color??null,"#ffb547",d=>r(u,{color:d}))}
    ${O(t,t.t("own_alert_tap"),c.tap??"",[["",t.t("own_alert_tap_info")],["toggle",t.t("own_alert_tap_toggle")],["room",t.t("own_alert_tap_room")]],d=>r(u,{tap:d||null}))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ot(e,u))}>${t.t("delete")}</button></div>
  </div>`,s=t.doc.settings,a=[1,2,3,4,5,6,8,10,12].map(c=>[String(c),String(c)]),l=m`<div class="nf-form">
    ${O(t,t.t("alerts_max"),String(s.alerts_max??3),a,c=>t.change(u=>u.settings.alerts_max=Number(c)===3?void 0:Number(c)))}
    ${O(t,t.t("alerts_rows"),String(s.alerts_rows??1),[["1","1"],["2","2"]],c=>t.change(u=>u.settings.alerts_rows=c==="2"?2:void 0))}
    ${M(t.t("alerts_bar_hint"),"nf-wide")}
  </div>`;return m`<h4>⚠ ${t.t("own_alerts")}</h4>
    ${l} ${M(t.t("own_alerts_hint"))} ${e.map(i)}
    ${e.length<40?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("alert"),entity:"",state:null,text:t.t("own_alert_new")}])}>+ ${t.t("own_alert_add")}</button>`):g}`}function Eb(t){let e=t.doc.settings.circuits??[],n=a=>t.change(l=>l.settings.circuits=dt(a)),r=(a,l)=>n(Vr(e,a,l)),o=t.doc.floors.flatMap(a=>a.rooms.map(l=>({id:l.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${a.name}`:l.name}))),i=a=>o.find(l=>l.id===a)?.label??a,s=(a,l)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("circuit_name"),a.name,c=>r(l,{name:c||t.t("circuit_new")}),{wide:!0,maxlength:80})}
    <div class="nf-wide">${a.rooms.map(c=>m`<span class="nf-chip">${i(c)} <button class="nf-btn nf-field-btn" title=${t.t("delete")} @click=${()=>r(l,{rooms:a.rooms.filter(u=>u!==c)})}>✕</button></span>`)}</div>
    ${O(t,t.t("circuit_add_room"),"",[["","\u2013"],...o.filter(c=>!a.rooms.includes(c.id)).map(c=>[c.id,c.label])],c=>c&&r(l,{rooms:[...a.rooms,c]}),{wide:!0})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ot(e,l))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>🔌 ${t.t("circuits")}</h4>
    ${M(t.t("circuits_hint"))} ${e.map(s)}
    ${e.length<120?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("circuit"),name:t.t("circuit_new"),rooms:[]}])}>+ ${t.t("circuit_add")}</button>`):g}`}function Ab(t){let e=t.doc.settings.calendars??[],n=a=>t.change(l=>l.settings.calendars=dt(a)),r=H(t.hass,a=>a.startsWith("calendar.")&&!e.includes(a)),o=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${W(t.hass,a)}</span></span>
    ${Kr(t.t("delete"),"\u2715",()=>n(Ot(e,l)))}
  </div>`,i=t.t,s=t.doc.settings.today_days??1;return m`<h4>📅 ${i("today_calendars")}</h4>
    ${M(i("today_calendars_hint"))} ${e.map(o)}
    ${e.length<12?m`<div class="nf-form">${P(t,i("favorites_add"),null,void 0,r,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}
    ${e.length?m`<div class="nf-form">
          ${O(t,i("today_days"),String(s),[1,2,3,5,7].map(a=>[String(a),i(a===1?"today_days_one":"today_days_n",{n:a})]),a=>t.change(l=>l.settings.today_days=Number(a)>1?Number(a):void 0))}
        </div>`:g}
    ${Fb(t)}`}function Fb(t){let e=t.t,n=t.doc.settings.forecast??null,r=o=>t.change(i=>i.settings.forecast=o??void 0);return m`<h4>🌦 ${e("forecast")}</h4>
    ${M(e("forecast_hint"))}
    <div class="nf-form">
      ${O(t,e("forecast_days"),n?String(n.days):"0",[0,3,5,7].map(o=>[String(o),o?e("today_days_n",{n:o}):e("forecast_off")]),o=>r(Number(o)>0?{days:Number(o),corner:n?.corner??"top_right"}:null))}
      ${n?O(t,e("forecast_corner"),n.corner,[["top_right",e("clock_top_right")],["top_left",e("clock_top_left")]],o=>r({...n,corner:o==="top_left"?"top_left":"top_right"})):g}
    </div>`}function Tb(t){let e=t.doc.settings.media_presets??[],n=s=>t.change(a=>a.settings.media_presets=dt(s)),r=(s,a)=>n(Vr(e,s,a)),o=[...new Set(t.doc.floors.flatMap(s=>[...s.placements.map(a=>a.entity_id),...s.furniture.map(a=>a.entity??"")]).filter(s=>s.startsWith("media_player.")))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||"Radio"}),{maxlength:60})}
    ${j(t,t.t("preset_type"),s.type,l=>r(a,{type:l||"music"}),{title:t.t("preset_type_hint")})}
    ${j(t,t.t("preset_content"),s.content,l=>r(a,{content:l}),{wide:!0,title:t.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    ${o.length>1?m`<div class="nf-sub nf-wide">${t.t("preset_speakers")}</div>
          ${o.map(l=>L(t,W(t.hass,l),!!s.speakers?.includes(l),c=>r(a,{speakers:dt(c?[...s.speakers??[],l]:(s.speakers??[]).filter(u=>u!==l))}),{wide:!1}))}`:g}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ot(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>${t.t("presets")}</h4>
    ${M(t.t("presets_hint"))}
    <datalist id="nf-preset-types">${xb.map(s=>m`<option value=${s}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<kb?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("preset"),label:"Radio",type:"music",content:""}])}>+ ${t.t("preset_add")}</button>`):g}`}function sa(t,e,n){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let a=rd(s.value);if(a.ok)return n(a.value);s.setCustomValidity(t.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${t.t("own_data_hint")}
    >${t.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function zb(t){let e=t.doc.settings.buttons??[],n=s=>t.change(a=>a.settings.buttons=dt(s)),r=(s,a)=>n(Vr(e,s,a)),o=Ao.map(s=>[s,t.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||t.t("own_button_new")}),{maxlength:60})}
    ${O(t,t.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${It(t,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?j(t,t.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:ia[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?sa(t,s,l=>r(a,{data:l})):g}
    ${P(t,t.t("own_button_state"),s.state_entity??null,void 0,H(t.hass,l=>/^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(l)),l=>r(a,{state_entity:l&&l!=="none"?l:null}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>n(ii(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(Ot(e,a))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("own_buttons")}</h4>
    ${M(t.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<vb?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("btn"),label:t.t("own_button_new"),action:"navigate",target:null}])}>+ ${t.t("own_button_add")}</button>`):g}`}function Pb(t){let e=t.doc.settings.room_facts_off??[],n=["sun","comfort","air","circuits"].map(r=>L(t,t.t(`room_fact_${r}`),!e.includes(r),o=>t.change(i=>i.settings.room_facts_off=dt(o?e.filter(s=>s!==r):[...e,r]))));return m`<h4>${t.t("room_facts")}</h4><div class="nf-form">${n}</div>`}function od(t){return m`<details class="nf-section">${$b(t)} ${zb(t)} ${Rb(t)} ${Eb(t)} ${Ab(t)} ${Tb(t)} ${Pb(t)}</details>`}function id(t,e){return m`<details class="nf-section">
    <summary>🌳 ${t.t("outside_area")}</summary>
    ${Sb(t,e)}
  </details>`}function sd(t,e){let n=t.doc.settings.start_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${t.t("start_view")}</summary>
    ${M(t.t("start_view_hint"))}
    ${Y(m`<button class="nf-btn nf-primary" @click=${r}>${t.t("start_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.start_view=null)}>${t.t("start_view_reset")}</button>`:g)}
    ${n?m`${M(t.t("start_view_saved"))} ${M(t.t("start_view_card"))}<code class="nf-code">${nd(n)}</code>`:g}
  </details>`}function ad(t){let e=t.doc.presence.map(l=>l.person),n=[...new Set([...Object.keys(t.hass?.states??{}).filter(l=>l.startsWith("person.")).sort(),...e])],r=H(t.hass,he),o=t.doc.floors.flatMap(l=>l.rooms.map(c=>({id:c.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${c.name}`:c.name}))),i=(l,c)=>t.replace({...structuredClone(t.doc),presence:ed(t.doc.presence,l,c)}),s=l=>{let c=t.doc.presence.find(d=>d.person===l),u=!l.startsWith("person.");return m`${P(t,`${W(t.hass,l)} \xB7 ${t.t("presence_sensor")}`,c?.sensor??null,void 0,td(r,l),d=>i(l,{sensor:d}))}
      <label class="nf-field">${t.t("presence_room")}
        <select ?disabled=${!t.admin} .value=${c?.room??""} @change=${d=>i(l,{room:d.target.value||null})}>
          <option value="">${t.t("presence_room_none")}</option>
          ${o.map(d=>m`<option value=${d.id} ?selected=${c?.room===d.id}>${d.label}</option>`)}
        </select>
      </label>
      ${u?m`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>t.replace({...structuredClone(t.doc),presence:t.doc.presence.filter(d=>d.person!==l)})}>${t.t("delete")}</button>`:g}`},a=H(t.hass,l=>/^(input_boolean|binary_sensor|device_tracker)\./.test(l)&&!n.includes(l));return m`<details class="nf-section">
    <summary>${t.t("presence")}</summary>
    <div class="nf-form">${n.length>0?n.map(s):m`<p class="nf-sub nf-wide">${t.t("no_persons")}</p>`}</div>
    <div class="nf-form">${P(t,t.t("presence_add"),null,void 0,a,l=>l&&l!=="none"&&t.replace({...structuredClone(t.doc),presence:[...t.doc.presence,{person:l,sensor:null}]}))}</div>
    ${M(t.t("presence_hint"))}
  </details>`}function ld(t,e){return m`<details class="nf-section">
    <summary>${t.t("ble")}</summary>
    ${M(t.t("ble_hint"))}
    <nf-ble-locate .host=${t} .doc=${e}></nf-ble-locate>
  </details>`}var{I:mS}=jl;var cd=t=>t.strings===void 0;var Gr=(t,e)=>{let n=t._$AN;if(n===void 0)return!1;for(let r of n)r._$AO?.(e,!1),Gr(r,e);return!0},si=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},ud=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Ob(e)}};function Db(t){this._$AN!==void 0?(si(this),this._$AM=t,ud(this)):this._$AM=t}function Ib(t,e=!1,n=0){let r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)Gr(r[i],!1),si(r[i]);else r!=null&&(Gr(r,!1),si(r));else Gr(this,t)}var Ob=t=>{t.type==oi.CHILD&&(t._$AP??=Ib,t._$AQ??=Db)},ai=class extends Dn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),ud(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Gr(this,e),si(this))}setValue(e){if(cd(this._$Ct))this._$Ct._$AI(e,this);else{let n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};var aa=new WeakMap,dd=Br(class extends ai{render(t){return g}update(t,[e]){let n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),g}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,n=aa.get(e);n===void 0&&(n=new WeakMap,aa.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?aa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var hd=t=>t.trim().toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40);function fd(t){let e=t.t,n=t.doc.settings.card_templates??{},r=Object.keys(n),o=a=>t.change(l=>{l.settings.card_templates=Object.keys(a).length?a:void 0});t.loadCardEditor?.();let i=a=>{t.hass?.callService("nextfloor","reload_screens",a?{template:a}:{})},s=a=>{let l=hd(a.value);!l||l in n||r.length>=20||(a.value="",o({...n,[l]:{}}))};return m`<details class="nf-section">
    <summary>${e("card_templates")}${r.length?m` <span class="nf-lib-count">${r.length}</span>`:g}</summary>
    ${M(e("card_templates_hint"))}
    ${r.map(a=>m`<details class="nf-section">
        <summary>${a}</summary>
        <nextfloor-card-editor
          .hass=${t.hass}
          ${dd(l=>l&&l.setConfig({type:"custom:nextfloor-card",...n[a]}))}
          @config-changed=${l=>{l.stopPropagation();let{type:c,template:u,...d}=l.detail.config;o({...n,[a]:d})}}
        ></nextfloor-card-editor>
        ${t.admin?m`<div class="nf-actions">
              <button class="nf-btn" @click=${()=>i(a)}>${e("template_reload")}</button>
              <button class="nf-btn nf-danger" @click=${()=>o(Object.fromEntries(Object.entries(n).filter(([l])=>l!==a)))}>${e("delete")}</button>
            </div>`:g}
        ${M(e("template_use",{name:a}))}
      </details>`)}
    ${t.admin?m`<div class="nf-form">
            <label class="nf-field nf-wide">${e("template_name")}<input type="text" maxlength="40" placeholder="kitchen_tablet" @keydown=${a=>a.key==="Enter"&&s(a.target)} /></label>
          </div>
          <div class="nf-actions">
            <button class="nf-btn" @click=${a=>s(a.target.closest("details")?.querySelector("input[type=text]")??document.createElement("input"))}>${e("template_add")}</button>
            <button class="nf-btn" @click=${()=>i()}>${e("template_reload_all")}</button>
          </div>`:g}
  </details>`}var li=.05,Lb=(t,e)=>t.length===e.length&&t.every((n,r)=>Math.abs(n[0]-e[r][0])<.001&&Math.abs(n[1]-e[r][1])<.001),on=t=>new Map(t.map(e=>[e.id,e]));function Hb(t,e,n,r){let o=e.name,[i,s]=[on(t.rooms),on(e.rooms)];for(let h of e.rooms){let p=i.get(h.id);p?(p.name!==h.name&&n.push({kind:"room_renamed",floor:o,name:h.name,detail:p.name}),Lb(p.points,h.points)||n.push({kind:"room_reshaped",floor:o,name:h.name,detail:Math.round((ve(h.points)-ve(p.points))*10)/10})):n.push({kind:"room_added",floor:o,name:h.name})}for(let h of t.rooms)s.has(h.id)||n.push({kind:"room_removed",floor:o,name:h.name});let[a,l]=[on(t.openings),on(e.openings)];for(let h of e.openings)a.has(h.id)||n.push({kind:"opening_added",floor:o,name:h.type,detail:r(h.room_id)});for(let h of t.openings)l.has(h.id)||n.push({kind:"opening_removed",floor:o,name:h.type,detail:r(h.room_id)});let[c,u]=[on(t.furniture),on(e.furniture)];for(let h of e.furniture){let p=c.get(h.id);p?(Math.hypot(h.x-p.x,h.z-p.z)>li||Math.abs(h.rotation-p.rotation)>1||Math.abs(h.w-p.w)>li||Math.abs(h.d-p.d)>li)&&n.push({kind:"furniture_moved",floor:o,name:h.name||h.type}):n.push({kind:"furniture_added",floor:o,name:h.name||h.type})}for(let h of t.furniture)u.has(h.id)||n.push({kind:"furniture_removed",floor:o,name:h.name||h.type});let[d,f]=[new Map(t.placements.map(h=>[h.entity_id,h])),new Map(e.placements.map(h=>[h.entity_id,h]))];for(let h of e.placements){let p=d.get(h.entity_id);p?Math.hypot(h.x-p.x,h.z-p.z)>li&&n.push({kind:"device_moved",floor:o,name:h.entity_id}):n.push({kind:"device_added",floor:o,name:h.entity_id})}for(let h of t.placements)f.has(h.entity_id)||n.push({kind:"device_removed",floor:o,name:h.entity_id})}function pd(t,e){let n=[],r=on(t.floors),o=new Map([...t.floors,...e.floors].flatMap(a=>a.rooms.map(l=>[l.id,l.name]))),i=a=>o.get(a)??"";for(let a of e.floors){let l=r.get(a.id);l?Hb(l,a,n,i):n.push({kind:"floor_added",floor:a.name,name:a.name})}let s=new Set(e.floors.map(a=>a.id));for(let a of t.floors)s.has(a.id)||n.push({kind:"floor_removed",floor:a.name,name:a.name});return n}var sn=(t,e)=>t.getUint16(e,!0),Ur=(t,e)=>t.getUint32(e,!0);function md(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=-1;for(let a=t.length-22;a>=Math.max(0,t.length-65557);a--)if(Ur(e,a)===101010256){n=a;break}if(n<0)throw new Error("not_zip");let r=sn(e,n+10),o=Ur(e,n+16),i=[],s=new TextDecoder;for(let a=0;a<r;a++){if(Ur(e,o)!==33639248)throw new Error("not_zip");let l=sn(e,o+10),c=Ur(e,o+20),u=sn(e,o+28),d=sn(e,o+30),f=sn(e,o+32),h=Ur(e,o+42),p=s.decode(t.subarray(o+46,o+46+u)),_=h+30+sn(e,h+26)+sn(e,h+28);i.push({name:p,method:l,compressedSize:c,offset:_}),o+=46+u+d+f}return i}async function gd(t,e){let n=t.subarray(e.offset,e.offset+e.compressedSize);if(e.method===0)return n;if(e.method!==8)throw new Error("zip_method");let r=new Blob([n.slice()]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(r).arrayBuffer())}var Cb={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},Nb=t=>t.replace(/&(#x?[0-9a-f]+|\w+);/gi,(e,n)=>n[0]==="#"?String.fromCodePoint(Number.parseInt(n.slice(n[1]==="x"?2:1),n[1]==="x"?16:10)):Cb[n]??e);function Bb(t){let e={};for(let n of t.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g))e[n[1]]=Nb(n[2]??n[3]);return e}function Wb(t){let e=[],n=null;for(let r of t.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)){let[,o,i,s,a]=r;if(o){i==="room"&&(n=null);continue}let l=Bb(s);if(i==="point"){n&&n.points.push([Number(l.x)/100,Number(l.y)/100]);continue}let c={name:i,attrs:l,...i==="room"?{points:[]}:{}};e.push(c),i==="room"&&!a&&(n=c)}return e}var ne=(t,e,n)=>Number.isFinite(Number(t[e]))&&t[e]!==void 0?Number(t[e]):n,Me=t=>Math.round(t*1e3)/1e3;function _d(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.max(0,Math.min(i,((t[0]-e[0])*r+(t[1]-e[1])*o)/i)),a=[e[0]+r*s/i,e[1]+o*s/i];return{dist:Math.hypot(t[0]-a[0],t[1]-a[1]),along:s,length:i}}function Vb(t){let e=`${t.name??""} ${t.catalogId??""}`.toLowerCase();return/garage|sectional|rolltor/.test(e)?"garage":/door|tür|tuer|porte|puerta|deur|haustür/.test(e)&&!/window|fenster/.test(e)?"door":"window"}function Kb(t,e){let n=t.length,r=t.map((o,i)=>{let s=t[(i+1)%n],[a,l]=[s[0]-o[0],s[1]-o[1]],c=Math.hypot(a,l)||1e-9,u=[a/c,l/c],d=[(o[0]+s[0])/2,(o[1]+s[1])/2],f=[0,0];for(let h of e){let[p,_]=[h.b[0]-h.a[0],h.b[1]-h.a[1]],y=Math.hypot(p,_)||1e-9;if(Math.abs((u[0]*_-u[1]*p)/y)>.05)continue;let b=(h.a[0]-d[0])*-u[1]+(h.a[1]-d[1])*u[0],v=((d[0]-h.a[0])*p+(d[1]-h.a[1])*_)/y;if(!(Math.abs(b)>h.thickness/2+.06||v<-.05||v>y+.05)){f=[-u[1]*b,u[0]*b];break}}return{p:[o[0]+f[0],o[1]+f[1]],dir:u}});return r.map((o,i)=>{let s=r[(i-1+n)%n],a=s.dir[0]*o.dir[1]-s.dir[1]*o.dir[0];if(Math.abs(a)<1e-6)return o.p;let l=((o.p[0]-s.p[0])*o.dir[1]-(o.p[1]-s.p[1])*o.dir[0])/a;return[s.p[0]+s.dir[0]*l,s.p[1]+s.dir[1]*l]})}function Gb(t){let e=Ft(),n={floors:0,rooms:0,openings:0,walls:0,furniture:0},r=t.filter(l=>l.name==="level"),o=r.length?r.map(l=>l.attrs.id??""):[""],i=t.filter(l=>l.name==="wall"),s=i.length?Math.max(...i.map(l=>ne(l.attrs,"height",250)))/100:2.5;return(r.length?[...r].sort((l,c)=>ne(l.attrs,"elevation",0)-ne(c.attrs,"elevation",0)||ne(l.attrs,"elevationIndex",0)-ne(c.attrs,"elevationIndex",0)):[{name:"level",attrs:{id:""}}]).forEach((l,c)=>{let u=l.attrs.id??"",d=y=>r.length?(y.attrs.level??o[0])===u:!0,f=He(I("floor"),l.attrs.name||(c===0?"Erdgeschoss":`Etage ${c+1}`),Me(ne(l.attrs,"elevation",0)/100));f.height=Me(ne(l.attrs,"height",s*100)/100);let h=i.filter(d).map(y=>({a:[ne(y.attrs,"xStart",0)/100,ne(y.attrs,"yStart",0)/100],b:[ne(y.attrs,"xEnd",0)/100,ne(y.attrs,"yEnd",0)/100],thickness:ne(y.attrs,"thickness",10)/100})),p=t.filter(y=>y.name==="room"&&d(y)&&(y.points?.length??0)>=3).map((y,b)=>({id:I("room"),name:y.attrs.name||`Raum ${b+1}`,area_id:null,points:Kb(y.points,h).map(([v,w])=>[Me(v),Me(w)]),floor_material:"wood",panel:[]}));f.rooms=p;for(let y of t.filter(b=>b.name==="doorOrWindow"&&d(b))){let b=[ne(y.attrs,"x",0)/100,ne(y.attrs,"y",0)/100],v=Math.max(.6,ne(y.attrs,"depth",30)/100+.3),w=null;for(let D of p)D.points.forEach((z,C)=>{let B=_d(b,z,D.points[(C+1)%D.points.length]);B.dist<=v&&(!w||B.dist<w.dist)&&(w={room:D,edge:C,...B})});if(!w)continue;let{room:x,edge:k,along:$,length:A}=w,F=Vb(y.attrs),T=Math.min(A,Math.max(.3,ne(y.attrs,"width",90)/100));f.openings.push({id:I("op"),room_id:x.id,edge:k,offset:Me(Math.min(A-T/2,Math.max(T/2,$))),width:Me(T),type:F,sill:F==="window"?Me(ne(y.attrs,"elevation",90)/100):0,height:Me(ne(y.attrs,"height",F==="window"?130:205)/100),hinge:"left",leaves:T>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null})}let _=[];for(let y of i.filter(d)){let b=[ne(y.attrs,"xStart",0)/100,ne(y.attrs,"yStart",0)/100],v=[ne(y.attrs,"xEnd",0)/100,ne(y.attrs,"yEnd",0)/100];if(Math.hypot(v[0]-b[0],v[1]-b[1])<.1)continue;let w=Math.max(.15,ne(y.attrs,"thickness",10)/100),x=T=>p.some(D=>D.points.some((z,C)=>_d(T,z,D.points[(C+1)%D.points.length]).dist<w)),k=Math.hypot(v[0]-b[0],v[1]-b[1]),$=Math.max(12,Math.ceil(k/.1)),A=T=>[b[0]+(v[0]-b[0])*T/$,b[1]+(v[1]-b[1])*T/$],F=Array.from({length:$+1},(T,D)=>!x(A(D)));for(let T=0;T<=$;){if(!F[T]){T++;continue}let D=T;for(;D+1<=$&&F[D+1];)D++;let[z,C]=[A(Math.max(0,T-1)),A(Math.min($,D+1))];Math.hypot(C[0]-z[0],C[1]-z[1])>=.3&&_.push({id:I("wall"),a:[Me(z[0]),Me(z[1])],b:[Me(C[0]),Me(C[1])],thickness:Me(ne(y.attrs,"thickness",10)/100),height:y.attrs.height?Me(ne(y.attrs,"height",250)/100):null}),T=D+1}}f.walls=_,n.rooms+=p.length,n.openings+=f.openings.length,n.walls+=_.length,(p.length||_.length)&&e.floors.push(f)}),n.floors=e.floors.length,n.furniture=t.filter(l=>l.name==="pieceOfFurniture").length,{building:Te(e),report:n}}async function bd(t){let e=md(t).find(o=>o.name==="Home.xml");if(!e)throw new Error("sh3d_no_xml");let n=new TextDecoder().decode(await gd(t,e)),r=Gb(Wb(n));if(r.report.rooms===0&&r.report.walls===0)throw new Error("sh3d_empty");return r}function Ub(t){let e=t.split(/\r?\n/),n=[];for(let r=0;r+1<e.length;r+=2){let o=Number(e[r].trim());Number.isFinite(o)&&n.push([o,e[r+1].trim()])}return n}function jb(t){let e=t.findIndex(([r,o])=>r===9&&o==="$INSUNITS"),n=e>=0?Number(t[e+1]?.[1]):NaN;return{1:.0254,2:.3048,4:.001,5:.01,6:1}[n]??null}function Zb(t){let e=Ub(t),n=jb(e),r=e.findIndex(([s,a],l)=>s===2&&a==="ENTITIES"&&e[l-1]?.[1]==="SECTION"),o=[];if(r<0)return{shapes:o,unit:n};let i=r+1;for(;i<e.length&&!(e[i][0]===0&&e[i][1]==="ENDSEC");){let[s,a]=e[i];if(s!==0){i++;continue}let l=i+1;for(;l<e.length&&e[l][0]!==0;)l++;let c=e.slice(i+1,l);if(a==="LINE"){let u=f=>Number(c.find(([h])=>h===f)?.[1]??NaN),d=[[u(10),u(20)],[u(11),u(21)]];d.every(([f,h])=>Number.isFinite(f)&&Number.isFinite(h))&&o.push({points:d,closed:!1})}else if(a==="LWPOLYLINE"){let u=c.filter(([p])=>p===10).map(([,p])=>Number(p)),d=c.filter(([p])=>p===20).map(([,p])=>Number(p)),f=Number(c.find(([p])=>p===70)?.[1]??0),h=u.map((p,_)=>[p,d[_]]).filter(([p,_])=>Number.isFinite(p)&&Number.isFinite(_));h.length>=2&&o.push({points:h,closed:(f&1)===1})}i=l}return{shapes:o,unit:n}}var yd=t=>Math.round(t*1e3)/1e3;function wd(t){let{shapes:e,unit:n}=Zb(t);if(!e.length)throw new Error("dxf_empty");let r=e.flatMap(h=>h.points),o=Math.max(Math.max(...r.map(h=>h[0]))-Math.min(...r.map(h=>h[0])),Math.max(...r.map(h=>h[1]))-Math.min(...r.map(h=>h[1]))),i=n??(o>2e3?.001:o>200?.01:1),s=Math.min(...r.map(h=>h[0])),a=Math.max(...r.map(h=>h[1])),l=([h,p])=>[yd((h-s)*i),yd((a-p)*i)],c=He(I("floor"),"Erdgeschoss",0),u=[],d=[];for(let h of e){let p=h.points.map(l);if(h.closed&&p.length>=3)u.push({id:I("room"),name:`Raum ${u.length+1}`,area_id:null,points:p,floor_material:"wood",panel:[]});else for(let _=0;_+1<p.length;_++)Math.hypot(p[_+1][0]-p[_][0],p[_+1][1]-p[_][1])>.05&&d.push({id:I("wall"),a:p[_],b:p[_+1]})}c.rooms=u,c.walls=d;let f=Ft();return f.floors=[c],{building:Te(f),report:{floors:1,rooms:u.length,openings:0,walls:d.length,furniture:0}}}var Ze=t=>Math.round(t*100)/100;function qb(t,e){let n=t.category;return typeof n=="string"?n:n&&typeof n=="object"?Object.keys(n)[0]??e:e}function Yb(t,e){let n=t,r=n?.transform,o=n?.dimensions;if(!n||!Array.isArray(r)||r.length<16||!Array.isArray(o)||o.length<3)return null;let i=a=>Number(a),s=Math.hypot(i(r[0]),i(r[2]));return![...r.slice(0,16),...o.slice(0,3)].every(a=>Number.isFinite(i(a)))||s<1e-6?null:{centre:[i(r[12]),i(r[13]),i(r[14])],dir:[i(r[0])/s,i(r[2])/s],size:[i(o[0]),i(o[1]),i(o[2])],kind:qb(n,e)}}var Hn=(t,e,n)=>(Array.isArray(t[e])?t[e]:[]).map(r=>Yb(r,n)).filter(r=>!!r);function Xb(t){if(t.length<3)return null;let e=t.map(l=>{let c=l.size[0]/2;return[[l.centre[0]-l.dir[0]*c,l.centre[2]-l.dir[1]*c],[l.centre[0]+l.dir[0]*c,l.centre[2]+l.dir[1]*c]]}),n=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1]),r=.4,o=new Set([0]),i=[e[0][0]],s=[0],a=e[0][1];for(;o.size<t.length;){let l=null;for(let d=0;d<t.length;d++)if(!o.has(d))for(let f of[!1,!0]){let h=n(a,e[d][f?1:0]);h<=r&&(!l||h<l.d)&&(l={i:d,flip:f,d:h})}if(!l)break;let[c,u]=l.flip?[e[l.i][1],e[l.i][0]]:[e[l.i][0],e[l.i][1]];i.push([(a[0]+c[0])/2,(a[1]+c[1])/2]),s.push(l.i),o.add(l.i),a=u}return o.size<t.length||n(a,i[0])>r?null:(i[0]=[(a[0]+i[0][0])/2,(a[1]+i[0][1])/2],{points:i,edgeWall:s})}function vd(t){let e=[],n=[];for(let a of t){let l=a.size[0]/2;for(let c of[-1,1])e.push(a.centre[0]+c*a.dir[0]*l),n.push(a.centre[2]+c*a.dir[1]*l)}let[r,o,i,s]=[Math.min(...e),Math.max(...e),Math.min(...n),Math.max(...n)];return[[r,i],[o,i],[o,s],[r,s]]}function Qb(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.min(i,Math.max(0,((t[0]-e[0])*r+(t[1]-e[1])*o)/i));return{dist:Math.hypot(t[0]-(e[0]+r/i*s),t[1]-(e[1]+o/i*s)),along:s,length:i}}var Jb={sofa:"sofa",bed:"bed",table:"table",chair:"chair",bathtub:"bathtub",toilet:"wc",sink:"sink",refrigerator:"fridge",stove:"stove",oven:"stove",dishwasher:"dishwasher",washerDryer:"washer",storage:"tall_cabinet",television:"tv_board"};function kd(t){let e=t;return!e||typeof e!="object"||"floors"in e||"settings"in e?!1:(Array.isArray(e.rooms)?e.rooms:[e]).some(r=>r&&Array.isArray(r.walls)&&Hn(r,"walls","wall").length>0)}function xd(t){let e=t,r=(Array.isArray(e.rooms)?e.rooms:[e]).filter(y=>y&&typeof y=="object").map(y=>({walls:Hn(y,"walls","wall"),doors:[...Hn(y,"doors","door"),...Hn(y,"openings","opening")],windows:Hn(y,"windows","window"),objects:Hn(y,"objects","object")})).filter(y=>y.walls.length);if(!r.length)throw new Error("roomplan_empty");let o=r.flatMap(y=>y.walls),i=Math.min(...o.map(y=>y.centre[1]-y.size[1]/2)),s=r.map(y=>Xb(y.walls)),a=r.flatMap((y,b)=>s[b]?.points??vd(y.walls)),[l,c]=[Math.min(...a.map(y=>y[0]))-.5,Math.min(...a.map(y=>y[1]))-.5],u=([y,b])=>[Ze(y-l),Ze(b-c)],d=He(I("floor"),"Erdgeschoss",0);d.height=Ze(Math.max(2.2,Math.min(4,Math.max(...o.map(y=>y.size[1])))));let f=[],h=[];r.forEach((y,b)=>{let w=(s[b]?.points??vd(y.walls)).map(u),x={id:I("room"),name:`Raum ${b+1}`,area_id:null,points:w,floor_material:"wood",panel:[]};f.push(x);for(let k of[...y.doors.map($=>({v:$,window:!1})),...y.windows.map($=>({v:$,window:!0}))]){let $=[k.v.centre[0]-l,k.v.centre[2]-c],A=null;if(w.forEach((z,C)=>{let B=Qb($,z,w[(C+1)%w.length]);B.dist<=.6&&(!A||B.dist<A.dist)&&(A={edge:C,...B})}),!A)continue;let F=A,T=Math.min(F.length,Math.max(.3,k.v.size[0])),D=k.v.kind==="opening";d.openings.push({id:I("op"),room_id:x.id,edge:F.edge,offset:Ze(Math.min(F.length-T/2,Math.max(T/2,F.along))),width:Ze(T),type:k.window?"window":"door",sill:k.window?Ze(Math.max(0,k.v.centre[1]-k.v.size[1]/2-i)):0,height:Ze(k.v.size[1]),hinge:"left",leaves:T>1.4?2:1,swing:"in",...D?{style:"passage"}:{},cover:null,contact:null,contact2:null,tilt:null})}for(let k of y.objects){let $=Jb[k.kind];if(!$)continue;let[A,F,T]=[k.size[0],k.size[2],k.size[1]];A<.1||F<.1||h.push({id:I("f"),type:$,x:Ze(k.centre[0]-l),z:Ze(k.centre[2]-c),rotation:Math.round((Math.atan2(k.dir[1],k.dir[0])*180/Math.PI+360)%360),w:Ze(A),d:Ze(F),h:Ze(T),variant:null,entity:null,power:null})}}),d.rooms=f,d.furniture=h;let p=Ft();p.floors=[d];let _=r.reduce((y,b)=>y+b.objects.length,0)-h.length;return{building:Te(p),report:{floors:1,rooms:f.length,openings:d.openings.length,walls:0,furniture:_}}}var jr=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)&&"ref"in t;function ey(t){let e=0,n=()=>{for(;t[e]===" ";)e++;let o=t[e];if(o==="("){e++;let l=[];for(;e<t.length&&t[e]!==")";){for(l.push(n());t[e]===" ";)e++;t[e]===","&&e++}return e++,l}if(o==="'"){let l="";for(e++;e<t.length;)if(t[e]==="'"&&t[e+1]==="'")l+="'",e+=2;else if(t[e]==="'"){e++;break}else l+=t[e++];return ty(l)}if(o==="#"){let l=/^#(\d+)/.exec(t.slice(e));return e+=l[0].length,{ref:Number(l[1])}}if(o==="$"||o==="*")return e++,null;let i=/^[^,()]+/.exec(t.slice(e)),s=i?i[0].trim():"";if(e+=i?i[0].length:1,t[e]==="(")return n();let a=Number(s);return Number.isFinite(a)&&s!==""?a:s},r=[];for(;e<t.length;){for(r.push(n());t[e]===" ";)e++;if(t[e]===",")e++;else break}return r}function ty(t){return t.replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>String.fromCharCode(...(n.match(/.{4}/g)??[]).map(r=>parseInt(r,16)))).replace(/\\S\\(.)/g,(e,n)=>String.fromCharCode(n.charCodeAt(0)+128))}function ny(t){let e=new Map,n=t.slice(Math.max(0,t.indexOf("DATA;")));for(let r of n.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([\s\S]*?)\)\s*;(?=\s*(?:#|ENDSEC))/g))e.set(Number(r[1]),{type:r[2],args:ey(r[3])});return e}var $d={x:0,y:0,z:0,c:1,s:0},Sd=(t,e)=>({x:t.x+t.c*e.x-t.s*e.y,y:t.y+t.s*e.x+t.c*e.y,z:t.z+e.z,c:t.c*e.c-t.s*e.s,s:t.s*e.c+t.c*e.s});function Md(t){let e=ny(t);if(!e.size)throw new Error("ifc_empty");let n=k=>jr(k)?e.get(k.ref):void 0,r=k=>typeof k=="number"?k:NaN,o=k=>(n(k)?.args[0]??[]).map($=>r($)),i=[...e.values()].find(k=>k.type==="IFCSIUNIT"&&k.args[1]===".LENGTHUNIT."),s=i?{".MILLI.":.001,".CENTI.":.01,".DECI.":.1}[String(i.args[2])]??1:1,a=k=>{let $=n(k);if(!$)return $d;let[A=0,F=0,T=0]=o($.args[0]),D=n($.type==="IFCAXIS2PLACEMENT3D"?$.args[2]:$.args[1]),[z=1,C=0]=(D?.args[0]??[]).map(q=>r(q)),B=Math.hypot(z,C)||1;return{x:A||0,y:F||0,z:T||0,c:z/B,s:C/B}},l=(k,$=0)=>{let A=n(k);return!A||A.type!=="IFCLOCALPLACEMENT"||$>30?$d:Sd(l(A.args[0],$+1),a(A.args[1]))},c=k=>{for(let $ of n(k)?.args[2]??[])for(let A of n($)?.args[3]??[]){let F=n(A);if(F?.type!=="IFCEXTRUDEDAREASOLID")continue;let T=n(F.args[0]),D=Sd(a(F.args[1]),a(T?.args[2])),z=[];if(T?.type==="IFCRECTANGLEPROFILEDEF"){let[C,B]=[r(T.args[3])/2,r(T.args[4])/2];z=[[-C,-B],[C,-B],[C,B],[-C,B]]}else if(T?.type==="IFCARBITRARYCLOSEDPROFILEDEF"){let C=n(T.args[2]);C?.type==="IFCPOLYLINE"&&(z=(C.args[0]??[]).map(B=>o(B)))}if(z=z.filter(C=>Number.isFinite(C[0])&&Number.isFinite(C[1])),z.length>3&&Math.hypot(z[0][0]-z[z.length-1][0],z[0][1]-z[z.length-1][1])<1e-6&&z.pop(),z.length>=3)return z.map(([C,B])=>[D.x+D.c*C-D.s*B,D.y+D.s*C+D.c*B])}return null},u=new Map;for(let[,k]of e){if(k.type==="IFCRELAGGREGATES"&&jr(k.args[4]))for(let $ of k.args[5]??[])jr($)&&u.set($.ref,k.args[4].ref);if(k.type==="IFCRELCONTAINEDINSPATIALSTRUCTURE"&&jr(k.args[5]))for(let $ of k.args[4]??[])jr($)&&u.set($.ref,k.args[5].ref)}let d=[...e].filter(([,k])=>k.type==="IFCBUILDINGSTOREY").map(([k,$])=>({id:k,name:String($.args[7]||$.args[2]||"")||null,elevation:r($.args[9])*s}));d.sort((k,$)=>(k.elevation||0)-($.elevation||0));let f=[];for(let[k,$]of e){if($.type!=="IFCSPACE")continue;let A=c($.args[6]);if(!A)continue;let F=l($.args[5]),T=A.map(([z,C])=>[(F.x+F.c*z-F.s*C)*s,(F.y+F.s*z+F.c*C)*s]),D=String($.args[7]||$.args[2]||"")||`Raum ${f.length+1}`;f.push({storey:u.get(k)??null,name:D,ring:T})}if(!f.length)throw new Error("ifc_empty");let h=f.flatMap(k=>k.ring),p=Math.min(...h.map(k=>k[0])),_=Math.max(...h.map(k=>k[1])),y=k=>Math.round(k*1e3)/1e3,b=[],v=new Map;if(d.filter(k=>f.some($=>$.storey===k.id)).forEach((k,$)=>{let A=He(I("floor"),k.name??`Etage ${$+1}`,Number.isFinite(k.elevation)?y(k.elevation):$*2.8);b.push(A),v.set(k.id,A)}),f.some(k=>k.storey===null||!v.has(k.storey))){let k=He(I("floor"),b.length?"Weitere R\xE4ume":"Erdgeschoss",b.length?b[b.length-1].elevation+2.8:0);b.push(k),v.set(null,k)}b.forEach((k,$)=>{let A=b[$+1];A&&A.elevation-k.elevation>1.8&&(k.height=y(A.elevation-k.elevation-.2))});for(let k of f)v.get(k.storey!==null&&v.has(k.storey)?k.storey:null).rooms.push({id:I("room"),name:k.name,area_id:null,points:k.ring.map(([A,F])=>[y(A-p),y(_-F)]),floor_material:"wood",panel:[]});let x=Ft();return x.floors=b,{building:Te(x),report:{floors:b.length,rooms:f.length,openings:0,walls:0,furniture:0}}}var Ed="nextfloor",ry="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|conversation|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|stt|sun|switch|text|time|timer|todo|tts|update|vacuum|valve|water_heater|weather|zone",Rd=new RegExp(`^(?:${ry})\\.[a-z0-9_]+$`),oy=/^[0-9a-f]{32}$/,iy=new Set(["area_id","ha_floor"]),sy=new Set(["sub_areas"]),ay=new Set(["tap","show_when","pictures","moods"]);function la(t){if(typeof t=="string")return Rd.test(t)||oy.test(t)?null:t;if(Array.isArray(t))return t.map(e=>la(e)).filter(e=>e!==null);if(t&&typeof t=="object"){let e={};for(let[n,r]of Object.entries(t))Rd.test(n)||ay.has(n)||(iy.has(n)||sy.has(n)?e[n]=null:e[n]=la(r));return e}return t}var ly=["wall_exterior","wall_interior","wall_paint_outside","wall_paint_inside","grid","north","roof","weather_effects","rain_warning","sun_patches","lock_plan","start_view","units","motion_markers_active","room_double_tap"];function Ad(t){let e=structuredClone(t),n={};for(let o of ly)e.settings?.[o]!==void 0&&(n[o]=e.settings[o]);let r=e.settings?.backdrop;r&&(r.color||r.dim!=null)&&(n.backdrop={color:r.color??null,dim:r.dim??null}),e.settings=n,e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null,consumption:null,gas:null,water:null},e.presence=[];for(let o of e.floors){o.background=null,o.placements=[],o.power_entity=null,o.ha_floor=null;for(let i of o.rooms)Object.assign(i,{area_id:null,sub_areas:null,panel:[],hidden:[],no_state:[]});o.furniture.forEach(i=>{Object.assign(i,{entity:null,power:null}),delete i.effect_animations,i.picture&&!(i.picture.startsWith("image:")||i.picture.startsWith("https://"))&&(i.picture=null)}),o.openings.forEach(i=>Object.assign(i,{cover:null,contact:null,tilt:null}))}return la(e)}function Fd(t,e){return{format:Ed,version:1,exported_at:new Date().toISOString(),building:e?Ad(t):structuredClone(t)}}var cy=t=>!!t&&(t.version===1||t.version===void 0)&&Array.isArray(t.floors)&&t.floors.every(e=>!!e&&typeof e=="object"),uy="https://therealmrbk.github.io/NextFloor/preview/?shared&noshowcase";function Td(t,e,n,r,o=uy){let i=new Set(t.floors.flatMap(c=>c.furniture.map(u=>u.type)).filter(c=>c.startsWith("pack:")).map(c=>c.split(":")[1])),s={building:Ad(t),packs:e.filter(c=>!c.builtin&&i.has(c.id))},a=JSON.stringify(s).replace(/</g,"\\u003c"),l=c=>c.replace(/[&<>"]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[u]);return`<!doctype html>
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
`}function zd(t){let e;try{e=JSON.parse(t)}catch{throw new Error("not_json")}let n=e,r=n?.format===Ed?n.building:e;if(!cy(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),Te(r)}var dy=t=>!/^https?:\/\//.test(t)&&!t.startsWith("camera:");function Pd(t){let e=new Set;for(let n of t.floors){n.background?.image_id&&e.add(n.background.image_id);let r=n.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&dy(o)&&e.add(o)}return[...e]}function Dd(t,e,n="application/json"){let r=document.createElement("a"),o=URL.createObjectURL(new Blob([e],{type:n}));Object.assign(r,{href:o,download:t}),r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}var hy={api:{listHistory:ql,restoreSnapshot:Jl,takeSnapshot:Yl,getSnapshot:Xl,deleteSnapshot:Ql,fetchBackup:tc,restoreBackup:nc,fetchImage:$o,storeImage:St},alert:t=>alert(t),confirm:t=>confirm(t),prompt:t=>prompt(t),download:Dd,today:()=>new Date().toISOString().slice(0,10)},fy=t=>String(t?.message??t),ci=class{host;deps;history=null;busy=!1;compare=null;constructor(e,n=hy){this.host=e,this.deps=n}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:n,t:r}=this.host;!n||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(n,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}async saveVersion(){let{hass:e,t:n}=this.host,r=e?this.deps.prompt?.(n("version_name_prompt"))?.trim():null;!e||!r||(await this.deps.api.takeSnapshot(e,r.slice(0,60)),this.host.say(n("version_saved",{name:r})),await this.loadHistory())}async compareWith(e){let{hass:n}=this.host,r=this.deps.api.getSnapshot;if(!n||!r)return;if(this.compare?.snapshot.id===e.id)return this.compare=null,this.host.refresh();let o=Te(await r(n,e.id));this.compare={snapshot:e,entries:pd(o,this.host.doc)},this.host.refresh()}async deleteVersion(e){let{hass:n,t:r}=this.host,o=this.deps.api.deleteSnapshot;!n||!o||!this.deps.confirm(r("version_delete_confirm",{name:e.name??this.timeOf(e)}))||(await o(n,e.id),this.compare?.snapshot.id===e.id&&(this.compare=null),await this.loadHistory())}exportShareView(){let e=this.host.t,n=Td(this.host.doc,hr(),e("share_view_title"),e("share_view_needs_js"));this.deps.download(`nextfloor-${e("share_view_file")}-${this.deps.today()}.html`,n,"text/html"),this.host.say(e("share_view_done"))}exportPlan(e){let n=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${n}-${this.deps.today()}.json`,JSON.stringify(Fd(this.host.doc,e),null,2))}async importPlan(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o,i=r("backup_import_confirm");try{if(/\.sh3d$/i.test(e.name)){let s=await bd(new Uint8Array(await e.arrayBuffer()));o=s.building,i=`${r("import_sh3d_found",{...s.report})}

${i}`}else if(/\.ifc$/i.test(e.name)){let s=Md(await e.text());o=s.building,i=`${r("import_ifc_found",{floors:s.report.floors,rooms:s.report.rooms})}

${i}`}else if(/\.dxf$/i.test(e.name)){let s=wd(await e.text());o=s.building,i=`${r("import_dxf_found",{rooms:s.report.rooms,walls:s.report.walls})}

${i}`}else{let s=await e.text(),a=null;try{a=JSON.parse(s)}catch{}if(kd(a)){let l=xd(a);o=l.building,i=`${r("import_roomplan_found",{rooms:l.report.rooms,openings:l.report.openings,skipped:l.report.furniture})}

${i}`}else o=zd(s)}}catch(s){let a=s.message,l={not_json:"import_error_not_json",not_plan:"import_error_not_plan",not_zip:"import_error_sh3d",sh3d_no_xml:"import_error_sh3d",sh3d_empty:"import_error_sh3d_empty",dxf_empty:"import_error_dxf_empty",ifc_empty:"import_error_ifc_empty",roomplan_empty:"import_error_roomplan_empty"};this.deps.alert(l[a]?r(l[a]):r("backup_import_error",{error:a}));return}this.deps.confirm(i)&&(await this.deps.api.takeSnapshot(n).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t:n}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of Pd(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${n("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(n("backup_import_error",{error:fy(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(n,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(n,l,c).then(()=>s++,()=>{});this.host.adopt(Te(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};function qe(t,e){if(!gt(e))return $e(t,`furn_${e}`);let n=G(e);return n?Ye(n,e,t?.language??navigator.language):$e(t,"pack_missing_item")}function Ye(t,e,n){return t.name[n.split("-")[0]]??ti(n,e)??mc(t,n)}function Oe(t,e){return ti(e,`packname:${t.id}`)??gc(t,e)}function Id(t,e){return t.name[e.split("-")[0]]??ti(e,`color:${t.id}`)??t.name.en??Object.values(t.name)[0]}var Od=(t,e,n="application/json,.json")=>m`<label class="nf-btn nf-upload"
  >${t}<input
    type="file"
    accept=${n}
    @change=${r=>{let o=r.target,i=o.files?.[0];o.value="",e(i)}}
  />
</label>`,py={added:"\uFF0B",removed:"\u2212",renamed:"\u270E",reshaped:"\u2922",moved:"\u2194"};function my(t,e){let n=t.t;if(!e.length)return m`<p class="nf-sub nf-diff">${n("version_same")}</p>`;let r=i=>i.kind.startsWith("furniture")?qe(t.hass,i.name)||i.name:i.kind.startsWith("device")?String(t.hass?.states[i.name]?.attributes.friendly_name??i.name):i.kind.startsWith("opening")?n(i.name==="door"?"opening_door":i.name==="garage"?"opening_garage":"opening_window"):i.name,o=[...new Set(e.map(i=>i.floor))];return m`<div class="nf-diff">
    ${M(n("version_diff_n",{n:e.length}))}
    ${o.map(i=>m`<h4 class="nf-check-floor">${i}</h4>
        <ul class="nf-diff-list">
          ${e.filter(s=>s.floor===i).map(s=>{let a=s.kind.slice(s.kind.indexOf("_")+1),l=typeof s.detail=="number"?`${s.detail>0?"+":""}${U(t.hass,s.detail,1)}`:s.detail??"";return m`<li><span aria-hidden="true">${py[a]??"\u2022"}</span> ${n(`diff_${s.kind}`,{name:r(s),detail:l})}</li>`})}
        </ul>`)}
  </div>`}function Ld(t,e){let n=t.t,r=e.history,o=r===null?M(n("loading")):r.length===0?M(n("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                  <span>${i.name?m`<b>📌 ${i.name}</b> · `:g}${e.timeOf(i)} <span class="nf-muted">· ${n("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                  <span class="nf-version-actions">
                    <button class="nf-link" aria-pressed=${e.compare?.snapshot.id===i.id} @click=${()=>{e.compareWith(i)}}>${n("version_compare")}</button>
                    <button class="nf-link" @click=${()=>e.restorePoint(i)}>${n("backup_restore")}</button>
                    ${i.name?m`<button class="nf-link" title=${n("delete")} @click=${()=>{e.deleteVersion(i)}}>✕</button>`:g}
                  </span>
                </div>
                ${e.compare?.snapshot.id===i.id?my(t,e.compare.entries):g}`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${n("backup")}</summary>
    <h4 class="nf-lib-head">${n("backup_history")}</h4>
    ${Y(m`<button class="nf-btn" title=${n("version_save_hint")} @click=${()=>{e.saveVersion()}}>📌 ${n("version_save")}</button>`)}
    ${o}
    <h4 class="nf-lib-head">${n("backup_file")}</h4>
    ${Y(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${n("backup_export")}</button>`,m`<button class="nf-btn" title=${n("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${n("backup_export_share")}</button>`,m`<button class="nf-btn" title=${n("share_view_hint")} @click=${()=>e.exportShareView()}>🔗 ${n("share_view")}</button>`,Od(n("backup_import"),i=>{e.importPlan(i)},"application/json,.json,.sh3d,.dxf,.ifc"))}
    ${M(n("backup_hint"))} ${M(n("import_other_hint"))}
    <h4 class="nf-lib-head">${n("backup_full")}</h4>
    ${Y(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":n("backup_full_export")}</button>`,Od(n("backup_full_import"),i=>{e.importFull(i)}))}
    ${M(n("backup_full_hint"))}
  </details>`}function Hd(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var Cd=["body","wood","fabric","white","metal","dark"],Nd={body:"#172238",wood:"#19233c",fabric:"#1a2644",white:"#1d2946",metal:"#2a3a60",dark:"#0b111f"};var gy=["neon","blueprint","day","own"],Bd=["dark","light","lines","background"],Wd={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22"};var z2=["auto",...gy];var an=(t,e,n)=>Math.min(n,Math.max(e,t)),_y=t=>(Math.round(t)%360+360)%360,ca=(t,e)=>_y(t+e);function Vd(t,e,n){return n?[...new Set([...t,e])]:t.filter(r=>r!==e)}function Kd(t,e,n){let r=t.t,o=s=>()=>n(ca(e,s)),i=R`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${r("compass_title")}>
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
      ${E(t,r("north"),e,s=>n(ca(s,0)),1)}
      <div class="nf-actions">
        <button class="nf-btn" ?disabled=${!t.admin} title=${r("compass_swap_hint")} @click=${o(180)}>⇅ ${r("compass_swap")}</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(-90)}>↺ 90°</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(90)}>↻ 90°</button>
      </div>
      <span class="nf-sub">${r("compass_hint")}</span>
    </div>
  </div>`}var by="https://tile.openstreetmap.org/{z}/{x}/{y}.png";var yy=40075016686e-3,ua=Math.PI/180,Zr=18,qr=.5,wy=160;function vy(t,e,n){let r=2**n,o=(e+180)/360*r,i=(1-Math.log(Math.tan(t*ua)+1/Math.cos(t*ua))/Math.PI)/2*r;return[o,i]}var ky=(t,e)=>yy*Math.cos(t*ua)/2**e;function Gd(t,e,n,r=wy){let[o,i]=vy(t,e,n),s=ky(t,n),a=r/s,l=2**n-1,c=[];for(let u=Math.floor(i-a);u<=Math.floor(i+a);u++)for(let d=Math.floor(o-a);d<=Math.floor(o+a);d++){if(u<0||u>l)continue;let f=(d%(l+1)+l+1)%(l+1);c.push({x:f,y:u,z:n,east:(d-o)*s,north:-(u-i)*s,size:s})}return c}function Ud(t,e){return t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)).replace("{s}","abc"[(e.x+e.y)%3])}var jd=t=>t.url&&t.url.startsWith("https://")?t.url:by;var ui=t=>!!t&&t.on===!0&&Number.isFinite(t.lat)&&Number.isFinite(t.lon),Zd=t=>({x:t.x??0,z:t.z??0,opacity:t.opacity??qr,zoom:t.zoom??Zr});function xy(t){let e=[],n=[];for(let o of t.floors){for(let i of o.rooms)for(let[s,a]of i.points)e.push(s),n.push(a);for(let i of o.outdoor??[])for(let[s,a]of i.points)e.push(s),n.push(a)}if(!e.length)return[0,0];let r=o=>Math.round((Math.min(...o)+Math.max(...o))/2*100)/100;return[r(e),r(n)]}function qd(t,e){let[n,r]=xy(t);return{on:!0,lat:e?.lat??0,lon:e?.lon??0,x:n,z:r,opacity:qr,zoom:Zr,url:null}}function Yd(t,e,n){let r=o=>Math.round(o*100)/100;return{...t,x:r((t.x??0)+e),z:r((t.z??0)+n)}}function Xd(t){let e=t.trim();return e===""?null:/^https:\/\/\S+$/.test(e)&&["{z}","{x}","{y}"].every(n=>e.includes(n))?e:void 0}var $y=["15","16","17","18","19"],Sy=["1","5","20"],di="5";function Qd(t,e,n){let r=t.t,o=e.settings.map??null,i=t.hass?.config,s=ui(o),a=u=>{if(!u)return n(o?{...o,on:!1}:null);n(o?{...o,on:!0}:qd(e,{lat:i?.latitude,lon:i?.longitude}))},l=u=>o&&n({...o,...u}),c=(u,d)=>()=>o&&n(Yd(o,u*Number(di),d*Number(di)));return m`<div class="nf-map-settings nf-wide">
    ${L(t,r("map_on"),s,a,{title:r("map_hint")})}
    ${o&&o.on?m`<div class="nf-form">
          ${E(t,r("map_lat"),o.lat,u=>l({lat:Math.max(-85,Math.min(85,u))}),1e-4)}
          ${E(t,r("map_lon"),o.lon,u=>l({lon:Math.max(-180,Math.min(180,u))}),1e-4)}
          ${i?.latitude!==void 0&&i.longitude!==void 0?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>l({lat:i.latitude,lon:i.longitude})}>${r("map_use_ha")}</button>`:g}
          ${E(t,r("map_opacity"),Math.round((o.opacity??qr)*100),u=>l({opacity:Math.max(5,Math.min(100,u))/100}),5,5)}
          ${O(t,r("map_zoom"),String(o.zoom??Zr),$y.map(u=>[u,u==="15"?`${u} \xB7 ${r("map_zoom_coarse")}`:u==="19"?`${u} \xB7 ${r("map_zoom_fine")}`:u]),u=>l({zoom:Number(u)}))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${r("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,-1)}>▲</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(-1,0)}>◀</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(1,0)}>▶</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,1)}>▼</button>
            </div>
            ${O(t,r("map_step"),di,Sy.map(u=>[u,`${u} m`]),u=>di=u,{wide:!1})}
          </div>
          ${j(t,r("map_url"),o.url??"",u=>{let d=Xd(u);d!==void 0&&l({url:d})},{wide:!0,placeholder:"https://\u2026/{z}/{x}/{y}.png",maxlength:300})}
          ${M(r("map_hint"),"nf-wide")}
        </div>`:g}
  </div>`}var My=["none","flat","gable","custom"];function Ry(t,e,n){let r=t.t,o=!!e,i=s=>n({color:null,image:null,dim:.35,...e??{},...s});return m`<div class="nf-sub nf-wide">${r("backdrop")}</div>
    ${L(t,r("backdrop"),o,s=>n(s?{color:"#101828",image:null,dim:.35}:null))}
    ${o?m`<label class="nf-field"
            >${r("backdrop_color")}
            <input type="color" .value=${e?.color??"#101828"} ?disabled=${!t.admin} @change=${s=>i({color:s.target.value})}
          /></label>
          ${E(t,r("backdrop_dim"),Math.round((e?.dim??.35)*100),s=>i({dim:an(s,0,80)/100}),5,0)}
          ${j(t,r("backdrop_image"),e?.image??"",s=>i({image:s||null}),{wide:!0,placeholder:"/local/hintergrund.jpg"})}
          ${M(r("backdrop_hint"),"nf-wide")}`:g}`}function Ey(t,e,n,r){let o=t.t,i=(a,l=n)=>Object.fromEntries(Object.entries(l).filter(([c,u])=>a.includes(c)&&u)),s=H(t.hass,a=>!e.includes(a)&&/^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(a));return m`<div class="nf-sub nf-wide">${o("status_entities")}</div>
    ${e.length?e.map(a=>m`${j(t,`${o("status_name")} \xB7 ${W(t.hass,a)}`,n[a]??"",l=>r(e,i(e,{...n,[a]:l.slice(0,60)})),{placeholder:W(t.hass,a),maxlength:60})}
            ${t.admin?m`<div class="nf-actions" style="align-self:end"><button class="nf-btn nf-field-btn" title=${o("delete")} aria-label=${`${o("delete")}: ${W(t.hass,a)}`} @click=${()=>r(e.filter(l=>l!==a),i(e.filter(l=>l!==a)))}>×</button></div>`:g}`):g}
    ${e.length<12?P(t,o("status_add"),null,void 0,s,a=>a&&a!=="none"&&r([...e,a],n)):g}
    ${M(o("status_entities_hint"),"nf-wide")}`}function Jd(t,e){let n=t.t,r=t.doc.settings,o=c=>t.replace({...structuredClone(t.doc),settings:{...structuredClone(t.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=My.map(c=>[c,n(`roof_${c}`)]),a=r.weather_effects??Ec,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${n("settings")}</summary>
    <div class="nf-form">
      ${E(t,n("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:an(c,.02,1)}),.01,.02)}
      ${E(t,n("wall_interior"),r.wall_interior,c=>o({wall_interior:an(c,.02,1)}),.01,.02)}
      ${Ie(t,n("wall_paint_outside"),r.wall_paint_outside,To,c=>o({wall_paint_outside:c}))}
      ${Ie(t,n("wall_paint_inside"),r.wall_paint_inside,zo,c=>o({wall_paint_inside:c}))}
      ${M(n("wall_paint_hint"),"nf-wide")}
      ${Cd.map(c=>Ie(t,n(`furn_color_${c}`),r.furniture_colors?.[c],Nd[c],u=>{let d={...r.furniture_colors,[c]:u};u||delete d[c],o({furniture_colors:Object.keys(d).length?d:null})}))}
      ${M(n("furn_color_hint"),"nf-wide")}
      ${Bd.map(c=>Ie(t,n(`own_look_${c}`),r.own_look?.[c],Wd[c],u=>{let d={...r.own_look,[c]:u??void 0};u||delete d[c],o({own_look:Object.keys(d).length?d:null})}))}
      ${M(n("own_look_hint"),"nf-wide")}
      ${E(t,n("grid"),r.grid,c=>o({grid:an(c,.01,1)}),.01,.01)}
      ${O(t,n("units"),r.units==="imperial"?"imperial":"metric",[["metric",n("units_metric")],["imperial",n("units_imperial")]],c=>o({units:c==="imperial"?"imperial":null}),{title:n("units_hint")})}
      ${Kd(t,r.north,c=>o({north:c}))}
      ${Qd(t,t.doc,c=>o({map:c}))}
      ${O(t,n("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?O(t,n("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",n("roof_ridge_long")],["short",n("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?E(t,n("roof_pitch"),r.roof.pitch,c=>i({pitch:an(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?E(t,n("roof_overhang"),r.roof.overhang,c=>i({overhang:an(c,0,2)}),.05,0):g}
      ${t.hass?P(t,n("weather_entity"),r.weather_entity??null,Hd(t.hass,null),H(t.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${n("weather_effects")}</div>
      ${Rc.map(c=>L(t,n(`weather_effect_${c}`),a.includes(c),u=>o({weather_effects:Vd(a,c,u)}),{wide:!1}))}
      ${L(t,n("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${t.hass&&r.rain_warning!==!1?P(t,n("rain_sensor"),r.rain_sensor??null,void 0,H(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({rain_sensor:c==="none"?null:c})):g}
      ${t.hass&&r.rain_warning!==!1&&r.rain_sensor&&r.rain_sensor!=="none"?L(t,n("rain_sensor_inverted"),!!r.rain_sensor_inverted,c=>o({rain_sensor_inverted:c||void 0}),{title:n("rain_sensor_inverted_hint")}):g}
      ${t.hass?P(t,n("outage_sensor"),r.outage_sensor??null,void 0,H(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({outage_sensor:c==="none"?null:c})):g}
      ${M(n("outage_hint"),"nf-wide")}
      ${L(t,n("contact_warning"),!!r.contact_warning,c=>o({contact_warning:c||void 0}),{title:n("contact_warning_hint")})}
      ${L(t,n("night_lock_warning"),!!r.night_lock_warning,c=>o({night_lock_warning:c||void 0}),{title:n("night_lock_warning_hint")})}
      ${O(t,n("room_double_tap"),r.room_double_tap??"area",[["area",n("room_double_tap_area")],["plan",n("room_double_tap_plan")],["off",n("room_double_tap_off")]],c=>o({room_double_tap:c==="plan"||c==="off"?c:null}),{title:n("room_double_tap_hint")})}
      ${L(t,n("motion_markers_active"),!!r.motion_markers_active,c=>o({motion_markers_active:c||void 0}),{title:n("motion_markers_active_hint")})}
      ${t.hass?Ey(t,r.status_entities??[],r.status_names??{},(c,u)=>o({status_entities:c.length?c:null,status_names:Object.keys(u).length?u:null})):g}
      ${t.hass?P(t,n("announce_tts"),r.announce_tts??null,void 0,H(t.hass,c=>c.startsWith("tts.")),c=>o({announce_tts:c==="none"?null:c})):g}
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
      ${M(n("announce_phrases_hint"),"nf-wide")}
      ${L(t,n("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:n("sun_patches_hint")})}
      ${L(t,n("sun_arc"),r.sun_arc===!0,c=>o({sun_arc:c}),{title:n("sun_arc_hint")})}
      ${Ry(t,r.backdrop??null,c=>o({backdrop:c}))}
    </div>
    ${M(`${n("north_hint")} ${n("weather_entity_hint")}`)}
  </details>`}var Yr=t=>t&&t!=="none"?t:null,Xr=(t,e)=>{e&&!t.includes(e)&&t.push(e)},da=t=>new Map(t.floors.flatMap(e=>e.furniture.filter(n=>n.type==="meter").map(n=>[n.id,n])));function ln(t,e){if(!t.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let n=da(t),r=new Set([e.id]);for(let o=n.get(e.parent_meter);o;o=n.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return n.has(e.parent_meter)?e.parent_meter:null}function Cn(t){return new Set([...da(t).values()].filter(e=>ln(t,e)).map(e=>e.id))}function Qr(t,e){return!t.energy.advanced||!e.parent_meter?null:Cn(t).has(e.parent_meter)?e.parent_meter:null}function eh(t,e,n){if(n.type!=="meter"||n.id===e.id)return!1;let r=da(t),o=new Set;for(let i=n;i&&!o.has(i.id);i=r.get(i.parent_meter??"")){if(i.id===e.id)return!1;o.add(i.id)}return!0}function fi(t,e=n=>Yr(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of t.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?ln(t,r):null;if(i)(n.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")n.grid??=o,n.gridExport??=Yr(r.export);else if(r.type==="inverter")Xr(n.solar,o);else if(r.type==="home_battery"){let s=Yr(r.charge);Xr(n.battery,o),Xr(n.charge,s),Xr(n.soc,Yr(r.soc)),(o||s)&&n.batteries.push({power:o,charge:s})}}for(let r of n.subMeters?t.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?n.subMeters?.find(a=>a.id===Qr(t,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&Xr(o.solar,i);let s=Yr(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return n}function Ay(t){for(let e of t.floors){let n=e.furniture.find(r=>r.type==="meter"&&!ln(t,r));if(n)return{floor_id:e.id,x:n.x,z:n.z}}return t.energy.meter}var Fy=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,Ty=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function hi(t,e,n="power"){let r=e?t.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(t.states).filter(a=>a.startsWith("sensor.")&&t.entities?.[a]?.device_id===r&&t.states[a]?.attributes.device_class===n);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!Fy.test(a)),s=e.replace(/^sensor\./,"").replace(Ty,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function th(t,e){let n={},r=(o,i)=>{i&&!n[o]&&(n[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",hi(t,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",hi(t,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",hi(t,i)),r("battery_soc",hi(t,i,"battery"))}return n}function Re(t,e=!1){let n=t?Number(t.state):NaN;if(!Number.isFinite(n))return null;let r={kW:1e3,MW:1e6}[String(t.attributes.unit_of_measurement??"W")]??1;return e?-n*r:n*r}var zy=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power";function nh(t,e){if(zy(t,e))return e;let n=t.entities?.[e]?.device_id;if(!n)return null;let r=ks(t,n),o=r?Tt(t,e):null,i=Vo(t,n).filter(s=>s!==e);return(r?i.find(s=>o!==null&&Tt(t,s)===o):i[0])??null}var rh=t=>{let e=t.filter(n=>n!==null);return e.length?e.reduce((n,r)=>n+r,0):null};function Py(t,e,n){let r=e.grid??n.grid,o=r?Re(t.states[r],e.grid_invert):null;if(!e.grid&&n.gridExport){let i=Math.max(0,Re(t.states[n.gridExport])??0);return Math.max(0,o??0)-i}return o}function Dy(t,e,n){return e.solar?Re(t.states[e.solar]):n.solar.length?rh(n.solar.map(r=>Re(t.states[r]))):null}function ha(t,e,n){return e.charge?(e.power?Math.max(0,Re(t.states[e.power])??0):0)-Math.max(0,Re(t.states[e.charge])??0):e.power?Re(t.states[e.power],n):null}function Iy(t,e,n){return e.battery?Re(t.states[e.battery],e.battery_invert):rh(n.batteries.map(r=>ha(t,r,e.battery_invert)))}function fa(t,e,n,r=fi(e)){let o=e.energy,i=Py(t,o,r),s=Dy(t,o,r),a=Iy(t,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(p=>Number(t.states[p]?.state)).filter(Number.isFinite),c=l.length?l.reduce((p,_)=>p+_,0)/l.length:null,u=o.tariff?t.states[o.tariff]:void 0,d=Number(u?.state),f=o.consumption?Re(t.states[o.consumption]):null;f===null&&(i!==null||s!==null||a!==null)&&(f=(i??0)+Math.max(0,s??0)+(a??0)),f===null&&n.length>0&&(f=n.reduce((p,_)=>p+_.power,0));let h={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:f===null?null:Math.max(0,f)};return r.subMeters?{...h,...Oy(t,r,h.consumption,o.battery_invert,n)}:h}function Oy(t,e,n,r,o){let i=e.subMeters??[],s=new Map;for(let f of i)for(let h of f.floors)s.has(h)||s.set(h,f.id);let a=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...i.flatMap(f=>[f.power,...f.solar,...f.batteries.flatMap(h=>[h.power,h.charge])])]),l=f=>o.filter(h=>s.get(h.floorId)===f&&!a.has(h.powerEntity)).reduce((h,p)=>h+p.power,0),c=new Map(i.map(f=>[f.id,f.power?Re(t.states[f.power],f.invert):null])),u=i.map(f=>{let h=c.get(f.id)??null,p=f.solar.reduce((v,w)=>v+Math.max(0,Re(t.states[w])??0),0),_=f.batteries.reduce((v,w)=>v+(ha(t,w,r)??0),0),y=i.filter(v=>v.parent===f.id).reduce((v,w)=>v+(c.get(w.id)??0),0),b=h===null?null:Math.max(0,h+p+_-y);return{id:f.id,parent:f.parent,power:h,solar:p,battery:_,use:b,unmetered:b===null?null:Math.max(0,b-l(f.id))}}),d=u.reduce((f,h)=>f+(h.use??0),0);return{subMeters:u,rest:n===null?null:Math.max(0,n-d)}}function Ly(t,e,n){let r=t.b[0]-t.a[0],o=t.b[1]-t.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-t.a[0])*r+(e.z-t.a[1])*o)/(i*i))),a=t.a[0]+r*s,l=t.a[1]+o*s,c=o/i*(a-n.x)+-r/i*(l-n.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function oh(t){let e=Ay(t),n=e?t.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!n)return null;let r={exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},o=me(n.rooms,r,n.walls??[]).walls.filter(c=>c.exterior),i=n.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},a=o.map(c=>Ly(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),l=r.exterior/2+3;return{floorId:n.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function ih(t,e){let n=t.floors.flatMap(p=>p.furniture.map(_=>({floor:p,item:_}))),r=p=>n.filter(_=>_.item.type===p),o=p=>!!ri(p.item,e),i=p=>({kind:"device",...p}),[s,a,l,c,u]=[t.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],d=!!t.energy.grid||a.some(o),f=!!t.energy.solar||l.length>0&&l.every(o),h=!!t.energy.battery||c.every(p=>o(p)&&p.item.soc&&p.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:d?"ok":"todo",label:d?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:f?"ok":"todo",label:f?"chk_inverter":"chk_inverter_sensor",target:i(l.find(p=>!o(p))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:h?"ok":"todo",label:h?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}function Jr(t,e){let n=[];for(let r of t.floors)for(let o of r.furniture)o.type===e&&n.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return n}function Hy(t){if(!t?.rooms.length)return null;let e=0,n=0,r=0;for(let o of t.rooms)for(let[i,s]of o.points)e+=i,n+=s,r++;return r?{floorId:t.id,x:e/r,z:n/r,y:1}:null}function Cy(t){let e=Cn(t);return Jr(t,"meter").find(n=>!e.has(n.id))??Jr(t,"inverter")[0]??Hy(Zo(t))}function Ny(t,e){let n=Jr(t,"grid_point")[0];if(n)return n;let r=t.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}function sh(t){let e=[],n=Cy(t);if(!n)return e;let r=new Set(t.floors.flatMap(i=>i.furniture).filter(i=>Qr(t,i)).map(i=>i.id)),o=Jr(t,"inverter").find(i=>!r.has(i.id));for(let i of t.settings.roof.solar??[])e.push({key:`solar:${i.id}`,kind:"solar",id:i.id});Jr(t,"home_battery").some(i=>!r.has(i.id))&&e.push({key:"battery",kind:"battery",id:null}),o&&(o.floorId!==n.floorId||o.x!==n.x||o.z!==n.z)&&e.push({key:"inverter",kind:"inverter",id:null}),Ny(t,n)&&e.push({key:"grid",kind:"grid",id:null});for(let i of t.floors.flatMap(s=>s.furniture))r.has(i.id)&&(i.type==="inverter"?e.push({key:`inverter:${i.id}`,kind:"inverter",id:i.id}):i.type==="home_battery"&&e.push({key:`battery:${i.id}`,kind:"battery",id:i.id}));for(let i of Cn(t))e.push({key:`meter:${i}`,kind:"meter",id:i});return e}var ah=(t,e)=>t.energy.routes?.find(n=>n.key===e&&n.points.length>0);var By={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},ch=t=>t.hass?Be(t.hass,t.doc.floors):new Map,Wy=Ce,uh=(t,e)=>e.name||t.t(`furn_${e.type}`);function dh(t,e){let n=ih(t.doc,ch(t)),r=n.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${t.t("chk_title")} <span class="nf-sub">${r}/${n.length}</span></h3>
    ${M(t.t("chk_hint"))}
    ${n.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!t.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${By[o.state]}</span>${t.t(o.label)}
      </button>`)}
  </section>`}function hh(t,e){let n=t.doc.floors.flatMap(r=>r.furniture.filter(o=>Wy.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${t.t("energy_devices")}</h3>
    ${M(t.t("energy_devices_hint"))}
    ${n.length>0?m`<div class="nf-room-list">
          ${n.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${uh(t,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${Ce.map(r=>m`<button class="nf-btn" ?disabled=${!t.admin||!t.floor} @click=${()=>e.addDevice(r)}>+ ${t.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var lh=(t,e,n)=>m`<p class="nf-sub nf-pack-error">${t.t(e)} <button class="nf-btn" ?disabled=${!t.admin} @click=${n}>${t.t("energy_sign_flip")}</button></p>`;function fh(t,e){let{energy:n}=t.doc,r=(b,v)=>t.hass?.states[b]?.attributes[v],o=H(t.hass,b=>Pn(t.hass,b)),i=H(t.hass,b=>he(b)&&r(b,"device_class")==="battery"),s=H(t.hass,b=>he(b)&&(r(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(b,"unit_of_measurement")??""))),a=ch(t),l=fi(t.doc,b=>ri(b,a)),c=b=>t.replace({...structuredClone(t.doc),energy:{...t.doc.energy,...b}}),u=H(t.hass,b=>he(b)&&["gas","water","volume_flow_rate"].includes(r(b,"device_class")??"")),d=b=>v=>c({[b]:v==="none"?null:v}),f=t.hass?fa(t.hass,t.doc,[],l):null,h=!!f&&(f.solar??0)<20,p=h&&f.grid!==null&&f.grid<-50,_=h&&f.battery!==null&&f.battery<-50&&(f.grid??0)<=0,y=(b,v)=>L(t,t.t("energy_invert"),b,w=>c(v(w)));return m`<section>
    <h3>⚖ ${t.t("energy_balance")}</h3>
    ${M(t.t("energy_balance_hint"))}
    ${p?lh(t,"energy_sign_grid",()=>c({grid_invert:!n.grid_invert})):g}
    ${_?lh(t,"energy_sign_battery",()=>c({battery_invert:!n.battery_invert})):g}
    <div class="nf-form">
      ${P(t,t.t("energy_grid"),n.grid,l.grid,o,d("grid"))}
      ${y(n.grid_invert,b=>({grid_invert:b}))}
      ${P(t,t.t("energy_solar_sensor"),n.solar,l.solar[0]??null,o,d("solar"))}
      ${P(t,t.t("energy_battery_sensor"),n.battery,l.battery[0]??null,o,d("battery"))}
      ${y(n.battery_invert,b=>({battery_invert:b}))}
      ${P(t,t.t("energy_battery_soc"),n.battery_soc,l.soc[0]??null,i,d("battery_soc"))}
      ${P(t,t.t("energy_consumption_sensor"),n.consumption,null,o,d("consumption"))}
      ${P(t,t.t("energy_tariff_sensor"),n.tariff,void 0,s,d("tariff"))}
      ${P(t,t.t("energy_gas"),n.gas??null,void 0,u,d("gas"))}
      ${P(t,t.t("energy_water"),n.water??null,void 0,u,d("water"))}
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
  </section>`}var ph=t=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${t.t("feature_name_energy")}</b></div>
  ${M(t.t("feature_text_energy"))}
</section>`;function mh(t){let e=(n,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${n}" target="_blank" rel="noopener">${r} ${t.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${t.t("help_title")}</h3>
    ${M(t.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}function Vy(t,e){let n=t.t,r=t.doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id),o=r?uh(t,r):"";switch(e.kind){case"solar":{let i=t.doc.settings.roof.solar??[],s=i.findIndex(a=>a.id===e.id);return n("route_conn_solar",{name:i[s]?.name||`${n("solar_field")} ${s+1}`})}case"battery":return e.id?n("route_conn_device",{name:o}):n("route_conn_battery");case"inverter":return e.id?n("route_conn_device",{name:o}):n("route_conn_inverter");case"grid":return n("route_conn_grid");case"meter":return n("route_conn_meter",{name:o})}}function gh(t,e){let n=sh(t.doc);if(!n.length)return g;let r=t.t,o=e.draft;return m`<section>
    <h3>〰 ${r("energy_routes")}</h3>
    ${M(r("energy_routes_hint"))}
    <div class="nf-room-list">
      ${n.map(i=>{let s=ah(t.doc,i.key),a=o?.key===i.key;return m`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${Vy(t,i)} · ${s?r("route_points",{n:s.points.length}):r("route_none")}</span></span>
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
  </section>`}var ot=(t,e)=>e.map(n=>t.toScreen(n).join(",")).join(" ");function pi(t,e,n,r,o,i){let[[s,a],[l,c]]=[t.toScreen(e),t.toScreen(n)];if(Math.hypot(l-s,c-a)<=36)return g;let[u,d]=[(s+l)/2,(a+c)/2];return R`<g data-plus=${`${r}:${o}:${i}`} class="nf-mid"><circle cx=${u} cy=${d} r="14" class="nf-hit" /><circle cx=${u} cy=${d} r="6" /><path d="M${u-3} ${d}h6M${u} ${d-3}v6" /></g>`}var _h=(t,e)=>R`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r="6" />`,Ky=(t,e,n)=>R`<g class="nf-vertex" data-roof-vertex=${n}>${_h(...t.toScreen(e))}</g>`,Gy=(t,e,n)=>R`<g class="nf-vertex" data-roof-corner=${n}>${_h(...t.toScreen(e))}</g>`;function Uy(t,e,n,r){let{t:o,hass:i}=t.host,s=n.dormer?o("roof_dormer"):n.open?o("roof_open_short"):o(`roof_shape_${n.shape}`);return`${e.isFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${U(i,Zt(n),1)} m`}function pa(t,e){let n=t.host.doc.settings.roof,r=n.type==="custom"?n.sections??[]:[],o=t.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=ke(s),u=(s.shape==="flat"||s.shape==="parapet")&&s.points&&s.points.length>=3?s.points:null,d=jo(r,s),f=d?ke(Ds(d,s)):c,h=u??[f.at(f.u0,0),f.at(f.u1,0),f.at(f.u1,f.w),f.at(f.u0,f.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:qt(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([C,B])=>{let[q,we]=t.toScreen(c.at(C[0],C[1])),[$t,K]=t.toScreen(c.at(B[0],B[1]));return R`<line x1=${q} y1=${we} x2=${$t} y2=${K} />`}),[y,b]=t.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),v=l&&o&&!e.isFixed(s),w=[[0,0],[1,0],[1,1],[0,1]],x=s.shape==="flat"||s.shape==="parapet",[k,$,A,F]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],T=u??(s.rotation?wr(s):[[k,A],[$,A],[$,F],[k,F]]),D=v&&x?T.map((C,B)=>pi(t,C,T[(B+1)%T.length],"roof",s.id,B)):g,z=v?R`${D}${u?u.map((C,B)=>Ky(t,C,`${s.id}:${B}`)):w.map(([C,B])=>Gy(t,[C?$:k,B?F:A],`${s.id}:${C}:${B}`))}`:g;return R`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${ot(t,h)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${y} y=${b-14}>${Uy(t,e,s,a)}</text>
      </g>${z}`};return R`<g class="nf-roof-layer">${r.map(i)}</g>`}function jy(t,e,n,r,o){let i=r*Math.PI/180,[s,a]=t.toScreen(n),[l,c]=t.toScreen([n[0]+Math.sin(i)*o,n[1]-Math.cos(i)*o]);return R`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function bh(t,e){let{doc:n,admin:r}=t.host,o=n.settings.roof.solar??[];if(o.length===0)return g;let i=Z(n),s=a=>{let l=xe(n,a,i);if(!l||l.wall&&l.wall.floorId!==t.floorId)return g;let c=a.id===e.solarId,u=g;if(c&&l.unbounded&&r&&!a.locked){let h=Tr(l,a),p=Math.max(...Ue(l,a,!0).flatMap(_=>_.corners.map(y=>Math.hypot(y[0]-h[0],y[2]-h[1]))));u=jy(t,a.id,h,a.rotation??0,.9+p*.5)}let d=h=>{let p;if(l.wall){let _=Math.max(.3,...h.corners.map(w=>(w[0]-l.o[0])*l.n[0]+(w[2]-l.o[2])*l.n[2])),[y,b]=[h.corners[0],h.corners[1]],v=w=>[w[0]+l.n[0]*_,w[2]+l.n[2]*_];p=[[y[0],y[2]],v(y),v(b),[b[0],b[2]]]}else p=h.corners.map(_=>[_[0],_[2]]);return R`<polygon data-cell=${h.cell} class=${h.skipped?"nf-solar-off":""} points=${ot(t,p)} />`},f=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return R`<g data-solar=${a.id} class=${f}>${Ue(l,a,c).map(d)}</g>${u}`};return R`<g class="nf-solar-layer">${o.map(s)}</g>`}function yh(t,e){let n=t.host.doc.settings.roof.windows??[];if(n.length===0)return g;let r=new Map(Z(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?Vs(s,i):null;return a?R`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${ot(t,a.map(l=>[l[0],l[2]]))} /></g>`:g};return R`<g class="nf-roofwin-layer">${n.map(o)}</g>`}var Zy={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function wh(t,e,n){if(!e)return g;let r=e.furniture.filter(i=>Ce.includes(i.type)),o=i=>{let[s,a]=t.toScreen([i.x,i.z]),l=i.id===n,c=t.host.t(`furn_${i.type}`);return R`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${Zy[i.type]??"\u26A1"}</text>
      ${l?R`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return R`<g class="nf-energy-markers">${r.map(o)}</g>`}function vh(t,e){let{doc:n,hass:r}=t.host;if(!(n.settings.roof.sections??[]).some(s=>Os(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>Ls({settings:n.settings},e.elevation,s).map(([a,l])=>{let[c,u]=t.toScreen(a),[d,f]=t.toScreen(l);return R`<line class="nf-headroom" x1=${c} y1=${u} x2=${d} y2=${f} />
        <text class="nf-headroom-label" x=${(c+d)/2} y=${(u+f)/2-4}>${U(r,s,1)} m</text>`}));return R`${i}`}function kh(t,e,n,r){if(!e)return g;let o=(i,s)=>{let a=[];return i.forEach((l,c)=>{if(l.floor_id!==e.id)return;let[u,d]=t.toScreen([l.x,l.z]),f=i[c+1];if(f?.floor_id===e.id){let[p,_]=t.toScreen([f.x,f.z]);a.push(R`<line x1=${u} y1=${d} x2=${p} y2=${_} />`)}let h=f&&f.floor_id!==e.id||c>0&&i[c-1].floor_id!==e.id;a.push(R`<circle cx=${u} cy=${d} r=${h?7:4} class=${h?"nf-route-riser":""} />`),s&&a.push(R`<text x=${u+8} y=${d-8}>${c+1}</text>`)}),R`<g class=${`nf-route${s?" nf-route-drawing":""}`}>${a}</g>`};return R`<g class="nf-routes">${n.filter(i=>i.key!==r?.key).map(i=>o(i.points,!1))}${r?o(r.points,!0):g}</g>`}function xh(t,e){let n=t.host.doc.settings.roof.chimneys??[];if(n.length===0)return g;let r=new Map(Z(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face);if(!s)return g;let{shape:a,w:l,d:c}=tn(i),{center:u,along:d,across:f}=Ks(s,i),h=a==="round"||a==="steel"?Array.from({length:16},(p,_)=>[u[0]+Math.cos(_/16*2*Math.PI)*Math.min(l,c)/2,u[1]+Math.sin(_/16*2*Math.PI)*Math.min(l,c)/2]):[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,_])=>[u[0]+d[0]*l*p/2+f[0]*c*_/2,u[1]+d[1]*l*p/2+f[1]*c*_/2]);return R`<g data-chimney=${i.id} class=${`nf-chimney${i.id===e.chimneyId?" nf-roofwin-sel":""}`}><polygon points=${ot(t,h)} /></g>`};return R`<g class="nf-roofwin-layer">${n.map(o)}</g>`}function qy(t,e,n){let[r,o]=[t+n/2,e-30];return R`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Yy(t,e){let n=e.level?.length?e.level:e.ruler;if(!n?.length)return g;let r=n.map(o=>t.toScreen(o));return R`<g class="nf-bg-ruler">
    ${r.length===2?R`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>R`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function $h(t,e,n){let r=n?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=t.toScreen([r.x,r.z]),a=r.width*t.scale,l=a*o.aspect,c=e.handlesShown;return R`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?R`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${qy(i,s,a)}`:g}
  </g>${Yy(t,e)}`}var Xy="strict-origin-when-cross-origin",ma=new Map,Sh=new Map,mi=new Map;function Qy(t){let e=ma.get(t);return e||(e=fetch(t,{referrerPolicy:Xy,mode:"cors",credentials:"omit"}).then(async n=>n.ok&&(n.headers.get("content-type")??"").startsWith("image/")?await n.blob():null).catch(()=>null).then(n=>(n||setTimeout(()=>ma.delete(t),6e4),n)),ma.set(t,e)),e}function Mh(t,e){let n=Sh.get(t);if(n)return n;let r=mi.get(t);return r||(r=new Set,mi.set(t,r),Qy(t).then(o=>{o&&Sh.set(t,URL.createObjectURL(o));let i=mi.get(t)??new Set;if(mi.delete(t),o)for(let s of i)s()})),r.add(e),null}function Rh(t,e){let n=e.map;if(!ui(n))return g;let r=Zd(n),o=jd(n),[i,s]=t.toScreen([r.x,r.z]),a=t.scale;return R`<g class="nf-map" opacity=${r.opacity} pointer-events="none" transform="translate(${i} ${s}) rotate(${e.north??0})">
    ${Gd(n.lat,n.lon,r.zoom).map(l=>({tile:l,href:Mh(Ud(o,l),t.redraw)})).filter(l=>l.href).map(({tile:l,href:c})=>R`<image href=${c} x=${l.east*a} y=${-l.north*a} width=${l.size*a+.6} height=${l.size*a+.6} preserveAspectRatio="none" />`)}
  </g>`}var ga=t=>Math.round(t*1e3)/1e3,_a=(t,e)=>t.width*e,Nn=(t,e)=>[t.x+t.width/2,t.z+_a(t,e)/2];function Eh(t,e,n){let[r,o]=[t[0]-e[0],t[1]-e[1]];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}var Ah=t=>((t+180)%360+360)%360-180;function Fh(t,e,n){return{x:ga(t[0]-e/2),z:ga(t[1]-n/2)}}function Th(t,e,n,r){if(Math.hypot(r[0]-n[0],r[1]-n[1])<.05)return null;let o=Math.atan2(r[1]-n[1],r[0]-n[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Eh(Nn(t,e),n,i),a=Math.round(Ah((t.rotation??0)+i*180/Math.PI)*100)/100;return{...t,rotation:a,...Fh(s,t.width,_a(t,e))}}function zh(t,e,n,r,o){let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=Nn(t,e),c=[n[0]+s*(a-n[0]),n[1]+s*(l-n[1])],u=t.width*s;return{...t,width:ga(u),...Fh(c,u,_a(t,e)*s)}}function Ph(t,e,n){let r=Eh(n,Nn(t,e),-(t.rotation??0)*Math.PI/180);return[r[0]-t.x,r[1]-t.z]}function Dh(t,e,n,r){let o=t+(n-e)*180/Math.PI;return Ah(r?Math.round(o/15)*15:Math.round(o*10)/10)}var Jy=2048;async function Bn(t){let e=await createImageBitmap(t),n=Math.min(1,Jy/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*n),r.height=Math.round(e.height*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var gi=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:n,api:r}=this.deps;if(n.hass){this.loading.add(e);try{let o=await r.fetchImage(n.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let n=new Image;return n.src=e,await n.decode(),n.naturalHeight/n.naturalWidth}async upload(e){let{host:n,api:r}=this.deps;if(!e||!n.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=I("img");await r.storeImage(n.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=n.floor?.rooms??[],l=a.length>0?ue(a.flatMap(u=>u.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((n,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let n=[...this.levelPoints??[],e];if(n.length<2){this.level=n;return}this.level=null,this.straighten(n[0],n[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,n){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Th(r,o.aspect,e,n):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,n=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!n||!r||r.length<2)return;let o=zh(e,n.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var Ih=.1,ba=(t,e,n)=>m`<button class="nf-btn nf-wide ${t?"nf-primary":""}" aria-pressed=${t} @click=${n}>${e}</button>`;function e0(t,e){let n=e.ruler;if(!n)return g;if(n.length<2)return M(t.t(n.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),o=()=>e.applyRuler();return m`${M(t.t("bg_ruler_length_hint",{m:U(t.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${t.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=oa(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${t.t("bg_ruler_apply")}</button>`}function t0(t,e){if(!t.admin)return g;let n=t.t,r=e.level;return m`${ba(e.edit,n(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${M(n(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${ba(!!r,`\u{1F4D0} ${n(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?M(n(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${ba(!!e.ruler,`\u{1F4CF} ${n(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${e0(t,e)}`}function Oh(t,e,n){let r=n.background,o=t.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${r?m`${E(t,o("x"),r.x,s=>i({x:s}))} ${E(t,o("z"),r.z,s=>i({z:s}))}
          ${E(t,o("background_width"),r.width,s=>i({width:Math.max(Ih,s)}),.01,Ih)}
          ${E(t,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${t0(t,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ie(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var Ch=1e-4;function Nh(t){return t.reduce((e,n,r)=>e+ge(n,t[(r+1)%t.length]),0)/2}var Bh=t=>Nh(t)>=0?[...t]:[...t].reverse();var n0=(t,e,n=Ch)=>pe(V(t,e))<n,r0=t=>t.map((e,n)=>[e,t[(n+1)%t.length]]);function o0(t,e,n){let r=V(n,e),o=Q(r,r),i=o?Math.max(0,Math.min(1,Q(V(t,e),r)/o)):0;return pe(V(t,[e[0]+r[0]*i,e[1]+r[1]*i]))}function i0(t,e,n=.03){return t.every(r=>N(r,e)||r0(e).some(([o,i])=>o0(r,o,i)<=n))}function Lh(t){let e=Bh(t);return e.every((n,r)=>ge(V(n,e[(r-1+e.length)%e.length]),V(e[(r+1)%e.length],n))>=-Ch)}function Hh(t,e){let n=[...t],r=Bh(e);for(let o=0;o<r.length&&n.length;o++){let i=r[o],s=r[(o+1)%r.length],a=c=>ge(V(s,i),V(c,i)),l=n;n=[],l.forEach((c,u)=>{let d=l[(u+1)%l.length],[f,h]=[a(c),a(d)];if(f>=0&&n.push(c),f>=0!=h>=0){let p=f/(f-h);n.push([c[0]+(d[0]-c[0])*p,c[1]+(d[1]-c[1])*p])}})}return n.filter((o,i)=>!n0(o,n[(i+1)%n.length]))}function Wh(t,e){if(i0(t,e))return[...t];let n=Lh(t)?Hh(e,t):Lh(e)?Hh(t,e):null;return n&&n.length>=3&&Math.abs(Nh(n))>=.01?n:null}var ya=["straight","quarter","l","half","u","spiral"],wa=["solid","stringer","mono","cantilever"],va=["none","left","right","both"],ka=["headroom","full","none"],ht={shape:"straight",turn:"right",build:"solid",risers:!0,steps:null,run_width:null,down:!1,rail:"none",opening:"headroom",landing_after:null},xa={straight:[1,3.2],quarter:[2.2,2.6],l:[2.2,2.8],half:[2,2.6],u:[2.2,2.6],spiral:[1.6,1.6]},jh=2,Zh=40;var _i=(t,e)=>typeof e=="string"&&t.includes(e);function ro(t){let e=t.stair??{},n=typeof e.steps=="number"&&Number.isFinite(e.steps)?Math.round(Math.min(Zh,Math.max(jh,e.steps))):null,r=typeof e.run_width=="number"&&Number.isFinite(e.run_width)&&e.run_width>.2?e.run_width:null;return{shape:_i(ya,e.shape)?e.shape:ht.shape,turn:e.turn==="left"?"left":"right",build:_i(wa,e.build)?e.build:ht.build,risers:e.risers!==!1,steps:n,run_width:r,down:e.down===!0,rail:_i(va,e.rail)?e.rail:ht.rail,opening:_i(ka,e.opening)?e.opening:ht.opening,landing_after:typeof e.landing_after=="number"&&Number.isFinite(e.landing_after)?Math.max(1,Math.round(e.landing_after)):null}}var to=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Vh=(t,e)=>Math.abs(t[0]-e[0])<1e-6&&Math.abs(t[1]-e[1])<1e-6;function qh(t){let e=[];for(let n of t)(!e.length||!Vh(e[e.length-1],n))&&e.push(n);for(;e.length>1&&Vh(e[0],e[e.length-1]);)e.pop();return e}function no(t,e,n=!1){return{poly:qh([...t,...[...e].reverse()]),landing:n,left:t,right:e}}function eo(t,e,n,r,o){let i=[];for(let s=0;s<o;s++){let[a,l]=[s/o,(s+1)/o];i.push(no([to(t,n,a),to(t,n,l)],[to(e,r,a),to(e,r,l)]))}return i}function Kh(t,e){let n=e;for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return to(t[r],t[r+1],o?Math.min(1,n/o):0);n-=o}return t[t.length-1]}function s0(t,e,n){let r=[Kh(t,e)],o=0;for(let i=0;i+1<t.length;i++)o+=Math.hypot(t[i+1][0]-t[i][0],t[i+1][1]-t[i][1]),o>e+1e-6&&o<n-1e-6&&r.push(t[i+1]);return r.push(Kh(t,n)),r}var a0=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Gh(t,e,n,r,o){let i=a0(t),s=[];for(let a=0;a<o;a++){let l=qh([...a===0?[e]:[],n,...a===o-1?[r]:[]]);s.push(no(s0(t,i*a/o,i*(a+1)/o),l.length?l:[n]))}return s}function bi(t,e,n){if(t<=0)return[0,0];if(e<=.001)return[0,t];if(n<=.001)return[t,0];let r=Math.min(t,Math.max(0,Math.round(t*e/(e+n))));return[r,t-r]}function Uh(t,e){if(t.landing_after==null)return null;let n=Math.min(e-1,Math.max(1,Math.round(t.landing_after)))-1;return[n,e-1-n]}function l0(t,e,n,r){let[o,i,s,a]=[-e/2,e/2,-n/2,n/2];switch(t.shape){case"quarter":case"l":{let l=Math.min(t.run_width??Math.min(1,Math.min(e,n)/2),Math.min(e,n)-.05),c=[o+l,s+l],u=[[o,s+l],[o,s],[o+l,s]],d=t.shape==="l"?1:Math.min(r,r>=8?3:2),[f,h]=t.shape==="l"?Uh(t,r)??bi(r-d,n-l,e-l):bi(r-d,n-l,e-l),p=eo([o,a],[o+l,a],[o,s+l],c,f),_=t.shape==="l"?[no(u,[c],!0)]:Gh(u,c,c,c,d),y=eo([o+l,s],c,[i,s],[i,s+l],h);return{treads:[...p,..._,...y],flight:l,column:0}}case"half":case"u":{let l=Math.min(t.run_width??Math.min(1.1,(e-.1)/2),(e-.02)/2),c=s+l,u=[[o,c],[o,s],[i,s],[i,c]],[d,f]=[[o+l,c],[i-l,c]],h=t.shape==="u"?1:Math.min(r,r>=12?6:r>=8?4:2),[p,_]=t.shape==="u"?Uh(t,r)??bi(r-h,n-l,n-l):bi(r-h,n-l,n-l),y=eo([o,a],[o+l,a],[o,c],d,p),b=t.shape==="u"?[no(u,[d,f],!0)]:Gh(u,d,[0,c],f,h),v=eo([i,c],f,[i,a],[i-l,a],_);return{treads:[...y,...b,...v],flight:l,column:0}}case"spiral":{let l=Math.min(e,n)/2,c=Math.min(.08,l*.12),u=Math.min(.75,Math.max(.3,.22/(l*.6))),d=(h,p)=>[Math.cos(p)*h,Math.sin(p)*h],f=[];for(let h=0;h<r;h++){let[p,_]=[Math.PI+u*h,Math.PI+u*(h+1)],y=[0,.5,1].map(b=>d(l,p+(_-p)*b));f.push(no(y,[d(c,p),d(c,_)]))}return{treads:f,flight:l-c,column:c}}default:return{treads:eo([o,a],[i,a],[o,s],[i,s],r),flight:e,column:0}}}var c0=(t,e)=>t.steps??Math.min(Zh,Math.max(jh,Math.round(Math.abs(e)/.18)));function cn(t,e,n,r){let o=c0(t,r),i=Math.abs(r)/o,s=l0(t,Math.max(.3,e),Math.max(.3,n),o),a=c=>[-c[0],c[1]];return{treads:s.treads.map((c,u)=>{let d=t.down?-i*(u+1):i*(u+1);return t.turn==="right"?{...c,top:d}:{poly:c.poly.map(a).reverse(),top:d,landing:c.landing,left:c.right.map(a),right:c.left.map(a)}}),rise:i,steps:o,column:s.column,flight:s.flight}}function yi(t){let e=t.poly.reduce((n,r)=>[n[0]+r[0],n[1]+r[1]],[0,0]);return[e[0]/t.poly.length,e[1]/t.poly.length]}var J=t=>Math.round(t*1e3)/1e3,u0=(t,e)=>((t+e)%360+360)%360;function Yh(t,e){return{id:I("wall"),a:[J(t[0]),J(t[1])],b:[J(e[0]),J(e[1])],thickness:null}}function Xh(t,e){let n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1])||1,r=Math.max(.1,e)/n;return[J(t.a[0]+(t.b[0]-t.a[0])*r),J(t.a[1]+(t.b[1]-t.a[1])*r)]}var Qh=(t,e)=>({height:t>=e-.005?null:Math.max(.05,t)});function Jh(t,e){return{id:I("hole"),type:"stairwell",x:J((t[0]+e[0])/2),z:J((t[1]+e[1])/2),w:J(e[0]-t[0]),d:J(e[1]-t[1]),h:.02,rotation:0,variant:null}}var ef=t=>({id:I("outdoor"),type:"lawn",points:t.map(([e,n])=>[J(e),J(n)])});function tf(t,e,n){t.points.splice(e+1,0,[J(n[0]),J(n[1])])}function nf(t,e){return t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),!0)}var rf=t=>({...t,id:I("outdoor"),points:t.points.map(([e,n])=>[J(e+.5),J(n+.5)])});function $a(t,e,n,r){let[o,i,s]=st(t),a=e.floors.filter(u=>u.elevation>n.elevation).sort((u,d)=>u.elevation-d.elevation)[0],l=t==="stairs"?J(a?a.elevation-n.elevation:n.height+.25):s,c={id:I("furniture"),type:t,x:J(r[0]),z:J(r[1]),rotation:0,w:o,d:i,h:l,variant:null};return t==="stairs"&&(c.stair={...ht}),c}var of=t=>({...structuredClone(t),id:I("furniture"),x:J(t.x+.3),z:J(t.z+.3)}),sf=(t,e)=>u0(t,e);function af(t){let[e,n,r]=st("parking");return{id:I("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,J(t.w+.5)),d:Math.max(n,J(t.d+.4)),h:r,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}}}function lf(t,e){let[n,r,o]=st(e);return{id:I("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,variant:null,entity:t.entity_id,name:t.name??null,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.locked?{locked:!0}:{}}}var cf=(t,e)=>({entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.name?{name:t.name}:{}});function uf(t,e){for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(ce(r.type)&&r.entity===e))}function Sa(t,e,n,r){let o=new Set(r);for(let s of t.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(ce(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>ce(s.type)).map(s=>[s.x,s.z])];for(let s of mu(n,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=Je.lamp_ceiling;e.furniture.push({id:I("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function df(t){let[e,n]=be(t.points);return[J(e),J(n)]}function hf(t,e,n,r){let o=Math.min(n,t)/2,i=r>0?Math.round(e/r)*r:e;return J(Math.min(t-o,Math.max(o,i)))}function ff(t,e){let n=bn[e],r=yn(t)===e?{}:{width:n.width};return{type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:n.style??null,opens:n.opens??null,...r}}function pf(t,e,n){let r=ue(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:e==="w"?s=o+Math.max(.1,n):a=i+Math.max(.1,n),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[J(l),J(c)])}function mf(t){return t.furniture.map((e,n)=>({item:e,index:n,base:At(t,e)})).sort((e,n)=>e.base-n.base||e.index-n.index).map(e=>e.item)}function wi(t,e,n){if(!t.admin)return g;let r=n.edit?.key===e;return m`<button class="nf-btn" aria-pressed=${r} title=${t.t("arc_hint")} @click=${()=>n.setEdit(r?null:{key:e,bulge:.5,error:null})}>
    ◠ ${t.t("arc")}
  </button>`}function vi(t,e,n){let r=n.edit;if(!t.admin||r?.key!==e)return g;let o=t.t;return m`<span class="nf-wide nf-split-row" title=${o("arc_bulge_hint")}
      >${E(t,o("arc_bulge"),r.bulge,i=>n.setEdit({...r,bulge:i,error:null}),.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(r.bulge)<.01} @click=${()=>n.apply(r)}>${o("arc_apply")}</button></span
    >
    ${r.error?m`<p class="nf-sub nf-wide nf-notice">${r.error}</p>`:g}`}var ki=(t,e,n)=>Math.min(e,Math.max(t,ie(n)));function Ma(t,e,n){let r=t.t,o=l=>n.update(l),i=ue(e.points),s=Ac.map(l=>[l,r(`out_${l}`)]),a=Fc.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${O(t,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${O(t,r("area"),e.area_id??"",[["",r("no_area")],...Object.values(t.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name)).map(l=>[l.area_id,l.name])],l=>o({area_id:l||null}),{wide:!0,title:r("outdoor_area_hint")})}
      ${e.type==="pool"||e.type==="wild"||e.type==="bed"?m`${P(t,r("pool_temp"),e.temp_entity??null,void 0,H(t.hass,l=>l.startsWith("sensor.")&&t.hass?.states[l]?.attributes.device_class==="temperature"),l=>o({temp_entity:l&&l!=="none"?l:null}))}
          ${P(t,r("pool_pump"),e.pump_entity??null,void 0,H(t.hass,l=>/^(switch|fan|valve|input_boolean|binary_sensor)\./.test(l)),l=>o({pump_entity:l&&l!=="none"?l:null}))}`:g}
      ${wn(e.points)?m`${E(t,r("x"),i.x0,l=>n.setRectangle("x",l))} ${E(t,r("z"),i.z0,l=>n.setRectangle("z",l))}
          ${E(t,r("width"),i.x1-i.x0,l=>n.setRectangle("w",l),.01,.1)} ${E(t,r("depth"),i.z1-i.z0,l=>n.setRectangle("d",l),.01,.1)}`:g}
      ${cs(e.type)?E(t,r("outdoor_height"),e.height??ls[e.type],l=>o({height:ki(.1,6,l)}),.05,.1):g}
      ${E(t,r("outdoor_offset"),e.offset??0,l=>o({offset:ki(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${E(t,r("outdoor_slope"),e.slope??0,l=>o({slope:ki(0,20,l)||null}),.05,0)}
          ${O(t,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${E(t,r("outdoor_opacity"),Math.round((e.opacity??1)*100),l=>o({opacity:l>=100||!(l>0)?null:Math.max(10,Math.min(95,l))/100}),5,10)}
      ${L(t,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?L(t,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?L(t,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${L(t,r("outdoor_cut"),Pc(e),l=>o({cut:l===(e.type==="pool")?void 0:l}),{title:r("outdoor_cut_hint")})}
    </div>
    ${e.type==="fence"?d0(t,e,o):g}
    ${t.admin?m`<div class="nf-actions">
            ${e.points.map((l,c)=>m`<button class="nf-chip" title=${r("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(c)}>${c+1} ×</button>`)}
          </div>
          ${M(r("outdoor_corners_hint"))}`:g}
    ${e.slope?M(r("outdoor_slope_hint")):g} ${M(r("outdoor_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function d0(t,e,n){let r=t.t,o=e.gates??[],i=h=>n({gates:h.length?h:void 0}),s=e.points.map((h,p)=>[String(p),`${p+1} \u2192 ${(p+1)%e.points.length+1}`]),a=h=>{let[p,_]=[e.points[h],e.points[(h+1)%e.points.length]];return p&&_?Math.hypot(_[0]-p[0],_[1]-p[1]):0},l=(h,p)=>i(o.map((_,y)=>y===h?{..._,...p}:_)),c=H(t.hass,h=>/^(cover|switch|input_boolean|lock)\./.test(h)),u=H(t.hass,h=>h.startsWith("binary_sensor.")),d=[["single",r("gate_single")],["double",r("gate_double")],["sliding",r("gate_sliding")]],f=()=>{let p=a(0);i([...o,{id:I("gate"),edge:0,offset:ie(p/2),width:Math.min(1.2,Math.max(.5,ie(p*.4))),kind:"single"}])};return m`<h4 class="nf-lib-head">${r("fence_gates")}</h4>
    ${o.map((h,p)=>m`<div class="nf-form">
        ${O(t,r("gate_edge"),String(h.edge),s,_=>l(p,{edge:Number(_)}))}
        ${O(t,r("gate_kind"),h.kind,d,_=>l(p,{kind:_,width:_==="single"&&h.width>1.6?1:h.width}))}
        ${E(t,r("gate_offset"),h.offset,_=>l(p,{offset:Math.max(0,Math.min(a(h.edge),ie(_)))}),.05,0)}
        ${E(t,r("gate_width"),h.width,_=>l(p,{width:Math.max(.3,Math.min(12,ie(_)))}),.05,.3)}
        ${P(t,r("gate_entity"),h.entity??null,void 0,c,_=>l(p,{entity:_&&_!=="none"?_:null}))}
        ${P(t,r("gate_contact"),h.contact??null,void 0,u,_=>l(p,{contact:_&&_!=="none"?_:null}))}
        ${t.admin?m`<button class="nf-btn nf-danger nf-wide" @click=${()=>i(o.filter((_,y)=>y!==p))}>${r("delete")}</button>`:g}
      </div>`)}
    ${t.admin&&o.length<20?m`<button class="nf-btn" @click=${f}>${r("gate_add")}</button>`:g}
    ${M(r("fence_gates_hint"))}`}var h0=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],f0={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function gf(t,e,n){let r=t.t,{draft:o}=e,i=d=>U(t.hass,d,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=d=>{let f=f0[d.key];f?(d.preventDefault(),n.step(f)):d.key==="Enter"&&n.close()},u=s?m`${M(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${d=>n.setLength(Number.parseFloat(d.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${h0.map(([d,f])=>m`<button class="nf-btn nf-arrow-${d}" title=${r(`dir_${d}`)} @click=${()=>n.step(d)}>${f}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((d,f)=>m`<li>${i(Math.hypot(d[0]-o[f][0],d[1]-o[f][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>n.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>n.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?M(r("measure_gap",{gap:i(l)})):g}`:M(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${u}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${E(t,r("width"),e.rectSize[0],d=>n.setRectSize([Math.max(.1,d),e.rectSize[1]]),.01,.1)}
      ${E(t,r("depth"),e.rectSize[1],d=>n.setRectSize([e.rectSize[0],Math.max(.1,d)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>n.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${M(r("measure_hint"))}
  </section>`}function Ra(t,e,n){let r=t.t,o=t.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${E(t,r("wall_length"),i,s=>n.update({b:Xh(e,s)}),.01,.1)}
      ${E(t,r("wall_thickness"),e.thickness??t.doc.settings.wall_interior,s=>n.update({thickness:ki(.02,1,s)}),.01,.02)}
      ${E(t,r("wall_height"),e.height??o,s=>n.update(Qh(s,o)),.05,.05)}
      ${L(t,r("free_wall_slope"),e.height_end!=null,s=>n.update(s?{height:e.height??o,height_end:Math.max(.2,(e.height??o)/2)}:{height_end:null}),{title:r("free_wall_slope_hint")})}
      ${e.height_end!=null?E(t,r("free_wall_height_end"),e.height_end,s=>n.update({height_end:Math.max(.05,s)}),.05,.05):g}
      ${L(t,r("free_wall_hang"),e.bottom!=null,s=>n.update(s?{bottom:Math.round((e.height??o)*.6*20)/20,bottom_end:null}:{bottom:null,bottom_end:null}),{title:r("free_wall_hang_hint")})}
      ${e.bottom!=null?m`${E(t,r("free_wall_bottom"),e.bottom,s=>n.update({bottom:Math.max(0,s)}),.05,.05)}
          ${L(t,r("free_wall_bottom_slope"),e.bottom_end!=null,s=>n.update({bottom_end:s?Math.max(0,(e.bottom??0)-.5):null}))}
          ${e.bottom_end!=null?E(t,r("free_wall_bottom_end"),e.bottom_end,s=>n.update({bottom_end:Math.max(0,s)}),.05,.05):g}`:g}
    </div>
    ${t.admin?m`<div class="nf-actions">${wi(t,`wall:${e.id}`,n.arc)}<button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
    <div class="nf-form">${vi(t,`wall:${e.id}`,n.arc)}</div>
    ${M(r("free_wall_hint"))}
  </section>`}var Lt=t=>Math.round(t*1e3)/1e3,p0=2.4;function _f(t,e,n){let r=Hs(t,e[0],e[1],n[0],n[1]),o=r===null,i=Math.min(...t.floors.map(l=>l.elevation)),s=Lt(r??i+p0),a=o?6:t.settings.roof.pitch||35;return{id:I("roof"),x0:Lt(e[0]),z0:Lt(e[1]),x1:Lt(n[0]),z1:Lt(n[1]),shape:o?"pent":"gable",axis:n[0]-e[0]>=n[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function bf(t){let e=n=>Lt(n+1);return{...structuredClone(t),id:I("roof"),x0:e(t.x0),x1:e(t.x1),z0:e(t.z0),z1:e(t.z1)}}var yf=(t,e)=>t.findIndex(n=>n.id===e)+1;function Ea(t){return t.points&&t.points.length>=3?t.points.map(([e,n])=>[e,n]):t.rotation?wr(t):[[t.x0,t.z0],[t.x1,t.z0],[t.x1,t.z1],[t.x0,t.z1]]}function wf(t,e,n){let r=Ea(t);r.splice(e+1,0,[Lt(n[0]),Lt(n[1])]),t.points=r,Object.assign(t,Pt(r))}function vf(t,e){return!t.points||t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),Object.assign(t,Pt(t.points)),!0)}var m0={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Ht=t=>m0[t];function xi(t,e){let n=new Set;for(let r of t?.placements??[])N([r.x,r.z],e.points)&&n.add(r.entity_id);for(let r of t?.furniture??[])ce(r.type)&&r.entity&&N([r.x,r.z],e.points)&&n.add(r.entity);return n}function kf(t,e){let n=new Map;for(let r of t.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>ce(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>N([s,a],c.points));l&&l.id!==e.id&&n.set(i,l.name)}}return n}var xf=(t,e)=>(t??[]).includes(e)?(t??[]).filter(n=>n!==e):[...t??[],e];function $i(t,...e){let n=t.trim().toLowerCase();return!n||e.some(r=>(r??"").toLowerCase().includes(n))}function $f(t,e){return t.map(n=>({o:n,r:e(n.id)})).sort((n,r)=>n.r-r.r).map(({o:n})=>n)}function Sf(t,e){let n=e,r=0;return{taken:t.map(i=>{let s=i.ids.slice(0,Math.max(0,n));return n-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var Aa=50;function Fa(t,e,n,r,o,i,s){let a=e.includes(n);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${t.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:xf(e,n)})}>${a?o[0]:o[1]}</button>`}function g0(t,e,n,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,d=o)=>{let f=n.has(c),h=f?void 0:r.get(c),p=s.includes(c),_=In(t,c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${p?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${f?"":"nf-muted"}" ?disabled=${!f} @click=${()=>i.select(c)}>
        ${_?m`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${_}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Ht((t.hass?Ne(t.hass,c):X(c))??"sensor")} /></svg>`}
        <span>${W(t.hass,c,d)}${h?m`<small class="nf-muted"> · ${t.t("devices_placed_in",{room:h})}</small>`:g}</span>
      </button>
      ${t.admin?Fa(t,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${t.admin&&!p?Fa(t,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${t.admin&&!f?Fa(t,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${t.admin?f?m`<button class="nf-link" @click=${()=>i.remove(c)}>${t.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${t.t("devices_place")}</button>`:g}
    </div>`}}function _0(t,e,n,r,o){let{hass:i}=t;if(!i)return m``;let s=u=>u>0?M(t.t("devices_narrow",{n:u})):g,a=M(t.t("devices_none")),l=e.deviceQuery;if(o==="other"){let u=ru(i,n.area_id).map(p=>({...p,ids:p.ids.filter(_=>$i(l,`${W(i,_,p.name)} ${_} ${p.name}`))})),{taken:d,left:f}=Sf(u,Aa),h=u.map((p,_)=>d[_].length>0?m`<div class="nf-dev-area">${p.name}</div>${d[_].map(y=>r(y,!1,p.name))}`:g);return d.some(p=>p.length>0)?m`<div class="nf-room-list">${h}</div>${s(f)}`:a}let c=ou(i).filter(u=>$i(l,`${W(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,Aa).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,Aa))}`:a}function b0(t,e,n,r,o,i,s){let{hass:a}=t,l=a?ye(a,n).filter(b=>Mt(Ne(a,b))):[];if(!n.area_id)return M(t.t("devices_none_area"));if(l.length===0)return M(t.t("devices_none"));let c=a?kn(a,l):[],u=c.map(b=>b.primary).filter(b=>!o.has(b)),d=e.deviceQuery,f=(t.floor?.placements??[]).filter(b=>X(b.entity_id)==="light"&&(b.mount??"ceiling")==="ceiling"&&N([b.x,b.z],n.points)).length,h=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${d} @input=${b=>e.deviceQuery=b.target.value} />`,p=b=>$i(d,W(a,b,i),b),_=b=>{let v=b.others.filter(p),w=e.isUnfolded(b.primary)||!!d.trim()&&v.length>0;return!p(b.primary)&&v.length===0?g:m`${r(b.primary)}
      ${b.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(b.primary)}>${w?t.t("devices_less"):t.t("devices_more",{n:b.others.length})}</button>`:g}
      ${w?(d.trim()?v:b.others).map(x=>r(x,!0)):g}`},y=()=>s.confirm(t.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${t.admin&&f>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(n)}>${t.t("lights_spread")}</button>`:g}
    ${l.length>8?h:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${t.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${y}>${t.t("devices_place_all_n",{n:u.length})}</button>`:g}
    ${M(t.t("devices_hint"))}`}function Ta(t,e,n,r){let{hass:o}=t,i=n.area_id?o?.areas?.[n.area_id]?.name:void 0,s=xi(t.floor,n),a=g0(t,n,s,kf(t.doc,n),i,r),l=t.admin?e.deviceSource:"area",c=o?kn(o,ye(o,n).filter(f=>Mt(Ne(o,f)))).length:0,u=[["area",`${t.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",t.t("devices_src_other")],["none",t.t("devices_src_none")]],d=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${e.deviceQuery} @input=${f=>e.deviceQuery=f.target.value} />`;return m`<section>
    <h3>${t.t("devices")}</h3>
    ${M(t.t("devices_panel_hint"))}
    ${t.admin?m`<div class="nf-seg nf-dev-source">${u.map(([f,h])=>m`<button aria-pressed=${l===f} @click=${()=>e.deviceSource=f}>${h}</button>`)}</div>`:g}
    ${l!=="area"?m`${d}${_0(t,e,n,a,l)}`:b0(t,e,n,a,s,i,r)}
  </section>`}function Mf(t,e,n){let{hass:r}=t;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};n({climate:Object.values(c).every(u=>u==null)?null:c})},s=(a,l)=>{let c=iu(r,t.floor??null,{...e,climate:null},a),u=H(r,y=>he(y)&&r.states[y]?.attributes.device_class===xs[a]),d=$f(u,y=>(Tt(r,y)===e.area_id?0:1)+($s(r,y)?0:2)),f=[e.climate?.[a]??null].flat(),h=y=>{let b=y.filter(v=>!!v&&v!=="none");i(a,y[0]==="none"?"none":b.length>1?b:b[0]??null)},_=f[0]&&f[0]!=="none"?[...f,null]:f;return _.map((y,b)=>P(t,b?t.t("climate_more"):l,y,b?void 0:c[0]??null,d,v=>h(_.map((w,x)=>x===b?v:w))))};return m`<details class="nf-points" ?open=${o}>
    <summary>${t.t("climate")}</summary>
    <div class="nf-form">${s("temperature",t.t("climate_temperature"))} ${s("humidity",t.t("climate_humidity"))} ${s("co2",t.t("climate_co2"))}</div>
    ${M(t.t("climate_hint"))}
  </details>`}var za="metric",Ef=t=>{za=t==="imperial"?"imperial":"metric"};var Rf=.3048;function fe(t,e,n=2,r=za){if(r==="metric")return`${U(t,e,n)} m`;let o=e<0?"\u2212":"",i=Math.round(Math.abs(e)/.0254*2),s=Math.floor(i/24),a=i-s*24,l=`${Math.floor(a/2)}${a%2?"\xBD":""}`;return s?`${o}${s}\u2032 ${l}\u2033`:`${o}${l}\u2033`}function Ee(t,e,n=za){return n==="metric"?`${U(t,e,1)} m\xB2`:`${U(t,e/(Rf*Rf),0)} ft\xB2`}var y0=.15,w0=(t,e)=>Math.abs((t-e+540)%360-180);function v0(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Q(V(i,n),r))<.02&&Math.abs(Q(V(a,n),r))<.02}))}function Da(t,e,n,r){let o=e.points,[i,s]=[o[n],o[(n+1)%o.length]],a=pe(V(s,i)),l=_e(o)>=0?1:-1,c=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[-c[1]*l||0,c[0]*l||0],d=c[0]*u[1]-c[1]*u[0]>0,f=e.wall_heights?.[n],h=e.ceiling??t.height,p=typeof f=="number"?f:Array.isArray(f)?Math.max(...f.map(b=>b??h)):h,_=e.wall_slopes?.[n],y=typeof _=="number"&&typeof f=="number"?_:p;return{origin:d?i:s,along:d?c:[-c[0],-c[1]],normal:u,length:a,face:v0(t,e,i,u)?r/2:0,heightLeft:d?p:y,heightRight:d?y:p}}function Pa(t,e){let n=V(e,t.origin);return{u:Q(n,t.along),depth:Q(n,t.normal)-t.face}}function k0(t,e){let n=t.rooms.find(s=>s.id===e.room_id);if(!n||e.wall)return null;let[r,o]=[n.points[e.edge],n.points[(e.edge+1)%n.points.length]];if(!r||!o)return null;let i=pe(V(o,r))||1;return[r[0]+(o[0]-r[0])*e.offset/i,r[1]+(o[1]-r[1])*e.offset/i]}var Af=t=>G(t.type)?.mount==="wall"||t.type==="lamp_wall"||t.mount_y!=null;function Ff(t,e,n){let r=[];for(let i of t.openings){let s=k0(t,i);if(!s)continue;let{u:a,depth:l}=Pa(n,s);Math.abs(l+n.face)>.3||a<-.01||a>n.length+.01||r.push({id:i.id,kind:"opening",type:i.type,x0:a-i.width/2,x1:a+i.width/2,y0:i.sill,y1:i.sill+i.height,lifts:i.type==="window"})}let o=Math.atan2(-n.normal[0],n.normal[1])*180/Math.PI;for(let i of t.furniture){if(!N([i.x,i.z],e.points)||w0(i.rotation,o)>20)continue;let{u:s,depth:a}=Pa(n,[i.x,i.z]);if(a-i.d/2>y0||s<0||s>n.length)continue;let l=At(t,i);r.push({id:i.id,kind:"furniture",type:i.type,x0:s-i.w/2,x1:s+i.w/2,y0:l,y1:l+i.h,lifts:Af(i)})}return r.sort((i,s)=>+(i.kind==="furniture")-+(s.kind==="furniture")||i.x0-s.x0)}var oo=t=>Math.round(t*1e3)/1e3;function Tf(t,e,n,r){let o=Pa(t,[e.x,e.z]).depth,i=Math.min(t.length-e.w/2,Math.max(e.w/2,n+e.w/2)),s=[t.origin[0]+t.along[0]*i+t.normal[0]*(o+t.face),t.origin[1]+t.along[1]*i+t.normal[1]*(o+t.face)];return{x:oo(s[0]),z:oo(s[1]),...r!==null&&Af(e)?{mount_y:oo(Math.max(0,r))}:{}}}function zf(t,e,n,r,o){let[i]=[e.points[n.edge]],s=Math.min(t.length-n.width/2,Math.max(n.width/2,r+n.width/2)),a=pe(V(i,t.origin))<1e-6?s:t.length-s;return{offset:oo(a),...o!==null&&n.type==="window"?{sill:oo(Math.max(0,o))}:{}}}var Pf=.01,Df=t=>Math.round(t/Pf)*Pf,Ia=class extends oe{static properties={host:{attribute:!1},doc:{attribute:!1},roomId:{},edge:{type:Number},_sel:{state:!0},_drag:{state:!0}};constructor(){super(),this._sel=null,this._drag=null}get room(){return this.host.floor?.rooms.find(e=>e.id===this.roomId)}frame(){let e=this.room;return e&&this.host.floor?Da(this.host.floor,e,this.edge,this.host.doc.settings.wall_interior):null}boxes(){let e=this.room,n=this.frame();return e&&n&&this.host.floor?Ff(this.host.floor,e,n):[]}place(e,n,r){let o=this.room,i=this.frame();!o||!i||this.host.change((s,a)=>{if(e.kind==="furniture"){let l=a.furniture.find(c=>c.id===e.id);l&&Object.assign(l,Tf(i,l,n,e.lifts?r:null))}else{let l=a.openings.find(u=>u.id===e.id),c=a.rooms.find(u=>u.id===l?.room_id);l&&c&&Object.assign(l,zf(c.id===o.id?i:Da(a,c,l.edge,this.host.doc.settings.wall_interior),c,l,n,e.lifts?r:null))}})}toWall(e){let r=this.renderRoot.querySelector("svg").getScreenCTM()?.inverse();if(!r)return[0,0];let o=new DOMPoint(e.clientX,e.clientY).matrixTransform(r);return[o.x,-o.y]}down(e,n){if(this._sel=n.id,!this.host.admin)return;e.currentTarget.setPointerCapture(e.pointerId);let[r,o]=this.toWall(e);this._drag={id:n.id,x0:n.x0,y0:n.y0,startU:r,startY:o,fromX:n.x0,fromY:n.y0}}move(e,n){let r=this._drag;if(!r||r.id!==n.id)return;let[o,i]=this.toWall(e),s=this.frame(),a=n.x1-n.x0,l=Math.min((s?.length??0)-a,Math.max(0,Df(r.fromX+o-r.startU))),c=n.lifts?Math.max(0,Df(r.fromY+i-r.startY)):r.fromY;this._drag={...r,x0:l,y0:c}}up(e){let n=this._drag;this._drag=null,!(!n||n.id!==e.id||Math.abs(n.x0-n.fromX)<1e-6&&Math.abs(n.y0-n.fromY)<1e-6)&&this.place(e,n.x0,n.y0)}nameOf(e){if(e.kind==="furniture")return this.host.floor?.furniture.find(o=>o.id===e.id)?.name||qe(this.host.hass,e.type);let n=this.host.floor?.openings.find(r=>r.id===e.id);return n?this.host.t(`preset_${yn(n)}`):e.type}updated(e){(e.has("edge")||e.has("roomId"))&&(this._sel=null)}render(){let e=this.host.t,n=this.room,r=this.frame();if(!n||!r)return g;let o=n.points.length,i=h=>fe(this.host.hass,h),s=this.boxes().map(h=>this._drag?.id===h.id?{...h,x1:this._drag.x0+(h.x1-h.x0),y1:this._drag.y0+(h.y1-h.y0),x0:this._drag.x0,y0:this._drag.y0}:h),a=Math.max(r.heightLeft,r.heightRight,...s.map(h=>h.y1)),l=.35,c=`${-l} ${-(a+l)} ${r.length+2*l} ${a+2*l+.25}`,u=s.find(h=>h.id===this._sel)??null,d=h=>{let p=Math.min(.14,Math.max(.07,(h.x1-h.x0)/7));return R`<text x=${(h.x0+h.x1)/2} y=${-(h.y0+h.y1)/2} font-size=${p} text-anchor="middle" dominant-baseline="middle">${this.nameOf(h)}</text>`},f=u?R`<g class="dim">
          <line x1="0" x2=${u.x0} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${u.x0/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(u.x0)}</text>
          <line x1=${u.x1} x2=${r.length} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${(u.x1+r.length)/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(r.length-u.x1)}</text>
          ${u.y0>.005?R`<line x1=${(u.x0+u.x1)/2} x2=${(u.x0+u.x1)/2} y1="0" y2=${-u.y0} /><text x=${(u.x0+u.x1)/2+.05} y=${-u.y0/2} font-size="0.11">${i(u.y0)}</text>`:g}
        </g>`:g;return m`<div class="backdrop" @click=${h=>h.target===h.currentTarget&&this.close()}>
      <div class="sheet" role="dialog" aria-label=${e("wall_view")}>
        <header>
          <b>${e("wall_view")} · ${n.name||e("room")} · ${e("wall_n",{a:this.edge+1,b:(this.edge+1)%o+1})}</b>
          <span class="muted">${i(r.length)}</span>
          <span class="grow"></span>
          <button aria-label=${e("wall_view_prev")} title=${e("wall_view_prev")} @click=${()=>this.edge=(this.edge-1+o)%o}>‹</button>
          <button aria-label=${e("wall_view_next")} title=${e("wall_view_next")} @click=${()=>this.edge=(this.edge+1)%o}>›</button>
          <button aria-label=${e("close")} @click=${()=>this.close()}>✕</button>
        </header>
        <svg viewBox=${c} preserveAspectRatio="xMidYMid meet" @pointerdown=${h=>h.target===h.currentTarget&&(this._sel=null)}>
          <polygon class="wall" points=${`0,0 ${r.length},0 ${r.length},${-r.heightRight} 0,${-r.heightLeft}`} />
          <line class="floor" x1=${-l} x2=${r.length+l} y1="0" y2="0" />
          ${s.map(h=>R`<g class="box ${h.kind} ${h.type} ${h.id===this._sel?"sel":""} ${this.host.admin?"movable":""}"
              @pointerdown=${p=>this.down(p,h)}
              @pointermove=${p=>this.move(p,h)}
              @pointerup=${()=>this.up(h)}
              @pointercancel=${()=>this._drag=null}>
              <rect x=${h.x0} y=${-h.y1} width=${Math.max(.01,h.x1-h.x0)} height=${Math.max(.01,h.y1-h.y0)} rx="0.02" />
              ${d(h)}
            </g>`)}
          ${f}
        </svg>
        <footer>
          ${u?m`<b>${this.nameOf(u)}</b>
                <label
                  >${e("wall_view_left")}
                  <input type="number" step="0.01" min="0" .value=${u.x0.toFixed(2)} ?disabled=${!this.host.admin} @change=${h=>this.place(u,Number(h.target.value),u.y0)}
                /></label>
                ${u.lifts?m`<label
                      >${e(u.kind==="opening"?"sill":"wall_view_height")}
                      <input type="number" step="0.01" min="0" .value=${u.y0.toFixed(2)} ?disabled=${!this.host.admin} @change=${h=>this.place(u,u.x0,Number(h.target.value))}
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
  `};customElements.get("nf-wall-view")||customElements.define("nf-wall-view",Ia);function x0(t,e){let n=new Set([...Object.keys(t),...Object.keys(e)]);if(n.size===0)return 1/0;let r=0;for(let o of n)r+=Math.min(Math.abs((t[o]??-100)-(e[o]??-100)),40)**2;return Math.sqrt(r/n.size)}function If(t,e){if(Object.keys(e).length===0)return{room:null,distance:1/0,margin:0};let n=new Map;for(let s of t){let a=x0(s.rssi,e);a<(n.get(s.room)??1/0)&&n.set(s.room,a)}let r=[...n].sort((s,a)=>s[1]-a[1]);if(r.length===0)return{room:null,distance:1/0,margin:0};let[o,i]=r[0];return i>18?{room:null,distance:i,margin:0}:{room:o,distance:i,margin:r.length>1?r[1][1]-i:18}}var $0=t=>{let e=[...t].sort((r,o)=>r-o),n=e.length>>1;return e.length%2?e[n]:(e[n-1]+e[n])/2};function S0(t){let e={},n=new Set(t.flatMap(r=>Object.keys(r)));for(let r of n){let o=t.filter(i=>r in i).map(i=>i[r]);o.length*2>t.length&&(e[r]=Math.round($0(o)*10)/10)}return e}function Of(t,e,n=3){let r=e.filter(s=>Object.keys(s).length>0);if(r.length===0)return[];let o=Math.max(1,Math.min(n,Math.floor(r.length/3))),i=[];for(let s=0;s<o;s++){let a=r.slice(Math.floor(s*r.length/o),Math.floor((s+1)*r.length/o)),l=S0(a);Object.keys(l).length>0&&i.push({room:t,rssi:l})}return i}var Lf=(t,e,n)=>[...t.filter(r=>r.room!==e),...n],Hf=t=>Math.max(0,Math.min(1,(t+95)/50));var M0=1500,La=class extends oe{static properties={host:{attribute:!1},doc:{attribute:!1},_found:{state:!0},_pick:{state:!0},_name:{state:!0},_tag:{state:!0},_room:{state:!0},_scan:{state:!0},_samples:{state:!0},_error:{state:!0}};timer=0;recordStarted=0;constructor(){super(),this._found=null,this._pick="",this._name="",this._tag=null,this._room="",this._scan=null,this._samples=null,this._error=""}createRenderRoot(){return this}get tags(){return this.host.doc.settings.ble?.tags??[]}get rooms(){let e=this.host.doc.floors;return e.flatMap(n=>n.rooms.map(r=>({id:r.id,label:e.length>1?`${n.name} \xB7 ${r.name}`:r.name})))}connectedCallback(){super.connectedCallback(),this.loadDevices()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.timer)}updated(e){e.has("_tag")&&this.restartPolling()}async loadDevices(){try{this._found=await this.host.hass.callWS({type:"nextfloor/ble/devices"})}catch(e){this._error=String(e?.message??e)}}restartPolling(){if(window.clearInterval(this.timer),this._scan=null,!this._tag)return;let e=()=>{this.pollOnce()};e(),this.timer=window.setInterval(e,M0)}async pollOnce(){let e=this.tags.find(n=>n.id===this._tag);if(!(!e||!this.host.hass))try{let n=await this.host.hass.callWS({type:"nextfloor/ble/scan",...e.entity?{entity:e.entity}:{address:e.address}});this._scan=n,this._error="",this._samples&&(this._samples=[...this._samples,Object.fromEntries(Object.entries(n.readings).map(([r,o])=>[r,o.rssi]))],Date.now()-this.recordStarted>=30*1e3&&this.finishRecording(e,n))}catch(n){this._error=String(n?.message??n)}}reading(){return Object.fromEntries(Object.entries(this._scan?.readings??{}).map(([e,n])=>[e,n.rssi]))}startRecording(){this._room&&(this.recordStarted=Date.now(),this._samples=[])}finishRecording(e,n){let r=this._samples??[];this._samples=null;let o=Of(this._room,r);if(o.length===0)return;let i=Object.fromEntries(Object.entries(n.readings).map(([s,a])=>[s,a.name]));this.update2(e.id,s=>{s.prints=Lf(s.prints,this._room,o),s.scanners={...s.scanners??{},...i}})}update2(e,n){this.host.change(r=>{let o=r.settings.ble?.tags.find(i=>i.id===e);o&&n(o)})}addTag(){let e=this._pick;if(!e)return;let n=e.startsWith("device_tracker."),r=this._found?.devices.find(s=>s.address===e),o=this._name.trim()||r?.name||this.host.hass?.states[e]?.attributes.friendly_name||e,i={id:I("ble"),name:String(o).slice(0,60),prints:[],...n?{entity:e}:{address:e}};this.host.change(s=>{s.settings.ble={tags:[...s.settings.ble?.tags??[],i]}}),this._tag=i.id,this._pick="",this._name=""}removeTag(e){this.host.change(n=>{let r=(n.settings.ble?.tags??[]).filter(o=>o.id!==e);n.settings.ble=r.length?{tags:r}:null}),this._tag===e&&(this._tag=null)}bars(e){let n=this.host.t,r=this._scan,o=Object.entries(r?.readings??{}).sort((i,s)=>s[1].rssi-i[1].rssi);return m`<div class="nf-ble-bars">
      ${o.length===0?m`<p class="nf-sub">${r&&!r.available?n("ble_unavailable"):r?.address===null&&e.entity?n("ble_no_address"):n("ble_none_heard")}</p>`:o.map(([i,s])=>m`<div class="nf-ble-row" title=${i}>
            <span class="nf-ble-name">${s.name}</span>
            <span class="nf-ble-track"><span class="nf-ble-fill" style="width:${Math.round(Hf(s.rssi)*100)}%"></span></span>
            <span class="nf-ble-db">${Math.round(s.rssi)}</span>
          </div>`)}
      ${o.length===1?m`<p class="nf-sub">${n("ble_one_scanner")}</p>`:g}
    </div>`}learn(e){let n=this.host.t,r=this.rooms,o=If(e.prints,this.reading()),i=c=>r.find(u=>u.id===c)?.label??null,s=c=>e.prints.filter(u=>u.room===c).length,a=this._samples!==null,l=a?Math.max(0,30-Math.round((Date.now()-this.recordStarted)/1e3)):0;return m`${this.bars(e)}
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
      </div>`}};customElements.get("nf-ble-locate")||customElements.define("nf-ble-locate",La);var R0=new URL(import.meta.url),E0=new URL("./nextfloor-3d.js?v=0485df4a7110",R0).href,Cf;function un(){return Cf??=import(E0),Cf}var Nf=["lights","seating","tables","storage","beds","kitchen","appliances","bath","media","office","tech","climate","energy","garden","plants","kids","fitness","pets","workshop","music","season","pictures","vehicles","building","decor"],A0={sofa:"seating",armchair:"seating",stool:"seating",chair:"seating",bench:"seating",corner_bench:"seating",bar_stool:"seating",office_chair:"office",coffee_table:"tables",table:"tables",table_round:"tables",desk:"office",worktop:"kitchen",tv_board:"media",tv_wall:"media",sideboard:"storage",shelf:"storage",tall_cabinet:"storage",wardrobe:"storage",dresser:"storage",nightstand:"beds",coat_rack:"storage",plant:"plants",rug:"decor",kitchen:"kitchen",kitchen_wall:"kitchen",kitchen_tall:"kitchen",island:"kitchen",sink:"kitchen",stove:"kitchen",dishwasher:"appliances",fridge:"appliances",washer:"appliances",dryer:"appliances",robot_vacuum:"appliances",bed:"beds",bunk_bed:"beds",bathtub:"bath",shower:"bath",wc:"bath",washbasin:"bath",radiator:"climate",stairs:"building",parking:"vehicles",ceiling_fan:"lights"},F0=[[/xmas|advent|window_star|candle_arch|reindeer|pumpkin|easter|snowman|gift_pile|lights_outdoor/,"season"],[/^frame_|^canvas$|^poster$|picture_ledge/,"pictures"],[/piano|drum_kit|guitar|synth|mic_stand|vinyl|easel|studio_monitor|mixing_desk/,"music"],[/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/,"lights"],[/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/,"pets"],[/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/,"building"],[/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|herb_planter|flower|raised_bed|greenhouse|ficus|cactus|bonsai|living_wall|vertical_garden/,"plants"],[/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/,"kids"],[/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/,"fitness"],[/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna|oil_|expansion_vessel|water_tank|infrared|cold_bath/,"climate"],[/wallbox|inverter|battery|solar|meter|fuse_box|grid/,"energy"],[/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower|welder|ev_bike_charger|tool_chest|parts_cabinet/,"workshop"],[/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/,"media"],[/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/,"office"],[/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket|co_detector|presence_|water_leak|air_quality|doorbell/,"tech"],[/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line|kamado|pizza_oven|fire_pit|sandbox|wood_pile|bird_house|cistern|pond|water_feature|beach_chair/,"garden"],[/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|urinal|wt_\d|handtuch|seife|wc/,"bath"],[/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray|espresso|air_fryer|water_bar|thermo_cooker/,"appliances"],[/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/,"kitchen"],[/bed|boxspring|futon|nightstand|canopy|mattress/,"beds"],[/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook|floor_cushion|tatami/,"seating"],[/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/,"tables"],[/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest|locker/,"storage"]];function T0(t){if(t.vehicle)return"vehicles";if(t.climate)return"climate";if(!t.type.startsWith("pack:"))return t.lamp?"lights":A0[t.type]??"decor";let e=F0.find(([n])=>n.test(t.id));return e?e[1]:t.lamp?"lights":"decor"}var Bf=[[/k(u|ü)che|kitchen|kochen/,["kitchen","appliances","tables","seating","storage","plants","decor"]],[/wohn|living|lounge|salon/,["seating","tables","storage","media","plants","decor","climate","tech"]],[/\bess|dining/,["tables","seating","storage","plants","decor","media"]],[/schlaf|bed|gast|guest/,["beds","storage","seating","tables","decor","plants","climate","media"]],[/kind|kids|child|baby|spiel|play|nursery/,["kids","beds","storage","seating","tables","decor"]],[/bad|bath|wc|toilet|dusch|shower|sauna/,["bath","appliances","storage","climate","plants"]],[/b(u|ü)ro|office|arbeit|study|work/,["office","tech","storage","seating","tables","plants"]],[/kino|cinema|media|game|gaming|hifi/,["media","seating","tables","storage","office"]],[/fitness|gym|sport|training/,["fitness","media","storage","climate"]],[/garage|carport|stellplatz|parking/,["vehicles","workshop","energy","storage","garden"]],[/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/,["workshop","storage","appliances","energy","climate","fitness","tech"]],[/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/,["appliances","climate","energy","storage","tech","bath"]],[/flur|diele|hall|entr|eingang|corridor|treppe|stair/,["storage","seating","decor","plants","building"]],[/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/,["garden","plants","seating","tables","pets","kids"]]];function Ha(t){let e=(t??"").toLowerCase(),n=Bf.find(([r])=>r.test(e));return n?new Set(["lights",...n[1]]):null}function Ca(t){let e=(t??"").toLowerCase();return Bf.find(([n])=>n.test(e))?.[1][0]??null}var Wf=t=>t==="garden"||t==="plants"||t==="vehicles",Vf=/_(\d+(?:x\d+)?)$/;function Kf(t){let e=new Map;for(let n of t){let r=T0(n),o=n.type.startsWith("pack:")&&!n.vehicle?n.id.replace(Vf,""):n.id,i=`${n.source}:${o}`,s=e.get(i);s&&s.category===r?s.entries.push(n):e.set(s?`${i}:${n.id}`:i,{key:s?`${i}:${n.id}`:i,category:r,entries:[n]})}for(let n of e.values())n.entries.sort((r,o)=>r.size[0]-o.size[0]||r.size[1]-o.size[1]);return[...e.values()]}function Gf(t,e){let n=o=>Math.round(o*100);return e.some(o=>o!==t&&n(o.size[0])===n(t.size[0]))?Vf.exec(t.id)?.[1]??`${n(t.size[0])}\xD7${n(t.size[2])}`:`${n(t.size[0])}`}function Uf(t,e,n=12){return[e,...t.filter(r=>r!==e)].slice(0,n)}var jf=t=>t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),Zf=t=>jf(t).split(/\s+/).filter(Boolean),qf=(t,e)=>{let n=jf(e);return t.every(r=>n.includes(r))};function Yf(){let e=navigator.deviceMemory??8,n=navigator.hardwareConcurrency||8;return e<=3||n<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Xf=112,z0="nextfloor-thumbs";function P0(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0).toString(36)}function Na(t){let e=G(t);return`${t}|${e?P0(JSON.stringify(e)):"b"}|${Xf}`}function D0(){return new Promise(t=>{try{let e=indexedDB.open(z0,1);e.onupgradeneeded=()=>e.result.createObjectStore("thumbs"),e.onsuccess=()=>t(e.result),e.onerror=()=>t(null)}catch{t(null)}})}var Ba=class{enabled=!Yf();memory=new Map;waiting=new Map;queue=[];db=null;running=!1;packs=[];cached(e){return this.memory.get(Na(e))}get(e){let n=Na(e),r=this.memory.get(n);return r?Promise.resolve(r):new Promise(o=>{let i=this.waiting.get(n);if(i)return void i.push(o);this.waiting.set(n,[o]),this.lookUp(e,n)})}settle(e,n){n&&this.memory.set(e,n);for(let r of this.waiting.get(e)??[])r(n);this.waiting.delete(e)}async lookUp(e,n){this.db??=D0();let r=await this.db,o=r?await new Promise(i=>{try{let s=r.transaction("thumbs").objectStore("thumbs").get(n);s.onsuccess=()=>i(typeof s.result=="string"?s.result:null),s.onerror=()=>i(null)}catch{i(null)}}):null;if(o)return this.settle(n,o);this.queue.push(e),this.pump()}pump(){if(this.running)return;let e=this.queue.shift();if(!e)return;this.running=!0;let n=window.requestIdleCallback;(o=>n?n(o,{timeout:300}):setTimeout(o,16))(async()=>{let o=Na(e),i=null;try{let[s,a,l]=st(e);i=(await un()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Oo[e]??null},Xf,[...this.packs]),this.keep(o,i)}catch{i=null}this.settle(o,i),this.running=!1,this.pump()})}async keep(e,n){let r=await this.db;try{r?.transaction("thumbs","readwrite").objectStore("thumbs").put(n,e)}catch{}}},Ct=new Ba,io=null,I0=t=>{for(let e of t)e.isIntersecting&&e.target.visible()},Wa=class extends oe{static properties={type:{},_url:{state:!0}};static styles=le`
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
  `;constructor(){super(),this.type="",this._url=null}connectedCallback(){super.connectedCallback(),Ct.enabled&&(this._url=Ct.cached(this.type)??null,!this._url&&(io??=new IntersectionObserver(I0,{rootMargin:"120px"}),io.observe(this)))}disconnectedCallback(){super.disconnectedCallback(),io?.unobserve(this)}updated(e){e.has("type")&&e.get("type")!==void 0&&(this._url=Ct.cached(this.type)??null,!this._url&&Ct.enabled&&io?.observe(this))}visible(){io?.unobserve(this);let e=this.type;Ct.get(e).then(n=>{this.type===e&&(this._url=n)})}render(){return this._url?m`<img src=${this._url} alt="" />`:g}};customElements.get("nf-thumb")||customElements.define("nf-thumb",Wa);var Qf="nextfloor.library2",O0={language:"en"},Si=class{onChange;text="";saved;shown=null;picked=new Map;constructor(e){this.onChange=e,this.saved={folded:{},favourites:[],recent:[],flags:["room"]};try{let n=localStorage.getItem(Qf);n&&(this.saved={...this.saved,...JSON.parse(n)})}catch{}}store(e){this.saved={...this.saved,...e},this.onChange();try{localStorage.setItem(Qf,JSON.stringify(this.saved))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e,n){return this.saved.folded[e]??n}toggle(e,n){this.store({folded:{...this.saved.folded,[e]:!this.isOpen(e,n)}})}has(e){return this.saved.flags.includes(e)}flip(e){this.store({flags:this.has(e)?this.saved.flags.filter(n=>n!==e):[...this.saved.flags,e]})}get favourites(){return this.saved.favourites}isFavourite(e){return this.saved.favourites.includes(e)}toggleFavourite(e){this.store({favourites:this.isFavourite(e)?this.saved.favourites.filter(n=>n!==e):[e,...this.saved.favourites]})}get recent(){return this.saved.recent}used(e){this.store({recent:Uf(this.saved.recent,e)})}pickedOf(e){let n=this.picked.get(e.key);return e.entries.find(r=>r.type===n)??e.entries[0]}pick(e,n){this.picked.set(e.key,n),this.onChange()}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,n,r){let o=n.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=st(e),c=(await un()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:Oo[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function L0(t,e){let n=t.hass?.language??"en",o=[...[...new Set(Object.values(Wc).flat())].map(a=>({type:a,source:"builtin",id:a,size:Je[a],lamp:ce(a),electric:Et(a)})),...e.flatMap(a=>a.items.map(l=>({type:de(a.id,l.id),source:a.id,id:l.id,size:l.size,lamp:!!l.light,electric:!!l.electric,vehicle:!!l.vehicle,climate:!!l.climate})))],i=new Map(e.map(a=>[a.id,Oe(a,n)])),s=new Map(e.flatMap(a=>a.items.map(l=>[de(a.id,l.id),l])));return Kf(o).map(a=>{let l=a.entries[0],c=s.get(l.type),u=c?Ye(c,l.type,n):t.t(`furn_${l.type}`),d=a.entries.length>1&&u.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i,"").trim()||u,f=a.entries.map(h=>{let p=s.get(h.type);return p?[...Object.values(p.name),Ye(p,h.type,n)].join(" "):$e(O0,`furn_${h.type}`)}).join(" ");return{card:a,label:d,search:`${f} ${t.t(`lib_cat_${a.category}`)}`,from:i.get(l.source)??"NextFloor"}})}var H0=(t,e)=>qf(e,`${t.label} ${t.search} ${t.from} ${t.card.entries.map(n=>n.id.replace(/_/g," ")).join(" ")}`),C0=t=>t.lamp?"light":t.electric?"switch":null;function N0(t,e,n,r){let o=t.t,i=e.pickedOf(n.card),[s,a]=i.size,l=C0(i),c=f=>{e.showPreview(i.type,f.currentTarget,r.packs)},u=()=>{e.used(i.type),r.add(i.type)},d=e.isFavourite(i.type);return m`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${l?o(l==="light"?"lib_badge_light":"lib_badge_electric"):n.label}
      @click=${u}
      @mouseenter=${c}
      @focus=${c}
      @mouseleave=${()=>e.hidePreview()}
      @blur=${()=>e.hidePreview()}
    >
      ${Ct.enabled?m`<nf-thumb .type=${i.type}></nf-thumb>`:g}
      <span class="nf-card-name"
        >${n.label}${l?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Ht(l)} /></svg>`:g}</span
      >
      <span class="nf-card-meta">${Math.round(s*100)} × ${Math.round(a*100)} cm · ${n.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${d} title=${o(d?"lib_fav_remove":"lib_fav_add")} @click=${()=>e.toggleFavourite(i.type)}>${d?"\u2605":"\u2606"}</button>
    ${n.card.entries.length>1?m`<div class="nf-card-sizes" role="group" aria-label=${o("lib_sizes")}>
          ${n.card.entries.map(f=>m`<button class="nf-size" aria-pressed=${f===i} @click=${()=>e.pick(n.card,f.type)}>${Gf(f,n.card.entries)}</button>`)}
        </div>`:g}
  </div>`}function ep(t,e,n,r){return m`<div class="nf-cards">${n.map(o=>N0(t,e,o,r))}</div>`}function Va(t,e,n,r,o,i,s){if(o.length===0)return g;let a=e.isOpen(n,s);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>e.toggle(n,s)}>
      <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${r} <span class="nf-lib-count">${o.length}</span>
    </button>
    ${a?ep(t,e,o,i):g}`}function Jf(t,e){return t.flatMap(n=>{let r=e.find(o=>o.card.entries.some(i=>i.type===n));return r?[{...r,card:{...r.card,key:`one:${n}`,entries:r.card.entries.filter(o=>o.type===n)}}]:[]})}function B0(t){let e=Ca(t),n=Ha(t),r=o=>o===e?0:n?.has(o)?1:2;return[...Nf].sort((o,i)=>r(o)-r(i))}function tp(t,e,n,r){let o=t.t;Ct.packs=r.packs;let i=L0(t,r.packs),s=Zf(e.query),a=Ha(n),l=!!a&&e.has("room")&&s.length===0,c=i.filter(f=>{let h=f.card.entries[0];return l&&!a.has(f.card.category)||e.has("linkable")&&!h.lamp&&!h.electric||e.has("lit")&&!h.lamp||e.has("outdoor")&&!Wf(f.card.category)?!1:s.length===0||H0(f,s)}),u=(f,h)=>m`<button class="nf-chip nf-lib-chip" aria-pressed=${e.has(f)} @click=${()=>e.flip(f)}>${h}</button>`,d=s.length>0;return m`<section>
      <h3>${o("furniture_add")}</h3>
      <p class="nf-sub">${n?o("furniture_into",{room:n}):o("furniture_pick_room")}</p>
      <button class="nf-btn nf-lib-studio" title=${o("studio_hint")} @click=${()=>r.studio()}>🛠️ ${o("studio_new")}</button>
      <input
        class="nf-search"
        type="search"
        placeholder=${o("furniture_search")}
        .value=${e.query}
        @input=${f=>e.query=f.target.value}
        @keydown=${f=>f.key==="Escape"&&(e.query="")}
      />
      <div class="nf-lib-chips">
        ${a?u("room",o("lib_for_room",{room:n??""})):g} ${u("linkable",`\u26A1 ${o("lib_linkable")}`)} ${u("lit",`\u{1F4A1} ${o("lib_lit")}`)}
        ${u("outdoor",`\u{1F333} ${o("lib_outdoor")}`)}
      </div>
      ${d&&c.length===0?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${d?ep(t,e,c,r):m`${Va(t,e,"favourites",`\u2605 ${o("lib_favourites")}`,Jf(e.favourites,i),r,!0)}
          ${Va(t,e,"recent",`\u{1F558} ${o("lib_recent")}`,Jf(e.recent.slice(0,6),i),r,!1)}
          ${B0(n).map(f=>Va(t,e,f,o(`lib_cat_${f}`),c.filter(h=>h.card.category===f),r,f===(Ca(n)??"lights")))}
          ${l?m`<button class="nf-btn nf-lib-all" @click=${()=>e.flip("room")}>${o("lib_all_rooms")}</button>`:g}`}
    </section>`}function np(t,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${qe(t.hass,e.type)}</b>
  </div>`:g}function Ka(t,e,n,r=24){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(o<1e-6||Math.abs(n)<1e-4)return[];let i=Math.max(-o*2,Math.min(o*2,n)),s=[(e[0]-t[0])/o,(e[1]-t[1])/o],a=[s[1],-s[0]],l=o*o/4/(2*Math.abs(i))+Math.abs(i)/2,c=2*Math.atan(2*Math.abs(i)/o),u=Math.max(2,Math.min(r,Math.ceil(2*c/Math.PI*180/11.25))),d=[a[0]*Math.sign(i),a[1]*Math.sign(i)],f=[(t[0]+e[0])/2,(t[1]+e[1])/2],h=[f[0]-d[0]*(l-Math.abs(i)),f[1]-d[1]*(l-Math.abs(i))],p=[];for(let _=1;_<u;_++){let y=-c+2*c*_/u;p.push([h[0]+l*(d[0]*Math.cos(y)+s[0]*Math.sin(y)),h[1]+l*(d[1]*Math.cos(y)+s[1]*Math.sin(y))])}return p}var Ga=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Ua(t,e){let n=Math.max(0,e);for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return{piece:r,offset:Math.min(n,o)};n-=o}return{piece:0,offset:0}}var Ae=t=>Math.round(t*1e3)/1e3,ja=t=>t.map(([e,n])=>[Ae(e),Ae(n)]);function rp(t,e){return{id:I("room"),name:e,area_id:null,points:ja(t),floor_material:"wood"}}function op(t){return{...structuredClone(t),id:I("room"),points:ja(t.points.map(([e,n])=>[e+.5,n+.5]))}}function ip(t,e){let n=t.rooms.find(r=>r.id===e);t.rooms=t.rooms.filter(r=>r.id!==e),t.openings=t.openings.filter(r=>r.room_id!==e||r.wall),n&&(t.placements=t.placements.filter(r=>!N([r.x,r.z],n.points)))}function sp(t,e,n){let r=t.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(n-1+r.points.length)%r.points.length;r.points.splice(n,1),r.wall_heights?.splice(n,1),r.wall_slopes?.splice(n,1),r.wall_thickness?.splice(n,1);let i=s=>s.room_id===e&&!s.wall;return t.openings=t.openings.filter(s=>!(i(s)&&(s.edge===n||s.edge===o))).map(s=>i(s)&&s.edge>n?{...s,edge:s.edge-1}:s),!0}function ap(t,e,n){if(!Number.isFinite(n))return null;let r=ue(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:n>.05&&(e==="w"?s=o+n:a=i+n),ja([[o,i],[s,i],[s,a],[o,a]])}function lp(t,e,n,r){return!Number.isFinite(r)||e<0||e>=t.points.length?null:t.points.map((o,i)=>i===e?n===0?[Ae(r),o[1]]:[o[0],Ae(r)]:[o[0],o[1]])}var W0=/^(Raum|Room) \d+$/;function Za(t,e,n){let r=e?n[e]:void 0,o=!t.name||W0.test(t.name)||Object.values(n).some(i=>i.name===t.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function cp(t,e){let n=e.filter(l=>X(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&N([l.x,l.z],t.points));if(n.length<2)return[];let r=ue(t.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,i)))),a=Math.ceil(n.length/s);return n.map((l,c)=>{let u=Math.floor(c/s),d=u===a-1?n.length-s*(a-1):s,f=c-u*s;return{entityId:l.entity_id,x:Ae(r.x0+o/d*(f+.5)),z:Ae(r.z0+i/a*(u+.5))}})}function qa(t,e,n,r){let o=t.rooms.find(u=>u.id===e);if(!o)return;let i=o.points[n],s=o.points[(n+1)%o.points.length];o.points.splice(n+1,0,r);let[a,l]=[o.wall_heights?.[n],o.wall_slopes?.[n]];if(typeof a=="number"&&typeof l=="number"&&o.wall_slopes){let u=Math.hypot(s[0]-i[0],s[1]-i[1]),d=Ae(a+(l-a)*Math.min(1,Math.hypot(r[0]-i[0],r[1]-i[1])/(u||1)));o.wall_slopes.splice(n,1,d,l),o.wall_heights.splice(n+1,0,d)}else o.wall_heights?.splice(n+1,0,o.wall_heights[n]??null),o.wall_slopes?.splice(n+1,0,null);o.wall_thickness?.splice(n+1,0,o.wall_thickness[n]??null);let c=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let u of t.openings)u.room_id!==e||u.wall||(u.edge>n?u.edge+=1:u.edge===n&&u.offset>c&&(u.edge=n+1,u.offset=Ae(u.offset-c)))}var V0=22.5;function up(t,e,n){let r=Math.min(Math.abs(e),t*2),o=t*(1+8/3*(r/Math.max(1e-6,t))**2),i=4*Math.atan(2*r/Math.max(1e-6,t))*180/Math.PI,s=Math.max(2,Math.ceil(i/V0));if(n<=0)return 24;let a=Math.floor(o/(n+.1));return a>=s?a:0}function K0(t,e,n,r){let o=Ga(n);t.forEach((i,s)=>{let{piece:a,offset:l}=Ua(n,e[s]*o),c=Math.hypot(n[a+1][0]-n[a][0],n[a+1][1]-n[a][1]);i.edge=r+a,i.offset=Ae(c>i.width?Math.min(c-i.width/2,Math.max(i.width/2,l)):c/2)})}function dp(t,e,n,r){let o=t.rooms.find(v=>v.id===e);if(!o||n<0||n>=o.points.length||Math.abs(r)<.01)return!1;let i=o.points[n],s=o.points[(n+1)%o.points.length],a=Math.hypot(s[0]-i[0],s[1]-i[1]);if(a<.2)return!1;let[l,c]=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[(i[0]+s[0])/2+c*.02,(i[1]+s[1])/2-l*.02],f=N(u,o.points)?-r:r,h=(v,w)=>t.openings.filter(x=>x.room_id===v.id&&!x.wall&&x.edge===w),p=t.rooms.flatMap(v=>v.points.map((w,x)=>{let k=v.points[(x+1)%v.points.length],$=(A,F)=>Math.abs(A[0]-F[0])<.001&&Math.abs(A[1]-F[1])<.001;return $(w,i)&&$(k,s)?[v,x,!1]:$(w,s)&&$(k,i)?[v,x,!0]:null}).filter(w=>!!w)),_=Math.max(0,...p.flatMap(([v,w])=>h(v,w).map(x=>x.width))),y=up(a,r,_);if(!y)return!1;let b=Ka(i,s,f,y).map(([v,w])=>[Ae(v),Ae(w)]);if(!b.length)return!1;for(let[v,w,x]of p){let k=x?[...b].reverse():b,$=h(v,w),A=v.points[w],F=$.map(T=>Math.min(1,Math.max(0,T.offset/a)));for(let T of $)T.edge=-1;k.forEach((T,D)=>qa(t,v.id,w+D,T)),v.wall_splits?.splice(w+1,0,...k.map(()=>null)),v.wall_splits?.[w]&&(v.wall_splits[w]=null),K0($,F,[A,...k,v.points[(w+k.length+1)%v.points.length]],w)}return!0}function hp(t,e,n){let r=t.walls??[],o=r.findIndex(p=>p.id===e);if(o<0||Math.abs(n)<.01)return[];let i=r[o],s=Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1]),a=t.openings.filter(p=>p.wall===e),l=Math.max(0,...a.map(p=>p.width)),c=up(s,n,l);if(!c)return[];let u=Ka(i.a,i.b,n,c).map(([p,_])=>[Ae(p),Ae(_)]);if(!u.length)return[];let d=[i.a,...u,i.b],f=d.slice(1).map((p,_)=>({...i,id:_===0?i.id:I("wall"),a:d[_],b:p}));r.splice(o,1,...f),t.walls=r;let h=Ga(d);for(let p of a){let{piece:_,offset:y}=Ua(d,p.offset/s*h),b=Math.hypot(d[_+1][0]-d[_][0],d[_+1][1]-d[_][1]);p.wall=f[_].id,p.offset=Ae(b>p.width?Math.min(b-p.width/2,Math.max(p.width/2,y)):b/2)}return f.map(p=>p.id)}var Wn=t=>Math.round(t*1e3)/1e3;function Mi(t,e,n){return[Math.round((e[0]-t[0])/n)*n,Math.round((e[1]-t[1])/n)*n]}var dn=(t,e)=>e?.01:t,Vn=(t,e,n=5)=>Math.hypot(t[0]-e[0],t[1]-e[1])>=n;function fp(t,e,n){return n?Math.abs(e[0]-t[0])>Math.abs(e[1]-t[1])?[e[0],t[1]]:[t[0],e[1]]:e}var Xe=(t,e)=>[Wn(t[0]+e[0]),Wn(t[1]+e[1])];function Ya(t,e,n,r){return[Wn(Math.round((t[0]+n[0]-e[0])/r)*r),Wn(Math.round((t[1]+n[1]-e[1])/r)*r)]}function Xa(t,e,n){let r=Math.atan2(-(e[0]-t[0]),e[1]-t[1])*180/Math.PI;return(Math.round(r/n)*n%360+360)%360}function pp(t,e,n){let r=Math.atan2(e[0]-t[0],-(e[1]-t[1]))*180/Math.PI;return Math.round(r/n)*n}function mp(t,e,n){let r=wn([...t]),o=t[e],i=[Wn(n[0]),Wn(n[1])];return t.map((s,a)=>a===e?i:r?[Math.abs(s[0]-o[0])<1e-6?i[0]:s[0],Math.abs(s[1]-o[1])<1e-6?i[1]:s[1]]:[s[0],s[1]])}var Ri=t=>Math.round(t*1e3)/1e3,gp=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function G0(t,e,n){let r=null,o=n;for(let i of t){let s=gp(i,e);s<o&&([r,o]=[i,s])}return r}function U0(t,e,n){let r=null,o=n.reach;for(let i of t)n.skip&&i.id===n.skip.roomId||i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],[c,u]=[l[0]-s[0],l[1]-s[1]],d=c*c+u*u;if(d<1e-9)return;let f=((e[0]-s[0])*c+(e[1]-s[1])*u)/d;if(f<=0||f>=1)return;let h=[s[0]+f*c,s[1]+f*u],p=gp(h,e),_=(y,b,v)=>Math.min(Math.max(y,Math.min(b,v)),Math.max(b,v));Math.abs(u)<1e-9&&(h[0]=_(Math.round(h[0]/n.grid)*n.grid,s[0],l[0])),Math.abs(c)<1e-9&&(h[1]=_(Math.round(h[1]/n.grid)*n.grid,s[1],l[1])),p<o&&([r,o]=[h,p])});return r}function j0(t,e,n){let r=[Ri(Math.round(e[0]/n.grid)*n.grid),Ri(Math.round(e[1]/n.grid)*n.grid)],o={},[i,s]=[n.reach,n.reach];for(let a of t)Math.abs(a[0]-e[0])<i&&(i=Math.abs(a[0]-e[0]),r[0]=a[0],o.x=a[0]),Math.abs(a[1]-e[1])<s&&(s=Math.abs(a[1]-e[1]),r[1]=a[1],o.z=a[1]);return{point:r,guides:o}}function _p(t,e){let n=e.rooms.flatMap(i=>i.points.filter((s,a)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===a)))),r=G0(n,t,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=U0(e.rooms,t,e);return o?{point:[Ri(o[0]),Ri(o[1])],guides:{point:o}}:j0(n,t,e)}var Ei=(t,e)=>fe(t.host.hass,e);function Z0(t,e){let[n,r]=[t.toScreen(e.start),t.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return R`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${n[0]} y1=${n[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(n[0]+r[0])/2} y=${(n[1]+r[1])/2-10}>${Ei(t,s)}</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return R`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(n[0],r[0])} y=${Math.min(n[1],r[1])} width=${Math.abs(r[0]-n[0])} height=${Math.abs(r[1]-n[1])} />
    <text class="nf-dim" x=${(n[0]+r[0])/2} y=${Math.min(n[1],r[1])-8}>${Ei(t,o)} × ${Ei(t,i)}</text>
  </g>`}function q0(t,e,n,r){let o=[...e,...n?[n]:[]].map(u=>t.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,d)=>{let[f,h]=[t.toScreen(e[d]),t.toScreen(u)];return R`<text class="nf-dim" x=${(f[0]+h[0])/2} y=${(f[1]+h[1])/2-6}>${Ei(t,Math.hypot(u[0]-e[d][0],u[1]-e[d][1]))}</text>`}):g,a=e.map((u,d)=>{let[f,h]=t.toScreen(u),p=d===0&&i;return R`<circle class=${p?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${f} cy=${h} r=${p?9:5} />`}),[l,c]=n?t.toScreen(n):[0,0];return R`<g pointer-events="none">
    ${o.length>1?R`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${n?R`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function bp(t,e,n){let r=e.x!==void 0?t.toScreen([e.x,0])[0]:null,o=e.z!==void 0?t.toScreen([0,e.z])[1]:null,[i,s]=e.point?t.toScreen(e.point):[0,0];return R`<g pointer-events="none">
    ${r!==null?R`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${n.h} />`:g}
    ${o!==null?R`<line class="nf-guide" x1="0" y1=${o} x2=${n.w} y2=${o} />`:g}
    ${e.point?R`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function yp(t,e,n,r,o){return e?Z0(t,e):n!=="polygon"&&n!=="measure"?g:q0(t,r,o,n==="measure")}var se=(t,e,n,r,o="")=>R`<rect class=${o} x=${Math.min(t,n)} y=${Math.min(e,r)} width=${Math.abs(n-t)} height=${Math.abs(r-e)} />`,te=(t,e,n,r,o="")=>R`<line class=${o} x1=${t} y1=${e} x2=${n} y2=${r} />`,vp=(t,e="")=>R`<polygon class=${e} points=${t.map(n=>n.join(",")).join(" ")} />`,re=(t,e,n,r="")=>R`<circle class=${r} cx=${t} cy=${e} r=${n} />`,Qa=(t,e,n,r,o="")=>R`<ellipse class=${o} cx=${t} cy=${e} rx=${n} ry=${r} />`;function Ja(t,e,n){let r=[];for(let o=1;o<n;o++){let i=-t/2+t/n*o;r.push(te(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function wp(t,e,n,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,t*.12):0,s=[se(-t/2,-e/2,t/2,-e/2+o,"nf-sym-fill")];r&&s.push(se(-t/2,-e/2,-t/2+i,e/2,"nf-sym-fill"),se(t/2-i,-e/2,t/2,e/2,"nf-sym-fill"));let a=t-2*i;for(let l=1;l<n;l++){let c=-t/2+i+a/n*l;s.push(te(c,-e/2+o,c,e/2-.02))}return s}function kp(t,e,n,r){if(t==="stairs"&&r?.stair)return Y0(r,e,n);switch(t){case"sofa":return wp(e,n,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return wp(e,n,1,!0);case"bench":return[se(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill")];case"corner_bench":{let o=Math.min(.5,n*.4);return[se(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill"),se(-e/2,-n/2,-e/2+.08,n/2,"nf-sym-fill"),te(-e/2+o,-n/2+o,e/2,-n/2+o),te(-e/2+o,-n/2+o,-e/2+o,n/2)]}case"chair":return[se(-e/2,-n/2,e/2,-n/2+.06,"nf-sym-fill")];case"office_chair":return[re(0,.03,Math.min(e,n)*.36),se(-e*.35,-n/2+.02,e*.35,-n/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[re(0,0,Math.min(e,n)*.42)];case"stool":return[se(-e/2+.04,-n/2+.04,e/2-.04,n/2-.04)];case"table":case"coffee_table":case"desk":{let o=[se(-e/2+.05,-n/2+.05,e/2-.05,n/2-.05)];return t==="desk"&&o.push(te(-.3,-n/2+.1,.3,-n/2+.1,"nf-sym-strong")),o}case"bed":case"bunk_bed":{let o=e>1.2?2:1,i=(e-.2)/o,s=[se(-e/2,-n/2,e/2,-n/2+.07,"nf-sym-fill"),te(-e/2,-n/2+(n-.1)*.36,e/2,-n/2+(n-.1)*.36)];for(let a=0;a<o;a++)s.push(se(-e/2+.13+i*a,-n/2+.12,-e/2+.07+i*(a+1),-n/2+.12+Math.min(.4,n*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Ja(e,n,t==="nightstand"||t==="tall_cabinet"||t==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[se(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),...Ja(e,n,Math.max(2,Math.round(e/.5)))];case"island":return[te(-e/2,n/2-.3,e/2,n/2-.3)];case"fridge":return[te(-e/2+.06,n/2-.04,e/2-.06,n/2-.04,"nf-sym-strong")];case"stove":{let o=Math.min(e,n)*.14;return[re(-e*.22,-n*.2,o),re(e*.22,-n*.2,o*.8),re(-e*.22,n*.2,o*.8),re(e*.22,n*.2,o)]}case"sink":{let o=Math.min(.5,e-.2);return[se(-o/2,-n/2+.1,o/2,n/2-.08),re(0,-n/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[te(-e/2+.08,n/2-.05,e/2-.08,n/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[re(0,.05,Math.min(e,n)*.3),te(-e/2,-n/2+.1,e/2,-n/2+.1)];case"bathtub":return[se(-e/2+.07,-n/2+.07,e/2-.07,n/2-.07),re(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[te(-e/2,-n/2,e/2,n/2),te(e/2,-n/2,-e/2,n/2),re(0,0,.04)];case"wc":return[se(-e/2,-n/2,e/2,-n/2+Math.min(.18,n*.3),"nf-sym-fill"),Qa(0,n*.1,e*.36,n*.3)];case"washbasin":return[Qa(0,.03,e*.34,n*.3)];case"tv_board":return[te(-Math.min(e*.4,.72),-n/2+.14,Math.min(e*.4,.72),-n/2+.14,"nf-sym-strong"),...Ja(e,n,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[te(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[re(0,0,Math.min(e,n)*.45,"nf-sym-fill"),re(0,0,Math.min(e,n)*1.4)];case"lamp_bollard":case"lamp_garden":return[re(0,0,Math.min(e,n)*.5,"nf-sym-fill"),re(0,0,Math.min(e,n)*1.6)];case"parking":return[se(-e/2+.08,-n/2+.08,e/2-.08,n/2-.08),te(-e*.15,n/2-.5,0,n/2-.22,"nf-sym-strong"),te(0,n/2-.22,e*.15,n/2-.5,"nf-sym-strong")];case"robot_vacuum":return[se(-e*.45,-n/2,e*.45,-n/2+n*.3,"nf-sym-fill"),re(0,n*.14,Math.min(e,n)*.47)];case"radiator":{let o=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)o.push(te(-e/2+e/i*s,-n/2,-e/2+e/i*s,n/2));return o}case"lamp_panel":return[se(-e/2+.03,-n/2+.03,e/2-.03,n/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let o=Math.min(e,n)/2,i=[re(0,0,o*.9,"nf-sym-fill"),re(0,0,o*.3)];if(t==="lamp_ceiling"||t==="lamp_pendant")for(let s=0;s<8;s++){let a=s/8*Math.PI*2;i.push(te(Math.cos(a)*o*1.05,Math.sin(a)*o*1.05,Math.cos(a)*o*1.35,Math.sin(a)*o*1.35))}return i}case"ceiling_fan":{let o=Math.min(e,n)/2,i=[re(0,0,.11,"nf-sym-fill")];for(let s=0;s<5;s++){let a=s/5*Math.PI*2;i.push(te(Math.cos(a)*.12,Math.sin(a)*.12,Math.cos(a)*o*.97,Math.sin(a)*o*.97,"nf-sym-strong"))}return[...i,re(0,0,o)]}case"lamp_wall":return[se(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),Qa(0,.01,e*.4,n*.4)];case"led_strip":return[te(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[re(0,0,Math.min(e,n)*.46),re(0,0,Math.min(e,n)*.25)];case"rug":return[se(-e/2+.1,-n/2+.1,e/2-.1,n/2-.1)];case"stairs":{let o=Math.max(3,Math.round(n/.26)),i=[];for(let s=1;s<o;s++)i.push(te(-e/2,n/2-n/o*s,e/2,n/2-n/o*s));return i.push(te(0,n/2-.1,0,-n/2+.25,"nf-sym-strong"),te(-.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong"),te(.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong")),i}default:{let o=G(t);return o?X0(o,e,n):g}}}function Y0(t,e,n){let r=ro(t),o=cn(r,e,n,t.h),i=r.down?"nf-sym-dash":"",s=o.treads.map(l=>vp(l.poly,l.landing?`nf-sym-fill ${i}`:i));o.column>0&&s.push(re(0,0,o.column,"nf-sym-fill"));let a=o.treads.map(yi);for(let l=1;l<a.length;l++)s.push(te(a[l-1][0],a[l-1][1],a[l][0],a[l][1],"nf-sym-strong"));if(a.length&&s.unshift(re(a[0][0],a[0][1],.05,"nf-sym-fill")),a.length>=2){let[l,c]=[a[a.length-2],a[a.length-1]],u=Math.hypot(c[0]-l[0],c[1]-l[1])||1,[d,f]=[(c[0]-l[0])/u,(c[1]-l[1])/u],h=Math.min(.2,o.flight*.3);for(let p of[-1,1])s.push(te(c[0],c[1],c[0]-d*h+f*h*.6*p,c[1]-f*h-d*h*.6*p,"nf-sym-strong"))}return s}function X0(t,e,n){return t.symbol?.length?t.symbol.map(r=>r.shape==="rect"?se((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n,r.fill?"nf-sym-fill":""):r.shape==="circle"?re(r.x*e,r.z*n,r.r*Math.min(e,n)):te(r.x1*e,r.z1*n,r.x2*e,r.z2*n)):dc(t,e,n,t.size[2]).filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?vp([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*n]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*n])]):r.shape==="cyl"&&(r.axis??"y")==="y"?re(r.x*e,r.z*n,Math.min(r.w*e,r.d*n)/2):se((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n))}var el=Math.PI/180,$p=(t,e,n,r)=>{let[o,i]=r,s=R`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=R`<line x1=${n[0]} y1=${n[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return t==="data-rotate"?R`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:R`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function Q0(t,e){let n=e.rotation*el;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=t.toScreen([e.x+r*e.w*Math.cos(n)/2-o*e.d*Math.sin(n)/2,e.z+r*e.w*Math.sin(n)/2+o*e.d*Math.cos(n)/2]);return R`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}var xp=new WeakMap;function J0(t,e){let n=xp.get(e);if(n&&n.states===t.states)return n.links;let r=Be(t,[e]);return xp.set(e,{states:t.states,links:r}),r}function ew(t,e,n){if(!t||!ce(n.type))return!1;let r=J0(t,e).get(n.id)?.entity;return!!sc(r?t.states[r]:void 0,(n.extra_lights??[]).map(o=>t.states[o]))}function Sp(t,e,n){let{host:r,scale:o}=t,i=s=>{let a=s.id===n,l=a&&r.admin&&!s.locked,[c,u]=t.toScreen([s.x,s.z]),d=s.rotation*el,f=Math.min(s.w,s.d)*o>44,h=ew(r.hass,e,s),p=Ce.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${h?" nf-furn-lit":""}${p?" nf-energy-item":""}`,y=s.d/2+Math.max(.3,26/o),b=t.toScreen([s.x-Math.sin(d)*y,s.z+Math.cos(d)*y]),v=t.toScreen([s.x-Math.sin(d)*(s.d/2),s.z+Math.cos(d)*(s.d/2)]),[w,x]=t.toScreen([s.x+Math.sin(d)*(s.d/2+18/o),s.z-Math.cos(d)*(s.d/2+18/o)]);return R`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${kp(s.type,s.w,s.d,s)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${f?R`<text x=${c} y=${u+4}>${qe(r.hass,s.type)}</text>`:g}
      </g>
      ${l?Q0(t,s):g}
      ${a?R`<text class="nf-dim" x=${w} y=${x+4}>${fe(r.hass,s.w)} × ${fe(r.hass,s.d)}</text>`:g}
      ${a&&s.locked?R`<text class="nf-lock" x=${b[0]} y=${b[1]+5}>🔒</text>`:g}
      ${l?$p("data-rotate",s.id,v,b):g}`};return R`<g>${mf(e).map(i)}</g>`}function Mp(t,e,n){let{host:r}=t,o=i=>{let s=X(i.entity_id)??(r.hass?Ne(r.hass,i.entity_id):null);if(!s)return g;let[a,l]=t.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===n,d=(i.rotation??0)*el,f=u&&r.admin&&!i.locked&&eu(i.entity_id,r.hass?.states[i.entity_id]),h=[a-Math.sin(d)*46,l+Math.cos(d)*46],p=In(r,i.entity_id,i.icon);return R`${f?$p("data-aim",i.entity_id,[a,l],h):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${W(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${p?R`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${p}></ha-icon></foreignObject>`:R`<path d=${Ht(s)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${u&&i.locked?R`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return R`<g>${e.placements.map(o)}</g>`}function Rp(t,e,n){return R`${(e.notes??[]).map(r=>{let[o,i]=t.toScreen([r.x,r.z]);return R`<g data-note=${r.id} class=${`nf-note${Eo(r)?" nf-note-due":""}${r.id===n?" nf-note-sel":""}`} transform="translate(${o} ${i})">
      <title>${r.text}</title>
      <rect x="-11" y="-11" width="22" height="22" rx="4" /><text y="5" text-anchor="middle">✎</text>
    </g>`})}`}var Ai=(t,e,n=6)=>R`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r=${n} />`;function Ep(t,e){let{scale:n}=t,r=n>=90?.1:n>=30?.5:1,o=n>=20?1:5,i=t.toWorld(0,0),s=t.toWorld(e.w,e.h),a=[],l=(d,f)=>{for(let h=Math.ceil(i[0]/d)*d;h<=s[0];h+=d){let p=t.toScreen([h,0])[0];a.push(R`<line class=${f} x1=${p} y1="0" x2=${p} y2=${e.h} />`)}for(let h=Math.ceil(i[1]/d)*d;h<=s[1];h+=d){let p=t.toScreen([0,h])[1];a.push(R`<line class=${f} x1="0" y1=${p} x2=${e.w} y2=${p} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,u]=t.toScreen([0,0]);return a.push(R`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),R`<g pointer-events="none">${a}</g>`}function Ap(t){let e=t.host.doc.floors,n=e.findIndex(i=>i.id===t.floorId),r=n>0?e[n-1]:void 0;if(!r)return g;let o=Gc(e,e[n]);return R`<g pointer-events="none">${r.rooms.map(i=>R`<polygon class="nf-ghost" points=${ot(t,i.points)} />`)}${o.map(i=>R`<polygon class="nf-void" points=${ot(t,i)} />`)}</g>`}function Fp(t,e){let n=t.host.floor?.height??2.5;return R`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<n-.01;return R`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${ot(t,r.footprint)} />`})}</g>`}function Tp(t,e,n){let r=o=>{let[i,s]=t.toScreen(be(o.points)),a=ue(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*t.scale>40;return R`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===n?" nf-out-sel":""}`}>
      <polygon points=${ot(t,o.points)} />
      ${l?R`<text x=${i} y=${s+4}>${t.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return R`<g>${e.outdoor.map(r)}</g>`}function zp(t,e,n){let{host:r}=t;if(!e||!r.admin||n!=="select"||r.doc.settings.lock_plan)return g;let o=e.points;return R`${o.map((i,s)=>pi(t,i,o[(s+1)%o.length],"out",e.id,s))}${o.map((i,s)=>R`<g class="nf-vertex" data-out-vertex=${`${e.id}:${s}`}>${Ai(...t.toScreen(i))}</g>`)}`}function Pp(t,e,n,r){let o=e.rooms.find(s=>s.id===n),i=o&&r!==null&&r<o.points.length?[t.toScreen(o.points[r]),t.toScreen(o.points[(r+1)%o.points.length])]:null;return R`<g>${e.rooms.map(s=>R`<polygon data-room=${s.id} class=${s.id===n?"nf-room nf-room-sel":"nf-room"} points=${ot(t,s.points)} />`)}</g>
    ${i?R`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=t.toScreen(be(s.points));return R`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${Ee(t.host.hass,ve(s.points))}</text>`})}</g>`}function Dp(t,e){let n=t.host.doc.energy?.meter;if(!n||n.floor_id!==e.id)return g;let[r,o]=t.toScreen([n.x,n.z]);return R`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function Ip(t,e,n){let{host:r}=t,o=i=>{let[s,a]=[t.toScreen(i.a),t.toScreen(i.b)],l=i.id===n,c=l&&r.admin&&!Fo(i,!0,r.doc.settings);return R`<g data-free-wall=${i.id} class=${`nf-free-wall${l?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
      </g>
      ${c?R`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${Ai(s[0],s[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${Ai(a[0],a[1])}</g>`:g}`};return R`<g>${(e.walls??[]).map(o)}</g>`}function Op(t,e){let n=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=n.length)return[];let[s,a]=[n[i],n[(i+1)%n.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,u]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(d=>{let[f,h]=t.toScreen([s[0]+c*d,s[1]+u*d]);return R`<line class="nf-split-mark" x1=${f-u*7} y1=${h+c*7} x2=${f+u*7} y2=${h-c*7} />`})});return R`${r}`}function Lp(t,e,n){let r=e.points,[o,i]=t.toScreen(be(r)),s=(l,c,u)=>{let[[d,f],[h,p]]=[t.toScreen(l),t.toScreen(c)],[_,y]=[(d+h)/2,(f+p)/2],b=Math.hypot(h-d,p-f),[v,w]=[-(p-f),h-d],x=Math.hypot(v,w)||1;return[v,w]=[v/x,w/x],v*(_-o)+w*(y-i)<0&&([v,w]=[-v,-w]),R`${b>50?R`<text class="nf-dim" x=${_+v*16} y=${y+w*16+4}>${fe(t.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]))}</text>`:g}
      ${b>36?R`<g data-mid=${u} class="nf-mid"><circle cx=${_} cy=${y} r="14" class="nf-hit" /><circle cx=${_} cy=${y} r="6" /><path d="M${_-3} ${y}h6M${_} ${y-3}v6" /></g>`:g}`},a=(l,c)=>{let[u,d]=t.toScreen(l);return R`<g data-vertex=${c} class=${c===n?"nf-vertex nf-vertex-sel":"nf-vertex"}>${Ai(u,d)}</g><text class="nf-vertex-no" x=${u+9} y=${d-9}>${c+1}</text>`};return R`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}function Hp(t,e){let n=e.rooms.flatMap(r=>{if(r.points.length<3)return[];let[o,i]=be(r.points);return r.points.map((s,a)=>{let l=r.points[(a+1)%r.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(c<.4)return g;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=Math.hypot(o-u[0],i-u[1])||1,f=Math.min(.35,d/2),h=[u[0]+(o-u[0])/d*f,u[1]+(i-u[1])/d*f],[p,_]=t.toScreen(h),y=Math.atan2(l[1]-s[1],l[0]-s[0])*180/Math.PI;return y>90&&(y-=180),y<-90&&(y+=180),R`<text class="nf-dim" x=${p} y=${_} transform=${`rotate(${y.toFixed(1)} ${p} ${_})`} text-anchor="middle" dominant-baseline="middle">${fe(t.host.hass,c)}</text>`})});return R`<g pointer-events="none">${n}</g>`}function Cp(t,e,n){let r=t.t;return m`<section>
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
      ${Eo(e)?m`<p class="nf-sub nf-warn nf-wide">${r("note_is_due")}</p>`:M(r("note_due_hint"),"nf-wide")}
      ${E(t,r("note_repeat"),e.repeat_months??0,o=>n.patch({repeat_months:o>=1?Math.min(120,Math.round(o)):null}),1,0)}
      ${e.last_done?m`<p class="nf-sub nf-wide">${r("note_last_done",{d:e.last_done})}</p>`:g}
      ${M(r("note_repeat_hint"),"nf-wide")}
      ${E(t,r("x"),e.x,o=>n.patch({x:o}))} ${E(t,r("z"),e.z,o=>n.patch({z:o}))}
      ${E(t,r("note_height"),e.y??$c,o=>n.patch({y:Math.max(0,Math.min(20,Math.round(o*100)/100))}),.1,0)}
      ${M(r("note_height_hint"),"nf-wide")}
      ${tw(t,e,n)}
    </div>
    ${Y(m`<button class="nf-btn nf-danger" ?disabled=${!t.admin} @click=${()=>n.remove()}>${r("delete")}</button>`)}
  </section>`}function tw(t,e,n){let r=t.t,o=!!e.photo?.startsWith("image:"),i=async s=>{let a=s.target,l=a.files?.[0];if(a.value="",!l||!t.hass)return;let{data:c}=await Bn(l),u=I("img");await St(t.hass,u,c),n.patch({photo:`image:${u}`})};return m`${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(o?"picture_replace":"note_photo_upload")}<input type="file" accept="image/*" hidden @change=${i} /></label>`:g}
    ${o?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.patch({photo:null})}>${r("delete")}</button></p>`:j(t,r("picture_url"),e.photo??"",s=>n.patch({photo:s.trim()||null}),{wide:!0,placeholder:"/local/valve.jpg"})}
    ${M(r("note_photo_hint"),"nf-wide")}`}function nw(t,e,n,r){let o=Pe(e,n.rooms,n.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=zt(r,e,o),l=Mn(i,s,e.offset-e.width/2),c=Mn(i,s,e.offset+e.width/2),u=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],d=_e(i.points)>=0?1:-1,f=[-u[1]*d,u[0]*d],h=[.06,.06];return a&&(h=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:f,direction:d,across:h,exterior:a?.wall.exterior??!1,at:(p,_)=>t.toScreen([p[0]+f[0]*_,p[1]+f[1]*_])}}var wt=(t,e,n="")=>R`<line class=${n} x1=${t[0]} y1=${t[1]} x2=${e[0]} y2=${e[1]} />`;function rw(t,e){let n=t.across[0]-.04,r=t.across[0]+Math.min(2,e.height),[o,i,s,a]=[t.at(t.p0,n),t.at(t.p1,n),t.at(t.p0,r),t.at(t.p1,r)];return R`${wt(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function ow(t,e,n){let r=n.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=n.hinge==="left"==e.direction>0,a=jt(n,e.exterior),l=n.leaves===2,[c,u]=[e.p0,e.p1],d=[],f=Uc(n.width,a,s,n);if(f){let v=w=>w<=.02?e.p0:w>=n.width-.02?e.p1:Mn(e.room,e.edge,n.offset-n.width/2+w);[c,u]=[v(f.x0),v(f.x1)],d=f.panels.map(([w,x])=>[v(w),v(x)])}let h=[(c[0]+u[0])/2,(c[1]+u[1])/2],p=(l?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),_=d.map(([v,w])=>R`${wt(e.at(v,i+.035),e.at(w,i+.035),"nf-open-pane")}${wt(e.at(v,i-.035),e.at(w,i-.035),"nf-open-pane")}`),y=(v,w)=>{let[x,k]=e.at(v,o),[$,A]=e.at(w,o),F=e.at(v,o+(r?-p:p)),T=p*t.scale,D=(F[0]-x)*(A-k)-(F[1]-k)*($-x)>0?1:0;return R`<path d="M${x} ${k}L${F[0]} ${F[1]}A${T} ${T} 0 0 ${D} ${$} ${A}" />`},b;return a==="passage"?b=wt(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?b=wt(e.at(c,o),e.at(u,o)):l?b=R`${y(c,h)}${y(u,h)}`:b=s?y(c,u):y(u,c),R`${_}${b}`}function iw(t,e){let n=(t.across[0]-t.across[1])/2;if(e.opens==="slide"){let o=e.leaves===2?4:2,i=a=>[t.p0[0]+(t.p1[0]-t.p0[0])*a,t.p0[1]+(t.p1[1]-t.p0[1])*a],s=Array.from({length:o},(a,l)=>{let c=e.leaves===2?l===1||l===2?.035:-.035:l===0?.035:-.035;return wt(t.at(i(Math.max(0,l/o-.03)),n+c),t.at(i(Math.min(1,(l+1)/o+.03)),n+c))});return R`${s}`}let r=e.leaves===2?wt(t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],t.across[0]),t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],-t.across[1])):g;return R`${wt(t.at(t.p0,n+.035),t.at(t.p1,n+.035))}${wt(t.at(t.p0,n-.035),t.at(t.p1,n-.035))}${r}`}function Np(t,e,n,r){let o=e.openings.find(s=>s.id===r)?.front??null,i=s=>{let a=nw(t,s,e,n);if(!a)return g;let l=[a.at(a.p0,a.across[0]+.01),a.at(a.p1,a.across[0]+.01),a.at(a.p1,-a.across[1]-.01),a.at(a.p0,-a.across[1]-.01)],c=s.type==="door"&&ps(jt(s,a.exterior)),u=s.id===r||!!s.front&&s.front===o,d=`nf-open nf-open-${s.type}${c?" nf-open-front":""}${u?" nf-open-sel":""}`,f=s.type==="garage"?rw(a,s):s.type==="door"?ow(t,a,s):iw(a,s);return R`<g data-opening=${s.id} class=${d}><polygon class="nf-open-gap" points=${l.map(h=>h.join(",")).join(" ")} />${f}</g>`};return R`<g>${e.openings.map(i)}</g>`}var Bp=t=>Math.round(t*1e3)/1e3,Wp=t=>Math.round(t*100)/100;function Kn(t,e){let n=[...t??[]].slice(0,e);for(;n.length<e;)n.push(null);return n}var Fi=t=>t.every(e=>e===null);function so(t,e){let[n,r]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.hypot(r[0]-n[0],r[1]-n[1])}function tl(t,e,n){let r=Kn(t.wall_heights,t.points.length);r[e]=n,t.wall_heights=Fi(r)?void 0:r,Ti(t,e,null)}function Ti(t,e,n){if(n===null&&!t.wall_slopes)return;let r=Kn(t.wall_slopes,t.points.length);r[e]=n,t.wall_slopes=Fi(r)?void 0:r}function Vp(t,e,n,r){let[o,i]=[n,r].map(a=>Math.min(30,Math.max(.05,Bp(a)))),s=Kn(t.wall_heights,t.points.length);s[e]=o,t.wall_heights=s,Ti(t,e,i)}function Kp(t,e,n){let r=t.wall_heights?.[e];Ti(t,e,null),typeof r=="number"&&r>=n-.005&&tl(t,e,null)}function Gp(t,e,n,r,o){let i=Kn(t.wall_heights,t.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[n]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,t.wall_heights=Fi(i)?void 0:i,Ti(t,e,null)}function Up(t,e,n,r){let o=so(t,e),i=n===void 0?0:r[n],s=n===void 0?o:r[n+1]??o;if(s-i<.4)return!1;let a=Wp((i+s)/2),l=Kn(t.wall_splits,t.points.length);l[e]=[...l[e]??[],a].sort((u,d)=>u-d),t.wall_splits=l;let c=t.wall_heights?.[e];return Array.isArray(c)&&c.splice((n??0)+1,0,c[n??0]??null),!0}function jp(t,e,n,r,o){let i=so(t,e),s=o.filter(u=>Math.abs(u-n)>.001&&u>0),a=Math.max(.1,Math.min(i-.1,Wp(r)));s.some(u=>Math.abs(u-a)<.1)&&(a=n);let l=t.wall_splits?.[e];if(!l)return;let c=l.findIndex(u=>Math.abs(u-n)<.001);c>=0&&(l[c]=a),l.sort((u,d)=>u-d)}function Zp(t,e,n,r){let o=t.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-n)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(t.wall_splits=void 0);let s=t.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(t.wall_heights[e]=s[0]??null))}function qp(t,e,n,r,o=1){let i=Kn(t.wall_thickness,t.points.length);if(r===void 0||o<2)i[e]=n;else{let s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[r]=n,i[e]=a.every(l=>l===a[0])?a[0]:a}t.wall_thickness=Fi(i)?void 0:i}function Yp(t,e){let n=Math.min(1.5,Math.max(.02,Bp(t)));return Math.abs(n-e)<5e-4?null:n}var Xp=.005,Qp=(t,e)=>`room:${t.id}:${e}`;function Jp(t,e,n){let r=t.t,o=e.ceiling??t.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=t.doc.settings,l=c=>{let u=e.wall_heights?.[c]??null,d=n.partsOf(e,c);return(d.length>1?d.map((h,p)=>p):[void 0]).map(h=>{let p=Array.isArray(u)?u[h??0]??null:u,_=e.wall_thickness?.[c]??null,y=Array.isArray(_)?_[h??0]??null:_,b=h===void 0?so(e,c):(d[h+1]??so(e,c))-d[h],v=z=>n.setHeight(e,c,h,z),w=n.isOuter(e,c)?s:a,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${h===void 0?"":` \xB7 ${r("wall_part",{n:h+1})}`}`,k=h!==void 0&&h>0&&(e.wall_splits?.[c]??[]).some(z=>Math.abs(z-d[h])<.001),$=e.wall_slopes?.[c],A=h===void 0&&typeof $=="number"&&typeof u=="number",F=p??o,T=()=>n.light(c),D=()=>n.light(null);return m`<div class="nf-edge-height${c===n.lit?" nf-edge-on":""}${p!==null?" nf-edge-low":""}" @mouseenter=${T} @mouseleave=${D} @focusin=${T} @focusout=${D}>
        <span><b>${x}</b><br /><span class="nf-muted">${fe(t.hass,b)}</span></span>
        ${p===0?m`<span class="nf-muted">${r("wall_none")}</span>`:A?m`<span class="nf-wide nf-split-row" title=${r("wall_slope_hint")}
                >${E(t,r("wall_slope_start"),u,z=>n.setSlope(e,c,z,$),.05,.05)}
                ${E(t,r("wall_slope_end"),$,z=>n.setSlope(e,c,u,z),.05,.05)}</span
              >`:E(t,r("wall_height"),F,z=>v(z>=o-Xp?null:Math.max(.05,z)),.05,.05)}
        ${t.admin&&A?m`<button class="nf-btn" title=${r("wall_slope_off")} @click=${()=>n.clearSlope(e,c)}>▭</button>`:g}
        ${t.admin&&p!==null&&!A?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
        ${t.admin&&h===void 0&&p!==0&&!A?m`<button class="nf-btn" title=${r("wall_slope_hint")} @click=${()=>n.setSlope(e,c,F,F>=o-Xp?F+1:o)}>∠ ${r("wall_slope")}</button>`:g}
        ${t.admin&&p!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:g}
        ${t.admin&&b>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>n.cut(e,c,h)}>✂</button>`:g}
        ${h===void 0&&b>=.4?wi(t,Qp(e,c),n.arc):g}
        ${(h===void 0||h===0)&&p!==0?m`<button class="nf-btn" title=${r("wall_view_hint")} @click=${()=>n.openWall(e,c)}>▣ ${r("wall_view")}</button>`:g}
        ${p!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${E(t,r("edge_thickness"),y??w,z=>n.setThickness(e,c,Yp(z,w),h,d.length),.01,.02)}
              ${t.admin&&y!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>n.setThickness(e,c,null,h,d.length)}>↺</button>`:g}</span
            >`:g}
        ${h===void 0?vi(t,Qp(e,c),n.arc):g}
        ${k?m`<span class="nf-wide nf-split-row"
              >${E(t,r("wall_split_at"),d[h],z=>n.moveCut(e,c,d[h],z),.05,.1)}
              ${t.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join(e,c,d[h],h)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>l(u))} ${M(r("room_wall_hint"))}
  </div>`}function em(t,e,n){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:n;return r?t.states[r]:void 0}var nl=["none","rainbow","pulse","flicker"];function zi(t,e,n,r){let o=e.effect_animations??{},i=Yc(),s=c=>nl.includes(c)||i.includes(c),a=[...new Set([...Object.keys(o),...Array.isArray(n)?n.filter(c=>typeof c=="string"):[]])],l=(c,u,d,f=!1)=>{let h=Object.prototype.hasOwnProperty.call(o,c),p=Array.from(c).length,_=f&&h?"light_effect_exists":u!==""&&(p<1||p>255)?"light_effect_name_limit":u!==""&&!h&&Object.keys(o).length>=100?"light_effect_count_limit":void 0;if(d.setCustomValidity?.(_?t.t(_):""),_){let b=d.closest?.("details")?.querySelector("[data-effect-feedback]");return b&&(b.textContent=t.t(_)),d.reportValidity?.(),f||(d.value=h?o[c]:""),!1}let y={...o};return u===""?delete y[c]:Object.defineProperty(y,c,{value:u,enumerable:!0,configurable:!0,writable:!0}),r({effect_animations:y}),!0};return m`<details class="nf-wide">
    <summary>${t.t("light_effects")}</summary>
    <p class="nf-sub">${t.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${e.animations_enabled!==!1} ?disabled=${!t.admin}
      @change=${c=>r({animations_enabled:c.target.checked})} />${t.t("light_effects_enabled")}</label>
    ${a.map(c=>m`<label class="nf-field nf-wide">${c}
      <select ?disabled=${!t.admin} @change=${u=>{let d=u.target;l(c,d.value,d)}}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(o,c)}>${t.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(o,c)&&!s(o[c])?m`<option selected value=${o[c]}>${o[c]} (${t.t("light_effect_unmapped")})</option>`:g}
        ${nl.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${t.t(`light_animation_${u}`)}</option>`)}
        ${i.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${u} (${t.t("plugin")})</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${t.t("light_effect_add")}<input type="text" ?disabled=${!t.admin} placeholder="Regenbogen"
      @input=${c=>c.target.setCustomValidity("")}
      @change=${c=>{let u=c.target;l(u.value,"none",u,!0)&&(u.value="")}} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${t.t("light_effect_name_limit")} ${t.t("light_effect_count_limit")}</p>
  </details>`}var sw=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function aw(t,e,n){let r=X(e),o=t.hass?.language??"en",i=[...Po.map(a=>({type:a,label:t.t(`furn_${a}`)})),...n.flatMap(a=>a.items.map(l=>({type:de(a.id,l.id),label:`${Ye(l,de(a.id,l.id),o)} \xB7 ${Oe(a,o)}`})))],s=a=>r==="light"?ce(a):r==="climate"?a==="radiator"||gn(a):e.startsWith("vacuum.")?a==="robot_vacuum"||gt(a)&&a.endsWith(":robot_vacuum"):r==="media"?gr(a)||Et(a)&&sw.test(a):Et(a)&&!ce(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function lw(t,e,n){if(!t.admin)return g;let r=aw(t,e.entity_id,n.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${t.t("as_furniture_hint")}
    >${t.t("as_furniture")}
    <select @change=${o=>o.target.value&&n.asFurniture(e,o.target.value)}>
      <option value="" selected>${t.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function cw(t,e,n){let r=t.hass?.language??"en";return Qc(e.entity_id,t.hass?.states[e.entity_id]).map(({pluginId:o,name:i,settings:s})=>{let a=Jc(s,e.plugin?.[o]),l=(u,d)=>n({plugin:{...e.plugin??{},[o]:{...e.plugin?.[o]??{},[u]:d}}}),c=s.map(u=>{let d=No(u.label,r),f=u.hint?No(u.hint,r):void 0;if(u.type==="boolean")return L(t,d,a[u.key]===!0,p=>l(u.key,p),{title:f});if(u.type==="select"){let p=(u.options??[]).map(([_,y])=>[_,No(y,r)]);return O(t,d,String(a[u.key]),p,_=>l(u.key,_),{wide:!0,title:f})}let h=p=>Math.min(u.max??1/0,Math.max(u.min??-1/0,p));return E(t,d,Number(a[u.key]),p=>l(u.key,h(p)),u.step??1,u.min)});return m`<h4 class="nf-lib-head nf-wide">🔌 ${i}</h4>${c}`})}function rl(t,e,n){let r=t.t,o=X(e.entity_id)??(t.hass?Ne(t.hass,e.entity_id):null),i=o==="light",s=e.mount??"ceiling",a=o?So(o,t.floor?at(t.floor,e.x,e.z):2.5,i?s:null):1,l=f=>n.update(f),c=In(t,e.entity_id,e.icon),u=f=>l({mount:f,y:null}),d=["ceiling","floor","table","wall"].map(f=>[f,r(`lamp_${f}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${n.lockButton}</div>
    <p class="nf-dev-title">
      ${c?m`<ha-icon class="nf-dev-icon" .icon=${c}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?Ht(o):""} /></svg>`}
      ${W(t.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${O(t,r("lamp_mount"),s,d,u,{wide:!0})}${rn(t,e.glow_scale,f=>l({glow_scale:f}))}`:g}
      ${i?zi(t,e,t.hass?.states[e.entity_id]?.attributes.effect_list,l):g}
      ${e.entity_id.startsWith("media_player.")?rn(t,e.sound_rings,f=>l({sound_rings:f}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g}
      ${E(t,r("x"),e.x,f=>l({x:f}))} ${E(t,r("z"),e.z,f=>l({z:f}))}
      ${E(t,r("marker_height"),e.y??a,f=>l({y:Math.max(0,f)}),.05,0)}
      ${E(t,r("rotation"),e.rotation??0,f=>l({rotation:(f%360+360)%360}),1)}
      ${i?L(t,r("device_simple"),!!e.simple,f=>l({simple:f||void 0}),{title:r("device_simple_hint")}):g}
      ${o&&rc.has(o)?L(t,r("device_confirm"),!!e.confirm,f=>l({confirm:f}),{title:r("device_confirm_hint")}):g}
      ${L(t,r("device_outside"),!!e.outside,f=>l({outside:f||void 0}),{title:r("device_outside_hint")})}
      ${On(t,e.marker??null,f=>l({marker:f}))}
      ${Ln(t,e.pin_offset,f=>l({pin_offset:f}))}
      ${j(t,r("device_name"),e.name??"",f=>l({name:f||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:W(t.hass,e.entity_id)})}
      ${e.name?L(t,r("show_name"),!!e.show_name,f=>l({show_name:f||void 0})):g}
      ${It(t,e.icon,f=>l({icon:f}))}
      ${cw(t,e,l)}
    </div>
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>n.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>l({y:null})}>${r("height_auto")}</button>`:g}
          ${lw(t,e,n)}
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var ao=t=>Number(t);function Pi(t){if(Array.isArray(t)){let[i,s]=[ao(t[0]),ao(t[1])];return Number.isFinite(i)&&Number.isFinite(s)?[i,s]:null}if(!t||typeof t!="object")return null;let{x:e,y:n}=t,[r,o]=[ao(e),ao(n)];return Number.isFinite(r)&&Number.isFinite(o)?[r,o]:null}function rm(t){return t?Pi(t.charger)??Pi(t.charger_position):null}function Di(t){for(let[e,n]of Object.entries(t.states))if(e.startsWith("camera.")&&(Pi(n.attributes?.vacuum_position)??rm(n.attributes)))return e;return null}var ol=(t,e)=>e?[t[0],-t[1]]:t;var om=5e-4,im=2,uw=1.5;function il(t,e){let n=e?t.states[e]?.attributes:void 0;return{at:n?Pi(n.vacuum_position):null,dock:rm(n)}}function sm(t,e,n=!1){let r=Math.hypot(e.plan[0]-t.plan[0],e.plan[1]-t.plan[1]),o=Math.hypot(e.grid[0]-t.grid[0],e.grid[1]-t.grid[1]);if(!(o>1e-6)||!(r>=uw))return{cal:null,reason:"close"};let i=r/o;return i>=om&&i<=im?{cal:{a:t.plan,ga:t.grid,b:e.plan,gb:e.grid,mirror:n}}:{cal:null,reason:"scale"}}function am(t,e){let n=e?t.states[e]?.attributes?.rooms:void 0;if(!n||typeof n!="object")return[];let r=[];for(let o of Object.values(n)){if(!o||typeof o!="object")continue;let i=o,s=typeof i.name=="string"?i.name.trim():"",a=[i.x0,i.y0,i.x1,i.y1].map(ao);!s||!a.every(Number.isFinite)||r.push({name:s,center:[(a[0]+a[2])/2,(a[1]+a[3])/2]})}return r}var tm=t=>t.toLocaleLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^\p{L}\p{N}]+/gu,"");function dw(t){let e=t.length,[n,r]=t.reduce((h,p)=>[h[0]+p.seen[0]/e,h[1]+p.seen[1]/e],[0,0]),[o,i]=t.reduce((h,p)=>[h[0]+p.plan[0]/e,h[1]+p.plan[1]/e],[0,0]),[s,a,l]=[0,0,0];for(let h of t){let[p,_]=[h.seen[0]-n,h.seen[1]-r],[y,b]=[h.plan[0]-o,h.plan[1]-i];s+=p*y+_*b,a+=p*b-_*y,l+=p*p+_*_}if(!(l>1e-9))return null;let[c,u]=[s/l,a/l],d=h=>{let[p,_]=[h[0]-n,h[1]-r];return[o+c*p-u*_,i+u*p+c*_]},f=Math.sqrt(t.reduce((h,p)=>h+Math.hypot(d(p.seen)[0]-p.plan[0],d(p.seen)[1]-p.plan[1])**2,0)/e);return{map:d,scale:Math.hypot(c,u),rms:f}}function lm(t,e,n=!1){let r=new Map(e.map(_=>[tm(_.name),_])),o=[],i=new Set;for(let _ of t){let y=tm(_.name),b=r.get(y);if(!b||i.has(y)||_.points.length<3)continue;i.add(y);let v=_.points.map(x=>x[0]),w=_.points.map(x=>x[1]);o.push({name:_.name,plan:[(Math.min(...v)+Math.max(...v))/2,(Math.min(...w)+Math.max(...w))/2],grid:b.center})}let s=o.map(_=>_.name);if(o.length<2)return{cal:null,reason:"rooms",matched:s};let l=(o.length>=3?[!1,!0]:[n]).flatMap(_=>{let y=dw(o.map(b=>({plan:b.plan,seen:ol(b.grid,_)})));return y?[{mirror:_,...y}]:[]}).sort((_,y)=>_.rms-y.rms)[0];if(!l)return{cal:null,reason:"rooms",matched:s};if(!(l.scale>=om&&l.scale<=im))return{cal:null,reason:"scale",matched:s};let c=Math.max(...o.map(_=>Math.hypot(_.plan[0]-o[0].plan[0],_.plan[1]-o[0].plan[1])));if(!(l.rms<=Math.max(1,c/4)))return{cal:null,reason:"fit",matched:s};let[u,d,f]=[0,1,-1];for(let _=0;_<o.length;_++)for(let y=_+1;y<o.length;y++){let b=Math.hypot(o[_].grid[0]-o[y].grid[0],o[_].grid[1]-o[y].grid[1]);b>f&&([u,d,f]=[_,y,b])}let[h,p]=[o[u].grid,o[d].grid];return{cal:{a:l.map(ol(h,l.mirror)),ga:h,b:l.map(ol(p,l.mirror)),gb:p,mirror:l.mirror},matched:s,rms:l.rms}}function cm(t,e){let[n,r]=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],o=(e.turn??0)*Math.PI/180,[i,s,a]=[Math.cos(o),Math.sin(o),e.grow??1],[l,c]=e.move??[0,0],u=d=>{let[f,h]=[(d[0]-n)*a,(d[1]-r)*a];return[nm(n+f*i-h*s+l),nm(r+f*s+h*i+c)]};return{...t,a:u(t.a),b:u(t.b)}}var nm=t=>Math.round(t*1e3)/1e3;var hw=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,vt=t=>t==="none"?null:t;function sl(t,e,n){let r=t.t,o=H(t.hass,l=>hw.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${P(t,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>n.update({state_entity:vt(l)}))}
    ${i?P(t,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>n.update({state_entity2:vt(l)})):g}
    ${s?O(t,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>n.update({state_split:l})):g}
    ${M(r("furn_state_hint"),"nf-wide")}`}function fw(t,e){let r=$n(t.type)&&(!gt(t.type)||fc(t.type));return ce(t.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:t.type==="radiator"||gn(t.type)?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:t.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:/:(robot_mower|mower_dock)$/.test(t.type)?{accept:o=>o.startsWith("lawn_mower."),label:"furn_entity_mower"}:/:(sprinkler|valve_box)$/.test(t.type)?{accept:o=>/^(valve|switch|input_boolean)\./.test(o),label:"furn_entity_water"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover|valve)\./.test(o)||oc(e?.states[o]),label:"furn_entity"}}function Ii(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[n==="fan"?"fan_entity":n]=null);return Be(t.hass,r).get(e.id)?.[n]??null}var pw=t=>t==="meter"?"energy_grid":t==="inverter"?"energy_solar_sensor":t==="home_battery"?"energy_battery_sensor":"furn_power",it=(...t)=>m`<div class="nf-form nf-links">${t}</div>`;async function mw(t){let e=t.hass?Di(t.hass):null;if(!t.hass||!e)return{at:null,dock:null};let n=()=>{let o=t.hass?.states[e]?.attributes??{};return`${String(o.render_count??"")}|${JSON.stringify(o.vacuum_position??null)}`},r=n();try{await t.hass.fetchWithAuth?.(`/api/camera_proxy/${e}`)}catch{}for(let o=0;o<8&&n()===r;o++)await new Promise(i=>setTimeout(i,100));return il(t.hass,e)}function gw(t,e){let n=t.t,r=l=>t.change(c=>{c.settings.vacuum_map=cm(e,l)}),o=(l,c,u)=>m`<button class="nf-btn" title=${c} aria-label=${c} ?disabled=${!t.admin} @click=${()=>r(u)}>${l}</button>`,[i,s,a]=[n("robot_cal_nudge_move"),n("robot_cal_nudge_turn"),n("robot_cal_nudge_grow")];return m`${M(n("robot_cal_nudge"),"nf-wide")}
    <div class="nf-wide" style="display:flex;flex-wrap:wrap;gap:6px">
      ${o("\u2190",i,{move:[-.1,0]})}${o("\u2192",i,{move:[.1,0]})}${o("\u2191",i,{move:[0,-.1]})}${o("\u2193",i,{move:[0,.1]})}
      ${o("\u27F2",s,{turn:-1})}${o("\u27F3",s,{turn:1})}${o("\u2212",a,{grow:.99})}${o("+",a,{grow:1.01})}
    </div>`}function _w(t,e){let n=t.t,r=t.doc.settings.vacuum_map??null,o=t.hass?il(t.hass,Di(t.hass)):{at:null,dock:null},i=r?Math.hypot(r.gb[0]-r.ga[0],r.gb[1]-r.ga[1]):0,s=r&&i>0?Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])/i:0,a=()=>{t.pickPoint(f=>{f&&mw(t).then(h=>{if(!h.at||!h.dock)return;let p={plan:[e.x,e.z],grid:h.dock},_=sm(p,{plan:f,grid:h.at},r?.mirror??!1);_.cal&&t.change(y=>{y.settings.vacuum_map=_.cal})})})},l=t.hass?Di(t.hass):null,c=t.hass?am(t.hass,l):[],u=t.doc.floors.find(f=>f.furniture.some(h=>h.id===e.id)),d=()=>{if(!u)return;let f=lm(u.rooms,c,r?.mirror??!1);if(f.cal){let h=f.cal;t.change(p=>{p.settings.vacuum_map=h})}else alert(n(f.reason==="rooms"?"robot_cal_rooms_none":"robot_cal_rooms_bad",{n:f.matched.length}))};return it(M(o.at&&o.dock?r?n("robot_cal_done",{m:s.toFixed(2)}):n("robot_cal_none"):n("robot_cal_need"),"nf-wide"),c.length>=2?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!u} @click=${d}>${n("robot_cal_rooms",{n:c.length})}</button>`:g,m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!o.at||!o.dock} @click=${a}>${n("robot_cal_do")}</button>`,r?L(t,n("robot_cal_mirror"),!!r.mirror,f=>t.change(h=>{h.settings.vacuum_map={...r,mirror:f}})):g,r?gw(t,r):g,r?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>t.change(f=>{f.settings.vacuum_map=null})}>${n("robot_cal_forget")}</button>`:g,M(n("robot_cal_hint"),"nf-wide"))}function bw(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=Cn(o),s=o.floors.flatMap(a=>a.furniture.filter(l=>i.has(l.id)).map(l=>[l.id,`${l.name||r("furn_meter")} \xB7 ${a.name}`]));return it(O(t,r("meter_parent"),Qr(o,e)??"",[["",r("meter_main")],...s],a=>n.update({parent_meter:a||null}),{wide:!0}),M(r("meter_device_hint"),"nf-wide"))}function yw(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=o.floors.flatMap(c=>c.furniture.filter(u=>eh(o,e,u)).map(u=>[u.id,`${u.name||r("furn_meter")} \xB7 ${c.name}`])),s=!!ln(o,e),a=e.meter_floors??[],l=(c,u)=>n.update({meter_floors:u?[...a.filter(d=>d!==c),c]:a.filter(d=>d!==c)});return it(O(t,r("meter_parent"),s?e.parent_meter:"",[["",r("meter_parent_none")],...i],c=>n.update({parent_meter:c||null}),{wide:!0}),s?L(t,r("energy_invert"),!!e.meter_invert,c=>n.update({meter_invert:c})):g,s?m`<div class="nf-sub nf-wide">${r("meter_floors")}</div>${o.floors.map(c=>L(t,c.name,a.includes(c.id),u=>l(c.id,u)))}`:g,M(r("meter_sub_hint"),"nf-wide"))}function um(t,e,n,r){let o=t.t,i=n==="mail"?s=>/^(binary_sensor|sensor|input_boolean)\./.test(s):s=>/^(sensor|binary_sensor|calendar)\./.test(s);return m`<div class="nf-form nf-links">
    ${P(t,o(`care_entity_${n}`),e.care_entity??null,void 0,H(t.hass,i),s=>r.update({care_entity:vt(s)}))}
    ${n==="plant"?E(t,o("care_thirsty_below"),e.thirsty_below??20,s=>r.update({thirsty_below:Math.min(90,Math.max(1,Math.round(s)))}),1,1):g}
    ${M(o(`care_hint_${n}`),"nf-wide")}
  </div>`}function dm(t,e,n){let r=t.t;return m`<div class="nf-form nf-links">
    ${P(t,r("furn_cover_entity"),e.cover_entity??null,void 0,H(t.hass,o=>o.startsWith("cover.")),o=>n.update({cover_entity:vt(o)}))}
    ${L(t,r("furn_cover_inverted"),!!e.cover_inverted,o=>n.update({cover_inverted:o||void 0}),{title:r("furn_cover_inverted_hint")})}
    ${M(r("furn_cover_hint"),"nf-wide")}
  </div>`}function hm(t,e,n,r){let o=t.t,i=/socket/.test(e.type),s=H(t.hass,c=>/^(light|switch|input_boolean|fan)\./.test(c)),a=e.gang_entities??[],l=c=>u=>{let d=Array.from({length:n},(f,h)=>a[h]??null);d[c]=vt(u),r.update({gang_entities:d})};return m`<div class="nf-form nf-links">
    ${Array.from({length:n},(c,u)=>P(t,n===1?o(i?"gang_socket_one":"gang_switch_one"):o(i?"gang_socket":"gang_switch",{n:u+1}),a[u]??null,void 0,s,l(u)))}
    ${M(o(i?"gang_socket_hint":"gang_switch_hint"),"nf-wide")}
  </div>`}function ww(t,e,n){let r=t.t,o=H(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return it(P(t,r("fridge_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:vt(i)})),P(t,r("freezer_temp"),e.temp_entity2??null,void 0,o,i=>n.update({temp_entity2:vt(i)})),M(r("fridge_temp_hint"),"nf-wide"))}function vw(t,e,n){let r=t.t,o=H(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return it(P(t,r("device_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:vt(i)})),M(r("device_temp_hint"),"nf-wide"))}function kw(t,e,n){let r=t.t,o=e.extra_lights??[],i=H(t.hass,l=>l.startsWith("light.")&&l!==e.entity&&l!==e.color_entity),s=l=>c=>{let u=[...o];c&&c!=="none"?u[l]=c:u.splice(l,1),n.update({extra_lights:u.filter(Boolean).length?u.filter(Boolean):void 0})},a=Math.min(4,o.length+1);return m`${Array.from({length:a},(l,c)=>P(t,r("lamp_extra_light",{n:c+2}),o[c]??null,void 0,i,s(c)))}${M(r("lamp_extra_hint"),"nf-wide")}`}function fm(t,e,n){let{hass:r}=t;if(!r)return g;let o=t.t,i=ce(e.type),s=fw(e,r),a=H(r,p=>Pn(r,p)),l=p=>_=>n.update({[p]:vt(_)}),c=p=>H(r,p),u=(t.doc.settings.roof.strings??[]).filter(p=>p.inverter===e.id).map(p=>p.name),d=!!e.entity&&e.entity!=="none",f=e.type==="fridge_smart"?c(p=>p.startsWith("binary_sensor.")):[],h=e.type==="ceiling_fan"?"fan_hint":i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":$n(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${it(e.type==="grid_point"?M(o("grid_point_hint"),"nf-wide"):P(t,o(s.label),e.entity??null,Ii(t,e,"entity"),c(s.accept),p=>n.update({entity:p})),e.type==="ceiling_fan"?P(t,o("furn_fan_entity"),e.fan_entity??null,Ii(t,e,"fan"),c(p=>p.startsWith("fan.")),p=>n.update({fan_entity:p})):g,!i&&!Ce.includes(e.type)&&!gr(e.type)?sl(t,e,n):g,i&&d?m`${P(t,o("furn_color_entity"),e.color_entity??null,void 0,c(p=>p.startsWith("light.")&&p!==e.entity),l("color_entity"))}${M(o("furn_color_entity_hint"),"nf-wide")}`:g,i&&d?kw(t,e,n):g,i?rn(t,e.glow_scale,p=>n.update({glow_scale:p})):g,i?zi(t,e,em(r,e,e.entity&&e.entity!=="none"?e.entity:Ii(t,e,"entity"))?.attributes.effect_list,n.update):g,gr(e.type)?rn(t,e.ambilight,p=>n.update({ambilight:p}),{label:"ambilight",hint:"ambilight_hint",lowest:0}):g,$n(e.type)||Go(e.type)?rn(t,e.sound_rings,p=>n.update({sound_rings:p}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g,e.type==="grid_point"?g:P(t,o(ln(t.doc,e)?"meter_sub_power":pw(e.type)),e.power??null,Ii(t,e,"power"),a,p=>n.update({power:p})))}
    ${hu(e.type)?ww(t,e,n):i||e.type==="grid_point"?g:vw(t,e,n)}
    ${e.type==="meter"?yw(t,e,n):g}
    ${e.type==="inverter"||e.type==="home_battery"?bw(t,e,n):g}
    ${e.type==="meter"&&!ln(t.doc,e)?it(P(t,o("furn_export"),e.export??null,void 0,a,l("export")),M(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(t.doc.settings.roof.solar??[]).length>0?M(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?it(P(t,o("furn_soc"),e.soc??null,void 0,c(p=>he(p)&&(r.states[p]?.attributes.device_class==="battery"||r.states[p]?.attributes.unit_of_measurement==="%")),l("soc")),P(t,o("furn_charge"),e.charge??null,void 0,a,l("charge")),M(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?it(P(t,o("furn_wallbox_status"),e.status??null,void 0,c(p=>ni(p)||he(p)),l("status"))):g}
    ${!i||e.entity?m`${L(t,o("device_confirm"),!!e.confirm,p=>n.update({confirm:p}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${On(t,e.marker??null,p=>n.update({marker:p}))}${It(t,e.icon,p=>n.update({icon:p}))}${i?g:Ln(t,e.pin_offset,p=>n.update({pin_offset:p}))}</div>`:g}
    ${e.type==="robot_vacuum"?it(P(t,o("furn_robot_room"),e.room_sensor??null,gu(r,Be(r,t.doc.floors).get(e.id)?.entity??null,null),c(he),p=>n.update({room_sensor:p}))):g}
    ${e.type==="robot_vacuum"&&d?_w(t,e):g}
    ${e.type==="fridge_smart"?m`${it(P(t,o("furn_door_left"),e.door_left??null,void 0,f,p=>n.update({door_left:p})),P(t,o("furn_door_right"),e.door_right??null,void 0,f,p=>n.update({door_right:p})))}
        ${M(o("fridge_hint"))}`:g}
    ${M(o(h))}`}var xw=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,$w=/^(sensor|input_select|select|input_text)\./,Sw=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,Mw=(t,e)=>t.flatMap(n=>n.items.filter(r=>r.vehicle).map(r=>({id:de(n.id,r.id),label:`${Ye(r,de(n.id,r.id),e)} \xB7 ${Oe(n,e)}`})));function pm(t,e){return e.startsWith("device_tracker.")?t.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function mm(t,e,n,r){return m`<select ?disabled=${!t.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!n}>${t.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===n}>${o.label}</option>`)}
  </select>`}function Rw(t,e,n,r){let o=t.t,i=e.type_entity?t.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=u=>r.update({types:u}),c=(u,d)=>l(a.map((f,h)=>h===u?{...f,...d}:f));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((u,d)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!t.admin} @change=${f=>c(d,{state:f.target.value})} />
        ${mm(t,n,u.vehicle,f=>c(d,{vehicle:f??""}))}
        <button class="nf-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>l(a.filter((f,h)=>h!==d))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${t.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:n[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function gm(t,e,n,r){let o=t.t,i=Mw(n,t.hass?.language??"en"),s=H(t.hass,p=>xw.test(p)).sort((p,_)=>pm(t,p.id)-pm(t,_.id)),a=H(t.hass,p=>$w.test(p)),l=e.car??{},c=t.floor,u=c?.rooms.find(p=>p.points.length>=3&&N([e.x,e.z],p.points)),d=e.vehicle?G(e.vehicle):void 0,f=d?d.size[2]*(e.scale??1):0,h=!!u&&!!c&&f>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${P(t,o("parking_entity"),e.entity??null,void 0,s,p=>r.update({entity:p==="none"?null:p}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${mm(t,i,e.vehicle??null,p=>r.update({vehicle:p}))}</label>
      ${i.length>0?g:M(o("parking_no_pack"),"nf-wide")}
      ${E(t,o("parking_scale"),Math.round((e.scale??1)*100),p=>r.update({scale:Math.min(150,Math.max(30,p))/100}),5,30)}
      ${P(t,o("parking_type_entity"),e.type_entity??null,void 0,a,p=>r.update({type_entity:p==="none"?null:p}))}
      ${e.type_entity?Rw(t,e,i,r):g}
    </div>
    ${h?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:U(t.hass,f,2),room:U(t.hass,c.height,2)})}</p>`:g}
    ${M(o("parking_hint"))}
    ${t.hass?m`${P(t,o("live_car_device"),l.device??null,null,H(t.hass,p=>Sw.test(p)),p=>r.update({car:{...l,device:p}}))}
        ${M(o("live_car_device_hint"),"nf-wide")}
        ${P(t,o("live_car_departure_entity"),l.departure??null,void 0,H(t.hass,p=>/^(sensor|input_datetime|time|datetime)\./.test(p)),p=>r.update({car:{...l,departure:p==="none"?null:p}}))}`:g}`}function _m(t,e){let r=cn(t,e.w,e.d,e.h).treads.findIndex(o=>o.landing);return r>=0?r+1:1}function Ew(t){let e=cn(ro(t),t.w,t.d,t.h),n=e.treads.map(yi),r=0;for(let i=1;i<n.length;i++)r+=Math.hypot(n[i][0]-n[i-1][0],n[i][1]-n[i-1][1]);let o=n.length>1?r/(n.length-1):0;return{rise:e.rise,going:o,measure:2*e.rise+o,steps:e.steps}}function Aw(t){let[e,n]=xa[t],r=cn({...ht,shape:t},e,n,2.8),o=26/Math.max(e,n);return m`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${r.treads.map(i=>R`<polygon points=${i.poly.map(([s,a])=>`${s*o},${a*o}`).join(" ")} fill=${i.landing?"currentColor":"none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`}function bm(t,e,n){let r=t.t,o=ro(e),i=p=>n.update({stair:{...o,...p}}),s=o.shape!=="straight",a=p=>{let[_,y]=xa[p];n.update({stair:{...o,shape:p,run_width:null},w:_,d:y})},l=t.floor?t.doc.floors.filter(p=>p.elevation<t.floor.elevation).sort((p,_)=>_.elevation-p.elevation)[0]:void 0,c=t.floor?t.doc.floors.filter(p=>p.elevation>t.floor.elevation).sort((p,_)=>p.elevation-_.elevation)[0]:void 0,u=p=>{let _=p?l&&t.floor?t.floor.elevation-l.elevation:null:c&&t.floor?c.elevation-t.floor.elevation:null;n.update({stair:{...o,down:p},..._?{h:Math.round(_*1e3)/1e3}:{}})},d=Ew(e),f=p=>U(t.hass,p*100,1),h=d.measure>=.59&&d.measure<=.65&&d.rise<=.21;return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${r("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${r("stair_shape")}>
        ${ya.map(p=>m`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${p===o.shape} title=${r(`stair_shape_${p}`)} ?disabled=${!t.admin} @click=${()=>a(p)}>
            ${Aw(p)}<span>${r(`stair_shape_${p}`)}</span>
          </button>`)}
      </div>
    </div>
    ${s?O(t,r("stair_turn"),o.turn,[["left",r("stair_turn_left")],["right",r("stair_turn_right")]],p=>i({turn:p})):""}
    ${O(t,r("stair_build"),o.build,wa.map(p=>[p,r(`stair_build_${p}`)]),p=>i({build:p}))}
    ${o.build!=="solid"?L(t,r("stair_risers"),o.risers,p=>i({risers:p}),{wide:!1}):""}
    ${E(t,r("stair_steps"),o.steps??d.steps,p=>i({steps:Math.round(Math.min(40,Math.max(2,p)))}),1,2)}
    ${o.steps!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({steps:null})}>${r("height_auto")}</button>`:""}
    ${s&&o.shape!=="spiral"?m`${E(t,r("stair_run_width"),o.run_width??cn(o,e.w,e.d,e.h).flight,p=>i({run_width:Math.max(.4,p)}),.01,.4)}
        ${o.run_width!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({run_width:null})}>${r("height_auto")}</button>`:""}`:""}
    ${o.shape==="l"||o.shape==="u"?m`${E(t,r("stair_landing_after"),o.landing_after??_m(o,e),p=>i({landing_after:Math.round(Math.min(d.steps-1,Math.max(1,p)))}),1,1)}
        ${o.landing_after!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({landing_after:null})}>${r("height_auto")}</button>`:""}
        ${M(r("stair_landing_hint",{h:f((o.landing_after??_m(o,e))*Math.abs(e.h)/d.steps)}),"nf-wide")}`:""}
    ${O(t,r("stair_rail"),o.rail,va.map(p=>[p,r(`stair_rail_${p}`)]),p=>i({rail:p}))}
    ${L(t,r("stair_down"),o.down,u,{title:r("stair_down_hint")})}
    ${O(t,r("stair_opening"),o.opening,ka.map(p=>[p,r(`stair_opening_${p}`)]),p=>i({opening:p}),{wide:!0,title:r("stair_opening_hint")})}
    <p class="nf-sub nf-wide ${h?"":"nf-pack-error"}">
      ${r("stair_measures",{steps:d.steps,rise:f(d.rise),going:f(d.going),measure:f(d.measure)})} ${h?"\u2713":`\u2013 ${r("stair_uncomfortable")}`}
    </p>
    ${M(r(o.down?"stair_down_note":o.opening==="headroom"?"stair_up_note":"stair_up_note_plain"),"nf-wide")}
  </div>`}var Fw=new Set(["parking","stairwell","rug","grid_point"]),Tw={inverter:{label:"furn_model",values:["","slim","hybrid"],text:t=>`inverter_${t||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:t=>`battery_${t||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:t=>`pendant_${t||"shade"}`},sofa:{label:"sofa_shape",values:["","l","u"],text:t=>`sofa_${t||"straight"}`}};function zw(t,e,n,r){let o=t.hass?.language??"en",i=n.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${t.t("furniture_type")}
    <select ?disabled=${!t.admin} @change=${s=>r.update({type:s.target.value})}>
      ${Po.map(s=>m`<option value=${s} ?selected=${s===e.type}>${t.t(`furn_${s}`)}</option>`)}
      ${n.map(s=>m`<optgroup label=${Oe(s,t.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${de(s.id,a.id)} ?selected=${de(s.id,a.id)===e.type}>${Ye(a,de(s.id,a.id),o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${qe(t.hass,e.type)}</option>`:g}
    </select>
  </label>`}function Pw(t,e,n){let r=G(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=t.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>Id(a,o);return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${t.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!t.admin} @click=${()=>n.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function Dw(t,e,n){let r=Tw[e.type];if(!r)return g;let o=r.values.map(i=>[i,t.t(r.text(i))]);return m`<div class="nf-form">${O(t,t.t(r.label),e.variant??"",o,i=>n.update({variant:i||null,...e.type==="sofa"&&i&&e.d<1.4?{d:1.7,w:Math.max(e.w,i==="u"?3:2.4)}:{}}),{wide:!0})}</div>`}function Iw(t,e,n){let r=t.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${t.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t.admin} placeholder=${o} @change=${i=>n.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?L(t,t.t("show_name"),!!e.show_name,i=>n.update({show_name:i||void 0})):g}`}function Ow(t,e,n){let r=t.t,o=s=>n.update(s),i=t.floor;return m`${E(t,r("x"),e.x,s=>o({x:s}))} ${E(t,r("z"),e.z,s=>o({z:s}))}
    ${E(t,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${E(t,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${E(t,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${E(t,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${E(t,r("tilt_x"),e.tilt_x??0,s=>o({tilt_x:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${E(t,r("tilt_z"),e.tilt_z??0,s=>o({tilt_z:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${ce(e.type)?g:L(t,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${E(t,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${e.upright?g:E(t,r("strip_rise"),e.rise??0,s=>o({rise:Math.max(-80,Math.min(80,Math.round(s)))}),5)}
        ${L(t,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${Do(e)&&i?m`${E(t,r("mount_height"),e.mount_y??At(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}
    ${Lw(e)&&i?m`${E(t,r("ceiling_here"),Ro(i,e),s=>o({ceiling_y:Math.abs(s-at(i,e.x,e.z))<.005?null:Math.max(.5,s)}),.01,.5)}
        ${e.ceiling_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({ceiling_y:null})}>${r("height_auto")}</button>`:g}
        ${ym(t,e)!==null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${r("ceiling_slope_hint")} @click=${()=>o({ceiling_y:ym(t,e)})}>📐 ${r("ceiling_slope")}</button>`:g}
        ${M(r("ceiling_here_hint"),"nf-wide")}`:g}`}function ym(t,e){let n=t.floor;if(!n)return null;let r=Sr(t.doc,e.x,e.z);if(r===null)return null;let o=Math.round((r-n.elevation)*1e3)/1e3;return o>.5&&o<at(n,e.x,e.z)-.02?o:null}var Lw=t=>us.has(t.type)||G(t.type)?.mount==="ceiling";function Hw(t,e,n){if(e.type==="stairs"&&e.stair)return g;if(e.type==="stairs")return m`${M(t.t("stairs_hint"))}${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-primary" title=${t.t("stair_upgrade_hint")} @click=${()=>n.update({stair:{...ht}})}>${t.t("stair_upgrade")}</button></div>`:g}`;if(e.type!=="stairwell")return g;let r=t.floor&&!t.floor.rooms.some(o=>o.points.length>=3&&Wh(ms(e),o.points));return m`${M(t.t("stairwell_hint"))}${r?m`<p class="nf-sub nf-pack-error">${t.t("stairwell_outside")}</p>`:g}`}function Cw(t,e,n){if(!t.admin)return g;let r=t.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking",i=t.doc.floors.filter(s=>s.id!==t.floor?.id);return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>n.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>n.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>n.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button>
  </div>
  ${i.length?m`<div class="nf-form">${O(t,r("furn_to_floor"),"",[["","\u2013"],...i.map(s=>[s.id,s.name])],s=>s&&n.toFloor(s),{wide:!0,title:r("furn_to_floor_hint")})}</div>`:g}`}function Nw(t,e,n){let r=e.tap??null,o=[["",t.t("furn_tap_default")],...Ao.map(s=>[s,t.t(`own_action_${s}`)])],i=s=>n.update({tap:{action:r?.action??"navigate",target:r?.target??null,data:r?.data??null,...s}});return m`<div class="nf-form">
    ${O(t,t.t("furn_tap"),r?.action??"",o,s=>s?i({action:s}):n.update({tap:null}),{wide:!0,title:t.t("furn_tap_hint")})}
    ${r&&r.action!=="fire_dom_event"?j(t,t.t(`own_target_${r.action}`),r.target??"",s=>i({target:s||null}),{wide:!0,placeholder:ia[r.action]}):g}
    ${r&&(r.action==="service"||r.action==="fire_dom_event")?sa(t,r,s=>i({data:s})):g}
    ${r&&!Et(e.type)&&!G(e.type)?.gangs?m`${On(t,e.marker??null,s=>n.update({marker:s}))}${It(t,e.icon,s=>n.update({icon:s}))}${Ln(t,e.pin_offset,s=>n.update({pin_offset:s}))}`:g}
  </div>`}function Bw(t,e,n){let r=t.t,o=e.picture??"",i=o.startsWith("image:"),s=async l=>{let c=l.target,u=c.files?.[0];if(c.value="",!u||!t.hass)return;let{data:d}=await Bn(u),f=I("img");await St(t.hass,f,d),n.update({picture:`image:${f}`})},a=H(t.hass,l=>/^(image|camera|media_player)\./.test(l));return m`<div class="nf-form nf-links">
    ${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(i?"picture_replace":"picture_upload")}<input type="file" accept="image/*" hidden @change=${s} /></label>`:g}
    ${i?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.update({picture:null})}>${r("delete")}</button></p>`:m`${j(t,r("picture_url"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?"":o,l=>n.update({picture:l||null}),{wide:!0,placeholder:"/local/holiday.jpg"})}
        ${P(t,r("picture_entity"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?o:null,void 0,a,l=>n.update({picture:l&&l!=="none"?l:null}))}`}
    ${E(t,r("picture_border"),e.picture_border??0,l=>n.update({picture_border:Math.max(0,Math.min(40,Math.round(l)))||null}),1,0)}
    ${O(t,r("picture_fit"),e.picture_fit??"cover",[["cover",r("picture_fit_cover")],["contain",r("picture_fit_contain")]],l=>n.update({picture_fit:l==="contain"?"contain":null}))}
    ${M(r("picture_hint"),"nf-wide")}
  </div>`}var Ww=/^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;function Vw(t,e,n){let r=t.t,o=e.show_when??null,i=s=>n.update({show_when:{entity:o?.entity??"",state:o?.state??null,invert:o?.invert||void 0,...s}});return m`<div class="nf-form">
    ${P(t,r("furn_show_when"),o?.entity||null,void 0,H(t.hass,s=>Ww.test(s)),s=>s&&s!=="none"?i({entity:s}):n.update({show_when:null}))}
    ${o?.entity?m`${j(t,r("furn_show_when_state"),o.state??"",s=>i({state:s||null}),{wide:!0,placeholder:t.hass?.states[o.entity]?.state??"on"})}
        ${L(t,r("furn_show_when_invert"),!!o.invert,s=>i({invert:s||void 0}))}`:g}
    ${M(r("furn_show_when_hint"),"nf-wide")}
  </div>`}function lo(t,e,n){let r=G(e.type)?.gangs??0,o=r?hm(t,e,r,n):Et(e.type)?fm(t,e,n):Fw.has(e.type)?g:m`<div class="nf-form nf-links">${sl(t,e,n)}</div>`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||t.t("furniture")}</h3>${n.lockButton}</div>
    <div class="nf-form">${Iw(t,e,n)} ${zw(t,e,n.packs,n)} ${Ow(t,e,n)}</div>
    ${Hw(t,e,n)} ${e.type==="stairs"&&e.stair?bm(t,e,n):g} ${Dw(t,e,n)} ${Pw(t,e,n)}
    ${o} ${e.type.endsWith(":sprinkler")?m`<div class="nf-form">${E(t,t.t("spray_reach"),e.spray??3,i=>n.update({spray:Math.min(15,Math.max(.5,i))}),.5,.5)}${M(t.t("spray_hint"),"nf-wide")}</div>`:g}
    ${pc(e.type)?Bw(t,e,n):g}
    ${G(e.type)?.pet?m`<div class="nf-form nf-links">${P(t,t.t("pet_room_sensor"),e.room_sensor??null,void 0,H(t.hass,i=>/^(sensor|device_tracker|input_select|select)\./.test(i)),i=>n.update({room_sensor:i&&i!=="none"?i:null}))}${M(t.t("pet_room_hint"),"nf-wide")}</div>`:g}
    ${as(e.type)?um(t,e,as(e.type),n):g} ${ss(G(e.type))?dm(t,e,n):g} ${e.type==="parking"?gm(t,e,n.packs,n):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&t.admin?m`<section>${M(t.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>n.toSpot(e)}>🅿 ${t.t("vehicle_to_spot")}</button></div></section>`:g}
    ${t.admin?Nw(t,e,n):g} ${Vw(t,e,n)} ${Cw(t,e,n)}
  </section>`}var Kw=["door","window","opening","garage_door"],Gw=/griff|handle|fenster|window|drehgriff/i;function Uw(t){let e=[null,15,30,45,60,90,120,180];return t&&!e.includes(t)&&e.push(t),e.sort((n,r)=>(n??0)-(r??0))}function jw(t){let{hass:e}=t,n=i=>e?.states[i],r=i=>n(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&Kw.includes(r(i)??"");return{covers:H(e,i=>i.startsWith("cover.")),positions:H(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(n(i)?.state))),contacts:H(e,i=>o(i)||he(i)&&Ss(n(i))!==null),plainContacts:H(e,o),handles:H(e,i=>i.startsWith("binary_sensor.")?typeof n(i)?.attributes.window_state=="string":he(i)&&(Ss(n(i))!==null||Gw.test(`${i} ${W(e,i)}`))),numbers:H(e,he),locks:H(e,i=>i.startsWith("lock."))}}function ll(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[n]=null);return pr(t.hass,r).get(e.id)?.[n]??null}var kt=t=>t==="none"?null:t;function Zw(t,e,n){let r=e.type==="door"?hs:fs,o=jt({type:e.type,style:null},n.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",t.t("style_auto",{style:t.t(`style_${o}`)})],...r.map(a=>[a,t.t(`style_${a}`)])];return O(t,t.t("opening_style"),i,s,a=>n.update({style:a||null}),{wide:!0})}function al(t,e,n,r,o){return m`<label class="nf-field"
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
  </label>`}function qw(t,e,n){if(e.type!=="door")return g;let r=jt(e,n.isExterior(e));return r==="sidelight"?m`${L(t,t.t("sidelight_hinge"),!!e.sidelight_hinge,o=>n.update({sidelight_hinge:o}),{wide:!1,title:t.t("sidelight_hinge_hint")})}
      ${al(t,e,"sidelight_width","sidelight_width",n)}`:r==="sidelights"?m`${al(t,e,"sidelight_width","sidelight_width_left",n)} ${al(t,e,"sidelight_width2","sidelight_width_right",n)}`:g}function Yw(t,e,n){return e.type!=="window"||jt(e,n.isExterior(e))!=="glass_wall"?g:m`<label class="nf-field"
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
    ${M(t.t("glass_panes_hint"),"nf-wide")}`}function wm(t,e,n,r,o){let i=n===1,s=t.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(p=>[p,s(`sensor_kind_${p}`)]),d=p=>{let _=p==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:p}:{sensor2:p},..._})},f=p=>r.update(i?{contact:p}:{contact2:kt(p)}),h=e.tilt_angle&&e.tilt_angle!=="none";return m`${O(t,s("sensor_kind"),c,u,d,{wide:!0})}
    ${c==="handle"?P(t,s("handle_entity"),l,void 0,o.handles,p=>f(p==="none"?i?"none":null:p)):P(t,s("contact_entity"),l,i?ll(t,e,"contact"):void 0,o.plainContacts,f)}
    ${c==="contact_tilt"?P(t,s("tilt_entity"),a,void 0,o.contacts,p=>r.update(i?{tilt:kt(p)}:{tilt2:kt(p)})):g}
    ${i?m`${P(t,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,p=>r.update({tilt_angle:kt(p)}))}
        ${h?m`${E(t,s("tilt_angle_max"),e.tilt_max??15,p=>r.update({tilt_max:Math.min(90,Math.max(1,p))}),1,1)}
            ${E(t,s("tilt_angle_offset"),e.tilt_offset??0,p=>r.update({tilt_offset:p}),.5)}
            ${L(t,s("tilt_angle_invert"),!!e.tilt_invert,p=>r.update({tilt_invert:p}))}`:g}`:g}`}function Xw(t,e,n,r){let o=t.t,i=e.type==="window",s=ll(t,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${P(t,o(i?"cover_entity":"door_cover"),e.cover,s,r.covers,l=>n.update({cover:l}))}
    ${a?m`${P(t,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>n.update({position:kt(l)}))}
        ${e.position?L(t,o("cover_position_invert"),!!e.position_inverted,l=>n.update({position_inverted:l})):g}
        ${L(t,o("device_confirm"),!!e.confirm,l=>n.update({confirm:l}),{title:o("cover_confirm_hint")})}
        ${i?m`${O(t,o("blind_kind"),e.blind??"roller",[["roller",o("blind_roller")],["venetian",o("blind_venetian")],["inside",o("blind_inside")]],l=>n.update({blind:l==="roller"?null:l}))}
            ${P(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:kt(l)}))}`:g}
        ${!i&&e.type!=="garage"?P(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:kt(l)})):g}
        ${E(t,o("cover_my"),e.my_position??0,l=>n.update({my_position:l>0?Math.min(100,Math.round(l)):null}),5,0)}
        ${M(o("blind_hint"),"nf-wide")}`:g}`}function Qw(t,e,n,r){let o=t.t,i=e.leaves===2;return m`${P(t,o(i?"contact_main":"contact_entity"),e.contact,ll(t,e,"contact"),r.contacts,s=>n.update({contact:s}))}
    ${i&&e.type!=="garage"?P(t,o("contact_second"),e.contact2,void 0,r.contacts,s=>n.update({contact2:kt(s)})):g}
    ${e.type==="door"?L(t,o("door_shut"),!!e.shut,s=>n.update({shut:s}),{title:o("door_shut_hint")}):g}
    ${e.type==="door"&&e.style!=="sliding"&&e.style!=="passage"?O(t,o("door_angle"),String(e.open_angle??""),Uw(e.open_angle).map(s=>[String(s??""),s?`${s}\xB0`:o("door_angle_default")]),s=>n.update({open_angle:s?Number(s):null}),{title:o("door_angle_hint")}):g}
    ${e.type==="door"?m`${P(t,o("opening_lock"),e.lock??null,void 0,r.locks,s=>n.update({lock:kt(s)}))}${M(o("opening_lock_hint"),"nf-wide")}`:g}`}function cl(t,e,n){let r=t.t,o=jw(t),i=yn(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=h=>n.update(h),u=Object.keys(bn).map(h=>m`<button class="nf-chip" aria-pressed=${h===i} @click=${()=>n.setPreset(e,h)}>${r(`preset_${h}`)}</button>`),d=[["left",r("hinge_left")],["right",r("hinge_right")]],f=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${n.lockButton}</div>
    ${t.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:g}
    ${t.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${E(t,r("width"),e.width,h=>c({width:Math.max(.3,h)}),.01,.3)}
      ${E(t,r("opening_position"),e.offset,h=>c({offset:Math.max(0,h)}),.01,0)}
      ${s?E(t,r("sill"),e.sill,h=>c({sill:Math.max(0,h)}),.01,0):g}
      ${E(t,r("opening_height"),e.height,h=>c({height:Math.max(.3,h)}),.01,.3)}
      ${a?g:Zw(t,e,n)} ${qw(t,e,n)} ${Yw(t,e,n)}
      ${s&&e.style!=="glass_wall"?O(t,r("window_opens"),e.opens??"turn",kc.map(h=>[h,r(`window_opens_${h}`)]),h=>c({opens:h==="turn"?null:h}),{wide:!0,title:r("window_opens_hint")}):g}
      ${O(t,r("opening_mark"),e.mark==="closed"?"closed":"",f,h=>c({mark:h==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:O(t,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,d,h=>c({hinge:h}),{wide:!0})}
      ${s?O(t,r("sill_boards"),e.sill_boards??"auto",[["auto",r("sill_boards_auto")],["none",r("sill_boards_none")],["inside",r("sill_boards_inside")],["outside",r("sill_boards_outside")]],h=>c({sill_boards:h==="auto"?null:h}),{wide:!0}):g}
      ${s?L(t,r("opening_rain_warning"),e.rain_warning!==!1,h=>c({rain_warning:h?void 0:!1}),{wide:!0}):g}
      ${s&&n.isBelowGround?.(e)?L(t,r("opening_light_well"),e.light_well!==!1,h=>c({light_well:h?null:!1}),{wide:!0}):g}
      ${Xw(t,e,n,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${wm(t,e,1,n,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${wm(t,e,2,n,o)}`:g}`:Qw(t,e,n,o)}
    </div>
    ${M(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function Gn(t){let e=t.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(n=>m`<button aria-pressed=${n.id===t.floorId} @click=${()=>t.setFloorId(n.id)}>${n.name}</button>`)}</div>`}function Un(t,e,n){return t.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${t.t("fix_hint")} @click=${n}>${e?`\u{1F512} ${t.t("unfix")}`:`\u{1F513} ${t.t("fix")}`}</button>`:g}function jn(t,e,n,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===n} ?disabled=${!t.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function xt(t,e){let{t:n,doc:r,hass:o}=t,i=n(`compass_${Ys(e,r.settings.north??0)}`);if(e.key===De)return n("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${n("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${U(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],a=e.section?n("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):n("solar_main");return e.flat?`${a} \xB7 ${n("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var ul=(t,e)=>m`<div class="nf-h3row"><h3>${t}</h3>${e}</div>`,dl=(t,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${t}</button>`,hn=(t,e)=>n=>Math.max(t,Math.min(e,ie(n)));function Jw(t,e){let{host:n,roof:r}=t,o=n.t,i=w=>r.patchSection(w),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[l[1],l[0]]:l,d=!!n.doc.settings.lock_plan,f=(w,x,k,$=.05,A=0)=>E(n,w,x,F=>k(Math.max(A,ie(F))),$,A),h=[...n.doc.floors].filter(w=>w.rooms.length>0).sort((w,x)=>x.elevation-w.elevation),p=Cs(n.doc,e)?.id,_=w=>{let x=n.doc.floors.find(A=>A.id===w);if(!x)return;let k=ie(x.elevation+x.height),$=k-e.base;i({base:k,eave_a:ie(e.eave_a+$),eave_b:ie(e.eave_b+$)})},y=d?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>t.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:Un(n,!!e.locked,()=>i({locked:!e.locked})),b=Sc.map(w=>[w,o(`roof_shape_${w}`)]),v=(w,x)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(w)}>+ ${o("roof_dormer")} ${x}</button>`;return m`${dl(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${Gn(t)}
      ${ul(`${e.dormer?o("roof_dormer"):o("roof_section")} ${yf(n.doc.settings.roof.sections??[],e.id)}`,n.admin?y:g)}
      ${O(n,o("roof_shape"),e.shape,b,w=>i({shape:w,...w==="gable"||w==="hip"||w==="halfhip"?{}:{ends:null}}),{wide:!0})}
      ${e.shape==="gable"||e.shape==="hip"||e.shape==="halfhip"?ov(n,e,i):g}
      ${s?g:jn(n,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,w=>i({axis:w}))}
      ${L(n,o("roof_open"),!!e.open,w=>i({open:w}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?f(o("roof_height"),e.eave_a,w=>i({eave_a:w,eave_b:w})):m`${f(`${o("roof_eave")} ${a?"":c}`,e.eave_a,w=>i({eave_a:w}))}
            ${a?g:f(`${o("roof_eave")} ${u}`,e.eave_b,w=>i({eave_b:w}))}
            ${f(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,w=>i({pitch_a:Math.min(75,w)}),1)}
            ${a?g:f(`${o("roof_pitch_short")} ${u}`,e.pitch_b,w=>i({pitch_b:Math.min(75,w)}),1)}`}
        ${f(o("roof_base"),e.base,w=>i({base:w}))}
        ${e.points?.length?g:E(n,o("roof_rotation"),e.rotation??0,w=>i({rotation:(Math.round(w)%360+540)%360-180||null}),1)}
        ${O(n,o("roof_on_floor"),p??"",h.map(w=>[w.id,w.name]),_,{title:o("roof_on_floor_hint")})}
        ${M(o("roof_base_hint"),"nf-wide")}
        ${f(o("roof_overhang"),e.overhang??n.doc.settings.roof.overhang,w=>i({overhang:Math.min(2,w)}))}
      </div>
      <details class="nf-section" ?open=${!!e.overhang_sides}>
        <summary>${o("roof_overhang_sides")}</summary>
        <div class="nf-form">
          ${["a","b","u0","u1"].map(w=>f(o(`roof_overhang_${w}`),$r(n.doc,e,e.overhang??n.doc.settings.roof.overhang)[w],x=>i({overhang_sides:{...e.overhang_sides??{},[w]:Math.min(2,Math.max(0,x))}})))}
          ${n.admin&&e.overhang_sides?m`<button class="nf-btn" @click=${()=>i({overhang_sides:null})}>${o("roof_overhang_auto")}</button>`:g}
        </div>
        ${M(o("roof_overhang_sides_hint"))}
      </details>
      ${s&&n.admin?m`${Y(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${e.points?Y(...e.points.map((w,x)=>m`<button class="nf-chip" title=${o("delete_point")} ?disabled=${(e.points?.length??0)<=3} @click=${()=>r.removeCorner(x)}>${x+1} ×</button>`)):g}
          ${M(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${M(`${o("roof_ridge_height")}: ${fe(n.hass,Zt(e))} \xB7 ${o("roof_section_hint")}`)}
      ${n.admin?Y(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${v("a",c)}${a?g:v("b",u)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function ev(t,e){let{host:n,roof:r}=t,o=n.t,i=Z(n.doc),s=f=>r.patchWindow(f),a=H(n.hass,f=>f.startsWith("cover.")),l=H(n.hass,f=>ni(f)||he(f)),c=(f,h,p,_)=>P(n,o(f),h??null,void 0,p,y=>s({[_]:y==="none"?null:y})),u=f=>{let h=i.find(p=>p.key===f);h&&s({...Or(h,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},d=(n.doc.settings.roof.windows??[]).findIndex(f=>f.id===e.id)+1;return m`${dl(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${ul(`\u{1FA9F} ${o("roof_window")} ${d}`,Un(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("solar_face"),e.face,i.map(f=>[f.key,xt(n,f)]),u,{wide:!0})}
        ${E(n,o("width"),e.w??.78,f=>s({w:hn(.3,4)(f)}),.01,.3)}
        ${E(n,o("height_m"),e.h??1.18,f=>s({h:hn(.3,4)(f)}),.01,.3)}
        ${E(n,o("solar_u"),e.u,f=>s({u:ie(f)}),.05)} ${E(n,o("solar_v"),e.v,f=>s({v:ie(f)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${j(n,o("roof_window_name"),e.name??"",f=>s({name:f||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("roof_window_motor_hint"))} ${M(o("roof_window_hint"))}
      ${n.admin?Y(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function tv(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.windows??[],o=new Map(Z(e.doc).map(s=>[s.key,s])),i=s=>{n.windowId=s,n.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${M(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?xt(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${Y(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function nv(t,e){let{host:n,roof:r}=t,o=n.t,i=Z(n.doc),s=d=>r.patchChimney(d),a=tn(e),l=d=>{let f=i.find(h=>h.key===d);f&&s({...Lr(f,e.id),shape:e.shape,w:e.w,d:e.d,h:e.h,name:e.name})},c=a.shape==="round"||a.shape==="steel",u=(n.doc.settings.roof.chimneys??[]).findIndex(d=>d.id===e.id)+1;return m`${dl(o("roof_sections"),()=>r.chimneyId=null)}
    <section>
      ${ul(`\u{1F9F1} ${o("chimney")} ${u}`,Un(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("chimney_shape"),a.shape,Mc.map(d=>[d,o(`chimney_${d}`)]),d=>s({shape:d,w:null,d:null,h:null}),{wide:!0})}
        ${O(n,o("solar_face"),e.face,i.map(d=>[d.key,xt(n,d)]),l,{wide:!0})}
        ${c?E(n,o("chimney_diameter"),a.w,d=>s({w:hn(.1,3)(d),d:hn(.1,3)(d)}),.01,.1):m`${E(n,o("width"),a.w,d=>s({w:hn(.1,3)(d)}),.01,.1)} ${E(n,o("chimney_depth"),a.d,d=>s({d:hn(.1,3)(d)}),.01,.1)}`}
        ${E(n,o("chimney_height"),a.h,d=>s({h:hn(.2,5)(d)}),.05,.2)}
        ${E(n,o("solar_u"),e.u,d=>s({u:ie(d)}),.05)} ${E(n,o("solar_v"),e.v,d=>s({v:ie(d)}),.05)}
        ${j(n,o("roof_window_name"),e.name??"",d=>s({name:d||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("chimney_hint"))}
      ${n.admin?Y(m`<button class="nf-btn nf-danger" @click=${()=>r.removeChimney()}>${o("delete")}</button>`):g}
    </section>`}function rv(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.chimneys??[],o=new Map(Z(e.doc).map(s=>[s.key,s])),i=s=>{n.chimneyId=s,n.sectionId=null};return m`<section>
    <h3>🧱 ${e.t("chimneys")}</h3>
    ${o.size>0?g:M(e.t("solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("chimney")} ${a+1} · ${e.t(`chimney_${tn(s).shape}`)} · ${l?xt(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${Y(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addChimney()}>+ ${e.t("chimney")}</button>`)}
  </section>`}function ov(t,e,n){let r=t.t,o=e.shape,[i,s]=e.ends??[o,o],a=["gable","hip","halfhip"].map(u=>[u,r(`roof_shape_${u}`)]),l=u=>n({ends:u[0]===o&&u[1]===o?null:u}),c=i==="halfhip"||s==="halfhip";return m`<div class="nf-form">
    ${O(t,r("roof_end_start"),i,a,u=>l([u,s]))}
    ${O(t,r("roof_end_end"),s,a,u=>l([i,u]))}
    ${c?m`<label class="nf-field nf-wide" title=${r("roof_halfhip_hint")}
          >${r("roof_halfhip")} · ${Math.round((e.halfhip??.55)*100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((e.halfhip??.55)*100))} ?disabled=${!t.admin} @change=${u=>n({halfhip:Number(u.target.value)/100})} />
        </label>`:g}
  </div>`}function vm(t){let{host:e,roof:n}=t,r=e.doc.settings.roof,o=r.type==="custom";if(n.window)return ev(t,n.window);if(n.chimney)return nv(t,n.chimney);if(o&&n.section)return Jw(t,n.section);let i=o?r.sections??[]:[],s=e.t,a=(l,c)=>`${c+1} \xB7 ${l.dormer?s("roof_dormer"):s(`roof_shape_${l.shape}`)} \xB7 ${U(e.hass,Math.abs(l.x1-l.x0),1)} \xD7 ${U(e.hass,Math.abs(l.z1-l.z0),1)} m \xB7 ${s("roof_ridge_height")} ${U(e.hass,Zt(l),1)} m`;return m`<section>
      ${Gn(t)}
      <h3>${s("roof_sections")}</h3>
      ${M(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((l,c)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>n.sectionId=l.id}><span>${a(l,c)}</span></button></div>`)}</div>
          ${Y(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(l=>l.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:Y(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>n.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${tv(t)} ${rv(t)}`}var hl=40,km=60;function fl(t){let e=new Set((t.solar??[]).map(n=>n.string).filter(Boolean));t.strings=(t.strings??[]).filter(n=>e.has(n.id))}function xm(t,e,n,r){let o=t.solar?.find(i=>i.id===e);if(o){if(n==="new"){let i=t.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};t.strings=[...i,s],o.string=s.id}else o.string=n;fl(t)}}function $m(t,e){let n=new Set(t??[]);return n.delete(e)||n.add(e),n.size>0?[...n].sort():null}function Sm(t){let e=t.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(km,e[0])),layout:null,skip:null}:{layout:e.slice(0,hl).map(r=>Math.min(km,r)),rows:Math.min(hl,e.length),cols:Math.max(1,...e),skip:null}}function Mm(t,e){let n=Math.max(1,Math.min(hl,Math.round(e))),r=t.layout;return r?.length?{rows:n,layout:Array.from({length:n},(o,i)=>r[i]??r[r.length-1])}:{rows:n}}var Rm=t=>t.layout?.length?t.layout.join(", "):String(t.cols),iv=["portrait","look","name","string","entity","module_w","module_h","wp"];function sv(t){let e={};for(let n of iv)e[n]=t[n];return e}function Em(t,e,n){let r=sv(e);if(n===De)return{...Dr(t,e.id),...r,rows:e.rows,cols:e.cols};let o=Z(t).find(s=>s.key===n);if(o)return Qo(o,{...e,...r});let i=Ke(t).find(s=>s.key===n);return i?Qo(i,{...e,...r,rows:1}):null}var Am=400;function pl(t,e){let n=t?Ue(t,e).length:0;return{modules:n,kwp:n*(e.wp??Am)/1e3}}function Fm(t){let{host:e,roof:n}=t,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=Z(e.doc),a=new Map(o.map(u=>[u.id,xe(e.doc,u,s)])),l=(u,d)=>{let f=a.get(u.id),h=pl(f,u),p=r("solar_summary",{n:h.modules,kwp:U(e.hass,h.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>n.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${d+1}`} · ${f?xt(e,f):r("solar_face_gone")} · ${p}</span>
      </button>
    </div>`},c=u=>{let d=o.filter(_=>_.string===u.id),f=d.map(_=>pl(a.get(_.id),_)),h=f.reduce((_,y)=>_+y.modules,0),p=f.reduce((_,y)=>_+y.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:d.length,n:h,kwp:U(e.hass,p,1)})}</p>`};return m`<section>
    ${Gn(t)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${M(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${Y(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>n.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!t.floorId} @click=${()=>n.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function av(t,e){let{host:n,roof:r}=t,o=n.t,i=H(n.hass,f=>Pn(n.hass,f)),s=n.doc.settings.roof.strings??[],a=s.find(f=>f.id===e.string),l=[["",o("solar_string_none")],...s.map(f=>[f.id,f.name]),["new",`+ ${o("solar_string_new")}`]],c=O(n,o("solar_string"),e.string??"",l,f=>r.setString(f===""?null:f),{wide:!0});if(!a)return m`${c}${P(n,o("solar_entity"),e.entity??null,void 0,i,f=>r.patchField({entity:f==="none"?null:f}))}`;let u=n.hass?Be(n.hass,n.doc.floors):null,d=n.doc.floors.flatMap(f=>f.furniture.filter(h=>h.type==="inverter").map(h=>({item:h,floor:f}))).map(({item:f,floor:h},p)=>{let _=u?.get(f.id)?.entity,y=f.name?.trim()||(_?W(n.hass,_):"");return[f.id,`${y||`${o("furn_inverter")} ${p+1}`} \xB7 ${h.name}`]});return m`${c}
    ${j(n,o("solar_string_name"),a.name,f=>r.patchString({name:f||a.name}),{wide:!0})}
    ${P(n,o("solar_string_entity"),a.entity??null,void 0,i,f=>r.patchString({entity:f==="none"?null:f}))}
    ${O(n,o("solar_string_inverter"),a.inverter??"",[["",o(d.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...d],f=>r.patchString({inverter:f||null}),{wide:!0})}`}function Tm(t,e){let{host:n,roof:r}=t,o=n.t,i=k=>r.patchField(k),s=Z(n.doc),a=xe(n.doc,e,s),l=e.face===De,c=Ar(e),u=pl(a,e),d=c.reduce((k,$)=>k+$,0)-(e.skip?.length??0),f=(n.doc.settings.roof.solar??[]).findIndex(k=>k.id===e.id)+1,h=[...a?[]:[["",o("solar_face_gone")]],...s.map(k=>[k.key,xt(n,k)]),[De,o("solar_ground")],...Ke(n.doc).map(k=>[k.key,xt(n,k)])],p=k=>{let $=Em(n.doc,e,k);$&&i($)},_=(k,$,A=ie)=>F=>Math.max(k,Math.min($,A(F))),y=k=>i(Ir(n.doc,e,k)),b=k=>i({rotation:(Math.round(k)%360+360)%360||null}),v=a?.wall?"solar_flip_wall":"solar_flip",w=(k,$,A)=>E(n,o($),e[k]??A,F=>i({[k]:_(.3,3)(F)}),.01,.3),x=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${Gn(t)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${f}`}</h3>
        ${Un(n,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${j(n,o("solar_name"),e.name??"",k=>i({name:k||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${O(n,o("solar_face"),a?e.face:"",h,p,{wide:!0})}
        ${E(n,o("solar_rows"),c.length,k=>i(Mm(e,k)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!n.admin}
            .value=${Rm(e)}
            @change=${k=>{let $=Sm(k.target.value);$&&i($)}}
          />
        </label>
      </div>
      ${M(`${a&&!a.unbounded?`${o("solar_face_size",{w:U(n.hass,a.lu,1),h:U(n.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${x?jn(n,["left","center","right"].map(k=>[k,o(`solar_align_${k}`)]),e.align??"left",k=>i({align:k})):g}
      ${jn(n,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,k=>i({portrait:k}))}
      ${jn(n,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",k=>i({look:k}))}
      <div class="nf-form">
        ${w("module_w","solar_module_w",1.13)} ${w("module_h","solar_module_h",1.72)}
        ${E(n,o("solar_wp"),e.wp??Am,k=>i({wp:_(50,1500,Math.round)(k)}),5,50)}
      </div>
      ${Y(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!n.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!n.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?M(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${E(n,o("solar_base"),e.base??0,k=>i({base:k>.001?Math.min(60,ie(k)):null}),.05,0)}
            ${E(n,o("solar_rotation"),e.rotation??0,y,5)}
            ${Y(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${E(n,o("solar_u"),e.u,k=>i({u:ie(k)}),.05)} ${E(n,o(a?.wall?"solar_v_wall":"solar_v"),e.v,k=>i({v:ie(k)}),.05)}`}
        ${a?.flat&&!l?E(n,o("solar_rotation"),e.rotation??0,b,5):g}
        ${a?.wall?E(n,o("solar_tilt_wall"),e.tilt??0,k=>i({tilt:_(0,90,Math.round)(k)}),5,0):g}
        ${a?.flat?E(n,o("solar_tilt"),e.tilt??15,k=>i({tilt:_(0,45,Math.round)(k)}),1,0):g}
        ${a?.flat&&!a.unbounded?L(n,o("solar_rack_ew"),e.rack==="ew",k=>i({rack:k?"ew":null}),{title:o("solar_rack_ew_hint")}):g}
        ${a&&!a.flat&&!a.wall?E(n,o("solar_rack_tilt"),e.tilt??0,k=>i({tilt:_(0,45,Math.round)(k)||null}),1,0):g}
        ${a?.wall||a?.flat?L(n,o(v),!!e.flip,k=>i({flip:k})):g}
      </div>
      ${a?.flat&&!l?Y(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)-90)}>↺ 90°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)+90)}>↻ 90°</button>`):g}
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:U(n.hass,u.kwp,1)})}${u.modules<d?m` · <b>${o("solar_partial",{n:u.modules,total:d})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${av(t,e)}</div>
      ${M(o("solar_string_hint"))} ${M(o("solar_form_hint"))}
      ${n.admin?Y(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...An(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var zm=t=>Math.round(t*1e3)/1e3,Oi=class{ctx;sectionSel=null;windowSel=null;chimneySel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get chimneyId(){return this.chimneySel}set chimneyId(e){this.chimneySel=e,e&&(this.windowSel=null),this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get chimney(){return this.chimneySel?this.settings.chimneys?.find(e=>e.id===this.chimneySel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let n=(this.settings.sections??[]).length>0;e&&n&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!n)&&(r.settings.roof.sections=Ns(r,()=>I("roof")))}),this.sectionId=null)}addSection(e,n){if(!this.admin)return;let r=_f(this.doc,e,n);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:n,wall_interior:r}=this.doc.settings,o=zs(e.rooms,e.walls??[],n,r);if(!o)return;let i=o.map(([s,a])=>[zm(s),zm(a)]);this.patchSection({shape:"flat",points:i,...Pt(i)})}addDormer(e){let n=this.section;if(!n||!this.admin)return;let r=Ps(n,e,I("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeCorner(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&vf(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.sections=(n.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let n=bf(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],n]),this.sectionId=n.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,n=Hr(Z(this.doc).filter(o=>!o.flat),e)??Z(this.doc)[0];if(!n)return;let r=Or(n,I("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let n=this.windowSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=Z(r).find(s=>s.key===o.face);i&&Object.assign(o,ct(i,en(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.windows=(n.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addChimney(){if(!this.admin)return;let e=Z(this.doc),n=e.find(o=>!o.flat)??e[0];if(!n)return;let r=Lr(n,I("chim"));this.ctx.host.change(o=>o.settings.roof.chimneys=[...o.settings.roof.chimneys??[],r]),this.chimneySel=r.id,this.windowSel=null,this.sectionId=null}patchChimney(e){let n=this.chimneySel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.chimneys?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=Z(r).find(s=>s.key===o.face);i&&Object.assign(o,ct(i,yt(o,i)))})}removeChimney(){let e=this.chimneySel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.chimneys=(n.settings.roof.chimneys??[]).filter(r=>r.id!==e)),this.chimneyId=null)}addField(){if(!this.admin)return;let e=Z(this.doc),n=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=Hr(e.filter(i=>!n.has(i.key)),r)??Hr(e,r);o&&(this.appendField(An(o,I("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,n=this.admin&&e?Us(this.doc,I("pv"),e):null;n&&this.appendField(n)}addGroundField(){this.admin&&this.appendField(Dr(this.doc,I("pv")))}appendField(e){this.ctx.host.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let n=this.settings.solar?.find(r=>r.id===e);n?.face.startsWith("wall:")&&this.ctx.setFloorId(n.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((n,r)=>{Object.assign(n,e);let o=xe(r,n);o&&Object.assign(n,ct(o,n))})}toggleCell(e){this.editField(n=>n.skip=$m(n.skip,e))}editField(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===n);o&&e(o,r)})}setString(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>xm(r.settings.roof,n,e,{id:I("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let n=this.field?.string;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(n=>{n.settings.roof.solar=(n.settings.roof.solar??[]).filter(r=>r.id!==e),fl(n.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,n)=>n.elevation-e.elevation)}};var Pm=(t,e)=>t.floors.flatMap(n=>n.furniture).find(n=>n.type===e),lv=t=>!t||t==="none";async function Dm(t){let e;try{e=await t.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let n=th(t.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Pm(t.doc(),i);!l&&t.canAdd()&&(t.addDevice(i),l=Pm(t.doc(),i)),!(!l||!lv(l[s]))&&(t.setField(l.id,s,a),r++)};return o("meter","power",n.grid),o("inverter","power",n.solar),o("home_battery","power",n.battery),o("home_battery","soc",n.battery_soc),{kind:"done",filled:r}}var cv=/garage|carport/,uv=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,dv=/flur|diele|eingang|hall|entr|lobby/,Im=.25,Zn=t=>Math.round(t*1e3)/1e3;function hv(t,e,n){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(d=>u.test(n.roomLabel(d).toLowerCase())),i=r.find(u=>e.furniture.some(d=>d.type==="parking"&&N([d.x,d.z],u.points))),s=o(cv)??i,a=o(uv),l=t==="wallbox"?s:t==="meter"?a??o(dv)??s:a??s,c=[...r].sort((u,d)=>Math.abs(_e(d.points))-Math.abs(_e(u.points)))[0];return l??n.selected??c}function fv(t,e){let[n,r]=be(t.points),o=t.points.some((s,a)=>!e.has(a)),i=null;return t.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=t.points[(a+1)%t.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(n-u[0])*d[0]+(r-u[1])*d[1]<0&&(d=[0-d[0],0-d[1]]),i={mid:u,inward:d,length:c}}),i}function Om(t,e,n,r){let[o,i,s]=st(t),a={id:I("furniture"),type:t,rotation:0,w:o,d:i,h:s,variant:null};if(t==="grid_point"){let h=oh(e),[p,_]=h?[h.x,h.z]:r.fallback;return{...a,x:Zn(p),z:Zn(_)}}let l=hv(t,n,r),[c,u]=l?be(l.points):r.fallback;if(l){let h=new Set(n.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),p=fv(l,h);p&&([c,u]=[p.mid[0]+p.inward[0]*(i/2+Im),p.mid[1]+p.inward[1]*(i/2+Im)])}let d={...a,x:Zn(c),z:Zn(u)},f=l?_r({...n,furniture:[...n.furniture,d]},d,e.settings.wall_interior):null;return f?{...d,x:Zn(f.x),z:Zn(f.z),rotation:f.rotation}:d}var Li=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let n=this.undoStack.pop();return n===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(n))}redo(e){let n=this.redoStack.pop();return n===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(n))}};var ml=t=>Math.round(t*1e3)/1e3,qn="unmovable",Hi="no change";function Lm(t,e,n,r){let o=i=>[ml(i[0]+n),ml(i[1]+r)];switch(e.kind){case"device":return t.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:qn;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=t.openings.find(_=>_.id===e.id),s=i?Pe(i,t.rooms,t.walls??[]):null;if(!i||!s)return qn;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,u=(n*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(u)<1e-9)return Hi;let d=Dt(t.openings,i),f=!i.wall&&d.length>1?zn(s.room,d):null;if(f){let _=Math.max(0,Math.min(Cr(s.room)-f.width,f.from+u));return Math.abs(_-f.from)<1e-9?Hi:{apply(y){let b=y.openings.find(w=>w.id===e.id),v=b?Nr(y.openings,s.room,b,_,f.width):null;v&&(y.openings=v)}}}let h=Math.min(i.width,c)/2,p=ml(Math.min(c-h,Math.max(h,i.offset+u)));return{apply(_){let y=_.openings.find(b=>b.id===e.id);y&&(y.offset=p)}}}case"room":{let i=t.rooms.find(a=>a.id===e.id);if(!i)return qn;let s=new Set(t.placements.filter(a=>N([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var Ci=t=>Math.round(t*1e3)/1e3,gl=t=>(t+90)%360;function Hm(t,e,n){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of t.rooms)o.points=o.points.map(e);for(let o of t.furniture)r(o),n&&(o.rotation=gl(o.rotation));for(let o of t.placements)r(o),n&&(o.rotation=gl(o.rotation??0));for(let o of t.outdoor)o.points=o.points.map(e);for(let o of t.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];t.background&&(r(t.background),n&&(t.background.rotation=gl(t.background.rotation??0)))}function pv(t,e){for(let r of t.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let n=t.energy.meter;n&&([n.x,n.z]=e([n.x,n.z]))}function Cm(t,e,n,r){if(e.allFloors){for(let o of t.floors)Hm(o,n,r);pv(t,n)}else{let o=t.floors.find(i=>i.id===e.floorId);o&&Hm(o,n,r)}}function Nm(t,e,n,r){Cm(t,e,([o,i])=>[Ci(o+n),Ci(i+r)],!1)}function mv(t,e){let r=(e.allFloors?t.floors:t.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Bm(t,e){let n=mv(t,e);if(!n)return!1;let[r,o]=n;return Cm(t,e,([i,s])=>[Ci(r-(s-o)),Ci(o+(i-r))],!0),!0}var Ni=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,n){this.ids[e]=n,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,n,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=n,e==="room"?i.room=n:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&n&&(i.room=r.roomOfDevice(n)??i.room),e==="opening"&&n&&(i.room=r.roomOfOpening(n)??i.room),(e!=="room"||n!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let n=this.ids[e];if(n)return{kind:e,id:n}}return null}};var Bi=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;copyChoice=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get floorCopy(){return this.copyChoice}set floorCopy(e){this.copyChoice=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let n=new Set(this.unfolded);n.delete(e)||n.add(e),this.unfolded=n,this.onChange()}};var gv=/garage|carport|keller|cellar|basement|technik|heizung|heizraum|boiler|utility|werkstatt|schuppen|shed|dachboden|attic/i,co=t=>t.living??!gv.test(t.name),_v=.1,Wm=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function _l(t,e,n,r,o=_v){if(n.points.length<3)return{roomId:n.id,floor:0,living:0,low:0};let i=Wm(n.points),s=r.filter(p=>{let _=Wm(p.footprint);return _.x1>=i.x0&&_.x0<=i.x1&&_.z1>=i.z0&&_.z0<=i.z1}),a=e.elevation+(n.ceiling!=null&&n.ceiling>0?n.ceiling:e.height),l=(t.settings.roof?.sections??[]).some(p=>!p.open),c=ds(n),u=0,d=0,f=0;for(let p=i.x0+o/2;p<i.x1;p+=o)for(let _=i.z0+o/2;_<i.z1;_+=o){if(!N([p,_],n.points)||s.some(v=>N([p,_],v.footprint)))continue;let y=l?Sr(t,p,_):null,b=Math.min(a,y??1/0)-e.elevation-c;b>=2?u++:b>=1?d++:f++}let h=o*o;return{roomId:n.id,floor:(u+d+f)*h,living:co(n)?(u+d/2)*h:0,low:(d+f)*h}}var Vm=new WeakMap;function uo(t,e){if(e.layer)return[];let n=Vm.get(e);if(n&&n.roof===t.settings.roof)return n.areas;let r=bv(t,e);return Vm.set(e,{roof:t.settings.roof,areas:r}),r}function bv(t,e){let n=me(e.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},e.walls??[]).walls;return e.rooms.map(r=>_l(t,e,r,n))}var Yn=t=>t.reduce((e,n)=>({floor:e.floor+n.floor,living:e.living+n.living,low:e.low+n.low}),{floor:0,living:0,low:0});function Km(t,e,n){let r=t.floors.length,o=e?.name??(r===0?n.first:n.next(r));return{...He(I("floor"),o,Cc(t.floors,e?.level)),ha_floor:e?.floor_id??null}}function bl(t,e){let n=t.findIndex(o=>o.elevation>e.elevation),r=n<0?t.length:n;return[...t.slice(0,r),e,...t.slice(r)]}function Gm(t,e,n){let r=t.findIndex(s=>s.id===e),o=r+n;if(r<0||o<0||o>=t.length)return[...t];let i=[...t];return[i[r],i[o]]=[i[o],i[r]],i}function Um(t,e){let n=new Set(t.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!n.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function Xn(t,e,n){if(!e.ha_floor)return[];let r=new Set(t.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(n??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function jm(t,e,n){return Object.values(n??{}).filter(r=>r.floor_id===e.ha_floor||!t.floors.some(o=>o.ha_floor===r.floor_id))}function Zm(t,e,n,r,o=I){let i=structuredClone(e),s=t.floors.reduce((u,d)=>Math.max(u,d.elevation+d.height),e.elevation+e.height),a=new Map,l=new Map;i.id=o("floor"),i.name=n,i.elevation=Math.round(s*1e3)/1e3,i.ha_floor=null,i.start_view=null,i.rooms=i.rooms.map(u=>{let d=o("room");return a.set(u.id,d),{...u,id:d,area_id:null}}),i.walls=(i.walls??[]).map(u=>{let d=o("wall");return l.set(u.id,d),{...u,id:d}}),i.openings=i.openings.filter(u=>a.has(u.room_id)).map(u=>({...u,id:o("opening"),room_id:a.get(u.room_id),wall:u.wall?l.get(u.wall)??null:u.wall}));let c=new Set(["meter","inverter","home_battery","wallbox","grid_point"]);return i.furniture=r.furniture?i.furniture.filter(u=>!c.has(u.type)).map(u=>kv({...u,id:o("furniture")})):[],i.placements=r.devices?i.placements:[],i.outdoor=r.outdoor?i.outdoor.map(u=>({...u,id:o("outdoor")})):[],i}var yv=["entity","power","fan_entity","room_sensor"],wv=["door_left","door_right","soc","charge","export","status","temp_entity","temp_entity2","state_entity","state_entity2","color_entity","care_entity","cover_entity","type_entity","parent_meter","car","tap"],vv=["gang_entities","pictures","types","meter_floors","show_when","extra_lights"];function kv(t){let e={...t};for(let n of yv)(n==="entity"||n==="power"||e[n]!=null)&&(e[n]="none");for(let n of wv)e[n]!=null&&(e[n]=null);for(let n of vv)delete e[n];return e}function qm(t,e,n,r){let o=t.floors.find(l=>l.id===e),i=t.floors.find(l=>l.id===r);if(!o||!i||o===i)return!1;let s=o.furniture.findIndex(l=>l.id===n);if(s<0)return!1;let[a]=o.furniture.splice(s,1);return i.furniture.push(a),!0}function xv(t,e,n){if(e.layer||!e.rooms.length)return g;let r=t.t,o=Yn(uo(t.doc,e)).living,i=Yn(t.doc.floors.flatMap(s=>uo(t.doc,s))).living;return m`<p class="nf-sub nf-wide" title=${r("living_area_hint")}>
      ${r(t.doc.floors.length>1?"living_area_floor_house":"living_area_floor",{floor:Ee(t.hass,o),house:Ee(t.hass,i)})}
    </p>
    <div class="nf-actions nf-wide"><button class="nf-btn" title=${r("print_plan_hint")} @click=${()=>n.print()}>🖨️ ${r("print_plan")}</button></div>`}function $v(t,e,n,r){let o=Um(t.doc,t.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:n.addFloor(null);return m`<div class="nf-floor-list">
      ${[...t.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>n.openFloor(s.id)}>${s.name}</button>`)}
      ${t.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${t.t("add_floor")}</button>`:g}
    </div>
    ${t.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${M(t.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>n.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${t.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>n.addFloor(null)}>${t.t("floor_empty")}</button>
        </div>`:g}`}function Sv(t,e,n,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${t.t("floor_shift_hint")}>
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
  </div>`}function Mv(t,e,n,r){let o=t.t,i=s=>e.floorCopy={...r,...s};return m`<div class="nf-form nf-wide nf-copy-floor">
    ${M(o("floor_copy_hint"),"nf-wide")}
    ${L(t,o("floor_copy_furniture"),r.furniture,s=>i({furniture:s}))}
    ${L(t,o("floor_copy_devices"),r.devices,s=>i({devices:s}),{title:o("floor_copy_devices_hint")})}
    ${L(t,o("floor_copy_outdoor"),r.outdoor,s=>i({outdoor:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${()=>n.duplicateFloor(r)}>${o("floor_copy_make")}</button>
      <button class="nf-btn" @click=${()=>e.floorCopy=null}>${o("cancel")}</button>
    </div>
  </div>`}function Rv(t,e,n,r){let o=t.t,i=c=>t.change((u,d)=>Object.assign(d,c)),s=jm(t.doc,r,t.hass?.floors),a=Xn(t.doc,r,t.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${j(t,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${E(t,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${t.admin?Sv(t,e,n,r):g}
    ${E(t,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(t.hass?.floors??{}).length>0?O(t,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${L(t,o("floor_layer"),!!r.layer,c=>i({layer:c||void 0}),{title:o("floor_layer_hint")})}
    ${P(t,o("floor_power"),r.power_entity??null,void 0,H(t.hass,c=>c.startsWith("sensor.")&&t.hass?.states[c]?.attributes.device_class==="power"),c=>i({power_entity:c&&c!=="none"?c:null}))}
    ${r.power_entity?M(o("floor_power_hint"),"nf-wide"):g}
    ${r.layer?g:Ie(t,o("wall_paint_floor"),r.wall_paint_outside,t.doc.settings.wall_paint_outside??To,c=>i({wall_paint_outside:c}))}
    ${xv(t,r,n)}
    ${t.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>n.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${t.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>n.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>n.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn" @click=${()=>e.floorCopy=e.floorCopy?null:{furniture:!0,devices:!1,outdoor:!1}}>${o("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${()=>n.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          ${e.floorCopy?Mv(t,e,n,e.floorCopy):g}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>n.closeGaps()}>${o("gaps_close")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function Ym(t,e,n,r,o){return m`<section>
    <h3>${t.t("floors")}</h3>
    ${$v(t,e,n,o)} ${r?Rv(t,e,n,r):g}
  </section>`}var Xm=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Qm(t,e){let n=ue(t.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((n.z1-n.z0)/1.2)),cols:Math.max(1,Math.round((n.x1-n.x0)/1.2)),entity:e[0]??null}}function Wi(t,e){let[n,r,o]=Je[e.type];return Kc(t,e.rows,e.cols).map(([i,s])=>({id:I("furniture"),type:e.type,x:i,z:s,rotation:0,w:n,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var yl=t=>Math.max(1,Math.min(12,Math.round(t)));var Ev=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=Ev;var Jm=/^(media_player|assist_satellite)\./;function Av(t,e){return e?Object.values(t.entities??{}).filter(n=>!n.hidden&&(n.area_id??(n.device_id?t.devices?.[n.device_id]?.area_id:null))===e).map(n=>n.entity_id):[]}function eg(t,e){let n=t.states[e];return!n||n.state==="unavailable"?!1:e.startsWith("notify.")?t.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):n.state==="off"||n.state==="unknown"?!1:n.attributes.device_class!=="tv"}function tg(t,e,n){if(n.announce_speaker==="none")return null;if(n.announce_speaker)return n.announce_speaker;if(e&&n.points.length>=3){let i=[...e.placements.filter(s=>Jm.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&Jm.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>N([s.x,s.z],n.points)&&eg(t,s.id));if(i)return i.id}let r=Av(t,n.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=r.filter(s=>s.startsWith(o)&&eg(t,s)).sort()[0];if(i)return i}return null}function ng(t,e,n){return e.rooms.length===0?g:m`<section>
    <h3>${t.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>n.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${Ee(t.hass,ve(r.points))}</span>
        </button>`)}
    </div>
  </section>`}function Fv(t,e,n,r){let o=e.spots,i=c=>e.spots={...o,...c},s=Wi(n,o).length,a=H(t.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=Xm.map(c=>[c,t.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${O(t,t.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${E(t,t.t("spots_cols"),o.cols,c=>i({cols:yl(c)}),1,1)}
    ${E(t,t.t("spots_rows"),o.rows,c=>i({rows:yl(c)}),1,1)}
    ${P(t,t.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${t.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${t.t("cancel")}</button>
    </div>
    ${M(t.t("spots_hint"),"nf-wide")}
  </div>`}function Tv(t,e,n,r){return m`<details class="nf-points" ?open=${!n}>
    <summary>${t.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${E(t,t.t("x"),o[0],s=>r.setCorner(i,0,s))} ${E(t,t.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${t.admin?m`<button class="nf-btn" title=${t.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function zv(t,e,n){let r=t.floor,o=r?_l(t.doc,r,e,n):void 0;if(!o||o.floor<=0)return g;let i=t.t;return co(e)?m`<p class="nf-sub nf-wide" title=${i("living_area_hint")}>
    ${o.low>.05?i("living_area_low",{living:Ee(t.hass,o.living),floor:Ee(t.hass,o.floor),low:Ee(t.hass,o.low)}):i("living_area",{living:Ee(t.hass,o.living)})}
  </p>`:m`<p class="nf-sub nf-wide">${i("living_area_none",{floor:Ee(t.hass,o.floor)})}</p>`}function Pv(t,e,n,r){let o=t.t,i=s=>r.patch({ceiling:Math.abs(s-n.height)<.005?null:Math.min(20,Math.max(1,Math.round(s*1e3)/1e3))});return m`${E(t,o("room_ceiling"),e.ceiling??n.height,i,.01,1)}
    ${e.ceiling!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({ceiling:null})}>${o("height_auto")}</button>`:g}
    ${M(o("room_ceiling_tip"),"nf-wide")}
    ${e.ceiling!=null&&e.ceiling>n.height+.005?m`<p class="nf-sub nf-wide">${o("room_ceiling_through",{ceiling:U(t.hass,e.ceiling,2),floor:U(t.hass,n.height,2)})}</p>`:g}`}function Dv(t,e,n,r){let o=t.t;if(!t.hass)return m``;let i=tg(t.hass,n,{...e,announce_speaker:null}),s=H(t.hass,c=>/^(media_player|assist_satellite)\./.test(c)||c.startsWith("notify.")&&c.endsWith("_announce")),a=e.announce_quiet??null,l=(c,u)=>{if(!u)return r.patch({announce_quiet:null});r.patch({announce_quiet:{from:a?.from??"20:00",to:a?.to??"07:00",[c]:u}})};return m`${P(t,o("room_announce_speaker"),e.announce_speaker??null,i,s,c=>r.patch({announce_speaker:c}))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${o("room_announce_quiet")}
      <span>
        <input type="time" .value=${a?.from??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 1`} @change=${c=>l("from",c.target.value)} />
        –
        <input type="time" .value=${a?.to??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 2`} @change=${c=>l("to",c.target.value)} />
        ${a?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({announce_quiet:null})}>×</button>`:g}
      </span>
    </div>
    ${M(o("room_announce_hint"),"nf-wide")}`}function wl(t,e,n,r){let o=t.t,i=wn(n.points),s=ue(n.points),a=Object.values(t.hass?.areas??{}).sort((h,p)=>h.name.localeCompare(p.name)),l=[["",o("no_area")],...a.map(h=>[h.area_id,h.name])],c=t.floor?me(t.floor.rooms,{exterior:t.doc.settings.wall_exterior,interior:t.doc.settings.wall_interior},t.floor.walls??[]).walls:[],u=t.floor?zu(n,c):null,d=Oc.map(h=>[h,o(`mat_${h}`)]),f=h=>m`<button class="nf-btn" @click=${()=>r.applyPackage(h)}><b>${o(`pkg_${h}`)}</b><span>${o(`pkg_${h}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${j(t,o("room_name"),n.name,h=>r.patch({name:h}),{wide:!0})}
      ${O(t,o("area"),n.area_id??"",l,h=>r.setArea(h),{wide:!0})}
      ${(n.sub_areas??[]).map(h=>m`<span class="nf-chip nf-wide">${t.hass?.areas?.[h]?.name??h} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>r.patch({sub_areas:(n.sub_areas??[]).filter(p=>p!==h).length?(n.sub_areas??[]).filter(p=>p!==h):null})}>✕</button></span>`)}
      ${n.area_id?O(t,o("sub_area_add"),"",l.filter(([h])=>h!==n.area_id&&!(n.sub_areas??[]).includes(h)),h=>h&&r.patch({sub_areas:[...n.sub_areas??[],h]}),{wide:!0,title:o("sub_area_hint")}):g}
      ${O(t,o("material"),n.floor_material,d,h=>r.patch({floor_material:h}),{wide:!0})}
      ${Ie(t,o("wall_paint_room"),n.wall_paint,t.doc.settings.wall_paint_inside??zo,h=>r.patch({wall_paint:h}))}
      ${t.floor?Pv(t,n,t.floor,r):g}
      ${E(t,o("room_floor_offset"),n.floor_offset??0,h=>r.patch({floor_offset:Math.abs(h)<.005?null:Math.max(-2,Math.min(2,Math.round(h*1e3)/1e3))}),.01)}
      ${M(o("room_floor_offset_hint"),"nf-wide")}
      ${P(t,o("room_clean"),n.clean_entity??null,void 0,H(t.hass,h=>/^(script|button|input_button)\./.test(h)),h=>r.patch({clean_entity:h&&h!=="none"?h:null}))}
      ${n.clean_entity?g:M(o("room_clean_hint"),"nf-wide")}
      ${P(t,o("floor_heating"),n.floor_heating??null,void 0,H(t.hass,h=>/^(climate|switch|valve|binary_sensor|input_boolean)\./.test(h)),h=>r.patch({floor_heating:h&&h!=="none"?h:null}))}
      ${n.floor_heating?M(o("floor_heating_hint"),"nf-wide"):g}
      ${Dv(t,n,t.floor??null,r)}
      ${u?m`<p class="nf-sub nf-wide" title=${o("room_inner_hint")}>${o("room_inner",{w:fe(t.hass,u[0]),d:fe(t.hass,u[1])})}</p>`:g}
      ${zv(t,n,c)}
      ${L(t,o("room_living"),co(n),h=>r.patch({living:h===co({name:n.name,living:null})?null:h}),{title:o("living_area_hint")})}
      ${i?m`${E(t,o("x"),s.x0,h=>r.setRect("x",h))} ${E(t,o("z"),s.z0,h=>r.setRect("z",h))}
          ${E(t,o("width"),s.x1-s.x0,h=>r.setRect("w",h),.01,.05)}
          ${E(t,o("depth"),s.z1-s.z0,h=>r.setRect("d",h),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!t.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${n.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!t.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${Tv(t,n,i,r)}
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?Fv(t,e,n,r):g}
    ${e.packages?m`<div class="nf-packages">${ju.map(f)}${M(o("pkg_hint"))}</div>`:g}
  </section>`}var rg=le`
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
`;var og=["cabinet","shelf","lamp","device"],fn="own_studio";var Iv={cabinet:{w:120,d:45,h:80,doors:2,drawers:1,shelves:2,base:"plinth",handle:"bar",back:!0,lamp:"floor",display:!1,mount:"floor",body:"white",front:"wood"},shelf:{w:80,d:35,h:180,doors:0,drawers:0,shelves:4,base:"none",handle:"none",back:!0,lamp:"floor",display:!1,mount:"floor",body:"wood",front:"wood"},lamp:{w:40,d:40,h:160,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!1,mount:"floor",body:"metal",front:"white"},device:{w:60,d:60,h:85,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!0,mount:"floor",body:"white",front:"dark"}},vl=(t,e)=>({kind:t,name:e,...Iv[t]}),ig=(t,e)=>({...vl(e,t.name),body:t.body,front:t.front}),Qn=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:e)),Jn=t=>Math.round(t*1e4)/1e4;function kl(t){return{...t,name:t.name.trim().slice(0,60),w:Qn(Math.round(t.w),5,400),d:Qn(Math.round(t.d),2,200),h:Qn(Math.round(t.h),2,300),doors:Qn(Math.round(t.doors),0,6),drawers:Qn(Math.round(t.drawers),0,6),shelves:Qn(Math.round(t.shelves),0,12)}}function ae(t,e,n,r,o,i,s,a,l={}){let[c,u,d]=t,f=(x,k,$)=>{let A=Math.max(-$,x-k/2),F=Math.min($,x+k/2);return F-A<1e-4?[Math.max(-$,Math.min($,x)),.001*$*2]:[(A+F)/2,F-A]},[h,p]=f(e,r,c/2),[_,y]=f(n,o,u/2),b=Math.max(0,Math.min(d*.999,i)),v=Math.max(d*.001,Math.min(d-b,s)),w=x=>Jn(Math.max(.001,Math.min(1,x)));return{shape:"box",x:Jn(h/c),z:Jn(_/u),w:w(p/c),d:w(y/u),y:Jn(b/d),h:w(v/d),color:a,...l}}function sg(t,e,n){let[r,o,i]=t;if(e==="legs"){let s=Math.min(.1,i*.25),a=Math.min(.04,r/6,o/6);for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.push(ae(t,l*(r/2-a),c*(o/2-a),a,a,0,s,"metal"));return s}if(e==="plinth"){let s=Math.min(.08,i*.2);return n.push(ae(t,0,-.02,r-.02,o-.04,0,s,"dark")),s}return 0}function Ov(t,e){let[n,r,o]=e,i=[],s=sg(e,t.base,i),a=t.doors+t.drawers>0,l=t.handle==="none"||!a?0:Math.min(.025,r*.08),c=a?Math.min(.02,r*.1):0,u=r-c-l,d=-r/2+u/2,f=o-s;if(!a){let v=Math.min(.018,n/10,f/10);i.push(ae(e,-n/2+v/2,0,v,r,s,f,t.body,{edges:!0})),i.push(ae(e,n/2-v/2,0,v,r,s,f,t.body,{edges:!0})),i.push(ae(e,0,-r/2+.005,n-2*v,.01,s,f,t.body));for(let w=0;w<=t.shelves+1;w++)i.push(ae(e,0,.005,n-2*v,r-.01,s+(f-v)*w/(t.shelves+1),v,t.front,{edges:"faint"}));return i}i.push(ae(e,0,d,n,u,s,f,t.body,{edges:!0}));let h=.004,p=-r/2+u+c/2,_=t.doors>0?Math.min(.18,Math.max(.08,(f-.3)/Math.max(1,t.drawers))):f/t.drawers,y=s+(t.drawers>0?_*t.drawers:0),b=(v,w,x)=>{if(t.handle==="none")return;let k=r/2-l/2;t.handle==="knob"?i.push(ae(e,v,k,.025,l,w-.0125,.025,"metal")):x?i.push(ae(e,v,k,.015,l,w-.08,.16,"metal")):i.push(ae(e,v,k,Math.min(.16,n*.4),l,w-.0075,.015,"metal"))};for(let v=0;v<t.drawers;v++){let w=s+_*v;i.push(ae(e,0,p,n-2*h,c,w+h,_-2*h,t.front,{edges:"faint"})),b(0,w+_*(t.drawers===1&&t.doors===0?.5:.7),!1)}if(t.doors>0){let v=n/t.doors,w=o-y;for(let x=0;x<t.doors;x++){let k=-n/2+v*(x+.5);i.push(ae(e,k,p,v-2*h,c,y+h,w-2*h,t.front,{edges:"faint"}));let $=t.doors===1||x%2===0?1:-1,A=y+w*(o>1.2?.45:.8);b(k+$*(v/2-.04),Math.min(A,o-.1),!0)}}return i}function Lv(t,e){let[n,r,o]=e,i=Math.min(.02,n/10,o/10),s=[ae(e,-n/2+i/2,0,i,r,0,o,t.body,{edges:!0}),ae(e,n/2-i/2,0,i,r,0,o,t.body,{edges:!0})];t.back&&s.push(ae(e,0,-r/2+.005,n-2*i,.01,0,o,t.body));let a=t.shelves+2;for(let l=0;l<a;l++)s.push(ae(e,0,t.back?.005:0,n-2*i,t.back?r-.01:r,(o-i)*l/(a-1),i,t.front,{edges:!0}));return s}function Hv(t,e){let[n,r,o]=e,i=Math.min(n,r),s=(l,c,u,d,f,h,p={})=>({...ae(e,l,c,u,u,d,f,h,p),shape:"cyl"}),a=(l,c,u)=>({...ae(e,0,0,i,i,l,c,t.front,{glow:!0,edges:"faint"}),shape:"loft",tw:Jn(Math.min(1,i*u/n)),td:Jn(Math.min(1,i*u/r))});switch(t.lamp){case"pendant":{let l=Math.min(.3,o*.4);return[s(0,0,Math.min(.12,i),o-.03,.03,t.body),s(0,0,Math.min(.01,i/4),l,o-l-.03,"dark"),a(0,l,.35)]}case"wall":{let l=Math.min(.02,r*.2);return[ae(e,0,-r/2+l/2,Math.min(.1,n),l,o*.3,o*.4,t.body),ae(e,0,0,Math.min(.02,n),r-l,o*.45,Math.min(.02,o*.1),t.body),a(o*.15,o*.7,.7)]}default:{let l=Math.min(t.lamp==="table"?.25:.35,o*.4);return[s(0,0,i*.6,0,Math.min(.03,o*.05),t.body,{edges:!0}),s(0,0,Math.min(.03,i/6),.02,o-l-.02,t.body),a(o-l,l,.7)]}}}function Cv(t,e){let[n,r,o]=e,i=[],s=t.mount==="floor"?sg(e,t.base,i):0,a=t.display?Math.min(.01,r*.1):0;if(i.push(ae(e,0,-a/2,n,r-a,s,o-s,t.body,{edges:!0})),t.display){let l=Math.min(.02,n*.08,(o-s)*.08);i.push(ae(e,0,r/2-a/2,n-2*l,a,s+l,o-s-2*l,t.front,{screen:!0}))}return i}function Vi(t,e,n){let r=kl(t),o=[r.w/100,r.d/100,r.h/100],i=r.name||e,s=n==="en"?{en:i}:{[n.slice(0,5)]:i,en:i},a={id:e,name:s,size:o,parts:[],recipe:r};switch(r.kind){case"cabinet":a.parts=Ov(r,o),a.surface=!0;break;case"shelf":a.parts=Lv(r,o);break;case"lamp":a.parts=Hv(r,o),a.light=r.lamp,a.mount=r.lamp==="pendant"?"ceiling":r.lamp==="wall"?"wall":r.lamp==="table"?"surface":"floor",r.lamp==="wall"&&(a.wall_y=1.6);break;case"device":a.parts=Cv(r,o),a.electric=!0,a.mount=r.mount,r.mount==="wall"&&(a.wall_y=1.2);break}return a}function ag(t,e){let n=t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,32)||"piece",r=/^[a-z0-9]/.test(n)?n:`p${n}`;if(!e.includes(r))return r;for(let o=2;;o++)if(!e.includes(`${r}_${o}`))return`${r}_${o}`}var lg=["white","wood","body","metal","dark","glass","accent"],Nv={white:"#dfe6f2",wood:"#8a6a4a",body:"#3a4a6a",metal:"#9aa7bf",dark:"#1e2638",glass:"#7fd0e8",accent:"#37e0ff",fabric:"#4b5d8c",cushion:"#6a7fb3"},ug=t=>Nv[t]??t;function Bv(t){let e=Vi(t,"preview","en"),[n,,r]=e.size,o=180/Math.max(n,r),[i,s]=[n*o,r*o],a=[...e.parts].sort((l,c)=>l.z+l.d/2-(c.z+c.d/2));return m`<svg class="nf-studio-view" viewBox="-4 -4 ${i+8} ${s+8}" role="img" aria-hidden="true">
    ${a.map(l=>{let c=l.w*i,u=l.h*s,d=(l.x+.5)*i-c/2,f=s-(l.y+l.h)*s,h=l.shape==="cyl"?Math.min(c,u)/2:l.shape==="loft"?3:1;return R`<rect x=${d} y=${f} width=${Math.max(.6,c)} height=${Math.max(.6,u)} rx=${h} fill=${l.screen?"#0b1020":ug(l.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${l.glow?"nf-studio-glow":""} />`})}
  </svg>`}function cg(t,e,n,r){let o=t.t,i=!lg.includes(n),s=[...lg.map(a=>[a,o(a==="body"?"studio_color_plan":`studio_color_${a}`)]),["own",o("studio_color_own")]];return m`${O(t,e,i?"own":n,s,a=>r(a==="own"?ug(n):a))}
  ${i?Ie(t,o("studio_color_own"),n,"#8a6a4a",a=>r(a??"wood")):g}`}function dg(t,e,n){let r=t.t,o=e.recipe,i=c=>n.change(kl({...o,...c})),s=(c,u,d)=>E(t,r(c),u,f=>i({[d]:f}),1,1),a=(c,u,d)=>E(t,r(c),u,f=>i({[d]:f}),1,0),l=()=>{switch(o.kind){case"cabinet":return m`${a("studio_doors",o.doors,"doors")} ${a("studio_drawers",o.drawers,"drawers")}
          ${o.doors+o.drawers===0?a("studio_shelves",o.shelves,"shelves"):g}
          ${O(t,r("studio_handle"),o.handle,[["bar",r("studio_handle_bar")],["knob",r("studio_handle_knob")],["none",r("studio_handle_none")]],c=>i({handle:c}))}
          ${O(t,r("studio_base"),o.base,[["plinth",r("studio_base_plinth")],["legs",r("studio_base_legs")],["none",r("studio_base_none")]],c=>i({base:c}))}`;case"shelf":return m`${a("studio_shelves",o.shelves,"shelves")} ${L(t,r("studio_back"),o.back,c=>i({back:c}))}`;case"lamp":return O(t,r("studio_lamp"),o.lamp,[["floor",r("studio_lamp_floor")],["table",r("studio_lamp_table")],["pendant",r("studio_lamp_pendant")],["wall",r("studio_lamp_wall")]],c=>i({lamp:c}));case"device":return m`${L(t,r("studio_display"),o.display,c=>i({display:c}))}
          ${O(t,r("studio_mount"),o.mount,[["floor",r("studio_mount_floor")],["surface",r("studio_mount_surface")],["wall",r("studio_mount_wall")]],c=>i({mount:c}))}
          ${o.mount==="floor"?O(t,r("studio_base"),o.base,[["none",r("studio_base_none")],["legs",r("studio_base_legs")],["plinth",r("studio_base_plinth")]],c=>i({base:c})):g}`}};return m`<section class="nf-studio">
    <h3>🛠️ ${r(e.itemId?"studio_title_edit":"studio_title")}</h3>
    ${M(r("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${r("studio_kind")}>
      ${og.map(c=>m`<button class="nf-chip" aria-pressed=${o.kind===c} ?disabled=${!!e.itemId&&o.kind!==c} @click=${()=>o.kind!==c&&n.change(ig(o,c))}>${r(`studio_kind_${c}`)}</button>`)}
    </div>
    ${Bv(o)}
    <div class="nf-form">
      ${j(t,r("studio_name"),o.name,c=>i({name:c}),{wide:!0,maxlength:60,placeholder:r(`studio_kind_${o.kind}`)})}
      ${s("studio_width",o.w,"w")} ${s("studio_depth",o.d,"d")} ${s("studio_height",o.h,"h")} ${l()}
      ${cg(t,r(o.kind==="lamp"?"studio_color_lamp_body":"studio_color_body"),o.body,c=>i({body:c}))}
      ${o.kind==="cabinet"||o.kind==="shelf"||o.kind==="lamp"||o.display?cg(t,r(o.kind==="lamp"?"studio_color_shade":o.kind==="device"?"studio_color_display":o.kind==="shelf"?"studio_color_boards":"studio_color_front"),o.front,c=>i({front:c})):g}
    </div>
    ${e.error?m`<p class="nf-sub nf-warn">${e.error}</p>`:g}
    ${Y(m`<button class="nf-btn nf-primary" ?disabled=${e.busy||!t.admin} @click=${()=>n.save()}>${r(e.itemId?"studio_save":"studio_place")}</button>`,m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>n.close()}>${r("cancel")}</button>`)}
  </section>`}var Wv={room_no_area:"\u{1F3F7}\uFE0F",areas_unplaced:"\u2795",devices_unplaced:"\u{1F4CD}",rooms_overlap:"\u29C9",opening_off_wall:"\u{1F6AA}",entity_missing:"\u2753",furniture_entity_missing:"\u2753",standby:"\u{1F50C}",battery_low:"\u{1FAAB}"};function Vv(t,e){let n=e.kind==="room_no_area"&&e.vars.area?"check_room_no_area_named":`check_${e.kind}`;return t.t(n,e.vars)}function Kv(t,e){let n=t.t;switch(e.fix.do){case"set_area":return n("check_fix_set_area",{area:String(e.vars.area)});case"add_area_rooms":return n("check_fix_add_rooms");case"place_devices":return n("check_fix_place",{n:e.fix.entityIds.length});case"ignore_devices":return n("check_fix_ignore");case"remove_placements":return n("check_fix_remove",{n:e.fix.entityIds.length});default:return n("check_fix_show")}}function hg(t,e,n){let r=t.t,o=t.doc.floors.filter(i=>e.some(s=>s.floorId===i.id));return m`<section class="nf-check-panel">
    <div class="nf-h3row"><h3>✓ ${r("check_title")}</h3><button class="nf-btn nf-field-btn" title=${r("close")} @click=${()=>n.close()}>✕</button></div>
    ${e.length===0?m`<p class="nf-sub nf-check-ok">✅ ${r("check_all_good")}</p>`:m`${M(r("check_hint",{n:e.length}))}
        ${o.map(i=>m`<h4 class="nf-check-floor">${i.name}</h4>
            <ul class="nf-check-list">
              ${e.filter(s=>s.floorId===i.id).map(s=>m`<li>
                    <span class="nf-check-icon" aria-hidden="true">${Wv[s.kind]}</span><span class="nf-check-text">${Vv(t,s)}</span>
                    <button class="nf-btn ${s.changes?"nf-primary":""}" ?disabled=${s.changes&&!t.admin} @click=${()=>n.fix(s)}>${Kv(t,s)}</button>
                    ${s.entityIds?Gv(t,s.entityIds,n):g}
                  </li>`)}
            </ul>`)}`}
    ${(t.doc.settings.check_ignore??[]).length>0?m`<p class="nf-sub"><button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.resetIgnored()}>${r("check_reset_ignored",{n:t.doc.settings.check_ignore.length})}</button></p>`:g}
  </section>`}function Gv(t,e,n){let r=t.t;return m`<details class="nf-check-names">
    <summary>${r("check_show_devices",{n:e.length})}</summary>
    <ul>
      ${e.map(o=>m`<li><span title=${o}>${t.hass?W(t.hass,o):o}</span> <small>${o}</small>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.ignore([o])}>${r("check_fix_ignore")}</button></li>`)}
    </ul>
    <button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.ignore(e)}>${r("check_ignore_all",{n:e.length})}</button>
  </details>`}var fg=(t,e)=>m`<button class="nf-btn nf-check-open" title=${t.t("check_open_hint")} @click=${e}>✓ ${t.t("check_open")}</button>`;function pg(t,e){if(!e||!Number.isFinite(e.value))return null;let n=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!n)return null;let r=/^(ct|cent|cents|c)$/i.test(n[1]),o=r||/^eur$/i.test(n[1])?"\u20AC":n[1];return{value:Math.round(t*e.value*(r?1:100))/100,currency:o}}var gg=20,mg=new WeakMap;function Uv(t){let e=t.entities??{},n=mg.get(e);if(!n){n=new Map;for(let[r,o]of Object.entries(e))o.device_id&&r.startsWith("sensor.")&&t.states[r]?.attributes.device_class==="battery"&&!n.has(o.device_id)&&n.set(o.device_id,r);mg.set(e,n)}return n}function jv(t,e){let n=t.entities?.[e]?.device_id,r=n?Uv(t).get(n):void 0;if(r){let s=Number(t.states[r]?.state);if(Number.isFinite(s))return s}let o=t.states[e]?.attributes;if(!o||o.battery_level===void 0&&o.battery===void 0)return null;let i=Number(o.battery_level??o.battery);return Number.isFinite(i)?i:null}function Zv(t){let e=[],n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);for(let r of t.placements)e.push({entity:r.entity_id,x:r.x,z:r.z,room:null});for(let r of t.furniture)for(let o of[r.entity,r.power])n(o)&&e.push({entity:o,x:r.x,z:r.z,room:null});for(let r of t.openings)for(let o of[r.contact,r.contact2,r.tilt,r.tilt2,r.cover,r.cover2,r.lock])n(o)&&e.push({entity:o,x:NaN,z:NaN,room:r.room_id});return e}var qv=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function _g(t,e){let n=new Set,r=[];for(let o of e.floors)for(let i of Zv(o)){let s=t.entities?.[i.entity]?.device_id??i.entity;if(n.has(s))continue;let a=jv(t,i.entity);a!==null&&(n.add(s),r.push({entity:i.entity,level:a,floorId:o.id,roomId:i.room??qv(o,i.x,i.z)?.id??null}))}return r.sort((o,i)=>o.level-i.level)}var er=.08;function bg(t,e){let n=1/0;for(let r=0;r<e.length;r++){let o=e[r],i=e[(r+1)%e.length],[s,a]=[i[0]-o[0],i[1]-o[1]],l=s*s+a*a,c=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*s+(t[1]-o[1])*a)/l)):0;n=Math.min(n,Math.hypot(t[0]-(o[0]+s*c),t[1]-(o[1]+a*c)))}return n}var yg=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function Yv(t,e,n=.2){if(t.points.length<3||e.points.length<3)return!1;let[r,o]=[yg(t.points),yg(e.points)],i=Math.max(r.x0,o.x0)+er,s=Math.min(r.x1,o.x1)-er,a=Math.max(r.z0,o.z0)+er,l=Math.min(r.z1,o.z1)-er;if(s<=i||l<=a)return!1;for(let c=i;c<=s+1e-9;c+=Math.min(n,s-i||n))for(let u=a;u<=l+1e-9;u+=Math.min(n,l-a||n)){let d=[c,u];if(N(d,t.points)&&N(d,e.points)&&bg(d,t.points)>er&&bg(d,e.points)>er)return!0}return!1}function vg(t){let e=new Set(["id","type","variant","name","icon","picture","vehicle","room_id","wall"]),n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);return Object.entries(t).flatMap(([r,o])=>e.has(r)?[]:Array.isArray(o)?o.filter(n):n(o)?[o]:[])}var wg=t=>vg(t),Xv=3,Qv=new Set(["off","standby","idle"]);function Jv(t,e,n,r){let o=e.energy.tariff,i=o?t.states[o]:void 0,s=i?{value:Number(i.state),unit:String(i.attributes.unit_of_measurement??"")}:null,a=new Set,l=(c,u)=>{if(!c||c==="none"||a.has(c))return;a.add(c);let d=t.states[c]?.state;if(!d||!Qv.has(d)||c.startsWith("light."))return;let f=nh(t,c),h=f?Re(t.states[f]):null;if(h===null||h<=Xv)return;let p=pg(h*24*365/1e3,s);r.push({kind:"standby",floorId:n.id,vars:{name:W(t,c),w:Math.round(h),cost:p?`${p.value.toFixed(0)} ${p.currency}`:`${Math.round(h*24*365/1e3)} kWh`},fix:u,changes:!1})};for(let c of n.furniture)l(c.entity,{do:"show_furniture",furnitureId:c.id});for(let c of n.placements){let u=n.rooms.find(d=>d.points.length>=3&&N([c.x,c.z],d.points));u&&l(c.entity_id,{do:"show_room",roomId:u.id})}}function kg(t,e){let n=[],r=e?.areas,o=new Set(t.settings.check_ignore??[]),i=new Set(t.floors.flatMap(s=>s.rooms.map(a=>a.area_id)).filter(s=>!!s));for(let s of t.floors){if(s.layer)continue;for(let l of s.rooms){if(l.area_id)continue;let c=Object.values(r??{}).find(u=>u.name.trim().toLowerCase()===l.name.trim().toLowerCase()&&!i.has(u.area_id));n.push(c?{kind:"room_no_area",floorId:s.id,vars:{room:l.name,area:c.name},fix:{do:"set_area",roomId:l.id,areaId:c.area_id},changes:!0}:{kind:"room_no_area",floorId:s.id,vars:{room:l.name,area:""},fix:{do:"show_room",roomId:l.id},changes:!1})}let a=Xn(t,s,r);if(a.length&&n.push({kind:"areas_unplaced",floorId:s.id,vars:{n:a.length,names:a.map(l=>l.name).join(", ")},fix:{do:"add_area_rooms"},changes:!0}),e){let l=Be(e,[s]),c=pr(e,[s]);for(let u of s.rooms){if(!u.area_id)continue;let d=xi(s,u);for(let p of s.furniture)if(N([p.x,p.z],u.points))for(let _ of wg(p))d.add(_);for(let p of s.openings)if(p.room_id===u.id){for(let _ of vg(p))d.add(_);for(let _ of Object.values(c.get(p.id)??{}))typeof _=="string"&&d.add(_)}for(let p of s.furniture){let _=l.get(p.id);if(_&&N([p.x,p.z],u.points))for(let y of[_.entity,_.power])typeof y=="string"&&d.add(y)}let f=ye(e,u).filter(p=>Mt(Ne(e,p))),h=kn(e,f).map(p=>p.primary).filter(p=>!d.has(p)&&!o.has(p));h.length&&n.push({kind:"devices_unplaced",floorId:s.id,vars:{room:u.name,n:h.length},fix:{do:"place_devices",roomId:u.id,entityIds:h},entityIds:h,changes:!0})}}for(let l=0;l<s.rooms.length;l++)for(let c=l+1;c<s.rooms.length;c++){let[u,d]=[s.rooms[l],s.rooms[c]];Yv(u,d)&&n.push({kind:"rooms_overlap",floorId:s.id,vars:{a:u.name,b:d.name},fix:{do:"show_room",roomId:d.id},changes:!1})}if(s.openings.length){let l=me(s.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},s.walls??[]).walls;for(let c of s.openings){let u=Pe(c,s.rooms,s.walls??[]);(!u||!zt(l,c,u))&&n.push({kind:"opening_off_wall",floorId:s.id,vars:{room:s.rooms.find(d=>d.id===c.room_id)?.name??""},fix:{do:"show_opening",openingId:c.id},changes:!1})}}if(e&&Jv(e,t,s,n),e&&Object.keys(e.states).length){let l=s.placements.map(c=>c.entity_id).filter(c=>!e.states[c]);l.length&&n.push({kind:"entity_missing",floorId:s.id,vars:{n:l.length,ids:l.slice(0,3).join(", ")},fix:{do:"remove_placements",entityIds:l},changes:!0});for(let c of s.furniture){let u=wg(c).filter(d=>d!=="none"&&!e.states[d]);u.length&&!(ce(c.type)&&!c.entity)&&n.push({kind:"furniture_entity_missing",floorId:s.id,vars:{id:u[0]},fix:{do:"show_furniture",furnitureId:c.id},changes:!1})}}}if(e)for(let s of _g(e,t)){if(s.level>=gg)break;n.push({kind:"battery_low",floorId:s.floorId,vars:{name:W(e,s.entity),level:Math.round(s.level)},fix:s.roomId?{do:"show_room",roomId:s.roomId}:{do:"show_floor"},changes:!1})}return n}var ee=t=>t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),pn=t=>t.map(([e,n])=>`${e.toFixed(3)},${n.toFixed(3)}`).join(" ");function ek(t,e,n,r){let o=me(e.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},e.walls??[]).walls,i=[...e.rooms.flatMap(b=>b.points),...o.flatMap(b=>b.footprint)];if(!i.length)return"";let[s,a]=[Math.min(...i.map(b=>b[0])),Math.max(...i.map(b=>b[0]))],[l,c]=[Math.min(...i.map(b=>b[1])),Math.max(...i.map(b=>b[1]))],u=1.2,d=[];for(let b of e.rooms)d.push(`<polygon points="${pn(b.points)}" fill="#f4f4f4" stroke="none"/>`);for(let b of o)d.push(`<polygon points="${pn(b.footprint)}" fill="#222" stroke="#222" stroke-width="0.01"/>`);for(let b of e.openings){let v=Pe(b,e.rooms,e.walls??[]),w=v?zt(o,b,v):null;if(!w)continue;let{wall:x,s:k}=w,$=Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1]);if($<1e-6)continue;let A=[(x.b[0]-x.a[0])/$,(x.b[1]-x.a[1])/$],F=[-A[1],A[0]],T=(q,we)=>[x.a[0]+A[0]*q+F[0]*we,x.a[1]+A[1]*q+F[1]*we],[D,z]=[k-b.width/2,k+b.width/2],[C,B]=[x.left+.01,-(x.right+.01)];if(d.push(`<polygon points="${pn([T(D,C),T(z,C),T(z,B),T(D,B)])}" fill="#fff"/>`),b.type==="garage"){let q=(x.left-x.right)/2;d.push(`<polyline points="${pn([T(D,q),T(z,q)])}" fill="none" stroke="#555" stroke-width="0.02" stroke-dasharray="0.12 0.08"/>`)}else if(b.type==="window"){let q=(x.left-x.right)/2;d.push(`<polyline points="${pn([T(D,q),T(z,q)])}" fill="none" stroke="#222" stroke-width="0.03"/>`),d.push(`<polyline points="${pn([T(D,C-.01),T(z,C-.01)])}" fill="none" stroke="#222" stroke-width="0.015"/><polyline points="${pn([T(D,B+.01),T(z,B+.01)])}" fill="none" stroke="#222" stroke-width="0.015"/>`)}else{let q=b.room_id===x.roomRight?-1:1,we=T(D,q*(q>0?x.left:x.right)),$t=T(D,q*((q>0?x.left:x.right)+b.width)),K=T(z,q*(q>0?x.left:x.right));d.push(`<path d="M ${we[0]} ${we[1]} L ${$t[0]} ${$t[1]} A ${b.width} ${b.width} 0 0 ${q>0?1:0} ${K[0]} ${K[1]}" fill="none" stroke="#555" stroke-width="0.015"/>`)}}let f=new Map(n.map(b=>[b.roomId,b]));for(let b of e.rooms){if(b.points.length<3)continue;let[v,w]=be(b.points),x=f.get(b.id);d.push(`<text x="${v}" y="${w-.08}" font-size="0.32" text-anchor="middle" font-weight="600">${ee(b.name)}</text>`),x&&d.push(`<text x="${v}" y="${w+.32}" font-size="0.24" text-anchor="middle" fill="#444">${ee(r.area(x.living>0?x.living:x.floor))}</text>`)}let h=(b,v,w,x,k,$)=>{let F=(b+w)/2,T=(v+x)/2,D=$?`M ${b-.15} ${v} L ${b+.15} ${v} M ${w-.15} ${x} L ${w+.15} ${x}`:`M ${b} ${v-.15} L ${b} ${v+.15} M ${w} ${x-.15} L ${w} ${x+.15}`,z=$?`<text x="${F-.25}" y="${T}" font-size="0.26" text-anchor="middle" transform="rotate(-90 ${F-.25} ${T})">${ee(k)}</text>`:`<text x="${F}" y="${T+.4}" font-size="0.26" text-anchor="middle">${ee(k)}</text>`;return`<path d="M ${b} ${v} L ${w} ${x} ${D}" stroke="#222" stroke-width="0.015" fill="none"/>${z}`};d.push(h(s,c+.5,a,c+.5,r.length(a-s),!1)),d.push(h(s-.5,l,s-.5,c,r.length(c-l),!0)),d.push(`<path d="M ${a-1} ${l-.7} L ${a} ${l-.7}" stroke="#222" stroke-width="0.06"/><text x="${a-.5}" y="${l-.85}" font-size="0.22" text-anchor="middle">${ee(r.length(1))}</text>`);let[p,_]=[a-s+2*u,c-l+2*u];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${`${s-u} ${l-u} ${p} ${_}`}" style="width:${(p*10).toFixed(1)}mm" font-family="system-ui, sans-serif">${d.join("")}</svg>`}function xg(t,e){let n=t.floors.filter(l=>!l.layer&&l.rooms.length),r=[],o=[],i=[];for(let l of[...n].sort((c,u)=>c.elevation-u.elevation)){let c=uo(t,l);i.push(...c);let u=Yn(c);r.push(`<section class="page"><h1>${ee(l.name)}</h1><div class="sub">${ee(e.living)}: ${ee(e.area(u.living))}</div>${ek(t,l,c,e)}</section>`),o.push(`<tr class="floor"><th colspan="4">${ee(l.name)}</th></tr>`);for(let d of c){let f=l.rooms.find(h=>h.id===d.roomId);o.push(`<tr><td>${ee(f.name)}</td><td>${ee(e.area(d.floor))}</td><td>${d.low>.05?ee(e.area(d.low)):""}</td><td><b>${ee(e.area(d.living))}</b></td></tr>`)}o.push(`<tr class="sum"><td>${ee(e.total)}</td><td>${ee(e.area(u.floor))}</td><td>${u.low>.05?ee(e.area(u.low)):""}</td><td><b>${ee(e.area(u.living))}</b></td></tr>`)}let s=Yn(i),a=`<section class="page"><h1>${ee(e.living)}</h1><table><thead><tr><th>${ee(e.room)}</th><th>${ee(e.floorArea)}</th><th>${ee(e.low)}</th><th>${ee(e.living)}</th></tr></thead><tbody>${o.join("")}<tr class="grand"><td>${ee(e.total)}</td><td>${ee(e.area(s.floor))}</td><td>${s.low>.05?ee(e.area(s.low)):""}</td><td><b>${ee(e.area(s.living))}</b></td></tr></tbody></table><p class="note">${ee(e.note)}</p></section>`;return`<!doctype html><html><head><meta charset="utf-8"><title>${ee(e.title)}</title><style>
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
  </style></head><body>${r.join("")}${a}<script>window.addEventListener("load", () => setTimeout(() => window.print(), 300));<\/script></body></html>`}var $g="nextfloor.tour_done",tk=[["Ctrl Z","keys_undo"],["Ctrl Shift Z \xB7 Ctrl Y","keys_redo"],["Ctrl D","keys_duplicate"],["Entf / Delete","keys_delete"],["\u2190 \u2191 \u2192 \u2193","keys_nudge"],["Shift + \u2190\u2191\u2192\u2193","keys_nudge_10"],["Alt + \u2190\u2191\u2192\u2193","keys_nudge_1"],["R \xB7 Shift R","keys_rotate"],["L","keys_lock"],["Enter","keys_close_shape"],["Esc","keys_escape"],["Shift","keys_straight"],["?","keys_sheet"]],Ki=[["tour_1_title","tour_1"],["tour_2_title","tour_2"],["tour_3_title","tour_3"],["tour_4_title","tour_4"]];function Sg(){try{return localStorage.getItem($g)!=="1"}catch{return!1}}function Mg(){try{localStorage.setItem($g,"1")}catch{}}function Rg(t,e){return m`<div class="nf-keys" role="dialog" aria-label=${t("keys_title")} @click=${n=>n.target===n.currentTarget&&e()}>
    <div class="nf-keys-card">
      <div class="nf-h3row"><h3>⌨ ${t("keys_title")}</h3><button class="nf-btn nf-field-btn" aria-label=${t("close")} @click=${e}>✕</button></div>
      <dl>
        ${tk.map(([n,r])=>m`<dt>${n.split(" \xB7 ").map((o,i)=>m`${i?" \xB7 ":""}<kbd>${o}</kbd>`)}</dt><dd>${t(r)}</dd>`)}
      </dl>
    </div>
  </div>`}function nk(t){return{rect:t("tool_rect"),free:t("tool_polygon"),rooms:t("area_rooms",{n:"\u2026"}).replace(/\s*\(…\)\s*$/,""),opening:t("tool_opening"),furniture:t("tool_furniture"),split:t("split_3d"),check:t("check_open")}}function Eg(t,e,n){if(e===null||e>=Ki.length)return g;let[r,o]=Ki[e],i=e===Ki.length-1;return m`<div class="nf-tour" role="dialog" aria-label=${t("tour_title")}>
    <div class="nf-tour-step">${e+1} / ${Ki.length}</div>
    <h3>${t(r)}</h3>
    <p>${t(o,nk(t))}</p>
    <div class="nf-actions">
      ${e>0?m`<button class="nf-btn" @click=${()=>n(e-1)}>‹ ${t("tour_back")}</button>`:g}
      <button class="nf-btn nf-primary" @click=${()=>n(i?null:e+1)}>${t(i?"tour_done":"tour_next")}</button>
      ${i?g:m`<button class="nf-link" @click=${()=>n(null)}>${t("tour_skip")}</button>`}
    </div>
  </div>`}var Nt="https://github.com/therealMRBK/NextFloor";var ho=t=>`/api/nextfloor/mesh/${encodeURIComponent(t)}`,tr=12*1024*1024;function Ag(t,e){let n=new Map;for(let r of t)for(let o of r.items){if(!o.mesh)continue;let i=n.get(o.mesh)??[];n.set(o.mesh,[...i,`${Ye(o,de(r.id,o.id),e)} \xB7 ${Oe(r,e)}`])}return[...n].map(([r,o])=>({id:r,items:o})).sort((r,o)=>r.items[0].localeCompare(o.items[0]))}function nr(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function xl(t){return t===201||t===200||t===204?null:t===401||t===403?"forbidden":t===413?"too_large":t===400?"not_glb":t===404?"bad_id":"other"}var rk=40,ok=(t=tr)=>Math.floor(t*.8/rk),$l=[{key:"light",triangles:3e4},{key:"normal",triangles:8e4},{key:"fine",triangles:15e4}];function Fg(t){return Math.min($l.find(e=>e.key===t).triangles,ok())}var Sl=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},_present:{state:!0},_draft:{state:!0},_busy:{state:!0},_message:{state:!0}};checked=new Set;run=0;constructor(){super(),this._present={},this._draft=null,this._busy=!1,this._message=null}t(e,n){return $e(this.hass,e,n)}get slots(){return Ag(this.packs??[],this.hass?.language??"en")}willUpdate(){for(let e of this.slots)this.checked.has(e.id)||!this.hass?.fetchWithAuth||(this.checked.add(e.id),this.askPresence(e.id))}async askPresence(e){let n=await this.hass.fetchWithAuth(ho(e),{method:"HEAD"}).catch(()=>null),r=n&&n.status!==405?n.ok:await this.hass.fetchWithAuth(ho(e)).then(o=>o.ok,()=>!1);this._present={...this._present,[e]:r?"yes":"no"}}async choose(e,n){if(n){this._message=null,this._busy=!0;try{let r=await n.arrayBuffer(),i=await(await un()).inspectModel(r);this._draft={slot:e,fileName:n.name,data:r,info:i,turns:0,paint:i.paint,detail:"normal",colour:"#1d5bd6",result:null},await this.refresh()}catch(r){this._draft=null,this._message={ok:!1,text:this.readError(r)}}finally{this._busy=!1}}}readError(e){let r=`model_error_${e?.reason}`,o=this.t(r);return o===r?this.t("model_error_unreadable",{detail:String(e?.message??e)}):o}async refresh(){let e=this._draft;if(!e)return;let n=++this.run;this._busy=!0;try{let r=await un(),{glb:o,triangles:i}=await r.prepareModel(e.data,{turns:e.turns,paint:e.paint,maxTriangles:Fg(e.detail)}),s=await r.previewModel(o,e.colour);n===this.run&&this._draft===e&&(this._draft={...e,result:{glb:o,triangles:i,picture:s}})}catch(r){n===this.run&&(this._message={ok:!1,text:this.readError(r)})}finally{n===this.run&&(this._busy=!1)}}change(e){this._draft&&(this._draft={...this._draft,...e},this.refresh())}turn(e){this._draft&&this.change({turns:(this._draft.turns+e+4)%4})}togglePaint(e,n){if(!this._draft)return;let r=this._draft.paint.filter(o=>o!==e);this.change({paint:n?[...r,e]:r})}async upload(){let e=this._draft;if(!(!e?.result||!this.hass?.fetchWithAuth)){if(e.result.glb.byteLength>tr){this._message={ok:!1,text:this.t("model_error_too_large",{max:nr(tr)})};return}this._busy=!0;try{let n=await this.hass.fetchWithAuth(ho(e.slot.id),{method:"POST",body:e.result.glb}),r=xl(n.status);if(r){this._message={ok:!1,text:this.t(`model_upload_${r}`,{max:nr(tr)})};return}this._present={...this._present,[e.slot.id]:"yes"},this._message={ok:!0,text:this.t("model_uploaded",{id:e.slot.id,size:nr(e.result.glb.byteLength)})},this._draft=null}catch(n){this._message={ok:!1,text:this.t("model_upload_other",{detail:String(n?.message??n)})}}finally{this._busy=!1}}}async removeModel(e){if(!this.hass?.fetchWithAuth||!confirm(this.t("model_remove_confirm",{id:e.id})))return;let n=await this.hass.fetchWithAuth(ho(e.id),{method:"DELETE"}),r=xl(n.status);this._present={...this._present,[e.id]:r?this._present[e.id]:"no"},this._message=r?{ok:!1,text:this.t(`model_upload_${r}`,{max:nr(tr)})}:{ok:!0,text:this.t("model_removed",{id:e.id})}}row(e){let n=this._present[e.id]??"unknown",r=n==="yes"?this.t("model_present"):n==="no"?this.t("model_missing"):"\u2026";return m`<div class="nf-model">
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
            <div class="nf-seg">${$l.map(i=>m`<button aria-pressed=${e.detail===i.key} @click=${()=>this.change({detail:i.key})}>${this.t(`model_detail_${i.key}`)}</button>`)}</div>
            ${r?m`<small class="nf-sub">${this.t("model_result",{triangles:r.triangles.toLocaleString(this.hass?.language),size:nr(r.glb.byteLength)})}</small>`:g}
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
    </section>`}static styles=[je,ut,le`
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
    `]};customElements.get("nf-model-upload")||customElements.define("nf-model-upload",Sl);var rr="therealMRBK/NextFloor-Plugins",Tg=`https://raw.githubusercontent.com/${rr}/main/index.json`,ik=t=>/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(t),Fe=(t,e)=>typeof t=="string"?t.trim().slice(0,e):"";function sk(t){let e=t?.plugins;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Fe(o.id,64),s=Fe(o.url,300),a=Fe(o.sha256,64).toLowerCase(),l=Fe(o.name,60),c=Fe(o.version,40),u=Fe(o.homepage,200);!/^[\w.-]+$/.test(i)||n.has(i)||!l||!c||!ik(s)||!/^[0-9a-f]{64}$/.test(a)||(n.add(i),r.push({id:i,name:l,description:Fe(o.description,300),author:Fe(o.author,60),version:c,homepage:/^https:\/\//.test(u)?u:"",url:s,sha256:a}))}return r}async function zg(t=(...e)=>fetch(...e)){let e=await t(Tg,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return sk(await e.json())}function Pg(t,e){let n=(e??[]).find(r=>r.id===t.id);return n?n.sha256===t.sha256&&n.url===t.url?"installed":"update":"available"}function Dg(t,e){let n=t??[],r={url:e.url,enabled:!0,id:e.id,version:e.version,sha256:e.sha256},o=n.findIndex(i=>i.id===e.id);return o<0?[...n,r]:n.map((i,s)=>s===o?{...r,enabled:i.enabled}:i)}var ak=(t,e)=>t===`https://raw.githubusercontent.com/${rr}/main/packs/${e}.json`;function lk(t){let e=t?.packs;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Fe(o.id,40),s=Fe(o.url,300),a=Fe(o.sha256,64).toLowerCase(),l=Fe(o.name,80);if(!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(i)||i.startsWith("nextfloor.")||n.has(i)||!l||!ak(s,i)||!/^[0-9a-f]{64}$/.test(a))continue;n.add(i);let c=(u,d)=>typeof u=="number"&&Number.isInteger(u)&&u>0?u:d;r.push({id:i,name:l,description:Fe(o.description,400),author:Fe(o.author,80),release:c(o.release,1),items:c(o.items,0),url:s,sha256:a})}return r.sort((o,i)=>o.name.localeCompare(i.name))}async function Ig(t=(...e)=>fetch(...e)){let e=await t(Tg,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return lk(await e.json())}function Og(t,e){let n=e.find(r=>r.id===t.id);return n?(n.release??1)>=t.release?"installed":"update":"available"}var ck=t=>[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("");async function Lg(t,e=(...n)=>fetch(...n)){let n=await e(t.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let r=await n.arrayBuffer(),o=globalThis.crypto?.subtle;if(o&&ck(await o.digest("SHA-256",r))!==t.sha256)throw new Error("checksum mismatch: the file is not the one that was reviewed");return new TextDecoder().decode(r)}var uk="https://therealmrbk.github.io/NextFloor/builder/",Ml=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},_msg:{state:!0},_busy:{state:!0},_store:{state:!0},_storeError:{state:!0}};constructor(){super(),this._msg=null,this._busy=!1,this._store=null,this._storeError=null}async loadStore(){this._store="loading",this._storeError=null;try{this._store=await Ig()}catch(e){this._store=null,this._storeError=this.t("community_failed",{detail:e?.message??String(e)})}}async installStore(e){this._busy=!0,this._msg=null;try{let n=await ur(this.hass,await Lg(e));this._msg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}finally{this._busy=!1}}renderStore(){let e=this.packs??[],n=this._store;return m`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${uk} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${rr}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${n===null?m`<div><button class="nf-btn" @click=${()=>{this.loadStore()}}>${this.t("community_load")}</button></div>`:n==="loading"?m`<p class="nf-sub">${this.t("loading")}</p>`:n.length?m`<ul>
                ${n.map(r=>{let o=Og(r,e);return m`<li>
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
      ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}`}t(e,n){return $e(this.hass,e,n)}changed(){this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}errorText(e){let{code:n,message:r}=e??{},o=r??String(e),i=`pack_error_${n}`,s=this.t(i,{detail:o});return s===i?this.t("pack_error_other",{detail:o}):s}async importTexts(e){if(!this.hass||!e.length)return 0;this._busy=!0;let n=[],r=[];for(let{label:i,text:s}of e)try{let a=await ur(this.hass,s);n.push(this.t("pack_imported",{name:a.name,publisher:a.publisher,n:a.items}))}catch(a){r.push(i?`${i}: ${this.errorText(a)}`:this.errorText(a))}this._busy=!1,n.length&&this.changed();let o=e.length>1?[this.t("packs_imported_n",{n:n.length,total:e.length})]:[];return this._msg={ok:r.length===0,text:[...o,...n,...r].join(" \xB7 ")},n.length}async importFiles(e){let n=e.target,r=[...n.files??[]];n.value="",await this.importTexts(await Promise.all(r.map(async o=>({label:o.name,text:await o.text()}))))}async importPasted(){let e=this.renderRoot.querySelector("textarea"),n=e?.value.trim()??"";if(!e||!n)return void(this._msg={ok:!1,text:this.t("pack_paste_empty")});try{JSON.parse(n)}catch(r){return void(this._msg={ok:!1,text:this.t("pack_paste_not_json",{detail:r instanceof Error?r.message:String(r)})})}await this.importTexts([{label:"",text:n}])>0&&(e.value="")}async deletePack(e){if(!(!this.hass||!confirm(this.t("pack_remove_confirm",{name:Oe(e,this.hass.language??"de")}))))try{await ec(this.hass,e.id),this._msg=null,this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}}render(){let e=(this.packs??[]).filter(o=>!o.builtin),n=(this.packs??[]).length-e.length,r=this.hass?.language??"de";return m`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro",{n})} <a href="${Nt}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${e.length?m`<ul>
            ${e.map(o=>m`<li>
                <div class="nf-pack-main">
                  <strong>${Oe(o,r)}</strong>
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
    </section>`}static styles=[je,ut,le`
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
    `]};customElements.get("nf-pack-manager")||customElements.define("nf-pack-manager",Ml);var ID=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var dk=new Map;var Hg=()=>[...dk.values()];var Rl=class extends oe{static properties={hass:{attribute:!1},plugins:{attribute:!1},_error:{state:!0},_store:{state:!0},_storeError:{state:!0},_storeOpen:{state:!0}};stop=null;constructor(){super(),this._error="",this._storeError="",this._storeOpen=!1}connectedCallback(){super.connectedCallback(),this.stop=Lo(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}t(e,n){return $e(this.hass,e,n)}emit(e){this.dispatchEvent(new CustomEvent("plugins-changed",{detail:e,bubbles:!0,composed:!0}))}add(e){let n=gs(e.value),r=this.plugins??[];if(!_s(n))return void(this._error=this.t("plugins_url_invalid"));if(r.some(o=>o.url===n))return void(this._error=this.t("plugins_exists"));if(r.length>=20)return void(this._error=this.t("plugins_limit"));this._error="",e.value="",this.emit([...r,{url:n,enabled:!0}])}async toggleStore(){if(this._storeOpen=!this._storeOpen,!(!this._storeOpen||this._store)){this._storeError="";try{this._store=await zg()}catch(e){this._storeError=this.t("store_failed",{error:e instanceof Error?e.message:String(e)})}}}install(e){let n=this.plugins??[],r=n.some(o=>o.id===e.id);if(!r&&n.length>=20)return void(this._error=this.t("plugins_limit"));if(!r&&n.some(o=>o.url===e.url))return void(this._error=this.t("plugins_exists"));window.confirm(this.t("store_confirm",{name:e.name,author:e.author||"?",url:e.url}))&&(this._error="",this.emit(Dg(n,e)))}renderStore(){return m`<div class="nf-store">
      <button class="nf-btn" @click=${()=>this.toggleStore()}>${this._storeOpen?this.t("store_close"):this.t("store_open")}</button>
      ${this._storeOpen?m`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${rr}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}
            ${!this._store&&!this._storeError?m`<p class="nf-sub">${this.t("plugins_loading")}</p>`:g}
            ${this._store&&!this._store.length?m`<p class="nf-sub">${this.t("store_empty")}</p>`:g}
            <ul>
              ${(this._store??[]).map(e=>{let n=Pg(e,this.plugins);return m`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${e.name}</strong> <span class="nf-detail">${e.version}${e.author?` \xB7 ${e.author}`:""}</span></span>
                    ${e.description?m`<span class="nf-detail">${e.description}</span>`:g}
                    ${e.homepage?m`<a class="nf-detail" href=${e.homepage} target="_blank" rel="noopener">${e.homepage}</a>`:g}
                  </div>
                  ${n==="installed"?m`<span class="nf-state ok">${this.t("store_installed")}</span>`:m`<button class="nf-btn" @click=${()=>this.install(e)}>${n==="update"?this.t("store_update"):this.t("store_install")}</button>`}
                </li>`})}
            </ul>`:g}
    </div>`}stateOf(e){let n=Hg().find(i=>i.url===e),r=ys().filter(i=>i.source===e),o=[...n?.error?[n.error]:[],...r.flatMap(i=>i.errors)];if(n?.state==="error")return{label:this.t("plugins_error"),tone:"err",detail:o.join(" \xB7 ")};if(n?.state==="loading")return{label:this.t("plugins_loading"),tone:"warn",detail:""};if(n?.state==="loaded"&&!r.length)return{label:this.t("plugins_nothing_registered"),tone:"warn",detail:""};if(r.length){let i=r.map(s=>`${s.name}${s.version?` ${s.version}`:""}`).join(", ");return{label:this.t("plugins_loaded"),tone:o.length?"warn":"ok",detail:o.length?`${i} \xB7 ${o.join(" \xB7 ")}`:i}}return{label:this.t("plugins_reload_hint"),tone:"warn",detail:""}}render(){let e=this.plugins??[],n=ys().filter(r=>!r.source);return m`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${Nt}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
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
    </section>`}static styles=[je,ut,le`
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
    `]};customElements.get("nf-plugin-manager")||customElements.define("nf-plugin-manager",Rl);var El=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},plugins:{attribute:!1}};t(e,n){return $e(this.hass,e,n)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${Nt}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${Nt}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${Nt}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <nf-pack-manager .hass=${this.hass} .packs=${this.packs}></nf-pack-manager>
      <nf-model-upload .hass=${this.hass} .packs=${this.packs}></nf-model-upload>
      <nf-plugin-manager .hass=${this.hass} .plugins=${this.plugins}></nf-plugin-manager>
    </div>`}static styles=[je,ut,le`
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",El);var fo="handled",Cg=["select","rect","polygon","wall","opening","furniture","stairs","outdoor","hole","roof","energy"],Ng=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Gi=10,Le=t=>Math.round(t*1e3)/1e3,Bg={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Al=class extends oe{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},loadCardEditor:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_solid3d:{state:!0},_sidePinned:{state:!0},_studio:{state:!0},_check:{state:!0},_keys:{state:!0},_note:{state:!0},_dims:{state:!0},_tour:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_wallView:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},_arcEdit:{state:!0},_routeDraft:{state:!0}};doc3dTimer;tourChecked=!1;_pick=null;_pickTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new Li(100);lib=new Si(()=>this.requestUpdate());side=new Bi(()=>this.requestUpdate());sel=new Ni(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._arcEdit=null,this._routeDraft=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this.roof.chimneyId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._solid3d=!1,this._doc3d=this._doc,this._sideOpen=!1;let n=!0;try{n=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=n,this._studio=null,this._check=!1,this._keys=!1,this._note=null,this._dims=(()=>{try{return localStorage.getItem("nextfloor.plan_dims")==="1"}catch{return!1}})(),this._tour=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._wallView=null,this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,n){return $e(this.hass,e,n)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}arcActions(){return{edit:this._arcEdit,setEdit:e=>this._arcEdit=e,apply:e=>{if(!this.isAdmin||Math.abs(e.bulge)<.01)return;let n=this._doc,r=structuredClone(n),o=r.floors.find(c=>c.id===this._floorId);if(!o)return;let[i,s,a]=e.key.split(":");if(!(i==="wall"?hp(o,s,e.bulge).length>0:dp(o,s,Number(a),e.bulge))){this._arcEdit={...e,error:this.t("arc_too_wide")};return}this._arcEdit=null,this.setDoc(r,n)}}}freeWallActions(){return{update:e=>this.updateFreeWall(e),remove:()=>this.deleteFreeWall(),arc:this.arcActions(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,n)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:pf(r,e,n)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),removeCorner:e=>{let n=this.sel.outdoor;n&&this.change((r,o)=>{nf(o.outdoor.find(i=>i.id===n),e)})},lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),studio:()=>this.openStudio(null),packs:this.packs??[]}}openStudio(e){let n=e?G(e):void 0,r=n?.recipe&&e?.startsWith(`pack:${fn}:`)?n.id:null;this._studio={recipe:r&&n?.recipe?{...n.recipe}:vl("cabinet",""),itemId:r,busy:!1,error:null},this._tool="furniture"}async saveStudio(){let e=this._studio;if(!e||!this.hass||!this.isAdmin)return;let n=this.hass.language??"en",r=hr().find(u=>u.id===fn),o=r?.items??[],i={...e.recipe,name:e.recipe.name||this.t(`studio_kind_${e.recipe.kind}`)},s=e.itemId??ag(i.name,o.map(u=>u.id)),a=Vi(i,s,n),l={id:fn,name:r?.name??this.t("studio_pack_name"),publisher:r?.publisher??this.t("studio_pack_publisher"),release:(r?.release??0)+1,items:e.itemId?o.map(u=>u.id===s?a:u):[...o,a]};this._studio={...e,busy:!0,error:null};try{let{builtin:u,imported_at:d,...f}=l;await ur(this.hass,JSON.stringify({format:"nfpack",version:1,...f}))}catch(u){this._studio={...e,busy:!1,error:this.t("studio_error",{detail:u.message??String(u)})};return}is([...hr().filter(u=>u.id!==fn),l]),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._studio=null;let c=de(fn,s);if(e.itemId){let[u,d,f]=a.size;this.change(h=>h.floors.forEach(p=>p.furniture.forEach(_=>_.type===c&&Object.assign(_,{w:u,d,h:f}))))}else this.addFurniture(c)}printPlan(){let e=o=>this.t(o),n=xg(this._doc,{title:this.t("print_title"),room:e("print_room"),floorArea:e("print_floor_area"),living:e("print_living"),low:e("print_low"),total:e("print_total"),note:e("living_area_hint"),area:o=>Ee(this.hass,o),length:o=>fe(this.hass,o)}),r=window.open("","_blank");if(!r)return void alert(this.t("print_blocked"));r.document.open(),r.document.write(n),r.document.close()}fixFinding(e){e.floorId!==this._floorId&&this.floorActions().openFloor(e.floorId);let n=o=>o.floors.find(i=>i.id===e.floorId),r=e.fix;switch(r.do){case"show_floor":return;case"show_room":return this.selectItem("room",r.roomId);case"show_opening":return this.selectItem("opening",r.openingId);case"show_furniture":return this.selectItem("furniture",r.furnitureId);case"set_area":return this.change(o=>{let i=n(o)?.rooms.find(s=>s.id===r.roomId);i&&Object.assign(i,Za(i,r.areaId,this.hass?.areas??{}))});case"add_area_rooms":{let o=n(this._doc);o&&this.addAreaRooms(o);return}case"place_devices":return this.change(o=>{let i=n(o),s=i?.rooms.find(a=>a.id===r.roomId);i&&s&&Sa(o,i,s,r.entityIds)});case"remove_placements":return this.change(o=>{let i=n(o);i&&(i.placements=i.placements.filter(s=>!r.entityIds.includes(s.entity_id)))});case"ignore_devices":return this.ignoreDevices(r.entityIds)}}ignoreDevices(e){this.change(n=>{n.settings.check_ignore=[...new Set([...n.settings.check_ignore??[],...e])]})}setDims(e){this._dims=e;try{localStorage.setItem("nextfloor.plan_dims",e?"1":"0")}catch{}}addNote(e){if(!this.isAdmin||!this.floor)return;let n=I("note");this.change((r,o)=>o.notes=[...o.notes??[],{id:n,x:Math.round(e[0]*100)/100,z:Math.round(e[1]*100)/100,text:""}]),this._note=n,this._sideOpen=!0}studioButton(){let e=this.furnitureItem?.type;return!e||!gt(e)||!G(e)?.recipe||!e.startsWith(`pack:${fn}:`)||!this.isAdmin?g:m`<button class="nf-btn nf-lib-studio" @click=${()=>this.openStudio(e)}>🛠️ ${this.t("studio_open")}</button>`}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,n)=>this.deviceToFurniture(e,n),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureToFloor(e){let[n,r]=[this._floorId,this.sel.furniture];if(!n||!r||!this.isAdmin)return;let o=structuredClone(this._doc);qm(o,n,r,e)&&(this.setDoc(o),this._floorId=e,this.selectItem("furniture",r))}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),toFloor:e=>this.furnitureToFloor(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,n)=>this.setOpeningPreset(e,n),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),isBelowGround:e=>e.type==="window"&&this.openingIsExterior(e)&&(this.floor?.elevation??0)+e.sill<-.22,lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new gi({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:$o,storeImage:St},readPicture:Bn,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new Oi({host:this.host,floorId:()=>e._floorId,setFloorId:n=>e._floorId=n,confirm:n=>confirm(n),refresh:()=>e.requestUpdate()})}redrawQueued=!1;redrawSoon=()=>{this.redrawQueued||(this.redrawQueued=!0,setTimeout(()=>{this.redrawQueued=!1,this.requestUpdate()},30))};canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,n)=>this.toWorld(e,n),scale:this._view.scale,floorId:this._floorId,redraw:this.redrawSoon}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new ci({get hass(){return e.hass},get doc(){return e._doc},t:(n,r)=>e.t(n,r),adopt:n=>{e.setDoc(n),e._floorId=n.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:n=>e.side.notice=n,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(n,r)=>e.t(n,r),change:n=>e.change(n),replace:n=>e.setDoc(n),pickPoint:n=>e.pickPoint(n),get loadCardEditor(){return e.loadCardEditor}}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&is(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(!this.tourChecked&&this.building&&(this.tourChecked=!0,!this.building.floors.some(n=>n.rooms.length)&&Sg()&&(this._tour=0)),this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let n=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=n.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:n,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(f=>f.id===n);if(!l)continue;let[c,u]=Fs(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:u});let d=_r(a,l,i);d&&Object.assign(l,d)}})}onDeviceMoved3d(e){let{id:n,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(u=>u.entity_id===n);if(!a)continue;let[l,c]=Fs(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,n=this.device;if(e){let r=Do(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
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
        <span>${qe(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??At(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(n){let r=X(n.entity_id),o=r==="light",i=r?So(r,this.floor?at(this.floor,n.x,n.z):2.5,o?n.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${W(this.hass,n.entity_id)}</span>
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
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};fittingField(e,n,r){if(r==="field")return e.settings.roof.solar?.find(i=>i.id===n);if(r==="win"){let i=e.settings.roof.windows?.find(s=>s.id===n);return i?en(i):void 0}let o=e.settings.roof.chimneys?.find(i=>i.id===n);return o?yt(o,Z(e).find(i=>i.key===o.face)):void 0}grab3dStart(e){let n=this._doc,r=Z(n),o=null,i=(a,l,c,u,d=!1,f=!1)=>{if(!c||d)return;let h=Jo(c,e.o,e.d);!h||!qs(c,u,h.u,h.s)||o&&o.t<=h.t||(o={id:a,win:l,chimney:f,t:h.t,du:h.u-u.u,ds:h.s-u.v})};if(this._tool==="energy")for(let a of n.settings.roof.solar??[])i(a.id,!1,xe(n,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,en(a),!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.chimneys??[]){let l=r.find(c=>c.key===a.face)??null;i(a.id,!1,l,yt(a,l),!!a.locked,!0)}if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,chimney:s.chimney,du:s.du,ds:s.ds,base:n,moved:!1},s.chimney?this.roof.chimneyId=s.id:s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let n=this.grab3d;if(!n)return;let r=n.base,o=this.fittingField(r,n.id,n.win?"win":n.chimney?"chimney":"field");if(!o)return;let i=xe(r,o),s=i?.unbounded?[i]:n.win||n.chimney?Z(r):[...Z(r),...Ke(r)],a=null;for(let f of s){let h=Jo(f,e.o,e.d);h&&Zs(f,h.u,h.s)&&(!a||h.t<a.t)&&(a={face:f,...h})}if(!a)return;let l=a.face,c=.05,u=f=>Le(Math.round(f/c)*c),d=ct(l,{...o,face:l.key,u:u(a.u-n.du),v:u(a.s-n.ds),tilt:l.flat?o.tilt??15:o.tilt});n.moved=!0,this.change(f=>{if(n.win||n.chimney){let p=n.win?f.settings.roof.windows?.find(_=>_.id===n.id):f.settings.roof.chimneys?.find(_=>_.id===n.id);p&&Object.assign(p,{face:l.key,...d});return}let h=f.settings.roof.solar?.find(p=>p.id===n.id);h&&Object.assign(h,{face:l.key,...d},l.flat&&h.tilt==null?{tilt:15}:{})},n.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
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
        .furnishTypes=${this._tool==="energy"?Ce:this._tool==="roof"?[]:null}
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
    </div>`}updated(){for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())this.bg.ensureLoaded(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,n=this._doc){n&&this.history.record(n),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,n=this._doc,r=!0){let o=structuredClone(n),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?n:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(n=>n.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:n,ox:r,oy:o}=this._view;return[e[0]*n+r,e[1]*n+o]}pickPoint(e){this._pick?.(null),this._pick=e,clearTimeout(this._pickTimer),this._pickTimer=window.setTimeout(()=>this.cancelPick(),6e4),this.requestUpdate()}cancelPick(){clearTimeout(this._pickTimer),this._pick&&(this._pick=null,this.requestUpdate())}toWorld(e,n){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(n-i)/r]}localPoint(e){let n=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],n=e.length?ue(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=n.x1-n.x0+2*r,i=n.z1-n.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(n.x0+n.x1)/2*s,oy:this._size.h/2-(n.z0+n.z1)/2*s}}showPoint(e,n){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-n*r}}zoomAt(e,n,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:n-(n-i)*l,oy:r-(r-s)*l}}snap(e,n,r=!1){if(this._guides={},r)return e;let o=_p(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:Gi/this._view.scale,skip:n});return this._guides=o.guides,o.point}onPointerDown(e){if(this._pick){let[r,o]=this.localPoint(e),i=this._pick;this.cancelPick(),i(this.toWorld(r,o));return}this._ctx=null;let n=e.target?.closest?.("[data-note]")?.getAttribute("data-note");if(n&&this._tool==="select"){this._note=n,this._sideOpen=!0;return}if(this._note&&(this._note=null),this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let r=this.localPoint(e),o=e.target;this.pressStart=r,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(o,r))},550)}}guardFixed(e){let n=this.drag;if(!n)return;let r=null;n.kind==="vertex"||n.kind==="room"?r=["room",n.roomId]:n.kind==="device"||n.kind==="aim"?r=["device",n.entityId]:n.kind==="opening"?r=["opening",n.id]:n.kind==="furniture"||n.kind==="rotate"||n.kind==="resize"?r=["furniture",n.id]:n.kind==="wallmove"?r=["wall",n.id]:n.kind==="outdoor"&&(r=["outdoor",n.id]),!(!r||!this.isFixedItem(...r))&&("moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){let i=this.drag;i&&Ng.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r={local:n,world:this.toWorld(...n),target:e.target,fine:e.altKey},o=this.pressRoute(r)??this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==fo&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,n){return this.isAdmin?n:this.pan(e)}pressBackground(e){let{world:n,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(n),fo;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=Nn(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(n[1]-s[1],n[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(n),fo;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,n){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:n.x,bz:n.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let n=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:n,end:n}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:n,world:r,target:o}=e,i=(v,w)=>o.closest(v)?.getAttribute(w)??null,s=this._tool==="energy",a=s?i("[data-energy-device]","data-energy-device"):null;if(a)return this.pressEnergyDevice(e,a);let l=s?i("[data-solar-turn]","data-solar-turn"):null;if(l&&this.isAdmin)return{kind:"solarturn",id:l,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);let d=this._tool==="roof"?i("[data-chimney]","data-chimney"):null;if(d)return this.pressChimney(e,d);this._tool==="roof"&&(this.roof.windowId=null,this.roof.chimneyId=null);let f=s?i(".nf-energy-item","data-furniture"):null;if(f)return this.pressEnergyDevice(e,f);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let h=i("[data-plus]","data-plus");if(h?.startsWith("roof:")&&this.isAdmin)return this.splitRoofEdgeGesture(...h.split(":").slice(1));let p=i("[data-roof-vertex]","data-roof-vertex"),_=i("[data-roof-corner]","data-roof-corner"),y=i("[data-roof]","data-roof");if(p&&this.isAdmin){let[v,w]=p.split(":");return{kind:"roofvertex",id:v,index:Number(w),base:this._doc,moved:!1}}if(_&&this.isAdmin){let[v,w,x]=_.split(":");return{kind:"roofcorner",id:v,corner:[w==="1"?1:0,x==="1"?1:0],base:this._doc,moved:!1}}if(y){let v=this.roof.isFixed(this._doc.settings.roof.sections?.find(w=>w.id===y));return v&&this.roof.sectionId===y&&(this._fixedHint=!0),this.roof.sectionId=y,this.isAdmin&&!v?{kind:"roofmove",id:y,start:r,startScreen:n,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let b=this.snap(r,void 0,e.fine);return{kind:"rect",start:b,end:b,roof:!0}}pressEnergyDevice(e,n){return this.roof.solarId=null,this.selectItem("furniture",n),this.moves(e,{kind:"furniture",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,n){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&n===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);n!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=n,this.roof.sectionId=null;let a=this._doc.settings.roof.solar?.find(d=>d.id===n),l=a?xe(this._doc,a)??void 0:void 0,c=l?this.faceHit(l,o):null,u=a&&c?{du:c.u-a.u,ds:Number.isNaN(c.s)?0:c.s-a.v}:null;return this.isAdmin&&!a?.locked?{kind:"solarmove",id:n,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,n){this.roof.windowId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(a=>a.id===n),o=r?Z(this._doc).find(a=>a.key===r.face):void 0,i=o?Fn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressChimney(e,n){this.roof.chimneyId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.chimneys?.find(a=>a.id===n),o=r?Z(this._doc).find(a=>a.key===r.face):void 0,i=o?Fn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,chimney:!0}:this.pan(e)}pressDrawingTool(e){let n=this._tool;if(n==="rect"||n==="outdoor"||n==="hole"||n==="stairs"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:n==="outdoor",hole:n==="hole",stairs:n==="stairs"}}if(n==="polygon"||n==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(n==="opening")return this.placeOpening(this._openingPreset,e.local)?fo:this.pan(e)}pressItem(e){let{local:n,world:r,target:o}=e,i=(x,k)=>o.closest(x)?.getAttribute(k)??null,s=this._doc,a=i("[data-device]","data-device");if(a&&this.isAdmin)return{kind:"device",entityId:a,start:r,startScreen:n,base:s,moved:!1};let l=i("[data-opening]","data-opening");if(l)return this.selectItem("opening",l),this.moves(e,{kind:"opening",id:l,startScreen:n,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[x,k,$]=c.split(":");return{kind:"resize",id:x,corner:[k==="1"?1:-1,$==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let d=i("[data-aim]","data-aim");if(d&&this.isAdmin)return{kind:"aim",entityId:d,base:s,moved:!1};let f=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(f)return this.selectItem("furniture",f),this.moves(e,{kind:"furniture",id:f,start:r,startScreen:n,base:s,moved:!1});let h=i("[data-vertex]","data-vertex"),p=i("[data-mid]","data-mid");if(h!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(h),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(p!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(p));let _=i("[data-wall-end]","data-wall-end");if(_&&this.isAdmin){let[x,k]=_.split(":");return{kind:"wallmove",id:x,end:k,start:r,startScreen:n,base:s,moved:!1}}let y=i("[data-free-wall]","data-free-wall");if(y)return this.selectItem("wall",y),this.moves(e,{kind:"wallmove",id:y,end:null,start:r,startScreen:n,base:s,moved:!1});let b=i("[data-plus]","data-plus");if(b?.startsWith("out:")&&this.isAdmin)return this.splitOutdoorEdgeGesture(...b.split(":").slice(1));let v=i("[data-out-vertex]","data-out-vertex");if(v&&this.isAdmin){let[x,k]=v.split(":");return{kind:"outvertex",id:x,index:Number(k),base:s,moved:!1}}let w=i("[data-outdoor]","data-outdoor");if(w&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",w),this.moves(e,{kind:"outdoor",id:w,start:r,startScreen:n,base:s,moved:!1})}splitEdgeGesture(e,n){let[r,o]=[e.points[n],e.points[(n+1)%e.points.length]],i=Xe([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((a,l)=>qa(l,e.id,n,i),s,!1),this.sel.corner=n+1,{kind:"vertex",roomId:e.id,index:n+1,base:s,moved:!0}}splitOutdoorEdgeGesture(e,n){let r=Number(n),o=this._doc,i=this.floorOf({base:o})?.outdoor.find(l=>l.id===e);if(!i)return;let[s,a]=[i.points[r],i.points[(r+1)%i.points.length]];return this.change((l,c)=>tf(c.outdoor.find(u=>u.id===e),r,[(s[0]+a[0])/2,(s[1]+a[1])/2]),o,!1),{kind:"outvertex",id:e,index:r+1,base:o,moved:!0}}splitRoofEdgeGesture(e,n){let r=Number(n),o=this._doc;return this.change(i=>{let s=i.settings.roof.sections?.find(u=>u.id===e);if(!s)return;let a=Ea(s),[l,c]=[a[r],a[(r+1)%a.length]];wf(s,r,[(l[0]+c[0])/2,(l[1]+c[1])/2])},o,!1),{kind:"roofvertex",id:e,index:r+1,base:o,moved:!0}}pressRoom(e){let n=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return n?(n!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",n),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let n=this.localPoint(e);if(this.pressStart?Vn(n,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,n),this.pinch){this.pinchMove();return}let r=this.toWorld(...n),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:n,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,n){this._view={...this._view,ox:this._view.ox+n[0]-e[0],oy:this._view.oy+n[1]-e[1]}}live(e,n){this.change(n,e.base,!1)}floorOf(e){return e.base.floors.find(n=>n.id===this._floorId)}moveDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid,a=l=>l.moved||Vn(r,l.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||Vn(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=fp(e.start,this.snap(o,void 0,i),n.straight),this.requestUpdate();return;case"wallmove":{if(!a(e))return;e.moved=!0;let l=(this.floorOf(e)?.walls??[]).find(u=>u.id===e.id);if(!l)return;let c;if(e.end){let u=this.snap(o,void 0,i);c=e.end==="a"?{a:u,b:l.b}:{a:l.a,b:u}}else{let u=Mi(e.start,o,dn(s,i));c={a:Xe(l.a,u),b:Xe(l.b,u)}}this.live(e,(u,d)=>Object.assign((d.walls??[]).find(f=>f.id===e.id),c));return}case"vertex":{let l=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(c,u)=>{u.rooms.find(d=>d.id===e.roomId).points[e.index]=l});return}case"room":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.rooms.find(f=>f.id===e.roomId);if(!l||!c)return;let u=this.roomDelta(c,[o[0]-e.start[0],o[1]-e.start[1]],i),d=new Set(l.placements.filter(f=>N([f.x,f.z],c.points)).map(f=>f.entity_id));this.live(e,(f,h)=>{h.rooms.find(p=>p.id===e.roomId).points=c.points.map(p=>Xe(p,u)),h.placements=l.placements.map(p=>{if(!d.has(p.entity_id))return p;let[_,y]=Xe([p.x,p.z],u);return{...p,x:_,z:y}})});return}case"opening":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.openings.find(p=>p.id===e.id),u=c&&l?Pe(c,l.rooms,l.walls??[]):null;if(!c||!u)return;let d=l?Dt(l.openings,c):[c],f=!c.wall&&d.length>1&&l?zn(u.room,d):null;if(f){let p=i?.01:this._doc.settings.grid,_=Js(u.room,o)-f.width/2,y=p>0?Math.round(_/p)*p:_,b=Math.max(0,Math.min(Cr(u.room)-f.width,y));this.live(e,(v,w)=>{let x=w.openings.find($=>$.id===e.id),k=x?Nr(w.openings,u.room,x,b,f.width,()=>I("opening")):null;k&&(w.openings=k)});return}let h=this.dropOffset(u.room,u.edge,o,c.width,i);this.live(e,(p,_)=>{_.openings.find(y=>y.id===e.id).offset=h});return}case"furniture":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.furniture.find(h=>h.id===e.id);if(!l)return;let[c,u]=Ya([l.x,l.z],e.start,o,dn(s,i)),f=(i?null:this.snapToWall({...l,x:c,z:u}))??{x:c,z:u,rotation:l.rotation};this.live(e,(h,p)=>{Object.assign(p.furniture.find(_=>_.id===e.id),f)});return}case"resize":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Bc(l,e.corner,o,dn(s,i));this.live(e,(u,d)=>{Object.assign(d.furniture.find(f=>f.id===e.id),c)});return}case"rotate":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Xa([l.x,l.z],o,i?1:15);this.live(e,(u,d)=>{d.furniture.find(f=>f.id===e.id).rotation=c});return}case"aim":{e.moved=!0;let l=this.floorOf(e)?.placements.find(u=>u.entity_id===e.entityId);if(!l)return;let c={rotation:Xa([l.x,l.z],o,i?1:5)};this.live(e,(u,d)=>{Object.assign(d.placements.find(f=>f.entity_id===e.entityId),c)});return}case"device":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.placements.find(d=>d.entity_id===e.entityId);if(!l)return;let[c,u]=Ya([l.x,l.z],e.start,o,dn(s,i));this.live(e,(d,f)=>{Object.assign(f.placements.find(h=>h.entity_id===e.entityId),{x:c,z:u})});return}case"outdoor":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!l)return;let c=Mi(e.start,o,dn(s,i));this.live(e,(u,d)=>{d.outdoor.find(f=>f.id===e.id).points=l.points.map(f=>Xe(f,c))});return}case"outvertex":{e.moved=!0;let l=this.snap(o,void 0,i),c=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!c)return;this.live(e,(u,d)=>{let f=d.outdoor.find(h=>h.id===e.id);f&&(f.points=mp(c.points,e.index,l))});return}case"bgmove":e.moved=!0,this.live(e,(l,c)=>{c.background&&([c.background.x,c.background.z]=Xe([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Nn(l,c.aspect),d=Dh(e.rot,e.start,Math.atan2(o[1]-u[1],o[0]-u[0]),n.straight);this.live(e,(f,h)=>{h.background&&(h.background.rotation=d)});return}case"bgscale":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Math.max(.5,Le(Ph(l,c.aspect,o)[0]));this.live(e,(d,f)=>{f.background&&(f.background.width=u)});return}default:this.moveRoofDrag(e,n)}}moveRoofDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!Vn(r,e.startScreen))return;e.moved=!0;let a=Mi(e.start,o,dn(s,i)),l=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!l)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(_=>_.id===e.id);if(!u)return;let[d,f]=Xe([l.x0,l.z0],a),[h,p]=Xe([l.x1,l.z1],a);Object.assign(u,{x0:d,x1:h,z0:f,z1:p}),l.points&&(u.points=l.points.map(_=>Xe(_,a)))});return}case"roofvertex":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=Xe(a,[0,0]),Object.assign(c,Pt(c.points)))});return}case"roofcorner":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=Le(a[0]),c[e.corner[1]?"z1":"z0"]=Le(a[1]))});return}case"solarturn":{e.moved=!0;let a=e.base.settings.roof.solar?.find(u=>u.id===e.id),l=a?xe(e.base,a):null;if(!a||!l)return;let c=Ir(e.base,a,pp(Tr(l,a),o,i?1:15));this.live(e,u=>{let d=u.settings.roof.solar?.find(f=>f.id===e.id);d&&Object.assign(d,c)});return}case"solarmove":this.moveSolar(e,n);return;default:return}}moveSolar(e,n){let{local:r,world:o,fine:i}=n;if(!e.moved&&!Vn(r,e.startScreen))return;e.moved=!0;let s=this.fittingField(e.base,e.id,e.win?"win":e.chimney?"chimney":"field"),a=e.win||e.chimney?Z(e.base):[...Z(e.base),...this._floorId?Ke(e.base,this._floorId):[]],l=s?xe(e.base,s,a):null;if(!s||!l)return;let c=i?.01:.05,u=y=>Le(Math.round(y/c)*c),d=l.unbounded?null:js(a,o),f=l,h,p;if(d&&e.grab)f=d.face,h=u(d.u-e.grab.du),p=Number.isNaN(d.s)?d.face.key===s.face?s.v:Math.max(0,d.face.ls-1.5):u(d.s-e.grab.ds);else{let[y,b]=[o[0]-e.start[0],o[1]-e.start[1]],v=[l.es[0],l.es[2]];h=u(s.u+y*l.eu[0]+b*l.eu[2]),p=u(s.v+(y*v[0]+b*v[1])/(v[0]*v[0]+v[1]*v[1]||1))}let _=ct(f,{...s,face:f.key,u:h,v:p,tilt:f.flat?s.tilt??15:s.tilt});this.live(e,y=>{if(e.win||e.chimney){let v=e.win?y.settings.roof.windows?.find(w=>w.id===e.id):y.settings.roof.chimneys?.find(w=>w.id===e.id);v&&Object.assign(v,{face:f.key,..._});return}let b=y.settings.roof.solar?.find(v=>v.id===e.id);b&&Object.assign(b,{face:f.key,..._},f.flat&&b.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&Ng.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let r=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,i]=n.start,[s,a]=n.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],u=[l,[c[0],l[1]],c,[l[0],c[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(l,c):n.stairs?this.addStairs(l,c):n.roof?this.roof.addSection(l,c):this.addRoom(u)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[n,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),n,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[n,r]=e;return{dist:Math.hypot(n[0]-r[0],n[1]-r[1]),mid:[(n[0]+r[0])/2,(n[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,n,r){if(r)return n;let o=this._doc.settings.grid,i=[Math.round(n[0]/o)*o,Math.round(n[1]/o)*o],a=Gi/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let u of e.points){let d=Math.hypot(u[0]+n[0]-c[0],u[1]+n[1]-c[1]);d<a&&(a=d,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>N(e,o.points)).sort((o,i)=>ve(o.points)-ve(i.points))[0]?.id??null}addDraftPoint(e,n){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-n[0],s-n[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&ve(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let n=this._draft[this._draft.length-1];if(!n||!(this._measureLen>0))return;let r=_n(n,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[n,r]=this._rectSize;n>.1&&r>.1&&(this.addRoom([e,_n(e,n,"right"),_n(_n(e,n,"right"),r,"down"),_n(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let n=this.sel.wall;n&&this.change((r,o)=>Object.assign((o.walls??[]).find(i=>i.id===n),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((n,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let n=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===n),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((n,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;if(e.key==="Escape"&&this._pick){e.preventDefault(),this.cancelPick();return}let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Bg,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=Bg[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="?"&&!r)this._keys=!this._keys;else if(e.key==="Escape"){if(this._keys){this._keys=!1;return}if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let n=structuredClone(this._doc);n.floors=n.floors.filter(r=>r.id!==e.id),this.setDoc(n),this._floorId=n.floors[0]?.id??null,this.sel.room=null}faceHit(e,n){return e.wall?{u:(n[0]-e.o[0])*e.eu[0]+(n[1]-e.o[2])*e.eu[2],s:Number.NaN}:Fn(e,n)}planLayers(e,n){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return R`${Rh(r,this._doc.settings)} ${$h(r,this.bg,e)} ${Ep(r,this._size)} ${Ap(r)} ${n?Fp(r,n):g}
      ${e?R`${Tp(r,e,this.sel.outdoor)} ${Pp(r,e,this.sel.room,this.sel.edge)} ${Sp(r,e,this.sel.furniture)}
        ${Ip(r,e,this.sel.wall)} ${n?Np(r,e,n,this.sel.opening):g} ${Dp(r,e)}
        ${this._tool==="select"?Mp(r,e,this.sel.device):g}
        ${this._tool==="select"?Rp(r,e,this._note):g}
        ${this._dims?Hp(r,e):g}
        ${i?Lp(r,o,this.sel.corner):g}
        ${zp(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Op(r,o):g}
        ${vh(r,e)}`:g}
      ${this._tool==="roof"?R`${pa(r,this.roof)}${yh(r,this.roof)}${xh(r,this.roof)}`:this._tool==="energy"?R`${pa(r,this.roof)}${bh(r,this.roof)}${kh(r,this.floor,this._doc.energy.routes??[],this._routeDraft)}${wh(r,this.floor,this.sel.furniture)}`:g}
      ${yp(r,s,this._tool,this._draft,this._cursor)} ${bp(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor,{wall_exterior:n,wall_interior:r}=this._doc.settings;return e?me(e.rooms,{exterior:n,interior:r},e.walls??[]).walls:[]}edgeParts(e,n){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===n).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,n){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&n(i)})}edgeActions(){return{openWall:(e,n)=>this._wallView={roomId:e.id,edge:n},partsOf:(e,n)=>this.edgeParts(e,n),isOuter:(e,n)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===n)),setHeight:(e,n,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,n).length;this.changeRoom(e,a=>Gp(a,n,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===n)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===n)||i.push({room_id:e.id,edge:n,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(u=>u.id===l.room_id);c&&tl(c,l.edge,o)}})},setSlope:(e,n,r,o)=>this.changeRoom(e,i=>Vp(i,n,r,o)),clearSlope:(e,n)=>this.changeRoom(e,r=>Kp(r,n,this.floor?.height??2.5)),setThickness:(e,n,r,o,i)=>this.changeRoom(e,s=>qp(s,n,r,o,i)),arc:this.arcActions(),cut:(e,n,r)=>{let o=this.edgeParts(e,n);this.changeRoom(e,i=>Up(i,n,r,o))},moveCut:(e,n,r,o)=>{let i=this.edgeParts(e,n);this.changeRoom(e,s=>jp(s,n,r,o,i))},join:(e,n,r,o)=>this.changeRoom(e,i=>Zp(i,n,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let n=Km(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=bl(r.floors,n),this.setDoc(r),this._floorId=n.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let n=Xn(this._doc,e,this.hass?.areas);if(n.length===0)return;let r=Nc(e,n,()=>I("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}duplicateFloor(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=Zm(this._doc,n,this.t("floor_copy_name",{name:n.name}),e),o=structuredClone(this._doc);o.floors=bl(o.floors,r),this.setDoc(o),this._floorId=r.id,this.sel.room=null,this.side.floorCopy=null,this.fit()}moveFloor(e){let n=this._floorId;if(!n)return;let r=Gm(this._doc.floors,n,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},print:()=>this.printPlan(),addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),duplicateFloor:e=>this.duplicateFloor(e),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:n=>this.selectItem("room",n),patch:n=>this.updateRoom(n),setArea:n=>this.setArea(n),setRect:(n,r)=>this.setRect(n,r),setCorner:(n,r,o)=>this.setPoint(n,r,o),removeCorner:n=>this.deleteVertex(n),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:n=>this.applyPackage(e,n),openSpots:()=>{let n=this.hass?ye(this.hass,e).filter(r=>r.startsWith("light.")):[];this.side.spots=Qm(e,n)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:Jp(this.host,e,this.edgeActions()),climate:Mf(this.host,e,n=>this.updateRoom(n)),corner:this.sel.corner}}applyPackage(e,n){if(!this.isAdmin)return;let r=Zu(e,n,()=>I("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let n=this.side.spots;if(!n||!this.isAdmin)return;let r=Wi(e,n);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,n){if(!this.floor)return;let r=Yh(e,n);this.change((o,i)=>i.walls=[...i.walls??[],r]),this.selectItem("wall",r.id)}addHole(e,n){if(!this.floor)return;let r=Jh(e,n);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addStairs(e,n){let r=this.floor;if(!r)return;let[o,i]=[n[0]-e[0],n[1]-e[1]],s=$a("stairs",this._doc,r,[(e[0]+n[0])/2,(e[1]+n[1])/2]),a=o>i*1.2;Object.assign(s,{w:Math.round((a?i:o)*1e3)/1e3,d:Math.round((a?o:i)*1e3)/1e3,rotation:a?90:0}),this.change((l,c)=>c.furniture.push(s)),this.selectItem("furniture",s.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let n=ef(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let n=rf(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}addRoom(e){if(!this.floor)return;let n=rp(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((n,r)=>ip(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let n=op(e);this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id}deleteVertex(e){let n=this.room;n&&(this.change((r,o)=>sp(o,n.id,e)),this.sel.corner=null)}nudgeSelection(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?Lm(r,i,e,n):qn;return s===qn?!1:(s!==Hi&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=this.room,o=$a(e,this._doc,n,r?be(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let n=this.furnitureItem;n&&this.isAdmin&&this.updateFurniture({rotation:sf(n.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=of(e);this.change((r,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}vehicleToSpot(e){if(!this.isAdmin)return;let n=af(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(n)}),this.selectItem("furniture",n.id)}deviceToFurniture(e,n){if(!this.isAdmin)return;let r=lf(e,n);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let n=e.entity;if(!this.isAdmin||!n||n==="none")return;let r=cf(e,n);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===n)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",n)}placeDevices(e){let n=this.room;!n||e.length===0||!this.isAdmin||this.change((r,o)=>Sa(r,o,n,e))}removeDevice(e){this.change(n=>uf(n,e))}centreDevice(){let e=this.device,n=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!n)return;let[r,o]=df(n);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let n=this.floor;if(!n)return;let r=cp(e,n.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,n){!this.isAdmin||!e&&!n||(this.change(r=>Nm(r,this.shiftScope(),e,n)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Bm(e,this.shiftScope()))}setArea(e){let n=this.room;n&&this.updateRoom(Za(n,e,this.hass?.areas??{}))}setRect(e,n){let r=this.room,o=r?ap(r,e,n):null;o&&this.updateRoom({points:o})}setPoint(e,n,r){let o=this.room,i=o?lp(o,e,n,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,n){this._openingPreset=n,this.updateOpening(ff(e,n))}pressRoute(e){let n=this._routeDraft;if(!n||this._tool!=="energy"||!this._floorId||n.points.length>=Dc)return;let[r,o]=this.snap(e.world,void 0,e.fine).map(i=>Math.round(i*1e3)/1e3);return this._routeDraft={...n,points:[...n.points,{floor_id:this._floorId,x:r,z:o}]},fo}routeActions(){let e=n=>this.change(r=>{r.energy.routes=n(r.energy.routes??[]),r.energy.routes.length||delete r.energy.routes});return{draft:this._routeDraft,start:n=>this._routeDraft={key:n,points:[...this._doc.energy.routes?.find(r=>r.key===n)?.points??[]]},undoPoint:()=>this._routeDraft&&(this._routeDraft={...this._routeDraft,points:this._routeDraft.points.slice(0,-1)}),cancel:()=>this._routeDraft=null,finish:()=>{let n=this._routeDraft;this._routeDraft=null,!(!n||!this.isAdmin)&&e(r=>{let o=r.find(s=>s.key===n.key),i=r.filter(s=>s.key!==n.key);return n.points.length?[...i,{key:n.key,points:n.points,...o?.cable?{cable:!0}:{}}]:i})},clear:n=>this.isAdmin&&e(r=>r.filter(o=>o.key!==n)),setCable:(n,r)=>this.isAdmin&&e(o=>o.map(i=>i.key===n?{...i,cable:r}:i))}}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,n)=>this.openEnergyDevice(e,n),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,n){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",n.id),this.showPoint(n.x,n.z)}addEnergyDevice(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Om(e,this._doc,n,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Dm({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:n=>this.addEnergyDevice(n),setField:(n,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===n);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return Tm(this.roofDeps(),e);let n=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&Ce.includes(o.type)):void 0;if(n)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${lo(this.host,n,this.furnitureActions())}`;let r=this.energyActions();return m`${dh(this.host,r)}${Fm(this.roofDeps())}${hh(this.host,r)}${gh(this.host,this.routeActions())}${fh(this.host,r)}${ph(this.host)}`}fixItem(e,n,r){if(e)switch(n){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,n){return Fo(this.fixItem(this.floor,e,n),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,n){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,n);this.change((o,i)=>{let s=this.fixItem(i,e,n);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,n){return!this.isFixedItem(e,n)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,n){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...n),o=p=>e.closest(`[${p}]`)?.getAttribute(p)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),d=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:u&&!d?i=["outdoor",u]:d&&(i=["room",d]),!i){this._ctx=null;return}let[f,h]=i;this.selectItem(f,h),(f==="opening"||f==="furniture")&&(this.sel.room=this.sel.room??d),this._ctx={x:n[0],y:n[1],kind:f,id:h,at:r}}deleteItem(e,n){if(e==="device"){if(!this.confirmFixedDelete(e,n))return;this.removeDevice(n),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let n=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
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
    </button>`}dropOffset(e,n,r,o,i){let s=e.points[n],a=e.points[(n+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return hf(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,n){this.side.notice=null,n&&(this._sideOpen=!0),this.sel.select(e,n,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){let e=this.sel.opening?this.floor?.openings.find(o=>o.id===this.sel.opening):void 0;if(!e?.front||!this.floor)return e;let n=this.floor.rooms.find(o=>o.id===e.room_id),r=n?zn(n,Dt(this.floor.openings,e)):null;return r?{...e,width:r.width}:e}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let y=Pe({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!y)continue;let[b,v]=this.toScreen(_.a),[w,x]=this.toScreen(_.b),k=(w-b)**2+(x-v)**2||1,$=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(x-v))/k)),A=Math.hypot(n[0]-b-(w-b)*$,n[1]-v-(x-v)*$),F=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],T=r.rooms.find(D=>D.points.length>=3&&N(F,D.points));A<Gi*2.2&&(!o||A-1<o.d)&&(o={room:y.room,edge:0,d:A-1,wall:_.id,roomId:T?.id??_.id})}for(let _ of r.rooms)for(let y=0;y<_.points.length;y++){let[b,v]=this.toScreen(_.points[y]),[w,x]=this.toScreen(_.points[(y+1)%_.points.length]),k=(w-b)**2+(x-v)**2||1,$=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(x-v))/k)),A=Math.hypot(n[0]-b-(w-b)*$,n[1]-v-(x-v)*$),F=A-(_.id===this.sel.room?.5:0);A<Gi*2.2&&(!o||F<o.d)&&(o={room:_,edge:y,d:F})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),d=bn[e],f=d.type;if(d.style==="glass_wall"&&!a){let _=Js(i,this.toWorld(...n)),y=Qs(i,_-d.width/2,d.width);if(y&&y.length>1){let b=I("front"),v=y.map(w=>({id:I("opening"),room_id:o.roomId??i.id,edge:w.edge,offset:w.offset,width:w.width,front:b,type:f,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...Io.has(d.style)?{}:{style:d.style},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null}));return this.change((w,x)=>x.openings.push(...v)),this._tool="select",this.selectItem("opening",v[0].id),!0}}let h=Le(Math.min(d.width,Math.max(.3,u-.1))),p={id:I("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...n),h,!1),width:h,type:f,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...d.style&&!Io.has(d.style)?{style:d.style}:{},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null};return this.change((_,y)=>y.openings.push(p)),this._tool="select",this.selectItem("opening",p.id),!0}updateOpening(e){let n=this.sel.opening;this.change((r,o)=>{let i=o.openings.find(u=>u.id===n);if(!i)return;let s=Dt(o.openings,i),a=i.wall?null:o.rooms.find(u=>u.id===i.room_id),l=a&&i.type==="window"&&i.style==="glass_wall"&&(e.width!=null||e.offset!=null),c=l&&a?zn(a,s):null;if(l&&a&&c){let u=Math.max(.3,e.width??c.width),d=c.from;e.width!=null&&(d+=(c.width-u)/2),e.offset!=null&&(d+=e.offset-i.offset),d=Math.max(0,Math.min(Cr(a)-u,d));let f=Nr(o.openings,a,{...i,...e},d,u,()=>I("opening"));f&&(o.openings=f);return}for(let u of s)Object.assign(u,e)})}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((n,r)=>{let o=r.openings.find(s=>s.id===e),i=new Set((o?Dt(r.openings,o):[o]).map(s=>s?.id));r.openings=r.openings.filter(s=>!i.has(s.id))}),this.sel.opening=null)}snapToWall(e){return this.floor?_r(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let n=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===n),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((n,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let n=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===n),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:n,gaps:r}=yu(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=wu(r);this.change((i,s)=>{s.rooms=n,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:U(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}updateFloor(e){this.change((n,r)=>Object.assign(r,e))}updateRoom(e){let n=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===n),e))}render(){Ef(this._doc.settings.units);let e=this.floor,n=e?me(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${np(this.host,this.lib.preview)}
      ${this._wallView?m`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${()=>this._wallView=null}></nf-wall-view>`:g}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow?m`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!e} @change=${r=>{this._tool=r.target.value,this._draft=[],this._cursor=null,this._sideOpen=this._tool!=="select"}}>
                  ${Cg.filter(r=>this.isAdmin||r==="select").map(r=>m`<option value=${r} ?selected=${this._tool===r}>${this.t(`tool_${r}`)}</option>`)}
                </select>`:g}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${Cg.map(r=>m`<button
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
            ${this.isAdmin?Eg((r,o)=>this.t(r,o),this._tour,r=>{this._tour=r,r===null&&Mg()}):g}
            ${this._keys?Rg(r=>this.t(r),()=>this._keys=!1):g}
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
    </div>`}renderSide(e){let n=this.room,r=this.isAdmin;if(this._tool==="roof")return vm(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return this._studio?dg(this.host,this._studio,{change:s=>this._studio&&(this._studio={...this._studio,recipe:s,error:null}),save:()=>{this.saveStudio()},close:()=>this._studio=null}):m`${this.furnitureItem?m`${lo(this.host,this.furnitureItem,this.furnitureActions())}${this.studioButton()}`:g} ${tp(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?lo(this.host,this.furnitureItem,this.furnitureActions()):this.opening?cl(this.host,this.opening,this.openingActions()):this.device?rl(this.host,this.device,this.deviceActions()):this.outdoorArea?Ma(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?Ra(this.host,this.freeWall,this.freeWallActions()):null,i=this._note?e?.notes?.find(s=>s.id===this._note):void 0;return i?m`<button class="nf-btn nf-back" @click=${()=>this._note=null}>‹ ${this.t("back_to_floor")}</button>
        ${Cp(this.host,i,{patch:s=>this.change((a,l)=>Object.assign(l.notes.find(c=>c.id===i.id),s)),remove:()=>{this.change((s,a)=>a.notes=(a.notes??[]).filter(l=>l.id!==i.id)),this._note=null}})}`:o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${wl(this.host,this.side,n,this.roomActions(n))} ${Ta(this.host,this.side,n,this.deviceListActions())}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${this._check?hg(this.host,kg(this._doc,this.hass),{fix:s=>this.fixFinding(s),ignore:s=>this.ignoreDevices(s),resetIgnored:()=>this.change(s=>s.settings.check_ignore=null),close:()=>this._check=!1}):r?fg(this.host,()=>this._check=!0):g}
      ${Ym(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?gf(this.host,this.measureState(),this.measureActions()):this.freeWall?Ra(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?Ma(this.host,this.outdoorArea,this.outdoorActions()):this.opening?cl(this.host,this.opening,this.openingActions()):this.furnitureItem?lo(this.host,this.furnitureItem,this.furnitureActions()):this.device?rl(this.host,this.device,this.deviceActions()):n?m`${wl(this.host,this.side,n,this.roomActions(n))} ${Ta(this.host,this.side,n,this.deviceListActions())}`:e?ng(this.host,e,{select:s=>this.selectItem("room",s)}):g}
      ${r?sd(this.host,()=>this.paneView()):g} ${r?id(this.host,()=>this.groundView()):g} ${r?od(this.host):g}
      ${mh(this.host)}
      ${r&&!0?ad(this.host):g} ${r?ld(this.host,this._doc):g} ${r?fd(this.host):g}
      ${e&&r?Oh(this.host,this.bg,e):g} ${r?Jd(this.host,this.settingsActions):g}
      ${r?Ld(this.host,this.backup):g}
    `}openingIsExterior(e){let n=this.floor,r=n?Pe(e,n.rooms,n.walls??[]):null;if(!n||!r)return!1;let o=me(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]);return zt(o.walls,e,r)?.wall.exterior??!1}groundView(){let e=this.paneView();if(!e)return alert(this.t("floor_start_view_need_pane")),null;let n=this.floor?.elevation??0;return e.target?{...e,target:{...e.target,y:Le(e.target.y+n)}}:e}paneView(){let n=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!n)return null;let r=n.target;return{theta:Le(n.theta),phi:Le(n.phi),radius:Le(n.radius),...r?{target:{x:Le(r.x),y:Le(r.y),z:Le(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let n of this._doc.floors)for(let r of n.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[je,ut,rg]};customElements.get("nf-editor")||customElements.define("nf-editor",Al);export{Al as NfEditor};
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
