import{g as m,h as c}from"./gds-element-90c5f05b.js";import{t as f}from"./tokens.style-681e2422.js";import{s as a}from"./style-expression-property-5a4dd319.js";import{i as y}from"./lit-element-2a5e401f.js";import{G as d}from"./container-45eca99d.js";const u=y`
  :host {
    box-sizing: border-box;
  }
`;var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(e,t,p,s)=>{for(var r=s>1?void 0:s?v(t,p):t,n=e.length-1,i;n>=0;n--)(i=e[n])&&(r=(s?i(t,p,r):i(r))||r);return s&&r&&g(t,p,r),r};let o=class extends d{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return c`<slot></slot>`}};o.styles=[f,u];l([a({styleTemplate:(e,t)=>{const p=t[0],s=t[1]||p;return`gap: ${p} ${s};`}})],o.prototype,"gap",2);l([a({property:"align-items",valueTemplate:e=>e})],o.prototype,"align",2);l([a({property:"justify-content",valueTemplate:e=>e})],o.prototype,"justify",2);l([a({property:"flex-direction",valueTemplate:e=>e})],o.prototype,"direction",2);o=l([m("gds-flex")],o);
