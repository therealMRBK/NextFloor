/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var S={cs:"f361e202f373",da:"0fe66a82bf2a",es:"da8a49e6d567",fi:"9a17bc084f56",fr:"cdf280065c11",hu:"27ba348531dc",it:"96a441d94345",nb:"c5ea24fb9ef6",nl:"55f81783233b",pl:"9c2a8e46f838",pt:"fd8ddb068102",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"2d95bfb078fb",tr:"7c83ce1c3372",zh:"b9c59234be71"};var mo=globalThis,go=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ui=Symbol(),Fl=new WeakMap,or=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==Ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(go&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Fl.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Fl.set(n,e))}return e}toString(){return this.cssText}},Tl=t=>new or(typeof t=="string"?t:t+"",void 0,Ui),le=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new or(n,t,Ui)},zl=(t,e)=>{if(go)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=mo.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},ji=go?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return Tl(n)})(t):t;var{is:Lg,defineProperty:Hg,getOwnPropertyDescriptor:Cg,getOwnPropertyNames:Ng,getOwnPropertySymbols:Bg,getPrototypeOf:Wg}=Object,_o=globalThis,Pl=_o.trustedTypes,Vg=Pl?Pl.emptyScript:"",Kg=_o.reactiveElementPolyfillSupport,ir=(t,e)=>t,Zi={toAttribute(t,e){switch(e){case Boolean:t=t?Vg:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Dl=(t,e)=>!Lg(t,e),Il={attribute:!0,type:String,converter:Zi,reflect:!1,useDefault:!1,hasChanged:Dl};Symbol.metadata??=Symbol("metadata"),_o.litPropertyMetadata??=new WeakMap;var pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Il){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&Hg(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=Cg(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let l=o?.call(this);i?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Il}static _$Ei(){if(this.hasOwnProperty(ir("elementProperties")))return;let e=Wg(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ir("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ir("properties"))){let n=this.properties,r=[...Ng(n),...Bg(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(ji(o))}else e!==void 0&&n.push(ji(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zl(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Zi).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Zi;this._$Em=o;let l=s.fromAttribute(n,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Dl)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[ir("elementProperties")]=new Map,pt[ir("finalized")]=new Map,Kg?.({ReactiveElement:pt}),(_o.reactiveElementVersions??=[]).push("2.1.2");var Yi=globalThis,Ol=t=>t,bo=Yi.trustedTypes,Ll=bo?bo.createPolicy("lit-html",{createHTML:t=>t}):void 0,Xi="$lit$",ft=`lit$${Math.random().toFixed(9).slice(2)}$`,Qi="?"+ft,Gg=`<${Qi}>`,Kt=document,ar=()=>Kt.createComment(""),lr=t=>t===null||typeof t!="object"&&typeof t!="function",Ji=Array.isArray,Vl=t=>Ji(t)||typeof t?.[Symbol.iterator]=="function",qi=`[ 	
\f\r]`,sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hl=/-->/g,Cl=/>/g,Wt=RegExp(`>|${qi}(?:([^\\s"'>=/]+)(${qi}*=${qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nl=/'/g,Bl=/"/g,Kl=/^(?:script|style|textarea|title)$/i,es=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),m=es(1),R=es(2),uk=es(3),mt=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Wl=new WeakMap,Vt=Kt.createTreeWalker(Kt,129);function Gl(t,e){if(!Ji(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ll!==void 0?Ll.createHTML(e):e}var Ul=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=sr;for(let l=0;l<n;l++){let a=t[l],c,u,d=-1,p=0;for(;p<a.length&&(s.lastIndex=p,u=s.exec(a),u!==null);)p=s.lastIndex,s===sr?u[1]==="!--"?s=Hl:u[1]!==void 0?s=Cl:u[2]!==void 0?(Kl.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Wt):u[3]!==void 0&&(s=Wt):s===Wt?u[0]===">"?(s=o??sr,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Wt:u[3]==='"'?Bl:Nl):s===Bl||s===Nl?s=Wt:s===Hl||s===Cl?s=sr:(s=Wt,o=void 0);let h=s===Wt&&t[l+1].startsWith("/>")?" ":"";i+=s===sr?a+Gg:d>=0?(r.push(c),a.slice(0,d)+Xi+a.slice(d)+ft+h):a+ft+(d===-2?l:h)}return[Gl(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},cr=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,l=e.length-1,a=this.parts,[c,u]=Ul(e,n);if(this.el=t.createElement(c,r),Vt.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Vt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Xi)){let p=u[s++],h=o.getAttribute(d).split(ft),f=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?wo:f[1]==="?"?vo:f[1]==="@"?ko:Ut}),o.removeAttribute(d)}else d.startsWith(ft)&&(a.push({type:6,index:i}),o.removeAttribute(d));if(Kl.test(o.tagName)){let d=o.textContent.split(ft),p=d.length-1;if(p>0){o.textContent=bo?bo.emptyScript:"";for(let h=0;h<p;h++)o.append(d[h],ar()),Vt.nextNode(),a.push({type:2,index:++i});o.append(d[p],ar())}}}else if(o.nodeType===8)if(o.data===Qi)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(ft,d+1))!==-1;)a.push({type:7,index:i}),d+=ft.length-1}i++}}static createElement(e,n){let r=Kt.createElement("template");return r.innerHTML=e,r}};function Gt(t,e,n=t,r){if(e===mt)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=lr(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=Gt(t,o._$AS(t,e.values),o,r)),e}var yo=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??Kt).importNode(n,!0);Vt.currentNode=o;let i=Vt.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new mn(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new xo(i,this,e)),this._$AV.push(c),a=r[++l]}s!==a?.index&&(i=Vt.nextNode(),s++)}return Vt.currentNode=Kt,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},mn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Gt(this,e,n),lr(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==mt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&lr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Kt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=cr.createElement(Gl(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new yo(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=Wl.get(e.strings);return n===void 0&&Wl.set(e.strings,n=new cr(e)),n}k(e){Ji(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(ar()),this.O(ar()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Ol(e).nextSibling;Ol(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ut=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=Gt(this,e,n,0),s=!lr(e)||e!==this._$AH&&e!==mt,s&&(this._$AH=e);else{let l=e,a,c;for(e=i[0],a=0;a<i.length-1;a++)c=Gt(this,l[r+a],n,a),c===mt&&(c=this._$AH[a]),s||=!lr(c)||c!==this._$AH[a],c===_?e=_:e!==_&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}s&&!o&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},wo=class extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},vo=class extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},ko=class extends Ut{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Gt(this,e,n,0)??_)===mt)return;let r=this._$AH,o=e===_&&r!==_||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==_&&(r===_||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xo=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Gt(this,e)}},jl={M:Xi,P:ft,A:Qi,C:1,L:Ul,R:yo,D:Vl,V:Gt,I:mn,H:Ut,N:vo,U:ko,B:wo,F:xo},Ug=Yi.litHtmlPolyfillSupport;Ug?.(cr,mn),(Yi.litHtmlVersions??=[]).push("3.3.3");var Zl=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new mn(e.insertBefore(ar(),i),i,void 0,n??{})}return o._$AI(t),o};var ts=globalThis,oe=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zl(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};oe._$litElement$=!0,oe.finalized=!0,ts.litElementHydrateSupport?.({LitElement:oe});var jg=ts.litElementPolyfillSupport;jg?.({LitElement:oe});(ts.litElementVersions??=[]).push("4.2.2");var Qe=(t,e,n={})=>t.callWS({type:`nextfloor/${e}`,...n});async function $o(t,e){return(await Qe(t,"image/get",{image_id:e})).data}async function St(t,e,n){await Qe(t,"image/set",{image_id:e,data:n})}async function ql(t){return(await Qe(t,"history/list")).snapshots}async function Yl(t,e){return(await Qe(t,"history/snapshot",e?{name:e}:{})).id}async function Xl(t,e){return(await Qe(t,"history/get",{snapshot_id:e})).building}async function Ql(t,e){await Qe(t,"history/delete",{snapshot_id:e})}async function Jl(t,e){return(await Qe(t,"history/restore",{snapshot_id:e})).revision}var ur=(t,e)=>Qe(t,"packs/import",{pack:e});async function ec(t,e){await Qe(t,"packs/remove",{pack_id:e})}var tc=t=>Qe(t,"backup/export"),nc=(t,e,n)=>Qe(t,"backup/import",{building:e,packs:n});var rs=t=>t.slice(0,t.indexOf(".")),Zg={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},X=t=>Zg[rs(t)]??null,os=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];var rc=new Set(["light","switch","fan"]),Mt=t=>t!==null&&t!=="scene"&&t!=="script",Rt=t=>!t||t.state==="unavailable"||t.state==="unknown"&&!t.entity_id.startsWith("event.");function W(t,e,n){let r=String(t?.states[e]?.attributes.friendly_name??t?.entities?.[e]?.name??e);if(!n||r.length<=n.length+1||!r.toLowerCase().startsWith(`${n.toLowerCase()} `))return r;let o=r.slice(n.length+1);return o[0].toUpperCase()+o.slice(1)}var oc=t=>!!t&&t.entity_id.startsWith("sensor.")&&t.attributes.device_class==="enum";var ic=t=>Math.min(1,Math.max(0,t));function qg(t){let e=ic((t-2200)/4300),n=[1,.66,.26],r=[.78,.9,1];return[0,1,2].map(o=>n[o]+(r[o]-n[o])*e)}function ns(t,e){if(!t||t.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:t.attributes,r=typeof n.brightness=="number"?.2+.8*Math.sqrt(ic(n.brightness/255)):1,o=n.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(n.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:r}:typeof n.color_temp_kelvin=="number"?{color:qg(n.color_temp_kelvin),level:r}:{color:[1,.71,.28],level:r}}function sc(t,e,n){let r=ns(t,n);if(r)return r;for(let o of e){let i=ns(o);if(i)return{color:i.color,level:i.level*.6}}return null}function So(t,e,n=null){if(t==="light"&&n==="floor")return 1.95;if(t==="light"&&n==="table")return 1.25;if(t==="light"&&n==="wall")return 1.95;switch(t){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var uc=[],Mo=new Map,Yg=0,de=(t,e)=>`pack:${t}:${e}`,gt=t=>t.startsWith("pack:");function is(t){uc=t,Mo=new Map;for(let e of t)for(let n of e.items)Mo.set(de(e.id,n.id),n);Yg+=1}var hr=()=>uc;var Xg={};function G(t){if(!gt(t))return;let e=Mo.get(t);if(e)return e;let[,n,...r]=t.split(":"),o=Xg[n];return o?Mo.get(de(o,r.join(":"))):void 0}var Qg=.22;function ac(t,e,n,r){let o=Math.min(Qg,n/3);if(r<=o*2.4||Math.abs(r-n)<1e-6)return e*(r/n)+(t-e)*(r/n);let i=e*(r/n),s=t-e;return s<=o?i+s:s>=n-o?i+r-(n-s):i+o+(s-o)*(r-2*o)/(n-2*o)}function dr(t,e,n,r,o){return[ac(t*r,n*r,r,o)/o,ac(e*r,n*r,r,o)/o]}var lc=new WeakMap;function dc(t,e,n,r){let[o,i,s]=t.size;if(t.vehicle||t.stretch||Math.abs(e-o)<1e-4&&Math.abs(n-i)<1e-4&&Math.abs(r-s)<1e-4)return t.parts;let l=`${e.toFixed(4)}|${n.toFixed(4)}|${r.toFixed(4)}`,a=lc.get(t),c=a?.get(l);if(c)return c;let u=t.parts.map(d=>{if(d.shape==="sweep")return d;let[p,h]=dr(d.x-d.w/2,d.x+d.w/2,-.5,o,e),[f,g]=dr(d.z-d.d/2,d.z+d.d/2,-.5,i,n),[y,b]=dr(d.y,d.y+d.h,0,s,r);if(d.rot)return{...d,x:(p+h)/2,z:(f+g)/2,w:d.w*o/e,d:d.d*i/n,y,h:b-y};let v={...d,x:(p+h)/2,z:(f+g)/2,w:h-p,d:g-f,y,h:b-y};if(d.shape==="loft"){let[w,x,k,$]=[d.tx??d.x,d.tz??d.z,d.tw??d.w,d.td??d.d],[A,F]=dr(w-k/2,w+k/2,-.5,o,e),[T,I]=dr(x-$/2,x+$/2,-.5,i,n);Object.assign(v,{tx:(A+F)/2,tz:(T+I)/2,tw:F-A,td:I-T})}return v});return a||lc.set(t,a=new Map),a.size>32&&a.clear(),a.set(l,u),u}var ss=t=>!!t?.parts.some(e=>e.move);var hc=t=>G(t)?.parts.find(e=>e.screen),cc=.06;function pc(t){let e=G(t);if(!e)return!1;let[n,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,l]=[i.w*n,i.d*r,i.h*o].sort((a,c)=>c-a);return l>=cc&&s>=cc})}function st(t){return Je[t]??G(t)?.size??[.6,.6,.8]}function Et(t){let e=G(t);return vc.has(t)||!!e?.electric||!!e?.light||!!e?.climate}var fc=t=>!!G(t)?.parts.some(e=>e.picture),gn=t=>!!G(t)?.climate;function mc(t,e){return t.name[e.split("-")[0]]??t.name.en??Object.values(t.name)[0]??t.id}var Jg={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace (older)",fitness:"Fitness (older)",fahrzeuge:"Vehicles",ikea:"IKEA sizes",treppen:"Stairs & railings",ausbau:"Architecture & fit-out",werkstatt:"Garage & workshop",a_wohnzimmer:"Living room",a_schlafzimmer:"Bedroom",a_kueche:"Kitchen",a_bad:"Bathroom",a_kinderzimmer:"Kids' room",a_buero:"Office & gaming",a_fitness:"Fitness",a_haustiere:"Pets",a_garten:"Garden & patio",a_kino:"Home cinema & hi-fi",a_smart:"Smart home & tech",a_haustechnik:"Utility & building services",a_saison:"Season & decoration",a_smart2:"Smart home 2",a_haustechnik2:"Building services 2",a_wellness:"Wellness",a_garten2:"Garden 2",a_kueche2:"Kitchen 2",a_fahrzeuge2:"Vehicles 2",a_aussenkueche:"Outdoor kitchen & terrace",a_werkstatt2:"Workshop 2",a_japandi:"Japandi & Scandi",a_loft:"Loft & industrial",a_gruen:"Indoor greenery",a_musik:"Music & studio",a_bilder:"Pictures & frames"};function gc(t,e){if(e.split("-")[0]==="de")return t.name;let n=/^nextfloor\.(.+)$/.exec(t.id)?.[1];return n&&Jg[n]||t.name}function At(t,e){return e.mount_y!=null?e.mount_y:t_(t,e)+(e_(e)?0:yc(t,e.x,e.z))}var e_=t=>t.type==="led_strip"||G(t.type)?.mount==="ceiling";function t_(t,e){if(e.type==="lamp_wall")return _c;if(e.type==="led_strip")return Math.max(0,at(t,e.x,e.z)-.04-Math.max(.02,e.h));let n=G(e.type);if(!n)return bc(e);switch(n.mount){case"surface":return wc(t,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,Ro(t,e)-e.h);default:return 0}}function as(t){if(t==="plant")return"plant";let e=G(t);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var kc=["turn","slide","top"],xc=["always","active","no_power","never"],$c=1.3,Eo=(t,e=new Date().toISOString().slice(0,10))=>!!t.due&&t.due<=e,Sc=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Mc=["brick","round","wide","steel"],Ao=["navigate","more_info","service","fire_dom_event"];function Fo(t,e,n){return t?e?!!n.lock_plan:!!t.locked:!1}var Rc=["rain","snow","fog","clouds","lightning","sky"],Ec=["rain","snow","clouds","lightning","sky"],Ac=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],ls={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function cs(t){return t==="hedge"||t==="fence"||t==="pergola"}var Fc=["x","-x","z","-z"];function n_(t,e,n){let r=t.slope??0;if(!r||t.type==="pool")return 0;let o=t.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,l=-1/0;for(let[c,u]of t.points){let d=i(c,u);s=Math.min(s,d),l=Math.max(l,d)}if(l-s<1e-6)return 0;let a=Math.min(1,Math.max(0,(i(e,n)-s)/(l-s)));return r*a}function r_(t,e,n,r){return Tc(t)+(e.offset??0)+ls[e.type]-n_(e,n,r)}function Tc(t){return t.elevation>.3?0:-.2}function zc(t,e,n){let r=(t.outdoor??[]).filter(i=>!cs(i.type)&&i.type!=="pool"&&N([e,n],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?r_(t,o,e,n):Tc(t)}var Pc=t=>t.cut??t.type==="pool",Ic=30,Dc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Oc=["wood","oak","tiles","carpet","stone","concrete"],Lc={type:"none",pitch:35,overhang:.4},To="#d6cfc2",zo="#e8e3da",Hc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Lc}};function Ft(){return{version:1,floors:[],settings:{...Hc},energy:{...Dc},presence:[]}}function He(t,e,n){return{id:t,name:e,elevation:n,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var o_=2.75;function Cc(t,e){if(e!=null&&Number.isFinite(e))return Math.round(e*o_*100)/100;let n=t.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return n?Math.round((n.elevation+n.height+.25)*100)/100:0}function Nc(t,e,n){let r=t.rooms.flatMap(l=>l.points.map(a=>a[0])),o=t.rooms.flatMap(l=>l.points.map(a=>a[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((l,a)=>{let c=i+a%3*4.5,u=s+Math.floor(a/3)*3.5;return{id:n(),name:l.name,area_id:l.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function Bc(t,e,n,r){let o=t.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[l,a]=e,c=t.x-l*(t.w/2)*i+a*(t.d/2)*s,u=t.z-l*(t.w/2)*s-a*(t.d/2)*i,d=n[0]-c,p=n[1]-u,h=b=>Math.max(.1,Math.round(b/r)*r),f=h((d*i+p*s)*l),g=h((-d*s+p*i)*a),y=b=>Math.round(b*1e3)/1e3;return{x:y(c+l*(f/2)*i-a*(g/2)*s),z:y(u+l*(f/2)*s+a*(g/2)*i),w:y(f),d:y(g)}}var Po=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],Wc={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Ce=["meter","inverter","home_battery","wallbox","grid_point"],Vc=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),_c=1.75;function Io(t){return us.has(t.type)||["stairwell","parking"].includes(t.type)?!1:G(t.type)?.mount!=="ceiling"}function ce(t){return Vc.has(t)||!!G(t)?.light}var i_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Kc(t,e,n,r=0){let o=ue(t.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,l=[];for(let a=0;a<e;a++)for(let c=0;c<n;c++){let u=[Math.round((o.x0+r+i/n*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(a+.5))*1e3)/1e3];N(u,t.points)&&l.push(u)}return l}function _n(t,e,n){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[n];return[r(t[0]+o*e),r(t[1]+i*e)]}function bc(t){switch(t.type){case"home_battery":return t.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-t.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var us=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function Gc(t,e){return t.filter(n=>n.elevation<e.elevation).flatMap(n=>n.rooms.filter(r=>r.points.length>=3&&r.ceiling!=null&&r.ceiling>n.height+.005&&n.elevation+r.ceiling>e.elevation+.05)).map(n=>n.points)}var ds=t=>t?.floor_offset&&Number.isFinite(t.floor_offset)?t.floor_offset:0;function yc(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&o.floor_offset&&N([e,n],o.points));return ds(r)}function at(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&N([e,n],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:t.height}var Ro=(t,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:at(t,e.x,e.z);function wc(t,e,n){let r=0;for(let o of t.furniture)!(i_.has(o.type)||G(o.type)?.surface)||!N([e,n],ms(o))||(r=Math.max(r,o.h));return r}var vc=new Set([...Vc,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Je={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var hs=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],ps=["standard","bars","glass_wall"],Do=new Set(["interior","front"]);function jt(t,e){return t.type==="door"?t.style&&hs.includes(t.style)?t.style:e?"front":"interior":t.style&&ps.includes(t.style)?t.style:"standard"}function Uc(t,e,n,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=t-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),l=(i-s)/(o?2:1),a=r.sidelight_width??l,c=o?r.sidelight_width2??r.sidelight_width??l:0;a=Math.max(.1,a),c=o?Math.max(.1,c):0;let u=i-.5;if(a+c>u){let p=Math.max(0,u)/(a+c);a*=p,c*=p}return o?{panels:[[.02,.02+a],[t-.02-c,t-.02]],x0:.02+a,x1:t-.02-c}:(n?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+a]],x0:.02+a,x1:t-.02}:{panels:[[t-.02-a,t-.02]],x0:.02,x1:t-.02-a}}function fs(t){return t==="front"||t==="front_glass"||t==="sidelight"||t==="sidelights"}var bn={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},lift_slide:{type:"window",leaves:1,width:2.4,sill:0,height:2.15,opens:"slide"},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function yn(t){if(t.type==="garage")return"garage";if(t.type==="window"&&t.style==="glass_wall")return"glass_wall";if(t.type==="window"&&t.opens==="slide"&&t.sill<.1)return"lift_slide";let e=t.leaves===2;return t.type==="door"?!e&&t.style&&fs(t.style)?"front":e?"door_double":"door":t.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Te(t){t.energy={...Dc,...t.energy??{}},t.presence=t.presence??[],t.version=1,t.settings={...Hc,...t.settings,roof:{...Lc,...t.settings?.roof??{}}},t.floors.forEach((e,n)=>{let r=He(e.id,e.name??`Floor ${n+1}`,e.elevation??n*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of t.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=e.placements.filter(r=>r.entity_id.startsWith("light."));if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=r[o.mount??"ceiling"],[s,l,a]=Je[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,d=1;for(;e.furniture.some(p=>p.id===u);)u=`${c}_${d++}`;e.furniture.push({id:u,type:i,x:o.x,z:o.z,rotation:0,w:s,d:l,h:a,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return s_(t),t}function s_(t){let e=(n,r)=>{let o=new Set;for(let i of n)(typeof i.id!="string"||!i.id||o.has(i.id))&&(i.id=D(r)),o.add(i.id)};e(t.floors,"floor");for(let n of t.floors){for(let r of n.rooms)(typeof r.id!="string"||!r.id)&&(r.id=D("room"));e(n.openings,"op"),e(n.furniture,"furn"),e(n.outdoor,"out")}}function D(t){return`${t}_${Math.random().toString(36).slice(2,10)}`}function ge(t){let e=0;for(let n=0;n<t.length;n++){let[r,o]=t[n],[i,s]=t[(n+1)%t.length];e+=r*s-i*o}return e/2}function we(t){return Math.abs(ge(t))}function _e(t){let e=ge(t);if(Math.abs(e)<1e-9){let o=t.length||1;return[t.reduce((i,s)=>i+s[0],0)/o,t.reduce((i,s)=>i+s[1],0)/o]}let n=0,r=0;for(let o=0;o<t.length;o++){let[i,s]=t[o],[l,a]=t[(o+1)%t.length],c=i*a-l*s;n+=(i+l)*c,r+=(s+a)*c}return[n/(6*e),r/(6*e)]}function wn(t){if(t.length!==4)return!1;for(let e=0;e<4;e++){let[n,r]=t[e],[o,i]=t[(e+1)%4];if(Math.abs(n-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function ue(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;for(let[i,s]of t)e=Math.min(e,i),n=Math.min(n,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:n,x1:r,z1:o}}function ms(t){let e=t.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=t.w/2,i=t.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,l])=>[t.x+s*n-l*r,t.z+s*r+l*n])}function N(t,e){let n=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[l,a]=e[o];s>t[1]!=a>t[1]&&t[0]<(l-i)*(t[1]-s)/(a-s)+i&&(n=!n)}return n}var Oo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var gs=t=>t.trim().replace(/^\/local\/www\//i,"/local/"),_s=t=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(t.trim());var l_=globalThis,Zc=l_.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},bs=Zc.plugins,jc=Zc.listeners;var c_=5;function qc(t,e){t.errors.length<c_&&t.errors.push(e instanceof Error?e.message:String(e))}function Lo(t){return jc.add(t),()=>jc.delete(t)}var ys=()=>[...bs.values()].map(t=>t.status),Yc=()=>[...bs.values()].flatMap(t=>Object.keys(t.plugin.lightAnimations??{}));function*Ho(t,e){for(let{plugin:n,status:r}of bs.values())for(let o of n.devices??[]){let i=!1;try{i=o.match(t,e)}catch(s){qc(r,s)}i&&(yield{device:o,status:r})}}function Co(t,e){for(let{device:n}of Ho(t,e))return n.kind??"sensor";return null}function Xc(t,e){let n=t.states[e];if(!n)return null;let r=u_({hass:t,entityId:e,state:n})?.icon?.trim();return r&&/^mdi:[a-z0-9-]+$/i.test(r)?r:null}function u_(t){let e=null;for(let{device:n,status:r}of Ho(t.entityId,t.state))if(n.marker)try{let o=n.marker(t);if(!o)continue;e={...e??{}},typeof o.icon=="string"&&o.icon&&(e.icon=o.icon),typeof o.text=="string"&&(e.text=o.text.slice(0,60)),typeof o.active=="boolean"&&(e.active=o.active)}catch(o){qc(r,o)}return e}function No(t,e){return t?typeof t=="string"?t:t[e]??t[e.split("-")[0]]??t.en??Object.values(t)[0]??"":""}function Qc(t,e){let n=[];for(let{device:r,status:o}of Ho(t,e))r.settings?.length&&n.push({pluginId:o.id,name:o.name,settings:r.settings});return n}function Jc(t,e){let n={};for(let r of t??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":typeof o=="string"&&(r.options??[]).some(([s])=>s===o);n[r.key]=i?o:r.default}return n}function eu(t,e){for(let{device:n}of Ho(t,e))if(n.floorWedge)return!0;return!1}var d_=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),h_=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),p_=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),f_=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Tt(t,e){let n=t.entities?.[e];return n&&(n.area_id||(n.device_id?t.devices?.[n.device_id]?.area_id:null))||null}var nu=(t,e)=>{let n=t.entities?.[e];return!!(n?.hidden||n?.entity_category)},Ne=(t,e)=>X(e)??Co(e,t.states[e]);function tu(t,e){let n=t.states[e];if(!n||nu(t,e))return!1;if(Co(e,n)!==null)return!0;let r=X(e);if(!r)return!1;let o=n.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":r==="sensor"?o?d_.has(o):h_.has(String(n.attributes.unit_of_measurement??"")):r==="binary"?o?p_.has(o):!!t.entities?.[e]?.area_id:!0}function m_(t,e){let n=t.states[e];return X(e)!=="sensor"||!n?.attributes.unit_of_measurement||nu(t,e)||f_.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Rt(n)}var Wo=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power",ws=null;Lo(()=>ws=null);function vs(t,e){let n=t.get(e);return n||t.set(e,n=[]),n}function g_(t){let e=new Map,n=new Map,r=new Map,o=new Map,i=[],s=u=>{(tu(t,u)||m_(t,u))&&Mt(Ne(t,u))&&i.push(u)};for(let[u,d]of Object.entries(t.entities??{})){let p=d.device_id;p&&d.area_id&&(o.get(p)??o.set(p,new Set).get(p)).add(d.area_id),p&&Wo(t,u)&&vs(n,p).push(u),p&&!d.hidden&&!d.entity_category&&(r.get(p)??r.set(p,new Set).get(p)).add(rs(u));let h=Tt(t,u);h===null?s(u):tu(t,u)&&vs(e,h).push(u)}if(t.entities)for(let u of Object.keys(t.states))t.entities[u]||s(u);let l=os.indexOf("binary")-.5,a=u=>{let d=X(u),p=d?os.indexOf(d):l;return p>l&&Co(u,t.states[u])!==null?l:p};i.sort((u,d)=>a(u)-a(d)||W(t,u).localeCompare(W(t,d)));for(let[u,d]of e){let p=t.areas?.[u]?.name;d.sort((h,f)=>a(h)-a(f)||W(t,h,p).localeCompare(W(t,f,p)))}let c=new Set;for(let[u,d]of o)d.size>1&&c.add(u);return{entities:t.entities,devices:t.devices,states:t.states,stateCount:Object.keys(t.states).length,byArea:e,powerByDevice:n,withoutArea:i,domainsByDevice:r,hubs:c}}function vn(t){let e=ws;return e&&e.entities===t.entities&&e.devices===t.devices&&(e.states===t.states||(e.states=t.states,Object.keys(t.states).length===e.stateCount))?e:ws=g_(t)}function be(t,e){let n=Bo(t,e.area_id);return e.sub_areas?.length?[...new Set([...n,...e.sub_areas.flatMap(r=>Bo(t,r))])]:n}function Bo(t,e){return!e||!t.entities?[]:vn(t).byArea.get(e)??[]}function ru(t,e){if(!t.entities)return[];let n=[];for(let[r,o]of vn(t).byArea){let i=o.filter(s=>Mt(Ne(t,s)));r!==e&&i.length>0&&n.push({areaId:r,name:t.areas?.[r]?.name??r,ids:i})}return n.sort((r,o)=>r.name.localeCompare(o.name))}var ou=t=>t.entities?vn(t).withoutArea:[],ks=(t,e)=>!!t.entities&&vn(t).hubs.has(e),Vo=(t,e)=>t.entities?vn(t).powerByDevice.get(e)??[]:[];function kn(t,e){let n=new Map;for(let o of e)vs(n,t.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...n.values()].map(o=>{let i=o.find(s=>!t.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var Ko=(t,e)=>kn(t,e).map(n=>n.primary),xs={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},__=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),b_=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],y_=new RegExp(`(${b_.join("|")})`,"i");function $s(t,e){let n=t.entities?.[e]?.device_id,r=n&&!ks(t,n)?vn(t).domainsByDevice.get(n):void 0;return r&&[...r].some(o=>__.has(o))?!1:!y_.test(`${e} ${t.states[e]?.attributes.friendly_name??""}`)}function iu(t,e,n,r){let o=n.climate?.[r];if(o==="none")return[];if(o)return[o].flat().filter(c=>t.states[c]);let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>N([c.x,c.z],n.points)).map(c=>c.entity_id),l=new Set(i.filter(c=>!N([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([...be(t,n).filter(c=>!l.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class===xs[r]&&$s(t,c))}var w_=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),v_=new Set(["garage","gate"]),k_=new Set(["window","opening"]);function pr(t,e,n=!1){let r=new Map;return t.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var su=(t,e)=>t==="none"?null:t??e??null,xn=t=>t&&t!=="none"?t:null;function fr(t,e){let n=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(g=>g.room_id===o.id).sort((g,y)=>g.edge-y.edge||g.offset-y.offset);if(i.length===0)continue;let s=be(t,o),l=g=>t.states[g]?.attributes.device_class,a=g=>s.filter(y=>X(y)==="binary"&&g(l(y)??"")),c=g=>i.filter(y=>y.type===g),u=pr(c("window"),s.filter(g=>X(g)==="cover"&&w_.has(l(g))),!0),d=pr(c("window"),a(g=>k_.has(g))),p=pr(c("door"),a(g=>g==="door")),h=pr(c("garage"),s.filter(g=>X(g)==="cover"&&v_.has(l(g)??""))),f=pr(c("garage"),a(g=>g==="garage_door"));for(let g of i){let y=g.type==="window"?u:g.type==="garage"?h:null,b=g.type==="window"?d:g.type==="garage"?f:p,v=g.leaves===2;n.set(g.id,{cover:su(g.cover,y?.get(g.id)),contact:g.sensor==="handle"&&g.contact==null?null:su(g.contact,b.get(g.id)),tilt:g.tilt==="none"?null:g.tilt,contact2:v?xn(g.contact2):null,tilt2:v?xn(g.tilt2):null,position:xn(g.position),positionInverted:!!g.position_inverted,tiltAngle:xn(g.tilt_angle),tiltMax:g.tilt_max??null,tiltOffset:g.tilt_offset??null,tiltInvert:!!g.tilt_invert,shut:!!g.shut,angled:g.type==="door"&&!!g.open_angle,lock:g.type==="door"?xn(g.lock):null,cover2:g.type==="garage"?null:xn(g.cover2)})}}return n}var x_=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ss(t){if(!t||Rt(t))return null;let e=t.attributes.window_state;for(let n of[typeof e=="string"?e:"",t.state]){let r=n.trim(),o=r&&x_.find(([i])=>i.test(r));if(o)return o[1]}return null}var au=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,lu=/(kühl|fridge|gefrier|freezer)/i,cu=/(spülmaschine|geschirrspül|dishwasher)/i,$_=/(kochfeld|herd|induktion|cooktop)/i,S_={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:au,tv_wall:au,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:lu,fridge_smart:lu,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:cu,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:$_,sink:cu,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},uu={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},du=new Set(["tv_board","tv_wall"]);var $n=t=>du.has(t)||!!hc(t),Go=t=>!!G(t)?.electric&&/speaker|multiroom|soundbar/.test(t.split(":").pop()??t),gr=t=>$n(t)||t==="desk"||t==="fridge_smart",M_=t=>!!t&&t!=="none";function R_(t,e){if(Wo(t,e))return e;let n=t.entities?.[e]?.device_id;return n?Vo(t,n).find(r=>r!==e)??null:null}var E_=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function mr(t,e,n,r){return t.find(o=>e?.test(n(o)))??(r?t[0]??null:null)}function Be(t,e){let n=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...r.placements.map(i=>i.entity_id)].filter(M_));for(let i of r.furniture){let s=i.type in uu,l=gn(i.type),a=s?uu[i.type]:S_[i.type];if(!a&&!l&&!Go(i.type)&&i.entity==null&&i.power==null)continue;let c=E_(r,i.x,i.z),u=(c?Ko(t,be(t,c)):[]).filter(y=>!o.has(y)),d=y=>`${y} ${W(t,y)}`,p=y=>u.filter(b=>X(b)===y),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let y=(c?be(t,c):[]).filter(v=>!o.has(v)),b=new Set(y.filter(v=>X(v)==="fan").map(v=>t.entities?.[v]?.device_id).filter(Boolean));h=y.find(v=>X(v)==="light"&&b.has(t.entities?.[v]?.device_id))??mr(p("light"),a,d,!1)}else if(s)h=mr(p("light"),a,d,!0);else if(i.type==="robot_vacuum"){let y=c?.area_id??null;h=Object.keys(t.entities??{}).find(b=>b.startsWith("vacuum.")&&!o.has(b)&&Tt(t,b)===y)??null}else if(i.type==="radiator"||l)h=mr(p("climate"),a,d,!0);else if($n(i.type)){let y=p("media");h=y.find(b=>t.states[b]?.attributes.device_class==="tv")??mr(y,a,d,du.has(i.type))}else if(Go(i.type)){let y=p("media").filter(b=>t.states[b]?.attributes.device_class!=="tv");h=mr(y,a,d,!1)??(y.length===1?y[0]:null)}else a&&(h=u.find(y=>["switch","media","fan"].includes(X(y)??"")&&a.test(d(y)))??null);h&&o.add(h)}let f=i.power==="none"?null:i.power??null;i.power==null&&(f=h?R_(t,h):null,!f&&a&&c&&!s&&(f=be(t,c).find(y=>Wo(t,y)&&!o.has(y)&&a.test(d(y)))??null),f&&o.add(f));let g=null;if(i.type==="ceiling_fan"&&(g=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let y=(c?be(t,c):[]).filter(v=>X(v)==="fan"&&!o.has(v)),b=h?t.entities?.[h]?.device_id:void 0;g=(b?y.find(v=>t.entities?.[v]?.device_id===b):void 0)??y[0]??null,g&&o.add(g)}(h||f||g)&&n.set(i.id,{entity:h,power:f,...i.type==="ceiling_fan"?{fan:g}:{}})}}return n}var hu=t=>t==="fridge"||t==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(t.slice(t.lastIndexOf(":")+1));function pu(t,e,n=[]){let r=[];for(let o of e){let i=(l,a)=>o.rooms.some(c=>c.points.length>=3&&N([l,a],c.points)),s=Be(t,[o]);r.push(...o.placements.filter(l=>l.outside||!i(l.x,l.z)).map(l=>l.entity_id)),r.push(...o.furniture.filter(l=>!i(l.x,l.z)).flatMap(l=>[s.get(l.id)?.entity,s.get(l.id)?.power]));for(let l of o.outdoor??[])l.area_id&&r.push(...Ko(t,Bo(t,l.area_id))),r.push(l.pump_entity,l.temp_entity)}return[...new Set(r.filter(o=>!!o&&!!t.states[o]&&!n.includes(o)))]}function A_(t,e){return Math.min(...e.map((n,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-n[0],o[1]-n[1]],l=Math.min(1,Math.max(0,((t[0]-n[0])*i+(t[1]-n[1])*s)/(i*i+s*s||1)));return Math.hypot(t[0]-n[0]-i*l,t[1]-n[1]-s*l)}))}function mu(t,e,n=[]){let r=t.points;if(r.length<3||e.length===0)return[];let o=r.map(b=>b[0]),i=r.map(b=>b[1]),[s,l,a,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(l-s,c-a),d=Math.max(.1,Math.min(.25,u/8)),p=Math.min(.35,u/5),h=Math.min(.7,u/4),f=_e(r),g=[];for(let b=s+d/2;b<l;b+=d)for(let v=a+d/2;v<c;v+=d){let w=[b,v];if(!N(w,r))continue;let x=A_(w,r);x>=p&&g.push({at:w,wallDistance:x})}g.length===0&&g.push({at:f,wallDistance:0});let y=[...n];return e.map(b=>{let v=X(b)==="light",w=g[0].at,x=-1/0;for(let{at:$,wallDistance:A}of g){let F=y.length?Math.min(...y.map(z=>Math.hypot($[0]-z[0],$[1]-z[1]))):3,T=Math.hypot($[0]-f[0],$[1]-f[1]),I=Math.min(F,3)*2;T<h&&!v&&(I-=10),I-=v?T*.35:A*1.2,I>x+1e-9&&(x=I,w=$)}let k=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];return y.push(k),{entity_id:b,x:k[0],z:k[1],y:null,mount:null}})}var fu=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function gu(t,e,n){if(n==="none")return null;if(n)return n;let r=e?t.entities?.[e]?.device_id:null;return!r||!t.entities?null:Object.values(t.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(fu.test(i.translation_key??"")||fu.test(i.entity_id.split(".")[1])))?.entity_id??null}var K=(t,e)=>[t[0]-e[0],t[1]-e[1]],lt=(t,e)=>[t[0]+e[0],t[1]+e[1]],et=(t,e)=>[t[0]*e,t[1]*e],Q=(t,e)=>t[0]*e[0]+t[1]*e[1],$e=(t,e)=>t[0]*e[1]-t[1]*e[0],me=t=>Math.hypot(t[0],t[1]),tt=t=>{let e=me(t)||1;return[t[0]/e,t[1]/e]},Ms=t=>[-t[1],t[0]],Rs=t=>[t[1],-t[0]];var F_=.05,T_=.2,z_=.12;function P_(t){let e=[];return t.forEach((n,r)=>{let o=n.points;if(o.length<3)return;let i=ge(o)>=0;o.forEach((s,l)=>{let a=o[(l+1)%o.length],c=me(K(a,s));if(c<.05)return;let u=[(a[0]-s[0])/c,(a[1]-s[1])/c],d=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let p=[-u[1],u[0]],[h,f]=[Q(s,u),Q(a,u)];e.push({room:r,index:l,dir:u,normal:p,offset:Q(s,p),outside:Q(d,p)>0?1:-1,from:Math.min(h,f),to:Math.max(h,f)})})}),e}function I_(t,e,n){if(t.room===e.room||Math.abs($e(t.dir,e.dir))>F_||t.outside===e.outside)return null;let r=(e.offset-t.offset)*t.outside;return r>n||r<-z_||Math.abs(r)<1e-4||Math.min(t.to,e.to)-Math.max(t.from,e.from)<T_?null:r}var Es=t=>Math.round(t*1e3)/1e3;function _u(t,e=.6){let n=P_(t),r=n.map((g,y)=>y),o=g=>r[g]===g?g:r[g]=o(r[g]),i=[],s=new Set,l=[];for(let g=0;g<n.length;g++)for(let y=g+1;y<n.length;y++){let b=I_(n[g],n[y],e);b!==null&&l.push([g,y,b])}l.sort((g,y)=>Math.abs(g[2])-Math.abs(y[2]));let a=new Map(n.map((g,y)=>[y,[y]])),c=(g,y)=>g.some(b=>y.some(v=>n[b].room===n[v].room&&Math.abs(n[b].offset-n[v].offset)>=.002));for(let[g,y,b]of l){let[v,w]=[o(g),o(y)];if(v!==w){if(c(a.get(v),a.get(w)))continue;r[v]=w,a.set(w,[...a.get(w),...a.get(v)]),a.delete(v)}i.push(Es(b)),s.add(g).add(y)}let u=new Map(n.map((g,y)=>[`${g.room}:${g.index}`,y]));for(let g=s.size>0;g;)g=!1,n.forEach((y,b)=>{let v=u.get(`${y.room}:${(y.index+1)%t[y.room].points.length}`);if(v===void 0||v===b)return;let w=n[v];!(Math.abs($e(y.dir,w.dir))<1e-6&&Math.abs(y.offset-w.offset)<.002&&y.outside===w.outside)||s.has(b)===s.has(v)||(s.add(b).add(v),g=!0)});n.forEach((g,y)=>{let b=u.get(`${g.room}:${(g.index+1)%t[g.room].points.length}`);if(b===void 0||b===y||!s.has(y)||!s.has(b))return;let v=n[b];Math.abs($e(g.dir,v.dir))<1e-6&&Math.abs(g.offset-v.offset)<.002&&g.outside===v.outside&&(r[o(y)]=o(b))});let d=()=>t.map(g=>({...g,points:g.points.map(y=>[y[0],y[1]])}));if(i.length===0)return{rooms:d(),gaps:i};let p=new Map;for(let g of s)p.set(o(g),[...p.get(o(g))??[],g]);let h=t.map(g=>g.points.map(()=>new Map));for(let[g,y]of p){let b=new Map(y.map(w=>[`${n[w].room}:${Math.round(n[w].offset*500)}`,n[w].offset])),v=[...b.values()].reduce((w,x)=>w+x,0)/b.size;for(let w of y){let x=n[w],k=[x.normal[0]*(v-x.offset),x.normal[1]*(v-x.offset)];h[x.room][x.index].set(g,k),h[x.room][(x.index+1)%t[x.room].points.length].set(g,k)}}return{rooms:t.map((g,y)=>({...g,points:g.points.map((b,v)=>{let w=[...h[y][v].values()].reduce((x,k)=>[x[0]+k[0],x[1]+k[1]],[b[0],b[1]]);return[Es(w[0]),Es(w[1])]})})),gaps:i}}function bu(t){let e=t.filter(n=>n>.04).sort((n,r)=>n-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var D_=.25,yu=t=>Math.round(t*1e3)/1e3,wu=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function Fs(t,e,n,r,o){let i=wu(t,e,n);if(!i)return[r,o];let s=(l,a)=>N([l,a],i.points);return s(r,o)?[r,o]:s(r,n)?[r,n]:s(e,o)?[e,o]:[e,n]}function O_(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let l=o.points[(s+1)%o.points.length];return Math.abs(Q(K(i,n),r))<.02&&Math.abs(Q(K(l,n),r))<.02}))}var As=(t,e)=>Math.abs((t-e+540)%360-180);function _r(t,e,n,r=D_){let o=wu(t,e.x,e.z);if(!o)return null;let i=o.points,s=ge(i)>=0?1:-1,l=null;return i.forEach((a,c)=>{let u=i[(c+1)%i.length],d=me(K(u,a));if(d<.3)return;let p=[(u[0]-a[0])/d,(u[1]-a[1])/d],h=[-p[1]*s,p[0]*s],f=Q(K([e.x,e.z],a),p);if(f<0||f>d)return;let g=O_(t,o,a,h)?n/2:0,y=Q(K([e.x,e.z],a),h)-g,b=Math.atan2(-h[0],h[1])*180/Math.PI,w=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((k,$)=>As(e.rotation,$.rotation)<As(e.rotation,k.rotation)?$:k);if(As(e.rotation,w.rotation)>50)return;let x=y-w.extent;Math.abs(x)>r||l&&Math.abs(x)>=Math.abs(l.gap)||(l={x:yu(e.x-h[0]*x),z:yu(e.z-h[1]*x),rotation:(Math.round(w.rotation)%360+360)%360,gap:x})}),l&&{x:l.x,z:l.z,rotation:l.rotation}}var Sn=Math.PI/180,nt=t=>Math.tan(Math.min(80,Math.max(0,t))*Sn);function yr(t){return{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),z0:Math.min(t.z0,t.z1),z1:Math.max(t.z0,t.z1)}}function vu(t){if(!t.rotation)return null;let e=t.rotation*Sn;return{cx:(t.x0+t.x1)/2,cz:(t.z0+t.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function ku(t,e){let n=vu(t);if(!n)return e;let[r,o]=[e[0]-n.cx,e[1]-n.cz];return[n.cx+r*n.c-o*n.sn,n.cz+r*n.sn+o*n.c]}function Ts(t,e,n){let r=vu(t);if(!r)return[e,n];let[o,i]=[e-r.cx,n-r.cz];return[r.cx+o*r.c+i*r.sn,r.cz-o*r.sn+i*r.c]}function wr(t,e=0){let{x0:n,x1:r,z0:o,z1:i}=yr(t);return[[n-e,o-e],[r+e,o-e],[r+e,i+e],[n-e,i+e]].map(s=>ku(t,s))}function ve(t){let{x0:e,x1:n,z0:r,z1:o}=yr(t),i=s=>ku(t,s);return t.axis==="x"?{u0:e,u1:n,w:o-r,at:(s,l)=>i([s,t.flip?o-l:r+l])}:{u0:r,u1:o,w:n-e,at:(s,l)=>i([t.flip?n-l:e+l,s])}}function vr(t,e,n){let{x0:r,x1:o,z0:i,z1:s}=yr(t),[l,a]=Ts(t,e,n);return t.axis==="x"?[l,t.flip?s-a:a-i]:[a,t.flip?o-l:l-r]}var br=Math.tan(30*Sn);function kr(t,e,n,r,o){let i=Math.min(t*.3,r>1e-6?2.4/r:t*.3),s=Math.min(t*.3,o>1e-6?2.4/o:t*.3),l=e+i*r,a=n+s*o,c=Math.min(t-s,Math.max(i,(a-l+br*(t-s+i))/(2*br))),u=l+(c-i)*br;return{vla:i,vlb:s,yla:l,ylb:a,vr:c,rh:u,y:p=>p<=i?e+p*r:p<=c?l+(p-i)*br:p<=t-s?a+(t-s-p)*br:n+(t-p)*o}}function ze(t){let e=ve(t).w,[n,r]=[t.eave_a,t.eave_b],[o,i]=[nt(t.pitch_a),nt(t.pitch_b)];switch(t.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*o,y:s=>n+s*o};case"mansard":{let s=kr(e,n,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-n+e*i)/(o+i))):e/2;return{vr:s,rh:n+s*o,y:l=>l<=s?n+l*o:r+(e-l)*i}}}}var Zt=t=>ze(t).rh;function xu(t){let e=t.heightEnd!==void 0;return{...t,a:t.b,b:t.a,left:t.right,right:t.left,roomLeft:t.roomRight,roomRight:t.roomLeft,height:e?t.heightEnd:t.height,heightEnd:e?t.height:void 0}}function L_(t,e){let n=t.map(r=>({...r}));for(let r of e){let o=n.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):n.push({...r})}return n}function H_(t,e,n){if(t.a===e.b)return!1;let r=tt(K(n[t.b],n[t.a])),o=tt(K(n[e.b],n[e.a]));return Math.abs($e(r,o))>1e-6||Q(r,o)<=0||t.free||e.free||t.heightEnd!==void 0||e.heightEnd!==void 0?!1:t.height===e.height&&t.exterior===e.exterior&&t.roomLeft===e.roomLeft&&t.roomRight===e.roomRight&&Math.abs(t.left-e.left)<=1e-9&&Math.abs(t.right-e.right)<=1e-9}function $u(t,e,n=new Set){let r=t.slice();for(;;){let o=new Map;r.forEach((s,l)=>{for(let a of[s.a,s.b])o.set(a,[...o.get(a)??[],l])});let i=null;for(let[s,l]of o){if(l.length!==2||n.has(s))continue;let a=r[l[0]].b===s?r[l[0]]:xu(r[l[0]]),c=r[l[1]].a===s?r[l[1]]:xu(r[l[1]]);if(!H_(a,c,e))continue;let u={...a,b:c.b,sources:L_(a.sources,c.sources)};i=[...r.filter((d,p)=>p!==l[0]&&p!==l[1]),u];break}if(!i)return r;r=i}}function Su(t,e){let n=new Map;t.forEach((o,i)=>{let s=tt(K(e[o.b],e[o.a])),l=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:et(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[a,c]of l)n.set(a,[...n.get(a)??[],c])});let r=new Map;for(let[o,i]of n){let s=e[o];i.sort((a,c)=>a.angle-c.angle);for(let a of i)r.set(a.key,{left:lt(s,et(Ms(a.d),a.left)),right:lt(s,et(Rs(a.d),a.right))});if(i.length<2)continue;let l=4*Math.max(...i.map(a=>Math.max(a.left,a.right)))+1e-9;i.forEach((a,c)=>{let u=i[(c+1)%i.length],d=lt(s,et(Ms(a.d),a.left)),p=lt(s,et(Rs(u.d),u.right)),h=$e(a.d,u.d);if(Math.abs(h)<1e-4)return;let f=lt(d,et(a.d,$e(K(p,d),u.d)/h));me(K(f,s))>l||(r.get(a.key).left=f,r.get(u.key).right=f)})}return r}function Mu(t,e){let n=t.filter((r,o)=>me(K(r,t[(o+1)%t.length]))>e);for(;;){if(n.length<=3)return n;let r=n.findIndex((o,i)=>{let s=n[(i+n.length-1)%n.length],l=n[(i+1)%n.length],[a,c]=[K(o,s),K(l,o)];return Math.abs($e(tt(a),tt(c)))<1e-7&&Q(a,c)>0});if(r===-1)return n;n=n.filter((o,i)=>i!==r)}}function C_(t){let e=[];return{points:e,idOf(n){let r=e.findIndex(o=>Math.abs(o[0]-n[0])<=t&&Math.abs(o[1]-n[1])<=t);return r>=0?r:(e.push([n[0],n[1]]),e.length-1)}}}function N_(t,e){let n=[];for(let r of t){let o=r.points;if(o.length<3||Math.abs(ge(o))<1e-6)continue;let i=ge(o)>0,s=o.map(l=>e.idOf(l));s.forEach((l,a)=>{let c=s[(a+1)%s.length];l!==c&&n.push(i?{u:l,v:c,room:r.id,edge:a,forward:!0}:{u:c,v:l,room:r.id,edge:a,forward:!1})})}return n}function B_(t,e,n){let r=[];for(let o of t){let[i,s]=[e[o.u],e[o.v]],l=K(s,i),a=me(l),c=et(l,1/a),u=e.map((p,h)=>({id:h,rel:K(p,i)})).filter(({id:p,rel:h})=>p!==o.u&&p!==o.v&&Q(h,c)>n&&Q(h,c)<a-n&&Math.abs($e(c,h))<=n).map(({id:p,rel:h})=>({t:Q(h,c),id:p})).sort((p,h)=>p.t-h.t),d=[{t:0,id:o.u},...u,{t:a,id:o.v}];for(let p=0;p+1<d.length;p++){let[h,f]=[d[p],d[p+1]];r.push({u:h.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?h.t:a-f.t,t1:o.forward?f.t:a-h.t,forward:o.forward})}}return r}var Ru=t=>({room_id:t.room,edge:t.edge,t0:t.t0,t1:t.t1});function W_(t,e){let n=new Map(t.map(l=>[l.id,l])),r=new Map;for(let l of e){let a=`${l.room}:${l.edge}`;r.set(a,[...r.get(a)??[],l.t0].sort((c,u)=>c-u))}let o=l=>{let a=n.get(l.room)?.wall_heights?.[l.edge];return Array.isArray(a)?a[(r.get(`${l.room}:${l.edge}`)??[]).indexOf(l.t0)]??null:a},i=l=>{let a=n.get(l.room),[c,u]=[a?.wall_heights?.[l.edge],a?.wall_slopes?.[l.edge]];if(!a||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[d,p]=[a.points[l.edge],a.points[(l.edge+1)%a.points.length]];return{from:c,to:u,length:Math.hypot(p[0]-d[0],p[1]-d[1])}},s=l=>{let a=i(l);if(!a||a.length<1e-9){let u=o(l);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>a.from+(a.to-a.from)*u/a.length;return l.forward?[c(l.t0),c(l.t1)]:[c(l.t1),c(l.t0)]};return{heightsOf(l){let[a,c]=[1/0,1/0];for(let d of l){let[p,h]=s(d),[f,g]=d===l[0]?[p,h]:[h,p];f!==null&&(a=Math.min(a,f)),g!==null&&(c=Math.min(c,g))}let u=l.map(d=>n.get(d.room)?.ceiling);if(u.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...u);a===1/0&&(a=d),c===1/0&&(c=d)}return{...a<1/0?{a}:{},...c<1/0?{b:c}:{}}},thicknessOf(l){let a=l.map(c=>{let u=n.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return a.length?Math.max(...a):void 0},hasNoWall:l=>l.some(a=>o(a)===0)}}function Eu(t){let e=n=>Math.round(n*1e6)/1e6;return t.a===void 0||t.b===void 0?t.a!==void 0?{height:e(t.a)}:t.b!==void 0?{height:e(t.b)}:{}:Math.abs(t.a-t.b)<1e-6?{height:e(t.a)}:{height:e(t.a),heightEnd:e(t.b)}}function V_(t,e,n,r){let o=W_(e,t),i=new Map;for(let a of t){let c=a.u<a.v?`${a.u}-${a.v}`:`${a.v}-${a.u}`;i.set(c,[...i.get(c)??[],a])}let s=[],l=[];for(let a of i.values()){let c=a[0],u=a.find(p=>p!==c&&p.u===c.v&&p.v===c.u&&p.room!==c.room);for(let p of a)p!==c&&p!==u&&p.room!==c.room&&r.push(`overlap:${c.room}:${p.room}`);let d=u?[c,u]:[c];if(o.hasNoWall(d)){u&&l.push([c.room,u.room]);continue}if(u){let p=o.thicknessOf(d)??n.interior;s.push({a:c.u,b:c.v,left:p/2,right:p/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(Ru),...Eu(o.heightsOf(d))})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(d)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Ru(c)],...Eu(o.heightsOf(d))})}return{drafts:s,open:l}}function K_(t,e){let n=i=>tt(K(e[i.b],e[i.a])),r=t.filter(i=>!i.exterior&&!i.free),o=new Map;for(let i of r){if(o.has(i))continue;let s=[i];o.set(i,s);for(let l=0;l<s.length;l++){let a=s[l];for(let c of r){if(o.has(c))continue;(c.a===a.a||c.a===a.b||c.b===a.a||c.b===a.b)&&Math.abs($e(n(a),n(c)))<1e-6&&(s.push(c),o.set(c,s))}}}for(let i of new Set(o.values())){let s=n(i[0]),l=new Map;for(let u of i)for(let d of[u.a,u.b])l.set(d,(l.get(d)??0)+1);let a=new Set;for(let[u,d]of l)if(d===1)for(let p of t){if(!p.exterior||p.free||p.a!==u&&p.b!==u)continue;let h=n(p);Math.abs($e(s,h))>1e-6||a.add(Q(s,h)>0?"left":"right")}if(a.size!==1)continue;let c=[...a][0];for(let u of i){let d=u.left+u.right,p=Q(n(u),s)>0,h=c==="left"===p;[u.left,u.right]=h?[0,d]:[d,0]}}}var G_=(t,e)=>{let n=i=>Math.round(i*100),[r,o]=t[0]<e[0]||t[0]===e[0]&&t[1]<=e[1]?[t,e]:[e,t];return`w_${n(r[0])}_${n(r[1])}_${n(o[0])}_${n(o[1])}`};function fe(t,e,n=[]){let r=e.eps??.005,o=[],i=C_(r),s=N_(t,i),l=n.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),a=l.map(b=>[i.idOf(b.a),i.idOf(b.b)]),c=new Set;for(let b of t){let v=b.points;v.length<3||(b.wall_splits??[]).forEach((w,x)=>{if(!w||x>=v.length)return;let k=v[x],$=K(v[(x+1)%v.length],k),A=me($);for(let F of w)F>r&&F<A-r&&c.add(i.idOf(lt(k,et($,F/A))))})}let u=B_(s,i.points,r),{drafts:d,open:p}=V_(u,t,e,o);K_(d,i.points);let h=d;l.forEach((b,v)=>{let[w,x]=a[v];if(w===x)return;let k=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],$=t.find(F=>F.points.length>=3&&N(k,F.points))?.id??null,A=(b.thickness??e.interior)/2;h.push({free:b.id,a:w,b:x,left:A,right:A,exterior:!1,roomLeft:$,roomRight:$,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0,...typeof b.height=="number"&&b.height>0&&typeof b.height_end=="number"&&b.height_end>0&&Math.abs(b.height_end-b.height)>1e-6?{heightEnd:b.height_end}:{}})});let f=$u(h,i.points,c),g=Su(f,i.points);return{walls:f.map((b,v)=>{let[w,x]=[i.points[b.a],i.points[b.b]],[k,$]=[g.get(`${v}:a`),g.get(`${v}:b`)],A=Mu([k.right,$.left,x,$.right,k.left,w],1e-6);return{id:G_(w,x),a:[w[0],w[1]],b:[x[0],x[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:A,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{},...b.heightEnd!==void 0?{heightEnd:b.heightEnd}:{}}}),warnings:[...new Set(o)],open:p}}function Mn(t,e,n){let r=t.points[e];return lt(r,et(tt(K(t.points[(e+1)%t.points.length],r)),n))}function Pe(t,e,n){if(t.wall){let o=n.find(l=>l.id===t.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=tt(K(o.b,o.a));return{room:{id:t.room_id,name:"",area_id:null,points:[o.a,o.b,lt(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===t.room_id);return r&&t.edge<r.points.length?{room:r,edge:t.edge}:null}var Au=(t,e)=>Q(K(e,t.a),tt(K(t.b,t.a)));function zt(t,e,n){if(!e.wall)return U_(t,n.room,n.edge,e.offset);let r=t.find(o=>o.free===e.wall);return r?{wall:r,s:Au(r,Mn(n.room,0,e.offset))}:null}function U_(t,e,n,r){for(let o of t)if(o.sources.some(s=>s.room_id===e.id&&s.edge===n&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:Au(o,Mn(e,n,r))};return null}function Fu(t,e){let n=t.points.map(h=>h[0]),r=t.points.map(h=>h[1]);if(t.points.length!==4||new Set(n.map(h=>h.toFixed(3))).size!==2||new Set(r.map(h=>h.toFixed(3))).size!==2)return null;let[o,i,s,l]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],a=h=>Math.max(0,...e.filter(f=>(f.roomLeft===t.id||f.roomRight===t.id)&&h(f)).map(f=>f.roomLeft===t.id?f.left:f.right)),c=(h,f)=>Math.abs(h-f)<.001,u=(h,f,g)=>c(h.a[f],g)&&c(h.b[f],g),d=i-o-a(h=>u(h,0,o))-a(h=>u(h,0,i)),p=l-s-a(h=>u(h,1,s))-a(h=>u(h,1,l));return[Math.round(d*1e3)/1e3,Math.round(p*1e3)/1e3]}var Tu=([t,e])=>{let n=Math.hypot(t,e)||1;return[t/n,e/n]};function j_(t){return t.reduce((e,n,r)=>e+(n[0]*t[(r+1)%t.length][1]-t[(r+1)%t.length][0]*n[1]),0)/2}function zu(t,e){let n=t.length;if(n<3||Math.abs(e)<1e-9)return t.map(([o,i])=>[o,i]);let r=j_(t)>=0?1:-1;return t.map((o,i)=>{let s=t[(i+n-1)%n],l=t[(i+1)%n],[a,c]=Tu([o[0]-s[0],o[1]-s[1]]),[u,d]=Tu([l[0]-o[0],l[1]-o[1]]),p=[c*r,-a*r],h=[d*r,-u*r],f=[p[0]+h[0],p[1]+h[1]],g=Math.hypot(f[0],f[1]);if(g<1e-6)return[o[0]+p[0]*e,o[1]+p[1]*e];let y=(f[0]*p[0]+f[1]*p[1])/g,b=Math.min(4,1/Math.max(.25,y));return[o[0]+f[0]/g*e*b,o[1]+f[1]/g*e*b]})}function Pt(t){let e=t.map(r=>r[0]),n=t.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}function Z_(t){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,n=new Map;for(let i of t)for(let s of[i.a,i.b])n.set(e(s),[...n.get(e(s))??[],i]);let r=new Set,o=null;for(let i of t){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],l=i.b;for(;;){let c=(n.get(e(l))??[]).find(u=>!r.has(u));if(!c||(r.add(c),l=e(c.a)===e(l)?c.b:c.a,e(l)===e(s[0])))break;s.push(l)}s.length>=3&&e(l)===e(s[0])&&(!o||Math.abs(we(s))>Math.abs(we(o)))&&(o=s)}return o}function zs(t,e,n,r){let o=fe(t,{exterior:n,interior:r},e).walls.filter(l=>l.exterior&&!l.free),i=o.length?Z_(o.map(l=>({a:l.a,b:l.b}))):null;if(!i)return null;let s=i.filter((l,a)=>{let c=i[(a+i.length-1)%i.length],u=i[(a+1)%i.length];return Math.abs((l[0]-c[0])*(u[1]-l[1])-(l[1]-c[1])*(u[0]-l[0]))>1e-6});return s.length>=3?zu(s,n):null}function qt(t,e){let n=ve(t),r=ze(t),o=n.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],l=n.u0-Math.max(0,e.u0),a=n.u1+Math.max(0,e.u1),c=(b,v)=>[b,v,r.y(v)],u=c(l,-i),d=c(a,-i),p=c(a,o+s),h=c(l,o+s),[f,g]=[nt(t.pitch_a),nt(t.pitch_b)],y=b=>[b,r.vr,r.rh];if(t.ends&&(t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip")){let b=(n.u1-n.u0)/2,v=Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=Math.min(r.y(0),r.y(o)),x=w+(r.rh-w)*Math.min(.9,Math.max(.2,t.halfhip??.55)),k=f>1e-6?Math.min(r.vr,(x-t.eave_a)/f):r.vr,$=g>1e-6?Math.max(r.vr,o-(x-t.eave_b)/g):r.vr,A=Math.min(b-.1,(r.rh-x)/Math.max(.2,f)),F=[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]],T=[[0,r.y(0)],[k,x],[$,x],[o,r.y(o)]],I=(V,Bt,fo)=>{if(V==="hip")return{upA:[],upB:[],ridge:y(Bt===l?n.u0+v*fo:n.u1-v*fo),profile:null};if(V==="halfhip"){let Dg=y(Bt===l?n.u0+A:n.u1-A);return{upA:[[Bt,k,x]],upB:[[Bt,$,x]],ridge:Dg,profile:T}}return{upA:[],upB:[],ridge:y(Bt),profile:F}},z=I(t.ends[0],l,1),C=I(t.ends[1],a,1),B=[[u,d,...C.upA,C.ridge,z.ridge,...[...z.upA].reverse()],[z.ridge,C.ridge,...[...C.upB].reverse(),p,h,...z.upB]],q=[[z.ridge,C.ridge]];for(let[V,Bt,fo]of[[z,u,h],[C,d,p]])V.profile===null?(B.push(V===z?[h,u,V.ridge]:[d,p,V.ridge]),q.push([Bt,V.ridge],[fo,V.ridge])):V.upA.length&&(B.push(V===z?[V.upB[0],V.upA[0],V.ridge]:[V.upA[0],V.upB[0],V.ridge]),q.push([V.upA[0],V.ridge],[V.upB[0],V.ridge]));let ye=V=>V.profile===null?[]:V.upA.length?[V.upA[0],V.upB[0]]:[V.ridge],$t=[u,d,...ye(C),p,h,...[...ye(z)].reverse()];return{faces:B,rim:$t,ridges:q,gable:F,endProfiles:[z.profile,C.profile]}}switch(t.shape){case"pent":return{faces:[[u,d,p,h]],rim:[u,d,p,h],ridges:[[p,h]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let b=(n.u1-n.u0)/2,v=t.shape==="pyramid"?b:Math.min(b,Math.min(r.vr,o-r.vr)||o/2),w=y(n.u0+v),x=y(n.u1-v);return t.shape==="pyramid"?{faces:[[u,d,w],[d,p,w],[p,h,w],[h,u,w]],rim:[u,d,p,h],ridges:[[u,w],[h,w],[d,w],[p,w]],gable:null}:{faces:[[u,d,x,w],[w,x,p,h],[h,u,w],[d,p,x]],rim:[u,d,p,h],ridges:[[w,x],[u,w],[h,w],[d,x],[p,x]],gable:null}}case"halfhip":{let b=Math.min(r.y(0),r.y(o)),v=b+(r.rh-b)*Math.min(.9,Math.max(.2,t.halfhip??.55)),w=f>1e-6?Math.min(r.vr,(v-t.eave_a)/f):r.vr,x=g>1e-6?Math.max(r.vr,o-(v-t.eave_b)/g):r.vr,k=Math.min((n.u1-n.u0)/2-.1,(r.rh-v)/Math.max(.2,f)),$=y(n.u0+k),A=y(n.u1-k),F=[l,w,v],T=[l,x,v],I=[a,w,v],z=[a,x,v];return{faces:[[u,d,I,A,$,F],[$,A,z,p,h,T],[T,F,$],[I,z,A]],rim:[u,d,I,z,p,h,T,F],ridges:[[$,A],[F,$],[T,$],[I,A],[z,A]],gable:[[0,r.y(0)],[w,v],[x,v],[o,r.y(o)]]}}case"mansard":{let b=kr(o,t.eave_a,t.eave_b,f,g),v=[l,b.vla,b.yla],w=[a,b.vla,b.yla],x=[l,o-b.vlb,b.ylb],k=[a,o-b.vlb,b.ylb],$=[l,b.vr,b.rh],A=[a,b.vr,b.rh];return{faces:[[u,d,w,v],[v,w,A,$],[$,A,k,x],[x,k,p,h]],rim:[u,d,w,A,k,p,h,x,$,v],ridges:[[$,A],[v,w],[x,k]],gable:[[0,r.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,r.y(o)]]}}default:{let b=y(l),v=y(a);return{faces:[[u,d,v,b],[b,v,p,h]],rim:[u,d,v,p,h,b],ridges:[[b,v]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function xr(t,e,n){let r=null;for(let o of t.faces){if(!N([e,n],o.map(([p,h])=>[p,h])))continue;let[i,s]=o,l=o.slice(2).find(p=>Math.abs((s[0]-i[0])*(p[1]-i[1])-(s[1]-i[1])*(p[0]-i[0]))>1e-9);if(!l)continue;let a=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[l[0]-i[0],l[2]-i[2],l[1]-i[1]],u=[a[1]*c[2]-a[2]*c[1],a[2]*c[0]-a[0]*c[2],a[0]*c[1]-a[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let d=i[2]-(u[0]*(e-i[0])+u[2]*(n-i[1]))/u[1];r=r===null?d:Math.min(r,d)}return r}function $r(t,e,n){let r=ve(e),o=t.floors.flatMap(d=>d.rooms.filter(p=>p.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(p=>o.some(h=>N(p,h.points))),s=.35,l=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),a=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:n,u=(d,p)=>{let h=e.overhang_sides?.[d];return typeof h=="number"&&Number.isFinite(h)?Math.min(2,Math.max(0,h)):p};return{a:u("a",c(i(l.map(d=>r.at(d,-s))))),b:u("b",c(i(l.map(d=>r.at(d,r.w+s))))),u0:u("u0",c(i(a.map(d=>r.at(r.u0-s,d))))),u1:u("u1",c(i(a.map(d=>r.at(r.u1+s,d)))))}}var Uo=t=>Math.abs((t.x1-t.x0)*(t.z1-t.z0)),Pu=t=>t.shape==="flat"||t.shape==="parapet",Yt=t=>Math.round(t*100)/100;function jo(t,e){let[n,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return t.filter(i=>{if(i===e||i.dormer||i.open||Pu(i)||Uo(i)<Uo(e)*1.5)return!1;let s=yr(i);return n>=s.x0&&n<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||Uo(s)<Uo(i)?s:i,null)}function Ps(t,e,n,r){let o=ve(t),i=ze(t),s=2,l=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[a,c]=e==="a"?[t.eave_a,t.pitch_a]:[t.eave_b,t.pitch_b],u=a+1.4,d=u+s/2*Math.tan(35*Sn),p=Math.max(.8,Math.min(o.w/2-.2,(d-a)/Math.max(.15,Math.tan(Math.min(80,c)*Sn)))),[h,f]=e==="a"?[0,p]:[o.w-p,o.w],g=o.at(l,h),y=o.at(l+s,f);return{id:n,x0:Yt(Math.min(g[0],y[0])),z0:Yt(Math.min(g[1],y[1])),x1:Yt(Math.max(g[0],y[0])),z1:Yt(Math.max(g[1],y[1])),shape:"gable",axis:t.axis==="x"?"z":"x",eave_a:Yt(u),eave_b:Yt(u),pitch_a:35,pitch_b:35,base:Yt(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function Y_(t,e){let n=qt(t,{u0:0,u1:0,a:0,b:0}),r=ze(t);return o=>{let[i,s]=e.at(o,e.w/2),[l,a]=vr(t,i,s);return xr(n,l,a)??r.y(a)}}function Is(t,e){if(Pu(e))return e;let n=ve(e),r=ze(e).rh,o=Y_(t,n),i=o(n.u0)<=o(n.u1),[s,l]=i?[n.u0,n.u1]:[n.u1,n.u0],a=i?1:-1,c=l;for(let p=.5;p<Math.abs(l-s);p+=.05)if(o(s+a*p)>=r-.02){c=s+a*p;break}if(Math.abs(c-l)<.05)return e;let u={...e},d=l===n.u1;return e.axis==="x"?u[d?"x1":"x0"]=c:u[d?"z1":"z0"]=c,u}var Ds=.14,Iu=t=>t.shape==="flat"||t.shape==="parapet";function Os(t,e){return!t.open&&Math.min(t.base,t.eave_a,t.eave_b)<e-.05}function Sr(t,e,n){let r=Math.max(0,t.settings.roof.overhang??0),o=1e-6,i=[];for(let s of t.settings.roof.sections??[]){if(s.open)continue;let[l,a,c,u]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],[d,p]=Ts(s,e,n);if(d<l-o||d>a+o||p<c-o||p>u+o||s.points&&s.points.length>=3&&!N([e,n],s.points))continue;let[h,f]=vr(s,e,n),g=Math.max(0,s.overhang??r),y=Iu(s)?null:xr(qt(s,{u0:g,u1:g,a:g,b:g}),h,f);i.push((y??ze(s).y(f))-Ds)}return i.length?Math.max(...i):null}function Ls(t,e,n){let r=[],o=e+n+Ds;for(let i of t.settings.roof.sections??[]){if(i.open||Iu(i)||i.shape==="mansard")continue;let s=ve(i),l=ze(i),[a,c]=[nt(i.pitch_a),nt(i.pitch_b)],u=[];a>1e-6&&u.push((o-i.eave_a)/a),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let d of u)d<=.01||d>=s.w-.01||i.shape==="gable"&&Math.abs(l.y(d)-o)>1e-6||r.push([s.at(s.u0,d),s.at(s.u1,d)])}return r}function Hs(t,e,n,r,o){let i=[];for(let l of[.2,.5,.8])for(let a of[.2,.5,.8])i.push([e+(r-e)*l,n+(o-n)*a]);let s=t.floors.filter(l=>l.rooms.some(a=>a.points.length>=3&&i.some(c=>N(c,a.points)))).map(l=>l.elevation+l.height);return s.length?Math.max(...s):null}function Cs(t,e){let n=t.floors.filter(a=>a.rooms.length>0).sort((a,c)=>a.elevation-c.elevation),r=n.filter(a=>a.elevation<e.base-.05),{x0:o,z0:i,x1:s,z1:l}=e;if(o!==void 0&&i!==void 0&&s!==void 0&&l!==void 0){let a=[];for(let u of[.2,.5,.8])for(let d of[.2,.5,.8])a.push([o+(s-o)*u,i+(l-i)*d]);let c=r.findLast(u=>u.rooms.some(d=>d.points.length>=3&&a.some(p=>N(p,d.points))));if(c)return c}return r.at(-1)??n[0]}var _t=t=>Math.round(t*1e3)/1e3;function Ns(t,e=n=>`roof_${n+1}`){let n=t.settings.roof?.pitch??35,r=t.settings.wall_exterior,o=t.floors.filter(a=>a.rooms.some(c=>c.points.length>=3)).sort((a,c)=>c.elevation-a.elevation),i=[],s=[],l=(a,c)=>a.some(u=>N(c,u.points));for(let a of o){let c=a.rooms.filter(y=>y.points.length>=3),u=[...new Set(c.flatMap(y=>y.points.map(b=>_t(b[0]))))].sort((y,b)=>y-b),d=[...new Set(c.flatMap(y=>y.points.map(b=>_t(b[1]))))].sort((y,b)=>y-b),p=d.slice(0,-1).map((y,b)=>u.slice(0,-1).map((v,w)=>{let x=[(u[w]+u[w+1])/2,(d[b]+d[b+1])/2];return l(c,x)&&!l(s,x)})),h=p.map(y=>y.map(()=>!1)),f=(y,b)=>p[b][y]&&!h[b][y],g=a.elevation+a.height;for(let y=0;y<p.length;y++)for(let b=0;b<(p[y]?.length??0);b++){if(!f(b,y))continue;let v=b;for(;v+1<p[y].length&&f(v+1,y);)v++;let w=y;for(;w+1<p.length&&Array.from({length:v-b+1},(F,T)=>f(b+T,w+1)).every(Boolean);)w++;for(let F=y;F<=w;F++)for(let T=b;T<=v;T++)h[F][T]=!0;let[x,k]=[u[b]-r,u[v+1]+r],[$,A]=[d[y]-r,d[w+1]+r];Math.min(k-x,A-$)<.8||i.push({id:e(i.length),x0:_t(x),z0:_t($),x1:_t(k),z1:_t(A),shape:"gable",axis:k-x>=A-$?"x":"z",eave_a:_t(g),eave_b:_t(g),pitch_a:n,pitch_b:n,base:_t(g),overhang:null})}s.push(...c)}return i}var Se=Math.PI/180,We=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Xt=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Rn=t=>Math.hypot(t[0],t[1],t[2]),Qt=t=>{let e=Rn(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Du=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Ve=t=>Math.round(t*100)/100,Mr=([t,e],n)=>(Math.atan2(t,-e)/Se-n+720)%360;var Lu=.25;function Hu(t,e,n,r,o,i,s){let l=o-n>=i-r,a=l?o-n:i-r;return{key:`${t}:top`,section:e,side:"top",flat:!0,o:[n,s,r],eu:l?[1,0,0]:[0,0,1],es:l?[0,0,1]:[1,0,0],n:[0,1,0],lu:a,ls:l?i-r:o-n,pitch:0,span:()=>[0,a],facing:l?[0,1]:[1,0]}}function Cu(t,e){let n=Qt(Du(t,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var Nu=t=>{let e=Qt([-t[0],0,-t[2]]);return[e[0],e[2]]};function bt(t,e,n,r,o,i,s,l){let a=Qt(We(o,r)),c=Qt(We(i,r));return{key:t,section:e,side:n,flat:!1,o:r,eu:a,es:c,n:Cu(a,c),lu:Rn(We(o,r)),ls:Rn(We(i,r)),pitch:s,span:l,facing:Nu(c)}}function Ou(t,e,n,r,o,i){let s=Rn(We(o,r));if(s<.3)return null;let l=Qt(We(o,r)),a=We(i,r),c=a[0]*l[0]+a[1]*l[1]+a[2]*l[2],u=[a[0]-l[0]*c,a[1]-l[1]*c,a[2]-l[2]*c],d=Rn(u);if(d<.3)return null;let p=Qt(u),h=f=>{let g=Math.min(1,Math.max(0,f/d));return[c*g,s-(s-c)*g]};return{key:t,section:e,side:n,flat:!1,o:r,eu:l,es:p,n:Cu(l,p),lu:s,ls:d,pitch:Math.atan2(p[1],Math.hypot(p[0],p[2]))/Se,span:h,facing:Nu(p)}}function X_(t,e){let n=ve(t),r=ze(t),o=(v,w,x)=>{let[k,$]=n.at(v,w);return[k,x,$]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],l=n.u0-Math.max(0,e.u0),a=n.u1+Math.max(0,e.u1),c=a-l,u=r.y(-i),d=r.y(n.w+s);if(t.shape==="flat"||t.shape==="parapet"){let[v,w]=[n.at(l,-i),n.at(a,n.w+s)];return[Hu(t.id,t.id,Math.min(v[0],w[0]),Math.min(v[1],w[1]),Math.max(v[0],w[0]),Math.max(v[1],w[1]),t.eave_a+Lu)]}if(t.shape==="pent")return[bt(`${t.id}:a`,t.id,"a",o(l,-i,u),o(a,-i,u),o(l,n.w+s,d),t.pitch_a,()=>[0,c])];if(t.shape==="mansard")return Q_(t,n,l,a,i,s);let p=t.shape==="hip"||t.shape==="pyramid",h=(n.u1-n.u0)/2,f=t.shape==="pyramid"?h:p?Math.min(h,Math.min(r.vr,n.w-r.vr)||n.w/2):0,g=p?n.u0+f-l:0,y=p?a-(n.u1-f):0,b=[];if(r.vr>.3){let v=Math.hypot(r.vr+i,r.rh-u);b.push(bt(`${t.id}:a`,t.id,"a",o(l,-i,u),o(a,-i,u),o(l,r.vr,r.rh),t.pitch_a,w=>[g*(w/v),c-y*(w/v)]))}if(n.w-r.vr>.3){let v=Math.hypot(n.w+s-r.vr,r.rh-d);b.push(bt(`${t.id}:b`,t.id,"b",o(a,n.w+s,d),o(l,n.w+s,d),o(a,r.vr,r.rh),t.pitch_b,w=>[y*(w/v),c-g*(w/v)]))}if(p){let v=Ou(`${t.id}:c`,t.id,"c",o(l,n.w+s,d),o(l,-i,u),o(n.u0+f,r.vr,r.rh)),w=Ou(`${t.id}:d`,t.id,"d",o(a,-i,u),o(a,n.w+s,d),o(n.u1-f,r.vr,r.rh));b.push(...[v,w].filter(x=>x!==null))}return b}function Q_(t,e,n,r,o,i){let s=kr(e.w,t.eave_a,t.eave_b,nt(t.pitch_a),nt(t.pitch_b)),l=(f,g)=>{let[y,b]=e.at(f,g);return[y,s.y(g),b]},a=r-n,c=()=>[0,a],u=(f,g)=>Math.atan2(f,g)/Se,d=[],[p,h]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&d.push(bt(`${t.id}:a`,t.id,"a",l(n,-o),l(r,-o),l(n,s.vla),t.pitch_a,c)),s.vr-s.vla>.3&&d.push(bt(`${t.id}:au`,t.id,"a",l(n,s.vla),l(r,s.vla),l(n,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&d.push(bt(`${t.id}:b`,t.id,"b",l(r,p),l(n,p),l(r,h),t.pitch_b,c)),h-s.vr>.3&&d.push(bt(`${t.id}:bu`,t.id,"b",l(r,h),l(n,h),l(r,s.vr),u(s.rh-s.ylb,h-s.vr),c)),d}function Bs(t){return t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0]??null}function j(t){let e=t.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>X_(w,$r(t,w,w.overhang??e.overhang)));let n=Bs(t);if(!n)return[];let r=n.rooms.flatMap(w=>w.points.map(x=>x[0])),o=n.rooms.flatMap(w=>w.points.map(x=>x[1])),i=t.settings.wall_exterior+e.overhang,[s,l]=[Math.min(...r)-i,Math.max(...r)+i],[a,c]=[Math.min(...o)-i,Math.max(...o)+i],u=n.elevation+n.height;if(e.type==="flat")return[Hu("main",null,s,a,l,c,u+Lu)];let d=l-s>=c-a,p=e.ridge==="short"?!d:d,h=(p?c-a:l-s)/2,f=h*Math.tan(e.pitch*Se),g=(w,x,k)=>p?[w,u+k,(a+c)/2+x]:[(s+l)/2+x,u+k,w],[y,b]=p?[s,l]:[a,c],v=()=>[0,b-y];return[bt("main:a",null,"a",g(y,-h,0),g(b,-h,0),g(y,0,f),e.pitch,v),bt("main:b",null,"b",g(y,h,0),g(b,h,0),g(y,0,f),e.pitch,v)]}function Ke(t,e){let n=[];for(let r of t.floors.filter(o=>!e||o.id===e)){let{walls:o}=fe(r.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,l]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],a=Math.hypot(s,l);if(a<1.2)continue;let[c,u]=[l/a,-s/a],d=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),p=(h,f,g,y)=>n.push({key:h,section:null,side:"top",flat:!1,o:f,eu:g,es:[0,1,0],n:y,lu:a,ls:d,pitch:90,span:()=>[0,a],facing:[y[0],y[2]],wall:{floorId:r.id}});p(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/a,0,l/a],[c,0,u]),i.free&&p(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/a,0,-l/a],[-c,0,-u])}}return n}var Ie="ground";function Zo(t){let e=t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>n.elevation-r.elevation);return e.find(n=>n.elevation>-.5)??e[0]??t.floors[0]??null}function qo(t,e){let n=(e.rotation??0)*Se,r=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=Zo(t),s=r[0]*e.u+o[0]*e.v,l=r[2]*e.u+o[2]*e.v,a=i?i.elevation+(e.base!=null?e.base:zc(i,s,l)):e.base??0;return{key:Ie,section:null,side:"top",flat:!0,o:[0,a,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function ke(t,e,n=j(t)){return e.face===Ie?qo(t,e):e.face.startsWith("wall:")?Ke(t,e.face.split(":")[1]).find(r=>r.key===e.face)??null:n.find(r=>r.key===e.face)??null}var Yo=1.13,Er=1.72,Ge=.025,rt=.07;function Jt(t){let e=t.module_w||Yo,n=t.module_h||Er;return t.portrait===!1?[n,e]:[e,n]}function Ar(t){return t.layout?.length?t.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,t.rows)},()=>Math.max(1,t.cols))}function Ws(t,e){return t.flat?Math.min(45,Math.max(0,e.tilt??15))*Se:t.wall?Math.min(90,Math.max(0,e.tilt??0))*Se:Math.min(45,Math.max(0,e.tilt??0))*Se}function Fr(t,e){let[,n]=Jt(e),r=Ws(t,e);return t.wall?n*Math.cos(r)+Ge:!t.flat&&r<.001?n+Ge:t.flat&&e.rack==="ew"?n*Math.cos(r)+.08:n*Math.cos(r)+Math.max(.3,2*n*Math.sin(r))}function En(t,e){let[n,r]=Jt(e),o=Ar(e),i=Math.max(1,...o);return[i*n+(i-1)*Ge,(o.length-1)*Fr(t,e)+r*Math.cos(Ws(t,e))]}var J_=t=>t.flat&&!t.unbounded&&!t.wall;function Bu(t,e){if(!J_(t)||!e.rotation)return null;let n=e.rotation*Se,[r,o]=En(t,e);return{cos:Math.cos(n),sin:Math.sin(n),u:e.u+r/2,s:e.v+o/2}}function Ue(t,e,n=!1){let[r,o]=Jt(e),i=Ws(t,e),s=o*Math.cos(i),l=Fr(t,e),a=Ar(e),c=Math.max(1,...a),u=new Set(e.skip??[]),d=Bu(t,e),p=(y,b)=>d?[d.u+(y-d.u)*d.cos-(b-d.s)*d.sin,d.s+(y-d.u)*d.sin+(b-d.s)*d.cos]:[y,b],h=(y,b,v)=>{let[w,x]=p(y,b);return[0,1,2].map(k=>t.o[k]+t.eu[k]*w+t.es[k]*x+t.n[k]*v)},f=(y,b)=>{let[v,w]=p(y,b);if(t.unbounded)return!0;if(w<-1e-6||w>t.ls+1e-6)return!1;let[x,k]=t.span(w);return v>=x-1e-6&&v<=k+1e-6},g=[];return a.forEach((y,b)=>{let v=e.align==="right"?c-y:e.align==="center"?(c-y)/2:0;for(let w=0;w<y;w++){let x=`${b}:${w}`,k=u.has(x);if(k&&!n)continue;let $=e.u+(w+v)*(r+Ge),A=$+r,F=e.v+b*l,T=F+(t.flat||t.wall||i>.001?s:o);if([[$,F],[A,F],[A,T],[$,T]].every(([I,z])=>f(I,z)))if(t.wall&&i>.001){let I=rt+o*Math.sin(i),[z,C]=e.flip?[I,rt]:[rt,I],B=[h($,F,z),h(A,F,z),h(A,T,C),h($,T,C)],q=e.flip?F:T;g.push({corners:B,posts:[$+.05,A-.05].map(ye=>[h(ye,q,0),h(ye,q,I)]),cell:x,skipped:k})}else if(!t.flat&&i>.001){let I=rt+o*Math.sin(i),z=[h($,F,rt),h(A,F,rt),h(A,T,I),h($,T,I)];g.push({corners:z,posts:[$+.05,A-.05].map(C=>[h(C,T,0),h(C,T,I)]),cell:x,skipped:k})}else if(!t.flat)g.push({corners:[h($,F,rt),h(A,F,rt),h(A,T,rt),h($,T,rt)],posts:[],cell:x,skipped:k});else{let z=.15+o*Math.sin(i),C=e.rack==="ew"&&b%2===1?!e.flip:!!e.flip,[B,q]=C?[T,F]:[F,T],ye=[h($,B,.15),h(A,B,.15),h(A,q,z),h($,q,z)],$t=[$+.05,A-.05].flatMap(V=>[[h(V,B,0),h(V,B,.15)],[h(V,q,0),h(V,q,z)]]);g.push({corners:ye,posts:$t,cell:x,skipped:k})}}}),g}function ct(t,e){if(t.unbounded)return{u:e.u,v:e.v};let[n,r]=En(t,e),o=Bu(t,e);if(o){let[s,l]=[(n*Math.abs(o.cos)+r*Math.abs(o.sin))/2,(n*Math.abs(o.sin)+r*Math.abs(o.cos))/2],a=(d,p,h)=>Math.floor(Math.max(p,Math.min(d,h-p))*100+1e-6)/100,[c,u]=[e.u+n/2,e.v+r/2];return{u:Math.round((a(c,s,t.lu)-n/2)*100)/100,v:Math.round((a(u,l,t.ls)-r/2)*100)/100}}let i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,t.lu-n))),v:i(Math.min(Math.max(0,e.v),Math.max(0,t.ls-r)))}}function Tr(t,e){let[n,r]=En(t,e),[o,i]=[e.u+n/2,e.v+r/2];return[t.o[0]+t.eu[0]*o+t.es[0]*i,t.o[2]+t.eu[2]*o+t.es[2]*i]}var Xo=.78,zr=1.18,en=t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:t.w||Xo,module_h:t.h||zr});function Vs(t,e){let n=Ue(t,en(e))[0];if(!n)return null;let r=o=>[o[0]-t.n[0]*.05,o[1]-t.n[1]*.05,o[2]-t.n[2]*.05];return n.corners.map(r)}var Rr={brick:{w:.5,d:.5,h:1},round:{w:.4,d:.4,h:1},wide:{w:1,d:.5,h:1},steel:{w:.2,d:.2,h:1.2}};function tn(t){let e=t.shape??"brick",n=Rr[e]??Rr.brick;return{shape:e,w:t.w||n.w,d:t.d||n.d,h:t.h||n.h}}function yt(t,e){let{w:n,d:r}=tn(t),o=e&&!e.flat?Math.cos(e.pitch*Se):1;return{id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:n,module_h:r/Math.max(.2,o),tilt:0}}function Ks(t,e){let n=yt(e,t),[r,o]=[n.module_w,n.module_h],i=(u,d)=>[t.o[0]+t.eu[0]*u+t.es[0]*d,t.o[1]+t.eu[1]*u+t.es[1]*d,t.o[2]+t.eu[2]*u+t.es[2]*d],[s,l]=[i(e.u+r/2,e.v),i(e.u+r/2,e.v+o)],a=i(e.u+r/2,e.v+o/2),c=u=>{let d=Math.hypot(u[0],u[2])||1;return[u[0]/d,u[2]/d]};return{center:[a[0],a[2]],along:c(t.eu),across:c(t.es),low:Math.min(s[1],l[1]),high:Math.max(s[1],l[1])}}function Gs(t,e){let[n]=Jt(e);return Ve((t.lu-(e.cols*n+(e.cols-1)*Ge))/2)}var Pr=.4;function An(t,e){let n={id:e,face:t.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:t.flat?15:null,flip:!1,entity:null,look:"black"},[r]=Jt(n),[o,i]=t.span(t.ls/2);for(n.cols=Math.max(1,Math.floor((i-o-2*Pr+Ge)/(r+Ge))),n.rows=Math.max(1,Math.min(4,Math.floor((t.ls-2*Pr)/Fr(t,n))));n.cols>1&&Ue(t,{...n,u:Gs(t,n),v:Pr}).length<n.rows*n.cols;)n.cols--;return n.u=Gs(t,n),n.v=Pr,n}function Qo(t,e){let n={...e,face:t.key,tilt:t.flat?e.tilt??15:null,rotation:null,flip:!1};return n.u=Gs(t,n),n.v=Pr,{...n,...ct(t,n)}}function Us(t,e,n){let r=t.settings.north??0,o=l=>l.lu*(1.3+Math.cos((Mr(l.facing,r)-180)*Math.PI/180)),i=Ke(t,n).sort((l,a)=>o(a)-o(l))[0];if(!i)return null;let s={...An(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+Ge)/(Er+Ge))),s.u=Ve((i.lu-(s.cols*Er+(s.cols-1)*Ge))/2),s.v=Ve(Math.max(0,i.ls-Yo-.3)),s}function Ir(t,e){let n=t.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=n.length?Math.max(...n.map(i=>i[0]))+3:0,o=n.length?Math.min(...n.map(i=>i[1])):0;return{id:e,face:Ie,u:Ve(r),v:Ve(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(t.settings.north??0)||0,look:"black",entity:null}}function Dr(t,e,n){let r=qo(t,e),[o,i]=En(r,e),[s,l]=[e.u+o/2,e.v+i/2],a=[r.eu[0]*s+r.es[0]*l,r.eu[2]*s+r.es[2]*l],c=n*Se,u=a[0]*Math.cos(c)+a[1]*Math.sin(c)-o/2,d=a[0]*-Math.sin(c)+a[1]*Math.cos(c)-i/2;return{u:Ve(u),v:Ve(d),rotation:(Math.round(n)%360+360)%360}}function Or(t,e){let[n,r]=t.span(t.ls/2);return{id:e,face:t.key,u:Ve((n+r-Xo)/2),v:Ve(Math.max(0,Math.min(t.ls-zr,t.ls*.45-zr/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function Lr(t,e){let n=Rr.brick,[r,o]=t.span(t.ls*.8),i=yt({id:e,face:t.key,u:0,v:0},t).module_h;return{id:e,face:t.key,u:Ve((r+o-n.w)/2),v:Ve(Math.max(0,Math.min(t.ls-i,t.ls*.8-i/2))),shape:"brick",w:null,d:null,h:null}}function Fn(t,e){let[n,r]=[e[0]-t.o[0],e[1]-t.o[2]],[o,i,s,l]=[t.eu[0],t.eu[2],t.es[0],t.es[2]],a=o*l-i*s;if(Math.abs(a)<1e-9)return null;let c=(n*l-r*s)/a,u=(o*r-i*n)/a;if(u<0||u>t.ls)return null;let[d,p]=t.span(u);return c>=d&&c<=p?{u:c,s:u}:null}function js(t,e){let n=null;for(let r of t){if(r.wall){let[s,l]=[e[0]-r.o[0],e[1]-r.o[2]],a=s*r.eu[0]+l*r.eu[2],c=s*r.n[0]+l*r.n[2],u=a>=0&&a<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:a,s:Number.NaN};u&&c>.35&&c<=.8&&!n&&(n={face:r,u:a,s:Number.NaN,y:-1/0});continue}let o=Fn(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!n||i>n.y)&&(n={face:r,...o,y:i})}return n&&{face:n.face,u:n.u,s:n.s}}function Jo(t,e,n){let r=Xt(n,t.n);if(Math.abs(r)<1e-6)return null;let o=Xt(We(t.o,e),t.n)/r;if(o<=0)return null;let i=We([e[0]+n[0]*o,e[1]+n[1]*o,e[2]+n[2]*o],t.o);return{t:o,u:Xt(i,t.eu),s:Xt(i,t.es)}}function Zs(t,e,n){if(t.unbounded)return!0;if(n<0||n>t.ls)return!1;let[r,o]=t.span(n);return e>=r&&e<=o}function qs(t,e,n,r){return Ue(t,e).some(i=>{let s=i.corners.map(c=>{let u=We(c,t.o);return[Xt(u,t.eu),Xt(u,t.es)]}),l=s.map(c=>c[0]),a=s.map(c=>c[1]);return n>=Math.min(...l)-.05&&n<=Math.max(...l)+.05&&r>=Math.min(...a)-.05&&r<=Math.max(...a)+.05})}var eb=["n","ne","e","se","s","sw","w","nw"],Ys=(t,e)=>eb[Math.round(Mr(t.facing,e)/45)%8];function Hr(t,e){let n=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Mr(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...t].sort((r,o)=>n(o)-n(r))[0]??null}var Gu=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Wu={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Vu=t=>typeof t=="string"?t:t[0],ei=t=>typeof t=="string"?Je[t]:t[1],Tn=.05,tb=.02,Ku=t=>Math.round(t*1e3)/1e3;function nb(t,e,n,r){switch(e){case"back":return{x:t.x0+n,z:t.z0+r,turn:0};case"right":return{x:t.x1-r,z:t.z0+n,turn:90};case"front":return{x:t.x1-n,z:t.z1-r,turn:180};case"left":return{x:t.x0+r,z:t.z1-n,turn:270}}}function Uu(t,e,n){let r=ue(t.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],l=(a,c,u,d,[p,h,f])=>{s.push({id:n(),type:a,x:Ku(c),z:Ku(u),rotation:d,w:p,d:h,h:f,variant:null,entity:null,power:null})};for(let[a,c,u]of Wu[e].rows){let d=a==="back"||a==="front"?o:i,p=0,h=[];for(let g of u){if(p+ei(g)[0]>d-.1)break;h.push(g),p+=ei(g)[0]}let f=c==="start"?Tn:c==="end"?d-p-Tn:(d-p)/2;for(let g of h){let y=ei(g),b=nb(r,a,f+y[0]/2,y[1]/2+tb);l(Vu(g),b.x,b.z,b.turn,y),f+=y[0]}}for(let[a,c,u,d]of Wu[e].spots){let p=ei(a),h=(y,b,v)=>Math.min(v,Math.max(b,y)),f=h(r.x0+o*c,r.x0+p[0]/2+Tn,r.x1-p[0]/2-Tn),g=h(r.z0+i*u,r.z0+p[1]/2+Tn,r.z1-p[1]/2-Tn);l(Vu(a),f,g,d,p)}return s}var rb=30*Math.PI/180,ju=.05;function Xs(t){let e=t.points.length;return t.points.map((n,r)=>{let o=t.points[(r+1)%e];return Math.hypot(o[0]-n[0],o[1]-n[1])})}function Cr(t){return Xs(t).reduce((e,n)=>e+n,0)}function ob(t,e){let n=Xs(t),r=0;for(let o=0;o<e&&o<n.length;o++)r+=n[o];return r}function ib(t,e){let n=t.points.length,[r,o,i]=[t.points[e],t.points[(e+1)%n],t.points[(e+2)%n]],s=[o[0]-r[0],o[1]-r[1]],l=[i[0]-o[0],i[1]-o[1]],[a,c]=[Math.hypot(s[0],s[1]),Math.hypot(l[0],l[1])];return a<1e-9||c<1e-9?0:Math.acos(Math.max(-1,Math.min(1,(s[0]*l[0]+s[1]*l[1])/(a*c))))}function Qs(t,e,n){let r=Xs(t),o=r.length,i=r.reduce((h,f)=>h+f,0);if(o<3||!(i>0)||!(n>0))return null;let s=Math.min(n,i),l=(e%i+i)%i,a=0,c=0;for(;a<o-1&&l>=c+r[a];)c+=r[a],a++;let u=l-c,d=s,p=[];for(let h=0;h<=o&&d>1e-9;h++){let f=r[a]-u,g=Math.min(d,f);g>1e-9&&p.push({edge:a,t0:u,t1:u+g}),d-=g,u=0;let y=(a+1)%o;if(d>1e-9&&ib(t,a)>rb)break;a=y}for(;p.length>1&&p[0].t1-p[0].t0<ju;)p.shift();for(;p.length>1&&p[p.length-1].t1-p[p.length-1].t0<ju;)p.pop();return p.length?p.map(h=>({edge:h.edge,offset:(h.t0+h.t1)/2,width:h.t1-h.t0})):null}function zn(t,e){let n=e[0];return n?{from:ob(t,n.edge)+n.offset-n.width/2,width:e.reduce((r,o)=>r+o.width,0)}:null}function It(t,e){return e.front?t.filter(n=>n.front===e.front):[e]}function Js(t,e){let n=t.points.length,r=1/0,o=0,i=0;for(let s=0;s<n;s++){let l=t.points[s],a=t.points[(s+1)%n],c=a[0]-l[0],u=a[1]-l[1],d=Math.hypot(c,u);if(d<1e-6)continue;let p=Math.max(0,Math.min(d,((e[0]-l[0])*c+(e[1]-l[1])*u)/d)),h=Math.hypot(e[0]-(l[0]+c*p/d),e[1]-(l[1]+u*p/d));h<r&&(r=h,o=i+p),i+=d}return o}function Nr(t,e,n,r,o,i=()=>D("opening")){let s=Qs(e,r,o);if(!s)return null;let l=It(t,n),a=new Set(l.map(h=>h.id)),c=s.length>1?l[0].front??`front-${l[0].id}`:null,u=s.map((h,f)=>({...n,id:f===0?l[0].id:i(),edge:h.edge,offset:h.offset,width:h.width,front:c})),d=[],p=!1;for(let h of t){if(!a.has(h.id)){d.push(h);continue}p||(d.push(...u),p=!0)}return d}var na=globalThis,ea=na.__nextfloorBuiltin?.de??{},ta=na.__nextfloorBuiltin?.en??{};na.__nextfloorBuiltin??={de:ea,en:ta};var sb=()=>typeof S=="object"&&S||{},ab=globalThis,lb=ab.__nextfloorTexts??=new Map;function cb(t){let e=t.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in sb()?e:void 0}function Zu(t){let e=cb(t),n=e===void 0?void 0:lb.get(e);return n instanceof Promise?void 0:n}function ti(t,e){return Zu(t)?.[e]}function xe(t,e,n={}){let r=t?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:Zu(r)?.[e])??(o?ea:ta)[e]??ta[e]??ea[e]??e;for(let[s,l]of Object.entries(n))i=i.replace(`{${s}}`,String(l));return i}function U(t,e,n=2){return e.toLocaleString(t?.language??void 0,{maximumFractionDigits:n})}var je=le`
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
`,b$=le`
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
`;var he=t=>/^(sensor|input_number|number)\./.test(t),ni=t=>/^(binary_sensor|input_boolean)\./.test(t);function Pn(t,e){if(!he(e))return!1;let n=t?.states[e]?.attributes;return n?.device_class==="power"||n?.unit_of_measurement==="W"||n?.unit_of_measurement==="kW"}function ub(t,e){let n=t?.entities?.[e],r=n?.area_id??(n?.device_id?t?.devices?.[n.device_id]?.area_id:null);return r?t?.areas?.[r]?.name:void 0}function H(t,e){return Object.keys(t?.states??{}).filter(e).map(n=>{let r=ub(t,n);return{id:n,label:r?`${W(t,n)} \xB7 ${r}`:W(t,n)}}).sort((n,r)=>n.label.localeCompare(r.label))}function ri(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}var oi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Br=t=>(...e)=>({_$litDirective$:t,values:e}),In=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var Wr=class extends In{constructor(e){if(super(e),this.it=_,e.type!==oi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===mt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Wr.directiveName="unsafeHTML",Wr.resultType=1;var qu=Br(Wr);var Yu=40,ra=class extends oe{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=s=>{let l=`${s.label} ${s.id}`.toLowerCase();return n.every(a=>l.includes(a))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,Yu)]}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>n.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-Yu)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[];return m`<div class="wrap">
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
            ${n.length?_:m`<li class="empty">–</li>`}
            ${n.map((r,o)=>m`<li
                role="option"
                aria-selected=${r.id===this.value}
                class="${o===this._cursor?"cursor":""} ${r.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(r.id)}
              >
                <span>${r.label}</span>${r.id.includes(".")?m`<small>${r.id}</small>`:_}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:_}
          </ul>`:_}
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",ra);var nn=t=>t.target.value,oa=t=>Number.parseFloat(t.replace(",",".")),ie=t=>Math.round(t*1e3)/1e3,Xu=t=>t.wide?"nf-field nf-wide":"nf-field";function E(t,e,n,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??_}
      .value=${String(ie(n))}
      ?disabled=${!t.admin}
      @change=${s=>{let l=oa(nn(s));Number.isFinite(l)&&r(l)}}
    />
  </label>`}function Z(t,e,n,r,o={}){return m`<label class=${Xu(o)} title=${o.title??_}
    >${e}
    <input type="text" .value=${n} placeholder=${o.placeholder??_} maxlength=${o.maxlength??_} ?disabled=${!t.admin} @change=${i=>r(nn(i).trim())} />
  </label>`}function O(t,e,n,r,o,i={}){return m`<label class=${Xu(i)} title=${i.title??_}
    >${e}
    <select ?disabled=${!t.admin} @change=${s=>o(nn(s))}>
      ${r.map(([s,l])=>m`<option value=${s} ?selected=${s===n}>${l}</option>`)}
    </select>
  </label>`}function L(t,e,n,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??_}
    ><input type="checkbox" .checked=${n} ?disabled=${!t.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function De(t,e,n,r,o){return m`<label class="nf-field"
    >${e}
    <span class="nf-color-row"
      ><input type="color" .value=${n??r} ?disabled=${!t.admin} @change=${i=>o(i.target.value)} />
      ${n?m`<button type="button" class="nf-link" ?disabled=${!t.admin} @click=${()=>o(null)}>${t.t("wall_paint_default")}</button>`:_}</span
    ></label
  >`}function P(t,e,n,r,o,i){let s=r===void 0?null:r?t.t("entity_auto",{name:W(t.hass,r)}):t.t("entity_auto_none"),l=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:t.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${l}
      .value=${n??(s!==null?"__auto":"none")}
      .placeholder=${t.t("entity_search")}
      ?disabled=${!t.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Dn(t,e,n){return n?(n.startsWith("mdi:")?n:`mdi:${n}`).replace(/[^a-z0-9:-]/gi,""):t.hass?Xc(t.hass,e):null}function Dt(t,e,n){let r=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${t.t("marker_icon_hint")}
    >${t.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!t.admin} @change=${o=>n(nn(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?qu(`<ha-icon icon="${r}"></ha-icon>`):_}
    </span>
  </label>`}function On(t,e,n){return m`<label class="nf-field nf-wide" title=${t.t("marker_show_hint")}
    >${t.t("marker_show")}
    <select ?disabled=${!t.admin} @change=${r=>n(nn(r)||null)}>
      <option value="" ?selected=${!e}>${t.t("marker_show_auto")}</option>
      ${xc.map(r=>m`<option value=${r} ?selected=${r===e}>${t.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}function Ln(t,e,n){let r=e??{},o=i=>s=>{let l={...r,[i]:Math.round(Math.max(-5,Math.min(5,s))*100)/100};n(l.x||l.z||l.y?l:null)};return m`<details class="nf-wide nf-pin-shift" ?open=${!!e}>
    <summary>${t.t("pin_shift")}</summary>
    <div class="nf-form">
      ${E(t,"\u2194 x",r.x??0,o("x"),.05)} ${E(t,"\u2195 z",r.z??0,o("z"),.05)} ${E(t,t.t("pin_shift_up"),r.y??0,o("y"),.05)}
      ${e?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n(null)}>${t.t("height_auto")}</button>`:_}
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
      @change=${i=>{let s=Number(nn(i)),l=Math.min(150,Math.max(o,nn(i).trim()===""||Number.isNaN(s)?100:s))/100;n(Math.abs(l-1)<.001?null:l)}}
    />
  </label>`}function Qu(t,e,n){let r=t.find(a=>a.person===e),o="sensor"in n?n.sensor&&n.sensor!=="none"?n.sensor:null:r?.sensor??null,i="room"in n?n.room||null:r?.room??null,s=t.filter(a=>a.person!==e);if(!o&&!i)return s;let l=i?{person:e,sensor:o,room:i}:{person:e,sensor:o};return r?t.map(a=>a.person===e?l:a):[...s,l]}function Ju(t,e){let n=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(n)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...t.filter(r),...t.filter(o=>!r(o))]}function ed(t){let e=t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:"";return`start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${e} }`}function td(t){let e=t.trim();if(!e)return{ok:!0,value:null};try{let n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)?{ok:!0,value:n}:{ok:!1}}catch{return{ok:!1}}}function ii(t,e,n){let r=[...t],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+n)),0,o),r}var Ot=(t,e)=>t.filter((n,r)=>r!==e),Vr=(t,e,n)=>t.map((r,o)=>o===e?{...r,...n}:r),dt=t=>t.length>0?t:void 0;var db=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],hb=40,pb=20,fb=30,mb=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],ia={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},Kr=(t,e,n,r=!1)=>m`<button class="nf-pin" title=${t} ?disabled=${r} @click=${n}>${e}</button>`;function gb(t){let e=t.doc.settings.favorites??[],n=l=>t.change(a=>a.settings.favorites=dt(l)),r=t.doc.floors,o=t.doc.settings.favorite_floors??{},i=H(t.hass,l=>db.includes(l.split(".")[0])&&!e.includes(l)),s=(l,a)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${W(t.hass,l)}</span></span>
    ${r.length>1?m`<select title=${t.t("favorite_floor")} .value=${o[l]??""} @change=${c=>{let u=c.target.value,d={...o};u?d[l]=u:delete d[l],t.change(p=>p.settings.favorite_floors=Object.keys(d).length?d:void 0)}}>
          <option value="">${t.t("favorite_all_floors")}</option>
          ${r.map(c=>m`<option value=${c.id} ?selected=${o[l]===c.id}>${c.name}</option>`)}
        </select>`:_}
    ${Kr(t.t("move_up"),"\u2191",()=>n(ii(e,a,-1)),a===0)}
    ${Kr(t.t("move_down"),"\u2193",()=>n(ii(e,a,1)),a===e.length-1)}
    ${Kr(t.t("delete"),"\u2715",()=>n(Ot(e,a)))}
  </div>`;return m`<summary>${t.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:_}</summary>
    ${M(t.t("favorites_hint"))} ${e.map(s)}
    ${e.length<hb?m`<div class="nf-form">${P(t,t.t("favorites_add"),null,void 0,i,l=>l&&l!=="none"&&!e.includes(l)&&n([...e,l]))}</div>`:_}`}function _b(t,e){let n=t.doc.settings.outside_hidden??[],r=s=>t.change(l=>l.settings.outside_hidden=dt(s)),o=new Set(t.hass?pu(t.hass,t.doc.floors):[]),i=H(t.hass,s=>!n.includes(s)&&o.has(s));return m`${e?bb(t,e):_}
    <h4>${t.t("outside_hidden")}${n.length>0?m` <span class="nf-lib-count">${n.length}</span>`:_}</h4>
    ${M(t.t("outside_hidden_hint"))}
    ${n.map((s,l)=>m`<div class="nf-row nf-dev-row"><span class="nf-dev-name"><span>${W(t.hass,s)}</span></span>${Kr(t.t("delete"),"\u2715",()=>r(Ot(n,l)))}</div>`)}
    <div class="nf-form">${P(t,t.t("outside_hidden_add"),null,void 0,i,s=>s&&s!=="none"&&!n.includes(s)&&r([...n,s]))}</div>`}function bb(t,e){let n=t.doc.settings.outside_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.outside_view=o)};return m`${M(t.t("outside_view_hint"))}
    ${Y(m`<button class="nf-btn" @click=${r}>${t.t("outside_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.outside_view=null)}>${t.t("outside_view_reset")}</button>`:_)}`}function yb(t){let e=t.doc.settings.own_alerts??[],n=s=>t.change(l=>l.settings.own_alerts=dt(s)),r=(s,l)=>n(Vr(e,s,l)),o=[["",t.t("own_alert_house")],...t.doc.floors.flatMap(s=>s.rooms.map(l=>[l.id,`${l.name} \xB7 ${s.name}`]))],i=(s,l)=>m`<div class="nf-form nf-own-button">
    ${P(t,t.t("own_alert_entity"),s.entity||null,void 0,H(t.hass,()=>!0),a=>r(l,{entity:a&&a!=="none"?a:""}))}
    ${Z(t,t.t("own_alert_state"),s.state??"",a=>r(l,{state:a||null}),{placeholder:t.hass?.states[s.entity]?.state??"on \xB7 <20 \xB7 >80"})}
    ${Z(t,t.t("own_alert_text"),s.text,a=>r(l,{text:a||t.t("own_alert_new")}),{wide:!0,maxlength:120})}
    ${O(t,t.t("room"),s.room_id??"",o,a=>r(l,{room_id:a||null}),{wide:!0})}
    ${De(t,t.t("own_alert_color"),s.color??null,"#ffb547",a=>r(l,{color:a}))}
    ${O(t,t.t("own_alert_tap"),s.tap??"",[["",t.t("own_alert_tap_info")],["toggle",t.t("own_alert_tap_toggle")],["room",t.t("own_alert_tap_room")]],a=>r(l,{tap:a||null}))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ot(e,l))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>⚠ ${t.t("own_alerts")}</h4>
    ${M(t.t("own_alerts_hint"))} ${e.map(i)}
    ${e.length<40?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("alert"),entity:"",state:null,text:t.t("own_alert_new")}])}>+ ${t.t("own_alert_add")}</button>`):_}`}function wb(t){let e=t.doc.settings.circuits??[],n=l=>t.change(a=>a.settings.circuits=dt(l)),r=(l,a)=>n(Vr(e,l,a)),o=t.doc.floors.flatMap(l=>l.rooms.map(a=>({id:a.id,label:t.doc.floors.length>1?`${a.name} \xB7 ${l.name}`:a.name}))),i=l=>o.find(a=>a.id===l)?.label??l,s=(l,a)=>m`<div class="nf-form nf-own-button">
    ${Z(t,t.t("circuit_name"),l.name,c=>r(a,{name:c||t.t("circuit_new")}),{wide:!0,maxlength:80})}
    <div class="nf-wide">${l.rooms.map(c=>m`<span class="nf-chip">${i(c)} <button class="nf-btn nf-field-btn" title=${t.t("delete")} @click=${()=>r(a,{rooms:l.rooms.filter(u=>u!==c)})}>✕</button></span>`)}</div>
    ${O(t,t.t("circuit_add_room"),"",[["","\u2013"],...o.filter(c=>!l.rooms.includes(c.id)).map(c=>[c.id,c.label])],c=>c&&r(a,{rooms:[...l.rooms,c]}),{wide:!0})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ot(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>🔌 ${t.t("circuits")}</h4>
    ${M(t.t("circuits_hint"))} ${e.map(s)}
    ${e.length<120?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("circuit"),name:t.t("circuit_new"),rooms:[]}])}>+ ${t.t("circuit_add")}</button>`):_}`}function vb(t){let e=t.doc.settings.calendars??[],n=l=>t.change(a=>a.settings.calendars=dt(l)),r=H(t.hass,l=>l.startsWith("calendar.")&&!e.includes(l)),o=(l,a)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${W(t.hass,l)}</span></span>
    ${Kr(t.t("delete"),"\u2715",()=>n(Ot(e,a)))}
  </div>`,i=t.t,s=t.doc.settings.today_days??1;return m`<h4>📅 ${i("today_calendars")}</h4>
    ${M(i("today_calendars_hint"))} ${e.map(o)}
    ${e.length<12?m`<div class="nf-form">${P(t,i("favorites_add"),null,void 0,r,l=>l&&l!=="none"&&!e.includes(l)&&n([...e,l]))}</div>`:_}
    ${e.length?m`<div class="nf-form">
          ${O(t,i("today_days"),String(s),[1,2,3,5,7].map(l=>[String(l),i(l===1?"today_days_one":"today_days_n",{n:l})]),l=>t.change(a=>a.settings.today_days=Number(l)>1?Number(l):void 0))}
        </div>`:_}
    ${kb(t)}`}function kb(t){let e=t.t,n=t.doc.settings.forecast??null,r=o=>t.change(i=>i.settings.forecast=o??void 0);return m`<h4>🌦 ${e("forecast")}</h4>
    ${M(e("forecast_hint"))}
    <div class="nf-form">
      ${O(t,e("forecast_days"),n?String(n.days):"0",[0,3,5,7].map(o=>[String(o),o?e("today_days_n",{n:o}):e("forecast_off")]),o=>r(Number(o)>0?{days:Number(o),corner:n?.corner??"top_right"}:null))}
      ${n?O(t,e("forecast_corner"),n.corner,[["top_right",e("clock_top_right")],["top_left",e("clock_top_left")]],o=>r({...n,corner:o==="top_left"?"top_left":"top_right"})):_}
    </div>`}function xb(t){let e=t.doc.settings.media_presets??[],n=s=>t.change(l=>l.settings.media_presets=dt(s)),r=(s,l)=>n(Vr(e,s,l)),o=[...new Set(t.doc.floors.flatMap(s=>[...s.placements.map(l=>l.entity_id),...s.furniture.map(l=>l.entity??"")]).filter(s=>s.startsWith("media_player.")))],i=(s,l)=>m`<div class="nf-form nf-own-button">
    ${Z(t,t.t("own_button_label"),s.label,a=>r(l,{label:a||"Radio"}),{maxlength:60})}
    ${Z(t,t.t("preset_type"),s.type,a=>r(l,{type:a||"music"}),{title:t.t("preset_type_hint")})}
    ${Z(t,t.t("preset_content"),s.content,a=>r(l,{content:a}),{wide:!0,title:t.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    ${o.length>1?m`<div class="nf-sub nf-wide">${t.t("preset_speakers")}</div>
          ${o.map(a=>L(t,W(t.hass,a),!!s.speakers?.includes(a),c=>r(l,{speakers:dt(c?[...s.speakers??[],a]:(s.speakers??[]).filter(u=>u!==a))}),{wide:!1}))}`:_}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Ot(e,l))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>${t.t("presets")}</h4>
    ${M(t.t("presets_hint"))}
    <datalist id="nf-preset-types">${mb.map(s=>m`<option value=${s}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<fb?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("preset"),label:"Radio",type:"music",content:""}])}>+ ${t.t("preset_add")}</button>`):_}`}function sa(t,e,n){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let l=td(s.value);if(l.ok)return n(l.value);s.setCustomValidity(t.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${t.t("own_data_hint")}
    >${t.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function $b(t){let e=t.doc.settings.buttons??[],n=s=>t.change(l=>l.settings.buttons=dt(s)),r=(s,l)=>n(Vr(e,s,l)),o=Ao.map(s=>[s,t.t(`own_action_${s}`)]),i=(s,l)=>m`<div class="nf-form nf-own-button">
    ${Z(t,t.t("own_button_label"),s.label,a=>r(l,{label:a||t.t("own_button_new")}),{maxlength:60})}
    ${O(t,t.t("own_button_action"),s.action,o,a=>r(l,{action:a}))} ${Dt(t,s.icon??null,a=>r(l,{icon:a}))}
    ${s.action!=="fire_dom_event"?Z(t,t.t(`own_target_${s.action}`),s.target??"",a=>r(l,{target:a||null}),{wide:!0,placeholder:ia[s.action]}):_}
    ${s.action==="service"||s.action==="fire_dom_event"?sa(t,s,a=>r(l,{data:a})):_}
    ${P(t,t.t("own_button_state"),s.state_entity??null,void 0,H(t.hass,a=>/^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(a)),a=>r(l,{state_entity:a&&a!=="none"?a:null}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${l===0} @click=${()=>n(ii(e,l,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(Ot(e,l))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("own_buttons")}</h4>
    ${M(t.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<pb?Y(m`<button class="nf-btn" @click=${()=>n([...e,{id:D("btn"),label:t.t("own_button_new"),action:"navigate",target:null}])}>+ ${t.t("own_button_add")}</button>`):_}`}function Sb(t){let e=t.doc.settings.room_facts_off??[],n=["sun","comfort","air","circuits"].map(r=>L(t,t.t(`room_fact_${r}`),!e.includes(r),o=>t.change(i=>i.settings.room_facts_off=dt(o?e.filter(s=>s!==r):[...e,r]))));return m`<h4>${t.t("room_facts")}</h4><div class="nf-form">${n}</div>`}function nd(t){return m`<details class="nf-section">${gb(t)} ${$b(t)} ${yb(t)} ${wb(t)} ${vb(t)} ${xb(t)} ${Sb(t)}</details>`}function rd(t,e){return m`<details class="nf-section">
    <summary>🌳 ${t.t("outside_area")}</summary>
    ${_b(t,e)}
  </details>`}function od(t,e){let n=t.doc.settings.start_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${t.t("start_view")}</summary>
    ${M(t.t("start_view_hint"))}
    ${Y(m`<button class="nf-btn nf-primary" @click=${r}>${t.t("start_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.start_view=null)}>${t.t("start_view_reset")}</button>`:_)}
    ${n?m`${M(t.t("start_view_saved"))} ${M(t.t("start_view_card"))}<code class="nf-code">${ed(n)}</code>`:_}
  </details>`}function id(t){let e=t.doc.presence.map(a=>a.person),n=[...new Set([...Object.keys(t.hass?.states??{}).filter(a=>a.startsWith("person.")).sort(),...e])],r=H(t.hass,he),o=t.doc.floors.flatMap(a=>a.rooms.map(c=>({id:c.id,label:t.doc.floors.length>1?`${a.name} \xB7 ${c.name}`:c.name}))),i=(a,c)=>t.replace({...structuredClone(t.doc),presence:Qu(t.doc.presence,a,c)}),s=a=>{let c=t.doc.presence.find(d=>d.person===a),u=!a.startsWith("person.");return m`${P(t,`${W(t.hass,a)} \xB7 ${t.t("presence_sensor")}`,c?.sensor??null,void 0,Ju(r,a),d=>i(a,{sensor:d}))}
      <label class="nf-field">${t.t("presence_room")}
        <select ?disabled=${!t.admin} .value=${c?.room??""} @change=${d=>i(a,{room:d.target.value||null})}>
          <option value="">${t.t("presence_room_none")}</option>
          ${o.map(d=>m`<option value=${d.id} ?selected=${c?.room===d.id}>${d.label}</option>`)}
        </select>
      </label>
      ${u?m`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>t.replace({...structuredClone(t.doc),presence:t.doc.presence.filter(d=>d.person!==a)})}>${t.t("delete")}</button>`:_}`},l=H(t.hass,a=>/^(input_boolean|binary_sensor|device_tracker)\./.test(a)&&!n.includes(a));return m`<details class="nf-section">
    <summary>${t.t("presence")}</summary>
    <div class="nf-form">${n.length>0?n.map(s):m`<p class="nf-sub nf-wide">${t.t("no_persons")}</p>`}</div>
    <div class="nf-form">${P(t,t.t("presence_add"),null,void 0,l,a=>a&&a!=="none"&&t.replace({...structuredClone(t.doc),presence:[...t.doc.presence,{person:a,sensor:null}]}))}</div>
    ${M(t.t("presence_hint"))}
  </details>`}function sd(t,e){return m`<details class="nf-section">
    <summary>${t.t("ble")}</summary>
    ${M(t.t("ble_hint"))}
    <nf-ble-locate .host=${t} .doc=${e}></nf-ble-locate>
  </details>`}var{I:iS}=jl;var ad=t=>t.strings===void 0;var Gr=(t,e)=>{let n=t._$AN;if(n===void 0)return!1;for(let r of n)r._$AO?.(e,!1),Gr(r,e);return!0},si=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},ld=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Eb(e)}};function Mb(t){this._$AN!==void 0?(si(this),this._$AM=t,ld(this)):this._$AM=t}function Rb(t,e=!1,n=0){let r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)Gr(r[i],!1),si(r[i]);else r!=null&&(Gr(r,!1),si(r));else Gr(this,t)}var Eb=t=>{t.type==oi.CHILD&&(t._$AP??=Rb,t._$AQ??=Mb)},ai=class extends In{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),ld(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(Gr(this,e),si(this))}setValue(e){if(ad(this._$Ct))this._$Ct._$AI(e,this);else{let n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};var aa=new WeakMap,cd=Br(class extends ai{render(t){return _}update(t,[e]){let n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),_}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,n=aa.get(e);n===void 0&&(n=new WeakMap,aa.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?aa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ud=t=>t.trim().toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40);function dd(t){let e=t.t,n=t.doc.settings.card_templates??{},r=Object.keys(n),o=l=>t.change(a=>{a.settings.card_templates=Object.keys(l).length?l:void 0});t.loadCardEditor?.();let i=l=>{t.hass?.callService("nextfloor","reload_screens",l?{template:l}:{})},s=l=>{let a=ud(l.value);!a||a in n||r.length>=20||(l.value="",o({...n,[a]:{}}))};return m`<details class="nf-section">
    <summary>${e("card_templates")}${r.length?m` <span class="nf-lib-count">${r.length}</span>`:_}</summary>
    ${M(e("card_templates_hint"))}
    ${r.map(l=>m`<details class="nf-section">
        <summary>${l}</summary>
        <nextfloor-card-editor
          .hass=${t.hass}
          ${cd(a=>a&&a.setConfig({type:"custom:nextfloor-card",...n[l]}))}
          @config-changed=${a=>{a.stopPropagation();let{type:c,template:u,...d}=a.detail.config;o({...n,[l]:d})}}
        ></nextfloor-card-editor>
        ${t.admin?m`<div class="nf-actions">
              <button class="nf-btn" @click=${()=>i(l)}>${e("template_reload")}</button>
              <button class="nf-btn nf-danger" @click=${()=>o(Object.fromEntries(Object.entries(n).filter(([a])=>a!==l)))}>${e("delete")}</button>
            </div>`:_}
        ${M(e("template_use",{name:l}))}
      </details>`)}
    ${t.admin?m`<div class="nf-form">
            <label class="nf-field nf-wide">${e("template_name")}<input type="text" maxlength="40" placeholder="kitchen_tablet" @keydown=${l=>l.key==="Enter"&&s(l.target)} /></label>
          </div>
          <div class="nf-actions">
            <button class="nf-btn" @click=${l=>s(l.target.closest("details")?.querySelector("input[type=text]")??document.createElement("input"))}>${e("template_add")}</button>
            <button class="nf-btn" @click=${()=>i()}>${e("template_reload_all")}</button>
          </div>`:_}
  </details>`}var li=.05,Ab=(t,e)=>t.length===e.length&&t.every((n,r)=>Math.abs(n[0]-e[r][0])<.001&&Math.abs(n[1]-e[r][1])<.001),on=t=>new Map(t.map(e=>[e.id,e]));function Fb(t,e,n,r){let o=e.name,[i,s]=[on(t.rooms),on(e.rooms)];for(let h of e.rooms){let f=i.get(h.id);f?(f.name!==h.name&&n.push({kind:"room_renamed",floor:o,name:h.name,detail:f.name}),Ab(f.points,h.points)||n.push({kind:"room_reshaped",floor:o,name:h.name,detail:Math.round((we(h.points)-we(f.points))*10)/10})):n.push({kind:"room_added",floor:o,name:h.name})}for(let h of t.rooms)s.has(h.id)||n.push({kind:"room_removed",floor:o,name:h.name});let[l,a]=[on(t.openings),on(e.openings)];for(let h of e.openings)l.has(h.id)||n.push({kind:"opening_added",floor:o,name:h.type,detail:r(h.room_id)});for(let h of t.openings)a.has(h.id)||n.push({kind:"opening_removed",floor:o,name:h.type,detail:r(h.room_id)});let[c,u]=[on(t.furniture),on(e.furniture)];for(let h of e.furniture){let f=c.get(h.id);f?(Math.hypot(h.x-f.x,h.z-f.z)>li||Math.abs(h.rotation-f.rotation)>1||Math.abs(h.w-f.w)>li||Math.abs(h.d-f.d)>li)&&n.push({kind:"furniture_moved",floor:o,name:h.name||h.type}):n.push({kind:"furniture_added",floor:o,name:h.name||h.type})}for(let h of t.furniture)u.has(h.id)||n.push({kind:"furniture_removed",floor:o,name:h.name||h.type});let[d,p]=[new Map(t.placements.map(h=>[h.entity_id,h])),new Map(e.placements.map(h=>[h.entity_id,h]))];for(let h of e.placements){let f=d.get(h.entity_id);f?Math.hypot(h.x-f.x,h.z-f.z)>li&&n.push({kind:"device_moved",floor:o,name:h.entity_id}):n.push({kind:"device_added",floor:o,name:h.entity_id})}for(let h of t.placements)p.has(h.entity_id)||n.push({kind:"device_removed",floor:o,name:h.entity_id})}function hd(t,e){let n=[],r=on(t.floors),o=new Map([...t.floors,...e.floors].flatMap(l=>l.rooms.map(a=>[a.id,a.name]))),i=l=>o.get(l)??"";for(let l of e.floors){let a=r.get(l.id);a?Fb(a,l,n,i):n.push({kind:"floor_added",floor:l.name,name:l.name})}let s=new Set(e.floors.map(l=>l.id));for(let l of t.floors)s.has(l.id)||n.push({kind:"floor_removed",floor:l.name,name:l.name});return n}var sn=(t,e)=>t.getUint16(e,!0),Ur=(t,e)=>t.getUint32(e,!0);function pd(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=-1;for(let l=t.length-22;l>=Math.max(0,t.length-65557);l--)if(Ur(e,l)===101010256){n=l;break}if(n<0)throw new Error("not_zip");let r=sn(e,n+10),o=Ur(e,n+16),i=[],s=new TextDecoder;for(let l=0;l<r;l++){if(Ur(e,o)!==33639248)throw new Error("not_zip");let a=sn(e,o+10),c=Ur(e,o+20),u=sn(e,o+28),d=sn(e,o+30),p=sn(e,o+32),h=Ur(e,o+42),f=s.decode(t.subarray(o+46,o+46+u)),g=h+30+sn(e,h+26)+sn(e,h+28);i.push({name:f,method:a,compressedSize:c,offset:g}),o+=46+u+d+p}return i}async function fd(t,e){let n=t.subarray(e.offset,e.offset+e.compressedSize);if(e.method===0)return n;if(e.method!==8)throw new Error("zip_method");let r=new Blob([n.slice()]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(r).arrayBuffer())}var Tb={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},zb=t=>t.replace(/&(#x?[0-9a-f]+|\w+);/gi,(e,n)=>n[0]==="#"?String.fromCodePoint(Number.parseInt(n.slice(n[1]==="x"?2:1),n[1]==="x"?16:10)):Tb[n]??e);function Pb(t){let e={};for(let n of t.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g))e[n[1]]=zb(n[2]??n[3]);return e}function Ib(t){let e=[],n=null;for(let r of t.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)){let[,o,i,s,l]=r;if(o){i==="room"&&(n=null);continue}let a=Pb(s);if(i==="point"){n&&n.points.push([Number(a.x)/100,Number(a.y)/100]);continue}let c={name:i,attrs:a,...i==="room"?{points:[]}:{}};e.push(c),i==="room"&&!l&&(n=c)}return e}var ne=(t,e,n)=>Number.isFinite(Number(t[e]))&&t[e]!==void 0?Number(t[e]):n,Me=t=>Math.round(t*1e3)/1e3;function md(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.max(0,Math.min(i,((t[0]-e[0])*r+(t[1]-e[1])*o)/i)),l=[e[0]+r*s/i,e[1]+o*s/i];return{dist:Math.hypot(t[0]-l[0],t[1]-l[1]),along:s,length:i}}function Db(t){let e=`${t.name??""} ${t.catalogId??""}`.toLowerCase();return/garage|sectional|rolltor/.test(e)?"garage":/door|tür|tuer|porte|puerta|deur|haustür/.test(e)&&!/window|fenster/.test(e)?"door":"window"}function Ob(t,e){let n=t.length,r=t.map((o,i)=>{let s=t[(i+1)%n],[l,a]=[s[0]-o[0],s[1]-o[1]],c=Math.hypot(l,a)||1e-9,u=[l/c,a/c],d=[(o[0]+s[0])/2,(o[1]+s[1])/2],p=[0,0];for(let h of e){let[f,g]=[h.b[0]-h.a[0],h.b[1]-h.a[1]],y=Math.hypot(f,g)||1e-9;if(Math.abs((u[0]*g-u[1]*f)/y)>.05)continue;let b=(h.a[0]-d[0])*-u[1]+(h.a[1]-d[1])*u[0],v=((d[0]-h.a[0])*f+(d[1]-h.a[1])*g)/y;if(!(Math.abs(b)>h.thickness/2+.06||v<-.05||v>y+.05)){p=[-u[1]*b,u[0]*b];break}}return{p:[o[0]+p[0],o[1]+p[1]],dir:u}});return r.map((o,i)=>{let s=r[(i-1+n)%n],l=s.dir[0]*o.dir[1]-s.dir[1]*o.dir[0];if(Math.abs(l)<1e-6)return o.p;let a=((o.p[0]-s.p[0])*o.dir[1]-(o.p[1]-s.p[1])*o.dir[0])/l;return[s.p[0]+s.dir[0]*a,s.p[1]+s.dir[1]*a]})}function Lb(t){let e=Ft(),n={floors:0,rooms:0,openings:0,walls:0,furniture:0},r=t.filter(a=>a.name==="level"),o=r.length?r.map(a=>a.attrs.id??""):[""],i=t.filter(a=>a.name==="wall"),s=i.length?Math.max(...i.map(a=>ne(a.attrs,"height",250)))/100:2.5;return(r.length?[...r].sort((a,c)=>ne(a.attrs,"elevation",0)-ne(c.attrs,"elevation",0)||ne(a.attrs,"elevationIndex",0)-ne(c.attrs,"elevationIndex",0)):[{name:"level",attrs:{id:""}}]).forEach((a,c)=>{let u=a.attrs.id??"",d=y=>r.length?(y.attrs.level??o[0])===u:!0,p=He(D("floor"),a.attrs.name||(c===0?"Erdgeschoss":`Etage ${c+1}`),Me(ne(a.attrs,"elevation",0)/100));p.height=Me(ne(a.attrs,"height",s*100)/100);let h=i.filter(d).map(y=>({a:[ne(y.attrs,"xStart",0)/100,ne(y.attrs,"yStart",0)/100],b:[ne(y.attrs,"xEnd",0)/100,ne(y.attrs,"yEnd",0)/100],thickness:ne(y.attrs,"thickness",10)/100})),f=t.filter(y=>y.name==="room"&&d(y)&&(y.points?.length??0)>=3).map((y,b)=>({id:D("room"),name:y.attrs.name||`Raum ${b+1}`,area_id:null,points:Ob(y.points,h).map(([v,w])=>[Me(v),Me(w)]),floor_material:"wood",panel:[]}));p.rooms=f;for(let y of t.filter(b=>b.name==="doorOrWindow"&&d(b))){let b=[ne(y.attrs,"x",0)/100,ne(y.attrs,"y",0)/100],v=Math.max(.6,ne(y.attrs,"depth",30)/100+.3),w=null;for(let I of f)I.points.forEach((z,C)=>{let B=md(b,z,I.points[(C+1)%I.points.length]);B.dist<=v&&(!w||B.dist<w.dist)&&(w={room:I,edge:C,...B})});if(!w)continue;let{room:x,edge:k,along:$,length:A}=w,F=Db(y.attrs),T=Math.min(A,Math.max(.3,ne(y.attrs,"width",90)/100));p.openings.push({id:D("op"),room_id:x.id,edge:k,offset:Me(Math.min(A-T/2,Math.max(T/2,$))),width:Me(T),type:F,sill:F==="window"?Me(ne(y.attrs,"elevation",90)/100):0,height:Me(ne(y.attrs,"height",F==="window"?130:205)/100),hinge:"left",leaves:T>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null})}let g=[];for(let y of i.filter(d)){let b=[ne(y.attrs,"xStart",0)/100,ne(y.attrs,"yStart",0)/100],v=[ne(y.attrs,"xEnd",0)/100,ne(y.attrs,"yEnd",0)/100];if(Math.hypot(v[0]-b[0],v[1]-b[1])<.1)continue;let w=Math.max(.15,ne(y.attrs,"thickness",10)/100),x=T=>f.some(I=>I.points.some((z,C)=>md(T,z,I.points[(C+1)%I.points.length]).dist<w)),k=Math.hypot(v[0]-b[0],v[1]-b[1]),$=Math.max(12,Math.ceil(k/.1)),A=T=>[b[0]+(v[0]-b[0])*T/$,b[1]+(v[1]-b[1])*T/$],F=Array.from({length:$+1},(T,I)=>!x(A(I)));for(let T=0;T<=$;){if(!F[T]){T++;continue}let I=T;for(;I+1<=$&&F[I+1];)I++;let[z,C]=[A(Math.max(0,T-1)),A(Math.min($,I+1))];Math.hypot(C[0]-z[0],C[1]-z[1])>=.3&&g.push({id:D("wall"),a:[Me(z[0]),Me(z[1])],b:[Me(C[0]),Me(C[1])],thickness:Me(ne(y.attrs,"thickness",10)/100),height:y.attrs.height?Me(ne(y.attrs,"height",250)/100):null}),T=I+1}}p.walls=g,n.rooms+=f.length,n.openings+=p.openings.length,n.walls+=g.length,(f.length||g.length)&&e.floors.push(p)}),n.floors=e.floors.length,n.furniture=t.filter(a=>a.name==="pieceOfFurniture").length,{building:Te(e),report:n}}async function gd(t){let e=pd(t).find(o=>o.name==="Home.xml");if(!e)throw new Error("sh3d_no_xml");let n=new TextDecoder().decode(await fd(t,e)),r=Lb(Ib(n));if(r.report.rooms===0&&r.report.walls===0)throw new Error("sh3d_empty");return r}function Hb(t){let e=t.split(/\r?\n/),n=[];for(let r=0;r+1<e.length;r+=2){let o=Number(e[r].trim());Number.isFinite(o)&&n.push([o,e[r+1].trim()])}return n}function Cb(t){let e=t.findIndex(([r,o])=>r===9&&o==="$INSUNITS"),n=e>=0?Number(t[e+1]?.[1]):NaN;return{1:.0254,2:.3048,4:.001,5:.01,6:1}[n]??null}function Nb(t){let e=Hb(t),n=Cb(e),r=e.findIndex(([s,l],a)=>s===2&&l==="ENTITIES"&&e[a-1]?.[1]==="SECTION"),o=[];if(r<0)return{shapes:o,unit:n};let i=r+1;for(;i<e.length&&!(e[i][0]===0&&e[i][1]==="ENDSEC");){let[s,l]=e[i];if(s!==0){i++;continue}let a=i+1;for(;a<e.length&&e[a][0]!==0;)a++;let c=e.slice(i+1,a);if(l==="LINE"){let u=p=>Number(c.find(([h])=>h===p)?.[1]??NaN),d=[[u(10),u(20)],[u(11),u(21)]];d.every(([p,h])=>Number.isFinite(p)&&Number.isFinite(h))&&o.push({points:d,closed:!1})}else if(l==="LWPOLYLINE"){let u=c.filter(([f])=>f===10).map(([,f])=>Number(f)),d=c.filter(([f])=>f===20).map(([,f])=>Number(f)),p=Number(c.find(([f])=>f===70)?.[1]??0),h=u.map((f,g)=>[f,d[g]]).filter(([f,g])=>Number.isFinite(f)&&Number.isFinite(g));h.length>=2&&o.push({points:h,closed:(p&1)===1})}i=a}return{shapes:o,unit:n}}var _d=t=>Math.round(t*1e3)/1e3;function bd(t){let{shapes:e,unit:n}=Nb(t);if(!e.length)throw new Error("dxf_empty");let r=e.flatMap(h=>h.points),o=Math.max(Math.max(...r.map(h=>h[0]))-Math.min(...r.map(h=>h[0])),Math.max(...r.map(h=>h[1]))-Math.min(...r.map(h=>h[1]))),i=n??(o>2e3?.001:o>200?.01:1),s=Math.min(...r.map(h=>h[0])),l=Math.max(...r.map(h=>h[1])),a=([h,f])=>[_d((h-s)*i),_d((l-f)*i)],c=He(D("floor"),"Erdgeschoss",0),u=[],d=[];for(let h of e){let f=h.points.map(a);if(h.closed&&f.length>=3)u.push({id:D("room"),name:`Raum ${u.length+1}`,area_id:null,points:f,floor_material:"wood",panel:[]});else for(let g=0;g+1<f.length;g++)Math.hypot(f[g+1][0]-f[g][0],f[g+1][1]-f[g][1])>.05&&d.push({id:D("wall"),a:f[g],b:f[g+1]})}c.rooms=u,c.walls=d;let p=Ft();return p.floors=[c],{building:Te(p),report:{floors:1,rooms:u.length,openings:0,walls:d.length,furniture:0}}}var Ze=t=>Math.round(t*100)/100;function Bb(t,e){let n=t.category;return typeof n=="string"?n:n&&typeof n=="object"?Object.keys(n)[0]??e:e}function Wb(t,e){let n=t,r=n?.transform,o=n?.dimensions;if(!n||!Array.isArray(r)||r.length<16||!Array.isArray(o)||o.length<3)return null;let i=l=>Number(l),s=Math.hypot(i(r[0]),i(r[2]));return![...r.slice(0,16),...o.slice(0,3)].every(l=>Number.isFinite(i(l)))||s<1e-6?null:{centre:[i(r[12]),i(r[13]),i(r[14])],dir:[i(r[0])/s,i(r[2])/s],size:[i(o[0]),i(o[1]),i(o[2])],kind:Bb(n,e)}}var Hn=(t,e,n)=>(Array.isArray(t[e])?t[e]:[]).map(r=>Wb(r,n)).filter(r=>!!r);function Vb(t){if(t.length<3)return null;let e=t.map(a=>{let c=a.size[0]/2;return[[a.centre[0]-a.dir[0]*c,a.centre[2]-a.dir[1]*c],[a.centre[0]+a.dir[0]*c,a.centre[2]+a.dir[1]*c]]}),n=(a,c)=>Math.hypot(a[0]-c[0],a[1]-c[1]),r=.4,o=new Set([0]),i=[e[0][0]],s=[0],l=e[0][1];for(;o.size<t.length;){let a=null;for(let d=0;d<t.length;d++)if(!o.has(d))for(let p of[!1,!0]){let h=n(l,e[d][p?1:0]);h<=r&&(!a||h<a.d)&&(a={i:d,flip:p,d:h})}if(!a)break;let[c,u]=a.flip?[e[a.i][1],e[a.i][0]]:[e[a.i][0],e[a.i][1]];i.push([(l[0]+c[0])/2,(l[1]+c[1])/2]),s.push(a.i),o.add(a.i),l=u}return o.size<t.length||n(l,i[0])>r?null:(i[0]=[(l[0]+i[0][0])/2,(l[1]+i[0][1])/2],{points:i,edgeWall:s})}function yd(t){let e=[],n=[];for(let l of t){let a=l.size[0]/2;for(let c of[-1,1])e.push(l.centre[0]+c*l.dir[0]*a),n.push(l.centre[2]+c*l.dir[1]*a)}let[r,o,i,s]=[Math.min(...e),Math.max(...e),Math.min(...n),Math.max(...n)];return[[r,i],[o,i],[o,s],[r,s]]}function Kb(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.min(i,Math.max(0,((t[0]-e[0])*r+(t[1]-e[1])*o)/i));return{dist:Math.hypot(t[0]-(e[0]+r/i*s),t[1]-(e[1]+o/i*s)),along:s,length:i}}var Gb={sofa:"sofa",bed:"bed",table:"table",chair:"chair",bathtub:"bathtub",toilet:"wc",sink:"sink",refrigerator:"fridge",stove:"stove",oven:"stove",dishwasher:"dishwasher",washerDryer:"washer",storage:"tall_cabinet",television:"tv_board"};function wd(t){let e=t;return!e||typeof e!="object"||"floors"in e||"settings"in e?!1:(Array.isArray(e.rooms)?e.rooms:[e]).some(r=>r&&Array.isArray(r.walls)&&Hn(r,"walls","wall").length>0)}function vd(t){let e=t,r=(Array.isArray(e.rooms)?e.rooms:[e]).filter(y=>y&&typeof y=="object").map(y=>({walls:Hn(y,"walls","wall"),doors:[...Hn(y,"doors","door"),...Hn(y,"openings","opening")],windows:Hn(y,"windows","window"),objects:Hn(y,"objects","object")})).filter(y=>y.walls.length);if(!r.length)throw new Error("roomplan_empty");let o=r.flatMap(y=>y.walls),i=Math.min(...o.map(y=>y.centre[1]-y.size[1]/2)),s=r.map(y=>Vb(y.walls)),l=r.flatMap((y,b)=>s[b]?.points??yd(y.walls)),[a,c]=[Math.min(...l.map(y=>y[0]))-.5,Math.min(...l.map(y=>y[1]))-.5],u=([y,b])=>[Ze(y-a),Ze(b-c)],d=He(D("floor"),"Erdgeschoss",0);d.height=Ze(Math.max(2.2,Math.min(4,Math.max(...o.map(y=>y.size[1])))));let p=[],h=[];r.forEach((y,b)=>{let w=(s[b]?.points??yd(y.walls)).map(u),x={id:D("room"),name:`Raum ${b+1}`,area_id:null,points:w,floor_material:"wood",panel:[]};p.push(x);for(let k of[...y.doors.map($=>({v:$,window:!1})),...y.windows.map($=>({v:$,window:!0}))]){let $=[k.v.centre[0]-a,k.v.centre[2]-c],A=null;if(w.forEach((z,C)=>{let B=Kb($,z,w[(C+1)%w.length]);B.dist<=.6&&(!A||B.dist<A.dist)&&(A={edge:C,...B})}),!A)continue;let F=A,T=Math.min(F.length,Math.max(.3,k.v.size[0])),I=k.v.kind==="opening";d.openings.push({id:D("op"),room_id:x.id,edge:F.edge,offset:Ze(Math.min(F.length-T/2,Math.max(T/2,F.along))),width:Ze(T),type:k.window?"window":"door",sill:k.window?Ze(Math.max(0,k.v.centre[1]-k.v.size[1]/2-i)):0,height:Ze(k.v.size[1]),hinge:"left",leaves:T>1.4?2:1,swing:"in",...I?{style:"passage"}:{},cover:null,contact:null,contact2:null,tilt:null})}for(let k of y.objects){let $=Gb[k.kind];if(!$)continue;let[A,F,T]=[k.size[0],k.size[2],k.size[1]];A<.1||F<.1||h.push({id:D("f"),type:$,x:Ze(k.centre[0]-a),z:Ze(k.centre[2]-c),rotation:Math.round((Math.atan2(k.dir[1],k.dir[0])*180/Math.PI+360)%360),w:Ze(A),d:Ze(F),h:Ze(T),variant:null,entity:null,power:null})}}),d.rooms=p,d.furniture=h;let f=Ft();f.floors=[d];let g=r.reduce((y,b)=>y+b.objects.length,0)-h.length;return{building:Te(f),report:{floors:1,rooms:p.length,openings:d.openings.length,walls:0,furniture:g}}}var jr=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)&&"ref"in t;function Ub(t){let e=0,n=()=>{for(;t[e]===" ";)e++;let o=t[e];if(o==="("){e++;let a=[];for(;e<t.length&&t[e]!==")";){for(a.push(n());t[e]===" ";)e++;t[e]===","&&e++}return e++,a}if(o==="'"){let a="";for(e++;e<t.length;)if(t[e]==="'"&&t[e+1]==="'")a+="'",e+=2;else if(t[e]==="'"){e++;break}else a+=t[e++];return jb(a)}if(o==="#"){let a=/^#(\d+)/.exec(t.slice(e));return e+=a[0].length,{ref:Number(a[1])}}if(o==="$"||o==="*")return e++,null;let i=/^[^,()]+/.exec(t.slice(e)),s=i?i[0].trim():"";if(e+=i?i[0].length:1,t[e]==="(")return n();let l=Number(s);return Number.isFinite(l)&&s!==""?l:s},r=[];for(;e<t.length;){for(r.push(n());t[e]===" ";)e++;if(t[e]===",")e++;else break}return r}function jb(t){return t.replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>String.fromCharCode(...(n.match(/.{4}/g)??[]).map(r=>parseInt(r,16)))).replace(/\\S\\(.)/g,(e,n)=>String.fromCharCode(n.charCodeAt(0)+128))}function Zb(t){let e=new Map,n=t.slice(Math.max(0,t.indexOf("DATA;")));for(let r of n.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([\s\S]*?)\)\s*;(?=\s*(?:#|ENDSEC))/g))e.set(Number(r[1]),{type:r[2],args:Ub(r[3])});return e}var kd={x:0,y:0,z:0,c:1,s:0},xd=(t,e)=>({x:t.x+t.c*e.x-t.s*e.y,y:t.y+t.s*e.x+t.c*e.y,z:t.z+e.z,c:t.c*e.c-t.s*e.s,s:t.s*e.c+t.c*e.s});function $d(t){let e=Zb(t);if(!e.size)throw new Error("ifc_empty");let n=k=>jr(k)?e.get(k.ref):void 0,r=k=>typeof k=="number"?k:NaN,o=k=>(n(k)?.args[0]??[]).map($=>r($)),i=[...e.values()].find(k=>k.type==="IFCSIUNIT"&&k.args[1]===".LENGTHUNIT."),s=i?{".MILLI.":.001,".CENTI.":.01,".DECI.":.1}[String(i.args[2])]??1:1,l=k=>{let $=n(k);if(!$)return kd;let[A=0,F=0,T=0]=o($.args[0]),I=n($.type==="IFCAXIS2PLACEMENT3D"?$.args[2]:$.args[1]),[z=1,C=0]=(I?.args[0]??[]).map(q=>r(q)),B=Math.hypot(z,C)||1;return{x:A||0,y:F||0,z:T||0,c:z/B,s:C/B}},a=(k,$=0)=>{let A=n(k);return!A||A.type!=="IFCLOCALPLACEMENT"||$>30?kd:xd(a(A.args[0],$+1),l(A.args[1]))},c=k=>{for(let $ of n(k)?.args[2]??[])for(let A of n($)?.args[3]??[]){let F=n(A);if(F?.type!=="IFCEXTRUDEDAREASOLID")continue;let T=n(F.args[0]),I=xd(l(F.args[1]),l(T?.args[2])),z=[];if(T?.type==="IFCRECTANGLEPROFILEDEF"){let[C,B]=[r(T.args[3])/2,r(T.args[4])/2];z=[[-C,-B],[C,-B],[C,B],[-C,B]]}else if(T?.type==="IFCARBITRARYCLOSEDPROFILEDEF"){let C=n(T.args[2]);C?.type==="IFCPOLYLINE"&&(z=(C.args[0]??[]).map(B=>o(B)))}if(z=z.filter(C=>Number.isFinite(C[0])&&Number.isFinite(C[1])),z.length>3&&Math.hypot(z[0][0]-z[z.length-1][0],z[0][1]-z[z.length-1][1])<1e-6&&z.pop(),z.length>=3)return z.map(([C,B])=>[I.x+I.c*C-I.s*B,I.y+I.s*C+I.c*B])}return null},u=new Map;for(let[,k]of e){if(k.type==="IFCRELAGGREGATES"&&jr(k.args[4]))for(let $ of k.args[5]??[])jr($)&&u.set($.ref,k.args[4].ref);if(k.type==="IFCRELCONTAINEDINSPATIALSTRUCTURE"&&jr(k.args[5]))for(let $ of k.args[4]??[])jr($)&&u.set($.ref,k.args[5].ref)}let d=[...e].filter(([,k])=>k.type==="IFCBUILDINGSTOREY").map(([k,$])=>({id:k,name:String($.args[7]||$.args[2]||"")||null,elevation:r($.args[9])*s}));d.sort((k,$)=>(k.elevation||0)-($.elevation||0));let p=[];for(let[k,$]of e){if($.type!=="IFCSPACE")continue;let A=c($.args[6]);if(!A)continue;let F=a($.args[5]),T=A.map(([z,C])=>[(F.x+F.c*z-F.s*C)*s,(F.y+F.s*z+F.c*C)*s]),I=String($.args[7]||$.args[2]||"")||`Raum ${p.length+1}`;p.push({storey:u.get(k)??null,name:I,ring:T})}if(!p.length)throw new Error("ifc_empty");let h=p.flatMap(k=>k.ring),f=Math.min(...h.map(k=>k[0])),g=Math.max(...h.map(k=>k[1])),y=k=>Math.round(k*1e3)/1e3,b=[],v=new Map;if(d.filter(k=>p.some($=>$.storey===k.id)).forEach((k,$)=>{let A=He(D("floor"),k.name??`Etage ${$+1}`,Number.isFinite(k.elevation)?y(k.elevation):$*2.8);b.push(A),v.set(k.id,A)}),p.some(k=>k.storey===null||!v.has(k.storey))){let k=He(D("floor"),b.length?"Weitere R\xE4ume":"Erdgeschoss",b.length?b[b.length-1].elevation+2.8:0);b.push(k),v.set(null,k)}b.forEach((k,$)=>{let A=b[$+1];A&&A.elevation-k.elevation>1.8&&(k.height=y(A.elevation-k.elevation-.2))});for(let k of p)v.get(k.storey!==null&&v.has(k.storey)?k.storey:null).rooms.push({id:D("room"),name:k.name,area_id:null,points:k.ring.map(([A,F])=>[y(A-f),y(g-F)]),floor_material:"wood",panel:[]});let x=Ft();return x.floors=b,{building:Te(x),report:{floors:b.length,rooms:p.length,openings:0,walls:0,furniture:0}}}var Md="nextfloor",qb="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|conversation|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|stt|sun|switch|text|time|timer|todo|tts|update|vacuum|valve|water_heater|weather|zone",Sd=new RegExp(`^(?:${qb})\\.[a-z0-9_]+$`),Yb=/^[0-9a-f]{32}$/,Xb=new Set(["area_id","ha_floor"]),Qb=new Set(["sub_areas"]),Jb=new Set(["tap","show_when","pictures","moods"]);function la(t){if(typeof t=="string")return Sd.test(t)||Yb.test(t)?null:t;if(Array.isArray(t))return t.map(e=>la(e)).filter(e=>e!==null);if(t&&typeof t=="object"){let e={};for(let[n,r]of Object.entries(t))Sd.test(n)||Jb.has(n)||(Xb.has(n)||Qb.has(n)?e[n]=null:e[n]=la(r));return e}return t}var ey=["wall_exterior","wall_interior","wall_paint_outside","wall_paint_inside","grid","north","roof","weather_effects","rain_warning","sun_patches","lock_plan","start_view","units","motion_markers_active","room_double_tap"];function Rd(t){let e=structuredClone(t),n={};for(let o of ey)e.settings?.[o]!==void 0&&(n[o]=e.settings[o]);let r=e.settings?.backdrop;r&&(r.color||r.dim!=null)&&(n.backdrop={color:r.color??null,dim:r.dim??null}),e.settings=n,e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null,consumption:null,gas:null,water:null},e.presence=[];for(let o of e.floors){o.background=null,o.placements=[],o.power_entity=null,o.ha_floor=null;for(let i of o.rooms)Object.assign(i,{area_id:null,sub_areas:null,panel:[],hidden:[],no_state:[]});o.furniture.forEach(i=>{Object.assign(i,{entity:null,power:null}),delete i.effect_animations,i.picture&&!(i.picture.startsWith("image:")||i.picture.startsWith("https://"))&&(i.picture=null)}),o.openings.forEach(i=>Object.assign(i,{cover:null,contact:null,tilt:null}))}return la(e)}function Ed(t,e){return{format:Md,version:1,exported_at:new Date().toISOString(),building:e?Rd(t):structuredClone(t)}}var ty=t=>!!t&&(t.version===1||t.version===void 0)&&Array.isArray(t.floors)&&t.floors.every(e=>!!e&&typeof e=="object"),ny="https://therealmrbk.github.io/NextFloor/preview/?shared&noshowcase";function Ad(t,e,n,r,o=ny){let i=new Set(t.floors.flatMap(c=>c.furniture.map(u=>u.type)).filter(c=>c.startsWith("pack:")).map(c=>c.split(":")[1])),s={building:Rd(t),packs:e.filter(c=>!c.builtin&&i.has(c.id))},l=JSON.stringify(s).replace(/</g,"\\u003c"),a=c=>c.replace(/[&<>"]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[u]);return`<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${a(n)}</title>
<style>html,body{margin:0;height:100%;background:#111;color:#ddd;font-family:system-ui,sans-serif}iframe{border:0;width:100%;height:100%;display:block}noscript p{padding:2em}</style></head>
<body><iframe id="nf" src="${a(o)}" allow="fullscreen" title="${a(n)}"></iframe>
<noscript><p>${a(r)}</p></noscript>
<script id="nf-plan" type="application/json">${l}<\/script>
<script>
const data = JSON.parse(document.getElementById("nf-plan").textContent);
const frame = document.getElementById("nf");
addEventListener("message", (e) => {
  if (e.source === frame.contentWindow && e.data && e.data.type === "nextfloor-share-ready") frame.contentWindow.postMessage({ type: "nextfloor-share", building: data.building, packs: data.packs }, "*");
});
<\/script></body></html>
`}function Fd(t){let e;try{e=JSON.parse(t)}catch{throw new Error("not_json")}let n=e,r=n?.format===Md?n.building:e;if(!ty(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),Te(r)}var ry=t=>!/^https?:\/\//.test(t)&&!t.startsWith("camera:");function Td(t){let e=new Set;for(let n of t.floors){n.background?.image_id&&e.add(n.background.image_id);let r=n.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&ry(o)&&e.add(o)}return[...e]}function zd(t,e,n="application/json"){let r=document.createElement("a"),o=URL.createObjectURL(new Blob([e],{type:n}));Object.assign(r,{href:o,download:t}),r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}var oy={api:{listHistory:ql,restoreSnapshot:Jl,takeSnapshot:Yl,getSnapshot:Xl,deleteSnapshot:Ql,fetchBackup:tc,restoreBackup:nc,fetchImage:$o,storeImage:St},alert:t=>alert(t),confirm:t=>confirm(t),prompt:t=>prompt(t),download:zd,today:()=>new Date().toISOString().slice(0,10)},iy=t=>String(t?.message??t),ci=class{host;deps;history=null;busy=!1;compare=null;constructor(e,n=oy){this.host=e,this.deps=n}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:n,t:r}=this.host;!n||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(n,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}async saveVersion(){let{hass:e,t:n}=this.host,r=e?this.deps.prompt?.(n("version_name_prompt"))?.trim():null;!e||!r||(await this.deps.api.takeSnapshot(e,r.slice(0,60)),this.host.say(n("version_saved",{name:r})),await this.loadHistory())}async compareWith(e){let{hass:n}=this.host,r=this.deps.api.getSnapshot;if(!n||!r)return;if(this.compare?.snapshot.id===e.id)return this.compare=null,this.host.refresh();let o=Te(await r(n,e.id));this.compare={snapshot:e,entries:hd(o,this.host.doc)},this.host.refresh()}async deleteVersion(e){let{hass:n,t:r}=this.host,o=this.deps.api.deleteSnapshot;!n||!o||!this.deps.confirm(r("version_delete_confirm",{name:e.name??this.timeOf(e)}))||(await o(n,e.id),this.compare?.snapshot.id===e.id&&(this.compare=null),await this.loadHistory())}exportShareView(){let e=this.host.t,n=Ad(this.host.doc,hr(),e("share_view_title"),e("share_view_needs_js"));this.deps.download(`nextfloor-${e("share_view_file")}-${this.deps.today()}.html`,n,"text/html"),this.host.say(e("share_view_done"))}exportPlan(e){let n=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${n}-${this.deps.today()}.json`,JSON.stringify(Ed(this.host.doc,e),null,2))}async importPlan(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o,i=r("backup_import_confirm");try{if(/\.sh3d$/i.test(e.name)){let s=await gd(new Uint8Array(await e.arrayBuffer()));o=s.building,i=`${r("import_sh3d_found",{...s.report})}

${i}`}else if(/\.ifc$/i.test(e.name)){let s=$d(await e.text());o=s.building,i=`${r("import_ifc_found",{floors:s.report.floors,rooms:s.report.rooms})}

${i}`}else if(/\.dxf$/i.test(e.name)){let s=bd(await e.text());o=s.building,i=`${r("import_dxf_found",{rooms:s.report.rooms,walls:s.report.walls})}

${i}`}else{let s=await e.text(),l=null;try{l=JSON.parse(s)}catch{}if(wd(l)){let a=vd(l);o=a.building,i=`${r("import_roomplan_found",{rooms:a.report.rooms,openings:a.report.openings,skipped:a.report.furniture})}

${i}`}else o=Fd(s)}}catch(s){let l=s.message,a={not_json:"import_error_not_json",not_plan:"import_error_not_plan",not_zip:"import_error_sh3d",sh3d_no_xml:"import_error_sh3d",sh3d_empty:"import_error_sh3d_empty",dxf_empty:"import_error_dxf_empty",ifc_empty:"import_error_ifc_empty",roomplan_empty:"import_error_roomplan_empty"};this.deps.alert(a[l]?r(a[l]):r("backup_import_error",{error:l}));return}this.deps.confirm(i)&&(await this.deps.api.takeSnapshot(n).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t:n}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of Td(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${n("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(n("backup_import_error",{error:iy(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(n,o.building,o.packs??[]),s=0;for(let[a,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(n,a,c).then(()=>s++,()=>{});this.host.adopt(Te(i.building)),this.host.packsChanged();let l=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(a=>a.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+l)}catch(i){let{code:s,message:l}=i??{};this.deps.alert(r("backup_import_error",{error:l??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};function qe(t,e){if(!gt(e))return xe(t,`furn_${e}`);let n=G(e);return n?Ye(n,e,t?.language??navigator.language):xe(t,"pack_missing_item")}function Ye(t,e,n){return t.name[n.split("-")[0]]??ti(n,e)??mc(t,n)}function Oe(t,e){return ti(e,`packname:${t.id}`)??gc(t,e)}function Pd(t,e){return t.name[e.split("-")[0]]??ti(e,`color:${t.id}`)??t.name.en??Object.values(t.name)[0]}var Id=(t,e,n="application/json,.json")=>m`<label class="nf-btn nf-upload"
  >${t}<input
    type="file"
    accept=${n}
    @change=${r=>{let o=r.target,i=o.files?.[0];o.value="",e(i)}}
  />
</label>`,sy={added:"\uFF0B",removed:"\u2212",renamed:"\u270E",reshaped:"\u2922",moved:"\u2194"};function ay(t,e){let n=t.t;if(!e.length)return m`<p class="nf-sub nf-diff">${n("version_same")}</p>`;let r=i=>i.kind.startsWith("furniture")?qe(t.hass,i.name)||i.name:i.kind.startsWith("device")?String(t.hass?.states[i.name]?.attributes.friendly_name??i.name):i.kind.startsWith("opening")?n(i.name==="door"?"opening_door":i.name==="garage"?"opening_garage":"opening_window"):i.name,o=[...new Set(e.map(i=>i.floor))];return m`<div class="nf-diff">
    ${M(n("version_diff_n",{n:e.length}))}
    ${o.map(i=>m`<h4 class="nf-check-floor">${i}</h4>
        <ul class="nf-diff-list">
          ${e.filter(s=>s.floor===i).map(s=>{let l=s.kind.slice(s.kind.indexOf("_")+1),a=typeof s.detail=="number"?`${s.detail>0?"+":""}${U(t.hass,s.detail,1)}`:s.detail??"";return m`<li><span aria-hidden="true">${sy[l]??"\u2022"}</span> ${n(`diff_${s.kind}`,{name:r(s),detail:a})}</li>`})}
        </ul>`)}
  </div>`}function Dd(t,e){let n=t.t,r=e.history,o=r===null?M(n("loading")):r.length===0?M(n("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                  <span>${i.name?m`<b>📌 ${i.name}</b> · `:_}${e.timeOf(i)} <span class="nf-muted">· ${n("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                  <span class="nf-version-actions">
                    <button class="nf-link" aria-pressed=${e.compare?.snapshot.id===i.id} @click=${()=>{e.compareWith(i)}}>${n("version_compare")}</button>
                    <button class="nf-link" @click=${()=>e.restorePoint(i)}>${n("backup_restore")}</button>
                    ${i.name?m`<button class="nf-link" title=${n("delete")} @click=${()=>{e.deleteVersion(i)}}>✕</button>`:_}
                  </span>
                </div>
                ${e.compare?.snapshot.id===i.id?ay(t,e.compare.entries):_}`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${n("backup")}</summary>
    <h4 class="nf-lib-head">${n("backup_history")}</h4>
    ${Y(m`<button class="nf-btn" title=${n("version_save_hint")} @click=${()=>{e.saveVersion()}}>📌 ${n("version_save")}</button>`)}
    ${o}
    <h4 class="nf-lib-head">${n("backup_file")}</h4>
    ${Y(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${n("backup_export")}</button>`,m`<button class="nf-btn" title=${n("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${n("backup_export_share")}</button>`,m`<button class="nf-btn" title=${n("share_view_hint")} @click=${()=>e.exportShareView()}>🔗 ${n("share_view")}</button>`,Id(n("backup_import"),i=>{e.importPlan(i)},"application/json,.json,.sh3d,.dxf,.ifc"))}
    ${M(n("backup_hint"))} ${M(n("import_other_hint"))}
    <h4 class="nf-lib-head">${n("backup_full")}</h4>
    ${Y(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":n("backup_full_export")}</button>`,Id(n("backup_full_import"),i=>{e.importFull(i)}))}
    ${M(n("backup_full_hint"))}
  </details>`}function Od(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var Ld=["body","wood","fabric","white","metal","dark"],Hd={body:"#172238",wood:"#19233c",fabric:"#1a2644",white:"#1d2946",metal:"#2a3a60",dark:"#0b111f"};var ly=["neon","blueprint","day","own"],Cd=["dark","light","lines","background"],Nd={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22"};var k2=["auto",...ly];var an=(t,e,n)=>Math.min(n,Math.max(e,t)),cy=t=>(Math.round(t)%360+360)%360,ca=(t,e)=>cy(t+e);function Bd(t,e,n){return n?[...new Set([...t,e])]:t.filter(r=>r!==e)}function Wd(t,e,n){let r=t.t,o=s=>()=>n(ca(e,s)),i=R`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${r("compass_title")}>
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
  </div>`}var uy="https://tile.openstreetmap.org/{z}/{x}/{y}.png";var dy=40075016686e-3,ua=Math.PI/180,Zr=18,qr=.5,hy=160;function py(t,e,n){let r=2**n,o=(e+180)/360*r,i=(1-Math.log(Math.tan(t*ua)+1/Math.cos(t*ua))/Math.PI)/2*r;return[o,i]}var fy=(t,e)=>dy*Math.cos(t*ua)/2**e;function Vd(t,e,n,r=hy){let[o,i]=py(t,e,n),s=fy(t,n),l=r/s,a=2**n-1,c=[];for(let u=Math.floor(i-l);u<=Math.floor(i+l);u++)for(let d=Math.floor(o-l);d<=Math.floor(o+l);d++){if(u<0||u>a)continue;let p=(d%(a+1)+a+1)%(a+1);c.push({x:p,y:u,z:n,east:(d-o)*s,north:-(u-i)*s,size:s})}return c}function Kd(t,e){return t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)).replace("{s}","abc"[(e.x+e.y)%3])}var Gd=t=>t.url&&t.url.startsWith("https://")?t.url:uy;var ui=t=>!!t&&t.on===!0&&Number.isFinite(t.lat)&&Number.isFinite(t.lon),Ud=t=>({x:t.x??0,z:t.z??0,opacity:t.opacity??qr,zoom:t.zoom??Zr});function my(t){let e=[],n=[];for(let o of t.floors){for(let i of o.rooms)for(let[s,l]of i.points)e.push(s),n.push(l);for(let i of o.outdoor??[])for(let[s,l]of i.points)e.push(s),n.push(l)}if(!e.length)return[0,0];let r=o=>Math.round((Math.min(...o)+Math.max(...o))/2*100)/100;return[r(e),r(n)]}function jd(t,e){let[n,r]=my(t);return{on:!0,lat:e?.lat??0,lon:e?.lon??0,x:n,z:r,opacity:qr,zoom:Zr,url:null}}function Zd(t,e,n){let r=o=>Math.round(o*100)/100;return{...t,x:r((t.x??0)+e),z:r((t.z??0)+n)}}function qd(t){let e=t.trim();return e===""?null:/^https:\/\/\S+$/.test(e)&&["{z}","{x}","{y}"].every(n=>e.includes(n))?e:void 0}var gy=["15","16","17","18","19"],_y=["1","5","20"],di="5";function Yd(t,e,n){let r=t.t,o=e.settings.map??null,i=t.hass?.config,s=ui(o),l=u=>{if(!u)return n(o?{...o,on:!1}:null);n(o?{...o,on:!0}:jd(e,{lat:i?.latitude,lon:i?.longitude}))},a=u=>o&&n({...o,...u}),c=(u,d)=>()=>o&&n(Zd(o,u*Number(di),d*Number(di)));return m`<div class="nf-map-settings nf-wide">
    ${L(t,r("map_on"),s,l,{title:r("map_hint")})}
    ${o&&o.on?m`<div class="nf-form">
          ${E(t,r("map_lat"),o.lat,u=>a({lat:Math.max(-85,Math.min(85,u))}),1e-4)}
          ${E(t,r("map_lon"),o.lon,u=>a({lon:Math.max(-180,Math.min(180,u))}),1e-4)}
          ${i?.latitude!==void 0&&i.longitude!==void 0?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>a({lat:i.latitude,lon:i.longitude})}>${r("map_use_ha")}</button>`:_}
          ${E(t,r("map_opacity"),Math.round((o.opacity??qr)*100),u=>a({opacity:Math.max(5,Math.min(100,u))/100}),5,5)}
          ${O(t,r("map_zoom"),String(o.zoom??Zr),gy.map(u=>[u,u==="15"?`${u} \xB7 ${r("map_zoom_coarse")}`:u==="19"?`${u} \xB7 ${r("map_zoom_fine")}`:u]),u=>a({zoom:Number(u)}))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${r("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,-1)}>▲</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(-1,0)}>◀</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(1,0)}>▶</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,1)}>▼</button>
            </div>
            ${O(t,r("map_step"),di,_y.map(u=>[u,`${u} m`]),u=>di=u,{wide:!1})}
          </div>
          ${Z(t,r("map_url"),o.url??"",u=>{let d=qd(u);d!==void 0&&a({url:d})},{wide:!0,placeholder:"https://\u2026/{z}/{x}/{y}.png",maxlength:300})}
          ${M(r("map_hint"),"nf-wide")}
        </div>`:_}
  </div>`}var by=["none","flat","gable","custom"];function yy(t,e,n){let r=t.t,o=!!e,i=s=>n({color:null,image:null,dim:.35,...e??{},...s});return m`<div class="nf-sub nf-wide">${r("backdrop")}</div>
    ${L(t,r("backdrop"),o,s=>n(s?{color:"#101828",image:null,dim:.35}:null))}
    ${o?m`<label class="nf-field"
            >${r("backdrop_color")}
            <input type="color" .value=${e?.color??"#101828"} ?disabled=${!t.admin} @change=${s=>i({color:s.target.value})}
          /></label>
          ${E(t,r("backdrop_dim"),Math.round((e?.dim??.35)*100),s=>i({dim:an(s,0,80)/100}),5,0)}
          ${Z(t,r("backdrop_image"),e?.image??"",s=>i({image:s||null}),{wide:!0,placeholder:"/local/hintergrund.jpg"})}
          ${M(r("backdrop_hint"),"nf-wide")}`:_}`}function wy(t,e,n){let r=t.t,o=H(t.hass,i=>!e.includes(i)&&/^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(i));return m`<div class="nf-sub nf-wide">${r("status_entities")}</div>
    ${e.length?m`<div class="nf-chips nf-wide">
          ${e.map(i=>m`<span class="nf-chip">${W(t.hass,i)}
              ${t.admin?m`<button class="nf-chip-x" title=${r("delete")} aria-label=${`${r("delete")}: ${W(t.hass,i)}`} @click=${()=>n(e.filter(s=>s!==i))}>×</button>`:_}</span
            >`)}
        </div>`:_}
    ${e.length<12?P(t,r("status_add"),null,void 0,o,i=>i&&i!=="none"&&n([...e,i])):_}
    ${M(r("status_entities_hint"),"nf-wide")}`}function Xd(t,e){let n=t.t,r=t.doc.settings,o=c=>t.replace({...structuredClone(t.doc),settings:{...structuredClone(t.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=by.map(c=>[c,n(`roof_${c}`)]),l=r.weather_effects??Ec,a=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${n("settings")}</summary>
    <div class="nf-form">
      ${E(t,n("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:an(c,.02,1)}),.01,.02)}
      ${E(t,n("wall_interior"),r.wall_interior,c=>o({wall_interior:an(c,.02,1)}),.01,.02)}
      ${De(t,n("wall_paint_outside"),r.wall_paint_outside,To,c=>o({wall_paint_outside:c}))}
      ${De(t,n("wall_paint_inside"),r.wall_paint_inside,zo,c=>o({wall_paint_inside:c}))}
      ${M(n("wall_paint_hint"),"nf-wide")}
      ${Ld.map(c=>De(t,n(`furn_color_${c}`),r.furniture_colors?.[c],Hd[c],u=>{let d={...r.furniture_colors,[c]:u};u||delete d[c],o({furniture_colors:Object.keys(d).length?d:null})}))}
      ${M(n("furn_color_hint"),"nf-wide")}
      ${Cd.map(c=>De(t,n(`own_look_${c}`),r.own_look?.[c],Nd[c],u=>{let d={...r.own_look,[c]:u??void 0};u||delete d[c],o({own_look:Object.keys(d).length?d:null})}))}
      ${M(n("own_look_hint"),"nf-wide")}
      ${E(t,n("grid"),r.grid,c=>o({grid:an(c,.01,1)}),.01,.01)}
      ${O(t,n("units"),r.units==="imperial"?"imperial":"metric",[["metric",n("units_metric")],["imperial",n("units_imperial")]],c=>o({units:c==="imperial"?"imperial":null}),{title:n("units_hint")})}
      ${Wd(t,r.north,c=>o({north:c}))}
      ${Yd(t,t.doc,c=>o({map:c}))}
      ${O(t,n("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${a?O(t,n("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",n("roof_ridge_long")],["short",n("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):_}
      ${a?E(t,n("roof_pitch"),r.roof.pitch,c=>i({pitch:an(c,5,60)}),1,5):_}
      ${r.roof.type!=="none"?E(t,n("roof_overhang"),r.roof.overhang,c=>i({overhang:an(c,0,2)}),.05,0):_}
      ${t.hass?P(t,n("weather_entity"),r.weather_entity??null,Od(t.hass,null),H(t.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):_}
      <div class="nf-sub nf-wide">${n("weather_effects")}</div>
      ${Rc.map(c=>L(t,n(`weather_effect_${c}`),l.includes(c),u=>o({weather_effects:Bd(l,c,u)}),{wide:!1}))}
      ${L(t,n("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${t.hass&&r.rain_warning!==!1?P(t,n("rain_sensor"),r.rain_sensor??null,void 0,H(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({rain_sensor:c==="none"?null:c})):_}
      ${t.hass&&r.rain_warning!==!1&&r.rain_sensor&&r.rain_sensor!=="none"?L(t,n("rain_sensor_inverted"),!!r.rain_sensor_inverted,c=>o({rain_sensor_inverted:c||void 0}),{title:n("rain_sensor_inverted_hint")}):_}
      ${t.hass?P(t,n("outage_sensor"),r.outage_sensor??null,void 0,H(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({outage_sensor:c==="none"?null:c})):_}
      ${M(n("outage_hint"),"nf-wide")}
      ${L(t,n("contact_warning"),!!r.contact_warning,c=>o({contact_warning:c||void 0}),{title:n("contact_warning_hint")})}
      ${L(t,n("night_lock_warning"),!!r.night_lock_warning,c=>o({night_lock_warning:c||void 0}),{title:n("night_lock_warning_hint")})}
      ${O(t,n("room_double_tap"),r.room_double_tap??"area",[["area",n("room_double_tap_area")],["plan",n("room_double_tap_plan")],["off",n("room_double_tap_off")]],c=>o({room_double_tap:c==="plan"||c==="off"?c:null}),{title:n("room_double_tap_hint")})}
      ${L(t,n("motion_markers_active"),!!r.motion_markers_active,c=>o({motion_markers_active:c||void 0}),{title:n("motion_markers_active_hint")})}
      ${t.hass?wy(t,r.status_entities??[],c=>o({status_entities:c.length?c:null})):_}
      ${t.hass?P(t,n("announce_tts"),r.announce_tts??null,void 0,H(t.hass,c=>c.startsWith("tts.")),c=>o({announce_tts:c==="none"?null:c})):_}
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
      ${yy(t,r.backdrop??null,c=>o({backdrop:c}))}
    </div>
    ${M(`${n("north_hint")} ${n("weather_entity_hint")}`)}
  </details>`}var Yr=t=>t&&t!=="none"?t:null,Xr=(t,e)=>{e&&!t.includes(e)&&t.push(e)},da=t=>new Map(t.floors.flatMap(e=>e.furniture.filter(n=>n.type==="meter").map(n=>[n.id,n])));function ln(t,e){if(!t.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let n=da(t),r=new Set([e.id]);for(let o=n.get(e.parent_meter);o;o=n.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return n.has(e.parent_meter)?e.parent_meter:null}function Cn(t){return new Set([...da(t).values()].filter(e=>ln(t,e)).map(e=>e.id))}function Qr(t,e){return!t.energy.advanced||!e.parent_meter?null:Cn(t).has(e.parent_meter)?e.parent_meter:null}function Qd(t,e,n){if(n.type!=="meter"||n.id===e.id)return!1;let r=da(t),o=new Set;for(let i=n;i&&!o.has(i.id);i=r.get(i.parent_meter??"")){if(i.id===e.id)return!1;o.add(i.id)}return!0}function pi(t,e=n=>Yr(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of t.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?ln(t,r):null;if(i)(n.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")n.grid??=o,n.gridExport??=Yr(r.export);else if(r.type==="inverter")Xr(n.solar,o);else if(r.type==="home_battery"){let s=Yr(r.charge);Xr(n.battery,o),Xr(n.charge,s),Xr(n.soc,Yr(r.soc)),(o||s)&&n.batteries.push({power:o,charge:s})}}for(let r of n.subMeters?t.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?n.subMeters?.find(l=>l.id===Qr(t,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&Xr(o.solar,i);let s=Yr(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return n}function vy(t){for(let e of t.floors){let n=e.furniture.find(r=>r.type==="meter"&&!ln(t,r));if(n)return{floor_id:e.id,x:n.x,z:n.z}}return t.energy.meter}var ky=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,xy=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function hi(t,e,n="power"){let r=e?t.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(t.states).filter(l=>l.startsWith("sensor.")&&t.entities?.[l]?.device_id===r&&t.states[l]?.attributes.device_class===n);if(o.length<=1)return o[0]??null;let i=o.filter(l=>!ky.test(l)),s=e.replace(/^sensor\./,"").replace(xy,"");return i.find(l=>s&&l.includes(s))??i[0]??o[0]}function Jd(t,e){let n={},r=(o,i)=>{i&&!n[o]&&(n[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",hi(t,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",hi(t,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",hi(t,i)),r("battery_soc",hi(t,i,"battery"))}return n}function Re(t,e=!1){let n=t?Number(t.state):NaN;if(!Number.isFinite(n))return null;let r={kW:1e3,MW:1e6}[String(t.attributes.unit_of_measurement??"W")]??1;return e?-n*r:n*r}var $y=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power";function eh(t,e){if($y(t,e))return e;let n=t.entities?.[e]?.device_id;if(!n)return null;let r=ks(t,n),o=r?Tt(t,e):null,i=Vo(t,n).filter(s=>s!==e);return(r?i.find(s=>o!==null&&Tt(t,s)===o):i[0])??null}var th=t=>{let e=t.filter(n=>n!==null);return e.length?e.reduce((n,r)=>n+r,0):null};function Sy(t,e,n){let r=e.grid??n.grid,o=r?Re(t.states[r],e.grid_invert):null;if(!e.grid&&n.gridExport){let i=Math.max(0,Re(t.states[n.gridExport])??0);return Math.max(0,o??0)-i}return o}function My(t,e,n){return e.solar?Re(t.states[e.solar]):n.solar.length?th(n.solar.map(r=>Re(t.states[r]))):null}function ha(t,e,n){return e.charge?(e.power?Math.max(0,Re(t.states[e.power])??0):0)-Math.max(0,Re(t.states[e.charge])??0):e.power?Re(t.states[e.power],n):null}function Ry(t,e,n){return e.battery?Re(t.states[e.battery],e.battery_invert):th(n.batteries.map(r=>ha(t,r,e.battery_invert)))}function pa(t,e,n,r=pi(e)){let o=e.energy,i=Sy(t,o,r),s=My(t,o,r),l=Ry(t,o,r),a=(o.battery_soc?[o.battery_soc]:r.soc).map(f=>Number(t.states[f]?.state)).filter(Number.isFinite),c=a.length?a.reduce((f,g)=>f+g,0)/a.length:null,u=o.tariff?t.states[o.tariff]:void 0,d=Number(u?.state),p=o.consumption?Re(t.states[o.consumption]):null;p===null&&(i!==null||s!==null||l!==null)&&(p=(i??0)+Math.max(0,s??0)+(l??0)),p===null&&n.length>0&&(p=n.reduce((f,g)=>f+g.power,0));let h={grid:i,solar:s===null?null:Math.max(0,s),battery:l,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:p===null?null:Math.max(0,p)};return r.subMeters?{...h,...Ey(t,r,h.consumption,o.battery_invert,n)}:h}function Ey(t,e,n,r,o){let i=e.subMeters??[],s=new Map;for(let p of i)for(let h of p.floors)s.has(h)||s.set(h,p.id);let l=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...i.flatMap(p=>[p.power,...p.solar,...p.batteries.flatMap(h=>[h.power,h.charge])])]),a=p=>o.filter(h=>s.get(h.floorId)===p&&!l.has(h.powerEntity)).reduce((h,f)=>h+f.power,0),c=new Map(i.map(p=>[p.id,p.power?Re(t.states[p.power],p.invert):null])),u=i.map(p=>{let h=c.get(p.id)??null,f=p.solar.reduce((v,w)=>v+Math.max(0,Re(t.states[w])??0),0),g=p.batteries.reduce((v,w)=>v+(ha(t,w,r)??0),0),y=i.filter(v=>v.parent===p.id).reduce((v,w)=>v+(c.get(w.id)??0),0),b=h===null?null:Math.max(0,h+f+g-y);return{id:p.id,parent:p.parent,power:h,solar:f,battery:g,use:b,unmetered:b===null?null:Math.max(0,b-a(p.id))}}),d=u.reduce((p,h)=>p+(h.use??0),0);return{subMeters:u,rest:n===null?null:Math.max(0,n-d)}}function Ay(t,e,n){let r=t.b[0]-t.a[0],o=t.b[1]-t.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-t.a[0])*r+(e.z-t.a[1])*o)/(i*i))),l=t.a[0]+r*s,a=t.a[1]+o*s,c=o/i*(l-n.x)+-r/i*(a-n.z)<0?-1:1;return{x:l,z:a,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-l,e.z-a)}}function nh(t){let e=vy(t),n=e?t.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!n)return null;let r={exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},o=fe(n.rooms,r,n.walls??[]).walls.filter(c=>c.exterior),i=n.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},l=o.map(c=>Ay(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),a=r.exterior/2+3;return{floorId:n.id,x:l.x+l.nx*a,z:l.z+l.nz*a}}function rh(t,e){let n=t.floors.flatMap(f=>f.furniture.map(g=>({floor:f,item:g}))),r=f=>n.filter(g=>g.item.type===f),o=f=>!!ri(f.item,e),i=f=>({kind:"device",...f}),[s,l,a,c,u]=[t.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],d=!!t.energy.grid||l.some(o),p=!!t.energy.solar||a.length>0&&a.every(o),h=!!t.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},l.length>0?{state:d?"ok":"todo",label:d?"chk_meter":"chk_meter_sensor",target:i(l[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},a.length>0?{state:p?"ok":"todo",label:p?"chk_inverter":"chk_inverter_sensor",target:i(a.find(f=>!o(f))??a[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:h?"ok":"todo",label:h?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}function Jr(t,e){let n=[];for(let r of t.floors)for(let o of r.furniture)o.type===e&&n.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return n}function Fy(t){if(!t?.rooms.length)return null;let e=0,n=0,r=0;for(let o of t.rooms)for(let[i,s]of o.points)e+=i,n+=s,r++;return r?{floorId:t.id,x:e/r,z:n/r,y:1}:null}function Ty(t){let e=Cn(t);return Jr(t,"meter").find(n=>!e.has(n.id))??Jr(t,"inverter")[0]??Fy(Zo(t))}function zy(t,e){let n=Jr(t,"grid_point")[0];if(n)return n;let r=t.floors.find(l=>l.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let l of r.rooms)for(let[a,c]of l.points)o=Math.min(o,a),i=Math.max(i,a),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}function oh(t){let e=[],n=Ty(t);if(!n)return e;let r=new Set(t.floors.flatMap(i=>i.furniture).filter(i=>Qr(t,i)).map(i=>i.id)),o=Jr(t,"inverter").find(i=>!r.has(i.id));for(let i of t.settings.roof.solar??[])e.push({key:`solar:${i.id}`,kind:"solar",id:i.id});Jr(t,"home_battery").some(i=>!r.has(i.id))&&e.push({key:"battery",kind:"battery",id:null}),o&&(o.floorId!==n.floorId||o.x!==n.x||o.z!==n.z)&&e.push({key:"inverter",kind:"inverter",id:null}),zy(t,n)&&e.push({key:"grid",kind:"grid",id:null});for(let i of t.floors.flatMap(s=>s.furniture))r.has(i.id)&&(i.type==="inverter"?e.push({key:`inverter:${i.id}`,kind:"inverter",id:i.id}):i.type==="home_battery"&&e.push({key:`battery:${i.id}`,kind:"battery",id:i.id}));for(let i of Cn(t))e.push({key:`meter:${i}`,kind:"meter",id:i});return e}var ih=(t,e)=>t.energy.routes?.find(n=>n.key===e&&n.points.length>0);var Py={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},ah=t=>t.hass?Be(t.hass,t.doc.floors):new Map,Iy=Ce,lh=(t,e)=>e.name||t.t(`furn_${e.type}`);function ch(t,e){let n=rh(t.doc,ah(t)),r=n.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${t.t("chk_title")} <span class="nf-sub">${r}/${n.length}</span></h3>
    ${M(t.t("chk_hint"))}
    ${n.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!t.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${Py[o.state]}</span>${t.t(o.label)}
      </button>`)}
  </section>`}function uh(t,e){let n=t.doc.floors.flatMap(r=>r.furniture.filter(o=>Iy.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${t.t("energy_devices")}</h3>
    ${M(t.t("energy_devices_hint"))}
    ${n.length>0?m`<div class="nf-room-list">
          ${n.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${lh(t,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:_}
    <div class="nf-actions">
      ${Ce.map(r=>m`<button class="nf-btn" ?disabled=${!t.admin||!t.floor} @click=${()=>e.addDevice(r)}>+ ${t.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var sh=(t,e,n)=>m`<p class="nf-sub nf-pack-error">${t.t(e)} <button class="nf-btn" ?disabled=${!t.admin} @click=${n}>${t.t("energy_sign_flip")}</button></p>`;function dh(t,e){let{energy:n}=t.doc,r=(b,v)=>t.hass?.states[b]?.attributes[v],o=H(t.hass,b=>Pn(t.hass,b)),i=H(t.hass,b=>he(b)&&r(b,"device_class")==="battery"),s=H(t.hass,b=>he(b)&&(r(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(b,"unit_of_measurement")??""))),l=ah(t),a=pi(t.doc,b=>ri(b,l)),c=b=>t.replace({...structuredClone(t.doc),energy:{...t.doc.energy,...b}}),u=H(t.hass,b=>he(b)&&["gas","water","volume_flow_rate"].includes(r(b,"device_class")??"")),d=b=>v=>c({[b]:v==="none"?null:v}),p=t.hass?pa(t.hass,t.doc,[],a):null,h=!!p&&(p.solar??0)<20,f=h&&p.grid!==null&&p.grid<-50,g=h&&p.battery!==null&&p.battery<-50&&(p.grid??0)<=0,y=(b,v)=>L(t,t.t("energy_invert"),b,w=>c(v(w)));return m`<section>
    <h3>⚖ ${t.t("energy_balance")}</h3>
    ${M(t.t("energy_balance_hint"))}
    ${f?sh(t,"energy_sign_grid",()=>c({grid_invert:!n.grid_invert})):_}
    ${g?sh(t,"energy_sign_battery",()=>c({battery_invert:!n.battery_invert})):_}
    <div class="nf-form">
      ${P(t,t.t("energy_grid"),n.grid,a.grid,o,d("grid"))}
      ${y(n.grid_invert,b=>({grid_invert:b}))}
      ${P(t,t.t("energy_solar_sensor"),n.solar,a.solar[0]??null,o,d("solar"))}
      ${P(t,t.t("energy_battery_sensor"),n.battery,a.battery[0]??null,o,d("battery"))}
      ${y(n.battery_invert,b=>({battery_invert:b}))}
      ${P(t,t.t("energy_battery_soc"),n.battery_soc,a.soc[0]??null,i,d("battery_soc"))}
      ${P(t,t.t("energy_consumption_sensor"),n.consumption,null,o,d("consumption"))}
      ${P(t,t.t("energy_tariff_sensor"),n.tariff,void 0,s,d("tariff"))}
      ${P(t,t.t("energy_gas"),n.gas??null,void 0,u,d("gas"))}
      ${P(t,t.t("energy_water"),n.water??null,void 0,u,d("water"))}
      ${M(t.t("energy_meters_hint"),"nf-wide")}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||!t.hass} @click=${()=>e.importPrefs()}>${t.t("energy_import_prefs")}</button></div>
    ${e.note?M(e.note):_} ${M(t.t("energy_hint"))}
  </section>
  <section>
    <h3>⚙ ${t.t("energy_advanced")}</h3>
    ${M(t.t("energy_advanced_hint"))}
    <div class="nf-form">
      ${L(t,t.t("energy_advanced_on"),!!n.advanced,b=>c({advanced:b}))}
      ${n.advanced?L(t,t.t("energy_show_unmetered"),!!n.show_unmetered,b=>c({show_unmetered:b})):_}
    </div>
    ${n.advanced?M(t.t("energy_show_unmetered_hint")):_}
  </section>`}var hh=t=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${t.t("feature_name_energy")}</b></div>
  ${M(t.t("feature_text_energy"))}
</section>`;function ph(t){let e=(n,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${n}" target="_blank" rel="noopener">${r} ${t.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${t.t("help_title")}</h3>
    ${M(t.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}function Dy(t,e){let n=t.t,r=t.doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id),o=r?lh(t,r):"";switch(e.kind){case"solar":{let i=t.doc.settings.roof.solar??[],s=i.findIndex(l=>l.id===e.id);return n("route_conn_solar",{name:i[s]?.name||`${n("solar_field")} ${s+1}`})}case"battery":return e.id?n("route_conn_device",{name:o}):n("route_conn_battery");case"inverter":return e.id?n("route_conn_device",{name:o}):n("route_conn_inverter");case"grid":return n("route_conn_grid");case"meter":return n("route_conn_meter",{name:o})}}function fh(t,e){let n=oh(t.doc);if(!n.length)return _;let r=t.t,o=e.draft;return m`<section>
    <h3>〰 ${r("energy_routes")}</h3>
    ${M(r("energy_routes_hint"))}
    <div class="nf-room-list">
      ${n.map(i=>{let s=ih(t.doc,i.key),l=o?.key===i.key;return m`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${Dy(t,i)} · ${s?r("route_points",{n:s.points.length}):r("route_none")}</span></span>
          ${l?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:o.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!o.points.length} @click=${()=>e.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>e.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>e.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions">
                <button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.start(i.key)}>✎ ${r(s?"route_redraw":"route_draw")}</button>
                ${s?m`<button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.clear(i.key)}>⨉</button>`:_}
              </div>
              ${s?L(t,r("route_cable"),!!s.cable,a=>e.setCable(i.key,a),{title:r("route_cable_hint")}):_}`}
        </div>`})}
    </div>
  </section>`}var ot=(t,e)=>e.map(n=>t.toScreen(n).join(",")).join(" ");function fi(t,e,n,r,o,i){let[[s,l],[a,c]]=[t.toScreen(e),t.toScreen(n)];if(Math.hypot(a-s,c-l)<=36)return _;let[u,d]=[(s+a)/2,(l+c)/2];return R`<g data-plus=${`${r}:${o}:${i}`} class="nf-mid"><circle cx=${u} cy=${d} r="14" class="nf-hit" /><circle cx=${u} cy=${d} r="6" /><path d="M${u-3} ${d}h6M${u} ${d-3}v6" /></g>`}var mh=(t,e)=>R`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r="6" />`,Oy=(t,e,n)=>R`<g class="nf-vertex" data-roof-vertex=${n}>${mh(...t.toScreen(e))}</g>`,Ly=(t,e,n)=>R`<g class="nf-vertex" data-roof-corner=${n}>${mh(...t.toScreen(e))}</g>`;function Hy(t,e,n,r){let{t:o,hass:i}=t.host,s=n.dormer?o("roof_dormer"):n.open?o("roof_open_short"):o(`roof_shape_${n.shape}`);return`${e.isFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${U(i,Zt(n),1)} m`}function fa(t,e){let n=t.host.doc.settings.roof,r=n.type==="custom"?n.sections??[]:[],o=t.host.admin,i=(s,l)=>{let a=s.id===e.sectionId,c=ve(s),u=(s.shape==="flat"||s.shape==="parapet")&&s.points&&s.points.length>=3?s.points:null,d=jo(r,s),p=d?ve(Is(d,s)):c,h=u??[p.at(p.u0,0),p.at(p.u1,0),p.at(p.u1,p.w),p.at(p.u0,p.w)],g=((s.shape==="flat"||s.shape==="parapet"?null:qt(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([C,B])=>{let[q,ye]=t.toScreen(c.at(C[0],C[1])),[$t,V]=t.toScreen(c.at(B[0],B[1]));return R`<line x1=${q} y1=${ye} x2=${$t} y2=${V} />`}),[y,b]=t.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),v=a&&o&&!e.isFixed(s),w=[[0,0],[1,0],[1,1],[0,1]],x=s.shape==="flat"||s.shape==="parapet",[k,$,A,F]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],T=u??(s.rotation?wr(s):[[k,A],[$,A],[$,F],[k,F]]),I=v&&x?T.map((C,B)=>fi(t,C,T[(B+1)%T.length],"roof",s.id,B)):_,z=v?R`${I}${u?u.map((C,B)=>Oy(t,C,`${s.id}:${B}`)):w.map(([C,B])=>Ly(t,[C?$:k,B?F:A],`${s.id}:${C}:${B}`))}`:_;return R`<g data-roof=${s.id} class=${`nf-roof-sec${a?" nf-roof-sel":""}`}>
        <polygon points=${ot(t,h)} />
        <g class="nf-roof-ridge">${g}</g>
        <text x=${y} y=${b-14}>${Hy(t,e,s,l)}</text>
      </g>${z}`};return R`<g class="nf-roof-layer">${r.map(i)}</g>`}function Cy(t,e,n,r,o){let i=r*Math.PI/180,[s,l]=t.toScreen(n),[a,c]=t.toScreen([n[0]+Math.sin(i)*o,n[1]-Math.cos(i)*o]);return R`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${l} x2=${a} y2=${c} />
    <circle cx=${a} cy=${c} r="16" class="nf-hit" />
    <circle cx=${a} cy=${c} r="8" />
    <path d="M${a-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function gh(t,e){let{doc:n,admin:r}=t.host,o=n.settings.roof.solar??[];if(o.length===0)return _;let i=j(n),s=l=>{let a=ke(n,l,i);if(!a||a.wall&&a.wall.floorId!==t.floorId)return _;let c=l.id===e.solarId,u=_;if(c&&a.unbounded&&r&&!l.locked){let h=Tr(a,l),f=Math.max(...Ue(a,l,!0).flatMap(g=>g.corners.map(y=>Math.hypot(y[0]-h[0],y[2]-h[1]))));u=Cy(t,l.id,h,l.rotation??0,.9+f*.5)}let d=h=>{let f;if(a.wall){let g=Math.max(.3,...h.corners.map(w=>(w[0]-a.o[0])*a.n[0]+(w[2]-a.o[2])*a.n[2])),[y,b]=[h.corners[0],h.corners[1]],v=w=>[w[0]+a.n[0]*g,w[2]+a.n[2]*g];f=[[y[0],y[2]],v(y),v(b),[b[0],b[2]]]}else f=h.corners.map(g=>[g[0],g[2]]);return R`<polygon data-cell=${h.cell} class=${h.skipped?"nf-solar-off":""} points=${ot(t,f)} />`},p=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return R`<g data-solar=${l.id} class=${p}>${Ue(a,l,c).map(d)}</g>${u}`};return R`<g class="nf-solar-layer">${o.map(s)}</g>`}function _h(t,e){let n=t.host.doc.settings.roof.windows??[];if(n.length===0)return _;let r=new Map(j(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),l=s?Vs(s,i):null;return l?R`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${ot(t,l.map(a=>[a[0],a[2]]))} /></g>`:_};return R`<g class="nf-roofwin-layer">${n.map(o)}</g>`}var Ny={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function bh(t,e,n){if(!e)return _;let r=e.furniture.filter(i=>Ce.includes(i.type)),o=i=>{let[s,l]=t.toScreen([i.x,i.z]),a=i.id===n,c=t.host.t(`furn_${i.type}`);return R`<g data-energy-device=${i.id} class=${`nf-energy-marker${a?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${l} r="17" />
      <text x=${s} y=${l+6} class="nf-energy-icon">${Ny[i.type]??"\u26A1"}</text>
      ${a?R`<text x=${s} y=${l+32} class="nf-energy-name">${c}</text>`:_}
      <title>${c}</title>
    </g>`};return R`<g class="nf-energy-markers">${r.map(o)}</g>`}function yh(t,e){let{doc:n,hass:r}=t.host;if(!(n.settings.roof.sections??[]).some(s=>Os(s,e.elevation+e.height)))return _;let i=[1.5,2].flatMap(s=>Ls({settings:n.settings},e.elevation,s).map(([l,a])=>{let[c,u]=t.toScreen(l),[d,p]=t.toScreen(a);return R`<line class="nf-headroom" x1=${c} y1=${u} x2=${d} y2=${p} />
        <text class="nf-headroom-label" x=${(c+d)/2} y=${(u+p)/2-4}>${U(r,s,1)} m</text>`}));return R`${i}`}function wh(t,e,n,r){if(!e)return _;let o=(i,s)=>{let l=[];return i.forEach((a,c)=>{if(a.floor_id!==e.id)return;let[u,d]=t.toScreen([a.x,a.z]),p=i[c+1];if(p?.floor_id===e.id){let[f,g]=t.toScreen([p.x,p.z]);l.push(R`<line x1=${u} y1=${d} x2=${f} y2=${g} />`)}let h=p&&p.floor_id!==e.id||c>0&&i[c-1].floor_id!==e.id;l.push(R`<circle cx=${u} cy=${d} r=${h?7:4} class=${h?"nf-route-riser":""} />`),s&&l.push(R`<text x=${u+8} y=${d-8}>${c+1}</text>`)}),R`<g class=${`nf-route${s?" nf-route-drawing":""}`}>${l}</g>`};return R`<g class="nf-routes">${n.filter(i=>i.key!==r?.key).map(i=>o(i.points,!1))}${r?o(r.points,!0):_}</g>`}function vh(t,e){let n=t.host.doc.settings.roof.chimneys??[];if(n.length===0)return _;let r=new Map(j(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face);if(!s)return _;let{shape:l,w:a,d:c}=tn(i),{center:u,along:d,across:p}=Ks(s,i),h=l==="round"||l==="steel"?Array.from({length:16},(f,g)=>[u[0]+Math.cos(g/16*2*Math.PI)*Math.min(a,c)/2,u[1]+Math.sin(g/16*2*Math.PI)*Math.min(a,c)/2]):[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,g])=>[u[0]+d[0]*a*f/2+p[0]*c*g/2,u[1]+d[1]*a*f/2+p[1]*c*g/2]);return R`<g data-chimney=${i.id} class=${`nf-chimney${i.id===e.chimneyId?" nf-roofwin-sel":""}`}><polygon points=${ot(t,h)} /></g>`};return R`<g class="nf-roofwin-layer">${n.map(o)}</g>`}function By(t,e,n){let[r,o]=[t+n/2,e-30];return R`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Wy(t,e){let n=e.level?.length?e.level:e.ruler;if(!n?.length)return _;let r=n.map(o=>t.toScreen(o));return R`<g class="nf-bg-ruler">
    ${r.length===2?R`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:_}
    ${r.map(([o,i])=>R`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function kh(t,e,n){let r=n?.background,o=e.picture(r?.image_id);if(!r||!o)return _;let[i,s]=t.toScreen([r.x,r.z]),l=r.width*t.scale,a=l*o.aspect,c=e.handlesShown;return R`<g transform="rotate(${r.rotation??0} ${i+l/2} ${s+a/2})">
    <image href=${o.url} x=${i} y=${s} width=${l} height=${a} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?R`<rect class="nf-bg-frame" x=${i} y=${s} width=${l} height=${a} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+l} cy=${s+a} r="9" />
        ${By(i,s,l)}`:_}
  </g>${Wy(t,e)}`}var Vy="strict-origin-when-cross-origin",ma=new Map,xh=new Map,mi=new Map;function Ky(t){let e=ma.get(t);return e||(e=fetch(t,{referrerPolicy:Vy,mode:"cors",credentials:"omit"}).then(async n=>n.ok&&(n.headers.get("content-type")??"").startsWith("image/")?await n.blob():null).catch(()=>null).then(n=>(n||setTimeout(()=>ma.delete(t),6e4),n)),ma.set(t,e)),e}function $h(t,e){let n=xh.get(t);if(n)return n;let r=mi.get(t);return r||(r=new Set,mi.set(t,r),Ky(t).then(o=>{o&&xh.set(t,URL.createObjectURL(o));let i=mi.get(t)??new Set;if(mi.delete(t),o)for(let s of i)s()})),r.add(e),null}function Sh(t,e){let n=e.map;if(!ui(n))return _;let r=Ud(n),o=Gd(n),[i,s]=t.toScreen([r.x,r.z]),l=t.scale;return R`<g class="nf-map" opacity=${r.opacity} pointer-events="none" transform="translate(${i} ${s}) rotate(${e.north??0})">
    ${Vd(n.lat,n.lon,r.zoom).map(a=>({tile:a,href:$h(Kd(o,a),t.redraw)})).filter(a=>a.href).map(({tile:a,href:c})=>R`<image href=${c} x=${a.east*l} y=${-a.north*l} width=${a.size*l+.6} height=${a.size*l+.6} preserveAspectRatio="none" />`)}
  </g>`}var ga=t=>Math.round(t*1e3)/1e3,_a=(t,e)=>t.width*e,Nn=(t,e)=>[t.x+t.width/2,t.z+_a(t,e)/2];function Mh(t,e,n){let[r,o]=[t[0]-e[0],t[1]-e[1]];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}var Rh=t=>((t+180)%360+360)%360-180;function Eh(t,e,n){return{x:ga(t[0]-e/2),z:ga(t[1]-n/2)}}function Ah(t,e,n,r){if(Math.hypot(r[0]-n[0],r[1]-n[1])<.05)return null;let o=Math.atan2(r[1]-n[1],r[0]-n[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Mh(Nn(t,e),n,i),l=Math.round(Rh((t.rotation??0)+i*180/Math.PI)*100)/100;return{...t,rotation:l,...Eh(s,t.width,_a(t,e))}}function Fh(t,e,n,r,o){let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[l,a]=Nn(t,e),c=[n[0]+s*(l-n[0]),n[1]+s*(a-n[1])],u=t.width*s;return{...t,width:ga(u),...Eh(c,u,_a(t,e)*s)}}function Th(t,e,n){let r=Mh(n,Nn(t,e),-(t.rotation??0)*Math.PI/180);return[r[0]-t.x,r[1]-t.z]}function zh(t,e,n,r){let o=t+(n-e)*180/Math.PI;return Rh(r?Math.round(o/15)*15:Math.round(o*10)/10)}var Gy=2048;async function Bn(t){let e=await createImageBitmap(t),n=Math.min(1,Gy/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*n),r.height=Math.round(e.height*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var gi=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:n,api:r}=this.deps;if(n.hass){this.loading.add(e);try{let o=await r.fetchImage(n.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let n=new Image;return n.src=e,await n.decode(),n.naturalHeight/n.naturalWidth}async upload(e){let{host:n,api:r}=this.deps;if(!e||!n.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=D("img");await r.storeImage(n.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let l=n.floor?.rooms??[],a=l.length>0?ue(l.flatMap(u=>u.points)):null,c={image_id:s,x:a?a.x0:0,z:a?a.z0:0,width:a?Math.max(4,Math.round((a.x1-a.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((n,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let n=[...this.levelPoints??[],e];if(n.length<2){this.level=n;return}this.level=null,this.straighten(n[0],n[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,n){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Ah(r,o.aspect,e,n):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,n=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!n||!r||r.length<2)return;let o=Fh(e,n.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var Ph=.1,ba=(t,e,n)=>m`<button class="nf-btn nf-wide ${t?"nf-primary":""}" aria-pressed=${t} @click=${n}>${e}</button>`;function Uy(t,e){let n=e.ruler;if(!n)return _;if(n.length<2)return M(t.t(n.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),o=()=>e.applyRuler();return m`${M(t.t("bg_ruler_length_hint",{m:U(t.hass,r,2)}),"nf-wide")}
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
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${t.t("bg_ruler_apply")}</button>`}function jy(t,e){if(!t.admin)return _;let n=t.t,r=e.level;return m`${ba(e.edit,n(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${M(n(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${ba(!!r,`\u{1F4D0} ${n(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?M(n(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):_}
    ${ba(!!e.ruler,`\u{1F4CF} ${n(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${Uy(t,e)}`}function Ih(t,e,n){let r=n.background,o=t.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let l=s.target,a=l.files?.[0];l.value="",e.upload(a)}}
        />
      </label>
      ${r?m`${E(t,o("x"),r.x,s=>i({x:s}))} ${E(t,o("z"),r.z,s=>i({z:s}))}
          ${E(t,o("background_width"),r.width,s=>i({width:Math.max(Ph,s)}),.01,Ph)}
          ${E(t,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${jy(t,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ie(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:_}
    </div>
  </details>`}var Zy=t=>t.map((e,n)=>[e,t[(n+1)%t.length]]);function qy(t,e,n){let r=K(n,e),o=Q(r,r),i=o?Math.max(0,Math.min(1,Q(K(t,e),r)/o)):0;return me(K(t,[e[0]+r[0]*i,e[1]+r[1]*i]))}function Dh(t,e,n=.03){return t.every(r=>N(r,e)||Zy(e).some(([o,i])=>qy(r,o,i)<=n))}var ya=["straight","quarter","l","half","u","spiral"],wa=["solid","stringer","mono","cantilever"],va=["none","left","right","both"],ka=["headroom","full","none"],ht={shape:"straight",turn:"right",build:"solid",risers:!0,steps:null,run_width:null,down:!1,rail:"none",opening:"headroom",landing_after:null},xa={straight:[1,3.2],quarter:[2.2,2.6],l:[2.2,2.8],half:[2,2.6],u:[2.2,2.6],spiral:[1.6,1.6]},Nh=2,Bh=40;var _i=(t,e)=>typeof e=="string"&&t.includes(e);function ro(t){let e=t.stair??{},n=typeof e.steps=="number"&&Number.isFinite(e.steps)?Math.round(Math.min(Bh,Math.max(Nh,e.steps))):null,r=typeof e.run_width=="number"&&Number.isFinite(e.run_width)&&e.run_width>.2?e.run_width:null;return{shape:_i(ya,e.shape)?e.shape:ht.shape,turn:e.turn==="left"?"left":"right",build:_i(wa,e.build)?e.build:ht.build,risers:e.risers!==!1,steps:n,run_width:r,down:e.down===!0,rail:_i(va,e.rail)?e.rail:ht.rail,opening:_i(ka,e.opening)?e.opening:ht.opening,landing_after:typeof e.landing_after=="number"&&Number.isFinite(e.landing_after)?Math.max(1,Math.round(e.landing_after)):null}}var to=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Oh=(t,e)=>Math.abs(t[0]-e[0])<1e-6&&Math.abs(t[1]-e[1])<1e-6;function Wh(t){let e=[];for(let n of t)(!e.length||!Oh(e[e.length-1],n))&&e.push(n);for(;e.length>1&&Oh(e[0],e[e.length-1]);)e.pop();return e}function no(t,e,n=!1){return{poly:Wh([...t,...[...e].reverse()]),landing:n,left:t,right:e}}function eo(t,e,n,r,o){let i=[];for(let s=0;s<o;s++){let[l,a]=[s/o,(s+1)/o];i.push(no([to(t,n,l),to(t,n,a)],[to(e,r,l),to(e,r,a)]))}return i}function Lh(t,e){let n=e;for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return to(t[r],t[r+1],o?Math.min(1,n/o):0);n-=o}return t[t.length-1]}function Yy(t,e,n){let r=[Lh(t,e)],o=0;for(let i=0;i+1<t.length;i++)o+=Math.hypot(t[i+1][0]-t[i][0],t[i+1][1]-t[i][1]),o>e+1e-6&&o<n-1e-6&&r.push(t[i+1]);return r.push(Lh(t,n)),r}var Xy=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Hh(t,e,n,r,o){let i=Xy(t),s=[];for(let l=0;l<o;l++){let a=Wh([...l===0?[e]:[],n,...l===o-1?[r]:[]]);s.push(no(Yy(t,i*l/o,i*(l+1)/o),a.length?a:[n]))}return s}function bi(t,e,n){if(t<=0)return[0,0];if(e<=.001)return[0,t];if(n<=.001)return[t,0];let r=Math.min(t,Math.max(0,Math.round(t*e/(e+n))));return[r,t-r]}function Ch(t,e){if(t.landing_after==null)return null;let n=Math.min(e-1,Math.max(1,Math.round(t.landing_after)))-1;return[n,e-1-n]}function Qy(t,e,n,r){let[o,i,s,l]=[-e/2,e/2,-n/2,n/2];switch(t.shape){case"quarter":case"l":{let a=Math.min(t.run_width??Math.min(1,Math.min(e,n)/2),Math.min(e,n)-.05),c=[o+a,s+a],u=[[o,s+a],[o,s],[o+a,s]],d=t.shape==="l"?1:Math.min(r,r>=8?3:2),[p,h]=t.shape==="l"?Ch(t,r)??bi(r-d,n-a,e-a):bi(r-d,n-a,e-a),f=eo([o,l],[o+a,l],[o,s+a],c,p),g=t.shape==="l"?[no(u,[c],!0)]:Hh(u,c,c,c,d),y=eo([o+a,s],c,[i,s],[i,s+a],h);return{treads:[...f,...g,...y],flight:a,column:0}}case"half":case"u":{let a=Math.min(t.run_width??Math.min(1.1,(e-.1)/2),(e-.02)/2),c=s+a,u=[[o,c],[o,s],[i,s],[i,c]],[d,p]=[[o+a,c],[i-a,c]],h=t.shape==="u"?1:Math.min(r,r>=12?6:r>=8?4:2),[f,g]=t.shape==="u"?Ch(t,r)??bi(r-h,n-a,n-a):bi(r-h,n-a,n-a),y=eo([o,l],[o+a,l],[o,c],d,f),b=t.shape==="u"?[no(u,[d,p],!0)]:Hh(u,d,[0,c],p,h),v=eo([i,c],p,[i,l],[i-a,l],g);return{treads:[...y,...b,...v],flight:a,column:0}}case"spiral":{let a=Math.min(e,n)/2,c=Math.min(.08,a*.12),u=Math.min(.75,Math.max(.3,.22/(a*.6))),d=(h,f)=>[Math.cos(f)*h,Math.sin(f)*h],p=[];for(let h=0;h<r;h++){let[f,g]=[Math.PI+u*h,Math.PI+u*(h+1)],y=[0,.5,1].map(b=>d(a,f+(g-f)*b));p.push(no(y,[d(c,f),d(c,g)]))}return{treads:p,flight:a-c,column:c}}default:return{treads:eo([o,l],[i,l],[o,s],[i,s],r),flight:e,column:0}}}var Jy=(t,e)=>t.steps??Math.min(Bh,Math.max(Nh,Math.round(Math.abs(e)/.18)));function cn(t,e,n,r){let o=Jy(t,r),i=Math.abs(r)/o,s=Qy(t,Math.max(.3,e),Math.max(.3,n),o),l=c=>[-c[0],c[1]];return{treads:s.treads.map((c,u)=>{let d=t.down?-i*(u+1):i*(u+1);return t.turn==="right"?{...c,top:d}:{poly:c.poly.map(l).reverse(),top:d,landing:c.landing,left:c.right.map(l),right:c.left.map(l)}}),rise:i,steps:o,column:s.column,flight:s.flight}}function yi(t){let e=t.poly.reduce((n,r)=>[n[0]+r[0],n[1]+r[1]],[0,0]);return[e[0]/t.poly.length,e[1]/t.poly.length]}var J=t=>Math.round(t*1e3)/1e3,e0=(t,e)=>((t+e)%360+360)%360;function Vh(t,e){return{id:D("wall"),a:[J(t[0]),J(t[1])],b:[J(e[0]),J(e[1])],thickness:null}}function Kh(t,e){let n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1])||1,r=Math.max(.1,e)/n;return[J(t.a[0]+(t.b[0]-t.a[0])*r),J(t.a[1]+(t.b[1]-t.a[1])*r)]}var Gh=(t,e)=>({height:t>=e-.005?null:Math.max(.05,t)});function Uh(t,e){return{id:D("hole"),type:"stairwell",x:J((t[0]+e[0])/2),z:J((t[1]+e[1])/2),w:J(e[0]-t[0]),d:J(e[1]-t[1]),h:.02,rotation:0,variant:null}}var jh=t=>({id:D("outdoor"),type:"lawn",points:t.map(([e,n])=>[J(e),J(n)])});function Zh(t,e,n){t.points.splice(e+1,0,[J(n[0]),J(n[1])])}function qh(t,e){return t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),!0)}var Yh=t=>({...t,id:D("outdoor"),points:t.points.map(([e,n])=>[J(e+.5),J(n+.5)])});function $a(t,e,n,r){let[o,i,s]=st(t),l=e.floors.filter(u=>u.elevation>n.elevation).sort((u,d)=>u.elevation-d.elevation)[0],a=t==="stairs"?J(l?l.elevation-n.elevation:n.height+.25):s,c={id:D("furniture"),type:t,x:J(r[0]),z:J(r[1]),rotation:0,w:o,d:i,h:a,variant:null};return t==="stairs"&&(c.stair={...ht}),c}var Xh=t=>({...structuredClone(t),id:D("furniture"),x:J(t.x+.3),z:J(t.z+.3)}),Qh=(t,e)=>e0(t,e);function Jh(t){let[e,n,r]=st("parking");return{id:D("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,J(t.w+.5)),d:Math.max(n,J(t.d+.4)),h:r,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}}}function ep(t,e){let[n,r,o]=st(e);return{id:D("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,variant:null,entity:t.entity_id,name:t.name??null,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.locked?{locked:!0}:{}}}var tp=(t,e)=>({entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.name?{name:t.name}:{}});function np(t,e){for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(ce(r.type)&&r.entity===e))}function Sa(t,e,n,r){let o=new Set(r);for(let s of t.floors)s.placements=s.placements.filter(l=>!o.has(l.entity_id)),s.furniture=s.furniture.filter(l=>!(ce(l.type)&&l.entity&&o.has(l.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>ce(s.type)).map(s=>[s.x,s.z])];for(let s of mu(n,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[l,a,c]=Je.lamp_ceiling;e.furniture.push({id:D("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:l,d:a,h:c,variant:null,entity:s.entity_id,power:null})}}function rp(t){let[e,n]=_e(t.points);return[J(e),J(n)]}function op(t,e,n,r){let o=Math.min(n,t)/2,i=r>0?Math.round(e/r)*r:e;return J(Math.min(t-o,Math.max(o,i)))}function ip(t,e){let n=bn[e],r=yn(t)===e?{}:{width:n.width};return{type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:n.style??null,opens:n.opens??null,...r}}function sp(t,e,n){let r=ue(t.points),{x0:o,z0:i,x1:s,z1:l}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,l]=[n,n+(l-i)]:e==="w"?s=o+Math.max(.1,n):l=i+Math.max(.1,n),[[o,i],[s,i],[s,l],[o,l]].map(([a,c])=>[J(a),J(c)])}function ap(t){return t.furniture.map((e,n)=>({item:e,index:n,base:At(t,e)})).sort((e,n)=>e.base-n.base||e.index-n.index).map(e=>e.item)}function wi(t,e,n){if(!t.admin)return _;let r=n.edit?.key===e;return m`<button class="nf-btn" aria-pressed=${r} title=${t.t("arc_hint")} @click=${()=>n.setEdit(r?null:{key:e,bulge:.5,error:null})}>
    ◠ ${t.t("arc")}
  </button>`}function vi(t,e,n){let r=n.edit;if(!t.admin||r?.key!==e)return _;let o=t.t;return m`<span class="nf-wide nf-split-row" title=${o("arc_bulge_hint")}
      >${E(t,o("arc_bulge"),r.bulge,i=>n.setEdit({...r,bulge:i,error:null}),.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(r.bulge)<.01} @click=${()=>n.apply(r)}>${o("arc_apply")}</button></span
    >
    ${r.error?m`<p class="nf-sub nf-wide nf-notice">${r.error}</p>`:_}`}var ki=(t,e,n)=>Math.min(e,Math.max(t,ie(n)));function Ma(t,e,n){let r=t.t,o=a=>n.update(a),i=ue(e.points),s=Ac.map(a=>[a,r(`out_${a}`)]),l=Fc.map(a=>[a,r(`slope_${a.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${O(t,r("outdoor_type"),e.type,s,a=>o({type:a}),{wide:!0})}
      ${O(t,r("area"),e.area_id??"",[["",r("no_area")],...Object.values(t.hass?.areas??{}).sort((a,c)=>a.name.localeCompare(c.name)).map(a=>[a.area_id,a.name])],a=>o({area_id:a||null}),{wide:!0,title:r("outdoor_area_hint")})}
      ${e.type==="pool"||e.type==="wild"||e.type==="bed"?m`${P(t,r("pool_temp"),e.temp_entity??null,void 0,H(t.hass,a=>a.startsWith("sensor.")&&t.hass?.states[a]?.attributes.device_class==="temperature"),a=>o({temp_entity:a&&a!=="none"?a:null}))}
          ${P(t,r("pool_pump"),e.pump_entity??null,void 0,H(t.hass,a=>/^(switch|fan|valve|input_boolean|binary_sensor)\./.test(a)),a=>o({pump_entity:a&&a!=="none"?a:null}))}`:_}
      ${wn(e.points)?m`${E(t,r("x"),i.x0,a=>n.setRectangle("x",a))} ${E(t,r("z"),i.z0,a=>n.setRectangle("z",a))}
          ${E(t,r("width"),i.x1-i.x0,a=>n.setRectangle("w",a),.01,.1)} ${E(t,r("depth"),i.z1-i.z0,a=>n.setRectangle("d",a),.01,.1)}`:_}
      ${cs(e.type)?E(t,r("outdoor_height"),e.height??ls[e.type],a=>o({height:ki(.1,6,a)}),.05,.1):_}
      ${E(t,r("outdoor_offset"),e.offset??0,a=>o({offset:ki(-10,10,a)||null}),.05)}
      ${e.type!=="pool"?m`${E(t,r("outdoor_slope"),e.slope??0,a=>o({slope:ki(0,20,a)||null}),.05,0)}
          ${O(t,r("outdoor_slope_dir"),e.slope_dir??"x",l,a=>o({slope_dir:a}))}`:_}
      ${E(t,r("outdoor_opacity"),Math.round((e.opacity??1)*100),a=>o({opacity:a>=100||!(a>0)?null:Math.max(10,Math.min(95,a))/100}),5,10)}
      ${L(t,r("outdoor_outline"),e.outline!==!1,a=>o({outline:a?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?L(t,r("outdoor_open"),!!e.open,a=>o({open:a||void 0}),{title:r("outdoor_open_hint")}):_}
      ${e.type==="pergola"?L(t,r("outdoor_bracing"),!!e.bracing,a=>o({bracing:a||void 0})):_}
      ${L(t,r("outdoor_cut"),Pc(e),a=>o({cut:a===(e.type==="pool")?void 0:a}),{title:r("outdoor_cut_hint")})}
    </div>
    ${e.type==="fence"?t0(t,e,o):_}
    ${t.admin?m`<div class="nf-actions">
            ${e.points.map((a,c)=>m`<button class="nf-chip" title=${r("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(c)}>${c+1} ×</button>`)}
          </div>
          ${M(r("outdoor_corners_hint"))}`:_}
    ${e.slope?M(r("outdoor_slope_hint")):_} ${M(r("outdoor_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:_}
  </section>`}function t0(t,e,n){let r=t.t,o=e.gates??[],i=h=>n({gates:h.length?h:void 0}),s=e.points.map((h,f)=>[String(f),`${f+1} \u2192 ${(f+1)%e.points.length+1}`]),l=h=>{let[f,g]=[e.points[h],e.points[(h+1)%e.points.length]];return f&&g?Math.hypot(g[0]-f[0],g[1]-f[1]):0},a=(h,f)=>i(o.map((g,y)=>y===h?{...g,...f}:g)),c=H(t.hass,h=>/^(cover|switch|input_boolean|lock)\./.test(h)),u=H(t.hass,h=>h.startsWith("binary_sensor.")),d=[["single",r("gate_single")],["double",r("gate_double")],["sliding",r("gate_sliding")]],p=()=>{let f=l(0);i([...o,{id:D("gate"),edge:0,offset:ie(f/2),width:Math.min(1.2,Math.max(.5,ie(f*.4))),kind:"single"}])};return m`<h4 class="nf-lib-head">${r("fence_gates")}</h4>
    ${o.map((h,f)=>m`<div class="nf-form">
        ${O(t,r("gate_edge"),String(h.edge),s,g=>a(f,{edge:Number(g)}))}
        ${O(t,r("gate_kind"),h.kind,d,g=>a(f,{kind:g,width:g==="single"&&h.width>1.6?1:h.width}))}
        ${E(t,r("gate_offset"),h.offset,g=>a(f,{offset:Math.max(0,Math.min(l(h.edge),ie(g)))}),.05,0)}
        ${E(t,r("gate_width"),h.width,g=>a(f,{width:Math.max(.3,Math.min(12,ie(g)))}),.05,.3)}
        ${P(t,r("gate_entity"),h.entity??null,void 0,c,g=>a(f,{entity:g&&g!=="none"?g:null}))}
        ${P(t,r("gate_contact"),h.contact??null,void 0,u,g=>a(f,{contact:g&&g!=="none"?g:null}))}
        ${t.admin?m`<button class="nf-btn nf-danger nf-wide" @click=${()=>i(o.filter((g,y)=>y!==f))}>${r("delete")}</button>`:_}
      </div>`)}
    ${t.admin&&o.length<20?m`<button class="nf-btn" @click=${p}>${r("gate_add")}</button>`:_}
    ${M(r("fence_gates_hint"))}`}var n0=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],r0={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function lp(t,e,n){let r=t.t,{draft:o}=e,i=d=>U(t.hass,d,2),[s,l]=[o[0],o[o.length-1]],a=s&&o.length>1?Math.hypot(l[0]-s[0],l[1]-s[1]):0,c=d=>{let p=r0[d.key];p?(d.preventDefault(),n.step(p)):d.key==="Enter"&&n.close()},u=s?m`${M(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${d=>n.setLength(Number.parseFloat(d.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${n0.map(([d,p])=>m`<button class="nf-btn nf-arrow-${d}" title=${r(`dir_${d}`)} @click=${()=>n.step(d)}>${p}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((d,p)=>m`<li>${i(Math.hypot(d[0]-o[p][0],d[1]-o[p][1]))} m</li>`)}</ol>`:_}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>n.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>n.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?M(r("measure_gap",{gap:i(a)})):_}`:M(r("measure_start"));return m`<section>
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
      ${E(t,r("wall_length"),i,s=>n.update({b:Kh(e,s)}),.01,.1)}
      ${E(t,r("wall_thickness"),e.thickness??t.doc.settings.wall_interior,s=>n.update({thickness:ki(.02,1,s)}),.01,.02)}
      ${E(t,r("wall_height"),e.height??o,s=>n.update(Gh(s,o)),.05,.05)}
      ${L(t,r("free_wall_slope"),e.height_end!=null,s=>n.update(s?{height:e.height??o,height_end:Math.max(.2,(e.height??o)/2)}:{height_end:null}),{title:r("free_wall_slope_hint")})}
      ${e.height_end!=null?E(t,r("free_wall_height_end"),e.height_end,s=>n.update({height_end:Math.max(.05,s)}),.05,.05):_}
    </div>
    ${t.admin?m`<div class="nf-actions">${wi(t,`wall:${e.id}`,n.arc)}<button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:_}
    <div class="nf-form">${vi(t,`wall:${e.id}`,n.arc)}</div>
    ${M(r("free_wall_hint"))}
  </section>`}var Lt=t=>Math.round(t*1e3)/1e3,o0=2.4;function cp(t,e,n){let r=Hs(t,e[0],e[1],n[0],n[1]),o=r===null,i=Math.min(...t.floors.map(a=>a.elevation)),s=Lt(r??i+o0),l=o?6:t.settings.roof.pitch||35;return{id:D("roof"),x0:Lt(e[0]),z0:Lt(e[1]),x1:Lt(n[0]),z1:Lt(n[1]),shape:o?"pent":"gable",axis:n[0]-e[0]>=n[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:l,pitch_b:l,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function up(t){let e=n=>Lt(n+1);return{...structuredClone(t),id:D("roof"),x0:e(t.x0),x1:e(t.x1),z0:e(t.z0),z1:e(t.z1)}}var dp=(t,e)=>t.findIndex(n=>n.id===e)+1;function Ea(t){return t.points&&t.points.length>=3?t.points.map(([e,n])=>[e,n]):t.rotation?wr(t):[[t.x0,t.z0],[t.x1,t.z0],[t.x1,t.z1],[t.x0,t.z1]]}function hp(t,e,n){let r=Ea(t);r.splice(e+1,0,[Lt(n[0]),Lt(n[1])]),t.points=r,Object.assign(t,Pt(r))}function pp(t,e){return!t.points||t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),Object.assign(t,Pt(t.points)),!0)}var i0={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Ht=t=>i0[t];function xi(t,e){let n=new Set;for(let r of t?.placements??[])N([r.x,r.z],e.points)&&n.add(r.entity_id);for(let r of t?.furniture??[])ce(r.type)&&r.entity&&N([r.x,r.z],e.points)&&n.add(r.entity);return n}function fp(t,e){let n=new Map;for(let r of t.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>ce(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,l]of o){let a=r.rooms.find(c=>N([s,l],c.points));a&&a.id!==e.id&&n.set(i,a.name)}}return n}var mp=(t,e)=>(t??[]).includes(e)?(t??[]).filter(n=>n!==e):[...t??[],e];function $i(t,...e){let n=t.trim().toLowerCase();return!n||e.some(r=>(r??"").toLowerCase().includes(n))}function gp(t,e){return t.map(n=>({o:n,r:e(n.id)})).sort((n,r)=>n.r-r.r).map(({o:n})=>n)}function _p(t,e){let n=e,r=0;return{taken:t.map(i=>{let s=i.ids.slice(0,Math.max(0,n));return n-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var Aa=50;function Fa(t,e,n,r,o,i,s){let l=e.includes(n);return m`<button class="nf-pin ${l?"nf-pin-on":""}" aria-pressed=${l} title=${t.t(l?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:mp(e,n)})}>${l?o[0]:o[1]}</button>`}function s0(t,e,n,r,o,i){let[s,l,a]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,d=o)=>{let p=n.has(c),h=p?void 0:r.get(c),f=s.includes(c),g=Dn(t,c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${f?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${p?"":"nf-muted"}" ?disabled=${!p} @click=${()=>i.select(c)}>
        ${g?m`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${g}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Ht((t.hass?Ne(t.hass,c):X(c))??"sensor")} /></svg>`}
        <span>${W(t.hass,c,d)}${h?m`<small class="nf-muted"> · ${t.t("devices_placed_in",{room:h})}</small>`:_}</span>
      </button>
      ${t.admin?Fa(t,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):_}
      ${t.admin&&!f?Fa(t,l,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):_}
      ${t.admin&&!p?Fa(t,a,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):_}
      ${t.admin?p?m`<button class="nf-link" @click=${()=>i.remove(c)}>${t.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${t.t("devices_place")}</button>`:_}
    </div>`}}function a0(t,e,n,r,o){let{hass:i}=t;if(!i)return m``;let s=u=>u>0?M(t.t("devices_narrow",{n:u})):_,l=M(t.t("devices_none")),a=e.deviceQuery;if(o==="other"){let u=ru(i,n.area_id).map(f=>({...f,ids:f.ids.filter(g=>$i(a,`${W(i,g,f.name)} ${g} ${f.name}`))})),{taken:d,left:p}=_p(u,Aa),h=u.map((f,g)=>d[g].length>0?m`<div class="nf-dev-area">${f.name}</div>${d[g].map(y=>r(y,!1,f.name))}`:_);return d.some(f=>f.length>0)?m`<div class="nf-room-list">${h}</div>${s(p)}`:l}let c=ou(i).filter(u=>$i(a,`${W(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,Aa).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,Aa))}`:l}function l0(t,e,n,r,o,i,s){let{hass:l}=t,a=l?be(l,n).filter(b=>Mt(Ne(l,b))):[];if(!n.area_id)return M(t.t("devices_none_area"));if(a.length===0)return M(t.t("devices_none"));let c=l?kn(l,a):[],u=c.map(b=>b.primary).filter(b=>!o.has(b)),d=e.deviceQuery,p=(t.floor?.placements??[]).filter(b=>X(b.entity_id)==="light"&&(b.mount??"ceiling")==="ceiling"&&N([b.x,b.z],n.points)).length,h=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${d} @input=${b=>e.deviceQuery=b.target.value} />`,f=b=>$i(d,W(l,b,i),b),g=b=>{let v=b.others.filter(f),w=e.isUnfolded(b.primary)||!!d.trim()&&v.length>0;return!f(b.primary)&&v.length===0?_:m`${r(b.primary)}
      ${b.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(b.primary)}>${w?t.t("devices_less"):t.t("devices_more",{n:b.others.length})}</button>`:_}
      ${w?(d.trim()?v:b.others).map(x=>r(x,!0)):_}`},y=()=>s.confirm(t.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${t.admin&&p>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(n)}>${t.t("lights_spread")}</button>`:_}
    ${a.length>8?h:_}
    <div class="nf-room-list">${c.map(g)}</div>
    ${t.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${y}>${t.t("devices_place_all_n",{n:u.length})}</button>`:_}
    ${M(t.t("devices_hint"))}`}function Ta(t,e,n,r){let{hass:o}=t,i=n.area_id?o?.areas?.[n.area_id]?.name:void 0,s=xi(t.floor,n),l=s0(t,n,s,fp(t.doc,n),i,r),a=t.admin?e.deviceSource:"area",c=o?kn(o,be(o,n).filter(p=>Mt(Ne(o,p)))).length:0,u=[["area",`${t.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",t.t("devices_src_other")],["none",t.t("devices_src_none")]],d=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${e.deviceQuery} @input=${p=>e.deviceQuery=p.target.value} />`;return m`<section>
    <h3>${t.t("devices")}</h3>
    ${M(t.t("devices_panel_hint"))}
    ${t.admin?m`<div class="nf-seg nf-dev-source">${u.map(([p,h])=>m`<button aria-pressed=${a===p} @click=${()=>e.deviceSource=p}>${h}</button>`)}</div>`:_}
    ${a!=="area"?m`${d}${a0(t,e,n,l,a)}`:l0(t,e,n,l,s,i,r)}
  </section>`}function bp(t,e,n){let{hass:r}=t;if(!r)return _;let o=!!e.climate&&Object.values(e.climate).some(l=>l!=null),i=(l,a)=>{let c={...e.climate??{},[l]:a};n({climate:Object.values(c).every(u=>u==null)?null:c})},s=(l,a)=>{let c=iu(r,t.floor??null,{...e,climate:null},l),u=H(r,y=>he(y)&&r.states[y]?.attributes.device_class===xs[l]),d=gp(u,y=>(Tt(r,y)===e.area_id?0:1)+($s(r,y)?0:2)),p=[e.climate?.[l]??null].flat(),h=y=>{let b=y.filter(v=>!!v&&v!=="none");i(l,y[0]==="none"?"none":b.length>1?b:b[0]??null)},g=p[0]&&p[0]!=="none"?[...p,null]:p;return g.map((y,b)=>P(t,b?t.t("climate_more"):a,y,b?void 0:c[0]??null,d,v=>h(g.map((w,x)=>x===b?v:w))))};return m`<details class="nf-points" ?open=${o}>
    <summary>${t.t("climate")}</summary>
    <div class="nf-form">${s("temperature",t.t("climate_temperature"))} ${s("humidity",t.t("climate_humidity"))} ${s("co2",t.t("climate_co2"))}</div>
    ${M(t.t("climate_hint"))}
  </details>`}var za="metric",wp=t=>{za=t==="imperial"?"imperial":"metric"};var yp=.3048;function pe(t,e,n=2,r=za){if(r==="metric")return`${U(t,e,n)} m`;let o=e<0?"\u2212":"",i=Math.round(Math.abs(e)/.0254*2),s=Math.floor(i/24),l=i-s*24,a=`${Math.floor(l/2)}${l%2?"\xBD":""}`;return s?`${o}${s}\u2032 ${a}\u2033`:`${o}${a}\u2033`}function Ee(t,e,n=za){return n==="metric"?`${U(t,e,1)} m\xB2`:`${U(t,e/(yp*yp),0)} ft\xB2`}var c0=.15,u0=(t,e)=>Math.abs((t-e+540)%360-180);function d0(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let l=o.points[(s+1)%o.points.length];return Math.abs(Q(K(i,n),r))<.02&&Math.abs(Q(K(l,n),r))<.02}))}function Ia(t,e,n,r){let o=e.points,[i,s]=[o[n],o[(n+1)%o.length]],l=me(K(s,i)),a=ge(o)>=0?1:-1,c=[(s[0]-i[0])/l,(s[1]-i[1])/l],u=[-c[1]*a||0,c[0]*a||0],d=c[0]*u[1]-c[1]*u[0]>0,p=e.wall_heights?.[n],h=e.ceiling??t.height,f=typeof p=="number"?p:Array.isArray(p)?Math.max(...p.map(b=>b??h)):h,g=e.wall_slopes?.[n],y=typeof g=="number"&&typeof p=="number"?g:f;return{origin:d?i:s,along:d?c:[-c[0],-c[1]],normal:u,length:l,face:d0(t,e,i,u)?r/2:0,heightLeft:d?f:y,heightRight:d?y:f}}function Pa(t,e){let n=K(e,t.origin);return{u:Q(n,t.along),depth:Q(n,t.normal)-t.face}}function h0(t,e){let n=t.rooms.find(s=>s.id===e.room_id);if(!n||e.wall)return null;let[r,o]=[n.points[e.edge],n.points[(e.edge+1)%n.points.length]];if(!r||!o)return null;let i=me(K(o,r))||1;return[r[0]+(o[0]-r[0])*e.offset/i,r[1]+(o[1]-r[1])*e.offset/i]}var vp=t=>G(t.type)?.mount==="wall"||t.type==="lamp_wall"||t.mount_y!=null;function kp(t,e,n){let r=[];for(let i of t.openings){let s=h0(t,i);if(!s)continue;let{u:l,depth:a}=Pa(n,s);Math.abs(a+n.face)>.3||l<-.01||l>n.length+.01||r.push({id:i.id,kind:"opening",type:i.type,x0:l-i.width/2,x1:l+i.width/2,y0:i.sill,y1:i.sill+i.height,lifts:i.type==="window"})}let o=Math.atan2(-n.normal[0],n.normal[1])*180/Math.PI;for(let i of t.furniture){if(!N([i.x,i.z],e.points)||u0(i.rotation,o)>20)continue;let{u:s,depth:l}=Pa(n,[i.x,i.z]);if(l-i.d/2>c0||s<0||s>n.length)continue;let a=At(t,i);r.push({id:i.id,kind:"furniture",type:i.type,x0:s-i.w/2,x1:s+i.w/2,y0:a,y1:a+i.h,lifts:vp(i)})}return r.sort((i,s)=>+(i.kind==="furniture")-+(s.kind==="furniture")||i.x0-s.x0)}var oo=t=>Math.round(t*1e3)/1e3;function xp(t,e,n,r){let o=Pa(t,[e.x,e.z]).depth,i=Math.min(t.length-e.w/2,Math.max(e.w/2,n+e.w/2)),s=[t.origin[0]+t.along[0]*i+t.normal[0]*(o+t.face),t.origin[1]+t.along[1]*i+t.normal[1]*(o+t.face)];return{x:oo(s[0]),z:oo(s[1]),...r!==null&&vp(e)?{mount_y:oo(Math.max(0,r))}:{}}}function $p(t,e,n,r,o){let[i]=[e.points[n.edge]],s=Math.min(t.length-n.width/2,Math.max(n.width/2,r+n.width/2)),l=me(K(i,t.origin))<1e-6?s:t.length-s;return{offset:oo(l),...o!==null&&n.type==="window"?{sill:oo(Math.max(0,o))}:{}}}var Sp=.01,Mp=t=>Math.round(t/Sp)*Sp,Da=class extends oe{static properties={host:{attribute:!1},doc:{attribute:!1},roomId:{},edge:{type:Number},_sel:{state:!0},_drag:{state:!0}};constructor(){super(),this._sel=null,this._drag=null}get room(){return this.host.floor?.rooms.find(e=>e.id===this.roomId)}frame(){let e=this.room;return e&&this.host.floor?Ia(this.host.floor,e,this.edge,this.host.doc.settings.wall_interior):null}boxes(){let e=this.room,n=this.frame();return e&&n&&this.host.floor?kp(this.host.floor,e,n):[]}place(e,n,r){let o=this.room,i=this.frame();!o||!i||this.host.change((s,l)=>{if(e.kind==="furniture"){let a=l.furniture.find(c=>c.id===e.id);a&&Object.assign(a,xp(i,a,n,e.lifts?r:null))}else{let a=l.openings.find(u=>u.id===e.id),c=l.rooms.find(u=>u.id===a?.room_id);a&&c&&Object.assign(a,$p(c.id===o.id?i:Ia(l,c,a.edge,this.host.doc.settings.wall_interior),c,a,n,e.lifts?r:null))}})}toWall(e){let r=this.renderRoot.querySelector("svg").getScreenCTM()?.inverse();if(!r)return[0,0];let o=new DOMPoint(e.clientX,e.clientY).matrixTransform(r);return[o.x,-o.y]}down(e,n){if(this._sel=n.id,!this.host.admin)return;e.currentTarget.setPointerCapture(e.pointerId);let[r,o]=this.toWall(e);this._drag={id:n.id,x0:n.x0,y0:n.y0,startU:r,startY:o,fromX:n.x0,fromY:n.y0}}move(e,n){let r=this._drag;if(!r||r.id!==n.id)return;let[o,i]=this.toWall(e),s=this.frame(),l=n.x1-n.x0,a=Math.min((s?.length??0)-l,Math.max(0,Mp(r.fromX+o-r.startU))),c=n.lifts?Math.max(0,Mp(r.fromY+i-r.startY)):r.fromY;this._drag={...r,x0:a,y0:c}}up(e){let n=this._drag;this._drag=null,!(!n||n.id!==e.id||Math.abs(n.x0-n.fromX)<1e-6&&Math.abs(n.y0-n.fromY)<1e-6)&&this.place(e,n.x0,n.y0)}nameOf(e){if(e.kind==="furniture")return this.host.floor?.furniture.find(o=>o.id===e.id)?.name||qe(this.host.hass,e.type);let n=this.host.floor?.openings.find(r=>r.id===e.id);return n?this.host.t(`preset_${yn(n)}`):e.type}updated(e){(e.has("edge")||e.has("roomId"))&&(this._sel=null)}render(){let e=this.host.t,n=this.room,r=this.frame();if(!n||!r)return _;let o=n.points.length,i=h=>pe(this.host.hass,h),s=this.boxes().map(h=>this._drag?.id===h.id?{...h,x1:this._drag.x0+(h.x1-h.x0),y1:this._drag.y0+(h.y1-h.y0),x0:this._drag.x0,y0:this._drag.y0}:h),l=Math.max(r.heightLeft,r.heightRight,...s.map(h=>h.y1)),a=.35,c=`${-a} ${-(l+a)} ${r.length+2*a} ${l+2*a+.25}`,u=s.find(h=>h.id===this._sel)??null,d=h=>{let f=Math.min(.14,Math.max(.07,(h.x1-h.x0)/7));return R`<text x=${(h.x0+h.x1)/2} y=${-(h.y0+h.y1)/2} font-size=${f} text-anchor="middle" dominant-baseline="middle">${this.nameOf(h)}</text>`},p=u?R`<g class="dim">
          <line x1="0" x2=${u.x0} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${u.x0/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(u.x0)}</text>
          <line x1=${u.x1} x2=${r.length} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${(u.x1+r.length)/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(r.length-u.x1)}</text>
          ${u.y0>.005?R`<line x1=${(u.x0+u.x1)/2} x2=${(u.x0+u.x1)/2} y1="0" y2=${-u.y0} /><text x=${(u.x0+u.x1)/2+.05} y=${-u.y0/2} font-size="0.11">${i(u.y0)}</text>`:_}
        </g>`:_;return m`<div class="backdrop" @click=${h=>h.target===h.currentTarget&&this.close()}>
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
          <line class="floor" x1=${-a} x2=${r.length+a} y1="0" y2="0" />
          ${s.map(h=>R`<g class="box ${h.kind} ${h.type} ${h.id===this._sel?"sel":""} ${this.host.admin?"movable":""}"
              @pointerdown=${f=>this.down(f,h)}
              @pointermove=${f=>this.move(f,h)}
              @pointerup=${()=>this.up(h)}
              @pointercancel=${()=>this._drag=null}>
              <rect x=${h.x0} y=${-h.y1} width=${Math.max(.01,h.x1-h.x0)} height=${Math.max(.01,h.y1-h.y0)} rx="0.02" />
              ${d(h)}
            </g>`)}
          ${p}
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
                    /></label>`:_}`:m`<span class="muted">${e("wall_view_hint")}</span>`}
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
  `};customElements.get("nf-wall-view")||customElements.define("nf-wall-view",Da);function p0(t,e){let n=new Set([...Object.keys(t),...Object.keys(e)]);if(n.size===0)return 1/0;let r=0;for(let o of n)r+=Math.min(Math.abs((t[o]??-100)-(e[o]??-100)),40)**2;return Math.sqrt(r/n.size)}function Rp(t,e){if(Object.keys(e).length===0)return{room:null,distance:1/0,margin:0};let n=new Map;for(let s of t){let l=p0(s.rssi,e);l<(n.get(s.room)??1/0)&&n.set(s.room,l)}let r=[...n].sort((s,l)=>s[1]-l[1]);if(r.length===0)return{room:null,distance:1/0,margin:0};let[o,i]=r[0];return i>18?{room:null,distance:i,margin:0}:{room:o,distance:i,margin:r.length>1?r[1][1]-i:18}}var f0=t=>{let e=[...t].sort((r,o)=>r-o),n=e.length>>1;return e.length%2?e[n]:(e[n-1]+e[n])/2};function m0(t){let e={},n=new Set(t.flatMap(r=>Object.keys(r)));for(let r of n){let o=t.filter(i=>r in i).map(i=>i[r]);o.length*2>t.length&&(e[r]=Math.round(f0(o)*10)/10)}return e}function Ep(t,e,n=3){let r=e.filter(s=>Object.keys(s).length>0);if(r.length===0)return[];let o=Math.max(1,Math.min(n,Math.floor(r.length/3))),i=[];for(let s=0;s<o;s++){let l=r.slice(Math.floor(s*r.length/o),Math.floor((s+1)*r.length/o)),a=m0(l);Object.keys(a).length>0&&i.push({room:t,rssi:a})}return i}var Ap=(t,e,n)=>[...t.filter(r=>r.room!==e),...n],Fp=t=>Math.max(0,Math.min(1,(t+95)/50));var g0=1500,La=class extends oe{static properties={host:{attribute:!1},doc:{attribute:!1},_found:{state:!0},_pick:{state:!0},_name:{state:!0},_tag:{state:!0},_room:{state:!0},_scan:{state:!0},_samples:{state:!0},_error:{state:!0}};timer=0;recordStarted=0;constructor(){super(),this._found=null,this._pick="",this._name="",this._tag=null,this._room="",this._scan=null,this._samples=null,this._error=""}createRenderRoot(){return this}get tags(){return this.host.doc.settings.ble?.tags??[]}get rooms(){let e=this.host.doc.floors;return e.flatMap(n=>n.rooms.map(r=>({id:r.id,label:e.length>1?`${n.name} \xB7 ${r.name}`:r.name})))}connectedCallback(){super.connectedCallback(),this.loadDevices()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.timer)}updated(e){e.has("_tag")&&this.restartPolling()}async loadDevices(){try{this._found=await this.host.hass.callWS({type:"nextfloor/ble/devices"})}catch(e){this._error=String(e?.message??e)}}restartPolling(){if(window.clearInterval(this.timer),this._scan=null,!this._tag)return;let e=()=>{this.pollOnce()};e(),this.timer=window.setInterval(e,g0)}async pollOnce(){let e=this.tags.find(n=>n.id===this._tag);if(!(!e||!this.host.hass))try{let n=await this.host.hass.callWS({type:"nextfloor/ble/scan",...e.entity?{entity:e.entity}:{address:e.address}});this._scan=n,this._error="",this._samples&&(this._samples=[...this._samples,Object.fromEntries(Object.entries(n.readings).map(([r,o])=>[r,o.rssi]))],Date.now()-this.recordStarted>=30*1e3&&this.finishRecording(e,n))}catch(n){this._error=String(n?.message??n)}}reading(){return Object.fromEntries(Object.entries(this._scan?.readings??{}).map(([e,n])=>[e,n.rssi]))}startRecording(){this._room&&(this.recordStarted=Date.now(),this._samples=[])}finishRecording(e,n){let r=this._samples??[];this._samples=null;let o=Ep(this._room,r);if(o.length===0)return;let i=Object.fromEntries(Object.entries(n.readings).map(([s,l])=>[s,l.name]));this.update2(e.id,s=>{s.prints=Ap(s.prints,this._room,o),s.scanners={...s.scanners??{},...i}})}update2(e,n){this.host.change(r=>{let o=r.settings.ble?.tags.find(i=>i.id===e);o&&n(o)})}addTag(){let e=this._pick;if(!e)return;let n=e.startsWith("device_tracker."),r=this._found?.devices.find(s=>s.address===e),o=this._name.trim()||r?.name||this.host.hass?.states[e]?.attributes.friendly_name||e,i={id:D("ble"),name:String(o).slice(0,60),prints:[],...n?{entity:e}:{address:e}};this.host.change(s=>{s.settings.ble={tags:[...s.settings.ble?.tags??[],i]}}),this._tag=i.id,this._pick="",this._name=""}removeTag(e){this.host.change(n=>{let r=(n.settings.ble?.tags??[]).filter(o=>o.id!==e);n.settings.ble=r.length?{tags:r}:null}),this._tag===e&&(this._tag=null)}bars(e){let n=this.host.t,r=this._scan,o=Object.entries(r?.readings??{}).sort((i,s)=>s[1].rssi-i[1].rssi);return m`<div class="nf-ble-bars">
      ${o.length===0?m`<p class="nf-sub">${r&&!r.available?n("ble_unavailable"):r?.address===null&&e.entity?n("ble_no_address"):n("ble_none_heard")}</p>`:o.map(([i,s])=>m`<div class="nf-ble-row" title=${i}>
            <span class="nf-ble-name">${s.name}</span>
            <span class="nf-ble-track"><span class="nf-ble-fill" style="width:${Math.round(Fp(s.rssi)*100)}%"></span></span>
            <span class="nf-ble-db">${Math.round(s.rssi)}</span>
          </div>`)}
      ${o.length===1?m`<p class="nf-sub">${n("ble_one_scanner")}</p>`:_}
    </div>`}learn(e){let n=this.host.t,r=this.rooms,o=Rp(e.prints,this.reading()),i=c=>r.find(u=>u.id===c)?.label??null,s=c=>e.prints.filter(u=>u.room===c).length,l=this._samples!==null,a=l?Math.max(0,30-Math.round((Date.now()-this.recordStarted)/1e3)):0;return m`${this.bars(e)}
      <p class="nf-ble-now"><b>${n("ble_now")}:</b> ${o.room?i(o.room):n("ble_unknown")}</p>
      <div class="nf-form">
        <label class="nf-field nf-wide">${n("ble_learn_room")}
          <select ?disabled=${l} .value=${this._room} @change=${c=>this._room=c.target.value}>
            <option value="">–</option>
            ${r.map(c=>m`<option value=${c.id} ?selected=${this._room===c.id}>${c.label}${s(c.id)?` \u2713 ${s(c.id)}`:""}</option>`)}
          </select>
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!this._room||l||Object.keys(this._scan?.readings??{}).length===0} @click=${()=>this.startRecording()}>
          ${l?n("ble_recording",{s:a}):n("ble_record",{s:30})}
        </button>
        ${this._room&&s(this._room)?m`<button class="nf-btn" ?disabled=${l} @click=${()=>this.update2(e.id,c=>c.prints=c.prints.filter(u=>u.room!==this._room))}>${n("ble_forget_room")}</button>`:_}
      </div>
      <p class="nf-sub">${n("ble_learn_hint")}</p>`}render(){let e=this.host.t,n=this.tags,r=new Set(n.flatMap(a=>[a.address??"",a.entity??""])),o=Object.entries(this.host.hass?.states??{}).filter(([a,c])=>a.startsWith("device_tracker.")&&typeof c.attributes.current_address=="string"&&!r.has(a)).map(([a,c])=>[a,String(c.attributes.friendly_name??a)]),i=(this._found?.devices??[]).filter(a=>!r.has(a.address)),s=this._found?.scanners.length??0,l=n.find(a=>a.id===this._tag)??null;return m`
      ${this._found&&!this._found.available?m`<p class="nf-sub">${e("ble_unavailable")}</p>`:m`<p class="nf-sub">${e("ble_scanners",{n:s})}</p>`}
      ${this._error?m`<p class="nf-sub">${this._error}</p>`:_}
      ${n.map(a=>m`<div class="nf-row nf-dev-row">
          <span class="nf-dev-name"><span>${a.name}</span><small>${a.entity??a.address} · ${e("ble_spots",{n:a.prints.length})}</small></span>
          <button class="nf-btn" @click=${()=>this._tag=this._tag===a.id?null:a.id}>${this._tag===a.id?e("ble_close"):e("ble_learn")}</button>
          <button class="nf-btn" title=${e("delete")} @click=${()=>this.removeTag(a.id)}>✕</button>
        </div>`)}
      ${l?m`<div class="nf-ble-learn">${this.learn(l)}<p class="nf-sub">${e("ble_sensor_hint",{name:l.name})}</p></div>`:_}
      <div class="nf-form">
        <label class="nf-field nf-wide">${e("ble_add")}
          <select .value=${this._pick} @change=${a=>this._pick=a.target.value}>
            <option value="">–</option>
            ${o.length?m`<optgroup label=${e("ble_trackers")}>${o.map(([a,c])=>m`<option value=${a}>${c}</option>`)}</optgroup>`:_}
            <optgroup label=${e("ble_devices")}>${i.map(a=>m`<option value=${a.address}>${a.named?a.name:a.address} · ${a.address} · ${a.rssi} dBm</option>`)}</optgroup>
          </select>
        </label>
        <label class="nf-field nf-wide">${e("ble_name")}
          <input type="text" maxlength="60" .value=${this._name} @input=${a=>this._name=a.target.value} />
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn" @click=${()=>{this.loadDevices()}}>${e("ble_refresh")}</button>
        <button class="nf-btn nf-primary" ?disabled=${!this._pick||n.length>=10} @click=${()=>this.addTag()}>${e("ble_add_button")}</button>
      </div>`}};customElements.get("nf-ble-locate")||customElements.define("nf-ble-locate",La);var _0=new URL(import.meta.url),b0=new URL("./nextfloor-3d.js?v=70f547c83736",_0).href,Tp;function un(){return Tp??=import(b0),Tp}var zp=["lights","seating","tables","storage","beds","kitchen","appliances","bath","media","office","tech","climate","energy","garden","plants","kids","fitness","pets","workshop","music","season","pictures","vehicles","building","decor"],y0={sofa:"seating",armchair:"seating",stool:"seating",chair:"seating",bench:"seating",corner_bench:"seating",bar_stool:"seating",office_chair:"office",coffee_table:"tables",table:"tables",table_round:"tables",desk:"office",worktop:"kitchen",tv_board:"media",tv_wall:"media",sideboard:"storage",shelf:"storage",tall_cabinet:"storage",wardrobe:"storage",dresser:"storage",nightstand:"beds",coat_rack:"storage",plant:"plants",rug:"decor",kitchen:"kitchen",kitchen_wall:"kitchen",kitchen_tall:"kitchen",island:"kitchen",sink:"kitchen",stove:"kitchen",dishwasher:"appliances",fridge:"appliances",washer:"appliances",dryer:"appliances",robot_vacuum:"appliances",bed:"beds",bunk_bed:"beds",bathtub:"bath",shower:"bath",wc:"bath",washbasin:"bath",radiator:"climate",stairs:"building",parking:"vehicles",ceiling_fan:"lights"},w0=[[/xmas|advent|window_star|candle_arch|reindeer|pumpkin|easter|snowman|gift_pile|lights_outdoor/,"season"],[/^frame_|^canvas$|^poster$|picture_ledge/,"pictures"],[/piano|drum_kit|guitar|synth|mic_stand|vinyl|easel|studio_monitor|mixing_desk/,"music"],[/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/,"lights"],[/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/,"pets"],[/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/,"building"],[/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|herb_planter|flower|raised_bed|greenhouse|ficus|cactus|bonsai|living_wall|vertical_garden/,"plants"],[/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/,"kids"],[/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/,"fitness"],[/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna|oil_|expansion_vessel|water_tank|infrared|cold_bath/,"climate"],[/wallbox|inverter|battery|solar|meter|fuse_box|grid/,"energy"],[/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower|welder|ev_bike_charger|tool_chest|parts_cabinet/,"workshop"],[/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/,"media"],[/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/,"office"],[/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket|co_detector|presence_|water_leak|air_quality|doorbell/,"tech"],[/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line|kamado|pizza_oven|fire_pit|sandbox|wood_pile|bird_house|cistern|pond|water_feature|beach_chair/,"garden"],[/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|urinal|wt_\d|handtuch|seife|wc/,"bath"],[/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray|espresso|air_fryer|water_bar|thermo_cooker/,"appliances"],[/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/,"kitchen"],[/bed|boxspring|futon|nightstand|canopy|mattress/,"beds"],[/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook|floor_cushion|tatami/,"seating"],[/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/,"tables"],[/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest|locker/,"storage"]];function v0(t){if(t.vehicle)return"vehicles";if(t.climate)return"climate";if(!t.type.startsWith("pack:"))return t.lamp?"lights":y0[t.type]??"decor";let e=w0.find(([n])=>n.test(t.id));return e?e[1]:t.lamp?"lights":"decor"}var Pp=[[/k(u|ü)che|kitchen|kochen/,["kitchen","appliances","tables","seating","storage","plants","decor"]],[/wohn|living|lounge|salon/,["seating","tables","storage","media","plants","decor","climate","tech"]],[/\bess|dining/,["tables","seating","storage","plants","decor","media"]],[/schlaf|bed|gast|guest/,["beds","storage","seating","tables","decor","plants","climate","media"]],[/kind|kids|child|baby|spiel|play|nursery/,["kids","beds","storage","seating","tables","decor"]],[/bad|bath|wc|toilet|dusch|shower|sauna/,["bath","appliances","storage","climate","plants"]],[/b(u|ü)ro|office|arbeit|study|work/,["office","tech","storage","seating","tables","plants"]],[/kino|cinema|media|game|gaming|hifi/,["media","seating","tables","storage","office"]],[/fitness|gym|sport|training/,["fitness","media","storage","climate"]],[/garage|carport|stellplatz|parking/,["vehicles","workshop","energy","storage","garden"]],[/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/,["workshop","storage","appliances","energy","climate","fitness","tech"]],[/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/,["appliances","climate","energy","storage","tech","bath"]],[/flur|diele|hall|entr|eingang|corridor|treppe|stair/,["storage","seating","decor","plants","building"]],[/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/,["garden","plants","seating","tables","pets","kids"]]];function Ha(t){let e=(t??"").toLowerCase(),n=Pp.find(([r])=>r.test(e));return n?new Set(["lights",...n[1]]):null}function Ca(t){let e=(t??"").toLowerCase();return Pp.find(([n])=>n.test(e))?.[1][0]??null}var Ip=t=>t==="garden"||t==="plants"||t==="vehicles",Dp=/_(\d+(?:x\d+)?)$/;function Op(t){let e=new Map;for(let n of t){let r=v0(n),o=n.type.startsWith("pack:")&&!n.vehicle?n.id.replace(Dp,""):n.id,i=`${n.source}:${o}`,s=e.get(i);s&&s.category===r?s.entries.push(n):e.set(s?`${i}:${n.id}`:i,{key:s?`${i}:${n.id}`:i,category:r,entries:[n]})}for(let n of e.values())n.entries.sort((r,o)=>r.size[0]-o.size[0]||r.size[1]-o.size[1]);return[...e.values()]}function Lp(t,e){let n=o=>Math.round(o*100);return e.some(o=>o!==t&&n(o.size[0])===n(t.size[0]))?Dp.exec(t.id)?.[1]??`${n(t.size[0])}\xD7${n(t.size[2])}`:`${n(t.size[0])}`}function Hp(t,e,n=12){return[e,...t.filter(r=>r!==e)].slice(0,n)}var Cp=t=>t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),Np=t=>Cp(t).split(/\s+/).filter(Boolean),Bp=(t,e)=>{let n=Cp(e);return t.every(r=>n.includes(r))};function Wp(){let e=navigator.deviceMemory??8,n=navigator.hardwareConcurrency||8;return e<=3||n<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Vp=112,k0="nextfloor-thumbs";function x0(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0).toString(36)}function Na(t){let e=G(t);return`${t}|${e?x0(JSON.stringify(e)):"b"}|${Vp}`}function $0(){return new Promise(t=>{try{let e=indexedDB.open(k0,1);e.onupgradeneeded=()=>e.result.createObjectStore("thumbs"),e.onsuccess=()=>t(e.result),e.onerror=()=>t(null)}catch{t(null)}})}var Ba=class{enabled=!Wp();memory=new Map;waiting=new Map;queue=[];db=null;running=!1;packs=[];cached(e){return this.memory.get(Na(e))}get(e){let n=Na(e),r=this.memory.get(n);return r?Promise.resolve(r):new Promise(o=>{let i=this.waiting.get(n);if(i)return void i.push(o);this.waiting.set(n,[o]),this.lookUp(e,n)})}settle(e,n){n&&this.memory.set(e,n);for(let r of this.waiting.get(e)??[])r(n);this.waiting.delete(e)}async lookUp(e,n){this.db??=$0();let r=await this.db,o=r?await new Promise(i=>{try{let s=r.transaction("thumbs").objectStore("thumbs").get(n);s.onsuccess=()=>i(typeof s.result=="string"?s.result:null),s.onerror=()=>i(null)}catch{i(null)}}):null;if(o)return this.settle(n,o);this.queue.push(e),this.pump()}pump(){if(this.running)return;let e=this.queue.shift();if(!e)return;this.running=!0;let n=window.requestIdleCallback;(o=>n?n(o,{timeout:300}):setTimeout(o,16))(async()=>{let o=Na(e),i=null;try{let[s,l,a]=st(e);i=(await un()).furniturePreview({type:e,w:s,d:l,h:a,variant:null,lamp:Oo[e]??null},Vp,[...this.packs]),this.keep(o,i)}catch{i=null}this.settle(o,i),this.running=!1,this.pump()})}async keep(e,n){let r=await this.db;try{r?.transaction("thumbs","readwrite").objectStore("thumbs").put(n,e)}catch{}}},Ct=new Ba,io=null,S0=t=>{for(let e of t)e.isIntersecting&&e.target.visible()},Wa=class extends oe{static properties={type:{},_url:{state:!0}};static styles=le`
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
  `;constructor(){super(),this.type="",this._url=null}connectedCallback(){super.connectedCallback(),Ct.enabled&&(this._url=Ct.cached(this.type)??null,!this._url&&(io??=new IntersectionObserver(S0,{rootMargin:"120px"}),io.observe(this)))}disconnectedCallback(){super.disconnectedCallback(),io?.unobserve(this)}updated(e){e.has("type")&&e.get("type")!==void 0&&(this._url=Ct.cached(this.type)??null,!this._url&&Ct.enabled&&io?.observe(this))}visible(){io?.unobserve(this);let e=this.type;Ct.get(e).then(n=>{this.type===e&&(this._url=n)})}render(){return this._url?m`<img src=${this._url} alt="" />`:_}};customElements.get("nf-thumb")||customElements.define("nf-thumb",Wa);var Kp="nextfloor.library2",M0={language:"en"},Si=class{onChange;text="";saved;shown=null;picked=new Map;constructor(e){this.onChange=e,this.saved={folded:{},favourites:[],recent:[],flags:["room"]};try{let n=localStorage.getItem(Kp);n&&(this.saved={...this.saved,...JSON.parse(n)})}catch{}}store(e){this.saved={...this.saved,...e},this.onChange();try{localStorage.setItem(Kp,JSON.stringify(this.saved))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e,n){return this.saved.folded[e]??n}toggle(e,n){this.store({folded:{...this.saved.folded,[e]:!this.isOpen(e,n)}})}has(e){return this.saved.flags.includes(e)}flip(e){this.store({flags:this.has(e)?this.saved.flags.filter(n=>n!==e):[...this.saved.flags,e]})}get favourites(){return this.saved.favourites}isFavourite(e){return this.saved.favourites.includes(e)}toggleFavourite(e){this.store({favourites:this.isFavourite(e)?this.saved.favourites.filter(n=>n!==e):[e,...this.saved.favourites]})}get recent(){return this.saved.recent}used(e){this.store({recent:Hp(this.saved.recent,e)})}pickedOf(e){let n=this.picked.get(e.key);return e.entries.find(r=>r.type===n)??e.entries[0]}pick(e,n){this.picked.set(e.key,n),this.onChange()}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,n,r){let o=n.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,l,a]=st(e),c=(await un()).furniturePreview({type:e,w:s,d:l,h:a,variant:null,lamp:Oo[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function R0(t,e){let n=t.hass?.language??"en",o=[...[...new Set(Object.values(Wc).flat())].map(l=>({type:l,source:"builtin",id:l,size:Je[l],lamp:ce(l),electric:Et(l)})),...e.flatMap(l=>l.items.map(a=>({type:de(l.id,a.id),source:l.id,id:a.id,size:a.size,lamp:!!a.light,electric:!!a.electric,vehicle:!!a.vehicle,climate:!!a.climate})))],i=new Map(e.map(l=>[l.id,Oe(l,n)])),s=new Map(e.flatMap(l=>l.items.map(a=>[de(l.id,a.id),a])));return Op(o).map(l=>{let a=l.entries[0],c=s.get(a.type),u=c?Ye(c,a.type,n):t.t(`furn_${a.type}`),d=l.entries.length>1&&u.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i,"").trim()||u,p=l.entries.map(h=>{let f=s.get(h.type);return f?[...Object.values(f.name),Ye(f,h.type,n)].join(" "):xe(M0,`furn_${h.type}`)}).join(" ");return{card:l,label:d,search:`${p} ${t.t(`lib_cat_${l.category}`)}`,from:i.get(a.source)??"NextFloor"}})}var E0=(t,e)=>Bp(e,`${t.label} ${t.search} ${t.from} ${t.card.entries.map(n=>n.id.replace(/_/g," ")).join(" ")}`),A0=t=>t.lamp?"light":t.electric?"switch":null;function F0(t,e,n,r){let o=t.t,i=e.pickedOf(n.card),[s,l]=i.size,a=A0(i),c=p=>{e.showPreview(i.type,p.currentTarget,r.packs)},u=()=>{e.used(i.type),r.add(i.type)},d=e.isFavourite(i.type);return m`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${a?o(a==="light"?"lib_badge_light":"lib_badge_electric"):n.label}
      @click=${u}
      @mouseenter=${c}
      @focus=${c}
      @mouseleave=${()=>e.hidePreview()}
      @blur=${()=>e.hidePreview()}
    >
      ${Ct.enabled?m`<nf-thumb .type=${i.type}></nf-thumb>`:_}
      <span class="nf-card-name"
        >${n.label}${a?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Ht(a)} /></svg>`:_}</span
      >
      <span class="nf-card-meta">${Math.round(s*100)} × ${Math.round(l*100)} cm · ${n.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${d} title=${o(d?"lib_fav_remove":"lib_fav_add")} @click=${()=>e.toggleFavourite(i.type)}>${d?"\u2605":"\u2606"}</button>
    ${n.card.entries.length>1?m`<div class="nf-card-sizes" role="group" aria-label=${o("lib_sizes")}>
          ${n.card.entries.map(p=>m`<button class="nf-size" aria-pressed=${p===i} @click=${()=>e.pick(n.card,p.type)}>${Lp(p,n.card.entries)}</button>`)}
        </div>`:_}
  </div>`}function Up(t,e,n,r){return m`<div class="nf-cards">${n.map(o=>F0(t,e,o,r))}</div>`}function Va(t,e,n,r,o,i,s){if(o.length===0)return _;let l=e.isOpen(n,s);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${l} @click=${()=>e.toggle(n,s)}>
      <span class="nf-lib-caret">${l?"\u25BE":"\u25B8"}</span>${r} <span class="nf-lib-count">${o.length}</span>
    </button>
    ${l?Up(t,e,o,i):_}`}function Gp(t,e){return t.flatMap(n=>{let r=e.find(o=>o.card.entries.some(i=>i.type===n));return r?[{...r,card:{...r.card,key:`one:${n}`,entries:r.card.entries.filter(o=>o.type===n)}}]:[]})}function T0(t){let e=Ca(t),n=Ha(t),r=o=>o===e?0:n?.has(o)?1:2;return[...zp].sort((o,i)=>r(o)-r(i))}function jp(t,e,n,r){let o=t.t;Ct.packs=r.packs;let i=R0(t,r.packs),s=Np(e.query),l=Ha(n),a=!!l&&e.has("room")&&s.length===0,c=i.filter(p=>{let h=p.card.entries[0];return a&&!l.has(p.card.category)||e.has("linkable")&&!h.lamp&&!h.electric||e.has("lit")&&!h.lamp||e.has("outdoor")&&!Ip(p.card.category)?!1:s.length===0||E0(p,s)}),u=(p,h)=>m`<button class="nf-chip nf-lib-chip" aria-pressed=${e.has(p)} @click=${()=>e.flip(p)}>${h}</button>`,d=s.length>0;return m`<section>
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
        ${l?u("room",o("lib_for_room",{room:n??""})):_} ${u("linkable",`\u26A1 ${o("lib_linkable")}`)} ${u("lit",`\u{1F4A1} ${o("lib_lit")}`)}
        ${u("outdoor",`\u{1F333} ${o("lib_outdoor")}`)}
      </div>
      ${d&&c.length===0?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:_}
      ${d?Up(t,e,c,r):m`${Va(t,e,"favourites",`\u2605 ${o("lib_favourites")}`,Gp(e.favourites,i),r,!0)}
          ${Va(t,e,"recent",`\u{1F558} ${o("lib_recent")}`,Gp(e.recent.slice(0,6),i),r,!1)}
          ${T0(n).map(p=>Va(t,e,p,o(`lib_cat_${p}`),c.filter(h=>h.card.category===p),r,p===(Ca(n)??"lights")))}
          ${a?m`<button class="nf-btn nf-lib-all" @click=${()=>e.flip("room")}>${o("lib_all_rooms")}</button>`:_}`}
    </section>`}function Zp(t,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${qe(t.hass,e.type)}</b>
  </div>`:_}function Ka(t,e,n,r=24){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(o<1e-6||Math.abs(n)<1e-4)return[];let i=Math.max(-o*2,Math.min(o*2,n)),s=[(e[0]-t[0])/o,(e[1]-t[1])/o],l=[s[1],-s[0]],a=o*o/4/(2*Math.abs(i))+Math.abs(i)/2,c=2*Math.atan(2*Math.abs(i)/o),u=Math.max(2,Math.min(r,Math.ceil(2*c/Math.PI*180/11.25))),d=[l[0]*Math.sign(i),l[1]*Math.sign(i)],p=[(t[0]+e[0])/2,(t[1]+e[1])/2],h=[p[0]-d[0]*(a-Math.abs(i)),p[1]-d[1]*(a-Math.abs(i))],f=[];for(let g=1;g<u;g++){let y=-c+2*c*g/u;f.push([h[0]+a*(d[0]*Math.cos(y)+s[0]*Math.sin(y)),h[1]+a*(d[1]*Math.cos(y)+s[1]*Math.sin(y))])}return f}var Ga=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Ua(t,e){let n=Math.max(0,e);for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return{piece:r,offset:Math.min(n,o)};n-=o}return{piece:0,offset:0}}var Ae=t=>Math.round(t*1e3)/1e3,ja=t=>t.map(([e,n])=>[Ae(e),Ae(n)]);function qp(t,e){return{id:D("room"),name:e,area_id:null,points:ja(t),floor_material:"wood"}}function Yp(t){return{...structuredClone(t),id:D("room"),points:ja(t.points.map(([e,n])=>[e+.5,n+.5]))}}function Xp(t,e){let n=t.rooms.find(r=>r.id===e);t.rooms=t.rooms.filter(r=>r.id!==e),t.openings=t.openings.filter(r=>r.room_id!==e||r.wall),n&&(t.placements=t.placements.filter(r=>!N([r.x,r.z],n.points)))}function Qp(t,e,n){let r=t.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(n-1+r.points.length)%r.points.length;r.points.splice(n,1),r.wall_heights?.splice(n,1),r.wall_slopes?.splice(n,1),r.wall_thickness?.splice(n,1);let i=s=>s.room_id===e&&!s.wall;return t.openings=t.openings.filter(s=>!(i(s)&&(s.edge===n||s.edge===o))).map(s=>i(s)&&s.edge>n?{...s,edge:s.edge-1}:s),!0}function Jp(t,e,n){if(!Number.isFinite(n))return null;let r=ue(t.points),{x0:o,z0:i,x1:s,z1:l}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,l]=[n,n+(l-i)]:n>.05&&(e==="w"?s=o+n:l=i+n),ja([[o,i],[s,i],[s,l],[o,l]])}function ef(t,e,n,r){return!Number.isFinite(r)||e<0||e>=t.points.length?null:t.points.map((o,i)=>i===e?n===0?[Ae(r),o[1]]:[o[0],Ae(r)]:[o[0],o[1]])}var z0=/^(Raum|Room) \d+$/;function Za(t,e,n){let r=e?n[e]:void 0,o=!t.name||z0.test(t.name)||Object.values(n).some(i=>i.name===t.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function tf(t,e){let n=e.filter(a=>X(a.entity_id)==="light"&&(a.mount??"ceiling")==="ceiling"&&N([a.x,a.z],t.points));if(n.length<2)return[];let r=ue(t.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,i)))),l=Math.ceil(n.length/s);return n.map((a,c)=>{let u=Math.floor(c/s),d=u===l-1?n.length-s*(l-1):s,p=c-u*s;return{entityId:a.entity_id,x:Ae(r.x0+o/d*(p+.5)),z:Ae(r.z0+i/l*(u+.5))}})}function qa(t,e,n,r){let o=t.rooms.find(u=>u.id===e);if(!o)return;let i=o.points[n],s=o.points[(n+1)%o.points.length];o.points.splice(n+1,0,r);let[l,a]=[o.wall_heights?.[n],o.wall_slopes?.[n]];if(typeof l=="number"&&typeof a=="number"&&o.wall_slopes){let u=Math.hypot(s[0]-i[0],s[1]-i[1]),d=Ae(l+(a-l)*Math.min(1,Math.hypot(r[0]-i[0],r[1]-i[1])/(u||1)));o.wall_slopes.splice(n,1,d,a),o.wall_heights.splice(n+1,0,d)}else o.wall_heights?.splice(n+1,0,o.wall_heights[n]??null),o.wall_slopes?.splice(n+1,0,null);o.wall_thickness?.splice(n+1,0,o.wall_thickness[n]??null);let c=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let u of t.openings)u.room_id!==e||u.wall||(u.edge>n?u.edge+=1:u.edge===n&&u.offset>c&&(u.edge=n+1,u.offset=Ae(u.offset-c)))}var P0=22.5;function nf(t,e,n){let r=Math.min(Math.abs(e),t*2),o=t*(1+8/3*(r/Math.max(1e-6,t))**2),i=4*Math.atan(2*r/Math.max(1e-6,t))*180/Math.PI,s=Math.max(2,Math.ceil(i/P0));if(n<=0)return 24;let l=Math.floor(o/(n+.1));return l>=s?l:0}function I0(t,e,n,r){let o=Ga(n);t.forEach((i,s)=>{let{piece:l,offset:a}=Ua(n,e[s]*o),c=Math.hypot(n[l+1][0]-n[l][0],n[l+1][1]-n[l][1]);i.edge=r+l,i.offset=Ae(c>i.width?Math.min(c-i.width/2,Math.max(i.width/2,a)):c/2)})}function rf(t,e,n,r){let o=t.rooms.find(v=>v.id===e);if(!o||n<0||n>=o.points.length||Math.abs(r)<.01)return!1;let i=o.points[n],s=o.points[(n+1)%o.points.length],l=Math.hypot(s[0]-i[0],s[1]-i[1]);if(l<.2)return!1;let[a,c]=[(s[0]-i[0])/l,(s[1]-i[1])/l],u=[(i[0]+s[0])/2+c*.02,(i[1]+s[1])/2-a*.02],p=N(u,o.points)?-r:r,h=(v,w)=>t.openings.filter(x=>x.room_id===v.id&&!x.wall&&x.edge===w),f=t.rooms.flatMap(v=>v.points.map((w,x)=>{let k=v.points[(x+1)%v.points.length],$=(A,F)=>Math.abs(A[0]-F[0])<.001&&Math.abs(A[1]-F[1])<.001;return $(w,i)&&$(k,s)?[v,x,!1]:$(w,s)&&$(k,i)?[v,x,!0]:null}).filter(w=>!!w)),g=Math.max(0,...f.flatMap(([v,w])=>h(v,w).map(x=>x.width))),y=nf(l,r,g);if(!y)return!1;let b=Ka(i,s,p,y).map(([v,w])=>[Ae(v),Ae(w)]);if(!b.length)return!1;for(let[v,w,x]of f){let k=x?[...b].reverse():b,$=h(v,w),A=v.points[w],F=$.map(T=>Math.min(1,Math.max(0,T.offset/l)));for(let T of $)T.edge=-1;k.forEach((T,I)=>qa(t,v.id,w+I,T)),v.wall_splits?.splice(w+1,0,...k.map(()=>null)),v.wall_splits?.[w]&&(v.wall_splits[w]=null),I0($,F,[A,...k,v.points[(w+k.length+1)%v.points.length]],w)}return!0}function of(t,e,n){let r=t.walls??[],o=r.findIndex(f=>f.id===e);if(o<0||Math.abs(n)<.01)return[];let i=r[o],s=Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1]),l=t.openings.filter(f=>f.wall===e),a=Math.max(0,...l.map(f=>f.width)),c=nf(s,n,a);if(!c)return[];let u=Ka(i.a,i.b,n,c).map(([f,g])=>[Ae(f),Ae(g)]);if(!u.length)return[];let d=[i.a,...u,i.b],p=d.slice(1).map((f,g)=>({...i,id:g===0?i.id:D("wall"),a:d[g],b:f}));r.splice(o,1,...p),t.walls=r;let h=Ga(d);for(let f of l){let{piece:g,offset:y}=Ua(d,f.offset/s*h),b=Math.hypot(d[g+1][0]-d[g][0],d[g+1][1]-d[g][1]);f.wall=p[g].id,f.offset=Ae(b>f.width?Math.min(b-f.width/2,Math.max(f.width/2,y)):b/2)}return p.map(f=>f.id)}var Wn=t=>Math.round(t*1e3)/1e3;function Mi(t,e,n){return[Math.round((e[0]-t[0])/n)*n,Math.round((e[1]-t[1])/n)*n]}var dn=(t,e)=>e?.01:t,Vn=(t,e,n=5)=>Math.hypot(t[0]-e[0],t[1]-e[1])>=n;function sf(t,e,n){return n?Math.abs(e[0]-t[0])>Math.abs(e[1]-t[1])?[e[0],t[1]]:[t[0],e[1]]:e}var Xe=(t,e)=>[Wn(t[0]+e[0]),Wn(t[1]+e[1])];function Ya(t,e,n,r){return[Wn(Math.round((t[0]+n[0]-e[0])/r)*r),Wn(Math.round((t[1]+n[1]-e[1])/r)*r)]}function Xa(t,e,n){let r=Math.atan2(-(e[0]-t[0]),e[1]-t[1])*180/Math.PI;return(Math.round(r/n)*n%360+360)%360}function af(t,e,n){let r=Math.atan2(e[0]-t[0],-(e[1]-t[1]))*180/Math.PI;return Math.round(r/n)*n}function lf(t,e,n){let r=wn([...t]),o=t[e],i=[Wn(n[0]),Wn(n[1])];return t.map((s,l)=>l===e?i:r?[Math.abs(s[0]-o[0])<1e-6?i[0]:s[0],Math.abs(s[1]-o[1])<1e-6?i[1]:s[1]]:[s[0],s[1]])}var Ri=t=>Math.round(t*1e3)/1e3,cf=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function D0(t,e,n){let r=null,o=n;for(let i of t){let s=cf(i,e);s<o&&([r,o]=[i,s])}return r}function O0(t,e,n){let r=null,o=n.reach;for(let i of t)n.skip&&i.id===n.skip.roomId||i.points.forEach((s,l)=>{let a=i.points[(l+1)%i.points.length],[c,u]=[a[0]-s[0],a[1]-s[1]],d=c*c+u*u;if(d<1e-9)return;let p=((e[0]-s[0])*c+(e[1]-s[1])*u)/d;if(p<=0||p>=1)return;let h=[s[0]+p*c,s[1]+p*u],f=cf(h,e),g=(y,b,v)=>Math.min(Math.max(y,Math.min(b,v)),Math.max(b,v));Math.abs(u)<1e-9&&(h[0]=g(Math.round(h[0]/n.grid)*n.grid,s[0],a[0])),Math.abs(c)<1e-9&&(h[1]=g(Math.round(h[1]/n.grid)*n.grid,s[1],a[1])),f<o&&([r,o]=[h,f])});return r}function L0(t,e,n){let r=[Ri(Math.round(e[0]/n.grid)*n.grid),Ri(Math.round(e[1]/n.grid)*n.grid)],o={},[i,s]=[n.reach,n.reach];for(let l of t)Math.abs(l[0]-e[0])<i&&(i=Math.abs(l[0]-e[0]),r[0]=l[0],o.x=l[0]),Math.abs(l[1]-e[1])<s&&(s=Math.abs(l[1]-e[1]),r[1]=l[1],o.z=l[1]);return{point:r,guides:o}}function uf(t,e){let n=e.rooms.flatMap(i=>i.points.filter((s,l)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===l)))),r=D0(n,t,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=O0(e.rooms,t,e);return o?{point:[Ri(o[0]),Ri(o[1])],guides:{point:o}}:L0(n,t,e)}var Ei=(t,e)=>pe(t.host.hass,e);function H0(t,e){let[n,r]=[t.toScreen(e.start),t.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return R`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${n[0]} y1=${n[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(n[0]+r[0])/2} y=${(n[1]+r[1])/2-10}>${Ei(t,s)}</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return R`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(n[0],r[0])} y=${Math.min(n[1],r[1])} width=${Math.abs(r[0]-n[0])} height=${Math.abs(r[1]-n[1])} />
    <text class="nf-dim" x=${(n[0]+r[0])/2} y=${Math.min(n[1],r[1])-8}>${Ei(t,o)} × ${Ei(t,i)}</text>
  </g>`}function C0(t,e,n,r){let o=[...e,...n?[n]:[]].map(u=>t.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,d)=>{let[p,h]=[t.toScreen(e[d]),t.toScreen(u)];return R`<text class="nf-dim" x=${(p[0]+h[0])/2} y=${(p[1]+h[1])/2-6}>${Ei(t,Math.hypot(u[0]-e[d][0],u[1]-e[d][1]))}</text>`}):_,l=e.map((u,d)=>{let[p,h]=t.toScreen(u),f=d===0&&i;return R`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${p} cy=${h} r=${f?9:5} />`}),[a,c]=n?t.toScreen(n):[0,0];return R`<g pointer-events="none">
    ${o.length>1?R`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:_}
    ${s}${l}
    ${n?R`<circle class="nf-cursor" cx=${a} cy=${c} r="4" />`:_}
  </g>`}function df(t,e,n){let r=e.x!==void 0?t.toScreen([e.x,0])[0]:null,o=e.z!==void 0?t.toScreen([0,e.z])[1]:null,[i,s]=e.point?t.toScreen(e.point):[0,0];return R`<g pointer-events="none">
    ${r!==null?R`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${n.h} />`:_}
    ${o!==null?R`<line class="nf-guide" x1="0" y1=${o} x2=${n.w} y2=${o} />`:_}
    ${e.point?R`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:_}
  </g>`}function hf(t,e,n,r,o){return e?H0(t,e):n!=="polygon"&&n!=="measure"?_:C0(t,r,o,n==="measure")}var se=(t,e,n,r,o="")=>R`<rect class=${o} x=${Math.min(t,n)} y=${Math.min(e,r)} width=${Math.abs(n-t)} height=${Math.abs(r-e)} />`,te=(t,e,n,r,o="")=>R`<line class=${o} x1=${t} y1=${e} x2=${n} y2=${r} />`,ff=(t,e="")=>R`<polygon class=${e} points=${t.map(n=>n.join(",")).join(" ")} />`,re=(t,e,n,r="")=>R`<circle class=${r} cx=${t} cy=${e} r=${n} />`,Qa=(t,e,n,r,o="")=>R`<ellipse class=${o} cx=${t} cy=${e} rx=${n} ry=${r} />`;function Ja(t,e,n){let r=[];for(let o=1;o<n;o++){let i=-t/2+t/n*o;r.push(te(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function pf(t,e,n,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,t*.12):0,s=[se(-t/2,-e/2,t/2,-e/2+o,"nf-sym-fill")];r&&s.push(se(-t/2,-e/2,-t/2+i,e/2,"nf-sym-fill"),se(t/2-i,-e/2,t/2,e/2,"nf-sym-fill"));let l=t-2*i;for(let a=1;a<n;a++){let c=-t/2+i+l/n*a;s.push(te(c,-e/2+o,c,e/2-.02))}return s}function mf(t,e,n,r){if(t==="stairs"&&r?.stair)return N0(r,e,n);switch(t){case"sofa":return pf(e,n,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return pf(e,n,1,!0);case"bench":return[se(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill")];case"corner_bench":{let o=Math.min(.5,n*.4);return[se(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill"),se(-e/2,-n/2,-e/2+.08,n/2,"nf-sym-fill"),te(-e/2+o,-n/2+o,e/2,-n/2+o),te(-e/2+o,-n/2+o,-e/2+o,n/2)]}case"chair":return[se(-e/2,-n/2,e/2,-n/2+.06,"nf-sym-fill")];case"office_chair":return[re(0,.03,Math.min(e,n)*.36),se(-e*.35,-n/2+.02,e*.35,-n/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[re(0,0,Math.min(e,n)*.42)];case"stool":return[se(-e/2+.04,-n/2+.04,e/2-.04,n/2-.04)];case"table":case"coffee_table":case"desk":{let o=[se(-e/2+.05,-n/2+.05,e/2-.05,n/2-.05)];return t==="desk"&&o.push(te(-.3,-n/2+.1,.3,-n/2+.1,"nf-sym-strong")),o}case"bed":case"bunk_bed":{let o=e>1.2?2:1,i=(e-.2)/o,s=[se(-e/2,-n/2,e/2,-n/2+.07,"nf-sym-fill"),te(-e/2,-n/2+(n-.1)*.36,e/2,-n/2+(n-.1)*.36)];for(let l=0;l<o;l++)s.push(se(-e/2+.13+i*l,-n/2+.12,-e/2+.07+i*(l+1),-n/2+.12+Math.min(.4,n*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Ja(e,n,t==="nightstand"||t==="tall_cabinet"||t==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[se(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),...Ja(e,n,Math.max(2,Math.round(e/.5)))];case"island":return[te(-e/2,n/2-.3,e/2,n/2-.3)];case"fridge":return[te(-e/2+.06,n/2-.04,e/2-.06,n/2-.04,"nf-sym-strong")];case"stove":{let o=Math.min(e,n)*.14;return[re(-e*.22,-n*.2,o),re(e*.22,-n*.2,o*.8),re(-e*.22,n*.2,o*.8),re(e*.22,n*.2,o)]}case"sink":{let o=Math.min(.5,e-.2);return[se(-o/2,-n/2+.1,o/2,n/2-.08),re(0,-n/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[te(-e/2+.08,n/2-.05,e/2-.08,n/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[re(0,.05,Math.min(e,n)*.3),te(-e/2,-n/2+.1,e/2,-n/2+.1)];case"bathtub":return[se(-e/2+.07,-n/2+.07,e/2-.07,n/2-.07),re(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[te(-e/2,-n/2,e/2,n/2),te(e/2,-n/2,-e/2,n/2),re(0,0,.04)];case"wc":return[se(-e/2,-n/2,e/2,-n/2+Math.min(.18,n*.3),"nf-sym-fill"),Qa(0,n*.1,e*.36,n*.3)];case"washbasin":return[Qa(0,.03,e*.34,n*.3)];case"tv_board":return[te(-Math.min(e*.4,.72),-n/2+.14,Math.min(e*.4,.72),-n/2+.14,"nf-sym-strong"),...Ja(e,n,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[te(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[re(0,0,Math.min(e,n)*.45,"nf-sym-fill"),re(0,0,Math.min(e,n)*1.4)];case"lamp_bollard":case"lamp_garden":return[re(0,0,Math.min(e,n)*.5,"nf-sym-fill"),re(0,0,Math.min(e,n)*1.6)];case"parking":return[se(-e/2+.08,-n/2+.08,e/2-.08,n/2-.08),te(-e*.15,n/2-.5,0,n/2-.22,"nf-sym-strong"),te(0,n/2-.22,e*.15,n/2-.5,"nf-sym-strong")];case"robot_vacuum":return[se(-e*.45,-n/2,e*.45,-n/2+n*.3,"nf-sym-fill"),re(0,n*.14,Math.min(e,n)*.47)];case"radiator":{let o=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)o.push(te(-e/2+e/i*s,-n/2,-e/2+e/i*s,n/2));return o}case"lamp_panel":return[se(-e/2+.03,-n/2+.03,e/2-.03,n/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let o=Math.min(e,n)/2,i=[re(0,0,o*.9,"nf-sym-fill"),re(0,0,o*.3)];if(t==="lamp_ceiling"||t==="lamp_pendant")for(let s=0;s<8;s++){let l=s/8*Math.PI*2;i.push(te(Math.cos(l)*o*1.05,Math.sin(l)*o*1.05,Math.cos(l)*o*1.35,Math.sin(l)*o*1.35))}return i}case"ceiling_fan":{let o=Math.min(e,n)/2,i=[re(0,0,.11,"nf-sym-fill")];for(let s=0;s<5;s++){let l=s/5*Math.PI*2;i.push(te(Math.cos(l)*.12,Math.sin(l)*.12,Math.cos(l)*o*.97,Math.sin(l)*o*.97,"nf-sym-strong"))}return[...i,re(0,0,o)]}case"lamp_wall":return[se(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),Qa(0,.01,e*.4,n*.4)];case"led_strip":return[te(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[re(0,0,Math.min(e,n)*.46),re(0,0,Math.min(e,n)*.25)];case"rug":return[se(-e/2+.1,-n/2+.1,e/2-.1,n/2-.1)];case"stairs":{let o=Math.max(3,Math.round(n/.26)),i=[];for(let s=1;s<o;s++)i.push(te(-e/2,n/2-n/o*s,e/2,n/2-n/o*s));return i.push(te(0,n/2-.1,0,-n/2+.25,"nf-sym-strong"),te(-.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong"),te(.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong")),i}default:{let o=G(t);return o?B0(o,e,n):_}}}function N0(t,e,n){let r=ro(t),o=cn(r,e,n,t.h),i=r.down?"nf-sym-dash":"",s=o.treads.map(a=>ff(a.poly,a.landing?`nf-sym-fill ${i}`:i));o.column>0&&s.push(re(0,0,o.column,"nf-sym-fill"));let l=o.treads.map(yi);for(let a=1;a<l.length;a++)s.push(te(l[a-1][0],l[a-1][1],l[a][0],l[a][1],"nf-sym-strong"));if(l.length&&s.unshift(re(l[0][0],l[0][1],.05,"nf-sym-fill")),l.length>=2){let[a,c]=[l[l.length-2],l[l.length-1]],u=Math.hypot(c[0]-a[0],c[1]-a[1])||1,[d,p]=[(c[0]-a[0])/u,(c[1]-a[1])/u],h=Math.min(.2,o.flight*.3);for(let f of[-1,1])s.push(te(c[0],c[1],c[0]-d*h+p*h*.6*f,c[1]-p*h-d*h*.6*f,"nf-sym-strong"))}return s}function B0(t,e,n){return t.symbol?.length?t.symbol.map(r=>r.shape==="rect"?se((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n,r.fill?"nf-sym-fill":""):r.shape==="circle"?re(r.x*e,r.z*n,r.r*Math.min(e,n)):te(r.x1*e,r.z1*n,r.x2*e,r.z2*n)):dc(t,e,n,t.size[2]).filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?ff([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*n]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*n])]):r.shape==="cyl"&&(r.axis??"y")==="y"?re(r.x*e,r.z*n,Math.min(r.w*e,r.d*n)/2):se((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n))}var el=Math.PI/180,_f=(t,e,n,r)=>{let[o,i]=r,s=R`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,l=R`<line x1=${n[0]} y1=${n[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return t==="data-rotate"?R`<g class="nf-rotate" data-rotate=${e}>${l}</g>`:R`<g class="nf-rotate" data-aim=${e}>${l}</g>`};function W0(t,e){let n=e.rotation*el;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=t.toScreen([e.x+r*e.w*Math.cos(n)/2-o*e.d*Math.sin(n)/2,e.z+r*e.w*Math.sin(n)/2+o*e.d*Math.cos(n)/2]);return R`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}var gf=new WeakMap;function V0(t,e){let n=gf.get(e);if(n&&n.states===t.states)return n.links;let r=Be(t,[e]);return gf.set(e,{states:t.states,links:r}),r}function K0(t,e,n){if(!t||!ce(n.type))return!1;let r=V0(t,e).get(n.id)?.entity;return!!sc(r?t.states[r]:void 0,(n.extra_lights??[]).map(o=>t.states[o]))}function bf(t,e,n){let{host:r,scale:o}=t,i=s=>{let l=s.id===n,a=l&&r.admin&&!s.locked,[c,u]=t.toScreen([s.x,s.z]),d=s.rotation*el,p=Math.min(s.w,s.d)*o>44,h=K0(r.hass,e,s),f=Ce.includes(s.type),g=`nf-furn${l?" nf-furn-sel":""}${h?" nf-furn-lit":""}${f?" nf-energy-item":""}`,y=s.d/2+Math.max(.3,26/o),b=t.toScreen([s.x-Math.sin(d)*y,s.z+Math.cos(d)*y]),v=t.toScreen([s.x-Math.sin(d)*(s.d/2),s.z+Math.cos(d)*(s.d/2)]),[w,x]=t.toScreen([s.x+Math.sin(d)*(s.d/2+18/o),s.z-Math.cos(d)*(s.d/2+18/o)]);return R`<g data-furniture=${s.id} class=${g}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${mf(s.type,s.w,s.d,s)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${p?R`<text x=${c} y=${u+4}>${qe(r.hass,s.type)}</text>`:_}
      </g>
      ${a?W0(t,s):_}
      ${l?R`<text class="nf-dim" x=${w} y=${x+4}>${pe(r.hass,s.w)} × ${pe(r.hass,s.d)}</text>`:_}
      ${l&&s.locked?R`<text class="nf-lock" x=${b[0]} y=${b[1]+5}>🔒</text>`:_}
      ${a?_f("data-rotate",s.id,v,b):_}`};return R`<g>${ap(e).map(i)}</g>`}function yf(t,e,n){let{host:r}=t,o=i=>{let s=X(i.entity_id)??(r.hass?Ne(r.hass,i.entity_id):null);if(!s)return _;let[l,a]=t.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===n,d=(i.rotation??0)*el,p=u&&r.admin&&!i.locked&&eu(i.entity_id,r.hass?.states[i.entity_id]),h=[l-Math.sin(d)*46,a+Math.cos(d)*46],f=Dn(r,i.entity_id,i.icon);return R`${p?_f("data-aim",i.entity_id,[l,a],h):_}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${l} ${a})">
        <title>${W(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${f?R`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${f}></ha-icon></foreignObject>`:R`<path d=${Ht(s)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${u&&i.locked?R`<text class="nf-lock" x=${l+16} y=${a-12}>🔒</text>`:_}`};return R`<g>${e.placements.map(o)}</g>`}function wf(t,e,n){return R`${(e.notes??[]).map(r=>{let[o,i]=t.toScreen([r.x,r.z]);return R`<g data-note=${r.id} class=${`nf-note${Eo(r)?" nf-note-due":""}${r.id===n?" nf-note-sel":""}`} transform="translate(${o} ${i})">
      <title>${r.text}</title>
      <rect x="-11" y="-11" width="22" height="22" rx="4" /><text y="5" text-anchor="middle">✎</text>
    </g>`})}`}var Ai=(t,e,n=6)=>R`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r=${n} />`;function vf(t,e){let{scale:n}=t,r=n>=90?.1:n>=30?.5:1,o=n>=20?1:5,i=t.toWorld(0,0),s=t.toWorld(e.w,e.h),l=[],a=(d,p)=>{for(let h=Math.ceil(i[0]/d)*d;h<=s[0];h+=d){let f=t.toScreen([h,0])[0];l.push(R`<line class=${p} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let h=Math.ceil(i[1]/d)*d;h<=s[1];h+=d){let f=t.toScreen([0,h])[1];l.push(R`<line class=${p} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&a(r,"nf-grid-minor"),a(o,"nf-grid-major");let[c,u]=t.toScreen([0,0]);return l.push(R`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),R`<g pointer-events="none">${l}</g>`}function kf(t){let e=t.host.doc.floors,n=e.findIndex(i=>i.id===t.floorId),r=n>0?e[n-1]:void 0;if(!r)return _;let o=Gc(e,e[n]);return R`<g pointer-events="none">${r.rooms.map(i=>R`<polygon class="nf-ghost" points=${ot(t,i.points)} />`)}${o.map(i=>R`<polygon class="nf-void" points=${ot(t,i)} />`)}</g>`}function xf(t,e){let n=t.host.floor?.height??2.5;return R`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<n-.01;return R`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${ot(t,r.footprint)} />`})}</g>`}function $f(t,e,n){let r=o=>{let[i,s]=t.toScreen(_e(o.points)),l=ue(o.points),a=Math.min(l.x1-l.x0,l.z1-l.z0)*t.scale>40;return R`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===n?" nf-out-sel":""}`}>
      <polygon points=${ot(t,o.points)} />
      ${a?R`<text x=${i} y=${s+4}>${t.host.t(`out_${o.type}`)}</text>`:_}
    </g>`};return R`<g>${e.outdoor.map(r)}</g>`}function Sf(t,e,n){let{host:r}=t;if(!e||!r.admin||n!=="select"||r.doc.settings.lock_plan)return _;let o=e.points;return R`${o.map((i,s)=>fi(t,i,o[(s+1)%o.length],"out",e.id,s))}${o.map((i,s)=>R`<g class="nf-vertex" data-out-vertex=${`${e.id}:${s}`}>${Ai(...t.toScreen(i))}</g>`)}`}function Mf(t,e,n,r){let o=e.rooms.find(s=>s.id===n),i=o&&r!==null&&r<o.points.length?[t.toScreen(o.points[r]),t.toScreen(o.points[(r+1)%o.points.length])]:null;return R`<g>${e.rooms.map(s=>R`<polygon data-room=${s.id} class=${s.id===n?"nf-room nf-room-sel":"nf-room"} points=${ot(t,s.points)} />`)}</g>
    ${i?R`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:_}
    <g pointer-events="none">${e.rooms.map(s=>{let[l,a]=t.toScreen(_e(s.points));return R`<text class="nf-room-name" x=${l} y=${a-2}>${s.name}</text>
        <text class="nf-room-area" x=${l} y=${a+14}>${Ee(t.host.hass,we(s.points))}</text>`})}</g>`}function Rf(t,e){let n=t.host.doc.energy?.meter;if(!n||n.floor_id!==e.id)return _;let[r,o]=t.toScreen([n.x,n.z]);return R`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function Ef(t,e,n){let{host:r}=t,o=i=>{let[s,l]=[t.toScreen(i.a),t.toScreen(i.b)],a=i.id===n,c=a&&r.admin&&!Fo(i,!0,r.doc.settings);return R`<g data-free-wall=${i.id} class=${`nf-free-wall${a?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${l[0]} y2=${l[1]} />
        <line class="nf-free-wall-line" x1=${s[0]} y1=${s[1]} x2=${l[0]} y2=${l[1]} />
      </g>
      ${c?R`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${Ai(s[0],s[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${Ai(l[0],l[1])}</g>`:_}`};return R`<g>${(e.walls??[]).map(o)}</g>`}function Af(t,e){let n=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=n.length)return[];let[s,l]=[n[i],n[(i+1)%n.length]],a=Math.hypot(l[0]-s[0],l[1]-s[1])||1,[c,u]=[(l[0]-s[0])/a,(l[1]-s[1])/a];return o.map(d=>{let[p,h]=t.toScreen([s[0]+c*d,s[1]+u*d]);return R`<line class="nf-split-mark" x1=${p-u*7} y1=${h+c*7} x2=${p+u*7} y2=${h-c*7} />`})});return R`${r}`}function Ff(t,e,n){let r=e.points,[o,i]=t.toScreen(_e(r)),s=(a,c,u)=>{let[[d,p],[h,f]]=[t.toScreen(a),t.toScreen(c)],[g,y]=[(d+h)/2,(p+f)/2],b=Math.hypot(h-d,f-p),[v,w]=[-(f-p),h-d],x=Math.hypot(v,w)||1;return[v,w]=[v/x,w/x],v*(g-o)+w*(y-i)<0&&([v,w]=[-v,-w]),R`${b>50?R`<text class="nf-dim" x=${g+v*16} y=${y+w*16+4}>${pe(t.host.hass,Math.hypot(c[0]-a[0],c[1]-a[1]))}</text>`:_}
      ${b>36?R`<g data-mid=${u} class="nf-mid"><circle cx=${g} cy=${y} r="14" class="nf-hit" /><circle cx=${g} cy=${y} r="6" /><path d="M${g-3} ${y}h6M${g} ${y-3}v6" /></g>`:_}`},l=(a,c)=>{let[u,d]=t.toScreen(a);return R`<g data-vertex=${c} class=${c===n?"nf-vertex nf-vertex-sel":"nf-vertex"}>${Ai(u,d)}</g><text class="nf-vertex-no" x=${u+9} y=${d-9}>${c+1}</text>`};return R`<g>${r.map((a,c)=>s(a,r[(c+1)%r.length],c))}${r.map(l)}</g>`}function Tf(t,e){let n=e.rooms.flatMap(r=>{if(r.points.length<3)return[];let[o,i]=_e(r.points);return r.points.map((s,l)=>{let a=r.points[(l+1)%r.points.length],c=Math.hypot(a[0]-s[0],a[1]-s[1]);if(c<.4)return _;let u=[(s[0]+a[0])/2,(s[1]+a[1])/2],d=Math.hypot(o-u[0],i-u[1])||1,p=Math.min(.35,d/2),h=[u[0]+(o-u[0])/d*p,u[1]+(i-u[1])/d*p],[f,g]=t.toScreen(h),y=Math.atan2(a[1]-s[1],a[0]-s[0])*180/Math.PI;return y>90&&(y-=180),y<-90&&(y+=180),R`<text class="nf-dim" x=${f} y=${g} transform=${`rotate(${y.toFixed(1)} ${f} ${g})`} text-anchor="middle" dominant-baseline="middle">${pe(t.host.hass,c)}</text>`})});return R`<g pointer-events="none">${n}</g>`}function zf(t,e,n){let r=t.t;return m`<section>
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
      ${E(t,r("x"),e.x,o=>n.patch({x:o}))} ${E(t,r("z"),e.z,o=>n.patch({z:o}))}
      ${E(t,r("note_height"),e.y??$c,o=>n.patch({y:Math.max(0,Math.min(20,Math.round(o*100)/100))}),.1,0)}
      ${M(r("note_height_hint"),"nf-wide")}
      ${G0(t,e,n)}
    </div>
    ${Y(m`<button class="nf-btn nf-danger" ?disabled=${!t.admin} @click=${()=>n.remove()}>${r("delete")}</button>`)}
  </section>`}function G0(t,e,n){let r=t.t,o=!!e.photo?.startsWith("image:"),i=async s=>{let l=s.target,a=l.files?.[0];if(l.value="",!a||!t.hass)return;let{data:c}=await Bn(a),u=D("img");await St(t.hass,u,c),n.patch({photo:`image:${u}`})};return m`${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(o?"picture_replace":"note_photo_upload")}<input type="file" accept="image/*" hidden @change=${i} /></label>`:_}
    ${o?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.patch({photo:null})}>${r("delete")}</button></p>`:Z(t,r("picture_url"),e.photo??"",s=>n.patch({photo:s.trim()||null}),{wide:!0,placeholder:"/local/valve.jpg"})}
    ${M(r("note_photo_hint"),"nf-wide")}`}function U0(t,e,n,r){let o=Pe(e,n.rooms,n.walls??[]);if(!o)return null;let{room:i,edge:s}=o,l=zt(r,e,o),a=Mn(i,s,e.offset-e.width/2),c=Mn(i,s,e.offset+e.width/2),u=[(c[0]-a[0])/(e.width||1),(c[1]-a[1])/(e.width||1)],d=ge(i.points)>=0?1:-1,p=[-u[1]*d,u[0]*d],h=[.06,.06];return l&&(h=l.wall.free||l.wall.roomLeft===i.id?[l.wall.left,l.wall.right]:[l.wall.right,l.wall.left]),{room:i,edge:s,p0:a,p1:c,inward:p,direction:d,across:h,exterior:l?.wall.exterior??!1,at:(f,g)=>t.toScreen([f[0]+p[0]*g,f[1]+p[1]*g])}}var wt=(t,e,n="")=>R`<line class=${n} x1=${t[0]} y1=${t[1]} x2=${e[0]} y2=${e[1]} />`;function j0(t,e){let n=t.across[0]-.04,r=t.across[0]+Math.min(2,e.height),[o,i,s,l]=[t.at(t.p0,n),t.at(t.p1,n),t.at(t.p0,r),t.at(t.p1,r)];return R`${wt(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${l[0]} ${l[1]}" />`}function Z0(t,e,n){let r=n.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=n.hinge==="left"==e.direction>0,l=jt(n,e.exterior),a=n.leaves===2,[c,u]=[e.p0,e.p1],d=[],p=Uc(n.width,l,s,n);if(p){let v=w=>w<=.02?e.p0:w>=n.width-.02?e.p1:Mn(e.room,e.edge,n.offset-n.width/2+w);[c,u]=[v(p.x0),v(p.x1)],d=p.panels.map(([w,x])=>[v(w),v(x)])}let h=[(c[0]+u[0])/2,(c[1]+u[1])/2],f=(a?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),g=d.map(([v,w])=>R`${wt(e.at(v,i+.035),e.at(w,i+.035),"nf-open-pane")}${wt(e.at(v,i-.035),e.at(w,i-.035),"nf-open-pane")}`),y=(v,w)=>{let[x,k]=e.at(v,o),[$,A]=e.at(w,o),F=e.at(v,o+(r?-f:f)),T=f*t.scale,I=(F[0]-x)*(A-k)-(F[1]-k)*($-x)>0?1:0;return R`<path d="M${x} ${k}L${F[0]} ${F[1]}A${T} ${T} 0 0 ${I} ${$} ${A}" />`},b;return l==="passage"?b=wt(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):l==="sliding"?b=wt(e.at(c,o),e.at(u,o)):a?b=R`${y(c,h)}${y(u,h)}`:b=s?y(c,u):y(u,c),R`${g}${b}`}function q0(t,e){let n=(t.across[0]-t.across[1])/2;if(e.opens==="slide"){let o=e.leaves===2?4:2,i=l=>[t.p0[0]+(t.p1[0]-t.p0[0])*l,t.p0[1]+(t.p1[1]-t.p0[1])*l],s=Array.from({length:o},(l,a)=>{let c=e.leaves===2?a===1||a===2?.035:-.035:a===0?.035:-.035;return wt(t.at(i(Math.max(0,a/o-.03)),n+c),t.at(i(Math.min(1,(a+1)/o+.03)),n+c))});return R`${s}`}let r=e.leaves===2?wt(t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],t.across[0]),t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],-t.across[1])):_;return R`${wt(t.at(t.p0,n+.035),t.at(t.p1,n+.035))}${wt(t.at(t.p0,n-.035),t.at(t.p1,n-.035))}${r}`}function Pf(t,e,n,r){let o=e.openings.find(s=>s.id===r)?.front??null,i=s=>{let l=U0(t,s,e,n);if(!l)return _;let a=[l.at(l.p0,l.across[0]+.01),l.at(l.p1,l.across[0]+.01),l.at(l.p1,-l.across[1]-.01),l.at(l.p0,-l.across[1]-.01)],c=s.type==="door"&&fs(jt(s,l.exterior)),u=s.id===r||!!s.front&&s.front===o,d=`nf-open nf-open-${s.type}${c?" nf-open-front":""}${u?" nf-open-sel":""}`,p=s.type==="garage"?j0(l,s):s.type==="door"?Z0(t,l,s):q0(l,s);return R`<g data-opening=${s.id} class=${d}><polygon class="nf-open-gap" points=${a.map(h=>h.join(",")).join(" ")} />${p}</g>`};return R`<g>${e.openings.map(i)}</g>`}var If=t=>Math.round(t*1e3)/1e3,Df=t=>Math.round(t*100)/100;function Kn(t,e){let n=[...t??[]].slice(0,e);for(;n.length<e;)n.push(null);return n}var Fi=t=>t.every(e=>e===null);function so(t,e){let[n,r]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.hypot(r[0]-n[0],r[1]-n[1])}function tl(t,e,n){let r=Kn(t.wall_heights,t.points.length);r[e]=n,t.wall_heights=Fi(r)?void 0:r,Ti(t,e,null)}function Ti(t,e,n){if(n===null&&!t.wall_slopes)return;let r=Kn(t.wall_slopes,t.points.length);r[e]=n,t.wall_slopes=Fi(r)?void 0:r}function Of(t,e,n,r){let[o,i]=[n,r].map(l=>Math.min(30,Math.max(.05,If(l)))),s=Kn(t.wall_heights,t.points.length);s[e]=o,t.wall_heights=s,Ti(t,e,i)}function Lf(t,e,n){let r=t.wall_heights?.[e];Ti(t,e,null),typeof r=="number"&&r>=n-.005&&tl(t,e,null)}function Hf(t,e,n,r,o){let i=Kn(t.wall_heights,t.points.length),s=i[e],l=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;l.length<o;)l.push(null);l[n]=r,i[e]=l.every(a=>a===l[0])?l[0]:l,t.wall_heights=Fi(i)?void 0:i,Ti(t,e,null)}function Cf(t,e,n,r){let o=so(t,e),i=n===void 0?0:r[n],s=n===void 0?o:r[n+1]??o;if(s-i<.4)return!1;let l=Df((i+s)/2),a=Kn(t.wall_splits,t.points.length);a[e]=[...a[e]??[],l].sort((u,d)=>u-d),t.wall_splits=a;let c=t.wall_heights?.[e];return Array.isArray(c)&&c.splice((n??0)+1,0,c[n??0]??null),!0}function Nf(t,e,n,r,o){let i=so(t,e),s=o.filter(u=>Math.abs(u-n)>.001&&u>0),l=Math.max(.1,Math.min(i-.1,Df(r)));s.some(u=>Math.abs(u-l)<.1)&&(l=n);let a=t.wall_splits?.[e];if(!a)return;let c=a.findIndex(u=>Math.abs(u-n)<.001);c>=0&&(a[c]=l),a.sort((u,d)=>u-d)}function Bf(t,e,n,r){let o=t.wall_splits;if(!o?.[e])return;let i=o[e].filter(l=>Math.abs(l-n)>.001);o[e]=i.length>0?i:null,o.every(l=>!l)&&(t.wall_splits=void 0);let s=t.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(l=>l===s[0])&&(t.wall_heights[e]=s[0]??null))}function Wf(t,e,n,r,o=1){let i=Kn(t.wall_thickness,t.points.length);if(r===void 0||o<2)i[e]=n;else{let s=i[e],l=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;l.length<o;)l.push(null);l[r]=n,i[e]=l.every(a=>a===l[0])?l[0]:l}t.wall_thickness=Fi(i)?void 0:i}function Vf(t,e){let n=Math.min(1.5,Math.max(.02,If(t)));return Math.abs(n-e)<5e-4?null:n}var Kf=.005,Gf=(t,e)=>`room:${t.id}:${e}`;function Uf(t,e,n){let r=t.t,o=e.ceiling??t.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:l}=t.doc.settings,a=c=>{let u=e.wall_heights?.[c]??null,d=n.partsOf(e,c);return(d.length>1?d.map((h,f)=>f):[void 0]).map(h=>{let f=Array.isArray(u)?u[h??0]??null:u,g=e.wall_thickness?.[c]??null,y=Array.isArray(g)?g[h??0]??null:g,b=h===void 0?so(e,c):(d[h+1]??so(e,c))-d[h],v=z=>n.setHeight(e,c,h,z),w=n.isOuter(e,c)?s:l,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${h===void 0?"":` \xB7 ${r("wall_part",{n:h+1})}`}`,k=h!==void 0&&h>0&&(e.wall_splits?.[c]??[]).some(z=>Math.abs(z-d[h])<.001),$=e.wall_slopes?.[c],A=h===void 0&&typeof $=="number"&&typeof u=="number",F=f??o,T=()=>n.light(c),I=()=>n.light(null);return m`<div class="nf-edge-height${c===n.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${T} @mouseleave=${I} @focusin=${T} @focusout=${I}>
        <span><b>${x}</b><br /><span class="nf-muted">${pe(t.hass,b)}</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:A?m`<span class="nf-wide nf-split-row" title=${r("wall_slope_hint")}
                >${E(t,r("wall_slope_start"),u,z=>n.setSlope(e,c,z,$),.05,.05)}
                ${E(t,r("wall_slope_end"),$,z=>n.setSlope(e,c,u,z),.05,.05)}</span
              >`:E(t,r("wall_height"),F,z=>v(z>=o-Kf?null:Math.max(.05,z)),.05,.05)}
        ${t.admin&&A?m`<button class="nf-btn" title=${r("wall_slope_off")} @click=${()=>n.clearSlope(e,c)}>▭</button>`:_}
        ${t.admin&&f!==null&&!A?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:_}
        ${t.admin&&h===void 0&&f!==0&&!A?m`<button class="nf-btn" title=${r("wall_slope_hint")} @click=${()=>n.setSlope(e,c,F,F>=o-Kf?F+1:o)}>∠ ${r("wall_slope")}</button>`:_}
        ${t.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:_}
        ${t.admin&&b>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>n.cut(e,c,h)}>✂</button>`:_}
        ${h===void 0&&b>=.4?wi(t,Gf(e,c),n.arc):_}
        ${(h===void 0||h===0)&&f!==0?m`<button class="nf-btn" title=${r("wall_view_hint")} @click=${()=>n.openWall(e,c)}>▣ ${r("wall_view")}</button>`:_}
        ${f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${E(t,r("edge_thickness"),y??w,z=>n.setThickness(e,c,Vf(z,w),h,d.length),.01,.02)}
              ${t.admin&&y!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>n.setThickness(e,c,null,h,d.length)}>↺</button>`:_}</span
            >`:_}
        ${h===void 0?vi(t,Gf(e,c),n.arc):_}
        ${k?m`<span class="nf-wide nf-split-row"
              >${E(t,r("wall_split_at"),d[h],z=>n.moveCut(e,c,d[h],z),.05,.1)}
              ${t.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join(e,c,d[h],h)}>⨉</button>`:_}</span
            >`:_}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>a(u))} ${M(r("room_wall_hint"))}
  </div>`}function jf(t,e,n){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:n;return r?t.states[r]:void 0}var nl=["none","rainbow","pulse","flicker"];function zi(t,e,n,r){let o=e.effect_animations??{},i=Yc(),s=c=>nl.includes(c)||i.includes(c),l=[...new Set([...Object.keys(o),...Array.isArray(n)?n.filter(c=>typeof c=="string"):[]])],a=(c,u,d,p=!1)=>{let h=Object.prototype.hasOwnProperty.call(o,c),f=Array.from(c).length,g=p&&h?"light_effect_exists":u!==""&&(f<1||f>255)?"light_effect_name_limit":u!==""&&!h&&Object.keys(o).length>=100?"light_effect_count_limit":void 0;if(d.setCustomValidity?.(g?t.t(g):""),g){let b=d.closest?.("details")?.querySelector("[data-effect-feedback]");return b&&(b.textContent=t.t(g)),d.reportValidity?.(),p||(d.value=h?o[c]:""),!1}let y={...o};return u===""?delete y[c]:Object.defineProperty(y,c,{value:u,enumerable:!0,configurable:!0,writable:!0}),r({effect_animations:y}),!0};return m`<details class="nf-wide">
    <summary>${t.t("light_effects")}</summary>
    <p class="nf-sub">${t.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${e.animations_enabled!==!1} ?disabled=${!t.admin}
      @change=${c=>r({animations_enabled:c.target.checked})} />${t.t("light_effects_enabled")}</label>
    ${l.map(c=>m`<label class="nf-field nf-wide">${c}
      <select ?disabled=${!t.admin} @change=${u=>{let d=u.target;a(c,d.value,d)}}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(o,c)}>${t.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(o,c)&&!s(o[c])?m`<option selected value=${o[c]}>${o[c]} (${t.t("light_effect_unmapped")})</option>`:_}
        ${nl.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${t.t(`light_animation_${u}`)}</option>`)}
        ${i.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${u} (${t.t("plugin")})</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${t.t("light_effect_add")}<input type="text" ?disabled=${!t.admin} placeholder="Regenbogen"
      @input=${c=>c.target.setCustomValidity("")}
      @change=${c=>{let u=c.target;a(u.value,"none",u,!0)&&(u.value="")}} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${t.t("light_effect_name_limit")} ${t.t("light_effect_count_limit")}</p>
  </details>`}var Y0=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function X0(t,e,n){let r=X(e),o=t.hass?.language??"en",i=[...Po.map(l=>({type:l,label:t.t(`furn_${l}`)})),...n.flatMap(l=>l.items.map(a=>({type:de(l.id,a.id),label:`${Ye(a,de(l.id,a.id),o)} \xB7 ${Oe(l,o)}`})))],s=l=>r==="light"?ce(l):r==="climate"?l==="radiator"||gn(l):e.startsWith("vacuum.")?l==="robot_vacuum"||gt(l)&&l.endsWith(":robot_vacuum"):r==="media"?gr(l)||Et(l)&&Y0.test(l):Et(l)&&!ce(l);return i.filter(l=>s(l.type)).sort((l,a)=>l.label.localeCompare(a.label))}function Q0(t,e,n){if(!t.admin)return _;let r=X0(t,e.entity_id,n.packs);return r.length===0?_:m`<label class="nf-field nf-wide" title=${t.t("as_furniture_hint")}
    >${t.t("as_furniture")}
    <select @change=${o=>o.target.value&&n.asFurniture(e,o.target.value)}>
      <option value="" selected>${t.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function J0(t,e,n){let r=t.hass?.language??"en";return Qc(e.entity_id,t.hass?.states[e.entity_id]).map(({pluginId:o,name:i,settings:s})=>{let l=Jc(s,e.plugin?.[o]),a=(u,d)=>n({plugin:{...e.plugin??{},[o]:{...e.plugin?.[o]??{},[u]:d}}}),c=s.map(u=>{let d=No(u.label,r),p=u.hint?No(u.hint,r):void 0;if(u.type==="boolean")return L(t,d,l[u.key]===!0,f=>a(u.key,f),{title:p});if(u.type==="select"){let f=(u.options??[]).map(([g,y])=>[g,No(y,r)]);return O(t,d,String(l[u.key]),f,g=>a(u.key,g),{wide:!0,title:p})}let h=f=>Math.min(u.max??1/0,Math.max(u.min??-1/0,f));return E(t,d,Number(l[u.key]),f=>a(u.key,h(f)),u.step??1,u.min)});return m`<h4 class="nf-lib-head nf-wide">🔌 ${i}</h4>${c}`})}function rl(t,e,n){let r=t.t,o=X(e.entity_id)??(t.hass?Ne(t.hass,e.entity_id):null),i=o==="light",s=e.mount??"ceiling",l=o?So(o,t.floor?at(t.floor,e.x,e.z):2.5,i?s:null):1,a=p=>n.update(p),c=Dn(t,e.entity_id,e.icon),u=p=>a({mount:p,y:null}),d=["ceiling","floor","table","wall"].map(p=>[p,r(`lamp_${p}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${n.lockButton}</div>
    <p class="nf-dev-title">
      ${c?m`<ha-icon class="nf-dev-icon" .icon=${c}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?Ht(o):""} /></svg>`}
      ${W(t.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${O(t,r("lamp_mount"),s,d,u,{wide:!0})}${rn(t,e.glow_scale,p=>a({glow_scale:p}))}`:_}
      ${i?zi(t,e,t.hass?.states[e.entity_id]?.attributes.effect_list,a):_}
      ${e.entity_id.startsWith("media_player.")?rn(t,e.sound_rings,p=>a({sound_rings:p}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):_}
      ${E(t,r("x"),e.x,p=>a({x:p}))} ${E(t,r("z"),e.z,p=>a({z:p}))}
      ${E(t,r("marker_height"),e.y??l,p=>a({y:Math.max(0,p)}),.05,0)}
      ${E(t,r("rotation"),e.rotation??0,p=>a({rotation:(p%360+360)%360}),1)}
      ${i?L(t,r("device_simple"),!!e.simple,p=>a({simple:p||void 0}),{title:r("device_simple_hint")}):_}
      ${o&&rc.has(o)?L(t,r("device_confirm"),!!e.confirm,p=>a({confirm:p}),{title:r("device_confirm_hint")}):_}
      ${L(t,r("device_outside"),!!e.outside,p=>a({outside:p||void 0}),{title:r("device_outside_hint")})}
      ${On(t,e.marker??null,p=>a({marker:p}))}
      ${Ln(t,e.pin_offset,p=>a({pin_offset:p}))}
      ${Z(t,r("device_name"),e.name??"",p=>a({name:p||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:W(t.hass,e.entity_id)})}
      ${e.name?L(t,r("show_name"),!!e.show_name,p=>a({show_name:p||void 0})):_}
      ${Dt(t,e.icon,p=>a({icon:p}))}
      ${J0(t,e,a)}
    </div>
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>n.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>a({y:null})}>${r("height_auto")}</button>`:_}
          ${Q0(t,e,n)}
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("devices_remove")}</button>
        </div>`:_}
  </section>`}var ao=t=>Number(t);function Pi(t){if(Array.isArray(t)){let[i,s]=[ao(t[0]),ao(t[1])];return Number.isFinite(i)&&Number.isFinite(s)?[i,s]:null}if(!t||typeof t!="object")return null;let{x:e,y:n}=t,[r,o]=[ao(e),ao(n)];return Number.isFinite(r)&&Number.isFinite(o)?[r,o]:null}function Yf(t){return t?Pi(t.charger)??Pi(t.charger_position):null}function Ii(t){for(let[e,n]of Object.entries(t.states))if(e.startsWith("camera.")&&(Pi(n.attributes?.vacuum_position)??Yf(n.attributes)))return e;return null}var ol=(t,e)=>e?[t[0],-t[1]]:t;var Xf=5e-4,Qf=2,ew=1.5;function il(t,e){let n=e?t.states[e]?.attributes:void 0;return{at:n?Pi(n.vacuum_position):null,dock:Yf(n)}}function Jf(t,e,n=!1){let r=Math.hypot(e.plan[0]-t.plan[0],e.plan[1]-t.plan[1]),o=Math.hypot(e.grid[0]-t.grid[0],e.grid[1]-t.grid[1]);if(!(o>1e-6)||!(r>=ew))return{cal:null,reason:"close"};let i=r/o;return i>=Xf&&i<=Qf?{cal:{a:t.plan,ga:t.grid,b:e.plan,gb:e.grid,mirror:n}}:{cal:null,reason:"scale"}}function em(t,e){let n=e?t.states[e]?.attributes?.rooms:void 0;if(!n||typeof n!="object")return[];let r=[];for(let o of Object.values(n)){if(!o||typeof o!="object")continue;let i=o,s=typeof i.name=="string"?i.name.trim():"",l=[i.x0,i.y0,i.x1,i.y1].map(ao);!s||!l.every(Number.isFinite)||r.push({name:s,center:[(l[0]+l[2])/2,(l[1]+l[3])/2]})}return r}var Zf=t=>t.toLocaleLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^\p{L}\p{N}]+/gu,"");function tw(t){let e=t.length,[n,r]=t.reduce((h,f)=>[h[0]+f.seen[0]/e,h[1]+f.seen[1]/e],[0,0]),[o,i]=t.reduce((h,f)=>[h[0]+f.plan[0]/e,h[1]+f.plan[1]/e],[0,0]),[s,l,a]=[0,0,0];for(let h of t){let[f,g]=[h.seen[0]-n,h.seen[1]-r],[y,b]=[h.plan[0]-o,h.plan[1]-i];s+=f*y+g*b,l+=f*b-g*y,a+=f*f+g*g}if(!(a>1e-9))return null;let[c,u]=[s/a,l/a],d=h=>{let[f,g]=[h[0]-n,h[1]-r];return[o+c*f-u*g,i+u*f+c*g]},p=Math.sqrt(t.reduce((h,f)=>h+Math.hypot(d(f.seen)[0]-f.plan[0],d(f.seen)[1]-f.plan[1])**2,0)/e);return{map:d,scale:Math.hypot(c,u),rms:p}}function tm(t,e,n=!1){let r=new Map(e.map(g=>[Zf(g.name),g])),o=[],i=new Set;for(let g of t){let y=Zf(g.name),b=r.get(y);if(!b||i.has(y)||g.points.length<3)continue;i.add(y);let v=g.points.map(x=>x[0]),w=g.points.map(x=>x[1]);o.push({name:g.name,plan:[(Math.min(...v)+Math.max(...v))/2,(Math.min(...w)+Math.max(...w))/2],grid:b.center})}let s=o.map(g=>g.name);if(o.length<2)return{cal:null,reason:"rooms",matched:s};let a=(o.length>=3?[!1,!0]:[n]).flatMap(g=>{let y=tw(o.map(b=>({plan:b.plan,seen:ol(b.grid,g)})));return y?[{mirror:g,...y}]:[]}).sort((g,y)=>g.rms-y.rms)[0];if(!a)return{cal:null,reason:"rooms",matched:s};if(!(a.scale>=Xf&&a.scale<=Qf))return{cal:null,reason:"scale",matched:s};let c=Math.max(...o.map(g=>Math.hypot(g.plan[0]-o[0].plan[0],g.plan[1]-o[0].plan[1])));if(!(a.rms<=Math.max(1,c/4)))return{cal:null,reason:"fit",matched:s};let[u,d,p]=[0,1,-1];for(let g=0;g<o.length;g++)for(let y=g+1;y<o.length;y++){let b=Math.hypot(o[g].grid[0]-o[y].grid[0],o[g].grid[1]-o[y].grid[1]);b>p&&([u,d,p]=[g,y,b])}let[h,f]=[o[u].grid,o[d].grid];return{cal:{a:a.map(ol(h,a.mirror)),ga:h,b:a.map(ol(f,a.mirror)),gb:f,mirror:a.mirror},matched:s,rms:a.rms}}function nm(t,e){let[n,r]=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],o=(e.turn??0)*Math.PI/180,[i,s,l]=[Math.cos(o),Math.sin(o),e.grow??1],[a,c]=e.move??[0,0],u=d=>{let[p,h]=[(d[0]-n)*l,(d[1]-r)*l];return[qf(n+p*i-h*s+a),qf(r+p*s+h*i+c)]};return{...t,a:u(t.a),b:u(t.b)}}var qf=t=>Math.round(t*1e3)/1e3;var nw=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,vt=t=>t==="none"?null:t;function sl(t,e,n){let r=t.t,o=H(t.hass,a=>nw.test(a)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",l=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${P(t,r("furn_state_entity"),e.state_entity??null,void 0,o,a=>n.update({state_entity:vt(a)}))}
    ${i?P(t,r("furn_state_entity2"),e.state_entity2??null,void 0,o,a=>n.update({state_entity2:vt(a)})):_}
    ${s?O(t,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",l,a=>n.update({state_split:a})):_}
    ${M(r("furn_state_hint"),"nf-wide")}`}function rw(t,e){let r=$n(t.type)&&(!gt(t.type)||pc(t.type));return ce(t.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:t.type==="radiator"||gn(t.type)?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:t.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:/:(robot_mower|mower_dock)$/.test(t.type)?{accept:o=>o.startsWith("lawn_mower."),label:"furn_entity_mower"}:/:(sprinkler|valve_box)$/.test(t.type)?{accept:o=>/^(valve|switch|input_boolean)\./.test(o),label:"furn_entity_water"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover|valve)\./.test(o)||oc(e?.states[o]),label:"furn_entity"}}function Di(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[n==="fan"?"fan_entity":n]=null);return Be(t.hass,r).get(e.id)?.[n]??null}var ow=t=>t==="meter"?"energy_grid":t==="inverter"?"energy_solar_sensor":t==="home_battery"?"energy_battery_sensor":"furn_power",it=(...t)=>m`<div class="nf-form nf-links">${t}</div>`;async function iw(t){let e=t.hass?Ii(t.hass):null;if(!t.hass||!e)return{at:null,dock:null};let n=()=>{let o=t.hass?.states[e]?.attributes??{};return`${String(o.render_count??"")}|${JSON.stringify(o.vacuum_position??null)}`},r=n();try{await t.hass.fetchWithAuth?.(`/api/camera_proxy/${e}`)}catch{}for(let o=0;o<8&&n()===r;o++)await new Promise(i=>setTimeout(i,100));return il(t.hass,e)}function sw(t,e){let n=t.t,r=a=>t.change(c=>{c.settings.vacuum_map=nm(e,a)}),o=(a,c,u)=>m`<button class="nf-btn" title=${c} aria-label=${c} ?disabled=${!t.admin} @click=${()=>r(u)}>${a}</button>`,[i,s,l]=[n("robot_cal_nudge_move"),n("robot_cal_nudge_turn"),n("robot_cal_nudge_grow")];return m`${M(n("robot_cal_nudge"),"nf-wide")}
    <div class="nf-wide" style="display:flex;flex-wrap:wrap;gap:6px">
      ${o("\u2190",i,{move:[-.1,0]})}${o("\u2192",i,{move:[.1,0]})}${o("\u2191",i,{move:[0,-.1]})}${o("\u2193",i,{move:[0,.1]})}
      ${o("\u27F2",s,{turn:-1})}${o("\u27F3",s,{turn:1})}${o("\u2212",l,{grow:.99})}${o("+",l,{grow:1.01})}
    </div>`}function aw(t,e){let n=t.t,r=t.doc.settings.vacuum_map??null,o=t.hass?il(t.hass,Ii(t.hass)):{at:null,dock:null},i=r?Math.hypot(r.gb[0]-r.ga[0],r.gb[1]-r.ga[1]):0,s=r&&i>0?Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])/i:0,l=()=>{t.pickPoint(p=>{p&&iw(t).then(h=>{if(!h.at||!h.dock)return;let f={plan:[e.x,e.z],grid:h.dock},g=Jf(f,{plan:p,grid:h.at},r?.mirror??!1);g.cal&&t.change(y=>{y.settings.vacuum_map=g.cal})})})},a=t.hass?Ii(t.hass):null,c=t.hass?em(t.hass,a):[],u=t.doc.floors.find(p=>p.furniture.some(h=>h.id===e.id)),d=()=>{if(!u)return;let p=tm(u.rooms,c,r?.mirror??!1);if(p.cal){let h=p.cal;t.change(f=>{f.settings.vacuum_map=h})}else alert(n(p.reason==="rooms"?"robot_cal_rooms_none":"robot_cal_rooms_bad",{n:p.matched.length}))};return it(M(o.at&&o.dock?r?n("robot_cal_done",{m:s.toFixed(2)}):n("robot_cal_none"):n("robot_cal_need"),"nf-wide"),c.length>=2?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!u} @click=${d}>${n("robot_cal_rooms",{n:c.length})}</button>`:_,m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!o.at||!o.dock} @click=${l}>${n("robot_cal_do")}</button>`,r?L(t,n("robot_cal_mirror"),!!r.mirror,p=>t.change(h=>{h.settings.vacuum_map={...r,mirror:p}})):_,r?sw(t,r):_,r?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>t.change(p=>{p.settings.vacuum_map=null})}>${n("robot_cal_forget")}</button>`:_,M(n("robot_cal_hint"),"nf-wide"))}function lw(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return _;let i=Cn(o),s=o.floors.flatMap(l=>l.furniture.filter(a=>i.has(a.id)).map(a=>[a.id,`${a.name||r("furn_meter")} \xB7 ${l.name}`]));return it(O(t,r("meter_parent"),Qr(o,e)??"",[["",r("meter_main")],...s],l=>n.update({parent_meter:l||null}),{wide:!0}),M(r("meter_device_hint"),"nf-wide"))}function cw(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return _;let i=o.floors.flatMap(c=>c.furniture.filter(u=>Qd(o,e,u)).map(u=>[u.id,`${u.name||r("furn_meter")} \xB7 ${c.name}`])),s=!!ln(o,e),l=e.meter_floors??[],a=(c,u)=>n.update({meter_floors:u?[...l.filter(d=>d!==c),c]:l.filter(d=>d!==c)});return it(O(t,r("meter_parent"),s?e.parent_meter:"",[["",r("meter_parent_none")],...i],c=>n.update({parent_meter:c||null}),{wide:!0}),s?L(t,r("energy_invert"),!!e.meter_invert,c=>n.update({meter_invert:c})):_,s?m`<div class="nf-sub nf-wide">${r("meter_floors")}</div>${o.floors.map(c=>L(t,c.name,l.includes(c.id),u=>a(c.id,u)))}`:_,M(r("meter_sub_hint"),"nf-wide"))}function rm(t,e,n,r){let o=t.t,i=n==="mail"?s=>/^(binary_sensor|sensor|input_boolean)\./.test(s):s=>/^(sensor|binary_sensor|calendar)\./.test(s);return m`<div class="nf-form nf-links">
    ${P(t,o(`care_entity_${n}`),e.care_entity??null,void 0,H(t.hass,i),s=>r.update({care_entity:vt(s)}))}
    ${n==="plant"?E(t,o("care_thirsty_below"),e.thirsty_below??20,s=>r.update({thirsty_below:Math.min(90,Math.max(1,Math.round(s)))}),1,1):_}
    ${M(o(`care_hint_${n}`),"nf-wide")}
  </div>`}function om(t,e,n){let r=t.t;return m`<div class="nf-form nf-links">
    ${P(t,r("furn_cover_entity"),e.cover_entity??null,void 0,H(t.hass,o=>o.startsWith("cover.")),o=>n.update({cover_entity:vt(o)}))}
    ${L(t,r("furn_cover_inverted"),!!e.cover_inverted,o=>n.update({cover_inverted:o||void 0}),{title:r("furn_cover_inverted_hint")})}
    ${M(r("furn_cover_hint"),"nf-wide")}
  </div>`}function im(t,e,n,r){let o=t.t,i=/socket/.test(e.type),s=H(t.hass,c=>/^(light|switch|input_boolean|fan)\./.test(c)),l=e.gang_entities??[],a=c=>u=>{let d=Array.from({length:n},(p,h)=>l[h]??null);d[c]=vt(u),r.update({gang_entities:d})};return m`<div class="nf-form nf-links">
    ${Array.from({length:n},(c,u)=>P(t,n===1?o(i?"gang_socket_one":"gang_switch_one"):o(i?"gang_socket":"gang_switch",{n:u+1}),l[u]??null,void 0,s,a(u)))}
    ${M(o(i?"gang_socket_hint":"gang_switch_hint"),"nf-wide")}
  </div>`}function uw(t,e,n){let r=t.t,o=H(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return it(P(t,r("fridge_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:vt(i)})),P(t,r("freezer_temp"),e.temp_entity2??null,void 0,o,i=>n.update({temp_entity2:vt(i)})),M(r("fridge_temp_hint"),"nf-wide"))}function dw(t,e,n){let r=t.t,o=H(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return it(P(t,r("device_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:vt(i)})),M(r("device_temp_hint"),"nf-wide"))}function hw(t,e,n){let r=t.t,o=e.extra_lights??[],i=H(t.hass,a=>a.startsWith("light.")&&a!==e.entity&&a!==e.color_entity),s=a=>c=>{let u=[...o];c&&c!=="none"?u[a]=c:u.splice(a,1),n.update({extra_lights:u.filter(Boolean).length?u.filter(Boolean):void 0})},l=Math.min(4,o.length+1);return m`${Array.from({length:l},(a,c)=>P(t,r("lamp_extra_light",{n:c+2}),o[c]??null,void 0,i,s(c)))}${M(r("lamp_extra_hint"),"nf-wide")}`}function sm(t,e,n){let{hass:r}=t;if(!r)return _;let o=t.t,i=ce(e.type),s=rw(e,r),l=H(r,f=>Pn(r,f)),a=f=>g=>n.update({[f]:vt(g)}),c=f=>H(r,f),u=(t.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),d=!!e.entity&&e.entity!=="none",p=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],h=e.type==="ceiling_fan"?"fan_hint":i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":$n(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${it(e.type==="grid_point"?M(o("grid_point_hint"),"nf-wide"):P(t,o(s.label),e.entity??null,Di(t,e,"entity"),c(s.accept),f=>n.update({entity:f})),e.type==="ceiling_fan"?P(t,o("furn_fan_entity"),e.fan_entity??null,Di(t,e,"fan"),c(f=>f.startsWith("fan.")),f=>n.update({fan_entity:f})):_,!i&&!Ce.includes(e.type)&&!gr(e.type)?sl(t,e,n):_,i&&d?m`${P(t,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),a("color_entity"))}${M(o("furn_color_entity_hint"),"nf-wide")}`:_,i&&d?hw(t,e,n):_,i?rn(t,e.glow_scale,f=>n.update({glow_scale:f})):_,i?zi(t,e,jf(r,e,e.entity&&e.entity!=="none"?e.entity:Di(t,e,"entity"))?.attributes.effect_list,n.update):_,gr(e.type)?rn(t,e.ambilight,f=>n.update({ambilight:f}),{label:"ambilight",hint:"ambilight_hint",lowest:0}):_,$n(e.type)||Go(e.type)?rn(t,e.sound_rings,f=>n.update({sound_rings:f}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):_,e.type==="grid_point"?_:P(t,o(ln(t.doc,e)?"meter_sub_power":ow(e.type)),e.power??null,Di(t,e,"power"),l,f=>n.update({power:f})))}
    ${hu(e.type)?uw(t,e,n):i||e.type==="grid_point"?_:dw(t,e,n)}
    ${e.type==="meter"?cw(t,e,n):_}
    ${e.type==="inverter"||e.type==="home_battery"?lw(t,e,n):_}
    ${e.type==="meter"&&!ln(t.doc,e)?it(P(t,o("furn_export"),e.export??null,void 0,l,a("export")),M(o("furn_export_hint"),"nf-wide")):_}
    ${e.type==="inverter"&&(t.doc.settings.roof.solar??[]).length>0?M(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):_}
    ${e.type==="home_battery"?it(P(t,o("furn_soc"),e.soc??null,void 0,c(f=>he(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),a("soc")),P(t,o("furn_charge"),e.charge??null,void 0,l,a("charge")),M(o("furn_charge_hint"),"nf-wide")):_}
    ${e.type==="wallbox"?it(P(t,o("furn_wallbox_status"),e.status??null,void 0,c(f=>ni(f)||he(f)),a("status"))):_}
    ${!i||e.entity?m`${L(t,o("device_confirm"),!!e.confirm,f=>n.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${On(t,e.marker??null,f=>n.update({marker:f}))}${Dt(t,e.icon,f=>n.update({icon:f}))}${i?_:Ln(t,e.pin_offset,f=>n.update({pin_offset:f}))}</div>`:_}
    ${e.type==="robot_vacuum"?it(P(t,o("furn_robot_room"),e.room_sensor??null,gu(r,Be(r,t.doc.floors).get(e.id)?.entity??null,null),c(he),f=>n.update({room_sensor:f}))):_}
    ${e.type==="robot_vacuum"&&d?aw(t,e):_}
    ${e.type==="fridge_smart"?m`${it(P(t,o("furn_door_left"),e.door_left??null,void 0,p,f=>n.update({door_left:f})),P(t,o("furn_door_right"),e.door_right??null,void 0,p,f=>n.update({door_right:f})))}
        ${M(o("fridge_hint"))}`:_}
    ${M(o(h))}`}var pw=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,fw=/^(sensor|input_select|select|input_text)\./,mw=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,gw=(t,e)=>t.flatMap(n=>n.items.filter(r=>r.vehicle).map(r=>({id:de(n.id,r.id),label:`${Ye(r,de(n.id,r.id),e)} \xB7 ${Oe(n,e)}`})));function am(t,e){return e.startsWith("device_tracker.")?t.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function lm(t,e,n,r){return m`<select ?disabled=${!t.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!n}>${t.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===n}>${o.label}</option>`)}
  </select>`}function _w(t,e,n,r){let o=t.t,i=e.type_entity?t.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],l=e.types??[],a=u=>r.update({types:u}),c=(u,d)=>a(l.map((p,h)=>h===u?{...p,...d}:p));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${l.map((u,d)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!t.admin} @change=${p=>c(d,{state:p.target.value})} />
        ${lm(t,n,u.vehicle,p=>c(d,{vehicle:p??""}))}
        <button class="nf-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>a(l.filter((p,h)=>h!==d))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${t.admin?m`<button class="nf-btn" @click=${()=>a([...l,{state:s[l.length]??"",vehicle:n[0]?.id??""}])}>${o("parking_add_type")}</button>`:_}
  </div>`}function cm(t,e,n,r){let o=t.t,i=gw(n,t.hass?.language??"en"),s=H(t.hass,f=>pw.test(f)).sort((f,g)=>am(t,f.id)-am(t,g.id)),l=H(t.hass,f=>fw.test(f)),a=e.car??{},c=t.floor,u=c?.rooms.find(f=>f.points.length>=3&&N([e.x,e.z],f.points)),d=e.vehicle?G(e.vehicle):void 0,p=d?d.size[2]*(e.scale??1):0,h=!!u&&!!c&&p>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${P(t,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${lm(t,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?_:M(o("parking_no_pack"),"nf-wide")}
      ${E(t,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${P(t,o("parking_type_entity"),e.type_entity??null,void 0,l,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?_w(t,e,i,r):_}
    </div>
    ${h?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:U(t.hass,p,2),room:U(t.hass,c.height,2)})}</p>`:_}
    ${M(o("parking_hint"))}
    ${t.hass?m`${P(t,o("live_car_device"),a.device??null,null,H(t.hass,f=>mw.test(f)),f=>r.update({car:{...a,device:f}}))}
        ${M(o("live_car_device_hint"),"nf-wide")}
        ${P(t,o("live_car_departure_entity"),a.departure??null,void 0,H(t.hass,f=>/^(sensor|input_datetime|time|datetime)\./.test(f)),f=>r.update({car:{...a,departure:f==="none"?null:f}}))}`:_}`}function um(t,e){let r=cn(t,e.w,e.d,e.h).treads.findIndex(o=>o.landing);return r>=0?r+1:1}function bw(t){let e=cn(ro(t),t.w,t.d,t.h),n=e.treads.map(yi),r=0;for(let i=1;i<n.length;i++)r+=Math.hypot(n[i][0]-n[i-1][0],n[i][1]-n[i-1][1]);let o=n.length>1?r/(n.length-1):0;return{rise:e.rise,going:o,measure:2*e.rise+o,steps:e.steps}}function yw(t){let[e,n]=xa[t],r=cn({...ht,shape:t},e,n,2.8),o=26/Math.max(e,n);return m`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${r.treads.map(i=>R`<polygon points=${i.poly.map(([s,l])=>`${s*o},${l*o}`).join(" ")} fill=${i.landing?"currentColor":"none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`}function dm(t,e,n){let r=t.t,o=ro(e),i=f=>n.update({stair:{...o,...f}}),s=o.shape!=="straight",l=f=>{let[g,y]=xa[f];n.update({stair:{...o,shape:f,run_width:null},w:g,d:y})},a=t.floor?t.doc.floors.filter(f=>f.elevation<t.floor.elevation).sort((f,g)=>g.elevation-f.elevation)[0]:void 0,c=t.floor?t.doc.floors.filter(f=>f.elevation>t.floor.elevation).sort((f,g)=>f.elevation-g.elevation)[0]:void 0,u=f=>{let g=f?a&&t.floor?t.floor.elevation-a.elevation:null:c&&t.floor?c.elevation-t.floor.elevation:null;n.update({stair:{...o,down:f},...g?{h:Math.round(g*1e3)/1e3}:{}})},d=bw(e),p=f=>U(t.hass,f*100,1),h=d.measure>=.59&&d.measure<=.65&&d.rise<=.21;return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${r("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${r("stair_shape")}>
        ${ya.map(f=>m`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${f===o.shape} title=${r(`stair_shape_${f}`)} ?disabled=${!t.admin} @click=${()=>l(f)}>
            ${yw(f)}<span>${r(`stair_shape_${f}`)}</span>
          </button>`)}
      </div>
    </div>
    ${s?O(t,r("stair_turn"),o.turn,[["left",r("stair_turn_left")],["right",r("stair_turn_right")]],f=>i({turn:f})):""}
    ${O(t,r("stair_build"),o.build,wa.map(f=>[f,r(`stair_build_${f}`)]),f=>i({build:f}))}
    ${o.build!=="solid"?L(t,r("stair_risers"),o.risers,f=>i({risers:f}),{wide:!1}):""}
    ${E(t,r("stair_steps"),o.steps??d.steps,f=>i({steps:Math.round(Math.min(40,Math.max(2,f)))}),1,2)}
    ${o.steps!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({steps:null})}>${r("height_auto")}</button>`:""}
    ${s&&o.shape!=="spiral"?m`${E(t,r("stair_run_width"),o.run_width??cn(o,e.w,e.d,e.h).flight,f=>i({run_width:Math.max(.4,f)}),.01,.4)}
        ${o.run_width!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({run_width:null})}>${r("height_auto")}</button>`:""}`:""}
    ${o.shape==="l"||o.shape==="u"?m`${E(t,r("stair_landing_after"),o.landing_after??um(o,e),f=>i({landing_after:Math.round(Math.min(d.steps-1,Math.max(1,f)))}),1,1)}
        ${o.landing_after!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({landing_after:null})}>${r("height_auto")}</button>`:""}
        ${M(r("stair_landing_hint",{h:p((o.landing_after??um(o,e))*Math.abs(e.h)/d.steps)}),"nf-wide")}`:""}
    ${O(t,r("stair_rail"),o.rail,va.map(f=>[f,r(`stair_rail_${f}`)]),f=>i({rail:f}))}
    ${L(t,r("stair_down"),o.down,u,{title:r("stair_down_hint")})}
    ${O(t,r("stair_opening"),o.opening,ka.map(f=>[f,r(`stair_opening_${f}`)]),f=>i({opening:f}),{wide:!0,title:r("stair_opening_hint")})}
    <p class="nf-sub nf-wide ${h?"":"nf-pack-error"}">
      ${r("stair_measures",{steps:d.steps,rise:p(d.rise),going:p(d.going),measure:p(d.measure)})} ${h?"\u2713":`\u2013 ${r("stair_uncomfortable")}`}
    </p>
    ${M(r(o.down?"stair_down_note":o.opening==="headroom"?"stair_up_note":"stair_up_note_plain"),"nf-wide")}
  </div>`}var ww=new Set(["parking","stairwell","rug","grid_point"]),vw={inverter:{label:"furn_model",values:["","slim","hybrid"],text:t=>`inverter_${t||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:t=>`battery_${t||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:t=>`pendant_${t||"shade"}`},sofa:{label:"sofa_shape",values:["","l","u"],text:t=>`sofa_${t||"straight"}`}};function kw(t,e,n,r){let o=t.hass?.language??"en",i=n.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${t.t("furniture_type")}
    <select ?disabled=${!t.admin} @change=${s=>r.update({type:s.target.value})}>
      ${Po.map(s=>m`<option value=${s} ?selected=${s===e.type}>${t.t(`furn_${s}`)}</option>`)}
      ${n.map(s=>m`<optgroup label=${Oe(s,t.hass?.language??"de")}>
          ${s.items.map(l=>m`<option value=${de(s.id,l.id)} ?selected=${de(s.id,l.id)===e.type}>${Ye(l,de(s.id,l.id),o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${qe(t.hass,e.type)}</option>`:_}
    </select>
  </label>`}function xw(t,e,n){let r=G(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return _;let o=t.hass?.language??"en",i=r.find(l=>l.id===e.variant)??r[0],s=l=>Pd(l,o);return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${t.t("paint_colour")}>
        ${r.map((l,a)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${l.id===i.id} title=${s(l)} style=${`--sw:${l.hex}`} ?disabled=${!t.admin} @click=${()=>n.update({variant:a===0?null:l.id})}></button>`)}
      </div>
    </div>
  </div>`}function $w(t,e,n){let r=vw[e.type];if(!r)return _;let o=r.values.map(i=>[i,t.t(r.text(i))]);return m`<div class="nf-form">${O(t,t.t(r.label),e.variant??"",o,i=>n.update({variant:i||null,...e.type==="sofa"&&i&&e.d<1.4?{d:1.7,w:Math.max(e.w,i==="u"?3:2.4)}:{}}),{wide:!0})}</div>`}function Sw(t,e,n){let r=t.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${t.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t.admin} placeholder=${o} @change=${i=>n.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?L(t,t.t("show_name"),!!e.show_name,i=>n.update({show_name:i||void 0})):_}`}function Mw(t,e,n){let r=t.t,o=s=>n.update(s),i=t.floor;return m`${E(t,r("x"),e.x,s=>o({x:s}))} ${E(t,r("z"),e.z,s=>o({z:s}))}
    ${E(t,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${E(t,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${E(t,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${E(t,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${E(t,r("tilt_x"),e.tilt_x??0,s=>o({tilt_x:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${E(t,r("tilt_z"),e.tilt_z??0,s=>o({tilt_z:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${ce(e.type)?_:L(t,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${E(t,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${e.upright?_:E(t,r("strip_rise"),e.rise??0,s=>o({rise:Math.max(-80,Math.min(80,Math.round(s)))}),5)}
        ${L(t,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:_}
    ${Io(e)&&i?m`${E(t,r("mount_height"),e.mount_y??At(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:_}`:_}
    ${Rw(e)&&i?m`${E(t,r("ceiling_here"),Ro(i,e),s=>o({ceiling_y:Math.abs(s-at(i,e.x,e.z))<.005?null:Math.max(.5,s)}),.01,.5)}
        ${e.ceiling_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({ceiling_y:null})}>${r("height_auto")}</button>`:_}
        ${hm(t,e)!==null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${r("ceiling_slope_hint")} @click=${()=>o({ceiling_y:hm(t,e)})}>📐 ${r("ceiling_slope")}</button>`:_}
        ${M(r("ceiling_here_hint"),"nf-wide")}`:_}`}function hm(t,e){let n=t.floor;if(!n)return null;let r=Sr(t.doc,e.x,e.z);if(r===null)return null;let o=Math.round((r-n.elevation)*1e3)/1e3;return o>.5&&o<at(n,e.x,e.z)-.02?o:null}var Rw=t=>us.has(t.type)||G(t.type)?.mount==="ceiling";function Ew(t,e,n){if(e.type==="stairs"&&e.stair)return _;if(e.type==="stairs")return m`${M(t.t("stairs_hint"))}${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-primary" title=${t.t("stair_upgrade_hint")} @click=${()=>n.update({stair:{...ht}})}>${t.t("stair_upgrade")}</button></div>`:_}`;if(e.type!=="stairwell")return _;let r=t.floor&&!t.floor.rooms.some(o=>o.points.length>=3&&Dh(ms(e),o.points));return m`${M(t.t("stairwell_hint"))}${r?m`<p class="nf-sub nf-pack-error">${t.t("stairwell_outside")}</p>`:_}`}function Aw(t,e,n){if(!t.admin)return _;let r=t.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking",i=t.doc.floors.filter(s=>s.id!==t.floor?.id);return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>n.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>n.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>n.toDevice(e)}>${r("as_device")}</button>`:_}
    <button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button>
  </div>
  ${i.length?m`<div class="nf-form">${O(t,r("furn_to_floor"),"",[["","\u2013"],...i.map(s=>[s.id,s.name])],s=>s&&n.toFloor(s),{wide:!0,title:r("furn_to_floor_hint")})}</div>`:_}`}function Fw(t,e,n){let r=e.tap??null,o=[["",t.t("furn_tap_default")],...Ao.map(s=>[s,t.t(`own_action_${s}`)])],i=s=>n.update({tap:{action:r?.action??"navigate",target:r?.target??null,data:r?.data??null,...s}});return m`<div class="nf-form">
    ${O(t,t.t("furn_tap"),r?.action??"",o,s=>s?i({action:s}):n.update({tap:null}),{wide:!0,title:t.t("furn_tap_hint")})}
    ${r&&r.action!=="fire_dom_event"?Z(t,t.t(`own_target_${r.action}`),r.target??"",s=>i({target:s||null}),{wide:!0,placeholder:ia[r.action]}):_}
    ${r&&(r.action==="service"||r.action==="fire_dom_event")?sa(t,r,s=>i({data:s})):_}
    ${r&&!Et(e.type)&&!G(e.type)?.gangs?m`${On(t,e.marker??null,s=>n.update({marker:s}))}${Dt(t,e.icon,s=>n.update({icon:s}))}${Ln(t,e.pin_offset,s=>n.update({pin_offset:s}))}`:_}
  </div>`}function Tw(t,e,n){let r=t.t,o=e.picture??"",i=o.startsWith("image:"),s=async a=>{let c=a.target,u=c.files?.[0];if(c.value="",!u||!t.hass)return;let{data:d}=await Bn(u),p=D("img");await St(t.hass,p,d),n.update({picture:`image:${p}`})},l=H(t.hass,a=>/^(image|camera|media_player)\./.test(a));return m`<div class="nf-form nf-links">
    ${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(i?"picture_replace":"picture_upload")}<input type="file" accept="image/*" hidden @change=${s} /></label>`:_}
    ${i?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.update({picture:null})}>${r("delete")}</button></p>`:m`${Z(t,r("picture_url"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?"":o,a=>n.update({picture:a||null}),{wide:!0,placeholder:"/local/holiday.jpg"})}
        ${P(t,r("picture_entity"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?o:null,void 0,l,a=>n.update({picture:a&&a!=="none"?a:null}))}`}
    ${E(t,r("picture_border"),e.picture_border??0,a=>n.update({picture_border:Math.max(0,Math.min(40,Math.round(a)))||null}),1,0)}
    ${O(t,r("picture_fit"),e.picture_fit??"cover",[["cover",r("picture_fit_cover")],["contain",r("picture_fit_contain")]],a=>n.update({picture_fit:a==="contain"?"contain":null}))}
    ${M(r("picture_hint"),"nf-wide")}
  </div>`}var zw=/^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;function Pw(t,e,n){let r=t.t,o=e.show_when??null,i=s=>n.update({show_when:{entity:o?.entity??"",state:o?.state??null,invert:o?.invert||void 0,...s}});return m`<div class="nf-form">
    ${P(t,r("furn_show_when"),o?.entity||null,void 0,H(t.hass,s=>zw.test(s)),s=>s&&s!=="none"?i({entity:s}):n.update({show_when:null}))}
    ${o?.entity?m`${Z(t,r("furn_show_when_state"),o.state??"",s=>i({state:s||null}),{wide:!0,placeholder:t.hass?.states[o.entity]?.state??"on"})}
        ${L(t,r("furn_show_when_invert"),!!o.invert,s=>i({invert:s||void 0}))}`:_}
    ${M(r("furn_show_when_hint"),"nf-wide")}
  </div>`}function lo(t,e,n){let r=G(e.type)?.gangs??0,o=r?im(t,e,r,n):Et(e.type)?sm(t,e,n):ww.has(e.type)?_:m`<div class="nf-form nf-links">${sl(t,e,n)}</div>`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||t.t("furniture")}</h3>${n.lockButton}</div>
    <div class="nf-form">${Sw(t,e,n)} ${kw(t,e,n.packs,n)} ${Mw(t,e,n)}</div>
    ${Ew(t,e,n)} ${e.type==="stairs"&&e.stair?dm(t,e,n):_} ${$w(t,e,n)} ${xw(t,e,n)}
    ${o} ${e.type.endsWith(":sprinkler")?m`<div class="nf-form">${E(t,t.t("spray_reach"),e.spray??3,i=>n.update({spray:Math.min(15,Math.max(.5,i))}),.5,.5)}${M(t.t("spray_hint"),"nf-wide")}</div>`:_}
    ${fc(e.type)?Tw(t,e,n):_}
    ${G(e.type)?.pet?m`<div class="nf-form nf-links">${P(t,t.t("pet_room_sensor"),e.room_sensor??null,void 0,H(t.hass,i=>/^(sensor|device_tracker|input_select|select)\./.test(i)),i=>n.update({room_sensor:i&&i!=="none"?i:null}))}${M(t.t("pet_room_hint"),"nf-wide")}</div>`:_}
    ${as(e.type)?rm(t,e,as(e.type),n):_} ${ss(G(e.type))?om(t,e,n):_} ${e.type==="parking"?cm(t,e,n.packs,n):_}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&t.admin?m`<section>${M(t.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>n.toSpot(e)}>🅿 ${t.t("vehicle_to_spot")}</button></div></section>`:_}
    ${t.admin?Fw(t,e,n):_} ${Pw(t,e,n)} ${Aw(t,e,n)}
  </section>`}var Iw=["door","window","opening","garage_door"],Dw=/griff|handle|fenster|window|drehgriff/i;function Ow(t){let e=[null,15,30,45,60,90,120,180];return t&&!e.includes(t)&&e.push(t),e.sort((n,r)=>(n??0)-(r??0))}function Lw(t){let{hass:e}=t,n=i=>e?.states[i],r=i=>n(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&Iw.includes(r(i)??"");return{covers:H(e,i=>i.startsWith("cover.")),positions:H(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(n(i)?.state))),contacts:H(e,i=>o(i)||he(i)&&Ss(n(i))!==null),plainContacts:H(e,o),handles:H(e,i=>i.startsWith("binary_sensor.")?typeof n(i)?.attributes.window_state=="string":he(i)&&(Ss(n(i))!==null||Dw.test(`${i} ${W(e,i)}`))),numbers:H(e,he),locks:H(e,i=>i.startsWith("lock."))}}function ll(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[n]=null);return fr(t.hass,r).get(e.id)?.[n]??null}var kt=t=>t==="none"?null:t;function Hw(t,e,n){let r=e.type==="door"?hs:ps,o=jt({type:e.type,style:null},n.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",t.t("style_auto",{style:t.t(`style_${o}`)})],...r.map(l=>[l,t.t(`style_${l}`)])];return O(t,t.t("opening_style"),i,s,l=>n.update({style:l||null}),{wide:!0})}function al(t,e,n,r,o){return m`<label class="nf-field"
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
  </label>`}function Cw(t,e,n){if(e.type!=="door")return _;let r=jt(e,n.isExterior(e));return r==="sidelight"?m`${L(t,t.t("sidelight_hinge"),!!e.sidelight_hinge,o=>n.update({sidelight_hinge:o}),{wide:!1,title:t.t("sidelight_hinge_hint")})}
      ${al(t,e,"sidelight_width","sidelight_width",n)}`:r==="sidelights"?m`${al(t,e,"sidelight_width","sidelight_width_left",n)} ${al(t,e,"sidelight_width2","sidelight_width_right",n)}`:_}function Nw(t,e,n){return e.type!=="window"||jt(e,n.isExterior(e))!=="glass_wall"?_:m`<label class="nf-field"
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
    ${M(t.t("glass_panes_hint"),"nf-wide")}`}function pm(t,e,n,r,o){let i=n===1,s=t.t,l=i?e.tilt:e.tilt2??null,a=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(l&&l!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),d=f=>{let g=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},...g})},p=f=>r.update(i?{contact:f}:{contact2:kt(f)}),h=e.tilt_angle&&e.tilt_angle!=="none";return m`${O(t,s("sensor_kind"),c,u,d,{wide:!0})}
    ${c==="handle"?P(t,s("handle_entity"),a,void 0,o.handles,f=>p(f==="none"?i?"none":null:f)):P(t,s("contact_entity"),a,i?ll(t,e,"contact"):void 0,o.plainContacts,p)}
    ${c==="contact_tilt"?P(t,s("tilt_entity"),l,void 0,o.contacts,f=>r.update(i?{tilt:kt(f)}:{tilt2:kt(f)})):_}
    ${i?m`${P(t,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:kt(f)}))}
        ${h?m`${E(t,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${E(t,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${L(t,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:_}`:_}`}function Bw(t,e,n,r){let o=t.t,i=e.type==="window",s=ll(t,e,"cover"),l=e.cover!=="none"&&(e.cover||s);return m`${P(t,o(i?"cover_entity":"door_cover"),e.cover,s,r.covers,a=>n.update({cover:a}))}
    ${l?m`${P(t,o("cover_position_entity"),e.position??null,void 0,r.positions,a=>n.update({position:kt(a)}))}
        ${e.position?L(t,o("cover_position_invert"),!!e.position_inverted,a=>n.update({position_inverted:a})):_}
        ${L(t,o("device_confirm"),!!e.confirm,a=>n.update({confirm:a}),{title:o("cover_confirm_hint")})}
        ${i?m`${O(t,o("blind_kind"),e.blind??"roller",[["roller",o("blind_roller")],["venetian",o("blind_venetian")],["inside",o("blind_inside")]],a=>n.update({blind:a==="roller"?null:a}))}
            ${P(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,a=>n.update({cover2:kt(a)}))}`:_}
        ${!i&&e.type!=="garage"?P(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,a=>n.update({cover2:kt(a)})):_}
        ${E(t,o("cover_my"),e.my_position??0,a=>n.update({my_position:a>0?Math.min(100,Math.round(a)):null}),5,0)}
        ${M(o("blind_hint"),"nf-wide")}`:_}`}function Ww(t,e,n,r){let o=t.t,i=e.leaves===2;return m`${P(t,o(i?"contact_main":"contact_entity"),e.contact,ll(t,e,"contact"),r.contacts,s=>n.update({contact:s}))}
    ${i&&e.type!=="garage"?P(t,o("contact_second"),e.contact2,void 0,r.contacts,s=>n.update({contact2:kt(s)})):_}
    ${e.type==="door"?L(t,o("door_shut"),!!e.shut,s=>n.update({shut:s}),{title:o("door_shut_hint")}):_}
    ${e.type==="door"&&e.style!=="sliding"&&e.style!=="passage"?O(t,o("door_angle"),String(e.open_angle??""),Ow(e.open_angle).map(s=>[String(s??""),s?`${s}\xB0`:o("door_angle_default")]),s=>n.update({open_angle:s?Number(s):null}),{title:o("door_angle_hint")}):_}
    ${e.type==="door"?m`${P(t,o("opening_lock"),e.lock??null,void 0,r.locks,s=>n.update({lock:kt(s)}))}${M(o("opening_lock_hint"),"nf-wide")}`:_}`}function cl(t,e,n){let r=t.t,o=Lw(t),i=yn(e),[s,l,a]=[e.type==="window",e.type==="garage",e.type==="door"],c=h=>n.update(h),u=Object.keys(bn).map(h=>m`<button class="nf-chip" aria-pressed=${h===i} @click=${()=>n.setPreset(e,h)}>${r(`preset_${h}`)}</button>`),d=[["left",r("hinge_left")],["right",r("hinge_right")]],p=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${n.lockButton}</div>
    ${t.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:_}
    ${t.admin&&!l?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${a?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:_}
        </div>`:_}
    <div class="nf-form">
      ${E(t,r("width"),e.width,h=>c({width:Math.max(.3,h)}),.01,.3)}
      ${E(t,r("opening_position"),e.offset,h=>c({offset:Math.max(0,h)}),.01,0)}
      ${s?E(t,r("sill"),e.sill,h=>c({sill:Math.max(0,h)}),.01,0):_}
      ${E(t,r("opening_height"),e.height,h=>c({height:Math.max(.3,h)}),.01,.3)}
      ${l?_:Hw(t,e,n)} ${Cw(t,e,n)} ${Nw(t,e,n)}
      ${s&&e.style!=="glass_wall"?O(t,r("window_opens"),e.opens??"turn",kc.map(h=>[h,r(`window_opens_${h}`)]),h=>c({opens:h==="turn"?null:h}),{wide:!0,title:r("window_opens_hint")}):_}
      ${O(t,r("opening_mark"),e.mark==="closed"?"closed":"",p,h=>c({mark:h==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${l?_:O(t,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,d,h=>c({hinge:h}),{wide:!0})}
      ${s?O(t,r("sill_boards"),e.sill_boards??"auto",[["auto",r("sill_boards_auto")],["none",r("sill_boards_none")],["inside",r("sill_boards_inside")],["outside",r("sill_boards_outside")]],h=>c({sill_boards:h==="auto"?null:h}),{wide:!0}):_}
      ${s?L(t,r("opening_rain_warning"),e.rain_warning!==!1,h=>c({rain_warning:h?void 0:!1}),{wide:!0}):_}
      ${s&&n.isBelowGround?.(e)?L(t,r("opening_light_well"),e.light_well!==!1,h=>c({light_well:h?null:!1}),{wide:!0}):_}
      ${Bw(t,e,n,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:_}${pm(t,e,1,n,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${pm(t,e,2,n,o)}`:_}`:Ww(t,e,n,o)}
    </div>
    ${M(r(s?"opening_hint":l?"garage_hint":"door_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:_}
  </section>`}function Gn(t){let e=t.roof.floorsTopDown();return e.length<2?_:m`<div class="nf-seg nf-dev-source">${e.map(n=>m`<button aria-pressed=${n.id===t.floorId} @click=${()=>t.setFloorId(n.id)}>${n.name}</button>`)}</div>`}function Un(t,e,n){return t.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${t.t("fix_hint")} @click=${n}>${e?`\u{1F512} ${t.t("unfix")}`:`\u{1F513} ${t.t("fix")}`}</button>`:_}function jn(t,e,n,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===n} ?disabled=${!t.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function xt(t,e){let{t:n,doc:r,hass:o}=t,i=n(`compass_${Ys(e,r.settings.north??0)}`);if(e.key===Ie)return n("solar_ground");if(e.wall){let a=r.floors.find(c=>c.id===e.wall.floorId);return`${n("solar_wall")} ${a?.name??""} \xB7 ${i} \xB7 ${U(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],l=e.section?n("solar_section",{n:s.findIndex(a=>a.id===e.section)+1}):n("solar_main");return e.flat?`${l} \xB7 ${n("solar_flat")}`:`${l} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var ul=(t,e)=>m`<div class="nf-h3row"><h3>${t}</h3>${e}</div>`,dl=(t,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${t}</button>`,hn=(t,e)=>n=>Math.max(t,Math.min(e,ie(n)));function Vw(t,e){let{host:n,roof:r}=t,o=n.t,i=w=>r.patchSection(w),s=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",a=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[a[1],a[0]]:a,d=!!n.doc.settings.lock_plan,p=(w,x,k,$=.05,A=0)=>E(n,w,x,F=>k(Math.max(A,ie(F))),$,A),h=[...n.doc.floors].filter(w=>w.rooms.length>0).sort((w,x)=>x.elevation-w.elevation),f=Cs(n.doc,e)?.id,g=w=>{let x=n.doc.floors.find(A=>A.id===w);if(!x)return;let k=ie(x.elevation+x.height),$=k-e.base;i({base:k,eave_a:ie(e.eave_a+$),eave_b:ie(e.eave_b+$)})},y=d?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>t.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:Un(n,!!e.locked,()=>i({locked:!e.locked})),b=Sc.map(w=>[w,o(`roof_shape_${w}`)]),v=(w,x)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(w)}>+ ${o("roof_dormer")} ${x}</button>`;return m`${dl(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${Gn(t)}
      ${ul(`${e.dormer?o("roof_dormer"):o("roof_section")} ${dp(n.doc.settings.roof.sections??[],e.id)}`,n.admin?y:_)}
      ${O(n,o("roof_shape"),e.shape,b,w=>i({shape:w,...w==="gable"||w==="hip"||w==="halfhip"?{}:{ends:null}}),{wide:!0})}
      ${e.shape==="gable"||e.shape==="hip"||e.shape==="halfhip"?Zw(n,e,i):_}
      ${s?_:jn(n,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,w=>i({axis:w}))}
      ${L(n,o("roof_open"),!!e.open,w=>i({open:w}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?p(o("roof_height"),e.eave_a,w=>i({eave_a:w,eave_b:w})):m`${p(`${o("roof_eave")} ${l?"":c}`,e.eave_a,w=>i({eave_a:w}))}
            ${l?_:p(`${o("roof_eave")} ${u}`,e.eave_b,w=>i({eave_b:w}))}
            ${p(`${o("roof_pitch_short")} ${l?"":c}`,e.pitch_a,w=>i({pitch_a:Math.min(75,w)}),1)}
            ${l?_:p(`${o("roof_pitch_short")} ${u}`,e.pitch_b,w=>i({pitch_b:Math.min(75,w)}),1)}`}
        ${p(o("roof_base"),e.base,w=>i({base:w}))}
        ${e.points?.length?_:E(n,o("roof_rotation"),e.rotation??0,w=>i({rotation:(Math.round(w)%360+540)%360-180||null}),1)}
        ${O(n,o("roof_on_floor"),f??"",h.map(w=>[w.id,w.name]),g,{title:o("roof_on_floor_hint")})}
        ${M(o("roof_base_hint"),"nf-wide")}
        ${p(o("roof_overhang"),e.overhang??n.doc.settings.roof.overhang,w=>i({overhang:Math.min(2,w)}))}
      </div>
      <details class="nf-section" ?open=${!!e.overhang_sides}>
        <summary>${o("roof_overhang_sides")}</summary>
        <div class="nf-form">
          ${["a","b","u0","u1"].map(w=>p(o(`roof_overhang_${w}`),$r(n.doc,e,e.overhang??n.doc.settings.roof.overhang)[w],x=>i({overhang_sides:{...e.overhang_sides??{},[w]:Math.min(2,Math.max(0,x))}})))}
          ${n.admin&&e.overhang_sides?m`<button class="nf-btn" @click=${()=>i({overhang_sides:null})}>${o("roof_overhang_auto")}</button>`:_}
        </div>
        ${M(o("roof_overhang_sides_hint"))}
      </details>
      ${s&&n.admin?m`${Y(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:_)}
          ${e.points?Y(...e.points.map((w,x)=>m`<button class="nf-chip" title=${o("delete_point")} ?disabled=${(e.points?.length??0)<=3} @click=${()=>r.removeCorner(x)}>${x+1} ×</button>`)):_}
          ${M(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:_}
      ${M(`${o("roof_ridge_height")}: ${pe(n.hass,Zt(e))} \xB7 ${o("roof_section_hint")}`)}
      ${n.admin?Y(s?_:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${v("a",c)}${l?_:v("b",u)}`:_,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):_}
    </section>`}function Kw(t,e){let{host:n,roof:r}=t,o=n.t,i=j(n.doc),s=p=>r.patchWindow(p),l=H(n.hass,p=>p.startsWith("cover.")),a=H(n.hass,p=>ni(p)||he(p)),c=(p,h,f,g)=>P(n,o(p),h??null,void 0,f,y=>s({[g]:y==="none"?null:y})),u=p=>{let h=i.find(f=>f.key===p);h&&s({...Or(h,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},d=(n.doc.settings.roof.windows??[]).findIndex(p=>p.id===e.id)+1;return m`${dl(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${ul(`\u{1FA9F} ${o("roof_window")} ${d}`,Un(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("solar_face"),e.face,i.map(p=>[p.key,xt(n,p)]),u,{wide:!0})}
        ${E(n,o("width"),e.w??.78,p=>s({w:hn(.3,4)(p)}),.01,.3)}
        ${E(n,o("height_m"),e.h??1.18,p=>s({h:hn(.3,4)(p)}),.01,.3)}
        ${E(n,o("solar_u"),e.u,p=>s({u:ie(p)}),.05)} ${E(n,o("solar_v"),e.v,p=>s({v:ie(p)}),.05)}
        ${c("cover_entity",e.cover,l,"cover")} ${c("contact_entity",e.contact,a,"contact")}
        ${c("roof_window_tilt",e.tilt,a,"tilt")} ${c("roof_window_motor",e.window,l,"window")}
        ${Z(n,o("roof_window_name"),e.name??"",p=>s({name:p||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("roof_window_motor_hint"))} ${M(o("roof_window_hint"))}
      ${n.admin?Y(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):_}
    </section>`}function Gw(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.windows??[],o=new Map(j(e.doc).map(s=>[s.key,s])),i=s=>{n.windowId=s,n.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${M(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,l)=>{let a=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${l+1} · ${a?xt(e,a):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:_}
    ${Y(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function Uw(t,e){let{host:n,roof:r}=t,o=n.t,i=j(n.doc),s=d=>r.patchChimney(d),l=tn(e),a=d=>{let p=i.find(h=>h.key===d);p&&s({...Lr(p,e.id),shape:e.shape,w:e.w,d:e.d,h:e.h,name:e.name})},c=l.shape==="round"||l.shape==="steel",u=(n.doc.settings.roof.chimneys??[]).findIndex(d=>d.id===e.id)+1;return m`${dl(o("roof_sections"),()=>r.chimneyId=null)}
    <section>
      ${ul(`\u{1F9F1} ${o("chimney")} ${u}`,Un(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("chimney_shape"),l.shape,Mc.map(d=>[d,o(`chimney_${d}`)]),d=>s({shape:d,w:null,d:null,h:null}),{wide:!0})}
        ${O(n,o("solar_face"),e.face,i.map(d=>[d.key,xt(n,d)]),a,{wide:!0})}
        ${c?E(n,o("chimney_diameter"),l.w,d=>s({w:hn(.1,3)(d),d:hn(.1,3)(d)}),.01,.1):m`${E(n,o("width"),l.w,d=>s({w:hn(.1,3)(d)}),.01,.1)} ${E(n,o("chimney_depth"),l.d,d=>s({d:hn(.1,3)(d)}),.01,.1)}`}
        ${E(n,o("chimney_height"),l.h,d=>s({h:hn(.2,5)(d)}),.05,.2)}
        ${E(n,o("solar_u"),e.u,d=>s({u:ie(d)}),.05)} ${E(n,o("solar_v"),e.v,d=>s({v:ie(d)}),.05)}
        ${Z(n,o("roof_window_name"),e.name??"",d=>s({name:d||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("chimney_hint"))}
      ${n.admin?Y(m`<button class="nf-btn nf-danger" @click=${()=>r.removeChimney()}>${o("delete")}</button>`):_}
    </section>`}function jw(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.chimneys??[],o=new Map(j(e.doc).map(s=>[s.key,s])),i=s=>{n.chimneyId=s,n.sectionId=null};return m`<section>
    <h3>🧱 ${e.t("chimneys")}</h3>
    ${o.size>0?_:M(e.t("solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,l)=>{let a=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("chimney")} ${l+1} · ${e.t(`chimney_${tn(s).shape}`)} · ${a?xt(e,a):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:_}
    ${Y(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addChimney()}>+ ${e.t("chimney")}</button>`)}
  </section>`}function Zw(t,e,n){let r=t.t,o=e.shape,[i,s]=e.ends??[o,o],l=["gable","hip","halfhip"].map(u=>[u,r(`roof_shape_${u}`)]),a=u=>n({ends:u[0]===o&&u[1]===o?null:u}),c=i==="halfhip"||s==="halfhip";return m`<div class="nf-form">
    ${O(t,r("roof_end_start"),i,l,u=>a([u,s]))}
    ${O(t,r("roof_end_end"),s,l,u=>a([i,u]))}
    ${c?m`<label class="nf-field nf-wide" title=${r("roof_halfhip_hint")}
          >${r("roof_halfhip")} · ${Math.round((e.halfhip??.55)*100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((e.halfhip??.55)*100))} ?disabled=${!t.admin} @change=${u=>n({halfhip:Number(u.target.value)/100})} />
        </label>`:_}
  </div>`}function fm(t){let{host:e,roof:n}=t,r=e.doc.settings.roof,o=r.type==="custom";if(n.window)return Kw(t,n.window);if(n.chimney)return Uw(t,n.chimney);if(o&&n.section)return Vw(t,n.section);let i=o?r.sections??[]:[],s=e.t,l=(a,c)=>`${c+1} \xB7 ${a.dormer?s("roof_dormer"):s(`roof_shape_${a.shape}`)} \xB7 ${U(e.hass,Math.abs(a.x1-a.x0),1)} \xD7 ${U(e.hass,Math.abs(a.z1-a.z0),1)} m \xB7 ${s("roof_ridge_height")} ${U(e.hass,Zt(a),1)} m`;return m`<section>
      ${Gn(t)}
      <h3>${s("roof_sections")}</h3>
      ${M(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((a,c)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>n.sectionId=a.id}><span>${l(a,c)}</span></button></div>`)}</div>
          ${Y(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(a=>a.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:Y(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>n.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${Gw(t)} ${jw(t)}`}var hl=40,mm=60;function pl(t){let e=new Set((t.solar??[]).map(n=>n.string).filter(Boolean));t.strings=(t.strings??[]).filter(n=>e.has(n.id))}function gm(t,e,n,r){let o=t.solar?.find(i=>i.id===e);if(o){if(n==="new"){let i=t.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};t.strings=[...i,s],o.string=s.id}else o.string=n;pl(t)}}function _m(t,e){let n=new Set(t??[]);return n.delete(e)||n.add(e),n.size>0?[...n].sort():null}function bm(t){let e=t.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(mm,e[0])),layout:null,skip:null}:{layout:e.slice(0,hl).map(r=>Math.min(mm,r)),rows:Math.min(hl,e.length),cols:Math.max(1,...e),skip:null}}function ym(t,e){let n=Math.max(1,Math.min(hl,Math.round(e))),r=t.layout;return r?.length?{rows:n,layout:Array.from({length:n},(o,i)=>r[i]??r[r.length-1])}:{rows:n}}var wm=t=>t.layout?.length?t.layout.join(", "):String(t.cols),qw=["portrait","look","name","string","entity","module_w","module_h","wp"];function Yw(t){let e={};for(let n of qw)e[n]=t[n];return e}function vm(t,e,n){let r=Yw(e);if(n===Ie)return{...Ir(t,e.id),...r,rows:e.rows,cols:e.cols};let o=j(t).find(s=>s.key===n);if(o)return Qo(o,{...e,...r});let i=Ke(t).find(s=>s.key===n);return i?Qo(i,{...e,...r,rows:1}):null}var km=400;function fl(t,e){let n=t?Ue(t,e).length:0;return{modules:n,kwp:n*(e.wp??km)/1e3}}function xm(t){let{host:e,roof:n}=t,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=j(e.doc),l=new Map(o.map(u=>[u.id,ke(e.doc,u,s)])),a=(u,d)=>{let p=l.get(u.id),h=fl(p,u),f=r("solar_summary",{n:h.modules,kwp:U(e.hass,h.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>n.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${d+1}`} · ${p?xt(e,p):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=u=>{let d=o.filter(g=>g.string===u.id),p=d.map(g=>fl(l.get(g.id),g)),h=p.reduce((g,y)=>g+y.modules,0),f=p.reduce((g,y)=>g+y.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:d.length,n:h,kwp:U(e.hass,f,1)})}</p>`};return m`<section>
    ${Gn(t)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${M(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(a)}</div>`:_}
    ${Y(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>n.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!t.floorId} @click=${()=>n.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:_}
  </section>`}function Xw(t,e){let{host:n,roof:r}=t,o=n.t,i=H(n.hass,p=>Pn(n.hass,p)),s=n.doc.settings.roof.strings??[],l=s.find(p=>p.id===e.string),a=[["",o("solar_string_none")],...s.map(p=>[p.id,p.name]),["new",`+ ${o("solar_string_new")}`]],c=O(n,o("solar_string"),e.string??"",a,p=>r.setString(p===""?null:p),{wide:!0});if(!l)return m`${c}${P(n,o("solar_entity"),e.entity??null,void 0,i,p=>r.patchField({entity:p==="none"?null:p}))}`;let u=n.hass?Be(n.hass,n.doc.floors):null,d=n.doc.floors.flatMap(p=>p.furniture.filter(h=>h.type==="inverter").map(h=>({item:h,floor:p}))).map(({item:p,floor:h},f)=>{let g=u?.get(p.id)?.entity,y=p.name?.trim()||(g?W(n.hass,g):"");return[p.id,`${y||`${o("furn_inverter")} ${f+1}`} \xB7 ${h.name}`]});return m`${c}
    ${Z(n,o("solar_string_name"),l.name,p=>r.patchString({name:p||l.name}),{wide:!0})}
    ${P(n,o("solar_string_entity"),l.entity??null,void 0,i,p=>r.patchString({entity:p==="none"?null:p}))}
    ${O(n,o("solar_string_inverter"),l.inverter??"",[["",o(d.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...d],p=>r.patchString({inverter:p||null}),{wide:!0})}`}function $m(t,e){let{host:n,roof:r}=t,o=n.t,i=k=>r.patchField(k),s=j(n.doc),l=ke(n.doc,e,s),a=e.face===Ie,c=Ar(e),u=fl(l,e),d=c.reduce((k,$)=>k+$,0)-(e.skip?.length??0),p=(n.doc.settings.roof.solar??[]).findIndex(k=>k.id===e.id)+1,h=[...l?[]:[["",o("solar_face_gone")]],...s.map(k=>[k.key,xt(n,k)]),[Ie,o("solar_ground")],...Ke(n.doc).map(k=>[k.key,xt(n,k)])],f=k=>{let $=vm(n.doc,e,k);$&&i($)},g=(k,$,A=ie)=>F=>Math.max(k,Math.min($,A(F))),y=k=>i(Dr(n.doc,e,k)),b=k=>i({rotation:(Math.round(k)%360+360)%360||null}),v=l?.wall?"solar_flip_wall":"solar_flip",w=(k,$,A)=>E(n,o($),e[k]??A,F=>i({[k]:g(.3,3)(F)}),.01,.3),x=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${Gn(t)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${p}`}</h3>
        ${Un(n,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${Z(n,o("solar_name"),e.name??"",k=>i({name:k||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${O(n,o("solar_face"),l?e.face:"",h,f,{wide:!0})}
        ${E(n,o("solar_rows"),c.length,k=>i(ym(e,k)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!n.admin}
            .value=${wm(e)}
            @change=${k=>{let $=bm(k.target.value);$&&i($)}}
          />
        </label>
      </div>
      ${M(`${l&&!l.unbounded?`${o("solar_face_size",{w:U(n.hass,l.lu,1),h:U(n.hass,l.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${x?jn(n,["left","center","right"].map(k=>[k,o(`solar_align_${k}`)]),e.align??"left",k=>i({align:k})):_}
      ${jn(n,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,k=>i({portrait:k}))}
      ${jn(n,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",k=>i({look:k}))}
      <div class="nf-form">
        ${w("module_w","solar_module_w",1.13)} ${w("module_h","solar_module_h",1.72)}
        ${E(n,o("solar_wp"),e.wp??km,k=>i({wp:g(50,1500,Math.round)(k)}),5,50)}
      </div>
      ${Y(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!n.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!n.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:_)}
      ${r.picking?M(o("solar_pick_hint")):_}
      <div class="nf-form">
        ${a?m`${E(n,o("solar_base"),e.base??0,k=>i({base:k>.001?Math.min(60,ie(k)):null}),.05,0)}
            ${E(n,o("solar_rotation"),e.rotation??0,y,5)}
            ${Y(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>y((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${E(n,o("solar_u"),e.u,k=>i({u:ie(k)}),.05)} ${E(n,o(l?.wall?"solar_v_wall":"solar_v"),e.v,k=>i({v:ie(k)}),.05)}`}
        ${l?.flat&&!a?E(n,o("solar_rotation"),e.rotation??0,b,5):_}
        ${l?.wall?E(n,o("solar_tilt_wall"),e.tilt??0,k=>i({tilt:g(0,90,Math.round)(k)}),5,0):_}
        ${l?.flat?E(n,o("solar_tilt"),e.tilt??15,k=>i({tilt:g(0,45,Math.round)(k)}),1,0):_}
        ${l?.flat&&!l.unbounded?L(n,o("solar_rack_ew"),e.rack==="ew",k=>i({rack:k?"ew":null}),{title:o("solar_rack_ew_hint")}):_}
        ${l&&!l.flat&&!l.wall?E(n,o("solar_rack_tilt"),e.tilt??0,k=>i({tilt:g(0,45,Math.round)(k)||null}),1,0):_}
        ${l?.wall||l?.flat?L(n,o(v),!!e.flip,k=>i({flip:k})):_}
      </div>
      ${l?.flat&&!a?Y(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)-90)}>↺ 90°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)+90)}>↻ 90°</button>`):_}
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:U(n.hass,u.kwp,1)})}${u.modules<d?m` · <b>${o("solar_partial",{n:u.modules,total:d})}</b>`:_}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${Xw(t,e)}</div>
      ${M(o("solar_string_hint"))} ${M(o("solar_form_hint"))}
      ${n.admin?Y(m`<button class="nf-btn" ?disabled=${!l} @click=${()=>l&&i({...An(l,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):_}
    </section>`}var Sm=t=>Math.round(t*1e3)/1e3,Oi=class{ctx;sectionSel=null;windowSel=null;chimneySel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get chimneyId(){return this.chimneySel}set chimneyId(e){this.chimneySel=e,e&&(this.windowSel=null),this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get chimney(){return this.chimneySel?this.settings.chimneys?.find(e=>e.id===this.chimneySel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let n=(this.settings.sections??[]).length>0;e&&n&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!n)&&(r.settings.roof.sections=Ns(r,()=>D("roof")))}),this.sectionId=null)}addSection(e,n){if(!this.admin)return;let r=cp(this.doc,e,n);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:n,wall_interior:r}=this.doc.settings,o=zs(e.rooms,e.walls??[],n,r);if(!o)return;let i=o.map(([s,l])=>[Sm(s),Sm(l)]);this.patchSection({shape:"flat",points:i,...Pt(i)})}addDormer(e){let n=this.section;if(!n||!this.admin)return;let r=Ps(n,e,D("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeCorner(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&pp(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.sections=(n.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let n=up(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],n]),this.sectionId=n.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,n=Hr(j(this.doc).filter(o=>!o.flat),e)??j(this.doc)[0];if(!n)return;let r=Or(n,D("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let n=this.windowSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=j(r).find(s=>s.key===o.face);i&&Object.assign(o,ct(i,en(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.windows=(n.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addChimney(){if(!this.admin)return;let e=j(this.doc),n=e.find(o=>!o.flat)??e[0];if(!n)return;let r=Lr(n,D("chim"));this.ctx.host.change(o=>o.settings.roof.chimneys=[...o.settings.roof.chimneys??[],r]),this.chimneySel=r.id,this.windowSel=null,this.sectionId=null}patchChimney(e){let n=this.chimneySel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.chimneys?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=j(r).find(s=>s.key===o.face);i&&Object.assign(o,ct(i,yt(o,i)))})}removeChimney(){let e=this.chimneySel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.chimneys=(n.settings.roof.chimneys??[]).filter(r=>r.id!==e)),this.chimneyId=null)}addField(){if(!this.admin)return;let e=j(this.doc),n=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=Hr(e.filter(i=>!n.has(i.key)),r)??Hr(e,r);o&&(this.appendField(An(o,D("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,n=this.admin&&e?Us(this.doc,D("pv"),e):null;n&&this.appendField(n)}addGroundField(){this.admin&&this.appendField(Ir(this.doc,D("pv")))}appendField(e){this.ctx.host.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let n=this.settings.solar?.find(r=>r.id===e);n?.face.startsWith("wall:")&&this.ctx.setFloorId(n.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((n,r)=>{Object.assign(n,e);let o=ke(r,n);o&&Object.assign(n,ct(o,n))})}toggleCell(e){this.editField(n=>n.skip=_m(n.skip,e))}editField(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===n);o&&e(o,r)})}setString(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>gm(r.settings.roof,n,e,{id:D("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let n=this.field?.string;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(n=>{n.settings.roof.solar=(n.settings.roof.solar??[]).filter(r=>r.id!==e),pl(n.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,n)=>n.elevation-e.elevation)}};var Mm=(t,e)=>t.floors.flatMap(n=>n.furniture).find(n=>n.type===e),Qw=t=>!t||t==="none";async function Rm(t){let e;try{e=await t.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let n=Jd(t.hass,e),r=0,o=(i,s,l)=>{if(!l)return;let a=Mm(t.doc(),i);!a&&t.canAdd()&&(t.addDevice(i),a=Mm(t.doc(),i)),!(!a||!Qw(a[s]))&&(t.setField(a.id,s,l),r++)};return o("meter","power",n.grid),o("inverter","power",n.solar),o("home_battery","power",n.battery),o("home_battery","soc",n.battery_soc),{kind:"done",filled:r}}var Jw=/garage|carport/,ev=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,tv=/flur|diele|eingang|hall|entr|lobby/,Em=.25,Zn=t=>Math.round(t*1e3)/1e3;function nv(t,e,n){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(d=>u.test(n.roomLabel(d).toLowerCase())),i=r.find(u=>e.furniture.some(d=>d.type==="parking"&&N([d.x,d.z],u.points))),s=o(Jw)??i,l=o(ev),a=t==="wallbox"?s:t==="meter"?l??o(tv)??s:l??s,c=[...r].sort((u,d)=>Math.abs(ge(d.points))-Math.abs(ge(u.points)))[0];return a??n.selected??c}function rv(t,e){let[n,r]=_e(t.points),o=t.points.some((s,l)=>!e.has(l)),i=null;return t.points.forEach((s,l)=>{if(o&&e.has(l))return;let a=t.points[(l+1)%t.points.length],c=Math.hypot(a[0]-s[0],a[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+a[0])/2,(s[1]+a[1])/2],d=[-(a[1]-s[1])/c+0,(a[0]-s[0])/c+0];(n-u[0])*d[0]+(r-u[1])*d[1]<0&&(d=[0-d[0],0-d[1]]),i={mid:u,inward:d,length:c}}),i}function Am(t,e,n,r){let[o,i,s]=st(t),l={id:D("furniture"),type:t,rotation:0,w:o,d:i,h:s,variant:null};if(t==="grid_point"){let h=nh(e),[f,g]=h?[h.x,h.z]:r.fallback;return{...l,x:Zn(f),z:Zn(g)}}let a=nv(t,n,r),[c,u]=a?_e(a.points):r.fallback;if(a){let h=new Set(n.openings.filter(g=>g.room_id===a.id).map(g=>g.edge)),f=rv(a,h);f&&([c,u]=[f.mid[0]+f.inward[0]*(i/2+Em),f.mid[1]+f.inward[1]*(i/2+Em)])}let d={...l,x:Zn(c),z:Zn(u)},p=a?_r({...n,furniture:[...n.furniture,d]},d,e.settings.wall_interior):null;return p?{...d,x:Zn(p.x),z:Zn(p.z),rotation:p.rotation}:d}var Li=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let n=this.undoStack.pop();return n===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(n))}redo(e){let n=this.redoStack.pop();return n===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(n))}};var ml=t=>Math.round(t*1e3)/1e3,qn="unmovable",Hi="no change";function Fm(t,e,n,r){let o=i=>[ml(i[0]+n),ml(i[1]+r)];switch(e.kind){case"device":return t.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(l=>l.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:qn;case"furniture":return{apply(i){let s=i.furniture.find(l=>l.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(l=>l.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(l=>l.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=t.openings.find(g=>g.id===e.id),s=i?Pe(i,t.rooms,t.walls??[]):null;if(!i||!s)return qn;let l=s.room.points[s.edge],a=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(a[0]-l[0],a[1]-l[1])||1,u=(n*(a[0]-l[0])+r*(a[1]-l[1]))/c;if(Math.abs(u)<1e-9)return Hi;let d=It(t.openings,i),p=!i.wall&&d.length>1?zn(s.room,d):null;if(p){let g=Math.max(0,Math.min(Cr(s.room)-p.width,p.from+u));return Math.abs(g-p.from)<1e-9?Hi:{apply(y){let b=y.openings.find(w=>w.id===e.id),v=b?Nr(y.openings,s.room,b,g,p.width):null;v&&(y.openings=v)}}}let h=Math.min(i.width,c)/2,f=ml(Math.min(c-h,Math.max(h,i.offset+u)));return{apply(g){let y=g.openings.find(b=>b.id===e.id);y&&(y.offset=f)}}}case"room":{let i=t.rooms.find(l=>l.id===e.id);if(!i)return qn;let s=new Set(t.placements.filter(l=>N([l.x,l.z],i.points)).map(l=>l.entity_id));return{apply(l){let a=l.rooms.find(c=>c.id===e.id);if(a){if(e.corner!==null&&e.corner<a.points.length){a.points[e.corner]=o(a.points[e.corner]);return}a.points=a.points.map(o);for(let c of l.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var Ci=t=>Math.round(t*1e3)/1e3,gl=t=>(t+90)%360;function Tm(t,e,n){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of t.rooms)o.points=o.points.map(e);for(let o of t.furniture)r(o),n&&(o.rotation=gl(o.rotation));for(let o of t.placements)r(o),n&&(o.rotation=gl(o.rotation??0));for(let o of t.outdoor)o.points=o.points.map(e);for(let o of t.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];t.background&&(r(t.background),n&&(t.background.rotation=gl(t.background.rotation??0)))}function ov(t,e){for(let r of t.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(l=>l[0]),o.map(l=>l[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let n=t.energy.meter;n&&([n.x,n.z]=e([n.x,n.z]))}function zm(t,e,n,r){if(e.allFloors){for(let o of t.floors)Tm(o,n,r);ov(t,n)}else{let o=t.floors.find(i=>i.id===e.floorId);o&&Tm(o,n,r)}}function Pm(t,e,n,r){zm(t,e,([o,i])=>[Ci(o+n),Ci(i+r)],!1)}function iv(t,e){let r=(e.allFloors?t.floors:t.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(l=>l.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Im(t,e){let n=iv(t,e);if(!n)return!1;let[r,o]=n;return zm(t,e,([i,s])=>[Ci(r-(s-o)),Ci(o+(i-r))],!0),!0}var Ni=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,n){this.ids[e]=n,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,n,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=n,e==="room"?i.room=n:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&n&&(i.room=r.roomOfDevice(n)??i.room),e==="opening"&&n&&(i.room=r.roomOfOpening(n)??i.room),(e!=="room"||n!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let n=this.ids[e];if(n)return{kind:e,id:n}}return null}};var Bi=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;copyChoice=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get floorCopy(){return this.copyChoice}set floorCopy(e){this.copyChoice=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let n=new Set(this.unfolded);n.delete(e)||n.add(e),this.unfolded=n,this.onChange()}};var sv=/garage|carport|keller|cellar|basement|technik|heizung|heizraum|boiler|utility|werkstatt|schuppen|shed|dachboden|attic/i,co=t=>t.living??!sv.test(t.name),av=.1,Dm=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function _l(t,e,n,r,o=av){if(n.points.length<3)return{roomId:n.id,floor:0,living:0,low:0};let i=Dm(n.points),s=r.filter(f=>{let g=Dm(f.footprint);return g.x1>=i.x0&&g.x0<=i.x1&&g.z1>=i.z0&&g.z0<=i.z1}),l=e.elevation+(n.ceiling!=null&&n.ceiling>0?n.ceiling:e.height),a=(t.settings.roof?.sections??[]).some(f=>!f.open),c=ds(n),u=0,d=0,p=0;for(let f=i.x0+o/2;f<i.x1;f+=o)for(let g=i.z0+o/2;g<i.z1;g+=o){if(!N([f,g],n.points)||s.some(v=>N([f,g],v.footprint)))continue;let y=a?Sr(t,f,g):null,b=Math.min(l,y??1/0)-e.elevation-c;b>=2?u++:b>=1?d++:p++}let h=o*o;return{roomId:n.id,floor:(u+d+p)*h,living:co(n)?(u+d/2)*h:0,low:(d+p)*h}}var Om=new WeakMap;function uo(t,e){if(e.layer)return[];let n=Om.get(e);if(n&&n.roof===t.settings.roof)return n.areas;let r=lv(t,e);return Om.set(e,{roof:t.settings.roof,areas:r}),r}function lv(t,e){let n=fe(e.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},e.walls??[]).walls;return e.rooms.map(r=>_l(t,e,r,n))}var Yn=t=>t.reduce((e,n)=>({floor:e.floor+n.floor,living:e.living+n.living,low:e.low+n.low}),{floor:0,living:0,low:0});function Lm(t,e,n){let r=t.floors.length,o=e?.name??(r===0?n.first:n.next(r));return{...He(D("floor"),o,Cc(t.floors,e?.level)),ha_floor:e?.floor_id??null}}function bl(t,e){let n=t.findIndex(o=>o.elevation>e.elevation),r=n<0?t.length:n;return[...t.slice(0,r),e,...t.slice(r)]}function Hm(t,e,n){let r=t.findIndex(s=>s.id===e),o=r+n;if(r<0||o<0||o>=t.length)return[...t];let i=[...t];return[i[r],i[o]]=[i[o],i[r]],i}function Cm(t,e){let n=new Set(t.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!n.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function Xn(t,e,n){if(!e.ha_floor)return[];let r=new Set(t.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(n??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function Nm(t,e,n){return Object.values(n??{}).filter(r=>r.floor_id===e.ha_floor||!t.floors.some(o=>o.ha_floor===r.floor_id))}function Bm(t,e,n,r,o=D){let i=structuredClone(e),s=t.floors.reduce((u,d)=>Math.max(u,d.elevation+d.height),e.elevation+e.height),l=new Map,a=new Map;i.id=o("floor"),i.name=n,i.elevation=Math.round(s*1e3)/1e3,i.ha_floor=null,i.start_view=null,i.rooms=i.rooms.map(u=>{let d=o("room");return l.set(u.id,d),{...u,id:d,area_id:null}}),i.walls=(i.walls??[]).map(u=>{let d=o("wall");return a.set(u.id,d),{...u,id:d}}),i.openings=i.openings.filter(u=>l.has(u.room_id)).map(u=>({...u,id:o("opening"),room_id:l.get(u.room_id),wall:u.wall?a.get(u.wall)??null:u.wall}));let c=new Set(["meter","inverter","home_battery","wallbox","grid_point"]);return i.furniture=r.furniture?i.furniture.filter(u=>!c.has(u.type)).map(u=>hv({...u,id:o("furniture")})):[],i.placements=r.devices?i.placements:[],i.outdoor=r.outdoor?i.outdoor.map(u=>({...u,id:o("outdoor")})):[],i}var cv=["entity","power","fan_entity","room_sensor"],uv=["door_left","door_right","soc","charge","export","status","temp_entity","temp_entity2","state_entity","state_entity2","color_entity","care_entity","cover_entity","type_entity","parent_meter","car","tap"],dv=["gang_entities","pictures","types","meter_floors","show_when","extra_lights"];function hv(t){let e={...t};for(let n of cv)(n==="entity"||n==="power"||e[n]!=null)&&(e[n]="none");for(let n of uv)e[n]!=null&&(e[n]=null);for(let n of dv)delete e[n];return e}function Wm(t,e,n,r){let o=t.floors.find(a=>a.id===e),i=t.floors.find(a=>a.id===r);if(!o||!i||o===i)return!1;let s=o.furniture.findIndex(a=>a.id===n);if(s<0)return!1;let[l]=o.furniture.splice(s,1);return i.furniture.push(l),!0}function pv(t,e,n){if(e.layer||!e.rooms.length)return _;let r=t.t,o=Yn(uo(t.doc,e)).living,i=Yn(t.doc.floors.flatMap(s=>uo(t.doc,s))).living;return m`<p class="nf-sub nf-wide" title=${r("living_area_hint")}>
      ${r(t.doc.floors.length>1?"living_area_floor_house":"living_area_floor",{floor:Ee(t.hass,o),house:Ee(t.hass,i)})}
    </p>
    <div class="nf-actions nf-wide"><button class="nf-btn" title=${r("print_plan_hint")} @click=${()=>n.print()}>🖨️ ${r("print_plan")}</button></div>`}function fv(t,e,n,r){let o=Cm(t.doc,t.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:n.addFloor(null);return m`<div class="nf-floor-list">
      ${[...t.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>n.openFloor(s.id)}>${s.name}</button>`)}
      ${t.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${t.t("add_floor")}</button>`:_}
    </div>
    ${t.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${M(t.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>n.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${t.t("level",{n:s.level})}</span>`:_}</button>`)}
          <button class="nf-btn" @click=${()=>n.addFloor(null)}>${t.t("floor_empty")}</button>
        </div>`:_}`}function mv(t,e,n,r){let o=(i,s,l)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${a=>l(Number(a.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${t.t("floor_shift_hint")}>
    <span>${t.t("floor_shift")}</span>
    ${o("X",e.shiftX,i=>e.shiftX=i)} ${o("Z",e.shiftZ,i=>e.shiftZ=i)}
    <button class="nf-btn" ?disabled=${!e.shiftX&&!e.shiftZ} @click=${()=>n.shift()}>${t.t("floor_shift_apply")}</button>
    <button class="nf-btn" title=${t.t("floor_turn_hint")} @click=${()=>n.turn()}>${t.t("floor_turn")}</button>
    <button class="nf-btn" title=${t.t("floor_start_view_hint")} @click=${()=>n.rememberView()}>${t.t("floor_start_view")}</button>
    ${r.start_view?m`<button class="nf-btn" title=${t.t("floor_start_view_reset")} @click=${()=>t.change((i,s)=>s.start_view=null)}>↺</button>`:_}
    <label class="nf-check nf-wide" title=${t.t("floor_shift_all_hint")}
      ><input type="checkbox" .checked=${e.shiftAll} @change=${i=>e.shiftAll=i.target.checked} />
      ${t.t("floor_shift_all")}</label
    >
  </div>`}function gv(t,e,n,r){let o=t.t,i=s=>e.floorCopy={...r,...s};return m`<div class="nf-form nf-wide nf-copy-floor">
    ${M(o("floor_copy_hint"),"nf-wide")}
    ${L(t,o("floor_copy_furniture"),r.furniture,s=>i({furniture:s}))}
    ${L(t,o("floor_copy_devices"),r.devices,s=>i({devices:s}),{title:o("floor_copy_devices_hint")})}
    ${L(t,o("floor_copy_outdoor"),r.outdoor,s=>i({outdoor:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${()=>n.duplicateFloor(r)}>${o("floor_copy_make")}</button>
      <button class="nf-btn" @click=${()=>e.floorCopy=null}>${o("cancel")}</button>
    </div>
  </div>`}function _v(t,e,n,r){let o=t.t,i=c=>t.change((u,d)=>Object.assign(d,c)),s=Nm(t.doc,r,t.hass?.floors),l=Xn(t.doc,r,t.hass?.areas),a=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${Z(t,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${E(t,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${t.admin?mv(t,e,n,r):_}
    ${E(t,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(t.hass?.floors??{}).length>0?O(t,o("ha_floor"),r.ha_floor??"",a,c=>i({ha_floor:c||null}),{wide:!0}):_}
    ${L(t,o("floor_layer"),!!r.layer,c=>i({layer:c||void 0}),{title:o("floor_layer_hint")})}
    ${P(t,o("floor_power"),r.power_entity??null,void 0,H(t.hass,c=>c.startsWith("sensor.")&&t.hass?.states[c]?.attributes.device_class==="power"),c=>i({power_entity:c&&c!=="none"?c:null}))}
    ${r.power_entity?M(o("floor_power_hint"),"nf-wide"):_}
    ${r.layer?_:De(t,o("wall_paint_floor"),r.wall_paint_outside,t.doc.settings.wall_paint_outside??To,c=>i({wall_paint_outside:c}))}
    ${pv(t,r,n)}
    ${t.admin&&l.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>n.addAreaRooms(r)}>${o("area_rooms",{n:l.length})}</button></div>`:_}
    ${t.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>n.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>n.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn" @click=${()=>e.floorCopy=e.floorCopy?null:{furniture:!0,devices:!1,outdoor:!1}}>${o("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${()=>n.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          ${e.floorCopy?gv(t,e,n,e.floorCopy):_}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>n.closeGaps()}>${o("gaps_close")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:_}`:_}
  </div>`}function Vm(t,e,n,r,o){return m`<section>
    <h3>${t.t("floors")}</h3>
    ${fv(t,e,n,o)} ${r?_v(t,e,n,r):_}
  </section>`}var Km=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Gm(t,e){let n=ue(t.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((n.z1-n.z0)/1.2)),cols:Math.max(1,Math.round((n.x1-n.x0)/1.2)),entity:e[0]??null}}function Wi(t,e){let[n,r,o]=Je[e.type];return Kc(t,e.rows,e.cols).map(([i,s])=>({id:D("furniture"),type:e.type,x:i,z:s,rotation:0,w:n,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var yl=t=>Math.max(1,Math.min(12,Math.round(t)));var bv=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=bv;var Um=/^(media_player|assist_satellite)\./;function yv(t,e){return e?Object.values(t.entities??{}).filter(n=>!n.hidden&&(n.area_id??(n.device_id?t.devices?.[n.device_id]?.area_id:null))===e).map(n=>n.entity_id):[]}function jm(t,e){let n=t.states[e];return!n||n.state==="unavailable"?!1:e.startsWith("notify.")?t.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):n.state==="off"||n.state==="unknown"?!1:n.attributes.device_class!=="tv"}function Zm(t,e,n){if(n.announce_speaker==="none")return null;if(n.announce_speaker)return n.announce_speaker;if(e&&n.points.length>=3){let i=[...e.placements.filter(s=>Um.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&Um.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>N([s.x,s.z],n.points)&&jm(t,s.id));if(i)return i.id}let r=yv(t,n.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=r.filter(s=>s.startsWith(o)&&jm(t,s)).sort()[0];if(i)return i}return null}function qm(t,e,n){return e.rooms.length===0?_:m`<section>
    <h3>${t.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>n.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${Ee(t.hass,we(r.points))}</span>
        </button>`)}
    </div>
  </section>`}function wv(t,e,n,r){let o=e.spots,i=c=>e.spots={...o,...c},s=Wi(n,o).length,l=H(t.hass,c=>/^(light|switch|input_boolean)\./.test(c)),a=Km.map(c=>[c,t.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${O(t,t.t("spots_type"),o.type,a,c=>i({type:c}),{wide:!0})}
    ${E(t,t.t("spots_cols"),o.cols,c=>i({cols:yl(c)}),1,1)}
    ${E(t,t.t("spots_rows"),o.rows,c=>i({rows:yl(c)}),1,1)}
    ${P(t,t.t("furn_entity_light"),o.entity,void 0,l,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${t.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${t.t("cancel")}</button>
    </div>
    ${M(t.t("spots_hint"),"nf-wide")}
  </div>`}function vv(t,e,n,r){return m`<details class="nf-points" ?open=${!n}>
    <summary>${t.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${E(t,t.t("x"),o[0],s=>r.setCorner(i,0,s))} ${E(t,t.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${t.admin?m`<button class="nf-btn" title=${t.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:_}
      </div>`)}
  </details>`}function kv(t,e,n){let r=t.floor,o=r?_l(t.doc,r,e,n):void 0;if(!o||o.floor<=0)return _;let i=t.t;return co(e)?m`<p class="nf-sub nf-wide" title=${i("living_area_hint")}>
    ${o.low>.05?i("living_area_low",{living:Ee(t.hass,o.living),floor:Ee(t.hass,o.floor),low:Ee(t.hass,o.low)}):i("living_area",{living:Ee(t.hass,o.living)})}
  </p>`:m`<p class="nf-sub nf-wide">${i("living_area_none",{floor:Ee(t.hass,o.floor)})}</p>`}function xv(t,e,n,r){let o=t.t,i=s=>r.patch({ceiling:Math.abs(s-n.height)<.005?null:Math.min(20,Math.max(1,Math.round(s*1e3)/1e3))});return m`${E(t,o("room_ceiling"),e.ceiling??n.height,i,.01,1)}
    ${e.ceiling!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({ceiling:null})}>${o("height_auto")}</button>`:_}
    ${M(o("room_ceiling_tip"),"nf-wide")}
    ${e.ceiling!=null&&e.ceiling>n.height+.005?m`<p class="nf-sub nf-wide">${o("room_ceiling_through",{ceiling:U(t.hass,e.ceiling,2),floor:U(t.hass,n.height,2)})}</p>`:_}`}function $v(t,e,n,r){let o=t.t;if(!t.hass)return m``;let i=Zm(t.hass,n,{...e,announce_speaker:null}),s=H(t.hass,c=>/^(media_player|assist_satellite)\./.test(c)||c.startsWith("notify.")&&c.endsWith("_announce")),l=e.announce_quiet??null,a=(c,u)=>{if(!u)return r.patch({announce_quiet:null});r.patch({announce_quiet:{from:l?.from??"20:00",to:l?.to??"07:00",[c]:u}})};return m`${P(t,o("room_announce_speaker"),e.announce_speaker??null,i,s,c=>r.patch({announce_speaker:c}))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${o("room_announce_quiet")}
      <span>
        <input type="time" .value=${l?.from??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 1`} @change=${c=>a("from",c.target.value)} />
        –
        <input type="time" .value=${l?.to??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 2`} @change=${c=>a("to",c.target.value)} />
        ${l?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({announce_quiet:null})}>×</button>`:_}
      </span>
    </div>
    ${M(o("room_announce_hint"),"nf-wide")}`}function wl(t,e,n,r){let o=t.t,i=wn(n.points),s=ue(n.points),l=Object.values(t.hass?.areas??{}).sort((h,f)=>h.name.localeCompare(f.name)),a=[["",o("no_area")],...l.map(h=>[h.area_id,h.name])],c=t.floor?fe(t.floor.rooms,{exterior:t.doc.settings.wall_exterior,interior:t.doc.settings.wall_interior},t.floor.walls??[]).walls:[],u=t.floor?Fu(n,c):null,d=Oc.map(h=>[h,o(`mat_${h}`)]),p=h=>m`<button class="nf-btn" @click=${()=>r.applyPackage(h)}><b>${o(`pkg_${h}`)}</b><span>${o(`pkg_${h}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${Z(t,o("room_name"),n.name,h=>r.patch({name:h}),{wide:!0})}
      ${O(t,o("area"),n.area_id??"",a,h=>r.setArea(h),{wide:!0})}
      ${(n.sub_areas??[]).map(h=>m`<span class="nf-chip nf-wide">${t.hass?.areas?.[h]?.name??h} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>r.patch({sub_areas:(n.sub_areas??[]).filter(f=>f!==h).length?(n.sub_areas??[]).filter(f=>f!==h):null})}>✕</button></span>`)}
      ${n.area_id?O(t,o("sub_area_add"),"",a.filter(([h])=>h!==n.area_id&&!(n.sub_areas??[]).includes(h)),h=>h&&r.patch({sub_areas:[...n.sub_areas??[],h]}),{wide:!0,title:o("sub_area_hint")}):_}
      ${O(t,o("material"),n.floor_material,d,h=>r.patch({floor_material:h}),{wide:!0})}
      ${De(t,o("wall_paint_room"),n.wall_paint,t.doc.settings.wall_paint_inside??zo,h=>r.patch({wall_paint:h}))}
      ${t.floor?xv(t,n,t.floor,r):_}
      ${E(t,o("room_floor_offset"),n.floor_offset??0,h=>r.patch({floor_offset:Math.abs(h)<.005?null:Math.max(-2,Math.min(2,Math.round(h*1e3)/1e3))}),.01)}
      ${M(o("room_floor_offset_hint"),"nf-wide")}
      ${P(t,o("room_clean"),n.clean_entity??null,void 0,H(t.hass,h=>/^(script|button|input_button)\./.test(h)),h=>r.patch({clean_entity:h&&h!=="none"?h:null}))}
      ${n.clean_entity?_:M(o("room_clean_hint"),"nf-wide")}
      ${P(t,o("floor_heating"),n.floor_heating??null,void 0,H(t.hass,h=>/^(climate|switch|valve|binary_sensor|input_boolean)\./.test(h)),h=>r.patch({floor_heating:h&&h!=="none"?h:null}))}
      ${n.floor_heating?M(o("floor_heating_hint"),"nf-wide"):_}
      ${$v(t,n,t.floor??null,r)}
      ${u?m`<p class="nf-sub nf-wide" title=${o("room_inner_hint")}>${o("room_inner",{w:pe(t.hass,u[0]),d:pe(t.hass,u[1])})}</p>`:_}
      ${kv(t,n,c)}
      ${L(t,o("room_living"),co(n),h=>r.patch({living:h===co({name:n.name,living:null})?null:h}),{title:o("living_area_hint")})}
      ${i?m`${E(t,o("x"),s.x0,h=>r.setRect("x",h))} ${E(t,o("z"),s.z0,h=>r.setRect("z",h))}
          ${E(t,o("width"),s.x1-s.x0,h=>r.setRect("w",h),.01,.05)}
          ${E(t,o("depth"),s.z1-s.z0,h=>r.setRect("d",h),.01,.05)}`:_}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!t.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${n.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!t.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:_}
    </div>
    ${r.wallHeights} ${r.climate} ${vv(t,n,i,r)}
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:_}
    ${e.spots?wv(t,e,n,r):_}
    ${e.packages?m`<div class="nf-packages">${Gu.map(p)}${M(o("pkg_hint"))}</div>`:_}
  </section>`}var Ym=le`
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
`;var Xm=["cabinet","shelf","lamp","device"],pn="own_studio";var Sv={cabinet:{w:120,d:45,h:80,doors:2,drawers:1,shelves:2,base:"plinth",handle:"bar",back:!0,lamp:"floor",display:!1,mount:"floor",body:"white",front:"wood"},shelf:{w:80,d:35,h:180,doors:0,drawers:0,shelves:4,base:"none",handle:"none",back:!0,lamp:"floor",display:!1,mount:"floor",body:"wood",front:"wood"},lamp:{w:40,d:40,h:160,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!1,mount:"floor",body:"metal",front:"white"},device:{w:60,d:60,h:85,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!0,mount:"floor",body:"white",front:"dark"}},vl=(t,e)=>({kind:t,name:e,...Sv[t]}),Qm=(t,e)=>({...vl(e,t.name),body:t.body,front:t.front}),Qn=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:e)),Jn=t=>Math.round(t*1e4)/1e4;function kl(t){return{...t,name:t.name.trim().slice(0,60),w:Qn(Math.round(t.w),5,400),d:Qn(Math.round(t.d),2,200),h:Qn(Math.round(t.h),2,300),doors:Qn(Math.round(t.doors),0,6),drawers:Qn(Math.round(t.drawers),0,6),shelves:Qn(Math.round(t.shelves),0,12)}}function ae(t,e,n,r,o,i,s,l,a={}){let[c,u,d]=t,p=(x,k,$)=>{let A=Math.max(-$,x-k/2),F=Math.min($,x+k/2);return F-A<1e-4?[Math.max(-$,Math.min($,x)),.001*$*2]:[(A+F)/2,F-A]},[h,f]=p(e,r,c/2),[g,y]=p(n,o,u/2),b=Math.max(0,Math.min(d*.999,i)),v=Math.max(d*.001,Math.min(d-b,s)),w=x=>Jn(Math.max(.001,Math.min(1,x)));return{shape:"box",x:Jn(h/c),z:Jn(g/u),w:w(f/c),d:w(y/u),y:Jn(b/d),h:w(v/d),color:l,...a}}function Jm(t,e,n){let[r,o,i]=t;if(e==="legs"){let s=Math.min(.1,i*.25),l=Math.min(.04,r/6,o/6);for(let[a,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.push(ae(t,a*(r/2-l),c*(o/2-l),l,l,0,s,"metal"));return s}if(e==="plinth"){let s=Math.min(.08,i*.2);return n.push(ae(t,0,-.02,r-.02,o-.04,0,s,"dark")),s}return 0}function Mv(t,e){let[n,r,o]=e,i=[],s=Jm(e,t.base,i),l=t.doors+t.drawers>0,a=t.handle==="none"||!l?0:Math.min(.025,r*.08),c=l?Math.min(.02,r*.1):0,u=r-c-a,d=-r/2+u/2,p=o-s;if(!l){let v=Math.min(.018,n/10,p/10);i.push(ae(e,-n/2+v/2,0,v,r,s,p,t.body,{edges:!0})),i.push(ae(e,n/2-v/2,0,v,r,s,p,t.body,{edges:!0})),i.push(ae(e,0,-r/2+.005,n-2*v,.01,s,p,t.body));for(let w=0;w<=t.shelves+1;w++)i.push(ae(e,0,.005,n-2*v,r-.01,s+(p-v)*w/(t.shelves+1),v,t.front,{edges:"faint"}));return i}i.push(ae(e,0,d,n,u,s,p,t.body,{edges:!0}));let h=.004,f=-r/2+u+c/2,g=t.doors>0?Math.min(.18,Math.max(.08,(p-.3)/Math.max(1,t.drawers))):p/t.drawers,y=s+(t.drawers>0?g*t.drawers:0),b=(v,w,x)=>{if(t.handle==="none")return;let k=r/2-a/2;t.handle==="knob"?i.push(ae(e,v,k,.025,a,w-.0125,.025,"metal")):x?i.push(ae(e,v,k,.015,a,w-.08,.16,"metal")):i.push(ae(e,v,k,Math.min(.16,n*.4),a,w-.0075,.015,"metal"))};for(let v=0;v<t.drawers;v++){let w=s+g*v;i.push(ae(e,0,f,n-2*h,c,w+h,g-2*h,t.front,{edges:"faint"})),b(0,w+g*(t.drawers===1&&t.doors===0?.5:.7),!1)}if(t.doors>0){let v=n/t.doors,w=o-y;for(let x=0;x<t.doors;x++){let k=-n/2+v*(x+.5);i.push(ae(e,k,f,v-2*h,c,y+h,w-2*h,t.front,{edges:"faint"}));let $=t.doors===1||x%2===0?1:-1,A=y+w*(o>1.2?.45:.8);b(k+$*(v/2-.04),Math.min(A,o-.1),!0)}}return i}function Rv(t,e){let[n,r,o]=e,i=Math.min(.02,n/10,o/10),s=[ae(e,-n/2+i/2,0,i,r,0,o,t.body,{edges:!0}),ae(e,n/2-i/2,0,i,r,0,o,t.body,{edges:!0})];t.back&&s.push(ae(e,0,-r/2+.005,n-2*i,.01,0,o,t.body));let l=t.shelves+2;for(let a=0;a<l;a++)s.push(ae(e,0,t.back?.005:0,n-2*i,t.back?r-.01:r,(o-i)*a/(l-1),i,t.front,{edges:!0}));return s}function Ev(t,e){let[n,r,o]=e,i=Math.min(n,r),s=(a,c,u,d,p,h,f={})=>({...ae(e,a,c,u,u,d,p,h,f),shape:"cyl"}),l=(a,c,u)=>({...ae(e,0,0,i,i,a,c,t.front,{glow:!0,edges:"faint"}),shape:"loft",tw:Jn(Math.min(1,i*u/n)),td:Jn(Math.min(1,i*u/r))});switch(t.lamp){case"pendant":{let a=Math.min(.3,o*.4);return[s(0,0,Math.min(.12,i),o-.03,.03,t.body),s(0,0,Math.min(.01,i/4),a,o-a-.03,"dark"),l(0,a,.35)]}case"wall":{let a=Math.min(.02,r*.2);return[ae(e,0,-r/2+a/2,Math.min(.1,n),a,o*.3,o*.4,t.body),ae(e,0,0,Math.min(.02,n),r-a,o*.45,Math.min(.02,o*.1),t.body),l(o*.15,o*.7,.7)]}default:{let a=Math.min(t.lamp==="table"?.25:.35,o*.4);return[s(0,0,i*.6,0,Math.min(.03,o*.05),t.body,{edges:!0}),s(0,0,Math.min(.03,i/6),.02,o-a-.02,t.body),l(o-a,a,.7)]}}}function Av(t,e){let[n,r,o]=e,i=[],s=t.mount==="floor"?Jm(e,t.base,i):0,l=t.display?Math.min(.01,r*.1):0;if(i.push(ae(e,0,-l/2,n,r-l,s,o-s,t.body,{edges:!0})),t.display){let a=Math.min(.02,n*.08,(o-s)*.08);i.push(ae(e,0,r/2-l/2,n-2*a,l,s+a,o-s-2*a,t.front,{screen:!0}))}return i}function Vi(t,e,n){let r=kl(t),o=[r.w/100,r.d/100,r.h/100],i=r.name||e,s=n==="en"?{en:i}:{[n.slice(0,5)]:i,en:i},l={id:e,name:s,size:o,parts:[],recipe:r};switch(r.kind){case"cabinet":l.parts=Mv(r,o),l.surface=!0;break;case"shelf":l.parts=Rv(r,o);break;case"lamp":l.parts=Ev(r,o),l.light=r.lamp,l.mount=r.lamp==="pendant"?"ceiling":r.lamp==="wall"?"wall":r.lamp==="table"?"surface":"floor",r.lamp==="wall"&&(l.wall_y=1.6);break;case"device":l.parts=Av(r,o),l.electric=!0,l.mount=r.mount,r.mount==="wall"&&(l.wall_y=1.2);break}return l}function eg(t,e){let n=t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,32)||"piece",r=/^[a-z0-9]/.test(n)?n:`p${n}`;if(!e.includes(r))return r;for(let o=2;;o++)if(!e.includes(`${r}_${o}`))return`${r}_${o}`}var tg=["white","wood","body","metal","dark","glass","accent"],Fv={white:"#dfe6f2",wood:"#8a6a4a",body:"#3a4a6a",metal:"#9aa7bf",dark:"#1e2638",glass:"#7fd0e8",accent:"#37e0ff",fabric:"#4b5d8c",cushion:"#6a7fb3"},rg=t=>Fv[t]??t;function Tv(t){let e=Vi(t,"preview","en"),[n,,r]=e.size,o=180/Math.max(n,r),[i,s]=[n*o,r*o],l=[...e.parts].sort((a,c)=>a.z+a.d/2-(c.z+c.d/2));return m`<svg class="nf-studio-view" viewBox="-4 -4 ${i+8} ${s+8}" role="img" aria-hidden="true">
    ${l.map(a=>{let c=a.w*i,u=a.h*s,d=(a.x+.5)*i-c/2,p=s-(a.y+a.h)*s,h=a.shape==="cyl"?Math.min(c,u)/2:a.shape==="loft"?3:1;return R`<rect x=${d} y=${p} width=${Math.max(.6,c)} height=${Math.max(.6,u)} rx=${h} fill=${a.screen?"#0b1020":rg(a.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${a.glow?"nf-studio-glow":""} />`})}
  </svg>`}function ng(t,e,n,r){let o=t.t,i=!tg.includes(n),s=[...tg.map(l=>[l,o(l==="body"?"studio_color_plan":`studio_color_${l}`)]),["own",o("studio_color_own")]];return m`${O(t,e,i?"own":n,s,l=>r(l==="own"?rg(n):l))}
  ${i?De(t,o("studio_color_own"),n,"#8a6a4a",l=>r(l??"wood")):_}`}function og(t,e,n){let r=t.t,o=e.recipe,i=c=>n.change(kl({...o,...c})),s=(c,u,d)=>E(t,r(c),u,p=>i({[d]:p}),1,1),l=(c,u,d)=>E(t,r(c),u,p=>i({[d]:p}),1,0),a=()=>{switch(o.kind){case"cabinet":return m`${l("studio_doors",o.doors,"doors")} ${l("studio_drawers",o.drawers,"drawers")}
          ${o.doors+o.drawers===0?l("studio_shelves",o.shelves,"shelves"):_}
          ${O(t,r("studio_handle"),o.handle,[["bar",r("studio_handle_bar")],["knob",r("studio_handle_knob")],["none",r("studio_handle_none")]],c=>i({handle:c}))}
          ${O(t,r("studio_base"),o.base,[["plinth",r("studio_base_plinth")],["legs",r("studio_base_legs")],["none",r("studio_base_none")]],c=>i({base:c}))}`;case"shelf":return m`${l("studio_shelves",o.shelves,"shelves")} ${L(t,r("studio_back"),o.back,c=>i({back:c}))}`;case"lamp":return O(t,r("studio_lamp"),o.lamp,[["floor",r("studio_lamp_floor")],["table",r("studio_lamp_table")],["pendant",r("studio_lamp_pendant")],["wall",r("studio_lamp_wall")]],c=>i({lamp:c}));case"device":return m`${L(t,r("studio_display"),o.display,c=>i({display:c}))}
          ${O(t,r("studio_mount"),o.mount,[["floor",r("studio_mount_floor")],["surface",r("studio_mount_surface")],["wall",r("studio_mount_wall")]],c=>i({mount:c}))}
          ${o.mount==="floor"?O(t,r("studio_base"),o.base,[["none",r("studio_base_none")],["legs",r("studio_base_legs")],["plinth",r("studio_base_plinth")]],c=>i({base:c})):_}`}};return m`<section class="nf-studio">
    <h3>🛠️ ${r(e.itemId?"studio_title_edit":"studio_title")}</h3>
    ${M(r("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${r("studio_kind")}>
      ${Xm.map(c=>m`<button class="nf-chip" aria-pressed=${o.kind===c} ?disabled=${!!e.itemId&&o.kind!==c} @click=${()=>o.kind!==c&&n.change(Qm(o,c))}>${r(`studio_kind_${c}`)}</button>`)}
    </div>
    ${Tv(o)}
    <div class="nf-form">
      ${Z(t,r("studio_name"),o.name,c=>i({name:c}),{wide:!0,maxlength:60,placeholder:r(`studio_kind_${o.kind}`)})}
      ${s("studio_width",o.w,"w")} ${s("studio_depth",o.d,"d")} ${s("studio_height",o.h,"h")} ${a()}
      ${ng(t,r(o.kind==="lamp"?"studio_color_lamp_body":"studio_color_body"),o.body,c=>i({body:c}))}
      ${o.kind==="cabinet"||o.kind==="shelf"||o.kind==="lamp"||o.display?ng(t,r(o.kind==="lamp"?"studio_color_shade":o.kind==="device"?"studio_color_display":o.kind==="shelf"?"studio_color_boards":"studio_color_front"),o.front,c=>i({front:c})):_}
    </div>
    ${e.error?m`<p class="nf-sub nf-warn">${e.error}</p>`:_}
    ${Y(m`<button class="nf-btn nf-primary" ?disabled=${e.busy||!t.admin} @click=${()=>n.save()}>${r(e.itemId?"studio_save":"studio_place")}</button>`,m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>n.close()}>${r("cancel")}</button>`)}
  </section>`}var zv={room_no_area:"\u{1F3F7}\uFE0F",areas_unplaced:"\u2795",devices_unplaced:"\u{1F4CD}",rooms_overlap:"\u29C9",opening_off_wall:"\u{1F6AA}",entity_missing:"\u2753",furniture_entity_missing:"\u2753",standby:"\u{1F50C}",battery_low:"\u{1FAAB}"};function Pv(t,e){let n=e.kind==="room_no_area"&&e.vars.area?"check_room_no_area_named":`check_${e.kind}`;return t.t(n,e.vars)}function Iv(t,e){let n=t.t;switch(e.fix.do){case"set_area":return n("check_fix_set_area",{area:String(e.vars.area)});case"add_area_rooms":return n("check_fix_add_rooms");case"place_devices":return n("check_fix_place",{n:e.fix.entityIds.length});case"ignore_devices":return n("check_fix_ignore");case"remove_placements":return n("check_fix_remove",{n:e.fix.entityIds.length});default:return n("check_fix_show")}}function ig(t,e,n){let r=t.t,o=t.doc.floors.filter(i=>e.some(s=>s.floorId===i.id));return m`<section class="nf-check-panel">
    <div class="nf-h3row"><h3>✓ ${r("check_title")}</h3><button class="nf-btn nf-field-btn" title=${r("close")} @click=${()=>n.close()}>✕</button></div>
    ${e.length===0?m`<p class="nf-sub nf-check-ok">✅ ${r("check_all_good")}</p>`:m`${M(r("check_hint",{n:e.length}))}
        ${o.map(i=>m`<h4 class="nf-check-floor">${i.name}</h4>
            <ul class="nf-check-list">
              ${e.filter(s=>s.floorId===i.id).map(s=>m`<li>
                    <span class="nf-check-icon" aria-hidden="true">${zv[s.kind]}</span><span class="nf-check-text">${Pv(t,s)}</span>
                    <button class="nf-btn ${s.changes?"nf-primary":""}" ?disabled=${s.changes&&!t.admin} @click=${()=>n.fix(s)}>${Iv(t,s)}</button>
                    ${s.entityIds?Dv(t,s.entityIds,n):_}
                  </li>`)}
            </ul>`)}`}
    ${(t.doc.settings.check_ignore??[]).length>0?m`<p class="nf-sub"><button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.resetIgnored()}>${r("check_reset_ignored",{n:t.doc.settings.check_ignore.length})}</button></p>`:_}
  </section>`}function Dv(t,e,n){let r=t.t;return m`<details class="nf-check-names">
    <summary>${r("check_show_devices",{n:e.length})}</summary>
    <ul>
      ${e.map(o=>m`<li><span title=${o}>${t.hass?W(t.hass,o):o}</span> <small>${o}</small>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.ignore([o])}>${r("check_fix_ignore")}</button></li>`)}
    </ul>
    <button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.ignore(e)}>${r("check_ignore_all",{n:e.length})}</button>
  </details>`}var sg=(t,e)=>m`<button class="nf-btn nf-check-open" title=${t.t("check_open_hint")} @click=${e}>✓ ${t.t("check_open")}</button>`;function ag(t,e){if(!e||!Number.isFinite(e.value))return null;let n=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!n)return null;let r=/^(ct|cent|cents|c)$/i.test(n[1]),o=r||/^eur$/i.test(n[1])?"\u20AC":n[1];return{value:Math.round(t*e.value*(r?1:100))/100,currency:o}}var cg=20,lg=new WeakMap;function Ov(t){let e=t.entities??{},n=lg.get(e);if(!n){n=new Map;for(let[r,o]of Object.entries(e))o.device_id&&r.startsWith("sensor.")&&t.states[r]?.attributes.device_class==="battery"&&!n.has(o.device_id)&&n.set(o.device_id,r);lg.set(e,n)}return n}function Lv(t,e){let n=t.entities?.[e]?.device_id,r=n?Ov(t).get(n):void 0;if(r){let s=Number(t.states[r]?.state);if(Number.isFinite(s))return s}let o=t.states[e]?.attributes;if(!o||o.battery_level===void 0&&o.battery===void 0)return null;let i=Number(o.battery_level??o.battery);return Number.isFinite(i)?i:null}function Hv(t){let e=[],n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);for(let r of t.placements)e.push({entity:r.entity_id,x:r.x,z:r.z,room:null});for(let r of t.furniture)for(let o of[r.entity,r.power])n(o)&&e.push({entity:o,x:r.x,z:r.z,room:null});for(let r of t.openings)for(let o of[r.contact,r.contact2,r.tilt,r.tilt2,r.cover,r.cover2,r.lock])n(o)&&e.push({entity:o,x:NaN,z:NaN,room:r.room_id});return e}var Cv=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&N([e,n],r.points));function ug(t,e){let n=new Set,r=[];for(let o of e.floors)for(let i of Hv(o)){let s=t.entities?.[i.entity]?.device_id??i.entity;if(n.has(s))continue;let l=Lv(t,i.entity);l!==null&&(n.add(s),r.push({entity:i.entity,level:l,floorId:o.id,roomId:i.room??Cv(o,i.x,i.z)?.id??null}))}return r.sort((o,i)=>o.level-i.level)}var er=.08;function dg(t,e){let n=1/0;for(let r=0;r<e.length;r++){let o=e[r],i=e[(r+1)%e.length],[s,l]=[i[0]-o[0],i[1]-o[1]],a=s*s+l*l,c=a>0?Math.max(0,Math.min(1,((t[0]-o[0])*s+(t[1]-o[1])*l)/a)):0;n=Math.min(n,Math.hypot(t[0]-(o[0]+s*c),t[1]-(o[1]+l*c)))}return n}var hg=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function Nv(t,e,n=.2){if(t.points.length<3||e.points.length<3)return!1;let[r,o]=[hg(t.points),hg(e.points)],i=Math.max(r.x0,o.x0)+er,s=Math.min(r.x1,o.x1)-er,l=Math.max(r.z0,o.z0)+er,a=Math.min(r.z1,o.z1)-er;if(s<=i||a<=l)return!1;for(let c=i;c<=s+1e-9;c+=Math.min(n,s-i||n))for(let u=l;u<=a+1e-9;u+=Math.min(n,a-l||n)){let d=[c,u];if(N(d,t.points)&&N(d,e.points)&&dg(d,t.points)>er&&dg(d,e.points)>er)return!0}return!1}function fg(t){let e=new Set(["id","type","variant","name","icon","picture","vehicle","room_id","wall"]),n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);return Object.entries(t).flatMap(([r,o])=>e.has(r)?[]:Array.isArray(o)?o.filter(n):n(o)?[o]:[])}var pg=t=>fg(t),Bv=3,Wv=new Set(["off","standby","idle"]);function Vv(t,e,n,r){let o=e.energy.tariff,i=o?t.states[o]:void 0,s=i?{value:Number(i.state),unit:String(i.attributes.unit_of_measurement??"")}:null,l=new Set,a=(c,u)=>{if(!c||c==="none"||l.has(c))return;l.add(c);let d=t.states[c]?.state;if(!d||!Wv.has(d)||c.startsWith("light."))return;let p=eh(t,c),h=p?Re(t.states[p]):null;if(h===null||h<=Bv)return;let f=ag(h*24*365/1e3,s);r.push({kind:"standby",floorId:n.id,vars:{name:W(t,c),w:Math.round(h),cost:f?`${f.value.toFixed(0)} ${f.currency}`:`${Math.round(h*24*365/1e3)} kWh`},fix:u,changes:!1})};for(let c of n.furniture)a(c.entity,{do:"show_furniture",furnitureId:c.id});for(let c of n.placements){let u=n.rooms.find(d=>d.points.length>=3&&N([c.x,c.z],d.points));u&&a(c.entity_id,{do:"show_room",roomId:u.id})}}function mg(t,e){let n=[],r=e?.areas,o=new Set(t.settings.check_ignore??[]),i=new Set(t.floors.flatMap(s=>s.rooms.map(l=>l.area_id)).filter(s=>!!s));for(let s of t.floors){if(s.layer)continue;for(let a of s.rooms){if(a.area_id)continue;let c=Object.values(r??{}).find(u=>u.name.trim().toLowerCase()===a.name.trim().toLowerCase()&&!i.has(u.area_id));n.push(c?{kind:"room_no_area",floorId:s.id,vars:{room:a.name,area:c.name},fix:{do:"set_area",roomId:a.id,areaId:c.area_id},changes:!0}:{kind:"room_no_area",floorId:s.id,vars:{room:a.name,area:""},fix:{do:"show_room",roomId:a.id},changes:!1})}let l=Xn(t,s,r);if(l.length&&n.push({kind:"areas_unplaced",floorId:s.id,vars:{n:l.length,names:l.map(a=>a.name).join(", ")},fix:{do:"add_area_rooms"},changes:!0}),e){let a=Be(e,[s]),c=fr(e,[s]);for(let u of s.rooms){if(!u.area_id)continue;let d=xi(s,u);for(let f of s.furniture)if(N([f.x,f.z],u.points))for(let g of pg(f))d.add(g);for(let f of s.openings)if(f.room_id===u.id){for(let g of fg(f))d.add(g);for(let g of Object.values(c.get(f.id)??{}))typeof g=="string"&&d.add(g)}for(let f of s.furniture){let g=a.get(f.id);if(g&&N([f.x,f.z],u.points))for(let y of[g.entity,g.power])typeof y=="string"&&d.add(y)}let p=be(e,u).filter(f=>Mt(Ne(e,f))),h=kn(e,p).map(f=>f.primary).filter(f=>!d.has(f)&&!o.has(f));h.length&&n.push({kind:"devices_unplaced",floorId:s.id,vars:{room:u.name,n:h.length},fix:{do:"place_devices",roomId:u.id,entityIds:h},entityIds:h,changes:!0})}}for(let a=0;a<s.rooms.length;a++)for(let c=a+1;c<s.rooms.length;c++){let[u,d]=[s.rooms[a],s.rooms[c]];Nv(u,d)&&n.push({kind:"rooms_overlap",floorId:s.id,vars:{a:u.name,b:d.name},fix:{do:"show_room",roomId:d.id},changes:!1})}if(s.openings.length){let a=fe(s.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},s.walls??[]).walls;for(let c of s.openings){let u=Pe(c,s.rooms,s.walls??[]);(!u||!zt(a,c,u))&&n.push({kind:"opening_off_wall",floorId:s.id,vars:{room:s.rooms.find(d=>d.id===c.room_id)?.name??""},fix:{do:"show_opening",openingId:c.id},changes:!1})}}if(e&&Vv(e,t,s,n),e&&Object.keys(e.states).length){let a=s.placements.map(c=>c.entity_id).filter(c=>!e.states[c]);a.length&&n.push({kind:"entity_missing",floorId:s.id,vars:{n:a.length,ids:a.slice(0,3).join(", ")},fix:{do:"remove_placements",entityIds:a},changes:!0});for(let c of s.furniture){let u=pg(c).filter(d=>d!=="none"&&!e.states[d]);u.length&&!(ce(c.type)&&!c.entity)&&n.push({kind:"furniture_entity_missing",floorId:s.id,vars:{id:u[0]},fix:{do:"show_furniture",furnitureId:c.id},changes:!1})}}}if(e)for(let s of ug(e,t)){if(s.level>=cg)break;n.push({kind:"battery_low",floorId:s.floorId,vars:{name:W(e,s.entity),level:Math.round(s.level)},fix:s.roomId?{do:"show_room",roomId:s.roomId}:{do:"show_floor"},changes:!1})}return n}var ee=t=>t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),fn=t=>t.map(([e,n])=>`${e.toFixed(3)},${n.toFixed(3)}`).join(" ");function Kv(t,e,n,r){let o=fe(e.rooms,{exterior:t.settings.wall_exterior,interior:t.settings.wall_interior},e.walls??[]).walls,i=[...e.rooms.flatMap(b=>b.points),...o.flatMap(b=>b.footprint)];if(!i.length)return"";let[s,l]=[Math.min(...i.map(b=>b[0])),Math.max(...i.map(b=>b[0]))],[a,c]=[Math.min(...i.map(b=>b[1])),Math.max(...i.map(b=>b[1]))],u=1.2,d=[];for(let b of e.rooms)d.push(`<polygon points="${fn(b.points)}" fill="#f4f4f4" stroke="none"/>`);for(let b of o)d.push(`<polygon points="${fn(b.footprint)}" fill="#222" stroke="#222" stroke-width="0.01"/>`);for(let b of e.openings){let v=Pe(b,e.rooms,e.walls??[]),w=v?zt(o,b,v):null;if(!w)continue;let{wall:x,s:k}=w,$=Math.hypot(x.b[0]-x.a[0],x.b[1]-x.a[1]);if($<1e-6)continue;let A=[(x.b[0]-x.a[0])/$,(x.b[1]-x.a[1])/$],F=[-A[1],A[0]],T=(q,ye)=>[x.a[0]+A[0]*q+F[0]*ye,x.a[1]+A[1]*q+F[1]*ye],[I,z]=[k-b.width/2,k+b.width/2],[C,B]=[x.left+.01,-(x.right+.01)];if(d.push(`<polygon points="${fn([T(I,C),T(z,C),T(z,B),T(I,B)])}" fill="#fff"/>`),b.type==="garage"){let q=(x.left-x.right)/2;d.push(`<polyline points="${fn([T(I,q),T(z,q)])}" fill="none" stroke="#555" stroke-width="0.02" stroke-dasharray="0.12 0.08"/>`)}else if(b.type==="window"){let q=(x.left-x.right)/2;d.push(`<polyline points="${fn([T(I,q),T(z,q)])}" fill="none" stroke="#222" stroke-width="0.03"/>`),d.push(`<polyline points="${fn([T(I,C-.01),T(z,C-.01)])}" fill="none" stroke="#222" stroke-width="0.015"/><polyline points="${fn([T(I,B+.01),T(z,B+.01)])}" fill="none" stroke="#222" stroke-width="0.015"/>`)}else{let q=b.room_id===x.roomRight?-1:1,ye=T(I,q*(q>0?x.left:x.right)),$t=T(I,q*((q>0?x.left:x.right)+b.width)),V=T(z,q*(q>0?x.left:x.right));d.push(`<path d="M ${ye[0]} ${ye[1]} L ${$t[0]} ${$t[1]} A ${b.width} ${b.width} 0 0 ${q>0?1:0} ${V[0]} ${V[1]}" fill="none" stroke="#555" stroke-width="0.015"/>`)}}let p=new Map(n.map(b=>[b.roomId,b]));for(let b of e.rooms){if(b.points.length<3)continue;let[v,w]=_e(b.points),x=p.get(b.id);d.push(`<text x="${v}" y="${w-.08}" font-size="0.32" text-anchor="middle" font-weight="600">${ee(b.name)}</text>`),x&&d.push(`<text x="${v}" y="${w+.32}" font-size="0.24" text-anchor="middle" fill="#444">${ee(r.area(x.living>0?x.living:x.floor))}</text>`)}let h=(b,v,w,x,k,$)=>{let F=(b+w)/2,T=(v+x)/2,I=$?`M ${b-.15} ${v} L ${b+.15} ${v} M ${w-.15} ${x} L ${w+.15} ${x}`:`M ${b} ${v-.15} L ${b} ${v+.15} M ${w} ${x-.15} L ${w} ${x+.15}`,z=$?`<text x="${F-.25}" y="${T}" font-size="0.26" text-anchor="middle" transform="rotate(-90 ${F-.25} ${T})">${ee(k)}</text>`:`<text x="${F}" y="${T+.4}" font-size="0.26" text-anchor="middle">${ee(k)}</text>`;return`<path d="M ${b} ${v} L ${w} ${x} ${I}" stroke="#222" stroke-width="0.015" fill="none"/>${z}`};d.push(h(s,c+.5,l,c+.5,r.length(l-s),!1)),d.push(h(s-.5,a,s-.5,c,r.length(c-a),!0)),d.push(`<path d="M ${l-1} ${a-.7} L ${l} ${a-.7}" stroke="#222" stroke-width="0.06"/><text x="${l-.5}" y="${a-.85}" font-size="0.22" text-anchor="middle">${ee(r.length(1))}</text>`);let[f,g]=[l-s+2*u,c-a+2*u];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${`${s-u} ${a-u} ${f} ${g}`}" style="width:${(f*10).toFixed(1)}mm" font-family="system-ui, sans-serif">${d.join("")}</svg>`}function gg(t,e){let n=t.floors.filter(a=>!a.layer&&a.rooms.length),r=[],o=[],i=[];for(let a of[...n].sort((c,u)=>c.elevation-u.elevation)){let c=uo(t,a);i.push(...c);let u=Yn(c);r.push(`<section class="page"><h1>${ee(a.name)}</h1><div class="sub">${ee(e.living)}: ${ee(e.area(u.living))}</div>${Kv(t,a,c,e)}</section>`),o.push(`<tr class="floor"><th colspan="4">${ee(a.name)}</th></tr>`);for(let d of c){let p=a.rooms.find(h=>h.id===d.roomId);o.push(`<tr><td>${ee(p.name)}</td><td>${ee(e.area(d.floor))}</td><td>${d.low>.05?ee(e.area(d.low)):""}</td><td><b>${ee(e.area(d.living))}</b></td></tr>`)}o.push(`<tr class="sum"><td>${ee(e.total)}</td><td>${ee(e.area(u.floor))}</td><td>${u.low>.05?ee(e.area(u.low)):""}</td><td><b>${ee(e.area(u.living))}</b></td></tr>`)}let s=Yn(i),l=`<section class="page"><h1>${ee(e.living)}</h1><table><thead><tr><th>${ee(e.room)}</th><th>${ee(e.floorArea)}</th><th>${ee(e.low)}</th><th>${ee(e.living)}</th></tr></thead><tbody>${o.join("")}<tr class="grand"><td>${ee(e.total)}</td><td>${ee(e.area(s.floor))}</td><td>${s.low>.05?ee(e.area(s.low)):""}</td><td><b>${ee(e.area(s.living))}</b></td></tr></tbody></table><p class="note">${ee(e.note)}</p></section>`;return`<!doctype html><html><head><meta charset="utf-8"><title>${ee(e.title)}</title><style>
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
  </style></head><body>${r.join("")}${l}<script>window.addEventListener("load", () => setTimeout(() => window.print(), 300));<\/script></body></html>`}var _g="nextfloor.tour_done",Gv=[["Ctrl Z","keys_undo"],["Ctrl Shift Z \xB7 Ctrl Y","keys_redo"],["Ctrl D","keys_duplicate"],["Entf / Delete","keys_delete"],["\u2190 \u2191 \u2192 \u2193","keys_nudge"],["Shift + \u2190\u2191\u2192\u2193","keys_nudge_10"],["Alt + \u2190\u2191\u2192\u2193","keys_nudge_1"],["R \xB7 Shift R","keys_rotate"],["L","keys_lock"],["Enter","keys_close_shape"],["Esc","keys_escape"],["Shift","keys_straight"],["?","keys_sheet"]],Ki=[["tour_1_title","tour_1"],["tour_2_title","tour_2"],["tour_3_title","tour_3"],["tour_4_title","tour_4"]];function bg(){try{return localStorage.getItem(_g)!=="1"}catch{return!1}}function yg(){try{localStorage.setItem(_g,"1")}catch{}}function wg(t,e){return m`<div class="nf-keys" role="dialog" aria-label=${t("keys_title")} @click=${n=>n.target===n.currentTarget&&e()}>
    <div class="nf-keys-card">
      <div class="nf-h3row"><h3>⌨ ${t("keys_title")}</h3><button class="nf-btn nf-field-btn" aria-label=${t("close")} @click=${e}>✕</button></div>
      <dl>
        ${Gv.map(([n,r])=>m`<dt>${n.split(" \xB7 ").map((o,i)=>m`${i?" \xB7 ":""}<kbd>${o}</kbd>`)}</dt><dd>${t(r)}</dd>`)}
      </dl>
    </div>
  </div>`}function Uv(t){return{rect:t("tool_rect"),free:t("tool_polygon"),rooms:t("area_rooms",{n:"\u2026"}).replace(/\s*\(…\)\s*$/,""),opening:t("tool_opening"),furniture:t("tool_furniture"),split:t("split_3d"),check:t("check_open")}}function vg(t,e,n){if(e===null||e>=Ki.length)return _;let[r,o]=Ki[e],i=e===Ki.length-1;return m`<div class="nf-tour" role="dialog" aria-label=${t("tour_title")}>
    <div class="nf-tour-step">${e+1} / ${Ki.length}</div>
    <h3>${t(r)}</h3>
    <p>${t(o,Uv(t))}</p>
    <div class="nf-actions">
      ${e>0?m`<button class="nf-btn" @click=${()=>n(e-1)}>‹ ${t("tour_back")}</button>`:_}
      <button class="nf-btn nf-primary" @click=${()=>n(i?null:e+1)}>${t(i?"tour_done":"tour_next")}</button>
      ${i?_:m`<button class="nf-link" @click=${()=>n(null)}>${t("tour_skip")}</button>`}
    </div>
  </div>`}var Nt="https://github.com/therealMRBK/NextFloor";var ho=t=>`/api/nextfloor/mesh/${encodeURIComponent(t)}`,tr=12*1024*1024;function kg(t,e){let n=new Map;for(let r of t)for(let o of r.items){if(!o.mesh)continue;let i=n.get(o.mesh)??[];n.set(o.mesh,[...i,`${Ye(o,de(r.id,o.id),e)} \xB7 ${Oe(r,e)}`])}return[...n].map(([r,o])=>({id:r,items:o})).sort((r,o)=>r.items[0].localeCompare(o.items[0]))}function nr(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function xl(t){return t===201||t===200||t===204?null:t===401||t===403?"forbidden":t===413?"too_large":t===400?"not_glb":t===404?"bad_id":"other"}var jv=40,Zv=(t=tr)=>Math.floor(t*.8/jv),$l=[{key:"light",triangles:3e4},{key:"normal",triangles:8e4},{key:"fine",triangles:15e4}];function xg(t){return Math.min($l.find(e=>e.key===t).triangles,Zv())}var Sl=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},_present:{state:!0},_draft:{state:!0},_busy:{state:!0},_message:{state:!0}};checked=new Set;run=0;constructor(){super(),this._present={},this._draft=null,this._busy=!1,this._message=null}t(e,n){return xe(this.hass,e,n)}get slots(){return kg(this.packs??[],this.hass?.language??"en")}willUpdate(){for(let e of this.slots)this.checked.has(e.id)||!this.hass?.fetchWithAuth||(this.checked.add(e.id),this.askPresence(e.id))}async askPresence(e){let n=await this.hass.fetchWithAuth(ho(e),{method:"HEAD"}).catch(()=>null),r=n&&n.status!==405?n.ok:await this.hass.fetchWithAuth(ho(e)).then(o=>o.ok,()=>!1);this._present={...this._present,[e]:r?"yes":"no"}}async choose(e,n){if(n){this._message=null,this._busy=!0;try{let r=await n.arrayBuffer(),i=await(await un()).inspectModel(r);this._draft={slot:e,fileName:n.name,data:r,info:i,turns:0,paint:i.paint,detail:"normal",colour:"#1d5bd6",result:null},await this.refresh()}catch(r){this._draft=null,this._message={ok:!1,text:this.readError(r)}}finally{this._busy=!1}}}readError(e){let r=`model_error_${e?.reason}`,o=this.t(r);return o===r?this.t("model_error_unreadable",{detail:String(e?.message??e)}):o}async refresh(){let e=this._draft;if(!e)return;let n=++this.run;this._busy=!0;try{let r=await un(),{glb:o,triangles:i}=await r.prepareModel(e.data,{turns:e.turns,paint:e.paint,maxTriangles:xg(e.detail)}),s=await r.previewModel(o,e.colour);n===this.run&&this._draft===e&&(this._draft={...e,result:{glb:o,triangles:i,picture:s}})}catch(r){n===this.run&&(this._message={ok:!1,text:this.readError(r)})}finally{n===this.run&&(this._busy=!1)}}change(e){this._draft&&(this._draft={...this._draft,...e},this.refresh())}turn(e){this._draft&&this.change({turns:(this._draft.turns+e+4)%4})}togglePaint(e,n){if(!this._draft)return;let r=this._draft.paint.filter(o=>o!==e);this.change({paint:n?[...r,e]:r})}async upload(){let e=this._draft;if(!(!e?.result||!this.hass?.fetchWithAuth)){if(e.result.glb.byteLength>tr){this._message={ok:!1,text:this.t("model_error_too_large",{max:nr(tr)})};return}this._busy=!0;try{let n=await this.hass.fetchWithAuth(ho(e.slot.id),{method:"POST",body:e.result.glb}),r=xl(n.status);if(r){this._message={ok:!1,text:this.t(`model_upload_${r}`,{max:nr(tr)})};return}this._present={...this._present,[e.slot.id]:"yes"},this._message={ok:!0,text:this.t("model_uploaded",{id:e.slot.id,size:nr(e.result.glb.byteLength)})},this._draft=null}catch(n){this._message={ok:!1,text:this.t("model_upload_other",{detail:String(n?.message??n)})}}finally{this._busy=!1}}}async removeModel(e){if(!this.hass?.fetchWithAuth||!confirm(this.t("model_remove_confirm",{id:e.id})))return;let n=await this.hass.fetchWithAuth(ho(e.id),{method:"DELETE"}),r=xl(n.status);this._present={...this._present,[e.id]:r?this._present[e.id]:"no"},this._message=r?{ok:!1,text:this.t(`model_upload_${r}`,{max:nr(tr)})}:{ok:!0,text:this.t("model_removed",{id:e.id})}}row(e){let n=this._present[e.id]??"unknown",r=n==="yes"?this.t("model_present"):n==="no"?this.t("model_missing"):"\u2026";return m`<div class="nf-model">
      <div>
        <b>${e.items[0]}</b>${e.items.length>1?m` <span class="nf-sub">+${e.items.length-1}</span>`:_}
        <span class="nf-sub">${e.id}.glb · <span class="nf-model-${n}">${r}</span></span>
      </div>
      <div class="nf-model-actions">
        <label class="nf-btn nf-primary">
          ${this.t(n==="yes"?"model_replace":"model_add")}
          <input type="file" accept=".glb,model/gltf-binary" hidden @change=${o=>this.picked(e,o)} />
        </label>
        ${n==="yes"?m`<button class="nf-btn nf-danger" @click=${()=>this.removeModel(e)}>${this.t("model_remove")}</button>`:_}
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
            ${r?m`<small class="nf-sub">${this.t("model_result",{triangles:r.triangles.toLocaleString(this.hass?.language),size:nr(r.glb.byteLength)})}</small>`:_}
          </div>
        </div>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!r||this._busy} @click=${()=>this.upload()}>${this.t("model_upload")}</button>
        <button class="nf-btn" @click=${()=>this._draft=null}>${this.t("cancel")}</button>
      </div>
    </section>`}render(){let e=this.slots;return e.length===0||!(this.hass?.user?.is_admin??!1)?_:m`<section class="nf-ext-card">
      <h3>${this.t("models")}</h3>
      <p class="nf-sub">${this.t("models_hint")}</p>
      ${e.map(n=>this.row(n))}
      ${this._draft?this.editor(this._draft):_}
      ${this._busy&&!this._draft?m`<p class="nf-sub">${this.t("loading")}</p>`:_}
      ${this._message?m`<p class="nf-sub ${this._message.ok?"nf-notice":"nf-pack-error"}">${this._message.text}</p>`:_}
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
    `]};customElements.get("nf-model-upload")||customElements.define("nf-model-upload",Sl);var rr="therealMRBK/NextFloor-Plugins",$g=`https://raw.githubusercontent.com/${rr}/main/index.json`,qv=t=>/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(t),Fe=(t,e)=>typeof t=="string"?t.trim().slice(0,e):"";function Yv(t){let e=t?.plugins;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Fe(o.id,64),s=Fe(o.url,300),l=Fe(o.sha256,64).toLowerCase(),a=Fe(o.name,60),c=Fe(o.version,40),u=Fe(o.homepage,200);!/^[\w.-]+$/.test(i)||n.has(i)||!a||!c||!qv(s)||!/^[0-9a-f]{64}$/.test(l)||(n.add(i),r.push({id:i,name:a,description:Fe(o.description,300),author:Fe(o.author,60),version:c,homepage:/^https:\/\//.test(u)?u:"",url:s,sha256:l}))}return r}async function Sg(t=(...e)=>fetch(...e)){let e=await t($g,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Yv(await e.json())}function Mg(t,e){let n=(e??[]).find(r=>r.id===t.id);return n?n.sha256===t.sha256&&n.url===t.url?"installed":"update":"available"}function Rg(t,e){let n=t??[],r={url:e.url,enabled:!0,id:e.id,version:e.version,sha256:e.sha256},o=n.findIndex(i=>i.id===e.id);return o<0?[...n,r]:n.map((i,s)=>s===o?{...r,enabled:i.enabled}:i)}var Xv=(t,e)=>t===`https://raw.githubusercontent.com/${rr}/main/packs/${e}.json`;function Qv(t){let e=t?.packs;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=Fe(o.id,40),s=Fe(o.url,300),l=Fe(o.sha256,64).toLowerCase(),a=Fe(o.name,80);if(!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(i)||i.startsWith("nextfloor.")||n.has(i)||!a||!Xv(s,i)||!/^[0-9a-f]{64}$/.test(l))continue;n.add(i);let c=(u,d)=>typeof u=="number"&&Number.isInteger(u)&&u>0?u:d;r.push({id:i,name:a,description:Fe(o.description,400),author:Fe(o.author,80),release:c(o.release,1),items:c(o.items,0),url:s,sha256:l})}return r.sort((o,i)=>o.name.localeCompare(i.name))}async function Eg(t=(...e)=>fetch(...e)){let e=await t($g,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Qv(await e.json())}function Ag(t,e){let n=e.find(r=>r.id===t.id);return n?(n.release??1)>=t.release?"installed":"update":"available"}var Jv=t=>[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("");async function Fg(t,e=(...n)=>fetch(...n)){let n=await e(t.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let r=await n.arrayBuffer(),o=globalThis.crypto?.subtle;if(o&&Jv(await o.digest("SHA-256",r))!==t.sha256)throw new Error("checksum mismatch: the file is not the one that was reviewed");return new TextDecoder().decode(r)}var ek="https://therealmrbk.github.io/NextFloor/builder/",Ml=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},_msg:{state:!0},_busy:{state:!0},_store:{state:!0},_storeError:{state:!0}};constructor(){super(),this._msg=null,this._busy=!1,this._store=null,this._storeError=null}async loadStore(){this._store="loading",this._storeError=null;try{this._store=await Eg()}catch(e){this._store=null,this._storeError=this.t("community_failed",{detail:e?.message??String(e)})}}async installStore(e){this._busy=!0,this._msg=null;try{let n=await ur(this.hass,await Fg(e));this._msg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}finally{this._busy=!1}}renderStore(){let e=this.packs??[],n=this._store;return m`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${ek} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${rr}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${n===null?m`<div><button class="nf-btn" @click=${()=>{this.loadStore()}}>${this.t("community_load")}</button></div>`:n==="loading"?m`<p class="nf-sub">${this.t("loading")}</p>`:n.length?m`<ul>
                ${n.map(r=>{let o=Ag(r,e);return m`<li>
                    <div class="nf-pack-main">
                      <strong>${r.name}</strong>
                      <span class="nf-detail">${r.id} · ${this.t("pack_by",{publisher:r.author,n:r.items})}</span>
                      ${r.description?m`<span class="nf-detail">${r.description}</span>`:_}
                    </div>
                    <button class="nf-btn ${o==="installed"?"":"nf-primary"}" ?disabled=${this._busy||o==="installed"} @click=${()=>{this.installStore(r)}}>
                      ${this.t(o==="installed"?"community_installed":o==="update"?"community_update":"community_install")}
                    </button>
                  </li>`})}
              </ul>`:m`<p class="nf-sub">${this.t("community_none")}</p>`}
      ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:_}`}t(e,n){return xe(this.hass,e,n)}changed(){this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}errorText(e){let{code:n,message:r}=e??{},o=r??String(e),i=`pack_error_${n}`,s=this.t(i,{detail:o});return s===i?this.t("pack_error_other",{detail:o}):s}async importTexts(e){if(!this.hass||!e.length)return 0;this._busy=!0;let n=[],r=[];for(let{label:i,text:s}of e)try{let l=await ur(this.hass,s);n.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){r.push(i?`${i}: ${this.errorText(l)}`:this.errorText(l))}this._busy=!1,n.length&&this.changed();let o=e.length>1?[this.t("packs_imported_n",{n:n.length,total:e.length})]:[];return this._msg={ok:r.length===0,text:[...o,...n,...r].join(" \xB7 ")},n.length}async importFiles(e){let n=e.target,r=[...n.files??[]];n.value="",await this.importTexts(await Promise.all(r.map(async o=>({label:o.name,text:await o.text()}))))}async importPasted(){let e=this.renderRoot.querySelector("textarea"),n=e?.value.trim()??"";if(!e||!n)return void(this._msg={ok:!1,text:this.t("pack_paste_empty")});try{JSON.parse(n)}catch(r){return void(this._msg={ok:!1,text:this.t("pack_paste_not_json",{detail:r instanceof Error?r.message:String(r)})})}await this.importTexts([{label:"",text:n}])>0&&(e.value="")}async deletePack(e){if(!(!this.hass||!confirm(this.t("pack_remove_confirm",{name:Oe(e,this.hass.language??"de")}))))try{await ec(this.hass,e.id),this._msg=null,this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}}render(){let e=(this.packs??[]).filter(o=>!o.builtin),n=(this.packs??[]).length-e.length,r=this.hass?.language??"de";return m`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro",{n})} <a href="${Nt}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${e.length?m`<ul>
            ${e.map(o=>m`<li>
                <div class="nf-pack-main">
                  <strong>${Oe(o,r)}</strong>
                  <span class="nf-detail">${o.id} · ${this.t("pack_by",{publisher:o.publisher,n:o.items.length})}</span>
                  ${o.description?m`<span class="nf-detail">${o.description}</span>`:_}
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
      ${this._msg?m`<p class=${this._msg.ok?"nf-ok":"nf-error"} role=${this._msg.ok?"status":"alert"}>${this._msg.text}</p>`:_}
      ${this.hass?this.renderStore():_}
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
    `]};customElements.get("nf-pack-manager")||customElements.define("nf-pack-manager",Ml);var SI=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var tk=new Map;var Tg=()=>[...tk.values()];var Rl=class extends oe{static properties={hass:{attribute:!1},plugins:{attribute:!1},_error:{state:!0},_store:{state:!0},_storeError:{state:!0},_storeOpen:{state:!0}};stop=null;constructor(){super(),this._error="",this._storeError="",this._storeOpen=!1}connectedCallback(){super.connectedCallback(),this.stop=Lo(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}t(e,n){return xe(this.hass,e,n)}emit(e){this.dispatchEvent(new CustomEvent("plugins-changed",{detail:e,bubbles:!0,composed:!0}))}add(e){let n=gs(e.value),r=this.plugins??[];if(!_s(n))return void(this._error=this.t("plugins_url_invalid"));if(r.some(o=>o.url===n))return void(this._error=this.t("plugins_exists"));if(r.length>=20)return void(this._error=this.t("plugins_limit"));this._error="",e.value="",this.emit([...r,{url:n,enabled:!0}])}async toggleStore(){if(this._storeOpen=!this._storeOpen,!(!this._storeOpen||this._store)){this._storeError="";try{this._store=await Sg()}catch(e){this._storeError=this.t("store_failed",{error:e instanceof Error?e.message:String(e)})}}}install(e){let n=this.plugins??[],r=n.some(o=>o.id===e.id);if(!r&&n.length>=20)return void(this._error=this.t("plugins_limit"));if(!r&&n.some(o=>o.url===e.url))return void(this._error=this.t("plugins_exists"));window.confirm(this.t("store_confirm",{name:e.name,author:e.author||"?",url:e.url}))&&(this._error="",this.emit(Rg(n,e)))}renderStore(){return m`<div class="nf-store">
      <button class="nf-btn" @click=${()=>this.toggleStore()}>${this._storeOpen?this.t("store_close"):this.t("store_open")}</button>
      ${this._storeOpen?m`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${rr}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:_}
            ${!this._store&&!this._storeError?m`<p class="nf-sub">${this.t("plugins_loading")}</p>`:_}
            ${this._store&&!this._store.length?m`<p class="nf-sub">${this.t("store_empty")}</p>`:_}
            <ul>
              ${(this._store??[]).map(e=>{let n=Mg(e,this.plugins);return m`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${e.name}</strong> <span class="nf-detail">${e.version}${e.author?` \xB7 ${e.author}`:""}</span></span>
                    ${e.description?m`<span class="nf-detail">${e.description}</span>`:_}
                    ${e.homepage?m`<a class="nf-detail" href=${e.homepage} target="_blank" rel="noopener">${e.homepage}</a>`:_}
                  </div>
                  ${n==="installed"?m`<span class="nf-state ok">${this.t("store_installed")}</span>`:m`<button class="nf-btn" @click=${()=>this.install(e)}>${n==="update"?this.t("store_update"):this.t("store_install")}</button>`}
                </li>`})}
            </ul>`:_}
    </div>`}stateOf(e){let n=Tg().find(i=>i.url===e),r=ys().filter(i=>i.source===e),o=[...n?.error?[n.error]:[],...r.flatMap(i=>i.errors)];if(n?.state==="error")return{label:this.t("plugins_error"),tone:"err",detail:o.join(" \xB7 ")};if(n?.state==="loading")return{label:this.t("plugins_loading"),tone:"warn",detail:""};if(n?.state==="loaded"&&!r.length)return{label:this.t("plugins_nothing_registered"),tone:"warn",detail:""};if(r.length){let i=r.map(s=>`${s.name}${s.version?` ${s.version}`:""}`).join(", ");return{label:this.t("plugins_loaded"),tone:o.length?"warn":"ok",detail:o.length?`${i} \xB7 ${o.join(" \xB7 ")}`:i}}return{label:this.t("plugins_reload_hint"),tone:"warn",detail:""}}render(){let e=this.plugins??[],n=ys().filter(r=>!r.source);return m`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${Nt}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
      <p class="nf-warn">⚠️ ${this.t("plugins_warning")}</p>
      ${e.length?m`<ul>
            ${e.map((r,o)=>{let i=r.enabled?this.stateOf(r.url):{label:this.t("plugins_off"),tone:"warn",detail:""};return m`<li>
                <label class="nf-check" title=${this.t("plugins_reload_hint")}>
                  <input type="checkbox" .checked=${r.enabled}
                    @change=${s=>this.emit(e.map((l,a)=>a===o?{...l,enabled:s.target.checked}:l))} />
                </label>
                <div class="nf-plugin-main">
                  <code>${r.id?`${r.id}${r.version?` ${r.version}`:""}`:r.url}</code>
                  <span class="nf-state ${i.tone}">${i.label}</span>
                  ${i.detail?m`<span class="nf-detail">${i.detail}</span>`:_}
                </div>
                <button class="nf-btn" @click=${()=>this.emit(e.filter((s,l)=>l!==o))}>${this.t("plugins_remove")}</button>
              </li>`})}
          </ul>`:m`<p class="nf-sub">${this.t("plugins_none")}</p>`}
      ${n.length?m`<p class="nf-sub">${this.t("plugins_from_dashboard")}: ${n.map(r=>`${r.name}${r.version?` ${r.version}`:""}`).join(", ")}</p>`:_}
      ${this.renderStore()}
      <div class="nf-add">
        <input type="text" placeholder="/local/nextfloor/my-plugin.js" aria-label=${this.t("plugins_add")}
          @keydown=${r=>r.key==="Enter"&&this.add(r.target)} />
        <button class="nf-btn" @click=${r=>this.add(r.target.previousElementSibling)}>${this.t("plugins_add")}</button>
      </div>
      ${this._error?m`<p class="nf-error" role="alert">${this._error}</p>`:_}
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
    `]};customElements.get("nf-plugin-manager")||customElements.define("nf-plugin-manager",Rl);var El=class extends oe{static properties={hass:{attribute:!1},packs:{attribute:!1},plugins:{attribute:!1}};t(e,n){return xe(this.hass,e,n)}render(){return m`<div class="nf-ext">
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",El);var po="handled",zg=["select","rect","polygon","wall","opening","furniture","stairs","outdoor","hole","roof","energy"],Pg=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Gi=10,Le=t=>Math.round(t*1e3)/1e3,Ig={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Al=class extends oe{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},loadCardEditor:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_solid3d:{state:!0},_sidePinned:{state:!0},_studio:{state:!0},_check:{state:!0},_keys:{state:!0},_note:{state:!0},_dims:{state:!0},_tour:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_wallView:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},_arcEdit:{state:!0},_routeDraft:{state:!0}};doc3dTimer;tourChecked=!1;_pick=null;_pickTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new Li(100);lib=new Si(()=>this.requestUpdate());side=new Bi(()=>this.requestUpdate());sel=new Ni(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._arcEdit=null,this._routeDraft=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this.roof.chimneyId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._solid3d=!1,this._doc3d=this._doc,this._sideOpen=!1;let n=!0;try{n=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=n,this._studio=null,this._check=!1,this._keys=!1,this._note=null,this._dims=(()=>{try{return localStorage.getItem("nextfloor.plan_dims")==="1"}catch{return!1}})(),this._tour=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._wallView=null,this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,n){return xe(this.hass,e,n)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}arcActions(){return{edit:this._arcEdit,setEdit:e=>this._arcEdit=e,apply:e=>{if(!this.isAdmin||Math.abs(e.bulge)<.01)return;let n=this._doc,r=structuredClone(n),o=r.floors.find(c=>c.id===this._floorId);if(!o)return;let[i,s,l]=e.key.split(":");if(!(i==="wall"?of(o,s,e.bulge).length>0:rf(o,s,Number(l),e.bulge))){this._arcEdit={...e,error:this.t("arc_too_wide")};return}this._arcEdit=null,this.setDoc(r,n)}}}freeWallActions(){return{update:e=>this.updateFreeWall(e),remove:()=>this.deleteFreeWall(),arc:this.arcActions(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,n)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:sp(r,e,n)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),removeCorner:e=>{let n=this.sel.outdoor;n&&this.change((r,o)=>{qh(o.outdoor.find(i=>i.id===n),e)})},lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),studio:()=>this.openStudio(null),packs:this.packs??[]}}openStudio(e){let n=e?G(e):void 0,r=n?.recipe&&e?.startsWith(`pack:${pn}:`)?n.id:null;this._studio={recipe:r&&n?.recipe?{...n.recipe}:vl("cabinet",""),itemId:r,busy:!1,error:null},this._tool="furniture"}async saveStudio(){let e=this._studio;if(!e||!this.hass||!this.isAdmin)return;let n=this.hass.language??"en",r=hr().find(u=>u.id===pn),o=r?.items??[],i={...e.recipe,name:e.recipe.name||this.t(`studio_kind_${e.recipe.kind}`)},s=e.itemId??eg(i.name,o.map(u=>u.id)),l=Vi(i,s,n),a={id:pn,name:r?.name??this.t("studio_pack_name"),publisher:r?.publisher??this.t("studio_pack_publisher"),release:(r?.release??0)+1,items:e.itemId?o.map(u=>u.id===s?l:u):[...o,l]};this._studio={...e,busy:!0,error:null};try{let{builtin:u,imported_at:d,...p}=a;await ur(this.hass,JSON.stringify({format:"nfpack",version:1,...p}))}catch(u){this._studio={...e,busy:!1,error:this.t("studio_error",{detail:u.message??String(u)})};return}is([...hr().filter(u=>u.id!==pn),a]),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._studio=null;let c=de(pn,s);if(e.itemId){let[u,d,p]=l.size;this.change(h=>h.floors.forEach(f=>f.furniture.forEach(g=>g.type===c&&Object.assign(g,{w:u,d,h:p}))))}else this.addFurniture(c)}printPlan(){let e=o=>this.t(o),n=gg(this._doc,{title:this.t("print_title"),room:e("print_room"),floorArea:e("print_floor_area"),living:e("print_living"),low:e("print_low"),total:e("print_total"),note:e("living_area_hint"),area:o=>Ee(this.hass,o),length:o=>pe(this.hass,o)}),r=window.open("","_blank");if(!r)return void alert(this.t("print_blocked"));r.document.open(),r.document.write(n),r.document.close()}fixFinding(e){e.floorId!==this._floorId&&this.floorActions().openFloor(e.floorId);let n=o=>o.floors.find(i=>i.id===e.floorId),r=e.fix;switch(r.do){case"show_floor":return;case"show_room":return this.selectItem("room",r.roomId);case"show_opening":return this.selectItem("opening",r.openingId);case"show_furniture":return this.selectItem("furniture",r.furnitureId);case"set_area":return this.change(o=>{let i=n(o)?.rooms.find(s=>s.id===r.roomId);i&&Object.assign(i,Za(i,r.areaId,this.hass?.areas??{}))});case"add_area_rooms":{let o=n(this._doc);o&&this.addAreaRooms(o);return}case"place_devices":return this.change(o=>{let i=n(o),s=i?.rooms.find(l=>l.id===r.roomId);i&&s&&Sa(o,i,s,r.entityIds)});case"remove_placements":return this.change(o=>{let i=n(o);i&&(i.placements=i.placements.filter(s=>!r.entityIds.includes(s.entity_id)))});case"ignore_devices":return this.ignoreDevices(r.entityIds)}}ignoreDevices(e){this.change(n=>{n.settings.check_ignore=[...new Set([...n.settings.check_ignore??[],...e])]})}setDims(e){this._dims=e;try{localStorage.setItem("nextfloor.plan_dims",e?"1":"0")}catch{}}addNote(e){if(!this.isAdmin||!this.floor)return;let n=D("note");this.change((r,o)=>o.notes=[...o.notes??[],{id:n,x:Math.round(e[0]*100)/100,z:Math.round(e[1]*100)/100,text:""}]),this._note=n,this._sideOpen=!0}studioButton(){let e=this.furnitureItem?.type;return!e||!gt(e)||!G(e)?.recipe||!e.startsWith(`pack:${pn}:`)||!this.isAdmin?_:m`<button class="nf-btn nf-lib-studio" @click=${()=>this.openStudio(e)}>🛠️ ${this.t("studio_open")}</button>`}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,n)=>this.deviceToFurniture(e,n),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureToFloor(e){let[n,r]=[this._floorId,this.sel.furniture];if(!n||!r||!this.isAdmin)return;let o=structuredClone(this._doc);Wm(o,n,r,e)&&(this.setDoc(o),this._floorId=e,this.selectItem("furniture",r))}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),toFloor:e=>this.furnitureToFloor(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,n)=>this.setOpeningPreset(e,n),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),isBelowGround:e=>e.type==="window"&&this.openingIsExterior(e)&&(this.floor?.elevation??0)+e.sill<-.22,lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new gi({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:$o,storeImage:St},readPicture:Bn,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new Oi({host:this.host,floorId:()=>e._floorId,setFloorId:n=>e._floorId=n,confirm:n=>confirm(n),refresh:()=>e.requestUpdate()})}redrawQueued=!1;redrawSoon=()=>{this.redrawQueued||(this.redrawQueued=!0,setTimeout(()=>{this.redrawQueued=!1,this.requestUpdate()},30))};canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,n)=>this.toWorld(e,n),scale:this._view.scale,floorId:this._floorId,redraw:this.redrawSoon}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new ci({get hass(){return e.hass},get doc(){return e._doc},t:(n,r)=>e.t(n,r),adopt:n=>{e.setDoc(n),e._floorId=n.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:n=>e.side.notice=n,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(n,r)=>e.t(n,r),change:n=>e.change(n),replace:n=>e.setDoc(n),pickPoint:n=>e.pickPoint(n),get loadCardEditor(){return e.loadCardEditor}}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&is(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(!this.tourChecked&&this.building&&(this.tourChecked=!0,!this.building.floors.some(n=>n.rooms.length)&&bg()&&(this._tour=0)),this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let n=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=n.getBoundingClientRect(),i=l=>{this._splitRatio=Math.min(.8,Math.max(.2,(l.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:n,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let l of s.floors){let a=l.furniture.find(p=>p.id===n);if(!a)continue;let[c,u]=Fs(l,a.x,a.z,r,o);Object.assign(a,{x:c,z:u});let d=_r(l,a,i);d&&Object.assign(a,d)}})}onDeviceMoved3d(e){let{id:n,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let l=s.placements.find(u=>u.entity_id===n);if(!l)continue;let[a,c]=Fs(s,l.x,l.z,r,o);Object.assign(l,{x:a,z:c})}})}render3dBar(){if(!this.isAdmin)return _;let e=this.furnitureItem,n=this.device;if(e){let r=Io(e),o=(i,s,l=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${String(Math.round(e[i]*100)/100)}
          @change=${a=>{let c=parseFloat(a.target.value.replace(",","."));Number.isFinite(c)&&c>=l&&this.updateFurniture({[i]:Math.round(c*1e3)/1e3})}}
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
            </label>`:_}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(n){let r=X(n.entity_id),o=r==="light",i=r?So(r,this.floor?at(this.floor,n.x,n.z):2.5,o?n.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${W(this.hass,n.entity_id)}</span>
        ${o?m`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>m`<option value=${s} ?selected=${s===(n.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:_}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((n.y??i)*100)/100)}
            @change=${s=>{let l=parseFloat(s.target.value.replace(",","."));Number.isFinite(l)&&l>=0&&this.updateDevice({y:Math.round(l*1e3)/1e3})}}
          />
        </label>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:(((n.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:((n.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",n.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteItem("device",n.entity_id)}>${this.t("delete")}</button>
      </div>`}return _}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};fittingField(e,n,r){if(r==="field")return e.settings.roof.solar?.find(i=>i.id===n);if(r==="win"){let i=e.settings.roof.windows?.find(s=>s.id===n);return i?en(i):void 0}let o=e.settings.roof.chimneys?.find(i=>i.id===n);return o?yt(o,j(e).find(i=>i.key===o.face)):void 0}grab3dStart(e){let n=this._doc,r=j(n),o=null,i=(l,a,c,u,d=!1,p=!1)=>{if(!c||d)return;let h=Jo(c,e.o,e.d);!h||!qs(c,u,h.u,h.s)||o&&o.t<=h.t||(o={id:l,win:a,chimney:p,t:h.t,du:h.u-u.u,ds:h.s-u.v})};if(this._tool==="energy")for(let l of n.settings.roof.solar??[])i(l.id,!1,ke(n,l,r),l,!!l.locked);if(this._tool==="roof")for(let l of n.settings.roof.windows??[])i(l.id,!0,r.find(a=>a.key===l.face)??null,en(l),!!l.locked);if(this._tool==="roof")for(let l of n.settings.roof.chimneys??[]){let a=r.find(c=>c.key===l.face)??null;i(l.id,!1,a,yt(l,a),!!l.locked,!0)}if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,chimney:s.chimney,du:s.du,ds:s.ds,base:n,moved:!1},s.chimney?this.roof.chimneyId=s.id:s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let n=this.grab3d;if(!n)return;let r=n.base,o=this.fittingField(r,n.id,n.win?"win":n.chimney?"chimney":"field");if(!o)return;let i=ke(r,o),s=i?.unbounded?[i]:n.win||n.chimney?j(r):[...j(r),...Ke(r)],l=null;for(let p of s){let h=Jo(p,e.o,e.d);h&&Zs(p,h.u,h.s)&&(!l||h.t<l.t)&&(l={face:p,...h})}if(!l)return;let a=l.face,c=.05,u=p=>Le(Math.round(p/c)*c),d=ct(a,{...o,face:a.key,u:u(l.u-n.du),v:u(l.s-n.ds),tilt:a.flat?o.tilt??15:o.tilt});n.moved=!0,this.change(p=>{if(n.win||n.chimney){let f=n.win?p.settings.roof.windows?.find(g=>g.id===n.id):p.settings.roof.chimneys?.find(g=>g.id===n.id);f&&Object.assign(f,{face:a.key,...d});return}let h=p.settings.roof.solar?.find(f=>f.id===n.id);h&&Object.assign(h,{face:a.key,...d},a.flat&&h.tilt==null?{tilt:15}:{})},n.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
      ${this.houseTool?_:m`<div class="nf-seg nf-3d-walls">
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
    </div>`}updated(){for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())this.bg.ensureLoaded(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,n=this._doc){n&&this.history.record(n),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,n=this._doc,r=!0){let o=structuredClone(n),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?n:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(n=>n.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:n,ox:r,oy:o}=this._view;return[e[0]*n+r,e[1]*n+o]}pickPoint(e){this._pick?.(null),this._pick=e,clearTimeout(this._pickTimer),this._pickTimer=window.setTimeout(()=>this.cancelPick(),6e4),this.requestUpdate()}cancelPick(){clearTimeout(this._pickTimer),this._pick&&(this._pick=null,this.requestUpdate())}toWorld(e,n){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(n-i)/r]}localPoint(e){let n=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}fit(){let e=this.floor?.rooms.flatMap(l=>l.points)??[],n=e.length?ue(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=n.x1-n.x0+2*r,i=n.z1-n.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(n.x0+n.x1)/2*s,oy:this._size.h/2-(n.z0+n.z1)/2*s}}showPoint(e,n){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-n*r}}zoomAt(e,n,r){let{scale:o,ox:i,oy:s}=this._view,l=Math.max(8,Math.min(600,o*e)),a=l/o;this._view={scale:l,ox:n-(n-i)*a,oy:r-(r-s)*a}}snap(e,n,r=!1){if(this._guides={},r)return e;let o=uf(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:Gi/this._view.scale,skip:n});return this._guides=o.guides,o.point}onPointerDown(e){if(this._pick){let[r,o]=this.localPoint(e),i=this._pick;this.cancelPick(),i(this.toWorld(r,o));return}this._ctx=null;let n=e.target?.closest?.("[data-note]")?.getAttribute("data-note");if(n&&this._tool==="select"){this._note=n,this._sideOpen=!0;return}if(this._note&&(this._note=null),this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let r=this.localPoint(e),o=e.target;this.pressStart=r,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(o,r))},550)}}guardFixed(e){let n=this.drag;if(!n)return;let r=null;n.kind==="vertex"||n.kind==="room"?r=["room",n.roomId]:n.kind==="device"||n.kind==="aim"?r=["device",n.entityId]:n.kind==="opening"?r=["opening",n.id]:n.kind==="furniture"||n.kind==="rotate"||n.kind==="resize"?r=["furniture",n.id]:n.kind==="wallmove"?r=["wall",n.id]:n.kind==="outdoor"&&(r=["outdoor",n.id]),!(!r||!this.isFixedItem(...r))&&("moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){let i=this.drag;i&&Pg.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r={local:n,world:this.toWorld(...n),target:e.target,fine:e.altKey},o=this.pressRoute(r)??this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==po&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,n){return this.isAdmin?n:this.pan(e)}pressBackground(e){let{world:n,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(n),po;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=Nn(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(n[1]-s[1],n[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(n),po;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,n){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:n.x,bz:n.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let n=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:n,end:n}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:n,world:r,target:o}=e,i=(v,w)=>o.closest(v)?.getAttribute(w)??null,s=this._tool==="energy",l=s?i("[data-energy-device]","data-energy-device"):null;if(l)return this.pressEnergyDevice(e,l);let a=s?i("[data-solar-turn]","data-solar-turn"):null;if(a&&this.isAdmin)return{kind:"solarturn",id:a,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);let d=this._tool==="roof"?i("[data-chimney]","data-chimney"):null;if(d)return this.pressChimney(e,d);this._tool==="roof"&&(this.roof.windowId=null,this.roof.chimneyId=null);let p=s?i(".nf-energy-item","data-furniture"):null;if(p)return this.pressEnergyDevice(e,p);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let h=i("[data-plus]","data-plus");if(h?.startsWith("roof:")&&this.isAdmin)return this.splitRoofEdgeGesture(...h.split(":").slice(1));let f=i("[data-roof-vertex]","data-roof-vertex"),g=i("[data-roof-corner]","data-roof-corner"),y=i("[data-roof]","data-roof");if(f&&this.isAdmin){let[v,w]=f.split(":");return{kind:"roofvertex",id:v,index:Number(w),base:this._doc,moved:!1}}if(g&&this.isAdmin){let[v,w,x]=g.split(":");return{kind:"roofcorner",id:v,corner:[w==="1"?1:0,x==="1"?1:0],base:this._doc,moved:!1}}if(y){let v=this.roof.isFixed(this._doc.settings.roof.sections?.find(w=>w.id===y));return v&&this.roof.sectionId===y&&(this._fixedHint=!0),this.roof.sectionId=y,this.isAdmin&&!v?{kind:"roofmove",id:y,start:r,startScreen:n,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let b=this.snap(r,void 0,e.fine);return{kind:"rect",start:b,end:b,roof:!0}}pressEnergyDevice(e,n){return this.roof.solarId=null,this.selectItem("furniture",n),this.moves(e,{kind:"furniture",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,n){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&n===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);n!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=n,this.roof.sectionId=null;let l=this._doc.settings.roof.solar?.find(d=>d.id===n),a=l?ke(this._doc,l)??void 0:void 0,c=a?this.faceHit(a,o):null,u=l&&c?{du:c.u-l.u,ds:Number.isNaN(c.s)?0:c.s-l.v}:null;return this.isAdmin&&!l?.locked?{kind:"solarmove",id:n,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,n){this.roof.windowId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(l=>l.id===n),o=r?j(this._doc).find(l=>l.key===r.face):void 0,i=o?Fn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressChimney(e,n){this.roof.chimneyId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.chimneys?.find(l=>l.id===n),o=r?j(this._doc).find(l=>l.key===r.face):void 0,i=o?Fn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,chimney:!0}:this.pan(e)}pressDrawingTool(e){let n=this._tool;if(n==="rect"||n==="outdoor"||n==="hole"||n==="stairs"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:n==="outdoor",hole:n==="hole",stairs:n==="stairs"}}if(n==="polygon"||n==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(n==="opening")return this.placeOpening(this._openingPreset,e.local)?po:this.pan(e)}pressItem(e){let{local:n,world:r,target:o}=e,i=(x,k)=>o.closest(x)?.getAttribute(k)??null,s=this._doc,l=i("[data-device]","data-device");if(l&&this.isAdmin)return{kind:"device",entityId:l,start:r,startScreen:n,base:s,moved:!1};let a=i("[data-opening]","data-opening");if(a)return this.selectItem("opening",a),this.moves(e,{kind:"opening",id:a,startScreen:n,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[x,k,$]=c.split(":");return{kind:"resize",id:x,corner:[k==="1"?1:-1,$==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let d=i("[data-aim]","data-aim");if(d&&this.isAdmin)return{kind:"aim",entityId:d,base:s,moved:!1};let p=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(p)return this.selectItem("furniture",p),this.moves(e,{kind:"furniture",id:p,start:r,startScreen:n,base:s,moved:!1});let h=i("[data-vertex]","data-vertex"),f=i("[data-mid]","data-mid");if(h!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(h),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(f!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(f));let g=i("[data-wall-end]","data-wall-end");if(g&&this.isAdmin){let[x,k]=g.split(":");return{kind:"wallmove",id:x,end:k,start:r,startScreen:n,base:s,moved:!1}}let y=i("[data-free-wall]","data-free-wall");if(y)return this.selectItem("wall",y),this.moves(e,{kind:"wallmove",id:y,end:null,start:r,startScreen:n,base:s,moved:!1});let b=i("[data-plus]","data-plus");if(b?.startsWith("out:")&&this.isAdmin)return this.splitOutdoorEdgeGesture(...b.split(":").slice(1));let v=i("[data-out-vertex]","data-out-vertex");if(v&&this.isAdmin){let[x,k]=v.split(":");return{kind:"outvertex",id:x,index:Number(k),base:s,moved:!1}}let w=i("[data-outdoor]","data-outdoor");if(w&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",w),this.moves(e,{kind:"outdoor",id:w,start:r,startScreen:n,base:s,moved:!1})}splitEdgeGesture(e,n){let[r,o]=[e.points[n],e.points[(n+1)%e.points.length]],i=Xe([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((l,a)=>qa(a,e.id,n,i),s,!1),this.sel.corner=n+1,{kind:"vertex",roomId:e.id,index:n+1,base:s,moved:!0}}splitOutdoorEdgeGesture(e,n){let r=Number(n),o=this._doc,i=this.floorOf({base:o})?.outdoor.find(a=>a.id===e);if(!i)return;let[s,l]=[i.points[r],i.points[(r+1)%i.points.length]];return this.change((a,c)=>Zh(c.outdoor.find(u=>u.id===e),r,[(s[0]+l[0])/2,(s[1]+l[1])/2]),o,!1),{kind:"outvertex",id:e,index:r+1,base:o,moved:!0}}splitRoofEdgeGesture(e,n){let r=Number(n),o=this._doc;return this.change(i=>{let s=i.settings.roof.sections?.find(u=>u.id===e);if(!s)return;let l=Ea(s),[a,c]=[l[r],l[(r+1)%l.length]];hp(s,r,[(a[0]+c[0])/2,(a[1]+c[1])/2])},o,!1),{kind:"roofvertex",id:e,index:r+1,base:o,moved:!0}}pressRoom(e){let n=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return n?(n!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",n),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let n=this.localPoint(e);if(this.pressStart?Vn(n,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,n),this.pinch){this.pinchMove();return}let r=this.toWorld(...n),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:n,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,n){this._view={...this._view,ox:this._view.ox+n[0]-e[0],oy:this._view.oy+n[1]-e[1]}}live(e,n){this.change(n,e.base,!1)}floorOf(e){return e.base.floors.find(n=>n.id===this._floorId)}moveDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid,l=a=>a.moved||Vn(r,a.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||Vn(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=sf(e.start,this.snap(o,void 0,i),n.straight),this.requestUpdate();return;case"wallmove":{if(!l(e))return;e.moved=!0;let a=(this.floorOf(e)?.walls??[]).find(u=>u.id===e.id);if(!a)return;let c;if(e.end){let u=this.snap(o,void 0,i);c=e.end==="a"?{a:u,b:a.b}:{a:a.a,b:u}}else{let u=Mi(e.start,o,dn(s,i));c={a:Xe(a.a,u),b:Xe(a.b,u)}}this.live(e,(u,d)=>Object.assign((d.walls??[]).find(p=>p.id===e.id),c));return}case"vertex":{let a=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(c,u)=>{u.rooms.find(d=>d.id===e.roomId).points[e.index]=a});return}case"room":{if(!l(e))return;e.moved=!0;let a=this.floorOf(e),c=a?.rooms.find(p=>p.id===e.roomId);if(!a||!c)return;let u=this.roomDelta(c,[o[0]-e.start[0],o[1]-e.start[1]],i),d=new Set(a.placements.filter(p=>N([p.x,p.z],c.points)).map(p=>p.entity_id));this.live(e,(p,h)=>{h.rooms.find(f=>f.id===e.roomId).points=c.points.map(f=>Xe(f,u)),h.placements=a.placements.map(f=>{if(!d.has(f.entity_id))return f;let[g,y]=Xe([f.x,f.z],u);return{...f,x:g,z:y}})});return}case"opening":{if(!l(e))return;e.moved=!0;let a=this.floorOf(e),c=a?.openings.find(f=>f.id===e.id),u=c&&a?Pe(c,a.rooms,a.walls??[]):null;if(!c||!u)return;let d=a?It(a.openings,c):[c],p=!c.wall&&d.length>1&&a?zn(u.room,d):null;if(p){let f=i?.01:this._doc.settings.grid,g=Js(u.room,o)-p.width/2,y=f>0?Math.round(g/f)*f:g,b=Math.max(0,Math.min(Cr(u.room)-p.width,y));this.live(e,(v,w)=>{let x=w.openings.find($=>$.id===e.id),k=x?Nr(w.openings,u.room,x,b,p.width,()=>D("opening")):null;k&&(w.openings=k)});return}let h=this.dropOffset(u.room,u.edge,o,c.width,i);this.live(e,(f,g)=>{g.openings.find(y=>y.id===e.id).offset=h});return}case"furniture":{if(!l(e))return;e.moved=!0;let a=this.floorOf(e)?.furniture.find(h=>h.id===e.id);if(!a)return;let[c,u]=Ya([a.x,a.z],e.start,o,dn(s,i)),p=(i?null:this.snapToWall({...a,x:c,z:u}))??{x:c,z:u,rotation:a.rotation};this.live(e,(h,f)=>{Object.assign(f.furniture.find(g=>g.id===e.id),p)});return}case"resize":{e.moved=!0;let a=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!a)return;let c=Bc(a,e.corner,o,dn(s,i));this.live(e,(u,d)=>{Object.assign(d.furniture.find(p=>p.id===e.id),c)});return}case"rotate":{e.moved=!0;let a=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!a)return;let c=Xa([a.x,a.z],o,i?1:15);this.live(e,(u,d)=>{d.furniture.find(p=>p.id===e.id).rotation=c});return}case"aim":{e.moved=!0;let a=this.floorOf(e)?.placements.find(u=>u.entity_id===e.entityId);if(!a)return;let c={rotation:Xa([a.x,a.z],o,i?1:5)};this.live(e,(u,d)=>{Object.assign(d.placements.find(p=>p.entity_id===e.entityId),c)});return}case"device":{if(!l(e))return;e.moved=!0;let a=this.floorOf(e)?.placements.find(d=>d.entity_id===e.entityId);if(!a)return;let[c,u]=Ya([a.x,a.z],e.start,o,dn(s,i));this.live(e,(d,p)=>{Object.assign(p.placements.find(h=>h.entity_id===e.entityId),{x:c,z:u})});return}case"outdoor":{if(!l(e))return;e.moved=!0;let a=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!a)return;let c=Mi(e.start,o,dn(s,i));this.live(e,(u,d)=>{d.outdoor.find(p=>p.id===e.id).points=a.points.map(p=>Xe(p,c))});return}case"outvertex":{e.moved=!0;let a=this.snap(o,void 0,i),c=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!c)return;this.live(e,(u,d)=>{let p=d.outdoor.find(h=>h.id===e.id);p&&(p.points=lf(c.points,e.index,a))});return}case"bgmove":e.moved=!0,this.live(e,(a,c)=>{c.background&&([c.background.x,c.background.z]=Xe([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let a=this.floor?.background,c=a?this.bg.picture(a.image_id):void 0;if(!a||!c)return;let u=Nn(a,c.aspect),d=zh(e.rot,e.start,Math.atan2(o[1]-u[1],o[0]-u[0]),n.straight);this.live(e,(p,h)=>{h.background&&(h.background.rotation=d)});return}case"bgscale":{e.moved=!0;let a=this.floor?.background,c=a?this.bg.picture(a.image_id):void 0;if(!a||!c)return;let u=Math.max(.5,Le(Th(a,c.aspect,o)[0]));this.live(e,(d,p)=>{p.background&&(p.background.width=u)});return}default:this.moveRoofDrag(e,n)}}moveRoofDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!Vn(r,e.startScreen))return;e.moved=!0;let l=Mi(e.start,o,dn(s,i)),a=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!a)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(g=>g.id===e.id);if(!u)return;let[d,p]=Xe([a.x0,a.z0],l),[h,f]=Xe([a.x1,a.z1],l);Object.assign(u,{x0:d,x1:h,z0:p,z1:f}),a.points&&(u.points=a.points.map(g=>Xe(g,l)))});return}case"roofvertex":{e.moved=!0;let l=this.snap(o,void 0,i);this.live(e,a=>{let c=a.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=Xe(l,[0,0]),Object.assign(c,Pt(c.points)))});return}case"roofcorner":{e.moved=!0;let l=this.snap(o,void 0,i);this.live(e,a=>{let c=a.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=Le(l[0]),c[e.corner[1]?"z1":"z0"]=Le(l[1]))});return}case"solarturn":{e.moved=!0;let l=e.base.settings.roof.solar?.find(u=>u.id===e.id),a=l?ke(e.base,l):null;if(!l||!a)return;let c=Dr(e.base,l,af(Tr(a,l),o,i?1:15));this.live(e,u=>{let d=u.settings.roof.solar?.find(p=>p.id===e.id);d&&Object.assign(d,c)});return}case"solarmove":this.moveSolar(e,n);return;default:return}}moveSolar(e,n){let{local:r,world:o,fine:i}=n;if(!e.moved&&!Vn(r,e.startScreen))return;e.moved=!0;let s=this.fittingField(e.base,e.id,e.win?"win":e.chimney?"chimney":"field"),l=e.win||e.chimney?j(e.base):[...j(e.base),...this._floorId?Ke(e.base,this._floorId):[]],a=s?ke(e.base,s,l):null;if(!s||!a)return;let c=i?.01:.05,u=y=>Le(Math.round(y/c)*c),d=a.unbounded?null:js(l,o),p=a,h,f;if(d&&e.grab)p=d.face,h=u(d.u-e.grab.du),f=Number.isNaN(d.s)?d.face.key===s.face?s.v:Math.max(0,d.face.ls-1.5):u(d.s-e.grab.ds);else{let[y,b]=[o[0]-e.start[0],o[1]-e.start[1]],v=[a.es[0],a.es[2]];h=u(s.u+y*a.eu[0]+b*a.eu[2]),f=u(s.v+(y*v[0]+b*v[1])/(v[0]*v[0]+v[1]*v[1]||1))}let g=ct(p,{...s,face:p.key,u:h,v:f,tilt:p.flat?s.tilt??15:s.tilt});this.live(e,y=>{if(e.win||e.chimney){let v=e.win?y.settings.roof.windows?.find(w=>w.id===e.id):y.settings.roof.chimneys?.find(w=>w.id===e.id);v&&Object.assign(v,{face:p.key,...g});return}let b=y.settings.roof.solar?.find(v=>v.id===e.id);b&&Object.assign(b,{face:p.key,...g},p.flat&&b.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&Pg.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let r=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,i]=n.start,[s,l]=n.end;if(Math.abs(s-o)>=.2&&Math.abs(l-i)>=.2){let a=[Math.min(o,s),Math.min(i,l)],c=[Math.max(o,s),Math.max(i,l)],u=[a,[c[0],a[1]],c,[a[0],c[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(a,c):n.stairs?this.addStairs(a,c):n.roof?this.roof.addSection(a,c):this.addRoom(u)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[n,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),n,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[n,r]=e;return{dist:Math.hypot(n[0]-r[0],n[1]-r[1]),mid:[(n[0]+r[0])/2,(n[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,n,r){if(r)return n;let o=this._doc.settings.grid,i=[Math.round(n[0]/o)*o,Math.round(n[1]/o)*o],l=Gi/this._view.scale;this._guides={};for(let a of this.floor?.rooms??[])if(a.id!==e.id)for(let c of a.points)for(let u of e.points){let d=Math.hypot(u[0]+n[0]-c[0],u[1]+n[1]-c[1]);d<l&&(l=d,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>N(e,o.points)).sort((o,i)=>we(o.points)-we(i.points))[0]?.id??null}addDraftPoint(e,n){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-n[0],s-n[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&we(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let n=this._draft[this._draft.length-1];if(!n||!(this._measureLen>0))return;let r=_n(n,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[n,r]=this._rectSize;n>.1&&r>.1&&(this.addRoom([e,_n(e,n,"right"),_n(_n(e,n,"right"),r,"down"),_n(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let n=this.sel.wall;n&&this.change((r,o)=>Object.assign((o.walls??[]).find(i=>i.id===n),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((n,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let n=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===n),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((n,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;if(e.key==="Escape"&&this._pick){e.preventDefault(),this.cancelPick();return}let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Ig,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=Ig[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="?"&&!r)this._keys=!this._keys;else if(e.key==="Escape"){if(this._keys){this._keys=!1;return}if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let n=structuredClone(this._doc);n.floors=n.floors.filter(r=>r.id!==e.id),this.setDoc(n),this._floorId=n.floors[0]?.id??null,this.sel.room=null}faceHit(e,n){return e.wall?{u:(n[0]-e.o[0])*e.eu[0]+(n[1]-e.o[2])*e.eu[2],s:Number.NaN}:Fn(e,n)}planLayers(e,n){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return R`${Sh(r,this._doc.settings)} ${kh(r,this.bg,e)} ${vf(r,this._size)} ${kf(r)} ${n?xf(r,n):_}
      ${e?R`${$f(r,e,this.sel.outdoor)} ${Mf(r,e,this.sel.room,this.sel.edge)} ${bf(r,e,this.sel.furniture)}
        ${Ef(r,e,this.sel.wall)} ${n?Pf(r,e,n,this.sel.opening):_} ${Rf(r,e)}
        ${this._tool==="select"?yf(r,e,this.sel.device):_}
        ${this._tool==="select"?wf(r,e,this._note):_}
        ${this._dims?Tf(r,e):_}
        ${i?Ff(r,o,this.sel.corner):_}
        ${Sf(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Af(r,o):_}
        ${yh(r,e)}`:_}
      ${this._tool==="roof"?R`${fa(r,this.roof)}${_h(r,this.roof)}${vh(r,this.roof)}`:this._tool==="energy"?R`${fa(r,this.roof)}${gh(r,this.roof)}${wh(r,this.floor,this._doc.energy.routes??[],this._routeDraft)}${bh(r,this.floor,this.sel.furniture)}`:_}
      ${hf(r,s,this._tool,this._draft,this._cursor)} ${df(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor,{wall_exterior:n,wall_interior:r}=this._doc.settings;return e?fe(e.rooms,{exterior:n,interior:r},e.walls??[]).walls:[]}edgeParts(e,n){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===n).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,n){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&n(i)})}edgeActions(){return{openWall:(e,n)=>this._wallView={roomId:e.id,edge:n},partsOf:(e,n)=>this.edgeParts(e,n),isOuter:(e,n)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===n)),setHeight:(e,n,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,n).length;this.changeRoom(e,l=>Hf(l,n,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(l=>l.room_id===e.id&&l.edge===n)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===n)||i.push({room_id:e.id,edge:n,t0:0,t1:0}),this.isAdmin&&this.change((s,l)=>{for(let a of i){let c=l.rooms.find(u=>u.id===a.room_id);c&&tl(c,a.edge,o)}})},setSlope:(e,n,r,o)=>this.changeRoom(e,i=>Of(i,n,r,o)),clearSlope:(e,n)=>this.changeRoom(e,r=>Lf(r,n,this.floor?.height??2.5)),setThickness:(e,n,r,o,i)=>this.changeRoom(e,s=>Wf(s,n,r,o,i)),arc:this.arcActions(),cut:(e,n,r)=>{let o=this.edgeParts(e,n);this.changeRoom(e,i=>Cf(i,n,r,o))},moveCut:(e,n,r,o)=>{let i=this.edgeParts(e,n);this.changeRoom(e,s=>Nf(s,n,r,o,i))},join:(e,n,r,o)=>this.changeRoom(e,i=>Bf(i,n,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let n=Lm(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=bl(r.floors,n),this.setDoc(r),this._floorId=n.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let n=Xn(this._doc,e,this.hass?.areas);if(n.length===0)return;let r=Nc(e,n,()=>D("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}duplicateFloor(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=Bm(this._doc,n,this.t("floor_copy_name",{name:n.name}),e),o=structuredClone(this._doc);o.floors=bl(o.floors,r),this.setDoc(o),this._floorId=r.id,this.sel.room=null,this.side.floorCopy=null,this.fit()}moveFloor(e){let n=this._floorId;if(!n)return;let r=Hm(this._doc.floors,n,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},print:()=>this.printPlan(),addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),duplicateFloor:e=>this.duplicateFloor(e),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:n=>this.selectItem("room",n),patch:n=>this.updateRoom(n),setArea:n=>this.setArea(n),setRect:(n,r)=>this.setRect(n,r),setCorner:(n,r,o)=>this.setPoint(n,r,o),removeCorner:n=>this.deleteVertex(n),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:n=>this.applyPackage(e,n),openSpots:()=>{let n=this.hass?be(this.hass,e).filter(r=>r.startsWith("light.")):[];this.side.spots=Gm(e,n)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:Uf(this.host,e,this.edgeActions()),climate:bp(this.host,e,n=>this.updateRoom(n)),corner:this.sel.corner}}applyPackage(e,n){if(!this.isAdmin)return;let r=Uu(e,n,()=>D("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let n=this.side.spots;if(!n||!this.isAdmin)return;let r=Wi(e,n);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,n){if(!this.floor)return;let r=Vh(e,n);this.change((o,i)=>i.walls=[...i.walls??[],r]),this.selectItem("wall",r.id)}addHole(e,n){if(!this.floor)return;let r=Uh(e,n);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addStairs(e,n){let r=this.floor;if(!r)return;let[o,i]=[n[0]-e[0],n[1]-e[1]],s=$a("stairs",this._doc,r,[(e[0]+n[0])/2,(e[1]+n[1])/2]),l=o>i*1.2;Object.assign(s,{w:Math.round((l?i:o)*1e3)/1e3,d:Math.round((l?o:i)*1e3)/1e3,rotation:l?90:0}),this.change((a,c)=>c.furniture.push(s)),this.selectItem("furniture",s.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let n=jh(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let n=Yh(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}addRoom(e){if(!this.floor)return;let n=qp(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((n,r)=>Xp(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let n=Yp(e);this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id}deleteVertex(e){let n=this.room;n&&(this.change((r,o)=>Qp(o,n.id,e)),this.sel.corner=null)}nudgeSelection(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?Fm(r,i,e,n):qn;return s===qn?!1:(s!==Hi&&this.change((l,a)=>s.apply(a)),!0)}addFurniture(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=this.room,o=$a(e,this._doc,n,r?_e(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let n=this.furnitureItem;n&&this.isAdmin&&this.updateFurniture({rotation:Qh(n.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=Xh(e);this.change((r,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}vehicleToSpot(e){if(!this.isAdmin)return;let n=Jh(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(n)}),this.selectItem("furniture",n.id)}deviceToFurniture(e,n){if(!this.isAdmin)return;let r=ep(e,n);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let n=e.entity;if(!this.isAdmin||!n||n==="none")return;let r=tp(e,n);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===n)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",n)}placeDevices(e){let n=this.room;!n||e.length===0||!this.isAdmin||this.change((r,o)=>Sa(r,o,n,e))}removeDevice(e){this.change(n=>np(n,e))}centreDevice(){let e=this.device,n=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!n)return;let[r,o]=rp(n);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let n=this.floor;if(!n)return;let r=tf(e,n.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(l=>l.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,n){!this.isAdmin||!e&&!n||(this.change(r=>Pm(r,this.shiftScope(),e,n)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Im(e,this.shiftScope()))}setArea(e){let n=this.room;n&&this.updateRoom(Za(n,e,this.hass?.areas??{}))}setRect(e,n){let r=this.room,o=r?Jp(r,e,n):null;o&&this.updateRoom({points:o})}setPoint(e,n,r){let o=this.room,i=o?ef(o,e,n,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,n){this._openingPreset=n,this.updateOpening(ip(e,n))}pressRoute(e){let n=this._routeDraft;if(!n||this._tool!=="energy"||!this._floorId||n.points.length>=Ic)return;let[r,o]=this.snap(e.world,void 0,e.fine).map(i=>Math.round(i*1e3)/1e3);return this._routeDraft={...n,points:[...n.points,{floor_id:this._floorId,x:r,z:o}]},po}routeActions(){let e=n=>this.change(r=>{r.energy.routes=n(r.energy.routes??[]),r.energy.routes.length||delete r.energy.routes});return{draft:this._routeDraft,start:n=>this._routeDraft={key:n,points:[...this._doc.energy.routes?.find(r=>r.key===n)?.points??[]]},undoPoint:()=>this._routeDraft&&(this._routeDraft={...this._routeDraft,points:this._routeDraft.points.slice(0,-1)}),cancel:()=>this._routeDraft=null,finish:()=>{let n=this._routeDraft;this._routeDraft=null,!(!n||!this.isAdmin)&&e(r=>{let o=r.find(s=>s.key===n.key),i=r.filter(s=>s.key!==n.key);return n.points.length?[...i,{key:n.key,points:n.points,...o?.cable?{cable:!0}:{}}]:i})},clear:n=>this.isAdmin&&e(r=>r.filter(o=>o.key!==n)),setCable:(n,r)=>this.isAdmin&&e(o=>o.map(i=>i.key===n?{...i,cable:r}:i))}}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,n)=>this.openEnergyDevice(e,n),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,n){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",n.id),this.showPoint(n.x,n.z)}addEnergyDevice(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Am(e,this._doc,n,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Rm({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:n=>this.addEnergyDevice(n),setField:(n,r,o)=>this.change(i=>{let s=i.floors.flatMap(l=>l.furniture).find(l=>l.id===n);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return $m(this.roofDeps(),e);let n=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&Ce.includes(o.type)):void 0;if(n)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${lo(this.host,n,this.furnitureActions())}`;let r=this.energyActions();return m`${ch(this.host,r)}${xm(this.roofDeps())}${uh(this.host,r)}${fh(this.host,this.routeActions())}${dh(this.host,r)}${hh(this.host)}`}fixItem(e,n,r){if(e)switch(n){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,n){return Fo(this.fixItem(this.floor,e,n),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,n){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,n);this.change((o,i)=>{let s=this.fixItem(i,e,n);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,n){return!this.isFixedItem(e,n)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,n){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...n),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),l=o("data-opening"),a=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),d=o("data-room")??this.roomAt(r);if(s?i=["device",s]:l?i=["opening",l]:a?i=["furniture",a]:c?i=["wall",c]:u&&!d?i=["outdoor",u]:d&&(i=["room",d]),!i){this._ctx=null;return}let[p,h]=i;this.selectItem(p,h),(p==="opening"||p==="furniture")&&(this.sel.room=this.sel.room??d),this._ctx={x:n[0],y:n[1],kind:p,id:h,at:r}}deleteItem(e,n){if(e==="device"){if(!this.confirmFixedDelete(e,n))return;this.removeDevice(n),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return _;let n=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=l=>()=>{this._ctx=null,l()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${l=>l.stopPropagation()} @contextmenu=${l=>l.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${n?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:_}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:_}
      ${e.at?m`<button @click=${s(()=>this.addNote(e.at))}>✎ ${this.t("note_add")}</button>`:_}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,n){if(!this.isAdmin)return _;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:_;let r=this.isFixedItem(e,n);return m`<button class="nf-btn nf-fix" aria-pressed=${r} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,n)}>
      ${r?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}dropOffset(e,n,r,o,i){let s=e.points[n],l=e.points[(n+1)%e.points.length],a=Math.hypot(l[0]-s[0],l[1]-s[1])||1,c=((r[0]-s[0])*(l[0]-s[0])+(r[1]-s[1])*(l[1]-s[1]))/a;return op(a,c,o,i?.01:this._doc.settings.grid)}selectItem(e,n){this.side.notice=null,n&&(this._sideOpen=!0),this.sel.select(e,n,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){let e=this.sel.opening?this.floor?.openings.find(o=>o.id===this.sel.opening):void 0;if(!e?.front||!this.floor)return e;let n=this.floor.rooms.find(o=>o.id===e.room_id),r=n?zn(n,It(this.floor.openings,e)):null;return r?{...e,width:r.width}:e}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let g of r.walls??[]){let y=Pe({room_id:"",edge:0,wall:g.id},r.rooms,r.walls??[]);if(!y)continue;let[b,v]=this.toScreen(g.a),[w,x]=this.toScreen(g.b),k=(w-b)**2+(x-v)**2||1,$=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(x-v))/k)),A=Math.hypot(n[0]-b-(w-b)*$,n[1]-v-(x-v)*$),F=[(g.a[0]+g.b[0])/2,(g.a[1]+g.b[1])/2],T=r.rooms.find(I=>I.points.length>=3&&N(F,I.points));A<Gi*2.2&&(!o||A-1<o.d)&&(o={room:y.room,edge:0,d:A-1,wall:g.id,roomId:T?.id??g.id})}for(let g of r.rooms)for(let y=0;y<g.points.length;y++){let[b,v]=this.toScreen(g.points[y]),[w,x]=this.toScreen(g.points[(y+1)%g.points.length]),k=(w-b)**2+(x-v)**2||1,$=Math.min(1,Math.max(0,((n[0]-b)*(w-b)+(n[1]-v)*(x-v))/k)),A=Math.hypot(n[0]-b-(w-b)*$,n[1]-v-(x-v)*$),F=A-(g.id===this.sel.room?.5:0);A<Gi*2.2&&(!o||F<o.d)&&(o={room:g,edge:y,d:F})}if(!o)return!1;let{room:i,edge:s,wall:l}=o,a=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-a[0],c[1]-a[1]),d=bn[e],p=d.type;if(d.style==="glass_wall"&&!l){let g=Js(i,this.toWorld(...n)),y=Qs(i,g-d.width/2,d.width);if(y&&y.length>1){let b=D("front"),v=y.map(w=>({id:D("opening"),room_id:o.roomId??i.id,edge:w.edge,offset:w.offset,width:w.width,front:b,type:p,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...Do.has(d.style)?{}:{style:d.style},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null}));return this.change((w,x)=>x.openings.push(...v)),this._tool="select",this.selectItem("opening",v[0].id),!0}}let h=Le(Math.min(d.width,Math.max(.3,u-.1))),f={id:D("opening"),room_id:o.roomId??i.id,edge:s,...l?{wall:l}:{},offset:this.dropOffset(i,s,this.toWorld(...n),h,!1),width:h,type:p,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...d.style&&!Do.has(d.style)?{style:d.style}:{},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null};return this.change((g,y)=>y.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let n=this.sel.opening;this.change((r,o)=>{let i=o.openings.find(u=>u.id===n);if(!i)return;let s=It(o.openings,i),l=i.wall?null:o.rooms.find(u=>u.id===i.room_id),a=l&&i.type==="window"&&i.style==="glass_wall"&&(e.width!=null||e.offset!=null),c=a&&l?zn(l,s):null;if(a&&l&&c){let u=Math.max(.3,e.width??c.width),d=c.from;e.width!=null&&(d+=(c.width-u)/2),e.offset!=null&&(d+=e.offset-i.offset),d=Math.max(0,Math.min(Cr(l)-u,d));let p=Nr(o.openings,l,{...i,...e},d,u,()=>D("opening"));p&&(o.openings=p);return}for(let u of s)Object.assign(u,e)})}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((n,r)=>{let o=r.openings.find(s=>s.id===e),i=new Set((o?It(r.openings,o):[o]).map(s=>s?.id));r.openings=r.openings.filter(s=>!i.has(s.id))}),this.sel.opening=null)}snapToWall(e){return this.floor?_r(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let n=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===n),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((n,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let n=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===n),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:n,gaps:r}=_u(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=bu(r);this.change((i,s)=>{s.rooms=n,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:U(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}updateFloor(e){this.change((n,r)=>Object.assign(r,e))}updateRoom(e){let n=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===n),e))}render(){wp(this._doc.settings.units);let e=this.floor,n=e?fe(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${Zp(this.host,this.lib.preview)}
      ${this._wallView?m`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${()=>this._wallView=null}></nf-wall-view>`:_}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow?m`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!e} @change=${r=>{this._tool=r.target.value,this._draft=[],this._cursor=null,this._sideOpen=this._tool!=="select"}}>
                  ${zg.filter(r=>this.isAdmin||r==="select").map(r=>m`<option value=${r} ?selected=${this._tool===r}>${this.t(`tool_${r}`)}</option>`)}
                </select>`:_}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${zg.map(r=>m`<button
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
              ${this.isAdmin?m`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:_}
              <button aria-pressed=${this._dims} title=${this.t("plan_dims_hint")} @click=${()=>this.setDims(!this._dims)}>📏 ${this.t("plan_dims")}</button>
            </div>
            ${n?.warnings.length?m`<span class="nf-warn">${this.t("overlap_warning")}</span>`:_}
          </div>
          <div class="nf-stage-pair ${this._split?"nf-split":""}" style=${this._split&&!this.narrow?`--nf-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool?m`<div class="nf-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:_}
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
            ${this.isAdmin?vg((r,o)=>this.t(r,o),this._tour,r=>{this._tour=r,r===null&&yg()}):_}
            ${this._keys?wg(r=>this.t(r),()=>this._keys=!1):_}
          </div>
          ${this._split&&!this.narrow?m`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:_}
          ${this._split?this.render3d():_}
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
        ${this.sel.furniture||this.sel.device||this.sel.opening?m`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:_}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:m`<aside class="nf-side">${this.renderPinRow()}${this.safeSide(e)}</aside>`}safeSide(e){try{return this.renderSide(e)}catch(n){return console.error("NextFloor: the side bar could not be drawn",n),m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        <p class="nf-note">${this.t("side_failed",{error:n instanceof Error?n.message:String(n)})}</p>`}}renderPinRow(e=!1){return!this._split||this.narrow?_:m`<div class="nf-pin-row">
      ${e?m`<button class="nf-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:_}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let n=this.room,r=this.isAdmin;if(this._tool==="roof")return fm(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return this._studio?og(this.host,this._studio,{change:s=>this._studio&&(this._studio={...this._studio,recipe:s,error:null}),save:()=>{this.saveStudio()},close:()=>this._studio=null}):m`${this.furnitureItem?m`${lo(this.host,this.furnitureItem,this.furnitureActions())}${this.studioButton()}`:_} ${jp(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?lo(this.host,this.furnitureItem,this.furnitureActions()):this.opening?cl(this.host,this.opening,this.openingActions()):this.device?rl(this.host,this.device,this.deviceActions()):this.outdoorArea?Ma(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?Ra(this.host,this.freeWall,this.freeWallActions()):null,i=this._note?e?.notes?.find(s=>s.id===this._note):void 0;return i?m`<button class="nf-btn nf-back" @click=${()=>this._note=null}>‹ ${this.t("back_to_floor")}</button>
        ${zf(this.host,i,{patch:s=>this.change((l,a)=>Object.assign(a.notes.find(c=>c.id===i.id),s)),remove:()=>{this.change((s,l)=>l.notes=(l.notes??[]).filter(a=>a.id!==i.id)),this._note=null}})}`:o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${wl(this.host,this.side,n,this.roomActions(n))} ${Ta(this.host,this.side,n,this.deviceListActions())}`:m`
      ${r?_:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${this._check?ig(this.host,mg(this._doc,this.hass),{fix:s=>this.fixFinding(s),ignore:s=>this.ignoreDevices(s),resetIgnored:()=>this.change(s=>s.settings.check_ignore=null),close:()=>this._check=!1}):r?sg(this.host,()=>this._check=!0):_}
      ${Vm(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?lp(this.host,this.measureState(),this.measureActions()):this.freeWall?Ra(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?Ma(this.host,this.outdoorArea,this.outdoorActions()):this.opening?cl(this.host,this.opening,this.openingActions()):this.furnitureItem?lo(this.host,this.furnitureItem,this.furnitureActions()):this.device?rl(this.host,this.device,this.deviceActions()):n?m`${wl(this.host,this.side,n,this.roomActions(n))} ${Ta(this.host,this.side,n,this.deviceListActions())}`:e?qm(this.host,e,{select:s=>this.selectItem("room",s)}):_}
      ${r?od(this.host,()=>this.paneView()):_} ${r?rd(this.host,()=>this.groundView()):_} ${r?nd(this.host):_}
      ${ph(this.host)}
      ${r&&!0?id(this.host):_} ${r?sd(this.host,this._doc):_} ${r?dd(this.host):_}
      ${e&&r?Ih(this.host,this.bg,e):_} ${r?Xd(this.host,this.settingsActions):_}
      ${r?Dd(this.host,this.backup):_}
    `}openingIsExterior(e){let n=this.floor,r=n?Pe(e,n.rooms,n.walls??[]):null;if(!n||!r)return!1;let o=fe(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]);return zt(o.walls,e,r)?.wall.exterior??!1}groundView(){let e=this.paneView();if(!e)return alert(this.t("floor_start_view_need_pane")),null;let n=this.floor?.elevation??0;return e.target?{...e,target:{...e.target,y:Le(e.target.y+n)}}:e}paneView(){let n=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!n)return null;let r=n.target;return{theta:Le(n.theta),phi:Le(n.phi),radius:Le(n.radius),...r?{target:{x:Le(r.x),y:Le(r.y),z:Le(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let n of this._doc.floors)for(let r of n.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[je,ut,Ym]};customElements.get("nf-editor")||customElements.define("nf-editor",Al);export{Al as NfEditor};
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
