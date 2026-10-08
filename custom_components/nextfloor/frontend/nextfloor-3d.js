/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var qh=0,Pc=1,Yh=2;var Pr=1,$h=2,zs=3,Ti=0,on=1,ve=2,Xn=0,qn=1,he=2,Ic=3,Ir=4,Zh=5;var Qi=100,Jh=101,Kh=102,Qh=103,jh=104,tf=200,ef=201,nf=202,sf=203,Lc=204,Fc=205,rf=206,of=207,af=208,lf=209,cf=210,uf=211,hf=212,ff=213,df=214,Ho=0,Wo=1,Xo=2,Ls=3,qo=4,Yo=5,$o=6,Zo=7,Dc=0,pf=1,mf=2,Pn=0,Nc=1,Uc=2,Oc=3,Bc=4,zc=5,kc=6,Vc=7;var Gc=300,Ai=301,ji=302,Sa=303,wa=304,Lr=306,Wi=1e3,hn=1001,Jo=1002,Ge=1003,gf=1004;var Fr=1005;var Xe=1006,Ta=1007;var Ei=1008;var mn=1009,Hc=1010,Wc=1011,ks=1012,Aa=1013,In=1014,Ln=1015,Fn=1016,Ea=1017,Ra=1018,Vs=1020,Xc=35902,qc=35899,Yc=1021,$c=1022,yn=1023,kn=1026,Ri=1027,Zc=1028,Ca=1029,Ci=1030,Pa=1031;var Ia=1033,Dr=33776,Nr=33777,Ur=33778,Or=33779,La=35840,Fa=35841,Da=35842,Na=35843,Ua=36196,Oa=37492,Ba=37496,za=37488,ka=37489,Br=37490,Va=37491,Ga=37808,Ha=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,$a=37814,Za=37815,Ja=37816,Ka=37817,Qa=37818,ja=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,zr=36285,al=36286;var ur=2300,Ko=2301,Vo=2302,_c=2303,vc=2400,yc=2401,Mc=2402;var xf=3200;var Jc=0,bf=1,oi="",Pe="srgb",hr="srgb-linear",fr="linear",ue="srgb";var Go=7680;var _f=519,vf=512,yf=513,Mf=514,ll=515,Sf=516,wf=517,cl=518,Tf=519,Kc=35044,Qc=35048;var jc="300 es",Rn=2e3,dr=2001;function am(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){let i=pr("canvas");return i.style.display="block",i}var ph={},Fs=null;function mr(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function Ef(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Ef(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=Ef(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in ph||(ph[t]=!0,Ot(...i))}function Rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cf={[Ho]:Wo,[Xo]:$o,[qo]:Zo,[Ls]:Yo,[Wo]:Ho,[$o]:Xo,[Zo]:qo,[Yo]:Ls},Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,Qo=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function cm(i,t){return(i%t+t)%t}function Jl(i,t,e){return(1-e)*i+e*t}function zn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var su=class su{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var Vt=su,Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==u||c!==p||f!==m){let g=l*u+c*p+f*m+h*x;g<0&&(u=-u,p=-p,m=-m,x=-x,g=-g);let d=1-a;if(g<.9995){let _=Math.acos(g),y=Math.sin(_);d=Math.sin(d*_)/y,a=Math.sin(a*_)/y,l=l*d+u*a,c=c*d+p*a,f=f*d+m*a,h=h*d+x*a}else{l=l*d+u*a,c=c*d+p*a,f=f*d+m*a,h=h*d+x*a;let _=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=_,c*=_,f*=_,h*=_}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+f*h+l*p-c*u,t[e+1]=l*m+f*u+c*h-a*p,t[e+2]=c*m+f*p+a*u-l*h,t[e+3]=f*m-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),u=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*p*m,this._y=c*p*h-u*f*m,this._z=c*f*m+u*p*h,this._w=c*f*h-u*p*m;break;case"YXZ":this._x=u*f*h+c*p*m,this._y=c*p*h-u*f*m,this._z=c*f*m-u*p*h,this._w=c*f*h+u*p*m;break;case"ZXY":this._x=u*f*h-c*p*m,this._y=c*p*h+u*f*m,this._z=c*f*m+u*p*h,this._w=c*f*h-u*p*m;break;case"ZYX":this._x=u*f*h-c*p*m,this._y=c*p*h+u*f*m,this._z=c*f*m-u*p*h,this._w=c*f*h+u*p*m;break;case"YZX":this._x=u*f*h+c*p*m,this._y=c*p*h+u*f*m,this._z=c*f*m-u*p*h,this._w=c*f*h-u*p*m;break;case"XZY":this._x=u*f*h-c*p*m,this._y=c*p*h-u*f*m,this._z=c*f*m+u*p*h,this._w=c*f*h+u*p*m;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+a+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var k=ru,Kl=new k,mh=new Gn,ou=class ou{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],p=n[5],m=n[8],x=s[0],g=s[3],d=s[6],_=s[1],y=s[4],v=s[7],M=s[2],S=s[5],C=s[8];return r[0]=o*x+a*_+l*M,r[3]=o*g+a*y+l*S,r[6]=o*d+a*v+l*C,r[1]=c*x+f*_+h*M,r[4]=c*g+f*y+h*S,r[7]=c*d+f*v+h*C,r[2]=u*x+p*_+m*M,r[5]=u*g+p*y+m*S,r[8]=u*d+p*v+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,p=c*r-o*l,m=e*h+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=h*x,t[1]=(s*c-f*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(f*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ou.prototype.isMatrix3=!0;var Gt=ou,Ql=new Gt,gh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function um(){let i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:gh,fromXYZ:xh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var te=um();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=pr("canvas")),ps.width=t.width,ps.height=t.height;let s=ps.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hm=0,Ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var fm=0,tc=new k,sn=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hn,s=hn,r=Xe,o=Ei,a=yn,l=mn,c=i.DEFAULT_ANISOTROPY,f=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=xi(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Gc;sn.DEFAULT_ANISOTROPY=1;var au=class au{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(p+1)/2,M=(d+1)/2,S=(f+u)/4,C=(h+x)/4,b=(m+g)/4;return y>v&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=C/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=b/r),this.set(n,s,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(h-x)/_,this.z=(u-f)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};au.prototype.isVector4=!0;var Re=au,ta=class extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ma=class Ma{constructor(t,e,n,s,r,o,a,l,c,f,h,u,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,u,p,m,x,g)}set(t,e,n,s,r,o,a,l,c,f,h,u,p,m,x,g){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,p=o*h,m=a*f,x=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,p=l*h,m=c*f,x=c*h;e[0]=u+x*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,p=l*h,m=c*f,x=c*h;e[0]=u-x*a,e[4]=-o*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*f,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,p=o*h,m=a*f,x=a*h;e[0]=l*f,e[4]=m*c-p,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*f,e[4]=x-u*h,e[8]=m*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+m,e[10]=u-x*h}else if(t.order==="XZY"){let u=o*l,p=o*c,m=a*l,x=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+x,e[5]=o*f,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*f,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dm,t,pm)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(n,cn),fi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(n,cn)),fi.normalize(),fo.crossVectors(cn,fi),s[0]=fi.x,s[4]=fo.x,s[8]=cn.x,s[1]=fi.y,s[5]=fo.y,s[9]=cn.y,s[2]=fi.z,s[6]=fo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],_=n[3],y=n[7],v=n[11],M=n[15],S=s[0],C=s[4],b=s[8],w=s[12],E=s[1],A=s[5],L=s[9],I=s[13],R=s[2],F=s[6],U=s[10],O=s[14],V=s[3],z=s[7],B=s[11],X=s[15];return r[0]=o*S+a*E+l*R+c*V,r[4]=o*C+a*A+l*F+c*z,r[8]=o*b+a*L+l*U+c*B,r[12]=o*w+a*I+l*O+c*X,r[1]=f*S+h*E+u*R+p*V,r[5]=f*C+h*A+u*F+p*z,r[9]=f*b+h*L+u*U+p*B,r[13]=f*w+h*I+u*O+p*X,r[2]=m*S+x*E+g*R+d*V,r[6]=m*C+x*A+g*F+d*z,r[10]=m*b+x*L+g*U+d*B,r[14]=m*w+x*I+g*O+d*X,r[3]=_*S+y*E+v*R+M*V,r[7]=_*C+y*A+v*F+M*z,r[11]=_*b+y*L+v*U+M*B,r[15]=_*w+y*I+v*O+M*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],p=t[14],m=t[3],x=t[7],g=t[11],d=t[15],_=l*p-c*u,y=a*p-c*h,v=a*u-l*h,M=o*p-c*f,S=o*u-l*f,C=o*h-a*f;return e*(x*_-g*y+d*v)-n*(m*_-g*M+d*S)+s*(m*y-x*M+d*C)-r*(m*v-x*S+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(r*f-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],p=t[11],m=t[12],x=t[13],g=t[14],d=t[15],_=e*a-n*o,y=e*l-s*o,v=e*c-r*o,M=n*l-s*a,S=n*c-r*a,C=s*c-r*l,b=f*x-h*m,w=f*g-u*m,E=f*d-p*m,A=h*g-u*x,L=h*d-p*x,I=u*d-p*g,R=_*I-y*L+v*A+M*E-S*w+C*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/R;return t[0]=(a*I-l*L+c*A)*F,t[1]=(s*L-n*I-r*A)*F,t[2]=(x*C-g*S+d*M)*F,t[3]=(u*S-h*C-p*M)*F,t[4]=(l*E-o*I-c*w)*F,t[5]=(e*I-s*E+r*w)*F,t[6]=(g*v-m*C-d*y)*F,t[7]=(f*C-u*v+p*y)*F,t[8]=(o*L-a*E+c*b)*F,t[9]=(n*E-e*L-r*b)*F,t[10]=(m*S-x*v+d*_)*F,t[11]=(h*v-f*S-p*_)*F,t[12]=(a*w-o*A-l*b)*F,t[13]=(e*A-n*w+s*b)*F,t[14]=(x*y-m*M-g*_)*F,t[15]=(f*M-h*y+u*_)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,p=r*f,m=r*h,x=o*f,g=o*h,d=a*h,_=l*c,y=l*f,v=l*h,M=n.x,S=n.y,C=n.z;return s[0]=(1-(x+d))*M,s[1]=(p+v)*M,s[2]=(m-y)*M,s[3]=0,s[4]=(p-v)*S,s[5]=(1-(u+d))*S,s[6]=(g+_)*S,s[7]=0,s[8]=(m+y)*C,s[9]=(g-_)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),l=ms.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);let c=1/o,f=1/a,h=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=f,wn.elements[5]*=f,wn.elements[6]*=f,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,e.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,f=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Rn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===dr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,f=2/(e-t),h=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Rn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===dr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ma.prototype.isMatrix4=!0;var Se=Ma,ms=new k,wn=new Se,dm=new k(0,0,0),pm=new k(1,1,1),fi=new k,fo=new k,cn=new k,bh=new Se,_h=new Gn,bi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _h.setFromEuler(this),this.setFromQuaternion(_h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mm=0,vh=new k,gs=new Gn,Qn=new Se,po=new k,er=new k,gm=new k,xm=new Gn,yh=new k(1,0,0),Mh=new k(0,1,0),Sh=new k(0,0,1),wh={type:"added"},bm={type:"removed"},xs={type:"childadded",child:null},ec={type:"childremoved",child:null},rn=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new bi,n=new Gn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Gt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(er,po,this.up):Qn.lookAt(po,er,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Qn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wh),xs.child=t,this.dispatchEvent(xs),xs.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bm),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wh),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,xm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new k(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},mo={h:0,s:0,l:0};function nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=cm(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Pf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return te.workingToColorSpace(Ze.copy(this),t),Math.round(ne(Ze.r*255,0,255))*65536+Math.round(ne(Ze.g*255,0,255))*256+Math.round(ne(Ze.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Pe){te.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(mo);let n=Jl(di.h,mo.h,e),s=Jl(di.s,mo.s,e),r=Jl(di.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new nt;nt.NAMES=Pf;var Xi=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qi=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new k,jn=new k,ic=new k,ti=new k,bs=new k,_s=new k,Th=new k,sc=new k,rc=new k,oc=new k,ac=new Re,lc=new Re,cc=new Re,ii=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),jn.subVectors(n,e),ic.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(jn),l=Tn.dot(ic),c=jn.dot(jn),f=jn.dot(ic),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,p=(c*l-a*f)*u,m=(o*f-a*l)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ac.setScalar(0),lc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ac,r.x),o.addScaledVector(lc,r.y),o.addScaledVector(cc,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),jn.subVectors(t,e),Tn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;bs.subVectors(s,n),_s.subVectors(r,n),sc.subVectors(t,n);let l=bs.dot(sc),c=_s.dot(sc);if(l<=0&&c<=0)return e.copy(n);rc.subVectors(t,s);let f=bs.dot(rc),h=_s.dot(rc);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(bs,o);oc.subVectors(t,r);let p=bs.dot(oc),m=_s.dot(oc);if(m>=0&&p<=m)return e.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(_s,a);let g=f*m-p*h;if(g<=0&&h-f>=0&&p-m>=0)return Th.subVectors(r,s),a=(h-f)/(h-f+(p-m)),e.copy(s).addScaledVector(Th,a);let d=1/(g+x+u);return o=x*d,a=u*d,e.copy(n).addScaledVector(bs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ln=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),xo.subVectors(this.max,nr),vs.subVectors(t.a,nr),ys.subVectors(t.b,nr),Ms.subVectors(t.c,nr),pi.subVectors(ys,vs),mi.subVectors(Ms,ys),zi.subVectors(vs,Ms);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-zi.z,zi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,zi.z,0,-zi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-zi.y,zi.x,0];return!uc(e,vs,ys,Ms,xo)||(e=[1,0,0,0,1,0,0,0,1],!uc(e,vs,ys,Ms,xo))?!1:(bo.crossVectors(pi,mi),e=[bo.x,bo.y,bo.z],uc(e,vs,ys,Ms,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,go=new ln,vs=new k,ys=new k,Ms=new k,pi=new k,mi=new k,zi=new k,nr=new k,xo=new k,bo=new k,ki=new k;function uc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),f=n.dot(ki);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Ne=new k,_o=new Vt,vm=0,fn=class extends Vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yi=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Dt=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ym=new ln,ir=new k,hc=new k,_i=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ym.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(hc)),this.expandByPoint(ir.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mm=0,xn=new Se,fc=new rn,Ss=new k,un=new ln,sr=new ln,Ve=new k,Ht=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(am(t)?Yi:xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return fc.lookAt(t),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(un.min,sr.min),un.expandByPoint(Ve),Ve.addVectors(un.max,sr.max),un.expandByPoint(Ve)):(un.expandByPoint(sr.min),un.expandByPoint(sr.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ve.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Ve.add(Ss)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new k,l[b]=new k;let c=new k,f=new k,h=new k,u=new Vt,p=new Vt,m=new Vt,x=new k,g=new k;function d(b,w,E){c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),u.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,E),f.sub(c),h.sub(c),p.sub(u),m.sub(u);let A=1/(p.x*m.y-m.x*p.y);isFinite(A)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(A),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(A),a[b].add(x),a[w].add(x),a[E].add(x),l[b].add(g),l[w].add(g),l[E].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,w=_.length;b<w;++b){let E=_[b],A=E.start,L=E.count;for(let I=A,R=A+L;I<R;I+=3)d(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new k,v=new k,M=new k,S=new k;function C(b){M.fromBufferAttribute(s,b),S.copy(M);let w=a[b];y.copy(w),y.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(S,w);let A=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,A)}for(let b=0,w=_.length;b<w;++b){let E=_[b],A=E.start,L=E.count;for(let I=A,R=A+L;I<R;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,f=new k,h=new k;if(t)for(let u=0,p=t.count;u<p;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(f),l.add(f),c.add(f),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let d=0;d<f;d++)u[m++]=c[p++]}return new fn(u,f,h)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},na=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},nn=new k,br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dc=new k,Sm=new k,wm=new Gt,En=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wm.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tm=0,Hn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=qn,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Fc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vi=class extends Hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ws,rr=new k,Ts=new k,As=new k,Es=new Vt,or=new Vt,If=new Se,vo=new k,ar=new k,yo=new k,Ah=new Vt,pc=new Vt,Eh=new Vt,$i=class extends rn{constructor(t=new vi){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ht;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new na(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new br(n,3,0,!1)),ws.setAttribute("uv",new br(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new Vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mo(vo.set(-.5,-.5,0),As,o,Ts,s,r),Mo(ar.set(.5,-.5,0),As,o,Ts,s,r),Mo(yo.set(.5,.5,0),As,o,Ts,s,r),Ah.set(0,0),pc.set(1,0),Eh.set(1,1);let a=t.ray.intersectTriangle(vo,ar,yo,!1,rr);if(a===null&&(Mo(ar.set(-.5,.5,0),As,o,Ts,s,r),pc.set(0,1),a=t.ray.intersectTriangle(vo,yo,ar,!1,rr),a===null))return;let l=t.ray.origin.distanceTo(rr);l<t.near||l>t.far||e.push({distance:l,point:rr.clone(),uv:ii.getInterpolation(rr,vo,ar,yo,Ah,pc,Eh,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mo(i,t,e,n,s,r){Es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(or.x=r*Es.x-s*Es.y,or.y=s*Es.x+r*Es.y):or.copy(Es),i.copy(t),i.x+=or.x,i.y+=or.y,i.applyMatrix4(If)}var ni=new k,mc=new k,So=new k,wo=new k,Zi=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mc.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),wo.copy(this.origin).sub(mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=wo.dot(this.direction),l=-wo.dot(So),c=wo.lengthSq(),f=Math.abs(1-o*o),h,u,p,m;if(f>0)if(h=o*l-a,u=o*a-l,m=r*f,h>=0)if(u>=-m)if(u<=m){let x=1/f;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-m?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=m?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(mc).addScaledVector(So,u),p}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=t.x-o.x,u=t.y-o.y,p=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,d=n.x-o.x,_=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(f),C,b,w,E,A,L,I,R,F,U,O,V;if(v>=M&&v>=S?(w=l,L=h,F=m,V=d,l>=0?(C=c,b=f,E=u,A=p,I=x,R=g,U=_,O=y):(C=f,b=c,E=p,A=u,I=g,R=x,U=y,O=_)):M>=S?(w=c,L=u,F=x,V=_,c>=0?(C=f,b=l,E=p,A=h,I=g,R=m,U=y,O=d):(C=l,b=f,E=h,A=p,I=m,R=g,U=d,O=y)):(w=f,L=p,F=g,V=y,f>=0?(C=l,b=c,E=h,A=u,I=m,R=x,U=d,O=_):(C=c,b=l,E=u,A=h,I=x,R=m,U=_,O=d)),w===0)return null;let z=C/w,B=b/w,X=1/w,tt=E-z*L,j=A-B*L,ut=I-z*F,ct=R-B*F,Nt=U-z*V,q=O-B*V,J=Nt*ct-q*ut,at=tt*q-j*Nt,wt=ut*j-ct*tt;if(s){if(J<0||at<0||wt<0)return null}else if((J<0||at<0||wt<0)&&(J>0||at>0||wt>0))return null;let gt=J+at+wt;if(gt===0)return null;let Bt=X*(J*L+at*F+wt*V);return(gt>0?Bt<0:Bt>0)?null:this.at(Bt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rh=new Se,Vi=new Zi,To=new _i,Ch=new k,Ao=new k,Eo=new k,Ro=new k,gc=new k,Co=new k,Ph=new k,Po=new k,Wt=class extends rn{constructor(t=new Ht,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(gc.fromBufferAttribute(h,t),o?Co.addScaledVector(gc,f):Co.addScaledVector(gc.sub(e),f))}e.add(Co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(To.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(To,Ch)===null||Vi.origin.distanceToSquared(Ch)>(t.far-t.near)**2))&&(Rh.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,M=y;v<M;v+=3){let S=a.getX(v),C=a.getX(v+1),b=a.getX(v+2);s=Io(this,d,t,n,c,f,h,S,C,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let _=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);s=Io(this,o,t,n,c,f,h,_,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=_,M=y;v<M;v+=3){let S=v,C=v+1,b=v+2;s=Io(this,d,t,n,c,f,h,S,C,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let _=g,y=g+1,v=g+2;s=Io(this,o,t,n,c,f,h,_,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Am(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Po);return c<e.near||c>e.far?null:{distance:c,point:Po.clone(),object:i}}function Io(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ao),i.getVertexPosition(l,Eo),i.getVertexPosition(c,Ro);let f=Am(i,t,e,n,Ao,Eo,Ro,Ph);if(f){let h=new k;ii.getBarycoord(Ph,Ao,Eo,Ro,h),s&&(f.uv=ii.getInterpolatedAttribute(s,a,l,c,h,new Vt)),r&&(f.uv1=ii.getInterpolatedAttribute(r,a,l,c,h,new Vt)),o&&(f.normal=ii.getInterpolatedAttribute(o,a,l,c,h,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new k,materialIndex:0};ii.getNormal(Ao,Eo,Ro,u.normal),f.face=u,f.barycoord=h}return f}var ia=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,f=Ge,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=new _i,Em=new Vt(.5,.5),Lo=new k,_r=class{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],_=r[12],y=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-o,p-f,d-m,M-_).normalize(),s[1].setComponents(c+o,p+f,d+m,M+_).normalize(),s[2].setComponents(c+a,p+h,d+x,M+y).normalize(),s[3].setComponents(c-a,p-h,d-x,M-y).normalize(),n)s[4].setComponents(l,u,g,v).normalize(),s[5].setComponents(c-l,p-u,d-g,M-v).normalize();else if(s[4].setComponents(c-l,p-u,d-g,M-v).normalize(),e===Rn)s[5].setComponents(c+l,p+u,d+g,M+v).normalize();else if(e===dr)s[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=Em.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ue=class extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sa=new k,ra=new k,Ih=new Se,lr=new Zi,Fo=new _i,xc=new k,Lh=new k,Wn=class extends rn{constructor(t=new Ht,e=new Ue){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)sa.fromBufferAttribute(e,s-1),ra.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=sa.distanceTo(ra);t.setAttribute("lineDistance",new Dt(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;Ih.copy(s).invert(),lr.copy(t.ray).applyMatrix4(Ih);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let d=f.getX(x),_=f.getX(x+1),y=Do(this,t,lr,l,d,_,x);y&&e.push(y)}if(this.isLineLoop){let x=f.getX(m-1),g=f.getX(p),d=Do(this,t,lr,l,x,g,m-1);d&&e.push(d)}}else{let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let d=Do(this,t,lr,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){let x=Do(this,t,lr,l,m-1,p,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Do(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(sa.fromBufferAttribute(a,s),ra.fromBufferAttribute(a,r),e.distanceSqToSegment(sa,ra,xc,Lh)>n)return;xc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(xc);if(!(c<t.near||c>t.far))return{distance:c,point:Lh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fh=new k,Dh=new k,bn=class extends Wn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Fh.fromBufferAttribute(e,s),Dh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fh.distanceTo(Dh);t.setAttribute("lineDistance",new Dt(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _n=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nh=new Se,Sc=new Zi,No=new _i,Uo=new k,Cn=class extends rn{constructor(t=new Ht,e=new _n){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Nh.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=u,x=p;m<x;m++){let g=c.getX(m);Uo.fromBufferAttribute(h,g),Uh(Uo,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=u,x=p;m<x;m++)Uo.fromBufferAttribute(h,m),Uh(Uo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uh(i,t,e,n,s,r,o){let a=Sc.distanceSqToPoint(i);if(a<e){let l=new k;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var vr=class extends sn{constructor(t=[],e=Ai,n,s,r,o,a,l,c,f){super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qe=class extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends sn{constructor(t,e,n=In,s,r,o,a=Ge,l=Ge,c,f=kn,h=1){if(f!==kn&&f!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oa=class extends yi{constructor(t,e=In,n=Ai,s,r,o=Ge,a=Ge,l,c=kn){let f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yr=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Os=class i extends Ht{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2));function m(x,g,d,_,y,v,M,S,C,b,w){let E=v/C,A=M/b,L=v/2,I=M/2,R=S/2,F=C+1,U=b+1,O=0,V=0,z=new k;for(let B=0;B<U;B++){let X=B*A-I;for(let tt=0;tt<F;tt++){let j=tt*E-L;z[x]=j*_,z[g]=X*y,z[d]=R,c.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[d]=S>0?1:-1,f.push(z.x,z.y,z.z),h.push(tt/C),h.push(1-B/b),O+=1}}for(let B=0;B<b;B++)for(let X=0;X<C;X++){let tt=u+X+F*B,j=u+X+F*(B+1),ut=u+(X+1)+F*(B+1),ct=u+(X+1)+F*B;l.push(tt,j,ct),l.push(j,ut,ct),V+=6}a.addGroup(p,V,w),p+=V,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Rm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Lf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Fm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let f=a,h=l;for(let u=e;u<s;u+=e){let p=i[u],m=i[u+1];p<a&&(a=p),m<l&&(l=m),p>f&&(f=p),m>h&&(h=m)}c=Math.max(f-a,h-l),c=c!==0?32767/c:0}return Mr(r,o,e,a,l,c,0),o}function Lf(i,t,e,n,s){let r;if(s===Wm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Oh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Oh(o/n|0,i[o],i[o+1],r);return r&&Bs(r,r.next)&&(wr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||Ae(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Bm(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Pm(i,n,s,r):Cm(i)){t.push(l.i,i.i,c.i),wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Im(Ji(i),t),Mr(i,t,e,n,s,r,2)):o===2&&Lm(i,t,e,n,s,r):Mr(Ji(i),t,e,n,s,r,1);break}}}function Cm(i){let t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(s,r,o),h=Math.min(a,l,c),u=Math.max(s,r,o),p=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=f&&m.x<=u&&m.y>=h&&m.y<=p&&cr(s,a,r,l,o,c,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ae(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,p=Math.min(a,l,c),m=Math.min(f,h,u),x=Math.max(a,l,c),g=Math.max(f,h,u),d=wc(p,m,t,e,n),_=wc(x,g,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=d&&v&&v.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&cr(a,f,l,h,c,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&cr(a,f,l,h,c,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&cr(a,f,l,h,c,u,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&cr(a,f,l,h,c,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Im(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Bs(n,s)&&Df(n,e,e.next,s)&&Sr(n,s)&&Sr(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function Lm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vm(o,a)){let l=Nf(o,a);o=Ji(o,o.next),l=Ji(l,l.next),Mr(o,t,e,n,s,r,0),Mr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Lf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(km(c))}s.sort(Dm);for(let r=0;r<s.length;r++)e=Nm(s[r],e);return e}function Dm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Nm(i,t){let e=Um(i,t);if(!e)return t;let n=Nf(e,i);return Ji(n,n.next),Ji(e,e.next)}function Um(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Bs(i,e))return e;do{if(Bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ff(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Sr(e,i)&&(h<f||h===f&&(e.x>o.x||e.x===o.x&&Om(o,e)))&&(o=e,f=h)}e=e.next}while(e!==a);return o}function Om(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function Bm(i,t,e,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zm(s)}function zm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function wc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function km(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ff(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function cr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Ff(i,t,e,n,s,r,o,a)}function Vm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gm(i,t)&&(Sr(i,t)&&Sr(t,i)&&Hm(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||Bs(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bs(i,t){return i.x===t.x&&i.y===t.y}function Df(i,t,e,n){let s=Bo(Ae(i,t,e)),r=Bo(Ae(i,t,n)),o=Bo(Ae(e,n,i)),a=Bo(Ae(e,n,t));return!!(s!==r&&o!==a||s===0&&Oo(i,e,t)||r===0&&Oo(i,n,t)||o===0&&Oo(e,i,n)||a===0&&Oo(e,t,n))}function Oo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bo(i){return i>0?1:i<0?-1:0}function Gm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Df(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function Hm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nf(i,t){let e=Tc(i.i,i.x,i.y),n=Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oh(i,t,e,n){let s=Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ac=class{static triangulate(t,e,n=2){return Rm(t,e,n)}},Tr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Bh(t),zh(n,t);let o=t.length;e.forEach(Bh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,zh(n,e[l]);let a=Ac.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Bh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var vn=class i extends Ht{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,p=[],m=[],x=[],g=[];for(let d=0;d<f;d++){let _=d*u-o;for(let y=0;y<c;y++){let v=y*h-r;m.push(v,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){let y=_+c*d,v=_+c*(d+1),M=_+1+c*(d+1),S=_+1+c*d;p.push(y,v,S),p.push(v,M,S)}this.setIndex(p),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ki=class i extends Ht{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],f=[],h=t,u=(e-t)/s,p=new k,m=new Vt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let d=r+g/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,f.push(m.x,m.y)}h+=u}for(let x=0;x<s;x++){let g=x*(n+1);for(let d=0;d<n;d++){let _=d+g,y=_,v=_+n+1,M=_+n+2,S=_+1;a.push(y,v,S),a.push(v,M,S)}}this.setIndex(a),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ar=class i extends Ht{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new k,u=new k,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let _=[],y=d/n,v=o+y*a,M=t*Math.cos(v),S=Math.sqrt(t*t-M*M),C=0;d===0&&o===0?C=.5/e:d===n&&l===Math.PI&&(C=-.5/e);for(let b=0;b<=e;b++){let w=b/e,E=s+w*r;h.x=-S*Math.cos(E),h.y=M,h.z=S*Math.sin(E),m.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),g.push(w+C,1-y),_.push(c++)}f.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let y=f[d][_+1],v=f[d][_],M=f[d+1][_],S=f[d+1][_+1];(d!==0||o>0)&&p.push(y,v,S),(d!==n-1||l<Math.PI)&&p.push(v,M,S)}this.setIndex(p),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ts(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(kh(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(kh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=ts(i[e]);for(let s in n)t[s]=n[s]}return t}function kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Uf={clone:ts,merge:je},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},aa=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var la=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends Mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yc:r=t,a=2*e-n;break;case Mc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yc:o=t,l=2*n-e;break;case Mc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,d=-u*g+2*u*x-u*m,_=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-p)*g+(1.5+p)*x+.5*m,v=p*g-p*x;for(let M=0;M!==a;++M)r[M]=d*o[f+M]+_*o[c+M]+y*o[l+M]+v*o[h+M];return r}},ha=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},fa=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends Mi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,h=this.outTangents;if(!f||!h){let m=(n-e)/(s-e),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let u=a*2,p=t-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],d=p*u+m*2,_=h[d],y=h[d+1],v=t*u+m*2,M=f[v],S=f[v+1],C=Zm(n,e,_,M,s);r[m]=Of(C,x,y,S,g)}return r}};function Of(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $m(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Zm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Of(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=$m(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),bc(t.settings)&&(n.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case Ko:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break;case _c:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;bc(this.settings)&&(Vh(this.settings.inTangents,t),Vh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&lm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,u=h-n,p=h+n;for(let m=0;m!==n;++m){let x=e[h+m];if(x!==e[u+m]||x!==e[p+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,bc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Ko;var Si=class extends pn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ur;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Er=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends pn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=ur;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var ba=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bf=new ba,_a=class{constructor(t){this.manager=t!==void 0?t:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=new k,ko=new Gn,Bn=new k,Rr=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zo,ko,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zo,ko,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zo,ko,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new k,Gh=new Vt,Hh=new Vt,Je=class extends Rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Gh,Hh),e.subVectors(Hh,Gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ri=class extends Rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Cs=-90,Ps=1,va=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Je(Cs,Ps,t,e);s.layers=this.layers,this.add(s);let r=new Je(Cs,Ps,t,e);r.layers=this.layers,this.add(r);let o=new Je(Cs,Ps,t,e);o.layers=this.layers,this.add(o);let a=new Je(Cs,Ps,t,e);a.layers=this.layers,this.add(a);let l=new Je(Cs,Ps,t,e);l.layers=this.layers,this.add(l);let c=new Je(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ya=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var eu="\\[\\]\\.:\\/",Jm=new RegExp("["+eu+"]","g"),nu="[^"+eu+"]",Km="[^"+eu.replace("\\.","")+"]",Qm=/((?:WC+[\/:])*)/.source.replace("WC",nu),jm=/(WCOD+)?/.source.replace("WCOD",Km),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),e0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),n0=new RegExp("^"+Qm+jm+t0+e0+"$"),i0=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jm,"")}static parseTrackName(t){let e=n0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Ec;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TM=new Float32Array(1);var Wh=new Se,Cr=class{constructor(t,e,n=0,s=1/0){this.ray=new Zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(t,e=!0,n=[]){return Rc(t,this,n,e),n.sort(Xh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Rc(t[s],this,n,e);return n.sort(Xh),n}};function Xh(i,t){return i.distance-t.distance}function Rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Rc(r[o],t,e,!0)}}var lu=class lu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};lu.prototype.isMatrix2=!0;var Cc=lu;function iu(i,t,e,n){let s=s0(n);switch(e){case Yc:return i*t;case Zc:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case $c:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Ia:return i*t*4/s.components*s.byteLength;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Na:return Math.max(i,16)*Math.max(t,8)/4;case La:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Br:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zr:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s0(i){switch(i){case mn:case Hc:return{byteLength:1,components:1};case ks:case Wc:case Fn:return{byteLength:2,components:1};case Ea:case Ra:return{byteLength:2,components:4};case In:case Aa:case Ln:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function od(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function o0(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<h.length;p++){let m=h[u],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,m=h.length;p<m;p++){let x=h[p];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,c0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,y0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,P0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,j0=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
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
#endif`,rg=`uniform sampler2D dfgLUT;
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
}`,og=`
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define MATCAP
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
}`,Ex=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Lx=`#define STANDARD
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
}`,Fx=`#define TOON
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
}`,Dx=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Bx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:c0,alphamap_pars_fragment:u0,alphatest_fragment:h0,alphatest_pars_fragment:f0,aomap_fragment:d0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:x0,beginnormal_vertex:b0,bsdfs:_0,iridescence_fragment:v0,bumpmap_pars_fragment:y0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:T0,color_fragment:A0,color_pars_fragment:E0,color_pars_vertex:R0,color_vertex:C0,common:P0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:F0,displacementmap_vertex:D0,emissivemap_fragment:N0,emissivemap_pars_fragment:U0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:z0,envmap_common_pars_fragment:k0,envmap_pars_fragment:V0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:j0,envmap_vertex:H0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:q0,fog_pars_fragment:Y0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:Z0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:K0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:hg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:_g,morphinstance_vertex:vg,morphcolor_vertex:yg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Sg,morphtarget_vertex:wg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Eg,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Dg,opaque_fragment:Ng,packing:Ug,premultiplied_alpha_fragment:Og,project_vertex:Bg,dithering_fragment:zg,dithering_pars_fragment:kg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:$g,skinning_vertex:Zg,skinnormal_vertex:Jg,specularmap_fragment:Kg,specularmap_pars_fragment:Qg,tonemapping_fragment:jg,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:ux,cube_vert:hx,cube_frag:fx,depth_vert:dx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:xx,equirect_frag:bx,linedashed_vert:_x,linedashed_frag:vx,meshbasic_vert:yx,meshbasic_frag:Mx,meshlambert_vert:Sx,meshlambert_frag:wx,meshmatcap_vert:Tx,meshmatcap_frag:Ax,meshnormal_vert:Ex,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Lx,meshtoon_vert:Fx,meshtoon_frag:Dx,points_vert:Nx,points_frag:Ux,shadow_vert:Ox,shadow_frag:Bx,sprite_vert:zx,sprite_frag:kx},bt={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},$n={basic:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new nt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([bt.points,bt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([bt.common,bt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([bt.sprite,bt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:je([bt.common,bt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:je([bt.lights,bt.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$n.physical={uniforms:je([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var ul={r:0,b:0,g:0},Vx=new Se,ad=new Gt;ad.set(-1,0,0,0,1,0,0,0,1);function Gx(i,t,e,n,s,r){let o=new nt(0),a=s===!0?0:1,l,c,f=null,h=0,u=null;function p(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function m(_){let y=!1,v=p(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,y){let v=p(y);v&&(v.isCubeTexture||v.mapping===Lr)?(c===void 0&&(c=new Wt(new Os(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ts($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ad),c.material.toneMapped=te.getTransfer(v.colorSpace)!==ue,(f!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Wt(new vn(2,2),new dn({name:"BackgroundMaterial",uniforms:ts($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,h=v.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(ul,tu(i)),e.buffers.color.setClear(ul.r,ul.g,ul.b,y,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:d}}function Hx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(A,L,I,R,F){let U=!1,O=h(A,R,I,L);r!==O&&(r=O,c(r.object)),U=p(A,R,I,F),U&&m(A,R,I,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,v(A,L,I,R),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function f(A){return i.deleteVertexArray(A)}function h(A,L,I,R){let F=R.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let O=A.isInstancedMesh===!0?A.id:0,V=U[O];V===void 0&&(V={},U[O]=V);let z=V[I.id];z===void 0&&(z={},V[I.id]=z);let B=z[F];return B===void 0&&(B=u(l()),z[F]=B),B}function u(A){let L=[],I=[],R=[];for(let F=0;F<e;F++)L[F]=0,I[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:R,object:A,attributes:{},index:null}}function p(A,L,I,R){let F=r.attributes,U=L.attributes,O=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let X=F[z],tt=U[z];if(tt===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(tt=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(tt=A.instanceColor)),X===void 0||X.attribute!==tt||tt&&X.data!==tt.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function m(A,L,I,R){let F={},U=L.attributes,O=0,V=I.getAttributes();for(let z in V)if(V[z].location>=0){let X=U[z];X===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(X=A.instanceColor));let tt={};tt.attribute=X,X&&X.data&&(tt.data=X.data),F[z]=tt,O++}r.attributes=F,r.attributesNum=O,r.index=R}function x(){let A=r.newAttributes;for(let L=0,I=A.length;L<I;L++)A[L]=0}function g(A){d(A,0)}function d(A,L){let I=r.newAttributes,R=r.enabledAttributes,F=r.attributeDivisors;I[A]=1,R[A]===0&&(i.enableVertexAttribArray(A),R[A]=1),F[A]!==L&&(i.vertexAttribDivisor(A,L),F[A]=L)}function _(){let A=r.newAttributes,L=r.enabledAttributes;for(let I=0,R=L.length;I<R;I++)L[I]!==A[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function y(A,L,I,R,F,U,O){O===!0?i.vertexAttribIPointer(A,L,I,F,U):i.vertexAttribPointer(A,L,I,R,F,U)}function v(A,L,I,R){x();let F=R.attributes,U=I.getAttributes(),O=L.defaultAttributeValues;for(let V in U){let z=U[V];if(z.location>=0){let B=F[V];if(B===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let X=B.normalized,tt=B.itemSize,j=t.get(B);if(j===void 0)continue;let ut=j.buffer,ct=j.type,Nt=j.bytesPerElement,q=ct===i.INT||ct===i.UNSIGNED_INT||B.gpuType===Aa;if(B.isInterleavedBufferAttribute){let J=B.data,at=J.stride,wt=B.offset;if(J.isInstancedInterleavedBuffer){for(let gt=0;gt<z.locationSize;gt++)d(z.location+gt,J.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let gt=0;gt<z.locationSize;gt++)g(z.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let gt=0;gt<z.locationSize;gt++)y(z.location+gt,tt/z.locationSize,ct,X,at*Nt,(wt+tt/z.locationSize*gt)*Nt,q)}else{if(B.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)d(z.location+J,B.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let J=0;J<z.locationSize;J++)g(z.location+J);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let J=0;J<z.locationSize;J++)y(z.location+J,tt/z.locationSize,ct,X,tt*Nt,tt/z.locationSize*J*Nt,q)}}else if(O!==void 0){let X=O[V];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(z.location,X);break;case 3:i.vertexAttrib3fv(z.location,X);break;case 4:i.vertexAttrib4fv(z.location,X);break;default:i.vertexAttrib1fv(z.location,X)}}}}_()}function M(){w();for(let A in n){let L=n[A];for(let I in L){let R=L[I];for(let F in R){let U=R[F];for(let O in U)f(U[O].object),delete U[O];delete R[F]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let L=n[A.id];for(let I in L){let R=L[I];for(let F in R){let U=R[F];for(let O in U)f(U[O].object),delete U[O];delete R[F]}}delete n[A.id]}function C(A){for(let L in n){let I=n[L];for(let R in I){let F=I[R];if(F[A.id]===void 0)continue;let U=F[A.id];for(let O in U)f(U[O].object),delete U[O];delete F[A.id]}}}function b(A){for(let L in n){let I=n[L],R=A.isInstancedMesh===!0?A.id:0,F=I[R];if(F!==void 0){for(let U in F){let O=F[U];for(let V in O)f(O[V].object),delete O[V];delete F[U]}delete I[R],Object.keys(I).length===0&&delete n[L]}}}function w(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function Wx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let b=C===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mn&&C!==Ln&&!b&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Ot("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:S}}function qx(i){let t=this,e=null,n=0,s=!1,r=!1,o=new En,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,p){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?f(null):c();else{let _=r?0:n,y=_*4,v=d.clippingState||null;l.value=v,v=f(m,u,y,p);for(let M=0;M!==y;++M)v[M]=e[M];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,p,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let d=p+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Hs=4,Yx=6,$x=20,Zx=256,kr=new ri,zf=new nt,cu=null,uu=0,hu=0,fu=!1,Jx=new k,es=new k,fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Jx}=r;cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,uu,hu),this._renderer.xr.enabled=fu,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Fn,format:yn,colorSpace:hr,depthBuffer:!1},s=kf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kx(r)),this._blurMaterial=jx(r,t,e),this._ggxMaterial=Qx(r,t,e)}return s}_compileMaterial(t){let e=new Wt(new Ht,t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s,r){let l=new Je(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(zf),h.toneMapping=Pn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Os,new ie({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,d=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,d=!0):(g.color.copy(zf),d=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[y]));let M=this._cubeSize;Gs(s,v*M,y>2?M:0,M,M),h.setRenderTarget(s),d&&h.render(x,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ai||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,p=h*u,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Hs?n-m+Hs:0),d=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=m-e,Gs(r,g,d,3*x,2*x),s.setRenderTarget(r),s.render(a,kr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Gs(t,g,d,3*x,2*x),s.setRenderTarget(t),s.render(a,kr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-Hs?s-this._lodMax+Hs:0),u=4*(this._cubeSize-f);Gs(e,h,u,3*f,2*f),o.setRenderTarget(e),o.render(l,kr)}};function Kx(i){let t=[],e=[],n=i,s=i-Hs+1+Yx;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,m=new Float32Array(p*u*h),x=new Float32Array(p*u*h);for(let d=0;d<h;d++){let _=d%3*2/3-1,y=d>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];m.set(v,p*u*d);for(let M=0;M<u;M++){let S=f[M*2]*2-1,C=f[M*2+1]*2-1;d===0?es.set(1,C,S):d===1?es.set(-S,1,-C):d===2?es.set(-S,C,1):d===3?es.set(-1,C,-S):d===4?es.set(-S,-1,C):es.set(S,C,-1),es.toArray(x,(d*u+M)*p)}}let g=new Ht;g.setAttribute("position",new fn(m,p)),g.setAttribute("outputDirection",new fn(x,p)),e.push(new Wt(g,null)),n>Hs&&n--}return{lodMeshes:e,sizeLods:t}}function kf(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qx(i,t,e){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function jx(i,t,e){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:$x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Vf(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Gf(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dl=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Os(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Xn});r.uniforms.tEquirect.value=e;let o=new Wt(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Xe),new va(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function tb(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Sa||p===wa)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new dl(m.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,m=p===Sa||p===wa,x=p===Ai||p===ji;if(m||x){let g=e.get(u),d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new fl(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new fl(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,p){return p===Sa?u.mapping=Ai:p===wa&&(u.mapping=ji),u}function l(u){let p=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&p++;return p===m}function c(u){let p=u.target;p.removeEventListener("dispose",c);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(u){let p=u.target;p.removeEventListener("dispose",f);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function eb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function nb(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(h){let u=[],p=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(p!==null){let _=p.array;x=p.version;for(let y=0,v=_.length;y<v;y+=3){let M=_[y+0],S=_[y+1],C=_[y+2];u.push(M,S,S,C,C,M)}}else{let _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let M=y+0,S=y+1,C=y+2;u.push(M,S,S,C,C,M)}}let g=new(m.count>=65535?Yi:xr)(u,1);g.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,g)}function f(h){let u=r.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function ib(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*o),e.update(u,n,1)}function c(h,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,h*o,p),e.update(u,n,p))}function f(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,p);let x=0;for(let g=0;g<p;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function sb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rb(i,t,e){let n=new WeakMap,s=new Re;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;p===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*h),C=new gr(S,v,M,h);C.type=Ln,C.needsUpdate=!0;let b=y*4;for(let E=0;E<h;E++){let A=g[E],L=d[E],I=_[E],R=v*M*4*E;for(let F=0;F<A.count;F++){let U=F*b;p===!0&&(s.fromBufferAttribute(A,F),S[R+U+0]=s.x,S[R+U+1]=s.y,S[R+U+2]=s.z,S[R+U+3]=0),m===!0&&(s.fromBufferAttribute(L,F),S[R+U+4]=s.x,S[R+U+5]=s.y,S[R+U+6]=s.z,S[R+U+7]=0),x===!0&&(s.fromBufferAttribute(I,F),S[R+U+8]=s.x,S[R+U+9]=s.y,S[R+U+10]=s.z,S[R+U+11]=I.itemSize===4?s.w:1)}}u={count:h,texture:C,size:new Vt(v,M)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ob(i,t,e,n,s){let r=new WeakMap;function o(c){let f=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return u}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var ab={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[Bc]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function lb(i,t,e,n,s,r){let o=new Ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ht;c.setAttribute("position",new Dt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dt([0,2,0,0,2,0],2));let f=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Wt(c,f),u=new ri(-1,1,1,-1,0,1),p=null,m=null,x=!1,g,d=null,_=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<_.length;S++){let C=_[S];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let M=o.width,S=o.height;_.length>0&&a===null&&(a=new Ke(M,S,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(M,S,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let b=_[C];b.setSize&&b.setSize(M,S)}},this.begin=function(v,M){if(x||v.toneMapping===Pn&&_.length===0)return!1;if(d=M,M!==null){let S=M.width,C=M.height;(o.width!==S||o.height!==C)&&this.setSize(S,C)}return y===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Pn,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=g,x=!0;let S=o,C=a;for(let b=0;b<_.length;b++){let w=_[b];w.enabled!==!1&&(w.render(v,C,S,M),w.needsSwap!==!1&&(S=C,C=C===a?l:a))}if(p!==v.outputColorSpace||m!==v.toneMapping){p=v.outputColorSpace,m=v.toneMapping,f.defines={},te.getTransfer(p)===ue&&(f.defines.SRGB_TRANSFER="");let b=ab[m];b&&(f.defines[b]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(d),v.render(h,u),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var ld=new sn,mu=new yi(1,1),cd=new gr,ud=new ea,hd=new vr,Hf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Hf[s];if(r===void 0&&(r=new Float32Array(s),Hf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ml(i,t){let e=Wf[t];e===void 0&&(e=new Int32Array(t),Wf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ub(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function db(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Yf.set(n),i.uniformMatrix2fv(this.addr,!1,Yf),Be(e,n)}}function pb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;qf.set(n),i.uniformMatrix3fv(this.addr,!1,qf),Be(e,n)}}function mb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Xf.set(n),i.uniformMatrix4fv(this.addr,!1,Xf),Be(e,n)}}function gb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function bb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function _b(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function vb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Mb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function wb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=mu):r=ld,e.setTexture2D(t||r,s)}function Tb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ud,s)}function Ab(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hd,s)}function Eb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function Rb(i){switch(i){case 5126:return cb;case 35664:return ub;case 35665:return hb;case 35666:return fb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return xb;case 35668:case 35672:return bb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return yb;case 36295:return Mb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Eb}}function Cb(i,t){i.uniform1fv(this.addr,t)}function Pb(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Ib(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Lb(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Fb(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Db(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nb(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ub(i,t){i.uniform1iv(this.addr,t)}function Ob(i,t){i.uniform2iv(this.addr,t)}function Bb(i,t){i.uniform3iv(this.addr,t)}function zb(i,t){i.uniform4iv(this.addr,t)}function kb(i,t){i.uniform1uiv(this.addr,t)}function Vb(i,t){i.uniform2uiv(this.addr,t)}function Gb(i,t){i.uniform3uiv(this.addr,t)}function Hb(i,t){i.uniform4uiv(this.addr,t)}function Wb(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=mu:o=ld;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Xb(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ud,r[o])}function qb(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hd,r[o])}function Yb(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cd,r[o])}function $b(i){switch(i){case 5126:return Cb;case 35664:return Pb;case 35665:return Ib;case 35666:return Lb;case 35674:return Fb;case 35675:return Db;case 35676:return Nb;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return kb;case 36294:return Vb;case 36295:return Gb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}var gu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rb(e.type)}},xu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$b(e.type)}},bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},du=/(\w+)(\])?(\[|\.)?/g;function $f(i,t){i.seq.push(t),i.map[t.id]=t}function Zb(i,t,e){let n=i.name,s=n.length;for(du.lastIndex=0;;){let r=du.exec(n),o=du.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$f(e,c===void 0?new gu(a,i,t):new xu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new bu(a),$f(e,h)),e=h}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Zb(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Zf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jb=37297,Kb=0;function Qb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jf=new Gt;function jb(i){te._getMatrix(Jf,te.workingColorSpace,i);let t=`mat3( ${Jf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qb(i.getShaderSource(t),a)}else return r}function t_(i,t){let e=jb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var e_={[Nc]:"Linear",[Uc]:"Reinhard",[Oc]:"Cineon",[Bc]:"ACESFilmic",[kc]:"AgX",[Vc]:"Neutral",[zc]:"Custom"};function n_(i,t){let e=e_[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hl=new k;function i_(){te.getLuminanceCoefficients(hl);let i=hl.x.toFixed(4),t=hl.y.toFixed(4),e=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function r_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gr(i){return i!==""}function Qf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(i){return i.replace(a_,c_)}var l_=new Map;function c_(i,t){let e=Yt[t];if(e===void 0){let n=l_.get(t);if(n!==void 0)e=Yt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _u(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(u_,h_)}function h_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ed(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var f_={[Pr]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function d_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var p_={[Ai]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function m_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":p_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var g_={[ji]:"ENVMAP_MODE_REFRACTION"};function x_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":g_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b_={[Dc]:"ENVMAP_BLENDING_MULTIPLY",[pf]:"ENVMAP_BLENDING_MIX",[mf]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b_[i.combine]||"ENVMAP_BLENDING_NONE"}function v_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function y_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=d_(e),c=m_(e),f=x_(e),h=__(e),u=v_(e),p=s_(e),m=r_(r),x=s.createProgram(),g,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gr).join(`
`),d.length>0&&(d+=`
`)):(g=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),d=[ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?n_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),i_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=_u(o),o=Qf(o,e),o=jf(o,e),a=_u(a),a=Qf(a,e),a=jf(a,e),o=td(o),a=td(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=_+g+o,v=_+d+a,M=Zf(s,s.VERTEX_SHADER,y),S=Zf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,M),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(A){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(S)||"",F=L.trim(),U=I.trim(),O=R.trim(),V=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let B=Kf(s,M,"vertex"),X=Kf(s,S,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+B+`
`+X)}else F!==""?Ot("WebGLProgram: Program Info Log:",F):(U===""||O==="")&&(z=!1);z&&(A.diagnostics={runnable:V,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:O,prefix:d}})}s.deleteShader(M),s.deleteShader(S),b=new Ws(s,x),w=o_(s,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Jb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kb++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var M_=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yu(t),e.set(t,n)),n}},yu=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function S_(i){return i===Ci||i===Br||i===zr}function w_(i,t,e,n,s,r){let o=new Ns,a=new vu,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,w,E,A,L,I){let R=A.fog,F=L.geometry,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?A.environment:null,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,V=t.get(b.envMap||U,O),z=V&&V.mapping===Lr?V.image.height:null,B=p[b.type];b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&Ot("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let X=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=X!==void 0?X.length:0,j=0;F.morphAttributes.position!==void 0&&(j=1),F.morphAttributes.normal!==void 0&&(j=2),F.morphAttributes.color!==void 0&&(j=3);let ut,ct,Nt,q;if(B){let be=$n[B];ut=be.vertexShader,ct=be.fragmentShader}else{ut=b.vertexShader,ct=b.fragmentShader;let be=a.getVertexShaderStage(b),le=a.getFragmentShaderStage(b);a.update(b,be,le),Nt=be.id,q=le.id}let J=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),wt=L.isInstancedMesh===!0,gt=L.isBatchedMesh===!0,Bt=!!b.map,jt=!!b.matcap,Ft=!!V,$t=!!b.aoMap,se=!!b.lightMap,Zt=!!b.bumpMap&&b.wireframe===!1,we=!!b.normalMap,ke=!!b.displacementMap,an=!!b.emissiveMap,Te=!!b.metalnessMap,Fe=!!b.roughnessMap,W=b.anisotropy>0,qe=b.clearcoat>0,de=b.dispersion>0,N=b.retroreflectivity>0,T=b.iridescence>0,Y=b.sheen>0,K=b.transmission>0,et=W&&!!b.anisotropyMap,lt=qe&&!!b.clearcoatMap,ht=qe&&!!b.clearcoatNormalMap,it=qe&&!!b.clearcoatRoughnessMap,rt=T&&!!b.iridescenceMap,ft=T&&!!b.iridescenceThicknessMap,Pt=Y&&!!b.sheenColorMap,xt=Y&&!!b.sheenRoughnessMap,dt=!!b.specularMap,It=!!b.specularColorMap,Ut=!!b.specularIntensityMap,Xt=K&&!!b.transmissionMap,H=K&&!!b.thicknessMap,pt=!!b.gradientMap,st=!!b.alphaMap,mt=b.alphaTest>0,yt=!!b.alphaHash,ot=!!b.extensions,Lt=Pn;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Rt={shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:ut,fragmentShader:ct,defines:b.defines,customVertexShaderID:Nt,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:gt,batchingColor:gt&&L._colorsTexture!==null,instancing:wt,instancingColor:wt&&L.instanceColor!==null,instancingMorph:wt&&L.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Bt,matcap:jt,envMap:Ft,envMapMode:Ft&&V.mapping,envMapCubeUVHeight:z,aoMap:$t,lightMap:se,bumpMap:Zt,normalMap:we,displacementMap:ke,emissiveMap:an,normalMapObjectSpace:we&&b.normalMapType===bf,normalMapTangentSpace:we&&b.normalMapType===Jc,packedNormalMap:we&&b.normalMapType===Jc&&S_(b.normalMap.format),metalnessMap:Te,roughnessMap:Fe,anisotropy:W,anisotropyMap:et,clearcoat:qe,clearcoatMap:lt,clearcoatNormalMap:ht,clearcoatRoughnessMap:it,dispersion:de,retroreflection:N,iridescence:T,iridescenceMap:rt,iridescenceThicknessMap:ft,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:xt,specularMap:dt,specularColorMap:It,specularIntensityMap:Ut,transmission:K,transmissionMap:Xt,thicknessMap:H,gradientMap:pt,opaque:b.transparent===!1&&b.blending===qn&&b.alphaToCoverage===!1,alphaMap:st,alphaTest:mt,alphaHash:yt,combine:b.combine,mapUv:Bt&&m(b.map.channel),aoMapUv:$t&&m(b.aoMap.channel),lightMapUv:se&&m(b.lightMap.channel),bumpMapUv:Zt&&m(b.bumpMap.channel),normalMapUv:we&&m(b.normalMap.channel),displacementMapUv:ke&&m(b.displacementMap.channel),emissiveMapUv:an&&m(b.emissiveMap.channel),metalnessMapUv:Te&&m(b.metalnessMap.channel),roughnessMapUv:Fe&&m(b.roughnessMap.channel),anisotropyMapUv:et&&m(b.anisotropyMap.channel),clearcoatMapUv:lt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:xt&&m(b.sheenRoughnessMap.channel),specularMapUv:dt&&m(b.specularMap.channel),specularColorMapUv:It&&m(b.specularColorMap.channel),specularIntensityMapUv:Ut&&m(b.specularIntensityMap.channel),transmissionMapUv:Xt&&m(b.transmissionMap.channel),thicknessMapUv:H&&m(b.thicknessMap.channel),alphaMapUv:st&&m(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(we||W),vertexNormals:!!F.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Bt||st),fog:!!R,useFog:b.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||F.attributes.normal===void 0&&we===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:at,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:j,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Bt&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:an&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ve,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function g(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)w.push(E),w.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(d(w,b),_(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function d(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numSunLights),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numSunLightShadows),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let w=p[b.type],E;if(w){let A=$n[w];E=Uf.clone(A.uniforms)}else E=b.uniforms;return E}function v(b,w){let E=f.get(w);return E!==void 0?++E.usedTimes:(E=new y_(i,w,b,s),c.push(E),f.set(w,E)),E}function M(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),f.delete(b.cacheKey),b.destroy()}}function S(b){a.remove(b)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:C}}function T_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function A_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function id(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,x,g,d){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:d},i[t]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=m,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=g,_.group=d),t++,_}function l(u,p,m,x,g,d,_){_.reversedDepth===!0&&(g=-g);let y=a(u,p,m,x,g,d);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):e.push(y)}function c(u,p,m,x,g,d){let _=a(u,p,m,x,g,d);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function f(u,p){e.length>1&&e.sort(u||A_),n.length>1&&n.sort(p||nd),s.length>1&&s.sort(p||nd)}function h(){for(let u=t,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function E_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new id,i.set(n,[o])):s>=r.length?(o=new id,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function R_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new nt};break;case"SpotLight":e={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":e={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function C_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L_(i){let t=new R_,e=C_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new Se,o=new Se;function a(c){let f=0,h=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,_=0,y=0,v=0,M=0,S=0,C=0,b=0,w=0,E=0;c.sort(I_);for(let L=0,I=c.length;L<I;L++){let R=c[L],F=R.color,U=R.intensity,O=R.distance,V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ci?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=F.r*U,h+=F.g*U,u+=F.b*U;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],U);E++}else if(R.isSunLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let B=R.shadow,X=e.get(R);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=V;let tt=B.getViewportCount();for(let j=0;j<tt;j++)n.sunShadowMatrix[x+j]=B.getMatrix(j),n.sunShadowCascade[x+j]=B._cascadeData[j];x+=tt,m++}n.sun[p]=z,p++}else if(R.isDirectionalLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let B=R.shadow,X=e.get(R);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=R.shadow.matrix,M++}n.directional[g]=z,g++}else if(R.isSpotLight){let z=t.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(F).multiplyScalar(U),z.distance=O,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;let B=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,B.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,R.castShadow){let X=e.get(R);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=V,C++}_++}else if(R.isRectAreaLight){let z=t.get(R);z.color.copy(F).multiplyScalar(U),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=z,y++}else if(R.isPointLight){let z=t.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let B=R.shadow,X=e.get(R);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=V,n.pointShadowMatrix[d]=R.shadow.matrix,S++}n.point[d]=z,d++}else if(R.isHemisphereLight){let z=t.get(R);z.skyColor.copy(R.color).multiplyScalar(U),z.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[v]=z,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let A=n.hash;(A.sunLength!==p||A.directionalLength!==g||A.pointLength!==d||A.spotLength!==_||A.rectAreaLength!==y||A.hemiLength!==v||A.numSunShadows!==m||A.numDirectionalShadows!==M||A.numPointShadows!==S||A.numSpotShadows!==C||A.numSpotMaps!==b||A.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=g,n.spot.length=_,n.rectArea.length=y,n.point.length=d,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,A.sunLength=p,A.directionalLength=g,A.pointLength=d,A.spotLength=_,A.rectAreaLength=y,A.hemiLength=v,A.numSunShadows=m,A.numDirectionalShadows=M,A.numPointShadows=S,A.numSpotShadows=C,A.numSpotMaps=b,A.numLightProbes=E,n.version=P_++)}function l(c,f){let h=0,u=0,p=0,m=0,x=0,g=0,d=f.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(d),h++}else if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(v.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),m++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:a,setupView:l,state:n}}function sd(i){let t=new L_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function f(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function F_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new sd(i),t.set(s,[a])):r>=o.length?(a=new sd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`,U_=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],O_=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],rd=new Se,Vr=new k,pu=new k;function B_(i,t,e){let n=new _r,s=new Vt,r=new Vt,o=new Re,a=new la,l=new ca,c={},f=e.maxTextureSize,h={[Ti]:on,[on]:Ti,[ve]:ve},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:D_,fragmentShader:N_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ht;m.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let d=this.type;this.render=function(S,C,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===$h&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pr);let w=i.getRenderTarget(),E=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Xn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=d!==this.type;I&&C.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(F=>F.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,F=S.length;R<F;R++){let U=S[R],O=U.shadow;if(O===void 0){Ot("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=z,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===zs){if(U.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ke(s.x,s.y,{format:Ci,type:Fn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new yi(s.x,s.y,Ln),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=kn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ge,O.map.depthTexture.magFilter=Ge}else U.isPointLight?(O.map=new dl(s.x),O.map.depthTexture=new oa(s.x,In)):(O.map=new Ke(s.x,s.y),O.map.depthTexture=new yi(s.x,s.y,In)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=kn,this.type===Pr?(O.map.depthTexture.compareFunction=z?cl:ll,O.map.depthTexture.minFilter=Xe,O.map.depthTexture.magFilter=Xe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ge,O.map.depthTexture.magFilter=Ge);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let B=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,b);for(let X=0;X<B;X++){let tt=O.getCamera(X);if(U.isPointLight){let j=O.camera,ut=O.matrix,ct=U.distance||j.far;ct!==j.far&&(j.far=ct,j.updateProjectionMatrix()),Vr.setFromMatrixPosition(U.matrixWorld),j.position.copy(Vr),pu.copy(j.position),pu.add(U_[X]),j.up.copy(O_[X]),j.lookAt(pu),j.updateMatrixWorld(),ut.makeTranslation(-Vr.x,-Vr.y,-Vr.z),rd.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),O._frustum.setFromProjectionMatrix(rd,j.coordinateSystem,j.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,X),i.clear();else{X===0&&(i.setRenderTarget(O.map),i.clear());let j=O.getViewport(X);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),L.viewport(o)}n=O.getFrustum(X),v(C,b,tt,U,this.type)}O.isPointLightShadow!==!0&&this.type===zs&&_(O,b),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(w,E,A)};function _(S,C){let b=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ke(s.x,s.y,{format:Ci,type:Fn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,b,u,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,b,p,x,null)}function y(S,C,b,w){let E=null,A=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)E=A;else if(E=b.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=E.uuid,I=C.uuid,R=c[L];R===void 0&&(R={},c[L]=R);let F=R[I];F===void 0&&(F=E.clone(),R[I]=F,C.addEventListener("dispose",M)),E=F}if(E.visible=C.visible,E.wireframe=C.wireframe,w===zs?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=i.properties.get(E);L.light=b}return E}function v(S,C,b,w,E){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===zs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);let I=t.update(S),R=S.material;if(Array.isArray(R)){let F=I.groups;for(let U=0,O=F.length;U<O;U++){let V=F[U],z=R[V.materialIndex];if(z&&z.visible){let B=y(S,z,w,E);S.onBeforeShadow(i,S,C,b,I,B,V),i.renderBufferDirect(b,null,I,B,S,V),S.onAfterShadow(i,S,C,b,I,B,V)}}}else if(R.visible){let F=y(S,R,w,E);S.onBeforeShadow(i,S,C,b,I,F,null),i.renderBufferDirect(b,null,I,F,S,null),S.onAfterShadow(i,S,C,b,I,F,null)}}let L=S.children;for(let I=0,R=L.length;I<R;I++)v(L[I],C,b,w,E)}function M(S){S.target.removeEventListener("dispose",M);for(let b in c){let w=c[b],E=S.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function z_(i,t){function e(){let H=!1,pt=new Re,st=null,mt=new Re(0,0,0,0);return{setMask:function(yt){st!==yt&&!H&&(i.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){H=yt},setClear:function(yt,ot,Lt,Rt,be){be===!0&&(yt*=Rt,ot*=Rt,Lt*=Rt),pt.set(yt,ot,Lt,Rt),mt.equals(pt)===!1&&(i.clearColor(yt,ot,Lt,Rt),mt.copy(pt))},reset:function(){H=!1,st=null,mt.set(-1,0,0,0)}}}function n(){let H=!1,pt=!1,st=null,mt=null,yt=null;return{setReversed:function(ot){if(pt!==ot){let Lt=t.get("EXT_clip_control");ot?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),pt=ot;let Rt=yt;yt=null,this.setClear(Rt)}},getReversed:function(){return pt},setTest:function(ot){ot?J(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ot){st!==ot&&!H&&(i.depthMask(ot),st=ot)},setFunc:function(ot){if(pt&&(ot=Cf[ot]),mt!==ot){switch(ot){case Ho:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=ot}},setLocked:function(ot){H=ot},setClear:function(ot){yt!==ot&&(yt=ot,pt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){H=!1,st=null,mt=null,yt=null,pt=!1}}}function s(){let H=!1,pt=null,st=null,mt=null,yt=null,ot=null,Lt=null,Rt=null,be=null;return{setTest:function(le){H||(le?J(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(le){pt!==le&&!H&&(i.stencilMask(le),pt=le)},setFunc:function(le,Sn,Un){(st!==le||mt!==Sn||yt!==Un)&&(i.stencilFunc(le,Sn,Un),st=le,mt=Sn,yt=Un)},setOp:function(le,Sn,Un){(ot!==le||Lt!==Sn||Rt!==Un)&&(i.stencilOp(le,Sn,Un),ot=le,Lt=Sn,Rt=Un)},setLocked:function(le){H=le},setClear:function(le){be!==le&&(i.clearStencil(le),be=le)},reset:function(){H=!1,pt=null,st=null,mt=null,yt=null,ot=null,Lt=null,Rt=null,be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},p=new WeakMap,m=[],x=null,g=!1,d=null,_=null,y=null,v=null,M=null,S=null,C=null,b=new nt(0,0,0),w=0,E=!1,A=null,L=null,I=null,R=null,F=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=V>=2);let B=null,X={},tt=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ut=new Re().fromArray(tt),ct=new Re().fromArray(j);function Nt(H,pt,st,mt){let yt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(H,ot),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<st;Lt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(pt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return ot}let q={};q[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Ls),Zt(!1),we(Pc),J(i.CULL_FACE),$t(Xn);function J(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function at(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function wt(H,pt){return u[H]!==pt?(i.bindFramebuffer(H,pt),u[H]=pt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function gt(H,pt){let st=m,mt=!1;if(H){st=p.get(pt),st===void 0&&(st=[],p.set(pt,st));let yt=H.textures;if(st.length!==yt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Lt=yt.length;ot<Lt;ot++)st[ot]=i.COLOR_ATTACHMENT0+ot;st.length=yt.length,mt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,mt=!0);mt&&i.drawBuffers(st)}function Bt(H){return x!==H?(i.useProgram(H),x=H,!0):!1}let jt={[Qi]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[Kh]:i.FUNC_REVERSE_SUBTRACT};jt[Qh]=i.MIN,jt[jh]=i.MAX;let Ft={[tf]:i.ZERO,[ef]:i.ONE,[nf]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[cf]:i.SRC_ALPHA_SATURATE,[af]:i.DST_COLOR,[rf]:i.DST_ALPHA,[sf]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[lf]:i.ONE_MINUS_DST_COLOR,[of]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[hf]:i.ONE_MINUS_CONSTANT_COLOR,[ff]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(H,pt,st,mt,yt,ot,Lt,Rt,be,le){if(H===Xn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),H!==Zh){if(H!==d||le!==E){if((_!==Qi||M!==Qi)&&(i.blendEquation(i.FUNC_ADD),_=Qi,M=Qi),le)switch(H){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case he:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ir:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",H);break}else switch(H){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case he:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ir:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",H);break}y=null,v=null,S=null,C=null,b.set(0,0,0),w=0,d=H,E=le}return}yt=yt||pt,ot=ot||st,Lt=Lt||mt,(pt!==_||yt!==M)&&(i.blendEquationSeparate(jt[pt],jt[yt]),_=pt,M=yt),(st!==y||mt!==v||ot!==S||Lt!==C)&&(i.blendFuncSeparate(Ft[st],Ft[mt],Ft[ot],Ft[Lt]),y=st,v=mt,S=ot,C=Lt),(Rt.equals(b)===!1||be!==w)&&(i.blendColor(Rt.r,Rt.g,Rt.b,be),b.copy(Rt),w=be),d=H,E=!1}function se(H,pt){H.side===ve?at(i.CULL_FACE):J(i.CULL_FACE);let st=H.side===on;pt&&(st=!st),Zt(st),H.blending===qn&&H.transparent===!1?$t(Xn):$t(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let mt=H.stencilWrite;a.setTest(mt),mt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),an(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(H){A!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),A=H)}function we(H){H!==qh?(J(i.CULL_FACE),H!==L&&(H===Pc?i.cullFace(i.BACK):H===Yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),L=H}function ke(H){H!==I&&(O&&i.lineWidth(H),I=H)}function an(H,pt,st){H?(J(i.POLYGON_OFFSET_FILL),(R!==pt||F!==st)&&(R=pt,F=st,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,st))):at(i.POLYGON_OFFSET_FILL)}function Te(H){H?J(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Fe(H){H===void 0&&(H=i.TEXTURE0+U-1),B!==H&&(i.activeTexture(H),B=H)}function W(H,pt,st){st===void 0&&(B===null?st=i.TEXTURE0+U-1:st=B);let mt=X[st];mt===void 0&&(mt={type:void 0,texture:void 0},X[st]=mt),(mt.type!==H||mt.texture!==pt)&&(B!==st&&(i.activeTexture(st),B=st),i.bindTexture(H,pt||q[H]),mt.type=H,mt.texture=pt)}function qe(){let H=X[B];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function T(){try{i.texSubImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function Y(){try{i.texSubImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function lt(){try{i.texStorage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function ht(){try{i.texStorage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function it(){try{i.texImage2D(...arguments)}catch(H){zt("WebGLState:",H)}}function rt(){try{i.texImage3D(...arguments)}catch(H){zt("WebGLState:",H)}}function ft(H){return h[H]!==void 0?h[H]:i.getParameter(H)}function Pt(H,pt){h[H]!==pt&&(i.pixelStorei(H,pt),h[H]=pt)}function xt(H){ut.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ut.copy(H))}function dt(H){ct.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ct.copy(H))}function It(H,pt){let st=c.get(pt);st===void 0&&(st=new WeakMap,c.set(pt,st));let mt=st.get(H);mt===void 0&&(mt=i.getUniformBlockIndex(pt,H.name),st.set(H,mt))}function Ut(H,pt){let mt=c.get(pt).get(H);l.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,H.__bindingPointIndex),l.set(pt,mt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},B=null,X={},u={},p=new WeakMap,m=[],x=null,g=!1,d=null,_=null,y=null,v=null,M=null,S=null,C=null,b=new nt(0,0,0),w=0,E=!1,A=null,L=null,I=null,R=null,F=null,ut.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:at,bindFramebuffer:wt,drawBuffers:gt,useProgram:Bt,setBlending:$t,setMaterial:se,setFlipSided:Zt,setCullFace:we,setLineWidth:ke,setPolygonOffset:an,setScissorTest:Te,activeTexture:Fe,bindTexture:W,unbindTexture:qe,compressedTexImage2D:de,compressedTexImage3D:N,texImage2D:it,texImage3D:rt,pixelStorei:Pt,getParameter:ft,updateUBOMapping:It,uniformBlockBinding:Ut,texStorage2D:lt,texStorage3D:ht,texSubImage2D:T,texSubImage3D:Y,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:xt,viewport:dt,reset:Xt}}function k_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,f=new WeakMap,h=new Set,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return m?new OffscreenCanvas(N,T):pr("canvas")}function g(N,T,Y){let K=1,et=de(N);if((et.width>Y||et.height>Y)&&(K=Y/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let lt=Math.floor(K*et.width),ht=Math.floor(K*et.height);u===void 0&&(u=x(lt,ht));let it=T?x(lt,ht):u;return it.width=lt,it.height=ht,it.getContext("2d").drawImage(N,0,0,lt,ht),Ot("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+lt+"x"+ht+")."),it}else return"data"in N&&Ot("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),N;return N}function d(N){return N.generateMipmaps}function _(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(N,T,Y,K,et,lt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ht;K&&(ht=t.get("EXT_texture_norm16"),ht||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=T;if(T===i.RED&&(Y===i.FLOAT&&(it=i.R32F),Y===i.HALF_FLOAT&&(it=i.R16F),Y===i.UNSIGNED_BYTE&&(it=i.R8),Y===i.UNSIGNED_SHORT&&ht&&(it=ht.R16_EXT),Y===i.SHORT&&ht&&(it=ht.R16_SNORM_EXT)),T===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.R8UI),Y===i.UNSIGNED_SHORT&&(it=i.R16UI),Y===i.UNSIGNED_INT&&(it=i.R32UI),Y===i.BYTE&&(it=i.R8I),Y===i.SHORT&&(it=i.R16I),Y===i.INT&&(it=i.R32I)),T===i.RG&&(Y===i.FLOAT&&(it=i.RG32F),Y===i.HALF_FLOAT&&(it=i.RG16F),Y===i.UNSIGNED_BYTE&&(it=i.RG8),Y===i.UNSIGNED_SHORT&&ht&&(it=ht.RG16_EXT),Y===i.SHORT&&ht&&(it=ht.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RG8UI),Y===i.UNSIGNED_SHORT&&(it=i.RG16UI),Y===i.UNSIGNED_INT&&(it=i.RG32UI),Y===i.BYTE&&(it=i.RG8I),Y===i.SHORT&&(it=i.RG16I),Y===i.INT&&(it=i.RG32I)),T===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(it=i.RGB16UI),Y===i.UNSIGNED_INT&&(it=i.RGB32UI),Y===i.BYTE&&(it=i.RGB8I),Y===i.SHORT&&(it=i.RGB16I),Y===i.INT&&(it=i.RGB32I)),T===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),Y===i.UNSIGNED_INT&&(it=i.RGBA32UI),Y===i.BYTE&&(it=i.RGBA8I),Y===i.SHORT&&(it=i.RGBA16I),Y===i.INT&&(it=i.RGBA32I)),T===i.RGB&&(Y===i.UNSIGNED_SHORT&&ht&&(it=ht.RGB16_EXT),Y===i.SHORT&&ht&&(it=ht.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),T===i.RGBA){let rt=lt?fr:te.getTransfer(et);Y===i.FLOAT&&(it=i.RGBA32F),Y===i.HALF_FLOAT&&(it=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(it=rt===ue?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&ht&&(it=ht.RGBA16_EXT),Y===i.SHORT&&ht&&(it=ht.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(N,T){let Y;return N?T===null||T===In||T===Vs?Y=i.DEPTH24_STENCIL8:T===Ln?Y=i.DEPTH32F_STENCIL8:T===ks&&(Y=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===In||T===Vs?Y=i.DEPTH_COMPONENT24:T===Ln?Y=i.DEPTH_COMPONENT32F:T===ks&&(Y=i.DEPTH_COMPONENT16),Y}function S(N,T){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ge&&N.minFilter!==Xe?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function C(N){let T=N.target;T.removeEventListener("dispose",C),w(T),T.isVideoTexture&&f.delete(T),T.isHTMLTexture&&h.delete(T)}function b(N){let T=N.target;T.removeEventListener("dispose",b),A(T)}function w(N){let T=n.get(N);if(T.__webglInit===void 0)return;let Y=N.source,K=p.get(Y);if(K){let et=K[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&E(N),Object.keys(K).length===0&&p.delete(Y)}n.remove(N)}function E(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let Y=N.source,K=p.get(Y);delete K[T.__cacheKey],o.memory.textures--}function A(N){let T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let et=0;et<T.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(T.__webglFramebuffer[K][et]);else i.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)i.deleteFramebuffer(T.__webglFramebuffer[K]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Y=N.textures;for(let K=0,et=Y.length;K<et;K++){let lt=n.get(Y[K]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(Y[K])}n.remove(N)}let L=0;function I(){L=0}function R(){return L}function F(N){L=N}function U(){let N=L;return N>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,N}function O(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function V(N,T){let Y=n.get(N);if(N.isVideoTexture&&W(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let K=N.image;if(K===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,N,T);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+T)}function z(N,T){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){at(Y,N,T);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+T)}function B(N,T){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){at(Y,N,T);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+T)}function X(N,T){let Y=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){wt(Y,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+T)}let tt={[Wi]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},j={[Ge]:i.NEAREST,[gf]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ut={[vf]:i.NEVER,[Tf]:i.ALWAYS,[yf]:i.LESS,[ll]:i.LEQUAL,[Mf]:i.EQUAL,[cl]:i.GEQUAL,[Sf]:i.GREATER,[wf]:i.NOTEQUAL};function ct(N,T){if(T.type===Ln&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Xe||T.magFilter===Ta||T.magFilter===Fr||T.magFilter===Ei||T.minFilter===Xe||T.minFilter===Ta||T.minFilter===Fr||T.minFilter===Ei)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,tt[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,tt[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,tt[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,j[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ge||T.minFilter!==Fr&&T.minFilter!==Ei||T.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Nt(N,T){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",C));let K=T.source,et=p.get(K);et===void 0&&(et={},p.set(K,et));let lt=O(T);if(lt!==N.__cacheKey){et[lt]===void 0&&(et[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),et[lt].usedTimes++;let ht=et[N.__cacheKey];ht!==void 0&&(et[N.__cacheKey].usedTimes--,ht.usedTimes===0&&E(T)),N.__cacheKey=lt,N.__webglTexture=et[lt].texture}return Y}function q(N,T,Y){return Math.floor(Math.floor(N/Y)/T)}function J(N,T,Y,K){let lt=N.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,Y,K,T.data);else{lt.sort((Pt,xt)=>Pt.start-xt.start);let ht=0;for(let Pt=1;Pt<lt.length;Pt++){let xt=lt[ht],dt=lt[Pt],It=xt.start+xt.count,Ut=q(dt.start,T.width,4),Xt=q(xt.start,T.width,4);dt.start<=It+1&&Ut===Xt&&q(dt.start+dt.count-1,T.width,4)===Ut?xt.count=Math.max(xt.count,dt.start+dt.count-xt.start):(++ht,lt[ht]=dt)}lt.length=ht+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Pt=0,xt=lt.length;Pt<xt;Pt++){let dt=lt[Pt],It=Math.floor(dt.start/4),Ut=Math.ceil(dt.count/4),Xt=It%T.width,H=Math.floor(It/T.width),pt=Ut,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,Xt,H,pt,st,Y,K,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function at(N,T,Y){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);let et=Nt(N,T),lt=T.source;e.bindTexture(K,N.__webglTexture,i.TEXTURE0+Y);let ht=n.get(lt);if(lt.version!==ht.__version||et===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let st=te.getPrimaries(te.workingColorSpace),mt=T.colorSpace===oi?null:te.getPrimaries(T.colorSpace),yt=T.colorSpace===oi||st===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let rt=g(T.image,!1,s.maxTextureSize);rt=qe(T,rt);let ft=r.convert(T.format,T.colorSpace),Pt=r.convert(T.type),xt=v(T.internalFormat,ft,Pt,T.normalized,T.colorSpace,T.isVideoTexture);ct(K,T);let dt,It=T.mipmaps,Ut=T.isVideoTexture!==!0,Xt=ht.__version===void 0||et===!0,H=lt.dataReady,pt=S(T,rt);if(T.isDepthTexture)xt=M(T.format===Ri,T.type),Xt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,xt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,ft,Pt,null));else if(T.isDataTexture)if(It.length>0){Ut&&Xt&&e.texStorage2D(i.TEXTURE_2D,pt,xt,It[0].width,It[0].height);for(let st=0,mt=It.length;st<mt;st++)dt=It[st],Ut?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt.width,dt.height,ft,Pt,dt.data):e.texImage2D(i.TEXTURE_2D,st,xt,dt.width,dt.height,0,ft,Pt,dt.data);T.generateMipmaps=!1}else Ut?(Xt&&e.texStorage2D(i.TEXTURE_2D,pt,xt,rt.width,rt.height),H&&J(T,rt,ft,Pt)):e.texImage2D(i.TEXTURE_2D,0,xt,rt.width,rt.height,0,ft,Pt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ut&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,xt,It[0].width,It[0].height,rt.depth);for(let st=0,mt=It.length;st<mt;st++)if(dt=It[st],T.format!==yn)if(ft!==null)if(Ut){if(H)if(T.layerUpdates.size>0){let yt=iu(dt.width,dt.height,T.format,T.type);for(let ot of T.layerUpdates){let Lt=dt.data.subarray(ot*yt/dt.data.BYTES_PER_ELEMENT,(ot+1)*yt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ot,dt.width,dt.height,1,ft,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,rt.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,xt,dt.width,dt.height,rt.depth,0,dt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,rt.depth,ft,Pt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,xt,dt.width,dt.height,rt.depth,0,ft,Pt,dt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ut&&Xt&&e.texStorage2D(i.TEXTURE_2D,pt,xt,It[0].width,It[0].height);for(let st=0,mt=It.length;st<mt;st++)dt=It[st],T.format!==yn?ft!==null?Ut?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,xt,dt.width,dt.height,0,dt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt.width,dt.height,ft,Pt,dt.data):e.texImage2D(i.TEXTURE_2D,st,xt,dt.width,dt.height,0,ft,Pt,dt.data)}else if(T.isDataArrayTexture)if(Ut){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,xt,rt.width,rt.height,rt.depth),H)if(T.layerUpdates.size>0){let st=iu(rt.width,rt.height,T.format,T.type);for(let mt of T.layerUpdates){let yt=rt.data.subarray(mt*st/rt.data.BYTES_PER_ELEMENT,(mt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,rt.width,rt.height,1,ft,Pt,yt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ft,Pt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,rt.width,rt.height,rt.depth,0,ft,Pt,rt.data);else if(T.isData3DTexture)Ut?(Xt&&e.texStorage3D(i.TEXTURE_3D,pt,xt,rt.width,rt.height,rt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ft,Pt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,xt,rt.width,rt.height,rt.depth,0,ft,Pt,rt.data);else if(T.isFramebufferTexture){if(Xt)if(Ut)e.texStorage2D(i.TEXTURE_2D,pt,xt,rt.width,rt.height);else{let st=rt.width,mt=rt.height;for(let yt=0;yt<pt;yt++)e.texImage2D(i.TEXTURE_2D,yt,xt,st,mt,0,ft,Pt,null),st>>=1,mt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(T),st.onpaint=mt=>{let yt=mt.changedElements;for(let ot of h)yt.includes(ot.image)&&(ot.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let yt=i.RGBA,ot=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,ot,Lt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Ut&&Xt){let st=de(It[0]);e.texStorage2D(i.TEXTURE_2D,pt,xt,st.width,st.height)}for(let st=0,mt=It.length;st<mt;st++)dt=It[st],Ut?H&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft,Pt,dt):e.texImage2D(i.TEXTURE_2D,st,xt,ft,Pt,dt);T.generateMipmaps=!1}else if(Ut){if(Xt){let st=de(rt);e.texStorage2D(i.TEXTURE_2D,pt,xt,st.width,st.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Pt,rt)}else e.texImage2D(i.TEXTURE_2D,0,xt,ft,Pt,rt);d(T)&&_(K),ht.__version=lt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function wt(N,T,Y){if(T.image.length!==6)return;let K=Nt(N,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let lt=n.get(et);if(et.version!==lt.__version||K===!0){e.activeTexture(i.TEXTURE0+Y);let ht=te.getPrimaries(te.workingColorSpace),it=T.colorSpace===oi?null:te.getPrimaries(T.colorSpace),rt=T.colorSpace===oi||ht===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let ft=T.isCompressedTexture||T.image[0].isCompressedTexture,Pt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let ot=0;ot<6;ot++)!ft&&!Pt?xt[ot]=g(T.image[ot],!0,s.maxCubemapSize):xt[ot]=Pt?T.image[ot].image:T.image[ot],xt[ot]=qe(T,xt[ot]);let dt=xt[0],It=r.convert(T.format,T.colorSpace),Ut=r.convert(T.type),Xt=v(T.internalFormat,It,Ut,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,pt=lt.__version===void 0||K===!0,st=et.dataReady,mt=S(T,dt);ct(i.TEXTURE_CUBE_MAP,T);let yt;if(ft){H&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Xt,dt.width,dt.height);for(let ot=0;ot<6;ot++){yt=xt[ot].mipmaps;for(let Lt=0;Lt<yt.length;Lt++){let Rt=yt[Lt];T.format!==yn?It!==null?H?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,0,0,Rt.width,Rt.height,It,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,Xt,Rt.width,Rt.height,0,Rt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,0,0,Rt.width,Rt.height,It,Ut,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt,Xt,Rt.width,Rt.height,0,It,Ut,Rt.data)}}}else{if(yt=T.mipmaps,H&&pt){yt.length>0&&mt++;let ot=de(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Xt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Pt){H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,xt[ot].width,xt[ot].height,It,Ut,xt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Xt,xt[ot].width,xt[ot].height,0,It,Ut,xt[ot].data);for(let Lt=0;Lt<yt.length;Lt++){let be=yt[Lt].image[ot].image;H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,0,0,be.width,be.height,It,Ut,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,Xt,be.width,be.height,0,It,Ut,be.data)}}else{H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,It,Ut,xt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Xt,It,Ut,xt[ot]);for(let Lt=0;Lt<yt.length;Lt++){let Rt=yt[Lt];H?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,0,0,It,Ut,Rt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Lt+1,Xt,It,Ut,Rt.image[ot])}}}d(T)&&_(i.TEXTURE_CUBE_MAP),lt.__version=et.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function gt(N,T,Y,K,et,lt){let ht=r.convert(Y.format,Y.colorSpace),it=r.convert(Y.type),rt=v(Y.internalFormat,ht,it,Y.normalized,Y.colorSpace),ft=n.get(T),Pt=n.get(Y);if(Pt.__renderTarget=T,!ft.__hasExternalTextures){let xt=Math.max(1,T.width>>lt),dt=Math.max(1,T.height>>lt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,lt,rt,xt,dt,T.depth,0,ht,it,null):e.texImage2D(et,lt,rt,xt,dt,0,ht,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,Pt.__webglTexture,0,Te(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,Pt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(N,T,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let K=T.depthTexture,et=K&&K.isDepthTexture?K.type:null,lt=M(T.stencilBuffer,et),ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(T),lt,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(T),lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,lt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,N)}else{let K=T.textures;for(let et=0;et<K.length;et++){let lt=K[et],ht=r.convert(lt.format,lt.colorSpace),it=r.convert(lt.type),rt=v(lt.internalFormat,ht,it,lt.normalized,lt.colorSpace);Fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te(T),rt,T.width,T.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te(T),rt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,rt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(N,T,Y){let K=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(T.depthTexture);if(et.__renderTarget=T,(!et.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(et.__webglInit===void 0&&(et.__webglInit=!0,T.depthTexture.addEventListener("dispose",C)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ct(i.TEXTURE_CUBE_MAP,T.depthTexture);let ft=r.convert(T.depthTexture.format),Pt=r.convert(T.depthTexture.type),xt;T.depthTexture.format===kn?xt=i.DEPTH_COMPONENT24:T.depthTexture.format===Ri&&(xt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,xt,T.width,T.height,0,ft,Pt,null)}}else V(T.depthTexture,0);let lt=et.__webglTexture,ht=Te(T),it=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,rt=T.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===kn)Fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,lt,0);else if(T.depthTexture.format===Ri)Fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(N){let T=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let K=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){let et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=K}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let K=0;K<6;K++)jt(T.__webglFramebuffer[K],N,K);else{let K=N.texture.mipmaps;K&&K.length>0?jt(T.__webglFramebuffer[0],N,0):jt(T.__webglFramebuffer,N,0)}else if(Y){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),Bt(T.__webglDepthbuffer[K],N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}}else{let K=N.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Bt(T.__webglDepthbuffer,N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(N,T,Y){let K=n.get(N);T!==void 0&&gt(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ft(N)}function se(N){let T=N.texture,Y=n.get(N),K=n.get(T);N.addEventListener("dispose",b);let et=N.textures,lt=N.isWebGLCubeRenderTarget===!0,ht=et.length>1;if(ht||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),lt){Y.__webglFramebuffer=[];for(let it=0;it<6;it++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[it]=[];for(let rt=0;rt<T.mipmaps.length;rt++)Y.__webglFramebuffer[it][rt]=i.createFramebuffer()}else Y.__webglFramebuffer[it]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let it=0;it<T.mipmaps.length;it++)Y.__webglFramebuffer[it]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ht)for(let it=0,rt=et.length;it<rt;it++){let ft=n.get(et[it]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Fe(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let rt=et[it];Y.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[it]);let ft=r.convert(rt.format,rt.colorSpace),Pt=r.convert(rt.type),xt=v(rt.internalFormat,ft,Pt,rt.normalized,rt.colorSpace,N.isXRRenderTarget===!0),dt=Te(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,xt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,Y.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(Y.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ct(i.TEXTURE_CUBE_MAP,T);for(let it=0;it<6;it++)if(T.mipmaps&&T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)gt(Y.__webglFramebuffer[it][rt],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else gt(Y.__webglFramebuffer[it],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);d(T)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let it=0,rt=et.length;it<rt;it++){let ft=et[it],Pt=n.get(ft),xt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Pt.__webglTexture),ct(xt,ft),gt(Y.__webglFramebuffer,N,ft,i.COLOR_ATTACHMENT0+it,xt,0),d(ft)&&_(xt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,K.__webglTexture),ct(it,T),T.mipmaps&&T.mipmaps.length>0)for(let rt=0;rt<T.mipmaps.length;rt++)gt(Y.__webglFramebuffer[rt],N,T,i.COLOR_ATTACHMENT0,it,rt);else gt(Y.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,it,0);d(T)&&_(it),e.unbindTexture()}N.depthBuffer&&Ft(N)}function Zt(N){let T=N.textures;for(let Y=0,K=T.length;Y<K;Y++){let et=T[Y];if(d(et)){let lt=y(N),ht=n.get(et).__webglTexture;e.bindTexture(lt,ht),_(lt),e.unbindTexture()}}}let we=[],ke=[];function an(N){if(N.samples>0){if(Fe(N)===!1){let T=N.textures,Y=N.width,K=N.height,et=i.COLOR_BUFFER_BIT,lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(N),it=T.length>1;if(it)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let rt=N.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);let Pt=n.get(T[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,Y,K,0,0,Y,K,et,i.NEAREST),l===!0&&(we.length=0,ke.length=0,we.push(i.COLOR_ATTACHMENT0+ft),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(we.push(lt),ke.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);let Pt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Te(N){return Math.min(s.maxSamples,N.samples)}function Fe(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function W(N){let T=o.render.frame;f.get(N)!==T&&(f.set(N,T),N.update())}function qe(N,T){let Y=N.colorSpace,K=N.format,et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==hr&&Y!==oi&&(te.getTransfer(Y)===ue?(K!==yn||et!==mn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),T}function de(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=$t,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function V_(i,t){function e(n,s=oi){let r,o=te.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Wc)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===Aa)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===$c)return i.RGB;if(n===yn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===Dr||n===Nr||n===Ur||n===Or)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Fa||n===Da||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Oa||n===Ba||n===za||n===ka||n===Br||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Oa)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Br)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===Qa||n===ja||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===zr||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:G_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends Vn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new Mu,d={},_=e.getContextAttributes(),y=null,v=null,M=[],S=[],C=new Vt,b=null,w=null,E=new Je;E.viewport=new Re;let A=new Je;A.viewport=new Re;let L=[E,A],I=new ya,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=M[q];return J===void 0&&(J=new Us,M[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=M[q];return J===void 0&&(J=new Us,M[q]=J),J.getGripSpace()},this.getHand=function(q){let J=M[q];return J===void 0&&(J=new Us,M[q]=J),J.getHandSpace()};function U(q){let J=S.indexOf(q.inputSource);if(J===-1)return;let at=M[J];at!==void 0&&(at.update(q.inputSource,q.frame,c||o),at.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let q=0;q<M.length;q++){let J=S[q];J!==null&&(S[q]=null,M[q].disconnect(J))}R=null,F=null,g.reset();for(let q in d)delete d[q];if(t.setRenderTarget(y),p=null,u=null,h=null,s=null,v=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,wt=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Ri:kn,wt=_.stencil?Vs:In);let Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ke(u.textureWidth,u.textureHeight,{format:yn,type:mn,depthTexture:new yi(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ke(p.framebufferWidth,p.framebufferHeight,{format:yn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let J=0;J<q.removed.length;J++){let at=q.removed[J],wt=S.indexOf(at);wt>=0&&(S[wt]=null,M[wt].disconnect(at))}for(let J=0;J<q.added.length;J++){let at=q.added[J],wt=S.indexOf(at);if(wt===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=S.length){S.push(at),wt=Bt;break}else if(S[Bt]===null){S[Bt]=at,wt=Bt;break}if(wt===-1)break}let gt=M[wt];gt&&gt.connect(at)}}let z=new k,B=new k;function X(q,J,at){z.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(at.matrixWorld);let wt=z.distanceTo(B),gt=J.projectionMatrix.elements,Bt=at.projectionMatrix.elements,jt=gt[14]/(gt[10]-1),Ft=gt[14]/(gt[10]+1),$t=(gt[9]+1)/gt[5],se=(gt[9]-1)/gt[5],Zt=(gt[8]-1)/gt[0],we=(Bt[8]+1)/Bt[0],ke=jt*Zt,an=jt*we,Te=wt/(-Zt+we),Fe=Te*-Zt;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Fe),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),gt[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let W=jt+Te,qe=Ft+Te,de=ke-Fe,N=an+(wt-Fe),T=$t*Ft/qe*W,Y=se*Ft/qe*W;q.projectionMatrix.makePerspective(de,N,T,Y,W,qe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,at=q.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(at=g.depthFar)),I.near=A.near=E.near=J,I.far=A.far=E.far=at,(R!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,F=I.far),I.layers.mask=q.layers.mask|6,E.layers.mask=I.layers.mask&-5,A.layers.mask=I.layers.mask&-3;let wt=q.parent,gt=I.cameras;tt(I,wt);for(let Bt=0;Bt<gt.length;Bt++)tt(gt[Bt],wt);gt.length===2?X(I,E,A):I.projectionMatrix.copy(E.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),j(q,I,wt)};function j(q,J,at){at===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(q){return d[q]};let ut=null;function ct(q,J){if(f=J.getViewerPose(c||o),m=J,f!==null){let at=f.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let wt=!1;at.length!==I.cameras.length&&(I.cameras.length=0,wt=!0);for(let Ft=0;Ft<at.length;Ft++){let $t=at[Ft],se=null;if(p!==null)se=p.getViewport($t);else{let we=h.getViewSubImage(u,$t);se=we.viewport,Ft===0&&(t.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(v))}let Zt=L[Ft];Zt===void 0&&(Zt=new Je,Zt.layers.enable(Ft),Zt.viewport=new Re,L[Ft]=Zt),Zt.matrix.fromArray($t.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray($t.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(se.x,se.y,se.width,se.height),Ft===0&&(I.matrix.copy(Zt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),wt===!0&&I.cameras.push(Zt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ft=h.getDepthInformation(at[0]);Ft&&Ft.isValid&&Ft.texture&&g.init(Ft,s.renderState)}if(gt&&gt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let Ft=0;Ft<at.length;Ft++){let $t=at[Ft].camera;if($t){let se=d[$t];se||(se=new yr,d[$t]=se);let Zt=h.getCameraImage($t);se.sourceTexture=Zt}}}}for(let at=0;at<M.length;at++){let wt=S[at],gt=M[at];wt!==null&&gt!==void 0&&gt.update(wt,J,c||o)}ut&&ut(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let Nt=new od;Nt.setAnimationLoop(ct),this.setAnimationLoop=function(q){ut=q},this.dispose=function(){}}},W_=new Se,fd=new Gt;fd.set(-1,0,0,0,1,0,0,0,1);function X_(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,tu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,_,y,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),u(g,d),d.isMeshPhysicalMaterial&&p(g,d,v)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===on&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===on&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let _=t.get(d),y=_.envMap,v=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(fd),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=y*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let _=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=s[v.id];S===void 0&&(g(v),S=f(v),s[v.id]=S,v.addEventListener("dispose",_));let C=M.program;n.updateUBOMapping(v,C);let b=t.render.frame;r[v.id]!==b&&(u(v),r[v.id]=b)}function f(v){let M=h();v.__bindingPointIndex=M;let S=i.createBuffer(),C=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],S=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,w=S.length;b<w;b++){let E=S[b];if(Array.isArray(E))for(let A=0,L=E.length;A<L;A++)p(E[A],b,A,C);else p(E,b,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,S,C){if(x(v,M,S,C)===!0){let b=v.__offset,w=v.value;if(Array.isArray(w)){let E=0;for(let A=0;A<w.length;A++){let L=w[A],I=d(L);m(L,v.__data,E),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(E+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function m(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function x(v,M,S,C){let b=v.value,w=M+"_"+S;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:ArrayBuffer.isView(b)?C[w]=b.slice():C[w]=b.clone(),!0;{let E=C[w];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return C[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function g(v){let M=v.uniforms,S=0,C=16;for(let w=0,E=M.length;w<E;w++){let A=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,I=A.length;L<I;L++){let R=A[L],F=Array.isArray(R.value)?R.value:[R.value];for(let U=0,O=F.length;U<O;U++){let V=F[U],z=d(V),B=S%C,X=B%z.boundary,tt=B+X;S+=X,tt!==0&&C-tt<z.storage&&(S+=C-tt),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=z.storage}}}let b=S%C;return b>0&&(S+=C-b),v.__size=S,v.__cache={},this}function d(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function y(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var Y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function $_(){return Yn===null&&(Yn=new ia(Y_,16,16,Ci,Fn),Yn.name="DFG_LUT",Yn.minFilter=Xe,Yn.magFilter=Xe,Yn.wrapS=hn,Yn.wrapT=hn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Xs=class{constructor(t={}){let{canvas:e=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=p,g=new Set([Ia,Pa,Ca]),d=new Set([mn,In,ks,Vs,Ea,Ra]),_=new Uint32Array(4),y=new Int32Array(4),v=new k,M=null,S=null,C=[],b=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,A=!1,L=null,I=null,R=null,F=null;this._outputColorSpace=Pe;let U=0,O=0,V=null,z=-1,B=null,X=new Re,tt=new Re,j=null,ut=new nt(0),ct=0,Nt=e.width,q=e.height,J=1,at=null,wt=null,gt=new Re(0,0,Nt,q),Bt=new Re(0,0,Nt,q),jt=!1,Ft=new _r,$t=!1,se=!1,Zt=new Se,we=new k,ke=new Re,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Fe(){return V===null?J:1}let W=n;function qe(P,G){return e.getContext(P,G)}let de,N,T,Y,K,et,lt,ht,it,rt,ft,Pt,xt,dt,It,Ut,Xt,H,pt,st,mt,yt,ot;try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),W===null){let G="webgl2";if(W=qe(G,P),W===null)throw qe(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(P){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),zt("WebGLRenderer: "+P.message),P}function Lt(){de=new eb(W),de.init(),mt=new V_(W,de),N=new Xx(W,de,t,mt),T=new z_(W,de),N.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),I=W.createFramebuffer(),R=W.createFramebuffer(),F=W.createFramebuffer(),Y=new sb(W),K=new T_,et=new k_(W,de,T,K,N,mt,Y),lt=new tb(E),ht=new o0(W),yt=new Hx(W,ht),it=new nb(W,ht,Y,yt),rt=new ob(W,it,ht,yt,Y),H=new rb(W,N,et),It=new qx(K),ft=new w_(E,lt,de,N,yt,It),Pt=new X_(E,K),xt=new E_,dt=new F_(de),Xt=new Gx(E,lt,T,rt,m,l),Ut=new B_(E,rt,N),ot=new q_(W,Y,N,T),pt=new Wx(W,de,Y),st=new ib(W,de,Y),Y.programs=ft.programs,E.capabilities=N,E.extensions=de,E.properties=K,E.renderLists=xt,E.shadowMap=Ut,E.state=T,E.info=Y}x!==mn&&(w=new lb(x,e.width,e.height,a,s,r));let Rt=new Su(E,W);this.xr=Rt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let P=de.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=de.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(P){P!==void 0&&(J=P,this.setSize(Nt,q,!1))},this.getSize=function(P){return P.set(Nt,q)},this.setSize=function(P,G,Q=!0){if(Rt.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Nt=P,q=G,e.width=Math.floor(P*J),e.height=Math.floor(G*J),Q===!0&&(e.style.width=P+"px",e.style.height=G+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(Nt*J,q*J).floor()},this.setDrawingBufferSize=function(P,G,Q){Nt=P,q=G,J=Q,e.width=Math.floor(P*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(x===mn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(X)},this.getViewport=function(P){return P.copy(gt)},this.setViewport=function(P,G,Q,$){P.isVector4?gt.set(P.x,P.y,P.z,P.w):gt.set(P,G,Q,$),T.viewport(X.copy(gt).multiplyScalar(J).round())},this.getScissor=function(P){return P.copy(Bt)},this.setScissor=function(P,G,Q,$){P.isVector4?Bt.set(P.x,P.y,P.z,P.w):Bt.set(P,G,Q,$),T.scissor(tt.copy(Bt).multiplyScalar(J).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){T.setScissorTest(jt=P)},this.setOpaqueSort=function(P){at=P},this.setTransparentSort=function(P){wt=P},this.getClearColor=function(P){return P.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,Q=!0){let $=0;if(P){let Z=!1;if(V!==null){let vt=V.texture.format;Z=g.has(vt)}if(Z){let vt=V.texture.type,Tt=d.has(vt),_t=Xt.getClearColor(),At=Xt.getClearAlpha(),Ct=_t.r,qt=_t.g,Jt=_t.b;Tt?(_[0]=Ct,_[1]=qt,_[2]=Jt,_[3]=At,W.clearBufferuiv(W.COLOR,0,_)):(y[0]=Ct,y[1]=qt,y[2]=Jt,y[3]=At,W.clearBufferiv(W.COLOR,0,y))}else $|=W.COLOR_BUFFER_BIT}G&&($|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),L=P},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Xt.dispose(),xt.dispose(),dt.dispose(),K.dispose(),lt.dispose(),rt.dispose(),yt.dispose(),ot.dispose(),ft.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",rh),Rt.removeEventListener("sessionend",oh),Bi.stop()};function be(P){P.preventDefault(),mr("WebGLRenderer: Context Lost."),A=!0}function le(){mr("WebGLRenderer: Context Restored."),A=!1;let P=Y.autoReset,G=Ut.enabled,Q=Ut.autoUpdate,$=Ut.needsUpdate,Z=Ut.type;Lt(),Y.autoReset=P,Ut.enabled=G,Ut.autoUpdate=Q,Ut.needsUpdate=$,Ut.type=Z}function Sn(P){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Un(P){let G=P.target;G.removeEventListener("dispose",Un),tm(G)}function tm(P){em(P),K.remove(P)}function em(P){let G=K.get(P).programs;G!==void 0&&(G.forEach(function(Q){ft.releaseProgram(Q)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Q,$,Z,vt){G===null&&(G=an);let Tt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,_t=sm(P,G,Q,$,Z);T.setMaterial($,Tt);let At=Q.index,Ct=1;if($.wireframe===!0){if(At=it.getWireframeAttribute(Q),At===void 0)return;Ct=2}let qt=Q.drawRange,Jt=Q.attributes.position,Et=qt.start*Ct,ce=(qt.start+qt.count)*Ct;vt!==null&&(Et=Math.max(Et,vt.start*Ct),ce=Math.min(ce,(vt.start+vt.count)*Ct)),At!==null?(Et=Math.max(Et,0),ce=Math.min(ce,At.count)):Jt!=null&&(Et=Math.max(Et,0),ce=Math.min(ce,Jt.count));let De=ce-Et;if(De<0||De===1/0)return;yt.setup(Z,$,_t,Q,At);let ye,xe=pt;if(At!==null&&(ye=ht.get(At),xe=st,xe.setIndex(ye)),Z.isMesh)$.wireframe===!0?(T.setLineWidth($.wireframeLinewidth*Fe()),xe.setMode(W.LINES)):xe.setMode(W.TRIANGLES);else if(Z.isLine){let Ye=$.linewidth;Ye===void 0&&(Ye=1),T.setLineWidth(Ye*Fe()),Z.isLineSegments?xe.setMode(W.LINES):Z.isLineLoop?xe.setMode(W.LINE_LOOP):xe.setMode(W.LINE_STRIP)}else Z.isPoints?xe.setMode(W.POINTS):Z.isSprite&&xe.setMode(W.TRIANGLES);if(Z.isBatchedMesh)if(de.get("WEBGL_multi_draw"))xe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ye=Z._multiDrawStarts,St=Z._multiDrawCounts,en=Z._multiDrawCount,re=At?ht.get(At).bytesPerElement:1,gn=K.get($).currentProgram.getUniforms();for(let On=0;On<en;On++)gn.setValue(W,"_gl_DrawID",On),xe.render(Ye[On]/re,St[On])}else if(Z.isInstancedMesh)xe.renderInstances(Et,De,Z.count);else if(Q.isInstancedBufferGeometry){let Ye=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,St=Math.min(Q.instanceCount,Ye);xe.renderInstances(Et,De,St)}else xe.render(Et,De)};function sh(P,G,Q,$){L!==null&&P.isNodeMaterial&&L.setObject($,P),$t===!0&&It.setState(P,Q,!1),P.transparent===!0&&P.side===ve&&P.forceSinglePass===!1?(P.side=on,P.needsUpdate=!0,ho(P,G,$),P.side=Ti,P.needsUpdate=!0,ho(P,G,$),P.side=ve):ho(P,G,$)}this.compile=function(P,G,Q=null){Q===null&&(Q=P),L!==null&&L.renderStart(P,G,Q),S=dt.get(Q),S.init(G),b.push(S),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),P!==Q&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),se=this.localClippingEnabled,$t=It.init(this.clippingPlanes,se),$t===!0&&It.setGlobalState(this.clippingPlanes,G),L!==null&&Ut.render(S.state.shadowsArray,Q,G);let $=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let vt=Z.material;if(vt)if(Array.isArray(vt))for(let Tt=0;Tt<vt.length;Tt++){let _t=vt[Tt];sh(_t,Q,G,Z),$.add(_t)}else sh(vt,Q,G,Z),$.add(vt)}),S=b.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(P,G,Q=null){let $=this.compile(P,G,Q);return new Promise(Z=>{function vt(){if($.forEach(function(Tt){let At=K.get(Tt).currentProgram;(At===void 0||At.isReady())&&$.delete(Tt)}),$.size===0){Z(P);return}setTimeout(vt,10)}de.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Yl=null;function nm(P){Yl&&Yl(P)}function rh(){Bi.stop()}function oh(){Bi.start()}let Bi=new od;Bi.setAnimationLoop(nm),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(P){Yl=P,Rt.setAnimationLoop(P),P===null?Bi.stop():Bi.start()},Rt.addEventListener("sessionstart",rh),Rt.addEventListener("sessionend",oh),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;L!==null&&L.renderStart(P,G);let Q=Rt.enabled===!0&&Rt.isPresenting===!0,$=w!==null&&(V===null||Q)&&w.begin(E,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(G),G=Rt.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,G,V),S=dt.get(P,b.length),S.init(G),S.state.textureUnits=et.getTextureUnits(),b.push(S),Zt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ft.setFromProjectionMatrix(Zt,Rn,G.reversedDepth),se=this.localClippingEnabled,$t=It.init(this.clippingPlanes,se),M=xt.get(P,C.length),M.init(),C.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){let Tt=E.xr.getDepthSensingMesh();Tt!==null&&$l(Tt,G,-1/0,E.sortObjects)}$l(P,G,0,E.sortObjects),M.finish(),L!==null&&L.updateLights(S.state.lightsArray),E.sortObjects===!0&&M.sort(at,wt),Te=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Te&&Xt.addToRenderList(M,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&It.beginShadows();let Z=S.state.shadowsArray;if(Ut.render(Z,P,G),$t===!0&&It.endShadows(),($&&w.hasRenderPass())===!1){let Tt=M.opaque,_t=M.transmissive;if(S.setupLights(),G.isArrayCamera){let At=G.cameras;if(_t.length>0)for(let Ct=0,qt=At.length;Ct<qt;Ct++){let Jt=At[Ct];lh(Tt,_t,P,Jt)}Te&&Xt.render(P);for(let Ct=0,qt=At.length;Ct<qt;Ct++){let Jt=At[Ct];ah(M,P,Jt,Jt.viewport)}}else _t.length>0&&lh(Tt,_t,P,G),Te&&Xt.render(P),ah(M,P,G)}V!==null&&O===0&&(et.updateMultisampleRenderTarget(V),et.updateRenderTargetMipmap(V)),$&&w.end(E),P.isScene===!0&&P.onAfterRender(E,P,G),yt.resetDefaultState(),z=-1,B=null,b.pop(),b.length>0?(S=b[b.length-1],et.setTextureUnits(S.state.textureUnits),$t===!0&&It.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,L!==null&&L.renderEnd()};function $l(P,G,Q,$){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(Ft)){$&&ke.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Zt);let Tt=rt.update(P),_t=P.material;_t.visible&&M.push(P,Tt,_t,Q,ke.z,null,G)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(Ft))){let Tt=rt.update(P),_t=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ke.copy(P.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ke.copy(Tt.boundingSphere.center)),ke.applyMatrix4(P.matrixWorld).applyMatrix4(Zt)),Array.isArray(_t)){let At=Tt.groups;for(let Ct=0,qt=At.length;Ct<qt;Ct++){let Jt=At[Ct],Et=_t[Jt.materialIndex];Et&&Et.visible&&M.push(P,Tt,Et,Q,ke.z,Jt,G)}}else _t.visible&&M.push(P,Tt,_t,Q,ke.z,null,G)}}let vt=P.children;for(let Tt=0,_t=vt.length;Tt<_t;Tt++)$l(vt[Tt],G,Q,$)}function ah(P,G,Q,$){let{opaque:Z,transmissive:vt,transparent:Tt}=P;S.setupLightsView(Q),$t===!0&&It.setGlobalState(E.clippingPlanes,Q),$&&T.viewport(X.copy($)),Z.length>0&&uo(Z,G,Q),vt.length>0&&uo(vt,G,Q),Tt.length>0&&uo(Tt,G,Q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function lh(P,G,Q,$){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Et=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new Ke(1,1,{generateMipmaps:!0,type:Et?Fn:mn,minFilter:Ei,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let vt=S.state.transmissionRenderTarget[$.id],Tt=$.viewport||X;vt.setSize(Tt.z*E.transmissionResolutionScale,Tt.w*E.transmissionResolutionScale);let _t=E.getRenderTarget(),At=E.getActiveCubeFace(),Ct=E.getActiveMipmapLevel();E.setRenderTarget(vt),E.getClearColor(ut),ct=E.getClearAlpha(),ct<1&&E.setClearColor(16777215,.5),E.clear(),Te&&Xt.render(Q);let qt=E.toneMapping;E.toneMapping=Pn;let Jt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),$t===!0&&It.setGlobalState(E.clippingPlanes,$),uo(P,Q,$),et.updateMultisampleRenderTarget(vt),et.updateRenderTargetMipmap(vt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ce=0,De=G.length;ce<De;ce++){let ye=G[ce],{object:xe,geometry:Ye,material:St,group:en}=ye;if(St.side===ve&&xe.layers.test($.layers)){let re=St.side;St.side=on,St.needsUpdate=!0,ch(xe,Q,$,Ye,St,en),St.side=re,St.needsUpdate=!0,Et=!0}}Et===!0&&(et.updateMultisampleRenderTarget(vt),et.updateRenderTargetMipmap(vt))}E.setRenderTarget(_t,At,Ct),E.setClearColor(ut,ct),Jt!==void 0&&($.viewport=Jt),E.toneMapping=qt}function uo(P,G,Q){let $=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,vt=P.length;Z<vt;Z++){let Tt=P[Z],{object:_t,geometry:At,group:Ct}=Tt,qt=Tt.material;qt.allowOverride===!0&&$!==null&&(qt=$),_t.layers.test(Q.layers)&&ch(_t,G,Q,At,qt,Ct)}}function ch(P,G,Q,$,Z,vt){L!==null&&Z.isNodeMaterial&&L.setObject(P,Z),P.onBeforeRender(E,G,Q,$,Z,vt),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(E,G,Q,$,P,vt),Z.transparent===!0&&Z.side===ve&&Z.forceSinglePass===!1?(Z.side=on,Z.needsUpdate=!0,E.renderBufferDirect(Q,G,$,Z,P,vt),Z.side=Ti,Z.needsUpdate=!0,E.renderBufferDirect(Q,G,$,Z,P,vt),Z.side=ve):E.renderBufferDirect(Q,G,$,Z,P,vt),P.onAfterRender(E,G,Q,$,Z,vt)}function ho(P,G,Q){G.isScene!==!0&&(G=an);let $=K.get(P),Z=S.state.lights,vt=S.state.shadowsArray,Tt=Z.state.version,_t=ft.getParameters(P,Z.state,vt,G,Q,S.state.lightProbeGridArray),At=ft.getProgramCacheKey(_t),Ct=$.programs;$.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let qt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;$.envMap=lt.get(P.envMap||$.environment,qt),$.envMapRotation=$.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ct===void 0&&(P.addEventListener("dispose",Un),Ct=new Map,$.programs=Ct);let Jt=Ct.get(At);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Tt)return hh(P,_t),Jt}else _t.uniforms=ft.getUniforms(P),L!==null&&P.isNodeMaterial&&L.build(P,Q,_t),P.onBeforeCompile(_t,E),Jt=ft.acquireProgram(_t,At),Ct.set(At,Jt),$.uniforms=_t.uniforms;let Et=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Et.clippingPlanes=It.uniform),hh(P,_t),$.needsLights=om(P),$.lightsStateVersion=Tt,$.needsLights&&(Et.ambientLightColor.value=Z.state.ambient,Et.lightProbe.value=Z.state.probe,Et.sunLights.value=Z.state.sun,Et.sunLightShadows.value=Z.state.sunShadow,Et.directionalLights.value=Z.state.directional,Et.directionalLightShadows.value=Z.state.directionalShadow,Et.spotLights.value=Z.state.spot,Et.spotLightShadows.value=Z.state.spotShadow,Et.rectAreaLights.value=Z.state.rectArea,Et.ltc_1.value=Z.state.rectAreaLTC1,Et.ltc_2.value=Z.state.rectAreaLTC2,Et.pointLights.value=Z.state.point,Et.pointLightShadows.value=Z.state.pointShadow,Et.hemisphereLights.value=Z.state.hemi,Et.sunShadowMatrix.value=Z.state.sunShadowMatrix,Et.sunShadowCascade.value=Z.state.sunShadowCascade,Et.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Et.spotLightMatrix.value=Z.state.spotLightMatrix,Et.spotLightMap.value=Z.state.spotLightMap,Et.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=Jt,$.uniformsList=null,Jt}function uh(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=Ws.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function hh(P,G){let Q=K.get(P);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function im(P,G){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;v.setFromMatrixPosition(G.matrixWorld);for(let Q=0,$=P.length;Q<$;Q++){let Z=P[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function sm(P,G,Q,$,Z){G.isScene!==!0&&(G=an),et.resetTextureUnits();let vt=G.fog,Tt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,_t=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:te.workingColorSpace,At=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ct=lt.get($.envMap||Tt,At),qt=$.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Jt=!!Q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Et=!!Q.morphAttributes.position,ce=!!Q.morphAttributes.normal,De=!!Q.morphAttributes.color,ye=Pn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ye=E.toneMapping);let xe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ye=xe!==void 0?xe.length:0,St=K.get($),en=S.state.lights;if($t===!0&&(se===!0||P!==B)){let _e=P===B&&$.id===z;It.setState($,P,_e)}let re=!1;$.version===St.__version?(St.needsLights&&St.lightsStateVersion!==en.state.version||St.outputColorSpace!==_t||Z.isBatchedMesh&&St.batching===!1||!Z.isBatchedMesh&&St.batching===!0||Z.isBatchedMesh&&St.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&St.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&St.instancing===!1||!Z.isInstancedMesh&&St.instancing===!0||Z.isSkinnedMesh&&St.skinning===!1||!Z.isSkinnedMesh&&St.skinning===!0||Z.isInstancedMesh&&St.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&St.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&St.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&St.instancingMorph===!1&&Z.morphTexture!==null||St.envMap!==Ct||$.fog===!0&&St.fog!==vt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==It.numPlanes||St.numIntersection!==It.numIntersection)||St.vertexAlphas!==qt||St.vertexTangents!==Jt||St.morphTargets!==Et||St.morphNormals!==ce||St.morphColors!==De||St.toneMapping!==ye||St.morphTargetsCount!==Ye||!!St.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,St.__version=$.version);let gn=St.currentProgram;re===!0&&(gn=ho($,G,Z),L&&$.isNodeMaterial&&L.onUpdateProgram($,gn,St));let On=!1,ci=!1,fs=!1,me=gn.getUniforms(),Le=St.uniforms;if(T.useProgram(gn.program)&&(On=!0,ci=!0,fs=!0),$.id!==z&&(z=$.id,ci=!0),St.needsLights){let _e=im(S.state.lightProbeGridArray,Z);St.lightProbeGrid!==_e&&(St.lightProbeGrid=_e,ci=!0)}if(On||B!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),me.setValue(W,"projectionMatrix",P.projectionMatrix),me.setValue(W,"viewMatrix",P.matrixWorldInverse);let hi=me.map.cameraPosition;hi!==void 0&&hi.setValue(W,we.setFromMatrixPosition(P.matrixWorld)),N.logarithmicDepthBuffer&&me.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&me.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,ci=!0,fs=!0)}if(St.needsLights&&(en.state.sunShadowMap.length>0&&me.setValue(W,"sunShadowMap",en.state.sunShadowMap,et),en.state.directionalShadowMap.length>0&&me.setValue(W,"directionalShadowMap",en.state.directionalShadowMap,et),en.state.spotShadowMap.length>0&&me.setValue(W,"spotShadowMap",en.state.spotShadowMap,et),en.state.pointShadowMap.length>0&&me.setValue(W,"pointShadowMap",en.state.pointShadowMap,et)),Z.isSkinnedMesh){me.setOptional(W,Z,"bindMatrix"),me.setOptional(W,Z,"bindMatrixInverse");let _e=Z.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),me.setValue(W,"boneTexture",_e.boneTexture,et))}Z.isBatchedMesh&&(me.setOptional(W,Z,"batchingTexture"),me.setValue(W,"batchingTexture",Z._matricesTexture,et),me.setOptional(W,Z,"batchingIdTexture"),me.setValue(W,"batchingIdTexture",Z._indirectTexture,et),me.setOptional(W,Z,"batchingColorTexture"),Z._colorsTexture!==null&&me.setValue(W,"batchingColorTexture",Z._colorsTexture,et));let ui=Q.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&H.update(Z,Q,gn),(ci||St.receiveShadow!==Z.receiveShadow)&&(St.receiveShadow=Z.receiveShadow,me.setValue(W,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Le.envMapIntensity.value=G.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=$_()),ci){if(me.setValue(W,"toneMappingExposure",E.toneMappingExposure),St.needsLights&&rm(Le,fs),vt&&$.fog===!0&&Pt.refreshFogUniforms(Le,vt),Pt.refreshMaterialUniforms(Le,$,J,q,S.state.transmissionRenderTarget[P.id]),St.needsLights&&St.lightProbeGrid){let _e=St.lightProbeGrid;Le.probesSH.value=_e.texture,Le.probesMin.value.copy(_e.boundingBox.min),Le.probesMax.value.copy(_e.boundingBox.max),Le.probesResolution.value.copy(_e.resolution)}Ws.upload(W,uh(St),Le,et)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ws.upload(W,uh(St),Le,et),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&me.setValue(W,"center",Z.center),me.setValue(W,"modelViewMatrix",Z.modelViewMatrix),me.setValue(W,"normalMatrix",Z.normalMatrix),me.setValue(W,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){let _e=$.uniformsGroups;for(let hi=0,ds=_e.length;hi<ds;hi++){let dh=_e[hi];ot.update(dh,gn),ot.bind(dh,gn)}}return gn}function rm(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.sunLights.needsUpdate=G,P.sunLightShadows.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function om(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,G,Q){let $=K.get(P);$.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),K.get(P.texture).__webglTexture=G,K.get(P.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){let Q=K.get(P);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,Q=0){V=P,U=G,O=Q;let $=null,Z=!1,vt=!1;if(P){let _t=K.get(P);if(_t.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(W.FRAMEBUFFER,_t.__webglFramebuffer),X.copy(P.viewport),tt.copy(P.scissor),j=P.scissorTest,T.viewport(X),T.scissor(tt),T.setScissorTest(j),z=-1;return}else if(_t.__webglFramebuffer===void 0)et.setupRenderTarget(P);else if(_t.__hasExternalTextures)et.rebindTextures(P,K.get(P.texture).__webglTexture,K.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let qt=P.depthTexture;if(_t.__boundDepthTexture!==qt){if(qt!==null&&K.has(qt)&&(P.width!==qt.image.width||P.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(P)}}let At=P.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(vt=!0);let Ct=K.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ct[G])?$=Ct[G][Q]:$=Ct[G],Z=!0):P.samples>0&&et.useMultisampledRTT(P)===!1?$=K.get(P).__webglMultisampledFramebuffer:Array.isArray(Ct)?$=Ct[Q]:$=Ct,X.copy(P.viewport),tt.copy(P.scissor),j=P.scissorTest}else X.copy(gt).multiplyScalar(J).floor(),tt.copy(Bt).multiplyScalar(J).floor(),j=jt;if(Q!==0&&($=I),T.bindFramebuffer(W.FRAMEBUFFER,$)&&T.drawBuffers(P,$),T.viewport(X),T.scissor(tt),T.setScissorTest(j),Z){let _t=K.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t.__webglTexture,Q)}else if(vt){let _t=G;for(let At=0;At<P.textures.length;At++){let Ct=K.get(P.textures[At]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+At,Ct.__webglTexture,Q,_t)}}else if(P!==null&&Q!==0){let _t=K.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,_t.__webglTexture,Q)}z=-1};function fh(P){let G=K.get(P);return(G.__readFormat!==P.format||G.__readType!==P.type)&&(G.__readFormat=P.format,G.__readType=P.type,G.__formatReadable=N.textureFormatReadable(P.format),G.__typeReadable=N.textureTypeReadable(P.type)),G}this.readRenderTargetPixels=function(P,G,Q,$,Z,vt,Tt,_t=0){if(!(P&&P.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){T.bindFramebuffer(W.FRAMEBUFFER,At);try{let Ct=P.textures[_t],qt=Ct.format,Jt=Ct.type;P.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+_t);let Et=fh(Ct);if(Et.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-$&&Q>=0&&Q<=P.height-Z&&W.readPixels(G,Q,$,Z,mt.convert(qt),mt.convert(Jt),vt)}finally{let Ct=V!==null?K.get(V).__webglFramebuffer:null;T.bindFramebuffer(W.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(P,G,Q,$,Z,vt,Tt,_t=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(G>=0&&G<=P.width-$&&Q>=0&&Q<=P.height-Z){T.bindFramebuffer(W.FRAMEBUFFER,At);let Ct=P.textures[_t],qt=Ct.format,Jt=Ct.type;P.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+_t);let Et=fh(Ct);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ce),W.bufferData(W.PIXEL_PACK_BUFFER,vt.byteLength,W.STREAM_READ),W.readPixels(G,Q,$,Z,mt.convert(qt),mt.convert(Jt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let De=V!==null?K.get(V).__webglFramebuffer:null;T.bindFramebuffer(W.FRAMEBUFFER,De);let ye=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Rf(W,ye,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ce),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,vt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(ce),W.deleteSync(ye),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,Q=0){let $=Math.pow(2,-Q),Z=Math.floor(P.image.width*$),vt=Math.floor(P.image.height*$),Tt=G!==null?G.x:0,_t=G!==null?G.y:0;et.setTexture2D(P,0),W.copyTexSubImage2D(W.TEXTURE_2D,Q,0,0,Tt,_t,Z,vt),T.unbindTexture()},this.copyTextureToTexture=function(P,G,Q=null,$=null,Z=0,vt=0){let Tt,_t,At,Ct,qt,Jt,Et,ce,De,ye=P.isCompressedTexture?P.mipmaps[vt]:P.image;if(Q!==null)Tt=Q.max.x-Q.min.x,_t=Q.max.y-Q.min.y,At=Q.isBox3?Q.max.z-Q.min.z:1,Ct=Q.min.x,qt=Q.min.y,Jt=Q.isBox3?Q.min.z:0;else{let Le=Math.pow(2,-Z);Tt=Math.floor(ye.width*Le),_t=Math.floor(ye.height*Le),P.isDataArrayTexture?At=ye.depth:P.isData3DTexture?At=Math.floor(ye.depth*Le):At=1,Ct=0,qt=0,Jt=0}$!==null?(Et=$.x,ce=$.y,De=$.z):(Et=0,ce=0,De=0);let xe=mt.convert(G.format),Ye=mt.convert(G.type),St;G.isData3DTexture?(et.setTexture3D(G,0),St=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(et.setTexture2DArray(G,0),St=W.TEXTURE_2D_ARRAY):(et.setTexture2D(G,0),St=W.TEXTURE_2D),T.activeTexture(W.TEXTURE0),T.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);let en=T.getParameter(W.UNPACK_ROW_LENGTH),re=T.getParameter(W.UNPACK_IMAGE_HEIGHT),gn=T.getParameter(W.UNPACK_SKIP_PIXELS),On=T.getParameter(W.UNPACK_SKIP_ROWS),ci=T.getParameter(W.UNPACK_SKIP_IMAGES);T.pixelStorei(W.UNPACK_ROW_LENGTH,ye.width),T.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ye.height),T.pixelStorei(W.UNPACK_SKIP_PIXELS,Ct),T.pixelStorei(W.UNPACK_SKIP_ROWS,qt),T.pixelStorei(W.UNPACK_SKIP_IMAGES,Jt);let fs=P.isDataArrayTexture||P.isData3DTexture,me=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){let Le=K.get(P),ui=K.get(G),_e=K.get(Le.__renderTarget),hi=K.get(ui.__renderTarget);T.bindFramebuffer(W.READ_FRAMEBUFFER,_e.__webglFramebuffer),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ds=0;ds<At;ds++)fs&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,K.get(P).__webglTexture,Z,Jt+ds),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,K.get(G).__webglTexture,vt,De+ds)),W.blitFramebuffer(Ct,qt,Tt,_t,Et,ce,Tt,_t,W.DEPTH_BUFFER_BIT,W.NEAREST);T.bindFramebuffer(W.READ_FRAMEBUFFER,null),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Z!==0||P.isRenderTargetTexture||K.has(P)){let Le=K.get(P),ui=K.get(G);T.bindFramebuffer(W.READ_FRAMEBUFFER,R),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,F);for(let _e=0;_e<At;_e++)fs?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Le.__webglTexture,Z,Jt+_e):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Le.__webglTexture,Z),me?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ui.__webglTexture,vt,De+_e):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ui.__webglTexture,vt),Z!==0?W.blitFramebuffer(Ct,qt,Tt,_t,Et,ce,Tt,_t,W.COLOR_BUFFER_BIT,W.NEAREST):me?W.copyTexSubImage3D(St,vt,Et,ce,De+_e,Ct,qt,Tt,_t):W.copyTexSubImage2D(St,vt,Et,ce,Ct,qt,Tt,_t);T.bindFramebuffer(W.READ_FRAMEBUFFER,null),T.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else me?P.isDataTexture||P.isData3DTexture?W.texSubImage3D(St,vt,Et,ce,De,Tt,_t,At,xe,Ye,ye.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(St,vt,Et,ce,De,Tt,_t,At,xe,ye.data):W.texSubImage3D(St,vt,Et,ce,De,Tt,_t,At,xe,Ye,ye):P.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,vt,Et,ce,Tt,_t,xe,Ye,ye.data):P.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,vt,Et,ce,ye.width,ye.height,xe,ye.data):W.texSubImage2D(W.TEXTURE_2D,vt,Et,ce,Tt,_t,xe,Ye,ye);T.pixelStorei(W.UNPACK_ROW_LENGTH,en),T.pixelStorei(W.UNPACK_IMAGE_HEIGHT,re),T.pixelStorei(W.UNPACK_SKIP_PIXELS,gn),T.pixelStorei(W.UNPACK_SKIP_ROWS,On),T.pixelStorei(W.UNPACK_SKIP_IMAGES,ci),vt===0&&G.generateMipmaps&&W.generateMipmap(St),T.unbindTexture()},this.initRenderTarget=function(P){K.get(P).__webglFramebuffer===void 0&&et.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?et.setTextureCube(P,0):P.isData3DTexture?et.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?et.setTexture2DArray(P,0):et.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){U=0,O=0,V=null,T.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function dd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(e[n]=s)}return e}function pd(i,t,e,n){for(let s=e.start*3;s<e.end*3;s++){let r=t[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}var Z_=[],wu=new Map,J_=0;function gl(i){Z_=i,wu=new Map(i.flatMap(t=>t.items.map(e=>[K_(t.id,e.id),e]))),J_++}function K_(i,t){return`pack:${i}:${t}`}function Q_(i){return i.startsWith("pack:")}var j_={};function md(i){return He(i)?.parts.find(t=>t.screen)}function He(i){if(!Q_(i))return;let t=wu.get(i);if(t)return t;let[,e,...n]=i.split(":"),s=j_[e];return s?wu.get(`pack:${s}:${n.join(":")}`):void 0}function Dn(i,t){let e=He(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return xl;if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return gd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Hr(t)}}var bl={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function ns(i){return i==="hedge"||i==="fence"||i==="pergola"}function Tu(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,f)=>s==="x"?c:s==="-x"?-c:s==="z"?f:-f,o=1/0,a=-1/0;for(let[c,f]of i.points){let h=r(c,f);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(t,e)-o)/(a-o)));return n*l}function ev(i,t,e,n){return Wr(i)+(t.offset??0)+bl[t.type]-Tu(t,e,n)}function Wr(i){return i.elevation>.3?0:-.2}function xd(i,t,e){let n=(i.outdoor??[]).filter(r=>!ns(r.type)&&r.type!=="pool"&&pe([t,e],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?ev(i,s,t,e):Wr(i)}var nv={type:"none",pitch:35,overhang:.4},o2={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...nv}};var bd=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),xl=1.75;function _d(i){return bd.has(i)||!!He(i)?.light}var iv=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Hr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function gd(i,t,e){let n=0;for(let s of i.furniture)!(iv.has(s.type)||He(s.type)?.surface)||!pe([t,e],vl(s))||(n=Math.max(n,s.h));return n}var tv=new Set([...bd,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var sv=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],rv=["standard","bars","glass_wall"];function is(i,t){return i.type==="door"?i.style&&sv.includes(i.style)?i.style:t?"front":"interior":i.style&&rv.includes(i.style)?i.style:"standard"}function vd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let s=t==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let f=r-.5;if(l+c>f){let u=Math.max(0,f)/(l+c);l*=u,c*=u}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function yd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function ss(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Xr(i){return Math.abs(ss(i))}function _l(i){let t=ss(i);if(Math.abs(t)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let e=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;e+=(r+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Md(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[s,r]=i[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function Sd(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,z0:e,x1:n,z1:s}}function vl(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function pe(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}var We=(i,t)=>[i[0]-t[0],i[1]-t[1]],Pi=(i,t)=>[i[0]+t[0],i[1]+t[1]],ai=(i,t)=>[i[0]*t,i[1]*t],Yr=(i,t)=>i[0]*t[0]+i[1]*t[1],Ys=(i,t)=>i[0]*t[1]-i[1]*t[0],qr=i=>Math.hypot(i[0],i[1]),Zn=i=>{let t=qr(i)||1;return[i[0]/t,i[1]/t]},wd=i=>[-i[1],i[0]],Td=i=>[i[1],-i[0]];function $r(i,t,e=[]){let n=t.eps??.005,s=[],r=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let w=0;w<o.length;w++)if(Math.abs(o[w][0]-b[0])<=n&&Math.abs(o[w][1]-b[1])<=n)return w;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let w=b.points;if(w.length<3||Math.abs(ss(w))<1e-6)continue;let E=ss(w)>0,A=w.map(a);for(let L=0;L<w.length;L++){let I=A[L],R=A[(L+1)%w.length];I!==R&&l.push(E?{u:I,v:R,room:b.id,edge:L,forward:!0}:{u:R,v:I,room:b.id,edge:L,forward:!1})}}let c=r.map(b=>[a(b.a),a(b.b)]),f=new Set;for(let b of i){let w=b.points;w.length<3||(b.wall_splits??[]).forEach((E,A)=>{if(!E||A>=w.length)return;let L=w[A],I=We(w[(A+1)%w.length],L),R=qr(I);for(let F of E)F>n&&F<R-n&&f.add(a(Pi(L,ai(I,F/R))))})}let h=[];for(let b of l){let w=o[b.u],E=o[b.v],A=We(E,w),L=qr(A),I=ai(A,1/L),R=[];for(let U=0;U<o.length;U++){if(U===b.u||U===b.v)continue;let O=We(o[U],w),V=Yr(O,I);V<=n||V>=L-n||Math.abs(Ys(I,O))<=n&&R.push({t:V,id:U})}R.sort((U,O)=>U.t-O.t);let F=[{t:0,id:b.u},...R,{t:L,id:b.v}];for(let U=0;U+1<F.length;U++){let O=F[U],V=F[U+1],z=b.forward?O.t:L-V.t,B=b.forward?V.t:L-O.t;h.push({u:O.id,v:V.id,room:b.room,edge:b.edge,t0:z,t1:B})}}let u=new Map;for(let b of h){let w=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,E=u.get(w);E||u.set(w,E=[]),E.push(b)}let p=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),m=new Map;for(let b of h){let w=`${b.room}:${b.edge}`;m.set(w,[...m.get(w)??[],b.t0].sort((E,A)=>E-A))}let x=b=>{let w=i.find(A=>A.id===b.room)?.wall_heights?.[b.edge];if(!Array.isArray(w))return w;let E=m.get(`${b.room}:${b.edge}`)??[];return w[E.indexOf(b.t0)]??null},g=b=>{let w=b.map(x).filter(E=>typeof E=="number"&&E>0);return w.length?Math.min(...w):void 0},d=b=>{let w=b.map(E=>i.find(A=>A.id===E.room)?.wall_thickness?.[E.edge]).filter(E=>typeof E=="number"&&E>0);return w.length?Math.max(...w):void 0},_=b=>b.some(w=>x(w)===0),y=[],v=[];for(let b of u.values()){let w=b[0],E=b.find(A=>A!==w&&A.u===w.v&&A.v===w.u&&A.room!==w.room);for(let A of b)A!==w&&A!==E&&A.room!==w.room&&s.push(`overlap:${w.room}:${A.room}`);if(_(E?[w,E]:[w])){E&&y.push([w.room,E.room]);continue}if(E){let A=d([w,E])??t.interior;v.push({a:w.u,b:w.v,left:A/2,right:A/2,exterior:!1,roomLeft:w.room,roomRight:E.room,sources:[p(w),p(E)],height:g([w,E])})}else v.push({a:w.u,b:w.v,left:0,right:d([w])??t.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[p(w)],height:g([w])})}let M=b=>Zn(We(o[b.b],o[b.a]));for(let b of v){if(b.exterior||b.free)continue;let w=new Set;for(let A of[b.a,b.b])for(let L of v)!L.exterior||L.free||L.a!==A&&L.b!==A||Math.abs(Ys(M(b),M(L)))>1e-6||(L.roomLeft===b.roomLeft?w.add("left"):L.roomLeft===b.roomRight&&w.add("right"));if(w.size!==1)continue;let E=b.left+b.right;w.has("left")?(b.left=0,b.right=E):(b.left=E,b.right=0)}r.forEach((b,w)=>{let[E,A]=c[w];if(E===A)return;let L=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],I=i.find(U=>U.points.length>=3&&pe(L,U.points))?.id??null,R=(b.thickness??t.interior)/2,F=typeof b.height=="number"&&b.height>0?b.height:void 0;v.push({free:b.id,a:E,b:A,left:R,right:R,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:F})}),v=av(v,o,f);let S=cv(v,o);return{walls:v.map((b,w)=>{let E=o[b.a],A=o[b.b],L=S.get(`${w}:a`),I=S.get(`${w}:b`),R=uv([L.right,I.left,A,I.right,L.left,E],1e-6);return{id:ov(E,A),a:[E[0],E[1]],b:[A[0],A[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:R,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(s)],open:y}}function ov(i,t){let e=r=>Math.round(r*100),[n,s]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(s[0])}_${e(s[1])}`}function Ad(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function av(i,t,e=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Ad(l)),c.a!==o&&(c=Ad(c)),l.a===c.b)continue;let f=Zn(We(t[l.b],t[l.a])),h=Zn(We(t[c.b],t[c.a]));if(Math.abs(Ys(f,h))>1e-6||Yr(f,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let u={...l,b:c.b,sources:lv(l.sources,c.sources)},p=n.filter((m,x)=>x!==a[0]&&x!==a[1]);p.push(u),n.length=0,n.push(...p),s=!0;break}}return n}function lv(i,t){let e=i.map(n=>({...n}));for(let n of t){let s=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):e.push({...n})}return e}function cv(i,t){let e=new Map;i.forEach((s,r)=>{let o=Zn(We(t[s.b],t[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:ai(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let f=e.get(l);f||e.set(l,f=[]),f.push(c)}});let n=new Map;for(let[s,r]of e){let o=t[s];r.sort((c,f)=>c.angle-f.angle);let a=c=>({left:Pi(o,ai(wd(c.d),c.left)),right:Pi(o,ai(Td(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let f=r[c],h=r[(c+1)%r.length],u=Pi(o,ai(wd(f.d),f.left)),p=Pi(o,ai(Td(h.d),h.right)),m=Ys(f.d,h.d);if(Math.abs(m)<1e-4)continue;let x=Ys(We(p,u),h.d)/m,g=Pi(u,ai(f.d,x));qr(We(g,o))>l||(n.get(f.key).left=g,n.get(h.key).right=g)}}return n}function uv(i,t){let e=i.filter((s,r)=>qr(We(s,i[(r+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],o=e[s],a=e[(s+1)%e.length],l=We(o,r),c=We(a,o);if(Math.abs(Ys(Zn(l),Zn(c)))<1e-7&&Yr(l,c)>0){e=e.filter((f,h)=>h!==s),n=!0;break}}}return e}function Ed(i,t,e){let n=i.points[t],s=i.points[(t+1)%i.points.length],r=Zn(We(s,n));return Pi(n,ai(r,e))}function Rd(i,t,e){if(i.wall){let s=e.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=Zn(We(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Pi(s.a,[-r[1],r[0]])]},edge:0}}let n=t.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Cd(i,t,e){if(!t.wall)return hv(i,e.room,e.edge,t.offset);let n=i.find(r=>r.free===t.wall);if(!n)return null;let s=Ed(e.room,0,t.offset);return{wall:n,s:Yr(We(s,n.a),Zn(We(n.b,n.a)))}}function hv(i,t,e,n){for(let s of i){if(!s.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Ed(t,e,n);return{wall:s,s:Yr(We(o,s.a),Zn(We(s.b,s.a)))}}return null}var Jr=Math.PI/180;function Jn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:e-t,at:(r,o)=>[i.flip?e-o:t+o,r]}}function Mn(i){let t=Jn(i).w,e=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Jr),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Jr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*s,y:l=>e+l*s};if(i.shape==="mansard"){let l=Dd(t,e,n,s,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=s+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(s+r))):t/2,a=e+o*s;return{vr:o,rh:a,y:l=>l<=o?e+l*s:n+(t-l)*r}}var fv=.14;function Id(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Ld(i,t,e){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),c=Math.max(r.z0,r.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||r.points&&r.points.length>=3&&!pe([t,e],r.points))continue;let[f,h]=Ii(r,t,e),u=r.shape==="flat"||r.shape==="parapet",p=Math.max(0,r.overhang??s),x=((u?null:Kr(Zs(r,{u0:p,u1:p,a:p,b:p}),f,h))??Mn(r).y(h))-fv;n=n===null?x:Math.max(n,x)}return n}function Au(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Xr(i)>=0?1:-1,s=[];for(let r=0;r<e;r++){let o=i[(r+e-1)%e],a=i[r],l=i[(r+1)%e],c=Pd([a[0]-o[0],a[1]-o[1]]),f=Pd([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],u=[f[1]*n,-f[0]*n],p=h[0]+u[0],m=h[1]+u[1],x=Math.hypot(p,m);if(x<1e-6){s.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(p*h[0]+m*h[1])/x,d=Math.min(4,1/Math.max(.25,g));s.push([a[0]+p/x*t*d,a[1]+m/x*t*d])}return s}function Pd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Fd(i,t){if(i.points&&i.points.length>=3)return Au(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,s=Math.min(i.z0,i.z1)-t,r=Math.max(i.z0,i.z1)+t;return[[e,s],[n,s],[n,r],[e,r]]}var Zr=Math.tan(30*Jr);function Dd(i,t,e,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=t+r*n,l=e+o*s,c=Math.min(i-o,Math.max(r,(l-a+Zr*(i-o+r))/(2*Zr))),f=a+(c-r)*Zr;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:f,y:u=>u<=r?t+u*n:u<=c?a+(u-r)*Zr:u<=i-o?l+(i-o-u)*Zr:e+(i-u)*s}}function Zs(i,t){let e=Jn(i),n=Mn(i),s=e.w,r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,y)=>[_,y,n.y(y)],f=c(a,-r),h=c(l,-r),u=c(l,s+o),p=c(a,s+o),m=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Jr),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Jr);if(i.shape==="pent"){let _=[f,h,u,p];return{faces:[_],rim:_,ridges:[[u,p]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,s-n.vr)||s/2),y=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],M=i.shape==="pyramid"?[[f,h,y],[h,u,y],[u,p,y],[p,f,y]]:[[f,h,v,y],[y,v,u,p],[p,f,y],[h,u,v]],S=i.shape==="pyramid"?[[f,y],[p,y],[h,y],[u,y]]:[[y,v],[f,y],[p,y],[h,v],[u,v]];return{faces:M,rim:[f,h,u,p],ridges:S,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(s)),y=_+(n.rh-_)*.55,v=m>1e-6?Math.min(n.vr,(y-i.eave_a)/m):n.vr,M=x>1e-6?Math.max(n.vr,s-(y-i.eave_b)/x):n.vr,S=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),C=[e.u0+S,n.vr,n.rh],b=[e.u1-S,n.vr,n.rh],w=[a,v,y],E=[a,M,y],A=[l,v,y],L=[l,M,y];return{faces:[[f,h,A,b,C,w],[C,b,L,u,p,E],[E,w,C],[A,L,b]],rim:[f,h,A,L,u,p,E,w],ridges:[[C,b],[w,C],[E,C],[A,b],[L,b]],gable:[[0,n.y(0)],[v,y],[M,y],[s,n.y(s)]]}}if(i.shape==="mansard"){let _=Dd(s,i.eave_a,i.eave_b,m,x),y=[a,_.vla,_.yla],v=[l,_.vla,_.yla],M=[a,s-_.vlb,_.ylb],S=[l,s-_.vlb,_.ylb],C=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[f,h,v,y],[y,v,b,C],[C,b,S,M],[M,S,u,p]],rim:[f,h,v,b,S,u,p,M,C,y],ridges:[[C,b],[y,v],[M,S]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[s-_.vlb,_.ylb],[s,n.y(s)]]}}let g=[a,n.vr,n.rh],d=[l,n.vr,n.rh];return{faces:[[f,h,d,g],[g,d,u,p]],rim:[f,h,d,u,p,g],ridges:[[g,d]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function Kr(i,t,e){let n=null;for(let s of i.faces){if(!pe([t,e],s.map(_=>[_[0],_[1]])))continue;let[r,o]=s,a=s.slice(2).find(_=>Math.abs((o[0]-r[0])*(_[1]-r[1])-(o[1]-r[1])*(_[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],c=o[2]-r[2],f=o[1]-r[1],h=a[0]-r[0],u=a[2]-r[2],p=a[1]-r[1],m=c*p-f*u,x=f*h-l*p,g=l*u-c*h;if(Math.abs(x)<1e-9)continue;let d=r[2]-(m*(t-r[0])+g*(e-r[1]))/x;n=n===null?d:Math.min(n,d)}return n}function Ii(i,t,e){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-r]:[e,i.flip?s-t:t-n]}function dv(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function yl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(t)*1.5)continue;let a=dv(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function Eu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Jn(t),n=Mn(t).rh,s=Zs(i,{u0:0,u1:0,a:0,b:0}),r=Mn(i),o=m=>{let[x,g]=e.at(m,e.w/2),[d,_]=Ii(i,x,g);return Kr(s,d,_)??r.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,f=a?1:-1,h=Math.abs(c-l),u=c;for(let m=.5;m<h;m+=.05)if(o(l+f*m)>=n-.02){u=l+f*m;break}if(Math.abs(u-c)<.05)return t;let p={...t};return t.axis==="x"?c===e.u1?p.x1=u:p.x0=u:c===e.u1?p.z1=u:p.z0=u,p}function Nd(i,t){let e=Eu(i,t),n=Jn(e),s=Mn(e),r=Zs(i,{u0:0,u1:0,a:0,b:0}),o=Mn(i),a=u=>{let[p,m]=n.at(u,n.w/2),[x,g]=Ii(i,p,m);return Kr(r,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,f=[],h=Math.max(1,Math.ceil(c/.15));for(let u=0;u<h;u++){let p=c*u/h,m=c*(u+1)/h,x=l?n.u0+p:n.u1-p,g=l?n.u0+m:n.u1-m,d=a(g),_=1/0,y=-1/0;for(let b=0;b<=40;b++){let w=n.w*b/40;s.y(w)>d+.02&&(_=Math.min(_,w),y=Math.max(y,w))}if(!(y-_>.05))continue;let v=n.at(x,_),M=n.at(g,y),S=Ii(i,v[0],v[1]),C=Ii(i,M[0],M[1]);f.push({u0:Math.min(S[0],C[0]),u1:Math.max(S[0],C[0]),v0:Math.min(S[1],C[1]),v1:Math.max(S[1],C[1])})}return f}function $s(i,t,e,n){let s=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=s(a),f=s(l);if(c&&r.push(a),c!==f){let h=(e-a[t])/(l[t]-a[t]);r.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return r}function Ud(i,t){let e=$s(i,0,t.u0,!0),n=$s(i,0,t.u1,!1),s=$s($s(i,0,t.u0,!1),0,t.u1,!0),r=$s(s,1,t.v0,!0),o=$s(s,1,t.v1,!1);return[e,n,r,o].filter(a=>a.length>=3&&Math.abs(Xr(a.map(l=>[l[0],l[1]])))>1e-6)}function Ml(i,t,e){let n=Jn(t),s=i.floors.flatMap(c=>c.rooms.filter(f=>f.points.length>=3&&c.elevation+c.height>t.base+.05)),r=c=>c.some(f=>s.some(h=>pe(f,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-o)))?0:e,b:r(a.map(c=>n.at(c,n.w+o)))?0:e,u0:r(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:r(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Od(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function pv(i){return Mn(i).rh}function Bd(i,t,e){let n=i.settings.roof.sections??[],s=n.filter(l=>e.includes(l.id)).map(l=>yl(n,l)??l);if(!s.length)return t.id;let r=Math.max(...s.map(l=>pv(l))),o=l=>l.rooms.some(c=>c.points.length>=3&&s.some(f=>{let[h,u]=c.points.reduce((p,m)=>[p[0]+m[0]/c.points.length,p[1]+m[1]/c.points.length],[0,0]);return h>=Math.min(f.x0,f.x1)&&h<=Math.max(f.x0,f.x1)&&u>=Math.min(f.z0,f.z1)&&u<=Math.max(f.z0,f.z1)}));return i.floors.filter(l=>l.elevation>=t.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??t.id}var Nn=1e-4;function Ru(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function zd(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1]],r=[n[0]-e[0],n[1]-e[1]],o=s[0]*r[1]-s[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o,l=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o;return a>Nn&&a<1-Nn&&l>-Nn&&l<1+Nn?a:null}function Cu(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s;if(r<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*s)/r;return o<=Nn||o>=1-Nn?null:Math.abs((i[0]-t[0])*s-(i[1]-t[1])*n)/Math.sqrt(r)<Nn?o:null}function mv(i,t){for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];for(let r=0;r<t.length;r++){let o=t[r],a=t[(r+1)%t.length];if(zd(n,s,o,a)!==null||Cu(o,n,s)!==null||Cu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Nn)return!0}}return pe(i[0],t)||pe(t[0],i)}function gv(i){let t=i.map(r=>Ru(r)>=0?r:[...r].reverse()),e=[];t.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],f=[0,1];t.forEach((h,u)=>{if(u!==o)for(let p=0;p<h.length;p++){let m=h[p],x=h[(p+1)%h.length],g=zd(l,c,m,x)??Cu(m,l,c);g!==null&&f.push(g)}}),f.sort((h,u)=>h-u);for(let h=1;h<f.length;h++){if(f[h]-f[h-1]<Nn)continue;let u=[l[0]+(c[0]-l[0])*f[h-1],l[1]+(c[1]-l[1])*f[h-1]],p=[l[0]+(c[0]-l[0])*f[h],l[1]+(c[1]-l[1])*f[h]],m=Math.hypot(p[0]-u[0],p[1]-u[1]),x=[(u[0]+p[0])/2+(p[1]-u[1])/m*.001,(u[1]+p[1])/2-(p[0]-u[0])/m*.001];t.some((g,d)=>d!==o&&pe(x,g))||e.some(([g,d])=>Math.hypot(g[0]-u[0],g[1]-u[1])<Nn&&Math.hypot(d[0]-p[0],d[1]-p[1])<Nn)||e.push([u,p])}}});let n=[],s=new Set;for(let r=0;r<e.length;r++){if(s.has(r))continue;s.add(r);let o=[e[r][0]],a=e[r][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([f],h)=>!s.has(h)&&Math.hypot(f[0]-a[0],f[1]-a[1])<.001);if(c<0)break;s.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Ru(o)>1e-6&&n.push(o)}return n}function Pu(i){let t=i.filter(r=>r.length>=3),e=t.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++)n(r)!==n(o)&&mv(t[r],t[o])&&(e[n(o)]=n(r));let s=new Map;return t.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:gv(r))}function xv(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function kd(i,t,e=.03){return i.every(n=>pe(n,t)||t.some((s,r)=>xv(n,s,t[(r+1)%t.length])<=e))}function Vd(i,t){let e=Ru(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return e.map((s,r)=>{let o=n(e[(r-1+e.length)%e.length],s),a=n(s,e[(r+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?s:[s[0]+(o[0]+a[0])/l*t,s[1]+(o[1]+a[1])/l*t]})}var rs=kt(3662079,.95),Iu=kt(3662079,1),Li=kt(5995775,.34),Gd=kt(5995775,.22),Js=[-.55,.83],ee=-1,Sl=16,os=32,Hd=48,Lu=64,fe=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,s,r=s,o=s,a,l=ee,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Ht;return t.setAttribute("position",new Dt(this.p,3)),t.setAttribute("color",new Dt(this.c,3)),t.setAttribute("fold",new Dt(this.f,1)),this.uv&&t.setAttribute("uv",new Dt(this.uv,2)),this.tile&&t.setAttribute("tile",new Dt(this.tile,2)),t.computeBoundingSphere(),t}},tn=class{p=[];c=[];f=[];seg(t,e,n=rs,s=ee){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(t,e,n,s,r){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,ee);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,ee),this.seg(c,a,n,r)}geometry(){let t=new Ht;return t.setAttribute("position",new Dt(this.p,3)),t.setAttribute("color",new Dt(this.c,3)),t.setAttribute("fold",new Dt(this.f,1)),t}};function Wd(i,t,e,n){let r=i.uv?2:0,o=(h,u)=>{let p=h*3+u;return{p:i.p.slice(p*3,p*3+3),c:i.c.slice(p*3,p*3+3),uv:i.uv?i.uv.slice(p*2,p*2+2):null,tile:i.tile?i.tile.slice(p*2,p*2+2):null}},a=(h,u,p)=>({p:h.p.map((m,x)=>m+(u.p[x]-m)*p),c:h.c.map((m,x)=>m+(u.c[x]-m)*p),uv:h.uv&&u.uv?h.uv.map((m,x)=>m+(u.uv[x]-m)*p):null,tile:h.tile}),l=(h,u,p)=>{for(let m=0;m<3;m++){let x=h*3+m;for(let g=0;g<3;g++)i.p[x*3+g]=u[m].p[g],i.c[x*3+g]=u[m].c[g];if(i.uv&&u[m].uv)for(let g=0;g<r;g++)i.uv[x*2+g]=u[m].uv[g];if(i.tile&&u[m].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=u[m].tile[g];i.f[x]=p}},c=(h,u)=>{let p=i.p.length/9;for(let m of h)i.p.push(...m.p),i.c.push(...m.c),i.f.push(u),i.uv?.push(...m.uv??[.5,.5]),i.tile?.push(...m.tile??[0,1]);return p},f=i.p.length/9;for(let h=t;h<f;h++){let u=[o(h,0),o(h,1),o(h,2)],p=u.map(b=>b.p[1]>e+1e-6),m=u.map(b=>b.p[1]<e-1e-6);if(!p.some(Boolean))continue;if(!m.some(Boolean)){for(let b=0;b<3;b++)i.f[h*3+b]=n;continue}let x=i.f[h*3],g=(b,w)=>a(b,w,(e-b.p[1])/(w.p[1]-b.p[1])),d=p.filter(Boolean).length,_=d===1?p.indexOf(!0):p.indexOf(!1),y=u[_],v=u[(_+1)%3],M=u[(_+2)%3],S=g(y,v),C=g(M,y);d===1?(l(h,[y,S,C],n),c([S,v,M],x),c([S,M,C],x)):(l(h,[y,S,C],x),c([S,v,M],n),c([S,M,C],n))}}function Xd(i,t,e,n){let s=i.p.length/6;for(let r=t;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let f=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*f,e,l[2]+(c[2]-l[2])*f];for(let p=0;p<3;p++)i.p[r*6+p]=l[p],i.p[r*6+3+p]=h[p];let u=i.c.slice(r*6,r*6+3);i.p.push(...h,...c),i.c.push(...u,...u),i.f.push(n,n)}}var Ce=Math.PI/180;function kt(i,t){let e=new nt(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function bv(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t}function Qr(i,t=[]){let e=i.map(([n,s])=>new Vt(n,s));return Tr.triangulateShape(e,t.map(n=>n.map(([s,r])=>new Vt(s,r))))}function qd(i,t,e,n,s,r,o){let a=new nt(o),l=p=>.5+.5*Math.min(1,Math.max(0,p/1.6));for(let p=0;p<4;p++){let m=t[p],x=t[(p+1)%4],g=e[p],d=e[(p+1)%4],_=x[0]-m[0],y=x[1]-m[1],v=Math.hypot(_,y);if(v<1e-6)continue;let S=.8+.28*((y/v*Js[0]-_/v*Js[1]+1)/2),C=(g[0]+d[0]-m[0]-x[0])/2*(-y/v)+(g[1]+d[1]-m[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,C/Math.max(1e-6,Math.hypot(C,s-n)))),w=kt(r,l(n)*S).lerp(a,b),E=kt(r,l(s)*S).lerp(a,b);i.tri([m[0],n,m[1]],[g[0],s,g[1]],[d[0],s,d[1]],w,E,E),i.tri([m[0],n,m[1]],[d[0],s,d[1]],[x[0],n,x[1]],w,E,w)}let[c,f,h,u]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],s,c[1]],[h[0],s,h[1]],[f[0],s,f[1]],a),i.tri([c[0],s,c[1]],[u[0],s,u[1]],[h[0],s,h[1]],a))}function Yd(i,t,e,n){let s=t.length;if(s<2)return;let r=t[0].length,o=new nt(n),a=(m,x)=>[m[0]-x[0],m[1]-x[1],m[2]-x[2]],l=(m,x)=>[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],c=m=>{let x=Math.hypot(m[0],m[1],m[2])||1;return[m[0]/x,m[1]/x,m[2]/x]},f=t.map(m=>[0,1,2].map(x=>m.reduce((g,d)=>g+d[x],0)/r)),h=t.map((m,x)=>m.map((g,d)=>{let _=a(t[Math.min(s-1,x+1)][d],t[Math.max(0,x-1)][d]),y=a(m[(d+1)%r],m[(d+r-1)%r]),v=c(l(_,y)),M=a(g,f[x]);return v[0]*M[0]+v[1]*M[1]+v[2]*M[2]<0&&(v=[-v[0],-v[1],-v[2]]),v})),u=(m,x)=>{let g=.5+.5*Math.min(1,Math.max(0,m[1]/1.6)),d=(x[0]*Js[0]+x[2]*Js[1]+1)/2;return kt(e,g*(.8+.28*d)).lerp(o,Math.max(0,x[1])*.9)},p=(m,x,g,d,_,y,v)=>{let M=l(a(x,m),a(g,m));M[0]*d[0]+M[1]*d[1]+M[2]*d[2]>=0?i.tri(m,x,g,_,y,v):i.tri(m,g,x,_,v,y)};for(let m=0;m+1<s;m++)for(let x=0;x<r;x++){let g=(x+1)%r,d=t[m][x],_=t[m][g],y=t[m+1][g],v=t[m+1][x],M=h[m][x],S=h[m][g],C=h[m+1][g],b=h[m+1][x],w=u(d,M),E=u(_,S),A=u(y,C),L=u(v,b),I=[M[0]+S[0]+C[0]+b[0],M[1]+S[1]+C[1]+b[1],M[2]+S[2]+C[2]+b[2]];p(d,_,y,I,w,E,A),p(d,y,v,I,w,A,L)}for(let[m,x]of[[0,-1],[s-1,1]]){let g=t[m],d=f[m],_=a(t[m===0?1:s-2][0],g[0]),y=c([_[0]*-x,_[1]*-x,_[2]*-x]),v=u(d,y);for(let M=0;M<r;M++)p(g[M],g[(M+1)%r],d,y,v,v,v)}}function $d(i,t,e,n,s,r,o,a,l,c){let f=new nt(l),h=[];for(let p=0;p<c;p++){let m=p/c*Math.PI*2;h.push({y:r+Math.cos(m)*o,s:s+Math.sin(m)*o})}let u=(p,m)=>{let x=t(p,h[m%c].s);return[x[0],h[m%c].y,x[1]]};for(let p=0;p<c;p++){let m=(p+.5)/c*Math.PI*2,x=kt(a,.62+.4*Math.max(0,Math.cos(m)));i.tri(u(e,p),u(n,p+1),u(n,p),x),i.tri(u(e,p),u(e,p+1),u(n,p+1),x)}for(let p of[e,n]){let m=t(p,s),x=[m[0],r,m[1]];for(let g=0;g<c;g++)i.tri(x,u(p,g),u(p,g+1),f)}}function Ie(i,t,e,n,s,r,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(e+.002,n(m[0],m[1])),l=o.aoFrom??e,c=o.fold??ee,f=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),h=(o.holes??[]).map(m=>bv(m)>0?[...m].reverse():m),u=h.length?[...t,...h.flat()]:t,p=o.topFace===!1&&!o.bottom?[]:Qr(t,h);if(o.topFace!==!1){let m=new nt(r);for(let[x,g,d]of p){let _=u[x],y=u[g],v=u[d];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[y[0],a(y),y[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=kt(s,.55);for(let[x,g,d]of p){let _=u[x],y=u[g],v=u[d];i.tri([_[0],e,_[1]],[y[0],e,y[1]],[v[0],e,v[1]],m,m,m,void 0,c)}}for(let m of[t,...h])for(let x=0;x<m.length;x++){let g=m[x],d=m[(x+1)%m.length],_=d[0]-g[0],y=d[1]-g[1],v=Math.hypot(_,y);if(v<1e-6||o.skipSide?.(g,d))continue;let S=.8+.28*((y/v*Js[0]-_/v*Js[1]+1)/2),C=a(g),b=a(d),w=kt(s,f(e)*S),E=kt(s,f(C)*S),A=kt(s,f(b)*S);i.tri([g[0],e,g[1]],[g[0],C,g[1]],[d[0],b,d[1]],w,E,A,void 0,c),i.tri([g[0],e,g[1]],[d[0],b,d[1]],[d[0],e,d[1]],w,A,w,void 0,c)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},Mt=kt(5995775,.3),ae=kt(5995775,.17),Kt=kt(3662079,.45),jr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=tp(n)}rotated(t,e,n){let s=n*Ce,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*r-(c-e)*o,e+(l-t)*o+(c-e)*r))}box(t,e,n,s,r,o,a,l=a,c=null){if(e-t<1e-4||o-r<1e-4||s-n<1e-4)return;let f=[this.tf(t,r),this.tf(t,o),this.tf(e,o),this.tf(e,r)];Ie(this.buf,Fu(f),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(f,n,s,c)}loft(t,e,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Fu(l)&&(l.reverse(),c.reverse()),qd(this.buf,l,c,n,s,r,o),a)for(let f=0;f<4;f++)this.line(c[f],c[(f+1)%4],s,s,a),this.line(l[f],c[f],n,s,a)}sweep(t,e,n=e,s=16,r=2.6,o=null){if(t.length<2)return;let a=t.map(l=>{let c=Math.max(.004,(l.y1-l.y0)/2),f=Math.max(.004,l.hw),h=(l.y0+l.y1)/2,u=[];for(let p=0;p<s;p++){let m=p/s*Math.PI*2,x=Math.cos(m),g=Math.sin(m),[d,_]=this.tf(l.x+f*Math.sign(x)*Math.abs(x)**(2/r),l.z);u.push([d,h+c*Math.sign(g)*Math.abs(g)**(2/r),_])}return u});if(Yd(this.buf,a,e,n),o){let l=Math.round(s/4);for(let c=0;c+1<a.length;c++){let f=a[c][l],h=a[c+1][l];this.lines.seg(f,h,o,ee)}}}pad(t,e,n,s,r,o,a,l=a,c=.03,f=null){if(c=Math.min(c,(e-t)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(t,e,n,s,r,o,a,l,f);this.loft([t+c,e-c,r+c,o-c],[t,e,r,o],n,n+c,a),s-n-2*c>.005&&this.box(t,e,n+c,s-c,r,o,a,a,f),this.loft([t,e,r,o],[t+c,e-c,r+c,o-c],s-c,s,a,l)}lyingCyl(t,e,n,s,r,o,a,l,c=l,f=12,h=null){let u=Math.min(a,r-s)/2;if(u<1e-4||o<1e-4)return;let p=(s+r)/2,m=t==="x"?e:n,x=t==="x"?n:e,g=(_,y)=>t==="x"?this.tf(_,y):this.tf(y,_),d=this.buf.p.length;if($d(this.buf,g,m-o/2,m+o/2,x,p,u,l,c,f),this.mirrored&&Ou(this.buf,d),h)for(let _ of[m-o/2,m+o/2])for(let y=0;y<f;y++){let v=y/f*Math.PI*2,M=(y+1)/f*Math.PI*2;this.line(g(_,x+Math.sin(v)*u),g(_,x+Math.sin(M)*u),p+Math.cos(v)*u,p+Math.cos(M)*u,h)}}cyl(t,e,n,s,r,o,a=o,l=10,c=null){let f=[];for(let h=0;h<l;h++){let u=h/l*Math.PI*2;f.push(this.tf(t+Math.cos(u)*n,e+Math.sin(u)*n))}if(Ie(this.buf,Fu(f),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let h=0;h<l;h++)this.line(f[h],f[(h+1)%l],r,r,c)}seg(t,e,n,s,r,o,a=Mt){this.line(this.tf(t,n),this.tf(s,o),e,r,a)}line(t,e,n,s,r){this.lines.seg([t[0],n,t[1]],[e[0],s,e[1]],r,ee)}outline(t,e,n,s){for(let r=0;r<4;r++){let o=t[r],a=t[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,e,n,s)}}};function tp(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Fu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}function as(i,t,e,n,s,r,o=D.metal,a=!1){let l=t/2-r-s,c=e/2-r-s;for(let f of[-1,1])for(let h of[-1,1]){let u=f*l,p=h*c;a?i.loft([u-s*.3,u+s*.3,p-s*.3,p+s*.3],[u-s/2,u+s/2,p-s/2,p+s/2],0,n,o):i.box(u-s/2,u+s/2,0,n,p-s/2,p+s/2,o)}}function to(i,t,e,n,s,r,o,a=null,l=!1){let c=(e-t)/o;for(let f=1;f<o;f++){let h=t+c*f;i.seg(h,n,r,h,s,r,ae)}for(let f=0;f<o;f++){let h=t+c*(f+.5),u=a??s-.08;if(l)i.seg(h-Math.min(.1,c/4),u,r+.012,h+Math.min(.1,c/4),u,r+.012,Kt);else{let p=o>1?h+(f%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(p,u-.08,r+.012,p,u+.08,r+.012,Kt)}}}function Zd(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),f=n*.5,h=Math.min(.24,e*.28);as(i,t,e,.07,.05,.05,D.wood,!0),i.pad(r,o,.07,f-.08,a+.02,l,D.fabric,D.fabricTop,.04,Mt),i.loft([r,o,a,a+h],[r+.01,o-.01,a,a+h*.5],f-.08,n,D.fabric,D.fabricTop,Mt),i.pad(r,r+c,f-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Mt),i.pad(o-c,o,f-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Mt);let p=(o-c-(r+c))/s;for(let m=0;m<s;m++){let x=r+c+p*m+.02,g=x+p-.04;i.pad(x,g,f-.08,f+.05,a+h+.02,l-.06,D.cushion,D.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,D.cushion)}}function _v(i,t,e,n){let s=-e/2,r=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);as(i,t,e,.08,.06,.03,D.wood,!0),i.box(o,a,.08,l,s+.06,r,D.wood,D.woodTop,Mt),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,D.wood,D.woodTop,Mt),i.box(o,a,n-.05,n,s,s+.09,D.wood,D.woodTop,ae);let c=l+.2,f=s+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,f,r-.01,D.cushion,D.fabricTop,.025,ae),i.lyingCyl("x",0,f+.05,c-.02,c+.09,t-.02,.1,D.cushion,D.fabricTop,8);let h=t>1.2?2:1,u=(t-.2)/h;for(let p=0;p<h;p++){let m=o+.1+u*p,x=s+.12,g=Math.min(.42,e*.2),d=.1;i.loft([m+.03+d,m+u-.03-d,x+d*.5,x+g-d*.5],[m+.03,m+u-.03,x,x+g],c,c+.06,D.whiteTop),i.loft([m+.03,m+u-.03,x,x+g],[m+.03+d,m+u-.03-d,x+d*.5,x+g-d*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,ae)}}function vv(i,t,e,n){let s=Math.min(.46,n*.52);as(i,t,e,s-.04,.035,.02,D.wood,!0),i.box(-t/2,t/2,s-.04,s,-e/2,e/2,D.wood,D.woodTop,Mt),i.pad(-t/2+.02,t/2-.02,s,s+.04,-e/2+.05,e/2-.03,D.cushion,D.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],s,n,D.wood,D.woodTop,Mt)}function yv(i,t,e,n){as(i,t,e,n-.04,.06,.05,D.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,Kt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,D.body)}function Mv(i,t,e,n){let s=-t/2,r=t/2;i.box(s,r,n-.035,n,-e/2,e/2,D.wood,D.woodTop,Mt),i.box(s,s+.03,0,n-.035,-e/2+.03,e/2-.03,D.metal);let o=Math.min(.42,t*.32);i.box(r-o,r,0,n-.035,-e/2+.03,e/2-.02,D.body,D.bodyTop,Mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,ae);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,Kt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,D.dark,D.dark,Kt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,D.metal)}function Fi(i,t,e,n,s,r=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,Mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),to(i,-t/2,t/2,.08,n,e/2-.02,s,r,o)}function Sv(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,D.wood,D.woodTop,Mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,D.wood,D.woodTop,Mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,D.wood,D.woodTop,ae),o<r){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let f=.03+c*7%5*.008,h=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+f,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=f+.006,c++}}}}function wv(i,t,e,n){let s=Math.max(1,Math.round(t/.6));Fi(i,t,e-.02,n-.04,s,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,Mt)}function Tv(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.white,D.whiteTop,Mt);let s=n*.62;i.seg(-t/2,s,e/2,t/2,s,e/2,ae);let r=t/2-.06;i.seg(r,s+.08,e/2+.015,r,s+.4,e/2+.015,Kt),i.seg(r,s-.4,e/2+.015,r,s-.08,e/2+.015,Kt)}function Av(i,t,e,n){let s=e/2-ep;i.box(-t/2,t/2,.02,n,-e/2,s,D.body,D.bodyTop,Mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,s-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-t/2+.03,r,s+.001,-.03,r,s+.001,ae),i.seg(.03,r,s+.001,t/2-.03,r,s+.001,ae))}var ep=.06;function np(i,t,e,n,s){let r=i.p.length;Ev(i,t,e,n,s),t.mirror&&Ou(i,r)}function Ev(i,t,e,n,s){let r=t.rotation*Ce,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],f=e+.05,h=e+t.h-.02,u=new nt(.75,.1,.14),p=new nt(D.dark),m=new nt(D.accent),x=t.w/2-.006,g=(v,M,S)=>{let C=S/d,b=new nt(2043212).lerp(u,C),w=new nt(D.body).lerp(u,C*.8),E=Math.cos(S),A=Math.sin(S),L=(F,U)=>c(v+M*(F*E-U*A),t.d/2+F*A+U*E),I=(F,U,O,V)=>{let[z,B,X,tt]=F;i.tri([z[0],U,z[1]],[B[0],U,B[1]],[X[0],O,X[1]],V),i.tri([z[0],U,z[1]],[X[0],O,X[1]],[tt[0],O,tt[1]],V)},R=(F,U,O,V,z,B,X,tt=X)=>{let j=[L(F,B),L(U,B),L(U,z),L(F,z)];I([j[0],j[1],j[1],j[0]],O,V,tt),I([j[3],j[2],j[2],j[3]],O,V,X),I([j[0],j[3],j[3],j[0]],O,V,X),I([j[1],j[2],j[2],j[1]],O,V,X),I([j[0],j[1],j[2],j[3]],V,V,X),I([j[3],j[2],j[1],j[0]],O,O,X)};return R(0,x,f,h,-ep,0,w,b),R(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,m),R},d=1.83;g(-t.w/2,1,n*d)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,p),g(t.w/2,-1,s*d)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,p)}function Rv(i,t,e,n){Fi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.dark,D.dark,Mt);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*t/.6,l=r*e/.62;i.cyl(a,l,o,n,n+.004,D.dark,1451583,12,Kt)}}function Cv(i,t,e,n){Fi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let s=Math.min(.5,t-.2);i.box(-t/2,-s/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,Mt),i.box(s/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,Mt),i.box(-s/2,s/2,n-.04,n,-e/2,-e/2+.1,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.04,n,e/2-.08,e/2,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-e/2+.1,e/2-.08,D.metal,D.metal,Kt),i.cyl(0,-e/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,D.metal)}function Pv(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,D.white,D.whiteTop,Mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,D.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,D.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,D.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,D.glass,D.glass,Kt),i.cyl(-t/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function Iv(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,D.whiteTop,D.whiteTop,Mt),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[s,r,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(s,.05,r,o,.05,a,Kt),i.seg(s,n,r,o,n,a,Kt),i.seg(o,.05,a,o,n,a,Kt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,Kt)}function Lv(i,t,e,n){let s=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+s,D.white,D.whiteTop,Mt),i.box(-t*.3,t*.3,0,.36,-e/2+s-.02,e/2-.12,D.white,D.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,D.white,D.whiteTop,12,Mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+s,-e/2+s+.05,D.whiteTop)}function Fv(i,t,e,n){Fi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,D.white,D.whiteTop,Mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,D.glass,D.glass,Kt),i.cyl(0,-e/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,D.glass,D.glass,Kt)}function Dv(i,t,e,n){Fi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let s=Math.min(t*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,D.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-e/2+.12,-e/2+.16,D.dark,D.dark,Kt)}function Nv(i,t,e,n){let s=Math.min(t,e)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,D.pot,D.pot,10,Mt),i.cyl(0,0,s*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),f=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,f,f+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?ae:null)}}function Uv(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[s,r,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(s,.014,r,o,.014,a,Mt)}function Ov(i,t,e,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=e/s;for(let f=0;f<s;f++){let h=e/2-o*f,u=h-o,p=r*(f+1);i.box(-t/2,t/2,0,p,u,h,D.wood,D.woodTop),i.seg(-t/2,p,h,t/2,p,h,Mt)}i.seg(-t/2,0,e/2,-t/2,r,e/2,Mt);for(let f of[-t/2,t/2])i.seg(f,r,e/2,f,n,-e/2+o,ae);let a=.9,l=t/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,e/2-o/2,l,r*c+a,e/2-o*(c-.5),Kt);for(let f=0;f<c;f+=3){let h=e/2-o*(f+.5),u=r*(f+1);i.seg(l,u,h,l,u+a,h,ae)}}function Bv(i,t,e,n){as(i,t,e,.12,.03,.04,D.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,D.wood,D.woodTop,Mt),to(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function zv(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,D.wood,D.woodTop,Mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,D.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=e/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-t/2,a,r,t/2,a,r,ae)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,Kt)}}function kv(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,D.wood,D.woodTop,Mt),to(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,D.body,D.bodyTop,Mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.wood,D.woodTop,Mt);let s=Math.max(2,Math.round(t/.25));for(let r=0;r<s;r++){let o=-t/2+t/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,D.metal,D.metal)}}function Jd(i,t,e,n,s){let o=Math.min(.5,s?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,D.wood,D.woodTop,Mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,D.wood,D.woodTop,Mt),i.box(-t/2+(s?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,D.cushion,D.cushion,ae),s&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,D.wood,D.woodTop,Mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,D.wood,D.woodTop,Mt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,D.cushion,D.cushion,ae))}function Vv(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,D.metal,D.metal,12,ae),i.cyl(0,0,s,n-.05,n,D.cushion,D.fabricTop,14,Mt)}function Gv(i,t,e,n){let s=Math.min(t,e)/2;i.box(-s,s,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-s,s,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,D.fabric,D.cushion,Mt),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,D.fabric,D.fabricTop,Mt),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,D.metal)}function Hv(i,t,e,n){as(i,t,e,.08,.04,.05,D.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,D.fabric,D.cushion,Mt)}function Wv(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,D.body,D.bodyTop,Mt),to(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function Xv(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,D.body,D.bodyTop,Mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark);let s=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,s,s+.01,D.dark,D.dark,Kt),i.seg(-t/2+.08,1.4,s+.02,t/2-.08,1.4,s+.02,Kt);for(let r of[.85,1.45])i.seg(-t/2,r,s,t/2,r,s,ae);i.seg(t/2-.06,.5,s+.012,t/2-.06,.7,s+.012,Kt),i.seg(t/2-.06,1.6,s+.012,t/2-.06,1.8,s+.012,Kt)}function qv(i,t,e,n){let s=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+s,D.body,D.bodyTop,Mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+s-.04,D.dark),to(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+s,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,Mt)}function Yv(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,D.body,D.bodyTop,Mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,D.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Kt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,D.whiteTop,D.whiteTop,Mt)}function Kd(i,t,e,n,s){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,D.white,D.whiteTop,Mt);let r=e/2-.012;i.seg(-t/2,n-.14,r,t/2,n-.14,r,ae),i.seg(t/2-.16,n-.07,r,t/2-.08,n-.07,r,Kt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let f=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(f)*a,o+Math.sin(f)*a,r,Math.cos(h)*a,o+Math.sin(h)*a,r,Kt),s||i.seg(Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,r,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,ae)}}function $v(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,D.wood,D.woodTop,Mt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,D.white,D.whiteTop,ae),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,D.whiteTop,D.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,D.wood,D.woodTop);let r=t/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,Mt);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,e/2+.02,r+.18,o,e/2+.02,ae)}function Zv(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,s,n-.04,n,D.wood,D.woodTop,20,Mt)}function Jv(i,t,e,n){as(i,t,e,n-.03,.04,.03,D.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,D.wood,D.woodTop,Mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,D.body,D.bodyTop,ae)}function Kv(i,t,e,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.03,e/2,D.dark,D.dark,Kt)}function Qv(i,t,e,n){let s=Nu;i.box(-t/2+.05,-t/2+.08,0,s,-e/2,-e/2+.03,D.metal),i.box(t/2-.08,t/2-.05,0,s,-e/2,-e/2+.03,D.metal),i.box(-t/2,t/2,s,s+n,-e/2+.02,e/2,D.white,D.whiteTop,Mt);let r=Math.max(3,Math.round(t/.1));for(let o=1;o<r;o++){let a=-t/2+t/r*o;i.seg(a,s+.03,e/2+.002,a,s+n-.03,e/2+.002,ae)}}function Qd(i,t,e,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,s,t+Math.cos(l)*n,e+Math.sin(l)*n,s,Kt)}}function jv(i,t,e,n,s){let o=e/2;if(s==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.dark,D.body,Mt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Kt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(s==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,Mt),Qd(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Kt);for(let a of[-1,1])Qd(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,D.white,D.whiteTop,Mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,D.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Kt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,ae)}function ty(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,D.dark,D.body,Mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,D.dark,D.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Kt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,ae)}function ey(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,D.dark,D.body,Mt);let r=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,f=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,e/2+.003,Math.cos(f)*r,o+Math.sin(f)*r,e/2+.003,Kt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,D.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,D.dark,D.body)}function ny(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,D.white,D.whiteTop,Mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,ae),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,ae),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,D.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,D.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Kt)}function iy(i,t,e,n,s){if(s==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,D.white,D.whiteTop,Mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Kt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,ae);return}if(s==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,D.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,D.dark,D.body,Mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Kt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,D.white,D.whiteTop,Mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Kt)}}var Nu=.12;function Uu(i,t){let e=sy(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function sy(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=md(i.type);if(r){let l=t?Dn(t,i):0,c=(r.x-r.w/2)*e,f=(r.x+r.w/2)*e,h=Math.min(.02,(f-c)*.05);return{x0:c+h,x1:f-h,y0:l+r.y*s+h,y1:l+(r.y+r.h)*s-h,z:(r.z+r.d/2)*n}}let o=t&&i.type!=="fridge_smart"?Dn(t,i)-Hr(i):0,a=ry(i,e,n,s,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function ry(i,t,e,n,s){if(i.type==="tv_board"){let r=Math.min(t*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:r+.02,y1:r+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let r=s?Dn(s,i):0;return{x0:.06,x1:t/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Nu+.02,y1:Nu+n-.02,z:e/2+.004};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function oy(i,t,e,n,s){let r=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new nt(1-s,1-s,1-s),a=new nt(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-r,-n/2-r),t(e/2+r,-n/2-r),t(e/2+r,n/2+r),t(-e/2-r,n/2+r)],h=p=>[p[0],l,p[1]],u=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let p=0;p<4;p++){let m=(p+1)%4;i.tri(h(c[p]),h(f[p]),h(f[m]),o,a,a),i.tri(h(c[p]),h(f[m]),h(c[m]),o,a,o)}tp(t)&&Ou(i,u)}function wl(i,t,e,n,s=0){ay(i,t,e,n,s)}function Ou(i,t){let e=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let s=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,s*3,1),e(i.uv,s*6,2),e(i.tile,s*6,2)}}function ay(i,t,e,n,s){let r=He(n.type)?0:s-Hr(n);if(He(n.type)||Math.abs(r)<.001)return jd(i,t,e,n,s);let o=i.p.length,a=t.p.length;jd(i,t,s<.05?e:new fe,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=r}function jd(i,t,e,n,s){let r=n.rotation*Ce,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],f=new jr(i,t,c),h=Math.max(.05,n.w),u=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":Zd(f,h,u,p,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":Zd(f,h,u,p,1);break;case"bed":_v(f,h,u,p);break;case"chair":vv(f,h,u,p);break;case"table":yv(f,h,u,p);break;case"desk":Mv(f,h,u,p);break;case"nightstand":Fi(f,h,u,p,1,p*.72,!0),f.seg(-h/2,p*.5,u/2-.02,h/2,p*.5,u/2-.02,ae);break;case"wardrobe":Fi(f,h,u,p,Math.max(2,Math.round(h/.5)),p*.5);break;case"shelf":Sv(f,h,u,p);break;case"kitchen":wv(f,h,u,p);break;case"fridge":Tv(f,h,u,p);break;case"fridge_smart":Av(f,h,u,p);break;case"stove":Rv(f,h,u,p);break;case"sink":Cv(f,h,u,p);break;case"bathtub":Pv(f,h,u,p);break;case"shower":Iv(f,h,u,p);break;case"wc":Lv(f,h,u,p);break;case"washbasin":Fv(f,h,u,p);break;case"tv_board":Dv(f,h,u,p);break;case"plant":Nv(f,h,u,p);break;case"rug":Uv(f,h,u);return;case"stairs":Ov(f,h,u,p);break;case"stairwell":return;case"sideboard":Bv(f,h,u,p);break;case"dresser":zv(f,h,u,p);break;case"tall_cabinet":Fi(f,h,u,p,1,p*.5);break;case"coat_rack":kv(f,h,u,p);break;case"bench":Jd(f,h,u,p,!1);break;case"corner_bench":Jd(f,h,u,p,!0);break;case"bar_stool":Vv(f,h,u,p);break;case"office_chair":Gv(f,h,u,p);break;case"stool":Hv(f,h,u,p);break;case"kitchen_wall":Wv(f,h,u,p);return;case"kitchen_tall":Xv(f,h,u,p);break;case"island":qv(f,h,u,p);break;case"worktop":f.box(-h/2,h/2,Math.max(0,p-.04),p,-u/2,u/2,D.whiteTop,D.whiteTop,Mt);return;case"dishwasher":Yv(f,h,u,p);break;case"washer":Kd(f,h,u,p,!1);break;case"dryer":Kd(f,h,u,p,!0);break;case"bunk_bed":$v(f,h,u,p);break;case"table_round":Zv(f,h,u,p);break;case"coffee_table":Jv(f,h,u,p);break;case"tv_wall":Kv(f,h,u,p);return;case"parking":{let x=[[-h/2,-u/2],[h/2,-u/2],[h/2,u/2],[-h/2,u/2]];for(let g=0;g<4;g++)f.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],ae);f.seg(-h*.15,.012,u/2-.45,0,.012,u/2-.2,Mt),f.seg(0,.012,u/2-.2,h*.15,.012,u/2-.45,Mt);return}case"robot_vacuum":f.box(-h*.45,h*.45,0,p,-u/2,-u/2+u*.3,D.white,D.whiteTop,Mt),f.box(-h*.2,h*.2,p*.5,p*.62,-u/2+u*.3,-u/2+u*.31,D.accent);return;case"radiator":Qv(f,h,u,p);return;case"inverter":jv(f,h,u,p,n.variant??null);return;case"grid_point":ty(f,h,u,p);break;case"wallbox":ey(f,h,u,p);return;case"meter":ny(f,h,u,p);return;case"home_battery":if(iy(f,h,u,p,n.variant??null),n.variant==="wall")return;break;default:{let m=He(n.type);if(m){if(ip(f,m,h,u,p,s,null,null,n.variant??null),s>.05)return}else f.box(-h/2,h/2,0,p,-u/2,u/2,D.body,D.bodyTop,Mt)}}oy(e,c,h,u,n.type==="plant"?.35:.5)}function Du(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=D;return(t?e[`${i}Top`]:void 0)??e[i]??null}function ip(i,t,e,n,s,r,o,a=null,l=null){let c=t.colors?.length?(t.colors.find(h=>h.id===l)??t.colors[0]).hex:null,f=!!a;for(let h of t.parts){if(a&&!a(h))continue;let u=f?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/s),h:h.h+.004/s}:h,p=u.glow&&o!==null,m=u.paint&&c?c:u.color,x=p?o:Du(m,!1)??D.body,g=p?o:Du(u.paint&&c?void 0:u.top,!1)??Du(m,!0)??kt(x,1.25).getHex(),d=r+u.y*s,_=r+Math.min(s,(u.y+u.h)*s),y=u.edges==="glow"?rs:u.edges==="faint"?ae:u.edges?Mt:null,v=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))v.lyingCyl(u.axis,u.x*e,u.z*n,d,_,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,x,g,14,y);else if(u.shape==="cyl")v.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,d,_,x,g,14,y);else if(u.shape==="loft"){let M=u.tx??u.x,S=u.tz??u.z,C=u.tw??u.w,b=u.td??u.d;v.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(M-C/2)*e,(M+C/2)*e,(S-b/2)*n,(S+b/2)*n],d,_,x,g,y)}else if(u.shape==="sweep"){let M=(u.stations??[]).map(([S,C,b,w])=>({x:u.x*e,z:S*n,y0:r+C*s,y1:r+b*s,hw:w*e/2}));v.sweep(M,x,g,u.n??16,u.exp??2.6,y)}else v.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,d,_,(u.z-u.d/2)*n,(u.z+u.d/2)*n,x,g,y)}}function sp(i,t,e,n,s,r){let o=r*Ce,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[e+m*a-x*l,s+m*l+x*a],f=new jr(i,new tn,c),h=1713728,u=2373216,p=725279;if(t==="camera_ceiling"){f.cyl(0,0,.07,n-.03,n,h,u,12),f.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,p,h),f.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}f.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,u),f.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,u),f.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,u),f.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,p,D.accent,10),f.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Tl(i,t,e,n,s){let r=e.rotation*Ce,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(f,h)=>[e.x+l*f*o-h*a,e.z+l*f*a+h*o];ip(new jr(i,new tn,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s)}var ly={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}};function op(i,t){return Wr(i)+(t.offset??0)+(ns(t.type)?.01:bl[t.type])}function eo(i){return ss(i)>=0?i:[...i].reverse()}function cy(i,t){let e=i[t];if(ns(e.type)||e.type==="pool")return[];let n=[];for(let s=t+1;s<i.length;s++){let r=i[s];!r.cut||r.points.length<3||r.points.every(o=>pe(o,e.points))&&n.push(eo(r.points))}return n}function rp(i,t,e,n,s,r,o,a,l=0){let c=e[0]-t[0],f=e[1]-t[1],h=Math.hypot(c,f);if(h<1e-6)return;let u=-f/h*n*.5,p=c/h*n*.5;if(Math.abs(l)<1e-4){Ie(i,eo([[t[0]+u,t[1]+p],[e[0]+u,e[1]+p],[e[0]-u,e[1]-p],[t[0]-u,t[1]-p]]),s,r,o,a,{aoFrom:s-1});return}let m=(v,M)=>[t[0]+u*M,v,t[1]+p*M],x=(v,M)=>[e[0]+u*M,v+l,e[1]+p*M],g=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,ee),i.tri(v[0],v[2],v[3],M,M,M,void 0,ee),i.tri(v[0],v[2],v[1],M,M,M,void 0,ee),i.tri(v[0],v[3],v[2],M,M,M,void 0,ee)},d=new nt(a),_=new nt(kt(o,.9)),y=new nt(kt(o,.6));g([m(r,1),x(r,1),x(r,-1),m(r,-1)],d),g([m(s,1),x(s,1),x(s,-1),m(s,-1)],y),g([m(s,1),x(s,1),x(r,1),m(r,1)],_),g([m(s,-1),x(s,-1),x(r,-1),m(r,-1)],_),g([m(s,1),m(s,-1),m(r,-1),m(r,1)],_),g([x(s,1),x(s,-1),x(r,-1),x(r,1)],_)}function ap(i,t,e){let n=Wr(e),s=e.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=(g,d)=>a-Tu(r,g,d),c=a-(r.type==="pool"?0:r.slope??0),f=ns(r.type)&&r.height?r.height:bl[r.type],h={...ly[r.type],top:f},u=eo(r.points),p=kt(h.edge,h.edgeAlpha),m=r.open&&(r.type==="fence"||r.type==="pergola")?u.length-1:-1,x=g=>{if(r.outline!==!1)for(let d=0;d<u.length;d++){if(d===m)continue;let _=u[d],y=u[(d+1)%u.length];t.seg([_[0],g(_[0],_[1]),_[1]],[y[0],g(y[0],y[1]),y[1]],p,ee)}};switch(r.type){case"pool":{let g=new nt(h.color);for(let[_,y,v]of Qr(u)){let M=u[_],S=u[y],C=u[v];i.tri([M[0],a+h.top,M[1]],[C[0],a+h.top,C[1]],[S[0],a+h.top,S[1]],g,g,g,void 0,ee)}let d=new nt(h.side);for(let _=0;_<u.length;_++){let y=u[_],v=u[(_+1)%u.length];i.tri([v[0],a+h.top,v[1]],[v[0],a+.06,v[1]],[y[0],a+.06,y[1]],d,d,d,void 0,ee),i.tri([v[0],a+h.top,v[1]],[y[0],a+.06,y[1]],[y[0],a+h.top,y[1]],d,d,d,void 0,ee)}x(()=>a+.06),x(()=>a+h.top+.005);break}case"fence":{for(let g=0;g<u.length;g++){if(g===m)continue;let d=u[g],_=u[(g+1)%u.length],y=Math.hypot(_[0]-d[0],_[1]-d[1]),v=Math.max(1,Math.round(y/2)),M=m>=0&&g===m-1?v:v-1;for(let S=0;S<=M;S++){let C=S/v,b=d[0]+(_[0]-d[0])*C,w=d[1]+(_[1]-d[1])*C,E=l(b,w);Ie(i,eo([[b-.04,w-.04],[b+.04,w-.04],[b+.04,w+.04],[b-.04,w+.04]]),E,E+h.top,h.side,h.color)}for(let S of[.35,.85])t.seg([d[0],l(d[0],d[1])+S*h.top,d[1]],[_[0],l(_[0],_[1])+S*h.top,_[1]],p,ee)}break}case"pergola":{let g=h.top;for(let[d,_]of u){let y=l(d,_);Ie(i,eo([[d-.06,_-.06],[d+.06,_-.06],[d+.06,_+.06],[d-.06,_+.06]]),y,y+g,h.side,h.color)}for(let d=0;d<u.length;d++){if(d===m)continue;let _=u[d],y=u[(d+1)%u.length],v=l(_[0],_[1])+g;if(rp(i,_,y,.12,v-.16,v,h.side,h.color,l(y[0],y[1])-l(_[0],_[1])),r.bracing){let M=l(_[0],_[1]),S=l(y[0],y[1]);t.seg([_[0],M+.25,_[1]],[y[0],S+g-.25,y[1]],p,ee),t.seg([y[0],S+.25,y[1]],[_[0],M+g-.25,_[1]],p,ee)}}if(Md(u)){let d=Sd(u),_=d.x1-d.x0,y=d.z1-d.z0,v=_>=y,M=v?_:y,S=Math.max(1,Math.round(M/.6));for(let C=1;C<S;C++){let b=(v?d.x0:d.z0)+M*C/S,w=v?[b,d.z0+.06]:[d.x0+.06,b],E=v?[b,d.z1-.06]:[d.x1-.06,b],A=l(w[0],w[1])+g;rp(i,w,E,.06,A-.04,A+.08,h.side,h.color,l(E[0],E[1])-l(w[0],w[1]))}}x((d,_)=>l(d,_)+g+.004);break}default:{let g=(_,y)=>l(_,y)+h.top,d=cy(s,o);if(Ie(i,u,c,r.slope?g:a+h.top,h.side,h.color,{aoFrom:c,holes:d}),x((_,y)=>g(_,y)+.004),r.type==="hedge"&&x((_,y)=>l(_,y)+.004),r.outline!==!1)for(let _ of d)for(let y=0;y<_.length;y++){let v=_[y],M=_[(y+1)%_.length];t.seg([v[0],g(v[0],v[1])+.004,v[1]],[M[0],g(M[0],M[1])+.004,M[1]],p,ee)}}}})}var El=Math.PI/180,uy=1.13,hy=1.72,Bu=.025,ls=.07,lp=.25;function cp(i,t){let e=[];for(let n of i.floors){if(t&&n.id!==t)continue;let{walls:s}=$r(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,f=-o/l,h=Math.min(n.height,r.height??n.height),u=(p,m,x,g)=>e.push({key:p,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});u(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+f*r.right],[o/l,0,a/l],[c,0,f]),r.free&&u(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-f*r.left],[-o/l,0,-a/l],[-c,0,-f])}}return e}var zu="ground";function ku(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function up(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],s=[-Math.sin(e),0,Math.cos(e)],r=ku(i),o=n[0]*t.u+s[0]*t.v,a=n[2]*t.u+s[2]*t.v,l=r?r.elevation+(t.base!=null?t.base:xd(r,o,a)):t.base??0;return{key:zu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}function fy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Rl(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>dy(_,Ml(i,_,_.overhang??t.overhang)));let e=fy(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(y=>y[0])),s=e.rooms.flatMap(_=>_.points.map(y=>y[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,f=e.elevation+e.height;if(t.type==="flat")return[hp("main",null,o,l,a,c,f+lp)];let h=a-o>=c-l,u=t.ridge==="short"?!h:h,p=(u?c-l:a-o)/2,m=p*Math.tan(t.pitch*El),x=(_,y,v)=>u?[_,f+v,(l+c)/2+y]:[(o+a)/2+y,f+v,_],[g,d]=u?[o,a]:[l,c];return[-1,1].map(_=>Al(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(g,_*p,0),x(d,_*p,0),x(g,0,m),t.pitch,()=>[0,d-g]))}function dy(i,t){let e=Jn(i),n=Mn(i),s=(x,g,d)=>{let[_,y]=e.at(x,g);return[_,d,y]},r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-r),g=e.at(l,e.w+o);return[hp(i.id,i.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),i.eave_a+lp)]}if(i.shape==="pent")return[Al(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let f=i.shape==="hip"||i.shape==="pyramid",h=i.shape==="pyramid"?(e.u1-e.u0)/2:f?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,u=f?e.u0+h-a:0,p=f?l-(e.u1-h):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));m.push(Al(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,g=>[u*(g/x),c-p*(g/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));m.push(Al(`${i.id}:b`,i.id,"b",s(l,e.w+o,n.y(e.w+o)),s(a,e.w+o,n.y(e.w+o)),s(l,n.vr,n.rh),i.pitch_b,g=>[p*(g/x),c-u*(g/x)]))}if(f){let x=n.y(-r),g=n.y(e.w+o),d=[[`${i.id}:c`,"c",s(a,e.w+o,g),s(a,-r,x),s(e.u0+h,n.vr,n.rh)],[`${i.id}:d`,"d",s(l,-r,x),s(l,e.w+o,g),s(e.u1-h,n.vr,n.rh)]];for(let[_,y,v,M,S]of d){let C=py(_,i.id,y,v,M,S);C&&m.push(C)}}return m}function py(i,t,e,n,s,r){let o=no(cs(s,n));if(o<.3)return null;let a=Di(cs(s,n)),l=cs(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],f=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=no(f);if(h<.3)return null;let u=Di(f),p=Di(pp(a,u));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let m=Di([-u[0],0,-u[2]]),x=Math.atan2(u[1],Math.hypot(u[0],u[2]))/El;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:u,n:p,lu:o,ls:h,pitch:x,span:d=>{let _=Math.min(1,Math.max(0,d/h));return[c*_,o-(o-c)*_]},facing:[m[0],m[2]]}}function Al(i,t,e,n,s,r,o,a){let l=Di(cs(s,n)),c=Di(cs(r,n)),f=Di(pp(l,c));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let h=Di([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:f,lu:no(cs(s,n)),ls:no(cs(r,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function hp(i,t,e,n,s,r,o){let a=s-e>=r-n,l=a?s-e:r-n,c=a?r-n:s-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function fp(i){let t=i.module_w||uy,e=i.module_h||hy;return i.portrait===!1?[e,t]:[t,e]}function my(i){return i.layout?.length?i.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function dp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*El:i.wall?Math.min(90,Math.max(0,t.tilt??0))*El:0}function gy(i,t){let[,e]=fp(t),n=dp(i,t);return i.wall?e*Math.cos(n)+Bu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Bu}function Vu(i,t,e=!1){let[n,s]=fp(t),r=[],o=dp(i,t),a=s*Math.cos(o),l=gy(i,t),c=my(t),f=Math.max(1,...c),h=new Set(t.skip??[]),u=(m,x,g)=>[i.o[0]+i.eu[0]*m+i.es[0]*x+i.n[0]*g,i.o[1]+i.eu[1]*m+i.es[1]*x+i.n[1]*g,i.o[2]+i.eu[2]*m+i.es[2]*x+i.n[2]*g],p=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,d]=i.span(x);return m>=g-1e-6&&m<=d+1e-6};return c.forEach((m,x)=>{let g=t.align==="right"?f-m:t.align==="center"?(f-m)/2:0;for(let d=0;d<m;d++){let _=`${x}:${d}`,y=h.has(_);if(y&&!e)continue;let v=t.u+(d+g)*(n+Bu),M=t.v+x*l,S=v+n,C=M+(i.flat||i.wall?a:s);if(![[v,M],[S,M],[S,C],[v,C]].every(([I,R])=>p(I,R)))continue;if(i.wall&&o>.001){let I=ls+s*Math.sin(o),[R,F]=t.flip?[I,ls]:[ls,I],U=[u(v,M,R),u(S,M,R),u(S,C,F),u(v,C,F)],O=t.flip?M:C,V=[v+.05,S-.05].map(z=>[u(z,O,0),u(z,O,I)]);r.push({corners:U,posts:V,cell:_,skipped:y});continue}if(!i.flat){r.push({corners:[u(v,M,ls),u(S,M,ls),u(S,C,ls),u(v,C,ls)],posts:[],cell:_,skipped:y});continue}let b=.15,w=b+s*Math.sin(o),[E,A]=t.flip?[C,M]:[M,C],L=[u(v,E,b),u(S,E,b),u(S,A,w),u(v,A,w)];r.push({corners:L,posts:[v+.05,S-.05].flatMap(I=>[[u(I,E,0),u(I,E,b)],[u(I,A,0),u(I,A,w)]]),cell:_,skipped:y})}}),r}function cs(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function no(i){return Math.hypot(i[0],i[1],i[2])}function Di(i){let t=no(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function pp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var xy=.78,by=1.18;function _y(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||xy,module_h:i.h||by}}function Gu(i,t){let e=Vu(i,_y(t))[0];if(!e)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var io=1712952,so=2239816,xp=1318193,us=kt(3662079,.9),Ks=kt(5995775,.45),ze=.14,vy=9427199,yy=13226982,My=14936565,Sy={black:{glass:new nt(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new nt(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},wy=kt(13226982,.5),Ty=kt(13226982,.85),Ay=kt(16757575,.95),mp=new nt(2845583),gp=new nt(3818072);function Ey(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function bp(i,t=new Map){let e=i.settings.roof,n=e?.type==="custom"?null:Py(i),s=e?.type==="custom"?Iy(i,e.sections??[],e.overhang):n?[n]:[];return Cy(i,s),Ry(i,s,t),s}function Ry(i,t,e){let n=i.settings.roof?.windows??[];if(!n.length||!t.length)return;let s=new Map(Rl(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?Gu(o,r):null;if(!o||!a)continue;let l=o.section?t.find(A=>A.sections?.includes(o.section)):t[0];if(!l)continue;let c=l.floor.elevation+l.base,f=A=>[A[0],A[1]-c,A[2]],[h,u,p,m]=a.map(f),x=e.get(r.id)??{open:0,tilt:0,cover:0},g=(A,L)=>[A[0]+o.n[0]*L,A[1]+o.n[1]*L,A[2]+o.n[2]*L],d=(A,L,I)=>[A[0]+(L[0]-A[0])*I,A[1]+(L[1]-A[1])*I,A[2]+(L[2]-A[2])*I],_=x.open>.02||x.tilt>.02?Ay:Ty,y=[h,u,p,m].map(A=>g(A,.06));for(let A=0;A<4;A++)l.lines.seg(y[A],y[(A+1)%4],_);let v=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*Ce,M=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]),S=A=>{let L=o.es;return[A[0]-L[0]*M*Math.cos(v)+o.n[0]*M*Math.sin(v),A[1]-L[1]*M*Math.cos(v)+o.n[1]*M*Math.sin(v),A[2]-L[2]*M*Math.cos(v)+o.n[2]*M*Math.sin(v)]},C=g(m,.065),b=g(p,.065),w=S(C),E=S(b);l.solid.tri(w,E,b,mp),l.solid.tri(w,b,C,mp);for(let[A,L]of[[w,E],[E,b],[b,C],[C,w]])l.lines.seg(A,L,_);if(x.cover>.02){let A=Math.min(1,x.cover),L=g(d(C,w,A),.01),I=g(d(b,E,A),.01),R=g(C,.01),F=g(b,.01);l.solid.tri(L,I,F,gp),l.solid.tri(L,F,R,gp)}}}function Cy(i,t){let e=i.settings.roof?.solar??[];if(!e.length||!t.length)return;let n=new Map(Rl(i).map(s=>[s.key,s]));for(let s of e){let r=n.get(s.face);if(!r)continue;let o=r.section?t.find(a=>a.sections?.includes(r.section)):t[0];o&&Hu(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}function Hu(i,t,e,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=Sy[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Vu(e,n)){let[f,h,u,p]=c.corners.map(r);i.tri(f,h,u,o.glass),i.tri(f,u,p,o.glass),i.tri(f,u,h,o.glass),i.tri(f,p,u,o.glass);let m=(d,_=.004)=>[d[0]+e.n[0]*_,d[1]+e.n[1]*_,d[2]+e.n[2]*_],x=(d,_,y)=>[d[0]+(_[0]-d[0])*y,d[1]+(_[1]-d[1])*y,d[2]+(_[2]-d[2])*y],g=[f,h,u,p].map(d=>m(d));for(let d=0;d<4;d++)t.seg(g[d],g[(d+1)%4],o.edge);for(let d=1;d<a;d++)t.seg(m(x(f,h,d/a)),m(x(p,u,d/a)),o.cells);for(let d=1;d<l;d++)t.seg(m(x(f,p,d/l)),m(x(h,u,d/l)),o.cells);for(let[d,_]of c.posts)t.seg(r(d),r(_),wy)}}function Py(i){let t=i.settings.roof,e=Ey(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(A=>A[0])),s=e.rooms.flatMap(E=>E.points.map(A=>A[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,f=new fe,h=new tn;if(t.type==="flat"){Ie(f,[[o,l],[a,l],[a,c],[o,c]],0,.25,io,so,{bottom:!0});let E=.252;for(let[A,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([A[0],E,A[1]],[L[0],E,L[1]],us),h.seg([A[0],0,A[1]],[L[0],0,L[1]],Ks);return{floor:e,base:e.height,solid:f,lines:h,glass:new fe}}let u=a-o>=c-l,p=t.ridge==="short"?!u:u,m=(p?c-l:a-o)/2,x=m*Math.tan(t.pitch*Ce),g=(E,A,L)=>p?[E,L,(l+c)/2+A]:[(o+a)/2+A,L,E],[d,_]=p?[o,a]:[l,c],y=new nt(so),v=new nt(io),M=(E,A,L,I,R)=>{f.tri(E,A,L,R),f.tri(E,L,I,R)};for(let E of[-1,1]){M(g(d,E*m,0),g(_,E*m,0),g(_,0,x),g(d,0,x),y),M(g(d,E*m,-ze),g(d,0,x-ze),g(_,0,x-ze),g(_,E*m,-ze),v),M(g(d,E*m,-ze),g(_,E*m,-ze),g(_,E*m,0),g(d,E*m,0),v);for(let A of[d,_])M(g(A,E*m,-ze),g(A,E*m,0),g(A,0,x),g(A,0,x-ze),v);h.seg(g(d,E*m,0),g(_,E*m,0),Ks);for(let A of[d,_])h.seg(g(A,E*m,0),g(A,0,x),Ks)}let S=t.overhang,C=new nt(xp),b=m-S,w=b*Math.tan(t.pitch*Ce);for(let E of[d+S,_-S])f.tri(g(E,-b,-ze),g(E,b,-ze),g(E,0,w-ze),C),f.tri(g(E,b,-ze),g(E,-b,-ze),g(E,0,w-ze),C);return h.seg(g(d,0,x+.004),g(_,0,x+.004),us),{floor:e,base:e.height,solid:f,lines:h,glass:new fe}}function Iy(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(Rl(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Od(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new fe,lines:new tn,glass:new fe,sections:[],lift:!o.open}),c.sections.push(o.id);let f=yl(t,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!f,u=t.filter(x=>x!==o&&yl(t,x)===o).flatMap(x=>Nd(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),d=g&&g.section===o.id?Gu(g,x):null;if(!d)continue;let _=d.map(y=>Ii(o,y[0],y[2]));u.push({u0:Math.min(..._.map(y=>y[0])),u1:Math.max(..._.map(y=>y[0])),v0:Math.min(..._.map(y=>y[1])),v1:Math.max(..._.map(y=>y[1]))})}let p=f?Eu(f,o):o,m=null;if(f){let x=Jn(p),g=Zs(f,{u0:0,u1:0,a:0,b:0}),d=_=>{let[y,v]=x.at(_,x.w/2),[M,S]=Ii(f,y,v);return Kr(g,M,S)??Mn(f).y(S)};m=d(x.u0)<=d(x.u1)?0:1}Ly(c.solid,c.lines,p,Ml(i,p,p.overhang??e),a.elevation,c.glass,h,u,m)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function Ly(i,t,e,n,s,r=i,o=!1,a=[],l=null){let c=Jn(e),f=Mn(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,u=Math.max(0,h.a),p=Math.max(0,h.b),m=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),d=(I,R,F)=>{let[U,O]=c.at(I,R);return[U,F-s,O]},_=new nt(so),y=new nt(io),v=new nt(xp),M=(I,R)=>{for(let F=1;F+1<I.length;F++)i.tri(I[0],I[F],I[F+1],R)},S=[],C=[],b=[],w=null;if(e.shape==="flat"||e.shape==="parapet"){let I=e.eave_a,R=e.shape==="parapet",F=e.points&&e.points.length>=3?Fd(e,R?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):R?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-u),c.at(g,-u),c.at(g,m+p),c.at(x,m+p)];Ie(i,F,I-s,I-s+.25,io,so,{bottom:!0});for(let U=0;U<F.length;U++){let O=F[U],V=F[(U+1)%F.length];t.seg([O[0],I-s+.252,O[1]],[V[0],I-s+.252,V[1]],us),t.seg([O[0],I-s,O[1]],[V[0],I-s,V[1]],Ks)}if(R){let U=B=>Xr(B)>=0?B:[...B].reverse(),O=U(F),V=Au(O,-.2),z=O.length;for(let B=0;B<z;B++){let X=U([O[B],O[(B+1)%z],V[(B+1)%z],V[B]]);Ie(i,X,I-s+.25,I-s+.65,io,so),t.seg([O[B][0],I-s+.652,O[B][1]],[O[(B+1)%z][0],I-s+.652,O[(B+1)%z][1]],us),t.seg([V[B][0],I-s+.652,V[B][1]],[V[(B+1)%z][0],I-s+.652,V[(B+1)%z][1]],us)}}}else{let I=Zs(e,h);S=I.faces;for(let R of a)S=S.flatMap(F=>Ud(F,R));C=I.rim,b=I.ridges,w=I.gable}let E=!!e.open,A=new nt(vy);for(let I of S){if(E){for(let R=1;R+1<I.length;R++)r.tri(d(I[0][0],I[0][1],I[0][2]),d(I[R][0],I[R][1],I[R][2]),d(I[R+1][0],I[R+1][1],I[R+1][2]),A);continue}M(I.map(([R,F,U])=>d(R,F,U)),_),M(I.map(([R,F,U])=>d(R,F,U-ze)),y)}for(let I=0;I<C.length;I++){let[R,F,U]=C[I],[O,V,z]=C[(I+1)%C.length];E||M([d(R,F,U),d(O,V,z),d(O,V,z-ze),d(R,F,U-ze)],y),t.seg(d(R,F,U),d(O,V,z),E?us:Ks)}if(E){Fy(i,t,c,f,h,d,s);return}for(let[[I,R,F],[U,O,V]]of b)t.seg(d(I,R,F+.004),d(U,O,V+.004),us);let L=e.base;if(!o){if(w){let I=Dy(w,L-ze),R=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let F of R)M(I.map(([U,O])=>d(F,U,O)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let I of[0,m]){let R=f.y(I)-ze;R>L+.02&&M([d(c.u0,I,L),d(c.u1,I,L),d(c.u1,I,R),d(c.u0,I,R)],v)}else if(e.eave_a>L+.02)for(let[I,R,F,U]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])M([d(I,R,L),d(F,U,L),d(F,U,e.eave_a),d(I,R,e.eave_a)],v)}}function Fy(i,t,e,n,s,r,o){let a=e.w,l=.12,c=.16,f=s.a>0,h=s.b>0,u=s.u0>0,p=s.u1>0,m=(d,_,y,v,M,S)=>{let C=[e.at(d,y),e.at(_,y),e.at(_,v),e.at(d,v)],b=(C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]);Ie(i,b<0?[...C].reverse():C,M-o,S-o,yy,My,{bottom:!0})},x=o;for(let[d,_]of[[0,f],[a,h]]){if(!_)continue;let y=n.y(d)-.03,v=d===0?0:a-l;m(e.u0,e.u1,v,v+l,y-c,y),t.seg(r(e.u0,d,y-c),r(e.u1,d,y-c),Ks)}for(let[d,_]of[[e.u0,u],[e.u1-l,p]])if(_)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,S=Math.min(n.y(v),n.y(M))-.03;m(d,d+l,v,M,S-c,S)}let g=[];for(let[d,_]of[[0,f],[a-l,h]]){if(!_)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let S=e.u0+y*M/v;M===0&&!u||M===v&&!p||g.push([S,d])}}if(!f&&!h)for(let d of[e.u0,e.u1-l])(d===e.u0&&u||d!==e.u0&&p)&&g.push([d,a/2-l/2]);for(let[d,_]of g){let y=n.y(_+l/2)-.03-c;m(d,d+l,_,_+l,x,y)}}function Dy(i,t){let e=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=t&&e.push([o,a]);let l=i[r+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],s=e[e.length-1];return s[1]>t&&e.push([s[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ro={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},_p={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ni=.2,oo=8,Cl=.42,Wu=.42;function wp(i,t,e,n=[],s=[],r){let{walls:o,open:a}=$r(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(A,L,I)=>{let R=r?r(A,L):null;return R===null?I:Math.max(.05,Math.min(I,R))},c=(A,L,I,R,F)=>{if(!r)return F;let U=F,O=Math.max(2,Math.ceil((R-I)/.25)+1);for(let V=0;V<O;V++){let z=I+(R-I)*V/(O-1);U=Math.min(U,l(A[0]+L[0]*z,A[1]+L[1]*z,F))}return U},f=new fe(!0,!0),h=[],u=new tn,p=[];for(let A of i.rooms){if(A.points.length<3)continue;let L=Sp(A.points),I=_p[A.floor_material]??_p.wood,R=new nt(I.color),F=n.filter(B=>kd(B,L)).map(B=>Vd(B,.003));p.push(...F);let U=[...L,...F.flat()],O=f.count;for(let[B,X,tt]of Qr(L,F)){let j=U[B],ut=U[X],ct=U[tt];f.tri([j[0],0,j[1]],[ct[0],0,ct[1]],[ut[0],0,ut[1]],R,R,R,[j[0],j[1],ct[0],ct[1],ut[0],ut[1]],ee,I.tile)}h.push({roomId:A.id,start:O,end:f.count,color:I.color});let V=new nt(ro.slab),z=B=>{for(let X=0;X<B.length;X++){let tt=B[X],j=B[(X+1)%B.length];f.tri([tt[0],-Ni,tt[1]],[tt[0],0,tt[1]],[j[0],0,j[1]],V),f.tri([tt[0],-Ni,tt[1]],[j[0],0,j[1]],[j[0],-Ni,j[1]],V)}};z(L);for(let B of F){z([...Sp(B)].reverse());for(let X=0;X<B.length;X++){let tt=B[X],j=B[(X+1)%B.length];u.seg([tt[0],.006,tt[1]],[j[0],.006,j[1]],rs),u.seg([tt[0],-Ni,tt[1]],[j[0],-Ni,j[1]],Li)}}}let m=new Map,x=[],g=new Map;for(let A of o){let L="interior",I=null;if(A.exterior){let F=A.b[0]-A.a[0],U=A.b[1]-A.a[1],O=Math.hypot(F,U)||1,V=[U/O,-F/O],z=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*oo)%oo+oo)%oo;L=`s${z}`;let B=z/oo*2*Math.PI;I=[Math.cos(B),Math.sin(B)]}let R=m.get(L);R===void 0&&(R=x.length,m.set(L,R),x.push(I)),g.set(A,R)}let d=new Map,_=[];for(let A of i.openings){let L=Rd(A,i.rooms,i.walls??[]);if(!L)continue;let I=Cd(o,A,L);if(!I)continue;let{wall:R,s:F}=I,U=Ll([R.b[0]-R.a[0],R.b[1]-R.a[1]]),O=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),V=Math.min(A.width,O),z=Math.max(0,Math.min(O-V,F-V/2)),B=L.room.points,X=R.free?U[0]*(B[1][0]-B[0][0])+U[1]*(B[1][1]-B[0][1])>0:R.roomLeft===A.room_id,tt=[-U[1],U[0]],j=X?tt:[-tt[0],-tt[1]],ut=Math.min(c(R.a,U,z,z+V,Pl(R,i.height))-.02,A.sill+A.height),ct=Math.max(0,Math.min(A.sill,ut-.1)),Nt=[j[1],-j[0]],q=U[0]*Nt[0]+U[1]*Nt[1]>0,J={opening:A,bucket:g.get(R),start:[R.a[0]+U[0]*z,R.a[1]+U[1]*z],axis:U,width:V,toRoom:j,faceRoom:X?R.left:R.right,faceOut:X?R.right:R.left,sill:ct,top:ut,hingeAtStart:A.hinge==="left"===q,exterior:R.exterior};_.push(J);let at=d.get(R);at||d.set(R,at=[]),at.push({s0:z,s1:z+V,sill:ct,top:ut,info:J})}let y=Math.min(i.cut_height,i.height),v=new fe;for(let A of o){let L=g.get(A),I=Ll([A.b[0]-A.a[0],A.b[1]-A.a[1]]),R=(d.get(A)??[]).sort((tt,j)=>tt.s0-j.s0),F=Pl(A,i.height),U=[],O=[-1/0,...new Set(R.flatMap(tt=>[tt.s0,tt.s1])).values(),1/0].sort((tt,j)=>tt-j);for(let tt=0;tt+1<O.length;tt++){let j=O[tt],ut=O[tt+1];if(ut-j<1e-6)continue;let ct=Number.isFinite(j)&&Number.isFinite(ut)?(j+ut)/2:Number.isFinite(j)?j+1:ut-1,Nt=R.filter(at=>at.s0<ct&&at.s1>ct).map(at=>[at.sill,at.top]).sort((at,wt)=>at[0]-wt[0]),q=[],J=-Ni;for(let[at,wt]of Nt)at>J+1e-4&&q.push([J,at]),J=Math.max(J,wt);F>J+1e-4&&q.push([J,F]),U.push({t0:j,t1:ut,ranges:q})}let V=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),z=r&&c(A.a,I,0,V,F)<F-.001,B=z?U.flatMap(tt=>{let j=Math.max(tt.t0,-.5),ut=Math.min(tt.t1,V+.5),ct=Math.max(1,Math.ceil((ut-j)/.3));return Array.from({length:ct},(Nt,q)=>({t0:q===0?tt.t0:j+(ut-j)*q/ct,t1:q===ct-1?tt.t1:j+(ut-j)*(q+1)/ct,ranges:tt.ranges,inner0:q>0,inner1:q<ct-1}))}):U.map(tt=>({...tt,inner0:!1,inner1:!1})),X=tt=>(tt[0]-A.a[0])*I[0]+(tt[1]-A.a[1])*I[1];for(let tt of B){let j=Uy(A.footprint,A.a,I,tt.t0,tt.t1);if(j.length<3)continue;let ut=(q,J)=>Math.abs(X(q)-J)<1e-4,ct=(q,J)=>tt.inner0&&ut(q,tt.t0)&&ut(J,tt.t0)||tt.inner1&&ut(q,tt.t1)&&ut(J,tt.t1),Nt=z?Math.min(...j.map(([q,J])=>l(q,J,F))):F;for(let[q,J]of tt.ranges){let at=Math.min(J,z?Math.max(...j.map(([jt,Ft])=>l(jt,Ft,F))):J);if(at-q<1e-4||Nt-q<.01)continue;let wt=q>.01,gt=z&&J>Nt,Bt=(jt,Ft)=>Math.min(J,l(jt,Ft,F));if(q<y-1e-6){let jt=at>y+1e-6?Hd+L:os+L,Ft=gt&&Nt<y?($t,se)=>Math.min(y,Bt($t,se)):Math.min(at,y);Ie(v,j,q,Ft,ro.wall,ro.wallTop,{aoFrom:0,bottom:wt,fold:os+L,topFold:jt,skipSide:ct})}at>y+1e-6&&Nt>y+1e-6&&Ie(v,j,Math.max(q,y),gt?Bt:at,ro.wall,ro.wallTop,{aoFrom:0,fold:L,bottom:wt&&q>=y,skipSide:ct})}}}let M=o.flatMap(A=>A.footprint),S=By(o,M),C=new tn;C.p.push(...u.p),C.c.push(...u.c),C.f.push(...u.f);let b=(A,L)=>(d.get(A)??[]).filter(L);for(let A of S.edges){let L=g.get(A.wall);for(let[R,F]of Il(A,b(A.wall,U=>U.sill<=.005)))C.seg([R[0],.004,R[1]],[F[0],.004,F[1]],Gd);for(let[R,F]of Il(A,b(A.wall,U=>U.sill<y&&U.top>y)))C.seg([R[0],y,R[1]],[F[0],y,F[1]],Iu,Sl+L);let I=Pl(A.wall,i.height);for(let[R,F]of Il(A,b(A.wall,U=>U.top>=I-.021))){if(!r){C.seg([R[0],I,R[1]],[F[0],I,F[1]],rs,I<=y+1e-6?os+L:L);continue}let U=Math.max(1,Math.ceil(Math.hypot(F[0]-R[0],F[1]-R[1])/.3));for(let O=0;O<U;O++){let V=[R[0]+(F[0]-R[0])*O/U,R[1]+(F[1]-R[1])*O/U],z=[R[0]+(F[0]-R[0])*(O+1)/U,R[1]+(F[1]-R[1])*(O+1)/U],B=l(V[0],V[1],I),X=l(z[0],z[1],I);C.seg([V[0],B,V[1]],[z[0],X,z[1]],rs,Math.max(B,X)<=y+1e-6?os+L:L)}}}for(let A of S.corners){let L=l(A.p[0],A.p[1],Pl(A.wall,i.height));C.segSplit([A.p[0],.004,A.p[1]],[A.p[0],L,A.p[1]],Li,Math.min(y,L),g.get(A.wall))}for(let A of d.values())for(let L of A)Ny(C,L,y);let w=zy(S.edges,i.rooms,d);ap(v,C,i);for(let A of s)Hu(v,C,A.face,A.field,i.elevation);let E=[];for(let A of i.furniture){if(_d(A.type))continue;let L=v.count,I=C.p.length/6,R=Dn(i,A);wl(v,C,w,A,R),R+A.h>y+.05&&(Wd(v,L,y,Lu),Xd(C,I,y,Lu)),E.push({id:A.id,start:L,end:v.count})}return{floor:f.geometry(),roomTris:h,holes:p,walls:v.geometry(),lines:C.geometry(),shadow:w.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(A=>g.get(A)),furnitureTris:E,roofUnder:r}}function Ny(i,t,e){let{info:n}=t,s=n.bucket,r=(l,c,f)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,f,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?s:ee,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(r(c,l,a),r(c,l,t.top),Li,e,s);i.seg(r(t.s0,l,t.top),r(t.s1,l,t.top),Li,o(t.top)),t.sill>.01&&i.seg(r(t.s0,l,t.sill),r(t.s1,l,t.sill),Li,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(r(l,n.faceRoom,t.top),r(l,-n.faceOut,t.top),Li,o(t.top)),t.sill>.01&&i.seg(r(l,n.faceRoom,t.sill),r(l,-n.faceOut,t.sill),Li,o(t.sill)),t.sill<e&&t.top>e&&i.seg(r(l,n.faceRoom,e),r(l,-n.faceOut,e),Iu,Sl+s)}function Uy(i,t,e,n,s){let r=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=vp(o,a=>r(a)-n)),Number.isFinite(s)&&(o=vp(o,a=>s-r(a))),o}function vp(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=t(s),a=t(r);if(o>=0&&e.push(s),o>=0!=a>=0){let l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}var yp=i=>Math.round(i*1e3),ao=i=>`${yp(i[0])},${yp(i[1])}`,Mp=(i,t)=>{let e=ao(i),n=ao(t);return e<n?`${e}|${n}`:`${n}|${e}`};function Oy(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let u=((h[0]-s[0])*o+(h[1]-s[1])*a)/l;if(u<=1e-6||u>=1-1e-6)continue;Math.abs((h[0]-s[0])*a-(h[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(u)}c.sort((h,u)=>h-u);let f=s;for(let h of c){let u=[s[0]+o*h,s[1]+a*h];ao(u)!==ao(f)&&e.push([f,u]),f=u}e.push([f,r])}return e}function By(i,t){let e=i.map(l=>({wall:l,edges:Oy(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,f]of l){let h=Mp(c,f);n.set(h,(n.get(h)??0)+1)}let s=[],r=new Map,o=(l,c,f)=>{let h=ao(l),u=r.get(h);u||r.set(h,u={p:l,wall:c,d:[]}),u.d.push(f)};for(let{wall:l,edges:c}of e)for(let[f,h]of c){if(n.get(Mp(f,h))!==1)continue;let u=Math.hypot(h[0]-f[0],h[1]-f[1]);if(u<1e-4)continue;s.push({a:f,b:h,wall:l});let p=[(h[0]-f[0])/u,(h[1]-f[1])/u];o(f,l,p),o(h,l,p)}let a=[];for(let{p:l,wall:c,d:f}of r.values())f.some(h=>f.some(u=>Math.abs(h[0]*u[1]-h[1]*u[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function Il(i,t){if(!t.length)return[[i.a,i.b]];let e=Ll([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Ll([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let s=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let h of t)c=c.flatMap(([u,p])=>{if(h.s1<=u||h.s0>=p)return[[u,p]];let m=[];return h.s0>u&&m.push([u,h.s0]),h.s1<p&&m.push([h.s1,p]),m});let f=h=>{let u=(h-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*u,i.a[1]+(i.b[1]-i.a[1])*u]};return c.filter(([h,u])=>u-h>1e-4).map(([h,u])=>r<=o?[f(h),f(u)]:[f(u),f(h)])}function zy(i,t,e){let n=new fe,s=new nt(Wu,Wu,Wu),r=new nt(1,1,1),o=.002;for(let a of i)for(let[l,c]of Il(a,(e.get(a.wall)??[]).filter(f=>f.sill<=.005))){let f=c[0]-l[0],h=c[1]-l[1],u=Math.hypot(f,h);if(u<.05)continue;let p=[h/u,-f/u],m=[(l[0]+c[0])/2+p[0]*.05,(l[1]+c[1])/2+p[1]*.05];if(!t.some(d=>d.points.length>=3&&pe(m,d.points)))continue;let x=[l[0]+p[0]*Cl,l[1]+p[1]*Cl],g=[c[0]+p[0]*Cl,c[1]+p[1]*Cl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function Tp(i,t){let e=t.furniture.filter(r=>r.type==="stairwell").map(vl),n=i.filter(r=>r.elevation<t.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return Pu(e);let s=n.furniture.filter(r=>(r.type==="stairs"||He(r.type)?.hole)&&n.elevation+r.h>=t.elevation-.3).map(vl);return Pu([...e,...s])}function Pl(i,t){return Math.min(t,i.height??t)}function Ll(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Sp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}var ky=500,Ap=.12,Ep=1.35,Vy=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Fl=class{view={target:new k,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let s=(r,o,a)=>{t.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:f}=this.flight,h=Math.min(1,(t-c)/f),u=Vy(h);this.view.target.lerpVectors(a.target,l.target,u),this.view.radius=a.radius+(l.radius-a.radius)*u,this.view.theta=a.theta+(l.theta-a.theta)*u,this.view.phi=a.phi+(l.phi-a.phi)*u,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Xu(this.view.phi+this.velocity.phi,Ap,Ep),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},s=t.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:s,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab?.(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},ky)}else this.down=null,this.pinch=this.pinchState()}onMove(t){let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag?.(...this.local(t));return}let n=t.clientX-e.x,s=t.clientY-e.y;if(this.swiping){this.events.swipeMove?.(t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,t.clientX-this.down.x,t.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}if(e.button===1||e.button===2||t.shiftKey)this.pan(n,s);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-s/o*2.4;this.view.theta+=a,this.view.phi=Xu(this.view.phi+l,Ap,Ep),this.velocity={theta:a,phi:l}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(t){if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),this.events.drop?.();return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,s)):(this.lastTap=r,this.events.tap(n,s))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Xu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new k(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new k(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-t*s),this.view.target.addScaledVector(o,e*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Xu(i,t,e){return Math.min(e,Math.max(t,i))}function Ui(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool nfShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int nfFold = int(fold + 0.5);
          int nfKind = nfFold / 16;
          int nfBucket = nfFold - nfKind * 16;
          bool nfStanding = ((uStanding >> nfBucket) & 1) == 1;
          bool nfGlass = ((uGlass >> nfBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          nfShow = nfKind == 0 || nfKind == 4 ? nfStanding : nfKind == 1 || nfKind == 3 ? !nfStanding : true;
          bool nfWall = nfKind == 0 || nfKind == 2;
          ${e==="solid"?"if (nfGlass && nfWall) nfShow = false;":""}
          ${e==="glass"?"nfShow = nfShow && nfGlass && nfWall;":""}
        }
        if (!nfShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`nf-fold-${e}`,i}function Gy(i,t){let e=He(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function qu(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let s=n.type==="parking"?t.get(n.id):void 0,r=s?Gy(n,s):null;return r?[n,r]:[n]});return{...i,furniture:e}}var Rp=["neon","blueprint","day"];function Cp(i){return Rp.indexOf(i)}var Dl={value:new k(.22,.88,1)},Nl={value:0};function Pp(i){let t=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Hy=`
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
`;function Kn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=t,r.uniforms.uAccent=Dl,r.uniforms.uAccentOn=Nl,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${Hy}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}`,i}function Ul(i){return i==="day"?qn:he}var lo=.012,Wy=.012;function Lp(i,t,e,n,s,r=[],o){let a=[],l=[],c=[],f=[],h=(x,g,d,_,y,v,M)=>{for(let S of[x,g,d,x,d,_])a.push(S[0],S[1],S[2]),l.push(y[0],y[1],y[2]),c.push(v),f.push(M)};i.rooms.forEach((x,g)=>{if(x.points.length<3)return;let d=x.points.map(C=>C[0]),_=x.points.map(C=>C[1]),y=Math.min(...d),v=Math.min(..._),M=Math.max(1,Math.ceil((Math.max(...d)-y)/s)),S=Math.max(1,Math.ceil((Math.max(..._)-v)/s));for(let C=0;C<M;C++)for(let b=0;b<S;b++){let w=y+(C+.5)*s,E=v+(b+.5)*s;if(!pe([w,E],x.points)||r.some(I=>pe([w,E],I)))continue;let A=y+C*s,L=v+b*s;h([A,lo,L],[A,lo,L+s],[A+s,lo,L+s],[A+s,lo,L],[0,1,0],g,-1)}});let u=i.rooms.length;for(let x of i.outdoor??[]){if(x.points.length<3||ns(x.type))continue;let g=op(i,x)+lo,d=x.points.map(C=>C[0]),_=x.points.map(C=>C[1]),y=Math.min(...d),v=Math.min(..._),M=Math.max(1,Math.ceil((Math.max(...d)-y)/s)),S=Math.max(1,Math.ceil((Math.max(..._)-v)/s));for(let C=0;C<M;C++)for(let b=0;b<S;b++){if(!pe([y+(C+.5)*s,v+(b+.5)*s],x.points))continue;let w=y+C*s,E=v+b*s;h([w,g,E],[w,g,E+s],[w+s,g,E+s],[w+s,g,E],[0,1,0],u,-1)}}let p=Math.min(i.cut_height,i.height);t.forEach((x,g)=>{let d=Math.min(i.height,x.height??i.height),_=Math.min(p,d-.02),y=x.b[0]-x.a[0],v=x.b[1]-x.a[1],M=Math.hypot(y,v);if(M<.05)return;let S=[y/M,v/M],C=[-S[1],S[0]],b=e[g],w=Xy(x,S,M,n),E=(I,R,F)=>[R,F,...I.filter(U=>U>R+.005&&U<F-.005)].sort((U,O)=>U-O).filter((U,O,V)=>O===0||U>V[O-1]+.005),A=E([_,(_+d)/2,...w.flatMap(I=>[I.y0+.01,I.y1-.01])],.02,d-.02),L=E(w.flatMap(I=>[I.s0,I.s1]),0,M);for(let I of[1,-1]){let R=I>0?x.roomLeft:x.roomRight,F=R?i.rooms.findIndex(B=>B.id===R):x.exterior?u:-1;if(F<0)continue;let U=(I>0?x.left:x.right)+Wy,O=[C[0]*I,C[1]*I],V=(B,X)=>[x.a[0]+S[0]*B+O[0]*U,X,x.a[1]+S[1]*B+O[1]*U],z=B=>{let X=V(B,0),tt=o?.(X[0],X[2]);return tt==null?1/0:tt-.02};for(let B=0;B<L.length-1;B++){let X=L[B+1]-L[B],tt=Math.max(1,Math.ceil(X/s));for(let j=0;j<tt;j++){let ut=L[B]+X/tt*j,ct=L[B]+X/tt*(j+1),Nt=(ut+ct)/2;for(let q=0;q<A.length-1;q++){let J=A[q],at=A[q+1];if(at-J<.01)continue;let wt=(J+at)/2;if(w.some(Ft=>Nt>Ft.s0&&Nt<Ft.s1&&wt>Ft.y0&&wt<Ft.y1))continue;let gt=J>=p-1e-6?b:os+b,Bt=Math.min(at,z(ut)),jt=Math.min(at,z(ct));Bt<=J+.005&&jt<=J+.005||h(V(ut,J),V(ct,J),V(ct,Math.max(J,jt)),V(ut,Math.max(J,Bt)),[O[0],0,O[1]],F,gt)}}}}});let m=[];for(let x of n){if(x.opening.type!=="door")continue;let g=t.find(y=>Fp(y,x));if(!g||!g.roomLeft||!g.roomRight)continue;let d=i.rooms.findIndex(y=>y.id===g.roomLeft),_=i.rooms.findIndex(y=>y.id===g.roomRight);d<0||_<0||m.push({id:x.opening.id,a:d,b:_,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(f),doors:m}}function Fp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/s<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/s)>.99}function Xy(i,t,e,n){let s=[];for(let r of n){if(!Fp(i,r))continue;let o=(r.start[0]-i.a[0])*t[0]+(r.start[1]-i.a[1])*t[1],l=r.axis[0]*t[0]+r.axis[1]*t[1]>0?o:o-r.width;l>e||l+r.width<0||s.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function qy(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function Yy(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Ip(i,t,e,n,s,r,o){let a=t-i.x,l=e-i.y,c=n-i.z,f=a*a+l*l+c*c,h=Math.sqrt(f)||1e-6,u=Yy(i),p=1/(1+f/(u*u)),m=p*Math.sqrt(p),x=Math.max(0,-(a*s+l*r+c*o)/h);return i.level*m*(.2+.8*x)*qy(i.kind,l/h)}function Dp(i,t,e=.7,n=[]){let s=[...t];i.doors.forEach((f,h)=>{let u=n[h]??.5;if(!(u<=.01))for(let[p,m]of[[f.a,f.b],[f.b,f.a]]){let x=[0,0,0];for(let d of t){if(d.room!==p)continue;let _=d.x-f.x,y=d.y-f.y,v=d.z-f.z,M=Math.hypot(_,y,v)||1,S=Ip(d,f.x,f.y,f.z,_/M,y/M,v/M);x[0]+=d.color[0]*S,x[1]+=d.color[1]*S,x[2]+=d.color[2]*S}let g=Math.max(x[0],x[1],x[2]);g<.01||s.push({x:f.x,y:f.y,z:f.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*u)),kind:"wall",room:m})}});let r=new Map;for(let f of s){let h={...f,color:f.color.map(u=>Math.pow(u,1.5))};r.set(f.room,[...r.get(f.room)??[],h])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let f=0;f<l.length;f++){let h=r.get(l[f]);if(!h)continue;let u=f*3,p=0,m=0,x=0;for(let g of h){let d=Ip(g,o[u],o[u+1],o[u+2],a[u],a[u+1],a[u+2]);p+=g.color[0]*d,m+=g.color[1]*d,x+=g.color[2]*d}c[u]=1-Math.exp(-p*e*1.6),c[u+1]=1-Math.exp(-m*e*1.6),c[u+2]=1-Math.exp(-x*e*1.6)}return c}function Np(i,t,e){let n=i.rooms.findIndex(s=>s.points.length>=3&&pe([t,e],s.points));return n<0?i.rooms.length:n}function Up(i,t){return i&&t>=0&&t<i.length?i[t]:t}var Bl={open:0,open2:0,tilt:0,tilt2:0,cover:null},Op=2043986,Bp=2769520,$y=2242399,Yu=1845831,Zy=1450554,li=16758087,Jy=1.2,Ky=1.5,Qy=1846349,jy=2572395,tM=1120816,eM=1845831,zp=5995775,kp=9085695,Qs=kt(3662079,.08),nM=.2;function Ol(i,t,e,n,s,r,o,a,l,c,f){let h=(p,m,x)=>t(p,m,x),u=[[h(e,s,a),h(n,s,a),h(n,r,a),h(e,r,a),c],[h(e,s,o),h(n,s,o),h(n,r,o),h(e,r,o),kt(l.getHex(),.6)],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),l],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),kt(l.getHex(),.85)],[h(e,s,o),h(e,r,o),h(e,r,a),h(e,s,a),kt(l.getHex(),.92)],[h(n,s,o),h(n,r,o),h(n,r,a),h(n,s,a),kt(l.getHex(),.92)]];for(let[p,m,x,g,d]of u)i.tri(p,m,x,d,d,d,void 0,f),i.tri(p,x,g,d,d,d,void 0,f)}function oe(i,t,e,n,s,r,o,a,l,c,f,h){if(a<=f+1e-6)return Ol(i,t,e,n,s,r,o,a,l,c,ee);if(o>=f-1e-6)return Ol(i,t,e,n,s,r,o,a,l,c,h);Ol(i,t,e,n,s,r,o,f,l,c,ee),Ol(i,t,e,n,s,r,f,a,l,c,h)}function Oi(i,t,e,n,s,r,o,a,l,c,f=0){let h=(u,p,m)=>{let x=v=>f?(o-v)/f:.5,g=t(e,s,u),d=t(n,s,u),_=t(n,s,p),y=t(e,s,p);i.tri(g,d,_,a,a,a,[0,x(u),1,x(u),1,x(p)],m),i.tri(g,_,y,a,a,a,[0,x(u),1,x(p),0,x(p)],m)};o<=l+1e-6?h(r,o,ee):r>=l-1e-6?h(r,o,c):(h(r,l,ee),h(l,o,c))}function iM(i,t,e,n,s,r,o,a,l,c){let f=t(e,s,o),h=t(n,s,o),u=t(n,r,o),p=t(e,r,o),m=0,x=(r-s)/c;i.tri(f,h,u,a,a,a,[0,m,1,m,1,x],l),i.tri(f,u,p,a,a,a,[0,m,1,x,0,x],l)}function Vp(i,t,e){let n=new fe,s=new fe,r=new fe(!0),o=new nt(Op),a=new nt(Bp),l=[],c=[],f=[];for(let h of i){let u=n.count,p=s.count,m=r.count,x=t.get(h.opening.id)??Bl,g=h.width,{sill:d,top:_,bucket:y}=h,v=(b,w,E)=>[h.start[0]+h.axis[0]*b+h.toRoom[0]*w,E,h.start[1]+h.axis[1]*b+h.toRoom[1]*w],M=(h.faceRoom-h.faceOut)/2,S=h.opening.mark==="closed",C=h.opening.type==="door"&&is(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!C||h.opening.type==="garage"){let b=-h.faceOut-.012,w=h.faceRoom+.012,E=h.opening.type==="garage"&&(S?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),A=E?kt(li,.8):new nt(Op),L=E?kt(li,1):new nt(Bp);oe(n,v,-.045,.02,b,w,0,_+.045,A,L,e,y),oe(n,v,g-.02,g+.045,b,w,0,_+.045,A,L,e,y),oe(n,v,.02,g-.02,b,w,_-.02,_+.045,A,L,e,y)}if(h.opening.type==="door"){let b=is(h.opening,h.exterior),w=yd(b),E=h.opening.swing==="out"?-1:1,A=E>0?h.faceRoom:-h.faceOut,L=h.opening.leaves===2,I=.02,R=g-.02,F=vd(g,b,h.hingeAtStart,h.opening);if(F){for(let[z,B]of F.panels)oe(n,v,z,z+.04,M-.03,M+.03,.02,_-.02,o,a,e,y),oe(n,v,B-.04,B,M-.03,M+.03,.02,_-.02,o,a,e,y),oe(n,v,z,B,M-.03,M+.03,.02,.1,o,a,e,y),Oi(s,v,z+.04,B-.04,M,.1,_-.02,Qs,e,y);I=F.x0,R=F.x1}let U=L?(R-I)/2-.004:R-I,O=w?.06:.04;w&&(oe(n,v,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new nt(Yu),a,e,y),h.exterior&&oe(n,v,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,_+.1,_+.17,kt(li,.55),kt(li,.85),e,ee));let V=C?[]:[[h.hingeAtStart,x.open]];L&&!C&&V.push([!h.hingeAtStart,x.open2??0]);for(let[z,B]of V){let X=Math.min(1,Math.max(0,B)),tt=b==="sliding"?0:X*Ky,j=b==="sliding"?X*U:0,ut=(jt,Ft,$t)=>{let se=jt*Math.cos(tt)-Ft*Math.sin(tt)-j,Zt=A+E*(Ft*Math.cos(tt)+jt*Math.sin(tt)+(j?.05:0));return v(z?I+se:R-se,Zt,$t)},ct=X>.05?ee:y,Nt=S?!!x.sensed&&X<.05:X>.9,q=Nt?kt(li,.7):new nt(w?tM:Qy),J=Nt?kt(li,.9):new nt(w?eM:jy);b==="glass"?(oe(n,ut,0,.05,-O,0,.01,_-.01,q,J,e,ct),oe(n,ut,U-.05,U,-O,0,.01,_-.01,q,J,e,ct),oe(n,ut,.05,U-.05,-O,0,.01,.12,q,J,e,ct),oe(n,ut,.05,U-.05,-O,0,_-.08,_-.01,q,J,e,ct),Oi(s,ut,.05,U-.05,-O/2,.12,_-.08,Qs,e,ct)):oe(n,ut,0,U,-O,0,.01,_-.01,q,J,e,ct),b==="front_glass"?Oi(s,ut,.12,U-.12,.001,_*.55,_-.18,Qs,e,ct):w&&Oi(s,ut,.1,.18,.001,.3,_-.3,Qs,e,ct);let at=Math.min(1.05,_*.5),wt=w?.3:.012,gt=w?U-.11:U-.16,Bt=w?U-.08:U-.05;oe(n,ut,gt,Bt,.004,.05,at-wt,at+wt,new nt(zp),new nt(kp),e,ct),oe(n,ut,gt,Bt,-O-.05,-O-.004,at-wt,at+wt,new nt(zp),new nt(kp),e,ct)}}else if(h.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),w=new nt(13951231),E=h.faceRoom-.03,A=_*(1-b);b>.01&&Oi(r,v,.02,g-.02,E,A,_,w,e,y,.5);let L=(1-b)*_;L>.01&&iM(r,v,.02,g-.02,E,E+L,_+.03,w,y,.5)}else if(is(h.opening,h.exterior)==="glass_wall"){oe(n,v,0,.04,M-.025,M+.025,d,_,o,a,e,y),oe(n,v,g-.04,g,M-.025,M+.025,d,_,o,a,e,y),oe(n,v,.04,g-.04,M-.025,M+.025,d,d+.03,o,a,e,y),oe(n,v,.04,g-.04,M-.025,M+.025,_-.04,_,o,a,e,y);let E=Math.max(1,Math.round((g-2*.04)/.9)),A=(g-2*.04)/E;for(let L=1;L<E;L++){let I=.04+L*A;oe(n,v,I-.02,I+.02,M-.025,M+.025,d+.03,_-.04,o,a,e,y)}for(let L=0;L<E;L++){let I=.04+L*A+(L?.02:0),R=.04+(L+1)*A-(L<E-1?.02:0);Oi(s,v,I,R,M,d+.03,_-.04,Qs,e,y)}}else{oe(n,v,0,.06,M-.035,M+.035,d,_,o,a,e,y),oe(n,v,g-.06,g,M-.035,M+.035,d,_,o,a,e,y),oe(n,v,.06,g-.06,M-.035,M+.035,d,d+(d>.05?.06:.03),o,a,e,y),oe(n,v,.06,g-.06,M-.035,M+.035,_-.06,_,o,a,e,y),d>.3&&(oe(n,v,-.04,g+.04,M+.035,h.faceRoom+.07,d-.03,d,new nt(Yu),a,e,y),h.exterior&&oe(n,v,-.03,g+.03,-h.faceOut-.06,M-.035,d-.04,d-.02,new nt(Yu),a,e,y));let E=.055,A=d+(d>.05?.06:.03),L=_-.06,I=M+.035,R=M+.035+.06,U=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let O of U){let V=O.open>.02||O.tilt>.02,z=S?!!x.sensed&&!V:V,B=z?kt(li,.75):new nt($y),X=z?kt(li,.95):a,tt=O.x0,j=O.x1,ut=j-tt,ct=O.open*Jy,Nt=O.tilt*nM,q=(at,wt,gt)=>{let Bt=gt-A,jt=wt+Bt*Math.sin(Nt),Ft=A+Bt*Math.cos(Nt),$t=at*Math.cos(ct)-(jt-I)*Math.sin(ct);jt=I+(jt-I)*Math.cos(ct)+at*Math.sin(ct);let se=O.atStart?tt+$t:j-$t;return v(se,jt,Ft)},J=ct>.05?ee:y;if(oe(n,q,0,E,I,R,A,L,B,X,e,J),oe(n,q,ut-E,ut,I,R,A,L,B,X,e,J),oe(n,q,E,ut-E,I,R,A,A+E,B,X,e,J),oe(n,q,E,ut-E,I,R,L-E,L,B,X,e,J),Oi(s,q,E,ut-E,(I+R)/2,A+E,L-E,z?kt(li,.16):Qs,e,J),is(h.opening,h.exterior)==="bars"){let at=(A+L)/2,wt=(I+R)/2;oe(n,q,E,ut-E,wt-.012,wt+.012,at-.012,at+.012,B,X,e,J),oe(n,q,ut/2-.012,ut/2+.012,wt-.012,wt+.012,A+E,L-E,B,X,e,J)}}}if(x.cover!==null){let b=-h.faceOut,w=_+.2;oe(n,v,-.05,g+.05,b-.15,b,_,w,new nt(Zy),a,e,y);let E=Math.min(1,Math.max(0,x.cover));if(E>.01){let A=_-E*(_-d);Oi(r,v,0,g,b-.07,A,_,new nt(16777215),e,y,.045)}}l.push({id:h.opening.id,start:u,end:n.count}),c.push({id:h.opening.id,start:p,end:s.count}),f.push({id:h.opening.id,start:m,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:f}}var $u=Math.PI/180,co=2400,js=1600,Zu=9;function zl(i,t=64){let e=document.createElement("canvas");e.width=e.height=t;let n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(let[r,o]of i)s.addColorStop(r,o);return n.fillStyle=s,n.fillRect(0,0,t,t),new Qe(e)}function sM(i){let e=document.createElement("canvas");e.width=128,e.height=128/2;let n=e.getContext("2d"),s=i*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*r()),l=128/2*(.45+.25*r()),c=128*(.12+.14*r()),f=n.createRadialGradient(a,l,0,a,l,c);f.addColorStop(0,"rgba(255,255,255,0.9)"),f.addColorStop(.6,"rgba(255,255,255,0.45)"),f.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=f,n.fillRect(0,0,128,128/2)}return new Qe(e)}var kl=class{group=new Ee;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(co*3);snow;snowPhase=new Float32Array(js);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(t){this.scene=t,this.group.name="live-weather",this.group.renderOrder=5;let e=new Ht;e.setAttribute("position",new Dt(new Float32Array(co*6),3)),this.rain=new bn(e,new Ue({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=zl([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),s=new Ht;s.setAttribute("position",new Dt(new Float32Array(js*3),3)),this.snow=new Cn(s,new _n({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<js;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let r=new Ht;r.setAttribute("position",new Dt(new Float32Array(600*3),3)),this.hail=new Cn(r,new _n({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=zl([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<Zu;c++){let f=new $i(new vi({map:sM(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),h=new Wt(new vn(1,1),new ie({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:qn}));h.rotation.x=-Math.PI/2,h.renderOrder=-1,this.clouds.push({sprite:f,shadow:h,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(f,h)}let a=new Ht;a.setAttribute("position",new Dt(new Float32Array(144),3)),this.bolt=new bn(a,new Ue({color:14674175,transparent:!0,opacity:1,blending:he,depthWrite:!1})),this.bolt.visible=!1;let l=zl([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new $i(new vi({map:l,transparent:!0,depthWrite:!1,blending:he,fog:!1})),this.halo=new $i(new vi({map:zl([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:he,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,t.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(t){this.bounds=t,this.seed()}set(t){let e=this.view;this.view=t,this.group.visible=!!t;let n=t?.weather??null;if(t&&n&&n.fog>.02&&!t.low){let s=new nt(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255);this.scene.fog=new Xi(s,.008+.04*n.fog)}else this.scene.fog instanceof Xi&&(this.scene.fog=null);(!e||e.low!==t?.low||!!e.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let t=this.view?.weather;if(!t)return[0,0];let n=((t.windFrom??270)+(this.view?.north??0)+180)*$u,s=.4+7*t.wind;return[Math.sin(n)*s,-Math.cos(n)*s]}count(t,e){let n=this.view?.low??!1;return Math.round(Math.min(1,t)*e*(n?.3:1))}seed(){let t=this.bounds,e=this.view?.weather,n=()=>t.x0+Math.random()*(t.x1-t.x0),s=()=>t.z0+Math.random()*(t.z1-t.z0),r=()=>t.y0+Math.random()*(t.y1-t.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<co;c++){let f=n(),h=r(),u=s();o.setXYZ(c*2,f,h,u),o.setXYZ(c*2+1,f,h-.4,u),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<js;c++)a.setXYZ(c,n(),r(),s());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),r(),s());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(e?.rain??0,co)*2),this.snow.geometry.setDrawRange(0,this.count(e?.snow??0,js)),this.hail.geometry.setDrawRange(0,this.count(e?.hail??0,600)),this.rain.visible=!!e&&e.rain>.01,this.snow.visible=!!e&&e.snow>.01,this.hail.visible=!!e&&e.hail>.01,this.clouds.forEach((c,f)=>{c.angle=f/Zu*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=t.x0+Math.random()*(t.x1-t.x0),c.sz=t.z0+Math.random()*(t.z1-t.z0)}),this.placeClouds(0)}placeClouds(t){let e=this.view,n=e?.weather,s=n?.cloud??0,r=this.bounds,o=(r.x0+r.x1)/2,a=(r.z0+r.z1)/2,l=Math.max(r.x1-r.x0,r.z1-r.z0),[c,f]=this.windVector(),h=Math.round(s*Zu),u=e?.sky??[20,28,44],p=(u[0]+u[1]+u[2])/765,m=n?.rain||n?.lightning?.3:0,x=Math.max(.12,Math.min(1,.28+p*.9-m-.25*Math.max(0,s-.6))),g=Math.hypot(c,f)/Math.max(20,l*4)*t*Math.sign(c||1);this.clouds.forEach((d,_)=>{let y=_<h;d.angle+=g*d.speed;let v=l*d.ring,M=d.sprite.material;M.color.setRGB(x,x*1.02,Math.min(1,x*1.12)),M.opacity=y?.3+.45*s:0,d.sprite.visible=y,d.sprite.position.set(o+Math.cos(d.angle)*v,r.y0+l*d.lift,a+Math.sin(d.angle)*v),d.sprite.scale.set(l*d.scale*1.6,l*d.scale*.6,1),d.sx+=c*.45*d.speed*t,d.sz+=f*.45*d.speed*t;let S=l*.4;d.sx>r.x1+S&&(d.sx=r.x0-S),d.sx<r.x0-S&&(d.sx=r.x1+S),d.sz>r.z1+S&&(d.sz=r.z0-S),d.sz<r.z0-S&&(d.sz=r.z1+S);let C=d.shadow.material;C.opacity=y?.12+.2*s:0,d.shadow.visible=y,d.shadow.position.set(d.sx,r.y0+.03,d.sz),d.shadow.scale.set(l*d.scale*.55,l*d.scale*.35,1)})}placeDisc(){let t=this.view,e=t?.sun,n=t?.weather?.cloud??0,s=!e||e.elevation<-3;if(!t||!e||!t.disc||n>.9||!s&&e.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let r=this.bounds,o=new k((r.x0+r.x1)/2,r.y0,(r.z0+r.z1)/2),a=Math.max(70,Math.max(r.x1-r.x0,r.z1-r.z0)*3.5),l=((s?e.azimuth+180:e.azimuth)+t.north)*$u,c=Math.max(8,Math.abs(e.elevation))*$u,f=new k(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),h=o.addScaledVector(f,a),u=a*(s?.07:.1);this.disc.position.copy(h),this.halo.position.copy(h),this.disc.scale.setScalar(u),this.halo.scale.setScalar(u*3.2);let p=this.disc.material,m=this.halo.material,x=s?0:Math.max(0,1-e.elevation/20);p.color.set(s?14016242:new nt(1,.9-.25*x,.6-.35*x)),m.color.copy(p.color),p.opacity=(s?.7:.95)*(1-n),m.opacity=(s?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(t){let e=this.bounds,s=(Math.random()<.5?-1:1)<0?e.x0-2-Math.random()*6:e.x1+2+Math.random()*6,r=e.z0+Math.random()*(e.z1-e.z0),o=e.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let f=0;f<l;f++){let h=o-(f+1)/l*(o-e.y0),u=s+(Math.random()-.5)*1.6,p=r+(Math.random()-.5)*1.6;a.setXYZ(f*2,s,c,r),a.setXYZ(f*2+1,u,h,p),s=u,r=p,c=h}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=t+90+Math.random()*120,this.onFlash?.(!0)}step(t){let e=this.view,n=e?.weather;if(!e||!n)return this.last=0,!1;let s=this.last?Math.min(.1,(t-this.last)/1e3):0;this.last=t;let r=this.bounds,o=r.y1-r.y0,[a,l]=this.windVector();if(this.rain.visible&&s){let c=this.rain.geometry.getAttribute("position"),f=c.array,h=this.count(n.rain,co);for(let u=0;u<h;u++){let p=u*6,m=this.rainVel[u*3+1],x=f[p]+a*s,g=f[p+1]-m*s,d=f[p+2]+l*s;g<r.y0&&(g+=o,x=r.x0+Math.random()*(r.x1-r.x0)-a*.4,d=r.z0+Math.random()*(r.z1-r.z0)-l*.4);let _=.05;f[p]=x,f[p+1]=g,f[p+2]=d,f[p+3]=x-a*_,f[p+4]=g+m*_,f[p+5]=d-l*_}c.needsUpdate=!0}if(this.snow.visible&&s){let c=this.snow.geometry.getAttribute("position"),f=c.array,h=this.count(n.snow,js),u=t/1e3;for(let p=0;p<h;p++){let m=p*3,x=this.snowPhase[p],g=f[m]+(a*.35+Math.sin(u*1.3+x)*.35)*s,d=f[m+1]-(.7+.5*(x*7%1))*s,_=f[m+2]+(l*.35+Math.cos(u*1.1+x)*.35)*s;d<r.y0&&(d+=o,g=r.x0+Math.random()*(r.x1-r.x0),_=r.z0+Math.random()*(r.z1-r.z0)),f[m]=g,f[m+1]=d,f[m+2]=_}c.needsUpdate=!0}if(this.hail.visible&&s){let c=this.hail.geometry.getAttribute("position"),f=c.array,h=this.count(n.hail,600);for(let u=0;u<h;u++){let p=u*3,m=f[p+1]-14*s;m<r.y0&&(m+=o),f[p]+=a*.5*s,f[p+1]=m,f[p+2]+=l*.5*s}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(s),n.lightning&&!e.low?(this.nextBolt||(this.nextBolt=t+2500+Math.random()*6e3),t>=this.nextBolt&&(this.strike(t),this.nextBolt=t+3500+Math.random()*9e3),this.bolt.visible&&t>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(t=>{let e=t;e.geometry?.dispose();let n=e.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof Xi&&(this.scene.fog=null)}};var Vl=46,hs=900;function rM(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new Qe(i)}var Gl=class{group=new Ee;scene;lift;tex=rM();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(hs*3);sparkField=new Int16Array(hs);sparkPhase=new Float32Array(hs);sparkCount=0;last=0;constructor(t,e){this.scene=t,this.lift=e,this.group.name="live-energy";let n=new Ht;n.setAttribute("position",new Dt(new Float32Array(hs*3),3)),n.setAttribute("color",new Dt(new Float32Array(hs*3),3)),this.sparks=new Cn(n,new _n({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:he})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),t.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(t){let e=new Set(t.map(n=>n.key));for(let[n,s]of this.arcs)e.has(n)||(this.group.remove(s.line,s.points),s.line.geometry.dispose(),s.line.material.dispose(),s.points.geometry.dispose(),s.points.material.dispose(),this.arcs.delete(n));for(let n of t){let s=this.arcs.get(n.key);if(!s){let o=new Ht;o.setAttribute("position",new Dt(new Float32Array(99),3));let a=new Wn(o,new Ue({transparent:!0,opacity:.4,depthWrite:!1,blending:he})),l=new Ht;l.setAttribute("position",new Dt(new Float32Array(Vl*3),3));let c=new Cn(l,new _n({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:he}));a.frustumCulled=c.frustumCulled=!1;let f=new Float32Array(Vl);for(let h=0;h<Vl;h++)f[h]=Math.random();s={arc:n,line:a,points:c,phase:f,count:0,speed:0,a:new k,b:new k,c:new k},this.arcs.set(n.key,s),this.group.add(a,c)}s.arc=n;let r=new nt(n.color[0]/255,n.color[1]/255,n.color[2]/255);s.line.material.color.copy(r),s.points.material.color.copy(r),s.count=Math.max(3,Math.min(Vl,Math.round(3+Math.sqrt(n.power)/2.2))),s.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),s.points.geometry.setDrawRange(0,s.count)}this.place()}setSparks(t){this.sparkFields=t;let e=t.reduce((s,r)=>s+r.quads.length*r.level,0),n=0;e>0&&t.forEach((s,r)=>{if(s.level<=0)return;let o=Math.round(hs*s.quads.length*s.level/Math.max(e,t.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<hs;a++,n++){let l=s.quads[Math.floor(Math.random()*s.quads.length)],c=Math.random(),f=Math.random();for(let h=0;h<3;h++){let u=l[0][h]+(l[1][h]-l[0][h])*c,p=l[3][h]+(l[2][h]-l[3][h])*c;this.sparkBase[n*3+h]=u+(p-u)*f+(h===1?.12:0)}this.sparkField[n]=r,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(t,e){let n=this.lift(t.floorId);return e.set(t.x,n.y+t.y,t.z),n.visible}place(){for(let t of this.arcs.values()){let e=this.world(t.arc.from,t.a),n=this.world(t.arc.to,t.b),s=t.a.distanceTo(t.b);t.c.copy(t.a).add(t.b).multiplyScalar(.5),t.c.y=Math.max(t.a.y,t.b.y)+.6+s*.22;let r=e&&n;t.line.visible=t.points.visible=r;let o=t.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(t,l))}o.needsUpdate=!0}}bezier(t,e){let n=1-e;return[n*n*t.a.x+2*n*e*t.c.x+e*e*t.b.x,n*n*t.a.y+2*n*e*t.c.y+e*e*t.b.y,n*n*t.a.z+2*n*e*t.c.z+e*e*t.b.z]}step(t){if(!this.active||!this.group.visible)return this.last=0,!1;let e=this.last?Math.min(.1,(t-this.last)/1e3):0;this.last=t,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let s=n.points.geometry.getAttribute("position");for(let r=0;r<n.count;r++)n.phase[r]=(n.phase[r]+n.speed*e)%1,s.setXYZ(r,...this.bezier(n,n.phase[r]));s.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),s=this.sparks.geometry.getAttribute("color"),r=t/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(r*2.4+this.sparkPhase[o]*3))**6,f=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;s.setXYZ(o,f,f*.86,f*.35)}n.needsUpdate=!0,s.needsUpdate=!0}return!0}setVisible(t){this.group.visible=t}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var Gp=3,Hl=class{group=new Ee;scene;lift;ringGeo=new Ki(.92,1,48);spots=new Map;links=[];constructor(t,e){this.scene=t,this.lift=e,this.group.name="live-sound",t.add(this.group)}get active(){return this.spots.size>0}set(t,e){let n=new Set(t.map(s=>s.id));for(let[s,r]of this.spots)if(!n.has(s)){for(let o of r.rings)this.group.remove(o),o.material.dispose();this.spots.delete(s)}for(let s of t){let r=this.spots.get(s.id);if(!r){let a=Array.from({length:Gp},()=>{let l=new Wt(this.ringGeo,new ie({transparent:!0,opacity:0,depthWrite:!1,blending:he,side:ve}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});r={spot:s,rings:a},this.spots.set(s.id,r)}r.spot=s;let o=new nt(s.color[0]/255,s.color[1]/255,s.color[2]/255);for(let a of r.rings)a.material.color.copy(o)}for(let s of this.links)this.group.remove(s.line),s.line.geometry.dispose(),s.line.material.dispose();this.links=e.map(([s,r])=>{let o=new Ht;o.setAttribute("position",new Dt(new Float32Array(51),3));let a=new Wn(o,new Ue({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:he}));return a.frustumCulled=!1,this.group.add(a),{a:s,b:r,line:a}})}step(t){if(!this.spots.size&&!this.links.length)return!1;let e=t/1e3;for(let n of this.spots.values()){let s=this.lift(n.spot.at.floorId),r=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(e*.55+a/Gp)%1;o.visible=s.visible,o.position.set(n.spot.at.x,s.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*r),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let s=this.lift(n.a.floorId),r=this.lift(n.b.floorId);n.line.visible=s.visible&&r.visible;let o=n.line.geometry.getAttribute("position"),a=s.y+n.a.y,l=r.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let f=0;f<=16;f++){let h=f/16,u=Math.sin(Math.PI*h)*(.3+c*.12)+Math.sin(e*3+h*12)*.03;o.setXYZ(f,n.a.x+(n.b.x-n.a.x)*h,a+(l-a)*h+u,n.a.z+(n.b.z-n.a.z)*h)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var oM=Math.PI/180;function aM(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.5,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Qe(i)}var Wl=class{group=new Ee;scene;lift;glowTex=aM();views=new Map;onChange=null;constructor(t,e){this.scene=t,this.lift=e,this.group.name="live-screens",t.add(this.group)}get active(){return[...this.views.values()].some(t=>t.s.playing)}set(t){let e=new Set(t.map(n=>n.id));for(let[n,s]of this.views)e.has(n)||this.drop(n,s);for(let n of t){let s=this.views.get(n.id);if(!s){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new Qe(o);a.colorSpace=Pe;let l=new Wt(new vn(1,1),new ie({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Wt(new vn(1,1),new ie({map:this.glowTex,transparent:!0,depthWrite:!1,blending:he,side:ve}));c.renderOrder=2,this.group.add(l,c),s={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,s)}s.s=n;let r=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(r!==s.sig){let o=s.sig.split("|")[3]!==(n.picture??"");s.sig=r,o&&this.loadPicture(s),this.draw(s)}this.place(s)}}loadPicture(t){t.image=null;let e=t.s.picture;if(!e)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{t.s.picture!==e||!this.views.has(t.s.id)||(t.image=n,this.draw(t),this.onChange?.())},n.src=e}draw(t){let e=t.s,n=t.canvas.getContext("2d"),s=t.canvas.width,r=t.canvas.height,[o,a,l]=e.color,c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,s,r);let f=22,h=f;if(t.image){let u=r-f*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let p=t.image.naturalWidth||1,m=t.image.naturalHeight||1,x=Math.max(u/p,u/m),g=u/x,d=u/x;n.drawImage(t.image,(p-g)/2,(m-d)/2,g,d,f,f,u,u),n.restore(),h=f*2+u}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,e.title||e.app||"",h,r/2-18,s-h-f),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,e.subtitle,h,r/2+22,s-h-f),e.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(e.playing?"\u25B6 ":"\u275A\u275A ")+e.app,h,r-f-14,s-h-f)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,r-6,s*(e.playing?1:.4),6),t.texture.needsUpdate=!0}text(t,e,n,s,r){let o=e;for(;o.length>1&&t.measureText(o).width>r;)o=o.slice(0,-2);t.fillText(o===e?o:`${o}\u2026`,n,s)}place(t){let e=t.s,n=e.rect,s=e.rotation*oM,r=this.lift(e.floorId),o=(n.x0+n.x1)/2,a=(m,x)=>[e.x+m*Math.cos(s)-x*Math.sin(s),e.z+m*Math.sin(s)+x*Math.cos(s)],l=n.x1-n.x0,c=n.y1-n.y0,[f,h]=a(o,n.z+.012);t.screen.position.set(f,r.y+(n.y0+n.y1)/2,h),t.screen.rotation.set(0,-s,0),t.screen.scale.set(l,c,1);let[u,p]=a(o,n.z-.18);t.glow.position.set(u,r.y+(n.y0+n.y1)/2,p),t.glow.rotation.set(0,-s,0),t.glow.scale.set(l*2.4,c*2.6,1),t.glow.material.color=new nt(e.color[0]/255,e.color[1]/255,e.color[2]/255),t.screen.visible=t.glow.visible=r.visible}step(t){let e=!1;for(let n of this.views.values()){this.place(n);let s=n.glow.material;s.opacity=n.s.playing?.55+.25*Math.sin(t/900+n.s.x):.25,e||=n.s.playing}return e}drop(t,e){this.group.remove(e.screen,e.glow),e.screen.geometry.dispose(),e.screen.material.dispose(),e.texture.dispose(),e.glow.geometry.dispose(),e.glow.material.dispose(),this.views.delete(t)}dispose(){for(let[t,e]of this.views)this.drop(t,e);this.glowTex.dispose(),this.scene.remove(this.group)}};var Hp=new nt(.25,.55,1),Ju=new nt(1,.3,.75),Xl=10,ql=class{group=new Ee;scene;lift;points=[];line;comet;rings=[];ringGeo=new Ki(.18,.26,32);constructor(t,e){this.scene=t,this.lift=e,this.group.name="live-trail";let n=new Ht;n.setAttribute("position",new Dt(new Float32Array(3),3)),n.setAttribute("color",new Dt(new Float32Array(3),3)),this.line=new Wn(n,new Ue({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:he})),this.line.frustumCulled=!1,this.comet=new Wt(new Ar(.12,12,8),new ie({color:Ju,transparent:!0,depthWrite:!1,blending:he})),this.group.add(this.line,this.comet),this.group.visible=!1,t.add(this.group)}set(t){this.points=t;for(let s of this.rings)this.group.remove(s),s.material.dispose();this.rings=t.map(s=>{let r=new Wt(this.ringGeo,new ie({color:Hp.clone().lerp(Ju,s.age),transparent:!0,opacity:.4+.6*s.age,depthWrite:!1,blending:he,side:ve}));return r.rotation.x=-Math.PI/2,this.group.add(r),r});let e=Math.max(1,(t.length-1)*Xl+1);this.line.geometry.dispose();let n=new Ht;n.setAttribute("position",new Dt(new Float32Array(e*3),3)),n.setAttribute("color",new Dt(new Float32Array(e*3),3)),this.line.geometry=n,this.group.visible=t.length>0}at(t,e){let n=this.points[t].at,s=this.points[Math.min(this.points.length-1,t+1)].at,r=this.lift(n.floorId),o=this.lift(s.floorId),a=r.y+n.y,l=o.y+s.y,c=Math.sin(Math.PI*e)*(.25+Math.hypot(n.x-s.x,n.z-s.z)*.08);return[n.x+(s.x-n.x)*e,a+(l-a)*e+c,n.z+(s.z-n.z)*e]}step(t){let e=this.points.length;if(!e)return!1;let n=this.line.geometry.getAttribute("position"),s=this.line.geometry.getAttribute("color"),r=0,o=new nt;for(let a=0;a<Math.max(1,e-1);a++)for(let l=0;l<=Xl;l++){if(l===Xl&&a<e-2)continue;if(e===1&&l>0)break;let c=l/Xl;n.setXYZ(r,...this.at(a,e===1?0:c));let f=e===1?1:this.points[a].age+(this.points[Math.min(e-1,a+1)].age-this.points[a].age)*c;o.copy(Hp).lerp(Ju,f).multiplyScalar(.3+.7*f),s.setXYZ(r,o.r,o.g,o.b),r++}if(this.line.geometry.setDrawRange(0,r),n.needsUpdate=s.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===e-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(t/250))}),e>1){let a=t/1e3%(1.2*(e-1)+1)/1.2,l=Math.min(e-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var lM=.3,Wp=2.6;function Xp(i,t=.32,e=.22,n=[]){let s=i.map(M=>M[0]),r=i.map(M=>M[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),f=c-l>=a-o,h=e*.7071,u=M=>{let S=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],C=[...S,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return S.every(b=>pe(b,i))&&!n.some(b=>C.some(w=>pe(w,b)))},p=(M,S)=>u(f?[M,S]:[S,M]),m=(M,S)=>{let C=Math.ceil(Math.hypot(S[0]-M[0],S[1]-M[1])/.05);for(let b=1;b<C;b++)if(!u([M[0]+(S[0]-M[0])*b/C,M[1]+(S[1]-M[1])*b/C]))return!1;return!0},[x,g,d,_]=f?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let S=null,C=null,b=.05;for(let L=d;L<=_+1e-6;L+=b)if(p(M,L)&&(C??=L),(!p(M,L)||L+b>_+1e-6)&&C!==null){let I=p(M,L)?L:L-b;(!S||I-C>S[1]-S[0])&&(S=[C,I]),C=null}if(!S||S[1]-S[0]<.2)continue;let w=L=>{let[I,R]=L?S:[S[1],S[0]];return[f?[M,I]:[I,M],f?[M,R]:[R,M]]},E=w(v),A=y[y.length-1];if(A&&n.length&&!m(A,E[0])){let L=w(!v);if(!m(A,L[0]))continue;E=L,v=!v}y.push(E[0],E[1]),v=!v}return y}function Qu(i,t=.7,e=12){return Array.from({length:e},(n,s)=>{let r=s/e*Math.PI*2;return[i[0]+Math.cos(r)*t,i[1]+Math.sin(r)*t]})}var Ku=i=>Math.atan2(Math.sin(i),Math.cos(i));function qp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Ku(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Wp*e),!0)}let a=Math.atan2(s,r),l=Ku(a-i.heading);if(i.heading=Ku(i.heading+Math.sign(l)*Math.min(Math.abs(l),Wp*e)),Math.abs(l)<.35){let c=Math.min(o,lM*e);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var tr=null,Yp=new Map;function cM(i,t=180,e,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,r=Yp.get(s);if(r)return r;e&&gl(e),tr??=new Xs({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),tr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),tr.setSize(t,t,!1),tr.setClearColor(0,0);let o=new fe,a=new tn,l=He(i.type);if(l?.light)Tl(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)ju(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let _={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};wl(o,a,new fe,_)}let c=new qi,f=new Wt(o.geometry(),new ie({vertexColors:!0,color:new nt(n,n,n)})),h=new bn(a.geometry(),new Ue({vertexColors:!0,color:new nt(n*1.8,n*1.8,n*1.8)}));c.add(f,h);let u=new ln().setFromObject(f),p=u.getCenter(new k),m=new ri(-1,1,1,-1,.01,100);m.position.copy(p).add(new k(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(p),m.updateMatrixWorld();let x=.05;for(let _ of[u.min.x,u.max.x])for(let y of[u.min.y,u.max.y])for(let v of[u.min.z,u.max.z]){let M=new k(_,y,v).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(M.x),Math.abs(M.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),tr.render(c,m);let d=tr.domElement.toDataURL("image/png");return f.geometry.dispose(),f.material.dispose(),h.geometry.dispose(),h.material.dispose(),Yp.set(s,d),d}var Zp={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},uM=2.4,hM=1.4,fM=.22,Jp=140,eh=32,dM=500,Kp=160,Qt=2767456,pM=1911110,mM=1,Qp=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),th=450,jp=125,gM=.08,nh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},xM=new nt(1714765);function bM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ih=class{host;options;renderer;scene=new qi;camera=new Je(38,1,.1,400);controls;labels;root=new Ee;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",t.append(this.labels),this.patternTexture=_M(),this.blindTexture=yM(),this.haloTexture=SM(),this.ground=new Wt(new vn(1,1),new ie({transparent:!0,blending:he,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new kl(this.scene),this.energyLayer=new Gl(this.scene,this.liftOf),this.soundLayer=new Hl(this.scene,this.liftOf),this.screenLayer=new Wl(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new ql(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,s])=>`${n}=${s}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setPacks(t){gl(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setFloor(t,e=!0){this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(f=>f.floor.rooms.some(h=>h.id===t)),n=e?.floor.rooms.find(f=>f.id===t);if(!e||!n)return;let s=n.start_view;if(s){let f=e.floor.elevation+e.ty,[h,u]=_l(n.points),p=s.target??{x:h,y:.3,z:u};this.controls.flyTo({target:new k(p.x,p.y+f,p.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=_l(n.points),a=n.points.map(f=>f[0]),l=n.points.map(f=>f[1]),c=new k(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new k(r,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".nf-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("nf-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--nf-glow",c):r.style.removeProperty("--nf-glow"))}for(let[n,s]of this.devicePins)e.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="nf-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)e.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Pp(t),n=e?1:0;n===Nl.value&&(!e||Dl.value.equals(new k(...e)))||(Nl.value=n,e&&Dl.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Cp(t);let e=Ul(t),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=e,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.invalidate()}liftOf=t=>{if(!t)return{y:0,dy:0,visible:!0};let e=this.floorMap.get(t);return e?{y:e.floor.elevation+e.y,dy:e.y,visible:e.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(t,e){this.energyLayer.setArcs(t),this.energyLayer.setSparks(e),this.invalidate()}setLiveSound(t,e){this.soundLayer.set(t,e),this.invalidate()}setLiveTrail(t){this.trailLayer.set(t),this.invalidate()}setLiveScreens(t){let e=[];for(let n of t){let s=this.building?.floors.find(a=>a.id===n.floorId),r=s?.furniture.find(a=>a.id===n.furnitureId),o=r&&s?Uu(r,s):null;!r||!o||e.push({...n,x:r.x,z:r.z,rotation:r.rotation,rect:o})}this.screenLayer.set(e),this.invalidate()}setLiveAnchors(t,e){this.liveAnchors=t,this.liveAnchorCb=e,this.invalidate()}placeLhAnchors(){let t=this.liveAnchorCb;if(!t||!this.liveAnchors.length)return;let e=new k;this.liveAnchors.forEach((n,s)=>{let r=this.liftOf(n.floorId);e.set(n.x,r.y+n.y,n.z).project(this.camera);let o=r.visible&&e.z<1&&Math.abs(e.x)<1.15&&Math.abs(e.y)<1.15;t(s,(e.x+1)/2*this.size.w,(1-e.y)/2*this.size.h,o)})}setSky(t){this.skyView=t,this.weatherLayer.set(t?{...t,low:t.low||this.lowQuality}:null);for(let e of this.floors)this.buildSun(e);this.invalidate()}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("nf-pin-info")}else t.classList.remove("nf-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=t;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,t.get(s.room.id))}}setFloorInfo(t){this.floorInfo=t;for(let e of this.floors){let n=e.label.querySelector("span"),s=t.get(e.floor.id)??this.options.floorInfo?.(e.floor)??"";n&&n.textContent!==s&&(n.textContent=s,e.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t){this.openingTargets=t,this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let s=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(e,s)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/Kp),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*e,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(t){let e=new fe;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);np(e,n,Dn(t.floor,n),s?.l??0,s?.r??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:t.theta,phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let t of this.robots.values())t.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&bM();this.lowQuality=e,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||e}),this.highQuality=t==="high";let n=new Xs({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Pe,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Fl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,s)=>this.swipeStart(t,e,n,s),swipeMove:t=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",t,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let t of this.robots.values())t.group.removeFromParent();for(let t of this.floors){t.group.traverse(e=>{e.geometry?.dispose()});for(let e of Object.values(t.materials))e.dispose();this.root.remove(t.group)}this.floors=[],this.floorMap=new Map;for(let t of[...this.labels.children])t.dataset.entity||t.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="nf-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="nf-dev-icon";let s=document.createElement("span");s.className="nf-dev-text";let r=document.createElement("span");r.className="nf-dev-watt";let o=document.createElement("span");o.className="nf-dev-name",e.append(n,s,r,o);let a,l=!1;e.addEventListener("pointerdown",f=>{if(this.furnish){this.pendingDevice=t;return}f.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=e.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-u.left,h.top+h.height/2-u.top)},dM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",f=>f.preventDefault()),e.addEventListener("click",f=>{if(f.stopPropagation(),this.furnish){this.selectDevice(t),this.options.onDeviceSelect?.(t);return}if(l)return;let h=e.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceTap?.(t,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),e.addEventListener("keydown",f=>{if(f.key==="Enter"&&f.shiftKey||f.key==="ContextMenu"){f.preventDefault();let h=e.getBoundingClientRect(),u=this.host.getBoundingClientRect();this.options.onDeviceHold?.(t,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Lp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),s=MM(t.floor,t.geo.openRooms);if(t.lightZones=s.some((a,l)=>a!==l)?s:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b])}t.lightSurface=n;let r=new Ht;r.setAttribute("position",new Dt(n.pos,3)),r.setAttribute("color",new Dt(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Dt(n.fold,1));let o=new Yi(new Uint32Array(n.pos.length/3),1);o.setUsage(Qc),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=r,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=t.floor.height,n=[];for(let s of this.devices){let r=this.glowOf(s);if(s.floorId!==t.floor.id||!r)continue;let o=Np(t.floor,s.x,s.z),a=Up(t.lightZones,o),[l,,c]=s.size??(s.lamp?nh[s.lamp]:[.3,.3,.3]),f=s.base??0,h={ceiling:[e-.12,"ceiling"],downlight:[e-.03,"spot"],spot:[e-c,"spot"],panel:[e-.05,"ceiling"],pendant:[Math.max(.5,e-c),"pendant"],floor:[f+c-.15,"omni"],uplight:[f+c,"up"],table:[f+c-.1,"omni"],wall:[f+.1,"wall"],strip:[f+Math.max(.02,c)-.01,f<mM?"up":"ceiling"],bollard:[f+c-.08,"ceiling"],garden:[f+c,"up"]},[u,p]=s.lamp?h[s.lamp]:[s.y,"omni"],m=s.lightY??u,x=r.color;if(s.lamp==="strip"){let g=(s.rotation??0)*Ce,d=!!s.upright||Math.abs(s.roll??0)>45;for(let _ of[-1/3,0,1/3])s.upright?n.push({x:s.x,y:f+l*(.5+_),z:s.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:s.x+Math.cos(g)*l*_,y:m,z:s.z+Math.sin(g)*l*_,color:x,level:r.level*.55,kind:d?"omni":p,room:a})}else n.push({x:s.x,y:m,z:s.z,color:x,level:r.level,kind:p,room:a})}return n}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),s=e.doors.map(h=>{let u=t.geo.openings.find(m=>m.opening.id===h.id);if(u&&is(u.opening,u.exterior)==="passage")return 1;let p=t.openings.get(h.id);return p?Math.max(p.open,p.open2??0):.5}),r=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(u=>u.toFixed(3)).join("/")}`).join(";")+"|"+s.map(h=>h.toFixed(1)).join(",");if(r===t.glowSig)return;t.glowSig=r;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Dp(e,n,.42,s);if(this.roomTint){let h=t.floor.rooms.length;for(let u=0;u<e.room.length;u++)if(e.room[u]!==h)for(let p=0;p<3;p++)l[u*3+p]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,f=0;for(let h=0;h<l.length/18;h++){let u=!1;for(let p=h*18;p<h*18+18&&!u;p++)u=l[p]>.004;if(u)for(let p=0;p<6;p++)c[f++]=h*6+p}o.index.needsUpdate=!0,o.setDrawRange(0,f),t.glowMesh.visible=f>0}makeMaterials(t){return{floor:Kn(new ie({vertexColors:!0}),this.themeUniform),pattern:vM(this.patternTexture),wall:Kn(Ui(new ie({vertexColors:!0}),t,"solid"),this.themeUniform),glassWall:Ui(new ie({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new ie({vertexColors:!0,blending:Ir,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ve,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Kn(Ui(new Ue({vertexColors:!0,transparent:!0,blending:Ul(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Ui(new ie({vertexColors:!0,transparent:!0,blending:he,depthWrite:!1,side:ve,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Kn(Ui(new ie({vertexColors:!0,side:ve}),t),this.themeUniform),glass:Ui(new ie({vertexColors:!0,transparent:!0,blending:he,depthWrite:!1,side:ve}),t),blinds:Kn(Ui(new ie({map:this.blindTexture,vertexColors:!0,side:ve}),t),this.themeUniform),lamps:Kn(new ie({vertexColors:!0}),this.themeUniform),halos:new _n({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:he,depthWrite:!1}),cones:new ie({vertexColors:!0,transparent:!0,blending:he,depthWrite:!1,side:ve}),screens:new ie({vertexColors:!0,transparent:!0,blending:he,depthWrite:!1,side:ve})}}rebuild(){let t=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),e=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=ku(n)?.id===r.id?o.filter(B=>B.face===zu).map(B=>({field:B,face:up(n,B)})):[],l=o.filter(B=>B.face.startsWith(`wall:${r.id}:`));if(l.length){let B=new Map(cp(n,r.id).map(X=>[X.key,X]));for(let X of l){let tt=B.get(X.face);tt&&a.push({field:X,face:tt})}}let f=(n.settings.roof.sections??[]).some(B=>Id(B,r.elevation+r.height))?(B,X)=>{let tt=Ld(n,B,X);return tt===null?null:tt-r.elevation}:void 0,h=wp(qu(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Tp(n.floors,r),a,f),u={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(u),m=new Ee,x=new Wt(h.floor,p.floor),g=new Wt(h.shadow,p.shadow);g.renderOrder=1;let d=new Wt(h.floor,p.pattern);d.renderOrder=2;let _=new Wt(new Ht,p.glow);_.renderOrder=3,_.visible=!1;let y=new Wt(new Ht,p.frames),v=new Wt(new Ht,p.blinds),M=new Wt(new Ht,p.glass);M.renderOrder=4;let S=new Wt(new Ht,p.lamps);S.visible=!1;let C=new Wt(new Ht,p.cones);C.visible=!1,C.renderOrder=3;let b=new Cn(new Ht,p.halos);b.visible=!1,b.renderOrder=7;let w=new Wt(new Ht,p.cones);w.visible=!1,w.renderOrder=7;let E=new Wt(new Ht,p.lamps);E.visible=!1;let A=new Wt(new Ht,p.screens);A.visible=!1,A.renderOrder=5;for(let B of[y,v,M])B.frustumCulled=!1;let L=new Wt(h.walls,p.glassWall),I=new Wt(h.walls,p.wall);L.renderOrder=6,m.add(x,g,d,_,I,new bn(h.lines,p.lines),y,v,M,S,C,b,w,E,A,L),this.root.add(m);let R=document.createElement("button");R.className="nf-pin nf-pin-floor",R.dataset.floor=r.id;let F=document.createElement("b");F.textContent=r.name||"\u2013";let U=document.createElement("span");U.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",R.append(F,U),R.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(R);let O=t.get(r.id),V=[],z=null;for(let B of r.rooms){let X=document.createElement("button");X.className="nf-pin",X.dataset.room=B.id,X.dataset.floor=r.id,this.fillRoomPin(X,B.name,this.roomInfo.get(B.id)),X.addEventListener("click",()=>this.options.onRoomTap?.(r.id,B.id)),this.labels.append(X);let[tt,j]=_l(B.points);V.push({pin:X,room:B,cx:tt,cz:j});for(let[ut,ct]of B.points)z??={x0:ut,x1:ut,z0:ct,z1:ct},z.x0=Math.min(z.x0,ut),z.x1=Math.max(z.x1,ut),z.z0=Math.min(z.z0,ct),z.z1=Math.max(z.z1,ct)}this.floors.push({floor:r,rank:s.indexOf(r),group:m,geo:h,floorMesh:x,shadowMesh:g,patternMesh:d,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:M,blindsMesh:v,lampMesh:S,sunMesh:C,sunSig:"",haloMesh:b,coneMesh:w,fridgeMesh:E,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:I,screenMesh:A,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:z,roomPins:V,labelSize:null,materials:p,mask:u,openings:new Map,y:O?.y??0,o:O?.o??1,ty:0,to:1,appliedO:-1,label:R})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=e.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Bl);this.buildOpenings(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?bp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Ee,n=Kn(new ie({vertexColors:!0,transparent:!0,side:ve}),this.themeUniform),s=Kn(new Ue({vertexColors:!0,transparent:!0,blending:Ul(this.theme),depthWrite:!1}),this.themeUniform,!0),r=Kn(new ie({vertexColors:!0,transparent:!0,side:ve,depthWrite:!1}),this.themeUniform),o=t.map(a=>{let l=new Ee;return l.add(new Wt(a.solid.geometry(),n),new bn(a.lines.geometry(),s)),a.glass.count&&l.add(new Wt(a.glass.geometry(),r)),l.renderOrder=8,e.add(l),{group:l,floorId:a.floor.id,rideId:Bd(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});e.renderOrder=8,this.scene.add(e),this.roof={group:e,parts:o,solid:n,lines:s,glass:r},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-t/Jp),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let f=this.floorMap.get(l.rideId)??c,h=f.ty>0?Math.min(1,f.y/f.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+f.y+l.base+(1-this.roofO)*2.2+(l.lift?h*hM:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;e?n.rank>e.rank?(s=5+n.rank,r=0):n.rank<e.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:fM)):s=this.explode?n.rank*uM:0,n.ty=s,n.to=r,t&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let s of[e.floor,e.wall,e.frames,e.blinds,e.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o}stepFloors(t){let e=!1,n=1-Math.exp(-t/Jp);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,e=!0,this.applyFloor(s)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Kp);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??Bl,c=(u,p)=>(u??null)===(p??null)||typeof u=="number"&&typeof p=="number"&&Math.abs(u-p)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let f={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let u of["open","open2","tilt","tilt2"]){let p=l[u]??0,m=a[u]??0,x=p-m;Math.abs(x)<.003?f[u]=p:(f[u]=m+x*n,h=!0)}if(l.cover===null||a.cover===null)f.cover=l.cover;else{let u=l.cover-a.cover;Math.abs(u)<.003?f.cover=l.cover:(f.cover=a.cover+u*n,h=!0)}(f.open!==a.open||f.open2!==(a.open2??0)||f.tilt!==a.tilt||f.tilt2!==(a.tilt2??0)||f.cover!==a.cover||!!f.sensed!=!!a.sensed)&&(s.openings.set(o,f),r=!0),e||=h}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new nt(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let s=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*gM+s)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=f=>{let h=this.flashes.get(f);if(!h||h<=e)return 0;let u=h-e,p=u>th?.5+.5*Math.sin(u/140):u/th;return Math.round(p*10)/10},s=this.devices.filter(f=>f.floorId===t.floor.id&&(f.lamp||f.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(f=>`${f.id},${f.lamp??f.model},${f.variant},${f.x},${f.z},${f.y},${f.rotation??0},${f.roll??0},${f.upright?1:0},${f.size?.join("/")},${f.base??0},${f.pack??""},${f.mirror?1:0}`).join(";"),o=s.map(f=>this.glowOf(f)),a=s.map((f,h)=>`${n(f.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(u=>u.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=r,t.lampColorSig="";let f=new fe,h=[],u=[],p=new Map,m=t.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??m)>Math.min(t.floor.cut_height,m):x.lamp?Qp.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let d=f.count,_=x.pack?He(x.pack):void 0,[y,v,M]=x.size??[.3,.3,.3];x.model?sp(f,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):_?Tl(f,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:v,h:M,mirror:x.mirror},x.base??0,65280):ju(f,{...x,lamp:x.lamp},m,65280),p.set(x.furnitureId??x.id,{start:d,end:f.count}),x.pickable!==!1&&h.push({id:x.id,start:d,end:f.count}),x.furnitureId&&u.push({id:x.furnitureId,start:d,end:f.count})}t.lampTris=h,t.lampFurnTris=u,t.lampRanges=p,t.lampShade=dd(f.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=f.geometry(),t.lampMesh.visible=f.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((f,h)=>{let u=t.lampRanges.get(f.furnitureId??f.id);if(!u)return;let p=o[h],m=p?.55+.45*p.level:0,x=p?new nt(...p.color.map(_=>Math.min(1,_*m))):new nt(pM),g=n(f.id);g>0&&x.lerp(new nt(1,1,1),.7*g);let d=new nt(x.getHex());pd(c,t.lampShade,u,[d.r,d.g,d.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){let e=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Ce,s=this.weatherLayer?.cloud??0,r=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...t.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===t.sunSig)return;t.sunSig=r;let o=new fe;if(e&&e.elevation>2&&s<.97){let a=Math.min(1,e.elevation/12)*(1-.8*s),l=e.elevation*Ce,c=e.azimuth*Ce,f=[Math.sin(n+c),-Math.cos(n+c)],h=1/Math.tan(l);for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let p=[-u.toRoom[0],-u.toRoom[1]],m=p[0]*f[0]+p[1]*f[1];if(m<.05)continue;let x=t.openings.get(u.opening.id),g=u.top-(x?.cover??0)*(u.top-u.sill);if(g-u.sill<.05)continue;let d=(b,w)=>{let E=Math.min(7,w*h);return[u.start[0]+u.axis[0]*b+u.toRoom[0]*u.faceRoom-f[0]*E,.02,u.start[1]+u.axis[1]*b+u.toRoom[1]*u.faceRoom-f[1]*E]},_=.14*a*Math.min(1,m*1.5),y=new nt(1*_,.82*_,.55*_),v=y.clone().multiplyScalar(.45),M=t.floor.rooms.find(b=>b.id===u.opening.room_id);if(!M||M.points.length<3)continue;let S=Math.max(1,Math.ceil(Math.min(7,g*h)/.25)),C=Math.max(1,Math.ceil(u.width/.3));for(let b=0;b<S;b++){let w=u.sill+(g-u.sill)*b/S,E=u.sill+(g-u.sill)*(b+1)/S,A=b/S,L=(b+1)/S,I=y.clone().lerp(v,A),R=y.clone().lerp(v,L);for(let F=0;F<C;F++){let U=u.width*F/C,O=u.width*(F+1)/C,V=d((U+O)/2,(w+E)/2);if(!pe([V[0],V[2]],M.points))continue;let z=d(U,w),B=d(O,w),X=d(O,E),tt=d(U,E);o.tri(z,B,X,I,I,R),o.tri(z,X,tt,I,R,R)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=o.geometry(),t.sunMesh.visible=o.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],s=[],r=new fe,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let d=(l.rotation??0)*Ce,_=[-Math.sin(d),Math.cos(d)],y=l.model==="camera_ceiling",v=l.reach??(y?3:4.5),M=(l.fov??(y?360:90))*Ce/2,S=l.motion?new nt(.9,.12,.16):new nt(.04,.22,.28),C=new nt(0,0,0),b=Math.max(4,Math.round(M/.15)),w=.015,E=t.geo.walls2d,A=R=>{let F=_[0]*Math.cos(R)-_[1]*Math.sin(R),U=_[1]*Math.cos(R)+_[0]*Math.sin(R),O=v;for(let V of E){let z=V.b[0]-V.a[0],B=V.b[1]-V.a[1],X=F*B-U*z;if(Math.abs(X)<1e-9)continue;let tt=((V.a[0]-l.x)*B-(V.a[1]-l.z)*z)/X,j=((V.a[0]-l.x)*U-(V.a[1]-l.z)*F)/X;tt>.45&&tt<O&&j>=0&&j<=1&&(O=tt)}return O},L=R=>{let F=A(R);return[l.x+(_[0]*Math.cos(R)-_[1]*Math.sin(R))*F,w,l.z+(_[1]*Math.cos(R)+_[0]*Math.sin(R))*F]},I=r.count;for(let R=0;R<b;R++)r.tri([l.x,w,l.z],L(-M+2*M*(R+1)/b),L(-M+2*M*R/b),S,C,C);o.push({id:l.id,start:I,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Qp.has(l.lamp)&&this.wallMode==="cut")continue;let[f,h,u]=l.size??nh[l.lamp],p=l.base??0,m=(l.rotation??0)*Ce,x={ceiling:e-.07,downlight:e-.03,spot:e-u,panel:e-.03,pendant:Math.max(.4,e-u)+.08,floor:p+u-.15,uplight:p+u,table:p+u-.09,wall:p+u/2,strip:p+Math.max(.02,u)-.01,bollard:p+u-.08,garden:p+u-.03}[l.lamp],g=(d,_,y=1)=>{n.push(d,x,_),s.push(...c.color.map(v=>v*c.level*.7*y))};if(l.lamp==="strip")for(let d of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+f*(.5+d),l.z),s.push(...c.color.map(_=>_*c.level*.7*.6))):g(l.x+Math.cos(m)*f*d,l.z+Math.sin(m)*f*d,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(h/2+.05),l.z+Math.cos(m)*(h/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let d=new nt(...c.color.map(S=>S*.09*c.level)),_=new nt(0,0,0),y=Math.max(.03,f/2),v=.45+.35*c.level,M=16;for(let S=0;S<M;S++){let C=S/M*Math.PI*2,b=(S+1)/M*Math.PI*2,w=[l.x+Math.cos(C)*y,x,l.z+Math.sin(C)*y],E=[l.x+Math.cos(b)*y,x,l.z+Math.sin(b)*y],A=[l.x+Math.cos(C)*v,.02,l.z+Math.sin(C)*v],L=[l.x+Math.cos(b)*v,.02,l.z+Math.sin(b)*v];r.tri(w,A,L,d,_,_),r.tri(w,L,E,d,_,d)}}}let a=new Ht;a.setAttribute("position",new Dt(n,3)),a.setAttribute("color",new Dt(s,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=r.geometry(),t.coneMesh.visible=r.count>0,t.coneTris=o}buildScreens(t){let e=qu(t.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=e.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return;t.screenSig=n;let s=new fe;for(let r of e){let o=this.screens.get(r.id),a=r.rotation*Ce,l=Math.cos(a),c=Math.sin(a),f=(y,v,M)=>[r.x+y*l-M*c,v,r.z+y*c+M*l];if(o.faces){let y=Math.max(.05,r.w)*(r.mirror?-1:1),v=Math.max(.05,r.d),M=Math.max(.005,r.h),S=Dn(t.floor,r);for(let C of o.faces){let b=C.part==="right"?.03:-Math.abs(y)/2+.03,w=C.part==="left"?-.03:Math.abs(y)/2-.03,E=S+(C.part==="bottom"?M*.45:M)+.006,A=new nt(...C.color.map(V=>Math.min(1,V*(.35+.65*C.level)))),L=new nt(0,0,0),I=(V,z,B=E)=>f(V*Math.sign(y),B,z),R=[I(b,-v/2+.03),I(w,-v/2+.03),I(w,v/2-.03),I(b,v/2-.03)];s.tri(R[0],R[2],R[1],A),s.tri(R[0],R[3],R[2],A);let F=.12+.1*C.level,U=A.clone().multiplyScalar(.5),O=[I(b-F,-v/2-F,E+.004),I(w+F,-v/2-F,E+.004),I(w+F,v/2+F,E+.004),I(b-F,v/2+F,E+.004)];for(let V=0;V<4;V++){let z=(V+1)%4;s.tri(R[V],O[z],O[V],U,L,L),s.tri(R[V],R[z],O[z],U,U,L)}}continue}let h=Uu(r,t.floor);if(!h)continue;let u=new nt(...o.color.map(y=>Math.min(1,y*(.35+.65*o.level)))),p=new nt(0,0,0),m=h.z+.004;s.tri(f(h.x0,h.y0,m),f(h.x1,h.y0,m),f(h.x1,h.y1,m),u),s.tri(f(h.x0,h.y0,m),f(h.x1,h.y1,m),f(h.x0,h.y1,m),u);let x=.18+.12*o.level,g=u.clone().multiplyScalar(.5),d=[f(h.x0,h.y0,m),f(h.x1,h.y0,m),f(h.x1,h.y1,m),f(h.x0,h.y1,m)],_=[f(h.x0-x,h.y0-x,m+.01),f(h.x1+x,h.y0-x,m+.01),f(h.x1+x,h.y1+x,m+.01),f(h.x0-x,h.y1+x,m+.01)];for(let y=0;y<4;y++){let v=(y+1)%4;s.tri(d[y],_[y],_[v],g,p,p),s.tri(d[y],_[v],d[v],g,p,g)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0}buildOpenings(t){let e=Vp(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,s]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){for(let t of this.floors){let e=t.geo.floor.getAttribute("color");for(let n of t.geo.roomTris){let s=new nt(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new nt(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(xM,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)e.setXYZ(o,s.r,s.g,s.b)}e.needsUpdate=!0}for(let t of this.labels.querySelectorAll(".nf-pin"))t.classList.toggle("nf-pin-active",!!t.dataset.room&&t.dataset.room===this.roomId);this.invalidate()}fit(t){let e=new ln;for(let h of this.activeFloors()){let u=h.floor.elevation+h.ty;for(let p of h.floor.rooms)for(let[m,x]of p.points)e.expandByPoint(new k(m,u,x)),e.expandByPoint(new k(m,u+h.floor.height,x))}e.isEmpty()&&e.set(new k(-4,0,-4),new k(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:e.min.x-8,x1:e.max.x+8,z0:e.min.z-8,z1:e.max.z+8,y0:e.min.y,y1:e.max.y+6});let n=e.getCenter(new k),s=e.getSize(new k),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=e.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let f=c?l.target:null;f&&n.set(f.x,f.y+(a?this.floorBase(this.floorId):0),f.z),this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new ln,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new k(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new k(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=wM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new k),s=t.getSize(new k),r=eh*Math.ceil((Math.max(s.x,s.z)+16)/eh);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,e-Ni-.02,n.z)}distanceFor(t){let e=this.camera.fov*Ce,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=new Cr;return s.setFromCamera(new Vt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),s}pick(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(f=>f.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let f=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(f)return{entity:f}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let u=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??ee;if(u!==ee&&Math.floor(u/16)===0)continue}let f=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=f?this.pickOpenings.get(f):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let f=o(c.geo.furnitureTris,l),h=f?this.pickFurniture.get(f):void 0;if(h)return{entity:h};if(a.face&&!f){let u=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,p=Math.floor(u/16),m=u%16,x=this.wallMode==="cut"&&p===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let d=n.ray.direction,_=Math.hypot(d.x,d.z)||1,y=[a.point.x-d.x/_*.3,a.point.z-d.z/_*.3],v=c.floor.rooms.find(M=>M.points.length>=3&&pe(y,M.points))?.id??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:c.floor.id,roomId:v}}else if(!g&&v)return{floorId:c.floor.id,roomId:v}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(f=>({id:f.roomId,start:f.start,end:f.end})),l)??null}}return null}onTap(t,e){let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+th),this.invalidate(),this.options.onDeviceTap?.(n.entity,t,e);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(t,e){let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=s.find(f=>f.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(f=>o.faceIndex>=f.start&&o.faceIndex<f.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(t,e,n){let s=this.rayAt(e,n),r=t.floor.elevation+t.y,o=s.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-s.ray.origin.y)/o.y;return a<=0?null:[s.ray.origin.x+o.x*a,s.ray.origin.z+o.z*a]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){if(this.surfaceGrab?.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(t,e),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(u=>u.id===l)):void 0,f=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&f&&s.has(f))&&this.grabItem(c,l,t,e)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,t,e):this.grabItem(a,o,t,e)}let r=this.furnitureAt(t,e);if(!r){let o=this.pick(t,e);return o&&"entity"in o?this.grabDevice(o.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,t,e)}grabItem(t,e,n,s){let r=t.floor.furniture.find(a=>a.id===e),o=this.floorPoint(t,n,s);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:t.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(t,e,n){let s=this.devices.find(a=>a.id===t),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,e,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(t),this.options.onDeviceSelect?.(t),!1):(this.deviceGrab={id:t,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(t),this.options.onDeviceSelect?.(t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){t&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=t;for(let[e,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",e===t)}dragFurniture(t,e){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(u=>u.id===n.id),f=l&&this.floorPoint(l,t,e);if(!l||!c||!f)return;let h=this.building?.settings.grid??.05;n.x=c.x=Math.round((f[0]+n.offset[0])/h)*h,n.z=c.z=Math.round((f[1]+n.offset[1])/h)*h,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=this.floorPoint(r,t,e);if(!o)return;let a=this.building?.settings.grid??.05;s.x=Math.round((o[0]+s.offset[0])/a)*a,s.z=Math.round((o[1]+s.offset[1])/a)*a,s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let t=this.deviceGrab;this.deviceGrab=null,t?.moved&&this.options.onDeviceMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3);let e=this.grab;this.grab=null,e?.moved&&this.options.onFurnitureMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(d=>d.floor.furniture.some(_=>_.id===t)):void 0,n=e?.floor.furniture.find(d=>d.id===t);if(!e||!n)return;let s=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=He(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Dn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Dn(e.floor,n),f=n.rotation*Ce,h=Math.cos(f),u=Math.sin(f),p=(d,_,y)=>[s+d*h-_*u,y,r+d*u+_*h],m=new tn,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new nt(.25,.9,1);for(let d=0;d<4;d++){let[_,y]=x[d],[v,M]=x[(d+1)%4];m.seg(p(_,y,c+.01),p(v,M,c+.01),g),m.seg(p(_,y,c+l),p(v,M,c+l),g),m.seg(p(_,y,c+.01),p(_,y,c+l),g)}m.seg(p(-n.w/2,n.d/2+.03,c+.02),p(n.w/2,n.d/2+.03,c+.02),new nt(1,1,1)),this.ghost=new bn(m.geometry(),new Ue({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){let n=this.pick(t,e);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,t,e)}swipeStart(t,e,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(t,e);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,t,e)!==!0?!1:(this.swipe={entity:r.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){let n=this.floors.filter(d=>d.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(t*s),o=Math.round(e*s),a=new Ke(r,o);a.texture.colorSpace=Pe;let l=new ri(-1,1,1,-1,.1,400),c=this.floors.map(d=>({fv:d,visible:d.group.visible,y:d.y,o:d.o,standing:d.mask.standing.value,glass:d.mask.glass.value})),f=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,u=this.renderer.getClearAlpha(),p=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let d of n){for(let I of this.floors)I.group.visible=I===d;d.y=0,d.o=1,this.applyFloor(d),d.group.visible=!0,d.mask.standing.value=0,d.mask.glass.value=0;let _=d.floor.rooms.flatMap(I=>I.points),y=d.floor.elevation,v=new ln(new k(Math.min(..._.map(I=>I[0]))-.3,y,Math.min(..._.map(I=>I[1]))-.3),new k(Math.max(..._.map(I=>I[0]))+.3,y+Math.min(d.floor.cut_height,d.floor.height),Math.max(..._.map(I=>I[1]))+.3)),M=v.getCenter(new k),S=-.6,C=.8,b=new k(Math.sin(C)*Math.sin(S),Math.cos(C),Math.sin(C)*Math.cos(S));l.position.copy(M).addScaledVector(b,100),l.lookAt(M),l.updateMatrixWorld();let w=.5,E=.5;for(let I of[v.min.x,v.max.x])for(let R of[v.min.y,v.max.y])for(let F of[v.min.z,v.max.z]){let U=new k(I,R,F).applyMatrix4(l.matrixWorldInverse);w=Math.max(w,Math.abs(U.x)),E=Math.max(E,Math.abs(U.y))}let A=r/o;w/E>A?E=w/A:w=E*A,l.left=-w*1.05,l.right=w*1.05,l.top=E*1.05,l.bottom=-E*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,p);let L=x.createImageData(r,o);for(let I=0;I<o;I++)L.data.set(p.subarray((o-1-I)*r*4,(o-I)*r*4),I*r*4);x.putImageData(L,0,0),g.push({floorId:d.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(u);for(let d of c)d.fv.y=d.y,d.fv.o=d.o,d.fv.mask.standing.value=d.standing,d.fv.mask.glass.value=d.glass,this.applyFloor(d.fv),d.fv.group.visible=d.visible;this.roof&&(this.roof.group.visible=f),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?Xp(n.room,void 0,void 0,n.obstacles):Qu(n.rest),l=a.length?a:Qu(n.rest),c=0;l.forEach((f,h)=>{Math.hypot(f[0]-s.motion.pos[0],f[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=h)}),s.motion.path=l,s.motion.next=c,n.room&&!pe(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(Zp[n.mode])}for(let[n,s]of this.robots)e.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let s=new fe,r=(a,l,c,f,h)=>{let u=[];for(let p=0;p<20;p++)u.push([Math.cos(p/20*Math.PI*2)*a,Math.sin(p/20*Math.PI*2)*a]);Ie(s,u,l,c,f,h,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new ie({vertexColors:!0});let o=new fe;Ie(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ee,n=new ie({color:Zp[t.mode]});return e.add(new Wt(this.robotGeo,this.robotMat),new Wt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),e>0?n=qp(s.motion,s.info,e)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}liveFlyInto(t,e,n=1100){let s=this.floorMap.get(t),r=s?s.floor.elevation+s.ty:0;this.controls.flyTo({target:new k(e.target[0],r+e.target[1],e.target[2]),radius:e.radius,theta:e.theta,phi:Math.max(.08,e.phi)},n)}focus(t,e,n,s,r){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new k(e,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let s=this.controls.update(t),r=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let d=this.deviceFloor.get(x);d&&m.add(d),g<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),h=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(t)).some(Boolean),u=s||r||o||a||l,p=[];if(s&&p.push("camera"),r&&p.push("floors"),o&&p.push("openings"),a&&p.push("flash"),l&&p.push("roof"),this.effectTick&&p.push("effect"),c&&p.push("robot"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=u?t:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,p),u&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*jp:jp;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!u&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!u&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,h)=>{let u=f?f[0]*n/r+f[1]*s/r>=.25:a;!l&&u&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new k,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,f=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,f,g).project(this.camera);let d=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||d<l.x)&&(l={x:d,y:_}),(!c||d>c.x)&&(c={x:d,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,u=8+this.labelInset,p=l.x-h-14,m=l.y;p<u&&this.labelInset&&(p=c.x+14,m=c.y),r.push({fv:o,left:Math.max(u,Math.min(t-h-8,p)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,f?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){let n=new k,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let f=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==f&&(this.pinMode.set(o,f),o.classList.toggle("nf-dev-full",f==="full"),o.classList.toggle("nf-dev-dim",f==="dim")),this.place(o,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let s=t-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:e,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function _M(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,f)=>{e.strokeStyle=`rgba(55,224,255,${f})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let s=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let f=o+l*.37%1*256;n(f,c,f,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let f=a+l*.53%1*256;n(c,f,c+256/7,f,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let f=l?256/4:0;for(let h of[f,f+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new Qe(t);return r.flipY=!1,r.wrapS=hn,r.wrapT=hn,r.anisotropy=4,r.colorSpace=Pe,r}function vM(i){let t=new ie({map:i,transparent:!0,blending:he,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNfTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"nf-pattern",t}function yM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new Qe(i);return e.wrapS=Wi,e.wrapT=Wi,e.colorSpace=Pe,e}function MM(i,t){let e=i.rooms.map((s,r)=>r),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let[s,r]of t){let o=i.rooms.findIndex(f=>f.id===s),a=i.rooms.findIndex(f=>f.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((s,r)=>n(r))}function SM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new Qe(t);return s.colorSpace=Pe,s}function wM(){let t=eh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new Qe(e);return r.anisotropy=4,r.colorSpace=Pe,r}function KT(i,t){return new ih(i,t)}function ju(i,t,e,n){let[s,r,o]=t.size??nh[t.lamp],a=t.base??0,l=(t.rotation??0)*Ce,c=Math.cos(l),f=Math.sin(l),h=(x,g)=>[t.x+x*c-g*f,t.z+x*f+g*c],u=(x,g,d,_,y,v=14)=>{let M=[];for(let S=0;S<v;S++){let C=S/v*Math.PI*2;M.push([t.x+Math.cos(C)*x,t.z+Math.sin(C)*x])}Ie(i,M,g,d,_,y,{aoFrom:0,bottom:!0})},p=(x,g,d,_,y,v,M,S=M)=>Ie(i,[h(x,d),h(g,d),h(g,_),h(x,_)],y,v,M,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(s,r)/2);switch(t.lamp){case"ceiling":u(m*.25,e-.04,e,Qt,Qt,8),u(m,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);u(.06,e-.02,e,Qt,Qt,8);let g=t.variant==="globe"?x+2*m:t.variant==="drum"?x+.24:x+.2;if(u(.008,g,e-.02,Qt,Qt,5),t.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),v=Math.PI*((_+1)/7);u(m*Math.max(.2,Math.sin((y+v)/2)),x+m-m*Math.cos(y),x+m-m*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)u(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?u(m,x,x+.24,n,n,18):(u(m*.35,x+.14,x+.2,n,n,12),u(m,x,x+.14,n,n,16));break}case"downlight":u(m,e-.012,e,Qt,Qt,12),u(m*.7,e-.02,e-.012,n,n,12);break;case"spot":u(m*.6,e-.02,e,Qt,Qt,10),u(m,e-Math.max(.06,o),e-.02,Qt,Qt,12),u(m*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":p(-s/2,s/2,-r/2,r/2,e-Math.max(.015,o),e,Qt,Qt),p(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":u(Math.max(.1,m*.6),a,a+.03,Qt,Qt),u(.014,a+.03,a+o-.12,Qt,Qt,6),u(m,a+o-.14,a+o-.02,Qt,Qt),u(m*.92,a+o-.02,a+o,n,n);break;case"bollard":u(m,a,a+o-.14,Qt,Qt,10),u(m*.9,a+o-.14,a+o-.03,n,n,10),u(m*1.1,a+o-.03,a+o,Qt,Qt,10);break;case"garden":u(.012,a,a+o-.08,Qt,Qt,5),u(m,a+o-.08,a+o-.01,Qt,Qt,10),u(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":u(Math.max(.1,m*.7),a,a+.03,Qt,Qt),u(.014,a+.03,a+o-.28,Qt,Qt,6),u(m,a+o-.3,a+o,n,n);break;case"table":u(Math.max(.05,m*.55),a,a+.03,Qt,Qt),u(.012,a+.03,a+o-.16,Qt,Qt,6),u(m,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??xl;p(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,Qt),p(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){p(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let d=(t.roll??0)*Ce,_=Math.cos(d),y=Math.sin(d),v=t.upright?a+s/2:g-x/2,M=(E,A,L)=>{let I=E,R=A*_-L*y,F=A*y+L*_;return t.upright&&([I,R]=[-R,I]),[t.x+I*c-F*f,v+R,t.z+I*f+F*c]},S=[M(-s/2,-x/2,-r/2),M(s/2,-x/2,-r/2),M(s/2,-x/2,r/2),M(-s/2,-x/2,r/2),M(-s/2,x/2,-r/2),M(s/2,x/2,-r/2),M(s/2,x/2,r/2),M(-s/2,x/2,r/2)],C=new nt(n),b=[t.x,v,t.z],w=(E,A,L,I)=>{let[R,F,U]=[S[E],S[A],S[L]],O=[(F[1]-R[1])*(U[2]-R[2])-(F[2]-R[2])*(U[1]-R[1]),(F[2]-R[2])*(U[0]-R[0])-(F[0]-R[0])*(U[2]-R[2]),(F[0]-R[0])*(U[1]-R[1])-(F[1]-R[1])*(U[0]-R[0])],V=[R[0]-b[0],R[1]-b[1],R[2]-b[2]],z=O[0]*V[0]+O[1]*V[1]+O[2]*V[2]<0,[B,X,tt,j]=z?[S[I],S[L],S[A],S[E]]:[S[E],S[A],S[L],S[I]];i.tri(B,X,tt,C,C,C),i.tri(B,tt,j,C,C,C)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{ih as NextFloorViewer,KT as createViewer,cM as furniturePreview,bM as isLowEnd,ju as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
