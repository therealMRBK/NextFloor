/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var kd=0,Uu=1,Vd=2;var Eo=1,Gd=2,Mr=3,oi=0,Qt=1,Mt=2,ai=0,li=1,pt=2,Bu=3,Ro=4,Hd=5;var Ts=100,Wd=101,Xd=102,qd=103,Yd=104,$d=200,Kd=201,Zd=202,Jd=203,zu=204,ku=205,jd=206,Qd=207,ep=208,tp=209,np=210,ip=211,sp=212,rp=213,op=214,Wa=0,Xa=1,qa=2,lr=3,Ya=4,$a=5,Ka=6,Za=7,gl=0,ap=1,lp=2,Xn=0,Vu=1,Gu=2,Hu=3,Wu=4,Xu=5,qu=6,Yu=7,vu="attached",cp="detached",$u=300,$i=301,As=302,xl=303,bl=304,Co=306,Wn=1e3,fn=1001,cr=1002,Nt=1003,_l=1004;var Es=1005;var Ot=1006,Sr=1007;var qn=1008;var yn=1009,Ku=1010,Zu=1011,wr=1012,yl=1013,Yn=1014,En=1015,$n=1016,vl=1017,Ml=1018,Tr=1020,Ju=35902,ju=35899,Qu=1021,eh=1022,Rn=1023,ei=1026,Ki=1027,Sl=1028,wl=1029,Zi=1030,Tl=1031;var Al=1033,Io=33776,Po=33777,Lo=33778,Fo=33779,El=35840,Rl=35841,Cl=35842,Il=35843,Pl=36196,Ll=37492,Fl=37496,Dl=37488,Nl=37489,Do=37490,Ol=37491,Ul=37808,Bl=37809,zl=37810,kl=37811,Vl=37812,Gl=37813,Hl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,$l=37819,Kl=37820,Zl=37821,Jl=36492,jl=36494,Ql=36495,ec=36283,tc=36284,No=36285,nc=36286;var fs=2300,ds=2301,Va=2302,Mu=2303,Su=2400,wu=2401,Tu=2402,up=2500;var th=0,Oo=1,Ar=2,hp=3200;var Uo=0,fp=1,Ii="",vt="srgb",dn="srgb-linear",io="linear",dt="srgb";var Ga=7680;var dp=519,pp=512,mp=513,gp=514,ic=515,xp=516,bp=517,sc=518,_p=519,nh=35044,ih=35048;var sh="300 es",Gn=2e3,ur=2001;function yg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){let i=hr("canvas");return i.style.display="block",i}var Zf={},fr=null;function so(...i){let e="THREE."+i.shift();fr?fr("log",e,...i):console.log(e,...i)}function vp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=vp(i);let e="THREE."+i.shift();if(fr)fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=vp(i);let e="THREE."+i.shift();if(fr)fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hs(...i){let e=i.join(" ");e in Zf||(Zf[e]=!0,Ie(...i))}function Mp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sp={[Wa]:Xa,[qa]:Ka,[Ya]:Za,[lr]:$a,[Xa]:Wa,[Ka]:qa,[Za]:Ya,[$a]:lr},ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=1234567,to=Math.PI/180,ps=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function rh(i,e){return(i%e+e)%e}function Mg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sg(i,e,t){return i!==e?(t-i)/(e-i):0}function no(i,e,t){return(1-t)*i+t*e}function wg(i,e,t,n){return no(i,e,1-Math.exp(-t*n))}function Tg(i,e=1){return e-Math.abs(rh(i,e*2)-e)}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cg(i,e){return i+Math.random()*(e-i)}function Ig(i){return i*(.5-Math.random())}function Pg(i){i!==void 0&&(Jf=i);let e=Jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(i){return i*to}function Fg(i){return i*ps}function Dg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ng(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Og(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ug(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oh={DEG2RAD:to,RAD2DEG:ps,generateUUID:Hn,clamp:tt,euclideanModulo:rh,mapLinear:Mg,inverseLerp:Sg,lerp:no,damp:wg,pingpong:Tg,smoothstep:Ag,smootherstep:Eg,randInt:Rg,randFloat:Cg,randFloatSpread:Ig,seededRandom:Pg,degToRad:Lg,radToDeg:Fg,isPowerOfTwo:Dg,ceilPowerOfTwo:Ng,floorPowerOfTwo:Og,setQuaternionFromProperEuler:Ug,normalize:xt,denormalize:Vn},hh=class hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var Oe=hh,Sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let _=Math.acos(g),M=Math.sin(_);p=Math.sin(p*_)/M,a=Math.sin(a*_)/M,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fh=class fh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fh.prototype.isVector3=!0;var k=fh,Zc=new k,jf=new Sn,dh=class dh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],_=s[1],M=s[4],b=s[7],v=s[2],S=s[5],E=s[8];return r[0]=o*x+a*_+l*v,r[3]=o*g+a*M+l*S,r[6]=o*p+a*b+l*E,r[1]=c*x+h*_+u*v,r[4]=c*g+h*M+u*S,r[7]=c*p+h*b+u*E,r[2]=f*x+d*_+m*v,r[5]=f*g+d*M+m*S,r[8]=f*p+d*b+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jc.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jc.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var We=dh,Jc=new We,Qf=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bg(){let i={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=ar(s.r),s.g=ar(s.g),s.b=ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dn]:{primaries:e,whitePoint:n,transfer:io,toXYZ:Qf,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Qf,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}var Je=Bg();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,Ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hs===void 0&&(Hs=hr("canvas")),Hs.width=e.width,Hs.height=e.height;let s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zg=0,dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jc(s[o].image)):r.push(jc(s[o]))}else r=jc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var kg=0,Qc=new k,Xt=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fn,s=fn,r=Ot,o=qn,a=Rn,l=yn,c=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Hn(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=$u;Xt.DEFAULT_ANISOTROPY=1;var ph=class ph{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,b=(d+1)/2,v=(p+1)/2,S=(h+f)/4,E=(u+x)/4,y=(m+g)/4;return M>b&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=E/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=y/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=E/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;var bt=ph,ja=class extends ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Xt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ml=class ml{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ml().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vg,e,Gg)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Oi.crossVectors(n,vn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Oi.crossVectors(n,vn)),Oi.normalize(),ha.crossVectors(vn,Oi),s[0]=Oi.x,s[4]=ha.x,s[8]=vn.x,s[1]=Oi.y,s[5]=ha.y,s[9]=vn.y,s[2]=Oi.z,s[6]=ha.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],M=n[7],b=n[11],v=n[15],S=s[0],E=s[4],y=s[8],w=s[12],R=s[1],T=s[5],L=s[9],I=s[13],C=s[2],F=s[6],N=s[10],U=s[14],V=s[3],z=s[7],B=s[11],H=s[15];return r[0]=o*S+a*R+l*C+c*V,r[4]=o*E+a*T+l*F+c*z,r[8]=o*y+a*L+l*N+c*B,r[12]=o*w+a*I+l*U+c*H,r[1]=h*S+u*R+f*C+d*V,r[5]=h*E+u*T+f*F+d*z,r[9]=h*y+u*L+f*N+d*B,r[13]=h*w+u*I+f*U+d*H,r[2]=m*S+x*R+g*C+p*V,r[6]=m*E+x*T+g*F+p*z,r[10]=m*y+x*L+g*N+p*B,r[14]=m*w+x*I+g*U+p*H,r[3]=_*S+M*R+b*C+v*V,r[7]=_*E+M*T+b*F+v*z,r[11]=_*y+M*L+b*N+v*B,r[15]=_*w+M*I+b*U+v*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],_=l*d-c*f,M=a*d-c*u,b=a*f-l*u,v=o*d-c*h,S=o*f-l*h,E=o*u-a*h;return t*(x*_-g*M+p*b)-n*(m*_-g*v+p*S)+s*(m*M-x*v+p*E)-r*(m*b-x*S+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],_=t*a-n*o,M=t*l-s*o,b=t*c-r*o,v=n*l-s*a,S=n*c-r*a,E=s*c-r*l,y=h*x-u*m,w=h*g-f*m,R=h*p-d*m,T=u*g-f*x,L=u*p-d*x,I=f*p-d*g,C=_*I-M*L+b*T+v*R-S*w+E*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=(a*I-l*L+c*T)*F,e[1]=(s*L-n*I-r*T)*F,e[2]=(x*E-g*S+p*v)*F,e[3]=(f*S-u*E-d*v)*F,e[4]=(l*R-o*I-c*w)*F,e[5]=(t*I-s*R+r*w)*F,e[6]=(g*b-m*E-p*M)*F,e[7]=(h*E-f*b+d*M)*F,e[8]=(o*L-a*R+c*y)*F,e[9]=(n*R-t*L-r*y)*F,e[10]=(m*S-x*b+p*_)*F,e[11]=(u*b-h*S-d*_)*F,e[12]=(a*w-o*T-l*y)*F,e[13]=(t*T-n*w+s*y)*F,e[14]=(x*M-m*v-g*_)*F,e[15]=(h*v-u*M+f*_)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,_=l*c,M=l*h,b=l*u,v=n.x,S=n.y,E=n.z;return s[0]=(1-(x+p))*v,s[1]=(d+b)*v,s[2]=(m-M)*v,s[3]=0,s[4]=(d-b)*S,s[5]=(1-(f+p))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(m+M)*E,s[9]=(g-_)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),l=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);let c=1/o,h=1/a,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Gn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Gn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ur)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Gn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ur)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ml.prototype.isMatrix4=!0;var Xe=ml,Ws=new k,Un=new Xe,Vg=new k(0,0,0),Gg=new k(1,1,1),Oi=new k,ha=new k,vn=new k,td=new Xe,nd=new Sn,ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hg=0,id=new k,Xs=new Sn,mi=new Xe,fa=new k,Hr=new k,Wg=new k,Xg=new Sn,sd=new k(1,0,0),rd=new k(0,1,0),od=new k(0,0,1),ad={type:"added"},qg={type:"removed"},qs={type:"childadded",child:null},eu={type:"childremoved",child:null},Tt=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new ni,n=new Sn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(od,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Hr,fa,this.up):mi.lookAt(fa,Hr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(mi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ad),qs.child=e,this.dispatchEvent(qs),qs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qg),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ad),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new k(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yg={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},da={h:0,s:0,l:0};function tu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=rh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tu(o,r,e+1/3),this.g=tu(o,r,e),this.b=tu(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Je.workingToColorSpace(sn.copy(this),e),Math.round(tt(sn.r*255,0,255))*65536+Math.round(tt(sn.g*255,0,255))*256+Math.round(tt(sn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=vt){Je.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(da);let n=no(Ui.h,da.h,t),s=no(Ui.s,da.s,t),r=no(Ui.l,da.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new j;j.NAMES=wp;var ms=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Si=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new k,gi=new k,nu=new k,xi=new k,Ys=new k,$s=new k,ld=new k,iu=new k,su=new k,ru=new k,ou=new bt,au=new bt,lu=new bt,vi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),gi.subVectors(n,t),nu.subVectors(e,t);let o=Bn.dot(Bn),a=Bn.dot(gi),l=Bn.dot(nu),c=gi.dot(gi),h=gi.dot(nu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ou,r.x),o.addScaledVector(au,r.y),o.addScaledVector(lu,r.z),o}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),gi.subVectors(e,t),Bn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),$s.subVectors(r,n),iu.subVectors(e,n);let l=Ys.dot(iu),c=$s.dot(iu);if(l<=0&&c<=0)return t.copy(n);su.subVectors(e,s);let h=Ys.dot(su),u=$s.dot(su);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ys,o);ru.subVectors(e,r);let d=Ys.dot(ru),m=$s.dot(ru);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector($s,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return ld.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(ld,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Ys,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ut=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),ma.subVectors(this.max,Wr),Ks.subVectors(e.a,Wr),Zs.subVectors(e.b,Wr),Js.subVectors(e.c,Wr),Bi.subVectors(Zs,Ks),zi.subVectors(Js,Zs),as.subVectors(Ks,Js);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-as.z,as.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,as.z,0,-as.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-as.y,as.x,0];return!cu(t,Ks,Zs,Js,ma)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,Ks,Zs,Js,ma))?!1:(ga.crossVectors(Bi,zi),t=[ga.x,ga.y,ga.z],cu(t,Ks,Zs,Js,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new k,new k,new k,new k,new k,new k,new k,new k],zn=new k,pa=new Ut,Ks=new k,Zs=new k,Js=new k,Bi=new k,zi=new k,as=new k,Wr=new k,ma=new k,ga=new k,ls=new k;function cu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Gt=new k,xa=new Oe,$g=0,Wt=class extends ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var oo=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gs=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kg=new Ut,Xr=new k,uu=new k,mn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(uu)),this.expandByPoint(Xr.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zg=0,In=new Xe,hu=new Tt,js=new k,Mn=new Ut,qr=new Ut,Jt=new k,Ge=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yg(e)?gs:oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Mn.min,qr.min),Mn.expandByPoint(Jt),Jt.addVectors(Mn.max,qr.max),Mn.expandByPoint(Jt)):(Mn.expandByPoint(qr.min),Mn.expandByPoint(qr.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),Jt.add(js)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new k,l[y]=new k;let c=new k,h=new k,u=new k,f=new Oe,d=new Oe,m=new Oe,x=new k,g=new k;function p(y,w,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),a[y].add(x),a[w].add(x),a[R].add(x),l[y].add(g),l[w].add(g),l[R].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let R=_[y],T=R.start,L=R.count;for(let I=T,C=T+L;I<C;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new k,b=new k,v=new k,S=new k;function E(y){v.fromBufferAttribute(s,y),S.copy(v);let w=a[y];M.copy(w),M.sub(v.multiplyScalar(v.dot(w))).normalize(),b.crossVectors(S,w);let T=b.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,T)}for(let y=0,w=_.length;y<w;++y){let R=_[y],T=R.start,L=R.count;for(let I=T,C=T+L;I<C;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Wt(f,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hn=new k,Gi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){so("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){so("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fu=new k,Jg=new k,jg=new We,kn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fu.subVectors(n,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jg.getNormalMatrix(e),s=this.coplanarPoint(fu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qg=0,on=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=li,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=ku,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new j().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Hi=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,Yr=new k,er=new k,tr=new k,nr=new Oe,$r=new Oe,Tp=new Xe,ba=new k,Kr=new k,_a=new k,cd=new Oe,du=new Oe,ud=new Oe,bs=class extends Tt{constructor(e=new Hi){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xs(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new Gi(n,3,0,!1)),Qs.setAttribute("uv",new Gi(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ya(ba.set(-.5,-.5,0),tr,o,er,s,r),ya(Kr.set(.5,-.5,0),tr,o,er,s,r),ya(_a.set(.5,.5,0),tr,o,er,s,r),cd.set(0,0),du.set(1,0),ud.set(1,1);let a=e.ray.intersectTriangle(ba,Kr,_a,!1,Yr);if(a===null&&(ya(Kr.set(-.5,.5,0),tr,o,er,s,r),du.set(0,1),a=e.ray.intersectTriangle(ba,_a,Kr,!1,Yr),a===null))return;let l=e.ray.origin.distanceTo(Yr);l<e.near||l>e.far||t.push({distance:l,point:Yr.clone(),uv:vi.getInterpolation(Yr,ba,Kr,_a,cd,du,ud,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ya(i,e,t,n,s,r){nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?($r.x=r*nr.x-s*nr.y,$r.y=s*nr.x+r*nr.y):$r.copy(nr),i.copy(e),i.x+=$r.x,i.y+=$r.y,i.applyMatrix4(Tp)}var _i=new k,pu=new k,va=new k,Ma=new k,Wi=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pu.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Ma.copy(this.origin).sub(pu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(va),a=Ma.dot(this.direction),l=-Ma.dot(va),c=Ma.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pu).addScaledVector(va,f),d}intersectSphere(e,t){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=n.x-o.x,_=n.y-o.y,M=n.z-o.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(h),E,y,w,R,T,L,I,C,F,N,U,V;if(b>=v&&b>=S?(w=l,L=u,F=m,V=p,l>=0?(E=c,y=h,R=f,T=d,I=x,C=g,N=_,U=M):(E=h,y=c,R=d,T=f,I=g,C=x,N=M,U=_)):v>=S?(w=c,L=f,F=x,V=_,c>=0?(E=h,y=l,R=d,T=u,I=g,C=m,N=M,U=p):(E=l,y=h,R=u,T=d,I=m,C=g,N=p,U=M)):(w=h,L=d,F=g,V=M,h>=0?(E=l,y=c,R=u,T=f,I=m,C=x,N=p,U=_):(E=c,y=l,R=f,T=u,I=x,C=m,N=_,U=p)),w===0)return null;let z=E/w,B=y/w,H=1/w,ee=R-z*L,Q=T-B*L,ce=I-z*F,ue=C-B*F,Be=N-z*V,q=U-B*V,Z=Be*ue-q*ce,ae=ee*q-Q*Be,we=ce*Q-ue*ee;if(s){if(Z<0||ae<0||we<0)return null}else if((Z<0||ae<0||we<0)&&(Z>0||ae>0||we>0))return null;let ge=Z+ae+we;if(ge===0)return null;let ke=H*(Z*L+ae*F+we*V);return(ge>0?ke<0:ke>0)?null:this.at(ke/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new Xe,cs=new Wi,Sa=new mn,fd=new k,wa=new k,Ta=new k,Aa=new k,mu=new k,Ea=new k,dd=new k,Ra=new k,Fe=class extends Tt{constructor(e=new Ge,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(mu.fromBufferAttribute(u,e),o?Ea.addScaledVector(mu,h):Ea.addScaledVector(mu.sub(t),h))}t.add(Ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Sa.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Sa,fd)===null||cs.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(hd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=_,v=M;b<v;b+=3){let S=a.getX(b),E=a.getX(b+1),y=a.getX(b+2);s=Ca(this,p,e,n,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),M=a.getX(g+1),b=a.getX(g+2);s=Ca(this,o,e,n,c,h,u,_,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],_=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=_,v=M;b<v;b+=3){let S=b,E=b+1,y=b+2;s=Ca(this,p,e,n,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let _=g,M=g+1,b=g+2;s=Ca(this,o,e,n,c,h,u,_,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function ex(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:i}}function Ca(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,wa),i.getVertexPosition(l,Ta),i.getVertexPosition(c,Aa);let h=ex(i,e,t,n,wa,Ta,Aa,dd);if(h){let u=new k;vi.getBarycoord(dd,wa,Ta,Aa,u),s&&(h.uv=vi.getInterpolatedAttribute(s,a,l,c,u,new Oe)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,l,c,u,new Oe)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};vi.getNormal(wa,Ta,Aa,f.normal),h.face=f,h.barycoord=u}return h}var Zr=new bt,pd=new bt,md=new bt,tx=new bt,gd=new Xe,Ia=new k,gu=new mn,xd=new Xe,xu=new Wi,ao=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingBox.expandByPoint(Ia)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ia),this.boundingSphere.expandByPoint(Ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gu.copy(this.boundingSphere),gu.applyMatrix4(s),e.ray.intersectsSphere(gu)!==!1&&(xd.copy(s).invert(),xu.copy(e.ray).applyMatrix4(xd),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===vu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;pd.fromBufferAttribute(s.attributes.skinIndex,e),md.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Zr.copy(t),t.set(0,0,0,0)):(Zr.set(...t,1),t.set(0,0,0)),Zr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=md.getComponent(r);if(o!==0){let a=pd.getComponent(r);gd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(tx.copy(Zr).applyMatrix4(gd),o)}}return t.isVector4&&(t.w=Zr.w),t.applyMatrix4(this.bindMatrixInverse)}},gr=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},xr=class extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Nt,h=Nt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bd=new Xe,nx=new Xe,lo=class i{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:nx;bd.multiplyMatrices(a,t[r]),bd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xr(t,e,e,Rn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ie("Skeleton: No bone found with UUID:",r),o=new gr),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},wi=class extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Xe,_d=new Xe,Pa=[],yd=new Ut,ix=new Xe,Jr=new Fe,jr=new mn,_s=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ix)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),yd.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),jr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),_d.multiplyMatrices(n,ir),Jr.matrixWorld=_d,Jr.raycast(e,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,Sl,En));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},us=new mn,sx=new Oe(.5,.5),La=new k,br=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],_=r[12],M=r[13],b=r[14],v=r[15];if(s[0].setComponents(c-o,d-h,p-m,v-_).normalize(),s[1].setComponents(c+o,d+h,p+m,v+_).normalize(),s[2].setComponents(c+a,d+u,p+x,v+M).normalize(),s[3].setComponents(c-a,d-u,p-x,v-M).normalize(),n)s[4].setComponents(l,f,g,b).normalize(),s[5].setComponents(c-l,d-f,p-g,v-b).normalize();else if(s[4].setComponents(c-l,d-f,p-g,v-b).normalize(),t===Gn)s[5].setComponents(c+l,d+f,p+g,v+b).normalize();else if(t===ur)s[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);let t=sx.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(La.x=s.normal.x>0?e.max.x:e.min.x,La.y=s.normal.y>0?e.max.y:e.min.y,La.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bt=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},el=new k,tl=new k,vd=new Xe,Qr=new Wi,Fa=new mn,bu=new k,Md=new k,wn=class extends Tt{constructor(e=new Ge,t=new Bt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)el.fromBufferAttribute(t,s-1),tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Ue(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;vd.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(vd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),_=h.getX(x+1),M=Da(this,e,Qr,l,p,_,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=Da(this,e,Qr,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Da(this,e,Qr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Da(this,e,Qr,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Da(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(el.fromBufferAttribute(a,s),tl.fromBufferAttribute(a,r),t.distanceSqToSegment(el,tl,bu,Md)>n)return;bu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bu);if(!(c<e.near||c>e.far))return{distance:c,point:Md.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Sd=new k,wd=new k,gn=class extends wn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sd.fromBufferAttribute(t,s),wd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sd.distanceTo(wd);e.setAttribute("lineDistance",new Ue(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},co=class extends wn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xn=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Td=new Xe,Au=new Wi,Na=new mn,Oa=new k,Tn=class extends Tt{constructor(e=new Ge,t=new xn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;Td.copy(s).invert(),Au.copy(e.ray).applyMatrix4(Td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);Oa.fromBufferAttribute(u,g),Ad(Oa,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Oa.fromBufferAttribute(u,m),Ad(Oa,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ad(i,e,t,n,s,r,o){let a=Au.distanceSqToPoint(i);if(a<t){let l=new k;Au.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var uo=class extends Xt{constructor(e=[],t=$i,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},an=class extends Xt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends Xt{constructor(e,t,n=Yn,s,r,o,a=Nt,l=Nt,c,h=ei,u=1){if(h!==ei&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nl=class extends Xi{constructor(e,t=Yn,n=$i,s,r,o=Nt,a=Nt,l,c=ei){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ho=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qi=class i extends Ge{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function m(x,g,p,_,M,b,v,S,E,y,w){let R=b/E,T=v/y,L=b/2,I=v/2,C=S/2,F=E+1,N=y+1,U=0,V=0,z=new k;for(let B=0;B<N;B++){let H=B*T-I;for(let ee=0;ee<F;ee++){let Q=ee*R-L;z[x]=Q*_,z[g]=H*M,z[p]=C,c.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[p]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(ee/E),u.push(1-B/y),U+=1}}for(let B=0;B<y;B++)for(let H=0;H<E;H++){let ee=f+H+F*B,Q=f+H+F*(B+1),ce=f+(H+1)+F*(B+1),ue=f+(H+1)+F*B;l.push(ee,Q,ue),l.push(Q,ce,ue),V+=6}a.addGroup(d,V,w),d+=V,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ap(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ux(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return fo(r,o,t,a,l,c,0),o}function Ap(i,e,t,n,s){let r;if(s===vx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ed(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ed(o/n|0,i[o],i[o+1],r);return r&&_r(r,r.next)&&(mo(r),r=r.next),r}function ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_r(t,t.next)||Pt(t.prev,t,t.next)===0)){if(mo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ax(i,n,s,r):ox(i)){e.push(l.i,i.i,c.i),mo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lx(ys(i),e),fo(i,e,t,n,s,r,2)):o===2&&cx(i,e,t,n,s,r):fo(ys(i),e,t,n,s,r,1);break}}}function ox(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&eo(s,a,r,l,o,c,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ax(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),p=Eu(d,m,e,t,n),_=Eu(x,g,e,t,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=p&&b&&b.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&eo(a,h,l,u,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&eo(a,h,l,u,c,f,b.x,b.y)&&Pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&eo(a,h,l,u,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=_;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&eo(a,h,l,u,c,f,b.x,b.y)&&Pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function lx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!_r(n,s)&&Rp(n,t,t.next,s)&&po(n,s)&&po(s,n)&&(e.push(n.i,t.i,s.i),mo(t),mo(t.next),t=i=s),t=t.next}while(t!==i);return ys(t)}function cx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bx(o,a)){let l=Cp(o,a);o=ys(o,o.next),l=ys(l,l.next),fo(o,e,t,n,s,r,0),fo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ux(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Ap(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(xx(c))}s.sort(hx);for(let r=0;r<s.length;r++)t=fx(s[r],t);return t}function hx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function fx(i,e){let t=dx(i,e);if(!t)return e;let n=Cp(t,i);return ys(n,n.next),ys(t,t.next)}function dx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(_r(i,t))return t;do{if(_r(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ep(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);po(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&px(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function px(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function mx(i,e,t,n){let s=i;do s.z===0&&(s.z=Eu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gx(s)}function gx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Eu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ep(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function eo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ep(i,e,t,n,s,r,o,a)}function bx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_x(i,e)&&(po(i,e)&&po(e,i)&&yx(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||_r(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _r(i,e){return i.x===e.x&&i.y===e.y}function Rp(i,e,t,n){let s=Ba(Pt(i,e,t)),r=Ba(Pt(i,e,n)),o=Ba(Pt(t,n,i)),a=Ba(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ua(i,t,e)||r===0&&Ua(i,n,e)||o===0&&Ua(t,i,n)||a===0&&Ua(t,e,n))}function Ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ba(i){return i>0?1:i<0?-1:0}function _x(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function po(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function yx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cp(i,e){let t=Ru(i.i,i.x,i.y),n=Ru(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ed(i,e,t,n){let s=Ru(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ru(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Cu=class{static triangulate(e,t,n=2){return rx(e,t,n)}},go=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rd(e),Cd(n,e);let o=e.length;t.forEach(Rd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cd(n,t[l]);let a=Cu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Pn=class i extends Ge{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*f-o;for(let M=0;M<c;M++){let b=M*u-r;m.push(b,-_,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let M=_+c*p,b=_+c*(p+1),v=_+1+c*(p+1),S=_+1+c*p;d.push(M,b,S),d.push(b,v,S)}this.setIndex(d),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},vs=class i extends Ge{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new k,m=new Oe;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,M=_,b=_+n+1,v=_+n+2,S=_+1;a.push(M,b,S),a.push(b,v,S)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xo=class i extends Ge{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],M=p/n,b=o+M*a,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let w=y/t,R=s+w*r;u.x=-S*Math.cos(R),u.y=v,u.z=S*Math.sin(R),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(w+E,1-M),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let M=h[p][_+1],b=h[p][_],v=h[p+1][_],S=h[p+1][_+1];(p!==0||o>0)&&d.push(M,b,S),(p!==n-1||l<Math.PI)&&d.push(b,v,S)}this.setIndex(d),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Id(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Id(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}function Id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Ip={clone:Rs,merge:ln},Sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},il=class extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ii=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bn=class extends ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var bo=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=gl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sl=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Tx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ax(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var si=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends si{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Su,endingEnd:Su}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wu:r=e,a=2*t-n;break;case Tu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wu:o=e,l=2*n-t;break;case Tu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+_*o[c+v]+M*o[l+v]+b*o[u+v];return r}},al=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ll=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cl=class extends si{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,_=u[p],M=u[p+1],b=e*f+m*2,v=h[b],S=h[b+1],E=Rx(n,t,_,v,s);r[m]=Pp(E,x,M,S,g)}return r}};function Pp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Ex(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Rx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Pp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ex(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vi(t,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vi(e.times,Array),values:Vi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ha(e.settings)&&(n.settings={inTangents:Vi(e.settings.inTangents,Array),outTangents:Vi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case Va:t=this.InterpolantFactoryMethodSmooth;break;case Mu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ha(this.settings)&&(Ld(this.settings.inTangents,e),Ld(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&vg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ld(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ds;var Ti=class extends _n{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=fs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};_o.prototype.ValueTypeName="color";var Ai=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Ai.prototype.ValueTypeName="number";var ul=class extends si{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ei=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends _n{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=fs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Yi.prototype.ValueTypeName="vector";var yo=class{constructor(e="",t=-1,n=[],s=up){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ix(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Tx(l);l=Pd(l,1,h),c=Pd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ai(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Cx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return _o;case"quaternion":return Ei;case"bool":case"boolean":return Ti;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ix(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cx(i.type);if(i.times===void 0){let n=[],s=[];Ax(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ha(i.settings)&&(t.settings={inTangents:Vi(i.settings.inTangents,Float32Array),outTangents:Vi(i.settings.outTangents,Float32Array)}),t}var Qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Fd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Fd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var hl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new hl,ri=class{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},Iu=class extends Error{constructor(e,t){super(e),this.response=t}},yr=class extends ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=yi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){_();function _(){u.read().then(({done:M,value:b})=>{if(M)p.close();else{x+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let S=0,E=h.length;S<E;S++){let y=h[S];y.onProgress&&y.onProgress(v)}p.enqueue(b),_()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Iu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Qn.add(`file:${e}`,c);let h=yi[e];delete yi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=yi[e];if(h===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sr=new WeakMap,fl=class extends ri{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=sr.get(o);u===void 0&&(u=[],sr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=hr("img");function l(){h(),t&&t(this);let u=sr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}sr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Qn.remove(`image:${e}`);let f=sr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var vo=class extends ri{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,o=new fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ms=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new j(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mo=class extends Ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_u=new Xe,Dd=new k,Nd=new k,vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dd),Nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},za=new k,ka=new Sn,jn=new k,So=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,ka,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(za,ka,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new k,Od=new Oe,Ud=new Oe,Ht=class extends So{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Od,Ud),t.subVectors(Ud,Od)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pu=class extends vr{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wo=class extends Ms{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Lu=class extends vr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Ss=class extends Ms{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ln=class extends So{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fu=class extends vr{constructor(){super(new Ln(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ci=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yu=new WeakMap,To=class extends ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{yu.has(o)===!0?(s&&s(yu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),yu.set(l,c),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rr=-90,or=1,dl=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(rr,or,e,t);s.layers=this.layers,this.add(s);let r=new Ht(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new Ht(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new Ht(rr,or,e,t);a.layers=this.layers,this.add(a);let l=new Ht(rr,or,e,t);l.layers=this.layers,this.add(l);let c=new Ht(rr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},pl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var lh="\\[\\]\\.:\\/",Px=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",Lx="[^"+lh.replace("\\.","")+"]",Fx=/((?:WC+[\/:])*)/.source.replace("WC",ch),Dx=/(WCOD+)?/.source.replace("WCOD",Lx),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Ox=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Ux=new RegExp("^"+Fx+Dx+Nx+Ox+"$"),Bx=["material","materials","bones","map"],Du=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(e){let t=Ux.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Du;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bw=new Float32Array(1);var Bd=new Xe,Ao=class{constructor(e,t,n=0,s=1/0){this.ray=new Wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bd),this}intersectObject(e,t=!0,n=[]){return Nu(e,this,n,t),n.sort(zd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Nu(e[s],this,n,t);return n.sort(zd),n}};function zd(i,e){return i.distance-e.distance}function Nu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Nu(r[o],e,t,!0)}}var mh=class mh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};mh.prototype.isMatrix2=!0;var Ou=mh;function uh(i,e,t,n){let s=zx(n);switch(t){case Qu:return i*e;case Sl:return i*e/s.components*s.byteLength;case wl:return i*e/s.components*s.byteLength;case Zi:return i*e*2/s.components*s.byteLength;case Tl:return i*e*2/s.components*s.byteLength;case eh:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case Al:return i*e*4/s.components*s.byteLength;case Io:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case El:case Cl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Ll:case Dl:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Do:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case jl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case No:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zx(i){switch(i){case yn:case Ku:return{byteLength:1,components:1};case wr:case Zu:case $n:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case Yn:case yl:case En:return{byteLength:4,components:1};case Ju:case ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function em(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Gx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,db=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",_b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ay=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Gx,alphahash_pars_fragment:Hx,alphamap_fragment:Wx,alphamap_pars_fragment:Xx,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:$x,aomap_pars_fragment:Kx,batching_pars_vertex:Zx,batching_vertex:Jx,begin_vertex:jx,beginnormal_vertex:Qx,bsdfs:eb,iridescence_fragment:tb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:rb,clipping_planes_vertex:ob,color_fragment:ab,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:ub,common:hb,cube_uv_reflection_fragment:fb,defaultnormal_vertex:db,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:xb,colorspace_fragment:bb,colorspace_pars_fragment:_b,envmap_fragment:yb,envmap_common_pars_fragment:vb,envmap_pars_fragment:Mb,envmap_pars_vertex:Sb,envmap_physical_pars_fragment:Db,envmap_vertex:wb,fog_vertex:Tb,fog_pars_vertex:Ab,fog_fragment:Eb,fog_pars_fragment:Rb,gradientmap_pars_fragment:Cb,lightmap_pars_fragment:Ib,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:Lb,lights_pars_begin:Fb,lights_toon_fragment:Nb,lights_toon_pars_fragment:Ob,lights_phong_fragment:Ub,lights_phong_pars_fragment:Bb,lights_physical_fragment:zb,lights_physical_pars_fragment:kb,lights_fragment_begin:Vb,lights_fragment_maps:Gb,lights_fragment_end:Hb,lightprobes_pars_fragment:Wb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:qb,logdepthbuf_pars_vertex:Yb,logdepthbuf_vertex:$b,map_fragment:Kb,map_pars_fragment:Zb,map_particle_fragment:Jb,map_particle_pars_fragment:jb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:e_,morphinstance_vertex:t_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:s_,morphtarget_vertex:r_,normal_fragment_begin:o_,normal_fragment_maps:a_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:u_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:x_,premultiplied_alpha_fragment:b_,project_vertex:__,dithering_fragment:y_,dithering_pars_fragment:v_,roughnessmap_fragment:M_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:w_,shadowmap_pars_vertex:T_,shadowmap_vertex:A_,shadowmask_pars_fragment:E_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:I_,skinnormal_vertex:P_,specularmap_fragment:L_,specularmap_pars_fragment:F_,tonemapping_fragment:D_,tonemapping_pars_fragment:N_,transmission_fragment:O_,transmission_pars_fragment:U_,uv_pars_fragment:B_,uv_pars_vertex:z_,uv_vertex:k_,worldpos_vertex:V_,background_vert:G_,background_frag:H_,backgroundCube_vert:W_,backgroundCube_frag:X_,cube_vert:q_,cube_frag:Y_,depth_vert:$_,depth_frag:K_,distance_vert:Z_,distance_frag:J_,equirect_vert:j_,equirect_frag:Q_,linedashed_vert:ey,linedashed_frag:ty,meshbasic_vert:ny,meshbasic_frag:iy,meshlambert_vert:sy,meshlambert_frag:ry,meshmatcap_vert:oy,meshmatcap_frag:ay,meshnormal_vert:ly,meshnormal_frag:cy,meshphong_vert:uy,meshphong_frag:hy,meshphysical_vert:fy,meshphysical_frag:dy,meshtoon_vert:py,meshtoon_frag:my,points_vert:gy,points_frag:xy,shadow_vert:by,shadow_frag:_y,sprite_vert:yy,sprite_frag:vy},be={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ui={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new j(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ui.physical={uniforms:ln([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var rc={r:0,b:0,g:0},My=new Xe,tm=new We;tm.set(-1,0,0,0,1,0,0,0,1);function Sy(i,e,t,n,s,r){let o=new j(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let b=_.backgroundBlurriness>0;M=e.get(M,b)}return M}function m(_){let M=!1,b=d(_);b===null?g(o,a):b&&b.isColor&&(g(b,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,M){let b=d(M);b&&(b.isCubeTexture||b.mapping===Co)?(c===void 0&&(c=new Fe(new qi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Rs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(tm),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==dt,(h!==b||u!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Fe(new Pn(2,2),new An({name:"BackgroundMaterial",uniforms:Rs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,M){_.getRGB(rc,ah(i)),t.buffers.color.setClear(rc.r,rc.g,rc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,M=1){o.set(_),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:p}}function wy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(T,L,I,C,F){let N=!1,U=u(T,C,I,L);r!==U&&(r=U,c(r.object)),N=d(T,C,I,F),N&&m(T,C,I,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,b(T,L,I,C),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,L,I,C){let F=C.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let U=T.isInstancedMesh===!0?T.id:0,V=N[U];V===void 0&&(V={},N[U]=V);let z=V[I.id];z===void 0&&(z={},V[I.id]=z);let B=z[F];return B===void 0&&(B=f(l()),z[F]=B),B}function f(T){let L=[],I=[],C=[];for(let F=0;F<t;F++)L[F]=0,I[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:C,object:T,attributes:{},index:null}}function d(T,L,I,C){let F=r.attributes,N=L.attributes,U=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let H=F[z],ee=N[z];if(ee===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function m(T,L,I,C){let F={},N=L.attributes,U=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let H=N[z];H===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(H=T.instanceColor));let ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),F[z]=ee,U++}r.attributes=F,r.attributesNum=U,r.index=C}function x(){let T=r.newAttributes;for(let L=0,I=T.length;L<I;L++)T[L]=0}function g(T){p(T,0)}function p(T,L){let I=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;I[T]=1,C[T]===0&&(i.enableVertexAttribArray(T),C[T]=1),F[T]!==L&&(i.vertexAttribDivisor(T,L),F[T]=L)}function _(){let T=r.newAttributes,L=r.enabledAttributes;for(let I=0,C=L.length;I<C;I++)L[I]!==T[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function M(T,L,I,C,F,N,U){U===!0?i.vertexAttribIPointer(T,L,I,F,N):i.vertexAttribPointer(T,L,I,C,F,N)}function b(T,L,I,C){x();let F=C.attributes,N=I.getAttributes(),U=L.defaultAttributeValues;for(let V in N){let z=N[V];if(z.location>=0){let B=F[V];if(B===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(B=T.instanceColor)),B!==void 0){let H=B.normalized,ee=B.itemSize,Q=e.get(B);if(Q===void 0)continue;let ce=Q.buffer,ue=Q.type,Be=Q.bytesPerElement,q=ue===i.INT||ue===i.UNSIGNED_INT||B.gpuType===yl;if(B.isInterleavedBufferAttribute){let Z=B.data,ae=Z.stride,we=B.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<z.locationSize;ge++)p(z.location+ge,Z.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<z.locationSize;ge++)g(z.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ge=0;ge<z.locationSize;ge++)M(z.location+ge,ee/z.locationSize,ue,H,ae*Be,(we+ee/z.locationSize*ge)*Be,q)}else{if(B.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z,B.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Z=0;Z<z.locationSize;Z++)g(z.location+Z);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Z=0;Z<z.locationSize;Z++)M(z.location+Z,ee/z.locationSize,ue,H,ee*Be,ee/z.locationSize*Z*Be,q)}}else if(U!==void 0){let H=U[V];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(z.location,H);break;case 3:i.vertexAttrib3fv(z.location,H);break;case 4:i.vertexAttrib4fv(z.location,H);break;default:i.vertexAttrib1fv(z.location,H)}}}}_()}function v(){w();for(let T in n){let L=n[T];for(let I in L){let C=L[I];for(let F in C){let N=C[F];for(let U in N)h(N[U].object),delete N[U];delete C[F]}}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let L=n[T.id];for(let I in L){let C=L[I];for(let F in C){let N=C[F];for(let U in N)h(N[U].object),delete N[U];delete C[F]}}delete n[T.id]}function E(T){for(let L in n){let I=n[L];for(let C in I){let F=I[C];if(F[T.id]===void 0)continue;let N=F[T.id];for(let U in N)h(N[U].object),delete N[U];delete F[T.id]}}}function y(T){for(let L in n){let I=n[L],C=T.isInstancedMesh===!0?T.id:0,F=I[C];if(F!==void 0){for(let N in F){let U=F[N];for(let V in U)h(U[V].object),delete U[V];delete F[N]}delete I[C],Object.keys(I).length===0&&delete n[L]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Ty(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ay(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Rn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==yn&&E!==En&&!y&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:v,samples:S}}function Ey(i){let e=this,t=null,n=0,s=!1,r=!1,o=new kn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,M=_*4,b=p.clippingState||null;l.value=b,b=h(m,f,M,d);for(let v=0;v!==M;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,b=d;M!==x;++M,b+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Rr=4,Ry=6,Cy=20,Iy=256,Bo=new Ln,Fp=new j,gh=null,xh=0,bh=0,_h=!1,Py=new k,Cs=new k,Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Py}=r;gh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,xh,bh),this._renderer.xr.enabled=_h,e.scissorTest=!1,Er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:$n,format:Rn,colorSpace:dn,depthBuffer:!1},s=Dp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ly(r)),this._blurMaterial=Dy(r,e,t),this._ggxMaterial=Fy(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new Ge,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,s,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Fp),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new qi,new Ye({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,p=!0):(g.color.copy(Fp),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let v=this._cubeSize;Er(s,b*v,M>2?v:0,v,v),u.setRenderTarget(s),p&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$i||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Rr?n-m+Rr:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Er(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Er(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Bo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Rr?s-this._lodMax+Rr:0),f=4*(this._cubeSize-h);Er(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(l,Bo)}};function Ly(i){let e=[],t=[],n=i,s=i-Rr+1+Ry;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){let _=p%3*2/3-1,M=p>2?0:-1,b=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];m.set(b,d*f*p);for(let v=0;v<f;v++){let S=h[v*2]*2-1,E=h[v*2+1]*2-1;p===0?Cs.set(1,E,S):p===1?Cs.set(-S,1,-E):p===2?Cs.set(-S,E,1):p===3?Cs.set(-1,E,-S):p===4?Cs.set(-S,-1,E):Cs.set(S,E,-1),Cs.toArray(x,(p*f+v)*d)}}let g=new Ge;g.setAttribute("position",new Wt(m,d)),g.setAttribute("outputDirection",new Wt(x,d)),t.push(new Fe(g,null)),n>Rr&&n--}return{lodMeshes:t,sizeLods:e}}function Dp(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fy(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Iy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Dy(i,e,t){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Np(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Op(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qi(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ai});r.uniforms.tEquirect.value=t;let o=new Fe(s,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=Ot),new dl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Ny(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===xl||d===bl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new ac(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===xl||d===bl,x=d===$i||d===As;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ir(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Ir(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===xl?f.mapping=$i:d===bl&&(f.mapping=As),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Oy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function Uy(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let M=0,b=_.length;M<b;M+=3){let v=_[M+0],S=_[M+1],E=_[M+2];f.push(v,S,S,E,E,v)}}else{let _=m.array;x=m.version;for(let M=0,b=_.length/3-1;M<b;M+=3){let v=M+0,S=M+1,E=M+2;f.push(v,S,S,E,E,v)}}let g=new(m.count>=65535?gs:oo)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function By(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function zy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ky(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let b=a.attributes.position.count*M,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*u),E=new ro(S,b,v,u);E.type=En,E.needsUpdate=!0;let y=M*4;for(let R=0;R<u;R++){let T=g[R],L=p[R],I=_[R],C=b*v*4*R;for(let F=0;F<T.count;F++){let N=F*y;d===!0&&(s.fromBufferAttribute(T,F),S[C+N+0]=s.x,S[C+N+1]=s.y,S[C+N+2]=s.z,S[C+N+3]=0),m===!0&&(s.fromBufferAttribute(L,F),S[C+N+4]=s.x,S[C+N+5]=s.y,S[C+N+6]=s.z,S[C+N+7]=0),x===!0&&(s.fromBufferAttribute(I,F),S[C+N+8]=s.x,S[C+N+9]=s.y,S[C+N+10]=s.z,S[C+N+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new Oe(b,v)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vy(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Gy={[Vu]:"LINEAR_TONE_MAPPING",[Gu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Wu]:"ACES_FILMIC_TONE_MAPPING",[qu]:"AGX_TONE_MAPPING",[Yu]:"NEUTRAL_TONE_MAPPING",[Xu]:"CUSTOM_TONE_MAPPING"};function Hy(i,e,t,n,s,r){let o=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ge;c.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let h=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Fe(c,h),f=new Ln(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,_=[],M=!1;this.setSize=function(b,v){o.setSize(b,v),a!==null&&a.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<_.length;S++){let E=_[S];E.setSize&&E.setSize(b,v)}},this.setEffects=function(b){_=b,M=_.length>0&&_[0].isRenderPass===!0;let v=o.width,S=o.height;_.length>0&&a===null&&(a=new rn(v,S,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new rn(v,S,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<_.length;E++){let y=_[E];y.setSize&&y.setSize(v,S)}},this.begin=function(b,v){if(x||b.toneMapping===Xn&&_.length===0)return!1;if(p=v,v!==null){let S=v.width,E=v.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Xn,!0},this.hasRenderPass=function(){return M},this.end=function(b,v){b.toneMapping=g,x=!0;let S=o,E=a;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(b,E,S,v),w.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,h.defines={},Je.getTransfer(d)===dt&&(h.defines.SRGB_TRANSFER="");let y=Gy[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var nm=new Xt,Mh=new Xi(1,1),im=new ro,sm=new Qa,rm=new uo,Up=[],Bp=[],zp=new Float32Array(16),kp=new Float32Array(9),Vp=new Float32Array(4);function Lr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Up[s];if(r===void 0&&(r=new Float32Array(s),Up[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cc(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function $y(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Vp.set(n),i.uniformMatrix2fv(this.addr,!1,Vp),Yt(t,n)}}function Ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;kp.set(n),i.uniformMatrix3fv(this.addr,!1,kp),Yt(t,n)}}function Zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;zp.set(n),i.uniformMatrix4fv(this.addr,!1,zp),Yt(t,n)}}function Jy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function Qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function tv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=t.isReversedDepthBuffer()?sc:ic,r=Mh):r=nm,t.setTexture2D(e||r,s)}function ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sm,s)}function av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rm,s)}function lv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||im,s)}function cv(i){switch(i){case 5126:return Wy;case 35664:return Xy;case 35665:return qy;case 35666:return Yy;case 35674:return $y;case 35675:return Ky;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return jy;case 35668:case 35672:return Qy;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function uv(i,e){i.uniform1fv(this.addr,e)}function hv(i,e){let t=Lr(e,this.size,2);i.uniform2fv(this.addr,t)}function fv(i,e){let t=Lr(e,this.size,3);i.uniform3fv(this.addr,t)}function dv(i,e){let t=Lr(e,this.size,4);i.uniform4fv(this.addr,t)}function pv(i,e){let t=Lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mv(i,e){let t=Lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gv(i,e){let t=Lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xv(i,e){i.uniform1iv(this.addr,e)}function bv(i,e){i.uniform2iv(this.addr,e)}function _v(i,e){i.uniform3iv(this.addr,e)}function yv(i,e){i.uniform4iv(this.addr,e)}function vv(i,e){i.uniform1uiv(this.addr,e)}function Mv(i,e){i.uniform2uiv(this.addr,e)}function Sv(i,e){i.uniform3uiv(this.addr,e)}function wv(i,e){i.uniform4uiv(this.addr,e)}function Tv(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Mh:o=nm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Av(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sm,r[o])}function Ev(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rm,r[o])}function Rv(i,e,t){let n=this.cache,s=e.length,r=cc(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||im,r[o])}function Cv(i){switch(i){case 5126:return uv;case 35664:return hv;case 35665:return fv;case 35666:return dv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return xv;case 35667:case 35671:return bv;case 35668:case 35672:return _v;case 35669:case 35673:return yv;case 5125:return vv;case 36294:return Mv;case 36295:return Sv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Rv}}var Sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}},Th=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function Iv(i,e,t){let n=i.name,s=n.length;for(yh.lastIndex=0;;){let r=yh.exec(n),o=yh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gp(t,c===void 0?new Sh(a,i,e):new wh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Th(a),Gp(t,u)),t=u}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Iv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Pv=37297,Lv=0;function Fv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Wp=new We;function Dv(i){Je._getMatrix(Wp,Je.workingColorSpace,i);let e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case io:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Fv(i.getShaderSource(e),a)}else return r}function Nv(i,e){let t=Dv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ov={[Vu]:"Linear",[Gu]:"Reinhard",[Hu]:"Cineon",[Wu]:"ACESFilmic",[qu]:"AgX",[Yu]:"Neutral",[Xu]:"Custom"};function Uv(i,e){let t=Ov[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new k;function Bv(){Je.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function kv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ko(i){return i!==""}function qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(i){return i.replace(Gv,Wv)}var Hv=new Map;function Wv(i,e){let t=Ke[e];if(t===void 0){let n=Hv.get(e);if(n!==void 0)t=Ke[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ah(t)}var Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(i){return i.replace(Xv,qv)}function qv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Yv={[Eo]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function $v(i){return Yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kv={[$i]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};function Zv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jv={[As]:"ENVMAP_MODE_REFRACTION"};function jv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qv={[gl]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[lp]:"ENVMAP_BLENDING_ADD"};function eM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qv[i.combine]||"ENVMAP_BLENDING_NONE"}function tM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=$v(t),c=Zv(t),h=jv(t),u=eM(t),f=tM(t),d=zv(t),m=kv(r),x=s.createProgram(),g,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ko).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ko).join(`
`),p.length>0&&(p+=`
`)):(g=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),p=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),Bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),o=Ah(o),o=qp(o,t),o=Yp(o,t),a=Ah(a),a=qp(a,t),a=Yp(a,t),o=$p(o),a=$p(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=_+g+o,b=_+p+a,v=Hp(s,s.VERTEX_SHADER,M),S=Hp(s,s.FRAGMENT_SHADER,b);s.attachShader(x,v),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(T){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(v)||"",C=s.getShaderInfoLog(S)||"",F=L.trim(),N=I.trim(),U=C.trim(),V=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,S);else{let B=Xp(s,v,"vertex"),H=Xp(s,S,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+B+`
`+H)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(N===""||U==="")&&(z=!1);z&&(T.diagnostics={runnable:V,programLog:F,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(v),s.deleteShader(S),y=new Cr(s,x),w=Vv(s,x)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Pv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=S,this}var iM=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rh(e),t.set(e,n)),n}},Rh=class{constructor(e){this.id=iM++,this.code=e,this.usedTimes=0}};function sM(i){return i===Zi||i===Do||i===No}function rM(i,e,t,n,s,r){let o=new pr,a=new Eh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,R,T,L,I){let C=T.fog,F=L.geometry,N=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,V=e.get(y.envMap||N,U),z=V&&V.mapping===Co?V.image.height:null,B=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=H!==void 0?H.length:0,Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let ce,ue,Be,q;if(B){let At=ui[B];ce=At.vertexShader,ue=At.fragmentShader}else{ce=y.vertexShader,ue=y.fragmentShader;let At=a.getVertexShaderStage(y),ut=a.getFragmentShaderStage(y);a.update(y,At,ut),Be=At.id,q=ut.id}let Z=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,ke=!!y.map,st=!!y.matcap,Ne=!!V,Ze=!!y.aoMap,ot=!!y.lightMap,je=!!y.bumpMap&&y.wireframe===!1,Ct=!!y.normalMap,Zt=!!y.displacementMap,pn=!!y.emissiveMap,It=!!y.metalnessMap,kt=!!y.roughnessMap,X=y.anisotropy>0,en=y.clearcoat>0,gt=y.dispersion>0,O=y.retroreflectivity>0,A=y.iridescence>0,Y=y.sheen>0,J=y.transmission>0,ne=X&&!!y.anisotropyMap,le=en&&!!y.clearcoatMap,he=en&&!!y.clearcoatNormalMap,ie=en&&!!y.clearcoatRoughnessMap,re=A&&!!y.iridescenceMap,fe=A&&!!y.iridescenceThicknessMap,Pe=Y&&!!y.sheenColorMap,xe=Y&&!!y.sheenRoughnessMap,de=!!y.specularMap,Le=!!y.specularColorMap,ze=!!y.specularIntensityMap,qe=J&&!!y.transmissionMap,W=J&&!!y.thicknessMap,pe=!!y.gradientMap,se=!!y.alphaMap,me=y.alphaTest>0,ve=!!y.alphaHash,oe=!!y.extensions,De=Xn;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=i.toneMapping);let Re={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:ue,defines:y.defines,customVertexShaderID:Be,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:st,envMap:Ne,envMapMode:Ne&&V.mapping,envMapCubeUVHeight:z,aoMap:Ze,lightMap:ot,bumpMap:je,normalMap:Ct,displacementMap:Zt,emissiveMap:pn,normalMapObjectSpace:Ct&&y.normalMapType===fp,normalMapTangentSpace:Ct&&y.normalMapType===Uo,packedNormalMap:Ct&&y.normalMapType===Uo&&sM(y.normalMap.format),metalnessMap:It,roughnessMap:kt,anisotropy:X,anisotropyMap:ne,clearcoat:en,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:ie,dispersion:gt,retroreflection:O,iridescence:A,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:de,specularColorMap:Le,specularIntensityMap:ze,transmission:J,transmissionMap:qe,thicknessMap:W,gradientMap:pe,opaque:y.transparent===!1&&y.blending===li&&y.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:ve,combine:y.combine,mapUv:ke&&m(y.map.channel),aoMapUv:Ze&&m(y.aoMap.channel),lightMapUv:ot&&m(y.lightMap.channel),bumpMapUv:je&&m(y.bumpMap.channel),normalMapUv:Ct&&m(y.normalMap.channel),displacementMapUv:Zt&&m(y.displacementMap.channel),emissiveMapUv:pn&&m(y.emissiveMap.channel),metalnessMapUv:It&&m(y.metalnessMap.channel),roughnessMapUv:kt&&m(y.roughnessMap.channel),anisotropyMapUv:ne&&m(y.anisotropyMap.channel),clearcoatMapUv:le&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(y.sheenRoughnessMap.channel),specularMapUv:de&&m(y.specularMap.channel),specularColorMapUv:Le&&m(y.specularColorMap.channel),specularIntensityMapUv:ze&&m(y.specularIntensityMap.channel),transmissionMapUv:qe&&m(y.transmissionMap.channel),thicknessMapUv:W&&m(y.thicknessMap.channel),alphaMapUv:se&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ct||X),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ke||se),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&Ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:pn&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mt,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),_(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let w=d[y.type],R;if(w){let T=ui[w];R=Ip.clone(T.uniforms)}else R=y.uniforms;return R}function b(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new nM(i,w,y,s),c.push(R),h.set(w,R)),R}function v(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:E}}function oM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function aM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=p),e++,_}function l(f,d,m,x,g,p,_){_.reversedDepth===!0&&(g=-g);let M=a(f,d,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(f,d,m,x,g,p){let _=a(f,d,m,x,g,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):t.unshift(_)}function h(f,d){t.length>1&&t.sort(f||aM),n.length>1&&n.sort(d||Zp),s.length>1&&s.sort(d||Zp)}function u(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function lM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jp,i.set(n,[o])):s>=r.length?(o=new Jp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new j};break;case"SpotLight":t={position:new k,direction:new k,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function uM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hM=0;function fM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dM(i){let e=new cM,t=uM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new Xe,o=new Xe;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,_=0,M=0,b=0,v=0,S=0,E=0,y=0,w=0,R=0;c.sort(fM);for(let L=0,I=c.length;L<I;L++){let C=c[L],F=C.color,N=C.intensity,U=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zi?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=F.r*N,u+=F.g*N,f+=F.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);R++}else if(C.isSunLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=V;let ee=B.getViewportCount();for(let Q=0;Q<ee;Q++)n.sunShadowMatrix[x+Q]=B.getMatrix(Q),n.sunShadowCascade[x+Q]=B._cascadeData[Q];x+=ee,m++}n.sun[d]=z,d++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=C.shadow.matrix,v++}n.directional[g]=z,g++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(F).multiplyScalar(N),z.distance=U,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;let B=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,B.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=V,E++}_++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(F).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=z,M++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let B=C.shadow,H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,S++}n.point[p]=z,p++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[b]=z,b++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==g||T.pointLength!==p||T.spotLength!==_||T.rectAreaLength!==M||T.hemiLength!==b||T.numSunShadows!==m||T.numDirectionalShadows!==v||T.numPointShadows!==S||T.numSpotShadows!==E||T.numSpotMaps!==y||T.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=_,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,T.sunLength=d,T.directionalLength=g,T.pointLength=p,T.spotLength=_,T.rectAreaLength=M,T.hemiLength=b,T.numSunShadows=m,T.numDirectionalShadows=v,T.numPointShadows=S,T.numSpotShadows=E,T.numSpotMaps=y,T.numLightProbes=R,n.version=hM++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){let b=c[_];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function jp(i){let e=new dM(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function pM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new jp(i),e.set(s,[a])):r>=o.length?(a=new jp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],bM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Qp=new Xe,zo=new k,vh=new k;function _M(i,e,t){let n=new br,s=new Oe,r=new Oe,o=new bt,a=new sl,l=new rl,c={},h=t.maxTextureSize,u={[oi]:Qt,[Qt]:oi,[Mt]:Mt},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eo;let p=this.type;this.render=function(S,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Gd&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Eo);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ai),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==this.type;I&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=S.length;C<F;C++){let N=S[C],U=N.shadow;if(U===void 0){Ie("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let V=U.getFrameExtents();s.multiply(V),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,U.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=z,U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Mr){if(N.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new rn(s.x,s.y,{format:Zi,type:$n,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new Xi(s.x,s.y,En),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=ei,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nt,U.map.depthTexture.magFilter=Nt}else N.isPointLight?(U.map=new ac(s.x),U.map.depthTexture=new nl(s.x,Yn)):(U.map=new rn(s.x,s.y),U.map.depthTexture=new Xi(s.x,s.y,Yn)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=ei,this.type===Eo?(U.map.depthTexture.compareFunction=z?sc:ic,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nt,U.map.depthTexture.magFilter=Nt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let B=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,y);for(let H=0;H<B;H++){let ee=U.getCamera(H);if(N.isPointLight){let Q=U.camera,ce=U.matrix,ue=N.distance||Q.far;ue!==Q.far&&(Q.far=ue,Q.updateProjectionMatrix()),zo.setFromMatrixPosition(N.matrixWorld),Q.position.copy(zo),vh.copy(Q.position),vh.add(xM[H]),Q.up.copy(bM[H]),Q.lookAt(vh),Q.updateMatrixWorld(),ce.makeTranslation(-zo.x,-zo.y,-zo.z),Qp.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Qp,Q.coordinateSystem,Q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,H),i.clear();else{H===0&&(i.setRenderTarget(U.map),i.clear());let Q=U.getViewport(H);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o)}n=U.getFrustum(H),b(E,y,ee,N,this.type)}U.isPointLightShadow!==!0&&this.type===Mr&&_(U,y),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,R,T)};function _(S,E){let y=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new rn(s.x,s.y,{format:Zi,type:$n}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,y,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,y,d,x,null)}function M(S,E,y,w){let R=null,T=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)R=T;else if(R=y.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=R.uuid,I=E.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let F=C[I];F===void 0&&(F=R.clone(),C[I]=F,E.addEventListener("dispose",v)),R=F}if(R.visible=E.visible,R.wireframe=E.wireframe,w===Mr?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=y}return R}function b(S,E,y,w,R){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Mr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let I=e.update(S),C=S.material;if(Array.isArray(C)){let F=I.groups;for(let N=0,U=F.length;N<U;N++){let V=F[N],z=C[V.materialIndex];if(z&&z.visible){let B=M(S,z,w,R);S.onBeforeShadow(i,S,E,y,I,B,V),i.renderBufferDirect(y,null,I,B,S,V),S.onAfterShadow(i,S,E,y,I,B,V)}}}else if(C.visible){let F=M(S,C,w,R);S.onBeforeShadow(i,S,E,y,I,F,null),i.renderBufferDirect(y,null,I,F,S,null),S.onAfterShadow(i,S,E,y,I,F,null)}}let L=S.children;for(let I=0,C=L.length;I<C;I++)b(L[I],E,y,w,R)}function v(S){S.target.removeEventListener("dispose",v);for(let y in c){let w=c[y],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function yM(i,e){function t(){let W=!1,pe=new bt,se=null,me=new bt(0,0,0,0);return{setMask:function(ve){se!==ve&&!W&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){W=ve},setClear:function(ve,oe,De,Re,At){At===!0&&(ve*=Re,oe*=Re,De*=Re),pe.set(ve,oe,De,Re),me.equals(pe)===!1&&(i.clearColor(ve,oe,De,Re),me.copy(pe))},reset:function(){W=!1,se=null,me.set(-1,0,0,0)}}}function n(){let W=!1,pe=!1,se=null,me=null,ve=null;return{setReversed:function(oe){if(pe!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=oe;let Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(oe){oe?Z(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(oe){se!==oe&&!W&&(i.depthMask(oe),se=oe)},setFunc:function(oe){if(pe&&(oe=Sp[oe]),me!==oe){switch(oe){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=oe}},setLocked:function(oe){W=oe},setClear:function(oe){ve!==oe&&(ve=oe,pe&&(oe=1-oe),i.clearDepth(oe))},reset:function(){W=!1,se=null,me=null,ve=null,pe=!1}}}function s(){let W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,At=null;return{setTest:function(ut){W||(ut?Z(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ut){pe!==ut&&!W&&(i.stencilMask(ut),pe=ut)},setFunc:function(ut,On,Zn){(se!==ut||me!==On||ve!==Zn)&&(i.stencilFunc(ut,On,Zn),se=ut,me=On,ve=Zn)},setOp:function(ut,On,Zn){(oe!==ut||De!==On||Re!==Zn)&&(i.stencilOp(ut,On,Zn),oe=ut,De=On,Re=Zn)},setLocked:function(ut){W=ut},setClear:function(ut){At!==ut&&(i.clearStencil(ut),At=ut)},reset:function(){W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,At=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,b=null,v=null,S=null,E=null,y=new j(0,0,0),w=0,R=!1,T=null,L=null,I=null,C=null,F=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=V>=2);let B=null,H={},ee=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ce=new bt().fromArray(ee),ue=new bt().fromArray(Q);function Be(W,pe,se,me){let ve=new Uint8Array(4),oe=i.createTexture();i.bindTexture(W,oe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<se;De++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(pe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return oe}let q={};q[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(lr),je(!1),Ct(Uu),Z(i.CULL_FACE),Ze(ai);function Z(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function ae(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function we(W,pe){return f[W]!==pe?(i.bindFramebuffer(W,pe),f[W]=pe,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function ge(W,pe){let se=m,me=!1;if(W){se=d.get(pe),se===void 0&&(se=[],d.set(pe,se));let ve=W.textures;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,De=ve.length;oe<De;oe++)se[oe]=i.COLOR_ATTACHMENT0+oe;se.length=ve.length,me=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,me=!0);me&&i.drawBuffers(se)}function ke(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let st={[Ts]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[Xd]:i.FUNC_REVERSE_SUBTRACT};st[qd]=i.MIN,st[Yd]=i.MAX;let Ne={[$d]:i.ZERO,[Kd]:i.ONE,[Zd]:i.SRC_COLOR,[zu]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[ku]:i.ONE_MINUS_SRC_ALPHA,[tp]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(W,pe,se,me,ve,oe,De,Re,At,ut){if(W===ai){g===!0&&(ae(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),W!==Hd){if(W!==p||ut!==R){if((_!==Ts||v!==Ts)&&(i.blendEquation(i.FUNC_ADD),_=Ts,v=Ts),ut)switch(W){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pt:i.blendFunc(i.ONE,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",W);break}else switch(W){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ro:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",W);break}M=null,b=null,S=null,E=null,y.set(0,0,0),w=0,p=W,R=ut}return}ve=ve||pe,oe=oe||se,De=De||me,(pe!==_||ve!==v)&&(i.blendEquationSeparate(st[pe],st[ve]),_=pe,v=ve),(se!==M||me!==b||oe!==S||De!==E)&&(i.blendFuncSeparate(Ne[se],Ne[me],Ne[oe],Ne[De]),M=se,b=me,S=oe,E=De),(Re.equals(y)===!1||At!==w)&&(i.blendColor(Re.r,Re.g,Re.b,At),y.copy(Re),w=At),p=W,R=!1}function ot(W,pe){W.side===Mt?ae(i.CULL_FACE):Z(i.CULL_FACE);let se=W.side===Qt;pe&&(se=!se),je(se),W.blending===li&&W.transparent===!1?Ze(ai):Ze(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let me=W.stencilWrite;a.setTest(me),me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),pn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(W){T!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),T=W)}function Ct(W){W!==kd?(Z(i.CULL_FACE),W!==L&&(W===Uu?i.cullFace(i.BACK):W===Vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),L=W}function Zt(W){W!==I&&(U&&i.lineWidth(W),I=W)}function pn(W,pe,se){W?(Z(i.POLYGON_OFFSET_FILL),(C!==pe||F!==se)&&(C=pe,F=se,o.getReversed()&&(pe=-pe),i.polygonOffset(pe,se))):ae(i.POLYGON_OFFSET_FILL)}function It(W){W?Z(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function kt(W){W===void 0&&(W=i.TEXTURE0+N-1),B!==W&&(i.activeTexture(W),B=W)}function X(W,pe,se){se===void 0&&(B===null?se=i.TEXTURE0+N-1:se=B);let me=H[se];me===void 0&&(me={type:void 0,texture:void 0},H[se]=me),(me.type!==W||me.texture!==pe)&&(B!==se&&(i.activeTexture(se),B=se),i.bindTexture(W,pe||q[W]),me.type=W,me.texture=pe)}function en(){let W=H[B];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function A(){try{i.texSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function le(){try{i.texStorage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function he(){try{i.texStorage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ie(){try{i.texImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function re(){try{i.texImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function fe(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function Pe(W,pe){u[W]!==pe&&(i.pixelStorei(W,pe),u[W]=pe)}function xe(W){ce.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function de(W){ue.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ue.copy(W))}function Le(W,pe){let se=c.get(pe);se===void 0&&(se=new WeakMap,c.set(pe,se));let me=se.get(W);me===void 0&&(me=i.getUniformBlockIndex(pe,W.name),se.set(W,me))}function ze(W,pe){let me=c.get(pe).get(W);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,W.__bindingPointIndex),l.set(pe,me))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,H={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,_=null,M=null,b=null,v=null,S=null,E=null,y=new j(0,0,0),w=0,R=!1,T=null,L=null,I=null,C=null,F=null,ce.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ae,bindFramebuffer:we,drawBuffers:ge,useProgram:ke,setBlending:Ze,setMaterial:ot,setFlipSided:je,setCullFace:Ct,setLineWidth:Zt,setPolygonOffset:pn,setScissorTest:It,activeTexture:kt,bindTexture:X,unbindTexture:en,compressedTexImage2D:gt,compressedTexImage3D:O,texImage2D:ie,texImage3D:re,pixelStorei:Pe,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:ze,texStorage2D:le,texStorage3D:he,texSubImage2D:A,texSubImage3D:Y,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:xe,viewport:de,reset:qe}}function vM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,A){return m?new OffscreenCanvas(O,A):hr("canvas")}function g(O,A,Y){let J=1,ne=gt(O);if((ne.width>Y||ne.height>Y)&&(J=Y/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let le=Math.floor(J*ne.width),he=Math.floor(J*ne.height);f===void 0&&(f=x(le,he));let ie=A?x(le,he):f;return ie.width=le,ie.height=he,ie.getContext("2d").drawImage(O,0,0,le,he),Ie("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+le+"x"+he+")."),ie}else return"data"in O&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),O;return O}function p(O){return O.generateMipmaps}function _(O){i.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(O,A,Y,J,ne,le=!1){if(O!==null){if(i[O]!==void 0)return i[O];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he;J&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8),Y===i.UNSIGNED_SHORT&&he&&(ie=he.R16_EXT),Y===i.SHORT&&he&&(ie=he.R16_SNORM_EXT)),A===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),A===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8),Y===i.UNSIGNED_SHORT&&he&&(ie=he.RG16_EXT),Y===i.SHORT&&he&&(ie=he.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),A===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),A===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),A===i.RGB&&(Y===i.UNSIGNED_SHORT&&he&&(ie=he.RGB16_EXT),Y===i.SHORT&&he&&(ie=he.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),A===i.RGBA){let re=le?io:Je.getTransfer(ne);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=re===dt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&he&&(ie=he.RGBA16_EXT),Y===i.SHORT&&he&&(ie=he.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(O,A){let Y;return O?A===null||A===Yn||A===Tr?Y=i.DEPTH24_STENCIL8:A===En?Y=i.DEPTH32F_STENCIL8:A===wr&&(Y=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Yn||A===Tr?Y=i.DEPTH_COMPONENT24:A===En?Y=i.DEPTH_COMPONENT32F:A===wr&&(Y=i.DEPTH_COMPONENT16),Y}function S(O,A){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nt&&O.minFilter!==Ot?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function E(O){let A=O.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function y(O){let A=O.target;A.removeEventListener("dispose",y),T(A)}function w(O){let A=n.get(O);if(A.__webglInit===void 0)return;let Y=O.source,J=d.get(Y);if(J){let ne=J[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(O),Object.keys(J).length===0&&d.delete(Y)}n.remove(O)}function R(O){let A=n.get(O);i.deleteTexture(A.__webglTexture);let Y=O.source,J=d.get(Y);delete J[A.__cacheKey],o.memory.textures--}function T(O){let A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let ne=0;ne<A.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(A.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)i.deleteFramebuffer(A.__webglFramebuffer[J]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Y=O.textures;for(let J=0,ne=Y.length;J<ne;J++){let le=n.get(Y[J]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Y[J])}n.remove(O)}let L=0;function I(){L=0}function C(){return L}function F(O){L=O}function N(){let O=L;return O>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,O}function U(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function V(O,A){let Y=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){let J=O.image;if(J===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,O,A);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+A)}function z(O,A){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ae(Y,O,A);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+A)}function B(O,A){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ae(Y,O,A);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+A)}function H(O,A){let Y=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){we(Y,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+A)}let ee={[Wn]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[cr]:i.MIRRORED_REPEAT},Q={[Nt]:i.NEAREST,[_l]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},ce={[pp]:i.NEVER,[_p]:i.ALWAYS,[mp]:i.LESS,[ic]:i.LEQUAL,[gp]:i.EQUAL,[sc]:i.GEQUAL,[xp]:i.GREATER,[bp]:i.NOTEQUAL};function ue(O,A){if(A.type===En&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ot||A.magFilter===Sr||A.magFilter===Es||A.magFilter===qn||A.minFilter===Ot||A.minFilter===Sr||A.minFilter===Es||A.minFilter===qn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,ee[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,ee[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,ee[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Q[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Nt||A.minFilter!==Es&&A.minFilter!==qn||A.type===En&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Be(O,A){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",E));let J=A.source,ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));let le=U(A);if(le!==O.__cacheKey){ne[le]===void 0&&(ne[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[le].usedTimes++;let he=ne[O.__cacheKey];he!==void 0&&(ne[O.__cacheKey].usedTimes--,he.usedTimes===0&&R(A)),O.__cacheKey=le,O.__webglTexture=ne[le].texture}return Y}function q(O,A,Y){return Math.floor(Math.floor(O/Y)/A)}function Z(O,A,Y,J){let le=O.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Y,J,A.data);else{le.sort((Pe,xe)=>Pe.start-xe.start);let he=0;for(let Pe=1;Pe<le.length;Pe++){let xe=le[he],de=le[Pe],Le=xe.start+xe.count,ze=q(de.start,A.width,4),qe=q(xe.start,A.width,4);de.start<=Le+1&&ze===qe&&q(de.start+de.count-1,A.width,4)===ze?xe.count=Math.max(xe.count,de.start+de.count-xe.start):(++he,le[he]=de)}le.length=he+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let Pe=0,xe=le.length;Pe<xe;Pe++){let de=le[Pe],Le=Math.floor(de.start/4),ze=Math.ceil(de.count/4),qe=Le%A.width,W=Math.floor(Le/A.width),pe=ze,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,qe,W,pe,se,Y,J,A.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ae(O,A,Y){let J=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=i.TEXTURE_3D);let ne=Be(O,A),le=A.source;t.bindTexture(J,O.__webglTexture,i.TEXTURE0+Y);let he=n.get(le);if(le.version!==he.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),me=A.colorSpace===Ii?null:Je.getPrimaries(A.colorSpace),ve=A.colorSpace===Ii||se===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let re=g(A.image,!1,s.maxTextureSize);re=en(A,re);let fe=r.convert(A.format,A.colorSpace),Pe=r.convert(A.type),xe=b(A.internalFormat,fe,Pe,A.normalized,A.colorSpace,A.isVideoTexture);ue(J,A);let de,Le=A.mipmaps,ze=A.isVideoTexture!==!0,qe=he.__version===void 0||ne===!0,W=le.dataReady,pe=S(A,re);if(A.isDepthTexture)xe=v(A.format===Ki,A.type),qe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Pe,null));else if(A.isDataTexture)if(Le.length>0){ze&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],ze?W&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(i.TEXTURE_2D,se,xe,de.width,de.height,0,fe,Pe,de.data);A.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(i.TEXTURE_2D,pe,xe,re.width,re.height),W&&Z(A,re,fe,Pe)):t.texImage2D(i.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Pe,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,Le[0].width,Le[0].height,re.depth);for(let se=0,me=Le.length;se<me;se++)if(de=Le[se],A.format!==Rn)if(fe!==null)if(ze){if(W)if(A.layerUpdates.size>0){let ve=uh(de.width,de.height,A.format,A.type);for(let oe of A.layerUpdates){let De=de.data.subarray(oe*ve/de.data.BYTES_PER_ELEMENT,(oe+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,oe,de.width,de.height,1,fe,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,xe,de.width,de.height,re.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,xe,de.width,de.height,re.depth,0,fe,Pe,de.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ze&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],A.format!==Rn?fe!==null?ze?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,se,xe,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?W&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(i.TEXTURE_2D,se,xe,de.width,de.height,0,fe,Pe,de.data)}else if(A.isDataArrayTexture)if(ze){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,xe,re.width,re.height,re.depth),W)if(A.layerUpdates.size>0){let se=uh(re.width,re.height,A.format,A.type);for(let me of A.layerUpdates){let ve=re.data.subarray(me*se/re.data.BYTES_PER_ELEMENT,(me+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,re.width,re.height,1,fe,Pe,ve)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(A.isData3DTexture)ze?(qe&&t.texStorage3D(i.TEXTURE_3D,pe,xe,re.width,re.height,re.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)):t.texImage3D(i.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(A.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(i.TEXTURE_2D,pe,xe,re.width,re.height);else{let se=re.width,me=re.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,xe,se,me,0,fe,Pe,null),se>>=1,me>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),u.add(A),se.onpaint=me=>{let ve=me.changedElements;for(let oe of u)ve.includes(oe.image)&&(oe.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let ve=i.RGBA,oe=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,oe,De,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(ze&&qe){let se=gt(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,xe,se.width,se.height)}for(let se=0,me=Le.length;se<me;se++)de=Le[se],ze?W&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe,Pe,de):t.texImage2D(i.TEXTURE_2D,se,xe,fe,Pe,de);A.generateMipmaps=!1}else if(ze){if(qe){let se=gt(re);t.texStorage2D(i.TEXTURE_2D,pe,xe,se.width,se.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Pe,re)}else t.texImage2D(i.TEXTURE_2D,0,xe,fe,Pe,re);p(A)&&_(J),he.__version=le.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function we(O,A,Y){if(A.image.length!==6)return;let J=Be(O,A),ne=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);let le=n.get(ne);if(ne.version!==le.__version||J===!0){t.activeTexture(i.TEXTURE0+Y);let he=Je.getPrimaries(Je.workingColorSpace),ie=A.colorSpace===Ii?null:Je.getPrimaries(A.colorSpace),re=A.colorSpace===Ii||he===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let fe=A.isCompressedTexture||A.image[0].isCompressedTexture,Pe=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!fe&&!Pe?xe[oe]=g(A.image[oe],!0,s.maxCubemapSize):xe[oe]=Pe?A.image[oe].image:A.image[oe],xe[oe]=en(A,xe[oe]);let de=xe[0],Le=r.convert(A.format,A.colorSpace),ze=r.convert(A.type),qe=b(A.internalFormat,Le,ze,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,pe=le.__version===void 0||J===!0,se=ne.dataReady,me=S(A,de);ue(i.TEXTURE_CUBE_MAP,A);let ve;if(fe){W&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,de.width,de.height);for(let oe=0;oe<6;oe++){ve=xe[oe].mipmaps;for(let De=0;De<ve.length;De++){let Re=ve[De];A.format!==Rn?Le!==null?W?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,ze,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Le,ze,Re.data)}}}else{if(ve=A.mipmaps,W&&pe){ve.length>0&&me++;let oe=gt(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Pe){W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Le,ze,xe[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,xe[oe].width,xe[oe].height,0,Le,ze,xe[oe].data);for(let De=0;De<ve.length;De++){let At=ve[De].image[oe].image;W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,At.width,At.height,Le,ze,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,At.width,At.height,0,Le,ze,At.data)}}else{W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,ze,xe[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Le,ze,xe[oe]);for(let De=0;De<ve.length;De++){let Re=ve[De];W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Le,ze,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,Le,ze,Re.image[oe])}}}p(A)&&_(i.TEXTURE_CUBE_MAP),le.__version=ne.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ge(O,A,Y,J,ne,le){let he=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),re=b(Y.internalFormat,he,ie,Y.normalized,Y.colorSpace),fe=n.get(A),Pe=n.get(Y);if(Pe.__renderTarget=A,!fe.__hasExternalTextures){let xe=Math.max(1,A.width>>le),de=Math.max(1,A.height>>le);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,le,re,xe,de,A.depth,0,he,ie,null):t.texImage2D(ne,le,re,xe,de,0,he,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,Pe.__webglTexture,0,It(A)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,Pe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(O,A,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){let J=A.depthTexture,ne=J&&J.isDepthTexture?J.type:null,le=v(A.stencilBuffer,ne),he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;kt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(A),le,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(A),le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,le,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,O)}else{let J=A.textures;for(let ne=0;ne<J.length;ne++){let le=J[ne],he=r.convert(le.format,le.colorSpace),ie=r.convert(le.type),re=b(le.internalFormat,he,ie,le.normalized,le.colorSpace);kt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It(A),re,A.width,A.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,It(A),re,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,re,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(O,A,Y){let J=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(A.depthTexture);if(ne.__renderTarget=A,(!ne.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ue(i.TEXTURE_CUBE_MAP,A.depthTexture);let fe=r.convert(A.depthTexture.format),Pe=r.convert(A.depthTexture.type),xe;A.depthTexture.format===ei?xe=i.DEPTH_COMPONENT24:A.depthTexture.format===Ki&&(xe=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,xe,A.width,A.height,0,fe,Pe,null)}}else V(A.depthTexture,0);let le=ne.__webglTexture,he=It(A),ie=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,re=A.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ei)kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,le,0);else if(A.depthTexture.format===Ki)kt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(O){let A=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let J=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){let ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=J}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let J=0;J<6;J++)st(A.__webglFramebuffer[J],O,J);else{let J=O.texture.mipmaps;J&&J.length>0?st(A.__webglFramebuffer[0],O,0):st(A.__webglFramebuffer,O,0)}else if(Y){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=i.createRenderbuffer(),ke(A.__webglDepthbuffer[J],O,!1);else{let ne=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,le)}}else{let J=O.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ke(A.__webglDepthbuffer,O,!1);else{let ne=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(O,A,Y){let J=n.get(O);A!==void 0&&ge(J.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ne(O)}function ot(O){let A=O.texture,Y=n.get(O),J=n.get(A);O.addEventListener("dispose",y);let ne=O.textures,le=O.isWebGLCubeRenderTarget===!0,he=ne.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=A.version,o.memory.textures++),le){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let re=0;re<A.mipmaps.length;re++)Y.__webglFramebuffer[ie][re]=i.createFramebuffer()}else Y.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(he)for(let ie=0,re=ne.length;ie<re;ie++){let fe=n.get(ne[ie]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&kt(O)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let re=ne[ie];Y.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let fe=r.convert(re.format,re.colorSpace),Pe=r.convert(re.type),xe=b(re.internalFormat,fe,Pe,re.normalized,re.colorSpace,O.isXRRenderTarget===!0),de=It(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,xe,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ue(i.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)ge(Y.__webglFramebuffer[ie][re],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else ge(Y.__webglFramebuffer[ie],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ie=0,re=ne.length;ie<re;ie++){let fe=ne[ie],Pe=n.get(fe),xe=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(xe=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),ue(xe,fe),ge(Y.__webglFramebuffer,O,fe,i.COLOR_ATTACHMENT0+ie,xe,0),p(fe)&&_(xe)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),ue(ie,A),A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)ge(Y.__webglFramebuffer[re],O,A,i.COLOR_ATTACHMENT0,ie,re);else ge(Y.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,ie,0);p(A)&&_(ie),t.unbindTexture()}O.depthBuffer&&Ne(O)}function je(O){let A=O.textures;for(let Y=0,J=A.length;Y<J;Y++){let ne=A[Y];if(p(ne)){let le=M(O),he=n.get(ne).__webglTexture;t.bindTexture(le,he),_(le),t.unbindTexture()}}}let Ct=[],Zt=[];function pn(O){if(O.samples>0){if(kt(O)===!1){let A=O.textures,Y=O.width,J=O.height,ne=i.COLOR_BUFFER_BIT,le=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(O),ie=A.length>1;if(ie)for(let fe=0;fe<A.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let re=O.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(A[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,Y,J,0,0,Y,J,ne,i.NEAREST),l===!0&&(Ct.length=0,Zt.length=0,Ct.push(i.COLOR_ATTACHMENT0+fe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Ct.push(le),Zt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let fe=0;fe<A.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(A[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function It(O){return Math.min(s.maxSamples,O.samples)}function kt(O){let A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(O){let A=o.render.frame;h.get(O)!==A&&(h.set(O,A),O.update())}function en(O,A){let Y=O.colorSpace,J=O.format,ne=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==dn&&Y!==Ii&&(Je.getTransfer(Y)===dt?(J!==Rn||ne!==yn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",Y)),A}function gt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=H,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function MM(i,e){function t(n,s=Ii){let r,o=Je.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ju)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ku)return i.BYTE;if(n===Zu)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===Qu)return i.ALPHA;if(n===eh)return i.RGB;if(n===Rn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Sl)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Io||n===Po||n===Lo||n===Fo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Rl||n===Cl||n===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Ll||n===Fl||n===Dl||n===Nl||n===Do||n===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pl||n===Ll)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dl)return r.COMPRESSED_R11_EAC;if(n===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Do)return r.COMPRESSED_RG11_EAC;if(n===Ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ul||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===jl||n===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===tc||n===No||n===nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var SM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ho(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:SM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ih=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Ch,p={},_=t.getContextAttributes(),M=null,b=null,v=[],S=[],E=new Oe,y=null,w=null,R=new Ht;R.viewport=new bt;let T=new Ht;T.viewport=new bt;let L=[R,T],I=new pl,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=v[q];return Z===void 0&&(Z=new mr,v[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=v[q];return Z===void 0&&(Z=new mr,v[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=v[q];return Z===void 0&&(Z=new mr,v[q]=Z),Z.getHandSpace()};function N(q){let Z=S.indexOf(q.inputSource);if(Z===-1)return;let ae=v[Z];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||o),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let q=0;q<v.length;q++){let Z=S[q];Z!==null&&(S[q]=null,v[q].disconnect(Z))}C=null,F=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(M),d=null,f=null,u=null,s=null,b=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,we=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?Ki:ei,we=_.stencil?Tr:Yn);let ke={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new rn(f.textureWidth,f.textureHeight,{format:Rn,type:yn,depthTexture:new Xi(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new rn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let Z=0;Z<q.removed.length;Z++){let ae=q.removed[Z],we=S.indexOf(ae);we>=0&&(S[we]=null,v[we].disconnect(ae))}for(let Z=0;Z<q.added.length;Z++){let ae=q.added[Z],we=S.indexOf(ae);if(we===-1){for(let ke=0;ke<v.length;ke++)if(ke>=S.length){S.push(ae),we=ke;break}else if(S[ke]===null){S[ke]=ae,we=ke;break}if(we===-1)break}let ge=v[we];ge&&ge.connect(ae)}}let z=new k,B=new k;function H(q,Z,ae){z.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);let we=z.distanceTo(B),ge=Z.projectionMatrix.elements,ke=ae.projectionMatrix.elements,st=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],ot=(ge[9]-1)/ge[5],je=(ge[8]-1)/ge[0],Ct=(ke[8]+1)/ke[0],Zt=st*je,pn=st*Ct,It=we/(-je+Ct),kt=It*-je;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(kt),q.translateZ(It),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let X=st+It,en=Ne+It,gt=Zt-kt,O=pn+(we-kt),A=Ze*Ne/en*X,Y=ot*Ne/en*X;q.projectionMatrix.makePerspective(gt,O,A,Y,X,en),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,ae=q.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),I.near=T.near=R.near=Z,I.far=T.far=R.far=ae,(C!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,F=I.far),I.layers.mask=q.layers.mask|6,R.layers.mask=I.layers.mask&-5,T.layers.mask=I.layers.mask&-3;let we=q.parent,ge=I.cameras;ee(I,we);for(let ke=0;ke<ge.length;ke++)ee(ge[ke],we);ge.length===2?H(I,R,T):I.projectionMatrix.copy(R.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,I,we)};function Q(q,Z,ae){ae===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ps*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(q){return p[q]};let ce=null;function ue(q,Z){if(h=Z.getViewerPose(c||o),m=Z,h!==null){let ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let we=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let Ne=0;Ne<ae.length;Ne++){let Ze=ae[Ne],ot=null;if(d!==null)ot=d.getViewport(Ze);else{let Ct=u.getViewSubImage(f,Ze);ot=Ct.viewport,Ne===0&&(e.setRenderTargetTextures(b,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(b))}let je=L[Ne];je===void 0&&(je=new Ht,je.layers.enable(Ne),je.viewport=new bt,L[Ne]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(I.matrix.copy(je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(je)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ne=u.getDepthInformation(ae[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ne=0;Ne<ae.length;Ne++){let Ze=ae[Ne].camera;if(Ze){let ot=p[Ze];ot||(ot=new ho,p[Ze]=ot);let je=u.getCameraImage(Ze);ot.sourceTexture=je}}}}for(let ae=0;ae<v.length;ae++){let we=S[ae],ge=v[ae];we!==null&&ge!==void 0&&ge.update(we,Z,c||o)}ce&&ce(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let Be=new em;Be.setAnimationLoop(ue),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}},TM=new Xe,om=new We;om.set(-1,0,0,0,1,0,0,0,1);function AM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ah(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,_,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,_,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=e.get(p),M=_.envMap,b=_.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(TM.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(om),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function EM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=s[b.id];S===void 0&&(g(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",_));let E=v.program;n.updateUBOMapping(b,E);let y=e.render.frame;r[b.id]!==y&&(f(b),r[b.id]=y)}function h(b){let v=u();b.__bindingPointIndex=v;let S=i.createBuffer(),E=b.__size,y=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],S=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let y=0,w=S.length;y<w;y++){let R=S[y];if(Array.isArray(R))for(let T=0,L=R.length;T<L;T++)d(R[T],y,T,E);else d(R,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,v,S,E){if(x(b,v,S,E)===!0){let y=b.__offset,w=b.value;if(Array.isArray(w)){let R=0;for(let T=0;T<w.length;T++){let L=w[T],I=p(L);m(L,b.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,b.__data)}}function m(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function x(b,v,S,E){let y=b.value,w=v+"_"+S;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:ArrayBuffer.isView(y)?E[w]=y.slice():E[w]=y.clone(),!0;{let R=E[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return E[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(b){let v=b.uniforms,S=0,E=16;for(let w=0,R=v.length;w<R;w++){let T=Array.isArray(v[w])?v[w]:[v[w]];for(let L=0,I=T.length;L<I;L++){let C=T[L],F=Array.isArray(C.value)?C.value:[C.value];for(let N=0,U=F.length;N<U;N++){let V=F[N],z=p(V),B=S%E,H=B%z.boundary,ee=B+H;S+=H,ee!==0&&E-ee<z.storage&&(S+=E-ee),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=z.storage}}}let y=S%E;return y>0&&(S+=E-y),b.__size=S,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),v}function _(b){let v=b.target;v.removeEventListener("dispose",_);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var RM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function CM(){return ci===null&&(ci=new xr(RM,16,16,Zi,$n),ci.name="DFG_LUT",ci.minFilter=Ot,ci.magFilter=Ot,ci.wrapS=fn,ci.wrapT=fn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var Pr=class{constructor(e={}){let{canvas:t=yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Al,Tl,wl]),p=new Set([yn,Yn,wr,Tr,vl,Ml]),_=new Uint32Array(4),M=new Int32Array(4),b=new k,v=null,S=null,E=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,T=!1,L=null,I=null,C=null,F=null;this._outputColorSpace=vt;let N=0,U=0,V=null,z=-1,B=null,H=new bt,ee=new bt,Q=null,ce=new j(0),ue=0,Be=t.width,q=t.height,Z=1,ae=null,we=null,ge=new bt(0,0,Be,q),ke=new bt(0,0,Be,q),st=!1,Ne=new br,Ze=!1,ot=!1,je=new Xe,Ct=new k,Zt=new bt,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function kt(){return V===null?Z:1}let X=n;function en(P,G){return t.getContext(P,G)}let gt,O,A,Y,J,ne,le,he,ie,re,fe,Pe,xe,de,Le,ze,qe,W,pe,se,me,ve,oe;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",On,!1),X===null){let G="webgl2";if(X=en(G,P),X===null)throw en(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(P){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",On,!1),Ve("WebGLRenderer: "+P.message),P}function De(){gt=new Oy(X),gt.init(),me=new MM(X,gt),O=new Ay(X,gt,e,me),A=new yM(X,gt),O.reversedDepthBuffer&&f&&A.buffers.depth.setReversed(!0),I=X.createFramebuffer(),C=X.createFramebuffer(),F=X.createFramebuffer(),Y=new zy(X),J=new oM,ne=new vM(X,gt,A,J,O,me,Y),le=new Ny(R),he=new Vx(X),ve=new wy(X,he),ie=new Uy(X,he,Y,ve),re=new Vy(X,ie,he,ve,Y),W=new ky(X,O,ne),Le=new Ey(J),fe=new rM(R,le,gt,O,ve,Le),Pe=new AM(R,J),xe=new lM,de=new pM(gt),qe=new Sy(R,le,A,re,m,l),ze=new _M(R,re,O),oe=new EM(X,Y,O,A),pe=new Ty(X,gt,Y),se=new By(X,gt,Y),Y.programs=fe.programs,R.capabilities=O,R.extensions=gt,R.properties=J,R.renderLists=xe,R.shadowMap=ze,R.state=A,R.info=Y}x!==yn&&(w=new Hy(x,t.width,t.height,a,s,r));let Re=new Ih(R,X);this.xr=Re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let P=gt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=gt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(Be,q,!1))},this.getSize=function(P){return P.set(Be,q)},this.setSize=function(P,G,te=!0){if(Re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=P,q=G,t.width=Math.floor(P*Z),t.height=Math.floor(G*Z),te===!0&&(t.style.width=P+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(Be*Z,q*Z).floor()},this.setDrawingBufferSize=function(P,G,te){Be=P,q=G,Z=te,t.width=Math.floor(P*te),t.height=Math.floor(G*te),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(x===yn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,G,te,$){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,G,te,$),A.viewport(H.copy(ge).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(ke)},this.setScissor=function(P,G,te,$){P.isVector4?ke.set(P.x,P.y,P.z,P.w):ke.set(P,G,te,$),A.scissor(ee.copy(ke).multiplyScalar(Z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(P){A.setScissorTest(st=P)},this.setOpaqueSort=function(P){ae=P},this.setTransparentSort=function(P){we=P},this.getClearColor=function(P){return P.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,te=!0){let $=0;if(P){let K=!1;if(V!==null){let ye=V.texture.format;K=g.has(ye)}if(K){let ye=V.texture.type,Te=p.has(ye),_e=qe.getClearColor(),Ae=qe.getClearAlpha(),Ce=_e.r,$e=_e.g,et=_e.b;Te?(_[0]=Ce,_[1]=$e,_[2]=et,_[3]=Ae,X.clearBufferuiv(X.COLOR,0,_)):(M[0]=Ce,M[1]=$e,M[2]=et,M[3]=Ae,X.clearBufferiv(X.COLOR,0,M))}else $|=X.COLOR_BUFFER_BIT}G&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),L=P},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",On,!1),qe.dispose(),xe.dispose(),de.dispose(),J.dispose(),le.dispose(),re.dispose(),ve.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Vf),Re.removeEventListener("sessionend",Gf),os.stop()};function At(P){P.preventDefault(),so("WebGLRenderer: Context Lost."),T=!0}function ut(){so("WebGLRenderer: Context Restored."),T=!1;let P=Y.autoReset,G=ze.enabled,te=ze.autoUpdate,$=ze.needsUpdate,K=ze.type;De(),Y.autoReset=P,ze.enabled=G,ze.autoUpdate=te,ze.needsUpdate=$,ze.type=K}function On(P){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Zn(P){let G=P.target;G.removeEventListener("dispose",Zn),dg(G)}function dg(P){pg(P),J.remove(P)}function pg(P){let G=J.get(P).programs;G!==void 0&&(G.forEach(function(te){fe.releaseProgram(te)}),P.isShaderMaterial&&fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,te,$,K,ye){G===null&&(G=pn);let Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,_e=xg(P,G,te,$,K);A.setMaterial($,Te);let Ae=te.index,Ce=1;if($.wireframe===!0){if(Ae=ie.getWireframeAttribute(te),Ae===void 0)return;Ce=2}let $e=te.drawRange,et=te.attributes.position,Ee=$e.start*Ce,ht=($e.start+$e.count)*Ce;ye!==null&&(Ee=Math.max(Ee,ye.start*Ce),ht=Math.min(ht,(ye.start+ye.count)*Ce)),Ae!==null?(Ee=Math.max(Ee,0),ht=Math.min(ht,Ae.count)):et!=null&&(Ee=Math.max(Ee,0),ht=Math.min(ht,et.count));let Vt=ht-Ee;if(Vt<0||Vt===1/0)return;ve.setup(K,$,_e,te,Ae);let Rt,St=pe;if(Ae!==null&&(Rt=he.get(Ae),St=se,St.setIndex(Rt)),K.isMesh)$.wireframe===!0?(A.setLineWidth($.wireframeLinewidth*kt()),St.setMode(X.LINES)):St.setMode(X.TRIANGLES);else if(K.isLine){let tn=$.linewidth;tn===void 0&&(tn=1),A.setLineWidth(tn*kt()),K.isLineSegments?St.setMode(X.LINES):K.isLineLoop?St.setMode(X.LINE_LOOP):St.setMode(X.LINE_STRIP)}else K.isPoints?St.setMode(X.POINTS):K.isSprite&&St.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let tn=K._multiDrawStarts,Se=K._multiDrawCounts,un=K._multiDrawCount,at=Ae?he.get(Ae).bytesPerElement:1,Cn=J.get($).currentProgram.getUniforms();for(let Jn=0;Jn<un;Jn++)Cn.setValue(X,"_gl_DrawID",Jn),St.render(tn[Jn]/at,Se[Jn])}else if(K.isInstancedMesh)St.renderInstances(Ee,Vt,K.count);else if(te.isInstancedBufferGeometry){let tn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Se=Math.min(te.instanceCount,tn);St.renderInstances(Ee,Vt,Se)}else St.render(Ee,Vt)};function kf(P,G,te,$){L!==null&&P.isNodeMaterial&&L.setObject($,P),Ze===!0&&Le.setState(P,te,!1),P.transparent===!0&&P.side===Mt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,ua(P,G,$),P.side=oi,P.needsUpdate=!0,ua(P,G,$),P.side=Mt):ua(P,G,$)}this.compile=function(P,G,te=null){te===null&&(te=P),L!==null&&L.renderStart(P,G,te),S=de.get(te),S.init(G),y.push(S),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),P!==te&&P.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),Ze===!0&&Le.setGlobalState(this.clippingPlanes,G),L!==null&&ze.render(S.state.shadowsArray,te,G);let $=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let ye=K.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let _e=ye[Te];kf(_e,te,G,K),$.add(_e)}else kf(ye,te,G,K),$.add(ye)}),S=y.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(P,G,te=null){let $=this.compile(P,G,te);return new Promise(K=>{function ye(){if($.forEach(function(Te){let Ae=J.get(Te).currentProgram;(Ae===void 0||Ae.isReady())&&$.delete(Te)}),$.size===0){K(P);return}setTimeout(ye,10)}gt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $c=null;function mg(P){$c&&$c(P)}function Vf(){os.stop()}function Gf(){os.start()}let os=new em;os.setAnimationLoop(mg),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(P){$c=P,Re.setAnimationLoop(P),P===null?os.stop():os.start()},Re.addEventListener("sessionstart",Vf),Re.addEventListener("sessionend",Gf),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;L!==null&&L.renderStart(P,G);let te=Re.enabled===!0&&Re.isPresenting===!0,$=w!==null&&(V===null||te)&&w.begin(R,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(G),G=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,G,V),S=de.get(P,y.length),S.init(G),S.state.textureUnits=ne.getTextureUnits(),y.push(S),je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ne.setFromProjectionMatrix(je,Gn,G.reversedDepth),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),v=xe.get(P,E.length),v.init(),E.push(v),Re.enabled===!0&&Re.isPresenting===!0){let Te=R.xr.getDepthSensingMesh();Te!==null&&Kc(Te,G,-1/0,R.sortObjects)}Kc(P,G,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),R.sortObjects===!0&&v.sort(ae,we),It=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,It&&qe.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Le.beginShadows();let K=S.state.shadowsArray;if(ze.render(K,P,G),Ze===!0&&Le.endShadows(),($&&w.hasRenderPass())===!1){let Te=v.opaque,_e=v.transmissive;if(S.setupLights(),G.isArrayCamera){let Ae=G.cameras;if(_e.length>0)for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];Wf(Te,_e,P,et)}It&&qe.render(P);for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];Hf(v,P,et,et.viewport)}}else _e.length>0&&Wf(Te,_e,P,G),It&&qe.render(P),Hf(v,P,G)}V!==null&&U===0&&(ne.updateMultisampleRenderTarget(V),ne.updateRenderTargetMipmap(V)),$&&w.end(R),P.isScene===!0&&P.onAfterRender(R,P,G),ve.resetDefaultState(),z=-1,B=null,y.pop(),y.length>0?(S=y[y.length-1],ne.setTextureUnits(S.state.textureUnits),Ze===!0&&Le.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,L!==null&&L.renderEnd()};function Kc(P,G,te,$){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(Ne)){$&&Zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(je);let Te=re.update(P),_e=P.material;_e.visible&&v.push(P,Te,_e,te,Zt.z,null,G)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(Ne))){let Te=re.update(P),_e=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Zt.copy(P.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Zt.copy(Te.boundingSphere.center)),Zt.applyMatrix4(P.matrixWorld).applyMatrix4(je)),Array.isArray(_e)){let Ae=Te.groups;for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce],Ee=_e[et.materialIndex];Ee&&Ee.visible&&v.push(P,Te,Ee,te,Zt.z,et,G)}}else _e.visible&&v.push(P,Te,_e,te,Zt.z,null,G)}}let ye=P.children;for(let Te=0,_e=ye.length;Te<_e;Te++)Kc(ye[Te],G,te,$)}function Hf(P,G,te,$){let{opaque:K,transmissive:ye,transparent:Te}=P;S.setupLightsView(te),Ze===!0&&Le.setGlobalState(R.clippingPlanes,te),$&&A.viewport(H.copy($)),K.length>0&&ca(K,G,te),ye.length>0&&ca(ye,G,te),Te.length>0&&ca(Te,G,te),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Wf(P,G,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Ee=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new rn(1,1,{generateMipmaps:!0,type:Ee?$n:yn,minFilter:qn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ye=S.state.transmissionRenderTarget[$.id],Te=$.viewport||H;ye.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);let _e=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(ce),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),It&&qe.render(te);let $e=R.toneMapping;R.toneMapping=Xn;let et=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),Ze===!0&&Le.setGlobalState(R.clippingPlanes,$),ca(P,te,$),ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ht=0,Vt=G.length;ht<Vt;ht++){let Rt=G[ht],{object:St,geometry:tn,material:Se,group:un}=Rt;if(Se.side===Mt&&St.layers.test($.layers)){let at=Se.side;Se.side=Qt,Se.needsUpdate=!0,Xf(St,te,$,tn,Se,un),Se.side=at,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye))}R.setRenderTarget(_e,Ae,Ce),R.setClearColor(ce,ue),et!==void 0&&($.viewport=et),R.toneMapping=$e}function ca(P,G,te){let $=G.isScene===!0?G.overrideMaterial:null;for(let K=0,ye=P.length;K<ye;K++){let Te=P[K],{object:_e,geometry:Ae,group:Ce}=Te,$e=Te.material;$e.allowOverride===!0&&$!==null&&($e=$),_e.layers.test(te.layers)&&Xf(_e,G,te,Ae,$e,Ce)}}function Xf(P,G,te,$,K,ye){L!==null&&K.isNodeMaterial&&L.setObject(P,K),P.onBeforeRender(R,G,te,$,K,ye),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(R,G,te,$,P,ye),K.transparent===!0&&K.side===Mt&&K.forceSinglePass===!1?(K.side=Qt,K.needsUpdate=!0,R.renderBufferDirect(te,G,$,K,P,ye),K.side=oi,K.needsUpdate=!0,R.renderBufferDirect(te,G,$,K,P,ye),K.side=Mt):R.renderBufferDirect(te,G,$,K,P,ye),P.onAfterRender(R,G,te,$,K,ye)}function ua(P,G,te){G.isScene!==!0&&(G=pn);let $=J.get(P),K=S.state.lights,ye=S.state.shadowsArray,Te=K.state.version,_e=fe.getParameters(P,K.state,ye,G,te,S.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(_e),Ce=$.programs;$.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let $e=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;$.envMap=le.get(P.envMap||$.environment,$e),$.envMapRotation=$.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ce===void 0&&(P.addEventListener("dispose",Zn),Ce=new Map,$.programs=Ce);let et=Ce.get(Ae);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Te)return Yf(P,_e),et}else _e.uniforms=fe.getUniforms(P),L!==null&&P.isNodeMaterial&&L.build(P,te,_e),P.onBeforeCompile(_e,R),et=fe.acquireProgram(_e,Ae),Ce.set(Ae,et),$.uniforms=_e.uniforms;let Ee=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ee.clippingPlanes=Le.uniform),Yf(P,_e),$.needsLights=_g(P),$.lightsStateVersion=Te,$.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.sunLights.value=K.state.sun,Ee.sunLightShadows.value=K.state.sunShadow,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.sunShadowMatrix.value=K.state.sunShadowMatrix,Ee.sunShadowCascade.value=K.state.sunShadowCascade,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotLightMatrix.value=K.state.spotLightMatrix,Ee.spotLightMap.value=K.state.spotLightMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=et,$.uniformsList=null,et}function qf(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=Cr.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Yf(P,G){let te=J.get(P);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function gg(P,G){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let te=0,$=P.length;te<$;te++){let K=P[te];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function xg(P,G,te,$,K){G.isScene!==!0&&(G=pn),ne.resetTextureUnits();let ye=G.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,_e=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ce=le.get($.envMap||Te,Ae),$e=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,Vt=!!te.morphAttributes.color,Rt=Xn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Rt=R.toneMapping);let St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,tn=St!==void 0?St.length:0,Se=J.get($),un=S.state.lights;if(Ze===!0&&(ot===!0||P!==B)){let Et=P===B&&$.id===z;Le.setState($,P,Et)}let at=!1;$.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==un.state.version||Se.outputColorSpace!==_e||K.isBatchedMesh&&Se.batching===!1||!K.isBatchedMesh&&Se.batching===!0||K.isBatchedMesh&&Se.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Se.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Se.instancing===!1||!K.isInstancedMesh&&Se.instancing===!0||K.isSkinnedMesh&&Se.skinning===!1||!K.isSkinnedMesh&&Se.skinning===!0||K.isInstancedMesh&&Se.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Se.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Se.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Se.instancingMorph===!1&&K.morphTexture!==null||Se.envMap!==Ce||$.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Le.numPlanes||Se.numIntersection!==Le.numIntersection)||Se.vertexAlphas!==$e||Se.vertexTangents!==et||Se.morphTargets!==Ee||Se.morphNormals!==ht||Se.morphColors!==Vt||Se.toneMapping!==Rt||Se.morphTargetsCount!==tn||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Se.__version=$.version);let Cn=Se.currentProgram;at===!0&&(Cn=ua($,G,K),L&&$.isNodeMaterial&&L.onUpdateProgram($,Cn,Se));let Jn=!1,Fi=!1,Vs=!1,yt=Cn.getUniforms(),Dt=Se.uniforms;if(A.useProgram(Cn.program)&&(Jn=!0,Fi=!0,Vs=!0),$.id!==z&&(z=$.id,Fi=!0),Se.needsLights){let Et=gg(S.state.lightProbeGridArray,K);Se.lightProbeGrid!==Et&&(Se.lightProbeGrid=Et,Fi=!0)}if(Jn||B!==P){A.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),yt.setValue(X,"projectionMatrix",P.projectionMatrix),yt.setValue(X,"viewMatrix",P.matrixWorldInverse);let Ni=yt.map.cameraPosition;Ni!==void 0&&Ni.setValue(X,Ct.setFromMatrixPosition(P.matrixWorld)),O.logarithmicDepthBuffer&&yt.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,Fi=!0,Vs=!0)}if(Se.needsLights&&(un.state.sunShadowMap.length>0&&yt.setValue(X,"sunShadowMap",un.state.sunShadowMap,ne),un.state.directionalShadowMap.length>0&&yt.setValue(X,"directionalShadowMap",un.state.directionalShadowMap,ne),un.state.spotShadowMap.length>0&&yt.setValue(X,"spotShadowMap",un.state.spotShadowMap,ne),un.state.pointShadowMap.length>0&&yt.setValue(X,"pointShadowMap",un.state.pointShadowMap,ne)),K.isSkinnedMesh){yt.setOptional(X,K,"bindMatrix"),yt.setOptional(X,K,"bindMatrixInverse");let Et=K.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),yt.setValue(X,"boneTexture",Et.boneTexture,ne))}K.isBatchedMesh&&(yt.setOptional(X,K,"batchingTexture"),yt.setValue(X,"batchingTexture",K._matricesTexture,ne),yt.setOptional(X,K,"batchingIdTexture"),yt.setValue(X,"batchingIdTexture",K._indirectTexture,ne),yt.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&yt.setValue(X,"batchingColorTexture",K._colorsTexture,ne));let Di=te.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&W.update(K,te,Cn),(Fi||Se.receiveShadow!==K.receiveShadow)&&(Se.receiveShadow=K.receiveShadow,yt.setValue(X,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Dt.envMapIntensity.value=G.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=CM()),Fi){if(yt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&bg(Dt,Vs),ye&&$.fog===!0&&Pe.refreshFogUniforms(Dt,ye),Pe.refreshMaterialUniforms(Dt,$,Z,q,S.state.transmissionRenderTarget[P.id]),Se.needsLights&&Se.lightProbeGrid){let Et=Se.lightProbeGrid;Dt.probesSH.value=Et.texture,Dt.probesMin.value.copy(Et.boundingBox.min),Dt.probesMax.value.copy(Et.boundingBox.max),Dt.probesResolution.value.copy(Et.resolution)}Cr.upload(X,qf(Se),Dt,ne)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Cr.upload(X,qf(Se),Dt,ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(X,"center",K.center),yt.setValue(X,"modelViewMatrix",K.modelViewMatrix),yt.setValue(X,"normalMatrix",K.normalMatrix),yt.setValue(X,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){let Et=$.uniformsGroups;for(let Ni=0,Gs=Et.length;Ni<Gs;Ni++){let Kf=Et[Ni];oe.update(Kf,Cn),oe.bind(Kf,Cn)}}return Cn}function bg(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.sunLights.needsUpdate=G,P.sunLightShadows.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function _g(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,G,te){let $=J.get(P);$.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(P.texture).__webglTexture=G,J.get(P.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){let te=J.get(P);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,te=0){V=P,N=G,U=te;let $=null,K=!1,ye=!1;if(P){let _e=J.get(P);if(_e.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(X.FRAMEBUFFER,_e.__webglFramebuffer),H.copy(P.viewport),ee.copy(P.scissor),Q=P.scissorTest,A.viewport(H),A.scissor(ee),A.setScissorTest(Q),z=-1;return}else if(_e.__webglFramebuffer===void 0)ne.setupRenderTarget(P);else if(_e.__hasExternalTextures)ne.rebindTextures(P,J.get(P.texture).__webglTexture,J.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let $e=P.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&J.has($e)&&(P.width!==$e.image.width||P.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(P)}}let Ae=P.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);let Ce=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?$=Ce[G][te]:$=Ce[G],K=!0):P.samples>0&&ne.useMultisampledRTT(P)===!1?$=J.get(P).__webglMultisampledFramebuffer:Array.isArray(Ce)?$=Ce[te]:$=Ce,H.copy(P.viewport),ee.copy(P.scissor),Q=P.scissorTest}else H.copy(ge).multiplyScalar(Z).floor(),ee.copy(ke).multiplyScalar(Z).floor(),Q=st;if(te!==0&&($=I),A.bindFramebuffer(X.FRAMEBUFFER,$)&&A.drawBuffers(P,$),A.viewport(H),A.scissor(ee),A.setScissorTest(Q),K){let _e=J.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,_e.__webglTexture,te)}else if(ye){let _e=G;for(let Ae=0;Ae<P.textures.length;Ae++){let Ce=J.get(P.textures[Ae]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,te,_e)}}else if(P!==null&&te!==0){let _e=J.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_e.__webglTexture,te)}z=-1};function $f(P){let G=J.get(P);return(G.__readFormat!==P.format||G.__readType!==P.type)&&(G.__readFormat=P.format,G.__readType=P.type,G.__formatReadable=O.textureFormatReadable(P.format),G.__typeReadable=O.textureTypeReadable(P.type)),G}this.readRenderTargetPixels=function(P,G,te,$,K,ye,Te,_e=0){if(!(P&&P.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){A.bindFramebuffer(X.FRAMEBUFFER,Ae);try{let Ce=P.textures[_e],$e=Ce.format,et=Ce.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_e);let Ee=$f(Ce);if(Ee.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-$&&te>=0&&te<=P.height-K&&X.readPixels(G,te,$,K,me.convert($e),me.convert(et),ye)}finally{let Ce=V!==null?J.get(V).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(P,G,te,$,K,ye,Te,_e=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(G>=0&&G<=P.width-$&&te>=0&&te<=P.height-K){A.bindFramebuffer(X.FRAMEBUFFER,Ae);let Ce=P.textures[_e],$e=Ce.format,et=Ce.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_e);let Ee=$f(Ce);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.bufferData(X.PIXEL_PACK_BUFFER,ye.byteLength,X.STREAM_READ),X.readPixels(G,te,$,K,me.convert($e),me.convert(et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Vt=V!==null?J.get(V).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Vt);let Rt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Mp(X,Rt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ye),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ht),X.deleteSync(Rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,te=0){let $=Math.pow(2,-te),K=Math.floor(P.image.width*$),ye=Math.floor(P.image.height*$),Te=G!==null?G.x:0,_e=G!==null?G.y:0;ne.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Te,_e,K,ye),A.unbindTexture()},this.copyTextureToTexture=function(P,G,te=null,$=null,K=0,ye=0){let Te,_e,Ae,Ce,$e,et,Ee,ht,Vt,Rt=P.isCompressedTexture?P.mipmaps[ye]:P.image;if(te!==null)Te=te.max.x-te.min.x,_e=te.max.y-te.min.y,Ae=te.isBox3?te.max.z-te.min.z:1,Ce=te.min.x,$e=te.min.y,et=te.isBox3?te.min.z:0;else{let Dt=Math.pow(2,-K);Te=Math.floor(Rt.width*Dt),_e=Math.floor(Rt.height*Dt),P.isDataArrayTexture?Ae=Rt.depth:P.isData3DTexture?Ae=Math.floor(Rt.depth*Dt):Ae=1,Ce=0,$e=0,et=0}$!==null?(Ee=$.x,ht=$.y,Vt=$.z):(Ee=0,ht=0,Vt=0);let St=me.convert(G.format),tn=me.convert(G.type),Se;G.isData3DTexture?(ne.setTexture3D(G,0),Se=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),Se=X.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),Se=X.TEXTURE_2D),A.activeTexture(X.TEXTURE0),A.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),A.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),A.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);let un=A.getParameter(X.UNPACK_ROW_LENGTH),at=A.getParameter(X.UNPACK_IMAGE_HEIGHT),Cn=A.getParameter(X.UNPACK_SKIP_PIXELS),Jn=A.getParameter(X.UNPACK_SKIP_ROWS),Fi=A.getParameter(X.UNPACK_SKIP_IMAGES);A.pixelStorei(X.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(X.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(X.UNPACK_SKIP_ROWS,$e),A.pixelStorei(X.UNPACK_SKIP_IMAGES,et);let Vs=P.isDataArrayTexture||P.isData3DTexture,yt=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){let Dt=J.get(P),Di=J.get(G),Et=J.get(Dt.__renderTarget),Ni=J.get(Di.__renderTarget);A.bindFramebuffer(X.READ_FRAMEBUFFER,Et.__webglFramebuffer),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Gs=0;Gs<Ae;Gs++)Vs&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(P).__webglTexture,K,et+Gs),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(G).__webglTexture,ye,Vt+Gs)),X.blitFramebuffer(Ce,$e,Te,_e,Ee,ht,Te,_e,X.DEPTH_BUFFER_BIT,X.NEAREST);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||J.has(P)){let Dt=J.get(P),Di=J.get(G);A.bindFramebuffer(X.READ_FRAMEBUFFER,C),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,F);for(let Et=0;Et<Ae;Et++)Vs?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Dt.__webglTexture,K,et+Et):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Dt.__webglTexture,K),yt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Di.__webglTexture,ye,Vt+Et):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Di.__webglTexture,ye),K!==0?X.blitFramebuffer(Ce,$e,Te,_e,Ee,ht,Te,_e,X.COLOR_BUFFER_BIT,X.NEAREST):yt?X.copyTexSubImage3D(Se,ye,Ee,ht,Vt+Et,Ce,$e,Te,_e):X.copyTexSubImage2D(Se,ye,Ee,ht,Ce,$e,Te,_e);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yt?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(Se,ye,Ee,ht,Vt,Te,_e,Ae,St,tn,Rt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Se,ye,Ee,ht,Vt,Te,_e,Ae,St,Rt.data):X.texSubImage3D(Se,ye,Ee,ht,Vt,Te,_e,Ae,St,tn,Rt):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ye,Ee,ht,Te,_e,St,tn,Rt.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ye,Ee,ht,Rt.width,Rt.height,St,Rt.data):X.texSubImage2D(X.TEXTURE_2D,ye,Ee,ht,Te,_e,St,tn,Rt);A.pixelStorei(X.UNPACK_ROW_LENGTH,un),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(X.UNPACK_SKIP_PIXELS,Cn),A.pixelStorei(X.UNPACK_SKIP_ROWS,Jn),A.pixelStorei(X.UNPACK_SKIP_IMAGES,Fi),ye===0&&G.generateMipmaps&&X.generateMipmap(Se),A.unbindTexture()},this.initRenderTarget=function(P){J.get(P).__webglFramebuffer===void 0&&ne.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ne.setTextureCube(P,0):P.isData3DTexture?ne.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ne.setTexture2DArray(P,0):ne.setTexture2D(P,0),A.unbindTexture()},this.resetState=function(){N=0,U=0,V=null,A.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function am(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(t[n]=s)}return t}function lm(i,e,t,n){for(let s=t.start*3;s<t.end*3;s++){let r=e[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}var IM=[],uc=new Map,PM=0;function hc(i){IM=i,uc=new Map(i.flatMap(e=>e.items.map(t=>[LM(e.id,t.id),t]))),PM++}function LM(i,e){return`pack:${i}:${e}`}function FM(i){return i.startsWith("pack:")}var DM={};function cm(i){return $t(i)?.parts.find(e=>e.screen)}function $t(i){if(!FM(i))return;let e=uc.get(i);if(e)return e;let[,t,...n]=i.split(":"),s=DM[t];return s?uc.get(`pack:${s}:${n.join(":")}`):void 0}function Fn(i,e){let t=$t(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return dc;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return mm(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return t?0:Vo(e)}}var um=null,hm=new Set;function fm(i){um=i}function dm(){return um}function pm(i){hm.add(i)}function fc(i){let e=uc.get(i)?.mesh;return!!e&&hm.has(e)}var pc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Is(i){return i==="hedge"||i==="fence"||i==="pergola"}function Ph(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,h)=>s==="x"?c:s==="-x"?-c:s==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=r(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-o)/(a-o)));return n*l}function OM(i,e,t,n){return Go(i)+(e.offset??0)+pc[e.type]-Ph(e,t,n)}function Go(i){return i.elevation>.3?0:-.2}function gm(i,e,t){let n=(i.outdoor??[]).filter(r=>!Is(r.type)&&r.type!=="pool"&&_t([e,t],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?OM(i,s,e,t):Go(i)}var UM={type:"none",pitch:35,overhang:.4},wA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...UM}};var xm=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),dc=1.75;function bm(i){return xm.has(i)||!!$t(i)?.light}var BM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Vo(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function mm(i,e,t){let n=0;for(let s of i.furniture)!(BM.has(s.type)||$t(s.type)?.surface)||!_t([e,t],gc(s))||(n=Math.max(n,s.h));return n}var NM=new Set([...xm,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var zM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],kM=["standard","bars","glass_wall"];function Ps(i,e){return i.type==="door"?i.style&&zM.includes(i.style)?i.style:e?"front":"interior":i.style&&kM.includes(i.style)?i.style:"standard"}function _m(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let s=e==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let h=r-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function ym(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Ls(i){let e=0;for(let t=0;t<i.length;t++){let[n,s]=i[t],[r,o]=i[(t+1)%i.length];e+=n*o-r*s}return e/2}function Ho(i){return Math.abs(Ls(i))}function mc(i){let e=Ls(i);if(Math.abs(e)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let t=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;t+=(r+a)*c,n+=(o+l)*c}return[t/(6*e),n/(6*e)]}function vm(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[s,r]=i[(e+1)%4];if(Math.abs(t-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function Mm(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)e=Math.min(e,r),t=Math.min(t,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:e,z0:t,x1:n,z1:s}}function gc(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*t-a*n,i.z+o*n+a*t])}function _t(i,e){let t=!1;for(let n=0,s=e.length-1;n<e.length;s=n++){let[r,o]=e[n],[a,l]=e[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(t=!t)}return t}var jt=(i,e)=>[i[0]-e[0],i[1]-e[1]],Ji=(i,e)=>[i[0]+e[0],i[1]+e[1]],Pi=(i,e)=>[i[0]*e,i[1]*e],Xo=(i,e)=>i[0]*e[0]+i[1]*e[1],Fr=(i,e)=>i[0]*e[1]-i[1]*e[0],Wo=i=>Math.hypot(i[0],i[1]),hi=i=>{let e=Wo(i)||1;return[i[0]/e,i[1]/e]},Sm=i=>[-i[1],i[0]],wm=i=>[i[1],-i[0]];function qo(i,e,t=[]){let n=e.eps??.005,s=[],r=t.filter(y=>Math.hypot(y.b[0]-y.a[0],y.b[1]-y.a[1])>.05),o=[],a=y=>{for(let w=0;w<o.length;w++)if(Math.abs(o[w][0]-y[0])<=n&&Math.abs(o[w][1]-y[1])<=n)return w;return o.push([y[0],y[1]]),o.length-1},l=[];for(let y of i){let w=y.points;if(w.length<3||Math.abs(Ls(w))<1e-6)continue;let R=Ls(w)>0,T=w.map(a);for(let L=0;L<w.length;L++){let I=T[L],C=T[(L+1)%w.length];I!==C&&l.push(R?{u:I,v:C,room:y.id,edge:L,forward:!0}:{u:C,v:I,room:y.id,edge:L,forward:!1})}}let c=r.map(y=>[a(y.a),a(y.b)]),h=new Set;for(let y of i){let w=y.points;w.length<3||(y.wall_splits??[]).forEach((R,T)=>{if(!R||T>=w.length)return;let L=w[T],I=jt(w[(T+1)%w.length],L),C=Wo(I);for(let F of R)F>n&&F<C-n&&h.add(a(Ji(L,Pi(I,F/C))))})}let u=[];for(let y of l){let w=o[y.u],R=o[y.v],T=jt(R,w),L=Wo(T),I=Pi(T,1/L),C=[];for(let N=0;N<o.length;N++){if(N===y.u||N===y.v)continue;let U=jt(o[N],w),V=Xo(U,I);V<=n||V>=L-n||Math.abs(Fr(I,U))<=n&&C.push({t:V,id:N})}C.sort((N,U)=>N.t-U.t);let F=[{t:0,id:y.u},...C,{t:L,id:y.v}];for(let N=0;N+1<F.length;N++){let U=F[N],V=F[N+1],z=y.forward?U.t:L-V.t,B=y.forward?V.t:L-U.t;u.push({u:U.id,v:V.id,room:y.room,edge:y.edge,t0:z,t1:B})}}let f=new Map;for(let y of u){let w=y.u<y.v?`${y.u}-${y.v}`:`${y.v}-${y.u}`,R=f.get(w);R||f.set(w,R=[]),R.push(y)}let d=y=>({room_id:y.room,edge:y.edge,t0:y.t0,t1:y.t1}),m=new Map;for(let y of u){let w=`${y.room}:${y.edge}`;m.set(w,[...m.get(w)??[],y.t0].sort((R,T)=>R-T))}let x=y=>{let w=i.find(T=>T.id===y.room)?.wall_heights?.[y.edge];if(!Array.isArray(w))return w;let R=m.get(`${y.room}:${y.edge}`)??[];return w[R.indexOf(y.t0)]??null},g=y=>{let w=y.map(x).filter(R=>typeof R=="number"&&R>0);return w.length?Math.min(...w):void 0},p=y=>{let w=y.map(R=>i.find(T=>T.id===R.room)?.wall_thickness?.[R.edge]).filter(R=>typeof R=="number"&&R>0);return w.length?Math.max(...w):void 0},_=y=>y.some(w=>x(w)===0),M=[],b=[];for(let y of f.values()){let w=y[0],R=y.find(T=>T!==w&&T.u===w.v&&T.v===w.u&&T.room!==w.room);for(let T of y)T!==w&&T!==R&&T.room!==w.room&&s.push(`overlap:${w.room}:${T.room}`);if(_(R?[w,R]:[w])){R&&M.push([w.room,R.room]);continue}if(R){let T=p([w,R])??e.interior;b.push({a:w.u,b:w.v,left:T/2,right:T/2,exterior:!1,roomLeft:w.room,roomRight:R.room,sources:[d(w),d(R)],height:g([w,R])})}else b.push({a:w.u,b:w.v,left:0,right:p([w])??e.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[d(w)],height:g([w])})}let v=y=>hi(jt(o[y.b],o[y.a]));for(let y of b){if(y.exterior||y.free)continue;let w=new Set;for(let T of[y.a,y.b])for(let L of b)!L.exterior||L.free||L.a!==T&&L.b!==T||Math.abs(Fr(v(y),v(L)))>1e-6||(L.roomLeft===y.roomLeft?w.add("left"):L.roomLeft===y.roomRight&&w.add("right"));if(w.size!==1)continue;let R=y.left+y.right;w.has("left")?(y.left=0,y.right=R):(y.left=R,y.right=0)}r.forEach((y,w)=>{let[R,T]=c[w];if(R===T)return;let L=[(y.a[0]+y.b[0])/2,(y.a[1]+y.b[1])/2],I=i.find(N=>N.points.length>=3&&_t(L,N.points))?.id??null,C=(y.thickness??e.interior)/2,F=typeof y.height=="number"&&y.height>0?y.height:void 0;b.push({free:y.id,a:R,b:T,left:C,right:C,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:F})}),b=GM(b,o,h);let S=WM(b,o);return{walls:b.map((y,w)=>{let R=o[y.a],T=o[y.b],L=S.get(`${w}:a`),I=S.get(`${w}:b`),C=XM([L.right,I.left,T,I.right,L.left,R],1e-6);return{id:VM(R,T),a:[R[0],R[1]],b:[T[0],T[1]],left:y.left,right:y.right,exterior:y.exterior,roomLeft:y.roomLeft,roomRight:y.roomRight,sources:y.sources,footprint:C,...y.free?{free:y.free}:{},...y.height!==void 0?{height:y.height}:{}}}),warnings:[...new Set(s)],open:M}}function VM(i,e){let t=r=>Math.round(r*100),[n,s]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(s[0])}_${t(s[1])}`}function Tm(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function GM(i,e,t=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||t.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Tm(l)),c.a!==o&&(c=Tm(c)),l.a===c.b)continue;let h=hi(jt(e[l.b],e[l.a])),u=hi(jt(e[c.b],e[c.a]));if(Math.abs(Fr(h,u))>1e-6||Xo(h,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:HM(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),s=!0;break}}return n}function HM(i,e){let t=i.map(n=>({...n}));for(let n of e){let s=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):t.push({...n})}return t}function WM(i,e){let t=new Map;i.forEach((s,r)=>{let o=hi(jt(e[s.b],e[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:Pi(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=t.get(l);h||t.set(l,h=[]),h.push(c)}});let n=new Map;for(let[s,r]of t){let o=e[s];r.sort((c,h)=>c.angle-h.angle);let a=c=>({left:Ji(o,Pi(Sm(c.d),c.left)),right:Ji(o,Pi(wm(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let h=r[c],u=r[(c+1)%r.length],f=Ji(o,Pi(Sm(h.d),h.left)),d=Ji(o,Pi(wm(u.d),u.right)),m=Fr(h.d,u.d);if(Math.abs(m)<1e-4)continue;let x=Fr(jt(d,f),u.d)/m,g=Ji(f,Pi(h.d,x));Wo(jt(g,o))>l||(n.get(h.key).left=g,n.get(u.key).right=g)}}return n}function XM(i,e){let t=i.filter((s,r)=>Wo(jt(s,i[(r+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let s=0;s<t.length;s++){let r=t[(s+t.length-1)%t.length],o=t[s],a=t[(s+1)%t.length],l=jt(o,r),c=jt(a,o);if(Math.abs(Fr(hi(l),hi(c)))<1e-7&&Xo(l,c)>0){t=t.filter((h,u)=>u!==s),n=!0;break}}}return t}function Am(i,e,t){let n=i.points[e],s=i.points[(e+1)%i.points.length],r=hi(jt(s,n));return Ji(n,Pi(r,t))}function Em(i,e,t){if(i.wall){let s=t.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=hi(jt(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Ji(s.a,[-r[1],r[0]])]},edge:0}}let n=e.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Rm(i,e,t){if(!e.wall)return qM(i,t.room,t.edge,e.offset);let n=i.find(r=>r.free===e.wall);if(!n)return null;let s=Am(t.room,0,e.offset);return{wall:n,s:Xo(jt(s,n.a),hi(jt(n.b,n.a)))}}function qM(i,e,t,n){for(let s of i){if(!s.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Am(e,t,n);return{wall:s,s:Xo(jt(o,s.a),hi(jt(s.b,s.a)))}}return null}var $o=Math.PI/180;function fi(i){let e=Math.min(i.x0,i.x1),t=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:e,u1:t,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:t-e,at:(r,o)=>[i.flip?t-o:e+o,r]}}function Dn(i){let e=fi(i).w,t=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*$o),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*$o);if(i.shape==="flat"||i.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(i.shape==="pent")return{vr:e,rh:t+e*s,y:l=>t+l*s};if(i.shape==="mansard"){let l=Fm(e,t,n,s,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=s+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(s+r))):e/2,a=t+o*s;return{vr:o,rh:a,y:l=>l<=o?t+l*s:n+(e-l)*r}}var YM=.14;function Im(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function Pm(i,e,t){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),c=Math.max(r.z0,r.z1);if(e<o-1e-6||e>a+1e-6||t<l-1e-6||t>c+1e-6||r.points&&r.points.length>=3&&!_t([e,t],r.points))continue;let[h,u]=ji(r,e,t),f=r.shape==="flat"||r.shape==="parapet",d=Math.max(0,r.overhang??s),x=((f?null:Ko(Nr(r,{u0:d,u1:d,a:d,b:d}),h,u))??Dn(r).y(u))-YM;n=n===null?x:Math.max(n,x)}return n}function Lh(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Ho(i)>=0?1:-1,s=[];for(let r=0;r<t;r++){let o=i[(r+t-1)%t],a=i[r],l=i[(r+1)%t],c=Cm([a[0]-o[0],a[1]-o[1]]),h=Cm([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],m=u[1]+f[1],x=Math.hypot(d,m);if(x<1e-6){s.push([a[0]+u[0]*e,a[1]+u[1]*e]);continue}let g=(d*u[0]+m*u[1])/x,p=Math.min(4,1/Math.max(.25,g));s.push([a[0]+d/x*e*p,a[1]+m/x*e*p])}return s}function Cm(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Lm(i,e){if(i.points&&i.points.length>=3)return Lh(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,s=Math.min(i.z0,i.z1)-e,r=Math.max(i.z0,i.z1)+e;return[[t,s],[n,s],[n,r],[t,r]]}var Yo=Math.tan(30*$o);function Fm(i,e,t,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=e+r*n,l=t+o*s,c=Math.min(i-o,Math.max(r,(l-a+Yo*(i-o+r))/(2*Yo))),h=a+(c-r)*Yo;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=r?e+f*n:f<=c?a+(f-r)*Yo:f<=i-o?l+(i-o-f)*Yo:t+(i-f)*s}}function Nr(i,e){let t=fi(i),n=Dn(i),s=t.w,r=Math.max(0,e.a),o=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(_,M)=>[_,M,n.y(M)],h=c(a,-r),u=c(l,-r),f=c(l,s+o),d=c(a,s+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*$o),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*$o);if(i.shape==="pent"){let _=[h,u,f,d];return{faces:[_],rim:_,ridges:[[f,d]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,s-n.vr)||s/2),M=[t.u0+_,n.vr,n.rh],b=[t.u1-_,n.vr,n.rh],v=i.shape==="pyramid"?[[h,u,M],[u,f,M],[f,d,M],[d,h,M]]:[[h,u,b,M],[M,b,f,d],[d,h,M],[u,f,b]],S=i.shape==="pyramid"?[[h,M],[d,M],[u,M],[f,M]]:[[M,b],[h,M],[d,M],[u,b],[f,b]];return{faces:v,rim:[h,u,f,d],ridges:S,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(s)),M=_+(n.rh-_)*.55,b=m>1e-6?Math.min(n.vr,(M-i.eave_a)/m):n.vr,v=x>1e-6?Math.max(n.vr,s-(M-i.eave_b)/x):n.vr,S=Math.min((t.u1-t.u0)/2-.1,(n.rh-M)/Math.max(.2,m)),E=[t.u0+S,n.vr,n.rh],y=[t.u1-S,n.vr,n.rh],w=[a,b,M],R=[a,v,M],T=[l,b,M],L=[l,v,M];return{faces:[[h,u,T,y,E,w],[E,y,L,f,d,R],[R,w,E],[T,L,y]],rim:[h,u,T,L,f,d,R,w],ridges:[[E,y],[w,E],[R,E],[T,y],[L,y]],gable:[[0,n.y(0)],[b,M],[v,M],[s,n.y(s)]]}}if(i.shape==="mansard"){let _=Fm(s,i.eave_a,i.eave_b,m,x),M=[a,_.vla,_.yla],b=[l,_.vla,_.yla],v=[a,s-_.vlb,_.ylb],S=[l,s-_.vlb,_.ylb],E=[a,_.vr,_.rh],y=[l,_.vr,_.rh];return{faces:[[h,u,b,M],[M,b,y,E],[E,y,S,v],[v,S,f,d]],rim:[h,u,b,y,S,f,d,v,E,M],ridges:[[E,y],[M,b],[v,S]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[s-_.vlb,_.ylb],[s,n.y(s)]]}}let g=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[h,u,p,g],[g,p,f,d]],rim:[h,u,p,f,d,g],ridges:[[g,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function Ko(i,e,t){let n=null;for(let s of i.faces){if(!_t([e,t],s.map(_=>[_[0],_[1]])))continue;let[r,o]=s,a=s.slice(2).find(_=>Math.abs((o[0]-r[0])*(_[1]-r[1])-(o[1]-r[1])*(_[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],c=o[2]-r[2],h=o[1]-r[1],u=a[0]-r[0],f=a[2]-r[2],d=a[1]-r[1],m=c*d-h*f,x=h*u-l*d,g=l*f-c*u;if(Math.abs(x)<1e-9)continue;let p=r[2]-(m*(e-r[0])+g*(t-r[1]))/x;n=n===null?p:Math.min(n,p)}return n}function ji(i,e,t){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[e,i.flip?o-t:t-r]:[t,i.flip?s-e:e-n]}function $M(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function xc(i,e){let t=(e.x0+e.x1)/2,n=(e.z0+e.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===e||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(e)*1.5)continue;let a=$M(o);t<a.x0||t>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function Fh(i,e){if(e.shape==="flat"||e.shape==="parapet")return e;let t=fi(e),n=Dn(e).rh,s=Nr(i,{u0:0,u1:0,a:0,b:0}),r=Dn(i),o=m=>{let[x,g]=t.at(m,t.w/2),[p,_]=ji(i,x,g);return Ko(s,p,_)??r.y(_)},a=o(t.u0)<=o(t.u1),l=a?t.u0:t.u1,c=a?t.u1:t.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let m=.5;m<u;m+=.05)if(o(l+h*m)>=n-.02){f=l+h*m;break}if(Math.abs(f-c)<.05)return e;let d={...e};return e.axis==="x"?c===t.u1?d.x1=f:d.x0=f:c===t.u1?d.z1=f:d.z0=f,d}function Dm(i,e){let t=Fh(i,e),n=fi(t),s=Dn(t),r=Nr(i,{u0:0,u1:0,a:0,b:0}),o=Dn(i),a=f=>{let[d,m]=n.at(f,n.w/2),[x,g]=ji(i,d,m);return Ko(r,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,m=c*(f+1)/u,x=l?n.u0+d:n.u1-d,g=l?n.u0+m:n.u1-m,p=a(g),_=1/0,M=-1/0;for(let y=0;y<=40;y++){let w=n.w*y/40;s.y(w)>p+.02&&(_=Math.min(_,w),M=Math.max(M,w))}if(!(M-_>.05))continue;let b=n.at(x,_),v=n.at(g,M),S=ji(i,b[0],b[1]),E=ji(i,v[0],v[1]);h.push({u0:Math.min(S[0],E[0]),u1:Math.max(S[0],E[0]),v0:Math.min(S[1],E[1]),v1:Math.max(S[1],E[1])})}return h}function Dr(i,e,t,n){let s=o=>n?o[e]<=t+1e-9:o[e]>=t-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=s(a),h=s(l);if(c&&r.push(a),c!==h){let u=(t-a[e])/(l[e]-a[e]);r.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return r}function Nm(i,e){let t=Dr(i,0,e.u0,!0),n=Dr(i,0,e.u1,!1),s=Dr(Dr(i,0,e.u0,!1),0,e.u1,!0),r=Dr(s,1,e.v0,!0),o=Dr(s,1,e.v1,!1);return[t,n,r,o].filter(a=>a.length>=3&&Math.abs(Ho(a.map(l=>[l[0],l[1]])))>1e-6)}function bc(i,e,t){let n=fi(e),s=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>e.base+.05)),r=c=>c.some(h=>s.some(u=>_t(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-o)))?0:t,b:r(a.map(c=>n.at(c,n.w+o)))?0:t,u0:r(l.map(c=>n.at(n.u0-o,c)))?0:t,u1:r(l.map(c=>n.at(n.u1+o,c)))?0:t}}function Om(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return[...t].reverse().find(n=>n.elevation<e.base-.05)??t[0]}function KM(i){return Dn(i).rh}function Um(i,e,t){let n=i.settings.roof.sections??[],s=n.filter(l=>t.includes(l.id)).map(l=>xc(n,l)??l);if(!s.length)return e.id;let r=Math.max(...s.map(l=>KM(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&s.some(h=>{let[u,f]=c.points.reduce((d,m)=>[d[0]+m[0]/c.points.length,d[1]+m[1]/c.points.length],[0,0]);return u>=Math.min(h.x0,h.x1)&&u<=Math.max(h.x0,h.x1)&&f>=Math.min(h.z0,h.z1)&&f<=Math.max(h.z0,h.z1)}));return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}var Kn=1e-4;function Dh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2}function Bm(i,e,t,n){let s=[e[0]-i[0],e[1]-i[1]],r=[n[0]-t[0],n[1]-t[1]],o=s[0]*r[1]-s[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((t[0]-i[0])*r[1]-(t[1]-i[1])*r[0])/o,l=((t[0]-i[0])*s[1]-(t[1]-i[1])*s[0])/o;return a>Kn&&a<1-Kn&&l>-Kn&&l<1+Kn?a:null}function Nh(i,e,t){let n=t[0]-e[0],s=t[1]-e[1],r=n*n+s*s;if(r<1e-12)return null;let o=((i[0]-e[0])*n+(i[1]-e[1])*s)/r;return o<=Kn||o>=1-Kn?null:Math.abs((i[0]-e[0])*s-(i[1]-e[1])*n)/Math.sqrt(r)<Kn?o:null}function ZM(i,e){for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];for(let r=0;r<e.length;r++){let o=e[r],a=e[(r+1)%e.length];if(Bm(n,s,o,a)!==null||Nh(o,n,s)!==null||Nh(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Kn)return!0}}return _t(i[0],e)||_t(e[0],i)}function JM(i){let e=i.map(r=>Dh(r)>=0?r:[...r].reverse()),t=[];e.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],h=[0,1];e.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let m=u[d],x=u[(d+1)%u.length],g=Bm(l,c,m,x)??Nh(m,l,c);g!==null&&h.push(g)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<Kn)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];e.some((g,p)=>p!==o&&_t(x,g))||t.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Kn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Kn)||t.push([f,d])}}});let n=[],s=new Set;for(let r=0;r<t.length;r++){if(s.has(r))continue;s.add(r);let o=[t[r][0]],a=t[r][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=t.findIndex(([h],u)=>!s.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;s.add(c),o.push(t[c][0]),a=t[c][1]}o.length>=3&&Dh(o)>1e-6&&n.push(o)}return n}function Oh(i){let e=i.filter(r=>r.length>=3),t=e.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let r=0;r<e.length;r++)for(let o=r+1;o<e.length;o++)n(r)!==n(o)&&ZM(e[r],e[o])&&(t[n(o)]=n(r));let s=new Map;return e.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:JM(r))}function jM(i,e,t){let n=t[0]-e[0],s=t[1]-e[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-e[0])*n+(i[1]-e[1])*s)/r)):0;return Math.hypot(i[0]-e[0]-n*o,i[1]-e[1]-s*o)}function zm(i,e,t=.03){return i.every(n=>_t(n,e)||e.some((s,r)=>jM(n,s,e[(r+1)%e.length])<=t))}function km(i,e){let t=Dh(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return t.map((s,r)=>{let o=n(t[(r-1+t.length)%t.length],s),a=n(s,t[(r+1)%t.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?s:[s[0]+(o[0]+a[0])/l*e,s[1]+(o[1]+a[1])/l*e]})}var Fs=He(3662079,.95),Uh=He(3662079,1),Qi=He(5995775,.34),Vm=He(5995775,.22),Or=[-.55,.83],rt=-1,_c=16,Ds=32,Gm=48,Bh=64,mt=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,s,r=s,o=s,a,l=rt,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ge;return e.setAttribute("position",new Ue(this.p,3)),e.setAttribute("color",new Ue(this.c,3)),e.setAttribute("fold",new Ue(this.f,1)),this.uv&&e.setAttribute("uv",new Ue(this.uv,2)),this.tile&&e.setAttribute("tile",new Ue(this.tile,2)),e.computeBoundingSphere(),e}},cn=class{p=[];c=[];f=[];seg(e,t,n=Fs,s=rt){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(e,t,n,s,r){let[o,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,rt);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,rt),this.seg(c,a,n,r)}geometry(){let e=new Ge;return e.setAttribute("position",new Ue(this.p,3)),e.setAttribute("color",new Ue(this.c,3)),e.setAttribute("fold",new Ue(this.f,1)),e}};function Hm(i,e,t,n){let r=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((m,x)=>m+(f.p[x]-m)*d),c:u.c.map((m,x)=>m+(f.c[x]-m)*d),uv:u.uv&&f.uv?u.uv.map((m,x)=>m+(f.uv[x]-m)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let m=0;m<3;m++){let x=u*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=f[m].p[g],i.c[x*3+g]=f[m].c[g];if(i.uv&&f[m].uv)for(let g=0;g<r;g++)i.uv[x*2+g]=f[m].uv[g];if(i.tile&&f[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=f[m].tile[g];i.f[x]=d}},c=(u,f)=>{let d=i.p.length/9;for(let m of u)i.p.push(...m.p),i.c.push(...m.c),i.f.push(f),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return d},h=i.p.length/9;for(let u=e;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(y=>y.p[1]>t+1e-6),m=f.map(y=>y.p[1]<t-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let y=0;y<3;y++)i.f[u*3+y]=n;continue}let x=i.f[u*3],g=(y,w)=>a(y,w,(t-y.p[1])/(w.p[1]-y.p[1])),p=d.filter(Boolean).length,_=p===1?d.indexOf(!0):d.indexOf(!1),M=f[_],b=f[(_+1)%3],v=f[(_+2)%3],S=g(M,b),E=g(v,M);p===1?(l(u,[M,S,E],n),c([S,b,v],x),c([S,v,E],x)):(l(u,[M,S,E],x),c([S,b,v],n),c([S,v,E],n))}}function Wm(i,e,t,n){let s=i.p.length/6;for(let r=e;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let h=(t-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,t,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[r*6+d]=l[d],i.p[r*6+3+d]=u[d];let f=i.c.slice(r*6,r*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var Lt=Math.PI/180;function He(i,e){let t=new j(i).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function QM(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e}function Zo(i,e=[]){let t=i.map(([n,s])=>new Oe(n,s));return go.triangulateShape(t,e.map(n=>n.map(([s,r])=>new Oe(s,r))))}function Xm(i,e,t,n,s,r,o){let a=new j(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=e[d],x=e[(d+1)%4],g=t[d],p=t[(d+1)%4],_=x[0]-m[0],M=x[1]-m[1],b=Math.hypot(_,M);if(b<1e-6)continue;let S=.8+.28*((M/b*Or[0]-_/b*Or[1]+1)/2),E=(g[0]+p[0]-m[0]-x[0])/2*(-M/b)+(g[1]+p[1]-m[1]-x[1])/2*(_/b),y=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,s-n)))),w=He(r,l(n)*S).lerp(a,y),R=He(r,l(s)*S).lerp(a,y);i.tri([m[0],n,m[1]],[g[0],s,g[1]],[p[0],s,p[1]],w,R,R),i.tri([m[0],n,m[1]],[p[0],s,p[1]],[x[0],n,x[1]],w,R,w)}let[c,h,u,f]=t;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],s,c[1]],[u[0],s,u[1]],[h[0],s,h[1]],a),i.tri([c[0],s,c[1]],[f[0],s,f[1]],[u[0],s,u[1]],a))}function qm(i,e,t,n){let s=e.length;if(s<2)return;let r=e[0].length,o=new j(n),a=(m,x)=>[m[0]-x[0],m[1]-x[1],m[2]-x[2]],l=(m,x)=>[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],c=m=>{let x=Math.hypot(m[0],m[1],m[2])||1;return[m[0]/x,m[1]/x,m[2]/x]},h=e.map(m=>[0,1,2].map(x=>m.reduce((g,p)=>g+p[x],0)/r)),u=e.map((m,x)=>m.map((g,p)=>{let _=a(e[Math.min(s-1,x+1)][p],e[Math.max(0,x-1)][p]),M=a(m[(p+1)%r],m[(p+r-1)%r]),b=c(l(_,M)),v=a(g,h[x]);return b[0]*v[0]+b[1]*v[1]+b[2]*v[2]<0&&(b=[-b[0],-b[1],-b[2]]),b})),f=(m,x)=>{let g=.5+.5*Math.min(1,Math.max(0,m[1]/1.6)),p=(x[0]*Or[0]+x[2]*Or[1]+1)/2;return He(t,g*(.8+.28*p)).lerp(o,Math.max(0,x[1])*.9)},d=(m,x,g,p,_,M,b)=>{let v=l(a(x,m),a(g,m));v[0]*p[0]+v[1]*p[1]+v[2]*p[2]>=0?i.tri(m,x,g,_,M,b):i.tri(m,g,x,_,b,M)};for(let m=0;m+1<s;m++)for(let x=0;x<r;x++){let g=(x+1)%r,p=e[m][x],_=e[m][g],M=e[m+1][g],b=e[m+1][x],v=u[m][x],S=u[m][g],E=u[m+1][g],y=u[m+1][x],w=f(p,v),R=f(_,S),T=f(M,E),L=f(b,y),I=[v[0]+S[0]+E[0]+y[0],v[1]+S[1]+E[1]+y[1],v[2]+S[2]+E[2]+y[2]];d(p,_,M,I,w,R,T),d(p,M,b,I,w,T,L)}for(let[m,x]of[[0,-1],[s-1,1]]){let g=e[m],p=h[m],_=a(e[m===0?1:s-2][0],g[0]),M=c([_[0]*-x,_[1]*-x,_[2]*-x]),b=f(p,M);for(let v=0;v<r;v++)d(g[v],g[(v+1)%r],p,M,b,b,b)}}function Ym(i,e,t,n,s,r,o,a,l,c){let h=new j(l),u=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2;u.push({y:r+Math.cos(m)*o,s:s+Math.sin(m)*o})}let f=(d,m)=>{let x=e(d,u[m%c].s);return[x[0],u[m%c].y,x[1]]};for(let d=0;d<c;d++){let m=(d+.5)/c*Math.PI*2,x=He(a,.62+.4*Math.max(0,Math.cos(m)));i.tri(f(t,d),f(n,d+1),f(n,d),x),i.tri(f(t,d),f(t,d+1),f(n,d+1),x)}for(let d of[t,n]){let m=e(d,s),x=[m[0],r,m[1]];for(let g=0;g<c;g++)i.tri(x,f(d,g),f(d,g+1),h)}}function Ft(i,e,t,n,s,r,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(t+.002,n(m[0],m[1])),l=o.aoFrom??t,c=o.fold??rt,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(o.holes??[]).map(m=>QM(m)>0?[...m].reverse():m),f=u.length?[...e,...u.flat()]:e,d=o.topFace===!1&&!o.bottom?[]:Zo(e,u);if(o.topFace!==!1){let m=new j(r);for(let[x,g,p]of d){let _=f[x],M=f[g],b=f[p];i.tri([_[0],a(_),_[1]],[b[0],a(b),b[1]],[M[0],a(M),M[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=He(s,.55);for(let[x,g,p]of d){let _=f[x],M=f[g],b=f[p];i.tri([_[0],t,_[1]],[M[0],t,M[1]],[b[0],t,b[1]],m,m,m,void 0,c)}}for(let m of[e,...u])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],_=p[0]-g[0],M=p[1]-g[1],b=Math.hypot(_,M);if(b<1e-6||o.skipSide?.(g,p))continue;let S=.8+.28*((M/b*Or[0]-_/b*Or[1]+1)/2),E=a(g),y=a(p),w=He(s,h(t)*S),R=He(s,h(E)*S),T=He(s,h(y)*S);i.tri([g[0],t,g[1]],[g[0],E,g[1]],[p[0],y,p[1]],w,R,T,void 0,c),i.tri([g[0],t,g[1]],[p[0],y,p[1]],[p[0],t,p[1]],w,T,w,void 0,c)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},Me=He(5995775,.3),ct=He(5995775,.17),nt=He(3662079,.45),Jo=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=Qm(n)}rotated(e,t,n){let s=n*Lt,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*r-(c-t)*o,t+(l-e)*o+(c-t)*r))}box(e,t,n,s,r,o,a,l=a,c=null){if(t-e<1e-4||o-r<1e-4||s-n<1e-4)return;let h=[this.tf(e,r),this.tf(e,o),this.tf(t,o),this.tf(t,r)];Ft(this.buf,zh(h),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,s,c)}loft(e,t,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==zh(l)&&(l.reverse(),c.reverse()),Xm(this.buf,l,c,n,s,r,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],s,s,a),this.line(l[h],c[h],n,s,a)}sweep(e,t,n=t,s=16,r=2.6,o=null){if(e.length<2)return;let a=e.map(l=>{let c=Math.max(.004,(l.y1-l.y0)/2),h=Math.max(.004,l.hw),u=(l.y0+l.y1)/2,f=[];for(let d=0;d<s;d++){let m=d/s*Math.PI*2,x=Math.cos(m),g=Math.sin(m),[p,_]=this.tf(l.x+h*Math.sign(x)*Math.abs(x)**(2/r),l.z);f.push([p,u+c*Math.sign(g)*Math.abs(g)**(2/r),_])}return f});if(qm(this.buf,a,t,n),o){let l=Math.round(s/4);for(let c=0;c+1<a.length;c++){let h=a[c][l],u=a[c+1][l];this.lines.seg(h,u,o,rt)}}}pad(e,t,n,s,r,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(t-e)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(e,t,n,s,r,o,a,l,h);this.loft([e+c,t-c,r+c,o-c],[e,t,r,o],n,n+c,a),s-n-2*c>.005&&this.box(e,t,n+c,s-c,r,o,a,a,h),this.loft([e,t,r,o],[e+c,t-c,r+c,o-c],s-c,s,a,l)}lyingCyl(e,t,n,s,r,o,a,l,c=l,h=12,u=null){let f=Math.min(a,r-s)/2;if(f<1e-4||o<1e-4)return;let d=(s+r)/2,m=e==="x"?t:n,x=e==="x"?n:t,g=(_,M)=>e==="x"?this.tf(_,M):this.tf(M,_),p=this.buf.p.length;if(Ym(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,h),this.mirrored&&Hh(this.buf,p),u)for(let _ of[m-o/2,m+o/2])for(let M=0;M<h;M++){let b=M/h*Math.PI*2,v=(M+1)/h*Math.PI*2;this.line(g(_,x+Math.sin(b)*f),g(_,x+Math.sin(v)*f),d+Math.cos(b)*f,d+Math.cos(v)*f,u)}}cyl(e,t,n,s,r,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(e+Math.cos(f)*n,t+Math.sin(f)*n))}if(Ft(this.buf,zh(h),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],r,r,c)}seg(e,t,n,s,r,o,a=Me){this.line(this.tf(e,n),this.tf(s,o),t,r,a)}line(e,t,n,s,r){this.lines.seg([e[0],n,e[1]],[t[0],s,t[1]],r,rt)}outline(e,t,n,s){for(let r=0;r<4;r++){let o=e[r],a=e[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,t,n,s)}}};function Qm(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function zh(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e>=0?i:[...i].reverse()}function Ns(i,e,t,n,s,r,o=D.metal,a=!1){let l=e/2-r-s,c=t/2-r-s;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-s*.3,f+s*.3,d-s*.3,d+s*.3],[f-s/2,f+s/2,d-s/2,d+s/2],0,n,o):i.box(f-s/2,f+s/2,0,n,d-s/2,d+s/2,o)}}function jo(i,e,t,n,s,r,o,a=null,l=!1){let c=(t-e)/o;for(let h=1;h<o;h++){let u=e+c*h;i.seg(u,n,r,u,s,r,ct)}for(let h=0;h<o;h++){let u=e+c*(h+.5),f=a??s-.08;if(l)i.seg(u-Math.min(.1,c/4),f,r+.012,u+Math.min(.1,c/4),f,r+.012,nt);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,r+.012,d,f+.08,r+.012,nt)}}}function $m(i,e,t,n,s){let r=-e/2,o=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),h=n*.5,u=Math.min(.24,t*.28);Ns(i,e,t,.07,.05,.05,D.wood,!0),i.pad(r,o,.07,h-.08,a+.02,l,D.fabric,D.fabricTop,.04,Me),i.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],h-.08,n,D.fabric,D.fabricTop,Me),i.pad(r,r+c,h-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me);let d=(o-c-(r+c))/s;for(let m=0;m<s;m++){let x=r+c+d*m+.02,g=x+d-.04;i.pad(x,g,h-.08,h+.05,a+u+.02,l-.06,D.cushion,D.cushion,.04),i.loft([x+.01,g-.01,a+u*.55,a+u+.14],[x+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,D.cushion)}}function e1(i,e,t,n){let s=-t/2,r=t/2,o=-e/2,a=e/2,l=Math.min(.32,n*.36);Ns(i,e,t,.08,.06,.03,D.wood,!0),i.box(o,a,.08,l,s+.06,r,D.wood,D.woodTop,Me),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,D.wood,D.woodTop,Me),i.box(o,a,n-.05,n,s,s+.09,D.wood,D.woodTop,ct);let c=l+.2,h=s+(t-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,r-.01,D.cushion,D.fabricTop,.025,ct),i.lyingCyl("x",0,h+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let u=e>1.2?2:1,f=(e-.2)/u;for(let d=0;d<u;d++){let m=o+.1+f*d,x=s+.12,g=Math.min(.42,t*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,D.whiteTop),i.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,ct)}}function t1(i,e,t,n){let s=Math.min(.46,n*.52);Ns(i,e,t,s-.04,.035,.02,D.wood,!0),i.box(-e/2,e/2,s-.04,s,-t/2,t/2,D.wood,D.woodTop,Me),i.pad(-e/2+.02,e/2-.02,s,s+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],s,n,D.wood,D.woodTop,Me)}function n1(i,e,t,n){Ns(i,e,t,n-.04,.06,.05,D.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,nt),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function i1(i,e,t,n){let s=-e/2,r=e/2;i.box(s,r,n-.035,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(s,s+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let o=Math.min(.42,e*.32);i.box(r-o,r,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,Me);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,ct);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,nt);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,nt),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function es(i,e,t,n,s,r=null,o=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),jo(i,-e/2,e/2,.08,n,t/2-.02,s,r,o)}function s1(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,ct),o<r){let l=-e/2+.025+.04,c=o*3;for(;l<e/2-.025-.12;){let h=.03+c*7%5*.008,u=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=h+.006,c++}}}}function r1(i,e,t,n){let s=Math.max(1,Math.round(e/.6));es(i,e,t-.02,n-.04,s,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function o1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,Me);let s=n*.62;i.seg(-e/2,s,t/2,e/2,s,t/2,ct);let r=e/2-.06;i.seg(r,s+.08,t/2+.015,r,s+.4,t/2+.015,nt),i.seg(r,s-.4,t/2+.015,r,s-.08,t/2+.015,nt)}function a1(i,e,t,n){let s=t/2-e0;i.box(-e/2,e/2,.02,n,-t/2,s,D.body,D.bodyTop,Me),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,s-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-e/2+.03,r,s+.001,-.03,r,s+.001,ct),i.seg(.03,r,s+.001,e/2-.03,r,s+.001,ct))}var e0=.06;function t0(i,e,t,n,s){let r=i.p.length;l1(i,e,t,n,s),e.mirror&&Hh(i,r)}function l1(i,e,t,n,s){let r=e.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(b,v)=>[e.x+l*b*o-v*a,e.z+l*b*a+v*o],h=t+.05,u=t+e.h-.02,f=new j(.75,.1,.14),d=new j(D.dark),m=new j(D.accent),x=e.w/2-.006,g=(b,v,S)=>{let E=S/p,y=new j(2043212).lerp(f,E),w=new j(D.body).lerp(f,E*.8),R=Math.cos(S),T=Math.sin(S),L=(F,N)=>c(b+v*(F*R-N*T),e.d/2+F*T+N*R),I=(F,N,U,V)=>{let[z,B,H,ee]=F;i.tri([z[0],N,z[1]],[B[0],N,B[1]],[H[0],U,H[1]],V),i.tri([z[0],N,z[1]],[H[0],U,H[1]],[ee[0],U,ee[1]],V)},C=(F,N,U,V,z,B,H,ee=H)=>{let Q=[L(F,B),L(N,B),L(N,z),L(F,z)];I([Q[0],Q[1],Q[1],Q[0]],U,V,ee),I([Q[3],Q[2],Q[2],Q[3]],U,V,H),I([Q[0],Q[3],Q[3],Q[0]],U,V,H),I([Q[1],Q[2],Q[2],Q[1]],U,V,H),I([Q[0],Q[1],Q[2],Q[3]],V,V,H),I([Q[3],Q[2],Q[1],Q[0]],U,U,H)};return C(0,x,h,u,-e0,0,w,y),C(x-.05,x-.03,t+e.h*.45,t+e.h*.75,.005,.025,m),C},p=1.83;g(-e.w/2,1,n*p)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,d),g(e.w/2,-1,s*p)(.06,x-.06,t+e.h*.52,t+e.h*.86,.001,.005,d)}function c1(i,e,t,n){es(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,Me);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*e/.6,l=r*t/.62;i.cyl(a,l,o,n,n+.004,D.dark,1451583,12,nt)}}function u1(i,e,t,n){es(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let s=Math.min(.5,e-.2);i.box(-e/2,-s/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),i.box(s/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),i.box(-s/2,s/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,nt),i.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function h1(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,Me),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,nt),i.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function f1(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,Me),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[s,r,o,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(s,.05,r,o,.05,a,nt),i.seg(s,n,r,o,n,a,nt),i.seg(o,.05,a,o,n,a,nt);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,nt)}function d1(i,e,t,n){let s=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+s,D.white,D.whiteTop,Me),i.box(-e*.3,e*.3,0,.36,-t/2+s-.02,t/2-.12,D.white,D.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,Me),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+s,-t/2+s+.05,D.whiteTop)}function p1(i,e,t,n){es(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,Me),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,nt),i.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,nt)}function m1(i,e,t,n){es(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let s=Math.min(e*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-t/2+.12,-t/2+.16,D.dark,D.dark,nt)}function g1(i,e,t,n){let s=Math.min(e,t)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,D.pot,D.pot,10,Me),i.cyl(0,0,s*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),h=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?ct:null)}}function x1(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[s,r,o,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(s,.014,r,o,.014,a,Me)}function b1(i,e,t,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=t/s;for(let h=0;h<s;h++){let u=t/2-o*h,f=u-o,d=r*(h+1);i.box(-e/2,e/2,0,d,f,u,D.wood,D.woodTop),i.seg(-e/2,d,u,e/2,d,u,Me)}i.seg(-e/2,0,t/2,-e/2,r,t/2,Me);for(let h of[-e/2,e/2])i.seg(h,r,t/2,h,n,-t/2+o,ct);let a=.9,l=e/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,t/2-o/2,l,r*c+a,t/2-o*(c-.5),nt);for(let h=0;h<c;h+=3){let u=t/2-o*(h+.5),f=r*(h+1);i.seg(l,f,u,l,f+a,u,ct)}}function _1(i,e,t,n){Ns(i,e,t,.12,.03,.04,D.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),jo(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function y1(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=t/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-e/2,a,r,e/2,a,r,ct)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,nt)}}function v1(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,Me),jo(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,Me),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Me);let s=Math.max(2,Math.round(e/.25));for(let r=0;r<s;r++){let o=-e/2+e/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function Km(i,e,t,n,s){let o=Math.min(.5,s?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+o,D.wood,D.woodTop,Me),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,Me),i.box(-e/2+(s?o:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+o,D.cushion,D.cushion,ct),s&&(i.box(-e/2,-e/2+o,0,.45-.06,-t/2+o,t/2,D.wood,D.woodTop,Me),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,Me),i.box(-e/2+a,-e/2+o,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,ct))}function M1(i,e,t,n){let s=Math.min(e,t)/2;i.cyl(0,0,s*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,D.metal,D.metal,12,ct),i.cyl(0,0,s,n-.05,n,D.cushion,D.fabricTop,14,Me)}function S1(i,e,t,n){let s=Math.min(e,t)/2;i.box(-s,s,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-s,s,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,D.fabric,D.cushion,Me),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,D.fabric,D.fabricTop,Me),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,D.metal)}function w1(i,e,t,n){Ns(i,e,t,.08,.04,.05,D.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,Me)}function T1(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,Me),jo(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function A1(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let s=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,s,s+.01,D.dark,D.dark,nt),i.seg(-e/2+.08,1.4,s+.02,e/2-.08,1.4,s+.02,nt);for(let r of[.85,1.45])i.seg(-e/2,r,s,e/2,r,s,ct);i.seg(e/2-.06,.5,s+.012,e/2-.06,.7,s+.012,nt),i.seg(e/2-.06,1.6,s+.012,e/2-.06,1.8,s+.012,nt)}function E1(i,e,t,n){let s=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+s,D.body,D.bodyTop,Me),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+s-.04,D.dark),jo(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+s,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function R1(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,Me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,nt),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function Zm(i,e,t,n,s){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,Me);let r=t/2-.012;i.seg(-e/2,n-.14,r,e/2,n-.14,r,ct),i.seg(e/2-.16,n-.07,r,e/2-.08,n-.07,r,nt);let o=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,r,Math.cos(u)*a,o+Math.sin(u)*a,r,nt),s||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,ct)}}function C1(i,e,t,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(e/2)-(o>0?.05:0),o*(e/2)+(o<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-e/2,e/2,o,o+.08,-t/2,t/2,D.wood,D.woodTop,Me),i.box(-e/2+.04,e/2-.04,o+.08,o+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,ct),i.box(-e/2+.05,e/2-.05,o+.24,o+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let r=e/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,t/2+.02,o,n-.15,t/2+.02,Me);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,t/2+.02,r+.18,o,t/2+.02,ct)}function I1(i,e,t,n){let s=Math.min(e,t)/2;i.cyl(0,0,s*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,s,n-.04,n,D.wood,D.woodTop,20,Me)}function P1(i,e,t,n){Ns(i,e,t,n-.03,.04,.03,D.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,ct)}function L1(i,e,t,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,s,s+n,-t/2+.03,t/2,D.dark,D.dark,nt)}function F1(i,e,t,n){let s=Vh;i.box(-e/2+.05,-e/2+.08,0,s,-t/2,-t/2+.03,D.metal),i.box(e/2-.08,e/2-.05,0,s,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,s,s+n,-t/2+.02,t/2,D.white,D.whiteTop,Me);let r=Math.max(3,Math.round(e/.1));for(let o=1;o<r;o++){let a=-e/2+e/r*o;i.seg(a,s+.03,t/2+.002,a,s+n-.03,t/2+.002,ct)}}function Jm(i,e,t,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,s,e+Math.cos(l)*n,t+Math.sin(l)*n,s,nt)}}function D1(i,e,t,n,s){let o=t/2;if(s==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,Me),i.seg(-e*.25,1.1+n*.15,o+.004,-e*.25,1.1+n*.85,o+.004,nt),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(s==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),Jm(i,0,1.1+n*.66,Math.min(e,n)*.22,o+.004),i.seg(-e*.08,1.1+n*.66,o+.005,e*.08,1.1+n*.66,o+.005,nt);for(let a of[-1,1])Jm(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,nt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,ct)}function N1(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,Me),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,nt),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,ct)}function O1(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,Me);let r=Math.min(e,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,t/2+.003,Math.cos(h)*r,o+Math.sin(h)*r,t/2+.003,nt)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function U1(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,Me),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,ct),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,ct),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,nt)}function B1(i,e,t,n,s){if(s==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,Me),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,nt),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,ct);return}if(s==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,Me),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,nt),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-e/2,e/2,.06+a*o+.004,.06+(a+1)*o,-t/2,t/2,D.white,D.whiteTop,Me);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,nt)}}var Vh=.12;function Gh(i,e){let t=z1(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function z1(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=cm(i.type);if(r){let l=e?Fn(e,i):0,c=(r.x-r.w/2)*t,h=(r.x+r.w/2)*t,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+r.y*s+u,y1:l+(r.y+r.h)*s-u,z:(r.z+r.d/2)*n}}let o=e&&i.type!=="fridge_smart"?Fn(e,i)-Vo(i):0,a=k1(i,t,n,s,e);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function k1(i,e,t,n,s){if(i.type==="tv_board"){let r=Math.min(e*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-t/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:r+.02,y1:r+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let r=s?Fn(s,i):0;return{x0:.06,x1:e/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Vh+.02,y1:Vh+n-.02,z:t/2+.004};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function V1(i,e,t,n,s){let r=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),o=new j(1-s,1-s,1-s),a=new j(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],h=[e(-t/2-r,-n/2-r),e(t/2+r,-n/2-r),e(t/2+r,n/2+r),e(-t/2-r,n/2+r)],u=d=>[d[0],l,d[1]],f=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(u(c[d]),u(h[d]),u(h[m]),o,a,a),i.tri(u(c[d]),u(h[m]),u(c[m]),o,a,o)}Qm(e)&&Hh(i,f)}function yc(i,e,t,n,s=0){G1(i,e,t,n,s)}function Hh(i,e){let t=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let s=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,s*3,1),t(i.uv,s*6,2),t(i.tile,s*6,2)}}function G1(i,e,t,n,s){let r=$t(n.type)?0:s-Vo(n);if($t(n.type)||Math.abs(r)<.001)return jm(i,e,t,n,s);let o=i.p.length,a=e.p.length;jm(i,e,s<.05?t:new mt,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=r}function jm(i,e,t,n,s){let r=n.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],h=new Jo(i,e,c),u=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":$m(h,u,f,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":$m(h,u,f,d,1);break;case"bed":e1(h,u,f,d);break;case"chair":t1(h,u,f,d);break;case"table":n1(h,u,f,d);break;case"desk":i1(h,u,f,d);break;case"nightstand":es(h,u,f,d,1,d*.72,!0),h.seg(-u/2,d*.5,f/2-.02,u/2,d*.5,f/2-.02,ct);break;case"wardrobe":es(h,u,f,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":s1(h,u,f,d);break;case"kitchen":r1(h,u,f,d);break;case"fridge":o1(h,u,f,d);break;case"fridge_smart":a1(h,u,f,d);break;case"stove":c1(h,u,f,d);break;case"sink":u1(h,u,f,d);break;case"bathtub":h1(h,u,f,d);break;case"shower":f1(h,u,f,d);break;case"wc":d1(h,u,f,d);break;case"washbasin":p1(h,u,f,d);break;case"tv_board":m1(h,u,f,d);break;case"plant":g1(h,u,f,d);break;case"rug":x1(h,u,f);return;case"stairs":b1(h,u,f,d);break;case"stairwell":return;case"sideboard":_1(h,u,f,d);break;case"dresser":y1(h,u,f,d);break;case"tall_cabinet":es(h,u,f,d,1,d*.5);break;case"coat_rack":v1(h,u,f,d);break;case"bench":Km(h,u,f,d,!1);break;case"corner_bench":Km(h,u,f,d,!0);break;case"bar_stool":M1(h,u,f,d);break;case"office_chair":S1(h,u,f,d);break;case"stool":w1(h,u,f,d);break;case"kitchen_wall":T1(h,u,f,d);return;case"kitchen_tall":A1(h,u,f,d);break;case"island":E1(h,u,f,d);break;case"worktop":h.box(-u/2,u/2,Math.max(0,d-.04),d,-f/2,f/2,D.whiteTop,D.whiteTop,Me);return;case"dishwasher":R1(h,u,f,d);break;case"washer":Zm(h,u,f,d,!1);break;case"dryer":Zm(h,u,f,d,!0);break;case"bunk_bed":C1(h,u,f,d);break;case"table_round":I1(h,u,f,d);break;case"coffee_table":P1(h,u,f,d);break;case"tv_wall":L1(h,u,f,d);return;case"parking":{let x=[[-u/2,-f/2],[u/2,-f/2],[u/2,f/2],[-u/2,f/2]];for(let g=0;g<4;g++)h.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],ct);h.seg(-u*.15,.012,f/2-.45,0,.012,f/2-.2,Me),h.seg(0,.012,f/2-.2,u*.15,.012,f/2-.45,Me);return}case"robot_vacuum":h.box(-u*.45,u*.45,0,d,-f/2,-f/2+f*.3,D.white,D.whiteTop,Me),h.box(-u*.2,u*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":F1(h,u,f,d);return;case"inverter":D1(h,u,f,d,n.variant??null);return;case"grid_point":N1(h,u,f,d);break;case"wallbox":O1(h,u,f,d);return;case"meter":U1(h,u,f,d);return;case"home_battery":if(B1(h,u,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=$t(n.type);if(m){if(n0(h,m,u,f,d,s,null,null,n.variant??null),s>.05)return}else h.box(-u/2,u/2,0,d,-f/2,f/2,D.body,D.bodyTop,Me)}}V1(t,c,u,f,n.type==="plant"?.35:.5)}function kh(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=D;return(e?t[`${i}Top`]:void 0)??t[i]??null}function n0(i,e,t,n,s,r,o,a=null,l=null){let c=e.colors?.length?(e.colors.find(u=>u.id===l)??e.colors[0]).hex:null,h=!!a;for(let u of e.parts){if(a&&!a(u))continue;let f=h?{...u,glow:!0,w:u.w+.006/t,d:u.d+.006/n,y:Math.max(0,u.y-.002/s),h:u.h+.004/s}:u,d=f.glow&&o!==null,m=f.paint&&c?c:f.color,x=d?o:kh(m,!1)??D.body,g=d?o:kh(f.paint&&c?void 0:f.top,!1)??kh(m,!0)??He(x,1.25).getHex(),p=r+f.y*s,_=r+Math.min(s,(f.y+f.h)*s),M=f.edges==="glow"?Fs:f.edges==="faint"?ct:f.edges?Me:null,b=f.rot?i.rotated(f.x*t,f.z*n,f.rot):i;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))b.lyingCyl(f.axis,f.x*t,f.z*n,p,_,f.axis==="x"?f.w*t:f.d*n,f.axis==="x"?f.d*n:f.w*t,x,g,14,M);else if(f.shape==="cyl")b.cyl(f.x*t,f.z*n,Math.min(f.w*t,f.d*n)/2,p,_,x,g,14,M);else if(f.shape==="loft"){let v=f.tx??f.x,S=f.tz??f.z,E=f.tw??f.w,y=f.td??f.d;b.loft([(f.x-f.w/2)*t,(f.x+f.w/2)*t,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(v-E/2)*t,(v+E/2)*t,(S-y/2)*n,(S+y/2)*n],p,_,x,g,M)}else if(f.shape==="sweep"){let v=(f.stations??[]).map(([S,E,y,w])=>({x:f.x*t,z:S*n,y0:r+E*s,y1:r+y*s,hw:w*t/2}));b.sweep(v,x,g,f.n??16,f.exp??2.6,M)}else b.box((f.x-f.w/2)*t,(f.x+f.w/2)*t,p,_,(f.z-f.d/2)*n,(f.z+f.d/2)*n,x,g,M)}}function i0(i,e,t,n,s,r){let o=r*Lt,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[t+m*a-x*l,s+m*l+x*a],h=new Jo(i,new cn,c),u=1713728,f=2373216,d=725279;if(e==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,D.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function vc(i,e,t,n,s){let r=t.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(h,u)=>[t.x+l*h*o-u*a,t.z+l*h*a+u*o];n0(new Jo(i,new cn,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,s)}var H1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}};function r0(i,e){return Go(i)+(e.offset??0)+(Is(e.type)?.01:pc[e.type])}function Qo(i){return Ls(i)>=0?i:[...i].reverse()}function W1(i,e){let t=i[e];if(Is(t.type)||t.type==="pool")return[];let n=[];for(let s=e+1;s<i.length;s++){let r=i[s];!r.cut||r.points.length<3||r.points.every(o=>_t(o,t.points))&&n.push(Qo(r.points))}return n}function s0(i,e,t,n,s,r,o,a,l=0){let c=t[0]-e[0],h=t[1]-e[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ft(i,Qo([[e[0]+f,e[1]+d],[t[0]+f,t[1]+d],[t[0]-f,t[1]-d],[e[0]-f,e[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let m=(b,v)=>[e[0]+f*v,b,e[1]+d*v],x=(b,v)=>[t[0]+f*v,b+l,t[1]+d*v],g=(b,v)=>{i.tri(b[0],b[1],b[2],v,v,v,void 0,rt),i.tri(b[0],b[2],b[3],v,v,v,void 0,rt),i.tri(b[0],b[2],b[1],v,v,v,void 0,rt),i.tri(b[0],b[3],b[2],v,v,v,void 0,rt)},p=new j(a),_=new j(He(o,.9)),M=new j(He(o,.6));g([m(r,1),x(r,1),x(r,-1),m(r,-1)],p),g([m(s,1),x(s,1),x(s,-1),m(s,-1)],M),g([m(s,1),x(s,1),x(r,1),m(r,1)],_),g([m(s,-1),x(s,-1),x(r,-1),m(r,-1)],_),g([m(s,1),m(s,-1),m(r,-1),m(r,1)],_),g([x(s,1),x(s,-1),x(r,-1),x(r,1)],_)}function o0(i,e,t){let n=Go(t),s=t.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=(g,p)=>a-Ph(r,g,p),c=a-(r.type==="pool"?0:r.slope??0),h=Is(r.type)&&r.height?r.height:pc[r.type],u={...H1[r.type],top:h},f=Qo(r.points),d=He(u.edge,u.edgeAlpha),m=r.open&&(r.type==="fence"||r.type==="pergola")?f.length-1:-1,x=g=>{if(r.outline!==!1)for(let p=0;p<f.length;p++){if(p===m)continue;let _=f[p],M=f[(p+1)%f.length];e.seg([_[0],g(_[0],_[1]),_[1]],[M[0],g(M[0],M[1]),M[1]],d,rt)}};switch(r.type){case"pool":{let g=new j(u.color);for(let[_,M,b]of Zo(f)){let v=f[_],S=f[M],E=f[b];i.tri([v[0],a+u.top,v[1]],[E[0],a+u.top,E[1]],[S[0],a+u.top,S[1]],g,g,g,void 0,rt)}let p=new j(u.side);for(let _=0;_<f.length;_++){let M=f[_],b=f[(_+1)%f.length];i.tri([b[0],a+u.top,b[1]],[b[0],a+.06,b[1]],[M[0],a+.06,M[1]],p,p,p,void 0,rt),i.tri([b[0],a+u.top,b[1]],[M[0],a+.06,M[1]],[M[0],a+u.top,M[1]],p,p,p,void 0,rt)}x(()=>a+.06),x(()=>a+u.top+.005);break}case"fence":{for(let g=0;g<f.length;g++){if(g===m)continue;let p=f[g],_=f[(g+1)%f.length],M=Math.hypot(_[0]-p[0],_[1]-p[1]),b=Math.max(1,Math.round(M/2)),v=m>=0&&g===m-1?b:b-1;for(let S=0;S<=v;S++){let E=S/b,y=p[0]+(_[0]-p[0])*E,w=p[1]+(_[1]-p[1])*E,R=l(y,w);Ft(i,Qo([[y-.04,w-.04],[y+.04,w-.04],[y+.04,w+.04],[y-.04,w+.04]]),R,R+u.top,u.side,u.color)}for(let S of[.35,.85])e.seg([p[0],l(p[0],p[1])+S*u.top,p[1]],[_[0],l(_[0],_[1])+S*u.top,_[1]],d,rt)}break}case"pergola":{let g=u.top;for(let[p,_]of f){let M=l(p,_);Ft(i,Qo([[p-.06,_-.06],[p+.06,_-.06],[p+.06,_+.06],[p-.06,_+.06]]),M,M+g,u.side,u.color)}for(let p=0;p<f.length;p++){if(p===m)continue;let _=f[p],M=f[(p+1)%f.length],b=l(_[0],_[1])+g;if(s0(i,_,M,.12,b-.16,b,u.side,u.color,l(M[0],M[1])-l(_[0],_[1])),r.bracing){let v=l(_[0],_[1]),S=l(M[0],M[1]);e.seg([_[0],v+.25,_[1]],[M[0],S+g-.25,M[1]],d,rt),e.seg([M[0],S+.25,M[1]],[_[0],v+g-.25,_[1]],d,rt)}}if(vm(f)){let p=Mm(f),_=p.x1-p.x0,M=p.z1-p.z0,b=_>=M,v=b?_:M,S=Math.max(1,Math.round(v/.6));for(let E=1;E<S;E++){let y=(b?p.x0:p.z0)+v*E/S,w=b?[y,p.z0+.06]:[p.x0+.06,y],R=b?[y,p.z1-.06]:[p.x1-.06,y],T=l(w[0],w[1])+g;s0(i,w,R,.06,T-.04,T+.08,u.side,u.color,l(R[0],R[1])-l(w[0],w[1]))}}x((p,_)=>l(p,_)+g+.004);break}default:{let g=(_,M)=>l(_,M)+u.top,p=W1(s,o);if(Ft(i,f,c,r.slope?g:a+u.top,u.side,u.color,{aoFrom:c,holes:p}),x((_,M)=>g(_,M)+.004),r.type==="hedge"&&x((_,M)=>l(_,M)+.004),r.outline!==!1)for(let _ of p)for(let M=0;M<_.length;M++){let b=_[M],v=_[(M+1)%_.length];e.seg([b[0],g(b[0],b[1])+.004,b[1]],[v[0],g(v[0],v[1])+.004,v[1]],d,rt)}}}})}var Sc=Math.PI/180,X1=1.13,q1=1.72,Wh=.025,Os=.07,a0=.25;function l0(i,e){let t=[];for(let n of i.floors){if(e&&n.id!==e)continue;let{walls:s}=qo(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,h=-o/l,u=Math.min(n.height,r.height??n.height),f=(d,m,x,g)=>t.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+h*r.right],[o/l,0,a/l],[c,0,h]),r.free&&f(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-h*r.left],[-o/l,0,-a/l],[-c,0,-h])}}return t}var Xh="ground";function qh(i){let e=[...i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function c0(i,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],s=[-Math.sin(t),0,Math.cos(t)],r=qh(i),o=n[0]*e.u+s[0]*e.v,a=n[2]*e.u+s[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:gm(r,o,a)):e.base??0;return{key:Xh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}function Y1(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function wc(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(_=>$1(_,bc(i,_,_.overhang??e.overhang)));let t=Y1(i);if(!t)return[];let n=t.rooms.flatMap(_=>_.points.map(M=>M[0])),s=t.rooms.flatMap(_=>_.points.map(M=>M[1])),r=i.settings.wall_exterior+e.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,h=t.elevation+t.height;if(e.type==="flat")return[u0("main",null,o,l,a,c,h+a0)];let u=a-o>=c-l,f=e.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,m=d*Math.tan(e.pitch*Sc),x=(_,M,b)=>f?[_,h+b,(l+c)/2+M]:[(o+a)/2+M,h+b,_],[g,p]=f?[o,a]:[l,c];return[-1,1].map(_=>Mc(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*d,0),x(p,_*d,0),x(g,0,m),e.pitch,()=>[0,p-g]))}function $1(i,e){let t=fi(i),n=Dn(i),s=(x,g,p)=>{let[_,M]=t.at(x,g);return[_,p,M]},r=Math.max(0,e.a),o=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=t.at(a,-r),g=t.at(l,t.w+o);return[u0(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+a0)]}if(i.shape==="pent")return[Mc(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,t.w+o,n.y(t.w+o)),i.pitch_a,()=>[0,c])];let h=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(t.u1-t.u0)/2:h?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,f=h?t.u0+u-a:0,d=h?l-(t.u1-u):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));m.push(Mc(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(t.w-n.vr>.3){let x=Math.hypot(t.w+o-n.vr,n.rh-n.y(t.w+o));m.push(Mc(`${i.id}:b`,i.id,"b",s(l,t.w+o,n.y(t.w+o)),s(a,t.w+o,n.y(t.w+o)),s(l,n.vr,n.rh),i.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(h){let x=n.y(-r),g=n.y(t.w+o),p=[[`${i.id}:c`,"c",s(a,t.w+o,g),s(a,-r,x),s(t.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",s(l,-r,x),s(l,t.w+o,g),s(t.u1-u,n.vr,n.rh)]];for(let[_,M,b,v,S]of p){let E=K1(_,i.id,M,b,v,S);E&&m.push(E)}}return m}function K1(i,e,t,n,s,r){let o=ea(Us(s,n));if(o<.3)return null;let a=ts(Us(s,n)),l=Us(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ea(h);if(u<.3)return null;let f=ts(h),d=ts(d0(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=ts([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Sc;return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:x,span:p=>{let _=Math.min(1,Math.max(0,p/u));return[c*_,o-(o-c)*_]},facing:[m[0],m[2]]}}function Mc(i,e,t,n,s,r,o,a){let l=ts(Us(s,n)),c=ts(Us(r,n)),h=ts(d0(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=ts([-c[0],0,-c[2]]);return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:h,lu:ea(Us(s,n)),ls:ea(Us(r,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function u0(i,e,t,n,s,r,o){let a=s-t>=r-n,l=a?s-t:r-n,c=a?r-n:s-t;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function h0(i){let e=i.module_w||X1,t=i.module_h||q1;return i.portrait===!1?[t,e]:[e,t]}function Z1(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function f0(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*Sc:i.wall?Math.min(90,Math.max(0,e.tilt??0))*Sc:0}function J1(i,e){let[,t]=h0(e),n=f0(i,e);return i.wall?t*Math.cos(n)+Wh:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Wh}function Yh(i,e,t=!1){let[n,s]=h0(e),r=[],o=f0(i,e),a=s*Math.cos(o),l=J1(i,e),c=Z1(e),h=Math.max(1,...c),u=new Set(e.skip??[]),f=(m,x,g)=>[i.o[0]+i.eu[0]*m+i.es[0]*x+i.n[0]*g,i.o[1]+i.eu[1]*m+i.es[1]*x+i.n[1]*g,i.o[2]+i.eu[2]*m+i.es[2]*x+i.n[2]*g],d=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,p]=i.span(x);return m>=g-1e-6&&m<=p+1e-6};return c.forEach((m,x)=>{let g=e.align==="right"?h-m:e.align==="center"?(h-m)/2:0;for(let p=0;p<m;p++){let _=`${x}:${p}`,M=u.has(_);if(M&&!t)continue;let b=e.u+(p+g)*(n+Wh),v=e.v+x*l,S=b+n,E=v+(i.flat||i.wall?a:s);if(![[b,v],[S,v],[S,E],[b,E]].every(([I,C])=>d(I,C)))continue;if(i.wall&&o>.001){let I=Os+s*Math.sin(o),[C,F]=e.flip?[I,Os]:[Os,I],N=[f(b,v,C),f(S,v,C),f(S,E,F),f(b,E,F)],U=e.flip?v:E,V=[b+.05,S-.05].map(z=>[f(z,U,0),f(z,U,I)]);r.push({corners:N,posts:V,cell:_,skipped:M});continue}if(!i.flat){r.push({corners:[f(b,v,Os),f(S,v,Os),f(S,E,Os),f(b,E,Os)],posts:[],cell:_,skipped:M});continue}let y=.15,w=y+s*Math.sin(o),[R,T]=e.flip?[E,v]:[v,E],L=[f(b,R,y),f(S,R,y),f(S,T,w),f(b,T,w)];r.push({corners:L,posts:[b+.05,S-.05].flatMap(I=>[[f(I,R,0),f(I,R,y)],[f(I,T,0),f(I,T,w)]]),cell:_,skipped:M})}}),r}function Us(i,e){return[i[0]-e[0],i[1]-e[1],i[2]-e[2]]}function ea(i){return Math.hypot(i[0],i[1],i[2])}function ts(i){let e=ea(i)||1;return[i[0]/e,i[1]/e,i[2]/e]}function d0(i,e){return[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]]}var j1=.78,Q1=1.18;function eS(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||j1,module_h:i.h||Q1}}function $h(i,e){let t=Yh(i,eS(e))[0];if(!t)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}var ta=1712952,na=2239816,g0=1318193,Bs=He(3662079,.9),Ur=He(5995775,.45),Kt=.14,tS=9427199,nS=13226982,iS=14936565,sS={black:{glass:new j(329483),edge:He(9082544,.32),cells:He(2766160,.22)},blue:{glass:new j(1386842),edge:He(10467583,.55),cells:He(4025599,.35)}},rS=He(13226982,.5),oS=He(13226982,.85),aS=He(16757575,.95),p0=new j(2845583),m0=new j(3818072);function lS(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function x0(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:hS(i),s=t?.type==="custom"?fS(i,t.sections??[],t.overhang):n?[n]:[];return uS(i,s),cS(i,s,e),s}function cS(i,e,t){let n=i.settings.roof?.windows??[];if(!n.length||!e.length)return;let s=new Map(wc(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?$h(o,r):null;if(!o||!a)continue;let l=o.section?e.find(T=>T.sections?.includes(o.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,h=T=>[T[0],T[1]-c,T[2]],[u,f,d,m]=a.map(h),x=t.get(r.id)??{open:0,tilt:0,cover:0},g=(T,L)=>[T[0]+o.n[0]*L,T[1]+o.n[1]*L,T[2]+o.n[2]*L],p=(T,L,I)=>[T[0]+(L[0]-T[0])*I,T[1]+(L[1]-T[1])*I,T[2]+(L[2]-T[2])*I],_=x.open>.02||x.tilt>.02?aS:oS,M=[u,f,d,m].map(T=>g(T,.06));for(let T=0;T<4;T++)l.lines.seg(M[T],M[(T+1)%4],_);let b=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*Lt,v=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),S=T=>{let L=o.es;return[T[0]-L[0]*v*Math.cos(b)+o.n[0]*v*Math.sin(b),T[1]-L[1]*v*Math.cos(b)+o.n[1]*v*Math.sin(b),T[2]-L[2]*v*Math.cos(b)+o.n[2]*v*Math.sin(b)]},E=g(m,.065),y=g(d,.065),w=S(E),R=S(y);l.solid.tri(w,R,y,p0),l.solid.tri(w,y,E,p0);for(let[T,L]of[[w,R],[R,y],[y,E],[E,w]])l.lines.seg(T,L,_);if(x.cover>.02){let T=Math.min(1,x.cover),L=g(p(E,w,T),.01),I=g(p(y,R,T),.01),C=g(E,.01),F=g(y,.01);l.solid.tri(L,I,F,m0),l.solid.tri(L,F,C,m0)}}}function uS(i,e){let t=i.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(wc(i).map(s=>[s.key,s]));for(let s of t){let r=n.get(s.face);if(!r)continue;let o=r.section?e.find(a=>a.sections?.includes(r.section)):e[0];o&&Kh(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}function Kh(i,e,t,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=sS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Yh(t,n)){let[h,u,f,d]=c.corners.map(r);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let m=(p,_=.004)=>[p[0]+t.n[0]*_,p[1]+t.n[1]*_,p[2]+t.n[2]*_],x=(p,_,M)=>[p[0]+(_[0]-p[0])*M,p[1]+(_[1]-p[1])*M,p[2]+(_[2]-p[2])*M],g=[h,u,f,d].map(p=>m(p));for(let p=0;p<4;p++)e.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)e.seg(m(x(h,u,p/a)),m(x(d,f,p/a)),o.cells);for(let p=1;p<l;p++)e.seg(m(x(h,d,p/l)),m(x(u,f,p/l)),o.cells);for(let[p,_]of c.posts)e.seg(r(p),r(_),rS)}}function hS(i){let e=i.settings.roof,t=lS(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(R=>R.points.map(T=>T[0])),s=t.rooms.flatMap(R=>R.points.map(T=>T[1])),r=i.settings.wall_exterior+e.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,h=new mt,u=new cn;if(e.type==="flat"){Ft(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,ta,na,{bottom:!0});let R=.252;for(let[T,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([T[0],R,T[1]],[L[0],R,L[1]],Bs),u.seg([T[0],0,T[1]],[L[0],0,L[1]],Ur);return{floor:t,base:t.height,solid:h,lines:u,glass:new mt}}let f=a-o>=c-l,d=e.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,x=m*Math.tan(e.pitch*Lt),g=(R,T,L)=>d?[R,L,(l+c)/2+T]:[(o+a)/2+T,L,R],[p,_]=d?[o,a]:[l,c],M=new j(na),b=new j(ta),v=(R,T,L,I,C)=>{h.tri(R,T,L,C),h.tri(R,L,I,C)};for(let R of[-1,1]){v(g(p,R*m,0),g(_,R*m,0),g(_,0,x),g(p,0,x),M),v(g(p,R*m,-Kt),g(p,0,x-Kt),g(_,0,x-Kt),g(_,R*m,-Kt),b),v(g(p,R*m,-Kt),g(_,R*m,-Kt),g(_,R*m,0),g(p,R*m,0),b);for(let T of[p,_])v(g(T,R*m,-Kt),g(T,R*m,0),g(T,0,x),g(T,0,x-Kt),b);u.seg(g(p,R*m,0),g(_,R*m,0),Ur);for(let T of[p,_])u.seg(g(T,R*m,0),g(T,0,x),Ur)}let S=e.overhang,E=new j(g0),y=m-S,w=y*Math.tan(e.pitch*Lt);for(let R of[p+S,_-S])h.tri(g(R,-y,-Kt),g(R,y,-Kt),g(R,0,w-Kt),E),h.tri(g(R,y,-Kt),g(R,-y,-Kt),g(R,0,w-Kt),E);return u.seg(g(p,0,x+.004),g(_,0,x+.004),Bs),{floor:t,base:t.height,solid:h,lines:u,glass:new mt}}function fS(i,e,t){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(wc(i).map(o=>[o.key,o]));for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Om(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new mt,lines:new cn,glass:new mt,sections:[],lift:!o.open}),c.sections.push(o.id);let h=xc(e,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!h,f=e.filter(x=>x!==o&&xc(e,x)===o).flatMap(x=>Dm(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),p=g&&g.section===o.id?$h(g,x):null;if(!p)continue;let _=p.map(M=>ji(o,M[0],M[2]));f.push({u0:Math.min(..._.map(M=>M[0])),u1:Math.max(..._.map(M=>M[0])),v0:Math.min(..._.map(M=>M[1])),v1:Math.max(..._.map(M=>M[1]))})}let d=h?Fh(h,o):o,m=null;if(h){let x=fi(d),g=Nr(h,{u0:0,u1:0,a:0,b:0}),p=_=>{let[M,b]=x.at(_,x.w/2),[v,S]=ji(h,M,b);return Ko(g,v,S)??Dn(h).y(S)};m=p(x.u0)<=p(x.u1)?0:1}dS(c.solid,c.lines,d,bc(i,d,d.overhang??t),a.elevation,c.glass,u,f,m)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function dS(i,e,t,n,s,r=i,o=!1,a=[],l=null){let c=fi(t),h=Dn(t),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,u.a),d=Math.max(0,u.b),m=c.w,x=c.u0-Math.max(0,u.u0),g=c.u1+Math.max(0,u.u1),p=(I,C,F)=>{let[N,U]=c.at(I,C);return[N,F-s,U]},_=new j(na),M=new j(ta),b=new j(g0),v=(I,C)=>{for(let F=1;F+1<I.length;F++)i.tri(I[0],I[F],I[F+1],C)},S=[],E=[],y=[],w=null;if(t.shape==="flat"||t.shape==="parapet"){let I=t.eave_a,C=t.shape==="parapet",F=t.points&&t.points.length>=3?Lm(t,C?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):C?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];Ft(i,F,I-s,I-s+.25,ta,na,{bottom:!0});for(let N=0;N<F.length;N++){let U=F[N],V=F[(N+1)%F.length];e.seg([U[0],I-s+.252,U[1]],[V[0],I-s+.252,V[1]],Bs),e.seg([U[0],I-s,U[1]],[V[0],I-s,V[1]],Ur)}if(C){let N=B=>Ho(B)>=0?B:[...B].reverse(),U=N(F),V=Lh(U,-.2),z=U.length;for(let B=0;B<z;B++){let H=N([U[B],U[(B+1)%z],V[(B+1)%z],V[B]]);Ft(i,H,I-s+.25,I-s+.65,ta,na),e.seg([U[B][0],I-s+.652,U[B][1]],[U[(B+1)%z][0],I-s+.652,U[(B+1)%z][1]],Bs),e.seg([V[B][0],I-s+.652,V[B][1]],[V[(B+1)%z][0],I-s+.652,V[(B+1)%z][1]],Bs)}}}else{let I=Nr(t,u);S=I.faces;for(let C of a)S=S.flatMap(F=>Nm(F,C));E=I.rim,y=I.ridges,w=I.gable}let R=!!t.open,T=new j(tS);for(let I of S){if(R){for(let C=1;C+1<I.length;C++)r.tri(p(I[0][0],I[0][1],I[0][2]),p(I[C][0],I[C][1],I[C][2]),p(I[C+1][0],I[C+1][1],I[C+1][2]),T);continue}v(I.map(([C,F,N])=>p(C,F,N)),_),v(I.map(([C,F,N])=>p(C,F,N-Kt)),M)}for(let I=0;I<E.length;I++){let[C,F,N]=E[I],[U,V,z]=E[(I+1)%E.length];R||v([p(C,F,N),p(U,V,z),p(U,V,z-Kt),p(C,F,N-Kt)],M),e.seg(p(C,F,N),p(U,V,z),R?Bs:Ur)}if(R){pS(i,e,c,h,u,p,s);return}for(let[[I,C,F],[N,U,V]]of y)e.seg(p(I,C,F+.004),p(N,U,V+.004),Bs);let L=t.base;if(!o){if(w){let I=mS(w,L-Kt),C=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let F of C)v(I.map(([N,U])=>p(F,N,U)),b)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let I of[0,m]){let C=h.y(I)-Kt;C>L+.02&&v([p(c.u0,I,L),p(c.u1,I,L),p(c.u1,I,C),p(c.u0,I,C)],b)}else if(t.eave_a>L+.02)for(let[I,C,F,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])v([p(I,C,L),p(F,N,L),p(F,N,t.eave_a),p(I,C,t.eave_a)],b)}}function pS(i,e,t,n,s,r,o){let a=t.w,l=.12,c=.16,h=s.a>0,u=s.b>0,f=s.u0>0,d=s.u1>0,m=(p,_,M,b,v,S)=>{let E=[t.at(p,M),t.at(_,M),t.at(_,b),t.at(p,b)],y=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Ft(i,y<0?[...E].reverse():E,v-o,S-o,nS,iS,{bottom:!0})},x=o;for(let[p,_]of[[0,h],[a,u]]){if(!_)continue;let M=n.y(p)-.03,b=p===0?0:a-l;m(t.u0,t.u1,b,b+l,M-c,M),e.seg(r(t.u0,p,M-c),r(t.u1,p,M-c),Ur)}for(let[p,_]of[[t.u0,f],[t.u1-l,d]])if(_)for(let M=0;M<6;M++){let b=a*M/6,v=a*(M+1)/6,S=Math.min(n.y(b),n.y(v))-.03;m(p,p+l,b,v,S-c,S)}let g=[];for(let[p,_]of[[0,h],[a-l,u]]){if(!_)continue;let M=t.u1-t.u0-l,b=Math.max(1,Math.ceil(M/3.5));for(let v=0;v<=b;v++){let S=t.u0+M*v/b;v===0&&!f||v===b&&!d||g.push([S,p])}}if(!h&&!u)for(let p of[t.u0,t.u1-l])(p===t.u0&&f||p!==t.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,_]of g){let M=n.y(_+l/2)-.03-c;m(p,p+l,_,_+l,x,M)}}function mS(i,e){let t=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=e&&t.push([o,a]);let l=i[r+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([o+(l[0]-o)*c,e])}}if(t.length<2)return[];let n=t[0],s=t[t.length-1];return s[1]>e&&t.push([s[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var ia={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},b0={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},ns=.2,sa=8,Tc=.42,Zh=.42;function S0(i,e,t,n=[],s=[],r){let{walls:o,open:a}=qo(i.rooms,{exterior:e,interior:t},i.walls??[]),l=(T,L,I)=>{let C=r?r(T,L):null;return C===null?I:Math.max(.05,Math.min(I,C))},c=(T,L,I,C,F)=>{if(!r)return F;let N=F,U=Math.max(2,Math.ceil((C-I)/.25)+1);for(let V=0;V<U;V++){let z=I+(C-I)*V/(U-1);N=Math.min(N,l(T[0]+L[0]*z,T[1]+L[1]*z,F))}return N},h=new mt(!0,!0),u=[],f=new cn,d=[];for(let T of i.rooms){if(T.points.length<3)continue;let L=M0(T.points),I=b0[T.floor_material]??b0.wood,C=new j(I.color),F=n.filter(B=>zm(B,L)).map(B=>km(B,.003));d.push(...F);let N=[...L,...F.flat()],U=h.count;for(let[B,H,ee]of Zo(L,F)){let Q=N[B],ce=N[H],ue=N[ee];h.tri([Q[0],0,Q[1]],[ue[0],0,ue[1]],[ce[0],0,ce[1]],C,C,C,[Q[0],Q[1],ue[0],ue[1],ce[0],ce[1]],rt,I.tile)}u.push({roomId:T.id,start:U,end:h.count,color:I.color});let V=new j(ia.slab),z=B=>{for(let H=0;H<B.length;H++){let ee=B[H],Q=B[(H+1)%B.length];h.tri([ee[0],-ns,ee[1]],[ee[0],0,ee[1]],[Q[0],0,Q[1]],V),h.tri([ee[0],-ns,ee[1]],[Q[0],0,Q[1]],[Q[0],-ns,Q[1]],V)}};z(L);for(let B of F){z([...M0(B)].reverse());for(let H=0;H<B.length;H++){let ee=B[H],Q=B[(H+1)%B.length];f.seg([ee[0],.006,ee[1]],[Q[0],.006,Q[1]],Fs),f.seg([ee[0],-ns,ee[1]],[Q[0],-ns,Q[1]],Qi)}}}let m=new Map,x=[],g=new Map;for(let T of o){let L="interior",I=null;if(T.exterior){let F=T.b[0]-T.a[0],N=T.b[1]-T.a[1],U=Math.hypot(F,N)||1,V=[N/U,-F/U],z=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*sa)%sa+sa)%sa;L=`s${z}`;let B=z/sa*2*Math.PI;I=[Math.cos(B),Math.sin(B)]}let C=m.get(L);C===void 0&&(C=x.length,m.set(L,C),x.push(I)),g.set(T,C)}let p=new Map,_=[];for(let T of i.openings){let L=Em(T,i.rooms,i.walls??[]);if(!L)continue;let I=Rm(o,T,L);if(!I)continue;let{wall:C,s:F}=I,N=Rc([C.b[0]-C.a[0],C.b[1]-C.a[1]]),U=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),V=Math.min(T.width,U),z=Math.max(0,Math.min(U-V,F-V/2)),B=L.room.points,H=C.free?N[0]*(B[1][0]-B[0][0])+N[1]*(B[1][1]-B[0][1])>0:C.roomLeft===T.room_id,ee=[-N[1],N[0]],Q=H?ee:[-ee[0],-ee[1]],ce=Math.min(c(C.a,N,z,z+V,Ac(C,i.height))-.02,T.sill+T.height),ue=Math.max(0,Math.min(T.sill,ce-.1)),Be=[Q[1],-Q[0]],q=N[0]*Be[0]+N[1]*Be[1]>0,Z={opening:T,bucket:g.get(C),start:[C.a[0]+N[0]*z,C.a[1]+N[1]*z],axis:N,width:V,toRoom:Q,faceRoom:H?C.left:C.right,faceOut:H?C.right:C.left,sill:ue,top:ce,hingeAtStart:T.hinge==="left"===q,exterior:C.exterior};_.push(Z);let ae=p.get(C);ae||p.set(C,ae=[]),ae.push({s0:z,s1:z+V,sill:ue,top:ce,info:Z})}let M=Math.min(i.cut_height,i.height),b=new mt;for(let T of o){let L=g.get(T),I=Rc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),C=(p.get(T)??[]).sort((ee,Q)=>ee.s0-Q.s0),F=Ac(T,i.height),N=[],U=[-1/0,...new Set(C.flatMap(ee=>[ee.s0,ee.s1])).values(),1/0].sort((ee,Q)=>ee-Q);for(let ee=0;ee+1<U.length;ee++){let Q=U[ee],ce=U[ee+1];if(ce-Q<1e-6)continue;let ue=Number.isFinite(Q)&&Number.isFinite(ce)?(Q+ce)/2:Number.isFinite(Q)?Q+1:ce-1,Be=C.filter(ae=>ae.s0<ue&&ae.s1>ue).map(ae=>[ae.sill,ae.top]).sort((ae,we)=>ae[0]-we[0]),q=[],Z=-ns;for(let[ae,we]of Be)ae>Z+1e-4&&q.push([Z,ae]),Z=Math.max(Z,we);F>Z+1e-4&&q.push([Z,F]),N.push({t0:Q,t1:ce,ranges:q})}let V=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),z=r&&c(T.a,I,0,V,F)<F-.001,B=z?N.flatMap(ee=>{let Q=Math.max(ee.t0,-.5),ce=Math.min(ee.t1,V+.5),ue=Math.max(1,Math.ceil((ce-Q)/.3));return Array.from({length:ue},(Be,q)=>({t0:q===0?ee.t0:Q+(ce-Q)*q/ue,t1:q===ue-1?ee.t1:Q+(ce-Q)*(q+1)/ue,ranges:ee.ranges,inner0:q>0,inner1:q<ue-1}))}):N.map(ee=>({...ee,inner0:!1,inner1:!1})),H=ee=>(ee[0]-T.a[0])*I[0]+(ee[1]-T.a[1])*I[1];for(let ee of B){let Q=xS(T.footprint,T.a,I,ee.t0,ee.t1);if(Q.length<3)continue;let ce=(q,Z)=>Math.abs(H(q)-Z)<1e-4,ue=(q,Z)=>ee.inner0&&ce(q,ee.t0)&&ce(Z,ee.t0)||ee.inner1&&ce(q,ee.t1)&&ce(Z,ee.t1),Be=z?Math.min(...Q.map(([q,Z])=>l(q,Z,F))):F;for(let[q,Z]of ee.ranges){let ae=Math.min(Z,z?Math.max(...Q.map(([st,Ne])=>l(st,Ne,F))):Z);if(ae-q<1e-4||Be-q<.01)continue;let we=q>.01,ge=z&&Z>Be,ke=(st,Ne)=>Math.min(Z,l(st,Ne,F));if(q<M-1e-6){let st=ae>M+1e-6?Gm+L:Ds+L,Ne=ge&&Be<M?(Ze,ot)=>Math.min(M,ke(Ze,ot)):Math.min(ae,M);Ft(b,Q,q,Ne,ia.wall,ia.wallTop,{aoFrom:0,bottom:we,fold:Ds+L,topFold:st,skipSide:ue})}ae>M+1e-6&&Be>M+1e-6&&Ft(b,Q,Math.max(q,M),ge?ke:ae,ia.wall,ia.wallTop,{aoFrom:0,fold:L,bottom:we&&q>=M,skipSide:ue})}}}let v=o.flatMap(T=>T.footprint),S=_S(o,v),E=new cn;E.p.push(...f.p),E.c.push(...f.c),E.f.push(...f.f);let y=(T,L)=>(p.get(T)??[]).filter(L);for(let T of S.edges){let L=g.get(T.wall);for(let[C,F]of Ec(T,y(T.wall,N=>N.sill<=.005)))E.seg([C[0],.004,C[1]],[F[0],.004,F[1]],Vm);for(let[C,F]of Ec(T,y(T.wall,N=>N.sill<M&&N.top>M)))E.seg([C[0],M,C[1]],[F[0],M,F[1]],Uh,_c+L);let I=Ac(T.wall,i.height);for(let[C,F]of Ec(T,y(T.wall,N=>N.top>=I-.021))){if(!r){E.seg([C[0],I,C[1]],[F[0],I,F[1]],Fs,I<=M+1e-6?Ds+L:L);continue}let N=Math.max(1,Math.ceil(Math.hypot(F[0]-C[0],F[1]-C[1])/.3));for(let U=0;U<N;U++){let V=[C[0]+(F[0]-C[0])*U/N,C[1]+(F[1]-C[1])*U/N],z=[C[0]+(F[0]-C[0])*(U+1)/N,C[1]+(F[1]-C[1])*(U+1)/N],B=l(V[0],V[1],I),H=l(z[0],z[1],I);E.seg([V[0],B,V[1]],[z[0],H,z[1]],Fs,Math.max(B,H)<=M+1e-6?Ds+L:L)}}}for(let T of S.corners){let L=l(T.p[0],T.p[1],Ac(T.wall,i.height));E.segSplit([T.p[0],.004,T.p[1]],[T.p[0],L,T.p[1]],Qi,Math.min(M,L),g.get(T.wall))}for(let T of p.values())for(let L of T)gS(E,L,M);let w=yS(S.edges,i.rooms,p);o0(b,E,i);for(let T of s)Kh(b,E,T.face,T.field,i.elevation);let R=[];for(let T of i.furniture){if(bm(T.type))continue;let L=b.count,I=E.p.length/6,C=Fn(i,T);fc(T.type)||yc(b,E,w,T,C),C+T.h>M+.05&&(Hm(b,L,M,Bh),Wm(E,I,M,Bh)),R.push({id:T.id,start:L,end:b.count})}return{floor:h.geometry(),roomTris:u,holes:d,walls:b.geometry(),lines:E.geometry(),shadow:w.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(T=>g.get(T)),furnitureTris:R,roofUnder:r}}function gS(i,e,t){let{info:n}=e,s=n.bucket,r=(l,c,h)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],o=l=>l>t+1e-6?s:rt,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(r(c,l,a),r(c,l,e.top),Qi,t,s);i.seg(r(e.s0,l,e.top),r(e.s1,l,e.top),Qi,o(e.top)),e.sill>.01&&i.seg(r(e.s0,l,e.sill),r(e.s1,l,e.sill),Qi,o(e.sill))}for(let l of[e.s0,e.s1])i.seg(r(l,n.faceRoom,e.top),r(l,-n.faceOut,e.top),Qi,o(e.top)),e.sill>.01&&i.seg(r(l,n.faceRoom,e.sill),r(l,-n.faceOut,e.sill),Qi,o(e.sill)),e.sill<t&&e.top>t&&i.seg(r(l,n.faceRoom,t),r(l,-n.faceOut,t),Uh,_c+s)}function xS(i,e,t,n,s){let r=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],o=i;return Number.isFinite(n)&&(o=_0(o,a=>r(a)-n)),Number.isFinite(s)&&(o=_0(o,a=>s-r(a))),o}function _0(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=e(s),a=e(r);if(o>=0&&t.push(s),o>=0!=a>=0){let l=o/(o-a);t.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return t}var y0=i=>Math.round(i*1e3),ra=i=>`${y0(i[0])},${y0(i[1])}`,v0=(i,e)=>{let t=ra(i),n=ra(e);return t<n?`${t}|${n}`:`${n}|${t}`};function bS(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of e){let f=((u[0]-s[0])*o+(u[1]-s[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-s[0])*a-(u[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=s;for(let u of c){let f=[s[0]+o*u,s[1]+a*u];ra(f)!==ra(h)&&t.push([h,f]),h=f}t.push([h,r])}return t}function _S(i,e){let t=i.map(l=>({wall:l,edges:bS(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,h]of l){let u=v0(c,h);n.set(u,(n.get(u)??0)+1)}let s=[],r=new Map,o=(l,c,h)=>{let u=ra(l),f=r.get(u);f||r.set(u,f={p:l,wall:c,d:[]}),f.d.push(h)};for(let{wall:l,edges:c}of t)for(let[h,u]of c){if(n.get(v0(h,u))!==1)continue;let f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(f<1e-4)continue;s.push({a:h,b:u,wall:l});let d=[(u[0]-h[0])/f,(u[1]-h[1])/f];o(h,l,d),o(u,l,d)}let a=[];for(let{p:l,wall:c,d:h}of r.values())h.some(u=>h.some(f=>Math.abs(u[0]*f[1]-u[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function Ec(i,e){if(!e.length)return[[i.a,i.b]];let t=Rc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Rc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let s=u=>(u[0]-i.wall.a[0])*t[0]+(u[1]-i.wall.a[1])*t[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let u of e)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<d&&m.push([u.s1,d]),m});let h=u=>{let f=(u-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>r<=o?[h(u),h(f)]:[h(f),h(u)])}function yS(i,e,t){let n=new mt,s=new j(Zh,Zh,Zh),r=new j(1,1,1),o=.002;for(let a of i)for(let[l,c]of Ec(a,(t.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!e.some(p=>p.points.length>=3&&_t(m,p.points)))continue;let x=[l[0]+d[0]*Tc,l[1]+d[1]*Tc],g=[c[0]+d[0]*Tc,c[1]+d[1]*Tc];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function w0(i,e){let t=e.furniture.filter(r=>r.type==="stairwell").map(gc),n=i.filter(r=>r.elevation<e.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return Oh(t);let s=n.furniture.filter(r=>(r.type==="stairs"||$t(r.type)?.hole)&&n.elevation+r.h>=e.elevation-.3).map(gc);return Oh([...t,...s])}function Ac(i,e){return Math.min(e,i.height??e)}function Rc(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function M0(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e>=0?i:[...i].reverse()}var vS=500,T0=.12,A0=1.35,MS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Cc=class{view={target:new k,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let s=(r,o,a)=>{e.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(e-c)/h),f=MS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Jh(this.view.phi+this.velocity.phi,T0,A0),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},s=e.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:s,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},vS)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,s=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}if(t.button===1||t.button===2||e.shiftKey)this.pan(n,s);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-s/o*2.4;this.view.theta+=a,this.view.phi=Jh(this.view.phi+l,T0,A0),this.velocity={theta:a,phi:l}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,s)):(this.lastTap=r,this.events.tap(n,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=Jh(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new k(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new k(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-e*s),this.view.target.addScaledVector(o,t*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function Jh(i,e,t){return Math.min(t,Math.max(e,i))}function is(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool nfShow = ${t==="glass"?"false":"true"};
        if (fold > -0.5) {
          int nfFold = int(fold + 0.5);
          int nfKind = nfFold / 16;
          int nfBucket = nfFold - nfKind * 16;
          bool nfStanding = ((uStanding >> nfBucket) & 1) == 1;
          bool nfGlass = ((uGlass >> nfBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          nfShow = nfKind == 0 || nfKind == 4 ? nfStanding : nfKind == 1 || nfKind == 3 ? !nfStanding : true;
          bool nfWall = nfKind == 0 || nfKind == 2;
          ${t==="solid"?"if (nfGlass && nfWall) nfShow = false;":""}
          ${t==="glass"?"nfShow = nfShow && nfGlass && nfWall;":""}
        }
        if (!nfShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),t==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`nf-fold-${t}`,i}function SS(i,e){let t=$t(e);if(!t)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:i.variant??null,entity:null,power:null}}function Ic(i,e){if(!i.furniture.some(n=>n.type==="parking"&&e.has(n.id)))return i;let t=i.furniture.flatMap(n=>{let s=n.type==="parking"?e.get(n.id):void 0,r=s?SS(n,s):null;return r?[n,r]:[n]});return{...i,furniture:t}}var E0=["neon","blueprint","day"];function R0(i){return E0.indexOf(i)}var Pc={value:new k(.22,.88,1)},Lc={value:0};function C0(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var wS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 nfThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function di(i,e,t=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=e,r.uniforms.uAccent=Pc,r.uniforms.uAccentOn=Lc,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${wS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${t?"l":"s"}`,i}function Fc(i){return i==="day"?li:pt}var oa=.012,TS=.012;function P0(i,e,t,n,s,r=[],o){let a=[],l=[],c=[],h=[],u=(x,g,p,_,M,b,v)=>{for(let S of[x,g,p,x,p,_])a.push(S[0],S[1],S[2]),l.push(M[0],M[1],M[2]),c.push(b),h.push(v)};i.rooms.forEach((x,g)=>{if(x.points.length<3)return;let p=x.points.map(E=>E[0]),_=x.points.map(E=>E[1]),M=Math.min(...p),b=Math.min(..._),v=Math.max(1,Math.ceil((Math.max(...p)-M)/s)),S=Math.max(1,Math.ceil((Math.max(..._)-b)/s));for(let E=0;E<v;E++)for(let y=0;y<S;y++){let w=M+(E+.5)*s,R=b+(y+.5)*s;if(!_t([w,R],x.points)||r.some(I=>_t([w,R],I)))continue;let T=M+E*s,L=b+y*s;u([T,oa,L],[T,oa,L+s],[T+s,oa,L+s],[T+s,oa,L],[0,1,0],g,-1)}});let f=i.rooms.length;for(let x of i.outdoor??[]){if(x.points.length<3||Is(x.type))continue;let g=r0(i,x)+oa,p=x.points.map(E=>E[0]),_=x.points.map(E=>E[1]),M=Math.min(...p),b=Math.min(..._),v=Math.max(1,Math.ceil((Math.max(...p)-M)/s)),S=Math.max(1,Math.ceil((Math.max(..._)-b)/s));for(let E=0;E<v;E++)for(let y=0;y<S;y++){if(!_t([M+(E+.5)*s,b+(y+.5)*s],x.points))continue;let w=M+E*s,R=b+y*s;u([w,g,R],[w,g,R+s],[w+s,g,R+s],[w+s,g,R],[0,1,0],f,-1)}}let d=Math.min(i.cut_height,i.height);e.forEach((x,g)=>{let p=Math.min(i.height,x.height??i.height),_=Math.min(d,p-.02),M=x.b[0]-x.a[0],b=x.b[1]-x.a[1],v=Math.hypot(M,b);if(v<.05)return;let S=[M/v,b/v],E=[-S[1],S[0]],y=t[g],w=AS(x,S,v,n),R=(I,C,F)=>[C,F,...I.filter(N=>N>C+.005&&N<F-.005)].sort((N,U)=>N-U).filter((N,U,V)=>U===0||N>V[U-1]+.005),T=R([_,(_+p)/2,...w.flatMap(I=>[I.y0+.01,I.y1-.01])],.02,p-.02),L=R(w.flatMap(I=>[I.s0,I.s1]),0,v);for(let I of[1,-1]){let C=I>0?x.roomLeft:x.roomRight,F=C?i.rooms.findIndex(B=>B.id===C):x.exterior?f:-1;if(F<0)continue;let N=(I>0?x.left:x.right)+TS,U=[E[0]*I,E[1]*I],V=(B,H)=>[x.a[0]+S[0]*B+U[0]*N,H,x.a[1]+S[1]*B+U[1]*N],z=B=>{let H=V(B,0),ee=o?.(H[0],H[2]);return ee==null?1/0:ee-.02};for(let B=0;B<L.length-1;B++){let H=L[B+1]-L[B],ee=Math.max(1,Math.ceil(H/s));for(let Q=0;Q<ee;Q++){let ce=L[B]+H/ee*Q,ue=L[B]+H/ee*(Q+1),Be=(ce+ue)/2;for(let q=0;q<T.length-1;q++){let Z=T[q],ae=T[q+1];if(ae-Z<.01)continue;let we=(Z+ae)/2;if(w.some(Ne=>Be>Ne.s0&&Be<Ne.s1&&we>Ne.y0&&we<Ne.y1))continue;let ge=Z>=d-1e-6?y:Ds+y,ke=Math.min(ae,z(ce)),st=Math.min(ae,z(ue));ke<=Z+.005&&st<=Z+.005||u(V(ce,Z),V(ue,Z),V(ue,Math.max(Z,st)),V(ce,Math.max(Z,ke)),[U[0],0,U[1]],F,ge)}}}}});let m=[];for(let x of n){if(x.opening.type!=="door")continue;let g=e.find(M=>L0(M,x));if(!g||!g.roomLeft||!g.roomRight)continue;let p=i.rooms.findIndex(M=>M.id===g.roomLeft),_=i.rooms.findIndex(M=>M.id===g.roomRight);p<0||_<0||m.push({id:x.opening.id,a:p,b:_,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:m}}function L0(i,e){let t=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/s<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/s)>.99}function AS(i,e,t,n){let s=[];for(let r of n){if(!L0(i,r))continue;let o=(r.start[0]-i.a[0])*e[0]+(r.start[1]-i.a[1])*e[1],l=r.axis[0]*e[0]+r.axis[1]*e[1]>0?o:o-r.width;l>t||l+r.width<0||s.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function ES(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function RS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function I0(i,e,t,n,s,r,o){let a=e-i.x,l=t-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=RS(i),d=1/(1+h/(f*f)),m=d*Math.sqrt(d),x=Math.max(0,-(a*s+l*r+c*o)/u);return i.level*m*(.2+.8*x)*ES(i.kind,l/u)}function F0(i,e,t=.7,n=[]){let s=[...e];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,m]of[[h.a,h.b],[h.b,h.a]]){let x=[0,0,0];for(let p of e){if(p.room!==d)continue;let _=p.x-h.x,M=p.y-h.y,b=p.z-h.z,v=Math.hypot(_,M,b)||1,S=I0(p,h.x,h.y,h.z,_/v,M/v,b/v);x[0]+=p.color[0]*S,x[1]+=p.color[1]*S,x[2]+=p.color[2]*S}let g=Math.max(x[0],x[1],x[2]);g<.01||s.push({x:h.x,y:h.y,z:h.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let r=new Map;for(let h of s){let u={...h,color:h.color.map(f=>Math.pow(f,1.5))};r.set(h.room,[...r.get(h.room)??[],u])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=r.get(l[h]);if(!u)continue;let f=h*3,d=0,m=0,x=0;for(let g of u){let p=I0(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[f]=1-Math.exp(-d*t*1.6),c[f+1]=1-Math.exp(-m*t*1.6),c[f+2]=1-Math.exp(-x*t*1.6)}return c}function D0(i,e,t){let n=i.rooms.findIndex(s=>s.points.length>=3&&_t([e,t],s.points));return n<0?i.rooms.length:n}function N0(i,e){return i&&e>=0&&e<i.length?i[e]:e}var Nc={open:0,open2:0,tilt:0,tilt2:0,cover:null},O0=2043986,U0=2769520,CS=2242399,jh=1845831,IS=1450554,Li=16758087,PS=1.2,LS=1.5,FS=1846349,DS=2572395,NS=1120816,OS=1845831,B0=5995775,z0=9085695,Br=He(3662079,.08),US=.2;function Dc(i,e,t,n,s,r,o,a,l,c,h){let u=(d,m,x)=>e(d,m,x),f=[[u(t,s,a),u(n,s,a),u(n,r,a),u(t,r,a),c],[u(t,s,o),u(n,s,o),u(n,r,o),u(t,r,o),He(l.getHex(),.6)],[u(t,r,o),u(n,r,o),u(n,r,a),u(t,r,a),l],[u(t,s,o),u(n,s,o),u(n,s,a),u(t,s,a),He(l.getHex(),.85)],[u(t,s,o),u(t,r,o),u(t,r,a),u(t,s,a),He(l.getHex(),.92)],[u(n,s,o),u(n,r,o),u(n,r,a),u(n,s,a),He(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)i.tri(d,m,x,p,p,p,void 0,h),i.tri(d,x,g,p,p,p,void 0,h)}function lt(i,e,t,n,s,r,o,a,l,c,h,u){if(a<=h+1e-6)return Dc(i,e,t,n,s,r,o,a,l,c,rt);if(o>=h-1e-6)return Dc(i,e,t,n,s,r,o,a,l,c,u);Dc(i,e,t,n,s,r,o,h,l,c,rt),Dc(i,e,t,n,s,r,h,a,l,c,u)}function ss(i,e,t,n,s,r,o,a,l,c,h=0){let u=(f,d,m)=>{let x=b=>h?(o-b)/h:.5,g=e(t,s,f),p=e(n,s,f),_=e(n,s,d),M=e(t,s,d);i.tri(g,p,_,a,a,a,[0,x(f),1,x(f),1,x(d)],m),i.tri(g,_,M,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?u(r,o,rt):r>=l-1e-6?u(r,o,c):(u(r,l,rt),u(l,o,c))}function BS(i,e,t,n,s,r,o,a,l,c){let h=e(t,s,o),u=e(n,s,o),f=e(n,r,o),d=e(t,r,o),m=0,x=(r-s)/c;i.tri(h,u,f,a,a,a,[0,m,1,m,1,x],l),i.tri(h,f,d,a,a,a,[0,m,1,x,0,x],l)}function k0(i,e,t){let n=new mt,s=new mt,r=new mt(!0),o=new j(O0),a=new j(U0),l=[],c=[],h=[];for(let u of i){let f=n.count,d=s.count,m=r.count,x=e.get(u.opening.id)??Nc,g=u.width,{sill:p,top:_,bucket:M}=u,b=(y,w,R)=>[u.start[0]+u.axis[0]*y+u.toRoom[0]*w,R,u.start[1]+u.axis[1]*y+u.toRoom[1]*w],v=(u.faceRoom-u.faceOut)/2,S=u.opening.mark==="closed",E=u.opening.type==="door"&&Ps(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!E||u.opening.type==="garage"){let y=-u.faceOut-.012,w=u.faceRoom+.012,R=u.opening.type==="garage"&&(S?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),T=R?He(Li,.8):new j(O0),L=R?He(Li,1):new j(U0);lt(n,b,-.045,.02,y,w,0,_+.045,T,L,t,M),lt(n,b,g-.02,g+.045,y,w,0,_+.045,T,L,t,M),lt(n,b,.02,g-.02,y,w,_-.02,_+.045,T,L,t,M)}if(u.opening.type==="door"){let y=Ps(u.opening,u.exterior),w=ym(y),R=u.opening.swing==="out"?-1:1,T=R>0?u.faceRoom:-u.faceOut,L=u.opening.leaves===2,I=.02,C=g-.02,F=_m(g,y,u.hingeAtStart,u.opening);if(F){for(let[z,B]of F.panels)lt(n,b,z,z+.04,v-.03,v+.03,.02,_-.02,o,a,t,M),lt(n,b,B-.04,B,v-.03,v+.03,.02,_-.02,o,a,t,M),lt(n,b,z,B,v-.03,v+.03,.02,.1,o,a,t,M),ss(s,b,z+.04,B-.04,v,.1,_-.02,Br,t,M);I=F.x0,C=F.x1}let N=L?(C-I)/2-.004:C-I,U=w?.06:.04;w&&(lt(n,b,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new j(jh),a,t,M),u.exterior&&lt(n,b,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,_+.1,_+.17,He(Li,.55),He(Li,.85),t,rt));let V=E?[]:[[u.hingeAtStart,x.open]];L&&!E&&V.push([!u.hingeAtStart,x.open2??0]);for(let[z,B]of V){let H=Math.min(1,Math.max(0,B)),ee=y==="sliding"?0:H*LS,Q=y==="sliding"?H*N:0,ce=(st,Ne,Ze)=>{let ot=st*Math.cos(ee)-Ne*Math.sin(ee)-Q,je=T+R*(Ne*Math.cos(ee)+st*Math.sin(ee)+(Q?.05:0));return b(z?I+ot:C-ot,je,Ze)},ue=H>.05?rt:M,Be=S?!!x.sensed&&H<.05:H>.9,q=Be?He(Li,.7):new j(w?NS:FS),Z=Be?He(Li,.9):new j(w?OS:DS);y==="glass"?(lt(n,ce,0,.05,-U,0,.01,_-.01,q,Z,t,ue),lt(n,ce,N-.05,N,-U,0,.01,_-.01,q,Z,t,ue),lt(n,ce,.05,N-.05,-U,0,.01,.12,q,Z,t,ue),lt(n,ce,.05,N-.05,-U,0,_-.08,_-.01,q,Z,t,ue),ss(s,ce,.05,N-.05,-U/2,.12,_-.08,Br,t,ue)):lt(n,ce,0,N,-U,0,.01,_-.01,q,Z,t,ue),y==="front_glass"?ss(s,ce,.12,N-.12,.001,_*.55,_-.18,Br,t,ue):w&&ss(s,ce,.1,.18,.001,.3,_-.3,Br,t,ue);let ae=Math.min(1.05,_*.5),we=w?.3:.012,ge=w?N-.11:N-.16,ke=w?N-.08:N-.05;lt(n,ce,ge,ke,.004,.05,ae-we,ae+we,new j(B0),new j(z0),t,ue),lt(n,ce,ge,ke,-U-.05,-U-.004,ae-we,ae+we,new j(B0),new j(z0),t,ue)}}else if(u.opening.type==="garage"){let y=Math.min(1,Math.max(0,x.cover??1)),w=new j(13951231),R=u.faceRoom-.03,T=_*(1-y);y>.01&&ss(r,b,.02,g-.02,R,T,_,w,t,M,.5);let L=(1-y)*_;L>.01&&BS(r,b,.02,g-.02,R,R+L,_+.03,w,M,.5)}else if(Ps(u.opening,u.exterior)==="glass_wall"){lt(n,b,0,.04,v-.025,v+.025,p,_,o,a,t,M),lt(n,b,g-.04,g,v-.025,v+.025,p,_,o,a,t,M),lt(n,b,.04,g-.04,v-.025,v+.025,p,p+.03,o,a,t,M),lt(n,b,.04,g-.04,v-.025,v+.025,_-.04,_,o,a,t,M);let R=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/R;for(let L=1;L<R;L++){let I=.04+L*T;lt(n,b,I-.02,I+.02,v-.025,v+.025,p+.03,_-.04,o,a,t,M)}for(let L=0;L<R;L++){let I=.04+L*T+(L?.02:0),C=.04+(L+1)*T-(L<R-1?.02:0);ss(s,b,I,C,v,p+.03,_-.04,Br,t,M)}}else{lt(n,b,0,.06,v-.035,v+.035,p,_,o,a,t,M),lt(n,b,g-.06,g,v-.035,v+.035,p,_,o,a,t,M),lt(n,b,.06,g-.06,v-.035,v+.035,p,p+(p>.05?.06:.03),o,a,t,M),lt(n,b,.06,g-.06,v-.035,v+.035,_-.06,_,o,a,t,M),p>.3&&(lt(n,b,-.04,g+.04,v+.035,u.faceRoom+.07,p-.03,p,new j(jh),a,t,M),u.exterior&&lt(n,b,-.03,g+.03,-u.faceOut-.06,v-.035,p-.04,p-.02,new j(jh),a,t,M));let R=.055,T=p+(p>.05?.06:.03),L=_-.06,I=v+.035,C=v+.035+.06,N=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let U of N){let V=U.open>.02||U.tilt>.02,z=S?!!x.sensed&&!V:V,B=z?He(Li,.75):new j(CS),H=z?He(Li,.95):a,ee=U.x0,Q=U.x1,ce=Q-ee,ue=U.open*PS,Be=U.tilt*US,q=(ae,we,ge)=>{let ke=ge-T,st=we+ke*Math.sin(Be),Ne=T+ke*Math.cos(Be),Ze=ae*Math.cos(ue)-(st-I)*Math.sin(ue);st=I+(st-I)*Math.cos(ue)+ae*Math.sin(ue);let ot=U.atStart?ee+Ze:Q-Ze;return b(ot,st,Ne)},Z=ue>.05?rt:M;if(lt(n,q,0,R,I,C,T,L,B,H,t,Z),lt(n,q,ce-R,ce,I,C,T,L,B,H,t,Z),lt(n,q,R,ce-R,I,C,T,T+R,B,H,t,Z),lt(n,q,R,ce-R,I,C,L-R,L,B,H,t,Z),ss(s,q,R,ce-R,(I+C)/2,T+R,L-R,z?He(Li,.16):Br,t,Z),Ps(u.opening,u.exterior)==="bars"){let ae=(T+L)/2,we=(I+C)/2;lt(n,q,R,ce-R,we-.012,we+.012,ae-.012,ae+.012,B,H,t,Z),lt(n,q,ce/2-.012,ce/2+.012,we-.012,we+.012,T+R,L-R,B,H,t,Z)}}}if(x.cover!==null){let y=-u.faceOut,w=_+.2;lt(n,b,-.05,g+.05,y-.15,y,_,w,new j(IS),a,t,M);let R=Math.min(1,Math.max(0,x.cover));if(R>.01){let T=_-R*(_-p);ss(r,b,0,g,y-.07,T,_,new j(16777215),t,M,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:s.count}),h.push({id:u.opening.id,start:m,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:h}}var Qh=Math.PI/180,aa=2400,zr=1600,ef=9;function Oc(i,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[r,o]of i)s.addColorStop(r,o);return n.fillStyle=s,n.fillRect(0,0,e,e),new an(t)}function zS(i){let t=document.createElement("canvas");t.width=128,t.height=128/2;let n=t.getContext("2d"),s=i*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*r()),l=128/2*(.45+.25*r()),c=128*(.12+.14*r()),h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(.6,"rgba(255,255,255,0.45)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,128,128/2)}return new an(t)}var Uc=class{group=new ft;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(aa*3);snow;snowPhase=new Float32Array(zr);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(e){this.scene=e,this.group.name="live-weather",this.group.renderOrder=5;let t=new Ge;t.setAttribute("position",new Ue(new Float32Array(aa*6),3)),this.rain=new gn(t,new Bt({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=Oc([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),s=new Ge;s.setAttribute("position",new Ue(new Float32Array(zr*3),3)),this.snow=new Tn(s,new xn({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<zr;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let r=new Ge;r.setAttribute("position",new Ue(new Float32Array(600*3),3)),this.hail=new Tn(r,new xn({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=Oc([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<ef;c++){let h=new bs(new Hi({map:zS(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),u=new Fe(new Pn(1,1),new Ye({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:li}));u.rotation.x=-Math.PI/2,u.renderOrder=-1,this.clouds.push({sprite:h,shadow:u,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(h,u)}let a=new Ge;a.setAttribute("position",new Ue(new Float32Array(144),3)),this.bolt=new gn(a,new Bt({color:14674175,transparent:!0,opacity:1,blending:pt,depthWrite:!1})),this.bolt.visible=!1;let l=Oc([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new bs(new Hi({map:l,transparent:!0,depthWrite:!1,blending:pt,fog:!1})),this.halo=new bs(new Hi({map:Oc([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:pt,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,e.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(e){this.bounds=e,this.seed()}set(e){let t=this.view;this.view=e,this.group.visible=!!e;let n=e?.weather??null;if(e&&n&&n.fog>.02&&!e.low){let s=new j(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255);this.scene.fog=new ms(s,.008+.04*n.fog)}else this.scene.fog instanceof ms&&(this.scene.fog=null);(!t||t.low!==e?.low||!!t.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let e=this.view?.weather;if(!e)return[0,0];let n=((e.windFrom??270)+(this.view?.north??0)+180)*Qh,s=.4+7*e.wind;return[Math.sin(n)*s,-Math.cos(n)*s]}count(e,t){let n=this.view?.low??!1;return Math.round(Math.min(1,e)*t*(n?.3:1))}seed(){let e=this.bounds,t=this.view?.weather,n=()=>e.x0+Math.random()*(e.x1-e.x0),s=()=>e.z0+Math.random()*(e.z1-e.z0),r=()=>e.y0+Math.random()*(e.y1-e.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<aa;c++){let h=n(),u=r(),f=s();o.setXYZ(c*2,h,u,f),o.setXYZ(c*2+1,h,u-.4,f),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<zr;c++)a.setXYZ(c,n(),r(),s());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),r(),s());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(t?.rain??0,aa)*2),this.snow.geometry.setDrawRange(0,this.count(t?.snow??0,zr)),this.hail.geometry.setDrawRange(0,this.count(t?.hail??0,600)),this.rain.visible=!!t&&t.rain>.01,this.snow.visible=!!t&&t.snow>.01,this.hail.visible=!!t&&t.hail>.01,this.clouds.forEach((c,h)=>{c.angle=h/ef*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=e.x0+Math.random()*(e.x1-e.x0),c.sz=e.z0+Math.random()*(e.z1-e.z0)}),this.placeClouds(0)}placeClouds(e){let t=this.view,n=t?.weather,s=n?.cloud??0,r=this.bounds,o=(r.x0+r.x1)/2,a=(r.z0+r.z1)/2,l=Math.max(r.x1-r.x0,r.z1-r.z0),[c,h]=this.windVector(),u=Math.round(s*ef),f=t?.sky??[20,28,44],d=(f[0]+f[1]+f[2])/765,m=n?.rain||n?.lightning?.3:0,x=Math.max(.12,Math.min(1,.28+d*.9-m-.25*Math.max(0,s-.6))),g=Math.hypot(c,h)/Math.max(20,l*4)*e*Math.sign(c||1);this.clouds.forEach((p,_)=>{let M=_<u;p.angle+=g*p.speed;let b=l*p.ring,v=p.sprite.material;v.color.setRGB(x,x*1.02,Math.min(1,x*1.12)),v.opacity=M?.3+.45*s:0,p.sprite.visible=M,p.sprite.position.set(o+Math.cos(p.angle)*b,r.y0+l*p.lift,a+Math.sin(p.angle)*b),p.sprite.scale.set(l*p.scale*1.6,l*p.scale*.6,1),p.sx+=c*.45*p.speed*e,p.sz+=h*.45*p.speed*e;let S=l*.4;p.sx>r.x1+S&&(p.sx=r.x0-S),p.sx<r.x0-S&&(p.sx=r.x1+S),p.sz>r.z1+S&&(p.sz=r.z0-S),p.sz<r.z0-S&&(p.sz=r.z1+S);let E=p.shadow.material;E.opacity=M?.12+.2*s:0,p.shadow.visible=M,p.shadow.position.set(p.sx,r.y0+.03,p.sz),p.shadow.scale.set(l*p.scale*.55,l*p.scale*.35,1)})}placeDisc(){let e=this.view,t=e?.sun,n=e?.weather?.cloud??0,s=!t||t.elevation<-3;if(!e||!t||!e.disc||n>.9||!s&&t.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let r=this.bounds,o=new k((r.x0+r.x1)/2,r.y0,(r.z0+r.z1)/2),a=Math.max(70,Math.max(r.x1-r.x0,r.z1-r.z0)*3.5),l=((s?t.azimuth+180:t.azimuth)+e.north)*Qh,c=Math.max(8,Math.abs(t.elevation))*Qh,h=new k(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),u=o.addScaledVector(h,a),f=a*(s?.07:.1);this.disc.position.copy(u),this.halo.position.copy(u),this.disc.scale.setScalar(f),this.halo.scale.setScalar(f*3.2);let d=this.disc.material,m=this.halo.material,x=s?0:Math.max(0,1-t.elevation/20);d.color.set(s?14016242:new j(1,.9-.25*x,.6-.35*x)),m.color.copy(d.color),d.opacity=(s?.7:.95)*(1-n),m.opacity=(s?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(e){let t=this.bounds,s=(Math.random()<.5?-1:1)<0?t.x0-2-Math.random()*6:t.x1+2+Math.random()*6,r=t.z0+Math.random()*(t.z1-t.z0),o=t.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let h=0;h<l;h++){let u=o-(h+1)/l*(o-t.y0),f=s+(Math.random()-.5)*1.6,d=r+(Math.random()-.5)*1.6;a.setXYZ(h*2,s,c,r),a.setXYZ(h*2+1,f,u,d),s=f,r=d,c=u}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=e+90+Math.random()*120,this.onFlash?.(!0)}step(e){let t=this.view,n=t?.weather;if(!t||!n)return this.last=0,!1;let s=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e;let r=this.bounds,o=r.y1-r.y0,[a,l]=this.windVector();if(this.rain.visible&&s){let c=this.rain.geometry.getAttribute("position"),h=c.array,u=this.count(n.rain,aa);for(let f=0;f<u;f++){let d=f*6,m=this.rainVel[f*3+1],x=h[d]+a*s,g=h[d+1]-m*s,p=h[d+2]+l*s;g<r.y0&&(g+=o,x=r.x0+Math.random()*(r.x1-r.x0)-a*.4,p=r.z0+Math.random()*(r.z1-r.z0)-l*.4);let _=.05;h[d]=x,h[d+1]=g,h[d+2]=p,h[d+3]=x-a*_,h[d+4]=g+m*_,h[d+5]=p-l*_}c.needsUpdate=!0}if(this.snow.visible&&s){let c=this.snow.geometry.getAttribute("position"),h=c.array,u=this.count(n.snow,zr),f=e/1e3;for(let d=0;d<u;d++){let m=d*3,x=this.snowPhase[d],g=h[m]+(a*.35+Math.sin(f*1.3+x)*.35)*s,p=h[m+1]-(.7+.5*(x*7%1))*s,_=h[m+2]+(l*.35+Math.cos(f*1.1+x)*.35)*s;p<r.y0&&(p+=o,g=r.x0+Math.random()*(r.x1-r.x0),_=r.z0+Math.random()*(r.z1-r.z0)),h[m]=g,h[m+1]=p,h[m+2]=_}c.needsUpdate=!0}if(this.hail.visible&&s){let c=this.hail.geometry.getAttribute("position"),h=c.array,u=this.count(n.hail,600);for(let f=0;f<u;f++){let d=f*3,m=h[d+1]-14*s;m<r.y0&&(m+=o),h[d]+=a*.5*s,h[d+1]=m,h[d+2]+=l*.5*s}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(s),n.lightning&&!t.low?(this.nextBolt||(this.nextBolt=e+2500+Math.random()*6e3),e>=this.nextBolt&&(this.strike(e),this.nextBolt=e+3500+Math.random()*9e3),this.bolt.visible&&e>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof ms&&(this.scene.fog=null)}};var Bc=46,zs=900;function kS(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new an(i)}var zc=class{group=new ft;scene;lift;tex=kS();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(zs*3);sparkField=new Int16Array(zs);sparkPhase=new Float32Array(zs);sparkCount=0;last=0;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-energy";let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(zs*3),3)),n.setAttribute("color",new Ue(new Float32Array(zs*3),3)),this.sparks=new Tn(n,new xn({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:pt})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),e.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(e){let t=new Set(e.map(n=>n.key));for(let[n,s]of this.arcs)t.has(n)||(this.group.remove(s.line,s.points),s.line.geometry.dispose(),s.line.material.dispose(),s.points.geometry.dispose(),s.points.material.dispose(),this.arcs.delete(n));for(let n of e){let s=this.arcs.get(n.key);if(!s){let o=new Ge;o.setAttribute("position",new Ue(new Float32Array(99),3));let a=new wn(o,new Bt({transparent:!0,opacity:.4,depthWrite:!1,blending:pt})),l=new Ge;l.setAttribute("position",new Ue(new Float32Array(Bc*3),3));let c=new Tn(l,new xn({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:pt}));a.frustumCulled=c.frustumCulled=!1;let h=new Float32Array(Bc);for(let u=0;u<Bc;u++)h[u]=Math.random();s={arc:n,line:a,points:c,phase:h,count:0,speed:0,a:new k,b:new k,c:new k},this.arcs.set(n.key,s),this.group.add(a,c)}s.arc=n;let r=new j(n.color[0]/255,n.color[1]/255,n.color[2]/255);s.line.material.color.copy(r),s.points.material.color.copy(r),s.count=Math.max(3,Math.min(Bc,Math.round(3+Math.sqrt(n.power)/2.2))),s.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),s.points.geometry.setDrawRange(0,s.count)}this.place()}setSparks(e){this.sparkFields=e;let t=e.reduce((s,r)=>s+r.quads.length*r.level,0),n=0;t>0&&e.forEach((s,r)=>{if(s.level<=0)return;let o=Math.round(zs*s.quads.length*s.level/Math.max(t,e.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<zs;a++,n++){let l=s.quads[Math.floor(Math.random()*s.quads.length)],c=Math.random(),h=Math.random();for(let u=0;u<3;u++){let f=l[0][u]+(l[1][u]-l[0][u])*c,d=l[3][u]+(l[2][u]-l[3][u])*c;this.sparkBase[n*3+u]=f+(d-f)*h+(u===1?.12:0)}this.sparkField[n]=r,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(e,t){let n=this.lift(e.floorId);return t.set(e.x,n.y+e.y,e.z),n.visible}place(){for(let e of this.arcs.values()){let t=this.world(e.arc.from,e.a),n=this.world(e.arc.to,e.b),s=e.a.distanceTo(e.b);e.c.copy(e.a).add(e.b).multiplyScalar(.5),e.c.y=Math.max(e.a.y,e.b.y)+.6+s*.22;let r=t&&n;e.line.visible=e.points.visible=r;let o=e.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(e,l))}o.needsUpdate=!0}}bezier(e,t){let n=1-t;return[n*n*e.a.x+2*n*t*e.c.x+t*t*e.b.x,n*n*e.a.y+2*n*t*e.c.y+t*t*e.b.y,n*n*e.a.z+2*n*t*e.c.z+t*t*e.b.z]}step(e){if(!this.active||!this.group.visible)return this.last=0,!1;let t=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let s=n.points.geometry.getAttribute("position");for(let r=0;r<n.count;r++)n.phase[r]=(n.phase[r]+n.speed*t)%1,s.setXYZ(r,...this.bezier(n,n.phase[r]));s.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),s=this.sparks.geometry.getAttribute("color"),r=e/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(r*2.4+this.sparkPhase[o]*3))**6,h=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;s.setXYZ(o,h,h*.86,h*.35)}n.needsUpdate=!0,s.needsUpdate=!0}return!0}setVisible(e){this.group.visible=e}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var V0=3,kc=class{group=new ft;scene;lift;ringGeo=new vs(.92,1,48);spots=new Map;links=[];constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-sound",e.add(this.group)}get active(){return this.spots.size>0}set(e,t){let n=new Set(e.map(s=>s.id));for(let[s,r]of this.spots)if(!n.has(s)){for(let o of r.rings)this.group.remove(o),o.material.dispose();this.spots.delete(s)}for(let s of e){let r=this.spots.get(s.id);if(!r){let a=Array.from({length:V0},()=>{let l=new Fe(this.ringGeo,new Ye({transparent:!0,opacity:0,depthWrite:!1,blending:pt,side:Mt}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});r={spot:s,rings:a},this.spots.set(s.id,r)}r.spot=s;let o=new j(s.color[0]/255,s.color[1]/255,s.color[2]/255);for(let a of r.rings)a.material.color.copy(o)}for(let s of this.links)this.group.remove(s.line),s.line.geometry.dispose(),s.line.material.dispose();this.links=t.map(([s,r])=>{let o=new Ge;o.setAttribute("position",new Ue(new Float32Array(51),3));let a=new wn(o,new Bt({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:pt}));return a.frustumCulled=!1,this.group.add(a),{a:s,b:r,line:a}})}step(e){if(!this.spots.size&&!this.links.length)return!1;let t=e/1e3;for(let n of this.spots.values()){let s=this.lift(n.spot.at.floorId),r=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(t*.55+a/V0)%1;o.visible=s.visible,o.position.set(n.spot.at.x,s.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*r),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let s=this.lift(n.a.floorId),r=this.lift(n.b.floorId);n.line.visible=s.visible&&r.visible;let o=n.line.geometry.getAttribute("position"),a=s.y+n.a.y,l=r.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let h=0;h<=16;h++){let u=h/16,f=Math.sin(Math.PI*u)*(.3+c*.12)+Math.sin(t*3+u*12)*.03;o.setXYZ(h,n.a.x+(n.b.x-n.a.x)*u,a+(l-a)*u+f,n.a.z+(n.b.z-n.a.z)*u)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var VS=Math.PI/180;function GS(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new an(i)}var Vc=class{group=new ft;scene;lift;glowTex=GS();views=new Map;onChange=null;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-screens",e.add(this.group)}get active(){return[...this.views.values()].some(e=>e.s.playing)}set(e){let t=new Set(e.map(n=>n.id));for(let[n,s]of this.views)t.has(n)||this.drop(n,s);for(let n of e){let s=this.views.get(n.id);if(!s){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new an(o);a.colorSpace=vt;let l=new Fe(new Pn(1,1),new Ye({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Fe(new Pn(1,1),new Ye({map:this.glowTex,transparent:!0,depthWrite:!1,blending:pt,side:Mt}));c.renderOrder=2,this.group.add(l,c),s={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,s)}s.s=n;let r=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(r!==s.sig){let o=s.sig.split("|")[3]!==(n.picture??"");s.sig=r,o&&this.loadPicture(s),this.draw(s)}this.place(s)}}loadPicture(e){e.image=null;let t=e.s.picture;if(!t)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{e.s.picture!==t||!this.views.has(e.s.id)||(e.image=n,this.draw(e),this.onChange?.())},n.src=t}draw(e){let t=e.s,n=e.canvas.getContext("2d"),s=e.canvas.width,r=e.canvas.height,[o,a,l]=t.color,c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,s,r);let h=22,u=h;if(e.image){let f=r-h*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let d=e.image.naturalWidth||1,m=e.image.naturalHeight||1,x=Math.max(f/d,f/m),g=f/x,p=f/x;n.drawImage(e.image,(d-g)/2,(m-p)/2,g,p,h,h,f,f),n.restore(),u=h*2+f}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,t.title||t.app||"",u,r/2-18,s-u-h),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,t.subtitle,u,r/2+22,s-u-h),t.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(t.playing?"\u25B6 ":"\u275A\u275A ")+t.app,u,r-h-14,s-u-h)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,r-6,s*(t.playing?1:.4),6),e.texture.needsUpdate=!0}text(e,t,n,s,r){let o=t;for(;o.length>1&&e.measureText(o).width>r;)o=o.slice(0,-2);e.fillText(o===t?o:`${o}\u2026`,n,s)}place(e){let t=e.s,n=t.rect,s=t.rotation*VS,r=this.lift(t.floorId),o=(n.x0+n.x1)/2,a=(m,x)=>[t.x+m*Math.cos(s)-x*Math.sin(s),t.z+m*Math.sin(s)+x*Math.cos(s)],l=n.x1-n.x0,c=n.y1-n.y0,[h,u]=a(o,n.z+.012);e.screen.position.set(h,r.y+(n.y0+n.y1)/2,u),e.screen.rotation.set(0,-s,0),e.screen.scale.set(l,c,1);let[f,d]=a(o,n.z-.18);e.glow.position.set(f,r.y+(n.y0+n.y1)/2,d),e.glow.rotation.set(0,-s,0),e.glow.scale.set(l*2.4,c*2.6,1),e.glow.material.color=new j(t.color[0]/255,t.color[1]/255,t.color[2]/255),e.screen.visible=e.glow.visible=r.visible}step(e){let t=!1;for(let n of this.views.values()){this.place(n);let s=n.glow.material;s.opacity=n.s.playing?.55+.25*Math.sin(e/900+n.s.x):.25,t||=n.s.playing}return t}drop(e,t){this.group.remove(t.screen,t.glow),t.screen.geometry.dispose(),t.screen.material.dispose(),t.texture.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose(),this.views.delete(e)}dispose(){for(let[e,t]of this.views)this.drop(e,t);this.glowTex.dispose(),this.scene.remove(this.group)}};var G0=new j(.25,.55,1),tf=new j(1,.3,.75),Gc=10,Hc=class{group=new ft;scene;lift;points=[];line;comet;rings=[];ringGeo=new vs(.18,.26,32);constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-trail";let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(3),3)),n.setAttribute("color",new Ue(new Float32Array(3),3)),this.line=new wn(n,new Bt({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:pt})),this.line.frustumCulled=!1,this.comet=new Fe(new xo(.12,12,8),new Ye({color:tf,transparent:!0,depthWrite:!1,blending:pt})),this.group.add(this.line,this.comet),this.group.visible=!1,e.add(this.group)}set(e){this.points=e;for(let s of this.rings)this.group.remove(s),s.material.dispose();this.rings=e.map(s=>{let r=new Fe(this.ringGeo,new Ye({color:G0.clone().lerp(tf,s.age),transparent:!0,opacity:.4+.6*s.age,depthWrite:!1,blending:pt,side:Mt}));return r.rotation.x=-Math.PI/2,this.group.add(r),r});let t=Math.max(1,(e.length-1)*Gc+1);this.line.geometry.dispose();let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(t*3),3)),n.setAttribute("color",new Ue(new Float32Array(t*3),3)),this.line.geometry=n,this.group.visible=e.length>0}at(e,t){let n=this.points[e].at,s=this.points[Math.min(this.points.length-1,e+1)].at,r=this.lift(n.floorId),o=this.lift(s.floorId),a=r.y+n.y,l=o.y+s.y,c=Math.sin(Math.PI*t)*(.25+Math.hypot(n.x-s.x,n.z-s.z)*.08);return[n.x+(s.x-n.x)*t,a+(l-a)*t+c,n.z+(s.z-n.z)*t]}step(e){let t=this.points.length;if(!t)return!1;let n=this.line.geometry.getAttribute("position"),s=this.line.geometry.getAttribute("color"),r=0,o=new j;for(let a=0;a<Math.max(1,t-1);a++)for(let l=0;l<=Gc;l++){if(l===Gc&&a<t-2)continue;if(t===1&&l>0)break;let c=l/Gc;n.setXYZ(r,...this.at(a,t===1?0:c));let h=t===1?1:this.points[a].age+(this.points[Math.min(t-1,a+1)].age-this.points[a].age)*c;o.copy(G0).lerp(tf,h).multiplyScalar(.3+.7*h),s.setXYZ(r,o.r,o.g,o.b),r++}if(this.line.geometry.setDrawRange(0,r),n.needsUpdate=s.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===t-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(e/250))}),t>1){let a=e/1e3%(1.2*(t-1)+1)/1.2,l=Math.min(t-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var Wc=class extends Si{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new qi;e.deleteAttribute("uv");let t=new ii({side:Qt}),n=new ii,s=new Ss(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new _s(e,n,6),a=new Tt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Fe(e,kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Fe(e,kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Fe(e,kr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Fe(e,kr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Fe(e,kr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Fe(e,kr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function kr(i){return new bo({color:0,emissive:16777215,emissiveIntensity:i})}function nf(i,e){if(e===th)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ar||e===Oo){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ar)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function H0(i,e=Math.PI/3){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(s*3);for(let b=0;b<s;b++)r[3*b+0]=n.getX(b),r[3*b+1]=n.getY(b),r[3*b+2]=n.getZ(b)}let o=Math.cos(e),a=(1+1e-10)*100,l=s/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let v=9*b,S=r[v+0],E=r[v+1],y=r[v+2],w=r[v+3],R=r[v+4],T=r[v+5],L=r[v+6],I=r[v+7],C=r[v+8],F=L-w,N=I-R,U=C-T,V=S-w,z=E-R,B=y-T,H=N*B-U*z,ee=U*V-F*B,Q=F*z-N*V,ce=1/(Math.sqrt(H*H+ee*ee+Q*Q)||1);c[3*b+0]=H*ce,c[3*b+1]=ee*ce,c[3*b+2]=Q*ce}let h=new Int32Array(s),u=new Float64Array(s*3),f=1;for(;f<s*2;)f<<=1;let d=f-1,m=new Int32Array(f),x=0;for(let b=0;b<s;b++){let v=3*b,S=Math.trunc(r[v+0]*a),E=Math.trunc(r[v+1]*a),y=Math.trunc(r[v+2]*a),w=(Math.imul(S,73856093)^Math.imul(E,19349663)^Math.imul(y,83492791))&d;for(;;){let R=m[w];if(R===0){let L=3*x;u[L+0]=S,u[L+1]=E,u[L+2]=y,m[w]=x+1,h[b]=x++;break}let T=3*(R-1);if(u[T+0]===S&&u[T+1]===E&&u[T+2]===y){h[b]=R-1;break}w=w+1&d}}let g=new Int32Array(x+1);for(let b=0;b<s;b++)g[h[b]+1]++;for(let b=0;b<x;b++)g[b+1]+=g[b];let p=new Int32Array(s),_=g.slice(0,x);for(let b=0;b<l;b++){let v=3*b;p[_[h[v+0]]++]=b,p[_[h[v+1]]++]=b,p[_[h[v+2]]++]=b}let M=new Float32Array(s*3);for(let b=0;b<l;b++){let v=3*b,S=c[v+0],E=c[v+1],y=c[v+2];for(let w=0;w<3;w++){let R=v+w,T=h[R],L=0,I=0,C=0;for(let N=g[T],U=g[T+1];N<U;N++){let V=3*p[N],z=c[V+0],B=c[V+1],H=c[V+2];S*z+E*B+y*H>o&&(L+=z,I+=B,C+=H)}let F=1/(Math.sqrt(L*L+I*I+C*C)||1);M[3*R+0]=L*F,M[3*R+1]=I*F,M[3*R+2]=C*F}}return t.setAttribute("normal",new Wt(M,3,!1)),t}function W0(i){let e=new Map,t=new Map,n=i.clone();return X0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function X0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)X0(i.children[n],e.children[n],t)}var Xc=class extends ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new qc(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new qc(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ci.extractUrlBase(e);o=Ci.resolveURL(c,this.path)}else o=Ci.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new yr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Z0){try{o[Qe.KHR_BINARY_GLTF]=new wf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Pf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new lf;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Tf(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new Af;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new Ef;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function HS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},af=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new j(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],dn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ws(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ss(h),c.distance=u;break;case"spot":c=new wo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},lf=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ye}extendParams(e,t,n){let s=[];e.color=new j(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(s)}},cf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},uf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(s)}},hf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ff=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},df=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new j(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},pf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},mf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new j().setRGB(r[0],r[1],r[2],dn),Promise.all(s)}},gf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new j().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(s)}},bf=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},_f=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?bn:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},yf=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},vf=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Mf=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},qc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Sf=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let x=new Xe,g=new k,p=new Sn,_=new k(1,1,1),M=new _s(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,x.compose(g,p,_));let b=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];M.instanceColor=new wi(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let E=M.geometry;b=new Ge,b.name=E.name;for(let y in E.attributes)b.setAttribute(y,E.attributes[y]);for(let y in E.morphAttributes)b.morphAttributes[y]=E.morphAttributes[y];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(let y of E.groups)b.addGroup(y.start,y.count,y.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),M.geometry=b}let S=l[v];b.setAttribute(v,new wi(S.array,S.itemSize,S.normalized))}Tt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Z0="glTF",la=12,q0={JSON:1313821514,BIN:5130562},wf=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,la),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-la,r=new DataView(e,la),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===q0.JSON){let c=new Uint8Array(e,la+o,a);this.content=n.decode(c)}else if(l===q0.BIN){let c=la+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Tf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Cf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Cf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Vr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},a,c,dn,f)})})}},Af=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ef=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Yc=class extends si{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,_=1-g,M=p-f+u;for(let b=0;b!==a;b++){let v=o[x+b+a],S=o[x+b+l]*h,E=o[m+b+a],y=o[m+b]*h;r[b]=_*v+M*S+g*E+p*y}return r}},WS=new Sn,Rf=class extends Yc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return WS.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Y0={9728:Nt,9729:Ot,9984:_l,9985:Sr,9986:Es,9987:qn},$0={33071:fn,33648:cr,10497:Wn},sf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XS={CUBICSPLINE:void 0,LINEAR:ds,STEP:fs},rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ii({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),i.DefaultMaterial}function ks(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function $S(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KS(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+of(t.attributes):e=i.indices+":"+of(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+of(i.targets[n]);return e}function of(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function If(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var JS=new Xe,Pf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new vo(this.options.manager):this.textureLoader=new To(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ks(r,a,s),pi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ci.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=sf[s.type],a=Vr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Wt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=sf[s.type],c=Vr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(_);M||(x=new c(a,p*d,s.count*d/h),M=new xs(x,d/h),t.cache.add(_,M)),g=new Gi(M,l,f%d/h,m)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),g=new Wt(x,l,m);if(s.sparse!==void 0){let p=sf.SCALAR,_=Vr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new _(o[1],M,s.sparse.count*p),S=new c(o[2],b,s.sparse.count*l);a!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,y=v.length;E<y;E++){let w=v[E];if(g.setX(w,S[E*l]),l>=2&&g.setY(w,S[E*l+1]),l>=3&&g.setZ(w,S[E*l+2]),l>=4&&g.setW(w,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Y0[f.magFilter]||Ot,h.minFilter=Y0[f.minFilter]||qn,h.wrapS=$0[f.wrapS]||Wn,h.wrapT=$0[f.wrapT]||Wn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ot,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Xt(x);g.needsUpdate=!0,f(g)}),t.load(Ci.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),pi(u,o),u.userData.mimeType=o.mimeType||ZS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new xn,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bt,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ii}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=s[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new j(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mt);let h=r.alphaMode||rf.OPAQUE;if(h===rf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ye){let u=r.emissiveFactor;a.emissive=new j().setRGB(u[0],u[1],u[2],dn)}return r.emissiveTexture!==void 0&&o!==Ye&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ks(s,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return K0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=KS(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=K0(new Ge,c,t),c.mode===Nn.TRIANGLE_STRIP?f=f.then(d=>nf(d,Oo)):c.mode===Nn.TRIANGLE_FAN&&(f=f.then(d=>nf(d,Ar))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?qS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=o[d],p,_=c[d];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&b?new ao(x,_):new Fe(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Nn.LINES)p=new gn(x,_);else if(g.mode===Nn.LINE_STRIP)p=new wn(x,_);else if(g.mode===Nn.LINE_LOOP)p=new co(x,_);else if(g.mode===Nn.POINTS)p=new Tn(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&$S(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),pi(p,r),g.extensions&&ks(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&ks(s,u[0],r),u[0];let f=new ft;r.extensions&&ks(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(oh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ln(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],m=s.samplers[d.sampler],x=d.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,_=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let M=0,b=f.length;M<b;M++){let v=f[M],S=d[M],E=m[M],y=x[M],w=g[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,S,E,y,w);if(R)for(let T=0;T<R.length;T++)p.push(R[T])}let _=new yo(r,void 0,p);return pi(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,JS)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new k().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new gr:c.length>1?h=new ft:c.length===1?h=c[0]:h=new Tt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),pi(h,r),r.extensions&&ks(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),pi(r,n),n.extensions&&ks(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(W0(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof on||f instanceof Xt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}rs[r.path]===rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(rs[r.path]){case rs.weights:h=Ai;break;case rs.rotation:h=Ei;break;case rs.translation:case rs.scale:h=Yi;break;default:n.itemSize===1?h=Ai:h=Yi;break}let u=s.interpolation!==void 0?XS[s.interpolation]:ds,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let x=new h(l[d]+"."+rs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=If(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ei?Rf:Yc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function jS(i,e,t){let n=e.attributes,s=new Ut;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){let h=If(Vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new k,l=new k;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=If(Vr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function K0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Cf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),pi(i,e),jS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?YS(i,e.targets,t):i})}var J0=new Map,j0=new Map,QS=50*Math.PI/180;function ew(i){i.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.geometry,s=t.material,r=s.name??"";t.userData.paint=!!s.userData?.paint||/^Paint/.test(r),n.getAttribute("normal")||(t.userData.paint?n.computeVertexNormals():t.geometry=H0(n,QS)),s.flatShading=!1;let o=/glass/i.test(r);s.metalness=t.userData.paint?.55:o?0:Math.min(s.metalness??0,.4),s.roughness=t.userData.paint?.28:o?.05:Math.max(s.roughness??.6,.45),o&&(s.transparent=!0,s.depthWrite=!1,s.opacity=Math.max(s.opacity,.9))})}function Q0(i){let e=J0.get(i);if(!e){let t=dm();if(!t)return Promise.resolve(!1);e=t(i).then(n=>n&&new Promise(s=>{new Xc().parse(n,"",r=>{ew(r.scene);let o=new Ut().setFromObject(r.scene),a=[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z];r.scene.position.set(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2);let l=new ft;l.add(r.scene),j0.set(i,{root:l,size:a}),pm(i),s({root:l,size:a})},()=>s(null))})).catch(()=>null),J0.set(i,e)}return e.then(t=>!!t)}function eg(i,e){let t=j0.get(i);if(!t)return null;let n=t.root.clone(!0),s=[];n.traverse(o=>{let a=o;if(!a.isMesh)return;let l=a.material.clone();a.userData.paint&&e.paint&&(l.color=new j(e.paint)),a.material=l,s.push(l)});let r=new ft;return r.add(n),r.scale.set((e.mirror?-1:1)*(e.w/t.size[0]),e.h/t.size[1],e.d/t.size[2]),r.position.set(e.x,e.y,e.z),r.rotation.y=-e.rotation*Math.PI/180,r.userData.own=s,r}function Lf(i){for(let e of i.userData.own??[])e.dispose()}function tg(i,e){let t=new Ir(e),n=t.fromScene(new Wc,.04).texture;t.dispose();let s=new Mo(16777215,9081766,.9),r=new ws(16777215,1.6);return r.position.set(-4,9,6),i.add(s,r),{env:n,dispose:()=>{n.dispose(),s.removeFromParent(),r.removeFromParent()}}}function ng(i,e){for(let t of i.userData.own??[])t.envMap=e,t.envMapIntensity=.9}var tw=.3,ig=2.6;function sg(i,e=.32,t=.22,n=[]){let s=i.map(v=>v[0]),r=i.map(v=>v[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),h=c-l>=a-o,u=t*.7071,f=v=>{let S=[v,[v[0]+t,v[1]],[v[0]-t,v[1]],[v[0],v[1]+t],[v[0],v[1]-t]],E=[...S,[v[0]+u,v[1]+u],[v[0]-u,v[1]+u],[v[0]+u,v[1]-u],[v[0]-u,v[1]-u]];return S.every(y=>_t(y,i))&&!n.some(y=>E.some(w=>_t(w,y)))},d=(v,S)=>f(h?[v,S]:[S,v]),m=(v,S)=>{let E=Math.ceil(Math.hypot(S[0]-v[0],S[1]-v[1])/.05);for(let y=1;y<E;y++)if(!f([v[0]+(S[0]-v[0])*y/E,v[1]+(S[1]-v[1])*y/E]))return!1;return!0},[x,g,p,_]=h?[o,a,l,c]:[l,c,o,a],M=[],b=!0;for(let v=x+t;v<=g-t+1e-6;v+=e){let S=null,E=null,y=.05;for(let L=p;L<=_+1e-6;L+=y)if(d(v,L)&&(E??=L),(!d(v,L)||L+y>_+1e-6)&&E!==null){let I=d(v,L)?L:L-y;(!S||I-E>S[1]-S[0])&&(S=[E,I]),E=null}if(!S||S[1]-S[0]<.2)continue;let w=L=>{let[I,C]=L?S:[S[1],S[0]];return[h?[v,I]:[I,v],h?[v,C]:[C,v]]},R=w(b),T=M[M.length-1];if(T&&n.length&&!m(T,R[0])){let L=w(!b);if(!m(T,L[0]))continue;R=L,b=!b}M.push(R[0],R[1]),b=!b}return M}function Df(i,e=.7,t=12){return Array.from({length:t},(n,s)=>{let r=s/t*Math.PI*2;return[i[0]+Math.cos(r)*e,i[1]+Math.sin(r)*e]})}var Ff=i=>Math.atan2(Math.sin(i),Math.cos(i));function rg(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Ff(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),ig*t),!0)}let a=Math.atan2(s,r),l=Ff(a-i.heading);if(i.heading=Ff(i.heading+Math.sign(l)*Math.min(Math.abs(l),ig*t)),Math.abs(l)<.35){let c=Math.min(o,tw*t);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var Gr=null,og=new Map;function nw(i,e=180,t,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,r=og.get(s);if(r)return r;t&&hc(t),Gr??=new Pr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Gr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Gr.setSize(e,e,!1),Gr.setClearColor(0,0);let o=new mt,a=new cn,l=$t(i.type);if(l?.light)vc(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Nf(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let _={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};yc(o,a,new mt,_)}let c=new Si,h=new Fe(o.geometry(),new Ye({vertexColors:!0,color:new j(n,n,n)})),u=new gn(a.geometry(),new Bt({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));c.add(h,u);let f=new Ut().setFromObject(h),d=f.getCenter(new k),m=new Ln(-1,1,1,-1,.01,100);m.position.copy(d).add(new k(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let _ of[f.min.x,f.max.x])for(let M of[f.min.y,f.max.y])for(let b of[f.min.z,f.max.z]){let v=new k(_,M,b).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(v.x),Math.abs(v.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),Gr.render(c,m);let p=Gr.domElement.toDataURL("image/png");return h.geometry.dispose(),h.material.dispose(),u.geometry.dispose(),u.material.dispose(),og.set(s,p),p}var lg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},iw=2.4,sw=1.4,rw=.22,cg=140,Uf=32,ow=500,ug=160,it=2767456,aw=1911110,lw=1,hg=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Of=450,fg=125,cw=.08,Bf={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},uw=new j(1714765);function hw(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var zf=class{host;options;renderer;scene=new Si;camera=new Ht(38,1,.1,400);controls;labels;root=new ft;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;meshes=[];meshLight=null;meshAsked=new Set;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",e.append(this.labels),this.patternTexture=fw(),this.blindTexture=pw(),this.haloTexture=gw(),this.ground=new Fe(new Pn(1,1),new Ye({transparent:!0,blending:pt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new Uc(this.scene),this.energyLayer=new zc(this.scene,this.liftOf),this.soundLayer=new kc(this.scene,this.liftOf),this.screenLayer=new Vc(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new Hc(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,s])=>`${n}=${s}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setMeshSource(e){fm(e)}setPacks(e){hc(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(h=>h.floor.rooms.some(u=>u.id===e)),n=t?.floor.rooms.find(h=>h.id===e);if(!t||!n)return;let s=n.start_view;if(s){let h=t.floor.elevation+t.ty,[u,f]=mc(n.points),d=s.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new k(d.x,d.y+h,d.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=mc(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new k(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new k(r,t.floor.elevation+t.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".nf-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("nf-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--nf-glow",c):r.style.removeProperty("--nf-glow"))}for(let[n,s]of this.devicePins)t.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="nf-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)t.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=C0(e),n=t?1:0;n===Lc.value&&(!t||Pc.value.equals(new k(...t)))||(Lc.value=n,t&&Pc.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=R0(e);let t=Fc(e),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=t,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.invalidate()}liftOf=e=>{if(!e)return{y:0,dy:0,visible:!0};let t=this.floorMap.get(e);return t?{y:t.floor.elevation+t.y,dy:t.y,visible:t.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(e,t){this.energyLayer.setArcs(e),this.energyLayer.setSparks(t),this.invalidate()}setLiveSound(e,t){this.soundLayer.set(e,t),this.invalidate()}setLiveTrail(e){this.trailLayer.set(e),this.invalidate()}setLiveScreens(e){let t=[];for(let n of e){let s=this.building?.floors.find(a=>a.id===n.floorId),r=s?.furniture.find(a=>a.id===n.furnitureId),o=r&&s?Gh(r,s):null;!r||!o||t.push({...n,x:r.x,z:r.z,rotation:r.rotation,rect:o})}this.screenLayer.set(t),this.invalidate()}setLiveAnchors(e,t){this.liveAnchors=e,this.liveAnchorCb=t,this.invalidate()}placeLhAnchors(){let e=this.liveAnchorCb;if(!e||!this.liveAnchors.length)return;let t=new k;this.liveAnchors.forEach((n,s)=>{let r=this.liftOf(n.floorId);t.set(n.x,r.y+n.y,n.z).project(this.camera);let o=r.visible&&t.z<1&&Math.abs(t.x)<1.15&&Math.abs(t.y)<1.15;e(s,(t.x+1)/2*this.size.w,(1-t.y)/2*this.size.h,o)})}setSky(e){this.skyView=e,this.weatherLayer.set(e?{...e,low:e.low||this.lowQuality}:null);for(let t of this.floors)this.buildSun(t);this.invalidate()}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let s=document.createElement("small");s.textContent=n,e.append(s),e.classList.add("nf-pin-info")}else e.classList.remove("nf-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=e;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,e.get(s.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),s=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==s&&(n.textContent=s,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let s=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(t,s)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/ug),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*t,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(e){let t=new mt;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);t0(t,n,Fn(e.floor,n),s?.l??0,s?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:e.theta,phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.meshLight?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&hw();this.lowQuality=t,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||t}),this.highQuality=e==="high";let n=new Pr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=vt,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Cc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,s)=>this.swipeStart(e,t,n,s),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.meshes)e.group.removeFromParent(),Lf(e.group);this.meshes=[];for(let e of this.floors){e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="nf-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="nf-dev-icon";let s=document.createElement("span");s.className="nf-dev-text";let r=document.createElement("span");r.className="nf-dev-watt";let o=document.createElement("span");o.className="nf-dev-name",t.append(n,s,r,o);let a,l=!1;t.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=e;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},ow)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),t.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=P0(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),s=mw(e.floor,e.geo.openRooms);if(e.lightZones=s.some((a,l)=>a!==l)?s:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b])}e.lightSurface=n;let r=new Ge;r.setAttribute("position",new Ue(n.pos,3)),r.setAttribute("color",new Ue(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Ue(n.fold,1));let o=new gs(new Uint32Array(n.pos.length/3),1);o.setUsage(ih),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=r,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let s of this.devices){let r=this.glowOf(s);if(s.floorId!==e.floor.id||!r)continue;let o=D0(e.floor,s.x,s.z),a=N0(e.lightZones,o),[l,,c]=s.size??(s.lamp?Bf[s.lamp]:[.3,.3,.3]),h=s.base??0,u={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<lw?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=s.lamp?u[s.lamp]:[s.y,"omni"],m=s.lightY??f,x=r.color;if(s.lamp==="strip"){let g=(s.rotation??0)*Lt,p=!!s.upright||Math.abs(s.roll??0)>45;for(let _ of[-1/3,0,1/3])s.upright?n.push({x:s.x,y:h+l*(.5+_),z:s.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:s.x+Math.cos(g)*l*_,y:m,z:s.z+Math.sin(g)*l*_,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else n.push({x:s.x,y:m,z:s.z,color:x,level:r.level,kind:d,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),s=t.doors.map(u=>{let f=e.geo.openings.find(m=>m.opening.id===u.id);if(f&&Ps(f.opening,f.exterior)==="passage")return 1;let d=e.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+s.map(u=>u.toFixed(1)).join(",");if(r===e.glowSig)return;e.glowSig=r;let o=e.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=F0(t,n,.42,s);if(this.roomTint){let u=e.floor.rooms.length;for(let f=0;f<t.room.length;f++)if(t.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),e.glowMesh.visible=h>0}makeMaterials(e){return{floor:di(new Ye({vertexColors:!0}),this.themeUniform),pattern:dw(this.patternTexture),wall:di(is(new Ye({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:is(new Ye({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new Ye({vertexColors:!0,blending:Ro,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-1}),lines:di(is(new Bt({vertexColors:!0,transparent:!0,blending:Fc(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:is(new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:di(is(new Ye({vertexColors:!0,side:Mt}),e),this.themeUniform),glass:is(new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt}),e),blinds:di(is(new Ye({map:this.blindTexture,vertexColors:!0,side:Mt}),e),this.themeUniform),lamps:di(new Ye({vertexColors:!0}),this.themeUniform),halos:new xn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1}),cones:new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt}),screens:new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt})}}rebuild(){let e=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),t=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=qh(n)?.id===r.id?o.filter(B=>B.face===Xh).map(B=>({field:B,face:c0(n,B)})):[],l=o.filter(B=>B.face.startsWith(`wall:${r.id}:`));if(l.length){let B=new Map(l0(n,r.id).map(H=>[H.key,H]));for(let H of l){let ee=B.get(H.face);ee&&a.push({field:H,face:ee})}}let h=(n.settings.roof.sections??[]).some(B=>Im(B,r.elevation+r.height))?(B,H)=>{let ee=Pm(n,B,H);return ee===null?null:ee-r.elevation}:void 0,u=S0(Ic(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,w0(n.floors,r),a,h),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new ft,x=new Fe(u.floor,d.floor),g=new Fe(u.shadow,d.shadow);g.renderOrder=1;let p=new Fe(u.floor,d.pattern);p.renderOrder=2;let _=new Fe(new Ge,d.glow);_.renderOrder=3,_.visible=!1;let M=new Fe(new Ge,d.frames),b=new Fe(new Ge,d.blinds),v=new Fe(new Ge,d.glass);v.renderOrder=4;let S=new Fe(new Ge,d.lamps);S.visible=!1;let E=new Fe(new Ge,d.cones);E.visible=!1,E.renderOrder=3;let y=new Tn(new Ge,d.halos);y.visible=!1,y.renderOrder=7;let w=new Fe(new Ge,d.cones);w.visible=!1,w.renderOrder=7;let R=new Fe(new Ge,d.lamps);R.visible=!1;let T=new Fe(new Ge,d.screens);T.visible=!1,T.renderOrder=5;for(let B of[M,b,v])B.frustumCulled=!1;let L=new Fe(u.walls,d.glassWall),I=new Fe(u.walls,d.wall);L.renderOrder=6,m.add(x,g,p,_,I,new gn(u.lines,d.lines),M,b,v,S,E,y,w,R,T,L),this.root.add(m);let C=document.createElement("button");C.className="nf-pin nf-pin-floor",C.dataset.floor=r.id;let F=document.createElement("b");F.textContent=r.name||"\u2013";let N=document.createElement("span");N.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",C.append(F,N),C.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(C);let U=e.get(r.id),V=[],z=null;for(let B of r.rooms){let H=document.createElement("button");H.className="nf-pin",H.dataset.room=B.id,H.dataset.floor=r.id,this.fillRoomPin(H,B.name,this.roomInfo.get(B.id)),H.addEventListener("click",()=>this.options.onRoomTap?.(r.id,B.id)),this.labels.append(H);let[ee,Q]=mc(B.points);V.push({pin:H,room:B,cx:ee,cz:Q});for(let[ce,ue]of B.points)z??={x0:ce,x1:ce,z0:ue,z1:ue},z.x0=Math.min(z.x0,ce),z.x1=Math.max(z.x1,ce),z.z0=Math.min(z.z0,ue),z.z1=Math.max(z.z1,ue)}this.floors.push({floor:r,rank:s.indexOf(r),group:m,geo:u,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:v,blindsMesh:b,lampMesh:S,sunMesh:E,sunSig:"",haloMesh:y,coneMesh:w,fridgeMesh:R,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:I,screenMesh:T,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:z,roomPins:V,labelSize:null,materials:d,mask:f,openings:new Map,y:U?.y??0,o:U?.o??1,ty:0,to:1,appliedO:-1,label:C})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=t.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Nc);this.buildOpenings(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost(),this.placeMeshes()}placeMeshes(){for(let e of this.meshes)e.group.removeFromParent(),Lf(e.group);this.meshes=[];for(let e of this.floors)for(let t of Ic(e.floor,this.parked).furniture){let n=$t(t.type);if(!n?.mesh)continue;let s=n.mesh;if(!fc(t.type)){this.meshAsked.has(s)||(this.meshAsked.add(s),Q0(s).then(a=>{a&&!this.disposed&&this.rebuild()}));continue}let r=n.colors?.length?(n.colors.find(a=>a.id===t.variant)??n.colors[0]).hex:null,o=eg(s,{x:t.x,z:t.z,y:Fn(e.floor,t),rotation:t.rotation,mirror:t.mirror,w:t.w,d:t.d,h:t.h,paint:r});o&&(this.meshLight||(this.meshLight=tg(this.root,this.renderer)),ng(o,this.meshLight.env),e.group.add(o),this.meshes.push({group:o,furnitureId:t.id}))}this.invalidate()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?x0(this.building,this.roofWindows):[];if(!e.length)return;let t=new ft,n=di(new Ye({vertexColors:!0,transparent:!0,side:Mt}),this.themeUniform),s=di(new Bt({vertexColors:!0,transparent:!0,blending:Fc(this.theme),depthWrite:!1}),this.themeUniform,!0),r=di(new Ye({vertexColors:!0,transparent:!0,side:Mt,depthWrite:!1}),this.themeUniform),o=e.map(a=>{let l=new ft;return l.add(new Fe(a.solid.geometry(),n),new gn(a.lines.geometry(),s)),a.glass.count&&l.add(new Fe(a.glass.geometry(),r)),l.renderOrder=8,t.add(l),{group:l,floorId:a.floor.id,rideId:Um(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});t.renderOrder=8,this.scene.add(t),this.roof={group:t,parts:o,solid:n,lines:s,glass:r},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/cg),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+(1-this.roofO)*2.2+(l.lift?u*sw:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;t?n.rank>t.rank?(s=5+n.rank,r=0):n.rank<t.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:rw)):s=this.explode?n.rank*iw:0,n.ty=s,n.to=r,e&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let s of[t.floor,t.wall,t.frames,t.blinds,t.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o}stepFloors(e){let t=!1,n=1-Math.exp(-e/cg);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,t=!0,this.applyFloor(s)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/ug);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??Nc,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?h[f]=d:(h[f]=m+x*n,u=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,u=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed)&&(s.openings.set(o,h),r=!0),t||=u}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new j(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let s=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*cw+s)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=t)return 0;let f=u-t,d=f>Of?.5+.5*Math.sin(f/140):f/Of;return Math.round(d*10)/10},s=this.devices.filter(h=>h.floorId===e.floor.id&&(h.lamp||h.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),o=s.map(h=>this.glowOf(h)),a=s.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=r,e.lampColorSig="";let h=new mt,u=[],f=[],d=new Map,m=e.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??m)>Math.min(e.floor.cut_height,m):x.lamp?hg.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=h.count,_=x.pack?$t(x.pack):void 0,[M,b,v]=x.size??[.3,.3,.3];x.model?i0(h,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):_?vc(h,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:M,d:b,h:v,mirror:x.mirror},x.base??0,65280):Nf(h,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:h.count}),x.pickable!==!1&&u.push({id:x.id,start:p,end:h.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:h.count})}e.lampTris=u,e.lampFurnTris=f,e.lampRanges=d,e.lampShade=am(h.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=h.geometry(),e.lampMesh.visible=h.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((h,u)=>{let f=e.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],m=d?.55+.45*d.level:0,x=d?new j(...d.color.map(_=>Math.min(1,_*m))):new j(aw),g=n(h.id);g>0&&x.lerp(new j(1,1,1),.7*g);let p=new j(x.getHex());lm(c,e.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Lt,s=this.weatherLayer?.cloud??0,r=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===e.sunSig)return;e.sunSig=r;let o=new mt;if(t&&t.elevation>2&&s<.97){let a=Math.min(1,t.elevation/12)*(1-.8*s),l=t.elevation*Lt,c=t.azimuth*Lt,h=[Math.sin(n+c),-Math.cos(n+c)],u=1/Math.tan(l);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let d=[-f.toRoom[0],-f.toRoom[1]],m=d[0]*h[0]+d[1]*h[1];if(m<.05)continue;let x=e.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let p=(y,w)=>{let R=Math.min(7,w*u);return[f.start[0]+f.axis[0]*y+f.toRoom[0]*f.faceRoom-h[0]*R,.02,f.start[1]+f.axis[1]*y+f.toRoom[1]*f.faceRoom-h[1]*R]},_=.14*a*Math.min(1,m*1.5),M=new j(1*_,.82*_,.55*_),b=M.clone().multiplyScalar(.45),v=e.floor.rooms.find(y=>y.id===f.opening.room_id);if(!v||v.points.length<3)continue;let S=Math.max(1,Math.ceil(Math.min(7,g*u)/.25)),E=Math.max(1,Math.ceil(f.width/.3));for(let y=0;y<S;y++){let w=f.sill+(g-f.sill)*y/S,R=f.sill+(g-f.sill)*(y+1)/S,T=y/S,L=(y+1)/S,I=M.clone().lerp(b,T),C=M.clone().lerp(b,L);for(let F=0;F<E;F++){let N=f.width*F/E,U=f.width*(F+1)/E,V=p((N+U)/2,(w+R)/2);if(!_t([V[0],V[2]],v.points))continue;let z=p(N,w),B=p(U,w),H=p(U,R),ee=p(N,R);o.tri(z,B,H,I,I,C),o.tri(z,H,ee,I,C,C)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=o.geometry(),e.sunMesh.visible=o.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],s=[],r=new mt,o=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*Lt,_=[-Math.sin(p),Math.cos(p)],M=l.model==="camera_ceiling",b=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*Lt/2,S=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),E=new j(0,0,0),y=Math.max(4,Math.round(v/.15)),w=.015,R=e.geo.walls2d,T=C=>{let F=_[0]*Math.cos(C)-_[1]*Math.sin(C),N=_[1]*Math.cos(C)+_[0]*Math.sin(C),U=b;for(let V of R){let z=V.b[0]-V.a[0],B=V.b[1]-V.a[1],H=F*B-N*z;if(Math.abs(H)<1e-9)continue;let ee=((V.a[0]-l.x)*B-(V.a[1]-l.z)*z)/H,Q=((V.a[0]-l.x)*N-(V.a[1]-l.z)*F)/H;ee>.45&&ee<U&&Q>=0&&Q<=1&&(U=ee)}return U},L=C=>{let F=T(C);return[l.x+(_[0]*Math.cos(C)-_[1]*Math.sin(C))*F,w,l.z+(_[1]*Math.cos(C)+_[0]*Math.sin(C))*F]},I=r.count;for(let C=0;C<y;C++)r.tri([l.x,w,l.z],L(-v+2*v*(C+1)/y),L(-v+2*v*C/y),S,E,E);o.push({id:l.id,start:I,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||hg.has(l.lamp)&&this.wallMode==="cut")continue;let[h,u,f]=l.size??Bf[l.lamp],d=l.base??0,m=(l.rotation??0)*Lt,x={ceiling:t-.07,downlight:t-.03,spot:t-f,panel:t-.03,pendant:Math.max(.4,t-f)+.08,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[l.lamp],g=(p,_,M=1)=>{n.push(p,x,_),s.push(...c.color.map(b=>b*c.level*.7*M))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+h*(.5+p),l.z),s.push(...c.color.map(_=>_*c.level*.7*.6))):g(l.x+Math.cos(m)*h*p,l.z+Math.sin(m)*h*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(u/2+.05),l.z+Math.cos(m)*(u/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new j(...c.color.map(S=>S*.09*c.level)),_=new j(0,0,0),M=Math.max(.03,h/2),b=.45+.35*c.level,v=16;for(let S=0;S<v;S++){let E=S/v*Math.PI*2,y=(S+1)/v*Math.PI*2,w=[l.x+Math.cos(E)*M,x,l.z+Math.sin(E)*M],R=[l.x+Math.cos(y)*M,x,l.z+Math.sin(y)*M],T=[l.x+Math.cos(E)*b,.02,l.z+Math.sin(E)*b],L=[l.x+Math.cos(y)*b,.02,l.z+Math.sin(y)*b];r.tri(w,T,L,p,_,_),r.tri(w,L,R,p,_,p)}}}let a=new Ge;a.setAttribute("position",new Ue(n,3)),a.setAttribute("color",new Ue(s,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=r.geometry(),e.coneMesh.visible=r.count>0,e.coneTris=o}buildScreens(e){let t=Ic(e.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=t.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return;e.screenSig=n;let s=new mt;for(let r of t){let o=this.screens.get(r.id),a=r.rotation*Lt,l=Math.cos(a),c=Math.sin(a),h=(M,b,v)=>[r.x+M*l-v*c,b,r.z+M*c+v*l];if(o.faces){let M=Math.max(.05,r.w)*(r.mirror?-1:1),b=Math.max(.05,r.d),v=Math.max(.005,r.h),S=Fn(e.floor,r);for(let E of o.faces){let y=E.part==="right"?.03:-Math.abs(M)/2+.03,w=E.part==="left"?-.03:Math.abs(M)/2-.03,R=S+(E.part==="bottom"?v*.45:v)+.006,T=new j(...E.color.map(V=>Math.min(1,V*(.35+.65*E.level)))),L=new j(0,0,0),I=(V,z,B=R)=>h(V*Math.sign(M),B,z),C=[I(y,-b/2+.03),I(w,-b/2+.03),I(w,b/2-.03),I(y,b/2-.03)];s.tri(C[0],C[2],C[1],T),s.tri(C[0],C[3],C[2],T);let F=.12+.1*E.level,N=T.clone().multiplyScalar(.5),U=[I(y-F,-b/2-F,R+.004),I(w+F,-b/2-F,R+.004),I(w+F,b/2+F,R+.004),I(y-F,b/2+F,R+.004)];for(let V=0;V<4;V++){let z=(V+1)%4;s.tri(C[V],U[z],U[V],N,L,L),s.tri(C[V],C[z],U[z],N,N,L)}}continue}let u=Gh(r,e.floor);if(!u)continue;let f=new j(...o.color.map(M=>Math.min(1,M*(.35+.65*o.level)))),d=new j(0,0,0),m=u.z+.004;s.tri(h(u.x0,u.y0,m),h(u.x1,u.y0,m),h(u.x1,u.y1,m),f),s.tri(h(u.x0,u.y0,m),h(u.x1,u.y1,m),h(u.x0,u.y1,m),f);let x=.18+.12*o.level,g=f.clone().multiplyScalar(.5),p=[h(u.x0,u.y0,m),h(u.x1,u.y0,m),h(u.x1,u.y1,m),h(u.x0,u.y1,m)],_=[h(u.x0-x,u.y0-x,m+.01),h(u.x1+x,u.y0-x,m+.01),h(u.x1+x,u.y1+x,m+.01),h(u.x0-x,u.y1+x,m+.01)];for(let M=0;M<4;M++){let b=(M+1)%4;s.tri(p[M],_[M],_[b],g,d,d),s.tri(p[M],_[b],p[b],g,d,g)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=s.geometry(),e.screenMesh.visible=s.count>0}buildOpenings(e){let t=k0(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,s]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let s=new j(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new j(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(uw,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)t.setXYZ(o,s.r,s.g,s.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".nf-pin"))e.classList.toggle("nf-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new Ut;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let d of u.floor.rooms)for(let[m,x]of d.points)t.expandByPoint(new k(m,f,x)),t.expandByPoint(new k(m,f+u.floor.height,x))}t.isEmpty()&&t.set(new k(-4,0,-4),new k(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:t.min.x-8,x1:t.max.x+8,z0:t.min.z-8,z1:t.max.z+8,y0:t.min.y,y1:t.max.y+6});let n=t.getCenter(new k),s=t.getSize(new k),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=t.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new Ut,t=1/0;for(let o of this.floors){t=Math.min(t,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new k(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new k(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=xw();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=e.getCenter(new k),s=e.getSize(new k),r=Uf*Math.ceil((Math.max(s.x,s.z)+16)/Uf);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,t-ns-.02,n.z)}distanceFor(e){let t=this.camera.fov*Lt,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),s=new Ao;return s.setFromCamera(new Oe(e/n.width*2-1,-(t/n.height)*2+1),this.camera),s}pick(e,t){let n=this.rayAt(e,t),s=this.activeFloors();if(this.meshes.length){let a=n.intersectObjects(this.meshes.map(l=>l.group),!0)[0];if(a){let l=a.object;for(;l&&!this.meshes.some(h=>h.group===l);)l=l.parent;let c=l?this.pickFurniture.get(this.meshes.find(h=>h.group===l).furnitureId):void 0;if(c)return{entity:c}}}let r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??rt;if(f!==rt&&Math.floor(f/16)===0)continue}let h=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=o(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,_=Math.hypot(p.x,p.z)||1,M=[a.point.x-p.x/_*.3,a.point.z-p.z/_*.3],b=c.floor.rooms.find(v=>v.points.length>=3&&_t(M,v.points))?.id??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:c.floor.id,roomId:b}}else if(!g&&b)return{floorId:c.floor.id,roomId:b}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Of),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),s=this.activeFloors(),r=s.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=s.find(h=>h.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(h=>o.faceIndex>=h.start&&o.faceIndex<h.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let s=this.rayAt(t,n),r=e.floor.elevation+e.y,o=s.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-s.ray.origin.y)/o.y;return a<=0?null:[s.ray.origin.x+o.x*a,s.ray.origin.z+o.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(e,t),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&s.has(h))&&this.grabItem(c,l,e,t)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,e,t):this.grabItem(a,o,e,t)}let r=this.furnitureAt(e,t);if(!r){let o=this.pick(e,t);return o&&"entity"in o?this.grabDevice(o.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,e,t)}grabItem(e,t,n,s){let r=e.floor.furniture.find(a=>a.id===t),o=this.floorPoint(e,n,s);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:e.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(e,t,n){let s=this.devices.find(a=>a.id===e),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,t,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),h=l&&this.floorPoint(l,e,t);if(!l||!c||!h)return;let u=this.building?.settings.grid??.05;n.x=c.x=Math.round((h[0]+n.offset[0])/u)*u,n.z=c.z=Math.round((h[1]+n.offset[1])/u)*u,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=this.floorPoint(r,e,t);if(!o)return;let a=this.building?.settings.grid??.05;s.x=Math.round((o[0]+s.offset[0])/a)*a,s.z=Math.round((o[1]+s.offset[1])/a)*a,s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(p=>p.floor.furniture.some(_=>_.id===e)):void 0,n=t?.floor.furniture.find(p=>p.id===e);if(!t||!n)return;let s=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=$t(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Fn(t.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Fn(t.floor,n),h=n.rotation*Lt,u=Math.cos(h),f=Math.sin(h),d=(p,_,M)=>[s+p*u-_*f,M,r+p*f+_*u],m=new cn,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new j(.25,.9,1);for(let p=0;p<4;p++){let[_,M]=x[p],[b,v]=x[(p+1)%4];m.seg(d(_,M,c+.01),d(b,v,c+.01),g),m.seg(d(_,M,c+l),d(b,v,c+l),g),m.seg(d(_,M,c+.01),d(_,M,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new j(1,1,1)),this.ghost=new gn(m.geometry(),new Bt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(e,t);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:r.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(p=>p.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(e*s),o=Math.round(t*s),a=new rn(r,o);a.texture.colorSpace=vt;let l=new Ln(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let I of this.floors)I.group.visible=I===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let _=p.floor.rooms.flatMap(I=>I.points),M=p.floor.elevation,b=new Ut(new k(Math.min(..._.map(I=>I[0]))-.3,M,Math.min(..._.map(I=>I[1]))-.3),new k(Math.max(..._.map(I=>I[0]))+.3,M+Math.min(p.floor.cut_height,p.floor.height),Math.max(..._.map(I=>I[1]))+.3)),v=b.getCenter(new k),S=-.6,E=.8,y=new k(Math.sin(E)*Math.sin(S),Math.cos(E),Math.sin(E)*Math.cos(S));l.position.copy(v).addScaledVector(y,100),l.lookAt(v),l.updateMatrixWorld();let w=.5,R=.5;for(let I of[b.min.x,b.max.x])for(let C of[b.min.y,b.max.y])for(let F of[b.min.z,b.max.z]){let N=new k(I,C,F).applyMatrix4(l.matrixWorldInverse);w=Math.max(w,Math.abs(N.x)),R=Math.max(R,Math.abs(N.y))}let T=r/o;w/R>T?R=w/T:w=R*T,l.left=-w*1.05,l.right=w*1.05,l.top=R*1.05,l.bottom=-R*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let L=x.createImageData(r,o);for(let I=0;I<o;I++)L.data.set(d.subarray((o-1-I)*r*4,(o-I)*r*4),I*r*4);x.putImageData(L,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=h),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?sg(n.room,void 0,void 0,n.obstacles):Df(n.rest),l=a.length?a:Df(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-s.motion.pos[0],h[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=u)}),s.motion.path=l,s.motion.next=c,n.room&&!_t(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(lg[n.mode])}for(let[n,s]of this.robots)t.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let s=new mt,r=(a,l,c,h,u)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ft(s,f,l,c,h,u,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new Ye({vertexColors:!0});let o=new mt;Ft(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let t=new ft,n=new Ye({color:lg[e.mode]});return t.add(new Fe(this.robotGeo,this.robotMat),new Fe(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),t>0?n=rg(s.motion,s.info,t)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}liveFlyInto(e,t,n=1100){let s=this.floorMap.get(e),r=s?s.floor.elevation+s.ty:0;this.controls.flyTo({target:new k(t.target[0],r+t.target[1],t.target[2]),radius:t.radius,theta:t.theta,phi:Math.max(.08,t.phi)},n)}focus(e,t,n,s,r){let o=this.floorMap.get(e);if(o){if(this.controls.flyTo({target:new k(t,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let s=this.controls.update(e),r=this.stepFloors(t),o=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let p=this.deviceFloor.get(x);p&&m.add(p),g<=e&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(t),c=this.stepRobots(e),u=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(e)).some(Boolean),f=s||r||o||a||l,d=[];if(s&&d.push("camera"),r&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.effectTick&&d.push("effect"),c&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*fg:fg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/r+h[1]*s/r>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new k,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,h,g).project(this.camera);let p=(n.x+1)/2*e,_=(1-n.y)/2*t;(!l||p<l.x)&&(l={x:p,y:_}),(!c||p>c.x)&&(c={x:p,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),r.push({fv:o,left:Math.max(f,Math.min(e-u-8,d)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(e,t);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new k,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("nf-dev-full",h==="full"),o.classList.toggle("nf-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let s=e-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:t,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function fw(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(o,a,l,c,h)=>{t.strokeStyle=`rgba(55,224,255,${h})`,t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let s=(o,a,l)=>{t.save(),t.beginPath(),t.rect(o*256,a*256,256,256),t.clip(),l(o*256,a*256),t.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new an(e);return r.flipY=!1,r.wrapS=fn,r.wrapT=fn,r.anisotropy=4,r.colorSpace=vt,r}function dw(i){let e=new Ye({map:i,transparent:!0,blending:pt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNfTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"nf-pattern",e}function pw(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new an(i);return t.wrapS=Wn,t.wrapT=Wn,t.colorSpace=vt,t}function mw(i,e){let t=i.rooms.map((s,r)=>r),n=s=>t[s]===s?s:t[s]=n(t[s]);for(let[s,r]of e){let o=i.rooms.findIndex(h=>h.id===s),a=i.rooms.findIndex(h=>h.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((s,r)=>n(r))}function gw(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new an(e);return s.colorSpace=vt,s}function xw(){let e=Uf,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=e;o++){let a=Math.round(o/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new an(t);return r.anisotropy=4,r.colorSpace=vt,r}function FR(i,e){return new zf(i,e)}function Nf(i,e,t,n){let[s,r,o]=e.size??Bf[e.lamp],a=e.base??0,l=(e.rotation??0)*Lt,c=Math.cos(l),h=Math.sin(l),u=(x,g)=>[e.x+x*c-g*h,e.z+x*h+g*c],f=(x,g,p,_,M,b=14)=>{let v=[];for(let S=0;S<b;S++){let E=S/b*Math.PI*2;v.push([e.x+Math.cos(E)*x,e.z+Math.sin(E)*x])}Ft(i,v,g,p,_,M,{aoFrom:0,bottom:!0})},d=(x,g,p,_,M,b,v,S=v)=>Ft(i,[u(x,p),u(g,p),u(g,_),u(x,_)],M,b,v,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(s,r)/2);switch(e.lamp){case"ceiling":f(m*.25,t-.04,t,it,it,8),f(m,t-Math.max(.04,o)-.035,t-.04,n,n);break;case"pendant":{let x=Math.max(.4,t-o);f(.06,t-.02,t,it,it,8);let g=e.variant==="globe"?x+2*m:e.variant==="drum"?x+.24:x+.2;if(f(.008,g,t-.02,it,it,5),e.variant==="globe")for(let _=0;_<7;_++){let M=Math.PI*(_/7),b=Math.PI*((_+1)/7);f(m*Math.max(.2,Math.sin((M+b)/2)),x+m-m*Math.cos(M),x+m-m*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let _=0;_<4;_++)f(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else e.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,t-.012,t,it,it,12),f(m*.7,t-.02,t-.012,n,n,12);break;case"spot":f(m*.6,t-.02,t,it,it,10),f(m,t-Math.max(.06,o),t-.02,it,it,12),f(m*.8,t-Math.max(.06,o)-.008,t-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,t-Math.max(.015,o),t,it,it),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,t-Math.max(.015,o)-.004,t-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,it,it),f(.014,a+.03,a+o-.12,it,it,6),f(m,a+o-.14,a+o-.02,it,it),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,it,it,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,it,it,10);break;case"garden":f(.012,a,a+o-.08,it,it,5),f(m,a+o-.08,a+o-.01,it,it,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,it,it),f(.014,a+.03,a+o-.28,it,it,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,it,it),f(.012,a+.03,a+o-.16,it,it,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=e.base??dc;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,it),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=e.base!=null?e.base+x:t-.04;if(!e.roll&&!e.upright){d(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let p=(e.roll??0)*Lt,_=Math.cos(p),M=Math.sin(p),b=e.upright?a+s/2:g-x/2,v=(R,T,L)=>{let I=R,C=T*_-L*M,F=T*M+L*_;return e.upright&&([I,C]=[-C,I]),[e.x+I*c-F*h,b+C,e.z+I*h+F*c]},S=[v(-s/2,-x/2,-r/2),v(s/2,-x/2,-r/2),v(s/2,-x/2,r/2),v(-s/2,-x/2,r/2),v(-s/2,x/2,-r/2),v(s/2,x/2,-r/2),v(s/2,x/2,r/2),v(-s/2,x/2,r/2)],E=new j(n),y=[e.x,b,e.z],w=(R,T,L,I)=>{let[C,F,N]=[S[R],S[T],S[L]],U=[(F[1]-C[1])*(N[2]-C[2])-(F[2]-C[2])*(N[1]-C[1]),(F[2]-C[2])*(N[0]-C[0])-(F[0]-C[0])*(N[2]-C[2]),(F[0]-C[0])*(N[1]-C[1])-(F[1]-C[1])*(N[0]-C[0])],V=[C[0]-y[0],C[1]-y[1],C[2]-y[2]],z=U[0]*V[0]+U[1]*V[1]+U[2]*V[2]<0,[B,H,ee,Q]=z?[S[I],S[L],S[T],S[R]]:[S[R],S[T],S[L],S[I]];i.tri(B,H,ee,E,E,E),i.tri(B,ee,Q,E,E,E)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{zf as NextFloorViewer,FR as createViewer,nw as furniturePreview,hw as isLowEnd,Nf as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
