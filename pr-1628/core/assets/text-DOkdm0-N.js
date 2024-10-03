import{R as p}from"./class-map-BBGuaYF3.js";import{k as d,t as v}from"./static-C_6dgFWo.js";import{n as h,g as x,G as m}from"./gds-element-QykLKB9o.js";import{t as c}from"./tokens.style-DuOE18tp.js";import{s as o}from"./style-expression-property-kwoZE6wC.js";import{i as f}from"./lit-element-BoQqPHl6.js";const z=f`
  :host {
    display: contents;
  }

  * {
    margin: unset;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  h1.no-size-set {
    font-size: var(--gds-text-size-heading-xl);
    line-height: var(--gds-text-line-height-heading-xl);
    font-weight: var(--gds-text-weight-regular);
  }

  h2.no-size-set {
    font-size: var(--gds-text-size-heading-l);
    line-height: var(--gds-text-line-height-heading-l);
    font-weight: var(--gds-text-weight-regular);
  }

  h3.no-size-set {
    font-size: var(--gds-text-size-heading-m);
    line-height: var(--gds-text-line-height-heading-m);
    font-weight: var(--gds-text-weight-regular);
  }

  h4.no-size-set {
    font-size: var(--gds-text-size-heading-s);
    line-height: var(--gds-text-line-height-heading-s);
    font-weight: var(--gds-text-weight-regular);
  }

  h5.no-size-set {
    font-size: var(--gds-text-size-heading-xs);
    line-height: var(--gds-text-line-height-heading-xs);
    font-weight: var(--gds-text-weight-regular);
  }

  h6.no-size-set {
    font-size: var(--gds-text-size-heading-2xs);
    line-height: var(--gds-text-line-height-heading-2xs);
    font-weight: var(--gds-text-weight-regular);
  }

  p.no-size-set,
  span.no-size-set,
  em.no-size-set,
  strong.no-size-set,
  mark.no-size-set {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
  }

  small.no-size-set {
    font-size: var(--gds-text-size-detail-xs);
    line-height: var(--gds-text-line-height-detail-xs);
  }

  strong.no-weight-set {
    font-weight: var(--gds-text-weight-book);
  }

  .lines-set {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: var(--_lines);
  }
`;var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,s=(e,i,r,a)=>{for(var n=a>1?void 0:a?w(i,r):i,l=e.length-1,g;l>=0;l--)(g=e[l])&&(n=(a?g(i,r,n):g(n))||n);return a&&n&&y(i,r,n),n};let t=class extends m{constructor(){super(...arguments),this.level="2",this.tag="span"}render(){const e=encodeURI(this.tag),i=v(e),r={"no-size-set":!this["font-size"],"no-weight-set":!this["font-weight"],"lines-set":!!this.lines};return d`<${i} tag class=${p(r)}><slot></slot></${i}>`}};t.styles=[c,z];s([h()],t.prototype,"level",2);s([h({type:String})],t.prototype,"tag",2);s([o({valueTemplate:e=>`${e}`,selector:"[tag]",styleTemplate:(e,i)=>{const r=i[0],a=`font-size: var(--gds-text-size-${r});`,n=`line-height: var(--gds-text-line-height-${r});`;return a+n}})],t.prototype,"font-size",2);s([o({property:"font-weight",selector:"[tag]",valueTemplate:e=>`var(--gds-text-weight-${e})`})],t.prototype,"font-weight",2);s([o({property:"margin",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"margin",2);s([o({selector:"[tag]",valueTemplate:e=>e})],t.prototype,"isolation",2);s([o({property:"text-wrap",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"text-wrap",2);s([o({property:"text-transform",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"text-transform",2);s([o({property:"max-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"max-width",2);s([o({property:"min-width",selector:"[tag]",valueTemplate:e=>`${e}ch`})],t.prototype,"min-width",2);s([o({property:"text-align",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"text-align",2);s([o({property:"--_lines",selector:"[tag]",valueTemplate:e=>e})],t.prototype,"lines",2);s([o({property:"color",selector:"[tag]",valueTemplate:function(e){const[i,r]=e.split("/");return r?`color-mix(in srgb, var(--gds-color-${"l"+this.level}-content-${i}) ${parseFloat(r)*100}%, transparent 0%)`:`var(--gds-color-${"l"+this.level}-content-${i})`}})],t.prototype,"color",2);t=s([x("gds-text")],t);
