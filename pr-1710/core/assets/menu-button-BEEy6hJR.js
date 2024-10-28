import{r as u}from"./lit-element-C_s9q329.js";import{n as l,g as _,G as m}from"./custom-element-scoping-CpYtbs9r.js";import{e as y}from"./class-map-Bz98xO8-.js";import{o as p}from"./if-defined-Ct9lF4W9.js";import{i as g,u as x}from"./static-_ukc2i0J.js";import{t as w}from"./tokens.style-RalixZsd.js";const k="@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 8px;--_padding-inline: var(--gds-space-m);--_padding-block: var(--gds-space-xs);--_color-bg: transparent;--_color-text: var(--gds-sys-color-primary-text);--_color-border: transparent;--_color-outline-alpha: 60%;--_color-outline: var(--gds-sys-color-border-stroke);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;display:inline-block;isolation:isolate;max-width:100%;height:100%}}@layer core{.button{align-items:center;background-color:var(--_color-bg);border-color:var(--_color-border);border-style:none;border-bottom-style:solid;border-bottom-width:2px;box-sizing:border-box;color:var(--_color-text);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height)}.button:focus-visible{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}.button:hover,.button.selected:hover,.button:active{--_color-bg: var(--gds-sys-color-base200);--_color-border: var(--gds-sys-color-base600)}.button.selected{--_color-bg: var(--gds-sys-color-base100);--_color-border: var(--gds-sys-color-base700)}.button slot:not([name]){display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.compact{display:flex;flex-direction:column;--_padding-inline: var(--gds-space-s);--_gap: 1px;font-size:.875rem;height:56px;justify-content:center}.compact>slot[name]{order:0}.compact>slot:not([name]){order:1}a{text-decoration:none}}@layer disabled{:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}";var $=Object.defineProperty,z=Object.getOwnPropertyDescriptor,v=o=>{throw TypeError(o)},s=(o,e,r,c)=>{for(var n=c>1?void 0:c?z(e,r):e,h=o.length-1,b;h>=0;h--)(b=o[h])&&(n=(c?b(e,r,n):b(n))||n);return c&&n&&$(e,r,n),n},B=(o,e,r)=>e.has(o)||v("Cannot "+r),i=(o,e,r)=>(B(o,e,"read from private field"),r?r.call(o):e.get(o)),C=(o,e,r)=>e.has(o)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,r),a,d,f;let t=class extends m{constructor(){super(),C(this,a),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const o={button:!0,selected:this.selected,compact:this.compact},e=i(this,a,d)?g`a`:g`button`;return x`
      <${e}
        class="${y(o)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${p(i(this,a,d)?this.href:void 0)}
        target=${p(i(this,a,d)?this.target:void 0)}
        rel=${p(i(this,a,d)?this.rel||i(this,a,f):void 0)}
        download=${p(i(this,a,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};a=new WeakSet;d=function(){return this.href.length>0};f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};t.styles=[w,u(k)];t.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([l()],t.prototype,"label",2);s([l()],t.prototype,"href",2);s([l()],t.prototype,"target",2);s([l()],t.prototype,"rel",2);s([l()],t.prototype,"download",2);s([l({type:Boolean,reflect:!0})],t.prototype,"compact",2);s([l({type:Boolean,reflect:!0})],t.prototype,"selected",2);t=s([_("gds-menu-button")],t);
