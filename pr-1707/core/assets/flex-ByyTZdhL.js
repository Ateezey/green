import{t as m}from"./tokens.style-RalixZsd.js";import{s as p}from"./style-expression-property-D0nhDdjH.js";import{g as c,h as f}from"./custom-element-scoping-CpYtbs9r.js";import{G as y}from"./container-C3DkMOGl.js";import{i as u}from"./lit-element-C_s9q329.js";const v=u`
  :host {
    box-sizing: border-box;
  }
`;var x=Object.defineProperty,d=Object.getOwnPropertyDescriptor,o=(e,r,s,a)=>{for(var l=a>1?void 0:a?d(r,s):r,n=e.length-1,i;n>=0;n--)(i=e[n])&&(l=(a?i(r,s,l):i(l))||l);return a&&l&&x(r,s,l),l};let t=class extends y{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return f`<slot></slot>`}};t.styles=[m,v];o([p({styleTemplate:(e,r)=>{const s=r[0],a=r[1]||s;return`gap: ${s} ${a};`},cacheOverrideKey:"flex"})],t.prototype,"gap",2);o([p({valueTemplate:e=>e})],t.prototype,"flex",2);o([p({valueTemplate:e=>e})],t.prototype,"align-self",2);o([p({valueTemplate:e=>e})],t.prototype,"align-items",2);o([p({valueTemplate:e=>e})],t.prototype,"align-content",2);o([p({valueTemplate:e=>e})],t.prototype,"justify-content",2);o([p({valueTemplate:e=>e})],t.prototype,"place-content",2);o([p({valueTemplate:e=>e})],t.prototype,"justify-items",2);o([p({valueTemplate:e=>e})],t.prototype,"justify-self",2);o([p({property:"flex-direction",valueTemplate:e=>e})],t.prototype,"flex-direction",2);t=o([c("gds-flex")],t);export{t as G};
