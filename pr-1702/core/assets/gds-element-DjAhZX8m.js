var it=a=>{throw TypeError(a)};var q=(a,r,o)=>r.has(a)||it("Cannot "+o);var S=(a,r,o)=>(q(a,r,"read from private field"),o?o.call(a):r.get(a)),P=(a,r,o)=>r.has(a)?it("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(a):r.set(a,o),H=(a,r,o,d)=>(q(a,r,"write to private field"),d?d.call(a,o):r.set(a,o),o),N=(a,r,o)=>(q(a,r,"access private method"),o);import{u as Ft,f as Vt,x as Wt,a as Bt}from"./lit-element-C_s9q329.js";import{c as at}from"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=a=>(r,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(a,r)}):customElements.define(a,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={attribute:!0,type:String,converter:Ft,reflect:!1,hasChanged:Vt},Ht=(a=qt,r,o)=>{const{kind:d,metadata:p}=o;let y=globalThis.litPropertyMetadata.get(p);if(y===void 0&&globalThis.litPropertyMetadata.set(p,y=new Map),y.set(o.name,a),d==="accessor"){const{name:_}=o;return{set(g){const E=r.get.call(this);r.set.call(this,g),this.requestUpdate(_,E,a)},init(g){return g!==void 0&&this.P(_,void 0,a),g}}}if(d==="setter"){const{name:_}=o;return function(g){const E=this[_];r.call(this,g),this.requestUpdate(_,E,a)}}throw Error("Unsupported decorator location: "+d)};function Nt(a){return(r,o)=>typeof o=="object"?Ht(a,r,o):((d,p,y)=>{const _=p.hasOwnProperty(y);return p.constructor.createProperty(y,_?{...d,wrapped:!0}:d),_?Object.getOwnPropertyDescriptor(p,y):void 0})(a,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(a){return Nt({...a,state:!0,attribute:!1})}const U="-gdsvsuffix";class D{static get instance(){var r;return(r=globalThis.__gdsElementLookupTable)!=null&&r[U]||(globalThis.__gdsElementLookupTable={...globalThis.__gdsElementLookupTable,[U]:new Map}),globalThis.__gdsElementLookupTable[U]}}function zt(a){const r=a+U;return D.instance.set(a,r),function(o){return o.prototype.gdsElementName=a,customElements.get(r)?d=>!1:ft(r)(o)}}function Xt(a){return D.instance.set(a,a),function(r){return r.prototype.gdsElementName=a,ft(a)(r)}}const ae=a=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?Xt(a):zt(a),ot=new WeakMap;function Yt(a,...r){let o=ot.get(a);return o||(o=st(a),o.raw=st(a.raw),ot.set(a,o)),[o,...r]}const st=a=>a.map(r=>{for(const[o,d]of D.instance.entries())r=r.replace(new RegExp(`${o}(?![-a-z])`,"mg"),d);return r});function Zt(a){return(r,...o)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return a(r,...o);const[d,...p]=Yt(r,...o);return a(d,...p)}}const oe=Zt(Wt);function se(a){return D.instance.get(a)??a}var x,T,C,k,I,ct,lt;class Jt{constructor(r){P(this,I);P(this,x,!Qt());P(this,T,[]);P(this,C,new Map);P(this,k,new Map);this.host=r,this.host.addController(this)}hostConnected(){this.host.shadowRoot&&S(this,T).length===0&&H(this,T,[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(r,o){if(S(this,x)){const d=Array.isArray(o)?o.map(p=>p.toString()).join(""):o.toString();N(this,I,ct).call(this,r,d)}else o.styleSheet&&N(this,I,lt).call(this,r,o.styleSheet)}clearAll(){var r;S(this,x)?(S(this,k).forEach(o=>o.remove()),(r=this.host.shadowRoot)==null||r.querySelectorAll("style").forEach(o=>o.innerHTML=""),S(this,k).clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],S(this,C).clear(),H(this,T,[]))}}x=new WeakMap,T=new WeakMap,C=new WeakMap,k=new WeakMap,I=new WeakSet,ct=function(r,o){var p;let d=S(this,k).get(r);d||(d=document.createElement("style"),S(this,k).set(r,d)),d.textContent=o,(p=this.host.shadowRoot)==null||p.appendChild(d)},lt=function(r,o){this.host.shadowRoot&&(S(this,C).set(r,o),this.host.shadowRoot.adoptedStyleSheets=[...S(this,T),...Array.from(S(this,C).values())])};function Qt(){try{return new CSSStyleSheet,!0}catch{return!1}}/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ut;(function(a){(function(r){var o=typeof at=="object"?at:typeof self=="object"?self:typeof this=="object"?this:Function("return this;")(),d=p(a);typeof o.Reflect>"u"?o.Reflect=a:d=p(o.Reflect,d),r(d);function p(y,_){return function(g,E){typeof y[g]!="function"&&Object.defineProperty(y,g,{configurable:!0,writable:!0,value:E}),_&&_(g,E)}}})(function(r){var o=Object.prototype.hasOwnProperty,d=typeof Symbol=="function",p=d&&typeof Symbol.toPrimitive<"u"?Symbol.toPrimitive:"@@toPrimitive",y=d&&typeof Symbol.iterator<"u"?Symbol.iterator:"@@iterator",_=typeof Object.create=="function",g={__proto__:[]}instanceof Array,E=!_&&!g,j={create:_?function(){return B(Object.create(null))}:g?function(){return B({__proto__:null})}:function(){return B({})},has:E?function(t,e){return o.call(t,e)}:function(t,e){return e in t},get:E?function(t,e){return o.call(t,e)?t[e]:void 0}:function(t,e){return t[e]}},$=Object.getPrototypeOf(Function),G=typeof process=="object"&&process.env&&process.env.REFLECT_METADATA_USE_MAP_POLYFILL==="true",F=!G&&typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:Ut(),ht=!G&&typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:Dt(),dt=!G&&typeof WeakMap=="function"?WeakMap:Gt(),R=new dt;function pt(t,e,n,i){if(v(n)){if(!tt(t))throw new TypeError;if(!et(e))throw new TypeError;return bt(t,e)}else{if(!tt(t))throw new TypeError;if(!w(e))throw new TypeError;if(!w(i)&&!v(i)&&!O(i))throw new TypeError;return O(i)&&(i=void 0),n=M(n),Tt(t,e,n,i)}}r("decorate",pt);function yt(t,e){function n(i,s){if(!w(i))throw new TypeError;if(!v(s)&&!jt(s))throw new TypeError;Z(t,e,i,s)}return n}r("metadata",yt);function vt(t,e,n,i){if(!w(n))throw new TypeError;return v(i)||(i=M(i)),Z(t,e,n,i)}r("defineMetadata",vt);function _t(t,e,n){if(!w(e))throw new TypeError;return v(n)||(n=M(n)),z(t,e,n)}r("hasMetadata",_t);function wt(t,e,n){if(!w(e))throw new TypeError;return v(n)||(n=M(n)),V(t,e,n)}r("hasOwnMetadata",wt);function mt(t,e,n){if(!w(e))throw new TypeError;return v(n)||(n=M(n)),X(t,e,n)}r("getMetadata",mt);function gt(t,e,n){if(!w(e))throw new TypeError;return v(n)||(n=M(n)),Y(t,e,n)}r("getOwnMetadata",gt);function St(t,e){if(!w(t))throw new TypeError;return v(e)||(e=M(e)),J(t,e)}r("getMetadataKeys",St);function Et(t,e){if(!w(t))throw new TypeError;return v(e)||(e=M(e)),Q(t,e)}r("getOwnMetadataKeys",Et);function Mt(t,e,n){if(!w(e))throw new TypeError;v(n)||(n=M(n));var i=A(e,n,!1);if(v(i)||!i.delete(t))return!1;if(i.size>0)return!0;var s=R.get(e);return s.delete(n),s.size>0||R.delete(e),!0}r("deleteMetadata",Mt);function bt(t,e){for(var n=t.length-1;n>=0;--n){var i=t[n],s=i(e);if(!v(s)&&!O(s)){if(!et(s))throw new TypeError;e=s}}return e}function Tt(t,e,n,i){for(var s=t.length-1;s>=0;--s){var m=t[s],f=m(e,n,i);if(!v(f)&&!O(f)){if(!w(f))throw new TypeError;i=f}}return i}function A(t,e,n){var i=R.get(t);if(v(i)){if(!n)return;i=new F,R.set(t,i)}var s=i.get(e);if(v(s)){if(!n)return;s=new F,i.set(e,s)}return s}function z(t,e,n){var i=V(t,e,n);if(i)return!0;var s=W(e);return O(s)?!1:z(t,s,n)}function V(t,e,n){var i=A(e,n,!1);return v(i)?!1:Ct(i.has(t))}function X(t,e,n){var i=V(t,e,n);if(i)return Y(t,e,n);var s=W(e);if(!O(s))return X(t,s,n)}function Y(t,e,n){var i=A(e,n,!1);if(!v(i))return i.get(t)}function Z(t,e,n,i){var s=A(n,i,!0);s.set(t,e)}function J(t,e){var n=Q(t,e),i=W(t);if(i===null)return n;var s=J(i,e);if(s.length<=0)return n;if(n.length<=0)return s;for(var m=new ht,f=[],c=0,u=n;c<u.length;c++){var l=u[c],h=m.has(l);h||(m.add(l),f.push(l))}for(var b=0,rt=s;b<rt.length;b++){var l=rt[b],h=m.has(l);h||(m.add(l),f.push(l))}return f}function Q(t,e){var n=[],i=A(t,e,!1);if(v(i))return n;for(var s=i.keys(),m=At(s),f=0;;){var c=Rt(m);if(!c)return n.length=f,n;var u=xt(c);try{n[f]=u}catch(l){try{Lt(m)}finally{throw l}}f++}}function K(t){if(t===null)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return t===null?1:6;default:return 6}}function v(t){return t===void 0}function O(t){return t===null}function kt(t){return typeof t=="symbol"}function w(t){return typeof t=="object"?t!==null:typeof t=="function"}function Ot(t,e){switch(K(t)){case 0:return t;case 1:return t;case 2:return t;case 3:return t;case 4:return t;case 5:return t}var n="string",i=nt(t,p);if(i!==void 0){var s=i.call(t,n);if(w(s))throw new TypeError;return s}return Pt(t)}function Pt(t,e){var n,i;{var s=t.toString;if(L(s)){var i=s.call(t);if(!w(i))return i}var n=t.valueOf;if(L(n)){var i=n.call(t);if(!w(i))return i}}throw new TypeError}function Ct(t){return!!t}function It(t){return""+t}function M(t){var e=Ot(t);return kt(e)?e:It(e)}function tt(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:Object.prototype.toString.call(t)==="[object Array]"}function L(t){return typeof t=="function"}function et(t){return typeof t=="function"}function jt(t){switch(K(t)){case 3:return!0;case 4:return!0;default:return!1}}function nt(t,e){var n=t[e];if(n!=null){if(!L(n))throw new TypeError;return n}}function At(t){var e=nt(t,y);if(!L(e))throw new TypeError;var n=e.call(t);if(!w(n))throw new TypeError;return n}function xt(t){return t.value}function Rt(t){var e=t.next();return e.done?!1:e}function Lt(t){var e=t.return;e&&e.call(t)}function W(t){var e=Object.getPrototypeOf(t);if(typeof t!="function"||t===$||e!==$)return e;var n=t.prototype,i=n&&Object.getPrototypeOf(n);if(i==null||i===Object.prototype)return e;var s=i.constructor;return typeof s!="function"||s===t?e:s}function Ut(){var t={},e=[],n=function(){function f(c,u,l){this._index=0,this._keys=c,this._values=u,this._selector=l}return f.prototype["@@iterator"]=function(){return this},f.prototype[y]=function(){return this},f.prototype.next=function(){var c=this._index;if(c>=0&&c<this._keys.length){var u=this._selector(this._keys[c],this._values[c]);return c+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:u,done:!1}}return{value:void 0,done:!0}},f.prototype.throw=function(c){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),c},f.prototype.return=function(c){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:c,done:!0}},f}();return function(){function f(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(f.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),f.prototype.has=function(c){return this._find(c,!1)>=0},f.prototype.get=function(c){var u=this._find(c,!1);return u>=0?this._values[u]:void 0},f.prototype.set=function(c,u){var l=this._find(c,!0);return this._values[l]=u,this},f.prototype.delete=function(c){var u=this._find(c,!1);if(u>=0){for(var l=this._keys.length,h=u+1;h<l;h++)this._keys[h-1]=this._keys[h],this._values[h-1]=this._values[h];return this._keys.length--,this._values.length--,c===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},f.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},f.prototype.keys=function(){return new n(this._keys,this._values,i)},f.prototype.values=function(){return new n(this._keys,this._values,s)},f.prototype.entries=function(){return new n(this._keys,this._values,m)},f.prototype["@@iterator"]=function(){return this.entries()},f.prototype[y]=function(){return this.entries()},f.prototype._find=function(c,u){return this._cacheKey!==c&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=c)),this._cacheIndex<0&&u&&(this._cacheIndex=this._keys.length,this._keys.push(c),this._values.push(void 0)),this._cacheIndex},f}();function i(f,c){return f}function s(f,c){return c}function m(f,c){return[f,c]}}function Dt(){return function(){function t(){this._map=new F}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._map.has(e)},t.prototype.add=function(e){return this._map.set(e,e),this},t.prototype.delete=function(e){return this._map.delete(e)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[y]=function(){return this.keys()},t}()}function Gt(){var t=16,e=j.create(),n=i();return function(){function u(){this._key=i()}return u.prototype.has=function(l){var h=s(l,!1);return h!==void 0?j.has(h,this._key):!1},u.prototype.get=function(l){var h=s(l,!1);return h!==void 0?j.get(h,this._key):void 0},u.prototype.set=function(l,h){var b=s(l,!0);return b[this._key]=h,this},u.prototype.delete=function(l){var h=s(l,!1);return h!==void 0?delete h[this._key]:!1},u.prototype.clear=function(){this._key=i()},u}();function i(){var u;do u="@@WeakMap@@"+c();while(j.has(e,u));return e[u]=!0,u}function s(u,l){if(!o.call(u,n)){if(!l)return;Object.defineProperty(u,n,{value:j.create()})}return u[n]}function m(u,l){for(var h=0;h<l;++h)u[h]=Math.random()*255|0;return u}function f(u){return typeof Uint8Array=="function"?typeof crypto<"u"?crypto.getRandomValues(new Uint8Array(u)):typeof msCrypto<"u"?msCrypto.getRandomValues(new Uint8Array(u)):m(new Uint8Array(u),u):m(new Array(u),u)}function c(){var u=f(t);u[6]=u[6]&79|64,u[8]=u[8]&191|128;for(var l="",h=0;h<t;++h){var b=u[h];(h===4||h===6||h===8)&&(l+="-"),b<16&&(l+="0"),l+=b.toString(16).toLowerCase()}return l}}function B(t){return t.__=void 0,delete t.__,t}})})(ut||(ut={}));var Kt=Object.defineProperty,te=(a,r,o,d)=>{for(var p=void 0,y=a.length-1,_;y>=0;y--)(_=a[y])&&(p=_(r,o,p)||p);return p&&Kt(r,o,p),p};class ee extends Bt{constructor(){super(),this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new Jt(this)}connectedCallback(){var r;super.connectedCallback(),this.setAttribute("gds-element",((r=this.gdsElementName)==null?void 0:r.toString())||"")}}te([$t()],ee.prototype,"_isUsingTransitionalStyles");export{ee as G,U as V,se as a,ae as g,oe as h,Nt as n,$t as r,Qt as s,ft as t};
