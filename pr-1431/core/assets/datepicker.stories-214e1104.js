import{w as _e,x as W,i as At,s as ea,T as Lt}from"./lit-element-2a5e401f.js";import{n as m,g as je,G as ta,r as me,h as N}from"./gds-element-24e794df.js";import{e as aa,a as Rt}from"./query-b9d3c2af.js";import{r as ve}from"./query-async-1ff18261.js";import{n as se}from"./when-cf7256a5.js";import{i as sa,p as na,v as P,r as K,h as ye,m as ra}from"./directive-helpers-5872e68c.js";import{f as ia}from"./menu-heading-0ec93f3a.js";import{e as Vt,i as oa,t as la}from"./directive-12249aa5.js";import{e as ke}from"./class-map-43969d56.js";import{m as c}from"./lit-localize-87611c26.js";import{G as da}from"./form-control-cdf6d873.js";import{T as Bt,r as ha}from"./transitional-styles-7da980bd.js";import{w as be}from"./watch-c4961afe.js";import{d as Qe,a as ua}from"./attribute-converters-ae269b4b.js";import"./popover-f7a4aef2.js";import"./dropdown-ea0494b7.js";import"./button-1dd52c1b.js";import"./chevron-right-28bbbdaf.js";import"./_commonjsHelpers-725317a4.js";import"./cross-small-3fee855f.js";import"./icon-881ed735.js";import"./constrain-slots-08d8606c.js";import"./tokens.style-f227efef.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ca;function pa(e){return(t,a)=>aa(t,a,{get(){return(this.renderRoot??ca??(ca=document.createDocumentFragment())).querySelectorAll(e)}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*fa(e,t){const a=typeof t=="function";if(e!==void 0){let s=-1;for(const n of e)s>-1&&(yield a?t(s):t),s++,yield n}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ga{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class ma{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=e=>!sa(e)&&typeof e.then=="function",it=1073741823;let va=class extends ia{constructor(){super(...arguments),this._$Cwt=it,this._$Cbt=[],this._$CK=new ga(this),this._$CX=new ma}render(...t){return t.find(a=>!rt(a))??_e}update(t,a){const s=this._$Cbt;let n=s.length;this._$Cbt=a;const r=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<a.length&&!(l>this._$Cwt);l++){const i=a[l];if(!rt(i))return this._$Cwt=l,i;l<n&&i===s[l]||(this._$Cwt=it,n=0,Promise.resolve(i).then(async h=>{for(;o.get();)await o.get();const w=r.deref();if(w!==void 0){const d=w._$Cbt.indexOf(i);d>-1&&d<w._$Cwt&&(w._$Cwt=d,w.setValue(h))}}))}return _e}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ba=Vt(va);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ya(e,t){if(e!==void 0){let a=0;for(const s of e)yield t(s,a++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=(e,t,a)=>{const s=new Map;for(let n=t;n<=a;n++)s.set(e[n],n);return s},wa=Vt(class extends oa{constructor(e){if(super(e),e.type!==la.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,a){let s;a===void 0?a=t:t!==void 0&&(s=t);const n=[],r=[];let o=0;for(const l of e)n[o]=s?s(l,o):o,r[o]=a(l,o),o++;return{values:r,keys:n}}render(e,t,a){return this.dt(e,t,a).values}update(e,[t,a,s]){const n=na(e),{values:r,keys:o}=this.dt(t,a,s);if(!Array.isArray(n))return this.ut=o,r;const l=this.ut??(this.ut=[]),i=[];let h,w,d=0,p=n.length-1,u=0,y=r.length-1;for(;d<=p&&u<=y;)if(n[d]===null)d++;else if(n[p]===null)p--;else if(l[d]===o[u])i[u]=P(n[d],r[u]),d++,u++;else if(l[p]===o[y])i[y]=P(n[p],r[y]),p--,y--;else if(l[d]===o[y])i[y]=P(n[d],r[y]),K(e,i[y+1],n[d]),d++,y--;else if(l[p]===o[u])i[u]=P(n[p],r[u]),K(e,n[d],n[p]),p--,u++;else if(h===void 0&&(h=ot(o,u,y),w=ot(l,d,p)),h.has(l[d]))if(h.has(l[p])){const x=w.get(o[u]),I=x!==void 0?n[x]:null;if(I===null){const ne=K(e,n[d]);P(ne,r[u]),i[u]=ne}else i[u]=P(I,r[u]),K(e,n[d],I),n[x]=null;u++}else ye(n[p]),p--;else ye(n[d]),d++;for(;u<=y;){const x=K(e,i[y+1]);P(x,r[u]),i[u++]=x}for(;d<=p;){const x=n[d++];x!==null&&ye(x)}return this.ut=o,ra(e,i),_e}});function De(e){"@babel/helpers - typeof";return De=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},De(e)}function L(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function k(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function _(e){k(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||De(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function z(e,t){k(2,arguments);var a=_(e),s=L(t);return isNaN(s)?new Date(NaN):(s&&a.setDate(a.getDate()+s),a)}function Ht(e,t){k(2,arguments);var a=_(e),s=L(t);if(isNaN(s))return new Date(NaN);if(!s)return a;var n=a.getDate(),r=new Date(a.getTime());r.setMonth(a.getMonth()+s+1,0);var o=r.getDate();return n>=o?r:(a.setFullYear(r.getFullYear(),r.getMonth(),n),a)}var _a={};function et(){return _a}function G(e,t){var a,s,n,r,o,l,i,h;k(1,arguments);var w=et(),d=L((a=(s=(n=(r=t==null?void 0:t.weekStartsOn)!==null&&r!==void 0?r:t==null||(o=t.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:w.weekStartsOn)!==null&&s!==void 0?s:(i=w.locale)===null||i===void 0||(h=i.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&a!==void 0?a:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var p=_(e),u=p.getDay(),y=(u<d?7:0)+u-d;return p.setDate(p.getDate()-y),p.setHours(0,0,0,0),p}function lt(e){k(1,arguments);var t=_(e);return t.setHours(0,0,0,0),t}function ka(e,t){k(2,arguments);var a=L(t),s=a*7;return z(e,s)}function V(e,t){k(2,arguments);var a=lt(e),s=lt(t);return a.getTime()===s.getTime()}function Da(e){k(1,arguments);var t=_(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function $a(e,t){var a;k(1,arguments);var s=e||{},n=_(s.start),r=_(s.end),o=r.getTime();if(!(n.getTime()<=o))throw new RangeError("Invalid interval");var l=[],i=n;i.setHours(0,0,0,0);var h=Number((a=t==null?void 0:t.step)!==null&&a!==void 0?a:1);if(h<1||isNaN(h))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=o;)l.push(_(i)),i.setDate(i.getDate()+h),i.setHours(0,0,0,0);return l}function Ca(e,t){k(1,arguments);var a=e||{},s=_(a.start),n=_(a.end),r=n.getTime();if(!(s.getTime()<=r))throw new RangeError("Invalid interval");var o=G(s,t),l=G(n,t);o.setHours(15),l.setHours(15),r=l.getTime();for(var i=[],h=o;h.getTime()<=r;)h.setHours(0),i.push(_(h)),h=ka(h,1),h.setHours(15);return i}function Sa(e){k(1,arguments);var t=_(e);return t.setDate(1),t.setHours(0,0,0,0),t}function Ma(e,t){var a,s,n,r,o,l,i,h;k(1,arguments);var w=_(e),d=w.getFullYear(),p=et(),u=L((a=(s=(n=(r=t==null?void 0:t.firstWeekContainsDate)!==null&&r!==void 0?r:t==null||(o=t.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:p.firstWeekContainsDate)!==null&&s!==void 0?s:(i=p.locale)===null||i===void 0||(h=i.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setFullYear(d+1,0,u),y.setHours(0,0,0,0);var x=G(y,t),I=new Date(0);I.setFullYear(d,0,u),I.setHours(0,0,0,0);var ne=G(I,t);return w.getTime()>=x.getTime()?d+1:w.getTime()>=ne.getTime()?d:d-1}function Wa(e,t){var a,s,n,r,o,l,i,h;k(1,arguments);var w=et(),d=L((a=(s=(n=(r=t==null?void 0:t.firstWeekContainsDate)!==null&&r!==void 0?r:t==null||(o=t.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:w.firstWeekContainsDate)!==null&&s!==void 0?s:(i=w.locale)===null||i===void 0||(h=i.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&a!==void 0?a:1),p=Ma(e,t),u=new Date(0);u.setFullYear(p,0,d),u.setHours(0,0,0,0);var y=G(u,t);return y}var Fa=6048e5;function xa(e,t){k(1,arguments);var a=_(e),s=G(a,t).getTime()-Wa(a,t).getTime();return Math.round(s/Fa)+1}function Ya(e){k(1,arguments);var t=_(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(0,0,0,0),t}function Oa(e,t){k(2,arguments);var a=_(e),s=_(t);return a.getFullYear()===s.getFullYear()&&a.getMonth()===s.getMonth()}function Ta(e,t){k(2,arguments);var a=L(t);return Ht(e,-a)}function Ea(e,t){const a=Sa(e),s=Da(e),n=Ca({start:a,end:s},{weekStartsOn:1});return W`${t(n.map(r=>({days:$a({start:r,end:z(r,6)})})))}`}const Na=At`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #999;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`;var Ia=Object.defineProperty,Pa=Object.getOwnPropertyDescriptor,F=(e,t,a,s)=>{for(var n=s>1?void 0:s?Pa(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&Ia(t,a,n),n},Aa=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},dt=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},$e=(e,t,a)=>(Aa(e,t,"access private method"),a),pe,tt,Ce,zt;let $=class extends ta{constructor(){super(...arguments),dt(this,pe),dt(this,Ce),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=Ya(new Date(this.focusedYear,e,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),a.setMonth(e),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),Bt.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",$e(this,Ce,zt))}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date;return W`<table>
      <thead>
        <tr>
          ${se(this.showWeekNumbers,()=>W`<th></th>`)}
          <th>${c("Mon")}</th>
          <th>${c("Tue")}</th>
          <th>${c("Wed")}</th>
          <th>${c("Thu")}</th>
          <th>${c("Fri")}</th>
          <th>${c("Sat")}</th>
          <th>${c("Sun")}</th>
        </tr>
      </thead>
      <tbody>
        ${Ea(this.focusedDate,t=>W`
            ${t.map(a=>W`
                <tr>
                  ${se(this.showWeekNumbers,()=>W`<td class="week-number">
                        ${xa(a.days[0])}
                      </td>`)}
                  ${a.days.map(s=>{const n={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(i=>V(i,s))),...this.customizedDates&&this.customizedDates.find(i=>V(i.date,s))},r=!Oa(this.focusedDate,s)||s<this.min||s>this.max,o=s.getDay()===0||s.getDay()===6,l=n.disabled||r||this.disabledWeekends&&o;return W`
                      <td
                        class="${ke({"custom-date":!!n,disabled:!!l,today:V(e,s)})}"
                        ?disabled=${l}
                        tabindex="${V(this.focusedDate,s)?0:-1}"
                        aria-selected="${this.value&&V(this.value,s)}"
                        aria-label="${s.toDateString()}"
                        @click=${()=>l?null:$e(this,pe,tt).call(this,s)}
                        id="dateCell-${s.getDate()}"
                      >
                        <span
                          style="color: ${n?n==null?void 0:n.color:""}"
                          >${s.getDate()}</span
                        >

                        ${se(n.indicator,()=>W`<span
                              class="indicator_${n==null?void 0:n.indicator}"
                              style="background-color: ${n==null?void 0:n.color}"
                            ></span>`)}
                      </td>
                    `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};pe=new WeakSet;tt=function(e){this.value=e,this.dispatchEvent(new CustomEvent("change",{detail:e,bubbles:!1,composed:!1}))};Ce=new WeakSet;zt=function(e){var s;let t=!1,a=new Date(this.focusedDate);e.key==="ArrowLeft"?(a=z(this.focusedDate,-1),t=!0):e.key==="ArrowRight"?(a=z(this.focusedDate,1),t=!0):e.key==="ArrowUp"?(a=z(this.focusedDate,-7),t=!0):e.key==="ArrowDown"?(a=z(this.focusedDate,7),t=!0):e.key==="Enter"||e.key===" "?((s=this._elFocusedCell)!=null&&s.hasAttribute("disabled")||$e(this,pe,tt).call(this,this.focusedDate),t=!0):e.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),t=!0):e.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):e.key==="PageUp"?(a=Ta(this.focusedDate,1),t=!0):e.key==="PageDown"&&(a=Ht(this.focusedDate,1),t=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&(this.focusedDate=a),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus(),this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:this.focusedDate,bubbles:!1,composed:!1}))}))};$.styles=[Na];$.shadowRootOptions={mode:"open",delegatesFocus:!0};F([m()],$.prototype,"value",2);F([m({type:Date})],$.prototype,"min",2);F([m({type:Date})],$.prototype,"max",2);F([m()],$.prototype,"focusedDate",2);F([m({type:Boolean,attribute:"disabled-weekends"})],$.prototype,"disabledWeekends",2);F([m({type:Array,attribute:"disabled-dates"})],$.prototype,"disabledDates",2);F([m({type:Number})],$.prototype,"focusedMonth",1);F([m({type:Number})],$.prototype,"focusedYear",1);F([m({type:Boolean})],$.prototype,"showWeekNumbers",2);F([m({attribute:!1})],$.prototype,"customizedDates",2);F([Rt('td[tabindex="0"]')],$.prototype,"_elFocusedCell",2);F([be("value")],$.prototype,"_valueChanged",1);$=F([je("gds-calendar")],$);var La=Object.defineProperty,Ra=Object.getOwnPropertyDescriptor,R=(e,t,a,s)=>{for(var n=s>1?void 0:s?Ra(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&La(t,a,n),n},at=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},D=(e,t,a)=>(at(e,t,"read from private field"),a?a.call(e):t.get(e)),M=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},Gt=(e,t,a,s)=>(at(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),S=(e,t,a)=>(at(e,t,"access private method"),a),T,ie,oe,le,de,Se,Me,We,Fe,Ut,B,Q,he,xe,H,ee,te,ue;let Y=class extends ea{constructor(){super(...arguments),M(this,Fe),M(this,B),M(this,he),M(this,H),M(this,te),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=S(this,he,xe).call(this,this.value,this.length),M(this,T,""),M(this,ie,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.min:new Date().getFullYear()-1),this.value=S(this,H,ee).call(this,e+1),S(this,B,Q).call(this)}),M(this,oe,()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=this.length===2?this.max:new Date().getFullYear()+1),this.value=S(this,H,ee).call(this,e-1),S(this,B,Q).call(this)}),M(this,le,e=>{e.stopPropagation(),e.preventDefault(),this.focus()}),M(this,de,()=>{S(this,te,ue).call(this)}),M(this,Se,()=>{D(this,T)!==""&&(S(this,te,ue).call(this),this.value=S(this,H,ee).call(this,parseInt(this.value.toString())),S(this,B,Q).call(this))}),M(this,Me,e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?D(this,oe).call(this):D(this,ie).call(this)}),M(this,We,e=>{let t=!1;if(e.key==="ArrowUp")D(this,ie).call(this),t=!0;else if(e.key==="ArrowDown")D(this,oe).call(this),t=!0;else{const a=parseInt(e.key);isNaN(a)||(D(this,T).length<this.length&&(Gt(this,T,D(this,T)+a.toString()),this.value=parseInt(D(this,T))),D(this,T).length===this.length&&(this.value=S(this,H,ee).call(this,this.value),S(this,te,ue).call(this),S(this,Fe,Ut).call(this),S(this,B,Q).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",D(this,Me)),this.addEventListener("keydown",D(this,We)),this.addEventListener("blur",D(this,Se)),this.addEventListener("focus",D(this,de)),this.addEventListener("click",D(this,le)),this.addEventListener("mousedown",D(this,le))}focus(e){super.focus(e),D(this,de).call(this)}render(){return N`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=S(this,he,xe).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};T=new WeakMap;ie=new WeakMap;oe=new WeakMap;le=new WeakMap;de=new WeakMap;Se=new WeakMap;Me=new WeakMap;We=new WeakMap;Fe=new WeakSet;Ut=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof Y){e.focus();break}e=e.nextElementSibling}};B=new WeakSet;Q=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))};he=new WeakSet;xe=function(e,t){return String(e).padStart(t,"0")};H=new WeakSet;ee=function(e){return Math.max(this.min,Math.min(this.max,e))};te=new WeakSet;ue=function(){Gt(this,T,"")};Y.formAssociated=!0;R([m({type:Number})],Y.prototype,"value",2);R([m({type:Number})],Y.prototype,"length",2);R([m({type:Number,attribute:"aria-valuemin"})],Y.prototype,"min",2);R([m({type:Number,attribute:"aria-valuemax"})],Y.prototype,"max",2);R([me()],Y.prototype,"displayValue",2);R([be("value")],Y.prototype,"_refreshDisplayValue",1);Y=R([je("gds-date-part-spinner")],Y);const Va=At`
  @layer base, reset, transitional-styles;
  @layer base {
    label {
      display: block;
    }
  }
`;var Ba=Object.defineProperty,Ha=Object.getOwnPropertyDescriptor,b=(e,t,a,s)=>{for(var n=s>1?void 0:s?Ha(t,a):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,a,n):o(n))||n);return s&&n&&Ba(t,a,n),n},st=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},v=(e,t,a)=>(st(e,t,"read from private field"),a?a.call(e):t.get(e)),f=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},we=(e,t,a,s)=>(st(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a),C=(e,t,a)=>(st(e,t,"access private method"),a),ae,Ye,Kt,fe,Oe,Te,qt,Ee,Jt,Ne,Xt,E,A,Ie,Zt,Pe,Ae,Le,Re,Ve,Be,He,ze,Ge,Ue,ge,Ke,qe,ce,Je,Xe,O,Ze,jt,nt,Qt;let g=class extends da{constructor(){super(...arguments),f(this,Ye),f(this,fe),f(this,Te),f(this,Ee),f(this,Ne),f(this,E),f(this,Ie),f(this,ce),f(this,Ze),f(this,nt),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=new Date().getMonth(),this._focusedYear=new Date().getFullYear(),this._dateFormatLayout=C(this,ce,Je).call(this,"y-m-d"),f(this,ae,void 0),f(this,Pe,e=>{this._elTrigger.then(t=>{var s,n;((s=e.relatedTarget)==null?void 0:s.parentElement)!==e.target&&((n=document.getSelection())==null||n.removeAllRanges())})}),f(this,Ae,e=>{this._elTrigger.then(t=>{var s,n;(s=document.getSelection())==null||s.removeAllRanges();const a=new Range;a.setStart(t.firstChild,0),a.setEnd(t.lastChild,4),(n=document.getSelection())==null||n.addRange(a)})}),f(this,Le,e=>{this._elField.then(t=>{var a;e.currentTarget===t&&(e.preventDefault(),(a=e.clipboardData)==null||a.setData("text/plain",this.displayValue))})}),f(this,Re,e=>{this._elField.then(t=>{var n;if(e.currentTarget!==t)return;e.preventDefault();const a=(n=e.clipboardData)==null?void 0:n.getData("text/plain");if(!a)return;const s=new Date(a);s.toString()!=="Invalid Date"&&(this.value=s,C(this,E,A).call(this))})}),f(this,Ve,e=>{var t;(t=this._elSpinners[0])==null||t.focus()}),f(this,Be,e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,C(this,E,A).call(this)}),f(this,He,e=>{var t;e.stopPropagation(),this._focusedMonth=(t=e.target)==null?void 0:t.value}),f(this,ze,e=>{var t;e.stopPropagation(),this._focusedYear=(t=e.target)==null?void 0:t.value}),f(this,Ge,e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)}),f(this,Ue,e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)}),f(this,ge,async()=>{this._focusedMonth=(await this._elCalendar).focusedMonth,this._focusedYear=(await this._elCalendar).focusedYear,this.value=(await this._elCalendar).focusedDate,this.requestUpdate(),C(this,Ie,Zt).call(this)}),f(this,Ke,async e=>{if(e.target===e.currentTarget){if(this.open=e.detail.open,e.detail.reason==="close"){const t=(await this._elCalendar).value;!V(t||new Date(0),v(this,ae)||new Date(0))&&(this.value=t,C(this,E,A).call(this)),this.value&&(this._focusedMonth=this.value.getMonth(),this._focusedYear=this.value.getFullYear())}e.detail.reason==="cancel"&&(this.value=v(this,ae))}}),f(this,qe,e=>{const t=Array.from(this._elSpinners).findIndex(a=>a===e.target);if(e.key==="ArrowRight"){const a=this._elSpinners[t+1];a&&a.focus()}if(e.key==="ArrowLeft"){const a=this._elSpinners[t-1];a&&a.focus()}}),f(this,Xe,(e,t)=>{v(this,O)[t]=e;const a=new Date;a.setFullYear(parseInt(v(this,O).year)),a.setMonth(parseInt(v(this,O).month)-1),a.setDate(parseInt(v(this,O).day)),a.toString()!=="Invalid Date"&&(this.value=a,C(this,E,A).call(this))}),f(this,O,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map(e=>e.token).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=C(this,ce,Je).call(this,e)}async getFocusedDate(){if(this.open)return this._elCalendar.then(e=>e.focusedDate)}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}async test_getDateCell(e){return this._elCalendar.then(t=>t.getDateCell(e))}connectedCallback(){super.connectedCallback(),Bt.instance.apply(this,"gds-datepicker")}render(){return N`${se(this.label&&!this.hideLabel,()=>N`<label for="spinner-0" id="label">${this.label}</label>`)}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${ke({field:!0,small:this.size==="small"})}
        id="field"
        @click=${v(this,Ve)}
        @copy=${v(this,Le)}
        @paste=${v(this,Re)}
      >
        <div
          class=${ke({input:!0,"is-placeholder":!this.value})}
          @focusout=${v(this,Pe)}
        >
          ${fa(ya(this._dateFormatLayout.layout,(e,t)=>N`<gds-date-part-spinner
                  id="spinner-${t}"
                  .length=${e.token==="y"?4:2}
                  .value=${v(this,O)[e.name]}
                  aria-valuemin=${C(this,Ee,Jt).call(this,e.name)}
                  aria-valuemax=${C(this,Ne,Xt).call(this,e.name)}
                  aria-label=${C(this,Te,qt).call(this,e.name)}
                  aria-describedby="label"
                  @keydown=${v(this,qe)}
                  @change=${a=>v(this,Xe).call(this,a.detail.value,e.name)}
                  @focus=${v(this,Ae)}
                  @touchend=${a=>{this.open=!0,a.preventDefault()}}
                ></gds-date-part-spinner>`),N`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${c("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info"><slot name="message"></slot></div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${v(this,Ke)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${async e=>{var a;((a=e.target)==null?void 0:a.id)==="calendar-popover"&&this._elCalendar.then(s=>s.focus())}}
      >
        <div class="header">
          <button
            @click=${v(this,Ue)}
            aria-label=${c("Previous month")}
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${v(this,He)}
            .maxHeight=${300}
            label="${c("Month")}"
            style="width:120px"
            size="small"
            hide-label
          >
            <gds-option value="0">${c("January")}</gds-option>
            <gds-option value="1">${c("February")}</gds-option>
            <gds-option value="2">${c("March")}</gds-option>
            <gds-option value="3">${c("April")}</gds-option>
            <gds-option value="4">${c("May")}</gds-option>
            <gds-option value="5">${c("June")}</gds-option>
            <gds-option value="6">${c("July")}</gds-option>
            <gds-option value="7">${c("August")}</gds-option>
            <gds-option value="8">${c("September")}</gds-option>
            <gds-option value="9">${c("October")}</gds-option>
            <gds-option value="10">${c("November")}</gds-option>
            <gds-option value="11">${c("December")}</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this._focusedYear.toString()}
            @change=${v(this,ze)}
            .maxHeight=${300}
            label="${c("Year")}"
            size="small"
            hide-label
          >
            ${wa(v(this,Ze,jt),e=>e,e=>N`<gds-option value=${e}>${e}</gds-option>`)}
          </gds-dropdown>
          <button
            @click=${v(this,Ge)}
            aria-label=${c("Next month")}
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${v(this,Be)}
          @gds-date-focused=${v(this,ge)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${()=>{this.value=void 0,C(this,E,A).call(this)}}
          >
            ${c("Clear")}
          </gds-button>
          ${ba(C(this,Ye,Kt).call(this),Lt)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${()=>{this.value=new Date,C(this,E,A).call(this)}}
          >
            ${c("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_handleValueChange(){if(!this.value){we(this,O,{year:"yyyy",month:"mm",day:"dd"});return}const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),a=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");we(this,O,{year:t,month:a,day:s})}_handleOpenChange(){this.open&&(we(this,ae,this.value),this._elCalendar.then(e=>e.focus()))}};ae=new WeakMap;Ye=new WeakSet;Kt=async function(){const e=await this.getFocusedDate();let t="",a;return e&&e>this.max?(t=c("Last available date"),a=()=>C(this,fe,Oe).call(this,this.max)):e&&e<this.min&&(t=c("First available date"),a=()=>C(this,fe,Oe).call(this,this.min)),N`${se(t.length>0,()=>N`<gds-button rank="tertiary" size="small" @click=${a}>
          ${t}
        </gds-button>`,()=>Lt)}`};fe=new WeakSet;Oe=function(e){const t=new Date(e);this._elCalendar.then(a=>a.focusedDate=t).then(v(this,ge))};Te=new WeakSet;qt=function(e){return{year:c("Year"),month:c("Month"),day:c("Day")}[e]};Ee=new WeakSet;Jt=function(e){return{year:1900,month:1,day:1}[e]};Ne=new WeakSet;Xt=function(e){return{year:9999,month:12,day:31}[e]};E=new WeakSet;A=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))};Ie=new WeakSet;Zt=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))};Pe=new WeakMap;Ae=new WeakMap;Le=new WeakMap;Re=new WeakMap;Ve=new WeakMap;Be=new WeakMap;He=new WeakMap;ze=new WeakMap;Ge=new WeakMap;Ue=new WeakMap;ge=new WeakMap;Ke=new WeakMap;qe=new WeakMap;ce=new WeakSet;Je=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],a=e.split(t),s=a.findIndex(i=>i==="y"),n=a.findIndex(i=>i==="m"),r=a.findIndex(i=>i==="d");if(s===-1||n===-1||r===-1)throw new Error("Invalid date format for <gds-datepicker>");const l=[s,n,r].sort((i,h)=>i-h).map(i=>a[i]).map(i=>({token:i,name:i==="y"?"year":i==="m"?"month":"day"}));return{delimiter:t,layout:l}};Xe=new WeakMap;O=new WeakMap;Ze=new WeakSet;jt=function(){var n;const e=this.min.getFullYear(),t=this.max.getFullYear(),a=v(this,nt,Qt),s=(n=this.value)==null?void 0:n.getFullYear();return{*[Symbol.iterator](){a&&(yield s);for(let r=e;r<=t;r++)yield r}}};nt=new WeakSet;Qt=function(){return this.value?this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear():!1};g.styles=[Va];g.shadowRootOptions={mode:"open",delegatesFocus:!0};b([m({converter:Qe})],g.prototype,"value",2);b([m({converter:Qe})],g.prototype,"min",2);b([m({converter:Qe})],g.prototype,"max",2);b([m({type:Boolean})],g.prototype,"open",2);b([m()],g.prototype,"label",2);b([m({type:Boolean,attribute:"show-week-numbers"})],g.prototype,"showWeekNumbers",2);b([m()],g.prototype,"size",2);b([m({type:Boolean,attribute:"hide-label"})],g.prototype,"hideLabel",2);b([m()],g.prototype,"dateformat",1);b([m({type:Boolean,attribute:"disabled-weekends"})],g.prototype,"disabledWeekends",2);b([m({converter:ua,attribute:"disabled-dates"})],g.prototype,"disabledDates",2);b([ve("#calendar-button")],g.prototype,"test_calendarButton",2);b([me()],g.prototype,"_focusedMonth",2);b([me()],g.prototype,"_focusedYear",2);b([me()],g.prototype,"_dateFormatLayout",2);b([ve("#calendar")],g.prototype,"_elCalendar",2);b([ve("#calendar-button")],g.prototype,"_elTrigger",2);b([ve("#field")],g.prototype,"_elField",2);b([pa("[role=spinbutton]")],g.prototype,"_elSpinners",2);b([Rt(".input")],g.prototype,"_elInput",2);b([be("value")],g.prototype,"_handleValueChange",1);b([be("open")],g.prototype,"_handleOpenChange",1);g=b([je("gds-datepicker")],g);ha();const fs={title:"Components/Datepicker",component:"gds-datepicker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/datepicker)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)

Date pickers simplify the task of selecting a date in a visual representation of a calendar.
The date picker in Green Core mimics the behaviour of the native date input element as it is
implemented in Chromium browsers.

The input field shows three parts of the date: the day, the month and the year. The user can
navigate between these parts using the arrow keys. The user can also navigate between the parts
by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
by typing a number.

Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.`}}},tags:["autodocs"]},U={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Pick a date"}},re={...U},q={...U,render:e=>W`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  `},J={...U,render:e=>W`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  `},X={...U,name:"Min and max dates",render:e=>W`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `},Z={...U,render:e=>W`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `},j={...U,render:e=>W`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  `};var ht,ut,ct;re.parameters={...re.parameters,docs:{...(ht=re.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(ct=(ut=re.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var pt,ft,gt,mt,vt;q.parameters={...q.parameters,docs:{...(pt=q.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  \`
}`,...(gt=(ft=q.parameters)==null?void 0:ft.docs)==null?void 0:gt.source},description:{story:"The date picker takes a `label` attribute for setting the label text, and has two slots for adding\nadditional information.\n\nThe `sub-label` slot sits between the label and the input, and the `message` slot sits below the\ninput. The `message` slot is used to display instructions and/or validation errors.\n\nWhen the value is changed by a user, a `change` event is fired.",...(vt=(mt=q.parameters)==null?void 0:mt.docs)==null?void 0:vt.description}}};var bt,yt,wt,_t,kt;J.parameters={...J.parameters,docs:{...(bt=J.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  \`
}`,...(wt=(yt=J.parameters)==null?void 0:yt.docs)==null?void 0:wt.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(kt=(_t=J.parameters)==null?void 0:_t.docs)==null?void 0:kt.description}}};var Dt,$t,Ct,St,Mt;X.parameters={...X.parameters,docs:{...(Dt=X.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max dates',
  render: args => html\`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  \`
}`,...(Ct=($t=X.parameters)==null?void 0:$t.docs)==null?void 0:Ct.source},description:{story:"Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.",...(Mt=(St=X.parameters)==null?void 0:St.docs)==null?void 0:Mt.description}}};var Wt,Ft,xt,Yt,Ot;Z.parameters={...Z.parameters,docs:{...(Wt=Z.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  \`
}`,...(xt=(Ft=Z.parameters)==null?void 0:Ft.docs)==null?void 0:xt.source},description:{story:"Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.\n\nAdditionally, `disabled-dates` can be used to disable specific dates.\n\n- When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.\n- When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.",...(Ot=(Yt=Z.parameters)==null?void 0:Yt.docs)==null?void 0:Ot.description}}};var Tt,Et,Nt,It,Pt;j.parameters={...j.parameters,docs:{...(Tt=j.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  \`
}`,...(Nt=(Et=j.parameters)==null?void 0:Et.docs)==null?void 0:Nt.source},description:{story:"The date picker has two sizes: `small` and `medium`. The default size is `medium`.\n\nOptionally, the label can be hidden by using the `hide-label` attribute.",...(Pt=(It=j.parameters)==null?void 0:It.docs)==null?void 0:Pt.description}}};const gs=["Basic","Usage","WeekNumbers","MinMaxDates","Disabled","InputFieldSize"];export{re as Basic,Z as Disabled,j as InputFieldSize,X as MinMaxDates,q as Usage,J as WeekNumbers,gs as __namedExportsOrder,fs as default};
