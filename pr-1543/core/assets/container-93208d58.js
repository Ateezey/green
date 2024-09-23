import{n as c,g as h,G as u,h as g}from"./gds-element-86064462.js";import{s as l}from"./style-expression-property-0e3d4d40.js";import{t as d}from"./tokens.style-01187a75.js";import{i as y}from"./lit-element-1d72f0ce.js";const b=y`
  :host {
    box-sizing: border-box;
  }
`;var $=Object.defineProperty,T=Object.getOwnPropertyDescriptor,o=(t,e,p,i)=>{for(var a=i>1?void 0:i?T(e,p):e,m=t.length-1,s;m>=0;m--)(s=t[m])&&(a=(i?s(e,p,a):s(a))||a);return i&&a&&$(e,p,a),a};let r=class extends u{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return g`<slot></slot>`}};r.styles=[d,b];o([l({valueTemplate:t=>t})],r.prototype,"display",2);o([c()],r.prototype,"level",2);o([l({valueTemplate:t=>t})],r.prototype,"place-items",2);o([l({valueTemplate:t=>t})],r.prototype,"place-content",2);o([l({valueTemplate:function(t){const[e,p]=t.split("/"),i=s=>{const n=s.trim();return n.startsWith("#")||n.startsWith("rgb(")||n.startsWith("rgba(")||n.startsWith("hsl(")||n.startsWith("hsla(")},a=(s,n)=>`var(--gds-color-l${s}-content-${n})`;return((s,n)=>i(s)?n?`color-mix(in srgb, ${s} ${parseFloat(n)*100}%, transparent 0%)`:s:a(this.level,s))(e,p)}})],r.prototype,"color",2);o([l({valueTemplate:function(t){const[e,p]=t.split("/"),i=s=>{const n=s.trim();return n.startsWith("#")||n.startsWith("rgb(")||n.startsWith("rgba(")||n.startsWith("hsl(")||n.startsWith("hsla(")},a=(s,n)=>`var(--gds-color-l${s}-background-${n})`;return((s,n)=>i(s)?n?`color-mix(in srgb, ${s} ${parseFloat(n)*100}%, transparent 0%)`:s:a(this.level,s))(e,p)}})],r.prototype,"background",2);o([l({valueTemplate:function(t){const[e,p]=t.split("/"),i=s=>{const n=s.trim();return n.startsWith("#")||n.startsWith("rgb(")||n.startsWith("rgba(")||n.startsWith("hsl(")||n.startsWith("hsla(")},a=(s,n)=>`var(--gds-color-l${s}-border-${n})`;return`var(--gds-space-${e}) solid ${p?(s=>i(s)?s:a(this.level,s))(p):"currentColor"}`},styleTemplate:(t,e)=>{const p=e[0],i=e.length>1?e[1]:p,a=e.length>2?e[2]:p,m=e.length>3?e[3]:p;return`
        border-top: ${p}; 
        border-right: ${i}; 
        border-bottom: ${a}; 
        border-left: ${m};
      `}})],r.prototype,"border",2);o([l({valueTemplate:function(t){const[e]=t.split("/"),p=m=>{const s=m.trim();return s.startsWith("#")||s.startsWith("rgb(")||s.startsWith("rgba(")||s.startsWith("hsl(")||s.startsWith("hsla(")},i=(m,s)=>`var(--gds-color-l${m}-border-${s})`;return e?(m=>p(m)?m:i(this.level,m))(e):"currentColor"},styleTemplate:(t,e)=>{const p=e[0],i=e.length>1?e[1]:p,a=e.length>2?e[2]:p,m=e.length>3?e[3]:p;return`
        border-top-color: ${p}; 
        border-right-color: ${i}; 
        border-bottom-color: ${a}; 
        border-left-color: ${m};
      `}})],r.prototype,"border-color",2);o([l({styleTemplate:(t,e)=>{const p=e[0],i=e.length>1?e[1]:p,a=e.length>2?e[2]:p,m=e.length>3?e[3]:p;return`
        border-top-width: ${p}; 
        border-right-width: ${i}; 
        border-bottom-width: ${a}; 
        border-left-width: ${m};
        border-style: solid;
      `}})],r.prototype,"border-width",2);o([l({valueTemplate:t=>`var(--gds-space-${t})`})],r.prototype,"border-radius",2);o([l({valueTemplate:t=>t})],r.prototype,"opacity",2);o([l()],r.prototype,"padding",2);o([l()],r.prototype,"padding-inline",2);o([l()],r.prototype,"padding-block",2);o([l({valueTemplate:t=>t==="auto"?"auto":`var(--gds-space-${t})`,styleTemplate:(t,e)=>{const p=n=>n==="auto"?"auto":`${n}`,i=p(e[0]),a=e.length>1?p(e[1]):i,m=e.length>2?p(e[2]):i,s=e.length>3?p(e[3]):a;return`margin: ${i} ${a} ${m} ${s};`}})],r.prototype,"margin",2);o([l({valueTemplate:t=>t})],r.prototype,"position",2);o([l({valueTemplate:t=>t})],r.prototype,"inset",2);o([l({valueTemplate:t=>t})],r.prototype,"overflow",2);o([l({valueTemplate:t=>`${t}`})],r.prototype,"grid-column",2);o([l({valueTemplate:t=>`${t}`})],r.prototype,"grid-row",2);o([l({valueTemplate:t=>t})],r.prototype,"height",2);o([l({valueTemplate:t=>t})],r.prototype,"max-height",2);o([l({valueTemplate:t=>t})],r.prototype,"min-height",2);o([l()],r.prototype,"block-size",2);o([l({valueTemplate:t=>t})],r.prototype,"width",2);o([l({valueTemplate:t=>t})],r.prototype,"max-width",2);o([l({valueTemplate:t=>t})],r.prototype,"min-width",2);o([l()],r.prototype,"inline-size",2);o([l({valueTemplate:t=>t})],r.prototype,"cursor",2);o([l({valueTemplate:t=>t})],r.prototype,"pointer-events",2);o([l({valueTemplate:t=>t})],r.prototype,"user-select",2);o([l({valueTemplate:t=>t})],r.prototype,"z-index",2);o([l({valueTemplate:t=>t})],r.prototype,"transform",2);o([l({valueTemplate:t=>t})],r.prototype,"transform-style",2);o([l({valueTemplate:t=>t})],r.prototype,"transition",2);o([l({valueTemplate:t=>t})],r.prototype,"transition-behavior",2);o([l({valueTemplate:t=>t})],r.prototype,"animation",2);o([l({valueTemplate:t=>`${t}`,styleTemplate:(t,e)=>{const p=e[0],i=`font-size: var(--gds-text-size-${p});`,a=`line-height: var(--gds-text-line-height-${p});`;return i+a}})],r.prototype,"font-size",2);o([l({property:"font-weight",valueTemplate:t=>`var(--gds-text-weight-${t})`})],r.prototype,"font-weight",2);r=o([h("gds-container")],r);export{r as G};
