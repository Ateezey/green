import{k as m}from"./static-C_6dgFWo.js";import{g as c}from"./gds-element-CNG85WuL.js";import{s as p}from"./style-expression-property-BDznnSPM.js";import{t as u}from"./tokens.style-DuOE18tp.js";import{G as k}from"./flex-Boz_1hCx.js";import{i as v}from"./lit-element-BoQqPHl6.js";const d=v`
  :host {
    isolation: isolate;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  [part='content'] {
    z-index: 1;
    position: absolute;
    inset: 0;
  }
`;var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,s=(t,e,a,l)=>{for(var r=l>1?void 0:l?b(e,a):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(r=(l?n(e,a,r):n(r))||r);return l&&r&&g(e,a,r),r};let o=class extends k{constructor(){super(),this["mask-size"]="cover",this["mask-repeat"]="no-repeat",this["mask-position"]="center",this.position="relative",this.inset="0"}render(){return m`<div part="mask"></div>
      <div part="content"><slot></slot></div>`}};o.styles=[u,d];s([p({selector:'[part="mask"]',valueTemplate:t=>{const[e]=t.split("/");return`linear-gradient(to ${e}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`}})],o.prototype,"mask-image",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"mask-size",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"mask-repeat",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"mask-position",2);s([p({selector:'[part="mask"]',valueTemplate:function(t){const[e,a]=t.split("/");return a?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-background-${e}) ${parseFloat(a)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-background-${e})`}})],o.prototype,"background-color",2);s([p({valueTemplate:t=>t,selector:'[part="mask"]'})],o.prototype,"backdrop-filter",2);o=s([c("gds-mask")],o);
