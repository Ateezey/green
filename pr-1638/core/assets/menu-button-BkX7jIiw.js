import{r as u}from"./lit-element-BoQqPHl6.js";import{n as l,g as _,G as m}from"./gds-element-QykLKB9o.js";import{R as y}from"./class-map-BBGuaYF3.js";import{t as p}from"./if-defined-OiR-h1RO.js";import{e as g,k as x}from"./static-C_6dgFWo.js";import{c as w}from"./constrain-slots-I5VCMCIw.js";import{t as k}from"./tokens.style-DuOE18tp.js";const $="@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_padding-inline: var(--gds-space-m);--_padding-block: var(--gds-space-xs);--_color-bg: transparent;--_color-text: var(--gds-sys-color-primary-text);--_color-border: transparent;--_color-outline-alpha: 60%;--_color-outline: var(--gds-sys-color-border-stroke);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;display:inline-block;isolation:isolate;max-width:100%;height:100%}}@layer core{.button{align-items:center;background-color:var(--_color-bg);border-color:var(--_color-border);border-style:none;border-bottom-style:solid;border-bottom-width:2px;box-sizing:border-box;color:var(--_color-text);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height)}.button:focus-visible{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}.button:hover,.button.selected:hover,.button:active{--_color-bg: var(--gds-sys-color-base200);--_color-border: var(--gds-sys-color-base600)}.button.selected{--_color-bg: var(--gds-sys-color-base100);--_color-border: var(--gds-sys-color-base700)}.button slot:not([name]){display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.compact{display:flex;flex-direction:column;--_padding-inline: var(--gds-space-s);--_gap: 1px;font-size:.875rem;height:56px;justify-content:center}.compact>slot[name]{order:0}.compact>slot:not([name]){order:1}a{text-decoration:none}}@layer disabled{:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}";var z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},s=(t,e,r,c)=>{for(var n=c>1?void 0:c?B(e,r):e,h=t.length-1,b;h>=0;h--)(b=t[h])&&(n=(c?b(e,r,n):b(n))||n);return c&&n&&z(e,r,n),n},C=(t,e,r)=>e.has(t)||v("Cannot "+r),i=(t,e,r)=>(C(t,e,"read from private field"),r?r.call(t):e.get(t)),G=(t,e,r)=>e.has(t)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),a,d,f;let o=class extends m{constructor(){super(),G(this,a),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,w(this)}render(){const t={button:!0,selected:this.selected,compact:this.compact},e=i(this,a,d)?g`a`:g`button`;return x`
      <${e}
        class="${y(t)}"
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
    `}};a=new WeakSet;d=function(){return this.href.length>0};f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[k,u($)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([l()],o.prototype,"label",2);s([l()],o.prototype,"href",2);s([l()],o.prototype,"target",2);s([l()],o.prototype,"rel",2);s([l()],o.prototype,"download",2);s([l({type:Boolean,reflect:!0})],o.prototype,"compact",2);s([l({type:Boolean,reflect:!0})],o.prototype,"selected",2);o=s([_("gds-menu-button")],o);
